import {configureStore} from "redux-starter-kit";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/rootReducer";
import {loadState, saveState} from "./localStorage";
import throttle from 'lodash.throttle';


function createStore() {
    const persistedState = loadState();
    if (persistedState != null) {
        const state = { favourCityReducer : { cities: persistedState.map(function(city) {return {cityData: {name: city}, isLoading: true}})}};

        return configureStore({
            reducer: rootReducer,
            middleware: [thunk],
            preloadedState: state
        });
    } else {
        return configureStore({
            reducer: rootReducer,
            middleware: [thunk]
        });
    }
}

const store = createStore();

store.subscribe(throttle(function() {
    const currentState = store.getState();
    const city = currentState
        .favourCityReducer
        .cities
        .filter(function(city) {return !city.error && !city.isUpdating})
        .map(function(city) {return city.cityData.name});
    saveState(
        city
    );
}, 1000));

export default store;
