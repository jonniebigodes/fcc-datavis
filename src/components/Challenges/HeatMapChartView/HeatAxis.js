import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3Axis from 'd3-axis';
import {select as d3Select} from 'd3-selection';
import * as d3Time from 'd3-time';
//import '../../../Assets/css/heatGraph.css';
import styles from './heat-style.module.css';
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
       
        return(
            <g className={`${styles.Axis} ${styles.Axis}-${orient}`} ref={(el) => { this.axisElement = el; }} transform={translate}/>
        );
    }
}
HeatAxis.propTypes={
    orient:PropTypes.string,
    scale:PropTypes.func,
    translate:PropTypes.string,
    tickSize:PropTypes.number
};
export default HeatAxis;