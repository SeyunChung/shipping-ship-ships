const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ] ,
    haulers: [
        { id: 1, dockId: 2, name: "COSCO Shipping Universe" },
        { id: 2, dockId: 1, name: "Ever Golden" },
        { id: 3, dockId: 2, name: "Hyundai Hope" },
        { id: 4, dockId: 2, name: "MSC Isabella" },
        { id: 5, dockId: 4, name: "Hanjin Madrid" },
    ], 
    shippingShips: [
        { id: 1, haulerId: 3, name: "MSC Oscar"},
        { id: 2, haulerId: 3, name: "Emma Maersk"},
        { id: 3, haulerId: 5, name: "Vale Brasil"},
        { id: 4, haulerId: 5, name: "LNG Megrez"},
        { id: 5, haulerId: 4, name: "FPMC B Fortune"},
        { id: 6, haulerId: 2, name: "BBC Louisiana"}
    ]
}

export const getDocks = () => {
    // You write the code for copying the array and returning it
    return database.docks.map(docks => ({...docks}))
}

export const getHaulers = () => {
    return database.haulers.map(haulers => ({...haulers}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShips => ({...shippingShips}))
}

/*
export const getDocks = () => {
    return structuredClone(database.docks)
}

export const getHaulers = () => {
    return structuredClone(database.haulers)
}

export const getShippingShips = () => {
    return structuredClone(database.shippingShips)
}
*/