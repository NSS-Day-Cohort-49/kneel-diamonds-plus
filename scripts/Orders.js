import { getOrders, getMetals, getSizes, getStyles } from "./database.js"


const buildOrderListItem = (order) => {
    const orderMetal = getMetals().find( (metal) => metal.id === order.metalId )
    const orderSize = getSizes().find( (size) => size.id === order.sizeId )
    const orderStyle = getStyles().find( (style) => style.id === order.styleId )
    return `<li>
        Order #${order.id}, A ${orderSize.carets} caret stone in a ${orderStyle.style} ${orderMetal.metal} setting, was placed on ${new Date(order.timestamp).toLocaleDateString()}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
