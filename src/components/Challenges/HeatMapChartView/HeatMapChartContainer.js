import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import Preload from '../../Preloader/index';
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
            this.setChartDimensions();
            window.addEventListener('resize',this.setChartDimensions);
        }
        setTimeout(() => {
            const storedHeatData=JSON.parse(Utilities.getStorageData("heatdata"));
            if (!storedHeatData){
                this.fetchData();
            }
            else{
                this.setState(prevState=>({
                    fullchartData:storedHeatData,
                }));
            }
        }, 2500);
    }
    componentWillUnmount(){
        if (typeof window!=='undefined'){
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
            currentWidth= window.innerWidth>=960?900:window.innerWidth;
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
            this.setState(
                {
                    fullchartData:result,
                }
            );
            
        })
        .catch(Err=>{
            console.log('====================================');
            console.log(`error getting the chart data:${JSON.stringify(Err,null,2)}`);
            console.log('====================================');
            this.setState(prevState=>({
                isError:true
            }));
        });
    }
    handlePreloadShutdown=()=>{
        this.setState({
            isLoading:false
        });
    }
    render(){
        const {isError,isLoading,fullchartData,isTooltipActive,tooltipData,chartHeight,chartWidth}= this.state;
        if (isError){
            return (<div className={styles.heatPreloader}>Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return(<Preload chartName={'heat'} turnDownPreload={this.handlePreloadShutdown}/>);
        }
        if (fullchartData.baseTemperature){
            return(
                <div ref={(el) => { this.chartContainer = el;}}>
                    <div className={styles.heatTitle}>Monthly Global Surface Temperature between 1753 - 2015</div>
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
                    </div>
                    <div className={styles.heatInfo}>
                        <HeatToolTip data={isTooltipActive?tooltipData:null}/>
                    </div>
                </div>
                
                
            );
        }
    }
}
export default HeatMapChartContainer;