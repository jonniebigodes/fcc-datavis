import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScatterPoint extends Component{

    onMouseOver=()=>{
        const {scatterItem,scatterPointMouseEnter}= this.props;
        scatterPointMouseEnter({data:scatterItem})
    }
    onMouseOut=()=>{
        this.props.scatterPointMouseLeave();
    }
    render(){
        const {scatterItem,pos}= this.props;
        return (
            <circle
                key={`item_${scatterItem.Seconds}_${scatterItem.Place}_${scatterItem.Nationality}`}
                r={5}
                cx={pos.x}
                cy={pos.y}
                fill={scatterItem.Doping==="Doping Allegations"?"#ed0909":"#6caeac"}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}/>
        );
    }
}
export default ScatterPoint;