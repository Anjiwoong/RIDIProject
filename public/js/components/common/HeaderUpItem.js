const HeaderUpItem = ({ dotClass, isSelected, title, rightArrow }) => `
  <li class="header-top__category__item ${dotClass ? 'dot' : ''}">
    <a href="" class="header-top__category__link ${isSelected ? 'is-selected' : ''}">
    ${title} ${rightArrow ? '<i class="bx bx-chevron-right"></i>' : ''}
    </a>
  </li>
`;

export default HeaderUpItem;
