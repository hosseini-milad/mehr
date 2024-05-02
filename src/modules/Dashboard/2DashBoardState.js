import { useEffect, useState } from "react"
import env, { normalPriceCount, normalPriceSum } from "../../env"
import dashtrans from "../../translate/dashboard"

function DashBoardState(props){
  const [data,setData] = useState('')
    useEffect(() => {
      const body={}
      const postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json',
          //"x-access-token":token&&token.token,"userId":token&&token.userId
        },
          body:JSON.stringify(body)
        }
    fetch(env.siteApi + "/panel/report/report-State")
    .then(res => res.json())
    .then(
      (result) => {
        setData('')
        setTimeout(()=> setData(result),200)
      },
      (error) => {
        console.log(error);
      }
      
  )},[])
  console.log(data)
  if(!data)
  return(
    <div className="row">Waiting</div>
    )
  else
    return(
      <div className="row" style={{marginBottom:"20px"}}>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">
                <div className="icon icon-lg icon-shape bg-gradient-warning shadow-warning text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fas fa-edit"></i>
                </div>
                <div className={props.direction==="ltr"?
                  "text-end pt-1":"text-start pt-1"}>
                    <h4 className="mb-0 text-capitalize">در حال بررسی</h4>
                    <p className="text-sm mb-0">مهرگاز: {data.inprogress.mehr}</p>
                    <p className="text-sm mb-0">سهندگاز: {data.inprogress.sahand}</p>
                </div>
                </div>
                <hr className="dark horizontal my-0"/>
                <div className="card-footer p-3">
                <p className="mb-0">کل سفارشات
                  <span className="text-success text-sm font-weight-bolder">
                  : {data.inprogress.total}  
                  </span></p>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">
                <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fas fa-check"></i>
                </div>
                <div className={props.direction==="ltr"?
                  "text-end pt-1":"text-start pt-1"}>
                    <h4 className="mb-0 text-capitalize">تایید شده</h4>
                    <p className="text-sm mb-0">مهرگاز: {data.inVehicle.mehr}</p>
                    <p className="text-sm mb-0">سهندگاز: {data.inVehicle.sahand}</p>
                </div>
                </div>
                <hr className="dark horizontal my-0"/>
                <div className="card-footer p-3">
                <p className="mb-0">کل سفارشات
                  <span className="text-success text-sm font-weight-bolder">
                  : {data.inVehicle.total}  
                  </span></p>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">
                <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fas fa-search"></i>
                </div>
                <div className={props.direction==="ltr"?
                  "text-end pt-1":"text-start pt-1"}>
                    <h4 className="mb-0 text-capitalize">در حال کنترل</h4>
                    <p className="text-sm mb-0">مهرگاز: {data.saleControl.mehr}</p>
                    <p className="text-sm mb-0">سهندگاز: {data.saleControl.sahand}</p>
                </div>
                </div>
                <hr className="dark horizontal my-0"/>
                <div className="card-footer p-3">
                <p className="mb-0">کل سفارشات
                  <span className="text-success text-sm font-weight-bolder">
                  : {data.saleControl.total}  
                  </span></p>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">
                <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fas fa-truck"></i>
                </div>
                <div className={props.direction==="ltr"?
                  "text-end pt-1":"text-start pt-1"}>
                    <h4 className="mb-0 text-capitalize">تمام شده</h4>
                    <p className="text-sm mb-0">مهرگاز: {data.completed.mehr}</p>
                    <p className="text-sm mb-0">سهندگاز: {data.completed.sahand}</p>
                </div>
                </div>
                <hr className="dark horizontal my-0"/>
                <div className="card-footer p-3">
                <p className="mb-0">کل سفارشات
                  <span className="text-success text-sm font-weight-bolder">
                  : {data.completed.total}  
                  </span></p>
                </div>
            </div>
        </div>
      </div>
    )
}
export default DashBoardState