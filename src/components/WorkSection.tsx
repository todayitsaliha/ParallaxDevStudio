import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTextReveal } from "@/hooks/useTextReveal";

const projects = [
  { n: "001", name: "Student Mgmt System", tag: "Full Stack", tagBg: "bg-teal", tagText: "text-paper", bars: ["bg-teal/40", "bg-ink/10", "bg-teal/40", "bg-ink/10"], thumbBg: "", sold: "Sold for PKR 5,000", preview: "/preview/student-dashboard" },
  { n: "002", name: "Recipe Generator App", tag: "Frontend", tagBg: "bg-amber", tagText: "", bars: ["bg-amber/50", "bg-ink/10", "bg-amber/30", "bg-ink/10"], thumbBg: "bg-amber/[0.15]", sold: "Sold for PKR 8,000", preview: "/preview/recipe-generator" },
  { n: "003", name: "Hospital Booking App", tag: "MERN", tagBg: "bg-red", tagText: "text-paper", bars: ["bg-red/30", "bg-ink/10", "bg-red/20", "bg-ink/10"], thumbBg: "bg-red/[0.07]", sold: "Sold for PKR 7,000", preview: "/preview/hospital" },
];

const WorkSection = () => {
  const headRef = useTextReveal<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} id="work" className="relative">
      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-paper border-b border-ink px-8 py-8">
        <div className="flex items-baseline justify-between">
          <div ref={headRef}>
            <h2 className="font-serif text-[clamp(32px,5vw,48px)] font-black tracking-[-0.03em]">
              <span className="text-reveal-line inline">Selected </span>
              <span className="text-reveal-line inline"><em className="italic text-teal">work</em></span>
            </h2>
          </div>
          <span className="text-[10px] text-mid tracking-[0.1em]">04 — portfolio</span>
        </div>
        {/* Progress bar */}
        <div className="mt-4 h-px bg-ink/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-teal transition-[width] duration-100" style={{ width: `${scrollProgress * 100}%` }} />
        </div>
      </div>

      {/* Project cards — large immersive */}
      <div className="divide-y divide-ink">
        {projects.map((p, idx) => (
          <ProjectCard key={p.n} project={p} index={idx} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project: p, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleClick = () => {
    if (p.preview) navigate(p.preview);
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`group relative grid grid-cols-1 md:grid-cols-[1fr_1.2fr] min-h-[50vh] transition-all duration-700 ${
        p.preview ? "cursor-pointer" : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 100}ms`, filter: inView ? "blur(0)" : "blur(4px)" }}
    >
      {/* Info side */}
      <div className="px-8 py-12 flex flex-col justify-between border-r border-ink/10">
        <div>
          <div className="font-mono text-[9px] text-mid tracking-[0.1em] mb-6">{p.n}</div>
          <div className={`${p.tagBg} ${p.tagText} text-[8px] tracking-[0.1em] uppercase px-2.5 py-1 w-fit mb-4`} style={p.n === "002" ? { color: "#2a1800" } : undefined}>
            {p.tag}
          </div>
          <div className="font-serif text-[clamp(24px,3vw,36px)] font-black tracking-[-0.02em] leading-[1.05] transition-transform duration-700 group-hover:translate-x-3">
            {p.name}
          </div>
        </div>
        <div className="mt-6 bg-teal text-paper text-[9px] tracking-[0.08em] uppercase px-3.5 py-2 w-fit font-mono transition-transform duration-500 group-hover:translate-x-2">
          {p.sold}
        </div>
      </div>

      {/* Thumbnail side */}
      <div className={`${p.thumbBg || "bg-ink/[0.02]"} p-8 flex flex-col justify-center relative overflow-hidden transition-all duration-700 group-hover:bg-teal-pale`}>
        {/* Abstract preview bars */}
        <div className="relative z-10 space-y-3 px-4 transition-transform duration-700 group-hover:scale-[1.02] group-hover:translate-x-2">
          {p.bars.map((b, i) => (
            <div
              key={i}
              className={`h-2 rounded-sm ${b} transition-all duration-500`}
              style={{
                width: `${[80, 100, 55, 70][i]}%`,
                transitionDelay: `${i * 80}ms`,
              }}
            />
          ))}
          <div className="mt-6 flex gap-2">
            <div className="w-16 h-8 border border-ink/10" />
            <div className="w-16 h-8 bg-ink/[0.04]" />
            <div className="w-16 h-8 border border-ink/10" />
          </div>
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          {p.preview && <span className="text-[9px] text-mid tracking-[0.1em] uppercase font-mono">View Preview</span>}
          <div className="w-10 h-10 border border-ink/10 flex items-center justify-center">
            <span className="text-ink text-sm">↗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
