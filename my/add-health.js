(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/add-health" ], {
    "09e6": function(t, e, o) {
        o.r(e);
        var n = o("66fda"), i = o("420f");
        for (var a in i) "default" !== a && function(t) {
            o.d(e, t, function() {
                return i[t];
            });
        }(a);
        o("6348");
        var u = o("f0c5"), r = Object(u.a)(i.default, n.b, n.c, !1, null, "015acff0", null, !1, n.a, void 0);
        e.default = r.exports;
    },
    "420f": function(t, e, o) {
        o.r(e);
        var n = o("79ee"), i = o.n(n);
        for (var a in n) "default" !== a && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(a);
        e.default = i.a;
    },
    6348: function(t, e, o) {
        var n = o("931a");
        o.n(n).a;
    },
    "66fda": function(t, e, o) {
        o.d(e, "b", function() {
            return i;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {
            return n;
        });
        var n = {
            uIcon: function() {
                return o.e("uview-ui/components/u-icon/u-icon").then(o.bind(null, "3bc3"));
            },
            uForm: function() {
                return o.e("uview-ui/components/u-form/u-form").then(o.bind(null, "c2ee"));
            },
            uFormItem: function() {
                return Promise.all([ o.e("common/vendor"), o.e("uview-ui/components/u-form-item/u-form-item") ]).then(o.bind(null, "84d2"));
            },
            uRadioGroup: function() {
                return Promise.all([ o.e("common/vendor"), o.e("uview-ui/components/u-radio-group/u-radio-group") ]).then(o.bind(null, "801b"));
            },
            uRadio: function() {
                return o.e("uview-ui/components/u-radio/u-radio").then(o.bind(null, "eb6f"));
            },
            uInput: function() {
                return Promise.all([ o.e("common/vendor"), o.e("uview-ui/components/u-input/u-input") ]).then(o.bind(null, "eca1"));
            },
            uGap: function() {
                return o.e("uview-ui/components/u-gap/u-gap").then(o.bind(null, "7887"));
            },
            uToast: function() {
                return o.e("uview-ui/components/u-toast/u-toast").then(o.bind(null, "1807"));
            }
        }, i = function() {
            var t = this, e = (t.$createElement, t._self._c, t.$u.timeFormat(this.hForm.updateDatetime || this.hForm.addDatetime, "yyyy-mm-dd"));
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: e
                }
            });
        }, a = [];
    },
    "79ee": function(t, e, o) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o("e34e"), i = {
                data: function() {
                    return {
                        operaName: "",
                        curLocation: "重新定位",
                        locationObj: {
                            longitude: "",
                            latitude: ""
                        },
                        hForm: {},
                        exceptionAttrCount: 0,
                        auditUserId: void 0,
                        auditUserList: [],
                        isDis: !1
                    };
                },
                onLoad: function(t) {
                    this.getHealthyPage(t.id), this.getFirstOperator(), this.getLocation();
                },
                methods: {
                    regeo: function() {
                        var e = this, o = this.locationObj.longitude + "," + this.locationObj.latitude;
                        t.request({
                            url: this.EnvConfig.apiRootUrl + "/amap/geocode/regeo/?location=" + o,
                            success: function(t) {
                                1 == t.data.status && (e.curLocation = t.data.regeocode.addressComponent.city);
                            }
                        });
                    },
                    getLocation: function() {
                        var e = this;
                        "重新定位" === this.curLocation && (this.curLocation = "定位中..", t.getLocation({
                            type: "wgs84",
                            success: function(t) {
                                e.locationObj.longitude = t.longitude, e.locationObj.latitude = t.latitude, e.regeo();
                            },
                            fail: function(t) {
                                e.$refs.uToast.show({
                                    title: "权限不足或未打开定位设置！",
                                    type: "error",
                                    position: "top"
                                }), e.curLocation = "重新定位";
                            }
                        }));
                    },
                    getHealthyPage: function(t) {
                        var e = this;
                        (0, n.getHealthyPage)({
                            id: t
                        }).then(function(t) {
                            if (0 === t.code) {
                                var o = t.data.list[0];
                                o.dailyRelationResps.forEach(function(t, e) {
                                    t.contentValue = null === t.contentValue ? 0 : t.contentValue;
                                }), e.isDis = 6 === o.dailyStatus, e.hForm = o, console.log(e.hForm);
                            }
                        });
                    },
                    getFirstOperator: function() {
                        var e = this, o = t.getStorageSync("qrCodeObj"), i = o.areaId, a = {
                            roomIdentity: o.roomIdentity,
                            projectId: this.EnvConfig.fudaProjectId,
                            areaId: i,
                            templType: 2
                        };
                        (0, n.getFirstOperator)(a).then(function(t) {
                            e.operaName = t.data.firstNodeName, e.auditUserList = t.data.optionalOperators || [], 
                            e.auditUserId = e.auditUserList.length > 0 ? e.auditUserList[0].id : void 0, e.hForm.templId = t.data.templIdssss;
                        });
                    },
                    radioGroupChange: function(e) {
                        var o = this;
                        1 == e ? t.showModal({
                            content: '确认你选择"是"吗？',
                            confirmText: "是",
                            cancelText: "否",
                            success: function(t) {
                                console.log("单选提交~~~", o.form), o.exceptionAttrCount++;
                            }
                        }) : this.exceptionAttrCount--;
                    },
                    back: function() {
                        t.navigateBack({
                            delta: 1
                        });
                    },
                    submitForm: function() {
                        var e = this;
                        if (console.log(this.hForm), "重新定位" !== this.curLocation && "定位中.." !== this.curLocation) {
                            t.showLoading({
                                title: "提交中",
                                mask: !0
                            });
                            var o = this.hForm, i = o.id, a = o.dailyRelationResps, u = o.remark, r = o.remark2, c = o.templId, s = this.locationObj, d = {
                                id: i,
                                fudaHealthDailyRelationReqs: a,
                                dailyType: 0,
                                longitude: s.longitude,
                                latitude: s.latitude,
                                addr: this.curLocation,
                                remark: u,
                                remark2: r
                            };
                            (0, n.addHealthyNew)(d).then(function(o) {
                                if (e.$refs.uToast.show({
                                    title: "信息保存成功",
                                    type: "success",
                                    position: "top"
                                }), (o.data || d.id) && e.exceptionAttrCount > 0) {
                                    var i = {
                                        id: o.data || d.id,
                                        templId: c,
                                        operatorId: e.auditUserId
                                    };
                                    (0, n.approveDaily)(i).then(function(e) {
                                        t.redirectTo({
                                            url: "/pages/operate/success"
                                        });
                                    }).catch(function(o) {
                                        e.globalHttpErrorResponseHandler(o, function() {
                                            t.reLaunch({
                                                url: "/pages/index/index"
                                            });
                                        }, e.$refs.uToast);
                                    }).finally(function() {
                                        t.hideLoading();
                                    });
                                } else t.hideLoading(), t.redirectTo({
                                    url: "/pages/operate/success"
                                });
                            }).catch(function(o) {
                                t.hideLoading(), e.globalHttpErrorResponseHandler(o, function() {
                                    t.reLaunch({
                                        url: "/pages/index/index"
                                    });
                                }, e.$refs.uToast);
                            });
                        } else this.$refs.uToast.show({
                            title: "请授权定位信息后重试！",
                            type: "error",
                            position: "top"
                        });
                    }
                }
            };
            e.default = i;
        }).call(this, o("543d").default);
    },
    "931a": function(t, e, o) {},
    eb7b: function(t, e, o) {
        (function(t) {
            o("42ef"), n(o("66fd"));
            var e = n(o("09e6"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, t(e.default);
        }).call(this, o("543d").createPage);
    }
}, [ [ "eb7b", "common/runtime", "common/vendor" ] ] ]);