import { breadCrumbs, subNav } from "./skeletons.js";

// takes in function object for the main part of the layout
export function navLayout(breadCrumbArgs, subNavArgs, homeContent) {
  return `
    <div class="row">
      <div class="col-auto">
        ${sidebar()}
      </div>
      <div class="col">
        ${kanbasContent(breadCrumbArgs, subNavArgs, homeContent)}
      </div>
    </div>
  `;
}

// represents the main content of the page
function kanbasContent(breadCrumbArgs, subNavItemsArgs, homeContent) {
  return `
    ${
      breadCrumbArgs == null ? "" :
      `<div class="row p-3">
      ${breadCrumbs(...breadCrumbArgs)}
      </div>`
    }
    <div class="row p-3">
      ${subNavItemsArgs == null ? "" : subNav(...subNavItemsArgs)}
      ${homeContent}
    </div>
  `
}

// TODO: what's the best way to do the white highlight?
function sidebar() {
  return `
    <div class="d-flex flex-column wd-sidebar">
      <ul class="nav flex-column text-center wd-sidebar">
        <li class="wd-nav-item">
          <a href="/kanbas/index.html" class="py-3 wd-nav-item">
            <div class="wd-n-logo"></div>
          </a>
        </li>
        <li class="wd-nav-item">
          <a href="/kanbas/profile" class="nav-link py-3 wd-nav-item">
            <i class="far fa-user fa"></i>
            <div class="wd-sidebar-labels">Account</div>
          </a>
        </li>
        <li class="wd-nav-item">
          <a href="/kanbas/dashboard.html" class="nav-link py-3 wd-nav-item">
            <i class="fas fa-tachometer-alt fa"></i>
            <div class="wd-sidebar-labels">Dashboard</div>
          </a>
        </li>
        <li class="wd-nav-item">
          <a href="#" class="nav-link py-3 wd-nav-item">
            <i class="fas fa-book fa wd-sidebar"></i>
            <div class="wd-sidebar-labels">Courses</div>
          </a>
        </li>
        <li class ="wd-nav-item">
          <a href="#" class="nav-link py-3 wd-nav-item">
            <i class="far fa-calendar-alt"></i>
            <div class="wd-sidebar-labels">Calendar</div>
          </a>
        </li>
        <li class ="wd-nav-item">
          <a href="#" class="nav-link py-3 wd-nav-item">
            <i class="fas fa-inbox"></i>
            <div class="wd-sidebar-labels">Inbox</div>
          </a>
        </li>
        <li class ="wd-nav-item">
          <a href="#" class="nav-link py-3 wd-nav-item">
            <i class="far fa-clock"></i>
            <div class="wd-sidebar-labels">History</div>
          </a>
        </li>
        <li class ="wd-nav-item">
          <a href="#" class="nav-link py-3 wd-nav-item">
            <i class="fas fa-tv"></i>
            <div class="wd-sidebar-labels">Studio</div>
          </a>
        </li>
        <li class ="wd-nav-item">
          <a href="#" class="nav-link py-3 wd-nav-item">
            <i class="fas fa-copyright"></i>
            <div class="wd-sidebar-labels">Commons</div>
          </a>
        </li>
        <li class ="wd-nav-item">
          <a href="#" class="nav-link py-3 wd-nav-item">
            <i class="far fa-question-circle"></i>
            <div class="wd-sidebar-labels">Help</div>
          </a>
        </li>
      </ul>
    </div>
  `
}