const STORAGE_LANG = "portfolio_lang";

const translations = {
  en: {
    title: "howard's studio",
    nav: ["Projects", "Work", "About", "Photography", "Connect"],
    hero: {
      eyebrow: "Data Science + Economics",
      title: "Hello world, my name is Howard.",
      altName: "or 胡昊阳",
      bio: "Trying to build the future before it becomes obvious.",
    },
    projects: {
      heading: "Projects",
      intro:
        "This is the part I care most about: building systems that can run on their own, keep me informed, and turn information into useful outputs.",
      open: "Open project",
      close: "Close project",
      cards: [
        {
          tag: "Flagship System",
          title: "JARVIS",
          subtitle: "A personal AI operating system",
          hook: "Stark Industries was fictional. The idea wasn’t.",
          summaries: [
            "JARVIS began as a simple question: what if I had a real digital teammate I could talk to all day, not just another chat window?",
            "Instead of typing prompts, I wanted to say things like: ‘Jarvis, what’s on my agenda today?’ or ‘Research this topic and build a full execution plan.’",
            "JARVIS is my attempt to build that system.",
            "It combines voice interaction with a modular agent architecture capable of research, synthesis, monitoring, and action. Under the hood, specialized agents coordinate tasks like web research, information extraction, summarization, and automated execution.",
            "Rather than a single chatbot, JARVIS functions as a personal AI operating layer, a system that can run workflows end-to-end, from gathering information to producing usable outputs.",
            "The long-term vision is a persistent AI partner that understands context, manages complex tasks, and acts as an always-available digital teammate.",
            "This prototype explores that architecture through OpenClaw-style autonomous browsing, LLM orchestration, and real-time voice interaction.",
          ],
          meta:
            "PYTHON · LLM APIs · AGENT ORCHESTRATION · WEB AUTOMATION · VOICE INTERFACES · OPENCLAW-STYLE SYSTEMS",
        },
        {
          tag: "Automation",
          title: "Brainrot Content Factory",
          subtitle: "An automated pipeline for short-form media",
          hook: "Dopamine maxing by putting shorts content creation on autopilot.",
          summaries: [
            "This started as an experiment in scale: how far can I push a media pipeline before manual bottlenecks show up? The system detects trend signals, builds scripts, generates visuals, and assembles shorts with minimal intervention.",
            "I also built in quality gates around timing, hook strength, and visual continuity so it’s not just auto-generated noise. The end goal is a repeatable engine for autonomous content channels.",
          ],
          meta: "Python · Sora · FFmpeg · Platform APIs",
        },
        {
          tag: "Data Visualization",
          title: "Analytic Dashboard Maker",
          subtitle: "From raw tables to decision-ready dashboards",
          hook:
            "Because manually rebuilding dashboards every week is character development I did not need.",
          summaries: [
            "This project came from seeing how much analyst time gets burned cleaning data and redoing the same visuals. I built a pipeline that ingests messy business data, extracts key metrics, and prepares dashboard-ready structures with much less manual work.",
            "I focused on making outputs practical: clear KPI definitions, reusable transformations, and automated handoff into BI tools so teams can spend more time deciding and less time wrangling.",
          ],
          meta: "Python · Power BI · SQL · Workflow automation",
        },
        {
          tag: "Research Infrastructure",
          title: "Curiosity X",
          subtitle: "Continuous monitoring of the internet",
          hook: "My personal intel feed, minus the 20-tab chaos.",
          summaries: [
            "I built this because I was spending too much time context switching between feeds, forums, and tech news. The agent continuously monitors sources and compiles concise briefings.",
            "It prioritizes what matters, summarizes developments with clear action points, and pushes updates through messaging so I can react fast without manual hunting.",
          ],
          meta: "Python · RSS ingestion · LLM summarization",
        },
      ],
    },
    work: {
      heading: "Work Experience",
      intro: "Click a role to open details.",
      jobs: [
        {
          role: "Customer Success Manager Architect (AI) - Incoming",
          company: "IBM · Austin, TX",
          date: "Starting Jul 2026",
          details: [
            "I’ll be helping enterprise teams translate AI strategy into working architectures they can actually deploy and scale.",
            "What excites me most is the blend of technical depth and people work: building MVPs, guiding adoption, and being the bridge between business goals and implementation reality.",
          ],
          meta: "Python · LLMs · Watsonx · Solution architecture",
        },
        {
          role: "Accounts Payable Data Analytics Intern",
          company: "Pacific Gas and Electric Company (PG&E) · Oakland, CA",
          date: "May 2025 - Aug 2025",
          details: [
            "I rebuilt messy finance data workflows into clean SQL pipelines and cut processing friction by 200%, so reporting became much faster and more reliable.",
            "I learned how much good analytics depends on trust and maintainability, not just smart queries, and focused on building dashboards and automation the team could keep using.",
          ],
          meta: "SQL · Power BI · DAX · Power Automate",
        },
        {
          role: "Data Science Intern",
          company: "Dick's Sporting Goods · San Antonio, TX",
          date: "May 2024 - Aug 2024",
          details: [
            "I worked on behavior and review data to help connect customer signals to better product and marketing decisions.",
            "I left this role with stronger instincts for turning raw data into decisions people can actually act on, not just charts that look good in a deck.",
          ],
          meta: "BigQuery · Python · NLP · TensorFlow · PyTorch",
        },
        {
          role: "Business Intelligence Team Executive Member",
          company: "The Cal Student Store · Berkeley, CA",
          date: "Aug 2022 - May 2025",
          details: [
            "I blended campaign data with merchandising signals to shape promotions that actually moved traffic and conversion.",
            "We drove a 25% CTR increase and 150% sales lift, and I learned how fast iteration plus clear metrics can outperform perfect plans.",
          ],
          meta: "BI · Marketing analytics · Growth strategy",
        },
      ],
    },
    about: {
      heading: "About",
      paragraphs: [
        "I am a UC Berkeley student pursuing dual B.A. degrees in Data Science and Economics. I focus on analytics, business intelligence, and experimentation to turn complex datasets into clear decisions.",
        "My work spans SQL data pipelines, Power BI/Tableau dashboards, forecasting, NLP sentiment analysis, and machine learning model collaboration. I am currently open to internships and full-time opportunities in data and BI.",
        "Lately I’ve been especially into experiment design, dashboard automation, and turning rough ideas into systems people actually use. I optimize for clarity, speed, and outputs that are practical in real team workflows.",
      ],
      educationLabel: "Education",
      school: "University of California, Berkeley",
      date: "Aug 2022 - May 2026 · Data Science and Economics",
    },
    photography: {
      heading: "Photography",
      intro: "Capturing moments, documenting stories, and experimenting with light. Click each field to see samples.",
      cards: [
        { label: "Film", title: "Film", desc: "Analog moments captured on 35mm." },
        { label: "Graduation", title: "Graduation", desc: "Celebrating milestones and memories." },
        { label: "Gig Works", title: "Gig Works", desc: "Events, concerts, and commissioned work." },
        { label: "Shenanigans", title: "Shenanigans", desc: "Creative experiments and fun visual ideas." },
      ],
      ctaBook: "Book a session with me",
      ctaInsta: "@howiesflicks",
      modalAlt: "Photography showcase",
      modalCloseAria: "Close gallery",
      modalPrevAria: "Previous photo",
      modalNextAria: "Next photo",
    },
    footer: {
      links: ["LinkedIn", "Email", "Top"],
      copy: "Haoyang (Howard) Hu.",
    },
    toggles: {
      theme: "Dark",
      language: "中/Eng",
    },
  },
  zh: {
    title: "howard's studio",
    nav: ["项目", "经历", "关于", "摄影", "联系"],
    hero: {
      eyebrow: "数据科学 + 经济学",
      title: "你好，世界，我叫 Howard。",
      altName: "或者你可以叫我 胡昊阳",
      bio: "希望在未来变得显而易见之前，先把它做出来。",
    },
    projects: {
      heading: "项目",
      intro: "这是我最在意的部分：构建能够自主运行、持续提供信息，并把信息转化为可用产出的系统。",
      open: "查看项目",
      close: "收起项目",
      cards: [
        {
          tag: "旗舰系统",
          title: "JARVIS",
          subtitle: "一个个人 AI 操作系统",
          hook: "斯塔克工业是虚构的，但这个想法不是。",
          summaries: [
            "JARVIS 起初来自一个简单的问题：如果我有一个可以整天对话的真实数字队友，而不只是另一个聊天窗口，会怎样？",
            "我不想只靠输入提示词，而是希望直接说：‘Jarvis，今天我的日程是什么？’或‘研究这个主题并给我一套完整执行方案。’",
            "JARVIS 就是我对这个想法的实现。",
            "它把语音交互与模块化 Agent 架构结合，支持研究、综合、监控与执行。底层由多个专用 Agent 协同完成网页研究、信息提取、摘要与自动化执行。",
            "JARVIS 不是单一聊天机器人，而是一个个人 AI 操作层：能够从信息获取到结果产出，端到端地跑完整工作流。",
            "长期目标是打造一个持续在线的 AI 伙伴：理解上下文、管理复杂任务，并始终作为你的数字队友存在。",
            "这个原型重点验证了 OpenClaw 风格的自主浏览、LLM 编排，以及实时语音交互架构。",
          ],
          meta: "PYTHON · LLM APIs · AGENT ORCHESTRATION · WEB AUTOMATION · VOICE INTERFACES · OPENCLAW-STYLE SYSTEMS",
        },
        {
          tag: "自动化",
          title: "Brainrot Content Factory",
          subtitle: "短视频自动化生产管线",
          hook: "把短视频生产交给自动化，让多巴胺拉满。",
          summaries: [
            "这个项目起源于一个规模化实验：在人工瓶颈出现前，内容生产流程能被自动化到什么程度？系统会捕捉趋势信号、生成脚本、产出视觉素材，并自动组装成短视频。",
            "我还加入了节奏、开头吸引力和画面连续性的质量门控，避免只是无意义生成。目标是形成可复用的自治内容引擎。",
          ],
          meta: "Python · Sora · FFmpeg · Platform APIs",
        },
        {
          tag: "数据可视化",
          title: "Analytic Dashboard Maker",
          subtitle: "从原始表到可决策仪表盘",
          hook: "每周手动重做仪表盘这种成长，我已经经历够了。",
          summaries: [
            "我看到分析师大量时间消耗在清洗数据和重复做图，于是做了这条管线：自动处理杂乱业务数据、提取关键指标，并生成可直接进入仪表盘的数据结构。",
            "我重点优化可用性：清晰 KPI 定义、可复用转换步骤、以及自动对接 BI 工具，让团队把时间花在决策而不是搬运数据上。",
          ],
          meta: "Python · Power BI · SQL · Workflow automation",
        },
        {
          tag: "研究基础设施",
          title: "Curiosity X",
          subtitle: "持续互联网监控系统",
          hook: "我的个人情报流，不再需要二十个标签页来回切。",
          summaries: [
            "我做这个项目是因为自己在信息流、论坛和科技新闻之间来回切换太耗精力。该 Agent 会持续监控来源并生成精简简报。",
            "它会优先排序真正重要的更新，输出可执行要点，并通过消息方式推送，帮我快速响应而不必手动到处检索。",
          ],
          meta: "Python · RSS ingestion · LLM summarization",
        },
      ],
    },
    work: {
      heading: "工作经历",
      intro: "点击职位可展开详情。",
      jobs: [
        {
          role: "客户成功经理架构师（AI）- 即将入职",
          company: "IBM · Austin, TX",
          date: "2026年7月入职",
          details: [
            "我将帮助企业团队把 AI 战略落地为可部署、可扩展的实际架构。",
            "我最期待的是技术深度与沟通协作的结合：做 MVP、推动采用，并在业务目标与技术实现之间搭桥。",
          ],
          meta: "Python · LLMs · Watsonx · Solution architecture",
        },
        {
          role: "应付账款数据分析实习生",
          company: "Pacific Gas and Electric Company (PG&E) · Oakland, CA",
          date: "2025年5月 - 2025年8月",
          details: [
            "我把混乱的财务数据流程重构为清晰的 SQL 管线，将处理阻力降低约 200%，让报表更快且更稳定。",
            "这段经历让我更清楚：好分析依赖可信与可维护，而不仅是聪明查询。我也因此把重点放在团队可持续使用的看板与自动化上。",
          ],
          meta: "SQL · Power BI · DAX · Power Automate",
        },
        {
          role: "数据科学实习生",
          company: "Dick's Sporting Goods · San Antonio, TX",
          date: "2024年5月 - 2024年8月",
          details: [
            "我基于行为与评论数据分析用户信号，支持产品和营销决策。",
            "这段经历让我在‘把原始数据转成可执行决策’这件事上更成熟，而不只是做好看的图表。",
          ],
          meta: "BigQuery · Python · NLP · TensorFlow · PyTorch",
        },
        {
          role: "商业智能团队执行成员",
          company: "The Cal Student Store · Berkeley, CA",
          date: "2022年8月 - 2025年5月",
          details: [
            "我把营销活动与商品数据结合，优化促销策略，真正提升流量与转化。",
            "我们实现了 25% 的点击率提升和 150% 的销售增长，也让我更加相信：快速迭代加清晰指标，往往胜过追求完美方案。",
          ],
          meta: "BI · Marketing analytics · Growth strategy",
        },
      ],
    },
    about: {
      heading: "关于我",
      paragraphs: [
        "我目前就读于加州大学伯克利分校，主修数据科学与经济学双学位。我的方向是分析、商业智能与实验设计，把复杂数据转化为清晰决策。",
        "我的工作覆盖 SQL 数据管线、Power BI/Tableau 仪表盘、预测分析、NLP 情感分析与机器学习协作。目前我在积极寻找数据与商业智能方向的实习与全职机会。",
        "最近我尤其关注实验设计、仪表盘自动化，以及把粗糙想法打磨成可落地系统。我追求的是清晰、速度和团队真正可用的输出。",
      ],
      educationLabel: "教育经历",
      school: "加州大学伯克利分校",
      date: "2022年8月 - 2026年5月 · 数据科学与经济学",
    },
    photography: {
      heading: "摄影",
      intro: "记录瞬间、讲述故事、尝试光线。点击下方类别可查看样片。",
      cards: [
        { label: "胶片", title: "胶片", desc: "用 35mm 胶片记录真实瞬间。" },
        { label: "毕业", title: "毕业", desc: "记录重要时刻与纪念回忆。" },
        { label: "商拍", title: "商拍", desc: "活动、演出与委托拍摄。" },
        { label: "玩点有趣的", title: "玩点有趣的", desc: "创意实验与有趣视觉表达。" },
      ],
      ctaBook: "预约拍摄",
      ctaInsta: "@howiesflicks",
      modalAlt: "摄影作品展示",
      modalCloseAria: "关闭画廊",
      modalPrevAria: "上一张",
      modalNextAria: "下一张",
    },
    footer: {
      links: ["领英", "邮箱", "回到顶部"],
      copy: "胡昊阳（Howard Hu）",
    },
    toggles: {
      theme: "明/暗",
      language: "中/Eng",
    },
  },
};

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const langToggle = document.getElementById("lang-toggle");
const footerCopy = document.getElementById("footer-copy");
const typedTitle = document.getElementById("typed-title");
const typedAltName = document.getElementById("typed-alt-name");
const typedBio = document.getElementById("typed-bio");

