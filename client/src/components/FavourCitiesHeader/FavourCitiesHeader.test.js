import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import storage from "../../store/FakeStorage";
import FavourCitiesHeader from "./FavourCitiesHeader";
import React from "react";

it('Favour city header is ok.', function(){
    const dom = renderer.create(
        <Provider store={storage}>
            <FavourCitiesHeader/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});
