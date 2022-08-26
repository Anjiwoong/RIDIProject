import MyRidiRecentsItem from './MyRidiRecentsItem.js';

const MyRidiRecents = (isEmpty, payload) => {
  const recentData = JSON.parse(localStorage.getItem(payload.userId));

  // prettier-ignore
  return `${isEmpty
    ? `<div class="my__recents__empty">
          <p class="my__recents__empty__desc">최근 조회한 작품이 없습니다.</p>
        </div>`
    : `<ul class="my__recents__books">
        ${recentData.map(data => MyRidiRecentsItem(data)).join('')}
      </ul>
  `}`;
};

export default MyRidiRecents;
