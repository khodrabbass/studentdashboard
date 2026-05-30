import { useState } from 'react';
import CourseCard from '../components/CourseCard';
import coursesData from '../components/coursesData';

function Courses() {

  const [query, setQuery] = useState('');

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container py-4">

      <h5 className="section-title">Courses</h5>

      <div className="search-wrap mb-4">
        <input type="text" className="form-control" placeholder="Search Courses..."
          value={query} onChange={e => setQuery(e.target.value)} />
        <button className="btn btn-primary">
          <i className="bi bi-search me-1"></i>Search
        </button>
      </div>

      <div className="row g-3">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} title={course.title} price={course.price}
              desc={course.desc} icon={course.icon} bg={course.bg} cols="col-12 col-sm-6 col-lg-4" />
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <i className="bi bi-search" style={{ fontSize: '3rem', color: '#ccc' }}></i>
            <p className="text-muted mt-2 fw-bold">No courses found.</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default Courses;