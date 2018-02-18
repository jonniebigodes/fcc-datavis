import React, { Component } from 'react';
import * as d3Axis from 'd3-axis';
import {select as d3Select} from 'd3-selection';
import * as d3Time from 'd3-time';
import './Heat.css';
class HeatAxis extends Component{

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
        if (orient==='Bottom'){
            axis.ticks(d3Time.timeYear.every(10))
        }
       else{
           
       }
        d3Select(this.axisElement).call(axis)
    }
    render(){
        const{translate,orient}= this.props;
<<<<<<< HEAD
       
=======
        console.log('====================================');
        console.log(`orient:${orient}`);
        console.log('====================================');
>>>>>>> parent of a57af93... Changed tooltips for heat and scatter chart added config for github publish and configured the fonts using the gatsby google font package
        return(
            <g className="" ref={(el) => { this.axisElement = el; }} transform={translate}/>
        );
    }
}
export default HeatAxis;