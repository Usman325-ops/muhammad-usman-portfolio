"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Braces,
  Code2,
  Download,
  Gamepad2,
  GitBranch,
  Grid3X3,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Play,
  Send,
  SkipBack,
  SkipForward,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const navItems = ["About", "Skills", "Projects", "Resume", "Contact"];

const skills = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { title: "Development", items: ["Responsive UI", "REST APIs", "Git", "GitHub"] },
  { title: "Exploring", items: ["Node.js", "MongoDB", "AI Automation", "Data"] },
];

const projects = [
  {
    number: "01",
    title: "Student Dashboard",
    description:
      "A responsive React dashboard where students can view and manage records through a clean CRUD workflow.",
    tags: ["React.js", "CSS", "CRUD", "Responsive"],
    href: "https://github.com/Usman325-ops/Student-Dashboard",
    linkLabel: "View repository",
    preview: "dashboard",
  },
  {
    number: "02",
    title: "Product Catalog",
    description:
      "A full-stack product experience with a React interface, reusable UI patterns, API integration and a separate backend.",
    tags: ["React.js", "REST API", "Node.js", "MongoDB"],
    href: "https://github.com/Usman325-ops/product-catalog-frontend",
    secondaryHref: "https://github.com/Usman325-ops/product-catalog-backend",
    linkLabel: "Frontend code",
    preview: "catalog",
  },
  {
    number: "03",
    title: "JavaScript Music Player",
    description:
      "A responsive browser music player with play, pause, next and previous controls, a live progress bar, volume control, playlist and autoplay.",
    tags: ["HTML5", "CSS3", "JavaScript", "Audio API"],
    href: "https://usman325-ops.github.io/javascript-music-player/",
    secondaryHref: "https://github.com/Usman325-ops/javascript-music-player",
    secondaryLabel: "View repository",
    linkLabel: "Live demo",
    preview: "music",
  },
  {
    number: "04",
    title: "Interactive Image Gallery",
    description:
      "A responsive image gallery featuring category filters, smooth hover effects, a lightbox view and next/previous image navigation.",
    tags: ["HTML5", "CSS Grid", "JavaScript", "Lightbox"],
    href: "https://lenscape-gallery.usmanramzan1532005.chatgpt.site",
    linkLabel: "Live demo",
    preview: "gallery",
  },
  {
    number: "05",
    title: "Prism Break Game",
    description:
      "A colourful Unity 2D brick-breaker game with animated levels, sound effects, a lives system and dedicated win and game-over screens.",
    tags: ["Unity 2D", "C#", "Game Logic", "Animations"],
    href: "https://github.com/Usman325-ops/Prism-Break",
    linkLabel: "View repository",
    preview: "prism",
  },
  {
    number: "06",
    title: "Neural Chat App",
    description:
      "A real-time messaging application with a responsive chat interface, user authentication, live communication and message persistence.",
    tags: ["React.js", "Socket.io", "Node.js", "MongoDB"],
    href: "https://github.com/Usman325-ops/Neural-Chat",
    linkLabel: "View repository",
    preview: "chat",
  },
  {
    number: "07",
    title: "NovaFlow Landing Page",
    description:
      "A polished and responsive productivity landing page with a sticky navigation bar, strong hero section, feature highlights and mobile-friendly layouts.",
    tags: ["HTML5", "CSS3", "Responsive", "Landing Page"],
    href: "https://usman325-ops.github.io/novaflow-landing/",
    secondaryHref: "https://github.com/Usman325-ops/novaflow-landing",
    linkLabel: "Live demo",
    secondaryLabel: "View repository",
    preview: "novaflow",
  },
  {
    number: "08",
    title: "Temperature Converter",
    description:
      "An interactive temperature converter for Celsius, Fahrenheit and Kelvin with real-time validation and absolute-zero edge-case handling.",
    tags: ["HTML5", "CSS3", "JavaScript", "Validation"],
    href: "https://usman325-ops.github.io/temperature-converter/",
    secondaryHref: "https://github.com/Usman325-ops/temperature-converter",
    linkLabel: "Live demo",
    secondaryLabel: "View repository",
    preview: "temperature",
  },
];

