export function subNav(settingsMap, active) {
  console.log(`settingsMap is ${JSON.stringify(settingsMap)}`)
  let acc = `
    <ul class="list-group wd-sidebar p-3">

    `
  for (const [text, link] of Object.entries(settingsMap)) {
    let activeText = ''
    if (text === active) {
      activeText = 'wd-sub-bar-active'
    }
    acc += `    <li class="list-group-item ${activeText}"><a href="${link}">${text}</a></li>`
  }

  acc += '</ul>'
  return acc;
}

export function breadCrumbs(crumbsList, showStudentViewButton) {
  return `
    <div class="row wd-breadcrumbs">
      <div class="col">
        <nav style="--bs-breadcrumb-divider: '>';" class="d-flex justify-content-start wd-red" aria-label="breadcrumb">
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