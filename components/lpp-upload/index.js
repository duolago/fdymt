(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/lpp-upload/index" ], {
    "0d93": function(e, t, n) {
        n.r(t);
        var a = n("eaaa"), i = n("8be4");
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("e338");
        var u = n("f0c5"), l = Object(u.a)(i.default, a.b, a.c, !1, null, "60fdc786", null, !1, a.a, void 0);
        t.default = l.exports;
    },
    "8be4": function(e, t, n) {
        n.r(t);
        var a = n("cf4d"), i = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = i.a;
    },
    bdbc: function(e, t, n) {},
    cf4d: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("a8b4"), i = {
                props: {
                    value: {
                        type: String,
                        default: ""
                    },
                    uploadText: {
                        type: String,
                        default: "上传"
                    },
                    btnImage: {
                        type: String,
                        default: ""
                    },
                    imageMode: {
                        type: String,
                        default: "aspectFill"
                    },
                    width: {
                        type: Number,
                        default: 75
                    },
                    height: {
                        type: Number,
                        default: 75
                    },
                    imageType: {
                        type: [ Number, String ],
                        default: -1
                    },
                    uploadProvider: {
                        type: [ Number, String ],
                        default: 0
                    },
                    sizeType: {
                        type: String,
                        default: "compressed"
                    },
                    customTakePhoto: {
                        type: Boolean,
                        default: !1
                    },
                    onlySelect: {
                        type: Boolean,
                        default: !1
                    },
                    onlyShow: {
                        type: Boolean,
                        default: !1
                    }
                },
                watch: {
                    value: function(e, t) {
                        this.imageUrl = e;
                    }
                },
                data: function() {
                    return {
                        imageUrl: this.value,
                        chooseOpen: !1,
                        cbName: "chooseImageCallback_" + this.$u.guid(5)
                    };
                },
                mounted: function() {},
                methods: {
                    removeImage: function() {
                        this.imageUrl = "", this.$emit("input", this.imageUrl);
                    },
                    upFileOrPreview: function() {
                        if (this.imageUrl) e.previewImage({
                            current: this.imageUrl,
                            urls: [ this.imageUrl ]
                        }); else {
                            if (this.customTakePhoto) return void this.$emit("takePhoto");
                            this.chooseOpen = !0;
                        }
                    },
                    cameraChoose: function(t) {
                        var n = this;
                        this.chooseOpen = !1;
                        var a, i = 0 == t ? "camera" : "album";
                        a = [ "original" ], e.chooseImage({
                            count: 1,
                            sourceType: [ i ],
                            sizeType: a,
                            success: function(t) {
                                t.tempFiles[0] && t.tempFiles[0].size && t.tempFiles[0].size, t.tempFiles[0] && t.tempFiles[0].name && t.tempFiles[0].name, 
                                e.showLoading({
                                    mask: !0,
                                    title: "加载中."
                                }), e.compressImage({
                                    src: t.tempFilePaths[0],
                                    quality: 70,
                                    success: function(e) {
                                        n.routerUploadhandle(e.tempFilePath);
                                    }
                                });
                            }
                        });
                    },
                    routerUploadhandle: function(t) {
                        var n = this;
                        e.showLoading({
                            mask: !1,
                            title: "图片上传中"
                        }), 1 == this.imageType ? (0, a.uploadFaces2)(t).then(function(e) {
                            n.afterUploadhandle(e);
                        }).finally(function() {
                            e.hideLoading();
                        }) : 3 == this.imageType ? (0, a.uploadImageForever)(t).then(function(e) {
                            n.afterUploadhandle(e);
                        }).finally(function() {
                            e.hideLoading();
                        }) : 4 == this.imageType && (0, a.uploadImageTemporary)(t).then(function(e) {
                            var t = e.data;
                            e.data = [], e.data.push(t), n.afterUploadhandle(e);
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    afterUploadhandle: function(e) {
                        0 == e.code && (this.imageUrl = e.data[0], this.$emit("input", this.imageUrl));
                    },
                    photoCompress: function(e, t) {
                        var n = new FileReader();
                        n.readAsDataURL(e);
                        var a = this;
                        n.onload = function() {
                            var n = this.result;
                            a.canvasDataURL(n, e.type, t);
                        };
                    },
                    canvasDataURL: function(e, t, n) {
                        var a = this, i = new Image();
                        i.src = e, i.onload = function() {
                            var i = atob(e.split(",")[1]).length;
                            if (i <= 204800) n(e); else {
                                var o, u = this, l = u.width, r = u.height, c = l / r, d = !1;
                                l < 200 ? (d = !0, o = 204800 / i, r = (l = l) / c) : (o = .9, r = (l -= 200) / c);
                                var s = document.createElement("canvas"), p = s.getContext("2d"), f = document.createAttribute("width");
                                f.nodeValue = l;
                                var m = document.createAttribute("height");
                                m.nodeValue = r, s.setAttributeNode(f), s.setAttributeNode(m), p.drawImage(u, 0, 0, l, r);
                                var h = s.toDataURL("image/jpeg", o);
                                atob(h.split(",")[1]).length > 204800 && !d ? a.canvasDataURL(h, t, n) : n(h);
                            }
                        };
                    },
                    dataURLtoFile: function(e, t) {
                        for (var n = e.split(","), a = n[0].match(/:(.*?);/)[1], i = atob(n[1]), o = i.length, u = new Uint8Array(o); o--; ) u[o] = i.charCodeAt(o);
                        return new File([ u ], t.split(".")[0] + ".jpg", {
                            type: a
                        });
                    }
                }
            };
            t.default = i;
        }).call(this, n("543d").default);
    },
    e338: function(e, t, n) {
        var a = n("bdbc");
        n.n(a).a;
    },
    eaaa: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            uGap: function() {
                return n.e("uview-ui/components/u-gap/u-gap").then(n.bind(null, "7887"));
            },
            uImage: function() {
                return n.e("uview-ui/components/u-image/u-image").then(n.bind(null, "6ffe"));
            },
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "3bc3"));
            },
            uModal: function() {
                return n.e("uview-ui/components/u-modal/u-modal").then(n.bind(null, "408e"));
            },
            uCellGroup: function() {
                return n.e("uview-ui/components/u-cell-group/u-cell-group").then(n.bind(null, "ffca"));
            },
            uCellItem: function() {
                return n.e("uview-ui/components/u-cell-item/u-cell-item").then(n.bind(null, "3e1d"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/lpp-upload/index-create-component", {
    "components/lpp-upload/index-create-component": function(e, t, n) {
        n("543d").createComponent(n("0d93"));
    }
}, [ [ "components/lpp-upload/index-create-component" ] ] ]);