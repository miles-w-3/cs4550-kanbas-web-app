import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";


function TopButtons() {
  return (
    <div className="d-flex justify-content-end">
      <button type="button" className="btn btn-secondary pr-2 mr-2">Collapse All</button>
      <button type="button" className="btn btn-secondary pr-2 mr-2">View Progress</button>
      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          <FaCheckCircle className="text-success" /> Publish All
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#"><i className="far fa-check-circle"></i> Publish All</a></li>
        </ul>
      </div>
      <button type="button" className="btn btn-danger"><FaPlus /> Module</button>
      <button type="button" className="btn btn-secondary"><FaEllipsisV/></button>
    </div>

  );
}

export default function ModuleList({ colProps }) {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className={colProps ?? ''}>
      <TopButtons/>
      <hr />

      <ul className="list-group module-group">
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <li key={index} className="list-group-item list-group-item-secondary module-group mb-4">{module.name}</li>
            ))
        }
      </ul>
    </div>
  );
}
