import React from 'react';
import { useSelector } from 'react-redux';
import REvsNRE from './REvsNRE.jsx';
import REBreakdown from './REBreakdown.jsx';

const StateDetail = () => {
  const stateName = useSelector((state) => state.states.data.name);

  return (
    <div className='stateDetail'>
      <h1 className='barTitle'>{stateName}</h1>
      <REvsNRE chartId={Math.random()} />
      <REBreakdown chartId={Math.random()} />
    </div>
  );
};

export default StateDetail;
