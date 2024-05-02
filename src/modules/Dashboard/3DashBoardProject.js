import { useEffect, useState } from "react"
import env from "../../env"

function DashboardProject(){
  const [data,setData] = useState('')
  const [sort,setSort] = useState(0)
  const [perPage,setPerPage] = useState(10)
  useEffect(() => {
    const postOptions={
      method:'post',
      headers: {'Content-Type': 'application/json',
      //"x-access-token":token&&token.token,"userId":token&&token.userId
    },
      body:JSON.stringify({sort:sort,perPage:perPage})
    }
  fetch(env.siteApi + "/panel/report/report-user",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
      setData('')
      setTimeout(()=> setData(result),200)
    },
    (error) => {
      console.log(error);
    }
    
  )},[sort,perPage])
  if(!data)
      return(<div className="col-lg-8 col-md-6 mb-md-0 mb-4">Waiting</div>)
  else 
    return(
        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
          <div className="card">
            <div className="card-header pb-0">
              <div className="row">
                <div className="col-lg-6 col-7">
                  <h6>عاملین</h6>
                  <p className="text-sm mb-0">
                    <i className="fa fa-check text-info" aria-hidden="true"></i>
                    <span className="font-weight-bold ms-1">ماه جاری</span>
                  </p>
                </div>
                <div className="col-lg-6 col-5 my-auto text-start">
                  <div className="dropdown float-lg-start pe-4">
                    <a className="cursor-pointer" id="dropdownTable"
                    onClick={()=>sort?setSort(0):setSort(1)}>
                      <i className="fa fa-sort text-secondary"></i>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive tableFixHead">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">نام مشترک</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">سفارشات</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">مصرف شده / اعتبارات </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">اعتبار مصرف شده</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> محقق شده/ بودجه</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">تحقق بودجه</th>
                    </tr>
                  </thead>
                  <tbody className="show10">
                    {data&&data.map((user,i)=>(
                      <tr key={i}>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src={(user.group&&user.group.includes("مهر"))?
                            "/img/mehr.png":"/img/sahand.png"} className="avatar-sm me-3" alt="xd"/>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <a href={"/users/detail/"+user.user}>
                              <h6 className="mb-0 text-sm">
                              {user.userName}</h6></a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          {user.orders&&user.orders.map((order,i)=>(
                            <a className="avatar avatar-xs rounded-circle" 
                              data-bs-toggle="tooltip" key={i}
                              data-bs-placement="bottom" 
                              href={"/orders/detail/"+order}
                              title={order}>
                            
                            </a>
                          ))}
                          
                        </div>
                      </td>
                      <td>
                      <small className="kasr">{
                      user.orderCredit+ " (" + user.userCredit+")"
                      }</small>
                      </td>
                      <td className="align-middle">
                        <div className="progress-wrapper w-75 mx-auto">
                          <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-xs font-weight-bold">
                                {user.coef?
                                Math.round(user.coef.toFixed(2)*100):0} %</span>
                            </div>
                          </div>
                          <div className="progress">
                            <div className={`progress-bar bg-gradient-info
                             w-${user.percent}`} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <small className="kasr">{
                      user.orderCredit+ " (" + user.badget+")"
                      }</small>
                      </td>
                      <td className="align-middle text-sm">
                        
                        <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-xs font-weight-bold">
                                {user.badgetCoef?
                                Math.round(user.badgetCoef.toFixed(2)*100):0} %</span>
                            </div>
                          </div>
                          <div className="progress">
                            <div className={`progress-bar bg-gradient-info
                             w-${user.badgetPercent}`} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
              <input type="button" className="save-btn" value={"مشاهده بیشتر"}
              style={{margin:"10px 20px"}} onClick={()=>setPerPage(100)}/>

          </div>
        </div>
    )
}
export default DashboardProject