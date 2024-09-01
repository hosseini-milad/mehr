import { useState } from "react"
import StyleInput from "../../components/Button/Input"
import OrderPopUp from "./orderPopUp"

function SearchOrder(props){
    const direction= props.data.direction
    const token = props.data.token
    const [orderNo,setOrderNo] = useState()
    const [orderPop,setOrderPop] = useState(0)
    return(
        <div className="searchOrder">
            <StyleInput title="شماره سفارش" 
            action={(e)=>setOrderNo(e)}
            direction="rtl" class="miniText"/>
            <input type="button" value="جستجو" 
            className="miniBtn btn-crm btn-crm-edit"
            onClick={()=>setOrderPop(orderNo)}/>
            {orderPop?<OrderPopUp title={"ویرایش سفارش"}
                    btnText={"بروزرسانی"} action={()=>{}}
                    token={token} crm={props.data.crm}
                    customer={"customer"} creator={"creator"}
                    direction={direction} access={props.data.access}
                    setBoardArray={props.data.setBoardArray}
                    data={{orderNo:orderNo,
                        taskStep:props.data.column.enTitle}} 
                    close={()=>setOrderPop(0)}
                    />:<></>}
        </div>
    )
    
}
export default SearchOrder