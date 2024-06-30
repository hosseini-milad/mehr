import { useState } from "react"
import UserClassInTable from "./UserComponent/UserClassInTable"
import tabletrans from "../../translate/tables"
import Status from "../Components/Status"
import { normalPriceSum } from "../../env";
import ErrorAction from "../../components/Modal/ErrorAction";


function NUserTableRow(props){ 
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  const user=props.user
  const userID=props.userID
  const selectUser=()=>{
    
    if(!checkState){
      //console.log(checkState)
      props.setSelectedUser(existingItems => {
        return [
          ...existingItems.slice(0, props.selectedUser.length),
          user._id,
          ...existingItems.slice(props.selectedUser.length + 1),
        ]
      })
    }
    else{
      var newArray = props.selectedUser
      if(newArray){
      var index = newArray.indexOf(user._id);
      if (index > -1) {
        newArray.splice(index, 1);
      }
      props.setSelectedUser(newArray)
    }
    }
    
    setCheckState(checkState?false:true)
    /*props.setSelectedUser(prevState => ({
                ...prevState,
                user:e
              }))*/
  }
  console.log(props.selectedUser)
  const [showError,setShowError] = useState(0)
    return(
        <tr>
            <td className="index-table">
              {props.index+1}
            </td>
            <td className="checkBoxStyle">
              <input type="checkbox" name="" id="" checked={checkState}
              onChange={(e)=>selectUser()}/></td>
            <td>
              <div className="cu-avatar">
                <img
                  src={
                    user.group && user.group.includes("مهر")
                      ? "/img/mehr.png"
                      : "/img/sahand.png"
                  }
                  className="avatar-sm me-3"
                  alt="xd"
                />
                <div className="cu-name">
                  <p className="name">{user.cName}</p>
                  <p className="email">
                    شماره تماس:{" "}
                    {user.userDetail && user.userDetail[0]
                      ? user.userDetail[0].mobile
                      : ""}
                  </p>
                </div>
              </div>
            </td>
            <td>
              <div className="cu-company">
                {user.credit1 || user.credit2 ? (
                  <h6>{user.remainCredit}</h6>
                ) : (
                  <h6>ندارد</h6>
                )}
                
              </div>
            </td>
            <td>
              <div className="cu-company">
                <h6>{user.remainFob}</h6>
          
              </div>
            </td>
            <td>
              <div className="cu-name">
                <p className="name">{user.phone}</p>
                <p className="email">کد: {user.meli}</p>
              </div>
            </td>
            <td>
              <div className="cu-company" style={{ width: "150px" }}>
                {user.class ? <UserClassInTable classes={user.class} /> : <></>}
              </div>
            </td>
            <td>
              <div className="more-btn">
                <i className="tableIcon fas fa-edit" onClick={()=>
                  window.location.href="/customers/detail/"+user._id}></i>
                <i className="tableIcon fas fa-trash" style={{color: "#ff0000"}} onClick={()=>{
                  setShowError(user._id)
                }}></i>
                {/* <i className="tableIcon fas fa-ellipsis-v" 
                  onClick={()=>setOpenOption(openOption?0:1)}></i> */}
              </div>
              {openOption?<div className={props.direction==="rtl"?
                "sub-more-menu":"sub-more-menu sub-more-rtl"}>
                <div className="sub-option sub-delete">
                <i className="tableIcon fas fa-remove" style={{color: "#ff0000"}}></i>
                  <p>{tabletrans.delete[props.lang]}</p>
                </div>
                <div className="sub-option sub-edit">
                  <i className="tableIcon fas fa-edit"></i>
                  <p>{tabletrans.edit[props.lang]}</p>
                </div>
              </div>:<></>}
            </td>
           {showError?<ErrorAction title={"حذف"} text={"آیا می حواهید حذف کنید؟"} buttonText={"حذف"} action={()=>{props.deleteUser(showError)}} close={()=>setShowError(0)} ></ErrorAction>:<></>} 
          </tr>
    )
}
export default NUserTableRow