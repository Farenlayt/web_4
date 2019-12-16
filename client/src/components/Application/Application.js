import React, {Component} from 'react';
import './Application.scss';
import {Provider} from "react-redux";
import store from "../../store";
import MajorCityWrapper from "../MajorCityWrapper/MajorCityWrapper";
import FavourCitiesWrapper from "../FavourCitiesWrapper/FavourCitiesWrapper";


class Application extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="Application">
                    <MajorCityWrapper/>
                    <FavourCitiesWrapper/>
                </div>
            </Provider>
        );
    }
}

export default Application;
