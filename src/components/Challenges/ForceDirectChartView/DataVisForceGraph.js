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
            //.force('center',forceCenter(this.props.width/ 2,this.props.height/ 2))
            .force('collide',forceCollide())
            .force('x',forceX(this.props.width/ 2))
            .force('y',forceY(this.props.height/ 2))
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
    componentWillReceiveProps(nextProps){
        console.log('====================================');
        console.log(`current props width:${this.props.width}\nnextProps width:${nextProps.width}`);
        console.log('====================================');
        if (this.props.width!==nextProps.width){
            console.log('====================================');
            console.log(`current props width:${this.props.width}\nnextProps width:${nextProps.width}`);
            console.log('====================================');
            this.resizeSim(nextProps.width);
        }
    }
    
    setsimForce=value=>{
        
        switch (true) {
            case (value<=300):
                console.log('====================================');
                console.log(`setsimForce:${value} <=300`);
                console.log('====================================');
                return -6;
            case (value<=500):
                console.log('====================================');
                console.log(`setsimForce:${value} <=500`);
                console.log('====================================');
                return -8;
            case (value<=768):
                console.log('====================================');
                console.log(`setsimForce:${value} <=768`);
                console.log('====================================');
                return -40;
            default:
                console.log('====================================');
                console.log(`setsimForce:${value} >=768`);
                console.log('====================================');
               return -50;
        }
        console.log('====================================');
        console.log(`setsimForce:${value} nan`);
        console.log('====================================');
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