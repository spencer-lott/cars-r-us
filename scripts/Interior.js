import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

//.MAP METHOD
export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}