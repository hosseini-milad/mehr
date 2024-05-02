import React, { useRef ,useEffect, useState} from 'react';
import env from "../../../env"
import Status from "../../Components/Status"
import errortrans from "../../../translate/error"
import tabletrans from "../../../translate/tables"
import formtrans from "../../../translate/forms"
import LearnDetails from './LearnDetails';
import LearnImage from './LearnImage';

function LearnDetailHolder(props){
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
      body:JSON.stringify({learnCode:url})
    }
   
fetch(env.siteApi + "/setting/fetch-learn",postOptions)
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
  const saveLearn=()=>{
    //if(newCustomer) {
      var postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({learnCode:url,
            ...catChange})
        }
       console.log(postOptions)
    fetch(env.siteApi + "/setting/update-learn",postOptions)
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
            setTimeout(()=>window.location.href="/learn",2000)
          }
          
      },
      (error) => {
        console.log(error);
      }
    )
  }
return(
  <div className="new-item" style={{direction:direction}}>
      <div className="create-product">
      <h4>{tabletrans.addLearn[lang]}</h4>
      {content||url==="new"?<div className="pages-wrapper">
        <div className="item-box">
          <LearnDetails direction={direction} lang={lang} content={content}
            setCatChange={setCatChange} catChange={catChange}/>
          <LearnImage setCatChange={setCatChange} catChange={catChange} 
            lang={lang} content={content}/> 
          </div>
        <div className="create-btn-wrapper">
          <div className="save-btn" onClick={saveLearn}>{formtrans.saveChanges[lang]}</div>
          <div className="cancel-btn" onClick={()=>window.location.href="/learn"}>{formtrans.cancel[lang]}</div>
        </div>
        
      </div>:<div>{env.loader}</div>}
    </div>
  </div>
  )
}
export default LearnDetailHolder