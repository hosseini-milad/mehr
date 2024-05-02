import {useEffect,useState} from 'react'
import Cookies from 'universal-cookie';
import UserTable from '../modules/Users/UserTable';
import StatusBar from '../modules/Components/StatusBar';
import Paging from '../modules/Components/Paging';
import errortrans from "../translate/error";
import UserFilters from '../modules/Users/UserComponent/UserFilters';
import env from '../env'
import tabletrans from '../translate/tables';
import SMS from '../components/Button/SMS';
const cookies = new Cookies();

function Users(props){
  const direction = props.lang?props.lang.dir:errortrans.defaultDir;
    const lang = props.lang?props.lang.lang:errortrans.defaultLang;
    const [content,setContent] = useState("")
    const [filters,setFilters] = useState("")
    const [loading,setLoading] = useState(0)
    const [showSms,setShowSMS] = useState(0)
    const [update,setUpdate] = useState(0)
    const [errorHandling,setErrorHandling] = useState(0)
    const token=cookies.get(env.cookieName)
    useEffect(() => {
      setLoading(1)
      const body={
          offset:filters.offset?filters.offset:"0",
          pageSize:filters.pageSize?filters.pageSize:"10",
          customer:filters.customer,
          orderNo:filters.orderNo,
          profile:filters.profile,
          class:filters.class,
          credit:filters.credit,
          status:filters.status,
          brand:filters.brand,
          dateFrom:filters.date&&filters.date.dateFrom,
          dateTo:filters.date&&filters.date.dateTo,
          access:filters.access
      }
      const postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json',
          "x-access-token":token&&token.token,"userId":token&&token.userId},
          body:JSON.stringify(body)
        }
        console.log(postOptions)
    fetch(env.siteApi + "/panel/user/list",postOptions)
    .then(res => res.json())
    .then(
      (result) => {
        setLoading(0)
          setContent('')
          setTimeout(()=> setContent(result),200)
      },
      (error) => {
        setLoading(0)
        console.log(error);
      }
      
  )},[filters])
  
  useEffect(() => {
    if(update===0)return
    const body={
        url:update
    }
    const postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json',
        "x-access-token":token&&token.token,"userId":token&&token.userId},
        body:JSON.stringify(body)
      }
  fetch(env.siteApi + "/panel/user/parse-list",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
      setErrorHandling(result.matchError)
    },
    (error) => {
      console.log(error);
    }
    
)},[update])
  const resizeFile = (file) =>
    new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
  const updateCustomers=async(event)=>{
      const uploadFile = event.target.files[0]
      const tempfile = await resizeFile(uploadFile);
        const token=props.token
        const postOptions={
            method:'post',
            headers: { 'Content-Type': 'application/json',
            "x-access-token": token&&token.token,
            "userId":token&&token.userId
        },
            body:JSON.stringify({base64image:tempfile,folderName:"excel",
                imgName:uploadFile.name.split('.')[0]})
          }
        fetch(env.siteApi + "/panel/user/upload",postOptions)
        .then(res => res.json())
        .then(
            (result) => {
                //console.log(result)
                if(result.error){

                }
                else{
                    setUpdate(result.url)
                }
            },
            (error) => {
                console.log(error)
            })
  }
    return(
      <div className="user" style={{direction:direction}}>
      <div className="od-header">
        <div className="od-header-info">
          
          <div className="od-header-name">
            <p>{tabletrans.customers[lang]}</p>
          </div>
          
        </div>
        <div className="od-header-btn">
          <label className="edit-btn" onClick={()=>setShowSMS(1)}>
            <i className="fa-solid fa-envelope-o"></i>
            {tabletrans.sendSms[lang]}
          </label>
          <label className="edit-btn" onClick={()=>window.location.href="/class"}>
            <i className="fa-solid fa-plus"></i>
            {tabletrans.classes[lang]}
          </label>
          <label htmlFor="upFiles" className="edit-btn">
            <i className="fa-solid fa-refresh"></i>
            {tabletrans.update[lang]}
          </label>
          <input id="upFiles" type="file" accept=".*" className="hidden" 
                onChange={updateCustomers}/>
          
        </div>
      </div>
      <div className="list-container">
        <StatusBar />
        <UserFilters lang={props.lang} setFilters={setFilters} 
          options={content.access} profiles={content.profiles}
          classes={content.classes}/>
          <ul>
          {errorHandling&&errorHandling.map((error,i)=>(
            <li key={i}>{error}</li>
          ))}
          </ul>
        <div className="user-list">
          <UserTable userList={content} lang={props.lang} />
        </div>
        <Paging content={content} setFilters={setFilters} filters={filters}
          lang={props.lang}/>
      </div>
      {showSms?<SMS title="ارسال پیامک" close={setShowSMS}
      text={`ارسال پیامک برای ${content.filter&&content.filter.length} مشترک`} lang={props.lang}
      userList={content.filter}/>:<></>}
    </div>
    )
}
export default Users