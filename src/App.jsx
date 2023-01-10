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
               <Route path="/portfolio-react" element={<HomePage />} />
               <Route path="/portfolio-react/projects" element={<ProjectsPage />} />
               <Route path="/portfolio-react/project/:id" element={<ProjectPage />} />
               <Route path="/portfolio-react/contacts" element={<ContactsPage />} />
               {/* <Route path="/portfolio-react/myskills" element={<MySkillsPage />} /> */}
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Router>
         </Suspense>
         <Footer />
      </div>
   );
}

export default App;
