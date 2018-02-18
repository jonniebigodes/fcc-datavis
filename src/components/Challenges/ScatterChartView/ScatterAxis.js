import React, { Component } from 'react';
import * as d3Axis from 'd3-axis';
import {select as d3Select} from 'd3-selection';
import * as d3TimeFormat from 'd3-time-format';
import * as d3Time from 'd3-time';
//import * as d3Time from 'd3-time';
class ScatterAxis extends Component{
    componentDidMount(){
        this.renderAxis();
    }
    componentDidUpdate(){
        this.renderAxis();
    }
    renderAxis(){
        const {orient,scale}= this.props;
        const axisType=`axis${orient}`;
        const axis= d3Axis[axisType]()
        .scale(scale)
        .ticks(orient==='Bottom'?[6]:[8])
        d3Select(this.axisElement).call(axis)
    }
    render(){
        const{translate,orient}= this.props;
        return(
            <g className="" ref={(el) => { this.axisElement = el; }} transform={translate}/>
        );
    }
}
export default ScatterAxis;