import { useLayoutEffect, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { trackLeadEvent } from "@/lib/metaPixel";
import { PUBLIC_FOOTER_HTML } from "./public-shell/publicShellMarkup";
import "./public-shell/publicShell.css";

// A stable prop preserves entered email, status text and native event listeners.
const footerMarkup = { __html: PUBLIC_FOOTER_HTML };

export default function Footer() {
  const root = useRef<HTMLDivElement>(null);
  const subscribe = trpc.newsletter.subscribe.useMutation();
  const submit = useRef(subscribe.mutateAsync);
  submit.current = subscribe.mutateAsync;
  useLayoutEffect(() => {
    const shell = root.current;
    if (!shell) return;
    const year = shell.querySelector<HTMLElement>("#year");
    if (year) year.textContent = String(new Date().getFullYear());
    const form = shell.querySelector<HTMLFormElement>("#newsletterForm")!;
    const email = shell.querySelector<HTMLInputElement>("#newsEmail")!;
    const button = form.querySelector<HTMLButtonElement>("button")!;
    const status = shell.querySelector<HTMLElement>("#newsletterStatus")!;
    let active = true;
    let pending = false;
    const handler = async (event: SubmitEvent) => {
      event.preventDefault();
      if (pending || !form.reportValidity()) return;
      pending = true;
      button.disabled = true;
      button.textContent = "Subscribing...";
      status.textContent = "";
      try {
        const result = await submit.current({
          email: email.value.trim(),
          source: "footer",
        });
        if (!active) return;
        status.textContent = result.alreadySubscribed
          ? "You're already subscribed to our newsletter!"
          : result.reactivated
            ? "Welcome back! Your subscription has been reactivated."
            : "Thank you for subscribing to our newsletter!";
        email.value = "";
      } catch (error) {
        if (active)
          status.textContent =
            error instanceof Error
              ? error.message
              : "Failed to subscribe. Please try again.";
      } finally {
        if (active) {
          pending = false;
          button.disabled = false;
          button.textContent = "Subscribe";
        }
      }
    };
    const trackContact = (event: MouseEvent) => {
      if ((event.target as Element).closest('a[href="/contact"]'))
        trackLeadEvent();
    };
    form.addEventListener("submit", handler);
    shell.addEventListener("click", trackContact);
    return () => {
      active = false;
      form.removeEventListener("submit", handler);
      shell.removeEventListener("click", trackContact);
    };
  }, []);
  return (
    <div
      className="public-shell public-shell-footer"
      ref={root}
      dangerouslySetInnerHTML={footerMarkup}
    />
  );
}
