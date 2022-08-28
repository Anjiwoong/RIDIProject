import { createElement } from "../app.js";
import { Header, MyLeftMenu, MyRidiCashPayment, Footer } from "../components/index.js";

const MyRidiCashPaymentPage = () => createElement(`
${Header()}
<div class="my__container">
  <div class="my__container__contents">
    <div class="my__left__menu__container">
      ${MyLeftMenu('/payment')}
    </div>
      ${MyRidiCashPayment()}
  </div>
</div>
${Footer()}
`);

export default MyRidiCashPaymentPage;