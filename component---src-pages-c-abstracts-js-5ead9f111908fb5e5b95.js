(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{181:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(0),s=a.n(c),l=a(195),i=a(199),o=a(197),m=a(217),u=a(211),d=(a(29),a(97),a(461),a(238)),p=a.n(d),h=(a(462),a(463)),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).render=function(){return s.a.createElement("div",{className:"modal fade",id:a.props.modalId,tabIndex:"-1",role:"dialog","aria-labelledby":"abstractEditModalLabel","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title",id:"abstractEditModalLabel"},"edit"===a.props.action?"Edit Abstract":"Create Abstract"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"×"))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("div",{className:"row mb-3"},s.a.createElement("div",{className:"col-12"},"create"===a.props.action?s.a.createElement("p",{className:"alert alert-info"},"An abstract is a brief pitch of the presentation you want to deliver at a conference. In addition to informing the reader about your topic, it should drive home your expertise in the area and capture their attention."):"",s.a.createElement("label",{htmlFor:"title"},"Title"),s.a.createElement("input",{type:"text",id:"title",className:"form-control",onChange:function(e){return a.saveField("title",e.target.value)},placeholder:"An Eye-Catching Title",value:a.state.title||""}))),s.a.createElement("div",{className:"row mb-3"},s.a.createElement("div",{className:"col-12"},s.a.createElement("label",{htmlFor:"description"},"Description"),s.a.createElement("textarea",{rows:"3",id:"description",className:"form-control",onChange:function(e){return a.saveField("description",e.target.value)},placeholder:"A longer description of your abstract. Many conferences request 1-3 paragraphs of detail.",value:a.state.description||""}))),s.a.createElement("div",{className:"row mb-3"},s.a.createElement("div",{className:"col-12"},s.a.createElement("label",{htmlFor:"other"},"Other (optional)"),s.a.createElement("textarea",{rows:"3",id:"other",className:"form-control",onChange:function(e){return a.saveField("other",e.target.value)},placeholder:"Other information, supporting blog posts, or recordings of your talk in action. These can help bolster your chances with the selection committee.",value:a.state.other||""}))),s.a.createElement("div",{className:"row mb-3"},s.a.createElement("div",{className:"col-6"},a.formValid()?s.a.createElement("button",{className:"btn btn-block btn-success",onClick:function(e){return a.props.save(a.state)},"data-dismiss":"modal"},"Save"):s.a.createElement("button",{className:"btn btn-success disabled"},"Save")),s.a.createElement("div",{className:"col-6"},s.a.createElement("button",{className:"btn btn-block btn-outline-primary ml-2","data-dismiss":"modal"},"Cancel")))))))},a.formValid=function(){return a.state.title&&a.state.description},a.saveField=function(e,t){a.state[e]=t,a.setState(Object.assign({},a.state))},a.state={title:Object(h.get)(t,"data.title",null),description:Object(h.get)(t,"data.description",null),other:Object(h.get)(t,"data.other",null)},a}return r()(t,e),t.prototype.componentWillReceiveProps=function(e,t){this.setState(Object.assign({},this.state,{title:Object(h.get)(e,"data.title",null),description:Object(h.get)(e,"data.description",null),other:Object(h.get)(e,"data.other",null)}))},t}(s.a.Component),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).render=function(){var e=a.state.abstract,t=e.id,n=e.title,r=e.createdAt,c=e.description,l=e.other,i="abstract_"+t;return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"abstract-card list-group-item"},s.a.createElement("div",{className:"mt-1 item-content"},s.a.createElement("h3",null,n),s.a.createElement("p",null,s.a.createElement("strong",null,"Created: "),p()(r).format("LL")),a.state.expanded?s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,s.a.createElement("strong",null,"Description: "),a.nl2br(c)),l?s.a.createElement("p",null,s.a.createElement("strong",null,"Other: "),a.nl2br(l)):""):""),s.a.createElement("div",{className:"item-expand"},s.a.createElement("a",{href:"#",onClick:a.expandAbstract,title:"Show the entire Abstract",className:"btn btn-outline-info mr-2"},a.state.expanded?"Show Less":"Show More"),s.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#"+i,title:"Edit Abstract",className:"btn btn-success mr-2"},s.a.createElement("i",{className:"fa fa-edit mr-2"}),"Edit"),a.state.confirmDelete?s.a.createElement("button",{onClick:a.reallyDelete,title:"Delete Abstract",className:"btn btn-outline-danger"},"Are You Sure?"):s.a.createElement("button",{onClick:a.enableConfirmDelete,title:"Delete Abstract",className:"btn btn-danger"},s.a.createElement("i",{className:"fa fa-remove mr-2"}),"Delete"))),s.a.createElement(f,{action:"edit",modalId:i,save:function(e){return a.props.updateAbstract(a.state.abstract.id,e)},data:a.state.abstract}))},a.nl2br=function(e){return e.split("\n").map(function(e,t){return s.a.createElement("span",{key:t},e,s.a.createElement("br",null))})},a.enableConfirmDelete=function(e){a.setState(Object.assign({},a.state,{confirmDelete:!0}))},a.reallyDelete=function(e){a.props.deleteAbstract(a.state.abstract.id),a.setState(Object.assign({},a.state,{confirmDelete:!1}))},a.expandAbstract=function(e){return e.preventDefault(),a.setState(Object.assign({},a.state,{expanded:!a.state.expanded})),!1},a.state={abstract:t.abstract,expanded:!1,confirmDelete:!1},a}return r()(t,e),t.prototype.componentWillReceiveProps=function(e,t){this.setState(Object.assign({},this.state,{abstract:e.abstract}))},t}(s.a.Component),g=(a(464),function(e){e.auth;var t=e.createAbstract;return s.a.createElement("div",{className:"card bg-light mb-3"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},"Create New Abstract"),s.a.createElement("p",null,"Store your abstracts here to easily attach them to conferences when you apply."),s.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#create-abstract-modal",title:"Create New Abstract",className:"btn btn-success btn-block mr-2"},s.a.createElement("i",{className:"fa fa-plus-circle"})," Create New Abstract")),s.a.createElement(f,{action:"create",modalId:"create-abstract-modal",save:t}))}),v=a(239),E=a(198),k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){var e=t.props,a=e.location,n=e.auth,r=e.abstracts;return s.a.createElement(i.a,{location:a,auth:n},s.a.createElement(o.a,{site:l.siteMetadata,title:"Your Abstracts"}),s.a.createElement("div",{id:"searches",className:"container mt-2 mt-md-5"},s.a.createElement("div",null,s.a.createElement("h2",null,"Your Abstracts")),r&&r.data&&r.data.length>0?s.a.createElement("ul",{className:"list-group list-group-flush"},r.data.map(function(e,t){return s.a.createElement(b,{key:t,abstract:e,updateAbstract:r.updateAbstract,deleteAbstract:r.deleteAbstract})})):r&&r.data&&0===r.data.length?s.a.createElement(m.a,null):s.a.createElement(u.a,null)),s.a.createElement("div",{className:"container mt-2"},s.a.createElement(g,{auth:n,createAbstract:r.createAbstract})))},t}return r()(t,e),t}(s.a.Component);t.default=Object(E.a)(Object(v.a)(k))},191:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={READY:"ready",LOADING:"loading",SAVING:"saving",SAVED:"saved",ERROR:"error",CLICKED:"clicked"}},192:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(230),r="IQFgYz6dzi36nwz39BZQ8XCGpytKh6CO",c="cfpland.auth0.com",s="https://api.cfpland.com/",l="https://www.cfpland.com/c/all/",i=function(){function e(){this.auth0=new n.a.WebAuth({domain:c,clientID:r,redirectUri:l,responseType:"token id_token",scope:"openid email",audience:s})}var t=e.prototype;return t.login=function(){this.auth0.authorize()},t.handleAuthentication=function(){var e=this;return this.auth0.parseHash(function(t,a){if(a&&a.accessToken&&a.idToken)e.setSession(a),window.location.href="/c/all/";else if(t)return t;return null})},t.setSession=function(e){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("idToken",e.idToken);var t=1e3*e.expiresIn+(new Date).getTime();localStorage.setItem("expiresAt",t)},t.getAccessToken=function(){return localStorage.getItem("accessToken")},t.getIdToken=function(){return localStorage.getItem("idToken")},t.renewTokens=function(){var e=this;this.auth0.checkSession({},function(t,a){a&&a.accessToken&&a.idToken?e.setSession(a):t&&(e.logout(),console.error(t))})},t.logout=function(){localStorage.removeItem("accessToken"),localStorage.removeItem("idToken"),localStorage.removeItem("expiresAt"),this.auth0.logout({returnTo:window.location.origin}),window.location.href="/"},t.isAuthenticated=function(){return"undefined"!=typeof window&&localStorage.getItem("accessToken")&&localStorage.getItem("accessToken").length>0},e}()},193:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(192),r=a(204),c=a.n(r),s=function(){var e=this;this.isAuthenticated=void 0,this.getMe=function(){return c.a.get(e.baseUrl+"/me",{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.patchMe=function(t){return c.a.patch(e.baseUrl+"/me",t,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.getConferences=function(t){return c.a.get(e.baseUrl+"/conferences",{params:t,headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.getSavedConferences=function(){return c.a.get(e.baseUrl+"/me/saved-conferences",{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.putSavedConference=function(t){return c.a.put(e.baseUrl+"/me/saved-conferences/"+t,void 0,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.deleteSavedConference=function(t){return c.a.delete(e.baseUrl+"/me/saved-conferences/"+t,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.getTrackedConferences=function(){return c.a.get(e.baseUrl+"/me/tracked-conferences",{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.putTrackedConference=function(t,a){return c.a.put(e.baseUrl+"/me/tracked-conferences/"+t,a,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.deleteTrackedConference=function(t){return c.a.delete(e.baseUrl+"/me/tracked-conferences/"+t,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.getMeSearches=function(){return c.a.get(e.baseUrl+"/me/searches",{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.putMeSearch=function(t){return c.a.put(e.baseUrl+"/me/searches",t,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.deleteMeSearch=function(t){return c.a.delete(e.baseUrl+"/me/searches/"+t,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.getMePayment=function(){return c.a.get(e.baseUrl+"/me/payment",{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.getMeAbstracts=function(){return c.a.get(e.baseUrl+"/me/abstracts",{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.postMeAbstract=function(t){return c.a.post(e.baseUrl+"/me/abstracts",t,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.putMeAbstract=function(t,a){return c.a.put(e.baseUrl+"/me/abstracts/"+t,a,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.deleteMeAbstract=function(t){return c.a.delete(e.baseUrl+"/me/abstracts/"+t,{headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.getLocations=function(t){return c.a.get(e.baseUrl+"/locations",{params:{search:t},headers:{Authorization:"Bearer "+e.auth.getAccessToken()}})},this.baseUrl="https://api.cfpland.com/v0",this.auth=new n.a,this.isAuthenticated=this.auth.isAuthenticated()}},195:function(e,t){(function(t){e.exports={siteMetadata:{title:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",siteUrl:"https://www.cfpland.com",author:"Karl L. Hughes",twitter:"cfp_land",image:"/img/default.png"},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/content/posts/",name:"posts"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/guides/",name:"guides"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"CFP Land",short_name:"CFP Land",description:"Calls for Proposals, Tech Conferences, and Speaking Tips",homepage_url:"https://www.cfpland.com",start_url:"/",background_color:"#67597A",theme_color:"#F7468A",display:"standalone",icons:[{src:"/img/android-icon-1024x1024.png",sizes:"1024x1024",type:"image/png"},{src:"/img/android-icon-512x512.png",sizes:"512x512",type:"image/png"},{src:"/img/android-icon-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/apple-icon-180x180.png",sizes:"180x180",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-19700764-14"}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},{resolve:"gatsby-source-airtable",options:{apiKey:"YOUR_AIRTABLE_KEY",tables:[{baseId:"app5JdxyWF41oHa5k",tableName:"conferences",tableView:"closing_in_21",tableLinks:["category"]},{baseId:"app5JdxyWF41oHa5k",tableName:"categories",tableView:"all"}]}},{resolve:"gatsby-plugin-create-client-paths",options:{prefixes:["/c/account/*","/c/saved/*","/c/searches/*"]}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(this,"/")},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(227),s=a.n(c),l=a(196),i=a.n(l);t.a=function(e){var t=e.site,a=e.title,n=e.image;n=n||i()(t,"image");var c=i()(t,"title");return a=a?a+" | "+c:c,r.a.createElement(s.a,{title:a,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+i()(t,"twitter")},{property:"twitter:image",content:n},{property:"og:title",content:a},{property:"og:type",content:"website"},{property:"og:description",content:i()(t,"description")},{property:"og:url",content:i()(t,"siteUrl")},{property:"og:image",content:n}]})}},198:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(29);var n=a(8),r=a.n(n),c=a(0),s=a.n(c),l=a(193),i=a(192),o=a(191);function m(e){return function(t){function a(a){var n;return(n=t.call(this,a)||this).componentDidMount=function(){if(n.authClient.isAuthenticated())n.authClient.renewTokens(),n.setState(Object.assign({},n.state,{isAuthenticated:!0})),n.state.user||n.apiClient.getMe().then(function(e){n.setState(Object.assign({},n.state,{user:e.data}))});else{var e=n.authClient.handleAuthentication();e?n.setState(Object.assign({},n.state,{globalAlert:{type:o.a.ERROR,message:e.errorDescription}})):n.setState(Object.assign({},n.state,{isAuthenticated:!1}))}},n.render=function(){return s.a.createElement(e,Object.assign({auth:n.state,authClient:n.authClient,apiClient:n.apiClient},n.props))},n.authClient=new i.a,n.apiClient=new l.a,n.state={isAuthenticated:!1,user:null,globalAlert:{type:null,message:null}},n}return r()(a,t),a}(s.a.Component)}},199:function(e,t,a){"use strict";a(29);var n=a(8),r=a.n(n),c=a(0),s=a.n(c),l=a(228),i=a.n(l),o=a(191),m=a(64),u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return s.a.createElement("div",null,t.props.auth.globalAlert&&t.props.auth.globalAlert.type===o.a.ERROR?s.a.createElement("div",{className:"alert alert-danger mb-0"},s.a.createElement("strong",null,"Whoops! Something went wrong: "),t.props.auth.globalAlert.message):"",t.props.auth&&t.props.auth.user&&("free"===t.props.auth.user.accountLevel||"new"===t.props.auth.user.accountLevel)&&"/c/onboarding/"!==window.location.pathname?s.a.createElement("div",{className:"alert alert-warning mb-0 text-center"},s.a.createElement("p",null,s.a.createElement("strong",null,"Whoops! Looks like your account setup is not complete."," "),"You will not be able to access all Pro features until you complete your account setup."),s.a.createElement(m.Link,{to:"/c/onboarding/",className:"btn btn-info"},"Complete Account Setup"),s.a.createElement("a",{href:"https://pro.cfpland.com/",target:"_blank",className:"ml-1 btn btn-outline-info"},"Learn More")):"")},t}return r()(t,e),t}(s.a.Component),d=(a(229),a(192)),p=a(190),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).render=function(){var e=a.props,t=e.location,n=e.title,r=e.auth;return s.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},s.a.createElement("div",{className:"container-fluid"},r.isAuthenticated?s.a.createElement(m.Link,{className:"navbar-brand",to:"/c/all"},s.a.createElement("img",{src:"/img/v2/icon-sm.png",width:"40",height:"40",alt:n})):s.a.createElement(m.Link,{className:"navbar-brand",to:"/"},s.a.createElement("img",{src:"/img/v2/icon-sm.png",width:"40",height:"40",alt:n})),s.a.createElement("div",{className:"navbar-nav-scroll d-none d-md-block"},s.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},s.a.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},s.a.createElement(m.Link,{to:"/",className:"nav-link"},"Home")),r.isAuthenticated?s.a.createElement("li",{className:"/c/all/"===t.pathname?"nav-item active dropdown":"nav-item dropdown"},s.a.createElement(m.Link,{to:"/c/all/",className:"nav-link dropdown-toggle",id:"cfpNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CFPs"),s.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"cfpNavbarDropdown"},s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/all/"},s.a.createElement("i",{className:"fa fa-list mr-2"})," All"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/saved/"},s.a.createElement("i",{className:"fa fa-star mr-2"})," Saved"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/applied/"},s.a.createElement("i",{className:"fa fa-paper-plane mr-2"})," Applied"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/accepted/"},s.a.createElement("i",{className:"fa fa-check mr-2"})," Accepted"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/rejected/"},s.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"))):s.a.createElement("li",{className:"/conferences/"===t.pathname?"nav-item active":"nav-item"},s.a.createElement(m.Link,{to:"/conferences/",className:"nav-link"},"CFPs")),s.a.createElement("li",{className:"/blog/"===t.pathname?"nav-item active":"nav-item"},s.a.createElement(m.Link,{to:"/blog/",className:"nav-link"},"Blog")),s.a.createElement("li",{className:"/submit/"===t.pathname?"nav-item active":"nav-item"},s.a.createElement(m.Link,{to:"/submit/",className:"nav-link"},"Submit")))),s.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"}),s.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},r.isAuthenticated?s.a.createElement("li",{className:"/c/profile/"===t.pathname?"nav-item active dropdown":"nav-item dropdown"},s.a.createElement(m.Link,{to:"/c/profile/",className:"nav-link dropdown-toggle",id:"accountNavbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.user&&r.user.profileUrl?s.a.createElement("img",{src:r.user.profileUrl,alt:"Your Profile Image",className:"navbar-profile-image"}):"","Account"),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"accountNavbarDropdown"},s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/profile/"},s.a.createElement("i",{className:"fa fa-user mr-2"})," Profile"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/communication/"},s.a.createElement("i",{className:"fa fa-bell mr-2"})," Communication"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/billing/"},s.a.createElement("i",{className:"fa fa-credit-card mr-2"})," Billing"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/searches/"},s.a.createElement("i",{className:"fa fa-search mr-2"})," Searches"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/abstracts/"},s.a.createElement("i",{className:"fa fa-sticky-note mr-2"})," Abstracts"),s.a.createElement(m.Link,{className:"dropdown-item",to:"/c/onboarding/?step=4"},s.a.createElement("i",{className:"fa fa-star mr-2"})," Pro Features"),s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),a.authClient.logout()}},s.a.createElement("i",{className:"fa fa-sign-out mr-2"})," Logout"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"nav-item mr-2"},s.a.createElement("a",{onClick:function(e){e.preventDefault(),a.authClient.login()},href:"#",className:"nav-link"},"Login")),s.a.createElement("li",{className:"nav-item d-none d-md-block"},s.a.createElement(p.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu",className:"nav-link btn btn-info font-weight-bold",title:"Upgrade to CFP Land Professional"},s.a.createElement("i",{className:"fa fa-arrow-up text-white"})," ",s.a.createElement("span",{className:"text-white"},"Upgrade to Pro")))))))},a.authClient=new d.a,a}return r()(t,e),t}(s.a.Component),f=(a(231),a(20)),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=(new d.a).isAuthenticated();return s.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-light d-block d-md-none"},s.a.createElement("div",{className:"w-100"},t?s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Link,{className:"/c/all/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/all/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-list"})),"CFPs"),s.a.createElement(f.Link,{className:"/c/saved/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/saved/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-star"})),"Saved"),s.a.createElement(f.Link,{className:"/c/applied/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/applied/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-paper-plane"})),"Applied"),s.a.createElement(f.Link,{className:"/c/accepted/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/c/accepted/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-check"})),"Accepted"),s.a.createElement("div",{className:"dropup nav-item"},s.a.createElement(p.OutboundLink,{className:"nav-link dropdown-toggle",id:"bottom-nav-dropup","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-ellipsis-h"}))," ","More"),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"bottom-nav-dropup"},s.a.createElement(f.Link,{className:"dropdown-item",to:"/"},s.a.createElement("i",{className:"fa fa-home mr-2"})," Home"),s.a.createElement(f.Link,{className:"dropdown-item",to:"/blog"},s.a.createElement("i",{className:"fa fa-newspaper-o mr-2"})," Blog"),s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement(f.Link,{className:"dropdown-item",to:"/c/rejected/"},s.a.createElement("i",{className:"fa fa-times-circle-o mr-2"})," Rejected"),s.a.createElement(f.Link,{className:"dropdown-item",to:"/submit/"},s.a.createElement("i",{className:"fa fa-plus-circle mr-2"})," Submit")))):s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Link,{className:"/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-home"})),"Home"),s.a.createElement(f.Link,{className:"/conferences/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/conferences/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-list"})),"CFPs"),s.a.createElement(f.Link,{className:"/submit/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/submit/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-plus-circle"})),"Submit"),s.a.createElement(f.Link,{className:"/blog/"===e.pathname?"nav-item nav-link active":"nav-item nav-link",to:"/blog/"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-newspaper-o"})),"Blog"),s.a.createElement(p.OutboundLink,{className:"nav-item nav-link",href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=menu"},s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-arrow-up"})),"Pro"))))},t}(s.a.Component),g=(a(232),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"container-fluid text-center d-none d-md-block"},s.a.createElement("p",{className:"social"},s.a.createElement(p.OutboundLink,{href:"https://twitter.com/cfp_land"},s.a.createElement("i",{className:"fa fa-twitter"})),s.a.createElement(p.OutboundLink,{href:"https://www.facebook.com/cfpland"},s.a.createElement("i",{className:"fa fa-facebook"})),s.a.createElement(p.OutboundLink,{href:"https://www.linkedin.com/company/cfpland/"},s.a.createElement("i",{className:"fa fa-linkedin"}))),s.a.createElement("p",null,"© 2019, Portable CTO, LLC |"," ",s.a.createElement("a",{href:"mailto:info@cfpland.com"},"info@cfpland.com")," |"," ",s.a.createElement(m.Link,{to:"/terms/"},"Terms & Privacy")," |"," ",s.a.createElement(m.Link,{to:"/archive/"},"Conference Archive")),s.a.createElement("p",null,s.a.createElement(p.OutboundLink,{href:"https://pro.cfpland.com/?utm_source=web&utm_campaign=footer"},"CFP Land Pro")," ","|"," ",s.a.createElement(p.OutboundLink,{href:"https://sponsor.cfpland.com/"},"Sponsor CFP Land"))))},t}return r()(t,e),t.prototype.componentWillReceiveProps=function(e,t){$&&$(function(){$('[data-toggle="tooltip"]').tooltip()}),e&&e.auth&&e.auth.user&&window.ga&&window.ga("set","userId",e.auth.user.id),e.auth&&!e.auth.isAuthenticated&&window.dojoRequire&&window.dojoRequire(["mojo/signup-forms/Loader"],function(e){e.start({baseUrl:"mc.us15.list-manage.com",uuid:"4eba8b205fc13380cd3e6f3fc",lid:"258f553f4e",uniqueMethods:!0})})},t}(s.a.Component)),v=a(195),E=(a(233),a(234),a(235),a(236),a(237),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){i.a.init()},a.componentDidUpdate=function(){i.a.init()},a.render=function(){var e=this.props,t=e.children,a=e.auth;return s.a.createElement("div",null,s.a.createElement(h,Object.assign({title:v.siteMetadata.title},this.props)),s.a.createElement(u,this.props),t,s.a.createElement(b,this.props),s.a.createElement(g,{title:v.siteMetadata.title,auth:a}))},t}(s.a.Component));t.a=E},211:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(265);t.a=function(){return r.a.createElement("div",{className:"card bg-light mb-2 loading-card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("h5",{className:"card-title"},"Loading")))}},217:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(315);t.a=function(e){return r.a.createElement("div",{className:"card bg-light mb-2 none-found-card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Nothing Here Yet"),r.a.createElement("p",null,e.notFoundText||"[ ]")))}},239:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(29);var n=a(8),r=a.n(n),c=a(0),s=a.n(c);function l(e){return function(t){function a(a){var n;return(n=t.call(this,a)||this).componentWillReceiveProps=function(e){n.apiClient=e.apiClient,n.auth=e.auth,n.auth&&n.apiClient&&n.auth.isAuthenticated&&null===n.state.data&&!1===n.callMade&&(n.callMade=!0,n.getAllAbstracts())},n.render=function(){return s.a.createElement(e,Object.assign({auth:n.auth,apiClient:n.apiClient,abstracts:n.state},n.props))},n.getAllAbstracts=function(){n.apiClient.getMeAbstracts().then(function(e){n.setState(Object.assign({},n.state,{data:e.data.items}))}).catch(function(e){console.error(e.message)})},n.createAbstract=function(e){n.apiClient.postMeAbstract(e).then(function(e){var t=n.state.data;t.push(e.data),n.setState(Object.assign({},n.state,{data:t}))}).catch(function(e){console.error(e.message)})},n.updateAbstract=function(e,t){n.apiClient.putMeAbstract(e,t).then(function(a){var r=n.state.data.map(function(a){return a.id===e?Object.assign({},a,t):a});n.setState(Object.assign({},n.state,{data:r}))}).catch(function(e){console.error(e.message)})},n.deleteAbstract=function(e){n.apiClient.deleteMeAbstract(e).then(function(t){var a=n.state.data.filter(function(t){return t.id!==e});n.setState(Object.assign({},n.state,{data:a}))}).catch(function(e){console.error(e.message)})},n.state={data:null,createAbstract:n.createAbstract,updateAbstract:n.updateAbstract,deleteAbstract:n.deleteAbstract},n.callMade=!1,n}return r()(a,t),a}(s.a.Component)}}}]);
//# sourceMappingURL=component---src-pages-c-abstracts-js-5ead9f111908fb5e5b95.js.map