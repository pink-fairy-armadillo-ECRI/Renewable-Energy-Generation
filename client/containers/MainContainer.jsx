import React from 'react';
import InputContainer from './InputContainer.jsx';
import ChartContainer from './ChartContainer.jsx';
import HeaderBar from '../components/HeaderBar.jsx';

const MainContainer = (props) => {
  const { loading, error } = props;
  console.log()
  return(
    <div className="mainContainer">
      <HeaderBar />
      <InputContainer />
      {loading ?<h1>loading</h1>: !error ? <ChartContainer/> : <h2>{error}</h2>}
    </div>
  );
};

export default MainContainer;