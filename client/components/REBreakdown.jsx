import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

// RE = Renewable Energy
const REBreakdown = (props) => {
  const { chartId } = props;
  const chartData = useSelector(state => state.states.data);

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
              borderColor: 'rgb(255,255,0)',
              backgroundColor: 'rgb(255,255,0)',
              borderWidth: 1,
            },
            {
              label: 'Wind Power',
              data: [null, chartData.percents.wind_mw],
              borderColor: 'rgb(152,251,152)',
              backgroundColor: 'rgb(152,251,152)',
              borderWidth: 1,
            },
            {
              label: 'HydroElectric Power',
              data: [null, null, chartData.percents.hydro_mw],
              borderColor: 'rgb(0,191,255)',
              backgroundColor: 'rgb(0,191,255)',
              borderWidth: 1,
            },
            {
              label: 'Geothermal',
              data: [null, null, null, chartData.percents.geo_mw],
              borderColor: 'rgb(105,105,105)',
              backgroundColor: 'rgb(105,105,105)',
              borderWidth: 1,
            },
            {
              label: 'Biomass Power',
              data: [null, null, null, null, chartData.percents.bio_mw],
              borderColor: 'rgb(139,0,139)',
              backgroundColor: 'rgb(139,0,139)',
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
              text: 'Percent of Total State Renewable Energy Generation by Type',
              fontSize: 16,
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

  return(
    <div className="statsChart">
      <canvas id={chartId}></canvas>
    </div>
  );
};

export default REBreakdown;
