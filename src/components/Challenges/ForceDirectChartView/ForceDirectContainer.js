import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import DataVisForceGraph from './DataVisForceGraph';
import ForceGraphToolTip from './ForceGraphToolTip';
import Preload from '../../Preloader/index'; 
import  './forceGraph.css';
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
                fullChartData:result
            });
        })
        .catch(err=>{
            console.log('====================================');
            console.log(`error getting the chart data:${JSON.stringify(Err,null,2)}`);
            console.log('====================================');
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
    handlePreloadShutdown=()=>{
        this.setState({
            isLoading:false
        })
    }
    render(){
        const{isError,isLoading,fullChartData,isToolTipActive,countryCode,labelShow,chartWidth}= this.state;
        if (isError){
            return (<div className="preloadText">Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return (<Preload chartName={'force'} turnDownPreload={this.handlePreloadShutdown}/>);
        }
        if (fullChartData.nodes.length){
            const svgWidth=Math.max(chartWidth,300);
            return(
                <div ref={(el) => { this.chartContainer = el;}}> 
                    <div className="title">Force directed graph ilustrating the world countries contiguity</div>
                    <div className="stylescontainerForce">
                    <div className="forceGraph">
                        <DataVisForceGraph graphData={fullChartData} width={svgWidth} height={600}
                            enableToolTip={this.activateToolTip} 
                            disableToolTip={this.deactivateToolTip}
                            enableLegends={labelShow}/>
                    </div>
                    <div>
                        <ForceGraphToolTip value={isToolTipActive?Utilities.loadCountryInfo(countryCode):null}/>
                    </div>  
               </div>
                </div>
               
            );
        }
    }
}
export default ForceDirectContainer;