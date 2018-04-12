import React, { Component } from 'react';
import { feature } from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";
import GlobeViewChart from './GlobeViewChart';
import MeteorToolTip from './MeteorToolTip';
import Utilities from '../../../Utils/Utilities';
import styles from './globe-style.module.css';
class GlobeViewContainer extends Component{

    constructor(){
        super();
        this.state={
            isLoading:true,
            isError:false,
            meteors:[],
            globeMap:[],
            isToolTipActive:false,
            meteorInfo:{},
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
            window.addEventListener('resize',this.setChartDimensions);
        }
        setTimeout(() => {
            const storedMap=JSON.parse(Utilities.getStorageData("globeMap"));
            const meteorsData=JSON.parse(Utilities.getStorageData("meteors"));
            // const dataMap=JSON.parse(Utilities.getStorageData("parsedMap"));
            // console.log('====================================');
            // console.log(`dataMap:\n${JSON.stringify(dataMap,null,2)}`);
            // console.log('====================================');
            if (!storedMap){
                this.fetchData();
                this.fetchDataMeteor();
            }
            else{
                this.setState(prevState=>({
                    // globeMap:feature(storedMap,storedMap.objects.countries).features,
                    globeMap:storedMap,
                    meteors:meteorsData,
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
            window.removeEventListener('resize',this.setChartDimensions);
        }
    }
    setChartWidth=value=>{
        return value*.80;
    }
    calculateRadius=value=>{
        let range=179687.5

        switch (true) {
            case (value<=range):
                return 2;
            case (value<=range*2):
                return 4;
            case (value<=range*3):
                return 6;
            case (value<=range*20):
                return 8;
            case (value<=range*100):
                return 8;
            default:
                return 12;
        }
        /* if (value<=range){
            return 2;
        }
        else if (value<=range*2){
            //return 10;
            return 4;
        }
        else if (value<=range*3){
            return 6;
        }
        else if (value<=range*20){
            return 8;
        }
        else if (value<=range*100){
            // console.log('====================================');
            // console.log(`(value<=range*100)`);
            // console.log('====================================');
            return 10;
        }
        // console.log('====================================');
        // console.log(`(50)`);
        // console.log('====================================');
        return 12; */
    }
    project(){
        const {chartWidth,chartHeight}= this.state;
        return geoMercator().scale(100).translate([chartWidth/2,chartHeight/2]);
        // if(chartWidth<768){
        //     return geoMercator().scale(chartWidth).translate([chartWidth/2,chartHeight/2]);
        // }
        // else{
            
        // }
        
    }
    setChartDimensions=()=>{
        const {chartWidth}= this.state;
        let currentWidth=0;
        let currentHeight=0;
        if (this.chartContainer){
            currentWidth= this.chartContainer.getBoundingClientRect().width;
            currentHeight= this.chartContainer.getBoundingClientRect().height;

            currentWidth=this.chartContainer.getBoundingClientRect().width<=768
                ?this.setChartWidth(this.chartContainer.getBoundingClientRect().width)
                :this.chartContainer.getBoundingClientRect().width;
            currentHeight=this.chartContainer.getBoundingClientRect().width<=768
                ?this.setChartWidth(this.chartContainer.getBoundingClientRect().height)
                :this.chartContainer.getBoundingClientRect().height;
            
            if (currentWidth!==chartWidth){
                this.setState({
                    chartWidth:currentWidth,
                    chartHeight:currentHeight
                });
            }
        }
        else{
            currentWidth=this.setChartWidth(window.innerWidth);
            currentHeight= this.setChartWidth(window.innerHeight);
            if (currentWidth!==chartWidth){
                this.setState({
                    chartWidth:currentWidth,
                    chartHeight:currentHeight
                });
            }
        }
        // console.log('====================================');
        // console.log(`setChartDimensions`);
        // console.log('====================================');
        // if (window.innerHeight>=500 || window.innerWidth>=1024){
        //     this.setState({chartWidth:800,chartHeight:550});
        // }
        // else{
        //     this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
        // }
    }
    // resizeWindowHandler=()=>{
    //     console.log('====================================');
    //     console.log(`we's gots windows ${window.innerHeight} ${window.innerWidth}`);
    //     console.log('====================================');
    //     this.setChartDimensions();
    //     // if (window.innerHeight>=500 || window.innerWidth>=1024){
    //     //     this.setState({chartWidth:dataVisConstant.svgDimensions.charts.width,chartHeight:dataVisConstant.svgDimensions.charts.heigth});
    //     // }
    //     // else{
    //     //     this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
    //     // }
    //     //this.setState({chartWidth:window.innerWidth,chartHeight:window.innerHeight});
    // }
    fetchDataMeteor(){
        fetch('https://data.nasa.gov/resource/y77d-th95.geojson')
            .then(response=>{return response.json()})
            .then(result=>{
                
                let meteorPoints=result.features.map((d,i)=>{
                    return {
                        name:d.properties.name,
                        mass:parseInt(d.properties.mass),
                        date:d.properties.year,
                        meteorClass:d.properties.recclass,
                        radius:this.calculateRadius(parseInt(d.properties.mass)),
                        latitude:this.project()([Number(d.properties.reclong),Number(d.properties.reclat)])[0],
                        longitude:this.project()([Number(d.properties.reclong),Number(d.properties.reclat)])[1],
                        fillOp:parseInt(d.properties.mass)<=179687.5?1:0.5
                    }
                });
                console.log('====================================');
                console.log(`meteor format\n:${JSON.stringify(meteorPoints,null,2)}`);
                console.log('====================================');
                // result.features.map((d,i)=>{
                //     console.log('====================================');
                //     console.log(`data features:${JSON.stringify(d,null,2)}`);
                //     console.log('====================================');
                // }); 
                // Utilities.setStorageData("meteors",result);
                Utilities.setStorageData("meteors",meteorPoints);
                this.setState({
                   // meteors:result,
                    meteors:meteorPoints,
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
                const pathsGlobe=feature(result,result.objects.countries).features;
                
                let formattedMap=pathsGlobe.map((d,i)=>{
                    return {
                        dpath:geoPath().projection(this.project())(d),
                        fillInfo:`rgba(38,50,56,${1 / pathsGlobe.length * i})`
                    }
                });
               
               
                // console.log('====================================');
                // console.log(`paths Globe\n:${JSON.stringify(formattedMap,null,2)}`);
                // console.log('====================================');
                //Utilities.setStorageData("globeMap",result);
                Utilities.setStorageData("globeMap",formattedMap);
                this.setState({
                    //globeMap:feature(result,result.objects.countries).features
                    globeMap:formattedMap
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
        const {isError,isLoading,globeMap,meteors,isToolTipActive,meteorInfo, chartWidth,chartHeight}= this.state;
        if (isError){
            return (<div className={styles.globeTitle}>Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return (<div className={styles.globeTitle}>Hold on to your hat...i'm getting the data at *insert meteror speed here</div>);
        }
        if (globeMap.length){
            return (
                <div ref={(el)=>{this.chartContainer=el;}}>
                    <div className={styles.globeTitle}>Meteor hits across the globe</div>
                    <div className={styles.containerGlobe}>
                        <div>
                            <GlobeViewChart
                                svgWidth={chartWidth}
                                svgHeight={chartHeight}
                                globeData={globeMap} 
                                // meteorsInfo={meteors.features}
                                meteorsInfo={meteors}
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