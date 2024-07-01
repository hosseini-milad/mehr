import { useState } from "react"
import env from "../../../env"

function TaskAction(props){
    const token = props.token
    const data = props.data
    console.log(data)
    const order = props.content
    const [changeData,setChangeData] = useState()
    const updateTask=(action)=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            "x-access-token":token&&token.token,"userId":token&&token.userId},
            body:JSON.stringify({_id:props.taskId, crmCode:"orders",
            status:action?action:data.taskStep,changeData:changeData})
          }
        console.log(postOptions)
      fetch(env.siteApi + "/panel/crm/update-tasks-status",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){

            }
            else{

                setTimeout(()=>props.close(),3000)
                props.setBoard(result.taskData)
            }
        },
        (error) => {
          console.log(error);
        })
    }
    if(!data)
        return(<main>در حال بررسی</main>)
    else{
        if(data.taskStep==="inprogress"){
        return(
        <div className="taskAction">
            <div className="taskBtn">
                <button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask()}>
                تایید
            </button>
            <button type="button" className="btn-crm btn-crm-info"
                onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                <p>چاپ سفارش</p></button>
            
            <button type="button" className="btn-crm btn-crm-cancel"
                onClick={()=>updateTask("cancel")}>
                <p>لغو سفارش</p></button>
            </div> 
        </div> )}
        if(data.taskStep==="inVehicle"){
            return(
            <div className="taskAction">
                <div className="taskBtn">
                    <input type="input" placeholder="پلاک خودرو" 
                onChange={(e)=>setChangeData(prevState => ({
                    ...prevState,
                    carNo:e?e.target.value:''
                  }))}/>
                <input type="input" placeholder="توضیحات" />
                <button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask()}>
                    تایید
                </button>
                <button type="button" className="btn-crm btn-crm-info"
                    onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                    <p>چاپ سفارش</p></button>
                    </div>
            </div> )}
        if(data.taskStep==="saleControl"){
            return(
            <div className="taskAction">
                <div className="taskDetail">
                    <input type="input" placeholder="قبض دریافت" 
                    onChange={(e)=>setChangeData(prevState => ({
                        ...prevState,
                        ghabzIn:e?e.target.value:''
                      }))}/>
                    <input type="input" placeholder="قبض پرداخت" 
                    onChange={(e)=>setChangeData(prevState => ({
                        ...prevState,
                        ghabzOut:e?e.target.value:''
                      }))}/>
                    <input type="input" placeholder="شماره مجوز" 
                    onChange={(e)=>setChangeData(prevState => ({
                        ...prevState,
                        cert:e?e.target.value:''
                      }))}/>
                    <input className="taskComment" 
                        type="input" placeholder="توضیحات" />
                </div>
                <div className="taskBtn">
                <button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask("outVehicle")}>
                    تایید
                </button>
                <button type="button" className="btn-crm btn-crm-info"
                    onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                    <p>چاپ سفارش</p></button>
                <button type="button" className="btn-crm btn-crm-cancel"
                onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                <p>لغو سفارش</p></button>
                </div>
            </div> )}
        if(data.taskStep==="outVehicle"){
            return(
            <div className="taskAction">
                <button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask()}>
                    تایید
                </button>
                
            </div> )}
        if(data.taskStep==="completed"){
            return(
            <div className="taskAction">
                <button type="button" className="btn-crm btn-crm-info"
                    onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                    <p>چاپ سفارش</p></button>
                
            </div> 
        )}
    }
}    
export default TaskAction