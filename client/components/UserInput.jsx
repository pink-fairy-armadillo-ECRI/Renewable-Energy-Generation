import React, { useState, useEffect } from 'react';
import { fetchStates } from '../actions/stateActions.js'
import { connect } from 'react-redux'

const UserInput = (props) => {
  const { states, fetchStates, loading, error } = props;
  const [inputValue, setInputValue] = useState('');
  // SELECT table FROM database WHERE state LIKE 'AL%'
 console.log('this is loadingStates: ', loading);
 console.log('this is states: ', states);
 console.log('this is our error: ', error);
    useEffect(() => {
      fetchStates()
    }, [])
  


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputValue);
  }
  
  return loading ? (
  <div>loading</div>
  ) : (
    <div>
    <p>User input</p>
    <form>
      <label httpfor="search"></label>
      <input type="text" id="search" value={inputValue} onChange={handleInputChange} name="location" placeholder="Search for location"/>
      <button onClick={handleClick} type="submit">Search</button>

      {
      <select id="states">
        {/* {<option></option>} */}
        {/* {arrayOfStates.filter(()).map()} */}
      </select>}
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
    fetchStates: () => dispatch(fetchStates())
  }
}


/* 
v

volvo
saab
mercedes
audi
*/
export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
// export default UserInput;