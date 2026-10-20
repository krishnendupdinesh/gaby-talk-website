"use client";

/**
 * Navbar — transparent, fixed at the top.
 *  - Left: GabyTalk logo (click = go to Home)
 *  - Middle: About · Features · How It Works · Privacy
 *  - Right: Download App button
 *  - Hides when you scroll DOWN, shows again when you scroll UP.
 *
 * It renders through a portal into <body>, so no page wrapper
 * (overflow, transform, z-index) can ever hide it.
 *
 * Save as: components/Navbar.tsx
 * Logo file: public/images/logo.png
 * Use it once in app/layout.tsx:  <Navbar />  (above {children})
 */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND = "GabyTalk";
const LOGO_SRC = "/images/logo.png";
const HOME_HREF = "/";
const DOWNLOAD_HREF = "#"; // TODO App Store / Play Store link (or a /download page)

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" }, // TODO real route
  { label: "How It Works", href: "/howitworks" }, // TODO real route
  { label: "Privacy", href: "/privacy-policy" }, // TODO real route
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false); // true while scrolling down
  const [scrolled, setScrolled] = useState(false); // true once away from the top
  const [menu, setMenu] = useState(false); // mobile menu

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (y <= 90) { setHidden(false); last = y; return; }
      if (y < last) { setHidden(false); last = y; }          // any move up = show
      else if (y > last + 6) { setHidden(true); last = y; }  // move down = hide
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    const show = () => setHidden(false);
    const onWheel = (e: WheelEvent) => { if (e.deltaY < 0) show(); };            // mouse wheel / trackpad up
    const onKey = (e: KeyboardEvent) => { if (["ArrowUp", "PageUp", "Home"].includes(e.key)) show(); };
    const onMove = (e: MouseEvent) => { if (e.clientY < 80) show(); };           // cursor near the top edge
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // close the mobile menu when the page changes
  useEffect(() => setMenu(false), [pathname]);

  if (!mounted) return null;

  const isHidden = hidden && !menu;

  return createPortal(
    <header className={`nb${isHidden ? " nb-hidden" : ""}${scrolled ? " nb-scrolled" : ""}`}>
      <style>{CSS}</style>
      <nav className="nb-bar" aria-label="Main">
        {/* LEFT — logo, goes to Home */}
        <Link href={HOME_HREF} className="nb-logo" aria-label={`${BRAND} — Home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_SRC} alt={BRAND} className="nb-logo-img" />
        </Link>

        {/* MIDDLE — links */}
        <ul className="nb-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`nb-link${pathname === l.href ? " active" : ""}`} aria-current={pathname === l.href ? "page" : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT — download button */}
        <div className="nb-right">
          <a href={DOWNLOAD_HREF} className="nb-btn">Download App</a>
          <button type="button" className="nb-burger" aria-label="Menu" aria-expanded={menu} aria-controls="nb-mobile" onClick={() => setMenu((m) => !m)}>
            <span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="nb-mobile" className={`nb-mobile${menu ? " open" : ""}`}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="nb-mlink">{l.label}</Link>
        ))}
      </div>
    </header>,
    document.body
  );
}

const CSS = `
.nb{position:fixed;top:0;left:0;right:0;z-index:1000;transition:transform .45s cubic-bezier(.22,.7,.2,1),background .3s,backdrop-filter .3s,border-color .3s;
  background:transparent;border-bottom:1px solid transparent;font-family:var(--font-sans,Manrope,Inter,system-ui,sans-serif);color:#171717}
.nb.nb-hidden{transform:translateY(-110%)}
.nb.nb-scrolled{background:rgba(250,248,245,.72);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border-bottom-color:rgba(25,20,40,.08)}
.nb *{box-sizing:border-box}
.nb-bar{width:min(1320px,100% - 32px);margin-inline:auto;height:84px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:16px}
.nb-logo{display:inline-flex;align-items:center;justify-self:start;text-decoration:none;color:inherit}
.nb-logo-img{height:72px;width:auto;display:block}
.nb-links{display:flex;gap:6px;list-style:none;margin:0;padding:0}
.nb-link{display:inline-block;padding:9px 16px;border-radius:999px;font-size:15px;font-weight:500;color:#171717;text-decoration:none;transition:background .3s}
.nb-link:hover,.nb-link.active{background:rgba(255,255,255,.7)}
.nb-right{display:flex;align-items:center;gap:10px;justify-self:end}
.nb-btn{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 22px;border-radius:999px;background:#171717;color:#fff;font-size:14px;font-weight:600;text-decoration:none;border:1px solid #171717;transition:transform .3s,background .3s;white-space:nowrap}
.nb-btn:hover{transform:translateY(-2px);background:#33303a}
.nb a:focus-visible,.nb button:focus-visible{outline:2px solid #6B5FD3;outline-offset:3px;border-radius:999px}
.nb-burger{display:none;width:42px;height:42px;border-radius:50%;border:1px solid rgba(25,20,40,.15);background:rgba(255,255,255,.7);cursor:pointer;position:relative}
.nb-burger span{position:absolute;left:12px;right:12px;height:1.5px;background:#171717;transition:transform .3s}
.nb-burger span:first-child{top:16px}.nb-burger span:last-child{top:24px}
.nb-burger[aria-expanded="true"] span:first-child{transform:translateY(4px) rotate(45deg)}
.nb-burger[aria-expanded="true"] span:last-child{transform:translateY(-4px) rotate(-45deg)}
.nb-mobile{display:none}
@media (max-width:820px){
  .nb-bar{grid-template-columns:1fr auto}
  .nb-links{display:none}
  .nb-burger{display:block}
  .nb-mobile{display:flex;flex-direction:column;gap:4px;width:min(1320px,100% - 32px);margin-inline:auto;max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.22,.7,.2,1)}
  .nb-mobile.open{max-height:320px;padding-bottom:14px}
  .nb-mlink{padding:14px 16px;border-radius:14px;font-size:17px;font-weight:600;color:#171717;text-decoration:none;background:rgba(255,255,255,.75)}
  .nb.nb-scrolled .nb-mobile.open,.nb:has(.nb-mobile.open){background:rgba(250,248,245,.92);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}
}
@media (max-width:600px){.nb-logo-img{height:62px}}
@media (prefers-reduced-motion:reduce){.nb,.nb *{transition:none!important}}
`;