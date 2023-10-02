import { navLayout } from "../components/standard.js";
import { subNavMap } from "./index.js";

document.addEventListener("DOMContentLoaded", function() {

  const breadCrumbs = ["Miles Wilson's Profile"]
  const breadCrumbArgs = [breadCrumbs, false]

  const subNavArgs = [subNavMap, "Profile"]

  const mainContent = editScreen()

  document.body.innerHTML = navLayout(breadCrumbArgs, subNavArgs, mainContent)
});

function editScreen() {
  return `
    <div class="col">
    <i class="fas fa-user fa-4x"></i>

    <form class="mt-3">
    <div class="mb-3">
      <label class= "fw-bold" for="name">Name:</label>
      <input class="form-control" id="name" name="fullName" type="text" value="Miles Wilson" />
    </div>
    <div class="mb-3">
      <div class="fw-bold">Pronouns:</div>

      <div class="dropdown">
        <button class="btn border dropdown-toggle" type="button" id="pronounsMenu" data-bs-toggle="dropdown" aria-expanded="false">
        Unset
        </button>
        <ul aria-labelledby="pronounsMenu" class="dropdown-menu">
          <li><a class="dropdown-item" href="#">he/him</a></li>
          <li><a class="dropdown-item" href="#">she/her</a> </li>
          <li><a class="dropdown-item" href="#">they/them</a></li>
        </ul>
      </div>
    </div>
    <div class="mb-3">
      <label class= "fw-bold" for="title">Title:</label>
      <input class="form-control" id="title" type="text" value="" />

    </div>
    </form>



    <p><h4>Contact</h4>
    No registered services, you can add some on the <a href="#">settings</a> page
    </p>

    <p>
    <h4>Biography</h4>
    <div class="mb-3">
    <textarea class="form-control" cols="30" rows="5" name="Biography">Computer Science student at Northeastern</textarea>
    </div>
    </p>

    <h4>Links</h4>
    <div>
    <input type="text" value="Github" /> <span>&#8594</span>
    <input type="text" value="https://github.com/miles-w-3" /> <a href="#"><i class="fas fa-times text-danger"></i></a>
    </div>

    <div class="mt-2">
    <button class="btn btn-secondary">Add another link</button><br />
    </div>

    <hr />
    <div class="mt-2 d-flex justify-content-end">
      <a href="index.html"><button class="btn btn-secondary me-2">Cancel</button><button class="btn btn-danger">Save Profile</button></a>
    </div>

    </div>


    <div class="col">
      <form class=" action="/kanbas/profile/index.html">

        <button class="btn btn-secondary"><span>&#9998;</span> Cancel Editing</button>
      </form>
    </div>
  `
}