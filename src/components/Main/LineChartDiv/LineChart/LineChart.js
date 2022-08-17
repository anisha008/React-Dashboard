import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
  datasets: [
    {
      label: 'Desktops',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#af8ee8',
      borderColor: '#af8ee8',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#af8ee8',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#af8ee8',
      pointHoverBorderColor: '#af8ee8',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [50, 75, 25, 50, 75, 50, 75, 100]
    },
    {
      label: 'Tablets',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#54d5ff',
      borderColor: '#54d5ff',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#54d5ff',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#54d5ff',
      pointHoverBorderColor: '#54d5ff',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 50, 75, 50, 15, 35, 40, 50]
    }
  ]
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} width={500} height={300} options={{ responsive: true }} />
    </div>
  )
}

export default LineChart
