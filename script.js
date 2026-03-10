const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const typedTitle = document.getElementById("typed-title");
const typedBio = document.getElementById("typed-bio");
if (typedTitle) {
  const fullText = typedTitle.dataset.text || typedTitle.textContent || "";
  typedTitle.textContent = "";
  typedTitle.classList.add("is-typing");
  if (typedBio) {
    typedBio.textContent = "";
  }

  let index = 0;
  const typeInterval = window.setInterval(() => {
    index += 1;
    typedTitle.textContent = fullText.slice(0, index);
    if (index >= fullText.length) {
      window.clearInterval(typeInterval);
      if (typedBio) {
        const bioText = typedBio.dataset.text || "";
        let bioIndex = 0;
        const bioInterval = window.setInterval(() => {
          bioIndex += 1;
          typedBio.textContent = bioText.slice(0, bioIndex);
          if (bioIndex >= bioText.length) {
            window.clearInterval(bioInterval);
          }
        }, 90);
      }
    }
  }, 112);
}

const timelineSection = document.getElementById("work");
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineTriggers = document.querySelectorAll(".timeline-trigger");
const projectsSection = document.getElementById("projects");
const projectCards = document.querySelectorAll(".project-card");
const projectTriggers = document.querySelectorAll(".project-trigger");

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
      trigger.textContent = isOpen ? "Close project" : "Open project";
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
      trigger.textContent = "Open project";
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
