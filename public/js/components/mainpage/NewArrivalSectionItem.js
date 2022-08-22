const NewArrivalSectionItem = ({ iconClass, title }) => `
  <li class="new-arrival__item">
    <a href="#" class="new-arrival__link">
      <div class="new-arrival__icon">
        <i class="${iconClass}"></i>
      </div>
      <span class="new-arrival__title">${title}</span>
    </a>
  </li>
`;

export default NewArrivalSectionItem;
