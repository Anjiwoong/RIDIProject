const FooterContentItem = ({ title, info }) => `
  <div class="footer__wrap__business-info__content__list__item">
    <dt class="footer__wrap__business-info__content__list__item__title">${title}</dt>
    <dd>${info}</dd>
  </div>
`;

export default FooterContentItem;
