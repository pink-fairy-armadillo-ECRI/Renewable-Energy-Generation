import React from 'react';
import { useSelector } from 'react-redux';
import REvsNRE from '../components/REvsNRE.jsx';

const ChartContainer = () => {
  
  return(
    <div className='chart-container'>
      {<REvsNRE />}
    </div>
  )
}

export default ChartContainer;