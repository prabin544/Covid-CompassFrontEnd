import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '# of Cases',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Graph = () => (
  <>
    <div className='header'>

      <div className='links'>
        <a
          className='btn btn-gh'

        >

        </a>
      </div>
    </div>
    <Line style ={{ 
        width: '600px',
        height: '600px',
        margin: '50px auto'
    }}
     data={data} options={options} />
  </>
);

export default Graph;