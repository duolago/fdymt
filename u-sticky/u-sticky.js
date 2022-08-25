(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-sticky/u-sticky" ], {
    "096c": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "5f65": function(t, e, n) {
        n.r(e);
        var i = n("096c"), o = n("cdeb");
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        n("8909");
        var c = n("f0c5"), r = Object(c.a)(o.default, i.b, i.c, !1, null, "17daedf7", null, !1, i.a, void 0);
        e.default = r.exports;
    },
    8909: function(t, e, n) {
        var i = n("9d45");
        n.n(i).a;
    },
    "9d45": function(t, e, n) {},
    cdeb: function(t, e, n) {
        n.r(e);
        var i = n("d76e"), o = n.n(i);
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        e.default = o.a;
    },
    d76e: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "u-sticky",
                props: {
                    offsetTop: {
                        type: [ Number, String ],
                        default: 0
                    },
                    index: {
                        type: [ Number, String ],
                        default: ""
                    },
                    enable: {
                        type: Boolean,
                        default: !0
                    },
                    h5NavHeight: {
                        type: [ Number, String ],
                        default: 44
                    },
                    bgColor: {
                        type: String,
                        default: "#ffffff"
                    },
                    zIndex: {
                        type: [ Number, String ],
                        default: ""
                    }
                },
                data: function() {
                    return {
                        fixed: !1,
                        height: "auto",
                        stickyTop: 0,
                        elClass: this.$u.guid(),
                        left: 0,
                        width: "auto"
                    };
                },
                watch: {
                    offsetTop: function(t) {
                        this.initObserver();
                    },
                    enable: function(t) {
                        0 == t ? (this.fixed = !1, this.disconnectObserver("contentObserver")) : this.initObserver();
                    }
                },
                computed: {
                    uZIndex: function() {
                        return this.zIndex ? this.zIndex : this.$u.zIndex.sticky;
                    }
                },
                mounted: function() {
                    this.initObserver();
                },
                methods: {
                    initObserver: function() {
                        var e = this;
                        this.enable && (this.stickyTop = 0 != this.offsetTop ? t.upx2px(this.offsetTop) : 0, 
                        this.disconnectObserver("contentObserver"), this.$uGetRect("." + this.elClass).then(function(t) {
                            e.height = t.height, e.left = t.left, e.width = t.width, e.$nextTick(function() {
                                e.observeContent();
                            });
                        }));
                    },
                    observeContent: function() {
                        var t = this;
                        this.disconnectObserver("contentObserver");
                        var e = this.createIntersectionObserver({
                            thresholds: [ .95, .98, 1 ]
                        });
                        e.relativeToViewport({
                            top: -this.stickyTop
                        }), e.observe("." + this.elClass, function(e) {
                            t.enable && t.setFixed(e.boundingClientRect.top);
                        }), this.contentObserver = e;
                    },
                    setFixed: function(t) {
                        var e = t < this.stickyTop;
                        e ? this.$emit("fixed", this.index) : this.fixed && this.$emit("unfixed", this.index), 
                        this.fixed = e;
                    },
                    disconnectObserver: function(t) {
                        var e = this[t];
                        e && e.disconnect();
                    }
                },
                beforeDestroy: function() {
                    this.disconnectObserver("contentObserver");
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-sticky/u-sticky-create-component", {
    "uview-ui/components/u-sticky/u-sticky-create-component": function(t, e, n) {
        n("543d").createComponent(n("5f65"));
    }
}, [ [ "uview-ui/components/u-sticky/u-sticky-create-component" ] ] ]);