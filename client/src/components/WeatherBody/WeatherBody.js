import React, {Component} from 'react';
import favourCityReducer from "../../reducers/favourCityReducer";
import majorCityReducer from "../../reducers/majorCityReducer"
import {requestfavourCityData} from "../../actions/reqFavourCityData";
import {connect} from "react-redux";
import './WeatherBody.scss'
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

function mapDispatchToProps(dispatch) {
    return {
        removeCity: function(cityName) {dispatch(favourCityReducer.actions.removefavourCity(cityName))},
        updateCity:  function() {dispatch(majorCityReducer.actions.requestMajorData())},
        addCity: function(cityName) {dispatch(requestfavourCityData(cityName))}
    };
}

class WeatherBody extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const cityName = this.props.cityData.name;
        this.props.removeCity(cityName);
    }

    componentDidMount() {
        if (this.props.isMajor) {
            this.props.updateCity();
        }
        else {
            this.props.addCity(this.props.cityName || this.props.cityData.name);
        }
    }

    render() {
        const {cityData, isUpdating, isMajor, cityName, error, isLoading} = this.props;

        if (error) {
            return (
                <Error error={error}
                              isMajor={isMajor}
                              cityName={cityName}
                              key={cityName}/>
            )
        }
        if (isUpdating || !cityData) {
            return (
                <Loader isMajor={isMajor} key={this.props.name}/>
            )
        }
        if (isLoading) {
            return (
                <div key={this.props.name}>

                </div>
            )
        }
            const {lon, lat} = cityData.coord;
            const {main, icon,} = cityData.weather[0];
            const {temp, pressure, humidity} = cityData.main;
            const {speed, deg} = cityData.wind;

            return (
                <div className={this.props.isMajor ? "major-grid-wrapper" : "favour-grid-wrapper"}>
                    {this.props.isMajor &&
                    <div className="major-weather">
                        <h2 className="major-city-name">{cityData.name}</h2>
                        <div >
                            <div className="elem-wrapper">
                                <img className="city-picture"
                                     crossOrigin="anonymous"
                                     src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                     alt={'weather'}/>
                            </div>
                        </div>
                        <div>
                            <h3>
                                <span className="city-temperature">{parseInt(temp)-273}°C</span>
                            </h3>
                        </div>
                    </div>}
                    {!this.props.isMajor &&
                    <div className="favour-weather">
                        <div className="favour-city-name">
                            {cityData.name}
                        </div>
                        <div className="favour-city-temprature">
                            {parseInt(temp)-273}°C
                        </div>
                        <div>
                            <img className="city-picture"
                                 crossOrigin="anonymous"
                                 src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                 alt={'weather'}/>
                        </div>
                        <div className="button-holder">
                            <button className="btn" onClick={this.handleClick}>Удалить</button>
                        </div>
                    </div>
                    }
                    <p className="add-data-element">
                        Ветер: &nbsp;  <span>{speed}&nbsp; м/с, {deg}°</span>
                    </p>
                    <p className="add-data-element">
                        Погода: &nbsp; <span>{main}</span>
                    </p>
                    <p className="add-data-element">
                        Влажность: &nbsp;<span>{humidity}&nbsp;%</span>
                    </p>
                    <p className="add-data-element">
                        Давление:&nbsp; <span>{pressure}&nbsp;hpa</span>
                    </p>
                    <p className="add-data-element">
                        Координаты: &nbsp;<span>
                            [{lon}&nbsp;, {lat}]</span>
                    </p>
                </div>
            );
    }
}

export default connect(null, mapDispatchToProps)(WeatherBody);
