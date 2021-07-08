(() => {
  'use strict';
  var e = {
      662: (e, t, n) => {
        n.d(t, { Z: () => a });
        var r = n(645),
          o = n.n(r)()(function (e) {
            return e[1];
          });
        o.push([e.id, 'h1 {\n  color: indigo;\n}\n', '']);
        const a = o;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n;
              }).join('');
            }),
            (t.i = function (e, n, r) {
              'string' == typeof e && (e = [[null, e, '']]);
              var o = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var i = this[a][0];
                  null != i && (o[i] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                (r && o[s[0]]) ||
                  (n &&
                    (s[2]
                      ? (s[2] = ''.concat(n, ' and ').concat(s[2]))
                      : (s[2] = n)),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      695: (e) => {
        var t = {};
        e.exports = function (e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              u = r.base ? s[0] + r.base : s[0],
              d = a[u] || 0,
              f = ''.concat(u, ' ').concat(d);
            a[u] = d + 1;
            var l = n(f),
              p = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== l
              ? (t[l].references++, t[l].updater(p))
              : t.push({ identifier: f, updater: o(p, r), references: 1 }),
              i.push(f);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = n(a[i]);
              t[c].references--;
            }
            for (var s = r(e, o), u = 0; u < a.length; u++) {
              var d = n(a[u]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            a = s;
          };
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t), t;
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = n.css,
                  o = n.media,
                  a = n.sourceMap;
                o ? e.setAttribute('media', o) : e.removeAttribute('media'),
                  a &&
                    'undefined' != typeof btoa &&
                    (r +=
                      '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        ' */'
                      )),
                  t.styleTagTransform(r, e);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        a = n(695),
        i = n.n(a),
        c = n(216),
        s = n.n(c),
        u = n(662),
        d = {
          styleTagTransform: function (e, t) {
            if (t.styleSheet) t.styleSheet.cssText = e;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(e));
            }
          },
          setAttributes: function (e) {
            var t = n.nc;
            t && e.setAttribute('nonce', t);
          },
          insert: function (e) {
            var t = i()('head');
            if (!t)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            t.appendChild(e);
          },
        };
      (d.domAPI = o()), (d.insertStyleElement = s());
      t()(u.Z, d);
      u.Z && u.Z.locals && u.Z.locals;
      !(function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 'sin nombre';
        console.log('Creando etiqueta h1');
        var t = document.createElement('h1');
        (t.innerText = 'Hola '.concat(e)), document.body.append(t);
      })('Oscar');
    })();
})();
