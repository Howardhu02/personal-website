const STORAGE_LANG = "portfolio_lang";

const translations = {
  en: {
    title: "howard's studio",
    nav: ["About", "Projects", "Photos"],
    emailLabel: "Email",
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
      lead:
        "Here are some of the fun stuff and side quests I’ve built or am currently building.",
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
          tag: "AGENT AUTOMATION",
          title: "Stevie Tech Broadcast",
          subtitle: "where headlines become yaplines",
          hook: "An AI news pipeline that researches, scripts, and edits so Stevie can clock in on time.",
          summaries: [
            "This started as an experiment in one question: how much of a news studio can I automate before it turns into slop?",
            "The pipeline tracks story candidates, analyzes what actually matters, gathers screenshots and support visuals, writes the script, and builds the short around Stevie as the anchor.",
            "The goal is not random AI noise. It is fast, watchable, context-rich news content with better media selection, cleaner pacing, and less manual babysitting.",
          ],
          meta: "PYTHON • OPENAI API • FFMPEG • PLATFORM APIS",
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
        {
          tag: "Visual Storytelling",
          title: "Photography Studio",
          subtitle: "People, light, and memory-driven frames",
          hook: "A separate visual module for film, graduation, gigs, and experimental work.",
          summaries: [
            "This project page is where I curate my photography work as a clean gallery experience.",
            "It includes categorized collections, fullscreen browsing, and fast navigation so the images stay the main focus.",
          ],
          meta: "Film · Graduation · Gig Works · Shenanigans",
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
      heading: "Photos",
      intro: "Capturing moments, documenting stories, and experimenting with light. Pick a category and step into the full set.",
      cards: [
        { label: "Film", title: "Film", desc: "Analog frames, softer grain, slower timing." },
        { label: "Graduation", title: "Graduation", desc: "Milestones, families, and the energy around them." },
        { label: "Gig Works", title: "Gig Works", desc: "Live movement, events, and commissioned coverage." },
        { label: "Shenanigans", title: "Shenanigans", desc: "Creative side quests and stranger visual ideas." },
      ],
      setKicker: "Photo Set",
      back: "Back to photos",
      progress: "through set",
      frames: "frames",
      ctaBook: "Book a session with me",
      ctaInsta: "@howiesflicks",
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
    nav: ["关于", "项目", "照片"],
    emailLabel: "邮件",
    hero: {
      eyebrow: "数据科学 + 经济学",
      title: "你好，世界，我叫 Howard。",
      altName: "或者你可以叫我 胡昊阳",
      bio: "希望在未来变得显而易见之前，先把它做出来。",
    },
    projects: {
      heading: "项目",
      intro: "这是我最在意的部分：构建能够自主运行、持续提供信息，并把信息转化为可用产出的系统。",
      lead: "这里是我做过或正在构建的一些有趣系统和 side quests。",
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
          tag: "AGENT 自动化",
          title: "Stevie Tech Broadcast",
          subtitle: "把新闻标题变成能开讲的内容",
          hook: "一条会自己研究、写稿、剪辑的 AI 新闻流水线，让 Stevie 能准时上班。",
          summaries: [
            "这个项目起点其实只有一个问题：一间新闻工作室到底能自动化到什么程度，才不会变成纯 AI 糊弄内容？",
            "整条流水线会追踪候选新闻、判断真正值得讲的内容、抓取截图和辅助视觉素材、写出脚本，再围绕 Stevie 这个主播把短片完整拼起来。",
            "目标不是随机生成的 AI 噪音，而是更快、更好看、信息密度更高的科技新闻短内容，配更好的素材选择、更干净的节奏和更少的人工 babysitting。",
          ],
          meta: "PYTHON • OPENAI API • FFMPEG • PLATFORM APIS",
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
        {
          tag: "视觉叙事",
          title: "摄影作品集",
          subtitle: "关于人物、光线和记忆的画面",
          hook: "独立摄影页面：胶片、毕业、商拍和创意实验。",
          summaries: [
            "这个模块专门用于展示我的摄影作品，保持干净沉浸的浏览体验。",
            "包含分类浏览、全屏查看和快速切换，让画面本身成为主角。",
          ],
          meta: "胶片 · 毕业 · 商拍 · 创意",
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
      heading: "照片",
      intro: "记录瞬间、讲述故事、尝试光线。选择一个类别，进入完整作品集。",
      cards: [
        { label: "胶片", title: "胶片", desc: "更慢一点的节奏、更柔和的颗粒感。" },
        { label: "毕业", title: "毕业", desc: "记录里程碑、家人与当下情绪。" },
        { label: "商拍", title: "商拍", desc: "现场、活动与委托工作的动态感。" },
        { label: "玩点有趣的", title: "玩点有趣的", desc: "创意副本、实验画面和有点怪的想法。" },
      ],
      setKicker: "照片系列",
      back: "返回照片",
      progress: "浏览进度",
      frames: "张",
      ctaBook: "预约拍摄",
      ctaInsta: "@howiesflicks",
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
  ko: {
    title: "howard's studio",
    nav: ["소개", "프로젝트", "사진"],
    emailLabel: "이메일",
    hero: {
      eyebrow: "데이터 사이언스 + 경제학",
      title: "안녕하세요, 제 이름은 Howard입니다.",
      altName: "또는 胡昊阳",
      bio: "미래가 당연해지기 전에 먼저 만들어보고 있습니다.",
    },
    projects: {
      heading: "프로젝트",
      intro:
        "제가 가장 중요하게 보는 파트입니다. 스스로 실행되고, 필요한 정보를 모아주며, 실제로 쓸 수 있는 결과로 바꾸는 시스템을 만듭니다.",
      lead: "제가 만들었거나 지금 만들고 있는 재미있는 시스템과 사이드 퀘스트입니다.",
      open: "프로젝트 열기",
      close: "프로젝트 닫기",
      cards: [
        {
          tag: "플래그십 시스템",
          title: "JARVIS",
          subtitle: "개인용 AI 운영 시스템",
          hook: "Stark Industries는 허구였지만, 아이디어는 아니었습니다.",
          summaries: [
            "JARVIS는 단순한 질문에서 시작됐습니다. 채팅창 하나 더 만드는 게 아니라, 하루 종일 대화할 수 있는 진짜 디지털 팀원이 있다면 어떨까?",
            "프롬프트를 타이핑하는 대신, 'Jarvis, 오늘 일정이 뭐야?' 또는 '이 주제 조사해서 실행 계획까지 만들어줘'라고 말하고 싶었습니다.",
            "JARVIS는 그 아이디어를 실제 시스템으로 만든 시도입니다.",
            "음성 인터랙션과 모듈형 에이전트 아키텍처를 결합해 리서치, 요약, 모니터링, 실행까지 처리합니다. 내부적으로는 전문 에이전트들이 웹 리서치, 정보 추출, 요약, 자동 실행을 분담합니다.",
            "JARVIS는 단일 챗봇이 아니라 개인 AI 운영 레이어에 가깝습니다. 정보 수집부터 결과 산출까지 워크플로 전체를 끝단까지 수행합니다.",
            "장기적으로는 맥락을 이해하고 복잡한 업무를 관리하며 항상 함께 일할 수 있는 지속형 AI 파트너를 목표로 합니다.",
            "현재 프로토타입은 OpenClaw 스타일 자율 브라우징, LLM 오케스트레이션, 실시간 음성 인터랙션 구조를 중심으로 검증하고 있습니다.",
          ],
          meta: "PYTHON · LLM APIs · AGENT ORCHESTRATION · WEB AUTOMATION · VOICE INTERFACES · OPENCLAW-STYLE SYSTEMS",
        },
        {
          tag: "AGENT AUTOMATION",
          title: "Stevie Tech Broadcast",
          subtitle: "헤드라인을 떠들 만한 콘텐츠로",
          hook: "Stevie가 제시간에 출근할 수 있도록 조사, 대본, 편집을 처리하는 AI 뉴스 파이프라인.",
          summaries: [
            "이 프로젝트는 하나의 질문에서 시작했습니다. 뉴스 스튜디오의 어느 정도까지를 자동화할 수 있어야 결과물이 슬롭으로 무너지지 않을까?",
            "파이프라인은 후보 스토리를 추적하고, 실제로 중요한 내용을 판단하고, 스크린샷과 보조 비주얼을 모으고, 대본을 쓰고, Stevie를 앵커로 세운 숏폼을 완성합니다.",
            "목표는 무작위 AI 노이즈가 아닙니다. 더 나은 미디어 선택, 더 깔끔한 호흡, 더 적은 수작업 babysitting으로 만드는 빠르고 보기 좋고 맥락 있는 뉴스 콘텐츠입니다.",
          ],
          meta: "PYTHON • OPENAI API • FFMPEG • PLATFORM APIS",
        },
        {
          tag: "데이터 시각화",
          title: "Analytic Dashboard Maker",
          subtitle: "원본 테이블에서 의사결정 대시보드까지",
          hook: "매주 대시보드를 수작업으로 다시 만드는 성장통은 이제 졸업했습니다.",
          summaries: [
            "분석가 시간이 데이터 정리와 반복 시각화에 소모되는 걸 보고, 지저분한 비즈니스 데이터를 자동 정리하고 핵심 지표를 추출해 대시보드 친화 구조로 만드는 파이프라인을 구축했습니다.",
            "KPI 정의, 재사용 가능한 변환 로직, BI 도구 연계를 통해 팀이 데이터 정리보다 의사결정에 집중할 수 있도록 설계했습니다.",
          ],
          meta: "Python · Power BI · SQL · Workflow automation",
        },
        {
          tag: "리서치 인프라",
          title: "Curiosity X",
          subtitle: "지속형 인터넷 모니터링",
          hook: "탭 20개 없이도 돌아가는 개인 인텔 피드.",
          summaries: [
            "피드, 포럼, 테크 뉴스 사이를 계속 오가며 생기는 컨텍스트 전환 비용을 줄이기 위해 만든 에이전트입니다. 주요 소스를 계속 스캔하고 핵심 업데이트를 요약합니다.",
            "중요도를 정렬해 실행 가능한 포인트를 빠르게 전달하고, 메시징 기반 알림으로 수동 검색 없이도 흐름을 유지할 수 있게 했습니다.",
          ],
          meta: "Python · RSS ingestion · LLM summarization",
        },
        {
          tag: "비주얼 스토리텔링",
          title: "Photography Studio",
          subtitle: "사람, 빛, 그리고 기억 중심의 프레임",
          hook: "필름, 졸업, 공연, 실험 작업을 모은 별도 사진 모듈.",
          summaries: [
            "이 프로젝트 페이지는 사진 작업을 깔끔한 갤러리 경험으로 큐레이션한 공간입니다.",
            "카테고리 분류, 풀스크린 보기, 빠른 탐색으로 이미지 자체에 집중하도록 설계했습니다.",
          ],
          meta: "필름 · 졸업 · Gig Works · Shenanigans",
        },
      ],
    },
    work: {
      heading: "경력",
      intro: "직무를 클릭하면 상세 내용을 볼 수 있습니다.",
      jobs: [
        {
          role: "Customer Success Manager Architect (AI) - 입사 예정",
          company: "IBM · Austin, TX",
          date: "2026년 7월 시작",
          details: [
            "엔터프라이즈 고객이 AI 전략을 실제 배포 가능한 아키텍처로 전환할 수 있도록 지원할 예정입니다.",
            "기술 구현과 커뮤니케이션을 연결하며 MVP 구축, 도입 확장, 비즈니스-기술 정렬을 동시에 수행하는 역할에 집중하고 있습니다.",
          ],
          meta: "Python · LLMs · Watsonx · Solution architecture",
        },
        {
          role: "Accounts Payable Data Analytics Intern",
          company: "Pacific Gas and Electric Company (PG&E) · Oakland, CA",
          date: "2025년 5월 - 2025년 8월",
          details: [
            "복잡한 재무 데이터 흐름을 SQL 파이프라인으로 재구성해 처리 마찰을 크게 줄이고 리포팅 속도와 안정성을 높였습니다.",
            "좋은 분석은 영리한 쿼리보다 신뢰성과 유지보수성에 달려 있다는 점을 배웠고, 팀이 지속 활용할 수 있는 자동화와 대시보드에 집중했습니다.",
          ],
          meta: "SQL · Power BI · DAX · Power Automate",
        },
        {
          role: "Data Science Intern",
          company: "Dick's Sporting Goods · San Antonio, TX",
          date: "2024년 5월 - 2024년 8월",
          details: [
            "행동/리뷰 데이터를 통해 고객 신호를 분석하고 제품 및 마케팅 의사결정을 지원했습니다.",
            "원시 데이터를 실제 액션으로 연결하는 분석 사고를 강화한 경험이었습니다.",
          ],
          meta: "BigQuery · Python · NLP · TensorFlow · PyTorch",
        },
        {
          role: "Business Intelligence Team Executive Member",
          company: "The Cal Student Store · Berkeley, CA",
          date: "2022년 8월 - 2025년 5월",
          details: [
            "캠페인 데이터와 상품 데이터를 결합해 실제 전환으로 이어지는 프로모션 전략을 운영했습니다.",
            "CTR 25% 상승, 매출 150% 상승을 만들며 빠른 반복과 명확한 지표의 힘을 체감했습니다.",
          ],
          meta: "BI · Marketing analytics · Growth strategy",
        },
      ],
    },
    about: {
      heading: "소개",
      paragraphs: [
        "저는 UC Berkeley에서 데이터 사이언스와 경제학을 복수전공하고 있으며, 분석·BI·실험 설계를 통해 복잡한 데이터를 명확한 의사결정으로 바꾸는 데 집중하고 있습니다.",
        "SQL 파이프라인, Power BI/Tableau 대시보드, 예측, NLP 감성 분석, ML 협업까지 폭넓게 다루고 있으며 데이터/BI 관련 인턴 및 풀타임 기회를 찾고 있습니다.",
        "최근에는 실험 설계, 대시보드 자동화, 아이디어의 시스템화에 특히 집중하고 있고, 빠르고 명확하며 팀이 바로 쓸 수 있는 결과를 지향합니다.",
      ],
      educationLabel: "학력",
      school: "University of California, Berkeley",
      date: "2022년 8월 - 2026년 5월 · 데이터 사이언스 & 경제학",
    },
    photography: {
      heading: "사진",
      intro: "순간을 기록하고, 이야기를 담고, 빛을 실험합니다. 카테고리를 선택해 전체 세트를 보세요.",
      cards: [
        { label: "필름", title: "필름", desc: "더 느린 템포와 부드러운 그레인의 프레임." },
        { label: "졸업", title: "졸업", desc: "마일스톤, 가족, 그 주변의 에너지." },
        { label: "기가 작업", title: "Gig Works", desc: "라이브 무브먼트, 이벤트, 커미션 커버리지." },
        { label: "쉐너니건스", title: "Shenanigans", desc: "창의적인 사이드 퀘스트와 조금은 이상한 시각 실험." },
      ],
      setKicker: "사진 세트",
      back: "사진으로 돌아가기",
      progress: "세트 진행률",
      frames: "컷",
      ctaBook: "세션 예약하기",
      ctaInsta: "@howiesflicks",
    },
    footer: {
      links: ["LinkedIn", "Email", "맨 위로"],
      copy: "胡昊阳 (Howard Hu)",
    },
    toggles: {
      language: "🌐",
    },
  },
};

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const langOptions = document.querySelectorAll("[data-lang-option]");
const langDropdown = document.querySelector(".lang-dropdown");
const emailOpenTrigger = document.getElementById("email-open-trigger");
const typedTitle = document.getElementById("typed-title");
const typedAltName = document.getElementById("typed-alt-name");
const typedBio = document.getElementById("typed-bio");
const projectsTypedLead = document.getElementById("projects-typed-lead");
const photographyTypedLead = document.getElementById("photography-typed-lead");
const photoCategoryPage = document.getElementById("photo-category-page");
const photoCategoryKicker = document.getElementById("photo-category-kicker");
const photoCategoryTitle = document.getElementById("photo-category-title");
const photoCategoryDescription = document.getElementById("photo-category-description");
const photoCategoryGallery = document.getElementById("photo-category-gallery");
const photoProgressLabel = document.getElementById("photo-progress-label");
const photoProgressFill = document.getElementById("photo-progress-fill");
const photoProgressMeta = document.getElementById("photo-progress-meta");
const photoBackLink = document.querySelector(".photo-back-link");

const timelineSection = document.getElementById("work");
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineTriggers = document.querySelectorAll(".timeline-trigger");
const projectsSection = document.getElementById("projects");
const projectCards = document.querySelectorAll(".project-card");
const projectTriggers = document.querySelectorAll(".project-trigger[type='button']");

const photoCards = document.querySelectorAll(".photo-card");

let currentLanguage = window.localStorage.getItem(STORAGE_LANG) || "en";
if (!["en", "zh", "ko"].includes(currentLanguage)) {
  currentLanguage = "en";
}
let typingTimers = [];
let projectsLeadTypingTimers = [];
let photographyLeadTypingTimers = [];
let activePhotoCategory = null;

const getActiveViewName = () => {
  const activeSpaView = document.querySelector(".spa-view.is-active");
  if (activeSpaView && activeSpaView.id) {
    return activeSpaView.id.replace("view-", "");
  }
  if (projectsTypedLead && !typedTitle) {
    return "projects";
  }
  if (photographyTypedLead && !typedTitle) {
    return "photos";
  }
  return "home";
};

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

const clearProjectsLeadTyping = () => {
  projectsLeadTypingTimers.forEach((timer) => {
    window.clearInterval(timer);
    window.clearTimeout(timer);
  });
  projectsLeadTypingTimers = [];
};

const startProjectsLeadTyping = () => {
  if (!projectsTypedLead) {
    return;
  }
  clearProjectsLeadTyping();
  const text = projectsTypedLead.dataset.text || "";
  projectsTypedLead.textContent = "";
  projectsTypedLead.classList.add("is-typing");

  let index = 0;
  const typingTimer = window.setInterval(() => {
    index += 1;
    projectsTypedLead.textContent = text.slice(0, index);
    if (index >= text.length) {
      window.clearInterval(typingTimer);
    }
  }, 52);

  projectsLeadTypingTimers.push(typingTimer);
};

const clearPhotographyLeadTyping = () => {
  photographyLeadTypingTimers.forEach((timer) => {
    window.clearInterval(timer);
    window.clearTimeout(timer);
  });
  photographyLeadTypingTimers = [];
};

const startPhotographyLeadTyping = () => {
  if (!photographyTypedLead) {
    return;
  }
  clearPhotographyLeadTyping();
  const text = photographyTypedLead.dataset.text || "";
  photographyTypedLead.textContent = "";
  photographyTypedLead.classList.add("is-typing");

  let index = 0;
  const typingTimer = window.setInterval(() => {
    index += 1;
    photographyTypedLead.textContent = text.slice(0, index);
    if (index >= text.length) {
      window.clearInterval(typingTimer);
    }
  }, 52);

  photographyLeadTypingTimers.push(typingTimer);
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

const setActiveLanguageOption = () => {
  langOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.langOption === currentLanguage);
  });
};

const applyLanguage = (lang, animateHero = true) => {
  currentLanguage = ["en", "zh", "ko"].includes(lang) ? lang : "en";
  window.localStorage.setItem(STORAGE_LANG, currentLanguage);
  const t = translations[currentLanguage];

  if (currentLanguage === "zh") {
    document.documentElement.lang = "zh-Hans";
  } else if (currentLanguage === "ko") {
    document.documentElement.lang = "ko";
  } else {
    document.documentElement.lang = "en";
  }
  document.title = t.title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute(
      "content",
      currentLanguage === "zh"
        ? "胡昊阳（Howard Hu）- 伯克利数据科学与经济学学生，聚焦分析、实验与商业智能。"
        : currentLanguage === "ko"
          ? "Howard Hu - UC Berkeley 데이터사이언스·경제학 전공, 분석·실험·BI 중심."
          : "Haoyang (Howard) Hu - UC Berkeley Data Science and Economics student focused on analytics, experimentation, and BI."
    );
  }

  document.querySelectorAll(".nav-links a").forEach((link, index) => {
    if (t.nav[index]) {
      link.textContent = t.nav[index];
    }
  });
  const navAbout = document.querySelector("[data-nav='about']");
  const navProjects = document.querySelector("[data-nav='projects']");
  const navPhotos = document.querySelector("[data-nav='photos']");
  const navEmail = document.querySelector("[data-nav='email']");
  if (navAbout) navAbout.textContent = t.nav[0];
  if (navProjects) navProjects.textContent = t.nav[1];
  if (navPhotos) navPhotos.textContent = t.nav[2];
  if (emailOpenTrigger) {
    emailOpenTrigger.textContent = t.emailLabel;
  }
  if (navEmail) {
    navEmail.textContent = t.emailLabel;
  }

  setText(".eyebrow", t.hero.eyebrow);
  if (typedTitle) typedTitle.dataset.text = t.hero.title;
  if (typedAltName) typedAltName.dataset.text = t.hero.altName;
  if (typedBio) typedBio.dataset.text = t.hero.bio;

  setText("#projects h2", t.projects.heading);
  const projectIntro = document.querySelector("#projects .section-intro > p");
  if (projectIntro) projectIntro.textContent = t.projects.intro;
  if (projectsTypedLead) {
    projectsTypedLead.dataset.text = t.projects.lead;
  }

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
  document.querySelectorAll(".project-card a.project-trigger").forEach((link) => {
    link.textContent = t.projects.open;
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

  if (photographyTypedLead) {
    photographyTypedLead.dataset.text = t.photography.intro;
  }

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
  if (photoBackLink) photoBackLink.textContent = t.photography.back;

  setActiveLanguageOption();
  window.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { language: currentLanguage } }));

  projectTriggers.forEach((trigger) => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    trigger.textContent = getProjectTriggerLabel(isOpen);
  });

  const activeView = getActiveViewName();
  if (typedTitle) {
    if (animateHero && activeView === "home") {
      startHeroTyping();
    } else {
      clearTypingTimers();
      typedTitle.textContent = typedTitle.dataset.text || "";
      if (typedAltName) typedAltName.textContent = typedAltName.dataset.text || "";
      if (typedBio) typedBio.textContent = typedBio.dataset.text || "";
    }
  }

  if (projectsTypedLead) {
    if (activeView === "projects") {
      startProjectsLeadTyping();
    } else {
      clearProjectsLeadTyping();
      projectsTypedLead.textContent = projectsTypedLead.dataset.text || "";
    }
  }
  if (photographyTypedLead) {
    if (activeView === "photos") {
      startPhotographyLeadTyping();
    } else {
      clearPhotographyLeadTyping();
      photographyTypedLead.textContent = photographyTypedLead.dataset.text || "";
    }
  }

  if (activePhotoCategory) {
    renderPhotoCategory(activePhotoCategory);
  }
};

