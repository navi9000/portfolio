import { data } from "./data"
import { PROJECT_CARD_TEMPLATE } from "./ui"
import { qs } from "../../utils/dom"
import { populate } from "../../utils/templates"

export function loadProjectCards() {
  qs(".project-grid").innerHTML = data
    .map((params) => populate(PROJECT_CARD_TEMPLATE, params))
    .join("")
}
