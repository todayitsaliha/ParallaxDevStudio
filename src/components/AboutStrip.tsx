import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";

const cols = [
  { label: "Our promise", val: <><em className="italic text-teal">0</em> risk</>, body: "See your full project before you pay a single rupee. No deposits, no surprises." },
  { label: "Turnaround", val: <>48<em className="italic text-teal">hr</em></>, body: "From approval to delivery. We move fast without cutting corners on quality." },
  { label: "Why us", val: <><em className="italic text-teal">CS</em> built</>, body: "Built by a student in the same courses. We know exactly what markers want." },
];

const AboutStrip = () => {
  const ref = useReveal<HTMLDivElement>();
  const { ref: paraRef, offset } = useParallax(0.08);

  return (
    <div ref={ref} className="reveal reveal-stagger relative overflow-hidden">
      {/* Subtle parallax background line */}
      <div ref={paraRef} className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${offset}px)` }}>
        <div className="absolute top-1/2 left-0 w-full h-px bg-ink/[0.03]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_1fr] border-b border-ink relative z-10">
        <div className="hidden md:flex px-4 py-8 font-serif text-[11px] font-light text-mid border-r border-ink items-start uppercase tracking-[0.1em]" style={{ writingMode: "vertical-rl" }}>
          About us
        </div>
        {cols.map((c, i) => (
          <div key={i} className={`reveal-child px-6 py-10 md:py-8 group hover:bg-teal-pale transition-colors duration-500 ${i < 2 ? "md:border-r border-ink" : ""}`}>
            <div className="text-[9px] tracking-[0.15em] uppercase text-mid mb-3 group-hover:text-teal transition-colors duration-300">{c.label}</div>
            <div className="font-serif text-[32px] font-black tracking-[-0.03em] leading-none group-hover:translate-x-1 transition-transform duration-500">{c.val}</div>
            <div className="text-[11px] text-mid leading-[1.9] mt-2">{c.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStrip;
