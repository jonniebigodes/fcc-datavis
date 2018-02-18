import React from 'react';

const HeatToolTip=({display,position,data})=>{
    let visibility="hidden";
    let transform="";
    let x=0,y=0;
    let width=150,height=70;
    let transformText=`translate(${width/2},${height/2})`;
    let transformArrow="";

    let dateTime="";
    let valueDomestic="";
    // console.log('====================================');
    // console.log(`BarChartToolTip display:${display} data:${JSON.stringify(data,null,2)}`);
    // console.log('====================================');
    if (data!==undefined){
        // console.log('====================================');
        // console.log(`BarChartToolTip data:${typeof data}`);
        // console.log('====================================');
        dateTime= data.dateTime;
        valueDomestic= data.domesticValue;
    }
    if (display){
        // console.log('====================================');
        // console.log(`BarChartToolTip display:${display} data:${JSON.stringify(data,null,2)}`);
        // console.log('====================================');
        x=position.x;
        y=position.y;
        visibility="visible";
        if (y>height){
            console.log('====================================');
            console.log(`y> height y:${y} height:${height}`);
            console.log('====================================');
            // transform=`translate(${x-width/2},${y-height/20})`;
            // transformArrow=`translate(${width/2-20},${height-2})`;
            transform=`translate(${x-width/2},${Math.round(y)+20})`;
            transformArrow=`translate(${width/2-20},0) rotate(180,20,0)`;
        }
        else if(y<height){
            console.log('====================================');
            console.log(`y< height y:${y} height:${height}`);
            console.log('====================================');
            // transform=`translate(${x-width/2},${Math.round(y)+20})`;
            // transformArrow=`translate(${width/2-20},0) rotate(180,20,0)`;
            transform=`translate(${x-width/2},${y-height/20})`;
            transformArrow=`translate(${width/2-20},${height-2})`;
        }
    }
    else{
        visibility="hidden";
    }
    return (
<<<<<<< HEAD
        <div style={styles.toolTip}>
            <span>  In {getMonts(data.month)} of {data.year} the temperature was:{dataTemp} with a variance of: {data.variance}</span>
        </div>
=======
        <g transform={transform}>
            <rect class="shadow" is width={width} 
                height={height} rx="5" ry="5" visibility={visibility}
                fill="#6391da" opacity=".9"
                />
            <polygon class="shadow" is points="10,0  30,0  20,10" transform={transformArrow}
                         fill="#6391da" opacity=".9" visibility={visibility}/>
            <text is visibility={visibility} transform={transformText}>
                    <tspan is x="0" text-anchor="middle" font-size="15px" fill="#ffffff">{dateTime}</tspan>
                    <tspan is x="0" text-anchor="middle" dy="25" font-size="20px" fill="#a9f3ff">{valueDomestic}</tspan>
            </text>
        </g>
>>>>>>> parent of a57af93... Changed tooltips for heat and scatter chart added config for github publish and configured the fonts using the gatsby google font package
    );
};
export default HeatToolTip;