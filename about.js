const STORAGE_LANG = "portfolio_lang";

const translations = {
  en: {
    nav: { about: "About", projects: "Projects", email: "Email" },
    titleText: "Hi there",
    introText: "Talk to me about data, AI, analytics, and building useful systems!",
    workHeading: "Work",
    educationHeading: "Education",
    work: {
      ibm: "CSM Architect (AI) @ IBM",
      pge: "Ex-AP Data Analyst @ PG&E",
      dicks: "Ex-Data Science Intern @ Dick's Sporting Goods",
      store: "BI Executive @ Cal Student Store",
    },
    education: {
      entry: "Data Science + Economics<br />University of California, Berkeley<br />2022–2026",
    },
    modal: {
      work: "Work",
      education: "Education",
      wechat: "WeChat",
      scan: "Scan the QR code below",
      connectWechat: "Connect on WeChat",
    },
    details: {
      work: {
        ibm: {
          title: "Customer Success Manager Architect (AI) — Incoming",
          company: "IBM",
          location: "Austin, TX",
          date: "Starting Jul 2026",
          description:
            "I’ll be helping enterprise teams turn AI strategy into practical deployments. The focus is hands-on technical architecture, MVP builds, and guiding real adoption across customer teams.",
        },
        pge: {
          title: "Accounts Payable Data Analyst Intern",
          company: "Pacific Gas and Electric Company (PG&E)",
          location: "Oakland, CA",
          date: "May 2025 - Aug 2025",
          description:
            "I rebuilt finance workflows into reliable SQL pipelines and automated reporting, which removed friction and made reporting cycles faster and easier to trust.",
        },
        dicks: {
          title: "Data Science Intern",
          company: "Dick's Sporting Goods",
          location: "San Antonio, TX",
          date: "May 2024 - Aug 2024",
          description:
            "I worked with customer behavior and review data to support product and marketing decisions, and learned how to ship insights that teams could act on quickly.",
        },
        store: {
          title: "Business Intelligence Executive",
          company: "Cal Student Store",
          location: "Berkeley, CA",
          date: "Aug 2022 - May 2025",
          description:
            "I combined campaign and merchandising data to improve promotions and conversion outcomes, with a strong focus on clear metrics and fast iteration.",
        },
      },
      education: {
        berkeley: {
          title: "Data Science + Economics",
          company: "University of California, Berkeley",
          location: "Berkeley, CA",
          date: "2022 - 2026",
          description:
            "Focused on analytics, experimentation, data systems, and decision-making workflows. I spend most of my time building practical systems that turn messy data into clear, useful outputs.",
        },
      },
    },
  },
  zh: {
    nav: { about: "关于", projects: "项目", email: "邮件" },
    titleText: "你好",
    introText: "欢迎和我聊数据、AI、分析，以及有用系统的构建。",
    workHeading: "经历",
    educationHeading: "教育",
    work: {
      ibm: "IBM AI 客户成功架构师（即将入职）",
      pge: "前 PG&E 应付账款数据分析",
      dicks: "前 Dick's 数据科学实习",
      store: "Cal Student Store 商业智能成员",
    },
    education: {
      entry: "数据科学 + 经济学<br />加州大学伯克利分校<br />2022–2026",
    },
    modal: {
      work: "经历",
      education: "教育",
      wechat: "微信",
      scan: "请扫描下方二维码",
      connectWechat: "微信联系",
    },
    details: {
      work: {
        ibm: {
          title: "客户成功经理架构师（AI）— 即将入职",
          company: "IBM",
          location: "Austin, TX",
          date: "2026年7月入职",
          description: "负责帮助企业把 AI 战略落地为可部署方案，重点在 MVP 构建、技术架构和真实业务采用。",
        },
        pge: {
          title: "应付账款数据分析实习生",
          company: "Pacific Gas and Electric Company (PG&E)",
          location: "Oakland, CA",
          date: "2025年5月 - 2025年8月",
          description: "重构财务数据流程与自动化报表，减少流程摩擦，提高报表速度和稳定性。",
        },
        dicks: {
          title: "数据科学实习生",
          company: "Dick's Sporting Goods",
          location: "San Antonio, TX",
          date: "2024年5月 - 2024年8月",
          description: "围绕用户行为和评论数据支持产品与营销决策，并沉淀可落地的分析输出。",
        },
        store: {
          title: "商业智能团队执行成员",
          company: "Cal Student Store",
          location: "Berkeley, CA",
          date: "2022年8月 - 2025年5月",
          description: "结合营销与商品数据优化促销策略，以清晰指标和快速迭代推动增长。",
        },
      },
      education: {
        berkeley: {
          title: "数据科学 + 经济学",
          company: "University of California, Berkeley",
          location: "Berkeley, CA",
          date: "2022 - 2026",
          description: "聚焦分析、实验设计和数据系统，把复杂信息转成可执行决策。",
        },
      },
    },
  },
  ko: {
    nav: { about: "소개", projects: "프로젝트", email: "이메일" },
    titleText: "안녕하세요",
    introText: "데이터, AI, 분석, 그리고 실용적인 시스템 구축 이야기를 좋아합니다.",
    workHeading: "경력",
    educationHeading: "학력",
    work: {
      ibm: "IBM CSM Architect (AI) 예정",
      pge: "전 PG&E AP 데이터 분석",
      dicks: "전 Dick's 데이터 과학 인턴",
      store: "Cal Student Store BI 임원",
    },
    education: {
      entry: "데이터사이언스 + 경제학<br />University of California, Berkeley<br />2022–2026",
    },
    modal: {
      work: "경력",
      education: "학력",
      wechat: "위챗",
      scan: "아래 QR 코드를 스캔하세요",
      connectWechat: "WeChat으로 연결",
    },
    details: {
      work: {
        ibm: {
          title: "Customer Success Manager Architect (AI) — 입사 예정",
          company: "IBM",
          location: "Austin, TX",
          date: "2026년 7월 시작",
          description: "엔터프라이즈 고객의 AI 전략을 실제 배포 가능한 구조로 연결하는 역할에 집중할 예정입니다.",
        },
        pge: {
          title: "Accounts Payable Data Analyst Intern",
          company: "Pacific Gas and Electric Company (PG&E)",
          location: "Oakland, CA",
          date: "2025년 5월 - 2025년 8월",
          description: "재무 데이터 워크플로를 SQL 파이프라인과 자동화 리포팅으로 개선해 속도와 신뢰성을 높였습니다.",
        },
        dicks: {
          title: "Data Science Intern",
          company: "Dick's Sporting Goods",
          location: "San Antonio, TX",
          date: "2024년 5월 - 2024년 8월",
          description: "고객 행동/리뷰 데이터를 분석해 제품과 마케팅 의사결정을 지원하는 실무를 진행했습니다.",
        },
        store: {
          title: "Business Intelligence Executive",
          company: "Cal Student Store",
          location: "Berkeley, CA",
          date: "2022년 8월 - 2025년 5월",
          description: "마케팅과 상품 데이터를 결합해 프로모션 성과를 개선하고 실행 중심의 지표 문화를 만들었습니다.",
        },
      },
      education: {
        berkeley: {
          title: "Data Science + Economics",
          company: "University of California, Berkeley",
          location: "Berkeley, CA",
          date: "2022 - 2026",
          description: "분석, 실험 설계, 데이터 시스템을 중심으로 실무형 결과를 만드는 데 집중하고 있습니다.",
        },
      },
    },
  },
};

