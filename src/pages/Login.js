import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const VALID_USERNAME = 'khodr';
const VALID_PASSWORD = '1234';

function Login() {
  const navigate = useNavigate();

  const [username,  setUsername]  = useState('');
  const [password,  setPassword]  = useState('');
  const [showPass,  setShowPass]  = useState(false);
  const [errUser,   setErrUser]   = useState(false);
  const [errPass,   setErrPass]   = useState(false);
  const [success,   setSuccess]   = useState(false);
  const [wrongCred, setWrongCred] = useState(false);

  const doLogin = () => {
    setErrUser(false); setErrPass(false); setSuccess(false); setWrongCred(false);
    let valid = true;
    if (!username) { setErrUser(true); valid = false; }
    if (!password) { setErrPass(true); valid = false; }
    if (!valid) return;
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setSuccess(true);
      setTimeout(() => navigate('/home'), 1500);
    } else {
      setWrongCred(true);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-start g-4">

        <div className="col-12 col-md-5">
          <div className="auth-card">
            <div className="text-center mb-4">
              <div className="login-logo"><i className="bi bi-mortarboard-fill"></i></div>
              <h4 className="fw-bold mt-3 mb-1">Student Login</h4>
              <p className="text-muted" style={{ fontSize: '.9rem' }}>Sign in to access your dashboard</p>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Username</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="bi bi-person-fill text-muted"></i></span>
                <input type="text" className="form-control border-start-0" placeholder="Enter username"
                  value={username} onChange={e => setUsername(e.target.value)} />
              </div>
              {errUser && <div className="err-msg"><i className="bi bi-exclamation-triangle-fill me-1"></i>Please enter your username.</div>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="bi bi-lock-fill text-muted"></i></span>
                <input type={showPass ? 'text' : 'password'} className="form-control border-start-0"
                  placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="input-group-text bg-white" type="button" onClick={() => setShowPass(!showPass)}>
                  <i className={`bi ${showPass ? 'bi-eye-slash-fill' : 'bi-eye-fill'} text-muted`}></i>
                </button>
              </div>
              {errPass && <div className="err-msg"><i className="bi bi-exclamation-triangle-fill me-1"></i>Please enter your password.</div>}
            </div>

            {success   && <div className="feedback-msg feedback-success mb-3"><i className="bi bi-check-circle-fill me-2"></i>Login successful! Redirecting...</div>}
            {wrongCred && <div className="feedback-msg feedback-error mb-3"><i className="bi bi-x-circle-fill me-2"></i>Incorrect username or password.</div>}

            <button className="btn btn-primary w-100 py-2 fw-bold" onClick={doLogin}>
              <i className="bi bi-box-arrow-in-right me-2"></i>Login
            </button>

            <hr className="my-4" />
            <p className="text-center text-muted mb-0" style={{ fontSize: '.85rem' }}>
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="fw-bold text-decoration-none"
                style={{ color: 'var(--primary)' }}
              >
                Sign up free
              </Link>
            </p>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <div className="auth-card" style={{ background: 'linear-gradient(135deg,#1565C0,#1E88E5)', color: '#fff', minHeight: '420px' }}>
            <h4 className="fw-bold mb-2">Start Learning Today </h4>
            <p style={{ opacity: '.85' }}>Access all your courses, schedule, grades and more.</p>
            {[
              { icon: 'bi-journal-bookmark-fill', title: '6 Courses Available', sub: 'From beginner to advanced'  },
              { icon: 'bi-calendar-check-fill',   title: 'Weekly Schedule',     sub: 'Never miss a class'         },
              { icon: 'bi-bar-chart-fill',        title: 'Track Your Progress', sub: 'Grades and assignments'     },
              { icon: 'bi-headset',               title: '24/7 Support',        sub: 'We are always here to help' },
            ].map(item => (
              <div className="d-flex align-items-center gap-3 mb-3" key={item.title}>
                <div className="feature-dot"><i className={`bi ${item.icon}`}></i></div>
                <div>
                  <div className="fw-bold">{item.title}</div>
                  <div style={{ opacity: '.75', fontSize: '.85rem' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
