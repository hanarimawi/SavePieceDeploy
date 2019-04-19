import React, { Component } from 'react';
import '../style/TimeInterval.css';

class TimeInterval extends Component {
    constructor(props){
        super(props);
        this.state = {
            start: 0,
            end: 0
        }
    }

    render() {
        return (
        <span>
            <input onChange={(e) =>this.props.handlestart(e.target.value)} type="text" required></input>
            <span className="ti-text">TO</span>
            <input onChange={(e) =>this.props.handleend(e.target.value)} type="text" required></input>
        </span>
        );
    }
}

export default TimeInterval;
