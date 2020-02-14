(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{187:function(e,a,t){"use strict";t.r(a);var n=t(8),c=t.n(n),s=t(0),r=t.n(s),o=t(200),m=t(203),l=t(201),i=(t(196),t(29),t(487),t(198)),u=t(195),h=t(64),f=function(e){function a(a){var t;return(t=e.call(this,a)||this).componentDidMount=function(){t.setState(Object.assign({},t.state,{status:u.a.LOADING}))},t.handleChange=function(e){var a;t.setState(Object.assign({},t.state,{communicationPreferences:Object.assign({},t.state.communicationPreferences,(a={},a[e.target.name]=e.target.checked,a))}))},t.handleSubmit=function(e){t.setState(Object.assign({},t.state,{status:u.a.SAVING})),e.preventDefault(),t.apiClient.patchMe({communicationPreferences:t.state.communicationPreferences}).then(function(){t.setState(Object.assign({},t.state,{status:u.a.SAVED}))}).catch(function(e){console.error(e.message),t.setState(Object.assign({},t.state,{status:u.a.ERROR}))})},t.componentWillReceiveProps=function(e,a){e&&e.auth&&e.auth.user&&t.setState(Object.assign({},t.state,{communicationPreferences:Object.assign({},t.state.communicationPreferences,e.auth.user.communicationPreferences),status:u.a.READY}))},t.render=function(){return r.a.createElement("form",{className:"row account-form",onSubmit:t.handleSubmit},r.a.createElement("div",{className:"col-12 mb-4"},r.a.createElement("p",null,"Select the notifications you would like to receive."),r.a.createElement("h5",{className:"mt-3"},"Saved CFPs"),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",name:"savedConferences",type:"checkbox",checked:t.state.communicationPreferences.savedConferences,onChange:t.handleChange,id:"savedConferences"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"savedConferences"},"Receive email notifications 21, 7, and 2 days before any of your"," ",r.a.createElement(h.Link,{to:"/c/saved/"},r.a.createElement("i",{className:"fa fa-star"})," Saved CFPs")," ","close.")),r.a.createElement("h5",{className:"mt-3"},"Saved Searches"),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",name:"savedSearches",type:"checkbox",checked:t.state.communicationPreferences.savedSearches,onChange:t.handleChange,id:"savedSearches"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"savedSearches"},"Receive daily email notifications when new CFPs match any of your"," ",r.a.createElement(h.Link,{to:"/c/searches/"},r.a.createElement("i",{className:"fa fa-search"})," Saved Searches"),".")),r.a.createElement("h5",{className:"mt-3"},"Weekly Summary"),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",name:"weeklySummary",type:"checkbox",checked:t.state.communicationPreferences.weeklySummary,onChange:t.handleChange,id:"weeklySummary"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"weeklySummary"},"Receive a weekly email summary of your CFP Land Pro activity."))),r.a.createElement("div",{className:"col-12"},r.a.createElement("input",{type:"submit",value:"Save",className:"btn btn-success btn-lg btn-block mb-3"})),r.a.createElement("div",{className:"col-12"},t.state.status===u.a.ERROR?r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("strong",null,"Whoops! Something went wrong.")," Check the console to learn more or contact support for help."):"",t.state.status===u.a.SAVED?r.a.createElement("div",{className:"alert alert-success"},r.a.createElement("strong",null,"Communication preferences saved!")," You can now carry on with your day."):""))},t.state={status:u.a.READY,communicationPreferences:{savedConferences:!0,savedSearches:!0,weeklySummary:!0}},t.apiClient=new i.a,t}return c()(a,e),a}(r.a.Component),d=t(202),v=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(a=e.call.apply(e,[this].concat(n))||this).componentWillReceiveProps=function(e,a){e&&e.auth&&!e.auth.isAuthenticated&&(window.location.href="/")},a.render=function(){var e=a.props,t=e.location,n=e.auth;return r.a.createElement(m.a,{location:t,auth:n},r.a.createElement(l.a,{site:o.siteMetadata,title:"Your Account"}),r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"account-page"},n.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Communication Preferences"),r.a.createElement(f,{auth:n})):"")))},a}return c()(a,e),a}(r.a.Component);a.default=Object(d.a)(v)},196:function(e,a,t){var n=t(21).f,c=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in c||t(14)&&n(c,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-c-communication-js-1bfc5974545b072e12d4.js.map