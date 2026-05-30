import { useState } from 'react';

const scheduleData = [
  { time: '9:00 AM',  mon: { name: 'Web Development Basics', color: 'slot-blue' }, tue: null, wed: { name: 'Data Structures', color: 'slot-green' }, thu: null, fri: null },
  { time: '10:00 AM', mon: null, tue: null, wed: null, thu: { name: 'Computer Science 101', color: 'slot-orange' }, fri: null },
  { time: '11:00 AM', mon: null, tue: { name: 'Introduction to Algorithms', color: 'slot-purple' }, wed: null, thu: { name: 'Introduction to Algorithms', color: 'slot-purple' }, fri: null },
  { time: '2:00 PM',  mon: null, tue: { name: 'Database Management', color: 'slot-red' }, wed: null, thu: { name: 'Network Security', color: 'slot-teal' }, fri: null },
];

const summaryStats = [
  { icon: 'bi bi-calendar-week-fill', number: '7',   label: 'Classes This Week' },
  { icon: 'bi bi-clock-fill',         number: '12h', label: 'Study Hours'       },
  { icon: 'bi bi-check2-circle',      number: '6',   label: 'Courses Active'    },
  { icon: 'bi bi-trophy-fill',        number: 'A-',  label: 'Avg. Grade'        },
];

function Schedule() {

  const [query, setQuery] = useState('');

  const renderSlot = (slot) => {
    if (!slot) return null;
    const dimmed = query && !slot.name.toLowerCase().includes(query.toLowerCase());
    return (
      <div className={`slot ${slot.color} ${dimmed ? 'dimmed' : ''}`}>
        {slot.name}
      </div>
    );
  };

  return (
    <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h5 className="section-title mb-0">Weekly Schedule</h5>
        <div className="input-group" style={{ maxWidth: '260px' }}>
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <input type="text" className="form-control border-start-0"
            placeholder="Search courses..." value={query} onChange={e => setQuery(e.target.value)} />
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered schedule-table text-center align-middle">
          <thead>
            <tr>
              <th>Time</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map(row => (
              <tr key={row.time}>
                <td className="time-col fw-bold">{row.time}</td>
                <td>{renderSlot(row.mon)}</td>
                <td>{renderSlot(row.tue)}</td>
                <td>{renderSlot(row.wed)}</td>
                <td>{renderSlot(row.thu)}</td>
                <td>{renderSlot(row.fri)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h5 className="section-title mt-5 mb-3">This Week at a Glance</h5>
      <div className="row g-3">
        {summaryStats.map(stat => (
          <div className="col-6 col-md-3" key={stat.label}>
            <div className="stat-card">
              <div className="stat-icon"><i className={stat.icon}></i></div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Schedule;