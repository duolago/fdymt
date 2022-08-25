(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/msg-list" ], {
    "03af": function(t, e, n) {},
    3227: function(t, e, n) {
        n.r(e);
        var a = n("498f"), i = n("5c21");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("540a");
        var o = n("f0c5"), u = Object(o.a)(i.default, a.b, a.c, !1, null, "290b418b", null, !1, a.a, void 0);
        e.default = u.exports;
    },
    "498f": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            uGap: function() {
                return n.e("uview-ui/components/u-gap/u-gap").then(n.bind(null, "7887"));
            },
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "3bc3"));
            },
            uBadge: function() {
                return n.e("uview-ui/components/u-badge/u-badge").then(n.bind(null, "83ea"));
            },
            uCard: function() {
                return n.e("uview-ui/components/u-card/u-card").then(n.bind(null, "0a64"));
            },
            uToast: function() {
                return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null, "1807"));
            },
            uPopup: function() {
                return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "18ce"));
            }
        }, i = function() {
            var t = this, e = (t.$createElement, t._self._c, t.$getLabelByValue(t.msgTypeArr, t.sideTabVal)), n = t.__map(t.msgList, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    g0: t.$u.timeFormat(e.updateTime || e.time, "yyyy-mm-dd hh:MM:ss")
                };
            });
            t._isMounted || (t.e0 = function(e) {
                t.showMsgType = !0;
            }, t.e1 = function(e) {
                t.showMsgType = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    l0: n
                }
            });
        }, r = [];
    },
    "540a": function(t, e, n) {
        var a = n("03af");
        n.n(a).a;
    },
    "5c21": function(t, e, n) {
        n.r(e);
        var a = n("7f4a"), i = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = i.a;
    },
    "7f4a": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("6cfa"), i = n("fba0");
            function r(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || o(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function o(t, e) {
                if (t) {
                    if ("string" == typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                }
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            var s = {
                data: function() {
                    return {
                        unread: 0,
                        sideTabVal: 0,
                        showMsgType: !1,
                        msgTypeArr: i.msgTypeArr,
                        msgTypeList: [],
                        msgList: []
                    };
                },
                onLoad: function(t) {},
                onShow: function() {
                    this.getMessageList();
                },
                onPullDownRefresh: function() {
                    this.getMessageList(), t.stopPullDownRefresh();
                },
                methods: {
                    swichType: function(t, e) {
                        e.value !== this.sideTabVal && (this.sideTabVal = e.value, this.dealData(this.msgTypeList[this.sideTabVal]), 
                        this.showMsgType = !1);
                    },
                    goToMsgDetailPage: function(e, n) {
                        var a = this.msgTypeList[0].indexOf(n);
                        n.read = !0, this.$set(this.msgTypeList[0], a, n), this.groupData(this.msgTypeList[0]);
                        var i = JSON.parse(n.msgData);
                        if (7 != n.type) if (8 != n.type) 9 != n.type ? 10 != n.type ? (t.setStorageSync("msgDetailPageShowData", n), 
                        t.navigateTo({
                            url: "/pages/my/msg-detail"
                        })) : t.navigateTo({
                            url: "/pages/my/manage-class-personnel-list"
                        }) : t.navigateTo({
                            url: "/pages/my/add-health?id=" + i.id
                        }); else {
                            var r = this.$u.queryParams(i);
                            t.navigateTo({
                                url: "/pages/my/add-workflow".concat(r)
                            });
                        } else t.navigateTo({
                            url: "/pages/my/add-yqmp?id=" + i.id
                        });
                    },
                    maskAllRead: function() {
                        this.msgTypeList[0].forEach(function(t) {
                            t.read = !0;
                        }), this.$forceUpdate(), this.groupData(this.msgTypeList[0]);
                    },
                    getMessageList: function() {
                        var e = this, n = t.getStorageSync("userMsgList"), i = {
                            firstPageTime: 0,
                            pageNum: 1,
                            pageSize: 101
                        };
                        n && Array.isArray(n) && 0 !== n.length ? (i.firstPageTime = n[0].updateTime, (0, 
                        a.getMessageList)(i).then(function(t) {
                            if (0 == t.code) {
                                var a = t.data.msgList.filter(function(t) {
                                    return t.msgId !== n[0].msgId;
                                }) || [];
                                a.sort(function(t, e) {
                                    return e.updateTime - t.updateTime;
                                });
                                var i = a.concat(n);
                                i.length > e.EnvConfig.localMsgStorageMaxCount && i.splice(e.EnvConfig.localMsgStorageMaxCount, i.length), 
                                e.groupData(i);
                            }
                        }).catch(function(t) {
                            e.globalHttpErrorResponseHandler(t, function() {
                                e.verifAndLogin();
                            }, e.$refs.uToast);
                        })) : (0, a.getMessageList)(i).then(function(t) {
                            0 == t.code && ((n = t.data.msgList || []).sort(function(t, e) {
                                return e.updateTime - t.updateTime;
                            }), n.length > e.EnvConfig.localMsgStorageMaxCount && n.splice(e.EnvConfig.localMsgStorageMaxCount, n.length), 
                            e.groupData(n));
                        }).catch(function(t) {
                            e.globalHttpErrorResponseHandler(t, function() {
                                e.verifAndLogin();
                            }, e.$refs.uToast);
                        });
                    },
                    groupData: function(e) {
                        t.setStorageSync("userMsgList", e);
                        var n, a = [], u = function(t, e) {
                            var n;
                            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                                if (Array.isArray(t) || (n = o(t)) || e && t && "number" == typeof t.length) {
                                    n && (t = n);
                                    var a = 0, i = function() {};
                                    return {
                                        s: i,
                                        n: function() {
                                            return a >= t.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: t[a++]
                                            };
                                        },
                                        e: function(t) {
                                            throw t;
                                        },
                                        f: i
                                    };
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }
                            var r, u = !0, s = !1;
                            return {
                                s: function() {
                                    n = t[Symbol.iterator]();
                                },
                                n: function() {
                                    var t = n.next();
                                    return u = t.done, t;
                                },
                                e: function(t) {
                                    s = !0, r = t;
                                },
                                f: function() {
                                    try {
                                        u || null == n.return || n.return();
                                    } finally {
                                        if (s) throw r;
                                    }
                                }
                            };
                        }(i.msgTypeArr);
                        try {
                            var s = function() {
                                var t = n.value;
                                0 === t.value ? a[0] = r(e) : a[t.value] = r(e.filter(function(e) {
                                    return e.msgType === t.value;
                                }));
                            };
                            for (u.s(); !(n = u.n()).done; ) s();
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            u.e(t);
                        } finally {
                            u.f();
                        }
                        this.unread = a[0].filter(function(t) {
                            return !t.read || 0 == t.read;
                        }).length, this.msgTypeList = a, this.dealData(this.msgTypeList[this.sideTabVal]);
                    },
                    dealData: function(t) {
                        var e = this, n = t.splice(20, t.length);
                        this.msgList = t, console.log(t), setTimeout(function() {
                            e.msgTypeList[e.sideTabVal] = e.msgList = t.concat(n), console.log("定时器中", e.msgList, e.msgTypeList[e.sideTabVal]);
                        }, 500);
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    c1b2: function(t, e, n) {
        (function(t) {
            n("42ef"), a(n("66fd"));
            var e = a(n("3227"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "c1b2", "common/runtime", "common/vendor" ] ] ]);