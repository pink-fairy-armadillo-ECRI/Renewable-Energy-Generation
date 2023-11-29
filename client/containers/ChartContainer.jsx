import React from 'react';
import REvsNRE from '../components/REvsNRE.jsx';
import PieChart from '../components/PieChart.jsx';
import REBreakdown from '../components/REBreakdown.jsx';

const ChartContainer = () => {
  return (
    <div className='chartContainer'>
      {<REvsNRE />}
      {<REBreakdown  />}
      {<PieChart />}
    </div>
  );
};

export default ChartContainer;
