import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

// RE = Renewable Energy, NRE = Non-renewable Energy
const REvsNRE = ({ chartId }) => {
  const chartData = useSelector((state) => state.states.data);

  useEffect(() => {
    console.log(chartData);
    // Create or update the chart when the component mounts
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Renewable Energy Generation',
          'Non-Renewable Energy Generation',
        ],
        datasets: [
          {
            label: 'Renewable Energy (RE)',
            data: [chartData.re * 100],
            borderColor: 'rgb(50,205,50)',
            backgroundColor: 'rgb(50,205,50)',
            borderWidth: 1,
          },
          {
            label: 'Non-renewable Energy (NRE)',
            data: [null, chartData.nre * 100],
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
          title: {
            display: true,
            text: 'Percent Non-renewable vs Renewable Energy Generation by State',
            fontSize: 10,
          },
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

  return (
    <div className='statsChart'>
      {/* width="4" height="1" */}
      <canvas id={chartId}></canvas>
    </div>
  );
};

export default REvsNRE;
