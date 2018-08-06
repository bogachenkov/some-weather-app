import React from 'react';

import Card from './Card';
import Week from './Week';
import WeekChart from './WeekChart';
import Weather from './Weather';

const Container = ({weather}) => {

  const {astronomy, wind, item} = weather;
  const {condition, forecast} = item;

  return (
    <section className="Container">
      <Card className="is-1" title="Сейчас в Москве">
        <Weather wind={wind.speed} astronomy={astronomy} condition={condition} />
      </Card>
      <Card className="is-2" title="График погоды на неделю">
        <WeekChart forecast={forecast.slice(0, 7)} />
      </Card>
      <Card className="is-3" title="Прогноз погоды на 10 дней">
        <Week forecast={forecast} />
      </Card>
    </section>

  );
}

export default Container;