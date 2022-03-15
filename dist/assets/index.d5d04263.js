import{d as ee,u as te,r as L,a as p,b as D,c as b,o as c,e as l,f as e,g as m,w as v,t as u,h,i as _,F as N,j as E,p as U,k as S,l as B,v as se,m as I,n as oe,q as ae,s as re,x as ie,y as j,z as f,A as x,B as G,C as ne,D as H,E as J,G as C,H as k,I as ce,J as R,K as le,L as de,M as ue,N as _e,V as he,O as me}from"./vendor.f865ec4a.js";const pe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}};pe();const $=ee("user",{state:()=>({user:te("user",L({id:"",name:"",email:"",token:"",isAdmin:!1,isLoggedIn:!1,cartID:null,cart:null,cartCourseNumber:null}))}),actions:{setUserInfos(s,o,a,t){this.user.id=s,this.user.name=o,this.user.email=a,this.user.token=t,this.user.isLoggedIn=!0},setUserID(s){this.user.id=s},setUserName(s){this.user.name=s},setUserEmail(s){this.user.email=s},setUserToken(s){this.user.token=s},setAsAdmin(){this.user.isAdmin=!0},logUserIn(){this.user.isLoggedIn=!0},logUserOut(){this.user.isLoggedIn=!1},setCartID(s){this.user.cartID=s},setCart(s){this.user.cart=s},setCartCourseNumber(s){this.user.cartCourseNumber=s}}}),P=()=>{const s=$(),o="http://localhost:8000/api/";p.get(o+`cart/${s.user.cartID}`,{headers:{Authorization:"Bearer "+s.user.token}}).then(a=>{s.setCart(a.data.cart),s.setCartCourseNumber(a.data.courseNumber)}).catch(a=>console.log(a))},K=()=>{const s="http://localhost:8000/api/";let o=L([]);return p.get(s+"categories").then(a=>{o.value=a.data}).catch(a=>console.log(a)),o};var Z="/assets/logo_horizontal.a2e756f7.png";var y=(s,o)=>{const a=s.__vccOpts||s;for(const[t,i]of o)a[t]=i;return a};const ge={name:"TheNavbar",setup(){const s="http://localhost:8000/api/",o=D(),a=$();let t=K();return P(),{store:a,router:o,categories:t,apiUrl:s}},methods:{logout(){p.post(this.apiUrl+"logout",{},{headers:{Authorization:"Bearer "+this.store.user.token}}).then(s=>{localStorage.removeItem("user"),this.store.$reset(),console.log("User logged out successfully")}).catch(s=>console.log(s))}},mounted(){}},T=s=>(U("data-v-07222ce0"),s=s(),S(),s),ve={id:"navbar"},fe={class:"container"},be={class:"top-menu"},$e=T(()=>e("img",{class:"logo-img w-100",src:Z,alt:"Logo Pour noobs"},null,-1)),ye=B('<div class="input-group search-container" data-v-07222ce0><input type="search" class="form-control search-input" placeholder="Rechercher une formation" aria-label="Rechercher une formation" aria-describedby="button-addon2" data-v-07222ce0><button class="btn search-btn" type="button" data-v-07222ce0><i class="fa-solid fa-magnifying-glass" data-v-07222ce0></i></button></div><div class="premium-container" data-v-07222ce0><a href="#" class="btn premium-btn" data-v-07222ce0><i class="fa-solid fa-star me-2" data-v-07222ce0></i> Premium </a></div>',2),we={key:0,class:"auth-container"},xe=_("Se connecter"),Ce=_("Inscrivez-vous !"),ke={key:1,class:"toolbar d-flex dropdown align-items-center"},Ie={class:"fa-solid fa-cart-shopping text-white me-1 position-relative"},Ue={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-danger cart-badge"},Se=_(" Inventaire "),Oe={class:"dropdown-toggle profile-btn d-flex",id:"profileDropdownBtn","data-bs-toggle":"dropdown","aria-expanded":"false"},Ae={class:"mb-0 me-2 ms-4"},Ne={key:0,class:"fa-solid fa-user-shield me-1"},Pe={key:1,class:"fa-solid fa-user me-1"},Le={class:"dropdown-menu game-over-menu","aria-labelledby":"profileDropdownBtn"},Te={class:"h-100 w-100"},qe=_(" Game Over "),Ee=T(()=>e("i",{class:"fa-solid fa-skull ms-2"},null,-1)),Re=[qe,Ee],Ve=T(()=>e("div",{class:"menu-divider"},null,-1)),ze={class:"container"},De={class:"bottom-menu d-flex"},Be={class:"menu-list list-unstyled w-100 mb-0"},Me={class:"active"},Fe=_("ACCUEIL"),je=T(()=>e("li",null,[e("a",{href:""},"A PROPOS")],-1)),Ge={class:"category-dropdown position-relative"},He=T(()=>e("a",{href:""},[_(" CAT\xC9GORIES "),e("i",{class:"fa-solid fa-caret-down ms-1"})],-1)),Je={class:"category-dropdown-content"},Ke={href:"#"},Ze={class:"category-img-container position-relative"},Qe=["src"],We={class:"category-title position-absolute text-uppercase"},Xe=B('<li data-v-07222ce0><a href data-v-07222ce0> JOUEURS <i class="fa-solid fa-caret-down ms-1" data-v-07222ce0></i></a></li><li data-v-07222ce0><a href data-v-07222ce0>SPONSORS</a></li><li data-v-07222ce0><a href data-v-07222ce0>COMMUNAUT\xC9</a></li><li data-v-07222ce0><a href data-v-07222ce0>BLOG</a></li><li data-v-07222ce0><a href data-v-07222ce0>CONTACT</a></li>',5);function Ye(s,o,a,t,i,n){const d=b("router-link");return c(),l("div",ve,[e("div",fe,[e("div",be,[m(d,{to:"/",class:"logo-container"},{default:v(()=>[$e]),_:1}),ye,t.store.user.isLoggedIn?(c(),l("div",ke,[m(d,{to:"/cart",class:"text-white text-decoration-none cart-btn"},{default:v(()=>[e("i",Ie,[t.store.user.cartID&&t.store.user.cartCourseNumber>0?(c(),l("span",Ue,u(t.store.user.cartCourseNumber),1)):h("",!0)]),Se]),_:1}),e("button",Oe,[e("p",Ae,[t.store.user.isAdmin?(c(),l("i",Ne)):h("",!0),t.store.user.isAdmin?h("",!0):(c(),l("i",Pe)),_(" Bonjour "+u(t.store.user.name)+" ! ",1)])]),e("ul",Le,[e("li",Te,[e("a",{class:"dropdown-item",href:"#",onClick:o[0]||(o[0]=(...r)=>n.logout&&n.logout(...r))},Re)])])])):(c(),l("div",we,[m(d,{to:"/login",class:"btn register-btn"},{default:v(()=>[xe]),_:1}),m(d,{to:"/register",class:"btn register-btn"},{default:v(()=>[Ce]),_:1})]))])]),Ve,e("div",ze,[e("div",De,[e("ul",Be,[e("li",Me,[m(d,{to:"/"},{default:v(()=>[Fe]),_:1})]),je,e("li",Ge,[He,e("div",Je,[(c(!0),l(N,null,E(t.categories,r=>(c(),l("a",Ke,[e("div",Ze,[e("img",{src:`src/assets/img/categories/${r.image}`,alt:"",class:"w-100 category-img"},null,8,Qe),e("h5",We,u(r.name),1)])]))),256))])]),Xe])])])])}var et=y(ge,[["render",Ye],["__scopeId","data-v-07222ce0"]]);const tt={components:{TheNavbar:et},setup(){return P(),{}}};function st(s,o,a,t,i,n){const d=b("TheNavbar"),r=b("router-view");return c(),l(N,null,[m(d),m(r)],64)}var ot=y(tt,[["render",st]]);const at=()=>{const s="http://localhost:8000/api/";let o=L([]),t=se.exports.useLoading().show({color:"#00e07f",loader:"bars",width:64,height:64,opacity:.8,backgroundColor:"#040806"});return p.get(s+"courses").then(i=>{o.value=i.data}).catch(i=>console.log(i)).finally(t.hide()),o};var rt="/assets/intro-banner_gotaga.458c3d67.png";const it={name:"Home",setup(){const s="http://localhost:8000/api/",o=$();let a=at(),t=K(),i=L(null);const n=I(()=>i.value?a.value.filter(g=>g.category.name===i.value):a.value),d=g=>{i.value=g},{currentPage:r,lastPage:z,offset:M,next:Q,prev:W,pageSize:X,first:F}=oe({currentPage:1,pageSize:5,total:I(()=>n.value.length)}),Y=I(()=>Array.isArray(n.value)?n.value.slice(M.value,M.value+X.value):[]);return o.user.isLoggedIn&&p.post(s+`cart/createOrGetCart/${o.user.id}`,{},{headers:{Authorization:"Bearer "+o.user.token}}).then(g=>{(g.status===200||g.status===201)&&(o.setCartID(g.data.id),getUserCart())}).catch(g=>console.log(g)),ae(a,()=>{F()}),{courses:a,categories:t,apiUrl:s,store:o,currentPage:r,lastPage:z,next:Q,prev:W,first:F,paginatedCourses:Y,filteredCourses:n,selectedCategory:i,selectCategory:d}}},w=s=>(U("data-v-66cb27b2"),s=s(),S(),s),nt={id:"home"},ct={id:"section1"},lt={class:"container pt-4"},dt=B('<div class="intro-banner w-100 position-relative" data-v-66cb27b2><div class="home-heading" data-v-66cb27b2><h1 class="home-title" data-v-66cb27b2>Pour tous les noobs...</h1><p class="mb-0 text-start home-subtitle" data-v-66cb27b2>...qui en ont marre d&#39;\xEAtre des noobs.</p></div><img src="'+rt+'" alt="Gotaga" class="intro-banner-img w-100" data-v-66cb27b2></div>',1),ut={class:"main-content"},_t={class:"course-heading d-flex justify-content-between align-items-end"},ht=w(()=>e("h3",{class:"text-start courses-title mb-0"},"Toutes les formations",-1)),mt=w(()=>e("button",{class:"btn btn-secondary category-filter mb-0 text-white dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},[_(" Filtre "),e("i",{class:"fa-solid fa-filter"})],-1)),pt={class:"dropdown-menu dropdown-menu-end filter-dropdown"},gt=w(()=>e("a",{class:"dropdown-item"},"Toutes",-1)),vt=[gt],ft=["onClick"],bt={class:"dropdown-item"},$t=w(()=>e("hr",null,null,-1)),yt={class:"courses-container mt-4"},wt=["src"],xt={class:"card-content"},Ct={class:"course-title text-uppercase"},kt={key:0,class:"fa-solid fa-circle-check me-1"},It={class:"mb-0 course-description"},Ut={key:0,class:"pagination text-white mt-5 d-flex justify-content-center align-items-center"},St=w(()=>e("i",{class:"fa-solid fa-caret-left"},null,-1)),Ot=[St],At={class:"pagination-page"},Nt={class:"mb-0"},Pt=w(()=>e("i",{class:"fa-solid fa-caret-right"},null,-1)),Lt=[Pt],Tt=w(()=>e("div",{id:"section2"},null,-1));function qt(s,o,a,t,i,n){const d=b("router-link");return c(),l("div",nt,[e("div",ct,[e("div",lt,[dt,e("main",ut,[e("div",_t,[ht,mt,e("ul",pt,[e("li",{class:"category-list-item",onClick:o[0]||(o[0]=r=>t.selectCategory(null))},vt),(c(!0),l(N,null,E(t.categories,r=>(c(),l("li",{key:r.id,class:"category-list-item",onClick:z=>t.selectCategory(r.name)},[e("a",bt,u(r.name),1)],8,ft))),128))])]),$t,e("div",yt,[(c(!0),l(N,null,E(t.paginatedCourses,r=>(c(),re(d,{to:`/courses/${r.id}`,class:"card-container text-decoration-none",key:r.id},{default:v(()=>[e("span",{class:ie(["badge bg-primary category-badge",{"green-badge":r.category_id==1,"black-badge":r.category_id==2,"white-badge":r.category_id==3,"blue-badge":r.category_id==4}])},u(r.category.name),3),e("img",{src:`src/assets/img/players/${r.image}`,alt:"",class:"w-100"},null,8,wt),e("div",xt,[e("h4",Ct,[parseInt(r.price)>50?(c(),l("i",kt)):h("",!0),_(" "+u(r.author),1)]),e("p",It,u(r.name.substring(0,30)+"..."),1)])]),_:2},1032,["to"]))),128))]),t.courses.length>0?(c(),l("div",Ut,[e("button",{onClick:o[1]||(o[1]=(...r)=>t.prev&&t.prev(...r)),class:"pagination-btn prev-btn"},Ot),e("div",At,[e("p",Nt,u(t.currentPage)+" / "+u(t.lastPage),1)]),e("button",{onClick:o[2]||(o[2]=(...r)=>t.next&&t.next(...r)),class:"pagination-btn next-btn"},Lt)])):h("",!0)])])]),Tt])}var Et=y(it,[["render",qt],["__scopeId","data-v-66cb27b2"]]);const Rt={name:"Register",setup(){const s="http://localhost:8000/api/",o=D(),a=$(),t=j({email:"",name:"",password:"",password_confirmation:""}),i=I(()=>({email:{required:f.withMessage("Ce champ est requis",x),email:f.withMessage("Le format de l'email n'est pas valide",G)},name:{required:f.withMessage("Ce champ est requis",x)},password:{required:f.withMessage("Ce champ est requis",x)},password_confirmation:{required:f.withMessage("Ce champ est requis",x),sameAs:ne(t.password)}})),n=H(i,t);return{state:t,v$:n,postApiUrl:s,store:a,router:o}},methods:{async register(){await this.v$.$validate()?p.post(this.postApiUrl+"register",{email:this.state.email,name:this.state.name,password:this.state.password,password_confirmation:this.state.password_confirmation}).then(o=>{if(o.status===201){let a=o.data;this.store.setUserInfos(a.user.id,a.user.name,a.user.email,a.token),this.router.push("/")}else alert("Oups, there was an error. Please try again")}).catch(o=>{alert("Oups, there was an error. Please try again"),console.log(o)}):console.log("Some fields are not correct")}},mounted(){}},q=s=>(U("data-v-b68057b8"),s=s(),S(),s),Vt={id:"register"},zt={class:"container d-flex justify-content-center"},Dt=q(()=>e("div",{class:"left-container w-50"},[e("div",{class:"logo-container"},[e("img",{class:"logo-img w-100",src:Z,alt:"Logo Pour noobs"})]),e("h1",{class:"register-title"},"POUR NOOBS A BIEN PLUS QUE VOUS NE PENSEZ \xC0 VOUS OFFRIR !")],-1)),Bt={class:"right-container w-50"},Mt={class:"form-container"},Ft=q(()=>e("div",{class:"headings"},[e("h2",{class:"form-title"},"Inscription gratuite"),e("p",{class:"form-subtitle"},"Venez am\xE9liorer votre exp\xE9rience")],-1)),jt={key:0,class:"text-danger mb-0 text-start"},Gt={key:1,class:"text-danger mb-0 text-start"},Ht={class:"password-fields"},Jt={class:"password"},Kt={key:0,class:"text-danger mb-0 text-start"},Zt={class:"password-confirmation"},Qt={key:0,class:"text-danger mb-0 text-start"},Wt={class:"register-buttons d-flex align-items-center"},Xt=q(()=>e("button",{type:"submit",class:"btn submit-btn"},"Inscrivez-vous !",-1)),Yt=q(()=>e("span",{class:"mx-3 text-white"},"Ou",-1)),es=_("Connexion"),ts=q(()=>e("p",{class:"text-white terms-conditions"},[e("small",null,[_(" En vous inscrivant, vous acceptez nos "),e("span",null,[e("a",{href:"1",class:"terms-conditions-link"},"termes et conditions")])])],-1));function ss(s,o,a,t,i,n){const d=b("router-link");return c(),l("div",Vt,[e("div",zt,[Dt,e("div",Bt,[e("div",Mt,[Ft,e("form",{onSubmit:o[4]||(o[4]=J((...r)=>n.register&&n.register(...r),["stop","prevent"])),method:"POST",class:"register-form d-flex flex-column p-3"},[C(e("input",{type:"text",placeholder:"Courriel","onUpdate:modelValue":o[0]||(o[0]=r=>t.state.email=r)},null,512),[[k,t.state.email]]),t.v$.email.$error?(c(),l("p",jt,[e("small",null,u(t.v$.email.$errors[0].$message),1)])):h("",!0),C(e("input",{type:"text",placeholder:"Pseudo (4 caract\xE8res minimum)","onUpdate:modelValue":o[1]||(o[1]=r=>t.state.name=r)},null,512),[[k,t.state.name]]),t.v$.name.$error?(c(),l("p",Gt,[e("small",null,u(t.v$.name.$errors[0].$message),1)])):h("",!0),e("div",Ht,[e("div",Jt,[C(e("input",{class:"w-100",type:"password",placeholder:"Mot de passe","onUpdate:modelValue":o[2]||(o[2]=r=>t.state.password=r),autocomplete:""},null,512),[[k,t.state.password]]),t.v$.password.$error?(c(),l("p",Kt,[e("small",null,u(t.v$.password.$errors[0].$message),1)])):h("",!0)]),e("div",Zt,[C(e("input",{class:"w-100",type:"password",placeholder:"Confirmer mot de passe","onUpdate:modelValue":o[3]||(o[3]=r=>t.state.password_confirmation=r),autocomplete:""},null,512),[[k,t.state.password_confirmation]]),t.v$.password_confirmation.$error?(c(),l("p",Qt,[e("small",null,u(t.v$.password_confirmation.$errors[0].$message),1)])):h("",!0)])]),e("div",Wt,[Xt,Yt,m(d,{to:"/login",class:"login-link"},{default:v(()=>[es]),_:1})]),ts],32)])])])])}var os=y(Rt,[["render",ss],["__scopeId","data-v-b68057b8"]]);const as={name:"Login",setup(){const s="http://localhost:8000/api/",o=D(),a=$(),t=j({email:"",password:""}),i=I(()=>({email:{required:f.withMessage("Ce champ est requis",x),email:f.withMessage("Le format de l'email n'est pas valide",G)},password:{required:f.withMessage("Ce champ est requis",x)}})),n=H(i,t);return{state:t,v$:n,postApiUrl:s,store:a,router:o}},methods:{async login(){await this.v$.$validate()?p.post(this.postApiUrl+"login",{email:this.state.email,password:this.state.password}).then(o=>{if(o.status===200){let a=o.data;this.store.setUserInfos(a.user.id,a.user.name,a.user.email,a.token),a.user.role=="admin"&&this.store.setAsAdmin(),this.router.push("/")}else alert("Oups, there was an error. Please try again")}).catch(o=>{alert("Oups, there was an error. Please try again"),console.log(o)}):console.log("Some fields are not correct")}}},V=s=>(U("data-v-4963e569"),s=s(),S(),s),rs={id:"login"},is={class:"container d-flex justify-content-center"},ns=V(()=>e("div",{class:"left-container w-50"},[e("h1",{class:"login-title"},[e("span",{class:"revenez"},"REVENEZ"),_(" \xC0 VOTRE DERNIER POINT DE SAUVEGARDE ! ")])],-1)),cs={class:"right-container w-50"},ls={class:"form-container"},ds=V(()=>e("div",{class:"headings"},[e("h2",{class:"form-title"},"Connexion"),e("p",{class:"form-subtitle"},"Pr\xEAt \xE0 conqu\xE9rir le monde de l'e-sport ?")],-1)),us={key:0,class:"text-danger mb-0 text-start"},_s={class:"password"},hs={key:0,class:"text-danger mb-0 text-start"},ms={class:"login-buttons d-flex align-items-center"},ps=V(()=>e("button",{type:"submit",class:"btn submit-btn"},"Connectez-vous !",-1)),gs=V(()=>e("span",{class:"mx-3 text-white"},"Ou",-1)),vs=_("Inscription");function fs(s,o,a,t,i,n){const d=b("router-link");return c(),l("div",rs,[e("div",is,[ns,e("div",cs,[e("div",ls,[ds,e("form",{onSubmit:o[2]||(o[2]=J((...r)=>n.login&&n.login(...r),["stop","prevent"])),method:"POST",class:"login-form d-flex flex-column p-3"},[C(e("input",{type:"text",placeholder:"Courriel","onUpdate:modelValue":o[0]||(o[0]=r=>t.state.email=r)},null,512),[[k,t.state.email]]),t.v$.email.$error?(c(),l("p",us,[e("small",null,u(t.v$.email.$errors[0].$message),1)])):h("",!0),e("div",_s,[C(e("input",{class:"w-100",type:"password",placeholder:"Mot de passe","onUpdate:modelValue":o[1]||(o[1]=r=>t.state.password=r),autocomplete:""},null,512),[[k,t.state.password]]),t.v$.password.$error?(c(),l("p",hs,[e("small",null,u(t.v$.password.$errors[0].$message),1)])):h("",!0)]),e("div",ms,[ps,gs,m(d,{to:"/register",class:"register-link"},{default:v(()=>[vs]),_:1})])],32)])])])])}var bs=y(as,[["render",fs],["__scopeId","data-v-4963e569"]]);const $s=s=>{const o="http://localhost:8000/api/";let a=L({});return p.get(o+"courses/"+s).then(t=>{a.value=t.data}).catch(t=>console.log(t)),a};const ys={name:"SingleCourse",setup(){const s="http://localhost:8000/api/",o=ce(),a=$();return{course:$s(o.params.id),store:a,apiUrl:s}},methods:{addToCart(s,o){p.post(this.apiUrl+`cart/addCourseToCart/cart/${s}/course/${o}`,{},{headers:{Authorization:"Bearer "+this.store.user.token}}).then(a=>{a.status===201&&(P(),R({title:"<i class='fa-solid fa-fire-flame-curved me-2'></i> F\xC9LICITATIONS !",text:"Vous venez d'ajouter cette qu\xEAte \xE0 votre inventaire !"})),a.status===200&&R({title:"<i class='fa-solid fa-ban'></i> OUPS !",text:"Cette qu\xEAte fait d\xE9j\xE0 partie de votre inventaire"})}).catch(a=>console.log(a))}}},O=s=>(U("data-v-12ea11ce"),s=s(),S(),s),ws={id:"singleCourse"},xs=O(()=>e("div",{class:"left-layer"},null,-1)),Cs=O(()=>e("div",{class:"bottom-layer d-none"},null,-1)),ks={class:"hero-container d-flex"},Is=O(()=>e("div",{class:"empty-space"},null,-1)),Us={class:"hero-img-container"},Ss=["src"],Os={class:"hero-content text-white text-start"},As={class:"course-author text-uppercase"},Ns={key:0,class:"fa-solid fa-circle-check me-1"},Ps=O(()=>e("div",{class:"divider"},null,-1)),Ls={class:"course-name text-uppercase"},Ts={class:"course-description"},qs={class:"price-container d-flex w-50 justify-content-center align-items-center"},Es=O(()=>e("div",{class:"small-divider"},null,-1)),Rs={class:"course-price mb-0"},Vs=O(()=>e("div",{class:"small-divider"},null,-1));function zs(s,o,a,t,i,n){const d=b("notifications");return c(),l("div",ws,[m(d,{width:"400",classes:"notification"}),xs,Cs,e("div",ks,[Is,e("div",Us,[e("img",{class:"hero-img h-100",src:`../src/assets/img/players/${t.course.image}`},null,8,Ss)])]),e("div",Os,[e("h4",As,[parseInt(t.course.price)>50?(c(),l("i",Ns)):h("",!0),_(" "+u(t.course.author),1)]),Ps,e("h1",Ls,u(t.course.name),1),e("p",Ts,u(t.course.description),1),e("div",qs,[Es,e("p",Rs,u(t.course.price)+" \u20AC",1),Vs]),e("button",{class:"add-btn",onClick:o[0]||(o[0]=r=>n.addToCart(t.store.user.cartID,t.course.id))},"S'enr\xF4ler pour cette qu\xEAte")])])}var Ds=y(ys,[["render",zs],["__scopeId","data-v-12ea11ce"]]);const Bs={name:"Cart",setup(){const s="http://localhost:8000/api/",o=$(),a=I(()=>{let i=0;for(let n of o.user.cart.courses)i+=parseFloat(n.price);return i.toFixed(2)}),t=(i,n)=>{p.delete(s+`cart/destroyCourseFromCart/cart/${i}/course/${n}`,{headers:{Authorization:"Bearer "+o.user.token}}).then(d=>{d.status===200&&(P(),R({title:"<i class='fa-solid fa-hand-lizard'></i> PETIT JOUEUR !",text:"Cette qu\xEAte ne fait plus partie de votre inventaire"})),d.status===404&&R({title:"<i class='fa-solid fa-ban'></i> OUPS !",text:"Cette qu\xEAte n'est pas dans votre inventaire"})}).catch(d=>console.log(d))};return P(),{store:o,totalPrice:a,destroyCourse:t}}},A=s=>(U("data-v-222cf951"),s=s(),S(),s),Ms={id:"cart"},Fs={class:"container pt-4"},js=A(()=>e("h3",{class:"text-start cart-title"},"Votre inventaire",-1)),Gs=A(()=>e("hr",null,null,-1)),Hs={key:0,class:"table-container"},Js={class:"left-side"},Ks={class:"table table-striped table-dark"},Zs={class:"align-middle"},Qs={colspan:"1",class:"p-0",style:{width:"150px !important"}},Ws={class:"img-container mx-auto d-block"},Xs=["src"],Ys={colspan:"5",class:"text-start ps-4"},eo={class:"d-flex flex-column"},to={class:"text-uppercase course-author"},so={class:"course-name mb-0"},oo={colspan:"5",class:"course-price"},ao={colspan:"1"},ro=["onClick"],io=A(()=>e("i",{class:"fa-solid fa-circle-xmark"},null,-1)),no=[io],co={class:"right-side"},lo=A(()=>e("h4",{class:"text-white total-text"},"Total",-1)),uo=A(()=>e("div",{class:"divider"},null,-1)),_o={class:"total-price text-white mb-0"},ho={key:0,class:"continue-btn"},mo={key:1,class:"continue-btn"},po={key:1},go=A(()=>e("h4",{class:"text-white mt-4"},"Oups, aucune qu\xEAte n'a \xE9t\xE9 ajout\xE9e \xE0 votre inventaire...",-1)),vo=[go];function fo(s,o,a,t,i,n){const d=b("notifications");return c(),l("div",Ms,[m(d,{width:"400",classes:"notification"}),e("div",Fs,[js,Gs,t.store.user.cartID&&t.store.user.cart.courses.length>0?(c(),l("div",Hs,[e("div",Js,[e("table",Ks,[e("tbody",Zs,[(c(!0),l(N,null,E(t.store.user.cart.courses,r=>(c(),l("tr",{key:r.id,class:"table-row"},[e("td",Qs,[e("div",Ws,[e("img",{src:`src/assets/img/players/${r.image}`,alt:"",class:"w-100 course-img d-block"},null,8,Xs)])]),e("td",Ys,[e("div",eo,[e("h5",to,u(r.author),1),e("p",so,u(r.name),1)])]),e("td",oo,u(r.price)+"\u20AC",1),e("td",ao,[e("button",{type:"button",class:"delete-btn",onClick:z=>t.destroyCourse(t.store.user.cart.id,r.id)},no,8,ro)])]))),128))])])]),e("div",co,[lo,uo,e("p",_o,u(t.totalPrice)+"\u20AC",1),t.store.user.cart.courses.length>1?(c(),l("button",ho,"Accepter ces qu\xEAtes")):(c(),l("button",mo,"Accepter la qu\xEAte"))])])):(c(),l("div",po,vo))])])}var bo=y(Bs,[["render",fo],["__scopeId","data-v-222cf951"]]);const $o=[{path:"/",name:"Home",component:Et},{path:"/register",name:"Register",component:os},{path:"/login",name:"Login",component:bs},{path:"/courses/:id",name:"SingleCourse",component:Ds},{path:"/cart",name:"Cart",component:bo}],yo=le({history:de(),routes:$o});ue(ot).use(yo).use(_e()).use(he).use(me).mount("#app");
