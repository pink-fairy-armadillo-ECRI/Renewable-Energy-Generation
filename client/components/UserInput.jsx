import React, { useState, useEffect } from 'react';
import { fetchStates } from '../actions/stateActions.js';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const UserInput = (props) => {
  const { states, fetchStates, loading, error, dispatch, fetchData, userInputSubmission } = props;
  // SELECT table FROM database WHERE state LIKE 'AL%'
  useEffect(() => {
    fetchStates()
  }, [])

  const dropdownButton = (event) => {
    event.preventDefault();
    const option = document.getElementById("statesDropdown")
    fetchData(option.value)
  }
  const statesMapper = () => {
    const array = [];
    for (let i = 0; i < states.length; i++){
      const currState = states[i]
      array.push(<option value={currState} key={i}>{currState}</option>)
    }
    return array
  }

  return loading ? (
  <div>Hi</div>
  ) : (
    <div className='inputContainer'>
    <p>Search by state</p>
    <form>
      <label htmlFor="statesDropdown">Please select a state or territory: </label>
      <select id="statesDropdown">{statesMapper()}</select>
      <button onClick={dropdownButton} type="submit">Search</button>
    </form>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    states: state.states.states,
    loading: state.states.loadingStates,
    error: state.states.error
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchStates: () => dispatch(fetchStates()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
// export default UserInput;