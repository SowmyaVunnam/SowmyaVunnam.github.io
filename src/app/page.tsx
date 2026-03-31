export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Sowmya Vunnam</h1>
          <h2 className="text-2xl text-gray-600 mb-6">Strategy and Analytics Consultant</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Strategy and Analytics Consultant with a background in Economics and specialized expertise in healthcare technology market mapping. Proven track record in translating complex datasets into actionable Go-To-Market strategies through Python, SQL, and Power BI. Focused on driving evidence-based growth and strategic impact within digital health ecosystems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Tools & Languages</h4>
              <p className="text-gray-700">SQL, Python, Stata, Power BI, MS Excel (Advanced), Google Workspace</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Data Analysis</h4>
              <p className="text-gray-700">Requirement Gathering, Data Visualization, Market Research, Competitive Benchmarking</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Core Competencies</h4>
              <p className="text-gray-700">Critical Thinking, Problem-Solving, Strategic Positioning, Project Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-xl font-semibold text-gray-800">Strategy and Analytics Consultant</h4>
              <p className="text-gray-600">Aug. 2025 – Present | Pranik (Mondee Group), Hyderabad, India</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Spearheaded market mapping of the Ayushman Bharat Digital Mission (ABDM) to define 100% of integration requirements, providing a clear strategic roadmap for HIP/HIU compliance.</li>
                <li>• Established a centralized Healthcare Intelligence Knowledge Base to track competitive trends, enabling the product team to benchmark feature parity across 5+ major platforms.</li>
                <li>• Identified provider onboarding friction points through detailed user flow analysis, leading to prioritized feature updates that significantly enhanced the onboarding experience.</li>
                <li>• Transformed raw research into value proposition frameworks for GTM preparation, delivering structured content that professionalized executive sales decks and stakeholder presentations.</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-xl font-semibold text-gray-800">Sustainability Program Manager</h4>
              <p className="text-gray-600">Dec. 2021 – Dec. 2022 | Touch A Life Foundation Inc., California, USA (Remote)</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Directed a cross-functional website restructuring to optimize digital presence, achieving a 30% increase in unique organic traffic over a 12-month period.</li>
                <li>• Orchestrated the annual Transformers Challenge to promote social entrepreneurship, scaling the youth program and increasing active participation in UN SDG initiatives by 25%.</li>
                <li>• Implemented an SEO-driven content strategy by authoring 17 research blogs, substantially improving digital engagement metrics and brand visibility for sustainability programs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-800">MSc Economics</h4>
              <p className="text-gray-600">University of Birmingham, Birmingham, UK</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Virtual Course in Applied Business Analytics</h4>
              <p className="text-gray-600">Indian School of Business, Hyderabad, India</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">BA in Liberal Arts (Economics Major, Political Science & Business Minors)</h4>
              <p className="text-gray-600">Symbiosis School for Liberal Arts, Pune, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h3>
          <div className="space-y-8">
            <div className="border rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">AnimeList Market Intelligence Dashboard</h4>
              <p className="text-gray-600 mb-4">Power BI | 2024</p>
              <p className="text-gray-700">Engineered a dynamic analysis tool to identify high-growth sub-genres and production trends within the AnimeList database, accelerating content-gap analysis by 20% through automated visualization of performance KPIs.</p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Netflix Viewership & Content Strategy Analytics</h4>
              <p className="text-gray-600 mb-4">Power BI, Excel | 2024</p>
              <p className="text-gray-700">Processed multi-regional metadata to analyze viewership hours against IMDB ratings, developing a predictive genre-performance model that identified high-ROI acquisition opportunities and outperformed benchmarks by 10%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact</h3>
          <p className="text-lg text-gray-700">
            +91 7249388640 | <a href="mailto:sowmya.vunnam@gmail.com" className="text-blue-600 hover:underline">sowmya.vunnam@gmail.com</a> | <a href="https://linkedin.com/in/sowmyavunnam" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sowmyavunnam</a>
          </p>
        </div>
      </section>
    </div>
  );
}
