import React from 'react';
import ReactSVG from 'react-svg'
import codesData from '../data/codes';
import moment from 'moment';
import 'moment/locale/ru';

const weekdaysRu = new Map([
  ["Mon", "Понедельник"],
  ["Tue", "Вторник"],
  ["Wed", "Среда"],
  ["Thu", "Четверг"],
  ["Fri", "Пятница"],
  ["Sat", "Суббота"],
  ["Sun", "Воскресенье"],
]);

const Day = ({code, date, weekday, min, max}) => {

  const weatherState = codesData[code];
  const parseDate = moment(date, 'DD MMM YYYY', 'en').format();
  const displayDate = moment(parseDate).format('MMM D');

  return (
    <article className="Day">
      <h3 className="Day__weekday">{weekdaysRu.get(weekday)}</h3>
      <div className="Day__date">
        {displayDate}
      </div>
      <div className="Day__icon">
        <ReactSVG path={require(`../img/weather/${weatherState.icon}`)} />
      </div>
      <p className="Day__state">
        {weatherState.ru}
      </p>
      <p className="Day__max">
        <span>
          {max}&#176;
        </span>
      </p>
      <p className="Day__min">
        {min}&#176;
      </p>
    </article>
  );
};

export default Day;