import React, {Component} from 'react';
import {requestMajorData} from "../../actions/reqMajorCityData";
import {connect} from "react-redux";
import "./MajorCityHeader.scss"

function mapDispatchToProps(dispatch) {
    return {
        updateCity:  function() {dispatch(requestMajorData())}
    };
}
class MajorCityHeader extends Component {

    componentDidMount() {
        this.props.updateCity();
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateCity();
    }

    render() {
        return (
            <div className="major-header">
                <label>Погода здесь</label>
                <form onSubmit={this.handleSubmit}>
                    <input className="btn" type="submit" value="Обновить геолокацию"/>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(MajorCityHeader);
