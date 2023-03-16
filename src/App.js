import React from "react";

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
