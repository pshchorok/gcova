const { useEffect } = React;
const { createRoot } = ReactDOM;


function Sample(){
  
  return(
        <>
          <Header/>
          <Sec_1/>
          <Sec_2/>
          <Sec_3/>
          <Sec_4/>
          <Map_sec/>
          <Sec_5/>
         </>
  );
};

function Header() {

  useEffect(() => {
    // 기존 JavaScript(main.js) 파일 실행
    const script = document.createElement("script");
    script.src = "./js/main.js";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script); // 컴포넌트 언마운트 시 제거
    };
    
  }, []);

  return( 
    <>
     
     <header>
    <h1><a href="#"><img src="img/g_logo.png" alt="로고" /></a></h1>
    <input type="checkbox" id="menu" />
    <label for="menu">
        <span></span>
        <span></span>
        <span></span>
    </label>
    <nav id="hammenu">
        <div id="n_header">
            <h2>Sub_Logo</h2>
        </div>
        <ul>
            <li><button>회사소개 <i className="fa-solid fa-chevron-down"></i></button>
                <ul>
                    <li><a href="#">인사말</a></li>
                    <li><a href="#">회사연혁</a></li>
                    <li><a href="#">주요시설</a></li>
                </ul>
            </li>
            <li><button>메뉴 <i className="fa-solid fa-chevron-down"></i></button>
                <ul>
                    <li><a href="#">양념치킨</a></li>
                    <li><a href="#">소금구이치킨</a></li>
                </ul>
            </li>
            <li><button>매장안내 <i className="fa-solid fa-chevron-down"></i></button>
                <ul>
                    <li><a href="#">전국매장안내</a></li>
                    <li><a href="#">지사안내</a></li>
                </ul>
            </li>
            <li><button>가맹점개설 <i className="fa-solid fa-chevron-down"></i></button>
                <ul>
                    <li><a href="#">개설 절차</a></li>
                    <li><a href="#">개설 상세내역</a></li>
                    <li><a href="#">지역별 상담</a></li>
                </ul>
            </li>
            <li><a href="#">신규개설점 <i class="fa-solid fa-chevron-right"></i></a></li>
        </ul>
        <div id="n_footer">
            <p>Cosyright &copy; 1994gcova.co.kr ALL Rights Reseved.</p>
            <address>경상남도 양산시 어곡공단3길 32 (주)지코바</address>
        </div>
    </nav>
    <div className="overlay"></div>
  </header>
    </>
  )
}

function Sec_1() {

  return(
    <>
       <section id="sec1">
    <div className="menu1">
      <button>MORE</button>
    </div>
    <div className="menu2">
      <button>MORE</button>
    </div>
  </section>
    </>
  )
}

function Sec_2() {

  return(
    <>
       <section id="sec2">
    <div>
      <h3>1994年</h3>
      <p className="txt">창업 이래 <strong>20</strong>여 년간 <br />
      한국인의 입맛에 맞춘 양념 치킨을 위해<br />
      한 길만을 걸어왔습니다.</p>

      <p className="txt">한국적이면서도 현대적인 감각을 더해<br />
      앞으로도 고객 여러분께 신뢰와 만족을<br />
      드리는 치킨을 제공하겠습니다.</p>

      <p className="txt">성원에 깊이 감사드리며,<br />
      지코바와 함께 힘차게 전진해 나아갑시다.</p>
    </div>
  </section>
    </>
  )
}

function Sec_3() {

  return(
    <>
     <section id="sec3">
    <ul>
      <li>
        <strong>1994</strong>
        <p>부산광역시 만덕동 <br />지코바 1호점 (본점)개설 </p>
      </li>
      <li>
        <strong>1998</strong>
        <p>포항지사 설립</p>
      </li>
      <li>
        <strong>1999</strong>
        <p>50호점 개설</p>
        <p>대구지사 설립</p>
      </li>
      <li>
        <strong>2000</strong>
        <p>100호점 개설</p>
        <p>경북부지사 설립</p>
        <p>대전지사 설립</p>
      </li>
      <li>
        <strong>2002</strong>
        <p>300호점 개설</p>
      </li>
      <li>
        <strong>2006</strong>
        <p>중부권 물류센터 개설</p>
      </li>
      <li>
        <strong>2014</strong>
        <p>제주지사 설립</p>
      </li>
      <li>
        <strong>2017</strong>
        <p>호남권 물류센터 개설</p>
        <p>(주)지코바 법인설립</p>
      </li>
      <li>
        <strong>2021</strong>
        <p>700호점 개설</p>
      </li>
    </ul>
  </section>
    </>
  )
}

