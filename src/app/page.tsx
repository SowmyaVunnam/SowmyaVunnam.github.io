import Image from "next/image";
import Script from "next/script";
import {
  ArrowDownToLine,
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
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#toolkit" },
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
    label: "increase in youth participation across social entrepreneurship initiatives",
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
  "Recruiter-friendly, single-page portfolio",
  "Open to strategy, analytics, market intelligence, and product insight roles",
  "Based in Hyderabad with remote and hybrid readiness",
  "Healthcare technology and decision storytelling focus",
];

const proofStrip = [
  { value: "2+", label: "strategy and program roles across consulting and mission-led organizations" },
  { value: "Health-tech", label: "current specialization with ABDM, provider workflows, and GTM research" },
  { value: "Power BI + SQL", label: "tooling used to turn analysis into decision-ready outputs" },
];

const capabilities = [
  {
    title: "Market Intelligence",
    description:
      "I map sectors, competitors, and whitespace so product and growth teams can make decisions with less guesswork.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Analytics Storytelling",
    description:
      "I turn spreadsheets, dashboards, and research notes into clear recommendations leaders can quickly act on.",
    icon: Presentation,
  },
  {
    title: "Product Strategy Support",
    description:
      "I help teams understand adoption friction, prioritize opportunities, and shape stronger GTM narratives.",
    icon: HeartPulse,
  },
];

const focusAreas = [
  "Healthcare technology",
  "ABDM readiness and compliance research",
  "Competitive benchmarking",
  "Dashboard-driven insights",
  "Go-to-market support",
  "Strategic research synthesis",
];

const experience = [
  {
    role: "Strategy and Analytics Consultant",
    company: "Pranik (Mondee Group)",
    timeline: "Aug 2025 - Present",
    location: "Hyderabad, India",
    challenge:
      "A healthcare product team needed sharper market visibility and a clearer path through ABDM integration and provider onboarding complexity.",
    action:
      "Led market mapping, created a healthcare intelligence knowledge base, benchmarked product parity, and translated fragmented research into actionable GTM and product recommendations.",
    outcome:
      "Built decision-ready strategy outputs leadership could use across roadmap planning, product positioning, and sales communication.",
  },
  {
    role: "Sustainability Program Manager",
    company: "Touch A Life Foundation Inc.",
    timeline: "Dec 2021 - Dec 2022",
    location: "California, USA (Remote)",
    challenge:
      "The organization needed stronger digital visibility and clearer program storytelling to drive participation and engagement.",
    action:
      "Directed website restructuring, led SEO improvements, and shaped research-backed content and program communication around youth entrepreneurship and SDG participation.",
    outcome:
      "Increased organic website traffic by 30% and improved participation in key SDG initiatives by 25%.",
  },
];

const projects = [
  {
    title: "AnimeList Market Intelligence Dashboard",
    stack: "Power BI",
    year: "2024",
    image: "/project-market-dashboard.svg",
    question: "Which genres and production patterns signal the best whitespace opportunities?",
    method: "Built a Power BI dashboard to compare growth patterns, sub-genre momentum, and content supply shifts.",
    result:
      "Reduced time-to-insight for content-gap analysis and made it easier to surface high-potential content bets.",
  },
  {
    title: "Netflix Viewership and Content Strategy Analytics",
    stack: "Power BI, Excel",
    year: "2024",
    image: "/project-netflix-analytics.svg",
    question: "How can performance, metadata, and ratings guide smarter content acquisition choices?",
    method: "Modeled viewership performance against title metadata and ratings patterns to identify strategic signals.",
    result:
      "Highlighted content opportunities with stronger expected viewership and better ROI potential.",
  },
];

const tools = ["SQL", "Python", "Power BI", "Stata", "Excel", "Google Workspace"];

const education = [
  "MSc Economics, University of Birmingham, UK",
  "Applied Business Analytics, Indian School of Business, Hyderabad",
  "BA Liberal Arts (Economics), Symbiosis School for Liberal Arts, Pune",
];

