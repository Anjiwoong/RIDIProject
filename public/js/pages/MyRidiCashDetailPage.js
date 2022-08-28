import { createElement } from "../app.js";
import { Header, Footer, MyLeftMenu, MyRidiCash } from '../components/index.js';

const MyRidiCashDetailPage = () => createElement (`
${Header()}
<div class="my__container">
  <div class="my__container__contents">
    <div class="my__left__menu__container">
      ${MyLeftMenu('/myridicharge')}
    </div>
    ${MyRidiCash('/myrididetail')}
  </div>
</div>
${Footer()}
`);

export default MyRidiCashDetailPage;