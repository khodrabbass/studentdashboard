import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './styles/style.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/home"     element={<Home />} />
        <Route path="/courses"  element={<Courses />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/login"    element={<Login />} />
      </Routes>
      <footer>
       <p>&copy; 2026 Khodr's Dashboard Phase 2</p>
      </footer>
    </div>
  );
}

export default App;