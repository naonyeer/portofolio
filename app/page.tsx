import type { ComponentPropsWithoutRef, ReactNode } from "react";
import HackerMusicPlayer from "./hacker-music-player";

const navItems = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "process", href: "#process" },
  { label: "contact", href: "#contact" },
];

const desktopIcons = [
  { icon: "Z", label: "zee.build", href: "#home" },
  { icon: "👨‍💻", label: "About Me", href: "#about" },
  { icon: "🖼️", label: "Projects", href: "#projects" },
  { icon: "📄", label: "Process", href: "#process" },
  { icon: "📬", label: "Contact", href: "#contact" },
  { icon: "☕", label: "Guestbook", href: "#contact" },
];

const projects = [
  {
    title: "TukuPremium",
    file: "tukupremium.exe",
    url: "https://tukupremium.store",
    description: "Platform membership & premium content management for digital creators.",
    focus: "product UI, trust, checkout flow, practical ecommerce experience",
    tags: ["next.js", "stripe", "postgres", "tailwind"],
    color: "from-[#310066] via-[#1b0b4e] to-[#05091e]",
    badge: "👑",
  },
  {
    title: "Ngapak Tools",
    file: "ngapak_tools.exe",
    url: "https://ngapak-tools.vercel.app/",
    description: "Collection of free online tools for everyday tasks. Fast, simple, and privacy-friendly.",
    focus: "utility flow, fast interaction, playful functionality",
    tags: ["next.js", "tools", "seo", "cloudflare"],
    color: "from-[#102b62] via-[#061a3d] to-[#05091e]",
    badge: "🐼",
  },
  {
    title: "Tukupedia Studio",
    file: "tukupedia_studio.exe",
    url: "https://tukupedia-studio.vercel.app/",
    description: "AI-powered content studio for generating articles, ideas, and creative outlines.",
    focus: "landing page design, content layout, conversion sections",
    tags: ["next.js", "openai", "editor", "vercel"],
    color: "from-[#053d42] via-[#083445] to-[#05091e]",
    badge: "🖥️",
  },
];

const skills = [
  ["Next.js", 86],
  ["React", 82],
  ["Tailwind CSS", 90],
  ["Frontend UI", 84],
  ["Landing Pages", 80],
  ["Product Thinking", 74],
  ["Rapid Prototyping", 88],
  ["AI Workflow", 78],
];

const process = [
  {
    step: "01",
    title: "idea spark",
    copy: "Find a real problem worth solving.",
    icon: "💡",
  },
  {
    step: "02",
    title: "vibe build",
    copy: "Build fast with clean code and good vibes.",
    icon: "</>",
  },
  {
    step: "03",
    title: "ship & learn",
    copy: "Launch early, gather feedback, get better.",
    icon: "🚀",
  },
  {
    step: "04",
    title: "iterate",
    copy: "Improve, simplify, and add value.",
    icon: "🔁",
  },
];

function Window({
  title,
  children,
  className = "",
  barColor = "bg-gradient-to-r from-[#0a44b9] via-[#2635a8] to-[#7c55c9]",
  ...props
}: {
  title: string;
  children: ReactNode;
  className?: string;
  barColor?: string;
} & ComponentPropsWithoutRef<"section">) {
  return (
    <section className={`pixel-border win-panel bg-[#d6d0c4] text-night ${className}`} {...props}>
      <div
        className={`${barColor} flex items-center justify-between border-b-2 border-black px-2 py-1 font-pixel text-xs font-bold text-white`}
      >
        <span className="flex items-center gap-2">
          <span className="grid size-4 place-items-center border border-white bg-acid text-[10px] text-night">▣</span>
          {title}
        </span>
        <span className="flex gap-1">
          <span className="grid size-4 place-items-center border border-black bg-chrome text-[10px]">_</span>
          <span className="grid size-4 place-items-center border border-black bg-chrome text-[10px]">□</span>
          <span className="grid size-4 place-items-center border border-black bg-chrome text-[10px]">×</span>
        </span>
      </div>
      {children}
    </section>
  );
}

