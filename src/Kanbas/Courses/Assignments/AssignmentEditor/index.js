import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
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
    <div className="col">
      <h2>Edit {assignment.title}</h2>
      <input value={assignment.title}
        className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-secondary me-2 rounded-0">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger me-2 rounded-0">
        Save
      </button>
    </div>
  );
}
export default AssignmentEditor;