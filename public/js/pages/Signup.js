import { createElement } from '../app.js';

// 회원가입 스키마
const signupSchema = {
  userId: {
    id: '아이디',
    value: '',
    get isValid() {
      return /^[A-Za-z0-9]{4,15}$/.test(this.value);
    },
    message: '4~10자 영문, 숫자 입력',
    error: '! 아이디를 입력해 주세요.',
  },

  password: {
    id: '비밀번호',
    value: '',
    get isValid() {
      return /^[A-Za-z0-9]{6,12}$/.test(this.value);
    },
    message: '6~12자 영문, 숫자 중 2가지 이상 입력',
    error: '! 비밀번호 형식에 맞게 입력해 주세요.',
  },

  confirmPassword: {
    id: '비밀번호 확인',
    value: '',
    get isValid() {
      return signupSchema.password.value === this.value;
    },
    message: '비밀번호 재입력',
    error: '! 패스워드가 일치하지 않습니다.',
  },

  userEmail: {
    id: '이메일 주소',
    value: '',
    get isValid() {
      return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(this.value);
    },
    message: '이메일 주소',
    error: '! 이메일 형식에 맞게 입력해 주세요.',
  },

  username: {
    id: '이름',
    value: '',
    get isValid() {
      return !!this.value && /^[가-힣]{2,5}$/.test(this.value);
    },
    message: '이름',
    error: '! 이름을 입력해 주세요.',
  },

  birth: {
    id: '출생년도',
    value: '',
    get isValid() {
      return /^[0-9]{4,4}$/.test(this.value);
    },
    message: '예) 1991',
    error: '! 출생년도 4자리를 입력해 주세요.',
  },

  tosCheck: {
    value: false,
    get isValid() {
      return this.value;
    },
  },

  get isValid() {
    return (
      this.userId.isValid &&
      this.password.isValid &&
      this.confirmPassword.isValid &&
      this.userEmail.isValid &&
      this.username.isValid &&
      this.birth.isValid &&
      this.tosCheck.isValid
    );
  },
};

// const throttle = (callback, delay) => {
//   let timerId;
//   return event => {
//     if (timerId) return;
//     timerId = setTimeout(
//       () => {
//         callback(event);
//         timerId = null;
//       },
//       delay,
//       event
//     );
//   };
// };

const joinMembership = async e => {
  if (!e.target.matches('.btn-submit')) return;
  e.preventDefault();

  const $signupForm = document.querySelector('.signup__form');

  const payload = [...new FormData($signupForm)].reduce(
    // eslint-disable-next-line no-return-assign, no-sequences
    (obj, [key, value]) => ((obj[key] = value), obj),
    {}
  );

  try {
    await axios.post(`/signup`, payload);
    window.location.href = '/';
  } catch (e) {
    console.log('😰 오류!! 회원가입에 실패했습니다.');
  }
};

const changeBtnStyle = () => {
  const $btnSubmit = document.querySelector('.btn-submit');
  signupSchema.isValid ? $btnSubmit.removeAttribute('disabled') : ($btnSubmit.disabled = true);
};

const checkInputFormat = e => {
  if (!e.target.matches('.signup__input__box')) return;

  const $errorMessage = e.target.closest('.signup__container').lastElementChild;
  const $fomatText = e.target.previousElementSibling; // span
  const { name, value } = e.target;

  signupSchema[name].value = value.trim();

  // style
  if (value) {
    $fomatText.classList.add('focus-text');
    $fomatText.textContent = signupSchema[name].message;
    if (signupSchema[name].isValid) {
      e.target.classList.add('is-correct');
      e.target.style.color = '#141414';
      e.target.style.fontWeight = 700;
      $fomatText.textContent = signupSchema[name].id;
      $fomatText.style.color = '#808991';
      $errorMessage.textContent = '';
    } else {
      e.target.classList.remove('is-correct');
      e.target.style.color = '#e64938';
      e.target.style.fontWeight = 'normal';
      $fomatText.style.color = '#1f8ce6';
      $errorMessage.textContent = signupSchema[name].error;
    }
  } else {
    $fomatText.classList.remove('focus-text');
    $fomatText.textContent = signupSchema[name].id;
    $fomatText.style.color = '#808991';
    $errorMessage.textContent = '';
  }

  changeBtnStyle();
};

const essentialValidate = e => {
  const $tosChk2 = document.querySelector('#tos-chk2');
  const $tosChk5 = document.querySelector('#tos-chk5');
  const { name } = e.target;
  signupSchema[name].value = $tosChk2.checked && $tosChk5.checked;
};

const allAgree = e => {
  if (!e.target.matches('.signup__all-check')) return;

  const $tosItem = document.querySelectorAll('.signup__tos__item');

  if (e.target.checked) {
    $tosItem.forEach(list => {
      list.firstElementChild.checked = true;
    });
  } else {
    $tosItem.forEach(list => {
      list.firstElementChild.checked = false;
    });
  }

  essentialValidate(e);
  changeBtnStyle();
};

