import React, { Component } from 'react';
import {scaleTime,scaleBand} from 'd3-scale';
import HeatAxes from './HeatAxes';
import HeatPoints from './HeatPoints';
class DataVisHeatChart extends Component{
    onMouseOver=value=>{

    }
    onMouseLeave=()=>{

    }
    findMin=()=>{
        const {dataChart}= this.props;
        let min= Number.POSITIVE_INFINITY;
        let high= Number.NEGATIVE_INFINITY;
        let tmp=0;
        for (const item in dataChart.monthlyVariance){
           
            tmp= dataChart.monthlyVariance[item].variance;
            if (tmp<min){
                min=tmp;
            }
            if(tmp>high){
                high=tmp;
            }
        }
       
        return {minVariance:min,maxVariance:high};
    }
    countDups=()=>{
        const {dataChart}= this.props;
        let items=[];
        let current=0;
        for (const item in dataChart.monthlyVariance){
            current= dataChart.monthlyVariance[item].year;
            
           
            let isPresent= items.find(x=>x==current);
            if (!isPresent){
                items.push(current);
            }
        }
        return items.length;
    }
    render(){
        const {dataChart}= this.props;
        
        const baseTemperature= dataChart.baseTemperature;
        const minDate=new Date(dataChart.monthlyVariance[0].year,0);
        const maxDate= new Date(dataChart.monthlyVariance[dataChart.monthlyVariance.length-1].year,0);
        let databyYears=this.countDups();
        const dataIntervals=this.findMin();
        const listOfMonts=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       
        const margin={
            top: 5,
            right: 0,
            bottom: 90,
            left: 100
        };
        let svgDimensions = {
            width:Math.max(1024,300),
            height: 500,
            innerWidth:0,
            innerHeight:0
          };
        svgDimensions.innerHeight=svgDimensions.height/listOfMonts.length;
        svgDimensions.innerWidth=svgDimensions.width/databyYears;

        const xScale= scaleTime().domain([minDate,maxDate]).range([0,svgDimensions.width-1]);
        const yScale=scaleBand()
        .domain(listOfMonts)
        .range([0,svgDimensions.height]);
        return(
            <svg width={svgDimensions.width+margin.left+margin.right} height={svgDimensions.height+margin.top+margin.bottom} className="animated bounceInLeft">
            
                <HeatAxes
                    scales={{xScale,yScale}} 
                    margins={margin}
                    svgDimensions={svgDimensions}/>
                <HeatPoints
                    varianceData={dataIntervals} 
                    svgDimensions={svgDimensions} 
                    heatData={dataChart.monthlyVariance} 
                    baseTemp={baseTemperature}
                    heatMouseOver={this.onMouseOver}
                    heatMouseleave={this.onMouseLeave}/>
            </svg>
            
        );
    }
}
export default DataVisHeatChart;