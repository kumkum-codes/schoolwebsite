
import { subjectDetails } from '../subjectDetails';

function Subject() {
  // Map icons and colors to subject names for a richer aesthetic
  const getSubjectStyle = (name) => {
    if (name.includes('Math') || name.includes('Physics')) return { icon: '♾️', color: 'bg-blue-50 text-blue-600 border-blue-200' };
    if (name.includes('Literature')) return { icon: '📚', color: 'bg-rose-50 text-rose-600 border-rose-200' };
    if (name.includes('Chemistry')) return { icon: '🧪', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' };
    if (name.includes('History')) return { icon: '🌍', color: 'bg-amber-50 text-amber-600 border-amber-200' };
    if (name.includes('Computer')) return { icon: '💻', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' };
    if (name.includes('Biology')) return { icon: '🌿', color: 'bg-green-50 text-green-600 border-green-200' };
    return { icon: '📖', color: 'bg-gray-50 text-gray-600 border-gray-200' };
  };


  return (
    <div className="min-h-screen  mt-4 p-3 bg-gray-50 flex flex-col">
      {/* Header Section */}
      <section className="text-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden shadow-inner">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl  md:text-4xl font-extrabold text-indigo-900 mb-4 tracking-tight">
            Academic Subjects
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded mb-6"></div>
          <p className="text-lg text-blue-800 md:text-xl">
            Explore our diverse range of subjects designed to ignite curiosity, foster critical thinking, and prepare students for a brilliant future.
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="flex py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjectDetails.map((subject) => {
              const style = getSubjectStyle(subject.name);
              return (
                <div 
                  key={subject.id} 
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 flex flex-col h-full group"
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 border ${style.color} group-hover:scale-110 transition-transform duration-300`}>
                    {style.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {subject.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-8  leading-relaxed">
                    {subject.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Teacher</p>
                      <p className="text-sm font-medium text-gray-900">{subject.teacher}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subject;