import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import DataVisForceGraph from './DataVisForceGraph';
import ForceGraphToolTip from './ForceGraphToolTip';
import styles from './force-style.module.css';

class ForceDirectContainer extends Component{
    constructor(){
        super();
        this.state={
            isLoading:true,
            isError:false,
            fullChartData:{},
            isToolTipActive:false,
            countryCode:'',
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
            console.log('====================================');
            console.log(`componentWillUnmount we's gots windows ${window.innerHeight} ${window.innerWidth}`);
            console.log('====================================');
            window.removeEventListener('resize',this.resizeWindowHandler);
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
    setChartDimensions=()=>{
        console.log('====================================');
            console.log(`setChartDimensions`);
            console.log('====================================');
        if (window.innerHeight>=500 || window.innerWidth>=1024){
            this.setState({chartWidth:800,chartHeight:600});
        }
        else{
            this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
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
        const{isError,isLoading,fullChartData,isToolTipActive,countryCode,labelShow,chartWidth,
            chartHeight}= this.state;
        if (isError){
            return (<div className={styles.preloadText}>Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return (
                <div className={styles.preloadText}>
                    Hold on to your hat...i'm getting the data Chuck Norris style.<p/>
                    And speaking of chuck.....<br/>
                    Here's a random fact about Chuck Norris<br/>
                    {Utilities.forcePreload()}
                </div>

            );
        }
        if (fullChartData.nodes.length){
            return(
                <div>
                    <div className={styles.title}>Force directed graph ilustrating the world countries contiguity</div>
                    <div className={styles.containerForce}>
                    <div className={styles.forceGraph}>
                        {/* <DataVisForceGraph graphData={fullChartData} width={800} height={600}  */}
                        <DataVisForceGraph graphData={fullChartData} width={chartWidth} height={chartHeight} 
                            enableToolTip={this.activateToolTip} 
                            disableToolTip={this.deactivateToolTip}
                            enableLegends={labelShow}/>
                    </div>
                    <div className={styles.tooltipInfo}>
                        <ForceGraphToolTip value={isToolTipActive?Utilities.loadCountryInfo(countryCode):null}/>
                    </div>  
               </div>
                </div>
               
            );
        }
    }
}
export default ForceDirectContainer;