import React, { Component } from 'react';
import {select as d3Select } from 'd3-selection';
import PropTypes from 'prop-types';
import './forces.css';
class ForceNode extends Component{
    componentDidMount() {
        d3Select(this.nodeElement).data([this.props.node]);
    }
    onMouseEnter=value=>{
        const {forceNodeMouseEnter}= this.props;
    }
    onMouseLeave=()=>{
        const {forceNodeMouseLeave}= this.props;
    }
    render(){
        const {node}= this.props;
        // const pattern=<defs><pattern id="flagImage" key="flagImage" patternUnits="userSpaceOnUse" width="100%" height="100%">
        //     <image width="20" height="20" x="0" y="0" className={`flag flag-${node.code}`} xlinkHref="../../../Assets/images/blank.gif"/>
        // </pattern></defs>;
        return(
            // <div className={`flag flag-${node.code}`} ref={(el) => { this.nodeElement = el; }}/>
                
            // </div>
            <circle r={6} className={`node`}
                ref={(el) => { this.nodeElement = el; }}>
                
            </circle> 
            
        );
    }
}

export default ForceNode;
ForceNode.propTypes={
    node:PropTypes.shape({
        code:PropTypes.string,
        country:PropTypes.string,
        index:PropTypes.number,
        vx:PropTypes.number,
        vy:PropTypes.number,
        x:PropTypes.number,
        y:PropTypes.number
    }),
    forceNodeMouseEnter:PropTypes.func,
    forceNodeMouseLeave:PropTypes.func
};