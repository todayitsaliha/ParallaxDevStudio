const items = [
  "Interactive Projects", "Real Results", "Preview Before You Pay",
  "Modern UI Standards", "CS Student Built", "Fast Delivery", "MERN · Next.js · React",
];

const Marquee = () => (
  <div className="bg-ink py-2.5 overflow-hidden border-b border-ink">
    <div className="flex whitespace-nowrap" style={{ animation: "marquee-run 14s linear infinite" }}>
      {[...items, ...items].map((text, i) => (
        <div key={i} className="font-serif italic text-sm text-paper/55 px-6 flex items-center gap-5">
          <b className="text-amber not-italic text-[7px]">✦</b> {text}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
