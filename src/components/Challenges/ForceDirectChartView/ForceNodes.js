import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForceNode from './ForceNode';
import {selectAll as d3selectAll} from 'd3-selection';
import {drag as d3Drag} from 'd3-drag';
class ForceNodes extends Component{
    
    componentDidMount(){
        const {sim}= this.props;
        
        d3selectAll('.node').call(d3Drag().on('start', this.onDragStart).on('drag', this.onDrag).on('end', this.onDragEnd));
    }
    onDragStart=value=>{
        const {sim}= this.props;
        console.log('====================================');
        console.log(`onDragStart:${JSON.stringify(value,null,2)}`);
        console.log('====================================');
        
        // if (!d3.event.active){
        //     sim.alphaTarget(0.3).restart();
        // }
        // value.fx= value.x;
        // value.fy= value.y;
    }
    onDragEnd=(value,event)=>{
        const {sim}= this.props;
        console.log('====================================');
        console.log(`onDragEnd:${JSON.stringify(value,null,2)}\n${JSON.stringify(event,null,2)}`);
        console.log('====================================');
        // if (!d3.event.active){
        //     sim.alphaTarget(0);
        // }
        // value.fx=null;
        // value.fy=null;
    }
    nodeLeave=()=>{


    }
    nodeEnter=value=>{

    }
    onDrag=value=>{
        console.log('====================================');
        console.log(`on drag:${JSON.stringify(value,null,2)}`);
        console.log('====================================');
        // value.fx= d3.event.x;
        // value.fy= d3.event.y
    }
    render(){
        const {graphNodes}= this.props;
        const dataNodes=(
            graphNodes.map(datum=>
                <ForceNode 
                    key={`node_${datum.code}`}
                    node={datum}
                    forceNodeMouseEnter={this.nodeEnter}
                    forceNodeMouseLeave={this.nodeLeave}/>,
            )
        );
        return(
            <g>
                {dataNodes}
            </g>
        )
    }
}
ForceNodes.propTypes={
    graphNodes:PropTypes.arrayOf(PropTypes.shape({
        code:PropTypes.string,
        country:PropTypes.string,
        index:PropTypes.number,
        vx:PropTypes.number,
        vy:PropTypes.number,
        x:PropTypes.number,
        y:PropTypes.number
    }))
}
export default ForceNodes;