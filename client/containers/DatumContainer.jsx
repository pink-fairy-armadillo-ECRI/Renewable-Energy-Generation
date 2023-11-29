import React from 'react';
import InputContainer from './InputContainer.jsx';
import ChartContainer from './ChartContainer.jsx';
// import ProfileSearches from '../components/ProfileSearches.jsx';
import { connect } from 'react-redux'
import { fetchData } from '../actions/stateActions.js'

const DatumContainer = (props) => {
  const { data, loading, error, fetchData } = props;
  // add pertinent state here 
  
  const userInputSubmission = (userInputState) => {
    //fire the userinputstate variable to the post request function
    fetchData(userInputState);
  };

  return(
    <div className="datumContainer">
      {/* {<InputContainer userInputSubmission={userInputSubmission} />} */}
      {loading ?<h1>loading</h1>: !error ? <ChartContainer/> : <h2>{error}</h2>}
    </div>
  );
};


export default DatumContainer;