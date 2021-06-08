import { getStyles } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map( (style) => `<li>
      <input type="radio" name="metal" value="${style.id}" /> ${style.style}
    </li>`)


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
