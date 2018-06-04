import React, { Component } from 'react';
import './ProgressBar.css';

export default class ProgressBar extends Component {

    constructor() {
        super(); 
    }     

    render() {

        const widthPercentage = this.props.value / this.props.limit * 100 ;
        const colorBar = widthPercentage > 100 ? 'red':'#25F';
        const barStatus = {
            width: widthPercentage+'%',
            height: '100%',
            backgroundColor: colorBar
          };
          const alignment = {float: 'left'};

          
        return <div>
            <div className="progressBar">
                <div style={barStatus}><span style={alignment}>{this.props.value}</span></div>
            </div>
        </div>;

    }




}