import React, { Component } from 'react';
import {select as d3Select } from 'd3-selection';
import PropTypes from 'prop-types';
import './forceGraph.css';
class ForceNode extends Component{
    componentDidMount() {
        const {node}= this.props;
        d3Select(this.nodeElement).data([node]);
        
    }
    onMouseEnter=value=>{
        const {forceNodeMouseEnter,node}= this.props;
        forceNodeMouseEnter(node.code);
    }
    onMouseLeave=()=>{
        const {forceNodeMouseLeave}= this.props;
        forceNodeMouseLeave();
    }
    render(){
        const {node}= this.props;
        return(
             <circle r={6} className={`node`}
                ref={(el) => { this.nodeElement = el; }} 
                    onMouseOver={this.onMouseEnter}
                    onMouseOut={this.onMouseLeave}>
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