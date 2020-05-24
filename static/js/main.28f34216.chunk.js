(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{15:function(n,e,t){n.exports=t(27)},20:function(n,e,t){},21:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),c=(t(20),t(3)),l=t(1),s=(t(21),t(2));function u(){var n=Object(l.a)(["\n  background: white;\n  text-align: center;\n  padding: 10px 0;\n  border-radius: 8px;\n  width: 80px;\n  small {\n    color: #2A45C2;\n    text-transform: uppercase;\n    font-size: 10px;\n    font-weight: bold;\n    letter-spacing: 1px;\n  }\n  p {\n    color: #565468;\n    font-size: 40px;\n    margin: 0;\n    font-weight: 700;\n    position: relative;\n  }\n"]);return u=function(){return n},n}var m=s.a.div(u());var p=function(){var n=Object(r.useContext)(G).score;return(a.a.createElement(m,null,a.a.createElement("small",null,"Score"),a.a.createElement("p",null,n)))};function d(){var n=Object(l.a)(["\n  color: white;\n  padding: 12px 12px 12px 23px;\n  border-radius: .5em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 3px solid rgba(255, 255,255, .29);\n  h1 {\n    font-size: 18px;\n    line-height: 16px;\n    font-weight: 700;\n    text-transform: uppercase;\n  }\n"]);return d=function(){return n},n}var f=s.a.div(d());var b=function(){return a.a.createElement(f,null,a.a.createElement("h1",null,"Rock ",a.a.createElement("br",null)," Paper ",a.a.createElement("br",null),"  Scissors"),a.a.createElement(p,null))};function g(){var n=Object(l.a)(["\n  max-width: 1024px;\n  margin: auto;\n"]);return g=function(){return n},n}var x=s.a.div(g());var h=function(n){var e=n.children;return(a.a.createElement(x,null,e))},v=t(6),w=t.n(v),E=t(13);function j(){var n=Object(l.a)(["\n  width: 130px;\n  height: 125px;\n  padding: ",";\n  border: 16px solid ",";\n  box-sizing: border-box;\n  border-radius: 50%;\n  display: flex;\n  box-shadow: 0 5px 0 ",";\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  ","\n  animation: 1s "," forwards;\n  &:active {\n    transform: scale(.9);\n  }\n  .box {\n    background: ",";\n    box-shadow: 0 -4px 0 ",";\n    flex: 1;\n    align-self: stretch;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return j=function(){return n},n}function k(){var n=Object(l.a)(["\n  to {\n    box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);\n    transform: rotateZ(360deg) scale(1.1);\n  }\n"]);return k=function(){return n},n}var O=Object(s.b)(k()),y=s.a.div(j(),(function(n){return"default"===n.name?"16px":"0"}),(function(n){return n.color.base}),(function(n){return n.color.border}),(function(n){return n.isShadowAnimated&&"box-shadow: 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.02);"}),(function(n){return n.isShadowAnimated?O:""}),(function(n){return"default"===n.name?"#122343":"white"}),(function(n){return"default"===n.name?"transparent":"#BABFD4"})),S={paper:{base:"#516ef4",border:"#2543c3"},rock:{base:"#de3a5a",border:"#980e31"},scissors:{base:"#eca81e",border:"#c76c14"},default:{base:"trasparent",border:"trasparent"}};var C=function(n){var e=n.name,t=void 0===e?"default":e,r=n.onClick,o=n.isShadowAnimated,i=void 0!==o&&o,c=S[t];return a.a.createElement(y,{color:c,onClick:function(){r&&r(t)},name:t,isShadowAnimated:i},a.a.createElement("div",{className:"box"},a.a.createElement("img",{src:"./images/icon-".concat(t,".svg"),alt:""})))},z=t(14);function A(){var n=Object(l.a)(["\n  background: white;\n  color: #101a3f;\n  min-width: 220px;\n"]);return A=function(){return n},n}function N(){var n=Object(l.a)(["\n  display: inline-flex;\n  border: 1px solid white;\n  border-radius: .5em;\n  min-width: 128px;\n  padding: .7em;\n  box-sizing: border-box;\n  justify-content: center;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n"]);return N=function(){return n},n}var B=s.a.div(N());var F=Object(s.a)(B)(A()),P=function(n){var e=n.children,t=Object(z.a)(n,["children"]);return(a.a.createElement(B,t,e))};function R(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 130px 130px;\n  justify-content: center;\n  justify-items: center;\n  grid-gap: 30px 50px;\n  margin: 2em 0;\n  position: relative;\n  & div:nth-of-type(3) {\n    grid-column: span 2;\n  }\n  .in-game {\n    text-align: center;\n    text-transform: uppercase;\n    font-size: .8em;\n    font-weight: 700;\n    letter-spacing: 1px;\n  }\n  .results {\n    text-align: center;\n    h2 {\n      text-transform: uppercase;\n      font-size: 56px;\n      margin: 10px;\n    }\n  }\n  .line {\n    display: ",";\n    height: 14px;\n    background: rgba(0,0,0,.2);\n    position: absolute;\n    left: 60px;\n    right: 60px;\n    top: 58px;\n    &:before {\n      content: '';\n      height: 14px;\n      background: rgba(0,0,0,.2);\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      transform: rotate(60deg);\n      transform-origin: left top;\n    }\n\n    &:after {\n      content: '';\n      height: 14px;\n      background: rgba(0,0,0,.2);\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      transform: rotate(-60deg);\n      transform-origin: right top;\n    }\n  }\n"]);return R=function(){return n},n}var I=s.a.div(R(),(function(n){return n.playing?"none":"block"})),M=["paper","scissors","rock"];var T=function(){var n=Object(r.useContext)(G),e=n.score,t=n.setScore,o=Object(r.useState)(""),i=Object(c.a)(o,2),l=i[0],s=i[1],u=Object(r.useState)("default"),m=Object(c.a)(u,2),p=m[0],d=m[1],f=Object(r.useState)(!1),b=Object(c.a)(f,2),g=b[0],x=b[1],h=Object(r.useState)(""),v=Object(c.a)(h,2),j=v[0],k=v[1];function O(){return new Promise((function(n,e){var t,r=setInterval((function(){var n,e;t=M[(n=0,e=3,Math.floor(Math.random()*(e-n))+n)],d(t)}),75);setTimeout((function(){clearInterval(r),n(t)}),2e3)}))}function y(n){return S.apply(this,arguments)}function S(){return(S=Object(E.a)(w.a.mark((function n(r){var a,o;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),k(r),n.next=4,O();case 4:a=n.sent,o=z(r,a),s(o),"win"===o&&t(e+1);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function z(n,e){if(e===n)return"draw";if("paper"===n){if("scissors"===e)return"lose";if("rock"===e)return"win"}if("scissors"===n){if("paper"===e)return"win";if("rock"===e)return"lose"}if("rock"===n){if("paper"===e)return"lose";if("scissors"===e)return"win"}}return a.a.createElement(I,{playing:g},a.a.createElement("span",{className:"line"}),g?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"in-game"},a.a.createElement(C,{name:j,isShadowAnimated:"win"===l}),a.a.createElement("p",null,"You Picked")),a.a.createElement("div",{className:"in-game"},a.a.createElement(C,{name:p,isShadowAnimated:"lose"===l}),a.a.createElement("p",null,"The house Picked")),a.a.createElement("div",{className:"results"},l&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"YOU ",l),a.a.createElement(F,{onClick:function(){x(!1),s("")}},"Try Again")))):a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{name:"paper",onClick:y}),a.a.createElement(C,{name:"scissors",onClick:y}),a.a.createElement(C,{name:"rock",onClick:y})))};function J(){var n=Object(l.a)(["\n  text-align: center;\n  .close-button {\n    margin-top: 2em;\n  }\n  .rules-overlay {\n    background: white;\n    padding: 4em 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: column;\n    h2 {\n      color: #3B4262;\n      text-transform: uppercase;\n      font-weight: 700;\n      letter-spacing: -2px;\n      margin-bottom: 1em;\n    }\n  }\n"]);return J=function(){return n},n}var W=s.a.div(J());var Y=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1];function i(){o(!t)}return(a.a.createElement(W,null,t&&a.a.createElement("div",{className:"rules-overlay"},a.a.createElement("h2",null,"Rules"),a.a.createElement("img",{src:"./images/image-rules.svg",alt:"Game Rules"}),a.a.createElement("img",{className:"close-button",onClick:i,src:"./images/icon-close.svg",alt:"Close the game rules"})),a.a.createElement(P,{onClick:i},"Rules")))};function D(){var n=Object(l.a)(["\n  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);\n  color: white;\n  font-family: 'Barlow Semi Condensed', sans-serif;\n\n  .app-content {\n    padding: 2em;\n    min-height: 100vh;\n    display: flex;\n    box-sizing: border-box;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n"]);return D=function(){return n},n}var G=Object(r.createContext)(),U=s.a.main(D());var Z=function(){var n=Object(r.useState)(0),e=Object(c.a)(n,2),t=e[0],o=e[1];return(a.a.createElement(G.Provider,{value:{score:t,setScore:o}},a.a.createElement(U,null,a.a.createElement(h,null,a.a.createElement("div",{className:"app-content"},a.a.createElement(b,null),a.a.createElement(T,null),a.a.createElement(Y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.28f34216.chunk.js.map