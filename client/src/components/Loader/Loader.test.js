import renderer from "react-test-renderer";
import Loader from "../Loader/Loader";
import React from "react";

it('Main city loader is ok.', function() {
    const dom = renderer.create(
            <Loader isMajor={true}/>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});

it('Favour city loader is ok.', function() {
    const dom = renderer.create(
            <Loader isMajor={false}/>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});
