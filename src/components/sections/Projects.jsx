import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Bank Fraud Detection Project Using Machine Learning</h3>
              <p className="text-gray-400 mb-4">
              Developed a machine learning model to detect fraudulent activities in banking transactions. The project involved data preprocessing, feature engineering, model training, and performance evaluation to enhance fraud detection accuracy</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Gradient Boosting"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://web-production-e2c49.up.railway.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a href="https://github.com/agungdhrs/fraud-detection.git"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Code →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Student Graduation Prediction Project Using Machine Learning</h3>
              <p className="text-gray-400 mb-4">
                Developed a machine learning application to predict student graduation outcomes based on academic and demographic data. The project involved data preprocessing, feature selection, training a Random Forest classifier, and evaluating model performance to support early identification of at-risk students.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Random Forest"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://aplikasikinerjamahasiswa-zorufl5dmfvoeb7fmkcpwp.streamlit.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/agungdhrs/Aplikasi_Kinerja_Mahasiswa.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Code →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
