
import { addCustomOrder, getTechnologies } from "./database.js"
import { Interiors } from "./Interior.js"
import { Paints } from "./Paint.js"
import { Wheels } from "./Wheels.js"
import { Technologies } from "./Technology.js"
import { Orders } from "./Orders.js"

document.addEventListener(
    "click",
    (event) => {

            const itemClicked = event.target
    
            if (itemClicked.id.startsWith("orderButton")) {
                addCustomOrder()

    }
}
)

export const Cars = () => {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        ${Paints()}
    </div>
</div>
<div class="card" style="width: 18rem;">
    <div class="card-body">
        ${Interiors()}
    </div>
</div>
<div class="card" style="width: 18rem;">
    <div class="card-body">
        ${Technologies()}
    </div>
</div>
<div class="card" style="width: 18rem;">
    <div class="card-body">
        ${Wheels()}
    </div>
</div>
<article>
    <button id="orderButton">Place Car Order</button>
</article>
<article class="customOrders">
    <h2>Custom Car Order</h2>
        ${Orders()}
</article>
        `
}


// export const Cars = () => {
//     return `
//         <h1>Cars 'R Us: Personal Car Builder</h1>

//         <article class="choices">
//             <section class="choices__metals options">
//                 <h2>Metals</h2>
                
//             </section>
//             <section class="choices__sizes options">
//                 <h2>Sizes</h2>
                
//             </section>
//             <section class="choices__styles options">
//                 <h2>Styles</h2>
                
//             </section>
//         </article>

//         <article>
//             <button id="orderButton">Create Custom Order</button>
            
//         </article>

//         <article class="customOrders">
//             <h2>Custom Jewelry Orders</h2>
            
//         </article>
//     `
// }

