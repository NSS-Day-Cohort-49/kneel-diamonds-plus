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
    const listItemsArray =


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

