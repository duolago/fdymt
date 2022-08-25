(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/face-photography" ], {
    "07d0": function(n, t, e) {
        var a = e("3390");
        e.n(a).a;
    },
    1744: function(n, t, e) {
        (function(n) {
            e("42ef"), a(e("66fd"));
            var t = a(e("ff16"));
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    3390: function(n, t, e) {},
    5906: function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = e("a8b4"), i = {
                data: function() {
                    return {
                        src: "",
                        devicePosition: "front",
                        paramName: "",
                        isTemp: !1
                    };
                },
                onLoad: function(n) {
                    this.paramName = n.paramName, this.isTemp = n.isTemp;
                },
                methods: {
                    callback: function(n) {
                        var t = getCurrentPages();
                        (t[t.length - 1], t[t.length - 2]).$vm[this.paramName] = n;
                    },
                    confirmPhoto: function(t) {
                        var e = this;
                        if (t) {
                            if (!this.paramName) return;
                            n.compressImage({
                                src: this.src,
                                quality: 70,
                                success: function(t) {
                                    n.showLoading({
                                        mask: !1,
                                        title: "图片上传中"
                                    }), e.isTemp ? (0, a.uploadImageTemporary)(t.tempFilePath).then(function(t) {
                                        e.callback(t.data), n.navigateBack({
                                            delta: 1
                                        });
                                    }).finally(function() {
                                        n.hideLoading();
                                    }) : (0, a.uploadFaces2)(t.tempFilePath).then(function(t) {
                                        e.callback(t.data[0]), n.navigateBack({
                                            delta: 1
                                        });
                                    }).finally(function() {
                                        n.hideLoading();
                                    });
                                }
                            });
                        } else this.src = "";
                    },
                    changeDevicePosition: function() {
                        this.devicePosition = "front" === this.devicePosition ? "back" : "front";
                    },
                    takePhoto: function() {
                        var t = this;
                        n.createCameraContext().takePhoto({
                            quality: "high",
                            success: function(n) {
                                t.src = n.tempImagePath;
                            }
                        });
                    },
                    error: function(t) {
                        n.showToast({
                            title: "未授权摄像权限，请在设置中开启！",
                            icon: "none",
                            duration: 3e3
                        });
                    },
                    handleCameraError: function() {
                        n.showToast({
                            title: "用户拒绝使用摄像头",
                            icon: "none"
                        });
                    }
                }
            };
            t.default = i;
        }).call(this, e("543d").default);
    },
    c088: function(n, t, e) {
        e.d(t, "b", function() {
            return i;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {
            return a;
        });
        var a = {
            uIcon: function() {
                return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null, "3bc3"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    c8db: function(n, t, e) {
        e.r(t);
        var a = e("5906"), i = e.n(a);
        for (var o in a) "default" !== o && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(o);
        t.default = i.a;
    },
    ff16: function(n, t, e) {
        e.r(t);
        var a = e("c088"), i = e("c8db");
        for (var o in i) "default" !== o && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(o);
        e("07d0");
        var c = e("f0c5"), u = Object(c.a)(i.default, a.b, a.c, !1, null, "617368a7", null, !1, a.a, void 0);
        t.default = u.exports;
    }
}, [ [ "1744", "common/runtime", "common/vendor" ] ] ]);