const timelineSection = document.getElementById("work");
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineTriggers = document.querySelectorAll(".timeline-trigger");
const projectsSection = document.getElementById("projects");
const projectCards = document.querySelectorAll(".project-card");
const projectTriggers = document.querySelectorAll(".project-trigger");

const photoCards = document.querySelectorAll(".photo-card");
const photoModal = document.getElementById("photo-modal");
const photoModalImage = document.getElementById("photo-modal-image");
const photoModalCounter = document.getElementById("photo-modal-counter");
const photoPrevButton = document.querySelector("[data-photo-prev]");
const photoNextButton = document.querySelector("[data-photo-next]");
const photoCloseButtons = document.querySelectorAll("[data-photo-close]");

let currentLanguage = window.localStorage.getItem(STORAGE_LANG) || "en";
let typingTimers = [];

const setText = (selector, value) => {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = value;
  }
};

const clearTypingTimers = () => {
  typingTimers.forEach((timer) => {
    window.clearInterval(timer);
    window.clearTimeout(timer);
  });
  typingTimers = [];
};

const startHeroTyping = () => {
  if (!typedTitle) {
    return;
  }
  clearTypingTimers();
  typedTitle.classList.add("is-typing");

  const titleText = typedTitle.dataset.text || "";
  const altText = typedAltName ? typedAltName.dataset.text || "" : "";
  const bioText = typedBio ? typedBio.dataset.text || "" : "";

  typedTitle.textContent = "";
  if (typedAltName) {
    typedAltName.textContent = "";
  }
  if (typedBio) {
    typedBio.textContent = "";
  }

  let titleIndex = 0;
  const titleInterval = window.setInterval(() => {
    titleIndex += 1;
    typedTitle.textContent = titleText.slice(0, titleIndex);
    if (titleIndex >= titleText.length) {
      window.clearInterval(titleInterval);

      const typeBio = () => {
        if (!typedBio) {
          return;
        }
        let bioIndex = 0;
        const bioInterval = window.setInterval(() => {
          bioIndex += 1;
          typedBio.textContent = bioText.slice(0, bioIndex);
          if (bioIndex >= bioText.length) {
            window.clearInterval(bioInterval);
          }
        }, 90);
        typingTimers.push(bioInterval);
      };

      if (typedAltName) {
        let altIndex = 0;
        const altInterval = window.setInterval(() => {
          altIndex += 1;
          typedAltName.textContent = altText.slice(0, altIndex);
          if (altIndex >= altText.length) {
            window.clearInterval(altInterval);
            typeBio();
          }
        }, 90);
        typingTimers.push(altInterval);
      } else {
        typeBio();
      }
    }
  }, 112);

  typingTimers.push(titleInterval);
};

