(() => {
  const config = window.PILOT_LIGHT_CONFIG || {};
  const apps = Array.isArray(window.PILOT_LIGHT_APPS) ? window.PILOT_LIGHT_APPS : [];
  const grid = document.getElementById("app-grid");
  const toast = document.getElementById("toast");
  let toastTimer;

  const isPlaceholder = (url = "") => !url || url === "#" || /YOURNAME|USERNAME|example\.com/i.test(url);

  const showToast = (message) => {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  };

  const safeText = (value) => String(value ?? "");

  const makeButton = (label, url, classes = "button primary") => {
    const link = document.createElement("a");
    link.className = classes;
    link.textContent = label;

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
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    return link;
  };

  apps.forEach((app) => {
    const article = document.createElement("article");
    article.className = "app-card";

    const copy = document.createElement("div");
    copy.className = "app-card-copy";

    const meta = document.createElement("div");
    meta.className = "app-meta";
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = safeText(app.status);
    const platform = document.createElement("span");
    platform.className = "platform";
    platform.textContent = safeText(app.platform);
    meta.append(badge, platform);

    const title = document.createElement("h3");
    title.textContent = safeText(app.name);

    const tagline = document.createElement("p");
    tagline.className = "app-tagline";
    tagline.textContent = safeText(app.tagline);

    const description = document.createElement("p");
    description.textContent = safeText(app.description);

    const features = document.createElement("ul");
    features.className = "feature-list";
    (app.features || []).forEach((feature) => {
      const item = document.createElement("li");
      item.textContent = safeText(feature);
      features.appendChild(item);
    });

    const actions = document.createElement("div");
    actions.className = "app-actions";
    actions.appendChild(makeButton("Download", app.downloadUrl));
    if (!isPlaceholder(app.learnMoreUrl)) {
      actions.appendChild(makeButton("Learn more", app.learnMoreUrl, "button secondary"));
    }

    copy.append(meta, title, tagline, description, features, actions);

    if (app.downloadNotice) {
      const notice = document.createElement("aside");
      notice.className = "download-notice";

      const noticeTitle = document.createElement("h4");
      noticeTitle.textContent = safeText(app.downloadNotice.title);

      const noticeText = document.createElement("p");
      noticeText.textContent = safeText(app.downloadNotice.text);

      notice.append(noticeTitle, noticeText);

      if (!isPlaceholder(app.downloadNotice.detailsUrl)) {
        const detailsLink = document.createElement("a");
        detailsLink.href = app.downloadNotice.detailsUrl;
        detailsLink.target = "_blank";
        detailsLink.rel = "noopener noreferrer";
        detailsLink.textContent = safeText(app.downloadNotice.detailsLabel || "View release details");
        notice.appendChild(detailsLink);
      }

      copy.appendChild(notice);
    }

    const visual = document.createElement("div");
    visual.className = "app-card-visual";
    const image = document.createElement("img");
    image.src = safeText(app.image);
    image.alt = `${safeText(app.name)} preview`;
    visual.appendChild(image);

    article.append(copy, visual);
    grid.appendChild(article);
  });

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

  document.getElementById("year").textContent = new Date().getFullYear();
})();
