import StyleInput from "../../../components/Button/Input"
import StyleSelect from "../../../components/Button/AutoComplete"
import env from "../../../env"
import { useState } from "react"
import ErrorAction from "../../../components/Modal/ErrorAction"

function UserAvatar(props){
  const [showRemove,setShowRemove] = useState()
  const deleteUser=()=>{
    var postOptions={
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        userId:props.data._id
      })
    }
    console.log(postOptions)
fetch(env.siteApi + "/panel/user/remove-user",postOptions)
.then(res => res.json())
.then(
  (result) => {
    if(result.success)
    {
      window.location.href="/users"
    }
    else console.log(result)
  },
    (error) => {
      console.log(error);
    }
)   
  }
    return(
      <div className="avatar-box">
      <div className="customer-photo">
        <input type="file" name="customer photo" id="cu-photo"/>
        <label htmlFor="cu-photo">
          <div className="label-hover">
            <i className="fa-solid fa-camera-retro fa" style={{color: "#ffffff"}}></i>
            <p>Update Photo</p>
          </div>
        </label>
      </div>
      <p className="p-allow">Allowed *.jpeg, *.jpg, *.png, *.gif <br/> max size of 3.1 MB</p>
      <div className="public-btn">
        <p>Public Profile</p>
        <div className="dense-btn">
          <input className="switch-input" type="checkbox" id="switch" />
        </div>
      </div>
      <div className="delete-user-btn" onClick={()=>setShowRemove(1)}>Delete User</div>
      {showRemove? 
      <ErrorAction status={"DELETE"} title={"حذف آیتم"} 
        text={"کاربر حذف خواهد شد. آیا مطمئن هستید؟"} linkText={""} style={{direction:"rtl"}}
        buttonText="حذف" close={()=>setShowRemove()}
        color="red" action={()=>deleteUser()}/>:
       <></>}
    </div>
    )
}
export default UserAvatar