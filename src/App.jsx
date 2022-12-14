// styles
import './styles/main.css';

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
        <Navbar/>
        {/* <HomePage /> */}
        {/* <ProjectsPage /> */}
        <ProjectPage />
        {/* <ContactsPage /> */}
        {/* <NotFoundPage /> */}
        <Footer />
    </div>
  );
}

export default App;
