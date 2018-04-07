import React from 'react';
import PropTypes from 'prop-types';
import styles from './scatter-style.module.css';
const showInfo=()=>{
    return(
        <p><span className={styles.scattertoolTipText}> Mouse over a circle to show information</span></p>
        // <div>
        //     <div className={styles.scattertoolTipText}>
        //         Mouse over a circle to show information
        //     </div>
        // </div>
    )
}
const showData=value=>{
    return(
        <p><span className={styles.scattertoolTipText}>{value.Name} from {value.Nationality} with a time of {value.Time} finished in {value.Place}th place.{value.Doping==="No Allegations"?`Clean as a whistle`:`With doping alegations`}</span></p>
        // <div className={styles.scattertoolTipText}>
        //     <div>{value.Name} from {value.Nationality} with a time of {value.Time} finished in {value.Place}th place.</div>
        //     <div>{value.Doping==="No Allegations"?`Clean as a whistle`:`With doping alegations`}</div>
        // </div>  
    )
}
const ScatterTooltip=({data})=>{
    return (
         <div className={styles.scattercontainerToolTip}>
           {data?showData(data):showInfo()}
        </div>
    );
};
ScatterTooltip.propTypes={
    data:PropTypes.shape({
        Doping:PropTypes.string,
        Name:PropTypes.string,
        Nationality:PropTypes.string,
        Place:PropTypes.number,
        Seconds:PropTypes.number,
        Time:PropTypes.string,
        URL:PropTypes.string,
        Year:PropTypes.number
    })
};
export default ScatterTooltip;