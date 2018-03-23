import React from 'react';
import PropTypes from 'prop-types';
import styles from './heat-style.module.css';
const getMonths=value=>{
    const listOfMonts=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return listOfMonts[value-1];
}
const showInfo=()=>{
    return (
        <div>
            <div className={styles.heattooltipText}>
                Mouse over a bar 
            </div>
            <div className={styles.heattooltipText}>
                to show you information
            </div>
        </div>
    )
};
const showData=value=>{
    return(
        <div>
            <div className={styles.heattooltipText}>{getMonths(value.month)} {value.year}</div>
            <div className={styles.heattooltipText}>Temperature was: {value.baseTemp}</div>
            <div className={styles.heattooltipText}>with variance of: {value.variance}</div>
        </div>
    )
};
const HeatToolTip=({data})=>{
    // console.log('====================================');
    // console.log(`fill color:${data.toolColor}`);
    // console.log('====================================');
    // const styles={
    //     toolTip:{
    //         width:600,
    //         height:30,
    //         fontSize:14,
    //         backgroundColor:data.toolColor
    //     }
    // }
    return (
        <div className={styles.heatcontainerToolTip}>
            {data?showData(data):showInfo()}
        </div>

        // <div style={styles.toolTip}>
        //     <span>  In {getMonts(data.month)} of {data.year} the temperature was:{dataTemp} with a variance of: {data.variance}</span>
        // </div>
    );
};
HeatToolTip.propTypes={
    data:PropTypes.shape({
        variance:PropTypes.number,
        baseTemp:PropTypes.number,
        month:PropTypes.number,
        year:PropTypes.number
    })
};
export default HeatToolTip;