import { Link } from "react-router-dom";
import db from "../Database";


function CourseCard({ course }) {

  return (
    <div className="card shadow-sm" style={{width: '18rem'}}>
      <img src="/kanbas/card.jpg" className="card-img-top" alt="ISEC Bridge Banner"/>
        <div className="card-body">
          <h5 className="card-title text-truncate"><Link className="text-danger text-decoration-none wd-hover-underline" to={`/Kanbas/Courses/${course._id}`}>{course.name}</Link></h5>
          <div className="card-text">{course.number}</div>
          <small className="text-muted card-text">{course.startDate} - {course.endDate}</small>
          <div className="p-1"><i className="fas fa-edit fa-lg text-muted"></i></div>
        </div>
    </div>
  );
}


export default function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <div className="ps-3">
        <h3>Published Courses ({courses.length})</h3>
        <hr />
      </div>
      <div className="d-flex gap-3 flex-wrap">
         {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}



