import React from 'react';
import { useSelector } from 'react-redux';
import MarketsContainer from './MarketsContainer.jsx';
import TotalsDisplay from '../components/TotalsDisplay.jsx';

const MainContainer = () => {
  // add pertinent state here
  const totalCards = useSelector(state => state.markets.totalCards); 
  const totalMarkets = useSelector(state => state.markets.totalMarkets); 
  
  return(
    <div className="container">
      <div className="outerBox">
        <h1 id="header">MegaMarket Loyalty Cards</h1>
        {<TotalsDisplay totalCards={totalCards} totalMarkets={totalMarkets}/>}
        {<MarketsContainer totalCards={totalCards}/>}
      </div>
    </div>
  );
};

export default MainContainer;