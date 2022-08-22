const MyRidiCashSelectItem = (price, index) => {
  const savingRate = index < 4 ? 3 : index < 7 ? 4 : 5;

  const point = +price.replace(/\D/g, '') * (savingRate / 100);

  return `<div class="my__ridicash__select__list">
    <input type="radio" class="my__ridisash__radio" name="base" id="radio${index + 1}" ${!index ? 'checked' : ''} />
    <label for="radio${index + 1}">
      <span>${price}</span>
      <span>${savingRate}%</span>
      <span><em>+</em> ${point} <em>원</em></span>
    </label>
  </div>
  `
}

export default MyRidiCashSelectItem;