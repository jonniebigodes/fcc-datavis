import React,{Component} from 'react';
import {zoom as d3Zoom} from 'd3-zoom';
import {select as d3Select,event} from 'd3-selection';
import PropTypes from 'prop-types'; 
import WorldMap from './WorldMap';

class GlobeViewChart extends Component{
    constructor(props){
        super(props);
        this.state={
            transform:null,
            //zoomInit:false
        };
        // this.globeZoom=d3Zoom().scaleExtent([.5,10])
        //     .on('zoom', this.onZoomHandler);
    }
    componentDidMount(){
       // d3Select(this.refs.worldmap).call(d3Zoom().scaleExtent([.5,10]).on('zoom',this.onZoomHandler));
       d3Select(this.worldmap).call(d3Zoom().scaleExtent([.5,10]).on('zoom',this.onZoomHandler));
    }
    onZoomHandler=()=>{
        // console.log('====================================');
        // console.log(`onZoomHandler :${JSON.stringify(event)}`);
        // console.log('====================================');
        if (event.type==="zoom"){
            this.setState({transform:event.transform});
        }
        //
    }
    showToolTipInfo=value=>{
        const {showToolTip}= this.props;
        showToolTip(value);
    }
    hideToolTipInfo=()=>{
        const {hideToolTip}= this.props;
        hideToolTip();
    }
    
    render(){
        const {globeData,meteorsInfo,svgWidth,svgHeight}= this.props;
        const {transform}= this.state;
        return (
            // <svg width={svgDimensions.width} height={svgDimensions.height} viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}>
            //     <WorldMap width={svgDimensions.width}  ref="worldmap"
            <svg width={svgWidth} height={svgHeight}
                ref={(el)=>{this.worldmap=el;}}
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}  preserveAspectRatio="xMidYMid meet">
                <g transform={transform!==null?`translate(${transform.x}, ${transform.y}) scale(${transform.k})`:null}>
                    <WorldMap width={svgWidth} 
                        height={svgHeight}
                        world={globeData} meteorfall={meteorsInfo}
                        pointEnter={this.showToolTipInfo}
                        pointExit={this.hideToolTipInfo}
                        />
                </g>
            </svg>
        )
    }
}
GlobeViewChart.propTypes={
    svgWidth:PropTypes.number,
    svgHeight:PropTypes.number,
    globeData:PropTypes.arrayOf(PropTypes.shape({
        dpath:PropTypes.string,
        fillInfo:PropTypes.string
    })),
    meteorsInfo:PropTypes.arrayOf(PropTypes.shape({
        date:PropTypes.string,
        fillOp:PropTypes.number,
        latitude:PropTypes.number,
        longitude:PropTypes.number,
        mass:PropTypes.number,
        name:PropTypes.string,
        radius:PropTypes.number,
        meteorClass:PropTypes.string
    }))
}
export default GlobeViewChart;