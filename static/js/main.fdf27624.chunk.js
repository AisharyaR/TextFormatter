(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),c=a.n(l),r=(a(13),a(1));a(15);function s(e){return o.a.createElement("nav",{className:"navbar navbar-expand",style:{backgroundColor:"#444141"}},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("a",{className:"navbar-brand",style:{color:"white"},href:"#"},e.title),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#",style:{color:"white"}},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/aboutus",style:{color:"white"}},e.about)),o.a.createElement("li",null,o.a.createElement("a",{className:"nav-link",href:"/disabled",style:{color:"white"}},"Typing master"))),o.a.createElement("form",{className:"d-flex",role:"search"},o.a.createElement("div",{className:"form-check form-switch"},o.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:e.toggleBlueMode,id:"BlueSwitch"},"Enable Blue Mode"),o.a.createElement("button",{type:"button",class:"btn btn-success mx-3",onClick:e.toggleGreenMode,id:"GreenSwitch"},"Enable Green Mode"),o.a.createElement("button",{type:"button",class:"btn btn-danger",onClick:e.toggleRedMode,id:"RedSwitch"},"Enable Red Mode"))))))}function i(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),d=i[0],m=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("h4",{className:"text-".concat("white"===e.mode?"dark":"white")},e.heading),o.a.createElement("div",{className:"mb-3"},o.a.createElement("textarea",{className:"form-control",value:l,onChange:function(e){c(e.target.value)},id:"maintext",rows:"10",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"}})),o.a.createElement("button",{className:"btn btn-success mx-3",onClick:function(){var t=l.toUpperCase();c(t),e.showAlert(" Converted to Upper Case","success")}},"Convert to Uppercase"),o.a.createElement("button",{className:"btn btn-success mx-3",onClick:function(){var t=l.toLowerCase();c(t),e.showAlert(" Converted to Lower Case","success")}},"Convert to Lowercase"),o.a.createElement("button",{className:"btn btn-success mx-3",onClick:function(){var t=new SpeechSynthesisUtterance;t.text=l,window.speechSynthesis.speak(t),e.showAlert(" Word has been spoken","success")}},"Speak"),o.a.createElement("button",{className:"btn btn-success mx-3",onClick:function(){for(var t="",a=0;a<l.length;a++)t=l.charAt(a)+t;c(t),e.showAlert(" Word has been reversed","success")}},"Reverse"),o.a.createElement("button",{className:"btn btn-warning mx-3",onClick:function(){l.includes(d)?e.showAlert(" Word found","success"):e.showAlert(" Word not found","danger")}},"Find"),o.a.createElement("button",{className:"btn btn-danger mx-3",onClick:function(){c(""),m(""),e.showAlert(" Cleared","success")}},"Clear")),o.a.createElement("div",{className:"container my-3 text-".concat("white"===e.mode?"dark":"white")},o.a.createElement("h1",null,"Your text summary"),o.a.createElement("p",null,l.length>0?l.split(" ").length:0," words and ",l.length," characters"),o.a.createElement("p",null,"You can read this text in about ",.008*l.split(" ").length),o.a.createElement("h2",null,"Preview"),o.a.createElement("p",null,l.length>0?l:"Enter something in the textbox above to preview it here")),o.a.createElement("div",{className:"container text-".concat("white"===e.mode?"dark":"white")},o.a.createElement("h5",null,"Write the word you would like to find"),o.a.createElement("div",{className:"mb-3"},o.a.createElement("textarea",{className:"form-control",value:d,onChange:function(e){m(e.target.value)},id:"findtext",rows:"1"}))))}function d(){var e=Object(n.useState)({color:"black",backgroundColor:"white"}),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],d=s[1];return o.a.createElement("div",{className:"container",style:a},o.a.createElement("h2",null,"About Us"),o.a.createElement("div",{className:"accordion",id:"accordionExample",style:a},o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingOne"},o.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:a},"Accordion Item #1")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:a},o.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},o.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:a},"Accordion Item #2")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:a},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingThree"},o.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:a},"Accordion Item #3")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:a},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),o.a.createElement("button",{type:"button",className:"btn btn-dark my-3",onClick:function(){"black"===a.color?(l({color:"white",backgroundColor:"black",border:"1px white solid"}),d("Disable Dark Mode")):(l({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))}},i))}s.defaultProps={title:"Set title here",about:"About us here (write)"};var m=function(e){return e.alert&&o.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)};function u(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),d=i[0],m=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"text-".concat("light"===e.mode?"dark":"light")},o.a.createElement("h3",null,"Start writing to get your typing speed!"),o.a.createElement("textarea",{className:"form-control my-4",id:"hello",value:l,placeholder:"write here....",onChange:function(e){document.getElementById("hello").disabled=d,setTimeout(function(){m(!0)},9e4),c(e.target.value)},rows:"6"}),o.a.createElement("p",null,l.length>0?l.split(" ").length:0," words"),o.a.createElement("h4",null,"Your typing speed is ",(l.length>0?l.split(" ").length:0)/1.5," WPM")))}var h=function(){var e=Object(n.useState)("white"),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),h=Object(r.a)(c,2),b=h[0],g=h[1],p=function(e,t){g({msg:e,type:t}),setTimeout(function(){g(null)},3e3)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{title:"Text Formatter",mode:a,toggleBlueMode:function(){"white"===a?(l("dark"),document.body.style.backgroundColor="#18325c",p(" Blue mode has been enabled","success")):"dark"===a?(l("white"),document.body.style.backgroundColor="white",p("White mode has been enabled","success")):(l("dark"),document.body.style.backgroundColor="#18325c",p("Blue mode has been enabled","success"))},toggleGreenMode:function(){"white"===a?(l("green"),document.body.style.backgroundColor="#1e3c1e",p("Green mode has been enabled","success")):"green"===a?(l("white"),document.body.style.backgroundColor="white",p("White mode has been enabled","success")):(l("green"),document.body.style.backgroundColor="#1e3c1e",p("Green mode has been enabled","success"))},toggleRedMode:function(){"white"===a?(l("red"),document.body.style.backgroundColor="#853232",p("Red mode has been enabled","success")):"red"===a?(l("white"),document.body.style.backgroundColor="white",p("White mode has been enabled","success")):(l("red"),document.body.style.backgroundColor="#853232",p("Red mode has been enabled","success"))}}),o.a.createElement(m,{alert:b}),o.a.createElement("div",{className:"container my-3"},o.a.createElement(i,{heading:"Enter your text below",mode:a,showAlert:p}),o.a.createElement(d,null),o.a.createElement(u,null)))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null))),b()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.fdf27624.chunk.js.map