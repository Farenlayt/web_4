import React, {Component} from 'react';
import {connect} from "react-redux";
import FavourCitiesHeader from "../FavourCitiesHeader/FavourCitiesHeader";
import WeatherBody from "../WeatherBody/WeatherBody";
import "./FavourCitiesWrapper.scss"
import {requestFavourCityData, updateCities} from "../../actions/reqFavourCityData";

function mapStateToProps(state) {
    const {cities} = state.favourCityReducer;
    return {cities};
}

function mapDispatchToProps(dispatch) {
    return {
        updateCities: function(){return dispatch(updateCities())}
    };
}

class FavourCitiesWrapper extends Component {
    componentDidMount() {
        this.props.updateCities();
    }
    render() {
        const used = this.props.used;
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
                                              key={city.cityData.name}
                                              used={used}/>
                            )
                        }
                    )
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavourCitiesWrapper);
