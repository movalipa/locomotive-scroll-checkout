import { ReactNode, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef(null);
  const scroll = useRef<LocomotiveScroll>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    scroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.2, // scroll speed
    });

    return () => {
      if (scroll.current) scroll.current.destroy();
    };
  }, []);

  return (
    <div id="scroll-container" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
