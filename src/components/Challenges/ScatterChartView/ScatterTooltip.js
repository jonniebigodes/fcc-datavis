import React from 'react';
<<<<<<< HEAD
const ScatterTooltip=({data,position})=>{
    
    const styles={
        toolTip:{
            width:600, 
            height:50,
            margin:20,
            fontSize:14,
            fontFamily:'Merriweather',
            backgroundColor:data.Doping=="No Allegations"?"#1aa33a":"#a2371a",
            textAlign:'center'
=======

const ScatterTooltip=({display,position,data})=>{
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
>>>>>>> parent of a57af93... Changed tooltips for heat and scatter chart added config for github publish and configured the fonts using the gatsby google font package
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
            <span>{data.Name} from {data.Nationality} with a time of {data.Time} finished in {data.Place}th place.</span><br/>
            <span>{data.Doping==="No Allegations"?`Clean as a whistle`:`With doping alegations`}</span>
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
export default ScatterTooltip;