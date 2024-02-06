import React from 'react';
import PieChart from '../components/PieChart.jsx';
import DetailedPieChart from '../components/DetailedPieChart.jsx';

const ChartContainer = (props) => {
  const { index } = props;
  return (
    <div className='chartContainer'>
      <PieChart index={index} />
      <DetailedPieChart index={index} />
    </div>
  );
};

export default ChartContainer;
