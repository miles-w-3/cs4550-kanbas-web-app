import CourseContent from "../CourseContent";
import ModuleList from "./ModuleList";

export default function Modules({courses}) {
  return (
    <CourseContent courses={courses}>
      <div className="col">
        <ModuleList colProps={'col pe-4'} />
      </div>
    </CourseContent>
  );
}