"use strict";(self.webpackChunkudon_sharp=self.webpackChunkudon_sharp||[]).push([[3328],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,b=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7557:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={slug:"release-1.0.0b3",title:"Release 1.0.0b3",date:new Date("2021-09-19T00:00:00.000Z"),authors:["merlin"],tags:["release beta"]},s=void 0,c={permalink:"/news/release-1.0.0b3",source:"@site/news/releases/release-1.0.0b3.md",title:"Release 1.0.0b3",description:"Changelog",date:"2021-09-19T00:00:00.000Z",formattedDate:"September 19, 2021",tags:[{label:"release beta",permalink:"/news/tags/release-beta"}],truncated:!1,authors:[{name:"Merlin",title:"VRChat Developer",url:"https://github.com/merlinvr",imageURL:"https://github.com/merlinvr.png",key:"merlin"}],frontMatter:{slug:"release-1.0.0b3",title:"Release 1.0.0b3",date:"2021-09-19T00:00:00.000Z",authors:["merlin"],tags:["release beta"]},prevItem:{title:"Release 1.0.0b2",permalink:"/news/release-1.0.0b2"}},u={authorsImageUrls:[void 0]},p=[{value:"Changelog",id:"changelog",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix increment/decrement/compound assignment operators not converting numeric types of lower precision than int in some cases like on user defined properties, reported by @GlitchyDev"),(0,a.kt)("li",{parentName:"ul"},"Fix compile error when using static methods defined in other U# behaviours, reported by @GlitchyDev"),(0,a.kt)("li",{parentName:"ul"},"Add errors for when people attempt to use U# scripts that do not belong to a U# assembly, but are part of a C# assembly"),(0,a.kt)("li",{parentName:"ul"},"Optimize string interpolations and fix potential issues when using string interpolations in recursive methods")))}f.isMDXComponent=!0}}]);