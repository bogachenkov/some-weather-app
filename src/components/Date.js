import React from 'react';
import moment from 'moment';
import 'moment/locale/ru'

const Date = () => {
  return (
    <div className="Date">
      <p className="Date__weekday">{moment().format('ddd')}</p>
      <p className="Date__month">{moment().format('MMM D')}</p>
    </div>
  );
};

export default Date;