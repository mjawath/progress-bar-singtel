import React, { Component, Fragment } from 'react';
import './ProgressBar.css';
import ProgressBar from './ProgressBar';
import ProgressBarController from './ProgressBarController';

const pn = "#progressbar";
export default class ProgressContainer extends Component {

    constructor() {
        super();
        this.state = {
            "buttons": [
                10,
                38,
                -13,
                -18
            ],
            "bars": [
                62,
                45,
                62
            ],
            "limit": 230
        }

    }

    stepUP = (pb, value) => {
        console.log("chh  " + value + pb);
        const vale = pb.substr(pn.length, pb.length);
        const bars = this.state.bars;
        const tt = bars[vale];
        let nett = Number(tt + value);
        if (nett < 0) {
            nett = 0;
        }
        bars[vale] = nett;
        // console.log(nett);
        this.setState({ bars: bars });
        console.log(nett)
    }
    valueChange = () => {

    }

    render() {

        const bars = this.state.bars;

        const listbarsNames = [];
        const listItems = bars.map((bar, index) => {
            listbarsNames.push(pn + index);
            return (
                <React.Fragment key={pn + index}>
                    <ProgressBar value={bar} progressbarName={pn + index}
                        limit={this.state.limit} />
                    <br />
                </React.Fragment>);
        }

        );
        return (
            <div>
                {listItems}
                <ProgressBarController progressbarNames={listbarsNames} stepUP={this.stepUP} />
            </div>
        );
    }
}

