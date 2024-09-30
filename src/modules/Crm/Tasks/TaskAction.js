import { useEffect, useState } from "react"
import env from "../../../env"
import StyleSelect from "../../../components/Button/AutoComplete"
import PlateInput from "./PlateInput"
import WaitBtn from "../../../components/Button/WaitBtn"
function TaskAction(props){
    const token = props.token
    const data = props.data
    const task = props.task
    const order = props.content
    const [search,setSearch] = useState('')
    const [userList,setUserList] = useState('')
    const [contract,setContract] = useState('')
    const [changeData,setChangeData] = useState()
    useEffect(()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({search:search})
          }
      fetch(env.siteApi + "/panel/user/list-contract",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){
                
            } 
            else{
                setUserList(result.filter)
            }
        },
        (error) => {
          console.log(error);
        })
    },[search])
    const updateTask=(action)=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            "x-access-token":token&&token.token,"userId":token&&token.userId},
            body:JSON.stringify({_id:task&&task._id, crmCode:"orders",
            status:action?action:data.taskStep,
            changeData:changeData,
            contractor:contract.cCode,
            carNo:changeData?(changeData.twoNum+changeData.alpha+changeData.threeNum+"-"+changeData.irNum):""
            })
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
    console.log(data)
    console.log(task)
    if(data.taskStep !== task.taskStep){
        return(<main>سفارش در این مرحله نیست</main>)
    }
    if(!data)
        return(<main>در حال بررسی</main>)
    else{
        if(data.taskStep==="inprogress"){
        return(
        <div className="taskAction">
            <div className="taskBtn">
                {userList?<StyleSelect class="agent-input" options={userList} 
                    label="cName" title="عاملین" textChange={(e)=>e.length>2?setSearch(e):{}}
                    action={setContract}/>:<></>}
                {/*<button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask()}>
                تایید
                </button>*/}
                <WaitBtn  class="btn-crm btn-crm-accept" title="تایید" 
                    onAction={updateTask} />
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
                    <PlateInput setChangeData={setChangeData}/>
                    {/* <input type="input" placeholder="پلاک خودرو" 
                    onChange={(e)=>setChangeData(prevState => ({
                    ...prevState,
                    carNo:e?e.target.value:''
                    }))}
                    /> */}
                    <input type="input" placeholder="توضیحات" style={{width:"50%"}}/>
                    {/*<button type="button" className="btn-crm btn-crm-accept"
                    onClick={()=>updateTask()}>
                    تایید
                    </button>*/}
                    <WaitBtn  class="btn-crm btn-crm-accept" title="تایید" 
                    onAction={updateTask} />
                    <button type="button" className="btn-crm btn-crm-info"
                    onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                    <p>چاپ سفارش</p>
                    </button>
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
                {/*<button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask()}>
                    تایید
                </button>*/}
                <WaitBtn  class="btn-crm btn-crm-accept" title="تایید" 
                    onAction={updateTask} />
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
                {/*<button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask()}>
                    تایید
                </button>*/}
                <WaitBtn  class="btn-crm btn-crm-accept" title="تایید" 
                    onAction={updateTask} />
                
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