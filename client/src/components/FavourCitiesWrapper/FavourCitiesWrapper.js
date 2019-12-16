import React, {Component} from 'react';
import {connect} from "react-redux";
import FavourCitiesHeader from "../FavourCitiesHeader/FavourCitiesHeader";
import WeatherBody from "../WeatherBody/WeatherBody";
import "./FavourCitiesWrapper.scss"

function mapStateToProps(state) {
    const {cities} = state.favourCityReducer;
    return {cities};
}

class FavourCitiesWrapper extends Component {
    render() {
        return (
            <div>
                <FavourCitiesHeader/>
                <div className="favour-city-wrapper">
                    {this.props.cities.map(function(city) {
                            return (
                                <WeatherBody isUpdating={city.isUpdating}
                                cityName={city.cityData.name}
                                              error={city.error}
                                              isMajor={false}
                                              cityData={city.cityData}
                                              isLoading={city.isLoading}
                                              key={city.cityData.name}/>
                            )
                        }
                    )
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FavourCitiesWrapper);
