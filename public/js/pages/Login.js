import { createElement } from '../app.js';
import render from '../index.js';

const returnSpace = e => {
  if (e.key === ' ' || e.keyCode === 32) e.preventDefault();
};

const validate = () => {
  const idValue = document.querySelector('.user-id').value.trim();
  const pwValue = document.querySelector('.user-pw').value.trim();
  const $loginErrorMessage = document.querySelector('.login__error-message');

  if (!idValue) {
    $loginErrorMessage.textContent = '! 아이디를 입력해주세요.';
    return false;
  }
  if (!pwValue) {
    $loginErrorMessage.textContent = '! 비밀번호를 입력해주세요.';
    return false;
  }

  return true;
};

const request = async e => {
  e.preventDefault();
  if (!e.target.closest('.login-form') || !validate()) return;

  const $signinForm = document.querySelector('.login-form');

  const payload = [...new FormData($signinForm)].reduce(
    // eslint-disable-next-line no-return-assign, no-sequences
    (obj, [key, value]) => ((obj[key] = value), obj),
    {}
  );

  try {
    const { data: user } = await axios.post('/login', payload);
    const token = user.accessToken.split('.')[1];
    localStorage.setItem('token', token);

    console.log('😀 LOGIN SUCCESS!');

    if (user) {
      const path = '/';
      window.history.pushState({}, null, path);
      render(path);
    }
  } catch (e) {
    console.log('😱 LOGIN FAILURE..');
    document.querySelector('.login__error-message').textContent = '! 아이디 또는 비밀번호를 확인해주세요.';
  }
};

const loginEventBinding = () => {
  const $root = document.getElementById('root');
  $root.addEventListener('keydown', returnSpace);
  $root.addEventListener('submit', request);
};

const Login = () => {
  loginEventBinding();

  return createElement(`
  <div class="login">
    <div class="login__header">
      <h1>
        <a href="/" class="link-mainpage">COTAKU</a>
      </h1>
    </div>
    <form class="login-form" method="POST">
      <fieldset>
        <legend>로그인</legend>
        <input type="text" name="userid" class="user-id" placeholder="아이디" />
        <input type="password" name="password" class="user-pw" placeholder="비밀번호" />
        <div class="login__info">
          <div class="login__info__left">
            <input type="checkbox" class="login-check" id="login-chk" />
            <label for="login-chk">
              <span class="save-box"></span>
              <span>로그인 상태 유지</span>
            </label>
          </div>
          <div class="login__info__right">
            <span role="button" class="search-id">아이디 찾기</span>
            <span role="button" class="search-pw">비밀번호 재설정</span>
          </div>
        </div>
        <span class="login__error-message"></span>
        <button class="login-btn">로그인</button>
        </fieldset>
        </form>
        <a href="/signup" class="login__signup-link">
          <button class="signin-btn">회원가입</button>
        </a>
  </div>
  `);
};

export default Login;
