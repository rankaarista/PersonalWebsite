import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Home from "./components/Home";
import { About } from "./components/About";
import { Contact } from './components/Contact';
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";

export default function PageRouter() {

    return <HashRouter>
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route index element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="Experience" element={<Experience />} />
                <Route path="Contact" element={<Contact />} />
            </Route>
        </Routes>
    </HashRouter>
}