import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </div>
    </Router>
  );
}

export default App;
