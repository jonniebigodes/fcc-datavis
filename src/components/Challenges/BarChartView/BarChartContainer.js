import React, { Component } from 'react';
import DataVisBarChart from './DataVisBarChart';
import BarChartToolTip from './BarToolTip';
import Utilities from '../../../Utils/Utilities';
import '../../../Assets/css/barChart.css';
class BarChartContainer extends Component{
    constructor() {
        super()
        this.state = {
          isLoading: true,
          isError: false,
          fullchartData: [],
          isToolTipActive:false,
          gdpInfo:{},
        }
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
                            domesticValue:item[1]
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
    componentDidMount(){
        
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
    activateToolTip=value=>{
        this.setState({isToolTipActive:true,gdpInfo:value});
    }
    deactivateToolTip=()=>{
        this.setState({isToolTipActive:false,gdpInfo:{}});
    }
    render(){
        const {isError,isLoading,fullchartData,isToolTipActive,gdpInfo}= this.state;
        if (isError){
            return (<div className="Preload">Lights up the sirens.....Something went wrong</div>);
        }
        if (isLoading){
            return (<div className="Preload">Hold on to your hat...i'm getting the data at lightspeed</div>);
        }
        if (fullchartData.length){
            return(
                <div>
                    <div className="BarTitle">
                        Federal Reserve Economic Data on Gross Domestic Product in the USA
                     </div>
                     <div className="containerBar">
                        <div className="containerBarChart">
                            <DataVisBarChart dataChart={fullchartData} enableToolTip={this.activateToolTip} disableToolTip={this.deactivateToolTip}/>
                        </div>
                        
                        <div>
                            <BarChartToolTip data={isToolTipActive?gdpInfo:null}/>
                        </div>
                     </div>
                     <div className="BarFooterText">
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