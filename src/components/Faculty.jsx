function Faculty() {
  const teachers = [
    {
      name: "Mr. Rajesh Sharma",
      subject: "Mathematics & Physics",
      image: "/assets/portraits/indian_man_3_1775272570163.png",
      experience: "15 Years Experience",
    },
    {
      name: "Ms. Priya Patel",
      subject: "Literature & English",
      image: "/assets/portraits/indian_woman_3_1775272631426.png",
      experience: "10 Years Experience",
    },
    {
      name: "Dr. Ankit Verma",
      subject: "Advanced Chemistry",
      image: "/assets/portraits/indian_man_1_1775272530692.png",
      experience: "12 Years Experience",
    },
    {
      name: "Mrs. Sunita Desai",
      subject: "History & Geography",
      image: "/assets/portraits/indian_woman_1_1775272591398.png",
      experience: "8 Years Experience",
    },
    {
      name: "Mr. Ramesh Kumar",
      subject: "Computer Science",
      image: "/assets/portraits/indian_man_2_1775272553131.png",
      experience: "7 Years Experience",
    },
    {
      name: "Ms. Sneha Iyer",
      subject: "Biology & Environment",
      image: "/assets/portraits/indian_woman_2_1775272608972.png",
      experience: "9 Years Experience",
    }
  ];

  return (
    <div className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-600 mb-4">
          Our Esteemed Faculty
        </h2>
        <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto text-lg pt-2">
          Learn from passionate, world-class educators committed to inspiring 
          students and fostering a culture of curiosity and excellence.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="group relative bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex items-center p-6 gap-6">
              <div className="relative shrink-0">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-24 h-24 rounded-full object-cover relative z-10 border-2 border-white shadow-md group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{teacher.name}</h3>
                <p className="text-indigo-600 font-semibold text-sm mb-2">{teacher.subject}</p>
                <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold">
                  {teacher.experience}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;
