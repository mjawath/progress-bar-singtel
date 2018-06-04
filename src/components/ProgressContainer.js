import React, { Component, Fragment } from 'react';
import './ProgressBar.css';
import ProgressBar from './ProgressBar';
import ProgressBarController from './ProgressBarController';
import 'whatwg-fetch';

const pn = "#progressbar";
export default class ProgressContainer extends Component {

    constructor() {
        super();
        this.fetchDummy();
    }

    componentDidMount = () => {
        this.fetchFromEndpoint();
    }

    stepUP = (pb, value) => {
        const vale = pb.substr(pn.length, pb.length);
        const bars = this.state.bars;
        const tt = bars[vale];
        let nett = Number(tt + value);
        if (nett < 0) {
            nett = 0;
        }
        bars[vale] = nett;
        this.setState({ bars: bars });

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
                <ProgressBarController progressbarNames={listbarsNames} stepUP={this.stepUP}
                    buttons={this.state.buttons} />
            </div>
        );
    }

    fetchFromEndpoint = () => {

        fetch("http://pb-api.herokuapp.com/bars").then((response) => {
            return response.json();                    
        }).then((json)=> {         
            json.buttons.sort((a,b)=>{
                return a - b;
            });                      
            this.setState( json ); 
          }).catch((ex) => {
            console.log(ex);
        });
    }

    fetchDummy = () => {
        this.state = {
            "buttons": [
                -25,
                -10,
                10,
                25
            ],
            "bars": [
                62,
                45,
                62
            ],
            "limit": 230
        }
    }
}

