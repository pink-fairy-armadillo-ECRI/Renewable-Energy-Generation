import React, { useState, useEffect } from 'react';
import { fetchStates } from '../actions/stateActions.js';
import { connect } from 'react-redux';

const UserInput = (props) => {
  const { fetchStates, loading, userInputSubmission } = props;

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchStates();
  }, []);

  const handleInputChange = (e) => {
    const option = document.getElementById("statesDropdown")
    console.log("AHJKAHSDJKAHSKJDHKASJHDJKASHDJKAHSDKJHAJKSDHKAJ", option.value)
    console.log(e.target.value)
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputValue);
    const option = document.getElementById("statesDropdown")
    userInputSubmission(option.value);
  }

  const dropdownButton = (event) => {
    event.preventDefault();
    const option = document.getElementById("statesDropdown")
    userInputSubmission(option.value)
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
      <label httpfor="search"></label>
      <input type="text" id="search" value={inputValue} onChange={handleInputChange} name="location" placeholder="Search for location"/>
      <button onClick={handleClick} type="submit">Search</button>

      <label htmlFor="statesDropdown">Please select a state or territory: </label>
      <select id="statesDropdown">
      {statesMapper()}
      </select>
      <button onClick={dropdownButton} type="submit">Search</button>
    </form>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    states: state.states.states,
    loading: state.states.loadingStates,
    error: state.states.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStates: () => dispatch(fetchStates()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
