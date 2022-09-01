const tosListItem = ({ id, content, check, more }) => `
  <li class="signup__tos__item">
    <input type="checkbox" name="tosCheck" class="signup__tos-check" id="tos-chk${id}" />
    <label for="tos-chk${id}">
      <span class="check-rounded"></span>
      <span class="agreement-text">${content}</span>
    </label>
    ${check ? `<a href="#" class="link-more">${more}</a>` : ''}
  </li>
`;

export default tosListItem;
