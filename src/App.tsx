import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  FiActivity,
  FiArrowDown,
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiGithub,
  FiGitlab,
  FiGlobe,
  FiHeart,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiPhone,
  FiSun,
  FiUsers,
  FiX,
} from "react-icons/fi";
import {
  SiFigma,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

type PortfolioImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
};

function Image({ src, alt, className = "", fill = false, priority, width, height }: PortfolioImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={`${fill ? "absolute inset-0 h-full w-full" : ""} ${className}`.trim()}
    />
  );
}

const navItems = ["About", "Skills", "Projects", "Journey", "Contact"];

const roles = [
  "Developer",
  "UI/UX Designer",
  "Creative Technologist",
  "Frontend Engineer",
  "Blockchain Developer",
];

const stats = [
  { value: "08+", label: "Featured builds" },
  { value: "2026", label: "GCIT graduate path" },
  { value: "95%", label: "Figma craft level" },
];

const skillTabs = [
  {
    id: "frontend",
    label: "Frontend",
    kicker: "Interface systems",
    summary: "Building fast, animated, responsive product surfaces with clean component thinking.",
    icon: FiCode,
    skills: [
      { name: "React", level: 88, icon: SiReact, note: "Component architecture" },
      { name: "Next.js", level: 86, icon: SiNextdotjs, note: "SEO and app routing" },
      { name: "Tailwind CSS", level: 80, icon: SiTailwindcss, note: "Design-system styling" },
      { name: "JavaScript", level: 85, icon: SiJavascript, note: "Interactive logic" },
      { name: "TypeScript", level: 78, icon: SiTypescript, note: "Safer product code" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    kicker: "Data and services",
    summary: "Designing reliable server logic, APIs, data models, and blockchain-oriented workflows.",
    icon: SiNodedotjs,
    skills: [
      { name: "Node.js", level: 70, icon: SiNodedotjs, note: "API foundations" },
      { name: "MongoDB", level: 74, icon: SiMongodb, note: "Document data flows" },
      { name: "Blockchain", level: 82, icon: FiGlobe, note: "Tokenization and trust" },
      { name: "Cybersecurity", level: 78, icon: FiActivity, note: "Secure thinking" },
    ],
  },
  {
    id: "design",
    label: "Design",
    kicker: "Product craft",
    summary: "Shaping interfaces with hierarchy, motion, story, and strong visual taste.",
    icon: SiFigma,
    skills: [
      { name: "Figma", level: 95, icon: SiFigma, note: "High-fidelity design" },
      { name: "UI/UX Design", level: 90, icon: FiArrowUpRight, note: "User journey clarity" },
      { name: "Framer Motion", level: 82, icon: SiFramer, note: "Cinematic transitions" },
      { name: "Creative Direction", level: 84, icon: FiHeart, note: "Editorial polish" },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    kicker: "Human layer",
    summary: "Bringing calm communication, curiosity, collaboration, and ownership into product work.",
    icon: FiUsers,
    skills: [
      { name: "Communication", level: 92, icon: FiMessageCircle, note: "Clear team alignment" },
      { name: "Public Speaking", level: 86, icon: FiMessageCircle, note: "Confident presentation" },
      { name: "Project Management", level: 88, icon: FiActivity, note: "Planning and delivery" },
      { name: "Networking", level: 84, icon: FiGlobe, note: "Relationship building" },
      { name: "Collaboration", level: 88, icon: FiUsers, note: "Agile project rhythm" },
      { name: "Agile / Scrum", level: 86, icon: FiUsers, note: "Sprint-based teamwork" },
      { name: "Problem Solving", level: 86, icon: FiActivity, note: "Structured decisions" },
      { name: "Adaptability", level: 84, icon: FiGlobe, note: "Learning across contexts" },
    ],
  },
];

const interests = [
  { title: "Basketball", detail: "Fast decisions, movement, rhythm, and court awareness.", icon: FiActivity },
  { title: "Football", detail: "Team energy, strategy, pressure, and shared momentum.", icon: FiUsers },
  { title: "Perfume Collection", detail: "A personal archive of detail, memory, taste, and identity.", icon: FiHeart },
  { title: "Video Games", detail: "Strategy, reflex, systems thinking, and playful problem-solving under pressure.", icon: FiCpu },
  { title: "Traveling", detail: "New places, culture, perspective, and stronger product empathy.", icon: FiGlobe },
  { title: "Communicating", detail: "Reading people well and making ideas easier to understand.", icon: FiMessageCircle },
];

const projects = [
  {
    title: "RSEB Bond Tokenization",
    category: "Full Stack",
    image: "/images/RSEB.png",
    description:
      "A blockchain platform for tokenizing bonds and exploring secure digital asset trading workflows.",
    stack: ["Blockchain", "Tokenization"],
    size: "large",
  },
  {
    title: "Certifi",
    category: "Full Stack",
    image: "/images/certifi.jpeg",
    description:
      "A blockchain certificate system that stores verified credentials with IPFS so academic records stay secure, portable, and easy to validate.",
    stack: ["Blockchain", "IPFS", "React", "Node"],
    code: "https://gitlab.com/prj_group1/prj_group_certifi.git",
    size: "wide",
  },
  {
    title: "Keychain",
    category: "Creative Development",
    image: "/images/realestate.jpeg",
    description:
      "A real-estate management experience where properties become blockchain-backed NFTs with clearer ownership flows.",
    stack: ["NFT", "Solidity", "React", "UX"],
    code: "https://gitlab.com/dapp640315/real-estate.git",
    size: "wide",
  },
  {
    title: "Taxico",
    category: "Web Apps",
    image: "/images/taxico.jpeg",
    description:
      "A ride service platform for booking, driver profiles, experience tracking, and earnings visibility.",
    stack: ["Agile", "Node", "React", "SQL"],
    code: "https://gitlab.com/csf202_agile-software-engineering-practice/taxico",
    size: "tall",
  },
  {
    title: "Applymate",
    category: "UI Design",
    image: "/images/applymate.png",
    description:
      "A student admissions interface designed to simplify submissions, tracking, and applicant management.",
    stack: ["UI/UX", "React", "Figma"],
    code: "https://github.com/Pemacoder/ApplyMate",
    size: "medium",
  },
  {
    title: "Areo Bhutan",
    category: "Web Apps",
    image: "/images/areo.png",
    description:
      "A travel booking platform for flights, hotels, and curated services around Bhutan.",
    stack: ["Travel", "Frontend", "Booking"],
    size: "wide",
  },
];

const timeline = [
  {
    year: "2010 - 2016",
    title: "Primary School",
    place: "Habesa, Wangdue, Bhutan",
    body: "Built the early curiosity and discipline that later turned into product thinking.",
  },
  {
    year: "2017 - 2022",
    title: "Higher School",
    place: "Ugyen Academy, Punakha, Bhutan",
    body: "Strengthened communication, design taste, and confidence with technology.",
  },
  {
    year: "2023 - 2026",
    title: "BSc Computer Science",
    place: "GCIT, Gelpozhing College of Information Technology",
    body: "Specializing in blockchain and cybersecurity while building web products with Agile teams.",
  },
  {
    year: "Since 2023",
    title: "Client & Product Work",
    place: "Remote collaborations",
    body: "Working across web apps, travel products, tokenization concepts, and refined interface design.",
  },
];

const testimonials = [
  {
    quote:
      "Ngawang brings the rare mix of disciplined engineering and visual sensitivity. His prototypes feel alive early.",
    name: "Creative Lead",
    role: "Product Collaboration",
  },
  {
    quote:
      "He thinks beyond screens: security, flow, and the user journey all show up in the work.",
    name: "Project Mentor",
    role: "GCIT",
  },
  {
    quote:
      "The delivery style is calm, curious, and polished. Every iteration makes the product clearer.",
    name: "Client Partner",
    role: "Web Experience",
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/_n.gyeltshen/", icon: FiInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ngawang-gyeltshen-46452025b/", icon: FiLinkedin },
  { label: "GitLab", href: "https://gitlab.com/csf202_agile-software-engineering-practice/taxico/-/tree/sprint-3-branch?ref_type=heads", icon: FiGitlab },
];

function MagneticButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0, 0)";
      }}
      className={`magnetic inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-6 py-4 text-sm uppercase tracking-[0.22em] text-[#f5f1e8] transition duration-300 hover:border-[#d6c3a5]/70 hover:bg-[#d6c3a5] hover:text-[#0a0a0a] ${className}`}
    >
      {children}
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let frame = 0;
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPosition = { x: position.x, y: position.y };

    const render = () => {
      ringPosition.x += (position.x - ringPosition.x) * 0.32;
      ringPosition.y += (position.y - ringPosition.y) * 0.32;

      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPosition.x - 18}px, ${ringPosition.y - 18}px, 0)`;
      }
      if (dot.current) {
        dot.current.style.transform = `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`;
      }

      frame = requestAnimationFrame(render);
    };

    const move = (event: MouseEvent) => {
      position.x = event.clientX;
      position.y = event.clientY;
    };
    const enter = (event: Event) => {
      if ((event.target as HTMLElement).closest("a, button, input, textarea, .magnetic")) setActive(true);
    };
    const leave = (event: Event) => {
      if ((event.target as HTMLElement).closest("a, button, input, textarea, .magnetic")) setActive(false);
    };

    frame = requestAnimationFrame(render);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, []);

  return (
    <>
      <div ref={ring} className={`custom-cursor-ring ${active ? "is-active" : ""}`} />
      <div ref={dot} className={`custom-cursor-dot ${active ? "is-active" : ""}`} />
    </>
  );
}

function Navbar({
  theme,
  onToggleTheme,
}: {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > last && current > 160);
      last = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-5 md:px-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.08] bg-[#0a0a0a]/45 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl md:px-6">
        <a href="#home" className="font-serif text-xl tracking-wide text-[#f5f1e8]">
          NG
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-xs uppercase tracking-[0.24em] text-[#b8b1a6] transition hover:text-[#f5f1e8]"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="/docs/ngawang-gyeltshen-cv.pdf"
          className="hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#d6c3a5] transition hover:bg-[#d6c3a5] hover:text-black md:inline-flex"
        >
          CV
        </a>
        <button
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={onToggleTheme}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#d6c3a5] transition hover:bg-[#d6c3a5] hover:text-black md:inline-flex"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-full border border-white/10 p-3 text-[#f5f1e8] md:hidden"
        >
          <FiMenu />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 p-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl text-[#f5f1e8]">Ngawang</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 p-3 text-[#f5f1e8]"
              >
                <FiX />
              </button>
            </div>
            <div className="mt-16 grid gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-serif text-5xl text-[#f5f1e8]"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-[#d6c3a5]"
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const [role, setRole] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  useEffect(() => {
    const timer = window.setInterval(() => setRole((value) => (value + 1) % roles.length), 2100);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 md:px-8 lg:pt-40">
      <div className="cinema-glow left-[8%] top-[12%] bg-[#d6c3a5]/20" />
      <div className="cinema-glow right-[8%] top-[46%] bg-[#3f6f5f]/20" />
      <motion.div style={{ y, scale }} className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 text-xs uppercase tracking-[0.34em] text-[#d6c3a5]"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 70, filter: "blur(18px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl font-serif text-[clamp(4.6rem,13vw,12rem)] leading-[0.78] tracking-normal text-[#f5f1e8]"
          >
            Ngawang
            <span className="block text-[#d6c3a5]">Gyeltshen</span>
          </motion.h1>
          <div className="mt-8 flex min-h-12 flex-wrap items-center gap-4 text-lg text-[#b8b1a6] md:text-2xl">
            <span>Crafting immersive digital experiences as a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[role]}
                initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
                transition={{ duration: 0.45 }}
                className="hero-role font-serif italic text-[#f5f1e8]"
              >
                {roles[role]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#b8b1a6]">
            Experienced in blockchain, web development, and cybersecurity, I build secure digital products with code, motion, and modern design.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="#projects">
              View work <FiArrowUpRight />
            </MagneticButton>
            <MagneticButton href="#contact" className="bg-white/[0.03]">
              Contact me <FiMail />
            </MagneticButton>
          </div>
        </div>
        <div className="relative min-h-[560px] lg:min-h-[690px]">
          <motion.div
            initial={{ opacity: 0, rotate: -4, y: 60 }}
            animate={{ opacity: 1, rotate: -2, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="floating-card absolute left-1/2 top-8 h-[560px] w-[84%] -translate-x-1/2 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#111111]"
          >
            <Image src="/images/image.png" alt="Ngawang Gyeltshen portrait" fill priority className="object-cover" />
          </motion.div>
        </div>
      </motion.div>
      <a href="#about" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[#b8b1a6]">
        <span className="text-xs uppercase tracking-[0.28em]">Scroll</span>
        <FiArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-4xl text-center">
      <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#d6c3a5]">{eyebrow}</p>
      <h2 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92] text-[#f5f1e8]">{title}</h2>
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#111111]">
            <Image src="/images/ng1.jpg" alt="Ngawang Gyeltshen" width={900} height={1125} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -right-4 top-10 grid gap-3 md:-right-8">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]/70 p-5 shadow-2xl backdrop-blur-xl">
                <p className="font-serif text-3xl text-[#f5f1e8]">{stat.value}</p>
                <p className="mt-1 max-w-28 text-xs uppercase tracking-[0.16em] text-[#b8b1a6]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#d6c3a5]">About Me</p>
            <h2 className="font-serif text-[clamp(3rem,7vw,7.4rem)] leading-[0.9] text-[#f5f1e8]">
              Design taste with a security mind.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 grid gap-7 text-lg leading-8 text-[#b8b1a6] md:grid-cols-2">
            <p>
              I am an ambitious student at Gelpozhing College of Information Technology specializing in blockchain and cybersecurity.
            </p>
            <p>
              My work blends web engineering, Agile product thinking, and visual systems that feel refined without losing clarity.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 grid gap-4 rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl md:grid-cols-3">
            {["Blockchain", "Cybersecurity", "Frontend Motion"].map((item) => (
              <div key={item} className="border-b border-white/[0.08] pb-4 md:border-b-0 md:border-r md:pb-0 last:md:border-r-0">
                <p className="font-serif text-2xl text-[#f5f1e8]">{item}</p>
                <p className="mt-2 text-sm leading-6 text-[#b8b1a6]">Focused craft, clean systems, and modern product quality.</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InterfaceStudio() {
  return (
    <section className="relative overflow-hidden bg-[#111111] px-5 py-24 md:px-8 lg:py-32">
      <div className="cinema-glow right-[10%] top-[14%] bg-[#d6c3a5]/20" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
        <Reveal className="flex flex-col justify-between rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]/70 p-7 backdrop-blur-xl md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[#d6c3a5]">Interface Studio</p>
            <h2 className="mt-6 font-serif text-[clamp(3.6rem,8vw,8rem)] leading-[0.84] text-[#f5f1e8]">
              Designing systems in motion.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#b8b1a6]">
              A small look at how I think through digital products: story first, layout second, motion last, all tuned until the experience feels clear and alive.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {["UX", "Code", "Web3"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-xs uppercase tracking-[0.18em] text-[#b8b1a6]">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.div
            whileHover={{ y: -8 }}
            className="hero-ui-card relative min-h-[560px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#111111] p-5 shadow-2xl shadow-black/30 md:p-7"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d6c3a5]/20 blur-3xl" />
            <div className="studio-sweep" />
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-[#d6c3a5]">Creative Signal</p>
                <p className="mt-2 font-serif text-4xl leading-none text-[#f5f1e8]">Live Interface Lab</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#d6c3a5]">
                <span className="hero-pulse-dot" />
                Live
              </div>
            </div>

            <div className="relative mt-6 grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="studio-canvas min-h-[360px] rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]/50 p-5">
                <div className="studio-window studio-window-one">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="studio-window studio-window-two">
                  <span />
                  <span />
                  <span />
                </div>
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 210 160" aria-hidden="true">
                  <path className="studio-line" d="M30 118 C62 52 120 126 180 38" />
                  <circle className="studio-point" cx="30" cy="118" r="5" />
                  <circle className="studio-point studio-point-two" cx="180" cy="38" r="5" />
                </svg>
                <div className="absolute bottom-5 left-5 right-5 rounded-[18px] border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#d6c3a5]">Design pulse</p>
                  <div className="mt-3 flex h-20 items-end gap-2">
                    {[42, 68, 52, 86, 64, 92, 58, 78].map((height, index) => (
                      <span key={`${height}-${index}`} className="studio-bar" style={{ height: `${height}%`, animationDelay: `${index * 0.12}s` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  ["Story", "01", "What should the experience make clear?"],
                  ["Layout", "02", "Where should attention move first?"],
                  ["Motion", "03", "How should the interface feel alive?"],
                ].map(([label, value, note], index) => (
                  <div key={label} className="hero-row rounded-[20px] border border-white/[0.08] bg-white/[0.04] p-5" style={{ animationDelay: `${index * 0.35}s` }}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#b8b1a6]">{label}</span>
                      <span className="font-serif text-3xl leading-none text-[#f5f1e8]">{value}</span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-[#b8b1a6]">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState(skillTabs[0].id);
  const active = skillTabs.find((tab) => tab.id === activeTab) ?? skillTabs[0];
  const ActiveIcon = active.icon;

  return (
    <section id="skills" className="relative overflow-hidden bg-[#111111] px-5 py-24 md:px-8 lg:py-36">
      <div className="cinema-glow left-[4%] top-[22%] bg-[#8f3f4a]/20" />
      <SectionHeader eyebrow="Capabilities" title="Hard skills, soft skills, and the life around the work." />

      <Reveal className="mx-auto max-w-7xl">
        <div className="rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]/70 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
          <div className="grid gap-2 md:grid-cols-4">
            {skillTabs.map((tab) => {
              const Icon = tab.icon;
              const selected = tab.id === active.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative overflow-hidden rounded-[20px] border px-5 py-5 text-left transition duration-300 ${selected
                    ? "border-[#d6c3a5]/60 bg-[#d6c3a5] text-black"
                    : "border-white/[0.08] bg-white/[0.03] text-[#f5f1e8] hover:border-[#d6c3a5]/40"
                    }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <Icon className="text-2xl" />
                    <span className="text-xs uppercase tracking-[0.22em]">{tab.label}</span>
                  </span>
                  <span className={`mt-5 block font-serif text-2xl leading-none ${selected ? "text-black" : "text-[#f5f1e8]"}`}>
                    {tab.kicker}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(10px)" }}
              transition={{ duration: 0.45 }}
              className="mt-4 grid gap-5 rounded-[24px] border border-white/[0.08] bg-[#111111]/80 p-5 md:grid-cols-[0.85fr_1.15fr] md:p-8"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-7">
                <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#d6c3a5]/20 blur-3xl" />
                <ActiveIcon className="relative text-4xl text-[#d6c3a5]" />
                <p className="relative mt-8 text-xs uppercase tracking-[0.34em] text-[#d6c3a5]">{active.label}</p>
                <h3 className="relative mt-4 font-serif text-[clamp(2.7rem,5vw,5.8rem)] leading-[0.9] text-[#f5f1e8]">
                  {active.kicker}
                </h3>
                <p className="relative mt-6 max-w-md text-base leading-7 text-[#b8b1a6]">{active.summary}</p>
              </div>

              <div className="grid gap-3">
                {active.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="group rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]/60 p-5 transition hover:border-[#d6c3a5]/50 hover:bg-white/[0.04]"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-center gap-4">
                          <span className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-[#d6c3a5]">
                            <Icon />
                          </span>
                          <div>
                            <h4 className="font-serif text-2xl text-[#f5f1e8]">{skill.name}</h4>
                            <p className="mt-1 text-sm text-[#b8b1a6]">{skill.note}</p>
                          </div>
                        </div>
                        <span className="font-serif text-3xl text-[#d6c3a5]">{skill.level}</span>
                      </div>
                      <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.08]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.7, delay: 0.1 }}
                          className="h-full rounded-full bg-[#d6c3a5]"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="mx-auto mt-8 max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]/70 p-7 backdrop-blur-xl md:p-9">
            <p className="text-xs uppercase tracking-[0.34em] text-[#d6c3a5]">Beyond Code</p>
            <h3 className="mt-5 font-serif text-[clamp(2.8rem,6vw,6.6rem)] leading-[0.88] text-[#f5f1e8]">
              Taste, discipline, and human rhythm.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#b8b1a6]">
              These interests shape how I design: sport gives me pace, games sharpen systems thinking, travel gives me empathy, communication gives me clarity, and collecting perfume keeps my eye tuned to subtle detail.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {interests.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className={`relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-6 ${index >= 4 ? "sm:col-span-2" : ""
                    }`}
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d6c3a5]/10 blur-3xl" />
                  <Icon className="relative text-3xl text-[#d6c3a5]" />
                  <h4 className="relative mt-7 font-serif text-3xl text-[#f5f1e8]">{item.title}</h4>
                  <p className="relative mt-3 text-sm leading-6 text-[#b8b1a6]">{item.detail}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Projects() {
  const [featuredProject, ...galleryProjects] = projects;

  return (
    <section id="projects" className="relative overflow-hidden px-5 py-24 md:px-8 lg:py-36">
      <SectionHeader eyebrow="Selected Work" title="Asymmetrical builds with product gravity." />

      <Reveal className="mx-auto max-w-7xl">
        <motion.article
          whileHover={{ y: -6 }}
          className="project-feature relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#111111] p-4 md:p-5"
        >
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative z-10 flex flex-col justify-between rounded-[22px] border border-white/[0.08] bg-[#0a0a0a]/55 p-6 md:p-8 lg:p-10">
              <div>
                <div className="mb-7 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-[#d6c3a5] px-4 py-2 text-xs uppercase tracking-[0.18em] text-black">
                    Featured Case Study
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#d6c3a5]">
                    {featuredProject.category}
                  </span>
                </div>
                <h3 className="max-w-xl font-serif text-[clamp(3.2rem,6vw,6.8rem)] leading-[0.82] text-[#f5f1e8]">
                  {featuredProject.title}
                </h3>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#b8b1a6]">
                  {featuredProject.description} Built as a high-trust financial interface where clarity, auditability, and blockchain architecture matter as much as visual polish.
                </p>
              </div>

              <div className="mt-10 grid gap-3">
                {[
                  ["Focus", "Bond market"],
                  ["Layer", "Blockchain"],
                  ["Outcome", "Transparent trading"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[20px] border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#d6c3a5]">{label}</p>
                    <p className="mt-3 font-serif text-2xl leading-none text-[#f5f1e8]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rseb-showcase relative min-h-[560px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0a0a0a] p-4 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(214,195,165,0.22),transparent_28%),radial-gradient(circle_at_82%_34%,rgba(118,67,255,0.28),transparent_36%)]" />
              <div className="relative grid h-full gap-4 lg:grid-cols-[1fr_0.82fr]">
                <div className="rseb-market-panel relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#17130f] p-6">
                  <div className="absolute inset-0 opacity-70">
                    <div className="rseb-grid" />
                  </div>
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#d6c3a5]">Bhutan Digital</p>
                      <p className="mt-3 font-serif text-[clamp(2.8rem,5.4vw,6.8rem)] leading-[0.78] text-[#f5f1e8]">
                        Bond Market
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#d6c3a5]">
                      Live
                    </span>
                  </div>
                  <div className="relative mt-10 grid gap-3 sm:grid-cols-3">
                    {["Issue", "Trade", "Settle"].map((step, index) => (
                      <div key={step} className="rounded-[18px] border border-white/[0.08] bg-white/[0.05] p-4">
                        <p className="font-serif text-3xl text-[#f5f1e8]">0{index + 1}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#b8b1a6]">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-10 h-24 overflow-hidden rounded-[18px] border border-white/[0.08] bg-black/20 p-4">
                    <div className="rseb-chart-line" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end gap-2">
                      {[42, 70, 54, 86, 66, 92, 74, 96].map((height, index) => (
                        <span key={`${height}-${index}`} className="rseb-chart-bar" style={{ height: `${height}%`, animationDelay: `${index * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative grid gap-4">
                  <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.05] p-5 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#d6c3a5]">Stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {featuredProject.stack.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-[#f5f1e8]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative min-h-[250px] overflow-hidden rounded-[22px] border border-white/[0.08]">
                    <Image
                      src={featuredProject.image}
                      alt={`${featuredProject.title} preview`}
                      fill
                      priority
                      className="scale-125 object-cover object-left-top opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                  </div>
                  <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.05] p-5 backdrop-blur-xl">
                    <p className="font-serif text-3xl text-[#f5f1e8]">Transparent, fast, and traceable.</p>
                    <p className="mt-3 text-sm leading-6 text-[#b8b1a6]">A focused interface concept for moving bond workflows into a clearer digital market.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-5">
        {galleryProjects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.04}
            className={index === 4 ? "md:col-span-2 xl:col-span-1" : ""}
          >
            <motion.article
              whileHover={{ y: -8 }}
              className="project-card group relative flex h-full min-h-[430px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#111111]"
            >
              <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-7">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#d6c3a5] backdrop-blur">
                    {project.category}
                  </span>
                  {project.stack.slice(0, index < 2 ? 4 : 2).map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#f5f1e8] backdrop-blur">
                      {item}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-[clamp(2.2rem,4.2vw,4.8rem)] leading-none text-[#f5f1e8]">{project.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#b8b1a6] md:text-base">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#d6c3a5] px-4 py-3 text-xs uppercase tracking-[0.18em] text-black transition hover:scale-[1.03]"
                    >
                      Source code {project.code.includes("gitlab") ? <FiGitlab /> : <FiGithub />}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-xs uppercase tracking-[0.18em] text-[#b8b1a6] backdrop-blur">
                      Source link coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="bg-[#111111] px-5 py-24 md:px-8 lg:py-36">
      <SectionHeader eyebrow="Experience Timeline" title="A path shaped by learning, systems, and taste." />
      <div className="timeline mx-auto max-w-5xl">
        {timeline.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05} className="timeline-item relative grid gap-5 border-l border-white/[0.08] pb-12 pl-8 last:pb-0 md:grid-cols-[180px_1fr]">
            <div className="timeline-node absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[#d6c3a5] shadow-[0_0_32px_rgba(214,195,165,0.8)]" />
            <p className="text-sm uppercase tracking-[0.22em] text-[#d6c3a5]">{item.year}</p>
            <div className="rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]/70 p-6">
              <h3 className="font-serif text-3xl text-[#f5f1e8]">{item.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b8b1a6]">{item.place}</p>
              <p className="mt-4 leading-7 text-[#b8b1a6]">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-5 py-24 md:px-8 lg:py-36">
      <SectionHeader eyebrow="Signals" title="Quiet confidence from the people around the work." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.07}>
            <motion.article
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
              className="min-h-[300px] rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl"
            >
              <p className="font-serif text-3xl leading-tight text-[#f5f1e8]">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-10">
                <p className="text-[#d6c3a5]">{item.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#b8b1a6]">{item.role}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-24 md:px-8 lg:py-36">
      <div className="cinema-glow left-[12%] top-[20%] bg-[#d6c3a5]/20" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#d6c3a5]">Contact</p>
          <h2 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.82] text-[#f5f1e8]">
            Let&apos;s build something secure and cinematic.
          </h2>
          <div className="mt-10 grid gap-4 text-[#b8b1a6]">
            <a href="tel:+97517495130" className="flex items-center gap-4 transition hover:text-[#f5f1e8]">
              <FiPhone className="text-[#d6c3a5]" /> (+975) 17495130
            </a>
            <a href="mailto:ngawangg927@gmail.com" className="flex items-center gap-4 transition hover:text-[#f5f1e8]">
              <FiMail className="text-[#d6c3a5]" /> ngawangg927@gmail.com
            </a>
            <p className="flex items-center gap-4">
              <FiMapPin className="text-[#d6c3a5]" /> Thimphu, Bhutan
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" aria-label={social.label} className="rounded-full border border-white/10 p-4 text-[#f5f1e8] transition hover:border-[#d6c3a5] hover:bg-[#d6c3a5] hover:text-black">
                  <Icon />
                </a>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <form className="rounded-[24px] border border-white/[0.08] bg-[#111111]/80 p-5 shadow-2xl backdrop-blur-xl md:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm uppercase tracking-[0.2em] text-[#b8b1a6]">
                Name
                <input className="glow-input" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm uppercase tracking-[0.2em] text-[#b8b1a6]">
                Email
                <input className="glow-input" placeholder="you@example.com" type="email" />
              </label>
              <label className="grid gap-2 text-sm uppercase tracking-[0.2em] text-[#b8b1a6]">
                Project
                <textarea className="glow-input min-h-36 resize-none" placeholder="Tell me what you want to create" />
              </label>
              <button type="button" className="magnetic mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#d6c3a5] px-6 py-4 text-sm uppercase tracking-[0.22em] text-black transition hover:scale-[1.02]">
                Send message <FiArrowUpRight />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#b8b1a6] md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-3xl text-[#f5f1e8]">NG</p>
        <p>© 2026 Ngawang Gyeltshen. Crafted with motion, code, and intention.</p>
        <div className="flex gap-5">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" className="transition hover:text-[#d6c3a5]">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const lenis = useRef<Lenis | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    lenis.current = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    const raf = (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0.7 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            end: "top 45%",
            scrub: true,
          },
        },
      );
    });

    return () => {
      lenis.current?.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <main data-theme={theme} className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-[#f5f1e8]">
      <CustomCursor />
      <div className="grain" />
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
      <Hero />
      <About />
      <InterfaceStudio />
      <Skills />
      <Projects />
      <Journey />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
