import React, { Component } from 'react';
import DataVisBarChart from './DataVisBarChart';
import BarChartToolTip from './BarToolTip';
import Utilities from '../../../Utils/Utilities';
import styles from './bar-style.module.css';
import {dataVisConstant} from '../../../Utils/Constants';
class BarChartContainer extends Component{
    constructor() {
        super()
        this.state = {
          isLoading: true,
          isError: false,
          fullchartData: [],
          isToolTipActive:false,
          gdpInfo:{},
          chartWidth:0
        }
    }
    
    componentDidMount(){
        if (typeof window!=='undefined'){
            // console.log('====================================');
            // console.log(`we's gots windows ${window.innerHeight} ${window.innerWidth}`);
            // console.log('====================================');
            this.setChartDimensions();
            window.addEventListener('resize',this.setChartDimensions);
            
        }
        setTimeout(() => {
            const storedbars=JSON.parse(Utilities.getStorageData("barsdata"));
            if(!storedbars){
                this.fetchData();
            }
            else{
                const storedBarsData= storedbars.map(item=>{
                    return {
                        dateTime:item.dateTime,
                        domesticValue:Number(item.domesticValue)
                    }
                });
                this.setState({
                fullchartData:storedBarsData,
                isLoading:false
                });
            }
        }, 2500);
    }
    componentWillUnmount(){
        if (typeof window!=='undefined'){
            console.log('====================================');
            console.log(`componentWillUnmount we's gots windows ${window.innerHeight} ${window.innerWidth}`);
            console.log('====================================');
            window.removeEventListener('resize',this.setChartDimensions);
        }
    }
    setChartWidth=value=>{
        return value*.80;
    }
    setChartDimensions=()=>{
        // console.log('====================================');
        // console.log(`setChartDimensions enter:\n${JSON.stringify(this.chartContainer,null,2)}`);
        // console.log('====================================');
        // if (this.chartContainer){
        //     console.log('====================================');
        //     console.log(`setChartDimensions with chart container:\n${JSON.stringify(this.chartContainer.getBoundingClientRect().width,null,2)}`);
        //     console.log('====================================');
        // }
        const {chartWidth}= this.state;
        let currentWidth=0;
        // console.log('====================================');
        // console.log(`setChartDimensions before if chart container:\ncurrent width: ${currentWidth}`);
        // console.log('====================================');
        if (this.chartContainer){
            console.log('===========================s=========');
            console.log(`setChartDimensions with chart container:\n${JSON.stringify(this.chartContainer.getBoundingClientRect().width,null,2)}`);
            console.log('====================================');

            currentWidth= this.chartContainer.getBoundingClientRect().width;

            currentWidth=this.chartContainer.getBoundingClientRect().width<=768
                ?this.setChartWidth(this.chartContainer.getBoundingClientRect().width)
                :this.chartContainer.getBoundingClientRect().width;
            //currentWidth= this.chartContainer.getBoundingClientRect().width>600?820:this.chartContainer.getBoundingClientRect().width;
            // console.log('====================================');
            // console.log(`setChartDimensions with chart container:\ncurrent width: ${currentWidth} state width:${chartWidth}`);
            // console.log('====================================');
            if (currentWidth!==chartWidth){
                this.setState({
                    chartWidth:currentWidth,
                });
            }
        }
        else{
            //currentWidth= window.innerWidth; 
            currentWidth=this.setChartWidth(window.innerWidth);  
            // console.log('====================================');
            // console.log(`setChartDimensions with no container:\ncurrent width: ${currentWidth} state width:${chartWidth}`);
            // console.log('====================================');
            if (currentWidth!==chartWidth){
                this.setState({
                    chartWidth:currentWidth
                });
            }
        }
        
        //if (window.innerWidth>600){
        //if (window.innerHeight>=500 || window.innerWidth>=1024){
            //this.setState({chartWidth:dataVisConstant.svgDimensions.charts.width,chartHeight:dataVisConstant.svgDimensions.charts.height});
       // }
       // else{
            // if (this.chartContainer){

            // }
            // this.chartContainer?this.setState(
            //     {
            //         chartWidth:this.chartContainer.getBoundingClientRect().width,
            //         chartHeight:this.chartContainer.getBoundingClientRect().height
            //     })
            //     :this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight})
            //this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
        //}
    }
    /* resizeWindowHandler=()=>{
        console.log('====================================');
        console.log(`resizeWindowHandler we's gots windows ${window.innerHeight} ${window.innerWidth}`);
        console.log('====================================');
        this.setChartDimensions();
        // if (window.innerHeight>=500 || window.innerWidth>=1024){
        //     this.setState({chartWidth:dataVisConstant.svgDimensions.charts.width,chartHeight:dataVisConstant.svgDimensions.charts.heigth});
        // }
        // else{
        //     this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
        // }
        //this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
    } */
    fetchData(){
        fetch('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                let i=0;
                let itemsResult=[];
                for (const item of result.data){
                    itemsResult.push(
                        {
                            dateTime:item[0],
                            domesticValue:Number(item[1]).toFixed(2)
                        }
                    );
                }
                Utilities.setStorageData("barsdata",itemsResult);
                this.setState({
                    fullchartData:itemsResult,
                    isLoading:false
                });
            })
            .catch(error=>{
                //
                console.log('====================================');
                console.log(`error getting the barchart data:${JSON.stringify(error,null,2)}`);
                console.log('====================================');
                this.setState(prevState=>({
                    isError:true
                }));
            });
    }
    activateToolTip=value=>{
        this.setState({isToolTipActive:true,gdpInfo:value});
    }
    deactivateToolTip=()=>{
        this.setState({isToolTipActive:false,gdpInfo:{}});
    }
    render(){
        const {isError,isLoading,fullchartData,isToolTipActive,gdpInfo,chartHeight,chartWidth}= this.state;
        if (isError){
            return (<span> className={styles.Preload}>Lights up the sirens.....Something went wrong</span>);
        }
        if (isLoading){
            return (<div className={styles.Preload}>Hold on to your hat...i'm getting the data at lightspeed</div>);
        }
        if (fullchartData.length){
            return(
                <div ref={(el) => { this.chartContainer = el;}}>
                    <div className={styles.BarTitle}>
                        Federal Reserve Economic Data on Gross Domestic Product in the USA
                     </div>
                     <div className={styles.containerBar}>
                        <div>
                            <DataVisBarChart dataChart={fullchartData} 
                            enableToolTip={this.activateToolTip} 
                            disableToolTip={this.deactivateToolTip}
                            chartDimensions={{svgWidth:chartWidth,svgHeight:chartHeight}}/>
                        </div>
                        
                        <div>
                            <BarChartToolTip data={isToolTipActive?gdpInfo:null}/>
                        </div>
                     </div>
                     <p><span className={styles.BarFooterText}>
                        Units: Billions of Dollars.
                    
                        Seasonal Adjustment: Seasonally Adjusted Annual Rate
                        Notes: A Guide to the National Income and Product Accounts of the United States (NIPA) (http://www.bea.gov/national/pdf/nipaguid.pdf)
                     </span></p>
                </div>
                
            );
        }
    }
}
export default BarChartContainer;