(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return d});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(160),c=n(163),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(s.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=u;var d="1097489062"},157:function(t,e,n){var a;t.exports=(a=n(162))&&a.default||a},158:function(t,e,n){"use strict";n.d(e,"b",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(33),c=n.n(s);n.d(e,"a",function(){return c.a});n(157);var u=r.a.createContext({}),d=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u});var a=n(165),r=n.n(a),i=n(166),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new r.a(o.a);var c=s.rhythm,u=s.scale},160:function(t,e,n){"use strict";var a=n(7),r=n.n(a),i=n(161),o=n(0),s=n.n(o),c=n(158),u=n(159),d=(n(147),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return s.a.createElement(c.b,{query:l,render:function(e){return s.a.createElement("main",{style:{margin:Object(u.a)(1.3)+" "+Object(u.a)(1)},className:"main"},s.a.createElement("div",{className:"content"},t))},data:i})},e}(s.a.Component)),l="1624601695";e.a=d},161:function(t){t.exports={data:{site:{siteMetadata:{author:"Jenssen Lee"}}}}},162:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(55),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},163:function(t,e,n){"use strict";var a=n(164),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(167),u=n.n(c);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,s=t.title,c=a.data.site,d=e||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d},164:function(t){t.exports={data:{site:{siteMetadata:{title:"Jenssen Lee",description:"Blog on my coding and tech experience",author:"Jenssen Lee"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-cd0fe0c0c83d4e4881a0.js.map