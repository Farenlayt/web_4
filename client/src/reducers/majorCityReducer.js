import {createSlice} from "redux-starter-kit";

const majorCityReducer = createSlice({
        name: 'majorCity',
        initialState: {
            isUpdating: false,
            error: null,
            cityData: null
        },
        reducers: {
            requestMajorData: function(state) {
                return Object.assign({}, state, {isUpdating: true, error: null});
            },
            receiveMajorCitySuccess: function(state, action) {
                return Object.assign({}, state, {isUpdating: false, cityData: action.payload, error: null});
            },
            receiveMajorCityFailure: function(state, action) {
                return Object.assign({}, state,{isUpdating: false, cityName: action.cityName, error: action.payload});
            }
        }
    }
);

export default majorCityReducer;
