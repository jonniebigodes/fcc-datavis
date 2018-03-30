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
   
    const {dataChart,chartDimensions}= this.props;
    // const margin={
    //   top: 30, right: 20, bottom: 20, left: 20
    // };
   
    // const svgDimensions = {
    //   width: Math.max(800, 300),
    //   height: 420
    // };
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
   
    //const xScale=scaleLinear().domain([60*3.5,0]).range([margin.left, svgDimensions.width - margin.right]);
    //const yScale= scaleLinear().domain([36,1]).range([svgDimensions.height - margin.bottom, margin.top]);
    const xScale=scaleLinear().domain([60*3.5,0]).range([chartDimensions.margins.left, chartDimensions.svgWidth-chartDimensions.margins.right]);
    const yScale= scaleLinear().domain([36,1]).range([chartDimensions.svgHeight - chartDimensions.margins.bottom, chartDimensions.margins.top]);
    return(
      // <svg width={svgDimensions.width} height={svgDimensions.height}>
      <svg width={chartDimensions.svgWidth} height={chartDimensions.svgHeight}>
        <ScatterAxes scales={{xScale,yScale}} 
        // margins={margin} 
        // svgDimensions={svgDimensions}/>
        margins={chartDimensions.margins} 
        svgDimensions={{height:chartDimensions.svgHeight, 
          width:chartDimensions.svgWidth }}/>
        <ScatterPoints  
          scales={{ xScale, yScale }}
          scatterData={tmpChartPointsData}
          // margins={margin}
          // svgDimensions={svgDimensions}
          margins={chartDimensions.margins}
          svgDimensions={{height:chartDimensions.svgHeight, 
            width:chartDimensions.svgWidth }}
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
  })),
  chartDimensions:PropTypes.shape({
    svgWidth:PropTypes.number,
    svgHeight:PropTypes.number,
    margins:PropTypes.shape({
      top: PropTypes.number, 
      right: PropTypes.number, 
      bottom: PropTypes.number, 
      left: PropTypes.number
    })
  }),
}
export default DataVisScatterChart
