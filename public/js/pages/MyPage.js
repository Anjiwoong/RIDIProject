import { createElement, getPayload } from '../app.js';
import { Header, Footer, MyLeftMenu, MyRidiHome } from '../components/index.js';

const MyPage = () => {
  const payload = getPayload();

  return createElement(`
${Header()}
<div class="my__container">
  <div class="my__container__contents">
    <div class="my__left__menu__container">
      ${MyLeftMenu()}
    </div>
    ${MyRidiHome(payload)}
  </div>
</div>
${Footer()}
`);
};

export default MyPage;
