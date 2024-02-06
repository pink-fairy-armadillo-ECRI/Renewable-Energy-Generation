import React from 'react';

const HeaderBar = (props) => {
  return (
    <div className='headerbar'>
      <h2>
        {' '}
        Renewable
        <span>
          <s> Energy </s>
        </span>
        Generation{' '}
      </h2>
    </div>
  );
};

export default HeaderBar;
