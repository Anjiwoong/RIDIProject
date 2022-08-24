import { addData, fetchData, getPayload } from './app.js';

import { Home, NotFound, Webtoon, MyPage, Login, Signup, MyRidiCashPage, Viewer } from './pages/index.js';

import state from './state.js';

const $root = document.getElementById('root');
const WEBTOON = 'http://localhost:5000/webtoon';
const USERS = 'http://localhost:5000/users';

const routes = [
  { path: '/', component: Home },
  { path: '/webtoon', component: Webtoon },
  { path: '/webtoon/:id', component: Viewer },
  { path: '/mypage', component: MyPage },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/myridicash', component: MyRidiCashPage },
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
  if (!auth) localStorage.removeItem('token');

  const path = e.target.closest('a').getAttribute('href');
  const { title } = e.target.closest('a').dataset;

  // pushState는 주소창의 url을 변경하지만 HTTP 요청을 서버로 전송하지는 않는다.
  window.history.pushState({}, null, path);

  localStorage.setItem('webtoonTitle', title);

  if (localStorage.getItem('token')) {
    const webtoonData = await fetchData(WEBTOON);
    const userInfo = getPayload().payload.email;
    const selectedData = webtoonData.filter(data => data.title === title);
    console.log(selectedData);

    const newBook = { id: userInfo, myBooks: selectedData };
    // 1. users 데이터를 get
    // 2. id가 userInfo(email)과 일치하는게 있는지 확인.
    // 3-1. 일치하는 id가 없을 때 : users배열에 newBook추가
    // 3-2. 일치하는 id가 있을 때 : 일치하는 id가 속한 객체의 myBooks배열에 selectedData 추가

    console.log(selectedData);
    addData(USERS, selectedData);
  }
  state.webtoonTitle = title;

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
