import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import * as types from '../constants/actionTypes';

// RE = Renewable Energy
const REBreakdown = (props) => {
  // const { chartData } = props;
  const chartData = [50, 12, 20, 18];
  // const chartData = useSelector(state => state.states.data);

  useEffect(() => {
    const ctx = document.getElementById('REBreakdownChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Solar Power', 'Wind', 'Water', 'Gravity'],
        datasets: [
          {
            label: 'Solar Power',
            data: [chartData[0]],
            borderColor: 'rgb(255,255,0)',
            backgroundColor: 'rgb(255,255,0)',
            borderWidth: 1,
          },
          {
            label: 'Wind',
            data: [null, chartData[1]],
            borderColor: 'rgb(152,251,152)',
            backgroundColor: 'rgb(152,251,152)',
            borderWidth: 1,
          },
          {
            label: 'Water',
            data: [null, null, chartData[2]],
            borderColor: 'rgb(0,191,255)',
            backgroundColor: 'rgb(0,191,255)',
            borderWidth: 1,
          },
          {
            label: 'Gravity',
            data: [null, null, null, chartData[3]],
            borderColor: 'rgb(105,105,105)',
            backgroundColor: 'rgb(105,105,105)',
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
      <canvas id="REBreakdownChart" width="4" height="1"></canvas>
    </div>
  )
}

export default REBreakdown;