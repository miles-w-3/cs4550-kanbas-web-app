import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import {
  findModulesForCourse,
  createModule,
  deleteModule as clientDeleteModule,
  updateModule as clientUpdateModule
} from "./client";


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

function Module({title, content, onEdit, onDelete}) {
  return (
    <li className="list-group-item list-group-item-secondary module-group mb-4">
      <div className="row">
        <div className="col">
          {title}
          <div className="text-muted">
            {content}
          </div>
        </div>
        <div className="col-auto d-flex align-items-center">
          <button
            className='btn btn-danger'
            onClick={() => onDelete()}>
            Delete
          </button>
          <button
            className='btn btn-secondary'
            onClick={() => onEdit()}>
            Edit
          </button>

        </div>
      </div>
    </li>
  );
}

export default function ModuleList({ colProps }) {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId, dispatch]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    clientDeleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    await clientUpdateModule(module);
    console.log('before dispatch')
    dispatch(updateModule(module));
    console.log('after dispatch')

  };



  return (
    <div className={colProps ?? ''}>
      <TopButtons/>
      <hr />

      <ul className="list-group module-group">
        <li className="list-group-item list-group-item-secondary module-group mb-4">
          <div className="row">
            <div className="col">
              <input value={module.name}onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>
              <br />
              <textarea value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
              />
            </div>
            <div className="col-auto d-flex align-items-center">
              <button
                className="btn btn-success"
                onClick={handleAddModule}>
                Add
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleUpdateModule(module)}>
                Update
              </button>

            </div>
          </div>
        </li>

        {
          modules
            .filter((module) => module.course === courseId)
            .map((module) => (
              <Module
                key={module._id}
                title={module.name}
                content={module.description}
                onDelete={() => handleDeleteModule(module._id)}
                onEdit={() => dispatch(setModule(module))}
              />
            ))
        }
      </ul>
    </div>
  );
}
