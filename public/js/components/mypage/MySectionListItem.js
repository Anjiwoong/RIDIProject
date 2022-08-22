const MySectionListItem = (title, nav, index) => `
  <li class="my__section__list__element">
    <a class="my__section__link" href="${nav.href[index]}">${title}</a>
  </li>
`;

export default MySectionListItem;