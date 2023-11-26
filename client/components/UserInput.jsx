import React, { useState, useEffect } from 'react';
import { fetchStates } from '../actions/stateActions.js'
const UserInput = (props) => {
  const { states } = props;
  const [inputValue, setInputValue] = useState('');
  // SELECT table FROM database WHERE state LIKE 'AL%'

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputValue);
  }
  
  return(
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
/* 
v

volvo
saab
mercedes
audi
*/
export default UserInput;