function Sticker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex rotate-[-2deg] items-center border-2 border-black bg-acid px-3 py-1 font-display text-sm uppercase tracking-wide text-night shadow-hard-black ${className}`}
    >
      {children}
    </span>
  );
}

function SkillMeter({ name, value }: { name: string; value: number }) {
  const blocks = Array.from({ length: 10 }, (_, index) => index < Math.round(value / 10));

  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 text-sm">
      <span>{name}</span>
      <div className="flex gap-1" aria-label={`${name}: ${value}%`}>
        {blocks.map((active, index) => (
          <span
            className={`h-3 w-2 border border-black ${active ? "bg-acid" : "bg-zinc-300"}`}
            key={`${name}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-14 text-white pixel-font">
      <div className="city-silhouette pointer-events-none fixed bottom-10 left-0 z-0 hidden h-44 w-44 opacity-85 md:block" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 overflow-hidden border-b-2 border-black bg-gradient-to-r from-acid via-plasma to-electric py-1 font-pixel text-xs text-night">
        <div className="marquee flex w-[200%] gap-8 whitespace-nowrap font-bold">
          <span>★ ZEE ONLINE ★ BUILDING IN PUBLIC ★ SHIP FAST ★ VIBE BUILD MODE ★ 1UP ENERGY ★</span>
          <span>★ ZEE ONLINE ★ BUILDING IN PUBLIC ★ SHIP FAST ★ VIBE BUILD MODE ★ 1UP ENERGY ★</span>
        </div>
      </div>

      <aside className="fixed left-0 top-0 z-30 hidden h-full w-32 border-r-2 border-black bg-[#06124e]/95 pt-10 md:block">
        <nav className="flex h-full flex-col items-center gap-6 px-2 text-center">
          {desktopIcons.map((item) => (
            <a className="group block text-sm font-bold text-white" href={item.href} key={item.label}>
              <span className="mx-auto grid size-14 place-items-center border-2 border-cyan-200 bg-gradient-to-br from-[#2512aa] via-[#37188e] to-black text-2xl shadow-[0_0_12px_#43f7ff] transition group-hover:-translate-y-1 group-hover:rotate-3">
                {item.icon}
              </span>
              <span className="mt-2 block drop-shadow-[2px_2px_0_#000]">{item.label}</span>
            </a>
          ))}
          <div className="mt-auto mb-24 w-full text-left">
            <HackerMusicPlayer />
          </div>
        </nav>
      </aside>

      <div className="relative z-10 mx-auto max-w-[1540px] px-3 pt-10 md:pl-36 md:pr-6">
        <header className="sticky top-6 z-20 mb-3 win-panel bg-[#d6d0c4] text-night shadow-window">
          <div className="flex items-center justify-between border-b-2 border-black bg-gradient-to-r from-[#123399] via-[#344ac0] to-[#8277ca] px-2 py-1 font-pixel text-xs font-bold text-white">
            <span>Zee&apos;s Portfolio — newbie engineer & vibe coding builder</span>
            <span className="hidden gap-1 sm:flex">
              <span className="grid size-5 place-items-center border border-black bg-chrome text-night">_</span>
              <span className="grid size-5 place-items-center border border-black bg-chrome text-night">□</span>
              <span className="grid size-5 place-items-center border border-black bg-chrome text-night">×</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 bg-[#d6d0c4] px-3 py-2 font-pixel text-sm">
            <span className="text-2xl">←</span>
            <span className="text-2xl">→</span>
            <span className="text-2xl">⟳</span>
            <span className="text-2xl">⌂</span>
            <span className="min-w-0 flex-1 border-2 border-zinc-500 bg-white px-3 py-1 text-left text-xs shadow-[inset_2px_2px_0_#777] sm:text-sm">
              https://zee.build
            </span>
            <a
              className="border-2 border-black bg-acid px-3 py-1 font-display lowercase tracking-wide shadow-[3px_3px_0_#000] transition hover:-translate-y-0.5 hover:bg-yellow-300"
              href="#contact"
            >
              lets connect
            </a>
          </div>
          <nav className="flex flex-wrap gap-1 border-t-2 border-black bg-[#02035c] p-2">
            {navItems.map((item) => (
              <a
                className="min-w-28 win-panel bg-gradient-to-b from-[#f6f2ea] to-[#bcb7ae] px-5 py-1 text-center font-display text-sm lowercase text-blue-950 shadow-[3px_3px_0_#000] transition hover:bg-gradient-to-b hover:from-plasma hover:to-fuchsia-300"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section className="grid gap-4 lg:grid-cols-[.95fr_1.05fr]" id="home">
          <div className="relative overflow-hidden rounded-none p-4 md:p-8">
            <div className="absolute inset-0 -z-0 halftone opacity-40" />
            <div className="relative z-10">
              <div className="mb-4 flex flex-wrap gap-2">
                <Sticker>vibe. build. repeat.</Sticker>
                <Sticker className="bg-plasma text-white">1UP</Sticker>
                <Sticker className="bg-electric text-white">online</Sticker>
              </div>
              <h1 className="chrome-text font-display text-[5.5rem] italic leading-none tracking-tighter sm:text-[9rem] lg:text-[11rem]">
                ZEE
              </h1>
              <p className="mt-0 max-w-4xl font-display text-4xl italic leading-none text-acid drop-shadow-[4px_4px_0_#000] sm:text-5xl lg:text-6xl">
                newbie engineer
                <span className="block text-plasma">vibe coding builder</span>
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white md:text-lg">
                I build useful web products with fast iteration, practical thinking, and clean experiences. Simple
                ideas. Shipped well.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  className="border-2 border-black bg-acid px-7 py-3 font-display uppercase text-night shadow-hard-black transition hover:-translate-y-1 hover:bg-yellow-300"
                  href="#projects"
                >
                  view projects ▶
                </a>
                <a
                  className="border-2 border-black bg-chrome px-7 py-3 font-display uppercase text-night shadow-hard-black transition hover:-translate-y-1 hover:bg-white"
                  href="#contact"
                >
                  contact me ✉
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-2 font-pixel text-xs text-cyan-100">
                <span className="text-yellow-300">{"// currently focused on"}</span>
                {["building in public", "ai-assisted dev", "clean ui", "fast loops"].map((tag) => (
                  <span className="border border-cyan-300 bg-white/10 px-3 py-1" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <Window title="Zee.exe" className="absolute inset-x-0 top-0 overflow-hidden" barColor="bg-[#123399]">
              <div className="relative min-h-[430px] overflow-hidden bg-[#050022] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(255,77,248,.36),transparent_13rem),radial-gradient(circle_at_88%_78%,rgba(34,211,238,.32),transparent_8rem),linear-gradient(transparent_58%,rgba(255,77,248,.18)_59%,rgba(38,103,255,.36)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(rgba(255,77,248,.42)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.36)_1px,transparent_1px)] bg-[length:40px_18px] [transform:perspective(500px)_rotateX(58deg)] [transform-origin:bottom]" />
                <div className="absolute left-[22%] top-24 h-28 w-64 border-4 border-cyan-200 bg-gradient-to-br from-[#2437ff] to-[#07002d] shadow-neon pixel-laptop" />
                <div className="floaty absolute left-[34%] top-28 grid size-32 rotate-[-12deg] place-items-center border-4 border-plasma bg-gradient-to-br from-electric to-night shadow-neon">
                  <span className="chrome-text font-display text-7xl">Z</span>
                </div>
                <div className="absolute right-7 top-28 w-44 rotate-6 border-4 border-white bg-black p-3 text-center font-display text-4xl leading-none text-acid shadow-hard-black">
                  BUILD
                  <span className="block text-plasma">SHIP</span>
                  <span className="block text-white">REPEAT</span>
                </div>
                <div className="absolute bottom-8 left-3 right-3 border-2 border-black bg-[#d6d0c4] px-3 py-2 font-pixel text-night">
                  status: in the zone <span className="blink text-acid">●</span>
                </div>
              </div>
            </Window>
            <Window
              title="skills.dll"
              className="absolute -left-3 bottom-12 w-[min(92vw,230px)] lg:-left-16"
              barColor="bg-gradient-to-r from-violet-700 to-zinc-500"
            >
              <div className="space-y-2 bg-zinc-100 p-4 font-pixel text-xs text-night">
                {skills.slice(0, 6).map(([name, value]) => (
                  <SkillMeter key={name as string} name={name as string} value={value as number} />
                ))}
              </div>
            </Window>
            <Window title="now_building.txt" className="absolute bottom-0 right-0 w-72" barColor="bg-violet-700">
              <div className="space-y-3 bg-zinc-100 p-4 font-pixel text-sm text-night">
                <p className="font-bold">&gt; current focus</p>
                <p>Ship useful products</p>
                <p>Help users get things done</p>
                <p>Learn, iterate, repeat</p>
              </div>
            </Window>
          </div>
        </section>

        <div className="mt-6 grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
          <Window title="about_me.txt" className="scroll-mt-28 overflow-hidden" id="about" barColor="bg-[#123399]">
            <div className="grid gap-0 md:grid-cols-[210px_1fr]">
              <div className="checker grid min-h-48 place-items-center border-b-2 border-black p-5 md:border-b-0 md:border-r-2">
                <div className="relative grid size-32 place-items-center border-4 border-black bg-gradient-to-b from-cyan-300 to-purple-700 shadow-hard-black">
                  <span className="text-6xl">😎</span>
                  <span className="absolute -bottom-5 border-2 border-black bg-night px-5 py-1 font-pixel text-acid">
                    ● online
                  </span>
                </div>
              </div>
              <div className="window-shine p-6 text-white">
                <h2 className="font-display text-3xl uppercase text-plasma drop-shadow-[3px_3px_0_#000]">
                  about me
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8">
                  I&apos;m Zee — a newbie engineer who learns by shipping. I enjoy turning rough ideas into useful web
                  products through fast iteration, AI-assisted development, and practical execution.
                </p>
                <p className="mt-3 max-w-3xl text-lg leading-8">
                  I care about interfaces that feel clear, approachable, and actually useful. Still early, still
                  learning, but serious about building things that solve real problems.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 font-pixel text-sm">
                  <span className="text-purple-300">tools i use:</span>
                  {["VS Code", "Vercel", "Notion", "Next", "React", "AI"].map((tool) => (
                    <span className="border-2 border-black bg-chrome px-3 py-1 text-night shadow-[3px_3px_0_#000]" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Window>

          <Window title="playlist.m3u" className="overflow-hidden" barColor="bg-gradient-to-r from-purple-700 to-blue-700">
            <div className="bg-gradient-to-br from-purple-950 via-fuchsia-950 to-blue-950 p-6">
              <p className="font-pixel text-sm text-fuchsia-200">today&apos;s soundtrack</p>
              <div className="mt-4 flex items-end justify-between gap-2">
                <p className="font-pixel text-4xl tracking-[.35em] text-cyan-200 drop-shadow-[0_0_12px_#22d3ee]">
                  hack mode
                </p>
                <div className="flex h-24 items-end gap-1">
                  {[28, 62, 44, 85, 36, 72, 52, 94, 48, 76, 61, 88].map((height, index) => (
                    <span
                      className="w-3 bg-gradient-to-t from-cyan-300 to-plasma"
                      key={index}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6 h-2 border border-pink-300 bg-black">
                <div className="h-full w-3/4 bg-cyan-300" />
              </div>
              <div className="mt-5 flex justify-between font-pixel text-sm text-purple-100">
                <span>track: haunted_hacker</span>
                <span>02:24 / ∞</span>
              </div>
            </div>
          </Window>
        </div>

        <Window
          title="featured_projects"
          className="mt-6 scroll-mt-28"
          barColor="bg-gradient-to-r from-lime-700 to-green-500"
        >
          <div
            className="grid scroll-mt-36 gap-3 bg-gradient-to-br from-[#c8ff51] via-[#46f1ff] to-[#174fc9] p-3 md:grid-cols-3"
            id="projects"
          >
            {projects.map((project) => (
              <article
                className={`pixel-border group flex min-h-[190px] flex-col border-2 border-black bg-gradient-to-br ${project.color} p-3 text-white transition hover:-translate-y-1 hover:rotate-[-1deg]`}
                key={project.title}
              >
                <div className="mb-3 flex items-center justify-between border-b border-white/25 pb-2 font-pixel text-xs text-cyan-100">
                  <span>{project.file}</span>
                  <span>☆</span>
                </div>
                <h3 className="font-display text-3xl italic text-cyan-200 drop-shadow-[3px_3px_0_#000]">
                  <span className="mr-2">{project.badge}</span>
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-5">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="border border-cyan-200 bg-cyan-400/20 px-2 py-1 font-pixel text-xs" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-auto inline-flex w-fit border-2 border-black bg-plasma px-5 py-2 font-display uppercase text-night shadow-[4px_4px_0_#000] transition group-hover:bg-acid"
                  href={project.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  view project ▶
                </a>
              </article>
            ))}
          </div>
        </Window>

        <section className="mt-3 grid scroll-mt-36 gap-3 lg:grid-cols-[.85fr_1.15fr]" id="skills">
          <Window title="system_info.sys" barColor="bg-gradient-to-r from-cyan-700 to-blue-700">
            <div className="window-shine p-6 text-white">
              <h2 className="font-display text-4xl uppercase text-acid drop-shadow-[3px_3px_0_#000]">
                skills / stack / tools
              </h2>
              <div className="mt-6 space-y-4 font-pixel">
                {skills.map(([name, value]) => (
                  <div key={name as string}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{name}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-5 border-2 border-black bg-chrome p-1">
                      <div className="h-full bg-gradient-to-r from-acid via-yellow-300 to-plasma" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Window>

          <Window title="my_process" className="scroll-mt-28" barColor="bg-gradient-to-r from-yellow-600 to-purple-700">
            <div className="grid scroll-mt-36 gap-3 bg-[#07145c] p-3 text-white md:grid-cols-4" id="process">
              {process.map((item) => (
                <article className="border-2 border-cyan-200 bg-white/10 p-3 shadow-[5px_5px_0_#000]" key={item.step}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="border-2 border-black bg-acid px-2 py-1 font-display text-xl text-night">
                      {item.step}
                    </span>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="font-display text-xl text-plasma">{item.title}</h3>
                  <p className="mt-2 text-sm leading-5 text-cyan-50">{item.copy}</p>
                </article>
              ))}
            </div>
          </Window>
        </section>

        <section className="mt-3 grid scroll-mt-36 gap-3 lg:grid-cols-[1fr_.8fr]" id="contact">
          <Window title="guestbook_contact.alert" barColor="bg-gradient-to-r from-fuchsia-700 to-yellow-500">
            <div className="bg-gradient-to-br from-fuchsia-950 via-purple-950 to-blue-950 p-7 text-white">
              <Sticker className="mb-5">status: open for ideas</Sticker>
              <h2 className="font-display text-5xl uppercase leading-none text-white drop-shadow-[4px_4px_0_#000]">
                got a useful web idea?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8">
                Send a message, share a project, or check out the builds. Zee is learning in public and shipping one
                practical idea at a time.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  className="border-2 border-black bg-acid px-6 py-3 font-display uppercase text-night shadow-hard-black transition hover:-translate-y-1"
                  href="mailto:naonyeer@gmail.com"
                >
                  email zee ✉
                </a>
                <a
                  className="border-2 border-black bg-chrome px-6 py-3 font-display uppercase text-night shadow-hard-black transition hover:-translate-y-1"
                  href="#projects"
                >
                  view builds
                </a>
              </div>
            </div>
          </Window>
          <Window title="message_box.im" barColor="bg-blue-700">
            <div className="space-y-4 bg-zinc-100 p-5 font-pixel text-night">
              <p className="border-2 border-black bg-white p-3">&gt; hi zee, i have an idea for a small web product...</p>
              <p className="ml-8 border-2 border-black bg-acid p-3">&gt; nice. let&apos;s make it simple, useful, and shippable.</p>
              <div className="border-2 border-black bg-white p-3 text-zinc-500">type message here...</div>
            </div>
          </Window>
        </section>

        <footer className="mt-3 border-2 border-black bg-chrome px-4 py-3 font-pixel text-sm text-night shadow-window">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span>© 2025 Zee | Building in public</span>
            <span>Start ▣ volume ▣ internet ▣ 10:25 PM</span>
          </div>
        </footer>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 hidden border-t-2 border-white bg-[#d6d0c4] px-2 py-1 font-pixel text-sm text-night shadow-[0_-2px_0_#777] md:flex">
        <span className="mr-3 border-2 border-black bg-[#d6d0c4] px-4 py-1 font-bold shadow-[inset_2px_2px_0_#fff,inset_-2px_-2px_0_#777]">
          🪟 Start
        </span>
        <span className="mr-auto border-2 border-zinc-600 bg-[#bfb8ad] px-4 py-1 shadow-[inset_2px_2px_0_#777]">
          Zee&apos;s Portfolio
        </span>
        <span className="border-2 border-zinc-600 bg-[#c9c2b7] px-3 py-1 shadow-[inset_2px_2px_0_#777]">
          🔊 🖥️ 🌐 10:25 PM
        </span>
      </div>
    </main>
  );
}
