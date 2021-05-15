import React from 'react';
import { Line } from 'react-chartjs-2';

class Graph extends React.Component {

  render() {
    const data = {
      labels: this.props.label.map(l => l.substr(0 , 10)),
      datasets: [
        {
          label: '# of Cases',
          data:  this.props.yAxis,
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

    return (
      <>
        <div className='header'>

        </div>
        <Line style ={{ 
             width: '600px',
             height: '600px',
             margin: '50px auto'
        }}
        data={data} options={options} />
        
      </>
    )
  }
}

export default Graph;