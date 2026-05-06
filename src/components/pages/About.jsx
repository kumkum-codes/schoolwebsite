import Leadership from '../Leadership';
import Faculty from '../Faculty';
import Subject from './Subject';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-100 text-center py-16">
        <h1 className="text-4xl font-bold text-blue-800">
          Welcome to Our School
        </h1>
        <p className="mt-4 text-gray-600">
          Empowering students with knowledge, skills, and values.
        </p>
      </div>

      {/* About Section (2 Parts) */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12 px-10">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            About Our School
          </h2>
          <p className="text-gray-600 leading-7">
            Our school is committed to providing high-quality education that 
            nurtures creativity, discipline, and leadership among students. 
            We focus on both academic excellence and overall personality 
            development to prepare students for future challenges.
          </p>
          <p className="text-gray-600 mt-4 leading-7">
            With modern classrooms, experienced teachers, and a supportive 
            environment, we ensure that every student achieves their full potential.
          </p>
        </div>

        {/* Right Side - Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
            alt="School"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 px-10">
        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-bold text-xl">📚 Quality Education</h3>
          <p className="text-gray-600 mt-2">
            Best teaching methods and experienced teachers.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-bold text-xl">🏫 Modern Campus</h3>
          <p className="text-gray-600 mt-2">
            Smart classrooms and advanced facilities.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-bold text-xl">🎯 Career Focus</h3>
          <p className="text-gray-600 mt-2">
            Helping students achieve their goals.
          </p>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-2xl mx-10 mt-16 p-10 text-center shadow-inner border border-indigo-100 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-indigo-900 mb-4">Ready to Join Our Community?</h2>
        <p className="text-indigo-700 max-w-xl mb-8">Take the first step towards a brighter future. Our admissions are currently open for the upcoming academic year.</p>
        <Link to="/admission" className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-indigo-500 hover:-translate-y-1 transition-all">
          Apply For Admission Now
        </Link>
      </div>

      <Subject />
      <Faculty />
      <Leadership />
      
    </div>
  );
}

export default About;