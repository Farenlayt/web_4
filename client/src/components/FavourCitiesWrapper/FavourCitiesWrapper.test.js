import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import storage from "../../store/FakeStorage";
import FavourCitiesWrapper from "./FavourCitiesWrapper";
import React from "react";

const data = [
{
    cityData: {
        coord: {
        lon: 30.52,
        lat: 50.43
        },
        weather: [
        {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04n"
        }
        ],
        base: "stations",
        main: {
        temp: 264.93,
        pressure: 1037,
        humidity: 61,
        temp_min: 264.15,
        temp_max: 265.37
        },
        visibility: 10000,
        wind: {
        speed: 6,
        deg: 110
        },
        clouds: {
        all: 64
        },
        dt: 1574389632,
        sys: {
        type: 1,
        id: 8903,
        country: "UA",
        sunrise: 1574400167,
        sunset: 1574431525
        },
        timezone: 7200,
        id: 703448,
        name: "Kiev",
        cod: 200
    },
    cityName: 'Kiev',
    isUpdating: false,
    error: null
},
{
    cityData: {
        name: 'asdasdas'
    },
    isUpdating: false,
    error: 'The city with name asdasdas doesn\'t exist'
},
{
    isUpdating: true,
    cityData: {
        name: 'Saint Petersburg'
    }
}
];

it('Favour cities list is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <FavourCitiesWrapper cities={data}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});