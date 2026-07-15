import React from "react";
import logo from "../../assets/logo-png.png";

const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 font-['Outfit',sans-serif] font-semibold whitespace-nowrap rounded-full border border-transparent transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-px active:scale-[0.98]";

const BUTTON_VARIANTS = {
  primary:
    "text-[#1a0028] bg-[linear-gradient(120deg,#ff4d8d,#ff3d5e_60%,#9b4dff)] shadow-[0_0_60px_rgba(255,77,141,0.25),0_20px_50px_rgba(6,0,15,0.45)] hover:-translate-y-0.5 hover:shadow-[0_0_80px_rgba(255,77,141,0.4),0_20px_50px_rgba(6,0,15,0.45)]",
  ghost:
    "text-[#f6eefc] bg-white/[0.045] border-white/[0.09] backdrop-blur-md hover:bg-white/[0.07] hover:border-white/[0.18] hover:-translate-y-0.5",
  outline:
    "text-[#f6eefc] bg-transparent border-white/[0.09] hover:border-[#ff4d8d] hover:text-[#ff4d8d] hover:-translate-y-0.5",
};

const BUTTON_SIZES = {
  default: "px-[1.7rem] py-[0.85rem] text-[0.95rem]",
  small: "px-5 py-[0.6rem] text-[0.85rem]",
  large: "px-9 py-[1.1rem] text-[1.05rem]",
};

