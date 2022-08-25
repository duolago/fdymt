(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-loadmore/u-loadmore" ], {
    "0371": function(t, e, o) {
        var n = o("b542");
        o.n(n).a;
    },
    "31e5": function(t, e, o) {
        o.r(e);
        var n = o("34bc"), u = o("9c00");
        for (var r in u) "default" !== r && function(t) {
            o.d(e, t, function() {
                return u[t];
            });
        }(r);
        o("0371");
        var i = o("f0c5"), a = Object(i.a)(u.default, n.b, n.c, !1, null, "0cb81791", null, !1, n.a, void 0);
        e.default = a.exports;
    },
    "34bc": function(t, e, o) {
        o.d(e, "b", function() {
            return u;
        }), o.d(e, "c", function() {
            return r;
        }), o.d(e, "a", function() {
            return n;
        });
        var n = {
            uLine: function() {
                return o.e("uview-ui/components/u-line/u-line").then(o.bind(null, "d55f"));
            },
            uLoading: function() {
                return o.e("uview-ui/components/u-loading/u-loading").then(o.bind(null, "60d6"));
            }
        }, u = function() {
            var t = this, e = (t.$createElement, t._self._c, t.$u.addUnit(t.height)), o = t.__get_style([ t.loadTextStyle ]);
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: e,
                    s0: o
                }
            });
        }, r = [];
    },
    "9c00": function(t, e, o) {
        o.r(e);
        var n = o("bc9c"), u = o.n(n);
        for (var r in n) "default" !== r && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = u.a;
    },
    b542: function(t, e, o) {},
    bc9c: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "u-loadmore",
            props: {
                bgColor: {
                    type: String,
                    default: "transparent"
                },
                icon: {
                    type: Boolean,
                    default: !0
                },
                fontSize: {
                    type: String,
                    default: "28"
                },
                color: {
                    type: String,
                    default: "#606266"
                },
                status: {
                    type: String,
                    default: "loadmore"
                },
                iconType: {
                    type: String,
                    default: "circle"
                },
                loadText: {
                    type: Object,
                    default: function() {
                        return {
                            loadmore: "加载更多",
                            loading: "正在加载...",
                            nomore: "没有更多了"
                        };
                    }
                },
                isDot: {
                    type: Boolean,
                    default: !1
                },
                iconColor: {
                    type: String,
                    default: "#b7b7b7"
                },
                marginTop: {
                    type: [ String, Number ],
                    default: 0
                },
                marginBottom: {
                    type: [ String, Number ],
                    default: 0
                },
                height: {
                    type: [ String, Number ],
                    default: "auto"
                }
            },
            data: function() {
                return {
                    dotText: "●"
                };
            },
            computed: {
                loadTextStyle: function() {
                    return {
                        color: this.color,
                        fontSize: this.fontSize + "rpx",
                        position: "relative",
                        zIndex: 1,
                        backgroundColor: this.bgColor
                    };
                },
                cricleStyle: function() {
                    return {
                        borderColor: "#e5e5e5 #e5e5e5 #e5e5e5 ".concat(this.circleColor)
                    };
                },
                flowerStyle: function() {
                    return {};
                },
                showText: function() {
                    return "loadmore" == this.status ? this.loadText.loadmore : "loading" == this.status ? this.loadText.loading : "nomore" == this.status && this.isDot ? this.dotText : this.loadText.nomore;
                }
            },
            methods: {
                loadMore: function() {
                    "loadmore" == this.status && this.$emit("loadmore");
                }
            }
        };
        e.default = n;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-loadmore/u-loadmore-create-component", {
    "uview-ui/components/u-loadmore/u-loadmore-create-component": function(t, e, o) {
        o("543d").createComponent(o("31e5"));
    }
}, [ [ "uview-ui/components/u-loadmore/u-loadmore-create-component" ] ] ]);