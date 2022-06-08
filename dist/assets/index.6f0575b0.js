import{d as te,u as se,r as T,a as g,b as M,c as $,o as c,e as d,f as e,g as p,w as h,t as _,h as v,i as u,F as E,j as z,p as U,k as A,l as y,v as oe,m as S,n as ae,q as ne,s as re,x as ie,y as H,z as b,A as C,B as J,C as ce,D as Z,E as D,G as k,H as I,I as de,J as le,K as B,L as _e,M as ue,N as pe,O as he,V as me,P as ve,Q as ge}from"./vendor.021b6f9a.js";const fe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}};fe();const x=te("user",{state:()=>({user:se("user",T({id:"",name:"",email:"",token:"",isAdmin:!1,isLoggedIn:!1,cartID:null,cart:null,cartCourseNumber:null}))}),actions:{setUserInfos(o,s,a,t){this.user.id=o,this.user.name=s,this.user.email=a,this.user.token=t,this.user.isLoggedIn=!0},setUserID(o){this.user.id=o},setUserName(o){this.user.name=o},setUserEmail(o){this.user.email=o},setUserToken(o){this.user.token=o},setAsAdmin(){this.user.isAdmin=!0},logUserIn(){this.user.isLoggedIn=!0},logUserOut(){this.user.isLoggedIn=!1},setCartID(o){this.user.cartID=o},setCart(o){this.user.cart=o},setCartCourseNumber(o){this.user.cartCourseNumber=o}}}),O=()=>{const o=x(),s="https://pournoobs-backend.herokuapp.com/api/";g.get(s+`cart/${o.user.cartID}`,{headers:{Authorization:"Bearer "+o.user.token}}).then(a=>{o.setCart(a.data.cart),o.setCartCourseNumber(a.data.courseNumber)}).catch(a=>console.log(a))},K=()=>{const o="https://pournoobs-backend.herokuapp.com/api/";let s=T([]);return g.get(o+"categories").then(a=>{s.value=a.data}).catch(a=>console.log(a)),s};var Q="/assets/logo_horizontal.a2e756f7.png";var m=(o,s)=>{const a=o.__vccOpts||o;for(const[t,r]of s)a[t]=r;return a};const be={name:"TheNavbar",setup(){const o="https://pournoobs-backend.herokuapp.com/api/",s=M(),a=x();let t=K();return a.user.cart&&O(),{store:a,router:s,categories:t,apiUrl:o}},methods:{logout(){g.post(this.apiUrl+"logout",{},{headers:{Authorization:"Bearer "+this.store.user.token}}).then(o=>{localStorage.removeItem("user"),this.store.$reset(),console.log("User logged out successfully")}).catch(o=>console.log(o))}},mounted(){}},q=o=>(U("data-v-13d833aa"),o=o(),A(),o),$e={id:"navbar"},ye={class:"container"},xe={class:"top-menu"},we=q(()=>e("img",{class:"logo-img w-100",src:Q,alt:"Logo Pour noobs"},null,-1)),Ce=y('<div class="input-group search-container" data-v-13d833aa><input type="search" class="form-control search-input" placeholder="Rechercher une formation" aria-label="Rechercher une formation" aria-describedby="button-addon2" data-v-13d833aa><button class="btn search-btn" type="button" data-v-13d833aa><i class="fa-solid fa-magnifying-glass" data-v-13d833aa></i></button></div><div class="premium-container" data-v-13d833aa><a href="#" class="btn premium-btn" data-v-13d833aa><i class="fa-solid fa-star me-2" data-v-13d833aa></i> Premium </a></div>',2),ke={key:0,class:"auth-container"},Ie=u("Se connecter"),Se=u("Inscrivez-vous !"),Oe={key:1,class:"toolbar d-flex dropdown align-items-center"},Ue={class:"fa-solid fa-cart-shopping text-white me-1 position-relative"},Ae={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-danger cart-badge"},Pe=u(" Inventaire "),Le={class:"dropdown-toggle profile-btn d-flex",id:"profileDropdownBtn","data-bs-toggle":"dropdown","aria-expanded":"false"},Ne={class:"mb-0 me-2 ms-4"},Ee={key:0,class:"fa-solid fa-user-shield me-1"},Te={key:1,class:"fa-solid fa-user me-1"},qe={class:"dropdown-menu game-over-menu","aria-labelledby":"profileDropdownBtn"},Re={class:"h-100 w-100"},Ve=u(" Game Over "),ze=q(()=>e("i",{class:"fa-solid fa-skull ms-2"},null,-1)),Be=[Ve,ze],je=q(()=>e("div",{class:"menu-divider"},null,-1)),De={class:"container"},Me={class:"bottom-menu d-flex"},Fe={class:"menu-list list-unstyled w-100 mb-0"},Ge={class:"active"},He=u("ACCUEIL"),Je=u("A PROPOS"),Ze={class:"category-dropdown position-relative"},Ke=q(()=>e("a",{href:""},[u(" CAT\xC9GORIES "),e("i",{class:"fa-solid fa-caret-down ms-1"})],-1)),Qe={class:"category-dropdown-content"},We={href:"#"},Ye={class:"category-img-container position-relative"},Xe=["src"],et={class:"category-title position-absolute text-uppercase"},tt=u(" JOUEURS "),st=q(()=>e("i",{class:"fa-solid fa-caret-down ms-1"},null,-1)),ot=u("SPONSORS"),at=u("COMMUNAUT\xC9"),nt=u("BLOG"),rt=u("CONTACT");function it(o,s,a,t,r,i){const l=$("router-link");return c(),d("div",$e,[e("div",ye,[e("div",xe,[p(l,{to:"/",class:"logo-container"},{default:h(()=>[we]),_:1}),Ce,t.store.user.isLoggedIn?(c(),d("div",Oe,[p(l,{to:"/cart",class:"text-white text-decoration-none cart-btn"},{default:h(()=>[e("i",Ue,[t.store.user.cartID&&t.store.user.cartCourseNumber>0?(c(),d("span",Ae,_(t.store.user.cartCourseNumber),1)):v("",!0)]),Pe]),_:1}),e("button",Le,[e("p",Ne,[t.store.user.isAdmin?(c(),d("i",Ee)):v("",!0),t.store.user.isAdmin?v("",!0):(c(),d("i",Te)),u(" Bonjour "+_(t.store.user.name)+" ! ",1)])]),e("ul",qe,[e("li",Re,[e("a",{class:"dropdown-item",href:"#",onClick:s[0]||(s[0]=(...n)=>i.logout&&i.logout(...n))},Be)])])])):(c(),d("div",ke,[p(l,{to:"/login",class:"btn register-btn"},{default:h(()=>[Ie]),_:1}),p(l,{to:"/register",class:"btn register-btn"},{default:h(()=>[Se]),_:1})]))])]),je,e("div",De,[e("div",Me,[e("ul",Fe,[e("li",Ge,[p(l,{to:"/"},{default:h(()=>[He]),_:1})]),e("li",null,[p(l,{to:"/about"},{default:h(()=>[Je]),_:1})]),e("li",Ze,[Ke,e("div",Qe,[(c(!0),d(E,null,z(t.categories,n=>(c(),d("a",We,[e("div",Ye,[e("img",{src:`/assets/img/categories/${n.image}`,alt:"",class:"w-100 category-img"},null,8,Xe),e("h5",et,_(n.name),1)])]))),256))])]),e("li",null,[p(l,{to:"/players"},{default:h(()=>[tt,st]),_:1})]),e("li",null,[p(l,{to:"/sponsors"},{default:h(()=>[ot]),_:1})]),e("li",null,[p(l,{to:"/community"},{default:h(()=>[at]),_:1})]),e("li",null,[p(l,{to:"/blog"},{default:h(()=>[nt]),_:1})]),e("li",null,[p(l,{to:"/contaco"},{default:h(()=>[rt]),_:1})])])])])])}var ct=m(be,[["render",it],["__scopeId","data-v-13d833aa"]]);const dt={components:{TheNavbar:ct},setup(){return x().user.cart&&O(),{}}};function lt(o,s,a,t,r,i){const l=$("TheNavbar"),n=$("router-view");return c(),d(E,null,[p(l),p(n)],64)}var _t=m(dt,[["render",lt]]);const ut=()=>{const o="https://pournoobs-backend.herokuapp.com/api/";let s=T([]),t=oe.exports.useLoading().show({color:"#00e07f",loader:"bars",width:64,height:64,opacity:.8,backgroundColor:"#040806"});return g.get(o+"courses").then(r=>{s.value=r.data}).catch(r=>console.log(r)).finally(t.hide()),s};var pt="/assets/intro-banner_gotaga.458c3d67.png";const ht={name:"Home",setup(){const o="https://pournoobs-backend.herokuapp.com/api/",s=x();let a=ut(),t=K(),r=T(null);const i=S(()=>r.value?a.value.filter(f=>f.category.name===r.value):a.value),l=f=>{r.value=f},{currentPage:n,lastPage:j,offset:F,next:W,prev:Y,pageSize:X,first:G}=ae({currentPage:1,pageSize:5,total:S(()=>i.value.length)}),ee=S(()=>Array.isArray(i.value)?i.value.slice(F.value,F.value+X.value):[]);return s.user.isLoggedIn&&g.post(o+`cart/createOrGetCart/${s.user.id}`,{},{headers:{Authorization:"Bearer "+s.user.token}}).then(f=>{(f.status===200||f.status===201)&&(s.setCartID(f.data.id),O())}).catch(f=>console.log(f)),ne(a,()=>{G()}),{courses:a,categories:t,apiUrl:o,store:s,currentPage:n,lastPage:j,next:W,prev:Y,first:G,paginatedCourses:ee,filteredCourses:i,selectedCategory:r,selectCategory:l}}},w=o=>(U("data-v-1164830c"),o=o(),A(),o),mt={id:"home"},vt={id:"section1"},gt={class:"container pt-4"},ft=y('<div class="intro-banner w-100 position-relative" data-v-1164830c><div class="home-heading" data-v-1164830c><h1 class="home-title" data-v-1164830c>Pour tous les noobs...</h1><p class="mb-0 text-start home-subtitle" data-v-1164830c>...qui en ont marre d&#39;\xEAtre des noobs.</p></div><img src="'+pt+'" alt="Gotaga" class="intro-banner-img w-100" data-v-1164830c></div>',1),bt={class:"main-content"},$t={class:"course-heading d-flex justify-content-between align-items-end"},yt=w(()=>e("h3",{class:"text-start courses-title mb-0"},"Toutes les formations",-1)),xt=w(()=>e("button",{class:"btn btn-secondary category-filter mb-0 text-white dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},[u(" Filtre "),e("i",{class:"fa-solid fa-filter"})],-1)),wt={class:"dropdown-menu dropdown-menu-end filter-dropdown"},Ct=w(()=>e("a",{class:"dropdown-item"},"Toutes",-1)),kt=[Ct],It=["onClick"],St={class:"dropdown-item"},Ot=w(()=>e("hr",null,null,-1)),Ut={class:"courses-container mt-4"},At=["src"],Pt={class:"card-content"},Lt={class:"course-title text-uppercase"},Nt={key:0,class:"fa-solid fa-circle-check me-1"},Et={class:"mb-0 course-description"},Tt={key:0,class:"pagination text-white mt-5 d-flex justify-content-center align-items-center"},qt=w(()=>e("i",{class:"fa-solid fa-caret-left"},null,-1)),Rt=[qt],Vt={class:"pagination-page"},zt={class:"mb-0"},Bt=w(()=>e("i",{class:"fa-solid fa-caret-right"},null,-1)),jt=[Bt],Dt=w(()=>e("div",{id:"section2"},null,-1));function Mt(o,s,a,t,r,i){const l=$("router-link");return c(),d("div",mt,[e("div",vt,[e("div",gt,[ft,e("main",bt,[e("div",$t,[yt,xt,e("ul",wt,[e("li",{class:"category-list-item",onClick:s[0]||(s[0]=n=>t.selectCategory(null))},kt),(c(!0),d(E,null,z(t.categories,n=>(c(),d("li",{key:n.id,class:"category-list-item",onClick:j=>t.selectCategory(n.name)},[e("a",St,_(n.name),1)],8,It))),128))])]),Ot,e("div",Ut,[(c(!0),d(E,null,z(t.paginatedCourses,n=>(c(),re(l,{to:`/courses/${n.id}`,class:"card-container text-decoration-none",key:n.id},{default:h(()=>[e("span",{class:ie(["badge bg-primary category-badge",{"green-badge":n.category_id==1,"black-badge":n.category_id==2,"white-badge":n.category_id==3,"blue-badge":n.category_id==4}])},_(n.category.name),3),e("img",{src:`/assets/img/players/${n.image}`,alt:"",class:"w-100"},null,8,At),e("div",Pt,[e("h4",Lt,[parseInt(n.price)>50?(c(),d("i",Nt)):v("",!0),u(" "+_(n.author),1)]),e("p",Et,_(n.name.substring(0,30)+"..."),1)])]),_:2},1032,["to"]))),128))]),t.courses.length>0?(c(),d("div",Tt,[e("button",{onClick:s[1]||(s[1]=(...n)=>t.prev&&t.prev(...n)),class:"pagination-btn prev-btn"},Rt),e("div",Vt,[e("p",zt,_(t.currentPage)+" / "+_(t.lastPage),1)]),e("button",{onClick:s[2]||(s[2]=(...n)=>t.next&&t.next(...n)),class:"pagination-btn next-btn"},jt)])):v("",!0)])])]),Dt])}var Ft=m(ht,[["render",Mt],["__scopeId","data-v-1164830c"]]),R="/assets/gotaga_serious.2215f17c.png";const Gt={name:"About",setup(){return{}}},Ht={id:"about"},Jt=y('<div class="container pt-4" data-v-593fdd00><div class="d-flex flex-column justify-content-center align-items-center p-5" data-v-593fdd00><div class="img-container" data-v-593fdd00><img src="'+R+'" class="w-100" data-v-593fdd00></div><h4 class="text-white mt-4" data-v-593fdd00>Oups, cette page est encore en construction !</h4></div></div>',1),Zt=[Jt];function Kt(o,s,a,t,r,i){return c(),d("div",Ht,Zt)}var Qt=m(Gt,[["render",Kt],["__scopeId","data-v-593fdd00"]]),Wt="/assets/chowh1.06f8a6b4.png";const Yt={name:"Players",setup(){return{}}},Xt={id:"players"},es=y('<div class="container pt-4" data-v-7ad4d902><div class="d-flex flex-column justify-content-center align-items-center p-5" data-v-7ad4d902><div class="img-container" data-v-7ad4d902><img src="'+Wt+'" class="w-100" data-v-7ad4d902></div><h4 class="text-white mt-4" data-v-7ad4d902>Oups, cette page est encore en construction !</h4></div></div>',1),ts=[es];function ss(o,s,a,t,r,i){return c(),d("div",Xt,ts)}var os=m(Yt,[["render",ss],["__scopeId","data-v-7ad4d902"]]);const as={name:"sponsors",setup(){return{}}},ns={id:"sponsors"},rs=y('<div class="container pt-4" data-v-09f57070><div class="d-flex flex-column justify-content-center align-items-center p-5" data-v-09f57070><div class="img-container" data-v-09f57070><img src="'+R+'" class="w-100" data-v-09f57070></div><h4 class="text-white mt-4" data-v-09f57070>Oups, cette page est encore en construction !</h4></div></div>',1),is=[rs];function cs(o,s,a,t,r,i){return c(),d("div",ns,is)}var ds=m(as,[["render",cs],["__scopeId","data-v-09f57070"]]);const ls={name:"Community",setup(){return{}}},_s={id:"community"},us=y('<div class="container pt-4" data-v-6b7b4d80><div class="d-flex flex-column justify-content-center align-items-center p-5" data-v-6b7b4d80><div class="img-container" data-v-6b7b4d80><img src="'+R+'" class="w-100" data-v-6b7b4d80></div><h4 class="text-white mt-4" data-v-6b7b4d80>Oups, cette page est encore en construction !</h4></div></div>',1),ps=[us];function hs(o,s,a,t,r,i){return c(),d("div",_s,ps)}var ms=m(ls,[["render",hs],["__scopeId","data-v-6b7b4d80"]]);const vs={name:"Blog",setup(){return{}}},gs={id:"blog"},fs=y('<div class="container pt-4" data-v-08c871d0><div class="d-flex flex-column justify-content-center align-items-center p-5" data-v-08c871d0><div class="img-container" data-v-08c871d0><img src="'+R+'" class="w-100" data-v-08c871d0></div><h4 class="text-white mt-4" data-v-08c871d0>Oups, cette page est encore en construction !</h4></div></div>',1),bs=[fs];function $s(o,s,a,t,r,i){return c(),d("div",gs,bs)}var ys=m(vs,[["render",$s],["__scopeId","data-v-08c871d0"]]);const xs={name:"Contact",setup(){return{}}},ws={id:"contact"},Cs=y('<div class="container pt-4" data-v-201e6540><div class="d-flex flex-column justify-content-center align-items-center p-5" data-v-201e6540><div class="img-container" data-v-201e6540><img src="'+R+'" class="w-100" data-v-201e6540></div><h4 class="text-white mt-4" data-v-201e6540>Oups, cette page est encore en construction !</h4></div></div>',1),ks=[Cs];function Is(o,s,a,t,r,i){return c(),d("div",ws,ks)}var Ss=m(xs,[["render",Is],["__scopeId","data-v-201e6540"]]);const Os={name:"Register",setup(){const o="https://pournoobs-backend.herokuapp.com/api/",s=M(),a=x(),t=H({email:"",name:"",password:"",password_confirmation:""}),r=S(()=>({email:{required:b.withMessage("Ce champ est requis",C),email:b.withMessage("Le format de l'email n'est pas valide",J)},name:{required:b.withMessage("Ce champ est requis",C)},password:{required:b.withMessage("Ce champ est requis",C)},password_confirmation:{required:b.withMessage("Ce champ est requis",C),sameAs:ce(t.password)}})),i=Z(r,t);return{state:t,v$:i,postApiUrl:o,store:a,router:s}},methods:{async register(){await this.v$.$validate()?g.post(this.postApiUrl+"register",{email:this.state.email,name:this.state.name,password:this.state.password,password_confirmation:this.state.password_confirmation}).then(s=>{if(s.status===201){let a=s.data;this.store.setUserInfos(a.user.id,a.user.name,a.user.email,a.token),this.router.push("/")}else alert("Oups, there was an error. Please try again")}).catch(s=>{alert("Oups, there was an error. Please try again"),console.log(s)}):console.log("Some fields are not correct")}},mounted(){}},V=o=>(U("data-v-58cedba2"),o=o(),A(),o),Us={id:"register"},As={class:"container d-flex justify-content-center"},Ps=V(()=>e("div",{class:"left-container w-50"},[e("div",{class:"logo-container"},[e("img",{class:"logo-img w-100",src:Q,alt:"Logo Pour noobs"})]),e("h1",{class:"register-title"},"POUR NOOBS A BIEN PLUS QUE VOUS NE PENSEZ \xC0 VOUS OFFRIR !")],-1)),Ls={class:"right-container w-50"},Ns={class:"form-container"},Es=V(()=>e("div",{class:"headings"},[e("h2",{class:"form-title"},"Inscription gratuite"),e("p",{class:"form-subtitle"},"Venez am\xE9liorer votre exp\xE9rience")],-1)),Ts={key:0,class:"text-danger mb-0 text-start"},qs={key:1,class:"text-danger mb-0 text-start"},Rs={class:"password-fields"},Vs={class:"password"},zs={key:0,class:"text-danger mb-0 text-start"},Bs={class:"password-confirmation"},js={key:0,class:"text-danger mb-0 text-start"},Ds={class:"register-buttons d-flex align-items-center"},Ms=V(()=>e("button",{type:"submit",class:"btn submit-btn"},"Inscrivez-vous !",-1)),Fs=V(()=>e("span",{class:"mx-3 text-white"},"Ou",-1)),Gs=u("Connexion"),Hs=V(()=>e("p",{class:"text-white terms-conditions mb-0"},[e("small",null,[u(" En vous inscrivant, vous acceptez nos "),e("span",null,[e("a",{href:"#",class:"terms-conditions-link"},"termes et conditions")])])],-1));function Js(o,s,a,t,r,i){const l=$("router-link");return c(),d("div",Us,[e("div",As,[Ps,e("div",Ls,[e("div",Ns,[Es,e("form",{onSubmit:s[4]||(s[4]=D((...n)=>i.register&&i.register(...n),["stop","prevent"])),method:"POST",class:"register-form d-flex flex-column p-3"},[k(e("input",{type:"text",placeholder:"Courriel","onUpdate:modelValue":s[0]||(s[0]=n=>t.state.email=n)},null,512),[[I,t.state.email]]),t.v$.email.$error?(c(),d("p",Ts,[e("small",null,_(t.v$.email.$errors[0].$message),1)])):v("",!0),k(e("input",{type:"text",placeholder:"Pseudo (4 caract\xE8res minimum)","onUpdate:modelValue":s[1]||(s[1]=n=>t.state.name=n)},null,512),[[I,t.state.name]]),t.v$.name.$error?(c(),d("p",qs,[e("small",null,_(t.v$.name.$errors[0].$message),1)])):v("",!0),e("div",Rs,[e("div",Vs,[k(e("input",{class:"w-100",type:"password",placeholder:"Mot de passe","onUpdate:modelValue":s[2]||(s[2]=n=>t.state.password=n),autocomplete:""},null,512),[[I,t.state.password]]),t.v$.password.$error?(c(),d("p",zs,[e("small",null,_(t.v$.password.$errors[0].$message),1)])):v("",!0)]),e("div",Bs,[k(e("input",{class:"w-100",type:"password",placeholder:"Confirmer mot de passe","onUpdate:modelValue":s[3]||(s[3]=n=>t.state.password_confirmation=n),autocomplete:""},null,512),[[I,t.state.password_confirmation]]),t.v$.password_confirmation.$error?(c(),d("p",js,[e("small",null,_(t.v$.password_confirmation.$errors[0].$message),1)])):v("",!0)])]),e("div",Ds,[Ms,Fs,p(l,{to:"/login",class:"login-link"},{default:h(()=>[Gs]),_:1})]),Hs],32)])])])])}var Zs=m(Os,[["render",Js],["__scopeId","data-v-58cedba2"]]);const Ks={name:"Login",setup(){const o="https://pournoobs-backend.herokuapp.com/api/",s=M(),a=x();de();const t=H({email:"",password:""}),r=S(()=>({email:{required:b.withMessage("Ce champ est requis",C),email:b.withMessage("Le format de l'email n'est pas valide",J)},password:{required:b.withMessage("Ce champ est requis",C)}})),i=Z(r,t);return{state:t,v$:i,postApiUrl:o,store:a,router:s}},methods:{async login(){await this.v$.$validate()?g.post(this.postApiUrl+"login",{email:this.state.email,password:this.state.password}).then(s=>{if(s.status===200){let a=s.data;this.store.setUserInfos(a.user.id,a.user.name,a.user.email,a.token),a.user.role=="admin"&&this.store.setAsAdmin(),this.router.push("/")}else alert("Oups, there was an error. Please try again")}).catch(s=>{alert("Oups, there was an error. Please try again"),console.log(s)}):console.log("Some fields are not correct")},githubLogin(){this.$auth0.loginWithRedirect()}}},P=o=>(U("data-v-124d4e36"),o=o(),A(),o),Qs={id:"login"},Ws={class:"container d-flex justify-content-center"},Ys=P(()=>e("div",{class:"left-container w-50"},[e("h1",{class:"login-title"},[e("span",{class:"revenez"},"REVENEZ"),u(" \xC0 VOTRE DERNIER POINT DE SAUVEGARDE ! ")])],-1)),Xs={class:"right-container w-50"},eo={class:"form-container"},to=P(()=>e("div",{class:"headings"},[e("h2",{class:"form-title"},"Connexion"),e("p",{class:"form-subtitle"},"Pr\xEAt \xE0 conqu\xE9rir le monde de l'e-sport ?")],-1)),so={key:0,class:"text-danger mb-0 text-start"},oo={class:"password"},ao={key:0,class:"text-danger mb-0 text-start"},no={class:"login-buttons d-flex flex-column align-items-center"},ro={class:"classic-login d-flex align-items-center mb-3"},io=P(()=>e("button",{type:"submit",class:"btn submit-btn",name:"classic"},"Connectez-vous !",-1)),co=P(()=>e("span",{class:"mx-3 text-white"},"Ou",-1)),lo=u("Inscription"),_o={class:"oauth-login w-100"},uo=P(()=>e("button",{type:"submit",class:"btn github-btn w-100",name:"github"},[e("i",{class:"fa-brands fa-github me-2"}),u(" Connectez-vous avec Github ")],-1)),po=[uo],ho=P(()=>e("p",{class:"text-white terms-conditions mb-0"},[e("small",null,[u(" En vous inscrivant, vous acceptez nos "),e("span",null,[e("a",{href:"#",class:"terms-conditions-link"},"termes et conditions")])])],-1));function mo(o,s,a,t,r,i){const l=$("router-link");return c(),d("div",Qs,[e("div",Ws,[Ys,e("div",Xs,[e("div",eo,[to,e("form",{onSubmit:s[3]||(s[3]=D((...n)=>i.login&&i.login(...n),["stop","prevent"])),method:"POST",class:"login-form d-flex flex-column p-3"},[k(e("input",{type:"text",placeholder:"Courriel","onUpdate:modelValue":s[0]||(s[0]=n=>t.state.email=n)},null,512),[[I,t.state.email]]),t.v$.email.$error?(c(),d("p",so,[e("small",null,_(t.v$.email.$errors[0].$message),1)])):v("",!0),e("div",oo,[k(e("input",{class:"w-100",type:"password",placeholder:"Mot de passe","onUpdate:modelValue":s[1]||(s[1]=n=>t.state.password=n),autocomplete:""},null,512),[[I,t.state.password]]),t.v$.password.$error?(c(),d("p",ao,[e("small",null,_(t.v$.password.$errors[0].$message),1)])):v("",!0)]),e("div",no,[e("div",ro,[io,co,p(l,{to:"/register",class:"register-link"},{default:h(()=>[lo]),_:1})]),e("div",_o,[e("form",{onSubmit:s[2]||(s[2]=D((...n)=>i.githubLogin&&i.githubLogin(...n),["stop","prevent"])),method:"POST",class:"login-form"},po,32)])]),ho],32)])])])])}var vo=m(Ks,[["render",mo],["__scopeId","data-v-124d4e36"]]);const go=o=>{const s="https://pournoobs-backend.herokuapp.com/api/";let a=T({});return g.get(s+"courses/"+o).then(t=>{a.value=t.data}).catch(t=>console.log(t)),a};const fo={name:"SingleCourse",setup(){const o="https://pournoobs-backend.herokuapp.com/api/",s=le(),a=x();return{course:go(s.params.id),store:a,apiUrl:o}},methods:{addToCart(o,s){g.post(this.apiUrl+`cart/addCourseToCart/cart/${o}/course/${s}`,{},{headers:{Authorization:"Bearer "+this.store.user.token}}).then(a=>{a.status===201&&(O(),B({title:"<i class='fa-solid fa-fire-flame-curved me-2'></i> F\xC9LICITATIONS !",text:"Vous venez d'ajouter cette qu\xEAte \xE0 votre inventaire !"})),a.status===200&&B({title:"<i class='fa-solid fa-ban'></i> OUPS !",text:"Cette qu\xEAte fait d\xE9j\xE0 partie de votre inventaire"})}).catch(a=>console.log(a))}}},L=o=>(U("data-v-036e6384"),o=o(),A(),o),bo={id:"singleCourse"},$o=L(()=>e("div",{class:"left-layer"},null,-1)),yo=L(()=>e("div",{class:"bottom-layer d-none"},null,-1)),xo={class:"hero-container d-flex"},wo=L(()=>e("div",{class:"empty-space"},null,-1)),Co={class:"hero-img-container"},ko=["src"],Io={class:"hero-content text-white text-start"},So={class:"course-author text-uppercase"},Oo={key:0,class:"fa-solid fa-circle-check me-1"},Uo=L(()=>e("div",{class:"divider"},null,-1)),Ao={class:"course-name text-uppercase"},Po={class:"course-description"},Lo={class:"price-container d-flex w-50 justify-content-center align-items-center"},No=L(()=>e("div",{class:"small-divider"},null,-1)),Eo={class:"course-price mb-0"},To=L(()=>e("div",{class:"small-divider"},null,-1));function qo(o,s,a,t,r,i){const l=$("notifications");return c(),d("div",bo,[p(l,{width:"400",classes:"notification"}),$o,yo,e("div",xo,[wo,e("div",Co,[e("img",{class:"hero-img h-100",src:`/assets/img/players/${t.course.image}`},null,8,ko)])]),e("div",Io,[e("h4",So,[parseInt(t.course.price)>50?(c(),d("i",Oo)):v("",!0),u(" "+_(t.course.author),1)]),Uo,e("h1",Ao,_(t.course.name),1),e("p",Po,_(t.course.description),1),e("div",Lo,[No,e("p",Eo,_(t.course.price)+" \u20AC",1),To]),e("button",{class:"add-btn",onClick:s[0]||(s[0]=n=>i.addToCart(t.store.user.cartID,t.course.id))},"S'enr\xF4ler pour cette qu\xEAte")])])}var Ro=m(fo,[["render",qo],["__scopeId","data-v-036e6384"]]);const Vo={name:"Cart",setup(){const o="https://pournoobs-backend.herokuapp.com/api/",s=x(),a=S(()=>{let r=0;for(let i of s.user.cart.courses)r+=parseFloat(i.price);return r.toFixed(2)}),t=(r,i)=>{g.delete(o+`cart/destroyCourseFromCart/cart/${r}/course/${i}`,{headers:{Authorization:"Bearer "+s.user.token}}).then(l=>{l.status===200&&(O(),B({title:"<i class='fa-solid fa-hand-lizard'></i> PETIT JOUEUR !",text:"Cette qu\xEAte ne fait plus partie de votre inventaire"})),l.status===404&&B({title:"<i class='fa-solid fa-ban'></i> OUPS !",text:"Cette qu\xEAte n'est pas dans votre inventaire"})}).catch(l=>console.log(l))};return s.user.cart&&O(),{store:s,totalPrice:a,destroyCourse:t}}},N=o=>(U("data-v-0e9e8ef5"),o=o(),A(),o),zo={id:"cart"},Bo={class:"container pt-4"},jo=N(()=>e("h3",{class:"text-start cart-title"},"Votre inventaire",-1)),Do=N(()=>e("hr",null,null,-1)),Mo={key:0,class:"table-container"},Fo={class:"left-side"},Go={class:"table table-striped table-dark"},Ho={class:"align-middle"},Jo={colspan:"1",class:"p-0",style:{width:"150px !important"}},Zo={class:"img-container mx-auto d-block"},Ko=["src"],Qo={colspan:"5",class:"text-start ps-4"},Wo={class:"d-flex flex-column"},Yo={class:"text-uppercase course-author"},Xo={class:"course-name mb-0"},ea={colspan:"5",class:"course-price"},ta={colspan:"1"},sa=["onClick"],oa=N(()=>e("i",{class:"fa-solid fa-circle-xmark"},null,-1)),aa=[oa],na={class:"right-side"},ra=N(()=>e("h4",{class:"text-white total-text"},"Total",-1)),ia=N(()=>e("div",{class:"divider"},null,-1)),ca={class:"total-price text-white mb-0"},da={key:0,class:"continue-btn"},la={key:1,class:"continue-btn"},_a={key:1},ua=N(()=>e("h4",{class:"text-white mt-4"},"Oups, aucune qu\xEAte n'a \xE9t\xE9 ajout\xE9e \xE0 votre inventaire...",-1)),pa=[ua];function ha(o,s,a,t,r,i){const l=$("notifications");return c(),d("div",zo,[p(l,{width:"400",classes:"notification"}),e("div",Bo,[jo,Do,t.store.user.cartID&&t.store.user.cart.courses.length>0?(c(),d("div",Mo,[e("div",Fo,[e("table",Go,[e("tbody",Ho,[(c(!0),d(E,null,z(t.store.user.cart.courses,n=>(c(),d("tr",{key:n.id,class:"table-row"},[e("td",Jo,[e("div",Zo,[e("img",{src:`/assets/img/players/${n.image}`,alt:"",class:"w-100 course-img d-block"},null,8,Ko)])]),e("td",Qo,[e("div",Wo,[e("h5",Yo,_(n.author),1),e("p",Xo,_(n.name),1)])]),e("td",ea,_(n.price)+"\u20AC",1),e("td",ta,[e("button",{type:"button",class:"delete-btn",onClick:j=>t.destroyCourse(t.store.user.cart.id,n.id)},aa,8,sa)])]))),128))])])]),e("div",na,[ra,ia,e("p",ca,_(t.totalPrice)+"\u20AC",1),t.store.user.cart.courses.length>1?(c(),d("button",da,"Accepter ces qu\xEAtes")):(c(),d("button",la,"Accepter la qu\xEAte"))])])):(c(),d("div",_a,pa))])])}var ma=m(Vo,[["render",ha],["__scopeId","data-v-0e9e8ef5"]]);const va=[{path:"/",name:"Home",component:Ft},{path:"/about",name:"About",component:Qt},{path:"/players",name:"Players",component:os},{path:"/sponsors",name:"Sponsors",component:ds},{path:"/community",name:"Community",component:ms},{path:"/blog",name:"Blog",component:ys},{path:"/contact",name:"Contact",component:Ss},{path:"/register",name:"Register",component:Zs},{path:"/login",name:"Login",component:vo},{path:"/courses/:id",name:"SingleCourse",component:Ro},{path:"/cart",name:"Cart",component:ma}],ga=_e({history:ue(),routes:va});pe(_t).use(ga).use(he()).use(me).use(ve).use(ge({domain:"dev-hbuncxuc.us.auth0.com",client_id:"RiZoV187P48Ex4wAcn7p3ecnEOF8sYjM",redirect_uri:"https://pournoobs-backend.herokuapp.com/"})).mount("#app");
