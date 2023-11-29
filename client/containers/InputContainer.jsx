import React, { useEffect } from 'react';
import UserInput from '../components/UserInput.jsx';
import { useDispatch } from 'react-redux'
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../actions/stateActions.js';
import axios from 'axios';


const InputContainer = (props) => {
  const dispatch = useDispatch();

  const fetchData = (state) => {
    dispatch(fetchDataRequest())
    axios.post(`/api/states/data?state=` + state)
      .then(response => {
        const data = response.data;
        dispatch(fetchDataSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg))
      })
  }
  
  return(
    <div>
      <UserInput dispatch={dispatch} fetchData={fetchData}/>
    </div>
  )
}

export default InputContainer;