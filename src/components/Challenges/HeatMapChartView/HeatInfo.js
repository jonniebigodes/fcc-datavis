import React from 'react';
import '../../../Assets/css/heatGraph.css';
import styles from './heat-style.module.css';
const HeatInfo=()=>{
    return(
         <div className={styles.containerColors}>
            <div className={styles.firstLabel}>0</div>
            <div className={styles.secondLabel}>2.7</div>
            <div className={styles.thirdLabel}>3.9</div>
            <div className={styles.fourthLabel}>5</div>
            <div className={styles.fithLabel}>6.1</div>
            <div className={styles.sixthLabel}>7.2</div>
            <div className={styles.seventhLabel}>8.3</div>
            <div className={styles.eightLabel}>9.4</div>
            <div className={styles.tenLabel}>10.5</div>
            <div className={styles.elevenLabel}>11.6</div>
            <div className={styles.twelveLabel}>12.7</div>
         </div>
        );
    

}
export default HeatInfo;