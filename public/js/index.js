import Home from './pages/Home.js';
import NotFound from './components/NotFound.js';

const root = document.getElementById('root');

const routes = [{ path: '/', component: Home }];

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
              return;
            } else {
              check = false;
              return;
            }
          }
        });
        return check;
      })?.component || NotFound;

    root.replaceChildren(await component(paramsId));
  } catch (err) {
    console.error(err);
  }
};

root.addEventListener('click', e => {
  if (!e.target.matches('#root > a')) return;

  e.preventDefault();

  const path = e.target.getAttribute('href');

  // pushState는 주소창의 url을 변경하지만 HTTP 요청을 서버로 전송하지는 않는다.
  window.history.pushState({}, null, path);

  render(path);
});

console.log(window.location.pathname);

window.addEventListener('popstate', () => {
  console.log('[popstate]', window.location.pathname);

  render(window.location.pathname);
});

window.addEventListener('DOMContentLoaded', () => {
  render(window.location.pathname);
});
