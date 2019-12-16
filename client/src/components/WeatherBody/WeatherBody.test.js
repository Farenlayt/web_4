import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import storage from "../../store/FakeStorage";
import WeatherBody from "./WeatherBody";
import React from "react";

const data =
{
    coord: {
        lon: 55.1,
        lat: 51.77
    },
    weather: [
        {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
        }
    ],
    base: 'stations',
    main: {
        temp: 255.15,
        pressure: 1042,
        humidity: 77,
        temp_min: 255.15,
        temp_max: 255.15
    },
    visibility: 10000,
    wind: {
        speed: 3,
        deg: 280
    },
    clouds: {
        all: 0
    },
    dt: 1574389959,
    sys: {
        type: 1,
        id: 9044,
        country: 'RU',
        sunrise: 1574394579,
        sunset: 1574425312
    },
    timezone: 18000,
    id: 515003,
    name: 'Orenburg',
    cod: 200
};

it('Major city with data is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <WeatherBody cityData={data} isMain/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});

it('Favour city with data is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <WeatherBody cityData={data} isMain={false}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});

it('Error on favour is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <WeatherBody error={"There is no such city."} cityData={name="sadasdsad"} isMain={false}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});

it('Error on major city is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <WeatherBody error={"There is no such city."} cityData={name="sadasdsad"} isMain/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});


it('Major loader is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <WeatherBody isLoading cityData={name="sadasdsad"} isMain/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});


it('Favour loader is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <WeatherBody isLoading cityData={name="sadasdsad"} isMain={false}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});

it('Major loader without data is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <WeatherBody cityName={"sadasdsad"} isMain/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});


it('Favour city without data is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <WeatherBody cityName={"sadasdsad"} isMain={false}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});