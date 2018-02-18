import React, { Component } from 'react';
import DataVisBarChart from './DataVisBarChart';
import './Axis.css';
class BarChartContainer extends Component{
    constructor() {
        super()
        this.state = {
          isLoading: true,
          isError: false,
          fullchartData: [],
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
                this.setState(prevState=>({
                    fullchartData:prevState.fullchartData.concat(itemsResult),
                    isLoading:false
                }));
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
            this.fetchData();
        }, 2500);
    }
    render(){
        const {isError,isLoading,fullchartData}= this.state;
        if (isError){
            return (<h3>Lights up the sirens.....Something went wrong</h3>);
        }
        if (isLoading){
            return (<h3>Hold on to your hat...i'm getting the data at lightspeed</h3>);
        }
        if (fullchartData.length){
            return(
                <div className="containerBar">
                     <div className="BarTitle">
                        Federal Reserve Economic Data on Gross Domestic Product in the USA
                     </div>
                    
                    <DataVisBarChart dataChart={fullchartData}/>
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