(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),o=n.n(r),c=n(2),l=(n(16),[{elementImg:"https://images.unsplash.com/photo-1562517982-0766d0ed9c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",title:"revert",desc:"find the heart when paridise is lost",morph:"M312 224C276 244.605 202.266 237.226 144.086 329.193C94.5663 407.472 -10.3762 243.619 69 140C135 65 85.6471 -26.2802 231 46C376.353 118.28 379.492 185.37 312 224Z",explore:{main:"hello dude there you go"}},{elementImg:"https://images.unsplash.com/photo-1560762843-841c583d4fbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",title:"capture",desc:"the neverending search for adventure",morph:"M288.154 147.501C218.154 203.501 304.154 294.501 190.154 351.501C107.292 392.932 149.965 234.629 87.1537 203.501C-25.8464 147.501 149.154 132.501 136.154 49.5011C123.154 -33.4989 348.967 98.8507 288.154 147.501Z"},{elementImg:"https://images.unsplash.com/photo-1563472617137-d46f015d83be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1917&q=80",title:"sunrise",desc:"franks work and nothing more ",morph:"M253 115C305.704 221.693 536.511 219.83 398 354C331.458 418.457 288.081 387.061 232 345C172 300 138 444 78 264C17.9999 83.9998 212 32 253 115Z"},{elementImg:"https://images.unsplash.com/photo-1560762843-841c583d4fbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",title:"sincere",desc:"meaning for life",morph:"M312 224C276 244.605 202.266 237.226 144.086 329.193C94.5663 407.472 -10.3762 243.619 69 140C135 65 85.6471 -26.2802 231 46C376.353 118.28 379.492 185.37 312 224Z"}]),m=n(7),s=n(8),u=n.n(s),f=function(e){return Object(a.useEffect)(function(){!function(){var t=document.getElementById("canvas-"+e.id),n=t.getContext("2d"),a=new Image;a.onload=function(){t.width=a.naturalWidth,t.height=a.naturalHeight,n.drawImage(a,0,0)},a.src=e.image}()},[]),i.a.createElement(u.a,{class:"image_canvas_contain"},i.a.createElement("canvas",{className:"image_canvas",id:"canvas-"+e.id}," "))},d=function(e){return i.a.createElement("div",null,i.a.createElement("section",null))},h=function(){return i.a.createElement(a.Fragment,null,l.map(function(e,t){return i.a.createElement("div",{key:t,className:"squares_container"},i.a.createElement("div",{key:t,className:"squares_individual"},i.a.createElement(f,{key:t,id:t,image:e.elementImg}),i.a.createElement("h2",{onClick:function(e){return n=t,void console.log(n);var n}}," ",e.title," ")))}))},p=function(){return i.a.createElement(a.Fragment,null,i.a.createElement("svg",{id:"morphing_element",width:"375",viewBox:"0 0 265 246",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{className:"circle",d:l[0].morph,fill:"#02023e"})))},E=function(){return i.a.createElement("div",null)},g=function(){var e=Object(c.e)(function(e){return e.loadingFirst}),t=Object(c.d)(function(e){return e.isLoaded}),n=Object(c.e)(function(e){return e.chosenPiece}),r=[],o=function(){for(var e=0;e<r.length;e++)r[e].newElement=!0},s=function(e){Object(m.a)({duration:1e3,easing:"easeOutExpo",targets:".circle",d:[{value:e}]})};return Object(a.useEffect)(function(){setTimeout(function(){t()},1700),window.addEventListener("scroll",function(e){return function(e){var t=Math.round(window.pageYOffset);if(0==r.length){var n=document.getElementsByClassName("squares_individual");Array.from(n).forEach(function(e){return r.push({element:e.parentNode,newElement:!0})})}t==r[0].element.offsetTop&&(o(),r[0].newElement=!1,s(l[0].morph)),t>=r[1].element.offsetTop-50&&t<r[2].element.offsetTop-50&&r[1].newElement&&(o(),r[1].newElement=!1,s(l[1].morph)),t>=r[2].element.offsetTop-50&&t<r[3].element.offsetTop-50&&r[2].newElement&&(o(),r[2].newElement=!1,s(l[2].morph)),t==r[3].element.offsetTop&&(o(),r[3].newElement=!1,s(l[3].morph))}()},!0)},[]),i.a.createElement("div",{className:"main"},e?i.a.createElement(a.Fragment,null,i.a.createElement(p,null),i.a.createElement(h,null)):i.a.createElement(E,null),n&&i.a.createElement(d,null))},w={loadingFirst:!1,chosenPiece:null,svgShow:!0,isLoaded:Object(c.b)(function(e,t){e.loadingFirst=!0}),updateChosenPiece:Object(c.b)(function(e,t){e.chosenPiece=t})},v=(n(20),n(21),function(){var e=Object(c.c)(w);return i.a.createElement(c.a,{store:e},i.a.createElement("div",{className:"App"},i.a.createElement(g,null)))});o.a.render(i.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4245ef7d.chunk.js.map