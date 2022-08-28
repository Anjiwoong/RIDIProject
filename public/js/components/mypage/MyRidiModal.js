const MyRidiModal = () => `
  <div class="my__myridi__modal">
    <div class="my__myridi__modal__dimmed"></div>
    <div class="my__myridi__modal__popup">
      <div class="my__myridi__modal__popup__header">
        <h3 class="my__myridi__modal__popup__title">쿠폰 등록</h3>
        <button class="my__myridi__modal__close-btn"><span><i class='bx bx-x' ></i></span></button>
      </div>
      <div class="my__myridi__modal__popup__content">
        <p>쿠폰 번호를 입력해주세요!</p>
        <input type="text" placeholder="일련번호 20자리를 입력해주세요." />
        <button class="my__myridi__modal__register__btn">등록</button>
        <ul>
          <li>쿠폰 등록 후 기간,혜택,사용 조건 등을 꼭 확인하세요.</li>
          <li>리디 쿠폰은 등록 시 바로 사용할 수 있습니다.</li>
          <li>쿠폰번호 등록 시, 하이픈('-')은 안 넣으셔도 됩니다.</li>
          <li><span>알파벳 O와 숫자 0</span>을 명확히 구분하여 입력하세요.</li>
        </ul>
      </div>
    </div>
  </div>
`

export default MyRidiModal;