// Vendor imports
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

// Project imports
import "./components/styles/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work";
import ProjectDetails from "./components/ProjectDetails";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <HelmetProvider>
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/work/:path" element={<ProjectDetails />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </AnimatePresence>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
