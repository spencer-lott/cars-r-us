import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"

            setPaint(parseInt(changeEvent.target.value))
        }
    }
)
// FOR OF LOOP METHOD
export const Paints = () => {
    
    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html
    
}


