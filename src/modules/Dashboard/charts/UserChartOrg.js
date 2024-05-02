
import { Bar ,Line} from 'react-chartjs-2';
import errortrans from '../../../translate/error';
import env from '../../../env';
import { useEffect, useState } from 'react';
function UserChart(props){
  const data = props.data
    const labels = props?props.label:["","","","",""]
    const dataRaw = data?data.free:["","","","",""]
    const dataTotal = data?data.credit:["","","","",""]
    
    const chartData = {
        labels,
        color:'rgb(255, 255, 2555)',
        datasets: [
          {
            label: "یارانه ای" ,
            data: dataRaw,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: ["aqua"],
            color:['rgb(255, 255, 255)'],
          },
          {
            label: 'آزاد',
            data: dataTotal,
            barPercentage: 0.5,
            rtl: true,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: [
              'rgba(255, 255, 255, 0.8)'
            ],
            color:['rgb(255, 255, 255)'],
          }
        ],
      };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      tooltips: {
        rtl: true 
      }
    };
    
    return(<>
        <Bar data={chartData} options={options}/>
        </>
    )
}
export default UserChart