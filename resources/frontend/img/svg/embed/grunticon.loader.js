/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */

!(function(){
  function e(e, n, t, o){
    'use strict'; var r = window.document.createElement('link'), a = n || window.document.getElementsByTagName('script')[0], i = window.document.styleSheets; return r.rel = 'stylesheet', r.href = e, r.media = 'only x', o && (r.onload = o), a.parentNode.insertBefore(r, a), r.onloadcssdefined = function(n){
      for (var t, o = 0; o < i.length; o++){
        i[o].href && i[o].href.indexOf(e) > -1 && (t = !0);
      }t ? n() : setTimeout(function(){
        r.onloadcssdefined(n);
      });
    }, r.onloadcssdefined(function(){
      r.media = t || 'all';
    }), r;
  } function n(e, n){
    e.onload = function(){
      e.onload = null, n && n.call(e);
    }, 'isApplicationInstalled' in navigator && 'onloadcssdefined' in e && e.onloadcssdefined(n);
  }!(function(t){
    var o = function(r, a){
      'use strict'; if (r && r.length === 3){
        var i = t.navigator, c = t.document, d = t.Image, s = !(!c.createElementNS || !c.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect || !c.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1') || t.opera && i.userAgent.indexOf('Chrome') === -1 || i.userAgent.indexOf('Series40') !== -1), l = new d(); l.onerror = function(){
          o.method = 'png', o.href = r[2], e(r[2]);
        }, l.onload = function(){
          var t = l.width === 1 && l.height === 1, i = r[t && s ? 0 : t ? 1 : 2]; t && s ? o.method = 'svg' : t ? o.method = 'datapng' : o.method = 'png', o.href = i, n(e(i), a);
        }, l.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', c.documentElement.className += ' grunticon';
      }
    }; o.loadCSS = e, o.onloadCSS = n, t.grunticon = o;
  }(this)), (function(e, n){
    'use strict'; var t = n.document, o = 'grunticon:', r = function(e){
        if (t.attachEvent ? t.readyState === 'complete' : t.readyState !== 'loading'){
          e();
        } else {
          var n = !1; t.addEventListener('readystatechange', function(){
            n || (n = !0, e());
          }, !1);
        }
      }, a = function(e){
        return n.document.querySelector('link[href$="' + e + '"]');
      }, i = function(e){
        var n, t, r, a, i, c, d = {}; if (n = e.sheet, !n) {
          return d;
        } t = n.cssRules ? n.cssRules : n.rules; for (var s = 0; s < t.length; s++){
          r = t[s].cssText, a = o + t[s].selectorText, i = r.split(');')[0].match(/US\-ASCII\,([^"']+)/), i && i[1] && (c = decodeURIComponent(i[1]), d[a] = c);
        } return d;
      }, c = function(e){
        var n, r, a, i; a = 'data-grunticon-embed'; for (var c in e){
          i = c.slice(o.length); try {
            n = t.querySelectorAll(i);
          } catch (d){
            continue;
          }r = []; for (var s = 0; s < n.length; s++){
            n[s].getAttribute(a) !== null && r.push(n[s]);
          } if (r.length) {
            for (s = 0; s < r.length; s++){
              r[s].innerHTML = e[c], r[s].style.backgroundImage = 'none', r[s].removeAttribute(a);
            }
          }
        } return r;
      }, d = function(n){
        e.method === 'svg' && r(function(){
          c(i(a(e.href))), typeof n === 'function' && n();
        });
      }; e.embedIcons = c, e.getCSS = a, e.getIcons = i, e.ready = r, e.svgLoadedCallback = d, e.embedSVG = d;
  }(grunticon, this));
}());
