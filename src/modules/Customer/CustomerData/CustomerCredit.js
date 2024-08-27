import { useState } from "react"
import env from "../../../env"

function CustomerCredit(props){
    const token = props.token
    const data = props.data
    const orderCredit = props.orders&&props.orders.detail
    const [error,setError] = useState({errorText:'',errorColor:"brown"})
    const [formData, setFormData] = useState()
    //console.log(formData)
    const saveChanges=() => {
        var postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
              "x-access-token":token&&token.token,"userId":token&&token.userId},
            body:JSON.stringify({
              userId:data._id,
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
    return(
        <div className="social-page">
          <div className="social-wrapper">
            <div className="social-input">
                <i className="fa-brands fa-check fa-lg"></i>
                <small>اعتبار یارانه ای</small>
                <input onChange={(e)=>setFormData(prevState => ({
                  ...prevState,
                  credit1:e.target.value
                }))}
                defaultValue={data.credit1} name="facebook" id=""/>
            </div>
            <div className="social-input">
                <i className="fa-brands fa-facebook fa-lg"></i>
                <small>اعتبار غیر یارانه ای</small>
                <input onChange={(e)=>setFormData(prevState => ({
                  ...prevState,
                  fob:e.target.value
                }))}
                defaultValue={data.fob} name="facebook" id=""/>
            </div>
            <div className="social-input">
                <i className="fa-brands fa-check fa-lg"></i>
                <small>اعتبار یارانه ای مانده قبل</small>
                <input onChange={(e)=>setFormData(prevState => ({
                  ...prevState,
                  remainCredit:e.target.value
                }))}
                defaultValue={data.remainCredit} name="facebook" id=""/>
            </div>
            
            <div className="social-input">
                <i className="fa-brands fa-facebook fa-lg"></i>
                <small>اعتبار غیر یارانه ای مانده قبل</small>
                <input onChange={(e)=>setFormData(prevState => ({
                  ...prevState,
                  remainFob:e.target.value
                }))}
                defaultValue={data.remainFob} name="facebook" id=""/>
            </div>
            <div className="social-input">
            </div>
            <div className="social-input">
                <i className="fa-brands fa-facebook fa-lg"></i>
                <small>اعتبار اعطایی موقت</small>
                <input onChange={(e)=>setFormData(prevState => ({
                  ...prevState,
                  credit:e.target.value
                }))}
                defaultValue={data.credit} name="facebook" id=""/>
            </div>
            <hr/>
            
            <div className="social-input">
                <i className="fa-brands fa-shopping-cart fa-lg"></i>
                <small>سفارش اعتباری</small>
                <input type="text"
                value={orderCredit.oldCredit} name="facebook" id=""/>
            </div>
            <div className="social-input">
                <i className="fa-brands fa-shopping-cart fa-lg"></i>
                <small>سفارش غیررایانه ای</small>
                <input type="text"
                value={orderCredit.oldFob} name="facebook" id=""/>
            </div>
          </div>
          <strong>اعتبار یارانه ای مانده: {props.orders&&props.orders.credit}</strong>
          <strong>اعتبار غیر یارانه ای مانده: {props.orders&&props.orders.fob}</strong>
          <div className="save-btn" onClick={saveChanges}>ذخیره تغییرات</div>

        </div>
    )
}
export default CustomerCredit