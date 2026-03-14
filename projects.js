const STORAGE_LANG = "portfolio_lang";

const translations = {
  en: {
    nav: { about: "About", projects: "Projects", email: "Email" },
    typing: "Here are some of the fun systems I’ve built or am currently building.",
    open: "Open project",
    cards: {
      jarvis: {
        title: "JARVIS",
        desc: "A personal AI operating layer built for voice-first workflows and autonomous execution.",
      },
      brainrot: {
        title: "Brainrot Content Factory",
        desc: "An automated media pipeline that turns trend signals into short-form outputs.",
      },
      dashboard: {
        title: "Analytic Dashboard Maker",
        desc: "A repeatable data-to-dashboard pipeline for faster business decisions.",
      },
      curiosity: {
        title: "Curiosity X",
        desc: "A continuous monitoring agent that compiles concise internet briefings.",
      },
      photo: {
        title: "Photography Studio",
        desc: "A clean visual storytelling space for my photography work.",
      },
    },
  },
  zh: {
    nav: { about: "关于", projects: "项目", email: "邮件" },
    typing: "这里是我已经完成或正在构建的一些有趣系统。",
    open: "查看项目",
    cards: {
      jarvis: {
        title: "JARVIS",
        desc: "一个面向语音工作流和自主执行的个人 AI 操作层。",
      },
      brainrot: {
        title: "Brainrot Content Factory",
        desc: "从趋势信号到短视频输出的自动化内容管线。",
      },
      dashboard: {
        title: "Analytic Dashboard Maker",
        desc: "从原始数据到业务看板的可复用自动化流程。",
      },
      curiosity: {
        title: "Curiosity X",
        desc: "持续监控网络信息并生成简明情报摘要的系统。",
      },
      photo: {
        title: "Photography Studio",
        desc: "一个专注于摄影作品呈现的简洁视觉叙事空间。",
      },
    },
  },
  ko: {
    nav: { about: "소개", projects: "프로젝트", email: "이메일" },
    typing: "제가 만들었거나 지금 만들고 있는 재미있는 시스템들을 소개합니다.",
    open: "프로젝트 열기",
    cards: {
      jarvis: {
        title: "JARVIS",
        desc: "음성 중심 워크플로와 자율 실행을 위한 개인 AI 운영 레이어입니다.",
      },
      brainrot: {
        title: "Brainrot Content Factory",
        desc: "트렌드 신호를 숏폼 결과물로 전환하는 자동화 콘텐츠 파이프라인입니다.",
      },
      dashboard: {
        title: "Analytic Dashboard Maker",
        desc: "원본 데이터에서 의사결정 대시보드까지 연결하는 반복 가능한 파이프라인입니다.",
      },
      curiosity: {
        title: "Curiosity X",
        desc: "인터넷 업데이트를 지속적으로 모니터링해 간결한 브리핑을 생성합니다.",
      },
      photo: {
        title: "Photography Studio",
        desc: "사진 작업을 간결하게 보여주는 비주얼 스토리텔링 공간입니다.",
      },
    },
  },
};

const langOptions = document.querySelectorAll("[data-lang-option]");
const langDropdown = document.querySelector(".lang-dropdown");
const typingNode = document.getElementById("projects-typed-line");

let currentLanguage = window.localStorage.getItem(STORAGE_LANG) || "en";
if (!translations[currentLanguage]) {
  currentLanguage = "en";
}

let typingTimers = [];

const clearTyping = () => {
  typingTimers.forEach((timer) => {
    window.clearInterval(timer);
    window.clearTimeout(timer);
  });
  typingTimers = [];
};

const startLoopTyping = () => {
  if (!typingNode) {
    return;
  }

  clearTyping();
  const text = typingNode.dataset.text || "";
  typingNode.textContent = "";
  typingNode.classList.add("is-typing");

  let index = 0;
  const typingTimer = window.setInterval(() => {
    index += 1;
    typingNode.textContent = text.slice(0, index);
    if (index >= text.length) {
      window.clearInterval(typingTimer);
      const pauseTimer = window.setTimeout(() => {
        startLoopTyping();
      }, 1400);
      typingTimers.push(pauseTimer);
    }
  }, 50);

  typingTimers.push(typingTimer);
};

const setActiveLanguageOption = () => {
  langOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.langOption === currentLanguage);
  });
};

const applyLanguage = (lang) => {
  currentLanguage = translations[lang] ? lang : "en";
  window.localStorage.setItem(STORAGE_LANG, currentLanguage);
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage === "zh" ? "zh-Hans" : currentLanguage === "ko" ? "ko" : "en";

  const aboutNav = document.querySelector("[data-nav='about']");
  const projectsNav = document.querySelector("[data-nav='projects']");
  const emailNav = document.querySelector("[data-nav='email']");
  if (aboutNav) aboutNav.textContent = t.nav.about;
  if (projectsNav) projectsNav.textContent = t.nav.projects;
  if (emailNav) emailNav.textContent = t.nav.email;

  if (typingNode) {
    typingNode.dataset.text = t.typing;
  }

  document.querySelectorAll(".project-mini-card").forEach((card) => {
    const id = card.dataset.projectId;
    const content = t.cards[id];
    if (!content) {
      return;
    }
    const title = card.querySelector("h2");
    const desc = card.querySelector(".project-mini-desc");
    const link = card.querySelector(".project-mini-link");
    if (title) title.textContent = content.title;
    if (desc) desc.textContent = content.desc;
    if (link) link.textContent = t.open;
  });

  setActiveLanguageOption();
  startLoopTyping();
};

langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyLanguage(option.dataset.langOption || "en");
    if (langDropdown) {
      langDropdown.removeAttribute("open");
    }
  });
});

applyLanguage(currentLanguage);
