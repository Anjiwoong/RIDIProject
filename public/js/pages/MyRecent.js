import { createElement, getPayload } from '../app.js';
import { Footer, Header, MyLeftMenu, MyRecentSection } from '../components/index.js';

const MyRecent = () => {
  const payload = getPayload();

  return createElement(`
${Header()}
<div class="my__container">
  <div class="my__container__contents">
    <div class="my__left__menu__container">
      ${MyLeftMenu()}
    </div>
      ${MyRecentSection(payload)}
  </div>
</div>
${Footer()}
`);
};
export default MyRecent;
