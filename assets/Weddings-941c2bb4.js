import{r as f,M as L,k as w,j as g,d as i,T as j,c as W,m as O,o as M,p as T}from"./index-bb04c117.js";import{E as k,C as E}from"./Carousel-61f5e975.js";import{P as R}from"./Page-d49df12b.js";import{S as P}from"./Separator-dcb132ba.js";import{L as z}from"./LazyImage-177986fc.js";import{M as G}from"./Menus-f2a89121.js";import{g as C}from"./get-styles-ref-1f22bf7e.js";import"./ChevronIcon-8d1ee6ae.js";import"./Alert-137658a3.js";import"./use-uncontrolled-3f20ab05.js";var D={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function v(m){var l=k.optionsHandler(),h=l.merge(D,v.globalOptions),e,t,s,r=0,c=!1;function y(d){t=d,e=l.atMedia(x.options),c=e.jump,s=e.stopOnInteraction?u:n;var p=t.internalEngine().eventStore,b=t.rootNode(),S=e.rootNode&&e.rootNode(b)||b;t.on("pointerDown",s),e.stopOnInteraction||t.on("pointerUp",a),e.stopOnMouseEnter&&(p.add(S,"mouseenter",s),e.stopOnInteraction||p.add(S,"mouseleave",a)),p.add(document,"visibilitychange",function(){if(document.visibilityState==="hidden")return n();a()}),p.add(window,"pagehide",function(N){N.persisted&&n()}),e.playOnInit&&o()}function u(){t.off("pointerDown",s),e.stopOnInteraction||t.off("pointerUp",a),n(),r=0}function o(d){n(),typeof d<"u"&&(c=d),r=window.setTimeout(I,e.delay)}function n(){r&&window.clearTimeout(r)}function a(){r&&(n(),o())}function I(){var d=t.internalEngine().index,p=e.stopOnLastSnap&&d.get()===d.max;if(p)return u();t.canScrollNext()?t.scrollNext(c):t.scrollTo(0,c),o()}var x={name:"autoplay",options:l.merge(h,m),init:y,destroy:u,play:o,stop:n,reset:a};return x}v.globalOptions=void 0;const F=W((m,l)=>({indicator:{width:"2rem",transition:"width 250ms ease","&[data-active]":{width:"3rem"}},control:{"&[data-inactive]":{opacity:0,cursor:"default"}},controls:{ref:C("controls"),transition:"opacity 150ms ease",opacity:0},root:{"&:hover":{[`& .${C("controls")}`]:{opacity:1}}}}));function X(){var u;const[m,l]=f.useState([]),{slideshow:h,setSlideshow:e}=f.useContext(L),{classes:t}=F(),s=f.useRef(v({delay:5e3})),r=w("(min-width: 1200px)"),c=w("(min-width: 900px)"),y=w("(min-width: 600px)");return f.useEffect(()=>{window.scrollTo(0,0);const o=async()=>{const n=O(T,"images","Slideshow"),a=await M(n);if(a.exists())e(a.data());else return};!h.id&&o()},[]),f.useEffect(()=>{window.scrollTo(0,0),(async()=>{const n=O(T,"menus","Wedding"),a=await M(n);if(a.exists())l(a.data());else return})()},[]),g(R,{children:[i(E,{maw:r?"75%":"100%",mx:"auto",withIndicators:!0,height:c?500:y?400:300,plugins:[s.current],onMouseEnter:s.current.stop,onMouseLeave:s.current.reset,classNames:t,children:(u=h.images)==null?void 0:u.map(o=>i(E.Slide,{children:i(z,{src:o.file,style:{width:"100%",height:"100%",objectFit:"cover"},alt:o.name})},o.id))}),i(j,{color:"#bbb",fw:"lighter",size:"sm",align:"center",children:"Photos were provided by Jennifer Cardinal Photography"}),g("div",{style:{marginTop:"4rem"},children:[i(P,{title:"Weddings"}),g("div",{className:"wedding-content",children:[g("div",{children:[i("p",{style:{marginTop:0},children:"The Grand Lodge at Maneeley's is a full service wedding & event venue in South Windsor, CT. Five acres of manicured grounds are a picture-perfect backdrop for your celebration. Maneeley's exemplifies rustic romantic charm, with wooden walls and exposed beam ceilings. We can accommodate 100 - 200 guests, with space available in the Grand Lodge, as well as the connecting Grand Tent."}),i("p",{children:"Maneeley's is a top leader in the CT wedding industry, creating amazing memories for thousands of couples over the last 25 years. We will assist you with every detail during the planning process of your wedding day. Our top tier staff will attend to your guests, and our bridal attendant will give you their undivided attention. Our team of expert chefs, lead by our Executive Chef Edgardo, will prepare a custom, mouthwatering menu for you and your guests to experience."})]}),i("aside",{children:i(G,{menus:m,separator:!1})})]})]})]})}export{X as default};