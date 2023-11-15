import { Link } from "react-router-dom";


function CourseCard({ course, onDelete, onEdit }) {

  return (
    <div className="card shadow-sm" style={{width: '18rem'}}>
      <img src="/kanbas/card.jpg" className="card-img-top" alt="ISEC Bridge Banner"/>
      <div className="card-body">
        <h5 className="card-title text-truncate"><Link className="text-danger text-decoration-none wd-hover-underline" to={`/Kanbas/Courses/${course._id}`}>{course.name}</Link></h5>
        <div className="card-text">{course.number}</div>
        <small className="text-muted card-text">{course.startDate} - {course.endDate}</small>
        <div className="p-1"><i className="fas fa-edit fa-lg text-muted"></i></div>
      </div>
      <button
        className="btn btn-secondary mb-2"
        onClick={(event) => {
          event.preventDefault();
          onEdit();
        }}>
        Edit
      </button>
      <button
        className="btn btn-danger mb-2"
        onClick={(event) => {
          event.preventDefault();
          onDelete();
        }}>
        Delete
      </button>

    </div>
  );
}


export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <h5>Course</h5>
        <input value={course.name} className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        <button onClick={addNewCourse} className="btn btn-secondary">
          Add
        </button>
        <button onClick={() => updateCourse(course)} className="btn btn-secondary" >
          Update
        </button>
      <hr />
      <div className="ps-3">
        <h3>Published Courses ({courses.length})</h3>
        <hr />
      </div>
      <div className="d-flex gap-3 flex-wrap">
         {courses.map((course) => (
          <CourseCard
            key={`${course._id}-${course.name}`}
            course={course}
            onDelete={() => deleteCourse(course._id)}
            onEdit={() => setCourse(course)}/>
        ))}
      </div>
    </div>
  );
}



