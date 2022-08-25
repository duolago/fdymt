(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    3839: function(e, t, n) {
        var o = n("4776");
        n.n(o).a;
    },
    4776: function(e, t, n) {},
    "766c": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            uCard: function() {
                return n.e("uview-ui/components/u-card/u-card").then(n.bind(null, "0a64"));
            },
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "3bc3"));
            },
            tkiQrcode: function() {
                return Promise.all([ n.e("common/vendor"), n.e("components/tki-qrcode/tki-qrcode") ]).then(n.bind(null, "b418"));
            },
            uImage: function() {
                return n.e("uview-ui/components/u-image/u-image").then(n.bind(null, "6ffe"));
            },
            uCellGroup: function() {
                return n.e("uview-ui/components/u-cell-group/u-cell-group").then(n.bind(null, "ffca"));
            },
            uCellItem: function() {
                return n.e("uview-ui/components/u-cell-item/u-cell-item").then(n.bind(null, "3e1d"));
            },
            uBadge: function() {
                return n.e("uview-ui/components/u-badge/u-badge").then(n.bind(null, "83ea"));
            },
            uPopup: function() {
                return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "18ce"));
            },
            uButton: function() {
                return n.e("uview-ui/components/u-button/u-button").then(n.bind(null, "782e"));
            },
            uModal: function() {
                return n.e("uview-ui/components/u-modal/u-modal").then(n.bind(null, "408e"));
            },
            uForm: function() {
                return n.e("uview-ui/components/u-form/u-form").then(n.bind(null, "c2ee"));
            },
            uFormItem: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-form-item/u-form-item") ]).then(n.bind(null, "84d2"));
            },
            uInput: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-input/u-input") ]).then(n.bind(null, "eca1"));
            },
            uToast: function() {
                return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null, "1807"));
            }
        }, r = function() {
            var e = this, t = (e.$createElement, e._self._c, e.privacy ? e.hideStr(e.userInfo.name, 1, 1) : null), n = e.$u.timeFormat(e.time, "yyyy-mm-dd hh:MM:ss");
            e._isMounted || (e.e0 = function(t) {
                e.privacy = !e.privacy;
            }, e.e1 = function(t) {
                e.authorizeLoginShow = !1;
            }, e.e2 = function(t) {
                e.registerMobileShow = !1;
            }, e.e3 = function(t) {
                e.unchangedDailyHealthShow = !1;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    m0: t,
                    g0: n
                }
            });
        }, a = [];
    },
    "86b3": function(e, t, n) {
        n.r(t);
        var o = n("99ec"), r = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = r.a;
    },
    "99ec": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a")), r = n("6cfa"), a = n("e34e"), i = n("e1cd");
            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        c(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function l(e, t, n, o, r, a, i) {
                try {
                    var u = e[a](i), s = u.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                u.done ? t(s) : Promise.resolve(s).then(o, r);
            }
            function d(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, r) {
                        var a = e.apply(t, n);
                        function i(e) {
                            l(a, o, r, i, u, "next", e);
                        }
                        function u(e) {
                            l(a, o, r, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            function f(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return g(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0;
                        }
                    }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var o = 0, r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return o >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[o++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: r
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, i = !0, u = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e;
                    },
                    e: function(e) {
                        u = !0, a = e;
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return();
                        } finally {
                            if (u) throw a;
                        }
                    }
                };
            }
            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            var h = {
                components: {
                    LppUpload: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/lpp-upload/index") ]).then(function() {
                            return resolve(n("0d93"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        fixedTopHeight: 250,
                        statusBarHeight: 60,
                        firstEnterExcuted: !1,
                        time: Date.now(),
                        authorizeLoginShow: !1,
                        registerMobileShow: !1,
                        userInfo: {
                            name: "**",
                            _class: "*****",
                            addrCode: "*******",
                            qrCode: "信息待绑定"
                        },
                        FDYMTQrCode: "___",
                        form: {
                            name: "",
                            idCardNum: "",
                            addrCode: "",
                            faceImage: "",
                            faceRecord: 1
                        },
                        rules: {
                            faceImage: [ {
                                required: !0,
                                message: "请上传人脸照片",
                                blur: [ "blur" ]
                            } ],
                            name: [ {
                                required: !0,
                                message: "请输入姓名",
                                blur: [ "blur" ]
                            } ],
                            idCardNum: [ {
                                required: !0,
                                message: "请输入身份证号",
                                blur: [ "blur" ]
                            }, {
                                pattern: /(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                                message: "身份证号码不正确",
                                trigger: "blur"
                            } ],
                            addrCode: [ {
                                required: !0,
                                message: "请输入学号/工号",
                                blur: [ "blur" ]
                            } ]
                        },
                        qrCodoColor: "#2aa265",
                        timerTask: void 0,
                        refreshQrcodeTask: void 0,
                        qrcodeSwitchEnable: 0,
                        countDownSec: 60,
                        todayExistHealthInfo: !1,
                        authorizedSuccess: !1,
                        fudaLoginShow: !1,
                        isVisitor: !1,
                        fudaAccountForm: {},
                        privacy: !0,
                        unchangedDailyHealthShow: !1,
                        locationObj: {
                            name: "重新定位",
                            longitude: void 0,
                            latitude: void 0
                        },
                        wxOpenId: void 0,
                        toolCardItemTitleStyle: {
                            fontSize: "40rpx",
                            fontWeight: 700,
                            color: "#333333",
                            textIndent: "10rpx"
                        },
                        dynamicContentList: [],
                        chineseToParamDictionaryTable: {},
                        latestMsg: {},
                        unread: 0,
                        hasUnreadMsg: !1
                    };
                },
                onLoad: function() {
                    (0, i.getSystemInfo)(), this.statusBarHeight = getApp().globalData.statusBarHeight, 
                    e.hideTabBar(), this.verifAndLogin();
                },
                onPullDownRefresh: function() {
                    this.refreshPage(), clearInterval(this.timerTask), clearInterval(this.refreshQrcodeTask), 
                    this.startTimerTask(), e.stopPullDownRefresh();
                },
                onShow: function() {
                    this.firstEnterExcuted && this.refreshPage(), this.startTimerTask();
                },
                onHide: function() {
                    clearInterval(this.timerTask), clearInterval(this.refreshQrcodeTask);
                },
                methods: {
                    startTimerTask: function() {
                        var t = this;
                        this.timerTask && clearInterval(this.timerTask), this.refreshQrcodeTask && clearInterval(this.refreshQrcodeTask), 
                        this.countDownSec = 60, this.timerTask = setInterval(function() {
                            t.time = Date.now(), t.countDownSec--;
                        }, 1e3), this.refreshQrcodeTask = setInterval(function() {
                            t.countDownSec = 60, e.getStorageSync("accessToken") && (0 == t.qrcodeSwitchEnable ? t.getQrcodeInfo() : 1 == t.qrcodeSwitchEnable && t.getFDYMTQrCode());
                        }, 6e4);
                    },
                    qrcodeSwitchEvent: function(e) {
                        this.qrcodeSwitchEnable = e, clearInterval(this.timerTask), clearInterval(this.refreshQrcodeTask), 
                        0 == e ? (this.startTimerTask(), this.getQrcodeInfo()) : 1 == e && (this.startTimerTask(), 
                        this.getFDYMTQrCode());
                    },
                    getMessageList: function() {
                        var t = this, n = e.getStorageSync("userMsgList"), o = {
                            firstPageTime: 0,
                            pageNum: 1,
                            pageSize: 101
                        };
                        n && Array.isArray(n) ? (o.firstPageTime = n[0].updateTime, (0, r.getMessageList)(o).then(function(o) {
                            if (0 == o.code) {
                                var r = o.data.msgList.filter(function(e) {
                                    return e.msgId !== n[0].msgId;
                                }) || [];
                                r.sort(function(e, t) {
                                    return t.updateTime - e.updateTime;
                                });
                                var a = r.concat(n);
                                a.length > t.EnvConfig.localMsgStorageMaxCount && a.splice(t.EnvConfig.localMsgStorageMaxCount, a.length), 
                                e.setStorageSync("userMsgList", a), t.latestMsg = a.length > 0 ? a[0] : {}, t.unread = a.filter(function(e) {
                                    return !e.read || 0 == e.read;
                                }).length;
                            }
                        }).catch(function(e) {
                            t.globalHttpErrorResponseHandler(e, function() {
                                t.verifAndLogin();
                            }, t.$refs.uToast);
                        })) : (0, r.getMessageList)(o).then(function(o) {
                            0 === o.code && ((n = o.data.msgList || []).sort(function(e, t) {
                                return t.updateTime - e.updateTime;
                            }), n.length > t.EnvConfig.localMsgStorageMaxCount && n.splice(t.EnvConfig.localMsgStorageMaxCount, n.length), 
                            e.setStorageSync("userMsgList", n), t.latestMsg = n.length > 0 ? n[0] : {}, t.unread = n.filter(function(e) {
                                return !e.read || 0 == e.read;
                            }).length);
                        }).catch(function(e) {
                            t.globalHttpErrorResponseHandler(e, function() {
                                t.verifAndLogin();
                            }, t.$refs.uToast);
                        });
                    },
                    regeo: function() {
                        var t = this, n = this.locationObj.longitude + "," + this.locationObj.latitude;
                        e.request({
                            url: this.EnvConfig.apiRootUrl + "/amap/geocode/regeo/?location=" + n,
                            success: function(e) {
                                1 == e.data.status && (t.locationObj.name = e.data.regeocode.addressComponent.city);
                            }
                        });
                    },
                    getLocation: function() {
                        var t = this;
                        "重新定位" === this.locationObj.name && (this.locationObj.name = "定位中..", e.getLocation({
                            type: "wgs84",
                            success: function(e) {
                                t.locationObj.longitude = e.longitude, t.locationObj.latitude = e.latitude, t.regeo();
                            },
                            fail: function(e) {
                                t.$refs.uToast.show({
                                    title: "权限不足或未打开定位设置！",
                                    type: "error",
                                    position: "top"
                                }), t.locationObj.name = "重新定位";
                            }
                        }));
                    },
                    fudaAccountSubmitForm: function() {
                        var e = this;
                        void 0 !== this.fudaAccountForm.username && void 0 !== this.fudaAccountForm.password ? (0, 
                        r.checkIdentityByRJ)(this.fudaAccountForm).then(function(t) {
                            0 === t.code && (e.fudaLoginShow = !1, e.refreshPage(), e.startTimerTask());
                        }).catch(function(t) {
                            e.globalHttpErrorResponseHandler(t, function() {
                                e.verifAndLogin();
                            }, e.$refs.uToast);
                        }) : this.$refs.uToast.show({
                            title: "请输入学号/工号和密码",
                            type: "error",
                            position: "top"
                        });
                    },
                    goToYKTPage: function() {
                        this.EnvConfig.fudaHome, e.navigateTo({
                            url: "/pages/web/webview?url=" + encodeURIComponent("https://ykt-sj.fzu.edu.cn/wechat/url/redirect.html?jkbh=0006")
                        });
                    },
                    goToYQMPListPage: function() {
                        e.navigateTo({
                            url: "/pages/my/yqmp-list"
                        });
                    },
                    goToMsgList: function() {
                        e.navigateTo({
                            url: "/pages/my/msg-list"
                        });
                    },
                    goToManageClassPage: function() {
                        e.navigateTo({
                            url: "/pages/my/manage-class-personnel-list"
                        });
                    },
                    goToHealthMgr: function() {
                        e.navigateTo({
                            url: "/pages/health/healthMgr"
                        });
                    },
                    goToReportListPage: function() {
                        e.navigateTo({
                            url: "/pages/go-out/report-list"
                        });
                    },
                    goToMgrRecordListPage: function() {
                        e.navigateTo({
                            url: "/pages/back-school/mgr-record-list"
                        });
                    },
                    goToApprovalPage: function() {
                        e.navigateTo({
                            url: "/pages/approval/approval-list"
                        });
                    },
                    goToCodeRulesPage: function() {
                        e.navigateTo({
                            url: "/pages/code-rules/newest-list"
                        });
                    },
                    goToRiskAddrPage: function() {
                        e.navigateTo({
                            url: "/pages/risk/newest-list"
                        });
                    },
                    goToVisitorPage: function() {
                        e.navigateTo({
                            url: "/pages/visitor/visitor-list"
                        });
                    },
                    goToAddHealthTrip: function() {
                        e.navigateTo({
                            url: "/pages/health/add-health-trip"
                        });
                    },
                    goToAddDailyHealth: function(t) {
                        var n = this, o = this.$u.timeFormat(Date.now(), "yyyy-mm-dd"), r = {
                            pageSize: 1,
                            dailyType: 0,
                            startDatetime: o,
                            endDatetime: o
                        };
                        (0, a.getHealthyPage)(r).then(function(o) {
                            if (o.data && o.data.list && 0 !== o.data.list.length) {
                                var r = o.data.list[0], a = r.dailyStatus, i = r.replaceStatus;
                                if (1 === r.tianbao) return void e.showToast({
                                    title: "当日已打卡，不可重复打卡！",
                                    icon: "none"
                                });
                                if (6 === a) return void e.showToast({
                                    title: "当日已打卡，不可重复打卡！",
                                    icon: "none"
                                });
                                if (1 === i) return void e.showToast({
                                    title: "当日已代打，不可重复打卡！",
                                    icon: "none"
                                });
                                var u = n.EnvConfig.addDailyHealthLimitHour;
                                if (n.$u.timeFormat(Date.now(), "hh") >= u) return void e.showToast({
                                    title: u + "点以后不可打卡！",
                                    icon: "none"
                                });
                                if (!t) {
                                    var s = o.data.list[0], c = s.dailyRelationResps, l = s.id, d = e.getStorageSync("addHealthConfigList"), g = !0, h = c.filter(function(e) {
                                        return 0 === e.contentShow;
                                    });
                                    if (h.forEach(function(e, t) {
                                        n.chineseToParamDictionaryTable[e.content] = "param_" + t;
                                    }), d) {
                                        if (h.length !== d.length) return;
                                        var p, m = f(d);
                                        try {
                                            for (m.s(); !(p = m.n()).done; ) {
                                                var v, b = p.value, y = !1, T = f(h);
                                                try {
                                                    for (T.s(); !(v = T.n()).done; ) {
                                                        var w = v.value;
                                                        if (b.content === w.content) {
                                                            y = !0;
                                                            break;
                                                        }
                                                    }
                                                } catch (e) {
                                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                                    T.e(e);
                                                } finally {
                                                    T.f();
                                                }
                                                if (!(g = y)) break;
                                            }
                                        } catch (e) {
                                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                            m.e(e);
                                        } finally {
                                            m.f();
                                        }
                                    }
                                    if (!g) return void e.navigateTo({
                                        url: "/pages/health/add-daily-health-info?addHealthConfigChanged=true"
                                    });
                                    n.dynamicContentList = h, n.unchangedDailyHealthForm = {
                                        id: l
                                    };
                                    var S = [];
                                    return h.forEach(function(e) {
                                        S.push({
                                            id: e.id,
                                            content: e.content,
                                            contentType: e.contentType,
                                            contentValue: 0,
                                            contentShow: e.contentShow,
                                            required: e.required,
                                            circle: e.circle,
                                            orderNum: e.orderNum
                                        });
                                    }), n.unchangedDailyHealthForm.fudaHealthDailyRelationReqs = S, void (n.unchangedDailyHealthShow = !0);
                                }
                                e.navigateTo({
                                    url: "/pages/health/add-daily-health-info"
                                });
                            } else e.showToast({
                                title: "当前时间不能打卡！",
                                icon: "none"
                            });
                        }).catch(function(e) {
                            n.globalHttpErrorResponseHandler(e, function() {
                                n.verifAndLogin();
                            }, n.$refs.uToast);
                        });
                    },
                    unchangedDailyHealthSubmit: function() {
                        var t = this;
                        e.showLoading({
                            title: "提交中",
                            mask: !0
                        }), (0, a.addHealthyNew)(this.unchangedDailyHealthForm).then(function(n) {
                            t.unchangedDailyHealthShow = !1, 0 === n.code && (e.setStorageSync("lastSubmitHealthDataV2", t.unchangedDailyHealthForm), 
                            e.setStorageSync("addHealthConfigList", t.dynamicContentList), t.$refs.uToast.show({
                                title: "信息保存成功",
                                type: "success",
                                position: "top"
                            }));
                        }).catch(function(e) {
                            t.globalHttpErrorResponseHandler(e, function() {
                                t.verifAndLogin();
                            }, t.$refs.uToast);
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    refreshPage: function() {
                        e.getStorageSync("accessToken") ? (this.getQrcodeInfo(), this.getMessageList()) : this.authorizeLoginShow = !0;
                    },
                    verifAndLogin: function() {
                        e.getStorageSync("accessToken") ? this.wxLogin() : this.authorizeLoginShow = !0;
                    },
                    submitForm: function() {
                        var t = this;
                        this.$refs.uForm.validate(function(n) {
                            n && (e.showLoading({
                                title: "提交中",
                                mask: !0
                            }), (0, r.verifyIdentity)(t.form).then(function(e) {
                                0 == e.code && (t.$refs.uToast.show({
                                    title: "信息绑定成功",
                                    type: "success",
                                    position: "top"
                                }), t.getQrcodeInfo());
                            }).catch(function(e) {
                                t.globalHttpErrorResponseHandler(e, function() {
                                    t.verifAndLogin();
                                }, t.$refs.uToast);
                            }).finally(function() {
                                e.hideLoading();
                            }));
                        });
                    },
                    wxLogin: function() {
                        var t = this;
                        this.authorizeLoginShow = !1, e.login({
                            provider: "weixin",
                            success: function(n) {
                                e.getUserInfo({
                                    success: function(o) {
                                        e.setStorageSync("userInfo", o.userInfo), t.loginWithJsCode(n.code);
                                    }
                                });
                            }
                        });
                    },
                    loginWithJsCode: function(t) {
                        var n = this;
                        e.showLoading({
                            title: "登录中",
                            mask: !0
                        }), (0, r.login)({
                            jsCode: t
                        }).then(function() {
                            var r = d(o.default.mark(function r(a) {
                                return o.default.wrap(function(o) {
                                    for (;;) switch (o.prev = o.next) {
                                      case 0:
                                        if (n.firstEnterExcuted = !0, e.setStorageSync("loginInfo", s({
                                            code: t
                                        }, a.data)), 0 != a.code) {
                                            o.next = 11;
                                            break;
                                        }
                                        if (e.setStorageSync("accessToken", a.data.token), a.data.lppCode) {
                                            o.next = 8;
                                            break;
                                        }
                                        n.registerMobileShow = !0, o.next = 11;
                                        break;

                                      case 8:
                                        return o.next = 10, n.getQrcodeInfo();

                                      case 10:
                                        n.getMessageList();

                                      case 11:
                                      case "end":
                                        return o.stop();
                                    }
                                }, r);
                            }));
                            return function(e) {
                                return r.apply(this, arguments);
                            };
                        }()).catch(function(e) {
                            n.globalHttpErrorResponseHandler(e, function() {
                                n.verifAndLogin();
                            }, n.$refs.uToast);
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    goToUpdateFaceImage: function() {
                        e.navigateTo({
                            url: "/pages/my/update-identify?saveAndBack=true"
                        });
                    },
                    getQrcodeInfo: function() {
                        var t = this;
                        return d(o.default.mark(function n() {
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, (0, r.getQrCode)().then(function(n) {
                                        if (0 == n.code) {
                                            var o = e.getStorageSync("qrCodeObj");
                                            if (n.data && o && o.areaId !== n.data.areaId && e.removeStorageSync("userMsgList"), 
                                            e.setStorageSync("qrCodeObj", n.data), n.data) {
                                                if (0 == n.data.healthCode ? t.qrCodoColor = "#2aa265" : 1 == n.data.healthCode ? t.qrCodoColor = "#e7d01d" : 2 == n.data.healthCode ? t.qrCodoColor = "#a7072c" : 3 == n.data.healthCode ? t.qrCodoColor = "#c1c1c1" : 4 == n.data.healthCode ? t.qrCodoColor = "#2aa265" : 5 == n.data.healthCode && (t.qrCodoColor = "#a7072c"), 
                                                t.userInfo = n.data, e.showTabBar(), -1 == t.userInfo.areaId) return t.isVisitor = !0, 
                                                void (t.authorizedSuccess = !1);
                                                t.authorizedSuccess = !0;
                                            } else t.fudaLoginShow = !0, t.isVisitor = !1;
                                        }
                                    }).catch(function(e) {
                                        t.globalHttpErrorResponseHandler(e, function() {
                                            t.verifAndLogin();
                                        }, t.$refs.uToast);
                                    });

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getFDYMTQrCode: function() {
                        var e = this;
                        (0, r.getFDYMTQrCode)().then(function(t) {
                            0 == t.code && (e.FDYMTQrCode = t.data);
                        }).catch(function(t) {
                            e.globalHttpErrorResponseHandler(t, function() {
                                e.verifAndLogin();
                            }, e.$refs.uToast);
                        });
                    },
                    getPhoneNum: function(t) {
                        var n = this;
                        if (!t.detail.code) {
                            var o = "getPhoneNumber:ok" === t.detail.errMsg ? "请升级您的微信APP主程序到最新的版本再重新登录" : t.detail.errMsg;
                            return this.registerMobileShow = !1, void this.$refs.uToast.show({
                                title: o,
                                type: "error",
                                position: "top"
                            });
                        }
                        var a = e.getStorageSync("loginInfo"), i = e.getStorageSync("userInfo"), u = {
                            jsCode: t.detail.code,
                            wxSessionKey: a.wxSessionKey,
                            avater: i.avatarUrl,
                            nickname: i.nickName
                        };
                        e.showLoading({
                            title: "绑定中",
                            mask: !0
                        }), (0, r.getPhoneNumber)(u).then(function(t) {
                            0 == t.code && (n.wxOpenId = t.data.wxOpenId, n.$refs.uToast.show({
                                title: "绑定手机号成功",
                                type: "success",
                                position: "top"
                            }), n.registerMobileShow = !1, n.getQrcodeInfo(), e.setStorageSync("accessToken", t.data.token));
                        }).catch(function(e) {
                            n.globalHttpErrorResponseHandler(e, function() {
                                n.verifAndLogin();
                            }, n.$refs.uToast);
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    visitorClick: function() {
                        var e = this;
                        (0, r.enterByVisitor)().then(function(t) {
                            0 === t.code && (e.fudaLoginShow = !1, e.isVisitor = !0, e.refreshPage(), e.startTimerTask());
                        }).catch(function(t) {
                            e.globalHttpErrorResponseHandler(t, function() {
                                e.verifAndLogin();
                            }, e.$refs.uToast);
                        });
                    }
                }
            };
            t.default = h;
        }).call(this, n("543d").default);
    },
    ab9e: function(e, t, n) {
        (function(e) {
            n("42ef"), o(n("66fd"));
            var t = o(n("fc7a"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    fc7a: function(e, t, n) {
        n.r(t);
        var o = n("766c"), r = n("86b3");
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        n("3839");
        var i = n("f0c5"), u = Object(i.a)(r.default, o.b, o.c, !1, null, "c3aecdbc", null, !1, o.a, void 0);
        t.default = u.exports;
    }
}, [ [ "ab9e", "common/runtime", "common/vendor" ] ] ]);