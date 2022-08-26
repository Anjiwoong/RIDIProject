import { createElement } from '../app.js';

// 회원가입 스키마
const signupSchema = {
  userid: {
    value: '',
    get isValid() {
      return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(this.value);
    },
    error: '이메일 형식에 맞게 입력해 주세요.',
  },

  userEmail: {
    value: '',
    get isValid() {
      return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(this.value);
    },
    error: '이메일 형식에 맞게 입력해 주세요.',
  },

  password: {
    value: '',
    get isValid() {
      return /^[A-Za-z0-9]{6,12}$/.test(this.value);
    },
    error: '영문 또는 숫자를 6~12자 입력하세요.',
  },

  username: {
    value: '',
    get isValid() {
      return !!this.value;
    },
    error: '이름을 입력해 주세요.',
  },

  birth: {
    value: '',
    get isValid() {
      return /^[0-9]{4,4}$/.test(this.value);
    },
    error: '출생연도 입력해 주세요.',
  },

  'confirm-password': {
    value: '',
    get isValid() {
      return signupSchema.password.value === this.value;
    },
    error: '패스워드가 일치하지 않습니다.',
  },
  get isValid() {
    return (
      this.userid.isValid &&
      this.userid.isValid &&
      this.username.isValid &&
      this.password.isValid &&
      this['confirm-password'].isValid
    );
  },
};

const Signup = () =>
  createElement(`
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
          <input type="text" name="userid" class="signup__input__box" />
        </div>
        <div class="signup__password">
          <div class="signup__input__area">
            <span class="signup__input__text focus-text">비밀번호</span>
            <input type="password" name="password" class="signup__input__box" />
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
              <input type="text" name="birth" class="signup__input__box user-birth" />
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

export default Signup;
