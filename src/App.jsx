import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Admission from "./components/pages/Admission";
import Leadership from "./components/Leadership";
import LeadershipDetails from "./components/Leadershipdetails";
import Subject from "./components/pages/Subject";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Default Page */}
        <Route path="/" element={<About />} />
        
        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/leadership-details" element={<LeadershipDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/subjects" element={<Subject />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;