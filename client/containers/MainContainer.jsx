import React from 'react';
import DataContainer from './DataContainer.jsx';
import StateContainer from './StateContainer.jsx';

const MainContainer = () => {
  return (
    <div className='mainContainer'>
      <div className='stateContainer'>
        <StateContainer />
      </div>
      <DataContainer />
    </div>
  );
};

export default MainContainer;
