import { useState } from "react"
import OrderTableRow from "./OrderTableRow"
import tabletrans from "../../translate/tables"

function OrderTable(props){
  const orders = props.orders
  const lang=props.lang;
  const [detail,showDetail] = useState(-1)
    return(
        <table>
        <thead>
        <tr>
          <th className="checkBoxStyle">
              <input type="checkbox" name="" id=""/>
            </th>
            <th>
              
            </th>
            <th>
              <p>{tabletrans.order[lang]}</p>
              
            </th>
            <th>
              <p>{tabletrans.customer[lang]}</p>
              
            </th>
            <th>
              <p>{tabletrans.agents[lang]}</p>
              
            </th>
            <th>
              <p>{tabletrans.orderer[lang]}</p>
              
            </th>
            <th>
              <p>{tabletrans.senddate[lang]}</p>
              
            </th>
            <th>
              <p>{tabletrans.adddate[lang]}</p>
              
            </th>
            
            
            
            <th>
            <p>{tabletrans.quantity[lang]}</p>
              
            </th>
            <th>
            <p>{tabletrans.price[lang]}</p>
              
            </th>
            
            <th>
            <p>{tabletrans.status[lang]}</p>
              
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders&&orders.filter?orders.filter.map((order,i)=>(
            <OrderTableRow detail={detail} showDetail={showDetail} 
              order={order} index={i} key={i} lang={lang} direction={props.direction}/>
          )):''}
          
        </tbody>
      </table>

    )
}
export default OrderTable