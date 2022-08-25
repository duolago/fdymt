var t = require("../@babel/runtime/helpers/typeof");

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "1c97": function(t, e, o) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = {
                globalData: {
                    statusBarHeight: 0,
                    navHeight: 0,
                    navigationBarHeight: 0
                },
                onLaunch: function() {
                    this.globalData.statusBarHeight = t.getSystemInfoSync().statusBarHeight;
                    var e = wx.getMenuButtonBoundingClientRect();
                    this.globalData.navigationBarHeight = e.height + 2 * (e.top - this.globalData.statusBarHeight), 
                    this.globalData.navHeight = this.globalData.navigationBarHeight + this.globalData.statusBarHeight;
                    var o = t.getUpdateManager();
                    o.onCheckForUpdate(function(e) {
                        e.hasUpdate && o.onUpdateReady(function(e) {
                            t.showModal({
                                title: "更新提示",
                                content: "发现新版本，是否重启应用?",
                                success: function(t) {
                                    t.confirm && o.applyUpdate();
                                }
                            });
                        });
                    }), o.onUpdateFailed(function(e) {
                        t.showModal({
                            title: "提示",
                            content: "新版小程序下载失败\n请自行退出程序，手动卸载本程序，再运行",
                            confirmText: "知道了"
                        });
                    });
                },
                onShow: function() {
                    console.log("App Show");
                },
                onHide: function() {
                    console.log("App Hide");
                }
            };
            e.default = o;
        }).call(this, o("543d").default);
    },
    3166: function(t, e, o) {
        var n = o("7620");
        o.n(n).a;
    },
    7031: function(t, e, o) {
        o.r(e);
        var n = o("91a6");
        for (var a in n) "default" !== a && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(a);
        o("3166");
        var r = o("f0c5"), i = Object(r.a)(n.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        e.default = i.exports;
    },
    7620: function(t, e, o) {},
    "91a6": function(t, e, o) {
        o.r(e);
        var n = o("1c97"), a = o.n(n);
        for (var r in n) "default" !== r && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = a.a;
    },
    fdc6: function(e, o, n) {
        (function(e, o) {
            n("42ef");
            var a = c(n("7031")), r = c(n("28c6")), i = c(n("6683")), l = n("e1cd"), u = c(n("66fd"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function f(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function s(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t;
            }
            function g() {
                e.removeStorageSync("loginInfo"), e.removeStorageSync("userInfo"), e.removeStorageSync("accessToken"), 
                e.removeStorageSync("addHealthConfigList"), e.removeStorageSync("lastSubmitHealthDataV2"), 
                e.removeStorageSync("msgDetailPageShowData");
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, u.default.use(r.default), u.default.prototype.EnvConfig = i.default, 
            u.default.prototype.$splitName = l.splitName, u.default.prototype.$getLabelByValue = l.getLabelByValue, 
            u.default.prototype.$getLByV = l.getLByV, u.default.prototype.hideStr = function(t, e, o) {
                if (!t) return t;
                var n = t.length - e - o, a = "", r = "";
                if (n > 0) {
                    for (var i = 0; i < n; i++) a += "*";
                    r = t.substring(0, e) + a + t.substring(t.length - o);
                } else 2 === t.length && (r = t.substring(0, e) + "*");
                return r;
            }, u.default.prototype.globalHttpErrorResponseHandler = function(t, o, n) {
                console.error("[GHERH]-" + JSON.stringify(t));
                var a = function(t) {
                    n ? n.show({
                        title: t,
                        type: "error",
                        position: "top"
                    }) : e.showToast({
                        title: t,
                        icon: "none"
                    });
                };
                404 == t.statusCode ? a("系统错误-[404]") : 500 == t.statusCode ? a("服务繁忙，请稍后再试-[500]") : t.errMsg && -1 != t.errMsg.indexOf("timeout") ? a("网络请求超时，请稍后再试") : t.data && 104 == t.data.code ? (g(), 
                o && o()) : t.data && t.data.msg ? a(t.data.msg || "请求错误") : a(t.errMsg);
            }, u.default.prototype.logoutRemoveStorage = function() {
                g();
            }, String.prototype.format = function(e) {
                var o = this;
                if (arguments.length > 0) if (1 == arguments.length && "object" == t(e)) {
                    for (var n in e) if (void 0 !== e[n]) {
                        var a = new RegExp("({" + n + "})", "g");
                        o = o.replace(a, e[n]);
                    }
                } else for (var r = 0; r < arguments.length; r++) if (void 0 !== arguments[r]) {
                    var i = new RegExp("({)" + r + "(})", "g");
                    o = o.replace(i, arguments[r]);
                }
                return o;
            }, u.default.config.productionTip = !1, a.default.mpType = "app";
            var d = new u.default(function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(o), !0).forEach(function(e) {
                        s(t, e, o[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : f(Object(o)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                    });
                }
                return t;
            }({}, a.default));
            o(d).$mount();
        }).call(this, n("543d").default, n("543d").createApp);
    }
}, [ [ "fdc6", "common/runtime", "common/vendor" ] ] ]);