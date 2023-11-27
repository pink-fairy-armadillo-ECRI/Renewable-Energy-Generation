import React, { useEffect } from 'react';
import UserInput from '../components/UserInput.jsx';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchStates } from '../actions/stateActions.js';

const InputContainer = () => {
  // const dispatch = useDispatch() 
  // const fetchStates = fetchStates();
  // const states = useSelector((state) => state.states);

  // useEffect(() => {
  //   fetchStates()
  // }, [])
  
  return(
    <div className='input-container'>
      {<UserInput />}
    </div>
  )
}

/* 
const mapStateToProps = state => {
  return {
    stateData: state.stateData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchStates: () => dispatch(fetchStates())
  }
}


*/
export default InputContainer;