import{d as M,bk as R,m as g,S as Z,N as G,bl as H,au as K,ay as Q,o as _,a as N,A as e,f as r,w as a,s as E,t as L,Z as p,F as h,ag as W,e as A,x as I,y as z,an as B,bm as X,bc as f,bn as Y,bo as ee,a1 as te,a2 as ae,U as le,b8 as se}from"./index-711bad6c.js";import{E as ne,a as re,b as oe}from"./el-message-0ef3f67b.js";import"./el-checkbox-fc98ec04.js";/* empty css                   */import{E as ie}from"./el-button-31d35a19.js";const ce=["onClick"],ge=M({__name:"index",setup(de){let m=R(),v=g([]),c=g(0);g(!0);let t=Z({attrName:"",attrValueList:[],categoryId:"",categoryLevel:3}),b=g([]);G(()=>m.c3Id,()=>{v.value=[],m.c3Id&&V()});const V=async()=>{const{c1Id:s,c2Id:i,c3Id:y}=m;let n=await H(s,i,y);n.code===200&&(v.value=n.data)},S=()=>{Object.assign(t,{attrName:"",attrValueList:[],categoryId:m.c3Id,categoryLevel:3}),c.value=1},U=s=>{c.value=1,Object.assign(t,JSON.parse(JSON.stringify(s)))},k=()=>{c.value=0},$=()=>{t.attrValueList.push({valueName:"",flag:!0}),B(()=>{b.value[t.attrValueList.length-1].focus()})},O=async()=>{(await X(t)).code===200?(c.value=0,f({type:"success",message:t.id?"修改成功":"添加成功"}),V()):f({type:"error",message:t.id?"修改失败":"添加失败"})},T=(s,i)=>{if(s.valueName.trim()===""){t.attrValueList.splice(i,1),f({type:"error",message:"属性值不能为空"});return}if(t.attrValueList.find(n=>{if(n!==s)return n.valueName===s.valueName})){t.attrValueList.splice(i,1),f({type:"error",message:"属性值不能重复"});return}s.flag=!1},D=(s,i)=>{s.flag=!0,B(()=>{b.value[i].focus()})},F=async s=>{(await Y(s)).code===200?(f({type:"success",message:"删除成功"}),V()):f({type:"error",message:"删除失败"})};return K(()=>{m.$reset()}),(s,i)=>{const y=Q("def-category"),n=ie,d=ne,P=ee,q=re,C=oe,x=te,j=ae,w=le,J=se;return _(),N(h,null,[e(y,{scene:r(c)},null,8,["scene"]),e(J,{style:{margin:"10px 0"}},{default:a(()=>[E(L("div",null,[e(n,{type:"primary",size:"default",icon:"Plus",disabled:!r(m).c3Id,onClick:S},{default:a(()=>[p(" 添加平台属性 ")]),_:1},8,["disabled"]),e(C,{border:"",style:{margin:"10px 0"},data:r(v)},{default:a(()=>[e(d,{label:"序号",type:"index",align:"center",width:"80px"}),e(d,{label:"属性名称",prop:"attrName"}),e(d,{label:"属性值名称"},{default:a(({row:l,$index:u})=>[(_(!0),N(h,null,W(l.attrValueList,(o,ue)=>(_(),A(P,{style:{margin:"5px"},key:o.id},{default:a(()=>[p(I(o.valueName),1)]),_:2},1024))),128))]),_:1}),e(d,{label:"操作"},{default:a(({row:l,$index:u})=>[e(n,{type:"primary",size:"small",icon:"Edit",onClick:o=>U(l)},null,8,["onClick"]),e(q,{title:`你确定删除${l.attrName}?`,width:"200px",onConfirm:o=>F(l.id)},{reference:a(()=>[e(n,{type:"danger",size:"small",icon:"Delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"])],512),[[z,r(c)===0]]),E(L("div",null,[e(w,{inline:!0},{default:a(()=>[e(j,{label:"属性名称"},{default:a(()=>[e(x,{placeholder:"请你输入属性名称",modelValue:r(t).attrName,"onUpdate:modelValue":i[0]||(i[0]=l=>r(t).attrName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{disabled:!r(t).attrName,type:"primary",size:"default",icon:"Plus",onClick:$},{default:a(()=>[p(" 添加属性值 ")]),_:1},8,["disabled"]),e(n,{size:"default",onClick:k},{default:a(()=>[p("取消")]),_:1}),e(C,{border:"",style:{margin:"10px 0"},data:r(t).attrValueList},{default:a(()=>[e(d,{label:"序号",width:"80px",type:"index",align:"center"}),e(d,{label:"属性值名称"},{default:a(({row:l,$index:u})=>[l.flag?(_(),A(x,{key:0,ref:o=>r(b)[u]=o,placeholder:"请你输入属性值名称",modelValue:l.valueName,"onUpdate:modelValue":o=>l.valueName=o,onBlur:o=>T(l,u)},null,8,["modelValue","onUpdate:modelValue","onBlur"])):(_(),N("div",{key:1,onClick:o=>D(l,u)},I(l.valueName),9,ce))]),_:1}),e(d,{label:"属性值操作"},{default:a(({row:l,$index:u})=>[e(n,{type:"danger",size:"small",icon:"Delete",onClick:o=>r(t).attrValueList.splice(u,1)},null,8,["onClick"])]),_:1})]),_:1},8,["data"]),e(n,{type:"primary",size:"default",onClick:O,disabled:!(r(t).attrValueList.length>0)},{default:a(()=>[p(" 保存 ")]),_:1},8,["disabled"]),e(n,{size:"default",onClick:k},{default:a(()=>[p("取消")]),_:1})],512),[[z,r(c)===1]])]),_:1})],64)}}});export{ge as default};