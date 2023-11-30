import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import * as types from '../constants/actionTypes';

const rnColor = '#D3EEB6';
const nreColor = '#F77028';

const PieChart = (props) => {
  const { index } = props;
  const chartDataObj = useSelector((state) => state.states.compareStatesData);
  useEffect(() => {
    const chartElement = document.getElementById('pieChart' + index);

    if (chartDataObj[index]) {
      const chartData = chartDataObj[index];
      const { re, nre, name } = chartData;

      const myChart = new Chart(chartElement, {
        type: 'doughnut',
        data: {
          labels: [
            `Renewable Energy Generation ${re}%`,
            `Non-Renewable Energy Generation ${nre}%`,
          ],
          datasets: [
            {
              data: [re, nre],
              borderColor: ['rgb(255,255,255)', 'rgb(255, 255, 255)'],
              backgroundColor: [rnColor, nreColor],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: `Renewable vs Non-Renewable Energy Generation from ${name}`,
              fontSize: 10,
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
  }, [chartDataObj[index]]); // dependency array; when the values change, the useEffect will run

  return (
    <div className='comparisonChart'>
      <canvas id={'pieChart' + index}></canvas>
    </div>
  );
};

export default PieChart;
