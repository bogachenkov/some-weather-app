import React from 'react';
import moment from 'moment';

const Time = () => {
  return (
    <p className="Time">
      {moment().format('h:mm')}
      <span>{moment().format('A')}</span>
    </p>
  );
};

export default Time;