import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import DataVisScatterChart from './DataVisScatterChart';
import ScatterTooltip from './ScatterTooltip';
import styles from './scatter-style.module.css';
import {dataVisConstant} from '../../../Utils/Constants';
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
            chartHeight:0
        };
    }
    componentDidMount(){
        if (typeof window!=='undefined'){
            console.log('====================================');
            console.log(`we's gots windows ${window.innerHeight} ${window.innerWidth}`);
            console.log('====================================');
            window.addEventListener('resize',this.resizeWindowHandler);
            this.setChartDimensions();
        }
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
    componentWillUnmount(){
        if (typeof window!=='undefined'){
            window.removeEventListener('resize',this.resizeWindowHandler);
        }
    }
    setChartDimensions=()=>{
        if (window.innerHeight>=500 || window.innerWidth>=1024){
            this.setState({chartWidth:dataVisConstant.svgDimensions.charts.width,chartHeight:dataVisConstant.svgDimensions.charts.height});
        }
        else{
            this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
        }
    }
    resizeWindowHandler=()=>{
        console.log('====================================');
        console.log(`we's gots windows ${window.innerHeight} ${window.innerWidth}`);
        console.log('====================================');
        this.setChartDimensions();
        // if (window.innerHeight>=500 || window.innerWidth>=1024){
        //     this.setState({chartWidth:dataVisConstant.svgDimensions.charts.width,chartHeight:dataVisConstant.svgDimensions.charts.heigth});
        // }
        // else{
        //     this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
        // }
        //this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
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
        const {isError,isLoading,fullchartData,isTooltipActive,tooltipData,chartWidth,chartHeight}= this.state;
        if (isError){
            return (<div className={styles.scatterPreload}>Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return (<div className={styles.scatterPreload}>Hold on to your hat...i'm getting the data at Lance Armstrong speed</div>);
        }
        if (fullchartData.length){
            return(
                <div>
                     <div className={styles.scatterTitle}>
                        Doping in Professional Bicycle Racing
                     </div>
                     <div className={styles.containerScatter}>
                        <div className={styles.scattercontainerChart}>
                             <DataVisScatterChart 
                                dataChart={fullchartData}
                                scatterLeave={this.onToolTipHide} 
                                scatterEnter={this.onToolTipShow} 
                                chartDimensions={{svgWidth:chartWidth,svgHeight:chartHeight,margins:dataVisConstant.svgDimensions.margins}}/>
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