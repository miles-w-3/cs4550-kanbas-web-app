import { navLayout } from "../components/standard.js";

export const subNavMap = {
  Notifications: "#",
  Profile: "#",
  Files: "#",
  Settings: "#",
  ePortfolios: "#",
  "Shared Content": "#",
  "The Hub": "#",
  "Qwickly Course Tools": "#",
  "Global Announcements": "#",
}

document.addEventListener("DOMContentLoaded", function() {

  const breadCrumbs = ["Miles Wilson's Profile"]
  const breadCrumbArgs = [breadCrumbs, false]

  const subNavArgs = [subNavMap, "Profile"]

  const mainContent = profileScreen()

  document.body.innerHTML = navLayout(breadCrumbArgs, subNavArgs, mainContent, "Account")
});


function profileScreen() {
  return `
  <div class="col">
  <i class="fas fa-user fa-6x"></i>

  <h2 class="pb-2">Miles Wilson</h2>


  <p><h4>Contact</h4>
  No registered services, you can add some on the <a href="#">settings</a> page
  </p>

  <p>
  <h4>Biography</h4>
  Computer Science student at Northeastern University
  </p>

  <p>
  <h4>Links</h4>
  <a href="https://github.com/miles-w-3/">Github</a>
  </p>
  </div>
  <div class="col">
    <form action="/kanbas/profile/edit.html">
      <button class="btn btn-secondary"><span>&#9998;</span> Edit Profile</button>
    </form>
  </div>
  `
}
