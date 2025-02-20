import React from 'react';
import { HashRouter, Route, Routes, Outlet } from 'react-router-dom';
import MainPage from './MainPage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
// import Experience from './pages/Experience';

export default function PageRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/projects" element={<Projects />} />
          <Route path="pages/contact" element={<Contact />} />
          {/* <Route path="experience" element={<Experience />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}