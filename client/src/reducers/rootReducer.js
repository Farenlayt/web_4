import majorCityReducer from "./majorCityReducer";
import favourCityReducer from "./favourCityReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    majorCityReducer: majorCityReducer.reducer,
    favourCityReducer: favourCityReducer.reducer
});

export default rootReducer;
