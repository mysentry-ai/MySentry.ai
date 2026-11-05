export function initializePublicNavigation(root: HTMLElement): () => void {
  const header = root.querySelector<HTMLElement>("#siteHeader")!;
  const nav = root.querySelector<HTMLElement>("#mainNav")!;
  const menu = root.querySelector<HTMLButtonElement>("#mobileMenu")!;
  const icon = menu.querySelector<HTMLElement>(".nav-menu-icon")!;
  const mobile = window.matchMedia("(max-width: 1279px)");
  const triggers = Array.from(
    nav.querySelectorAll<HTMLButtonElement>(".dropdown-toggle")
  );
  const ring = nav.querySelector<HTMLElement>(".nav-ring")!;
  const cta = nav.querySelector<HTMLElement>(".header-cta")!;
  const controller = new AbortController();
  const options = { signal: controller.signal };
  let isOpen = false;
  const originalOverflow = document.body.style.overflow;
  let tabTimer: ReturnType<typeof setTimeout> | undefined;
  const panelFor = (trigger: HTMLButtonElement) =>
    root.querySelector<HTMLElement>(
      `#${trigger.getAttribute("aria-controls")}`
    )!;
  const setGroup = (trigger: HTMLButtonElement, open: boolean) => {
    const panel = panelFor(trigger);
    trigger.setAttribute("aria-expanded", String(open));
    panel.setAttribute("aria-hidden", String(!open));
    panel.hidden = !open;
    trigger.parentElement?.classList.toggle("open", open);
  };
  const closeGroups = (focus = false) => {
    const expanded = triggers.find(
      t => t.getAttribute("aria-expanded") === "true"
    );
    triggers.forEach(t => setGroup(t, false));
    if (focus) expanded?.focus({ preventScroll: true });
  };
  const setMenu = (open: boolean, focus = false) => {
    isOpen = Boolean(open && mobile.matches);
    if (!isOpen) closeGroups();
    header.dataset.menuOpen = String(isOpen);
    menu.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    icon.textContent = isOpen ? "×" : "☰";
    nav.classList.toggle("open", isOpen);
    nav.hidden = mobile.matches && !isOpen;
    nav.setAttribute("aria-hidden", String(nav.hidden));
    document.body.classList.toggle("public-menu-open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : originalOverflow;
    if (!isOpen) nav.scrollTop = 0;
    if (focus && mobile.matches) menu.focus({ preventScroll: true });
  };
  const close = (focus = false) =>
    isOpen ? setMenu(false, focus) : closeGroups(focus);
  const sync = () => {
    const active = document.activeElement as HTMLElement | null;
    const expanded = active?.closest(".dropdown-panel");
    const activeTrigger = triggers.find(t => panelFor(t) === expanded);
    if (mobile.matches) nav.insertBefore(ring, triggers[0].parentElement);
    else nav.insertBefore(ring, cta);
    setMenu(false);
    if (mobile.matches && active && nav.contains(active))
      menu.focus({ preventScroll: true });
    else if (!mobile.matches && active === menu)
      header
        .querySelector<HTMLAnchorElement>(".brand")
        ?.focus({ preventScroll: true });
    else activeTrigger?.focus({ preventScroll: true });
  };
  menu.addEventListener("click", () => setMenu(!isOpen, isOpen), options);
  triggers.forEach(trigger => {
    trigger.addEventListener(
      "click",
      () => {
        if (mobile.matches && !isOpen) return;
        const open = trigger.getAttribute("aria-expanded") !== "true";
        closeGroups();
        setGroup(trigger, open);
      },
      options
    );
    trigger.addEventListener(
      "keydown",
      event => {
        if (
          !["ArrowDown", "ArrowUp"].includes(event.key) ||
          (mobile.matches && !isOpen)
        )
          return;
        event.preventDefault();
        closeGroups();
        setGroup(trigger, true);
        const links =
          panelFor(trigger).querySelectorAll<HTMLAnchorElement>("a[href]");
        (event.key === "ArrowUp" ? links[links.length - 1] : links[0])?.focus();
      },
      options
    );
  });
  header.addEventListener(
    "click",
    event => {
      if ((event.target as Element).closest("a[href]")) close(isOpen);
    },
    options
  );
  document.addEventListener(
    "click",
    event => {
      if (!header.contains(event.target as Node)) close(true);
    },
    options
  );
  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key === "Escape" &&
        (isOpen ||
          triggers.some(t => t.getAttribute("aria-expanded") === "true"))
      ) {
        event.preventDefault();
        close(true);
      }
      if (event.key === "Tab")
        tabTimer = setTimeout(() => {
          if (!header.contains(document.activeElement)) close();
        }, 0);
    },
    options
  );
  mobile.addEventListener("change", sync);
  window.addEventListener(
    "resize",
    () => {
      if (!mobile.matches) sync();
    },
    options
  );
  sync();
  return () => {
    controller.abort();
    mobile.removeEventListener("change", sync);
    clearTimeout(tabTimer);
    document.body.classList.remove("public-menu-open");
    document.body.style.overflow = originalOverflow;
  };
}
