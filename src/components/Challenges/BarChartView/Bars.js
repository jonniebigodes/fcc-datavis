import React, { PureComponent } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'

class Bars extends PureComponent {
  
    constructor(props){
        super(props);
        // this.colorScale = scaleLinear()
        //     .domain([0, this.props.maxValue])
        //     .range(['#F3E5F5', '#7B1FA2'])
        //     .interpolate(interpolateLab)
    }
    barMouseOverHandler=value=>{
        const{barMouseOver,bardata,scales}= this.props;
        const { xScale, yScale } = scales
        console.log('====================================');
        console.log(`bar mouse over handler value:${JSON.stringify(value.target.id,null,2)}`);
        console.log('====================================');
        
        const itemData= bardata.find(x=>x.dateTime===value.target.id);
        console.log('====================================');
        console.log(`bar mouse over handler itemData:${JSON.stringify(itemData,null,2)}`);
        console.log('====================================');
        barMouseOver({data:itemData,position:{x:xScale(new Date(itemData.dateTime)),y:yScale(itemData.domesticValue)}});
        
    }
    barMouseOutHandler=()=>{
        console.log('====================================');
        console.log(`bar barMouseOutHandler`);
        console.log('====================================');
        const{barMouseLeave}= this.props;
        barMouseLeave();
    }
    render(){
        const { scales, margins, bardata, svgDimensions,maxValue} = this.props
        const { xScale, yScale } = scales
        const { height,width } = svgDimensions
       
        //console.log(`data len:${bardata.length}`);
        
        const barwidth=Math.ceil(width,bardata.length);
        //const colorScale=scaleLinear().domain([0,maxValue]).range(['#F3E5F5','#7B1FA2']).interpolate(interpolateLab);
        const colorScale= scaleLinear().domain([0,maxValue]).range(['#5cdb77','#136324']).interpolate(interpolateLab);
       
        const bars = (
            bardata.map(datum =>
              <rect
                key={datum.dateTime}
                id={datum.dateTime}
                x={xScale(new Date(datum.dateTime))}
                y={yScale(datum.domesticValue)}
                height={height - margins.bottom - scales.yScale(datum.domesticValue)}
                width={barwidth}
                fill={colorScale(datum.domesticValue)}
                // onMouseOver={barMouseOver({data:datum,position:{x:xScale(new Date(datum.dateTime)),y:yScale(datum.domesticValue)}})}
                // onMouseOut={barMouseLeave()}
                onMouseOver={this.barMouseOverHandler}
                onMouseOut={this.barMouseOutHandler}
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
