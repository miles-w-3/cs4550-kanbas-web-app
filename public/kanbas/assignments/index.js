import { navLayout } from "../components/standard.js";
import { subNavMap } from "../components/courses.js";

document.addEventListener("DOMContentLoaded", function() {

  const breadCrumbs = ["CS4550.12631.202410", "Assignments"]
  const breadCrumbArgs = [breadCrumbs, true]

  const subNavArgs = [subNavMap, "Assignments"]

  const mainContent = assignmentsScreen()

  document.body.innerHTML = navLayout(breadCrumbArgs, subNavArgs, mainContent, "Courses")
});

const assignmentsSetup = {
  Assignments: {
    "A1 SETUP": [
      "Week 0 - SETUP",
      "Due Sep 18, 2023",
    ],
    "A2 HTML": [
      "Week 1 - HTML",
      "Due Sep 25, 2023",
    ],
    "A3 CSS": [
      "Week 2 - CSS",
      "Due Oct 2, 2023",
    ],
    "A4 BOOTSTRAP": [
      "Week 3 - Bootstrap",
      "Due Oct 10, 2023",
    ],
    "A5 JAVASCRIPT": [
      "Week 4 - JavaScript",
      "Due Oct 16, 2023",
    ],
    "A6 REACT": [
      "Week 5 - React & Routing",
      "Due Oct 23, 2023",
    ],
  }
}


const topRow = `
  <div class="row">
  <div class="col d-flex">
    <input placeholder=" Search for Assignment" id="text-fields-assignments" title="Search Assignments"/>
  </div>

  <div class="col d-flex justify-content-end">
    <button type="button" class="btn btn-secondary"><i class="fas fa-plus"></i> Group</button>
    <button type="button" class="btn btn-danger"><i class="fas fa-plus"></i> Assignment</button>
    <button type="button" class="btn btn-secondary"><i class="fas fa-ellipsis-v"></i></button>
  </div>
  </div>
  `

function blocks() {
  let acc = `<ul class="list-group p-3">`
  for (const [blockName, blockContent] of Object.entries(assignmentsSetup)) {
    acc += `<li class="list-group-item list-group-item-secondary">${blockName}</li>`
    for (const [itemName, itemContent] of Object.entries(blockContent)) {
      acc += `
        <li class="list-group-item">
          <div class="row">
            <div class="col-auto d-flex align-items-center">
              <i class="fas fa-pen-square wd-green"></i>
            </div>
            <div class="col">
              <a class="wd-assignment-link" href="/kanbas/assignments/edit.html">${itemName}</a>
              <div class="text-muted">
                ${itemContent[0]} <br />
                ${itemContent[1]}
              </div>
            </div>
            <div class="col-auto d-flex align-items-center">
              <i class="fas fa-check-circle wd-green me-4"></i><i class="fas fa-ellipsis-v"></i>
            </div>
          </div>
        </li>`
    }
    acc += "</ul>"
  }

  return acc;
}

function assignmentsScreen() {
  return `
  <div class="col">
  ${topRow}
  <hr>

  ${blocks()}
  </div>
  `
}
