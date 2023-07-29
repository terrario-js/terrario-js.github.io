"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Terrario\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/terrario-js/terrario-js.github.io/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},s={},p=[{value:"Terrario\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"terrario\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30d1\u30fc\u30b5\u30fc\u3092\u4f5c\u6210\u3059\u308b",id:"\u30d1\u30fc\u30b5\u30fc\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30d1\u30fc\u30b5\u30fc\u3092\u5b9f\u884c\u3057\u3066\u307f\u308b",id:"\u30d1\u30fc\u30b5\u30fc\u3092\u5b9f\u884c\u3057\u3066\u307f\u308b",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"terrario\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Terrario\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,a.kt)("p",null,"Terrario\u306fnpm\u3092\u4f7f\u3063\u3066\u7c21\u5358\u306b\u5c0e\u5165\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u73fe\u5728\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306bTerrario\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ npm i terrario\n")),(0,a.kt)("h2",{id:"\u30d1\u30fc\u30b5\u30fc\u3092\u4f5c\u6210\u3059\u308b"},"\u30d1\u30fc\u30b5\u30fc\u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("p",null,"Terrario\u306fTypeScript\u3068JavaScript\u306e\u4e21\u65b9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u65e9\u901f\u3001Node.js\u3067\u52d5\u4f5c\u3059\u308b\u57fa\u672c\u7684\u306a\u30d1\u30fc\u30b5\u30fc\u3092\u4f5c\u6210\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u7c21\u5358\u306a\u4f8b\u3068\u3057\u3066\u3001\u30b3\u30f3\u30de\u533a\u5207\u308a\u306e\u6570\u5b57\u304c\u5165\u3063\u305f\u6587\u5b57\u5217\u3092\u53d7\u3051\u53d6\u3063\u3066\u6570\u5024\u306e\u914d\u5217\u306b\u5909\u63db\u3059\u308b\u30d1\u30fc\u30b5\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u8a18\u8ff0\u3057\u3066index.js\u3068\u3044\u3046\u540d\u524d\u3067\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4eca\u56de\u306fJavaScript\u3067\u8a18\u8ff0\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const T = require('terrario');\n\nconst number = T.seq([\n  T.str(/[1-9]/),\n  T.str(/[0-9]/).many(0),\n]).text().map(x => {\n  return parseInt(x);\n});\nconst parser = T.sep(number, T.str(','));\n\nconsole.log(parser.parse('123,456'));\nconsole.log(parser.parse('222'));\nconsole.log(parser.parse('aaa'));\n")),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30b3\u30f3\u30d3\u30cd\u30fc\u30bf\u3068\u547c\u3070\u308c\u308b\u95a2\u6570\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30b3\u30f3\u30d3\u30cd\u30fc\u30bf\u306f\u5f15\u6570\u306e\u5185\u5bb9\u306b\u5fdc\u3058\u3066\u65b0\u3057\u3044\u30d1\u30fc\u30b5\u30fc\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"T.seq"),"\u306f\u30d1\u30fc\u30b5\u30fc\u306e\u914d\u5217\u3092\u53d7\u3051\u53d6\u3063\u3066\u3001\u305d\u308c\u3089\u3092\u9806\u756a\u306b\u9069\u7528\u3059\u308b\u30d1\u30fc\u30b5\u30fc\u3092\u751f\u6210\u3057\u307e\u3059\u3002\u6307\u5b9a\u3057\u305f\u9806\u756a\u901a\u308a\u306b\u5165\u529b\u6587\u5b57\u5217\u3092\u6d88\u8cbb\u3067\u304d\u305f\u5834\u5408\u306b\u306e\u307f\u3001\u305d\u306e\u30d1\u30fc\u30b5\u30fc\u306f\u6210\u529f\u3057\u305f\u3068\u307f\u306a\u3055\u308c\u307e\u3059\u3002  ")),(0,a.kt)("h2",{id:"\u30d1\u30fc\u30b5\u30fc\u3092\u5b9f\u884c\u3057\u3066\u307f\u308b"},"\u30d1\u30fc\u30b5\u30fc\u3092\u5b9f\u884c\u3057\u3066\u307f\u308b"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ node index.js\n")),(0,a.kt)("p",null,"\u51fa\u529b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{ success: true, value: [ 123, 456 ], index: 7 }\n{ success: true, value: [ 222 ], index: 3 }\n{ success: false, index: 0 }\n")),(0,a.kt)("p",null,"\u5165\u529b\u3057\u305f\u6587\u5b57\u5217\u304c\u6570\u5024\u306e\u914d\u5217\u306b\u5909\u63db\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u7121\u52b9\u306a\u5165\u529b\u306b\u5bfe\u3057\u3066\u306f\u5931\u6557\u3059\u308b\u3053\u3068\u3082\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3001\u6bd4\u8f03\u7684\u5c11\u306a\u3044\u8a18\u8ff0\u3067\u30d1\u30fc\u30b5\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002"))}d.isMDXComponent=!0}}]);