applyLanguage(currentLanguage, true);

langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const nextLang = option.dataset.langOption || "en";
    applyLanguage(nextLang, true);
    if (langDropdown) {
      langDropdown.removeAttribute("open");
    }
  });
});

window.addEventListener("spa-view-change", (event) => {
  const view = event.detail && event.detail.view ? event.detail.view : getActiveViewName();
  if (view === "home") {
    startHeroTyping();
  } else {
    clearTypingTimers();
  }

  if (view === "projects") {
    startProjectsLeadTyping();
  } else if (projectsTypedLead) {
    clearProjectsLeadTyping();
    projectsTypedLead.textContent = projectsTypedLead.dataset.text || "";
  }

  if (view === "photos") {
    startPhotographyLeadTyping();
  } else if (photographyTypedLead) {
    clearPhotographyLeadTyping();
    photographyTypedLead.textContent = photographyTypedLead.dataset.text || "";
  }

  if (view !== "photo-category") {
    updatePhotoProgress(0);
  } else {
    updatePhotoProgress();
  }
});

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
    const trigger = card.querySelector(".project-trigger[type='button']");
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
  film: { folder: "film", tone: "film" },
  graduation: { folder: "graduation", tone: "graduation" },
  gig: { folder: "gig", tone: "gig" },
  shenanigans: { folder: "shenanigans", tone: "shenanigans" },
};

