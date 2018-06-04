import React, { Component } from 'react';
import './ProgressBar.css';

export default class ProgressBarController extends Component {

    constructor() {
        super();
        this.state = {

        }
    }
    stepUP = (pb, value) => {
        this.props.stepUP(pb, value);
    }

    onSelect = (event) => {
        this.setState({ drp: event.target.value });
    }
    render() {
        // debugger;
        const pb = this.props.progressbarNames;
        const buttons = this.props.buttons;
        const selectedProgress = this.state.drp || pb[0];
        return (
            <div>
                <select onChange={this.onSelect} value={this.state.drp}>
                    {pb.map((item) =>
                        <option key={item} value={item} >{item}</option>
                    )}
                </select>

                {buttons.map((item,index) =>
                    <button key={index} onClick={e => this.stepUP(selectedProgress, item)}>{item}</button>
                )}
            </div>);
    }
}