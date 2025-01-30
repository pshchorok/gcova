(() => {
  let lastScroll = 0;
  const header = document.querySelector("header");
  const label = document.querySelector("header label");
  const threshold = 50;

  // 🔹 스크롤 감지 이벤트 (헤더 숨김/보임)
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (Math.abs(currentScroll - lastScroll) < threshold) return;

    header?.classList.toggle("hidden", currentScroll > lastScroll && currentScroll > header?.offsetHeight);
    label?.classList.toggle("hidden", currentScroll > lastScroll && currentScroll > label?.offsetHeight);

    lastScroll = currentScroll;
  });

  // 🔹 스크롤바 숨김 처리
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
  body.style.overflowY = "scroll";
  body.style.scrollbarWidth = "none";
  body.style.msOverflowStyle = "none";

  // 🔹 네비게이션 메뉴 이벤트
  $(function () {
    $("nav button").click(function () {
      const submenu = $(this).next("ul");
      const icon = $(this).find("i");

      $("nav button").not(this).removeClass("active");
      $("nav ul ul").not(submenu).stop().slideUp(500);
      $("nav button i").not(icon).css({ transform: "rotate(0deg)", transition: "all 0.5s ease" });

      $(this).toggleClass("active", !submenu.is(":visible"));
      submenu.stop().slideToggle(500);
      icon.css({ transform: submenu.is(":visible") ? "rotate(180deg)" : "rotate(0deg)", transition: "all 0.5s ease" });
    });

    $("#menu").change(function () {
      if (!this.checked) {
        $("nav button").removeClass("active");
        $("nav ul ul").stop().slideUp(500);
        $("nav button i").css({ transform: "rotate(0deg)", transition: "all 0.5s ease" });
      }
    });

    $(".overlay").click(() => $("#menu").prop("checked", false).trigger("change"));
  });

  // 🔹 IntersectionObserver 설정
  const observerOptions = { root: null, threshold: 0.6 };

  const createObserver = (selector, callback) => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    elements.forEach((el) => observer.observe(el));
  };

  // ✅ `sec2` 애니메이션 적용
  createObserver("#sec2 > div", (target) => {
    target.querySelectorAll("h3, p").forEach((el, index) => {
      setTimeout(() => el.classList.add("visible"), index * 300);
    });
  });

  // ✅ `sec3` 애니메이션 적용
  createObserver("#sec3 li", (target) => {
    target.style.opacity = "1";
    target.style.transform = "translateX(0)";
  });

  // ✅ `slide` 애니메이션 적용
  createObserver("#slide", (target) => target.classList.add("visible"));

  // ✅ `sec5` 애니메이션 적용
  createObserver("#sec5", (target) => target.classList.add("visible"));

  // ✅ `map_sec` 애니메이션 적용
  createObserver("#map_sec", (target) => target.classList.add("visible"));

  // ✅ `sec4`에 도달했을 때만 `steps` 애니메이션 시작
  const steps = document.querySelector(".steps");
  const slides = document.querySelectorAll(".steps > li");
  const totalSlides = slides.length;
  const totalDuration = 3000 * totalSlides;
  let startTime = null;
  let animationStarted = false;

  const updateSteps = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = ((elapsed % totalDuration) / totalDuration) * 100;
    steps.style.setProperty("--indicator-left", `${progress}%`);
    requestAnimationFrame(updateSteps);
  };

  createObserver("#sec4", () => {
    if (!animationStarted) {
      animationStarted = true;
      requestAnimationFrame(updateSteps);
    }
  });

  // ✅ `steps` 자동 슬라이드 애니메이션 (`sec4` 도달 후 실행)
  let tickerStarted = false;
  const startTicker = () => {
    setTimeout(() => {
      $(".steps li:first").animate({ marginLeft: "-100%" }, 600, "swing", function () {
        $(this).detach().appendTo("ul.steps").removeAttr("style");
      });
      startTicker();
    }, 3000);
  };

  createObserver("#sec4", () => {
    if (!tickerStarted) {
      tickerStarted = true;
      startTicker();
    }
  });

})();