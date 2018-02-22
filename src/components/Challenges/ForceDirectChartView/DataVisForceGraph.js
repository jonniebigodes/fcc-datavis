import React, { Component } from 'react';
import {forceSimulation,forceLink,forceManyBody,forceCenter,forceX,forceY,forceCollide} from 'd3-force';
import {selectAll as d3selectAll} from 'd3-selection';
import ForceNodes from './ForceNodes';
import ForceLinks from './ForceLinks';

class DataVisForceGraph extends Component{

    constructor(props) {
        super(props);
        this.forceSim=forceSimulation()
            .force('link',forceLink())
            .force('charge',forceManyBody())
            .force('center',forceCenter(this.props.width/ 2,this.props.height/ 2))
            .force('collide',forceCollide())
            .force('x',forceX(0))
            .force('y',forceY(0))
            .nodes(this.props.graphData.nodes);
            this.forceSim.force('link').links(this.props.graphData.links);
    }
    componentDidMount(){
        let nodeElements=d3selectAll('.node');
        let lineElement= d3selectAll('.link');
        this.forceSim.nodes(this.props.graphData.nodes).on('tick',()=>{
            nodeElements.attr('cx',node=>{return node.x;})
            nodeElements.attr('cy',node=>{return node.y});
            lineElement.attr('x1',line=>{return line.source.x})
            lineElement.attr('y1',line=>{return line.source.y})
            lineElement.attr('x2',line=>{return line.target.x})
            lineElement.attr('y2',line=>{return line.target.y});
        });
    }
    render(){
        const {graphData,width,height}=this.props;
        return(
            
            <svg width={width} height={height}>
               <ForceNodes graphNodes={graphData.nodes} sim={this.forceSim}/>
               <ForceLinks graphLinks={graphData.links}/>
            </svg>
        )
    }
}
export default DataVisForceGraph;