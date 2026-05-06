import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful! Welcome back.");
    console.log("Logged in with:", form);
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 flex justify-center items-center py-12 px-6">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit}
          className="bg-white p-10 shadow-sm rounded-3xl border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-slate-500 text-sm">Please enter your details to log in.</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                onChange={handleChange}
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                <Link to="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                onChange={handleChange}
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                required
              />
            </div>
          </div>

          <button className="w-full mt-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-bold py-3.5 rounded-xl hover:from-blue-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-lg shadow-indigo-200 hover:-translate-y-0.5 transition-all">
            Log In
          </button>

          <p className="text-center text-slate-600 text-sm mt-8">
            Don't have an account yet?{" "}
            <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;