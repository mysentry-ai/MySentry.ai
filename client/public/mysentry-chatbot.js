// Optional Flowise assistant: no static CDN dependency and no app bootstrap work.
(() => {
  if (window.__mysentryChatbotLoader || isAdmin()) return;
  const state = (window.__mysentryChatbotLoader = { status: "waiting" });

  function isAdmin() {
    return window.location.pathname.startsWith("/admin");
  }

  function viewport() {
    return {
      width: window.visualViewport?.width ?? window.innerWidth,
      height: window.visualViewport?.height ?? window.innerHeight,
    };
  }

  function syncViewport() {
    const host = document.querySelector("flowise-chatbot");
    if (!host) return;
    host.hidden = isAdmin();
    const { width, height } = viewport();
    host.style.setProperty("--mysentry-chat-width", `${width}px`);
    host.style.setProperty("--mysentry-chat-height", `${height}px`);
  }

  async function startChatbot() {
    // Navigation and other embeds can change while the optional SDK is loading.
    if (isAdmin()) {
      state.status = "skipped";
      return;
    }
    if (document.querySelector("flowise-chatbot")) {
      state.status = "ready";
      return;
    }
    state.status = "loading";
    try {
      const { default: Chatbot } = await import(
        /* @vite-ignore */ "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
      );
      if (isAdmin()) {
        state.status = "skipped";
        return;
      }
      if (document.querySelector("flowise-chatbot")) {
        state.status = "ready";
        return;
      }

      const { width, height } = viewport();
      const isMobile = width <= 768;
      const chatWindowHeight = isMobile
        ? Math.max(1, Math.min(height - 120, 450))
        : 500;
      const chatWindowWidth = isMobile
        ? Math.max(1, Math.min(width - 20, 350))
        : 400;
      const buttonSize = isMobile ? 50 : 60;
      const buttonRight = isMobile ? 15 : 20;
      const buttonBottom = isMobile ? 20 : 30;
      const fontSize = isMobile ? 14 : 16;
      const starterPromptFontSize = isMobile ? 12 : 14;

      await Chatbot.init({
        chatflowid: "343c9ce8-205b-434d-9c95-68737d97752e",
        apiHost: "https://flowise.zigron.com",
        theme: {
          // These SDK parts live in shadow DOM. Margins retain horizontal drag
          // positioning while keeping the launcher/panel out of device cutouts.
          customCSS: `
            :host { position: relative; z-index: 2147483000; }
            [part="button"], [part="bot"], .tooltip {
              z-index: 2147483000 !important;
              margin-right: env(safe-area-inset-right, 0px);
              margin-bottom: env(safe-area-inset-bottom, 0px);
            }
            :host [part="bot"] {
              max-width: calc(var(--mysentry-chat-width, 100vw) - 20px - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)) !important;
              max-height: calc(var(--mysentry-chat-height, 100dvh) - ${buttonBottom + buttonSize + 26}px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px)) !important;
            }
            @media (max-width: 768px) {
              [part="button"] { max-width: 50px; max-height: 50px; }
              .tooltip { display: none; }
            }
            @media (max-width: 640px) {
              /* Preserve Flowise's mobile fullscreen UI, within the usable area. */
              :host div[part="bot"] {
                top: env(safe-area-inset-top, 0px) !important;
                left: env(safe-area-inset-left, 0px) !important;
                right: auto !important;
                bottom: auto !important;
                width: calc(var(--mysentry-chat-width, 100vw) - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)) !important;
                height: calc(var(--mysentry-chat-height, 100dvh) - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px)) !important;
                max-width: none !important;
                max-height: none !important;
                margin: 0;
              }
            }
          `,
          button: {
            backgroundColor: "#6AD990",
            right: buttonRight,
            bottom: buttonBottom,
            size: buttonSize,
            dragAndDrop: true,
            iconColor: "white",
            customIconSrc: "/chatbot-icon.jpg",
            autoWindowOpen: {
              autoOpen: false,
              autoOpenOnMobile: false,
            },
          },
          tooltip: {
            showTooltip: !isMobile,
            tooltipMessage: "Hi! Need Help?",
            tooltipBackgroundColor: "#6AD990",
            tooltipTextColor: "#232020",
            tooltipFontSize: 16,
          },
          chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: "MySentry Assistant",
            titleAvatarSrc: "/chatbot-icon.jpg",
            welcomeMessage: "Hi there! What brings you in today?",
            errorMessage:
              "I am having trouble connecting. Please try again later.",
            backgroundColor: "#ffffff",
            height: chatWindowHeight,
            width: chatWindowWidth,
            fontSize: fontSize,
            starterPrompts: [
              "How do I add emergency contacts?",
              "How does the Panic Alarm work?",
              "What is included in the Essential Safety plan?",
            ],
            starterPromptFontSize: starterPromptFontSize,
            clearChatOnReload: true,
            botMessage: {
              backgroundColor: "#f0f9ff",
              textColor: "#1a1a1a",
              showAvatar: true,
              avatarSrc: "/chatbot-icon.jpg",
            },
            userMessage: {
              backgroundColor: "#6AD990",
              textColor: "#232020",
              showAvatar: false,
            },
            textInput: {
              placeholder: "Type your question here...",
              backgroundColor: "#ffffff",
              textColor: "#1a1a1a",
              sendButtonColor: "#6AD990",
              maxChars: 200,
              maxCharsWarningMessage: "You exceeded the character limit.",
              autoFocus: !isMobile,
              sendMessageSound: true,
              receiveMessageSound: true,
            },
            footer: {
              textColor: "#666",
              text: "Powered by",
              company: "MySentry.AI",
              companyLink: "https://www.mysentry.ai/",
            },
          },
        },
      });
      state.status = "ready";
      syncViewport();
      window.addEventListener("resize", syncViewport, { passive: true });
      window.visualViewport?.addEventListener("resize", syncViewport, {
        passive: true,
      });
      // Wouter emits these history events; do not patch the router or bootstrap.
      for (const event of ["popstate", "pushState", "replaceState"]) {
        window.addEventListener(event, syncViewport);
      }
    } catch (error) {
      state.status = "failed";
      // CDN/SDK failure must not prevent either document from rendering.
      console.warn("MySentry Assistant could not be loaded.", error);
    }
  }

  function afterPaint() {
    if (state.status !== "waiting" || isAdmin()) return;
    state.status = "scheduled";
    window.setTimeout(startChatbot, 1200);
  }

  function afterHomepagePaint() {
    if (state.status !== "waiting" || isAdmin()) return;
    state.status = "waiting-images";
    let finished = false;
    let fallback;
    const cleanups = [];

    function finish() {
      if (finished) return;
      finished = true;
      window.clearTimeout(fallback);
      for (const cleanup of cleanups) cleanup();
      if (isAdmin()) {
        state.status = "skipped";
        return;
      }
      state.status = "scheduled";
      // Keep the optional delay, then yield SDK parsing/init to idle time. The
      // timeout still allows the automatic widget on continuously busy pages.
      window.setTimeout(() => {
        if (typeof window.requestIdleCallback === "function") {
          window.requestIdleCallback(startChatbot, { timeout: 2000 });
        } else {
          startChatbot();
        }
      }, 1200);
    }

    try {
      const { width, height } = viewport();
      // Only the visible header logo and main hero artwork are critical here;
      // never wait for all document images, offscreen artwork, or window.load.
      const images = [...document.querySelectorAll(".brand img, #heroDevice img, .hero-device img")]
        .filter(image => {
          const rect = image.getBoundingClientRect();
          const style = window.getComputedStyle(image);
          return rect.width > 0 && rect.height > 0 && rect.bottom > 0 &&
            rect.right > 0 && rect.top < height && rect.left < width &&
            style.display !== "none" && style.visibility !== "hidden" &&
            style.visibility !== "collapse";
        });
      if (!images.length) {
        finish();
        return;
      }
      // Includes load AND decode time; a hung request/decode cannot hide chat.
      fallback = window.setTimeout(finish, 8000);
      let remaining = images.length;
      for (const image of images) {
        let done = false;
        let decoding = false;
        const cleanup = () => {
          image.removeEventListener("load", loaded);
          image.removeEventListener("error", ready);
        };
        function ready() {
          if (done || finished) return;
          done = true;
          cleanup();
          if (--remaining === 0) finish();
        }
        function loaded() {
          if (done || decoding || finished) return;
          decoding = true;
          try {
            if (typeof image.decode === "function") {
              Promise.resolve(image.decode()).then(ready, ready);
            } else {
              ready();
            }
          } catch {
            ready();
          }
        }
        cleanups.push(cleanup);
        image.addEventListener("load", loaded);
        image.addEventListener("error", ready);
        // Cover cached images and load/error events preceding this script.
        if (image.complete) {
          if (image.naturalWidth > 0) loaded();
          else ready();
        }
      }
    } catch {
      // Optional readiness checks must not break the page or remove chat.
      finish();
    }
  }

  function afterDom() {
    if (document.getElementById("root")) {
      // DOM readiness is not a committed SPA UI. Respect its existing signal,
      // including the marker when this deferred script executes after the event.
      if (document.documentElement.dataset.mysentryAppPainted === "true") {
        afterPaint();
      } else {
        window.addEventListener("mysentry:app-painted", afterPaint, { once: true });
      }
    } else {
      // The standalone homepage has no React root or app paint event. Give its
      // first paint two frames, then protect only visible critical images.
      window.requestAnimationFrame(() => window.requestAnimationFrame(afterHomepagePaint));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", afterDom, { once: true });
  } else {
    afterDom();
  }
})();
