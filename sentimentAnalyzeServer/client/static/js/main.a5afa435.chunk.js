(this.webpackJsonpsentimentanalyzeclient=this.webpackJsonpsentimentanalyzeclient||[]).push([[0],{11:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var i=n(2),s=n.n(i),a=n(21),c=n.n(a),r=(n(26),n(4)),o=n(5),u=n(7),l=n(6),d=(n(11),n(27),n(0)),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"What is the time"}),Object(d.jsx)("table",{className:"table table-bordered",children:Object(d.jsx)("tbody",{children:Object.entries(this.props.emotions).map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t[0]}),Object(d.jsx)("td",{children:t[1]})]})}))})})]})}}]),n}(s.a.Component),j=n(10),b=n.n(j),x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={innercomp:Object(d.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(d.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(d.jsx)("textarea",{rows:"1",cols:"50",id:"textinput"}),mode:"url",sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".";e="url"===t.state.mode?e+"/url/sentiment?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,b.a.get(e).then((function(e){t.setState({sentimentOutput:e.data});var n=e.data;n="positive"===e.data?Object(d.jsx)("div",{style:{color:"green",fontSize:20},children:e.data}):"negative"===e.data?Object(d.jsx)("div",{style:{color:"red",fontSize:20},children:e.data}):Object(d.jsx)("div",{style:{color:"orange",fontSize:20},children:e.data}),t.setState({sentimentOutput:n})}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e=".";e="url"===t.state.mode?e+"/url/emotion?url="+document.getElementById("textinput").value:e+"/text/emotion/?text="+document.getElementById("textinput").value,b.a.get(e).then((function(e){t.setState({sentimentOutput:Object(d.jsx)(m,{emotions:e.data})})}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.title="Sentiment Analyzer"}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(d.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),this.state.innercomp,Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(d.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(d.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(s.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),s(t),a(t),c(t)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),p()}},[[47,1,2]]]);
//# sourceMappingURL=main.a5afa435.chunk.js.map