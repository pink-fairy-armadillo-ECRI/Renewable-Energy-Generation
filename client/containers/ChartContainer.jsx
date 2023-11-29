import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import REvsNRE from '../components/REvsNRE.jsx';
import PieChart from '../components/PieChart.jsx';
import REBreakdown from '../components/REBreakdown.jsx';

const ChartContainer = (props) => {
  // const { chartDataOne } = props;
  
  return (
    <div className='chartContainer'>
      {<REvsNRE />}
      {<REBreakdown  />}
      {<PieChart />}
    </div>
  )
}


export default ChartContainer;