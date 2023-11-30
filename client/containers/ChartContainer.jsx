import React from 'react';
import PieChart from '../components/PieChart.jsx';

const ChartContainer = (props) => {
  return (
    <div className='chartContainer'>
      <PieChart chartId={Math.random()} />
      <PieChart chartId={Math.random()} />
    </div>
  );
};

export default ChartContainer;
