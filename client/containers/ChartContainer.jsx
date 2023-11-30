import React from 'react';
import PieChart from '../components/PieChart.jsx';
import DetailedPieChart from '../components/DetailedPieChart.jsx';

const ChartContainer = (props) => {
  const { index } = props;
  return (
    <div>
      <div className='chartContainer'>
          <PieChart index={index}/>
          <DetailedPieChart index={index}/>
      </div>
    </div>
  )
}


export default ChartContainer;