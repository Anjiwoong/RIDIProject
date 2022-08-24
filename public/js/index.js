import { fetchData, getPayload, updateData } from './app.js';

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

  if (localStorage.getItem('token') && title) {
    const webtoonData = await fetchData(WEBTOON, ''); // db.json webtoon data
    const usersData = await fetchData(USERS, ''); // db.json user data
    const userInfo = getPayload().payload.userId; // login 되어있는 userID
    const loginUser = usersData.filter(user => user.userId === userInfo); // login되어 있는 user 객체
    const userId = loginUser[0].id; // login 되어있는 user의 id 값
    const selectedData = webtoonData.find(data => data.title === title); // 클릭한 webtoon의 객체

    loginUser.map(({ userInfo }) =>
      userInfo.forEach(data => {
        data.myBooks.push(selectedData);
        data.myBooks = data.myBooks.filter(
          (book, idx, arr) => arr.findIndex(data => data.title === book.title) === idx
        );
      })
    );

    updateData(USERS, userId, loginUser);
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
