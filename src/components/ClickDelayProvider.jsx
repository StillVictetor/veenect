import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This component intercepts clicks on <a> elements and delays navigation by 2s
// unless the element has data-no-delay. It leaves target="_blank" links to open
// in a new tab after the delay. It does not affect buttons to avoid breaking
// inline React onClick handlers.
export default function ClickDelayProvider({ delay = 2000 }) {
  const navigate = useNavigate();

  useEffect(() => {
    let disabled = false;

    function onClick(e) {
      // ignore if already handled
      if (disabled) return;

      const anchor = e.target.closest && e.target.closest("a");
      if (!anchor) return; // only handle anchors

      const href = anchor.getAttribute("href");
      if (!href) return;

      // allow explicit opt-out
      if (anchor.dataset && anchor.dataset.noDelay !== undefined) return;

      // allow downloads and mailto/tel directly
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.hasAttribute("download")
      )
        return;

      // Prevent default immediate navigation
      e.preventDefault();
      e.stopPropagation();

      // Visual feedback (optional) - add a small class to show it's waiting
      anchor.classList.add("delayed-click-waiting");

      // Mark disabled to avoid re-entrancy from synthetic click
      disabled = true;

      setTimeout(() => {
        // remove waiting state
        anchor.classList.remove("delayed-click-waiting");

        // If anchor opens in new tab or is external, use window.open
        const target = anchor.getAttribute("target");
        try {
          const url = new URL(href, window.location.href);
          const isExternal = url.origin !== window.location.origin;

          if (target === "_blank" || isExternal) {
            window.open(url.href, target || "_blank");
          } else {
            // Use react-router navigate to keep SPA navigation
            navigate(url.pathname + url.search + url.hash, { replace: false });
          }
        } catch {
          // fallback: just set location
          window.location.href = href;
        }

        // allow handling again
        disabled = false;
      }, delay);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate, delay]);

  return null;
}
