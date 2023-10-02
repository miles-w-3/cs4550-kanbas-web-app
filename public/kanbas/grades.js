import { navLayout } from "./components/standard.js";
import { subNavMap } from "./components/courses.js";

document.addEventListener("DOMContentLoaded", function() {

  const breadCrumbs = ["CS4550.12631.202410", "Grades"]

  const breadCrumbArgs = [breadCrumbs, false]

  const subNavArgs = [subNavMap, "Grades"]

  const mainContent = gradesContent()

  document.body.innerHTML = navLayout(breadCrumbArgs, subNavArgs, mainContent)
});


function gradesContent() {
  return `
    <div class="col">

    <div class="d-flex justify-content-end">
      <div class="pe-2">
        <button type="button" class="btn btn-secondary py-2"><i class="fas fa-file-import"></i> Import</button>
      </div>
      <div class="btn-group pe-2">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          <i class="fas fa-file-export"></i> Export
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#"><i class="far fa-check-circle"></i> Publish All</a></li>
        </ul>
      </div>
      <button type="button" class="btn btn-secondary"><i class="fas fa-cog"></i></button>
    </div>


    <div class="row pb-3">
      <div class="col-auto form-group">
        <label for="text-fields-student-names"><span class="fw-bold">Student Names</span></label>
        <input placeholder="Search Students" class="form-control" id="text-fields-student-names" title="Enter Name"/>
      </div>

      <div class="col-auto form-group">
        <label for="text-fields-assignment-names"><span class="fw-bold">Assignment Names</span></label>
        <input placeholder="Search Assignments" class="form-control" id="text-fields-assignment-names" title="Enter Assignments"/>
      </div>
    </div>

    <div class="pb-3">
      <button class="btn btn-secondary" type="button"><i class="fas fa-filter"></i> Apply Filters</button>
    </div>

    <div class="container d-flex p-0">
    <table class="table table-striped table-bordered p-0">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>A1 - HTML</th>
          <th>A2 - CSS</th>
          <th>A3 - JS</th>
          <th>A4 - PHP</th>
          <th>A5 - SQL</th>
          <th>A6 - React</th>
          <th>Q1</th>
          <th>Q2</th>
          <th>Q3</th>
          <th>Q4</th>
          <th>Q5</th>
          <th>Q6</th>
          <th>Exam 1</th>
          <th>Exam 2</th>
          <th>Exam 3</th>
          <th>Exam 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td><input id="alice-1"type="number" min="0" max="100" size="5" value="99"/></td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td><input id="alice-2"type="number" min="0" max="100" size="5" value="76"/></td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
        </tr>

        <tr>
          <td>Bob</td>
          <td><input id="bob-1"type="number" min="0" max="100" size="5" value="98"/></td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td><input id="bob-2"type="number" min="0" max="100" size="5" value="89"/></td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
        </tr>

        <tr>
          <td>Robert</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td><input id="robert-1"type="number" min="0" max="100" size="5" value="99"/></td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td><input id="robert-2"type="number" min="0" max="100" size="5" value="76"/></td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
        </tr>

        <tr>
          <td>Jill</td>
          <td><input id="jill-1"type="number" min="0" max="100" size="5" value="98"/></td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td><input id="jill-2"type="number" min="0" max="100" size="5" value="89"/></td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  `;
}