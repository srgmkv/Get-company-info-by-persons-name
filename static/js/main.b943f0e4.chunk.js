(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(13),i=a.n(o),l=(a(25),a(14)),c=a(15),r=a(17),u=a(16),f=a(2),h=a(18),d=a(3),g=a.n(d),m=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({fio:t.target.value}),e.setState({orgsInfo:null});var a=Object(f.a)(e);setTimeout(function(){g()({method:"POST",url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio",data:{query:a.state.fio},headers:{Authorization:"Token b8678ebf716355f62ab8f0a9d2afcbe82ea155c6","Content-Type":"application/json; charset=UTF-8",Accept:"application/json"}}).then(function(e){var t=e.data.suggestions.map(function(e){return e.value});a.setState({suggestions:t}),setTimeout(function(){a.setState({isSelectShown:a.state.suggestions.length>0})},0)}).catch(function(e){console.log(e)})},0)},e.handleSelectClick=function(t){var a=t.split(" "),n=3===a.length?t:t+" ";e.setState({isSelectShown:3!==a.length}),e.setState({isSelectShown:!1}),e.setState({fio:n}),e.textInput.current.focus()},e.handleSubmit=function(t){t.preventDefault(),t.stopPropagation(),e.setState({isSelectShown:!1});var a=Object(f.a)(e);g()({method:"POST",url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",data:{query:a.state.fio},headers:{Authorization:"Token b8678ebf716355f62ab8f0a9d2afcbe82ea155c6","Content-Type":"application/json; charset=UTF-8",Accept:"application/json"}}).then(function(e){console.log("response",e);var t=e.data.suggestions.map(function(e){return{value:e.value,inn:e.data.inn,address:e.data.address.value}});a.setState({orgsInfo:t})}).catch(function(e){console.log(e)})},e.textInput=s.a.createRef(),e.select=s.a.createRef(),e.state={fio:"",suggestions:[],selectedItem:null,isSelectShown:!1,orgsInfo:null},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.suggestions.map(function(t,a){return s.a.createElement("div",{className:"select-item",onClick:function(){return e.handleSelectClick(t)}},t)}),a=this.state.orgsInfo&&this.state.orgsInfo.map(function(e){return s.a.createElement("div",{className:"result"},s.a.createElement("div",null,s.a.createElement("span",{className:"field-name"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435:")," ",e.value),s.a.createElement("div",null,s.a.createElement("span",{className:"field-name"},"\u0418\u041d\u041d:")," ",e.inn),s.a.createElement("div",null,s.a.createElement("span",{className:"field-name"},"\u0410\u0434\u0440\u0435\u0441:")," ",e.address))});return s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"input"},s.a.createElement("input",{type:"text",ref:this.textInput,id:"fio",onChange:this.handleChange,onKeyUp:this.handleKeyPress,value:this.state.fio,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041e"}),s.a.createElement("button",null,"\u0418\u0441\u043a\u0430\u0442\u044c")),this.state.isSelectShown&&s.a.createElement("div",{ref:this.select,className:"select-list",size:"11"},s.a.createElement("div",{className:"select-item-sugg"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0439\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c"),t),this.state.orgsInfo&&a,this.state.orgsInfo&&0===this.state.orgsInfo.length&&s.a.createElement("div",{className:"no-result"},"\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}}]),t}(s.a.Component);i.a.render(s.a.createElement(m,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b943f0e4.chunk.js.map