import React from 'react';
import DatumContainer from './DatumContainer.jsx'
// import ProfileSearches from '../components/ProfileSearches.jsx';
import { connect } from 'react-redux'
import { fetchData } from '../actions/stateActions.js'

const DataContainer = (props) => {
  const { data, loading, error, fetchData } = props;
  // add pertinent state here 
  
  const userInputSubmission = (userInputState) => {
    //fire the userinputstate variable to the post request function
    fetchData(userInputState);
  };

  return(
    <div className="dataContainer">
      {<DatumContainer />}
    </div>
  );
};


export default DataContainer;