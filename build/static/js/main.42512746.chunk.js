(this["webpackJsonprandolorian-deploy"]=this["webpackJsonprandolorian-deploy"]||[]).push([[0],{36:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var o=n(2),s=n(0),i=n.n(s),c=n(14),r=n.n(c),a=n(22),l=n(23),d=n(29),j=n(28),u=(n(45),function(e){return Object(o.jsxs)("div",{className:"header justify-content-center",children:[Object(o.jsx)("h1",{children:e.title}),Object(o.jsx)("h2",{children:e.subtitles})]})}),h=n(11),p=(n(46),function(e){return Object(o.jsx)("div",{className:"action-container",children:Object(o.jsx)(h.a,{style:{color:"#CF5C36"},className:"btn rounded-0 btn-lg",variant:"primary",onClick:e.chooseHandler,disabled:!e.hasOptions,children:"Show me the way."})})}),O=(n(47),function(e){return Object(o.jsxs)("div",{className:"flexed",children:[Object(o.jsxs)("p",{className:"option-text",children:[" ",Object(o.jsx)("strong",{children:e.option})]}),Object(o.jsx)(h.a,{className:"btn btn-outline-secondary rounded-0 btn-sm",onClick:function(t){return e.removeOneHandler(e.option)},children:"X"})]})}),b=n(39),m=(n(48),function(e){return Object(o.jsxs)(b.a,{className:"card text-secondary bg-primary rounded-0",children:[Object(o.jsxs)("div",{className:"card-header",children:[Object(o.jsx)("h4",{className:"card-header-text",children:"Options:"}),Object(o.jsx)(h.a,{className:"btn btn-outline-secondary rounded-0",onClick:e.removeAllHandler,disabled:!e.hasOptions,children:"Remove All"})]}),Object(o.jsxs)("div",{className:"card-body overflow-auto",children:[e.options.map((function(t){return Object(o.jsx)(O,{option:t,removeOneHandler:e.removeOneHandler},t)})),!e.hasOptions&&Object(o.jsx)("p",{className:"options-alert text-center text-secondary",children:Object(o.jsx)("strong",{children:"Please add some options."})})]})]})}),f=n(37),x=n(35),v=n(24),y=n(38),N=(n(49),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={error:void 0},o.formSubmit=function(e){e.preventDefault();var t=e.target.elements.option.value.trim(),n=o.props.handleAddOption(t);n||(e.target.elements.option.value=""),e.target.elements.option.focus(),o.setState((function(){return{error:n}}))},o}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(f.a,{className:"my-form",onSubmit:this.formSubmit,children:Object(o.jsxs)(x.a,{className:"my-input",children:[Object(o.jsx)(v.a,{name:"option",autoComplete:"off",className:"rounded-0",placeholder:"Your Option"}),Object(o.jsx)(x.a.Append,{children:Object(o.jsx)(h.a,{type:"submit",className:"btn-primary text-secondary rounded-0",children:Object(o.jsx)("strong",{children:"Add"})})})]})}),this.state.error&&Object(o.jsx)(y.a,{className:"bg-primary text-secondary rounded-0 my-alert",children:this.state.error})]})}}]),n}(i.a.Component)),g=n(20),w=function(e){return Object(o.jsxs)(g.a,{size:"sm",show:!!e.selectedOption,onHide:e.closeHandler,centered:!0,children:[Object(o.jsx)(g.a.Header,{closeButton:!0,children:Object(o.jsx)(g.a.Title,{children:"This is the way"})}),Object(o.jsx)(g.a.Body,{children:e.selectedOption}),Object(o.jsx)(g.a.Footer,{children:Object(o.jsx)(h.a,{variant:"secondary",onClick:e.closeHandler,children:"Close"})})]})},S=(n(36),n(53),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={options:[],selectedOption:void 0,title:"The Randolorian",subtitle:"I will decide..."},o.addNewOption=function(e){return e?o.state.options.indexOf(e)>-1?"Option already exists!":void o.setState((function(t){return{options:t.options.concat(e)}})):"Don't add spaces!"},o.removeOneOption=function(e){o.setState((function(t){return{options:t.options.filter((function(t){return t!==e}))}}))},o.removeAllOptions=function(){o.setState((function(){return{options:[]}}))},o.chooseOption=function(){var e=Math.floor(Math.random()*o.state.options.length),t=o.state.options[e];o.setState((function(){return{selectedOption:t}}))},o.closeModal=function(){o.setState((function(){return{selectedOption:void 0}}))},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("options"),t=JSON.parse(e);t&&this.setState((function(){return{options:t}}))}catch(n){this.setState((function(){return{options:[]}}))}}},{key:"componentDidUpdate",value:function(e,t){if(t.options.length!==this.state.options.length){var n=JSON.stringify(this.state.options);localStorage.setItem("options",n)}}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container-fluid my-container",children:[Object(o.jsx)("div",{className:"row header-row",children:Object(o.jsx)("div",{className:"col col-header",children:Object(o.jsx)(u,{title:this.state.title,subtitles:this.state.subtitle})})}),Object(o.jsx)("div",{className:"row justify-content-center action-row",children:Object(o.jsx)(p,{hasOptions:this.state.options.length>1,chooseHandler:this.chooseOption})}),Object(o.jsx)("div",{className:"row justify-content-center options-row",children:Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)(m,{options:this.state.options,hasOptions:this.state.options.length>0,removeAllHandler:this.removeAllOptions,removeOneHandler:this.removeOneOption})})}),Object(o.jsx)("div",{className:"row justify-content-center add-option-row",children:Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)(N,{handleAddOption:this.addNewOption})})}),Object(o.jsx)(w,{selectedOption:this.state.selectedOption,closeHandler:this.closeModal})]})}}]),n}(i.a.Component));n(54),n(55);r.a.render(Object(o.jsx)(S,{}),document.getElementById("app"))}},[[56,1,2]]]);
//# sourceMappingURL=main.42512746.chunk.js.map