const PHOTO_CATEGORY_STORAGE = "portfolio_photo_category";
const imageCache = new Map();
const extensions = ["jpg", "jpeg", "png", "webp"];

const readStoredPhotoCategory = () => {
  try {
    const stored = window.localStorage.getItem(PHOTO_CATEGORY_STORAGE);
    return stored && PHOTO_CATEGORIES[stored] ? stored : null;
  } catch (error) {
    return null;
  }
};

const writeStoredPhotoCategory = (categoryKey) => {
  try {
    window.localStorage.setItem(PHOTO_CATEGORY_STORAGE, categoryKey);
  } catch (error) {
    // Ignore storage write failures.
  }
};

const setActivePhotoCard = (categoryKey) => {
  photoCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.photoCategory === categoryKey);
  });
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

const updatePhotoProgress = (forceProgress) => {
  if (!photoProgressFill || !photoProgressLabel || !photoProgressMeta) {
    return;
  }

  if (!activePhotoCategory || window.getSpaView?.() !== "photo-category") {
    photoProgressFill.style.transform = "scaleX(0)";
    photoProgressLabel.textContent = "0%";
    photoProgressMeta.textContent = "0";
    return;
  }

  const t = translations[currentLanguage].photography;
  const galleryItems = Array.from(document.querySelectorAll(".photo-shot"));
  const total = galleryItems.length;
  if (!total) {
    photoProgressFill.style.transform = "scaleX(0)";
    photoProgressLabel.textContent = `0% ${t.progress}`;
    photoProgressMeta.textContent = `0 ${t.frames}`;
    return;
  }

  const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress =
    typeof forceProgress === "number"
      ? Math.max(0, Math.min(1, forceProgress))
      : Math.max(0, Math.min(1, (window.scrollY || 0) / scrollable));
  const visibleIndex = Math.max(
    0,
    galleryItems.findIndex((item) => {
      const rect = item.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.42 && rect.bottom >= window.innerHeight * 0.24;
    })
  );

  photoProgressFill.style.transform = `scaleX(${progress})`;
  photoProgressLabel.textContent = `${Math.round(progress * 100)}% ${t.progress}`;
  photoProgressMeta.textContent = `${visibleIndex + 1} / ${total} ${t.frames}`;
};

