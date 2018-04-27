import { interpolateLab } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import GdPBar from './GdPBar';
class Bars extends PureComponent {
    barMouseOverHandler=value=>{
        const{barMouseOver}= this.props;
        barMouseOver(value);
        
    }
    barMouseOutHandler=()=>{
      
        const{barMouseLeave}= this.props;
        barMouseLeave();
    }
    render(){
        const { scales, margins, bardata, svgDimensions,maxValue} = this.props
        const { xScale, yScale } = scales
        const { height,width } = svgDimensions
        const barwidth=Math.ceil(width/bardata.length);
        const colorScale= scaleLinear().domain([0,maxValue]).range(['#d2c9aa','#c0b283']).interpolate(interpolateLab);
        const bars = (
            bardata.map(datum =>
              <GdPBar key={`gdpbar_${datum.dateTime}`}
                gdpnode={
                    {
                        x:xScale(new Date(datum.dateTime)),
                        y:yScale(Number(datum.domesticValue)),
                        height:height - margins.bottom - scales.yScale(Number(datum.domesticValue)),
                        width:barwidth,
                        fill:colorScale(Number(datum.domesticValue)),
                        gdpdata:datum,

                    }}
                    gdpEnter={this.barMouseOverHandler}
                    gdpLeave={this.barMouseOutHandler}
              />,
            )
          )
        return (
            <g>
                {bars}
            </g>
        );
    }
}
Bars.propTypes={
    scales:PropTypes.shape({
        xScale:PropTypes.func,
        yScale:PropTypes.func
    }),
    margins:PropTypes.shape({
        top: PropTypes.number, 
        right: PropTypes.number, 
        bottom: PropTypes.number, 
        left: PropTypes.number 
    }),
    bardata:PropTypes.arrayOf(PropTypes.shape({
        dateTime:PropTypes.string,
        domesticValue:PropTypes.number
    })),
    maxValue:PropTypes.number,
    svgDimensions:PropTypes.shape({
        width:PropTypes.number,
        height:PropTypes.number
    }),
    barMouseOver:PropTypes.func,
    barMouseLeave:PropTypes.func
};
export default Bars
