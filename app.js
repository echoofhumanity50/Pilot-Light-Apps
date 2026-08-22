(() => {
  const config = window.PILOT_LIGHT_CONFIG || {};
  const apps = Array.isArray(window.PILOT_LIGHT_APPS) ? window.PILOT_LIGHT_APPS : [];
  const grid = document.getElementById("app-grid");
  const toast = document.getElementById("toast");
  let toastTimer;

  const isPlaceholder = (url = "") => !url || url === "#" || /YOURNAME|USERNAME|example\.com/i.test(url);
  const safeText = (value) => String(value ?? "");

  const showToast = (message) => {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  };

  const makeButton = (label, url, classes = "button primary", external = true) => {
    const link = document.createElement("a");
    link.className = classes;
    link.textContent = safeText(label);

    if (isPlaceholder(url)) {
      link.href = "#";
      link.classList.add("disabled");
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showToast("This link will be added before launch.");
      });
    } else {
      link.href = url;
      if (external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    }
    return link;
  };

  if (grid) {
    apps.forEach((app) => {
      const article = document.createElement("article");
      article.className = "catalog-card";

      const visualLink = document.createElement("a");
      visualLink.className = "catalog-visual";
      visualLink.href = app.pageUrl;
      visualLink.setAttribute("aria-label", `View ${safeText(app.name)}`);
      const image = document.createElement("img");
      image.src = safeText(app.image);
      image.alt = "";
      visualLink.appendChild(image);

      const copy = document.createElement("div");
      copy.className = "catalog-copy";

      const meta = document.createElement("div");
      meta.className = "app-meta";
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = safeText(app.status);
      const statusTone = safeText(app.statusTone).toLowerCase().replace(/[^a-z0-9-]/g, "");
      if (statusTone) badge.classList.add(`badge-${statusTone}`);
      const platform = document.createElement("span");
      platform.className = "platform";
      platform.textContent = [app.platform, app.version].filter(Boolean).map(safeText).join(" · ");
      meta.append(badge, platform);

      const title = document.createElement("h3");
      const titleLink = document.createElement("a");
      titleLink.href = app.pageUrl;
      titleLink.textContent = safeText(app.name);
      title.appendChild(titleLink);

      const tagline = document.createElement("p");
      tagline.className = "app-tagline";
      tagline.textContent = safeText(app.tagline);

      const highlights = document.createElement("ul");
      highlights.className = "highlight-list";
      (app.homeHighlights || []).forEach((highlight) => {
        const item = document.createElement("li");
        item.textContent = safeText(highlight);
        highlights.appendChild(item);
      });

      const actions = document.createElement("div");
      actions.className = "app-actions";
      actions.appendChild(makeButton("View app", app.pageUrl, "button primary", false));
      actions.appendChild(makeButton(app.shortDownloadLabel || "Download", app.downloadUrl, "button secondary"));

      copy.append(meta, title, tagline, highlights, actions);
      article.append(visualLink, copy);
      grid.appendChild(article);
    });
  }

  document.querySelectorAll(".donation-link").forEach((link) => {
    const url = config.donationUrl;
    if (isPlaceholder(url)) {
      link.href = "#";
      link.classList.add("disabled");
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showToast("Add your Buy Me a Coffee link before launch.");
      });
    } else {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

  document.querySelectorAll(".contact-link").forEach((link) => {
    const email = safeText(config.contactEmail).trim();
    if (!email || isPlaceholder(email) || !email.includes("@")) {
      link.href = "#";
      link.classList.add("disabled");
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showToast("The contact email will be added before launch.");
      });
    } else {
      link.href = `mailto:${email}?subject=${encodeURIComponent("Pilot Light Apps inquiry")}`;
    }
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
