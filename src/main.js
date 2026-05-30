import "./css/styles.css"
import { loadProjectCards } from "./js/modules/project-card"
import { loadFooter } from "./js/modules/footer"

function run() {
  loadProjectCards()
  loadFooter()
}

run()
