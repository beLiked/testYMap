(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),r=a.n(o),l=(a(20),a(2)),i=a(3),s=a(5),u=a(4),p=a(6),d=(a(22),a(1)),m=a(7),h={center:[55.630527,37.849046],zoom:10,controls:[]},f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=h,a.onItemClick=function(e){a.setState({center:e})},a.render=function(){a.loadData();var e=Object(d.a)(Object(d.a)(a)),t=a.myMap;return c.a.createElement("div",null,c.a.createElement("select",{id:"select",name:"city",onChange:function(a){return function(a){for(var n=e.props.data,c=0,o=n.length;c<o;++c){var r=n[c];r.CITY===a.target.value&&t.setCenter([parseFloat(r.LAT),parseFloat(r.LNG)])}}(a)}},c.a.createElement("option",{selected:"selected"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434")),c.a.createElement(m.c,null,c.a.createElement(m.a,{width:"100%",height:"400px",state:a.state,onLoad:function(e){a.ymaps=e},instanceRef:function(e){a.myMap=e}},c.a.createElement(m.b,null))))},a.myMap=null,a.ymaps=null,a.loaded=!1,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"loadData",value:function(){var e=this.ymaps;if(e&&this.myMap&&!this.loaded){this.loaded=!0;var t={};this.myMap.geoObjects.removeAll(),this.props.data.sort(function(e,t){return e.CITY<t.CITY?-1:e.CITY>t.CITY?1:0});for(var a=document.getElementById("select"),n=0,c=this.props.data.length;n<c;++n){var o=this.props.data[n],r=[parseFloat(o.LAT),parseFloat(o.LNG)],l=new e.Placemark(r);if(this.myMap.geoObjects.add(l),!t[o.CITY]){t[o.CITY]=1;var i=document.createElement("option");i.value=o.CITY,i.innerHTML=o.CITY,a.appendChild(i)}}console.log(this.props)}}}]),t}(c.a.Component),v=a(10),b=a.n(v),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043b \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"),c.a.createElement("input",{type:"file",name:"file",onChange:function(t){b.a.parse(t.target.files[0],{header:!0,skipEmptyLines:!0,complete:function(t){e.setState({data:t.data})}})},accept:".csv",style:{display:"block",margin:"10px auto"}}),c.a.createElement(f,{data:this.state.data}))}}]),t}(c.a.Component),g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,25)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null))),g()}},[[11,3,2]]]);
//# sourceMappingURL=main.13d8a5ba.chunk.js.map