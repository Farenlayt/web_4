import {configureStore} from "redux-starter-kit";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/rootReducer";

function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: [thunk],
    });
}

const store = createStore();

export default store;
