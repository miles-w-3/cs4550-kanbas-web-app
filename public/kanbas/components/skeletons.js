export function subNav(settingsMap, active) {
  console.log(`settingsMap is ${JSON.stringify(settingsMap)}`)
  let acc = `
    <div class="col-auto d-none d-md-block me-2">
      <ul class="list-group wd-sidebar">
    `
  for (const [text, link] of Object.entries(settingsMap)) {
    let activeText = ''
    if (text === active) {
      activeText = 'wd-sub-bar-active'
    }
    acc += `    <li class="list-group-item ${activeText}"><a href="${link}">${text}</a></li>`
  }

  acc += '</ul></div>'
  return acc;
}

export function breadCrumbs(crumbsList, showStudentViewButton) {
  return `
    <div class="row wd-breadcrumbs">
      <div class="col">
        <nav class="d-flex justify-content-start wd-red wd-breadcrumb-nav" aria-label="breadcrumb">
          <ol class="breadcrumb">
            ${fillBreadCrumbs(crumbsList)}
          </ol>
        </nav>
      </div>
      ${studentViewButton(showStudentViewButton)}
    </div>
  `
}

function studentViewButton(showStudentViewButton) {
  if (showStudentViewButton === false) {
    return ""
  }
  return `
  <div class="col-auto d-flex justify-content-end">
    <button type="button" class="btn btn-secondary"><i class="fas fa-glasses"></i> Student View</button>
  </div>
  `;
}

function fillBreadCrumbs(crumbsList) {
  if (crumbsList.length === 0) {
    return ""
  }
  let acc = `<li class="breadcrumb-item ${crumbsList.length === 1 ? "text-muted" : ""}" aria-current="page"<button type="button"><i class="fas fa-bars fa-lg wd-red"></i></button>   ${crumbsList[0]}</li>`;
  for (let i = 1; i < crumbsList.length; i++) {
    if (i === crumbsList.length - 1) {
      acc += `<li class="breadcrumb-item text-muted" aria-current="page">${crumbsList[i]}</li>`
      break;
    }
    acc += `<li class="breadcrumb-item" aria-current="page">${crumbsList[i]}</li>`
  }
  return acc;
}

const sidebarEntries = {
  Account: ["/kanbas/profile", `<i class="far fa-user fa"></i>`],
  Dashboard: ["/kanbas/dashboard.html", `<i class="fas fa-tachometer-alt fa"></i>`],
  Courses: ["/kanbas/home.html", `<i class="fas fa-book fa wd-sidebar"></i>`],
  Calendar: ["#", `<i class="far fa-calendar-alt"></i>`],
  Inbox: ["#", `<i class="fas fa-inbox"></i>`],
  History: ["#", `<i class="far fa-clock"></i>`],
  Studio: ["#", `<i class="fas fa-tv"></i>`],
  Commons: ["#", `<i class="fas fa-copyright"></i>`],
  Help: ["#", `<i class="far fa-question-circle"></i>`]
}

export function newSidebar(highlight="") {
  return `
    <div class="wd-main-sidebar flex-column">
      <ul class="nav flex-column text-center wd-sidebar">
        <li class="wd-nav-item">
          <a href="/kanbas/index.html" class="wd-nav-item">
            <div class="wd-n-logo"></div>
          </a>
        </li>
        ${fillSidebarItems(highlight)}
      </ul>
    </div>
  `
}

function fillSidebarItems(highlight) {
  let acc = "";
  for (const [label, config] of Object.entries(sidebarEntries)) {
    acc += sidebarItem(label, config, highlight)
  }
  return acc;
}

function sidebarItem(label, config, highlight) {
  const activeHighlight = highlight === label ? "wd-sidebar-active" : ""
  let acc = `
    <li class ="wd-nav-item">
      <a href="${config[0]}" class="nav-link wd-nav-item ${activeHighlight}">
        ${config[1]}
        <div class="wd-sidebar-labels ${activeHighlight}">${label}</div>
      </a>
    </li>
  `
  return acc
}