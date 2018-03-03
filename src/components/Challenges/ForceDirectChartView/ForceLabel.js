import React, { Component } from 'react';
import {select as d3Select } from 'd3-selection';
import '../../../Assets/css/forceGraph.css';
class ForceLabel extends Component{

    componentDidMount(){
        const {node}=this.props;
        d3Select(this.nodeElement).data([node]);
    }
    render(){
        const {node}= this.props;
        return (
            <text className="label" ref={(el) => { this.nodeElement = el; }}>
                {node.country}
            </text>
        );
    }
}
export default ForceLabel;