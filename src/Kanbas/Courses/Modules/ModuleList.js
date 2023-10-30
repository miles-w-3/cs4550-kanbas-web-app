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

function Module({title, content, onEdit, onDelete}) {
  return (
    <li class="list-group-item list-group-item-secondary module-group mb-4">
      <div class="row">
        <div class="col-auto d-flex align-items-center">
          <i class="fas fa-pen-square wd-green"></i>
        </div>
        <div class="col">
          {title}
          <div class="text-muted">
            {content}
          </div>
        </div>
        <div class="col-auto d-flex align-items-center">
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
  // function blocks() {


  //   let acc = `<ul class="list-group p-3">`
  //   for (const [blockName, blockContent] of Object.entries(assignmentsSetup)) {
  //     acc += `<li class="list-group-item list-group-item-secondary">${blockName}</li>`
  //     for (const [itemName, itemContent] of Object.entries(blockContent)) {
  //       acc += `
  //       <li class="list-group-item">
  //         <div class="row">
  //           <div class="col-auto d-flex align-items-center">
  //             <i class="fas fa-pen-square wd-green"></i>
  //           </div>
  //           <div class="col">
  //             <a class="wd-assignment-link" href="/kanbas/assignments/edit.html">${itemName}</a>
  //             <div class="text-muted">
  //               ${itemContent[0]} <br />
  //               ${itemContent[1]}
  //             </div>
  //           </div>
  //           <div class="col-auto d-flex align-items-center">
  //             <i class="fas fa-check-circle wd-green me-4"></i><i class="fas fa-ellipsis-v"></i>
  //           </div>
  //         </div>
  //       </li>`
  //     }
  //     acc += "</ul>"
  //   }

  //   return acc;
  // }
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
            .map((module) => (
              <Module
                key={module._id}
                title={module.name}
                content={module.description}
                onDelete={() => dispatch(deleteModule(module._id))}
                onEdit={() => dispatch(setModule(module))}
              />
            ))
        }
      </ul>
    </div>
  );
}