function Sec_4() {

  return(
    <>
      <section id="sec4">
        <div className="content" id="slide">
          <div className="sec4_txt">
            <p>美味 </p>
            <p>[ 미미 ]</p>
            <p>아름다운 맛을 향한 여정</p>
          </div>
          <ul className="steps">
              <li>
                  <i className="fa-solid fa-envelope-open-text"></i> 
                  <p>
                  <span>접수</span>
                      고객님의 주문을 확인하고<br />
                      최상의 품질로 재료를 준비합니다.
                    </p>
              </li>
              <li>
                  <i className="fa-solid fa-dungeon"></i>
                  <p>
                  <span>초벌</span> 
                      최적의 온도로 초벌 구이를 하여 <br />
                      깊고 풍부한 맛을 더합니다.
                  </p>
              </li>
              <li>
                  <i className="fa-solid fa-clock-rotate-left"></i>
                  <p>
                  <span>숙성</span>
                      풍미와 육즙을 최적의 상태로 <br />
                      만들기 위해 시간을 둡니다.
                  </p>
              </li>
              <li>
                  <i className="fa-brands fa-gripfire"></i>
                  <p>
                  <span>조리</span>
                      신선한 재료와 비법 양념으로 <br />
                      섬세한 조리를 진행합니다.
                  </p>
              </li>
              <li>
                  <i className="fa-solid fa-map-location-dot"></i>
                  <p>
                  <span>배달</span>
                      완성된 치킨을 빠르고 따듯하게 <br />
                      고객님께 전달합니다.
                  </p>
              </li>
          </ul>
        </div>
      </section>
    </>
  )
}