const supportAreas = [
  "Market mapping and competitor intelligence",
  "Healthcare product and GTM research",
  "Dashboard storytelling for non-technical stakeholders",
  "Structured synthesis for leadership decks and hiring conversations",
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
            <a href="/sowmya-vunnam-resume.pdf" className="button-secondary hidden md:inline-flex" download>
              Resume
              <ArrowDownToLine className="h-4 w-4" />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-5 pb-24 pt-8 md:px-8 md:pb-32 md:pt-12">
        <section className="animated-rise hero-panel overflow-hidden rounded-[2rem] border border-[var(--line)] p-6 md:p-10 lg:p-14">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
            <div>
              <h1 className="font-display mt-6 max-w-5xl text-5xl leading-[0.95] tracking-tight md:text-7xl">
                Strategy and analytics consultant for healthcare, market intelligence, and decision-ready storytelling.
              </h1>
              <p className="muted mt-6 max-w-3xl text-base leading-8 md:text-lg">
                I help teams turn market ambiguity, fragmented research, and dashboard-heavy analysis into focused
                decisions. My work combines business analytics, healthcare technology context, and clear executive
                communication so leaders can move faster with more confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/sowmya-vunnam-resume.pdf" className="button-primary" download>
                  Download resume
                  <ArrowDownToLine className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/sowmya-vunnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  View LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {proofStrip.map((item) => (
                  <div key={item.value} className="stat-strip">
                    <span className="stat-value">{item.value}</span>
                    <span className="stat-label">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {quickFacts.map((item) => (
                  <span key={item} className="pill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="profile-panel">
              <div className="profile-card">
                <div className="profile-image-shell">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Profile photo of Sowmya Vunnam"
                    width={768}
                    height={768}
                    className="profile-image profile-photo"
                    priority
                  />
                </div>
                <div className="panel-dark rounded-[1.6rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">Quick facts</p>
                  <div className="mt-5 space-y-3">
                    <div className="glass-row">
                      <BriefcaseBusiness className="h-4 w-4" />
                      <span>Targeting strategy, analytics, and market intelligence roles</span>
                    </div>
                    <div className="glass-row">
                      <MapPin className="h-4 w-4" />
                      <span>Hyderabad, India | open to remote and hybrid opportunities</span>
                    </div>
                    <div className="glass-row">
                      <ChartNoAxesCombined className="h-4 w-4" />
                      <span>Healthcare research, product insight, dashboards, and GTM narratives</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
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

        <section id="about" className="delay-2 animated-rise mt-20 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <article className="section-card rounded-[1.9rem] p-7 md:p-9">
            <p className="section-kicker">Why Hire Me</p>
            <h2 className="font-display mt-4 text-3xl leading-tight md:text-5xl">
              I make research easier to trust, easier to communicate, and easier to act on.
            </h2>
            <p className="muted mt-5 max-w-3xl text-base leading-8">
              Recruiters and hiring managers usually need to answer one question fast: can this person turn complexity
              into momentum? My edge is that I work comfortably across research, analytics, and storytelling. I can
              investigate a market, structure the signal, and turn the result into something a product, growth, or
              leadership team can actually use.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <div key={title} className="soft-block rounded-[1.4rem] p-5">
                  <div className="icon-shell">
                    <Icon className="h-5 w-5 text-[color:var(--accent)]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="muted mt-3 text-sm leading-7">{description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="section-card rounded-[1.9rem] p-7 md:p-9">
            <p className="section-kicker">Role Fit</p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="soft-block rounded-[1.4rem] p-5">
                <p className="eyebrow">Best suited for</p>
                <ul className="mt-4 space-y-3">
                  {supportAreas.map((item) => (
                    <li key={item} className="muted flex gap-3 text-sm leading-7">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="soft-block rounded-[1.4rem] p-5">
                <p className="eyebrow">Focus areas</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {focusAreas.map((item) => (
                    <span key={item} className="mini-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>

        <section id="experience" className="delay-3 animated-rise mt-20">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Experience Highlights</p>
              <h2 className="font-display mt-4 text-3xl md:text-5xl">Work framed around challenge, action, and result.</h2>
            </div>
            <p className="muted max-w-xl text-sm leading-7">
              The site is structured for recruiter scanning, so each role shows the business context, the work I owned,
              and the outcome the team got from it.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {experience.map((job, index) => (
              <article key={job.role} className="section-card rounded-[1.9rem] p-7 md:p-9">
                <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
                  <div className="timeline-mark">{`0${index + 1}`}</div>
                  <div>
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
                      <div className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                        Recruiter snapshot
                      </div>
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      <div className="soft-block rounded-[1.2rem] p-4">
                        <p className="eyebrow">Challenge</p>
                        <p className="muted mt-3 text-sm leading-7">{job.challenge}</p>
                      </div>
                      <div className="soft-block rounded-[1.2rem] p-4">
                        <p className="eyebrow">Action</p>
                        <p className="muted mt-3 text-sm leading-7">{job.action}</p>
                      </div>
                      <div className="soft-block rounded-[1.2rem] p-4">
                        <p className="eyebrow">Outcome</p>
                        <p className="muted mt-3 text-sm leading-7">{job.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="delay-4 animated-rise mt-20">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected Projects</p>
              <h2 className="font-display mt-4 text-3xl md:text-5xl">Mini case studies with a clearer business narrative.</h2>
            </div>
            <p className="muted max-w-xl text-sm leading-7">
              Each project now communicates the strategic question, the method, and the decision value it created.
            </p>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="project-card rounded-[1.9rem] p-7 md:p-9">
                <div className="overflow-hidden rounded-[1.4rem] border border-[var(--line)]">
                  <Image
                    src={project.image}
                    alt={`Illustrated visual for ${project.title}`}
                    width={900}
                    height={520}
                    className="project-image"
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                    {project.stack}
                  </p>
                  <p className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]">
                    {project.year}
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="eyebrow">Question</p>
                    <p className="muted mt-2 text-sm leading-7">{project.question}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Method</p>
                    <p className="muted mt-2 text-sm leading-7">{project.method}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Result</p>
                    <p className="muted mt-2 text-sm leading-7">{project.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="toolkit" className="mt-20 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <article className="section-card rounded-[1.9rem] p-7 md:p-9">
            <p className="section-kicker">Toolkit</p>
            <h2 className="font-display mt-4 text-3xl md:text-5xl">Tools and training that support the work.</h2>
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
            <ul className="mt-6 space-y-4">
              {education.map((item) => (
                <li key={item} className="muted flex gap-3 text-sm leading-7">
                  <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-20">
          <article className="section-card rounded-[1.9rem] p-7 md:p-9">
            <div className="section-heading">
              <div>
                <p className="section-kicker">What I Can Help With</p>
                <h2 className="font-display mt-4 text-3xl md:text-5xl">Where I add value quickly on a team.</h2>
              </div>
              <p className="muted max-w-xl text-sm leading-7">
                This section makes the portfolio easier to scan in hiring funnels where recruiters need a fast match
                between your needs and my strengths.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {supportAreas.map((item) => (
                <div key={item} className="soft-block rounded-[1.2rem] p-5">
                  <p className="text-base font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="contact" className="mt-20">
          <div className="contact-panel rounded-[2rem] border border-[var(--line)] p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="section-kicker text-white/72">Contact</p>
                <h2 className="font-display mt-4 max-w-3xl text-3xl leading-tight text-white md:text-5xl">
                  Hiring for someone who can bring structure, insight, and clear strategic communication?
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-white/76">
                  I am currently open to strategy, analytics, market intelligence, and product insight opportunities.
                  The quickest way to evaluate fit is to review my resume or connect through email or LinkedIn.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/sowmya-vunnam-resume.pdf" className="button-light" download>
                    Download resume
                    <ArrowDownToLine className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/sowmya-vunnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-light"
                  >
                    Open LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid gap-3">
                <a href="mailto:sowmya.vunnam@gmail.com" className="contact-link">
                  <Mail className="h-4 w-4" />
                  sowmya.vunnam@gmail.com
                </a>
                <a href="tel:+917249388640" className="contact-link">
                  <Phone className="h-4 w-4" />
                  +91 72493 88640
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
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs text-[color:var(--muted)]">
          <p>Copyright 2026 Sowmya Vunnam</p>
          <p>Built for recruiter visibility, shareability, and fast comprehension.</p>
        </div>
      </footer>
    </div>
  );
}
