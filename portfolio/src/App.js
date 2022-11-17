// Vendor imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Project imports
import "./components/styles/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Development from "./components/Development";
import Design from "./components/Design";
import About from "./components/About";
import ProjectDetails from "./components/ProjectDetails";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