function Button({ href, variant = "primary", size = "default", className = "", children, ...rest }) {
  return (
    <a
      href={href}
      className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

// ---------------------------------------------------------------------------
// Card genérico (glassmorphism)
// ---------------------------------------------------------------------------
function Card({ className = "", children }) {
  return (
    <article
      className={`relative bg-white/[0.045] border border-white/[0.09] rounded-[32px] backdrop-blur-xl transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-white/[0.16] hover:bg-white/[0.07] hover:shadow-[0_20px_50px_rgba(6,0,15,0.45),0_0_60px_rgba(155,77,255,0.22)] ${className}`}
    >
      {children}
    </article>
  );
}

// ---------------------------------------------------------------------------
// Ícones (SVGs originais do HTML)
// ---------------------------------------------------------------------------
function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path
        d="M12 21s-7.5-4.6-10-9.2C.4 8.1 2 4.4 5.6 3.6 8 3 10 4 12 6.3 14 4 16 3 18.4 3.6c3.6.8 5.2 4.5 3.6 8.2C19.5 16.4 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLayout() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="14" r="1.4" fill="currentColor" />
      <circle cx="13" cy="14" r="1.4" fill="currentColor" />
      <circle cx="18" cy="14" r="1.4" fill="currentColor" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M9 12a3 3 0 1 0 0 0Z" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 12a3 3 0 1 1 0-.01M15 6a3 3 0 1 0 0 5.99M15 18a3 3 0 1 0 0-6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M11.5 10.5 12.8 9M11.5 13.5l1.3 1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconSoon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[54px] h-[54px]">
      <path
        d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.46" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 3c.7 2.2 2.1 3.7 4.5 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Componente principal
// ---------------------------------------------------------------------------
export default function LegendaryLovers() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-[#f6eefc] leading-normal antialiased"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background:
          "radial-gradient(ellipse 120% 60% at 50% -10%, #47126b 0%, transparent 60%), linear-gradient(180deg, #12001f 0%, #2a0b45 45%, #12001f 100%)",
      }}
    >
      {/* Keyframes customizadas usadas pelas classes animate-[...] abaixo */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(3vw, 4vh) scale(1.08); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bar-bounce {
          0%, 100% { transform: scaleY(0.5); }
          50%      { transform: scaleY(1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orb-pulse {
          0%, 100% { opacity: 0.55; transform: translateY(-50%) scale(1); }
          50%      { opacity: 0.9;  transform: translateY(-50%) scale(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      {/* ============================================================
          BACKGROUND — brilhos desfocados fixos atrás de todo o conteúdo
      ============================================================= */}
      <div
        aria-hidden="true"
        className="fixed rounded-full blur-[110px] opacity-55 z-0 pointer-events-none top-[-10vw] left-[-8vw] w-[42vw] h-[42vw] bg-[#ff4d8d] animate-[float-slow_18s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="fixed rounded-full blur-[110px] opacity-55 z-0 pointer-events-none top-[30vh] right-[-12vw] w-[38vw] h-[38vw] bg-[#9b4dff] animate-[float-slow_22s_ease-in-out_infinite_reverse]"
      />
      <div
        aria-hidden="true"
        className="fixed rounded-full blur-[110px] z-0 pointer-events-none bottom-[-12vw] left-[20vw] w-[34vw] h-[34vw] bg-[#ff3d5e] opacity-[0.28] animate-[float-slow_26s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ============================================================
          HEADER / NAVEGAÇÃO
      ============================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(18,0,31,0.55)] border-b border-white/[0.09]">
        <div className="relative z-10 max-w-[1180px] mx-auto px-7 flex items-center justify-between gap-7 py-[1.1rem]">
          <a
            href="#"
            aria-label="Legendary Lovers — início"
            className="inline-flex items-center gap-2.5 font-['Outfit',sans-serif] font-semibold text-[1.05rem] tracking-[-0.01em] transition-opacity duration-200 hover:opacity-85"
          >
            <span className="inline-flex w-7 h-7">
              <img src={logo} alt="Legendary Lovers" className="w-7 h-7 object-contain" />
            </span>
            <span>Legendary Lovers</span>
          </a>

          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-12">
            {[
              ["#como-funciona", "Como funciona"],
              ["#modelos", "Modelos"],
              ["#personalizado", "Sob medida"],
              ["#beneficios", "Benefícios"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="group relative text-[0.92rem] text-[#c9b8dd] transition-colors duration-200 hover:text-[#f6eefc]"
              >
                {label}
                <span className="absolute left-0 -bottom-1.5 h-[1.5px] w-0 bg-[linear-gradient(90deg,#ff4d8d,#9b4dff)] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <Button href="#cta" variant="primary" size="small" className="hidden lg:inline-flex">
            Solicitar orçamento
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* ============================================================
            HERO
        ============================================================= */}
        <section className="text-center pt-[clamp(4rem,12vw,7rem)] pb-20">
          <div className="relative z-10 max-w-[780px] mx-auto px-7 flex flex-col items-center">
            <p
              className="inline-flex items-center gap-2 font-['Outfit',sans-serif] text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#c084fc] opacity-0 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_both] [animation-delay:0.05s]"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-[linear-gradient(135deg,#ff4d8d,#9b4dff)] shadow-[0_0_12px_#ff4d8d]" />
              Páginas exclusivas para casais
            </p>

            <h1
              className="font-['Outfit',sans-serif] font-bold tracking-[-0.02em] text-[clamp(2.3rem,6vw,4rem)] leading-[1.12] mt-7 opacity-0 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_both] [animation-delay:0.15s]"
            >
              Sua história merece um lugar para viver{" "}
              <span className="bg-[linear-gradient(100deg,#ff4d8d_10%,#ff3d5e_45%,#9b4dff_90%)] bg-clip-text text-transparent">
                para sempre
              </span>
              .
            </h1>

            <p
              className="mt-4 max-w-[560px] text-[clamp(1rem,1.6vw,1.15rem)] text-[#c9b8dd] opacity-0 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_both] [animation-delay:0.25s]"
            >
              Criamos páginas totalmente personalizadas para casais transformarem memórias em experiências únicas.
            </p>

            <div
              className="flex flex-wrap justify-center gap-4 mt-12 opacity-0 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_both] [animation-delay:0.35s]"
            >
              <Button href="#modelos" variant="primary">
                Ver modelos
              </Button>
              <Button href="#cta" variant="ghost">
                Solicitar orçamento
              </Button>
            </div>
          </div>
        </section>

        {/* ============================================================
            COMO FUNCIONA
        ============================================================= */}
        <section id="como-funciona" className="relative py-16">
          <div className="max-w-[1180px] mx-auto px-7">
            <div className="text-center max-w-[640px] mx-auto mb-20">
              <p className="inline-flex justify-center w-full items-center gap-2 font-['Outfit',sans-serif] text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#c084fc]">
                Como funciona
              </p>
              <h2 className="font-['Outfit',sans-serif] font-bold tracking-[-0.02em] text-[clamp(1.8rem,3.2vw,2.6rem)] mt-2">
                Do seu jeito, em três passos simples
              </h2>
            </div>

            <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <IconHeart />, title: "Personalizamos", text: "Cada página é criada exclusivamente para o casal." },
                { icon: <IconLayout />, title: "Escolha o estilo", text: "Spotify, Netflix ou qualquer outra ideia." },
                { icon: <IconShare />, title: "Compartilhe", text: "Receba um link exclusivo para guardar para sempre." },
              ].map((item) => (
                <Card key={item.title} className="px-7 py-12">
                  <div className="inline-flex items-center justify-center w-[52px] h-[52px] mb-7 rounded-[14px] text-[#ff4d8d] bg-[linear-gradient(135deg,rgba(255,77,141,0.16),rgba(155,77,255,0.16))] border border-white/[0.08]">
                    {item.icon}
                  </div>
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[1.15rem] mb-1.5">{item.title}</h3>
                  <p className="text-[0.95rem] text-[#c9b8dd]">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            MODELOS DISPONÍVEIS
        ============================================================= */}
        <section id="modelos" className="relative py-16">
          <div className="max-w-[1180px] mx-auto px-7">
            <div className="text-center max-w-[640px] mx-auto mb-20">
              <p className="inline-flex justify-center w-full items-center gap-2 font-['Outfit',sans-serif] text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#c084fc]">
                Modelos disponíveis
              </p>
              <h2 className="font-['Outfit',sans-serif] font-bold tracking-[-0.02em] text-[clamp(1.8rem,3.2vw,2.6rem)] mt-2">
                Escolha uma inspiração para começar
              </h2>
            </div>

            <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {/* Modelo: Spotify */}
              <article className="flex flex-col overflow-hidden bg-white/[0.045] border border-white/[0.09] rounded-[32px] backdrop-blur-xl transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-white/[0.16] hover:shadow-[0_20px_50px_rgba(6,0,15,0.45),0_0_60px_rgba(255,77,141,0.25)]">
                <div className="h-[200px] flex items-center justify-center p-7 relative bg-[linear-gradient(160deg,#1a2e22_0%,#10231a_100%)]">
                  <div className="w-full max-w-[240px] flex flex-col items-center gap-4">
                    <div className="w-[88px] h-[88px] rounded-[14px] bg-[linear-gradient(135deg,#ff4d8d,#9b4dff)] shadow-[0_10px_30px_rgba(0,0,0,0.4)]" />
                    <div className="w-full flex flex-col items-center gap-1.5">
                      <span className="block h-2 w-[60%] rounded-full bg-white/[0.18]" />
                      <span className="block h-2 w-[40%] rounded-full bg-white/10" />
                    </div>
                    <div className="flex items-end gap-1 h-[26px]">
                      {[
                        ["40%", "0s"],
                        ["80%", "0.2s"],
                        ["55%", "0.4s"],
                        ["95%", "0.1s"],
                        ["65%", "0.3s"],
                      ].map(([h, delay], i) => (
                        <span
                          key={i}
                          className="w-1 rounded-sm bg-[#4ade80] animate-[bar-bounce_1.6s_ease-in-out_infinite]"
                          style={{ height: h, animationDelay: delay }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2.5 p-7">
                  <span className="font-['Outfit',sans-serif] text-[0.7rem] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full text-[#4ade80] bg-[rgba(74,222,128,0.12)]">
                    Inspirado no Spotify
                  </span>
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[1.3rem]">Spotify</h3>
                  <p className="text-[0.92rem] text-[#c9b8dd] mb-1.5">
                    Uma experiência inspirada no Spotify com músicas, fotos, lembranças e player personalizado.
                  </p>
                  <Button
                    href="https://legendarylovers-spotify.pages.dev/template/"
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver demonstração
                  </Button>
                </div>
              </article>

              {/* Modelo: Netflix */}
              <article className="flex flex-col overflow-hidden bg-white/[0.045] border border-white/[0.09] rounded-[32px] backdrop-blur-xl transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-white/[0.16] hover:shadow-[0_20px_50px_rgba(6,0,15,0.45),0_0_60px_rgba(255,77,141,0.25)]">
                <div className="h-[200px] flex items-center justify-center p-7 relative bg-[linear-gradient(160deg,#2b0d10_0%,#17070a_100%)]">
                  <div className="w-full max-w-[260px] flex flex-col gap-4">
                    <span className="self-start font-['Outfit',sans-serif] text-[0.65rem] font-bold tracking-[0.12em] text-[#f87171]">
                      LEGENDARY
                    </span>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <span
                          key={i}
                          className="flex-1 h-[46px] rounded-lg bg-[linear-gradient(160deg,rgba(248,113,113,0.35),rgba(255,255,255,0.06))]"
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <span
                          key={i}
                          className="flex-1 h-[46px] rounded-lg bg-[linear-gradient(160deg,rgba(248,113,113,0.35),rgba(255,255,255,0.06))]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2.5 p-7">
                  <span className="font-['Outfit',sans-serif] text-[0.7rem] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full text-[#f87171] bg-[rgba(248,113,113,0.12)]">
                    Inspirado no Netflix
                  </span>
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[1.3rem]">Netflix</h3>
                  <p className="text-[0.92rem] text-[#c9b8dd] mb-1.5">
                    Transforme sua história em uma plataforma inspirada na Netflix.
                  </p>
                  <Button 
                    href="https://legendarylovers-netflix.pages.dev/template/"
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver demonstração
                  </Button>
                </div>
              </article>

              {/* Card: em breve */}
              <article className="flex flex-col overflow-hidden bg-white/[0.045] border border-white/[0.09] rounded-[32px] backdrop-blur-xl transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-white/[0.16] hover:shadow-[0_20px_50px_rgba(6,0,15,0.45),0_0_60px_rgba(255,77,141,0.25)]">
                <div className="h-[200px] flex items-center justify-center p-7 relative bg-[linear-gradient(160deg,rgba(155,77,255,0.18),rgba(255,77,141,0.1))]">
                  <span className="inline-flex text-[#c084fc] animate-[spin-slow_6s_linear_infinite]">
                    <IconSoon />
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2.5 p-7">
                  <span className="font-['Outfit',sans-serif] text-[0.7rem] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full text-[#c084fc] bg-[rgba(155,77,255,0.14)]">
                    Em breve
                  </span>
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[1.3rem]">Novos modelos estão chegando</h3>
                  <p className="text-[0.92rem] text-[#c9b8dd] mb-1.5">
                    Estamos criando novas inspirações para você surpreender ainda mais.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================
            CRIAMOS DO SEU JEITO
        ============================================================= */}
        <section id="personalizado" className="relative py-16">
          <div className="max-w-[1180px] mx-auto px-7 grid grid-cols-1 md:grid-cols-2 items-center gap-20 text-center md:text-left">
            <div className="order-1">
              <p className="inline-flex items-center gap-2 font-['Outfit',sans-serif] text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#c084fc]">
                Sob medida
              </p>
              <h2 className="font-['Outfit',sans-serif] font-bold tracking-[-0.02em] text-[clamp(1.8rem,3.2vw,2.5rem)] mt-2 mb-4">
                Criamos do seu jeito
              </h2>
              <p className="text-[#c9b8dd] text-[1.05rem] mb-7 max-w-[460px] mx-auto md:mx-0">
                Tem uma ideia diferente? Nós desenvolvemos uma página totalmente personalizada baseada no que você
                imaginar.
              </p>
              <Button href="#cta" variant="primary">
                Contar minha ideia
              </Button>
            </div>

            <div className="order-2" aria-hidden="true">
              <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[340px] mx-auto">
                <rect
                  x="34"
                  y="24"
                  width="252"
                  height="272"
                  rx="24"
                  fill="rgba(255,255,255,0.045)"
                  stroke="rgba(255,255,255,0.09)"
                  strokeWidth="2"
                />
                <rect x="60" y="58" width="120" height="14" rx="7" fill="#c084fc" opacity="0.9" />
                <rect x="60" y="86" width="200" height="10" rx="5" fill="rgba(255,255,255,0.14)" />
                <rect x="60" y="104" width="160" height="10" rx="5" fill="rgba(255,255,255,0.14)" />
                <circle
                  cx="90"
                  cy="170"
                  r="30"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="3"
                  strokeDasharray="6 8"
                  className="origin-[90px_170px] animate-[spin-slow_14s_linear_infinite]"
                />
                <rect x="140" y="150" width="120" height="10" rx="5" fill="rgba(255,255,255,0.14)" />
                <rect x="140" y="170" width="90" height="10" rx="5" fill="rgba(255,255,255,0.14)" />
                <rect
                  x="60"
                  y="222"
                  width="200"
                  height="46"
                  rx="14"
                  fill="rgba(255,77,141,0.14)"
                  stroke="#ff4d8d"
                  strokeWidth="1.5"
                />
                <path
                  d="M118 236c6-8 14-8 20 0 6-8 14-8 20 0"
                  fill="none"
                  stroke="#ff4d8d"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ============================================================
            POR QUE ESCOLHER A LEGENDARY LOVERS
        ============================================================= */}
        <section id="beneficios" className="relative py-16">
          <div className="max-w-[1180px] mx-auto px-7">
            <div className="text-center max-w-[640px] mx-auto mb-20">
              <p className="inline-flex justify-center w-full items-center gap-2 font-['Outfit',sans-serif] text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#c084fc]">
                Por que escolher
              </p>
              <h2 className="font-['Outfit',sans-serif] font-bold tracking-[-0.02em] text-[clamp(1.8rem,3.2vw,2.6rem)] mt-2">
                Por que escolher a Legendary Lovers?
              </h2>
            </div>

            <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["❤️", "Totalmente personalizado"],
                ["📷", "Fotos ilimitadas"],
                ["🔗", "Link exclusivo para compartilhar"],
                ["🎁", "Um presente que dura pra sempre"],
              ].map(([emoji, title]) => (
                <Card key={title} className="px-4 py-12 text-center">
                  <span className="block text-[2rem] mb-4">{emoji}</span>
                  <h3 className="text-[1rem] font-semibold text-[#f6eefc]">{title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA FINAL
        ============================================================= */}
        <section id="cta" className="relative py-16 text-center">
          <div className="max-w-[720px] mx-auto px-7">
            <div className="px-7 py-[8rem] bg-[linear-gradient(135deg,rgba(255,77,141,0.1),rgba(155,77,255,0.12))] border border-white/[0.09] rounded-[32px] backdrop-blur-xl shadow-[0_20px_50px_rgba(6,0,15,0.45)]">
              <h2 className="font-['Outfit',sans-serif] font-bold tracking-[-0.02em] text-[clamp(1.8rem,3.6vw,2.6rem)] mb-12">
                Pronto para transformar sua história em algo inesquecível?
              </h2>
              <Button
                href="https://www.instagram.com/legendarylovers.ofc/"
                variant="primary"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero minha página
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================
          FOOTER
      ============================================================= */}
      <footer className="relative z-10 border-t border-white/[0.09] pt-20 pb-12">
        <div className="max-w-[1180px] mx-auto px-7 flex flex-col items-center text-center gap-4">
          <a
            href="#"
            aria-label="Legendary Lovers — início"
            className="inline-flex items-center gap-2.5 font-['Outfit',sans-serif] font-semibold text-[1.05rem] tracking-[-0.01em]"
          >
            <span className="inline-flex w-7 h-7">
              <img src={logo} alt="Legendary Lovers" className="w-7 h-7 object-contain" />
            </span>
            <span>Legendary Lovers</span>
          </a>

          <p className="text-[#9d87b8] text-[0.9rem] max-w-[360px]">
            Páginas que transformam memórias em experiências para sempre.
          </p>

          <a
            href="https://www.instagram.com/legendarylovers.ofc/"
            aria-label="Instagram da Legendary Lovers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full border border-white/[0.09] bg-white/[0.045] text-[0.88rem] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff4d8d] hover:text-[#ff4d8d]"
          >
            <IconInstagram />
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@legendarylovers.ofc"
            aria-label="TikTok da Legendary Lovers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.09] bg-white/[0.045] text-[0.88rem] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff4d8d] hover:text-[#ff4d8d]"
          >
            <IconTikTok />
            TikTok
          </a>
        </div>

        <p className="mt-12 text-center text-[0.78rem] text-[#9d87b8]">
          © 2026 Legendary Lovers. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
