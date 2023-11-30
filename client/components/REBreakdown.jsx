import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

const solarColor = '#FCF6B1';
const windColor = '#A9E5BB';
const hydroColor = '#2D1E2F';
const geoColor = '#F72C25';
const nuclearColor = '#F7B32B';

const labelColor = 'white';

Chart.defaults.color = labelColor;

// RE = Renewable Energy
const REBreakdown = (props) => {
  const { chartId } = props;
  const chartData = useSelector((state) => state.states.data);

  useEffect(() => {
    const chartElement = document.getElementById(chartId);

    if (chartData.percents) {
      const myChart = new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: [
            'Solar Power',
            'Wind Power',
            'HydroElectric Power',
            'Geothermal',
            'Biomass Power',
          ],
          datasets: [
            {
              label: 'Solar Power',
              data: [chartData.percents.solar_mw],
              borderColor: solarColor,
              backgroundColor: solarColor,
              borderWidth: 1,
            },
            {
              label: 'Wind Power',
              data: [null, chartData.percents.wind_mw],
              borderColor: windColor,
              backgroundColor: windColor,
              borderWidth: 1,
            },
            {
              label: 'HydroElectric Power',
              data: [null, null, chartData.percents.hydro_mw],
              borderColor: hydroColor,
              backgroundColor: hydroColor,
              borderWidth: 1,
            },
            {
              label: 'Geothermal',
              data: [null, null, null, chartData.percents.geo_mw],
              borderColor: geoColor,
              backgroundColor: geoColor,
              borderWidth: 1,
            },
            {
              label: 'Biomass Power',
              data: [null, null, null, null, chartData.percents.bio_mw],
              borderColor: nuclearColor,
              backgroundColor: nuclearColor,
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
              text: 'Percent of Total State Renewable Energy Generation by Type',
              fontSize: 16,
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
    }
  }, [chartData]); // dependency array; when the values change, the useEffect will run

  return (
    <div className='statsChart'>
      <canvas id={chartId}></canvas>
    </div>
  );
};

export default REBreakdown;
