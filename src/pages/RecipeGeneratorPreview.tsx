import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RecipeGeneratorPreview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.cursor = "default";
    const style = document.createElement("style");
    style.id = "preview-cursor-fix";
    style.textContent = `* { cursor: auto !important; } .fixed[class*="pointer-events-none"][class*="z-[999"] { display: none !important; }`;
    document.head.appendChild(style);
    document.querySelectorAll('.fixed.pointer-events-none').forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });
    return () => {
      document.body.style.cursor = "";
      document.getElementById("preview-cursor-fix")?.remove();
      document.querySelectorAll('.fixed.pointer-events-none').forEach(el => {
        (el as HTMLElement).style.display = '';
      });
    };
  }, []);

  return (
    <div style={{ background: "#faf7f2", color: "#1a1208", fontFamily: "'DM Mono', monospace", fontSize: 13, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        style={{ position: "fixed", top: 16, left: 16, zIndex: 100, background: "#1a1208", color: "#faf7f2", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "8px 16px", border: "none", cursor: "pointer" }}
      >
        ← Back to site
      </button>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2.5rem", borderBottom: "1px solid rgba(26,18,8,0.1)", background: "#faf7f2" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "#d4622a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" fill="none" width={18} height={18}>
              <path d="M12 3 C8 3 5 6 5 9 C5 13 8 15 8 18 L16 18 C16 15 19 13 19 9 C19 6 16 3 12 3Z" stroke="#faf7f2" strokeWidth="1.5" strokeLinejoin="round" />
              <line x1="9" y1="21" x2="15" y2="21" stroke="#faf7f2" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="18" x2="12" y2="21" stroke="#faf7f2" strokeWidth="1.5" />
              <line x1="9" y1="9" x2="15" y2="9" stroke="#faf7f2" strokeWidth="1" opacity="0.6" />
              <line x1="10" y1="12" x2="14" y2="12" stroke="#faf7f2" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 900, letterSpacing: "-0.02em" }}>
            Mise<em style={{ fontStyle: "italic", color: "#d4622a" }}>en</em>Place
          </div>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Generate", "Saved", "Meal Plan", "Pantry"].map((l, i) => (
            <a key={l} href="#" style={{ fontSize: 11, color: i === 0 ? "#d4622a" : "#7a6e5f", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button style={{ background: "#d4622a", color: "#faf7f2", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "8px 18px", border: "none", cursor: "pointer" }}>Pro — Upgrade ↗</button>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#e8e0d2", border: "1px solid rgba(26,18,8,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: "#7a6e5f" }}>AK</div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 420, borderBottom: "1px solid rgba(26,18,8,0.1)" }}>
        {/* Left */}
        <div style={{ background: "#d4622a", padding: "3.5rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(250,247,242,0.6)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 20, height: 1, background: "rgba(250,247,242,0.4)", display: "inline-block" }} />
              AI-Powered Recipe Generator
            </div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 52, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#faf7f2" }}>
              What's in your<br /><em style={{ fontStyle: "italic" }}>fridge</em><br />tonight<span style={{ WebkitTextStroke: "1.5px #faf7f2", color: "transparent" }}>?</span>
            </h1>
            <p style={{ fontSize: 11, color: "rgba(250,247,242,0.65)", lineHeight: 2, marginTop: "1.2rem", maxWidth: 280 }}>Tell us your ingredients. We'll generate recipes that are actually worth cooking — with nutrition, steps, and substitutes built in.</p>
            <div style={{ display: "flex", gap: 8, marginTop: "1.5rem" }}>
              <button style={{ background: "#faf7f2", color: "#d4622a", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "11px 22px", border: "none", cursor: "pointer", fontWeight: 500 }}>Generate now →</button>
              <button style={{ background: "transparent", color: "rgba(250,247,242,0.75)", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "11px 22px", border: "1px solid rgba(250,247,242,0.3)", cursor: "pointer" }}>Browse recipes</button>
            </div>
          </div>
          <div style={{ display: "flex", borderTop: "1px solid rgba(250,247,242,0.15)", paddingTop: "1.2rem", marginTop: "auto" }}>
            {[{ n: "12k+", l: "Recipes generated" }, { n: "98%", l: "Accuracy rate" }, { n: "4.9", l: "Avg rating" }].map((s, i) => (
              <div key={i} style={{ flex: 1, borderRight: i < 2 ? "1px solid rgba(250,247,242,0.15)" : "none", paddingRight: i < 2 ? "1rem" : 0, paddingLeft: i > 0 ? "1rem" : 0 }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 900, color: "#faf7f2", letterSpacing: "-0.03em" }}>{s.n}</div>
                <div style={{ fontSize: 9, color: "rgba(250,247,242,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Input */}
        <div style={{ background: "#f2ede4", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem", borderLeft: "1px solid rgba(26,18,8,0.1)" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#7a6e5f" }}>Your ingredients today</div>

          <div style={{ border: "1px solid rgba(26,18,8,0.1)", background: "#faf7f2", padding: "1rem 1.2rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.8rem" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700 }}>Ingredient list</div>
              <div style={{ fontSize: 10, color: "#d4622a", letterSpacing: "0.06em" }}>6 added</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "0.8rem" }}>
              {["Chicken", "Garlic", "Tomatoes", "Pasta", "Olive oil", "Basil"].map(i => (
                <div key={i} style={{ background: "#fdeee6", color: "#8a3510", fontSize: 10, padding: "4px 10px", borderRadius: 100, display: "flex", alignItems: "center", gap: 5, border: "1px solid rgba(212,98,42,0.2)" }}>
                  {i} <span style={{ color: "#8a3510", opacity: 0.5, cursor: "pointer", fontSize: 11 }}>✕</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ flex: 1, background: "#f2ede4", border: "1px solid rgba(26,18,8,0.1)", padding: "7px 12px", fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#7a6e5f" }}>Add an ingredient…</div>
              <button style={{ background: "#1a1208", color: "#faf7f2", fontFamily: "'DM Mono', monospace", fontSize: 10, padding: "7px 14px", border: "none", cursor: "pointer", letterSpacing: "0.06em" }}>+ Add</button>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#7a6e5f", marginBottom: 8 }}>Dietary preferences</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {[{ l: "Vegetarian", on: true }, { l: "Vegan", on: false }, { l: "Gluten-free", on: true }, { l: "Low-carb", on: false }, { l: "Dairy-free", on: false }, { l: "High protein", on: false }].map(f => (
                <div key={f.l} style={{ padding: "5px 12px", borderRadius: 100, fontSize: 10, border: `1px solid ${f.on ? "#3a6b35" : "rgba(26,18,8,0.1)"}`, cursor: "pointer", background: f.on ? "#3a6b35" : "#faf7f2", color: f.on ? "#faf7f2" : "#7a6e5f" }}>{f.l}</div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#7a6e5f", marginBottom: 8 }}>Cuisine & time</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {[{ l: "Italian", on: true }, { l: "Asian", on: false }, { l: "Mexican", on: false }, { l: "Under 30 min", on: false }].map(f => (
                <div key={f.l} style={{ padding: "5px 12px", borderRadius: 100, fontSize: 10, border: `1px solid ${f.on ? "#3a6b35" : "rgba(26,18,8,0.1)"}`, cursor: "pointer", background: f.on ? "#3a6b35" : "#faf7f2", color: f.on ? "#faf7f2" : "#7a6e5f" }}>{f.l}</div>
              ))}
            </div>
          </div>

          <button style={{ background: "#d4622a", color: "#faf7f2", fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: 13, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>Generate my recipes</span><span style={{ fontSize: 14 }}>→</span>
          </button>
        </div>
      </section>

      {/* Divider */}
      <div style={{ padding: "0.7rem 2.5rem", background: "#f2ede4", borderTop: "1px solid rgba(26,18,8,0.1)", borderBottom: "1px solid rgba(26,18,8,0.1)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#7a6e5f" }}>
        Generated for you — 6 recipes found
      </div>

      {/* Section head */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "1.5rem 2.5rem 1rem", borderBottom: "1px solid rgba(26,18,8,0.1)" }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 900, letterSpacing: "-0.03em" }}>Your <em style={{ fontStyle: "italic", color: "#d4622a" }}>matches</em></div>
        <div style={{ fontSize: 10, color: "#7a6e5f", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Based on 6 ingredients · Sorted by best match</div>
      </div>

      {/* Recipe cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(26,18,8,0.1)" }}>
        {/* Featured */}
        <RecipeCard featured name="Chicken Pomodoro" nameEm="Pasta" emColor="#d4622a" cuisine="Italian · Best match" time="25 min" icon="🍝" thumbBg="#fdeee6" desc="Pan-seared chicken in a fresh tomato basil sauce tossed with al dente pasta. Uses all 6 of your ingredients — zero waste." tags={[{ l: "Quick", c: "quick" }, { l: "Healthy", c: "healthy" }, { l: "Uses all 6", c: "uses" }]} macros={[{ n: "487", l: "Kcal" }, { n: "38g", l: "Protein" }, { n: "52g", l: "Carbs" }, { n: "14g", l: "Fat" }]} />
        <RecipeCard name="Garlic Tomato" nameEm="Bruschetta" emColor="#3a6b35" cuisine="Mediterranean" time="20 min" icon="🥗" thumbBg="#e8f2e7" desc="Fresh bruschetta with roasted garlic, heirloom tomatoes, and torn basil leaves." tags={[{ l: "Vegetarian", c: "veg" }, { l: "Quick", c: "quick" }]} macros={[{ n: "210", l: "Kcal" }, { n: "6g", l: "Protein" }]} />
        <RecipeCard name="Rustic Chicken" nameEm="Cacciatore" emColor="#c8862a" cuisine="Italian" time="35 min" icon="🍲" thumbBg="#fdf3de" desc="A bold, slow-simmered hunter-style chicken stew with tomatoes, garlic, and herbs." tags={[{ l: "Hearty", c: "hearty" }, { l: "Healthy", c: "healthy" }]} macros={[{ n: "380", l: "Kcal" }, { n: "44g", l: "Protein" }]} />
      </div>

      {/* Full recipe divider */}
      <div style={{ padding: "0.7rem 2.5rem", background: "#f2ede4", borderTop: "1px solid rgba(26,18,8,0.1)", borderBottom: "1px solid rgba(26,18,8,0.1)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#7a6e5f" }}>
        Full recipe view — Chicken Pomodoro Pasta
      </div>

      {/* Recipe detail */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", borderTop: "1px solid rgba(26,18,8,0.1)" }}>
        <div style={{ padding: "2rem 2.5rem", borderRight: "1px solid rgba(26,18,8,0.1)" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#d4622a", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 16, height: 1, background: "#d4622a", display: "inline-block" }} />
            Top match · Italian · 25 minutes
          </div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 40, fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "0.8rem" }}>
            Chicken Pomodoro<br /><em style={{ fontStyle: "italic", color: "#d4622a" }}>Pasta</em>
          </div>

          <div style={{ display: "flex", border: "1px solid rgba(26,18,8,0.1)", marginBottom: "1.5rem" }}>
            {[{ l: "Prep time", v: "10 min" }, { l: "Cook time", v: "15 min" }, { l: "Servings", v: "2 people" }, { l: "Difficulty", v: "Easy" }].map((m, i) => (
              <div key={i} style={{ flex: 1, padding: "0.7rem 0.9rem", borderRight: i < 3 ? "1px solid rgba(26,18,8,0.1)" : "none" }}>
                <div style={{ fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#7a6e5f" }}>{m.l}</div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{m.v}</div>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: 8 }}>
            Method<span style={{ flex: 1, height: 1, background: "rgba(26,18,8,0.1)", display: "block" }} />
          </div>

          {[
            "Bring a large pot of salted water to a boil. Cook pasta until al dente according to package, reserve <strong>½ cup pasta water</strong> before draining.",
            "Season chicken breast with salt and pepper. Heat <strong>2 tbsp olive oil</strong> in a wide pan over medium-high. Cook chicken 5–6 min per side until golden. Rest and slice.",
            "In the same pan, reduce heat to medium. Add <strong>4 cloves minced garlic</strong>, sauté 60 seconds until fragrant. Don't let it brown.",
            "Add <strong>400g crushed tomatoes</strong>. Simmer 8 minutes, stirring occasionally. Season with salt, pepper, and a pinch of sugar to balance acidity.",
            "Toss drained pasta into the sauce with a splash of pasta water. Plate, top with sliced chicken, and finish with <strong>fresh torn basil</strong> and a drizzle of olive oil.",
          ].map((step, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "36px 1fr", borderBottom: i < 4 ? "1px solid rgba(26,18,8,0.1)" : "none", padding: "0.8rem 0" }}>
              <div style={{ width: 26, height: 26, border: "1px solid #d4622a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: "#d4622a", flexShrink: 0 }}>{i + 1}</div>
              <div style={{ fontSize: 11, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: step.replace(/<strong>/g, '<strong style="font-weight:500;color:#d4622a;">') }} />
            </div>
          ))}
        </div>

        {/* Right sidebar */}
        <div style={{ padding: "1.5rem" }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: 8 }}>
            Ingredients<span style={{ flex: 1, height: 1, background: "rgba(26,18,8,0.1)", display: "block" }} />
          </div>
          <div style={{ border: "1px solid rgba(26,18,8,0.1)", marginBottom: "1rem" }}>
            {[
              { name: "Chicken breast", amt: "300g", checked: false },
              { name: "Pasta (penne)", amt: "200g", checked: true },
              { name: "Fresh tomatoes", amt: "400g", checked: false },
              { name: "Garlic cloves", amt: "4 cloves", checked: false },
              { name: "Olive oil", amt: "3 tbsp", checked: false },
              { name: "Fresh basil", amt: "handful", checked: false },
              { name: "Salt + black pepper", amt: "to taste", checked: false, muted: true },
            ].map((ing, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 0.8rem", borderBottom: i < 6 ? "1px solid rgba(26,18,8,0.1)" : "none", fontSize: 11 }}>
                <div style={{ width: 14, height: 14, border: "1px solid rgba(26,18,8,0.1)", borderRadius: 2, flexShrink: 0, background: ing.checked ? "#d4622a" : "transparent", borderColor: ing.checked ? "#d4622a" : "rgba(26,18,8,0.1)" }} />
                <span style={{ flex: 1, marginLeft: 8, textDecoration: ing.checked ? "line-through" : "none", color: ing.checked || ing.muted ? "#7a6e5f" : "#1a1208" }}>{ing.name}</span>
                <span style={{ color: ing.muted ? "#7a6e5f" : "#d4622a", fontWeight: 500 }}>{ing.amt}</span>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: 8 }}>
            Nutrition / serving<span style={{ flex: 1, height: 1, background: "rgba(26,18,8,0.1)", display: "block" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(26,18,8,0.1)", border: "1px solid rgba(26,18,8,0.1)", marginBottom: "1rem" }}>
            {[
              { n: "487", l: "Calories", hl: true },
              { n: "38g", l: "Protein", hl: false },
              { n: "52g", l: "Carbs", hl: false },
              { n: "14g", l: "Fat", hl: false },
            ].map((nut, i) => (
              <div key={i} style={{ background: nut.hl ? "#d4622a" : "#faf7f2", padding: "0.6rem 0.8rem" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 900, letterSpacing: "-0.02em", color: nut.hl ? "#faf7f2" : "#1a1208" }}>{nut.n}</div>
                <div style={{ fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: nut.hl ? "rgba(250,247,242,0.6)" : "#7a6e5f", marginTop: 1 }}>{nut.l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: "1rem" }}>
            <button style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "11px 16px", border: "none", cursor: "pointer", background: "#d4622a", color: "#faf7f2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>Save to cookbook <span>→</span></button>
            <button style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "11px 16px", border: "1px solid rgba(26,18,8,0.1)", cursor: "pointer", background: "transparent", color: "#1a1208", display: "flex", alignItems: "center", justifyContent: "space-between" }}>Add to meal plan <span></span></button>
            <button style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "11px 16px", border: "1px solid rgba(26,18,8,0.1)", cursor: "pointer", background: "transparent", color: "#1a1208", display: "flex", alignItems: "center", justifyContent: "space-between" }}>Print / export PDF <span></span></button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "1.2rem 2.5rem", borderTop: "1px solid rgba(26,18,8,0.1)", alignItems: "center", background: "#faf7f2" }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 13, fontWeight: 700, letterSpacing: "-0.01em" }}>Mise<em style={{ fontStyle: "italic", color: "#d4622a" }}>en</em>Place</div>
        <div style={{ fontSize: 9, color: "#7a6e5f", textAlign: "center", letterSpacing: "0.08em" }}>AI recipe generation · Built with love</div>
        <div style={{ fontSize: 9, color: "#7a6e5f", textAlign: "right", letterSpacing: "0.06em" }}>By ParallaxDev Studio</div>
      </footer>
    </div>
  );
};

const tagColors: Record<string, { bg: string; color: string }> = {
  quick: { bg: "#fdf3de", color: "#6b4410" },
  healthy: { bg: "#e8f2e7", color: "#254a22" },
  veg: { bg: "#e8f2e7", color: "#254a22" },
  hearty: { bg: "rgba(192,57,43,0.1)", color: "#7a2218" },
  uses: { bg: "#fdeee6", color: "#8a3510" },
};

const RecipeCard = ({ featured, name, nameEm, emColor, cuisine, time, icon, thumbBg, desc, tags, macros }: {
  featured?: boolean; name: string; nameEm: string; emColor: string; cuisine: string; time: string; icon: string; thumbBg: string; desc: string;
  tags: { l: string; c: string }[]; macros: { n: string; l: string }[];
}) => (
  <div style={{ background: "#faf7f2", cursor: "pointer", gridColumn: featured ? "span 2" : undefined }}>
    <div style={{ height: featured ? 200 : 140, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(26,18,8,0.1)", background: thumbBg }}>
      <div style={{ position: "absolute", top: 10, left: 10, background: "#d4622a", color: "#faf7f2", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "3px 8px" }}>{cuisine}</div>
      <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(26,18,8,0.65)", color: "#faf7f2", fontSize: 8, letterSpacing: "0.06em", padding: "3px 8px" }}>{time}</div>
      <span style={{ fontSize: featured ? 56 : 42, lineHeight: 1 }}>{icon}</span>
    </div>
    <div style={{ padding: "1rem 1.2rem" }}>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: featured ? 22 : 17, fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 4, lineHeight: 1.2 }}>
        {name} <em style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", color: emColor }}>{nameEm}</em>
      </div>
      <div style={{ fontSize: 10, color: "#7a6e5f", lineHeight: 1.7, marginBottom: "0.8rem" }}>{desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: "0.8rem" }}>
        {tags.map(t => (
          <span key={t.l} style={{ fontSize: 9, padding: "2px 7px", borderRadius: 100, background: tagColors[t.c]?.bg, color: tagColors[t.c]?.color }}>{t.l}</span>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(26,18,8,0.1)", paddingTop: "0.7rem" }}>
        <div style={{ display: "flex", gap: 10 }}>
          {macros.map(m => (
            <div key={m.l} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 500 }}>{m.n}</div>
              <div style={{ fontSize: 8, color: "#7a6e5f", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{m.l}</div>
            </div>
          ))}
        </div>
        <div style={{ width: 26, height: 26, border: "1px solid rgba(26,18,8,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, cursor: "pointer" }}>♡</div>
      </div>
    </div>
  </div>
);

export default RecipeGeneratorPreview;
