import PropTypes from 'prop-types';
import React from 'react';
import './forceGraph.css';
const showData=value=>{

    return (
        <div>
            <div className="imgToolTip">
                <img src={value.flag}/>
            </div>
            <p><span className="tooltipText">{value.name} Capital {value.capital} with {value.population} souls and area of {value.area}Km</span></p>
        </div>
       
    )
};
const showInfo=()=>{
    return (
        <p><span className="tooltipText">Mouse over a circle to show you some information about the country</span></p>
    )
}
const ForceGraphToolTip=({value})=>{
    return(
        <div className="containerTooltip">
            {value?showData(value):showInfo()}
        </div>
    )
};
ForceGraphToolTip.propTypes={
    value:PropTypes.shape({
        area:PropTypes.number,
        capital:PropTypes.string,
        flag:PropTypes.string,
        name:PropTypes.string,
        population:PropTypes.number
    })
};
export default ForceGraphToolTip;