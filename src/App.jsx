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
import NotFoundPage from './pages/NotFoundPage';

// utils
import ScrollToTop from './utils/scrollToTop.js'

function App() {
   return (
      <div className="App">
         <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/projects" element={<ProjectsPage />} />
               <Route path="/project/:id" element={<ProjectPage />} />
               <Route path="/contacts" element={<ContactsPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Router>
         <Footer />
      </div>
   );
}

export default App;
