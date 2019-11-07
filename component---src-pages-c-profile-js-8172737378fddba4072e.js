(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{172:function(e,a,t){"use strict";t.r(a);var n=t(8),l=t.n(n),c=t(0),s=t.n(c),o=t(194),r=t(199),i=t(197),u=t(191),m=t(370),p=t(198),h=function(e){function a(a){var t;return(t=e.call(this,a)||this).login=function(e){e.preventDefault(),t.authClient.login()},t.render=function(){var e=t.props,a=e.location,n=e.auth;return s.a.createElement(r.a,{location:a,auth:n},s.a.createElement(i.a,{site:o.siteMetadata,title:"Your Account"}),s.a.createElement("div",{className:"container mt-3"},s.a.createElement("div",{className:"account-page"},n.isAuthenticated?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Edit Profile"),s.a.createElement(m.a,{auth:n})):s.a.createElement("a",{className:"nav-link",onClick:t.login,href:"#"},"Login"))))},t.authClient=new u.a,t}return l()(a,e),a}(s.a.Component);a.default=Object(p.a)(h)},196:function(e,a,t){var n=t(21).f,l=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in l||t(14)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},338:function(e,a,t){"use strict";t.d(a,"a",function(){return n});t(42),t(65),t(26),t(371);var n=function(e){return Object.keys(e).forEach(function(a){return null===e[a]&&delete e[a]}),e}},370:function(e,a,t){"use strict";t(92),t(196),t(29);var n=t(8),l=t.n(n),c=t(0),s=t.n(c),o=(t(388),t(193)),r=t(338),i=t(192),u=["Speak at my first conference","Speak at more conferences","Raise my acceptance rate","Speak internationally","Get a keynote speaking slot","Meet my quota for work"],m=function(e){function a(a){var t;if((t=e.call(this,a)||this).componentDidMount=function(){t.setState(Object.assign({},t.state,{status:i.a.LOADING}))},t.handleChange=function(e){var a;t.setState(Object.assign({},t.state,{account:Object.assign({},t.state.account,(a={},a[e.target.name]=e.target.value,a))}))},t.handleSelectedSpeakingGoalChange=function(e){var a=u.includes(e.target.value)?e.target.value:"";t.setState(Object.assign({},t.state,{account:Object.assign({},t.state.account,{speakingGoal:a,speakingGoalSelected:e.target.value})}))},t.handleSubmit=function(e){t.setState(Object.assign({},t.state,{status:i.a.SAVING})),e.preventDefault(),t.apiClient.patchMe(t.state.account).then(function(e){t.setState(Object.assign({},t.state,{status:i.a.SAVED})),t.props.onComplete&&t.props.onComplete()}).catch(function(e){console.error(e.message),t.setState(Object.assign({},t.state,{status:i.a.ERROR}))})},t.componentWillReceiveProps=function(e,a){if(e&&e.auth&&e.auth.user){var n=Object(r.a)(e.auth.user);t.setState(Object.assign({},t.state,{account:Object.assign({},t.state.account,n,{speakingGoalSelected:n.speakingGoal?u.includes(n.speakingGoal)?n.speakingGoal:"Other":n.speakingGoal}),status:i.a.READY}))}},t.render=function(){return s.a.createElement("form",{className:"row account-form",onSubmit:t.handleSubmit},s.a.createElement("div",{className:"col-12"},s.a.createElement("span",{className:"pull-right text-muted font-italic"},"Note: Profile information is ",s.a.createElement("strong",null,"not")," shared publicly."),s.a.createElement("label",{htmlFor:"emailInput"},"Email Address"),s.a.createElement("input",{name:"email",type:"email",className:"form-control mb-3",id:"emailInput",placeholder:"Your email",value:t.state.account.email||"",disabled:!0})),s.a.createElement("div",{className:"col-12 col-md-6"},s.a.createElement("label",{htmlFor:"first_name"},"First Name"),s.a.createElement("input",{name:"firstName",type:"text",className:"form-control mb-3",id:"firstName",placeholder:"First name",value:t.state.account.firstName||"",onChange:t.handleChange})),s.a.createElement("div",{className:"col-12 col-md-6"},s.a.createElement("label",{htmlFor:"last_name"},"Last Name"),s.a.createElement("input",{name:"lastName",type:"text",className:"form-control mb-3",id:"lastName",placeholder:"Last name",value:t.state.account.lastName||"",onChange:t.handleChange})),s.a.createElement("div",{className:"col-12"},s.a.createElement("label",{htmlFor:"location"},"Location"),s.a.createElement("input",{name:"location",type:"text",className:"form-control mb-3",id:"location",placeholder:"City, Country",value:t.state.account.location||"",onChange:t.handleChange})),s.a.createElement("div",{className:"col-12"},s.a.createElement("label",{htmlFor:"speakingGoal"},"What is your primary goal as a speaker?"," ",s.a.createElement("span",{className:"small text-muted"},"This helps us align the product experience with your goals.")),s.a.createElement("select",{className:"custom-select mb-3",id:"speakingGoalSelected",name:"speakingGoalSelected",value:t.state.account.speakingGoalSelected||"",onChange:t.handleSelectedSpeakingGoalChange},s.a.createElement("option",{value:""}," "),u.map(function(e,a){return s.a.createElement("option",{key:a,value:e},e)}),s.a.createElement("option",{value:"Other"},"Other")),"Other"===t.state.account.speakingGoalSelected?s.a.createElement("input",{name:"speakingGoal",type:"text",className:"form-control mb-3",id:"speakingGoal",placeholder:"Be specific, eg: 'Speak at 10 new conferences this year.'",value:t.state.account.speakingGoal||"",onChange:t.handleChange}):""),s.a.createElement("div",{className:"col-12"},s.a.createElement("input",{type:"submit",value:t.props.saveButtonText||"Save",className:"btn btn-success btn-lg btn-block mb-3"})),s.a.createElement("div",{className:"col-12"},t.state.status===i.a.ERROR?s.a.createElement("div",{className:"alert alert-danger"},s.a.createElement("strong",null,"Whoops! Something went wrong.")," Check the console to learn more or contact support for help."):"",t.state.status===i.a.SAVED?s.a.createElement("div",{className:"alert alert-success"},s.a.createElement("strong",null,"Account saved!")," You can now carry on with your day."):""))},t.state={status:i.a.READY,account:{email:"",firstName:"",lastName:"",location:"",speakingGoal:"",speakingGoalSelected:""}},a.auth&&a.auth.user){var n=Object(r.a)(a.auth.user);t.state={account:Object.assign({},t.state.account,n,{speakingGoalSelected:n.speakingGoal?u.includes(n.speakingGoal)?n.speakingGoal:"Other":n.speakingGoal}),status:i.a.READY}}return t.apiClient=new o.a,t}return l()(a,e),a}(s.a.Component);a.a=m},371:function(e,a,t){var n=t(30),l=t(41);t(372)("keys",function(){return function(e){return l(n(e))}})},372:function(e,a,t){var n=t(11),l=t(16),c=t(15);e.exports=function(e,a){var t=(l.Object||{})[e]||Object[e],s={};s[e]=a(t),n(n.S+n.F*c(function(){t(1)}),"Object",s)}}}]);
//# sourceMappingURL=component---src-pages-c-profile-js-8172737378fddba4072e.js.map