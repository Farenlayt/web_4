import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import storage from "../../store/FakeStorage";
import MajorCityHeader from "./MajorCityHeader";
import React from "react";

it('Major header is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <MajorCityHeader/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});
