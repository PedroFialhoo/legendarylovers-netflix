import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState("logo");
  const navigate = useNavigate();
  const { cliente } = useParams();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("flash"), 1800);
    const t2 = setTimeout(() => setPhase("fade"), 2150);

    const t3 = setTimeout(() => {
      navigate(`/${cliente}/login`);
    }, 2650);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [cliente, navigate]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("flash"), 1800);
    const t2 = setTimeout(() => setPhase("fade"), 2150);
    const t3 = setTimeout(() => {
      onComplete && onComplete();
    }, 2650);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-black overflow-hidden ${
        phase === "fade" ? "animate-[intro-fade-out_0.5s_ease-in_forwards]" : ""
      }`}
    >
      <style>{`
        @keyframes intro-glow-pulse {
          0% { opacity: 0; }
          40% { opacity: 1; }
          100% { opacity: 0.55; }
        }
        @keyframes intro-logo-in {
          0% { transform: scale(0.3); filter: blur(16px); opacity: 0; }
          55% { transform: scale(1.18); filter: blur(0px); opacity: 1; }
          100% { transform: scale(1); filter: blur(0px); opacity: 1; }
        }
        @keyframes intro-flash {
          0% { text-shadow: 0 0 0 rgba(255,255,255,0); }
          50% { text-shadow: 0 0 60px rgba(255,255,255,0.95), 0 0 120px rgba(255,61,94,0.6); }
          100% { text-shadow: 0 0 0 rgba(255,255,255,0); }
        }
        @keyframes intro-fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,61,94,0.35),transparent_70%)] animate-[intro-glow-pulse_1.8s_ease-in-out_both]"
      />

      <span
        className={`relative font-['Outfit',sans-serif] font-extrabold tracking-[-0.03em] uppercase text-[#ff3d5e] text-[clamp(2.2rem,9vw,5.5rem)] select-none ${
          phase === "logo"
            ? "animate-[intro-logo-in_1.6s_cubic-bezier(0.16,1,0.3,1)_both]"
            : ""
        } ${phase === "flash" ? "animate-[intro-flash_0.35s_ease-out_forwards]" : ""}`}
      >
        Legendary Lovers
      </span>
    </div>
  );
}
