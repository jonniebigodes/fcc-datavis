import React from 'react';
import PropTypes from 'prop-types';
import styles from './globe-style.module.css';
const showMeteorInfo=()=>{
    return(
        <p><span className={styles.tooltipText}>Mouse over map to show information</span></p>
        // <div>
        //     <div className="tooltipText">
        //         Mouse over map<br/>to show information
        //     </div>
        // </div>
    )
};
const showMeteorData=value=>{
    return(
        <p><span className={styles.tooltipText}>In {value.dateofhit} a meteor with mass of {value.meteormass} and class {value.meteorclass} fell on latitude {value.latitude} longitude {value.longitude}</span></p>
         /*<div>
            
            <div className="tooltipText">
                In {value.dateofhit}<br/>
                meteor with mass of {value.meteormass}<br/>
                and class {value.meteorclass}<br/>  
                fell on latitude {value.latitude}<br/>  
                longitude {value.longitude}<br/>  
            </div>
            <div className="tooltipText">meteor with mass of {value.meteormass} </div>
            <div className="tooltipText">and class {value.meteorclass}</div>
            <div className="tooltipText">fell on latitude {value.latitude} </div>
            <div className="tooltipText">and longitude:{value.longitude}</div>
        </div> */
    )
};

const MeteorToolTip=({data})=>{

    return(
        <div className={styles.containerToolTip}>
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
        latitude:PropTypes.string,
        longitude:PropTypes.string
    })
};
export default MeteorToolTip;