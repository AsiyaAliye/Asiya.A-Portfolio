import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import MyProjects from "./Components/MyProjects/MyProjects";
import ProjectDetails from "./Components/MyProjects/ProjectDetails";
import Header from "./Components/Header/Header";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <About />
            <MyProjects />
          </>
        } />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App;