const tosAgree = e => {
  if (!e.target.matches('.signup__tos-check')) return;

  essentialValidate(e);
  changeBtnStyle();
};

const selectGender = e => {
  if (!e.target.matches('[type="button"]')) return;

  document.querySelector('.is-selected').classList.remove('is-selected');
  e.target.classList.add('is-selected');
};

const focusInput = e => {
  if (!e.target.matches('.signup__input__text')) return;

  e.target.classList.add('focus-text');
  e.target.nextElementSibling.focus();
};

const signupEventBinding = () => {
  const $root = document.getElementById('root');
  $root.addEventListener('input', checkInputFormat);
  $root.addEventListener('click', focusInput);
  $root.addEventListener('click', allAgree);
  $root.addEventListener('click', tosAgree);
  $root.addEventListener('click', selectGender);
  $root.addEventListener('click', joinMembership);
};

const Signup = () => {
  signupEventBinding();

  return createElement(`
    <div class="signup">
      <div class="signup__header">
        <h1>
          <a href="/" class="link-mainpage">RIDI</a>
        </h1>
      </div>
      <form class="signup__form" method="POST">
        <fieldset>
          <legend>회원가입</legend>
          <div class="signup__input__area signup__container">
            <span class="signup__input__text">아이디</span>
            <input type="text" name="userId" class="signup__input__box" autocomplete="off"/>
            <span class="signup__error-message"></span>
          </div>
          <div class="signup__password signup__container">
            <div class="signup__input__area">
              <span class="signup__input__text">비밀번호</span>
              <input type="password" name="password" class="signup__input__box" />
            </div>
            <div class="signup__input__area">
              <span class="signup__input__text">비밀번호 확인</span>
              <input type="password" name="confirmPassword" class="signup__input__box" />
              </div>
              <span class="signup__error-message"></span>
          </div>
          <div class="signup__input__area signup__container">
            <span class="signup__input__text">이메일 주소</span>
            <input type="email" name="userEmail" class="signup__input__box" />
            <span class="signup__error-message"></span>
          </div>
          <div class="signup__input__area signup__container">
            <span class="signup__input__text">이름</span>
            <input type="text" name="username" class="signup__input__box" />
            <span class="signup__error-message"></span>
          </div>
          <div class="signup__option signup__container">
            <p class="signup__option__title">선택 입력</p>
            <div class="signup__option__area">
              <div class="signup__option__area__birth">
                <span class="signup__input__text">출생년도</span>
                <input type="text" name="birth" class="signup__input__box user-birth" />
              </div>
              <div class="signup__option__area__gender">
                <button class="btn-man is-selected" aria-label="남성" type="button">남</button
                ><button class="btn-woman" aria-label="여성" type="button">여</button>
              </div>
            </div>
            <span class="signup__error-message"></span>
          </div>
          <div class="signup__tos">
            <div class="all-agree">
              <input type="checkbox" name="tosCheck" class="signup__all-check" id="signup-chk1"/>
              <label for="signup-chk1">
                <span class="check-rounded"></span>
                <span class="agreement-text">선택 포함 전체 약관 동의</span>
              </label>
            </div>
            <ul class="signup__tos__list">
              <li class="signup__tos__item">
                <input type="checkbox" name="tosCheck" class="signup__tos-check" id="tos-chk2" />
                <label for="tos-chk2">
                  <span class="check-rounded"></span>
                  <span class="agreement-text">이용약관 동의(필수)</span>
                </label>
                <a href="#" class="link-more">약관 보기</a>
              </li>
              <li class="signup__tos__item">
                <input type="checkbox" name="tosCheck" class="signup__tos-check" id="tos-chk3" />
                <label for="tos-chk3">
                  <span class="check-rounded"></span>
                  <span class="agreement-text">이벤트, 혜택 알림 수신 동의(선택)</span>
                </label>
              </li>
              <li class="signup__tos__item">
                <input type="checkbox" name="tosCheck" class="signup__tos-check" id="tos-chk4" />
                <label for="tos-chk4">
                  <span class="check-rounded"></span>
                  <span class="agreement-text">성별, 생년 정보 제공 동의(선택)</span>
                </label>
                <a href="#" class="link-more">내용 확인</a>
              </li>
              <li class="signup__tos__item">
                <input type="checkbox" name="tosCheck" class="signup__tos-check" id="tos-chk5" />
                <label for="tos-chk5">
                  <span class="check-rounded"></span>
                  <span class="agreement-text">개인 정보 수집 및 이용 동의(필수)</span>
                </label>
                <a href="#" class="link-more">내용 확인</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <button type="submit" class="btn-submit" disabled>회원 가입 완료</button>
          </a>
        </fieldset>
      </form>
    </div>
    `);
};

export default Signup;
