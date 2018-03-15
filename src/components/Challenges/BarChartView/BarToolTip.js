import React from 'react';
import PropTypes from 'prop-types';
import '../../../Assets/css/barChart.css';

const showInfo=()=>{
    return(
        <div>
            <div className="tooltipText">
                Mouse over a bar 
            </div>
            <div className="tooltipText">
                to show you information
            </div>
        </div>
    )
};
const showData=value=>{

    return(
        <div>
            <div className="tooltipText">In</div>
            <div className="tooltipText">{value.dateTime}</div>
            <div className="tooltipText">Domestic value</div>
            <div className="tooltipText">{value.domesticValue}</div>
        </div>
    )
};

const BarChartToolTip=({data})=>{
    // let visibility="hidden";
    // let transform="";
    // let x=0,y=0;
    // let width=150,height=70;
    // let transformText=`translate(${width/2},${height/2})`;
    // let transformArrow="";

    // let dateTime="";
    // let valueDomestic="";

    // if (data!==undefined){
    //     dateTime= data.dateTime;
    //     valueDomestic= data.domesticValue;
    // }
    // if (display){
       
    //     x=position.x;
    //     y=position.y;
    //     visibility="visible";
    //     if (y>height){
    //         /* transform=`translate(${x-width/2},${y-height/20})`;
    //         transformArrow=`translate(${width/2-20},${height-2})`; */
    //         transform=`translate(${x-width/2},${Math.round(y)+20})`;
    //         transformArrow=`translate(${width/2-20},0) rotate(180,20,0)`;
    //     }
    //     else if(y<height){
    //         // transform=`translate(${x-width/2},${Math.round(y)+20})`;
    //         // transformArrow=`translate(${width/2-20},0) rotate(180,20,0)`;
    //         transform=`translate(${x-width/2},${y-height/20})`;
    //         transformArrow=`translate(${width/2-20},${height-2})`;
    //     }
    // }
    // else{
    //     visibility="hidden";
    // }
    // return (
    //     <g transform={transform}>
    //         <rect class="shadow" is width={width} 
    //             height={height} rx="5" ry="5" visibility={visibility}
    //             fill="#16961f" opacity=".9"
    //             />
    //         <polygon class="shadow" is points="10,0  30,0  20,10" transform={transformArrow}
    //                      fill="#16961f" opacity=".9" visibility={visibility}/>
    //         <text is visibility={visibility} transform={transformText}>
    //                 <tspan is x="0" text-anchor="middle" font-size="15px" fill="#ffffff">{`In ${dateTime}`}</tspan>
    //                 <tspan is x="0" text-anchor="middle" dy="25" font-size="20px" fill="#dce6e8">{`$${valueDomestic}`}</tspan>
    //         </text>
    //     </g>
    // );
    return(
        <div className="containerToolTip">
            {data?showData(data):showInfo()}
        </div>
    );
};
BarChartToolTip.propTypes={
    data:PropTypes.shape({
        dateTime:PropTypes.string,
        domesticValue:PropTypes.number
    })
};

export default BarChartToolTip;