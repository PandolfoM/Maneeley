import{k as w,d as e,j as d,B as m,L as h,S as u,l as p}from"./index-461fd374.js";import{L as s}from"./LazyImage-135af409.js";import{C as r}from"./Carousel-a37725cf.js";import{A as o}from"./Button-e4d90abd.js";const g=[{title:"2013 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2013/badge-weddingawards_en_US.png"},{title:"2014 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2014/badge-weddingawards_en_US.png"},{title:"2015 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2015/badge-weddingawards_en_US.png"},{title:"2016 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2016/badge-weddingawards_en_US.png"},{title:"2017 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2017/badge-weddingawards_en_US.png"},{title:"2018 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2018/badge-weddingawards_en_US.png"},{title:"2019 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2019/badge-weddingawards_en_US.png"},{title:"2020 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2020/badge-weddingawards_en_US.png"},{title:"2021 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2021/badge-weddingawards_en_US.png"},{title:"2022 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2022/badge-weddingawards_en_US.png"},{title:"2023 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2023/badge-weddingawards_en_US.png"},{title:"2025 Wedding Wire Couples' Choice Award",image:"https://cdn1.weddingwire.com/img/badges/2025/badge-weddingawards_en_US.png"}];function b(){const i=w("(max-width: 900px)");return e("div",{className:"awards",children:i?e(r,{mx:"auto",slideSize:"150px",dragFree:!0,slideGap:"sm",initialSlide:0,children:g.map(a=>e(r.Slide,{children:e("a",{href:"https://www.weddingwire.com/reviews/maneeleys-banquet-catering-and-the-lodge-at-maneeleys-south-windsor/d05508869673e0e2.html",target:"_blank",children:e(s,{width:"100%",height:"100%",src:a.image,alt:a.title})},a.image)},a.image))}):e("div",{className:"awards-imgs",children:g.map(a=>e("a",{href:"https://www.weddingwire.com/reviews/maneeleys-banquet-catering-and-the-lodge-at-maneeleys-south-windsor/d05508869673e0e2.html",target:"_blank",children:e(s,{width:100,height:100,src:a.image,alt:a.title})},a.image))})})}function C(){return e("section",{className:"hero",children:e("div",{className:"hero-content",children:e("div",{className:"landing",children:e("div",{children:d("h1",{children:["Welcome to ",e("span",{children:"Maneeley's"})]})})})})})}function W({title:i,subtitle:a,button:n,image:l,route:t}){const c=t.includes("http");return e(m,{className:"card",sx:{"&:before":{backgroundImage:`url(${l})`}},children:d("div",{className:"card-content",children:[e("h4",{className:"title",children:i}),e("p",{className:"subtitle",children:a}),c?e("a",{href:t,target:"_blank",children:e(o,{className:"btn",name:n})}):e(h,{to:t,children:e(o,{className:"btn",name:n})})]})})}const f="/assets/wedding-e6e3de4c.webp",_="/assets/banquet-a7db7b82.webp",y="/assets/catering-ba37246e.webp",S="/assets/holiday-9f23d457.webp",v="/assets/corporate-d90e90ff.webp",A=[{id:0,title:"Weddings",subtite:"We invite you to arrange a consultation and tour our Grand Lodge and to consider one of our beautifully-landscaped ceremony sites as a setting for exchanging your vows. We have a full complement of wedding services that will help you with the details of planning your day.",button:"Learn More",image:f,route:"/weddings"},{id:1,title:"Banquets",subtite:"Consider the Grand Lodge for all celebrations: Sweet 16 ~ Quinceanera's ~ Birthdays ~ Anniversary's ~ Reunions ~ Showers ~ as well as all Social and Corporate Events.",button:"Learn More",image:_,route:"/banquets"},{id:2,title:"Catering",subtite:"Maneeley's is dedicated to making your next working breakfast, lunch, dinner or business meeting a success. Our team of sales professionals will assist you in planning your special menu",button:"Learn More",image:y,route:"/catering"},{id:3,title:"Holidays",subtite:"",button:"View Now",image:S,route:"/holiday"},{id:4,title:"Corporate",subtite:"",button:"View Now",image:v,route:"/corporate"}];function N(){return d("section",{className:"services",id:"services",children:[e(u,{title:"Services"}),e("div",{className:"services-cards",children:A.map(i=>e(W,{title:i.title,subtitle:i.subtite,button:i.button,image:i.image,route:i.route},i.id))})]})}function q(){return d(p,{children:[e(C,{}),e(N,{}),e(b,{})]})}export{q as default};
