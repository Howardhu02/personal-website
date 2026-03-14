(function () {
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
            "I’ll be helping enterprise teams turn AI strategy into practical deployments they can actually ship. The role combines hands-on architecture design, MVP builds, and customer-facing technical guidance across data, GenAI, and LLM workflows. What I’m most excited about is being the bridge between business goals and working systems that deliver measurable value.",
        },
        pge: {
          title: "Accounts Payable Data Analyst Intern",
          company: "Pacific Gas and Electric Company (PG&E)",
          location: "Oakland, CA",
          date: "May 2025 - Aug 2025",
          description:
            "I rebuilt messy finance workflows into reliable SQL pipelines and automated reporting systems. That cut processing friction significantly and made reporting cycles faster, cleaner, and easier for stakeholders to trust. I also focused on maintainability so the team could keep using and extending the workflows after handoff.",
        },
        dicks: {
          title: "Data Science Intern",
          company: "Dick's Sporting Goods",
          location: "San Antonio, TX",
          date: "May 2024 - Aug 2024",
          description:
            "I worked with customer behavior and review data to connect user signals with product and marketing decisions. The work involved translating raw datasets into practical analyses teams could use for planning and prioritization. This role sharpened my ability to move from exploratory analysis to clear, actionable recommendations.",
        },
        store: {
          title: "Business Intelligence Executive",
          company: "Cal Student Store",
          location: "Berkeley, CA",
          date: "Aug 2022 - May 2025",
          description:
            "I combined campaign performance and merchandising data to optimize promotions and improve conversion outcomes. We iterated quickly on experiments, measured results through clear KPI tracking, and translated findings into concrete growth actions. The work strengthened my approach to balancing analytics rigor with fast execution.",
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
          description: "我将帮助企业把 AI 战略落地为真正可部署、可扩展的方案。工作重点包括架构设计、MVP 构建以及推动客户侧的真实采用与价值实现。我最期待的是把业务目标和技术实现高质量连接起来。",
        },
        pge: {
          title: "应付账款数据分析实习生",
          company: "Pacific Gas and Electric Company (PG&E)",
          location: "Oakland, CA",
          date: "2025年5月 - 2025年8月",
          description: "我重构了财务数据流程并搭建自动化报表体系，显著降低了流程摩擦。报表产出更快、更稳定，也更容易被业务方信任和持续使用。同时我也强调可维护性，确保团队后续能够顺利接手和扩展。",
        },
        dicks: {
          title: "数据科学实习生",
          company: "Dick's Sporting Goods",
          location: "San Antonio, TX",
          date: "2024年5月 - 2024年8月",
          description: "我围绕用户行为与评论数据分析关键信号，支持产品和营销方向判断。工作重点是把原始数据转化为团队可执行的结论，而不只是做展示型图表。这段经历让我更擅长把分析结果快速落地到业务动作中。",
        },
        store: {
          title: "商业智能团队执行成员",
          company: "Cal Student Store",
          location: "Berkeley, CA",
          date: "2022年8月 - 2025年5月",
          description: "我结合营销与商品数据持续优化促销策略与转化表现。团队通过快速实验、清晰指标和持续复盘，把分析结果直接转化为增长动作。这段经历也让我形成了“数据严谨 + 执行速度”并重的工作方式。",
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
          description: "엔터프라이즈 고객의 AI 전략을 실제로 배포 가능한 구조로 연결하는 역할을 맡게 됩니다. MVP 설계와 구현, 아키텍처 제안, 도입 확산까지 기술과 비즈니스를 함께 다루는 포지션입니다. 목표는 고객이 체감할 수 있는 실질적 가치로 연결하는 것입니다.",
        },
        pge: {
          title: "Accounts Payable Data Analyst Intern",
          company: "Pacific Gas and Electric Company (PG&E)",
          location: "Oakland, CA",
          date: "2025년 5월 - 2025년 8월",
          description: "복잡한 재무 데이터 워크플로를 SQL 파이프라인과 자동화 리포팅으로 재설계했습니다. 처리 마찰을 줄이고 보고 주기의 속도와 신뢰성을 함께 높였습니다. 또한 유지보수성을 고려해 팀이 이후에도 안정적으로 운영할 수 있게 만들었습니다.",
        },
        dicks: {
          title: "Data Science Intern",
          company: "Dick's Sporting Goods",
          location: "San Antonio, TX",
          date: "2024년 5월 - 2024년 8월",
          description: "고객 행동 및 리뷰 데이터를 분석해 제품/마케팅 의사결정을 지원했습니다. 단순 리포트가 아니라 실제 실행 가능한 인사이트로 변환하는 데 집중했습니다. 이 경험을 통해 분석 결과를 빠르게 실무에 연결하는 역량을 강화했습니다.",
        },
        store: {
          title: "Business Intelligence Executive",
          company: "Cal Student Store",
          location: "Berkeley, CA",
          date: "2022년 8월 - 2025년 5월",
          description: "마케팅 데이터와 상품 데이터를 결합해 프로모션 성과와 전환을 개선했습니다. 빠른 실험과 명확한 KPI 추적을 통해 분석 결과를 바로 실행으로 연결했습니다. 이 과정에서 데이터 기반 성장 운영의 실전 감각을 크게 키웠습니다.",
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

const readStoredLanguage = () => {
  try {
    return window.localStorage.getItem(STORAGE_LANG) || "en";
  } catch (error) {
    return "en";
  }
};

const writeStoredLanguage = (lang) => {
  try {
    window.localStorage.setItem(STORAGE_LANG, lang);
  } catch (error) {
    // Ignore storage write errors.
  }
};

let currentLanguage = readStoredLanguage();
if (!translations[currentLanguage]) {
  currentLanguage = "en";
}
let activeModal = null;
let typingTimers = [];

const isAboutViewActive = () => {
  const aboutView = document.getElementById("view-about");
  if (aboutView) {
    return aboutView.classList.contains("is-active");
  }
  return true;
};

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
  writeStoredLanguage(currentLanguage);
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
  if (isAboutViewActive()) {
    startTyping();
  } else {
    clearTyping();
    if (titleNode) titleNode.textContent = titleNode.dataset.text || "";
    if (introNode) introNode.textContent = introNode.dataset.text || "";
  }

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

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-modal-kind][data-modal-id]");
  if (!trigger) {
    return;
  }
  const kind = trigger.dataset.modalKind;
  const id = trigger.dataset.modalId;
  renderDetailModal(kind, id);
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

window.addEventListener("spa-view-change", (event) => {
  const view = event.detail && event.detail.view ? event.detail.view : "";
  if (view === "about") {
    startTyping();
  } else {
    clearTyping();
    if (titleNode) titleNode.textContent = titleNode.dataset.text || "";
    if (introNode) introNode.textContent = introNode.dataset.text || "";
  }
});

langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (langDropdown) {
      langDropdown.removeAttribute("open");
    }
  });
});

window.addEventListener("portfolio-language-change", (event) => {
  const nextLang = event.detail && event.detail.language ? event.detail.language : readStoredLanguage();
  applyLanguage(nextLang);
});

applyLanguage(currentLanguage);
window.setTimeout(() => {
  if (isAboutViewActive()) {
    startTyping();
  }
}, 0);
})();
