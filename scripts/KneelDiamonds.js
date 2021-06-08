
import { Metals } from "./Metals"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"

document.addEventListener(
    "click",
    (event) => {
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
        </article>
    `
}
