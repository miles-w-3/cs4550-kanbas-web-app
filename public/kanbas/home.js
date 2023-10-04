import { navLayout } from "./components/standard.js";
import { subNavMap } from "./components/courses.js";

document.addEventListener("DOMContentLoaded", function() {

  const breadCrumbs = ["CS4550.12631.202410", "Home"]

  const breadCrumbArgs = [breadCrumbs, true]

  const subNavArgs = [subNavMap, "Home"]

  const mainContent = homeContent()

  document.body.innerHTML = navLayout(breadCrumbArgs, subNavArgs, mainContent, "Courses")
});


const modules = {
  "Week 0 - INTRO": {
    "LEARNING OBJECTIVES": {
      "Introduction to the course": undefined,
      "Learn what is Web Development": undefined,
      "Creating a development environment": undefined,
      "Creating a Web Application": undefined,
      "Getting started with the 1st assignment": undefined
    },
    "READING": {
      "Full Stack Developer - Chapter 1 - Introduction": undefined,
      "Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML": undefined
    },
    "SLIDES": {
      "Introduction to Web Development": "#",
      "Creating an HTTP server with Node.js": "#",
      "Creating a React Application": "#",
    }
  },
  "Week 1 - HTML": {
    "LEARNING OBJECTIVES": {
      "Learn how to create user interfaces with HTML": undefined,
      "Keep working on assignment 1": undefined,
      "Deploy the assignment to Netlify": undefined,
    },
    "READING": {
      "Full Stack Developer - Chapter 3 - JavaScript Overview": undefined,
      "Full Stack Developer - Chapter 4 - A quick guide to React": undefined
    },
  },
}

const topButtons = `
  <div class="d-flex justify-content-end">
    <button type="button" class="btn btn-secondary pr-2 mr-2">Collapse All</button>
    <button type="button" class="btn btn-secondary pr-2 mr-2">View Progress</button>
    <div class="btn-group">
      <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
        <i class="wd-green far fa-check-circle"></i> Publish All
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#"><i class="far fa-check-circle"></i> Publish All</a></li>
      </ul>
    </div>
    <button type="button" class="btn btn-danger"><i class="fas fa-plus"></i> Module</button>
    <button type="button" class="btn btn-secondary"><i class="fas fa-ellipsis-v"></i></button>
  </div>
`


export function homeContent() {
  let acc = `<div class="col-xl-7 col-lg-6 col-md-8 col-sm-12">`
  acc += topButtons
  acc += moduleContent()
  acc += "</div>"

  acc += `<div class="col-lg-3 d-none d-lg-block">`
  acc += rightPanel()
  acc += "</div>"

  return acc

}

function moduleContent() {
  let acc = `<ul class="list-group p-3">`

  for (const [header, content] of Object.entries(modules)) {
    acc += `<li class="list-group-item list-group-item-secondary">${header}</li>`
    acc += `<ul class="list-group">`
    for (const [contentName, subContent] of Object.entries(content)) {
      acc += `
        <li class="list-group-item">${contentName}</li>
        <ul class="list-group">
      `
      for (const [subContentName, link] of Object.entries(subContent)) {
        acc += makeSubcontentLine(subContentName, link)
      }
      acc += `</ul>`

    }
    acc += `</ul><hr class="border-0">`
  }
  acc += `</ul>`
  return acc

}

function makeSubcontentLine(text, link) {
  return `
    <li class="list-group-item">
      <div class="row ms-4">
        <div class="col">
          ${link != null ? `<a href="${link}">${text}</a>` : text}
        </div>
        <div class="col-auto float-end">
          <i class="fas fa-check-circle wd-green me-2"></i><i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
    </li>
  `;
}

const rightPanelButtons = [
  "Import Existing Content",
  "Import From Commons",
  "View Course Stream",
  "New Announcement",
  "New Analytics",
  "View Course Notifications",
]

function fillRightPanel() {
  let acc = ""
  for (const text of rightPanelButtons) {
    acc += `
    <div class="row">
      <button class="btn btn-secondary" type="button">${text}</button>
    </div>
    `
  }
  return acc;
}

function rightPanel() {
  return `
    <div>
      <h5>Course Status</h5>
      <div class="row mb-2">
        <button class="col btn btn-secondary me-0 ms-0 ps-1 pe-1" type="button"><i class="fas fa-ban"></i> Unpublish</button>
        <button class="col btn btn-success me-0 ms-0 ps-1 pe-1" type="button"><i class="fas fa-check-circle"></i> Published</button>
      </div>
      ${fillRightPanel()}
    </div>


    <h5 class="border-bottom pt-2 pb-1">To Do</h5>

    <ul class=" wd-sidebar list-group">
      <li class="list-group-item"><a href="#">Grade A1</a></li>
    </ul>

    <h5 class="border-bottom pt-2 pb-1">Coming Up</h5>

    <ul class=" wd-sidebar list-group">
      <li class="list-group-item"><a href="#">CS4550 11:45 AM</a></li>
      <li class="list-group-item"><a href="#">CS4550 2:50 PM</a></li>
      <li class="list-group-item"><a href="#">CS5610 6:00 PM</a></li>
    </ul>
  `
}