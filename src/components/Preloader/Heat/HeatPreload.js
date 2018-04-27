import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './preloaderHeat.scss';
class PreloadHeat extends Component{
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
                return {loadStage:prevState.loadStage+1}
            });
        }
    }
    render(){
        const {loadStage}= this.state;
        return (
            <div className={"containerHeat"}>
                <div className={`itemHeat-${loadStage}`}></div> 
                <div className={`itemHeat-${loadStage}`}></div> 
                <div className={`itemHeat-${loadStage}`}></div>  
                <div className={`itemHeat-${loadStage}`}></div>  
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div> 
                <div className={`itemHeat-${loadStage}`}></div> 
                <div className={`itemHeat-${loadStage}`}></div> 
                <div className={`itemHeat-${loadStage}`}></div> 
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
                <div className={`itemHeat-${loadStage}`}></div>
            </div>
        );
    }
}
PreloadHeat.propTypes={
    endCounter:PropTypes.func
};
export default PreloadHeat;