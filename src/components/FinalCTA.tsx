import { useTextReveal } from "@/hooks/useTextReveal";
import { useParallax } from "@/hooks/useParallax";
import { useToast } from "@/hooks/use-toast";
import MagneticButton from "./MagneticButton";

const FinalCTA = () => {
  const headRef = useTextReveal<HTMLDivElement>();
  const { ref: paraRef, offset } = useParallax(-0.12);
  const { toast } = useToast();

  const emailTemplate = `Hi ParallaxDev,

I'm interested in working together.

Project Type: [Website / Dashboard / App / Other]
Brief Description: 
Budget Range: 
Timeline: 

Thanks!`;

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(emailTemplate);
      toast({
        title: "Copied!",
        description:
          "Email template copied to clipboard. Send to: parallaxdevstudio@gmail.com",
        duration: 3000,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div id="contact" className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-ink">
        <div className="bg-red px-8 py-24 flex flex-col gap-6 relative noise overflow-hidden">
          {/* Parallax decorative */}
          <div
            ref={paraRef}
            className="absolute -left-20 bottom-0 w-80 h-80 border border-paper/[0.06] rounded-full pointer-events-none"
            style={{ transform: `translateY(${offset}px)` }}
          />
          <div className="absolute top-12 right-12 w-16 h-16 border border-paper/[0.08] rotate-45 float-anim" />

          <div className="text-[9px] tracking-[0.15em] uppercase text-paper/40 mb-2 relative z-10">
            05 — contact
          </div>
          <div ref={headRef} className="relative z-10">
            <div className="font-serif text-[clamp(42px,6vw,60px)] font-black leading-[0.9] tracking-[-0.04em] text-paper">
              <span className="text-reveal-line block">Build</span>
              <span className="text-reveal-line block">something</span>
              <span className="text-reveal-line block">
                <em className="italic">that</em>
              </span>
              <span className="text-reveal-line block">
                <span className="text-outline-light">stands out.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-paper px-8 py-24 flex flex-col justify-center gap-6">
          <div className="text-[9px] tracking-[0.15em] uppercase text-mid">
            Get in touch
          </div>
          <p className="text-[11px] text-mid leading-[2] max-w-[320px]">
            Built by a CS student. Designed for academic success. Preview first,
            pay after. Ready when you are.
          </p>
          <div className="flex flex-col gap-3 mt-2">
            <MagneticButton
              as="button"
              onClick={handleCopyTemplate}
              className="bg-ink text-paper font-mono text-[10px] tracking-[0.1em] px-5 py-4 uppercase flex items-center justify-between w-full md:w-80 hover:bg-teal transition-colors duration-300 active:scale-[0.97]"
            >
              <span>Email us</span>
              <span className="text-amber">→</span>
            </MagneticButton>
          </div>
          <div className="text-[9px] text-mid/60 leading-[1.8] max-w-[320px] mt-4 border-t border-ink/10 pt-4">
            <p className="font-mono font-medium">How it works:</p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Click "Email us" to copy the template</li>
              <li>Open your email client</li>
              <li>
                Send to:{" "}
                <span className="text-ink">parallaxdevstudio@gmail.com</span>
              </li>
              <li>Paste the template and fill in your details</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
