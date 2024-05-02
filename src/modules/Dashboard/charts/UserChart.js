
import { Bar ,Line} from 'react-chartjs-2';


function UserChart(props){
  const data = props.data
    const labels = props?props.label:["","","","",""]
    const creditMehr = data?data.credit.mehr:["","","","",""]
    const creditSahand = data?data.credit.sahand:["","","","",""]
    const fobMehr = data?data.fob.mehr:["","","","",""]
    const fobSahand = data?data.fob.sahand:["","","","",""]
    
    const chartData = {
        labels,
        color:'rgb(255, 255, 2555)',
        datasets: [
          {
            label: "مهر" ,
            data: creditMehr,
            barPercentage: 0.5,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
            backgroundColor: ["#EC1616"],
            color:['rgb(255, 255, 255)'],
            stack: 'Stack 0',
          },
          {
            label: 'آزاد مهر',
            data: fobMehr,
            barPercentage: 0.5,
            rtl: true,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
            backgroundColor: ["#EC161690"],
            color:['rgb(255, 255, 255)'],
            stack: 'Stack 0',
          },
          {
            label: "سهند" ,
            data: creditSahand,
            barPercentage: 0.5,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
            backgroundColor: ["#50774b"],
            color:['rgb(255, 255, 255)'],
            stack: 'Stack 1',
          },
          {
            label: 'آزاد سهند',
            data: fobSahand,
            barPercentage: 0.5,
            rtl: true,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
            backgroundColor: ["#50774b90"],
            color:['rgb(255, 255, 255)'],
            stack: 'Stack 1',
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
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    };
    
    return(<>
        <Bar data={chartData} options={options}/>
        </>
    )
}
export default UserChart