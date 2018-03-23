import React, { Component } from 'react'
import {scaleLinear} from 'd3-scale';
import * as d3TimeFormat from 'd3-time-format';
import PropTypes from 'prop-types';
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
   
    const {dataChart}= this.props;
    const margin={
      top: 30, right: 20, bottom: 20, left: 20
    };
   
    const svgDimensions = {
      width: Math.max(800, 300),
      height: 420
    };
    var fastestTime = 2210;
    let tmpChartPointsData=[];

    dataChart.forEach(element => {
      tmpChartPointsData.push({
        Time:element.Time,
        Place:element.Place,
        Seconds:element.Seconds,
        Name:element.Name,
        Year:element.Year,
        Nationality:element.Nationality,
        Doping:element.Doping===""?"No Allegations":"Doping Allegations",
        URL:element.URL,
        behind:element.Seconds-fastestTime
      });
    });
   
    const xScale=scaleLinear().domain([60*3.5,0]).range([margin.left, svgDimensions.width - margin.right]);
    const yScale= scaleLinear().domain([36,1]).range([svgDimensions.height - margin.bottom, margin.top]);
    return(
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <ScatterAxes scales={{xScale,yScale}} margins={margin} svgDimensions={svgDimensions}/>
        <ScatterPoints  
          scales={{ xScale, yScale }}
          margins={margin}
          scatterData={tmpChartPointsData}
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
    Time:PropTypes.number,
    Place:PropTypes.number,
    Seconds:PropTypes.number,
    Name:PropTypes.string,
    Year:PropTypes.number,
    Nationality:PropTypes.string,
    URL:PropTypes.string,
    Doping:PropTypes.string
  }))
}
export default DataVisScatterChart
