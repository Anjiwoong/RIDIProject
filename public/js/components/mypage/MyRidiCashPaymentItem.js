const MyRidiCashPaymentItem = (method, index) => {
  const methodClassNames = ['naver-pay', 'kakao-pay', 'samsung-pay', 'payco'];
  return `
<li class="my__ridicash__payment__list">
  <input type="radio" name="pay-type" id="pay-type${index}" />
  <label for="pay-type${index}" class="my__ridicash__payment__list__label">
    <span class="${methodClassNames[index]}">${method}</span>
  </label>
</li>
`;
};

export default MyRidiCashPaymentItem;