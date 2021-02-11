import React from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import LandingPage from "./components/LandingPage"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import './App.css';



function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <LandingPage />
      <Skills />
      <Projects />
      <Contact />
      

    
      
    </div>
  );
}

export default App;
