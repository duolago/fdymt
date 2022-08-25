(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/index" ], {
    "121d": function(n, e, t) {
        (function(n) {
            t("42ef"), u(t("66fd"));
            var e = u(t("cc67"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    3362: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = t("6cfa"), o = {
                data: function() {
                    return {
                        userInfo: {},
                        qrCodeObj: {},
                        loginInfo: {}
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    this.userInfo = n.getStorageSync("userInfo") || {
                        nickName: "未登录",
                        avatarUrl: ""
                    }, this.qrCodeObj = n.getStorageSync("qrCodeObj") || {}, this.loginInfo = n.getStorageSync("loginInfo") || {};
                },
                methods: {
                    logoutFuda: function() {
                        var e = this;
                        n.showModal({
                            content: "确认退出登录吗？",
                            success: function(t) {
                                t.confirm && (0, u.weChatUnbindFromAppletsByRJ)().then(function(t) {
                                    0 == t.code && (e.logoutRemoveStorage(), n.reLaunch({
                                        url: "/pages/index/index"
                                    }));
                                }).catch(function(t) {
                                    e.globalHttpErrorResponseHandler(t, function() {
                                        n.reLaunch({
                                            url: "/pages/index/index"
                                        });
                                    });
                                });
                            }
                        });
                    },
                    editIdentity: function() {
                        n.navigateTo({
                            url: "/pages/my/update-identify"
                        });
                    },
                    editHSJCQrCode: function() {
                        n.navigateTo({
                            url: "/pages/my/update-hsjc-code"
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, t("543d").default);
    },
    "55fc": function(n, e, t) {
        t.r(e);
        var u = t("3362"), o = t.n(u);
        for (var c in u) "default" !== c && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(c);
        e.default = o.a;
    },
    7991: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {
            return u;
        });
        var u = {
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "3bc3"));
            },
            uAvatar: function() {
                return t.e("uview-ui/components/u-avatar/u-avatar").then(t.bind(null, "ac45"));
            },
            uCard: function() {
                return t.e("uview-ui/components/u-card/u-card").then(t.bind(null, "0a64"));
            },
            uCellGroup: function() {
                return t.e("uview-ui/components/u-cell-group/u-cell-group").then(t.bind(null, "ffca"));
            },
            uCellItem: function() {
                return t.e("uview-ui/components/u-cell-item/u-cell-item").then(t.bind(null, "3e1d"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    8245: function(n, e, t) {
        var u = t("9482");
        t.n(u).a;
    },
    9482: function(n, e, t) {},
    cc67: function(n, e, t) {
        t.r(e);
        var u = t("7991"), o = t("55fc");
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        t("8245");
        var i = t("f0c5"), r = Object(i.a)(o.default, u.b, u.c, !1, null, "69243450", null, !1, u.a, void 0);
        e.default = r.exports;
    }
}, [ [ "121d", "common/runtime", "common/vendor" ] ] ]);