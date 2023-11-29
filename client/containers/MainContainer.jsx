import React from 'react';
import InputContainer from './InputContainer.jsx';
import ChartContainer from './ChartContainer.jsx';
// import ProfileSearches from '../components/ProfileSearches.jsx';
import { connect } from 'react-redux'
import { fetchData } from '../actions/stateActions.js'

const MainContainer = (props) => {
  const { data, loading, error, fetchData } = props;
  // add pertinent state here 
  
  const userInputSubmission = (userInputState) => {
    console.log('this is userInputState: ', userInputState);
    //fire the userinputstate variable to the post request function
    fetchData(userInputState);
    console.log('this is data: ', data);
  };
  console.log('this is our chartDataOne: ', data);
  return(
    <div className="mainContainer">
      {<InputContainer userInputSubmission={userInputSubmission} />}
      {loading ?<h1>loading</h1>: !error ? <ChartContainer/> : <h2>{error}</h2>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.states.data,
    loading: state.states.loadingData,
    error: state.states.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (data) => dispatch(fetchData(data))
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MainContainer);