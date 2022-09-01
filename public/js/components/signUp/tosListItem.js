const tosListItem = data => `
  <li class="signup__tos__item">
    <input type="checkbox" name="tosCheck" class="signup__tos-check" id="tos-chk${data.id}" />
    <label for="tos-chk${data.id}">
      <span class="check-rounded"></span>
      <span class="agreement-text">${data.content}</span>
    </label>
    ${data.check ? `<a href="#" class="link-more">${data.more}</a>` : ''}
  </li>
`;

export default tosListItem;
