(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(l){s=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,r){var n=r(2858),a=r(3884),o=r(379),i=r(521);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(e)}r["%C2"]="�";for(var s=Object.keys(r),l=0;l<s.length;l++){var c=s[l];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],s=e[i];(a?-1!==t.indexOf(i):t(i,s,e))&&(r[i]=s)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),a=r(3038),o=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=r(8936),c=r(7091),u=r(4734),d=r(8616),p=Symbol("encodeFragmentIdentifier");function f(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?l(e):encodeURIComponent(e):e}function g(e,t){return t.decode?c(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function h(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=h(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function x(e,t){f((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&g(r,e).includes(e.arrayFormatSeparator);r=o?g(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)})):null===r?r:g(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o}else n[t]=r?g(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,s=i(e.split("&"));try{for(s.s();!(o=s.n()).done;){var l=o.value;if(""!==l){var c=u(t.decode?l.replace(/\+/g," "):l,"="),d=a(c,2),p=d[0],m=d[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?m:g(m,t),r(g(p,t),m,n)}}}catch(E){s.e(E)}finally{s.f()}for(var h=0,v=Object.keys(n);h<v.length;h++){var x=v[h],k=n[x];if("object"==typeof k&&null!==k)for(var w=0,S=Object.keys(k);w<S.length;w++){var C=S[w];k[C]=b(k[C],t)}else n[x]=b(k,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=x,t.stringify=function(e,t){if(!e)return"";f((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[m(t,e),"[",a,"]"].join("")]:[[m(t,e),"[",m(a,e),"]=",m(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[m(t,e),"[]"].join("")]:[[m(t,e),"[]=",m(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[m(t,e),":list="].join("")]:[[m(t,e),":list=",m(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[m(r,e),t,m(a,e)].join("")]:[[n,m(a,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[m(t,e)]:[[m(t,e),"=",m(n,e)].join("")])}}}}(t),a={},i=0,s=Object.keys(e);i<s.length;i++){var l=s[i];r(l)||(a[l]=e[l])}var c=Object.keys(a);return!1!==t.sort&&c.sort(t.sort),c.map((function(r){var a=e[r];return void 0===a?"":null===a?m(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?m(r,t)+"[]":a.reduce(n(r),[]).join("&"):m(r,t)+"="+m(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=u(e,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:x(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var a=h(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),s=Object.assign(i,e.query),l=t.stringify(s,r);l&&(l="?".concat(l));var c=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c="#".concat(r[p]?m(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(a).concat(l).concat(c)},t.pick=function(e,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},p,!1),a);var o=t.parseUrl(e,a),i=o.url,s=o.query,l=o.fragmentIdentifier;return t.stringifyUrl({url:i,query:d(s,r),fragmentIdentifier:l},a)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},9230:function(e,t,r){"use strict";r.d(t,{G:function(){return N},L:function(){return m},M:function(){return k},P:function(){return x},_:function(){return s},a:function(){return i},b:function(){return c},g:function(){return u},h:function(){return l}});var n=r(7294),a=(r(2369),r(5697)),o=r.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,n,a){return void 0===a&&(a={}),i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function u(e,t,r,n,a,o,s,l){var c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,p=["children"],f=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,r=s(e,p);return n.createElement(n.Fragment,null,n.createElement(f,i({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],h=function(e){var t=e.src,r=e.srcSet,a=e.loading,o=e.alt,l=void 0===o?"":o,c=e.shouldLoad,u=s(e,g);return n.createElement("img",i({},u,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},v=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,o=e.shouldLoad,l=void 0===o||o,c=s(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(h,i({},c,t,{sizes:u,shouldLoad:l}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:u})})),d):d};h.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var b=["fallback"],x=function(e){var t=e.fallback,r=s(e,b);return t?n.createElement(v,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};x.displayName="Placeholder",x.propTypes={fallback:a.string,sources:null==(d=v.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var k=function(e){return n.createElement(n.Fragment,null,n.createElement(v,i({},e)),n.createElement("noscript",null,n.createElement(v,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;var w,S,C=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),i=3;i<n;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},E={image:o().object.isRequired,alt:C},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],O=new Set,j=function(e){var t=e.as,a=void 0===t?"div":t,o=e.image,c=e.style,u=e.backgroundColor,d=e.className,p=e.class,f=e.onStartLoad,m=e.onLoad,g=e.onError,y=s(e,_),h=o.width,v=o.height,b=o.layout,x=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(h,v,b),k=x.style,C=x.className,E=s(x,A),j=(0,n.useRef)(),N=(0,n.useMemo)((function(){return JSON.stringify(o.images)}),[o.images]);p&&(d=p);var I=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,h,v);return(0,n.useEffect)((function(){w||(w=Promise.all([r.e(774),r.e(36)]).then(r.bind(r,9036)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return S=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=j.current.querySelector("[data-gatsby-image-ssr]");return n&&l()?(n.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void O.add(N)):S&&O.has(N)?void 0:(w.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;j.current.innerHTML=n(i({isLoading:!0,isLoaded:O.has(N),image:o},y)),O.has(N)||(e=requestAnimationFrame((function(){j.current&&(t=a(j.current,N,O,c,f,m,g))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[o]),(0,n.useLayoutEffect)((function(){O.has(N)&&S&&(j.current.innerHTML=S(i({isLoading:O.has(N),isLoaded:O.has(N),image:o},y)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,n.createElement)(a,i({},E,{style:i({},k,c,{backgroundColor:u}),className:C+(d?" "+d:""),ref:j,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},N=(0,n.memo)((function(e){return e.image?(0,n.createElement)(j,e):null}));N.propTypes=E,N.displayName="GatsbyImage";var I,T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],L=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),F={src:o().string.isRequired,alt:C,width:L,height:L,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},Z=(I=N,function(e){var t=e.src,r=e.__imageData,a=e.__error,o=s(e,T);return a&&console.warn(a),r?n.createElement(I,i({image:r},o)):(console.warn("Image not loaded",t),null)});Z.displayName="StaticImage",Z.propTypes=F},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,n=r,r=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},5324:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(7294),a=r.t(n,2);var o=r(7462),i=r(7548),s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=(0,i.Z)((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=r(4043),u=r(4660),d=r(4418),p=l,f=function(e){return"theme"!==e},m=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:f},g=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},y=a.useInsertionEffect?a.useInsertionEffect:function(e){e()};var h=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;(0,u.hC)(t,r,n);y((function(){return(0,u.My)(t,r,n)}));return null},v=function e(t,r){var a,i,s=t.__emotion_real===t,l=s&&t.__emotion_base||t;void 0!==r&&(a=r.label,i=r.target);var p=g(t,r,s),f=p||m(l),y=!f("as");return function(){var v=arguments,b=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&b.push("label:"+a+";"),null==v[0]||void 0===v[0].raw)b.push.apply(b,v);else{0,b.push(v[0][0]);for(var x=v.length,k=1;k<x;k++)b.push(v[k],v[0][k])}var w=(0,c.w)((function(e,t,r){var a=y&&e.as||l,o="",s=[],g=e;if(null==e.theme){for(var v in g={},e)g[v]=e[v];g.theme=(0,n.useContext)(c.T)}"string"==typeof e.className?o=(0,u.fp)(t.registered,s,e.className):null!=e.className&&(o=e.className+" ");var x=(0,d.O)(b.concat(s),t.registered,g);o+=t.key+"-"+x.name,void 0!==i&&(o+=" "+i);var k=y&&void 0===p?m(a):f,w={};for(var S in e)y&&"as"===S||k(S)&&(w[S]=e[S]);return w.className=o,w.ref=r,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(h,{cache:t,serialized:x,isStringTag:"string"==typeof a}),(0,n.createElement)(a,w))}));return w.displayName=void 0!==a?a:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=l,w.__emotion_styles=b,w.__emotion_forwardProp=p,Object.defineProperty(w,"toString",{value:function(){return"."+i}}),w.withComponent=function(t,n){return e(t,(0,o.Z)({},r,n,{shouldForwardProp:g(w,n,!0)})).apply(void 0,b)},w}},b=r(1597),x=r(3431),k=["active"],w=v((function(e){e.active;var t=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,k);return(0,x.tZ)(b.rU,t)}),{target:"e1kn8q5k0"})("font-size:17px;font-weight:",(function(e){return e.active?"800":"400"}),";color:",(function(e){return e.active?"#333333":"#6f6f6f"}),";cursor:pointer;&:last-of-type{margin-right:0;}"),S=function(e){var t=e.selectedCategory,r=e.categoryList;return(0,x.tZ)(n.Fragment,null,Object.entries(r).map((function(e){var r=e[0],n=e[1];return(0,x.tZ)(w,{to:"/?category="+r,active:r===t,key:r},"# ",r," ",n)})))},C=r(4703),E=function(){return(0,x.tZ)(n.Fragment,null,(0,x.tZ)("header",{className:"site-head"},(0,x.tZ)("div",{className:"head-container"},(0,x.tZ)("div",{className:"head-mast"},(0,x.tZ)(b.rU,{to:"/"},(0,x.tZ)("img",{className:"head-logo",src:C.Z,alt:"로고"})),(0,x.tZ)("div",{className:"mast-left"})),(0,x.tZ)("div",{className:"head-main"},(0,x.tZ)("h2",{className:"main-text"},"안녕하세요. 한국시니어 연구소 기술 블로그입니다."),(0,x.tZ)("h5",{className:"sub-text"},"함께 일하고, 함께 성장하기 위해 끊임없이 고민합니다."),(0,x.tZ)("a",{className:"recruit",href:"https://recruit.kslab.co.kr/",target:"_blank"},"RECRUIT")))))},_=r(2993),A=r(9230),O=function(e){var t=e.title,r=e.date,n=e.categories,a=e.summary,o=e.thumbnail,i=e.link;return(0,x.tZ)(b.rU,{className:"post-list",to:i},(0,x.tZ)(A.G,{className:"post-thumbnail",image:o.childImageSharp.gatsbyImageData,alt:"post thumbnail img"}),(0,x.tZ)("div",{className:"post-items"},(0,x.tZ)("div",{className:"post-title"},t),(0,x.tZ)("div",{className:"post-date"},r),(0,x.tZ)("div",{className:"post-category"},n.map((function(e){return(0,x.tZ)("div",{className:"category-items",key:e},e)}))),(0,x.tZ)("div",{className:"summary"},a)))},j=function(e){var t=e.selectedCategory,r=e.posts,a=(0,n.useMemo)((function(){return r.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]);return(0,x.tZ)(n.Fragment,null,(0,x.tZ)("div",{className:"post-wrapper"},a.map((function(e){var t=e.node,r=t.id,n=t.fields.slug,a=t.frontmatter;return(0,x.tZ)(O,(0,o.Z)({},a,{link:n,key:r}))}))))},N=r(2203),I=r(9937),T=function(e){var t=e.location.search,r=e.data,a=r.site.siteMetadata,o=a.title,i=a.description,s=a.siteUrl,l=r.allMarkdownRemark.edges,c=N.parse(t),u="string"==typeof c.category&&c.category?c.category:"All",d=(0,n.useMemo)((function(){return l.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,x.tZ)(I.Z,{title:o,description:i,url:s,image:"https://imagedelivery.net/jfIRjXneURbVKR0daxEchg/47c2b31f-48ad-4d52-f37f-93a6acfbb100/public"},(0,x.tZ)(E,null),(0,x.tZ)("div",null,(0,x.tZ)("div",{className:"main-category-wrapper"},(0,x.tZ)(S,{selectedCategory:u,categoryList:d})),(0,x.tZ)("div",{className:"list"},(0,x.tZ)(j,{selectedCategory:u,posts:l}))),(0,x.tZ)(_.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-be5b37adbd4605735055.js.map