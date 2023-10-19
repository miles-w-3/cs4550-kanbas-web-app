import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import BreadCrumbs from "../SubNavigation/BreadCrumbs";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CourseContent from "./CourseContent";

function Courses() {
  const { courseId, assignmentId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  const location = useLocation()
  const pageParts = location.pathname.split('/');
  const page = pageParts[pageParts.length - 1] ?? pageParts[pageParts.length - 2] ;

  const crumbs = [course.number, page]

  console.log(`FROM MAIN: is ${JSON.stringify(useParams())}`)


  return (

    <Routes>
      <Route path="/" element={<Navigate to="Home" />} />
      <Route path="Home" element={<Home />} />
      <Route path="Modules" element={<Modules />} />
      <Route path="Assignments" element={<Assignments />} />
      <Route path="Grades" element={<Grades />} />
      <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
      <Route path="*" element={<CourseContent/>}/>
    </Routes>

  );
}
export default Courses;