import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './preloaderBar.scss';
class PreloadBars extends Component{

    state={loadStage:0};

    componentDidMount(){
        this.timerID= setInterval(()=>this.updateLoadState(),1000);
    }
    componentWillUnmount(){
        clearTimeout(this.timerID);
    }
    updateLoadState(){
        const {loadStage}= this.state;
        if (loadStage>=10){
            this.props.endCounter();
        }
        else{
            this.setState((prevState)=>{
                return {loadStage:prevState.loadStage+1};
            });
        }
    }
    render(){
        const {loadStage}= this.state;

        return (
            <div className={"containerBars"}>
                <div className={`itemBars-${loadStage}`}></div> 
                <div className={`itemBars-${loadStage}`}></div> 
                <div className={`itemBars-${loadStage}`}></div>  
                <div className={`itemBars-${loadStage}`}></div>  
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div> 
                <div className={`itemBars-${loadStage}`}></div> 
                <div className={`itemBars-${loadStage}`}></div> 
                <div className={`itemBars-${loadStage}`}></div> 
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
                <div className={`itemBars-${loadStage}`}></div>
            </div>
        );
    }
    
}
PreloadBars.propTypes={
    endCounter:PropTypes.func
};
export default PreloadBars;