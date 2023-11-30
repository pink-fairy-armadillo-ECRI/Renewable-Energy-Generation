import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import * as types from '../constants/actionTypes';

// RE = Renewable Energy, NRE = Non-renewable Energy
const PieChart = ({ chartId }) => {
  const chartData = useSelector((state) => state.states.data);
  useEffect(() => {
    console.log(chartData);
    // Create or update the chart when the component mounts
    const chartElement = document.getElementById(chartId);

    if (chartData.percents) {
      const myChart = new Chart(chartElement, {
        type: 'doughnut',
        data: {
          labels: [
            `Renewable Energy Generation ${
              Math.floor(chartData.re * 1000) / 10
            }%`,
            `Non-Renewable Energy Generation ${
              Math.floor(chartData.nre * 1000) / 10
            }%`,
          ],
          datasets: [
            {
              data: [chartData.re * 100, chartData.nre * 100],
              borderColor: ['rgb(255,255,255)', 'rgb(255, 255, 255)'],
              backgroundColor: ['rgb(50,205,50)', 'rgb(220,20,60)'],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
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
            title: {
              display: true,
              text: 'Percent Non-renewable vs Renewable Energy Generation by State',
              fontSize: 10,
            },
          },
        },
      });
      return () => {
        myChart.destroy();
      };
    }

    // Update the chart data when the component unmounts
  }, [chartData]); // dependency array; when the values change, the effect will run

  return (
    <div className='progressChart'>
      <canvas id={chartId}></canvas>
    </div>
  );
};

export default PieChart;
