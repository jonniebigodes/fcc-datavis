import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import DataVisHeatChart from './DataVisHeatChart';
import HeatToolTip from './HeatTooltip';
class HeatMapChartContainer extends Component{

    constructor(){
        super();
        this.state={
            isLoading:true,
            isError:false,
            fullchartData: {},
            isTooltipActive:false,
            tooltipData:{}
        }
    }
    componentDidMount(){
        setTimeout(() => {
            const storedHeatData=JSON.parse(Utilities.getStorageData("heatdata"));
            if (!storedHeatData){
                this.fetchData();
            }
            else{
                this.setState(prevState=>({
                    fullchartData:storedHeatData,
                    isLoading:false
                }));
            }
        }, 2500);
    }
    onHideToolTip=()=>{
        
        this.setState({isTooltipActive:false,tooltipData:{}});
    }
    onShowToolTip=value=>{
        this.setState({isTooltipActive:true,tooltipData:value});
    }
    fetchData(){
        fetch(`https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json`)
        .then(response=>{
            return response.json();
        })
        .then(result=>{
            Utilities.setStorageData("heatdata",result);
            this.setState({fullchartData:result,isLoading:false});
            
        })
        .catch(Err=>{
            console.log('====================================');
            console.log(`error getting the chart data:${JSON.stringify(Err,null,2)}`);
            console.log('====================================');
                //this.setState({isError:true});
            this.setState(prevState=>({
                isError:true
            }));
        });
    }
    render(){
        const {isError,isLoading,fullchartData,isTooltipActive,tooltipData}= this.state;
        if (isError){
            return (<h3>Lights up the sirens.....Something went wrong</h3>);
        }
        if (isLoading){
            return (<h3>Hold on to your hat...i'm getting the data at lightspeed</h3>);
        }
        if (fullchartData.baseTemperature){
            return(
                <div>
                     <DataVisHeatChart dataChart={fullchartData} showToolTip={this.onShowToolTip} hideToolTip={this.onHideToolTip}/>
                     {isTooltipActive?<HeatToolTip data={tooltipData.data} dataTemp={fullchartData.baseTemperature}/>:<div/>}
                </div>
            );
        }
    }
}
export default HeatMapChartContainer;