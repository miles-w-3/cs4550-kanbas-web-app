import { navLayout } from "./components/standard.js";
import { subNavMap } from "./components/courses.js";

document.addEventListener("DOMContentLoaded", function() {

  const breadCrumbArgs = undefined

  const subNavArgs = undefined

  const mainContent = dashboardContent()

  document.body.innerHTML = navLayout(breadCrumbArgs, subNavArgs, mainContent, "Dashboard")
});

function dashboardContent() {
  const cards = [
    ["CS4530 Fundamentals of Software Engineering", "CS4530.MERGED", "Fall 2023"],
    ["CS4550 Web Development", "CS4550.19753", "Fall 2023"],
    ["CS2500 Fundamentals of Computer Science", "CS2500.Merged", "Fall 2023"],
    ["CS2510 Fundamentals II", "CS2510.Merged", "Fall 2023"],
    ["HIST2211 The World Since 1945", "HIST2211.24321", "Fall 2023"],
    ["HIST1390 Espionage 2", "HIST1390.33434", "Fall 2023"],
    ["Khoury Student Services", "CCIS.Advising.UG", ""]
  ]
  return `
    <h1>Dashboard</h1>
    <hr />
    <div class="ps-3">
      <h3>Published Courses (${cards.length})</h3>
      <hr />
    </div>
    <div class="d-flex gap-3 flex-wrap">
      ${makeCards(cards)}
    </div>
  `;
}

function makeCards(cards) {
  let acc = ""
  for (const cardSpec of cards) {
    acc += makeCard(...cardSpec)
  }
  return acc
}

function makeCard(cardTitle, cardText, cardSub) {
  return `
  <div class="card shadow-sm" style="width: 18rem;">
    <img src="/kanbas/card.jpg"
        class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title text-truncate"><a class="wd-red text-decoration-none wd-hover-underline" href="/kanbas/home.html">${cardTitle}</a></h5>
        <div class="card-text">${cardText}</div>
        <small class="text-muted card-text">${cardSub}</small>
        <div class="p-1 "><i class="fas fa-edit fa-lg text-muted"></i></div>
    </div>

  </div>
  `
}