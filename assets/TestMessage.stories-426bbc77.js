import{r as M}from"./index-03be2d59.js";var B={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=M,C=Symbol.for("react.element"),j=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,b=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function D(r,e,i){var s,t={},l=null,_=null;i!==void 0&&(l=""+i),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(_=e.ref);for(s in e)I.call(e,s)&&!N.hasOwnProperty(s)&&(t[s]=e[s]);if(r&&r.defaultProps)for(s in e=r.defaultProps,e)t[s]===void 0&&(t[s]=e[s]);return{$$typeof:C,type:r,key:l,ref:_,props:t,_owner:b.current}}p.Fragment=j;p.jsx=D;p.jsxs=D;B.exports=p;var m=B.exports;const c=({message:r})=>m.jsx("div",{children:r});try{c.displayName="TestMessage",c.__docgenInfo={description:"メッセージを表示するテストコンポーネント",displayName:"TestMessage",props:{message:{defaultValue:null,description:"メッセージ",name:"message",required:!0,type:{name:"string"}}}}}catch{}const d="myAddonParameter",f={},{useGlobals:k,useParameter:W}=__STORYBOOK_MODULE_PREVIEW_API__,Y=()=>{const[r]=k();return{...W(d,f)??f,...r[d]}},w=r=>{const e=Y();return m.jsxs("div",{children:[m.jsx(c,{...r}),m.jsxs("div",{children:["myAddonState: ",JSON.stringify(e)]})]})},K={title:"TestMessage",render:w,component:c,args:{message:"Hello World"}},a={},o={args:{message:"こんにちは！"}},n={parameters:{[d]:{num:10}}},u={args:{message:"こんにちは！"},parameters:{[d]:{flag:!0,num:10}}};var g,y,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var A,S,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    message: "こんにちは！"
  }
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var P,T,O;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    [PARAM_KEY]: ({
      num: 10
    } satisfies MyAddonState)
  }
}`,...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var F,R,v;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    message: "こんにちは！"
  },
  parameters: {
    [PARAM_KEY]: ({
      flag: true,
      num: 10
    } satisfies MyAddonState)
  }
}`,...(v=(R=u.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};const U=["Default","Text","DefaultWithParams","TextWithParams"];export{a as Default,n as DefaultWithParams,o as Text,u as TextWithParams,U as __namedExportsOrder,K as default};
