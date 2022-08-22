// prettier-ignore
const FooterIntroduceItem = ({title, newInfo}) => `
  <li class="footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item">
    <a href="#">${title} ${newInfo ? `
      <svg width="13px" height="13px" viewBox="0 0 14 14" fill="none"
          xmlns="http://www.w3.org/2000/svg" aria-label="NEW">
          <circle cx="7" cy="7" r="7" fill="currentColor"></circle>
          <path d="M9.18 9.798h-.992L5.932 6.302v3.496H4.82V4.102h.992L8.068 7.59V4.102H9.18v5.696z"
            fill="#fff"></path>
      </svg> ` : ''}
    </a>
  </li>
`;

export default FooterIntroduceItem;
