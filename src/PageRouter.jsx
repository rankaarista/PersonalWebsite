// src/PageRouter.jsx
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from './pages/Contact';
import { Projects } from "./pages/Projects";

export default function PageRouter() {
  return (
    <HashRouter>
      <Routes>
           <Route path="/" element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="pages/About" element={<About />} />
          <Route path="pages/Projects" element={<Projects />} />
          <Route path="pages/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}