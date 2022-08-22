import { createElement, fetchData } from '../app.js';

const Signup = async (params, title) => {
  const data = await fetchData('/data/webtoon.json');

  return createElement(`
  <div class="signup">
    <div class="signup__header">
      <h1>
        <a href="#" class="link-mainpage">RIDI</a>
      </h1>
    </div>
    <form class="signup__form" method="POST">
      <fieldset>
        <legend>회원가입</legend>
        <div class="signup__input__area">
          <span class="signup__input__text focus-text">아이디</span>
          <input type="text" class="signup__input__box" />
        </div>
        <div class="signup__password">
          <div class="signup__input__area">
            <span class="signup__input__text focus-text">비밀번호</span>
            <input type="password" class="signup__input__box" />
          </div>
          <div class="signup__input__area">
            <span class="signup__input__text focus-text">비밀번호 확인</span>
            <input type="password" class="signup__input__box" />
          </div>
        </div>
        <div class="signup__input__area">
          <span class="signup__input__text focus-text">이메일 주소</span>
          <input type="email" class="signup__input__box" />
        </div>
        <div class="signup__input__area">
          <span class="signup__input__text focus-text">이름</span>
          <input type="text" class="signup__input__box is-correct" />
        </div>
        <div class="signup__option">
          <p class="signup__option__title">선택 입력</p>
          <div class="signup__option__area">
            <div class="signup__option__area__birth">
              <span class="signup__input__text focus-text">출생년도</span>
              <input type="text" class="signup__input__box user-birth" />
            </div>
            <div class="signup__option__area__gender">
              <button class="btn-man is-selected" aria-label="남성" type="button">남</button
              ><button class="btn-woman" aria-label="여성" type="button">여</button>
            </div>
          </div>
        </div>
        <div class="signup__tos">
          <div class="all-agree">
            <input type="checkbox" class="signup__tos-check" id="signup-chk1" />
            <label for="signup-chk1">
              <span class="check-rounded"></span>
              <span class="agreement-text">선택 포함 전체 약관 동의</span>
            </label>
          </div>
          <ul class="signup__tos__list">
            <li class="signup__tos__item">
              <input type="checkbox" id="tos-chk2" />
              <label for="tos-chk2">
                <span class="check-rounded"></span>
                <span class="agreement-text">이용약관 동의(필수)</span>
              </label>
              <a href="#" class="link-more">약관 보기</a>
            </li>
            <li class="signup__tos__item">
              <input type="checkbox" id="tos-chk3" />
              <label for="tos-chk3">
                <span class="check-rounded"></span>
                <span class="agreement-text">이벤트, 혜택 알림 수신 동의(선택)</span>
              </label>
            </li>
            <li class="signup__tos__item">
              <input type="checkbox" id="tos-chk4" />
              <label for="tos-chk4">
                <span class="check-rounded"></span>
                <span class="agreement-text">성별, 생년 정보 제공 동의(선택)</span>
              </label>
              <a href="#" class="link-more">내용 확인</a>
            </li>
            <li class="signup__tos__item">
              <input type="checkbox" id="tos-chk5" />
              <label for="tos-chk5">
                <span class="check-rounded"></span>
                <span class="agreement-text">개인 정보 수집 및 이용 동의(필수)</span>
              </label>
              <a href="#" class="link-more">내용 확인</a>
            </li>
          </ul>
        </div>
        <a href="/">
          <button class="btn-submit">회원 가입 완료</button>
        </a>
      </fieldset>
    </form>
  </div>
  `);
};

export default Signup;