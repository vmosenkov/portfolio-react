import React from 'react'

// styles
import './styles/main.css';

/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import { Routes, Route, useLocation } from "react-router-dom";

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// pages
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/Project/ProjectsPage/ProjectsPage';
import ProjectPage from './pages/Project/ProjectPage/ProjectPage';
import ContactsPage from './pages/ContactsPage';
import MySkillsPage from './pages/MySkillsPage';
import NotFoundPage from './pages/NotFoundPage';

// utils
import ScrollToTop from './utils/scrollToTop.js'

function App() {

   const location = useLocation();

   return (
      <div className="App">
         <ScrollToTop />
         <Navbar />
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;