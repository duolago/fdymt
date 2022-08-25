(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/multi-img-upload/index" ], {
    "20f0": function(t, e, n) {
        n.r(e);
        var a = n("3cfb"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    3545: function(t, e, n) {},
    "3a11": function(t, e, n) {
        var a = n("3545");
        n.n(a).a;
    },
    "3cfb": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a")), o = n("a8b4");
            function r(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = i(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var a = 0, o = function() {};
                        return {
                            s: o,
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
                            f: o
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var r, u = !0, l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]();
                    },
                    n: function() {
                        var t = n.next();
                        return u = t.done, t;
                    },
                    e: function(t) {
                        l = !0, r = t;
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return();
                        } finally {
                            if (l) throw r;
                        }
                    }
                };
            }
            function i(t, e) {
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
            function l(t, e, n, a, o, r, i) {
                try {
                    var u = t[r](i), l = u.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void n(t);
                }
                u.done ? e(l) : Promise.resolve(l).then(a, o);
            }
            var c = {
                name: "multiImgUpload",
                components: {
                    htzImageUpload: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/htz-image-upload/htz-image-upload") ]).then(function() {
                            return resolve(n("6998"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    value: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    imageType: {
                        type: [ Number, String ],
                        default: -1
                    },
                    uploadStyle: {
                        type: Object,
                        defaule: function() {}
                    },
                    uploadText: {
                        type: String,
                        default: ""
                    },
                    textSize: {
                        type: String,
                        default: "25"
                    },
                    maxCount: {
                        type: Number,
                        default: 10
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    isDel: {
                        type: Boolean,
                        default: !0
                    }
                },
                watch: {
                    value: {
                        handler: function(t, e) {
                            console.log("value变化？", t, Array.isArray(t)), this.imageList = t;
                        },
                        deep: !0
                    }
                },
                options: {
                    styleIsolation: "shared"
                },
                data: function() {
                    return {
                        imageList: this.value
                    };
                },
                mounted: function() {},
                methods: {
                    formatUnit: function(t) {
                        return this.$u.addUnit(t);
                    },
                    deletePic: function(t) {
                        this.$emit("input", this.imageList);
                    },
                    chooseSuccess: function(e, n) {
                        var o = this;
                        return function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(a, o) {
                                    var r = t.apply(e, n);
                                    function i(t) {
                                        l(r, a, o, i, u, "next", t);
                                    }
                                    function u(t) {
                                        l(r, a, o, i, u, "throw", t);
                                    }
                                    i(void 0);
                                });
                            };
                        }(a.default.mark(function i() {
                            var u, l, c;
                            return a.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    console.log("上传后？", e, n), t.showLoading({
                                        mask: !0,
                                        title: "加载中."
                                    }), u = r(e), a.prev = 3, u.s();

                                  case 5:
                                    if ((l = u.n()).done) {
                                        a.next = 11;
                                        break;
                                    }
                                    return c = l.value, a.next = 9, t.compressImage({
                                        src: c,
                                        quality: 70,
                                        success: function(t) {
                                            o.uploadFile(t.tempFilePath);
                                        }
                                    });

                                  case 9:
                                    a.next = 5;
                                    break;

                                  case 11:
                                    a.next = 16;
                                    break;

                                  case 13:
                                    a.prev = 13, a.t0 = a.catch(3), u.e(a.t0);

                                  case 16:
                                    return a.prev = 16, u.f(), a.finish(16);

                                  case 19:
                                  case "end":
                                    return a.stop();
                                }
                            }, i, null, [ [ 3, 13, 16, 19 ] ]);
                        }))();
                    },
                    uploadFile: function(e) {
                        var n = this;
                        t.showLoading({
                            mask: !1,
                            title: "图片上传中"
                        }), 1 == this.imageType ? (0, o.uploadFaces2)(e).then(function(t) {
                            n.afterUploadhandle(t);
                        }).finally(function() {
                            t.hideLoading();
                        }) : 3 == this.imageType ? (0, o.uploadImageForever)(e).then(function(t) {
                            n.afterUploadhandle(t);
                        }).finally(function() {
                            t.hideLoading();
                        }) : 4 == this.imageType && (0, o.uploadImageTemporary)(e).then(function(t) {
                            var e = t.data;
                            t.data = [], t.data.push(e), n.afterUploadhandle(t);
                        }).finally(function() {
                            t.hideLoading();
                        });
                    },
                    afterUploadhandle: function(t) {
                        0 === t.code && (this.imageList.push(t.data[0]), this.$emit("input", this.imageList));
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    "4c63": function(t, e, n) {
        n.r(e);
        var a = n("aa3b"), o = n("20f0");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("3a11");
        var i = n("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, "50403c1e", null, !1, a.a, void 0);
        e.default = u.exports;
    },
    aa3b: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.formatUnit(t.textSize));
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/multi-img-upload/index-create-component", {
    "components/multi-img-upload/index-create-component": function(t, e, n) {
        n("543d").createComponent(n("4c63"));
    }
}, [ [ "components/multi-img-upload/index-create-component" ] ] ]);