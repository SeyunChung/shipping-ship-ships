import { getHaulers, getShippingShips } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            let clickedHaulerId = itemClicked.dataset.id
            // Start a counter variable at 0
            let counter = 0
            // Iterate all of the shipping ships
            const shippingShips = getShippingShips()
            for (const shippingShip of shippingShips) {
                // Does the haulerId foreign key match the id?
                if(parseInt(clickedHaulerId) === shippingShip.haulerId){
                    // Increase the counter by 1
                    counter++
                }
            }
            window.alert(`This hauler is carrying ${counter} shipping ships`)
        }
    }
)

export const HaulerList = () => {
    const haulers = getHaulers()
        //Sorts the haulers array alphabetically by the name property
        haulers.sort((a,b) => a.name.localeCompare(b.name))

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += `
        <li data-type = "hauler" data-id= "${hauler.id}" data-DockId= "${hauler.dockId}">
        ${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}