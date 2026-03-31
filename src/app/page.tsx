import Image from "next/image";
import Script from "next/script";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Database,
  GraduationCap,
  HeartPulse,
  Link as LinkIcon,
  Mail,
  MapPin,
  Phone,
  Presentation,
  Sparkles,
  Target,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const impactMetrics = [
  {
    value: "30%",
    label: "organic traffic growth after leading a website restructure and SEO refresh",
    icon: Sparkles,
  },
  {
    value: "25%",
    label: "increase in participation across social entrepreneurship initiatives",
    icon: Target,
  },
  {
    value: "20%",
    label: "faster content-gap analysis through interactive dashboard design",
    icon: BarChart3,
  },
  {
    value: "10%",
    label: "outperformance identified through benchmark strategy modeling",
    icon: Database,
  },
];

const quickFacts = [
  "Healthcare strategy and analytics",
  "Hyderabad | remote and hybrid ready",
  "Power BI, SQL, Python, Stata",
];

const valueCards = [
  {
    title: "Map complex markets",
    description: "I turn fragmented sectors, competitors, and product signals into structured strategic direction.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Make analysis usable",
    description: "I translate dashboards, research, and data into crisp recommendations non-technical teams can act on.",
    icon: Presentation,
  },
  {
    title: "Support product decisions",
    description: "I help teams find adoption friction, benchmark the market, and sharpen go-to-market narratives.",
    icon: HeartPulse,
  },
];

const experience = [
  {
    role: "Strategy and Analytics Consultant",
    company: "Pranik (Mondee Group)",
    timeline: "Aug 2025 - Present",
    location: "Hyderabad, India",
    contribution:
      "Mapped the ABDM and health-tech landscape, built a competitive knowledge base, and turned dense research into roadmap and GTM decisions.",
  },
  {
    role: "Sustainability Program Manager",
    company: "Touch A Life Foundation Inc.",
    timeline: "Dec 2021 - Dec 2022",
    location: "California, USA (Remote)",
    contribution:
      "Led website and SEO improvements, shaped digital storytelling, and increased both organic traffic and program participation.",
  },
];

const projects = [
  {
    title: "AnimeList Market Intelligence Dashboard",
    stack: "Power BI",
    year: "2024",
    image: "/project-market-dashboard.svg",
    contribution:
      "Built the dashboard layer that made growth patterns and content-gap opportunities easier to spot in minutes instead of hours.",
  },
  {
    title: "Netflix Viewership and Content Strategy Analytics",
    stack: "Power BI, Excel",
    year: "2024",
    image: "/project-netflix-analytics.svg",
    contribution:
      "Modeled title performance against metadata and ratings to surface stronger acquisition and ROI signals.",
  },
];

const tools = ["SQL", "Python", "Power BI", "Stata", "Excel", "Google Workspace"];

const education = [
  {
    school: "University of Birmingham",
    credential: "MSc Economics",
    timeline: "2022 - 2024",
    summary:
      "Focused on quantitative methods and market dynamics. Dissertation on ESG performance and its limits on firm behaviour.",
    highlights: ["Economic Modeling", "Game Theory", "Statistical Analysis"],
  },
  {
    school: "Symbiosis School for Liberal Arts",
    credential: "BA Liberal Arts & Sciences",
    timeline: "2017 - 2021",
    summary:
      "Interdisciplinary grounding in economics, political science, and business. Thesis on GDP as a measure of national welfare.",
    highlights: ["Econometrics", "Economic Research", "Business Planning"],
  },
  {
    school: "Silver Oaks International Schools",
    credential: "12th Grade, Humanities",
    timeline: "2016 - 2017",
    summary:
      "Academic excellence award in Humanities. Best storytelling at the Times NIE short film award.",
    highlights: ["Mass Communication", "Report Writing", "Short Films"],
  },
  {
    school: "Silver Oaks International Schools",
    credential: "10th Grade, CBSE",
    timeline: "2014 - 2015",
    summary:
      "9.8 CGPA with distinction in Ei ASSET diagnostic testing and creative writing certificates across Grades 8 to 10.",
    highlights: ["Critical Thinking", "Creative Writing", "Leadership"],
  },
];

