import { useTextReveal } from "@/hooks/useTextReveal";
import { useParallax } from "@/hooks/useParallax";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const textRef = useTextReveal<HTMLDivElement>();
  const { ref: parallaxRef, offset } = useParallax(0.2);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden noise">
      {/* Parallax background shapes */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {/* Floating geometric elements */}
        <div className="absolute top-[15%] right-[12%] w-32 h-32 border border-ink/[0.06] rotate-12 float-anim" />
        <div className="absolute top-[35%] left-[8%] w-20 h-20 border border-teal/[0.08] -rotate-6 float-anim float-anim-delay" />
        <div className="absolute bottom-[30%] right-[25%] w-48 h-px bg-ink/[0.06]" />
        <div className="absolute top-[60%] left-[45%] w-2 h-2 bg-teal/20 rounded-full float-anim float-anim-delay-2" />
        <div className="absolute top-[25%] left-[55%] w-px h-32 bg-ink/[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 pb-16 pt-32">
        {/* Overline */}
        <div className="mb-12 overflow-hidden">
          <div className="text-[9px] tracking-[0.25em] uppercase text-mid flex items-center gap-3 animate-[reveal-left_0.8s_0.3s_cubic-bezier(0.16,1,0.3,1)_both]">
            <span className="w-8 h-px bg-teal inline-block" />
            Academic Dev Studio
          </div>
        </div>

        {/* Main headline — clip reveal */}
        <div ref={textRef} className="mb-12">
          <h1 className="font-serif text-[clamp(52px,8vw,120px)] font-black leading-[0.88] tracking-[-0.05em] text-ink">
            <span className="text-reveal-line block">We build</span>
            <span className="text-reveal-line block">
              <em className="italic text-teal">projects</em>
            </span>
            <span className="text-reveal-line block">
              that <span className="text-outline">move.</span>
            </span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="text-[11px] text-mid leading-[2.2] max-w-[280px] border-l border-ink/15 pl-4 animate-[reveal-up_0.7s_0.8s_cubic-bezier(0.16,1,0.3,1)_both]">
            Preview first. Pay later.
            <br />
            Academic projects with the kind of polish
            <br />
            that actually gets marks.
          </p>

          <div className="flex items-center gap-4 animate-[reveal-up_0.7s_1s_cubic-bezier(0.16,1,0.3,1)_both]">
            <MagneticButton
              as="a"
              href="#contact"
              className="bg-ink text-paper font-mono text-[10px] tracking-[0.1em] px-7 py-4 uppercase flex items-center gap-3 hover:bg-teal transition-colors duration-300 active:scale-[0.97]"
            >
              Start your project
              <span className="text-amber">→</span>
            </MagneticButton>
            <MagneticButton className="text-ink/40 font-mono text-[10px] tracking-[0.1em] px-5 py-4 border border-ink/15 uppercase hover:border-ink/50 hover:text-ink transition-all duration-300 active:scale-[0.97]">
              Explore work ↗
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[reveal-up_0.7s_1.4s_cubic-bezier(0.16,1,0.3,1)_both]">
        <span className="text-[8px] tracking-[0.2em] uppercase text-mid/40">
          scroll
        </span>
        <div className="w-px h-12 bg-ink/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-teal/40 animate-[scroll-pulse_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="absolute top-[30%] right-[6%] animate-[reveal-right_0.8s_0.6s_cubic-bezier(0.16,1,0.3,1)_both] hidden md:block">
        <div className="bg-paper border border-ink/10 px-5 py-4 shadow-[8px_8px_0_hsl(var(--ink)/0.03)]">
          <div className="font-serif text-[32px] font-black tracking-[-0.04em] leading-none text-ink">
            <em className="italic text-teal">100%</em>
          </div>
          <div className="text-[9px] tracking-[0.1em] uppercase text-mid mt-1">
            preview first
          </div>
        </div>
      </div>

      <div className="absolute top-[55%] right-[15%] animate-[reveal-right_0.8s_0.9s_cubic-bezier(0.16,1,0.3,1)_both] hidden md:block">
        <div className="bg-amber/90 px-5 py-4">
          <div
            className="font-serif text-[32px] font-black tracking-[-0.04em] leading-none"
            style={{ color: "#2a1800" }}
          >
            48<em className="italic text-teal">hr</em>
          </div>
          <div
            className="text-[9px] tracking-[0.1em] uppercase mt-1"
            style={{ color: "#2a1800" }}
          >
            avg delivery
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
