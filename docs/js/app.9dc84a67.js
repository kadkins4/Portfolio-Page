(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)s=r[u],a[s]&&d.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("c21b"),a=n.n(i);a.a},"0dbb":function(t,e,n){"use strict";var i=n("bc2b"),a=n.n(i);a.a},"1cf4":function(t,e,n){t.exports=n.p+"img/mom.c45cee66.png"},"2d26":function(t,e,n){},"39a4":function(t,e,n){},"3d84":function(t,e,n){t.exports=n.p+"img/myAvatar.594e546a.png"},"442e":function(t,e,n){t.exports=n.p+"img/dad.f18adac0.png"},"4ef0":function(t,e,n){"use strict";var i=n("df46"),a=n.n(i);a.a},5153:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(this.activeComponent,{tag:"component"})],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projectsContainer"},[n("div",{staticClass:"main"},[n("div",{staticClass:"projectInfo"},[n("h3",[t._v("Projects")]),n("p",[t._v("\n        Below is a list of some of the projects that I have completed or are still in progress.  There is a description of each project, technology used, collaborators, and a link to the project and its corresponding GitHub repository.  Use the search bar to quickly find projects with certain technology, types (game, commerce, etc).\n      ")]),n("app-line")],1),n("app-search-bar"),n("div",{staticClass:"projects"},t._l(t.projectData,function(e){return e.display?n("app-project",{key:e.id,attrs:{projectInfo:e}}):t._e()}))],1),n("app-contact-btn")],1)},l=[],p=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"callToAction"},[n("button",{staticClass:"btn",on:{"~click":function(e){return t.changeToContactMe(e)}}},[t._v("\n    "+t._s(t.generateBtnText)+"\n  ")])])}),u=[],d={props:{text:String},computed:{generateBtnText:function(){return this.text?this.text:"Work with Me"}},methods:{changeToContactMe:function(){Wt.$emit("changeToContactMe")}}},h=d,f=(n("e87b"),n("2877")),m=Object(f["a"])(h,p,u,!1,null,"363762a4",null);m.options.__file="ContactBtn.vue";var v=m.exports,g=[{id:1,name:"The Cipher Brief Main Website",showInSearch:!0,display:!0,type:["Wordpress","News Website","Startup"],displayName:"TheCipherBrief",githubURL:"",hostedURL:"https://www.thecipherbrief.com/",snapshotPath:"",company:"The Cipher Brief",technology:["PHP","JavaScript","CSS3","Wordpress"],description:"My first official contract, I was tasked with revamping their pre-existing website to make it look more modern and streamline it for their viewers, along with fixing any bugs that were present.  During this process, they also changed to a subscription based model which I implemented as well."},{id:2,name:"Twics!",showInSearch:!0,display:!0,type:["fun","website","application","api"],displayName:"Twics: Tweets to Pics",githubURL:"https://github.com/kadkins4/TWiCS",hostedURL:"https://kadkins4.github.io/TWiCS/#/twics/new",snapshotPath:"",company:"General Assembly",technology:["AngularJs","Rails","SQL","APIs"],description:"TWICS! Tweets to pics, was my first group project and first full usage of an API, two APIs to be exact.  We decided to focus more on the functionality of the application versus the style.  Try it out. There are two ways to interact, type in a twitter handle or type in a tweet and see the result in the form of pictures. Utilizing Twitter API and Flickr API. Frontend in AngularJS, backend in Rails.  NOTE: If you are the first person to hit the server that day, it will take about 30 seconds for the first result to return."},{id:3,name:"Extremely Nerdy: Trivia Game",showInSearch:!0,display:!0,type:["game","browser game","mobile application","HTML5 Game"],displayName:"Trivia, Nerd Style",githubURL:"https://github.com/kadkins4/project-1",hostedURL:"https://kadkins4.github.io/project-1/",snapshotPath:"",company:"General Assembly",technology:["HTML5/CSS3","VueJs","JavaScript","JQuery"],description:"A fun trivia game, this was my first JavaScript logic based game/application. Eventually, I plan to go back and refactor this with a framework ( most likely VueJS or ReactJS ) and re-style the entire application."},{id:4,name:"Kendall Adkins Portfolio Site",showInSearch:!0,display:!0,type:["Website","Portfolio","Single Page Application"],displayName:"KendallAdkins.me",githubURL:"https://github.com/kadkins4/Portfolio-Page",hostedURL:"http://kendalladkins.me",snapshotPath:"",company:"STIX APPLICATIONS",technology:["VueJS","CSS3","JavaScript"],description:"This website that you are currently looking at.  I built this in order to have a working application utilizing VueJS, a JavaScript framework.  This took me a little over a week to build and I am still working on fine-tuning."},{id:5,name:"The Cipher Brief Threat Conference Site",showInSearch:!0,display:!0,type:["Wix","E-Commerce","Startup"],displayName:"TCB: Threat Conference",githubURL:"",hostedURL:"https://www.tcbconference.com/",snapshotPath:"",company:"The Cipher Brief",technology:["Wix","E-Commerce"],description:"The Cipher Brief holds an annual threat conference with some of the biggest names in national security attending. This startup needed a separate website that they could easily maintain so we decided to create them a WYSIWYG ( What You See Is What You Get ) site utilizing Wix.  This allows them to change their content every year and not need to hire a developer for small changes."},{id:6,name:"The Cipher Brief Threat Advisory Board",showInSearch:!0,display:!0,type:["News","Subscription","Wordpress","Custom Theme"],displayName:"Threat Advisory Board",githubURL:"https://github.com/kadkins4/TCB_Cyber-Advisory-Board",hostedURL:"https://www.thecipherbriefcyber.com",snapshotPath:"",company:"The Cipher Brief",technology:["Wordpress","PHP","CSS3"],description:"Working with The Cipher Brief, they were experimenting in subscription based news for some of their clients.  Working with one other developer we had 3 days to turn around a full subscription based website on Wordpress with a custom theme.  This was the BETA for their subscription based model that they now adopted on their main site."},{id:7,name:"Store.ABA.com",showInSearch:!0,display:!0,type:["Non-profit","Financial","Banking","E-Commerce"],displayName:"ABA E-Commerce",githubURL:"",hostedURL:"https://store.aba.com",snapshotPath:"",company:"American Bankers Association",technology:["Sitefinity","ASP.NET","JS","Basic"],description:"My first and current full-time (non-contract) position in the web development sphere. This is one of the many websites that I continually work on.  From implementing GDPR requirements to bug fixes to improving the overall user experience.  In order to work on this I had to learn Basic, ASP.NET, and how to utilize Sitefinity, on the fly."},{id:8,name:"DOTA 2 Hub",showInSearch:!0,display:!0,type:["Gaming","CRUD","Application"],displayName:"DOTA 2 HUB",githubURL:"https://github.com/kadkins4/Project-2",hostedURL:"https://dota2hub.herokuapp.com/",snapshotPath:"",company:"General Assembly",technology:["Heroku","PGSQL","Ruby on Rails","oAuth"],description:"Now, you may see this and say... ehh looks like shit. But I love this project. It was my first actual application (front and backend), solely planned, from wireframe to development with a full README and I had so much fun creating it. And yes, I'm a huge nerd! Why not go back and fix it up? I'm working on something just as nerdy and more involved which is needed for this game. :) and I'm so happy!"},{id:9,name:"Retro Snake",showInSearch:!0,display:!0,type:["Gaming","Vanilla JS"],displayName:"Retro Snake",githubURL:"https://github.com/kadkins4/SnakeHTML",hostedURL:"",snapshotPath:"",company:"STIX Applications",technology:["HTML5","JS","CSS3"],description:"I haven't deployed this one yet but this is the first real time game that I built using canvas. I had so much fun making it ( and playing it ) that I started adding in an arcade retro look to it. I occasionally still pop back in the code to add something random, like it getting incrementally harder. The only way to access this at the moment is to clone it and run it locally."}],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projectContainer"},[n("div",{staticClass:"projectHeader"},[n("div",{staticClass:"projectTitle"},[n("div",{staticClass:"displayName"},[n("h3",[t._v(t._s(t.projectInfo.displayName))])]),n("div",{staticClass:"company"},[t._v("\n        "+t._s(t.projectInfo.company)+"\n      ")])]),n("div",{staticClass:"urlContainer"},[t.projectInfo.hostedURL?n("div",{staticClass:"urlButton",on:{click:function(e){t.goToURL(t.projectInfo.hostedURL)}}},[n("WebIcon",{attrs:{title:"Go To website"}}),n("div",[t._v("Site")])],1):t._e(),t.projectInfo.githubURL?n("div",{staticClass:"urlButton",on:{click:function(e){t.goToURL(t.projectInfo.githubURL)}}},[n("GithubCircleIcon",{attrs:{title:"Go To Github Repository"}}),n("b",[t._v("Github")])],1):t._e()])]),n("div",[n("div",{staticClass:"technology"},t._l(t.projectInfo.technology,function(e){return n("span",{key:e},[t._v("| "+t._s(e)+" |")])}))]),n("app-line"),n("div",{staticClass:"description",domProps:{innerHTML:t._s(t.projectInfo.description)}})],1)},y=[],_=n("4f11"),w=n("22f9"),C=(n("ac6a"),n("6bde"),n("4917"),function(t){var e=/[a-zA-Z]+[ -.]/;return!t.match(e)&&t}),k=function(t){var e=window.open(t,"_blank");e.focus()},I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hr",{staticClass:"line"})},S=[],T={},j=T,P=(n("a0bb"),Object(f["a"])(j,I,S,!1,null,"cf91164c",null));P.options.__file="Line.vue";var x=P.exports,B={components:{WebIcon:_["a"],GithubCircleIcon:w["a"],AppLine:x},props:["projectInfo"],data:function(){return{}},computed:{},methods:{goToURL:function(t){k(t)}}},A=B,L=(n("4ef0"),Object(f["a"])(A,b,y,!1,null,"dbbc2e9a",null));L.options.__file="Project.vue";var R=L.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"searchContainer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"searchBar",attrs:{type:"text",placeholder:"Search Projects..."},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),n("div",{staticClass:"iconContainer",on:{click:function(e){return e.preventDefault(),t.removeSearchInput(e)}}},[n("MagnifyCloseIcon",{attrs:{fillColor:"white",title:"clear search"}})],1)]),n("p",{staticClass:"helpTip"},[t._v("note: Search is Case Insensitive")])])},E=[],U=n("83f0"),M={components:{MagnifyCloseIcon:U["a"]},data:function(){return{searchInput:null}},methods:{onChangeSearchProjects:function(){Wt.$emit("searchThroughProjects",C(this.searchInput))},removeSearchInput:function(){this.searchInput=""}},watch:{searchInput:function(){this.onChangeSearchProjects()}}},O=M,$=(n("0dbb"),Object(f["a"])(O,N,E,!1,null,"806c8016",null));$.options.__file="SearchBar.vue";var W=$.exports,H={components:{appContactBtn:v,appProject:R,appSearchBar:W,appLine:x},data:function(){return{projectData:g}},created:function(){var t=this;Wt.$on("searchThroughProjects",function(e){t.projectData.filter(function(t){var n=t.technology.join(" ").toLowerCase(),i=t.displayName?t.displayName.toLowerCase():"",a=t.description?t.description.toLowerCase():"",o=t.technology.join(" ").toLowerCase(),s=e.toLowerCase();return i.includes(s)||a.includes(s)||o.includes(s)||n.includes(s)?t.display=!0:t.display=!1})})}},J=H,G=(n("f7b1"),Object(f["a"])(J,c,l,!1,null,"682576de",null));G.options.__file="Projects.vue";var F=G.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutContainer"},[t._m(0),t._m(1),n("app-line"),t._m(2),n("app-line"),t._m(3)],1)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("Creative Applications and Websites "),n("br"),t._v("for Your Business, Hobby, or Lifestyle")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aboutBlock"},[i("div",{staticClass:"image left"},[i("img",{attrs:{src:n("442e"),alt:""}})]),i("div",{staticClass:"text"},[i("h5",[t._v("Full-Stack Developer. HTML5 Game Developer. And More.")]),i("p",{staticClass:"right"},[t._v("Hey, I'm Kendall. A full-stack web and application developer and new "),i("span",[t._v("HTML5 game")]),t._v(" developer.  I started my career in Retail management after earning my Bachelor's of Science.  Although I've lived on the East Coast all my life, I love to travel ( internationally and across the coast ), play games ( both board and video games ), and trying out different "),i("span",[t._v("beers and whiskeys")]),t._v(".")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aboutBlock"},[i("div",{staticClass:"text"},[i("h5",[t._v("JavaScript Is Life... Along With Other Things.")]),i("p",{staticClass:"left"},[t._v("I made a career switch to become a developer after five years in management.  Upon finishing a bootcamp and several self-paced programming courses, I have worked on several contracts and a full-time position using "),i("span",[t._v("JavaScript")]),t._v(", "),i("span",[t._v("C#")]),t._v(", ASP.NET, PHP, and Ruby. My language of preference is JavaScript as I use that in all of my projects, personal and professional and am always looking for ways to improve my grapple on the language.")])]),i("div",{staticClass:"image right"},[i("img",{attrs:{src:n("8aa0"),alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aboutBlock"},[i("div",{staticClass:"image left"},[i("img",{attrs:{src:n("f268"),alt:""}})]),i("div",{staticClass:"text"},[i("h5",[t._v("Client & Customer First")]),i("p",{staticClass:"right"},[t._v("From experience, I know that management can be difficult and time-consuming. I make it easier for you to manage, from giving suggestions on better "),i("span",[t._v("UX/UI")]),t._v(" and translating tech speak into layman's terms to deveoping the application that is right for "),i("span",[t._v("you and your customers")]),t._v(", ultimately freeing up time for you to run your business,hobby, and live your life.")])])])}],Q={components:{AppLine:x},data:function(){return{}}},Y=Q,z=(n("f534"),Object(f["a"])(Y,D,V,!1,null,"6ca84d16",null));z.options.__file="About.vue";var K=z.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("COMING SOON!")])])}],Z={},tt=Z,et=(n("c2e5"),Object(f["a"])(tt,q,X,!1,null,"7eacb5fb",null));et.options.__file="Product.vue";var nt=et.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"homeContainer"},[i("div",{staticClass:"homeHeader"},[i("div",{staticClass:"nameContainer"},[i("h1",[t._v(t._s(t.firstName))]),i("app-line"),i("h4",[t._v(t._s(t.title))]),i("app-line"),i("h1",[t._v(t._s(t.lastName))])],1),i("img",{staticClass:"profPicture",attrs:{src:n("b3e3"),alt:"Picture of Kendall; Courtesy of DCRefined"}})]),i("div",{staticClass:"infoBoxContainer"},t._l(t.views,function(t){return i("div",{key:t.id},[i("info-box",{attrs:{view:t}})],1)})),i("app-contact-btn")],1)},at=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infoBoxes",style:this.boxStyle,on:{click:function(e){t.changeViewFromInfoBox()},mouseover:t.pictureBackground,mouseout:t.colorBackground}},[n("div",{staticClass:"infoTitle"},[t._v("\n    "+t._s(t.view.title)+"\n  ")])])},st=[],rt={props:["view"],data:function(){return{boxStyle:this.colorBackground()}},methods:{changeViewFromInfoBox:function(){Wt.$emit("changeViewFromInfoBox",this.view.component)},colorBackground:function(){return this.boxStyle={background:this.view.color}},pictureBackground:function(){return this.boxStyle={background:"url("+this.view.image+") center center no-repeat"}}}},ct=rt,lt=(n("92f7"),Object(f["a"])(ct,ot,st,!1,null,"4d2cc27e",null));lt.options.__file="InfoBox.vue";var pt=lt.exports,ut={components:{InfoBox:pt,appContactBtn:v,appLine:x},data:function(){return{firstName:"Kendall",lastName:"Adkins",title:"Software Developer",views:[{id:2,title:"Products",component:"appProducts",description:"this is the product section",image:n("1cf4"),color:"#edb88b"},{id:3,title:"Projects",component:"appProjects",description:"this is the projects section",image:n("ad0a"),color:"#17BEBB"},{id:4,title:"About Me",component:"appAbout",description:"this is the about me section",image:n("3d84"),color:"#2e282a"},{id:5,title:"Contact",component:"appContact",description:"this is the contact section",image:n("afb0"),color:"#cd5334"}]}},computed:{fullName:function(){return this.firstName+" "+this.lastName}}},dt=ut,ht=(n("5f33"),Object(f["a"])(dt,it,at,!1,null,"d82f269c",null));ht.options.__file="Home.vue";var ft=ht.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contactContainer"},[t._m(0),t._m(1),n("div",{staticClass:"socialMediaBar"},[n("div",{staticClass:"socialMediaIcons",attrs:{id:"instagram"},on:{click:function(e){t.goToUrl("https://www.instagram.com/kadkins4/")}}},[n("instagram-icon")],1),n("div",{staticClass:"socialMediaIcons",attrs:{id:"github"},on:{click:function(e){t.goToUrl("https://github.com/kadkins4")}}},[n("github-circle-icon")],1),n("div",{staticClass:"socialMediaIcons",attrs:{id:"linkedin"},on:{click:function(e){t.goToUrl("https://www.linkedin.com/in/adkinskendall/")}}},[n("linkedin-icon")],1),n("div",{staticClass:"socialMediaIcons",attrs:{id:"steam"},on:{click:function(e){t.goToUrl("https://steamcommunity.com/id/st6theone/")}}},[n("steam-icon")],1),n("div",{staticClass:"socialMediaIcons",attrs:{id:"spotify"},on:{click:function(e){t.goToUrl("https://open.spotify.com/user/kadkins4?si=rBA7RVkvQ2CgMPANEkn7Lg")}}},[n("spotify-icon")],1),n("div",{staticClass:"socialMediaIcons",attrs:{id:"twitter"},on:{click:function(e){t.goToUrl("https://twitter.com/ST6THEONE")}}},[n("twitter-icon")],1)]),n("iframe",{attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLScaovgm5884mQYqRTCRZra-B2C9ZJ76g20AyZkS7bQXj3g7dw/viewform?embedded=true",width:"640",height:"1282",frameborder:"0",marginheight:"0",marginwidth:"0"}},[t._v("Loading...")])])},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"titleContainer"},[n("h3",[t._v("Contact Me")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contactInfoContainer"},[n("div",[n("p",[t._v("\n    Wanna collaborate.\n    "),n("br"),t._v("\n    Report a Bug.\n    "),n("br"),t._v("\n    ...or just say hi!")])])])}],gt=n("03b1"),bt=n("d47d"),yt=n("2b92"),_t=n("d3d4"),wt=n("e792"),Ct={components:{InstagramIcon:gt["a"],GithubCircleIcon:w["a"],LinkedinIcon:bt["a"],SteamIcon:yt["a"],SpotifyIcon:_t["a"],TwitterIcon:wt["a"]},data:function(){return{}},methods:{goToUrl:function(t){k(t)}}},kt=Ct,It=(n("6140"),Object(f["a"])(kt,mt,vt,!1,null,"3a5940fc",null));It.options.__file="ContactPage.vue";var St=It.exports,Tt={components:{appHome:ft,appAbout:K,appProducts:nt,appProjects:F,appContact:St},data:function(){return{activeComponent:"appHome"}},created:function(){var t=this;Wt.$on("changeViewFromNav",function(e){t.activeComponent=e}),Wt.$on("changeViewFromInfoBox",function(e){t.activeComponent=e}),Wt.$on("changeToContactMe",function(){t.activeComponent="appContact"})}},jt=Tt,Pt=(n("b069"),Object(f["a"])(jt,s,r,!1,null,"1648651a",null));Pt.options.__file="Main.vue";var xt=Pt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._m(0),t._l(t.navLinks,function(e,i){return n("div",{key:e.id,staticClass:"navBtns",on:{click:function(e){t.changeViewFromNav(i)}}},[t._v(" \n    "+t._s(e.title)+" \n  ")])})],2)},At=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon"},[i("img",{staticClass:"iconImg",attrs:{src:n("3d84"),alt:"Avatar Icon"}})])}],Lt={data:function(){return{navLinks:[{id:1,title:"Home",component:"appHome"},{id:2,title:"Products",component:"appProducts"},{id:3,title:"Projects",component:"appProjects"},{id:4,title:"About",component:"appAbout"},{id:5,title:"Contact",component:"appContact"}]}},methods:{changeViewFromNav:function(t){Wt.$emit("changeViewFromNav",this.navLinks[t].component)}}},Rt=Lt,Nt=(n("78bb"),Object(f["a"])(Rt,Bt,At,!1,null,"4754d54a",null));Nt.options.__file="Header.vue";var Et=Nt.exports,Ut={name:"app",components:{Main:xt,Header:Et},data:function(){return{}}},Mt=Ut,Ot=(n("034f"),Object(f["a"])(Mt,a,o,!1,null,null,null));Ot.options.__file="App.vue";var $t=Ot.exports;n.d(e,"eventBus",function(){return Wt}),i["a"].config.productionTip=!1;var Wt=new i["a"];new i["a"]({render:function(t){return t($t)}}).$mount("#app")},"5f33":function(t,e,n){"use strict";var i=n("d457"),a=n.n(i);a.a},6140:function(t,e,n){"use strict";var i=n("71b7"),a=n.n(i);a.a},"71b7":function(t,e,n){},"78bb":function(t,e,n){"use strict";var i=n("2d26"),a=n.n(i);a.a},8303:function(t,e,n){},"8aa0":function(t,e,n){t.exports=n.p+"img/firefly.a73da243.jpg"},"92f7":function(t,e,n){"use strict";var i=n("a281"),a=n.n(i);a.a},"9df5":function(t,e,n){},a0bb:function(t,e,n){"use strict";var i=n("8303"),a=n.n(i);a.a},a281:function(t,e,n){},ad0a:function(t,e,n){t.exports=n.p+"img/desk.bc508e59.jpg"},afb0:function(t,e,n){t.exports=n.p+"img/question_block.f5c3459e.png"},b069:function(t,e,n){"use strict";var i=n("9df5"),a=n.n(i);a.a},b3e3:function(t,e,n){t.exports=n.p+"img/Adkins.e08d6bf6.jpg"},bc2b:function(t,e,n){},c21b:function(t,e,n){},c2e5:function(t,e,n){"use strict";var i=n("39a4"),a=n.n(i);a.a},c94d:function(t,e,n){},d457:function(t,e,n){},d634:function(t,e,n){},df46:function(t,e,n){},e87b:function(t,e,n){"use strict";var i=n("d634"),a=n.n(i);a.a},f268:function(t,e,n){t.exports=n.p+"img/tough_mudder.aa0d982f.jpg"},f534:function(t,e,n){"use strict";var i=n("5153"),a=n.n(i);a.a},f7b1:function(t,e,n){"use strict";var i=n("c94d"),a=n.n(i);a.a}});
//# sourceMappingURL=app.9dc84a67.js.map