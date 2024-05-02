import { useEffect, useState } from "react"
import env, { normalPriceCount, rxFindCount } from "../../../env"

function OrderQuickRow(props){
    const faktor = props.faktor
    const [sku,setSku]=useState()
    console.log(sku)
    useEffect(() => {
        const body={
            sku:"manager"
        }
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({sku:faktor.sku})
          }
        fetch(env.siteApi + "/order/stock/find",postOptions)
      .then(res => res.json())
      .then(
        (result) => {setSku(result[0])},
        (error) => {
          console.log(error);
        }
        
    )},[])
    return(
    <div className="sub-row">
        <div className="sub-avatar">
            <div className="sub-avatar-container">
                <img src="/img/product03.jpg"
                alt={faktor.sku}/>
                <div className="sub-info">
                <p className="sub-name">{sku?sku.coating:''}</p>
                <p className="sub-id">کد محصول: {faktor.sku}</p>
                </div>
            </div>
        </div>
        <div className="sub-num">تعداد: {faktor.count}</div>
        <div className="sub-price">قیمت واحد: {normalPriceCount(faktor.price)}</div>
        <div className="sub-price">قیمت: {normalPriceCount(faktor.price,faktor.count)}</div>
    </div>
    )
}
export default OrderQuickRow