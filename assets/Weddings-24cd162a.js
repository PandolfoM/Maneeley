import{r as y,ad as M,y as g,j as C,b as d,c as I,D as L,O as N,E as j,aa as O}from"./index-2d913e34.js";import{E as W,C as S}from"./Carousel-a7fea83c.js";import{P as k}from"./Page-84d3d664.js";import{S as P}from"./Separator-f4bd40e7.js";import{L as R}from"./LazyImage-8a317c47.js";import{T as z}from"./Text-5d84cb78.js";import"./ChevronIcon-a6dd67a3.js";var D={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function w(p){var l=W.optionsHandler(),h=l.merge(D,w.globalOptions),e,t,c,o=0,n=!1;function a(s){t=s,e=l.atMedia(v.options),n=e.jump,c=e.stopOnInteraction?f:r;var u=t.internalEngine().eventStore,x=t.rootNode(),b=e.rootNode&&e.rootNode(x)||x;t.on("pointerDown",c),e.stopOnInteraction||t.on("pointerUp",m),e.stopOnMouseEnter&&(u.add(b,"mouseenter",c),e.stopOnInteraction||u.add(b,"mouseleave",m)),u.add(document,"visibilitychange",function(){if(document.visibilityState==="hidden")return r();m()}),u.add(window,"pagehide",function(T){T.persisted&&r()}),e.playOnInit&&i()}function f(){t.off("pointerDown",c),e.stopOnInteraction||t.off("pointerUp",m),r(),o=0}function i(s){r(),typeof s<"u"&&(n=s),o=window.setTimeout(E,e.delay)}function r(){o&&window.clearTimeout(o)}function m(){o&&(r(),i())}function E(){var s=t.internalEngine().index,u=e.stopOnLastSnap&&s.get()===s.max;if(u)return f();t.canScrollNext()?t.scrollNext(n):t.scrollTo(0,n),i()}var v={name:"autoplay",options:l.merge(h,p),init:a,destroy:f,play:i,stop:r,reset:m};return v}w.globalOptions=void 0;const G=I((p,l)=>({indicator:{width:"2rem",transition:"width 250ms ease","&[data-active]":{width:"3rem"}},control:{"&[data-inactive]":{opacity:0,cursor:"default"}},controls:{ref:O("controls"),transition:"opacity 150ms ease",opacity:0},root:{"&:hover":{[`& .${O("controls")}`]:{opacity:1}}}}));function $(){var n;const{slideshow:p,setSlideshow:l}=y.useContext(M),{classes:h}=G(),e=y.useRef(w({delay:5e3})),t=g("(min-width: 1200px)"),c=g("(min-width: 900px)"),o=g("(min-width: 600px)");return y.useEffect(()=>{window.scrollTo(0,0);const a=async()=>{const f=L(j,"images","Slideshow"),i=await N(f);if(i.exists())l(i.data());else return};return()=>{!p.id&&a()}},[]),C(k,{children:[d(S,{maw:t?"75%":"100%",mx:"auto",withIndicators:!0,height:c?500:o?400:300,plugins:[e.current],onMouseEnter:e.current.stop,onMouseLeave:e.current.reset,classNames:h,children:(n=p.images)==null?void 0:n.map(a=>d(S.Slide,{children:d(R,{src:a.file,style:{width:"100%",height:"100%",objectFit:"cover"},alt:a.name})},a.id))}),d(z,{color:"#bbb",fw:"lighter",size:"sm",align:"center",children:"Photos were provided by Jennifer Cardinal Photography"}),d(P,{title:"Weddings",style:{marginTop:"4rem"}}),d("p",{children:"The Grand Lodge at Maneeley's is a full service wedding & event venue in South Windsor, CT. Five acres of manicured grounds are a picture-perfect backdrop for your celebration. Maneeley's exemplifies rustic romantic charm, with wooden walls and exposed beam ceilings. We can accommodate 100 - 200 guests, with space available in the Grand Lodge, as well as the connecting Grand Tent."}),d("p",{children:"Maneeley's is a top leader in the CT wedding industry, creating amazing memories for thousands of couples over the last 25 years. We will assist you with every detail during the planning process of your wedding day. Our top tier staff will attend to your guests, and our bridal attendant will give you their undivided attention. Our team of expert chefs, lead by our Executive Chef Edgardo, will prepare a custom, mouthwatering menu for you and your guests to experience."})]})}export{$ as default};
