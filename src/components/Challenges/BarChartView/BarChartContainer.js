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
          chartWidth:0,
          chartHeight:0
        }
    }
    
    componentDidMount(){
        if (typeof window!=='undefined'){
            console.log('====================================');
            console.log(`we's gots windows ${window.innerHeight} ${window.innerWidth}`);
            console.log('====================================');
            this.setChartDimensions();
            window.addEventListener('resize',this.resizeWindowHandler);
            
        }
        setTimeout(() => {
            const storedbars=JSON.parse(Utilities.getStorageData("barsdata"));
            if(!storedbars){
                this.fetchData();
            }
            else{
                this.setState({
                fullchartData:storedbars,
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
            window.removeEventListener('resize',this.resizeWindowHandler);
        }
    }
    setChartDimensions=()=>{
        console.log('====================================');
        console.log(`setChartDimensions`);
        console.log('====================================');
        //this.chartContainer.getBoundingClientRect().width
        if ((window.innerHeight>=500)||(window.innerWidth>=1000)){
        //if (window.innerHeight>=500 || window.innerWidth>=1024){
            this.setState({chartWidth:dataVisConstant.svgDimensions.charts.width,chartHeight:dataVisConstant.svgDimensions.charts.height});
        }
        else{
            this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
        }
    }
    resizeWindowHandler=()=>{
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
    }
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
            return (<div className={styles.Preload}>Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return (<div className={styles.Preload}>Hold on to your hat...i'm getting the data at lightspeed</div>);
        }
        if (fullchartData.length){
            return(
                <div ref={(el)=>this.chartContainer=el}>
                    <div className={styles.BarTitle}>
                        Federal Reserve Economic Data on Gross Domestic Product in the USA
                     </div>
                     <div className={styles.containerBar}>
                        <div >
                            <DataVisBarChart dataChart={fullchartData} 
                            enableToolTip={this.activateToolTip} 
                            disableToolTip={this.deactivateToolTip}
                            chartDimensions={{svgWidth:chartWidth,svgHeight:chartHeight,margins:dataVisConstant.svgDimensions.margins.barChart}}/>
                        </div>
                        
                        <div>
                            <BarChartToolTip data={isToolTipActive?gdpInfo:null}/>
                        </div>
                     </div>
                     <div className={styles.BarFooterText}>
                        Units: Billions of Dollars.<br/>
                        Seasonal Adjustment: Seasonally Adjusted Annual Rate<br/>
                        Notes: A Guide to the National Income and Product Accounts of the United States (NIPA) - (http://www.bea.gov/national/pdf/nipaguid.pdf)
                     </div>
                </div>
                
            );
        }
    }
}
export default BarChartContainer;