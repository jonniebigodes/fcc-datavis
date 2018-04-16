import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
ScatterPoint.propTypes={
    pos:PropTypes.shape({
        x:PropTypes.number,
        y:PropTypes.number
    }),
    scatterItem:PropTypes.shape({
        Doping:PropTypes.string,
        Name:PropTypes.string,
        Nationality:PropTypes.string,
        Place:PropTypes.number,
        Seconds:PropTypes.number,
        Time:PropTypes.string,
        URL:PropTypes.string,
        Year:PropTypes.number,
        behind:PropTypes.number 
    })
};
export default ScatterPoint;