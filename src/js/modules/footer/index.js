import { qs } from "../../utils/dom"

export function loadFooter() {
  qs("#year").textContent = new Date().getFullYear()
}
