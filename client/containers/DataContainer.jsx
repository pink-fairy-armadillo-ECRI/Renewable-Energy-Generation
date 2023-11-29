import React from 'react';
import DatumContainer from './DatumContainer.jsx';

const DataContainer = (props) => {
  const { loading, error } = props;

  return(
    <div className="dataContainer">
      <DatumContainer />
    </div>
  );
};


export default DataContainer;