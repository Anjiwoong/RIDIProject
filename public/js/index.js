import { fetchData, getPayload } from './app.js';
import { Home, NotFound, Webtoon, MyPage, Login, Signup, MyRidiCashPage, Viewer, MyRecent } from './pages/index.js';

const $root = document.getElementById('root');

const routes = [
  { path: '/', component: Home },
  { path: '/webtoon', component: Webtoon },
  { path: '/webtoon/:id', component: Viewer },
  { path: '/mypage', component: MyPage },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/myridicash', component: MyRidiCashPage },
  { path: '/recent', component: MyRecent },
];

const render = async path => {
  try {
    let paramsId = 0;

    const component =
      routes.find(route => {
        let check = true;
        const targetPath = path.split('/').slice(1);
        const routePath = route.path.split('/').slice(1);

        if (targetPath.length !== routePath.length) {
          check = false;
          return check;
        }

        if (targetPath.every((string, index) => string === routePath[index])) return check;

        targetPath.forEach((str, i) => {
          if (str !== routePath[i]) {
            if (routePath[i][0] === ':') {
              paramsId = str;
            } else {
              check = false;
            }
          }
        });
        return check;
      })?.component || NotFound;

    $root.replaceChildren(await component(paramsId));
  } catch (err) {
    console.error(err);
  }
};

$root.addEventListener('click', async e => {
  if (!e.target.closest('a')) return;
  e.preventDefault();

  const { data: auth } = await axios.get('/auth');
  const { webtoon } = await fetchData('/data/db.json');
  if (!auth) localStorage.removeItem('token');

  const path = e.target.closest('a').getAttribute('href');
  const { title } = e.target.closest('a').dataset;

  if (!getPayload()?.isAdult && e.target.closest('li')?.dataset.adult === 'true') return;

  if (title) localStorage.setItem('webtoonTitle', title);

  if (localStorage.getItem('token') && title) {
    const { payload, isAdult } = getPayload();
    const selectedData = webtoon.filter(data => data.title === title);

    if (localStorage.getItem(payload.userId)) {
      if (!isAdult && e.target.closest('li').dataset.adult === 'true') return;

      const newData = JSON.parse(localStorage.getItem(payload.userId));
      newData.push(...selectedData);
      const uniqData = newData.filter((book, idx, arr) => arr.findIndex(data => data.title === book.title) === idx);
      localStorage.setItem(payload.userId, JSON.stringify(uniqData));
    } else localStorage.setItem(payload.userId, JSON.stringify(selectedData));
  }

  window.history.pushState({}, null, path);

  render(path);
});

window.addEventListener('popstate', async () => {
  const { data: auth } = await axios.get('/auth');
  if (!auth) localStorage.removeItem('token');

  render(window.location.pathname);
});

window.addEventListener('DOMContentLoaded', async () => {
  const { data: auth } = await axios.get('/auth');
  if (!auth) localStorage.removeItem('token');

  render(window.location.pathname);
});

// 토큰만료시(어떻게아냐) 로컬스토리지 삭제
