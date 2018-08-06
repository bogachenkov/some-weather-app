import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import codesData from '../data/codes';
class Weather extends Component {

  render() {

    const {wind, astronomy, condition} = this.props;

    const weatherState = codesData[condition.code];

    return (
      <div className="Weather">
        <header>
          <div className="Weather__now">
            <ReactSVG path={require(`../img/weather/${weatherState.icon}`)} />
            <p className="Weather__degrees">
              {condition.temp} <span>&#176;C</span>
            </p>
          </div>
          <p className="Weather__state">
            {weatherState.ru}
          </p>
        </header>
        
        <div className="Weather__data">
          <div className="Weather__item">  
            <div className="Weather__item-type">
              <ReactSVG path={require("../img/weather/wind.svg")} />  
                Ветер
            </div>
              <p>
                <strong>
                  {Math.round(wind * 1000 / 3600)}
                </strong> м/с
              </p>
          </div>
          <div className="Weather__item">  
            <div className="Weather__item-type">
              <ReactSVG path={require("../img/weather/sun-rise.svg")} />  
                Восход
            </div>
            <p><strong>{astronomy.sunrise}</strong></p>
          </div>
          <div className="Weather__item">  
            <div className="Weather__item-type">
              <ReactSVG path={require("../img/weather/sun-set.svg")} />  
                Закат
            </div>
            <p><strong>{astronomy.sunset}</strong></p>
          </div>
        </div>

      </div>
    );
  }
}

export default Weather;