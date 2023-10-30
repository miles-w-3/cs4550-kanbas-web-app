import React, {useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

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
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className={colProps ?? ''}>
      <TopButtons/>
      <hr />

      <ul className="list-group module-group">
        <li className="list-group-item">
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
        </li>

        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item list-group-item-secondary module-group mb-4">
                {module.name}
                <button
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <button
                  onClick={() => dispatch(setModule(module))}>                  Edit
                </button>

              </li>
            ))
        }
      </ul>
    </div>
  );
}
