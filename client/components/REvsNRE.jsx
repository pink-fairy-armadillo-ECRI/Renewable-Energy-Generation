import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import * as types from '../constants/actionTypes';

// RE = Renewable Energy, NRE = Non-renewable Energy
const REvsNRE = (props) => {
  const { chartData } = props;
  // const chartData = [25,75];

  useEffect(() => {
    // Create or update the chart when the component mounts
    const ctx = document.getElementById('REvsNREChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['RE', 'NRE'],
        datasets: [
          {
            label: 'Renewable Energy (RE)',
            data: [chartData.re],
            borderColor: 'rgb(50,205,50)',
            backgroundColor: 'rgb(50,205,50)',
            borderWidth: 1,
          },
          {
            label: 'Non-renewable Energy (NRE)',
            data: [null, chartData.nre],
            borderColor: 'rgb(220,20,60)',
            backgroundColor: 'rgb(220,20,60)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            max: 100,
            min: 0,
            ticks: {
              callback: (value) => {
                return value + '%';
              },
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              // Modifies the info when hovering over data
              label: function (context) {
                const datasetLabel = context.dataset.label || '';
                const value = context.parsed.y || 0;
                return `${datasetLabel}: ${value}%`;
              },
            },
          },
        },
      },
    });

    // Update the chart data when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, [chartData]); // dependency array; when the values change, the effect will run

  return(
    <div>
      <canvas id="REvsNREChart" width="4" height="1"></canvas>
    </div>
  )
}

export default REvsNRE;