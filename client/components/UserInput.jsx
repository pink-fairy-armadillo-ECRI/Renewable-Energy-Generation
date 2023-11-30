import React from 'react';
import states from '../assets/states.js'

const UserInput = (props) => {
  const { fetchData, index } = props;

  const dropdownButton = (event) => {
    event.preventDefault();
    const option = document.getElementById('select' + index)
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

  return (
    <div className='inputContainer'>
      <p>Search by state</p>
      <form>
        <label htmlFor={index}>Please select a state or territory: </label>
        <select id={'select' + index}>{statesMapper()}</select>
        <button onClick={dropdownButton} type="submit">Search</button>
      </form>
    </div>
  )
}

export default UserInput;