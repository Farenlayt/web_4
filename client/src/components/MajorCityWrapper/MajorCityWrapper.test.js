import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import storage from "../../store/FakeStorage";
import React from "react";
import MajorCityWrapper from "./MajorCityWrapper";


it('Major wrapper is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <MajorCityWrapper cityData={{name: "Orenburg"}} isUpdating={false}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});

it('Major loading is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <MajorCityWrapper cityData={{name: "Orenburg"}} isUpdating={true}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});


it('Major error is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <MajorCityWrapper cityData={{name: "Orenburg"}} error={"Error"}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});
