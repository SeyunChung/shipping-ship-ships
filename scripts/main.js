import { DockList } from "./dockList.js"
//const docksHTML = DockList()
//console.log(docksHTML)
import { HaulerList } from "./haulerList.js"
import { shippingShipsList } from "./shippingShipsList.js"

const mainContainer = document.querySelector(".container")

const mainHTML = `
<h1>Shipping Ship Tracker</h1>
<section class="dock-list">
<h2>Docks</h2>
${DockList()}
</section>

<section class="hauler-list">
<h2>Hauler Ships</h2>
${HaulerList()}
</section>

<section class="shippingShips-list">
<h2>Shipping Ships</h2>
${shippingShipsList()}
</section>
`
mainContainer.innerHTML = mainHTML
