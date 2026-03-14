const ABOUT_DETAILS = {
  work: {
    ibm: {
      role: "Work",
      title: "Customer Success Manager Architect (AI) — Incoming",
      company: "IBM",
      location: "Austin, TX",
      date: "Starting Jul 2026",
      description:
        "I’ll be helping enterprise teams turn AI strategy into practical deployments. The focus is hands-on technical architecture, MVP builds, and guiding real adoption across customer teams.",
    },
    pge: {
      role: "Work",
      title: "Accounts Payable Data Analyst Intern",
      company: "Pacific Gas and Electric Company (PG&E)",
      location: "Oakland, CA",
      date: "May 2025 - Aug 2025",
      description:
        "I rebuilt finance workflows into reliable SQL pipelines and automated reporting, which removed friction and made reporting cycles faster and easier to trust.",
    },
    dicks: {
      role: "Work",
      title: "Data Science Intern",
      company: "Dick's Sporting Goods",
      location: "San Antonio, TX",
      date: "May 2024 - Aug 2024",
      description:
        "I worked with customer behavior and review data to support product and marketing decisions, and learned how to ship insights that teams could act on quickly.",
    },
    store: {
      role: "Work",
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
      role: "Education",
      title: "Data Science + Economics",
      company: "University of California, Berkeley",
      location: "Berkeley, CA",
      date: "2022 - 2026",
      description:
        "Focused on analytics, experimentation, data systems, and decision-making workflows. I spend most of my time building practical systems that turn messy data into clear, useful outputs.",
    },
  },
};

const modal = document.getElementById("about-modal");
const modalRole = document.getElementById("about-modal-role");
const modalTitle = document.getElementById("about-modal-title");
const modalMeta = document.getElementById("about-modal-meta");
const modalDesc = document.getElementById("about-modal-desc");
const modalImage = document.getElementById("about-modal-image");
const closeNodes = document.querySelectorAll("[data-about-close]");
const openNodes = document.querySelectorAll("[data-modal-kind][data-modal-id]");
const wechatOpen = document.getElementById("wechat-open");

const closeModal = () => {
  if (!modal) {
    return;
  }
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("about-modal-open");
};

const openDetailModal = (kind, id) => {
  const detail = ABOUT_DETAILS[kind] && ABOUT_DETAILS[kind][id];
  if (!detail || !modal || !modalRole || !modalTitle || !modalMeta || !modalDesc || !modalImage) {
    return;
  }

  modalRole.textContent = detail.role;
  modalTitle.textContent = detail.title;
  modalMeta.textContent = `${detail.company} · ${detail.location} · ${detail.date}`;
  modalDesc.textContent = detail.description;
  modalImage.src = "";
  modalImage.alt = "";
  modalImage.classList.remove("is-visible");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("about-modal-open");
};

const openWeChatModal = () => {
  if (!modal || !modalRole || !modalTitle || !modalMeta || !modalDesc || !modalImage) {
    return;
  }

  modalRole.textContent = "WeChat";
  modalTitle.textContent = "Connect on WeChat";
  modalMeta.textContent = "Scan the QR code below";
  modalDesc.textContent = "";
  // Replace this file with your personal WeChat QR screenshot.
  modalImage.src = "assets/wechat-qr.png";
  modalImage.alt = "WeChat QR code";
  modalImage.classList.add("is-visible");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("about-modal-open");
};

openNodes.forEach((node) => {
  node.addEventListener("click", () => {
    const kind = node.dataset.modalKind;
    const id = node.dataset.modalId;
    openDetailModal(kind, id);
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
