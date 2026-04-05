import logoImg from "@/assets/logo.png";
import MagneticButton from "./MagneticButton";

const Footer = () => (
  <footer className="grid grid-cols-1 md:grid-cols-3 px-8 py-6 items-center border-t border-ink gap-4">
    <MagneticButton className="flex items-center gap-2">
      <img src={logoImg} alt="parallaxdev studio" className="h-5 w-auto opacity-70" />
      <span className="font-mono text-[11px] font-medium text-ink">parallaxdev studio</span>
    </MagneticButton>
    <div className="text-[9px] text-mid tracking-[0.1em] text-center uppercase">@parallaxdev.studio</div>
    <div className="text-[9px] text-mid tracking-[0.06em] text-right">© 2025</div>
  </footer>
);

export default Footer;
