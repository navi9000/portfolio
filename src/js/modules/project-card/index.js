import { data } from "./data"
import { PROJECT_CARD_TEMPLATE, PROJECT_LINK_TEMPLATE } from "./ui"
import { qs } from "../../utils/dom"
import { populate } from "../../utils/templates"

export function loadProjectCards() {
  qs(".project-grid").innerHTML = data
    .map(({ project_link, ...rest }) =>
      populate(PROJECT_CARD_TEMPLATE, {
        ...rest,
        project_link_slot: project_link
          ? populate(PROJECT_LINK_TEMPLATE, project_link)
          : "",
      }),
    )
    .join("")
}
