"use strict";(self.webpackChunknx_dotnet=self.webpackChunknx_dotnet||[]).push([[54],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1235:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>c,default:()=>d});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={},s="@nx-dotnet/core:test",u={unversionedId:"core/generators/test",id:"core/generators/test",isDocsHomePage:!1,title:"@nx-dotnet/core:test",description:"NxDotnet Test Generator",source:"@site/../../docs/core/generators/test.md",sourceDirName:"core/generators",slug:"/core/generators/test",permalink:"/docs/core/generators/test",editUrl:"https://github.com/nx-dotnet/nx-dotnet/edit/master/docs/../../docs/core/generators/test.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"@nx-dotnet/core:sync",permalink:"/docs/core/generators/sync"},next:{title:"Getting Started",permalink:"/docs/nx-ghpages/"}},c=[{value:"NxDotnet Test Generator",id:"nxdotnet-test-generator",children:[]},{value:"Options",id:"options",children:[{value:'<span className="required">name</span>',id:"name",children:[]},{value:'<span className="required">testTemplate</span>',id:"testtemplate",children:[]},{value:"language",id:"language",children:[]},{value:"suffix",id:"suffix",children:[]},{value:"skipOutputPathManipulation",id:"skipoutputpathmanipulation",children:[]},{value:"standalone",id:"standalone",children:[]},{value:"solutionFile",id:"solutionfile",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nx-dotnetcoretest"},"@nx-dotnet/core:test"),(0,a.kt)("h2",{id:"nxdotnet-test-generator"},"NxDotnet Test Generator"),(0,a.kt)("p",null,"Generate a .NET test project for an existing application or library"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"name"},(0,a.kt)("span",{className:"required"},"name")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(string): The existing project to generate tests for")),(0,a.kt)("h3",{id:"testtemplate"},(0,a.kt)("span",{className:"required"},"testTemplate")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(string): Which template should be used for creating the tests project?")),(0,a.kt)("h3",{id:"language"},"language"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(string): Which language should the project use?")),(0,a.kt)("h3",{id:"suffix"},"suffix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(string): What suffix should be used for the tests project name?")),(0,a.kt)("h3",{id:"skipoutputpathmanipulation"},"skipOutputPathManipulation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(boolean): Skip XML changes for default build path")),(0,a.kt)("h3",{id:"standalone"},"standalone"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(boolean): Should the project use project.json? If false, the project config is inside workspace.json")),(0,a.kt)("h3",{id:"solutionfile"},"solutionFile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"(string): The name of the solution file to add the project to")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"(boolean): Should the project be added to the default solution file?"))))}d.isMDXComponent=!0}}]);