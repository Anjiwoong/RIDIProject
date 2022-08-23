const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const users = require('./fake-data/users');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());

const auth = (req, res, next) => {
  const { accessToken } = req.cookies;
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    console.log(`😀 사용자 인증 성공`, decoded);
    next();
  } catch (e) {
    console.log(req.path);
    console.error('😱 사용자 인증 실패..', e);
    if (req.path !== '/login') {
      res.redirect('/login');
    }
    next();
  }
};

// 브라우저 새로고침을 위한 처리 (다른 route가 존재하는 경우 맨 아래에 위치해야 한다)
// 브라우저 새로고침 시 서버는 index.html을 전달하고 클라이언트는 window.location.pathname를 참조해 다시 라우팅한다.

app.get('*', auth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/login', (req, res) => {
  const { userid, password } = req.body;

  // 401 Unauthorized
  if (!userid || !password)
    return res.status(401).send({ error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.' });

  const user = users.findUser(userid, password);
  console.log('사용자 정보:', user);

  // 401 Unauthorized
  if (!user) return res.status(401).send({ error: '등록되지 않은 사용자입니다.' });

  // 토큰 생성
  const accessToken = jwt.sign({ userid }, process.env.JWT_SECRET_KEY, {
    expiresIn: '20s',
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7d
    httpOnly: true,
  });

  // 로그인 성공
  res.send({ userid, username: user.name });
});

app.listen(PORT, () => {
  console.log(`Server listening on http:/localhost:${PORT}`);
});
