"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Download, Mic, ShieldCheck, Sparkles, Star, type LucideIcon } from "lucide-react";

/* ---------- Types & content ---------- */

interface FeatureCard { title: string; image: string; alt: string; bg: string; icon: LucideIcon }
interface Step { n: string; title: string; text: string }
interface Review { name: string; avatar: string; text: string }

const FEATURES: FeatureCard[] = [
  { title: "Live Voice Rooms", image: "/images/g1.jpeg", alt: "Phone showing a live voice room", bg: "bg-[#ecebf3]", icon: Mic },
  { title: "Talk By Interest", image: "/images/g2.jpeg", alt: "Friends chatting about shared interests", bg: "bg-[#d9d2f5]", icon: Sparkles },
  { title: "Safe Conversations", image: "/images/g3.jpeg", alt: "Shield showing moderation and safety", bg: "bg-[#9b9aa3]", icon: ShieldCheck },
];

const STEPS: Step[] = [
  { n: "01", title: "Create Your Profile", text: "Sign up with your phone number and add a photo and a short bio." },
  { n: "02", title: "Pick Your Interests", text: "Choose the topics and languages you love, and we'll suggest rooms to join." },
  { n: "03", title: "Join a Voice Room", text: "Hop into a live conversation, listen in, or raise your hand to speak." },
  { n: "04", title: "Make Real Friends", text: "Follow people you click with and keep chatting through messages and voice notes." },
];

const REVIEWS: Review[] = [
  { name: "Robert Mason", avatar: "/images/avatar-5.webp", text: "Amazing experience! I joined a room on my first day and ended up chatting for an hour. The people are friendly and the voice quality is great. I've made real friends here!" },
  { name: "William Blake", avatar: "/images/avatar-6.webp", text: "Highly impressed! The rooms are well moderated, so conversations stay respectful. It's the easiest way I've found to talk with new people about things I enjoy. Five stars!" },
];

const FLOATERS = [
  { src: "/images/i1.webp", pos: "left-[2%] top-[4%]", size: 48, delay: "0s" },
  { src: "/images/i2.webp", pos: "right-[2%] top-[8%]", size: 44, delay: "1s" },
  { src: "/images/i3.webp", pos: "right-[-4%] top-[42%]", size: 38, delay: "2s" },
  { src: "/images/33.png", pos: "left-[-4%] top-[58%]", size: 34, delay: "3s" },
];

/* ---------- Shared pieces ---------- */

function delayStyle(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

/** Fades/slides content in the first time it scrolls into view. */
function Reveal({ children, className = "", delay = 0, variant = "up" }: { children: ReactNode; className?: string; delay?: number; variant?: "up" | "right" | "zoom" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const v = variant === "right" ? "reveal-right" : variant === "zoom" ? "reveal-zoom" : "";
  return (
    <div ref={ref} className={`reveal ${v} ${className}`} style={delayStyle(delay)}>
      {children}
    </div>
  );
}

function AppleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#00A0FF" d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1z" />
      <path fill="#00E676" d="M17.2 8.6 13.8 12 3.6 1.8c.2-.1.5-.2.8-.1l12.8 6.9z" />
      <path fill="#FFD500" d="M20.6 10.5c.7.4.7 1.6 0 2l-3.4 1.9L13.8 12l3.4-3.4 3.4 1.9z" />
      <path fill="#FF3A44" d="M17.2 15.4 4.4 22.3c-.3.1-.6 0-.8-.1L13.8 12l3.4 3.4z" />
    </svg>
  );
}


function StoreButton({ href, label, small, name, icon, compact }: { href: string; label: string; small: string; name: string; icon: ReactNode; compact: boolean }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-xl bg-black text-white shadow-md ring-1 ring-white/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b0a1f] ${compact ? "h-9 px-3" : "h-11 px-4"}`}
    >
      {icon}
      <span className="flex flex-col text-left leading-none">
        <span className={compact ? "text-[7px]" : "text-[9px]"}>{small}</span>
        <span className={`mt-0.5 font-medium ${compact ? "text-[11px]" : "text-sm"}`}>{name}</span>
      </span>
    </a>
  );
}

function StoreBadges({ size = "md", center = true }: { size?: "sm" | "md"; center?: boolean }) {
  const compact = size === "sm";
  const icon = compact ? "h-4 w-4" : "h-5 w-5";
  return (
    <div className={`flex flex-wrap items-center gap-2 ${center ? "justify-center" : "justify-center sm:justify-start"}`}>
      <StoreButton href="#" label="Download on the App Store" small="Download on the" name="App Store" compact={compact} icon={<AppleIcon className={icon} />} />
      <StoreButton href="#" label="Get it on Google Play" small="Get it on" name="Google Play" compact={compact} icon={<PlayIcon className={icon} />} />
    </div>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#87d8e2]">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_35%,#000_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-3xl px-6 pt-14 text-center sm:pt-20">
        <h1 className="rise mx-auto max-w-2xl px-4 text-center text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#242033]">
          Download Gaby Talk and discover
          <span className="text-[#16b5ca]"> real connections </span>
          through real interests.
        </h1>
        <div className="rise mt-6" style={delayStyle(150)}>
          <StoreBadges />
        </div>

        <div className="relative mx-auto mt-10 w-[min(70vw,340px)]">
          {FLOATERS.map((f, i) => (
            <span key={f.src} className={`pop absolute z-10 ${f.pos}`} style={delayStyle(500 + i * 120)}>
              <span className="float block overflow-hidden rounded-full border-2 border-white shadow-lg" style={{ width: f.size, height: f.size, animationDelay: f.delay }}>
                <Image src={f.src} alt="" width={f.size * 2} height={f.size * 2} />
              </span>
            </span>
          ))}
          <div className="rise" style={delayStyle(300)}>
            <Image src="/images/hero-img.png" alt="Koode app showing live voice rooms" width={840} height={1720} priority sizes="(max-width: 640px) 70vw, 340px" className="float-slow relative z-0 mx-auto h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="max-w-sm text-sm leading-relaxed text-black/65 sm:text-base">
            One call can start a great connection!
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 100} className="flex flex-col items-center text-center">
              <div className={`w-full aspect-[4/5] rounded-3xl relative overflow-hidden flex items-end justify-center p-6 ${item.bg}`}>
                <Image 
                  src={item.image} 
                  alt={item.alt} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-center gap-2 justify-center">
                <Icon className="h-5 w-5 text-[#16b5ca]" />
                <h3 className="font-medium text-lg text-[#242033]">{item.title}</h3>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Main Page Render ---------- */

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
    </main>
  );
}


