import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import * as types from '../constants/actionTypes';

// RE = Renewable Energy, NRE = Non-renewable Energy
const REvsNRE = (props) => {
  const { chartData } = props;

  useEffect(() => {
    // Create or update the chart when the component mounts
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'My Chart',
            data: chartData,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
    });

    // Update the chart data when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, [chartData]); // dependency array; when the values change, the effect will run

  return(
    <div>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  )
}

export default REvsNRE;