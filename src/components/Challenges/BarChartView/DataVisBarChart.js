import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {scaleBand, scaleLinear,scaleTime} from 'd3-scale';
import Bars from './Bars';
import Axes from './Axes';

class DataVisBarChart extends Component {
  
  onMouseOverHandler=value=>{
    const{enableToolTip}= this.props;
    enableToolTip(value);
  }
  onMouseLeaveHandler=()=>{
    const{disableToolTip}= this.props;
    disableToolTip();
  }
  render(){
    const {dataChart}= this.props;
    const margins = { top: 30, right: 10, bottom: 40, left: 60 };
    const svgDimensions = {
      width: Math.max(820, 300),
      height: 450
    };
    const maxValue= Math.max(...dataChart.map(d=>d.domesticValue));

    const minDate= new Date(dataChart[0].dateTime);
    const maxDate= new Date(dataChart[dataChart.length-1].dateTime);

    const xScale= scaleTime().domain([minDate,maxDate]).range([margins.left, svgDimensions.width-margins.right]);
      const yScale=scaleLinear()
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);
    
    
    return(
      <svg width={svgDimensions.width} height={svgDimensions.height}>
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
        </g>
      </svg>
    );
  }
}
DataVisBarChart.propTypes={
  dataChart:PropTypes.arrayOf(PropTypes.shape({
    dateTime:PropTypes.string,
    domesticValue:PropTypes.number
  })),
  enableToolTip:PropTypes.func,
  disableToolTip:PropTypes.func
}
export default DataVisBarChart
