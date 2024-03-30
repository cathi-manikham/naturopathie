"use client";

import { useEffect, useState } from "react";

export const useIsHovered = <T extends HTMLElement = HTMLElement>(
  ref: React.MutableRefObject<T> | React.RefObject<T>
) => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    if (ref?.current) {
      const handleMouseEnter = () => setState(true);
      const handleMouseLeave = () => setState(false);
      const current = ref?.current;

      if (current) {
        current.addEventListener("mouseenter", handleMouseEnter);
        current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          current.removeEventListener("mouseenter", handleMouseEnter);
          current.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [ref]);

  return state;
};

export default useIsHovered;