const renderPhotoCategory = async (categoryKey) => {
  const categoryMeta = PHOTO_CATEGORIES[categoryKey];
  const t = translations[currentLanguage].photography;
  const photos = await loadCategoryPhotos(categoryKey);

  activePhotoCategory = categoryKey;
  writeStoredPhotoCategory(categoryKey);
  setActivePhotoCard(categoryKey);

  const categoryIndex = Object.keys(PHOTO_CATEGORIES).indexOf(categoryKey);
  const fallbackCard = t.cards[categoryIndex] || t.cards[0];

  if (photoCategoryKicker) photoCategoryKicker.textContent = t.setKicker;
  if (photoCategoryTitle) photoCategoryTitle.textContent = fallbackCard.title;
  if (photoCategoryDescription) photoCategoryDescription.textContent = fallbackCard.desc;
  if (photoBackLink) photoBackLink.textContent = t.back;
  if (photoCategoryPage) {
    photoCategoryPage.dataset.photoTone = categoryMeta ? categoryMeta.tone : "";
  }

  if (photoCategoryGallery) {
    if (!photos.length) {
      photoCategoryGallery.innerHTML = '<p class="photo-gallery-empty">Photos are loading or unavailable right now.</p>';
    } else {
      photoCategoryGallery.innerHTML = photos
        .map((path, index) => {
          const priority = index < 3 ? "eager" : "lazy";
          const cardClass = index % 5 === 0 ? "photo-shot photo-shot-feature" : "photo-shot";
          return `
            <figure class="${cardClass} reveal" data-shot-index="${index + 1}">
              <span class="photo-shot-index">${String(index + 1).padStart(2, "0")}</span>
              <img src="${path}" alt="${fallbackCard.title} frame ${index + 1}" loading="${priority}" />
            </figure>
          `;
        })
        .join("");

      photoCategoryGallery.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    }
  }

  updatePhotoProgress(0);
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
    if (window.setSpaView) {
      activePhotoCategory = category;
      writeStoredPhotoCategory(category);
      window.setSpaView("photo-category");
    } else {
      await renderPhotoCategory(category);
    }
  });
});
window.addEventListener("scroll", () => {
  updatePhotoProgress();
}, { passive: true });

window.addEventListener("spa-view-change", async (event) => {
  const view = event.detail && event.detail.view ? event.detail.view : getActiveViewName();
  if (view === "photo-category") {
    await renderPhotoCategory(activePhotoCategory || readStoredPhotoCategory() || "film");
  }
});

if (getActiveViewName() === "photo-category") {
  renderPhotoCategory(readStoredPhotoCategory() || "film");
}
