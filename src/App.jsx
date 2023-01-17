import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import NoMatch from "./pages/NoMatch";
import Catering from "./pages/Catering";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router basename="/Maneeley">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </div>
    </Router>
  );
}

export default App;
