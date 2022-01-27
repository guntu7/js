/**
* @license
AJAX Search Widget for Blogger V2 <https://dte-project.github.io/blogger/search.html> */
'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(withHashes) {
 return typeof withHashes;
} : function(obj) {
 return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
!function(exports, name) {
 function f(name, n) {
   function get(arg2) {
     return decodeURIComponent(arg2);
   }
   function isNaN(val) {
     return void 0 !== val;
   }
   function test(target) {
     return "string" == typeof target;
   }
   function z(i) {
     return test(i) && "" !== i.trim() ? '""' === i || "[]" === i || "{}" === i || '"' === i[0] && '"' === i.slice(-1) || "[" === i[0] && "]" === i.slice(-1) || "{" === i[0] && "}" === i.slice(-1) : false;
   }
   function f(s) {
     if (test(s)) {
       if ("true" === s) {
         return true;
       }
       if ("false" === s) {
         return false;
       }
       if ("null" === s) {
         return null;
       }
       if ("'" === s.slice(0, 1) && "'" === s.slice(-1)) {
         return s.slice(1, -1);
       }
       if (/^-?(\d*\.)?\d+$/.test(s)) {
         return +s;
       }
       if (z(s)) {
         try {
           return JSON.parse(s);
         } catch (t) {
         }
       }
     }
     return s;
   }
   function cb(c, a, f) {
     var segment;
     var result = a.split("[");
     var j = 0;
     var trlen = result.length;
     for (; trlen - 1 > j; ++j) {
       segment = result[j].replace(/\]$/, "");
       c = c[segment] || (c[segment] = {});
     }
     c[result[j].replace(/\]$/, "")] = f;
   }
   var r = {};
   var c = name.replace(/^.*?\?/, "");
   return "" === c ? r : (c.split(/&(?:amp;)?/).forEach(function(clusterShardData) {
     var target = clusterShardData.split("=");
     var url = get(target[0]);
     var o = isNaN(target[1]) ? get(target[1]) : true;
     o = !isNaN(n) || n ? f(o) : o;
     if ("]" === url.slice(-1)) {
       cb(r, url, o);
     } else {
       r[url] = o;
     }
   }), r);
 }
 exports[name] = f;
}(window, "q2o"), function(window, document) {
 function encode(name) {
   return encodeURIComponent(name);
 }
 function parseInt(val) {
   return void 0 !== val;
 }
 function isString(data) {
   return "string" == typeof data;
 }
 function isNaN(value) {
   return "number" == typeof value || /^-?(\d*\.)?\d+$/.test(value);
 }
 function isArray(options) {
   return null !== options && "object" == (typeof options === "undefined" ? "undefined" : _typeof(options));
 }
 function extend(obj, target) {
   target = target || {};
   var k;
   for (k in obj) {
     if (parseInt(target[k])) {
       if (isArray(obj[k]) && isArray(target[k])) {
         target[k] = extend(obj[k], target[k]);
       }
     } else {
       target[k] = obj[k];
     }
   }
   return target;
 }
 function addEvent(el, type, fn) {
   el.addEventListener(type, fn, false);
 }
 function createElement(tag, i, data) {
   if (tag = document.createElement(tag), parseInt(i) && "" !== i && (tag.innerHTML = i), isArray(data)) {
     var i;
     for (i in data) {
       if (data[i] !== false) {
         tag.setAttribute(i, data[i]);
       }
     }
   }
   return tag;
 }
 function addClass(name, target) {
   target = target.split(/\s+/);
   var entrytwo;
   for (; entrytwo = target.shift();) {
     name.classList.add(entrytwo);
   }
 }
 function removeClass(elem, query) {
   query = query.split(/\s+/);
   var oldHeros;
   for (; oldHeros = query.shift();) {
     elem.classList.remove(oldHeros);
   }
 }
 function cb(e, el, code) {
   if (el) {
     e.insertBefore(el, code);
   }
 }
 function selectItem(item) {
   if (item.parentNode) {
     item.parentNode.removeChild(item);
   }
 }
 function action(params, callback) {
   var i;
   var modules = [];
   for (i in params) {
     modules.push(encode(i) + "=" + encode(params[i]));
   }
   return "?" + modules.join(callback || "&");
 }
 function fn(e, val) {
   return e = (e + "").split(/[?&#]/)[0].replace(/\/+$/, ""), parseInt(val) && (e = e.replace(/\.[\w-]+$/, val ? "." + val : "")), e;
 }
 function done(elem) {
   return isNaN(elem) ? ("file:" === location.protocol ? "https:" : "") + "//www.blogger.com/feeds/" + elem + "/posts/summary" : fn(elem) + "/feeds/posts/summary";
 }
 function callback(e, doc, props) {
   var isCSS = /\.css$/i.test(fn(e));
   var script = createElement(isCSS ? "link" : "script", "", extend(isCSS ? {
     href : e,
     rel : "stylesheet"
   } : {
     src : e
   }, props));
   return script.readyState ? script.onreadystatechange = function() {
     if ("loaded" === script.readyState || "complete" === script.readyState) {
       script.onreadystatechange = null;
       if (doc) {
         doc(script);
       }
     }
   } : doc && addEvent(script, "load", doc), cb(c, script, c.firstChild), script;
 }
 function $(o, name, d) {
   d = d || [];
   d.unshift(name);
   if ("function" == typeof e) {
     e.apply(o, d);
   }
 }
 function checkLocalStorageSupport() {
   if (end !== false) {
     var start = +(storage.getItem(name) || -1);
     if (start > end) {
       return storage.setItem(name, 0), true;
     }
     storage.setItem(name, ++start);
   }
   return false;
 }
 function r(value) {
   return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
 }
 function func(rangeArr) {
   if (!type) {
     return rangeArr;
   }
   var reElements = RegExp(type.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\\\$&"), "i");
   return rangeArr.replace(reElements, "<mark>$&</mark>");
 }
 function f(name) {
   return window.getComputedStyle(area).getPropertyValue(name);
 }
 function init(fill) {
   if (!data.container && item.parentNode) {
     var targetShapeBounds = obj.getBoundingClientRect();
     var y = targetShapeBounds.top;
     var el_left = targetShapeBounds.left;
     var startWidth = targetShapeBounds.width;
     var startHeight = targetShapeBounds.height;
     addClass(item, name + "-float");
     item.style.cssText = "background-color:" + f("background-color") + ";color:" + f("color") + ";position:fixed;z-index:9999;top:" + (y + startHeight) + "px;left:" + el_left + "px;width:" + startWidth + "px;max-height:" + (window.innerHeight - y - startHeight) + "px;overflow:auto;";
     $(item, fill && fill.type || "fit", [targetShapeBounds]);
   }
 }
 function add(j, i) {
   var msg = ar[j][i];
   var n = item.children[0];
   var option = 1 === index ? "empty" : "end";
   cb(n, title);
   if (msg[0]) {
     closeBtn.style.display = index > 1 ? "" : "none";
     buttonCancel.style.display = len > msg[0] ? "none" : "";
     s.innerHTML = msg[1];
     cb(n, s);
   } else {
     n.innerHTML = '<p class="' + name + "-results-" + option + '">' + config[option].replace("%s%", r(type)) + "</p>";
     buttonCancel.style.display = "none";
   }
   cb(n, el);
   cb(area, item);
   init();
   selectItem(prev);
 }
 function select(i, index) {
   type = i;
   var additiveNodes = item.children[0];
   cb(additiveNodes, next);
   cb(area, item);
   init();
   selectItem(prev);
   var row = item.parentNode;
   addClass(row, name + "-loading");
   callback(done(_onHashInit) + action(extend(data.query, {
     callback : "_" + id,
     "max-results" : len,
     q : encode(i),
     "start-index" : index
   })), function() {
     removeClass(row, name + "-loading");
     if (!parseInt(ar[i])) {
       ar[i] = {};
     }
     var result = s.innerHTML;
     ar[i][index] = [s.children.length, result];
     add(i, index);
   });
 }
 function __prevent(e) {
   if (e) {
     e.preventDefault();
   }
 }
 function render() {
   var e;
   var i = this.q;
   i = i && i.value;
   title.innerHTML = config.title.replace("%s%", r(i));
   item.children[0].innerHTML = "";
   if (i) {
     i = i.toLowerCase();
     if (e = !(!ar[i] || !ar[i][index])) {
       add(i, index);
     } else {
       select(i, index);
     }
     $(obj, "search", [i, index, e, item]);
   } else {
     cb(area, prev);
     selectItem(item);
   }
 }
 function link(options) {
   var header = this;
   if (!(options.key && "Enter" === options.key || options.keyCode && 13 === options.keyCode)) {
     window.setTimeout(function() {
       if (input) {
         if (showAboveTimeout) {
           window.clearTimeout(showAboveTimeout);
         }
         showAboveTimeout = window.setTimeout(function() {
           render.call(obj);
         }, isNaN(input) ? +input : 500);
       } else {
         if ("" === header.value) {
           cb(area, prev);
           selectItem(item);
         }
       }
     }, 1);
   }
 }
 var parse = window.q2o;
 var script = document.currentScript;
 var location = window.location;
 var storage = window.localStorage;
 var type = "";
 var index = 1;
 var ar = {};
 var id = Date.now();
 var defaults = {
   i : id,
   direction : "ltr",
   url : location.protocol + "//" + location.host,
   name : "ajax-search",
   css : 1,
   ad : true,
   live : true,
   source : 'form[action$="/search"]',
   container : 0,
   excerpt : 0,
   image : 0,
   target : 0,
   chunk : 50,
   text : {
     title : "Search results for query <em>%s%</em>",
     loading : "Searching&hellip;",
     previous : "Previous",
     next : "Next",
     empty : "No results for query <em>%s%</em>.",
     end : "No more results for query <em>%s%</em>."
   },
   query : {
     alt : "json",
     orderby : "updated"
   }
 };
 var c = document.head;
 var data = extend(defaults, parse(script.src));
 var obj = document.querySelector(data.source);
 if (obj) {
   var i = data.i;
   var _onHashInit = data.id || fn(data.url);
   var name = data.name;
   var end = data.ad;
   var e = data.e;
   e = e && window[e];
   if (end === true) {
     end = 3;
   }
   var items = parse(location.search);
   if (parseInt(items[i])) {
     delete items[i].url;
     data = extend(data, items[i]);
   }
   var isArray;
   var config = data.text;
   var len = data.chunk;
   var area = data.container && document.querySelector(data.container) || document.body;
   var item = createElement("div", "<div></div>", {
     "class" : name + " " + data.direction,
     id : name + ":" + i
   });
   var prev = createElement("div");
   var title = createElement("h3", "", {
     "class" : name + "-title"
   });
   var s = createElement("ol", "", {
     "class" : name + "-results",
     id : name + "-results:" + i,
     start : index
   });
   var el = createElement("nav", "", {
     "class" : name + "-pager",
     id : name + "-pager:" + i
   });
   var closeBtn = createElement("a", config.previous, {
     "class" : name + "-previous",
     href : "",
     rel : "prev"
   });
   var buttonCancel = createElement("a", config.next, {
     "class" : name + "-next",
     href : "",
     rel : "next"
   });
   var next = createElement("p", config.loading, {
     "class" : name + "-loading"
   });
   addEvent(window, "scroll", init);
   addEvent(window, "resize", init);
   window["_" + id] = function(elem) {
     elem = elem.feed || {};
     var i;
     var countRep;
     var e;
     var eventHandlers = elem.entry || [];
     var n = eventHandlers.length;
     var teamId = data.target;
     var height = data.image;
     var start = data.excerpt;
     var T = "has-title has-url";
     if (height) {
       T = T + " has-image";
     }
     if (start) {
       T = T + " has-excerpt";
     }
     addClass(item, T);
     isArray = function update(group) {
       if (group) {
         var header = (group.link.find(function(vars_out) {
           return "alternate" === vars_out.rel;
         }) || {}).href;
         if (str = "", header) {
           if (height) {
             var w;
             var width;
             var value;
             var path = "media$thumbnail" in group;
             if (height === true) {
               height = 60;
             }
             if (isNaN(height)) {
               w = width = height + "px";
               height = "s" + height + "-c";
             } else {
               if (value = /^s(\d+)(\-[cp])?$/.exec(height)) {
                 w = value[1] + "px";
                 width = value[2] ? value[1] + "px" : "auto";
               } else {
                 if (value = /^w(\d+)\-h(\d+)(\-[cp])?$/.exec(height)) {
                   w = value[1] + "px";
                   width = value[2] + "px";
                 }
               }
             }
             str = str + ('<p class="' + name + "-image " + (path ? "loading" : "no-image") + '">');
             str = str + (path ? '<img class="lazyload" alt="" src="' + group.media$thumbnail.url.replace(/\/s\d+(\-c)?\//g, "/" + height + "/") + '" style="display:block;width:' + w + ";height:" + width + ';">' : '<span class="img lazyload" style="display:block;width:' + w + ";height:" + width + ';">');
             str = str + "</p>";
           }
           if (str = str + ('<h4 class="' + name + '-title"><a href="' + header + '"' + (teamId ? ' target="' + teamId + '"' : "") + ">" + func(group.title.$t) + "</a></h4>"), start) {
             var value = group.summary.$t.replace(/<.*?>/g, "").replace(/[<>]/g, "").trim();
             var l = value.length;
             if (start === true) {
               start = 200;
             }
             str = str + ('<p class="' + name + "-excerpt" + (l ? "" : " no-excerpt") + '">' + func(value.slice(0, start)) + (l > start ? "&hellip;" : "") + "</p>");
           }
           return createElement("li", str);
         }
       }
     };
     s.innerHTML = "";
     i = 0;
     for (; n > i; ++i) {
       cb(s, isArray(eventHandlers[i]));
     }
     selectItem(next);
     closeBtn.style.display = index > 1 ? "" : "none";
     buttonCancel.style.display = len > n ? "none" : "";
     cb(el, closeBtn);
     cb(el, document.createTextNode(" "));
     cb(el, buttonCancel);
     e = item.children[0];
     if (cb(e, title), cb(e, s), cb(e, el), height) {
       var aImages = s.getElementsByTagName("img");
       var orientationchangeListener = function valNumber() {
         addClass(this.parentNode, "error");
         $(this, "error.asset", [this.src]);
       };
       var onHashchange = function renderLyrics() {
         removeClass(this.parentNode, "loading");
         $(this, "load.asset", [this.src]);
       };
       i = 0;
       countRep = aImages.length;
       for (; countRep > i; ++i) {
         addEvent(aImages[i], "error", orientationchangeListener);
         addEvent(aImages[i], "load", onHashchange);
       }
     }
     if (checkLocalStorageSupport()) {
       callback(done("2882945469064827865") + action(extend(data.query, {
         callback : "_" + id + "_",
         "max-results" : 21,
         orderby : "updated"
       })) + "&q=" + encode(type));
     }
     $(item, "load", [elem, type, index]);
   };
   window["_" + id + "_"] = function(elem) {
     elem = elem.feed || {};
     var result = elem.entry || [];
     result = result[Math.floor(Math.random() * result.length)];
     if (result = isArray(result)) {
       addClass(result, "ad");
       cb(s, result, s.firstChild);
     }
     $(result, "load.ad", [elem]);
   };
   if (!script.id) {
     script.id = name + "-js";
   }
   addClass(script, name + "-js");
   var target = data.container;
   var result = data.css;
   if (result && !document.getElementById(name + "-css") && callback(isString(result) ? result : fn(script.src, "css"), function() {
     $(this, "load.asset", [this.href]);
   }, {
     "class" : name + "-css",
     id : name + "-css"
   }), target && (target = document.querySelector(target))) {
     var svg;
     for (; svg = target.firstChild;) {
       cb(prev, svg);
     }
     cb(target, prev);
   }
   var showAboveTimeout;
   var input = data.live;
   addEvent(obj, "submit", function(e) {
     s.start = index = 1;
     if (showAboveTimeout) {
       window.clearTimeout(showAboveTimeout);
     }
     render.call(this);
     __prevent(e);
   });
   ["cut", "input", "keydown", "paste"].forEach(function(change) {
     addEvent(obj.q, change, link);
   });
   addEvent(closeBtn, "click", function(e) {
     s.start = index = index - len;
     render.call(obj);
     __prevent(e);
   });
   addEvent(buttonCancel, "click", function(e) {
     s.start = index = index + len;
     render.call(obj);
     __prevent(e);
   });
   $(obj, "ready", [data, item]);
 }
}(window, document);