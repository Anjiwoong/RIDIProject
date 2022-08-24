const MyRidiRecents = isEmpty => `
${
  isEmpty
    ? `<div class="my__recents__empty">
          <p class="my__recents__empty__desc">최근 조회한 작품이 없습니다.</p>
        </div>`
    : `<ul class="my__recents__books">
        <li className="my__recents__books__item">
          <a href="/webtoon" className="my__recents__books__link" data-title="">
            <div class="my__book__thumbnail__wrapper">
              <div class="my__book__thumbnail">
                <img
                  class="my__thumbnail"
                  src="//img.ridicdn.net/cover/4766000049/large#1"
                  alt="상수리나무 아래 1화" />
                <a
                  class="my__thumbnail__btn"
                  href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0"
                  data-track-type="">
                  <span class="sr-only">상세페이지 바로가기</span>
                </a>
              </div>
            </div>
            <div class="my__book__metadata__wrapper">
              <h3 class="my__meta__title">
                <a class="my__title__link" href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0">
                  <span class="my__title__text"> 상수리나무 아래 </span>
                </a>
              </h3>
              <p class="my__author">
                <a class="my__author__detail__link" href="/author/109876">P</a>,
                <a class="my__author__detail__link" href="/author/16907">김수지</a>
              </p>
            </div>
          </a>
        </li>
        <li className="my__recents__books__item">
          <a href="#" className="my__recents__books__link" data-title="">
            <div class="my__book__thumbnail__wrapper">
              <div class="my__book__thumbnail">
                <img
                  class="my__thumbnail"
                  src="//img.ridicdn.net/cover/4766000049/large#1"
                  alt="상수리나무 아래 1화" />
                <a
                  class="my__thumbnail__btn"
                  href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0"
                  data-track-type="">
                  <span class="sr-only">상세페이지 바로가기</span>
                </a>
              </div>
            </div>
            <div class="my__book__metadata__wrapper">
              <h3 class="my__meta__title">
                <a class="my__title__link" href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0">
                  <span class="my__title__text"> 상수리나무 아래 </span>
                </a>
              </h3>
              <p class="my__author">
                <a class="my__author__detail__link" href="/author/109876">P</a>,
                <a class="my__author__detail__link" href="/author/16907">김수지</a>
              </p>
            </div>
          </a>
        </li>  
        <li className="my__recents__books__item">
          <a href="#" className="my__recents__books__link" data-title="">
            <div class="my__book__thumbnail__wrapper">
              <div class="my__book__thumbnail">
                <img
                  class="my__thumbnail"
                  src="//img.ridicdn.net/cover/4766000049/large#1"
                  alt="상수리나무 아래 1화" />
                <a
                  class="my__thumbnail__btn"
                  href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0"
                  data-track-type="">
                  <span class="sr-only">상세페이지 바로가기</span>
                </a>
              </div>
            </div>
            <div class="my__book__metadata__wrapper">
              <h3 class="my__meta__title">
                <a class="my__title__link" href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0">
                  <span class="my__title__text"> 상수리나무 아래 </span>
                </a>
              </h3>
              <p class="my__author">
                <a class="my__author__detail__link" href="/author/109876">P</a>,
                <a class="my__author__detail__link" href="/author/16907">김수지</a>
              </p>
            </div>
          </a>
        </li>
        <li className="my__recents__books__item">
          <a href="#" className="my__recents__books__link" data-title="">
            <div class="my__book__thumbnail__wrapper">
              <div class="my__book__thumbnail">
                <img
                  class="my__thumbnail"
                  src="//img.ridicdn.net/cover/4766000049/large#1"
                  alt="상수리나무 아래 1화" />
                <a
                  class="my__thumbnail__btn"
                  href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0"
                  data-track-type="">
                  <span class="sr-only">상세페이지 바로가기</span>
                </a>
              </div>
            </div>
            <div class="my__book__metadata__wrapper">
              <h3 class="my__meta__title">
                <a class="my__title__link" href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0">
                  <span class="my__title__text"> 상수리나무 아래 </span>
                </a>
              </h3>
              <p class="my__author">
                <a class="my__author__detail__link" href="/author/109876">P</a>,
                <a class="my__author__detail__link" href="/author/16907">김수지</a>
              </p>
            </div>
          </a>
        </li>
        <li className="my__recents__books__item">
          <a href="#" className="my__recents__books__link" data-title="">
            <div class="my__book__thumbnail__wrapper">
              <div class="my__book__thumbnail">
                <img
                  class="my__thumbnail"
                  src="//img.ridicdn.net/cover/4766000049/large#1"
                  alt="상수리나무 아래 1화" />
                <a
                  class="my__thumbnail__btn"
                  href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0"
                  data-track-type="">
                  <span class="sr-only">상세페이지 바로가기</span>
                </a>
              </div>
            </div>
            <div class="my__book__metadata__wrapper">
              <h3 class="my__meta__title">
                <a class="my__title__link" href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0">
                  <span class="my__title__text"> 상수리나무 아래 </span>
                </a>
              </h3>
              <p class="my__author">
                <a class="my__author__detail__link" href="/author/109876">P</a>,
                <a class="my__author__detail__link" href="/author/16907">김수지</a>
              </p>
            </div>
          </a>
        </li>
      </ul>
`
}
`;

export default MyRidiRecents;
