import { normalPriceCount } from "../../env";

function OrderPreview(props){
    const content = props.content;

    return(
            <div className="admin-table-sec ">
                <table className=" ">
                    <tbody>
                        <tr>
                            <th style={{width:"20px"}}>ردیف</th>
                            {/*<th style={{width:"35px"}}>کد</th>*/}
                            <th>برند</th>
                            <th style={{width:"35px"}}>تعداد</th>
                            <th>قیمت واحد</th>
                            <th>قیمت کل</th>
                        </tr>
                        {content&&content.stockFaktor.map((faktorItem,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            {/*<td >{faktorItem.sku}</td>*/}
                            
                            <td dangerouslySetInnerHTML={{__html:"شارژ کپسول "+
                            faktorItem.weight+" کیلویی "}}></td>
                            <td>{faktorItem.count}</td>
                            <td style={{direction: "ltr"}} >{normalPriceCount(faktorItem.price)}</td>
                            <td style={{direction: "ltr"}}>
                               {normalPriceCount(faktorItem.price*faktorItem.count)}</td>
                            
                        </tr>))}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>قیمت کل </td>
                            <td style={{fontSize:"15px",fontWeight:"bold",position:"relative"}}>{normalPriceCount(content.stockOrderPrice)} ریال
                            <span className="credit-order">{content.isCredit?"اعتباری":""}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
    )
}
export default OrderPreview