const getProjectTriggerLabel = (isOpen) => {
  const langSet = translations[currentLanguage].projects;
  return isOpen ? langSet.close : langSet.open;
};

const applyLanguage = (lang, animateHero = true) => {
  currentLanguage = lang === "zh" ? "zh" : "en";
  window.localStorage.setItem(STORAGE_LANG, currentLanguage);
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage === "zh" ? "zh-Hans" : "en";
  document.title = t.title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute(
      "content",
      currentLanguage === "zh"
        ? "胡昊阳（Howard Hu）- 伯克利数据科学与经济学学生，聚焦分析、实验与商业智能。"
        : "Haoyang (Howard) Hu - UC Berkeley Data Science and Economics student focused on analytics, experimentation, and BI."
    );
  }

  document.querySelectorAll(".nav-links a").forEach((link, index) => {
    if (t.nav[index]) {
      link.textContent = t.nav[index];
    }
  });

  setText(".eyebrow", t.hero.eyebrow);
  if (typedTitle) typedTitle.dataset.text = t.hero.title;
  if (typedAltName) typedAltName.dataset.text = t.hero.altName;
  if (typedBio) typedBio.dataset.text = t.hero.bio;

  setText("#projects h2", t.projects.heading);
  const projectIntro = document.querySelector("#projects .section-intro > p");
  if (projectIntro) projectIntro.textContent = t.projects.intro;

  projectCards.forEach((card, index) => {
    const data = t.projects.cards[index];
    if (!data) return;
    const tag = card.querySelector(".card-tag");
    const title = card.querySelector("h3");
    const subtitle = card.querySelector(".project-subtitle");
    const hook = card.querySelector(".project-hook");
    const summaries = card.querySelectorAll(".card-summary");
    const meta = card.querySelector(".detail-meta");

    if (tag) tag.textContent = data.tag;
    if (title) title.textContent = data.title;
    if (subtitle) subtitle.textContent = data.subtitle;
    if (hook) hook.textContent = data.hook;
    summaries.forEach((p, summaryIndex) => {
      if (data.summaries[summaryIndex]) {
        p.textContent = data.summaries[summaryIndex];
      }
    });
    if (meta) meta.textContent = data.meta;
  });

  setText("#work h2", t.work.heading);
  const workIntro = document.querySelector("#work .section-intro > p");
  if (workIntro) workIntro.textContent = t.work.intro;

  timelineItems.forEach((item, index) => {
    const data = t.work.jobs[index];
    if (!data) return;
    const role = item.querySelector(".timeline-role");
    const company = item.querySelector(".timeline-company");
    const date = item.querySelector(".timeline-date");
    const details = item.querySelectorAll(".timeline-detail p");

    if (role) role.textContent = data.role;
    if (company) company.textContent = data.company;
    if (date) date.textContent = data.date;
    if (details[0]) details[0].textContent = data.details[0];
    if (details[1]) details[1].textContent = data.details[1];
    if (details[2]) details[2].textContent = data.meta;
  });

  setText("#about h2", t.about.heading);
  const aboutParagraphs = document.querySelectorAll("#about .about-copy > p");
  aboutParagraphs.forEach((paragraph, index) => {
    if (t.about.paragraphs[index]) {
      paragraph.textContent = t.about.paragraphs[index];
    }
  });
  setText("#about .education-label", t.about.educationLabel);
  setText("#about .about-education h3", t.about.school);
  setText("#about .education-date", t.about.date);

  setText("#photography h2", t.photography.heading);
  const photoIntro = document.querySelector("#photography .section-intro > p");
  if (photoIntro) photoIntro.textContent = t.photography.intro;

  photoCards.forEach((card, index) => {
    const data = t.photography.cards[index];
    if (!data) return;
    const label = card.querySelector(".mini-label");
    const title = card.querySelector("h3");
    const desc = card.querySelector("p");
    if (label) label.textContent = data.label;
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;
  });

  const bookLink = document.querySelector(".photo-cta .photo-cta-link");
  if (bookLink) bookLink.textContent = t.photography.ctaBook;
  const instaLink = document.querySelector(".photo-cta .photo-cta-link.secondary");
  if (instaLink) instaLink.textContent = t.photography.ctaInsta;

  if (photoModalImage) {
    photoModalImage.alt = t.photography.modalAlt;
  }
  const closeBtn = document.querySelector(".photo-modal-close");
  if (closeBtn) closeBtn.setAttribute("aria-label", t.photography.modalCloseAria);
  if (photoPrevButton) photoPrevButton.setAttribute("aria-label", t.photography.modalPrevAria);
  if (photoNextButton) photoNextButton.setAttribute("aria-label", t.photography.modalNextAria);

  const footerLinks = document.querySelectorAll(".social-links a");
  footerLinks.forEach((link, index) => {
    if (t.footer.links[index]) {
      link.textContent = t.footer.links[index];
    }
  });

  if (footerCopy && yearNode) {
    footerCopy.innerHTML = `&copy; <span id="year">${yearNode.textContent}</span> ${t.footer.copy}`;
  }

  if (langToggle) {
    langToggle.textContent = t.toggles.language;
  }

  projectTriggers.forEach((trigger) => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    trigger.textContent = getProjectTriggerLabel(isOpen);
  });

  if (animateHero) {
    startHeroTyping();
  } else {
    if (typedTitle) typedTitle.textContent = typedTitle.dataset.text || "";
    if (typedAltName) typedAltName.textContent = typedAltName.dataset.text || "";
    if (typedBio) typedBio.textContent = typedBio.dataset.text || "";
  }
};

