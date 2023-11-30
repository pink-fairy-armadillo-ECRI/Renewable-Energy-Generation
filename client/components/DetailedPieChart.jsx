import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

const DetailedPieChart = (props) => {
  const { index } = props;
  const chartDataObj = useSelector(state => state.states.compareStatesData);
  useEffect(() => {
    
    const chartElement = document.getElementById('detailedPieChart' + index);
    
    if (chartDataObj[index]){

      const chartData = chartDataObj[index];
      const { solar_mw, wind_mw, hydro_mw, geo_mw, bio_mw} = chartData.percents;
      const { name } = chartData;

      const myChart = new Chart(chartElement, {
        type: 'doughnut',
        data: {
          labels: [`Solar Power ${solar_mw}%`, `Wind Power ${wind_mw}%`, `HydroElectric Power ${hydro_mw}%`, `Geothermal ${geo_mw}%`, `Biomass Power ${bio_mw}%`],
          datasets: [
            {
              data: [solar_mw, wind_mw, hydro_mw, geo_mw, bio_mw],
              borderColor: ['rgb(255,255,0)', 'rgb(152,251,152)', 'rgb(0,191,255)', 'rgb(105,105,105)', 'rgb(139,0,139)'],
              backgroundColor: ['rgb(255,255,0)', 'rgb(152,251,152)', 'rgb(0,191,255)', 'rgb(105,105,105)', 'rgb(139,0,139)'],
              borderWidth: 1,
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
                      const value = context.dataset.data || 0;
                      return `${datasetLabel}: ${value}%`;
                    },
                  },
                },
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

  return(
    <div className="comparisonChart">
      <canvas id={'detailedPieChart' + index}></canvas>
    </div>
  )
}

export default DetailedPieChart;