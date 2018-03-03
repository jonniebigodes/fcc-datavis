import React from 'react';
import '../../../Assets/css/forceGraph.css';
const showData=value=>{

    return (
        <div>
            <div className="imgToolTip">
                <img src={value.flag}/>
            </div>
            <div className="tooltipText">{value.name}</div>
            <div className="tooltipText"> Capital {value.capital}</div>
            <div className="tooltipText">Population {value.population}</div>
            <div className="tooltipText">Area {value.area}Km</div>
        </div>
       
    )
};
const showInfo=()=>{
    return (
        <div className="tooltipText">
            Mouse over a circle to show you some information about the country
        </div>
    )
}
const ForceGraphToolTip=({value})=>{
    return(
        <div className="containerTooltip">
            {value?showData(value):showInfo()}
        </div>
    )
};
export default ForceGraphToolTip;