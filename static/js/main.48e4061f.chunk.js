(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{128:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(12),r=a.n(c),o=(a(72),a(73),a(74),a(3)),i=(a(80),a(15)),m=a(17),s=[{id:1,link:"https://github.com/RaghebBenA",icon:m.b},{id:2,link:"https://twitter.com/RaghebAmor",icon:m.d},{id:3,link:"https://www.facebook.com/ragheb.desilva1",icon:m.a,padding:".1em 1.2em"},{id:4,link:"https://www.linkedin.com/in/ragheb-ben-amor",icon:m.c}];function u(){return l.a.createElement("div",{className:"SocialMedia"},l.a.createElement("div",{className:"ScPostion"},s.map((function(e){var t=e.link,a=e.icon,n=e.id,c=e.padding;return l.a.createElement("span",{key:n,style:{padding:c}},l.a.createElement("a",{href:t},l.a.createElement(i.a,{icon:a})))}))))}var p=function(){return l.a.createElement("div",{className:"mainPage"},l.a.createElement("img",{src:"https://i.ibb.co/8xD6q6S/17424820-1391061267624250-7340669792620282573-n.jpg",alt:"Ragheb"}),l.a.createElement("p",null,"Ragheb Ben Amor"),l.a.createElement("p",null,"WEB DEVELOPER & WEB DESINGER"),l.a.createElement("div",{className:"buttonGroup"},l.a.createElement(o.a,{color:"blue-grey"},"Hire me"),l.a.createElement(o.a,{color:"blue-grey"},"Download My Cv")),l.a.createElement(u,null))},E=a(7),b=(a(83),a(9)),d=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(E.a)(r,2),m=i[0],s=i[1],u=function(){window.scrollY>250?s(!0):window.scrollY<250&&s(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}})),l.a.createElement(o.g,{dark:!0,expand:"md",fixed:"top",className:m?"navBlack2":"navBlack"},l.a.createElement(o.h,{className:m?null:"navBarnone"},l.a.createElement(b.Link,{smooth:!0,duration:500,to:"main"},l.a.createElement("strong",null,"Ragheb Ben Amor"))),l.a.createElement(o.j,{onClick:function(){c(!a)}}),l.a.createElement(o.b,{id:"navbarCollapse3",isOpen:a,navbar:!0},l.a.createElement(o.i,{right:!0},l.a.createElement(o.f,null,l.a.createElement(b.Link,{to:"about",smooth:!0,duration:500},"About")),l.a.createElement(o.f,null,l.a.createElement(b.Link,{to:"skills",smooth:!0,duration:500},"Skills")),l.a.createElement(o.f,null,l.a.createElement(b.Link,{to:"portfolio",smooth:!0,duration:500},"Portfolio")),l.a.createElement(o.f,null,l.a.createElement(b.Link,{to:"contact",smooth:!0,duration:500},"Contact")))))},f=(a(90),function(){return l.a.createElement("div",{className:"aboutme"},l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"Hello! I am Ragheb, web developer and web designer I have been working as a freelance web developer for more than two years now building web apps(static/dynamic/progressive) and I am working with MERN Stack now. I have been also designing websites prototype for almost one year now so if you need your business to grow up you need a modern web app so contact me ",l.a.createElement(b.Link,{to:"contact"},"here")))}),g=[{label:"age",info:24},{label:"email",info:"raghebbenamor.freelancer@gmail.com"},{label:"phone",info:"+21694191109"},{label:"address",info:"Monastir,tunisia"},{label:"language",info:"Arabic,English,French"}],h=a(16),v=a.n(h),k=function(){return l.a.createElement("div",{className:"basicInfo"},l.a.createElement("h2",null,"Basic Information"),g.map((function(e){var t=e.label,a=e.info;return l.a.createElement("div",{className:"myinfo",key:v()()},l.a.createElement("p",null,t.toUpperCase(),":"),l.a.createElement("p",null,a))})))};function y(){return l.a.createElement(o.c,{className:"about"},l.a.createElement(o.l,{className:"AboutRow"},l.a.createElement(f,null),l.a.createElement(k,null)))}a(93);var O=a(63),j=a.n(O),N=function(e){var t=e.average,a=Object(n.useState)(0),c=Object(E.a)(a,2),r=c[0],i=c[1],m=Object(n.useState)(!1),s=Object(E.a)(m,2),u=s[0],p=s[1];return Object(n.useEffect)((function(){u?setTimeout((function(){i(t)}),1e3):i(0)}),[t,u]),l.a.createElement(j.a,{onChange:function(e){return p(e)}},l.a.createElement(o.k,{value:r,className:"my-2",color:"blue-grey"}))},w=[{label:"html",percentage:80},{label:"javascript",percentage:85},{label:"css",percentage:70},{label:"sass",percentage:60},{label:"react",percentage:90},{label:"nodejs",percentage:75},{label:"express",percentage:70},{label:"mongoDB",percentage:50},{label:"adobexd",percentage:60},{label:"figma",percentage:85},{label:"photoshop",percentage:90},{label:"adobe illustrator",percentage:65}];function S(){return l.a.createElement("div",{className:"skillsCont",onScroll:function(e){e.target.scrollTop&&console.log("arrived"),console.log(e.target)}},l.a.createElement("p",{className:"title"},"Professional Skills"),l.a.createElement(o.c,{className:"skills"},w.map((function(e){var t=e.label,a=e.percentage;return l.a.createElement("section",{key:v()()},l.a.createElement("div",{className:"skillsLabel"},l.a.createElement("p",null,t.toUpperCase()),l.a.createElement("p",null,a,"%")),l.a.createElement(N,{average:a}))}))))}var C=a(24);a(94);function I(e){var t=e.image,a=e.name,c=e.type,r=e.select,o=Object(n.useState)(!1),i=Object(E.a)(o,2),m=i[0],s=i[1];return l.a.createElement("div",{className:"devProject",onClick:r},l.a.createElement("div",{className:"project",onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)}},l.a.createElement("img",{src:t,alt:a,style:{filter:m?"blur(8px)":null}}),m?l.a.createElement("div",{className:"ProjectInfo"},l.a.createElement("div",null,l.a.createElement("p",null,a),l.a.createElement("p",null,c))):null))}var P=[{name:"Flippy Coin",description:"flip coin game",image:"https://i.ibb.co/XkBbswY/flippycoin.png",techStacks:"React(hooks)/Firebase",year:"2019",github:"https://github.com/RaghebBenA/flippyCoins",link:"https://ecommerce-25.web.app"},{name:"Todo",description:"todo App",image:"https://i.ibb.co/dPhLXfx/Untitled.png",techStacks:"React(hooks)",year:"2019",github:"https://github.com/RaghebBenA/ToDo-App/tree/codeBranch",link:"https://raghebbena.github.io/ToDo-App/"},{name:"Light Out",description:"Light Out Game",image:"https://i.ibb.co/s9RPvzw/Light-Out-Gmae-screnn-Shot.png",techStacks:"React(hooks)",year:"2019",github:"https://github.com/RaghebBenA/Light-Out-Game/tree/CodeBranch",link:"https://raghebbena.github.io/Light-Out-Game/"},{name:"Yahtzee",description:"Yahtzee dice game",image:"https://i.ibb.co/1GrxLD1/Untitled.png",techStacks:"React(hooks)",year:"2019",github:"https://github.com/RaghebBenA/Yahtzee/tree/codeBranch",link:"https://raghebbena.github.io/Yahtzee/"}],x=a(136);function L(e){var t=e.image,a=e.name,n=e.description,c=e.techStacks,r=e.year,s=e.github,u=e.link,p=e.cancel;return l.a.createElement("div",{className:"projectDetails"},l.a.createElement("img",{src:t,alt:a}),l.a.createElement("div",{className:"projectInfo"},l.a.createElement("section",null,l.a.createElement("h1",null,a)),l.a.createElement("section",null,l.a.createElement("p",null,"Description:"),l.a.createElement("p",null,n)),l.a.createElement("section",null,l.a.createElement("p",null,"Tech Stack:"),l.a.createElement("p",null,c)),l.a.createElement("section",null,l.a.createElement("p",null,"Year:"),l.a.createElement("p",null,r)),l.a.createElement("section",null,l.a.createElement("p",null,"github:"),"private"===s?l.a.createElement("p",null,"Private"):l.a.createElement("div",{className:"link"},l.a.createElement(i.a,{icon:m.b})," ",l.a.createElement("a",{href:s},"source code"))),l.a.createElement("section",null,l.a.createElement("a",{href:u},l.a.createElement(o.a,{color:"blue-grey"},"Live demo")),l.a.createElement(o.a,{outline:!0,onClick:p},"cancel"))))}function B(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),m=Object(E.a)(r,2),s=m[0],u=m[1],p=Object(n.useState)(),b=Object(E.a)(p,2),d=b[0],f=b[1],g=Object(n.useState)(!1),h=Object(E.a)(g,2),k=h[0],y=h[1];Object(n.useEffect)((function(){if(s){var e=P.filter((function(e){return e.name===s}));f(e)}}),[s]);return l.a.createElement(o.c,{className:"portoflio"},l.a.createElement("h1",null,"Portfolio"),l.a.createElement("div",{className:"CategoryCont"},l.a.createElement("span",{onClick:function(){c(!1),u()},style:a?{background:"none"}:{background:"#78909C",boxShadow:"0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)"}},l.a.createElement("p",null,l.a.createElement(i.a,{icon:C.b})))),l.a.createElement(x.a,{in:k,timeout:500,classNames:"page"},s?l.a.createElement(l.a.Fragment,null,d?d.map((function(e){var t=e.image,a=e.name,n=e.description,c=e.techStacks,r=e.year,o=e.github,i=e.link;return l.a.createElement(L,{key:v()(),image:t,name:a,description:n,techStacks:c,year:r,github:o,link:i,isVisible:s,cancel:function(){y(!1),setTimeout((function(){u()}),400)}})})):l.a.createElement("div",{className:"spinner-border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))):l.a.createElement("div",{className:"projectCont"},P.map((function(e){var t=e.image,a=e.name;return l.a.createElement(I,{key:v()(),image:t,name:a,type:"Web Development",select:function(){y(!0),setTimeout((function(){u(a)}),300)}})})))))}var R=a(19),A=a.n(R),D=a(64),M=a(36),Y=a(65),T=a.n(Y),G=function(e){return Object.keys(e).map((function(t,a){return 0===e[t].length&&t})).filter((function(e){return e}))},F=function(e){var t=0;for(var a in e)e.hasOwnProperty(a)&&t++;return t},q=function(e){var t=e.errors,a=e.handleChange;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t.includes("name")?"cont-input":""},l.a.createElement(o.e,{label:"You Name",name:"name",onChange:a,icon:"user",type:"text"}),t.includes("name")&&l.a.createElement("p",{className:"errors"},"name"," field is required *")),l.a.createElement("div",{className:t.includes("email")?"cont-input":""},l.a.createElement(o.e,{label:"You Email",name:"email",onChange:a,icon:"envelope",type:"text"}),t.includes("email")&&l.a.createElement("p",{className:"errors"},"email"," field is required *")),l.a.createElement("div",{className:t.includes("subject")?"cont-input":""},l.a.createElement(o.e,{label:"Subject",name:"subject",onChange:a,icon:"tag",type:"text"}),t.includes("subject")&&l.a.createElement("p",{className:"errors"},"subject"," field is required *")),l.a.createElement("div",{className:t.includes("message")?"cont-input":""},l.a.createElement(o.e,{label:"You Message",name:"message",onChange:a,icon:"pencil-alt",type:"text"}),t.includes("message")&&l.a.createElement("p",{className:"errors"},"message"," field is required *")))};function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(){var e=Object(n.useState)({}),t=Object(E.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),m=Object(E.a)(r,2),s=m[0],u=m[1],p=Object(n.useState)(!1),b=Object(E.a)(p,2),d=b[0],f=b[1];return l.a.createElement("form",{className:"forms",onSubmit:function(e){e.preventDefault(),0===G(a).length&&4===F(a)&&(u(!0),T.a.post("https://portfoliob.herokuapp.com/api/mailcontact",a).then((function(){u(!1),f(!0)})).catch((function(e){u(!1)})))}},l.a.createElement("p",{className:"h5 mb-4"},"fell free to contact me"),d?l.a.createElement("span",{className:"success-message"},l.a.createElement("p",null,"Thank you for your trust we will contact you in less than 24 hours"),l.a.createElement("p",null,l.a.createElement(i.a,{icon:C.a}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"grey-text"},l.a.createElement(q,{errors:G(a),handleChange:function(e){e.persist(),c((function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(M.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,Object(M.a)({},e.target.name,e.target.value))}))}})),l.a.createElement("div",{className:"text-center"},l.a.createElement(o.a,{outline:!0,color:"secondary",type:"submit",disabled:G(a).length>0||4!==F(a)},s?l.a.createElement("div",{className:"spinner-border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")):l.a.createElement("span",null,"send ",l.a.createElement(o.d,{far:!0,icon:"paper-plane",className:"ml-1"}))))))}function W(){return l.a.createElement("div",{className:"contactMe-info"},l.a.createElement("span",null,l.a.createElement("p",null,"Address"),l.a.createElement("p",null,"Monastir,tunisia")),l.a.createElement("span",null,l.a.createElement("p",null,"Phone"),l.a.createElement("p",null,"+21694191109")),l.a.createElement("span",null,l.a.createElement("p",null,"Email"),l.a.createElement("p",null,"raghebbenamor.freelancer@gmail.com")))}a(128);function H(){return l.a.createElement(o.c,{className:"contactMe"},l.a.createElement("p",{className:"h3 text-center"},"Contact Me"),l.a.createElement("div",{className:"ContactMe-content"},l.a.createElement(U,null),l.a.createElement(W,null)))}var J=function(){return l.a.createElement(D.ParallaxProvider,null,l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(A.a,{animateIn:"fadeIn",animateOut:"fadeOut"},l.a.createElement(b.Element,{name:"main"},l.a.createElement(p,null))),l.a.createElement(A.a,{animateIn:"fadeIn",animateOut:"fadeIn"},l.a.createElement(b.Element,{name:"about"}," ",l.a.createElement(y,null))),l.a.createElement(A.a,{animateIn:"fadeIn",animateOut:"fadeIn"},l.a.createElement(b.Element,{name:"skills"},l.a.createElement(S,null))),l.a.createElement(A.a,{animateIn:"fadeIn",animateOut:"fadeIn"},l.a.createElement(b.Element,{name:"portfolio"},l.a.createElement(B,null))),l.a.createElement(A.a,{animateIn:"fadeIn",animateOut:"fadeIn"},l.a.createElement(b.Element,{name:"contact"},l.a.createElement(H,null)))))};a(129),a(130),a(131);r.a.render(l.a.createElement(J,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(132)},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){},90:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.48e4061f.chunk.js.map