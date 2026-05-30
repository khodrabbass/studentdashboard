import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <Link className="navbar-brand" to="/home">
          <i className="bi bi-mortarboard-fill me-2"></i>LearnHub
        </Link>

        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <div className="navbar-nav ms-auto align-items-lg-center gap-1">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/courses">Courses</Link>
            <Link className="nav-link" to="/schedule">Schedule</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="btn-accent ms-2" to="/login">
              <i className="bi bi-person-fill"></i> Login
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;