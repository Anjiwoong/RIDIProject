import MyRecentSectionItem from './MyRecentSectionItem.js';

const MyRecentSection = data => {
  const $root = document.getElementById('root');
  const { payload } = data;
  const isEmpty = !localStorage.getItem(payload.userId);
  const recentData = JSON.parse(localStorage.getItem(payload.userId));

  $root.addEventListener('click', e => {
    if (!e.target.classList.contains('recent__fill__button')) return;

    localStorage.removeItem(payload.userId);
  });

  return `
  <section class="recent">
    <article class="recent__container">
      <h2 class="recent__title">최근 조회한 작품</h2>
      ${
        isEmpty
          ? `
        <div class="recent__empty">
          <i class='bx bx-book-open'></i>
          <span class="recent__empty__title">최근 조회한 작품이 없습니다.</span>
        </div>
      `
          : `
          <div class="recent__fill">
            <div class="recent__fill__clear-btn">
              <a href="/mypage" type="button"  class="recent__fill__button">전체 삭제</a>
            </div>
            <ul class="recent__fill__list">
              ${recentData.map(data => MyRecentSectionItem(data)).join('')}
            </ul>
          </div>
          `
      }
    </article>
  </section>
`;
};

export default MyRecentSection;
