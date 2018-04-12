import React from 'react';
import ForceDirectContainer from '../components/Challenges/ForceDirectChartView/ForceDirectContainer';
//import '../Assets/css/forceGraph.css';
import styles from './index-module.module.css';
const ForceGraphPage=()=>{
    return (
        <div className={styles.containerPageForce}>
            <ForceDirectContainer/>
        </div>        
    );
};
export default ForceGraphPage;