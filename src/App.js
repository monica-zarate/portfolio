// Vendor imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Project imports
import "./components/styles/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Design from "./components/Design";
import Development from "./components/Development";
import ProjectDetails from "./components/ProjectDetails";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/design" element={<Design />}></Route>
          <Route path="/design/:path" element={<ProjectDetails />}></Route>
          <Route path="/development" element={<Development />}></Route>
          <Route path="/development/:path" element={<ProjectDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
