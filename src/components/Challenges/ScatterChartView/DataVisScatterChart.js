import { scaleLinear } from 'd3-scale';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScatterAxes from './ScatterAxes';
import ScatterPoints from './ScatterPoints';
class DataVisScatterChart extends Component {

  onHoverHandler=value=>{
    const {scatterEnter}= this.props;
    scatterEnter(value);
   
  }
  onLeaveHandler=()=>{
    const {scatterLeave}= this.props;
    scatterLeave();
  
  }
  render(){
   
    const {dataChart,svgWidth}= this.props;
    const margin={
      top: 30, right: 20, bottom: 20, left: 20
    };
   
    const svgDimensions = {
      width: Math.max(svgWidth, 300),
      height: 450
    };

    const xScale=scaleLinear().domain([60*3.5,0]).range([margin.left, svgDimensions.width - margin.right]);
    const yScale= scaleLinear().domain([36,1]).range([svgDimensions.height - margin.bottom, margin.top]);
    return(
      <svg width={svgDimensions.width} height={svgDimensions.height}
        viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`} preserveAspectRatio="xMidYMid meet">
        <ScatterAxes scales={{xScale,yScale}} 
        margins={margin} 
        svgDimensions={svgDimensions}/>
        <ScatterPoints  
          scales={{ xScale, yScale }}
          scatterData={dataChart}
          margins={margin}
          svgDimensions={svgDimensions}
          PointMouseEnter={this.onHoverHandler}
          PointMouseLeave={this.onLeaveHandler}
          />
      </svg>
    );
  }
}
DataVisScatterChart.propTypes={
  dataChart:PropTypes.arrayOf(PropTypes.shape({
    Time:PropTypes.string,
    Place:PropTypes.number,
    Seconds:PropTypes.number,
    Name:PropTypes.string,
    Year:PropTypes.number,
    Nationality:PropTypes.string,
    URL:PropTypes.string,
    Doping:PropTypes.string,
    behind:PropTypes.number
  })),
  svgWidth:PropTypes.number
}
export default DataVisScatterChart