applyLanguage(currentLanguage, true);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "zh" : "en", true);
  });
}

const setTimelineOpen = (targetItem) => {
  timelineItems.forEach((item) => {
    const isOpen = item === targetItem;
    item.classList.toggle("is-open", isOpen);
    const trigger = item.querySelector(".timeline-trigger");
    if (trigger) {
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  });
};

timelineTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".timeline-item");
    if (!item) {
      return;
    }

    const isAlreadyOpen = item.classList.contains("is-open");
    if (isAlreadyOpen) {
      item.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      return;
    }

    setTimelineOpen(item);
    const tone = item.dataset.tone;
    if (timelineSection && tone) {
      timelineSection.dataset.tone = tone;
    }
  });
});

if (timelineSection && timelineItems.length) {
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.55) {
          return;
        }

        const item = entry.target;
        const tone = item.dataset.tone;
        if (tone) {
          timelineSection.dataset.tone = tone;
        }
      });
    },
    {
      threshold: [0.55, 0.75],
      rootMargin: "-18% 0px -30% 0px",
    }
  );

  timelineItems.forEach((item) => timelineObserver.observe(item));
}

const setProjectOpen = (targetCard) => {
  projectCards.forEach((card) => {
    const isOpen = card === targetCard;
    card.classList.toggle("is-open", isOpen);
    const trigger = card.querySelector(".project-trigger");
    if (trigger) {
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      trigger.textContent = getProjectTriggerLabel(isOpen);
    }
  });
};

projectTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const card = trigger.closest(".project-card");
    if (!card) {
      return;
    }

    const isOpen = card.classList.contains("is-open");
    if (isOpen) {
      card.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      trigger.textContent = getProjectTriggerLabel(false);
      return;
    }

    setProjectOpen(card);
    const tone = card.dataset.tone;
    if (projectsSection && tone) {
      projectsSection.dataset.tone = tone;
    }
  });
});

if (projectsSection && projectCards.length) {
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.55) {
          return;
        }
        const tone = entry.target.dataset.tone;
        if (tone) {
          projectsSection.dataset.tone = tone;
        }
      });
    },
    {
      threshold: [0.55, 0.75],
      rootMargin: "-20% 0px -30% 0px",
    }
  );

  projectCards.forEach((card) => projectObserver.observe(card));
}

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);
reveals.forEach((element) => observer.observe(element));

const PHOTO_CATEGORIES = {
  film: { folder: "film" },
  graduation: { folder: "graduation" },
  gig: { folder: "gig" },
  shenanigans: { folder: "shenanigans" },
};

let activePhotos = [];
let activeIndex = 0;
let slideshowTimer = null;
let lockedScrollY = 0;

const imageCache = new Map();
const extensions = ["jpg", "jpeg", "png", "webp"];

const setActivePhotoCard = (categoryKey) => {
  photoCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.photoCategory === categoryKey);
  });
};

