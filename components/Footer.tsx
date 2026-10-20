"use client";

/**
 * Footer — matches the floating glass navbar and the About page
 * (white / lavender palette, thin borders, black pill buttons).
 *
 * Save as: components/Footer.tsx
 * Use once in app/layout.tsx:  <Footer />  (below {children})
 */
import { useEffect, useState } from "react";
import Link from "next/link";

const BRAND = "GabyTalk";
const LOGO_SRC = "/images/logo.png";
const TAGLINE = "Real People. Meaningful Conversations.";
const DOWNLOAD_HREF = "#"; // TODO App Store / Play Store link (or a /download page)

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Features", href: "/features" }, // TODO real route
      { label: "How It Works", href: "/howitworks" }, // TODO real route
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy-policy" }, // TODO real route
      { label: "Terms", href: "/terms&condition" }, // TODO real route
      { label: "Contact", href: "/contact" }, // TODO real route
    ],
  },
];

// TODO real social links — delete any you do not use
const SOCIALS = [
  { label: "Instagram", href: "#", d: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-1.5v.01" },
  { label: "X", href: "#", d: "M4 4l16 16M20 4 4 20" },
  { label: "LinkedIn", href: "#", d: "M5 9v10M5 5v.01M10 19V9m0 4a4 4 0 0 1 8 0v6" },
];

export default function Footer() {
  // Year is set in the browser after load, so Next.js does not try to prerender a changing date.
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="ft" aria-label="Site footer">
      <style>{CSS}</style>
      <div className="ft-card">
        <svg className="ft-lines" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
          <g fill="none" stroke="#B8B5C5" strokeWidth="0.9" vectorEffect="non-scaling-stroke">
            <path d="M0 120 L260 120 L340 40 L340 0 M1200 120 L940 120 L860 40 L860 0" />
            <path d="M0 680 L240 680 L330 760 M1200 680 L960 680 L870 760" />
            <path d="M80 0 L80 800 M1120 0 L1120 800" opacity=".4" />
            <path d="M240 680 L270 650 L300 680 L270 710 Z M900 120 L930 90 L960 120 L930 150 Z" />
          </g>
        </svg>

        <div className="ft-top">
          <div className="ft-brand">
            <Link href="/" aria-label={`${BRAND} — Home`} className="ft-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_SRC} alt={BRAND} />
            </Link>
            <p>{TAGLINE}</p>
            <a href={DOWNLOAD_HREF} className="ft-btn">Download App</a>
          </div>

          <nav className="ft-cols" aria-label="Footer">
            {COLUMNS.map((c) => (
              <div key={c.title} className="ft-col">
                <h3>{c.title}</h3>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="ft-link">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="ft-col">
              <h3>Follow</h3>
              <ul className="ft-social">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className="ft-ico">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                        <path d={s.d} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="ft-bottom">
          <p>© {year} {BRAND}. All rights reserved.</p>
          <p>Connect at your own pace.</p>
        </div>
      </div>
    </footer>
  );
}

const CSS = `
.ft{--ink:#171717;--mute:#6B6872;--line:rgba(25,20,40,.10);--lilac:#DDD6F3;--lav:#F0EDF9;--ease:cubic-bezier(.22,.7,.2,1);
  margin-top:auto;padding:0 0 16px;background:#ECE8F6;color:var(--ink);font-family:var(--font-sans,Manrope,Inter,system-ui,sans-serif)}
.ft *{box-sizing:border-box}
.ft h3,.ft p,.ft ul{margin:0;padding:0}
.ft ul{list-style:none}
.ft a:focus-visible{outline:2px solid #6B5FD3;outline-offset:3px;border-radius:999px}
.ft-card{position:relative;overflow:hidden;width:min(1320px,calc(100% - 32px));margin-inline:auto;border:1px solid var(--line);border-radius:36px;
  padding:clamp(36px,5vw,64px) clamp(24px,4vw,56px) 22px;
  background:linear-gradient(135deg,#DDD6F3 0%,#F0EDF9 50%,#FAF8F5 100%);box-shadow:0 10px 34px rgba(60,50,120,.08)}
.ft-lines{position:absolute;inset:0;width:100%;height:100%;opacity:.35;pointer-events:none}
.ft-top,.ft-bottom{position:relative;z-index:1}
.ft-top{display:grid;grid-template-columns:1.1fr 1.4fr;gap:clamp(32px,6vw,96px);align-items:start}
.ft-logo{display:inline-block;text-decoration:none}
.ft-logo img{display:block;height:84px;width:auto}
.ft-brand p{margin-top:14px;max-width:320px;color:var(--mute);line-height:1.65;font-size:16px}
.ft-btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;margin-top:24px;padding:0 26px;border-radius:999px;background:var(--ink);color:#fff;
  font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--ink);transition:transform .3s var(--ease),background .3s}
.ft-btn:hover{transform:translateY(-2px);background:#33303a}
.ft-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.ft-col h3{font-size:14px;font-weight:600;color:var(--mute);margin-bottom:16px}
.ft-col li+li{margin-top:6px}
.ft-link{display:inline-block;padding:6px 0;font-size:16px;font-weight:500;color:var(--ink);text-decoration:none;
  background:linear-gradient(currentColor,currentColor) 0 100%/0 1px no-repeat;transition:background-size .4s var(--ease)}
.ft-link:hover,.ft-link:focus-visible{background-size:100% 1px}
.ft-social{display:flex;gap:10px}
.ft-social li+li{margin-top:0}
.ft-ico{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:rgba(255,255,255,.75);color:var(--ink);
  transition:transform .3s var(--ease),background .3s}
.ft-ico:hover{transform:translateY(-2px);background:#fff}
.ft-bottom{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:clamp(32px,5vw,56px);padding-top:20px;border-top:1px solid var(--line);font-size:14px;color:var(--mute)}
@media (max-width:900px){
  .ft-top{grid-template-columns:1fr}
}
@media (max-width:600px){
  .ft-card{border-radius:28px}
  .ft-cols{grid-template-columns:1fr 1fr}
  .ft-logo img{height:72px}
  .ft-btn{width:100%;max-width:320px}
}
@media (prefers-reduced-motion:reduce){.ft *{transition:none!important}}
`;