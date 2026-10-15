import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

import { Suspense, lazy, useContext } from "react";
import { AuthContext } from "./auth/context";
import { LoadingOverlay } from "@mantine/core";
import Home from "./pages/Home";

const Contact = lazy(() => import("./pages/Contact"));
const NoMatch = lazy(() => import("./pages/NoMatch"));
const Catering = lazy(() => import("./pages/Catering"));
const Holiday = lazy(() => import("./pages/Holiday"));
const Admin = lazy(() => import("./pages/Admin"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Banquets = lazy(() => import("./pages/Banquets"));
const Corporate = lazy(() => import("./pages/Corporate"));
const Weddings = lazy(() => import("./pages/Weddings"));
const ImageGallery = lazy(() => import("./pages/Gallery"));
const NewPassword = lazy(() => import("./pages/NewPassword"));

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Suspense
          fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/holiday" element={<Holiday />} />
            <Route path="/banquets" element={<Banquets />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/gallery" element={<ImageGallery />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/newpassword"
              element={
                <ProtectedRoute>
                  <NewPassword />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
