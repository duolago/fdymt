(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-loading/u-loading" ], {
    "2a3e": function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            name: "u-loading",
            props: {
                mode: {
                    type: String,
                    default: "circle"
                },
                color: {
                    type: String,
                    default: "#c7c7c7"
                },
                size: {
                    type: [ String, Number ],
                    default: "34"
                },
                show: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                cricleStyle: function() {
                    var e = {};
                    return e.width = this.size + "rpx", e.height = this.size + "rpx", "circle" == this.mode && (e.borderColor = "#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color ? this.color : "#c7c7c7")), 
                    e;
                }
            }
        };
        n.default = t;
    },
    "60d6": function(e, n, o) {
        o.r(n);
        var t = o("c823"), c = o("75fe");
        for (var u in c) "default" !== u && function(e) {
            o.d(n, e, function() {
                return c[e];
            });
        }(u);
        o("c8c1");
        var a = o("f0c5"), i = Object(a.a)(c.default, t.b, t.c, !1, null, "631ca2f1", null, !1, t.a, void 0);
        n.default = i.exports;
    },
    "75fe": function(e, n, o) {
        o.r(n);
        var t = o("2a3e"), c = o.n(t);
        for (var u in t) "default" !== u && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(u);
        n.default = c.a;
    },
    8169: function(e, n, o) {},
    c823: function(e, n, o) {
        o.d(n, "b", function() {
            return t;
        }), o.d(n, "c", function() {
            return c;
        }), o.d(n, "a", function() {});
        var t = function() {
            var e = this, n = (e.$createElement, e._self._c, e.show ? e.__get_style([ e.cricleStyle ]) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    s0: n
                }
            });
        }, c = [];
    },
    c8c1: function(e, n, o) {
        var t = o("8169");
        o.n(t).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-loading/u-loading-create-component", {
    "uview-ui/components/u-loading/u-loading-create-component": function(e, n, o) {
        o("543d").createComponent(o("60d6"));
    }
}, [ [ "uview-ui/components/u-loading/u-loading-create-component" ] ] ]);