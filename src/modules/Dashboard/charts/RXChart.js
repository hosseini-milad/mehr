
import { Bar ,Line} from 'react-chartjs-2';
import errortrans from '../../../translate/error';
import env from '../../../env';
import { useEffect, useState } from 'react';
function RXChart(props){
    const data = props.data    
    const labels = props.label
    const dataRaw = data?data.data:["","","","","","",""]
    const dataTotal = data?data.weight:["","","","","","",""]
    
    const chartData = {
        labels,
        color:'rgb(255, 255, 2555)',
        datasets: [
          {
            label: "تعداد سفارش" ,
            data: dataRaw,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: ["aqua"],
            color:['rgb(255, 255, 255)'],
          },
          {
            label: 'وزن (تن)',
            data: dataTotal.map(item=>item/1000),
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
        <Line data={chartData} options={options}/>
        </>
    )
}
export default RXChart