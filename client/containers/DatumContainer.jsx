import React from 'react';
import InputContainer from './InputContainer.jsx';
import ChartContainer from './ChartContainer.jsx';

const DatumContainer = (props) => {
  const { loading, error } = props;
  // add pertinent state here 

  return(
    <div className="datumContainer">
      {<InputContainer />}
      {loading ?<h1>loading</h1>: !error ? <ChartContainer/> : <h2>{error}</h2>}
    </div>
  );
};


export default DatumContainer;