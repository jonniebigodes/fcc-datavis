import React from 'react';
import PropTypes from 'prop-types';

const showMeteorInfo=()=>{
    return(
        <div>
            <div className="tooltipText">
                Mouse over map<br/>to show information
            </div>
        </div>
    )
};
const showMeteorData=value=>{
    return(
        <div>
            
            <div className="tooltipText">
                In {value.dateofhit}<br/>
                meteor with mass of {value.meteormass}<br/>
                and class {value.meteorclass}<br/>  
                fell on latitude {value.latitude}<br/>  
                longitude {value.longitude}<br/>  
            </div>
            {/* <div className="tooltipText">meteor with mass of {value.meteormass} </div>
            <div className="tooltipText">and class {value.meteorclass}</div>
            <div className="tooltipText">fell on latitude {value.latitude} </div>
            <div className="tooltipText">and longitude:{value.longitude}</div> */}
        </div>
    )
};

const MeteorToolTip=({data})=>{

    return(
        <div className="containerToolTip">
            {data?showMeteorData(data):showMeteorInfo()}
        </div>
    );
};
MeteorToolTip.propTypes={

    data:PropTypes.shape({
        name:PropTypes.string,
        meteorclass:PropTypes.string,
        dateofhit:PropTypes.string,
        meteormass:PropTypes.number,
        latitude:PropTypes.number,
        longitude:PropTypes.number
    })
};
export default MeteorToolTip;