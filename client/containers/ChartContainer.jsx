import React from 'react';
import REvsNRE from '../components/REvsNRE.jsx';
import REBreakdown from '../components/REBreakdown.jsx';

const ChartContainer = () => {
  return (
    <div className='chart-container'>
      {<REvsNRE />}
      {<REBreakdown />}
    </div>
  );
};

export default ChartContainer;
