import PropTypes from 'prop-types';
import React from 'react';
import styles from './globe-style.module.css';
const showMeteorInfo=()=>{
    return(
        <p><span className={styles.tooltipText}>Mouse over map to show information</span></p>
    )
};
const showMeteorData=value=>{
    return(
        <p><span className={styles.tooltipText}>In {value.dateofhit} a meteor with mass of {value.meteormass} and class {value.meteorclass} fell on latitude {value.latitude} longitude {value.longitude}</span></p>
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