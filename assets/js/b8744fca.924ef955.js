"use strict";(self.webpackChunknx_dotnet=self.webpackChunknx_dotnet||[]).push([[951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2894:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>p});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={},s="@nx-dotnet/core:library",c={unversionedId:"core/generators/library",id:"core/generators/library",isDocsHomePage:!1,title:"@nx-dotnet/core:library",description:"NxDotnet Library Generator",source:"@site/../../docs/core/generators/library.md",sourceDirName:"core/generators",slug:"/core/generators/library",permalink:"/docs/core/generators/library",editUrl:"https://github.com/nx-dotnet/nx-dotnet/edit/master/docs/../../docs/core/generators/library.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"@nx-dotnet/core:init",permalink:"/docs/core/generators/init"},next:{title:"@nx-dotnet/core:nuget-reference",permalink:"/docs/core/generators/nuget-reference"}},u=[{value:"NxDotnet Library Generator",id:"nxdotnet-library-generator",children:[]},{value:"Options",id:"options",children:[{value:'<span className="required">name</span>',id:"name",children:[]},{value:"tags",id:"tags",children:[]},{value:"directory",id:"directory",children:[]},{value:'<span className="required">template</span>',id:"template",children:[]},{value:'<span className="required">language</span>',id:"language",children:[]},{value:'<span className="required">testTemplate</span>',id:"testtemplate",children:[]},{value:"standalone",id:"standalone",children:[]},{value:"solutionFile",id:"solutionfile",children:[]}]}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nx-dotnetcorelibrary"},"@nx-dotnet/core:library"),(0,o.kt)("h2",{id:"nxdotnet-library-generator"},"NxDotnet Library Generator"),(0,o.kt)("p",null,"Generate a dotnet project under the library directory."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"name"},(0,o.kt)("span",{className:"required"},"name")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(string): The name assigned to the library")),(0,o.kt)("h3",{id:"tags"},"tags"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(string): Add tags to the project (used for linting)")),(0,o.kt)("h3",{id:"directory"},"directory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(string): A directory where the project is placed")),(0,o.kt)("h3",{id:"template"},(0,o.kt)("span",{className:"required"},"template")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(string): The template to instantiate when the command is invoked. Each template might have specific options you can pass.")),(0,o.kt)("h3",{id:"language"},(0,o.kt)("span",{className:"required"},"language")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(string): Which language should the project use?")),(0,o.kt)("h3",{id:"testtemplate"},(0,o.kt)("span",{className:"required"},"testTemplate")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(string): Which template should be used for creating the tests project?")),(0,o.kt)("h3",{id:"standalone"},"standalone"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(boolean): Should the project use project.json? If false, the project config is inside workspace.json")),(0,o.kt)("h3",{id:"solutionfile"},"solutionFile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(string): The name of the solution file to add the project to")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(boolean): Should the project be added to the default solution file?"))))}p.isMDXComponent=!0}}]);