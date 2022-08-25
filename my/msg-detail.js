(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/msg-detail" ], {
    "96d5": function(n, e, t) {
        (function(n) {
            t("42ef"), a(t("66fd"));
            var e = a(t("9a30"));
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    "9a30": function(n, e, t) {
        t.r(e);
        var a = t("c05f"), u = t("d4a5");
        for (var o in u) "default" !== o && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(o);
        var r = t("f0c5"), c = Object(r.a)(u.default, a.b, a.c, !1, null, "6c0834b8", null, !1, a.a, void 0);
        e.default = c.exports;
    },
    "9bf2": function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, t("6cfa");
            var a = {
                data: function() {
                    return {
                        msgObj: {}
                    };
                },
                onLoad: function(e) {
                    this.msgObj = n.getStorageSync("msgDetailPageShowData") || {};
                },
                methods: {}
            };
            e.default = a;
        }).call(this, t("543d").default);
    },
    c05f: function(n, e, t) {
        t.d(e, "b", function() {
            return u;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {
            return a;
        });
        var a = {
            uParse: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-parse/u-parse") ]).then(t.bind(null, "240c"));
            }
        }, u = function() {
            var n = this, e = (n.$createElement, n._self._c, n.$u.timeFormat(n.msgObj.updateTime || n.msgObj.time, "yyyy-mm-dd hh:MM:ss"));
            n.$mp.data = Object.assign({}, {
                $root: {
                    g0: e
                }
            });
        }, o = [];
    },
    d4a5: function(n, e, t) {
        t.r(e);
        var a = t("9bf2"), u = t.n(a);
        for (var o in a) "default" !== o && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(o);
        e.default = u.a;
    }
}, [ [ "96d5", "common/runtime", "common/vendor" ] ] ]);