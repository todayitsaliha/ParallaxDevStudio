import { useReveal } from "@/hooks/useReveal";
import { useTextReveal } from "@/hooks/useTextReveal";
import { useParallax } from "@/hooks/useParallax";

const steps = [
  { n: "01", name: "Submit your idea", desc: "Requirements, deadline, tech preferences." },
  { n: "02", name: "We review + scope", desc: "Timeline, features, no hidden costs." },
  { n: "03", name: "We build the preview", desc: "Full working demo — live, real code." },
  { n: "04", name: "You approve", desc: "See it before paying. Request changes." },
  { n: "05", name: "You pay", desc: "Only when you're fully satisfied." },
  { n: "06", name: "Delivered", desc: "Source code + docs + setup guide." },
];

const ProcessSection = () => {
  const ref = useReveal<HTMLDivElement>();
  const headRef = useTextReveal<HTMLDivElement>();
  const { ref: paraRef, offset } = useParallax(0.1);

  return (
    <div ref={ref} id="process" className="reveal relative overflow-hidden">
      {/* Parallax decorative */}
      <div ref={paraRef} className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-[0.03]" style={{ transform: `translateY(${offset}px)` }}>
        <div className="w-full h-full border border-ink rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-ink relative z-10">
        <div className="px-8 py-16 border-r border-ink flex flex-col justify-between">
          <div>
            <div className="text-[9px] tracking-[0.15em] uppercase text-mid mb-6">02 — process</div>
            <div ref={headRef}>
              <div className="font-serif text-[clamp(38px,5vw,52px)] font-black leading-[0.95] tracking-[-0.03em]">
                <span className="text-reveal-line block">How it</span>
                <span className="text-reveal-line block"><em className="italic text-teal">actually</em></span>
                <span className="text-reveal-line block"><span className="text-outline">works.</span></span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[11px] text-mid leading-[2] mb-5">Six clear steps from your idea to a delivered, submission-ready project. No vague timelines. No hidden fees.</p>
            <span className="bg-amber px-3.5 py-1.5 text-[9px] tracking-[0.12em] uppercase inline-block transition-transform duration-300 hover:translate-x-1" style={{ color: "#2a1800" }}>Zero-risk model</span>
          </div>
        </div>
        <div>
          {steps.map((s, idx) => (
            <div
              key={s.n}
              className="group grid grid-cols-[52px_1fr] border-b border-ink/10 last:border-b-0 cursor-default transition-all duration-500 hover:bg-teal hover:text-paper hover:pl-4"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="font-serif text-sm font-black text-ink/20 group-hover:text-paper/30 px-4 py-6 border-r border-ink/10 group-hover:border-paper/10 flex items-center justify-center transition-colors duration-500">
                {s.n}
              </div>
              <div className="px-5 py-6">
                <div className="font-serif text-base font-black tracking-[-0.02em] mb-0.5 transition-transform duration-500 group-hover:translate-x-2">{s.name}</div>
                <div className="text-[10px] text-mid leading-[1.7] group-hover:text-paper/70 transition-colors duration-500">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
