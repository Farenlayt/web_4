import React, {Component} from 'react';
import "./Loader.scss"

class Loader extends Component {
    render() {
        return (
            <div className={this.props.isMajor ? "major-loader" : "favour-loader"}>Подождите, данные загружаются</div>
        )
    };
}

export default Loader;
