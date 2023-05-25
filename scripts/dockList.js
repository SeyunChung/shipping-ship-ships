import { getDocks, getHaulers } from "./database.js"

document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock") {
            let dockId = itemClicked.dataset.id
            const haulers = getHaulers()
            let haulingShips = ""
            for (const hauler of haulers) {
                if (hauler.dockId === parseInt(dockId)) {
                    haulingShips += `${hauler.name},`
                }
            }
            if (haulingShips === "") {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading nothing`)
            }
            else {window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${haulingShips}`)

            }
        
        }
    }
)
export const DockList = () => {
    const docks = getDocks()
 //Sorts the docks array alphabetically by the location property
    docks.sort((a,b) => a.location.localeCompare(b.location))
    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-type="dock" data-id= "${dock.id}" data-location= "${dock.location}" data volume= "${dock.volume}">
        ${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}