(this.webpackJsonprentalcars=this.webpackJsonprentalcars||[]).push([[0],{20:function(e,n,r){},26:function(e,n,r){"use strict";r.r(n);var t,i,c,l,a,s,o,d,h,j,b,x,p,u,g,O,m,f,w,v,y,A,k,C,S,M,E=r(1),_=r.n(E),I=r(11),B=r.n(I),D=(r(20),r(2)),F=r(3),R="#1E79CA",H="#E7F4FE",T="#3D8425",L="#F7B732",P="#333",z="#FFF",N="#1273C4",V="#e7e7e7",W="#961412",G="#1263b0",Q="#474747",X="#f1c74c",K=Object(F.b)(t||(t=Object(D.a)(["\n  to {\n    transform: rotate(360deg);\n  }\n"]))),Z=function(e){var n=e.target;n.classList.toggle("expanded");var r=n.nextElementSibling;r.style.height?(r.style.height=null,r.style.margin="0px"):(r.style.height="".concat(r.scrollHeight+16,"px"),r.style.margin="0 1rem 1rem")},J=function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250;return function(){for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];var l=this;clearTimeout(n),n=setTimeout((function(){e.apply(l,[].concat(i))}),r)}},U=["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"],Y=r.p+"static/media/dismiss.3b0d245e.svg",q=r(0),$=F.a.div(i||(i=Object(D.a)(["\n    display: flex;\n    flex-direction: ",";\n    padding: ",";\n    margin: ",";\n    width: ",";\n    justify-content: ",";\n    align-items: ",";\n    background: ",";\n    font-size: ",";\n    color: ",";\n    gap: ",";\n"])),(function(e){return e.flexDirection||"row"}),(function(e){return e.padding||"0"}),(function(e){return e.margin||"0"}),(function(e){return e.width||"100%"}),(function(e){return e.justifyContent||"normal"}),(function(e){return e.alignItems||"normal"}),(function(e){return e.background||"none"}),(function(e){return e.fontSize||"inherit"}),(function(e){return e.color||P}),(function(e){return e.gap||0})),ee=F.a.div(c||(c=Object(D.a)(["\n    display: inline-block;\n    padding: ",";\n    margin: ",";\n    width: ",";\n    font-size: inherit;\n    background: ",";\n    color: ",";\n    height: fit-content;\n"])),(function(e){return e.padding||"0"}),(function(e){return e.margin||"0"}),(function(e){return e.width||"fit-content"}),(function(e){return e.background||"transparent"}),(function(e){return e.color||P})),ne=F.a.a(l||(l=Object(D.a)(["\n    text-decoration: ",";\n    color: ",";\n    padding: ",";\n    font-size: 14px;\n    &:hover {\n        text-decoration: underline;\n    }\n"])),(function(e){return e.underline?"underline":"none"}),(function(e){return e.color||R}),(function(e){return e.padding||"0"})),re=Object(F.a)(ee)(a||(a=Object(D.a)(["\n    background: ",";\n    color: ",";\n    padding: 2px 4px;\n    min-width: 70px;\n    border-radius: 4px;\n    text-align: center;\n    font-size: 12px;\n"])),(function(e){return e.bg}),(function(e){return e.bg!==X?z:P})),te=function(e){var n=e.details,r=e.setValue,t=n.city,i=void 0===t?"":t,c=n.country,l=void 0===c?"":c,a=n.name,s=void 0===a?"":a,o=n.region,d=void 0===o?"":o,h=n.placeType,j=void 0===h?"":h,b=n.iata,x=void 0===b?"":b;if("No results found."===s)return Object(q.jsx)("p",{style:{padding:"0.5rem"},children:s});var p={A:{bg:W,text:"Airport"},C:{bg:G,text:"City"},T:{bg:Q,text:"Station"},D:{bg:X,text:"Region"},P:{bg:X,text:"Region"}};return Object(q.jsxs)($,{gap:"1rem",onClick:function(e){e.preventDefault();var n=s;x&&(n+=" (".concat(x,")")),i&&(n+=", ".concat(i)),l&&(n+=", ".concat(l)),r(n)},children:[Object(q.jsx)(re,{bg:p[j]?p[j].bg:z,children:p[j]?p[j].text:""}),Object(q.jsxs)("div",{children:[Object(q.jsxs)("p",{children:[s," ",x&&"(".concat(x,")")]}),Object(q.jsxs)("small",{children:[i&&"".concat(i,", ")," ",d&&"".concat(d,", ")," ",l]})]})]})},ie=Object(F.a)($)(s||(s=Object(D.a)(["\n    flex-direction: column;\n    padding: 0.5rem 0;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background: ",";\n    top: -1rem;\n    left: -1rem;\n    z-index: 1;\n    > .header {\n        padding: 0.5rem 1rem;\n        > button {\n            background: none;\n            padding: 0;\n            height: auto;\n        }\n    }\n    hr {\n        border: solid 0.5px ",";\n        opacity: 0.25;\n    }\n"])),z,V),ce=function(e){var n=e.children,r=e.closeMenu,t=void 0===r?function(){}:r,i=e.heading,c=void 0===i?"":i;return Object(q.jsxs)(ie,{children:[Object(q.jsxs)($,{className:"header",justifyContent:"space-between",alignItems:"center",children:[Object(q.jsx)("div",{children:c}),Object(q.jsx)("button",{type:"button",onClick:t,"aria-label":"Close Menu",children:Object(q.jsx)("img",{src:Y,alt:""})})]}),Object(q.jsx)("hr",{}),n]})},le=F.a.header(o||(o=Object(D.a)(["\n    width: 100%;\n    max-width: 1142px;\n    padding: 1rem 1rem;\n    color: ",";\n    > h1 {\n        margin: 2rem 0;\n        text-align: center;\n    }\n"])),z),ae=F.a.nav(d||(d=Object(D.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    > .menu {\n        cursor: pointer;\n        > img {\n            width: 1.5rem;\n            height: 1.5rem;\n            border-radius: 50%;\n        }\n        > button {\n            padding: 0px 16px;\n            color: ",";\n            background: ",";\n        }\n    }\n    .menu {\n        display: none;\n    }\n    .hamburger {\n        cursor: pointer;\n        background: none;\n        padding: 0;\n    }\n\n    @media (min-width: 768px) {\n        .hamburger {\n            display: none;\n        }\n        .menu {\n            display: flex;\n        }\n    }\n"])),R,z),se=Object(F.a)($)(h||(h=Object(D.a)(["\n    background: ",";\n    flex-direction: column;\n    padding: 1rem;\n    border-radius: 8px;\n    > h3 {\n        color: black;\n    }\n    & button {\n        padding: 1rem 3rem;\n        color: ",";\n        background: ",";\n    }\n"])),L,z,T),oe=Object(F.a)($)(j||(j=Object(D.a)(["\n    gap: 1rem;\n    flex-direction: column;\n    margin: 1rem 0;\n    & input {\n        width: 20px;\n        height: 20px;\n        margin-right: 0.5rem;\n    }\n    & label {\n        font-size: 14px;\n    }\n\n    @media (min-width: 768px) {\n        gap: 2rem;\n        flex-direction: row;\n    }\n"]))),de=Object(F.a)($)(b||(b=Object(D.a)(["\n    flex-direction: column;\n    gap: 0.75rem;\n\n    @media (min-width: 960px) {\n        flex-direction: row;\n    }\n"]))),he=Object(F.a)($)(x||(x=Object(D.a)(['\n    position: relative;\n    & input {\n        padding-left: 2rem;\n    }\n    &:after {\n        content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path d="m20.75 3.709-7.377 17.79-1.638-8.187a.75.75 0 0 0-.588-.588L2.96 11.086l17.79-7.377zm-.574-1.386L2.385 9.7a1.5 1.5 0 0 0 .28 2.856l8.188 1.638-.588-.588 1.638 8.188a1.5 1.5 0 0 0 2.856.28l7.377-17.79a1.5 1.5 0 0 0-1.96-1.96z"/></svg>\');\n        position: absolute;\n        left: 0.5rem;\n        top: 1rem;\n    }\n    > svg {\n        position: absolute;\n        right: 0.5rem;\n        top: 0.75rem;\n        animation: '," 1.5s linear infinite;\n    }\n"])),K),je=Object(F.a)($)(p||(p=Object(D.a)(["\n    position: absolute;\n    z-index: 1;\n    top: 100%;\n    flex-direction: column;\n    background: ",";\n    border: solid 1px ",";\n    border-radius: 4px;\n    cursor: pointer;\n    > div {\n        min-height: 54px;\n        padding: 0.5rem;\n        border-bottom: solid 1px ",";\n        &:hover {\n            background: ",";\n        }\n    }\n"])),z,P,V,H),be=Object(F.a)($)(u||(u=Object(D.a)(["\n    flex-direction: column;\n    gap: 0.75rem;\n    > input {\n        width: auto;\n        padding: 1rem;\n    }\n    & select {\n        width: 100%;\n    }\n    overflow: hidden;\n\n    @media (min-width: 960px) {\n        flex-direction: row;\n        gap: 0;\n        border-radius: 4px;\n        & input,\n        select {\n            border-radius: 0px;\n            width: auto;\n        }\n        & select {\n            border-left: solid 1px ",";\n        }\n    }\n"])),V),xe=F.a.div(g||(g=Object(D.a)(['\n    position: relative;\n    & select {\n        padding-left: 1.75rem;\n    }\n    &:after {\n        content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75zm1.5 0C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12zm-10.5 0V8.25a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0zm-1.28.53 4.687 4.688a.75.75 0 0 0 1.06-1.06L12.53 11.47a.75.75 0 0 0-1.06 1.06z"/></svg>\');\n        position: absolute;\n        left: 0.5rem;\n        top: 0.9rem;\n    }\n']))),pe=r(5),ue=r.p+"static/media/rc-logo.091fab27.svg",ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAHmsAH2uoCzTU2udEWpIiPX/u8PXM0uG/c46qYIAVMHgAHWoAHmvKCCj////ro67XRl7lg5MfOn7FZ4Df4+3RJ0P87/Lv8fZgcqPeZXjywcl/j7XOGDWfq8f44OT54OQQLHXkhJRAVpC/x9rRJ0LbVWuPnb5QZJnUdYraVWseRK7eAAAADHRSTlPfv7+/7+fv77+/v6+KrFpkAAABL0lEQVRIx+XVSXKDMBRF0e9gp9dHENEIMNgQp9n/BoOAstCTBmGWit8MdM8IKGhHOOZETHtjPpC/V9wapN7pvwCHrYCP6e/BqS6I2SEIIM/PBjgEAOSNmIElCCAXDWWxQxBAnuQkhEMQQM5MUgABYPJOiyUfwX31DcQBkHNBVKpWO2QNPiCvT7Tv+yO3Wkqp21msQaffxy05D599T4yzIOHAtgMZWDaDLHRGYuNuE8SBXeazS+hs+4NTSl0vWjMLvnhZV43rmIsxJuoHnlfJMZKVWr98BU+LzbPXnXn56YHtPZOX7vdQKpfUBLn/xQExID/b3AdAaMwbmwcAEJpybXMPACGTt0N/zT0AhCD3ARDKIUewXlorpj3kHgDyF/9xNwledrgoeryb9hRFz97pD+1MfOO7i7+EAAAAAElFTkSuQmCC",Oe=r.p+"static/media/hamburger.5cb4075c.svg",me=r.p+"static/media/inr.c9fba6a2.svg",fe=r.p+"static/media/calendar.284a99d9.svg",we=function(){var e=Object(E.useState)(!1),n=Object(pe.a)(e,2),r=n[0],t=n[1],i=function(){return t((function(e){return!e}))};return Object(q.jsxs)(ae,{children:[r&&Object(q.jsx)(ce,{closeMenu:i,heading:"Menu",children:Object(q.jsxs)($,{padding:"2rem",flexDirection:"column",gap:"1rem",fontSize:"14px",children:[Object(q.jsxs)($,{alignItems:"center",gap:"0.5rem",children:[Object(q.jsx)("img",{src:me,alt:"Prices in Indian Rupees"}),"Indian Rupee"]}),Object(q.jsxs)($,{alignItems:"center",gap:"0.5rem",children:[Object(q.jsx)("img",{src:ge,alt:"Selected Language English",style:{borderRadius:"50%"},height:"24px"}),"English"]}),Object(q.jsxs)($,{alignItems:"center",gap:"0.5rem",children:[Object(q.jsx)("img",{src:fe,alt:"Manage Booking"}),"Manage Booking"]})]})}),Object(q.jsx)("a",{href:"/rentalcars",children:Object(q.jsx)("img",{src:ue,alt:"Rentalcars.com",width:"156",height:"21"})}),Object(q.jsxs)($,{width:"auto",gap:"1.5rem",className:"menu",alignItems:"center",children:[Object(q.jsx)("span",{style:{color:z},"aria-label":"Prices in Indian Rupees",children:"INR"}),Object(q.jsx)("img",{src:ge,alt:"Selected Language English"}),Object(q.jsx)("button",{type:"button",children:"Manage Booking"})]}),Object(q.jsx)("button",{type:"button",className:"hamburger",onClick:i,"aria-label":"Open Menu",children:Object(q.jsx)("img",{src:Oe,alt:""})})]})},ve=r(15),ye=function(){var e=Object(E.useState)([]),n=Object(pe.a)(e,2),r=n[0],t=n[1],i=Object(E.useState)(!1),c=Object(pe.a)(i,2),l=c[0],a=c[1],s=Object(E.useRef)(null);Object(E.useEffect)((function(){return document.addEventListener("click",(function(e){t([])})),document.removeEventListener("click",(function(e){t([])}))}),[]);var o=function(e){s.current.value=e,t([])};return Object(q.jsxs)(se,{children:[Object(q.jsx)("h2",{children:"Let\u2019s find your ideal car"}),Object(q.jsxs)(oe,{children:[Object(q.jsxs)($,{alignItems:"center",width:"auto",children:[Object(q.jsx)("input",{type:"checkbox",id:"diff-location"}),Object(q.jsx)("label",{htmlFor:"diff-location",children:"Drop car off at different location"})]}),Object(q.jsxs)($,{alignItems:"center",width:"auto",children:[Object(q.jsx)("input",{type:"checkbox",defaultChecked:!0,id:"driver-age"}),Object(q.jsx)("label",{htmlFor:"driver-age",children:"Driver aged 30 \u2013 65 ?"})]})]}),Object(q.jsxs)(de,{children:[Object(q.jsxs)(he,{children:[Object(q.jsx)("input",{type:"text",placeholder:"Pick-Up Location",onChange:J((function(e){var n=e.target.value.trim();""===n||n.length<2?t([]):(a(!0),fetch("https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=".concat(n)).then((function(e){return e.json()})).then((function(e){return t(Object(ve.a)(e.results.docs))})).catch((function(e){return console.log(e)})).finally((function(){return a(!1)})))})),ref:s,"aria-label":"Enter Location"}),r.length>0&&Object(q.jsx)(je,{id:"suggestions",role:"alert","aria-live":"assertive","aria-label":"Search results for ".concat(s.current.value,". ").concat(r.reduce((function(e,n){return e+"".concat(n.name,", ")}),"")),children:r.map((function(e){return Object(q.jsx)(te,{details:e,setValue:o},"".concat(e.name,"+").concat(e.index))}))}),l&&Object(q.jsx)("svg",{fill:N,viewBox:"0 0 24 24",height:"20px",xmlns:"http://www.w3.org/2000/svg",children:Object(q.jsx)("path",{d:"M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19z"})})]}),Object(q.jsxs)($,{gap:"0.75rem",children:[Object(q.jsxs)(be,{children:[Object(q.jsx)("input",{type:"date",id:"pickup-date",name:"pickup-date",defaultValue:"2021-05-28","aria-label":"Enter Pickup date"}),Object(q.jsx)(xe,{children:Object(q.jsx)("select",{name:"pickup-time",defaultValue:"10:30","aria-label":"Select Pickup Time",children:U.map((function(e){return Object(q.jsx)("option",{value:e,children:e},e)}))})})]}),Object(q.jsxs)(be,{children:[Object(q.jsx)("input",{type:"date",id:"drop-date",name:"drop-date",defaultValue:"2021-06-01","aria-label":"Enter Drop date"}),Object(q.jsx)(xe,{children:Object(q.jsx)("select",{name:"drop-time",defaultValue:"15:30","aria-label":"Select Drop Time",children:U.map((function(e){return Object(q.jsx)("option",{value:e,children:e},e)}))})})]})]}),Object(q.jsx)("button",{type:"button",children:"Search"})]})]})},Ae=function(){return Object(q.jsx)($,{background:R,justifyContent:"center",children:Object(q.jsxs)(le,{children:[Object(q.jsx)(we,{}),Object(q.jsx)("h1",{children:"Car Hire \u2013 Search, Compare & Save"}),Object(q.jsx)(ye,{})]})})},ke=F.a.main(O||(O=Object(D.a)(["\n    width: 100vw;\n    padding: 1rem;\n    max-width: 1142px;\n"]))),Ce=Object(F.a)($)(m||(m=Object(D.a)(["\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 2rem;\n    > h3 {\n        flex: 0 0 100%;\n    }\n    > img {\n        box-shadow: 0 2px 8px rgb(0 0 0 / 16%);\n    }\n"]))),Se=Object(F.a)($)(f||(f=Object(D.a)(["\n    margin: 4rem 0;\n    flex-direction: column;\n    gap: 2rem;\n    & img {\n        width: 48px;\n        height: 48px;\n        margin-right: 1rem;\n    }\n\n    @media (min-width: 1000px) {\n        flex-direction: row;\n        gap: 1rem;\n        & h3 {\n            margin-bottom: 0.5rem;\n        }\n        & img {\n            width: 64px;\n            height: 64px;\n        }\n    }\n"]))),Me=Object(F.a)($)(w||(w=Object(D.a)(["\n    flex-direction: column;\n    gap: 1rem;\n    > div {\n        flex-direction: column;\n        border-radius: 8px;\n        border: solid 1px ",";\n        padding: 1rem;\n    }\n    & img {\n        width: 125px;\n        height: 112px;\n        margin-right: 1rem;\n    }\n    & h3 {\n        line-height: 28px;\n    }\n    & input {\n        flex: 1 1 auto;\n        padding-left: 1rem;\n        border: solid 1px ",";\n    }\n    & button {\n        width: 100%;\n        background: ",";\n        color: ",";\n        padding: 0.75rem;\n    }\n\n    @media (min-width: 768px) {\n        flex-direction: row;\n        > div {\n            flex-direction: row;\n        }\n        & button {\n            width: fit-content;\n        }\n    }\n"])),V,V,T,z),Ee=F.a.section(v||(v=Object(D.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 2rem 0;\n    > div {\n        flex: 0 0 50%;\n        padding: 1rem;\n        flex-wrap: wrap;\n        > h3 {\n            flex: 0 0 100%;\n            margin-bottom: 0.5rem;\n        }\n        > a {\n            min-width: 50%;\n            margin: 0.5rem 0;\n        }\n    }\n\n    @media (min-width: 768px) {\n        flex-direction: row;\n    }\n"]))),_e=F.a.section(y||(y=Object(D.a)(["\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    border-radius: 8px;\n    border: solid 1px ",";\n    > h3 {\n        padding: 1rem;\n        border-bottom: solid 1px ",";\n    }\n    margin: 2rem 0;\n    overflow: hidden;\n"])),z,V,V),Ie=Object(F.a)($)(A||(A=Object(D.a)(["\n    flex-direction: column;\n    background: ",";\n    border-bottom: solid 1px ",';\n    > p {\n        cursor: pointer;\n        padding: 1rem;\n        position: relative;\n        &:after {\n            content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> </svg>\');\n            position: absolute;\n            right: 1rem;\n            transform: rotate(180deg);\n            transition: transform 100ms ease-in-out;\n        }\n        &.expanded:after {\n            transform: rotate(0deg);\n        }\n    }\n    > ul,\n    div {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-between;\n        font-size: 14px;\n        height: 0;\n        list-style-type: none;\n        > li {\n            margin: 8px 0;\n            min-width: 50%;\n        }\n    }\n    > div ul {\n        padding: 0 1rem;\n        > li {\n            margin: 8px 0;\n        }\n    }\n\n    @media (min-width: 768px) {\n        > ul li {\n            min-width: 25%;\n        }\n    }\n'])),z,V),Be=function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(Ce,{children:[Object(q.jsx)("h3",{children:"Rentalcars.com connects you to the biggest brands in car hire."}),Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/images/supplier_logos/greenmotion_logo_lrg.gif",alt:"",width:"80",height:"40"}),Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/images/supplier_logos/avis_logo_lrg.gif",alt:"",width:"80",height:"40"}),Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/images/supplier_logos/easirent_logo_lrg.gif",alt:"",width:"80",height:"40"}),Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/images/supplier_logos/europcar_logo_lrg.gif",alt:"",width:"80",height:"40"}),Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/images/supplier_logos/sixt_logo_lrg.gif",alt:"",width:"80",height:"40"}),Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/images/supplier_logos/alamo_logo_lrg.gif",alt:"",width:"80",height:"40"}),Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/images/supplier_logos/budget_logo_lrg.gif",alt:"",width:"80",height:"40"}),Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/images/supplier_logos/dollar_logo_lrg.gif",alt:"",width:"80",height:"40"})]}),Object(q.jsxs)(Se,{children:[Object(q.jsxs)($,{children:[Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/mobile/usp_calendar@1x.png",alt:""}),Object(q.jsxs)(ee,{children:[Object(q.jsx)("h3",{children:"Flexible rentals"}),Object(q.jsx)("p",{children:"Cancel or change most bookings for free up to 48 hours before pick-up"})]})]}),Object(q.jsxs)($,{children:[Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/mobile/usp_magnifier@1x.png",alt:""}),Object(q.jsxs)(ee,{children:[Object(q.jsx)("h3",{children:"No hidden fees"}),Object(q.jsx)("p",{children:"Know exactly what you\u2019re paying"})]})]}),Object(q.jsxs)($,{children:[Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/mobile/usp_wallet@1x.png",alt:""}),Object(q.jsxs)(ee,{children:[Object(q.jsx)("h3",{children:"Price Match Guarantee"}),Object(q.jsx)("p",{children:"Found the same deal for less? We\u2019ll match the price."})]})]})]}),Object(q.jsxs)(Me,{children:[Object(q.jsxs)($,{children:[Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/covid-banner/mobile/thumbnail_covid@1x.png",alt:""}),Object(q.jsxs)($,{flexDirection:"column",children:[Object(q.jsx)("h3",{children:"Clean cars. Flexible bookings. Socially distant rental counters."}),Object(q.jsx)(ee,{margin:"0.5rem 0",children:"We\u2019re working with our partners to keep you safe and in the driving seat."}),Object(q.jsx)(ne,{href:"#",children:"Find out more"})]})]}),Object(q.jsxs)($,{children:[Object(q.jsx)("img",{src:"https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/email-subscription/mobile/email_signup@1x.png",alt:""}),Object(q.jsxs)($,{flexDirection:"column",gap:"1rem",children:[Object(q.jsx)("h3",{children:"Subscribe for exclusive offers and deals!"}),Object(q.jsxs)($,{gap:"1rem",style:{flexWrap:"wrap"},children:[Object(q.jsx)("input",{type:"email",placeholder:"Email Address","aria-label":"Enter Email"}),Object(q.jsx)("button",{type:"button",children:"Sign Me Up !"})]})]})]})]})]})},De=function(){return Object(q.jsxs)(Ee,{children:[Object(q.jsxs)($,{children:[Object(q.jsx)("h3",{children:"Top Worldwide Destinations"}),Object(q.jsx)(ne,{href:"#",children:"London"}),Object(q.jsx)(ne,{href:"#",children:"Edinburgh"}),Object(q.jsx)(ne,{href:"#",children:"San Francisco"}),Object(q.jsx)(ne,{href:"#",children:"Zurich"}),Object(q.jsx)(ne,{href:"#",children:"Milan"}),Object(q.jsx)(ne,{href:"#",children:"Munich"}),Object(q.jsx)(ne,{href:"#",children:"Split"}),Object(q.jsx)(ne,{href:"#",children:"Bangkok"}),Object(q.jsx)(ne,{href:"#",children:"Barcelona"}),Object(q.jsx)(ne,{href:"#",children:"Florence"})]}),Object(q.jsxs)($,{children:[Object(q.jsx)("h3",{children:"Top Worldwide Airports"}),Object(q.jsx)(ne,{href:"#",children:"Heathrow Airport"}),Object(q.jsx)(ne,{href:"#",children:"San Francisco Airport"}),Object(q.jsx)(ne,{href:"#",children:"Zurich Airport"}),Object(q.jsx)(ne,{href:"#",children:"Edinburgh Airport"}),Object(q.jsx)(ne,{href:"#",children:"Keflavik Airport"}),Object(q.jsx)(ne,{href:"#",children:"Los Angeles Airport"}),Object(q.jsx)(ne,{href:"#",children:"Milan Malpensa Airport"}),Object(q.jsx)(ne,{href:"#",children:"Boston Airport"}),Object(q.jsx)(ne,{href:"#",children:"Amsterdam Schiphol Airport"}),Object(q.jsx)(ne,{href:"#",children:"Bangkok Suvarnabhumi Airport"})]})]})},Fe=function(){return Object(q.jsxs)(_e,{children:[Object(q.jsx)("h3",{children:"Frequently Asked Questions"}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"What do I need to hire a car?"}),Object(q.jsxs)("div",{children:["To book your car, all you need is a credit or debit card. When you pick the car up, you'll need:",Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:"Your voucher /eVoucher, to show that you've paid for the car."}),Object(q.jsx)("li",{children:"The main driver's credit / debit card, with enough available funds for the car's deposit."}),Object(q.jsx)("li",{children:"Each driver's full, valid driving licence, which they've held for at least 12 months (often 24)."}),Object(q.jsx)("li",{children:"Your passport and any other ID the car hire company needs to see."})]})]})]}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"How old do I have to be to rent a car?"}),Object(q.jsx)("div",{children:"For most car hire companies, the age requirement is between 21 and 70 years old. If you're under 25 or over 70, you might have to pay an additional fee."})]}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"Can I book a hire car for someone else?"}),Object(q.jsx)("div",{children:"Yes, as long as they meet these requirements. Just fill in their details while you're making the reservation."})]}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"How do I find the cheapest car hire deal?"}),Object(q.jsx)("div",{children:"We work with all the major international car hire brands (and lots of smaller local companies) to bring you a huge choice of cars at the very best prices. That's how we can find you cheap car hire deals at over 60,000 locations worldwide. To compare prices and find your ideal car at an unbeatable price, just use our search form."})]}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"What should I look for when I'm choosing a car?"}),Object(q.jsx)("div",{children:Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:"Space: You'll enjoy your rental far more if you choose a car with plenty of room for your passengers and luggage. ."}),Object(q.jsx)("li",{children:"Fuel policy: Not planning on driving much? A Like for like fuel policy can save you a lot of money."}),Object(q.jsx)("li",{children:"Location: You can't beat an 'on-airport' pick-up for convenience, but an 'off-airport' pick-up with a shuttle bus can be much cheaper."})]})})]}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"Are all fees included in the rental price?"}),Object(q.jsx)("div",{children:"The vast majority of our rentals include Theft Protection, Collision Damage Waiver (CDW), local taxes, airport surcharges and any road fees. You'll pay for any \u2018extras' when you pick your car up, along with any young driver, additional driver or one-way fees \u2013 but we'll explain any additional costs before you book your car (and taking your own child seats or GPS can be an easy way to reduce your costs). For more details on what's included, just check the Ts&Cs of any car you're looking at."})]})]})},Re=function(){return Object(q.jsxs)(_e,{children:[Object(q.jsx)("h3",{children:"Additional Information"}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"Related Searches"}),Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Luxury Car Hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Convertible Car Hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"7 & 9 Seater Car Hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"One-Way Car Hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Car Hire Europe"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Airport Car Hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Magazine"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"RentalGuides"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Car Hire Companies"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"All Countries"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Popular Countries"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Popular Cities"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Popular Airports"})})]})]}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"Popular Destinations"}),Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Los Angeles car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Vienna car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Keflavik car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Amsterdam car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Chicago car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Paris car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Zagreb car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Boston car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Dublin car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Seattle car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Madrid car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Rome car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Dubai car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Dubrovnik car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Prague car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Sevilla car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Frankfurt car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Nice car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Auckland car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Manchester car hire"})})]})]}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"Airports"}),Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Seattle Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Munich Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Chicago O'Hare Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Barcelona Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Auckland Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Dublin Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Frankfurt Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Nice Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Vienna Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Dubrovnik Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Prague Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Zagreb Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Rome Fiumicino Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Madrid Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Manchester Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Faro Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Florence International Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Orange County Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Anchorage Airport car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Paris Charles De Gaulle Airport car hire"})})]})]}),Object(q.jsxs)(Ie,{children:[Object(q.jsx)("p",{onClick:Z,children:"Car Hire Companies"}),Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Budget car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Avis car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Dollar car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Hertz car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Sixt car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Europcar car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Thrifty car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Alamo car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"tr.brands.driveOnHolidays car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Avec Car Rentals car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Car Net car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"tr.brands.europcarLocanord car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"First Car Rental car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Global Rent A Car car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Goldcar car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Greenmotion car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Keddy By Europcar car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Locauto car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Mega Rent car hire"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",children:"Megadrive car hire"})})]})]})]})},He=function(){return Object(q.jsxs)(ke,{children:[Object(q.jsx)(Be,{}),Object(q.jsx)(De,{}),Object(q.jsx)(Fe,{}),Object(q.jsx)(Re,{})]})},Te=F.a.footer(k||(k=Object(D.a)(["\n    background: ",";\n    font-size: 14px;\n    padding-bottom: 2rem;\n    text-align: center;\n"])),z),Le=F.a.ul(C||(C=Object(D.a)(["\n    background: ",";\n    padding: 1rem;\n    list-style-type: none;\n    > li {\n        margin: 0.5rem;\n    }\n\n    @media (min-width: 768px) {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n    }\n"])),R),Pe=Object(F.a)($)(S||(S=Object(D.a)(["\n    flex-direction: column;\n    width: 75%;\n    margin: 0 auto;\n    text-align: center;\n    font-size: 14px;\n    padding: 1rem 0;\n    gap: 0.75rem;\n"]))),ze=Object(F.a)($)(M||(M=Object(D.a)(["\n    justify-content: space-around;\n    display: none;\n\n    @media (min-width: 768px) {\n        display: flex;\n    }\n"]))),Ne=function(){return Object(q.jsxs)(Te,{children:[Object(q.jsxs)(Le,{children:[Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",color:z,children:"Privacy Notice"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",color:z,children:"Cookies"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",color:z,children:"Terms & Conditions"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",color:z,children:"Help"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",color:z,children:"Modern Slavery Statement"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",color:z,children:"Supply Partner Enquiry and Marketplace"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",color:z,children:"Affiliate Programme"})}),Object(q.jsx)("li",{children:Object(q.jsx)(ne,{href:"#",color:z,children:"Careers"})})]}),Object(q.jsxs)(Pe,{children:[Object(q.jsx)("section",{children:"Rentalcars.com is a trading name of Booking.com Transport Limited which is a limited company registered in England and Wales (Number: 05179829) whose registered address is at 100 New Bridge Street, London, EC4V 6JA. VAT number: GB 855349007."}),Object(q.jsx)("section",{children:"Rentalcars.com is part of Booking Holdings Inc., the world leader in online travel & related services."}),Object(q.jsx)("section",{children:"Booking.com Transport Limited (FCA Firm Reference No 777648) is an Appointed Representative of Cover Genius Limited, which is authorised and registered by the Financial Conduct Authority, Firm Reference No 750711. Traveljigsaw Insurance Limited is incorporated in Malta and is authorised by the Malta Financial Services Authority to carry on the business of insurance in terms of the Insurance Business Act 1998. Company Registration Number: C82173 Registered Office, Development House, St Anne Street, Floriana, FRN 9010, Malta."}),Object(q.jsxs)(ze,{children:[Object(q.jsx)("img",{src:"https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png",alt:"",width:"91px",height:"26px"}),Object(q.jsx)("img",{src:"https://q-cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png",alt:"",width:"91px",height:"26px"}),Object(q.jsx)("img",{src:"https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png",alt:"",width:"79px",height:"26px"}),Object(q.jsx)("img",{src:"https://q-cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png",alt:"",width:"70px",height:"26px"}),Object(q.jsx)("img",{src:"https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png",alt:"",width:"109px",height:"26px"}),Object(q.jsx)("img",{src:"https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png",alt:"",width:"95px",height:"26px"})]}),Object(q.jsx)("section",{children:"Copyright \xa9 2020 Booking.com Transport Limited trading as Rentalcars.com. All rights reserved"})]})]})};var Ve=function(){return Object(q.jsxs)($,{flexDirection:"column",width:"100vw",alignItems:"center",children:[Object(q.jsx)(Ae,{}),Object(q.jsx)(He,{}),Object(q.jsx)(Ne,{})]})};B.a.render(Object(q.jsx)(_.a.StrictMode,{children:Object(q.jsx)(Ve,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.61e40c27.chunk.js.map