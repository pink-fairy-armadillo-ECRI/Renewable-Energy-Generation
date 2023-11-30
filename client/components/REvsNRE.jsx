import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

//const rnColor = '#D3EEB6'; //old lighter green
const rnColor = '#ACEE52'; //newer more saturated green
const nreColor = '#F77028';

const labelColor = 'white';

Chart.defaults.color = labelColor;

// RE = Renewable Energy, NRE = Non-renewable Energy
const REvsNRE = (props) => {
  const { chartId } = props;
  const chartData = useSelector((state) => state.states.data);
  // const chartData = props.compareStateData;

  useEffect(() => {
    const chartElement = document.getElementById(chartId);
    const myChart = new Chart(chartElement, {
      type: 'bar',
      data: {
        labels: [
          'Renewable Energy Generation',
          'Non-Renewable Energy Generation',
        ],
        datasets: [
          {
            label: 'Renewable Energy (RE)',
            data: [chartData.re],
            borderColor: rnColor,
            backgroundColor: rnColor,
            borderWidth: 1,
          },
          {
            label: 'Non-renewable Energy (NRE)',
            data: [null, chartData.nre],
            borderColor: nreColor,
            backgroundColor: nreColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: labelColor,
            },
          },
          y: {
            max: 100,
            min: 0,
            ticks: {
              color: labelColor,
              callback: (value) => {
                return value + '%';
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Percent Non-renewable vs Renewable Energy Generation by State',
            fontSize: 10,
            color: labelColor,
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
  }, [chartData]); // dependency array; when the values change, the useEffect will run

  return (
    <div className='statsChart'>
      {/* width="4" height="1" */}
      <canvas id={chartId}></canvas>
    </div>
  );
};

export default REvsNRE;
