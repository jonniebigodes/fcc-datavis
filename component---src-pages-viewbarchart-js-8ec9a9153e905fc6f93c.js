webpackJsonp([45884307291589],{99:function(e,t,n){!function(e,n){n(t)}(this,function(e){"use strict";function t(e){return"translate("+(e+.5)+",0)"}function n(e){return"translate(0,"+(e+.5)+")"}function a(e){return function(t){return+e(t)}}function r(e){var t=Math.max(0,e.bandwidth()-1)/2;return e.round()&&(t=Math.round(t)),function(n){return+e(n)+t}}function o(){return!this.__axis}function i(e,i){function l(t){var n=null==s?i.ticks?i.ticks.apply(i,u):i.domain():s,l=null==c?i.tickFormat?i.tickFormat.apply(i,u):d:c,f=Math.max(y,0)+w,E=i.range(),C=+E[0]+.5,M=+E[E.length-1]+.5,S=(i.bandwidth?r:a)(i.copy()),O=t.selection?t.selection():t,B=O.selectAll(".domain").data([null]),D=O.selectAll(".tick").data(n,i).order(),A=D.exit(),V=D.enter().append("g").attr("class","tick"),j=D.select("line"),k=D.select("text");B=B.merge(B.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),D=D.merge(V),j=j.merge(V.append("line").attr("stroke","#000").attr(x+"2",T*y)),k=k.merge(V.append("text").attr("fill","#000").attr(x,T*f).attr("dy",e===p?"0em":e===m?"0.71em":"0.32em")),t!==O&&(B=B.transition(t),D=D.transition(t),j=j.transition(t),k=k.transition(t),A=A.transition(t).attr("opacity",b).attr("transform",function(e){return isFinite(e=S(e))?_(e):this.getAttribute("transform")}),V.attr("opacity",b).attr("transform",function(e){var t=this.parentNode.__axis;return _(t&&isFinite(t=t(e))?t:S(e))})),A.remove(),B.attr("d",e===g||e==h?"M"+T*v+","+C+"H0.5V"+M+"H"+T*v:"M"+C+","+T*v+"V0.5H"+M+"V"+T*v),D.attr("opacity",1).attr("transform",function(e){return _(S(e))}),j.attr(x+"2",T*y),k.attr(x,T*f).text(l),O.filter(o).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===h?"start":e===g?"end":"middle"),O.each(function(){this.__axis=S})}var u=[],s=null,c=null,y=6,v=6,w=3,T=e===p||e===g?-1:1,x=e===g||e===h?"x":"y",_=e===p||e===m?t:n;return l.scale=function(e){return arguments.length?(i=e,l):i},l.ticks=function(){return u=f.call(arguments),l},l.tickArguments=function(e){return arguments.length?(u=null==e?[]:f.call(e),l):u.slice()},l.tickValues=function(e){return arguments.length?(s=null==e?null:f.call(e),l):s&&s.slice()},l.tickFormat=function(e){return arguments.length?(c=e,l):c},l.tickSize=function(e){return arguments.length?(y=v=+e,l):y},l.tickSizeInner=function(e){return arguments.length?(y=+e,l):y},l.tickSizeOuter=function(e){return arguments.length?(v=+e,l):v},l.tickPadding=function(e){return arguments.length?(w=+e,l):w},l}function l(e){return i(p,e)}function u(e){return i(h,e)}function s(e){return i(m,e)}function c(e){return i(g,e)}var f=Array.prototype.slice,d=function(e){return e},p=1,h=2,m=3,g=4,b=1e-6;e.axisTop=l,e.axisRight=u,e.axisBottom=s,e.axisLeft=c,Object.defineProperty(e,"__esModule",{value:!0})})},270:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),i=n(1),l=a(i),u=n(271),s=a(u),c=function(e){var t=e.scales,n=e.margins,a=e.svgDimensions,r=a.height,o=a.width,i={orient:"Bottom",scale:t.xScale,translate:"translate(0, "+(r-n.bottom)+")",tickSize:r-n.top-n.bottom},u={orient:"Left",scale:t.yScale,translate:"translate("+n.left+", 0)",tickSize:o-n.left-n.right};return l.default.createElement("g",null,l.default.createElement(s.default,i),l.default.createElement(s.default,u))};c.propTypes={scales:o.default.shape({yScale:o.default.func,xScale:o.default.func}),margins:o.default.shape({top:o.default.number,right:o.default.number,bottom:o.default.number,left:o.default.number}),svgDimensions:o.default.shape({width:o.default.number,height:o.default.number})},t.default=c,e.exports=t.default},271:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(99),s=r(u),c=n(2),f=a(c),d=n(1),p=a(d),h=n(21),m=n(194),g=a(m),b=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){this.renderAxis()},t.prototype.componentDidUpdate=function(){this.renderAxis()},t.prototype.renderAxis=function(){var e=this.props,t=e.orient,n=e.scale,a=e.tickSize,r="axis"+t,o=s[r]().scale(n).tickSize(-a);(0,h.select)(this.axisElement).call(o)},t.prototype.render=function(){var e=this,t=this.props,n=t.orient,a=t.translate;return p.default.createElement("g",{className:g.default.Axis+" "+g.default.Axis+"-"+n,ref:function(t){e.axisElement=t},transform:a})},t}(d.Component);b.propTypes={orient:f.default.string,scale:f.default.func,translate:f.default.string,tickSize:f.default.number},t.default=b,e.exports=t.default},272:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=a(l),s=n(77),c=a(s),f=n(37),d=a(f),p=n(59),h=a(p),m=n(273),g=a(m),b=n(275),y=a(b),v=n(194),w=a(v),T=function(e){function t(){var n,a,i;r(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=a=o(this,e.call.apply(e,[this].concat(u))),a.state={isLoading:!0,isError:!1,fullchartData:[],isToolTipActive:!1,gdpInfo:{},chartWidth:0},a.setChartWidth=function(e){return.8*e},a.setChartDimensions=function(){var e=a.state.chartWidth,t=0;a.chartContainer?(t=a.chartContainer.getBoundingClientRect().width,t=a.chartContainer.getBoundingClientRect().width<=768?a.setChartWidth(a.chartContainer.getBoundingClientRect().width):a.chartContainer.getBoundingClientRect().width,t!==e&&a.setState({chartWidth:t})):(t=window.innerWidth>=960?900:window.innerWidth,t!==e&&a.setState({chartWidth:t}))},a.activateToolTip=function(e){a.setState({isToolTipActive:!0,gdpInfo:e})},a.deactivateToolTip=function(){a.setState({isToolTipActive:!1,gdpInfo:{}})},a.handlePreloadShutdown=function(){a.setState({isLoading:!1})},i=n,o(a,i)}return i(t,e),t.prototype.componentDidMount=function(){var e=this;"undefined"!=typeof window&&(this.setChartDimensions(),window.addEventListener("resize",this.setChartDimensions)),setTimeout(function(){var t=JSON.parse(c.default.getStorageData("barsdata"));if(t){var n=t.map(function(e){return{dateTime:e.dateTime,domesticValue:Number(e.domesticValue)}});e.setState({fullchartData:n})}else e.fetchData()},2500)},t.prototype.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.setChartDimensions)},t.prototype.fetchData=function(){var e=this;fetch("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json").then(function(e){return e.json()}).then(function(t){var n=t.data.map(function(e){return{dateTime:e[0],domesticValue:Number(e[1].toFixed(2))}});c.default.setStorageData("barsdata",n),e.setState({fullchartData:n})}).catch(function(t){console.log("===================================="),console.log("error getting the barchart data:"+JSON.stringify(t,null,2)),console.log("===================================="),e.setState({isError:!0})})},t.prototype.render=function(){var e=this,t=this.state,n=t.isError,a=t.isLoading,r=t.fullchartData,o=t.isToolTipActive,i=t.gdpInfo,l=t.chartHeight,s=t.chartWidth;return n?u.default.createElement(h.default,null):a?u.default.createElement(d.default,{chartName:"bar",turnDownPreload:this.handlePreloadShutdown}):r.length?u.default.createElement("div",{ref:function(t){e.chartContainer=t},className:w.default.BarShow},u.default.createElement("div",{className:w.default.BarTitle},"Federal Reserve Economic Data on Gross Domestic Product in the USA"),u.default.createElement("div",{className:w.default.containerBar},u.default.createElement("div",null,u.default.createElement(y.default,{dataChart:r,enableToolTip:this.activateToolTip,disableToolTip:this.deactivateToolTip,chartDimensions:{svgWidth:s,svgHeight:l}})),u.default.createElement("div",null,u.default.createElement(g.default,{data:o?i:null}))),u.default.createElement("p",null,u.default.createElement("span",{className:w.default.BarFooterText},"Units: Billions of Dollars. Seasonal Adjustment: Seasonally Adjusted Annual Rate Notes: A Guide to the National Income and Product Accounts of the United States (NIPA) (http://www.bea.gov/national/pdf/nipaguid.pdf)"))):void 0},t}(l.Component);t.default=T,e.exports=t.default},273:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),i=n(1),l=a(i),u=n(194),s=a(u),c=function(){return l.default.createElement("p",null,l.default.createElement("span",{className:s.default.bartooltipText},"Mouse over the chart to show information"))},f=function(e){return l.default.createElement("p",null,l.default.createElement("span",{className:s.default.bartooltipText},"In ",e.dateTime," the domestic value was ",e.domesticValue," ."))},d=function(e){var t=e.data;return l.default.createElement("div",{className:s.default.containerToolTip},t?f(t):c())};d.propTypes={data:o.default.shape({dateTime:o.default.string,domesticValue:o.default.number})},t.default=d,e.exports=t.default},274:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(100),u=n(33),s=n(2),c=a(s),f=n(1),d=a(f),p=n(276),h=a(p),m=function(e){function t(){var n,a,i;r(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=a=o(this,e.call.apply(e,[this].concat(u))),a.barMouseOverHandler=function(e){var t=a.props.barMouseOver;t(e)},a.barMouseOutHandler=function(){var e=a.props.barMouseLeave;e()},i=n,o(a,i)}return i(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.scales,a=t.margins,r=t.bardata,o=t.svgDimensions,i=t.maxValue,s=n.xScale,c=n.yScale,f=o.height,p=o.width,m=Math.ceil(p/r.length),g=(0,u.scaleLinear)().domain([0,i]).range(["#d2c9aa","#c0b283"]).interpolate(l.interpolateLab),b=r.map(function(t){return d.default.createElement(h.default,{key:"gdpbar_"+t.dateTime,gdpnode:{x:s(new Date(t.dateTime)),y:c(Number(t.domesticValue)),height:f-a.bottom-n.yScale(Number(t.domesticValue)),width:m,fill:g(Number(t.domesticValue)),gdpdata:t},gdpEnter:e.barMouseOverHandler,gdpLeave:e.barMouseOutHandler})});return d.default.createElement("g",null,b)},t}(f.PureComponent);m.propTypes={scales:c.default.shape({xScale:c.default.func,yScale:c.default.func}),margins:c.default.shape({top:c.default.number,right:c.default.number,bottom:c.default.number,left:c.default.number}),bardata:c.default.arrayOf(c.default.shape({dateTime:c.default.string,domesticValue:c.default.number})),maxValue:c.default.number,svgDimensions:c.default.shape({width:c.default.number,height:c.default.number}),barMouseOver:c.default.func,barMouseLeave:c.default.func},t.default=m,e.exports=t.default},275:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(33),u=n(2),s=a(u),c=n(1),f=a(c),d=n(270),p=a(d),h=n(274),m=a(h),g=function(e){function t(){var n,a,i;r(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=a=o(this,e.call.apply(e,[this].concat(u))),a.onMouseOverHandler=function(e){var t=a.props.enableToolTip;t(e)},a.onMouseLeaveHandler=function(){var e=a.props.disableToolTip;e()},i=n,o(a,i)}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.dataChart,n=e.chartDimensions,a={top:30,right:10,bottom:40,left:50},r={width:Math.max(n.svgWidth,300),height:450},o=Math.max.apply(Math,t.map(function(e){return e.domesticValue})),i=new Date(t[0].dateTime),u=new Date(t[t.length-1].dateTime),s=(0,l.scaleTime)().domain([i,u]).range([a.left,r.width-a.right]),c=(0,l.scaleLinear)().domain([0,o]).range([r.height-a.bottom,a.top]);return f.default.createElement("svg",{width:r.width,height:r.height,viewBox:"0 0 "+r.width+" "+r.height,preserveAspectRatio:"xMidYMid meet"},f.default.createElement("g",null,f.default.createElement(p.default,{scales:{xScale:s,yScale:c},margins:a,svgDimensions:{height:r.height,width:r.width}}),f.default.createElement(m.default,{scales:{xScale:s,yScale:c},margins:a,bardata:t,maxValue:o,svgDimensions:{height:r.height,width:r.width},barMouseOver:this.onMouseOverHandler,barMouseLeave:this.onMouseLeaveHandler})))},t}(c.Component);g.propTypes={dataChart:s.default.arrayOf(s.default.shape({dateTime:s.default.string,domesticValue:s.default.number})),chartDimensions:s.default.shape({svgWidth:s.default.number,svgHeight:s.default.number,margins:s.default.shape({top:s.default.number,right:s.default.number,bottom:s.default.number,left:s.default.number})}),enableToolTip:s.default.func,disableToolTip:s.default.func},t.default=g,e.exports=t.default},276:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),u=a(l),s=n(1),c=a(s),f=function(e){function t(){var n,a,i;r(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=a=o(this,e.call.apply(e,[this].concat(u))),a.onGdpEnter=function(){var e=a.props,t=e.gdpEnter,n=e.gdpnode;t(n.gdpdata)},a.onGdpLeave=function(){var e=a.props.gdpLeave;e()},i=n,o(a,i)}return i(t,e),t.prototype.render=function(){var e=this.props.gdpnode;return c.default.createElement("rect",{key:"gdpbar_"+e.gdpdata.dateTime,x:e.x,y:e.y,height:e.height,width:e.width,fill:e.fill,onMouseOver:this.onGdpEnter,onFocus:this.onGdpEnter,onMouseOut:this.onGdpLeave,onBlur:this.onGdpLeave})},t}(s.PureComponent);f.propTypes={gdpnode:u.default.shape({x:u.default.number,y:u.default.number,height:u.default.number,width:u.default.number,fill:u.default.string,gdpdata:u.default.shape({dateTime:u.default.string,domesticValue:u.default.number})}),gdpEnter:u.default.func,gdpLeave:u.default.func},t.default=f,e.exports=t.default},194:function(e,t){e.exports={containerBarChart:"src-components-Challenges-BarChartView----bar-style-module---containerBarChart---1cyDo",containerBar:"src-components-Challenges-BarChartView----bar-style-module---containerBar---CfQ_2",BarShow:"src-components-Challenges-BarChartView----bar-style-module---BarShow---Gf_17",containerToolTip:"src-components-Challenges-BarChartView----bar-style-module---containerToolTip---GRbOA",Axis:"src-components-Challenges-BarChartView----bar-style-module---Axis---2ytg5","Axis-Bottom":"src-components-Challenges-BarChartView----bar-style-module---Axis-Bottom---1W0o5",BarTitle:"src-components-Challenges-BarChartView----bar-style-module---BarTitle---20KZW",BarFooterText:"src-components-Challenges-BarChartView----bar-style-module---BarFooterText---1P3NP",bartooltipText:"src-components-Challenges-BarChartView----bar-style-module---bartooltipText---6dxkq"}},328:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),i=n(30),l=a(i),u=n(272),s=a(u),c=function(){return o.default.createElement("div",null,o.default.createElement(l.default,{title:"Super Duper Bar Chart",meta:[{name:"description",content:"freeCodeCamp DataVis Challenges,Bar Chart"},{name:"keywords",content:"react, gatsby,challenges,d3,bar chart"},{name:"author",content:"jonniebigodes"}]}),o.default.createElement(s.default,null))};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-viewbarchart-js-8ec9a9153e905fc6f93c.js.map