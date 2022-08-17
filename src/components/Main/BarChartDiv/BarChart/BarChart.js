import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
  maintainAspectRatio: true,
  // responsive: true,
  scales: {
       xAxes: [{
           stacked: true,
       }],
       yAxes: [{
           stacked: true
       }]
   }
}

const arbitraryStackKey = "stack1";
const data = {
  labels: ['2005', '', '2007', '', '2009', '', '2011', '', '2013', '', '2015'],
  datasets: [
    // These two will be in the same stack.
    {
      stack: arbitraryStackKey,
      label: 'Desktops',
      backgroundColor: 'rgba(126, 87, 194, 1)',
      data: [50, 75, 100, 75, 100, 75, 50, 75, 50, 75, 100],
      categoryPercentage: 0.8,
      barPercentage: 1.0,
    },
    {
      stack: arbitraryStackKey,
      label: 'Tablets',
      backgroundColor: 'rgba(126, 87, 194, 0.7)',
      data: [150, 50, 75, 50, 75, 50, 25, 50, 25, 50, 75],
      categoryPercentage: 0.8,
      barPercentage: 1.0,
    },
    {
      stack: arbitraryStackKey,
      label: 'Mobiles',
      backgroundColor: 'rgba(126, 87, 194, 0.3)',
      data: [100, 75, 50, 75, 50, 75, 50, 25, 50, 50, 100],
      categoryPercentage: 0.8,
      barPercentage: 1.0,
    }
  ]
}
const BarChart = () => {
  return (
    <div>
      <Bar
        data={data}
        width={400}
        height={230}
        options={options}
      />
    </div>
  )
}

export default BarChart
