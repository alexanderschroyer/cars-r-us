




const database = {
    colors: [
        {id: 1, color: "Silver", price: 600},
        {id: 2, color: "Midnight Blue", price: 800},
        {id: 3, color: "Firebrick Red", price: 700},
        {id: 4, color: "Spring Green", price: 700}
            ], 
    interiors: [
        {id: 1, type: "Beige Fabric", price: 800},
        {id: 2, type: "Charcoal Fabric", price: 900},
        {id: 3, type: "White Leather", price: 1000},
        {id: 4, type: "Black Leather", price: 1200}
            ],
    technologies: [
        {id: 1, feature: "Basic Package (basic sound system)", price: 300},
        {id: 2, feature: "Navigation Package (includes integrated navigation controls)", price: 850},
        {id: 3, feature: "Visibility Package (includes side and rear cameras)", price: 900},
        {id: 4, feature: "Ultra Package (includes navigation and visibility packages)", price: 1500}
            ],
    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 400},
        {id: 2, type: "17-inch Pair Radial Black", price: 500},
        {id: 3, type: "18-inch Pair Spoke Silver", price: 800},
        {id: 4, type: "18-inch Pair Spoke Black", price: 900}
    ]
};


export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(feature => ({...feature}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customerOrders.map(order => ({...order}))
}

