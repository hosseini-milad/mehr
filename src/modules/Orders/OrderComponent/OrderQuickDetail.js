import { useEffect, useState } from "react"
import env, { normalPriceCount, rxFindCount } from "../../../env"
import OrderQuickRow from "./OrderQuickRow"

function OrderQuickDetail(props){
    const order = props.order
    console.log(order)
    return(
      <div className="sub-order-table">
        {order?order.stockFaktor.map((faktor,i)=>(
            <OrderQuickRow faktor={faktor} key={i} />
        )):<></>}
    </div>
    )
}
export default OrderQuickDetail