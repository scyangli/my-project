(function(window){var svgSprite='<svg><symbol id="icon-icon_arrow_left" viewBox="0 0 1024 1024"><path d="M272.448 472.064l399.232-399.232c22.080-22.080 57.792-22.080 79.872 0 22.016 22.016 22.080 57.792 0 79.872l-359.296 359.296 359.296 359.296c22.016 22.016 22.080 57.792 0 79.872s-57.792 22.016-79.872 0l-399.232-399.232c-22.016-22.080-22.016-57.792 0-79.872z"  ></path></symbol><symbol id="icon-icon_arrow_right" viewBox="0 0 1024 1024"><path d="M751.552 551.936l-399.232 399.232c-22.080 22.080-57.792 22.080-79.872 0-22.016-22.016-22.080-57.792 0-79.872l359.296-359.296-359.296-359.296c-22.016-22.016-22.080-57.792 0-79.872s57.792-22.016 79.872 0l399.232 399.232c22.016 22.080 22.016 57.792 0 79.872z"  ></path></symbol><symbol id="icon-xiajiantou" viewBox="0 0 1024 1024"><path d="M508.025406 655.446718c-14.45307 0-28.183486-5.781228-39.023289-15.898376l-231.249118-231.249118c-10.117149-10.117149-10.117149-26.015526 0-36.132675s26.015526-10.117149 36.132675 0l231.249118 231.249118c2.16796 2.16796 4.335921 2.16796 5.781228 0l231.971771-231.971771c10.117149-10.117149 26.015526-10.117149 35.410021 0 10.117149 10.117149 10.117149 26.015526 0 36.132674l-231.971771 231.971772c-9.394495 10.117149-23.124912 15.898377-38.300635 15.898376z"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M690 620.3h-37.5l-13.3-12.8c46.5-54.1 74.5-124.3 74.5-200.8 0-170.4-138.1-308.5-308.5-308.5S96.7 236.3 96.7 406.7s138.1 308.5 308.5 308.5c76.4 0 146.6-28 200.8-74.5l12.8 13.3v37.5l237.3 236.8 70.7-70.7L690 620.3z m-284.8 0c-118.2 0-213.6-95.4-213.6-213.6S287 193.1 405.2 193.1s213.6 95.4 213.6 213.6-95.4 213.6-213.6 213.6z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)