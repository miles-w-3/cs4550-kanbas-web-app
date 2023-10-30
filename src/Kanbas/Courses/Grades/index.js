import db from "../../Database";
import { useParams } from "react-router-dom";
import CourseContent from "../CourseContent";
import { FaCheckCircle, FaCog, FaFileExport, FaFileImport, FaFilter } from "react-icons/fa";
function Grades({courses}) {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <CourseContent courses={courses}>
      <div className="col me-2">
        <div className="d-flex justify-content-end">
          <div className="pe-2">
            <button type="button" className="btn btn-secondary py-2"><FaFileImport/> Import</button>
          </div>
          <div className="btn-group pe-2">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false">
              <FaFileExport /> Export
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"><FaCheckCircle/> Publish All</a></li>
            </ul>
          </div>
          <button type="button" className="btn btn-secondary"><FaCog/> </button>
        </div>


        <div className="row pb-3">
          <div className="col-auto form-group">
            <label for="text-fields-student-names"><span className="fw-bold">Student Names</span></label>
            <input placeholder="Search Students" className="form-control" id="text-fields-student-names" title="Enter Name" />
          </div>

          <div className="col-auto form-group">
            <label for="text-fields-assignment-names"><span className="fw-bold">Assignment Names</span></label>
            <input placeholder="Search Assignments" className="form-control" id="text-fields-assignment-names" title="Enter Assignments" />
          </div>
        </div>

        <div className="pb-3">
          <button className="btn btn-secondary" type="button"><FaFilter/> Apply Filters</button>
        </div>

        <div className="table-responsive">
            <table className="table table-striped table-bordered me-2">
            <thead>
              <th>Student Name</th>
              {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </thead>

            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr>
                    <td>{user.firstName} {user.lastName}</td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                      return (<td>{grade?.grade || ""}</td>);
                    })}
                  </tr>);
              })}
            </tbody></table>
        </div>
      </div>
    </CourseContent>);
}
export default Grades;