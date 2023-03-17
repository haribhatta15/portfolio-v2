import React from "react";
import { Route } from "react-router-dom";
import AboutMe from "./compo";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "./style.css";

function App() {
  return (
    <>
      <Route>
        <Route path="/" element={<Hero />} />
        <Route path="skills" element={<Skills />} />
        <Route path="project" element={<Projects />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  );
}

export default App;
