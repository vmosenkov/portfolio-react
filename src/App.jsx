// styles
import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/projects" element={<ProjectsPage />} />
               <Route path="/project" element={<ProjectPage />} />
               <Route path="/contacts" element={<ContactsPage />} />
               {/* <Route path="/projects/:id" element={<ProjectPage />} /> */}
            </Routes>
         </Router>
         <Footer />
      </div>
   );
}

export default App;
