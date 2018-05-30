import React, { Component } from 'react'


class WeatherForecast extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weather: '',
        }

        this.fetchWeatherData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
          this.fetchWeatherData(nextProps)
        }
    }

    fetchWeatherData = (props) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${props.match.params.zipcode},us&APPID=c561e0162b310eb53aedd5b957d33d21`)
          .then(response => response.json())
          .then(weather => this.setState({ weather }))
          .catch((() => console.log('Well, shucks.')))
    }

    render () {
        const { weather } = this.state
        console.log(this.state)
        return (
            <div className="WeatherForecast">
                <h2>{weather.name}</h2>
                <h3>hi:</h3>
            </div>
        )
    }
}

export default WeatherForecast