(function () {
  const views = {
    home: document.getElementById("view-home"),
    about: document.getElementById("view-about"),
    projects: document.getElementById("view-projects"),
    photography: document.getElementById("view-photography"),
  };

  const navTargets = document.querySelectorAll("[data-view-target]");
  let activeView = "home";

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

  setView("home");
})();
