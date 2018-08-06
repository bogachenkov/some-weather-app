import React, { Component } from 'react';
import Chart from 'chart.js';
import moment from 'moment';

class WeekChart extends Component {

  state = {
    barType: 'bar'
  }

  componentDidMount() {
    
    this.setState({
      barType: window.innerWidth >= 768 ? 'bar' : 'horizontalBar'
    }, () => this.renderChart());

    window.addEventListener('resize', () => {
      const {barType} = this.state;
      const newType = window.innerWidth >= 768 ? 'bar' : 'horizontalBar';
      if (barType !== newType) {
        this.setState({
          barType: newType
        }, () => this.updateChart())
      }
    });
  }

  updateChart = () => {
    this.chart.destroy();
    this.renderChart();
  }

  renderChart = () => {

    const ctx = document.getElementById('WeekChartCanvas');
    const {forecast} = this.props;

    this.chart = new Chart(ctx, {
      type: this.state.barType,
      data: {
        labels: forecast.map(day => {
          const parseDate = moment(day.date, 'DD MMM YYYY', 'en').format();
          return moment(parseDate).format('D MMMM');
        }),
        datasets: [
          {
            label: 'Температура днем',
            data: forecast.map(day => day.high),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        },
          {
            label: 'Температура ночью',
            data: forecast.map(day => day.low),
            backgroundColor: [
                'rgba(83, 198, 234, .2)',
                'rgba(83, 198, 234, .2)',
                'rgba(83, 198, 234, .2)',
                'rgba(83, 198, 234, .2)',
                'rgba(83, 198, 234, .2)',
                'rgba(83, 198, 234, .2)',
                'rgba(83, 198, 234, .2)',
            ],
            borderColor: [
                'rgba(83, 198, 234, 1)',
                'rgba(83, 198, 234, 1)',
                'rgba(83, 198, 234, 1)',
                'rgba(83, 198, 234, 1)',
                'rgba(83, 198, 234, 1)',
                'rgba(83, 198, 234, 1)',
                'rgba(83, 198, 234, 1)',
            ],
            borderWidth: 1
        },
      ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }],
          xAxes: [{
            gridLines: {
                offsetGridLines: true
            }
        }]
      }
      }
    });
  }
  
  render() {
    return (
        <canvas id="WeekChartCanvas"></canvas>
    );
  }
}

export default WeekChart;