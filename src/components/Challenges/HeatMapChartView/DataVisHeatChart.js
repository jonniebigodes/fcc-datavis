import React, { Component } from 'react';
import {scaleTime,scaleBand} from 'd3-scale';
import PropTypes from 'prop-types';
import HeatAxes from './HeatAxes';
import HeatPoints from './HeatPoints';
import {dataVisConstant} from '../../../Utils/Constants';
class DataVisHeatChart extends Component{
    onMouseOver=value=>{
        const{showToolTip}= this.props;
       
        showToolTip(value);
    }
    onMouseLeave=()=>{
        const{hideToolTip} =this.props;
      
        hideToolTip();
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
        const {dataChart,svgWidth}= this.props;
        
        const baseTemperature= dataChart.baseTemperature;
        const minDate=new Date(dataChart.monthlyVariance[0].year,0);
        const maxDate= new Date(dataChart.monthlyVariance[dataChart.monthlyVariance.length-1].year,0);
        let databyYears=this.countDups();
        const dataIntervals=this.findMin();
        //const listOfMonts=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       
        const margin={
            top: 30,
            right: 10,
            bottom: 40,
            left: 50
        };
        let svgDimensions = {
            width:Math.max(svgWidth,300),
            height: 450,
            innerWidth:0,
            innerHeight:0
        };

        svgDimensions.innerHeight=svgDimensions.height/dataVisConstant.Months.length;
        svgDimensions.innerWidth=svgDimensions.width/databyYears;

        const xScale= scaleTime().domain([minDate,maxDate]).range([0,svgDimensions.width-1]);
        //const xScale= scaleTime().domain([minDate,maxDate]).range([margin.left,svgDimensions.width-margin.right]);


        const yScale=scaleBand()
        .domain(dataVisConstant.Months)
        //.range([0,chartDimensions.svgHeight]);
        //.domain(listOfMonts)
        .range([0,svgDimensions.height]);
        return(
            <svg width={svgDimensions.width+margin.left+margin.right} 
                height={svgDimensions.height+margin.top+margin.bottom} 
                // <svg width={svgDimensions.width} 
                // height={svgDimensions.height}
                viewBox={`0 0 ${svgDimensions.width+margin.left+margin.right} ${svgDimensions.height+margin.top+margin.bottom}`} preserveAspectRatio="xMidYMid meet"
                className="animated bounceInLeft">
                <HeatAxes
                    scales={{xScale,yScale}} 
                    margins={margin}
                    svgDimensions={svgDimensions}/>´

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
DataVisHeatChart.propTypes={
    svgWidth:PropTypes.number,
    dataChart:PropTypes.shape({
        baseTemperature:PropTypes.number,
        monthlyVariance:PropTypes.arrayOf(PropTypes.shape({
            month:PropTypes.number,
            variance:PropTypes.number,
            year:PropTypes.number
        }))
    })
};
export default DataVisHeatChart;