var t = require("../../@babel/runtime/helpers/typeof");

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/tki-qrcode/tki-qrcode" ], {
    "1d71": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "6f99": function(t, e, n) {},
    8224: function(t, e, n) {
        var o = n("6f99");
        n.n(o).a;
    },
    b418: function(t, e, n) {
        n.r(e);
        var o = n("1d71"), i = n("fac7");
        for (var u in i) "default" !== u && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(u);
        n("8224");
        var a = n("f0c5"), c = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    d22c: function(e, n, o) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i, u = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(o("8c1d"));
            var a = {
                name: "tki-qrcode",
                props: {
                    cid: {
                        type: String,
                        default: "tki-qrcode-canvas"
                    },
                    size: {
                        type: Number,
                        default: 200
                    },
                    unit: {
                        type: String,
                        default: "upx"
                    },
                    show: {
                        type: Boolean,
                        default: !0
                    },
                    val: {
                        type: String,
                        default: ""
                    },
                    background: {
                        type: String,
                        default: "#ffffff"
                    },
                    foreground: {
                        type: String,
                        default: "#000000"
                    },
                    pdground: {
                        type: String,
                        default: "#000000"
                    },
                    icon: {
                        type: String,
                        default: ""
                    },
                    iconSize: {
                        type: Number,
                        default: 40
                    },
                    lv: {
                        type: Number,
                        default: 3
                    },
                    onval: {
                        type: Boolean,
                        default: !1
                    },
                    loadMake: {
                        type: Boolean,
                        default: !1
                    },
                    usingComponents: {
                        type: Boolean,
                        default: !0
                    },
                    showLoading: {
                        type: Boolean,
                        default: !0
                    },
                    loadingText: {
                        type: String,
                        default: "二维码生成中"
                    }
                },
                data: function() {
                    return {
                        result: ""
                    };
                },
                methods: {
                    _makeCode: function() {
                        var t = this;
                        this._empty(this.val) ? e.showToast({
                            title: "二维码内容不能为空",
                            icon: "none",
                            duration: 2e3
                        }) : i = new u.default({
                            context: t,
                            canvasId: t.cid,
                            usingComponents: t.usingComponents,
                            showLoading: t.showLoading,
                            loadingText: t.loadingText,
                            text: t.val,
                            size: t.cpSize,
                            background: t.background,
                            foreground: t.foreground,
                            pdground: t.pdground,
                            correctLevel: t.lv,
                            image: t.icon,
                            imageSize: t.iconSize,
                            cbResult: function(e) {
                                t._result(e);
                            }
                        });
                    },
                    _clearCode: function() {
                        this._result(""), i.clear();
                    },
                    _saveCode: function() {
                        "" != this.result && e.saveImageToPhotosAlbum({
                            filePath: this.result,
                            success: function() {
                                e.showToast({
                                    title: "二维码保存成功",
                                    icon: "success",
                                    duration: 2e3
                                });
                            }
                        });
                    },
                    _result: function(t) {
                        this.result = t, this.$emit("result", t);
                    },
                    _empty: function(e) {
                        var n = t(e), o = !1;
                        return "number" == n && "" == String(e) || "undefined" == n ? o = !0 : "object" == n ? "{}" != JSON.stringify(e) && "[]" != JSON.stringify(e) && null != e || (o = !0) : "string" == n ? "" != e && "undefined" != e && "null" != e && "{}" != e && "[]" != e || (o = !0) : "function" == n && (o = !1), 
                        o;
                    }
                },
                watch: {
                    size: function(t, e) {
                        var n = this;
                        t == e || this._empty(t) || (this.cSize = t, this._empty(this.val) || setTimeout(function() {
                            n._makeCode();
                        }, 100));
                    },
                    val: function(t, e) {
                        var n = this;
                        this.onval && (t == e || this._empty(t) || setTimeout(function() {
                            n._makeCode();
                        }, 0));
                    }
                },
                computed: {
                    cpSize: function() {
                        return "upx" == this.unit ? e.upx2px(this.size) : this.size;
                    }
                },
                mounted: function() {
                    var t = this;
                    this.loadMake && (this._empty(this.val) || setTimeout(function() {
                        t._makeCode();
                    }, 0));
                }
            };
            n.default = a;
        }).call(this, o("543d").default);
    },
    fac7: function(t, e, n) {
        n.r(e);
        var o = n("d22c"), i = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/tki-qrcode/tki-qrcode-create-component", {
    "components/tki-qrcode/tki-qrcode-create-component": function(t, e, n) {
        n("543d").createComponent(n("b418"));
    }
}, [ [ "components/tki-qrcode/tki-qrcode-create-component" ] ] ]);