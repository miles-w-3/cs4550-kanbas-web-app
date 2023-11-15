import { useParams } from "react-router";
import db from "../../Kanbas/Database";
import BreadCrumbs from "../SubNavigation/BreadCrumbs";
import CourseNavigation from "./CourseNavigation";
import { useEffect, useState } from "react";
import axios from "axios";

function _fillCrumbs(crumbs, course, params) {
  crumbs.push(course.number);

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


export default function CourseContent({ children, courses }) {
  const params = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(params.courseId);
  }, [params.courseId]);


  const crumbs = [];

  _fillCrumbs(crumbs, course, params);

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
