(function () {
  const STORAGE_VIEW = "portfolio_spa_view";
  const views = {
    home: document.getElementById("view-home"),
    about: document.getElementById("view-about"),
    projects: document.getElementById("view-projects"),
    photography: document.getElementById("view-photography"),
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
      node.classList.toggle("is-active", node.dataset.viewTarget === viewName);
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
  } else if (path === "/photography" || path === "/photography/index.html" || path === "/photography.html") {
    setView("photography");
  } else if (storedView && views[storedView]) {
    setView(storedView);
  } else {
    setView("home");
  }
})();
