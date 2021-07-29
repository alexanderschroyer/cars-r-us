import { Colors } from "./colors.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"

// const colors = getColors()
// const interiors = getInteriors()
// const technologies = getTechnologies()
// const orders = getOrders()








export const carsRus = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${Colors()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
        </article>
    `
}
