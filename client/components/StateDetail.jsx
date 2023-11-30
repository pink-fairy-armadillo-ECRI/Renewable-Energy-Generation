import React from 'react';
import REvsNRE from './REvsNRE.jsx';
import REBreakdown from './REBreakdown.jsx';

const StateDetail = () => {
  return (
    <div className='stateDetail'>
      <REvsNRE chartId={Math.random()} />
      <REBreakdown chartId={Math.random()} />
    </div>
  );
};

export default StateDetail;
