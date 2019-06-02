import throttle from "throttleit";
import React from "react";

export const useWindowScroll = (wait = 15) => {
  const [position, setPosition] = React.useState({ scrollX: 0, scrollY: 0 });
  const scrollHandler = throttle((e: Event) => {
    const { scrollX, scrollY } = window;
    setPosition({ scrollX, scrollY });
  }, wait);
  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return position;
};
