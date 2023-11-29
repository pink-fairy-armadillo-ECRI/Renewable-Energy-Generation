import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

const REvsNRE = () => {
  const chartData = useSelector((state) => state.states.data);

  useEffect(() => {
    const ctx = document.getElementById('REvsNREChart');
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

    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  return (
    <div>
      <canvas id='REvsNREChart' width='4' height='1'></canvas>
    </div>
  );
};

export default REvsNRE;
