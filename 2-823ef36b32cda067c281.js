(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{191:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={READY:"ready",LOADING:"loading",SAVING:"saving",SAVED:"saved",ERROR:"error",CLICKED:"clicked"}},192:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(230),r="IQFgYz6dzi36nwz39BZQ8XCGpytKh6CO",i="cfpland.auth0.com",s="https://api.cfpland.com/",o="https://www.cfpland.com/c/all/",c=function(){function e(){this.auth0=new n.a.WebAuth({domain:i,clientID:r,redirectUri:o,responseType:"token id_token",scope:"openid email",audience:s})}var a=e.prototype;return a.login=function(){this.auth0.authorize()},a.handleAuthentication=function(){var e=this;return this.auth0.parseHash(function(a,t){if(t&&t.accessToken&&t.idToken)e.setSession(t),window.location.href="/c/all/";else if(a)return a;return null})},a.setSession=function(e){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("idToken",e.idToken);var a=1e3*e.expiresIn+(new Date).getTime();localStorage.setItem("expiresAt",a)},a.getAccessToken=function(){return localStorage.getItem("accessToken")},a.getIdToken=function(){return localStorage.getItem("idToken")},a.renewTokens=function(){var e=this;this.auth0.checkSession({},function(a,t){t&&t.accessToken&&t.idToken?e.setSession(t):a&&(e.logout(),console.error(a))})},a.logout=function(){localStorage.removeItem("accessToken"),localStorage.removeItem("idToken"),localStorage.removeItem("expiresAt"),this.auth0.logout({returnTo:window.location.origin}),window.location.href="/"},a.isAuthenticated=function(){return"undefined"!=typeof window&&localStorage.getItem("accessToken")&&localStorage.getItem("accessToken").length>0},e}()},193:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(192),r=t(204),i=t.n(r),s="https://api.cfpland.com/v0",o=function(){function e(){this.isAuthenticated=void 0,this.baseUrl=s,this.auth=new n.a,this.isAuthenticated=this.auth.isAuthenticated()}var a=e.prototype;return a.getMe=function(){return i.a.get(this.baseUrl+"/me",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.patchMe=function(e){return i.a.patch(this.baseUrl+"/me",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getConferences=function(e){return i.a.get(this.baseUrl+"/conferences",{params:e,headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getSavedConferences=function(){return i.a.get(this.baseUrl+"/me/saved-conferences",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.putSavedConference=function(e){return i.a.put(this.baseUrl+"/me/saved-conferences/"+e,void 0,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.deleteSavedConference=function(e){return i.a.delete(this.baseUrl+"/me/saved-conferences/"+e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getTrackedConferences=function(){return i.a.get(this.baseUrl+"/me/tracked-conferences",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.putTrackedConference=function(e,a){return i.a.put(this.baseUrl+"/me/tracked-conferences/"+e,a,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.deleteTrackedConference=function(e){return i.a.delete(this.baseUrl+"/me/tracked-conferences/"+e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getMeSearches=function(){return i.a.get(this.baseUrl+"/me/searches",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.putMeSearch=function(e){return i.a.put(this.baseUrl+"/me/searches",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.deleteMeSearch=function(e){return i.a.delete(this.baseUrl+"/me/searches/"+e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getMePayment=function(){return i.a.get(this.baseUrl+"/me/payment",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getMeAbstracts=function(){return i.a.get(this.baseUrl+"/me/abstracts",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.postMeAbstract=function(e){return i.a.post(this.baseUrl+"/me/abstracts",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.putMeAbstract=function(e,a){return i.a.put(this.baseUrl+"/me/abstracts/"+e,a,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.deleteMeAbstract=function(e){return i.a.delete(this.baseUrl+"/me/abstracts/"+e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},e}()},195:function(e,a){(function(a){e.exports={siteMetadata:{title:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",siteUrl:"https://www.cfpland.com",author:"Karl L. Hughes",twitter:"cfp_land",image:"/img/default.png"},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:a+"/content/posts/",name:"posts"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"CFP Land",short_name:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",homepage_url:"https://www.cfpland.com",start_url:"/",background_color:"#67597A",theme_color:"#F7468A",display:"standalone",icons:[{src:"/img/android-icon-1024x1024.png",sizes:"1024x1024",type:"image/png"},{src:"/img/android-icon-512x512.png",sizes:"512x512",type:"image/png"},{src:"/img/android-icon-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/apple-icon-180x180.png",sizes:"180x180",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-19700764-14"}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},{resolve:"gatsby-source-airtable",options:{apiKey:"YOUR_AIRTABLE_KEY",tables:[{baseId:"app5JdxyWF41oHa5k",tableName:"conferences",tableView:"closing_in_21",tableLinks:["category"]},{baseId:"app5JdxyWF41oHa5k",tableName:"categories",tableView:"all"}]}},{resolve:"gatsby-plugin-create-client-paths",options:{prefixes:["/c/account/*","/c/saved/*","/c/searches/*"]}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(this,"/")},197:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(227),s=t.n(i),o=t(196),c=t.n(o);a.a=function(e){var a=e.site,t=e.title,n=e.image;n=n||c()(a,"image");var i=c()(a,"title");return t=t?t+" | "+i:i,r.a.createElement(s.a,{title:t,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+c()(a,"twitter")},{property:"twitter:image",content:n},{property:"og:title",content:t},{property:"og:type",content:"website"},{property:"og:description",content:c()(a,"description")},{property:"og:url",content:c()(a,"siteUrl")},{property:"og:image",content:n}]})}},198:function(e,a,t){"use strict";t.d(a,"a",function(){return m});t(29);var n=t(8),r=t.n(n),i=t(0),s=t.n(i),o=t(193),c=t(192),l=t(191);function m(e){return function(a){function t(t){var n;return(n=a.call(this,t)||this).componentDidMount=function(){if(n.authClient.isAuthenticated())n.authClient.renewTokens(),n.setState(Object.assign({},n.state,{isAuthenticated:!0})),n.state.user||n.apiClient.getMe().then(function(e){n.setState(Object.assign({},n.state,{user:e.data}))});else{var e=n.authClient.handleAuthentication();e?n.setState(Object.assign({},n.state,{globalAlert:{type:l.a.ERROR,message:e.errorDescription}})):n.setState(Object.assign({},n.state,{isAuthenticated:!1}))}},n.render=function(){return s.a.createElement(e,Object.assign({auth:n.state,authClient:n.authClient,apiClient:n.apiClient},n.props))},n.authClient=new c.a,n.apiClient=new o.a,n.state={isAuthenticated:!1,user:null,globalAlert:{type:null,message:null}},n}return r()(t,a),t}(s.a.Component)}},199:function(e,a,t){"use strict";t(29);var n=t(8),r=t.n(n),i=t(0),s=t.n(i),o=t(228),c=t.n(o),l=t(191),m=t(64),u=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return s.a.createElement("div",null,a.props.auth.globalAlert&&a.props.auth.globalAlert.type===l.a.ERROR?s.a.createElement("div",{className:"alert alert-danger mb-0"},s.a.createElement("strong",null,"Whoops! Something went wrong: "),a.props.auth.globalAlert.message):"",a.props.auth&&a.props.auth.user&&("free"===a.props.auth.user.accountLevel||"new"===a.props.auth.user.accountLevel)&&"/c/onboarding/"!==window.location.pathname?s.a.createElement("div",{className:"alert alert-warning mb-0 text-center"},s.a.createElement("p",null,s.a.createElement("strong",null,"Whoops! Looks like your account setup is not complete."," "),"You will not be able to access all Pro features until you complete your account setup."),s.a.createElement(m.Link,{to:"/c/onboarding/",className:"btn btn-info"},"Complete Account Setup"),s.a.createElement("a",{href:"https://pro.cfpland.com/",target:"_blank",className:"ml-1 btn btn-outline-info"},"Learn More")):"")},a}return r()(a,e),a}(s.a.Component),p=(t(229),t(192)),d=t(190),h=function(e){function a(a){var t;return(t=e.call(this,a)||this).render=function(){var e=t.props,a=e.location,n=e.title,r=e.auth;return s.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},s.a.createElement("div",{className:"container-fluid"},r.isAuthenticated?s.a.createElement(m.Link,{className:"navbar-brand",to:"/c/all"},s.a.createElement("img",{src:"/img/v2/icon-sm.png",width:"40",height:"40",alt:n})):s.a.createElement(m.Link,{className:"navbar-brand",to:"/"},s.a.createElement("img",{src:"/img/v2/icon-sm.png",width:"40",height:"40",alt:n})),s.a.createElement("div",{className:"navbar-nav-scroll d-none d-md-block"},s.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},s.a.createElement("li",{className:"/"===a.pathname?"nav-item active":"nav-item"},s.a.createElement(m.Link,{to:"/",className:"nav-link"},"Home")),r.isAuthenticated?s.a.createElement("li",{className:"/c/all/"===a.pathname?"nav-item active dropdown":"nav-item dropdown"},s.a.createElement(m.Link,{to:"/c/all/",className:"nav-link dropdown-toggle",id:"cfpNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CFPs"),s.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"cfpNavbarDropdown"},s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/all/"},s.a.createElement("i",{className:"fa fa-list mr-2"})," All"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/saved/"},s.a.createElement("i",{className:"fa fa-star mr-2"})," Saved"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/applied/"},s.a.createElement("i",{className:"fa fa-paper-plane mr-2"})," Applied"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/accepted/"},s.a.createElement("i",{className:"fa fa-check mr-2"})," Accepted"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/rejected/"},s.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"))):s.a.createElement("li",{className:"/conferences/"===a.pathname?"nav-item active":"nav-item"},s.a.createElement(m.Link,{to:"/conferences/",className:"nav-link"},"CFPs")),s.a.createElement("li",{className:"/blog/"===a.pathname?"nav-item active":"nav-item"},s.a.createElement(m.Link,{to:"/blog/",className:"nav-link"},"Blog")),s.a.createElement("li",{className:"/submit/"===a.pathname?"nav-item active":"nav-item"},s.a.createElement(m.Link,{to:"/submit/",className:"nav-link"},"Submit")))),s.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"}),s.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},r.isAuthenticated?s.a.createElement("li",{className:"/c/profile/"===a.pathname?"nav-item active dropdown":"nav-item dropdown"},s.a.createElement(m.Link,{to:"/c/profile/",className:"nav-link dropdown-toggle",id:"accountNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.user&&r.user.profileUrl?s.a.createElement("img",{src:r.user.profileUrl,alt:"Your Profile Image",className:"navbar-profile-image"}):"","Account"),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"accountNavbarDropdown"},s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/profile/"},s.a.createElement("i",{className:"fa fa-user mr-2"})," Profile"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/communication/"},s.a.createElement("i",{className:"fa fa-bell mr-2"})," Communication"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/billing/"},s.a.createElement("i",{className:"fa fa-credit-card mr-2"})," Billing"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/searches/"},s.a.createElement("i",{className:"fa fa-search mr-2"})," Searches"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/abstracts/"},s.a.createElement("i",{className:"fa fa-sticky-note mr-2"})," Abstracts"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/onboarding/?step=4"},s.a.createElement("i",{className:"fa fa-star mr-2"})," Pro Features"),s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),t.authClient.logout()}},s.a.createElement("i",{className:"fa fa-sign-out mr-2"})," Logout"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"nav-item mr-2"},s.a.createElement("a",{onClick:function(e){e.preventDefault(),t.authClient.login()},href:"#",className:"nav-link"},"Login")),s.a.createElement("li",{className:"nav-item d-none d-md-block"},s.a.createElement(d.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu",className:"nav-link btn btn-info font-weight-bold",title:"Upgrade to CFP Land Professional"},s.a.createElement("i",{className:"fa fa-arrow-up text-white"})," ",s.a.createElement("span",{className:"text-white"},"Upgrade to Pro")))))))},t.authClient=new p.a,t}return r()(a,e),a}(s.a.Component),f=(t(231),t(20)),g=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.location,a=(new p.a).isAuthenticated();return s.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-light d-block d-md-none"},s.a.createElement("div",{className:"w-100"},a?s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Link,{className:"/c/all/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/all/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-list"})),"CFPs"),s.a.createElement(f.Link,{className:"/c/saved/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/saved/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-star"})),"Saved"),s.a.createElement(f.Link,{className:"/c/applied/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/applied/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-paper-plane"})),"Applied"),s.a.createElement(f.Link,{className:"/c/accepted/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/accepted/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-check"})),"Accepted"),s.a.createElement("div",{className:"dropup nav-item"},s.a.createElement(d.OutboundLink,{className:"nav-link dropdown-toggle",id:"bottom-nav-dropup","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-ellipsis-h"}))," ","More"),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"bottom-nav-dropup"},s.a.createElement(f.Link,{className:"dropdown-item",to:"/"},s.a.createElement("i",{className:"fa fa-home mr-2"})," Home"),s.a.createElement(f.Link,{className:"dropdown-item",to:"/blog"},s.a.createElement("i",{className:"fa fa-newspaper-o mr-2"})," Blog"),s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement(f.Link,{className:"dropdown-item",to:"/c/rejected/"},s.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),s.a.createElement(f.Link,{className:"dropdown-item",to:"/submit/"},s.a.createElement("i",{className:"fa fa-plus-circle mr-2"})," Submit")))):s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Link,{className:"/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-home"})),"Home"),s.a.createElement(f.Link,{className:"/conferences/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/conferences/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-list"})),"CFPs"),s.a.createElement(f.Link,{className:"/submit/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/submit/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-plus-circle"})),"Submit"),s.a.createElement(f.Link,{className:"/blog/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/blog/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-newspaper-o"})),"Blog"),s.a.createElement(d.OutboundLink,{className:"nav-item nav-link",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-arrow-up"})),"Pro"))))},a}(s.a.Component),v=(t(232),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"container-fluid text-center d-none d-md-block"},s.a.createElement("p",{className:"social"},s.a.createElement(d.OutboundLink,{href:"https://twitter.com/cfp_land"},s.a.createElement("i",{className:"fa fa-twitter"})),s.a.createElement(d.OutboundLink,{href:"https://www.facebook.com/cfpland"},s.a.createElement("i",{className:"fa fa-facebook"})),s.a.createElement(d.OutboundLink,{href:"https://www.linkedin.com/company/cfpland/"},s.a.createElement("i",{className:"fa fa-linkedin"}))),s.a.createElement("p",null,"© 2019, Portable CTO, LLC |"," ",s.a.createElement("a",{href:"mailto:info@cfpland.com"},"info@cfpland.com")," |"," ",s.a.createElement(m.Link,{to:"/terms/"},"Terms & Privacy")," |"," ",s.a.createElement(m.Link,{to:"/blog/data/"},"Data Sources & Sharing")," |"," ",s.a.createElement(m.Link,{to:"/archive/"},"Conference Archive")),s.a.createElement("p",null,s.a.createElement(d.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=footer"},"CFP Land Pro")," ","|"," ",s.a.createElement(d.OutboundLink,{href:"https://sponsor.cfpland.com/"},"Sponsor CFP Land"))))},a}return r()(a,e),a.prototype.componentWillReceiveProps=function(e,a){$&&$(function(){$('[data-toggle="tooltip"]').tooltip()}),e&&e.auth&&e.auth.user&&window.ga&&window.ga("set","userId",e.auth.user.id),e.auth&&!e.auth.isAuthenticated&&window.dojoRequire&&window.dojoRequire(["mojo/signup-forms/Loader"],function(e){e.start({baseUrl:"mc.us15.list-manage.com",uuid:"4eba8b205fc13380cd3e6f3fc",lid:"258f553f4e",uniqueMethods:!0})})},a}(s.a.Component)),b=t(195),k=(t(233),t(234),t(235),t(236),t(237),function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){c.a.init()},t.componentDidUpdate=function(){c.a.init()},t.render=function(){var e=this.props,a=e.children,t=e.auth;return s.a.createElement("div",null,s.a.createElement(h,Object.assign({title:b.siteMetadata.title},this.props)),s.a.createElement(u,this.props),a,s.a.createElement(g,this.props),s.a.createElement(v,{title:b.siteMetadata.title,auth:t}))},a}(s.a.Component));a.a=k}}]);
//# sourceMappingURL=2-823ef36b32cda067c281.js.map