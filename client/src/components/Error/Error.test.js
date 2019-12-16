import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import storage from "../../store/FakeStorage";
import Error from "./Error";
import React from "react";

it('Error message is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <Error error={"Ошибочка вышла"} isMain={false} />
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});

it('Error message in major is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <Error error={"Ошибочка вышла"} isMain/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});