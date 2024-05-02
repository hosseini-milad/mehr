import React, { useRef ,useEffect, useState} from 'react';
import env from "../../../env"
import Status from "../../Components/Status"
import errortrans from "../../../translate/error"
import tabletrans from "../../../translate/tables"
import formtrans from "../../../translate/forms"
import AdvDetails from './AdvDetails';
import AdvImage from './AdvImage';

function AdvDetailHolder(props){
  const url = window.location.pathname.split('/')[3]
  const direction = props.lang?props.lang.dir:errortrans.defaultDir;
  const lang = props.lang?props.lang.lang:errortrans.defaultLang;
  const [error,setError] = useState({errorText:'',errorColor:"brown"})
  const [content,setContent] = useState('')
  const [catChange,setCatChange] = useState('')
  

  useEffect(()=>{
    if(url==="new")return
    var postOptions={
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({advId:url})
    }
   
fetch(env.siteApi + "/setting/fetch-adv",postOptions)
.then(res => res.json())
.then(
  (result) => {
    if(result.error){
      setError({errorText:result.error,
        errorColor:"brown"})
      setTimeout(()=>setError({errorText:'',
        errorColor:"brown"}),3000)
    }
      else{
        setError({errorText:"سرویس پیدا شد",
          errorColor:"green"})
          setContent(result)
        setTimeout(()=>setError({errorText:'',errorColor:"brown"}),2000)
      }
      
  },
  (error) => {
    console.log(error);
  }
)
  },[])
  const saveAdv=()=>{
    //if(newCustomer) {
      var postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({advId:url,
            ...catChange})
        }
       //console.log(postOptions)
    fetch(env.siteApi + "/setting/update-adv",postOptions)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.error){
          setError({errorText:result.error,
            errorColor:"brown"})
          setTimeout(()=>setError({errorText:'',
            errorColor:"brown"}),3000)
        }
          else{
            setError({errorText:result.success,
              errorColor:"green"})
            setTimeout(()=>window.location.href="/adv",200000)
          }
          
      },
      (error) => {
        console.log(error);
      }
    )
  }
console.log(content)
return(
  <div className="new-item" style={{direction:direction}}>
      <div className="create-product">
      <h4>{tabletrans.addLearn[lang]}</h4>
      {content||url==="new"?<div className="pages-wrapper">
        <div className="item-box">
          <AdvDetails direction={direction} lang={lang} content={content}
            setCatChange={setCatChange} catChange={catChange}/>
          <AdvImage setCatChange={setCatChange} catChange={catChange} 
            lang={lang} content={content}/> 
          </div>
        <div className="create-btn-wrapper">
          <div className="save-btn" onClick={saveAdv}>{formtrans.saveChanges[lang]}</div>
          <div className="cancel-btn" onClick={()=>window.location.href="/adv"}>{formtrans.cancel[lang]}</div>
        </div>
        
      </div>:<div>{env.loader}</div>}
    </div>
  </div>
  )
}
export default AdvDetailHolder