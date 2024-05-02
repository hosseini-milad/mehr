import { useEffect, useState } from "react"
import env, { normalPriceSum } from "../../env"

function DashboardOverView(){
  
  const [data,setData] = useState('')
  useEffect(() => {
    const postOptions={
      method:'post',
      headers: {'Content-Type': 'application/json',
      //"x-access-token":token&&token.token,"userId":token&&token.userId
    },
      body:JSON.stringify({"pageSize":"10","status":"completed","access":"manager"})
    }
    
  fetch(env.siteApi + "/panel/order/list",postOptions)
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
if(!data)
    return(<div class="col-lg-4 col-md-6">Waiting</div>)
else return(
        <div class="col-lg-4 col-md-6">
          <div class="card h-100">
            <div class="card-header pb-0">
              <h6>سفارشات در حال پردازش</h6>
              <p class="text-sm">
                  
                 <span class="font-weight-bold"></span>
              <br/>
                 
                 <span class="font-weight-bold"></span>
              </p>
            </div>
            <div class="card-body p-3">
              <div class="timeline timeline-one-side">
                {data.filter&&data.filter.map((order,i)=>(
                  <div class="timeline-block mb-3" key={i}>
                    <span class="timeline-step">
                      <img src={(order.group&&order.group.includes("مهر"))?
                        "/img/mehr.png":"/img/sahand.png"} className="avatar-sm me-3" alt="xd"/>
                    </span>
                    <div class="timeline-content" onClick={()=>window.location.href=
                    "http://localhost:3030/orders/detail/"+order.stockOrderNo}
                    style={{cursor:"pointer"}}>
                      <h6 class="text-dark text-sm font-weight-bold mb-0">{order.userInfo[0].cName}</h6>
                      <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">{order.stockOrderNo}____
                      وزن: {normalPriceSum(order.freeCredit,order.credit)}</p>
                    </div>
                  </div>
                ))}
                <hr/>
                <div class="timeline-block mb-3">
                  </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default DashboardOverView