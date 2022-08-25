const MyRidiRecentsItem = ({ title, cover, author }) =>
  `
  <li className="my__recents__books__item">
    <a href="/webtoon" className="my__recents__books__link" data-title="${title}">
      <div class="my__book__thumbnail__wrapper">
        <div class="my__book__thumbnail">
          <img
            class="my__thumbnail"
            src="${cover}"
            alt="상수리나무 아래 1화" />
        </div>
      </div>
      <div class="my__book__metadata__wrapper">
        <h3 class="my__meta__title">
          <a class="my__title__link" href="/webtoon" data-title="${title}">
            <span class="my__title__text">${title}</span>
          </a>
        </h3>
        <p class="my__author">
          <a class="my__author__detail__link" href="/author/109876">${author}</a>
        </p>
      </div>
    </a>
  </li> 
`;
export default MyRidiRecentsItem;
