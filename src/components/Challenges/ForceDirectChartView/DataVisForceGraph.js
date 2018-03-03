import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {forceSimulation,forceLink,forceManyBody,forceCenter,forceX,forceY,forceCollide} from 'd3-force';
import {selectAll as d3selectAll} from 'd3-selection';
import ForceNodes from './ForceNodes';
import ForceLinks from './ForceLinks';
import ForceLabels from './ForceLabels';
class DataVisForceGraph extends Component{

    constructor(props) {
        super(props);
        this.forceSim=forceSimulation()
            .force('link',forceLink())
            .force('charge',forceManyBody().strength(-50))
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
        //let labelElement= d3selectAll('.label');
        this.forceSim.nodes(this.props.graphData.nodes).on('tick',()=>{
            nodeElements.attr('cx',node=>{return node.x;})
            nodeElements.attr('cy',node=>{return node.y});
            lineElement.attr('x1',line=>{return line.source.x})
            lineElement.attr('y1',line=>{return line.source.y})
            lineElement.attr('x2',line=>{return line.target.x})
            lineElement.attr('y2',line=>{return line.target.y});
            // labelElement.attr('x', label=>{return label.x+5});
            // labelElement.attr('y', label=>{return label.y+5});
        });
    }
    handleNodeEnter=value=>{
        const{enableToolTip}= this.props;
        enableToolTip(value);
    }
    handleNodeLeave=()=>{
        const{disableToolTip}= this.props;
        disableToolTip();
    }
    render(){
        const {graphData,width,height}=this.props;
        return(
            <svg width={width} height={height}>
                <ForceNodes graphNodes={graphData.nodes} 
                    sim={this.forceSim} 
                    graphNodeEnter={this.handleNodeEnter} 
                    graphNodeLeave={this.handleNodeLeave}/>
                <ForceLinks graphLinks={graphData.links}/>
            </svg>
            
        )
    }
}
DataVisForceGraph.propTypes={
    graphData:PropTypes.shape({
        links:PropTypes.arrayOf(PropTypes.object),
        nodes:PropTypes.arrayOf(PropTypes.shape({
            code:PropTypes.string,
            country:PropTypes.string,
            index:PropTypes.number,
            vx:PropTypes.number,
            vy:PropTypes.number,
            x:PropTypes.number,
            y:PropTypes.number
        }))
    }),
    width:PropTypes.number,
    height:PropTypes.number,
    enableToolTip:PropTypes.func,
    disableToolTip:PropTypes.func
}
export default DataVisForceGraph;