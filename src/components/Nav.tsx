import { useState, useEffect } from "react";
import logoImg from "@/assets/logo.png";
import MagneticButton from "./MagneticButton";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <MagneticButton className="flex items-center gap-2.5">
        <img src={logoImg} alt="parallaxdev studio" className="h-8 w-auto" />
        <div className="font-mono text-[13px] font-medium tracking-tight text-ink leading-tight flex flex-col">
          <span>parallaxdev</span>
          <span className="text-[8px] tracking-[0.25em] text-mid uppercase">studio</span>
        </div>
      </MagneticButton>

      <div className="hidden md:flex items-center gap-10">
        {["Work", "Process", "Contact"].map((item) => (
          <MagneticButton key={item} as="a" href={`#${item.toLowerCase()}`}>
            <span className="text-[10px] text-mid tracking-[0.1em] uppercase hover:text-ink transition-colors duration-200 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal group-hover:w-full transition-all duration-500" />
            </span>
          </MagneticButton>
        ))}
      </div>

      <MagneticButton
        as="a"
        href="mailto:parallaxdevstudio@gmail.com?subject=New%20Project%20Inquiry&body=Hi%20ParallaxDev%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project.%0A%0AProject%20Type%3A%20%5BWebsite%20%2F%20Dashboard%20%2F%20App%20%2F%20Other%5D%0ABrief%20Description%3A%20%0ABudget%20Range%3A%20%0ATimeline%3A%20%0A%0AThanks!"
        className="bg-ink text-paper font-mono text-[10px] tracking-[0.1em] px-5 py-2.5 uppercase hover:bg-teal transition-colors duration-200 active:scale-[0.97]"
      >
        Start a project ↗
      </MagneticButton>
    </nav>
  );
};

export default Nav;
