import { useParams } from "react-router";
import db from "../../Kanbas/Database";
import BreadCrumbs from "../SubNavigation/BreadCrumbs";
import CourseNavigation from "./CourseNavigation";

function _fillCrumbs(crumbs, params) {
  if (params.courseId) crumbs.push(params.courseId);

  // get page name
  const pageName = params["*"].split('/')[0];
  if (pageName) crumbs.push(pageName);

  // translate assignment id to name where necessary
  if (params.assignmentId) {
    const assignment = db.assignments.find(
      (assignment) => assignment._id === params.assignmentId);
    crumbs.push(assignment.title)
  }

}


export default function CourseContent({ children }) {
  const params = useParams();
  const crumbs = [];

  _fillCrumbs(crumbs, params);

  return (
    <>
      <BreadCrumbs crumbs={crumbs}/>
      <div className="row">
        <CourseNavigation/>
        {children}
      </div>
    </>
  );


}
