import React from 'react';
import { useSelector } from 'react-redux';
import InputContainer from './InputContainer.jsx';
import ChartContainer from './ChartContainer.jsx';
// import ProfileSearches from '../components/ProfileSearches.jsx';

const MainContainer = () => {
  // add pertinent state here
  // const totalCards = useSelector(state => state.markets.totalCards); 

  return(
    <div className='main-container'>
      {<InputContainer />}
      {<ChartContainer />}
    </div>
  );
};


export default MainContainer;