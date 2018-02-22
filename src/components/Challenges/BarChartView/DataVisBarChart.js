import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {scaleBand, scaleLinear,scaleTime} from 'd3-scale';
import Bars from './Bars';
import Axes from './Axes';
import BarChartToolTip from './BarToolTip';
class DataVisBarChart extends Component {
  constructor(){
    super();
    this.state={
      isTooltipActive:false,
      tooltipData:{}
    }
  }
  onMouseOverHandler=value=>{
    this.setState(prevState=>({
      isTooltipActive:true,
      tooltipData:value
    }));
  }
  onMouseLeaveHandler=()=>{
    this.setState(prevState=>({
      isTooltipActive:false,
      tooltipData:{}
    }));
  }
  render(){
    const {dataChart}= this.props;
    const{isTooltipActive,tooltipData}= this.state;
    const margins = { top: 30, right: 10, bottom: 40, left: 60 };
    const svgDimensions = {
      width: Math.max(1024, 300),
      height: 500
    };
    const maxValue= Math.max(...dataChart.map(d=>d.domesticValue));

    const minDate= new Date(dataChart[0].dateTime);
    const maxDate= new Date(dataChart[dataChart.length-1].dateTime);

    const xScale= scaleTime().domain([minDate,maxDate]).range([margins.left, svgDimensions.width-margins.right]);
      const yScale=scaleLinear()
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);
    
    
    return(
      <svg width={svgDimensions.width} height={svgDimensions.height} className="animated lightSpeedIn">
        <g>
        
          <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}
          />
          <Bars
            scales={{ xScale, yScale }}
            margins={margins}
            bardata={dataChart}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
            barMouseOver={this.onMouseOverHandler}
            barMouseLeave={this.onMouseLeaveHandler}
          />
          <BarChartToolTip display={isTooltipActive} position={tooltipData.position} data={tooltipData.data}/>
        </g>
      </svg>
    );
  }
}
DataVisBarChart.propTypes={
  //dataChart:PropTypes.
}
export default DataVisBarChart
