import { useEffect, useState } from "react"
import env, { normalPriceCount, normalPriceSum } from "../../env"
import dashtrans from "../../translate/dashboard"

function DashBoardDaily(props){
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
    fetch(env.siteApi + "/panel/report/report-top")
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
  if(!data||!data.orderCount)
  return(
    <div className="row">Waiting</div>
    )
  else
    return(<>
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                        <i className="fas fa-credit-card"></i>
                    </div>
                    <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                        <p className="text-sm mb-0 text-capitalize">{dashtrans.todayMehr[props.lang]}</p>
                        <h4 className="mb-0">{normalPriceCount(data.orderCount.mehrCount,1)}</h4>
                    </div>
                    </div>
                    <hr className="dark horizontal my-0"/>
                    <div className="card-footer p-3">
                    <p className="mb-0">{dashtrans.monthMehr[props.lang]}: 
                      <span className="text-success text-sm font-weight-bolder">
                      {normalPriceCount(data.orderCountMonth.mehrCount,1)}  
                      </span></p>
                    </div>
                </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <i className="fas fa-user"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">{dashtrans.todaySahand[props.lang]}</p>
                <h4 className="mb-0">{normalPriceCount(data.orderCount.sahandCount,1)}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0">{dashtrans.monthSahand[props.lang]}: 
              <span className="text-success text-sm font-weight-bolder">
              {normalPriceCount(data.orderCountMonth.sahandCount,1)} </span></p>
            </div>
          </div>
        </div>
        
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-money"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">وزن کل سفارشات</p>
                <h4 className="mb-0">{normalPriceCount(data.orderCount.total)}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0">وزن ماه پیش: 
              <span className="text-success text-sm font-weight-bolder">
              {normalPriceCount(data.orderCountMonth.total,1)} </span></p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-money"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">اعتبار مشتریان مهرگاز</p>
                <h4 className="mb-0 creditHolder">{data.credit?normalPriceCount(data.credit.mehr,1):0}
                  <small className="fobPresent"> ({data.fob?normalPriceCount(data.fob.mehr,1):0})</small>
                </h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0">تحویل شده:
              <span className="text-success text-sm font-weight-bolder">
              %{data.percent?data.percent.mehr:0} </span></p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <i className="fas fa-user-plus"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">{dashtrans.todayCustomerMehr[props.lang]}</p>
                <h4 className="mb-0">{data.userToday.mehr}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"> {dashtrans.MonthCustomerMehr[props.lang]}: 
              <span className="text-danger text-sm font-weight-bolder">
              {data.monthUser.mehr}</span></p>
            </div>
          </div>
        </div>
        
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-money"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">{dashtrans.todayCustomerSahand[props.lang]}</p>
                <h4 className="mb-0">{data.userToday.sahand}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0">{dashtrans.MonthCustomerSahand[props.lang]}: 
              <span className="text-success text-sm font-weight-bolder">
              {data.monthUser.sahand} </span></p>
            </div>
          </div>
        </div>
        
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-money"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">کل مشتریان این ماه</p>
                <h4 className="mb-0">{data.userToday.total?data.userToday.total:0}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0">مشتریان ماه پیش: 
              <span className="text-success text-sm font-weight-bolder">
              {data.monthUser.total} </span></p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-money"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">اعتبار مشتریان سهندگاز</p>
                <h4 className="mb-0 creditHolder">{data.credit?normalPriceCount(data.credit.sahand,1):0}
                  <small className="fobPresent"> ({data.fob?normalPriceCount(data.fob.sahand,1):0})</small>
                </h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"> تحویل شده: 
              <span className="text-success text-sm font-weight-bolder">
              %{data.percent?data.percent.sahand:0} </span></p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
export default DashBoardDaily