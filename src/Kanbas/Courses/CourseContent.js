import { useParams } from "react-router";
import BreadCrumbs from "../SubNavigation/BreadCrumbs";
import CourseNavigation from "./CourseNavigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CourseContent({ children }) {
  const params = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const findCourseById = async (courseId) => {
      const response = await axios.get(
        `${process.env.REACT_APP_KANBAS_BACKEND}/api/courses/${courseId}`
      );
      setCourse(response.data);
    };
    findCourseById(params.courseId);
  }, [params]);

  return (
    <>
      <BreadCrumbs course={course} params={params}/>
      <div className="row">
        <CourseNavigation/>
        {children}
      </div>
    </>
  );
}
