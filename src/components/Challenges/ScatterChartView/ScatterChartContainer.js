import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import Preload from '../../Preloader/index';
import DataVisScatterChart from './DataVisScatterChart';
import ScatterTooltip from './ScatterTooltip';
import styles from './scatter-style.module.css';
class ScatterChartContainer extends Component{
    constructor(){
        super();
        this.state={
            isLoading: true,
            isError: false,
            fullchartData: [],
            isTooltipActive:false,
            tooltipData:{},
            chartWidth:0,
        };
    }
    componentDidMount(){
        if (typeof window!=='undefined'){
            this.setChartDimensions();
            window.addEventListener('resize',this.setChartDimensions);
            
        }
        setTimeout(() => {
            const storedScatterdata= JSON.parse(Utilities.getStorageData("scatterData"));
            if (!storedScatterdata){
                this.fetchData();
            }
            else{
                const storedScatter=storedScatterdata.map(item=>{
                    return{
                        Doping:item.Doping,
                        Name:item.Name,
                        Nationality:item.Nationality,
                        Place:item.Place,
                        Seconds:item.Seconds,
                        Time:item.Time,
                        URL:item.URL,
                        Year:item.Year
                    }
                });
                this.setState({
                    fullchartData:storedScatterdata,
                });
                
            }
        }, 2500);
    }
    componentWillUnmount(){
        if (typeof window!=='undefined'){
            window.removeEventListener('resize',this.setChartDimensions);
        }
    }
    setChartWidth=value=>{
        return value*.80;
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
            currentWidth=window.innerWidth>=960?900:window.innerWidth;
            if (currentWidth!==chartWidth){
                this.setState({
                    chartWidth:currentWidth
                });
            }
        }
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
            const fastestTime = 2210;
            const dataToStore=result.map(item=>{
                return{
                  Time:item.Time,
                  Place:item.Place,
                  Seconds:item.Seconds,
                  Name:item.Name,
                  Year:item.Year,
                  Nationality:item.Nationality,
                  Doping:item.Doping===""?"No Allegations":"Doping Allegations",
                  URL:item.URL,
                  behind:item.Seconds-fastestTime
                }
              });
            Utilities.setStorageData("scatterData",dataToStore);
            this.setState({
                fullchartData:dataToStore,
            });
        })
        .catch(Err=>{
            console.log('====================================');
            console.log(`error getting the chart data:${JSON.stringify(Err,null,2)}`);
            console.log('====================================');
            this.setState(prevState=>({
                isError:true
            }));
        })
    }
    handlePreloadShutdown=()=>{
        this.setState({
            isLoading:false
        })
    }
    render(){
        const {isError,isLoading,fullchartData,isTooltipActive,tooltipData,chartWidth,chartHeight}= this.state;
        if (isError){
            return (<p><span className={styles.scatterPreload}>Lights up the sirens.....Something went wrong</span></p>);
        }
        if (isLoading){
            return(<Preload chartName={'scatter'} turnDownPreload={this.handlePreloadShutdown}/>);
        }
        if (fullchartData.length){
            return(
                <div ref={(el) => { this.chartContainer = el;}}>
                     <div className={styles.scatterTitle}>
                        Doping in Professional Bicycle Racing
                     </div>
                     <div className={styles.containerScatter}>
                        <div className={styles.scattercontainerChart}>
                             <DataVisScatterChart 
                                dataChart={fullchartData}
                                scatterLeave={this.onToolTipHide} 
                                scatterEnter={this.onToolTipShow} 
                                svgWidth={chartWidth}/>
                        </div>
                        <div>
                            <ScatterTooltip data={isTooltipActive?tooltipData.data:null}/>
                        </div>
                     </div>
                    
                     <div className={styles.scatterText}>
                        35 Fastest times up Alpe d'Huez<br/>
                        Normalized to 13.8km distance
                     </div>
                </div>
            );
        }
    }
}
export default ScatterChartContainer;