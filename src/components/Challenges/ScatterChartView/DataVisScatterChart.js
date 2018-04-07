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
    // var fastestTime = 2210;

    // const tmpChartPointsData=dataChart.map(item=>{
    //   return{
    //     Time:item.Time,
    //     Place:item.Place,
    //     Seconds:item.Seconds,
    //     Name:item.Name,
    //     Year:item.Year,
    //     Nationality:item.Nationality,
    //     Doping:item.Doping===""?"No Allegations":"Doping Allegations",
    //     URL:item.URL,
    //     behind:item.Seconds-fastestTime
    //   }
    // });

    
    const xScale=scaleLinear().domain([60*3.5,0]).range([margin.left, svgDimensions.width - margin.right]);
    const yScale= scaleLinear().domain([36,1]).range([svgDimensions.height - margin.bottom, margin.top]);
    // const xScale=scaleLinear().domain([60*3.5,0]).range([chartDimensions.margins.left, chartDimensions.svgWidth-chartDimensions.margins.right]);
    // const yScale= scaleLinear().domain([36,1]).range([chartDimensions.svgHeight - chartDimensions.margins.bottom, chartDimensions.margins.top]);
    return(
      <svg width={svgDimensions.width} height={svgDimensions.height}
        viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`} preserveAspectRatio="xMidYMid meet">>
      {/* <svg width={chartDimensions.svgWidth} height={chartDimensions.svgHeight}> */}
        <ScatterAxes scales={{xScale,yScale}} 
        margins={margin} 
        svgDimensions={svgDimensions}/>
         {/* margins={chartDimensions.margins} 
         svgDimensions={{height:chartDimensions.svgHeight, 
          width:chartDimensions.svgWidth }}/> */}
        <ScatterPoints  
          scales={{ xScale, yScale }}
          scatterData={dataChart}
          margins={margin}
          svgDimensions={svgDimensions}
          // margins={chartDimensions.margins}
          // svgDimensions={{height:chartDimensions.svgHeight, 
          //   width:chartDimensions.svgWidth }}
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
