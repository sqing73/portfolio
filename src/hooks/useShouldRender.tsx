import { useState, useEffect, useRef } from "react";

const useShouldRender = (ref: React.RefObject<HTMLElement>): boolean => {
  const [inView, setInView] = useState(false);
  const rendered = useRef<boolean>(false);

  if (inView) {
    rendered.current = true;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const box = ref.current.getBoundingClientRect();
        const padding = window.innerHeight * 0.25;
        const isInView =
          box.top < window.innerHeight - padding && box.bottom >= 0;
        setInView(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
  return rendered.current || inView;
};

export default useShouldRender;
