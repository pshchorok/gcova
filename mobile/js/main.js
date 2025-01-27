let lastScroll = 0; // 마지막 스크롤 위치 저장
const header = document.querySelector('header');
const label = document.querySelector('header label'); // 헤더 요소 선택
const threshold = 50; // 스크롤 이동 최소값

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

    if (Math.abs(currentScroll - lastScroll) < threshold) return; // 이동 값이 너무 작으면 무시

    if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
        // 아래로 스크롤 중 & 헤더 높이만큼 스크롤했을 때
        header.classList.add('hidden'); // 헤더 숨기기
    } else {
        // 위로 스크롤 중 또는 최상단
        header.classList.remove('hidden'); // 헤더 다시 보이기
    };
    if (currentScroll > lastScroll && currentScroll > label.offsetHeight) {
      // 아래로 스크롤 중 & 헤더 높이만큼 스크롤했을 때
      label.classList.add('hidden'); // 헤더 숨기기
  } else {
      // 위로 스크롤 중 또는 최상단
      label.classList.remove('hidden'); // 헤더 다시 보이기
  }

    lastScroll = currentScroll; // 현재 스크롤 위치를 저장
});

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  // 스크롤 기능 유지하고 스크롤바 숨기기
  body.style.overflow = "hidden"; // 전체 스크롤바 숨기기
  body.style.overflowY = "scroll"; // 세로 스크롤 기능 유지

  // Chrome, Safari, Edge 스크롤바 숨기기
  body.style.scrollbarWidth = "none"; // Firefox 스크롤바 숨기기
  body.style.msOverflowStyle = "none"; // IE 스크롤바 숨기기
});

$(function () {
  $('nav button').click(function () {
    const submenu = $(this).next('ul');
    const icon = $(this).find('i');

    $('nav button').not(this).removeClass('active');
    $('nav ul ul').not(submenu).stop().slideUp(500);
    $('nav button i').not(icon).css({
      transform: 'rotate(0deg)',
      transition: 'all 0.5s ease',
    });

    if (submenu.is(':visible')) {
      submenu.stop().slideUp(500);
      $(this).removeClass('active');
      icon.css({
        transform: 'rotate(0deg)',
        transition: 'all 0.5s ease',
      });
    } else {
      submenu.stop().slideDown(500);
      $(this).addClass('active');
      icon.css({
        transform: 'rotate(180deg)',
        transition: 'all 0.5s ease',
      });
    }
  });
  

  $('#menu').change(function () {
    if (!this.checked) {
      $('nav button').removeClass('active');
      $('nav ul ul').stop().slideUp(500);
      $('nav button i').css({
        transform: 'rotate(0deg)',
        transition: 'all 0.5s ease',
      });
    }
  });

  $('.overlay').click(function () {
    $('#menu').prop('checked', false).trigger('change');
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const sec2Divs = document.querySelectorAll("#sec2 > div");

  const observerOptions = {
    root: null, // viewport
    threshold: 0.5, // 60% 이상 보일 때 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        // h3와 p에 순차적으로 딜레이 애니메이션 추가
        const elements = target.querySelectorAll("h3, p");
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("visible");
          }, index * 300); // 각 요소마다 300ms 딜레이
        });

        // 관찰 중단 (중복 실행 방지, 필요시 제거)
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  // 각 div의 하위 h3, p 초기 상태 설정
  sec2Divs.forEach((div) => {
    const elements = div.querySelectorAll("h3, p");
    elements.forEach((el) => {
      el.classList.add("hidden"); // 초기 상태
    });
    observer.observe(div);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const sec3Items = document.querySelectorAll("#sec3 li");

  const observerOptions = {
    root: null,  // viewport 기준
    threshold: .6,  // 90% 이상 보일 때 애니메이션 실행
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";  // 애니메이션 실행
        observer.unobserve(entry.target);  // 한 번 실행 후 중지 (필요하면 제거)
      }
    });
  }, observerOptions);

  // 모든 li 요소를 관찰 시작
  sec3Items.forEach((item) => {
    observer.observe(item);
  });
});







document.addEventListener("DOMContentLoaded", () => {
  const slide = document.querySelector("#slide"); // #slide 요소 선택

  const observerOptions = {
    root: null, // 뷰포트를 기준으로
    threshold: 0.6, // 60% 이상 보였을 때
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 화면에 60% 이상 보이면 visible 클래스 추가
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // 중복 실행 방지
      }
    });
  }, observerOptions);

  // #slide 요소를 관찰
  observer.observe(slide);
});


document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelector(".steps");
  const slides = document.querySelectorAll(".steps > li");
  const totalSlides = slides.length;

  const totalDuration = 3000 * totalSlides; // 전체 슬라이드 순환 시간
  let startTime = null; // 애니메이션 시작 시간

  const update = (timestamp) => {
    if (!startTime) startTime = timestamp; // 시작 시간 초기화
    const elapsed = timestamp - startTime; // 경과 시간 계산

    // 진행률 계산 (0 ~ 100%)
    const progress = (elapsed % totalDuration) / totalDuration * 100;

    // CSS 변수로 진행률 업데이트
    steps.style.setProperty("--indicator-left", `${progress}%`);

    // 다음 프레임 요청
    requestAnimationFrame(update);
  };

  // 애니메이션 시작
  requestAnimationFrame(update);
});

document.addEventListener("DOMContentLoaded", () => {
  const sec3 = document.querySelector("#sec4"); // 섹션 3 선택
  const steps = document.querySelector(".steps"); // 애니메이션 요소
  let tickerStarted = false; // 애니메이션 시작 여부 확인

  const observerOptions = {
    root: null, // 뷰포트를 기준으로
    threshold: 0.6, // 60% 이상 보였을 때
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !tickerStarted) {
        startTicker();  // ticker 애니메이션 시작
        startStepAnimation(); // steps 애니메이션 시작
        tickerStarted = true;  // 한 번만 실행되도록 설정
        observer.unobserve(sec3); // 중복 실행 방지
      }
    });
  }, observerOptions);

  // 섹션 3 관찰 시작
  observer.observe(sec3);

  // ticker 애니메이션 함수
  function startTicker() {
    setTimeout(function() {
      $('.steps li:first').animate({ marginLeft: '-100%' }, 600, 'swing', function () {
        $(this).detach().appendTo('ul.steps').removeAttr('style');
      });
      startTicker();
    }, 3000);
  }

  // steps 애니메이션 시작 함수
  function startStepAnimation() {
    const slides = document.querySelectorAll(".steps > li");
    const totalSlides = slides.length;
    const totalDuration = 3000 * totalSlides;
    let startTime = null;

    const update = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % totalDuration) / totalDuration * 100;
      steps.style.setProperty("--indicator-left", `${progress}%`);
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sec5 = document.querySelector("#sec5"); // 섹션 5 선택

const observerOptions = {
  root: null,  // viewport 기준
  threshold: 0.6,  // 60% 이상 보이면 실행
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");  // 60% 보이면 클래스 추가
    }
  });
}, observerOptions);

observer.observe(sec5);
});

document.addEventListener("DOMContentLoaded", () => {
const map_sec = document.querySelector("#map_sec");

const observerOptions = {
  root: null,  // viewport 기준
  threshold: 0.6,  // 60% 이상 보이면 실행
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");  // 60% 보이면 클래스 추가
    }
  });
}, observerOptions);

observer.observe(map_sec);
});
