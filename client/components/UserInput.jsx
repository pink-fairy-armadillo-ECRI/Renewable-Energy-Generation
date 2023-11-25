import React from 'react';

const UserInput = (props) => {
  const { states } = props;
  
  
  // SELECT table FROM database WHERE state LIKE 'AL%'
  
  return(
      <div>
          <p>TEXT</p>
          <form>
            <label httpfor="search"></label>
            <input type="text" id="search" value={inputValue} onChange={handleInputChange} name="location" placeholder="Search for location"/>
            <button onClick={handleClick} type="submit">Search</button>

            {
            <select id="states">
              {arrayOfStates.filter(())}
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