const HeaderDownItem = ({ icon, iconClass }, isLogin) => `
  <li class="header-down__item">
    <a href="${isLogin ? '/mypage' : '/login'}" class="header-down__link ${icon}">
      <i class="${iconClass}"></i>
    </a>
  </li>
`;

export default HeaderDownItem;
