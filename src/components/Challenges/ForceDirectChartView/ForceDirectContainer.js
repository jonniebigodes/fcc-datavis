import React, { Component } from 'react';
// import Toggle from 'material-ui/Toggle';
import Utilities from '../../../Utils/Utilities';
import DataVisForceGraph from './DataVisForceGraph';
import ForceGraphToolTip from './ForceGraphToolTip';
import '../../../Assets/css/forceGraph.css';
class ForceDirectContainer extends Component{
    constructor(){
        super();
        this.state={
            isLoading:true,
            isError:false,
            fullChartData:{},
            isToolTipActive:false,
            countryCode:'',
        };
    }
    componentDidMount(){
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
        const{isError,isLoading,fullChartData,isToolTipActive,countryCode,labelShow}= this.state;
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
            return(
                <div>
                    <div className="title">Force directed graph ilustrating the world countries contiguity</div>
                    <div className="containerForce">
                    <div className="forceGraph">
                        <DataVisForceGraph graphData={fullChartData} width={800} height={600} 
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