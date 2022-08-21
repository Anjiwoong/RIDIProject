const NewArrivalSection = () => {
  const data = [
    {
      title: '신간',
      iconClass: 'bx bx-book-open',
    },
    {
      title: '이벤트',
      iconClass: 'bx bx-bell',
    },
    {
      title: '독점',
      iconClass: 'bx bx-planet',
    },
    {
      title: '리다무',
      iconClass: 'bx bx-time-five',
    },
    {
      title: '요일 연재',
      iconClass: 'bx bx-pin',
    },
    {
      title: '19+',
      iconClass: 'bx bx-heart',
    },
    {
      title: '이달의 신작',
      iconClass: 'bx bx-clipboard',
    },
    {
      title: '위클리 쿠폰',
      iconClass: 'bx bx-cube',
    },
  ];

  // prettier-ignore
  return `
  <section class="new-arrival">
    <ul class="new-arrival__list">
    ${data.map(({title, iconClass}) => `
    <li class="new-arrival__item">
      <a href="#" class="new-arrival__link">
        <div class="new-arrival__icon">
          <i class="${iconClass}"></i>
        </div>
        <span class="new-arrival__title">${title}</span>
      </a>
    </li>
    `).join('')}
    </ul>
  </section>`;
};

export default NewArrivalSection;
