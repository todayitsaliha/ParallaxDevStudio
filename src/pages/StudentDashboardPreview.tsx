import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const StudentDashboardPreview = () => {
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
    <div className="h-screen overflow-hidden font-mono text-ink" style={{ background: "hsl(var(--paper))" }}>
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 z-[100] bg-ink text-paper font-mono text-[10px] tracking-[0.1em] uppercase px-4 py-2 hover:bg-teal transition-colors duration-200"
      >
        ← Back to site
      </button>

      <div className="grid grid-cols-[220px_1fr] h-full">
        {/* SIDEBAR */}
        <aside className="bg-ink flex flex-col border-r border-white/[0.06] overflow-hidden">
          <div className="p-[1.4rem] pb-[1.2rem] border-b border-white/[0.08] flex items-center gap-2.5">
            <img src={logoImg} alt="parallaxdev" className="h-6 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="text-[12px] font-medium text-paper tracking-[-0.01em]">parallaxdev</span>
              <span className="text-[8px] tracking-[0.2em] text-paper/35 uppercase">student portal</span>
            </div>
          </div>

          <div className="px-[1.4rem] py-[1.2rem] border-b border-white/[0.08] flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center font-serif text-[14px] font-black text-paper shrink-0">AK</div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium text-paper truncate">Ahmed Khan</div>
              <div className="text-[9px] text-paper/40 tracking-[0.06em] mt-px">CS-2021-F-0042</div>
            </div>
            <div className="w-[7px] h-[7px] rounded-full bg-[#3a7d44] shrink-0" />
          </div>

          <nav className="flex-1 py-4 overflow-y-auto">
            <SidebarSection label="Main" />
            <NavItem icon="⊞" label="Dashboard" active />
            <NavItem icon="◷" label="Timetable" />
            <NavItem icon="✎" label="Assignments" badge="3" />
            <NavItem icon="◉" label="Attendance" />
            <NavItem icon="◈" label="Results & GPA" />

            <SidebarSection label="Academic" className="mt-2" />
            <NavItem icon="⬡" label="Course Material" />
            <NavItem icon="▦" label="Exam Schedule" badge="!" badgeRed />
            <NavItem icon="⊕" label="Fee Status" />

            <SidebarSection label="Other" className="mt-2" />
            <NavItem icon="◎" label="Notices" badge="2" />
            <NavItem icon="⚙" label="Settings" />
          </nav>

          <div className="px-[1.4rem] py-[1.2rem] border-t border-white/[0.08]">
            <div className="bg-amber/[0.12] border border-amber/20 rounded-md px-[0.9rem] py-[0.7rem]">
              <div className="text-[8px] tracking-[0.12em] uppercase text-amber/60 mb-0.5">Current Semester</div>
              <div className="font-serif text-[16px] font-bold text-amber">Semester 6</div>
              <div className="text-[9px] text-amber/50 mt-px">Fall 2024 · Week 11 of 18</div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex flex-col overflow-hidden">
          {/* TOPBAR */}
          <div className="bg-paper border-b border-ink/[0.12] px-8 py-[0.9rem] flex items-center justify-between shrink-0">
            <div className="flex flex-col gap-0.5">
              <div className="font-serif text-[20px] font-black tracking-[-0.02em] flex items-baseline gap-2">
                Good morning, <em className="italic text-teal">Ahmed.</em>
              </div>
              <div className="text-[9px] text-mid tracking-[0.08em] uppercase">Monday · 23 March 2026 · Semester 6</div>
            </div>
            <div className="flex items-center gap-4">
              <input className="bg-ink/[0.04] border border-ink/[0.12] px-3.5 py-[7px] font-mono text-[11px] text-ink w-[200px] outline-none placeholder:text-mid" placeholder="Search courses, notices…" />
              <div className="w-[34px] h-[34px] bg-ink/[0.04] border border-ink/[0.12] flex items-center justify-center relative text-sm">
                🔔
                <div className="absolute top-1.5 right-[7px] w-1.5 h-1.5 rounded-full bg-red border-[1.5px] border-paper" />
              </div>
              <div className="w-[34px] h-[34px] rounded-full bg-teal flex items-center justify-center font-serif text-[13px] font-black text-paper">AK</div>
            </div>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto p-6 px-8 space-y-6" style={{ scrollbarWidth: "thin" }}>
            {/* STAT CARDS */}
            <div className="grid grid-cols-4 gap-px bg-ink/[0.12] border border-ink/[0.12]">
              <StatCard label="Current GPA" value="3." highlight valueSuffix="72" sub="Out of 4.00 scale" trend="↑ +0.14" trendType="up" />
              <StatCard label="Attendance" value="84" valueSuffix="%" sub="78 of 93 classes" trend="⚠ Low" trendType="neutral" />
              <StatCard label="Assignments Due" value="3" sub="Next: OOP — Tomorrow" trend="Urgent" trendType="down" />
              <StatCard label="Credit Hours" value="18" sub="6 courses this semester" trend="On track" trendType="up" />
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-[1fr_340px] gap-6">
              {/* TIMETABLE */}
              <div className="border border-ink/[0.12]">
                <WidgetHeader title="This Week's" titleEm="Timetable" action="Full schedule →" />
                <TimetableGrid />
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-6">
                {/* GPA */}
                <div className="border border-ink/[0.12]">
                  <WidgetHeader titleEm="GPA" title=" Overview" action="Full results →" emFirst />
                  <div className="p-[1.2rem]">
                    <div className="font-serif text-[64px] font-black tracking-[-0.05em] leading-none">
                      3.<em className="italic text-teal">72</em><span className="text-[18px] font-light text-mid">/4.0</span>
                    </div>
                    <div className="flex mt-3 border border-ink/[0.12]">
                      {[{ sem: "Sem 4", val: "3.58" }, { sem: "Sem 5", val: "3.60" }, { sem: "Sem 6", val: "3.72 ↑", up: true }].map((s, i) => (
                        <div key={i} className={`flex-1 px-[0.7rem] py-[0.6rem] flex flex-col gap-0.5 ${i < 2 ? "border-r border-ink/[0.12]" : ""}`}>
                          <div className="text-[8px] tracking-[0.1em] uppercase text-mid">{s.sem}</div>
                          <div className={`font-serif text-[16px] font-bold tracking-[-0.02em] ${s.up ? "text-[#3a7d44]" : "text-amber"}`}>{s.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SUBJECT PROGRESS */}
                <div className="border border-ink/[0.12]">
                  <WidgetHeader title="Subject" titleEm="Progress" actionLabel="Marks %" />
                  <div className="p-[1rem_1.2rem] flex flex-col gap-[0.9rem]">
                    {[
                      { name: "Object Oriented Programming", pct: 82, color: "bg-teal" },
                      { name: "Database Systems", pct: 76, color: "bg-amber" },
                      { name: "Computer Networks", pct: 68, color: "bg-red" },
                      { name: "Operating Systems", pct: 91, color: "bg-ink" },
                      { name: "Software Engineering", pct: 79, color: "bg-teal" },
                    ].map((s) => (
                      <div key={s.name} className="flex flex-col gap-1">
                        <div className="flex justify-between items-baseline">
                          <span className="text-[11px] font-medium">{s.name}</span>
                          <span className="text-[10px] text-mid">{s.pct}%</span>
                        </div>
                        <div className="h-1 bg-ink/[0.06] w-full">
                          <div className={`h-full ${s.color}`} style={{ width: `${s.pct}%`, transition: "width 0.4s" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-3 gap-6">
              {/* ASSIGNMENTS */}
              <div className="border border-ink/[0.12]">
                <WidgetHeader titleEm="Assignments" action="All tasks →" />
                <div>
                  {[
                    { name: "OOP — Inheritance Lab Report", sub: "Object Oriented Programming", due: "Tomorrow", status: "urgent" },
                    { name: "DBMS — ER Diagram Submission", sub: "Database Systems", due: "2 days", status: "urgent" },
                    { name: "Networks — Subnetting Problem Set", sub: "Computer Networks", due: "Mar 28", status: "soon" },
                    { name: "SE — SRS Document Draft", sub: "Software Engineering", due: "Apr 2", status: "ok" },
                    { name: "OS — Process Scheduling Quiz", sub: "Operating Systems", due: "Submitted", status: "done" },
                  ].map((a) => (
                    <div key={a.name} className="px-[1.2rem] py-[0.8rem] border-b border-ink/[0.12] last:border-b-0 flex items-center gap-2.5 hover:bg-ink/[0.02] transition-colors">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${
                        a.status === "urgent" ? "bg-red" : a.status === "soon" ? "bg-amber" : a.status === "ok" ? "bg-[#3a7d44]" : "bg-mid/40"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-medium truncate">{a.name}</div>
                        <div className="text-[9px] text-mid mt-px">{a.sub}</div>
                      </div>
                      <div className={`text-[9px] tracking-[0.04em] text-right shrink-0 ${
                        a.status === "urgent" ? "text-red" : a.status === "soon" ? "text-[#8a5c1a]" : a.status === "ok" ? "text-[#3a7d44]" : "text-mid"
                      }`}>{a.due}</div>
                      <div className={`w-4 h-4 border border-ink/[0.12] rounded-sm flex items-center justify-center text-[9px] shrink-0 ${
                        a.status === "done" ? "bg-[#3a7d44] border-[#3a7d44] text-white" : "text-mid"
                      }`}>{a.status === "done" ? "✓" : "○"}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ATTENDANCE */}
              <div className="border border-ink/[0.12]">
                <WidgetHeader titleEm="Attendance" action="Details →" />
                <div className="p-[1rem_1.2rem]">
                  <div className="flex items-center gap-[1.2rem] mb-4">
                    <div className="relative w-20 h-20 shrink-0">
                      <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
                        <circle cx="40" cy="40" r="32" stroke="hsl(var(--ink) / 0.08)" strokeWidth="8" fill="none" />
                        <circle cx="40" cy="40" r="32" stroke="hsl(var(--teal))" strokeWidth="8" fill="none"
                          strokeDasharray="201" strokeDashoffset="32" />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="font-serif text-[18px] font-black tracking-[-0.03em]">84%</div>
                        <div className="text-[7px] tracking-[0.1em] uppercase text-mid">Overall</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      {[
                        { l: "Classes attended", v: "78" },
                        { l: "Total classes", v: "93" },
                        { l: "Absences", v: "15", red: true },
                        { l: "Min required", v: "75%" },
                      ].map((r) => (
                        <div key={r.l} className="flex justify-between py-[3px] border-b border-ink/[0.12] last:border-b-0">
                          <span className="text-[9px] text-mid">{r.l}</span>
                          <span className={`text-[10px] font-medium ${r.red ? "text-red" : ""}`}>{r.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { l: "OOP", pct: 90, c: "hsl(var(--teal))" },
                      { l: "Database", pct: 88, c: "hsl(var(--amber))" },
                      { l: "Networks", pct: 72, c: "hsl(var(--red))", redText: true },
                      { l: "OS", pct: 95, c: "hsl(var(--ink))" },
                      { l: "SE", pct: 80, c: "hsl(var(--teal))" },
                    ].map((b) => (
                      <div key={b.l} className="flex items-center gap-2">
                        <div className="text-[9px] text-mid w-20 shrink-0 truncate">{b.l}</div>
                        <div className="flex-1 h-[5px] bg-ink/[0.06]">
                          <div className="h-full" style={{ width: `${b.pct}%`, background: b.c }} />
                        </div>
                        <div className={`text-[9px] w-[30px] text-right ${b.redText ? "text-red" : "text-mid"}`}>{b.pct}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* NOTICES */}
              <div className="border border-ink/[0.12]">
                <WidgetHeader title="Notice" titleEm="Board" action="All notices →" />
                <div>
                  {[
                    { tag: "Exam", tagColor: "bg-red/10 text-red", title: "Midterm Exam Schedule Released — Week 13", date: "Posted 22 Mar · Exam Office" },
                    { tag: "Fee", tagColor: "bg-amber/10 text-[#7a4a10]", title: "Last date for semester fee submission: April 5", date: "Posted 20 Mar · Finance Dept" },
                    { tag: "Event", tagColor: "bg-teal-pale text-teal", title: "HackFest 2026 — Registration open for CS students", date: "Posted 18 Mar · CS Society" },
                    { tag: "Admin", tagColor: "bg-ink/[0.07] text-ink", title: "Course add/drop window closes March 30", date: "Posted 15 Mar · Registrar" },
                    { tag: "Event", tagColor: "bg-teal-pale text-teal", title: "Guest Lecture: AI in Healthcare — Thursday 3PM", date: "Posted 14 Mar · Dept. CS" },
                  ].map((n, i) => (
                    <div key={i} className="px-[1.2rem] py-[0.8rem] border-b border-ink/[0.12] last:border-b-0 hover:bg-ink/[0.02] transition-colors">
                      <div className={`text-[8px] tracking-[0.1em] uppercase px-[7px] py-[2px] inline-block mb-1 ${n.tagColor}`}>{n.tag}</div>
                      <div className="text-[11px] font-medium leading-[1.4]">{n.title}</div>
                      <div className="text-[9px] text-mid mt-[3px]">{n.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

/* ─── Sub-components ─── */

const SidebarSection = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`text-[8px] tracking-[0.2em] uppercase text-paper/25 px-[1.4rem] pt-3 pb-1 ${className}`}>{label}</div>
);

const NavItem = ({ icon, label, active, badge, badgeRed }: { icon: string; label: string; active?: boolean; badge?: string; badgeRed?: boolean }) => (
  <a className={`flex items-center gap-2.5 px-[1.4rem] py-[0.65rem] relative transition-colors hover:bg-white/[0.05] ${active ? "bg-teal/20" : ""}`} href="#">
    {active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-teal" />}
    <div className={`w-7 h-7 rounded-md flex items-center justify-center text-[12px] shrink-0 ${active ? "bg-teal/25" : "bg-white/[0.05]"}`}>{icon}</div>
    <span className={`text-[11px] tracking-[0.02em] ${active ? "text-paper font-medium" : "text-paper/55"}`}>{label}</span>
    {badge && <span className={`ml-auto text-[8px] px-1.5 py-[2px] rounded-full text-paper ${badgeRed ? "bg-red" : "bg-teal"}`}>{badge}</span>}
  </a>
);

const WidgetHeader = ({ title, titleEm, action, actionLabel, emFirst }: { title?: string; titleEm?: string; action?: string; actionLabel?: string; emFirst?: boolean }) => (
  <div className="px-[1.2rem] py-[1rem] border-b border-ink/[0.12] flex items-center justify-between">
    <div className="font-serif text-[16px] font-black tracking-[-0.02em] flex items-baseline gap-1.5">
      {emFirst ? <><em className="italic text-teal">{titleEm}</em>{title}</> : <>{title} <em className="italic text-teal">{titleEm}</em></>}
    </div>
    {action && <span className="text-[9px] text-teal tracking-[0.06em] uppercase">{action}</span>}
    {actionLabel && <span className="text-[9px] text-mid tracking-[0.1em] uppercase">{actionLabel}</span>}
  </div>
);

const StatCard = ({ label, value, valueSuffix, sub, trend, trendType, highlight }: {
  label: string; value: string; valueSuffix?: string; sub: string; trend: string; trendType: string; highlight?: boolean;
}) => (
  <div className={`px-[1.3rem] py-[1.2rem] relative overflow-hidden transition-colors ${highlight ? "bg-teal hover:bg-[#1a6a6c]" : "bg-paper hover:bg-ink/[0.02]"}`}>
    <div className={`text-[8px] tracking-[0.15em] uppercase mb-2 ${highlight ? "text-paper/60" : "text-mid"}`}>{label}</div>
    <div className={`font-serif text-[34px] font-black tracking-[-0.04em] leading-none ${highlight ? "text-paper" : "text-ink"}`}>
      {value}{valueSuffix && <em className={`italic ${highlight ? "text-amber" : "text-teal"}`}>{valueSuffix}</em>}
    </div>
    <div className={`text-[9px] mt-1 tracking-[0.04em] ${highlight ? "text-paper/50" : "text-mid"}`}>{sub}</div>
    <div className={`absolute top-4 right-4 text-[9px] tracking-[0.06em] px-2 py-[3px] ${
      highlight ? "bg-paper/15 text-paper" :
      trendType === "up" ? "bg-[#e4f0e6] text-[#3a7d44]" :
      trendType === "down" ? "bg-red/10 text-red" :
      "bg-amber/10 text-[#8a5c1a]"
    }`}>{trend}</div>
  </div>
);

const TimetableGrid = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const todayIdx = 1; // Tuesday
  const times = ["8–9", "9–10", "10–11", "11–12", "2–3"];

  type Block = { name: string; room: string; color: string } | null;
  const schedule: Block[][] = [
    [{ name: "OOP", room: "CS-201", color: "teal" }, null, { name: "OOP", room: "CS-201", color: "teal" }, null, { name: "OOP Lab", room: "Lab-A", color: "teal" }],
    [null, { name: "Database", room: "CS-104", color: "amber" }, null, { name: "Database", room: "CS-104", color: "amber" }, null],
    [{ name: "Networks", room: "CS-305", color: "red" }, null, { name: "Networks", room: "CS-305", color: "red" }, null, null],
    [null, { name: "OS", room: "CS-302", color: "ink" }, null, { name: "OS", room: "CS-302", color: "ink" }, null],
    [null, null, { name: "DB Lab", room: "Lab-B", color: "amber" }, { name: "Net Lab", room: "Lab-C", color: "red" }, null],
  ];

  const blockStyles: Record<string, { bg: string; border: string; text: string }> = {
    teal: { bg: "bg-teal-pale", border: "border-l-2 border-teal", text: "text-[#0d5254]" },
    amber: { bg: "bg-amber/10", border: "border-l-2 border-amber", text: "text-[#7a4a10]" },
    red: { bg: "bg-red/10", border: "border-l-2 border-red", text: "text-[#8a2020]" },
    ink: { bg: "bg-ink/[0.06]", border: "border-l-2 border-ink", text: "text-ink" },
  };

  return (
    <div className="grid" style={{ gridTemplateColumns: "50px repeat(5, 1fr)" }}>
      <div className="bg-ink/[0.04] border-r border-b border-ink/[0.12]" />
      {days.map((d, i) => (
        <div key={d} className={`px-1 py-2 text-center text-[9px] tracking-[0.1em] uppercase border-r border-b border-ink/[0.12] ${
          i === todayIdx ? "text-teal bg-teal-pale" : "text-mid bg-ink/[0.04]"
        }`}>{d}{i === todayIdx && " ◉"}</div>
      ))}
      {times.map((t, row) => (
        <>
          <div key={`t-${t}`} className="px-1 py-2 text-center text-[8px] text-mid tracking-[0.04em] border-r border-b border-ink/[0.12] bg-ink/[0.04] flex items-center justify-center">{t}</div>
          {schedule[row].map((block, col) => (
            <div key={`${row}-${col}`} className={`border-r border-b border-ink/[0.12] min-h-[44px] p-[3px] ${col === todayIdx ? "bg-teal/[0.03]" : "bg-paper"}`}>
              {block && (
                <div className={`h-full rounded-sm px-1.5 py-1 flex flex-col justify-center hover:opacity-80 transition-opacity ${blockStyles[block.color].bg} ${blockStyles[block.color].border}`}>
                  <div className={`text-[9px] font-medium leading-tight ${blockStyles[block.color].text}`}>{block.name}</div>
                  <div className="text-[8px] opacity-70 mt-px">{block.room}</div>
                </div>
              )}
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default StudentDashboardPreview;
