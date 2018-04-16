import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import DataVisForceGraph from './DataVisForceGraph';
import ForceGraphToolTip from './ForceGraphToolTip';
import  './forceGraph.css';

//import styles from './force-style.module.css';
class ForceDirectContainer extends Component{
    constructor(){
        super();
        this.state={
            isLoading:true,
            isError:false,
            fullChartData:{},
            isToolTipActive:false,
            countryCode:'',
            chartWidth:0
        };
    }
    componentDidMount(){
        if (typeof window!=='undefined'){
            console.log('====================================');
            console.log(`we's gots windows ${window.innerHeight} ${window.innerWidth}`);
            console.log('====================================');
            this.setChartDimensions();
            window.addEventListener('resize',this.setChartDimensions);
           
        }
        setTimeout(() => {
            const storedForce=JSON.parse(Utilities.getStorageData("forcedata"));
            if (!storedForce){
                this.fetchData();
            }
            else{
                this.setState(prevState=>({
                    fullChartData:storedForce,
                    isLoading:false
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
            //currentWidth= window.innerWidth; 
            //currentWidth=this.setChartWidth(window.innerWidth);
            currentWidth= window.innerWidth>=960?900:window.innerWidth;
            if (currentWidth!==chartWidth){
                this.setState({
                    chartWidth:currentWidth
                });
            }
        }
    }
    onShowHideLegend=()=>{
        this.setState({labelShow:!this.state.labelShow});
    }
    fetchData(){
        fetch(`https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json`).then(response=>{
            return response.json();
        })
        .then(result=>{
            Utilities.setStorageData("forcedata",result);
            this.setState({
                isLoading:false,
                fullChartData:result
            });
        })
        .catch(err=>{
            console.log('====================================');
            console.log(`error getting the chart data:${JSON.stringify(Err,null,2)}`);
            console.log('====================================');
                //this.setState({isError:true});
            this.setState(prevState=>({
                isError:true
            }));
        });
    }
    activateToolTip=value=>{
        this.setState({isToolTipActive:true,countryCode:value});
    }
    deactivateToolTip=()=>{
        this.setState({isToolTipActive:false,countryCode:''});
    }
    render(){
        const{isError,isLoading,fullChartData,isToolTipActive,countryCode,labelShow,chartWidth}= this.state;
        if (isError){
            return (<div className="preloadText">Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return (
                <div className="preloadText">
                    Hold on to your hat...i'm getting the data Chuck Norris style.<p/>
                    And speaking of chuck.....<br/>
                    Here's a random fact about Chuck Norris<br/>
                    {Utilities.forcePreload()}
                </div>

            );
        }
        if (fullChartData.nodes.length){
            const svgWidth=Math.max(chartWidth,300);
            return(
                <div ref={(el) => { this.chartContainer = el;}}> 
                    <div className="title">Force directed graph ilustrating the world countries contiguity</div>
                    <div className="stylescontainerForce">
                    <div className="forceGraph">
                        {/* <DataVisForceGraph graphData={fullChartData} width={800} height={600}  */}
                        <DataVisForceGraph graphData={fullChartData} width={svgWidth} height={600}
                            enableToolTip={this.activateToolTip} 
                            disableToolTip={this.deactivateToolTip}
                            enableLegends={labelShow}/>
                    </div>
                    <div className="tooltipInfo">
                        <ForceGraphToolTip value={isToolTipActive?Utilities.loadCountryInfo(countryCode):null}/>
                    </div>  
               </div>
                </div>
               
            );
        }
    }
}
export default ForceDirectContainer;