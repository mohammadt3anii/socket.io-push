(function () {/*
 MIT License (c) copyright 2010-2013 B Cavalier & J Hann */
    (function (p) {
        function R() {
        }

        function m(a, b) {
            return 0 == X.call(a).indexOf("[object " + b)
        }

        function G(a) {
            return a && "/" == a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a
        }

        function S(a, b) {
            var d, c, e, f;
            d = 1;
            c = a;
            "." == c.charAt(0) && (e = !0, c = c.replace(Y, function (a, b, c, e) {
                c && d++;
                return e || ""
            }));
            if (e) {
                e = b.split("/");
                f = e.length - d;
                if (0 > f)return a;
                e.splice(f, d);
                return e.concat(c || []).join("/")
            }
            return c
        }

        function H(a) {
            var b = a.indexOf("!");
            return{g: a.substr(b + 1), d: 0 <= b && a.substr(0, b)}
        }

        function M() {
        }

        function u(a, b) {
            M.prototype =
                a || N;
            var d = new M;
            M.prototype = N;
            for (var c in b)d[c] = b[c];
            return d
        }

        function A() {
            function a(a, b, d) {
                c.push([a, b, d])
            }

            function b(a, b) {
                for (var d, e = 0; d = c[e++];)(d = d[a]) && d(b)
            }

            var d, c, e;
            d = this;
            c = [];
            e = function (d, g) {
                a = d ? function (a) {
                    a && a(g)
                } : function (a, b) {
                    b && b(g)
                };
                e = R;
                b(d ? 0 : 1, g);
                b = R;
                c = k
            };
            this.A = function (b, c, e) {
                a(b, c, e);
                return d
            };
            this.h = function (a) {
                d.oa = a;
                e(!0, a)
            };
            this.e = function (a) {
                d.na = a;
                e(!1, a)
            };
            this.u = function (a) {
                b(2, a)
            }
        }

        function I(a) {
            return a instanceof A || a instanceof y
        }

        function v(a, b, d, c) {
            I(a) ? a.A(b, d,
                c) : b(a)
        }

        function B(a, b, d) {
            var c;
            return function () {
                0 <= --a && b && (c = b.apply(k, arguments));
                0 == a && d && d(c);
                return c
            }
        }

        function z() {
            var a, b;
            a = [].slice.call(arguments);
            m(a[0], "Object") && (b = a.shift(), b = J(b));
            return new y(a[0], a[1], a[2], b)
        }

        function J(a, b, d) {
            var c, e, f;
            if (a && (h.O(a), n = h.a(a), "preloads"in a && (c = new y(a.preloads, k, d, C, !0), h.K(function () {
                C = c
            })), f = (f = a.main) && String(f).split(Z)))return e = new A, e.A(b, d), a = f[1] ? function () {
                new y([f[1]], e.h, e.e)
            } : e.e, new y([f[0]], e.h, a), e
        }

        function y(a, b, d, c, e) {
            var f;
            f =
                h.j(n, k, [].concat(a), e);
            this.then = this.A = a = function (a, b) {
                v(f, function (b) {
                    a && a.apply(k, b)
                }, function (a) {
                    if (b)b(a); else throw a;
                });
                return this
            };
            this.next = function (a, b, c) {
                return new y(a, b, c, f)
            };
            this.config = J;
            (b || d) && a(b, d);
            h.K(function () {
                v(e || C, function () {
                    v(c, function () {
                        h.q(f)
                    }, d)
                })
            })
        }

        function T(a) {
            var b, d;
            b = a.id;
            b == k && (D !== k ? D = {G: "Multiple anonymous defines encountered"} : (b = h.$()) || (D = a));
            if (b != k) {
                d = l[b];
                b in l || (d = h.i(b, n), d = h.C(d.a, b), l[b] = d);
                if (!I(d))throw Error("duplicate define: " + b);
                d.ca = !1;
                h.D(d,
                    a)
            }
        }

        function O() {
            var a = h.X(arguments);
            T(a)
        }

        var n, w, E, x = p.document, P = x && (x.head || x.getElementsByTagName("head")[0]), $ = P && P.getElementsByTagName("base")[0] || null, U = {}, V = {}, K = {}, aa = "addEventListener"in p ? {} : {loaded: 1, complete: 1}, N = {}, X = N.toString, k, l = {}, L = {}, C = !1, D, W = /^\/|^[^:]+:\/\//, Y = /(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g, ba = /\/\*[\s\S]*?\*\/|\/\/.*?[\n\r]/g, ca = /require\s*\(\s*(["'])(.*?[^\\])\1\s*\)|[^\\]?(["'])/g, Z = /\s*,\s*/, Q, h;
        h = {m: function (a, b, d) {
            var c;
            a = S(a, b);
            if ("." == a.charAt(0))return a;
            c = H(a);
            a = (b = c.d) || c.g;
            a in d.c && (a = d.c[a].l || a);
            b && (0 > b.indexOf("/") && !(b in d.c) && (a = G(d.M) + "/" + b), a = a + "!" + c.g);
            return a
        }, j: function (a, b, d, c) {
            function e(b, c) {
                var d, f;
                d = h.m(b, g.id, a);
                if (!c)return d;
                f = H(d);
                if (!f.d)return d;
                d = l[f.d];
                f.g = "normalize"in d ? d.normalize(f.g, e, g.a) || "" : e(f.g);
                return f.d + "!" + f.g
            }

            function f(b, d, f) {
                var r;
                r = d && function (a) {
                    d.apply(k, a)
                };
                if (m(b, "String")) {
                    if (r)throw Error("require(id, callback) not allowed");
                    f = e(b, !0);
                    b = l[f];
                    if (!(f in l))throw Error("Module not resolved: " + f);
                    return(f =
                        I(b) && b.b) || b
                }
                v(h.q(h.j(a, g.id, b, c)), r, f)
            }

            var g;
            g = new A;
            g.id = b || "";
            g.aa = c;
            g.F = d;
            g.a = a;
            g.v = f;
            f.toUrl = function (b) {
                return h.i(e(b, !0), a).url
            };
            g.m = e;
            return g
        }, C: function (a, b, d) {
            var c, e, f;
            c = h.j(a, b, k, d);
            e = c.h;
            f = B(1, function (a) {
                c.p = a;
                try {
                    return h.R(c)
                } catch (b) {
                    c.e(b)
                }
            });
            c.h = function (a) {
                v(d || C, function () {
                    e(l[c.id] = L[c.url] = f(a))
                })
            };
            c.H = function (a) {
                v(d || C, function () {
                    c.b && (f(a), c.u(V))
                })
            };
            return c
        }, Q: function (a, b, d, c) {
            return h.j(a, d, k, c)
        }, Z: function (a) {
            return a.v
        }, I: function (a) {
            return a.b || (a.b = {})
        }, Y: function (a) {
            var b =
                a.r;
            b || (b = a.r = {id: a.id, uri: h.J(a), exports: h.I(a), config: function () {
                return a.a
            }}, b.b = b.exports);
            return b
        }, J: function (a) {
            return a.url || (a.url = h.B(a.v.toUrl(a.id), a.a))
        }, O: function (a) {
            var b, d, c, e, f;
            b = "curl";
            d = "define";
            c = e = p;
            if (a && (f = a.overwriteApi || a.la, b = a.apiName || a.ea || b, c = a.apiContext || a.da || c, d = a.defineName || a.ga || d, e = a.defineContext || a.fa || e, w && m(w, "Function") && (p.curl = w), w = null, E && m(E, "Function") && (p.define = E), E = null, !f)) {
                if (c[b] && c[b] != z)throw Error(b + " already exists");
                if (e[d] && e[d] != O)throw Error(d +
                    " already exists");
            }
            c[b] = z;
            e[d] = O
        }, a: function (a) {
            function b(a, b) {
                var d, c, g, q, s;
                for (s in a) {
                    g = a[s];
                    m(g, "String") && (g = {path: a[s]});
                    g.name = g.name || s;
                    q = e;
                    c = H(G(g.name));
                    d = c.g;
                    if (c = c.d)q = f[c], q || (q = f[c] = u(e), q.c = u(e.c), q.f = []), delete a[s];
                    c = g;
                    var l = b, F = void 0;
                    c.path = G(c.path || c.location || "");
                    l && (F = c.main || "./main", "." == F.charAt(0) || (F = "./" + F), c.l = S(F, c.name + "/"));
                    c.a = c.config;
                    c.a && (c.a = u(e, c.a));
                    c.P = d.split("/").length;
                    d ? (q.c[d] = c, q.f.push(d)) : q.n = h.N(g.path, e)
                }
            }

            function d(a) {
                var b = a.c;
                a.L = RegExp("^(" +
                    a.f.sort(function (a, c) {
                        return b[c].P - b[a].P
                    }).join("|").replace(/\/|\./g, "\\$&") + ")(?=\\/|$)");
                delete a.f
            }

            var c, e, f, g;
            "baseUrl"in a && (a.n = a.baseUrl);
            "main"in a && (a.l = a.main);
            "preloads"in a && (a.ma = a.preloads);
            "pluginPath"in a && (a.M = a.pluginPath);
            if ("dontAddFileExt"in a || a.k)a.k = RegExp(a.dontAddFileExt || a.k);
            c = n;
            e = u(c, a);
            e.c = u(c.c);
            f = a.plugins || {};
            e.plugins = u(c.plugins);
            e.t = u(c.t, a.t);
            e.s = u(c.s, a.s);
            e.f = [];
            b(a.packages, !0);
            b(a.paths, !1);
            for (g in f)a = h.m(g + "!", "", e), e.plugins[a.substr(0, a.length - 1)] =
                f[g];
            f = e.plugins;
            for (g in f)if (f[g] = u(e, f[g]), a = f[g].f)f[g].f = a.concat(e.f), d(f[g]);
            for (g in c.c)e.c.hasOwnProperty(g) || e.f.push(g);
            d(e);
            return e
        }, i: function (a, b) {
            var d, c, e, f;
            d = b.c;
            e = W.test(a) ? a : a.replace(b.L, function (a) {
                c = d[a] || {};
                f = c.a;
                return c.path || ""
            });
            return{a: f || n, url: h.N(e, b)}
        }, N: function (a, b) {
            var d = b.n;
            return d && !W.test(a) ? G(d) + "/" + a : a
        }, B: function (a, b) {
            return a + ((b || n).k.test(a) ? "" : ".js")
        }, ba: function (a, b, d) {
            var c = x.createElement("script");
            c.onload = c.onreadystatechange = function (d) {
                d = d || p.event;
                if ("load" == d.type || aa[c.readyState])delete K[a.id], c.onload = c.onreadystatechange = c.onerror = "", b()
            };
            c.onerror = function () {
                d(Error("Syntax or http error: " + a.url))
            };
            c.type = a.ia || "text/javascript";
            c.charset = "utf-8";
            c.async = !a.ka;
            c.src = a.url;
            K[a.id] = c;
            P.insertBefore(c, $);
            return c
        }, S: function (a) {
            var b = [], d;
            ("string" == typeof a ? a : a.toSource ? a.toSource() : a.toString()).replace(ba, "").replace(ca, function (a, e, f, g) {
                g ? d = d == g ? k : d : d || b.push(f);
                return""
            });
            return b
        }, X: function (a) {
            var b, d, c, e, f, g;
            f = a.length;
            c = a[f - 1];
            e = m(c, "Function") ? c.length : -1;
            2 == f ? m(a[0], "Array") ? d = a[0] : b = a[0] : 3 == f && (b = a[0], d = a[1]);
            !d && 0 < e && (g = !0, d = ["require", "exports", "module"].slice(0, e).concat(h.S(c)));
            return{id: b, p: d || [], w: 0 <= e ? c : function () {
                return c
            }, o: g}
        }, R: function (a) {
            var b;
            b = a.w.apply(a.o ? a.b : k, a.p);
            b === k && a.b && (b = a.r ? a.b = a.r.b : a.b);
            return b
        }, D: function (a, b) {
            a.w = b.w;
            a.o = b.o;
            a.F = b.p;
            h.q(a)
        }, q: function (a) {
            function b(a, b, c) {
                g[b] = a;
                c && t(a, b)
            }

            function d(b, c) {
                var d, e, f, g;
                d = B(1, function (a) {
                    e(a);
                    r(a, c)
                });
                e = B(1, function (a) {
                    t(a, c)
                });
                f = h.U(b,
                    a);
                (g = I(f) && f.b) && e(g);
                v(f, d, a.e, a.b && function (a) {
                    f.b && (a == U ? e(f.b) : a == V && d(f.b))
                })
            }

            function c() {
                a.h(g)
            }

            var e, f, g, l, n, t, r;
            g = [];
            f = a.F;
            l = f.length;
            0 == f.length && c();
            t = B(l, b, function () {
                a.H && a.H(g)
            });
            r = B(l, b, c);
            for (e = 0; e < l; e++)n = f[e], n in Q ? (r(Q[n](a), e, !0), a.b && a.u(U)) : n ? d(n, e) : r(k, e, !0);
            return a
        }, V: function (a) {
            h.J(a);
            h.ba(a, function () {
                var b = D;
                D = k;
                !1 !== a.ca && (!b || b.G ? a.e(Error(b && b.G || "define() missing or duplicated: " + a.url)) : h.D(a, b))
            }, a.e);
            return a
        }, U: function (a, b) {
            var d, c, e, f, g, k, p, t, r, m, q, s;
            d = b.m;
            c = b.aa;
            e = b.a || n;
            g = d(a);
            g in l ? k = g : (f = H(g), t = f.g, k = f.d || t, r = h.i(k, e));
            if (!(g in l))if (s = h.i(t, e).a, f.d)p = k; else if (p = s.moduleLoader || s.ja || s.loader || s.ha)t = k, k = p, r = h.i(p, e);
            k in l ? m = l[k] : r.url in L ? m = l[k] = L[r.url] : (m = h.C(s, k, c), m.url = h.B(r.url, r.a), l[k] = L[r.url] = m, h.V(m));
            k == p && (f.d && e.plugins[f.d] && (s = e.plugins[f.d]), q = new A, v(m, function (a) {
                var b, e, f;
                f = a.dynamic;
                t = "normalize"in a ? a.normalize(t, d, m.a) || "" : d(t);
                e = p + "!" + t;
                b = l[e];
                if (!(e in l)) {
                    b = h.Q(s, e, t, c);
                    f || (l[e] = b);
                    var g = function (a) {
                        f || (l[e] = a);
                        b.h(a)
                    };
                    g.resolve = g;
                    g.reject = g.error = b.e;
                    a.load(t, b.v, g, s)
                }
                q != b && v(b, q.h, q.e, q.u)
            }, q.e));
            return q || m
        }, $: function () {
            var a;
            if (!m(p.opera, "Opera"))for (var b in K)if ("interactive" == K[b].readyState) {
                a = b;
                break
            }
            return a
        }, W: function (a) {
            var b = 0, d, c;
            for (d = x && (x.scripts || x.getElementsByTagName("script")); d && (c = d[b++]);)if (a(c))return c
        }, T: function (a) {
            var b;
            (b = h.W(function (b) {
                if (b = b.getAttribute("data-curl-run"))a.l = b;
                return b
            })) && b.setAttribute("data-curl-run", "");
            return a
        }, K: function (a) {
            setTimeout(a, 0)
        }};
        Q =
        {require: h.Z, exports: h.I, module: h.Y};
        z.version = "0.8.1";
        z.config = J;
        O.amd = {plugins: !0, jQuery: !0, curl: "0.8.1"};
        n = {n: "", M: "curl/plugin", k: /\?|\.js\b/, t: {}, s: {}, plugins: {}, c: {}, L: /$^/};
        n = h.T(n);
        w = p.curl;
        E = p.define;
        w && m(w, "Object") || n.l ? (p.curl = k, J(w || n)) : h.O();
        l.curl = z;
        l["curl/_privileged"] = {core: h, cache: l, config: function () {
            return n
        }, _define: T, _curl: z, Promise: A}
    })(this.window || "undefined" != typeof global && global || this);
}).call(this);