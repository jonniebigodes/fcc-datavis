webpackJsonp([0x87d60a504988],{185:function(e,t){e.exports={layoutContext:{}}},277:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(325),c=r(u),l=n(185),f=r(l);t.default=function(e){return i.default.createElement(c.default,o({},e,f.default))},e.exports=t.default},76:function(e,t,n){e.exports={default:n(81),__esModule:!0}},77:function(e,t,n){e.exports={default:n(82),__esModule:!0}},78:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(76),a=r(o);t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},79:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},81:function(e,t,n){n(94),e.exports=n(8).Object.assign},82:function(e,t,n){n(95),e.exports=n(8).Object.keys},88:function(e,t,n){"use strict";var r=n(20),o=n(39),a=n(28),i=n(34),u=n(63),c=Object.assign;e.exports=!c||n(14)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=r})?function(e,t){for(var n=i(e),c=arguments.length,l=1,f=o.f,s=a.f;c>l;)for(var d,p=u(arguments[l++]),T=f?r(p).concat(f(p)):r(p),E=T.length,h=0;E>h;)s.call(p,d=T[h++])&&(n[d]=p[d]);return n}:c},92:function(e,t,n){var r=n(13),o=n(8),a=n(14);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},94:function(e,t,n){var r=n(13);r(r.S+r.F,"Object",{assign:n(88)})},95:function(e,t,n){var r=n(34),o=n(20);n(92)("keys",function(){return function(e){return o(r(e))}})},170:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=i.call(e),t=i.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var s=u(e),d=u(t)}catch(e){return!1}if(s.length!=d.length)return!1;for(s.sort(),d.sort(),a=s.length-1;a>=0;a--)if(s[a]!=d[a])return!1;for(a=s.length-1;a>=0;a--)if(f=s[a],!l(e[f],t[f],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(172),c=n(171),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},171:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},172:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},174:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},100:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a(g+e)}function a(e){return e.replace(/^\/\//g,"/")}function i(e,t){var n=(0,O.createLocation)(e,null,null,t.location);return n.pathname=o(n.pathname),n}t.__esModule=!0,t.navigateTo=void 0;var u=n(78),c=r(u),l=n(77),f=r(l),s=n(79),d=r(s),p=n(41),T=r(p),E=n(62),h=r(E),A=n(61),y=r(A);t.withPrefix=o;var m=n(1),_=r(m),b=n(58),S=n(2),v=r(S),O=n(68),g="/";g="/fcc-datavis";var R={activeClassName:v.default.string,activeStyle:v.default.object,exact:v.default.bool,strict:v.default.bool,isActive:v.default.func,location:v.default.object},P=function(e,t){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},M=function(e){function t(n,r){(0,T.default)(this,t);var o=(0,h.default)(this,e.call(this)),a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var u=r.router.history,c=i(n.to,u);return o.state={path:(0,O.createPath)(c),to:c,IOSupported:a},o.handleRef=o.handleRef.bind(o),o}return(0,y.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=i(e.to,history);this.setState({path:(0,O.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.path)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&P(e,function(){___loader.enqueue(t.state.path)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,d.default)(t,["onClick"]),o=void 0;return o=(0,f.default)(R).some(function(t){return e.props[t]})?b.NavLink:b.Link,_.default.createElement(o,(0,c.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.path;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),a=document.getElementById(o);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.path)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},t}(_.default.Component);M.propTypes=(0,c.default)({},R,{innerRef:v.default.func,onClick:v.default.func,to:v.default.oneOfType([v.default.string,v.default.object]).isRequired}),M.contextTypes={router:v.default.object},t.default=M;t.navigateTo=function(e){window.___navigateTo(e)}},203:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),d=n(2),p=r(d),T=n(222),E=r(T),h=n(170),A=r(h),y=n(204),m=n(109),_=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,A.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case m.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case m.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=i,t.titleAttributes=c({},a),t));case m.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case m.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case m.TAG_NAMES.LINK:case m.TAG_NAMES.META:case m.TAG_NAMES.NOSCRIPT:case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),s.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},S=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(b),v=_(S);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},109:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},204:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),c=n(7),l=r(c),f=n(109),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=A(e,f.TAG_NAMES.TITLE),n=A(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return A(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},h=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();t.indexOf(c)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===f.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([f.TAG_PROPERTIES.HREF],e),bodyAttributes:T(f.ATTRIBUTE_NAMES.BODY,e),defer:A(e,f.HELMET_PROPS.DEFER),encode:A(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(f.ATTRIBUTE_NAMES.HTML,e),linkTags:h(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:h(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:h(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(f.ATTRIBUTE_NAMES.TITLE,e)}},m=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){m(t)},0)}}(),_=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:e.cancelAnimationFrame||_,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,g=function(e){O&&S(O),e.defer?O=b(function(){R(e,function(){O=null})}):(R(e),O=null)},R=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,d=e.title,p=e.titleAttributes;w(f.TAG_NAMES.BODY,r),w(f.TAG_NAMES.HTML,o),M(d,p);var T={baseTag:C(f.TAG_NAMES.BASE,n),linkTags:C(f.TAG_NAMES.LINK,a),metaTags:C(f.TAG_NAMES.META,i),noscriptTags:C(f.TAG_NAMES.NOSCRIPT,u),scriptTags:C(f.TAG_NAMES.SCRIPT,l),styleTags:C(f.TAG_NAMES.STYLE,s)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=T[e].oldTags)}),t&&t(),c(e,E,h)},P=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),w(f.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var s=a.indexOf(c);s!==-1&&a.splice(s,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),a=P(t);return o?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),a=j(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,a,t)]},x=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},k=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return L(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,d=void 0===s?"":s,p=e.titleAttributes;return{base:k(f.TAG_NAMES.BASE,t,r),bodyAttributes:k(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(f.ATTRIBUTE_NAMES.HTML,o,r),link:k(f.TAG_NAMES.LINK,a,r),meta:k(f.TAG_NAMES.META,i,r),noscript:k(f.TAG_NAMES.NOSCRIPT,u,r),script:k(f.TAG_NAMES.SCRIPT,c,r),style:k(f.TAG_NAMES.STYLE,l,r),title:k(f.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=g,t.mapStateOnServer=D,t.reducePropsToState=y,t.requestAnimationFrame=b,t.warn=v}).call(t,function(){return this}())},222:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),c=r(u),l=n(174),f=r(l),s=n(224),d=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function s(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),s()},t.prototype.render=function(){return c.default.createElement(l,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=f.default.canUseDOM,E}}},224:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var f=e[l],s=t[l];if(o=n?n.call(r,f,s,l):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},177:function(e,t){e.exports={footerText:"src-components-Footer----footer-style-module---footerText---3EW-H",foots:"src-components-Footer----footer-style-module---foots---1dxmB"}},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(177),u=r(i),c=function(){return a.default.createElement("footer",{className:u.default.foots},a.default.createElement("div",{className:u.default.footerText},"Made by ",a.default.createElement("a",{href:"https://www.freecodecamp.com/jonniebigodes",target:"_blank",rel:"nofollow"},"Jonniebigodes")),a.default.createElement("div",{className:u.default.footerText},"Github repository: ",a.default.createElement("a",{href:"https://github.com/jonniebigodes/fcc-datavis",target:"_blank",rel:"nofollow"},"Data Visualization Challenges")))};t.default=c,e.exports=t.default},178:function(e,t){e.exports={header:"src-components-Header----header-style-module---header---tmPR-",containerDataVis:"src-components-Header----header-style-module---containerDataVis---2ni9M",link:"src-components-Header----header-style-module---link---4PSni"}},132:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(100),u=r(i),c=n(178),l=r(c),f=function(){return a.default.createElement("div",{className:l.default.header},a.default.createElement("div",{className:l.default.containerDataVis},a.default.createElement("h1",{style:{margin:0}},a.default.createElement(u.default,{to:"/",style:{color:"white",textDecoration:"none"}},"Supercalifragilistic Data Visualization"))))};t.default=f,e.exports=t.default},325:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(1),u=r(i),c=n(203),l=r(c),f=n(131),s=r(f),d=n(132),p=r(d);n(374);var T=function(e){var t=e.children;return u.default.createElement("div",{style:{background:"#f4f4f4"}},u.default.createElement(l.default,{title:"freeCodeCamp Data Visualization Projects",meta:[{name:"description",content:"freeCodeCamp Data Visualization "},{name:"keywords",content:"react, d3, bar chart, heat map, force direct graph,scatter graph, maps,data visualization,gatsbyjs"},{name:"author",content:"jonniebigodes"}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}]}),u.default.createElement(p.default,null),u.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0,background:"#f4f4f4"}},t()),u.default.createElement("div",{style:{marginBottom:"0.02rem",paddingBottom:0}},u.default.createElement(s.default,null)))};T.propTypes={children:a.default.func},t.default=T,e.exports=t.default},374:function(e,t){}});
//# sourceMappingURL=component---src-layouts-layout-projects-js-494430669a23c9804a5b.js.map