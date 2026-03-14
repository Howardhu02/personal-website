const STORAGE_LANG = "portfolio_lang";

const translations = {
  en: {
    nav: { about: "About", projects: "Projects", email: "Email" },
    typing: "Here are some of the fun systems I’ve built or am currently building.",
    open: "Open project",
    close: "Close project",
    cards: {
      jarvis: {
        title: "JARVIS",
        desc: "A personal AI operating layer built for voice-first workflows and autonomous execution.",
        details: [
          "Inspired by Iron Man, JARVIS is my attempt at a true digital teammate I can talk to all day.",
          "It combines voice interaction, modular agents, and autonomous web workflows into one practical personal system.",
        ],
      },
      brainrot: {
        title: "Brainrot Content Factory",
        desc: "An automated media pipeline that turns trend signals into short-form outputs.",
        details: [
          "An end-to-end pipeline that turns internet trends into shorts with minimal manual intervention.",
          "It automates research, scripting, generation, and publishing while keeping quality checks in the loop.",
        ],
      },
      dashboard: {
        title: "Analytic Dashboard Maker",
        desc: "A repeatable data-to-dashboard pipeline for faster business decisions.",
        details: [
          "Built to eliminate repetitive dashboard prep and messy data wrangling across teams.",
          "The system standardizes KPI logic and pushes cleaner, decision-ready datasets directly into BI workflows.",
        ],
      },
      curiosity: {
        title: "Curiosity X",
        desc: "A continuous monitoring agent that compiles concise internet briefings.",
        details: [
          "A lightweight intelligence layer that continuously scans selected sources and summarizes what matters.",
          "Instead of tab-hopping, I get concise updates and action points pushed to my messaging channels.",
        ],
      },
      photo: {
        title: "Photography Studio",
        desc: "A clean visual storytelling space for my photography work.",
        details: [
          "A dedicated visual module focused on clean browsing and strong image-first presentation.",
          "Open the photography page for the full gallery experience.",
        ],
      },
    },
  },
  zh: {
    nav: { about: "关于", projects: "项目", email: "邮件" },
    typing: "这里是我已经完成或正在构建的一些有趣系统。",
    open: "查看项目",
    close: "收起项目",
    cards: {
      jarvis: {
        title: "JARVIS",
        desc: "一个面向语音工作流和自主执行的个人 AI 操作层。",
        details: [
          "受钢铁侠启发，JARVIS 是我构建“可全天对话的数字搭档”的尝试。",
          "它把语音交互、模块化 Agent 和自动化网页工作流整合在一个可用系统里。",
        ],
      },
      brainrot: {
        title: "Brainrot Content Factory",
        desc: "从趋势信号到短视频输出的自动化内容管线。",
        details: [
          "这是一条从趋势发现到短视频成品的端到端自动化流程。",
          "系统覆盖研究、脚本、生成和发布，并加入基础质量控制。",
        ],
      },
      dashboard: {
        title: "Analytic Dashboard Maker",
        desc: "从原始数据到业务看板的可复用自动化流程。",
        details: [
          "目标是减少重复做表和清洗数据的人力开销。",
          "它统一 KPI 口径并自动输出可直接进入 BI 的决策数据。",
        ],
      },
      curiosity: {
        title: "Curiosity X",
        desc: "持续监控网络信息并生成简明情报摘要的系统。",
        details: [
          "这是一个持续扫描信息源并提炼重点的轻量情报层。",
          "我不再需要开很多标签页，关键更新会直接推送到消息端。",
        ],
      },
      photo: {
        title: "Photography Studio",
        desc: "一个专注于摄影作品呈现的简洁视觉叙事空间。",
        details: [
          "它专注于干净浏览体验和以画面为中心的展示方式。",
          "点击进入摄影页面可查看完整作品库。",
        ],
      },
    },
  },
  ko: {
    nav: { about: "소개", projects: "프로젝트", email: "이메일" },
    typing: "제가 만들었거나 지금 만들고 있는 재미있는 시스템들을 소개합니다.",
    open: "프로젝트 열기",
    close: "프로젝트 닫기",
    cards: {
      jarvis: {
        title: "JARVIS",
        desc: "음성 중심 워크플로와 자율 실행을 위한 개인 AI 운영 레이어입니다.",
        details: [
          "아이언맨에서 영감을 받아, 하루 종일 대화 가능한 디지털 팀원을 만들고자 시작했습니다.",
          "음성 인터랙션, 모듈형 에이전트, 자율 웹 워크플로를 하나의 실용 시스템으로 통합했습니다.",
        ],
      },
      brainrot: {
        title: "Brainrot Content Factory",
        desc: "트렌드 신호를 숏폼 결과물로 전환하는 자동화 콘텐츠 파이프라인입니다.",
        details: [
          "트렌드 탐지부터 숏폼 제작까지 이어지는 엔드투엔드 자동화 파이프라인입니다.",
          "리서치, 스크립트, 생성, 배포를 자동화하면서 품질 점검도 포함합니다.",
        ],
      },
      dashboard: {
        title: "Analytic Dashboard Maker",
        desc: "원본 데이터에서 의사결정 대시보드까지 연결하는 반복 가능한 파이프라인입니다.",
        details: [
          "반복적인 대시보드 준비와 데이터 정리 업무를 줄이는 데 집중했습니다.",
          "KPI 기준을 표준화하고 BI에 바로 연결 가능한 의사결정 데이터를 생성합니다.",
        ],
      },
      curiosity: {
        title: "Curiosity X",
        desc: "인터넷 업데이트를 지속적으로 모니터링해 간결한 브리핑을 생성합니다.",
        details: [
          "지정한 소스를 계속 스캔하고 중요한 업데이트만 요약하는 경량 인텔 레이어입니다.",
          "탭을 여러 개 열지 않아도 핵심 정보가 메시지 채널로 정리되어 전달됩니다.",
        ],
      },
      photo: {
        title: "Photography Studio",
        desc: "사진 작업을 간결하게 보여주는 비주얼 스토리텔링 공간입니다.",
        details: [
          "이미지 중심의 깔끔한 브라우징 경험을 목표로 설계했습니다.",
          "전체 갤러리는 Photography 페이지에서 볼 수 있습니다.",
        ],
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
    const trigger = card.querySelector(".project-mini-trigger");
    const detailLines = card.querySelectorAll(".project-mini-detail p");
    if (title) title.textContent = content.title;
    if (desc) desc.textContent = content.desc;
    detailLines.forEach((line, index) => {
      if (content.details[index]) {
        line.textContent = content.details[index];
      }
    });
    if (trigger) {
      const isOpen = card.classList.contains("is-open");
      trigger.textContent = isOpen ? t.close : t.open;
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
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

document.querySelectorAll(".project-mini-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const card = trigger.closest(".project-mini-card");
    if (!card) {
      return;
    }
    const isOpen = card.classList.contains("is-open");
    card.classList.toggle("is-open", !isOpen);
    applyLanguage(currentLanguage);
  });
});
