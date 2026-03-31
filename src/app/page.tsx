import { Phone, Mail, Linkedin, Code, BarChart3, Target, TrendingUp, Users, Award } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Sowmya Vunnam</h1>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
                <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-white">SV</span>
            </div>
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Sowmya Vunnam
          </h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-8 font-light">Strategy and Analytics Consultant</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            Strategy and Analytics Consultant with a background in Economics and specialized expertise in healthcare technology market mapping. Proven track record in translating complex datasets into actionable Go-To-Market strategies through Python, SQL, and Power BI. Focused on driving evidence-based growth and strategic impact within digital health ecosystems.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Key Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">30%</div>
              <p className="text-gray-600 dark:text-gray-400">Increase in organic traffic</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">25%</div>
              <p className="text-gray-600 dark:text-gray-400">Increase in SDG participation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">20%</div>
              <p className="text-gray-600 dark:text-gray-400">Faster content-gap analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10%</div>
              <p className="text-gray-600 dark:text-gray-400">Outperformance on benchmarks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">Tools & Languages</h4>
              </div>
              <div className="space-y-3">
                {['SQL', 'Python', 'Stata', 'Power BI', 'MS Excel (Advanced)', 'Google Workspace'].map((skill) => (
                  <span key={skill} className="inline-block bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mr-2 mb-2 shadow-sm border border-gray-200 dark:border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">Data Analysis</h4>
              </div>
              <div className="space-y-3">
                {['Requirement Gathering', 'Data Visualization', 'Market Research', 'Competitive Benchmarking'].map((skill) => (
                  <span key={skill} className="inline-block bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mr-2 mb-2 shadow-sm border border-gray-200 dark:border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-purple-600 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">Core Competencies</h4>
              </div>
              <div className="space-y-3">
                {['Critical Thinking', 'Problem-Solving', 'Strategic Positioning', 'Project Management'].map((skill) => (
                  <span key={skill} className="inline-block bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mr-2 mb-2 shadow-sm border border-gray-200 dark:border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">Experience</h3>
          <div className="space-y-12">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-2 mr-6 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Strategy and Analytics Consultant</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Aug. 2025 – Present | Pranik (Mondee Group), Hyderabad, India</p>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      Spearheaded market mapping of the Ayushman Bharat Digital Mission (ABDM) to define 100% of integration requirements, providing a clear strategic roadmap for HIP/HIU compliance.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      Established a centralized Healthcare Intelligence Knowledge Base to track competitive trends, enabling the product team to benchmark feature parity across 5+ major platforms.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      Identified provider onboarding friction points through detailed user flow analysis, leading to prioritized feature updates that significantly enhanced the onboarding experience.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      Transformed raw research into value proposition frameworks for GTM preparation, delivering structured content that professionalized executive sales decks and stakeholder presentations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-2 mr-6 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Sustainability Program Manager</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Dec. 2021 – Dec. 2022 | Touch A Life Foundation Inc., California, USA (Remote)</p>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      Directed a cross-functional website restructuring to optimize digital presence, achieving a 30% increase in unique organic traffic over a 12-month period.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      Orchestrated the annual Transformers Challenge to promote social entrepreneurship, scaling the youth program and increasing active participation in UN SDG initiatives by 25%.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      Implemented an SEO-driven content strategy by authoring 17 research blogs, substantially improving digital engagement metrics and brand visibility for sustainability programs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">Education</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">MSc Economics</h4>
              <p className="text-gray-600 dark:text-gray-400">University of Birmingham, Birmingham, UK</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Virtual Course in Applied Business Analytics</h4>
              <p className="text-gray-600 dark:text-gray-400">Indian School of Business, Hyderabad, India</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">BA in Liberal Arts</h4>
              <p className="text-gray-600 dark:text-gray-400">Economics Major, Political Science & Business Minors</p>
              <p className="text-gray-600 dark:text-gray-400">Symbiosis School for Liberal Arts, Pune, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">AnimeList Market Intelligence Dashboard</h4>
              <p className="text-blue-600 dark:text-blue-400 mb-6 font-medium flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Power BI | 2024
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Engineered a dynamic analysis tool to identify high-growth sub-genres and production trends within the AnimeList database, accelerating content-gap analysis by 20% through automated visualization of performance KPIs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Netflix Viewership & Content Strategy Analytics</h4>
              <p className="text-blue-600 dark:text-blue-400 mb-6 font-medium flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Power BI, Excel | 2024
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Processed multi-regional metadata to analyze viewership hours against IMDB ratings, developing a predictive genre-performance model that identified high-ROI acquisition opportunities and outperformed benchmarks by 10%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-light">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="tel:+917249388640" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              +91 7249388640
            </a>
            <a href="mailto:sowmya.vunnam@gmail.com" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              sowmya.vunnam@gmail.com
            </a>
            <a href="https://linkedin.com/in/sowmyavunnam" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Sowmya Vunnam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
