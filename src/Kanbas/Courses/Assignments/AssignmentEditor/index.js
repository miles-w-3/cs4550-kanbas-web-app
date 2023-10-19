import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import CourseContent from "../../CourseContent";


function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <CourseContent>
      <div className="col">
        <h2>Edit {assignment.title}</h2>
        <input defaultValue={assignment.title}
          className="form-control mb-2" />
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary me-2 rounded-0">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2 rounded-0">
          Save
        </button>
      </div>
    </CourseContent>
  );
}
export default AssignmentEditor;