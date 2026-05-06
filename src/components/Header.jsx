import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  if (location.pathname === '/birthday') return null;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md border-b border-blue-700/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-3xl group-hover:rotate-12 transition-transform origin-bottom">🎓</span>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Edu<span className="font-light text-blue-300">Core</span>
          </h1>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          
          <Link to="/about" className="text-sm font-semibold text-blue-100 hover:text-white transition-colors">
            About Us
          </Link>
          <Link to="/subjects" className="text-sm font-semibold text-blue-100 hover:text-white transition-colors">
            Subjects
          </Link>
          <Link to="/admission" className="text-sm font-semibold text-blue-100 hover:text-white transition-colors">
            Admissions
          </Link>
          <Link to="/contact" className="text-sm font-semibold text-blue-100 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-5">
          <Link to="/login" className="text-sm font-semibold text-blue-200 hover:text-white transition-colors hidden sm:block">
            Login
          </Link>
          <Link 
            to="/signup" 
            className="text-sm font-bold bg-white text-blue-900 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 hover:-translate-y-0.5 transition-all"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;