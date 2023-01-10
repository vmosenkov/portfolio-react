import React from 'react'

import { Suspense } from 'react';

// styles
import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/Project/ProjectsPage/ProjectsPage';
import ProjectPage from './pages/Project/ProjectPage/ProjectPage';
import ContactsPage from './pages/ContactsPage';
import MySkillsPage from './pages/MySkillsPage';
import NotFoundPage from './pages/NotFoundPage';

// utils
import ScrollToTop from './utils/scrollToTop.js'

   
function Loading() {
   return <h2>🌀 Loading...</h2>;
}

function App() {
   return (
      <div className="App">
         <Suspense fallback={<Loading />}>
         <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/projects" element={<ProjectsPage />} />
               <Route path="/project/:id" element={<ProjectPage />} />
               <Route path="/contacts" element={<ContactsPage />} />
               <Route path="/myskills" element={<MySkillsPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Router>
         </Suspense>
         <Footer />
      </div>
   );
}

export default App;
