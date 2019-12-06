import throttle from "throttleit";
import React from "react";

export interface IPosition {
  scrollX: number;
  scrollY: number;
}

export const useWindowScroll = (wait = 15) => {
  const [position, setPosition] = React.useState<IPosition>({
    scrollX: 0,
    scrollY: 0
  });
  const setScrollPosition = React.useCallback(() => {
    const { scrollX, scrollY } = window;
    setPosition({ scrollX, scrollY });
  }, []);
  React.useEffect(() => {
    setScrollPosition();
  }, []);
  const scrollHandler = React.useCallback(
    throttle((e: Event) => {
      setScrollPosition();
    }, wait),
    [wait]
  );
  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [wait]);
  return position;
};
