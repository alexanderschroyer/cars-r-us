import { getTechnologies } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name ==="technology") {
            window.alert(`User chose the tech feature ${event.target.value}`)
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const technology of technologies) {
        html += `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.feature}
        </li>`
    }

    html += "</ul>"
    return html
}