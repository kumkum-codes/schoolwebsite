import { useNavigate } from "react-router-dom";

function LeadershipDetails() {
  const navigate = useNavigate();

  const leaders = [
    {
      name: "Dr. Rajiv Kapur",
      title: "Director",
      image: "/assets/portraits/indian_man_1_1775272530692.png",
      bio: "Dr. Kapur brings over 25 years of educational leadership experience, dedicating his life to cultivating an environment where every student excels.",
      email: "director@school.edu.in"
    },
    {
      name: "Prof. Anjali Menon",
      title: "Co-Director",
      image: "/assets/portraits/indian_woman_2_1775272608972.png",
      bio: "A visionary in modern education methods, Prof. Menon has modernized our curriculum and led several innovation programs.",
      email: "amenon@school.edu.in"
    },
    {
      name: "Mr. Vikram Singh",
      title: "Principal",
      image: "/assets/portraits/indian_man_2_1775272553131.png",
      bio: "Focused on holistic development and discipline, Mr. Singh works closely with students and faculty to maintain academic excellence.",
      email: "principal@school.edu.in"
    },
    {
      name: "Mrs. Meera Reddy",
      title: "Head of Operations",
      image: "/assets/portraits/indian_woman_1_1775272591398.png",
      bio: "Meera ensures the seamless day-to-day operations of the school, managing our state-of-the-art facilities and support staff.",
      email: "operations@school.edu.in"
    },
    {
      name: "Dr. Siddharth Rao",
      title: "Dean of Students",
      image: "/assets/portraits/indian_man_3_1775272570163.png",
      bio: "Advocating for student well-being and campus life, Dr. Rao oversees counseling, extracurricular activities, and student success initiatives.",
      email: "dean@school.edu.in"
    },
    {
      name: "Ms. Kavya Joshi",
      title: "Chief Academic Officer",
      image: "/assets/portraits/indian_woman_3_1775272631426.png",
      bio: "With a background in child psychology, Kavya leads academic strategy and pedagogical training for our educators.",
      email: "academic@school.edu.in" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Meet Our Leadership Team
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our leadership team plays a vital role in shaping the future of the school. 
            With decades of combined experience, they are committed to fostering excellence, 
            innovation, and the holistic development of every student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <div key={index} className="group relative bg-white shadow-md border border-gray-100 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg mb-6 border-4 border-white group-hover:scale-105 transition-transform"
              />
              <h3 className="text-2xl font-bold text-slate-800 text-center">{leader.name}</h3>
              <p className="text-indigo-600 font-medium text-center mb-4">{leader.title}</p>
              <div className="w-12 h-1 bg-indigo-500 rounded mx-auto mb-4"></div>
              <p className="text-slate-600 text-sm text-center leading-relaxed mb-6">
                {leader.bio}
              </p>
              <div className="text-center">
                <a href={`mailto:${leader.email}`} className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-indigo-800 transition-colors">
                  Contact {leader.name.split(' ')[1]} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full shadow-sm hover:shadow-md hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeadershipDetails;