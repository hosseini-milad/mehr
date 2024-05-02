import { useState } from "react"
import StyleInput from "../../../components/Button/Input"
import env from "../../../env"
import formtrans from "../../../translate/forms"
import UserAvatar from "../UserComponent/UserAvatar"
import ErrorShow from "../../../components/Button/ErrorShow"
import StyleSelect from "../../../components/Button/AutoComplete"

function UserGeneral(props){
  const userData = props.userData
  const [formData, setFormData] = useState()
  const [error,setError] = useState({errorText:'',errorColor:"brown"})
  const saveChanges=() => {
    var postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          userId:userData._id,
          ...formData
        })
      }
      console.log(postOptions)
  fetch(env.siteApi + "/panel/user/update-user",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
      if(result.success)
      {
        setError({errorText:result.success,
          errorColor:"green"})
        setTimeout(()=>setError({errorText:'',errorColor:"brown"}),3000)
      }
      else console.log(result)
    },
      (error) => {
        console.log(error);
      }
  )   
    
  }
  if(!userData)
    return(<div className="general-page">{env.loader}</div> )
  else return(
        <div className="general-page">
          <UserAvatar data={userData}/>
          <div className="info-box">
            <div className="info-wrapper">
              <StyleInput title={formtrans.name[props.lang]} direction={props.direction} 
                defaultValue={userData.cName} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  cName:e
                }))}/>
              
              <StyleInput title={formtrans.emailAddress[props.lang]} direction={props.direction} 
                defaultValue={userData.email} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  email:e
                }))}/>
              
              <StyleInput title={formtrans.phoneNumber[props.lang]} direction={props.direction} 
                defaultValue={userData.mobile} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  mobile:e
                }))}/>

              <StyleInput title={formtrans.customercode[props.lang]} direction={props.direction} 
                defaultValue={userData.cCode} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  cCode:e
                }))}/>
              
              <StyleInput title={formtrans.meliCode[props.lang]} direction={props.direction} 
                defaultValue={userData.meli} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  meli:e
                }))}/>
              <StyleInput title={formtrans.credit[props.lang]} direction={props.direction} 
                defaultValue={userData.credit} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  credit:e
                }))}/>
              <StyleInput title={"بودجه"} direction={props.direction} 
                defaultValue={userData.badget} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  badget:e
                }))}/>
                
              <StyleSelect title={"فعال/غیرفعال"} direction={props.direction} 
                defaultValue={userData.active} class={"formInput"}
                options={["فعال","غیرفعال"]}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  active:e
                }))}/>
              <StyleInput title={formtrans.address[props.lang]} direction={props.direction} 
                defaultValue={userData.address} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  address:e
                }))}/>
              
              <StyleInput title={formtrans.country[props.lang]} direction={props.direction} 
                defaultValue={userData.country} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  country:e
                }))}/>
              
              <StyleInput title={formtrans.state[props.lang]} direction={props.direction} 
                defaultValue={userData.state} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  state:e
                }))}/>
              <StyleInput title={formtrans.city[props.lang]} direction={props.direction} 
                defaultValue={userData.city} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  city:e
                }))}/>
                <StyleSelect title={formtrans.access[props.lang]} direction={props.direction} 
                  defaultValue={props.profile?props.profile:''} class={"formInput"}
                  options={props.accessList||[]}
                  label={"profileName"}
                  action={(e)=>setFormData(prevState => ({
                    ...prevState,
                    profile:e?e._id:''
                  }))}/>
              
              <div className="info-input"><label htmlFor="about">
                  {formtrans.about[props.lang]}</label>
              <textarea name="about"
                  id="about" onChange={(e)=>setFormData(prevState => ({
                    ...prevState,
                    about:e.target.value
                  }))}>{userData.about}</textarea>
              </div>
            </div>
            <div className="save-btn" onClick={saveChanges}>{formtrans.saveChanges[props.lang]}</div>
            <ErrorShow message={error.errorText} color={error.errorColor} />
          </div>


        </div>
    )
}
export default UserGeneral