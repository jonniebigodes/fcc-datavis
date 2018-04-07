import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar-style.module.css';
const showInfo=()=>{
    return(
        <p><span className={styles.bartooltipText}>Mouse over the chart to show information</span></p>
        // <div className={styles.bartooltipText}>
        //     Mouse over the chart <br/>to show information
        // </div>
        
    )
};
const showData=value=>{
    return(
        <p><span className={styles.bartooltipText}>In {value.dateTime} the domestic value was {value.domesticValue} .</span></p>
        // <div className={styles.bartooltipText}>
        //     {value.dateTime}<br/>
        //     Domestic value<br/>
        //     {value.domesticValue}
        // </div>
    //    <div>
           
    //          <div className={styles.bartooltipText}>Domestic value</div>
    //         <div className={styles.bartooltipText}>{value.domesticValue}</div> 
    //     </div>
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