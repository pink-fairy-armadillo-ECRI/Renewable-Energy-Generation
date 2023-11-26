import React, { useEffect } from 'react';
import UserInput from '../components/UserInput.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStates } from '../actions/stateActions.js';

const InputContainer = () => {
  // const dispatch = useDispatch() 
  // const states = useSelector((state) => state.states);

  // useEffect(() => {
  //   fetchUsers()
  // }, [])
  
  return(
    <div className='input-container'>
      {<UserInput />}
    </div>
  )
}

export default InputContainer;