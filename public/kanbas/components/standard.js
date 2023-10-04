import { breadCrumbs, subNav, newSidebar} from "./skeletons.js";

// takes in function object for the main part of the layout
export function navLayout(breadCrumbArgs, subNavArgs, homeContent, sidebarHighlight="") {
  return `
    <div>
      ${newSidebar(sidebarHighlight)}
      <div class="wd-main-content">
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
