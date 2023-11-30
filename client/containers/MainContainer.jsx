import React from 'react';
import DataContainer from './DataContainer.jsx';
import StateContainer from './StateContainer.jsx';
import StateDetail from '../components/StateDetail.jsx';
import HeaderBar from '../components/HeaderBar.jsx';

const MainContainer = () => {
  return (
    <div className='mainContainer'>
      <HeaderBar />
      <div className='stateContainer'>
        <StateContainer />
        <StateDetail />
      </div>
      <DataContainer />
    </div>
  );
};

export default MainContainer;
