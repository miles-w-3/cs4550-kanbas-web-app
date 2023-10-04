import { navLayout } from "../components/standard.js";
import { subNavMap } from "../components/courses.js";

document.addEventListener("DOMContentLoaded", function() {

  const breadCrumbs = ["CS4550.12631.202410", "Assignments", "A1 ENV + HTML"]
  const breadCrumbArgs = [breadCrumbs, false]

  const subNavArgs = [subNavMap, "Assignments"]

  const mainContent = editScreen()

  document.body.innerHTML = navLayout(breadCrumbArgs, subNavArgs, mainContent, "Courses")
});

const topRow = `
  <div class="row">
    <div class="col d-flex justify-content-end">
      <div class="wd-green me-4"><i class="fas fa-check-circle me-2"></i>Published</div>
      <button type="button" class="btn btn-secondary"><i class="fas fa-ellipsis-v"></i></button>
    </div>
  </div>
  `

const submissionOpts = [
  "Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Uploads"
]

function submissionCheckBoxes() {
  let count = 0
  let acc = ""
  for (const opt of submissionOpts) {
    acc += `
    <div class="form-check mt-2">
      <input class="form-check-input" type="checkbox" value="" id="subCheck-${count}">
      <label class="form-check-label" for="subCheck-${count}">
      ${opt}
      </label>
    </div>
    `
    count++;
  }
  return acc;
}

function editScreen() {
  return `
    <div class="col">
      ${topRow}
      <hr />
      <h2>Assignment Name</h2>
      <input class="form-control" placeholder="Assignment Name" id="name" title="Name for Assignment" value="A1 ENV + HTML"/>
      <div class="mt-4">
        <textarea class="form-control" rows="5" placeholder="Assignment Description" id="description">This assignment describes how to install the development environment...
        </textarea>
      </div>

      <div class="col-10">
      <div class="row mt-4">
        <div class="col-4 d-flex justify-content-end">
        Points
        </div>
        <div class="col me">
        <input class="form-control" placeholder="100" id="points" type="number" min="0" max="100" Points for Assignment/>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-4 d-flex justify-content-end">
        Assignment Group
        </div>
        <div class="col">
          <button class="btn border dropdown-toggle form-control" type="button" id="assignmentsGroup" data-bs-toggle="dropdown" aria-expanded="false">
          ASSIGNMENTS
          </button>
          <ul aria-labelledby="assignmentsGroup" class="dropdown-menu">
            <li><a class="dropdown-item" href="#">ASSIGNMENTS</a></li>
          </ul>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-4 d-flex justify-content-end">
        Display Grade As
        </div>
        <div class="col">
          <button class="btn border dropdown-toggle form-control" type="button" id="gradeDisplay" data-bs-toggle="dropdown" aria-expanded="false">
          Percentage
          </button>
          <ul aria-labelledby="gradeDisplay" class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Percentage</a></li>
          </ul>

          <div class="form-check mt-2">
            <label class="form-check-label" for="flexCheckDefault">
              Do not count this assignment towards the final grade
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
           </div>
        </div>
      </div>


      <div class="row mt-4">
        <div class="col-4 d-flex justify-content-end">
        Submission Type
        </div>
        <div class="col">
          <div class="container border" id="subType">
            <button class="btn border dropdown-toggle form-control mt-4" type="button" id="sType" data-bs-toggle="dropdown" aria-expanded="false">
            Online
            </button>
            <ul aria-labelledby="sType" class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Online</a></li>
            </ul>

            <div class="mt-2 mb-2">
              <div class="fw-bold">Online Entry Options</div>
              ${submissionCheckBoxes()}
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-4 d-flex justify-content-end">
        Assign
        </div>
        <div class="col">
          <div class="container border fw-bold" id="subType">
            <p class="mt-2">
              Assign To
            </p
            <p>
              <label for="text-fields-due">
                Due
              </label> <br />
              <input class = "form-control" type="date" id="text-fields-due" value="2001-01-01" /><br />
            </p>

            <div class="row">
              <div class="col pe-0">
                <label for="text-fields-available">
                Available from
                </label>
                <input class = "form-control" type="date" id="text-fields-available" value="2001-01-01" /><br />
              </div>
              <div class="col ps-0">
                <label for="text-fields-until">
                  Until
                </label>
                <input class="form-control" type="date" id="text-fields-until" value="2001-01-01" /><br />
              </div>
            </div>
          </div>
          <button class="btn btn-secondary form-control" type="button"><i class="fas fa-plus"></i> Add</button>
        </div>
      </div>

      <hr />
      <div class="row">
        <div class="col-auto">
          <input class="form-check-input" type="checkbox" value="" id="bottomCheck">
          <label class="form-check-label" for="bottomCheck">
          Notify users that this content has changed
          </label>
        </div>
        <div class="col d-flex justify-content-end">
          <a href="/kanbas/assignments"><button class="btn btn-secondary">Cancel</button><button class="btn btn-danger">Save</button></a>
        </div>
    </div>
  `
}