(window.webpackJsonpwaimak=window.webpackJsonpwaimak||[]).push([[0],{113:function(t,a,e){t.exports=e(186)},118:function(t,a,e){},183:function(t,a,e){},186:function(t,a,e){"use strict";e.r(a);var n=e(0),o=e.n(n),r=e(8),i=e.n(r),c=e(22),m=e(221),l=(e(118),e(10)),s=e(43),u=e(212),p=e(214),g=e(219),b=e(220),f=e(39),y=e(74),d=e(3),h=e.n(d),G=e(105),_=e(222),I=e(71),j=e(216),E=e(35),O=e(86),k=e(215),M=e(213),J=e(100),P=e.n(J),w=o.a.forwardRef((function(t,a){return o.a.createElement(_.a,Object.assign({direction:"up",ref:a},t))})),v=Object(u.a)({root:{margin:0,padding:"16px"},closeButton:{position:"absolute",right:"8px",top:"8px",color:E.a[500]},avatar:{backgroundColor:O.a[100],color:O.a[600]},image:{display:"block",marginLeft:"auto",marginRight:"auto"}}),x=function(t){var a=t.children,e=t.onClose,n=Object(G.a)(t,["children","onClose"]),r=v();return o.a.createElement(M.a,Object.assign({disableTypography:!0,className:r.root},n),o.a.createElement(I.a,{variant:"h6"},a),e?o.a.createElement(p.a,{"aria-label":"close",className:r.closeButton,onClick:e},o.a.createElement(P.a,null)):null)};var C=function(t){var a=t.onClose,e=t.open,n=t.location,r=t.children,i=function(){a()};return o.a.createElement(k.a,{onClose:i,open:e,TransitionComponent:w},o.a.createElement(x,{onClose:i},n),o.a.createElement(j.a,null,r))},A=Object(u.a)({image:{display:"block",width:"95% !important",height:"95% !important",padding:"5%",objectFit:"contain",overflow:"hidden"},modal:{}});C.propTypes={onClose:h.a.func.isRequired,open:h.a.bool.isRequired,location:h.a.string.isRequired};var N=function(t){var a=t.open,e=t.onClose,n=A(),r=Object(f.a)();return o.a.createElement(y.AutoRotatingCarousel,{open:a,onClose:e,autoplay:!1,containerStyle:{footer:n.button}},t.images.map((function(t){return o.a.createElement(y.Slide,{media:o.a.createElement("img",{className:n.image,src:t.src,alt:t.alt}),mediaBackgroundStyle:{height:"90%",backgroundColor:r.palette.primary.light},style:{backgroundColor:r.palette.primary.main}})})))},S=e(217),T=e(218);e(183);var z=function(t){var a=Object(f.a)();return o.a.createElement(S.a,{position:"fixed",color:"secondary"},o.a.createElement(T.a,{variant:"dense"},o.a.createElement(I.a,{fontFamily:a.typography.fontFamily,variant:"h3",color:"secondary.contrastText"},"The Ground You Walk On")))},R=e(104),W=e(211),H=Object(R.a)({palette:{primary:{light:"#fff",main:"#adbcc3",dark:"#7e8c93",contrastText:"#000"},secondary:{light:"#5daad7",main:"#207ba5",dark:"#004f76",contrastText:"#fff"}},typography:{fontFamily:["Monospace"].join(",")}});var B=function(t){return o.a.createElement(W.a,{theme:H},t.children)},F=Object(u.a)({root:function(t){return{position:"relative",width:"".concat(t.width,"px"),height:"".concat(t.height,"px"),margin:"auto",left:"0",right:"0",marginTop:"48px"}}});var L=function(t){var a=F(t.size);return o.a.createElement(b.a,{className:a.root},t.children)},q=function(){var t=Object(n.useState)([0,0]),a=Object(s.a)(t,2),e=a[0],o=a[1];return Object(n.useLayoutEffect)((function(){function t(){o([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),e},Y=Object(u.a)({image:{position:"absolute",minWidth:"1666px",minHeight:"751px",display:"block",width:"auto",height:"100%",margin:"auto",zIndex:-1,left:"50%",top:0,transform:"translate(-50%, 0)"},container:{position:"relative",minWidth:"1666px",minHeight:"751px"},imageContainer:function(t){return{width:"".concat(t.width,"px"),height:"".concat(t.height,"px"),minWidth:"1666px",minHeight:"751px",left:0,top:0,position:"absolute"}},buttonContainer:function(t){return{width:"56.27%",height:"".concat(t.height,"px"),minWidth:"1666px",minHeight:"751px",position:"absolute",left:"50%",top:0,transform:"translate(-50%, 0)"}},paperRoot:{padding:"16px"},cameraImage:{height:"85.5%",width:"100%"},buttonMain:{position:"absolute !important",zIndex:1,margin:"-30px !important"},button_1:{left:"3.65% !important",top:"10.33% !important"},button_2:{left:"12.55% !important",top:"5.2% !important"},button_3:{left:"23.76% !important",top:"22.89% !important"},button_4:{left:"27.14% !important",top:"14.78% !important"},button_5:{left:"33.08% !important",top:"69.88% !important"},button_6:{left:"34.88% !important",top:"61.99% !important"},button_7:{left:"39.57% !important",top:"71.47% !important"},button_8:{left:"59.87% !important",top:"95.05% !important"},button_9:{left:"68.75% !important",top:"87.17% !important"},button_10:{left:"73.39% !important",top:"91.95% !important"},button_11:{left:"81.21% !important",top:"88.67% !important"},button_12:{left:"85.21% !important",top:"84.33% !important"},button_13:{left:"86.1% !important",top:"77.94% !important"},button_14:{left:"89.1% !important",top:"82.73% !important"},button_15:{left:"89.1% !important",top:"76.35% !important"}});var D=function(){var t=q(),a=Object(s.a)(t,2),e={width:a[0],height:a[1]-48},r=Object(n.useState)(!1),i=Object(s.a)(r,2),c=i[0],m=i[1],u=Object(n.useState)([]),f=Object(s.a)(u,2),y=f[0],d=f[1],h=Y(e);return o.a.createElement(b.a,{style:{width:"100%",height:"100%"}},o.a.createElement(B,null,o.a.createElement(z,null),o.a.createElement(L,{size:e},o.a.createElement("div",{className:h.container},o.a.createElement("div",{className:h.imageContainer},o.a.createElement("img",{src:"./Waimakariri-03.jpg",alt:"waimak",className:h.image})),o.a.createElement("div",{className:h.buttonContainer},[{style:"button_1",action:{images:Object(l.a)(Array(2).keys()).map((function(t){return{src:"./Images/15/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_2",action:{images:Object(l.a)(Array(1).keys()).map((function(t){return{src:"./Images/14/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_3",action:{images:Object(l.a)(Array(3).keys()).map((function(t){return{src:"./Images/13/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_4",action:{images:Object(l.a)(Array(1).keys()).map((function(t){return{src:"./Images/12/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_5",action:{images:Object(l.a)(Array(4).keys()).map((function(t){return{src:"./Images/11/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_6",action:{images:Object(l.a)(Array(2).keys()).map((function(t){return{src:"./Images/10/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_7",action:{images:Object(l.a)(Array(1).keys()).map((function(t){return{src:"./Images/9/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_8",action:{images:Object(l.a)(Array(6).keys()).map((function(t){return{src:"./Images/8/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_9",action:{images:Object(l.a)(Array(9).keys()).map((function(t){return{src:"./Images/7/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_10",action:{images:Object(l.a)(Array(12).keys()).map((function(t){return{src:"./Images/6/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_11",action:{images:Object(l.a)(Array(6).keys()).map((function(t){return{src:"./Images/5/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_12",action:{images:Object(l.a)(Array(11).keys()).map((function(t){return{src:"./Images/4/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_13",action:{images:Object(l.a)(Array(5).keys()).map((function(t){return{src:"./Images/3/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_14",action:{images:Object(l.a)(Array(6).keys()).map((function(t){return{src:"./Images/2/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}},{style:"button_15",action:{images:Object(l.a)(Array(12).keys()).map((function(t){return{src:"./Images/1/IMG_".concat(t+1,".JPG"),alt:"IMG_".concat(t+1,".JPG")}}))}}].map((function(t){return o.a.createElement(p.a,{large:!0,classes:{root:h.buttonMain+" "+(h[t.style]||h.button_1)},onClick:function(){d(t.action.images),m(!0)}},o.a.createElement(g.a,{fontSize:"large"},o.a.createElement("img",{src:"./Camera.png",alt:"camera",className:h.cameraImage})))}))))),o.a.createElement(N,{images:y,open:c,onClose:function(){return m(!1)},location:"Sample"})))},K=Object(c.a)();i.a.render(o.a.createElement(m.b,{history:K},o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/",component:D}))),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.4b2a18f8.chunk.js.map