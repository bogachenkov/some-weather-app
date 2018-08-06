import React, { Component } from 'react';
import Day from './Day';
import ReactSVG from 'react-svg';

class Week extends Component {

  state = {
    fullWidth: 0,
    frameWidth: 0,
    currentPosition: 0
  }

  componentWillMount() {
    this.weekRef = React.createRef();
    this.weekWrapRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      fullWidth: this.weekRef.current.scrollWidth,
      frameWidth: this.weekWrapRef.current.clientWidth
    });
    window.addEventListener('resize', () => {
      const {frameWidth, fullWidth} = this.state;
      setTimeout(() => {
        if (this.weekWrapRef.current.clientWidth !== frameWidth || this.weekRef.current.scrollWidth !== fullWidth) {
          this.setState({
            frameWidth: this.weekWrapRef.current.clientWidth,
            fullWidth: this.weekRef.current.scrollWidth,
            currentPosition: 0
          }, () => this.weekRef.current.style.transform = `translate(-${this.state.currentPosition}px, 0px)`)
        }
      },500)
    })
  }
  
  
  scrollFoward = () => {
    this.setState({
      currentPosition: this.state.currentPosition + this.state.frameWidth
    }, () => this.weekRef.current.style.transform = `translate(-${this.state.currentPosition}px, 0px)`)
  }

  scrollBack = () => {
    this.setState({
      currentPosition: this.state.currentPosition - this.state.frameWidth
    }, () => this.weekRef.current.style.transform = `translate(-${this.state.currentPosition}px, 0px)`)
  }

  render() {

    const {forecast} = this.props;
    const {fullWidth, frameWidth, currentPosition} = this.state;

    return (
      <section className='Week__wrap' ref={this.weekWrapRef}>
        <div className='Week' ref={this.weekRef}>
          {forecast.map(day => (
            <Day key={day.date} date={day.date} code={day.code} weekday={day.day} max={day.high} min={day.low} />
          ))}
        </div>
        <div className="Week__controls">
          <button onClick={this.scrollBack} disabled={(currentPosition <= 0)}><ReactSVG path={require(`../img/weather/compass-west.svg`)} /></button>
          <button onClick={this.scrollFoward} disabled={(currentPosition >= (fullWidth - frameWidth))}><ReactSVG path={require(`../img/weather/compass-east.svg`)} /></button>
        </div>
      </section>
    );
  }
}

export default Week;

//
//{isScrolled && <ReactSVG onClick={this.scrollToStart} path={require(`../img/weather/compass-west.svg`)} />}
