import FooterContentItem from './FooterContentItem.js';
import FooterEtcItem from './FooterEtcItem.js';
import FooterIconsItem from './FooterIconsItem.js';
import FooterIntroduceItem from './FooterIntroduceItem.js';
import FooterLinkListItem from './FooterLinkListItem.js';
import FooterServiceItem from './FooterServiceItem.js';

const Footer = () => {
  const serviceList = ['리디페이퍼', '제휴카드', '뷰어 다운로드', 'CP사이트', '리디셀렉트 B2B'];
  const etcList = ['콘텐츠 제공 문의', '사업 제휴 문의'];
  // prettier-ignore
  const introduceList = [
    { title: '회사 소개', newInfo: false },
    { title: '인재채용', newInfo: true }
  ];
  // prettier-ignore
  const contentList = [
    { title: '대표자', info: '배기식' },
    { title: '사업자 등록번호', info: '120-87-27435' },
    { title: '통신판매업 신고번호', info: '제 2009-서울강남 35-02139호' },
    { title: '이메일', info: 'heppp@ridi.com' },
    { title: '대표전화', info: '1644-1234' },
    { title: '주소', info: '서울시 강남구 역삼동 1002-28 어반벤치빌딩 100층(테헤란로 777)' }
  ];
  const linkList = ['이용약관', '개인정보 처리방침', '청소년보호정책', '사업자정보확인'];
  const icons = ['bx bxl-facebook', 'bx bxl-instagram', 'bx bxl-youtube'];

  // prettier-ignore
  return `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__wrap">
          <!-- 고객센터 , 공지사항 -->
          <div class="footer__wrap__customer-guide">
            <ul class="footer__wrap__customer-guide__centerAndNotice">
              <li class="footer__wrap__customer-guide__centerAndNotice__center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.07A7.953 7.953 0 004.25 8.25h-.85A2.75 2.75 0 00.648 11v2a2.75 2.75 0 002.75 2.75h1.4a.75.75 0 00.75-.75v-.574a.76.76 0 00.002-.06V10.02a6.45 6.45 0 0112.9 0v4.943a4.909 4.909 0 01-3.829 4.788 2.25 2.25 0 10-.012 1.53 6.411 6.411 0 005.293-5.531h.699a2.75 2.75 0 002.75-2.75v-2a2.75 2.75 0 00-2.75-2.75h-.849a7.953 7.953 0 00-7.752-6.18zM11.25 11a.75.75 0 00-1.5 0v.8a.75.75 0 001.5 0V11zm2.25-.75a.75.75 0 01.75.75v.8a.75.75 0 01-1.5 0V11a.75.75 0 01.75-.75zM11.75 20.5a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.398 9.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h.65v-4.5h-.65zM21.852 11c0-.69-.56-1.25-1.25-1.25h-.65v4.5h.65c.69 0 1.25-.56 1.25-1.25v-2z"
                    fill="currentColor"></path>
                </svg>
                <a href="#"> 고객센터</a>
              </li>
              <li class="footer__wrap__customer-guide__centerAndNotice__notice">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.75 4.61a1.75 1.75 0 00-2.526-1.568L7.734 6.75H5A1.75 1.75 0 003.25 8.5v7c0 .966.784 1.75 1.75 1.75h2.734l7.49 3.707a1.75 1.75 0 002.526-1.568V4.611zm-1.86-.223a.25.25 0 01.36.224v14.778a.25.25 0 01-.36.224l-7.648-3.785-.157-.078H5a.25.25 0 01-.25-.25v-7A.25.25 0 015 8.25h3.085l.157-.078 7.647-3.785zm5.46 5.914a.75.75 0 00-1.5 0v3.4a.75.75 0 001.5 0v-3.4z"
                    fill="currentColor"></path>
                </svg>
                <a href="#">공지사항</a>
              </li>
            </ul>
            <!--  -->
            <div class="footer__wrap__customer-guide__info">
              <div class="footer__wrap__customer-guide__info__service">
                <h4 class="footer__wrap__customer-guide__info__service__title">서비스</h4>
                <ul class="footer__wrap__customer-guide__info__service__list">
                  ${serviceList.map(str => `
                    ${FooterServiceItem(str)}
                  `).join('')}
                </ul>
              </div>
              <div class="footer__wrap__customer-guide__info__etcAndIntroduce">
                <!-- etc -->
                <div class="footer__wrap__customer-guide__info__etcAndIntroduce__etc">
                  <h4 class="footer__wrap__customer-guide__info__etcAndIntroduce__etc__title">기타 문의</h4>
                  <ul class="footer__wrap__customer-guide__info__etcAndIntroduce__etc__list">
                    ${etcList.map(str => `
                      ${FooterEtcItem(str)}
                    `).join('')}
                  </ul>
                </div>
                <div class="footer__wrap__customer-guide__info__etcAndIntroduce__introduce">
                  <h4 class="footer__wrap__customer-guide__info__etcAndIntroduce__introduce__title">회사</h4>
                  <ul class="footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list">
                    ${introduceList.map(str => `
                      ${FooterIntroduceItem(str)}
                    `).join('')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 사업자 정보 business information -->
          <div class="footer__wrap__business-info">
            <details type="button" class="footer__wrap__business-info__more">
              <summary class="business-info__title">
                리디(주) 사업자 정보
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="business-info__title__icon">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.534.92a.5.5 0 000 .708l2.871 2.871-2.871 2.872a.5.5 0 00.707.707l3.225-3.225a.5.5 0 000-.707L3.24.92a.5.5 0 00-.707 0z"
                    fill="currentColor"></path>
                </svg>
              </summary>
              <!-- hide content-->
              <div class="footer__wrap__business-info__content">
                <dl class="footer__wrap__business-info__content__list">
                  ${contentList.map(str => `
                    ${FooterContentItem(str)}
                  `).join('')}
                </dl>
              </div>
            </details>
            <ul class="footer__wrap__business-info__link-list">
              ${linkList.map(str => `
                ${FooterLinkListItem(str)}
              `).join('')}
            </ul>
            <div class="footer__wrap__business-info__copyright"><span>©</span>RIDI Corp.</div>
          </div>
        </div>
        <ul class="footer__icon-list">
          ${icons.map(icon => `
            ${FooterIconsItem(icon)}
          `).join('')}
        </ul>
      </div>
    </footer>
`;
};

export default Footer;
