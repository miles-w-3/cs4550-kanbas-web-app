import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import CourseContent from "../CourseContent";
function Assignments({courses}) {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <CourseContent courses={courses}>
      <div className="col me-4">
        <h2>Assignments for course {courseId}</h2>

        <ul className="list-group module-group">
          <li className="list-group-item list-group-item-secondary module-group">
            ASSIGNMENTS
          </li>
        </ul>
            <div className="list-group module-group">
              {courseAssignments.map((assignment) => (
                <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="list-group-item module-group">
                  {assignment.title}
                </Link>
              ))}
            </div>
      </div>
    </CourseContent>
  );
}
export default Assignments;