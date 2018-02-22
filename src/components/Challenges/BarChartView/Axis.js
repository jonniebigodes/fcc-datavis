import React, { Component } from 'react';
import * as d3Axis from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import * as D3Time from 'd3-time';
import * as D3TimeFormat from 'd3-time-format';
import '../../../Assets/css/barChart.css';
class Axis extends Component{
    componentDidMount() {
        this.renderAxis()
    }
    
    componentDidUpdate() {
        this.renderAxis()
    }
    
    renderAxis(){
        const{orient,scale,tickSize}= this.props;
        const axisType = `axis${orient}`;
        
        
        // uncoment after tests
        const axis = d3Axis[axisType]()
        .scale(scale)
        .tickSize(-tickSize)
        if (orient=='Bottom'){
           // axis.tickFormat(D3TimeFormat.timeFormat("%Y-%m"))
            //axis.ticks(D3Time.timeYear,5)
        }
        else{
            axis.ticks([6])
            axis.tickPadding([12])
        }
        d3Select(this.axisElement).call(axis)
        //
    }
    render(){
        const {orient,translate}= this.props;
        return (
            <g
              className={`Axis Axis-${orient}`}
              ref={(el) => { this.axisElement = el; }}
              transform={translate}
            />
          );
    }
}
export default Axis;