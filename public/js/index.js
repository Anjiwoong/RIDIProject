import { getPayload } from './app.js';
import {
  Home,
  NotFound,
  Webtoon,
  MyPage,
  Login,
  Signup,
  MyRidiCashChargePage,
  MyRidiCashAutoPage,
  MyRidiCashDetailPage,
  MyRidiCashWaitPage,
  Viewer,
  MyRecent,
  MyRidiCashPaymentPage,
} from './pages/index.js';

const $root = document.getElementById('root');

const routes = [
  { path: '/', component: Home },
  { path: '/webtoon', component: Webtoon },
  { path: '/webtoon/:id', component: Viewer },
  { path: '/mypage', component: MyPage },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/recent', component: MyRecent },
  { path: '/myridicharge', component: MyRidiCashChargePage },
  { path: '/myridiauto', component: MyRidiCashAutoPage },
  { path: '/myrididetail', component: MyRidiCashDetailPage },
  { path: '/myridiwait', component: MyRidiCashWaitPage },
  { path: '/payment', component: MyRidiCashPaymentPage },
];

const render = async path => {
  try {
    let paramsId = 0;

    const _component =
      routes.find(route => {
        let check = true;
        const targetPath = path.split('/').slice(1);
        const routePath = route.path.split('/').slice(1);

        if (targetPath.length !== routePath.length) {
          check = false;
          return check;
        }

        if (targetPath.every((string, index) => string === routePath[index])) check = true;
        else check = false;

        targetPath.forEach((str, i) => {
          if (str !== routePath[i]) {
            if (routePath[i][0] === ':') {
              paramsId = str;
              check = true;
            } else check = false;
          }
        });

        return check;
      })?.component || NotFound;
    $root.replaceChildren(await _component(paramsId));
  } catch (err) {
    console.error(err);
  }
};

$root.addEventListener('click', async e => {
  if (!e.target.closest('a')) return;
  e.preventDefault();

  const { data: auth } = await axios.get('/auth');
  if (!auth) localStorage.removeItem('token');

  const path = e.target.closest('a').getAttribute('href');

  if (!getPayload()?.isAdult && e.target.closest('li')?.dataset.adult === 'true') return;
  if (e.target.closest('#nav-settings')) return;
  if (e.target.closest('.my__nav__menu__section.account') && e.target.matches('.my__section__link')) return;
  if (e.target.closest('.header-down__nav__title') && window.location.pathname === '/') return;

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

export default render;
