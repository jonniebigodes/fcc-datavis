import React from 'react';

const showMeteorData=value=>{
    return (
        <div>
            <div className="imgToolTip">
            </div>
        </div>
       
    )
}
const NoShow=()=>{
    return (
        <div className="tooltipText">
            Mouse over a circle to show you some information about the country
        </div>
    )
};
const MeteorImpact=({value})=>{
    return (
        <div className="">
            {value?showMeteorData(value):NoShow()}
        </div>
    )
};
export default MeteorImpact;