import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Spinner from './components/Spinner';
import ErrorShow from './components/Error';


class App extends Component {

  state = {
    isLoading: true,
    weather: null,
    error: null
  }

  componentDidMount() {
    fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D2122265%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
      .then(response => response.json())
      .then(weather => {
        this.setState({
          weather: weather.query.results.channel,
        }, () => this.setState({isLoading: false}))
      })
      .catch(err => {
        this.setState({
          error: err.stack,
          isLoading: false
        })
      });
  }

  closeErrorMessage = () => {
    this.setState({error: null});
  }


  render() {

    const {isLoading, weather, error} = this.state;

    return (
      <div className="App">
        <Header />
        { isLoading && <Spinner /> }
        { !isLoading && weather && <Container weather={weather} />}
        { !isLoading && error && <ErrorShow error={error} /> }
      </div>
    );
  }
}

export default App;
