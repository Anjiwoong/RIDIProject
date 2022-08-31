const express = require('express');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const users = require('./fake-data/users');

require('dotenv').config();

const PORT = process.env.PORT || 8800;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());

const auth = (req, res) => {
  const { accessToken } = req.cookies;
  try {
    jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    console.log(`😀 사용자 인증 성공`);
    res.send(true);
  } catch (e) {
    console.error('😱 사용자 인증 실패..', e);
    res.send(false);
  }
};

app.get('/auth', auth);

app.get('/mypage', (req, res) => {
  try {
    jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET_KEY);
    res.sendFile(path.join(__dirname, 'public/index.html'));
  } catch (e) {
    res.redirect('/');
  }
});

app.post('/login', (req, res) => {
  const { userid, password } = req.body;
  console.log(userid, password);

  // 401 Unauthorized
  if (!userid || !password)
    return res.status(401).send({ error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.' });

  const user = users.findUser(userid, password);
  const { userId, birth, email } = user;

  console.log('사용자 정보:', user);

  // 401 Unauthorized
  if (!user) return res.status(401).send({ error: '등록되지 않은 사용자입니다.' });

  // 토큰 생성
  const accessToken = jwt.sign({ userId, birth, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1d',
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 1, // 1d
    httpOnly: true,
  });

  // 로그인 성공
  res.send({ userid, birth, accessToken });
});

app.post('/signup', (req, res) => {
  const { userId, password, birth, userEmail } = req.body;
  users.createUser(userId, password, birth, userEmail);
  res.end();
});

// 브라우저 새로고침을 위한 처리 (**다른 route가 존재하는 경우 맨 아래에 위치해야 한다)
// 브라우저 새로고침 시 서버는 index.html을 전달하고 클라이언트는 window.location.pathname를 참조해 다시 라우팅한다.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http:/localhost:${PORT}`);
});

module.exports = app;
