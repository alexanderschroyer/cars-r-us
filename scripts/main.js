import { carsRus } from "./CarsRUs.js";


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRus()
}

renderAllHTML()