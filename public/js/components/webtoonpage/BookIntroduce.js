const BookIntroduce = data => {
  const { title, cover } = [...data].sort(() => Math.random() - 0.5)[0];

  return `
  <article class="books__introduce">
  <h3 class="books__introduce__title middle-title">작품 소개</h3>
  <pre class="books__introduce__description">
*작품 키워드: 판타지물, 서양풍, 초월적존재, 금단의관계, 운명적사랑, 다정남,
상처남, 짝사랑남, 집착남, 순진녀, 상처녀, 후회녀, 추리/미스터리/스릴러, 신파


웹소설 『마귀』의 아름다운 판타지 스릴러 웹툰으로 재탄생!

탑에 갇힌 공녀에게 혼담이 들어온다.
그녀의 남편 될 사람은 전처를 몇이나 죽였다는 잔악한 노인.
단단히 겁에 질린 공녀는 결국, 지하실의 석관을 깨어 마귀를 불러내는데…


<strong>“마귀여, 나는 그자와 결혼하고 싶지 않아.”</strong>
  </pre>
</article>

<!-- books__author -->
<article class="books__author">
  <h3 class="books__author__title middle-title">저자 소개</h3>
  <pre class="books__author__description">
각색
필명 : 한흔
참여작품 : 2013년 웹툰 '헤이마' 그림
웹툰 '뼈와살', '은수', '형을땡땡하다' 그림
단편 '밤의 동행' 글/그림</pre
  >
  <div class="books__author__representative-book">
    <h4 class="books__author__representative-book__title">대표 저서</h4>
    <ul class="books__author__representative-book__list">
      <li class="books__author__representative-book__list__item">
        <a href="/webtoon" data-title="${title}">
          <img src="${cover}" alt="" />
        </a>
      </li>
    </ul>
  </div>
</article>
  `;
};

export default BookIntroduce;
