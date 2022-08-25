(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/add-yqmp" ], {
    "15b1": function(e, n, t) {
        (function(e) {
            t("42ef"), u(t("66fd"));
            var n = u(t("e5b9"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    "8f8c": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return i;
        }), t.d(n, "a", function() {
            return u;
        });
        var u = {
            uForm: function() {
                return t.e("uview-ui/components/u-form/u-form").then(t.bind(null, "c2ee"));
            },
            uFormItem: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-form-item/u-form-item") ]).then(t.bind(null, "84d2"));
            },
            uInput: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-input/u-input") ]).then(t.bind(null, "eca1"));
            },
            uRadioGroup: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-radio-group/u-radio-group") ]).then(t.bind(null, "801b"));
            },
            uRadio: function() {
                return t.e("uview-ui/components/u-radio/u-radio").then(t.bind(null, "eb6f"));
            },
            uniDatetimePicker: function() {
                return Promise.all([ t.e("common/vendor"), t.e("components/uni-datetime-picker/uni-datetime-picker") ]).then(t.bind(null, "167d"));
            },
            uGap: function() {
                return t.e("uview-ui/components/u-gap/u-gap").then(t.bind(null, "7887"));
            },
            uSelect: function() {
                return t.e("uview-ui/components/u-select/u-select").then(t.bind(null, "7e0f"));
            },
            uToast: function() {
                return t.e("uview-ui/components/u-toast/u-toast").then(t.bind(null, "1807"));
            }
        }, o = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(n) {
                e.szSelector = !0;
            });
        }, i = [];
    },
    "962f": function(e, n, t) {},
    a822: function(e, n, t) {
        t.r(n);
        var u = t("e96e"), o = t.n(u);
        for (var i in u) "default" !== i && function(e) {
            t.d(n, e, function() {
                return u[e];
            });
        }(i);
        n.default = o.a;
    },
    e5b9: function(e, n, t) {
        t.r(n);
        var u = t("8f8c"), o = t("a822");
        for (var i in o) "default" !== i && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        t("eb8d");
        var r = t("f0c5"), a = Object(r.a)(o.default, u.b, u.c, !1, null, "55718e06", null, !1, u.a, void 0);
        n.default = a.exports;
    },
    e96e: function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var u = t("e34e"), o = {
                data: function() {
                    return {
                        list: [ {
                            value: "旗山校区",
                            label: "旗山校区"
                        }, {
                            value: "怡山校区",
                            label: "怡山校区"
                        }, {
                            value: "铜盘校区",
                            label: "铜盘校区"
                        }, {
                            value: "厦门校区",
                            label: "厦门校区"
                        }, {
                            value: "泉港校区",
                            label: "泉港校区"
                        }, {
                            value: "晋江校区",
                            label: "晋江校区"
                        } ],
                        form: {
                            inSchool: "是",
                            jzys: "绿色",
                            szdwfkq: "否",
                            lxspsx: "是",
                            ljlx: "居住"
                        },
                        rules: {
                            xiaoqu: [ {
                                required: !0,
                                message: "请选择所在校区",
                                trigger: "blur"
                            } ],
                            idNum: [ {
                                required: !0,
                                message: "请输入身份证号码",
                                trigger: "blur"
                            }, {
                                pattern: /(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                                message: "身份证号码不正确",
                                trigger: "blur"
                            } ]
                        },
                        submiting: !1,
                        szSelector: !1
                    };
                },
                onLoad: function(e) {
                    e.id && this.getDetails(e.id);
                },
                onReady: function() {
                    this.$refs.uForm.setRules(this.rules);
                },
                methods: {
                    getDetails: function(n) {
                        var t = this;
                        n && (e.showLoading({
                            mask: !0,
                            title: "加载中.."
                        }), (0, u.MPListPage)({
                            id: n
                        }).then(function(e) {
                            0 == e.code && e.data.list && e.data.list.length > 0 && (t.form = e.data.list[0], 
                            t.form.inSchool || (t.form.inSchool = "是"), t.form.jzys || (t.form.jzys = "绿色"), 
                            t.form.szdwfkq || (t.form.szdwfkq = "否"), t.form.lxspsx || (t.form.lxspsx = "是"), 
                            t.form.ljlx || (t.form.ljlx = "居住"));
                        }).catch(function(n) {
                            t.globalHttpErrorResponseHandler(n, function() {
                                e.reLaunch({
                                    url: "/pages/index/index"
                                });
                            }, t.$refs.uToast);
                        }).finally(function() {
                            e.hideLoading();
                        }));
                    },
                    confirm: function(e) {
                        this.form.xiaoqu = e[0].label;
                    },
                    submitForm: function() {
                        var n = this;
                        this.$refs.uForm.validate(function(t) {
                            t && (e.showLoading({
                                mask: !0,
                                title: "提交中"
                            }), n.submiting = !0, (0, u.addMP)(n.form).then(function(t) {
                                0 == t.code && (e.showToast({
                                    mask: !0,
                                    title: "提交成功",
                                    duration: 1500
                                }), n.successCallback());
                            }).catch(function(t) {
                                n.globalHttpErrorResponseHandler(t, function() {
                                    e.reLaunch({
                                        url: "/pages/index/index"
                                    });
                                }, n.$refs.uToast);
                            }).finally(function() {
                                n.submiting = !1, e.hideLoading();
                            }));
                        });
                    },
                    successCallback: function() {
                        var n = getCurrentPages();
                        "pages/my/yqmp-list" === n[n.length - 2].route ? e.redirectTo({
                            url: "/pages/my/yqmp-list"
                        }) : e.redirectTo({
                            url: "/pages/operate/success"
                        });
                    }
                }
            };
            n.default = o;
        }).call(this, t("543d").default);
    },
    eb8d: function(e, n, t) {
        var u = t("962f");
        t.n(u).a;
    }
}, [ [ "15b1", "common/runtime", "common/vendor" ] ] ]);