import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Weather.css'
import WeatherForecast from './WeatherForecast'

class Weather extends Component{

    state = {
        zipcode: '',
    }

    handleChange = (ev) => {
        this.setState({ zipcode: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/weather/${this.state.zipcode}`)
        this.setState({ zipcode: '' })
    }
    
    render () {
        return (
            <div className="Weather">
                <img 
                    src="https://media.dragstone.com/content/icon-openweathermap-1.png"
                    alt="Open Weather Map"
                    className="logo"
                />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            value={this.state.zipcode}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Find Today's Weather by Zip Code</button>
                    </div>
                </form>
                <Route path="/weather/:zipcode" component={WeatherForecast} />
                <Route exact path="/weather" render={() => <h3>Please enter in a zipcode to see today's weather</h3>} />
            </div>
        )
    }
}

export default Weather