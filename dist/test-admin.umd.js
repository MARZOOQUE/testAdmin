(function(E,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("react"),require("react-admin")):typeof define=="function"&&define.amd?define(["exports","react","react-admin"],m):(E=typeof globalThis<"u"?globalThis:E||self,m(E.TestAdmin={},E.require$$0,E.reactAdmin))})(this,function(E,m,Q){"use strict";var B={exports:{}},P={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function xe(){if(ee)return P;ee=1;var k=m,C=Symbol.for("react.element"),D=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,W=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function F(R,f,O){var v,b={},_=null,L=null;O!==void 0&&(_=""+O),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(L=f.ref);for(v in f)y.call(f,v)&&!Y.hasOwnProperty(v)&&(b[v]=f[v]);if(R&&R.defaultProps)for(v in f=R.defaultProps,f)b[v]===void 0&&(b[v]=f[v]);return{$$typeof:C,type:R,key:_,ref:L,props:b,_owner:W.current}}return P.Fragment=D,P.jsx=F,P.jsxs=F,P}var j={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Pe(){return re||(re=1,process.env.NODE_ENV!=="production"&&function(){var k=m,C=Symbol.for("react.element"),D=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),R=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),ne=Symbol.iterator,ke="@@iterator";function De(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[ke];return typeof r=="function"?r:null}var S=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Fe("error",e,t)}}function Fe(e,r,t){{var n=S.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ae=!1,Ie=!1,We=!1,Ye=!1,Le=!1,ae;ae=Symbol.for("react.module.reference");function $e(e){return!!(typeof e=="string"||typeof e=="function"||e===y||e===Y||Le||e===W||e===O||e===v||Ye||e===L||Ae||Ie||We||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===b||e.$$typeof===F||e.$$typeof===R||e.$$typeof===f||e.$$typeof===ae||e.getModuleId!==void 0))}function Ne(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function oe(e){return e.displayName||"Context"}function h(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case D:return"Portal";case Y:return"Profiler";case W:return"StrictMode";case O:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return oe(r)+".Consumer";case F:var t=e;return oe(t._context)+".Provider";case f:return Ne(e,e.render,"ForwardRef");case b:var n=e.displayName||null;return n!==null?n:h(e.type)||"Memo";case _:{var i=e,u=i._payload,o=i._init;try{return h(o(u))}catch{return null}}}return null}var T=Object.assign,A=0,ie,ue,se,le,fe,ce,de;function ve(){}ve.__reactDisabledLog=!0;function Me(){{if(A===0){ie=console.log,ue=console.info,se=console.warn,le=console.error,fe=console.group,ce=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function Ve(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:ie}),info:T({},e,{value:ue}),warn:T({},e,{value:se}),error:T({},e,{value:le}),group:T({},e,{value:fe}),groupCollapsed:T({},e,{value:ce}),groupEnd:T({},e,{value:de})})}A<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var G=S.ReactCurrentDispatcher,q;function $(e,r,t){{if(q===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);q=n&&n[1]||""}return`
`+q+e}}var J=!1,N;{var Ue=typeof WeakMap=="function"?WeakMap:Map;N=new Ue}function pe(e,r){if(!e||J)return"";{var t=N.get(e);if(t!==void 0)return t}var n;J=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=G.current,G.current=null,Me();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(g){n=g}Reflect.construct(e,[],o)}else{try{o.call()}catch(g){n=g}e.call(o.prototype)}}else{try{throw Error()}catch(g){n=g}e()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var a=g.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,l=d.length-1;s>=1&&l>=0&&a[s]!==d[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==d[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==d[l]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,p),p}while(s>=1&&l>=0);break}}}finally{J=!1,G.current=u,Ve(),Error.prepareStackTrace=i}var x=e?e.displayName||e.name:"",we=x?$(x):"";return typeof e=="function"&&N.set(e,we),we}function Be(e,r,t){return pe(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function M(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,Ge(e));if(typeof e=="string")return $(e);switch(e){case O:return $("Suspense");case v:return $("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Be(e.render);case b:return M(e.type,r,t);case _:{var n=e,i=n._payload,u=n._init;try{return M(u(i),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,be={},he=S.ReactDebugCurrentFrame;function U(e){if(e){var r=e._owner,t=M(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}function qe(e,r,t,n,i){{var u=Function.call.bind(V);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(U(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),U(null)),a instanceof Error&&!(a.message in be)&&(be[a.message]=!0,U(i),c("Failed %s type: %s",t,a.message),U(null))}}}var Je=Array.isArray;function z(e){return Je(e)}function ze(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ke(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function Ee(e){if(Ke(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ze(e)),ge(e)}var I=S.ReactCurrentOwner,He={key:!0,ref:!0,__self:!0,__source:!0},me,ye,K;K={};function Xe(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ze(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Qe(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=h(I.current.type);K[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',h(I.current.type),e.ref),K[t]=!0)}}function er(e,r){{var t=function(){me||(me=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function rr(e,r){{var t=function(){ye||(ye=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var tr=function(e,r,t,n,i,u,o){var a={$$typeof:C,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function nr(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(Ee(t),a=""+t),Ze(r)&&(Ee(r.key),a=""+r.key),Xe(r)&&(d=r.ref,Qe(r,i));for(u in r)V.call(r,u)&&!He.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&er(o,l),d&&rr(o,l)}return tr(e,a,d,i,n,I.current,o)}}var H=S.ReactCurrentOwner,Re=S.ReactDebugCurrentFrame;function w(e){if(e){var r=e._owner,t=M(e.type,e._source,r?r.type:null);Re.setExtraStackFrame(t)}else Re.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===C}function _e(){{if(H.current){var e=h(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ar(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Te={};function or(e){{var r=_e();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=or(r);if(Te[t])return;Te[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+h(e._owner.type)+"."),w(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),w(null)}}function Oe(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&Ce(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var i=De(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Z(o.value)&&Ce(o.value,r)}}}function ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===b))t=r.propTypes;else return;if(t){var n=h(r);qe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var i=h(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ur(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){w(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),w(null);break}}e.ref!==null&&(w(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),w(null))}}function Se(e,r,t,n,i,u){{var o=$e(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=ar(i);d?a+=d:a+=_e();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===C?(s="<"+(h(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=nr(e,r,t,i,u);if(l==null)return l;if(o){var p=r.children;if(p!==void 0)if(n)if(z(p)){for(var x=0;x<p.length;x++)Oe(p[x],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(p,e)}return e===y?ur(l):ir(l),l}}function sr(e,r,t){return Se(e,r,t,!0)}function lr(e,r,t){return Se(e,r,t,!1)}var fr=lr,cr=sr;j.Fragment=y,j.jsx=fr,j.jsxs=cr}()),j}process.env.NODE_ENV==="production"?B.exports=xe():B.exports=Pe();var te=B.exports;const je=({children:k,...C})=>{const D=m.Children.map(k,y=>m.cloneElement(y,{sortable:!1}));return te.jsx(Q.List,{sx:{"& .RaList-content":{boxShadow:"none"}},children:te.jsx(Q.Datagrid,{sx:{backgroundColor:"#FFFF","& .RaDatagrid-headerCell":{fontWeight:"bold",backgroundColor:"#E5E4E4",border:"1px solid #D7D6D6",fontSize:"14px"},"& .RaDatagrid-rowCell	":{border:"1px solid #D7D6D6"}},bulkActionButtons:!1,children:D})})};E.IGTable=je,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});