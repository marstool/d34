(this.webpackJsonpwebscript = this.webpackJsonpwebscript || []).push([
    [0], {
        16: function(e, t, a) {},
        17: function(e, t, a) {},
        32: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(2),
                c = a.n(n),
                s = a(9),
                i = a.n(s),
                l = (a(16), a(3)),
                o = (a(17), a(18), a(19), a(20), a(21), a(22), a(23), a(24), a(10)),
                r = a(11),
                u = a(8),
                b = a(1),
                A = function(e) {
                    var t = e.language,
                        a = e.displayName,
                        c = e.value,
                        s = e.onChange,
                        i = Object(n.useState)(!0),
                        A = Object(l.a)(i, 2),
                        d = A[0],
                        j = A[1];
                    return Object(b.jsxs)("div", {
                        className: "editor-container ".concat(d ? "" : "collapsed"),
                        children: [Object(b.jsxs)("div", {
                            className: "editor-title",
                            children: [a, Object(b.jsx)("button", {
                                type: "button",
                                className: "expand-collapse-btn",
                                onClick: function() {
                                    return j((function(e) {
                                        return !e
                                    }))
                                },
                                children: Object(b.jsx)(r.a, {
                                    icon: d ? u.a : u.b
                                })
                            })]
                        }), Object(b.jsx)(o.Controlled, {
                            className: "code-mirror-wrapper",
                            onBeforeChange: function(e, t, a) {
                                s(a)
                            },
                            value: c,
                            options: {
                                lineNumbers: !0,
                                lint: !0,
                                theme: "twilight",
                                lineWrapping: !0,
                                mode: t,
                                autoCloseBrackets: !0,
                                autoCloseTags: !0
                            }
                        })]
                    })
                };

            function d(e, t) {
                var a = "webscript" + e,
                    c = Object(n.useState)((function() {
                        var e = localStorage.getItem(a);
                        return null != e ? JSON.parse(e) : "function" === typeof t ? t() : t
                    })),
                    s = Object(l.a)(c, 2),
                    i = s[0],
                    o = s[1];
                return Object(n.useEffect)((function() {
                    localStorage.setItem(a, JSON.stringify(i))
                }), [a, i]), [i, o]
            }
            var j = function() {
                return Object(b.jsx)("div", {
                    className: "navbar-wrapper",
                    children: Object(b.jsx)("img", {
                        src: "data:image/png;base64,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",
                        alt: "AngleScript Logo"
                    })
                })
            };
            var p = function() {
                    var e = d("html", ""),
                        t = Object(l.a)(e, 2),
                        a = t[0],
                        c = t[1],
                        s = d("css", ""),
                        i = Object(l.a)(s, 2),
                        o = i[0],
                        r = i[1],
                        u = d("js", ""),
                        p = Object(l.a)(u, 2),
                        g = p[0],
                        C = p[1],
                        v = Object(n.useState)(""),
                        h = Object(l.a)(v, 2),
                        f = h[0],
                        O = h[1];
                    return Object(n.useEffect)((function() {
                        var e = setTimeout((function() {
                            O("\n      <html>\n      <body>".concat(a, "</body>\n      <style>").concat(o, "</style>\n      <script>").concat(g, "<\/script>\n      </html>\n      "))
                        }), 800);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), [a, o, g]), Object(b.jsxs)("div", {
                        className: "container",
                        children: [Object(b.jsx)(j, {}), Object(b.jsxs)("div", {
                            className: "pane top-pane",
                            children: [Object(b.jsx)(A, {
                                language: "xml",
                                displayName: "HHTML",
                                value: a,
                                onChange: c
                            }), Object(b.jsx)(A, {
                                language: "css",
                                displayName: "CSS",
                                value: o,
                                onChange: r
                            }), Object(b.jsx)(A, {
                                language: "javascript",
                                displayName: "JS",
                                value: g,
                                onChange: C
                            })]
                        }), Object(b.jsx)("div", {
                            className: "pane",
                            children: Object(b.jsx)("iframe", {
                                srcDoc: f,
                                title: "output",
                                sandbox: "allow-scripts allow-popups allow-popups-to-escape-sandbox allow-modals",
                                width: "100%",
                                height: "100%"
                            })
                        })]
                    })
                },
                g = function(e) {
                    e && e instanceof Function && a.e(3).then(a.bind(null, 33)).then((function(t) {
                        var a = t.getCLS,
                            n = t.getFID,
                            c = t.getFCP,
                            s = t.getLCP,
                            i = t.getTTFB;
                        a(e), n(e), c(e), s(e), i(e)
                    }))
                };
            i.a.render(Object(b.jsx)(c.a.StrictMode, {
                children: Object(b.jsx)(p, {})
            }), document.getElementById("root")), g()
        }
    },
    [
        [32, 1, 2]
    ]
]);
//# sourceMappingURL=main.ca5f7c94.chunk.js.map