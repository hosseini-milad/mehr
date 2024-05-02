import { useEffect, useState } from "react"
import WeekStatistic from "./charts/WeekStatistic"
import RXChart from "./charts/RXChart"
import env from "../../env"
import StockChart from "./charts/StockChart"
import UserChart from "./charts/UserChart"
function DashboardChart(props){
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
  fetch(env.siteApi + "/panel/report/OrderDashboard",postOptions)
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
    return(
        <div class="row mt-4">
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <div class="chart">
                <RXChart lang={props.lang} direction={props.direction}
                  label={data&&data.labels} 
                    data={data&&data.mehrData}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 ">سفارشات مهرگاز</h6>
              <p class="text-sm ">سفارشات ثبت شده در هفته</p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="fas fa-history"></i>
                <p class="mb-0 text-sm"> مشاهده جزئیات سفارشات </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2  ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                <div class="chart">
                <StockChart lang={props.lang} direction={props.direction}
                  label={data&&data.labels}
                  data={data&&data.sahandData}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 ">سفارشات سهندگاز</h6>
              <p class="text-sm ">سفارشات ثبت شده در هفته</p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="fas fa-history"></i>
                <p class="mb-0 text-sm"> مشاهده جزئیات سفارشات </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-4 mb-3">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-table shadow-table border-radius-lg py-3 pe-1">
                <div class="chart">
                <UserChart lang={props.lang} direction={props.direction}
                  label={["2","5","11","25","50"]}
                  data={data&&data.pWeight}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 ">تفکیک محصولات</h6>
              <p class="text-sm ">تعداد محصولات ثبت شده در هفته</p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="fas fa-history"></i>
                <p class="mb-0 text-sm">مشاهده جزئیات فروش </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DashboardChart