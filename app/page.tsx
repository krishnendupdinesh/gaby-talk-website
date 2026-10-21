
"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Mic,
  ShieldCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

/* ---------- Types & content ---------- */

interface FeatureCard {
  title: string;
  image: string;
  alt: string;
  bg: string;
  icon: LucideIcon;
}

interface Step {
  n: string;
  title: string;
  text: string;
}

interface Review {
  name: string;
  avatar: string;
  text: string;
}

const FEATURES: FeatureCard[] = [
  {
    title: "First Free Wallet Balance",
    image: "/images/g1.webp",
    alt: "Phone showing a live voice room",
    bg: "bg-[#ecebf3]",
    icon: Sparkles,
  },
  {
    title: "Talk By Interest",
    image: "/images/home-img.webp",
    alt: "Friends chatting about shared interests",
    bg: "bg-[#d9d2f5]",
    icon: Mic,
  },
  {
    title: "Safe Conversations",
    image: "/images/g2.webp",
    alt: "Illustration representing safe conversations",
    bg: "bg-[#9b9aa3]",
    icon: ShieldCheck,
  },
];

const STEPS: Step[] = [
  {
    n: "01",
    title: "Create Your Profile",
    text: "Sign up with your phone number and add a photo and a short bio.",
  },
  {
    n: "02",
    title: "Pick Your Interests",
    text: "Choose the topics and languages you love, and we'll suggest rooms to join.",
  },
  {
    n: "03",
    title: "Join a Voice Room",
    text: "Hop into a live conversation, listen in, or raise your hand to speak.",
  },
  {
    n: "04",
    title: "Make Real Friends",
    text: "Follow people you click with and keep chatting through messages and voice notes.",
  },
];

const REVIEWS: Review[] = [
  {
    name: "Robert Mason",
    avatar: "/images/avatar-5.webp",
    text: "Amazing experience! I joined a room on my first day and ended up chatting for an hour. The people are friendly and the voice quality is great. I've made real friends here!",
  },
  {
    name: "William Blake",
    avatar: "/images/avatar-6.webp",
    text: "Highly impressed! The rooms are well moderated, so conversations stay respectful. It's the easiest way I've found to talk with new people about things I enjoy. Five stars!",
  },
];

const FLOATERS = [
  { src: "/images/i1.webp", pos: "left-[2%] top-[4%]", size: 48, delay: "0s" },
  { src: "/images/phone.png", pos: "right-[2%] top-[8%]", size: 44, delay: "1s" },
  { src: "/images/i3.webp", pos: "right-[-4%] top-[42%]", size: 38, delay: "2s" },
  { src: "/images/612.jpg", pos: "left-[-4%] top-[58%]", size: 34, delay: "3s" },
];

/* ---------- Shared components ---------- */

function delayStyle(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "right" | "zoom";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "right"
      ? "reveal-right"
      : variant === "zoom"
        ? "reveal-zoom"
        : "";

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${className}`}
      style={delayStyle(delay)}
    >
      {children}
    </div>
  );
}

function AppleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#00A0FF"
        d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1z"
      />
      <path
        fill="#00E676"
        d="M17.2 8.6 13.8 12 3.6 1.8c.2-.1.5-.2.8-.1l12.8 6.9z"
      />
      <path
        fill="#FFD500"
        d="M20.6 10.5c.7.4.7 1.6 0 2l-3.4 1.9L13.8 12l3.4-3.4 3.4 1.9z"
      />
      <path
        fill="#FF3A44"
        d="M17.2 15.4 4.4 22.3c-.3.1-.6 0-.8-.1L13.8 12l3.4 3.4z"
      />
    </svg>
  );
}

function StoreButton({
  href,
  label,
  small,
  name,
  icon,
  compact,
}: {
  href: string;
  label: string;
  small: string;
  name: string;
  icon: ReactNode;
  compact: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-xl bg-black text-white shadow-md ring-1 ring-white/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b0a1f] ${compact ? "h-9 px-3" : "h-11 px-4"
        }`}
    >
      {icon}
      <span className="flex flex-col text-left leading-none">
        <span className={compact ? "text-[7px]" : "text-[9px]"}>
          {small}
        </span>
        <span className={`mt-0.5 font-medium ${compact ? "text-[11px]" : "text-sm"}`}>
          {name}
        </span>
      </span>
    </a>
  );
}

