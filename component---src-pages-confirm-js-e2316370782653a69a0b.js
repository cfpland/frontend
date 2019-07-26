(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{178:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t.n(n),i=t(0),o=t.n(i),c=t(193),l=t(200),s=t(198),m=t(199),u=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=e.location,t=e.auth;return o.a.createElement(l.a,{location:a,auth:t},o.a.createElement(s.a,{site:c.siteMetadata,title:"Confirm Your Email Address"}),o.a.createElement("div",{className:"container confirm-container mt-3"},o.a.createElement("h1",{className:"mt-5 mb-4"}," 📬 Almost Done..."),o.a.createElement("p",null,"You're just one click away from getting our weekly CFP newsletter."),o.a.createElement("p",null,"Please"," ",o.a.createElement("strong",null,"check your email to confirm your subscription"),". Thanks!")))},a}(o.a.Component);a.default=Object(m.a)(u)},189:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(230),r="IQFgYz6dzi36nwz39BZQ8XCGpytKh6CO",i="cfpland.auth0.com",o="https://api.cfpland.com/",c="https://www.cfpland.com/",l=function(){function e(){this.auth0=new n.a.WebAuth({domain:i,clientID:r,redirectUri:c,responseType:"token id_token",scope:"openid email",audience:o})}var a=e.prototype;return a.login=function(){this.auth0.authorize()},a.handleAuthentication=function(){var e=this;return this.auth0.parseHash(function(a,t){if(t&&t.accessToken&&t.idToken)e.setSession(t),window.location.href="/";else if(a)return a;return null})},a.setSession=function(e){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("idToken",e.idToken);var a=1e3*e.expiresIn+(new Date).getTime();localStorage.setItem("expiresAt",a)},a.getAccessToken=function(){return localStorage.getItem("accessToken")},a.getIdToken=function(){return localStorage.getItem("idToken")},a.renewTokens=function(){var e=this;this.auth0.checkSession({},function(a,t){t&&t.accessToken&&t.idToken?e.setSession(t):a&&(e.logout(),console.error(a))})},a.logout=function(){localStorage.removeItem("accessToken"),localStorage.removeItem("idToken"),localStorage.removeItem("expiresAt"),this.auth0.logout({returnTo:window.location.origin}),window.location.href="/"},a.isAuthenticated=function(){return"undefined"!=typeof window&&localStorage.getItem("accessToken")&&localStorage.getItem("accessToken").length>0},e}()},190:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(189),r=t(238),i=t.n(r),o="https://api.cfpland.com/v0",c=function(){function e(){this.isAuthenticated=void 0,this.baseUrl=o,this.auth=new n.a,this.isAuthenticated=this.auth.isAuthenticated()}var a=e.prototype;return a.getMe=function(){return i.a.get(this.baseUrl+"/me",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.patchMe=function(e){return i.a.patch(this.baseUrl+"/me",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getConferences=function(e){return i.a.get(this.baseUrl+"/conferences",{params:e,headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getSavedConferences=function(){return i.a.get(this.baseUrl+"/me/conferences",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.putMeConference=function(e,a,t){return i.a.put(this.baseUrl+"/me/conferences/"+e+"/"+a,t,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.deleteMeConference=function(e,a){return i.a.delete(this.baseUrl+"/me/conferences/"+e+"/"+a,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getMeSearches=function(){return i.a.get(this.baseUrl+"/me/searches",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.putMeSearch=function(e){return i.a.put(this.baseUrl+"/me/searches",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.deleteMeSearch=function(e){return i.a.delete(this.baseUrl+"/me/searches/"+e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getMePayment=function(){return i.a.get(this.baseUrl+"/me/payment",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},e}()},191:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={READY:"ready",LOADING:"loading",SAVING:"saving",SAVED:"saved",ERROR:"error"}},193:function(e,a){(function(a){e.exports={siteMetadata:{title:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",siteUrl:"https://www.cfpland.com",author:"Karl L. Hughes",twitter:"cfp_land",image:"/img/default.png"},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:a+"/content/posts/",name:"posts"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"CFP Land",short_name:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",homepage_url:"https://www.cfpland.com",start_url:"/",background_color:"#ffffff",theme_color:"#D3637E",display:"standalone",icons:[{src:"/img/android-icon-192x192.png",sizes:"192x192",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-19700764-14"}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},{resolve:"gatsby-source-airtable",options:{apiKey:"YOUR_AIRTABLE_KEY",tables:[{baseId:"app5JdxyWF41oHa5k",tableName:"conferences",tableView:"closing_in_21",tableLinks:["category"]},{baseId:"app5JdxyWF41oHa5k",tableName:"categories",tableView:"all"}]}},{resolve:"gatsby-plugin-create-client-paths",options:{prefixes:["/c/account/*","/c/saved/*","/c/searches/*"]}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(this,"/")},198:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(227),o=t.n(i),c=t(197),l=t.n(c);a.a=function(e){var a=e.site,t=e.title,n=e.image;n=n||l()(a,"image");var i=l()(a,"title");return t=t?t+" | "+i:i,r.a.createElement(o.a,{title:t,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+l()(a,"twitter")},{property:"twitter:image",content:n},{property:"og:title",content:t},{property:"og:type",content:"website"},{property:"og:description",content:l()(a,"description")},{property:"og:url",content:l()(a,"siteUrl")},{property:"og:image",content:n}]})}},199:function(e,a,t){"use strict";t.d(a,"a",function(){return m});t(29);var n=t(8),r=t.n(n),i=t(0),o=t.n(i),c=t(190),l=t(189),s=t(191);function m(e){return function(a){function t(t){var n;return(n=a.call(this,t)||this).componentDidMount=function(){if(n.auth.isAuthenticated())n.auth.renewTokens(),n.setState(Object.assign({},n.state,{isAuthenticated:!0})),n.state.user||n.api.getMe().then(function(e){n.setState(Object.assign({},n.state,{user:e.data}))});else{var e=n.auth.handleAuthentication();e?n.setState(Object.assign({},n.state,{globalAlert:{type:s.a.ERROR,message:e.errorDescription}})):n.setState(Object.assign({},n.state,{isAuthenticated:!1}))}},n.render=function(){return o.a.createElement(e,Object.assign({auth:n.state},n.props))},n.auth=new l.a,n.api=new c.a,n.state={isAuthenticated:!1,user:null,globalAlert:{type:null,message:null}},n}return r()(t,a),t}(o.a.Component)}},200:function(e,a,t){"use strict";t(29);var n=t(8),r=t.n(n),i=t(0),o=t.n(i),c=t(228),l=t.n(c),s=t(191),m=t(64),u=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return o.a.createElement("div",null,a.props.auth.globalAlert&&a.props.auth.globalAlert.type===s.a.ERROR?o.a.createElement("div",{className:"alert alert-danger mb-0"},o.a.createElement("strong",null,"Whoops! Something went wrong: "),a.props.auth.globalAlert.message):"",a.props.auth&&a.props.auth.user&&"new"===a.props.auth.user.accountLevel&&"/c/onboarding/"!==window.location.pathname?o.a.createElement("div",{className:"alert alert-info mb-0 text-center"},o.a.createElement("p",null,o.a.createElement("strong",null,"Whoops! Looks like your account setup is not complete."," "),"You will not be able to access Pro features until you complete your account setup."),o.a.createElement(m.Link,{to:"/c/onboarding/",className:"btn btn-info"},"Complete Account Setup")):"")},a}return r()(a,e),a}(o.a.Component),p=(t(229),t(189)),d=t(188),h=function(e){function a(a){var t;return(t=e.call(this,a)||this).render=function(){var e=t.props,a=e.location,n=e.title,r=e.auth;return o.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(m.Link,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:"/img/logo.png",width:"30",height:"30",alt:n})),o.a.createElement("div",{className:"navbar-nav-scroll d-none d-md-block"},o.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},o.a.createElement("li",{className:"/"===a.pathname?"nav-item active":"nav-item"},o.a.createElement(m.Link,{to:"/",className:"nav-link"},"Home")),r.isAuthenticated?o.a.createElement("li",{className:"/c/all/"===a.pathname?"nav-item active dropdown":"nav-item dropdown"},o.a.createElement(m.Link,{to:"/c/all/",className:"nav-link dropdown-toggle",id:"cfpNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CFPs"),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"cfpNavbarDropdown"},o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/all/"},o.a.createElement("i",{className:"fa fa-list mr-2"})," All"),o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/saved/"},o.a.createElement("i",{className:"fa fa-star mr-2"})," Saved"),o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/applied/"},o.a.createElement("i",{className:"fa fa-paper-plane mr-2"})," Applied"),o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/accepted/"},o.a.createElement("i",{className:"fa fa-check mr-2"})," Accepted"),o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/rejected/"},o.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/hidden/"},o.a.createElement("i",{className:"fa fa-eye-slash mr-2"})," Hidden"))):o.a.createElement("li",{className:"/conferences/"===a.pathname?"nav-item active":"nav-item"},o.a.createElement(m.Link,{to:"/conferences/",className:"nav-link"},"CFPs")),o.a.createElement("li",{className:"/blog/"===a.pathname?"nav-item active":"nav-item"},o.a.createElement(m.Link,{to:"/blog/",className:"nav-link"},"Blog")),o.a.createElement("li",{className:"/submit/"===a.pathname?"nav-item active":"nav-item"},o.a.createElement(m.Link,{to:"/submit/",className:"nav-link"},"Submit")))),o.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"}),o.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},r.isAuthenticated?o.a.createElement("li",{className:"/c/profile/"===a.pathname?"nav-item active dropdown":"nav-item dropdown"},o.a.createElement(m.Link,{to:"/c/profile/",className:"nav-link dropdown-toggle",id:"accountNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Account"),o.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"accountNavbarDropdown"},o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/profile/"},o.a.createElement("i",{className:"fa fa-user mr-2"})," Profile"),o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/communication/"},o.a.createElement("i",{className:"fa fa-bell mr-2"})," Communication"),o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/billing/"},o.a.createElement("i",{className:"fa fa-credit-card mr-2"})," Billing"),o.a.createElement(m.Link,{className:"dropdown-item",to:"/c/searches/"},o.a.createElement("i",{className:"fa fa-search mr-2"})," Searches"),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),t.authClient.logout()}},o.a.createElement("i",{className:"fa fa-sign-out mr-2"})," Logout"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"nav-item mr-2 d-none"},o.a.createElement("a",{onClick:function(e){e.preventDefault(),t.authClient.login()},href:"#",className:"nav-link"},"Login")),o.a.createElement("li",{className:"nav-item d-none d-md-block"},o.a.createElement(d.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu",className:"nav-link btn btn-secondary font-weight-bold",title:"Upgrade to CFP Land Professional"},o.a.createElement("i",{className:"fa fa-arrow-up"})," ",o.a.createElement("span",{className:"text-white"},"Upgrade to Pro")))))))},t.authClient=new p.a,t}return r()(a,e),a}(o.a.Component),f=(t(231),t(20)),g=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.location,a=(new p.a).isAuthenticated();return o.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-light d-block d-md-none"},o.a.createElement("div",{className:"w-100"},a?o.a.createElement(o.a.Fragment,null,o.a.createElement(f.Link,{className:"/c/all/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/all/"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-list"})),"CFPs"),o.a.createElement(f.Link,{className:"/c/saved/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/saved/"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-star"})),"Saved"),o.a.createElement(f.Link,{className:"/c/applied/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/applied/"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-paper-plane"})),"Applied"),o.a.createElement(f.Link,{className:"/c/accepted/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/accepted/"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-check"})),"Accepted"),o.a.createElement("div",{className:"dropup nav-item"},o.a.createElement(d.OutboundLink,{className:"nav-link dropdown-toggle",id:"bottom-nav-dropup","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-ellipsis-h"}))," ","More"),o.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"bottom-nav-dropup"},o.a.createElement(f.Link,{className:"dropdown-item",to:"/"},o.a.createElement("i",{className:"fa fa-home mr-2"})," Home"),o.a.createElement(f.Link,{className:"dropdown-item",to:"/blog"},o.a.createElement("i",{className:"fa fa-newspaper-o mr-2"})," Blog"),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement(f.Link,{className:"dropdown-item",to:"/c/rejected/"},o.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),o.a.createElement(f.Link,{className:"dropdown-item",to:"/c/hidden/"},o.a.createElement("i",{className:"fa fa-eye-slash mr-2"})," Hidden"),o.a.createElement(f.Link,{className:"dropdown-item",to:"/submit/"},o.a.createElement("i",{className:"fa fa-plus-circle mr-2"})," Submit")))):o.a.createElement(o.a.Fragment,null,o.a.createElement(f.Link,{className:"/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-home"})),"Home"),o.a.createElement(f.Link,{className:"/conferences/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/conferences/"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-list"})),"CFPs"),o.a.createElement(f.Link,{className:"/submit/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/submit/"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-plus-circle"})),"Submit"),o.a.createElement(f.Link,{className:"/blog/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/blog/"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-newspaper-o"})),"Blog"),o.a.createElement(d.OutboundLink,{className:"nav-item nav-link",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu"},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-arrow-up"})),"Pro"))))},a}(o.a.Component),v=(t(232),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"container-fluid text-center d-none d-md-block"},o.a.createElement("p",{className:"social"},o.a.createElement(d.OutboundLink,{href:"https://twitter.com/cfp_land"},o.a.createElement("i",{className:"fa fa-twitter"})),o.a.createElement(d.OutboundLink,{href:"https://www.facebook.com/cfpland"},o.a.createElement("i",{className:"fa fa-facebook"})),o.a.createElement(d.OutboundLink,{href:"https://www.linkedin.com/company/cfpland/"},o.a.createElement("i",{className:"fa fa-linkedin"}))),o.a.createElement("p",null,"© 2019,"," ",o.a.createElement(d.OutboundLink,{href:"https://www.portablecto.com",target:"_blank"},"Portable CTO, LLC")," ","| ",o.a.createElement("a",{href:"mailto:info@cfpland.com"},"info@cfpland.com")," |"," ",o.a.createElement(d.OutboundLink,{href:"https://www.portablecto.com/privacy"},"Privacy Policy")," ","| ",o.a.createElement(m.Link,{to:"/blog/data/"},"Data Sources & Sharing")," |"," ",o.a.createElement(m.Link,{to:"/archive/"},"Conference Archive")),o.a.createElement("p",null,o.a.createElement(d.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=footer"},"CFP Land Pro")," ","|"," ",o.a.createElement(d.OutboundLink,{href:"https://sponsor.cfpland.com/"},"Sponsor CFP Land"))))},a}return r()(a,e),a.prototype.componentWillReceiveProps=function(e,a){e&&e.auth&&e.auth.user&&window.ga&&window.ga("set","userId",e.auth.user),$&&$(function(){$('[data-toggle="tooltip"]').tooltip()})},a}(o.a.Component)),E=t(193),b=(t(233),t(234),t(235),t(236),t(237),function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){l.a.init()},t.componentDidUpdate=function(){l.a.init()},t.render=function(){var e=this.props,a=e.children,t=e.auth;return o.a.createElement("div",null,o.a.createElement(h,Object.assign({title:E.siteMetadata.title},this.props)),o.a.createElement(u,this.props),a,o.a.createElement(g,this.props),o.a.createElement(v,{title:E.siteMetadata.title,auth:t}))},a}(o.a.Component));a.a=b}}]);
//# sourceMappingURL=component---src-pages-confirm-js-e2316370782653a69a0b.js.map