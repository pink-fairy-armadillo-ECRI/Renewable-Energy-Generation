import React from 'react';
import { fetchStates } from '../actions/stateActions.js';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const HeaderBar = (props) => {

  console.log('######### HEADER BAR ACCESSED ########')
  const { data, loading, error, fetchData } = props

  return (
    <div>
      <h2> GIGAWHAT </h2>
    </div>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);