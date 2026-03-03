const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const personaBlurbs = {
  analyst:
    "I like building things that help teams see what matters faster: experiments, dashboards, models, and systems that turn messy data into action.",
  builder:
    "I enjoy turning rough ideas into usable workflows, especially when analytics, automation, and product thinking need to work together.",
  operator:
    "I care about outputs that survive real teams: reporting that refreshes cleanly, insights that are explainable, and systems people actually adopt.",
};

const heroBlurb = document.getElementById("hero-blurb");
const personaPills = document.querySelectorAll(".persona-pill");
const workCards = document.querySelectorAll(".work-card");

personaPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    const persona = pill.dataset.persona;

    personaPills.forEach((button) => {
      button.classList.toggle("is-active", button === pill);
    });

    if (heroBlurb && persona && personaBlurbs[persona]) {
      heroBlurb.textContent = personaBlurbs[persona];
    }

    workCards.forEach((card) => {
      const tags = (card.dataset.personaTags || "").split(",");
      const matches = persona ? tags.includes(persona) : true;
      card.classList.toggle("is-dimmed", !matches);
    });
  });
});

const cardToggles = document.querySelectorAll(".card-toggle");
cardToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const card = toggle.closest(".work-card");
    if (!card) {
      return;
    }

    const isOpen = card.classList.toggle("is-open");
    const closedLabel = toggle.dataset.closedLabel || "Open case study";
    const openLabel = toggle.dataset.openLabel || "Close case study";
    toggle.textContent = isOpen ? openLabel : closedLabel;
  });
});

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
