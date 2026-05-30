import { useState } from 'react';

function Contact() {

  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [subject,  setSubject]  = useState('');
  const [message,  setMessage]  = useState('');
  const [feedback, setFeedback] = useState({ show: false, success: false, text: '' });

  const sendMessage = () => {
    if (!name || !email || !subject || !message) {
      setFeedback({ show: true, success: false, text: 'Please fill in all fields.' });
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setFeedback({ show: true, success: false, text: 'Please enter a valid email.' });
      return;
    }
    setFeedback({ show: true, success: true, text: 'Message sent successfully! We will get back to you soon.' });
    setName(''); setEmail(''); setSubject(''); setMessage('');
  };

  return (
    <div className="container py-4">
      <div className="row g-4">

        <div className="col-12 col-lg-7">
          <div className="auth-card w-100" style={{ maxWidth: '100%' }}>
            <h5 className="section-title">Contact & Support</h5>

            <div className="row g-3 mb-3">
              <div className="col-sm-6">
                <label className="form-label fw-bold">Name</label>
                <input type="text" className="form-control" placeholder="Your full name"
                  value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="col-sm-6">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" placeholder="your@email.com"
                  value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Subject</label>
              <select className="form-select" value={subject} onChange={e => setSubject(e.target.value)}>
                <option value="">-- Select a subject --</option>
                <option>Course Question</option>
                <option>Technical Issue</option>
                <option>Billing</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Message</label>
              <textarea className="form-control" rows="5" placeholder="Write your message here..."
                value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>

            {feedback.show && (
              <div className={`feedback-msg mb-3 ${feedback.success ? 'feedback-success' : 'feedback-error'}`}>
                {feedback.text}
              </div>
            )}

            <button className="btn btn-primary w-100 py-2 fw-bold" onClick={sendMessage}>
              <i className="bi bi-send-fill me-2"></i>Send Message
            </button>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="auth-card" style={{ background: 'linear-gradient(135deg,#1565C0,#1E88E5)', color: '#fff', maxWidth: '100%' }}>
            <h5 className="fw-bold mb-4">Get in Touch</h5>
            {[
              { icon: 'bi-envelope-fill',  title: 'Email Us',      value: 'support@learnhub.com'   },
              { icon: 'bi-telephone-fill', title: 'Call Us',       value: '+961 81348779'      },
              { icon: 'bi-clock-fill',     title: 'Support Hours', value: 'Mon – Fri, 9 AM – 6 PM' },
              { icon: 'bi-geo-alt-fill',   title: 'Location',      value: '123 Learning'       },
            ].map(item => (
              <div className="d-flex align-items-start gap-3 mb-4" key={item.title}>
                <div className="info-icon"><i className={`bi ${item.icon}`}></i></div>
                <div>
                  <div className="fw-bold">{item.title}</div>
                  <div style={{ opacity: '.8', fontSize: '.9rem' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;