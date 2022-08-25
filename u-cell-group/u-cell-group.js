(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-cell-group/u-cell-group" ], {
    4109: function(e, t, n) {
        n.d(t, "b", function() {
            return u;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var u = function() {
            var e = this, t = (e.$createElement, e._self._c, e.title ? e.__get_style([ e.titleStyle ]) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    s0: t
                }
            });
        }, o = [];
    },
    4121: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = {
            name: "u-cell-group",
            props: {
                title: {
                    type: String,
                    default: ""
                },
                border: {
                    type: Boolean,
                    default: !0
                },
                titleStyle: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                bgColor: {
                    type: String,
                    default: "transparent"
                }
            },
            data: function() {
                return {
                    index: 0
                };
            }
        };
        t.default = u;
    },
    7914: function(e, t, n) {},
    "87a1": function(e, t, n) {
        n.r(t);
        var u = n("4121"), o = n.n(u);
        for (var c in u) "default" !== c && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(c);
        t.default = o.a;
    },
    cc79: function(e, t, n) {
        var u = n("7914");
        n.n(u).a;
    },
    ffca: function(e, t, n) {
        n.r(t);
        var u = n("4109"), o = n("87a1");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("cc79");
        var l = n("f0c5"), a = Object(l.a)(o.default, u.b, u.c, !1, null, "556b7a8c", null, !1, u.a, void 0);
        t.default = a.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-cell-group/u-cell-group-create-component", {
    "uview-ui/components/u-cell-group/u-cell-group-create-component": function(e, t, n) {
        n("543d").createComponent(n("ffca"));
    }
}, [ [ "uview-ui/components/u-cell-group/u-cell-group-create-component" ] ] ]);