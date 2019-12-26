(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{185:function(e,a,t){"use strict";t.r(a);t(462),t(94),t(29);var n=t(8),l=t.n(n),r=t(0),s=t.n(r),c=t(193),o=t(200),i=t(197),m=t(198),u=t(366),d=t(382),p=t(354),g=t.n(p),h=(t(466),t(355),t(191)),f=t(295),E=t(192),v=t(195),b=t.n(v),N=t(64),y=function(e){function a(a){var t;return(t=e.call(this,a)||this).componentDidMount=function(){t.getPaymentStatus()},t.render=function(){return s.a.createElement("div",null,t.state.status===h.a.LOADING?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"alert alert-info"},s.a.createElement("strong",null,"Your payment is being processed.")," Please do not refresh this page or navigate away."),s.a.createElement(f.a,null)):t.state.status===h.a.ERROR?s.a.createElement("div",{className:"alert alert-danger"},s.a.createElement("strong",null,"Whoops, something went wrong.")," Try refreshing this page or contacting"," ",s.a.createElement("a",{href:"mailto:info@cfpland.com"},"info@cfpland.com")," for support."):s.a.createElement("div",{className:"alert alert-success"},s.a.createElement("strong",null,"Payment confirmed!")," You should be redirected to the welcome page. If not ",s.a.createElement(N.Link,{to:"/c/onboarding?step=4"},"click here"),"."))},t.getPaymentStatus=function(){t.apiClient.getMePayment().then(function(e){"active"===b()(e.data,"subscription.status")?(t.setState(Object.assign({},t.state,{status:h.a.SAVED})),t.props.onComplete&&t.props.onComplete()):setTimeout(t.getPaymentStatus,2e3)}).catch(function(e){return t.setState(Object.assign({},t.state,{status:h.a.ERROR}))})},t.state={status:h.a.LOADING},t.apiClient=new E.a,t}return l()(a,e),a}(s.a.Component),S=(t(467),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"alert alert-success"},s.a.createElement("strong",null,"Setup complete!")," Now that your Pro account is active, learn how CFP Land can help you reach your speaking goals faster, or skip this intro and start looking for your next conference to speak at.",s.a.createElement("div",{className:"text-center mt-3 mb-2"},s.a.createElement(N.Link,{className:"btn btn-success",to:"/c/all/"},"Start Browsing Open CFPs"))),s.a.createElement("div",{className:"row mb-3"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("h4",{className:"mt-4"},"1. Save CFPs for later"),s.a.createElement("p",null,"Never forget your favorite CFP again. We'll send you"," ",s.a.createElement("strong",null,"reminders 21, 7, and 2 days before the CFP is due"),".")),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:"Save CFPs to get reminders before they are due.",src:"https://i.imgur.com/I0o4DBA.png"}),s.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#savedCfpModal",title:"Expand image",className:"bottom-right bg-dark text-white"},s.a.createElement("i",{className:"fa fa-search-plus"})))),s.a.createElement("div",{className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"savedCfpModal",id:"savedCfpModal","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog modal-xl"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},"Save CFPs for later"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"×"))),s.a.createElement("img",{alt:"Save CFPs to get reminders before they are due.",src:"https://i.imgur.com/I0o4DBA.png"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("h4",{className:"mt-4"},"2. Browse CFPs weeks before free subscribers"),s.a.createElement("p",null,"Pro users can view all open CFPs"," ",s.a.createElement("strong",null,"21 days before they are available to the public"),". Apply early to make sure your application gets a fair shot.")),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:"See CFPs 21 days before free users.",src:"https://i.imgur.com/kMhsxzV.gif"}),s.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#browseCfpsModal",title:"Expand image",className:"bottom-right bg-dark text-white"},s.a.createElement("i",{className:"fa fa-search-plus"})))),s.a.createElement("div",{className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"browseCfpsModal",id:"browseCfpsModal","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog modal-xl"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},"Browse CFPs weeks before free subscribers"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"×"))),s.a.createElement("img",{alt:"See CFPs 21 days before free users.",src:"https://i.imgur.com/kMhsxzV.gif"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("h4",{className:"mt-4"},"3. Track Your CFPs"),s.a.createElement("p",null,s.a.createElement("strong",null,"Keep tabs on the CFPs you've submitted"),", and which conferences you're committed to speak at. Monitor and improve your acceptance rate through weekly email reports.")),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:"Track CFPs you've applied to and been accepted at.",src:"https://i.imgur.com/cwOSkNC.gif"}),s.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#trackCfpsModal",title:"Expand image",className:"bottom-right bg-dark text-white"},s.a.createElement("i",{className:"fa fa-search-plus"})))),s.a.createElement("div",{className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"trackCfpsModal",id:"trackCfpsModal","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog modal-xl"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},"Track Your CFPs"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"×"))),s.a.createElement("img",{alt:"Track CFPs you've applied to and been accepted at.",src:"https://i.imgur.com/cwOSkNC.gif"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("h4",{className:"mt-4"},"4. Save Searches"),s.a.createElement("p",null,"Get"," ",s.a.createElement("strong",null,"notified when new CFPs match your saved search options"),". Great if you're focused on one region or a specific topic area.")),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:"Save Searches to get notifications when new CFPs become available.",src:"https://i.imgur.com/FAkF4TN.png"}),s.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#saveSearchModal",title:"Expand image",className:"bottom-right bg-dark text-white"},s.a.createElement("i",{className:"fa fa-search-plus"})))),s.a.createElement("div",{className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"saveSearchModal",id:"saveSearchModal","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog modal-xl"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},"Save Searches"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"×"))),s.a.createElement("img",{alt:"Save Searches to get notifications when new CFPs become available.",src:"https://i.imgur.com/FAkF4TN.png"}))))),s.a.createElement("h4",{className:"mt-3"},"And More!"),s.a.createElement("p",null,"Discover more by exploring the app. If you have feedback, contact"," ",s.a.createElement("a",{href:"mailto:info@cfpland.com"},"info@cfpland.com")," anytime!"),s.a.createElement("div",{className:"text-center"},s.a.createElement(N.Link,{className:"btn btn-lg btn-success",to:"/c/all/"},"Start Browsing Open CFPs")))},a}return l()(a,e),a}(s.a.Component)),k=function(e){function a(a){var t;return(t=e.call(this,a)||this).nextStep=function(){t.setState(Object.assign({},t.state,{step:t.state.step+1}))},t.state={step:null},t}l()(a,e);var t=a.prototype;return t.componentWillReceiveProps=function(e,a){if(e&&e.auth&&e.auth.isAuthenticated){var t=g.a.parse(e.location.search.substring(1));t&&t.step?this.setState(Object.assign({},this.state,{step:Number(t.step)})):e.auth.user&&"new"===e.auth.user.accountLevel&&this.setState(Object.assign({},this.state,{step:1}))}else window.location.href="/"},t.render=function(){var e=this.props,a=e.location,t=e.auth;return s.a.createElement(o.a,{location:a,auth:t},s.a.createElement(i.a,{site:c.siteMetadata,title:"Sign Up"}),s.a.createElement("div",{className:"container mt-3"},s.a.createElement("div",{className:"account-page"},t.isAuthenticated?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Account Setup"),1===this.state.step?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"alert alert-info"},s.a.createElement("strong",null,"Welcome to CFP Land Pro!")," Please tell us a little about yourself and your goals as a speaker."),s.a.createElement(u.a,{auth:t,onComplete:this.nextStep,saveButtonText:"Save and Continue"}),s.a.createElement("p",null,"By completing the signup process, you agree to our"," ",s.a.createElement(N.Link,{to:"/terms/",target:"_blank"},"Terms and Conditions"))):2===this.state.step?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"alert alert-info"},s.a.createElement("strong",null,"You're almost done!")," Now we just need your payment information. Payments are securely handled by Stripe and Moonclerk, and are 100% refundable if you're not satisfied with your purchase.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("strong",null,"Early adopters:")," Use the coupon code"," ",s.a.createElement("code",null,"SpeakToMe2019")," to get 50% off"," ",s.a.createElement("em",null,"for life!")),s.a.createElement(d.a,{auth:t})):3===this.state.step?s.a.createElement(y,{auth:t,onComplete:this.nextStep}):4===this.state.step?s.a.createElement(S,null):s.a.createElement("p",null,"Whoops, something went wrong. Please try refreshing the page or contact"," ",s.a.createElement("a",{href:"mailto:info@cfpland.com"},"info@cfpland.com"),"for help.")):"")))},a}(s.a.Component);a.default=Object(m.a)(k)},199:function(e,a,t){var n=t(21).f,l=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in l||t(14)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},295:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(340);a.a=function(){return l.a.createElement("div",{className:"card bg-light mb-2 loading-card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"lds-ellipsis"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("h5",{className:"card-title"},"Loading")))}},355:function(e,a,t){"use strict";t.d(a,"a",function(){return n});t(40),t(65),t(25),t(367);var n=function(e){return Object.keys(e).forEach(function(a){return null===e[a]&&delete e[a]}),e}},366:function(e,a,t){"use strict";t(93),t(199),t(29);var n=t(8),l=t.n(n),r=t(0),s=t.n(r),c=(t(383),t(192)),o=t(355),i=t(191),m=["Speak at my first conference","Speak at more conferences","Raise my acceptance rate","Speak internationally","Get a keynote speaking slot","Meet my quota for work"],u=function(e){function a(a){var t;if((t=e.call(this,a)||this).componentDidMount=function(){t.setState(Object.assign({},t.state,{status:i.a.LOADING}))},t.handleChange=function(e){var a;t.setState(Object.assign({},t.state,{account:Object.assign({},t.state.account,(a={},a[e.target.name]=e.target.value,a))}))},t.handleSelectedSpeakingGoalChange=function(e){var a=m.includes(e.target.value)?e.target.value:"";t.setState(Object.assign({},t.state,{account:Object.assign({},t.state.account,{speakingGoal:a,speakingGoalSelected:e.target.value})}))},t.handleSubmit=function(e){t.setState(Object.assign({},t.state,{status:i.a.SAVING})),e.preventDefault(),t.apiClient.patchMe(t.state.account).then(function(e){t.setState(Object.assign({},t.state,{status:i.a.SAVED})),t.props.onComplete&&t.props.onComplete()}).catch(function(e){console.error(e.message),t.setState(Object.assign({},t.state,{status:i.a.ERROR}))})},t.componentWillReceiveProps=function(e,a){if(e&&e.auth&&e.auth.user){var n=Object(o.a)(e.auth.user);t.setState(Object.assign({},t.state,{account:Object.assign({},t.state.account,n,{speakingGoalSelected:n.speakingGoal?m.includes(n.speakingGoal)?n.speakingGoal:"Other":n.speakingGoal}),status:i.a.READY}))}},t.render=function(){return s.a.createElement("form",{className:"row account-form",onSubmit:t.handleSubmit},s.a.createElement("div",{className:"col-12"},s.a.createElement("span",{className:"pull-right text-muted font-italic"},"Note: Profile information is ",s.a.createElement("strong",null,"not")," shared publicly."),s.a.createElement("label",{htmlFor:"emailInput"},"Email Address"),s.a.createElement("input",{name:"email",type:"email",className:"form-control mb-3",id:"emailInput",placeholder:"Your email",value:t.state.account.email||"",disabled:!0})),s.a.createElement("div",{className:"col-12 col-md-6"},s.a.createElement("label",{htmlFor:"first_name"},"First Name"),s.a.createElement("input",{name:"firstName",type:"text",className:"form-control mb-3",id:"firstName",placeholder:"First name",value:t.state.account.firstName||"",onChange:t.handleChange})),s.a.createElement("div",{className:"col-12 col-md-6"},s.a.createElement("label",{htmlFor:"last_name"},"Last Name"),s.a.createElement("input",{name:"lastName",type:"text",className:"form-control mb-3",id:"lastName",placeholder:"Last name",value:t.state.account.lastName||"",onChange:t.handleChange})),s.a.createElement("div",{className:"col-12"},s.a.createElement("label",{htmlFor:"location"},"Location"),s.a.createElement("input",{name:"location",type:"text",className:"form-control mb-3",id:"location",placeholder:"City, Country",value:t.state.account.location||"",onChange:t.handleChange})),s.a.createElement("div",{className:"col-12"},s.a.createElement("label",{htmlFor:"speakingGoal"},"What is your primary goal as a speaker?"," ",s.a.createElement("span",{className:"small text-muted"},"This helps us align the product experience with your goals.")),s.a.createElement("select",{className:"custom-select mb-3",id:"speakingGoalSelected",name:"speakingGoalSelected",value:t.state.account.speakingGoalSelected||"",onChange:t.handleSelectedSpeakingGoalChange},s.a.createElement("option",{value:""}," "),m.map(function(e,a){return s.a.createElement("option",{key:a,value:e},e)}),s.a.createElement("option",{value:"Other"},"Other")),"Other"===t.state.account.speakingGoalSelected?s.a.createElement("input",{name:"speakingGoal",type:"text",className:"form-control mb-3",id:"speakingGoal",placeholder:"Be specific, eg: 'Speak at 10 new conferences this year.'",value:t.state.account.speakingGoal||"",onChange:t.handleChange}):""),s.a.createElement("div",{className:"col-12"},s.a.createElement("input",{type:"submit",value:t.props.saveButtonText||"Save",className:"btn btn-success btn-lg btn-block mb-3"})),s.a.createElement("div",{className:"col-12"},t.state.status===i.a.ERROR?s.a.createElement("div",{className:"alert alert-danger"},s.a.createElement("strong",null,"Whoops! Something went wrong.")," Check the console to learn more or contact support for help."):"",t.state.status===i.a.SAVED?s.a.createElement("div",{className:"alert alert-success"},s.a.createElement("strong",null,"Account saved!")," You can now carry on with your day."):""))},t.state={status:i.a.READY,account:{email:"",firstName:"",lastName:"",location:"",speakingGoal:"",speakingGoalSelected:""}},a.auth&&a.auth.user){var n=Object(o.a)(a.auth.user);t.state={account:Object.assign({},t.state.account,n,{speakingGoalSelected:n.speakingGoal?m.includes(n.speakingGoal)?n.speakingGoal:"Other":n.speakingGoal}),status:i.a.READY}}return t.apiClient=new c.a,t}return l()(a,e),a}(s.a.Component);a.a=u},367:function(e,a,t){var n=t(30),l=t(43);t(368)("keys",function(){return function(e){return l(n(e))}})},368:function(e,a,t){var n=t(11),l=t(16),r=t(15);e.exports=function(e,a){var t=(l.Object||{})[e]||Object[e],s={};s[e]=a(t),n(n.S+n.F*r(function(){t(1)}),"Object",s)}},462:function(e,a,t){"use strict";var n=t(5),l=t(23),r=t(22),s=t(101),c=t(66),o=t(15),i=t(463).f,m=t(102).f,u=t(21).f,d=t(464).trim,p=n.Number,g=p,h=p.prototype,f="Number"==r(t(69)(h)),E="trim"in String.prototype,v=function(e){var a=c(e,!1);if("string"==typeof a&&a.length>2){var t,n,l,r=(a=E?a.trim():d(a,3)).charCodeAt(0);if(43===r||45===r){if(88===(t=a.charCodeAt(2))||120===t)return NaN}else if(48===r){switch(a.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+a}for(var s,o=a.slice(2),i=0,m=o.length;i<m;i++)if((s=o.charCodeAt(i))<48||s>l)return NaN;return parseInt(o,n)}}return+a};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var a=arguments.length<1?0:e,t=this;return t instanceof p&&(f?o(function(){h.valueOf.call(t)}):"Number"!=r(t))?s(new g(v(a)),t,p):v(a)};for(var b,N=t(14)?i(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;N.length>y;y++)l(g,b=N[y])&&!l(p,b)&&u(p,b,m(g,b));p.prototype=h,h.constructor=p,t(17)(n,"Number",p)}},463:function(e,a,t){var n=t(99),l=t(67).concat("length","prototype");a.f=Object.getOwnPropertyNames||function(e){return n(e,l)}},464:function(e,a,t){var n=t(11),l=t(26),r=t(15),s=t(465),c="["+s+"]",o=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),m=function(e,a,t){var l={},c=r(function(){return!!s[e]()||"​"!="​"[e]()}),o=l[e]=c?a(u):s[e];t&&(l[t]=o),n(n.P+n.F*c,"String",l)},u=m.trim=function(e,a){return e=String(l(e)),1&a&&(e=e.replace(o,"")),2&a&&(e=e.replace(i,"")),e};e.exports=m},465:function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=component---src-pages-c-onboarding-js-15ac55c09bdc7ebd13fd.js.map