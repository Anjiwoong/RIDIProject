import { createElement, fetchData } from '../app.js';

const Login = async (params, title) => {
  const data = await fetchData('/data/webtoon.json');

  return createElement(`
  <div class="login">
    <div class="login__header">
      <h1>
        <a href="#" class="link-mainpage">RIDI</a>
      </h1>
    </div>
    <form class="login-form" method="POST">
      <fieldset>
        <legend>로그인</legend>
        <input type="text" class="user-id" placeholder="아이디" />
        <input type="password" class="user-pw" placeholder="비밀번호" />
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
        <button class="login-btn">로그인</button>
        <a href="/signup">
          <button class="signin-btn">회원가입</button>
        </a>
      </fieldset>
    </form>
  </div>
  `);
};

export default Login;
