import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import DataVisHeatChart from './DataVisHeatChart';
import HeatToolTip from './HeatTooltip';
import HeatInfo from './HeatInfo';
import styles from './heat-style.module.css';
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
        
        // console.log('====================================');
        // console.log(`onShowToolTip:${JSON.stringify(value,null,2)}`);
        // console.log('====================================');
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
            return (<div className={styles.heatTitle}>Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return (<div className={styles.heatPreloader}>Hold on to your hat...i'm getting the data at lightspeed</div>);
        }
        if (fullchartData.baseTemperature){
            return(
                <div>
                    <div className={styles.heatTitle}>Monthly Global Surface Temperature between 1753 - 2015</div>
                    <div className={styles.containerHeat}>
                        <div>
                            <HeatInfo/>
                        </div>
                        <div className={styles.containerHeatChart}>
                            <DataVisHeatChart dataChart={fullchartData} showToolTip={this.onShowToolTip} hideToolTip={this.onHideToolTip}/>
                        </div>
                        <div>
                            <HeatToolTip data={isTooltipActive?tooltipData:null}/>
                        </div>
                </div>
                </div>
                
                
            );
        }
    }
}
export default HeatMapChartContainer;