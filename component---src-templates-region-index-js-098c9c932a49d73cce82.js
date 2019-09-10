(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{166:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return h});t(95);var n=t(0),r=t.n(n),l=t(200),c=t(64),s=t(197),i=t.n(s),o=t(242),m=t(243),d=t(342),u=t(198),p=t(336),f=t(199);a.default=Object(f.a)(function(e){var a=e.data,t=e.location,n=e.auth,s=i()(a,"conferences.edges").map(p.a),f=function(e,a){var t="Unknown";return i()(e,"[0].region")?t=i()(e,"[0].region"):a.pathname.split("/")&&(t=(t=i()(a.pathname.split("/"),"[2]")).charAt(0).toUpperCase()+t.slice(1)),t}(s,t),h=f+" Conference CFPs",g='Upcoming technology conference calls for proposals in the "'+f+'" region.';return r.a.createElement(l.a,{location:t,auth:n},r.a.createElement(u.a,{site:i()(a,"site.meta"),title:h}),r.a.createElement("div",{id:"cfps",className:"container mt-5 mb-3"},r.a.createElement(o.a,{title:h,follow:!1,description:g}),r.a.createElement(m.a,{conferences:s,auth:n})),r.a.createElement("div",{className:"container"},s&&s.length>0?r.a.createElement(d.a,null):r.a.createElement("div",{className:"mt-5 mb-5"},r.a.createElement("p",null,"It looks like we don't know of any open CFPs for this region right now."),r.a.createElement("p",null,"If you know of one that we should include, you can let others know about it by submitting it."),r.a.createElement("p",{className:"text-center"},r.a.createElement(c.Link,{to:"/submit/",className:"btn btn-info btn-lg"},"Submit One")))))});var h="408175910"},189:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(230),r="IQFgYz6dzi36nwz39BZQ8XCGpytKh6CO",l="cfpland.auth0.com",c="https://api.cfpland.com/",s="https://www.cfpland.com/",i=function(){function e(){this.auth0=new n.a.WebAuth({domain:l,clientID:r,redirectUri:s,responseType:"token id_token",scope:"openid email",audience:c})}var a=e.prototype;return a.login=function(){this.auth0.authorize()},a.handleAuthentication=function(){var e=this;return this.auth0.parseHash(function(a,t){if(t&&t.accessToken&&t.idToken)e.setSession(t),window.location.href="/";else if(a)return a;return null})},a.setSession=function(e){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("idToken",e.idToken);var a=1e3*e.expiresIn+(new Date).getTime();localStorage.setItem("expiresAt",a)},a.getAccessToken=function(){return localStorage.getItem("accessToken")},a.getIdToken=function(){return localStorage.getItem("idToken")},a.renewTokens=function(){var e=this;this.auth0.checkSession({},function(a,t){t&&t.accessToken&&t.idToken?e.setSession(t):a&&(e.logout(),console.error(a))})},a.logout=function(){localStorage.removeItem("accessToken"),localStorage.removeItem("idToken"),localStorage.removeItem("expiresAt"),this.auth0.logout({returnTo:window.location.origin}),window.location.href="/"},a.isAuthenticated=function(){return"undefined"!=typeof window&&localStorage.getItem("accessToken")&&localStorage.getItem("accessToken").length>0},e}()},190:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var n=t(189),r=t(238),l=t.n(r),c="https://api.cfpland.com/v0",s=function(){function e(){this.isAuthenticated=void 0,this.baseUrl=c,this.auth=new n.a,this.isAuthenticated=this.auth.isAuthenticated()}var a=e.prototype;return a.getMe=function(){return l.a.get(this.baseUrl+"/me",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.patchMe=function(e){return l.a.patch(this.baseUrl+"/me",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getConferences=function(e){return l.a.get(this.baseUrl+"/conferences",{params:e,headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getSavedConferences=function(){return l.a.get(this.baseUrl+"/me/conferences",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.putMeConference=function(e,a,t){return l.a.put(this.baseUrl+"/me/conferences/"+e+"/"+a,t,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.deleteMeConference=function(e,a){return l.a.delete(this.baseUrl+"/me/conferences/"+e+"/"+a,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getMeSearches=function(){return l.a.get(this.baseUrl+"/me/searches",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.putMeSearch=function(e){return l.a.put(this.baseUrl+"/me/searches",e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.deleteMeSearch=function(e){return l.a.delete(this.baseUrl+"/me/searches/"+e,{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},a.getMePayment=function(){return l.a.get(this.baseUrl+"/me/payment",{headers:{Authorization:"Bearer "+this.auth.getAccessToken()}})},e}()},191:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={READY:"ready",LOADING:"loading",SAVING:"saving",SAVED:"saved",ERROR:"error"}},193:function(e,a){(function(a){e.exports={siteMetadata:{title:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",siteUrl:"https://www.cfpland.com",author:"Karl L. Hughes",twitter:"cfp_land",image:"/img/default.png"},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:a+"/content/posts/",name:"posts"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"CFP Land",short_name:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",homepage_url:"https://www.cfpland.com",start_url:"/",background_color:"#ffffff",theme_color:"#D3637E",display:"standalone",icons:[{src:"/img/android-icon-192x192.png",sizes:"192x192",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-19700764-14"}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},{resolve:"gatsby-source-airtable",options:{apiKey:"YOUR_AIRTABLE_KEY",tables:[{baseId:"app5JdxyWF41oHa5k",tableName:"conferences",tableView:"closing_in_21",tableLinks:["category"]},{baseId:"app5JdxyWF41oHa5k",tableName:"categories",tableView:"all"}]}},{resolve:"gatsby-plugin-create-client-paths",options:{prefixes:["/c/account/*","/c/saved/*","/c/searches/*"]}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(this,"/")},198:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(227),c=t.n(l),s=t(197),i=t.n(s);a.a=function(e){var a=e.site,t=e.title,n=e.image;n=n||i()(a,"image");var l=i()(a,"title");return t=t?t+" | "+l:l,r.a.createElement(c.a,{title:t,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+i()(a,"twitter")},{property:"twitter:image",content:n},{property:"og:title",content:t},{property:"og:type",content:"website"},{property:"og:description",content:i()(a,"description")},{property:"og:url",content:i()(a,"siteUrl")},{property:"og:image",content:n}]})}},199:function(e,a,t){"use strict";t.d(a,"a",function(){return m});t(29);var n=t(8),r=t.n(n),l=t(0),c=t.n(l),s=t(190),i=t(189),o=t(191);function m(e){return function(a){function t(t){var n;return(n=a.call(this,t)||this).componentDidMount=function(){if(n.auth.isAuthenticated())n.auth.renewTokens(),n.setState(Object.assign({},n.state,{isAuthenticated:!0})),n.state.user||n.api.getMe().then(function(e){n.setState(Object.assign({},n.state,{user:e.data}))});else{var e=n.auth.handleAuthentication();e?n.setState(Object.assign({},n.state,{globalAlert:{type:o.a.ERROR,message:e.errorDescription}})):n.setState(Object.assign({},n.state,{isAuthenticated:!1}))}},n.render=function(){return c.a.createElement(e,Object.assign({auth:n.state},n.props))},n.auth=new i.a,n.api=new s.a,n.state={isAuthenticated:!1,user:null,globalAlert:{type:null,message:null}},n}return r()(t,a),t}(c.a.Component)}},200:function(e,a,t){"use strict";t(29);var n=t(8),r=t.n(n),l=t(0),c=t.n(l),s=t(228),i=t.n(s),o=t(191),m=t(64),d=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return c.a.createElement("div",null,a.props.auth.globalAlert&&a.props.auth.globalAlert.type===o.a.ERROR?c.a.createElement("div",{className:"alert alert-danger mb-0"},c.a.createElement("strong",null,"Whoops! Something went wrong: "),a.props.auth.globalAlert.message):"",a.props.auth&&a.props.auth.user&&"new"===a.props.auth.user.accountLevel&&"/c/onboarding/"!==window.location.pathname?c.a.createElement("div",{className:"alert alert-info mb-0 text-center"},c.a.createElement("p",null,c.a.createElement("strong",null,"Whoops! Looks like your account setup is not complete."," "),"You will not be able to access Pro features until you complete your account setup."),c.a.createElement(m.Link,{to:"/c/onboarding/",className:"btn btn-info"},"Complete Account Setup")):"")},a}return r()(a,e),a}(c.a.Component),u=(t(229),t(189)),p=t(188),f=function(e){function a(a){var t;return(t=e.call(this,a)||this).render=function(){var e=t.props,a=e.location,n=e.title,r=e.auth;return c.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement(m.Link,{className:"navbar-brand",to:"/"},c.a.createElement("img",{src:"/img/logo.png",width:"30",height:"30",alt:n})),c.a.createElement("div",{className:"navbar-nav-scroll d-none d-md-block"},c.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},c.a.createElement("li",{className:"/"===a.pathname?"nav-item active":"nav-item"},c.a.createElement(m.Link,{to:"/",className:"nav-link"},"Home")),r.isAuthenticated?c.a.createElement("li",{className:"/c/all/"===a.pathname?"nav-item active dropdown":"nav-item dropdown"},c.a.createElement(m.Link,{to:"/c/all/",className:"nav-link dropdown-toggle",id:"cfpNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CFPs"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"cfpNavbarDropdown"},c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/all/"},c.a.createElement("i",{className:"fa fa-list mr-2"})," All"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/saved/"},c.a.createElement("i",{className:"fa fa-star mr-2"})," Saved"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/applied/"},c.a.createElement("i",{className:"fa fa-paper-plane mr-2"})," Applied"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/accepted/"},c.a.createElement("i",{className:"fa fa-check mr-2"})," Accepted"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/rejected/"},c.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/hidden/"},c.a.createElement("i",{className:"fa fa-eye-slash mr-2"})," Hidden"))):c.a.createElement("li",{className:"/conferences/"===a.pathname?"nav-item active":"nav-item"},c.a.createElement(m.Link,{to:"/conferences/",className:"nav-link"},"CFPs")),c.a.createElement("li",{className:"/blog/"===a.pathname?"nav-item active":"nav-item"},c.a.createElement(m.Link,{to:"/blog/",className:"nav-link"},"Blog")),c.a.createElement("li",{className:"/submit/"===a.pathname?"nav-item active":"nav-item"},c.a.createElement(m.Link,{to:"/submit/",className:"nav-link"},"Submit")))),c.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"}),c.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},r.isAuthenticated?c.a.createElement("li",{className:"/c/profile/"===a.pathname?"nav-item active dropdown":"nav-item dropdown"},c.a.createElement(m.Link,{to:"/c/profile/",className:"nav-link dropdown-toggle",id:"accountNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Account"),c.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"accountNavbarDropdown"},c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/profile/"},c.a.createElement("i",{className:"fa fa-user mr-2"})," Profile"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/communication/"},c.a.createElement("i",{className:"fa fa-bell mr-2"})," Communication"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/billing/"},c.a.createElement("i",{className:"fa fa-credit-card mr-2"})," Billing"),c.a.createElement(m.Link,{className:"dropdown-item",to:"/c/searches/"},c.a.createElement("i",{className:"fa fa-search mr-2"})," Searches"),c.a.createElement("div",{className:"dropdown-divider"}),c.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),t.authClient.logout()}},c.a.createElement("i",{className:"fa fa-sign-out mr-2"})," Logout"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item mr-2 d-none"},c.a.createElement("a",{onClick:function(e){e.preventDefault(),t.authClient.login()},href:"#",className:"nav-link"},"Login")),c.a.createElement("li",{className:"nav-item d-none d-md-block"},c.a.createElement(p.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu",className:"nav-link btn btn-secondary font-weight-bold",title:"Upgrade to CFP Land Professional"},c.a.createElement("i",{className:"fa fa-arrow-up"})," ",c.a.createElement("span",{className:"text-white"},"Upgrade to Pro")))))))},t.authClient=new u.a,t}return r()(a,e),a}(c.a.Component),h=(t(231),t(20)),g=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.location,a=(new u.a).isAuthenticated();return c.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-light d-block d-md-none"},c.a.createElement("div",{className:"w-100"},a?c.a.createElement(c.a.Fragment,null,c.a.createElement(h.Link,{className:"/c/all/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/all/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-list"})),"CFPs"),c.a.createElement(h.Link,{className:"/c/saved/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/saved/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-star"})),"Saved"),c.a.createElement(h.Link,{className:"/c/applied/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/applied/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-paper-plane"})),"Applied"),c.a.createElement(h.Link,{className:"/c/accepted/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/accepted/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-check"})),"Accepted"),c.a.createElement("div",{className:"dropup nav-item"},c.a.createElement(p.OutboundLink,{className:"nav-link dropdown-toggle",id:"bottom-nav-dropup","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-ellipsis-h"}))," ","More"),c.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"bottom-nav-dropup"},c.a.createElement(h.Link,{className:"dropdown-item",to:"/"},c.a.createElement("i",{className:"fa fa-home mr-2"})," Home"),c.a.createElement(h.Link,{className:"dropdown-item",to:"/blog"},c.a.createElement("i",{className:"fa fa-newspaper-o mr-2"})," Blog"),c.a.createElement("div",{className:"dropdown-divider"}),c.a.createElement(h.Link,{className:"dropdown-item",to:"/c/rejected/"},c.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),c.a.createElement(h.Link,{className:"dropdown-item",to:"/c/hidden/"},c.a.createElement("i",{className:"fa fa-eye-slash mr-2"})," Hidden"),c.a.createElement(h.Link,{className:"dropdown-item",to:"/submit/"},c.a.createElement("i",{className:"fa fa-plus-circle mr-2"})," Submit")))):c.a.createElement(c.a.Fragment,null,c.a.createElement(h.Link,{className:"/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-home"})),"Home"),c.a.createElement(h.Link,{className:"/conferences/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/conferences/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-list"})),"CFPs"),c.a.createElement(h.Link,{className:"/submit/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/submit/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-plus-circle"})),"Submit"),c.a.createElement(h.Link,{className:"/blog/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/blog/"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-newspaper-o"})),"Blog"),c.a.createElement(p.OutboundLink,{className:"nav-item nav-link",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-arrow-up"})),"Pro"))))},a}(c.a.Component),v=(t(232),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"container-fluid text-center d-none d-md-block"},c.a.createElement("p",{className:"social"},c.a.createElement(p.OutboundLink,{href:"https://twitter.com/cfp_land"},c.a.createElement("i",{className:"fa fa-twitter"})),c.a.createElement(p.OutboundLink,{href:"https://www.facebook.com/cfpland"},c.a.createElement("i",{className:"fa fa-facebook"})),c.a.createElement(p.OutboundLink,{href:"https://www.linkedin.com/company/cfpland/"},c.a.createElement("i",{className:"fa fa-linkedin"}))),c.a.createElement("p",null,"© 2019,"," ",c.a.createElement(p.OutboundLink,{href:"https://www.portablecto.com",target:"_blank"},"Portable CTO, LLC")," ","| ",c.a.createElement("a",{href:"mailto:info@cfpland.com"},"info@cfpland.com")," |"," ",c.a.createElement(p.OutboundLink,{href:"https://www.portablecto.com/privacy"},"Privacy Policy")," ","| ",c.a.createElement(m.Link,{to:"/blog/data/"},"Data Sources & Sharing")," |"," ",c.a.createElement(m.Link,{to:"/archive/"},"Conference Archive")),c.a.createElement("p",null,c.a.createElement(p.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=footer"},"CFP Land Pro")," ","|"," ",c.a.createElement(p.OutboundLink,{href:"https://sponsor.cfpland.com/"},"Sponsor CFP Land"))))},a}return r()(a,e),a.prototype.componentWillReceiveProps=function(e,a){e&&e.auth&&e.auth.user&&window.ga&&window.ga("set","userId",e.auth.user),$&&$(function(){$('[data-toggle="tooltip"]').tooltip()})},a}(c.a.Component)),b=t(193),E=(t(233),t(234),t(235),t(236),t(237),function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){i.a.init()},t.componentDidUpdate=function(){i.a.init()},t.render=function(){var e=this.props,a=e.children,t=e.auth;return c.a.createElement("div",null,c.a.createElement(f,Object.assign({title:b.siteMetadata.title},this.props)),c.a.createElement(d,this.props),a,c.a.createElement(g,this.props),c.a.createElement(v,{title:b.siteMetadata.title,auth:t}))},a}(c.a.Component));a.a=E},242:function(e,a,t){"use strict";var n=t(8),r=t.n(n),l=t(0),c=t.n(l),s=(t(322),t(64)),i=t(188),o=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=e.follow,t=e.description,n=e.definition,r=this.props.title||"Upcoming Conference CFPs";return c.a.createElement("div",null,c.a.createElement("h2",{className:"mb-3"},r,a?c.a.createElement("span",null,c.a.createElement(i.OutboundLink,{className:"pull-right text-info",target:"_blank",href:"https://twitter.com/cfp_land",title:"Twitter Account"},c.a.createElement("span",{className:"fa fa-twitter"})),c.a.createElement(i.OutboundLink,{className:"pull-right mr-3 text-warning",target:"_blank",href:"https://feeds.cfpland.com/v2/rss/cfps",title:"RSS Feed"},c.a.createElement("span",{className:"fa fa-rss"})),c.a.createElement(i.OutboundLink,{className:"pull-right mr-3",target:"_blank",href:"https://cfpland.github.io/api-docs/",title:"API Documentation"},c.a.createElement("span",{className:"fa fa-code"}))):""),t?c.a.createElement("p",{className:"lead"},t):"",n?c.a.createElement("p",{className:"text-muted"},'A "Call for Proposal" (or "CFP") is an open invitation for speakers to apply to a conference. Not sure what to expect? Check out our'," ",c.a.createElement(s.Link,{to:"/blog/new-conference-speakers"},"tips for new conference speakers"),"."):"")},a}(c.a.Component);a.a=o},243:function(e,a,t){"use strict";var n=t(8),r=t.n(n),l=t(0),c=t.n(l),s=(t(323),t(195),t(324),t(20)),i=(t(325),t(29),t(326),t(190)),o=t(188),m=function(e){function a(a){var t;return(t=e.call(this,a)||this).render=function(){var e=t.props.isAuthenticated,a=t.state.data||t.props.data;return e?a.isSaved?c.a.createElement("a",{href:"#",onClick:function(e){return t.unsave(e,a.providerId)},title:"Unsave",className:"save-link nav-item nav-link border-right text-warning"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-star"})),c.a.createElement("span",{className:"saved"})):c.a.createElement("a",{href:"#",onClick:function(e){return t.save(e,a.providerId)},title:"Save",className:"save-link nav-item nav-link border-right"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-star-o"})),"Save"):c.a.createElement(o.OutboundLink,{className:"save-link nav-item nav-link border-right",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=save",target:"_blank"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-star-o"})),"Save")},t.save=function(e,a){e.preventDefault(),t.apiClient.putMeConference(a,"saved").then(function(e){t.setState(Object.assign({},t.state,{data:Object.assign({},t.props.data,{isSaved:!0}),status:"Success"}))}).catch(function(e){console.error(e.message),t.setState(Object.assign({},t.state,{status:"Error"}))})},t.unsave=function(e,a){e.preventDefault(),t.apiClient.deleteMeConference(a,"saved").then(function(e){t.setState(Object.assign({},t.state,{data:Object.assign({},t.props.data,{isSaved:!1}),status:"Success"}))}).catch(function(e){console.error(e.message),t.setState(Object.assign({},t.state,{status:"Error"}))})},t.apiClient=new i.a,t.state={data:null,status:"ready"},t}return r()(a,e),a}(c.a.Component),d=(t(327),function(e){function a(a){var t;return(t=e.call(this,a)||this).render=function(){var e=t.props.isAuthenticated,a=t.state.data||t.props.data;return e?a.isHidden?c.a.createElement("a",{href:"#",onClick:function(e){return t.unhide(e,a.providerId)},title:"Unhide",className:"dropdown-item hide-link"},c.a.createElement("i",{className:"fa fa-eye-slash mr-2"}),c.a.createElement("span",{className:"hidden"})):c.a.createElement("a",{href:"#",onClick:function(e){return t.hide(e,a.providerId)},title:"Hide",className:"dropdown-item hide-link"},c.a.createElement("i",{className:"fa fa-eye-slash mr-2"}),"Hide"):c.a.createElement(o.OutboundLink,{className:"dropdown-item hide-link",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=hide",target:"_blank"},c.a.createElement("i",{className:"fa fa-eye-slash mr-2"}),"Hide")},t.hide=function(e,a){e.preventDefault(),t.apiClient.putMeConference(a,"hidden").then(function(e){t.setState(Object.assign({},t.state,{data:Object.assign({},t.props.data,{isHidden:!0}),status:"Success"}))}).catch(function(e){console.error(e.message),t.setState(Object.assign({},t.state,{status:"Error"}))})},t.unhide=function(e,a){e.preventDefault(),t.apiClient.deleteMeConference(a,"hidden").then(function(e){t.setState(Object.assign({},t.state,{data:Object.assign({},t.props.data,{isHidden:!1}),status:"Success"}))}).catch(function(e){console.error(e.message),t.setState(Object.assign({},t.state,{status:"Error"}))})},t.apiClient=new i.a,t.state={data:null,status:"ready"},t}return r()(a,e),a}(c.a.Component)),u=(t(328),t(329),function(e){function a(a){var t;return(t=e.call(this,a)||this).render=function(){return c.a.createElement("div",{className:"modal fade",id:t.props.modalId,tabIndex:"-1",role:"dialog","aria-labelledby":"trackModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"trackModalLabel"},"Track Conference"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"×"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"row mb-3"},c.a.createElement("div",{className:"col-12"},c.a.createElement("p",null,"Notes (optional)"),c.a.createElement("textarea",{rows:"3",id:"notes",className:"form-control",onChange:t.saveNotes,placeholder:"Enter titles or links to your abstracts, submission info, or feedback from the selection committee.",value:t.state.notes||""}))),c.a.createElement("p",null,"What's the status of your application?"),c.a.createElement("div",{className:"row mt-3 mb-3"},c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{type:"button",className:"applied"===t.props.data.trackingStatus?"btn btn-info btn-block":"btn btn-outline-info btn-block",onClick:function(e){return t.props.track(e,t.props.data.providerId,"applied",t.state.notes)}},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-paper-plane-o"})),"Applied")),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{type:"button",className:"accepted"===t.props.data.trackingStatus?"btn btn-success btn-block":"btn btn-outline-success btn-block",onClick:function(e){return t.props.track(e,t.props.data.providerId,"accepted",t.state.notes)}},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-check"})),"Accepted")),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{type:"button",className:"rejected"===t.props.data.trackingStatus?"btn btn-danger btn-block":"btn btn-outline-danger btn-block",onClick:function(e){return t.props.track(e,t.props.data.providerId,"rejected",t.state.notes)}},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-times-circle"})),"Rejected"))),t.props.data.isTracked?c.a.createElement("p",null,c.a.createElement("a",{href:"#",onClick:function(e){return t.props.untrack(e,t.props.data.providerId)}},"Untrack")):""))))},t.saveNotes=function(e){t.setState(Object.assign({},t.state,{notes:e.target.value}))},t.state={notes:a.data.trackingNotes},t}return r()(a,e),a}(c.a.Component)),p=function(e){if(e.isTracked){if("applied"===e.trackingStatus)return"track-link nav-item nav-link border-right text-info";if("accepted"===e.trackingStatus)return"track-link nav-item nav-link border-right text-success";if("rejected"===e.trackingStatus)return"track-link nav-item nav-link border-right text-danger"}return"track-link nav-item nav-link border-right"},f=function(e){if(e.isTracked){if("applied"===e.trackingStatus)return"fa fa-paper-plane-o";if("accepted"===e.trackingStatus)return"fa fa-check";if("rejected"===e.trackingStatus)return"fa fa-times-circle"}return"fa fa-compass"},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).render=function(){var e=t.props.isAuthenticated,a=t.state.data||t.props.data,n="modal_"+a.providerId;return c.a.createElement(c.a.Fragment,null,e?c.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#"+n,title:"Track",className:p(a)},c.a.createElement("div",null,c.a.createElement("i",{className:f(a)})),a.isTracked?a.trackingStatus:"Track"):c.a.createElement(o.OutboundLink,{className:"nav-item nav-link border-right",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=track",target:"_blank"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-compass"})),"Track"),c.a.createElement(u,{modalId:n,data:a,track:t.track,untrack:t.untrack}))},t.track=function(e,a,n,r){e.preventDefault(),t.apiClient.putMeConference(a,"tracked",{meta:{trackingStatus:n,notes:r}}).then(function(e){t.setState(Object.assign({},t.state,{data:Object.assign({},t.props.data,{isTracked:!0,trackingStatus:n}),status:"Success"})),window.$("#modal_"+a).modal("hide")}).catch(function(e){console.error(e.message),t.setState(Object.assign({},t.state,{status:"Error"}))})},t.untrack=function(e,a){e.preventDefault(),t.apiClient.deleteMeConference(a,"tracked").then(function(e){t.setState(Object.assign({},t.state,{data:Object.assign({},t.props.data,{isTracked:!1,trackingStatus:null}),status:"Success"})),window.$("#modal_"+a).modal("hide")}).catch(function(e){console.error(e.message),t.setState(Object.assign({},t.state,{status:"Error"}))})},t.apiClient=new i.a,t.state={data:null,status:"ready"},t}return r()(a,e),a}(c.a.Component),g=(t(330),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){var e=a.props.isAuthenticated,t="export_"+a.props.data.providerId;return c.a.createElement(c.a.Fragment,null,e?c.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#"+t,title:"Export",className:"dropdown-item"},c.a.createElement("i",{className:"fa fa-calendar mr-2"})," Export"):c.a.createElement(o.OutboundLink,{className:"dropdown-item",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=track",target:"_blank"},c.a.createElement("i",{className:"fa fa-calendar mr-2"})," Export"))},a}return r()(a,e),a}(c.a.Component)),v=(t(331),t(332)),b=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){var e={title:"CFPs Close for "+a.props.data.name,start:new Date(a.props.data.cfp_due_date),end:new Date(a.props.data.cfp_due_date),location:a.props.data.location,description:"Apply here: "+a.props.data.cfp_url+"\n\nMore CFPs closing soon: https://www.cfpland.com"};return c.a.createElement("div",{className:"modal fade",id:a.props.modalId,tabIndex:"-1",role:"dialog","aria-labelledby":"exportModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"exportModalLabel"},"Export CFP to Calendar"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"×"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("p",null,"Select your calendar."),c.a.createElement("div",{className:"row mt-3 mb-3"},c.a.createElement("div",{className:"col-3"},c.a.createElement(o.OutboundLink,{href:v.google(e),target:"_blank",className:"btn btn-outline-primary btn-block p-2"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-google"})),"Google")),c.a.createElement("div",{className:"col-3"},c.a.createElement(o.OutboundLink,{href:v.ical(e),target:"_blank",className:"btn btn-outline-primary btn-block p-2"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-apple"})),"Apple iCal")),c.a.createElement("div",{className:"col-3"},c.a.createElement(o.OutboundLink,{href:v.outlook(e),target:"_blank",className:"btn btn-outline-primary btn-block p-2"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-calendar"})),"Outlook")),c.a.createElement("div",{className:"col-3"},c.a.createElement(o.OutboundLink,{href:v.ics(e),target:"_blank",className:"btn btn-outline-primary btn-block p-2"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-download"})),".ics File")))))))},a}return r()(a,e),a}(c.a.Component),E=function(e){var a=e.data,t=e.auth;return c.a.createElement("nav",{className:"nav nav-pills nav-justified conference-item-nav mt-3"},c.a.createElement(m,{data:a,isAuthenticated:t.isAuthenticated}),c.a.createElement(h,{data:a,isAuthenticated:t.isAuthenticated}),c.a.createElement("a",{className:"nav-item nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-ellipsis-h"}))," ","More"),c.a.createElement("div",{className:"dropdown-menu"},c.a.createElement(o.OutboundLink,{className:"dropdown-item",href:a.event_url,target:"_blank"},c.a.createElement("i",{className:"fa fa-globe mr-2"}),"Website"),c.a.createElement(o.OutboundLink,{className:"dropdown-item",href:a.cfp_url,target:"_blank"},c.a.createElement("i",{className:"fa fa-external-link mr-2"}),"CFP"),c.a.createElement(d,{data:a,isAuthenticated:t.isAuthenticated}),c.a.createElement(g,{data:a,isAuthenticated:t.isAuthenticated}),c.a.createElement("a",{className:"dropdown-item",href:"mailto:info@cfpland.com",target:"_blank"},c.a.createElement("i",{className:"fa fa-flag-o mr-2"}),"Report Issue")),c.a.createElement(b,{modalId:"export_"+a.providerId,data:a}))},k=t(315),N=t.n(k);var w=function(e){var a=e.data,t=e.hideButtons,n=e.auth,r=a.name,l=a.cfp_days_until,i=a.cfp_url,m=a.cfp_due_date,d=a.icon,u=a.location,p=a.category,f=a.is_new,h=a.event_start_date,g=N()(m).endOf("day").isBefore(N()().startOf("day")),v=l>21;return c.a.createElement("li",{className:"list-group-item"},c.a.createElement("div",{className:"mt-1"},function(e){return e?c.a.createElement(s.Link,{className:"badge badge-secondary pull-right p-2 mt-2 ml-2",to:"/conferences/"+e.toLowerCase()},"#",e):""}(p),function(e){return e?c.a.createElement("div",{className:"badge badge-primary pull-right p-2 mt-2 ml-2","data-toggle":"tooltip","data-placement":"top",title:"Created in the past 7 days"},"🔔 New"):""}(f),function(e){return e?c.a.createElement("div",{className:"badge badge-info pull-right p-2 mt-2","data-toggle":"tooltip","data-placement":"top",title:"Only displayed to Pro Users"},c.a.createElement("i",{className:"fa fa-arrow-up"})," Pro"):""}(v),c.a.createElement(o.OutboundLink,{href:i,target:"_blank"},c.a.createElement("h3",null,c.a.createElement("div",{className:"pull-left"},d&&d[0]&&d[0].url?c.a.createElement("img",{src:d[0].url,style:{display:"block",margin:"0 1rem 0 0",height:"24px",width:"24px"}}):""),r)),c.a.createElement("p",{className:g?"text-muted":""},c.a.createElement("strong",null,"CFPs ",g?"Closed":"Due",":")," ",c.a.createElement("time",{dateTime:m},m)),c.a.createElement("p",null,c.a.createElement("strong",null,"Perks:")," ",function(e){var a="";return e.perks_checked?(e.travel_covered&&(a+="Travel, "),e.hotel_covered&&(a+="Hotel, "),e.stipend_covered&&(a+="Stipend, "),a=a.length<2?"None":a.substring(0,a.length-2)):a="❓",a}(a)),c.a.createElement("p",null,c.a.createElement("strong",null,"Conference Date:")," ",c.a.createElement("time",{dateTime:h},h)),c.a.createElement("p",null,c.a.createElement("strong",null,"Location:")," ",u),t?"":c.a.createElement(E,{data:a,auth:n})))},y=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=e.conferences,t=e.hideButtons,n=e.auth;return c.a.createElement("ul",{className:"list-group list-group-flush"},a.map(function(e,a){return c.a.createElement(w,{data:e,hideButtons:t,auth:n,key:a})}))},a}(c.a.Component);a.a=y},336:function(e,a,t){"use strict";t.d(a,"a",function(){return n});t(195),t(29);var n=function(e){return Object.assign({},e.node.data,{category:e.node.data.category[0].data.name})}},342:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(361);a.a=function(e){var a=e.remaining;return r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a?a+" more conference CFPs close soon. Subscribe to get all of them in your inbox each week!":"Subscribe to never miss a speaking opportunity again. Get upcoming CFPs in your inbox every week!"),r.a.createElement("form",{className:"row",action:"https://cfpland.us15.list-manage.com/subscribe/post?u=4eba8b205fc13380cd3e6f3fc&id=258f553f4e",method:"post"},r.a.createElement("div",{className:"col-sm-12 col-md-8"},r.a.createElement("input",{name:"EMAIL",type:"email",className:"form-control form-control-lg mb-2",id:"emailInput","aria-label":"Enter email to get CFPs in your inbox every week",placeholder:"Enter email",required:!0})),r.a.createElement("div",{className:"col-sm-12 col-md-3"},r.a.createElement("button",{type:"submit",className:"btn btn-info btn-block mb-2"},"Sign Up")))))}}}]);
//# sourceMappingURL=component---src-templates-region-index-js-098c9c932a49d73cce82.js.map