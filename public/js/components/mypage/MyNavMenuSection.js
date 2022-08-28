import MySectionListItem from './MySectionListItem.js';

const MyNavMenuSection = (nav, index, href) => !index
  ? `
      <div class="my__nav__menu__section">
        <a class="my__nav__menu__home ${href === nav.href[index] ? 'active' : ''}" href="${nav.href[index]}">
          <i class="bx bxs-${nav.icon} my__left__icon ${href === nav.href[index] ? 'active' : ''}"></i>${nav.title}
        </a>
      </div>
    `
    : `
    <div class="my__nav__menu__section ${nav.title === '개인' ? 'account' : ''}">
      <h4 class="my__nav__menu__section__title"><i class="bx bxs-${nav.icon} my__left__icon"></i>${nav.title}</h4>
      <ul class="my__nav__menu__section__list">
        ${nav.subTitle.map((title, i) => MySectionListItem(title, nav, i, href)).join('')}
      </ul>
    </div>
    `;

export default MyNavMenuSection;
