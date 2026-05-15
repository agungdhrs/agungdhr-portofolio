import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "TailwindCSS",
    "Bootstrap",
    "Vue.js",
    "JavaScript",
    "Next.js",
    "React",
    "Vite",
  ];

  const backendSkills = [
    "PHP",
    "Python",
    "Laravel",
    "MongoDB",
    "SQL",
    "Supabase",
    "Firebase",
    "n8n",
    "Git",
    "Strapi",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              A versatile Software Developer passionate about Artificial
              Intelligence and Machine Learning. I specialize in bridging robust
              back-end architectures with modern front-end frameworks to build
              scalable applications. Currently exploring cutting-edge tech in
              AI-driven automation and data processing to turn innovative ideas
              into impactful realities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend & Tools </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">🏫 Education</h3>
            <div className="flex flex-col gap-4">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Bachelor's Degree in Computer Engineering - ITB Swadharma
                      (2021-2025)
                    </h4>
                    <p>
                      Studying computer science, software development, and network
                      management at ITB Swadharma. Gaining hands-on experience in
                      web development, database management, system analysis, and
                      participating in projects related to IT infrastructure and
                      application development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">💼 Work Experience</h3>
            <div className="flex flex-col gap-4">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Full-Stack Developer at Iris&Co (2025-2026)
                    </h4>
                    <p>
                      Architected and developed a comprehensive management
                      dashboard for articles and influencer campaigns using
                      Next.js, Supabase, and Firebase. Engineered complex
                      automation workflows using n8n and integrated AI
                      technologies (Gemini & OpenAI API) to automate creative
                      content generation and multi-platform publishing.
                      Implemented automated interaction features via the Meta API
                      and optimized overall database architecture to ensure high
                      scalability and responsive performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Backend Developer (Intern) at Open Your Mind Indonesia
                      (2024)
                    </h4>
                    <p>
                      Back-End Developer for Open Your Mind Indonesia's web-based
                      system. Initiated the project with SRS documentation (DFD,
                      Use Cases, Activity Diagrams), collaborated on UI design
                      with Figma, built the database with MySQL, and developed the
                      back-end using PHP with Laravel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
