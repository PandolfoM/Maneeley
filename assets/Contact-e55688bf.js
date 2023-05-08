import{r as s,_ as ne,a as ie,c as V,u as oe,b as se,e as le,R as F,j as d,d as i,F as C,f as de,g as ce,n as W,h as ue,i as pe}from"./index-4773cb83.js";import{c as me,a as E,b as fe,y as he}from"./yup-resolver-06401cf0.js";import{A as ge}from"./Button-8275b377.js";import{S as B}from"./Separator-d54471d8.js";import{S as P}from"./SubtleButton-13c80ffe.js";import{P as be}from"./Page-a3903b6f.js";import{I as H,u as ve,a as ye}from"./useUsers-f937a01b.js";import{T as N}from"./TextInput-77dec1fc.js";var Se=s.useLayoutEffect,we=function(t){var e=s.useRef(t);return Se(function(){e.current=t}),e},$=function(t,e){if(typeof t=="function"){t(e);return}t.current=e},xe=function(t,e){var a=s.useRef();return s.useCallback(function(n){t.current=n,a.current&&$(a.current,null),a.current=e,e&&$(e,n)},[e])},Y={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},D=function(t){Object.keys(Y).forEach(function(e){t.style.setProperty(e,Y[e],"important")})},o=null,ze=function(t,e){var a=t.scrollHeight;return e.sizingStyle.boxSizing==="border-box"?a+e.borderSize:a-e.paddingSize};function Re(r,t,e,a){e===void 0&&(e=1),a===void 0&&(a=1/0),o||(o=document.createElement("textarea"),o.setAttribute("tabindex","-1"),o.setAttribute("aria-hidden","true"),D(o)),o.parentNode===null&&document.body.appendChild(o);var n=r.paddingSize,l=r.borderSize,c=r.sizingStyle,h=c.boxSizing;Object.keys(c).forEach(function(v){var y=v;o.style[y]=c[y]}),D(o),o.value=t;var u=ze(o,r);o.value="x";var g=o.scrollHeight-n,p=g*e;h==="border-box"&&(p=p+n+l),u=Math.max(p,u);var m=g*a;return h==="border-box"&&(m=m+n+l),u=Math.min(m,u),[u,g]}var X=function(){},Pe=function(t,e){return t.reduce(function(a,n){return a[n]=e[n],a},{})},_e=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Te=!!document.documentElement.currentStyle,Ce=function(t){var e=window.getComputedStyle(t);if(e===null)return null;var a=Pe(_e,e),n=a.boxSizing;if(n==="")return null;Te&&n==="border-box"&&(a.width=parseFloat(a.width)+parseFloat(a.borderRightWidth)+parseFloat(a.borderLeftWidth)+parseFloat(a.paddingRight)+parseFloat(a.paddingLeft)+"px");var l=parseFloat(a.paddingBottom)+parseFloat(a.paddingTop),c=parseFloat(a.borderBottomWidth)+parseFloat(a.borderTopWidth);return{sizingStyle:a,paddingSize:l,borderSize:c}},Ee=function(t){var e=we(t);s.useLayoutEffect(function(){var a=function(l){e.current(l)};return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}},[])},Ne=function(t,e){var a=t.cacheMeasurements,n=t.maxRows,l=t.minRows,c=t.onChange,h=c===void 0?X:c,u=t.onHeightChange,g=u===void 0?X:u,p=ne(t,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),m=p.value!==void 0,v=s.useRef(null),y=xe(v,e),b=s.useRef(0),S=s.useRef(),w=function(){var f=v.current,R=a&&S.current?S.current:Ce(f);if(R){S.current=R;var T=Re(R,f.value||f.placeholder||"x",l,n),x=T[0],k=T[1];b.current!==x&&(b.current=x,f.style.setProperty("height",x+"px","important"),g(x,{rowHeight:k}))}},_=function(f){m||w(),h(f)};return s.useLayoutEffect(w),Ee(w),s.createElement("textarea",ie({},p,{onChange:_,ref:y}))},Ie=s.forwardRef(Ne);const Le=Ie;var ke=V(r=>({input:{paddingTop:r.spacing.xs,paddingBottom:r.spacing.xs}}));const Fe=ke;var We=Object.defineProperty,He=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,U=(r,t,e)=>t in r?We(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,z=(r,t)=>{for(var e in t||(t={}))J.call(t,e)&&U(r,e,t[e]);if(I)for(var e of I(t))G.call(t,e)&&U(r,e,t[e]);return r},O=(r,t)=>He(r,Oe(t)),Ae=(r,t)=>{var e={};for(var a in r)J.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&I)for(var a of I(r))t.indexOf(a)<0&&G.call(r,a)&&(e[a]=r[a]);return e};const je={autosize:!1,size:"sm",__staticSelector:"Textarea"},Q=s.forwardRef((r,t)=>{const e=oe("Textarea",je,r),{autosize:a,maxRows:n,minRows:l,label:c,error:h,description:u,id:g,className:p,required:m,style:v,wrapperProps:y,classNames:b,styles:S,size:w,__staticSelector:_,sx:L,errorProps:f,descriptionProps:R,labelProps:T,inputWrapperOrder:x,inputContainer:k,unstyled:A,withAsterisk:Z,variant:j}=e,K=Ae(e,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk","variant"]),q=se(g),{classes:ee,cx:te}=Fe(),{systemStyles:re,rest:ae}=le(K),M=z({required:m,ref:t,error:h,id:q,classNames:O(z({},b),{input:te(ee.input,b==null?void 0:b.input)}),styles:S,__staticSelector:_,size:w,multiline:!0,unstyled:A,variant:j},ae);return F.createElement(H.Wrapper,z(z({label:c,error:h,id:q,description:u,required:m,style:v,className:p,classNames:b,styles:S,size:w,__staticSelector:_,sx:L,errorProps:f,labelProps:T,descriptionProps:R,inputContainer:k,inputWrapperOrder:x,unstyled:A,withAsterisk:Z,variant:j},re),y),a?F.createElement(H,O(z({},M),{component:Le,maxRows:n,minRows:l})):F.createElement(H,O(z({},M),{component:"textarea",rows:l})))});Q.displayName="@mantine/core/Textarea";const qe=me().shape({first:E().min(2,"Too Short").max(50,"Too Long").required("Required").label("First Name"),last:E().min(2,"Too Short").max(50,"Too Long").required("Required").label("Last Name"),email:E().email("Invalid email").required("Required").label("Email"),phone:fe().notRequired().nullable().typeError("Invalid phone number").label("Phone Number").transform((r,t)=>t!==""?Number(t):null),message:E().min(10,"Too Short").required("Required").label("Message")}),Me=V(()=>({label:{color:"#fffcf1"},wrapper:{border:"1px solid #3c3c3c",backgroundColor:"#2e2e2e80","&:focus":{borderWidth:"1px",borderStyle:"solid",borderImage:"linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1"},"&:focus-within":{borderWidth:"1px",borderStyle:"solid",borderImage:"linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1"}},visibilityToggle:{"&:hover":{background:"transparent"}}}));function Ge(){const{classes:r}=Me(),{contactForm:t}=ve();s.useEffect(()=>{window.scrollTo(0,0)},[]);const e=ye({initialValues:{first:"",last:"",email:"",phone:"",message:""},validate:he(qe)}),a=async n=>{W.show({id:"submit-noti",title:"Sending",message:"Please wait while we send your message.",loading:!0,autoClose:!1,withCloseButton:!1}),await t(n).then(()=>{W.update({id:"submit-noti",color:"green",icon:i(C,{icon:ue}),title:"Sent!",message:"Your message has been sent!"})}).catch(l=>{W.show({title:"Error",message:"There has been an error!",color:"red",icon:i(C,{icon:pe})})})};return d(be,{flex:!0,children:[d("form",{onSubmit:e.onSubmit(n=>a(n)),className:"contact-form contact-form-100",children:[d("div",{className:`form-name ${r}`,children:[i(N,{classNames:r,variant:"unstyled",name:"first",label:"First Name",withAsterisk:!0,...e.getInputProps("first")}),i(N,{classNames:r,variant:"unstyled",name:"last",label:"Last Name",withAsterisk:!0,...e.getInputProps("last")})]}),i(N,{classNames:r,variant:"unstyled",name:"email",label:"Email",withAsterisk:!0,...e.getInputProps("email")}),i(N,{classNames:r,variant:"unstyled",name:"phone",label:"Phone",...e.getInputProps("phone")}),i(Q,{classNames:r,name:"message",variant:"unstyled",label:"Message",withAsterisk:!0,minRows:5,maxRows:5,...e.getInputProps("message")}),i(ge,{name:"Submit",type:"submit"})]}),d("aside",{className:"contact-aside",children:[d("div",{className:"employment",children:[i(B,{title:"Employment"}),d("p",{children:["We are always looking for the right people. Feel free to download and fill out our"," ",i(P,{name:"application for employment.",href:"http://maneeleys.com/wp-content/uploads/2015/05/Employment-Application.pdf"})]})]}),d("div",{className:"socials",children:[i(B,{title:"Socials"}),d("p",{children:["Phone:"," ",i(P,{name:"(860) 528-6622",href:"tel:8605286622"})]}),d("p",{children:["Fax: ",i(P,{name:"(860) 291-9362",href:"tel:8602919362"})]}),d("p",{children:["Lodge:"," ",i(P,{name:"65 Rye Street, South Windsor, CT 06074",href:"https://goo.gl/maps/MdJ6XHXDynkjjzQj9"})]}),d("p",{children:["Office:"," ",i(P,{name:"136 Commerce Way, South Windsor, CT 06074",href:"https://goo.gl/maps/69M4YL9UkVaJhY4c6"})]}),d("div",{className:"dark",children:[i("a",{href:"https://www.facebook.com/Maneeleys",target:"_blank",children:i(C,{icon:de,size:"lg",title:"Facebook"})}),i("a",{href:"https://www.instagram.com/maneeleys/",target:"_blank",children:i(C,{icon:ce,size:"lg",title:"Instagram"})})]})]})]})]})}export{Ge as default};
