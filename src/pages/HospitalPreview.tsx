import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HospitalPreview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.cursor = "default";
    const style = document.createElement("style");
    style.id = "preview-cursor-fix";
    style.textContent = `* { cursor: auto !important; } .fixed[class*="pointer-events-none"][class*="z-[999"] { display: none !important; }`;
    document.head.appendChild(style);
    // Hide custom cursor elements
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
    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, background: "#f8fbfc", color: "#0b1829", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes hms-pulse{0%,100%{opacity:1;}50%{opacity:0.3;}}
        @keyframes hms-run{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      `}</style>

      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed", top: 16, left: 16, zIndex: 100,
          background: "#0b1829", color: "#f8fbfc",
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          letterSpacing: "0.08em", textTransform: "uppercase" as const,
          padding: "8px 16px", border: "none", cursor: "pointer",
        }}
      >
        ← Back to site
      </button>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", height: 60, background: "#0b1829", borderBottom: "1px solid rgba(248,251,252,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, background: "#1a8a8c", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" fill="none" width={20} height={20}>
              <path d="M12 3v6M9 6h6" stroke="#f8fbfc" strokeWidth={2} strokeLinecap="round" />
              <rect x={3} y={9} width={18} height={12} rx={1} stroke="#f8fbfc" strokeWidth={1.5} />
              <line x1={3} y1={13} x2={21} y2={13} stroke="rgba(248,251,252,0.3)" strokeWidth={1} />
              <line x1={9} y1={9} x2={9} y2={21} stroke="rgba(248,251,252,0.3)" strokeWidth={1} />
              <line x1={15} y1={9} x2={15} y2={21} stroke="rgba(248,251,252,0.3)" strokeWidth={1} />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <b style={{ fontSize: 13, fontWeight: 500, color: "#f8fbfc" }}>Medi<em style={{ fontStyle: "italic", color: "#2eb8ba" }}>Core</em> HMS</b>
            <span style={{ fontSize: 8, letterSpacing: "0.2em", color: "rgba(248,251,252,0.35)", textTransform: "uppercase" }}>Hospital Management System</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          {["Dashboard", "Patients", "Appointments", "Doctors", "Pharmacy", "Reports"].map((l, i) => (
            <a key={l} href="#" style={{ fontSize: 10, color: i === 0 ? "#2eb8ba" : "rgba(248,251,252,0.45)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0 1.1rem", height: 60, display: "flex", alignItems: "center", borderRight: "1px solid rgba(248,251,252,0.08)", borderLeft: i === 0 ? "1px solid rgba(248,251,252,0.08)" : "none", background: i === 0 ? "rgba(26,138,140,0.1)" : "transparent" }}>{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ background: "rgba(232,78,78,0.15)", border: "1px solid rgba(192,57,43,0.3)", color: "#e87070", fontSize: 9, letterSpacing: "0.06em", padding: "5px 12px", display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#e87070", animation: "hms-pulse 2s infinite" }} />
            3 Critical Alerts
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 12px", border: "1px solid rgba(248,251,252,0.08)", cursor: "pointer" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1a8a8c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: "#f8fbfc" }}>DR</div>
            <span style={{ fontSize: 10, color: "rgba(248,251,252,0.6)", letterSpacing: "0.04em" }}>Dr. Rizwan · Admin</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 480, borderBottom: "1px solid rgba(11,24,41,0.1)" }}>
        <div style={{ background: "#0b1829", padding: "4rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(#2eb8ba 1px,transparent 1px),linear-gradient(90deg,#2eb8ba 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2eb8ba", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 20, height: 1, background: "#2eb8ba", display: "inline-block" }} />
              City General Hospital — HMS v3.0
            </div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 58, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#f8fbfc" }}>
              Every<br /><em style={{ fontStyle: "italic", color: "#2eb8ba" }}>patient,</em><br />every <span style={{ WebkitTextStroke: "1.5px #f8fbfc", color: "transparent" }}>record.</span>
            </h1>
            <p style={{ fontSize: 11, color: "rgba(248,251,252,0.5)", lineHeight: 2, marginTop: "1.2rem", maxWidth: 300 }}>Unified hospital management — appointments, patients, doctors, pharmacy, and vitals. One system. Zero gaps in care.</p>
            <div style={{ display: "flex", gap: 8, marginTop: "1.5rem" }}>
              <button style={{ background: "#1a8a8c", color: "#f8fbfc", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "11px 22px", border: "none", cursor: "pointer" }}>Open dashboard →</button>
              <button style={{ background: "transparent", color: "rgba(248,251,252,0.6)", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "11px 22px", border: "1px solid rgba(248,251,252,0.15)", cursor: "pointer" }}>Book appointment</button>
            </div>
          </div>
          <div style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(248,251,252,0.08)", paddingTop: "1.5rem", marginTop: "auto", position: "relative", zIndex: 1 }}>
            {[{ n: "1.", e: "2k", l: "Patients today" }, { n: "98", e: "%", l: "Bed occupancy" }, { n: "48", e: "", l: "Doctors on duty" }].map((s, i) => (
              <div key={i} style={{ flex: 1, borderRight: i < 2 ? "1px solid rgba(248,251,252,0.08)" : "none", paddingRight: i < 2 ? "1rem" : 0, paddingLeft: i > 0 ? "1rem" : 0 }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 900, color: "#f8fbfc", letterSpacing: "-0.03em" }}>{s.n}<em style={{ fontStyle: "italic", color: "#2eb8ba" }}>{s.e}</em></div>
                <div style={{ fontSize: 9, color: "rgba(248,251,252,0.35)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#eef3f5", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem", borderLeft: "1px solid rgba(11,24,41,0.1)" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b8090" }}>Quick appointment booking</div>
          {/* Live strip */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 12px", background: "rgba(26,138,140,0.08)", border: "1px solid rgba(26,138,140,0.2)" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2eb8ba", animation: "hms-pulse 2s infinite", flexShrink: 0 }} />
            <span style={{ fontSize: 10, color: "#1a8a8c", letterSpacing: "0.04em", flex: 1, marginLeft: 8 }}>Live system — 847 active records right now</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, color: "#0b1829", letterSpacing: "-0.02em" }}>↑ 12%</span>
          </div>
          {/* Booking form */}
          <div style={{ border: "1px solid rgba(11,24,41,0.1)", background: "#f8fbfc" }}>
            <div style={{ background: "#0b1829", padding: "0.8rem 1.2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: "#f8fbfc", letterSpacing: "0.04em" }}>New Appointment</span>
              <span style={{ background: "rgba(26,138,140,0.2)", color: "#2eb8ba", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px" }}>Walk-in / Scheduled</span>
            </div>
            <div style={{ padding: "1.2rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <FormField label="Patient name" value="Ayesha Tariq" />
                <FormField label="Patient ID" value="PT-2024-0481" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b8090" }}>Department</div>
                  <select style={{ background: "#eef3f5", border: "1px solid rgba(11,24,41,0.1)", padding: "8px 10px", fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#0b1829", outline: "none", cursor: "pointer" }}>
                    <option>Cardiology</option><option>Orthopedics</option><option>Neurology</option>
                  </select>
                </div>
                <FormField label="Appointment date" value="24 March 2026" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b8090" }}>Assign doctor</div>
                <select style={{ background: "#eef3f5", border: "1px solid rgba(11,24,41,0.1)", padding: "8px 10px", fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#0b1829", outline: "none", cursor: "pointer" }}>
                  <option>Dr. Amina Siddiqui — Cardiologist</option><option>Dr. Hassan Malik — Orthopedic</option>
                </select>
              </div>
              <button style={{ background: "#1a8a8c", color: "#f8fbfc", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", padding: 12, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>Book appointment</span><span style={{ fontSize: 14 }}>→</span>
              </button>
            </div>
          </div>
          {/* Dept pills */}
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b8090", marginBottom: 8 }}>Filter by department</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Cardiology", "Emergency", "Orthopedics", "Neurology", "Pediatrics", "Oncology"].map((d, i) => (
                <div key={d} style={{ padding: "5px 12px", fontSize: 10, border: "1px solid", cursor: "pointer", background: [0, 3].includes(i) ? "#0b1829" : "#f8fbfc", color: [0, 3].includes(i) ? "#f8fbfc" : "#6b8090", borderColor: [0, 3].includes(i) ? "#0b1829" : "rgba(11,24,41,0.1)" }}>{d}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: "#1a8a8c", padding: "8px 0", overflow: "hidden", borderBottom: "1px solid rgba(11,24,41,0.1)" }}>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "hms-run 16s linear infinite" }}>
          {[...Array(2)].map((_, rep) => (
            ["24/7 Emergency Services", "Real-Time Bed Management", "Electronic Health Records", "Smart Pharmacy Integration", "Lab Results Instant Access", "Multi-Department Coordination"].map((t, i) => (
              <div key={`${rep}-${i}`} style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: 14, color: "rgba(248,251,252,0.75)", padding: "0 2rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <b style={{ color: "#0b1829", fontStyle: "normal", fontSize: 7 }}>+</b> {t}
              </div>
            ))
          ))}
        </div>
      </div>

      {/* STATS ROW */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(11,24,41,0.1)", borderTop: "1px solid rgba(11,24,41,0.1)", borderBottom: "1px solid rgba(11,24,41,0.1)" }}>
        {[
          { ey: "Today's patients", val: "1,", em: "247", sub: "+84 since yesterday", badge: "↑ 7.2%", bc: "ok", dark: true },
          { ey: "Beds occupied", val: "312", em: "", sub: "of 320 total beds", badge: "98% full", bc: "warn", dark: false },
          { ey: "Pending appointments", val: "89", em: "", sub: "Next: 9:15 AM — Dr. Siddiqui", badge: "On schedule", bc: "up", dark: false },
          { ey: "Critical cases", val: "7", em: "", sub: "ICU — 3 under observation", badge: "Urgent", bc: "crit", dark: false },
        ].map((s, i) => (
          <div key={i} style={{ background: s.dark ? "#0b1829" : "#f8fbfc", padding: "1.3rem 1.5rem", position: "relative" }}>
            <div style={{ fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: s.dark ? "rgba(248,251,252,0.35)" : "#6b8090", marginBottom: "0.5rem" }}>{s.ey}</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 38, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, color: s.dark ? "#f8fbfc" : "#0b1829" }}>{s.val}<em style={{ fontStyle: "italic", color: "#1a8a8c" }}>{s.em}</em></div>
            <div style={{ fontSize: 10, color: s.dark ? "rgba(248,251,252,0.4)" : "#6b8090", marginTop: 4 }}>{s.sub}</div>
            <div style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: 9, padding: "3px 8px", letterSpacing: "0.05em", ...badgeColors(s.bc) }}>{s.badge}</div>
          </div>
        ))}
      </div>

      {/* DEPARTMENTS */}
      <SectionDivider text="Departments — live status" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(11,24,41,0.1)", borderBottom: "1px solid rgba(11,24,41,0.1)" }}>
        {[
          { name: "Cardiology", sub: "Heart & vascular care", count: "124", fill: 78, active: true, countColor: undefined, fillColor: undefined, icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="rgba(248,251,252,0.7)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /> },
          { name: "Emergency", sub: "Trauma & critical care", count: "38", fill: 95, active: false, countColor: "#c0392b", fillColor: "#c0392b", icon: <><path d="M9 12l2 2 4-4" stroke="#1a8a8c" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle cx={12} cy={12} r={9} stroke="#1a8a8c" strokeWidth={1.5} /></> },
          { name: "Neurology", sub: "Brain & nerve care", count: "67", fill: 55, active: false, countColor: undefined, fillColor: undefined, icon: <path d="M12 2L8 8H3l4 4-1.5 6L12 15l6.5 3L17 12l4-4h-5L12 2z" stroke="#1a8a8c" strokeWidth={1.5} strokeLinejoin="round" /> },
          { name: "Pediatrics", sub: "Children's health", count: "89", fill: 62, active: false, countColor: undefined, fillColor: undefined, icon: <><circle cx={12} cy={7} r={4} stroke="#1a8a8c" strokeWidth={1.5} /><path d="M5 21v-2a7 7 0 0114 0v2" stroke="#1a8a8c" strokeWidth={1.5} /></> },
        ].map((d, i) => (
          <div key={i} style={{ background: d.active ? "#0b1829" : "#f8fbfc", padding: "1.3rem 1.5rem", cursor: "pointer" }}>
            <div style={{ width: 40, height: 40, marginBottom: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", background: d.active ? "rgba(248,251,252,0.08)" : "#eef3f5" }}>
              <svg viewBox="0 0 24 24" fill="none" width={20} height={20}>{d.icon}</svg>
            </div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 2, color: d.active ? "#f8fbfc" : "#0b1829" }}>{d.name}</div>
            <div style={{ fontSize: 10, color: d.active ? "rgba(248,251,252,0.45)" : "#6b8090" }}>{d.sub}</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 900, letterSpacing: "-0.03em", color: d.countColor || (d.active ? "#2eb8ba" : "#1a8a8c"), marginTop: "0.6rem" }}>{d.count}</div>
            <div style={{ height: 3, background: d.active ? "rgba(248,251,252,0.1)" : "#dde6ea", marginTop: "0.5rem" }}>
              <div style={{ height: "100%", width: `${d.fill}%`, background: d.fillColor || (d.active ? "#2eb8ba" : "#1a8a8c") }} />
            </div>
          </div>
        ))}
      </div>

      {/* APPOINTMENTS TABLE */}
      <SectionDivider text="Today's appointments — 24 March 2026" />
      <div style={{ borderBottom: "1px solid rgba(11,24,41,0.1)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Patient", "Time", "Department", "Doctor", "Type", "Status", "Action"].map(h => (
                <th key={h} style={{ padding: "0.7rem 1.5rem", textAlign: "left", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b8090", background: "#eef3f5", borderBottom: "1px solid rgba(11,24,41,0.1)", fontWeight: 400 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr key={i}>
                <td style={tdStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: "#f8fbfc", background: a.avColor, flexShrink: 0 }}>{a.initials}</div>
                    <div><div style={{ fontWeight: 500, color: "#0b1829" }}>{a.name}</div><div style={{ fontSize: 9, color: "#6b8090", letterSpacing: "0.04em" }}>{a.id}</div></div>
                  </div>
                </td>
                <td style={tdStyle}>{a.time}</td>
                <td style={tdStyle}><span style={{ fontSize: 9, padding: "2px 8px", background: a.deptBg, color: a.deptColor }}>{a.dept}</span></td>
                <td style={tdStyle}>{a.doctor}</td>
                <td style={tdStyle}>{a.type}</td>
                <td style={tdStyle}><span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 10px", ...statusColors(a.status) }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />{a.statusLabel}</span></td>
                <td style={tdStyle}><button style={{ fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", padding: "5px 12px", border: "1px solid rgba(11,24,41,0.1)", background: a.actionFilled ? "#0b1829" : "transparent", color: a.actionFilled ? "#f8fbfc" : "#0b1829", cursor: "pointer" }}>{a.action}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DOCTORS + SCHEDULE SPLIT */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(11,24,41,0.1)" }}>
        <div style={{ borderRight: "1px solid rgba(11,24,41,0.1)" }}>
          <WidgetHead title="Doctors" em="on duty" action="Full roster →" />
          <div>
            {doctors.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "0.9rem 1.5rem", borderBottom: "1px solid rgba(11,24,41,0.1)", cursor: "pointer" }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, color: "#f8fbfc", background: d.color }}>{d.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: "#0b1829" }}>{d.name}</div>
                  <div style={{ fontSize: 10, color: "#6b8090", marginTop: 1 }}>{d.spec}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3 }}>
                  <div style={{ fontSize: 9, letterSpacing: "0.06em", padding: "2px 8px", ...availColors(d.avail) }}>{d.availLabel}</div>
                  <div style={{ fontSize: 9, color: "#6b8090" }}>{d.pts}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <WidgetHead title="Today's" em="schedule" action="Full view →" />
          <div style={{ padding: "1rem 1.5rem" }}>
            {schedule.map((s, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "56px 1fr", alignItems: "stretch", minHeight: 52 }}>
                <div style={{ padding: "0.5rem 0", fontSize: 10, color: "#6b8090", letterSpacing: "0.04em", borderRight: "1px solid rgba(11,24,41,0.1)", paddingRight: 12, textAlign: "right", display: "flex", alignItems: "flex-start", paddingTop: 8 }}>{s.time}</div>
                <div style={{ padding: "4px 0 4px 12px" }}>
                  <div style={{ padding: "6px 10px", display: "flex", alignItems: "center", gap: 8, borderLeft: `2px solid ${schedColors[s.color]}`, background: schedBg[s.color] }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: schedColors[s.color], flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 500, color: "#0b1829" }}>{s.name}</div>
                      <div style={{ fontSize: 9, color: "#6b8090" }}>{s.detail}</div>
                    </div>
                    <div style={{ fontSize: 8, padding: "2px 7px", letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap", background: schedTagBg[s.tagColor || s.color], color: schedColors[s.tagColor || s.color] }}>{s.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* USP SECTION */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(11,24,41,0.1)" }}>
        <div style={{ background: "#0b1829", padding: "4rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,251,252,0.25)", marginBottom: "1rem" }}>Why MediCore HMS</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 50, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.04em", color: "#f8fbfc" }}>
              One system.<br /><em style={{ fontStyle: "italic", color: "#2eb8ba" }}>Zero gaps</em><br />in <span style={{ WebkitTextStroke: "1.5px #f8fbfc", color: "transparent" }}>care.</span>
            </div>
            <p style={{ fontSize: 11, color: "rgba(248,251,252,0.45)", lineHeight: 2, marginTop: "1rem" }}>Designed for hospitals that can't afford inefficiency. Real-time data, unified records, and intelligent scheduling — all in one place.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid rgba(248,251,252,0.08)" }}>
            {["Real-time bed & resource management", "Electronic health records with full history", "Integrated pharmacy & prescription system", "Automated billing & insurance claims", "Role-based access — doctor, nurse, admin"].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "0.7rem 1rem", borderBottom: i < 4 ? "1px solid rgba(248,251,252,0.08)" : "none" }}>
                <div style={{ width: 18, height: 18, background: "#1a8a8c", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 9, color: "#f8fbfc" }}>✓</div>
                <span style={{ fontSize: 11, color: "rgba(248,251,252,0.65)" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#1a8a8c", padding: "4rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 300, fontStyle: "italic", color: "rgba(11,24,41,0.7)", lineHeight: 1.5, marginBottom: "1.5rem" }}>"A system that thinks the way clinicians do — built for the ward, not just the boardroom."</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, background: "rgba(11,24,41,0.1)" }}>
            {[{ l: "Patient wait time reduced", v: "−42%" }, { l: "Record retrieval speed", v: "3 sec" }, { l: "Billing accuracy", v: "99.8%" }, { l: "Departments connected", v: "12+" }].map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.8rem 1rem", borderBottom: i < 3 ? "1px solid rgba(11,24,41,0.1)" : "none" }}>
                <span style={{ fontSize: 10, color: "rgba(11,24,41,0.6)", letterSpacing: "0.04em" }}>{m.l}</span>
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 900, color: "#0b1829", letterSpacing: "-0.03em" }}>{m.v}</span>
              </div>
            ))}
          </div>
          <button style={{ background: "#0b1829", color: "#f8fbfc", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", padding: "13px 20px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.5rem" }}>
            <span>Schedule a demo</span><span>→</span>
          </button>
        </div>
      </div>

      {/* PATIENT DETAIL */}
      <SectionDivider text="Patient detail — Electronic Health Record" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", borderBottom: "1px solid rgba(11,24,41,0.1)" }}>
        <div style={{ padding: "2rem 2.5rem", borderRight: "1px solid rgba(11,24,41,0.1)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(11,24,41,0.1)", marginBottom: "1.5rem" }}>
            <div style={{ width: 64, height: 64, background: "#0b1829", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 900, color: "#f8fbfc", flexShrink: 0 }}>MK</div>
            <div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1 }}>Muhammad <em style={{ fontStyle: "italic", color: "#1a8a8c" }}>Khan</em></div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                {["M · 47 yrs", "Blood: A+", "Critical — ICU", "PT-2023-1102", "Admitted: 23 Mar"].map((c, i) => (
                  <span key={i} style={{ fontSize: 9, padding: "3px 10px", background: i === 2 ? "#fdeaea" : "#eef3f5", color: i === 2 ? "#c0392b" : "#6b8090", border: `1px solid ${i === 2 ? "rgba(192,57,43,0.2)" : "rgba(11,24,41,0.1)"}` }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(11,24,41,0.1)", border: "1px solid rgba(11,24,41,0.1)" }}>
            {[{ l: "Diagnosis", v: "Acute MI" }, { l: "Attending", v: "Dr. T. Rehman" }, { l: "Ward", v: "ICU · Bed 3" }, { l: "Allergies", v: "Penicillin", alert: true }, { l: "Insurance", v: "EFU Health" }, { l: "Contact", v: "+92 300 1234567" }].map((c, i) => (
              <div key={i} style={{ background: "#f8fbfc", padding: "0.8rem 1rem" }}>
                <div style={{ fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b8090", marginBottom: 3 }}>{c.l}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: c.alert ? "#c0392b" : "#0b1829" }}>{c.v}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: 8 }}>Live vitals<span style={{ flex: 1, height: 1, background: "rgba(11,24,41,0.1)", display: "block" }} /></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(11,24,41,0.1)", border: "1px solid rgba(11,24,41,0.1)" }}>
              {[
                { l: "Heart rate", v: "112", u: "bpm", alert: true, badge: "High" },
                { l: "Blood pressure", v: "158", em: "/94", u: "mmHg" },
                { l: "SpO2", v: "94", em: "%", u: "Oxygen sat." },
                { l: "Temperature", v: "38.", em: "2", u: "°C — Mild fever" },
              ].map((vt, i) => (
                <div key={i} style={{ background: vt.alert ? "#0b1829" : "#f8fbfc", padding: "0.8rem 1rem" }}>
                  <div style={{ fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: vt.alert ? "rgba(248,251,252,0.35)" : "#6b8090", marginBottom: 3 }}>{vt.l}</div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", color: vt.alert ? "#f8fbfc" : "#0b1829" }}>{vt.v}<em style={{ fontStyle: "italic", color: "#1a8a8c" }}>{vt.em || ""}</em></div>
                  <div style={{ fontSize: 9, color: vt.alert ? "rgba(248,251,252,0.4)" : "#6b8090", marginTop: 2 }}>{vt.u}</div>
                  {vt.badge && <div style={{ background: "rgba(192,57,43,0.25)", color: "#e87070", fontSize: 9, padding: "2px 7px", display: "inline-block", marginTop: 3 }}>{vt.badge}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ padding: "1.5rem" }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: 8 }}>Current medications<span style={{ flex: 1, height: 1, background: "rgba(11,24,41,0.1)", display: "block" }} /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid rgba(11,24,41,0.1)", marginBottom: "1rem" }}>
            {[
              { name: "Aspirin 75mg", dose: "Oral · With food", freq: "1×/day", dot: "#1a8a8c" },
              { name: "Atorvastatin 40mg", dose: "Oral · At night", freq: "1×/day", dot: "#1a8a8c" },
              { name: "Metoprolol 50mg", dose: "Oral · Monitor BP", freq: "2×/day", dot: "#d4901a" },
              { name: "Heparin IV drip", dose: "IV continuous · ICU only", freq: "Infusion", dot: "#c0392b" },
            ].map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "0.7rem 1rem", borderBottom: i < 3 ? "1px solid rgba(11,24,41,0.1)" : "none" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: m.dot, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 11, fontWeight: 500, color: "#0b1829" }}>{m.name}</div><div style={{ fontSize: 9, color: "#6b8090", marginTop: 1 }}>{m.dose}</div></div>
                <div style={{ fontSize: 9, padding: "2px 7px", background: "#e0f4f4", color: "#1a8a8c" }}>{m.freq}</div>
              </div>
            ))}
          </div>
          <div style={{ border: "1px solid rgba(11,24,41,0.1)", padding: "1rem", background: "#eef3f5", marginBottom: "1rem" }}>
            <div style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b8090", marginBottom: 6 }}>Clinical notes</div>
            <div style={{ fontSize: 11, color: "#0b1829", lineHeight: 1.8 }}>Patient presented with chest pain, diaphoresis, and shortness of breath. ECG shows ST elevation in leads V1–V4. Troponin elevated. STEMI protocol initiated. Cardiology team on standby for cath lab.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <button style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "11px 16px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0b1829", color: "#f8fbfc" }}>Update vitals →</button>
            <button style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "11px 16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", color: "#0b1829", border: "1px solid rgba(11,24,41,0.1)" }}>Print full EHR</button>
            <button style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "11px 16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", color: "#0b1829", border: "1px solid rgba(11,24,41,0.1)" }}>Refer to specialist</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#0b1829", padding: "1.3rem 2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center" }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, color: "#f8fbfc", letterSpacing: "-0.01em" }}>Medi<em style={{ fontStyle: "italic", color: "#2eb8ba" }}>Core</em> HMS</div>
        <div style={{ fontSize: 9, color: "rgba(248,251,252,0.3)", textAlign: "center", letterSpacing: "0.08em", textTransform: "uppercase" }}>City General Hospital · Faisalabad</div>
        <div style={{ fontSize: 9, color: "rgba(248,251,252,0.3)", textAlign: "right", letterSpacing: "0.06em" }}>Built by ParallaxDev Studio · 2025</div>
      </footer>
    </div>
  );
};

// Helper components & data
const FormField = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    <div style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b8090" }}>{label}</div>
    <div style={{ background: "#eef3f5", border: "1px solid rgba(11,24,41,0.1)", padding: "8px 10px", fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#0b1829" }}>{value}</div>
  </div>
);

const SectionDivider = ({ text }: { text: string }) => (
  <div style={{ padding: "0.65rem 2.5rem", background: "#eef3f5", borderTop: "1px solid rgba(11,24,41,0.1)", borderBottom: "1px solid rgba(11,24,41,0.1)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b8090", display: "flex", alignItems: "center", gap: 8 }}>
    {text}<span style={{ flex: 1, height: 1, background: "rgba(11,24,41,0.1)", display: "block" }} />
  </div>
);

const WidgetHead = ({ title, em, action }: { title: string; em: string; action: string }) => (
  <div style={{ padding: "1rem 1.5rem", borderBottom: "1px solid rgba(11,24,41,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc" }}>
    <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 900, letterSpacing: "-0.02em" }}>{title} <em style={{ fontStyle: "italic", color: "#1a8a8c" }}>{em}</em></div>
    <span style={{ fontSize: 9, color: "#1a8a8c", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>{action}</span>
  </div>
);

const tdStyle: React.CSSProperties = { padding: "0.9rem 1.5rem", borderBottom: "1px solid rgba(11,24,41,0.1)", fontSize: 11, color: "#0b1829", verticalAlign: "middle" };

const badgeColors = (t: string): React.CSSProperties => {
  const m: Record<string, React.CSSProperties> = {
    ok: { background: "#e0f4f4", color: "#1a8a8c" },
    warn: { background: "#fdf3de", color: "#d4901a" },
    up: { background: "#e4f2ea", color: "#2e7d4f" },
    crit: { background: "#fdeaea", color: "#c0392b" },
  };
  return m[t] || {};
};

const statusColors = (s: string): React.CSSProperties => {
  const m: Record<string, React.CSSProperties> = {
    confirmed: { background: "#e4f2ea", color: "#2e7d4f" },
    urgent: { background: "#fdeaea", color: "#c0392b" },
    pending: { background: "#fdf3de", color: "#d4901a" },
    completed: { background: "#eef3f5", color: "#6b8090" },
  };
  return m[s] || {};
};

const availColors = (s: string): React.CSSProperties => {
  const m: Record<string, React.CSSProperties> = {
    in: { background: "#e4f2ea", color: "#2e7d4f" },
    busy: { background: "#fdf3de", color: "#d4901a" },
    off: { background: "#eef3f5", color: "#6b8090" },
  };
  return m[s] || {};
};

const schedColors: Record<string, string> = { teal: "#1a8a8c", red: "#c0392b", amber: "#d4901a", navy: "#0b1829" };
const schedBg: Record<string, string> = { teal: "#e0f4f4", red: "#fdeaea", amber: "#fdf3de", navy: "#eef3f5" };
const schedTagBg: Record<string, string> = { teal: "rgba(26,138,140,0.15)", red: "#fdeaea", amber: "#fdf3de", navy: "rgba(26,138,140,0.15)" };

const appointments = [
  { initials: "AT", name: "Ayesha Tariq", id: "PT-2024-0481", time: "09:00 AM", dept: "Cardiology", deptBg: "#e0f4f4", deptColor: "#1a8a8c", doctor: "Dr. A. Siddiqui", type: "Follow-up", status: "confirmed", statusLabel: "Confirmed", action: "View →", actionFilled: false, avColor: "#1a8a8c" },
  { initials: "MK", name: "Muhammad Khan", id: "PT-2023-1102", time: "09:30 AM", dept: "Emergency", deptBg: "#fdeaea", deptColor: "#c0392b", doctor: "Dr. T. Rehman", type: "Urgent", status: "urgent", statusLabel: "Critical", action: "Assign →", actionFilled: true, avColor: "#c0392b" },
  { initials: "SA", name: "Sara Ahmed", id: "PT-2024-0892", time: "10:15 AM", dept: "Neurology", deptBg: "#e0f4f4", deptColor: "#1a8a8c", doctor: "Dr. H. Malik", type: "Consultation", status: "pending", statusLabel: "Pending", action: "View →", actionFilled: false, avColor: "#2e7d4f" },
  { initials: "ZB", name: "Zain Butt", id: "PT-2022-0334", time: "11:00 AM", dept: "Orthopedics", deptBg: "#fdf3de", deptColor: "#d4901a", doctor: "Dr. F. Chaudhry", type: "Post-surgery", status: "completed", statusLabel: "Completed", action: "Record →", actionFilled: false, avColor: "#854f0b" },
  { initials: "NR", name: "Nadia Raza", id: "PT-2024-1245", time: "11:45 AM", dept: "Pediatrics", deptBg: "#e4f2ea", deptColor: "#2e7d4f", doctor: "Dr. S. Qureshi", type: "Routine checkup", status: "confirmed", statusLabel: "Confirmed", action: "View →", actionFilled: false, avColor: "#534ab7" },
];

const doctors = [
  { initials: "AS", name: "Dr. Amina Siddiqui", spec: "Cardiologist · 14 yrs exp", color: "#1a8a8c", avail: "in", availLabel: "In clinic", pts: "8 patients today" },
  { initials: "TR", name: "Dr. Tariq Rehman", spec: "Emergency · 9 yrs exp", color: "#c0392b", avail: "busy", availLabel: "In surgery", pts: "12 patients today" },
  { initials: "HM", name: "Dr. Hassan Malik", spec: "Neurologist · 11 yrs exp", color: "#2e7d4f", avail: "in", availLabel: "In clinic", pts: "6 patients today" },
  { initials: "FC", name: "Dr. Fatima Chaudhry", spec: "Orthopedic · 7 yrs exp", color: "#534ab7", avail: "busy", availLabel: "In rounds", pts: "5 patients today" },
  { initials: "SQ", name: "Dr. Sana Qureshi", spec: "Pediatrician · 6 yrs exp", color: "#854f0b", avail: "off", availLabel: "Off duty", pts: "4 patients today" },
];

const schedule = [
  { time: "9:00", color: "teal", name: "Ayesha Tariq — Cardiology follow-up", detail: "Dr. Siddiqui · Room 204", tag: "Confirmed", tagColor: "teal" },
  { time: "9:30", color: "red", name: "Muhammad Khan — Emergency admit", detail: "Dr. Rehman · ER Bay 3", tag: "Critical", tagColor: "red" },
  { time: "10:15", color: "amber", name: "Sara Ahmed — Neuro consultation", detail: "Dr. Malik · Room 108", tag: "Pending", tagColor: "amber" },
  { time: "11:00", color: "navy", name: "Zain Butt — Post-op assessment", detail: "Dr. Chaudhry · Ward B", tag: "Done", tagColor: "teal" },
  { time: "11:45", color: "teal", name: "Nadia Raza — Routine checkup", detail: "Dr. Qureshi · Room 312", tag: "Confirmed", tagColor: "teal" },
];

export default HospitalPreview;
