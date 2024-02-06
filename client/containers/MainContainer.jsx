import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputContainer from './InputContainer.jsx';
import ChartContainer from './ChartContainer.jsx';
// import ProfileSearches from '../components/ProfileSearches.jsx';

const MainContainer = () => {
  // add pertinent state here 
  // const chartData = useSelector(state => state.chart.chartData);
  const dispatch = useDispatch();

  return(
    <div className='main-container'>
      {<InputContainer />}
      {<ChartContainer />}
    </div>
  );
};


export default MainContainer;