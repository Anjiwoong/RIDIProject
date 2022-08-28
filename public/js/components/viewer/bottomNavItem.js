const bottomNavItem = (item, index) => `
<li>
  <button class="viewer__footer__bottom__button">
    <a href="${item.href}" class="viewer__footer__bottom__link" data-title='${!index ? item.title : ''}'">
      <i class="bx ${item.icon}"></i>
      <span class="viewer__footer__bottom__title">${item.navTitle}</span>
    </a>
  </button>
</li>
`

export default bottomNavItem;