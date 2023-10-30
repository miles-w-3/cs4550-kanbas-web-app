import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CourseContent from "./CourseContent";
import store from "./store";
import { Provider } from "react-redux";

function Courses({ courses }) {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home courses={courses}/>} />
        <Route path="Modules" element={<Modules courses={courses} />} />
        <Route path="Assignments" element={<Assignments courses={courses} />} />
        <Route path="Grades" element={<Grades courses={courses} />} />
        <Route path="Assignments/:assignmentId" element={<AssignmentEditor courses={courses} />} />
        <Route path="*" element={<CourseContent courses={courses}/>}/>
      </Routes>
    </Provider>

  );
}
export default Courses;