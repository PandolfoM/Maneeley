import{r as p,_ as oe,a as se,c as X,u as ce,b as le,e as de,R as N,j as h,d as l,F as T,f as pe,g as ue,n as F,h as fe,i as he}from"./index-3a18dfe3.js";import{c as me,a as C,b as ge,y as ve}from"./yup-resolver-14fe63dd.js";import{A as be}from"./Button-cd491576.js";import{S as D}from"./Separator-4a8690d3.js";import{S as E}from"./SubtleButton-cbccf8ad.js";import{P as ye}from"./Page-e0840542.js";import{I as O,u as we,a as xe}from"./useUsers-50c18d2e.js";import{T as I}from"./TextInput-9a185bf3.js";var Se=p.useLayoutEffect,_e=function(t){var r=p.useRef(t);return Se(function(){r.current=t}),r},$=function(t,r){if(typeof t=="function"){t(r);return}t.current=r},Re=function(t,r){var n=p.useRef();return p.useCallback(function(e){t.current=e,n.current&&$(n.current,null),n.current=r,r&&$(r,e)},[r])},V={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},Y=function(t){Object.keys(V).forEach(function(r){t.style.setProperty(r,V[r],"important")})},f=null,Ee=function(t,r){var n=t.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?n+r.borderSize:n-r.paddingSize};function ze(a,t,r,n){r===void 0&&(r=1),n===void 0&&(n=1/0),f||(f=document.createElement("textarea"),f.setAttribute("tabindex","-1"),f.setAttribute("aria-hidden","true"),Y(f)),f.parentNode===null&&document.body.appendChild(f);var e=a.paddingSize,c=a.borderSize,o=a.sizingStyle,d=o.boxSizing;Object.keys(o).forEach(function(b){var y=b;f.style[y]=o[y]}),Y(f),f.value=t;var i=Ee(f,a);f.value="x";var s=f.scrollHeight-e,u=s*r;d==="border-box"&&(u=u+e+c),i=Math.max(u,i);var m=s*n;return d==="border-box"&&(m=m+e+c),i=Math.min(m,i),[i,s]}var U=function(){},Pe=function(t,r){return t.reduce(function(n,e){return n[e]=r[e],n},{})},Te=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Ce=!!document.documentElement.currentStyle,Ie=function(t){var r=window.getComputedStyle(t);if(r===null)return null;var n=Pe(Te,r),e=n.boxSizing;if(e==="")return null;Ce&&e==="border-box"&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var c=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),o=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:c,borderSize:o}},Ne=function(t){var r=_e(t);p.useLayoutEffect(function(){var n=function(c){r.current(c)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}},[])},ke=function(t,r){var n=t.cacheMeasurements,e=t.maxRows,c=t.minRows,o=t.onChange,d=o===void 0?U:o,i=t.onHeightChange,s=i===void 0?U:i,u=oe(t,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),m=u.value!==void 0,b=p.useRef(null),y=Re(b,r),v=p.useRef(0),w=p.useRef(),x=function(){var g=b.current,R=n&&w.current?w.current:Ie(g);if(R){w.current=R;var P=ze(R,g.value||g.placeholder||"x",c,e),S=P[0],A=P[1];v.current!==S&&(v.current=S,g.style.setProperty("height",S+"px","important"),s(S,{rowHeight:A}))}},z=function(g){m||x(),d(g)};return p.useLayoutEffect(x),Ne(x),p.createElement("textarea",se({},u,{onChange:z,ref:y}))},Le=p.forwardRef(ke);const Ae=Le;var Fe=X(a=>({input:{paddingTop:a.spacing.xs,paddingBottom:a.spacing.xs}}));const Oe=Fe;var We=Object.defineProperty,je=Object.defineProperties,He=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,K=(a,t,r)=>t in a?We(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,_=(a,t)=>{for(var r in t||(t={}))J.call(t,r)&&K(a,r,t[r]);if(k)for(var r of k(t))G.call(t,r)&&K(a,r,t[r]);return a},W=(a,t)=>je(a,He(t)),Me=(a,t)=>{var r={};for(var n in a)J.call(a,n)&&t.indexOf(n)<0&&(r[n]=a[n]);if(a!=null&&k)for(var n of k(a))t.indexOf(n)<0&&G.call(a,n)&&(r[n]=a[n]);return r};const qe={autosize:!1,size:"sm",__staticSelector:"Textarea"},Q=p.forwardRef((a,t)=>{const r=ce("Textarea",qe,a),{autosize:n,maxRows:e,minRows:c,label:o,error:d,description:i,id:s,className:u,required:m,style:b,wrapperProps:y,classNames:v,styles:w,size:x,__staticSelector:z,sx:L,errorProps:g,descriptionProps:R,labelProps:P,inputWrapperOrder:S,inputContainer:A,unstyled:H,withAsterisk:ee,variant:M}=r,te=Me(r,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk","variant"]),q=le(s),{classes:re,cx:ne}=Oe(),{systemStyles:ae,rest:ie}=de(te),B=_({required:m,ref:t,error:d,id:q,classNames:W(_({},v),{input:ne(re.input,v==null?void 0:v.input)}),styles:w,__staticSelector:z,size:x,multiline:!0,unstyled:H,variant:M},ie);return N.createElement(O.Wrapper,_(_({label:o,error:d,id:q,description:i,required:m,style:b,className:u,classNames:v,styles:w,size:x,__staticSelector:z,sx:L,errorProps:g,labelProps:P,descriptionProps:R,inputContainer:A,inputWrapperOrder:S,unstyled:H,withAsterisk:ee,variant:M},ae),y),n?N.createElement(O,W(_({},B),{component:Ae,maxRows:e,minRows:c})):N.createElement(O,W(_({},B),{component:"textarea",rows:c})))});Q.displayName="@mantine/core/Textarea";function j(a,t){return j=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},j(a,t)}var Be=function(a){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src=a,document.head&&document.head.appendChild(t)},De=function(a){return Array.from(document.scripts).reduce(function(t,r){return t||a.test(r.src)},!1)},$e=/(http|https):\/\/(www)?.+\/recaptcha/,Ve=["sitekey","theme","size","badge","tabindex","hl","isolated"],Z=function(a){var t,r;function n(){for(var e,c=arguments.length,o=new Array(c),d=0;d<c;d++)o[d]=arguments[d];return(e=a.call.apply(a,[this].concat(o))||this).container=void 0,e.timer=void 0,e.state={instanceKey:Date.now(),ready:!1,rendered:!1,invisible:e.props.size==="invisible"},e._isAvailable=function(){var i;return!!((i=window.grecaptcha)!=null&&i.ready)},e._inject=function(){e.props.inject&&!De($e)&&Be("https://recaptcha.net/recaptcha/api.js?render=explicit"+(e.props.hl?"&hl="+e.props.hl:""))},e._prepare=function(){var i=e.props,s=i.explicit,u=i.onLoad;window.grecaptcha.ready(function(){e.setState({ready:!0},function(){s||e.renderExplicitly(),u&&u()})})},e._renderRecaptcha=function(i,s){return window.grecaptcha.render(i,s)},e._resetRecaptcha=function(){return window.grecaptcha.reset(e.state.instanceId)},e._executeRecaptcha=function(){return window.grecaptcha.execute(e.state.instanceId)},e._getResponseRecaptcha=function(){return window.grecaptcha.getResponse(e.state.instanceId)},e._onVerify=function(i){return e.props.onVerify(i)},e._onExpire=function(){return e.props.onExpire&&e.props.onExpire()},e._onError=function(){return e.props.onError&&e.props.onError()},e._stopTimer=function(){e.timer&&clearInterval(e.timer)},e.componentDidMount=function(){e._inject(),e._isAvailable()?e._prepare():e.timer=window.setInterval(function(){e._isAvailable()&&(e._prepare(),e._stopTimer())},500)},e.componentWillUnmount=function(){e._stopTimer()},e.renderExplicitly=function(){return new Promise(function(i,s){if(e.state.rendered)return s(new Error("This recaptcha instance has been already rendered."));if(!e.state.ready||!e.container)return s(new Error("Recaptcha is not ready for rendering yet."));var u=e._renderRecaptcha(e.container,{sitekey:e.props.sitekey,theme:e.props.theme,size:e.props.size,badge:e.state.invisible?e.props.badge:void 0,tabindex:e.props.tabindex,callback:e._onVerify,"expired-callback":e._onExpire,"error-callback":e._onError,isolated:e.state.invisible?e.props.isolated:void 0,hl:e.state.invisible?void 0:e.props.hl});e.setState({instanceId:u,rendered:!0},function(){e.props.onRender&&e.props.onRender(),i()})})},e.reset=function(){return new Promise(function(i,s){if(e.state.rendered)return e._resetRecaptcha(),i();s(new Error("This recaptcha instance did not render yet."))})},e.execute=function(){return new Promise(function(i,s){return e.state.invisible?(e.state.rendered&&(e._executeRecaptcha(),i()),s(new Error("This recaptcha instance did not render yet."))):s(new Error("Manual execution is only available for invisible size."))})},e.getResponse=function(){return new Promise(function(i,s){if(e.state.rendered)return i(e._getResponseRecaptcha());s(new Error("This recaptcha instance did not render yet."))})},e.render=function(){var i=N.createElement("div",{key:e.state.instanceKey,id:e.props.id,className:e.props.className,ref:function(s){return e.container=s}});return e.props.children?e.props.children({renderExplicitly:e.renderExplicitly,reset:e.reset,execute:e.execute,getResponse:e.getResponse,recaptchaComponent:i}):i},e}return r=a,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,j(t,r),n.getDerivedStateFromProps=function(e,c){var o=e.size==="invisible";return o!==c.invisible?{invisible:o}:null},n.prototype.componentDidUpdate=function(e){var c=this;Ve.reduce(function(o,d){return c.props[d]!==e[d]?[].concat(o,[d]):o},[]).length>0&&this.setState({instanceKey:Date.now(),rendered:!1},function(){c.props.explicit||c.renderExplicitly()})},n}(p.Component);Z.defaultProps={id:"",className:"g-recaptcha",theme:"light",size:"normal",badge:"bottomright",tabindex:0,explicit:!1,inject:!0,isolated:!1,hl:""};const Ye=me().shape({first:C().min(2,"Too Short").max(50,"Too Long").required("Required").label("First Name"),last:C().min(2,"Too Short").max(50,"Too Long").required("Required").label("Last Name"),email:C().email("Invalid email").required("Required").label("Email"),phone:ge().notRequired().nullable().typeError("Invalid phone number").label("Phone Number").transform((a,t)=>t!==""?Number(t):null),message:C().min(10,"Too Short").required("Required").label("Message")}),Ue=X(()=>({label:{color:"#fffcf1"},wrapper:{border:"1px solid #3c3c3c",backgroundColor:"#2e2e2e80","&:focus":{borderWidth:"1px",borderStyle:"solid",borderImage:"linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1"},"&:focus-within":{borderWidth:"1px",borderStyle:"solid",borderImage:"linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1"}},visibilityToggle:{"&:hover":{background:"transparent"}}}));function rt(){const{classes:a}=Ue(),{contactForm:t}=we(),r=p.useRef(null);p.useEffect(()=>{window.scrollTo(0,0)},[]);const n=xe({initialValues:{first:"",last:"",email:"",phone:"",message:""},validate:ve(Ye)}),e=()=>{r.current.getResponse().then(o=>{o&&c()})},c=async()=>{F.show({id:"submit-noti",title:"Sending",message:"Please wait while we send your message.",loading:!0,autoClose:!1,withCloseButton:!1}),await t(n.values).then(()=>{n.reset(),F.update({id:"submit-noti",color:"green",icon:l(T,{icon:fe}),title:"Sent!",message:"Your message has been sent!"})}).catch(o=>{F.show({title:"Error",message:"There has been an error!",color:"red",icon:l(T,{icon:he})})}),r.current.reset()};return h(ye,{flex:!0,children:[h("form",{onSubmit:o=>{o.preventDefault(),r.current.execute()},className:"contact-form contact-form-100",children:[h("div",{className:`form-name ${a}`,children:[l(I,{classNames:a,variant:"unstyled",name:"first",label:"First Name",withAsterisk:!0,...n.getInputProps("first")}),l(I,{classNames:a,variant:"unstyled",name:"last",label:"Last Name",withAsterisk:!0,...n.getInputProps("last")})]}),l(I,{classNames:a,variant:"unstyled",name:"email",label:"Email",withAsterisk:!0,...n.getInputProps("email")}),l(I,{classNames:a,variant:"unstyled",name:"phone",label:"Phone",...n.getInputProps("phone")}),l(Q,{classNames:a,name:"message",variant:"unstyled",label:"Message",withAsterisk:!0,minRows:5,maxRows:5,...n.getInputProps("message")}),l(Z,{sitekey:{}.VITE_SITEKEY,ref:r,onVerify:e,size:"invisible",theme:"dark"}),l(be,{name:"Submit",type:"submit"})]}),h("aside",{className:"contact-aside",children:[h("div",{className:"employment",children:[l(D,{title:"Employment"}),h("p",{children:["We are always looking for the right people. Feel free to download and fill out our"," ",l(E,{name:"application for employment.",href:"http://maneeleys.com/wp-content/uploads/2015/05/Employment-Application.pdf"})]})]}),h("div",{className:"socials",children:[l(D,{title:"Socials"}),h("p",{children:["Phone:"," ",l(E,{name:"(860) 528-6622",href:"tel:8605286622"})]}),h("p",{children:["Fax: ",l(E,{name:"(860) 291-9362",href:"tel:8602919362"})]}),h("p",{children:["Lodge:"," ",l(E,{name:"65 Rye Street, South Windsor, CT 06074",href:"https://goo.gl/maps/MdJ6XHXDynkjjzQj9"})]}),h("p",{children:["Office:"," ",l(E,{name:"136 Commerce Way, South Windsor, CT 06074",href:"https://goo.gl/maps/69M4YL9UkVaJhY4c6"})]}),h("div",{className:"dark",children:[l("a",{href:"https://www.facebook.com/Maneeleys",target:"_blank",children:l(T,{icon:pe,size:"lg",title:"Facebook"})}),l("a",{href:"https://www.instagram.com/maneeleys/",target:"_blank",children:l(T,{icon:ue,size:"lg",title:"Instagram"})})]})]})]})]})}export{rt as default};
