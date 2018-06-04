import React, { Component } from 'react';
import './ProgressBar.css';

export default class ProgressBar extends Component {

    constructor() {
        super();
    }



    render() {

        const wid = this.props.value / this.props.limit * 100;
        console.log(wid);
        const colorBar = wid > 100 ? 'red' : '#25F';
        const barStatus = {
            width: wid + '%',
            height: '100%',
            backgroundColor: colorBar
        };
        const textAlign = { float: 'left' };


        return <div>
            <div className="progressBar">
                <div style={barStatus}><span style={textAlign}>{wid}</span></div>
            </div>
        </div>;

    }




}