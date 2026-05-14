import { type CSSProperties, type MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";

type Project = {
  title: string;
  category: string;
  role: string;
  year: string;
  image: string;
  summary: string;
  stack: string[];
  result: string;
  href?: string;
};

const navItems = ["Work", "About", "Skills", "Experience", "Contact"];

const heroTaglines = [
  {
    label: "Product systems",
    line: "Designing trust-heavy digital products for Web3, identity and verification.",
  },
  {
    label: "Creative engineering",
    line: "Building responsive interfaces with motion, hierarchy and production-minded code.",
  },
  {
    label: "Systems thinking",
    line: "Turning complex workflows into clear, cinematic product experiences.",
  },
  {
    label: "Bhutan based",
    line: "Creating from a local context with global product taste.",
  },
];

const fallbackImage = "/dist/images/1.webp";
const whatsappUrl = "https://wa.me/97517495130";

const projects: Project[] = [
  {
    title: "RSEB Bond Tokenization",
    category: "Blockchain Finance",
    role: "Product + Web3 Developer",
    year: "2026",
    image: "/images/optimized/RSEB-1200.webp",
    summary:
      "A digital bond market concept that explores tokenized ownership, transparent trading and clearer verification for regulated financial assets.",
    stack: ["Blockchain", "Tokenization", "Finance UI", "React"],
    result: "Clarified digital ownership and investor-facing trust signals.",
    href: "https://github.com/Mericle123/rseb_bond_tokenization",
  },
  {
    title: "Certifi",
    category: "Credential Verification",
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/optimized/certifi-1100.webp",
    summary:
      "A certificate verification platform using blockchain and IPFS so academic credentials can be issued, stored and validated securely.",
    stack: ["IPFS", "React", "Node", "Verification"],
    result: "Made academic records tamper-aware and easier to validate.",
    href: "https://gitlab.com/prj_group1/prj_group_certifi.git",
  },
  {
    title: "Keychain",
    category: "NFT Real Estate",
    role: "DApp Designer",
    year: "2025",
    image: "/images/optimized/realestate-1100.webp",
    summary:
      "A real-estate management concept where property listings and ownership workflows are supported by NFT-backed records.",
    stack: ["NFT", "Solidity", "UX", "React"],
    result: "Connected ownership visibility with practical property management.",
    href: "https://gitlab.com/dapp640315/real-estate.git",
  },
  {
    title: "Taxico",
    category: "Service Platform",
    role: "Agile Developer",
    year: "2024",
    image: "/images/optimized/taxico-1100.webp",
    summary:
      "A ride-service platform for booking, driver profiles, trip visibility, status tracking and service operations.",
    stack: ["React", "Node", "SQL", "Agile"],
    result: "Built a practical service workflow for riders, drivers and operators.",
    href: "https://gitlab.com/csf202_agile-software-engineering-practice/taxico",
  },
  {
    title: "Applymate",
    category: "Admissions UX",
    role: "UI/UX Designer",
    year: "2024",
    image: "/images/optimized/applymate-1100.webp",
    summary:
      "A student admissions interface that simplifies submissions, applicant tracking and review management.",
    stack: ["Figma", "React", "UI/UX", "Research"],
    result: "Reduced confusion inside a stressful academic application process.",
    href: "https://github.com/Pemacoder/ApplyMate",
  },
  {
    title: "Areo Bhutan",
    category: "Travel Product",
    role: "Frontend Developer",
    year: "2024",
    image: "/images/optimized/areo-1100.webp",
    summary:
      "A travel booking experience for flights, hotels and curated Bhutan services with clean browsing and decision confidence.",
    stack: ["Frontend", "Travel UX", "Booking", "Responsive"],
    result: "Made travel planning more visual, guided and direct.",
  },
];

const designSkills = [
  "UI/UX Design",
  "Interaction Design",
  "Design Systems",
  "Wireframing",
  "Prototyping",
  "User Research",
  "Information Architecture",
  "Motion Design",
];

const devSkills = [
  "Frontend Development",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Animation Libraries",
  "API Integration",
  "Responsive Systems",
];

const tools = ["Figma", "Framer", "Adobe Suite", "Notion", "GitHub", "VS Code"];

const softSkills = [
  "Leadership",
  "Communication",
  "Creative Thinking",
  "Collaboration",
  "Problem Solving",
  "Adaptability",
  "Strategic Thinking",
  "Attention to Detail",
  "Team Management",
  "Client Communication",
];

const education = [
  {
    years: "2023 - 2026",
    title: "BSc Computer Science",
    place: "Gelpozhing College of Information Technology",
    details:
      "Focused on blockchain, cybersecurity, software engineering, product design and full-stack web development.",
    coursework: ["Blockchain Systems", "Cybersecurity", "Agile Practice", "Web Engineering", "Database Systems"],
  },
  {
    years: "2017 - 2022",
    title: "Higher School",
    place: "Ugyen Academy, Punakha",
    details:
      "Built communication confidence, team discipline and early creative interest in technology and design.",
    coursework: ["Presentation", "Team Projects", "Digital Literacy"],
  },
  {
    years: "2010 - 2016",
    title: "Primary School",
    place: "Habesa, Wangdue",
    details:
      "Developed the curiosity, patience and self-learning mindset that later shaped my technical work.",
    coursework: ["Foundation Learning", "Communication", "Discipline"],
  },
];

const experience = [
  {
    years: "Since 2023",
    role: "Product Builder",
    company: "Hackathons, coursework and independent builds",
    body:
      "Designed and developed blockchain concepts, product interfaces, dashboards and service workflows across finance, credentials, real estate, admissions, transport and travel.",
    wins: ["Built multi-project portfolio", "Worked with agile teams", "Presented technical product ideas"],
  },
  {
    years: "2024 - 2026",
    role: "Frontend + UI/UX Developer",
    company: "Academic and collaborative projects",
    body:
      "Created responsive product screens, connected frontend workflows, shaped visual systems and improved interface clarity through iteration.",
    wins: ["React interfaces", "Figma prototypes", "Responsive systems"],
  },
  {
    years: "Ongoing",
    role: "Blockchain and Security Learner",
    company: "Personal specialization",
    body:
      "Exploring digital identity systems, verification workflows, tokenization concepts, trust-aware architectures and security-first product thinking through real project concepts.",
    wins: [
      "Digital identity systems",
      "Verification workflows",
      "Tokenization concepts",
      "Trust-aware architectures",
      "Tamper-resistant records",
      "Audit-aware product systems",
      "Authentication logic",
      "Web3 infrastructure exploration",
    ],
  },
];

const socials = [
  { label: "Instagram", short: "ig", href: "https://www.instagram.com/_n.gyeltshen/", icon: FiInstagram },
  { label: "LinkedIn", short: "in", href: "https://www.linkedin.com/in/ngawang-gyeltshen-46452025b/", icon: FiLinkedin },
  { label: "GitHub", short: "gh", href: "https://github.com/Mericle123", icon: FiGithub },
];

const portraits = Array.from({ length: 12 }, (_, index) => `/dist/images/${index + 1}.webp`);
const galleryItems = portraits.map((image, index) => ({
  image,
  number: String(index + 1).padStart(2, "0"),
  title: [
    "Focused Systems",
    "Mirror Study",
    "Framed Reflection",
    "Transit Portrait",
    "Low Light",
    "Soft Light",
    "Garden Frame",
    "Mountain Signal",
    "Night City",
    "Fog Study",
    "Quiet Moment",
    "Open Road",
  ][index],
}));

const galleryStories = [
  ["Focused, direct, systems-minded", "A frame about concentration and the quiet confidence behind product decisions.", "Centered portrait, close crop, low distraction, high eye contact."],
  ["Reflective, intimate, identity-led", "A mirror study that turns the camera back into a design object: observer, subject and interface in one frame.", "Vertical reflection, monochrome contrast, controlled personal presence."],
  ["Raw, casual, documentary", "A candid study of movement and self-documentation, useful as a human counterpoint to the more polished product work.", "Close perspective, natural distortion, personal texture."],
  ["In transit, practical, low-light", "A reminder that digital creators move between contexts, solving with whatever space they have.", "Confined interior, dark palette, directional light."],
  ["Nocturnal, cinematic, restrained", "Low light gives the archive a quieter rhythm, like an interface in dark mode waiting for input.", "Dark field, soft highlights, atmospheric framing."],
  ["Gentle, warm, observant", "A soft-light frame that brings warmth into the archive and balances the more technical identity of the portfolio.", "Warm ambient light, layered background, calm focal point."],
  ["Natural, grounded, open", "A garden frame introduces organic texture into an otherwise digital systems language.", "Green accents, natural depth, relaxed posture."],
  ["Expansive, Bhutan-rooted, calm", "A mountain signal: local context, scale, and the feeling of building from a specific place toward global quality.", "Outdoor space, distant depth, environmental storytelling."],
  ["Urban, late, electric", "Night city energy gives the archive a modern creative pulse, between product work and lived experience.", "Artificial light, dark contrast, city texture."],
  ["Soft, atmospheric, uncertain", "Fog becomes a metaphor for early-stage product thinking: shape appears slowly through iteration.", "Muted contrast, blurred horizon, quiet negative space."],
  ["Quiet, personal, still", "A pause in the archive, showing the reflective side of a systems thinker.", "Low movement, restrained contrast, personal scale."],
  ["Open, forward, directional", "A road frame for momentum: learning, shipping, and moving into the next version.", "Linear depth, outdoor light, forward visual pull."],
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
      <div className="marquee-track">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function imageFallback(event: React.SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget;
  if (img.src.endsWith(fallbackImage)) return;
  img.src = fallbackImage;
}

function CursorLight() {
  const lightRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const interactiveSelector = "a, button, .about-card, .process-step, .soft-card, .experience-panel, .orbital-thumb, .project-index-row";
    const textSelector = "p, h1, h2, h3, h4, input, textarea, [contenteditable='true']";
    const disabledSelector = "button:disabled, a[aria-disabled='true'], [data-disabled='true']";
    const precisionSelector = ".orbital-thumb, .project-preview, .gallery-orbital-section";
    const labels: Record<string, string> = {
      A: "Open",
      BUTTON: "View",
    };

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (lightRef.current) {
        lightRef.current.style.setProperty("--x", `${event.clientX}px`);
        lightRef.current.style.setProperty("--y", `${event.clientY}px`);
      }
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(tick);
    };

    const over = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const hit = target?.closest(interactiveSelector);
      const textHit = target?.closest(textSelector);
      const disabledHit = target?.closest(disabledSelector);
      const precisionHit = target?.closest(precisionSelector);
      cursorRef.current?.classList.toggle("is-hovering", Boolean(hit));
      cursorRef.current?.classList.toggle("is-gallery", Boolean(target?.closest(".orbital-thumb, .orbital-feature-card")));
      cursorRef.current?.classList.toggle("is-text", Boolean(textHit) && !hit);
      cursorRef.current?.classList.toggle("is-disabled", Boolean(disabledHit));
      cursorRef.current?.classList.toggle("is-precision", Boolean(precisionHit) && !hit);
      if (labelRef.current) labelRef.current.textContent = hit ? labels[hit.tagName] ?? "View" : "";
    };

    const leave = () => {
      cursorRef.current?.classList.remove("is-hovering");
      cursorRef.current?.classList.remove("is-gallery");
      cursorRef.current?.classList.remove("is-text");
      cursorRef.current?.classList.remove("is-disabled");
      cursorRef.current?.classList.remove("is-precision");
      if (labelRef.current) labelRef.current.textContent = "";
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    window.addEventListener("pointerout", leave);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerout", leave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={lightRef} className="cursor-light" />
      <div ref={cursorRef} className="custom-cursor">
        <i className="cursor-shape" />
        <i className="cursor-spinner" />
        <i className="cursor-crosshair" />
        <span ref={labelRef} />
      </div>
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("Work");

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 220);
      last = y;

      const sections = navItems.map((item) => document.getElementById(item.toLowerCase()));
      let current: HTMLElement | null = null;
      for (const section of sections) {
        if (section && section.offsetTop - 160 <= y) current = section;
      }
      if (current) setActive(current.id[0].toUpperCase() + current.id.slice(1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header animate={{ y: hidden ? -120 : 0 }} transition={{ duration: 0.35 }} className="fixed inset-x-0 top-0 z-50 px-4 py-5 md:px-8">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl md:px-6">
        <a href="#home" aria-label="NG home" className="brand-mark">
          <span>N</span><span>G</span>
        </a>
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`nav-pill ${active === item ? "is-active" : ""}`}>
              {item}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <a href="/docs/ngawang-gyeltshen-cv.pdf" className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58 transition hover:text-white">
            CV
          </a>
          <a href="#contact" className="rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#ff4d2a] hover:text-white">
            Let&apos;s talk
          </a>
        </div>
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid size-11 place-items-center rounded-full border border-white/10 text-white lg:hidden">
          <FiMenu />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#060606] p-5 text-white lg:hidden">
            <div className="flex items-center justify-between">
              <span className="brand-mark"><span>N</span><span>G</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid size-12 place-items-center rounded-full border border-white/15">
                <FiX />
              </button>
            </div>
            <div className="mt-16 grid gap-4">
              {navItems.map((item) => (
                <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`} className="text-6xl font-black uppercase tracking-[-0.08em]">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const [tagline, setTagline] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const drift = useTransform(scrollYProgress, [0, 1], [0, -90]);

  useEffect(() => {
    const textTimer = window.setInterval(() => setTagline((value) => (value + 1) % heroTaglines.length), 2600);
    return () => window.clearInterval(textTimer);
  }, []);

  return (
    <section id="home" ref={ref} className="hero-section relative min-h-screen overflow-hidden px-4 pb-10 pt-28 md:px-8 md:pt-32">
      <motion.div style={{ y: drift, scale }} className="hero-cinematic-field" />
      <motion.div style={{ y }} className="hero-light-sweep" />
      <motion.div style={{ y: drift }} className="hero-grid-field" />
      <motion.div style={{ y, scale }} className="hero-orb hero-orb-one" />
      <motion.div style={{ y: drift }} className="hero-orb hero-orb-two" />
      <div className="grain" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1500px] gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div className="self-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-7 flex flex-wrap items-center gap-4">
            <span className="status-dot" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-white/58">Available for projects</span>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="mb-5 text-lg font-semibold text-white/65">
            Ngawang Gyeltshen / Product Designer + Web Systems Developer
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 60, filter: "blur(16px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.12 }} className="max-w-6xl text-[clamp(3.4rem,8.4vw,9.4rem)] font-black leading-[0.86] tracking-[-0.09em] text-white">
            ELITE DIGITAL PRODUCT SYSTEMS.
          </motion.h1>
          <div className="mt-8 grid max-w-4xl gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <AnimatePresence mode="wait">
              <motion.p key={tagline} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.45 }} className="max-w-2xl text-lg font-medium leading-8 text-white/64 md:text-xl">
                {heroTaglines[tagline].line}
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="hero-cta primary">
                View work <FiArrowDown />
              </a>
              <a href="#contact" className="hero-cta">
                Contact <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        <motion.aside initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.25 }} className="hero-side-panel">
          <div className="border-b border-white/12 pb-7">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#ff4d2a]">{heroTaglines[tagline].label}</p>
            <p className="mt-4 text-2xl font-bold leading-tight text-white">Designing interfaces for finance, identity, verification and modern Web3 systems.</p>
          </div>
          <div className="grid gap-3 border-b border-white/12 py-7">
            {["Website Design", "Product Design", "Branding & Strategy", "Frontend Systems"].map((item) => (
              <span key={item} className="text-lg font-semibold text-white/42">{item}</span>
            ))}
          </div>
          <div className="pt-7">
            <a href="#contact" className="group flex items-center justify-between text-lg font-bold text-white underline underline-offset-4">
              How can I help? <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function Work() {
  const [active, setActive] = useState(projects[0]);
  const activeIndex = projects.findIndex((project) => project.title === active.title);

  return (
    <section id="work" className="section-shell px-4 py-24 md:px-8 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-12 grid gap-7 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">Featured Projects</p>
            <h2 className="section-title">Interactive project index with live previews.</h2>
          </div>
          <p className="self-end text-lg font-medium leading-8 text-white/56">
            Hover or keyboard-focus a project to update the preview instantly. Each preview image is loaded from the project assets and transitions with cinematic scale, blur and depth.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <Reveal>
            <div className="project-index">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onMouseEnter={() => setActive(project)}
                  onFocus={() => setActive(project)}
                  className={`project-index-row ${active.title === project.title ? "is-active" : ""}`}
                >
                  <span className="project-number">{project.year}</span>
                  <span className="min-w-0">
                    <span className="block text-[clamp(2rem,4vw,4.8rem)] font-black leading-[0.9] tracking-[-0.075em] text-white">{project.title}</span>
                    <span className="mt-3 block max-w-2xl text-sm leading-6 text-white/46 md:text-base">{project.summary}</span>
                    <span className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="tech-chip">{item}</span>
                      ))}
                    </span>
                  </span>
                  <span className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.role}</span>
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white underline underline-offset-4">
                        Source {project.href.includes("gitlab") ? <FiGitlab /> : <FiGithub />}
                      </a>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-first lg:order-none">
            <div className="project-preview">
              <div className="absolute left-6 top-6 z-10 rounded-full border border-white/12 bg-black/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={`${active.title} preview`}
                  loading="eager"
                  decoding="async"
                  onError={imageFallback}
                  initial={{ opacity: 0, scale: 1.08, filter: "blur(18px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(18px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/58 to-transparent p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ff4d2a]">Result</p>
                <p className="mt-3 max-w-2xl text-xl font-bold leading-7 text-white">{active.result}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState("Research");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const depthA = useTransform(scrollYProgress, [0, 1], [-54, 54]);
  const depthB = useTransform(scrollYProgress, [0, 1], [42, -42]);
  const paragraphs = [
    "I’m Ngawang Gyeltshen, a Computer Science graduate from GCIT focused on product design, web systems, and modern digital experiences. I care about digital experiences that make complex systems feel understandable and trustworthy.",
    "My design mindset is simple: strong hierarchy first, motion with purpose, and interfaces that help people make decisions. I enjoy building products where identity, verification, ownership and transparency matter.",
    "My career direction is to become a high-level product designer and systems creator who can bridge design, engineering and emerging digital trust infrastructure.",
  ];
  const processSteps = ["Research", "Prototype", "Build", "Refine", "Ship", "Learn"];

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="about" ref={ref} className="about-section section-shell overflow-hidden px-4 py-24 md:px-8 lg:py-36">
      <motion.div style={{ y: depthA }} className="about-depth about-depth-one" />
      <motion.div style={{ y: depthB }} className="about-depth about-depth-two" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.84fr_1.16fr]">
        <Reveal className="about-story-sticky">
          <p className="eyebrow">About</p>
          <h2 className="section-title">A systems thinker with a designer’s eye and a developer’s discipline.</h2>
          <div className="about-signal">
            <span />
            <p>Product thinking / interface systems / digital trust</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="about-card about-card-cinematic" onMouseMove={handleMove}>
            <span className="about-card-light" />
            <div className="grid gap-6 text-lg font-medium leading-8 text-white/64 md:text-xl md:leading-9">
              {paragraphs.map((copy, index) => (
                <motion.p
                  key={copy}
                  initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.54, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={index === 0 ? "about-lead-copy" : ""}
                >
                  {copy}
                </motion.p>
              ))}
            </div>
            <div className="process-timeline">
              {processSteps.map((step, index) => (
                <motion.button
                  key={step}
                  type="button"
                  onMouseEnter={() => setActiveStep(step)}
                  onFocus={() => setActiveStep(step)}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.38, delay: index * 0.045 }}
                  className={`process-step ${activeStep === step ? "is-active" : ""}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                  <em>{["Listen", "Shape", "Engineer", "Tune", "Launch", "Improve"][index]}</em>
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillGroup({ title, items, accent, index }: { title: string; items: string[]; accent: string; index: number }) {
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
    event.currentTarget.style.setProperty("--accent", accent);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotateX: -8, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, rotateX: 2, rotateY: index === 1 ? 0 : index === 0 ? -2 : 2 }}
      onMouseMove={handleMove}
      className="skill-group skill-group-premium"
      style={{ "--accent": accent } as CSSProperties}
    >
      <div className="skill-card-glow" />
      <div className="relative z-10">
        <div className="mb-8 flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/32">System 0{index + 1}</p>
            <h3 className="mt-3 text-4xl font-black tracking-[-0.06em] text-white">{title}</h3>
          </div>
          <span className="skill-core" />
        </div>
        <div className="skill-orbit-line" />
        <div className="grid gap-3">
          {items.map((item, index) => (
            <motion.button
              type="button"
              key={item}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: index * 0.04 }}
              whileHover={{ x: 10, scale: 1.015 }}
              className="skill-pill"
            >
              <span className="skill-icon">{item.slice(0, 2)}</span>
              <span className="skill-name">{item}</span>
              <span className="skill-meter">
                <span style={{ width: `${88 - (index % 4) * 7}%` }} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Skills() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const depthOne = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const depthTwo = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section id="skills" ref={ref} className="skills-showcase section-shell overflow-hidden px-4 py-24 md:px-8 lg:py-36">
      <motion.div style={{ y: depthOne }} className="skills-depth skills-depth-one" />
      <motion.div style={{ y: depthTwo }} className="skills-depth skills-depth-two" />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Skills Stack</p>
            <h2 className="section-title max-w-5xl">A modular stack for product design, development and motion.</h2>
          </div>
          <div className="skills-command-panel">
            <span className="status-dot" />
            <p>Hover the systems. Each module responds with light, motion, depth, and confidence indicators.</p>
          </div>
        </Reveal>
        <Reveal className="mb-8">
          <div className="skill-cloud">
            {[...designSkills.slice(0, 4), ...devSkills.slice(0, 4), ...tools].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                whileHover={{ y: -6, scale: 1.08 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          <SkillGroup title="Product Design" items={designSkills} accent="#ff4d2a" index={0} />
          <SkillGroup title="Development" items={devSkills} accent="#37d6ff" index={1} />
          <SkillGroup title="Tools" items={tools} accent="#b987ff" index={2} />
        </div>
        <Reveal className="mt-10">
          <Marquee items={["Design Systems", "Motion UI", "React", "Figma", "Web3 Interfaces", "Responsive Systems"]} reverse />
        </Reveal>
      </div>
    </section>
  );
}

function SoftSkills() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(softSkills[0]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const depth = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section ref={ref} className="soft-skills-section section-shell overflow-hidden px-4 py-24 md:px-8 lg:py-36">
      <motion.div style={{ y: depth }} className="soft-depth-light" />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <Reveal className="mb-12 grid gap-7 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Soft Skills</p>
            <h2 className="section-title">Human skills that make product work move.</h2>
          </div>
          <p className="self-end text-lg font-medium leading-8 text-white/56">
            The technical work matters, but good products also need clarity, taste, communication and calm collaboration.
          </p>
        </Reveal>
        <div className="soft-interaction-shell">
          <div className="soft-active-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(14px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <p>Active human system</p>
                <h3>{active}</h3>
                <span>Communication, taste, calm decision-making, and ownership become product quality when the pressure rises.</span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="soft-grid">
          {softSkills.map((skill, index) => (
            <motion.button
              key={skill}
              type="button"
              onMouseMove={handleMove}
              onMouseEnter={() => setActive(skill)}
              onFocus={() => setActive(skill)}
              initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-70px" }}
              whileHover={{ y: -10, scale: 1.025, rotateX: 2 }}
              transition={{ duration: 0.42, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
              className={`soft-card ${active === skill ? "is-active" : ""}`}
            >
              <span className="soft-card-glow" />
              <span className="soft-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{skill}</strong>
              <em>{["Lead", "Align", "Create", "Build", "Solve"][index % 5]}</em>
            </motion.button>
          ))}
          </div>
        </div>
      </div>
      <Marquee items={softSkills} reverse />
    </section>
  );
}

function EducationExperience() {
  const [open, setOpen] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const journeyY = useTransform(scrollYProgress, [0, 1], [-44, 44]);

  return (
    <section id="experience" ref={ref} className="journey-section section-shell overflow-hidden px-4 py-24 md:px-8 lg:py-36">
      <motion.div style={{ y: journeyY }} className="journey-depth" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal className="journey-sticky">
          <p className="eyebrow">Education / Experience</p>
          <h2 className="section-title">A path through school, systems and product builds.</h2>
          <p className="journey-copy">A growth timeline across computer science, product interfaces, Web3 concepts, teamwork and trust-focused systems.</p>
        </Reveal>
        <div className="grid gap-12">
          <Reveal>
            <div className="timeline">
              {education.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 34, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.48, delay: index * 0.08 }}
                  className="timeline-item"
                >
                  <span className="timeline-dot" />
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ff4d2a]">{item.years}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">{item.title}</h3>
                  <p className="mt-2 text-white/48">{item.place}</p>
                  <p className="mt-4 leading-7 text-white/58">{item.details}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span key={course} className="tech-chip">{course}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="experience-panels">
              {experience.map((item, index) => (
                <motion.button
                  key={item.role}
                  type="button"
                  initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.42, delay: index * 0.055 }}
                  onClick={() => setOpen(index)}
                  className={`experience-panel ${item.role.includes("Blockchain") ? "security-panel" : ""} ${open === index ? "is-open" : ""}`}
                >
                  {item.role.includes("Blockchain") && (
                    <>
                      <span className="security-grid" />
                      <span className="security-orbit" />
                    </>
                  )}
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/35">{item.years}</span>
                  <span className="mt-3 block text-left text-3xl font-black tracking-[-0.04em] text-white">{item.role}</span>
                  <span className="mt-2 block text-left text-white/48">{item.company}</span>
                  <AnimatePresence>
                    {open === index && (
                      <motion.span initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="block overflow-hidden">
                        <span className="mt-5 block text-left leading-7 text-white/62">{item.body}</span>
                        {item.role.includes("Blockchain") && (
                          <span className="security-focus-grid">
                            {["Identity", "Verification", "Tokenization", "Trust", "Audit", "Authentication"].map((label) => (
                              <span key={label}>{label}</span>
                            ))}
                          </span>
                        )}
                        <span className="mt-4 flex flex-wrap gap-2">
                          {item.wins.map((win) => (
                            <span key={win} className="tech-chip">{win}</span>
                          ))}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GalleryFlowItem({
  item,
  index,
  active,
  onActivate,
}: {
  item: (typeof galleryItems)[number];
  index: number;
  active: boolean;
  onActivate: (item: (typeof galleryItems)[number]) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [92, 0, -92]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 ? 4 : -4, 0, index % 2 ? -3 : 3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.22, 1, 1, 0.28]);
  const blur = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={handleMove}
      onMouseEnter={() => onActivate(item)}
      onFocus={() => onActivate(item)}
      onViewportEnter={() => onActivate(item)}
      style={{ y, rotate, scale, opacity, filter: blur }}
      className={`gallery-flow-item ${active ? "is-active" : ""}`}
    >
      <span className="gallery-flow-copy">
        <span>{item.number}</span>
        <strong>{item.title}</strong>
        <em>Scroll-linked frame / image archive</em>
      </span>
      <span className="gallery-flow-image">
        <img src={item.image} alt={item.title} loading={index < 2 ? "eager" : "lazy"} decoding="async" onError={imageFallback} />
      </span>
    </motion.button>
  );
}

function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(galleryItems[0]);
  const [storyOpen, setStoryOpen] = useState(false);
  const activeIndex = galleryItems.findIndex((item) => item.image === active.image);
  const story = galleryStories[Math.max(activeIndex, 0)];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const fieldY = useTransform(scrollYProgress, [0, 1], [-34, 34]);
  const fieldScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  const getOrbitStyle = (index: number) => {
    const angle = (index / galleryItems.length) * Math.PI * 2 - Math.PI / 2;
    const x = 50 + Math.cos(angle) * 42;
    const y = 50 + Math.sin(angle) * 38;
    const tilt = Math.sin(angle) * 16;
    return {
      "--x": `${x}%`,
      "--y": `${y}%`,
      "--tilt": `${tilt}deg`,
      "--delay": `${index * -0.35}s`,
    } as CSSProperties;
  };

  const showNextStory = () => {
    const next = galleryItems[(activeIndex + 1) % galleryItems.length];
    setActive(next);
  };

  return (
    <section id="gallery" ref={ref} className="gallery-orbital-section section-shell overflow-hidden border-y border-white/10 px-4 py-24 md:px-8 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="gallery-orbital-heading mb-12 grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="section-title">Orbital visual exhibition.</h2>
          </div>
          <p className="self-end text-lg font-medium leading-8 text-white/56">
            A curated circular image system inspired by digital exhibition interfaces. Hover the orbiting frames to shift the center story with quiet cinematic motion.
          </p>
        </Reveal>

        <motion.div style={{ y: fieldY, scale: fieldScale }} className="orbital-gallery-stage">
          <div className="orbital-rings" />
          <div className="orbital-axis orbital-axis-left">Curated Frames</div>
          <div className="orbital-axis orbital-axis-right">Personal Archive</div>

          <motion.article layout className="orbital-feature-card">
            <div className="orbital-feature-media">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  loading="eager"
                  decoding="async"
                  onError={imageFallback}
                  initial={{ opacity: 0, scale: 1.08, filter: "blur(16px) grayscale(0.75)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px) grayscale(0.05)" }}
                  exit={{ opacity: 0, scale: 0.96, filter: "blur(16px) grayscale(0.9)" }}
                  transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            </div>
            <div className="orbital-feature-copy">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{active.number} / {galleryItems.length.toString().padStart(2, "0")}</p>
                  <h3>{active.title}</h3>
                  <span>A cinematic frame from the personal archive, composed as a curated digital exhibition piece.</span>
                </motion.div>
              </AnimatePresence>
              <button type="button" onClick={() => setStoryOpen(true)} className="orbital-cta">
                View story <FiArrowUpRight />
              </button>
            </div>
          </motion.article>

          <div className="orbital-thumbs" aria-label="Gallery image selector">
            {galleryItems.map((item, index) => (
              <motion.button
                key={item.image}
                type="button"
                onMouseEnter={() => setActive(item)}
                onFocus={() => setActive(item)}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                style={getOrbitStyle(index)}
                className={`orbital-thumb ${active.image === item.image ? "is-active" : ""}`}
              >
                <img src={item.image} alt={item.title} loading={index < 4 ? "eager" : "lazy"} decoding="async" onError={imageFallback} />
                <span>{item.number}</span>
              </motion.button>
            ))}
          </div>

          <div className="orbital-mobile-strip">
            {galleryItems.map((item) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActive(item)}
                onFocus={() => setActive(item)}
                className={active.image === item.image ? "is-active" : ""}
              >
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" onError={imageFallback} />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {storyOpen && (
          <motion.div
            className="story-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button type="button" aria-label="Close story" className="story-backdrop" onClick={() => setStoryOpen(false)} />
            <motion.article
              className="story-panel"
              initial={{ opacity: 0, y: 34, scale: 0.96, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(14px)" }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="story-media">
                <img src={active.image} alt={active.title} onError={imageFallback} />
              </div>
              <div className="story-content">
                <p className="story-kicker">{active.number} / Visual Story</p>
                <h3>{active.title}</h3>
                <p className="story-lead">{story[1]}</p>
                <div className="story-grid">
                  <div>
                    <span>Mood</span>
                    <strong>{story[0]}</strong>
                  </div>
                  <div>
                    <span>Composition</span>
                    <strong>{story[2]}</strong>
                  </div>
                  <div>
                    <span>Portfolio role</span>
                    <strong>Human texture inside a technical product-design identity.</strong>
                  </div>
                </div>
                <div className="story-actions">
                  <button type="button" onClick={() => setStoryOpen(false)} className="orbital-cta secondary">Back to orbit</button>
                  <button type="button" onClick={showNextStory} className="orbital-cta">Next story <FiArrowUpRight /></button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/*
function GalleryOld() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(galleryItems[0]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const previewY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const previewRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);
  const counterY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="gallery-old" ref={ref} className="gallery-stack-section section-shell overflow-hidden border-y border-white/10 px-4 py-24 md:px-8 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="gallery-flow-layout">
          <div className="gallery-cinema-shell">
            <motion.div style={{ y: previewY, rotate: previewRotate }} className="gallery-sticky-preview">
              <div className="gallery-preview-shell">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.image}
                    src={active.image}
                    alt={active.title}
                    loading="eager"
                    decoding="async"
                    onError={imageFallback}
                    initial={{ opacity: 0, scale: 1.12, filter: "blur(22px) grayscale(0.65)" }}
                    animate={{ opacity: 1, scale: 1.04, filter: "blur(0px) grayscale(0.08)" }}
                    exit={{ opacity: 0, scale: 0.96, filter: "blur(18px) grayscale(0.8)" }}
                    transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="gallery-preview-vignette" />
                <div className="gallery-preview-copy">
                  <p>{active.number}</p>
                  <h3>{active.title}</h3>
                  <span>Personal frame / cinematic archive</span>
                </div>
              </div>
              <motion.div style={{ y: counterY }} className="gallery-counter">
                {active.number} / {galleryItems.length.toString().padStart(2, "0")}
              </motion.div>
            </motion.div>
          </div>

          <div className="gallery-flow-list">
            {galleryItems.map((item, index) => (
              <GalleryFlowItem
                key={item.image}
                item={item}
                index={index}
                active={active.image === item.image}
                onActivate={setActive}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
*/

function Footer() {
  return (
    <footer id="contact" className="footer-section relative overflow-hidden px-4 py-24 md:px-8 lg:py-36">
      <img src="/dist/images/12.webp" alt="" onError={imageFallback} className="footer-bg" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="max-w-5xl text-[clamp(4rem,11vw,12rem)] font-black leading-[0.8] tracking-[-0.09em] text-white">
            LET&apos;S BUILD SOMETHING HIGH TRUST.
          </h2>
          <div className="mt-8 text-[#ff4d2a]">
            <Marquee items={["ngawangg927@gmail.com", "(+975) 17495130", "Thimphu Bhutan"]} />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="footer-card">
          <div className="status-line">
            <span className="status-dot" />
            <span>Available for selected collaborations</span>
          </div>
          <div className="mt-8 grid gap-5 text-lg font-semibold text-white/70">
            <a href="mailto:ngawangg927@gmail.com" className="contact-link"><FiMail /> ngawangg927@gmail.com</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-link"><FiPhone /> (+975) 17495130 / WhatsApp</a>
            <span className="contact-link"><FiMapPin /> Thimphu, Bhutan</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="social-button">
                  <Icon /> {social.label}
                </a>
              );
            })}
          </div>
          <p className="mt-12 text-sm text-white/38">(c) 2026 Ngawang Gyeltshen. Designed for digital trust.</p>
        </Reveal>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.075, wheelMultiplier: 0.85, touchMultiplier: 1.15 });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (event: globalThis.MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const section = document.querySelector(id);
      if (!section) return;
      event.preventDefault();
      lenis.scrollTo(section as HTMLElement, {
        offset: -78,
        duration: 1.35,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      window.history.pushState(null, "", id);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const preloadedImages = useMemo(() => [projects[0].image, galleryItems[0].image], []);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {preloadedImages.map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}
      <CursorLight />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Skills />
      <SoftSkills />
      <EducationExperience />
      <Gallery />
      <Footer />
    </main>
  );
}
