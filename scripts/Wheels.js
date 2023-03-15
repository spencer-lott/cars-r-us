import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)
// .MAP METHOD
export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select some wheels</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}