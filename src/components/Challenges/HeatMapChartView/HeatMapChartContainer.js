import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import DataVisHeatChart from './DataVisHeatChart';
import HeatInfo from './HeatInfo';
import HeatToolTip from './HeatTooltip';
import styles from './heat-style.module.css';
class HeatMapChartContainer extends Component{

    constructor(){
        super();
        this.state={
            isLoading:true,
            isError:false,
            fullchartData: {},
            isTooltipActive:false,
            tooltipData:{},
            chartWidth:0,
        }
    }
    componentDidMount(){
        if (typeof window!=='undefined'){
            console.log('====================================');
            console.log(`we's gots windows ${window.innerHeight} ${window.innerWidth}`);
            console.log('====================================');
            window.addEventListener('resize',this.setChartDimensions);
            this.setChartDimensions();
        }
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
    componentWillUnmount(){
        if (typeof window!=='undefined'){
            // console.log('====================================');
            // console.log(`componentWillUnmount we's gots windows ${window.innerHeight} ${window.innerWidth}`);
            // console.log('====================================');
            window.removeEventListener('resize',this.setChartDimensions);
        }
    }
    setChartWidth=value=>{
        return value*.70;
    }
    setChartDimensions=()=>{
        const {chartWidth}= this.state;
        let currentWidth=0;
        if (this.chartContainer){
           
            currentWidth= this.chartContainer.getBoundingClientRect().width;

            currentWidth=this.chartContainer.getBoundingClientRect().width<=768
                ?this.setChartWidth(this.chartContainer.getBoundingClientRect().width)
                :this.chartContainer.getBoundingClientRect().width;
           
            if (currentWidth!==chartWidth){
                this.setState({
                    chartWidth:currentWidth,
                });
            }
        }
        else{
            //currentWidth= window.innerWidth; 
            currentWidth=this.setChartWidth(window.innerWidth);  
            if (currentWidth!==chartWidth){
                this.setState({
                    chartWidth:currentWidth
                });
            }
        }
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
        const {isError,isLoading,fullchartData,isTooltipActive,tooltipData,chartHeight,chartWidth}= this.state;
        if (isError){
            return (<p><span className={styles.heatTitle}>Lights up the sirens.....Something went wrong</span></p>);
        }
        if (isLoading){
            return (<p><span className={styles.heatPreloader}>Hold on to your hat...i'm getting the data at lightspeed</span></p>);
        }
        if (fullchartData.baseTemperature){
            return(
                <div ref={(el) => { this.chartContainer = el;}}>
                    <p><span className={styles.heatTitle}>Monthly Global Surface Temperature between 1753 - 2015</span></p>
                    <div className={styles.containerHeat}>
                        <div>
                            <HeatInfo/>
                        </div>
                        <div className={styles.containerHeatChart}>
                            <DataVisHeatChart dataChart={fullchartData} 
                            showToolTip={this.onShowToolTip} 
                            hideToolTip={this.onHideToolTip}
                            svgWidth={chartWidth}/>
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