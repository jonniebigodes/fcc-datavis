webpackJsonp([0x87d60a504988],{206:function(e,t){e.exports={layoutContext:{}}},264:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(1),i=a(r),u=n(321),l=a(u),s=n(206),c=a(s);t.default=function(e){return i.default.createElement(l.default,o({},e,c.default))},e.exports=t.default},78:function(e,t,n){e.exports={default:n(83),__esModule:!0}},79:function(e,t,n){e.exports={default:n(84),__esModule:!0}},80:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(78),r=a(o);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},81:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}},83:function(e,t,n){n(96),e.exports=n(6).Object.assign},84:function(e,t,n){n(97),e.exports=n(6).Object.keys},90:function(e,t,n){"use strict";var a=n(15),o=n(31),r=n(24),i=n(27),u=n(62),l=Object.assign;e.exports=!l||n(10)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=a})?function(e,t){for(var n=i(e),l=arguments.length,s=1,c=o.f,f=r.f;l>s;)for(var d,p=u(arguments[s++]),h=c?a(p).concat(c(p)):a(p),m=h.length,v=0;m>v;)f.call(p,d=h[v++])&&(n[d]=p[d]);return n}:l},94:function(e,t,n){var a=n(9),o=n(6),r=n(10);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],i={};i[e]=t(n),a(a.S+a.F*r(function(){n(1)}),"Object",i)}},96:function(e,t,n){var a=n(9);a(a.S+a.F,"Object",{assign:n(90)})},97:function(e,t,n){var a=n(27),o=n(15);n(94)("keys",function(){return function(e){return o(a(e))}})},101:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return r(E+e)}function r(e){return e.replace(/^\/\//g,"/")}function i(e,t){var n=(0,O.createLocation)(e,null,null,t.location);return n.pathname=o(n.pathname),n}t.__esModule=!0,t.navigateTo=void 0;var u=n(80),l=a(u),s=n(79),c=a(s),f=n(81),d=a(f),p=n(38),h=a(p),m=n(61),v=a(m),_=n(60),y=a(_);t.withPrefix=o;var g=n(1),b=a(g),w=n(56),x=n(2),j=a(x),O=n(70),E="/";E="/fcc-datavis";var M={activeClassName:j.default.string,activeStyle:j.default.object,exact:j.default.bool,strict:j.default.bool,isActive:j.default.func,location:j.default.object},k=function(e,t){var n=new window.IntersectionObserver(function(a){a.forEach(function(a){e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},T=function(e){function t(n,a){(0,h.default)(this,t);var o=(0,v.default)(this,e.call(this)),r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var u=a.router.history,l=i(n.to,u);return o.state={path:(0,O.createPath)(l),to:l,IOSupported:r},o.handleRef=o.handleRef.bind(o),o}return(0,y.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=i(e.to,history);this.setState({path:(0,O.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.path)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&k(e,function(){___loader.enqueue(t.state.path)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,a=(0,d.default)(t,["onClick"]),o=void 0;return o=(0,c.default)(M).some(function(t){return e.props[t]})?w.NavLink:w.Link,b.default.createElement(o,(0,l.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var a=e.state.path;if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),r=document.getElementById(o);return null!==r?(r.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.path)}return!0}},a,{to:this.state.to,innerRef:this.handleRef}))},t}(b.default.Component);T.propTypes=(0,l.default)({},M,{innerRef:j.default.func,onClick:j.default.func,to:j.default.oneOfType([j.default.string,j.default.object]).isRequired}),T.contextTypes={router:j.default.object},t.default=T;t.navigateTo=function(e){window.___navigateTo(e)}},196:function(e,t){e.exports={footerText:"src-components-Footer----footer-style-module---footerText---3EW-H",foots:"src-components-Footer----footer-style-module---foots---1dxmB"}},142:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),r=a(o),i=n(196),u=a(i),l=function(){return r.default.createElement("footer",{className:u.default.foots},r.default.createElement("div",{className:u.default.footerText},"Made by"," ",r.default.createElement("a",{href:"https://www.freecodecamp.com/jonniebigodes",target:"_noopener",rel:"nofollow"},"Jonniebigodes")),r.default.createElement("div",{className:u.default.footerText},"Github repository:"," ",r.default.createElement("a",{href:"https://github.com/jonniebigodes/fcc-datavis",target:"_noopener",rel:"nofollow"},"Data Visualization Challenges")))};t.default=l,e.exports=t.default},197:function(e,t){e.exports={header:"src-components-Header----header-style-module---header---tmPR-",containerDataVis:"src-components-Header----header-style-module---containerDataVis---2ni9M",link:"src-components-Header----header-style-module---link---4PSni"}},143:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),r=a(o),i=n(101),u=a(i),l=n(197),s=a(l),c=function(){return r.default.createElement("div",{className:s.default.header},r.default.createElement("div",{className:s.default.containerDataVis},r.default.createElement("h1",{style:{margin:0}},r.default.createElement(u.default,{to:"/",style:{color:"white",textDecoration:"none"}},"Supercalifragilistic Data Visualization"))))};t.default=c,e.exports=t.default},321:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),r=a(o),i=n(1),u=a(i),l=n(30),s=a(l),c=n(142),f=a(c),d=n(143),p=a(d);n(391);var h=function(e){var t=e.children;return u.default.createElement("div",{style:{background:"#f4f4f4"}},u.default.createElement(s.default,{title:"freeCodeCamp Data Visualization Projects",meta:[{name:"description",content:"freeCodeCamp Data Visualization "},{name:"keywords",content:"react, d3, bar chart, heat map, force direct graph,scatter graph, maps,data visualization,gatsbyjs"},{name:"author",content:"jonniebigodes"}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}]}),u.default.createElement(p.default,null),u.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0,background:"#f4f4f4"}},t()),u.default.createElement("div",{style:{marginBottom:"0.02rem",paddingBottom:0}},u.default.createElement(f.default,null)))};h.propTypes={children:r.default.func},t.default=h,e.exports=t.default},391:function(e,t){}});
//# sourceMappingURL=component---src-layouts-layout-projects-js-32b5f08de7bbc6ade841.js.map