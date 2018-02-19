import React from 'react';

const getMonts=value=>{
    const listOfMonts=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return listOfMonts[value-1];
}
const HeatToolTip=({data,dataTemp})=>{
    console.log('====================================');
    console.log(`fill color:${data.toolColor}`);
    console.log('====================================');
    const styles={
        toolTip:{
            width:600,
            height:30,
            fontSize:14,
            backgroundColor:data.toolColor
        }
    }
    return (
        <div style={styles.toolTip}>
            <span>  In {getMonts(data.month)} of {data.year} the temperature was:{dataTemp} with a variance of: {data.variance}</span>
        </div>
    );
};
export default HeatToolTip;