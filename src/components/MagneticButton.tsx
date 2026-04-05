import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
}

const MagneticButton = ({
  children,
  className = "",
  as = "button",
  href,
  onClick,
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  if (as === "a") {
    return (
      <a
        ref={ref as any}
        href={href}
        className={`inline-block transition-transform duration-500 ease-out ${className}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-magnetic
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as any}
      className={`inline-block transition-transform duration-500 ease-out ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      data-magnetic
    >
      {children}
    </button>
  );
};

export default MagneticButton;
