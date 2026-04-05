import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Scale up on hover over interactive elements
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-magnetic]")) {
        ringRef.current?.classList.add("cursor-hover");
      }
    };
    const onOut = () => ringRef.current?.classList.remove("cursor-hover");

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 bg-teal rounded-full pointer-events-none z-[9999] mix-blend-difference" />
      <div ref={ringRef} className="cursor-ring fixed top-0 left-0 w-10 h-10 border border-teal/50 rounded-full pointer-events-none z-[9998] mix-blend-difference transition-[width,height,border] duration-300" />
    </>
  );
};

export default CustomCursor;
