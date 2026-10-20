import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "How it works | Gaby Talk",
  description:
    "Sign in with your phone number, collect 300 free coins, pick a topic and call a verified listener. You can also become a listener yourself.",
};

const steps = [
  { title: "Sign in with your phone", text: "Enter your number, confirm the OTP and you’re in. No passwords to remember." },
  { title: "Get 300 free coins", text: "Your wallet is credited with 300 coins after your first login." },
  { title: "Pick what to talk about", text: "Choose one or more categories that feel right for today." },
  { title: "Call a verified listener", text: "Tap Find Listeners and start a voice call right away." },
];

const agentPoints = [
  "Convert your account from user to agent",
  "Listen, support and connect with real people",
  "Join our verified listeners",
];

const bars = [
  { d: "0s", t: ".9s" },
  { d: ".15s", t: "1.2s" },
  { d: ".3s", t: ".8s" },
  { d: ".05s", t: "1.1s" },
  { d: ".25s", t: "1s" },
  { d: ".1s", t: "1.3s" },
  { d: ".35s", t: ".85s" },
];

const headline = "Your first call is a minute away.".split(" ");

const wrap = "mx-auto w-[min(1080px,100%-2.5rem)]";
const lift =
  "transition duration-300 hover:[transform:translateY(-4px)] hover:shadow-[0_14px_28px_rgba(38,38,58,.07)]";

// Keyframes only (Tailwind can't declare these inline). Scroll reveal uses CSS
// scroll-driven animation and simply shows the content if the browser lacks it.
const keyframes = `
@keyframes rise{from{opacity:0;translate:0 14px}to{opacity:1;translate:0 0}}
@keyframes word{from{opacity:0;translate:0 .45em}to{opacity:1;translate:0 0}}
@keyframes float{50%{translate:0 -6px}}
@keyframes ringout{from{transform:scale(1);opacity:.7}to{transform:scale(1.9);opacity:0}}
@keyframes eq{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}
@keyframes rv{from{opacity:0;translate:0 24px}to{opacity:1;translate:0 0}}
@keyframes grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@supports (animation-timeline:view()){
  .rv{animation:rv linear both;animation-timeline:view();animation-range:entry 0% entry 60%}
  .gl{animation:grow linear both;animation-timeline:view();animation-range:entry 20% entry 100%}
}
@media (prefers-reduced-motion:reduce){.rv,.gl{animation:none}}
`;

