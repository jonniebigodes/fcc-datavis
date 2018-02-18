import React from 'react';

const HeatToolTip=({data})=>{
    const styles={
        toolTip:{
            width:600,
            height:30,
            fontSize:14
        }
    }
    return (
        <div style={styles.toolTip}>
            <span>  In {getMonts(data.month)} of {data.year} the temperature was:{dataTemp} with a variance of: {data.variance}</span>
        </div>
    );
};
export default HeatToolTip;