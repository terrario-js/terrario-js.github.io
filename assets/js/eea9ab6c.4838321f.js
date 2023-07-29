"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},k="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(a),N=r,u=k["".concat(d,".").concat(N)]||k[N]||o[N]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=N;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[k]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},6137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},l="Class: Parser<U>",p={unversionedId:"api/classes/Parser",id:"api/classes/Parser",title:"Class: Parser<U>",description:"Parser class",source:"@site/docs/api/classes/Parser.md",sourceDirName:"api/classes",slug:"/api/classes/Parser",permalink:"/docs/api/classes/Parser",draft:!1,editUrl:"https://github.com/terrario-js/terrario-js.github.io/tree/main/docs/api/classes/Parser.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Classes",permalink:"/docs/category/classes"},next:{title:"API Docs (old page)",permalink:"/docs/api/api-old"}},d={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Properties",id:"properties",level:2},{value:"ctx",id:"ctx",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"_evalContext",id:"_evalcontext",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"exec",id:"exec",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"find",id:"find",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"findAll",id:"findall",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"many",id:"many",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"map",id:"map",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"option",id:"option",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"parse",id:"parse",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"state",id:"state",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"text",id:"text",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-14",level:4}],m={toc:s},k="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-parseru"},"Class: ",(0,r.kt)("inlineCode",{parentName:"h1"},"Parser<U>")),(0,r.kt)("p",null,"Parser class"),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"U"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),")"),(0,r.kt)("p",null,"Parser constructor"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"U"))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#strictparseropts"},(0,r.kt)("inlineCode",{parentName:"a"},"StrictParserOpts")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"U"),">")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L68"},"index.ts:68")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Parser"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),")"),(0,r.kt)("p",null,"Parser constructor (Lazy parser)"),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"U"))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#lazyparseropts"},(0,r.kt)("inlineCode",{parentName:"a"},"LazyParserOpts")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"U"),">")))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L74"},"index.ts:74")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"ctx"},"ctx"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ctx"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#parsercontext"},(0,r.kt)("inlineCode",{parentName:"a"},"ParserContext")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#lazycontext"},(0,r.kt)("inlineCode",{parentName:"a"},"LazyContext")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L61"},"index.ts:61")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L60"},"index.ts:60")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"_evalcontext"},"_","evalContext"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_evalContext"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#parsercontext"},(0,r.kt)("inlineCode",{parentName:"a"},"ParserContext")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("p",null,"Evaluate the lazy context."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#parsercontext"},(0,r.kt)("inlineCode",{parentName:"a"},"ParserContext")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L92"},"index.ts:92")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"exec"},"exec"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"exec"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"state?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"offset?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("p",null,"Execute the parser handler."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offset")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L109"},"index.ts:109")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"find"},"find"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"find"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"state?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">","  }"),(0,r.kt)("p",null,"Find a pattern from the input string."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">","  }"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L129"},"index.ts:129")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"findall"},"findAll"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"findAll"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"state?"),"): { ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">","  }[]"),(0,r.kt)("p",null,"Find all patterns from the input string."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,"{ ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">","  }[]"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L145"},"index.ts:145")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"many"},"many"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"many"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"min?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"max?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),"[]",">"),(0,r.kt)("p",null,"Create a new parser that tries to apply the parser iteratively."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"min?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"max?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),"[]",">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L195"},"index.ts:195")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"many"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),"[]",">"),(0,r.kt)("p",null,"Create a new parser that tries to apply the parser iteratively."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.max?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.min?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.notMatch?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),"[]",">"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L201"},"index.ts:201")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"map"},"map"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"V"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"fn"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,r.kt)("p",null,"Create a new parser that wraps the current parser.\nThe generated parser maps the result of the inner parser and returns it as a result."),(0,r.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"V"))))),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"U"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"V"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L163"},"index.ts:163")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"option"},"option"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"option"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("p",null,"Create a new parser that wraps the current parser.\nThe generated parser returns success regardless of whether the inner parser successfully matched.\nIf the inner parser fails, a null value is returned."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L219"},"index.ts:219")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parse"},"parse"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"parse"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"state?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("p",null,"Parse an input string."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L119"},"index.ts:119")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"state"},"state"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"state"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("p",null,"Create a new parser that wraps the current parser.\nThe generated parser will set the value of the state variable from the given set function and\nrun the inner parser. When the inner parser finishes executing, it restores the value of the\nstate variable."),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"state"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">"),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L234"},"index.ts:234")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"text"},"text"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"text"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Create a new parser that wraps the current parser.\nThe generated parser will return the text in the range matched by the inner parser."),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Parser")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marihachi/terrario/blob/c351ede/src/index.ts#L179"},"index.ts:179")))}o.isMDXComponent=!0}}]);