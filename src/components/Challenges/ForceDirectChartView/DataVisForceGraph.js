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
            .force('charge',forceManyBody().strength(this.setsimForce(this.props.width)))
            .force('collide',forceCollide())
            .force('x',forceX(this.props.width/ 2))
            .force('y',forceY(this.props.height/ 2))
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
    componentWillReceiveProps(nextProps){
        if (this.props.width!==nextProps.width){
            this.resizeSim(nextProps.width);
        }
    }
    
    setsimForce=value=>{
        switch (true) {
            case (value<=300):
                return -6;
            case (value<=500):
                return -8;
            case (value<=768):
                return -40;
            default:
               return -50;
        }
    }
    resizeSim=value=>{
        const simForce= this.setsimForce(value);
        
        this.forceSim.force('x',forceX(value/2))
                     .force('y',forceY(this.props.height/ 2))
                     .force('charge',forceManyBody().strength(simForce));
        this.forceSim.alpha(0.3).restart();

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
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
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
            country:PropTypes.string
        }))
    }),
    width:PropTypes.number,
    enableToolTip:PropTypes.func,
    disableToolTip:PropTypes.func
}
export default DataVisForceGraph;