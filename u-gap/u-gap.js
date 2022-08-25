(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-gap/u-gap" ], {
    "0918": function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
        var o = function() {
            var t = this, n = (t.$createElement, t._self._c, t.__get_style([ t.gapStyle ]));
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: n
                }
            });
        }, a = [];
    },
    "271c": function(t, n, e) {},
    7887: function(t, n, e) {
        e.r(n);
        var o = e("0918"), a = e("b513");
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        e("823c");
        var r = e("f0c5"), i = Object(r.a)(a.default, o.b, o.c, !1, null, "64d82f34", null, !1, o.a, void 0);
        n.default = i.exports;
    },
    "823c": function(t, n, e) {
        var o = e("271c");
        e.n(o).a;
    },
    b513: function(t, n, e) {
        e.r(n);
        var o = e("b976"), a = e.n(o);
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        n.default = a.a;
    },
    b976: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            name: "u-gap",
            props: {
                bgColor: {
                    type: String,
                    default: "transparent "
                },
                height: {
                    type: [ String, Number ],
                    default: 30
                },
                marginTop: {
                    type: [ String, Number ],
                    default: 0
                },
                marginBottom: {
                    type: [ String, Number ],
                    default: 0
                }
            },
            computed: {
                gapStyle: function() {
                    return {
                        backgroundColor: this.bgColor,
                        height: this.height + "rpx",
                        marginTop: this.marginTop + "rpx",
                        marginBottom: this.marginBottom + "rpx"
                    };
                }
            }
        };
        n.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-gap/u-gap-create-component", {
    "uview-ui/components/u-gap/u-gap-create-component": function(t, n, e) {
        e("543d").createComponent(e("7887"));
    }
}, [ [ "uview-ui/components/u-gap/u-gap-create-component" ] ] ]);