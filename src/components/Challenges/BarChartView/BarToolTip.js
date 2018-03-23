import React from 'react';
import PropTypes from 'prop-types';

import styles from './bar-style.module.css';
const showInfo=()=>{
    return(
        <div>
            <div className={styles.bartooltipText}>
                Mouse over the chart <br/>to show information
            </div>
        </div>
    )
};
const showData=value=>{

    return(
        <div>
            <div className={styles.bartooltipText}>{value.dateTime}</div>
            <div className={styles.bartooltipText}>Domestic value</div>
            <div className={styles.bartooltipText}>{value.domesticValue}</div>
        </div>
    )
};

const BarChartToolTip=({data})=>{
    
    return(
        <div className={styles.containerToolTip}>
            {data?showData(data):showInfo()}
        </div>
    );
};
BarChartToolTip.propTypes={
    data:PropTypes.shape({
        dateTime:PropTypes.string,
        domesticValue:PropTypes.number
    })
};

export default BarChartToolTip;