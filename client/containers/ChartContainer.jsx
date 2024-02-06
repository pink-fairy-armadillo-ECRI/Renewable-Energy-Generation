import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import REvsNRE from '../components/REvsNRE.jsx';
import REBreakdown from '../components/REBreakdown.jsx';

const ChartContainer = (props) => {
  const chartData = useSelector(state => state.chart.chartData);
  
  return(
    <div className='chart-container'>
      {<REvsNRE chartData={chartData} />}
      {<REBreakdown chartData={chartData} />}
    </div>
  )
}

export default ChartContainer;