const lockScroll = () => {
  lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = `-${lockedScrollY}px`;
};

const unlockScroll = () => {
  document.body.style.position = "";
  document.body.style.width = "";
  document.body.style.top = "";
  window.scrollTo(0, lockedScrollY);
};

const setModalImage = (index) => {
  if (!photoModalImage || !activePhotos.length) {
    return;
  }
  activeIndex = (index + activePhotos.length) % activePhotos.length;
  photoModalImage.classList.remove("is-visible");
  window.setTimeout(() => {
    photoModalImage.src = activePhotos[activeIndex];
    photoModalImage.onload = () => {
      photoModalImage.classList.add("is-visible");
    };
  }, 110);
  if (photoModalCounter) {
    photoModalCounter.textContent = `${activeIndex + 1} / ${activePhotos.length}`;
  }
};

const stopSlideshow = () => {
  if (slideshowTimer) {
    window.clearInterval(slideshowTimer);
    slideshowTimer = null;
  }
};

const startSlideshow = () => {
  stopSlideshow();
  if (activePhotos.length < 2) {
    return;
  }
  slideshowTimer = window.setInterval(() => {
    setModalImage(activeIndex + 1);
  }, 1250);
};

const closeGallery = () => {
  if (!photoModal) {
    return;
  }
  stopSlideshow();
  photoModal.classList.remove("is-open");
  photoModal.setAttribute("aria-hidden", "true");
  setActivePhotoCard(null);
  unlockScroll();
};

