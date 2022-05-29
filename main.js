(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,":root {\n    --tabColor: #9f97c9;\n    --tabHoverColor: #F4EEFF;\n    --chosenTabColor: #DCD6F7;\n    --headerColor: #6d75af;\n    --bgColor: #A6B1E1;\n    --pSize: 1.5rem;\n    --h1Size: 3rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    color: #F4EEFF;\n}\n\nh1 {\n    font-size: var(--h1Size);\n    font-family: 'GFS Didot', serif;\n}\n\np {\n    font-size: var(--pSize);\n    font-family: 'Open Sans', sans-serif;\n}\n\nbutton {\n    border: none;\n    color: white;\n    font-size: 1.2rem;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 200px 1fr;\n    min-height: 100vh;\n}\n\n/* SECTION header */\n\n#header {\n    background-color: var(--headerColor);\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    box-shadow: 0 2px 5px rgb(87, 86, 86);\n    z-index: 2;\n}\n\n#heading {\n    margin-left: 10px;\n}\n\n#tabContainer {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    width: 30vw;\n    height: 50px;\n    justify-self: center;\n    align-self: flex-end;\n    margin-bottom: 0;\n    column-gap: 2px;\n}\n\n.tab {\n    background-color: var(--tabColor);\n}\n\n.tab.chosen {\n    background-color: var(--chosenTabColor);\n    color: var(--headerColor);\n}\n\n.tab:not(.chosen):hover {\n    background-color: var(--tabHoverColor);\n    color: var(--headerColor);\n}\n\n/* SECTION home page */\n\n#homePage {\n    background-color: var(--bgColor);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n/*SECTION menu page */\n#menuPage {\n    background-color: var(--chosenTabColor);\n    display: grid;\n    row-gap: 5px;\n}\n\n.itemTitle {\n    grid-row: 1/2;\n    grid-column: 1/-1;\n}\n\n#menuPage img {\n    width: 400px;\n    height: 300px;\n    margin-bottom: 20px;\n}\n\n.menuContainer {\n    padding-left: 5%;\n    background-color: var(--bgColor);\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: min-content 1fr;\n}\n\n.itemDescription {\n    padding-left: 10%;\n}\n\n/*SECTION contact page  */\n\n#contactPage {\n    background-color: var(--bgColor);\n    display: grid;\n    grid-template-rows: repeat(2, min-content);\n    justify-content: center;\n}\n\n.infoContainer {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    align-items: center;\n}\n\n.infoContainer img {\n    width: var(--pSize);\n    height: var(--pSize);\n    margin-right: 5px;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(e){document.getElementById("content").appendChild(e)},g=function(){const e=document.createElement("div");e.id="homePage";const n=document.createElement("h1");n.id="aboutTitle",n.innerText="About",e.appendChild(n);const t=document.createElement("p");t.innerText="Abigail's bakery has the best cake and tarts in the world. Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit.Quisque enim lectus, sodales et rhoncus quis, feugiat a velit.Suspendisse ultrices mollis\n    ultrices.Phasellus congue maximus quam, in feugiat leo lacinia sed.Mauris facilisis, augue ut ornare\n    auctor, urna sapien facilisis tellus, et dictum urna felis nec nulla.",t.id="aboutText",e.appendChild(t);const r=document.createElement("h1");r.innerText="Hours",e.appendChild(r);const a=document.createElement("p");return a.id="hoursText",a.innerText="MON~FRI:10am~5pm\nClosed on SAT and SUN",e.appendChild(a),e},v=t.p+"3b3baa16f17f4b969d6d.jpeg",b=t.p+"b5d928fe9a852fabae4c.jpeg",C=t.p+"ef0908893a3c42581629.jpeg",y=t.p+"c0225feaa04c35bcae3a.jpeg",x=t.p+"16c70137fd853b32cf24.jpeg",E=t.p+"c7aff425bc2eda15b67c.jpeg",T=t.p+"fc3269b582365a984331.jpg",w=t.p+"317217da0648de89899a.jpeg",k=(e,n,t,r)=>({name:e,src:n,getPriceText:()=>"$"+String(t)+" for each",description:r}),S=t.p+"975418dee7b1faae131b.svg",L=t.p+"2d5c6ef7fea023355044.svg",A=document.getElementById("content"),j=document.createElement("div");j.id="tabContainer";const P=document.createElement("button");P.innerText="Home",P.classList.add("tab");const I=document.createElement("button");I.innerText="Menu",I.classList.add("tab");const F=document.createElement("button");F.innerText="Contact",F.classList.add("tab"),j.appendChild(P),j.appendChild(I),j.appendChild(F);const M=document.createElement("div");M.id="header";const N=document.createElement("h1");N.id="heading",N.innerText="Abigail's Bakery",M.appendChild(N),M.appendChild(j),P.addEventListener("click",(function(){A.innerText="",P.classList.add("chosen"),F.classList.remove("chosen"),I.classList.remove("chosen"),h(M),h(g())})),I.addEventListener("click",(function(){I.classList.add("chosen"),F.classList.remove("chosen"),P.classList.remove("chosen"),A.innerText="",h(M),h(function(){const e=document.createElement("div");return e.id="menuPage",[k("Tarts",v,5,"Chocolate, macha and other flavors of tart."),k("Bear cake",b,25,"Cake of winnie the pooh."),k("Cat cake",C,20,"A cake of a cute gray cat."),k("Deer cake",y,30,"A cake of an anime deer."),k("Dunkey cake",x,2.5,"A cake of Eeyore."),k("Halloween cake",E,25,"A cake for Halloween."),k("Monster cake",T,30,"The specialty of Abigail's bakery, one of the customer got this for birthday, and he loves it."),k("Pig cake",w,15,"A cake of a pig in cartoon.")].forEach((n=>{const t=document.createElement("div");t.classList.add("menuContainer");const r=document.createElement("h1");r.innerText=n.name,r.classList.add("itemTitle"),t.appendChild(r);const a=document.createElement("img");a.src=n.src,a.classList.add("itemImg"),t.appendChild(a);const o=document.createElement("p");o.innerText=n.description+"\n\n"+n.getPriceText(),o.classList.add("itemDescription"),t.appendChild(o),e.appendChild(t)})),e}())})),F.addEventListener("click",(function(){F.classList.add("chosen"),I.classList.remove("chosen"),P.classList.remove("chosen"),A.innerText="",h(M),h(function(){const e=document.createElement("div");e.id="contactPage";const n=document.createElement("h1");n.innerText="Contact us",e.appendChild(n);const t=[S,L],r=["111-111-1111","totallyReal@mail.com"],a=document.createElement("div");for(let e=0;e<t.length;e++){a.classList.add("infoContainer");const n=document.createElement("img");n.src=t[e],a.appendChild(n);const o=document.createElement("p");o.innerText=r[e],a.appendChild(o)}return e.appendChild(a),e}())})),h(M),P.classList.add("chosen"),h(g())})()})();