function ProjectPreview({ type }: { type: string }) {
  if (type === "novaflow") {
    return (
      <div className="project-visual novaflow-preview" aria-hidden="true">
        <div className="nova-nav"><strong>NOVAFLOW</strong><span>FEATURES&nbsp;&nbsp; ABOUT&nbsp;&nbsp; START</span></div>
        <div className="nova-copy"><small>FOCUS. FLOW. FINISH.</small><b>Make space for<br />your best work.</b><i>START FREE →</i></div>
        <div className="nova-orb"><span /></div>
      </div>
    );
  }

  if (type === "temperature") {
    return (
      <div className="project-visual temperature-preview" aria-hidden="true">
        <div className="temp-top"><span>°</span><strong>TEMPERATURE<br />CONVERTER</strong></div>
        <div className="temp-input"><b>24</b><span>CELSIUS&nbsp; °C</span></div>
        <div className="temp-results"><div><b>75.2°</b><span>FAHRENHEIT</span></div><div><b>297.15</b><span>KELVIN</span></div></div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="project-visual dashboard-preview" aria-hidden="true">
        <div className="preview-sidebar">
          <span className="preview-logo" />
          <span />
          <span />
          <span />
        </div>
        <div className="preview-content">
          <div className="preview-topline">
            <span />
            <i />
          </div>
          <div className="metric-row">
            <div><b>24</b><span>Students</span></div>
            <div><b>92%</b><span>Attendance</span></div>
            <div><b>08</b><span>Courses</span></div>
          </div>
          <div className="preview-table">
            <span /><span /><span />
          </div>
        </div>
      </div>
    );
  }

  if (type === "catalog") {
    return (
      <div className="project-visual catalog-preview" aria-hidden="true">
        <div className="catalog-head"><span>SHOP / 04</span><i /></div>
        <div className="catalog-grid">
          {["#d6ff72", "#83a8ff", "#f0f0e8"].map((color, index) => (
            <div className="product-mini" key={color}>
              <div style={{ backgroundColor: color }}><span>{index + 1}</span></div>
              <i /><small />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "music") {
    return (
      <div className="project-visual music-preview" aria-hidden="true">
        <div className="music-topline">
          <Music2 size={18} />
          <span>NOW PLAYING</span>
          <i>02:48</i>
        </div>
        <div className="record-shell">
          <div className="record-disc">
            <div><Music2 size={20} /></div>
          </div>
        </div>
        <div className="track-copy">
          <strong>Midnight Code</strong>
          <span>Frontend Sessions</span>
        </div>
        <div className="music-progress"><span /></div>
        <div className="music-controls">
          <SkipBack size={18} fill="currentColor" />
          <div><Play size={19} fill="currentColor" /></div>
          <SkipForward size={18} fill="currentColor" />
        </div>
      </div>
    );
  }

  if (type === "gallery") {
    return (
      <div className="project-visual gallery-preview" aria-hidden="true">
        <div className="gallery-bar">
          <span><Grid3X3 size={14} /> GALLERY / 08</span>
          <div><i>ALL</i><i>NATURE</i><i>URBAN</i></div>
        </div>
        <div className="gallery-mosaic">
          <div className="gallery-tile tile-one"><span>01</span></div>
          <div className="gallery-tile tile-two"><span>02</span></div>
          <div className="gallery-tile tile-three"><span>03</span></div>
          <div className="gallery-tile tile-four"><span>04</span></div>
          <div className="gallery-tile tile-five"><span>05</span></div>
        </div>
        <div className="gallery-cursor"><ArrowUpRight size={16} /></div>
      </div>
    );
  }

  if (type === "prism") {
    return (
      <div className="project-visual prism-preview" aria-hidden="true">
        <div className="prism-status">
          <span><Gamepad2 size={15} /> PRISM BREAK</span>
          <div><i>SCORE 00420</i><i>♥ ♥ ♥</i></div>
        </div>
        <div className="brick-field">
          {[...Array(28)].map((_, index) => <span key={index} />)}
        </div>
        <div className="game-ball" />
        <div className="game-paddle" />
        <div className="game-level">LEVEL / 04</div>
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="project-visual chat-preview" aria-hidden="true">
        <aside className="chat-sidebar">
          <div className="chat-mark"><Bot size={18} /></div>
          <span className="online" />
          <span />
          <span />
          <span />
        </aside>
        <div className="chat-window">
          <div className="chat-header">
            <span><MessageCircle size={15} /> Neural Chat</span>
            <i>ONLINE</i>
          </div>
          <div className="chat-messages">
            <div className="message received"><small>AI</small><p>How can I help with your project today?</p></div>
            <div className="message sent"><p>Build a clean responsive interface.</p></div>
            <div className="message received typing"><span /><span /><span /></div>
          </div>
          <div className="chat-composer"><span>Write a message...</span><i><Send size={14} /></i></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual ai-preview" aria-hidden="true">
      <div className="ai-orbit orbit-one"><span /></div>
      <div className="ai-orbit orbit-two"><span /></div>
      <div className="ai-core"><Sparkles size={28} /></div>
      <div className="ai-chip chip-one">IDEA</div>
      <div className="ai-chip chip-two">GENERATE</div>
      <div className="ai-chip chip-three">REFINE</div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const [formPrepared, setFormPrepared] = useState(false);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = entry.target.getAttribute("data-nav-label");
            if (label) setActiveSection(label);
          }
        });
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    document.querySelectorAll("[data-nav-label]").forEach((element) => sectionObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    setFormPrepared(true);
    window.location.href = `mailto:usmanramzan1532005@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Muhammad Usman, home" onClick={closeMenu}>
          MU
        </a>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={closeMenu}
              className={activeSection === item ? "active" : ""}
            >
              {item}
            </a>
          ))}
          <a className="nav-github" href="https://github.com/Usman325-ops" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="top" className="hero" data-nav-label="About">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="aurora aurora-one" />
          <div className="aurora aurora-two" />
          <div className="aurora aurora-three" />
          <div className="hero-grid-lines" />
          <div className="hero-particles">
            {[...Array(16)].map((_, index) => <span key={index} />)}
          </div>
        </div>

        <div className="hero-layout">
          <div className="portrait-stage reveal">
            <div className="portrait-orbit orbit-primary"><span /></div>
            <div className="portrait-orbit orbit-secondary"><span /></div>
            <div className="portrait-glow" />
            <div className="portrait-card">
              <Image
                src="/muhammad-usman-portfolio/muhammad-usman-portrait.jpeg"
                alt="Muhammad Usman, Frontend Developer"
                fill
                priority
                sizes="(max-width: 820px) 78vw, 38vw"
                className="portrait-image"
              />
              <div className="portrait-shade" />
              <div className="portrait-caption">
                <span>MU / 2026</span>
                <i>Frontend Developer</i>
              </div>
            </div>
            <div className="hero-chip chip-react"><Code2 size={15} /> React.js</div>
            <div className="hero-chip chip-status"><span /> Open to work</div>
          </div>

          <div className="hero-copy reveal">
            <p className="eyebrow"><Sparkles size={14} /> Welcome to my portfolio</p>
            <h1>
              <span className="hero-intro">Hi there, I&apos;m</span>
              <strong>Muhammad</strong>
              <em>Usman</em>
            </h1>
            <div className="hero-role">
              <span>&lt;</span> Frontend Developer <span>/&gt;</span>
            </div>
            <p className="hero-description">
              Computer Systems Engineering graduate crafting responsive, performance-focused
              interfaces with React and modern JavaScript. I build experiences that feel clear,
              useful and genuinely good to use.
            </p>
            <div className="hero-actions">
              <Button asChild className="primary-cta">
                <a href="#projects">Explore my work <ArrowDown size={17} /></a>
              </Button>
              <Button asChild variant="outline" className="secondary-cta">
                <a href="/muhammad-usman-portfolio/Muhammad-Usman-Resume.pdf" download>Download résumé <Download size={17} /></a>
              </Button>
            </div>
            <div className="hero-meta">
              <span><i /> Available now</span>
              <span>React · JavaScript · Responsive UI</span>
            </div>
          </div>
        </div>

        <a className="hero-scroll" href="#about">
          <span>Scroll to explore</span>
          <ArrowDown size={15} />
        </a>
      </section>

      <div className="ticker" aria-label="Technology skills">
        <div className="ticker-track">
          {[...Array(2)].map((_, group) => (
            <div className="ticker-group" key={group} aria-hidden={group === 1}>
              {["HTML", "CSS", "JAVASCRIPT", "REACT", "RESPONSIVE DESIGN", "GIT & GITHUB"].map((item) => (
                <span key={item}><Sparkles size={14} /> {item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="section about-section" data-nav-label="About">
        <div className="section-heading reveal">
          <span className="section-number">01 / About</span>
          <h2>Curious by nature.<br />Focused by design.</h2>
        </div>
        <div className="about-layout">
          <div className="about-main reveal">
            <p className="lead">
              I turn ideas into interfaces that are <span>simple to understand</span> and pleasant to use.
            </p>
            <p>
              My engineering background helps me think beyond the screen: I care about structure,
              performance and the small details that make a product feel reliable. I&apos;m currently
              strengthening my React and API integration skills while building practical projects.
            </p>
          </div>
          <aside className="about-note reveal">
            <Code2 size={28} />
            <p>Good frontend work lives where clarity, performance and empathy meet.</p>
            <span>MY APPROACH</span>
          </aside>
        </div>
      </section>

      <section id="skills" className="section skills-section" data-nav-label="Skills">
        <div className="section-heading reveal">
          <span className="section-number">02 / Skills</span>
          <h2>Tools I use to<br />bring ideas to life.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card reveal" key={group.title}>
              <div className="skill-card-top"><span>0{index + 1}</span><Braces size={22} /></div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}><span />{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section" data-nav-label="Projects">
        <div className="section-heading reveal">
          <span className="section-number">03 / Selected work</span>
          <h2>Built to learn.<br />Designed to work.</h2>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-info">
                <span className="project-number">PROJECT / {project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  {"available" in project && project.available === false ? (
                    <span className="project-link-disabled">{project.linkLabel}</span>
                  ) : (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.linkLabel} <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.secondaryHref && (
                    <a href={project.secondaryHref} target="_blank" rel="noreferrer">
                      {"secondaryLabel" in project ? project.secondaryLabel : "Backend code"} <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
              <ProjectPreview type={project.preview} />
            </article>
          ))}
        </div>
      </section>

      <section id="resume" className="section resume-section" data-nav-label="Resume">
        <div className="resume-shell reveal">
          <div className="resume-intro">
            <span className="section-number">04 / Resume</span>
            <h2>Engineering mindset.<br /><em>Frontend focus.</em></h2>
            <p>
              A fresh graduate ready to contribute, learn quickly and grow with a product-focused team.
            </p>
            <div className="resume-actions">
              <Button asChild className="resume-button">
                <a href="/muhammad-usman-portfolio/Muhammad-Usman-Resume.pdf" download>
                  Download résumé <Download size={17} />
                </a>
              </Button>
              <Button asChild variant="outline" className="resume-view-button">
                <a href="/muhammad-usman-portfolio/Muhammad-Usman-Resume.pdf" target="_blank" rel="noreferrer">
                  View PDF <ArrowUpRight size={17} />
                </a>
              </Button>
            </div>
          </div>
          <div className="resume-details">
            <article>
              <span>Education</span>
              <h3>BS Computer Systems Engineering</h3>
              <p>The Islamia University of Bahawalpur</p>
              <i>Graduate, 2026 · CGPA 2.95 / 4.00</i>
            </article>
            <article>
              <span>Focus</span>
              <h3>Frontend Development</h3>
              <p>React interfaces, responsive layouts and API-driven applications.</p>
              <i>Open to internship & junior roles</i>
            </article>
            <article>
              <span>Based in</span>
              <h3>Lahore, Pakistan</h3>
              <p>Available for on-site, hybrid and remote opportunities.</p>
              <i>Ready to join</i>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section" data-nav-label="Contact">
        <div className="contact-inner reveal">
          <div className="contact-copy">
            <p><span /> HAVE A ROLE OR PROJECT IN MIND?</p>
            <h2>Let&apos;s build something<br /><em>useful together.</em></h2>
            <a className="contact-email" href="mailto:usmanramzan1532005@gmail.com">
              usmanramzan1532005@gmail.com <ArrowUpRight />
            </a>
            <div className="contact-links">
              <a href="https://github.com/Usman325-ops" target="_blank" rel="noreferrer"><GitBranch size={18} /> GitHub</a>
              <span><MapPin size={18} /> Lahore, Pakistan</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-heading">
              <span>START A CONVERSATION</span>
              <MessageCircle size={21} />
            </div>
            <label htmlFor="contact-name">Your name</label>
            <Input
              id="contact-name"
              name="name"
              className="contact-input"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
            <label htmlFor="contact-email">Your email</label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              className="contact-input"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
            <label htmlFor="contact-message">Your message</label>
            <Textarea
              id="contact-message"
              name="message"
              className="contact-textarea"
              placeholder="Tell me about the role or project..."
              rows={6}
              required
            />
            <Button type="submit" className="send-button">
              Send message <Send size={17} />
            </Button>
            <p className="form-note">
              {formPrepared
                ? "Your email app is ready with the message."
                : "Your email app will open with the message ready to send."}
            </p>
          </form>
        </div>
      </section>

      <footer>
        <a href="#top" className="brand">MU</a>
        <p>Designed & built by Muhammad Usman · 2026</p>
        <a href="#top">Back to top <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}
