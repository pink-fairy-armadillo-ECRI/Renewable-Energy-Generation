import React from 'react';
import UserInput from '../components/UserInput.jsx';
import { useSelector } from 'react-redux';

const InputContainer = () => {
  
  return(
    <div className='input-container'>
      {<UserInput />}
    </div>
  )
}

export default InputContainer;