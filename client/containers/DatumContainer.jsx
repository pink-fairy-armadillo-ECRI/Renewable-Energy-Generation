import React from 'react';
import InputContainer2 from './InputContainer2.jsx';
import ChartContainer from './ChartContainer.jsx';

const DatumContainer = (props) => {
  const { index } = props;

  return(
    <div className="datumContainer">
      <InputContainer2 index={index}/>
      <ChartContainer index={index}/>
    </div>
  );
};


export default DatumContainer;