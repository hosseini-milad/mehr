import { useState } from "react"
import formtrans from "../../translate/forms"
import tabletrans from "../../translate/tables"
import StyleInput from "./Input"

function Modal(props){
    const [newItem,setNewItem] = useState()
    return(
    <dialog id="modal">
      <div className="popup-brand">
        <div className="popup-header">
          <h5>{props.title}</h5>
          <i className="fa-solid fa-close close-modal" style={{color: "#ff0000",cursor: "pointer"}}
          onClick={()=>props.close(0)}></i>
        </div>
        <div className="popup-wrapper">
          {props.options&&props.options.map((opt,i)=>(
            <div className="brand-name-popup" key={i}>
            <p>{opt.title}</p>
            <div className="brand-name-icon">
              <i className="fa-solid fa-pen fa-sm" style={{color: "#00dbdb"}}></i>
              <p>{tabletrans.edit[props.lang]}</p>
              <i className="fa-solid fa-trash fa-sm" style={{color: "#00dbdb"}}></i>
              <p>{tabletrans.delete[props.lang]}</p>
            </div>
          </div>
          ))}
          
        </div>
        <div className="modalFooter">
        <StyleInput title={formtrans.factory[props.lang]}
            class="modalNew" direction={props.direction}
            action={(e)=>setNewItem(e)}
        />
        <div className="add-brand-btn" onClick={()=>props.addItem(newItem)}>
            <i className="fa-solid fa-plus fa-sm" style={{color: "#00dbdb"}}></i>
            {tabletrans.addNew[props.lang]}</div>
      </div>
      </div>
    </dialog>
    )
}
export default Modal