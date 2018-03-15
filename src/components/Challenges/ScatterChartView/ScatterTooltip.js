import React from 'react';
import PropTypes from 'prop-types';
import '../../../Assets/css/scatterGraph.css';
const showInfo=()=>{
    return(
        <div>
            <div className="tooltipText">
                Mouse over a circle to show information
            </div>
        </div>
    )
}
const showData=value=>{
    return(
        <div className="toolTipText">
            <div>{value.Name} from {value.Nationality} with a time of {value.Time} finished in {value.Place}th place.</div>
            <div>{value.Doping==="No Allegations"?`Clean as a whistle`:`With doping alegations`}</div>
        </div>  
    )
}
const ScatterTooltip=({data})=>{
    
    // const styles={
    //     toolTip:{
    //         width:550, 
    //         height:50,
    //         margin:20,
    //         fontSize:14,
    //         fontFamily:'Merriweather',
    //         backgroundColor:data.Doping==="No Allegations"?"#14892a":"#ed0909",
    //         textAlign:'center',
    //         color:'#ffffff'
    //     }
    // };

    return (
         <div className="containerToolTip">
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
}
export default ScatterTooltip;