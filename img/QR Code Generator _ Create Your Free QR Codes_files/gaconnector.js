var gaconnector2=function(){var a,l=!0,o=function(e){function S(e,t){return e>>>t|e<<32-t}function A(e,t){return e>>>t}var t,E=new Array(1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998);function R(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}return function(e){for(var t,n="0123456789abcdef",o="",r=0;r<e.length;r++)t=e.charCodeAt(r),o+=n.charAt(t>>>4&15)+n.charAt(15&t);return o}(function(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255);return t}(function(e,t){var n,o,r,a,c,i,d,u,l,f,g,m,s,h,v,p,y,w,_,b,C=new Array(1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225),I=new Array(64);for(e[t>>5]|=128<<24-t%32,e[15+(64+t>>9<<4)]=t,l=0;l<e.length;l+=16){for(n=C[0],o=C[1],r=C[2],a=C[3],c=C[4],i=C[5],d=C[6],u=C[7],f=0;f<64;f++)I[f]=f<16?e[f+l]:R(R(R(S(b=I[f-2],17)^S(b,19)^A(b,10),I[f-7]),S(_=I[f-15],7)^S(_,18)^A(_,3)),I[f-16]),g=R(R(R(R(u,S(w=c,6)^S(w,11)^S(w,25)),(y=c)&i^~y&d),E[f]),I[f]),m=R(S(p=n,2)^S(p,13)^S(p,22),(s=n)&(h=o)^s&(v=r)^h&v),u=d,d=i,i=c,c=R(a,g),a=r,r=o,o=n,n=R(g,m);C[0]=R(n,C[0]),C[1]=R(o,C[1]),C[2]=R(r,C[2]),C[3]=R(a,C[3]),C[4]=R(c,C[4]),C[5]=R(i,C[5]),C[6]=R(d,C[6]),C[7]=R(u,C[7])}return C}(function(e){for(var t=Array(e.length>>2),n=0;n<t.length;n++)t[n]=0;for(n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<24-n%32;return t}(t=function(e){for(var t,n,o="",r=-1;++r<e.length;)t=e.charCodeAt(r),n=r+1<e.length?e.charCodeAt(r+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),r++),t<=127?o+=String.fromCharCode(t):t<=2047?o+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?o+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(o+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return o}(e)),8*t.length))).toUpperCase()};function c(e){console.log(e);var t=new XMLHttpRequest;t.open("GET",e,!0),t.send()}function i(){var e=r("_ga"),t=window[window.GoogleAnalyticsObject];if("string"==typeof e&&0<e.length){var n=e.split(".");return n.slice(n.length-2,n.length).join(".")}if(void 0!==t&&void 0!==t.getAll){var o=t.getAll()[0];if(void 0!==o)return o.get("clientId")}}window.localStorage&&window.localStorage.setItem;function d(e){var t=e.split("/")[2],n=/[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{2,}|[-\w]+\.[-\w]{2})$/i.exec(t);if("object"==typeof n&&n instanceof Array&&0<n.length)return n[0]}function u(e){var t=e.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);return null!=t&&2<t.length&&"string"==typeof t[2]&&0<t[2].length?t[2]:null}function f(e,t){l?localStorage.setItem(e,t):function(e,t){console.log("setting cookie "+e);var n=new Date;n.setTime(n.getTime()+31536e6);var o="expires="+n.toUTCString();document.cookie=e+"="+t+"; "+o+";domain=."+d(document.location.href)+";path=/"}(e,t)}function r(e){e+="=";for(var t=document.cookie.split(";"),n=0;n<t.length;n++){for(var o=t[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}function g(e){return l&&localStorage.getItem(e)||r(e)}function m(e){console.log("deleting value "+e),l&&localStorage.getItem(e)?localStorage.removeItem(e):f(e,"")}function s(e,t){t=void 0===t?document.location.search:t;try{var n=t.match("[?&]"+e+"=([^&]+)");if(n){var o=n[1];return o=o.replace(/\+/g,"%20"),o=decodeURIComponent(o)}return""}catch(e){return""}}!function e(){void 0===i()&&setTimeout(e,500)}();var h=null;function v(e){return e}var p=[];function y(){for(var e={},t=document.cookie.split("; "),n=0;n<t.length;n++){var o=t[n].split("=")[0],r=t[n].split("=").slice(1).join("=");if(13<o.length)if("gaconnector2_"==o.substring(0,13))e[o.replace("gaconnector2_","")]=r}return e}function w(){for(var e=Object.keys(localStorage),t={},n=0;n<e.length;n++){if("gaconnector2_"===e[n].substr(0,13))t[e[n].replace("gaconnector2_","")]=localStorage.getItem(e[n])}return t}var _=["name","email","phone"],b={name:[/^name$/i,/^user.*name$/i],email:[/email/i],phone:[/phone/i]};function C(){var e=l?w():y();for(var t in _){var n=v(_[t]),o=e[n];""!==o&&void 0!==o&&(I(n,o),m("gaconnector2_"+n))}}function I(e,t){if(-1===p.indexOf(e+"="+t)&&""!==h){var n="https://track.gaconnector.com/save_identifier";n+="?gaconnector_id="+h,n+="&account_id="+a,n+="&name="+e,n+="&value="+encodeURIComponent(t);c(n+="&value_hash="+(t?o(t.toLowerCase()):""))}}function S(e,t){var n,o,r,a;o=t,r=v(n=e),a=v(o),-1===p.indexOf(n+"="+o)&&f("gaconnector2_"+r,a),I(e,t)}var n=["color","date","datetime-local","month","number","range","search","time","url","week"];function A(){for(var e=document.getElementsByTagName("input"),t=0;t<e.length;t++)e[t].getAttribute("data-gaconnector-tracked")||-1===n.indexOf(e[t].type)&&(e[t].setAttribute("data-gaconnector-tracked",!0),e[t].addEventListener("change",function(e){var t;if(t=e.target.value,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t))S("email",e.target.value);else for(var n in b)for(var o=b[n],r=0;r<o.length;r++){var a=o[r];(a.test(e.target.name)||a.test(e.target.id))&&S(n,e.target.value)}}))}function E(){return self!==top}function R(){for(var e=document.querySelectorAll("iframe"),t=0;t<e.length;t++){var n=e[t].contentWindow,o={gaconnectorId:h,accountId:a};n.postMessage(o,"*")}}function j(e){"object"==typeof e.data&&void 0!==e.data.gaconnectorId&&(h=e.data.gaconnectorId,a=e.data.accountId,f("gaconnector2_id",h))}function k(e){var t,n=e.dataset.originalHref;return void 0===n&&(e.dataset.originalHref=e.href,n=e.href),t=-1<n.indexOf("?")?"&":"?",e.href=n+t+"gaconnectorId="+h,e.href}function x(){for(var e=d(document.location.href),t=u(document.location.href),n=document.getElementsByTagName("a"),o=0;o<n.length;o++){var r=n[o],a=d(r.href),c=u(r.href);-1<L.indexOf(a)&&a!==e?k(r):l&&-1<L.indexOf(c)&&c!==t&&k(r)}}var t,O,T,U,L=null,D=(U={isReady:!(T={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"}),readyWait:1,holdReady:function(e){e?U.readyWait++:U.ready(!0)},ready:function(e){if(!0===e&&!--U.readyWait||!0!==e&&!U.isReady){if(!document.body)return setTimeout(U.ready,1);if((U.isReady=!0)!==e&&0<--U.readyWait)return;t.resolveWith(document,[U])}},bindReady:function(){if(!t){if(t=U._Deferred(),"complete"===document.readyState)return setTimeout(U.ready,1);if(document.addEventListener)document.addEventListener("DOMContentLoaded",O,!1),window.addEventListener("load",U.ready,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",O),window.attachEvent("onload",U.ready);var e=!1;try{e=null==window.frameElement}catch(e){}document.documentElement.doScroll&&e&&W()}}},_Deferred:function(){var c,n,i,d=[],u={done:function(){if(!i){var e,t,n,o,r,a=arguments;for(c&&(r=c,c=0),e=0,t=a.length;e<t;e++)n=a[e],"array"===(o=U.type(n))?u.done.apply(u,n):"function"===o&&d.push(n);r&&u.resolveWith(r[0],r[1])}return this},resolveWith:function(e,t){if(!i&&!c&&!n){t=t||[],n=1;try{for(;d[0];)d.shift().apply(e,t)}finally{c=[e,t],n=0}}return this},resolve:function(){return u.resolveWith(this,arguments),this},isResolved:function(){return!(!n&&!c)},cancel:function(){return i=1,d=[],this}};return u},type:function(e){return null==e?String(e):T[Object.prototype.toString.call(e)]||"object"}},document.addEventListener?O=function(){document.removeEventListener("DOMContentLoaded",O,!1),U.ready()}:document.attachEvent&&(O=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",O),U.ready())}),function(e){U.bindReady(),U.type(e),t.done(e)});function W(){if(!U.isReady){try{document.documentElement.doScroll("left")}catch(e){return void setTimeout(W,1)}U.ready()}}return{track:function(e,t){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}a=e,function(e){var t=!!window.localStorage&&!!window.localStorage.setItem,n=!!e&&"localStorage"===e.storageEngine,o=!e||"string"!=typeof e.storageEngine,r=!!e&&!!e.internalDomains&&!!e.internalDomains.length;l=t&&(n||o&&!r),gaconnector2.useLocalStorage=l;var a,c,i=y(),d=w();if(l)for(var u in i)i[u]&&!d[u]&&f("gaconnector2_"+u,i[u]),c="gaconnector2_"+u,document.cookie=c+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";else for(var u in d)d[u]&&!i[u]&&f("gaconnector2_"+u,d[u]),a="gaconnector2_"+u,localStorage.removeItem(a)}(t),(h=s("gaconnectorId")||g("gaconnectorId")||g("gaconnector2_id")||n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n())!==g("gaconnector2_id")&&f("gaconnector2_id",h),h=h,void 0!==t&&void 0!==t.iframeEnabled&&!0!==t.iframeEnabled||(E()?(console.log("Adding receiveGaConnectorId listener"),window.addEventListener("message",j,!1)):(console.log("Messaging child iframes"),R(),setInterval(R,1e3)));var o,r="object"==typeof t&&!0===t.automatedTesting;E()&&!r||(o="https://track.gaconnector.com/track_pageview",""!=document.location.search?(o+=document.location.search,o+="&"):o+="?",o+="gaconnector_id="+h,o+="&account_id="+a,o+="&referer="+encodeURIComponent(document.referrer),o+="&GA_Client_ID="+i(),o+="&page_url="+encodeURIComponent(window.location.href),o+="&gclid="+encodeURIComponent(s("gclid",window.location.href)),o+="&utm_campaign="+encodeURIComponent(s("utm_campaign",window.location.href)),o+="&utm_term="+encodeURIComponent(s("utm_term",window.location.href)),o+="&utm_content="+encodeURIComponent(s("utm_content",window.location.href)),o+="&utm_source="+encodeURIComponent(s("utm_source",window.location.href)),c(o+="&utm_medium="+encodeURIComponent(s("utm_medium",window.location.href)))),C(),D(function(e){A(),setInterval(A,1e3),void 0!==t&&void 0!==(L=t.internalDomains)&&(x(),setInterval(x,1e3))})},identify:S}}();