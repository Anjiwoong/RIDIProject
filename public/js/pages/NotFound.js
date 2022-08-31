import { createElement } from '../app.js';

const NotFound = () =>
  createElement(`
    <div class="notFound-image">
      <h1 class="sr-only">미구현 페이지</h1>
      <img src="/assets/notFound/pixeltaku.png"/>
    </div>
`);

export default NotFound;
