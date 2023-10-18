import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import BreadCrumbs from "../SubNavigation/BreadCrumbs";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const location = useLocation()
  const pageParts = location.pathname.split('/');
  const page = pageParts[pageParts.length - 1] ?? pageParts[pageParts.length - 2] ;
  const crumbs = [course.number, page]

  return (
    <>
      <BreadCrumbs crumbs={crumbs}/>
      <div className="row">
        <CourseNavigation/>

        { /* it is expected that each of these elements are a col*/}
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Grades" element={<Grades />} />
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
          <Route
            path="Assignments/:assignmentId"
            element={<h1>Assignment Editor</h1>}
          />
          <Route path="Grades" element={<h1>Grades</h1>} />

        </Routes>
      </div>
    </>
  );
}
export default Courses;