const focusAreas = [
  "Healthcare technology",
  "Competitive benchmarking",
  "Dashboard storytelling",
  "Go-to-market support",
  "Market mapping",
  "Decision synthesis",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sowmya Vunnam",
  jobTitle: "Strategy and Analytics Consultant",
  description:
    "Strategy and analytics consultant focused on healthcare technology, market intelligence, dashboard storytelling, and decision-ready research.",
  image: "/profile-photo.jpg",
  url: "/",
  email: "mailto:sowmya.vunnam@gmail.com",
  telephone: "+91 72493 88640",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "India",
  },
  sameAs: ["https://linkedin.com/in/sowmya-vunnam"],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Script
        id="person-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:var(--surface)]/82 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl tracking-tight">
            Sowmya Vunnam
          </a>
          <div className="hidden items-center gap-6 text-sm text-[color:var(--muted)] lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[color:var(--foreground)]">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/sowmya-vunnam-resume.pdf"
              className="button-secondary hidden md:inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-5 pb-24 pt-8 md:px-8 md:pb-32 md:pt-12">
        <section className="animated-rise hero-panel overflow-hidden rounded-[2rem] border border-[var(--line)] p-6 md:p-10 lg:p-14">
          <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
            <div>
              <h1 className="font-display max-w-[12ch] text-5xl leading-[0.95] tracking-tight md:text-7xl">
                Turning complex research into decisions teams can move on.
              </h1>
              <p className="muted reading-width mt-5 text-base leading-8 md:text-lg">
                I work across strategy, analytics, and market insight with a current focus on healthcare technology.
                My strength is turning difficult information into direction product, growth, and leadership teams can use.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contact" className="button-primary">
                  Let&apos;s connect
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/sowmya-vunnam-resume.pdf"
                  className="button-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View resume
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {quickFacts.map((item) => (
                  <span key={item} className="pill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-side">
              <div className="profile-image-shell">
                <Image
                  src="/profile-photo.jpg"
                  alt="Profile photo of Sowmya Vunnam"
                  width={768}
                  height={768}
                  className="profile-image profile-photo hero-photo"
                  priority
                />
              </div>
              <div className="hero-note panel-dark rounded-[1.5rem] p-5">
                <div className="glass-row">
                  <BriefcaseBusiness className="h-4 w-4" />
                  <span>Strategy, analytics, and market intelligence</span>
                </div>
                <div className="glass-row">
                  <MapPin className="h-4 w-4" />
                  <span>Hyderabad, India | open to remote and hybrid roles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="delay-1 animated-rise mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {impactMetrics.map(({ value, label, icon: Icon }) => (
            <article key={value} className="card rounded-[1.6rem] border p-5">
              <div className="icon-shell">
                <Icon className="h-5 w-5 text-[color:var(--accent)]" />
              </div>
              <p className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">{value}</p>
              <p className="muted mt-3 text-sm leading-7">{label}</p>
            </article>
          ))}
        </section>

        <section className="delay-2 animated-rise mt-16 grid gap-4 md:grid-cols-3">
          {valueCards.map(({ title, description, icon: Icon }) => (
            <article key={title} className="section-card rounded-[1.6rem] p-6">
              <div className="icon-shell">
                <Icon className="h-5 w-5 text-[color:var(--accent)]" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="muted reading-width mt-3 text-sm leading-7">{description}</p>
            </article>
          ))}
        </section>

        <section id="work" className="delay-3 animated-rise mt-20">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Recent Work</p>
              <h2 className="font-display mt-4 text-3xl md:text-5xl">Places where I helped teams move faster.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {experience.map((job, index) => (
              <article key={job.role} className="section-card rounded-[1.9rem] p-7 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                      {job.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">{job.role}</h3>
                    <p className="muted mt-2 text-sm">
                      {job.timeline} | {job.location}
                    </p>
                  </div>
                  <div className="timeline-mark">{`0${index + 1}`}</div>
                </div>
                <p className="muted reading-width mt-6 text-sm leading-7">{job.contribution}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="delay-4 animated-rise mt-20">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Projects</p>
              <h2 className="font-display mt-4 text-3xl md:text-5xl">A quick look at how I work with data.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="project-card rounded-[1.9rem] p-6 md:p-8">
                <div className="overflow-hidden rounded-[1.3rem] border border-[var(--line)]">
                  <Image
                    src={project.image}
                    alt={`Illustrated visual for ${project.title}`}
                    width={900}
                    height={520}
                    className="project-image"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]">
                    {project.stack} | {project.year}
                  </p>
                </div>
                <p className="muted reading-width mt-4 text-sm leading-7">{project.contribution}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
          <article className="section-card rounded-[1.9rem] p-7 md:p-9">
            <p className="section-kicker">About</p>
            <h2 className="font-display mt-4 text-3xl md:text-5xl">Background, tools, and areas I enjoy working in.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {focusAreas.map((item) => (
                <span key={item} className="mini-tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {tools.map((item) => (
                <span key={item} className="pill-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="section-card rounded-[1.9rem] p-7 md:p-9">
            <p className="section-kicker">Education</p>
            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <article key={`${item.school}-${item.credential}`} className="soft-block rounded-[1.3rem] p-5">
                  <div className="flex gap-3">
                    <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                    <div>
                      <h3 className="text-base font-semibold">{item.school}</h3>
                      <p className="mt-1 text-sm font-medium text-[color:var(--foreground)]">
                        {item.credential} | {item.timeline}
                      </p>
                      <p className="muted reading-width mt-3 text-sm leading-7">{item.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span key={highlight} className="mini-tag">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section id="contact" className="mt-20">
          <div className="contact-panel rounded-[2rem] border border-[var(--line)] p-7 md:p-9">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <h2 className="font-display max-w-[14ch] text-3xl leading-tight text-white md:text-5xl">
                  If you want me to add value to what you are building, let&apos;s talk.
                </h2>
              </div>

              <div className="grid gap-3">
                <a
                  href="/sowmya-vunnam-resume.pdf"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  View resume
                </a>
                <a href="mailto:sowmya.vunnam@gmail.com" className="contact-link">
                  <Mail className="h-4 w-4" />
                  sowmya.vunnam@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/sowmya-vunnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <LinkIcon className="h-4 w-4" />
                  linkedin.com/in/sowmya-vunnam
                </a>
                <a href="tel:+917249388640" className="contact-link">
                  <Phone className="h-4 w-4" />
                  +91 72493 88640
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs text-[color:var(--muted)]">
          <p>Copyright 2026 Sowmya Vunnam</p>
          <p>Strategy, analytics, and market insight.</p>
        </div>
      </footer>
    </div>
  );
}
