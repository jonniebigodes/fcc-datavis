import PropTypes from 'prop-types';
import React from 'react';
import styles from './bar-style.module.css';
const showInfo=()=>{
    return(
        <p><span className={styles.bartooltipText}>Mouse over the chart to show information</span></p>
    )
};
const showData=value=>{
    return(
        <p><span className={styles.bartooltipText}>In {value.dateTime} the domestic value was {value.domesticValue} .</span></p>
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