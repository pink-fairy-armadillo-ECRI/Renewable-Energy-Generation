import React from 'react';
import InputContainer from './InputContainer.jsx';
import ChartContainer from './ChartContainer.jsx';
import { connect } from 'react-redux';
import { fetchData } from '../actions/stateActions.js';

const MainContainer = (props) => {
  const { loading, error, fetchData } = props;
  // add pertinent state here

  const userInputSubmission = (userInputState) => {
    fetchData(userInputState);
  };

  return (
    <div className='main-container'>
      {<InputContainer userInputSubmission={userInputSubmission} />}
      {loading ? (
        <h1>loading</h1>
      ) : !error ? (
        <ChartContainer />
      ) : (
        <h2>{error}</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.states.data,
    loading: state.states.loadingData,
    error: state.states.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (data) => dispatch(fetchData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
