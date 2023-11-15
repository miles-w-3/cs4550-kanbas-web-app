import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CourseContent from "./CourseContent";
import store from "./store";
import { Provider } from "react-redux";

function Courses() {

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Assignments" element={<Assignments />} />
        <Route path="Grades" element={<Grades />} />
        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
        <Route path="*" element={<CourseContent />}/>
      </Routes>
    </Provider>

  );
}
export default Courses;