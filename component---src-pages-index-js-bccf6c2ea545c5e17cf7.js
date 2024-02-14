(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(7),r=a.n(n),o=a(0),s=a.n(o),i=a(157),l=(a(159),a(164)),c=a(162),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return console.log("data",e),s.a.createElement(l.a,{location:e.location,title:t},s.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),s.a.createElement("h1",{className:"home-name"},"Jenssen Lee"),s.a.createElement("p",{className:"home-job-title"},"Software Engineer"),s.a.createElement("p",null,"My name is Jenssen Lee or @jenlky on the internet."),s.a.createElement("p",null,"I'm a Software Engineer in Singapore."," ",s.a.createElement("sup",{className:"home-hire"},"(Available for hire!)")),s.a.createElement("p",null,"This site contains my essays on technology, software development and whatever is on my mind at the moment. The projects page holds a portfolio of my projects."),s.a.createElement("h3",{className:"recent-essays"},"Recent Essays"),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{className:"essays",key:t.fields.slug},s.a.createElement("h3",{style:{margin:0}},s.a.createElement(i.a,{className:"essays-uri",to:t.fields.slug},a)),s.a.createElement("small",null,t.frontmatter.date))}),s.a.createElement("div",{className:"view-archived-wrapper"},s.a.createElement(i.a,{to:"/blog",className:"view-archived"},"View All ",e.allMarkdownRemark.totalCount," Essays")))},t}(s.a.Component);t.default=u;var m="3605701810"},157:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(33),l=a.n(i);a.d(t,"a",function(){return l.a});a(158);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},158:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},159:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var n=a(165),r=a.n(n),o=a(166),s=a.n(o);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var i=new r.a(s.a);var l=i.rhythm,c=i.scale},160:function(e){e.exports={data:{site:{siteMetadata:{author:"Jenssen Lee"}}}}},161:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},162:function(e,t,a){"use strict";var n=a(163),r=a(0),o=a.n(r),s=a(4),i=a.n(s),l=a(167),c=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,i=e.title,l=n.data.site,u=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Jenssen Lee",description:"Blog on my coding and tech experience",author:"Jenssen Lee"}}}}},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(160),s=a(0),i=a.n(s),l=a(157),c=a(159),u=(a(147),function(){return i.a.createElement("nav",{className:"menu"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/blog"},"Blog")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/projects"},"Projects"))))}),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(l.b,{query:d,render:function(t){return i.a.createElement("main",{style:{margin:Object(c.a)(1.3)+" "+Object(c.a)(1)},className:"main"},i.a.createElement("div",{className:"content"},e),i.a.createElement(u,null))},data:o})},t}(i.a.Component),d="1624601695";t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-bccf6c2ea545c5e17cf7.js.map