const langOptions = document.querySelectorAll("[data-lang-option]");
const langDropdown = document.querySelector(".lang-dropdown");
const titleNode = document.getElementById("about-typed-title");
const introNode = document.getElementById("about-typed-intro");

const modal = document.getElementById("about-modal");
const modalRole = document.getElementById("about-modal-role");
const modalTitle = document.getElementById("about-modal-title");
const modalMeta = document.getElementById("about-modal-meta");
const modalDesc = document.getElementById("about-modal-desc");
const modalImage = document.getElementById("about-modal-image");
const closeNodes = document.querySelectorAll("[data-about-close]");
const openNodes = document.querySelectorAll("[data-modal-kind][data-modal-id]");
const wechatOpen = document.getElementById("wechat-open");

let currentLanguage = window.localStorage.getItem(STORAGE_LANG) || "en";
if (!translations[currentLanguage]) {
  currentLanguage = "en";
}
let activeModal = null;
let typingTimers = [];

const clearTyping = () => {
  typingTimers.forEach((timer) => {
    window.clearInterval(timer);
    window.clearTimeout(timer);
  });
  typingTimers = [];
};

const startTyping = () => {
  if (!titleNode || !introNode) {
    return;
  }
  clearTyping();
  const titleText = titleNode.dataset.text || "";
  const introText = introNode.dataset.text || "";

  titleNode.textContent = "";
  introNode.textContent = "";
  titleNode.classList.add("is-typing");
  introNode.classList.remove("is-typing");

  let titleIndex = 0;
  const titleTimer = window.setInterval(() => {
    titleIndex += 1;
    titleNode.textContent = titleText.slice(0, titleIndex);
    if (titleIndex >= titleText.length) {
      window.clearInterval(titleTimer);
      titleNode.classList.remove("is-typing");
      introNode.classList.add("is-typing");
      let introIndex = 0;
      const introTimer = window.setInterval(() => {
        introIndex += 1;
        introNode.textContent = introText.slice(0, introIndex);
        if (introIndex >= introText.length) {
          window.clearInterval(introTimer);
        }
      }, 55);
      typingTimers.push(introTimer);
    }
  }, 70);

  typingTimers.push(titleTimer);
};

