import React, {Component} from 'react';
import {connect} from "react-redux";
import {requestFavourCityData} from "../../actions/reqFavourCityData";
import "./FavourCitiesHeader.scss"

function mapDispatchToProps(dispatch) {
    return {
        addCity: function(cityName){return dispatch(requestFavourCityData({cityName: cityName, isBody: false}))}
    };
}

class ConnectedFavourCitiesHeader extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const cityName = event.target.elements['search-input'].value;
        this.props.addCity(cityName);
    }

    render() {
        return (
            <div className="favour-header">
                <form onSubmit={this.handleSubmit}>
                    <div className="favour-header-text">Избранное</div>
                    <div>
                        <input className="input-field" id="search-input" type="text" placeholder="Добавить новый город"/>
                        <input className="btn" type="submit" value="Добавить новый город"/>
                    </div>
                </form>
            </div>
        );
    }
}

const FavourCitiesHeader = connect(
    null,
    mapDispatchToProps
)(ConnectedFavourCitiesHeader);

export default FavourCitiesHeader;
