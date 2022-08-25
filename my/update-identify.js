(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/update-identify" ], {
    "09d9": function(n, e, o) {},
    3946: function(n, e, o) {
        o.d(e, "b", function() {
            return u;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {
            return t;
        });
        var t = {
            uIcon: function() {
                return o.e("uview-ui/components/u-icon/u-icon").then(o.bind(null, "3bc3"));
            },
            uCard: function() {
                return o.e("uview-ui/components/u-card/u-card").then(o.bind(null, "0a64"));
            },
            uForm: function() {
                return o.e("uview-ui/components/u-form/u-form").then(o.bind(null, "c2ee"));
            },
            uFormItem: function() {
                return Promise.all([ o.e("common/vendor"), o.e("uview-ui/components/u-form-item/u-form-item") ]).then(o.bind(null, "84d2"));
            },
            uInput: function() {
                return Promise.all([ o.e("common/vendor"), o.e("uview-ui/components/u-input/u-input") ]).then(o.bind(null, "eca1"));
            },
            uToast: function() {
                return o.e("uview-ui/components/u-toast/u-toast").then(o.bind(null, "1807"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "39dc": function(n, e, o) {
        o.r(e);
        var t = o("928f"), u = o.n(t);
        for (var a in t) "default" !== a && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(a);
        e.default = u.a;
    },
    "3e49": function(n, e, o) {
        (function(n) {
            o("42ef"), t(o("66fd"));
            var e = t(o("eec9"));
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, n(e.default);
        }).call(this, o("543d").createPage);
    },
    "928f": function(n, e, o) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = o("6cfa"), u = {
                components: {
                    LppUpload: function() {
                        Promise.all([ o.e("common/vendor"), o.e("components/lpp-upload/index") ]).then(function() {
                            return resolve(o("0d93"));
                        }.bind(null, o)).catch(o.oe);
                    }
                },
                data: function() {
                    return {
                        time: Date.now(),
                        userInfo: {
                            name: "**",
                            _class: "*****",
                            addrCode: "*******",
                            qrCode: "信息待绑定"
                        },
                        form: {
                            name: void 0,
                            idCardNum: void 0,
                            addrCode: void 0,
                            faceImage: void 0,
                            faceRecord: 1
                        },
                        rules: {},
                        uploadFaceUrl: "",
                        saveAndBack: "false"
                    };
                },
                onLoad: function(n) {
                    n.saveAndBack && (this.saveAndBack = n.saveAndBack), this.getQrcodeInfo();
                },
                onReady: function() {
                    this.$refs.uForm.setRules(this.rules);
                },
                watch: {
                    uploadFaceUrl: function(n, e) {
                        this.form.faceImage = n;
                    }
                },
                methods: {
                    goToTakePhoto: function() {
                        n.navigateTo({
                            url: "/pages/my/face-photography?paramName=uploadFaceUrl"
                        });
                    },
                    submitForm: function() {
                        var e = this;
                        this.$refs.uForm.validate(function(o) {
                            o && (n.showLoading({
                                title: "加载中",
                                mask: !0
                            }), (0, t.updateFaceImage)(e.form).then(function(o) {
                                if (0 == o.code) {
                                    if (e.$refs.uToast.show({
                                        title: "修改成功",
                                        type: "success",
                                        position: "top"
                                    }), "true" === e.saveAndBack) return void n.navigateBack({
                                        delta: 1
                                    });
                                    e.getQrcodeInfo();
                                }
                            }).catch(function(o) {
                                e.globalHttpErrorResponseHandler(o, function() {
                                    n.reLaunch({
                                        url: "/pages/index/index"
                                    });
                                }, e.$refs.uToast);
                            }).finally(function() {
                                n.hideLoading();
                            }));
                        });
                    },
                    getQrcodeInfo: function() {
                        var e = this;
                        (0, t.getQrCode)().then(function(o) {
                            0 == o.code && o.data && (n.setStorageSync("qrCodeObj", o.data), e.userInfo = o.data, 
                            Object.assign(e.form, e.userInfo));
                        }).catch(function(o) {
                            e.globalHttpErrorResponseHandler(o, function() {
                                n.reLaunch({
                                    url: "/pages/index/index"
                                });
                            }, e.$refs.uToast);
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, o("543d").default);
    },
    "98c5": function(n, e, o) {
        var t = o("09d9");
        o.n(t).a;
    },
    eec9: function(n, e, o) {
        o.r(e);
        var t = o("3946"), u = o("39dc");
        for (var a in u) "default" !== a && function(n) {
            o.d(e, n, function() {
                return u[n];
            });
        }(a);
        o("98c5");
        var i = o("f0c5"), r = Object(i.a)(u.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = r.exports;
    }
}, [ [ "3e49", "common/runtime", "common/vendor" ] ] ]);