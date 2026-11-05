import { useLayoutEffect } from "react";

// Both servers serve the approved standalone document for root requests.
// Client-side home navigation must load that document, not the retired draft.
export default function Home() {
  useLayoutEffect(() => {
    window.location.replace(
      `/${window.location.search}${window.location.hash}`
    );
  }, []);
  return null;
}
