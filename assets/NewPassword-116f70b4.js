import{S as p,r as s,Q as b,j as a,b as e,c as f}from"./index-93f63095.js";import{A as g}from"./Button-0890c00d.js";import{P as w}from"./Page-44646d16.js";import{S}from"./Separator-ef107c12.js";import{S as h}from"./SubtleButton-70da1e5f.js";import{u as x,P as y}from"./useUsers-c427a3df.js";import{u as P}from"./use-form-c5174bbe.js";import{i as v}from"./is-not-empty-01b37365.js";import"./use-uncontrolled-60e3455c.js";const N=f(()=>({label:{color:"#fffcf1"},wrapper:{border:"1px solid #3c3c3c",backgroundColor:"#2e2e2e80","&:focus":{borderWidth:"1px",borderStyle:"solid",borderImage:"linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1"},"&:focus-within":{borderWidth:"1px",borderStyle:"solid",borderImage:"linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1"}},visibilityToggle:{"&:hover":{background:"transparent"}}}));function W(){const o=p(),[i,r]=s.useState(!1),[n,d]=s.useState(""),{classes:l}=N(),{resetPassword:m}=x(),{currentUser:c}=s.useContext(b),t=P({initialValues:{password:""},validate:{password:v()}});return a(w,{children:[e(S,{title:"Create Password"}),a("form",{className:"contact-form",onSubmit:t.onSubmit(async u=>{r(!0),m(u.password,c,!0).then(()=>{r(!1),o("/dashboard")}).catch(()=>{r(!1),d("There has been an error!")})}),children:[e(y,{classNames:l,variant:"unstyled",name:"password",label:"Password",withAsterisk:!0,...t.getInputProps("password")}),e(h,{name:n,className:"delete"}),e(g,{name:"Submit",type:"submit",loading:i})]})]})}export{W as default};
