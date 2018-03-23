import React from 'react';
import styles from './force-style.module.css';
const showData=value=>{

    return (
        <div>
            <div className={styles.imgToolTip}>
                <img src={value.flag}/>
            </div>
            <div className={styles.tooltipText}>{value.name}</div>
            <div className={styles.tooltipText}> Capital {value.capital}</div>
            <div className={styles.tooltipText}>Population {value.population}</div>
            <div className={styles.tooltipText}>Area {value.area}Km</div>
        </div>
       
    )
};
const showInfo=()=>{
    return (
        <div className={styles.tooltipText}>
            Mouse over a circle to show you some information about the country
        </div>
    )
}
const ForceGraphToolTip=({value})=>{
    return(
        <div className={styles.containerTooltip}>
            {value?showData(value):showInfo()}
        </div>
    )
};
export default ForceGraphToolTip;