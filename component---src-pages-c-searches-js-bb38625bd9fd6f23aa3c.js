(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{177:function(e,t,a){"use strict";a.r(t);a(29);var n=a(8),r=a.n(n),o=a(0),c=a.n(o),i=a(193),s=a(201),l=a(199),m=a(191),u=a(303),d=a(297),p=a(298),f=a(195),h=a.n(f),g=a(464),v=a.n(g),E=a(323),b=a.n(E),k=a(302),w=a(295),N=a.n(w),y=a(64),A=a(200),C=function(e){function t(t){var a;return(a=e.call(this,t)||this).componentDidMount=function(){a._isMounted=!0,a.apiClient.isAuthenticated?a.getAllSearches():window.location.href="/"},a.render=function(){var e=a.props,t=e.location,n=e.auth,r=a.state.searches;return c.a.createElement(s.a,{location:t,auth:n},c.a.createElement(l.a,{site:i.siteMetadata,title:"Your Saved Searches"}),c.a.createElement("div",{id:"searches",className:"container mt-2 mt-md-5"},c.a.createElement("div",{className:""},c.a.createElement("h2",null,"Saved Searches")),r&&r.length>0?c.a.createElement("ul",{className:"list-group list-group-flush"},r.map(function(e,t){return c.a.createElement("li",{key:t,className:"list-group-item"},a.showCategory(e),a.showRegion(e),a.showPerks(e),a.showDates(e),c.a.createElement("p",null,c.a.createElement("strong",null,"Created: "),b()(e.createdAt).format("LL")),c.a.createElement(y.Link,{className:"mr-2 btn btn-info view-search-results-button",to:a.getSearchUrl(e)},"View Results"),c.a.createElement(p.a,{currentSearchSaved:!0,saveCurrentSearch:function(e){return e.preventDefault()},unsaveCurrentSearch:function(t){return a.unsaveSearch(t,e.id)}}))})):r&&0===r.length?c.a.createElement(u.a,null):c.a.createElement(d.a,null)),c.a.createElement("div",{className:"container mt-2"},c.a.createElement(k.a,{auth:n})))},a.unsaveSearch=function(e,t){e.preventDefault(),a.apiClient.deleteMeSearch(t).then(function(){a.setState(Object.assign({},a.state,{searches:a.state.searches.filter(function(e){return e.id!==t})}))}).catch(function(e){console.error(e.message)})},a.getSearchUrl=function(e){return"/c/all?"+N.a.stringify(e.options)},a.getAllSearches=function(){a.apiClient.getMeSearches().then(function(e){a.setState(Object.assign({},a.state,{searches:e.data.items}))}).catch(function(e){console.error(e.message)})},a.showCategory=function(e){var t=h()(e,"options.category");if(t)return c.a.createElement("p",null,c.a.createElement("strong",null,"Category: "),v()(t))},a.showRegion=function(e){var t=h()(e,"options.region");if(t)return c.a.createElement("p",null,c.a.createElement("strong",null,"Region: "),v()(t))},a.showPerks=function(e){var t=h()(e,"options.hotel_covered"),a=h()(e,"options.travel_covered"),n=h()(e,"options.stipend_covered");if(t||a||n)return c.a.createElement("p",null,c.a.createElement("strong",null,"Perks: "),t?c.a.createElement("i",{className:"fa fa-hotel mr-2",title:"Hotel","aria-label":"Hotel"}):"",a?c.a.createElement("i",{className:"fa fa-plane mr-2",title:"Travel","aria-label":"Travel"}):"",n?c.a.createElement("i",{className:"fa fa-money mr-2",title:"Stipend","aria-label":"Stipend"}):"")},a.showDates=function(e){console.log(e);var t=h()(e,"options.event_start_date_after"),a=h()(e,"options.event_start_date_before");if(t||a)return c.a.createElement("div",{className:"row"},t?c.a.createElement("div",{className:"col"},c.a.createElement("p",null,c.a.createElement("strong",null,"After: "),b()(t).format("l"))):"",a?c.a.createElement("div",{className:"col"},c.a.createElement("p",null,c.a.createElement("strong",null,"Before: "),b()(a).format("l"))):"")},a._isMounted=!1,a.state={searches:null},a.apiClient=new m.a,a}return r()(t,e),t.prototype.componentWillUnmount=function(){this._isMounted=!1},t}(c.a.Component);t.default=Object(A.a)(C)},190:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(234),r="IQFgYz6dzi36nwz39BZQ8XCGpytKh6CO",o="cfpland.auth0.com",c="https://api.cfpland.com/",i="https://www.cfpland.com/",s=function(){function e(){this.auth0=new n.a.WebAuth({domain:o,clientID:r,redirectUri:i,responseType:"token id_token",scope:"openid email",audience:c})}var t=e.prototype;return t.login=function(){this.auth0.authorize()},t.handleAuthentication=function(){var e=this;return this.auth0.parseHash(function(t,a){if(a&&a.accessToken&&a.idToken)e.setSession(a),window.location.href="/";else if(t)return t;return null})},t.setSession=function(e){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("idToken",e.idToken);var t=1e3*e.expiresIn+(new Date).getTime();localStorage.setItem("expiresAt",t)},t.getAccessToken=function(){return localStorage.getItem("accessToken")},t.getIdToken=function(){return localStorage.getItem("idToken")},t.renewTokens=function(){var e=this;this.auth0.checkSession({},function(t,a){a&&a.accessToken&&a.idToken?e.setSession(a):t&&(e.logout(),console.error(t))})},t.logout=function(){localStorage.removeItem("accessToken"),localStorage.removeItem("idToken"),localStorage.removeItem("expiresAt"),this.auth0.logout({returnTo:window.location.origin}),window.location.href="/"},t.isAuthenticated=function(){return"undefined"!=typeof window&&localStorage.getItem("accessToken")&&localStorage.getItem("accessToken").length>0},e}()},191:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(190),r=a(209),o=a.n(r),c="https://api.cfpland.com/v0",i=function(){function e(){this.isAuthenticated=void 0,this.baseUrl=c,this.auth=new n.a,this.isAuthenticated=this.auth.isAuthenticated()}var t=e.prototype;return t.getMe=function(){return o.a.get(this.baseUrl+"/me",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.patchMe=function(e){return o.a.patch(this.baseUrl+"/me",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.getConferences=function(e){return o.a.get(this.baseUrl+"/conferences",{params:e,headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.getSavedConferences=function(){return o.a.get(this.baseUrl+"/me/conferences",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.putMeConference=function(e,t,a){return o.a.put(this.baseUrl+"/me/conferences/"+e+"/"+t,a,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.deleteMeConference=function(e,t){return o.a.delete(this.baseUrl+"/me/conferences/"+e+"/"+t,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.getMeSearches=function(){return o.a.get(this.baseUrl+"/me/searches",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.putMeSearch=function(e){return o.a.put(this.baseUrl+"/me/searches",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.deleteMeSearch=function(e){return o.a.delete(this.baseUrl+"/me/searches/"+e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},t.getMePayment=function(){return o.a.get(this.baseUrl+"/me/payment",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},e}()},192:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={READY:"ready",LOADING:"loading",SAVING:"saving",SAVED:"saved",ERROR:"error",CLICKED:"clicked"}},193:function(e,t){(function(t){e.exports={siteMetadata:{title:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",siteUrl:"https://www.cfpland.com",author:"Karl L. Hughes",twitter:"cfp_land",image:"/img/default.png"},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/content/posts/",name:"posts"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"CFP Land",short_name:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",homepage_url:"https://www.cfpland.com",start_url:"/",background_color:"#67597A",theme_color:"#F7468A",display:"standalone",icons:[{src:"/img/android-icon-1024x1024.png",sizes:"1024x1024",type:"image/png"},{src:"/img/android-icon-512x512.png",sizes:"512x512",type:"image/png"},{src:"/img/android-icon-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/apple-icon-180x180.png",sizes:"180x180",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-19700764-14"}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},{resolve:"gatsby-source-airtable",options:{apiKey:"YOUR_AIRTABLE_KEY",tables:[{baseId:"app5JdxyWF41oHa5k",tableName:"conferences",tableView:"closing_in_21",tableLinks:["category"]},{baseId:"app5JdxyWF41oHa5k",tableName:"categories",tableView:"all"}]}},{resolve:"gatsby-plugin-create-client-paths",options:{prefixes:["/c/account/*","/c/saved/*","/c/searches/*"]}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(this,"/")},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(231),c=a.n(o),i=a(195),s=a.n(i);t.a=function(e){var t=e.site,a=e.title,n=e.image;n=n||s()(t,"image");var o=s()(t,"title");return a=a?a+" | "+o:o,r.a.createElement(c.a,{title:a,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+s()(t,"twitter")},{property:"twitter:image",content:n},{property:"og:title",content:a},{property:"og:type",content:"website"},{property:"og:description",content:s()(t,"description")},{property:"og:url",content:s()(t,"siteUrl")},{property:"og:image",content:n}]})}},200:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(29);var n=a(8),r=a.n(n),o=a(0),c=a.n(o),i=a(191),s=a(190),l=a(192);function m(e){return function(t){function a(a){var n;return(n=t.call(this,a)||this).componentDidMount=function(){if(n.auth.isAuthenticated())n.auth.renewTokens(),n.setState(Object.assign({},n.state,{isAuthenticated:!0})),n.state.user||n.api.getMe().then(function(e){n.setState(Object.assign({},n.state,{user:e.data}))});else{var e=n.auth.handleAuthentication();e?n.setState(Object.assign({},n.state,{globalAlert:{type:l.a.ERROR,message:e.errorDescription}})):n.setState(Object.assign({},n.state,{isAuthenticated:!1}))}},n.render=function(){return c.a.createElement(e,Object.assign({auth:n.state},n.props))},n.auth=new s.a,n.api=new i.a,n.state={isAuthenticated:!1,user:null,globalAlert:{type:null,message:null}},n}return r()(a,t),a}(c.a.Component)}},201:function(e,t,a){"use strict";a(29);var n=a(8),r=a.n(n),o=a(0),c=a.n(o),i=a(232),s=a.n(i),l=a(192),m=a(64),u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return c.a.createElement("div",null,t.props.auth.globalAlert&&t.props.auth.globalAlert.type===l.a.ERROR?c.a.createElement("div",{className:"alert alert-danger mb-0"},c.a.createElement("strong",null,"Whoops! Something went wrong: "),t.props.auth.globalAlert.message):"",t.props.auth&&t.props.auth.user&&"new"===t.props.auth.user.accountLevel&&"/c/onboarding/"!==window.location.pathname?c.a.createElement("div",{className:"alert alert-info mb-0 text-center"},c.a.createElement("p",null,c.a.createElement("strong",null,"Whoops! Looks like your account setup is not complete."," "),"You will not be able to access Pro features until you complete your account setup."),c.a.createElement(m.Link,{to:"/c/onboarding/",className:"btn btn-info"},"Complete Account Setup")):"")},t}return r()(t,e),t}(c.a.Component),d=(a(233),a(190)),p=a(189),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).render=function(){var e=a.props,t=e.location,n=e.title,r=e.auth;return c.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement(m.Link,{className:"navbar-brand",to:"/"},c.a.createElement("img",{src:"/img/v2/icon-sm.png",width:"40",height:"40",alt:n})),c.a.createElement("div",{className:"navbar-nav-scroll d-none d-md-block"},c.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},c.a.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},c.a.createElement(m.Link,{to:"/",className:"nav-link"},"Home")),r.isAuthenticated?c.a.createElement("li",{className:"/c/all/"===t.pathname?"nav-item active dropdown":"nav-item dropdown"},c.a.createElement(m.Link,{to:"/c/all/",className:"nav-link dropdown-toggle",id:"cfpNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CFPs"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"cfpNavbarDropdown"},c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/all/"},c.a.createElement("i",{className:"fa fa-list mr-2"})," All"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/saved/"},c.a.createElement("i",{className:"fa fa-star mr-2"})," Saved"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/applied/"},c.a.createElement("i",{className:"fa fa-paper-plane mr-2"})," Applied"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/accepted/"},c.a.createElement("i",{className:"fa fa-check mr-2"})," Accepted"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/rejected/"},c.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/hidden/"},c.a.createElement("i",{className:"fa fa-eye-slash mr-2"})," Hidden"))):c.a.createElement("li",{className:"/conferences/"===t.pathname?"nav-item active":"nav-item"},c.a.createElement(m.Link,{to:"/conferences/",className:"nav-link"},"CFPs")),c.a.createElement("li",{className:"/blog/"===t.pathname?"nav-item active":"nav-item"},c.a.createElement(m.Link,{to:"/blog/",className:"nav-link"},"Blog")),c.a.createElement("li",{className:"/submit/"===t.pathname?"nav-item active":"nav-item"},c.a.createElement(m.Link,{to:"/submit/",className:"nav-link"},"Submit")))),c.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"}),c.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},r.isAuthenticated?c.a.createElement("li",{className:"/c/profile/"===t.pathname?"nav-item active dropdown":"nav-item dropdown"},c.a.createElement(m.Link,{to:"/c/profile/",className:"nav-link dropdown-toggle",id:"accountNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.user&&r.user.profileUrl?c.a.createElement("img",{src:r.user.profileUrl,alt:"Your Profile Image",className:"navbar-profile-image"}):"","Account"),c.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"accountNavbarDropdown"},c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/profile/"},c.a.createElement("i",{className:"fa fa-user mr-2"})," Profile"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/communication/"},c.a.createElement("i",{className:"fa fa-bell mr-2"})," Communication"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/billing/"},c.a.createElement("i",{className:"fa fa-credit-card mr-2"})," Billing"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/searches/"},c.a.createElement("i",{className:"fa fa-search mr-2"})," Searches"),c.a.createElement("div",{className:"dropdown-divider"}),c.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),a.authClient.logout()}},c.a.createElement("i",{className:"fa fa-sign-out mr-2"})," Logout"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item mr-2"},c.a.createElement("a",{onClick:function(e){e.preventDefault(),a.authClient.login()},href:"#",className:"nav-link"},"Login")),c.a.createElement("li",{className:"nav-item d-none d-md-block"},c.a.createElement(p.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu",className:"nav-link btn btn-info font-weight-bold",title:"Upgrade to CFP Land Professional"},c.a.createElement("i",{className:"fa fa-arrow-up text-white"})," ",c.a.createElement("span",{className:"text-white"},"Upgrade to Pro")))))))},a.authClient=new d.a,a}return r()(t,e),t}(c.a.Component),h=(a(235),a(20)),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=(new d.a).isAuthenticated();return c.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-light d-block d-md-none"},c.a.createElement("div",{className:"w-100"},t?c.a.createElement(c.a.Fragment,null,c.a.createElement(h.Link,{className:"/c/all/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/all/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-list"})),"CFPs"),c.a.createElement(h.Link,{className:"/c/saved/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/saved/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-star"})),"Saved"),c.a.createElement(h.Link,{className:"/c/applied/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/applied/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-paper-plane"})),"Applied"),c.a.createElement(h.Link,{className:"/c/accepted/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/accepted/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-check"})),"Accepted"),c.a.createElement("div",{className:"dropup nav-item"},c.a.createElement(p.OutboundLink,{className:"nav-link dropdown-toggle",id:"bottom-nav-dropup","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-ellipsis-h"}))," ","More"),c.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"bottom-nav-dropup"},c.a.createElement(h.Link,{className:"dropdown-item",to:"/"},c.a.createElement("i",{className:"fa fa-home mr-2"})," Home"),c.a.createElement(h.Link,{className:"dropdown-item",to:"/blog"},c.a.createElement("i",{className:"fa fa-newspaper-o mr-2"})," Blog"),c.a.createElement("div",{className:"dropdown-divider"}),c.a.createElement(h.Link,{className:"dropdown-item",to:"/c/rejected/"},c.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),c.a.createElement(h.Link,{className:"dropdown-item",to:"/c/hidden/"},c.a.createElement("i",{className:"fa fa-eye-slash mr-2"})," Hidden"),c.a.createElement(h.Link,{className:"dropdown-item",to:"/submit/"},c.a.createElement("i",{className:"fa fa-plus-circle mr-2"})," Submit")))):c.a.createElement(c.a.Fragment,null,c.a.createElement(h.Link,{className:"/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-home"})),"Home"),c.a.createElement(h.Link,{className:"/conferences/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/conferences/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-list"})),"CFPs"),c.a.createElement(h.Link,{className:"/submit/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/submit/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-plus-circle"})),"Submit"),c.a.createElement(h.Link,{className:"/blog/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/blog/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-newspaper-o"})),"Blog"),c.a.createElement(p.OutboundLink,{className:"nav-item nav-link",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-arrow-up"})),"Pro"))))},t}(c.a.Component),v=(a(236),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"container-fluid text-center d-none d-md-block"},c.a.createElement("p",{className:"social"},c.a.createElement(p.OutboundLink,{href:"https://twitter.com/cfp_land"},c.a.createElement("i",{className:"fa fa-twitter"})),c.a.createElement(p.OutboundLink,{href:"https://www.facebook.com/cfpland"},c.a.createElement("i",{className:"fa fa-facebook"})),c.a.createElement(p.OutboundLink,{href:"https://www.linkedin.com/company/cfpland/"},c.a.createElement("i",{className:"fa fa-linkedin"}))),c.a.createElement("p",null,"© 2019, Portable CTO, LLC |"," ",c.a.createElement("a",{href:"mailto:info@cfpland.com"},"info@cfpland.com")," |"," ",c.a.createElement(m.Link,{to:"/terms/"},"Terms & Privacy")," |"," ",c.a.createElement(m.Link,{to:"/blog/data/"},"Data Sources & Sharing")," |"," ",c.a.createElement(m.Link,{to:"/archive/"},"Conference Archive")),c.a.createElement("p",null,c.a.createElement(p.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=footer"},"CFP Land Pro")," ","|"," ",c.a.createElement(p.OutboundLink,{href:"https://sponsor.cfpland.com/"},"Sponsor CFP Land"))))},t}return r()(t,e),t.prototype.componentWillReceiveProps=function(e,t){$&&$(function(){$('[data-toggle="tooltip"]').tooltip()}),e&&e.auth&&e.auth.user&&window.ga&&window.ga("set","userId",e.auth.user.id),e.auth&&!e.auth.isAuthenticated&&window.dojoRequire&&window.dojoRequire(["mojo/signup-forms/Loader"],function(e){e.start({baseUrl:"mc.us15.list-manage.com",uuid:"4eba8b205fc13380cd3e6f3fc",lid:"258f553f4e",uniqueMethods:!0})})},t}(c.a.Component)),E=a(193),b=(a(237),a(238),a(239),a(240),a(241),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){s.a.init()},a.componentDidUpdate=function(){s.a.init()},a.render=function(){var e=this.props,t=e.children,a=e.auth;return c.a.createElement("div",null,c.a.createElement(f,Object.assign({title:E.siteMetadata.title},this.props)),c.a.createElement(u,this.props),t,c.a.createElement(g,this.props),c.a.createElement(v,{title:E.siteMetadata.title,auth:a}))},t}(c.a.Component));t.a=b},295:function(e,t,a){"use strict";const n=a(299),r=a(300),o=a(301);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function i(e,t){return t.decode?r(e):e}function s(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function l(e,t){const a=function(e){let t;switch(e.arrayFormat){case"index":return(e,a,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return(e,a,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};case"comma":return(e,t,a)=>{const n="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;a[e]=n};default:return(e,t,a)=>{void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const r of e.split("&")){let[e,c]=o(r.replace(/\+/g," "),"=");c=void 0===c?null:i(c,t),a(i(e,t),c,n)}return Object.keys(n).sort().reduce((e,t)=>{const a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(a):e[t]=a,e},Object.create(null))}t.extract=s,t.parse=l,t.stringify=((e,t)=>{if(!e)return"";const a=function(e){switch(e.arrayFormat){case"index":return t=>(a,n)=>{const r=a.length;return void 0===n?a:null===n?[...a,[c(t,e),"[",r,"]"].join("")]:[...a,[c(t,e),"[",c(r,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(a,n)=>void 0===n?a:null===n?[...a,[c(t,e),"[]"].join("")]:[...a,[c(t,e),"[]=",c(n,e)].join("")];case"comma":return t=>(a,n,r)=>n?0===r?[[c(t,e),"=",c(n,e)].join("")]:[[a,c(n,e)].join(",")]:a;default:return t=>(a,n)=>void 0===n?a:null===n?[...a,c(t,e)]:[...a,[c(t,e),"=",c(n,e)].join("")]}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),n=Object.keys(e);return!1!==t.sort&&n.sort(t.sort),n.map(n=>{const r=e[n];return void 0===r?"":null===r?c(n,t):Array.isArray(r)?r.reduce(a(n),[]).join("&"):c(n,t)+"="+c(r,t)}).filter(e=>e.length>0).join("&")}),t.parseUrl=((e,t)=>{const a=e.indexOf("#");return-1!==a&&(e=e.slice(0,a)),{url:e.split("?")[0]||"",query:l(s(e),t)}})},297:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(341);t.a=function(){return r.a.createElement("div",{className:"card bg-light mb-2 loading-card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("h5",{className:"card-title"},"Loading")))}},298:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(0),c=a.n(o),i=(a(342),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return t.props.currentSearchSaved?c.a.createElement("a",{href:"#",onClick:t.props.unsaveCurrentSearch,className:"save-search btn btn-success unsave",target:"_blank"},c.a.createElement("i",{className:"fa fa-check-square mr-2"}),c.a.createElement("span",null)):c.a.createElement("a",{href:"#",onClick:t.props.saveCurrentSearch,className:"save-search btn btn-outline-success",target:"_blank"},c.a.createElement("i",{className:"fa fa-bookmark mr-2"}),"Save Search")},t}return r()(t,e),t}(c.a.Component));t.a=i},299:function(e,t,a){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},300:function(e,t,a){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(r){}if(1===e.length)return e;t=t||1;var a=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(a),o(n))}function c(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(n),a=1;a<t.length;a++)t=(e=o(t,a).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var a={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(e);n;){try{a[n[0]]=decodeURIComponent(n[0])}catch(t){var o=c(n[0]);o!==n[0]&&(a[n[0]]=o)}n=r.exec(e)}a["%C2"]="�";for(var i=Object.keys(a),s=0;s<i.length;s++){var l=i[s];e=e.replace(new RegExp(l,"g"),a[l])}return e}(e)}}},301:function(e,t,a){"use strict";e.exports=((e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const a=e.indexOf(t);return-1===a?[e]:[e.slice(0,a),e.slice(a+t.length)]})},302:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(344),a(64));t.a=function(e){var t=e.auth;return r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Find More Conferences"),r.a.createElement("p",null,"Dozens of CFPs close every month. Check our list of CFPs often to make sure you never miss a speaking opportunity."),t&&t.isAuthenticated?r.a.createElement(o.Link,{to:"/c/all/",className:"btn btn-info btn-block mb-2"},"View All CFPs"):r.a.createElement(o.Link,{to:"/conferences/",className:"btn btn-info btn-block mb-2"},"View All CFPs")))}},303:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(345);t.a=function(e){return r.a.createElement("div",{className:"card bg-light mb-2 none-found-card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Nothing Here Yet"),r.a.createElement("p",null,e.notFoundText||"[ ]")))}},384:function(e,t){var a=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return a.test(e)}},464:function(e,t,a){var n=a(358),r=a(465);e.exports=function(e){return r(n(e).toLowerCase())}},465:function(e,t,a){var n=a(466)("toUpperCase");e.exports=n},466:function(e,t,a){var n=a(467),r=a(384),o=a(469),c=a(358);e.exports=function(e){return function(t){t=c(t);var a=r(t)?o(t):void 0,i=a?a[0]:t.charAt(0),s=a?n(a,1).join(""):t.slice(1);return i[e]()+s}}},467:function(e,t,a){var n=a(468);e.exports=function(e,t,a){var r=e.length;return a=void 0===a?r:a,!t&&a>=r?e:n(e,t,a)}},468:function(e,t){e.exports=function(e,t,a){var n=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(a=a>r?r:a)<0&&(a+=r),r=t>a?0:a-t>>>0,t>>>=0;for(var o=Array(r);++n<r;)o[n]=e[n+t];return o}},469:function(e,t,a){var n=a(470),r=a(384),o=a(471);e.exports=function(e){return r(e)?o(e):n(e)}},470:function(e,t){e.exports=function(e){return e.split("")}},471:function(e,t){var a="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+n+"|"+r+")"+"?",l="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[o,c,i].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),m="(?:"+[o+n+"?",n,c,i,a].join("|")+")",u=RegExp(r+"(?="+r+")|"+m+l,"g");e.exports=function(e){return e.match(u)||[]}}}]);
//# sourceMappingURL=component---src-pages-c-searches-js-bb38625bd9fd6f23aa3c.js.map