(this.webpackJsonpbrovid=this.webpackJsonpbrovid||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(7),o=a.n(c),l=(a(13),a(4)),s=a(1),u=a(2),d=a(3),h=a(5);!function(e){e.Healthy="#1eb2a6",e.Infected="#f67575"}(n||(n={}));var m=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.refs.canvas.getContext("2d");e&&e.clearRect(0,0,500,500);var t,a=Object(l.a)(this.props.particles);try{for(a.s();!(t=a.n()).done;){var n=t.value;e&&(e.save(),e.beginPath(),e.arc(n.x,n.y,3,0,2*Math.PI),e.fillStyle=n.state,e.fill(),e.restore())}}catch(r){a.e(r)}finally{a.f()}}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("canvas",{ref:"canvas",width:500,height:500}))}}]),a}(i.a.Component),v=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rAF:0,particles:e.generateNRandomParticles(300),startTime:new Date},e.updateAnimationState=function(){var t=requestAnimationFrame(e.updateAnimationState),a=e.moveParticles();a=e.updateParticlesState(a),e.setState({rAF:t,particles:a})},e}return Object(u.a)(a,[{key:"updateParticlesState",value:function(e){for(var t=0;t<e.length;t++)if(e[t].state===n.Infected)for(var a=0;a<e.length;a++)e[a].state===n.Healthy&&this.calculateDistance(e[t],e[a])<10&&Math.random()<.01&&(e[a].state=n.Infected);return e}},{key:"calculateDistance",value:function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}},{key:"moveParticles",value:function(){var e,t=[],a=Object(l.a)(this.state.particles);try{for(a.s();!(e=a.n()).done;){var n=e.value,r=n.x+n.dx,i=n.y+n.dy,c=this.isInRange(r,500)?n.dx:-n.dx,o=this.isInRange(i,500)?n.dy:-n.dy;t.push({x:r,y:i,dx:c,dy:o,state:n.state})}}catch(s){a.e(s)}finally{a.f()}return t}},{key:"elapsedMiliseconds",value:function(e,t){return t.getDate()-this.state.startTime.getTime()>e}},{key:"isInRange",value:function(e,t){return e>=3&&e<=t-3}},{key:"componentDidMount",value:function(){var e=requestAnimationFrame(this.updateAnimationState);this.setState({rAF:e})}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.state.rAF)}},{key:"generateRandomParticle",value:function(){return{x:3+494*Math.random(),y:3+494*Math.random(),dx:3*(Math.random()-.5),dy:3*(Math.random()-.5),state:Math.random()>=.05?n.Healthy:n.Infected}}},{key:"generateNRandomParticles",value:function(e){for(var t=[],a=0;a<e;a++)t.push(this.generateRandomParticle());return t}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m,{particles:this.state.particles}))}}]),a}(i.a.Component);a(14);var f=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"brovid simulation environment"),i.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.692e6ca6.chunk.js.map