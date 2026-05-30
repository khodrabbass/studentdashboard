function StatCard({ icon, number, label }) {
  return (
    <div className="col-6 col-md-3">
      <div className="stat-card">
        <div className="stat-icon"><i className={icon}></i></div>
        <div className="stat-number">{number}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

export default StatCard;