function StoreBadges({
  size = "md",
  center = true,
}: {
  size?: "sm" | "md";
  center?: boolean;
}) {
  const compact = size === "sm";
  const iconClass = compact ? "h-4 w-4" : "h-5 w-5";

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${center ? "justify-center" : "justify-center sm:justify-start"
        }`}
    >
      <StoreButton
        href="#"
        label="Download on the App Store"
        small="Download on the"
        name="App Store"
        compact={compact}
        icon={<AppleIcon className={iconClass} />}
      />
      <StoreButton
        href="#"
        label="Get it on Google Play"
        small="Get it on"
        name="Google Play"
        compact={compact}
        icon={<PlayIcon className={iconClass} />}
      />
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#87d8e2]"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_35%,#000_30%,transparent_75%)]"
      />

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
          {FLOATERS.map((floater, index) => (
            <span
              key={floater.src}
              className={`pop absolute z-10 ${floater.pos}`}
              style={delayStyle(500 + index * 120)}
            >
              <span
                className="float block overflow-hidden rounded-full border-2 border-white shadow-lg"
                style={{
                  width: floater.size,
                  height: floater.size,
                  animationDelay: floater.delay,
                }}
              >
                <Image
                  src={floater.src}
                  alt=""
                  width={floater.size * 2}
                  height={floater.size * 2}
                  className="h-full w-full object-cover"
                />
              </span>
            </span>
          ))}

          <div className="rise" style={delayStyle(300)}>
            <Image
              src="/images/hero-img.png"
              alt="Gaby Talk app showing live voice rooms"
              width={840}
              height={1720}
              priority
              sizes="(max-width: 640px) 70vw, 340px"
              className="float-slow relative z-0 mx-auto h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */

function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="max-w-sm text-sm leading-relaxed text-black/65 sm:text-base">
            One call can start a great connection! Discover new voices, meet
            like-minded people, and jump into lively conversations. Your next
            favorite conversation is just a call away.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="flex items-center gap-4 md:gap-6"
        >
          <span
            aria-hidden="true"
            className="nudge grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0b0a1f] text-white"
          >
            <ArrowDown size={15} />
          </span>

          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.05]">
            Real conversations,
            <br className="hidden sm:block" /> genuine connections
          </h2>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <li
            key={feature.title}
            className={
              index === 2
                ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.625rem)] lg:col-span-1 lg:mx-0 lg:w-auto"
                : ""
            }
          >
            <Reveal delay={index * 120} variant="zoom" className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div
                  className={`relative aspect-[4/5] overflow-hidden ${feature.bg}`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-start gap-3 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0b0a1f] text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <feature.icon size={16} />
                  </span>

                  <div>
                    <h3 className="text-base font-semibold sm:text-lg">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Steps ---------- */

function StepCard({
  step,
  delay,
}: {
  step: Step;
  delay: number;
}) {
  return (
    <li>
      <Reveal delay={delay}>
        <div className="rounded-2xl bg-[#f1eefb] p-4 transition duration-300 hover:-translate-y-1 hover:bg-[#e6e0fa] hover:shadow-lg">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold">{step.title}</h3>
            <span className="text-xs text-black/50">{step.n}</span>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-black/60">
            {step.text}
          </p>
        </div>
      </Reveal>
    </li>
  );
}


function Steps() {
  return (
    <section
      id="steps"
      className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <h2 className="max-w-md text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.1]">
            Simple Steps to Start Talking
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="max-w-xs text-xs leading-relaxed text-black/60 sm:text-sm lg:ml-auto"
        >
          Discover how easy it is to meet new people on Gaby Talk.
          Create your profile, pick your interests, and join a
          conversation in minutes.
        </Reveal>
      </div>

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
        {/* Left side: Steps 01 and 02 */}
        <ol className="order-2 grid gap-3 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
          {[STEPS[0], STEPS[1]].map((s, i) => (
            <StepCard
              key={s.n}
              step={s}
              delay={i * 150}
            />
          ))}
        </ol>

        {/* Center image */}
        <Reveal
          variant="zoom"
          className="order-1 mx-auto w-[min(55vw,240px)] lg:order-2"
        >
          <Image
            src="/images/step-img.png"
            alt="Gaby Talk app home screen"
            width={600}
            height={1240}
            sizes="240px"
            className="float-slow h-auto w-full"
          />
        </Reveal>

        {/* Right side: Steps 03 and 04 */}
        <div className="order-3 flex flex-col gap-6">
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[STEPS[2], STEPS[3]].map((s, i) => (
              <StepCard
                key={s.n}
                step={s}
                delay={i * 150 + 300}
              />
            ))}
          </ol>

          <Reveal delay={450} className="max-w-xs text-xs text-black/60 sm:text-sm">
            Start conversations with people who share your interests.

            <a
              href="#download"
              className="mt-3 block w-fit rounded-full bg-[#0b0a1f] px-5 py-2 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2e8eb1]"
            >
              Download App
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


/* ---------- Testimonials ---------- */

function Testimonials() {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((current) => (current - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const next = () => {
    setIndex((current) => (current + 1) % REVIEWS.length);
  };

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24"
    >
      <Reveal>
        <div className="grid gap-8 rounded-3xl bg-[#ecebf3] p-6 sm:p-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <h2 className="max-w-xs text-[clamp(1.5rem,3.4vw,2.25rem)] font-normal leading-tight">
              Customer reviews and feedback from real users.
            </h2>

            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous review"
                className="grid h-10 w-10 place-items-center rounded-full bg-white transition duration-300 hover:scale-110 hover:bg-[#0b0a1f] hover:text-white"
              >
                <ArrowLeft size={15} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="grid h-10 w-10 place-items-center rounded-full bg-white transition duration-300 hover:scale-110 hover:bg-[#0b0a1f] hover:text-white"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2" aria-live="polite">
            {[0, 1].map((offset) => {
              const review = REVIEWS[(index + offset) % REVIEWS.length];

              return (
                <figure
                  key={`${index}-${offset}`}
                  className={`swap rounded-2xl bg-white p-5 transition-shadow hover:shadow-lg ${offset === 1 ? "hidden sm:block" : ""
                    }`}
                  style={delayStyle(offset * 100)}
                >
                  <figcaption className="flex items-center gap-3">
                    <Image
                      src={review.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />

                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>

                      <div
                        className="flex text-amber-400"
                        role="img"
                        aria-label="5 out of 5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={12}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                  </figcaption>

                  <blockquote className="mt-4 text-xs leading-relaxed text-black/60 sm:text-[13px]">
                    {review.text}
                  </blockquote>
                </figure>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Download banner ---------- */

function DownloadBanner() {
  return (
    <section
      id="download"
      className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f0f4ff] via-[#dce7ff] to-[#b8ccff] md:min-h-[420px]">
          <div className="relative z-10 p-6 sm:p-10 md:max-w-[55%] md:py-14">
            <p className="text-xs sm:text-sm">Ready to Start Talking?</p>

            <h2 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.05]">
              Download
              <br />
              Mobile App
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <StoreBadges size="sm" center={false} />

              <p className="max-w-[11rem] text-xs text-black/60">
                Download now and start real conversations today!
              </p>
            </div>
          </div>

          <div className="relative h-72 sm:h-80 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[52%]">
            <Reveal
              variant="right"
              delay={200}
              className="absolute inset-0"
            >
              <Image
                src="/images/phone-hand (1).png"
                alt="Hand holding a phone with the Gaby Talk app"
                fill
                sizes="(max-width: 768px) 100vw, 52vw"
                className="object-contain object-bottom md:object-right-bottom"
              />
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Page ---------- */

export default function Page() {
  return (
    <main className="overflow-x-clip bg-white text-[#0b0a1f]">
      <Hero />
      <Features />
      <Steps />
      <Testimonials />
      <DownloadBanner />
    </main>
  );
}
