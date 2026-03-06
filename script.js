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

personaPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    const persona = pill.dataset.persona;

    personaPills.forEach((button) => {
      button.classList.toggle("is-active", button === pill);
    });

    if (heroBlurb && persona && personaBlurbs[persona]) {
      heroBlurb.textContent = personaBlurbs[persona];
    }
  });
});

const timelineSection = document.getElementById("work");
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineTriggers = document.querySelectorAll(".timeline-trigger");

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
