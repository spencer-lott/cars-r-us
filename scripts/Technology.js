import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)
// ONE STRING TEMPLATE METHOD
export const Technologies = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="0">Select a technology package</option>
            ${
                technologies.map(
                    (tech) => {
                        return `<option value="${tech.id}">${tech.type}</option>`
                    }
                ).join("")
            }
        </select>
    `
}