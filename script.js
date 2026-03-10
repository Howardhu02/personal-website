const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const typedTitle = document.getElementById("typed-title");
const typedAltName = document.getElementById("typed-alt-name");
const typedBio = document.getElementById("typed-bio");
if (typedTitle) {
  const fullText = typedTitle.dataset.text || typedTitle.textContent || "";
  typedTitle.textContent = "";
  typedTitle.classList.add("is-typing");
  if (typedAltName) {
    typedAltName.textContent = "";
  }
  if (typedBio) {
    typedBio.textContent = "";
  }

  let index = 0;
  const typeInterval = window.setInterval(() => {
    index += 1;
    typedTitle.textContent = fullText.slice(0, index);
    if (index >= fullText.length) {
      window.clearInterval(typeInterval);
      const startBioTyping = () => {
        if (!typedBio) {
          return;
        }
        const bioText = typedBio.dataset.text || "";
        let bioIndex = 0;
        const bioInterval = window.setInterval(() => {
          bioIndex += 1;
          typedBio.textContent = bioText.slice(0, bioIndex);
          if (bioIndex >= bioText.length) {
            window.clearInterval(bioInterval);
          }
        }, 90);
      };

      if (typedAltName) {
        const altNameText = typedAltName.dataset.text || "";
        let altNameIndex = 0;
        const altNameInterval = window.setInterval(() => {
          altNameIndex += 1;
          typedAltName.textContent = altNameText.slice(0, altNameIndex);
          if (altNameIndex >= altNameText.length) {
            window.clearInterval(altNameInterval);
            startBioTyping();
          }
        }, 90);
      } else {
        startBioTyping();
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

const PHOTO_CATEGORIES = {
  film: { folder: "film", title: "Film" },
  graduation: { folder: "graduation", title: "Graduation" },
  gig: { folder: "gig", title: "Gig Works" },
  shenanigans: { folder: "shenanigans", title: "Shenanigans" },
};

const photoCards = document.querySelectorAll(".photo-card");
const photoModal = document.getElementById("photo-modal");
const photoModalImage = document.getElementById("photo-modal-image");
const photoModalCounter = document.getElementById("photo-modal-counter");
const photoPrevButton = document.querySelector("[data-photo-prev]");
const photoNextButton = document.querySelector("[data-photo-next]");
const photoCloseButtons = document.querySelectorAll("[data-photo-close]");

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
