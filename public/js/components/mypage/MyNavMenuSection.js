import MySectionListItem from "./MySectionListItem.js";

const MyNavMenuSection = (nav, index) => !index
  ? `
      <div class="my__nav__menu__section">
        <a class="my__nav__menu__home active" href="/mypage">
          <i class="bx bxs-${nav.icon} my__left__icon active"></i>${nav.title}
        </a>
      </div>
    `
  : `
    <div class="my__nav__menu__section">
      <h4 class="my__nav__menu__section__title"><i class="bx bxs-${nav.icon} my__left__icon"></i>${nav.title}</h4>
      <ul class="my__nav__menu__section__list">
      ${nav.subTitle.map((title, i) => MySectionListItem(title, nav, i)).join('')}
      </ul>
    </div>
    `;

export default MyNavMenuSection;