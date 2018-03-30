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
        d3Select(this.refs.worldmap).call(d3Zoom().scaleExtent([.5,10]).on('zoom',this.onZoomHandler));
    }
    /* componentDidUpdate(){
        
        const {zoomInit}= this.state;
        if(!zoomInit){
            const mapSvg=d3Select(this.refs.map);
            mapSvg.call(this.globeZoom);
            this.setState({zoomInit:true});
        }
       
    }
 */
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
    // getTransform=()=>{
    //     const {transform}= this.state;
    //     console.log('====================================');
    //     console.log(`getTransform`);
    //     console.log('====================================');
    //     if(transform){
    //         const {x,y,k}= transform;
    //         return `translate(${x}, ${y}) scale(${k})`;
    //     }
    //     else{
    //         return null;
    //     }
    // }
    render(){
        const {globeData,meteorsInfo,svgWidth,svgHeight}= this.props;
        const {transform}= this.state;
       
        // const svgDimensions={
        //     width:820,
        //     height:550
        // }
        return (
            // <svg width={svgDimensions.width} height={svgDimensions.height} viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}>
            //     <WorldMap width={svgDimensions.width} 
            <svg width={svgWidth} height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} ref="worldmap" preserveAspectRatio="xMidYMid meet">
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
    //globeData:PropTypes.obj
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