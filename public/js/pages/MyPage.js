import { createElement } from '../app.js';
import { Header, Footer, MyLeftMenu, MyRidiHome } from '../components/index.js';

const MyPage = () => createElement(`
${Header()}
<div class="my__container">
  <div class="my__container__contents">
    <div class="my__left__menu__container">
      ${MyLeftMenu('/mypage')}
    </div>
    ${MyRidiHome()}
  </div>
</div>
${Footer()}
`);

export default MyPage;
