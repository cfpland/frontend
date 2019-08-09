(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(231),r="IQFgYz6dzi36nwz39BZQ8XCGpytKh6CO",o="cfpland.auth0.com",i="https://api.cfpland.com/",c="https://www.cfpland.com/",s=function(){function e(){this.auth0=new n.a.WebAuth({domain:o,clientID:r,redirectUri:c,responseType:"token id_token",scope:"openid email",audience:i})}var t=e.prototype;return t.login=function(){this.auth0.authorize()},t.handleAuthentication=function(){var e=this;return this.auth0.parseHash(function(t,a){if(a&&a.accessToken&&a.idToken)e.setSession(a),window.location.href="/";else if(t)return t;return null})},t.setSession=function(e){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("idToken",e.idToken);var t=1e3*e.expiresIn+(new Date).getTime();localStorage.setItem("expiresAt",t)},t.getAccessToken=function(){return localStorage.getItem("accessToken")},t.getIdToken=function(){return localStorage.getItem("idToken")},t.renewTokens=function(){var e=this;this.auth0.checkSession({},function(t,a){a&&a.accessToken&&a.idToken?e.setSession(a):t&&(e.logout(),console.error(t))})},t.logout=function(){localStorage.removeItem("accessToken"),localStorage.removeItem("idToken"),localStorage.removeItem("expiresAt"),this.auth0.logout({returnTo:window.location.origin}),window.location.href="/"},t.isAuthenticated=function(){return"undefined"!=typeof window&&localStorage.getItem("accessToken")&&localStorage.getItem("accessToken").length>0},e}()},191:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(190),r=a(239),o=a.n(r),i="https://api.cfpland.com/v0",c=function(){function e(){this.isAuthenticated=void 0,this.baseUrl=i,this.auth=new n.a,this.isAuthenticated=this.auth.isAuthenticated()}var t=e.prototype;return t.getMe=function(){return o.a.get(this.baseUrl+"/me",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.patchMe=function(e){return o.a.patch(this.baseUrl+"/me",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.getConferences=function(e){return o.a.get(this.baseUrl+"/conferences",{params:e,headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.getSavedConferences=function(){return o.a.get(this.baseUrl+"/me/conferences",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.putMeConference=function(e,t,a){return o.a.put(this.baseUrl+"/me/conferences/"+e+"/"+t,a,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.deleteMeConference=function(e,t){return o.a.delete(this.baseUrl+"/me/conferences/"+e+"/"+t,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.getMeSearches=function(){return o.a.get(this.baseUrl+"/me/searches",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.putMeSearch=function(e){return o.a.put(this.baseUrl+"/me/searches",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.deleteMeSearch=function(e){return o.a.delete(this.baseUrl+"/me/searches/"+e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.getMePayment=function(){return o.a.get(this.baseUrl+"/me/payment",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},e}()},192:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={READY:"ready",LOADING:"loading",SAVING:"saving",SAVED:"saved",ERROR:"error"}},193:function(e,t){(function(t){e.exports={siteMetadata:{title:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",siteUrl:"https://www.cfpland.com",author:"Karl L. Hughes",twitter:"cfp_land",image:"/img/default.png"},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/content/posts/",name:"posts"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"CFP Land",short_name:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",homepage_url:"https://www.cfpland.com",start_url:"/",background_color:"#ffffff",theme_color:"#D3637E",display:"standalone",icons:[{src:"/img/android-icon-192x192.png",sizes:"192x192",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-19700764-14"}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},{resolve:"gatsby-source-airtable",options:{apiKey:"YOUR_AIRTABLE_KEY",tables:[{baseId:"app5JdxyWF41oHa5k",tableName:"conferences",tableView:"closing_in_21",tableLinks:["category"]},{baseId:"app5JdxyWF41oHa5k",tableName:"categories",tableView:"all"}]}},{resolve:"gatsby-plugin-create-client-paths",options:{prefixes:["/c/account/*","/c/saved/*","/c/searches/*"]}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(this,"/")},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(228),i=a.n(o),c=a(201),s=a.n(c);t.a=function(e){var t=e.site,a=e.title,n=e.image;n=n||s()(t,"image");var o=s()(t,"title");return a=a?a+" | "+o:o,r.a.createElement(i.a,{title:a,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+s()(t,"twitter")},{property:"twitter:image",content:n},{property:"og:title",content:a},{property:"og:type",content:"website"},{property:"og:description",content:s()(t,"description")},{property:"og:url",content:s()(t,"siteUrl")},{property:"og:image",content:n}]})}},199:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(29);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),c=a(191),s=a(190),l=a(192);function m(e){return function(t){function a(a){var n;return(n=t.call(this,a)||this).componentDidMount=function(){if(n.auth.isAuthenticated())n.auth.renewTokens(),n.setState(Object.assign({},n.state,{isAuthenticated:!0})),n.state.user||n.api.getMe().then(function(e){n.setState(Object.assign({},n.state,{user:e.data}))});else{var e=n.auth.handleAuthentication();e?n.setState(Object.assign({},n.state,{globalAlert:{type:l.a.ERROR,message:e.errorDescription}})):n.setState(Object.assign({},n.state,{isAuthenticated:!1}))}},n.render=function(){return i.a.createElement(e,Object.assign({auth:n.state},n.props))},n.auth=new s.a,n.api=new c.a,n.state={isAuthenticated:!1,user:null,globalAlert:{type:null,message:null}},n}return r()(a,t),a}(i.a.Component)}},200:function(e,t,a){"use strict";a(29);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),c=a(229),s=a.n(c),l=a(192),m=a(64),u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return i.a.createElement("div",null,t.props.auth.globalAlert&&t.props.auth.globalAlert.type===l.a.ERROR?i.a.createElement("div",{className:"alert alert-danger mb-0"},i.a.createElement("strong",null,"Whoops! Something went wrong: "),t.props.auth.globalAlert.message):"",t.props.auth&&t.props.auth.user&&"new"===t.props.auth.user.accountLevel&&"/c/onboarding/"!==window.location.pathname?i.a.createElement("div",{className:"alert alert-info mb-0 text-center"},i.a.createElement("p",null,i.a.createElement("strong",null,"Whoops! Looks like your account setup is not complete."," "),"You will not be able to access Pro features until you complete your account setup."),i.a.createElement(m.Link,{to:"/c/onboarding/",className:"btn btn-info"},"Complete Account Setup")):"")},t}return r()(t,e),t}(i.a.Component),p=(a(230),a(190)),d=a(189),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).render=function(){var e=a.props,t=e.location,n=e.title,r=e.auth;return i.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement(m.Link,{className:"navbar-brand",to:"/"},i.a.createElement("img",{src:"/img/logo.png",width:"30",height:"30",alt:n})),i.a.createElement("div",{className:"navbar-nav-scroll d-none d-md-block"},i.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},i.a.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},i.a.createElement(m.Link,{to:"/",className:"nav-link"},"Home")),r.isAuthenticated?i.a.createElement("li",{className:"/c/all/"===t.pathname?"nav-item active dropdown":"nav-item dropdown"},i.a.createElement(m.Link,{to:"/c/all/",className:"nav-link dropdown-toggle",id:"cfpNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CFPs"),i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"cfpNavbarDropdown"},i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/all/"},i.a.createElement("i",{className:"fa fa-list mr-2"})," All"),i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/saved/"},i.a.createElement("i",{className:"fa fa-star mr-2"})," Saved"),i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/applied/"},i.a.createElement("i",{className:"fa fa-paper-plane mr-2"})," Applied"),i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/accepted/"},i.a.createElement("i",{className:"fa fa-check mr-2"})," Accepted"),i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/rejected/"},i.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/hidden/"},i.a.createElement("i",{className:"fa fa-eye-slash mr-2"})," Hidden"))):i.a.createElement("li",{className:"/conferences/"===t.pathname?"nav-item active":"nav-item"},i.a.createElement(m.Link,{to:"/conferences/",className:"nav-link"},"CFPs")),i.a.createElement("li",{className:"/blog/"===t.pathname?"nav-item active":"nav-item"},i.a.createElement(m.Link,{to:"/blog/",className:"nav-link"},"Blog")),i.a.createElement("li",{className:"/submit/"===t.pathname?"nav-item active":"nav-item"},i.a.createElement(m.Link,{to:"/submit/",className:"nav-link"},"Submit")))),i.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"}),i.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},r.isAuthenticated?i.a.createElement("li",{className:"/c/profile/"===t.pathname?"nav-item active dropdown":"nav-item dropdown"},i.a.createElement(m.Link,{to:"/c/profile/",className:"nav-link dropdown-toggle",id:"accountNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Account"),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"accountNavbarDropdown"},i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/profile/"},i.a.createElement("i",{className:"fa fa-user mr-2"})," Profile"),i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/communication/"},i.a.createElement("i",{className:"fa fa-bell mr-2"})," Communication"),i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/billing/"},i.a.createElement("i",{className:"fa fa-credit-card mr-2"})," Billing"),i.a.createElement(m.Link,{className:"dropdown-item",to:"/c/searches/"},i.a.createElement("i",{className:"fa fa-search mr-2"})," Searches"),i.a.createElement("div",{className:"dropdown-divider"}),i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),a.authClient.logout()}},i.a.createElement("i",{className:"fa fa-sign-out mr-2"})," Logout"))):i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"nav-item mr-2 d-none"},i.a.createElement("a",{onClick:function(e){e.preventDefault(),a.authClient.login()},href:"#",className:"nav-link"},"Login")),i.a.createElement("li",{className:"nav-item d-none d-md-block"},i.a.createElement(d.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu",className:"nav-link btn btn-secondary font-weight-bold",title:"Upgrade to CFP Land Professional"},i.a.createElement("i",{className:"fa fa-arrow-up"})," ",i.a.createElement("span",{className:"text-white"},"Upgrade to Pro")))))))},a.authClient=new p.a,a}return r()(t,e),t}(i.a.Component),h=(a(232),a(20)),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=(new p.a).isAuthenticated();return i.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-light d-block d-md-none"},i.a.createElement("div",{className:"w-100"},t?i.a.createElement(i.a.Fragment,null,i.a.createElement(h.Link,{className:"/c/all/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/all/"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-list"})),"CFPs"),i.a.createElement(h.Link,{className:"/c/saved/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/saved/"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-star"})),"Saved"),i.a.createElement(h.Link,{className:"/c/applied/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/applied/"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-paper-plane"})),"Applied"),i.a.createElement(h.Link,{className:"/c/accepted/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/accepted/"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-check"})),"Accepted"),i.a.createElement("div",{className:"dropup nav-item"},i.a.createElement(d.OutboundLink,{className:"nav-link dropdown-toggle",id:"bottom-nav-dropup","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-ellipsis-h"}))," ","More"),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"bottom-nav-dropup"},i.a.createElement(h.Link,{className:"dropdown-item",to:"/"},i.a.createElement("i",{className:"fa fa-home mr-2"})," Home"),i.a.createElement(h.Link,{className:"dropdown-item",to:"/blog"},i.a.createElement("i",{className:"fa fa-newspaper-o mr-2"})," Blog"),i.a.createElement("div",{className:"dropdown-divider"}),i.a.createElement(h.Link,{className:"dropdown-item",to:"/c/rejected/"},i.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),i.a.createElement(h.Link,{className:"dropdown-item",to:"/c/hidden/"},i.a.createElement("i",{className:"fa fa-eye-slash mr-2"})," Hidden"),i.a.createElement(h.Link,{className:"dropdown-item",to:"/submit/"},i.a.createElement("i",{className:"fa fa-plus-circle mr-2"})," Submit")))):i.a.createElement(i.a.Fragment,null,i.a.createElement(h.Link,{className:"/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-home"})),"Home"),i.a.createElement(h.Link,{className:"/conferences/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/conferences/"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-list"})),"CFPs"),i.a.createElement(h.Link,{className:"/submit/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/submit/"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-plus-circle"})),"Submit"),i.a.createElement(h.Link,{className:"/blog/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/blog/"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-newspaper-o"})),"Blog"),i.a.createElement(d.OutboundLink,{className:"nav-item nav-link",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-arrow-up"})),"Pro"))))},t}(i.a.Component),v=(a(233),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"container-fluid text-center d-none d-md-block"},i.a.createElement("p",{className:"social"},i.a.createElement(d.OutboundLink,{href:"https://twitter.com/cfp_land"},i.a.createElement("i",{className:"fa fa-twitter"})),i.a.createElement(d.OutboundLink,{href:"https://www.facebook.com/cfpland"},i.a.createElement("i",{className:"fa fa-facebook"})),i.a.createElement(d.OutboundLink,{href:"https://www.linkedin.com/company/cfpland/"},i.a.createElement("i",{className:"fa fa-linkedin"}))),i.a.createElement("p",null,"© 2019, Portable CTO, LLC |"," ",i.a.createElement("a",{href:"mailto:info@cfpland.com"},"info@cfpland.com")," |"," ",i.a.createElement(m.Link,{to:"/terms/"},"Terms & Privacy")," |"," ",i.a.createElement(m.Link,{to:"/blog/data/"},"Data Sources & Sharing")," |"," ",i.a.createElement(m.Link,{to:"/archive/"},"Conference Archive")),i.a.createElement("p",null,i.a.createElement(d.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=footer"},"CFP Land Pro")," ","|"," ",i.a.createElement(d.OutboundLink,{href:"https://sponsor.cfpland.com/"},"Sponsor CFP Land"))))},t}return r()(t,e),t.prototype.componentWillReceiveProps=function(e,t){e&&e.auth&&e.auth.user&&window.ga&&window.ga("set","userId",e.auth.user),$&&$(function(){$('[data-toggle="tooltip"]').tooltip()})},t}(i.a.Component)),b=a(193),E=(a(234),a(235),a(236),a(237),a(238),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){s.a.init()},a.componentDidUpdate=function(){s.a.init()},a.render=function(){var e=this.props,t=e.children,a=e.auth;return i.a.createElement("div",null,i.a.createElement(f,Object.assign({title:b.siteMetadata.title},this.props)),i.a.createElement(u,this.props),t,i.a.createElement(g,this.props),i.a.createElement(v,{title:b.siteMetadata.title,auth:a}))},t}(i.a.Component));t.a=E},348:function(e,t,a){"use strict";t.decode=t.parse=a(360),t.encode=t.stringify=a(361)},360:function(e,t,a){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,a,o){t=t||"&",a=a||"=";var i={};if("string"!=typeof e||0===e.length)return i;var c=/\+/g;e=e.split(t);var s=1e3;o&&"number"==typeof o.maxKeys&&(s=o.maxKeys);var l=e.length;s>0&&l>s&&(l=s);for(var m=0;m<l;++m){var u,p,d,f,h=e[m].replace(c,"%20"),g=h.indexOf(a);g>=0?(u=h.substr(0,g),p=h.substr(g+1)):(u=h,p=""),d=decodeURIComponent(u),f=decodeURIComponent(p),n(i,d)?r(i[d])?i[d].push(f):i[d]=[i[d],f]:i[d]=f}return i};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},361:function(e,t,a){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,a,c){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"==typeof e?o(i(e),function(i){var c=encodeURIComponent(n(i))+a;return r(e[i])?o(e[i],function(e){return c+encodeURIComponent(n(e))}).join(t):c+encodeURIComponent(n(e[i]))}).join(t):c?encodeURIComponent(n(c))+a+encodeURIComponent(n(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,t){if(e.map)return e.map(t);for(var a=[],n=0;n<e.length;n++)a.push(t(e[n],n));return a}var i=Object.keys||function(e){var t=[];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.push(a);return t}},378:function(e,t,a){"use strict";a(29),a(450);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),c=(a(452),a(348)),s=a.n(c),l=a(191),m=a(189),u="2iupzagf59uu",p=function(e){function t(t){var a;return(a=e.call(this,t)||this).componentWillReceiveProps=function(e,t){a.setUpFromProps(e)},a.render=function(){return i.a.createElement(i.a.Fragment,null,a.state.managementUrl?i.a.createElement("div",{className:"mt-3 mb-4"},i.a.createElement("p",null,"Payments are securely managed by Moonclerk and Stripe. To change your credit card on file, click the button below."),i.a.createElement("p",{className:"text-center"},i.a.createElement(m.OutboundLink,{target:"_blank",className:"btn btn-secondary",href:a.state.managementUrl},"Update Your Payment Method in Moonclerk"))):i.a.createElement("div",{id:"mc"+u},i.a.createElement("p",null,i.a.createElement("a",{href:a.link},"CFP Land Professional"))))},a.setUpFromProps=function(e){if(e&&e.auth&&e.auth.user)if("pro"===e.auth.user.accountLevel)a.apiClient.getMePayment().then(function(e){a.setState(Object.assign({},a.state,{managementUrl:e.data.management_url}))}).catch(function(e){return console.error(e)});else{!function(t,a){var n=t.createElement(a),r={checkoutToken:u,width:"100%",cid:e.auth.user.id,email:encodeURIComponent(e.auth.user.email)};n.src="https://d2l7e0y6ygya2s.cloudfront.net/assets/embed.js",n.onload=n.onreadystatechange=function(){var e=this.readyState;if(!e||"complete"==e||"loaded"==e)try{new MoonclerkEmbed(r).display()}catch(t){}};var o=t.getElementsByTagName(a)[0];o.parentNode.insertBefore(n,o)}(document,"script");var t={cid:e.auth.user.id,email:e.auth.user.email};a.link+="?"+s.a.stringify(t)}},a.state={managementUrl:null},a.apiClient=new l.a,a.link="https://app.moonclerk.com/pay/"+u,a.setUpFromProps(t),a}return r()(t,e),t}(i.a.Component);t.a=p},450:function(e,t,a){"use strict";a(451)("link",function(e){return function(t){return e(this,"a","href",t)}})},451:function(e,t,a){var n=a(11),r=a(15),o=a(26),i=/"/g,c=function(e,t,a,n){var r=String(o(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=5-8c46f6438ee8a7462f57.js.map