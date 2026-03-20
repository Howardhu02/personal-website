(function () {
  const STORAGE_VIEW = "portfolio_spa_view";
  const views = {
    home: document.getElementById("view-home"),
    about: document.getElementById("view-about"),
    projects: document.getElementById("view-projects"),
    photos: document.getElementById("view-photos"),
    "photo-category": document.getElementById("view-photo-category"),
  };

  const navTargets = document.querySelectorAll("[data-view-target]");
  let activeView = "home";
  const getStoredView = () => {
    try {
      return window.localStorage.getItem(STORAGE_VIEW);
    } catch (error) {
      return null;
    }
  };

  const setStoredView = (viewName) => {
    try {
      window.localStorage.setItem(STORAGE_VIEW, viewName);
    } catch (error) {
      // Ignore storage write errors (private mode/restricted environments).
    }
  };

  const setActiveNav = (viewName) => {
    navTargets.forEach((node) => {
      const target = node.dataset.viewTarget;
      const isPhotoView = viewName === "photos" || viewName === "photo-category";
      node.classList.toggle("is-active", target === viewName || (target === "photos" && isPhotoView));
    });
  };

  const setView = (viewName) => {
    if (!views[viewName]) {
      return;
    }

    Object.entries(views).forEach(([name, node]) => {
      if (!node) return;
      node.classList.toggle("is-active", name === viewName);
    });

    activeView = viewName;
    setStoredView(viewName);
    setActiveNav(viewName);
    window.scrollTo({ top: 0, behavior: "auto" });
    window.dispatchEvent(new CustomEvent("spa-view-change", { detail: { view: viewName } }));
  };

  window.setSpaView = setView;
  window.getSpaView = () => activeView;

  navTargets.forEach((node) => {
    node.addEventListener("click", (event) => {
      const target = node.dataset.viewTarget;
      if (!target) {
        return;
      }
      event.preventDefault();
      if (target !== activeView) {
        setView(target);
      }
    });
  });

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const storedView = getStoredView();

  if (path === "/about" || path === "/about/index.html" || path === "/about.html") {
    setView("about");
  } else if (path === "/projects" || path === "/projects/index.html" || path === "/projects.html") {
    setView("projects");
  } else if (path === "/photos" || path === "/photos/index.html" || path === "/photos.html") {
    setView("photos");
  } else if (
    path === "/photos/film" ||
    path === "/photos/graduation" ||
    path === "/photos/gig" ||
    path === "/photos/shenanigans"
  ) {
    setView("photo-category");
  } else if (storedView && views[storedView]) {
    setView(storedView);
  } else {
    setView("home");
  }
})();
