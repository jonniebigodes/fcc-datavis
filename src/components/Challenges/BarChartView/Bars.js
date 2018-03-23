import React, { PureComponent } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import GdPBar from './GdPBar';
class Bars extends PureComponent {
  
    constructor(props){
        super(props);
    }
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
        const barwidth=Math.ceil(width,bardata.length);
        const colorScale= scaleLinear().domain([0,maxValue]).range(['#5cdb77','#136324']).interpolate(interpolateLab);
       
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
export default Bars
