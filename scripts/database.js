const database = {
    paints: [
        { id: 1, color: "Silver", price: 1000 },
        { id: 2, color: "Midnight Blue", price: 1100 },
        { id: 3, color: "Firebrick Red", price: 900 },
        { id: 4, color: "Spring Green", price: 600 }
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 550 },
        { id: 2, type: "Charcoal Fabric", price: 600 },
        { id: 3, type: "White Leather", price: 2300 },
        { id: 4, type: "Black Leather", price: 2140 }
    ],
    technologies: [
        { id: 1, type: "Basic Package (basic sound system)", price: 50 },
        { id: 2, type: "Navigation Package (includes integrated navigation controls)", price: 300 },
        { id: 3, type: "Visibility Package (includes side and rear cameras)", price: 1000 },
        { id: 4, type: "Ultra Package (includes navigation and visibility packages)", price: 1300 },
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 700 },
        { id: 2, type: "17-inch Pair Radial Black", price: 775 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 825 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 875 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 2,
            interiorId: 3,
            technologyId: 4,
            wheelsId: 1,
            timestamp: 1614659931693
            
        }    
    ],
    orderBuilder: {},
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getCustomOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}