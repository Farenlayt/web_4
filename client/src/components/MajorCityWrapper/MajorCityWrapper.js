import React, {Component} from 'react';
import {connect} from "react-redux";
import MajorCityHeader from "../MajorCityHeader/MajorCityHeader";
import WeatherBody from "../WeatherBody/WeatherBody";

function mapStateToProps(state) {
    const {cityData, isUpdating, error} = state.majorCityReducer;
    return {cityData, isUpdating, error};
}

class MajorCityWrapper extends Component {
    render() {
        const {cityData, isUpdating, error} = this.props;
        return (
            <div>
                <MajorCityHeader/>
                <WeatherBody isMajor={true} isUpdating={isUpdating} error={error} cityData={cityData}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(MajorCityWrapper);
