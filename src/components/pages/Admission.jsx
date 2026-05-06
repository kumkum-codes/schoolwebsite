import { useState } from "react";
import { Link } from "react-router-dom";

function Admission() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
    parentEmail: "",
    parentPhone: "",
    previousSchool: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admission Application Submitted Successfully!");
    console.log("Admission Data:", form);
    window.location.reload(); // Automatically refresh the page
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100 flex py-16 px-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden shadow-indigo-900/10">
        
        {/* Information Panel */}
        <div className="md:w-5/12 bg-gradient-to-br from-blue-800 to-indigo-700 text-white p-10 flex flex-col justify-between hidden md:flex">
          <div>
            <h2 className="text-3xl font-bold mb-4 pt-4">Start Your Journey With Us</h2>
            <p className="text-indigo-100 leading-relaxed mb-8">
              Welcome to our admissions portal. We are thrilled that you are considering our school for your child's future. Our holistic approach to education ensures every student achieves their fullest potential.
            </p>
            <div className="space-y-6 text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📚</span>
                <p>World-class curriculum and facilities</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌍</span>
                <p>Globally recognized faculty</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏆</span>
                <p>Record of outstanding student achievement</p>
              </div>
            </div>
          </div>
          <div className="text-indigo-200 text-sm pb-4">
            <p>Need help? Contact our admisions office at:</p>
            <p className="font-semibold text-white mt-1">admissions@school.edu</p>
          </div>
        </div>

        {/* Application Form */}
        <div className="md:w-7/12 p-10 w-full">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-2">
              Student Admission
            </h2>
            <p className="text-slate-500 text-sm">Please fill out the form entirely to apply for the upcoming academic year.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-5 md:space-y-0">
              <div className="w-full">
                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-700 mb-1">First Name</label>
                <input type="text" name="firstName" onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              <div className="w-full">
                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-700 mb-1">Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-5 md:space-y-0">
              <div className="w-full">
                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-700 mb-1">Date of Birth</label>
                <input type="date" name="dob" onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              <div className="w-full">
                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-700 mb-1">Grade Applying For</label>
                <select name="grade" onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                  <option value="">Select Grade...</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-700 mb-1">Previous School Attended</label>
              <input type="text" name="previousSchool" onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-5 md:space-y-0">
              <div className="w-full">
                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-700 mb-1">Parent's Email</label>
                <input type="email" name="parentEmail" onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              <div className="w-full">
                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-700 mb-1">Parent's Phone</label>
                <input type="tel" name="parentPhone" onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
            </div>

            <button type="submit" className="w-full mt-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-bold py-3.5 rounded-lg hover:from-blue-600 hover:to-indigo-500 shadow-md shadow-indigo-200 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              Submit Application
            </button>
          </form>

          <p className="text-center text-slate-500 text-xs mt-6">
            By submitting this form, you agree to our 
            <Link to="#" className="font-semibold text-indigo-600 ml-1">Privacy Policy</Link> and 
            <Link to="#" className="font-semibold text-indigo-600 ml-1">Terms of Service</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admission;