const openGallery = (categoryKey) => {
  if (!photoModal || !photoModalImage) {
    return;
  }
  const photos = imageCache.get(categoryKey) || [];
  if (!photos.length) {
    return;
  }
  activePhotos = photos;
  activeIndex = 0;
  setActivePhotoCard(categoryKey);
  lockScroll();
  photoModal.classList.add("is-open");
  photoModal.setAttribute("aria-hidden", "false");
  setModalImage(0);
  startSlideshow();
};

const probeSequentialPhotos = async (folder) => {
  const found = [];
  let misses = 0;
  for (let i = 1; i <= 80; i += 1) {
    let matched = false;
    for (const extension of extensions) {
      const path = `public/photos/${folder}/${i}.${extension}`;
      const ok = await new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = path;
      });
      if (ok) {
        found.push(path);
        matched = true;
        break;
      }
    }
    if (!matched) {
      misses += 1;
      if (misses >= 10) {
        break;
      }
    } else {
      misses = 0;
    }
  }
  return found;
};

const loadCategoryPhotos = async (categoryKey) => {
  const meta = PHOTO_CATEGORIES[categoryKey];
  if (!meta) {
    return [];
  }
  if (imageCache.has(categoryKey)) {
    return imageCache.get(categoryKey);
  }

  let photoList = [];
  try {
    const response = await fetch(`public/photos/${meta.folder}/manifest.json`, {
      cache: "no-store",
    });
    if (response.ok) {
      const filenames = await response.json();
      if (Array.isArray(filenames)) {
        photoList = filenames.map((name) => `public/photos/${meta.folder}/${name}`);
      }
    }
  } catch (_error) {
    photoList = [];
  }

  if (!photoList.length) {
    photoList = await probeSequentialPhotos(meta.folder);
  }

  imageCache.set(categoryKey, photoList);
  return photoList;
};

