import React from 'react';
const ScatterTooltip=({data})=>{
    
    const styles={
        toolTip:{
            width:550, 
            height:50,
            margin:20,
            fontSize:14,
            fontFamily:'Merriweather',
            backgroundColor:data.Doping==="No Allegations"?"#14892a":"#ed0909",
            textAlign:'center',
            color:'#ffffff'
        }
    };  
    return (
         <div style={styles.toolTip}>
            <span>{data.Name} from {data.Nationality} with a time of {data.Time} finished in {data.Place}th place.</span><br/>
            <span>{data.Doping==="No Allegations"?`Clean as a whistle`:`With doping alegations`}</span>
        </div>
    );
};
export default ScatterTooltip;