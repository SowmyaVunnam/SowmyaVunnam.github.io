import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Database,
  HeartPulse,
  Scale,
  Stethoscope,
  Trophy,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const title = "We Blind-Tested AI Clinician Copilots In Real Consultations";
const description =
  "A clinician-evaluated benchmark comparing Gemini, Qwen, and GPT-5.4 across real consultation-style turns using blind pairwise tests, ELO, Glicko-2, token use, and latency.";

export const metadata: Metadata = {
  title: "Clinical AI Performance Benchmarks",
  description,
  alternates: {
    canonical: "/blog/clinical-ai-performance-benchmarks",
  },
  openGraph: {
    title,
    description,
    url: "/blog/clinical-ai-performance-benchmarks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const modelResults = [
  {
    model: "Google Gemini 3.1 Pro Preview",
    elo: "1549",
    eloChange: "+49",
    glicko: "1623",
    rd: "62",
    icon: Trophy,
  },
  {
    model: "Qwen 3.5 Plus 02-15",
    elo: "1489",
    eloChange: "-11",
    glicko: "1581",
    rd: "62",
    icon: Scale,
  },
  {
    model: "GPT-5.4",
    elo: "1462",
    eloChange: "-38",
    glicko: "1518",
    rd: "63",
    icon: BrainCircuit,
  },
];

const copilotTasks = [
  "Ask relevant follow-up questions and investigate",
  "Suggest diagnoses and differential possibilities",
  "Draft prescriptions, medicines, and treatment plans",
];

const testSteps = [
  "During each consultation, two models answered the same clinical scenario.",
  "The clinician saw both responses without model names and chose which one was better, or if both were good or bad.",
  "Each doctor-AI exchange, meaning a single question and response, counted as one turn.",
  "After filtering incomplete sessions and non-clinician testers, we analyzed 413 evaluated turns.",
];

const references = [
  {
    label: "Artificial Analysis: Gemini 3.1 Pro Preview providers",
    href: "https://artificialanalysis.ai/models/gemini-3-1-pro-preview/providers",
  },
  {
    label: "Artificial Analysis: GPT-5.4 providers",
    href: "https://artificialanalysis.ai/models/gpt-5-4/providers",
  },
  {
    label: "VALS: Alibaba Qwen 3.5 Plus Thinking",
    href: "https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking",
  },
];

export default function ClinicalAiBenchmarksPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:var(--surface)]/82 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-10 md:px-8 md:pb-32 md:pt-14">
        <article className="article-shell animated-rise rounded-[2rem] border border-[var(--line)] p-6 md:p-10 lg:p-12">
          <div className="flex flex-wrap gap-3">
            {["Clinical AI", "Model benchmarking", "Clinician evaluation"].map((tag) => (
              <span key={tag} className="pill-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-start">
            <div>
              <p className="section-kicker">
                <Stethoscope className="h-3.5 w-3.5" />
                Blog
              </p>
              <h1 className="font-display mt-5 max-w-4xl text-4xl leading-[1.02] tracking-tight md:text-6xl">
                {title}
              </h1>
              <p className="muted mt-6 max-w-2xl text-base leading-8 md:text-lg">{description}</p>
            </div>

            <aside className="article-aside rounded-[1.5rem] p-5">
              <p className="text-sm font-semibold">Benchmark snapshot</p>
              <div className="mt-4 grid gap-3">
                <div className="article-stat">
                  <span>Evaluated turns</span>
                  <strong>413</strong>
                </div>
                <div className="article-stat">
                  <span>Methods</span>
                  <strong>ELO + Glicko-2</strong>
                </div>
                <div className="article-stat">
                  <span>Top performer</span>
                  <strong>Gemini</strong>
                </div>
              </div>
            </aside>
          </div>

          <div className="article-body mt-12">
            <p>
              AI in healthcare is a hot topic, but the harder question is how to put it to the best possible use when
              deployed in everyday healthcare services. We explored this by testing AI models&apos; ability to act as a
              clinician copilot during live consultations.
            </p>

            <div className="callout">
              <HeartPulse className="h-5 w-5 text-[color:var(--accent)]" />
              <p>
                Crucially, every recommendation was still validated by a human doctor before it reached the patient.
                The question was simple: which model actually helps give safer, faster, better care?
              </p>
            </div>

            <h2>What the Copilot Needed To Do</h2>
            <ul>
              {copilotTasks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>How Did We Do It?</h2>
            <p>
              We ran a head-to-head evaluation of three large language models across multiple specialties, including
              General Medicine, Gynaecology, Orthopedics, and Dentistry.
            </p>
            <div className="article-grid">
              {["Google Gemini 3.1 Pro Preview", "Qwen 3.5 Plus 02-15", "GPT-5.4"].map((model) => (
                <div key={model} className="article-card">
                  <BrainCircuit className="h-5 w-5 text-[color:var(--accent)]" />
                  <span>{model}</span>
                </div>
              ))}
            </div>

            <h2>How the Blind Test Worked</h2>
            <ol>
              {testSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p>
              For each turn, we recorded it as a win, loss, tie, both good, or both bad. Doctors judged both models good
              in nearly half of all turns, which suggests the overall quality bar is already quite high.
            </p>
            <p>
              However, just counting wins is not enough because the models did not play the same number of matches
              against each other. That is where more serious ranking methods come in.
            </p>

            <h2>ELO and Glicko-2 Come Into Play</h2>
            <p>To fairly compare models, we used two rating systems borrowed from competitive games.</p>
            <div className="article-grid">
              <div className="article-card">
                <BarChart3 className="h-5 w-5 text-[color:var(--accent)]" />
                <div>
                  <strong>ELO rating</strong>
                  <p>Baseline score of 1500. Beating a strong opponent increases your rating more than beating a weak one.</p>
                </div>
              </div>
              <div className="article-card">
                <Database className="h-5 w-5 text-[color:var(--accent)]" />
                <div>
                  <strong>Glicko-2 rating</strong>
                  <p>Similar idea, but also tracks uncertainty using RD. A smaller RD indicates greater confidence.</p>
                </div>
              </div>
            </div>

            <h2>Results</h2>
            <div className="result-grid">
              {modelResults.map(({ model, elo, eloChange, glicko, rd, icon: Icon }) => (
                <section key={model} className="result-card">
                  <Icon className="h-5 w-5 text-[color:var(--accent)]" />
                  <h3>{model}</h3>
                  <div className="result-row">
                    <span>ELO</span>
                    <strong>
                      {elo} ({eloChange})
                    </strong>
                  </div>
                  <div className="result-row">
                    <span>Glicko-2</span>
                    <strong>
                      {glicko} (RD {rd})
                    </strong>
                  </div>
                </section>
              ))}
            </div>
            <p>
              Gemini clearly comes out on top. However, Qwen is close enough that it cannot be dismissed. GPT-5.4
              consistently lags both in direct head-to-head comparisons. To understand the close race between Qwen and
              Gemini, we also looked at token usage, response length, and thinking effort.
            </p>

            <h2>Quality vs Cost: Tokens and Response Length</h2>
            <p>Average usage per turn showed clear tradeoffs.</p>
            <div className="article-table-wrap">
              <table className="article-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Input tokens</th>
                    <th>Output profile</th>
                    <th>Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GPT-5.4</td>
                    <td>5190</td>
                    <td>Very short outputs, around 27 tokens / 95 chars</td>
                    <td>Cheap, but often too brief for clinical depth and empathy</td>
                  </tr>
                  <tr>
                    <td>Gemini</td>
                    <td>5368</td>
                    <td>Moderate outputs, around 540 tokens / 202 chars</td>
                    <td>Balanced detail without becoming too verbose</td>
                  </tr>
                  <tr>
                    <td>Qwen</td>
                    <td>5870</td>
                    <td>Longest outputs, 2300+ tokens / 235 chars in text length stats</td>
                    <td>Strong quality, but heavier on compute</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Gemini sits in the &quot;Goldilocks zone&quot; with enough detail to be clinically useful, without being
              over-verbose or too expensive.
            </p>

            <h2>Thinking Time, Latency, and Deployment Reality</h2>
            <p>
              We also looked at auto-thinking mode, where models do extra internal reasoning before responding. Qwen and
              Gemini ended in a near dead heat, with 39 vs 35 wins respectively. This suggests that giving both models
              more thinking time makes them similarly strong, with Qwen being a good alternative if verbose answers are
              acceptable.
            </p>
            <div className="callout">
              <Clock3 className="h-5 w-5 text-[color:var(--accent)]" />
              <p>
                Even considering this, Qwen would lose to Gemini on latency for the perceived Indian market if local
                data centers are unavailable for the China-originating model.
              </p>
            </div>
            <p>
              Artificial Analysis reports Gemini 3.1 Pro Preview time-to-first-token around 32 s on Google AI Studio and
              46.6 s on Vertex, while GPT-5.4 reports around 137.36 s on Azure and 156.09 s on OpenAI. For Qwen 3.5
              Plus, the VALS benchmark page reports a latency index of 570.93 s.
            </p>

            <h2>Putting It All Together</h2>
            <ul>
              <li>
                <strong>Quality:</strong> Gemini and Qwen are the two serious contenders; GPT-5.4 consistently
                underperforms.
              </li>
              <li>
                <strong>Efficiency:</strong> Gemini achieves high ratings with far fewer output tokens than Qwen.
              </li>
              <li>
                <strong>Latency and deployment reality:</strong> Given current infrastructure and likely latency, Gemini
                is a more practical choice for Indian clinical settings.
              </li>
            </ul>

            <h2>References</h2>
            <ol className="reference-list">
              {references.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noopener noreferrer">
                    {reference.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ol>

            <div className="article-footer-callout">
              <CheckCircle2 className="h-5 w-5 text-[color:var(--accent)]" />
              <p>
                Note: This benchmark discusses clinician-reviewed AI assistance. It is not medical advice, and any
                clinical use of AI should remain under qualified human supervision.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