photoCards.forEach((card) => {
  const category = card.dataset.photoCategory;
  const previewImage = card.querySelector(".photo-card-preview img");
  if (!category || !previewImage) {
    return;
  }

  loadCategoryPhotos(category).then((photos) => {
    if (photos.length) {
      previewImage.src = photos[0];
    }
  });

  card.addEventListener("click", async () => {
    await loadCategoryPhotos(category);
    openGallery(category);
  });
});

if (photoPrevButton) {
  photoPrevButton.addEventListener("click", () => {
    if (!activePhotos.length) {
      return;
    }
    setModalImage(activeIndex - 1);
    startSlideshow();
  });
}

if (photoNextButton) {
  photoNextButton.addEventListener("click", () => {
    if (!activePhotos.length) {
      return;
    }
    setModalImage(activeIndex + 1);
    startSlideshow();
  });
}

photoCloseButtons.forEach((button) => {
  button.addEventListener("click", closeGallery);
});

window.addEventListener("keydown", (event) => {
  if (!photoModal || !photoModal.classList.contains("is-open")) {
    return;
  }
  if (event.key === "Escape") {
    closeGallery();
  } else if (event.key === "ArrowLeft") {
    setModalImage(activeIndex - 1);
    startSlideshow();
  } else if (event.key === "ArrowRight") {
    setModalImage(activeIndex + 1);
    startSlideshow();
  }
});
