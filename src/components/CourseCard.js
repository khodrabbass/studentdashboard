import { useState } from 'react';

function CourseCard({ title, price, desc, icon, bg, cols }) {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={cols}>
      <div className="course-card h-100">
        <div className={`course-thumb ${bg}`}>{icon}</div>
        <div className="course-body">
          <div className="course-price">{price} / mo</div>
          <h6 className="course-title">{title}</h6>
          <p className="course-desc">{desc}</p>
          <button
            className="btn btn-primary btn-sm w-100"
            onClick={() => setShowModal(true)}
          >
            View Course
          </button>
        </div>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow">

              {/* Modal Header */}
              <div className="modal-header border-0">
                <div className={`course-thumb rounded-3 me-3 ${bg}`}
                  style={{ width: '60px', height: '60px', fontSize: '2rem' }}>
                  {icon}
                </div>
                <h5 className="modal-title fw-bold">{title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <p className="text-muted">{desc}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold" style={{ color: 'var(--primary)' }}>
                    Price: {price} / month
                  </span>
                  <span className="badge bg-success px-3 py-2">Available</span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary fw-bold"
                  onClick={() => { alert('Enrolled in ' + title + '!'); setShowModal(false); }}
                >
                  Enroll Now
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default CourseCard;