function Map_sec() {

  return (
    <>
       <section id="map_sec">
    <div className="slide_top">
      <div className="slide_content">
        <p>4공단점</p> <p>가경점</p> <p>가능점</p> <p>가락타운점</p> <p>가맹본부</p><p>가수원점</p> <p>가야1호점</p> <p>가야벽산점</p> <p>가오점</p> <p>가음정점</p><p>가좌점(인천)</p> <p>가좌점(진주)</p> <p>간석1호점</p> <p>간석역점</p> <p>갈마1호점</p><p>갈마2호점</p> <p>갈매점</p> <p>감계점</p> <p>강일 1호점</p> <p>개신점</p>   <p>거창점</p> <p>걸포점</p> <p>검암점</p> <p>경기 양평점</p> <p>경안1호점</p> <p>계룡점</p><p>계산점</p> <p>고대점</p> <p>고덕1호점</p> <p>고성점</p> <p>고운점</p> <p>고읍1호점</p><p>고잔1호점</p> <p>고척점</p> <p>고현점</p> <p>공단점</p> <p>공릉점</p> <p>공업탑점</p><p>공주1호점</p> <p>관양1호점</p> <p>관저1호점</p> <p>관저2호점</p> <p>관평점</p> <p>광교1호점</p><p>광명1호점</p> <p>광안1호점</p> <p>광양읍점</p> <p>괘법점</p> <p>괴안1호점</p> <p>괴정점</p><p>교대점</p> <p>교동1호점</p> <p>교문1호점</p> <p>교하점</p> <p>구갈1호점</p> <p>구래1호점</p><p>구로1호점</p> <p>구서점</p> <p>구암점</p> <p>구영점</p> <p>구운점</p> <p>구월1호점</p><p>구의점</p> <p>구지점</p> <p>구포점</p> <p>군위점</p> <p>궁동점</p> <p>권선1호점</p><p>근화점</p> <p>금광점</p> <p>금사점</p> <p>금산점</p> <p>금정점</p> <p>금천점</p><p>금촌1호점</p> <p>금호1호점</p> <p>금호지구점</p> <p>기업도시점</p> <p>기장2호점</p><p>김제1호점</p> <p>나운1호점</p> <p>난곡점</p> <p>남가좌점</p> <p>남목점</p> <p>남문점</p><p>남양1호점</p> <p>남원1호점</p> <p>남창점</p> <p>남천1호점</p> <p>남해1호점</p> <p>내당점</p><p>내동점(대전)</p> <p>내서점</p> <p>내외점</p> <p>내포1호점</p> <p>노변점</p> <p>노원상계2호점</p><p>노원상계점</p> <p>녹번1호점</p> <p>논공점</p> <p>논산1호점</p> <p>논산2호점</p><p>논현1호점</p> <p>논현1호점(인천)</p> <p>능곡점</p> <p>능동1호점</p> <p>다대점</p><p>다사점</p> <p>다산1호점</p> <p>단계1호점</p> <p>단구점</p> <p>단양점</p><p>달동1호점</p> <p>달동2호점</p> <p>담양점</p> <p>답십리점</p> <p>당감점</p> <p>당리점</p><p>당정1호점</p> <p>당진점</p> <p>당하1호점</p> <p>대곡점</p> <p>대림1호점</p> <p>대방1호점</p><p>대방점</p> <p>대소점</p> <p>대연1호점</p> <p>대연2호점</p> <p>대조점</p> <p>대청점</p><p>대치1호점</p> <p>대평점</p> <p>대화1호점</p> <p>대흥점</p> <p>덕계점</p> <p>덕명점</p><p>덕산점</p> <p>덕소1호점</p> <p>덕신점</p> <p>덕진1호점</p> <p>덕천점</p> <p>덕포점</p><p>덕하점</p> <p>도계점</p> <p>도담점</p> <p>도량점</p> <p>도마점</p> <p>도안점</p><p>도화1호점</p> <p>도화점</p> <p>독립문점</p> <p>독산1호점</p> <p>돈암1호점</p><p>동광점</p> <p>동남지구점</p> <p>동대문점</p> <p>동대점</p> <p>동래점</p><p>동방점</p> <p>동백1호점</p> <p>동삭점</p> <p>동삼점</p> <p>동천점</p><p>동탄역점</p> <p>동탄점</p> <p>동판교점</p> <p>동호점</p> <p>두암1호점</p><p>두정점</p> <p>둔산1호점</p> <p>둔산2호점</p> <p>둔전점</p> <p>마곡역점</p><p>마동점</p> <p>마두1호점</p> <p>만년점</p> <p>만덕점</p> <p>만수1호점</p><p>만촌점</p> <p>망미1호점</p> <p>망미2호점</p> <p>망포1호점</p> <p>매곡점(순천)</p><p>매곡점(울산)</p> <p>매천점</p> <p>매탄점</p> <p>매호점</p> <p>면목1호점</p><p>명덕점</p> <p>명륜점</p> <p>명서점</p> <p>명일점</p> <p>명장점</p><p>명지1호점</p> <p>명지2호점</p> <p>명지국제신도시점</p> <p>명촌점</p><p>모전점</p> <p>목감1호점</p> <p>목동1호점</p><p>목동1호점</p><p>무거점</p><p>문경1호점</p><p>문덕점</p><p>문래점</p><p>문산점</p><p>문성점</p><p>문정1호점</p><p>문현점</p><p>문화점</p><p>문흥1호점</p><p>물금 2호점</p><p>물금점</p><p>미금점</p><p>미사1호점</p><p>미아1호점</p><p>미아역점</p><p>미평점</p><p>민락1호점</p><p>반구점</p><p>반림점</p><p>반석점</p><p>반송1호점</p><p>반송점</p><p>반여1호점</p><p>반여3호점</p><p>반월1호점</p><p>반포점</p><p>방배1호점</p><p>방어점</p><p>방이점</p><p>방촌점</p><p>배곧1호점</p><p>배방점</p><p>백석점</p><p>범내골점</p><p>범어점</p><p>법동점</p><p>변동점</p><p>별내1호점</p><p>별내2호점</p><p>병영점</p><p>보광점</p><p>보라점</p><p>복산점</p><p>복수점</p><p>복현점</p><p>본리점</p><p>본오1호점</p><p>봉곡점(구미)</p><p>봉곡점(진주)</p><p>봉곡점(창원)</p><p>봉담점</p><p>봉명점(천안)</p><p>봉명점(청주)</p><p>봉천1호점</p><p>봉천2호점</p><p>봉천3호점</p><p>봉평점</p><p>부개1호점</p><p>부곡점</p><p>부안점</p><p>부원점</p><p>부천역점</p><p>부평1호점</p><p>북마산점</p><p>북삼점</p><p>분평점</p><p>불광점</p><p>불당1호점</p><p>불당2호점</p><p>비래점</p><p>비전2호점</p><p>빛가람점</p><p>사곡점</p><p>사남점</p><p>사당1호점</p><p>사동점</p><p>사송점</p><p>사직점</p><p>사창점</p><p>사천점</p><p>사파점</p><p>산격점</p><p>산동점</p><p>산본1호점</p><p>산성점</p><p>산수1호점</p><p>산정1호점</p><p>산척점</p><p>산청점</p><p>산하1호점</p><p>산호점</p><p>삼계2호점</p><p>삼계점</p><p>삼문점</p><p>삼문점(김해)</p><p>삼북점</p><p>삼산1호점</p><p>삼산1호점</p><p>삼성1호점</p><p>삼송1호점</p><p>삼정점</p><p>삼척점</p><p>삼천1호점</p><p>삼천포</p><p>삼호점</p><p>상남점</p><p>상대점</p><p>상대점</p><p>상도1호점</p><p>상동1호점</p><p>상동점</p><p>상동점</p><p>상모점</p><p>상봉1호점</p><p>상암점</p><p>상인점</p><p>상주 1호점</p><p>상주 서문점</p><p>상현역점</p><p>새롬점</p><p>새솔점</p><p>새터마을점</p><p>생연1호점</p><p>서교1호점</p><p>서귀점</p><p>서대신1호점</p><p>서변점</p><p>서부시장점</p><p>서산호수공원점</p><p>서재점</p><p>서창점</p><p>서창점</p><p>서초1호점</p><p>석계점</p><p>석동점</p><p>석봉점</p><p>석산점</p><p>석적점</p><p>선부1호점</p><p>선산점</p><p>선화점</p><p>성건점</p><p>성남1호점</p><p>성남점(대전)</p><p>성남점(울산)</p><p>성남중앙점</p><p>성내1호점</p><p>성복1호점</p><p>성산1호점</p><p>성산점</p><p>성수1호점</p><p>성안점</p><p>성연점</p><p>성정점</p><p>성주점</p><p>성주점</p><p>성화점</p><p>성환1호점</p>
      </div>
    </div>
    <div className="map_txt">
      <p>地點</p>
      <p>[ 지점 ]</p>
      <p>근처 지코바 매장</p>
    </div>
    <h3></h3>
    <div id="map">
    </div>
    <div className="slide_bottom">
      <div className="slide_content">
        <p>세교1호점</p><p>세류1호점</p><p>소계점</p><p>소담점</p><p>소답점</p><p>소주점</p><p>송강점</p><p>송도1호점</p><p>송도랜드마크점</p><p>송도점</p><p>송우리점</p><p>송정점</p><p>송정점</p><p>송정점</p><p>송천1호점</p><p>송파1호점</p><p>송현옥동점</p><p>송현점</p><p>수곡점</p><p>수비점</p><p>수성점</p><p>수송점</p><p>수암점</p><p>수원정자1호점</p><p>수유1호점</p><p>수유2호점</p><p>수정점</p><p>수택1호점</p><p>시기점</p><p>시천점</p><p>시흥1호점</p><p>시흥2호점</p><p>신가점</p><p>신개금점</p><p>신곡1호점</p><p>신관점</p><p>신길1호점</p><p>신내1호점</p><p>신당점(대구)</p><p>신당점(서울)</p><p>신대방1호점</p><p>신도청점</p><p>신림1호점</p><p>신림2호점</p><p>신모라점</p><p>신서혁신점</p><p>신성점</p><p>신시가지점</p><p>신안점</p><p>신월1호점</p><p>신월2호점</p><p>신월성점</p><p>신음점</p><p>신정1호점</p><p>신정1호점</p><p>신정2호점</p><p>신제주점</p><p>신진주역점</p><p>신창점</p><p>신천1호점</p><p>신천점</p><p>신촌점</p><p>신평1호점(부산)</p><p>신평점(구미)</p><p>신포점</p><p>신현1호</p><p>신호점</p><p>신흑점</p><p>쌍문점</p><p>쌍용점</p><p>쌍촌1호점</p><p>아라점</p><p>아산테크노밸리점</p><p>아주점</p><p>아진점</p><p>아포점</p><p>안동1호점</p><p>안락점</p><p>안성1호점</p><p>안암점</p><p>안양1호점</p><p>안지랑점</p><p>야당점</p><p>야사1호점</p><p>야음1호점</p><p>야탑1호점</p><p>양덕점</p><p>양산1호점</p><p>양산2호점</p><p>양재1</p><p>양정1호점(부산)</p><p>양정점(울산)</p><p>양평점</p><p>어방점</p><p>언양점</p><p>엄궁점</p><p>에코시티점</p><p>여월점</p><p>여의도1호점</p><p>역북1호점</p><p>역삼1호점</p><p>연경점</p><p>연동점</p><p>연산1호점</p><p>연산2호점</p><p>연산3호점</p><p>연수점</p><p>연지점</p><p>연향1호점</p><p>영광점</p><p>영대점</p><p>영덕점</p><p>영등1호점</p><p>영등포1호점</p><p>영선점</p><p>영양점</p><p>영주점</p><p>영천1호점</p><p>영통점</p><p>영해점</p><p>예림점</p><p>예산점</p><p>오남점</p><p>오류1호점</p><p>오류점</p><p>오산1호점</p><p>오송점</p><p>오정점</p><p>오창2산단점</p><p>오창점</p><p>옥계점(구미)</p><p>옥계점(대전)</p><p>옥정1호점</p><p>옥천점</p><p>옥포점</p><p>온천1호점</p><p>온천3호점</p><p>와동점</p><p>왜관점</p><p>외도하귀점</p><p>외동점(김해)</p><p>용강점</p><p>용두1호점</p><p>용문점</p><p>용봉1호점</p><p>용산점</p><p>용상점</p><p>용암점(청주)</p><p>용운점</p><p>용원점</p><p>용이점</p><p>용전점</p><p>용현1호점</p><p>용현2호점</p><p>용호점</p><p>용화점</p><p>용흥점</p><p>운서1호점</p><p>운암점</p><p>운정1호점</p><p>운정2호점</p><p>운천점</p><p>울대점</p><p>원내점</p><p>원당1호점</p><p>원주기업도시점</p><p>원주혁신점</p><p>원평점</p><p>원호점</p><p>원흥점</p><p>월곡점</p><p>월봉점</p><p>월영점</p><p>월피점</p><p>위례1호점</p><p>유천1호점</p><p>율량2호점</p><p>율량점</p><p>율전점</p><p>율하2</p><p>율하점(김해)</p><p>율하점(대구)</p><p>은평뉴타운점</p><p>은행1호점</p><p>응암1호점</p><p>의성점</p><p>의정부중앙점</p><p>이곡점</p><p>이문1호점</p><p>이시아폴리스점</p><p>이천하이닉스점</p><p>이충점</p><p>이태원점</p><p>이화점</p><p>인계점</p><p>인덕원점</p><p>인후점</p><p>일광점</p><p>입암점</p><p>자곡1호점</p><p>자양1호점</p><p>자양점</p><p>잠실1호점</p><p>장기점</p><p>장대점</p><p>장덕1호점</p><p>장량1호점</p><p>장림점</p><p>장성점</p><p>장승포점</p><p>장안1호점</p><p>장위점</p><p>장유점</p><p>장전점</p><p>장평점</p><p>장현1호점</p><p>재송1호점</p><p>전민점</p><p>전포점</p><p>전하점</p><p>정관1호점</p><p>정관2호점</p><p>정발산점</p><p>정왕1호점</p><p>정왕2호점</p><p>정자1호점</p><p>정평점</p><p>정하점</p><p>제천1호점</p><p>조양1호점</p><p>조촌점</p><p>조치원점</p><p>종촌점</p><p>주교점</p><p>주례점</p><p>주안1호점</p><p>주안2호점</p><p>주엽1호점</p><p>주월1호점</p><p>주촌1호점</p><p>죽림점</p><p>죽전1호점</p><p>죽정점</p><p>중곡1호점</p><p>중곡점</p><p>중동1호점</p><p>중리점</p><p>중마1호점</p><p>중문점</p><p>중산1호점</p><p>중앙점(창원)</p><p>중촌점</p><p>증산점</p><p>증평점</p><p>지내점</p><p>지산점</p><p>지세포점</p><p>지족점</p><p>지좌점</p><p>지코바루원시티점</p><p>지코바산곡1호점</p><p>지코바송죽점</p><p>지코바안중점</p><p>진량점</p><p>진사점</p><p>진안1호점</p><p>진영1호점</p><p>진접지구점</p><p>진천1호점</p><p>진천혁신도시점</p><p>진평점</p><p>차암1호점</p><p>창녕점</p><p>창전점</p><p>창현점</p><p>천곡점</p><p>천상점</p><p>천송점</p><p>천전1호점</p><p>천호1호점</p><p>철산1호점</p><p>첨단1호점</p><p>첨단신용점</p><p>청당점</p><p>청라1호점</p><p>청라2호점</p><p>청량리점</p><p>청량점</p><p>청학점</p><p>초곡점</p><p>초전점</p><p>초지점</p><p>춘의점</p><p>충무공점</p><p>충무점</p><p>칠곡1호점</p><p>칠곡3지구점</p><p>칠금점</p><p>침산점</p><p>탄방점</p><p>탄현점</p><p>태백점</p><p>태장1호점</p><p>태전1호점</p><p>태평점</p><p>태화점</p><p>토곡점</p><p>퇴계1호점</p><p>팔송점</p><p>팔용점</p><p>평거점</p><p>평창휘닉스점</p><p>평촌1호점</p><p>평촌2호점</p><p>평택세교점</p><p>포남1호점</p><p>포승점</p><p>풍덕천1호점</p><p>풍동1호점</p><p>풍무1호점</p><p>풍호점</p><p>하남1호점</p><p>하늘도시1호점</p><p>하단점</p><p>하당점</p><p>하대점</p><p>하동점</p><p>하복대점</p><p>하양점</p><p>학동점</p><p>학장점</p><p>한솔1호점</p><p>함안점</p><p>함양점</p><p>합성1호점</p><p>해운1호점</p><p>해운대2호점</p><p>해운대역점</p><p>행궁점</p><p>행신2호점</p><p>행신점</p><p>향남점</p><p>향동점</p><p>혁신점</p><p>혁신중동1호점</p><p>현동점</p><p>현풍테크노점</p><p>형곡점</p><p>호계1호점</p><p>호계점</p><p>호매실점</p><p>호암1호점</p><p>호평점</p><p>홍성점</p><p>홍제1호점</p><p>홍천점</p><p>화곡1호점</p><p>화곡2호점</p><p>화명1호점</p><p>화명2호점</p><p>화명역점</p><p>화봉점</p><p>화양점(서울)</p><p>화원점</p><p>화정1호점</p><p>화정점</p><p>황금점</p><p>황상점</p><p>황성점</p><p>횡성점</p><p>효동점</p><p>효성1호점</p><p>효자1호점</p><p>효자1호점</p><p>후평1호점</p><p>휴천1호점</p><p>희나리점</p>
      </div>
    </div>
  </section>
    </>
  )
}

function Sec_5() {

  return (
    <>
      <section id="sec5">
    <div>
      <h3>動向</h3>
      <span>[ 동향 ]</span>
      <p>새롭게 전하는 소식</p>
    </div>
    <a href="#">보러 가기</a>
    <footer>
      <div>
        <a href="#">고객센터</a>
        <a href="#">가맹문의</a>
      </div>
      <p>Copyright &copy; 1994gcova.co.kr </p>
      <p>All Right Reserved.</p>
      <address>경상남도 양산시 어곡공단 3길 32 (주)지코바</address>
      <img src="img/foot_logo.png" alt="하단 로고" width="50" />
    </footer>
  </section>
  </>
  )
  
}

ReactDOM.render(
  <Sample/>,
  document.getElementById("root")
);