export default function HowItWorksPage() {
  return (
    <main
      className={`${outfit.className} min-h-screen leading-normal text-[#26263A] [background:radial-gradient(60rem_36rem_at_0%_0%,#FFF9E0,transparent_60%),radial-gradient(60rem_40rem_at_100%_100%,#F3F0FD,transparent_60%),#FEFDF9] bg-fixed`}
    >
      <style>{keyframes}</style>

      {/* Hero */}
      <section className={`${wrap} pb-12 pt-16 text-center`}>
        <span className="inline-block animate-[rise_.7s_ease-out_both] rounded-full border border-[#EFEDE6] bg-white px-4 py-1.5 text-[.9rem] motion-reduce:animate-none">
          From sign-in to hello in four steps
        </span>

        <h1
          aria-label="Your first call is a minute away."
          className="mx-auto my-[1.4rem] max-w-[16ch] text-[clamp(2.4rem,6vw,4.4rem)] font-semibold leading-[1.06] tracking-[-0.03em]"
        >
          {headline.map((w, i) => (
            <span key={i} aria-hidden="true">
              <span
                className="inline-block animate-[word_.7s_cubic-bezier(.2,.7,.2,1)_both] motion-reduce:animate-none"
                style={{ animationDelay: `${i * 70 + 120}ms` }}
              >
                {w}
              </span>
              {i < headline.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <p className="mx-auto mb-7 max-w-[54ch] animate-[rise_.7s_ease-out_.42s_both] text-[1.1rem] text-[#6E6E7C] motion-reduce:animate-none">
          No passwords, no waiting rooms. Verify your number, collect your free
          coins and start talking to someone who’s ready to listen.
        </p>

        {/* Live call preview */}
        <div
          aria-label="Call preview"
          className="mx-auto mt-12 max-w-[330px] animate-[rise_.7s_ease-out_.36s_both,float_6s_ease-in-out_1.2s_infinite] rounded-[1.8rem] bg-[#26263A] px-[1.6rem] pb-[1.6rem] pt-[1.8rem] text-center text-white shadow-[0_24px_48px_rgba(38,38,58,.22)] motion-reduce:animate-none"
        >
          <div
            aria-hidden="true"
            className="relative mx-auto mb-[1.1rem] grid h-[76px] w-[76px] place-items-center rounded-full bg-[#E9E4FC] text-[2rem]"
          >
            <span className="absolute inset-0 animate-[ringout_2.6s_ease-out_infinite] rounded-full border-2 border-[#E9E4FC]/60 motion-reduce:animate-none" />
            <span className="absolute inset-0 animate-[ringout_2.6s_ease-out_1.3s_infinite] rounded-full border-2 border-[#E9E4FC]/60 motion-reduce:animate-none" />
            🎧
          </div>
          <h3 className="text-[1.1rem] font-medium">Verified listener</h3>
          <small className="text-[#B9B5D6]">Voice call · connected</small>

          <div aria-hidden="true" className="my-[1.1rem] mb-5 flex h-8 items-center justify-center gap-[5px]">
            {bars.map((b, i) => (
              <i
                key={i}
                className="block h-full w-1 origin-center animate-[eq_1.1s_ease-in-out_infinite] rounded-[3px] bg-[#E9E4FC] motion-reduce:animate-none motion-reduce:[transform:scaleY(.6)]"
                style={{ animationDelay: b.d, animationDuration: b.t }}
              />
            ))}
          </div>

          <span
            aria-hidden="true"
            className="inline-grid h-11 w-11 place-items-center rounded-full bg-[#F0607A] transition-transform duration-200 hover:[transform:rotate(135deg)_scale(1.08)]"
          >
            📞
          </span>
        </div>
      </section>

      {/* Steps */}
      <section id="works" className={`${wrap} py-12`}>
        <h2 className="mb-2.5 text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
          How it works
        </h2>
        <ol className="mt-7 grid list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-0">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`rv group rounded-[1.4rem] border border-[#EFEDE6] bg-white p-[1.4rem] ${lift}`}
            >
              <div className="mb-3.5 flex items-center gap-2.5">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#E9E4FC] font-semibold text-[#4B4390] transition duration-300 group-hover:scale-110 group-hover:bg-[#26263A] group-hover:text-white">
                  {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative h-0.5 flex-1 overflow-hidden rounded bg-[#EFEDE6] ${
                    i === steps.length - 1 ? "invisible" : ""
                  }`}
                >
                  <span className="gl absolute inset-0 origin-left bg-[#8F7FF0]" />
                </span>
              </div>
              <h3 className="mb-1.5 text-[1.15rem] font-medium">{s.title}</h3>
              <p className="text-[#6E6E7C]">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Become an agent */}
      <section className={`${wrap} pb-20 pt-12`}>
        <div className="grid items-center gap-8 rounded-[2rem] border border-[#EFEDE6] bg-white p-6 md:grid-cols-[1.3fr_1fr] md:p-10">
          <div>
            <span className="inline-block rounded-full bg-[#E9E4FC] px-4 py-1.5 text-[.9rem] text-[#4B4390]">
              For listeners
            </span>
            <h2 className="mb-2.5 mt-4 text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
              Want to be the listener? Become an agent.
            </h2>
            <p className="max-w-[60ch] text-[#6E6E7C]">
              Gaby Talk isn’t only for callers. Any user can convert to an agent
              right inside the app and start taking calls from people who need
              someone to talk to.
            </p>
          </div>
          <ul className="m-0 grid list-none gap-2.5 p-0">
            {agentPoints.map((p, i) => (
              <li
                key={p}
                className="rv flex items-center gap-3 rounded-[1.1rem] bg-[#F3F0FD] px-4 py-3.5 transition-transform duration-300 hover:[transform:translateX(4px)]"
              >
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-[#26263A] text-[.9rem] font-semibold text-white">
                  {i + 1}
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}