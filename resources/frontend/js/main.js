function loadCSS(e, t, n){
  'use strict'; var i = window.document.createElement('link'), o = t || window.document.getElementsByTagName('script')[0], r = window.document.styleSheets; return i.rel = 'stylesheet', i.href = e, i.media = 'only x', o.parentNode.insertBefore(i, o), i.onloadcssdefined = function(e){
    for (var t, n = 0; n < r.length; n++){
      r[n].href && r[n].href === i.href && (t = !0);
    }t ? e() : setTimeout(function(){
      i.onloadcssdefined(e);
    });
  }, i.onloadcssdefined(function(){
    i.media = n || 'all';
  }), i;
}!(function(e, t){
  function n(e){
    return N.isWindow(e) ? e : e.nodeType === 9 && (e.defaultView || e.parentWindow);
  } function i(e){
    if (!yt[e]){
      var t = D.body, n = N('<' + e + '>').appendTo(t), i = n.css('display'); n.remove(), i !== 'none' && i !== '' || (ft || (ft = D.createElement('iframe'), ft.frameBorder = ft.width = ft.height = 0), t.appendChild(ft), ht && ft.createElement || (ht = (ft.contentWindow || ft.contentDocument).document, ht.write((N.support.boxModel ? '<!doctype html>' : '') + '<html><body>'), ht.close()), n = ht.createElement(e), ht.body.appendChild(n), i = N.css(n, 'display'), t.removeChild(ft)), yt[e] = i;
    } return yt[e];
  } function o(e, t){
    var n = {}; return N.each(xt.concat.apply([], xt.slice(0, t)), function(){
      n[this] = e;
    }), n;
  } function r(){
    mt = t;
  } function s(){
    return setTimeout(r, 0), mt = N.now();
  } function a(){
    try {
      return new e.ActiveXObject('Microsoft.XMLHTTP');
    } catch (e){}
  } function l(){
    try {
      return new e.XMLHttpRequest();
    } catch (e){}
  } function c(e, n){
    e.dataFilter && (n = e.dataFilter(n, e.dataType)); var i, o, r, s, a, l, c, u, d = e.dataTypes, p = {}, f = d.length, h = d[0]; for (i = 1; i < f; i++){
      if (i === 1) {
        for (o in e.converters) {
          typeof o === 'string' && (p[o.toLowerCase()] = e.converters[o]);
        }
      } if (s = h, (h = d[i]) === '*'){
        h = s;
      } else if (s !== '*' && s !== h){
        if (a = s + ' ' + h, !(l = p[a] || p['* ' + h])){
          u = t; for (c in p) {
            if (r = c.split(' '), (r[0] === s || r[0] === '*') && (u = p[r[1] + ' ' + h])){
              c = p[c], !0 === c ? l = u : !0 === u && (l = c); break;
            }
          }
        }!l && !u && N.error('No conversion from ' + a.replace(' ', ' to ')), !0 !== l && (n = l ? l(n) : u(c(n)));
      }
    } return n;
  } function u(e, n, i){
    var o, r, s, a, l = e.contents, c = e.dataTypes, u = e.responseFields; for (r in u){
      r in i && (n[u[r]] = i[r]);
    } for (;c[0] === '*';){
      c.shift(), o === t && (o = e.mimeType || n.getResponseHeader('content-type'));
    } if (o) {
      for (r in l) {
        if (l[r] && l[r].test(o)){
          c.unshift(r); break;
        }
      }
    } if (c[0] in i){
      s = c[0];
    } else {
      for (r in i){
        if (!c[0] || e.converters[r + ' ' + c[0]]){
          s = r; break;
        }a || (a = r);
      }s = s || a;
    } if (s) {
      return s !== c[0] && c.unshift(s), i[s];
    }
  } function d(e, t, n, i){
    if (N.isArray(t)){
      N.each(t, function(t, o){
        n || We.test(e) ? i(e, o) : d(e + '[' + (typeof o === 'object' ? t : '') + ']', o, n, i);
      });
    } else if (n || N.type(t) !== 'object'){
      i(e, t);
    } else {
      for (var o in t){
        d(e + '[' + o + ']', t[o], n, i);
      }
    }
  } function p(e, n){
    var i, o, r = N.ajaxSettings.flatOptions || {}; for (i in n){
      n[i] !== t && ((r[i] ? e : o || (o = {}))[i] = n[i]);
    }o && N.extend(!0, e, o);
  } function f(e, n, i, o, r, s){
    r = r || n.dataTypes[0], s = s || {}, s[r] = !0; for (var a, l = e[r], c = 0, u = l ? l.length : 0, d = e === rt; c < u && (d || !a); c++) {
      typeof (a = l[c](n, i, o)) === 'string' && (!d || s[a] ? a = t : (n.dataTypes.unshift(a), a = f(e, n, i, o, a, s)));
    } return (d || !a) && !s['*'] && (a = f(e, n, i, o, '*', s)), a;
  } function h(e){
    return function(t, n){
      if (typeof t !== 'string' && (n = t, t = '*'), N.isFunction(n)) {
        for (var i, o, r, s = t.toLowerCase().split(tt), a = 0, l = s.length; a < l; a++){
          i = s[a], r = /^\+/.test(i), r && (i = i.substr(1) || '*'), o = e[i] = e[i] || [], o[r ? 'unshift' : 'push'](n);
        }
      }
    };
  } function g(e, t, n){
    var i = t === 'width' ? e.offsetWidth : e.offsetHeight, o = t === 'width' ? 1 : 0; if (i > 0){
      if (n !== 'border') {
        for (;o < 4; o += 2){
          n || (i -= parseFloat(N.css(e, 'padding' + ze[o])) || 0), n === 'margin' ? i += parseFloat(N.css(e, n + ze[o])) || 0 : i -= parseFloat(N.css(e, 'border' + ze[o] + 'Width')) || 0;
        }
      } return i + 'px';
    } if (i = _e(e, t), (i < 0 || i == null) && (i = e.style[t]), $e.test(i)) {
      return i;
    } if (i = parseFloat(i) || 0, n) {
      for (;o < 4; o += 2){
        i += parseFloat(N.css(e, 'padding' + ze[o])) || 0, n !== 'padding' && (i += parseFloat(N.css(e, 'border' + ze[o] + 'Width')) || 0), n === 'margin' && (i += parseFloat(N.css(e, n + ze[o])) || 0);
      }
    } return i + 'px';
  } function m(e){
    var t = D.createElement('div'); return Fe.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild;
  } function y(e){
    var t = (e.nodeName || '').toLowerCase(); t === 'input' ? v(e) : t !== 'script' && void 0 !== e.getElementsByTagName && N.grep(e.getElementsByTagName('input'), v);
  } function v(e){
    e.type !== 'checkbox' && e.type !== 'radio' || (e.defaultChecked = e.checked);
  } function b(e){
    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName('*') : void 0 !== e.querySelectorAll ? e.querySelectorAll('*') : [];
  } function x(e, t){
    var n; t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === 'object' ? t.outerHTML = e.outerHTML : n !== 'input' || e.type !== 'checkbox' && e.type !== 'radio' ? n === 'option' ? t.selected = e.defaultSelected : n === 'input' || n === 'textarea' ? t.defaultValue = e.defaultValue : n === 'script' && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(N.expando), t.removeAttribute('_submit_attached'), t.removeAttribute('_change_attached'));
  } function C(e, t){
    if (t.nodeType === 1 && N.hasData(e)){
      var n, i, o, r = N._data(e), s = N._data(t, r), a = r.events; if (a){
        delete s.handle, s.events = {}; for (n in a) {
          for (i = 0, o = a[n].length; i < o; i++){
            N.event.add(t, n, a[n][i]);
          }
        }
      }s.data && (s.data = N.extend({}, s.data));
    }
  } function w(e, t){
    return N.nodeName(e, 'table') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
  } function S(e){
    var t = he.split('|'), n = e.createDocumentFragment(); if (n.createElement) {
      for (;t.length;){
        n.createElement(t.pop());
      }
    } return n;
  } function T(e, t, n){
    if (t = t || 0, N.isFunction(t)) {
      return N.grep(e, function(e, i){
        return !!t.call(e, i, e) === n;
      });
    } if (t.nodeType) {
      return N.grep(e, function(e, i){
        return e === t === n;
      });
    } if (typeof t === 'string'){
      var i = N.grep(e, function(e){
        return e.nodeType === 1;
      }); if (ue.test(t)) {
        return N.filter(t, i, !n);
      } t = N.filter(t, i);
    } return N.grep(e, function(e, i){
      return N.inArray(e, t) >= 0 === n;
    });
  } function k(e){
    return !e || !e.parentNode || e.parentNode.nodeType === 11;
  } function L(){
    return !0;
  } function E(){
    return !1;
  } function F(e, t, n){
    var i = t + 'defer', o = t + 'queue', r = t + 'mark', s = N._data(e, i); s && (n === 'queue' || !N._data(e, o)) && (n === 'mark' || !N._data(e, r)) && setTimeout(function(){
      !N._data(e, o) && !N._data(e, r) && (N.removeData(e, i, !0), s.fire());
    }, 0);
  } function _(e){
    for (var t in e) {
      if ((t !== 'data' || !N.isEmptyObject(e[t])) && t !== 'toJSON') {
        return !1;
      }
    } return !0;
  } function j(e, n, i){
    if (i === t && e.nodeType === 1){
      var o = 'data-' + n.replace(P, '-$1').toLowerCase(); if (typeof (i = e.getAttribute(o)) === 'string'){
        try {
          i = i === 'true' || i !== 'false' && (i === 'null' ? null : N.isNumeric(i) ? +i : O.test(i) ? N.parseJSON(i) : i);
        } catch (e){}N.data(e, n, i);
      } else {
        i = t;
      }
    } return i;
  } function I(e){
    var t, n, i = $[e] = {}; for (e = e.split(/\s+/), t = 0, n = e.length; t < n; t++){
      i[e[t]] = !0;
    } return i;
  } var D = e.document, A = e.navigator, M = e.location, N = (function(){
      function n(){
        if (!a.isReady){
          try {
            D.documentElement.doScroll('left');
          } catch (e){
            return void setTimeout(n, 1);
          }a.ready();
        }
      } var i, o, r, s, a = function(e, t){
          return new a.fn.init(e, t, i);
        }, l = e.jQuery, c = e.$, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, d = /\S/, p = /^\s+/, f = /\s+$/, h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, g = /^[\],:{}\s]*$/, m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, y = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, v = /(?:^|:|,)(?:\s*\[)+/g, b = /(webkit)[ \/]([\w.]+)/, x = /(opera)(?:.*version)?[ \/]([\w.]+)/, C = /(msie) ([\w.]+)/, w = /(mozilla)(?:.*? rv:([\w.]+))?/, S = /-([a-z]|[0-9])/gi, T = /^-ms-/, k = function(e, t){
          return (t + '').toUpperCase();
        }, L = A.userAgent, E = Object.prototype.toString, F = Object.prototype.hasOwnProperty, _ = Array.prototype.push, j = Array.prototype.slice, I = String.prototype.trim, M = Array.prototype.indexOf, N = {}; return a.fn = a.prototype = { constructor: a, init: function(e, n, i){
        var o, r, s, l; if (!e) {
          return this;
        } if (e.nodeType) {
          return this.context = this[0] = e, this.length = 1, this;
        } if (e === 'body' && !n && D.body) {
          return this.context = D, this[0] = D.body, this.selector = e, this.length = 1, this;
        } if (typeof e === 'string'){
          if ((o = e.charAt(0) !== '<' || e.charAt(e.length - 1) !== '>' || e.length < 3 ? u.exec(e) : [null, e, null]) && (o[1] || !n)){
            if (o[1]) {
              return n = n instanceof a ? n[0] : n, l = n ? n.ownerDocument || n : D, s = h.exec(e), s ? a.isPlainObject(n) ? (e = [D.createElement(s[1])], a.fn.attr.call(e, n, !0)) : e = [l.createElement(s[1])] : (s = a.buildFragment([o[1]], [l]), e = (s.cacheable ? a.clone(s.fragment) : s.fragment).childNodes), a.merge(this, e);
            } if ((r = D.getElementById(o[2])) && r.parentNode){
              if (r.id !== o[2]) {
                return i.find(e);
              } this.length = 1, this[0] = r;
            } return this.context = D, this.selector = e, this;
          } return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
        } return a.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), a.makeArray(e, this));
      }, selector: '', jquery: '1.7.2', length: 0, size: function(){
        return this.length;
      }, toArray: function(){
        return j.call(this, 0);
      }, get: function(e){
        return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
      }, pushStack: function(e, t, n){
        var i = this.constructor(); return a.isArray(e) ? _.apply(i, e) : a.merge(i, e), i.prevObject = this, i.context = this.context, t === 'find' ? i.selector = this.selector + (this.selector ? ' ' : '') + n : t && (i.selector = this.selector + '.' + t + '(' + n + ')'), i;
      }, each: function(e, t){
        return a.each(this, e, t);
      }, ready: function(e){
        return a.bindReady(), r.add(e), this;
      }, eq: function(e){
        return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1);
      }, first: function(){
        return this.eq(0);
      }, last: function(){
        return this.eq(-1);
      }, slice: function(){
        return this.pushStack(j.apply(this, arguments), 'slice', j.call(arguments).join(','));
      }, map: function(e){
        return this.pushStack(a.map(this, function(t, n){
          return e.call(t, n, t);
        }));
      }, end: function(){
        return this.prevObject || this.constructor(null);
      }, push: _, sort: [].sort, splice: [].splice }, a.fn.init.prototype = a.fn, a.extend = a.fn.extend = function(){
        var e, n, i, o, r, s, l = arguments[0] || {}, c = 1, u = arguments.length, d = !1; for (typeof l === 'boolean' && (d = l, l = arguments[1] || {}, c = 2), typeof l !== 'object' && !a.isFunction(l) && (l = {}), u === c && (l = this, --c); c < u; c++) {
          if ((e = arguments[c]) != null) {
            for (n in e){
              i = l[n], o = e[n], l !== o && (d && o && (a.isPlainObject(o) || (r = a.isArray(o))) ? (r ? (r = !1, s = i && a.isArray(i) ? i : []) : s = i && a.isPlainObject(i) ? i : {}, l[n] = a.extend(d, s, o)) : o !== t && (l[n] = o));
            }
          }
        } return l;
      }, a.extend({ noConflict: function(t){
        return e.$ === a && (e.$ = c), t && e.jQuery === a && (e.jQuery = l), a;
      }, isReady: !1, readyWait: 1, holdReady: function(e){
        e ? a.readyWait++ : a.ready(!0);
      }, ready: function(e){
        if (!0 === e && !--a.readyWait || !0 !== e && !a.isReady){
          if (!D.body) {
            return setTimeout(a.ready, 1);
          } if (a.isReady = !0, !0 !== e && --a.readyWait > 0) {
            return;
          } r.fireWith(D, [a]), a.fn.trigger && a(D).trigger('ready').off('ready');
        }
      }, bindReady: function(){
        if (!r){
          if (r = a.Callbacks('once memory'), D.readyState === 'complete') {
            return setTimeout(a.ready, 1);
          } if (D.addEventListener){
            D.addEventListener('DOMContentLoaded', s, !1), e.addEventListener('load', a.ready, !1);
          } else if (D.attachEvent){
            D.attachEvent('onreadystatechange', s), e.attachEvent('onload', a.ready); var t = !1; try {
              t = e.frameElement == null;
            } catch (e){}D.documentElement.doScroll && t && n();
          }
        }
      }, isFunction: function(e){
        return a.type(e) === 'function';
      }, isArray: Array.isArray || function(e){
        return a.type(e) === 'array';
      }, isWindow: function(e){
        return e != null && e == e.window;
      }, isNumeric: function(e){
        return !isNaN(parseFloat(e)) && isFinite(e);
      }, type: function(e){
        return e == null ? String(e) : N[E.call(e)] || 'object';
      }, isPlainObject: function(e){
        if (!e || a.type(e) !== 'object' || e.nodeType || a.isWindow(e)) {
          return !1;
        } try {
          if (e.constructor && !F.call(e, 'constructor') && !F.call(e.constructor.prototype, 'isPrototypeOf')) {
            return !1;
          }
        } catch (e){
          return !1;
        } var n; for (n in e){} return n === t || F.call(e, n);
      }, isEmptyObject: function(e){
        for (var t in e) {
          return !1;
        } return !0;
      }, error: function(e){
        throw new Error(e);
      }, parseJSON: function(t){
        return typeof t === 'string' && t ? (t = a.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : g.test(t.replace(m, '@').replace(y, ']').replace(v, '')) ? new Function('return ' + t)() : void a.error('Invalid JSON: ' + t)) : null;
      }, parseXML: function(n){
        if (typeof n !== 'string' || !n) {
          return null;
        } var i, o; try {
          e.DOMParser ? (o = new DOMParser(), i = o.parseFromString(n, 'text/xml')) : (i = new ActiveXObject('Microsoft.XMLDOM'), i.async = 'false', i.loadXML(n));
        } catch (e){
          i = t;
        } return (!i || !i.documentElement || i.getElementsByTagName('parsererror').length) && a.error('Invalid XML: ' + n), i;
      }, noop: function(){}, globalEval: function(t){
        t && d.test(t) && (e.execScript || function(t){
          e.eval.call(e, t);
        })(t);
      }, camelCase: function(e){
        return e.replace(T, 'ms-').replace(S, k);
      }, nodeName: function(e, t){
        return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
      }, each: function(e, n, i){
        var o, r = 0, s = e.length, l = s === t || a.isFunction(e); if (i) {
          if (l){
            for (o in e) {
              if (!1 === n.apply(e[o], i)) {
                break;
              }
            }
          } else {
            for (;r < s && !1 !== n.apply(e[r++], i);){}
          }
        } else if (l){
          for (o in e) {
            if (!1 === n.call(e[o], o, e[o])) {
              break;
            }
          }
        } else {
          for (;r < s && !1 !== n.call(e[r], r, e[r++]);){}
        } return e;
      }, trim: I ? function(e){
        return e == null ? '' : I.call(e);
      } : function(e){
        return e == null ? '' : (e + '').replace(p, '').replace(f, '');
      }, makeArray: function(e, t){
        var n = t || []; if (e != null){
          var i = a.type(e); e.length == null || i === 'string' || i === 'function' || i === 'regexp' || a.isWindow(e) ? _.call(n, e) : a.merge(n, e);
        } return n;
      }, inArray: function(e, t, n){
        var i; if (t){
          if (M) {
            return M.call(t, e, n);
          } for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++) {
            if (n in t && t[n] === e) {
              return n;
            }
          }
        } return -1;
      }, merge: function(e, n){
        var i = e.length, o = 0; if (typeof n.length === 'number') {
          for (var r = n.length; o < r; o++){
            e[i++] = n[o];
          }
        } else {
          for (;n[o] !== t;){
            e[i++] = n[o++];
          }
        } return e.length = i, e;
      }, grep: function(e, t, n){
        var i, o = []; n = !!n; for (var r = 0, s = e.length; r < s; r++){
          i = !!t(e[r], r), n !== i && o.push(e[r]);
        } return o;
      }, map: function(e, n, i){
        var o, r, s = [], l = 0, c = e.length; if (e instanceof a || c !== t && typeof c === 'number' && (c > 0 && e[0] && e[c - 1] || c === 0 || a.isArray(e))) {
          for (;l < c; l++){
            (o = n(e[l], l, i)) != null && (s[s.length] = o);
          }
        } else {
          for (r in e){
            (o = n(e[r], r, i)) != null && (s[s.length] = o);
          }
        } return s.concat.apply([], s);
      }, guid: 1, proxy: function(e, n){
        if (typeof n === 'string'){
          var i = e[n]; n = e, e = i;
        } if (!a.isFunction(e)) {
          return t;
        } var o = j.call(arguments, 2), r = function(){
          return e.apply(n, o.concat(j.call(arguments)));
        }; return r.guid = e.guid = e.guid || r.guid || a.guid++, r;
      }, access: function(e, n, i, o, r, s, l){
        var c, u = i == null, d = 0, p = e.length; if (i && typeof i === 'object'){
          for (d in i){
            a.access(e, n, d, i[d], 1, s, o);
          }r = 1;
        } else if (o !== t){
          if (c = l === t && a.isFunction(o), u && (c ? (c = n, n = function(e, t, n){
            return c.call(a(e), n);
          }) : (n.call(e, o), n = null)), n) {
            for (;d < p; d++){
              n(e[d], i, c ? o.call(e[d], d, n(e[d], i)) : o, l);
            }
          }r = 1;
        } return r ? e : u ? n.call(e) : p ? n(e[0], i) : s;
      }, now: function(){
        return (new Date()).getTime();
      }, uaMatch: function(e){
        e = e.toLowerCase(); var t = b.exec(e) || x.exec(e) || C.exec(e) || e.indexOf('compatible') < 0 && w.exec(e) || []; return { browser: t[1] || '', version: t[2] || '0' };
      }, sub: function(){
        function e(t, n){
          return new e.fn.init(t, n);
        }a.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i){
          return i && i instanceof a && !(i instanceof e) && (i = e(i)), a.fn.init.call(this, n, i, t);
        }, e.fn.init.prototype = e.fn; var t = e(D); return e;
      }, browser: {}}), a.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function(e, t){
        N['[object ' + t + ']'] = t.toLowerCase();
      }), o = a.uaMatch(L), o.browser && (a.browser[o.browser] = !0, a.browser.version = o.version), a.browser.webkit && (a.browser.safari = !0), d.test(' ') && (p = /^[\s\xA0]+/, f = /[\s\xA0]+$/), i = a(D), D.addEventListener ? s = function(){
        D.removeEventListener('DOMContentLoaded', s, !1), a.ready();
      } : D.attachEvent && (s = function(){
        D.readyState === 'complete' && (D.detachEvent('onreadystatechange', s), a.ready());
      }), a;
    }()), $ = {}; N.Callbacks = function(e){
    e = e ? $[e] || I(e) : {}; var n, i, o, r, s, a, l = [], c = [], u = function(t){
        var n, i, o, r; for (n = 0, i = t.length; n < i; n++){
          o = t[n], r = N.type(o), r === 'array' ? u(o) : r === 'function' && (!e.unique || !p.has(o)) && l.push(o);
        }
      }, d = function(t, u){
        for (u = u || [], n = !e.memory || [t, u], i = !0, o = !0, a = r || 0, r = 0, s = l.length; l && a < s; a++) {
          if (!1 === l[a].apply(t, u) && e.stopOnFalse){
            n = !0; break;
          }
        }o = !1, l && (e.once ? !0 === n ? p.disable() : l = [] : c && c.length && (n = c.shift(), p.fireWith(n[0], n[1])));
      }, p = { add: function(){
        if (l){
          var e = l.length; u(arguments), o ? s = l.length : n && !0 !== n && (r = e, d(n[0], n[1]));
        } return this;
      }, remove: function(){
        if (l) {
          for (var t = arguments, n = 0, i = t.length; n < i; n++) {
            for (var r = 0; r < l.length && (t[n] !== l[r] || (o && r <= s && (s--, r <= a && a--), l.splice(r--, 1), !e.unique)); r++){}
          }
        } return this;
      }, has: function(e){
        if (l) {
          for (var t = 0, n = l.length; t < n; t++) {
            if (e === l[t]) {
              return !0;
            }
          }
        } return !1;
      }, empty: function(){
        return l = [], this;
      }, disable: function(){
        return l = c = n = t, this;
      }, disabled: function(){
        return !l;
      }, lock: function(){
        return c = t, (!n || !0 === n) && p.disable(), this;
      }, locked: function(){
        return !c;
      }, fireWith: function(t, i){
        return c && (o ? e.once || c.push([t, i]) : (!e.once || !n) && d(t, i)), this;
      }, fire: function(){
        return p.fireWith(this, arguments), this;
      }, fired: function(){
        return !!i;
      } }; return p;
  }; var H = [].slice; N.extend({ Deferred: function(e){
    var t, n = N.Callbacks('once memory'), i = N.Callbacks('once memory'), o = N.Callbacks('memory'), r = 'pending', s = { resolve: n, reject: i, notify: o }, a = { done: n.add, fail: i.add, progress: o.add, state: function(){
        return r;
      }, isResolved: n.fired, isRejected: i.fired, then: function(e, t, n){
        return l.done(e).fail(t).progress(n), this;
      }, always: function(){
        return l.done.apply(l, arguments).fail.apply(l, arguments), this;
      }, pipe: function(e, t, n){
        return N.Deferred(function(i){
          N.each({ done: [e, 'resolve'], fail: [t, 'reject'], progress: [n, 'notify'] }, function(e, t){
            var n, o = t[0], r = t[1]; N.isFunction(o) ? l[e](function(){
              n = o.apply(this, arguments), n && N.isFunction(n.promise) ? n.promise().then(i.resolve, i.reject, i.notify) : i[r + 'With'](this === l ? i : this, [n]);
            }) : l[e](i[r]);
          });
        }).promise();
      }, promise: function(e){
        if (e == null){
          e = a;
        } else {
          for (var t in a){
            e[t] = a[t];
          }
        } return e;
      } }, l = a.promise({}); for (t in s){
      l[t] = s[t].fire, l[t + 'With'] = s[t].fireWith;
    } return l.done(function(){
      r = 'resolved';
    }, i.disable, o.lock).fail(function(){
      r = 'rejected';
    }, n.disable, o.lock), e && e.call(l, l), l;
  }, when: function(e){
    var t = H.call(arguments, 0), n = 0, i = t.length, o = Array(i), r = i, s = i <= 1 && e && N.isFunction(e.promise) ? e : N.Deferred(), a = s.promise(); if (i > 1){
      for (;n < i; n++){
        t[n] && t[n].promise && N.isFunction(t[n].promise) ? t[n].promise().then((function(e){
          return function(n){
            t[e] = arguments.length > 1 ? H.call(arguments, 0) : n, --r || s.resolveWith(s, t);
          };
        }(n)), s.reject, (function(e){
          return function(t){
            o[e] = arguments.length > 1 ? H.call(arguments, 0) : t, s.notifyWith(a, o);
          };
        }(n))) : --r;
      }r || s.resolveWith(s, t);
    } else {
      s !== e && s.resolveWith(s, i ? [e] : []);
    } return a;
  } }), N.support = (function(){
    var t, n, i, o, r, s, a, l, c, u, d, p = D.createElement('div'); D.documentElement; if (p.setAttribute('className', 't'), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = p.getElementsByTagName('*'), i = p.getElementsByTagName('a')[0], !n || !n.length || !i) {
      return {};
    } o = D.createElement('select'), r = o.appendChild(D.createElement('option')), s = p.getElementsByTagName('input')[0], t = { leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName('tbody').length, htmlSerialize: !!p.getElementsByTagName('link').length, style: /top/.test(i.getAttribute('style')), hrefNormalized: i.getAttribute('href') === '/a', opacity: /^0.55/.test(i.style.opacity), cssFloat: !!i.style.cssFloat, checkOn: s.value === 'on', optSelected: r.selected, getSetAttribute: p.className !== 't', enctype: !!D.createElement('form').enctype, html5Clone: D.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>', submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, pixelMargin: !0 }, N.boxModel = t.boxModel = D.compatMode === 'CSS1Compat', s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !r.disabled; try {
      delete p.test;
    } catch (e){
      t.deleteExpando = !1;
    } if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent('onclick', function(){
      t.noCloneEvent = !1;
    }), p.cloneNode(!0).fireEvent('onclick')), s = D.createElement('input'), s.value = 't', s.setAttribute('type', 'radio'), t.radioValue = s.value === 't', s.setAttribute('checked', 'checked'), s.setAttribute('name', 't'), p.appendChild(s), a = D.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = s.checked, a.removeChild(s), a.appendChild(p), p.attachEvent) {
      for (u in { submit: 1, change: 1, focusin: 1 }){
        c = 'on' + u, d = c in p, d || (p.setAttribute(c, 'return;'), d = typeof p[c] === 'function'), t[u + 'Bubbles'] = d;
      }
    } return a.removeChild(p), a = o = r = p = s = null, N(function(){
      var n, i, o, r, s, a, c, u, f, h, g, m, y = D.getElementsByTagName('body')[0]; !y || (c = 1, m = 'padding:0;margin:0;border:', h = 'position:absolute;top:0;left:0;width:1px;height:1px;', g = m + '0;visibility:hidden;', u = "style='" + h + m + '5px solid #000;', f = '<div ' + u + "display:block;'><div style='" + m + "0;display:block;overflow:hidden;'></div></div><table " + u + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", n = D.createElement('div'), n.style.cssText = g + 'width:0;height:0;position:static;top:0;margin-top:' + c + 'px', y.insertBefore(n, y.firstChild), p = D.createElement('div'), n.appendChild(p), p.innerHTML = "<table><tr><td style='" + m + "0;display:none'></td><td>t</td></tr></table>", l = p.getElementsByTagName('td'), d = l[0].offsetHeight === 0, l[0].style.display = '', l[1].style.display = 'none', t.reliableHiddenOffsets = d && l[0].offsetHeight === 0, e.getComputedStyle && (p.innerHTML = '', a = D.createElement('div'), a.style.width = '0', a.style.marginRight = '0', p.style.width = '2px', p.appendChild(a), t.reliableMarginRight = (parseInt((e.getComputedStyle(a, null) || { marginRight: 0 }).marginRight, 10) || 0) === 0), void 0 !== p.style.zoom && (p.innerHTML = '', p.style.width = p.style.padding = '1px', p.style.border = 0, p.style.overflow = 'hidden', p.style.display = 'inline', p.style.zoom = 1, t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = 'block', p.style.overflow = 'visible', p.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = h + g, p.innerHTML = f, i = p.firstChild, o = i.firstChild, r = i.nextSibling.firstChild.firstChild, s = { doesNotAddBorder: o.offsetTop !== 5, doesAddBorderForTableAndCells: r.offsetTop === 5 }, o.style.position = 'fixed', o.style.top = '20px', s.fixedPosition = o.offsetTop === 20 || o.offsetTop === 15, o.style.position = o.style.top = '', i.style.overflow = 'hidden', i.style.position = 'relative', s.subtractsBorderForOverflowNotVisible = o.offsetTop === -5, s.doesNotIncludeMarginInBodyOffset = y.offsetTop !== c, e.getComputedStyle && (p.style.marginTop = '1%', t.pixelMargin = (e.getComputedStyle(p, null) || { marginTop: 0 }).marginTop !== '1%'), void 0 !== n.style.zoom && (n.style.zoom = 1), y.removeChild(n), a = p = n = null, N.extend(t, s));
    }), t;
  }()); var O = /^(?:\{.*\}|\[.*\])$/, P = /([A-Z])/g; N.extend({ cache: {}, uuid: 0, expando: 'jQuery' + (N.fn.jquery + Math.random()).replace(/\D/g, ''), noData: { embed: !0, object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000', applet: !0 }, hasData: function(e){
    return !!(e = e.nodeType ? N.cache[e[N.expando]] : e[N.expando]) && !_(e);
  }, data: function(e, n, i, o){
    if (N.acceptData(e)){
      var r, s, a, l = N.expando, c = typeof n === 'string', u = e.nodeType, d = u ? N.cache : e, p = u ? e[l] : e[l] && l, f = n === 'events'; if ((!p || !d[p] || !f && !o && !d[p].data) && c && i === t) {
        return;
      } return p || (u ? e[l] = p = ++N.uuid : p = l), d[p] || (d[p] = {}, u || (d[p].toJSON = N.noop)), (typeof n !== 'object' && typeof n !== 'function' || (o ? d[p] = N.extend(d[p], n) : d[p].data = N.extend(d[p].data, n)), r = s = d[p], o || (s.data || (s.data = {}), s = s.data), i !== t && (s[N.camelCase(n)] = i), f && !s[n]) ? r.events : (c ? (a = s[n]) == null && (a = s[N.camelCase(n)]) : a = s, a);
    }
  }, removeData: function(e, t, n){
    if (N.acceptData(e)){
      var i, o, r, s = N.expando, a = e.nodeType, l = a ? N.cache : e, c = a ? e[s] : s; if (!l[c]) {
        return;
      } if (t && (i = n ? l[c] : l[c].data)){
        N.isArray(t) || (t in i ? t = [t] : (t = N.camelCase(t), t = t in i ? [t] : t.split(' '))); for (o = 0, r = t.length; o < r; o++) {
          delete i[t[o]];
        } if (!(n ? _ : N.isEmptyObject)(i)) {
          return;
        }
      } if (!n && (delete l[c].data, !_(l[c]))) {
        return;
      } N.support.deleteExpando || !l.setInterval ? delete l[c] : l[c] = null, a && (N.support.deleteExpando ? delete e[s] : e.removeAttribute ? e.removeAttribute(s) : e[s] = null);
    }
  }, _data: function(e, t, n){
    return N.data(e, t, n, !0);
  }, acceptData: function(e){
    if (e.nodeName){
      var t = N.noData[e.nodeName.toLowerCase()]; if (t) {
        return !0 !== t && e.getAttribute('classid') === t;
      }
    } return !0;
  } }), N.fn.extend({ data: function(e, n){
    var i, o, r, s, a, l = this[0], c = 0, u = null; if (e === t){
      if (this.length && (u = N.data(l), l.nodeType === 1 && !N._data(l, 'parsedAttrs'))){
        for (r = l.attributes, a = r.length; c < a; c++){
          s = r[c].name, s.indexOf('data-') === 0 && (s = N.camelCase(s.substring(5)), j(l, s, u[s]));
        }N._data(l, 'parsedAttrs', !0);
      } return u;
    } return typeof e === 'object' ? this.each(function(){
      N.data(this, e);
    }) : (i = e.split('.', 2), i[1] = i[1] ? '.' + i[1] : '', o = i[1] + '!', N.access(this, function(n){
      if (n === t) {
        return (u = this.triggerHandler('getData' + o, [i[0]])) === t && l && (u = N.data(l, e), u = j(l, e, u)), u === t && i[1] ? this.data(i[0]) : u;
      } i[1] = n, this.each(function(){
        var t = N(this); t.triggerHandler('setData' + o, i), N.data(this, e, n), t.triggerHandler('changeData' + o, i);
      });
    }, null, n, arguments.length > 1, null, !1));
  }, removeData: function(e){
    return this.each(function(){
      N.removeData(this, e);
    });
  } }), N.extend({ _mark: function(e, t){
    e && (t = (t || 'fx') + 'mark', N._data(e, t, (N._data(e, t) || 0) + 1));
  }, _unmark: function(e, t, n){
    if (!0 !== e && (n = t, t = e, e = !1), t){
      n = n || 'fx'; var i = n + 'mark', o = e ? 0 : (N._data(t, i) || 1) - 1; o ? N._data(t, i, o) : (N.removeData(t, i, !0), F(t, n, 'mark'));
    }
  }, queue: function(e, t, n){
    var i; if (e) {
      return t = (t || 'fx') + 'queue', i = N._data(e, t), n && (!i || N.isArray(n) ? i = N._data(e, t, N.makeArray(n)) : i.push(n)), i || [];
    }
  }, dequeue: function(e, t){
    t = t || 'fx'; var n = N.queue(e, t), i = n.shift(), o = {}; i === 'inprogress' && (i = n.shift()), i && (t === 'fx' && n.unshift('inprogress'), N._data(e, t + '.run', o), i.call(e, function(){
      N.dequeue(e, t);
    }, o)), n.length || (N.removeData(e, t + 'queue ' + t + '.run', !0), F(e, t, 'queue'));
  } }), N.fn.extend({ queue: function(e, n){
    var i = 2; return typeof e !== 'string' && (n = e, e = 'fx', i--), arguments.length < i ? N.queue(this[0], e) : n === t ? this : this.each(function(){
      var t = N.queue(this, e, n); e === 'fx' && t[0] !== 'inprogress' && N.dequeue(this, e);
    });
  }, dequeue: function(e){
    return this.each(function(){
      N.dequeue(this, e);
    });
  }, delay: function(e, t){
    return e = N.fx ? N.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function(t, n){
      var i = setTimeout(t, e); n.stop = function(){
        clearTimeout(i);
      };
    });
  }, clearQueue: function(e){
    return this.queue(e || 'fx', []);
  }, promise: function(e, n){
    function i(){
      --l || r.resolveWith(s, [s]);
    } typeof e !== 'string' && (n = e, e = t), e = e || 'fx'; for (var o, r = N.Deferred(), s = this, a = s.length, l = 1, c = e + 'defer', u = e + 'queue', d = e + 'mark'; a--;){
      (o = N.data(s[a], c, t, !0) || (N.data(s[a], u, t, !0) || N.data(s[a], d, t, !0)) && N.data(s[a], c, N.Callbacks('once memory'), !0)) && (l++, o.add(i));
    } return i(), r.promise(n);
  } }); var z, B, q, R = /[\n\t\r]/g, W = /\s+/, U = /\r/g, G = /^(?:button|input)$/i, Q = /^(?:button|input|object|select|textarea)$/i, V = /^a(?:rea)?$/i, J = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, X = N.support.getSetAttribute; N.fn.extend({ attr: function(e, t){
    return N.access(this, N.attr, e, t, arguments.length > 1);
  }, removeAttr: function(e){
    return this.each(function(){
      N.removeAttr(this, e);
    });
  }, prop: function(e, t){
    return N.access(this, N.prop, e, t, arguments.length > 1);
  }, removeProp: function(e){
    return e = N.propFix[e] || e, this.each(function(){
      try {
        this[e] = t, delete this[e];
      } catch (e){}
    });
  }, addClass: function(e){
    var t, n, i, o, r, s, a; if (N.isFunction(e)) {
      return this.each(function(t){
        N(this).addClass(e.call(this, t, this.className));
      });
    } if (e && typeof e === 'string') {
      for (t = e.split(W), n = 0, i = this.length; n < i; n++) {
        if (o = this[n], o.nodeType === 1) {
          if (o.className || t.length !== 1){
            for (r = ' ' + o.className + ' ', s = 0, a = t.length; s < a; s++){
              ~r.indexOf(' ' + t[s] + ' ') || (r += t[s] + ' ');
            }o.className = N.trim(r);
          } else {
            o.className = e;
          }
        }
      }
    } return this;
  }, removeClass: function(e){
    var n, i, o, r, s, a, l; if (N.isFunction(e)) {
      return this.each(function(t){
        N(this).removeClass(e.call(this, t, this.className));
      });
    } if (e && typeof e === 'string' || e === t) {
      for (n = (e || '').split(W), i = 0, o = this.length; i < o; i++) {
        if (r = this[i], r.nodeType === 1 && r.className) {
          if (e){
            for (s = (' ' + r.className + ' ').replace(R, ' '), a = 0, l = n.length; a < l; a++){
              s = s.replace(' ' + n[a] + ' ', ' ');
            }r.className = N.trim(s);
          } else {
            r.className = '';
          }
        }
      }
    } return this;
  }, toggleClass: function(e, t){
    var n = typeof e, i = typeof t === 'boolean'; return N.isFunction(e) ? this.each(function(n){
      N(this).toggleClass(e.call(this, n, this.className, t), t);
    }) : this.each(function(){
      if (n === 'string') {
        for (var o, r = 0, s = N(this), a = t, l = e.split(W); o = l[r++];){
          a = i ? a : !s.hasClass(o), s[a ? 'addClass' : 'removeClass'](o);
        }
      } else {
        n !== 'undefined' && n !== 'boolean' || (this.className && N._data(this, '__className__', this.className), this.className = this.className || !1 === e ? '' : N._data(this, '__className__') || '');
      }
    });
  }, hasClass: function(e){
    for (var t = ' ' + e + ' ', n = 0, i = this.length; n < i; n++) {
      if (this[n].nodeType === 1 && (' ' + this[n].className + ' ').replace(R, ' ').indexOf(t) > -1) {
        return !0;
      }
    } return !1;
  }, val: function(e){
    var n, i, o, r = this[0]; return arguments.length ? (o = N.isFunction(e), this.each(function(i){
      var r, s = N(this); this.nodeType === 1 && (r = o ? e.call(this, i, s.val()) : e, r == null ? r = '' : typeof r === 'number' ? r += '' : N.isArray(r) && (r = N.map(r, function(e){
        return e == null ? '' : e + '';
      })), n = N.valHooks[this.type] || N.valHooks[this.nodeName.toLowerCase()], n && 'set' in n && n.set(this, r, 'value') !== t || (this.value = r));
    })) : r ? (n = N.valHooks[r.type] || N.valHooks[r.nodeName.toLowerCase()]) && 'get' in n && (i = n.get(r, 'value')) !== t ? i : (i = r.value, typeof i === 'string' ? i.replace(U, '') : i == null ? '' : i) : void 0;
  } }), N.extend({ valHooks: { option: { get: function(e){
    var t = e.attributes.value; return !t || t.specified ? e.value : e.text;
  } }, select: { get: function(e){
    var t, n, i, o, r = e.selectedIndex, s = [], a = e.options, l = e.type === 'select-one'; if (r < 0) {
      return null;
    } for (n = l ? r : 0, i = l ? r + 1 : a.length; n < i; n++) {
      if (o = a[n], o.selected && (N.support.optDisabled ? !o.disabled : o.getAttribute('disabled') === null) && (!o.parentNode.disabled || !N.nodeName(o.parentNode, 'optgroup'))){
        if (t = N(o).val(), l) {
          return t;
        } s.push(t);
      }
    } return l && !s.length && a.length ? N(a[r]).val() : s;
  }, set: function(e, t){
    var n = N.makeArray(t); return N(e).find('option').each(function(){
      this.selected = N.inArray(N(this).val(), n) >= 0;
    }), n.length || (e.selectedIndex = -1), n;
  } }}, attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 }, attr: function(e, n, i, o){
    var r, s, a, l = e.nodeType; if (e && l !== 3 && l !== 8 && l !== 2) {
      return o && n in N.attrFn ? N(e)[n](i) : void 0 === e.getAttribute ? N.prop(e, n, i) : ((a = l !== 1 || !N.isXMLDoc(e)) && (n = n.toLowerCase(), s = N.attrHooks[n] || (J.test(n) ? B : z)), i !== t ? i === null ? void N.removeAttr(e, n) : s && 'set' in s && a && (r = s.set(e, i, n)) !== t ? r : (e.setAttribute(n, '' + i), i) : s && 'get' in s && a && (r = s.get(e, n)) !== null ? r : (r = e.getAttribute(n), r === null ? t : r));
    }
  }, removeAttr: function(e, t){
    var n, i, o, r, s, a = 0; if (t && e.nodeType === 1) {
      for (i = t.toLowerCase().split(W), r = i.length; a < r; a++){
        (o = i[a]) && (n = N.propFix[o] || o, s = J.test(o), s || N.attr(e, o, ''), e.removeAttribute(X ? o : n), s && n in e && (e[n] = !1));
      }
    }
  }, attrHooks: { type: { set: function(e, t){
    if (G.test(e.nodeName) && e.parentNode){
      N.error("type property can't be changed");
    } else if (!N.support.radioValue && t === 'radio' && N.nodeName(e, 'input')){
      var n = e.value; return e.setAttribute('type', t), n && (e.value = n), t;
    }
  } }, value: { get: function(e, t){
    return z && N.nodeName(e, 'button') ? z.get(e, t) : t in e ? e.value : null;
  }, set: function(e, t, n){
    if (z && N.nodeName(e, 'button')) {
      return z.set(e, t, n);
    } e.value = t;
  } }}, propFix: { tabindex: 'tabIndex', readonly: 'readOnly', for: 'htmlFor', class: 'className', maxlength: 'maxLength', cellspacing: 'cellSpacing', cellpadding: 'cellPadding', rowspan: 'rowSpan', colspan: 'colSpan', usemap: 'useMap', frameborder: 'frameBorder', contenteditable: 'contentEditable' }, prop: function(e, n, i){
    var o, r, s = e.nodeType; if (e && s !== 3 && s !== 8 && s !== 2) {
      return (s !== 1 || !N.isXMLDoc(e)) && (n = N.propFix[n] || n, r = N.propHooks[n]), i !== t ? r && 'set' in r && (o = r.set(e, i, n)) !== t ? o : e[n] = i : r && 'get' in r && (o = r.get(e, n)) !== null ? o : e[n];
    }
  }, propHooks: { tabIndex: { get: function(e){
    var n = e.getAttributeNode('tabindex'); return n && n.specified ? parseInt(n.value, 10) : Q.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : t;
  } }}}), N.attrHooks.tabindex = N.propHooks.tabIndex, B = { get: function(e, n){
    var i, o = N.prop(e, n); return !0 === o || typeof o !== 'boolean' && (i = e.getAttributeNode(n)) && !1 !== i.nodeValue ? n.toLowerCase() : t;
  }, set: function(e, t, n){
    var i; return !1 === t ? N.removeAttr(e, n) : (i = N.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n;
  } }, X || (q = { name: !0, id: !0, coords: !0 }, z = N.valHooks.button = { get: function(e, n){
    var i; return i = e.getAttributeNode(n), i && (q[n] ? i.nodeValue !== '' : i.specified) ? i.nodeValue : t;
  }, set: function(e, t, n){
    var i = e.getAttributeNode(n); return i || (i = D.createAttribute(n), e.setAttributeNode(i)), i.nodeValue = t + '';
  } }, N.attrHooks.tabindex.set = z.set, N.each(['width', 'height'], function(e, t){
    N.attrHooks[t] = N.extend(N.attrHooks[t], { set: function(e, n){
      if (n === '') {
        return e.setAttribute(t, 'auto'), n;
      }
    } });
  }), N.attrHooks.contenteditable = { get: z.get, set: function(e, t, n){
    t === '' && (t = 'false'), z.set(e, t, n);
  } }), N.support.hrefNormalized || N.each(['href', 'src', 'width', 'height'], function(e, n){
    N.attrHooks[n] = N.extend(N.attrHooks[n], { get: function(e){
      var i = e.getAttribute(n, 2); return i === null ? t : i;
    } });
  }), N.support.style || (N.attrHooks.style = { get: function(e){
    return e.style.cssText.toLowerCase() || t;
  }, set: function(e, t){
    return e.style.cssText = '' + t;
  } }), N.support.optSelected || (N.propHooks.selected = N.extend(N.propHooks.selected, { get: function(e){
    var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
  } })), N.support.enctype || (N.propFix.enctype = 'encoding'), N.support.checkOn || N.each(['radio', 'checkbox'], function(){
    N.valHooks[this] = { get: function(e){
      return e.getAttribute('value') === null ? 'on' : e.value;
    } };
  }), N.each(['radio', 'checkbox'], function(){
    N.valHooks[this] = N.extend(N.valHooks[this], { set: function(e, t){
      if (N.isArray(t)) {
        return e.checked = N.inArray(N(e).val(), t) >= 0;
      }
    } });
  }); var Y = /^(?:textarea|input|select)$/i, K = /^([^\.]*)?(?:\.(.+))?$/, Z = /(?:^|\s)hover(\.\S+)?\b/, ee = /^key/, te = /^(?:mouse|contextmenu)|click/, ne = /^(?:focusinfocus|focusoutblur)$/, ie = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, oe = function(e){
      var t = ie.exec(e); return t && (t[1] = (t[1] || '').toLowerCase(), t[3] = t[3] && new RegExp('(?:^|\\s)' + t[3] + '(?:\\s|$)')), t;
    }, re = function(e, t){
      var n = e.attributes || {}; return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n.class || {}).value));
    }, se = function(e){
      return N.event.special.hover ? e : e.replace(Z, 'mouseenter$1 mouseleave$1');
    }; N.event = { add: function(e, n, i, o, r){
    var s, a, l, c, u, d, p, f, h, g, m; if (e.nodeType !== 3 && e.nodeType !== 8 && n && i && (s = N._data(e))){
      for (i.handler && (h = i, i = h.handler, r = h.selector), i.guid || (i.guid = N.guid++), l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function(e){
        return void 0 === N || e && N.event.triggered === e.type ? t : N.event.dispatch.apply(a.elem, arguments);
      }, a.elem = e), n = N.trim(se(n)).split(' '), c = 0; c < n.length; c++){
        u = K.exec(n[c]) || [], d = u[1], p = (u[2] || '').split('.').sort(), m = N.event.special[d] || {}, d = (r ? m.delegateType : m.bindType) || d, m = N.event.special[d] || {}, f = N.extend({ type: d, origType: u[1], data: o, handler: i, guid: i.guid, selector: r, quick: r && oe(r), namespace: p.join('.') }, h), g = l[d], g || (g = l[d] = [], g.delegateCount = 0, m.setup && !1 !== m.setup.call(e, o, p, a) || (e.addEventListener ? e.addEventListener(d, a, !1) : e.attachEvent && e.attachEvent('on' + d, a))), m.add && (m.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), r ? g.splice(g.delegateCount++, 0, f) : g.push(f), N.event.global[d] = !0;
      }e = null;
    }
  }, global: {}, remove: function(e, t, n, i, o){
    var r, s, a, l, c, u, d, p, f, h, g, m, y = N.hasData(e) && N._data(e); if (y && (p = y.events)){
      for (t = N.trim(se(t || '')).split(' '), r = 0; r < t.length; r++) {
        if (s = K.exec(t[r]) || [], a = l = s[1], c = s[2], a){
          for (f = N.event.special[a] || {}, a = (i ? f.delegateType : f.bindType) || a, g = p[a] || [], u = g.length, c = c ? new RegExp('(^|\\.)' + c.split('.').sort().join('\\.(?:.*\\.)?') + '(\\.|$)') : null, d = 0; d < g.length; d++){
            m = g[d], (o || l === m.origType) && (!n || n.guid === m.guid) && (!c || c.test(m.namespace)) && (!i || i === m.selector || i === '**' && m.selector) && (g.splice(d--, 1), m.selector && g.delegateCount--, f.remove && f.remove.call(e, m));
          }g.length === 0 && u !== g.length && ((!f.teardown || !1 === f.teardown.call(e, c)) && N.removeEvent(e, a, y.handle), delete p[a]);
        } else {
          for (a in p){
            N.event.remove(e, a + t[r], n, i, !0);
          }
        }
      }N.isEmptyObject(p) && (h = y.handle, h && (h.elem = null), N.removeData(e, ['events', 'handle'], !0));
    }
  }, customEvent: { getData: !0, setData: !0, changeData: !0 }, trigger: function(n, i, o, r){
    if (!o || o.nodeType !== 3 && o.nodeType !== 8){
      var s, a, l, c, u, d, p, f, h, g, m = n.type || n, y = []; if (ne.test(m + N.event.triggered)) {
        return;
      } if (m.indexOf('!') >= 0 && (m = m.slice(0, -1), a = !0), m.indexOf('.') >= 0 && (y = m.split('.'), m = y.shift(), y.sort()), (!o || N.event.customEvent[m]) && !N.event.global[m]) {
        return;
      } if (n = typeof n === 'object' ? n[N.expando] ? n : new N.Event(m, n) : new N.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = a, n.namespace = y.join('.'), n.namespace_re = n.namespace ? new RegExp('(^|\\.)' + y.join('\\.(?:.*\\.)?') + '(\\.|$)') : null, d = m.indexOf(':') < 0 ? 'on' + m : '', !o){
        s = N.cache; for (l in s){
          s[l].events && s[l].events[m] && N.event.trigger(n, i, s[l].handle.elem, !0);
        } return;
      } if (n.result = t, n.target || (n.target = o), i = i != null ? N.makeArray(i) : [], i.unshift(n), p = N.event.special[m] || {}, p.trigger && !1 === p.trigger.apply(o, i)) {
        return;
      } if (h = [[o, p.bindType || m]], !r && !p.noBubble && !N.isWindow(o)){
        for (g = p.delegateType || m, c = ne.test(g + m) ? o : o.parentNode, u = null; c; c = c.parentNode){
          h.push([c, g]), u = c;
        }u && u === o.ownerDocument && h.push([u.defaultView || u.parentWindow || e, g]);
      } for (l = 0; l < h.length && !n.isPropagationStopped(); l++){
        c = h[l][0], n.type = h[l][1], f = (N._data(c, 'events') || {})[n.type] && N._data(c, 'handle'), f && f.apply(c, i), (f = d && c[d]) && N.acceptData(c) && !1 === f.apply(c, i) && n.preventDefault();
      } return n.type = m, !r && !n.isDefaultPrevented() && (!p._default || !1 === p._default.apply(o.ownerDocument, i)) && (m !== 'click' || !N.nodeName(o, 'a')) && N.acceptData(o) && d && o[m] && (m !== 'focus' && m !== 'blur' || n.target.offsetWidth !== 0) && !N.isWindow(o) && (u = o[d], u && (o[d] = null), N.event.triggered = m, o[m](), N.event.triggered = t, u && (o[d] = u)), n.result;
    }
  }, dispatch: function(n){
    n = N.event.fix(n || e.event); var i, o, r, s, a, l, c, u, d, p, f = (N._data(this, 'events') || {})[n.type] || [], h = f.delegateCount, g = [].slice.call(arguments, 0), m = !n.exclusive && !n.namespace, y = N.event.special[n.type] || {}, v = []; if (g[0] = n, n.delegateTarget = this, !y.preDispatch || !1 !== y.preDispatch.call(this, n)){
      if (h && (!n.button || n.type !== 'click')) {
        for (s = N(this), s.context = this.ownerDocument || this, r = n.target; r != this; r = r.parentNode || this) {
          if (!0 !== r.disabled){
            for (l = {}, u = [], s[0] = r, i = 0; i < h; i++){
              d = f[i], p = d.selector, l[p] === t && (l[p] = d.quick ? re(r, d.quick) : s.is(p)), l[p] && u.push(d);
            }u.length && v.push({ elem: r, matches: u });
          }
        }
      } for (f.length > h && v.push({ elem: this, matches: f.slice(h) }), i = 0; i < v.length && !n.isPropagationStopped(); i++) {
        for (c = v[i], n.currentTarget = c.elem, o = 0; o < c.matches.length && !n.isImmediatePropagationStopped(); o++){
          d = c.matches[o], (m || !n.namespace && !d.namespace || n.namespace_re && n.namespace_re.test(d.namespace)) && (n.data = d.data, n.handleObj = d, (a = ((N.event.special[d.origType] || {}).handle || d.handler).apply(c.elem, g)) !== t && (n.result = a, !1 === a && (n.preventDefault(), n.stopPropagation())));
        }
      } return y.postDispatch && y.postDispatch.call(this, n), n.result;
    }
  }, props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '), fixHooks: {}, keyHooks: { props: 'char charCode key keyCode'.split(' '), filter: function(e, t){
    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
  } }, mouseHooks: { props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '), filter: function(e, n){
    var i, o, r, s = n.button, a = n.fromElement; return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || D, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && s !== t && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
  } }, fix: function(e){
    if (e[N.expando]) {
      return e;
    } var n, i, o = e, r = N.event.fixHooks[e.type] || {}, s = r.props ? this.props.concat(r.props) : this.props; for (e = N.Event(o), n = s.length; n;){
      i = s[--n], e[i] = o[i];
    } return e.target || (e.target = o.srcElement || D), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), r.filter ? r.filter(e, o) : e;
  }, special: { ready: { setup: N.bindReady }, load: { noBubble: !0 }, focus: { delegateType: 'focusin' }, blur: { delegateType: 'focusout' }, beforeunload: { setup: function(e, t, n){
    N.isWindow(this) && (this.onbeforeunload = n);
  }, teardown: function(e, t){
    this.onbeforeunload === t && (this.onbeforeunload = null);
  } }}, simulate: function(e, t, n, i){
    var o = N.extend(new N.Event(), n, { type: e, isSimulated: !0, originalEvent: {}}); i ? N.event.trigger(o, null, t) : N.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault();
  } }, N.event.handle = N.event.dispatch, N.removeEvent = D.removeEventListener ? function(e, t, n){
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function(e, t, n){
    e.detachEvent && e.detachEvent('on' + t, n);
  }, N.Event = function(e, t){
    if (!(this instanceof N.Event)) {
      return new N.Event(e, t);
    } e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? L : E) : this.type = e, t && N.extend(this, t), this.timeStamp = e && e.timeStamp || N.now(), this[N.expando] = !0;
  }, N.Event.prototype = { preventDefault: function(){
    this.isDefaultPrevented = L; var e = this.originalEvent; !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
  }, stopPropagation: function(){
    this.isPropagationStopped = L; var e = this.originalEvent; !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
  }, stopImmediatePropagation: function(){
    this.isImmediatePropagationStopped = L, this.stopPropagation();
  }, isDefaultPrevented: E, isPropagationStopped: E, isImmediatePropagationStopped: E }, N.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function(e, t){
    N.event.special[e] = { delegateType: t, bindType: t, handle: function(e){
      var n, i = this, o = e.relatedTarget, r = e.handleObj; r.selector; return o && (o === i || N.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n;
    } };
  }), N.support.submitBubbles || (N.event.special.submit = { setup: function(){
    if (N.nodeName(this, 'form')) {
      return !1;
    } N.event.add(this, 'click._submit keypress._submit', function(e){
      var n = e.target, i = N.nodeName(n, 'input') || N.nodeName(n, 'button') ? n.form : t; i && !i._submit_attached && (N.event.add(i, 'submit._submit', function(e){
        e._submit_bubble = !0;
      }), i._submit_attached = !0);
    });
  }, postDispatch: function(e){
    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && N.event.simulate('submit', this.parentNode, e, !0));
  }, teardown: function(){
    if (N.nodeName(this, 'form')) {
      return !1;
    } N.event.remove(this, '._submit');
  } }), N.support.changeBubbles || (N.event.special.change = { setup: function(){
    if (Y.test(this.nodeName)) {
      return this.type !== 'checkbox' && this.type !== 'radio' || (N.event.add(this, 'propertychange._change', function(e){
        e.originalEvent.propertyName === 'checked' && (this._just_changed = !0);
      }), N.event.add(this, 'click._change', function(e){
        this._just_changed && !e.isTrigger && (this._just_changed = !1, N.event.simulate('change', this, e, !0));
      })), !1;
    } N.event.add(this, 'beforeactivate._change', function(e){
      var t = e.target; Y.test(t.nodeName) && !t._change_attached && (N.event.add(t, 'change._change', function(e){
        this.parentNode && !e.isSimulated && !e.isTrigger && N.event.simulate('change', this.parentNode, e, !0);
      }), t._change_attached = !0);
    });
  }, handle: function(e){
    var t = e.target; if (this !== t || e.isSimulated || e.isTrigger || t.type !== 'radio' && t.type !== 'checkbox') {
      return e.handleObj.handler.apply(this, arguments);
    }
  }, teardown: function(){
    return N.event.remove(this, '._change'), Y.test(this.nodeName);
  } }), N.support.focusinBubbles || N.each({ focus: 'focusin', blur: 'focusout' }, function(e, t){
    var n = 0, i = function(e){
      N.event.simulate(t, e.target, N.event.fix(e), !0);
    }; N.event.special[t] = { setup: function(){
      n++ == 0 && D.addEventListener(e, i, !0);
    }, teardown: function(){
      --n == 0 && D.removeEventListener(e, i, !0);
    } };
  }), N.fn.extend({ on: function(e, n, i, o, r){
    var s, a; if (typeof e === 'object'){
      typeof n !== 'string' && (i = i || n, n = t); for (a in e) {
        this.on(a, n, i, e[a], r);
      } return this;
    } if (i == null && o == null ? (o = n, i = n = t) : o == null && (typeof n === 'string' ? (o = i, i = t) : (o = i, i = n, n = t)), !1 === o){
      o = E;
    } else if (!o) {
      return this;
    } return r === 1 && (s = o, o = function(e){
      return N().off(e), s.apply(this, arguments);
    }, o.guid = s.guid || (s.guid = N.guid++)), this.each(function(){
      N.event.add(this, e, o, i, n);
    });
  }, one: function(e, t, n, i){
    return this.on(e, t, n, i, 1);
  }, off: function(e, n, i){
    if (e && e.preventDefault && e.handleObj){
      var o = e.handleObj; return N(e.delegateTarget).off(o.namespace ? o.origType + '.' + o.namespace : o.origType, o.selector, o.handler), this;
    } if (typeof e === 'object'){
      for (var r in e) {
        this.off(r, n, e[r]);
      } return this;
    } return !1 !== n && typeof n !== 'function' || (i = n, n = t), !1 === i && (i = E), this.each(function(){
      N.event.remove(this, e, i, n);
    });
  }, bind: function(e, t, n){
    return this.on(e, null, t, n);
  }, unbind: function(e, t){
    return this.off(e, null, t);
  }, live: function(e, t, n){
    return N(this.context).on(e, this.selector, t, n), this;
  }, die: function(e, t){
    return N(this.context).off(e, this.selector || '**', t), this;
  }, delegate: function(e, t, n, i){
    return this.on(t, e, n, i);
  }, undelegate: function(e, t, n){
    return arguments.length == 1 ? this.off(e, '**') : this.off(t, e, n);
  }, trigger: function(e, t){
    return this.each(function(){
      N.event.trigger(e, t, this);
    });
  }, triggerHandler: function(e, t){
    if (this[0]) {
      return N.event.trigger(e, t, this[0], !0);
    }
  }, toggle: function(e){
    var t = arguments, n = e.guid || N.guid++, i = 0, o = function(n){
      var o = (N._data(this, 'lastToggle' + e.guid) || 0) % i; return N._data(this, 'lastToggle' + e.guid, o + 1), n.preventDefault(), t[o].apply(this, arguments) || !1;
    }; for (o.guid = n; i < t.length;){
      t[i++].guid = n;
    } return this.click(o);
  }, hover: function(e, t){
    return this.mouseenter(e).mouseleave(t || e);
  } }), N.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function(e, t){
    N.fn[t] = function(e, n){
      return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    }, N.attrFn && (N.attrFn[t] = !0), ee.test(t) && (N.event.fixHooks[t] = N.event.keyHooks), te.test(t) && (N.event.fixHooks[t] = N.event.mouseHooks);
  }), (function(){
    function e(e, t, n, i, r, s){
      for (var a = 0, l = i.length; a < l; a++){
        var c = i[a]; if (c){
          var u = !1; for (c = c[e]; c;){
            if (c[o] === n){
              u = i[c.sizset]; break;
            } if (c.nodeType === 1) {
              if (s || (c[o] = n, c.sizset = a), typeof t !== 'string'){
                if (c === t){
                  u = !0; break;
                }
              } else if (p.filter(t, [c]).length > 0){
                u = c; break;
              }
            }c = c[e];
          }i[a] = u;
        }
      }
    } function n(e, t, n, i, r, s){
      for (var a = 0, l = i.length; a < l; a++){
        var c = i[a]; if (c){
          var u = !1; for (c = c[e]; c;){
            if (c[o] === n){
              u = i[c.sizset]; break;
            } if (c.nodeType === 1 && !s && (c[o] = n, c.sizset = a), c.nodeName.toLowerCase() === t){
              u = c; break;
            }c = c[e];
          }i[a] = u;
        }
      }
    } var i = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, o = 'sizcache' + (Math.random() + '').replace('.', ''), r = 0, s = Object.prototype.toString, a = !1, l = !0, c = /\\/g, u = /\r\n/g, d = /\W/; [0, 0].sort(function(){
      return l = !1, 0;
    }); var p = function(e, t, n, o){
      n = n || [], t = t || D; var r = t; if (t.nodeType !== 1 && t.nodeType !== 9) {
        return [];
      } if (!e || typeof e !== 'string') {
        return n;
      } var a, l, c, u, d, f, m, y, b = !0, x = p.isXML(t), w = [], S = e; do {
        if (i.exec(''), (a = i.exec(S)) && (S = a[3], w.push(a[1]), a[2])){
          u = a[3]; break;
        }
      } while (a);if (w.length > 1 && g.exec(e)) {
        if (w.length === 2 && h.relative[w[0]]){
          l = C(w[0] + w[1], t, o);
        } else {
          for (l = h.relative[w[0]] ? [t] : p(w.shift(), t); w.length;){
            e = w.shift(), h.relative[e] && (e += w.shift()), l = C(e, l, o);
          }
        }
      } else if (!o && w.length > 1 && t.nodeType === 9 && !x && h.match.ID.test(w[0]) && !h.match.ID.test(w[w.length - 1]) && (d = p.find(w.shift(), t, x), t = d.expr ? p.filter(d.expr, d.set)[0] : d.set[0]), t) {
        for (d = o ? { expr: w.pop(), set: v(o) } : p.find(w.pop(), w.length !== 1 || w[0] !== '~' && w[0] !== '+' || !t.parentNode ? t : t.parentNode, x), l = d.expr ? p.filter(d.expr, d.set) : d.set, w.length > 0 ? c = v(l) : b = !1; w.length;){
          f = w.pop(), m = f, h.relative[f] ? m = w.pop() : f = '', m == null && (m = t), h.relative[f](c, m, x);
        }
      } else {
        c = w = [];
      } if (c || (c = l), c || p.error(f || e), s.call(c) === '[object Array]') {
        if (b) {
          if (t && t.nodeType === 1) {
            for (y = 0; c[y] != null; y++){
              c[y] && (!0 === c[y] || c[y].nodeType === 1 && p.contains(t, c[y])) && n.push(l[y]);
            }
          } else {
            for (y = 0; c[y] != null; y++){
              c[y] && c[y].nodeType === 1 && n.push(l[y]);
            }
          }
        } else {
          n.push.apply(n, c);
        }
      } else {
        v(c, n);
      } return u && (p(u, r, n, o), p.uniqueSort(n)), n;
    }; p.uniqueSort = function(e){
      if (b && (a = l, e.sort(b), a)) {
        for (var t = 1; t < e.length; t++){
          e[t] === e[t - 1] && e.splice(t--, 1);
        }
      } return e;
    }, p.matches = function(e, t){
      return p(e, null, null, t);
    }, p.matchesSelector = function(e, t){
      return p(t, null, null, [e]).length > 0;
    }, p.find = function(e, t, n){
      var i, o, r, s, a, l; if (!e) {
        return [];
      } for (o = 0, r = h.order.length; o < r; o++) {
        if (a = h.order[o], (s = h.leftMatch[a].exec(e)) && (l = s[1], s.splice(1, 1), l.substr(l.length - 1) !== '\\' && (s[1] = (s[1] || '').replace(c, ''), (i = h.find[a](s, t, n)) != null))){
          e = e.replace(h.match[a], ''); break;
        }
      } return i || (i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName('*') : []), { set: i, expr: e };
    }, p.filter = function(e, n, i, o){
      for (var r, s, a, l, c, u, d, f, g, m = e, y = [], v = n, b = n && n[0] && p.isXML(n[0]); e && n.length;){
        for (a in h.filter) {
          if ((r = h.leftMatch[a].exec(e)) != null && r[2]){
            if (u = h.filter[a], d = r[1], s = !1, r.splice(1, 1), d.substr(d.length - 1) === '\\') {
              continue;
            } if (v === y && (y = []), h.preFilter[a]) {
              if (r = h.preFilter[a](r, v, i, y, o, b)){
                if (!0 === r) {
                  continue;
                }
              } else {
                s = l = !0;
              }
            } if (r) {
              for (f = 0; (c = v[f]) != null; f++){
                c && (l = u(c, r, f, v), g = o ^ l, i && l != null ? g ? s = !0 : v[f] = !1 : g && (y.push(c), s = !0));
              }
            } if (l !== t){
              if (i || (v = y), e = e.replace(h.match[a], ''), !s) {
                return [];
              } break;
            }
          }
        } if (e === m){
          if (s != null) {
            break;
          } p.error(e);
        }m = e;
      } return v;
    }, p.error = function(e){
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }; var f = p.getText = function(e){
        var t, n, i = e.nodeType, o = ''; if (i){
          if (i === 1 || i === 9 || i === 11){
            if (typeof e.textContent === 'string') {
              return e.textContent;
            } if (typeof e.innerText === 'string') {
              return e.innerText.replace(u, '');
            } for (e = e.firstChild; e; e = e.nextSibling){
              o += f(e);
            }
          } else if (i === 3 || i === 4) {
            return e.nodeValue;
          }
        } else {
          for (t = 0; n = e[t]; t++){
            n.nodeType !== 8 && (o += f(n));
          }
        } return o;
      }, h = p.selectors = { order: ['ID', 'NAME', 'TAG'], match: { ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ }, leftMatch: {}, attrMap: { class: 'className', for: 'htmlFor' }, attrHandle: { href: function(e){
        return e.getAttribute('href');
      }, type: function(e){
        return e.getAttribute('type');
      } }, relative: { '+': function(e, t){
        var n = typeof t === 'string', i = n && !d.test(t), o = n && !i; i && (t = t.toLowerCase()); for (var r, s = 0, a = e.length; s < a; s++) {
          if (r = e[s]){
            for (;(r = r.previousSibling) && r.nodeType !== 1;){}e[s] = o || r && r.nodeName.toLowerCase() === t ? r || !1 : r === t;
          }
        }o && p.filter(t, e, !0);
      }, '>': function(e, t){
        var n, i = typeof t === 'string', o = 0, r = e.length; if (i && !d.test(t)){
          for (t = t.toLowerCase(); o < r; o++) {
            if (n = e[o]){
              var s = n.parentNode; e[o] = s.nodeName.toLowerCase() === t && s;
            }
          }
        } else {
          for (;o < r; o++){
            (n = e[o]) && (e[o] = i ? n.parentNode : n.parentNode === t);
          }i && p.filter(t, e, !0);
        }
      }, '': function(t, i, o){
        var s, a = r++, l = e; typeof i === 'string' && !d.test(i) && (i = i.toLowerCase(), s = i, l = n), l('parentNode', i, a, t, s, o);
      }, '~': function(t, i, o){
        var s, a = r++, l = e; typeof i === 'string' && !d.test(i) && (i = i.toLowerCase(), s = i, l = n), l('previousSibling', i, a, t, s, o);
      } }, find: { ID: function(e, t, n){
        if (void 0 !== t.getElementById && !n){
          var i = t.getElementById(e[1]); return i && i.parentNode ? [i] : [];
        }
      }, NAME: function(e, t){
        if (void 0 !== t.getElementsByName){
          for (var n = [], i = t.getElementsByName(e[1]), o = 0, r = i.length; o < r; o++){
            i[o].getAttribute('name') === e[1] && n.push(i[o]);
          } return n.length === 0 ? null : n;
        }
      }, TAG: function(e, t){
        if (void 0 !== t.getElementsByTagName) {
          return t.getElementsByTagName(e[1]);
        }
      } }, preFilter: { CLASS: function(e, t, n, i, o, r){
        if (e = ' ' + e[1].replace(c, '') + ' ', r) {
          return e;
        } for (var s, a = 0; (s = t[a]) != null; a++){
          s && (o ^ (s.className && (' ' + s.className + ' ').replace(/[\t\n\r]/g, ' ').indexOf(e) >= 0) ? n || i.push(s) : n && (t[a] = !1));
        } return !1;
      }, ID: function(e){
        return e[1].replace(c, '');
      }, TAG: function(e, t){
        return e[1].replace(c, '').toLowerCase();
      }, CHILD: function(e){
        if (e[1] === 'nth'){
          e[2] || p.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, ''); var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === 'even' && '2n' || e[2] === 'odd' && '2n+1' || !/\D/.test(e[2]) && '0n+' + e[2] || e[2]); e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0;
        } else {
          e[2] && p.error(e[0]);
        } return e[0] = r++, e;
      }, ATTR: function(e, t, n, i, o, r){
        var s = e[1] = e[1].replace(c, ''); return !r && h.attrMap[s] && (e[1] = h.attrMap[s]), e[4] = (e[4] || e[5] || '').replace(c, ''), e[2] === '~=' && (e[4] = ' ' + e[4] + ' '), e;
      }, PSEUDO: function(e, t, n, o, r){
        if (e[1] === 'not'){
          if (!((i.exec(e[3]) || '').length > 1 || /^\w/.test(e[3]))){
            var s = p.filter(e[3], t, n, !0 ^ r); return n || o.push.apply(o, s), !1;
          }e[3] = p(e[3], null, null, t);
        } else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0])) {
          return !0;
        } return e;
      }, POS: function(e){
        return e.unshift(!0), e;
      } }, filters: { enabled: function(e){
        return !1 === e.disabled && e.type !== 'hidden';
      }, disabled: function(e){
        return !0 === e.disabled;
      }, checked: function(e){
        return !0 === e.checked;
      }, selected: function(e){
        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
      }, parent: function(e){
        return !!e.firstChild;
      }, empty: function(e){
        return !e.firstChild;
      }, has: function(e, t, n){
        return !!p(n[3], e).length;
      }, header: function(e){
        return /h\d/i.test(e.nodeName);
      }, text: function(e){
        var t = e.getAttribute('type'), n = e.type; return e.nodeName.toLowerCase() === 'input' && n === 'text' && (t === n || t === null);
      }, radio: function(e){
        return e.nodeName.toLowerCase() === 'input' && e.type === 'radio';
      }, checkbox: function(e){
        return e.nodeName.toLowerCase() === 'input' && e.type === 'checkbox';
      }, file: function(e){
        return e.nodeName.toLowerCase() === 'input' && e.type === 'file';
      }, password: function(e){
        return e.nodeName.toLowerCase() === 'input' && e.type === 'password';
      }, submit: function(e){
        var t = e.nodeName.toLowerCase(); return (t === 'input' || t === 'button') && e.type === 'submit';
      }, image: function(e){
        return e.nodeName.toLowerCase() === 'input' && e.type === 'image';
      }, reset: function(e){
        var t = e.nodeName.toLowerCase(); return (t === 'input' || t === 'button') && e.type === 'reset';
      }, button: function(e){
        var t = e.nodeName.toLowerCase(); return t === 'input' && e.type === 'button' || t === 'button';
      }, input: function(e){
        return /input|select|textarea|button/i.test(e.nodeName);
      }, focus: function(e){
        return e === e.ownerDocument.activeElement;
      } }, setFilters: { first: function(e, t){
        return t === 0;
      }, last: function(e, t, n, i){
        return t === i.length - 1;
      }, even: function(e, t){
        return t % 2 == 0;
      }, odd: function(e, t){
        return t % 2 == 1;
      }, lt: function(e, t, n){
        return t < n[3] - 0;
      }, gt: function(e, t, n){
        return t > n[3] - 0;
      }, nth: function(e, t, n){
        return n[3] - 0 === t;
      }, eq: function(e, t, n){
        return n[3] - 0 === t;
      } }, filter: { PSEUDO: function(e, t, n, i){
        var o = t[1], r = h.filters[o]; if (r) {
          return r(e, n, t, i);
        } if (o === 'contains') {
          return (e.textContent || e.innerText || f([e]) || '').indexOf(t[3]) >= 0;
        } if (o === 'not'){
          for (var s = t[3], a = 0, l = s.length; a < l; a++) {
            if (s[a] === e) {
              return !1;
            }
          } return !0;
        }p.error(o);
      }, CHILD: function(e, t){
        var n, i, r, s, a, l, c = t[1], u = e; switch (c){
          case 'only':case 'first':for (;u = u.previousSibling;) {
            if (u.nodeType === 1) {
              return !1;
            }
          } if (c === 'first') {
              return !0;
            } u = e; case 'last':for (;u = u.nextSibling;) {
            if (u.nodeType === 1) {
              return !1;
            }
          } return !0; case 'nth':if (n = t[2], i = t[3], n === 1 && i === 0) {
            return !0;
          } if (r = t[0], (s = e.parentNode) && (s[o] !== r || !e.nodeIndex)){
              for (a = 0, u = s.firstChild; u; u = u.nextSibling){
                u.nodeType === 1 && (u.nodeIndex = ++a);
              } s[o] = r;
            } return l = e.nodeIndex - i, n === 0 ? l === 0 : l % n == 0 && l / n >= 0;
        }
      }, ID: function(e, t){
        return e.nodeType === 1 && e.getAttribute('id') === t;
      }, TAG: function(e, t){
        return t === '*' && e.nodeType === 1 || !!e.nodeName && e.nodeName.toLowerCase() === t;
      }, CLASS: function(e, t){
        return (' ' + (e.className || e.getAttribute('class')) + ' ').indexOf(t) > -1;
      }, ATTR: function(e, t){
        var n = t[1], i = p.attr ? p.attr(e, n) : h.attrHandle[n] ? h.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n), o = i + '', r = t[2], s = t[4]; return i == null ? r === '!=' : !r && p.attr ? i != null : r === '=' ? o === s : r === '*=' ? o.indexOf(s) >= 0 : r === '~=' ? (' ' + o + ' ').indexOf(s) >= 0 : s ? r === '!=' ? o !== s : r === '^=' ? o.indexOf(s) === 0 : r === '$=' ? o.substr(o.length - s.length) === s : r === '|=' && (o === s || o.substr(0, s.length + 1) === s + '-') : o && !1 !== i;
      }, POS: function(e, t, n, i){
        var o = t[2], r = h.setFilters[o]; if (r) {
          return r(e, n, t, i);
        }
      } }}, g = h.match.POS, m = function(e, t){
        return '\\' + (t - 0 + 1);
      }; for (var y in h.match){
      h.match[y] = new RegExp(h.match[y].source + /(?![^\[]*\])(?![^\(]*\))/.source), h.leftMatch[y] = new RegExp(/(^(?:.|\r|\n)*?)/.source + h.match[y].source.replace(/\\(\d+)/g, m));
    }h.match.globalPOS = g; var v = function(e, t){
      return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e;
    }; try {
      Array.prototype.slice.call(D.documentElement.childNodes, 0)[0].nodeType;
    } catch (e){
      v = function(e, t){
        var n = 0, i = t || []; if (s.call(e) === '[object Array]'){
          Array.prototype.push.apply(i, e);
        } else if (typeof e.length === 'number') {
          for (var o = e.length; n < o; n++){
            i.push(e[n]);
          }
        } else {
          for (;e[n]; n++){
            i.push(e[n]);
          }
        } return i;
      };
    } var b, x; D.documentElement.compareDocumentPosition ? b = function(e, t){
      return e === t ? (a = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
    } : (b = function(e, t){
      if (e === t) {
        return a = !0, 0;
      } if (e.sourceIndex && t.sourceIndex) {
        return e.sourceIndex - t.sourceIndex;
      } var n, i, o = [], r = [], s = e.parentNode, l = t.parentNode, c = s; if (s === l) {
        return x(e, t);
      } if (!s) {
        return -1;
      } if (!l) {
        return 1;
      } for (;c;){
        o.unshift(c), c = c.parentNode;
      } for (c = l; c;){
        r.unshift(c), c = c.parentNode;
      }n = o.length, i = r.length; for (var u = 0; u < n && u < i; u++) {
        if (o[u] !== r[u]) {
          return x(o[u], r[u]);
        }
      } return u === n ? x(e, r[u], -1) : x(o[u], t, 1);
    }, x = function(e, t, n){
      if (e === t) {
        return n;
      } for (var i = e.nextSibling; i;){
        if (i === t) {
          return -1;
        } i = i.nextSibling;
      } return 1;
    }), (function(){
      var e = D.createElement('div'), n = 'script' + (new Date()).getTime(), i = D.documentElement; e.innerHTML = "<a name='" + n + "'/>", i.insertBefore(e, i.firstChild), D.getElementById(n) && (h.find.ID = function(e, n, i){
        if (void 0 !== n.getElementById && !i){
          var o = n.getElementById(e[1]); return o ? o.id === e[1] || void 0 !== o.getAttributeNode && o.getAttributeNode('id').nodeValue === e[1] ? [o] : t : [];
        }
      }, h.filter.ID = function(e, t){
        var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id'); return e.nodeType === 1 && n && n.nodeValue === t;
      }), i.removeChild(e), i = e = null;
    }()), (function(){
      var e = D.createElement('div'); e.appendChild(D.createComment('')), e.getElementsByTagName('*').length > 0 && (h.find.TAG = function(e, t){
        var n = t.getElementsByTagName(e[1]); if (e[1] === '*'){
          for (var i = [], o = 0; n[o]; o++){
            n[o].nodeType === 1 && i.push(n[o]);
          } n = i;
        } return n;
      }), e.innerHTML = "<a href='#'></a>", e.firstChild && void 0 !== e.firstChild.getAttribute && e.firstChild.getAttribute('href') !== '#' && (h.attrHandle.href = function(e){
        return e.getAttribute('href', 2);
      }), e = null;
    }()), D.querySelectorAll && (function(){
      var e = p, t = D.createElement('div'); if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || t.querySelectorAll('.TEST').length !== 0){
        p = function(t, n, i, o){
          if (n = n || D, !o && !p.isXML(n)){
            var r = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t); if (r && (n.nodeType === 1 || n.nodeType === 9)){
              if (r[1]) {
                return v(n.getElementsByTagName(t), i);
              } if (r[2] && h.find.CLASS && n.getElementsByClassName) {
                return v(n.getElementsByClassName(r[2]), i);
              }
            } if (n.nodeType === 9){
              if (t === 'body' && n.body) {
                return v([n.body], i);
              } if (r && r[3]){
                var s = n.getElementById(r[3]); if (!s || !s.parentNode) {
                  return v([], i);
                } if (s.id === r[3]) {
                  return v([s], i);
                }
              } try {
                return v(n.querySelectorAll(t), i);
              } catch (e){}
            } else if (n.nodeType === 1 && n.nodeName.toLowerCase() !== 'object'){
              var a = n, l = n.getAttribute('id'), c = l || '__sizzle__', u = n.parentNode, d = /^\s*[+~]/.test(t); l ? c = c.replace(/'/g, '\\$&') : n.setAttribute('id', c), d && u && (n = n.parentNode); try {
                if (!d || u) {
                  return v(n.querySelectorAll("[id='" + c + "'] " + t), i);
                }
              } catch (e){} finally {
                l || a.removeAttribute('id');
              }
            }
          } return e(t, n, i, o);
        }; for (var n in e){
          p[n] = e[n];
        }t = null;
      }
    }()), (function(){
      var e = D.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector; if (t){
        var n = !t.call(D.createElement('div'), 'div'), i = !1; try {
          t.call(D.documentElement, "[test!='']:sizzle");
        } catch (e){
          i = !0;
        }p.matchesSelector = function(e, o){
          if (o = o.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !p.isXML(e)) {
            try {
              if (i || !h.match.PSEUDO.test(o) && !/!=/.test(o)){
                var r = t.call(e, o); if (r || !n || e.document && e.document.nodeType !== 11) {
                  return r;
                }
              }
            } catch (e){}
          } return p(o, null, null, [e]).length > 0;
        };
      }
    }()), (function(){
      var e = D.createElement('div'); if (e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && e.getElementsByClassName('e').length !== 0){
        if (e.lastChild.className = 'e', e.getElementsByClassName('e').length === 1) {
          return;
        } h.order.splice(1, 0, 'CLASS'), h.find.CLASS = function(e, t, n){
          if (void 0 !== t.getElementsByClassName && !n) {
            return t.getElementsByClassName(e[1]);
          }
        }, e = null;
      }
    }()), D.documentElement.contains ? p.contains = function(e, t){
      return e !== t && (!e.contains || e.contains(t));
    } : D.documentElement.compareDocumentPosition ? p.contains = function(e, t){
      return !!(16 & e.compareDocumentPosition(t));
    } : p.contains = function(){
      return !1;
    }, p.isXML = function(e){
      var t = (e ? e.ownerDocument || e : 0).documentElement; return !!t && t.nodeName !== 'HTML';
    }; var C = function(e, t, n){
      for (var i, o = [], r = '', s = t.nodeType ? [t] : t; i = h.match.PSEUDO.exec(e);){
        r += i[0], e = e.replace(h.match.PSEUDO, '');
      }e = h.relative[e] ? e + '*' : e; for (var a = 0, l = s.length; a < l; a++){
        p(e, s[a], o, n);
      } return p.filter(r, o);
    }; p.attr = N.attr, p.selectors.attrMap = {}, N.find = p, N.expr = p.selectors, N.expr[':'] = N.expr.filters, N.unique = p.uniqueSort, N.text = p.getText, N.isXMLDoc = p.isXML, N.contains = p.contains;
  }()); var ae = /Until$/, le = /^(?:parents|prevUntil|prevAll)/, ce = /,/, ue = /^.[^:#\[\.,]*$/, de = Array.prototype.slice, pe = N.expr.match.globalPOS, fe = { children: !0, contents: !0, next: !0, prev: !0 }; N.fn.extend({ find: function(e){
    var t, n, i = this; if (typeof e !== 'string') {
      return N(e).filter(function(){
        for (t = 0, n = i.length; t < n; t++) {
          if (N.contains(i[t], this)) {
            return !0;
          }
        }
      });
    } var o, r, s, a = this.pushStack('', 'find', e); for (t = 0, n = this.length; t < n; t++) {
      if (o = a.length, N.find(e, this[t], a), t > 0) {
        for (r = o; r < a.length; r++) {
          for (s = 0; s < o; s++) {
            if (a[s] === a[r]){
              a.splice(r--, 1); break;
            }
          }
        }
      }
    } return a;
  }, has: function(e){
    var t = N(e); return this.filter(function(){
      for (var e = 0, n = t.length; e < n; e++) {
        if (N.contains(this, t[e])) {
          return !0;
        }
      }
    });
  }, not: function(e){
    return this.pushStack(T(this, e, !1), 'not', e);
  }, filter: function(e){
    return this.pushStack(T(this, e, !0), 'filter', e);
  }, is: function(e){
    return !!e && (typeof e === 'string' ? pe.test(e) ? N(e, this.context).index(this[0]) >= 0 : N.filter(e, this).length > 0 : this.filter(e).length > 0);
  }, closest: function(e, t){
    var n, i, o = [], r = this[0]; if (N.isArray(e)){
      for (var s = 1; r && r.ownerDocument && r !== t;){
        for (n = 0; n < e.length; n++){
          N(r).is(e[n]) && o.push({ selector: e[n], elem: r, level: s });
        }r = r.parentNode, s++;
      } return o;
    } var a = pe.test(e) || typeof e !== 'string' ? N(e, t || this.context) : 0; for (n = 0, i = this.length; n < i; n++) {
      for (r = this[n]; r;){
        if (a ? a.index(r) > -1 : N.find.matchesSelector(r, e)){
          o.push(r); break;
        } if (!(r = r.parentNode) || !r.ownerDocument || r === t || r.nodeType === 11) {
          break;
        }
      }
    } return o = o.length > 1 ? N.unique(o) : o, this.pushStack(o, 'closest', e);
  }, index: function(e){
    return e ? typeof e === 'string' ? N.inArray(this[0], N(e)) : N.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
  }, add: function(e, t){
    var n = typeof e === 'string' ? N(e, t) : N.makeArray(e && e.nodeType ? [e] : e), i = N.merge(this.get(), n); return this.pushStack(k(n[0]) || k(i[0]) ? i : N.unique(i));
  }, andSelf: function(){
    return this.add(this.prevObject);
  } }), N.each({ parent: function(e){
    var t = e.parentNode; return t && t.nodeType !== 11 ? t : null;
  }, parents: function(e){
    return N.dir(e, 'parentNode');
  }, parentsUntil: function(e, t, n){
    return N.dir(e, 'parentNode', n);
  }, next: function(e){
    return N.nth(e, 2, 'nextSibling');
  }, prev: function(e){
    return N.nth(e, 2, 'previousSibling');
  }, nextAll: function(e){
    return N.dir(e, 'nextSibling');
  }, prevAll: function(e){
    return N.dir(e, 'previousSibling');
  }, nextUntil: function(e, t, n){
    return N.dir(e, 'nextSibling', n);
  }, prevUntil: function(e, t, n){
    return N.dir(e, 'previousSibling', n);
  }, siblings: function(e){
    return N.sibling((e.parentNode || {}).firstChild, e);
  }, children: function(e){
    return N.sibling(e.firstChild);
  }, contents: function(e){
    return N.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : N.makeArray(e.childNodes);
  } }, function(e, t){
    N.fn[e] = function(n, i){
      var o = N.map(this, t, n); return ae.test(e) || (i = n), i && typeof i === 'string' && (o = N.filter(i, o)), o = this.length > 1 && !fe[e] ? N.unique(o) : o, (this.length > 1 || ce.test(i)) && le.test(e) && (o = o.reverse()), this.pushStack(o, e, de.call(arguments).join(','));
    };
  }), N.extend({ filter: function(e, t, n){
    return n && (e = ':not(' + e + ')'), t.length === 1 ? N.find.matchesSelector(t[0], e) ? [t[0]] : [] : N.find.matches(e, t);
  }, dir: function(e, n, i){
    for (var o = [], r = e[n]; r && r.nodeType !== 9 && (i === t || r.nodeType !== 1 || !N(r).is(i));){
      r.nodeType === 1 && o.push(r), r = r[n];
    } return o;
  }, nth: function(e, t, n, i){
    t = t || 1; for (var o = 0; e && (e.nodeType !== 1 || ++o !== t); e = e[n]){} return e;
  }, sibling: function(e, t){
    for (var n = []; e; e = e.nextSibling){
      e.nodeType === 1 && e !== t && n.push(e);
    } return n;
  } }); var he = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video', ge = / jQuery\d+="(?:\d+|null)"/g, me = /^\s+/, ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ve = /<([\w:]+)/, be = /<tbody/i, xe = /<|&#?\w+;/, Ce = /<(?:script|style)/i, we = /<(?:script|object|embed|option|style)/i, Se = new RegExp('<(?:' + he + ')[\\s/>]', 'i'), Te = /checked\s*(?:[^=]|=\s*.checked.)/i, ke = /\/(java|ecma)script/i, Le = /^\s*<!(?:\[CDATA\[|\-\-)/, Ee = { option: [1, "<select multiple='multiple'>", '</select>'], legend: [1, '<fieldset>', '</fieldset>'], thead: [1, '<table>', '</table>'], tr: [2, '<table><tbody>', '</tbody></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'], area: [1, '<map>', '</map>'], _default: [0, '', ''] }, Fe = S(D); Ee.optgroup = Ee.option, Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead, Ee.th = Ee.td, N.support.htmlSerialize || (Ee._default = [1, 'div<div>', '</div>']), N.fn.extend({ text: function(e){
    return N.access(this, function(e){
      return e === t ? N.text(this) : this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(e));
    }, null, e, arguments.length);
  }, wrapAll: function(e){
    if (N.isFunction(e)) {
      return this.each(function(t){
        N(this).wrapAll(e.call(this, t));
      });
    } if (this[0]){
      var t = N(e, this[0].ownerDocument).eq(0).clone(!0)
;this[0].parentNode && t.insertBefore(this[0]), t.map(function(){
        for (var e = this; e.firstChild && e.firstChild.nodeType === 1;){
          e = e.firstChild;
        } return e;
      }).append(this);
    } return this;
  }, wrapInner: function(e){
    return N.isFunction(e) ? this.each(function(t){
      N(this).wrapInner(e.call(this, t));
    }) : this.each(function(){
      var t = N(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e);
    });
  }, wrap: function(e){
    var t = N.isFunction(e); return this.each(function(n){
      N(this).wrapAll(t ? e.call(this, n) : e);
    });
  }, unwrap: function(){
    return this.parent().each(function(){
      N.nodeName(this, 'body') || N(this).replaceWith(this.childNodes);
    }).end();
  }, append: function(){
    return this.domManip(arguments, !0, function(e){
      this.nodeType === 1 && this.appendChild(e);
    });
  }, prepend: function(){
    return this.domManip(arguments, !0, function(e){
      this.nodeType === 1 && this.insertBefore(e, this.firstChild);
    });
  }, before: function(){
    if (this[0] && this[0].parentNode) {
      return this.domManip(arguments, !1, function(e){
        this.parentNode.insertBefore(e, this);
      });
    } if (arguments.length){
      var e = N.clean(arguments); return e.push.apply(e, this.toArray()), this.pushStack(e, 'before', arguments);
    }
  }, after: function(){
    if (this[0] && this[0].parentNode) {
      return this.domManip(arguments, !1, function(e){
        this.parentNode.insertBefore(e, this.nextSibling);
      });
    } if (arguments.length){
      var e = this.pushStack(this, 'after', arguments); return e.push.apply(e, N.clean(arguments)), e;
    }
  }, remove: function(e, t){
    for (var n, i = 0; (n = this[i]) != null; i++){
      e && !N.filter(e, [n]).length || (!t && n.nodeType === 1 && (N.cleanData(n.getElementsByTagName('*')), N.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
    } return this;
  }, empty: function(){
    for (var e, t = 0; (e = this[t]) != null; t++) {
      for (e.nodeType === 1 && N.cleanData(e.getElementsByTagName('*')); e.firstChild;){
        e.removeChild(e.firstChild);
      }
    } return this;
  }, clone: function(e, t){
    return e = e != null && e, t = t == null ? e : t, this.map(function(){
      return N.clone(this, e, t);
    });
  }, html: function(e){
    return N.access(this, function(e){
      var n = this[0] || {}, i = 0, o = this.length; if (e === t) {
        return n.nodeType === 1 ? n.innerHTML.replace(ge, '') : null;
      } if (typeof e === 'string' && !Ce.test(e) && (N.support.leadingWhitespace || !me.test(e)) && !Ee[(ve.exec(e) || ['', ''])[1].toLowerCase()]){
        e = e.replace(ye, '<$1></$2>'); try {
          for (;i < o; i++){
            n = this[i] || {}, n.nodeType === 1 && (N.cleanData(n.getElementsByTagName('*')), n.innerHTML = e);
          }n = 0;
        } catch (e){}
      }n && this.empty().append(e);
    }, null, e, arguments.length);
  }, replaceWith: function(e){
    return this[0] && this[0].parentNode ? N.isFunction(e) ? this.each(function(t){
      var n = N(this), i = n.html(); n.replaceWith(e.call(this, t, i));
    }) : (typeof e !== 'string' && (e = N(e).detach()), this.each(function(){
      var t = this.nextSibling, n = this.parentNode; N(this).remove(), t ? N(t).before(e) : N(n).append(e);
    })) : this.length ? this.pushStack(N(N.isFunction(e) ? e() : e), 'replaceWith', e) : this;
  }, detach: function(e){
    return this.remove(e, !0);
  }, domManip: function(e, n, i){
    var o, r, s, a, l = e[0], c = []; if (!N.support.checkClone && arguments.length === 3 && typeof l === 'string' && Te.test(l)) {
      return this.each(function(){
        N(this).domManip(e, n, i, !0);
      });
    } if (N.isFunction(l)) {
      return this.each(function(o){
        var r = N(this); e[0] = l.call(this, o, n ? r.html() : t), r.domManip(e, n, i);
      });
    } if (this[0]){
      if (a = l && l.parentNode, o = N.support.parentNode && a && a.nodeType === 11 && a.childNodes.length === this.length ? { fragment: a } : N.buildFragment(e, this, c), s = o.fragment, r = s.childNodes.length === 1 ? s = s.firstChild : s.firstChild, r){
        n = n && N.nodeName(r, 'tr'); for (var u = 0, d = this.length, p = d - 1; u < d; u++){
          i.call(n ? w(this[u], r) : this[u], o.cacheable || d > 1 && u < p ? N.clone(s, !0, !0) : s);
        }
      }c.length && N.each(c, function(e, t){
        t.src ? N.ajax({ type: 'GET', global: !1, url: t.src, async: !1, dataType: 'script' }) : N.globalEval((t.text || t.textContent || t.innerHTML || '').replace(Le, '/*$0*/')), t.parentNode && t.parentNode.removeChild(t);
      });
    } return this;
  } }), N.buildFragment = function(e, t, n){
    var i, o, r, s, a = e[0]; return t && t[0] && (s = t[0].ownerDocument || t[0]), s.createDocumentFragment || (s = D), e.length === 1 && typeof a === 'string' && a.length < 512 && s === D && a.charAt(0) === '<' && !we.test(a) && (N.support.checkClone || !Te.test(a)) && (N.support.html5Clone || !Se.test(a)) && (o = !0, (r = N.fragments[a]) && r !== 1 && (i = r)), i || (i = s.createDocumentFragment(), N.clean(e, s, i, n)), o && (N.fragments[a] = r ? i : 1), { fragment: i, cacheable: o };
  }, N.fragments = {}, N.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function(e, t){
    N.fn[e] = function(n){
      var i = [], o = N(n), r = this.length === 1 && this[0].parentNode; if (r && r.nodeType === 11 && r.childNodes.length === 1 && o.length === 1) {
        return o[t](this[0]), this;
      } for (var s = 0, a = o.length; s < a; s++){
        var l = (s > 0 ? this.clone(!0) : this).get(); N(o[s])[t](l), i = i.concat(l);
      } return this.pushStack(i, e, o.selector);
    };
  }), N.extend({ clone: function(e, t, n){
    var i, o, r, s = N.support.html5Clone || N.isXMLDoc(e) || !Se.test('<' + e.nodeName + '>') ? e.cloneNode(!0) : m(e); if (!(N.support.noCloneEvent && N.support.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || N.isXMLDoc(e))) {
      for (x(e, s), i = b(e), o = b(s), r = 0; i[r]; ++r){
        o[r] && x(i[r], o[r]);
      }
    } if (t && (C(e, s), n)) {
      for (i = b(e), o = b(s), r = 0; i[r]; ++r){
        C(i[r], o[r]);
      }
    } return i = o = null, s;
  }, clean: function(e, t, n, i){
    var o, r, s, a = []; t = t || D, void 0 === t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || D); for (var l, c = 0; (l = e[c]) != null; c++) {
      if (typeof l === 'number' && (l += ''), l){
        if (typeof l === 'string') {
          if (xe.test(l)){
            l = l.replace(ye, '<$1></$2>'); var u, d = (ve.exec(l) || ['', ''])[1].toLowerCase(), p = Ee[d] || Ee._default, f = p[0], h = t.createElement('div'), g = Fe.childNodes; for (t === D ? Fe.appendChild(h) : S(t).appendChild(h), h.innerHTML = p[1] + l + p[2]; f--;){
              h = h.lastChild;
            } if (!N.support.tbody){
              var m = be.test(l), v = d !== 'table' || m ? p[1] !== '<table>' || m ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes; for (s = v.length - 1; s >= 0; --s){
                N.nodeName(v[s], 'tbody') && !v[s].childNodes.length && v[s].parentNode.removeChild(v[s]);
              }
            }!N.support.leadingWhitespace && me.test(l) && h.insertBefore(t.createTextNode(me.exec(l)[0]), h.firstChild), l = h.childNodes, h && (h.parentNode.removeChild(h), g.length > 0 && (u = g[g.length - 1]) && u.parentNode && u.parentNode.removeChild(u));
          } else {
            l = t.createTextNode(l);
          }
        } var b; if (!N.support.appendChecked) {
          if (l[0] && typeof (b = l.length) === 'number') {
            for (s = 0; s < b; s++){
              y(l[s]);
            }
          } else {
            y(l);
          }
        } l.nodeType ? a.push(l) : a = N.merge(a, l);
      }
    } if (n) {
      for (o = function(e){
        return !e.type || ke.test(e.type);
      }, c = 0; a[c]; c++) {
        if (r = a[c], i && N.nodeName(r, 'script') && (!r.type || ke.test(r.type))){
          i.push(r.parentNode ? r.parentNode.removeChild(r) : r);
        } else {
          if (r.nodeType === 1){
            var x = N.grep(r.getElementsByTagName('script'), o); a.splice.apply(a, [c + 1, 0].concat(x));
          }n.appendChild(r);
        }
      }
    } return a;
  }, cleanData: function(e){
    for (var t, n, i, o = N.cache, r = N.event.special, s = N.support.deleteExpando, a = 0; (i = e[a]) != null; a++) {
      if ((!i.nodeName || !N.noData[i.nodeName.toLowerCase()]) && (n = i[N.expando])){
        if ((t = o[n]) && t.events){
          for (var l in t.events){
            r[l] ? N.event.remove(i, l) : N.removeEvent(i, l, t.handle);
          }t.handle && (t.handle.elem = null);
        }s ? delete i[N.expando] : i.removeAttribute && i.removeAttribute(N.expando), delete o[n];
      }
    }
  } }); var _e, je, Ie, De = /alpha\([^)]*\)/i, Ae = /opacity=([^)]*)/, Me = /([A-Z]|^ms)/g, Ne = /^[\-+]?(?:\d*\.)?\d+$/i, $e = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, He = /^([\-+])=([\-+.\de]+)/, Oe = /^margin/, Pe = { position: 'absolute', visibility: 'hidden', display: 'block' }, ze = ['Top', 'Right', 'Bottom', 'Left']; N.fn.css = function(e, n){
    return N.access(this, function(e, n, i){
      return i !== t ? N.style(e, n, i) : N.css(e, n);
    }, e, n, arguments.length > 1);
  }, N.extend({ cssHooks: { opacity: { get: function(e, t){
    if (t){
      var n = _e(e, 'opacity'); return n === '' ? '1' : n;
    } return e.style.opacity;
  } }}, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: N.support.cssFloat ? 'cssFloat' : 'styleFloat' }, style: function(e, n, i, o){
    if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style){
      var r, s, a = N.camelCase(n), l = e.style, c = N.cssHooks[a]; if (n = N.cssProps[a] || a, i === t) {
        return c && 'get' in c && (r = c.get(e, !1, o)) !== t ? r : l[n];
      } if ((s = typeof i) === 'string' && (r = He.exec(i)) && (i = +(r[1] + 1) * +r[2] + parseFloat(N.css(e, n)), s = 'number'), i == null || s === 'number' && isNaN(i)) {
        return;
      } if (s === 'number' && !N.cssNumber[a] && (i += 'px'), !(c && 'set' in c && (i = c.set(e, i)) === t)) {
        try {
          l[n] = i;
        } catch (e){}
      }
    }
  }, css: function(e, n, i){
    var o, r; return n = N.camelCase(n), r = N.cssHooks[n], (n = N.cssProps[n] || n) === 'cssFloat' && (n = 'float'), r && 'get' in r && (o = r.get(e, !0, i)) !== t ? o : _e ? _e(e, n) : void 0;
  }, swap: function(e, t, n){
    var i, o, r = {}; for (o in t){
      r[o] = e.style[o], e.style[o] = t[o];
    }i = n.call(e); for (o in t){
      e.style[o] = r[o];
    } return i;
  } }), N.curCSS = N.css, D.defaultView && D.defaultView.getComputedStyle && (je = function(e, t){
    var n, i, o, r, s = e.style; return t = t.replace(Me, '-$1').toLowerCase(), (i = e.ownerDocument.defaultView) && (o = i.getComputedStyle(e, null)) && (n = o.getPropertyValue(t)) === '' && !N.contains(e.ownerDocument.documentElement, e) && (n = N.style(e, t)), !N.support.pixelMargin && o && Oe.test(t) && $e.test(n) && (r = s.width, s.width = n, n = o.width, s.width = r), n;
  }), D.documentElement.currentStyle && (Ie = function(e, t){
    var n, i, o, r = e.currentStyle && e.currentStyle[t], s = e.style; return r == null && s && (o = s[t]) && (r = o), $e.test(r) && (n = s.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === 'fontSize' ? '1em' : r, r = s.pixelLeft + 'px', s.left = n, i && (e.runtimeStyle.left = i)), r === '' ? 'auto' : r;
  }), _e = je || Ie, N.each(['height', 'width'], function(e, t){
    N.cssHooks[t] = { get: function(e, n, i){
      if (n) {
        return e.offsetWidth !== 0 ? g(e, t, i) : N.swap(e, Pe, function(){
          return g(e, t, i);
        });
      }
    }, set: function(e, t){
      return Ne.test(t) ? t + 'px' : t;
    } };
  }), N.support.opacity || (N.cssHooks.opacity = { get: function(e, t){
    return Ae.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? parseFloat(RegExp.$1) / 100 + '' : t ? '1' : '';
  }, set: function(e, t){
    var n = e.style, i = e.currentStyle, o = N.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '', r = i && i.filter || n.filter || ''; n.zoom = 1, t >= 1 && N.trim(r.replace(De, '')) === '' && (n.removeAttribute('filter'), i && !i.filter) || (n.filter = De.test(r) ? r.replace(De, o) : r + ' ' + o);
  } }), N(function(){
    N.support.reliableMarginRight || (N.cssHooks.marginRight = { get: function(e, t){
      return N.swap(e, { display: 'inline-block' }, function(){
        return t ? _e(e, 'margin-right') : e.style.marginRight;
      });
    } });
  }), N.expr && N.expr.filters && (N.expr.filters.hidden = function(e){
    var t = e.offsetWidth, n = e.offsetHeight; return t === 0 && n === 0 || !N.support.reliableHiddenOffsets && (e.style && e.style.display || N.css(e, 'display')) === 'none';
  }, N.expr.filters.visible = function(e){
    return !N.expr.filters.hidden(e);
  }), N.each({ margin: '', padding: '', border: 'Width' }, function(e, t){
    N.cssHooks[e + t] = { expand: function(n){
      var i, o = typeof n === 'string' ? n.split(' ') : [n], r = {}; for (i = 0; i < 4; i++){
        r[e + ze[i] + t] = o[i] || o[i - 2] || o[0];
      } return r;
    } };
  }); var Be, qe, Re = /%20/g, We = /\[\]$/, Ue = /\r?\n/g, Ge = /#.*$/, Qe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ve = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Je = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Xe = /^(?:GET|HEAD)$/, Ye = /^\/\//, Ke = /\?/, Ze = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, et = /^(?:select|textarea)/i, tt = /\s+/, nt = /([?&])_=[^&]*/, it = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, ot = N.fn.load, rt = {}, st = {}, at = ['*/'] + ['*']; try {
    Be = M.href;
  } catch (e){
    Be = D.createElement('a'), Be.href = '', Be = Be.href;
  }qe = it.exec(Be.toLowerCase()) || [], N.fn.extend({ load: function(e, n, i){
    if (typeof e !== 'string' && ot) {
      return ot.apply(this, arguments);
    } if (!this.length) {
      return this;
    } var o = e.indexOf(' '); if (o >= 0){
      var r = e.slice(o, e.length); e = e.slice(0, o);
    } var s = 'GET'; n && (N.isFunction(n) ? (i = n, n = t) : typeof n === 'object' && (n = N.param(n, N.ajaxSettings.traditional), s = 'POST')); var a = this; return N.ajax({ url: e, type: s, dataType: 'html', data: n, complete: function(e, t, n){
      n = e.responseText, e.isResolved() && (e.done(function(e){
        n = e;
      }), a.html(r ? N('<div>').append(n.replace(Ze, '')).find(r) : n)), i && a.each(i, [n, t, e]);
    } }), this;
  }, serialize: function(){
    return N.param(this.serializeArray());
  }, serializeArray: function(){
    return this.map(function(){
      return this.elements ? N.makeArray(this.elements) : this;
    }).filter(function(){
      return this.name && !this.disabled && (this.checked || et.test(this.nodeName) || Ve.test(this.type));
    }).map(function(e, t){
      var n = N(this).val(); return n == null ? null : N.isArray(n) ? N.map(n, function(e, n){
        return { name: t.name, value: e.replace(Ue, '\r\n') };
      }) : { name: t.name, value: n.replace(Ue, '\r\n') };
    }).get();
  } }), N.each('ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '), function(e, t){
    N.fn[t] = function(e){
      return this.on(t, e);
    };
  }), N.each(['get', 'post'], function(e, n){
    N[n] = function(e, i, o, r){
      return N.isFunction(i) && (r = r || o, o = i, i = t), N.ajax({ type: n, url: e, data: i, success: o, dataType: r });
    };
  }), N.extend({ getScript: function(e, n){
    return N.get(e, t, n, 'script');
  }, getJSON: function(e, t, n){
    return N.get(e, t, n, 'json');
  }, ajaxSetup: function(e, t){
    return t ? p(e, N.ajaxSettings) : (t = e, e = N.ajaxSettings), p(e, t), e;
  }, ajaxSettings: { url: Be, isLocal: Je.test(qe[1]), global: !0, type: 'GET', contentType: 'application/x-www-form-urlencoded; charset=UTF-8', processData: !0, async: !0, accepts: { xml: 'application/xml, text/xml', html: 'text/html', text: 'text/plain', json: 'application/json, text/javascript', '*': at }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: 'responseXML', text: 'responseText' }, converters: { '* text': e.String, 'text html': !0, 'text json': N.parseJSON, 'text xml': N.parseXML }, flatOptions: { context: !0, url: !0 }}, ajaxPrefilter: h(rt), ajaxTransport: h(st), ajax: function(e, n){
    function i(e, n, i, s){
      if (S !== 2){
        S = 2, l && clearTimeout(l), a = t, r = s || '', T.readyState = e > 0 ? 4 : 0; var d, f, h, C, w, k = n, L = i ? u(g, T, i) : t; if (e >= 200 && e < 300 || e === 304) {
          if (g.ifModified && ((C = T.getResponseHeader('Last-Modified')) && (N.lastModified[o] = C), (w = T.getResponseHeader('Etag')) && (N.etag[o] = w)), e === 304){
            k = 'notmodified', d = !0;
          } else {
            try {
              f = c(g, L), k = 'success', d = !0;
            } catch (e){
              k = 'parsererror', h = e;
            }
          }
        } else {
          h = k, k && !e || (k = 'error', e < 0 && (e = 0));
        }T.status = e, T.statusText = '' + (n || k), d ? v.resolveWith(m, [f, k, T]) : v.rejectWith(m, [T, k, h]), T.statusCode(x), x = t, p && y.trigger('ajax' + (d ? 'Success' : 'Error'), [T, g, d ? f : h]), b.fireWith(m, [T, k]), p && (y.trigger('ajaxComplete', [T, g]), --N.active || N.event.trigger('ajaxStop'));
      }
    } typeof e === 'object' && (n = e, e = t), n = n || {}; var o, r, s, a, l, d, p, h, g = N.ajaxSetup({}, n), m = g.context || g, y = m !== g && (m.nodeType || m instanceof N) ? N(m) : N.event, v = N.Deferred(), b = N.Callbacks('once memory'), x = g.statusCode || {}, C = {}, w = {}, S = 0, T = { readyState: 0, setRequestHeader: function(e, t){
      if (!S){
        var n = e.toLowerCase(); e = w[n] = w[n] || e, C[e] = t;
      } return this;
    }, getAllResponseHeaders: function(){
      return S === 2 ? r : null;
    }, getResponseHeader: function(e){
      var n; if (S === 2){
        if (!s) {
          for (s = {}; n = Qe.exec(r);){
            s[n[1].toLowerCase()] = n[2];
          }
        }n = s[e.toLowerCase()];
      } return n === t ? null : n;
    }, overrideMimeType: function(e){
      return S || (g.mimeType = e), this;
    }, abort: function(e){
      return e = e || 'abort', a && a.abort(e), i(0, e), this;
    } }; if (v.promise(T), T.success = T.done, T.error = T.fail, T.complete = b.add, T.statusCode = function(e){
      if (e){
        var t; if (S < 2) {
          for (t in e){
            x[t] = [x[t], e[t]];
          }
        } else {
          t = e[T.status], T.then(t, t);
        }
      } return this;
    }, g.url = ((e || g.url) + '').replace(Ge, '').replace(Ye, qe[1] + '//'), g.dataTypes = N.trim(g.dataType || '*').toLowerCase().split(tt), g.crossDomain == null && (d = it.exec(g.url.toLowerCase()), g.crossDomain = !(!d || d[1] == qe[1] && d[2] == qe[2] && (d[3] || (d[1] === 'http:' ? 80 : 443)) == (qe[3] || (qe[1] === 'http:' ? 80 : 443)))), g.data && g.processData && typeof g.data !== 'string' && (g.data = N.param(g.data, g.traditional)), f(rt, g, n, T), S === 2) {
      return !1;
    } if (p = g.global, g.type = g.type.toUpperCase(), g.hasContent = !Xe.test(g.type), p && N.active++ == 0 && N.event.trigger('ajaxStart'), !g.hasContent && (g.data && (g.url += (Ke.test(g.url) ? '&' : '?') + g.data, delete g.data), o = g.url, !1 === g.cache)){
      var k = N.now(), L = g.url.replace(nt, '$1_=' + k); g.url = L + (L === g.url ? (Ke.test(g.url) ? '&' : '?') + '_=' + k : '');
    }(g.data && g.hasContent && !1 !== g.contentType || n.contentType) && T.setRequestHeader('Content-Type', g.contentType), g.ifModified && (o = o || g.url, N.lastModified[o] && T.setRequestHeader('If-Modified-Since', N.lastModified[o]), N.etag[o] && T.setRequestHeader('If-None-Match', N.etag[o])), T.setRequestHeader('Accept', g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== '*' ? ', ' + at + '; q=0.01' : '') : g.accepts['*']); for (h in g.headers){
      T.setRequestHeader(h, g.headers[h]);
    } if (g.beforeSend && (!1 === g.beforeSend.call(m, T, g) || S === 2)) {
      return T.abort(), !1;
    } for (h in { success: 1, error: 1, complete: 1 }){
      T[h](g[h]);
    } if (a = f(st, g, n, T)){
      T.readyState = 1, p && y.trigger('ajaxSend', [T, g]), g.async && g.timeout > 0 && (l = setTimeout(function(){
        T.abort('timeout');
      }, g.timeout)); try {
        S = 1, a.send(C, i);
      } catch (e){
        if (!(S < 2)) {
          throw e;
        } i(-1, e);
      }
    } else {
      i(-1, 'No Transport');
    } return T;
  }, param: function(e, n){
    var i = [], o = function(e, t){
      t = N.isFunction(t) ? t() : t, i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
    }; if (n === t && (n = N.ajaxSettings.traditional), N.isArray(e) || e.jquery && !N.isPlainObject(e)){
      N.each(e, function(){
        o(this.name, this.value);
      });
    } else {
      for (var r in e){
        d(r, e[r], n, o);
      }
    } return i.join('&').replace(Re, '+');
  } }), N.extend({ active: 0, lastModified: {}, etag: {}}); var lt = N.now(), ct = /(\=)\?(&|$)|\?\?/i; N.ajaxSetup({ jsonp: 'callback', jsonpCallback: function(){
    return N.expando + '_' + lt++;
  } }), N.ajaxPrefilter('json jsonp', function(t, n, i){
    var o = typeof t.data === 'string' && /^application\/x\-www\-form\-urlencoded/.test(t.contentType); if (t.dataTypes[0] === 'jsonp' || !1 !== t.jsonp && (ct.test(t.url) || o && ct.test(t.data))){
      var r, s = t.jsonpCallback = N.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a = e[s], l = t.url, c = t.data, u = '$1' + s + '$2'; return !1 !== t.jsonp && (l = l.replace(ct, u), t.url === l && (o && (c = c.replace(ct, u)), t.data === c && (l += (/\?/.test(l) ? '&' : '?') + t.jsonp + '=' + s))), t.url = l, t.data = c, e[s] = function(e){
        r = [e];
      }, i.always(function(){
        e[s] = a, r && N.isFunction(a) && e[s](r[0]);
      }), t.converters['script json'] = function(){
        return r || N.error(s + ' was not called'), r[0];
      }, t.dataTypes[0] = 'json', 'script';
    }
  }), N.ajaxSetup({ accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' }, contents: { script: /javascript|ecmascript/ }, converters: { 'text script': function(e){
    return N.globalEval(e), e;
  } }}), N.ajaxPrefilter('script', function(e){
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = 'GET', e.global = !1);
  }), N.ajaxTransport('script', function(e){
    if (e.crossDomain){
      var n, i = D.head || D.getElementsByTagName('head')[0] || D.documentElement; return { send: function(o, r){
        n = D.createElement('script'), n.async = 'async', e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, o){
          (o || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, o || r(200, 'success'));
        }, i.insertBefore(n, i.firstChild);
      }, abort: function(){
        n && n.onload(0, 1);
      } };
    }
  }); var ut, dt = !!e.ActiveXObject && function(){
      for (var e in ut){
        ut[e](0, 1);
      }
    }, pt = 0; N.ajaxSettings.xhr = e.ActiveXObject ? function(){
    return !this.isLocal && l() || a();
  } : l, (function(e){
    N.extend(N.support, { ajax: !!e, cors: !!e && 'withCredentials' in e });
  }(N.ajaxSettings.xhr())), N.support.ajax && N.ajaxTransport(function(n){
    if (!n.crossDomain || N.support.cors){
      var i; return { send: function(o, r){
        var s, a, l = n.xhr(); if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) {
          for (a in n.xhrFields){
            l[a] = n.xhrFields[a];
          }
        }n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !o['X-Requested-With'] && (o['X-Requested-With'] = 'XMLHttpRequest'); try {
          for (a in o){
            l.setRequestHeader(a, o[a]);
          }
        } catch (e){}l.send(n.hasContent && n.data || null), i = function(e, o){
          var a, c, u, d, p; try {
            if (i && (o || l.readyState === 4)) {
              if (i = t, s && (l.onreadystatechange = N.noop, dt && delete ut[s]), o){
                l.readyState !== 4 && l.abort();
              } else {
                a = l.status, u = l.getAllResponseHeaders(), d = {}, (p = l.responseXML) && p.documentElement && (d.xml = p); try {
                  d.text = l.responseText;
                } catch (e){} try {
                  c = l.statusText;
                } catch (e){
                  c = '';
                }a || !n.isLocal || n.crossDomain ? a === 1223 && (a = 204) : a = d.text ? 200 : 404;
              }
            }
          } catch (e){
            o || r(-1, e);
          }d && r(a, c, d, u);
        }, n.async && l.readyState !== 4 ? (s = ++pt, dt && (ut || (ut = {}, N(e).unload(dt)), ut[s] = i), l.onreadystatechange = i) : i();
      }, abort: function(){
        i && i(0, 1);
      } };
    }
  }); var ft, ht, gt, mt, yt = {}, vt = /^(?:toggle|show|hide)$/, bt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, xt = [['height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'], ['width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight'], ['opacity']]; N.fn.extend({ show: function(e, t, n){
    var r, s; if (e || e === 0) {
      return this.animate(o('show', 3), e, t, n);
    } for (var a = 0, l = this.length; a < l; a++){
      r = this[a], r.style && (s = r.style.display, !N._data(r, 'olddisplay') && s === 'none' && (s = r.style.display = ''), (s === '' && N.css(r, 'display') === 'none' || !N.contains(r.ownerDocument.documentElement, r)) && N._data(r, 'olddisplay', i(r.nodeName)));
    } for (a = 0; a < l; a++){
      r = this[a], r.style && ((s = r.style.display) !== '' && s !== 'none' || (r.style.display = N._data(r, 'olddisplay') || ''));
    } return this;
  }, hide: function(e, t, n){
    if (e || e === 0) {
      return this.animate(o('hide', 3), e, t, n);
    } for (var i, r, s = 0, a = this.length; s < a; s++){
      i = this[s], i.style && (r = N.css(i, 'display')) !== 'none' && !N._data(i, 'olddisplay') && N._data(i, 'olddisplay', r);
    } for (s = 0; s < a; s++) {
      this[s].style && (this[s].style.display = 'none');
    } return this;
  }, _toggle: N.fn.toggle, toggle: function(e, t, n){
    var i = typeof e === 'boolean'; return N.isFunction(e) && N.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || i ? this.each(function(){
      var t = i ? e : N(this).is(':hidden'); N(this)[t ? 'show' : 'hide']();
    }) : this.animate(o('toggle', 3), e, t, n), this;
  }, fadeTo: function(e, t, n, i){
    return this.filter(':hidden').css('opacity', 0).show().end().animate({ opacity: t }, e, n, i);
  }, animate: function(e, t, n, o){
    function r(){
      !1 === s.queue && N._mark(this); var t, n, o, r, a, l, c, u, d, p, f, h = N.extend({}, s), g = this.nodeType === 1, m = g && N(this).is(':hidden'); h.animatedProperties = {}; for (o in e) {
        if (t = N.camelCase(o), o !== t && (e[t] = e[o], delete e[o]), (a = N.cssHooks[t]) && 'expand' in a){
          l = a.expand(e[t]), delete e[t]; for (o in l){
            o in e || (e[o] = l[o]);
          }
        }
      } for (t in e){
        if (n = e[t], N.isArray(n) ? (h.animatedProperties[t] = n[1], n = e[t] = n[0]) : h.animatedProperties[t] = h.specialEasing && h.specialEasing[t] || h.easing || 'swing', n === 'hide' && m || n === 'show' && !m) {
          return h.complete.call(this);
        } g && (t === 'height' || t === 'width') && (h.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], N.css(this, 'display') === 'inline' && N.css(this, 'float') === 'none' && (N.support.inlineBlockNeedsLayout && i(this.nodeName) !== 'inline' ? this.style.zoom = 1 : this.style.display = 'inline-block'));
      }h.overflow != null && (this.style.overflow = 'hidden'); for (o in e){
        r = new N.fx(this, h, o), n = e[o], vt.test(n) ? (f = N._data(this, 'toggle' + o) || (n === 'toggle' ? m ? 'show' : 'hide' : 0), f ? (N._data(this, 'toggle' + o, f === 'show' ? 'hide' : 'show'), r[f]()) : r[n]()) : (c = bt.exec(n), u = r.cur(), c ? (d = parseFloat(c[2]), p = c[3] || (N.cssNumber[o] ? '' : 'px'), p !== 'px' && (N.style(this, o, (d || 1) + p), u = (d || 1) / r.cur() * u, N.style(this, o, u + p)), c[1] && (d = (c[1] === '-=' ? -1 : 1) * d + u), r.custom(u, d, p)) : r.custom(u, n, ''));
      } return !0;
    } var s = N.speed(t, n, o); return N.isEmptyObject(e) ? this.each(s.complete, [!1]) : (e = N.extend({}, e), !1 === s.queue ? this.each(r) : this.queue(s.queue, r));
  }, stop: function(e, n, i){
    return typeof e !== 'string' && (i = n, n = e, e = t), n && !1 !== e && this.queue(e || 'fx', []), this.each(function(){
      function t(e, t, n){
        var o = t[n]; N.removeData(e, n, !0), o.stop(i);
      } var n, o = !1, r = N.timers, s = N._data(this); if (i || N._unmark(!0, this), e == null) {
        for (n in s){
          s[n] && s[n].stop && n.indexOf('.run') === n.length - 4 && t(this, s, n);
        }
      } else {
        s[n = e + '.run'] && s[n].stop && t(this, s, n);
      } for (n = r.length; n--;){
        r[n].elem === this && (e == null || r[n].queue === e) && (i ? r[n](!0) : r[n].saveState(), o = !0, r.splice(n, 1));
      }(!i || !o) && N.dequeue(this, e);
    });
  } }), N.each({ slideDown: o('show', 1), slideUp: o('hide', 1), slideToggle: o('toggle', 1), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' }}, function(e, t){
    N.fn[e] = function(e, n, i){
      return this.animate(t, e, n, i);
    };
  }), N.extend({ speed: function(e, t, n){
    var i = e && typeof e === 'object' ? N.extend({}, e) : { complete: n || !n && t || N.isFunction(e) && e, duration: e, easing: n && t || t && !N.isFunction(t) && t }; return i.duration = N.fx.off ? 0 : typeof i.duration === 'number' ? i.duration : i.duration in N.fx.speeds ? N.fx.speeds[i.duration] : N.fx.speeds._default, i.queue != null && !0 !== i.queue || (i.queue = 'fx'), i.old = i.complete, i.complete = function(e){
      N.isFunction(i.old) && i.old.call(this), i.queue ? N.dequeue(this, i.queue) : !1 !== e && N._unmark(this);
    }, i;
  }, easing: { linear: function(e){
    return e;
  }, swing: function(e){
    return -Math.cos(e * Math.PI) / 2 + 0.5;
  } }, timers: [], fx: function(e, t, n){
    this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {};
  } }), N.fx.prototype = { update: function(){
    this.options.step && this.options.step.call(this.elem, this.now, this), (N.fx.step[this.prop] || N.fx.step._default)(this);
  }, cur: function(){
    if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
      return this.elem[this.prop];
    } var e, t = N.css(this.elem, this.prop); return isNaN(e = parseFloat(t)) ? t && t !== 'auto' ? t : 0 : e;
  }, custom: function(e, n, i){
    function o(e){
      return r.step(e);
    } var r = this, a = N.fx; this.startTime = mt || s(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = i || this.unit || (N.cssNumber[this.prop] ? '' : 'px'), o.queue = this.options.queue, o.elem = this.elem, o.saveState = function(){
      N._data(r.elem, 'fxshow' + r.prop) === t && (r.options.hide ? N._data(r.elem, 'fxshow' + r.prop, r.start) : r.options.show && N._data(r.elem, 'fxshow' + r.prop, r.end));
    }, o() && N.timers.push(o) && !gt && (gt = setInterval(a.tick, a.interval));
  }, show: function(){
    var e = N._data(this.elem, 'fxshow' + this.prop); this.options.orig[this.prop] = e || N.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === 'width' || this.prop === 'height' ? 1 : 0, this.cur()), N(this.elem).show();
  }, hide: function(){
    this.options.orig[this.prop] = N._data(this.elem, 'fxshow' + this.prop) || N.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
  }, step: function(e){
    var t, n, i, o = mt || s(), r = !0, a = this.elem, l = this.options; if (e || o >= l.duration + this.startTime){
      this.now = this.end, this.pos = this.state = 1, this.update(), l.animatedProperties[this.prop] = !0; for (t in l.animatedProperties){
        !0 !== l.animatedProperties[t] && (r = !1);
      } if (r){
        if (l.overflow != null && !N.support.shrinkWrapBlocks && N.each(['', 'X', 'Y'], function(e, t){
          a.style['overflow' + t] = l.overflow[e];
        }), l.hide && N(a).hide(), l.hide || l.show) {
          for (t in l.animatedProperties){
            N.style(a, t, l.orig[t]), N.removeData(a, 'fxshow' + t, !0), N.removeData(a, 'toggle' + t, !0);
          }
        }(i = l.complete) && (l.complete = !1, i.call(a));
      } return !1;
    } return l.duration == 1 / 0 ? this.now = o : (n = o - this.startTime, this.state = n / l.duration, this.pos = N.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0;
  } }, N.extend(N.fx, { tick: function(){
    for (var e, t = N.timers, n = 0; n < t.length; n++){
      !(e = t[n])() && t[n] === e && t.splice(n--, 1);
    }t.length || N.fx.stop();
  }, interval: 13, stop: function(){
    clearInterval(gt), gt = null;
  }, speeds: { slow: 600, fast: 200, _default: 400 }, step: { opacity: function(e){
    N.style(e.elem, 'opacity', e.now);
  }, _default: function(e){
    e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now;
  } }}), N.each(xt.concat.apply([], xt), function(e, t){
    t.indexOf('margin') && (N.fx.step[t] = function(e){
      N.style(e.elem, t, Math.max(0, e.now) + e.unit);
    });
  }), N.expr && N.expr.filters && (N.expr.filters.animated = function(e){
    return N.grep(N.timers, function(t){
      return e === t.elem;
    }).length;
  }); var Ct, wt = /^t(?:able|d|h)$/i, St = /^(?:body|html)$/i; Ct = 'getBoundingClientRect' in D.documentElement ? function(e, t, i, o){
    try {
      o = e.getBoundingClientRect();
    } catch (e){} if (!o || !N.contains(i, e)) {
      return o ? { top: o.top, left: o.left } : { top: 0, left: 0 };
    } var r = t.body, s = n(t), a = i.clientTop || r.clientTop || 0, l = i.clientLeft || r.clientLeft || 0, c = s.pageYOffset || N.support.boxModel && i.scrollTop || r.scrollTop, u = s.pageXOffset || N.support.boxModel && i.scrollLeft || r.scrollLeft; return { top: o.top + c - a, left: o.left + u - l };
  } : function(e, t, n){
    for (var i, o = e.offsetParent, r = t.body, s = t.defaultView, a = s ? s.getComputedStyle(e, null) : e.currentStyle, l = e.offsetTop, c = e.offsetLeft; (e = e.parentNode) && e !== r && e !== n && (!N.support.fixedPosition || a.position !== 'fixed');){
      i = s ? s.getComputedStyle(e, null) : e.currentStyle, l -= e.scrollTop, c -= e.scrollLeft, e === o && (l += e.offsetTop, c += e.offsetLeft, N.support.doesNotAddBorder && (!N.support.doesAddBorderForTableAndCells || !wt.test(e.nodeName)) && (l += parseFloat(i.borderTopWidth) || 0, c += parseFloat(i.borderLeftWidth) || 0), o, o = e.offsetParent), N.support.subtractsBorderForOverflowNotVisible && i.overflow !== 'visible' && (l += parseFloat(i.borderTopWidth) || 0, c += parseFloat(i.borderLeftWidth) || 0), a = i;
    } return a.position !== 'relative' && a.position !== 'static' || (l += r.offsetTop, c += r.offsetLeft), N.support.fixedPosition && a.position === 'fixed' && (l += Math.max(n.scrollTop, r.scrollTop), c += Math.max(n.scrollLeft, r.scrollLeft)), { top: l, left: c };
  }, N.fn.offset = function(e){
    if (arguments.length) {
      return e === t ? this : this.each(function(t){
        N.offset.setOffset(this, e, t);
      });
    } var n = this[0], i = n && n.ownerDocument; return i ? n === i.body ? N.offset.bodyOffset(n) : Ct(n, i, i.documentElement) : null;
  }, N.offset = { bodyOffset: function(e){
    var t = e.offsetTop, n = e.offsetLeft; return N.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(N.css(e, 'marginTop')) || 0, n += parseFloat(N.css(e, 'marginLeft')) || 0), { top: t, left: n };
  }, setOffset: function(e, t, n){
    var i = N.css(e, 'position'); i === 'static' && (e.style.position = 'relative'); var o, r, s = N(e), a = s.offset(), l = N.css(e, 'top'), c = N.css(e, 'left'), u = (i === 'absolute' || i === 'fixed') && N.inArray('auto', [l, c]) > -1, d = {}, p = {}; u ? (p = s.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0), N.isFunction(t) && (t = t.call(e, n, a)), t.top != null && (d.top = t.top - a.top + o), t.left != null && (d.left = t.left - a.left + r), 'using' in t ? t.using.call(e, d) : s.css(d);
  } }, N.fn.extend({ position: function(){
    if (!this[0]) {
      return null;
    } var e = this[0], t = this.offsetParent(), n = this.offset(), i = St.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset(); return n.top -= parseFloat(N.css(e, 'marginTop')) || 0, n.left -= parseFloat(N.css(e, 'marginLeft')) || 0, i.top += parseFloat(N.css(t[0], 'borderTopWidth')) || 0, i.left += parseFloat(N.css(t[0], 'borderLeftWidth')) || 0, { top: n.top - i.top, left: n.left - i.left };
  }, offsetParent: function(){
    return this.map(function(){
      for (var e = this.offsetParent || D.body; e && !St.test(e.nodeName) && N.css(e, 'position') === 'static';){
        e = e.offsetParent;
      } return e;
    });
  } }), N.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(e, i){
    var o = /Y/.test(i); N.fn[e] = function(r){
      return N.access(this, function(e, r, s){
        var a = n(e); if (s === t) {
          return a ? i in a ? a[i] : N.support.boxModel && a.document.documentElement[r] || a.document.body[r] : e[r];
        } a ? a.scrollTo(o ? N(a).scrollLeft() : s, o ? s : N(a).scrollTop()) : e[r] = s;
      }, e, r, arguments.length, null);
    };
  }), N.each({ Height: 'height', Width: 'width' }, function(e, n){
    var i = 'client' + e, o = 'scroll' + e, r = 'offset' + e; N.fn['inner' + e] = function(){
      var e = this[0]; return e ? e.style ? parseFloat(N.css(e, n, 'padding')) : this[n]() : null;
    }, N.fn['outer' + e] = function(e){
      var t = this[0]; return t ? t.style ? parseFloat(N.css(t, n, e ? 'margin' : 'border')) : this[n]() : null;
    }, N.fn[n] = function(e){
      return N.access(this, function(e, n, s){
        var a, l, c, u; return N.isWindow(e) ? (a = e.document, l = a.documentElement[i], N.support.boxModel && l || a.body && a.body[i] || l) : e.nodeType === 9 ? (a = e.documentElement, a[i] >= a[o] ? a[i] : Math.max(e.body[o], a[o], e.body[r], a[r])) : s === t ? (c = N.css(e, n), u = parseFloat(c), N.isNumeric(u) ? u : c) : void N(e).css(n, s);
      }, n, e, arguments.length, null);
    };
  }), e.jQuery = e.$ = N, typeof define === 'function' && define.amd && define.amd.jQuery && define('jquery', [], function(){
    return N;
  });
}(window)), window.onload = function(){
  $(document).trigger('pageloaded');
}, typeof console === 'undefined' && (this.console = { log: function(){} }), function(){
  function e(){} function t(e, t){
    for (var n = e.length; n--;) {
      if (e[n].listener === t) {
        return n;
      }
    } return -1;
  } function n(e){
    return function(){
      return this[e].apply(this, arguments);
    };
  } var i = e.prototype, o = this, r = o.EventEmitter; i.getListeners = function(e){
    var t, n, i = this._getEvents(); if (typeof e === 'object'){
      t = {}; for (n in i){
        i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
      }
    } else {
      t = i[e] || (i[e] = []);
    } return t;
  }, i.flattenListeners = function(e){
    var t, n = []; for (t = 0; e.length > t; t += 1){
      n.push(e[t].listener);
    } return n;
  }, i.getListenersAsObject = function(e){
    var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n;
  }, i.addListener = function(e, n){
    var i, o = this.getListenersAsObject(e), r = typeof n === 'object'; for (i in o){
      o.hasOwnProperty(i) && t(o[i], n) === -1 && o[i].push(r ? n : { listener: n, once: !1 });
    } return this;
  }, i.on = n('addListener'), i.addOnceListener = function(e, t){
    return this.addListener(e, { listener: t, once: !0 });
  }, i.once = n('addOnceListener'), i.defineEvent = function(e){
    return this.getListeners(e), this;
  }, i.defineEvents = function(e){
    for (var t = 0; e.length > t; t += 1) {
      this.defineEvent(e[t]);
    } return this;
  }, i.removeListener = function(e, n){
    var i, o, r = this.getListenersAsObject(e); for (o in r){
      r.hasOwnProperty(o) && (i = t(r[o], n)) !== -1 && r[o].splice(i, 1);
    } return this;
  }, i.off = n('removeListener'), i.addListeners = function(e, t){
    return this.manipulateListeners(!1, e, t);
  }, i.removeListeners = function(e, t){
    return this.manipulateListeners(!0, e, t);
  }, i.manipulateListeners = function(e, t, n){
    var i, o, r = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners
;if (typeof t !== 'object' || t instanceof RegExp) {
      for (i = n.length; i--;){
        r.call(this, t, n[i]);
      }
    } else {
      for (i in t){
        t.hasOwnProperty(i) && (o = t[i]) && (typeof o === 'function' ? r.call(this, i, o) : s.call(this, i, o));
      }
    } return this;
  }, i.removeEvent = function(e){
    var t, n = typeof e, i = this._getEvents(); if (n === 'string') {
      delete i[e];
    } else if (n === 'object') {
      for (t in i){
        i.hasOwnProperty(t) && e.test(t) && delete i[t];
      }
    } else {
      delete this._events;
    } return this;
  }, i.removeAllListeners = n('removeEvent'), i.emitEvent = function(e, t){
    var n, i, o, r = this.getListenersAsObject(e); for (o in r) {
      if (r.hasOwnProperty(o)) {
        for (i = r[o].length; i--;){
          n = r[o][i], !0 === n.once && this.removeListener(e, n.listener), n.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        }
      }
    } return this;
  }, i.trigger = n('emitEvent'), i.emit = function(e){
    var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t);
  }, i.setOnceReturnValue = function(e){
    return this._onceReturnValue = e, this;
  }, i._getOnceReturnValue = function(){
    return !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue;
  }, i._getEvents = function(){
    return this._events || (this._events = {});
  }, e.noConflict = function(){
    return o.EventEmitter = r, e;
  }, typeof define === 'function' && define.amd ? define('eventEmitter/EventEmitter', [], function(){
    return e;
  }) : typeof module === 'object' && module.exports ? module.exports = e : this.EventEmitter = e;
}.call(this), (function(e){
  function t(t){
    var n = e.event; return n.target = n.target || n.srcElement || t, n;
  } var n = document.documentElement, i = function(){}; n.addEventListener ? i = function(e, t, n){
    e.addEventListener(t, n, !1);
  } : n.attachEvent && (i = function(e, n, i){
    e[n + i] = i.handleEvent ? function(){
      var n = t(e); i.handleEvent.call(i, n);
    } : function(){
      var n = t(e); i.call(e, n);
    }, e.attachEvent('on' + n, e[n + i]);
  }); var o = function(){}; n.removeEventListener ? o = function(e, t, n){
    e.removeEventListener(t, n, !1);
  } : n.detachEvent && (o = function(e, t, n){
    e.detachEvent('on' + t, e[t + n]); try {
      delete e[t + n];
    } catch (i){
      e[t + n] = void 0;
    }
  }); var r = { bind: i, unbind: o }; typeof define === 'function' && define.amd ? define('eventie/eventie', r) : e.eventie = r;
}(this)), (function(e, t){
  typeof define === 'function' && define.amd ? define(['eventEmitter/EventEmitter', 'eventie/eventie'], function(n, i){
    return t(e, n, i);
  }) : typeof exports === 'object' ? module.exports = t(e, require('wolfy87-eventemitter'), require('eventie')) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie);
}(window, function(e, t, n){
  function i(e, t){
    for (var n in t){
      e[n] = t[n];
    } return e;
  } function o(e){
    return p.call(e) === '[object Array]';
  } function r(e){
    var t = []; if (o(e)){
      t = e;
    } else if (typeof e.length === 'number') {
      for (var n = 0, i = e.length; i > n; n++){
        t.push(e[n]);
      }
    } else {
      t.push(e);
    } return t;
  } function s(e, t, n){
    if (!(this instanceof s)) {
      return new s(e, t);
    } typeof e === 'string' && (e = document.querySelectorAll(e)), this.elements = r(e), this.options = i({}, this.options), typeof t === 'function' ? n = t : i(this.options, t), n && this.on('always', n), this.getImages(), c && (this.jqDeferred = new c.Deferred()); var o = this; setTimeout(function(){
      o.check();
    });
  } function a(e){
    this.img = e;
  } function l(e){
    this.src = e, f[e] = this;
  } var c = e.jQuery, u = e.console, d = void 0 !== u, p = Object.prototype.toString; s.prototype = new t(), s.prototype.options = {}, s.prototype.getImages = function(){
    this.images = []; for (var e = 0, t = this.elements.length; t > e; e++){
      var n = this.elements[e]; n.nodeName === 'IMG' && this.addImage(n); var i = n.nodeType; if (i && (i === 1 || i === 9 || i === 11)) {
        for (var o = n.querySelectorAll('img'), r = 0, s = o.length; s > r; r++){
          var a = o[r]; this.addImage(a);
        }
      }
    }
  }, s.prototype.addImage = function(e){
    var t = new a(e); this.images.push(t);
  }, s.prototype.check = function(){
    function e(e, o){
      return t.options.debug && d && u.log('confirm', e, o), t.progress(e), n++, n === i && t.complete(), !0;
    } var t = this, n = 0, i = this.images.length; if (this.hasAnyBroken = !1, !i) {
      return void this.complete();
    } for (var o = 0; i > o; o++){
      var r = this.images[o]; r.on('confirm', e), r.check();
    }
  }, s.prototype.progress = function(e){
    this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded; var t = this; setTimeout(function(){
      t.emit('progress', t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
    });
  }, s.prototype.complete = function(){
    var e = this.hasAnyBroken ? 'fail' : 'done'; this.isComplete = !0; var t = this; setTimeout(function(){
      if (t.emit(e, t), t.emit('always', t), t.jqDeferred){
        var n = t.hasAnyBroken ? 'reject' : 'resolve'; t.jqDeferred[n](t);
      }
    });
  }, c && (c.fn.imagesLoaded = function(e, t){
    return new s(this, e, t).jqDeferred.promise(c(this));
  }), a.prototype = new t(), a.prototype.check = function(){
    var e = f[this.img.src] || new l(this.img.src); if (e.isConfirmed) {
      return void this.confirm(e.isLoaded, 'cached was confirmed');
    } if (this.img.complete && void 0 !== this.img.naturalWidth) {
      return void this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
    } var t = this; e.on('confirm', function(e, n){
      return t.confirm(e.isLoaded, n), !0;
    }), e.check();
  }, a.prototype.confirm = function(e, t){
    this.isLoaded = e, this.emit('confirm', this, t);
  }; var f = {}; return l.prototype = new t(), l.prototype.check = function(){
    if (!this.isChecked){
      var e = new Image(); n.bind(e, 'load', this), n.bind(e, 'error', this), e.src = this.src, this.isChecked = !0;
    }
  }, l.prototype.handleEvent = function(e){
    var t = 'on' + e.type; this[t] && this[t](e);
  }, l.prototype.onload = function(e){
    this.confirm(!0, 'onload'), this.unbindProxyEvents(e);
  }, l.prototype.onerror = function(e){
    this.confirm(!1, 'onerror'), this.unbindProxyEvents(e);
  }, l.prototype.confirm = function(e, t){
    this.isConfirmed = !0, this.isLoaded = e, this.emit('confirm', this, t);
  }, l.prototype.unbindProxyEvents = function(e){
    n.unbind(e.target, 'load', this), n.unbind(e.target, 'error', this);
  }, s;
})), (function(e){
  function t(){} function n(e){
    function n(t){
      t.prototype.option || (t.prototype.option = function(t){
        e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t));
      });
    } function o(t, n){
      e.fn[t] = function(o){
        if (typeof o === 'string'){
          for (var s = i.call(arguments, 1), a = 0, l = this.length; l > a; a++){
            var c = this[a], u = e.data(c, t); if (u) {
              if (e.isFunction(u[o]) && o.charAt(0) !== '_'){
                var d = u[o].apply(u, s); if (void 0 !== d) {
                  return d;
                }
              } else {
                r("no such method '" + o + "' for " + t + ' instance');
              }
            } else {
              r('cannot call methods on ' + t + " prior to initialization; attempted to call '" + o + "'");
            }
          } return this;
        } return this.each(function(){
          var i = e.data(this, t); i ? (i.option(o), i._init()) : (i = new n(this, o), e.data(this, t, i));
        });
      };
    } if (e){
      var r = typeof console === 'undefined' ? t : function(e){
        console.error(e);
      }; return e.bridget = function(e, t){
        n(t), o(e, t);
      }, e.bridget;
    }
  } var i = Array.prototype.slice; typeof define === 'function' && define.amd ? define('jquery-bridget/jquery.bridget', ['jquery'], n) : n(typeof exports === 'object' ? require('jquery') : e.jQuery);
}(window)), (function(e){
  function t(t){
    var n = e.event; return n.target = n.target || n.srcElement || t, n;
  } var n = document.documentElement, i = function(){}; n.addEventListener ? i = function(e, t, n){
    e.addEventListener(t, n, !1);
  } : n.attachEvent && (i = function(e, n, i){
    e[n + i] = i.handleEvent ? function(){
      var n = t(e); i.handleEvent.call(i, n);
    } : function(){
      var n = t(e); i.call(e, n);
    }, e.attachEvent('on' + n, e[n + i]);
  }); var o = function(){}; n.removeEventListener ? o = function(e, t, n){
    e.removeEventListener(t, n, !1);
  } : n.detachEvent && (o = function(e, t, n){
    e.detachEvent('on' + t, e[t + n]); try {
      delete e[t + n];
    } catch (i){
      e[t + n] = void 0;
    }
  }); var r = { bind: i, unbind: o }; typeof define === 'function' && define.amd ? define('eventie/eventie', r) : typeof exports === 'object' ? module.exports = r : e.eventie = r;
}(this)), (function(e){
  function t(e){
    typeof e === 'function' && (t.isReady ? e() : s.push(e));
  } function n(e){
    var n = e.type === 'readystatechange' && r.readyState !== 'complete'; t.isReady || n || i();
  } function i(){
    t.isReady = !0; for (var e = 0, n = s.length; n > e; e++){
      (0, s[e])();
    }
  } function o(o){
    return r.readyState === 'complete' ? i() : (o.bind(r, 'DOMContentLoaded', n), o.bind(r, 'readystatechange', n), o.bind(e, 'load', n)), t;
  } var r = e.document, s = []; t.isReady = !1, typeof define === 'function' && define.amd ? define('doc-ready/doc-ready', ['eventie/eventie'], o) : typeof exports === 'object' ? module.exports = o(require('eventie')) : e.docReady = o(e.eventie);
}(window)), function(){
  function e(){} function t(e, t){
    for (var n = e.length; n--;) {
      if (e[n].listener === t) {
        return n;
      }
    } return -1;
  } function n(e){
    return function(){
      return this[e].apply(this, arguments);
    };
  } var i = e.prototype, o = this, r = o.EventEmitter; i.getListeners = function(e){
    var t, n, i = this._getEvents(); if (e instanceof RegExp){
      t = {}; for (n in i){
        i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
      }
    } else {
      t = i[e] || (i[e] = []);
    } return t;
  }, i.flattenListeners = function(e){
    var t, n = []; for (t = 0; e.length > t; t += 1){
      n.push(e[t].listener);
    } return n;
  }, i.getListenersAsObject = function(e){
    var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n;
  }, i.addListener = function(e, n){
    var i, o = this.getListenersAsObject(e), r = typeof n === 'object'; for (i in o){
      o.hasOwnProperty(i) && t(o[i], n) === -1 && o[i].push(r ? n : { listener: n, once: !1 });
    } return this;
  }, i.on = n('addListener'), i.addOnceListener = function(e, t){
    return this.addListener(e, { listener: t, once: !0 });
  }, i.once = n('addOnceListener'), i.defineEvent = function(e){
    return this.getListeners(e), this;
  }, i.defineEvents = function(e){
    for (var t = 0; e.length > t; t += 1) {
      this.defineEvent(e[t]);
    } return this;
  }, i.removeListener = function(e, n){
    var i, o, r = this.getListenersAsObject(e); for (o in r){
      r.hasOwnProperty(o) && (i = t(r[o], n)) !== -1 && r[o].splice(i, 1);
    } return this;
  }, i.off = n('removeListener'), i.addListeners = function(e, t){
    return this.manipulateListeners(!1, e, t);
  }, i.removeListeners = function(e, t){
    return this.manipulateListeners(!0, e, t);
  }, i.manipulateListeners = function(e, t, n){
    var i, o, r = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners; if (typeof t !== 'object' || t instanceof RegExp) {
      for (i = n.length; i--;){
        r.call(this, t, n[i]);
      }
    } else {
      for (i in t){
        t.hasOwnProperty(i) && (o = t[i]) && (typeof o === 'function' ? r.call(this, i, o) : s.call(this, i, o));
      }
    } return this;
  }, i.removeEvent = function(e){
    var t, n = typeof e, i = this._getEvents(); if (n === 'string') {
      delete i[e];
    } else if (e instanceof RegExp) {
      for (t in i){
        i.hasOwnProperty(t) && e.test(t) && delete i[t];
      }
    } else {
      delete this._events;
    } return this;
  }, i.removeAllListeners = n('removeEvent'), i.emitEvent = function(e, t){
    var n, i, o, r = this.getListenersAsObject(e); for (o in r) {
      if (r.hasOwnProperty(o)) {
        for (i = r[o].length; i--;){
          n = r[o][i], !0 === n.once && this.removeListener(e, n.listener), n.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        }
      }
    } return this;
  }, i.trigger = n('emitEvent'), i.emit = function(e){
    var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t);
  }, i.setOnceReturnValue = function(e){
    return this._onceReturnValue = e, this;
  }, i._getOnceReturnValue = function(){
    return !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue;
  }, i._getEvents = function(){
    return this._events || (this._events = {});
  }, e.noConflict = function(){
    return o.EventEmitter = r, e;
  }, typeof define === 'function' && define.amd ? define('eventEmitter/EventEmitter', [], function(){
    return e;
  }) : typeof module === 'object' && module.exports ? module.exports = e : o.EventEmitter = e;
}.call(this), (function(e){
  function t(e){
    if (e){
      if (typeof i[e] === 'string') {
        return e;
      } e = e.charAt(0).toUpperCase() + e.slice(1); for (var t, o = 0, r = n.length; r > o; o++) {
        if (t = n[o] + e, typeof i[t] === 'string') {
          return t;
        }
      }
    }
  } var n = 'Webkit Moz ms Ms O'.split(' '), i = document.documentElement.style; typeof define === 'function' && define.amd ? define('get-style-property/get-style-property', [], function(){
    return t;
  }) : typeof exports === 'object' ? module.exports = t : e.getStyleProperty = t;
}(window)), (function(e){
  function t(e){
    var t = parseFloat(e); return e.indexOf('%') === -1 && !isNaN(t) && t;
  } function n(){} function i(){
    for (var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0, n = s.length; n > t; t++){
      e[s[t]] = 0;
    } return e;
  } function o(n){
    function o(){
      if (!p){
        p = !0; var i = e.getComputedStyle; if (c = (function(){
          var e = i ? function(e){
            return i(e, null);
          } : function(e){
            return e.currentStyle;
          }; return function(t){
            var n = e(t); return n || r('Style returned ' + n + '. Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1'), n;
          };
        }()), u = n('boxSizing')){
          var o = document.createElement('div'); o.style.width = '200px', o.style.padding = '1px 2px 3px 4px', o.style.borderStyle = 'solid', o.style.borderWidth = '1px 2px 3px 4px', o.style[u] = 'border-box'; var s = document.body || document.documentElement; s.appendChild(o); var a = c(o); d = t(a.width) === 200, s.removeChild(o);
        }
      }
    } function a(e){
      if (o(), typeof e === 'string' && (e = document.querySelector(e)), e && typeof e === 'object' && e.nodeType){
        var n = c(e); if (n.display === 'none') {
          return i();
        } var r = {}; r.width = e.offsetWidth, r.height = e.offsetHeight; for (var a = r.isBorderBox = !(!u || !n[u] || n[u] !== 'border-box'), p = 0, f = s.length; f > p; p++){
          var h = s[p], g = n[h]; g = l(e, g); var m = parseFloat(g); r[h] = isNaN(m) ? 0 : m;
        } var y = r.paddingLeft + r.paddingRight, v = r.paddingTop + r.paddingBottom, b = r.marginLeft + r.marginRight, x = r.marginTop + r.marginBottom, C = r.borderLeftWidth + r.borderRightWidth, w = r.borderTopWidth + r.borderBottomWidth, S = a && d, T = t(n.width); !1 !== T && (r.width = T + (S ? 0 : y + C)); var k = t(n.height); return !1 !== k && (r.height = k + (S ? 0 : v + w)), r.innerWidth = r.width - (y + C), r.innerHeight = r.height - (v + w), r.outerWidth = r.width + b, r.outerHeight = r.height + x, r;
      }
    } function l(t, n){
      if (e.getComputedStyle || n.indexOf('%') === -1) {
        return n;
      } var i = t.style, o = i.left, r = t.runtimeStyle, s = r && r.left; return s && (r.left = t.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, s && (r.left = s), n;
    } var c, u, d, p = !1; return a;
  } var r = typeof console === 'undefined' ? n : function(e){
      console.error(e);
    }, s = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth']; typeof define === 'function' && define.amd ? define('get-size/get-size', ['get-style-property/get-style-property'], o) : typeof exports === 'object' ? module.exports = o(require('desandro-get-style-property')) : e.getSize = o(e.getStyleProperty);
}(window)), (function(e){
  function t(e, t){
    return e[s](t);
  } function n(e){
    e.parentNode || document.createDocumentFragment().appendChild(e);
  } function i(e, t){
    n(e); for (var i = e.parentNode.querySelectorAll(t), o = 0, r = i.length; r > o; o++) {
      if (i[o] === e) {
        return !0;
      }
    } return !1;
  } function o(e, i){
    return n(e), t(e, i);
  } var r, s = (function(){
    if (e.matchesSelector) {
      return 'matchesSelector';
    } for (var t = ['webkit', 'moz', 'ms', 'o'], n = 0, i = t.length; i > n; n++){
      var o = t[n], r = o + 'MatchesSelector'; if (e[r]) {
        return r;
      }
    }
  }()); if (s){
    var a = document.createElement('div'), l = t(a, 'div'); r = l ? t : o;
  } else {
    r = i;
  } typeof define === 'function' && define.amd ? define('matches-selector/matches-selector', [], function(){
    return r;
  }) : typeof exports === 'object' ? module.exports = r : window.matchesSelector = r;
}(Element.prototype)), (function(e){
  function t(e, t){
    for (var n in t){
      e[n] = t[n];
    } return e;
  } function n(e){
    for (var t in e) {
      return !1;
    } return !0;
  } function i(e){
    return e.replace(/([A-Z])/g, function(e){
      return '-' + e.toLowerCase();
    });
  } function o(e, o, r){
    function a(e, t){
      e && (this.element = e, this.layout = t, this.position = { x: 0, y: 0 }, this._create());
    } var l = r('transition'), c = r('transform'), u = l && c, d = !!r('perspective'), p = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'otransitionend', transition: 'transitionend' }[l], f = ['transform', 'transition', 'transitionDuration', 'transitionProperty'], h = (function(){
      for (var e = {}, t = 0, n = f.length; n > t; t++){
        var i = f[t], o = r(i); o && o !== i && (e[i] = o);
      } return e;
    }()); t(a.prototype, e.prototype), a.prototype._create = function(){
      this._transn = { ingProperties: {}, clean: {}, onEnd: {}}, this.css({ position: 'absolute' });
    }, a.prototype.handleEvent = function(e){
      var t = 'on' + e.type; this[t] && this[t](e);
    }, a.prototype.getSize = function(){
      this.size = o(this.element);
    }, a.prototype.css = function(e){
      var t = this.element.style; for (var n in e){
        t[h[n] || n] = e[n];
      }
    }, a.prototype.getPosition = function(){
      var e = s(this.element), t = this.layout.options, n = t.isOriginLeft, i = t.isOriginTop, o = parseInt(e[n ? 'left' : 'right'], 10), r = parseInt(e[i ? 'top' : 'bottom'], 10); o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r; var a = this.layout.size; o -= n ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r;
    }, a.prototype.layoutPosition = function(){
      var e = this.layout.size, t = this.layout.options, n = {}; t.isOriginLeft ? (n.left = this.position.x + e.paddingLeft + 'px', n.right = '') : (n.right = this.position.x + e.paddingRight + 'px', n.left = ''), t.isOriginTop ? (n.top = this.position.y + e.paddingTop + 'px', n.bottom = '') : (n.bottom = this.position.y + e.paddingBottom + 'px', n.top = ''), this.css(n), this.emitEvent('layout', [this]);
    }; var g = d ? function(e, t){
      return 'translate3d(' + e + 'px, ' + t + 'px, 0)';
    } : function(e, t){
      return 'translate(' + e + 'px, ' + t + 'px)';
    }; a.prototype._transitionTo = function(e, t){
      this.getPosition(); var n = this.position.x, i = this.position.y, o = parseInt(e, 10), r = parseInt(t, 10), s = o === this.position.x && r === this.position.y; if (this.setPosition(e, t), s && !this.isTransitioning) {
        return void this.layoutPosition();
      } var a = e - n, l = t - i, c = {}, u = this.layout.options; a = u.isOriginLeft ? a : -a, l = u.isOriginTop ? l : -l, c.transform = g(a, l), this.transition({ to: c, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
    }, a.prototype.goTo = function(e, t){
      this.setPosition(e, t), this.layoutPosition();
    }, a.prototype.moveTo = u ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(e, t){
      this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10);
    }, a.prototype._nonTransition = function(e){
      this.css(e.to), e.isCleaning && this._removeStyles(e.to); for (var t in e.onTransitionEnd){
        e.onTransitionEnd[t].call(this);
      }
    }, a.prototype._transition = function(e){
      if (!parseFloat(this.layout.options.transitionDuration)) {
        return void this._nonTransition(e);
      } var t = this._transn; for (var n in e.onTransitionEnd){
        t.onEnd[n] = e.onTransitionEnd[n];
      } for (n in e.to){
        t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
      }e.from && (this.css(e.from), this.element.offsetHeight), this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0;
    }; var m = c && i(c) + ',opacity'; a.prototype.enableTransition = function(){
      this.isTransitioning || (this.css({ transitionProperty: m, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(p, this, !1));
    }, a.prototype.transition = a.prototype[l ? '_transition' : '_nonTransition'], a.prototype.onwebkitTransitionEnd = function(e){
      this.ontransitionend(e);
    }, a.prototype.onotransitionend = function(e){
      this.ontransitionend(e);
    }; var y = { '-webkit-transform': 'transform', '-moz-transform': 'transform', '-o-transform': 'transform' }; a.prototype.ontransitionend = function(e){
      if (e.target === this.element){
        var t = this._transn, i = y[e.propertyName] || e.propertyName; delete t.ingProperties[i], n(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = '', delete t.clean[i]), i in t.onEnd && (t.onEnd[i].call(this), delete t.onEnd[i]), this.emitEvent('transitionEnd', [this]);
      }
    }, a.prototype.disableTransition = function(){
      this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), this.isTransitioning = !1;
    }, a.prototype._removeStyles = function(e){
      var t = {}; for (var n in e){
        t[n] = '';
      } this.css(t);
    }; var v = { transitionProperty: '', transitionDuration: '' }; return a.prototype.removeTransitionStyles = function(){
      this.css(v);
    }, a.prototype.removeElem = function(){
      this.element.parentNode.removeChild(this.element), this.emitEvent('remove', [this]);
    }, a.prototype.remove = function(){
      if (!l || !parseFloat(this.layout.options.transitionDuration)) {
        return void this.removeElem();
      } var e = this; this.on('transitionEnd', function(){
        return e.removeElem(), !0;
      }), this.hide();
    }, a.prototype.reveal = function(){
      delete this.isHidden, this.css({ display: '' }); var e = this.layout.options; this.transition({ from: e.hiddenStyle, to: e.visibleStyle, isCleaning: !0 });
    }, a.prototype.hide = function(){
      this.isHidden = !0, this.css({ display: '' }); var e = this.layout.options; this.transition({ from: e.visibleStyle, to: e.hiddenStyle, isCleaning: !0, onTransitionEnd: { opacity: function(){
        this.isHidden && this.css({ display: 'none' });
      } }});
    }, a.prototype.destroy = function(){
      this.css({ position: '', left: '', right: '', top: '', bottom: '', transition: '', transform: '' });
    }, a;
  } var r = e.getComputedStyle, s = r ? function(e){
    return r(e, null);
  } : function(e){
    return e.currentStyle;
  }; typeof define === 'function' && define.amd ? define('outlayer/item', ['eventEmitter/EventEmitter', 'get-size/get-size', 'get-style-property/get-style-property'], o) : typeof exports === 'object' ? module.exports = o(require('wolfy87-eventemitter'), require('get-size'), require('desandro-get-style-property')) : (e.Outlayer = {}, e.Outlayer.Item = o(e.EventEmitter, e.getSize, e.getStyleProperty));
}(window)), (function(e){
  function t(e, t){
    for (var n in t){
      e[n] = t[n];
    } return e;
  } function n(e){
    return d.call(e) === '[object Array]';
  } function i(e){
    var t = []; if (n(e)){
      t = e;
    } else if (e && typeof e.length === 'number') {
      for (var i = 0, o = e.length; o > i; i++){
        t.push(e[i]);
      }
    } else {
      t.push(e);
    } return t;
  } function o(e, t){
    var n = f(t, e); n !== -1 && t.splice(n, 1);
  } function r(e){
    return e.replace(/(.)([A-Z])/g, function(e, t, n){
      return t + '-' + n;
    }).toLowerCase();
  } function s(n, s, d, f, h, g){
    function m(e, n){
      if (typeof e === 'string' && (e = a.querySelector(e)), !e || !p(e)) {
        return void (l && l.error('Bad ' + this.constructor.namespace + ' element: ' + e));
      } this.element = e, this.options = t({}, this.constructor.defaults), this.option(n); var i = ++y; this.element.outlayerGUID = i, v[i] = this, this._create(), this.options.isInitLayout && this.layout();
    } var y = 0, v = {}; return m.namespace = 'outlayer', m.Item = g, m.defaults = { containerStyle: { position: 'relative' }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: '0.4s', hiddenStyle: { opacity: 0, transform: 'scale(0.001)' }, visibleStyle: { opacity: 1, transform: 'scale(1)' }}, t(m.prototype, d.prototype), m.prototype.option = function(e){
      t(this.options, e);
    }, m.prototype._create = function(){
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize();
    }, m.prototype.reloadItems = function(){
      this.items = this._itemize(this.element.children);
    }, m.prototype._itemize = function(e){
      for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], o = 0, r = t.length; r > o; o++){
        var s = t[o], a = new n(s, this); i.push(a);
      } return i;
    }, m.prototype._filterFindItemElements = function(e){
      e = i(e); for (var t = this.options.itemSelector, n = [], o = 0, r = e.length; r > o; o++){
        var s = e[o]; if (p(s)) {
          if (t){
            h(s, t) && n.push(s); for (var a = s.querySelectorAll(t), l = 0, c = a.length; c > l; l++){
              n.push(a[l]);
            }
          } else {
            n.push(s);
          }
        }
      } return n;
    }, m.prototype.getItemElements = function(){
      for (var e = [], t = 0, n = this.items.length; n > t; t++){
        e.push(this.items[t].element);
      } return e;
    }, m.prototype.layout = function(){
      this._resetLayout(), this._manageStamps(); var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; this.layoutItems(this.items, e), this._isLayoutInited = !0;
    }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function(){
      this.getSize();
    }, m.prototype.getSize = function(){
      this.size = f(this.element);
    }, m.prototype._getMeasurement = function(e, t){
      var n, i = this.options[e]; i ? (typeof i === 'string' ? n = this.element.querySelector(i) : p(i) && (n = i), this[e] = n ? f(n)[t] : i) : this[e] = 0;
    }, m.prototype.layoutItems = function(e, t){
      e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout();
    }, m.prototype._getItemsForLayout = function(e){
      for (var t = [], n = 0, i = e.length; i > n; n++){
        var o = e[n]; o.isIgnored || t.push(o);
      } return t;
    }, m.prototype._layoutItems = function(e, t){
      function n(){
        i.emitEvent('layoutComplete', [i, e]);
      } var i = this; if (!e || !e.length) {
        return void n();
      } this._itemsOn(e, 'layout', n); for (var o = [], r = 0, s = e.length; s > r; r++){
        var a = e[r], l = this._getItemLayoutPosition(a); l.item = a, l.isInstant = t || a.isLayoutInstant, o.push(l);
      } this._processLayoutQueue(o);
    }, m.prototype._getItemLayoutPosition = function(){
      return { x: 0, y: 0 };
    }, m.prototype._processLayoutQueue = function(e){
      for (var t = 0, n = e.length; n > t; t++){
        var i = e[t]; this._positionItem(i.item, i.x, i.y, i.isInstant);
      }
    }, m.prototype._positionItem = function(e, t, n, i){
      i ? e.goTo(t, n) : e.moveTo(t, n);
    }, m.prototype._postLayout = function(){
      this.resizeContainer();
    }, m.prototype.resizeContainer = function(){
      if (this.options.isResizingContainer){
        var e = this._getContainerSize(); e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
      }
    }, m.prototype._getContainerSize = u, m.prototype._setContainerMeasure = function(e, t){
      if (void 0 !== e){
        var n = this.size; n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? 'width' : 'height'] = e + 'px';
      }
    }, m.prototype._itemsOn = function(e, t, n){
      function i(){
        return o++, o === r && n.call(s), !0;
      } for (var o = 0, r = e.length, s = this, a = 0, l = e.length; l > a; a++){
        e[a].on(t, i);
      }
    }, m.prototype.ignore = function(e){
      var t = this.getItem(e); t && (t.isIgnored = !0);
    }, m.prototype.unignore = function(e){
      var t = this.getItem(e); t && delete t.isIgnored;
    }, m.prototype.stamp = function(e){
      if (e = this._find(e)){
        this.stamps = this.stamps.concat(e); for (var t = 0, n = e.length; n > t; t++){
          var i = e[t]; this.ignore(i);
        }
      }
    }, m.prototype.unstamp = function(e){
      if (e = this._find(e)) {
        for (var t = 0, n = e.length; n > t; t++){
          var i = e[t]; o(i, this.stamps), this.unignore(i);
        }
      }
    }, m.prototype._find = function(e){
      return e ? (typeof e === 'string' && (e = this.element.querySelectorAll(e)), e = i(e)) : void 0;
    }, m.prototype._manageStamps = function(){
      if (this.stamps && this.stamps.length){
        this._getBoundingRect(); for (var e = 0, t = this.stamps.length; t > e; e++){
          var n = this.stamps[e]; this._manageStamp(n);
        }
      }
    }, m.prototype._getBoundingRect = function(){
      var e = this.element.getBoundingClientRect(), t = this.size; this._boundingRect = { left: e.left + t.paddingLeft + t.borderLeftWidth, top: e.top + t.paddingTop + t.borderTopWidth, right: e.right - (t.paddingRight + t.borderRightWidth), bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth) };
    }, m.prototype._manageStamp = u, m.prototype._getElementOffset = function(e){
      var t = e.getBoundingClientRect(), n = this._boundingRect, i = f(e); return { left: t.left - n.left - i.marginLeft, top: t.top - n.top - i.marginTop, right: n.right - t.right - i.marginRight, bottom: n.bottom - t.bottom - i.marginBottom };
    }, m.prototype.handleEvent = function(e){
      var t = 'on' + e.type; this[t] && this[t](e);
    }, m.prototype.bindResize = function(){
      this.isResizeBound || (n.bind(e, 'resize', this), this.isResizeBound = !0);
    }, m.prototype.unbindResize = function(){
      this.isResizeBound && n.unbind(e, 'resize', this), this.isResizeBound = !1;
    }, m.prototype.onresize = function(){
      function e(){
        t.resize(), delete t.resizeTimeout;
      } this.resizeTimeout && clearTimeout(this.resizeTimeout); var t = this; this.resizeTimeout = setTimeout(e, 100);
    }, m.prototype.resize = function(){
      this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, m.prototype.needsResizeLayout = function(){
      var e = f(this.element); return this.size && e && e.innerWidth !== this.size.innerWidth;
    }, m.prototype.addItems = function(e){
      var t = this._itemize(e); return t.length && (this.items = this.items.concat(t)), t;
    }, m.prototype.appended = function(e){
      var t = this.addItems(e); t.length && (this.layoutItems(t, !0), this.reveal(t));
    }, m.prototype.prepended = function(e){
      var t = this._itemize(e); if (t.length){
        var n = this.items.slice(0); this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n);
      }
    }, m.prototype.reveal = function(e){
      var t = e && e.length; if (t) {
        for (var n = 0; t > n; n++){
          var i = e[n]; i.reveal();
        }
      }
    }, m.prototype.hide = function(e){
      var t = e && e.length; if (t) {
        for (var n = 0; t > n; n++){
          var i = e[n]; i.hide();
        }
      }
    }, m.prototype.getItem = function(e){
      for (var t = 0, n = this.items.length; n > t; t++){
        var i = this.items[t]; if (i.element === e) {
          return i;
        }
      }
    }, m.prototype.getItems = function(e){
      if (e && e.length){
        for (var t = [], n = 0, i = e.length; i > n; n++){
          var o = e[n], r = this.getItem(o); r && t.push(r);
        } return t;
      }
    }, m.prototype.remove = function(e){
      e = i(e); var t = this.getItems(e); if (t && t.length){
        this._itemsOn(t, 'remove', function(){
          this.emitEvent('removeComplete', [this, t]);
        }); for (var n = 0, r = t.length; r > n; n++){
          var s = t[n]; s.remove(), o(s, this.items);
        }
      }
    }, m.prototype.destroy = function(){
      var e = this.element.style; e.height = '', e.position = '', e.width = ''; for (var t = 0, n = this.items.length; n > t; t++) {
        this.items[t].destroy();
      } this.unbindResize(); var i = this.element.outlayerGUID; delete v[i], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace);
    }, m.data = function(e){
      var t = e && e.outlayerGUID; return t && v[t];
    }, m.create = function(e, n){
      function i(){
        m.apply(this, arguments);
      } return Object.create ? i.prototype = Object.create(m.prototype) : t(i.prototype, m.prototype), i.prototype.constructor = i, i.defaults = t({}, m.defaults), t(i.defaults, n), i.prototype.settings = {}, i.namespace = e, i.data = m.data, i.Item = function(){
        g.apply(this, arguments);
      }, i.Item.prototype = new g(), s(function(){
        for (var t = r(e), n = a.querySelectorAll('.js-' + t), o = 'data-' + t + '-options', s = 0, u = n.length; u > s; s++){
          var d, p = n[s], f = p.getAttribute(o); try {
            d = f && JSON.parse(f);
          } catch (e){
            l && l.error('Error parsing ' + o + ' on ' + p.nodeName.toLowerCase() + (p.id ? '#' + p.id : '') + ': ' + e); continue;
          } var h = new i(p, d); c && c.data(p, e, h);
        }
      }), c && c.bridget && c.bridget(e, i), i;
    }, m.Item = g, m;
  } var a = e.document, l = e.console, c = e.jQuery, u = function(){}, d = Object.prototype.toString, p = typeof HTMLElement === 'function' || typeof HTMLElement === 'object' ? function(e){
      return e instanceof HTMLElement;
    } : function(e){
      return e && typeof e === 'object' && e.nodeType === 1 && typeof e.nodeName === 'string';
    }, f = Array.prototype.indexOf ? function(e, t){
      return e.indexOf(t);
    } : function(e, t){
      for (var n = 0, i = e.length; i > n; n++) {
        if (e[n] === t) {
          return n;
        }
      } return -1;
    }; typeof define === 'function' && define.amd ? define('outlayer/outlayer', ['eventie/eventie', 'doc-ready/doc-ready', 'eventEmitter/EventEmitter', 'get-size/get-size', 'matches-selector/matches-selector', './item'], s) : typeof exports === 'object' ? module.exports = s(require('eventie'), require('doc-ready'), require('wolfy87-eventemitter'), require('get-size'), require('desandro-matches-selector'), require('./item')) : e.Outlayer = s(e.eventie, e.docReady, e.EventEmitter, e.getSize, e.matchesSelector, e.Outlayer.Item);
}(window)), (function(e){
  function t(e){
    function t(){
      e.Item.apply(this, arguments);
    }t.prototype = new e.Item(), t.prototype._create = function(){
      this.id = this.layout.itemGUID++, e.Item.prototype._create.call(this), this.sortData = {};
    }, t.prototype.updateSortData = function(){
      if (!this.isIgnored){
        this.sortData.id = this.id, this.sortData['original-order'] = this.id, this.sortData.random = Math.random(); var e = this.layout.options.getSortData, t = this.layout._sorters; for (var n in e){
          var i = t[n]; this.sortData[n] = i(this.element, this);
        }
      }
    }; var n = t.prototype.destroy; return t.prototype.destroy = function(){
      n.apply(this, arguments), this.css({ display: '' });
    }, t;
  } typeof define === 'function' && define.amd ? define('isotope/js/item', ['outlayer/outlayer'], t) : typeof exports === 'object' ? module.exports = t(require('outlayer')) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer));
}(window)), (function(e){
  function t(e, t){
    function n(e){
      this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size);
    } return (function(){
      for (var e = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout'], i = 0, o = e.length; o > i; i++){
        var r = e[i]; n.prototype[r] = (function(e){
          return function(){
            return t.prototype[e].apply(this.isotope, arguments);
          };
        }(r));
      }
    }()), n.prototype.needsVerticalResizeLayout = function(){
      var t = e(this.isotope.element); return this.isotope.size && t && t.innerHeight !== this.isotope.size.innerHeight;
    }, n.prototype._getMeasurement = function(){
      this.isotope._getMeasurement.apply(this, arguments);
    }, n.prototype.getColumnWidth = function(){
      this.getSegmentSize('column', 'Width');
    }, n.prototype.getRowHeight = function(){
      this.getSegmentSize('row', 'Height');
    }, n.prototype.getSegmentSize = function(e, t){
      var n = e + t, i = 'outer' + t; if (this._getMeasurement(n, i), !this[n]){
        var o = this.getFirstItemSize(); this[n] = o && o[i] || this.isotope.size['inner' + t];
      }
    }, n.prototype.getFirstItemSize = function(){
      var t = this.isotope.filteredItems[0]; return t && t.element && e(t.element);
    }, n.prototype.layout = function(){
      this.isotope.layout.apply(this.isotope, arguments);
    }, n.prototype.getSize = function(){
      this.isotope.getSize(), this.size = this.isotope.size;
    }, n.modes = {}, n.create = function(e, t){
      function i(){
        n.apply(this, arguments);
      } return i.prototype = new n(), t && (i.options = t), i.prototype.namespace = e, n.modes[e] = i, i;
    }, n;
  } typeof define === 'function' && define.amd ? define('isotope/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], t) : typeof exports === 'object' ? module.exports = t(require('get-size'), require('outlayer')) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer));
}(window)), (function(e){
  function t(e, t){
    var i = e.create('masonry'); return i.prototype._resetLayout = function(){
      this.getSize(), this._getMeasurement('columnWidth', 'outerWidth'), this._getMeasurement('gutter', 'outerWidth'), this.measureColumns(); var e = this.cols; for (this.colYs = []; e--;) {
        this.colYs.push(0);
      } this.maxY = 0;
    }, i.prototype.measureColumns = function(){
      if (this.getContainerWidth(), !this.columnWidth){
        var e = this.items[0], n = e && e.element; this.columnWidth = n && t(n).outerWidth || this.containerWidth;
      } this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1);
    }, i.prototype.getContainerWidth = function(){
      var e = this.options.isFitWidth ? this.element.parentNode : this.element, n = t(e)
;this.containerWidth = n && n.innerWidth;
    }, i.prototype._getItemLayoutPosition = function(e){
      e.getSize(); var t = e.size.outerWidth % this.columnWidth, i = t && t < 1 ? 'round' : 'ceil', o = Math[i](e.size.outerWidth / this.columnWidth); o = Math.min(o, this.cols); for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = n(r, s), l = { x: this.columnWidth * a, y: s }, c = s + e.size.outerHeight, u = this.cols + 1 - r.length, d = 0; u > d; d++) {
        this.colYs[a + d] = c;
      } return l;
    }, i.prototype._getColGroup = function(e){
      if (e < 2) {
        return this.colYs;
      } for (var t = [], n = this.cols + 1 - e, i = 0; n > i; i++){
        var o = this.colYs.slice(i, i + e); t[i] = Math.max.apply(Math, o);
      } return t;
    }, i.prototype._manageStamp = function(e){
      var n = t(e), i = this._getElementOffset(e), o = this.options.isOriginLeft ? i.left : i.right, r = o + n.outerWidth, s = Math.floor(o / this.columnWidth); s = Math.max(0, s); var a = Math.floor(r / this.columnWidth); a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a); for (var l = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, c = s; a >= c; c++) {
        this.colYs[c] = Math.max(l, this.colYs[c]);
      }
    }, i.prototype._getContainerSize = function(){
      this.maxY = Math.max.apply(Math, this.colYs); var e = { height: this.maxY }; return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e;
    }, i.prototype._getContainerFitWidth = function(){
      for (var e = 0, t = this.cols; --t && this.colYs[t] === 0;){
        e++;
      } return (this.cols - e) * this.columnWidth - this.gutter;
    }, i.prototype.needsResizeLayout = function(){
      var e = this.containerWidth; return this.getContainerWidth(), e !== this.containerWidth;
    }, i;
  } var n = Array.prototype.indexOf ? function(e, t){
    return e.indexOf(t);
  } : function(e, t){
    for (var n = 0, i = e.length; i > n; n++) {
      if (e[n] === t) {
        return n;
      }
    } return -1;
  }; typeof define === 'function' && define.amd ? define('masonry/masonry', ['outlayer/outlayer', 'get-size/get-size'], t) : typeof exports === 'object' ? module.exports = t(require('outlayer'), require('get-size')) : e.Masonry = t(e.Outlayer, e.getSize);
}(window)), (function(e){
  function t(e, t){
    for (var n in t){
      e[n] = t[n];
    } return e;
  } function n(e, n){
    var i = e.create('masonry'), o = i.prototype._getElementOffset, r = i.prototype.layout, s = i.prototype._getMeasurement; t(i.prototype, n.prototype), i.prototype._getElementOffset = o, i.prototype.layout = r, i.prototype._getMeasurement = s; var a = i.prototype.measureColumns; i.prototype.measureColumns = function(){
      this.items = this.isotope.filteredItems, a.call(this);
    }; var l = i.prototype._manageStamp; return i.prototype._manageStamp = function(){
      this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments);
    }, i;
  } typeof define === 'function' && define.amd ? define('isotope/js/layout-modes/masonry', ['../layout-mode', 'masonry/masonry'], n) : typeof exports === 'object' ? module.exports = n(require('../layout-mode'), require('masonry-layout')) : n(e.Isotope.LayoutMode, e.Masonry);
}(window)), (function(e){
  function t(e){
    var t = e.create('fitRows'); return t.prototype._resetLayout = function(){
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement('gutter', 'outerWidth');
    }, t.prototype._getItemLayoutPosition = function(e){
      e.getSize(); var t = e.size.outerWidth + this.gutter, n = this.isotope.size.innerWidth + this.gutter; this.x !== 0 && t + this.x > n && (this.x = 0, this.y = this.maxY); var i = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, i;
    }, t.prototype._getContainerSize = function(){
      return { height: this.maxY };
    }, t;
  } typeof define === 'function' && define.amd ? define('isotope/js/layout-modes/fit-rows', ['../layout-mode'], t) : typeof exports === 'object' ? module.exports = t(require('../layout-mode')) : t(e.Isotope.LayoutMode);
}(window)), (function(e){
  function t(e){
    var t = e.create('vertical', { horizontalAlignment: 0 }); return t.prototype._resetLayout = function(){
      this.y = 0;
    }, t.prototype._getItemLayoutPosition = function(e){
      e.getSize(); var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment, n = this.y; return this.y += e.size.outerHeight, { x: t, y: n };
    }, t.prototype._getContainerSize = function(){
      return { height: this.y };
    }, t;
  } typeof define === 'function' && define.amd ? define('isotope/js/layout-modes/vertical', ['../layout-mode'], t) : typeof exports === 'object' ? module.exports = t(require('../layout-mode')) : t(e.Isotope.LayoutMode);
}(window)), (function(e){
  function t(e, t){
    for (var n in t){
      e[n] = t[n];
    } return e;
  } function n(e){
    return u.call(e) === '[object Array]';
  } function i(e){
    var t = []; if (n(e)){
      t = e;
    } else if (e && typeof e.length === 'number') {
      for (var i = 0, o = e.length; o > i; i++){
        t.push(e[i]);
      }
    } else {
      t.push(e);
    } return t;
  } function o(e, t){
    var n = d(t, e); n !== -1 && t.splice(n, 1);
  } function r(e, n, r, l, u){
    function d(e, t){
      return function(n, i){
        for (var o = 0, r = e.length; r > o; o++){
          var s = e[o], a = n.sortData[s], l = i.sortData[s]; if (a > l || l > a){
            var c = void 0 !== t[s] ? t[s] : t, u = c ? 1 : -1; return (a > l ? 1 : -1) * u;
          }
        } return 0;
      };
    } var p = e.create('isotope', { layoutMode: 'masonry', isJQueryFiltering: !0, sortAscending: !0 }); p.Item = l, p.LayoutMode = u, p.prototype._create = function(){
      this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ['original-order']; for (var t in u.modes) {
        this._initLayoutMode(t);
      }
    }, p.prototype.reloadItems = function(){
      this.itemGUID = 0, e.prototype.reloadItems.call(this);
    }, p.prototype._itemize = function(){
      for (var t = e.prototype._itemize.apply(this, arguments), n = 0, i = t.length; i > n; n++){
        t[n].id = this.itemGUID++;
      } return this._updateItemsSortData(t), t;
    }, p.prototype._initLayoutMode = function(e){
      var n = u.modes[e], i = this.options[e] || {}; this.options[e] = n.options ? t(n.options, i) : i, this.modes[e] = new n(this);
    }, p.prototype.layout = function(){
      return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout();
    }, p.prototype._layout = function(){
      var e = this._getIsInstant(); this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0;
    }, p.prototype.arrange = function(e){
      function t(){
        i.reveal(n.needReveal), i.hide(n.needHide);
      } this.option(e), this._getIsInstant(); var n = this._filter(this.items); this.filteredItems = n.matches; var i = this; this._isInstant ? this._noTransition(t) : t(), this._sort(), this._layout();
    }, p.prototype._init = p.prototype.arrange, p.prototype._getIsInstant = function(){
      var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; return this._isInstant = e, e;
    }, p.prototype._filter = function(e){
      var t = this.options.filter; t = t || '*'; for (var n = [], i = [], o = [], r = this._getFilterTest(t), s = 0, a = e.length; a > s; s++){
        var l = e[s]; if (!l.isIgnored){
          var c = r(l); c && n.push(l), c && l.isHidden ? i.push(l) : c || l.isHidden || o.push(l);
        }
      } return { matches: n, needReveal: i, needHide: o };
    }, p.prototype._getFilterTest = function(e){
      return s && this.options.isJQueryFiltering ? function(t){
        return s(t.element).is(e);
      } : typeof e === 'function' ? function(t){
        return e(t.element);
      } : function(t){
        return r(t.element, e);
      };
    }, p.prototype.updateSortData = function(e){
      var t; e ? (e = i(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t);
    }, p.prototype._getSorters = function(){
      var e = this.options.getSortData; for (var t in e){
        var n = e[t]; this._sorters[t] = f(n);
      }
    }, p.prototype._updateItemsSortData = function(e){
      for (var t = e && e.length, n = 0; t && t > n; n++){
        e[n].updateSortData();
      }
    }; var f = (function(){
      function e(e){
        if (typeof e !== 'string') {
          return e;
        } var n = a(e).split(' '), i = n[0], o = i.match(/^\[(.+)\]$/), r = o && o[1], s = t(r, i), l = p.sortDataParsers[n[1]]; return e = l ? function(e){
          return e && l(s(e));
        } : function(e){
          return e && s(e);
        };
      } function t(e, t){
        return e ? function(t){
          return t.getAttribute(e);
        } : function(e){
          var n = e.querySelector(t); return n && c(n);
        };
      } return e;
    }()); p.sortDataParsers = { parseInt: function(e){
      return parseInt(e, 10);
    }, parseFloat: function(e){
      return parseFloat(e);
    } }, p.prototype._sort = function(){
      var e = this.options.sortBy; if (e){
        var t = [].concat.apply(e, this.sortHistory), n = d(t, this.options.sortAscending); this.filteredItems.sort(n), e !== this.sortHistory[0] && this.sortHistory.unshift(e);
      }
    }, p.prototype._mode = function(){
      var e = this.options.layoutMode, t = this.modes[e]; if (!t) {
        throw Error('No layout mode: ' + e);
      } return t.options = this.options[e], t;
    }, p.prototype._resetLayout = function(){
      e.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, p.prototype._getItemLayoutPosition = function(e){
      return this._mode()._getItemLayoutPosition(e);
    }, p.prototype._manageStamp = function(e){
      this._mode()._manageStamp(e);
    }, p.prototype._getContainerSize = function(){
      return this._mode()._getContainerSize();
    }, p.prototype.needsResizeLayout = function(){
      return this._mode().needsResizeLayout();
    }, p.prototype.appended = function(e){
      var t = this.addItems(e); if (t.length){
        var n = this._filterRevealAdded(t); this.filteredItems = this.filteredItems.concat(n);
      }
    }, p.prototype.prepended = function(e){
      var t = this._itemize(e); if (t.length){
        this._resetLayout(), this._manageStamps(); var n = this._filterRevealAdded(t); this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = t.concat(this.items);
      }
    }, p.prototype._filterRevealAdded = function(e){
      var t = this._filter(e); return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches;
    }, p.prototype.insert = function(e){
      var t = this.addItems(e); if (t.length){
        var n, i, o = t.length; for (n = 0; o > n; n++){
          i = t[n], this.element.appendChild(i.element);
        } var r = this._filter(t).matches; for (n = 0; o > n; n++){
          t[n].isLayoutInstant = !0;
        } for (this.arrange(), n = 0; o > n; n++) {
          delete t[n].isLayoutInstant;
        } this.reveal(r);
      }
    }; var h = p.prototype.remove; return p.prototype.remove = function(e){
      e = i(e); var t = this.getItems(e); if (h.call(this, e), t && t.length) {
        for (var n = 0, r = t.length; r > n; n++){
          var s = t[n]; o(s, this.filteredItems);
        }
      }
    }, p.prototype.shuffle = function(){
      for (var e = 0, t = this.items.length; t > e; e++) {
        this.items[e].sortData.random = Math.random();
      } this.options.sortBy = 'random', this._sort(), this._layout();
    }, p.prototype._noTransition = function(e){
      var t = this.options.transitionDuration; this.options.transitionDuration = 0; var n = e.call(this); return this.options.transitionDuration = t, n;
    }, p.prototype.getFilteredItemElements = function(){
      for (var e = [], t = 0, n = this.filteredItems.length; n > t; t++){
        e.push(this.filteredItems[t].element);
      } return e;
    }, p;
  } var s = e.jQuery, a = String.prototype.trim ? function(e){
      return e.trim();
    } : function(e){
      return e.replace(/^\s+|\s+$/g, '');
    }, l = document.documentElement, c = l.textContent ? function(e){
      return e.textContent;
    } : function(e){
      return e.innerText;
    }, u = Object.prototype.toString, d = Array.prototype.indexOf ? function(e, t){
      return e.indexOf(t);
    } : function(e, t){
      for (var n = 0, i = e.length; i > n; n++) {
        if (e[n] === t) {
          return n;
        }
      } return -1;
    }; typeof define === 'function' && define.amd ? define(['outlayer/outlayer', 'get-size/get-size', 'matches-selector/matches-selector', 'isotope/js/item', 'isotope/js/layout-mode', 'isotope/js/layout-modes/masonry', 'isotope/js/layout-modes/fit-rows', 'isotope/js/layout-modes/vertical'], r) : typeof exports === 'object' ? module.exports = r(require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('./item'), require('./layout-mode'), require('./layout-modes/masonry'), require('./layout-modes/fit-rows'), require('./layout-modes/vertical')) : e.Isotope = r(e.Outlayer, e.getSize, e.matchesSelector, e.Isotope.Item, e.Isotope.LayoutMode);
}(window)), (function(e){
  var t = { mode: 'horizontal', slideSelector: '', infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: 'visible', responsive: !0, slideZIndex: 50, wrapperClass: 'bx-wrapper', touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: 'full', pagerShortSeparator: ' / ', pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: 'Next', prevText: 'Prev', nextSelector: null, prevSelector: null, autoControls: !1, startText: 'Start', stopText: 'Stop', autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: 'next', stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function(){
    return !0;
  }, onSlideBefore: function(){
    return !0;
  }, onSlideAfter: function(){
    return !0;
  }, onSlideNext: function(){
    return !0;
  }, onSlidePrev: function(){
    return !0;
  }, onSliderResize: function(){
    return !0;
  } }; e.fn.bxSlider = function(n){
    if (this.length === 0) {
      return this;
    } if (this.length > 1) {
      return this.each(function(){
        e(this).bxSlider(n);
      }), this;
    } var o = {}, r = this, s = e(window).width(), a = e(window).height(); if (!e(r).data('bxSlider')){
      var l = function(){
          e(r).data('bxSlider') || (o.settings = e.extend({}, t, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = { index: o.settings.startSlide }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = 'all'), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = o.settings.mode === 'vertical' ? 'top' : 'left', o.usingCSS = o.settings.useCSS && o.settings.mode !== 'fade' && (function(){
            for (var e = document.createElement('div'), t = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'], n = 0; n < t.length; n++) {
              if (void 0 !== e.style[t[n]]) {
                return o.cssPrefix = t[n].replace('Perspective', '').toLowerCase(), o.animProp = '-' + o.cssPrefix + '-transform', !0;
              }
            } return !1;
          }()), o.settings.mode === 'vertical' && (o.settings.maxSlides = o.settings.minSlides), r.data('origStyle', r.attr('style')), r.children(o.settings.slideSelector).each(function(){
            e(this).data('origStyle', e(this).attr('style'));
          }), c());
        }, c = function(){
          var t = o.children.eq(o.settings.startSlide); r.wrap('<div class="' + o.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.settings.ariaLive && !o.settings.ticker && o.viewport.attr('aria-live', 'polite'), o.loader = e('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({ width: o.settings.mode === 'horizontal' ? 1e3 * o.children.length + 215 + '%' : 'auto', position: 'relative' }), o.usingCSS && o.settings.easing ? r.css('-' + o.cssPrefix + '-transition-timing-function', o.settings.easing) : o.settings.easing || (o.settings.easing = 'swing'), o.viewport.css({ width: '100%', overflow: 'hidden', position: 'relative' }), o.viewport.parent().css({ maxWidth: f() }), o.children.css({ float: o.settings.mode === 'horizontal' ? 'left' : 'none', listStyle: 'none', position: 'relative' }), o.children.css('width', h()), o.settings.mode === 'horizontal' && o.settings.slideMargin > 0 && o.children.css('marginRight', o.settings.slideMargin), o.settings.mode === 'vertical' && o.settings.slideMargin > 0 && o.children.css('marginBottom', o.settings.slideMargin), o.settings.mode === 'fade' && (o.children.css({ position: 'absolute', zIndex: 0, display: 'none' }), o.children.eq(o.settings.startSlide).css({ zIndex: o.settings.slideZIndex, display: 'block' })), o.controls.el = e('<div class="bx-controls" />'), o.settings.captions && T(), o.active.last = o.settings.startSlide === m() - 1, o.settings.video && r.fitVids(), (o.settings.preloadImages === 'all' || o.settings.ticker) && (t = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.controls && w(), o.settings.auto && o.settings.autoControls && S(), o.settings.pager && C(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), u(t, d);
        }, u = function(t, n){
          var i = t.find('img:not([src=""]), iframe').length, o = 0; return i === 0 ? void n() : void t.find('img:not([src=""]), iframe').each(function(){
            e(this).one('load error', function(){
              ++o === i && n();
            }).each(function(){
              this.complete && e(this).trigger('load');
            });
          });
        }, d = function(){
          if (o.settings.infiniteLoop && o.settings.mode !== 'fade' && !o.settings.ticker){
            var t = o.settings.mode === 'vertical' ? o.settings.minSlides : o.settings.maxSlides, n = o.children.slice(0, t).clone(!0).addClass('bx-clone'), i = o.children.slice(-t).clone(!0).addClass('bx-clone'); o.settings.ariaHidden && (n.attr('aria-hidden', !0), i.attr('aria-hidden', !0)), r.append(n).prepend(i);
          }o.loader.remove(), v(), o.settings.mode === 'vertical' && (o.settings.adaptiveHeight = !0), o.viewport.height(p()), r.redrawSlider(), o.settings.onSliderLoad.call(r, o.active.index), o.initialized = !0, o.settings.responsive && e(window).bind('resize', W), o.settings.auto && o.settings.autoStart && (m() > 1 || o.settings.autoSlideForOnePage) && M(), o.settings.ticker && N(), o.settings.pager && j(o.settings.startSlide), o.settings.controls && A(), o.settings.touchEnabled && !o.settings.ticker && P(), o.settings.keyboardEnabled && !o.settings.ticker && e(document).keydown(O);
        }, p = function(){
          var t = 0, n = e(); if (o.settings.mode === 'vertical' || o.settings.adaptiveHeight) {
            if (o.carousel){
              var r = o.settings.moveSlides === 1 ? o.active.index : o.active.index * y(); for (n = o.children.eq(r), i = 1; i <= o.settings.maxSlides - 1; i++){
                n = r + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(r + i));
              }
            } else {
              n = o.children.eq(o.active.index);
            }
          } else {
            n = o.children;
          } return o.settings.mode === 'vertical' ? (n.each(function(n){
            t += e(this).outerHeight();
          }), o.settings.slideMargin > 0 && (t += o.settings.slideMargin * (o.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function(){
            return e(this).outerHeight(!1);
          }).get()), o.viewport.css('box-sizing') === 'border-box' ? t += parseFloat(o.viewport.css('padding-top')) + parseFloat(o.viewport.css('padding-bottom')) + parseFloat(o.viewport.css('border-top-width')) + parseFloat(o.viewport.css('border-bottom-width')) : o.viewport.css('box-sizing') === 'padding-box' && (t += parseFloat(o.viewport.css('padding-top')) + parseFloat(o.viewport.css('padding-bottom'))), t;
        }, f = function(){
          var e = '100%'; return o.settings.slideWidth > 0 && (e = o.settings.mode === 'horizontal' ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), e;
        }, h = function(){
          var e = o.settings.slideWidth, t = o.viewport.width(); if (o.settings.slideWidth === 0 || o.settings.slideWidth > t && !o.carousel || o.settings.mode === 'vertical'){
            e = t;
          } else if (o.settings.maxSlides > 1 && o.settings.mode === 'horizontal'){
            if (t > o.maxThreshold) {
              return e;
            } t < o.minThreshold ? e = (t - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides : o.settings.shrinkItems && (e = Math.floor((t + o.settings.slideMargin) / Math.ceil((t + o.settings.slideMargin) / (e + o.settings.slideMargin)) - o.settings.slideMargin));
          } return e;
        }, g = function(){
          var e = 1, t = null; return o.settings.mode === 'horizontal' && o.settings.slideWidth > 0 ? o.viewport.width() < o.minThreshold ? e = o.settings.minSlides : o.viewport.width() > o.maxThreshold ? e = o.settings.maxSlides : (t = o.children.first().width() + o.settings.slideMargin, e = Math.floor((o.viewport.width() + o.settings.slideMargin) / t)) : o.settings.mode === 'vertical' && (e = o.settings.minSlides), e;
        }, m = function(){
          var e = 0, t = 0, n = 0; if (o.settings.moveSlides > 0) {
            if (o.settings.infiniteLoop){
              e = Math.ceil(o.children.length / y());
            } else {
              for (;t < o.children.length;){
                ++e, t = n + g(), n += o.settings.moveSlides <= g() ? o.settings.moveSlides : g();
              }
            }
          } else {
            e = Math.ceil(o.children.length / g());
          } return e;
        }, y = function(){
          return o.settings.moveSlides > 0 && o.settings.moveSlides <= g() ? o.settings.moveSlides : g();
        }, v = function(){
          var e, t, n; o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop ? o.settings.mode === 'horizontal' ? (t = o.children.last(), e = t.position(), b(-(e.left - (o.viewport.width() - t.outerWidth())), 'reset', 0)) : o.settings.mode === 'vertical' && (n = o.children.length - o.settings.minSlides, e = o.children.eq(n).position(), b(-e.top, 'reset', 0)) : (e = o.children.eq(o.active.index * y()).position(), o.active.index === m() - 1 && (o.active.last = !0), void 0 !== e && (o.settings.mode === 'horizontal' ? b(-e.left, 'reset', 0) : o.settings.mode === 'vertical' && b(-e.top, 'reset', 0)));
        }, b = function(t, n, i, s){
          var a, l; o.usingCSS ? (l = o.settings.mode === 'vertical' ? 'translate3d(0, ' + t + 'px, 0)' : 'translate3d(' + t + 'px, 0, 0)', r.css('-' + o.cssPrefix + '-transition-duration', i / 1e3 + 's'), n === 'slide' ? (r.css(o.animProp, l), i !== 0 ? r.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(t){
            e(t.target).is(r) && (r.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd'), I());
          }) : I()) : n === 'reset' ? r.css(o.animProp, l) : n === 'ticker' && (r.css('-' + o.cssPrefix + '-transition-timing-function', 'linear'), r.css(o.animProp, l), i !== 0 ? r.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(t){
            e(t.target).is(r) && (r.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd'), b(s.resetValue, 'reset', 0), $());
          }) : (b(s.resetValue, 'reset', 0), $()))) : (a = {}, a[o.animProp] = t, n === 'slide' ? r.animate(a, i, o.settings.easing, function(){
            I();
          }) : n === 'reset' ? r.css(o.animProp, t) : n === 'ticker' && r.animate(a, i, 'linear', function(){
            b(s.resetValue, 'reset', 0), $();
          }));
        }, x = function(){
          for (var t = '', n = '', i = m(), r = 0; r < i; r++){
            n = '', o.settings.buildPager && e.isFunction(o.settings.buildPager) || o.settings.pagerCustom ? (n = o.settings.buildPager(r), o.pagerEl.addClass('bx-custom-pager')) : (n = r + 1, o.pagerEl.addClass('bx-default-pager')), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + r + '" class="bx-pager-link">' + n + '</a></div>';
          }o.pagerEl.html(t);
        }, C = function(){
          o.settings.pagerCustom ? o.pagerEl = e(o.settings.pagerCustom) : (o.pagerEl = e('<div class="bx-pager" />'), o.settings.pagerSelector ? e(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass('bx-has-pager').append(o.pagerEl), x()), o.pagerEl.on('click touchend', 'a', _);
        }, w = function(){
          o.controls.next = e('<a class="bx-next" href="">' + o.settings.nextText + '</a>'), o.controls.prev = e('<a class="bx-prev" href="">' + o.settings.prevText + '</a>'), o.controls.next.bind('click touchend', k), o.controls.prev.bind('click touchend', L), o.settings.nextSelector && e(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && e(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = e('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass('bx-has-controls-direction').append(o.controls.directionEl));
        }, S = function(){
          o.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + '</a></div>'), o.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + '</a></div>'), o.controls.autoEl = e('<div class="bx-controls-auto" />'), o.controls.autoEl.on('click', '.bx-start', E), o.controls.autoEl.on('click', '.bx-stop', F), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? e(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass('bx-has-controls-auto').append(o.controls.autoEl), D(o.settings.autoStart ? 'stop' : 'start');
        }, T = function(){
          o.children.each(function(t){
            var n = e(this).find('img:first').attr('title'); void 0 !== n && ('' + n).length && e(this).append('<div class="bx-caption"><span>' + n + '</span></div>');
          });
        }, k = function(e){
          e.preventDefault(), o.controls.el.hasClass('disabled') || (o.settings.auto && o.settings.stopAutoOnClick && r.stopAuto(), r.goToNextSlide());
        }, L = function(e){
          e.preventDefault(), o.controls.el.hasClass('disabled') || (o.settings.auto && o.settings.stopAutoOnClick && r.stopAuto(), r.goToPrevSlide());
        }, E = function(e){
          r.startAuto(), e.preventDefault();
        }, F = function(e){
          r.stopAuto(), e.preventDefault();
        }, _ = function(t){
          var n, i; t.preventDefault(), o.controls.el.hasClass('disabled') || (o.settings.auto && o.settings.stopAutoOnClick && r.stopAuto(), n = e(t.currentTarget), void 0 !== n.attr('data-slide-index') && (i = parseInt(n.attr('data-slide-index'))) !== o.active.index && r.goToSlide(i));
        }, j = function(t){
          var n = o.children.length; return o.settings.pagerType === 'short' ? (o.settings.maxSlides > 1 && (n = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(t + 1 + o.settings.pagerShortSeparator + n)) : (o.pagerEl.find('a').removeClass('active'), void o.pagerEl.each(function(n, i){
            e(i).find('a').eq(t).addClass('active');
          }));
        }, I = function(){
          if (o.settings.infiniteLoop){
            var e = ''; o.active.index === 0 ? e = o.children.eq(0).position() : o.active.index === m() - 1 && o.carousel ? e = o.children.eq((m() - 1) * y()).position() : o.active.index === o.children.length - 1 && (e = o.children.eq(o.children.length - 1).position()), e && (o.settings.mode === 'horizontal' ? b(-e.left, 'reset', 0) : o.settings.mode === 'vertical' && b(-e.top, 'reset', 0));
          }o.working = !1, o.settings.onSlideAfter.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index);
        }, D = function(e){
          o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[e]) : (o.controls.autoEl.find('a').removeClass('active'), o.controls.autoEl.find('a:not(.bx-' + e + ')').addClass('active'));
        }, A = function(){
          m() === 1 ? (o.controls.prev.addClass('disabled'), o.controls.next.addClass('disabled')) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (o.active.index === 0 ? (o.controls.prev.addClass('disabled'), o.controls.next.removeClass('disabled')) : o.active.index === m() - 1 ? (o.controls.next.addClass('disabled'), o.controls.prev.removeClass('disabled')) : (o.controls.prev.removeClass('disabled'), o.controls.next.removeClass('disabled')));
        }, M = function(){
          o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : (r.startAuto(), e(window).focus(function(){
            r.startAuto();
          }).blur(function(){
            r.stopAuto();
          })), o.settings.autoHover && r.hover(function(){
            o.interval && (r.stopAuto(!0), o.autoPaused = !0);
          }, function(){
            o.autoPaused && (r.startAuto(!0), o.autoPaused = null);
          });
        }, N = function(){
          var t, n, i, s, a, l, c, u, d = 0; o.settings.autoDirection === 'next' ? r.append(o.children.clone().addClass('bx-clone')) : (r.prepend(o.children.clone().addClass('bx-clone')), t = o.children.first().position(), d = o.settings.mode === 'horizontal' ? -t.left : -t.top), b(d, 'reset', 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && (o.usingCSS ? (s = o.settings.mode === 'horizontal' ? 4 : 5, o.viewport.hover(function(){
            n = r.css('-' + o.cssPrefix + '-transform'), i = parseFloat(n.split(',')[s]), b(i, 'reset', 0);
          }, function(){
            u = 0, o.children.each(function(t){
              u += o.settings.mode === 'horizontal' ? e(this).outerWidth(!0) : e(this).outerHeight(!0);
            }), a = o.settings.speed / u, l = o.settings.mode === 'horizontal' ? 'left' : 'top', c = a * (u - Math.abs(parseInt(i))), $(c);
          })) : o.viewport.hover(function(){
            r.stop();
          }, function(){
            u = 0, o.children.each(function(t){
              u += o.settings.mode === 'horizontal' ? e(this).outerWidth(!0) : e(this).outerHeight(!0);
            }), a = o.settings.speed / u, l = o.settings.mode === 'horizontal' ? 'left' : 'top', c = a * (u - Math.abs(parseInt(r.css(l)))), $(c);
          })), $();
        }, $ = function(e){
          var t, n, i, s = e || o.settings.speed, a = { left: 0, top: 0 }, l = { left: 0, top: 0 }; o.settings.autoDirection === 'next' ? a = r.find('.bx-clone').first().position() : l = o.children.first().position(), t = o.settings.mode === 'horizontal' ? -a.left : -a.top, n = o.settings.mode === 'horizontal' ? -l.left : -l.top, i = { resetValue: n }, b(t, 'ticker', s, i);
        }, H = function(t){
          var n = e(window), i = { top: n.scrollTop(), left: n.scrollLeft() }, o = t.offset(); return i.right = i.left + n.width(), i.bottom = i.top + n.height(), o.right = o.left + t.outerWidth(), o.bottom = o.top + t.outerHeight(), !(i.right < o.left || i.left > o.right || i.bottom < o.top || i.top > o.bottom);
        }, O = function(e){
          var t = document.activeElement.tagName.toLowerCase(); if (new RegExp(t, ['i']).exec('input|textarea') == null && H(r)){
            if (e.keyCode === 39) {
              return k(e), !1;
            } if (e.keyCode === 37) {
              return L(e), !1;
            }
          }
        }, P = function(){
          o.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 }}, o.viewport.bind('touchstart MSPointerDown pointerdown', z), o.viewport.on('click', '.bxslider a', function(e){
            o.viewport.hasClass('click-disabled') && (e.preventDefault(), o.viewport.removeClass('click-disabled'));
          });
        }, z = function(e){
          if (o.controls.el.addClass('disabled'), o.working){
            e.preventDefault(), o.controls.el.removeClass('disabled');
          } else {
            o.touch.originalPos = r.position(); var t = e.originalEvent, n = void 0 !== t.changedTouches ? t.changedTouches : [t]; o.touch.start.x = n[0].pageX, o.touch.start.y = n[0].pageY, o.viewport.get(0).setPointerCapture && (o.pointerId = t.pointerId, o.viewport.get(0).setPointerCapture(o.pointerId)), o.viewport.bind('touchmove MSPointerMove pointermove', q), o.viewport.bind('touchend MSPointerUp pointerup', R), o.viewport.bind('MSPointerCancel pointercancel', B);
          }
        }, B = function(e){
          b(o.touch.originalPos.left, 'reset', 0), o.controls.el.removeClass('disabled'), o.viewport.unbind('MSPointerCancel pointercancel', B), o.viewport.unbind('touchmove MSPointerMove pointermove', q), o.viewport.unbind('touchend MSPointerUp pointerup', R), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId);
        }, q = function(e){
          var t = e.originalEvent, n = void 0 !== t.changedTouches ? t.changedTouches : [t], i = Math.abs(n[0].pageX - o.touch.start.x), r = Math.abs(n[0].pageY - o.touch.start.y), s = 0, a = 0; 3 * i > r && o.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * r > i && o.settings.preventDefaultSwipeY && e.preventDefault(), o.settings.mode !== 'fade' && o.settings.oneToOneTouch && (o.settings.mode === 'horizontal' ? (a = n[0].pageX - o.touch.start.x, s = o.touch.originalPos.left + a) : (a = n[0].pageY - o.touch.start.y, s = o.touch.originalPos.top + a), b(s, 'reset', 0));
        }, R = function(e){
          o.viewport.unbind('touchmove MSPointerMove pointermove', q), o.controls.el.removeClass('disabled'); var t = e.originalEvent, n = void 0 !== t.changedTouches ? t.changedTouches : [t], i = 0, s = 0; o.touch.end.x = n[0].pageX, o.touch.end.y = n[0].pageY, o.settings.mode === 'fade' ? (s = Math.abs(o.touch.start.x - o.touch.end.x)) >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : (o.settings.mode === 'horizontal' ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (o.active.index === 0 && s > 0 || o.active.last && s < 0) ? b(i, 'reset', 200) : Math.abs(s) >= o.settings.swipeThreshold ? (s < 0 ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, 'reset', 200)), o.viewport.unbind('touchend MSPointerUp pointerup', R), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId);
        }, W = function(t){
          if (o.initialized) {
            if (o.working){
              window.setTimeout(W, 10);
            } else {
              var n = e(window).width(), i = e(window).height(); s === n && a === i || (s = n, a = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index));
            }
          }
        }, U = function(e){
          var t = g(); o.settings.ariaHidden && !o.settings.ticker && (o.children.attr('aria-hidden', 'true'), o.children.slice(e, e + t).attr('aria-hidden', 'false'));
        }, G = function(e){
          return e < 0 ? o.settings.infiniteLoop ? m() - 1 : o.active.index : e >= m() ? o.settings.infiniteLoop ? 0 : o.active.index : e;
        }; return r.goToSlide = function(t, n){
        var i, s, a, l, c = !0, u = 0, d = { left: 0, top: 0 }, f = null; if (o.oldIndex = o.active.index, o.active.index = G(t), !o.working && o.active.index !== o.oldIndex){
          if (o.working = !0, void 0 !== (c = o.settings.onSlideBefore.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index)) && !c) {
            return o.active.index = o.oldIndex, void (o.working = !1);
          } n === 'next' ? o.settings.onSlideNext.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1) : n === 'prev' && (o.settings.onSlidePrev.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1)), o.active.last = o.active.index >= m() - 1, (o.settings.pager || o.settings.pagerCustom) && j(o.active.index), o.settings.controls && A(), o.settings.mode === 'fade' ? (o.settings.adaptiveHeight && o.viewport.height() !== p() && o.viewport.animate({ height: p() }, o.settings.adaptiveHeightSpeed), o.children.filter(':visible').fadeOut(o.settings.speed).css({ zIndex: 0 }), o.children.eq(o.active.index).css('zIndex', o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function(){
            e(this).css('zIndex', o.settings.slideZIndex), I();
          })) : (o.settings.adaptiveHeight && o.viewport.height() !== p() && o.viewport.animate({ height: p() }, o.settings.adaptiveHeightSpeed), !o.settings.infiniteLoop && o.carousel && o.active.last ? o.settings.mode === 'horizontal' ? (f = o.children.eq(o.children.length - 1), d = f.position(), u = o.viewport.width() - f.outerWidth()) : (i = o.children.length - o.settings.minSlides, d = o.children.eq(i).position()) : o.carousel && o.active.last && n === 'prev' ? (s = o.settings.moveSlides === 1 ? o.settings.maxSlides - y() : (m() - 1) * y() - (o.children.length - o.settings.maxSlides), f = r.children('.bx-clone').eq(s), d = f.position()) : n === 'next' && o.active.index === 0 ? (d = r.find('> .bx-clone').eq(o.settings.maxSlides).position(), o.active.last = !1) : t >= 0 && (l = t * parseInt(y()), d = o.children.eq(l).position()), void 0 !== d ? (a = o.settings.mode === 'horizontal' ? -(d.left - u) : -d.top, b(a, 'slide', o.settings.speed)) : o.working = !1), o.settings.ariaHidden && U(o.active.index * y());
        }
      }, r.goToNextSlide = function(){
        if (o.settings.infiniteLoop || !o.active.last){
          var e = parseInt(o.active.index) + 1; r.goToSlide(e, 'next');
        }
      }, r.goToPrevSlide = function(){
        if (o.settings.infiniteLoop || o.active.index !== 0){
          var e = parseInt(o.active.index) - 1; r.goToSlide(e, 'prev');
        }
      }, r.startAuto = function(e){
        o.interval || (o.interval = setInterval(function(){
          o.settings.autoDirection === 'next' ? r.goToNextSlide() : r.goToPrevSlide();
        }, o.settings.pause), o.settings.autoControls && !0 !== e && D('stop'));
      }, r.stopAuto = function(e){
        o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && !0 !== e && D('start'));
      }, r.getCurrentSlide = function(){
        return o.active.index;
      }, r.getCurrentSlideElement = function(){
        return o.children.eq(o.active.index);
      }, r.getSlideElement = function(e){
        return o.children.eq(e);
      }, r.getSlideCount = function(){
        return o.children.length;
      }, r.isWorking = function(){
        return o.working;
      }, r.redrawSlider = function(){
        o.children.add(r.find('.bx-clone')).outerWidth(h()), o.viewport.css('height', p()), o.settings.ticker || v(), o.active.last && (o.active.index = m() - 1), o.active.index >= m() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (x(), j(o.active.index)), o.settings.ariaHidden && U(o.active.index * y());
      }, r.destroySlider = function(){
        o.initialized && (o.initialized = !1, e('.bx-clone', this).remove(), o.children.each(function(){
          void 0 !== e(this).data('origStyle') ? e(this).attr('style', e(this).data('origStyle')) : e(this).removeAttr('style');
        }), void 0 !== e(this).data('origStyle') ? this.attr('style', e(this).data('origStyle')) : e(this).removeAttr('style'), e(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && !o.settings.pagerCustom && o.pagerEl.remove(), e('.bx-caption', this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && e(window).unbind('resize', W), o.settings.keyboardEnabled && e(document).unbind('keydown', O), e(this).removeData('bxSlider'));
      }, r.reloadSlider = function(t){
        void 0 !== t && (n = t), r.destroySlider(), l(), e(r).data('bxSlider', this);
      }, l(), e(r).data('bxSlider', this), this;
    }
  };
}(jQuery)), (function(e){
  typeof define === 'function' && define.amd ? define(['jquery'], e) : e(typeof exports === 'object' ? require('jquery') : jQuery);
}(function(e){
  function t(e){
    return a.raw ? e : encodeURIComponent(e);
  } function n(e){
    return a.raw ? e : decodeURIComponent(e);
  } function i(e){
    return t(a.json ? JSON.stringify(e) : String(e));
  } function o(e){
    e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')); try {
      return e = decodeURIComponent(e.replace(s, ' ')), a.json ? JSON.parse(e) : e;
    } catch (e){}
  } function r(t, n){
    var i = a.raw ? t : o(t); return e.isFunction(n) ? n(i) : i;
  } var s = /\+/g, a = e.cookie = function(o, s, l){
    if (void 0 !== s && !e.isFunction(s)){
      if (l = e.extend({}, a.defaults, l), typeof l.expires === 'number'){
        var c = l.expires, u = l.expires = new Date(); u.setTime(+u + 864e5 * c);
      } return document.cookie = [t(o), '=', i(s), l.expires ? '; expires=' + l.expires.toUTCString() : '', l.path ? '; path=' + l.path : '', l.domain ? '; domain=' + l.domain : '', l.secure ? '; secure' : ''].join('');
    } for (var d = o ? void 0 : {}, p = document.cookie ? document.cookie.split('; ') : [], f = 0, h = p.length; f < h; f++){
      var g = p[f].split('='), m = n(g.shift()), y = g.join('='); if (o && o === m){
        d = r(y, s); break;
      }o || void 0 === (y = r(y)) || (d[m] = y);
    } return d;
  }; a.defaults = {}, e.removeCookie = function(t, n){
    return void 0 !== e.cookie(t) && (e.cookie(t, '', e.extend({}, n, { expires: -1 })), !e.cookie(t));
  };
})), typeof JSON !== 'object' && (JSON = {}), (function(){
  'use strict'; function f(e){
    return e < 10 ? '0' + e : e;
  } function quote(e){
    return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e){
      var t = meta[e]; return typeof t === 'string' ? t : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + e + '"';
  } function str(e, t){
    var n, i, o, r, s, a = gap, l = t[e]; switch (l && typeof l === 'object' && typeof l.toJSON === 'function' && (l = l.toJSON(e)), typeof rep === 'function' && (l = rep.call(t, e, l)), typeof l){
      case 'string':return quote(l); case 'number':return isFinite(l) ? String(l) : 'null'; case 'boolean':case 'null':return String(l); case 'object':if (!l) {
        return 'null';
      } if (gap += indent, s = [], Object.prototype.toString.apply(l) === '[object Array]'){
          for (r = l.length, n = 0; n < r; n += 1){
            s[n] = str(n, l) || 'null';
          } return o = s.length === 0 ? '[]' : gap ? '[\n' + gap + s.join(',\n' + gap) + '\n' + a + ']' : '[' + s.join(',') + ']', gap = a, o;
        } if (rep && typeof rep === 'object') {
          for (r = rep.length, n = 0; n < r; n += 1) {
            typeof rep[n] === 'string' && (i = rep[n], (o = str(i, l)) && s.push(quote(i) + (gap ? ': ' : ':') + o));
          }
        } else {
          for (i in l){
            Object.prototype.hasOwnProperty.call(l, i) && (o = str(i, l)) && s.push(quote(i) + (gap ? ': ' : ':') + o);
          }
        } return o = s.length === 0 ? '{}' : gap ? '{\n' + gap + s.join(',\n' + gap) + '\n' + a + '}' : '{' + s.join(',') + '}', gap = a, o;
    }
  } typeof Date.prototype.toJSON !== 'function' && (Date.prototype.toJSON = function(e){
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e){
    return this.valueOf();
  }); var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = { '\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\' }, rep; typeof JSON.stringify !== 'function' && (JSON.stringify = function(e, t, n){
    var i; if (gap = '', indent = '', typeof n === 'number') {
      for (i = 0; i < n; i += 1){
        indent += ' ';
      }
    } else {
      typeof n === 'string' && (indent = n);
    } if (rep = t, !t || typeof t === 'function' || typeof t === 'object' && typeof t.length === 'number') {
      return str('', { '': e });
    } throw new Error('JSON.stringify');
  }), typeof JSON.parse !== 'function' && (JSON.parse = function(text, reviver){
    function walk(e, t){
      var n, i, o = e[t]; if (o && typeof o === 'object') {
        for (n in o){
          Object.prototype.hasOwnProperty.call(o, n) && (i = walk(o, n), void 0 !== i ? o[n] = i : delete o[n]);
        }
      } return reviver.call(e, t, o);
    } var j; if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e){
      return '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      return j = eval('(' + text + ')'), typeof reviver === 'function' ? walk({ '': j }, '') : j;
    } throw new SyntaxError('JSON.parse');
  });
}()), (function(e, t){
  'use strict'; var n = e.History = e.History || {}, i = e.jQuery; if (void 0 !== n.Adapter) {
    throw new Error('History.js Adapter has already been loaded...');
  } n.Adapter = { bind: function(e, t, n){
    i(e).bind(t, n);
  }, trigger: function(e, t, n){
    i(e).trigger(t, n);
  }, extractEventData: function(e, t, n){
    return t && t.originalEvent && t.originalEvent[e] || n && n[e] || void 0;
  }, onDomLoad: function(e){
    i(e);
  } }, void 0 !== n.init && n.init();
}(window)), (function(e, t){
  'use strict'; var n = e.document, i = e.setTimeout || i, o = e.clearTimeout || o, r = e.setInterval || r, s = e.History = e.History || {}; if (void 0 !== s.initHtml4) {
    throw new Error('History.js HTML4 Support has already been loaded...');
  } s.initHtml4 = function(){
    if (void 0 !== s.initHtml4.initialized) {
      return !1;
    } s.initHtml4.initialized = !0, s.enabled = !0, s.savedHashes = [], s.isLastHash = function(e){
      return e === s.getHashByIndex();
    }, s.isHashEqual = function(e, t){
      return e = encodeURIComponent(e).replace(/%25/g, '%'), t = encodeURIComponent(t).replace(/%25/g, '%'), e === t;
    }, s.saveHash = function(e){
      return !s.isLastHash(e) && (s.savedHashes.push(e), !0);
    }, s.getHashByIndex = function(e){
      return void 0 === e ? s.savedHashes[s.savedHashes.length - 1] : e < 0 ? s.savedHashes[s.savedHashes.length + e] : s.savedHashes[e];
    }, s.discardedHashes = {}, s.discardedStates = {}, s.discardState = function(e, t, n){
      var i, o = s.getHashByState(e); return i = { discardedState: e, backState: n, forwardState: t }, s.discardedStates[o] = i, !0;
    }, s.discardHash = function(e, t, n){
      var i = { discardedHash: e, backState: n, forwardState: t }; return s.discardedHashes[e] = i, !0;
    }, s.discardedState = function(e){
      var t = s.getHashByState(e); return s.discardedStates[t] || !1;
    }, s.discardedHash = function(e){
      return s.discardedHashes[e] || !1;
    }, s.recycleState = function(e){
      var t = s.getHashByState(e); return s.discardedState(e) && delete s.discardedStates[t], !0;
    }, s.emulated.hashChange && (s.hashChangeInit = function(){
      s.checkerFunction = null; var t, i, o, a, l = '', c = Boolean(s.getHash()); return s.isInternetExplorer() ? (t = 'historyjs-iframe', i = n.createElement('iframe'), i.setAttribute('id', t), i.setAttribute('src', '#'), i.style.display = 'none', n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), o = '', a = !1, s.checkerFunction = function(){
        if (a) {
          return !1;
        } a = !0; var t = s.getHash(), n = s.getHash(i.contentWindow.document); return t !== l ? (l = t, n !== t && (o = n = t, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = s.escapeHash(t)), s.Adapter.trigger(e, 'hashchange')) : n !== o && (o = n, c && n === '' ? s.back() : s.setHash(n, !1)), a = !1, !0;
      }) : s.checkerFunction = function(){
        var t = s.getHash() || ''; return t !== l && (l = t, s.Adapter.trigger(e, 'hashchange')), !0;
      }, s.intervalList.push(r(s.checkerFunction, s.options.hashChangeInterval)), !0;
    }, s.Adapter.onDomLoad(s.hashChangeInit)), s.emulated.pushState && (s.onHashChange = function(t){
      var n, i = t && t.newURL || s.getLocationHref(), o = s.getHashByUrl(i), r = null; return s.isLastHash(o) ? (s.busy(!1), !1) : (s.doubleCheckComplete(), s.saveHash(o), o && s.isTraditionalAnchor(o) ? (s.Adapter.trigger(e, 'anchorchange'), s.busy(!1), !1) : (r = s.extractState(s.getFullUrl(o || s.getLocationHref()), !0), s.isLastSavedState(r) ? (s.busy(!1), !1) : (s.getHashByState(r), n = s.discardedState(r), n ? (s.getHashByIndex(-2) === s.getHashByState(n.forwardState) ? s.back(!1) : s.forward(!1), !1) : (s.pushState(r.data, r.title, encodeURI(r.url), !1), !0))));
    }, s.Adapter.bind(e, 'hashchange', s.onHashChange), s.pushState = function(t, n, i, o){
      if (i = encodeURI(i).replace(/%25/g, '%'), s.getHashByUrl(i)) {
        throw new Error('History.js does not support states with fragment-identifiers (hashes/anchors).');
      } if (!1 !== o && s.busy()) {
        return s.pushQueue({ scope: s, callback: s.pushState, args: arguments, queue: o }), !1;
      } s.busy(!0); var r = s.createStateObject(t, n, i), a = s.getHashByState(r), l = s.getState(!1), c = s.getHashByState(l), u = s.getHash(), d = s.expectedStateId == r.id; return s.storeState(r), s.expectedStateId = r.id, s.recycleState(r), s.setTitle(r), a === c ? (s.busy(!1), !1) : (s.saveState(r), d || s.Adapter.trigger(e, 'statechange'), !s.isHashEqual(a, u) && !s.isHashEqual(a, s.getShortUrl(s.getLocationHref())) && s.setHash(a, !1), s.busy(!1), !0);
    }, s.replaceState = function(t, n, i, o){
      if (i = encodeURI(i).replace(/%25/g, '%'), s.getHashByUrl(i)) {
        throw new Error('History.js does not support states with fragment-identifiers (hashes/anchors).');
      } if (!1 !== o && s.busy()) {
        return s.pushQueue({ scope: s, callback: s.replaceState, args: arguments, queue: o }), !1;
      } s.busy(!0); var r = s.createStateObject(t, n, i), a = s.getHashByState(r), l = s.getState(!1), c = s.getHashByState(l), u = s.getStateByIndex(-2); return s.discardState(l, r, u), a === c ? (s.storeState(r), s.expectedStateId = r.id, s.recycleState(r), s.setTitle(r), s.saveState(r), s.Adapter.trigger(e, 'statechange'), s.busy(!1)) : s.pushState(r.data, r.title, r.url, !1), !0;
    }), s.emulated.pushState && s.getHash() && !s.emulated.hashChange && s.Adapter.onDomLoad(function(){
      s.Adapter.trigger(e, 'hashchange');
    });
  }, void 0 !== s.init && s.init();
}(window)), (function(e, t){
  'use strict'; var n = e.console || t, i = e.document, o = e.navigator, r = !1, s = e.setTimeout, a = e.clearTimeout, l = e.setInterval, c = e.clearInterval, u = e.JSON, d = e.alert, p = e.History = e.History || {}, f = e.history; try {
    r = e.sessionStorage, r.setItem('TEST', '1'), r.removeItem('TEST');
  } catch (e){
    r = !1;
  } if (u.stringify = u.stringify || u.encode, u.parse = u.parse || u.decode, void 0 !== p.init) {
    throw new Error('History.js Core has already been loaded...');
  } p.init = function(e){
    return void 0 !== p.Adapter && (void 0 !== p.initCore && p.initCore(), void 0 !== p.initHtml4 && p.initHtml4(), !0);
  }, p.initCore = function(h){
    if (void 0 !== p.initCore.initialized) {
      return !1;
    } if (p.initCore.initialized = !0, p.options = p.options || {}, p.options.hashChangeInterval = p.options.hashChangeInterval || 100, p.options.safariPollInterval = p.options.safariPollInterval || 500, p.options.doubleCheckInterval = p.options.doubleCheckInterval || 500, p.options.disableSuid = p.options.disableSuid || !1, p.options.storeInterval = p.options.storeInterval || 1e3, p.options.busyDelay = p.options.busyDelay || 250, p.options.debug = p.options.debug || !1, p.options.initialTitle = p.options.initialTitle || i.title, p.options.html4Mode = p.options.html4Mode || !1, p.options.delayInit = p.options.delayInit || !1, p.intervalList = [], p.clearAllIntervals = function(){
      var e, t = p.intervalList; if (void 0 !== t && t !== null){
        for (e = 0; e < t.length; e++){
          c(t[e]);
        }p.intervalList = null;
      }
    }, p.debug = function(){
      (p.options.debug || !1) && p.log.apply(p, arguments);
    }, p.log = function(){
      var e, t, o, r, s, a = void 0 !== n && void 0 !== n.log && void 0 !== n.log.apply, l = i.getElementById('log'); for (a ? (r = Array.prototype.slice.call(arguments), e = r.shift(), void 0 !== n.debug ? n.debug.apply(n, [e, r]) : n.log.apply(n, [e, r])) : e = '\n' + arguments[0] + '\n', t = 1, o = arguments.length; t < o; ++t){
        if (typeof (s = arguments[t]) === 'object' && void 0 !== u) {
          try {
            s = u.stringify(s);
          } catch (e){}
        }e += '\n' + s + '\n';
      } return l ? (l.value += e + '\n-----\n', l.scrollTop = l.scrollHeight - l.clientHeight) : a || d(e), !0;
    }, p.getInternetExplorerMajorVersion = function(){
      return p.getInternetExplorerMajorVersion.cached = void 0 !== p.getInternetExplorerMajorVersion.cached ? p.getInternetExplorerMajorVersion.cached : (function(){
        for (var e = 3, t = i.createElement('div'), n = t.getElementsByTagName('i'); (t.innerHTML = '\x3c!--[if gt IE ' + ++e + ']><i></i><![endif]--\x3e') && n[0];){} return e > 4 && e;
      }());
    }, p.isInternetExplorer = function(){
      return p.isInternetExplorer.cached = void 0 !== p.isInternetExplorer.cached ? p.isInternetExplorer.cached : Boolean(p.getInternetExplorerMajorVersion());
    }, p.options.html4Mode ? p.emulated = { pushState: !0, hashChange: !0 } : p.emulated = { pushState: !(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(o.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(o.userAgent)), hashChange: Boolean(!('onhashchange' in e || 'onhashchange' in i) || p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8) }, p.enabled = !p.emulated.pushState, p.bugs = { setHash: Boolean(!p.emulated.pushState && o.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)), safariPoll: Boolean(!p.emulated.pushState && o.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)), ieDoubleCheck: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8), hashEscape: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 7) }, p.isEmptyObject = function(e){
      for (var t in e) {
        if (e.hasOwnProperty(t)) {
          return !1;
        }
      } return !0;
    }, p.cloneObject = function(e){
      var t, n; return e ? (t = u.stringify(e), n = u.parse(t)) : n = {}, n;
    }, p.getRootUrl = function(){
      var e = i.location.protocol + '//' + (i.location.hostname || i.location.host); return i.location.port && (e += ':' + i.location.port), e += '/';
    }, p.getBaseHref = function(){
      var e = i.getElementsByTagName('base'), t = null, n = ''; return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, '')), n = n.replace(/\/+$/, ''), n && (n += 'index.html'), n;
    }, p.getBaseUrl = function(){
      return p.getBaseHref() || p.getBasePageUrl() || p.getRootUrl();
    }, p.getPageUrl = function(){
      return ((p.getState(!1, !1) || {}).url || p.getLocationHref()).replace(/\/+$/, '').replace(/[^\/]+$/, function(e, t, n){
        return /\./.test(e) ? e : e + '/';
      });
    }, p.getBasePageUrl = function(){
      return p.getLocationHref().replace(/[#\?].*/, '').replace(/[^\/]+$/, function(e, t, n){
        return /[^\/]$/.test(e) ? '' : e;
      }).replace(/\/+$/, '') + '/';
    }, p.getFullUrl = function(e, t){
      var n = e, i = e.substring(0, 1); return t = void 0 === t || t, /[a-z]+\:\/\//.test(e) || (n = i === '/' ? p.getRootUrl() + e.replace(/^\/+/, '') : i === '#' ? p.getPageUrl().replace(/#.*/, '') + e : i === '?' ? p.getPageUrl().replace(/[\?#].*/, '') + e : t ? p.getBaseUrl() + e.replace(/^(\.\/)+/, '') : p.getBasePageUrl() + e.replace(/^(\.\/)+/, '')), n.replace(/\#$/, '');
    }, p.getShortUrl = function(e){
      var t = e, n = p.getBaseUrl(), i = p.getRootUrl(); return p.emulated.pushState && (t = t.replace(n, '')), t = t.replace(i, 'index.html'), p.isTraditionalAnchor(t) && (t = './' + t), t = t.replace(/^(\.\/)+/g, 'index.html').replace(/\#$/, '');
    }, p.getLocationHref = function(e){
      return e = e || i, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, '')) === e.location.hash ? e.location.href : e.URL.indexOf('#') == -1 && e.location.href.indexOf('#') != -1 ? e.location.href : e.URL || e.location.href;
    }, p.store = {}, p.idToState = p.idToState || {}, p.stateToId = p.stateToId || {}, p.urlToId = p.urlToId || {}, p.storedStates = p.storedStates || [], p.savedStates = p.savedStates || [], p.normalizeStore = function(){
      p.store.idToState = p.store.idToState || {}, p.store.urlToId = p.store.urlToId || {}, p.store.stateToId = p.store.stateToId || {};
    }, p.getState = function(e, t){
      void 0 === e && (e = !0), void 0 === t && (t = !0); var n = p.getLastSavedState(); return !n && t && (n = p.createStateObject()), e && (n = p.cloneObject(n), n.url = n.cleanUrl || n.url), n;
    }, p.getIdByState = function(e){
      var t, n = p.extractId(e.url); if (!n) {
        if (t = p.getStateString(e), void 0 !== p.stateToId[t]){
          n = p.stateToId[t];
        } else if (void 0 !== p.store.stateToId[t]){
          n = p.store.stateToId[t];
        } else {
          for (;n = (new Date()).getTime() + String(Math.random()).replace(/\D/g, ''), void 0 !== p.idToState[n] || void 0 !== p.store.idToState[n];){}p.stateToId[t] = n, p.idToState[n] = e;
        }
      } return n;
    }, p.normalizeState = function(e){
      var t, n; return e && typeof e === 'object' || (e = {}), void 0 !== e.normalized ? e : (e.data && typeof e.data === 'object' || (e.data = {}), t = {}, t.normalized = !0, t.title = e.title || '', t.url = p.getFullUrl(e.url ? e.url : p.getLocationHref()), t.hash = p.getShortUrl(t.url), t.data = p.cloneObject(e.data), t.id = p.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ''), t.url = t.cleanUrl, n = !p.isEmptyObject(t.data), (t.title || n) && !0 !== p.options.disableSuid && (t.hash = p.getShortUrl(t.url).replace(/\??\&_suid.*/, ''), /\?/.test(t.hash) || (t.hash += '?'), t.hash += '&_suid=' + t.id), t.hashedUrl = p.getFullUrl(t.hash), (p.emulated.pushState || p.bugs.safariPoll) && p.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t);
    }, p.createStateObject = function(e, t, n){
      var i = { data: e, title: t, url: n }; return i = p.normalizeState(i);
    }, p.getStateById = function(e){
      return e = String(e), p.idToState[e] || p.store.idToState[e] || t;
    }, p.getStateString = function(e){
      var t, n; return t = p.normalizeState(e), n = { data: t.data, title: e.title, url: e.url }, u.stringify(n);
    }, p.getStateId = function(e){
      var t; return t = p.normalizeState(e), t.id;
    }, p.getHashByState = function(e){
      var t; return t = p.normalizeState(e), t.hash;
    }, p.extractId = function(e){
      var t, n; return n = e.indexOf('#') != -1 ? e.split('#')[0] : e, t = /(.*)\&_suid=([0-9]+)$/.exec(n), t && t[1], (t ? String(t[2] || '') : '') || !1;
    }, p.isTraditionalAnchor = function(e){
      return !/[\/\?\.]/.test(e);
    }, p.extractState = function(e, t){
      var n, i, o = null; return t = t || !1, n = p.extractId(e), n && (o = p.getStateById(n)), o || (i = p.getFullUrl(e), n = p.getIdByUrl(i) || !1, n && (o = p.getStateById(n)), !o && t && !p.isTraditionalAnchor(e) && (o = p.createStateObject(null, null, i))), o;
    }, p.getIdByUrl = function(e){
      return p.urlToId[e] || p.store.urlToId[e] || t;
    }, p.getLastSavedState = function(){
      return p.savedStates[p.savedStates.length - 1] || t;
    }, p.getLastStoredState = function(){
      return p.storedStates[p.storedStates.length - 1] || t;
    }, p.hasUrlDuplicate = function(e){
      var t; return (t = p.extractState(e.url)) && t.id !== e.id;
    }, p.storeState = function(e){
      return p.urlToId[e.url] = e.id, p.storedStates.push(p.cloneObject(e)), e;
    }, p.isLastSavedState = function(e){
      var t, n, i, o = !1; return p.savedStates.length && (t = e.id, n = p.getLastSavedState(), i = n.id, o = t === i), o;
    }, p.saveState = function(e){
      return !p.isLastSavedState(e) && (p.savedStates.push(p.cloneObject(e)), !0);
    }, p.getStateByIndex = function(e){
      return void 0 === e ? p.savedStates[p.savedStates.length - 1] : e < 0 ? p.savedStates[p.savedStates.length + e] : p.savedStates[e];
    }, p.getCurrentIndex = function(){
      return p.savedStates.length < 1 ? 0 : p.savedStates.length - 1;
    }, p.getHash = function(e){
      var t = p.getLocationHref(e); return p.getHashByUrl(t);
    }, p.unescapeHash = function(e){
      var t = p.normalizeHash(e); return t = decodeURIComponent(t);
    }, p.normalizeHash = function(e){
      return e.replace(/[^#]*#/, '').replace(/#.*/, '');
    }, p.setHash = function(e, t){
      var n, o; return !1 !== t && p.busy() ? (p.pushQueue({ scope: p, callback: p.setHash, args: arguments, queue: t }), !1) : (p.busy(!0), n = p.extractState(e, !0), n && !p.emulated.pushState ? p.pushState(n.data, n.title, n.url, !1) : p.getHash() !== e && (p.bugs.setHash ? (o = p.getPageUrl(), p.pushState(null, null, o + '#' + e, !1)) : i.location.hash = e), p);
    }, p.escapeHash = function(t){
      var n = p.normalizeHash(t); return n = e.encodeURIComponent(n), p.bugs.hashEscape || (n = n.replace(/\%21/g, '!').replace(/\%26/g, '&').replace(/\%3D/g, '=').replace(/\%3F/g, '?')), n;
    }, p.getHashByUrl = function(e){
      var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, '$2'); return t = p.unescapeHash(t);
    }, p.setTitle = function(e){
      var t, n = e.title; n || (t = p.getStateByIndex(0)) && t.url === e.url && (n = t.title || p.options.initialTitle); try {
        i.getElementsByTagName('title')[0].innerHTML = n.replace('<', '&lt;').replace('>', '&gt;').replace(' & ', ' &amp; ');
      } catch (e){} return i.title = n, p;
    }, p.queues = [], p.busy = function(e){
      if (void 0 !== e ? p.busy.flag = e : void 0 === p.busy.flag && (p.busy.flag = !1), !p.busy.flag){
        a(p.busy.timeout); var t = function(){
          var e, n, i; if (!p.busy.flag) {
            for (e = p.queues.length - 1; e >= 0; --e){
              n = p.queues[e], n.length !== 0 && (i = n.shift(), p.fireQueueItem(i), p.busy.timeout = s(t, p.options.busyDelay));
            }
          }
        }; p.busy.timeout = s(t, p.options.busyDelay);
      } return p.busy.flag;
    }, p.busy.flag = !1, p.fireQueueItem = function(e){
      return e.callback.apply(e.scope || p, e.args || []);
    }, p.pushQueue = function(e){
      return p.queues[e.queue || 0] = p.queues[e.queue || 0] || [], p.queues[e.queue || 0].push(e), p;
    }, p.queue = function(e, t){
      return typeof e === 'function' && (e = { callback: e }), void 0 !== t && (e.queue = t), p.busy() ? p.pushQueue(e) : p.fireQueueItem(e), p;
    }, p.clearQueue = function(){
      return p.busy.flag = !1, p.queues = [], p;
    }, p.stateChanged = !1, p.doubleChecker = !1, p.doubleCheckComplete = function(){
      return p.stateChanged = !0, p.doubleCheckClear(), p;
    }, p.doubleCheckClear = function(){
      return p.doubleChecker && (a(p.doubleChecker), p.doubleChecker = !1), p;
    }, p.doubleCheck = function(e){
      return p.stateChanged = !1, p.doubleCheckClear(), p.bugs.ieDoubleCheck && (p.doubleChecker = s(function(){
        return p.doubleCheckClear(), p.stateChanged || e(), !0;
      }, p.options.doubleCheckInterval)), p;
    }, p.safariStatePoll = function(){
      var t, n = p.extractState(p.getLocationHref()); if (!p.isLastSavedState(n)) {
        return t = n, t || (t = p.createStateObject()), p.Adapter.trigger(e, 'popstate'), p;
      }
    }, p.back = function(e){
      return !1 !== e && p.busy() ? (p.pushQueue({ scope: p, callback: p.back, args: arguments, queue: e }), !1) : (p.busy(!0), p.doubleCheck(function(){
        p.back(!1);
      }), f.go(-1), !0);
    }, p.forward = function(e){
      return !1 !== e && p.busy() ? (p.pushQueue({ scope: p, callback: p.forward, args: arguments, queue: e }), !1) : (p.busy(!0), p.doubleCheck(function(){
        p.forward(!1);
      }), f.go(1), !0);
    }, p.go = function(e, t){
      var n; if (e > 0) {
        for (n = 1; n <= e; ++n){
          p.forward(t);
        }
      } else {
        if (!(e < 0)) {
          throw new Error('History.go: History.go requires a positive or negative integer passed.');
        } for (n = -1; n >= e; --n){
          p.back(t);
        }
      } return p;
    }, p.emulated.pushState){
      var g = function(){}; p.pushState = p.pushState || g, p.replaceState = p.replaceState || g;
    } else {
      p.onPopState = function(t, n){
        var i, o, r = !1, s = !1; return p.doubleCheckComplete(), i = p.getHash(), i ? (o = p.extractState(i || p.getLocationHref(), !0), o ? p.replaceState(o.data, o.title, o.url, !1) : (p.Adapter.trigger(e, 'anchorchange'), p.busy(!1)), p.expectedStateId = !1, !1) : (r = p.Adapter.extractEventData('state', t, n) || !1, s = r ? p.getStateById(r) : p.expectedStateId ? p.getStateById(p.expectedStateId) : p.extractState(p.getLocationHref()), s || (s = p.createStateObject(null, null, p.getLocationHref())), p.expectedStateId = !1, p.isLastSavedState(s) ? (p.busy(!1), !1) : (p.storeState(s), p.saveState(s), p.setTitle(s), p.Adapter.trigger(e, 'statechange'), p.busy(!1), !0));
      }, p.Adapter.bind(e, 'popstate', p.onPopState), p.pushState = function(t, n, i, o){
        if (p.getHashByUrl(i) && p.emulated.pushState) {
          throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
        } if (!1 !== o && p.busy()) {
          return p.pushQueue({ scope: p, callback: p.pushState, args: arguments, queue: o }), !1;
        } p.busy(!0); var r = p.createStateObject(t, n, i); return p.isLastSavedState(r) ? p.busy(!1) : (p.storeState(r), p.expectedStateId = r.id, f.pushState(r.id, r.title, r.url), p.Adapter.trigger(e, 'popstate')), !0;
      }, p.replaceState = function(t, n, i, o){
        if (p.getHashByUrl(i) && p.emulated.pushState) {
          throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
        } if (!1 !== o && p.busy()) {
          return p.pushQueue({ scope: p, callback: p.replaceState, args: arguments, queue: o }), !1;
        } p.busy(!0); var r = p.createStateObject(t, n, i); return p.isLastSavedState(r) ? p.busy(!1) : (p.storeState(r), p.expectedStateId = r.id, f.replaceState(r.id, r.title, r.url), p.Adapter.trigger(e, 'popstate')), !0;
      };
    } if (r){
      try {
        p.store = u.parse(r.getItem('History.store')) || {};
      } catch (e){
        p.store = {};
      }p.normalizeStore();
    } else {
      p.store = {}, p.normalizeStore();
    }p.Adapter.bind(e, 'unload', p.clearAllIntervals), p.saveState(p.storeState(p.extractState(p.getLocationHref(), !0))), r && (p.onUnload = function(){
      var e, t, n; try {
        e = u.parse(r.getItem('History.store')) || {};
      } catch (t){
        e = {};
      }e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {}; for (t in p.idToState){
        p.idToState.hasOwnProperty(t) && (e.idToState[t] = p.idToState[t]);
      } for (t in p.urlToId){
        p.urlToId.hasOwnProperty(t) && (e.urlToId[t] = p.urlToId[t]);
      } for (t in p.stateToId){
        p.stateToId.hasOwnProperty(t) && (e.stateToId[t] = p.stateToId[t]);
      }p.store = e, p.normalizeStore(), n = u.stringify(e); try {
        r.setItem('History.store', n);
      } catch (e){
        if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) {
          throw e;
        } r.length && (r.removeItem('History.store'), r.setItem('History.store', n));
      }
    }, p.intervalList.push(l(p.onUnload, p.options.storeInterval)), p.Adapter.bind(e, 'beforeunload', p.onUnload), p.Adapter.bind(e, 'unload', p.onUnload)), p.emulated.pushState || (p.bugs.safariPoll && p.intervalList.push(l(p.safariStatePoll, p.options.safariPollInterval)), o.vendor !== 'Apple Computer, Inc.' && (o.appCodeName || '') !== 'Mozilla' || (p.Adapter.bind(e, 'hashchange', function(){
      p.Adapter.trigger(e, 'popstate');
    }), p.getHash() && p.Adapter.onDomLoad(function(){
      p.Adapter.trigger(e, 'hashchange');
    })));
  }, (!p.options || !p.options.delayInit) && p.init();
}(window)), window.Modernizr = (function(e, t, n){
  function i(e){
    m.cssText = e;
  } function o(e, t){
    return i(b.join(e + ';') + (t || ''));
  } function r(e, t){
    return typeof e === t;
  } function s(e, t){
    return !!~('' + e).indexOf(t);
  } function a(e, t){
    for (var i in e){
      var o = e[i]; if (!s(o, '-') && m[o] !== n) {
        return t != 'pfx' || o;
      }
    } return !1;
  } function l(e, t, i){
    for (var o in e){
      var s = t[e[o]]; if (s !== n) {
        return !1 === i ? e[o] : r(s, 'function') ? s.bind(i || t) : s;
      }
    } return !1;
  } function c(e, t, n){
    var i = e.charAt(0).toUpperCase() + e.slice(1), o = (e + ' ' + C.join(i + ' ') + i).split(' '); return r(t, 'string') || r(t, 'undefined') ? a(o, t) : (o = (e + ' ' + w.join(i + ' ') + i).split(' '), l(o, t, n));
  } var u, d, p = {}, f = t.documentElement, h = 'modernizr', g = t.createElement(h), m = g.style, y = t.createElement('input'), v = {}.toString, b = ' -webkit- -moz- -o- -ms- '.split(' '), x = 'Webkit Moz O ms', C = x.split(' '), w = x.toLowerCase().split(' '), S = { svg: 'http://www.w3.org/2000/svg' }, T = {}, k = {}, L = {}, E = [], F = E.slice, _ = function(e, n, i, o){
      var r, s, a, l, c = t.createElement('div'), u = t.body, d = u || t.createElement('body'); if (parseInt(i, 10)) {
        for (;i--;){
          a = t.createElement('div'), a.id = o ? o[i] : h + (i + 1), c.appendChild(a);
        }
      } return r = ['&#173;', '<style id="s', h, '">', e, '</style>'].join(''), c.id = h, (u ? c : d).innerHTML += r, d.appendChild(c), u || (d.style.background = '', d.style.overflow = 'hidden', l = f.style.overflow, f.style.overflow = 'hidden', f.appendChild(d)), s = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), f.style.overflow = l), !!s;
    }, j = function(t){
      var n = e.matchMedia || e.msMatchMedia; if (n) {
        return n(t) && n(t).matches || !1;
      } var i; return _('@media ' + t + ' { #' + h + ' { position: absolute; } }', function(t){
        i = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position == 'absolute';
      }), i;
    }, I = (function(){
      function e(e, o){
        o = o || t.createElement(i[e] || 'div'), e = 'on' + e; var s = e in o; return s || (o.setAttribute || (o = t.createElement('div')), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ''), s = r(o[e], 'function'), r(o[e], 'undefined') || (o[e] = n), o.removeAttribute(e))), o = null, s;
      } var i = { select: 'input', change: 'input', submit: 'form', reset: 'form', error: 'img', load: 'img', abort: 'img' }; return e;
    }()), D = {}.hasOwnProperty; d = r(D, 'undefined') || r(D.call, 'undefined') ? function(e, t){
    return t in e && r(e.constructor.prototype[t], 'undefined');
  } : function(e, t){
    return D.call(e, t);
  }, Function.prototype.bind || (Function.prototype.bind = function(e){
    var t = this; if (typeof t !== 'function') {
      throw new TypeError();
    } var n = F.call(arguments, 1), i = function(){
      if (this instanceof i){
        var o = function(){}; o.prototype = t.prototype; var r = new o(), s = t.apply(r, n.concat(F.call(arguments))); return Object(s) === s ? s : r;
      } return t.apply(e, n.concat(F.call(arguments)));
    }; return i;
  }), T.flexbox = function(){
    return c('flexWrap');
  }, T.canvas = function(){
    var e = t.createElement('canvas'); return !!e.getContext && !!e.getContext('2d');
  }, T.canvastext = function(){
    return !!p.canvas && !!r(t.createElement('canvas').getContext('2d').fillText, 'function');
  }, T.webgl = function(){
    return !!e.WebGLRenderingContext;
  }, T.touch = function(){
    var n; return 'ontouchstart' in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : _(['@media (', b.join('touch-enabled),('), h, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function(e){
      n = e.offsetTop === 9;
    }), n;
  }, T.geolocation = function(){
    return 'geolocation' in navigator;
  }, T.postmessage = function(){
    return !!e.postMessage;
  }, T.websqldatabase = function(){
    return !!e.openDatabase;
  }, T.hashchange = function(){
    return I('hashchange', e) && (t.documentMode === n || t.documentMode > 7);
  }, T.history = function(){
    return !!e.history && !!history.pushState;
  }, T.draganddrop = function(){
    var e = t.createElement('div'); return 'draggable' in e || 'ondragstart' in e && 'ondrop' in e;
  }, T.websockets = function(){
    return 'WebSocket' in e || 'MozWebSocket' in e;
  }, T.rgba = function(){
    return i('background-color:rgba(150,255,150,.5)'), s(m.backgroundColor, 'rgba');
  }, T.hsla = function(){
    return i('background-color:hsla(120,40%,100%,.5)'), s(m.backgroundColor, 'rgba') || s(m.backgroundColor, 'hsla');
  }, T.multiplebgs = function(){
    return i('background:url(https://),url(https://),red url(https://)'), /(url\s*\(.*?){3}/.test(m.background);
  }, T.backgroundsize = function(){
    return c('backgroundSize');
  }, T.borderimage = function(){
    return c('borderImage');
  }, T.borderradius = function(){
    return c('borderRadius');
  }, T.boxshadow = function(){
    return c('boxShadow');
  }, T.textshadow = function(){
    return t.createElement('div').style.textShadow === '';
  }, T.opacity = function(){
    return o('opacity:.55'), /^0.55$/.test(m.opacity);
  }, T.cssanimations = function(){
    return c('animationName');
  }, T.csscolumns = function(){
    return c('columnCount');
  }, T.cssgradients = function(){
    var e = 'background-image:'; return i((e + '-webkit- '.split(' ').join('gradient(linear,left top,right bottom,from(#9f9),to(white));' + e) + b.join('linear-gradient(left top,#9f9, white);' + e)).slice(0, -e.length)), s(m.backgroundImage, 'gradient');
  }, T.cssreflections = function(){
    return c('boxReflect');
  }, T.csstransforms = function(){
    return !!c('transform');
  }, T.csstransforms3d = function(){
    var e = !!c('perspective'); return e && 'webkitPerspective' in f.style && _('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function(t, n){
      e = t.offsetLeft === 9 && t.offsetHeight === 3;
    }), e;
  }, T.csstransitions = function(){
    return c('transition');
  }, T.fontface = function(){
    var e; return _('@font-face {font-family:"font";src:url("https:///")}', function(n, i){
      var o = t.getElementById('smodernizr'), r = o.sheet || o.styleSheet, s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || '' : ''; e = /src/i.test(s) && s.indexOf(i.split(' ')[0]) === 0;
    }), e;
  }, T.video = function(){
    var e = t.createElement('video'), n = !1; try {
      (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ''), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''));
    } catch (e){} return n;
  }, T.audio = function(){
    var e = t.createElement('audio'), n = !1; try {
      (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''), n.mp3 = e.canPlayType('audio/mpeg;').replace(/^no$/, ''), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''), n.m4a = (e.canPlayType('audio/x-m4a;') || e.canPlayType('audio/aac;')).replace(/^no$/, ''));
    } catch (e){} return n;
  }, T.localstorage = function(){
    try {
      return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
    } catch (e){
      return !1;
    }
  }, T.sessionstorage = function(){
    try {
      return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
    } catch (e){
      return !1;
    }
  }, T.webworkers = function(){
    return !!e.Worker;
  }, T.applicationcache = function(){
    return !!e.applicationCache;
  }, T.svg = function(){
    return !!t.createElementNS && !!t.createElementNS(S.svg, 'svg').createSVGRect;
  }, T.inlinesvg = function(){
    var e = t.createElement('div'); return e.innerHTML = '<svg/>', (e.firstChild && e.firstChild.namespaceURI) == S.svg;
  }, T.smil = function(){
    return !!t.createElementNS && /SVGAnimate/.test(v.call(t.createElementNS(S.svg, 'animate')));
  }, T.svgclippaths = function(){
    return !!t.createElementNS && /SVGClipPath/.test(v.call(t.createElementNS(S.svg, 'clipPath')));
  }; for (var A in T){
    d(T, A) && (u = A.toLowerCase(), p[u] = T[A](), E.push((p[u] ? '' : 'no-') + u));
  } return p.input || (function(){
    p.input = (function(n){
      for (var i = 0, o = n.length; i < o; i++){
        L[n[i]] = n[i] in y;
      } return L.list && (L.list = !!t.createElement('datalist') && !!e.HTMLDataListElement), L;
    }('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '))), p.inputtypes = (function(e){
      for (var i, o, r, s = 0, a = e.length; s < a; s++){
        y.setAttribute('type', o = e[s]), i = y.type !== 'text', i && (y.value = ':)', y.style.cssText = 'position:absolute;visibility:hidden;', /^range$/.test(o) && y.style.WebkitAppearance !== n ? (f.appendChild(y), r = t.defaultView, i = r.getComputedStyle && r.getComputedStyle(y, null).WebkitAppearance !== 'textfield' && y.offsetHeight !== 0, f.removeChild(y)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? y.checkValidity && !1 === y.checkValidity() : y.value != ':)')), k[e[s]] = !!i;
      } return k;
    }('search tel url email datetime date month week time datetime-local number range color'.split(' ')));
  }()), p.addTest = function(e, t){
    if (typeof e === 'object') {
      for (var i in e){
        d(e, i) && p.addTest(i, e[i]);
      }
    } else {
      if (e = e.toLowerCase(), p[e] !== n) {
        return p;
      } t = typeof t === 'function' ? t() : t, f.className += ' ' + (t ? '' : 'no-') + e, p[e] = t;
    } return p;
  }, i(''), g = y = null, (function(e, t){
    function n(e, t){
      var n = e.createElement('p'), i = e.getElementsByTagName('head')[0] || e.documentElement; return n.innerHTML = 'x<style>' + t + '</style>', i.insertBefore(n.lastChild, i.firstChild);
    } function i(){
      var e = y.elements; return typeof e === 'string' ? e.split(' ') : e;
    } function o(e){
      var t = m[e[h]]; return t || (t = {}, g++, e[h] = g, m[g] = t), t;
    } function r(e, n, i){
      if (n || (n = t), u) {
        return n.createElement(e);
      } i || (i = o(n)); var r; return r = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !r.canHaveChildren || p.test(e) || r.tagUrn ? r : i.frag.appendChild(r);
    } function s(e, n){
      if (e || (e = t), u) {
        return e.createDocumentFragment();
      } n = n || o(e); for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; s < l; s++){
        r.createElement(a[s]);
      } return r;
    } function a(e, t){
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n){
        return y.shivMethods ? r(n, e, t) : t.createElem(n);
      }, e.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + i().join().replace(/[\w\-]+/g, function(e){
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
      }) + ');return n}')(y, t.frag);
    } function l(e){
      e || (e = t); var i = o(e); return y.shivCSS && !c && !i.hasCSS && (i.hasCSS = !!n(e, 'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}')), u || a(e, i), e;
    } var c, u, d = e.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = '_html5shiv', g = 0, m = {}; !(function(){
      try {
        var e = t.createElement('a'); e.innerHTML = '<xyz></xyz>', c = 'hidden' in e, u = e.childNodes.length == 1 || (function(){
          t.createElement('a'); var e = t.createDocumentFragment(); return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement;
        }());
      } catch (e){
        c = !0, u = !0;
      }
    }()); var y = { elements: d.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video', version: '3.7.0', shivCSS: !1 !== d.shivCSS, supportsUnknownElements: u, shivMethods: !1 !== d.shivMethods, type: 'default', shivDocument: l, createElement: r, createDocumentFragment: s }; e.html5 = y, l(t);
  }(this, t)), p._version = '2.8.3', p._prefixes = b, p._domPrefixes = w, p._cssomPrefixes = C, p.mq = j, p.hasEvent = I, p.testProp = function(e){
    return a([e]);
  }, p.testAllProps = c, p.testStyles = _, p.prefixed = function(e, t, n){
    return t ? c(e, t, n) : c(e, 'pfx');
  }, f.className = f.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + ' js ' + E.join(' '), p;
}(this, this.document)), (function(e, t, n){
  function i(e){
    return m.call(e) == '[object Function]';
  } function o(e){
    return typeof e === 'string';
  } function r(){} function s(e){
    return !e || e == 'loaded' || e == 'complete' || e == 'uninitialized';
  } function a(){
    var e = y.shift(); v = 1, e ? e.t ? h(function(){
      (e.t == 'c' ? p.injectCss : p.injectJs)(e.s, 0, e.a, e.x, e.e, 1);
    }, 0) : (e(), a()) : v = 0;
  } function l(e, n, i, o, r, l, c){
    function u(t){
      if (!f && s(d.readyState) && (b.r = f = 1, !v && a(), d.onload = d.onreadystatechange = null, t)){
        e != 'img' && h(function(){
          C.removeChild(d);
        }, 50); for (var i in L[n]){
          L[n].hasOwnProperty(i) && L[n][i].onload();
        }
      }
    } var c = c || p.errorTimeout, d = t.createElement(e), f = 0, m = 0, b = { t: i, s: n, e: r, a: l, x: c }; L[n] === 1 && (m = 1, L[n] = []), e == 'object' ? d.data = n : (d.src = n, d.type = e), d.width = d.height = '0', d.onerror = d.onload = d.onreadystatechange = function(){
      u.call(this, m);
    }, y.splice(o, 0, b), e != 'img' && (m || L[n] === 2 ? (C.insertBefore(d, x ? null : g), h(u, c)) : L[n].push(d));
  } function c(e, t, n, i, r){
    return v = 0, t = t || 'j', o(e) ? l(t == 'c' ? S : w, e, t, this.i++, n, i, r) : (y.splice(this.i++, 0, e), y.length == 1 && a()), this;
  } function u(){
    var e = p; return e.loader = { load: c, i: 0 }, e;
  } var d, p, f = t.documentElement, h = e.setTimeout, g = t.getElementsByTagName('script')[0], m = {}.toString, y = [], v = 0, b = 'MozAppearance' in f.style, x = b && !!t.createRange().compareNode, C = x ? f : g.parentNode, f = e.opera && m.call(e.opera) == '[object Opera]', f = !!t.attachEvent && !f, w = b ? 'object' : f ? 'script' : 'img', S = f ? 'script' : w, T = Array.isArray || function(e){
      return m.call(e) == '[object Array]';
    }, k = [], L = {}, E = { timeout: function(e, t){
      return t.length && (e.timeout = t[0]), e;
    } }; p = function(e){
    function t(e){
      var t, n, i, e = e.split('!'), o = k.length, r = e.pop(), s = e.length, r = { url: r, origUrl: r, prefixes: e }; for (n = 0; n < s; n++){
        i = e[n].split('='), (t = E[i.shift()]) && (r = t(r, i));
      } for (n = 0; n < o; n++){
        r = k[n](r);
      } return r;
    } function s(e, o, r, s, a){
      var l = t(e), c = l.autoCallback; l.url.split('.').pop().split('?').shift(), l.bypass || (o && (o = i(o) ? o : o[e] || o[s] || o[e.split('index.html').pop().split('?')[0]]), l.instead ? l.instead(e, o, r, s, a) : (L[l.url] ? l.noexec = !0 : L[l.url] = 1, r.load(l.url, l.forceCSS || !l.forceJS && l.url.split('.').pop().split('?').shift() == 'css' ? 'c' : n, l.noexec, l.attrs, l.timeout), (i(o) || i(c)) && r.load(function(){
        u(), o && o(l.origUrl, a, s), c && c(l.origUrl, a, s), L[l.url] = 2;
      })));
    } function a(e, t){
      function n(e, n){
        if (e){
          if (o(e)){
            n || (d = function(){
              var e = [].slice.call(arguments); p.apply(this, e), f();
            }), s(e, d, t, 0, c);
          } else if (Object(e) === e) {
            for (l in a = (function(){
              var t, n = 0; for (t in e){
                e.hasOwnProperty(t) && n++;
              } return n;
            }()), e){
              e.hasOwnProperty(l) && (!n && !--a && (i(d) ? d = function(){
                var e = [].slice.call(arguments); p.apply(this, e), f();
              } : d[l] = (function(e){
                return function(){
                  var t = [].slice.call(arguments); e && e.apply(this, t), f();
                };
              }(p[l]))), s(e[l], d, t, l, c));
            }
          }
        } else {
          !n && f();
        }
      } var a, l, c = !!e.test, u = e.load || e.both, d = e.callback || r, p = d, f = e.complete || r; n(c ? e.yep : e.nope, !!u), u && n(u);
    } var l, c, d = this.yepnope.loader; if (o(e)){
      s(e, 0, d, 0);
    } else if (T(e)) {
      for (l = 0; l < e.length; l++){
        c = e[l], o(c) ? s(c, 0, d, 0) : T(c) ? p(c) : Object(c) === c && a(c, d);
      }
    } else {
      Object(e) === e && a(e, d);
    }
  }, p.addPrefix = function(e, t){
    E[e] = t;
  }, p.addFilter = function(e){
    k.push(e);
  }, p.errorTimeout = 1e4, t.readyState == null && t.addEventListener && (t.readyState = 'loading', t.addEventListener('DOMContentLoaded', d = function(){
    t.removeEventListener('DOMContentLoaded', d, 0), t.readyState = 'complete';
  }, 0)), e.yepnope = u(), e.yepnope.executeStack = a, e.yepnope.injectJs = function(e, n, i, o, l, c){
    var u, d, f = t.createElement('script'), o = o || p.errorTimeout; f.src = e; for (d in i){
      f.setAttribute(d, i[d]);
    }n = c ? a : n || r, f.onreadystatechange = f.onload = function(){
      !u && s(f.readyState) && (u = 1, n(), f.onload = f.onreadystatechange = null);
    }, h(function(){
      u || (u = 1, n(1));
    }, o), l ? f.onload() : g.parentNode.insertBefore(f, g);
  }, e.yepnope.injectCss = function(e, n, i, o, s, l){
    var c, o = t.createElement('link'), n = l ? a : n || r; o.href = e, o.rel = 'stylesheet', o.type = 'text/css'; for (c in i){
      o.setAttribute(c, i[c]);
    }s || (g.parentNode.insertBefore(o, g), h(n, 0));
  };
}(this, document)), Modernizr.load = function(){
  yepnope.apply(window, [].slice.call(arguments, 0));
}; var Base = function(){}; Base.extend = function(e, t){
  'use strict'; var n = Base.prototype.extend; Base._prototyping = !0; var i = new this(); n.call(i, e), i.base = function(){}, delete Base._prototyping; var o = i.constructor, r = i.constructor = function(){
    if (!Base._prototyping) {
      if (this._constructing || this.constructor == r) {
        this._constructing = !0, o.apply(this, arguments), delete this._constructing;
      } else if (arguments[0] !== null) {
        return (arguments[0].extend || n).call(arguments[0], i);
      }
    }
  }; return r.ancestor = this, r.extend = this.extend, r.forEach = this.forEach, r.implement = this.implement, r.prototype = i, r.toString = this.toString, r.valueOf = function(e){
    return e == 'object' ? r : o.valueOf();
  }, n.call(r, t), typeof r.init === 'function' && r.init(), r;
}, Base.prototype = { extend: function(e, t){
  if (arguments.length > 1){
    var n = this[e]; if (n && typeof t === 'function' && (!n.valueOf || n.valueOf() != t.valueOf()) && /\bbase\b/.test(t)){
      var i = t.valueOf(); t = function(){
        var e = this.base || Base.prototype.base; this.base = n; var t = i.apply(this, arguments); return this.base = e, t;
      }, t.valueOf = function(e){
        return e == 'object' ? t : i;
      }, t.toString = Base.toString;
    } this[e] = t;
  } else if (e){
    var o = Base.prototype.extend; Base._prototyping || typeof this === 'function' || (o = this.extend || o); for (var r = { toSource: null }, s = ['constructor', 'toString', 'valueOf'], a = Base._prototyping ? 0 : 1; l = s[a++];){
      e[l] != r[l] && o.call(this, l, e[l]);
    } for (var l in e){
      r[l] || o.call(this, l, e[l]);
    }
  } return this;
} }, Base = Base.extend({ constructor: function(){
  this.extend(arguments[0]);
} }, { ancestor: Object, version: '1.1', forEach: function(e, t, n){
  for (var i in e) {
    void 0 === this.prototype[i] && t.call(n, e[i], i, e);
  }
}, implement: function(){
  for (var e = 0; e < arguments.length; e++) {
    typeof arguments[e] === 'function' ? arguments[e](this.prototype) : this.prototype.extend(arguments[e]);
  } return this;
}, toString: function(){
  return String(this.valueOf());
} }); var FlipClock; !(function(e){
  'use strict'; FlipClock = function(e, t, n){
    return t instanceof Object && t instanceof Date == 0 && (n = t, t = 0), new FlipClock.Factory(e, t, n);
  }, FlipClock.Lang = {}, FlipClock.Base = Base.extend({ buildDate: '2014-12-12', version: '0.7.7', constructor: function(t, n){
    typeof t !== 'object' && (t = {}), typeof n !== 'object' && (n = {}), this.setOptions(e.extend(!0, {}, t, n));
  }, callback: function(e){
    if (typeof e === 'function'){
      for (var t = [], n = 1; n <= arguments.length; n++){
        arguments[n] && t.push(arguments[n]);
      }e.apply(this, t);
    }
  }, log: function(e){
    window.console && console.log && console.log(e);
  }, getOption: function(e){
    return !!this[e] && this[e];
  }, getOptions: function(){
    return this;
  }, setOption: function(e, t){
    this[e] = t;
  }, setOptions: function(e){
    for (var t in e) {
      void 0 !== e[t] && this.setOption(t, e[t]);
    }
  } });
}(jQuery)), (function(e){
  'use strict'; FlipClock.Face = FlipClock.Base.extend({ autoStart: !0, dividers: [], factory: !1, lists: [], constructor: function(e, t){
    this.dividers = [], this.lists = [], this.base(t), this.factory = e;
  }, build: function(){
    this.autoStart && this.start();
  }, createDivider: function(t, n, i){
    typeof n !== 'boolean' && n || (i = n, n = t); var o = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'].join(''); i && (o = ''), t = this.factory.localize(t); var r = ['<span class="' + this.factory.classes.divider + ' ' + (n || '').toLowerCase() + '">', '<span class="' + this.factory.classes.label + '">' + (t || '') + '</span>', o, '</span>'], s = e(r.join('')); return this.dividers.push(s), s;
  }, createList: function(e, t){
    typeof e === 'object' && (t = e, e = 0); var n = new FlipClock.List(this.factory, e, t); return this.lists.push(n), n;
  }, reset: function(){
    this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0, { minimumDigits: this.factory.minimumDigits }), this.flip(this.factory.original, !1);
  }, appendDigitToClock: function(e){
    e.$el.append(!1);
  }, addDigit: function(e){
    var t = this.createList(e, { classes: { active: this.factory.classes.active, before: this.factory.classes.before, flip: this.factory.classes.flip }}); this.appendDigitToClock(t);
  }, start: function(){}, stop: function(){}, autoIncrement: function(){
    this.factory.countdown ? this.decrement() : this.increment();
  }, increment: function(){
    this.factory.time.addSecond();
  }, decrement: function(){
    this.factory.time.getTimeSeconds() == 0 ? this.factory.stop() : this.factory.time.subSecond();
  }, flip: function(t, n){
    var i = this; e.each(t, function(e, t){
      var o = i.lists[e]; o ? (n || t == o.digit || o.play(), o.select(t)) : i.addDigit(t);
    });
  } });
}(jQuery)), (function(e){
  'use strict'; FlipClock.Factory = FlipClock.Base.extend({ animationRate: 1e3, autoStart: !0, callbacks: { destroy: !1, create: !1, init: !1, interval: !1, start: !1, stop: !1, reset: !1 }, classes: { active: 'flip-clock-active', before: 'flip-clock-before', divider: 'flip-clock-divider', dot: 'flip-clock-dot', label: 'flip-clock-label', flip: 'flip', play: 'play', wrapper: 'flip-clock-wrapper' }, clockFace: 'HourlyCounter', countdown: !1, defaultClockFace: 'HourlyCounter', defaultLanguage: 'english', $el: !1, face: !0, lang: !1, language: 'english', minimumDigits: 0, original: !1, running: !1, time: !1, timer: !1, $wrapper: !1, constructor: function(t, n, i){
    i || (i = {}), this.lists = [], this.running = !1, this.base(i), this.$el = e(t).addClass(this.classes.wrapper), this.$wrapper = this.$el, this.original = n instanceof Date ? n : n ? Math.round(n) : 0, this.time = new FlipClock.Time(this, this.original, { minimumDigits: this.minimumDigits, animationRate: this.animationRate }), this.timer = new FlipClock.Timer(this, i), this.loadLanguage(this.language), this.loadClockFace(this.clockFace, i), this.autoStart && this.start();
  }, loadClockFace: function(e, t){
    var n, i = 'Face', o = !1; return e = e.ucfirst() + i, this.face.stop && (this.stop(), o = !0), this.$el.html(''), this.time.minimumDigits = this.minimumDigits, n = FlipClock[e] ? new FlipClock[e](this, t) : new FlipClock[this.defaultClockFace + i](this, t), n.build(), this.face = n, o && this.start(), this.face;
  }, loadLanguage: function(e){
    var t; return t = FlipClock.Lang[e.ucfirst()] ? FlipClock.Lang[e.ucfirst()] : FlipClock.Lang[e] ? FlipClock.Lang[e] : FlipClock.Lang[this.defaultLanguage], this.lang = t;
  }, localize: function(e, t){
    var n = this.lang; if (!e) {
      return null;
    } var i = e.toLowerCase(); return typeof t === 'object' && (n = t), n && n[i] ? n[i] : e;
  }, start: function(e){
    var t = this; t.running || t.countdown && !(t.countdown && t.time.time > 0) ? t.log('Trying to start timer when countdown already at 0') : (t.face.start(t.time), t.timer.start(function(){
      t.flip(), typeof e === 'function' && e();
    }));
  }, stop: function(e){
    this.face.stop(), this.timer.stop(e); for (var t in this.lists) {
      this.lists.hasOwnProperty(t) && this.lists[t].stop();
    }
  }, reset: function(e){
    this.timer.reset(e), this.face.reset();
  }, setTime: function(e){
    this.time.time = e, this.flip(!0);
  }, getTime: function(){
    return this.time;
  }, setCountdown: function(e){
    var t = this.running; this.countdown = !!e, t && (this.stop(), this.start());
  }, flip: function(e){
    this.face.flip(!1, e);
  } });
}(jQuery)), (function(e){
  'use strict'; FlipClock.List = FlipClock.Base.extend({ digit: 0, classes: { active: 'flip-clock-active', before: 'flip-clock-before', flip: 'flip' }, factory: !1, $el: !1, $obj: !1, items: [], lastDigit: 0, constructor: function(e, t){
    this.factory = e, this.digit = t, this.lastDigit = t, this.$el = this.createList(), this.$obj = this.$el, t > 0 && this.select(t), this.factory.$el.append(this.$el);
  }, select: function(e){
    if (void 0 === e ? e = this.digit : this.digit = e, this.digit != this.lastDigit){
      var t = this.$el.find('.' + this.classes.before).removeClass(this.classes.before); this.$el.find('.' + this.classes.active).removeClass(this.classes.active).addClass(this.classes.before), this.appendListItem(this.classes.active, this.digit), t.remove(), this.lastDigit = this.digit;
    }
  }, play: function(){
    this.$el.addClass(this.factory.classes.play);
  }, stop: function(){
    var e = this; setTimeout(function(){
      e.$el.removeClass(e.factory.classes.play);
    }, this.factory.timer.interval);
  }, createListItem: function(e, t){
    return ['<li class="' + (e || '') + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + (t || '') + '</div>', '</div>', '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + (t || '') + '</div>', '</div>', '</a>', '</li>'].join('');
  }, appendListItem: function(e, t){
    var n = this.createListItem(e, t); this.$el.append(n);
  }, createList: function(){
    var t = this.getPrevDigit() ? this.getPrevDigit() : this.digit; return e(['<ul class="' + this.classes.flip + ' ' + (this.factory.running ? this.factory.classes.play : '') + '">', this.createListItem(this.classes.before, t), this.createListItem(this.classes.active, this.digit), '</ul>'].join(''));
  }, getNextDigit: function(){
    return this.digit == 9 ? 0 : this.digit + 1;
  }, getPrevDigit: function(){
    return this.digit == 0 ? 9 : this.digit - 1;
  } });
}(jQuery)), (function(e){
  'use strict'; String.prototype.ucfirst = function(){
    return this.substr(0, 1).toUpperCase() + this.substr(1);
  }, e.fn.FlipClock = function(t, n){
    return new FlipClock(e(this), t, n);
  }, e.fn.flipClock = function(t, n){
    return e.fn.FlipClock(t, n);
  };
}(jQuery)), (function(e){
  'use strict'; FlipClock.Time = FlipClock.Base.extend({ time: 0, factory: !1, minimumDigits: 0, constructor: function(e, t, n){
    typeof n !== 'object' && (n = {}), n.minimumDigits || (n.minimumDigits = e.minimumDigits), this.base(n), this.factory = e, t && (this.time = t);
  }, convertDigitsToArray: function(e){
    var t = []; e = e.toString(); for (var n = 0; n < e.length; n++){
      e[n].match(/^\d*$/g) && t.push(e[n]);
    } return t;
  }, digit: function(e){
    var t = this.toString(), n = t.length; return !!t[n - e] && t[n - e];
  }, digitize: function(t){
    var n = []; if (e.each(t, function(e, t){
      t = t.toString(), t.length == 1 && (t = '0' + t); for (var i = 0; i < t.length; i++){
        n.push(t.charAt(i));
      }
    }), n.length > this.minimumDigits && (this.minimumDigits = n.length), this.minimumDigits > n.length) {
      for (var i = n.length; i < this.minimumDigits; i++){
        n.unshift('0');
      }
    } return n;
  }, getDateObject: function(){
    return this.time instanceof Date ? this.time : new Date((new Date()).getTime() + 1e3 * this.getTimeSeconds());
  }, getDayCounter: function(e){
    var t = [this.getDays(), this.getHours(!0), this.getMinutes(!0)]; return e && t.push(this.getSeconds(!0)), this.digitize(t);
  }, getDays: function(e){
    var t = this.getTimeSeconds() / 60 / 60 / 24; return e && (t %= 7), Math.floor(t);
  }, getHourCounter: function(){
    return this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);
  }, getHourly: function(){
    return this.getHourCounter();
  }, getHours: function(e){
    var t = this.getTimeSeconds() / 60 / 60; return e && (t %= 24), Math.floor(t);
  }, getMilitaryTime: function(e, t){
    void 0 === t && (t = !0), e || (e = this.getDateObject()); var n = [e.getHours(), e.getMinutes()]; return !0 === t && n.push(e.getSeconds()), this.digitize(n);
  }, getMinutes: function(e){
    var t = this.getTimeSeconds() / 60; return e && (t %= 60), Math.floor(t);
  }, getMinuteCounter: function(){
    return this.digitize([this.getMinutes(), this.getSeconds(!0)]);
  }, getTimeSeconds: function(e){
    return e || (e = new Date()), this.time instanceof Date ? this.factory.countdown ? Math.max(this.time.getTime() / 1e3 - e.getTime() / 1e3, 0) : e.getTime() / 1e3 - this.time.getTime() / 1e3 : this.time;
  }, getTime: function(e, t){
    void 0 === t && (t = !0), e || (e = this.getDateObject()), console.log(e); var n = e.getHours(), i = [n > 12 ? n - 12 : n === 0 ? 12 : n, e.getMinutes()]; return !0 === t && i.push(e.getSeconds()), this.digitize(i);
  }, getSeconds: function(e){
    var t = this.getTimeSeconds(); return e && (t == 60 ? t = 0 : t %= 60), Math.ceil(t);
  }, getWeeks: function(e){
    var t = this.getTimeSeconds() / 60 / 60 / 24 / 7; return e && (t %= 52), Math.floor(t);
  }, removeLeadingZeros: function(t, n){
    var i = 0, o = []; return e.each(n, function(e){
      t > e ? i += parseInt(n[e], 10) : o.push(n[e]);
    }), i === 0 ? o : n;
  }, addSeconds: function(e){
    this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() + e) : this.time += e;
  }, addSecond: function(){
    this.addSeconds(1);
  }, subSeconds: function(e){
    this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() - e) : this.time -= e;
  }, subSecond: function(){
    this.subSeconds(1);
  }, toString: function(){
    return this.getTimeSeconds().toString();
  } });
}(jQuery)), (function(){
  'use strict'; FlipClock.Timer = FlipClock.Base.extend({ callbacks: { destroy: !1, create: !1, init: !1, interval: !1, start: !1, stop: !1, reset: !1 }, count: 0, factory: !1, interval: 1e3, animationRate: 1e3, constructor: function(e, t){
    this.base(t), this.factory = e, this.callback(this.callbacks.init), this.callback(this.callbacks.create);
  }, getElapsed: function(){
    return this.count * this.interval;
  }, getElapsedTime: function(){
    return new Date(this.time + this.getElapsed());
  }, reset: function(e){
    clearInterval(this.timer), this.count = 0, this._setInterval(e), this.callback(this.callbacks.reset);
  }, start: function(e){
    this.factory.running = !0, this._createTimer(e), this.callback(this.callbacks.start);
  }, stop: function(e){
    this.factory.running = !1, this._clearInterval(e), this.callback(this.callbacks.stop), this.callback(e);
  }, _clearInterval: function(){
    clearInterval(this.timer);
  }, _createTimer: function(e){
    this._setInterval(e);
  }, _destroyTimer: function(e){
    this._clearInterval(), this.timer = !1, this.callback(e), this.callback(this.callbacks.destroy);
  }, _interval: function(e){
    this.callback(this.callbacks.interval), this.callback(e), this.count++;
  }, _setInterval: function(e){
    var t = this; t._interval(e), t.timer = setInterval(function(){
      t._interval(e);
    }, this.interval);
  } });
}(jQuery)), (function(e){
  FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({ constructor: function(e, t){
    this.base(e, t);
  }, build: function(t){
    var n = this, i = this.factory.$el.find('ul'); this.factory.time.time || (this.factory.original = new Date(), this.factory.time = new FlipClock.Time(this.factory, this.factory.original)); var t = t || this.factory.time.getMilitaryTime(!1, this.showSeconds); t.length > i.length && e.each(t, function(e, t){
      n.createList(t);
    }), this.createDivider(), this.createDivider(), e(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el), e(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el), this.base();
  }, flip: function(e, t){
    this.autoIncrement(), e = e || this.factory.time.getMilitaryTime(!1, this.showSeconds), this.base(e, t);
  } });
}(jQuery)), (function(e){
  FlipClock.CounterFace = FlipClock.Face.extend({ shouldAutoIncrement: !1, constructor: function(e, t){
    typeof t !== 'object' && (t = {}), e.autoStart = !!t.autoStart, t.autoStart && (this.shouldAutoIncrement = !0), e.increment = function(){
      e.countdown = !1, e.setTime(e.getTime().getTimeSeconds() + 1);
    }, e.decrement = function(){
      e.countdown = !0; var t = e.getTime().getTimeSeconds(); t > 0 && e.setTime(t - 1);
    }, e.setValue = function(t){
      e.setTime(t);
    }, e.setCounter = function(t){
      e.setTime(t);
    }, this.base(e, t);
  }, build: function(){
    var t = this, n = this.factory.$el.find('ul'), i = this.factory.getTime().digitize([this.factory.getTime().time]); i.length > n.length && e.each(i, function(e, n){
      t.createList(n).select(n);
    }), e.each(this.lists, function(e, t){
      t.play();
    }), this.base();
  }, flip: function(e, t){
    this.shouldAutoIncrement && this.autoIncrement(), e || (e = this.factory.getTime().digitize([this.factory.getTime().time])), this.base(e, t);
  }, reset: function(){
    this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0), this.flip();
  } });
}(jQuery)), (function(e){
  FlipClock.DailyCounterFace = FlipClock.Face.extend({ showSeconds: !0, constructor: function(e, t){
    this.base(e, t);
  }, build: function(t){
    var n = this, i = this.factory.$el.find('ul'), o = 0; t = t || this.factory.time.getDayCounter(this.showSeconds), t.length > i.length && e.each(t, function(e, t){
      n.createList(t);
    }), this.showSeconds ? e(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el) : o = 2, e(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4 + o].$el), e(this.createDivider('Hours')).insertBefore(this.lists[this.lists.length - 6 + o].$el), e(this.createDivider('Days', !0)).insertBefore(this.lists[0].$el), this.base();
  }, flip: function(e, t){
    e || (e = this.factory.time.getDayCounter(this.showSeconds)), this.autoIncrement(), this.base(e, t);
  } });
}(jQuery)), (function(e){
  FlipClock.HourlyCounterFace = FlipClock.Face.extend({ constructor: function(e, t){
    this.base(e, t);
  }, build: function(t, n){
    var i = this, o = this.factory.$el.find('ul'); n = n || this.factory.time.getHourCounter(), n.length > o.length && e.each(n, function(e, t){
      i.createList(t);
    }), e(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el), e(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4].$el), t || e(this.createDivider('Hours', !0)).insertBefore(this.lists[0].$el), this.base();
  }, flip: function(e, t){
    e || (e = this.factory.time.getHourCounter()), this.autoIncrement(), this.base(e, t);
  }, appendDigitToClock: function(e){
    this.base(e), this.dividers[0].insertAfter(this.dividers[0].next());
  } });
}(jQuery)), (function(){
  FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({ clearExcessDigits: !1, constructor: function(e, t){
    this.base(e, t);
  }, build: function(){
    this.base(!0, this.factory.time.getMinuteCounter());
  }, flip: function(e, t){
    e || (e = this.factory.time.getMinuteCounter()), this.base(e, t);
  } });
}(jQuery)), (function(e){
  FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({ meridium: !1, meridiumText: 'AM', build: function(){
    var t = this.factory.time.getTime(!1, this.showSeconds); this.base(t), this.meridiumText = this.getMeridium(), this.meridium = e(['<ul class="flip-clock-meridium">', '<li>', '<a href="#">' + this.meridiumText + '</a>', '</li>', '</ul>'].join('')), this.meridium.insertAfter(this.lists[this.lists.length - 1].$el);
  }, flip: function(e, t){
    this.meridiumText != this.getMeridium() && (this.meridiumText = this.getMeridium(), this.meridium.find('a').html(this.meridiumText)), this.base(this.factory.time.getTime(!1, this.showSeconds), t);
  }, getMeridium: function(){
    return (new Date()).getHours() >= 12 ? 'PM' : 'AM';
  }, isPM: function(){
    return this.getMeridium() == 'PM';
  }, isAM: function(){
    return this.getMeridium() == 'AM';
  } });
}(jQuery)), (function(){
  FlipClock.Lang.Arabic = { years: 'سنوات', months: 'شهور', days: 'أيام', hours: 'ساعات', minutes: 'دقائق', seconds: 'ثواني' }, FlipClock.Lang.ar = FlipClock.Lang.Arabic, FlipClock.Lang['ar-ar'] = FlipClock.Lang.Arabic, FlipClock.Lang.arabic = FlipClock.Lang.Arabic;
}(jQuery)), (function(){
  FlipClock.Lang.Danish = { years: 'År', months: 'Måneder', days: 'Dage', hours: 'Timer', minutes: 'Minutter', seconds: 'Sekunder' }, FlipClock.Lang.da = FlipClock.Lang.Danish, FlipClock.Lang['da-dk'] = FlipClock.Lang.Danish, FlipClock.Lang.danish = FlipClock.Lang.Danish;
}(jQuery)), (function(){
  FlipClock.Lang.German = { years: 'Jahre', months: 'Monate', days: 'Tage', hours: 'Stunden', minutes: 'Minuten', seconds: 'Sekunden' }, FlipClock.Lang.de = FlipClock.Lang.German, FlipClock.Lang['de-de'] = FlipClock.Lang.German, FlipClock.Lang.german = FlipClock.Lang.German;
}(jQuery)), (function(){
  FlipClock.Lang.English = { years: 'Years', months: 'Months', days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' }, FlipClock.Lang.en = FlipClock.Lang.English, FlipClock.Lang['en-us'] = FlipClock.Lang.English, FlipClock.Lang.english = FlipClock.Lang.English;
}(jQuery)), (function(){
  FlipClock.Lang.Spanish = { years: 'A&#241;os', months: 'Meses', days: 'D&#205;as', hours: 'Horas', minutes: 'Minutos', seconds: 'Segundo' }, FlipClock.Lang.es = FlipClock.Lang.Spanish, FlipClock.Lang['es-es'] = FlipClock.Lang.Spanish, FlipClock.Lang.spanish = FlipClock.Lang.Spanish;
}(jQuery)), (function(){
  FlipClock.Lang.Finnish = { years: 'Vuotta', months: 'Kuukautta', days: 'Päivää', hours: 'Tuntia', minutes: 'Minuuttia', seconds: 'Sekuntia' }, FlipClock.Lang.fi = FlipClock.Lang.Finnish, FlipClock.Lang['fi-fi'] = FlipClock.Lang.Finnish, FlipClock.Lang.finnish = FlipClock.Lang.Finnish;
}(jQuery)), (function(){
  FlipClock.Lang.French = { years: 'Ans', months: 'Mois', days: 'Jours', hours: 'Heures', minutes: 'Minutes', seconds: 'Secondes' }, FlipClock.Lang.fr = FlipClock.Lang.French, FlipClock.Lang['fr-ca'] = FlipClock.Lang.French, FlipClock.Lang.french = FlipClock.Lang.French;
}(jQuery)), (function(){
  FlipClock.Lang.Italian = { years: 'Anni', months: 'Mesi', days: 'Giorni', hours: 'Ore', minutes: 'Minuti', seconds: 'Secondi' }, FlipClock.Lang.it = FlipClock.Lang.Italian, FlipClock.Lang['it-it'] = FlipClock.Lang.Italian, FlipClock.Lang.italian = FlipClock.Lang.Italian;
}(jQuery)), (function(){
  FlipClock.Lang.Latvian = { years: 'Gadi', months: 'Mēneši', days: 'Dienas', hours: 'Stundas', minutes: 'Minūtes', seconds: 'Sekundes' }, FlipClock.Lang.lv = FlipClock.Lang.Latvian, FlipClock.Lang['lv-lv'] = FlipClock.Lang.Latvian, FlipClock.Lang.latvian = FlipClock.Lang.Latvian;
}(jQuery)), (function(){
  FlipClock.Lang.Dutch = { years: 'Jaren', months: 'Maanden', days: 'Dagen', hours: 'Uren', minutes: 'Minuten', seconds: 'Seconden' }, FlipClock.Lang.nl = FlipClock.Lang.Dutch, FlipClock.Lang['nl-be'] = FlipClock.Lang.Dutch, FlipClock.Lang.dutch = FlipClock.Lang.Dutch;
}(jQuery)), (function(){
  FlipClock.Lang.Norwegian = { years: 'År', months: 'Måneder', days: 'Dager', hours: 'Timer', minutes: 'Minutter', seconds: 'Sekunder' }, FlipClock.Lang.no = FlipClock.Lang.Norwegian, FlipClock.Lang.nb = FlipClock.Lang.Norwegian, FlipClock.Lang['no-nb'] = FlipClock.Lang.Norwegian, FlipClock.Lang.norwegian = FlipClock.Lang.Norwegian;
}(jQuery)), (function(){
  FlipClock.Lang.Portuguese = { years: 'Anos', months: 'Meses', days: 'Dias', hours: 'Horas', minutes: 'Minutos', seconds: 'Segundos' }, FlipClock.Lang.pt = FlipClock.Lang.Portuguese, FlipClock.Lang['pt-br'] = FlipClock.Lang.Portuguese, FlipClock.Lang.portuguese = FlipClock.Lang.Portuguese;
}(jQuery)), (function(){
  FlipClock.Lang.Russian = { years: 'лет', months: 'месяцев', days: 'дней', hours: 'часов', minutes: 'минут', seconds: 'секунд' }, FlipClock.Lang.ru = FlipClock.Lang.Russian, FlipClock.Lang['ru-ru'] = FlipClock.Lang.Russian, FlipClock.Lang.russian = FlipClock.Lang.Russian;
}(jQuery)), (function(){
  FlipClock.Lang.Swedish = { years: 'År', months: 'Månader', days: 'Dagar', hours: 'Timmar', minutes: 'Minuter', seconds: 'Sekunder' }, FlipClock.Lang.sv = FlipClock.Lang.Swedish, FlipClock.Lang['sv-se'] = FlipClock.Lang.Swedish, FlipClock.Lang.swedish = FlipClock.Lang.Swedish;
}(jQuery)), (function(){
  FlipClock.Lang.Chinese = { years: '年', months: '月', days: '日', hours: '时', minutes: '分', seconds: '秒' }, FlipClock.Lang.zh = FlipClock.Lang.Chinese, FlipClock.Lang['zh-cn'] = FlipClock.Lang.Chinese, FlipClock.Lang.chinese = FlipClock.Lang.Chinese;
}(jQuery)); var Maps, clock, isMobile = $(window).width() < 1e3, gymsJSON, Helpers = {}; Helpers.debounce = function(e, t, n){
  var i; return function(){
    var o = this, r = arguments, s = function(){
        i = null, n || e.apply(o, r);
      }, a = n && !i; clearTimeout(i), i = setTimeout(s, t || 200), a && e.apply(o, r);
  };
}; var Site = (function(){
  function e(){
    var e = window.location.toString().split('index.html'), t = {}; return $.each(e, function(n, i){
      if (i == 'page' || i == 'category'){
        var o = n + 1; t[e[n]] = e[o];
      }
    }), t;
  } var t, n, i = function(){
      $('.faq__item').each(function(){
        $(this).removeClass('-is-active');
      }), $('.faq__title').on('click', function(e){
        e.preventDefault(), $(this).parents('.faq__item').toggleClass('-is-active');
      });
    }, o = function(){
      $('.js-tab-bg-toggle').on('click', function(e){
        e.preventDefault(), $('.tabs__admin-image').toggleClass('-is-visible');
      }), isAdmin || $('.js-tab').on('click', function(e){
        e.preventDefault(); var t = $(this), n = t.parent('li'), i = $('.tabs__header > li'), o = i.index(n); $('.tabs__a.-is-selected').removeClass('-is-selected'), t.addClass('-is-selected'), $('.tabs__contents').find('.tabs__box').removeClass('-is-visible').eq(o).addClass('-is-visible');
      });
    }, r = function(e){
      var t = $("a[name='" + e + "']"); t && $('html, body').animate({ scrollTop: t.offset().top }, 'slow');
    }, s = function(){
      var e = $('.js-position-dropdown').val(); void 0 !== e && e !== '' && e !== 'null' || (e = 'any'); var t = $('.js-location-dropdown').val(); void 0 !== t && t !== '' && t !== 'null' || (t = 'any'), window.location.href = base + 'careers/search/' + e + '/' + t;
    }, a = function(){
      if (!isAdmin){
        var e, t = $('.js-slider'), n = setInterval(function(){
          void 0 !== t && t.length > 0 && void 0 !== t.bxSlider && (clearInterval(n), $bxTestimonialsSlider = t.bxSlider({ auto: !0, autoHover: !0, pause: 5e3, infiniteLoop: !0, captions: !1, pager: !1, controls: !1, useCSS: !1 }), $('.js-testimonials').on('click', '.js-testimonials-prev', function(){
            $bxTestimonialsSlider.stopAuto(), $bxTestimonialsSlider.goToPrevSlide(), clearTimeout(e), e = setTimeout(function(){
              $bxTestimonialsSlider.startAuto();
            }, 5e3);
          }).on('click', '.js-testimonials-next', function(){
            $bxTestimonialsSlider.stopAuto(), $bxTestimonialsSlider.goToNextSlide(), clearTimeout(e), e = setTimeout(function(){
              $bxTestimonialsSlider.startAuto();
            }, 5e3);
          }), $(window).bind('resize', function(){
            $bxTestimonialsSlider.length > 0 && $bxTestimonialsSlider.reloadSlider();
          }));
        }, 50); setTimeout(function(){
          clearInterval(n);
        }, 15e3);
      }
    }, l = function(){
      $('.js-location-dropdown').on('change', function(){
        window.location.href = base + 'classes/timetable/' + $(this).val() + '#timetable';
      });
    }, c = function(e, t, n){
      var i = $(window).height(), o = $(window).scrollTop(); void 0 !== e.pause && (o < t - i + 400 || o > t + n - 400 ? e.paused || e.pause() : e.paused && e.play());
    }, u = function(){
      n = $('#blog-articles').imagesLoaded(function(){
        n.isotope({ itemSelector: '.blog-index-article', getSortData: { date: function(e){
          return parseInt($(e).data('date'), 10);
        } }, sortBy: 'date', sortAscending: !1 });
      });
    }, d = function(){
      void 0 !== n && void 0 !== n.data('isotope') && n.isotope('destroy');
    }, p = function(){
      var e = $('.js-flip-clock-container'), t = $('.js-flip-clock'), n = e.data('countdown-current-price'), i = e.data('countdown-spaces-left'); if (e.data('countdown-days-left'),
      void 0 !== i && t.length > 0){
        void 0 !== n && $('.js-price-pm').text('£' + n); var o = i + 3, r = new FlipClock($('.js-flip-clock'), { clockFace: 'Counter' }); r.setValue(o), setTimeout(function(){
          e.addClass('-show'); var t = setInterval(function(){
            r.decrement(), $('.flip-clock > ul').each(function(){
              $(this).hasClass('play') || $(this).addClass('play');
            });
          }, 800); setTimeout(function(){
            clearInterval(t);
          }, 2600);
        }, 750);
      }
    }, f = { home: function(){
      $.ajax({ url: window.location.origin + '/homes/get_gym_json', error: function(){
        return 'An error has occurred';
      }, success: function(e){
        $('.js-gyms-json-container').text(e);
      }, type: 'GET' }), $('[data-load-order="1"]').addClass('-show'), setTimeout(function(){
        $('[data-load-order="2"]').addClass('-show');
      }, 100), navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) || $('.js-intro-area-video-link > img').attr('src', base + 'easygym/img/home-video-gif.gif'), $('.js-intro-area-arrow').on('click', function(){
        r('about');
      }); var e = { GymLocation: { lat: 51.900612, long: -2.078182 }}; if ($(document).ajaxComplete(function(){
        gymsJSON = $('.js-gyms-json-container').text(), gymsJSON = $.parseJSON(gymsJSON); var t = setInterval(function(){
          typeof Maps === 'object' && (clearInterval(t), Maps.setup(e, 8), Maps.setupGeolocation(), $('.js-location-dropdown').length > 0 && !navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && $('.js-location-dropdown').on('change', function(){
            $('.js-home-map-overlay').addClass('-hide'), $('.js-home-map-expand').removeClass('-hide'), Maps.searchHomeMap($(this).val());
          }));
        }, 100);
      }), $('.js-close-home-map').on('click', function(e){
        e.preventDefault(), $('.js-home-map-overlay').addClass('-hide'), $('.js-home-map-expand').removeClass('-hide');
      }), $('.js-home-map-expand').on('click', function(e){
        e.preventDefault(), $(this).addClass('-hide'), $('.js-home-map-overlay').removeClass('-hide');
      }), !isAdmin)$('.js-toggle-hero').on('click touchend', function(e){
        e.preventDefault(), $('.home-hero-grid__admin-image').toggle();
      });
    }, class_workouts: function(){
      l();
    }, class_workouts_timetable: function(){
      l(); var e = function(e, t){
        t !== 'all' ? $('.class-timetable__slot, .class-timetable__row').each(function(){
          var e = $(this); e.attr('data-workout') === t || t === 'free' && e.attr('data-workout').toLowerCase().indexOf(t.toLowerCase()) > -1 ? e.show() : e.hide();
        }) : $('.class-timetable__slot, .class-timetable__row').show(), e.length > 0 ? $('.class-timetable__day, .class-timetable__table').each(function(){
          var t = $(this); $.inArray(t.attr('data-day'), e) !== -1 ? t.show() : t.hide();
        }) : $('.class-timetable__day, .class-timetable__table').show();
      }; $('.cbx-ct').on('change', function(){
        var t = $(this), n = []; $('.cbx-ct.-day:checked').each(function(){
          n.push($(this).attr('data-day'));
        }); var i = $('#cbxCtPACK').is(':checked') ? 'PACK workout' : 'all'; t.hasClass('-workout') && t.is(':checked') && (i = t.attr('data-workout')), e(n, i);
      }); var t = new Date(); t = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][t.getDay()], $('.expose-admin__sidepane__list--add-links').on('click', '.expose-admin__sidepane__list-item', function(e){
        e.preventDefault(), e.stopPropagation(); var n = $(this), i = n.attr('href'); if (n.text() == '+Class'){
          var o, r, s, a, l; if ((o = prompt('On which day of the week?', t)) !== null && (i += '/' + o, (r = prompt('Start time? HH:MM (24h)', '11:00')) !== null)){
            var c = r.split(':'); c = parseInt(c[0], 10) + 1 + ':' + c[1], i += '/' + r.replace(':', ''), (s = prompt('End time? HH:MM (24h)', c)) !== null && (r = r.replace(':', ''), s = s.replace(':', ''), i += '/' + s, (a = prompt('Class title? e.g. BODY PUMP')) !== null && (i += '/' + a.replace('%20', ' '), (l = prompt('Instructor time? e.g. PACK Leader, Andy')) !== null && (i += '/' + l, window.location.href = i)));
          }
        }
      }), $('.js-class-info').on('click', function(){
        $(this).parent('.-em').children('.js-info-reveal').toggle('hide');
      }), $('.js-class-info-mob').on('click', function(){
        $(this).parent('.class-timetable__slot').children('.js-info-reveal-mob').toggle('hide');
      });
    }, gym_location: function(){
      $('.js-flash-sale').data('location-id'), (isAdmin || $('.hero.-gym-view').find('.hero__slide').length > 1) && $('.hero.-gym-view').append('<a href="javascript:;" class="hero-gym-view__nav -prev">Prev</a><a href="javascript:;" class="hero-gym-view__nav -next">Next</a>'), $('.hero.-gym-view').on('click', '.hero-gym-view__nav', function(e){
        e.preventDefault(); var t = $(this); isAdmin || void 0 === HeroCarousel.pause || void 0 === HeroCarousel.play || (HeroCarousel.pause(), HeroCarousel.play()), t.hasClass('-prev') ? HeroCarousel.gotoPrevSlide() : t.hasClass('-next') && HeroCarousel.gotoNextSlide();
      }); var e = $('.js-play-opening-soon-video'); if (e.length > 0){
        var t = '<iframe width="800" height="450" src="' + e.data('video-src') + '?rel=0&amp;autoplay=1&amp;controls=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'; e.on('click', function(){
          $('.js-opening-soon-video').html(t), $('.overlay, .opening-soon-video-overlay').addClass('-show');
        }), $('.overlay').on('click', function(){
          $('.overlay, .opening-soon-video-overlay').removeClass('-show'), setTimeout(function(){
            $('.js-opening-soon-video').html('');
          }, 1e3);
        });
      }isAdmin || (HeroCarousel.play(), setTimeout(function(){
        HeroCarousel.gotoNextSlide();
      }, 4e3)), $('.js-hero-arrow').on('click', function(){
        r('intro');
      }), a(), $('.expose-admin__sidepane__list').on('click', '.expose-admin__sidepane__list-item', function(e){
        if ($(this).attr('href').indexOf('gym_locations/membership_box_count') != -1){
          e.stopPropagation(), e.preventDefault(); var t = prompt('New count?'); t === '' || isNaN(parseInt(t, 10)) ? alert('Please enter a number') : window.location.href = $(this).attr('href') + '/' + t;
        }
      }), p(); var n = $('#js-google-map'), i = n.data('map'), o = setInterval(function(){
          typeof Maps === 'object' && (clearInterval(o), Maps.setup(i, 17, !0));
        }, 100), s = $('.js-promo-clock'), l = $('.js-promo-remaining'); if (s && l){
        var c = s.attr('data-start'), u = s.attr('data-end'), d = s.attr('data-duration'); !(function(e, t, n, i){
          var o = Number(n) - Number(t), r = Number(t), s = n > t ? 1 : -1, a = Math.abs(Math.floor(i / o)), l = setInterval(function(){
            r += s, e.text(r), r == n && clearInterval(l);
          }, a);
        }(l, c, u, d));
      }
    }, pack_workouts_index: function(){
      if (!isAdmin){
        var e = $('.js-video-embed'), t = e.offset().top, n = e.outerHeight(), i = window.location.pathname === '/spinning' ? 14197365 : 14303414, o = '<video id="video"><source src="https://view.vzaar.com/' + i + '/video" type="video/mp4" /></video>'; navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && (o = '<img src="' + base + 'easygym/img/easygym_30_second_pack_noaudio.gif" alt="Pack workout video" width="414" height="233" />'), $('.js-video-embed').append(o); var r, s = setInterval(function(){
          (r = document.getElementById('video')) !== null && void 0 !== r.pause && (clearInterval(s), s = !1, r.pause(), c(r, t, n), $(window).scroll(Helpers.debounce(function(){
            c(r, t, n);
          }, 200)));
        }, 100); setTimeout(function(){
          !1 !== s && (clearInterval(s), s = !1);
        }, 3e3);
      }a();
    }, careers_index: function(){
      $('.js-hero-arrow').on('click', function(){
        r('careersearch');
      }), navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i), $('.js-position-dropdown').on('change', s), $('.js-location-dropdown').on('change', s);
    }, zones: function(){
      $('.js-hero-arrow').on('click', function(){
        r('intro');
      }), $('.js-intro-area-arrow').on('click', function(){
        r('content');
      });
    }, cardio: function(){
      $('.js-intro-area-arrow').on('click', function(){
        r('cardio');
      });
    }, resistance: function(){
      $('.js-intro-area-arrow').on('click', function(){
        r('resistance');
      });
    }, free_weights: function(){
      $('.js-intro-area-arrow').on('click', function(){
        r('free-weights');
      });
    }, total_body_training: function(){
      $('.js-intro-area-arrow').on('click', function(){
        r('total-body-training');
      });
    }, social_posts: function(){
      $('.js-import').on('click', function(e){
        e.preventDefault(), e.stopPropagation(), $.post(base + 'contact', formData).done(function(e){});
      });
    }, blog_articles: function(){
      function t(){
        return r = $(window).width() >= 860, r ? u() : d(), r;
      } function i(e){
        var t = 12; e || (s.category = c.categories[0], s.date = c.dates[0]); var i = s.category != c.categories[0], o = s.date != c.dates[0]; if ((i || o || !e) && (t = 9, void 0 !== a.page ? t = 9 * s.page : s.page = 1), h = void 0 !== s.page ? 9 * (s.page - 1) : 0, e && (void 0 !== c.categories && c.categories.unshift(s.category), void 0 !== c.dates && c.dates.unshift(s.date)), !l){
          var u = base + 'blog_articles/get_posts/' + h + '/' + t + '/' + s.category; p.addClass('blog-cat-ajax').children('i').hide(), $.ajax({ type: 'POST', url: u, success: function(e){
            var t = $('#blog-articles .blog-index-article'), i = t.filter(function(n){
                var i = !0; return $(e).each(function(){
                  var e = $(this); $(t[n]).attr('data-id') === $(e[0]).attr('data-id') && (i = !1);
                }), i;
              }), o = $(e).filter(function(){
                var e = !0, n = $(this); return t.each(function(i){
                  $(t[i]).attr('data-id') === $(n[0]).attr('data-id') && (e = !1);
                }), e;
              }), s = $('#blog-articles .blog-index-article').size(), a = i.size(), l = 9 - (s - a) % 9; h = s - a + l, g = s, o = o.slice(0, l), r && (n = $('#blog-articles').imagesLoaded(function(){
              n.isotope('remove', i).isotope('insert', o);
            })), r && o.length < 1 || void 0 !== $('#blog-articles').data('isotope').$filteredAtoms && $('#blog-articles').data('isotope').$filteredAtoms.length === 0 ? ($('.no-posts').fadeIn('slow'), f.fadeOut('fast')) : ($('.no-posts').fadeOut('fast'), f.fadeIn('slow')), f.size() > 0 && $('input#noMoreArticles').remove(), v();
          } });
        }
      } function o(){
        if (!y && $.inArray(h, m) === -1){
          if (y = !0, m.push(h), f.hasClass('disabled')) {
            return;
          } f.addClass('disabled loading'), g = 9; var e = base + 'blog_articles/get_posts/' + h + '/' + g + '/' + s.category; $.ajax({ type: 'POST', url: e, success: function(e){
            n = $('#blog-articles'), e.indexOf('noMoreArticles') !== -1 ? $('.blog-articles').append(e) : r ? n.imagesLoaded(function(){
              n.isotope('insert', $(e));
            }) : n.append($(e)), f.removeClass('loading'), setTimeout(function(){
              $('#blog-articles > div').fadeTo(500, 1);
            }, 500), $('input#noMoreArticles').size() > 0 ? ($('.load-more__text').text('All Shown').unbind('click').bind('click', function(){
              return !1;
            }).css({ cursor: 'auto' }), $('input#noMoreArticles').remove()) : (s.page++, v()), y = !1, r && (n.isotope('layout'), setTimeout(function(){
              n.isotope('layout');
            }, 500));
          }, complete: function(){
            f.removeClass('disabled'), h += 9;
          } });
        }
      } var r; t(), $(window).resize(function(){
        t();
      }), $('#blog-articles').on('click', '.blog-index-article', function(e){
        e.preventDefault(), e.stopPropagation(); var t = $(this).find('.heading a'); window.location.href = t.attr('href');
      }), $('.blog-article__category').on('click', 'a', function(e){
        e.preventDefault(), e.stopPropagation(); var t = $(this); window.location.href = t.attr('href');
      }); var s = {}, a = e(); s.author = 'undefined', void 0 !== a.author && (s.author = a.author), s.page = null, void 0 !== a.page && (s.page = parseInt(a.page)), s.category = 'all', void 0 !== a.category && (s.category = a.category); var l = void 0 !== a && (void 0 !== a.page || void 0 !== a.category || void 0 !== a.date || void 0 !== a.author), c = {}; c.categories = [], c.dates = [], Site.initHistory(), r && $('#blog-articles').size() > 0 && u(), typeof hljs !== 'undefined' && hljs.initHighlightingOnLoad(); var p, f = $('#js-load-more-articles'); $('.blog-categories__list a').on('click', function(e, t){
        e.preventDefault(); var n = $(this); if (!n.is('.selected')){
          f.text('Load More'); var o = n.parent(), r = o.parent(), a = r.children('li'); r.prev(), p = r.prev(), a.removeClass('-selected'), o.addClass('-selected'), s.category = n.attr('data-category'), i(!0);
        }
      }), void 0 !== a.category && $('.blog-categories__list a').each(function(){
        var e = $(this); e.attr('data-category') === a.category && e.click();
      }); var h = 9, g = 9, m = [], y = !1; f.css({ cursor: 'pointer' }).attr('id', 'js-load-more-articles'), $(document).on('click', '#js-load-more-articles', function(e){
        e.preventDefault();
      }), $(document).on('mousedown', '#js-load-more-articles', function(e){
        e.preventDefault(), setTimeout(function(){
          o();
        }, 500);
      }), $(window).scroll(function(e){
        var t = $(document).height(), n = $(window).height(); $(window).scrollTop() > t - n - 800 && o();
      }); var v = function(){
        var e = base + 'index'; e += '/category/' + s.category, void 0 !== s.date && (e += '/date/' + s.date), void 0 !== s.page && (e += '/page/' + s.page), History.replaceState({ state: e, url: e }, document.title, e);
      }; $(document).on('click', '#js-go-back', function(e){
        e.preventDefault(), void 0 === c.categories[0] ? (categoryDropdownText.text('All Categories'), $('.blog-categories__list a').removeClass('selected')) : $('.blog-categories__list a').each(function(){
          var e = $(this); e.attr('data-category') == c.categories[0] ? (categoryDropdownText.text(e.text()), e.addClass('selected')) : e.removeClass('selected');
        }), i(!1), c.categories.shift();
      }), setTimeout(function(){
        location.pathname.indexOf('page/index.html') > -1 && s.page > 1 && $('html, body').animate({ scrollTop: $('#blog-articles').height() - 900 }, 'slow'), l = !1;
      }, 1e3), s.page === null && (s.page = 1);
    }, workout_registration: function(){
      var e = $('.js-tablet-class-time').html(), t = new Date(1 * e.match(/\d+/)[0]), n = new Date(), i = t.getTime() / 1e3 - n.getTime() / 1e3, o = $('.js-tablet-pin-entry'), r = $('.js-pin-number'), s = $('.js-tablet-btn--register'), a = t.getHours(), l = t.getMinutes(), c = function(e){
          e === 'disabled' ? s.attr('disabled', !0).addClass('disabled') : e === 'enabled' && s.attr('disabled', !1).removeClass('disabled');
        }, u = function(e){
          var t = r.val(); return base + 'members/get/' + t + '?callback=getMember';
        }, d = function(e){
          var n = u(); $.ajax(n, { dataType: 'jsonp', callback: 'callback', success: function(e){
            var n = e, i = n.Result; n.Result === null ? alert('Unrecognised pin number. Please try again.') : ($('#AppUserName').val(i.MemberName), $('#AppUserMemberId').val(i.MemberID), $('#AppUserStartTime').val(t), o.submit(), $('js-tablet-enroll-text').html('Thank you, ' + i.MemberName + '. You have been enrolled onto the next session.'), o.css('display', 'none'));
          }, error: function(){
            alert('Failed to connect to server. Please try again later.');
          } });
        }, p = function(e, t){
          clock = $('.flip-clock').FlipClock({ clockFace: e, callbacks: { interval: function(){
            var e = this.factory.getTime(), t = parseInt(e.time); setTimeout(function(){
              t !== 6e3 && e.time !== 0 || location.reload();
            }, 1e3), e.time < 600 ? r.keyup(function(t){
              pinNumber = r.val(); var n = pinNumber.match(/\d{8}/); c(n !== null && parseInt(e.time) < 600 ? 'enabled' : 'disabled');
            }) : c('disabled');
          } }, showSeconds: t, showDays: !1 }), !1 === t && $('.flip-clock-wrapper .flip-clock-divider').first().css('display', 'none'), clock.setCountdown(!0), clock.setTime(i);
        }; i = 500, $('.js-cookie-set').is(':empty') || setTimeout(function(){
        location.reload();
      }, 8e3), i >= 6e3 ? (p('HourlyCounter', !1), $('.seconds').nextAll('ul').remove(), $('.seconds').css('display', 'none'), $('.flip-clock-divider').removeClass('flip-clock-divider-hide'), $('.tablet-starts-text').html('<em>Class starts at ' + a + ':' + l + '</em><br />'), $('.js-tablet-minutes').html('<em>minutes</em>'), $('.js-tablet-hours').html('<em>hours</em>')) : i < 6e3 && (p('MinuteCounter', !0), $('.flip-clock-divider').addClass('flip-clock-divider-hide')), c('disabled'), r.keypress(function(e){
        e.keyCode != 10 && e.keyCode != 13 || e.preventDefault();
      }), s.on('click', function(e){
        e.preventDefault(), d();
      }), r.focus(function(){
        window.scrollTo(0, 0), document.body.scrollTop = 0;
      });
    }, contact: function(){
      $("a[href^='http']").attr('target', '_blank'), $('.js-show-typeform').on('click', function(e){
        e.preventDefault(); var t = $(this).attr('data-typeform'), n = $('.js-typeform[data-typeform="' + t + '"]'); $('.embedded-typeform').removeClass('-show'), n.addClass('-show'), setTimeout(function(){
          $('html, body').animate({ scrollTop: n.offset().top - 80 + 'px' }, 1e3);
        }, 501);
      }), navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) || $('.js-enquiry-type-dropdown'), $('.js-hero-arrow').on('click', function(){
        r('map');
      }); var e = $('#js-google-map'), t = e.data('map'), n = setInterval(function(){
        typeof Maps === 'object' && (clearInterval(n), Maps.setup(t, 17), Maps.setupGeolocation());
      }, 100); setTimeout(function(){
        $('.embedded-typeform').removeClass('-hack-page-scroll-bug');
      }, 500);
    } }, h = { init: function(){
      function e(){
        $('.nav-menu__list').each(function(){
          var e = $(this).height(); e > t && (t = e);
        }), setTimeout(function(){
          $('.nav-menu__list').css({ height: t + 'px' });
        }, 0);
      } var t = 0; e(), $(window).resize(function(){
        t = 0, e();
      }), $('.js-close-modal').on('click', function(e){
        e.preventDefault(), $('.overlay, .newsletter-confirm').removeClass('-show');
      }), $('.social__facebook').on('click', 'a', function(e){
        $(this).attr('href').indexOf('facebook.com') === -1 && (e.preventDefault(), e.stopPropagation(), FB.ui({ method: 'share', href: 'https://www.easygym.co.uk/' }, function(e){}));
      }), i(), o(), $('.resrc.bg-img').each(function(){
        if (void 0 !== $(this).data('src')){
          var e = $(this).data('src').replace(/^http:\/\//i, 'https:///'); $(this).css('background-image', "url('" + e + "')"), console.log('Set URL of image ' + e);
        }
      }), $('.default-template__body table').wrap('<div class="default-template-table-container"><div></div></div>');
    } }; return { init: function(e){
    t = e;
  }, pageLoad: function(){
    var e = t.replace(/-/g, '_').toLowerCase(); f.hasOwnProperty(e) && f[e](), h.init();
  }, initHistory: function(){
    var e = window.History; if (!e.enabled) {
      return !1;
    } var t = ''; e.Adapter.bind(window, 'statechange', function(){
      var n = e.getState(); t = n.data.url, e.log(n.data, n.title, n.url);
    });
  } };
}()); window.initMaps = function(){
  loadJS(base + 'easygym/bower_components/google-map-v3-infobox/infobox.js', function(){
    Maps = (function(){
      var e, t, n = { defaultOffset: isMobile ? 0.002 : 0.5 }, i = [], o = 0, r = new google.maps.MarkerImage(base + 'easygym/img/contact--map--icon.png', new google.maps.Size(33, 47), new google.maps.Point(0, 0), new google.maps.Point(19, 62)), s = function(e, t, n, i, o){
          if (n >= t) {
            return o(e, i);
          } z = google.maps.event.addListener(e.canvas, 'zoom_changed', function(r){
            google.maps.event.removeListener(z), s(e, t, n + 1, i, o);
          }), setTimeout(function(){
            e.canvas.setZoom(n);
          }, 80);
        }, a = function(e){
          for (var t = 0; t < gymsJSON.length; t++){
            var n = gymsJSON[t]; n.hasOwnProperty('GymLocation') && n.GymLocation.lat && n.GymLocation.long && n.GymLocation.slug == e && l(n.GymLocation);
          }
        }, l = function(e){
          setTimeout(function(){
            for (var t = 0; t < i.length; t++){
              e.slug == i[t].pin.customInfo.slug && (n.centre = new google.maps.LatLng(e.lat, e.long), n.canvas.panTo(n.centre), f(i[t].pin), s(n, 13, n.canvas.getZoom(), i[t], function(e, t){
                t.infobox.box.open(e.canvas, t.pin), f(t.pin);
              }));
            }
          }, 500);
        }, c = function(t){
          var n = t.coords, i = n.latitude, r = n.longitude; $.getJSON(base + 'gym_locations/nearest_gym?lat=' + i + '&long=' + r, function(t){
            clearInterval(o), $('.js-closest-location').addClass('-show'), $('.js-loading-geolocation').removeClass('-show'), $('.js-home-map-expand').removeClass('-hide'), $('.js-home-map-overlay').addClass('-hide'), e == 'home' && l(t);
          });
        }, u = function(){
          var t, o; if (e == 'home' && n.obj !== null && n.obj.hasOwnProperty('GymLocation')){
            n.centre = new google.maps.LatLng(n.obj.GymLocation.lat, n.obj.GymLocation.long, n.zoom), n.options = { center: n.centre, zoom: n.zoom, scrollwheel: !1, styles: [{ featureType: 'administrative', elementType: 'geometry', stylers: [{ saturation: '2' }, { visibility: 'simplified' }] }, { featureType: 'administrative', elementType: 'labels', stylers: [{ saturation: '-28' }, { lightness: '-10' }, { visibility: 'on' }] }, { featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#444444' }] }, { featureType: 'administrative.country', elementType: 'labels.text', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.province', elementType: 'labels.text', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.locality', elementType: 'labels.text', stylers: [{ visibility: 'on' }] }, { featureType: 'landscape', elementType: 'all', stylers: [{ color: '#f2f2f2' }] }, { featureType: 'landscape', elementType: 'geometry.fill', stylers: [{ saturation: '-1' }, { lightness: '-12' }] }, { featureType: 'landscape.natural', elementType: 'labels.text', stylers: [{ lightness: '-31' }] }, { featureType: 'landscape.natural', elementType: 'labels.text.fill', stylers: [{ lightness: '-74' }] }, { featureType: 'landscape.natural', elementType: 'labels.text.stroke', stylers: [{ lightness: '65' }] }, { featureType: 'landscape.natural.landcover', elementType: 'geometry', stylers: [{ lightness: '-15' }] }, { featureType: 'landscape.natural.landcover', elementType: 'geometry.fill', stylers: [{ lightness: '0' }] }, { featureType: 'poi', elementType: 'all', stylers: [{ visibility: 'off' }] }, { featureType: 'road', elementType: 'all', stylers: [{ saturation: -100 }, { lightness: 45 }] }, { featureType: 'road', elementType: 'geometry', stylers: [{ visibility: 'on' }, { saturation: '0' }, { lightness: '-9' }] }, { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ lightness: '-14' }] }, { featureType: 'road', elementType: 'labels', stylers: [{ lightness: '-35' }, { gamma: '1' }, { weight: '1.39' }] }, { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ lightness: '-19' }] }, { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ lightness: '46' }] }, { featureType: 'road.highway', elementType: 'all', stylers: [{ visibility: 'simplified' }] }, { featureType: 'road.highway', elementType: 'labels.icon', stylers: [{ lightness: '-13' }, { weight: '1.23' }, { invert_lightness: !0 }, { visibility: 'simplified' }, { hue: '#ff0000' }] }, { featureType: 'road.arterial', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { featureType: 'transit', elementType: 'all', stylers: [{ visibility: 'off' }] }, { featureType: 'transit.station.rail', stylers: [{ visibility: 'on' }] }, { featureType: 'water', elementType: 'all', stylers: [{ color: '#adadad' }, { visibility: 'on' }] }, { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#8d969d' }] }] }, n.canvas = new google.maps.Map(document.getElementById('js-google-map'), n.options), o = new google.maps.KmlLayer({ url: base + 'easygym/tube.kml' }), o.setMap(n.canvas), i = []; for (var s = 0; s < gymsJSON.length; s++){
              var a = gymsJSON[s]; a.hasOwnProperty('GymLocation') && a.GymLocation.lat && a.GymLocation.long && (marker = { pin: new google.maps.Marker({ position: new google.maps.LatLng(a.GymLocation.lat, a.GymLocation.long), map: n.canvas, icon: r, customInfo: { slug: a.GymLocation.slug }}), infobox: { options: { width: '270px', offset: new google.maps.Size(-138, 7), html: '<div class="infoBox__inner infoBox__inner--current"><div class="infoBox__info"><i class="svg-info">Info icon</i><h3>' + a.GymLocation.title + '</h3><hr /><span>' + a.GymLocation.address + '</span><a href="' + base + 'locations/' + a.GymLocation.slug + '" class="btn -small -reverse -empty">Find out more</a></div></div>' }}}, i.push(marker), i[s].infobox.box = new InfoBox({ content: marker.infobox.options.html, position: marker.pin.getPosition(), map: n.canvas, html: marker.infobox.options.html, alignBottom: !0, pixelOffset: marker.infobox.options.offset, boxStyle: { width: marker.infobox.options.width }, closeBoxURL: 'data:image/svg+xml;charset=US-ASCII,<%3Fxml%20version%3D"1.0"%20encoding%3D"utf-8"%3F><!DOCTYPE%20svg%20PUBLIC%20"-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN"%20"http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd"><svg%20version%3D"1.1"%20id%3D"Layer_1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20xmlns%3Axlink%3D"http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink"%20x%3D"0px"%20y%3D"0px"%20%20width%3D"200px"%20height%3D"200px"%20viewBox%3D"0%200%20200%20200"%20enable-background%3D"new%200%200%20200%20200"%20xml%3Aspace%3D"preserve">%20<path%20d%3D"M198.413%2C158.098c0.878%2C1.231%2C1.317%2C2.371%2C1.317%2C3.426s-0.439%2C2.199-1.317%2C3.426l-33.464%2C33.464%20%20c-1.231%2C0.882-2.371%2C1.317-3.426%2C1.317s-2.199-0.435-3.426-1.317l-58.233-58.233l-58.233%2C58.233%20%20c-1.231%2C0.882-2.371%2C1.317-3.426%2C1.317s-2.199-0.435-3.426-1.317L1.317%2C164.95C0.435%2C163.723%2C0%2C162.578%2C0%2C161.524%20%20s0.435-2.195%2C1.317-3.426L59.55%2C99.865L1.317%2C41.632C0.435%2C40.405%2C0%2C39.261%2C0%2C38.207s0.435-2.195%2C1.317-3.426L34.781%2C1.317%20%20C36.008%2C0.439%2C37.152%2C0%2C38.207%2C0s2.195%2C0.439%2C3.426%2C1.317L99.865%2C59.55l58.233-58.233C159.325%2C0.439%2C160.47%2C0%2C161.524%2C0%20%20s2.195%2C0.439%2C3.426%2C1.317l33.464%2C33.464c0.878%2C1.231%2C1.317%2C2.371%2C1.317%2C3.426s-0.439%2C2.199-1.317%2C3.426l-58.233%2C58.233%20%20L198.413%2C158.098z"%20fill%3D"%23FFFFFF"%20%2F><%2Fsvg>' }), google.maps.event.addListener(marker.pin, 'click', p), i[s].infobox.box.close(n.canvas, marker.pin), google.maps.event.addListener(marker.pin, 'click', d(marker, s)));
            }
          }e == 'gym_location' && n.obj !== null && n.obj.hasOwnProperty('GymLocation') && (n.centre = new google.maps.LatLng(n.obj.GymLocation.lat, n.obj.GymLocation.long, n.zoom), n.options = { center: n.centre, zoom: n.zoom, scrollwheel: !1, styles: [{ featureType: 'administrative', elementType: 'geometry', stylers: [{ saturation: '2' }, { visibility: 'simplified' }] }, { featureType: 'administrative', elementType: 'labels', stylers: [{ saturation: '-28' }, { lightness: '-10' }, { visibility: 'on' }] }, { featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#444444' }] }, { featureType: 'administrative.country', elementType: 'labels.text', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.province', elementType: 'labels.text', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.locality', elementType: 'labels.text', stylers: [{ visibility: 'on' }] }, { featureType: 'landscape', elementType: 'all', stylers: [{ color: '#f2f2f2' }] }, { featureType: 'landscape', elementType: 'geometry.fill', stylers: [{ saturation: '-1' }, { lightness: '-12' }] }, { featureType: 'landscape.natural', elementType: 'labels.text', stylers: [{ lightness: '-31' }] }, { featureType: 'landscape.natural', elementType: 'labels.text.fill', stylers: [{ lightness: '-74' }] }, { featureType: 'landscape.natural', elementType: 'labels.text.stroke', stylers: [{ lightness: '65' }] }, { featureType: 'landscape.natural.landcover', elementType: 'geometry', stylers: [{ lightness: '-15' }] }, { featureType: 'landscape.natural.landcover', elementType: 'geometry.fill', stylers: [{ lightness: '0' }] }, { featureType: 'poi', elementType: 'all', stylers: [{ visibility: 'off' }] }, { featureType: 'road', elementType: 'all', stylers: [{ saturation: -100 }, { lightness: 45 }] }, { featureType: 'road', elementType: 'geometry', stylers: [{ visibility: 'on' }, { saturation: '0' }, { lightness: '-9' }] }, { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ lightness: '-14' }] }, { featureType: 'road', elementType: 'labels', stylers: [{ lightness: '-35' }, { gamma: '1' }, { weight: '1.39' }] }, { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ lightness: '-19' }] }, { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ lightness: '46' }] }, { featureType: 'road.highway', elementType: 'all', stylers: [{ visibility: 'simplified' }] }, { featureType: 'road.highway', elementType: 'labels.icon', stylers: [{ lightness: '-13' }, { weight: '1.23' }, { invert_lightness: !0 }, { visibility: 'simplified' }, { hue: '#ff0000' }] }, { featureType: 'road.arterial', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { featureType: 'transit', elementType: 'all', stylers: [{ visibility: 'off' }] }, { featureType: 'transit.station.rail', stylers: [{ visibility: 'on' }] }, { featureType: 'water', elementType: 'all', stylers: [{ color: '#adadad' }, { visibility: 'on' }] }, { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#8d969d' }] }] }, n.canvas = new google.maps.Map(document.getElementById('js-google-map'), n.options), t = { pin: new google.maps.Marker({ position: n.centre, map: n.canvas, icon: r }), infobox: { options: { width: '240px', offset: new google.maps.Size(-123, 7), html: '<div class="infoBox__inner infoBox__inner--current"><div class="infoBox__info"><span>' + n.obj.GymLocation.address + '</span></div></div>' }}}, t.infobox.box = new InfoBox({ content: t.infobox.options.html, position: t.pin.getPosition(), map: n.canvas, html: t.infobox.options.html, alignBottom: !0, pixelOffset: t.infobox.options.offset, boxStyle: { width: t.infobox.options.width }, closeBoxURL: 'data:image/svg+xml;charset=US-ASCII,<%3Fxml%20version%3D"1.0"%20encoding%3D"utf-8"%3F><!DOCTYPE%20svg%20PUBLIC%20"-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN"%20"http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd"><svg%20version%3D"1.1"%20id%3D"Layer_1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20xmlns%3Axlink%3D"http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink"%20x%3D"0px"%20y%3D"0px"%20%20width%3D"200px"%20height%3D"200px"%20viewBox%3D"0%200%20200%20200"%20enable-background%3D"new%200%200%20200%20200"%20xml%3Aspace%3D"preserve">%20<path%20d%3D"M198.413%2C158.098c0.878%2C1.231%2C1.317%2C2.371%2C1.317%2C3.426s-0.439%2C2.199-1.317%2C3.426l-33.464%2C33.464%20%20c-1.231%2C0.882-2.371%2C1.317-3.426%2C1.317s-2.199-0.435-3.426-1.317l-58.233-58.233l-58.233%2C58.233%20%20c-1.231%2C0.882-2.371%2C1.317-3.426%2C1.317s-2.199-0.435-3.426-1.317L1.317%2C164.95C0.435%2C163.723%2C0%2C162.578%2C0%2C161.524%20%20s0.435-2.195%2C1.317-3.426L59.55%2C99.865L1.317%2C41.632C0.435%2C40.405%2C0%2C39.261%2C0%2C38.207s0.435-2.195%2C1.317-3.426L34.781%2C1.317%20%20C36.008%2C0.439%2C37.152%2C0%2C38.207%2C0s2.195%2C0.439%2C3.426%2C1.317L99.865%2C59.55l58.233-58.233C159.325%2C0.439%2C160.47%2C0%2C161.524%2C0%20%20s2.195%2C0.439%2C3.426%2C1.317l33.464%2C33.464c0.878%2C1.231%2C1.317%2C2.371%2C1.317%2C3.426s-0.439%2C2.199-1.317%2C3.426l-58.233%2C58.233%20%20L198.413%2C158.098z"%20fill%3D"%23FFFFFF"%20%2F><%2Fsvg>' }), google.maps.event.addListener(t.pin, 'click', p), t.infobox.box.close(n.canvas, t.pin), google.maps.event.addListener(t.pin, 'click', d(t)), setTimeout(function(){
            new google.maps.event.trigger(t.pin, 'click');
          }, 0)), e == 'contact' && n.obj !== null && n.obj.hasOwnProperty('GymLocation') && (n.centre = new google.maps.LatLng(n.obj.GymLocation.lat, n.obj.GymLocation.long, n.zoom), n.options = { center: n.centre, zoom: n.zoom, scrollwheel: !1, styles: [{ featureType: 'administrative', elementType: 'geometry', stylers: [{ saturation: '2' }, { visibility: 'simplified' }] }, { featureType: 'administrative', elementType: 'labels', stylers: [{ saturation: '-28' }, { lightness: '-10' }, { visibility: 'on' }] }, { featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#444444' }] }, { featureType: 'administrative.country', elementType: 'labels.text', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.province', elementType: 'labels.text', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.locality', elementType: 'labels.text', stylers: [{ visibility: 'on' }] }, { featureType: 'landscape', elementType: 'all', stylers: [{ color: '#f2f2f2' }] }, { featureType: 'landscape', elementType: 'geometry.fill', stylers: [{ saturation: '-1' }, { lightness: '-12' }] }, { featureType: 'landscape.natural', elementType: 'labels.text', stylers: [{ lightness: '-31' }] }, { featureType: 'landscape.natural', elementType: 'labels.text.fill', stylers: [{ lightness: '-74' }] }, { featureType: 'landscape.natural', elementType: 'labels.text.stroke', stylers: [{ lightness: '65' }] }, { featureType: 'landscape.natural.landcover', elementType: 'geometry', stylers: [{ lightness: '-15' }] }, { featureType: 'landscape.natural.landcover', elementType: 'geometry.fill', stylers: [{ lightness: '0' }] }, { featureType: 'poi', elementType: 'all', stylers: [{ visibility: 'off' }] }, { featureType: 'road', elementType: 'all', stylers: [{ saturation: -100 }, { lightness: 45 }] }, { featureType: 'road', elementType: 'geometry', stylers: [{ visibility: 'on' }, { saturation: '0' }, { lightness: '-9' }] }, { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ lightness: '-14' }] }, { featureType: 'road', elementType: 'labels', stylers: [{ lightness: '-35' }, { gamma: '1' }, { weight: '1.39' }] }, { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ lightness: '-19' }] }, { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ lightness: '46' }] }, { featureType: 'road.highway', elementType: 'all', stylers: [{ visibility: 'simplified' }] }, { featureType: 'road.highway', elementType: 'labels.icon', stylers: [{ lightness: '-13' }, { weight: '1.23' }, { invert_lightness: !0 }, { visibility: 'simplified' }, { hue: '#ff0000' }] }, { featureType: 'road.arterial', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { featureType: 'transit', elementType: 'all', stylers: [{ visibility: 'off' }] }, { featureType: 'transit.station.rail', stylers: [{ visibility: 'on' }] }, { featureType: 'water', elementType: 'all', stylers: [{ color: '#adadad' }, { visibility: 'on' }] }, { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#8d969d' }] }] }, n.canvas = new google.maps.Map(document.getElementById('js-google-map'), n.options), o = new google.maps.KmlLayer({ url: base + 'easygym/tube.kml' }), o.setMap(n.canvas), t = { pin: new google.maps.Marker({ position: n.centre, map: n.canvas, icon: r }), infobox: { options: { width: '240px', offset: new google.maps.Size(-123, 7), html: '<div class="infoBox__inner infoBox__inner--current"><div class="infoBox__info"><span>' + n.obj.GymLocation.address + '</span></div></div>' }}}, t.infobox.box = new InfoBox({
            content: t.infobox.options.html, position: t.pin.getPosition(), map: n.canvas, html: t.infobox.options.html, alignBottom: !0, pixelOffset: t.infobox.options.offset, boxStyle: { width: t.infobox.options.width }, closeBoxURL: 'data:image/svg+xml;charset=US-ASCII,<%3Fxml%20version%3D"1.0"%20encoding%3D"utf-8"%3F><!DOCTYPE%20svg%20PUBLIC%20"-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN"%20"http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd"><svg%20version%3D"1.1"%20id%3D"Layer_1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20xmlns%3Axlink%3D"http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink"%20x%3D"0px"%20y%3D"0px"%20%20width%3D"200px"%20height%3D"200px"%20viewBox%3D"0%200%20200%20200"%20enable-background%3D"new%200%200%20200%20200"%20xml%3Aspace%3D"preserve">%20<path%20d%3D"M198.413%2C158.098c0.878%2C1.231%2C1.317%2C2.371%2C1.317%2C3.426s-0.439%2C2.199-1.317%2C3.426l-33.464%2C33.464%20%20c-1.231%2C0.882-2.371%2C1.317-3.426%2C1.317s-2.199-0.435-3.426-1.317l-58.233-58.233l-58.233%2C58.233%20%20c-1.231%2C0.882-2.371%2C1.317-3.426%2C1.317s-2.199-0.435-3.426-1.317L1.317%2C164.95C0.435%2C163.723%2C0%2C162.578%2C0%2C161.524%20%20s0.435-2.195%2C1.317-3.426L59.55%2C99.865L1.317%2C41.632C0.435%2C40.405%2C0%2C39.261%2C0%2C38.207s0.435-2.195%2C1.317-3.426L34.781%2C1.317%20%20C36.008%2C0.439%2C37.152%2C0%2C38.207%2C0s2.195%2C0.439%2C3.426%2C1.317L99.865%2C59.55l58.233-58.233C159.325%2C0.439%2C160.47%2C0%2C161.524%2C0%20%20s2.195%2C0.439%2C3.426%2C1.317l33.464%2C33.464c0.878%2C1.231%2C1.317%2C2.371%2C1.317%2C3.426s-0.439%2C2.199-1.317%2C3.426l-58.233%2C58.233%20%20L198.413%2C158.098z"%20fill%3D"%23FFFFFF"%20%2F><%2Fsvg>' }), google.maps.event.addListener(t.pin, 'click', p), t.infobox.box.close(n.canvas, t.pin), google.maps.event.addListener(t.pin, 'click', d(t))), google.maps.event.addDomListener(window, 'resize', function(){
            n.canvas.setCenter(n.centre);
          });
        }, d = function(o, r){
          return function(){
            t = o, e == 'home' ? i[r].infobox.box.open(n.canvas, this) : e != 'contact' && e != 'gym_location' || o.infobox.box.open(n.canvas, this);
          };
        }, p = function(){
          $.each(i, function(e, t){
            t.infobox.box.close();
          });
        }, f = function(e){
          var t = { latitude: e.getPosition().lat() + n.defaultOffset, longitude: e.getPosition().lng() }; n.centre = new google.maps.LatLng(t.latitude, t.longitude), n.canvas.panTo(n.centre), n.canvas.panBy(0, -110);
        }, h = function(){
          if (!navigator.geolocation) {
            return !1;
          } var e = $('.js-closest-location').show(); e.length > 0 && $('.js-closest-location').click(function(t){
            t.preventDefault(), t.stopPropagation(), e.removeClass('-show'), $('.js-loading-geolocation').addClass('-show'); var n = 0; o = setInterval(function(){
              if (++n > 200) {
                return e.removeClass('loading'), alert('Could not find your location. Please check that you are on a wifi or cellular connection.'), !1;
              }
            }, 100), navigator.geolocation.getCurrentPosition(function(e){
              c(e);
            });
          });
        }; return { init: function(t){
        e = t;
      }, setup: function(e, t, i){
        n.obj = e, n.zoom = t, n.showInfoBox = i, u();
      }, setupGeolocation: function(){
        h();
      }, searchHomeMap: function(e){
        a(e);
      } };
    }()), Maps.init(pageName);
  });
}; var HeroCarousel = (function(){
  var e = $('.js-gym-view-hero-carousel'), t = $('.js-gym-view-hero-carousel .hero__slide'), n = $('.hero.-gym-view .hero__slide').size() - 1, i = -1, o = 0, r = null, s = function(){
      i = t.index(e.find('.hero__slide.-active')), o = i === 0 ? n : i - 1;
    }, a = function(){
      e.find('.hero__slide.-active').removeClass('-active'), e.find('.hero__slide').eq(o).addClass('-active'), e.find('.hero__slide.-active');
    }, l = function(){
      i = o, o = i === n ? 0 : i + 1;
    }; return { play: function(){
    r = setInterval(function(){
      HeroCarousel.gotoNextSlide();
    }, 4e3);
  }, pause: function(){
    clearInterval(r);
  }, gotoPrevSlide: function(){
    s(), a(), l();
  }, gotoNextSlide: function(){
    a(), l();
  } };
}()); $(function(){
  Site.init(pageName), Site.pageLoad();
});
