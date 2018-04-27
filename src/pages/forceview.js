import React from 'react';
import ForceDirectContainer from '../components/Challenges/ForceDirectChartView/ForceDirectContainer';
import styles from './index-module.module.css';
const ForceGraphPage=()=>{
    return (
        <div className={styles.containerPageForce}>
            <ForceDirectContainer/>
        </div>        
    );
};
export default ForceGraphPage;