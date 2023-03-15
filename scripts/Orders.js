import { getCustomOrders, getPaints, getInteriors, getTechnologies, getWheels } from "./database.js";

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()


const buildOrderListItem = (order) => {
    
    const foundPaint = paints.find(
        (paint) => {
            
            return paint.id === order.paintId}
    )
 
    const foundInterior = interiors.find(
        (interior) => {

            return interior.id === order.interiorId}
    )
 
    const foundTechnology = technologies.find(
        (technology) => {

            return technology.id === order.technologyId}
    )

    const foundWheels = wheels.find(
        (wheel) => {

            return wheel.id === order.wheelsId}
    )


const totalCost = foundPaint.price + foundInterior.price + foundTechnology.price +foundWheels.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
}) 
   return `<li>
        Order #${order.id} cost ${costString}.
    </li>`



}


export const Orders = () => {

    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)
    
    html += listItems.join("")
    html += "</ul>"

    return html
}

