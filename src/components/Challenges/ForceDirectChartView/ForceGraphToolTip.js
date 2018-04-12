import React from 'react';
//import styles from './force-style.module.css';
import './forceGraph.css';
const showData=value=>{

    return (
        <div>
            <div className="imgToolTip">
                <img src={value.flag}/>
            </div>
            <p><span className="">{value.name} Capital {value.capital} with {value.population} souls and area of {value.area}Km</span></p>
            {/* <div className="tooltipText">{value.name}</div>
            <div className="tooltipText"> Capital {value.capital}</div>
            <div className="tooltipText">Population {value.population}</div>
            <div className="tooltipText">Area {value.area}Km</div> */}
        </div>
       
    )
};
const showInfo=()=>{
    return (
        <p><span className="tooltipText">Mouse over a circle to show you some information about the country</span></p>
        // <div className="tooltipText">
        //     Mouse over a circle to show you some information about the country
        // </div>
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