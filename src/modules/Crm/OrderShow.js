import { useState } from "react";
import OrderPreview from "./OrderPreview";

function OrderShow(props){
    const [orderInfo, setOrderInfo] = useState('');
    const [rxInfo , setRxInfo] = useState('')
    const [pDate,setPDate] = useState('');
    const content = props.content
    return(
      <div className="faktor">
        <div className="userInfo">
          <div className="userSection">
            <strong>مهرگاز | تامین و توزیع گاز مایع</strong>
            <span>www.MehrGaz.com</span>
            <span>کد: 15</span>
          </div>
          <div className="userSection">
            <h1>Mehr Gaz</h1>
          </div>
          <div className="userSection">
            <small>تاریخ: <b>{new Date(content.loadDate).toLocaleDateString('fa')}</b></small>
            <small>شماره سفارش: <b>{props.cartNo}</b></small>
            
            <small>ساعت ثبت سفارش: <b>
              {new Date(content.loadDate).toLocaleTimeString('fa')}</b></small>
          </div>
        </div>
          <OrderPreview content={content} lenzDetail={rxInfo}/>
        
    </div>
    )
}
export default OrderShow