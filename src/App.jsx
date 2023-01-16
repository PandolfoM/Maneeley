import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
