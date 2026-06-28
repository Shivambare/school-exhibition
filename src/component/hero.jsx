import { useEffect, useState } from "react";

const GLOBAL_CSS = `
  :root {
    --font-main: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes scrollUp1 {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes scrollUp2 {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes scrollUp3 {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }

  .track-1 { animation: scrollUp1 16s linear infinite; }
  .track-2 { animation: scrollUp2 20s linear infinite; }
  .track-3 { animation: scrollUp3 13s linear infinite; }

  .slider-col:hover .track-1,
  .slider-col:hover .track-2,
  .slider-col:hover .track-3 {
    animation-play-state: paused;
  }

  .fin-input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.07);
    color: #ffffff;
    font-size: 14px;
    font-family: var(--font-main);
    outline: none;
    transition: border 0.2s, background 0.2s;
    box-sizing: border-box;
  }
  .fin-input:focus {
    border-color: #f5d6a0;
    background: rgba(255,255,255,0.12);
  }
  .fin-input::placeholder { color: rgba(255,255,255,0.45); }

  .submit-btn:hover { filter: brightness(1.15); }
`;

const ALL_IMAGES = [
  "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=400",
];

const COL1 = [ALL_IMAGES[0], ALL_IMAGES[1], ALL_IMAGES[2], ALL_IMAGES[3]];
const COL2 = [ALL_IMAGES[1], ALL_IMAGES[4], ALL_IMAGES[3], ALL_IMAGES[5]];
const COL3 = [ALL_IMAGES[2], ALL_IMAGES[5], ALL_IMAGES[0], ALL_IMAGES[4]];

function makeRepeated(arr, times = 6) {
  let out = [];
  for (let i = 0; i < times; i++) out = out.concat(arr);
  return out;
}

const PILL_W = 128;
const PILL_H = 208;
const PILL_GAP = 18;

function PillCard({ imgUrl }) {
  return (
    <div
      style={{
        width: `${PILL_W}px`,
        height: `${PILL_H}px`,
        borderRadius: "999px",
        overflow: "hidden",
        flexShrink: 0,
        border: "2.5px solid rgba(255,255,255,0.18)",
        background: "transparent",
      }}
    >
      <img
        src={imgUrl}
        alt=""
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

function SliderColumn({ images, trackClass }) {
  const items = makeRepeated(images, 6);
  return (
    <div
      className="slider-col"
      style={{
        width: `${PILL_W}px`,
        flexShrink: 0,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <div
        className={trackClass}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: `${PILL_GAP}px`,
          alignItems: "center",
          willChange: "transform",
        }}
      >
        {items.map((url, i) => (
          <PillCard key={i} imgUrl={url} />
        ))}
      </div>
    </div>
  );
}

function InfoPill() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "#f5d6a0",
        borderRadius: "60px",
        padding: "22px 40px",
        gap: "24px",
        marginTop: "32px",
        width: "fit-content",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: "#2d1b5e", fontSize: "20px", fontWeight: "700", fontFamily: "var(--font-main)", lineHeight: 1.25 }}>Apparel House,</span>
        <span style={{ color: "#2d1b5e", fontSize: "16px", fontWeight: "700", opacity: 0.72, marginTop: "3px", fontFamily: "var(--font-main)", lineHeight: 1.25 }}>Sec 44, Gurugram</span>
      </div>
      <div style={{ width: "1.5px", height: "44px", background: "rgba(45,27,94,0.25)", flexShrink: 0 }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: "#2d1b5e", fontSize: "20px", fontWeight: "700", fontFamily: "var(--font-main)", lineHeight: 1.25 }}>2-3 August 2025</span>
        <span style={{ color: "#2d1b5e", fontSize: "16px", fontWeight: "700", opacity: 0.72, marginTop: "3px", fontFamily: "var(--font-main)", lineHeight: 1.25 }}>Sat-Sun | 10AM - 6PM</span>
      </div>
    </div>
  );
}

function EnquiryForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", grade: "" });
  return (
    <section style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "32px", backdropFilter: "blur(20px)", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", width: "100%" }}>
      <h2 style={{ color: "#fff", fontSize: "24px", fontWeight: "700", fontFamily: "var(--font-main)", marginBottom: "20px" }}>Enquire Now</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "14px" }} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Parent's Name" className="fin-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="tel" placeholder="Phone number" className="fin-input" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <textarea placeholder="Which grade are you looking for?" className="fin-input" rows={3} style={{ resize: "none", height: "90px" }} value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })} />
        <button type="submit" className="submit-btn" style={{ display: "flex", alignItems: "stretch", height: "46px", width: "160px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.25)", overflow: "hidden", background: "transparent", cursor: "pointer", marginTop: "10px" }}>
          <span style={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", width: "44px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2b1254" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
          <span style={{ background: "rgba(255,255,255,0.08)", color: "#fff", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "700" }}>SUBMIT</span>
        </button>
      </form>
    </section>
  );
}

export default function HeroSection() {
  const [viewMode, setViewMode] = useState("desktop");
  useEffect(() => {
    const handle = () => {
      const w = window.innerWidth;
      setViewMode(w < 768 ? "mobile" : w < 1240 ? "tablet" : "desktop");
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const isMobile = viewMode === "mobile";
  const isTablet = viewMode === "tablet";
  const colHeight = isMobile ? 320 : 580;

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <main style={{ minHeight: "100vh", background: "linear-gradient(120deg, #120630 0%, #1d0a3a 30%, #2e1260 65%, #4a1e8a 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "60px 16px" : "60px 60px", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile || isTablet ? "1fr" : "1.15fr 1fr 0.95fr", gap: "40px", alignItems: "center", width: "100%", maxWidth: "1380px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", textAlign: isMobile || isTablet ? "center" : "left", alignItems: isMobile || isTablet ? "center" : "flex-start", marginTop: isMobile ? "70px" : "0" }}>
            <span style={{ color: "#f5d6a0", fontSize: isMobile ? "24px" : "38px", fontWeight: "600", fontFamily: "var(--font-main)" }}>Discover Gurugram's</span>
            <h1 style={{ color: "#f5d6a0", fontSize: isMobile ? "36px" : "50px", fontWeight: "600", fontFamily: "var(--font-main)", margin: "8px 0" }}>Top 30+ Schools</h1>
            <p style={{ color: "#f5d6a0", fontSize: isMobile ? "14px" : "22px", fontWeight: "600", letterSpacing: "0.14em", fontFamily: "var(--font-main)" }}>ALL IN ONE PLACE</p>
            <InfoPill />
          </div>

          <div style={{ display: "flex", gap: "16px", height: `${colHeight}px`, justifyContent: "center", overflow: "hidden" }}>
            <SliderColumn images={COL1} trackClass="track-1" />
            <SliderColumn images={COL2} trackClass="track-2" />
            {!isMobile && <SliderColumn images={COL3} trackClass="track-3" />}
          </div>

          <div style={{ display: "flex", justifyContent: isMobile || isTablet ? "center" : "flex-end" }}>
            <div style={{ width: "100%", maxWidth: "400px" }}><EnquiryForm /></div>
          </div>
        </div>
      </main>
    </>
  );
}