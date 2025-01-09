import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

import { Suspense, lazy, useContext } from "react";
import { AuthContext } from "./auth/context";
import { LoadingOverlay } from "@mantine/core";
import Holiday from "./pages/Holiday";

const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const NoMatch = lazy(() => import("./pages/NoMatch"));
const Catering = lazy(() => import("./pages/Catering"));
const Admin = lazy(() => import("./pages/Admin"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Banquets = lazy(() => import("./pages/Banquets"));
const Weddings = lazy(() => import("./pages/Weddings"));
const ImageGallery = lazy(() => import("./pages/Gallery"));
const NewPassword = lazy(() => import("./pages/NewPassword"));

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/catering"
            element={
              <Suspense
                fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
                <Catering />
              </Suspense>
            }
          />
          <Route
            path="/holiday"
            element={
              <Suspense
                fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
                <Holiday />
              </Suspense>
            }
          />
          <Route
            path="/banquets"
            element={
              <Suspense
                fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
                <Banquets />
              </Suspense>
            }
          />
          <Route
            path="/weddings"
            element={
              <Suspense
                fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
                <Weddings />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense
                fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
                <ImageGallery />
              </Suspense>
            }
          />
          <Route
            path="/admin"
            element={
              <Suspense
                fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Suspense
                  fallback={
                    <LoadingOverlay visible={true} overlayOpacity={1} />
                  }>
                  <Dashboard />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/newpassword"
            element={
              <ProtectedRoute>
                <Suspense
                  fallback={
                    <LoadingOverlay visible={true} overlayOpacity={1} />
                  }>
                  <NewPassword />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <Suspense
                fallback={<LoadingOverlay visible={true} overlayOpacity={1} />}>
                <NoMatch />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
        <ScrollTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
