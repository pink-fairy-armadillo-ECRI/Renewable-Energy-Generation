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
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    userInputSubmission(inputValue);
  };

  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      <p>Select State:</p>
      <form>
        <label httpfor='search'></label>
        <input
          type='text'
          id='search'
          value={inputValue}
          onChange={handleInputChange}
          name='location'
          placeholder='Search for location'
        />
        <button onClick={handleClick} type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
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
