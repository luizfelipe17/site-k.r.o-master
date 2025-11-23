import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

export function useReveal(selector, options = {}) {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    ScrollReveal().reveal(selector, {
      duration: 1000,
      distance: "40px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
      ...options,
    });
  }, [selector, options]);
}