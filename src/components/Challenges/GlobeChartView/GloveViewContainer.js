import React, { Component } from 'react';
import { feature } from "topojson-client";
import GlobeViewChart from './GlobeViewChart';
import MeteorToolTip from './MeteorToolTip';
import Utilities from '../../../Utils/Utilities';
import '../../../Assets/css/globe.css';
import styles from './globe-style.module.css';
class GlobeViewContainer extends Component{

    constructor(){
        super();
        this.state={
            isLoading:true,
            isError:false,
            meteors:{},
            globeMap:[],
            isToolTipActive:false,
            meteorInfo:{}
        }
    }
    componentDidMount(){
        
        setTimeout(() => {
            const storedMap=JSON.parse(Utilities.getStorageData("globeMap"));
            const meteorsData=JSON.parse(Utilities.getStorageData("meteors"));
            if (!storedMap){
                this.fetchData();
                this.fetchDataMeteor();
            }
            else{
                this.setState(prevState=>({
                    globeMap:feature(storedMap,storedMap.objects.countries).features,
                    meteors:meteorsData,
                    isLoading:false
                }));
            }
        }, 2500);

    }
    fetchDataMeteor(){
        fetch('https://data.nasa.gov/resource/y77d-th95.geojson')
            .then(response=>{return response.json()})
            .then(result=>{
                Utilities.setStorageData("meteors",result);
                this.setState({
                    meteors:result,
                    isLoading:false
                });
            })
            .catch(err=>{
                console.log('====================================');
                console.log(`error getting the meteors data:${JSON.stringify(err,null,2)}`);
                console.log('====================================');
                this.setState({isError:true});
            })
    }
    fetchData(){
        fetch('https://d3js.org/world-50m.v1.json')
            .then(response=>{
                return response.json();
            })
            .then(result=>{

                Utilities.setStorageData("globeMap",result);
                this.setState({
                    
                    globeMap:feature(result,result.objects.countries).features
                    
                });
            })
            .catch(err=>{
                console.log('====================================');
                console.log(`error getting the chart data:${JSON.stringify(err,null,2)}`);
                console.log('====================================');
                this.setState({isError:true});
            })
    }
   
    activateToolTip=value=>{
        this.setState({isToolTipActive:true,meteorInfo:value});
    }
    disableToolTip=()=>{
        this.setState({isToolTipActive:false,meteorInfo:{}});
    }
    render(){
        const {isError,isLoading,globeMap,meteors,isToolTipActive,meteorInfo}= this.state;
        if (isError){
            return (<div>Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return (<div>Hold on to your hat...i'm getting the data at lightspeed</div>);
        }
        //return (<h3>soom</h3>)
        if (globeMap.length){
            return (
                <div>
                    <div className={style.globeTitle}>Meteor hits across the globe</div>
                    <div className={style.containerGlobe}>
                        <div>
                            <GlobeViewChart 
                                globeData={globeMap} 
                                meteorsInfo={meteors.features}
                                showToolTip={this.activateToolTip}
                                hideToolTip={this.disableToolTip}/>
                        </div>
                        <div>
                            <MeteorToolTip data={isToolTipActive?meteorInfo:null}/>
                        </div>
                    </div>
                </div>
                
            )
        }
    }
}
export default GlobeViewContainer;