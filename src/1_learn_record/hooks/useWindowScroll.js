import { useState } from "react";

export function useWindowScroll() {
  const [y, setY] = useState(0);
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollTop;
    document.title = h.toString();

    setY(h);
  });
  return [y];
}
