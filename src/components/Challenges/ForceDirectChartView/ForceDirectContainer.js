import React, { Component } from 'react';
import Utilities from '../../../Utils/Utilities';
import DataVisForceGraph from './DataVisForceGraph';
class ForceDirectContainer extends Component{
    constructor(){
        super();
        this.state={
            isLoading:true,
            isError:false,
            fullChartData:{}
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
    render(){
        const{isError,isLoading,fullChartData}= this.state;
        if (isError){
            return (<h3>Lights up the sirens.....Something went wrong</h3>);
        }
        if (isLoading){
            return (<h3>Hold on to your hat...i'm getting the data at lightspeed</h3>);
        }
        if (fullChartData.length){
            return(<DataVisForceGraph graphData={fullChartData}/>);
        }
    }
}