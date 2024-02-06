import React, { useEffect } from 'react';
import UserInput from '../components/UserInput.jsx';
//import './styles.scss';

const InputContainer = (props) => {

  const { dispatch, userInputSubmission } = props;
  
  return(
    <div className='input-container'>
      {<UserInput dispatch={dispatch} userInputSubmission={userInputSubmission}/>}
    </div>
  )
}

export default InputContainer;