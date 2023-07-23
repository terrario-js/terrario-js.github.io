"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[706],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=i(t),m=a,k=o["".concat(u,".").concat(m)]||o[m]||d[m]||s;return t?n.createElement(k,l(l({ref:r},c),{},{components:t})):n.createElement(k,l({ref:r},c))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=m;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[o]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<s;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4189:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const s={},l="API Docs (old page)",p={unversionedId:"api/api-old",id:"api/api-old",title:"API Docs (old page)",description:"T.language()",source:"@site/docs/api/api-old.md",sourceDirName:"api",slug:"/api/api-old",permalink:"/docs/api/api-old",draft:!1,editUrl:"https://github.com/terrario-js/terrario-js.github.io/tree/main/docs/api/api-old.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Class: Parser<T>",permalink:"/docs/api/classes/Parser"},next:{title:"Modules",permalink:"/docs/api/modules"}},u={},i=[{value:"T.language()",id:"tlanguage",level:2},{value:"parser.parse()",id:"parserparse",level:2},{value:"T.str()",id:"tstr",level:2},{value:"With regular expression",id:"with-regular-expression",level:3},{value:"T.seq()",id:"tseq",level:2},{value:"Select a return value",id:"select-a-return-value",level:3},{value:"T.alt()",id:"talt",level:2},{value:"T.sep()",id:"tsep",level:2},{value:"T.match()",id:"tmatch",level:2},{value:"T.notMatch()",id:"tnotmatch",level:2},{value:"parser.map()",id:"parsermap",level:2},{value:"parser.text()",id:"parsertext",level:2},{value:"parser.many()",id:"parsermany",level:2},{value:"With termination condition",id:"with-termination-condition",level:3},{value:"parser.option()",id:"parseroption",level:2},{value:"T.newline",id:"tnewline",level:2},{value:"T.sof",id:"tsof",level:2},{value:"T.eof",id:"teof",level:2},{value:"T.char",id:"tchar",level:2},{value:"T.lineBegin",id:"tlinebegin",level:2},{value:"T.lineEnd",id:"tlineend",level:2},{value:"parser.state()",id:"parserstate",level:2},{value:"T.cond()",id:"tcond",level:2},{value:"parser.find()",id:"parserfind",level:2},{value:"parser.findAll()",id:"parserfindall",level:2},{value:"T.parser()",id:"tparser",level:2},{value:"T.success()",id:"tsuccess",level:3},{value:"T.failure()",id:"tfailure",level:3},{value:"parser.exec()",id:"parserexec",level:3},{value:"T.lazy()",id:"tlazy",level:2},{value:"T.succeeded()",id:"tsucceeded",level:2},{value:"T.cr",id:"tcr",level:2},{value:"T.lf",id:"tlf",level:2},{value:"T.crlf",id:"tcrlf",level:2}],c={toc:i},o="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(o,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-docs-old-page"},"API Docs (old page)"),(0,a.kt)("h1",{id:"basic-apis"},"Basic APIs"),(0,a.kt)("h2",{id:"tlanguage"},"T.language()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.language(syntaxes: Record<string, (rules: Language) => Parser>): Language\n")),(0,a.kt)("p",null,"We can define some syntax rules to build a language.",(0,a.kt)("br",{parentName:"p"}),"\n","Each rule is lazy evaluated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const lang = T.language({\n  root: rules => {\n    return T.alt([\n      rules.rule1,\n      rules.rule2,\n    ]);\n  },\n\n  rule1: rules => {\n    return T.str('a');\n  },\n\n  rule2: rules => {\n    return T.str('b');\n  },\n});\n\nconst result = lang.root.parse('a');\nconsole.log(result);\n// => { success: true, value: 'a', index: 1 }\n")),(0,a.kt)("h2",{id:"parserparse"},"parser.parse()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parser.parse(input: string, state?: any): Result\n")),(0,a.kt)("p",null,"Parses with the parser."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const parser = T.str('a');\n\nparser.parse('a');\n\n// specify states\nparser.parse('a', { flag: true, count: 0 });\n")),(0,a.kt)("h2",{id:"tstr"},"T.str()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.str(value: string): Parser\n")),(0,a.kt)("p",null,"Generates a parser that consumes the specified string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] \"test\"\nconst parser = T.str('test');\n\nconst result = parser.parse('test');\nconsole.log(result);\n// => { success: true, value: 'test', index: 4 }\n")),(0,a.kt)("h3",{id:"with-regular-expression"},"With regular expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.str(pattern: Regexp): Parser\n")),(0,a.kt)("p",null,"Generates a parser that consumes the specified regular expression."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] [a-z]\nconst parser = T.str(/[a-z]/);\n\nconst result = parser.parse('a');\nconsole.log(result);\n// => { success: true, value: 'a', index: 1 }\n")),(0,a.kt)("h2",{id:"tseq"},"T.seq()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.seq(parsers: Parser[], select?: boolean): Parser\n")),(0,a.kt)("p",null,"Generates a parser that applies parsers in sequence."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] \"a\" \"1\"\nconst parser = T.seq([\n  T.str('a'),\n  T.str('1'),\n]);\n\nconst result = parser.parse('a1');\nconsole.log(result);\n// => { success: true, value: [ 'a', '1' ], index: 2 }\n")),(0,a.kt)("h3",{id:"select-a-return-value"},"Select a return value"),(0,a.kt)("p",null,"You can also select a result to be returned from all of them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] value0:\"a\" value1:\"1\" { return value1; }\nconst parser = T.seq([\n  T.str('a'),\n  T.str('1'),\n], 1);\n\nconst result = parser.parse('a1');\nconsole.log(result);\n// => { success: true, value: '1', index: 2 }\n")),(0,a.kt)("h2",{id:"talt"},"T.alt()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.alt(parsers: Parser[]): Parser\n")),(0,a.kt)("p",null,"Generates a parser that tries to match one of the parsers.",(0,a.kt)("br",{parentName:"p"}),"\n","The parsers are used in order of precedence."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] \"a\" / \"1\"\nconst parser = T.alt([\n  T.str('a'),\n  T.str('1'),\n]);\n\nlet result;\n\nresult = parser.parse('a');\nconsole.log(result);\n// => { success: true, value: 'a', index: 1 }\n\nresult = parser.parse('1');\nconsole.log(result);\n// => { success: true, value: '1', index: 1 }\n")),(0,a.kt)("h2",{id:"tsep"},"T.sep()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.sep(item: Parser, separator: Parser, min: number): Parser\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: This API has removed.")),(0,a.kt)("p",null,"Generates a parser that splits a string and extracts multiple items.",(0,a.kt)("br",{parentName:"p"}),"\n","The ",(0,a.kt)("inlineCode",{parentName:"p"},"separator")," parser is used to split the string, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"item")," parser is used to consume each item."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," argument specifies the minimum number of times it will be applied.",(0,a.kt)("br",{parentName:"p"}),"\n","This argument must be greater than or equal to 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let parser, result;\n\n// (1)\n// [Equivalent PEG] head:\"a\" tail:(\",\" @\"a\")* { return [head, ...tail]; }\nparser = T.sep(T.str('a'), T.str(','), 1);\n\nresult = parser.parse('a');\nconsole.log(result);\n// => { success: true, value: [ 'a' ], index: 1 }\n\nresult = parser.parse('a,a');\nconsole.log(result);\n// => { success: true, value: [ 'a', 'a' ], index: 3 }\n\n// (2)\n// [Equivalent PEG]\n// newline = \"\\r\\n\" / [\\r\\n]\n// item = $(!newline .)+\n// parser = head:item tail:(newline @item)* { return [head, ...tail]; }\nparser = T.sep(T.seq([\n  T.notMatch(T.newline),\n  T.char\n], 1).many(0).text(), T.newline, 1);\n\nresult = parser.parse('abc\\r\\nxyz');\nconsole.log(result);\n// => { success: true, value: [ 'abc', 'xyz' ], index: 8 }\n")),(0,a.kt)("h2",{id:"tmatch"},"T.match()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.match(parser: Parser): Parser\n")),(0,a.kt)("p",null,"Generates a new parser to continue if the match is successful. (Positive lookahead)",(0,a.kt)("br",{parentName:"p"}),"\n","The generated parser does not consume input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] &\"a\" \"abc\"\nconst parser = T.seq([\n  T.match(T.str('a')),\n  T.str('abc'),\n]);\nconst result = parser.parse('abc');\nconsole.log(result);\n// => { success: true, value: [ 'a', 'abc' ], index: 3 }\n")),(0,a.kt)("h2",{id:"tnotmatch"},"T.notMatch()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.notMatch(parser: Parser): Parser\n")),(0,a.kt)("p",null,"Generates a new parser to continue if the match fails. (Negative lookahead)",(0,a.kt)("br",{parentName:"p"}),"\n","The generated parser does not consume input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] !\"x\" \"abc\"\nconst parser = T.seq([\n  T.notMatch(T.str('x')),\n  T.str('abc'),\n]);\nconst result = parser.parse('abc');\nconsole.log(result);\n// => { success: true, value: [ null, 'abc' ], index: 3 }\n")),(0,a.kt)("h2",{id:"parsermap"},"parser.map()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parser.map(fn: (value) => any): Parser\n")),(0,a.kt)("p",null,"Maps the parsed results using the specified function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] value0:\"a\" value1:\"b\" value2:\"c\" { return [value0, value2]; }\nconst parser = T.seq([\n  T.str('a'),\n  T.str('b'),\n  T.str('c'),\n]).map(value => {\n  return [value[0], value[2]];\n});\n\nconst result = parser.parse('abc');\nconsole.log(result);\n// => { success: true, value: [ 'a', 'c' ], index: 3 }\n")),(0,a.kt)("h2",{id:"parsertext"},"parser.text()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parser.text(): Parser\n")),(0,a.kt)("p",null,"The parser maps the consumed portion as a string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] \"a\" \"b\" \"c\" { return text(); }\nconst parser = T.seq([\n  T.str('a'),\n  T.str('b'),\n  T.str('c'),\n]).text();\n\nconst result = parser.parse('abc');\nconsole.log(result);\n// => { success: true, value: 'abc', index: 3 }\n")),(0,a.kt)("h2",{id:"parsermany"},"parser.many()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parser.many(min?: number, max?: number): Parser\nparser.many(opts: { min?: number, max?: number, notMatch?: Parser }): Parser\n")),(0,a.kt)("p",null,"Repeatedly applies the parser.",(0,a.kt)("br",{parentName:"p"}),"\n","The argument min specifies the minimum number of times it will be applied."),(0,a.kt)("p",null,"Matches 0 or more items:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] \"abc\"*\nconst parser = T.str('abc').many(0);\n\nlet result;\n\nresult = parser.parse('');\nconsole.log(result);\n// => { success: true, value: [], index: 0 }\n\nresult = parser.parse('abc');\nconsole.log(result);\n// => { success: true, value: [ 'abc' ], index: 3 }\n")),(0,a.kt)("p",null,"Matches 1 or more items:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] \"abc\"+\nconst parser = T.str('abc').many(1);\n\nlet result;\n\nresult = parser.parse('abc');\nconsole.log(result);\n// => { success: true, value: [ 'abc' ], index: 3 }\n\nresult = parser.parse('abcabc');\nconsole.log(result);\n// => { success: true, value: [ 'abc', 'abc' ], index: 6 }\n")),(0,a.kt)("h3",{id:"with-termination-condition"},"With termination condition"),(0,a.kt)("p",null,"The parser.many() can have a termination condition."),(0,a.kt)("p",null,'The following example uses many to match strings up to ")".\nThe terminating condition ")" is not consumed.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] \"(\" (!\")\" @.)+ \")\"\nconst parser = T.seq([\n    T.str('('),\n    T.char.many({ min: 1, notMatch: T.str(')') }),\n    T.str(')'),\n]);\n\nconst result = parser.parse('(abc)');\nconsole.log(result);\n// => { success: true, value: [ '(', [ 'a', 'b', 'c' ], ')' ], index: 5 }\n")),(0,a.kt)("h2",{id:"parseroption"},"parser.option()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parser.option(): Parser\n")),(0,a.kt)("p",null,"Generates a new parser that returns null even if the match fails.",(0,a.kt)("br",{parentName:"p"}),"\n","Make the parser consumption optional."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] \"a\" \"b\"?\nconst parser = T.seq([\n  T.str('a'),\n  T.str('b').option(),\n]);\n\nlet result;\n\nresult = parser.parse('ab');\nconsole.log(result);\n// => { success: true, value: [ 'a', 'b' ], index: 2 }\n\nresult = parser.parse('a');\nconsole.log(result);\n// => { success: true, value: [ 'a', null ], index: 1 }\n")),(0,a.kt)("h2",{id:"tnewline"},"T.newline"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.newline: Parser\n")),(0,a.kt)("p",null,"Matches ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r\\n")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")),(0,a.kt)("h2",{id:"tsof"},"T.sof"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.sof: Parser\n")),(0,a.kt)("p",null,"Matches start of input string."),(0,a.kt)("h2",{id:"teof"},"T.eof"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.eof: Parser\n")),(0,a.kt)("p",null,"Matches end of input string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] \"a\" !.\nconst parser = T.seq([\n  T.str('a'),\n  T.eof,\n]);\n\nconst result = parser.parse('a');\nconsole.log(result);\n// => { success: true, value: [ 'a', null ], index: 1 }\n")),(0,a.kt)("h2",{id:"tchar"},"T.char"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.char: Parser\n")),(0,a.kt)("p",null,"A parser that consumes any single character."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [Equivalent PEG] .\nconst parser = T.char;\n\nconst result = parser.parse('a');\nconsole.log(result);\n// => { success: true, value: 'a', index: 1 }\n")),(0,a.kt)("h2",{id:"tlinebegin"},"T.lineBegin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.lineBegin: Parser\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//TODO\n")),(0,a.kt)("h2",{id:"tlineend"},"T.lineEnd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.lineEnd: Parser\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//TODO\n")),(0,a.kt)("h1",{id:"parsing-result"},"Parsing result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Success = {\n    success: true;\n    index: number;\n    value: any;\n};\ntype Failure = {\n    success: false;\n    index: number;\n};\ntype Result = Success | Failure;\n")),(0,a.kt)("p",null,"Result structure is unstable yet."),(0,a.kt)("h1",{id:"control-with-states"},"Control with states"),(0,a.kt)("h2",{id:"parserstate"},"parser.state()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parser.state(key: string, value: (state: any) => any): Parser\n")),(0,a.kt)("p",null,"parser.state() creates a parser that sets a value to a specified key in a state object.",(0,a.kt)("br",{parentName:"p"}),"\n","When this parser finishes executing, the contents of the state object are restored."),(0,a.kt)("h2",{id:"tcond"},"T.cond()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.cond(predicate: (state: any) => boolean): Parser\n")),(0,a.kt)("p",null,"Conditional branching can be performed using the state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const parser = T.seq([\n  T.cond(state => state.enabled),\n  T.char,\n]).state('enabled', () => true);\n\nconst result = parser.parse('a', { enabled: false });\nconsole.log(result);\n// => { success: true, value: [ null, 'a' ], index: 1 }\n")),(0,a.kt)("h1",{id:"find-pattern-apis"},"Find pattern APIs"),(0,a.kt)("h2",{id:"parserfind"},"parser.find()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parser.find(input: string, state?: any): { index: number, input: string, result: Result } | undefined\n")),(0,a.kt)("p",null,"Find the matches to the pattern, starting from the front"),(0,a.kt)("h2",{id:"parserfindall"},"parser.findAll()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parser.findAll(input: string, state?: any): { index: number, input: string, result: Result }[]\n")),(0,a.kt)("h1",{id:"custom-parsers"},"Custom parsers"),(0,a.kt)("h2",{id:"tparser"},"T.parser()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.parser(handler: (input: string, index: number, children: Parser[], state: any) => Result, children?: Parser[], name?: string): Parser\n")),(0,a.kt)("p",null,"Makes a new custom parser."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const parser = T.parser((input, index, children, state) => {\n  if (index >= input.length) {\n    return T.failure(index);\n  }\n  return T.success(index, 'result value');\n});\n")),(0,a.kt)("h3",{id:"tsuccess"},"T.success()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.success(index: number, value: any): Success\n")),(0,a.kt)("p",null,"Generates a result indicating the success of a parser."),(0,a.kt)("h3",{id:"tfailure"},"T.failure()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.failure(index: number): Failure\n")),(0,a.kt)("p",null,"Generates a result indicating the failure of a parser."),(0,a.kt)("h3",{id:"parserexec"},"parser.exec()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parser.exec(input: string, state?: any, offset?: number): Result\n")),(0,a.kt)("p",null,"Perform other parsers within the custom parser."),(0,a.kt)("h1",{id:"minor-apis"},"Minor APIs"),(0,a.kt)("h2",{id:"tlazy"},"T.lazy()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.lazy(fn: () => Parser, name?: string): Parser\n")),(0,a.kt)("p",null,"Generates a new parser that is lazy-evaluated.",(0,a.kt)("br",{parentName:"p"}),"\n","Normally there is no need to use this API. Use T.language() instead."),(0,a.kt)("h2",{id:"tsucceeded"},"T.succeeded()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.succeeded(value: any): Parser\n")),(0,a.kt)("p",null,"Generates a parser that succeeds with the specified value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const parser = T.succeeded('abc');\nconst result = parser.parse('');\nconsole.log(result);\n// => { success: true, value: \"abc\", index: 0 }\n")),(0,a.kt)("h2",{id:"tcr"},"T.cr"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.cr: Parser\n")),(0,a.kt)("p",null,"Matches ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r")," (CR)"),(0,a.kt)("h2",{id:"tlf"},"T.lf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.lf: Parser\n")),(0,a.kt)("p",null,"Matches ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," (LF)"),(0,a.kt)("h2",{id:"tcrlf"},"T.crlf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T.crlf: Parser\n")),(0,a.kt)("p",null,"Matches ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r\\n")," (CR + LF)"))}d.isMDXComponent=!0}}]);