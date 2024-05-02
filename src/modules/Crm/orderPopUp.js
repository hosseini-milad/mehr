import { useEffect, useState } from "react"
import TaskMainPart from "./Tasks/TaskMainPart"
import env from "../../env"
import StyleSelect from "../../components/Button/AutoComplete"
import StyleDatePicker from "../../components/Button/DatePicker"
import StyleDatePickerSingle from "../../components/Button/DatePickerSingle"
import TaskUpload from "./Tasks/TaskUpload"
import ShowError from "../../components/Modal/ShowError"
import TaskAction from "./Tasks/TaskAction"
import OrderShow from "./OrderShow"

function OrderPopUp(props){
    const data =props.data
    const token = props.token
    const [content,setContent] = useState()
    const [error,setError] = useState({message:'',color:"brown"})
    useEffect(()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({stockOrderNo:data?data.orderNo:''})
          }
      fetch(env.siteApi + "/order/fetch-stock",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            
            setContent(result)
        },
        (error) => {
          console.log(error);
        })
    },[])
    
    if(!content){
        return
    } else
    return(
    <section className="delete-modal">
        <div className="modal-backdrop show-modal">
            <div className="task-popup fullPopUp">
                <div className="orderModalTitle">
                    {(props.customer&&props.customer[0])?
                        props.customer[0].username:"-"} 
                    <sub>({(props.creator&&props.creator[0])?
                    props.creator[0].username:"-"})</sub>
                    <span> شماره سفارش: {data.orderNo}</span>
                    </div>
                <i className="fa fa-remove closeModal" 
                    onClick={props.close}></i>
                <div className="sharif" style={{padding: "48px 10px 10px"}}>
                    <main className="sharif-order-main">
                        {content?<OrderShow token={token} 
                        user={content.userId}
                        cartNo={data?data.orderNo:''} access={props.access}
                        content={content}
                        cartDetail={content.stockFaktor?content.stockFaktor:[]} 
                        setError={setError}/>:
                        <div>{env.loader}</div>}
                    </main>
                </div>
            {props.access&&props.access==="edit"?
            <div className="crmAction">
                <TaskAction content={content} token={token}
                data={props.data} setBoard={(e)=>props.setBoardArray(e)}
                close={props.close}/>
            </div>:<></>}
            </div>
            
        </div>
        {error&&error.message?
        <ShowError color={error.color} status={"مدیریت"} 
        text={error.message} />:<></>}
    </section>
    )
}
export default OrderPopUp