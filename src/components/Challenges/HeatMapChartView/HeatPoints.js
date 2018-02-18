import React, { Component } from 'react';
import {scaleQuantile} from 'd3-scale';
class HeatPoints extends Component{

    heatMouseOver=value=>{
<<<<<<< HEAD
        const {heatData,svgDimensions,heatMouseOver,baseTemp}= this.props;
        const {innerWidth,innerHeight } = svgDimensions;
        heatMouseOver(value);
=======

>>>>>>> parent of a57af93... Changed tooltips for heat and scatter chart added config for github publish and configured the fonts using the gatsby google font package
    }
    heatMouseLeave=()=>{

    }
    render(){
        const {varianceData ,baseTemp,heatData,svgDimensions}= this.props;
        
        const colors = ["#5e4fa2", "#3288bd", "#66c2a5", "#abdda4", "#e6f598", "#ffffbf", "#fee08b", "#fdae61", "#f46d43", "#d53e4f", "#9e0142"];
        const colorScale= scaleQuantile().domain([varianceData.minVariance+baseTemp,varianceData.maxVariance+baseTemp]).range(colors);
        const { height,width,innerWidth,innerHeight } = svgDimensions;
        const heats=(
            heatData.map(datum=>
<<<<<<< HEAD
                <HeatPoint key={`heat_item_${datum.year}_${datum.month}`} 
                    data={{
                        year:datum.year,
                        baseYear:heatData[0].year,
                        month:datum.month,
                        width:innerWidth,
                        height:innerHeight,
                        variance:datum.variance,
                        baseTemp:baseTemp,
                        fillColor:colorScale(datum.variance+baseTemp)
                    }} 
                    heatDataMouseEnter={this.heatMouseOver} 
                    heatDataMouseLeave={this.heatMouseLeave}/>,
=======
                <rect
                    key={`heat_item_${datum.year}_${datum.month}`}
                    x={(datum.year-heatData[0].year)*innerWidth}
                    y={(datum.month-1)*innerHeight}
                     height={innerHeight}
                     width={innerWidth}
                    fill={colorScale(datum.variance+baseTemp)}
                    onMouseOver={this.heatMouseOver}
                    onMouseOut={this.heatMouseLeave}/>,
>>>>>>> parent of a57af93... Changed tooltips for heat and scatter chart added config for github publish and configured the fonts using the gatsby google font package
            )
        );
        return(
            <g>
                {heats}
            </g>
        );
    }
}
export default HeatPoints;