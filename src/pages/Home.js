import { useNavigate } from 'react-router-dom';
import StatCard from '../components/StatCard';
import CourseCard from '../components/CourseCard';
import coursesData from '../components/coursesData';

const stats = [
  { icon: 'bi bi-journal-bookmark-fill', number: '5',  label: 'Total Courses'   },
  { icon: 'bi bi-alarm-fill',            number: '3',  label: 'Assignments Due' },
  { icon: 'bi bi-bar-chart-fill',        number: 'A-', label: 'Grade Average'   },
  { icon: 'bi bi-chat-dots-fill',        number: '7',  label: 'Messages'        },
];

// My courses — only first 3 using filter
const myCourseIds = [1, 2, 3];

function Home() {
  const navigate = useNavigate();

  const myCourses = coursesData.filter(course =>
    myCourseIds.includes(course.id)
  );

  return (
    <div className="container py-4">

      <div className="welcome-banner rounded-4 p-4 mb-4 text-white">
        <div className="d-flex justify-content-between align-items-start">
          <div>
           <h2 className="fw-bold mb-1">Welcome Back, Khodr! </h2>
            <p className="mb-0" style={{ opacity: '.85' }}></p>
          </div>
          
        </div>
      </div>

      <div className="row g-3 mb-4">
        {stats.map(stat => (
          <StatCard key={stat.label} icon={stat.icon} number={stat.number} label={stat.label} />
        ))}
      </div>

     

      <div className="row g-3">
        {myCourses.map(course => (
          <CourseCard key={course.id} title={course.title} price={course.price}
            desc={course.desc} icon={course.icon} bg={course.bg} cols="col-12 col-sm-6 col-md-4" />
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary px-5 py-2 fw-bold" onClick={() => navigate('/courses')}>
          View All Courses
        </button>
      </div>

    </div>
  );
}

export default Home;