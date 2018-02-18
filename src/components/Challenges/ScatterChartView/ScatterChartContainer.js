import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import DataVisScatterChart from './DataVisScatterChart';
import ScatterTooltip from './ScatterTooltip';
import './Scatter.css';
class ScatterChartContainer extends Component{
    constructor(){
        super();
        this.state={
            isLoading: true,
            isError: false,
            fullchartData: [],
            isTooltipActive:false,
            tooltipData:{}
        };
    }
    componentDidMount(){
        setTimeout(() => {
            const storedScatterdate= JSON.parse(Utilities.getStorageData("scatterData"));
            if (!storedScatterdate){
                this.fetchData();
            }
            else{
                this.setState({fullchartData:storedScatterdate,isLoading:false});
                
            }
        }, 2500);
    }
    onToolTipHide=()=>{
        this.setState({isTooltipActive:false,tooltipData:{}});
    }
    onToolTipShow=value=>{
        this.setState({isTooltipActive:true,tooltipData:value});
    }
    fetchData(){
        fetch(`https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json`)
        .then(response=>{
            return response.json();
        })
        .then(result=>{
            Utilities.setStorageData("scatterData",result);
            this.setState({fullchartData:storedScatterdate,isLoading:false});
        })
        .catch(Err=>{
            console.log('====================================');
            console.log(`error getting the chart data:${JSON.stringify(Err,null,2)}`);
            console.log('====================================');
                //this.setState({isError:true});
            this.setState(prevState=>({
                isError:true
            }));
        })
    }
    render(){
        const {isError,isLoading,fullchartData,isTooltipActive,tooltipData}= this.state;
        if (isError){
            return (<h3>Lights up the sirens.....Something went wrong</h3>);
        }
        if (isLoading){
            return (<h3>Hold on to your hat...i'm getting the data at lightspeed</h3>);
        }
        if (fullchartData.length){
            return(
                <div>
                     {/* <h3>soon the graph</h3> */}
                     <div className="scatterTitle">
                        Doping in Professional Bicycle Racing
                     </div>
                     <DataVisScatterChart 
                            dataChart={fullchartData}
                            scatterLeave={this.onToolTipHide} 
                            scatterEnter={this.onToolTipShow} />
                        {isTooltipActive?<ScatterTooltip data={tooltipData.data}/>:<div/>}
                     <div className="scatterText">
                        35 Fastest times up Alpe d'Huez<br/>
                        Normalized to 13.8km distance
                     </div>
                </div>
            );
        }
    }
}
export default ScatterChartContainer;