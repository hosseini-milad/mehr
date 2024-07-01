import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    registerables ,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import Cookies from 'universal-cookie';
import env from '../env';
import DashBoardDaily from '../modules/Dashboard/1DashBoardToday';
import DashboardChart from '../modules/Dashboard/2DashBoardCharts';
import DashboardProject from '../modules/Dashboard/3DashBoardProject';
import DashboardOverView from '../modules/Dashboard/4DashBoardOverview';
import errortrans from '../translate/error';
import DashBoardState from '../modules/Dashboard/2DashBoardState';
const cookies = new Cookies();

function SaleAnalyze(props){
  const direction = props.lang?props.lang.dir:errortrans.defaultDir;
  const lang = props.lang?props.lang.lang:errortrans.defaultLang;
  const token=cookies.get(env.cookieName)
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        ArcElement,
        Title,
        Tooltip,
        Legend,
        ...registerables
      );
      ChartJS.defaults.font.family = "Vazir";
      ChartJS.defaults.color = '#eee'
    if(token&&token.access==="manager")
      return(
    <div class="container-fluid py-4" style={{direction:direction}}>
        
        <div class="row mb-4">
            <DashboardProject />
            <DashboardOverView />
    </div>
    </div>
    )
    else return(
      <div class="container-fluid py-4" style={{direction:direction}}>
         به مهرگاز خوش آمدید
      </div>
    )
}
export default SaleAnalyze