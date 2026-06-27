import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#0b0f19",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      zIndex: 9999, gap: 0
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 36, fontWeight: 700, color: "#f8fafc", letterSpacing: -1 }}>
          <span style={{ color: "#2dd4bf" }}>Basma</span> Hassan
        </span>
        <span style={{ display: "inline-block", width: 3, height: 38, background: "#2dd4bf",
          marginLeft: 6, borderRadius: 2, animation: "blink 1s step-end infinite" }} />
      </div>
      <p style={{ color: "#2dd4bf", letterSpacing: 3, fontSize: 12,
        textTransform: "uppercase", marginTop: 10 }}>
        Full Stack Developer
      </p>
      <div style={{ width: 180, height: 2, background: "#1e2a3a",
        borderRadius: 2, marginTop: 28, overflow: "hidden" }}>
        <div style={{ height: "100%", background: "#2dd4bf",
          animation: "fillBar 2s ease forwards", borderRadius: 2 }} />
      </div>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fillBar { from{width:0%} to{width:100%} }
      `}</style>
    </div>
  );
}