import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

const DetailedPieChart = (props) => {
  const solarColor = '#FCF6B1';
  const windColor = '#A9E5BB';
  const hydroColor = '#2D1E2F';
  const geoColor = '#F72C25';
  const nuclearColor = '#F7B32B';

  const labelColor = 'white';

  Chart.defaults.color = labelColor;

  const { index } = props;
  const chartDataObj = useSelector((state) => state.states.compareStatesData);
  useEffect(() => {
    const chartElement = document.getElementById('detailedPieChart' + index);

    if (chartDataObj[index]) {
      const chartData = chartDataObj[index];
      const { solar_mw, wind_mw, hydro_mw, geo_mw, bio_mw } =
        chartData.percents;
      const { name } = chartData;

      const myChart = new Chart(chartElement, {
        type: 'pie',
        data: {
          labels: [
            `Solar Power ${solar_mw}%`,
            `Wind Power ${wind_mw}%`,
            `HydroElectric Power ${hydro_mw}%`,
            `Geothermal ${geo_mw}%`,
            `Biomass Power ${bio_mw}%`,
          ],
          datasets: [
            {
              data: [solar_mw, wind_mw, hydro_mw, geo_mw, bio_mw],
              borderColor: [
                solarColor,
                windColor,
                hydroColor,
                geoColor,
                nuclearColor,
              ],
              backgroundColor: [
                solarColor,
                windColor,
                hydroColor,
                geoColor,
                nuclearColor,
              ],
              borderWidth: 1,
              // pointHoverBackgroundColor: 'red',
              hoverBackgroundColor: 'red',
            },
          ],
        },
        options: {
          //hover?
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: `${name}'s Total Renewable Energy Generation`,
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
      <canvas id={'detailedPieChart' + index}></canvas>
    </div>
  );
};

export default DetailedPieChart;
