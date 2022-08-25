(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/add-workflow" ], {
    "35e1": function(e, t, a) {
        (function(e) {
            a("42ef"), n(a("66fd"));
            var t = n(a("766c8"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, e(t.default);
        }).call(this, a("543d").createPage);
    },
    "6a3b": function(e, t, a) {
        a.d(t, "b", function() {
            return i;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {
            return n;
        });
        var n = {
            uForm: function() {
                return a.e("uview-ui/components/u-form/u-form").then(a.bind(null, "c2ee"));
            },
            uIcon: function() {
                return a.e("uview-ui/components/u-icon/u-icon").then(a.bind(null, "3bc3"));
            },
            uFormItem: function() {
                return Promise.all([ a.e("common/vendor"), a.e("uview-ui/components/u-form-item/u-form-item") ]).then(a.bind(null, "84d2"));
            },
            uInput: function() {
                return Promise.all([ a.e("common/vendor"), a.e("uview-ui/components/u-input/u-input") ]).then(a.bind(null, "eca1"));
            },
            uGap: function() {
                return a.e("uview-ui/components/u-gap/u-gap").then(a.bind(null, "7887"));
            },
            uPicker: function() {
                return Promise.all([ a.e("common/vendor"), a.e("uview-ui/components/u-picker/u-picker") ]).then(a.bind(null, "878a"));
            },
            uToast: function() {
                return a.e("uview-ui/components/u-toast/u-toast").then(a.bind(null, "1807"));
            },
            uModal: function() {
                return a.e("uview-ui/components/u-modal/u-modal").then(a.bind(null, "408e"));
            },
            uRadioGroup: function() {
                return Promise.all([ a.e("common/vendor"), a.e("uview-ui/components/u-radio-group/u-radio-group") ]).then(a.bind(null, "801b"));
            },
            uRadio: function() {
                return a.e("uview-ui/components/u-radio/u-radio").then(a.bind(null, "eb6f"));
            }
        }, i = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.baseInfoArr, function(t, a) {
                return {
                    $orig: e.__get_orig(t),
                    s0: t.value && a < 2 ? e.__get_style([ e.grayColorStyle ]) : null
                };
            })), a = e.__map(e.auditRecords.records, function(t, a) {
                return {
                    $orig: e.__get_orig(t),
                    s1: 1 !== t.status && 0 !== t.status && 4 !== t.status ? e.__get_style([ e.grayColorStyle ]) : null,
                    s2: 1 !== t.status && 0 !== t.status && 4 !== t.status ? e.__get_style([ e.grayColorStyle ]) : null,
                    g0: 1 !== t.status && 0 !== t.status && 4 !== t.status ? e.$u.timeFormat(t.auditTime, "yyyy-mm-dd hh:MM:ss") : null,
                    s3: 1 !== t.status && 0 !== t.status && 4 !== t.status ? e.__get_style([ e.grayColorStyle ]) : null,
                    s4: 4 !== t.status || e.onlyShow ? null : e.__get_style([ e.grayColorStyle ])
                };
            });
            e._isMounted || (e.e0 = function(t) {
                e.showBaseInfo = !e.showBaseInfo;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t,
                    l1: a
                }
            });
        }, o = [];
    },
    "708c": function(e, t, a) {
        a.r(t);
        var n = a("f7df"), i = a.n(n);
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = i.a;
    },
    "766c8": function(e, t, a) {
        a.r(t);
        var n = a("6a3b"), i = a("708c");
        for (var o in i) "default" !== o && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        a("b4da");
        var u = a("f0c5"), r = Object(u.a)(i.default, n.b, n.c, !1, null, "10be605a", null, !1, n.a, void 0);
        t.default = r.exports;
    },
    b4da: function(e, t, a) {
        var n = a("f0a4");
        a.n(n).a;
    },
    f0a4: function(e, t, a) {},
    f7df: function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a("e34e"), i = a("609a"), o = a("8785"), u = a("3d97");
            function r(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), a.push.apply(a, n);
                }
                return a;
            }
            function s(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            var l = {
                components: {
                    LppUpload: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/lpp-upload/index") ]).then(function() {
                            return resolve(a("0d93"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    multiImgUpload: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/multi-img-upload/index") ]).then(function() {
                            return resolve(a("4c63"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                data: function() {
                    return {
                        form: {
                            id: "",
                            status: "",
                            nextCcId: "",
                            nextOperatorId: "",
                            opinion: ""
                        },
                        extObject: {},
                        showStartTime: !1,
                        showEndTime: !1,
                        defaultStartTime: "",
                        defaultEndTime: "",
                        startIdx: 0,
                        endIdx: 0,
                        pickerParams: {
                            year: !0,
                            month: !0,
                            day: !0,
                            hour: !0,
                            minute: !0,
                            second: !0,
                            timestamp: !0
                        },
                        showBaseInfo: !1,
                        grayColorStyle: {
                            color: "rgb(174, 178, 185)"
                        },
                        submiting: !1,
                        showModal: !1,
                        auditUserList: [],
                        baseInfoArr: [],
                        disBtn: !1,
                        isCancelBtn: !1,
                        cancelParams: {},
                        onlyShow: !1,
                        auditRecords: []
                    };
                },
                onLoad: function(t) {
                    var a = t.refId, n = t.refType, i = t.projectId, o = t.onlyShow;
                    this.onlyShow = JSON.parse(o), a && (this.cancelParams = {
                        refId: a,
                        refType: n,
                        projectId: i
                    }, this.getDetails({
                        refId: a,
                        refType: n,
                        projectId: i
                    })), 1 == n ? (this.getVisitorPage({
                        id: a,
                        projectId: i
                    }), e.setNavigationBarTitle({
                        title: "在线预约审批"
                    })) : 2 == n ? (this.queryDailyById(a), e.setNavigationBarTitle({
                        title: "健康打卡审批"
                    })) : 3 == n ? (this.getPassPage(a), e.setNavigationBarTitle({
                        title: "外出申请审批"
                    })) : 4 != n && 5 != n || (this.getReturnPage(a), e.setNavigationBarTitle({
                        title: "返校申请审批"
                    }));
                },
                onReady: function() {},
                methods: {
                    splitName: function(e) {
                        if (!e) return "";
                        var t = e.split("-");
                        return t[t.length - 1];
                    },
                    showTime: function(e, t) {
                        e ? (this.showEndTime = !0, this.endIdx = t) : (this.showStartTime = !0, this.startIdx = t);
                    },
                    confirmStartTime: function(e) {
                        this.defaultStartTime = this.$u.timeFormat(e.timestamp, "yyyy-mm-dd hh:MM:ss"), 
                        this.baseInfoArr[this.startIdx].value = this.defaultStartTime;
                    },
                    confirmEndTime: function(e) {
                        this.defaultEndTime = this.$u.timeFormat(e.timestamp, "yyyy-mm-dd hh:MM:ss"), this.baseInfoArr[this.endIdx].value = this.defaultEndTime;
                    },
                    getDetails: function(t) {
                        var a = this;
                        e.showLoading({
                            mask: !0,
                            title: "加载中.."
                        }), (0, n.getRecords)(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? r(Object(a), !0).forEach(function(t) {
                                    s(e, t, a[t]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                                });
                            }
                            return e;
                        }({}, t)).then(function(e) {
                            var t = e.data.records.filter(function(e) {
                                return 1 === e.status;
                            });
                            console.log(t), t && t.length > 0 ? (a.form.id = t[0].id, a.disBtn = !1) : a.disBtn = !0, 
                            a.auditRecords = e.data;
                        }).catch(function(t) {
                            a.globalHttpErrorResponseHandler(t, function() {
                                e.reLaunch({
                                    url: "/pages/index/index"
                                });
                            }, a.$refs.uToast);
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    queryDailyById: function(e) {
                        var t = this;
                        (0, n.queryDailyById)({
                            id: e
                        }).then(function(e) {
                            if (0 === e.code) {
                                var a = e.data, n = a.addrCode, i = a.areaName, o = a.dailyRelationResps, u = a.addr, r = a.remark, s = a.dailyStatus, l = [];
                                l.push({
                                    label: "用户名",
                                    value: n
                                }), l.push({
                                    label: "姓名",
                                    value: t.splitName(i)
                                }), o && o.forEach(function(e) {
                                    l.push({
                                        label: e.content,
                                        value: 1 === e.contentValue ? "是" : "否",
                                        color: 1 === e.contentValue ? "#ff0000" : ""
                                    });
                                }), l.push({
                                    label: "地址",
                                    value: u
                                }), l.push({
                                    label: "备注",
                                    value: r
                                }), t.isCancelBtn = (1 == s || 0 == s) && t.onlyShow, t.baseInfoArr = l;
                            }
                        });
                    },
                    getPassPage: function(e) {
                        var t = this;
                        console.log("Id???????", e), (0, i.queryPassPage)({
                            id: e
                        }).then(function(e) {
                            if (0 === e.code) {
                                console.log("通过~~~数据", e, e.data.list[0]);
                                var a = e.data.list[0];
                                t.extObject.id = a.id;
                                var n = [];
                                n.push({
                                    label: "用户名",
                                    value: a.addrCode
                                }), n.push({
                                    label: "姓名",
                                    value: t.splitName(a.areaName)
                                }), n.push({
                                    label: "出行区域",
                                    value: a.cxqy
                                }), t.defaultStartTime = t.$u.timeFormat(a.startDatetime, "yyyy-mm-dd hh:MM:ss"), 
                                n.push({
                                    label: "出行开始时间",
                                    value: t.defaultStartTime,
                                    iptType: "dateTime",
                                    isEdit: !0,
                                    show: "start"
                                }), t.defaultEndTime = t.$u.timeFormat(a.endDatetime, "yyyy-mm-dd hh:MM:ss"), n.push({
                                    label: "出行结束时间",
                                    value: t.defaultEndTime,
                                    iptType: "dateTime",
                                    isEdit: !0,
                                    show: "end"
                                }), n.push({
                                    label: "外出原因",
                                    value: a.reason
                                }), n.push({
                                    label: "备注",
                                    value: a.remark
                                }), t.isCancelBtn = (1 == a.passStatus || 0 == a.passStatus) && t.onlyShow, t.baseInfoArr = n;
                            }
                        });
                    },
                    getReturnPage: function(e) {
                        var t = this;
                        (0, o.queryReturnPage)({
                            id: e
                        }).then(function(e) {
                            if (0 === e.code) {
                                var a = e.data.list[0], i = a.userId, o = a.areaId, u = a.addrCode, r = a.areaName, s = a.returnType, l = a.addDatetime, d = a.remark2, c = a.returnStatus, f = a.picList, h = [];
                                h.push({
                                    label: "用户名",
                                    value: u
                                }), h.push({
                                    label: "姓名",
                                    value: t.splitName(r)
                                }), h.push({
                                    label: "返校类型",
                                    value: 1 === s ? "变码申请" : "销假审批"
                                }), h.push({
                                    label: "申请时间",
                                    value: t.$u.timeFormat(l, "yyyy-mm-dd hh:MM:ss")
                                }), (0, n.queryHealthy)({
                                    areaId: o,
                                    userId: i
                                }).then(function(e) {
                                    if (0 === e.code && e.data) {
                                        var a = e.data, n = a.hsjcjg, i = a.healthCode, o = a.riskAddress, u = a.hsjcjgmc, r = a.hsjcsj, s = 1 == i ? "黄码" : 2 == i ? "红码" : "绿码", l = 1 == i ? "#ffc107" : 2 == i ? "#ff0000" : "#00ff7f";
                                        h.push({
                                            label: "健康码",
                                            value: s,
                                            color: l
                                        }), h.push({
                                            label: "核酸检测",
                                            value: n
                                        }), h.push({
                                            label: "核酸检测机构",
                                            value: u
                                        }), h.push({
                                            label: "核酸检测时间",
                                            value: r
                                        }), h.push({
                                            label: "行程地区码",
                                            value: o
                                        });
                                    } else h.push({
                                        label: "健康码",
                                        value: "绿码",
                                        color: "#00ff7f"
                                    }), h.push({
                                        label: "核酸检测",
                                        value: "未检测"
                                    }), h.push({
                                        label: "核酸检测机构",
                                        value: " "
                                    }), h.push({
                                        label: "核酸检测时间",
                                        value: " "
                                    }), h.push({
                                        label: "行程地区码",
                                        value: " "
                                    });
                                    h.push({
                                        label: "附件",
                                        value: f || [],
                                        iptType: "multiImg"
                                    }), h.push({
                                        label: "备注",
                                        value: d
                                    }), t.baseInfoArr = h;
                                }), t.isCancelBtn = (1 == c || 0 == c) && t.onlyShow;
                            }
                        });
                    },
                    getVisitorPage: function(e) {
                        var t = this;
                        (0, u.queryVisitorPage)(e).then(function(e) {
                            if (0 === e.code) {
                                var a = e.data, n = a.healthCode, i = a.idCardNum, o = a.hsjcjg, u = a.hsjcjgmc, r = a.hsjcsj, s = a.faceImage, l = a.name, d = a.mobile, c = a.respondentName, f = a.respondentMobile, h = a.department, m = a.remark, p = a.addTime, b = a.beginTime, v = a.status, y = a.cardNumber, g = a.travalImage, w = 0 == n ? "绿码" : 1 == n ? "黄码" : 2 == n ? "红码" : "", T = 0 == n ? "#00ff7f" : 1 == n ? "#ffc107" : 2 == n ? "#ff0000" : "", I = [];
                                I.push({
                                    label: "访客姓名",
                                    value: l
                                }), I.push({
                                    label: "访客手机",
                                    value: d
                                }), I.push({
                                    label: "访客身份证",
                                    value: i
                                }), I.push({
                                    label: "健康码",
                                    value: w,
                                    color: T
                                }), I.push({
                                    label: "核酸检测结果",
                                    value: o
                                }), I.push({
                                    label: "核酸检测机构",
                                    value: u
                                }), I.push({
                                    label: "核酸检测时间",
                                    value: r
                                }), I.push({
                                    label: "访客头像",
                                    value: s,
                                    iptType: "img"
                                }), I.push({
                                    label: "访客车牌",
                                    value: y
                                }), I.push({
                                    label: "行程码",
                                    value: g,
                                    iptType: "img"
                                }), I.push({
                                    label: "受访人",
                                    value: c
                                }), I.push({
                                    label: "受访人手机",
                                    value: f
                                }), I.push({
                                    label: "拜访部门",
                                    value: h
                                }), I.push({
                                    label: "拜访时间",
                                    value: t.$u.timeFormat(b, "yyyy-mm-dd")
                                }), I.push({
                                    label: "申请时间",
                                    value: t.$u.timeFormat(p, "yyyy-mm-dd hh:MM:ss")
                                }), I.push({
                                    label: "拜访事由",
                                    value: m
                                }), t.isCancelBtn = (1 == v || 0 == v) && t.onlyShow, t.baseInfoArr = I;
                            }
                        });
                    },
                    confirm: function() {
                        this.audit();
                    },
                    submitForm: function(t) {
                        var a = this.auditRecords, n = a.nextOperatorAfterPass, i = a.nextOperatorAfterRefuse;
                        this.form.status = t;
                        var o = "未指定审批人！";
                        if (2 === t && n) {
                            var u = n.optionalOperators;
                            return u && 0 !== u.length ? (this.auditUserList = u, this.form.nextOperatorId = this.auditUserList[0].id, 
                            void (this.showModal = !0)) : void e.showToast({
                                title: o,
                                icon: "none"
                            });
                        }
                        if (3 === t && i) {
                            var r = i.optionalOperators;
                            return r && 0 !== r.length ? (this.auditUserList = r, this.form.nextOperatorId = this.auditUserList[0].id, 
                            void (this.showModal = !0)) : void e.showToast({
                                title: o,
                                icon: "none"
                            });
                        }
                        this.audit();
                    },
                    audit: function() {
                        var t = this;
                        this.extObject.startDatetime = this.defaultStartTime, this.extObject.endDatetime = this.defaultEndTime, 
                        this.form.extObject = this.extObject, e.showLoading({
                            mask: !0,
                            title: "提交中"
                        }), this.submiting = !0, (0, n.audit)(this.form).then(function(t) {
                            0 == t.code && (e.showToast({
                                mask: !0,
                                title: "审批成功",
                                duration: 1500
                            }), e.redirectTo({
                                url: "/pages/operate/success"
                            }));
                        }).catch(function(a) {
                            t.globalHttpErrorResponseHandler(a, function() {
                                e.reLaunch({
                                    url: "/pages/index/index"
                                });
                            }, t.$refs.uToast);
                        }).finally(function() {
                            t.submiting = !1, e.hideLoading();
                        });
                    },
                    cancelWorkflow: function() {
                        var t = this;
                        e.showLoading({
                            mask: !0,
                            title: "提交中"
                        }), this.submiting = !0, (0, n.cancelWorkflow)(this.cancelParams).then(function(t) {
                            0 == t.code && (e.showToast({
                                mask: !0,
                                title: "取消成功",
                                duration: 1500
                            }), e.redirectTo({
                                url: "/pages/operate/success"
                            }));
                        }).catch(function(a) {
                            t.globalHttpErrorResponseHandler(a, function() {
                                e.reLaunch({
                                    url: "/pages/index/index"
                                });
                            }, t.$refs.uToast);
                        }).finally(function() {
                            t.submiting = !1, e.hideLoading();
                        });
                    }
                }
            };
            t.default = l;
        }).call(this, a("543d").default);
    }
}, [ [ "35e1", "common/runtime", "common/vendor" ] ] ]);