const setActiveLanguageOption = () => {
  langOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.langOption === currentLanguage);
  });
};

const closeModal = () => {
  if (!modal) {
    return;
  }
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("about-modal-open");
  activeModal = null;
};

const renderDetailModal = (kind, id) => {
  const t = translations[currentLanguage];
  const detail = t.details[kind] && t.details[kind][id];
  if (!detail || !modal || !modalRole || !modalTitle || !modalMeta || !modalDesc || !modalImage) {
    return;
  }

  modalRole.textContent = kind === "education" ? t.modal.education : t.modal.work;
  modalTitle.textContent = detail.title;
  modalMeta.textContent = `${detail.company} · ${detail.location} · ${detail.date}`;
  modalDesc.textContent = detail.description;
  modalImage.src = "";
  modalImage.alt = "";
  modalImage.classList.remove("is-visible");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("about-modal-open");
  activeModal = { kind, id };
};

const openWeChatModal = () => {
  const t = translations[currentLanguage];
  if (!modal || !modalRole || !modalTitle || !modalMeta || !modalDesc || !modalImage) {
    return;
  }

  modalRole.textContent = t.modal.wechat;
  modalTitle.textContent = t.modal.connectWechat;
  modalMeta.textContent = t.modal.scan;
  modalDesc.textContent = "";
  // Replace this file with your personal WeChat QR screenshot.
  modalImage.src = "assets/wechat-qr.png?v=20260314-2";
  modalImage.alt = "WeChat QR code";
  modalImage.classList.add("is-visible");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("about-modal-open");
  activeModal = { kind: "wechat", id: "wechat" };
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

  if (titleNode) titleNode.dataset.text = t.titleText;
  if (introNode) introNode.dataset.text = t.introText;

  const workHeading = document.querySelector("[data-i18n='workHeading']");
  const educationHeading = document.querySelector("[data-i18n='educationHeading']");
  if (workHeading) workHeading.textContent = t.workHeading;
  if (educationHeading) educationHeading.textContent = t.educationHeading;

  Object.keys(t.work).forEach((key) => {
    const node = document.querySelector(`[data-i18n='work.${key}']`);
    if (node) {
      node.textContent = t.work[key];
    }
  });

  const eduEntry = document.querySelector("[data-i18n='education.entry']");
  if (eduEntry) {
    eduEntry.innerHTML = t.education.entry;
  }

  setActiveLanguageOption();
  startTyping();

  if (activeModal) {
    if (activeModal.kind === "wechat") {
      openWeChatModal();
    } else {
      renderDetailModal(activeModal.kind, activeModal.id);
    }
  }
};

openNodes.forEach((node) => {
  node.addEventListener("click", () => {
    const kind = node.dataset.modalKind;
    const id = node.dataset.modalId;
    renderDetailModal(kind, id);
  });
});

if (wechatOpen) {
  wechatOpen.addEventListener("click", openWeChatModal);
}

closeNodes.forEach((node) => {
  node.addEventListener("click", closeModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyLanguage(option.dataset.langOption || "en");
    if (langDropdown) {
      langDropdown.removeAttribute("open");
    }
  });
});

applyLanguage(currentLanguage);
