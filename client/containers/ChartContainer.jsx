import React from 'react';
import REvsNRE from '../components/REvsNRE.jsx';
import PieChart from '../components/PieChart.jsx';
import REBreakdown from '../components/REBreakdown.jsx';
import InputContainer from './InputContainer.jsx';

const ChartContainer = (props) => {

  return (
    <div className='chartContainer'>
      <REvsNRE />
      <REBreakdown />
      <PieChart chartId="1"/>
      <PieChart chartId="2"/>
    </div>
  )
}


export default ChartContainer;