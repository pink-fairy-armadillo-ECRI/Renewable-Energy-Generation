import React from 'react';
import { fetchStates } from '../actions/stateActions.js';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const HeaderBar = (props) => {

  console.log('######### HEADER BAR ACCESSED ########')
  const { data, loading, error, fetchData } = props

  return (
    <div className='headerbar'>
      <h2> GIGAWATMAP </h2>
    </div>
  )
};


export default HeaderBar;