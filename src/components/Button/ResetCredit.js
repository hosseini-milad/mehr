import { useState } from "react"
import formtrans from "../../translate/forms"
import tabletrans from "../../translate/tables"
import StyleInput from "./Input"
import env from "../../env"

function ResetCredit(props){
    const [message,setMessage] = useState()
    const [content,setContent] = useState()
    const token = props.token
    console.log(props.userList)
    const resetCreditFunction=(status) => {
      
      const postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json',
            "x-access-token":token&&token.token,"userId":token&&token.userId
          },
          body:JSON.stringify(status)
        }
        console.log(postOptions)
     fetch(env.siteApi + "/panel/user/reset-credit",postOptions)
    .then(res => res.json())
    .then(
      (result) => {
          setTimeout(()=> window.location.reload(),1000)
      },
      (error) => {
        console.log(error);
      }
      
  )}
    return(
    <dialog id="modal">
      <div className="popup-brand">
        <div className="popup-header">
          <h5>پاک کردن اعتبارات</h5>
          <i className="fa-solid fa-close close-modal" style={{color: "#ff0000",cursor: "pointer"}}
          onClick={()=>props.close(0)}></i>
        </div>
        <div className="popup-wrapper">
            <div className="brand-name-popup">
              <p>{props.text}</p>
          </div> 
        </div>
        <div className="modalFooter">
        <div className="add-brand-btn" onClick={()=>resetCreditFunction({main:1})}>
            <i className="fa-solid fa-plus fa-sm" style={{color: "#00dbdb"}}></i>حذف اعتبارات جاری
            {tabletrans.sendSms[props.lang]}</div>
        <div className="add-brand-btn" onClick={()=>resetCreditFunction({remain:1})}>
            <i className="fa-solid fa-plus fa-sm" style={{color: "#00dbdb"}}></i>حذف اعتبارات مانده
            {tabletrans.sendSms[props.lang]}</div>
      </div>
      </div>
    </dialog>
    )
}
export default ResetCredit