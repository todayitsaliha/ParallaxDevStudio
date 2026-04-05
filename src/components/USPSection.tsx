import { useReveal } from "@/hooks/useReveal";
import { useTextReveal } from "@/hooks/useTextReveal";
import { useParallax } from "@/hooks/useParallax";

const USPSection = () => {
  const ref = useReveal<HTMLDivElement>();
  const headRef = useTextReveal<HTMLDivElement>();
  const { ref: paraRef, offset } = useParallax(-0.15);

  return (
    <div ref={ref} className="reveal relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-ink">
        {/* Dark side */}
        <div className="bg-ink px-8 py-20 flex flex-col gap-6 relative noise overflow-hidden">
          {/* Parallax circle */}
          <div ref={paraRef} className="absolute -right-16 -top-16 w-64 h-64 border border-paper/[0.04] rounded-full pointer-events-none" style={{ transform: `translateY(${offset}px)` }} />

          <div className="text-[9px] tracking-[0.15em] uppercase text-paper/30 mb-2 relative z-10">03 — our promise</div>
          <div ref={headRef} className="relative z-10">
            <div className="font-serif text-[clamp(42px,5.5vw,58px)] font-black leading-[0.9] tracking-[-0.04em] text-paper">
              <span className="text-reveal-line block">See it</span>
              <span className="text-reveal-line block"><em className="italic text-amber">before</em></span>
              <span className="text-reveal-line block">you <span className="text-outline-light">pay.</span></span>
            </div>
          </div>
          <p className="text-[11px] text-paper/50 leading-[2] relative z-10 max-w-[320px]">
            We build your entire project, demo it live, and you only pay when you're 100% happy. This is not how other freelancers work — it's how we build trust.
          </p>
        </div>

        {/* Amber side */}
        <div className="bg-amber px-8 py-20 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-8 right-8 w-24 h-24 border border-black/[0.06] rotate-45 float-anim" />
          <p className="font-serif text-lg font-light italic leading-[1.4] relative z-10" style={{ color: "#2a1800" }}>
            "The kind of studio that shows you the work before asking for anything."
          </p>
          <div className="bg-white/30 p-4 border border-black/[0.15] mt-8 relative z-10 transition-transform duration-500 hover:translate-y-[-4px] hover:shadow-lg">
            <div className="flex items-center gap-1 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              <div className="flex-1 h-[7px] bg-black/10 rounded-sm ml-1.5" />
            </div>
            <div className="h-1 rounded-sm bg-teal/50 mb-1.5" style={{ width: "90%" }} />
            <div className="h-1 rounded-sm bg-black/[0.12] mb-1.5" style={{ width: "75%" }} />
            <div className="h-1 rounded-sm bg-teal/50 mb-1.5" style={{ width: "60%" }} />
            <div className="h-1 rounded-sm bg-black/[0.12]" style={{ width: "85%" }} />
            <div className="mt-2 border border-dashed border-black/25 p-1.5 text-center text-[9px] tracking-[0.08em] uppercase" style={{ color: "rgba(42,24,0,0.6)" }}>
              Locked — full access after payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USPSection;
