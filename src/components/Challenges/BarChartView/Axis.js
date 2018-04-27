import * as d3Axis from 'd3-axis';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './bar-style.module.css';
import { select as d3Select } from 'd3-selection';
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
        d3Select(this.axisElement).call(axis)
        //
    }
    render(){
        const {orient,translate}= this.props;
        return (
            <g
              className={`${styles.Axis} ${styles.Axis}-${orient}`}
              ref={(el) => { this.axisElement = el; }}
              transform={translate}
            />
          );
    }
}
Axis.propTypes={
    orient:PropTypes.string,
    scale:PropTypes.func,
    translate:PropTypes.string,
    tickSize:PropTypes.number
    
};
export default Axis;