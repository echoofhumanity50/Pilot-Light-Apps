(() => {
  const slug = document.body.dataset.appSlug;
  const apps = Array.isArray(window.PILOT_LIGHT_APPS) ? window.PILOT_LIGHT_APPS : [];
  const app = apps.find((item) => item.slug === slug);
  const root = document.getElementById("app-detail");
  if (!app || !root) return;

  const safeText = (value) => String(value ?? "");
  const externalLink = (label, url, classes) => {
    const link = document.createElement("a");
    link.className = classes;
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    return link;
  };
  const list = (items, className) => {
    const element = document.createElement("ul");
    element.className = className;
    items.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = safeText(text);
      element.appendChild(item);
    });
    return element;
  };

  const hero = document.createElement("section");
  hero.className = "app-detail-hero";
  const copy = document.createElement("div");
  copy.className = "app-detail-copy";
  const back = document.createElement("a");
  back.className = "back-link";
  back.href = "index.html#apps";
  back.textContent = "← All apps";
  const meta = document.createElement("div");
  meta.className = "app-meta";
  const badge = document.createElement("span");
  badge.className = `badge badge-${safeText(app.statusTone).replace(/[^a-z0-9-]/gi, "").toLowerCase()}`;
  badge.textContent = safeText(app.status);
  const platform = document.createElement("span");
  platform.className = "platform";
  platform.textContent = [app.platform, app.version].filter(Boolean).join(" · ");
  meta.append(badge, platform);
  const title = document.createElement("h1");
  title.textContent = safeText(app.name);
  const tagline = document.createElement("p");
  tagline.className = "detail-tagline";
  tagline.textContent = safeText(app.tagline);
  const description = document.createElement("p");
  description.className = "hero-text";
  description.textContent = safeText(app.description);
  const actions = document.createElement("div");
  actions.className = "hero-actions";
  actions.append(
    externalLink(app.downloadLabel, app.downloadUrl, "button primary"),
    externalLink(app.downloadNotice.detailsLabel, app.downloadNotice.detailsUrl, "button secondary")
  );
  copy.append(back, meta, title, tagline, description, actions);

  const visual = document.createElement("div");
  visual.className = "detail-visual";
  const image = document.createElement("img");
  image.src = safeText(app.image);
  image.alt = safeText(app.imageAlt);
  visual.appendChild(image);
  hero.append(copy, visual);

  const notice = document.createElement("aside");
  notice.className = "download-notice detail-notice";
  const noticeTitle = document.createElement("h2");
  noticeTitle.textContent = safeText(app.downloadNotice.title);
  const noticeText = document.createElement("p");
  noticeText.textContent = safeText(app.downloadNotice.text);
  notice.append(noticeTitle, noticeText);

  const features = document.createElement("section");
  features.className = "detail-section";
  const featureHeading = document.createElement("div");
  featureHeading.className = "detail-section-heading";
  featureHeading.innerHTML = '<p class="eyebrow">What it does</p><h2>Built around the useful part.</h2>';
  features.append(featureHeading, list(app.features || [], "detail-feature-grid"));

  const guides = document.createElement("section");
  guides.className = "detail-section detail-two-column";
  const setup = document.createElement("article");
  setup.className = "detail-panel";
  setup.innerHTML = '<p class="eyebrow">Get started</p><h2>From download to ready.</h2>';
  const steps = document.createElement("ol");
  steps.className = "step-list";
  (app.installSteps || []).forEach((step) => {
    const item = document.createElement("li");
    item.textContent = safeText(step);
    steps.appendChild(item);
  });
  setup.appendChild(steps);
  const know = document.createElement("article");
  know.className = "detail-panel";
  know.innerHTML = '<p class="eyebrow">Good to know</p><h2>Clear before you install.</h2>';
  know.appendChild(list(app.goodToKnow || [], "plain-list"));
  guides.append(setup, know);

  const cta = document.createElement("section");
  cta.className = "detail-cta";
  const ctaCopy = document.createElement("div");
  const ctaEyebrow = document.createElement("p");
  ctaEyebrow.className = "eyebrow";
  ctaEyebrow.textContent = `Version ${safeText(app.version)}`;
  const ctaTitle = document.createElement("h2");
  ctaTitle.textContent = `Ready to try ${safeText(app.name)}?`;
  ctaCopy.append(ctaEyebrow, ctaTitle);
  cta.append(ctaCopy, externalLink(app.downloadLabel, app.downloadUrl, "button primary"));

  root.append(hero, notice, features, guides, cta);
})();
