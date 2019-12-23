import React, {Component} from 'react'
import favourCityReducer from "../../reducers/favourCityReducer";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        removeCity: function(cityName) {dispatch(favourCityReducer.actions.removeFavourCity(cityName))}
    };
}

class Error extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props);
        const cityName = this.props.cityName;
        this.props.removeCity(cityName);
    }

    render() {
        return (
            <div>
                <div>Ошибочка вышла:</div>
                <div>{this.props.error}</div>
                {!this.props.isMajor &&
                    <button className="btn" onClick={this.handleClick}>Удалить</button>
                }
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Error);
