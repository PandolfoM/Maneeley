import{r as o,j as e,b as t,L as i,D as c,O as u,E as l}from"./index-93f63095.js";import{M as p}from"./Menus-0afa2e24.js";import{P as d}from"./Page-44646d16.js";import"./Separator-ef107c12.js";import"./Alert-771d5190.js";import"./use-uncontrolled-60e3455c.js";import"./ChevronIcon-9b0362b1.js";function g(){const[r,s]=o.useState([]);return o.useEffect(()=>{window.scrollTo(0,0),(async()=>{const n=c(l,"menus","Catering"),a=await u(n);if(a.exists())s(a.data());else return})()},[]),e(d,{flex:!0,fullHeight:!0,children:[e("div",{children:[t("p",{style:{whiteSpace:"break-spaces"},children:"Whether you're looking for a full service dinner at an event venue of your choice, a cocktail party at work, or back yard cook out, Maneeley's Catering is always ready to assist."}),e("p",{style:{whiteSpace:"break-spaces"},children:["We have a wide variety of menus for every occasion and are happy to help you customize them to fit your needs. Pick up Express Trays of food are also available! If you are looking to have an event catered with food brought to you, have a party at home, or to simply order lunch for your workplace, please view our Catering Menus and",e(i,{to:"/contact",className:"activeLink",children:[" ","contact"," "]}),"our team today!"]})]}),t(p,{menus:r})]})}export{g as default};