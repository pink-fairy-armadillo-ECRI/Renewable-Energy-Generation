import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import REvsNRE from '../components/REvsNRE.jsx';
import REBreakdown from '../components/REBreakdown.jsx';

const ChartContainer = (props) => {
  const { chartDataOne } = props;
  
  return (
    <div className='chart-container'>
      {<REvsNRE chartDataOne={chartDataOne}/>}
      {<REBreakdown />}
    </div>
  )
}


export default ChartContainer;