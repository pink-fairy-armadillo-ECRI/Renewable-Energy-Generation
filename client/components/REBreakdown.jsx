import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import * as types from '../constants/actionTypes';

// RE = Renewable Energy
const REBreakdown = (props) => {
  const chartData = useSelector(state => state.states.data);

  if(chartData.percents){
    useEffect(() => {
      console.log("AFTER CHANGES", chartData)
      const ctx = document.getElementById('REBreakdownChart');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Solar Power', 'Wind Power', 'HydroElectric Power', 'Geothermal', 'Biomass Power'],
          datasets: [
            {
              label: 'Solar Power',
              data: [chartData.percents.solar_mw * 100],
              borderColor: 'rgb(255,255,0)',
              backgroundColor: 'rgb(255,255,0)',
              borderWidth: 1,
            },
            {
              label: 'Wind Power',
              data: [null, chartData.percents.wind_mw * 100],
              // data: chartData[2],
              borderColor: 'rgb(152,251,152)',
              backgroundColor: 'rgb(152,251,152)',
              borderWidth: 1,
            },
            {
              label: 'HydroElectric Power',
              data: [null, null, chartData.percents.hydro_mw * 100],
              // data: chartData[2],
              borderColor: 'rgb(0,191,255)',
              backgroundColor: 'rgb(0,191,255)',
              borderWidth: 1,
            },
            {
              label: 'Geothermal',
              data: [null, null, null, chartData.percents.geo_mw * 100],
              // data: chartData[2],
              borderColor: 'rgb(105,105,105)',
              backgroundColor: 'rgb(105,105,105)',
              borderWidth: 1,
            },
            {
              label: 'Biomass Power',
              data: [null, null, null, null, chartData.percents.bio_mw * 100],
              // data: chartData[2],
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
    }, [chartData]); // dependency array; when the values change, the effect will run
  }

  return(
    <div className="statsChart">
      <canvas id="REBreakdownChart"></canvas>
    </div>
  )
}

export default REBreakdown;