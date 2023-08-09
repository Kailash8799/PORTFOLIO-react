import React from "react";
import Navbar from './compotents/Navbar';
import Home from './compotents/Home';
import About from './compotents/About'
import Contact from './compotents/Contact'
import Skills from './compotents/Skill'
import Project from './compotents/Project'
import Resume from './compotents/Resume'
import Eduction from './compotents/Eduction'
import Footer from './compotents/Footer'

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Eduction/>
      <Skills/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App;