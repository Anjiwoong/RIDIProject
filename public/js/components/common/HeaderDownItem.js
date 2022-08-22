const HeaderDownItem = ({ icon, iconClass }) => `
  <li class="header-down__item">
    <a href="/login" class="header-down__link ${icon}">
      <i class="${iconClass}"></i>
    </a>
  </li>
`;

export default HeaderDownItem;
