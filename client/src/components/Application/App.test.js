import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Application from './Application';
import FavourCitiesHeader from "../FavourCitiesHeader/FavourCitiesHeader";
import {Provider} from "react-redux";
import MajorCityWrapper from "../MajorCityWrapper/MajorCityWrapper";
import WeatherBody from "../WeatherBody/WeatherBody";
import FavourCitiesWrapper from "../FavourCitiesWrapper/FavourCitiesWrapper";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import storage from "../../store/FakeStorage.js"


it('Renders is ok.', function() {
    const div = document.createElement('div');
    ReactDOM.render(<Application/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Empty major is ok.', function() {
    const tree = renderer.create(
        <Provider store={storage}>
            <Application/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });