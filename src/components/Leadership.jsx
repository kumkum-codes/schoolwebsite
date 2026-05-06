import { useNavigate } from "react-router-dom";

function Leadership() {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          Our Leadership
        </h2>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Director */}
          <div className="bg-white shadow-xl shadow-slate-200/50 rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100">
            <img
              src="/assets/portraits/indian_man_1_1775272530692.png"
              alt="Director"
              className="w-32 h-32 mx-auto rounded-full mb-6 ring-4 ring-blue-50 object-cover"
            />
            <h3 className="text-2xl font-bold text-slate-800">Dr. Rajiv Kapur</h3>
            <p className="text-indigo-600 font-medium mb-3">Director</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leading the institution with vision, excellence, and a passion for student success.
            </p>
          </div>

          {/* Co-Director */}
          <div className="bg-white shadow-xl shadow-slate-200/50 rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100">
            <img
              src="/assets/portraits/indian_woman_2_1775272608972.png"
              alt="Co-Director"
              className="w-32 h-32 mx-auto rounded-full mb-6 ring-4 ring-blue-50 object-cover"
            />
            <h3 className="text-2xl font-bold text-slate-800">Prof. Anjali Menon</h3>
            <p className="text-indigo-600 font-medium mb-3">Co-Director</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Supporting academic and administrative growth with modern teaching methodologies.
            </p>
          </div>

          {/* Principal */}
          <div className="bg-white shadow-xl shadow-slate-200/50 rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100">
            <img
              src="/assets/portraits/indian_man_2_1775272553131.png"
              alt="Principal"
              className="w-32 h-32 mx-auto rounded-full mb-6 ring-4 ring-blue-50 object-cover"
            />
            <h3 className="text-2xl font-bold text-slate-800">Mr. Vikram Singh</h3>
            <p className="text-indigo-600 font-medium mb-3">Principal</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ensuring quality education, holistic discipline, and a nurturing environment.
            </p>
          </div>

        </div>

        {/* ✅ Single View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/leadership-details")}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-700 to-indigo-600 border border-transparent rounded-full hover:from-blue-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-lg shadow-indigo-200"
          >
            Explore Leadership Team
            <svg className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leadership;