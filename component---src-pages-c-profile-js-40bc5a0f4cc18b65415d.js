(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{174:function(e,t,a){"use strict";a.r(t);var n=a(8),o=a.n(n),c=a(0),s=a.n(c),l=a(201),i=a(204),r=a(202),u=a(395),m=a(203),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).login=function(e){e.preventDefault(),t.props.authClient.login()},t.render=function(){var e=t.props,a=e.location,n=e.auth;return s.a.createElement(i.a,{location:a,auth:n},s.a.createElement(r.a,{site:l.siteMetadata,title:"Your Account"}),s.a.createElement("div",{className:"container mt-3"},s.a.createElement("div",{className:"account-page"},n.isAuthenticated?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Edit Profile"),s.a.createElement(u.a,{auth:n})):s.a.createElement("a",{className:"nav-link",onClick:t.login,href:"#"},"Login"))))},t}return o()(t,e),t}(s.a.Component);t.default=Object(m.a)(p)},197:function(e,t,a){var n=a(21).f,o=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in o||a(14)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},354:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(42),a(65),a(26),a(392);var n=function(e){return Object.keys(e).forEach(function(t){return null===e[t]&&delete e[t]}),e}},392:function(e,t,a){var n=a(30),o=a(41);a(393)("keys",function(){return function(e){return o(n(e))}})},393:function(e,t,a){var n=a(11),o=a(16),c=a(15);e.exports=function(e,t){var a=(o.Object||{})[e]||Object[e],s={};s[e]=t(a),n(n.S+n.F*c(function(){a(1)}),"Object",s)}},394:function(e,t,a){"use strict";e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=void 0,o=void 0,c=void 0,s=[];return function(){var l=function(e){return"function"==typeof e?e():e}(t),i=(new Date).getTime(),r=!n||i-n>l;n=i;for(var u=arguments.length,m=Array(u),p=0;p<u;p++)m[p]=arguments[p];if(r&&a.leading)return a.accumulate?Promise.resolve(e.call(this,[m])).then(function(e){return e[0]}):Promise.resolve(e.call.apply(e,[this].concat(m)));if(o?clearTimeout(c):o=function(){var e={};return e.promise=new Promise(function(t,a){e.resolve=t,e.reject=a}),e}(),s.push(m),c=setTimeout(function(){var t=o;clearTimeout(c),Promise.resolve(a.accumulate?e.call(this,s):e.apply(this,s[s.length-1])).then(t.resolve,t.reject),s=[],o=null}.bind(this),l),a.accumulate){var h=s.length-1;return o.promise.then(function(e){return e[h]})}return o.promise}}},395:function(e,t,a){"use strict";a(93),a(197),a(29);var n=a(8),o=a.n(n),c=a(0),s=a.n(c),l=(a(410),a(199)),i=a(354),r=a(196),u=(a(411),a(394)),m=a.n(u);function p(e){var t=null;return function(){for(var a=[],n=0;n<arguments.length;n++)a[n]=arguments[n];t&&t();var o,c,s,l,i=e.apply(void 0,a),r=(o=i,c=null,s=null,l=new Promise(function(e,t){c=e,s=t}),o&&o.then(function(e){c&&c(e)},function(e){s&&s(e)}),{promise:l,resolve:function(e){c&&c(e)},reject:function(e){s&&s(e)},cancel:function(){c=null,s=null}});return t=r.cancel,r.promise}}var h=function(){return(h=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},g=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e=m()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=p(e)),{func:e}},e.prototype.getDebouncedFunction=function(e){var t,a=(t=this.config.options).key.apply(t,e);return null==a?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[a]||(this.debounceCache[a]=this._createDebouncedFunction()),this.debounceCache[a])},e}();var d=function(e,t,a){var n=h({},f,a),o=new g({func:e,wait:t,options:n});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o.getDebouncedFunction(e).func.apply(void 0,e)}},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleSearchableNameChange=function(e){a.setState(Object.assign({},a.state,{searchResults:[],searchStatus:e.target.value&&e.target.value.length>=3?r.a.LOADING:r.a.READY,searchableName:e.target.value})),e.target.value&&a.getDebouncedLocations(e.target.value).then(function(e){a.setState(Object.assign({},a.state,{searchResults:e.data.items,searchStatus:e.data.total>0?r.a.SAVING:r.a.ERROR}))})},a.selectLocation=function(e){a.props.updateLocation(Object.assign({},e,{locationName:e.friendlyName,locationPoint:e.latitude+","+e.longitude}))},a.handleOnFocus=function(e){a.setState(Object.assign({},a.state,{showOptions:!0}))},a.handleOnBlur=function(e){setTimeout(function(){a.state.showOptions&&a.props.updateLocation({locationName:a.state.searchableName,locationPoint:null})},50)},a.componentWillReceiveProps=function(e){e&&a.setState(Object.assign({},a.state,{searchableName:e.locationName,searchStatus:r.a.READY,searchResults:[],showOptions:!1,profileLocation:{locationName:e.locationName,locationPoint:e.locationPoint}}))},a.getIconFromSearchStatus=function(){return a.state.searchStatus===r.a.LOADING?"fa fa-hourglass":a.state.searchStatus===r.a.SAVING?"fa fa-list":"fa fa-search"},a.render=function(){return s.a.createElement("div",{className:"col-12"},s.a.createElement("label",{htmlFor:"locationName"},"Location"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{name:"locationName",type:"text",className:"form-control",id:"locationName",placeholder:"Start typing to select your city",autoComplete:"off",value:a.state.searchableName,onChange:a.handleSearchableNameChange,onFocus:a.handleOnFocus,onBlur:a.handleOnBlur}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("span",{className:"input-group-text"},s.a.createElement("i",{className:a.getIconFromSearchStatus()})))),a.state.showOptions&&a.state.searchResults&&a.state.searchResults.length>0?s.a.createElement("div",{className:"dropdown-menu show location-dropdown-select"},a.state.searchResults.map(function(e){return s.a.createElement("button",{key:e.friendlyName,className:"dropdown-item",type:"button",onClick:function(){return a.selectLocation(e)},value:e},e.friendlyName)})):"")},a.state={searchableName:"",searchResults:[],searchStatus:r.a.READY,showOptions:!1,profileLocation:{locationName:"",locationPoint:""}},a.getDebouncedLocations=d(t.apiClient.getLocations,400),a}return o()(t,e),t}(s.a.Component),b=["Speak at my first conference","Speak at more conferences","Raise my acceptance rate","Speak internationally","Get a keynote speaking slot","Meet my quota for work"],N=function(e){function t(t){var a;if((a=e.call(this,t)||this).componentDidMount=function(){a.setState(Object.assign({},a.state,{status:r.a.LOADING}))},a.handleChange=function(e){var t;a.setState(Object.assign({},a.state,{account:Object.assign({},a.state.account,(t={},t[e.target.name]=e.target.value,t))}))},a.handleLocationChange=function(e){a.setState(Object.assign({},a.state,{account:Object.assign({},a.state.account,{location:e.locationName,locationPoint:e.locationPoint})}))},a.handleSelectedSpeakingGoalChange=function(e){var t=b.includes(e.target.value)?e.target.value:"";a.setState(Object.assign({},a.state,{account:Object.assign({},a.state.account,{speakingGoal:t,speakingGoalSelected:e.target.value})}))},a.handleSubmit=function(e){a.setState(Object.assign({},a.state,{status:r.a.SAVING})),e.preventDefault(),a.apiClient.patchMe(a.state.account).then(function(e){a.setState(Object.assign({},a.state,{status:r.a.SAVED})),a.props.onComplete&&a.props.onComplete()}).catch(function(e){console.error(e.message),a.setState(Object.assign({},a.state,{status:r.a.ERROR}))})},a.componentWillReceiveProps=function(e,t){if(e&&e.auth&&e.auth.user){var n=Object(i.a)(e.auth.user);a.setState(Object.assign({},a.state,{account:Object.assign({},a.state.account,n,{speakingGoalSelected:n.speakingGoal?b.includes(n.speakingGoal)?n.speakingGoal:"Other":n.speakingGoal}),status:r.a.READY}))}},a.render=function(){return s.a.createElement("form",{className:"row account-form",onSubmit:a.handleSubmit},s.a.createElement("div",{className:"col-12"},s.a.createElement("span",{className:"pull-right text-muted font-italic"},"Note: Profile information is ",s.a.createElement("strong",null,"not")," shared publicly."),s.a.createElement("label",{htmlFor:"emailInput"},"Email Address"),s.a.createElement("input",{name:"email",type:"email",className:"form-control mb-3",id:"emailInput",placeholder:"Your email",value:a.state.account.email||"",disabled:!0})),s.a.createElement("div",{className:"col-12 col-md-6"},s.a.createElement("label",{htmlFor:"first_name"},"First Name"),s.a.createElement("input",{name:"firstName",type:"text",className:"form-control mb-3",id:"firstName",placeholder:"First name",value:a.state.account.firstName||"",onChange:a.handleChange})),s.a.createElement("div",{className:"col-12 col-md-6"},s.a.createElement("label",{htmlFor:"last_name"},"Last Name"),s.a.createElement("input",{name:"lastName",type:"text",className:"form-control mb-3",id:"lastName",placeholder:"Last name",value:a.state.account.lastName||"",onChange:a.handleChange})),s.a.createElement(v,{locationName:a.state.account.location,locationPoint:a.state.account.locationPoint,updateLocation:a.handleLocationChange,apiClient:a.apiClient}),s.a.createElement("div",{className:"col-12"},s.a.createElement("label",{htmlFor:"speakingGoal"},"What is your primary goal as a speaker?"," ",s.a.createElement("span",{className:"small text-muted"},"This helps us align the product experience with your goals.")),s.a.createElement("select",{className:"custom-select mb-3",id:"speakingGoalSelected",name:"speakingGoalSelected",value:a.state.account.speakingGoalSelected||"",onChange:a.handleSelectedSpeakingGoalChange},s.a.createElement("option",{value:""}," "),b.map(function(e,t){return s.a.createElement("option",{key:t,value:e},e)}),s.a.createElement("option",{value:"Other"},"Other")),"Other"===a.state.account.speakingGoalSelected?s.a.createElement("input",{name:"speakingGoal",type:"text",className:"form-control mb-3",id:"speakingGoal",placeholder:"Be specific, eg: 'Speak at 10 new conferences this year.'",value:a.state.account.speakingGoal||"",onChange:a.handleChange}):""),s.a.createElement("div",{className:"col-12"},s.a.createElement("input",{type:"submit",value:a.props.saveButtonText||"Save",className:"btn btn-success btn-lg btn-block mb-3"})),s.a.createElement("div",{className:"col-12"},a.state.status===r.a.ERROR?s.a.createElement("div",{className:"alert alert-danger"},s.a.createElement("strong",null,"Whoops! Something went wrong.")," Check the console to learn more or contact support for help."):"",a.state.status===r.a.SAVED?s.a.createElement("div",{className:"alert alert-success"},s.a.createElement("strong",null,"Account saved!")," You can now carry on with your day."):""))},a.state={status:r.a.READY,account:{email:"",firstName:"",lastName:"",location:"",locationPoint:"",speakingGoal:"",speakingGoalSelected:""}},t.auth&&t.auth.user){var n=Object(i.a)(t.auth.user);a.state={account:Object.assign({},a.state.account,n,{speakingGoalSelected:n.speakingGoal?b.includes(n.speakingGoal)?n.speakingGoal:"Other":n.speakingGoal}),status:r.a.READY}}return a.apiClient=new l.a,a}return o()(t,e),t}(s.a.Component);t.a=N}}]);
//# sourceMappingURL=component---src-pages-c-profile-js-40bc5a0f4cc18b65415d.js.map