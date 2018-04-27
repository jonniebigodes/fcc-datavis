import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PreloadWorld.scss'
class PreloadWorld extends Component{
    state={loadStage:0};

    componentDidMount(){
        this.timerID= setInterval(()=>this.updateLoadState(),1400);
    }
    componentWillUnmount(){
        clearTimeout(this.timerID);
    }
    updateLoadState(){
        const {loadStage}= this.state;
        if (loadStage>=12){
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
            <div className={"containerWorld"}>
                <div className={`itemWorld-${loadStage}`}></div> 
                <div className={`itemWorld-${loadStage}`}></div> 
                <div className={`itemWorld-${loadStage}`}></div>  
                <div className={`itemWorld-${loadStage}`}></div>  
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div> 
                <div className={`itemWorld-${loadStage}`}></div> 
                <div className={`itemWorld-${loadStage}`}></div> 
                <div className={`itemWorld-${loadStage}`}></div> 
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
                <div className={`itemWorld-${loadStage}`}></div>
            </div>
        );
    }

}
PreloadWorld.propTypes={
    endCounter:PropTypes.func
}
export default PreloadWorld;