import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

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

import { useContext } from "react";
import { AuthContext } from "./auth/context";
import Banquets from "./pages/Banquets";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router basename="/Maneeley/">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/banquets" element={<Banquets />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </div>
    </Router>
  );
}

export default App;
