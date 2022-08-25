require("../@babel/runtime/helpers/Arrayincludes");

var e = require("../@babel/runtime/helpers/typeof");

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    "00b6": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = {
            lunarInfo: [ 19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560 ],
            solarMonth: [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],
            Gan: [ "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸" ],
            Zhi: [ "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥" ],
            Animals: [ "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪" ],
            solarTerm: [ "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至" ],
            sTermInfo: [ "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722" ],
            nStr1: [ "日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十" ],
            nStr2: [ "初", "十", "廿", "卅" ],
            nStr3: [ "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊" ],
            lYearDays: function(e) {
                var a, t = 348;
                for (a = 32768; a > 8; a >>= 1) t += this.lunarInfo[e - 1900] & a ? 1 : 0;
                return t + this.leapDays(e);
            },
            leapMonth: function(e) {
                return 15 & this.lunarInfo[e - 1900];
            },
            leapDays: function(e) {
                return this.leapMonth(e) ? 65536 & this.lunarInfo[e - 1900] ? 30 : 29 : 0;
            },
            monthDays: function(e, a) {
                return a > 12 || a < 1 ? -1 : this.lunarInfo[e - 1900] & 65536 >> a ? 30 : 29;
            },
            solarDays: function(e, a) {
                if (a > 12 || a < 1) return -1;
                var t = a - 1;
                return 1 == t ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : this.solarMonth[t];
            },
            toGanZhiYear: function(e) {
                var a = (e - 3) % 10, t = (e - 3) % 12;
                return 0 == a && (a = 10), 0 == t && (t = 12), this.Gan[a - 1] + this.Zhi[t - 1];
            },
            toAstro: function(e, a) {
                return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (a < [ 20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22 ][e - 1] ? 2 : 0), 2) + "座";
            },
            toGanZhi: function(e) {
                return this.Gan[e % 10] + this.Zhi[e % 12];
            },
            getTerm: function(e, a) {
                if (e < 1900 || e > 2100) return -1;
                if (a < 1 || a > 24) return -1;
                var t = this.sTermInfo[e - 1900], l = [ parseInt("0x" + t.substr(0, 5)).toString(), parseInt("0x" + t.substr(5, 5)).toString(), parseInt("0x" + t.substr(10, 5)).toString(), parseInt("0x" + t.substr(15, 5)).toString(), parseInt("0x" + t.substr(20, 5)).toString(), parseInt("0x" + t.substr(25, 5)).toString() ], n = [ l[0].substr(0, 1), l[0].substr(1, 2), l[0].substr(3, 1), l[0].substr(4, 2), l[1].substr(0, 1), l[1].substr(1, 2), l[1].substr(3, 1), l[1].substr(4, 2), l[2].substr(0, 1), l[2].substr(1, 2), l[2].substr(3, 1), l[2].substr(4, 2), l[3].substr(0, 1), l[3].substr(1, 2), l[3].substr(3, 1), l[3].substr(4, 2), l[4].substr(0, 1), l[4].substr(1, 2), l[4].substr(3, 1), l[4].substr(4, 2), l[5].substr(0, 1), l[5].substr(1, 2), l[5].substr(3, 1), l[5].substr(4, 2) ];
                return parseInt(n[a - 1]);
            },
            toChinaMonth: function(e) {
                if (e > 12 || e < 1) return -1;
                var a = this.nStr3[e - 1];
                return a += "月";
            },
            toChinaDay: function(e) {
                var a;
                switch (e) {
                  case 10:
                    a = "初十";
                    break;

                  case 20:
                    a = "二十";
                    break;

                  case 30:
                    a = "三十";
                    break;

                  default:
                    a = this.nStr2[Math.floor(e / 10)], a += this.nStr1[e % 10];
                }
                return a;
            },
            getAnimal: function(e) {
                return this.Animals[(e - 4) % 12];
            },
            solar2lunar: function(e, a, t) {
                if (e < 1900 || e > 2100) return -1;
                if (1900 == e && 1 == a && t < 31) return -1;
                if (e) l = new Date(e, parseInt(a) - 1, t); else var l = new Date();
                var n, r, u = 0, i = (e = l.getFullYear(), a = l.getMonth() + 1, t = l.getDate(), 
                (Date.UTC(l.getFullYear(), l.getMonth(), l.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
                for (n = 1900; n < 2101 && i > 0; n++) i -= u = this.lYearDays(n);
                i < 0 && (i += u, n--);
                var o = new Date(), s = !1;
                o.getFullYear() == e && o.getMonth() + 1 == a && o.getDate() == t && (s = !0);
                var c = l.getDay(), v = this.nStr1[c];
                0 == c && (c = 7);
                var f = n, b = (r = this.leapMonth(n), !1);
                for (n = 1; n < 13 && i > 0; n++) r > 0 && n == r + 1 && 0 == b ? (--n, b = !0, 
                u = this.leapDays(f)) : u = this.monthDays(f, n), 1 == b && n == r + 1 && (b = !1), 
                i -= u;
                0 == i && r > 0 && n == r + 1 && (b ? b = !1 : (b = !0, --n)), i < 0 && (i += u, 
                --n);
                var d = n, h = i + 1, p = a - 1, g = this.toGanZhiYear(f), y = this.getTerm(e, 2 * a - 1), m = this.getTerm(e, 2 * a), _ = this.toGanZhi(12 * (e - 1900) + a + 11);
                t >= y && (_ = this.toGanZhi(12 * (e - 1900) + a + 12));
                var w = !1, k = null;
                y == t && (w = !0, k = this.solarTerm[2 * a - 2]), m == t && (w = !0, k = this.solarTerm[2 * a - 1]);
                var O = Date.UTC(e, p, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, x = this.toGanZhi(O + t - 1), A = this.toAstro(a, t);
                return {
                    lYear: f,
                    lMonth: d,
                    lDay: h,
                    Animal: this.getAnimal(f),
                    IMonthCn: (b ? "闰" : "") + this.toChinaMonth(d),
                    IDayCn: this.toChinaDay(h),
                    cYear: e,
                    cMonth: a,
                    cDay: t,
                    gzYear: g,
                    gzMonth: _,
                    gzDay: x,
                    isToday: s,
                    isLeap: b,
                    nWeek: c,
                    ncWeek: "星期" + v,
                    isTerm: w,
                    Term: k,
                    astro: A
                };
            },
            lunar2solar: function(e, a, t, l) {
                l = !!l;
                var n = this.leapMonth(e);
                if (this.leapDays(e), l && n != a) return -1;
                if (2100 == e && 12 == a && t > 1 || 1900 == e && 1 == a && t < 31) return -1;
                var r = this.monthDays(e, a), u = r;
                if (l && (u = this.leapDays(e, a)), e < 1900 || e > 2100 || t > u) return -1;
                for (var i = 0, o = 1900; o < e; o++) i += this.lYearDays(o);
                var s = 0, c = !1;
                for (o = 1; o < a; o++) s = this.leapMonth(e), c || s <= o && s > 0 && (i += this.leapDays(e), 
                c = !0), i += this.monthDays(e, o);
                l && (i += r);
                var v = Date.UTC(1900, 1, 30, 0, 0, 0), f = new Date(864e5 * (i + t - 31) + v), b = f.getUTCFullYear(), d = f.getUTCMonth() + 1, h = f.getUTCDate();
                return this.solar2lunar(b, d, h);
            }
        };
        a.default = l;
    },
    "043d": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function(e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        };
    },
    "049f": function(e, a, t) {
        var l;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var n = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            t ? l || (l = !0, "function" == typeof e && e(), setTimeout(function() {
                l = !1;
            }, a)) : l || (l = !0, setTimeout(function() {
                l = !1, "function" == typeof e && e();
            }, a));
        };
        a.default = n;
    },
    "0715": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = [ [ [ {
            label: "东城区",
            value: "110101"
        }, {
            label: "西城区",
            value: "110102"
        }, {
            label: "朝阳区",
            value: "110105"
        }, {
            label: "丰台区",
            value: "110106"
        }, {
            label: "石景山区",
            value: "110107"
        }, {
            label: "海淀区",
            value: "110108"
        }, {
            label: "门头沟区",
            value: "110109"
        }, {
            label: "房山区",
            value: "110111"
        }, {
            label: "通州区",
            value: "110112"
        }, {
            label: "顺义区",
            value: "110113"
        }, {
            label: "昌平区",
            value: "110114"
        }, {
            label: "大兴区",
            value: "110115"
        }, {
            label: "怀柔区",
            value: "110116"
        }, {
            label: "平谷区",
            value: "110117"
        }, {
            label: "密云区",
            value: "110118"
        }, {
            label: "延庆区",
            value: "110119"
        } ] ], [ [ {
            label: "和平区",
            value: "120101"
        }, {
            label: "河东区",
            value: "120102"
        }, {
            label: "河西区",
            value: "120103"
        }, {
            label: "南开区",
            value: "120104"
        }, {
            label: "河北区",
            value: "120105"
        }, {
            label: "红桥区",
            value: "120106"
        }, {
            label: "东丽区",
            value: "120110"
        }, {
            label: "西青区",
            value: "120111"
        }, {
            label: "津南区",
            value: "120112"
        }, {
            label: "北辰区",
            value: "120113"
        }, {
            label: "武清区",
            value: "120114"
        }, {
            label: "宝坻区",
            value: "120115"
        }, {
            label: "滨海新区",
            value: "120116"
        }, {
            label: "宁河区",
            value: "120117"
        }, {
            label: "静海区",
            value: "120118"
        }, {
            label: "蓟州区",
            value: "120119"
        } ] ], [ [ {
            label: "长安区",
            value: "130102"
        }, {
            label: "桥西区",
            value: "130104"
        }, {
            label: "新华区",
            value: "130105"
        }, {
            label: "井陉矿区",
            value: "130107"
        }, {
            label: "裕华区",
            value: "130108"
        }, {
            label: "藁城区",
            value: "130109"
        }, {
            label: "鹿泉区",
            value: "130110"
        }, {
            label: "栾城区",
            value: "130111"
        }, {
            label: "井陉县",
            value: "130121"
        }, {
            label: "正定县",
            value: "130123"
        }, {
            label: "行唐县",
            value: "130125"
        }, {
            label: "灵寿县",
            value: "130126"
        }, {
            label: "高邑县",
            value: "130127"
        }, {
            label: "深泽县",
            value: "130128"
        }, {
            label: "赞皇县",
            value: "130129"
        }, {
            label: "无极县",
            value: "130130"
        }, {
            label: "平山县",
            value: "130131"
        }, {
            label: "元氏县",
            value: "130132"
        }, {
            label: "赵县",
            value: "130133"
        }, {
            label: "石家庄高新技术产业开发区",
            value: "130171"
        }, {
            label: "石家庄循环化工园区",
            value: "130172"
        }, {
            label: "辛集市",
            value: "130181"
        }, {
            label: "晋州市",
            value: "130183"
        }, {
            label: "新乐市",
            value: "130184"
        } ], [ {
            label: "路南区",
            value: "130202"
        }, {
            label: "路北区",
            value: "130203"
        }, {
            label: "古冶区",
            value: "130204"
        }, {
            label: "开平区",
            value: "130205"
        }, {
            label: "丰南区",
            value: "130207"
        }, {
            label: "丰润区",
            value: "130208"
        }, {
            label: "曹妃甸区",
            value: "130209"
        }, {
            label: "滦县",
            value: "130223"
        }, {
            label: "滦南县",
            value: "130224"
        }, {
            label: "乐亭县",
            value: "130225"
        }, {
            label: "迁西县",
            value: "130227"
        }, {
            label: "玉田县",
            value: "130229"
        }, {
            label: "唐山市芦台经济技术开发区",
            value: "130271"
        }, {
            label: "唐山市汉沽管理区",
            value: "130272"
        }, {
            label: "唐山高新技术产业开发区",
            value: "130273"
        }, {
            label: "河北唐山海港经济开发区",
            value: "130274"
        }, {
            label: "遵化市",
            value: "130281"
        }, {
            label: "迁安市",
            value: "130283"
        } ], [ {
            label: "海港区",
            value: "130302"
        }, {
            label: "山海关区",
            value: "130303"
        }, {
            label: "北戴河区",
            value: "130304"
        }, {
            label: "抚宁区",
            value: "130306"
        }, {
            label: "青龙满族自治县",
            value: "130321"
        }, {
            label: "昌黎县",
            value: "130322"
        }, {
            label: "卢龙县",
            value: "130324"
        }, {
            label: "秦皇岛市经济技术开发区",
            value: "130371"
        }, {
            label: "北戴河新区",
            value: "130372"
        } ], [ {
            label: "邯山区",
            value: "130402"
        }, {
            label: "丛台区",
            value: "130403"
        }, {
            label: "复兴区",
            value: "130404"
        }, {
            label: "峰峰矿区",
            value: "130406"
        }, {
            label: "肥乡区",
            value: "130407"
        }, {
            label: "永年区",
            value: "130408"
        }, {
            label: "临漳县",
            value: "130423"
        }, {
            label: "成安县",
            value: "130424"
        }, {
            label: "大名县",
            value: "130425"
        }, {
            label: "涉县",
            value: "130426"
        }, {
            label: "磁县",
            value: "130427"
        }, {
            label: "邱县",
            value: "130430"
        }, {
            label: "鸡泽县",
            value: "130431"
        }, {
            label: "广平县",
            value: "130432"
        }, {
            label: "馆陶县",
            value: "130433"
        }, {
            label: "魏县",
            value: "130434"
        }, {
            label: "曲周县",
            value: "130435"
        }, {
            label: "邯郸经济技术开发区",
            value: "130471"
        }, {
            label: "邯郸冀南新区",
            value: "130473"
        }, {
            label: "武安市",
            value: "130481"
        } ], [ {
            label: "桥东区",
            value: "130502"
        }, {
            label: "桥西区",
            value: "130503"
        }, {
            label: "邢台县",
            value: "130521"
        }, {
            label: "临城县",
            value: "130522"
        }, {
            label: "内丘县",
            value: "130523"
        }, {
            label: "柏乡县",
            value: "130524"
        }, {
            label: "隆尧县",
            value: "130525"
        }, {
            label: "任县",
            value: "130526"
        }, {
            label: "南和县",
            value: "130527"
        }, {
            label: "宁晋县",
            value: "130528"
        }, {
            label: "巨鹿县",
            value: "130529"
        }, {
            label: "新河县",
            value: "130530"
        }, {
            label: "广宗县",
            value: "130531"
        }, {
            label: "平乡县",
            value: "130532"
        }, {
            label: "威县",
            value: "130533"
        }, {
            label: "清河县",
            value: "130534"
        }, {
            label: "临西县",
            value: "130535"
        }, {
            label: "河北邢台经济开发区",
            value: "130571"
        }, {
            label: "南宫市",
            value: "130581"
        }, {
            label: "沙河市",
            value: "130582"
        } ], [ {
            label: "竞秀区",
            value: "130602"
        }, {
            label: "莲池区",
            value: "130606"
        }, {
            label: "满城区",
            value: "130607"
        }, {
            label: "清苑区",
            value: "130608"
        }, {
            label: "徐水区",
            value: "130609"
        }, {
            label: "涞水县",
            value: "130623"
        }, {
            label: "阜平县",
            value: "130624"
        }, {
            label: "定兴县",
            value: "130626"
        }, {
            label: "唐县",
            value: "130627"
        }, {
            label: "高阳县",
            value: "130628"
        }, {
            label: "容城县",
            value: "130629"
        }, {
            label: "涞源县",
            value: "130630"
        }, {
            label: "望都县",
            value: "130631"
        }, {
            label: "安新县",
            value: "130632"
        }, {
            label: "易县",
            value: "130633"
        }, {
            label: "曲阳县",
            value: "130634"
        }, {
            label: "蠡县",
            value: "130635"
        }, {
            label: "顺平县",
            value: "130636"
        }, {
            label: "博野县",
            value: "130637"
        }, {
            label: "雄县",
            value: "130638"
        }, {
            label: "保定高新技术产业开发区",
            value: "130671"
        }, {
            label: "保定白沟新城",
            value: "130672"
        }, {
            label: "涿州市",
            value: "130681"
        }, {
            label: "定州市",
            value: "130682"
        }, {
            label: "安国市",
            value: "130683"
        }, {
            label: "高碑店市",
            value: "130684"
        } ], [ {
            label: "桥东区",
            value: "130702"
        }, {
            label: "桥西区",
            value: "130703"
        }, {
            label: "宣化区",
            value: "130705"
        }, {
            label: "下花园区",
            value: "130706"
        }, {
            label: "万全区",
            value: "130708"
        }, {
            label: "崇礼区",
            value: "130709"
        }, {
            label: "张北县",
            value: "130722"
        }, {
            label: "康保县",
            value: "130723"
        }, {
            label: "沽源县",
            value: "130724"
        }, {
            label: "尚义县",
            value: "130725"
        }, {
            label: "蔚县",
            value: "130726"
        }, {
            label: "阳原县",
            value: "130727"
        }, {
            label: "怀安县",
            value: "130728"
        }, {
            label: "怀来县",
            value: "130730"
        }, {
            label: "涿鹿县",
            value: "130731"
        }, {
            label: "赤城县",
            value: "130732"
        }, {
            label: "张家口市高新技术产业开发区",
            value: "130771"
        }, {
            label: "张家口市察北管理区",
            value: "130772"
        }, {
            label: "张家口市塞北管理区",
            value: "130773"
        } ], [ {
            label: "双桥区",
            value: "130802"
        }, {
            label: "双滦区",
            value: "130803"
        }, {
            label: "鹰手营子矿区",
            value: "130804"
        }, {
            label: "承德县",
            value: "130821"
        }, {
            label: "兴隆县",
            value: "130822"
        }, {
            label: "滦平县",
            value: "130824"
        }, {
            label: "隆化县",
            value: "130825"
        }, {
            label: "丰宁满族自治县",
            value: "130826"
        }, {
            label: "宽城满族自治县",
            value: "130827"
        }, {
            label: "围场满族蒙古族自治县",
            value: "130828"
        }, {
            label: "承德高新技术产业开发区",
            value: "130871"
        }, {
            label: "平泉市",
            value: "130881"
        } ], [ {
            label: "新华区",
            value: "130902"
        }, {
            label: "运河区",
            value: "130903"
        }, {
            label: "沧县",
            value: "130921"
        }, {
            label: "青县",
            value: "130922"
        }, {
            label: "东光县",
            value: "130923"
        }, {
            label: "海兴县",
            value: "130924"
        }, {
            label: "盐山县",
            value: "130925"
        }, {
            label: "肃宁县",
            value: "130926"
        }, {
            label: "南皮县",
            value: "130927"
        }, {
            label: "吴桥县",
            value: "130928"
        }, {
            label: "献县",
            value: "130929"
        }, {
            label: "孟村回族自治县",
            value: "130930"
        }, {
            label: "河北沧州经济开发区",
            value: "130971"
        }, {
            label: "沧州高新技术产业开发区",
            value: "130972"
        }, {
            label: "沧州渤海新区",
            value: "130973"
        }, {
            label: "泊头市",
            value: "130981"
        }, {
            label: "任丘市",
            value: "130982"
        }, {
            label: "黄骅市",
            value: "130983"
        }, {
            label: "河间市",
            value: "130984"
        } ], [ {
            label: "安次区",
            value: "131002"
        }, {
            label: "广阳区",
            value: "131003"
        }, {
            label: "固安县",
            value: "131022"
        }, {
            label: "永清县",
            value: "131023"
        }, {
            label: "香河县",
            value: "131024"
        }, {
            label: "大城县",
            value: "131025"
        }, {
            label: "文安县",
            value: "131026"
        }, {
            label: "大厂回族自治县",
            value: "131028"
        }, {
            label: "廊坊经济技术开发区",
            value: "131071"
        }, {
            label: "霸州市",
            value: "131081"
        }, {
            label: "三河市",
            value: "131082"
        } ], [ {
            label: "桃城区",
            value: "131102"
        }, {
            label: "冀州区",
            value: "131103"
        }, {
            label: "枣强县",
            value: "131121"
        }, {
            label: "武邑县",
            value: "131122"
        }, {
            label: "武强县",
            value: "131123"
        }, {
            label: "饶阳县",
            value: "131124"
        }, {
            label: "安平县",
            value: "131125"
        }, {
            label: "故城县",
            value: "131126"
        }, {
            label: "景县",
            value: "131127"
        }, {
            label: "阜城县",
            value: "131128"
        }, {
            label: "河北衡水经济开发区",
            value: "131171"
        }, {
            label: "衡水滨湖新区",
            value: "131172"
        }, {
            label: "深州市",
            value: "131182"
        } ] ], [ [ {
            label: "小店区",
            value: "140105"
        }, {
            label: "迎泽区",
            value: "140106"
        }, {
            label: "杏花岭区",
            value: "140107"
        }, {
            label: "尖草坪区",
            value: "140108"
        }, {
            label: "万柏林区",
            value: "140109"
        }, {
            label: "晋源区",
            value: "140110"
        }, {
            label: "清徐县",
            value: "140121"
        }, {
            label: "阳曲县",
            value: "140122"
        }, {
            label: "娄烦县",
            value: "140123"
        }, {
            label: "山西转型综合改革示范区",
            value: "140171"
        }, {
            label: "古交市",
            value: "140181"
        } ], [ {
            label: "城区",
            value: "140202"
        }, {
            label: "矿区",
            value: "140203"
        }, {
            label: "南郊区",
            value: "140211"
        }, {
            label: "新荣区",
            value: "140212"
        }, {
            label: "阳高县",
            value: "140221"
        }, {
            label: "天镇县",
            value: "140222"
        }, {
            label: "广灵县",
            value: "140223"
        }, {
            label: "灵丘县",
            value: "140224"
        }, {
            label: "浑源县",
            value: "140225"
        }, {
            label: "左云县",
            value: "140226"
        }, {
            label: "大同县",
            value: "140227"
        }, {
            label: "山西大同经济开发区",
            value: "140271"
        } ], [ {
            label: "城区",
            value: "140302"
        }, {
            label: "矿区",
            value: "140303"
        }, {
            label: "郊区",
            value: "140311"
        }, {
            label: "平定县",
            value: "140321"
        }, {
            label: "盂县",
            value: "140322"
        }, {
            label: "山西阳泉经济开发区",
            value: "140371"
        } ], [ {
            label: "城区",
            value: "140402"
        }, {
            label: "郊区",
            value: "140411"
        }, {
            label: "长治县",
            value: "140421"
        }, {
            label: "襄垣县",
            value: "140423"
        }, {
            label: "屯留县",
            value: "140424"
        }, {
            label: "平顺县",
            value: "140425"
        }, {
            label: "黎城县",
            value: "140426"
        }, {
            label: "壶关县",
            value: "140427"
        }, {
            label: "长子县",
            value: "140428"
        }, {
            label: "武乡县",
            value: "140429"
        }, {
            label: "沁县",
            value: "140430"
        }, {
            label: "沁源县",
            value: "140431"
        }, {
            label: "山西长治高新技术产业园区",
            value: "140471"
        }, {
            label: "潞城市",
            value: "140481"
        } ], [ {
            label: "城区",
            value: "140502"
        }, {
            label: "沁水县",
            value: "140521"
        }, {
            label: "阳城县",
            value: "140522"
        }, {
            label: "陵川县",
            value: "140524"
        }, {
            label: "泽州县",
            value: "140525"
        }, {
            label: "高平市",
            value: "140581"
        } ], [ {
            label: "朔城区",
            value: "140602"
        }, {
            label: "平鲁区",
            value: "140603"
        }, {
            label: "山阴县",
            value: "140621"
        }, {
            label: "应县",
            value: "140622"
        }, {
            label: "右玉县",
            value: "140623"
        }, {
            label: "怀仁县",
            value: "140624"
        }, {
            label: "山西朔州经济开发区",
            value: "140671"
        } ], [ {
            label: "榆次区",
            value: "140702"
        }, {
            label: "榆社县",
            value: "140721"
        }, {
            label: "左权县",
            value: "140722"
        }, {
            label: "和顺县",
            value: "140723"
        }, {
            label: "昔阳县",
            value: "140724"
        }, {
            label: "寿阳县",
            value: "140725"
        }, {
            label: "太谷县",
            value: "140726"
        }, {
            label: "祁县",
            value: "140727"
        }, {
            label: "平遥县",
            value: "140728"
        }, {
            label: "灵石县",
            value: "140729"
        }, {
            label: "介休市",
            value: "140781"
        } ], [ {
            label: "盐湖区",
            value: "140802"
        }, {
            label: "临猗县",
            value: "140821"
        }, {
            label: "万荣县",
            value: "140822"
        }, {
            label: "闻喜县",
            value: "140823"
        }, {
            label: "稷山县",
            value: "140824"
        }, {
            label: "新绛县",
            value: "140825"
        }, {
            label: "绛县",
            value: "140826"
        }, {
            label: "垣曲县",
            value: "140827"
        }, {
            label: "夏县",
            value: "140828"
        }, {
            label: "平陆县",
            value: "140829"
        }, {
            label: "芮城县",
            value: "140830"
        }, {
            label: "永济市",
            value: "140881"
        }, {
            label: "河津市",
            value: "140882"
        } ], [ {
            label: "忻府区",
            value: "140902"
        }, {
            label: "定襄县",
            value: "140921"
        }, {
            label: "五台县",
            value: "140922"
        }, {
            label: "代县",
            value: "140923"
        }, {
            label: "繁峙县",
            value: "140924"
        }, {
            label: "宁武县",
            value: "140925"
        }, {
            label: "静乐县",
            value: "140926"
        }, {
            label: "神池县",
            value: "140927"
        }, {
            label: "五寨县",
            value: "140928"
        }, {
            label: "岢岚县",
            value: "140929"
        }, {
            label: "河曲县",
            value: "140930"
        }, {
            label: "保德县",
            value: "140931"
        }, {
            label: "偏关县",
            value: "140932"
        }, {
            label: "五台山风景名胜区",
            value: "140971"
        }, {
            label: "原平市",
            value: "140981"
        } ], [ {
            label: "尧都区",
            value: "141002"
        }, {
            label: "曲沃县",
            value: "141021"
        }, {
            label: "翼城县",
            value: "141022"
        }, {
            label: "襄汾县",
            value: "141023"
        }, {
            label: "洪洞县",
            value: "141024"
        }, {
            label: "古县",
            value: "141025"
        }, {
            label: "安泽县",
            value: "141026"
        }, {
            label: "浮山县",
            value: "141027"
        }, {
            label: "吉县",
            value: "141028"
        }, {
            label: "乡宁县",
            value: "141029"
        }, {
            label: "大宁县",
            value: "141030"
        }, {
            label: "隰县",
            value: "141031"
        }, {
            label: "永和县",
            value: "141032"
        }, {
            label: "蒲县",
            value: "141033"
        }, {
            label: "汾西县",
            value: "141034"
        }, {
            label: "侯马市",
            value: "141081"
        }, {
            label: "霍州市",
            value: "141082"
        } ], [ {
            label: "离石区",
            value: "141102"
        }, {
            label: "文水县",
            value: "141121"
        }, {
            label: "交城县",
            value: "141122"
        }, {
            label: "兴县",
            value: "141123"
        }, {
            label: "临县",
            value: "141124"
        }, {
            label: "柳林县",
            value: "141125"
        }, {
            label: "石楼县",
            value: "141126"
        }, {
            label: "岚县",
            value: "141127"
        }, {
            label: "方山县",
            value: "141128"
        }, {
            label: "中阳县",
            value: "141129"
        }, {
            label: "交口县",
            value: "141130"
        }, {
            label: "孝义市",
            value: "141181"
        }, {
            label: "汾阳市",
            value: "141182"
        } ] ], [ [ {
            label: "新城区",
            value: "150102"
        }, {
            label: "回民区",
            value: "150103"
        }, {
            label: "玉泉区",
            value: "150104"
        }, {
            label: "赛罕区",
            value: "150105"
        }, {
            label: "土默特左旗",
            value: "150121"
        }, {
            label: "托克托县",
            value: "150122"
        }, {
            label: "和林格尔县",
            value: "150123"
        }, {
            label: "清水河县",
            value: "150124"
        }, {
            label: "武川县",
            value: "150125"
        }, {
            label: "呼和浩特金海工业园区",
            value: "150171"
        }, {
            label: "呼和浩特经济技术开发区",
            value: "150172"
        } ], [ {
            label: "东河区",
            value: "150202"
        }, {
            label: "昆都仑区",
            value: "150203"
        }, {
            label: "青山区",
            value: "150204"
        }, {
            label: "石拐区",
            value: "150205"
        }, {
            label: "白云鄂博矿区",
            value: "150206"
        }, {
            label: "九原区",
            value: "150207"
        }, {
            label: "土默特右旗",
            value: "150221"
        }, {
            label: "固阳县",
            value: "150222"
        }, {
            label: "达尔罕茂明安联合旗",
            value: "150223"
        }, {
            label: "包头稀土高新技术产业开发区",
            value: "150271"
        } ], [ {
            label: "海勃湾区",
            value: "150302"
        }, {
            label: "海南区",
            value: "150303"
        }, {
            label: "乌达区",
            value: "150304"
        } ], [ {
            label: "红山区",
            value: "150402"
        }, {
            label: "元宝山区",
            value: "150403"
        }, {
            label: "松山区",
            value: "150404"
        }, {
            label: "阿鲁科尔沁旗",
            value: "150421"
        }, {
            label: "巴林左旗",
            value: "150422"
        }, {
            label: "巴林右旗",
            value: "150423"
        }, {
            label: "林西县",
            value: "150424"
        }, {
            label: "克什克腾旗",
            value: "150425"
        }, {
            label: "翁牛特旗",
            value: "150426"
        }, {
            label: "喀喇沁旗",
            value: "150428"
        }, {
            label: "宁城县",
            value: "150429"
        }, {
            label: "敖汉旗",
            value: "150430"
        } ], [ {
            label: "科尔沁区",
            value: "150502"
        }, {
            label: "科尔沁左翼中旗",
            value: "150521"
        }, {
            label: "科尔沁左翼后旗",
            value: "150522"
        }, {
            label: "开鲁县",
            value: "150523"
        }, {
            label: "库伦旗",
            value: "150524"
        }, {
            label: "奈曼旗",
            value: "150525"
        }, {
            label: "扎鲁特旗",
            value: "150526"
        }, {
            label: "通辽经济技术开发区",
            value: "150571"
        }, {
            label: "霍林郭勒市",
            value: "150581"
        } ], [ {
            label: "东胜区",
            value: "150602"
        }, {
            label: "康巴什区",
            value: "150603"
        }, {
            label: "达拉特旗",
            value: "150621"
        }, {
            label: "准格尔旗",
            value: "150622"
        }, {
            label: "鄂托克前旗",
            value: "150623"
        }, {
            label: "鄂托克旗",
            value: "150624"
        }, {
            label: "杭锦旗",
            value: "150625"
        }, {
            label: "乌审旗",
            value: "150626"
        }, {
            label: "伊金霍洛旗",
            value: "150627"
        } ], [ {
            label: "海拉尔区",
            value: "150702"
        }, {
            label: "扎赉诺尔区",
            value: "150703"
        }, {
            label: "阿荣旗",
            value: "150721"
        }, {
            label: "莫力达瓦达斡尔族自治旗",
            value: "150722"
        }, {
            label: "鄂伦春自治旗",
            value: "150723"
        }, {
            label: "鄂温克族自治旗",
            value: "150724"
        }, {
            label: "陈巴尔虎旗",
            value: "150725"
        }, {
            label: "新巴尔虎左旗",
            value: "150726"
        }, {
            label: "新巴尔虎右旗",
            value: "150727"
        }, {
            label: "满洲里市",
            value: "150781"
        }, {
            label: "牙克石市",
            value: "150782"
        }, {
            label: "扎兰屯市",
            value: "150783"
        }, {
            label: "额尔古纳市",
            value: "150784"
        }, {
            label: "根河市",
            value: "150785"
        } ], [ {
            label: "临河区",
            value: "150802"
        }, {
            label: "五原县",
            value: "150821"
        }, {
            label: "磴口县",
            value: "150822"
        }, {
            label: "乌拉特前旗",
            value: "150823"
        }, {
            label: "乌拉特中旗",
            value: "150824"
        }, {
            label: "乌拉特后旗",
            value: "150825"
        }, {
            label: "杭锦后旗",
            value: "150826"
        } ], [ {
            label: "集宁区",
            value: "150902"
        }, {
            label: "卓资县",
            value: "150921"
        }, {
            label: "化德县",
            value: "150922"
        }, {
            label: "商都县",
            value: "150923"
        }, {
            label: "兴和县",
            value: "150924"
        }, {
            label: "凉城县",
            value: "150925"
        }, {
            label: "察哈尔右翼前旗",
            value: "150926"
        }, {
            label: "察哈尔右翼中旗",
            value: "150927"
        }, {
            label: "察哈尔右翼后旗",
            value: "150928"
        }, {
            label: "四子王旗",
            value: "150929"
        }, {
            label: "丰镇市",
            value: "150981"
        } ], [ {
            label: "乌兰浩特市",
            value: "152201"
        }, {
            label: "阿尔山市",
            value: "152202"
        }, {
            label: "科尔沁右翼前旗",
            value: "152221"
        }, {
            label: "科尔沁右翼中旗",
            value: "152222"
        }, {
            label: "扎赉特旗",
            value: "152223"
        }, {
            label: "突泉县",
            value: "152224"
        } ], [ {
            label: "二连浩特市",
            value: "152501"
        }, {
            label: "锡林浩特市",
            value: "152502"
        }, {
            label: "阿巴嘎旗",
            value: "152522"
        }, {
            label: "苏尼特左旗",
            value: "152523"
        }, {
            label: "苏尼特右旗",
            value: "152524"
        }, {
            label: "东乌珠穆沁旗",
            value: "152525"
        }, {
            label: "西乌珠穆沁旗",
            value: "152526"
        }, {
            label: "太仆寺旗",
            value: "152527"
        }, {
            label: "镶黄旗",
            value: "152528"
        }, {
            label: "正镶白旗",
            value: "152529"
        }, {
            label: "正蓝旗",
            value: "152530"
        }, {
            label: "多伦县",
            value: "152531"
        }, {
            label: "乌拉盖管委会",
            value: "152571"
        } ], [ {
            label: "阿拉善左旗",
            value: "152921"
        }, {
            label: "阿拉善右旗",
            value: "152922"
        }, {
            label: "额济纳旗",
            value: "152923"
        }, {
            label: "内蒙古阿拉善经济开发区",
            value: "152971"
        } ] ], [ [ {
            label: "和平区",
            value: "210102"
        }, {
            label: "沈河区",
            value: "210103"
        }, {
            label: "大东区",
            value: "210104"
        }, {
            label: "皇姑区",
            value: "210105"
        }, {
            label: "铁西区",
            value: "210106"
        }, {
            label: "苏家屯区",
            value: "210111"
        }, {
            label: "浑南区",
            value: "210112"
        }, {
            label: "沈北新区",
            value: "210113"
        }, {
            label: "于洪区",
            value: "210114"
        }, {
            label: "辽中区",
            value: "210115"
        }, {
            label: "康平县",
            value: "210123"
        }, {
            label: "法库县",
            value: "210124"
        }, {
            label: "新民市",
            value: "210181"
        } ], [ {
            label: "中山区",
            value: "210202"
        }, {
            label: "西岗区",
            value: "210203"
        }, {
            label: "沙河口区",
            value: "210204"
        }, {
            label: "甘井子区",
            value: "210211"
        }, {
            label: "旅顺口区",
            value: "210212"
        }, {
            label: "金州区",
            value: "210213"
        }, {
            label: "普兰店区",
            value: "210214"
        }, {
            label: "长海县",
            value: "210224"
        }, {
            label: "瓦房店市",
            value: "210281"
        }, {
            label: "庄河市",
            value: "210283"
        } ], [ {
            label: "铁东区",
            value: "210302"
        }, {
            label: "铁西区",
            value: "210303"
        }, {
            label: "立山区",
            value: "210304"
        }, {
            label: "千山区",
            value: "210311"
        }, {
            label: "台安县",
            value: "210321"
        }, {
            label: "岫岩满族自治县",
            value: "210323"
        }, {
            label: "海城市",
            value: "210381"
        } ], [ {
            label: "新抚区",
            value: "210402"
        }, {
            label: "东洲区",
            value: "210403"
        }, {
            label: "望花区",
            value: "210404"
        }, {
            label: "顺城区",
            value: "210411"
        }, {
            label: "抚顺县",
            value: "210421"
        }, {
            label: "新宾满族自治县",
            value: "210422"
        }, {
            label: "清原满族自治县",
            value: "210423"
        } ], [ {
            label: "平山区",
            value: "210502"
        }, {
            label: "溪湖区",
            value: "210503"
        }, {
            label: "明山区",
            value: "210504"
        }, {
            label: "南芬区",
            value: "210505"
        }, {
            label: "本溪满族自治县",
            value: "210521"
        }, {
            label: "桓仁满族自治县",
            value: "210522"
        } ], [ {
            label: "元宝区",
            value: "210602"
        }, {
            label: "振兴区",
            value: "210603"
        }, {
            label: "振安区",
            value: "210604"
        }, {
            label: "宽甸满族自治县",
            value: "210624"
        }, {
            label: "东港市",
            value: "210681"
        }, {
            label: "凤城市",
            value: "210682"
        } ], [ {
            label: "古塔区",
            value: "210702"
        }, {
            label: "凌河区",
            value: "210703"
        }, {
            label: "太和区",
            value: "210711"
        }, {
            label: "黑山县",
            value: "210726"
        }, {
            label: "义县",
            value: "210727"
        }, {
            label: "凌海市",
            value: "210781"
        }, {
            label: "北镇市",
            value: "210782"
        } ], [ {
            label: "站前区",
            value: "210802"
        }, {
            label: "西市区",
            value: "210803"
        }, {
            label: "鲅鱼圈区",
            value: "210804"
        }, {
            label: "老边区",
            value: "210811"
        }, {
            label: "盖州市",
            value: "210881"
        }, {
            label: "大石桥市",
            value: "210882"
        } ], [ {
            label: "海州区",
            value: "210902"
        }, {
            label: "新邱区",
            value: "210903"
        }, {
            label: "太平区",
            value: "210904"
        }, {
            label: "清河门区",
            value: "210905"
        }, {
            label: "细河区",
            value: "210911"
        }, {
            label: "阜新蒙古族自治县",
            value: "210921"
        }, {
            label: "彰武县",
            value: "210922"
        } ], [ {
            label: "白塔区",
            value: "211002"
        }, {
            label: "文圣区",
            value: "211003"
        }, {
            label: "宏伟区",
            value: "211004"
        }, {
            label: "弓长岭区",
            value: "211005"
        }, {
            label: "太子河区",
            value: "211011"
        }, {
            label: "辽阳县",
            value: "211021"
        }, {
            label: "灯塔市",
            value: "211081"
        } ], [ {
            label: "双台子区",
            value: "211102"
        }, {
            label: "兴隆台区",
            value: "211103"
        }, {
            label: "大洼区",
            value: "211104"
        }, {
            label: "盘山县",
            value: "211122"
        } ], [ {
            label: "银州区",
            value: "211202"
        }, {
            label: "清河区",
            value: "211204"
        }, {
            label: "铁岭县",
            value: "211221"
        }, {
            label: "西丰县",
            value: "211223"
        }, {
            label: "昌图县",
            value: "211224"
        }, {
            label: "调兵山市",
            value: "211281"
        }, {
            label: "开原市",
            value: "211282"
        } ], [ {
            label: "双塔区",
            value: "211302"
        }, {
            label: "龙城区",
            value: "211303"
        }, {
            label: "朝阳县",
            value: "211321"
        }, {
            label: "建平县",
            value: "211322"
        }, {
            label: "喀喇沁左翼蒙古族自治县",
            value: "211324"
        }, {
            label: "北票市",
            value: "211381"
        }, {
            label: "凌源市",
            value: "211382"
        } ], [ {
            label: "连山区",
            value: "211402"
        }, {
            label: "龙港区",
            value: "211403"
        }, {
            label: "南票区",
            value: "211404"
        }, {
            label: "绥中县",
            value: "211421"
        }, {
            label: "建昌县",
            value: "211422"
        }, {
            label: "兴城市",
            value: "211481"
        } ] ], [ [ {
            label: "南关区",
            value: "220102"
        }, {
            label: "宽城区",
            value: "220103"
        }, {
            label: "朝阳区",
            value: "220104"
        }, {
            label: "二道区",
            value: "220105"
        }, {
            label: "绿园区",
            value: "220106"
        }, {
            label: "双阳区",
            value: "220112"
        }, {
            label: "九台区",
            value: "220113"
        }, {
            label: "农安县",
            value: "220122"
        }, {
            label: "长春经济技术开发区",
            value: "220171"
        }, {
            label: "长春净月高新技术产业开发区",
            value: "220172"
        }, {
            label: "长春高新技术产业开发区",
            value: "220173"
        }, {
            label: "长春汽车经济技术开发区",
            value: "220174"
        }, {
            label: "榆树市",
            value: "220182"
        }, {
            label: "德惠市",
            value: "220183"
        } ], [ {
            label: "昌邑区",
            value: "220202"
        }, {
            label: "龙潭区",
            value: "220203"
        }, {
            label: "船营区",
            value: "220204"
        }, {
            label: "丰满区",
            value: "220211"
        }, {
            label: "永吉县",
            value: "220221"
        }, {
            label: "吉林经济开发区",
            value: "220271"
        }, {
            label: "吉林高新技术产业开发区",
            value: "220272"
        }, {
            label: "吉林中国新加坡食品区",
            value: "220273"
        }, {
            label: "蛟河市",
            value: "220281"
        }, {
            label: "桦甸市",
            value: "220282"
        }, {
            label: "舒兰市",
            value: "220283"
        }, {
            label: "磐石市",
            value: "220284"
        } ], [ {
            label: "铁西区",
            value: "220302"
        }, {
            label: "铁东区",
            value: "220303"
        }, {
            label: "梨树县",
            value: "220322"
        }, {
            label: "伊通满族自治县",
            value: "220323"
        }, {
            label: "公主岭市",
            value: "220381"
        }, {
            label: "双辽市",
            value: "220382"
        } ], [ {
            label: "龙山区",
            value: "220402"
        }, {
            label: "西安区",
            value: "220403"
        }, {
            label: "东丰县",
            value: "220421"
        }, {
            label: "东辽县",
            value: "220422"
        } ], [ {
            label: "东昌区",
            value: "220502"
        }, {
            label: "二道江区",
            value: "220503"
        }, {
            label: "通化县",
            value: "220521"
        }, {
            label: "辉南县",
            value: "220523"
        }, {
            label: "柳河县",
            value: "220524"
        }, {
            label: "梅河口市",
            value: "220581"
        }, {
            label: "集安市",
            value: "220582"
        } ], [ {
            label: "浑江区",
            value: "220602"
        }, {
            label: "江源区",
            value: "220605"
        }, {
            label: "抚松县",
            value: "220621"
        }, {
            label: "靖宇县",
            value: "220622"
        }, {
            label: "长白朝鲜族自治县",
            value: "220623"
        }, {
            label: "临江市",
            value: "220681"
        } ], [ {
            label: "宁江区",
            value: "220702"
        }, {
            label: "前郭尔罗斯蒙古族自治县",
            value: "220721"
        }, {
            label: "长岭县",
            value: "220722"
        }, {
            label: "乾安县",
            value: "220723"
        }, {
            label: "吉林松原经济开发区",
            value: "220771"
        }, {
            label: "扶余市",
            value: "220781"
        } ], [ {
            label: "洮北区",
            value: "220802"
        }, {
            label: "镇赉县",
            value: "220821"
        }, {
            label: "通榆县",
            value: "220822"
        }, {
            label: "吉林白城经济开发区",
            value: "220871"
        }, {
            label: "洮南市",
            value: "220881"
        }, {
            label: "大安市",
            value: "220882"
        } ], [ {
            label: "延吉市",
            value: "222401"
        }, {
            label: "图们市",
            value: "222402"
        }, {
            label: "敦化市",
            value: "222403"
        }, {
            label: "珲春市",
            value: "222404"
        }, {
            label: "龙井市",
            value: "222405"
        }, {
            label: "和龙市",
            value: "222406"
        }, {
            label: "汪清县",
            value: "222424"
        }, {
            label: "安图县",
            value: "222426"
        } ] ], [ [ {
            label: "道里区",
            value: "230102"
        }, {
            label: "南岗区",
            value: "230103"
        }, {
            label: "道外区",
            value: "230104"
        }, {
            label: "平房区",
            value: "230108"
        }, {
            label: "松北区",
            value: "230109"
        }, {
            label: "香坊区",
            value: "230110"
        }, {
            label: "呼兰区",
            value: "230111"
        }, {
            label: "阿城区",
            value: "230112"
        }, {
            label: "双城区",
            value: "230113"
        }, {
            label: "依兰县",
            value: "230123"
        }, {
            label: "方正县",
            value: "230124"
        }, {
            label: "宾县",
            value: "230125"
        }, {
            label: "巴彦县",
            value: "230126"
        }, {
            label: "木兰县",
            value: "230127"
        }, {
            label: "通河县",
            value: "230128"
        }, {
            label: "延寿县",
            value: "230129"
        }, {
            label: "尚志市",
            value: "230183"
        }, {
            label: "五常市",
            value: "230184"
        } ], [ {
            label: "龙沙区",
            value: "230202"
        }, {
            label: "建华区",
            value: "230203"
        }, {
            label: "铁锋区",
            value: "230204"
        }, {
            label: "昂昂溪区",
            value: "230205"
        }, {
            label: "富拉尔基区",
            value: "230206"
        }, {
            label: "碾子山区",
            value: "230207"
        }, {
            label: "梅里斯达斡尔族区",
            value: "230208"
        }, {
            label: "龙江县",
            value: "230221"
        }, {
            label: "依安县",
            value: "230223"
        }, {
            label: "泰来县",
            value: "230224"
        }, {
            label: "甘南县",
            value: "230225"
        }, {
            label: "富裕县",
            value: "230227"
        }, {
            label: "克山县",
            value: "230229"
        }, {
            label: "克东县",
            value: "230230"
        }, {
            label: "拜泉县",
            value: "230231"
        }, {
            label: "讷河市",
            value: "230281"
        } ], [ {
            label: "鸡冠区",
            value: "230302"
        }, {
            label: "恒山区",
            value: "230303"
        }, {
            label: "滴道区",
            value: "230304"
        }, {
            label: "梨树区",
            value: "230305"
        }, {
            label: "城子河区",
            value: "230306"
        }, {
            label: "麻山区",
            value: "230307"
        }, {
            label: "鸡东县",
            value: "230321"
        }, {
            label: "虎林市",
            value: "230381"
        }, {
            label: "密山市",
            value: "230382"
        } ], [ {
            label: "向阳区",
            value: "230402"
        }, {
            label: "工农区",
            value: "230403"
        }, {
            label: "南山区",
            value: "230404"
        }, {
            label: "兴安区",
            value: "230405"
        }, {
            label: "东山区",
            value: "230406"
        }, {
            label: "兴山区",
            value: "230407"
        }, {
            label: "萝北县",
            value: "230421"
        }, {
            label: "绥滨县",
            value: "230422"
        } ], [ {
            label: "尖山区",
            value: "230502"
        }, {
            label: "岭东区",
            value: "230503"
        }, {
            label: "四方台区",
            value: "230505"
        }, {
            label: "宝山区",
            value: "230506"
        }, {
            label: "集贤县",
            value: "230521"
        }, {
            label: "友谊县",
            value: "230522"
        }, {
            label: "宝清县",
            value: "230523"
        }, {
            label: "饶河县",
            value: "230524"
        } ], [ {
            label: "萨尔图区",
            value: "230602"
        }, {
            label: "龙凤区",
            value: "230603"
        }, {
            label: "让胡路区",
            value: "230604"
        }, {
            label: "红岗区",
            value: "230605"
        }, {
            label: "大同区",
            value: "230606"
        }, {
            label: "肇州县",
            value: "230621"
        }, {
            label: "肇源县",
            value: "230622"
        }, {
            label: "林甸县",
            value: "230623"
        }, {
            label: "杜尔伯特蒙古族自治县",
            value: "230624"
        }, {
            label: "大庆高新技术产业开发区",
            value: "230671"
        } ], [ {
            label: "伊春区",
            value: "230702"
        }, {
            label: "南岔区",
            value: "230703"
        }, {
            label: "友好区",
            value: "230704"
        }, {
            label: "西林区",
            value: "230705"
        }, {
            label: "翠峦区",
            value: "230706"
        }, {
            label: "新青区",
            value: "230707"
        }, {
            label: "美溪区",
            value: "230708"
        }, {
            label: "金山屯区",
            value: "230709"
        }, {
            label: "五营区",
            value: "230710"
        }, {
            label: "乌马河区",
            value: "230711"
        }, {
            label: "汤旺河区",
            value: "230712"
        }, {
            label: "带岭区",
            value: "230713"
        }, {
            label: "乌伊岭区",
            value: "230714"
        }, {
            label: "红星区",
            value: "230715"
        }, {
            label: "上甘岭区",
            value: "230716"
        }, {
            label: "嘉荫县",
            value: "230722"
        }, {
            label: "铁力市",
            value: "230781"
        } ], [ {
            label: "向阳区",
            value: "230803"
        }, {
            label: "前进区",
            value: "230804"
        }, {
            label: "东风区",
            value: "230805"
        }, {
            label: "郊区",
            value: "230811"
        }, {
            label: "桦南县",
            value: "230822"
        }, {
            label: "桦川县",
            value: "230826"
        }, {
            label: "汤原县",
            value: "230828"
        }, {
            label: "同江市",
            value: "230881"
        }, {
            label: "富锦市",
            value: "230882"
        }, {
            label: "抚远市",
            value: "230883"
        } ], [ {
            label: "新兴区",
            value: "230902"
        }, {
            label: "桃山区",
            value: "230903"
        }, {
            label: "茄子河区",
            value: "230904"
        }, {
            label: "勃利县",
            value: "230921"
        } ], [ {
            label: "东安区",
            value: "231002"
        }, {
            label: "阳明区",
            value: "231003"
        }, {
            label: "爱民区",
            value: "231004"
        }, {
            label: "西安区",
            value: "231005"
        }, {
            label: "林口县",
            value: "231025"
        }, {
            label: "牡丹江经济技术开发区",
            value: "231071"
        }, {
            label: "绥芬河市",
            value: "231081"
        }, {
            label: "海林市",
            value: "231083"
        }, {
            label: "宁安市",
            value: "231084"
        }, {
            label: "穆棱市",
            value: "231085"
        }, {
            label: "东宁市",
            value: "231086"
        } ], [ {
            label: "爱辉区",
            value: "231102"
        }, {
            label: "嫩江县",
            value: "231121"
        }, {
            label: "逊克县",
            value: "231123"
        }, {
            label: "孙吴县",
            value: "231124"
        }, {
            label: "北安市",
            value: "231181"
        }, {
            label: "五大连池市",
            value: "231182"
        } ], [ {
            label: "北林区",
            value: "231202"
        }, {
            label: "望奎县",
            value: "231221"
        }, {
            label: "兰西县",
            value: "231222"
        }, {
            label: "青冈县",
            value: "231223"
        }, {
            label: "庆安县",
            value: "231224"
        }, {
            label: "明水县",
            value: "231225"
        }, {
            label: "绥棱县",
            value: "231226"
        }, {
            label: "安达市",
            value: "231281"
        }, {
            label: "肇东市",
            value: "231282"
        }, {
            label: "海伦市",
            value: "231283"
        } ], [ {
            label: "加格达奇区",
            value: "232701"
        }, {
            label: "松岭区",
            value: "232702"
        }, {
            label: "新林区",
            value: "232703"
        }, {
            label: "呼中区",
            value: "232704"
        }, {
            label: "呼玛县",
            value: "232721"
        }, {
            label: "塔河县",
            value: "232722"
        }, {
            label: "漠河县",
            value: "232723"
        } ] ], [ [ {
            label: "黄浦区",
            value: "310101"
        }, {
            label: "徐汇区",
            value: "310104"
        }, {
            label: "长宁区",
            value: "310105"
        }, {
            label: "静安区",
            value: "310106"
        }, {
            label: "普陀区",
            value: "310107"
        }, {
            label: "虹口区",
            value: "310109"
        }, {
            label: "杨浦区",
            value: "310110"
        }, {
            label: "闵行区",
            value: "310112"
        }, {
            label: "宝山区",
            value: "310113"
        }, {
            label: "嘉定区",
            value: "310114"
        }, {
            label: "浦东新区",
            value: "310115"
        }, {
            label: "金山区",
            value: "310116"
        }, {
            label: "松江区",
            value: "310117"
        }, {
            label: "青浦区",
            value: "310118"
        }, {
            label: "奉贤区",
            value: "310120"
        }, {
            label: "崇明区",
            value: "310151"
        } ] ], [ [ {
            label: "玄武区",
            value: "320102"
        }, {
            label: "秦淮区",
            value: "320104"
        }, {
            label: "建邺区",
            value: "320105"
        }, {
            label: "鼓楼区",
            value: "320106"
        }, {
            label: "浦口区",
            value: "320111"
        }, {
            label: "栖霞区",
            value: "320113"
        }, {
            label: "雨花台区",
            value: "320114"
        }, {
            label: "江宁区",
            value: "320115"
        }, {
            label: "六合区",
            value: "320116"
        }, {
            label: "溧水区",
            value: "320117"
        }, {
            label: "高淳区",
            value: "320118"
        } ], [ {
            label: "锡山区",
            value: "320205"
        }, {
            label: "惠山区",
            value: "320206"
        }, {
            label: "滨湖区",
            value: "320211"
        }, {
            label: "梁溪区",
            value: "320213"
        }, {
            label: "新吴区",
            value: "320214"
        }, {
            label: "江阴市",
            value: "320281"
        }, {
            label: "宜兴市",
            value: "320282"
        } ], [ {
            label: "鼓楼区",
            value: "320302"
        }, {
            label: "云龙区",
            value: "320303"
        }, {
            label: "贾汪区",
            value: "320305"
        }, {
            label: "泉山区",
            value: "320311"
        }, {
            label: "铜山区",
            value: "320312"
        }, {
            label: "丰县",
            value: "320321"
        }, {
            label: "沛县",
            value: "320322"
        }, {
            label: "睢宁县",
            value: "320324"
        }, {
            label: "徐州经济技术开发区",
            value: "320371"
        }, {
            label: "新沂市",
            value: "320381"
        }, {
            label: "邳州市",
            value: "320382"
        } ], [ {
            label: "天宁区",
            value: "320402"
        }, {
            label: "钟楼区",
            value: "320404"
        }, {
            label: "新北区",
            value: "320411"
        }, {
            label: "武进区",
            value: "320412"
        }, {
            label: "金坛区",
            value: "320413"
        }, {
            label: "溧阳市",
            value: "320481"
        } ], [ {
            label: "虎丘区",
            value: "320505"
        }, {
            label: "吴中区",
            value: "320506"
        }, {
            label: "相城区",
            value: "320507"
        }, {
            label: "姑苏区",
            value: "320508"
        }, {
            label: "吴江区",
            value: "320509"
        }, {
            label: "苏州工业园区",
            value: "320571"
        }, {
            label: "常熟市",
            value: "320581"
        }, {
            label: "张家港市",
            value: "320582"
        }, {
            label: "昆山市",
            value: "320583"
        }, {
            label: "太仓市",
            value: "320585"
        } ], [ {
            label: "崇川区",
            value: "320602"
        }, {
            label: "港闸区",
            value: "320611"
        }, {
            label: "通州区",
            value: "320612"
        }, {
            label: "海安县",
            value: "320621"
        }, {
            label: "如东县",
            value: "320623"
        }, {
            label: "南通经济技术开发区",
            value: "320671"
        }, {
            label: "启东市",
            value: "320681"
        }, {
            label: "如皋市",
            value: "320682"
        }, {
            label: "海门市",
            value: "320684"
        } ], [ {
            label: "连云区",
            value: "320703"
        }, {
            label: "海州区",
            value: "320706"
        }, {
            label: "赣榆区",
            value: "320707"
        }, {
            label: "东海县",
            value: "320722"
        }, {
            label: "灌云县",
            value: "320723"
        }, {
            label: "灌南县",
            value: "320724"
        }, {
            label: "连云港经济技术开发区",
            value: "320771"
        }, {
            label: "连云港高新技术产业开发区",
            value: "320772"
        } ], [ {
            label: "淮安区",
            value: "320803"
        }, {
            label: "淮阴区",
            value: "320804"
        }, {
            label: "清江浦区",
            value: "320812"
        }, {
            label: "洪泽区",
            value: "320813"
        }, {
            label: "涟水县",
            value: "320826"
        }, {
            label: "盱眙县",
            value: "320830"
        }, {
            label: "金湖县",
            value: "320831"
        }, {
            label: "淮安经济技术开发区",
            value: "320871"
        } ], [ {
            label: "亭湖区",
            value: "320902"
        }, {
            label: "盐都区",
            value: "320903"
        }, {
            label: "大丰区",
            value: "320904"
        }, {
            label: "响水县",
            value: "320921"
        }, {
            label: "滨海县",
            value: "320922"
        }, {
            label: "阜宁县",
            value: "320923"
        }, {
            label: "射阳县",
            value: "320924"
        }, {
            label: "建湖县",
            value: "320925"
        }, {
            label: "盐城经济技术开发区",
            value: "320971"
        }, {
            label: "东台市",
            value: "320981"
        } ], [ {
            label: "广陵区",
            value: "321002"
        }, {
            label: "邗江区",
            value: "321003"
        }, {
            label: "江都区",
            value: "321012"
        }, {
            label: "宝应县",
            value: "321023"
        }, {
            label: "扬州经济技术开发区",
            value: "321071"
        }, {
            label: "仪征市",
            value: "321081"
        }, {
            label: "高邮市",
            value: "321084"
        } ], [ {
            label: "京口区",
            value: "321102"
        }, {
            label: "润州区",
            value: "321111"
        }, {
            label: "丹徒区",
            value: "321112"
        }, {
            label: "镇江新区",
            value: "321171"
        }, {
            label: "丹阳市",
            value: "321181"
        }, {
            label: "扬中市",
            value: "321182"
        }, {
            label: "句容市",
            value: "321183"
        } ], [ {
            label: "海陵区",
            value: "321202"
        }, {
            label: "高港区",
            value: "321203"
        }, {
            label: "姜堰区",
            value: "321204"
        }, {
            label: "泰州医药高新技术产业开发区",
            value: "321271"
        }, {
            label: "兴化市",
            value: "321281"
        }, {
            label: "靖江市",
            value: "321282"
        }, {
            label: "泰兴市",
            value: "321283"
        } ], [ {
            label: "宿城区",
            value: "321302"
        }, {
            label: "宿豫区",
            value: "321311"
        }, {
            label: "沭阳县",
            value: "321322"
        }, {
            label: "泗阳县",
            value: "321323"
        }, {
            label: "泗洪县",
            value: "321324"
        }, {
            label: "宿迁经济技术开发区",
            value: "321371"
        } ] ], [ [ {
            label: "上城区",
            value: "330102"
        }, {
            label: "下城区",
            value: "330103"
        }, {
            label: "江干区",
            value: "330104"
        }, {
            label: "拱墅区",
            value: "330105"
        }, {
            label: "西湖区",
            value: "330106"
        }, {
            label: "滨江区",
            value: "330108"
        }, {
            label: "萧山区",
            value: "330109"
        }, {
            label: "余杭区",
            value: "330110"
        }, {
            label: "富阳区",
            value: "330111"
        }, {
            label: "临安区",
            value: "330112"
        }, {
            label: "桐庐县",
            value: "330122"
        }, {
            label: "淳安县",
            value: "330127"
        }, {
            label: "建德市",
            value: "330182"
        } ], [ {
            label: "海曙区",
            value: "330203"
        }, {
            label: "江北区",
            value: "330205"
        }, {
            label: "北仑区",
            value: "330206"
        }, {
            label: "镇海区",
            value: "330211"
        }, {
            label: "鄞州区",
            value: "330212"
        }, {
            label: "奉化区",
            value: "330213"
        }, {
            label: "象山县",
            value: "330225"
        }, {
            label: "宁海县",
            value: "330226"
        }, {
            label: "余姚市",
            value: "330281"
        }, {
            label: "慈溪市",
            value: "330282"
        } ], [ {
            label: "鹿城区",
            value: "330302"
        }, {
            label: "龙湾区",
            value: "330303"
        }, {
            label: "瓯海区",
            value: "330304"
        }, {
            label: "洞头区",
            value: "330305"
        }, {
            label: "永嘉县",
            value: "330324"
        }, {
            label: "平阳县",
            value: "330326"
        }, {
            label: "苍南县",
            value: "330327"
        }, {
            label: "文成县",
            value: "330328"
        }, {
            label: "泰顺县",
            value: "330329"
        }, {
            label: "温州经济技术开发区",
            value: "330371"
        }, {
            label: "瑞安市",
            value: "330381"
        }, {
            label: "乐清市",
            value: "330382"
        } ], [ {
            label: "南湖区",
            value: "330402"
        }, {
            label: "秀洲区",
            value: "330411"
        }, {
            label: "嘉善县",
            value: "330421"
        }, {
            label: "海盐县",
            value: "330424"
        }, {
            label: "海宁市",
            value: "330481"
        }, {
            label: "平湖市",
            value: "330482"
        }, {
            label: "桐乡市",
            value: "330483"
        } ], [ {
            label: "吴兴区",
            value: "330502"
        }, {
            label: "南浔区",
            value: "330503"
        }, {
            label: "德清县",
            value: "330521"
        }, {
            label: "长兴县",
            value: "330522"
        }, {
            label: "安吉县",
            value: "330523"
        } ], [ {
            label: "越城区",
            value: "330602"
        }, {
            label: "柯桥区",
            value: "330603"
        }, {
            label: "上虞区",
            value: "330604"
        }, {
            label: "新昌县",
            value: "330624"
        }, {
            label: "诸暨市",
            value: "330681"
        }, {
            label: "嵊州市",
            value: "330683"
        } ], [ {
            label: "婺城区",
            value: "330702"
        }, {
            label: "金东区",
            value: "330703"
        }, {
            label: "武义县",
            value: "330723"
        }, {
            label: "浦江县",
            value: "330726"
        }, {
            label: "磐安县",
            value: "330727"
        }, {
            label: "兰溪市",
            value: "330781"
        }, {
            label: "义乌市",
            value: "330782"
        }, {
            label: "东阳市",
            value: "330783"
        }, {
            label: "永康市",
            value: "330784"
        } ], [ {
            label: "柯城区",
            value: "330802"
        }, {
            label: "衢江区",
            value: "330803"
        }, {
            label: "常山县",
            value: "330822"
        }, {
            label: "开化县",
            value: "330824"
        }, {
            label: "龙游县",
            value: "330825"
        }, {
            label: "江山市",
            value: "330881"
        } ], [ {
            label: "定海区",
            value: "330902"
        }, {
            label: "普陀区",
            value: "330903"
        }, {
            label: "岱山县",
            value: "330921"
        }, {
            label: "嵊泗县",
            value: "330922"
        } ], [ {
            label: "椒江区",
            value: "331002"
        }, {
            label: "黄岩区",
            value: "331003"
        }, {
            label: "路桥区",
            value: "331004"
        }, {
            label: "三门县",
            value: "331022"
        }, {
            label: "天台县",
            value: "331023"
        }, {
            label: "仙居县",
            value: "331024"
        }, {
            label: "温岭市",
            value: "331081"
        }, {
            label: "临海市",
            value: "331082"
        }, {
            label: "玉环市",
            value: "331083"
        } ], [ {
            label: "莲都区",
            value: "331102"
        }, {
            label: "青田县",
            value: "331121"
        }, {
            label: "缙云县",
            value: "331122"
        }, {
            label: "遂昌县",
            value: "331123"
        }, {
            label: "松阳县",
            value: "331124"
        }, {
            label: "云和县",
            value: "331125"
        }, {
            label: "庆元县",
            value: "331126"
        }, {
            label: "景宁畲族自治县",
            value: "331127"
        }, {
            label: "龙泉市",
            value: "331181"
        } ] ], [ [ {
            label: "瑶海区",
            value: "340102"
        }, {
            label: "庐阳区",
            value: "340103"
        }, {
            label: "蜀山区",
            value: "340104"
        }, {
            label: "包河区",
            value: "340111"
        }, {
            label: "长丰县",
            value: "340121"
        }, {
            label: "肥东县",
            value: "340122"
        }, {
            label: "肥西县",
            value: "340123"
        }, {
            label: "庐江县",
            value: "340124"
        }, {
            label: "合肥高新技术产业开发区",
            value: "340171"
        }, {
            label: "合肥经济技术开发区",
            value: "340172"
        }, {
            label: "合肥新站高新技术产业开发区",
            value: "340173"
        }, {
            label: "巢湖市",
            value: "340181"
        } ], [ {
            label: "镜湖区",
            value: "340202"
        }, {
            label: "弋江区",
            value: "340203"
        }, {
            label: "鸠江区",
            value: "340207"
        }, {
            label: "三山区",
            value: "340208"
        }, {
            label: "芜湖县",
            value: "340221"
        }, {
            label: "繁昌县",
            value: "340222"
        }, {
            label: "南陵县",
            value: "340223"
        }, {
            label: "无为县",
            value: "340225"
        }, {
            label: "芜湖经济技术开发区",
            value: "340271"
        }, {
            label: "安徽芜湖长江大桥经济开发区",
            value: "340272"
        } ], [ {
            label: "龙子湖区",
            value: "340302"
        }, {
            label: "蚌山区",
            value: "340303"
        }, {
            label: "禹会区",
            value: "340304"
        }, {
            label: "淮上区",
            value: "340311"
        }, {
            label: "怀远县",
            value: "340321"
        }, {
            label: "五河县",
            value: "340322"
        }, {
            label: "固镇县",
            value: "340323"
        }, {
            label: "蚌埠市高新技术开发区",
            value: "340371"
        }, {
            label: "蚌埠市经济开发区",
            value: "340372"
        } ], [ {
            label: "大通区",
            value: "340402"
        }, {
            label: "田家庵区",
            value: "340403"
        }, {
            label: "谢家集区",
            value: "340404"
        }, {
            label: "八公山区",
            value: "340405"
        }, {
            label: "潘集区",
            value: "340406"
        }, {
            label: "凤台县",
            value: "340421"
        }, {
            label: "寿县",
            value: "340422"
        } ], [ {
            label: "花山区",
            value: "340503"
        }, {
            label: "雨山区",
            value: "340504"
        }, {
            label: "博望区",
            value: "340506"
        }, {
            label: "当涂县",
            value: "340521"
        }, {
            label: "含山县",
            value: "340522"
        }, {
            label: "和县",
            value: "340523"
        } ], [ {
            label: "杜集区",
            value: "340602"
        }, {
            label: "相山区",
            value: "340603"
        }, {
            label: "烈山区",
            value: "340604"
        }, {
            label: "濉溪县",
            value: "340621"
        } ], [ {
            label: "铜官区",
            value: "340705"
        }, {
            label: "义安区",
            value: "340706"
        }, {
            label: "郊区",
            value: "340711"
        }, {
            label: "枞阳县",
            value: "340722"
        } ], [ {
            label: "迎江区",
            value: "340802"
        }, {
            label: "大观区",
            value: "340803"
        }, {
            label: "宜秀区",
            value: "340811"
        }, {
            label: "怀宁县",
            value: "340822"
        }, {
            label: "潜山县",
            value: "340824"
        }, {
            label: "太湖县",
            value: "340825"
        }, {
            label: "宿松县",
            value: "340826"
        }, {
            label: "望江县",
            value: "340827"
        }, {
            label: "岳西县",
            value: "340828"
        }, {
            label: "安徽安庆经济开发区",
            value: "340871"
        }, {
            label: "桐城市",
            value: "340881"
        } ], [ {
            label: "屯溪区",
            value: "341002"
        }, {
            label: "黄山区",
            value: "341003"
        }, {
            label: "徽州区",
            value: "341004"
        }, {
            label: "歙县",
            value: "341021"
        }, {
            label: "休宁县",
            value: "341022"
        }, {
            label: "黟县",
            value: "341023"
        }, {
            label: "祁门县",
            value: "341024"
        } ], [ {
            label: "琅琊区",
            value: "341102"
        }, {
            label: "南谯区",
            value: "341103"
        }, {
            label: "来安县",
            value: "341122"
        }, {
            label: "全椒县",
            value: "341124"
        }, {
            label: "定远县",
            value: "341125"
        }, {
            label: "凤阳县",
            value: "341126"
        }, {
            label: "苏滁现代产业园",
            value: "341171"
        }, {
            label: "滁州经济技术开发区",
            value: "341172"
        }, {
            label: "天长市",
            value: "341181"
        }, {
            label: "明光市",
            value: "341182"
        } ], [ {
            label: "颍州区",
            value: "341202"
        }, {
            label: "颍东区",
            value: "341203"
        }, {
            label: "颍泉区",
            value: "341204"
        }, {
            label: "临泉县",
            value: "341221"
        }, {
            label: "太和县",
            value: "341222"
        }, {
            label: "阜南县",
            value: "341225"
        }, {
            label: "颍上县",
            value: "341226"
        }, {
            label: "阜阳合肥现代产业园区",
            value: "341271"
        }, {
            label: "阜阳经济技术开发区",
            value: "341272"
        }, {
            label: "界首市",
            value: "341282"
        } ], [ {
            label: "埇桥区",
            value: "341302"
        }, {
            label: "砀山县",
            value: "341321"
        }, {
            label: "萧县",
            value: "341322"
        }, {
            label: "灵璧县",
            value: "341323"
        }, {
            label: "泗县",
            value: "341324"
        }, {
            label: "宿州马鞍山现代产业园区",
            value: "341371"
        }, {
            label: "宿州经济技术开发区",
            value: "341372"
        } ], [ {
            label: "金安区",
            value: "341502"
        }, {
            label: "裕安区",
            value: "341503"
        }, {
            label: "叶集区",
            value: "341504"
        }, {
            label: "霍邱县",
            value: "341522"
        }, {
            label: "舒城县",
            value: "341523"
        }, {
            label: "金寨县",
            value: "341524"
        }, {
            label: "霍山县",
            value: "341525"
        } ], [ {
            label: "谯城区",
            value: "341602"
        }, {
            label: "涡阳县",
            value: "341621"
        }, {
            label: "蒙城县",
            value: "341622"
        }, {
            label: "利辛县",
            value: "341623"
        } ], [ {
            label: "贵池区",
            value: "341702"
        }, {
            label: "东至县",
            value: "341721"
        }, {
            label: "石台县",
            value: "341722"
        }, {
            label: "青阳县",
            value: "341723"
        } ], [ {
            label: "宣州区",
            value: "341802"
        }, {
            label: "郎溪县",
            value: "341821"
        }, {
            label: "广德县",
            value: "341822"
        }, {
            label: "泾县",
            value: "341823"
        }, {
            label: "绩溪县",
            value: "341824"
        }, {
            label: "旌德县",
            value: "341825"
        }, {
            label: "宣城市经济开发区",
            value: "341871"
        }, {
            label: "宁国市",
            value: "341881"
        } ] ], [ [ {
            label: "鼓楼区",
            value: "350102"
        }, {
            label: "台江区",
            value: "350103"
        }, {
            label: "仓山区",
            value: "350104"
        }, {
            label: "马尾区",
            value: "350105"
        }, {
            label: "晋安区",
            value: "350111"
        }, {
            label: "闽侯县",
            value: "350121"
        }, {
            label: "连江县",
            value: "350122"
        }, {
            label: "罗源县",
            value: "350123"
        }, {
            label: "闽清县",
            value: "350124"
        }, {
            label: "永泰县",
            value: "350125"
        }, {
            label: "平潭县",
            value: "350128"
        }, {
            label: "福清市",
            value: "350181"
        }, {
            label: "长乐市",
            value: "350182"
        } ], [ {
            label: "思明区",
            value: "350203"
        }, {
            label: "海沧区",
            value: "350205"
        }, {
            label: "湖里区",
            value: "350206"
        }, {
            label: "集美区",
            value: "350211"
        }, {
            label: "同安区",
            value: "350212"
        }, {
            label: "翔安区",
            value: "350213"
        } ], [ {
            label: "城厢区",
            value: "350302"
        }, {
            label: "涵江区",
            value: "350303"
        }, {
            label: "荔城区",
            value: "350304"
        }, {
            label: "秀屿区",
            value: "350305"
        }, {
            label: "仙游县",
            value: "350322"
        } ], [ {
            label: "梅列区",
            value: "350402"
        }, {
            label: "三元区",
            value: "350403"
        }, {
            label: "明溪县",
            value: "350421"
        }, {
            label: "清流县",
            value: "350423"
        }, {
            label: "宁化县",
            value: "350424"
        }, {
            label: "大田县",
            value: "350425"
        }, {
            label: "尤溪县",
            value: "350426"
        }, {
            label: "沙县",
            value: "350427"
        }, {
            label: "将乐县",
            value: "350428"
        }, {
            label: "泰宁县",
            value: "350429"
        }, {
            label: "建宁县",
            value: "350430"
        }, {
            label: "永安市",
            value: "350481"
        } ], [ {
            label: "鲤城区",
            value: "350502"
        }, {
            label: "丰泽区",
            value: "350503"
        }, {
            label: "洛江区",
            value: "350504"
        }, {
            label: "泉港区",
            value: "350505"
        }, {
            label: "惠安县",
            value: "350521"
        }, {
            label: "安溪县",
            value: "350524"
        }, {
            label: "永春县",
            value: "350525"
        }, {
            label: "德化县",
            value: "350526"
        }, {
            label: "金门县",
            value: "350527"
        }, {
            label: "石狮市",
            value: "350581"
        }, {
            label: "晋江市",
            value: "350582"
        }, {
            label: "南安市",
            value: "350583"
        } ], [ {
            label: "芗城区",
            value: "350602"
        }, {
            label: "龙文区",
            value: "350603"
        }, {
            label: "云霄县",
            value: "350622"
        }, {
            label: "漳浦县",
            value: "350623"
        }, {
            label: "诏安县",
            value: "350624"
        }, {
            label: "长泰县",
            value: "350625"
        }, {
            label: "东山县",
            value: "350626"
        }, {
            label: "南靖县",
            value: "350627"
        }, {
            label: "平和县",
            value: "350628"
        }, {
            label: "华安县",
            value: "350629"
        }, {
            label: "龙海市",
            value: "350681"
        } ], [ {
            label: "延平区",
            value: "350702"
        }, {
            label: "建阳区",
            value: "350703"
        }, {
            label: "顺昌县",
            value: "350721"
        }, {
            label: "浦城县",
            value: "350722"
        }, {
            label: "光泽县",
            value: "350723"
        }, {
            label: "松溪县",
            value: "350724"
        }, {
            label: "政和县",
            value: "350725"
        }, {
            label: "邵武市",
            value: "350781"
        }, {
            label: "武夷山市",
            value: "350782"
        }, {
            label: "建瓯市",
            value: "350783"
        } ], [ {
            label: "新罗区",
            value: "350802"
        }, {
            label: "永定区",
            value: "350803"
        }, {
            label: "长汀县",
            value: "350821"
        }, {
            label: "上杭县",
            value: "350823"
        }, {
            label: "武平县",
            value: "350824"
        }, {
            label: "连城县",
            value: "350825"
        }, {
            label: "漳平市",
            value: "350881"
        } ], [ {
            label: "蕉城区",
            value: "350902"
        }, {
            label: "霞浦县",
            value: "350921"
        }, {
            label: "古田县",
            value: "350922"
        }, {
            label: "屏南县",
            value: "350923"
        }, {
            label: "寿宁县",
            value: "350924"
        }, {
            label: "周宁县",
            value: "350925"
        }, {
            label: "柘荣县",
            value: "350926"
        }, {
            label: "福安市",
            value: "350981"
        }, {
            label: "福鼎市",
            value: "350982"
        } ] ], [ [ {
            label: "东湖区",
            value: "360102"
        }, {
            label: "西湖区",
            value: "360103"
        }, {
            label: "青云谱区",
            value: "360104"
        }, {
            label: "湾里区",
            value: "360105"
        }, {
            label: "青山湖区",
            value: "360111"
        }, {
            label: "新建区",
            value: "360112"
        }, {
            label: "南昌县",
            value: "360121"
        }, {
            label: "安义县",
            value: "360123"
        }, {
            label: "进贤县",
            value: "360124"
        } ], [ {
            label: "昌江区",
            value: "360202"
        }, {
            label: "珠山区",
            value: "360203"
        }, {
            label: "浮梁县",
            value: "360222"
        }, {
            label: "乐平市",
            value: "360281"
        } ], [ {
            label: "安源区",
            value: "360302"
        }, {
            label: "湘东区",
            value: "360313"
        }, {
            label: "莲花县",
            value: "360321"
        }, {
            label: "上栗县",
            value: "360322"
        }, {
            label: "芦溪县",
            value: "360323"
        } ], [ {
            label: "濂溪区",
            value: "360402"
        }, {
            label: "浔阳区",
            value: "360403"
        }, {
            label: "柴桑区",
            value: "360404"
        }, {
            label: "武宁县",
            value: "360423"
        }, {
            label: "修水县",
            value: "360424"
        }, {
            label: "永修县",
            value: "360425"
        }, {
            label: "德安县",
            value: "360426"
        }, {
            label: "都昌县",
            value: "360428"
        }, {
            label: "湖口县",
            value: "360429"
        }, {
            label: "彭泽县",
            value: "360430"
        }, {
            label: "瑞昌市",
            value: "360481"
        }, {
            label: "共青城市",
            value: "360482"
        }, {
            label: "庐山市",
            value: "360483"
        } ], [ {
            label: "渝水区",
            value: "360502"
        }, {
            label: "分宜县",
            value: "360521"
        } ], [ {
            label: "月湖区",
            value: "360602"
        }, {
            label: "余江县",
            value: "360622"
        }, {
            label: "贵溪市",
            value: "360681"
        } ], [ {
            label: "章贡区",
            value: "360702"
        }, {
            label: "南康区",
            value: "360703"
        }, {
            label: "赣县区",
            value: "360704"
        }, {
            label: "信丰县",
            value: "360722"
        }, {
            label: "大余县",
            value: "360723"
        }, {
            label: "上犹县",
            value: "360724"
        }, {
            label: "崇义县",
            value: "360725"
        }, {
            label: "安远县",
            value: "360726"
        }, {
            label: "龙南县",
            value: "360727"
        }, {
            label: "定南县",
            value: "360728"
        }, {
            label: "全南县",
            value: "360729"
        }, {
            label: "宁都县",
            value: "360730"
        }, {
            label: "于都县",
            value: "360731"
        }, {
            label: "兴国县",
            value: "360732"
        }, {
            label: "会昌县",
            value: "360733"
        }, {
            label: "寻乌县",
            value: "360734"
        }, {
            label: "石城县",
            value: "360735"
        }, {
            label: "瑞金市",
            value: "360781"
        } ], [ {
            label: "吉州区",
            value: "360802"
        }, {
            label: "青原区",
            value: "360803"
        }, {
            label: "吉安县",
            value: "360821"
        }, {
            label: "吉水县",
            value: "360822"
        }, {
            label: "峡江县",
            value: "360823"
        }, {
            label: "新干县",
            value: "360824"
        }, {
            label: "永丰县",
            value: "360825"
        }, {
            label: "泰和县",
            value: "360826"
        }, {
            label: "遂川县",
            value: "360827"
        }, {
            label: "万安县",
            value: "360828"
        }, {
            label: "安福县",
            value: "360829"
        }, {
            label: "永新县",
            value: "360830"
        }, {
            label: "井冈山市",
            value: "360881"
        } ], [ {
            label: "袁州区",
            value: "360902"
        }, {
            label: "奉新县",
            value: "360921"
        }, {
            label: "万载县",
            value: "360922"
        }, {
            label: "上高县",
            value: "360923"
        }, {
            label: "宜丰县",
            value: "360924"
        }, {
            label: "靖安县",
            value: "360925"
        }, {
            label: "铜鼓县",
            value: "360926"
        }, {
            label: "丰城市",
            value: "360981"
        }, {
            label: "樟树市",
            value: "360982"
        }, {
            label: "高安市",
            value: "360983"
        } ], [ {
            label: "临川区",
            value: "361002"
        }, {
            label: "东乡区",
            value: "361003"
        }, {
            label: "南城县",
            value: "361021"
        }, {
            label: "黎川县",
            value: "361022"
        }, {
            label: "南丰县",
            value: "361023"
        }, {
            label: "崇仁县",
            value: "361024"
        }, {
            label: "乐安县",
            value: "361025"
        }, {
            label: "宜黄县",
            value: "361026"
        }, {
            label: "金溪县",
            value: "361027"
        }, {
            label: "资溪县",
            value: "361028"
        }, {
            label: "广昌县",
            value: "361030"
        } ], [ {
            label: "信州区",
            value: "361102"
        }, {
            label: "广丰区",
            value: "361103"
        }, {
            label: "上饶县",
            value: "361121"
        }, {
            label: "玉山县",
            value: "361123"
        }, {
            label: "铅山县",
            value: "361124"
        }, {
            label: "横峰县",
            value: "361125"
        }, {
            label: "弋阳县",
            value: "361126"
        }, {
            label: "余干县",
            value: "361127"
        }, {
            label: "鄱阳县",
            value: "361128"
        }, {
            label: "万年县",
            value: "361129"
        }, {
            label: "婺源县",
            value: "361130"
        }, {
            label: "德兴市",
            value: "361181"
        } ] ], [ [ {
            label: "历下区",
            value: "370102"
        }, {
            label: "市中区",
            value: "370103"
        }, {
            label: "槐荫区",
            value: "370104"
        }, {
            label: "天桥区",
            value: "370105"
        }, {
            label: "历城区",
            value: "370112"
        }, {
            label: "长清区",
            value: "370113"
        }, {
            label: "章丘区",
            value: "370114"
        }, {
            label: "平阴县",
            value: "370124"
        }, {
            label: "济阳县",
            value: "370125"
        }, {
            label: "商河县",
            value: "370126"
        }, {
            label: "济南高新技术产业开发区",
            value: "370171"
        } ], [ {
            label: "市南区",
            value: "370202"
        }, {
            label: "市北区",
            value: "370203"
        }, {
            label: "黄岛区",
            value: "370211"
        }, {
            label: "崂山区",
            value: "370212"
        }, {
            label: "李沧区",
            value: "370213"
        }, {
            label: "城阳区",
            value: "370214"
        }, {
            label: "即墨区",
            value: "370215"
        }, {
            label: "青岛高新技术产业开发区",
            value: "370271"
        }, {
            label: "胶州市",
            value: "370281"
        }, {
            label: "平度市",
            value: "370283"
        }, {
            label: "莱西市",
            value: "370285"
        } ], [ {
            label: "淄川区",
            value: "370302"
        }, {
            label: "张店区",
            value: "370303"
        }, {
            label: "博山区",
            value: "370304"
        }, {
            label: "临淄区",
            value: "370305"
        }, {
            label: "周村区",
            value: "370306"
        }, {
            label: "桓台县",
            value: "370321"
        }, {
            label: "高青县",
            value: "370322"
        }, {
            label: "沂源县",
            value: "370323"
        } ], [ {
            label: "市中区",
            value: "370402"
        }, {
            label: "薛城区",
            value: "370403"
        }, {
            label: "峄城区",
            value: "370404"
        }, {
            label: "台儿庄区",
            value: "370405"
        }, {
            label: "山亭区",
            value: "370406"
        }, {
            label: "滕州市",
            value: "370481"
        } ], [ {
            label: "东营区",
            value: "370502"
        }, {
            label: "河口区",
            value: "370503"
        }, {
            label: "垦利区",
            value: "370505"
        }, {
            label: "利津县",
            value: "370522"
        }, {
            label: "广饶县",
            value: "370523"
        }, {
            label: "东营经济技术开发区",
            value: "370571"
        }, {
            label: "东营港经济开发区",
            value: "370572"
        } ], [ {
            label: "芝罘区",
            value: "370602"
        }, {
            label: "福山区",
            value: "370611"
        }, {
            label: "牟平区",
            value: "370612"
        }, {
            label: "莱山区",
            value: "370613"
        }, {
            label: "长岛县",
            value: "370634"
        }, {
            label: "烟台高新技术产业开发区",
            value: "370671"
        }, {
            label: "烟台经济技术开发区",
            value: "370672"
        }, {
            label: "龙口市",
            value: "370681"
        }, {
            label: "莱阳市",
            value: "370682"
        }, {
            label: "莱州市",
            value: "370683"
        }, {
            label: "蓬莱市",
            value: "370684"
        }, {
            label: "招远市",
            value: "370685"
        }, {
            label: "栖霞市",
            value: "370686"
        }, {
            label: "海阳市",
            value: "370687"
        } ], [ {
            label: "潍城区",
            value: "370702"
        }, {
            label: "寒亭区",
            value: "370703"
        }, {
            label: "坊子区",
            value: "370704"
        }, {
            label: "奎文区",
            value: "370705"
        }, {
            label: "临朐县",
            value: "370724"
        }, {
            label: "昌乐县",
            value: "370725"
        }, {
            label: "潍坊滨海经济技术开发区",
            value: "370772"
        }, {
            label: "青州市",
            value: "370781"
        }, {
            label: "诸城市",
            value: "370782"
        }, {
            label: "寿光市",
            value: "370783"
        }, {
            label: "安丘市",
            value: "370784"
        }, {
            label: "高密市",
            value: "370785"
        }, {
            label: "昌邑市",
            value: "370786"
        } ], [ {
            label: "任城区",
            value: "370811"
        }, {
            label: "兖州区",
            value: "370812"
        }, {
            label: "微山县",
            value: "370826"
        }, {
            label: "鱼台县",
            value: "370827"
        }, {
            label: "金乡县",
            value: "370828"
        }, {
            label: "嘉祥县",
            value: "370829"
        }, {
            label: "汶上县",
            value: "370830"
        }, {
            label: "泗水县",
            value: "370831"
        }, {
            label: "梁山县",
            value: "370832"
        }, {
            label: "济宁高新技术产业开发区",
            value: "370871"
        }, {
            label: "曲阜市",
            value: "370881"
        }, {
            label: "邹城市",
            value: "370883"
        } ], [ {
            label: "泰山区",
            value: "370902"
        }, {
            label: "岱岳区",
            value: "370911"
        }, {
            label: "宁阳县",
            value: "370921"
        }, {
            label: "东平县",
            value: "370923"
        }, {
            label: "新泰市",
            value: "370982"
        }, {
            label: "肥城市",
            value: "370983"
        } ], [ {
            label: "环翠区",
            value: "371002"
        }, {
            label: "文登区",
            value: "371003"
        }, {
            label: "威海火炬高技术产业开发区",
            value: "371071"
        }, {
            label: "威海经济技术开发区",
            value: "371072"
        }, {
            label: "威海临港经济技术开发区",
            value: "371073"
        }, {
            label: "荣成市",
            value: "371082"
        }, {
            label: "乳山市",
            value: "371083"
        } ], [ {
            label: "东港区",
            value: "371102"
        }, {
            label: "岚山区",
            value: "371103"
        }, {
            label: "五莲县",
            value: "371121"
        }, {
            label: "莒县",
            value: "371122"
        }, {
            label: "日照经济技术开发区",
            value: "371171"
        }, {
            label: "日照国际海洋城",
            value: "371172"
        } ], [ {
            label: "莱城区",
            value: "371202"
        }, {
            label: "钢城区",
            value: "371203"
        } ], [ {
            label: "兰山区",
            value: "371302"
        }, {
            label: "罗庄区",
            value: "371311"
        }, {
            label: "河东区",
            value: "371312"
        }, {
            label: "沂南县",
            value: "371321"
        }, {
            label: "郯城县",
            value: "371322"
        }, {
            label: "沂水县",
            value: "371323"
        }, {
            label: "兰陵县",
            value: "371324"
        }, {
            label: "费县",
            value: "371325"
        }, {
            label: "平邑县",
            value: "371326"
        }, {
            label: "莒南县",
            value: "371327"
        }, {
            label: "蒙阴县",
            value: "371328"
        }, {
            label: "临沭县",
            value: "371329"
        }, {
            label: "临沂高新技术产业开发区",
            value: "371371"
        }, {
            label: "临沂经济技术开发区",
            value: "371372"
        }, {
            label: "临沂临港经济开发区",
            value: "371373"
        } ], [ {
            label: "德城区",
            value: "371402"
        }, {
            label: "陵城区",
            value: "371403"
        }, {
            label: "宁津县",
            value: "371422"
        }, {
            label: "庆云县",
            value: "371423"
        }, {
            label: "临邑县",
            value: "371424"
        }, {
            label: "齐河县",
            value: "371425"
        }, {
            label: "平原县",
            value: "371426"
        }, {
            label: "夏津县",
            value: "371427"
        }, {
            label: "武城县",
            value: "371428"
        }, {
            label: "德州经济技术开发区",
            value: "371471"
        }, {
            label: "德州运河经济开发区",
            value: "371472"
        }, {
            label: "乐陵市",
            value: "371481"
        }, {
            label: "禹城市",
            value: "371482"
        } ], [ {
            label: "东昌府区",
            value: "371502"
        }, {
            label: "阳谷县",
            value: "371521"
        }, {
            label: "莘县",
            value: "371522"
        }, {
            label: "茌平县",
            value: "371523"
        }, {
            label: "东阿县",
            value: "371524"
        }, {
            label: "冠县",
            value: "371525"
        }, {
            label: "高唐县",
            value: "371526"
        }, {
            label: "临清市",
            value: "371581"
        } ], [ {
            label: "滨城区",
            value: "371602"
        }, {
            label: "沾化区",
            value: "371603"
        }, {
            label: "惠民县",
            value: "371621"
        }, {
            label: "阳信县",
            value: "371622"
        }, {
            label: "无棣县",
            value: "371623"
        }, {
            label: "博兴县",
            value: "371625"
        }, {
            label: "邹平县",
            value: "371626"
        } ], [ {
            label: "牡丹区",
            value: "371702"
        }, {
            label: "定陶区",
            value: "371703"
        }, {
            label: "曹县",
            value: "371721"
        }, {
            label: "单县",
            value: "371722"
        }, {
            label: "成武县",
            value: "371723"
        }, {
            label: "巨野县",
            value: "371724"
        }, {
            label: "郓城县",
            value: "371725"
        }, {
            label: "鄄城县",
            value: "371726"
        }, {
            label: "东明县",
            value: "371728"
        }, {
            label: "菏泽经济技术开发区",
            value: "371771"
        }, {
            label: "菏泽高新技术开发区",
            value: "371772"
        } ] ], [ [ {
            label: "中原区",
            value: "410102"
        }, {
            label: "二七区",
            value: "410103"
        }, {
            label: "管城回族区",
            value: "410104"
        }, {
            label: "金水区",
            value: "410105"
        }, {
            label: "上街区",
            value: "410106"
        }, {
            label: "惠济区",
            value: "410108"
        }, {
            label: "中牟县",
            value: "410122"
        }, {
            label: "郑州经济技术开发区",
            value: "410171"
        }, {
            label: "郑州高新技术产业开发区",
            value: "410172"
        }, {
            label: "郑州航空港经济综合实验区",
            value: "410173"
        }, {
            label: "巩义市",
            value: "410181"
        }, {
            label: "荥阳市",
            value: "410182"
        }, {
            label: "新密市",
            value: "410183"
        }, {
            label: "新郑市",
            value: "410184"
        }, {
            label: "登封市",
            value: "410185"
        } ], [ {
            label: "龙亭区",
            value: "410202"
        }, {
            label: "顺河回族区",
            value: "410203"
        }, {
            label: "鼓楼区",
            value: "410204"
        }, {
            label: "禹王台区",
            value: "410205"
        }, {
            label: "祥符区",
            value: "410212"
        }, {
            label: "杞县",
            value: "410221"
        }, {
            label: "通许县",
            value: "410222"
        }, {
            label: "尉氏县",
            value: "410223"
        }, {
            label: "兰考县",
            value: "410225"
        } ], [ {
            label: "老城区",
            value: "410302"
        }, {
            label: "西工区",
            value: "410303"
        }, {
            label: "瀍河回族区",
            value: "410304"
        }, {
            label: "涧西区",
            value: "410305"
        }, {
            label: "吉利区",
            value: "410306"
        }, {
            label: "洛龙区",
            value: "410311"
        }, {
            label: "孟津县",
            value: "410322"
        }, {
            label: "新安县",
            value: "410323"
        }, {
            label: "栾川县",
            value: "410324"
        }, {
            label: "嵩县",
            value: "410325"
        }, {
            label: "汝阳县",
            value: "410326"
        }, {
            label: "宜阳县",
            value: "410327"
        }, {
            label: "洛宁县",
            value: "410328"
        }, {
            label: "伊川县",
            value: "410329"
        }, {
            label: "洛阳高新技术产业开发区",
            value: "410371"
        }, {
            label: "偃师市",
            value: "410381"
        } ], [ {
            label: "新华区",
            value: "410402"
        }, {
            label: "卫东区",
            value: "410403"
        }, {
            label: "石龙区",
            value: "410404"
        }, {
            label: "湛河区",
            value: "410411"
        }, {
            label: "宝丰县",
            value: "410421"
        }, {
            label: "叶县",
            value: "410422"
        }, {
            label: "鲁山县",
            value: "410423"
        }, {
            label: "郏县",
            value: "410425"
        }, {
            label: "平顶山高新技术产业开发区",
            value: "410471"
        }, {
            label: "平顶山市新城区",
            value: "410472"
        }, {
            label: "舞钢市",
            value: "410481"
        }, {
            label: "汝州市",
            value: "410482"
        } ], [ {
            label: "文峰区",
            value: "410502"
        }, {
            label: "北关区",
            value: "410503"
        }, {
            label: "殷都区",
            value: "410505"
        }, {
            label: "龙安区",
            value: "410506"
        }, {
            label: "安阳县",
            value: "410522"
        }, {
            label: "汤阴县",
            value: "410523"
        }, {
            label: "滑县",
            value: "410526"
        }, {
            label: "内黄县",
            value: "410527"
        }, {
            label: "安阳高新技术产业开发区",
            value: "410571"
        }, {
            label: "林州市",
            value: "410581"
        } ], [ {
            label: "鹤山区",
            value: "410602"
        }, {
            label: "山城区",
            value: "410603"
        }, {
            label: "淇滨区",
            value: "410611"
        }, {
            label: "浚县",
            value: "410621"
        }, {
            label: "淇县",
            value: "410622"
        }, {
            label: "鹤壁经济技术开发区",
            value: "410671"
        } ], [ {
            label: "红旗区",
            value: "410702"
        }, {
            label: "卫滨区",
            value: "410703"
        }, {
            label: "凤泉区",
            value: "410704"
        }, {
            label: "牧野区",
            value: "410711"
        }, {
            label: "新乡县",
            value: "410721"
        }, {
            label: "获嘉县",
            value: "410724"
        }, {
            label: "原阳县",
            value: "410725"
        }, {
            label: "延津县",
            value: "410726"
        }, {
            label: "封丘县",
            value: "410727"
        }, {
            label: "长垣县",
            value: "410728"
        }, {
            label: "新乡高新技术产业开发区",
            value: "410771"
        }, {
            label: "新乡经济技术开发区",
            value: "410772"
        }, {
            label: "新乡市平原城乡一体化示范区",
            value: "410773"
        }, {
            label: "卫辉市",
            value: "410781"
        }, {
            label: "辉县市",
            value: "410782"
        } ], [ {
            label: "解放区",
            value: "410802"
        }, {
            label: "中站区",
            value: "410803"
        }, {
            label: "马村区",
            value: "410804"
        }, {
            label: "山阳区",
            value: "410811"
        }, {
            label: "修武县",
            value: "410821"
        }, {
            label: "博爱县",
            value: "410822"
        }, {
            label: "武陟县",
            value: "410823"
        }, {
            label: "温县",
            value: "410825"
        }, {
            label: "焦作城乡一体化示范区",
            value: "410871"
        }, {
            label: "沁阳市",
            value: "410882"
        }, {
            label: "孟州市",
            value: "410883"
        } ], [ {
            label: "华龙区",
            value: "410902"
        }, {
            label: "清丰县",
            value: "410922"
        }, {
            label: "南乐县",
            value: "410923"
        }, {
            label: "范县",
            value: "410926"
        }, {
            label: "台前县",
            value: "410927"
        }, {
            label: "濮阳县",
            value: "410928"
        }, {
            label: "河南濮阳工业园区",
            value: "410971"
        }, {
            label: "濮阳经济技术开发区",
            value: "410972"
        } ], [ {
            label: "魏都区",
            value: "411002"
        }, {
            label: "建安区",
            value: "411003"
        }, {
            label: "鄢陵县",
            value: "411024"
        }, {
            label: "襄城县",
            value: "411025"
        }, {
            label: "许昌经济技术开发区",
            value: "411071"
        }, {
            label: "禹州市",
            value: "411081"
        }, {
            label: "长葛市",
            value: "411082"
        } ], [ {
            label: "源汇区",
            value: "411102"
        }, {
            label: "郾城区",
            value: "411103"
        }, {
            label: "召陵区",
            value: "411104"
        }, {
            label: "舞阳县",
            value: "411121"
        }, {
            label: "临颍县",
            value: "411122"
        }, {
            label: "漯河经济技术开发区",
            value: "411171"
        } ], [ {
            label: "湖滨区",
            value: "411202"
        }, {
            label: "陕州区",
            value: "411203"
        }, {
            label: "渑池县",
            value: "411221"
        }, {
            label: "卢氏县",
            value: "411224"
        }, {
            label: "河南三门峡经济开发区",
            value: "411271"
        }, {
            label: "义马市",
            value: "411281"
        }, {
            label: "灵宝市",
            value: "411282"
        } ], [ {
            label: "宛城区",
            value: "411302"
        }, {
            label: "卧龙区",
            value: "411303"
        }, {
            label: "南召县",
            value: "411321"
        }, {
            label: "方城县",
            value: "411322"
        }, {
            label: "西峡县",
            value: "411323"
        }, {
            label: "镇平县",
            value: "411324"
        }, {
            label: "内乡县",
            value: "411325"
        }, {
            label: "淅川县",
            value: "411326"
        }, {
            label: "社旗县",
            value: "411327"
        }, {
            label: "唐河县",
            value: "411328"
        }, {
            label: "新野县",
            value: "411329"
        }, {
            label: "桐柏县",
            value: "411330"
        }, {
            label: "南阳高新技术产业开发区",
            value: "411371"
        }, {
            label: "南阳市城乡一体化示范区",
            value: "411372"
        }, {
            label: "邓州市",
            value: "411381"
        } ], [ {
            label: "梁园区",
            value: "411402"
        }, {
            label: "睢阳区",
            value: "411403"
        }, {
            label: "民权县",
            value: "411421"
        }, {
            label: "睢县",
            value: "411422"
        }, {
            label: "宁陵县",
            value: "411423"
        }, {
            label: "柘城县",
            value: "411424"
        }, {
            label: "虞城县",
            value: "411425"
        }, {
            label: "夏邑县",
            value: "411426"
        }, {
            label: "豫东综合物流产业聚集区",
            value: "411471"
        }, {
            label: "河南商丘经济开发区",
            value: "411472"
        }, {
            label: "永城市",
            value: "411481"
        } ], [ {
            label: "浉河区",
            value: "411502"
        }, {
            label: "平桥区",
            value: "411503"
        }, {
            label: "罗山县",
            value: "411521"
        }, {
            label: "光山县",
            value: "411522"
        }, {
            label: "新县",
            value: "411523"
        }, {
            label: "商城县",
            value: "411524"
        }, {
            label: "固始县",
            value: "411525"
        }, {
            label: "潢川县",
            value: "411526"
        }, {
            label: "淮滨县",
            value: "411527"
        }, {
            label: "息县",
            value: "411528"
        }, {
            label: "信阳高新技术产业开发区",
            value: "411571"
        } ], [ {
            label: "川汇区",
            value: "411602"
        }, {
            label: "扶沟县",
            value: "411621"
        }, {
            label: "西华县",
            value: "411622"
        }, {
            label: "商水县",
            value: "411623"
        }, {
            label: "沈丘县",
            value: "411624"
        }, {
            label: "郸城县",
            value: "411625"
        }, {
            label: "淮阳县",
            value: "411626"
        }, {
            label: "太康县",
            value: "411627"
        }, {
            label: "鹿邑县",
            value: "411628"
        }, {
            label: "河南周口经济开发区",
            value: "411671"
        }, {
            label: "项城市",
            value: "411681"
        } ], [ {
            label: "驿城区",
            value: "411702"
        }, {
            label: "西平县",
            value: "411721"
        }, {
            label: "上蔡县",
            value: "411722"
        }, {
            label: "平舆县",
            value: "411723"
        }, {
            label: "正阳县",
            value: "411724"
        }, {
            label: "确山县",
            value: "411725"
        }, {
            label: "泌阳县",
            value: "411726"
        }, {
            label: "汝南县",
            value: "411727"
        }, {
            label: "遂平县",
            value: "411728"
        }, {
            label: "新蔡县",
            value: "411729"
        }, {
            label: "河南驻马店经济开发区",
            value: "411771"
        } ], [ {
            label: "济源市",
            value: "419001"
        } ] ], [ [ {
            label: "江岸区",
            value: "420102"
        }, {
            label: "江汉区",
            value: "420103"
        }, {
            label: "硚口区",
            value: "420104"
        }, {
            label: "汉阳区",
            value: "420105"
        }, {
            label: "武昌区",
            value: "420106"
        }, {
            label: "青山区",
            value: "420107"
        }, {
            label: "洪山区",
            value: "420111"
        }, {
            label: "东西湖区",
            value: "420112"
        }, {
            label: "汉南区",
            value: "420113"
        }, {
            label: "蔡甸区",
            value: "420114"
        }, {
            label: "江夏区",
            value: "420115"
        }, {
            label: "黄陂区",
            value: "420116"
        }, {
            label: "新洲区",
            value: "420117"
        } ], [ {
            label: "黄石港区",
            value: "420202"
        }, {
            label: "西塞山区",
            value: "420203"
        }, {
            label: "下陆区",
            value: "420204"
        }, {
            label: "铁山区",
            value: "420205"
        }, {
            label: "阳新县",
            value: "420222"
        }, {
            label: "大冶市",
            value: "420281"
        } ], [ {
            label: "茅箭区",
            value: "420302"
        }, {
            label: "张湾区",
            value: "420303"
        }, {
            label: "郧阳区",
            value: "420304"
        }, {
            label: "郧西县",
            value: "420322"
        }, {
            label: "竹山县",
            value: "420323"
        }, {
            label: "竹溪县",
            value: "420324"
        }, {
            label: "房县",
            value: "420325"
        }, {
            label: "丹江口市",
            value: "420381"
        } ], [ {
            label: "西陵区",
            value: "420502"
        }, {
            label: "伍家岗区",
            value: "420503"
        }, {
            label: "点军区",
            value: "420504"
        }, {
            label: "猇亭区",
            value: "420505"
        }, {
            label: "夷陵区",
            value: "420506"
        }, {
            label: "远安县",
            value: "420525"
        }, {
            label: "兴山县",
            value: "420526"
        }, {
            label: "秭归县",
            value: "420527"
        }, {
            label: "长阳土家族自治县",
            value: "420528"
        }, {
            label: "五峰土家族自治县",
            value: "420529"
        }, {
            label: "宜都市",
            value: "420581"
        }, {
            label: "当阳市",
            value: "420582"
        }, {
            label: "枝江市",
            value: "420583"
        } ], [ {
            label: "襄城区",
            value: "420602"
        }, {
            label: "樊城区",
            value: "420606"
        }, {
            label: "襄州区",
            value: "420607"
        }, {
            label: "南漳县",
            value: "420624"
        }, {
            label: "谷城县",
            value: "420625"
        }, {
            label: "保康县",
            value: "420626"
        }, {
            label: "老河口市",
            value: "420682"
        }, {
            label: "枣阳市",
            value: "420683"
        }, {
            label: "宜城市",
            value: "420684"
        } ], [ {
            label: "梁子湖区",
            value: "420702"
        }, {
            label: "华容区",
            value: "420703"
        }, {
            label: "鄂城区",
            value: "420704"
        } ], [ {
            label: "东宝区",
            value: "420802"
        }, {
            label: "掇刀区",
            value: "420804"
        }, {
            label: "京山县",
            value: "420821"
        }, {
            label: "沙洋县",
            value: "420822"
        }, {
            label: "钟祥市",
            value: "420881"
        } ], [ {
            label: "孝南区",
            value: "420902"
        }, {
            label: "孝昌县",
            value: "420921"
        }, {
            label: "大悟县",
            value: "420922"
        }, {
            label: "云梦县",
            value: "420923"
        }, {
            label: "应城市",
            value: "420981"
        }, {
            label: "安陆市",
            value: "420982"
        }, {
            label: "汉川市",
            value: "420984"
        } ], [ {
            label: "沙市区",
            value: "421002"
        }, {
            label: "荆州区",
            value: "421003"
        }, {
            label: "公安县",
            value: "421022"
        }, {
            label: "监利县",
            value: "421023"
        }, {
            label: "江陵县",
            value: "421024"
        }, {
            label: "荆州经济技术开发区",
            value: "421071"
        }, {
            label: "石首市",
            value: "421081"
        }, {
            label: "洪湖市",
            value: "421083"
        }, {
            label: "松滋市",
            value: "421087"
        } ], [ {
            label: "黄州区",
            value: "421102"
        }, {
            label: "团风县",
            value: "421121"
        }, {
            label: "红安县",
            value: "421122"
        }, {
            label: "罗田县",
            value: "421123"
        }, {
            label: "英山县",
            value: "421124"
        }, {
            label: "浠水县",
            value: "421125"
        }, {
            label: "蕲春县",
            value: "421126"
        }, {
            label: "黄梅县",
            value: "421127"
        }, {
            label: "龙感湖管理区",
            value: "421171"
        }, {
            label: "麻城市",
            value: "421181"
        }, {
            label: "武穴市",
            value: "421182"
        } ], [ {
            label: "咸安区",
            value: "421202"
        }, {
            label: "嘉鱼县",
            value: "421221"
        }, {
            label: "通城县",
            value: "421222"
        }, {
            label: "崇阳县",
            value: "421223"
        }, {
            label: "通山县",
            value: "421224"
        }, {
            label: "赤壁市",
            value: "421281"
        } ], [ {
            label: "曾都区",
            value: "421303"
        }, {
            label: "随县",
            value: "421321"
        }, {
            label: "广水市",
            value: "421381"
        } ], [ {
            label: "恩施市",
            value: "422801"
        }, {
            label: "利川市",
            value: "422802"
        }, {
            label: "建始县",
            value: "422822"
        }, {
            label: "巴东县",
            value: "422823"
        }, {
            label: "宣恩县",
            value: "422825"
        }, {
            label: "咸丰县",
            value: "422826"
        }, {
            label: "来凤县",
            value: "422827"
        }, {
            label: "鹤峰县",
            value: "422828"
        } ], [ {
            label: "仙桃市",
            value: "429004"
        }, {
            label: "潜江市",
            value: "429005"
        }, {
            label: "天门市",
            value: "429006"
        }, {
            label: "神农架林区",
            value: "429021"
        } ] ], [ [ {
            label: "芙蓉区",
            value: "430102"
        }, {
            label: "天心区",
            value: "430103"
        }, {
            label: "岳麓区",
            value: "430104"
        }, {
            label: "开福区",
            value: "430105"
        }, {
            label: "雨花区",
            value: "430111"
        }, {
            label: "望城区",
            value: "430112"
        }, {
            label: "长沙县",
            value: "430121"
        }, {
            label: "浏阳市",
            value: "430181"
        }, {
            label: "宁乡市",
            value: "430182"
        } ], [ {
            label: "荷塘区",
            value: "430202"
        }, {
            label: "芦淞区",
            value: "430203"
        }, {
            label: "石峰区",
            value: "430204"
        }, {
            label: "天元区",
            value: "430211"
        }, {
            label: "株洲县",
            value: "430221"
        }, {
            label: "攸县",
            value: "430223"
        }, {
            label: "茶陵县",
            value: "430224"
        }, {
            label: "炎陵县",
            value: "430225"
        }, {
            label: "云龙示范区",
            value: "430271"
        }, {
            label: "醴陵市",
            value: "430281"
        } ], [ {
            label: "雨湖区",
            value: "430302"
        }, {
            label: "岳塘区",
            value: "430304"
        }, {
            label: "湘潭县",
            value: "430321"
        }, {
            label: "湖南湘潭高新技术产业园区",
            value: "430371"
        }, {
            label: "湘潭昭山示范区",
            value: "430372"
        }, {
            label: "湘潭九华示范区",
            value: "430373"
        }, {
            label: "湘乡市",
            value: "430381"
        }, {
            label: "韶山市",
            value: "430382"
        } ], [ {
            label: "珠晖区",
            value: "430405"
        }, {
            label: "雁峰区",
            value: "430406"
        }, {
            label: "石鼓区",
            value: "430407"
        }, {
            label: "蒸湘区",
            value: "430408"
        }, {
            label: "南岳区",
            value: "430412"
        }, {
            label: "衡阳县",
            value: "430421"
        }, {
            label: "衡南县",
            value: "430422"
        }, {
            label: "衡山县",
            value: "430423"
        }, {
            label: "衡东县",
            value: "430424"
        }, {
            label: "祁东县",
            value: "430426"
        }, {
            label: "衡阳综合保税区",
            value: "430471"
        }, {
            label: "湖南衡阳高新技术产业园区",
            value: "430472"
        }, {
            label: "湖南衡阳松木经济开发区",
            value: "430473"
        }, {
            label: "耒阳市",
            value: "430481"
        }, {
            label: "常宁市",
            value: "430482"
        } ], [ {
            label: "双清区",
            value: "430502"
        }, {
            label: "大祥区",
            value: "430503"
        }, {
            label: "北塔区",
            value: "430511"
        }, {
            label: "邵东县",
            value: "430521"
        }, {
            label: "新邵县",
            value: "430522"
        }, {
            label: "邵阳县",
            value: "430523"
        }, {
            label: "隆回县",
            value: "430524"
        }, {
            label: "洞口县",
            value: "430525"
        }, {
            label: "绥宁县",
            value: "430527"
        }, {
            label: "新宁县",
            value: "430528"
        }, {
            label: "城步苗族自治县",
            value: "430529"
        }, {
            label: "武冈市",
            value: "430581"
        } ], [ {
            label: "岳阳楼区",
            value: "430602"
        }, {
            label: "云溪区",
            value: "430603"
        }, {
            label: "君山区",
            value: "430611"
        }, {
            label: "岳阳县",
            value: "430621"
        }, {
            label: "华容县",
            value: "430623"
        }, {
            label: "湘阴县",
            value: "430624"
        }, {
            label: "平江县",
            value: "430626"
        }, {
            label: "岳阳市屈原管理区",
            value: "430671"
        }, {
            label: "汨罗市",
            value: "430681"
        }, {
            label: "临湘市",
            value: "430682"
        } ], [ {
            label: "武陵区",
            value: "430702"
        }, {
            label: "鼎城区",
            value: "430703"
        }, {
            label: "安乡县",
            value: "430721"
        }, {
            label: "汉寿县",
            value: "430722"
        }, {
            label: "澧县",
            value: "430723"
        }, {
            label: "临澧县",
            value: "430724"
        }, {
            label: "桃源县",
            value: "430725"
        }, {
            label: "石门县",
            value: "430726"
        }, {
            label: "常德市西洞庭管理区",
            value: "430771"
        }, {
            label: "津市市",
            value: "430781"
        } ], [ {
            label: "永定区",
            value: "430802"
        }, {
            label: "武陵源区",
            value: "430811"
        }, {
            label: "慈利县",
            value: "430821"
        }, {
            label: "桑植县",
            value: "430822"
        } ], [ {
            label: "资阳区",
            value: "430902"
        }, {
            label: "赫山区",
            value: "430903"
        }, {
            label: "南县",
            value: "430921"
        }, {
            label: "桃江县",
            value: "430922"
        }, {
            label: "安化县",
            value: "430923"
        }, {
            label: "益阳市大通湖管理区",
            value: "430971"
        }, {
            label: "湖南益阳高新技术产业园区",
            value: "430972"
        }, {
            label: "沅江市",
            value: "430981"
        } ], [ {
            label: "北湖区",
            value: "431002"
        }, {
            label: "苏仙区",
            value: "431003"
        }, {
            label: "桂阳县",
            value: "431021"
        }, {
            label: "宜章县",
            value: "431022"
        }, {
            label: "永兴县",
            value: "431023"
        }, {
            label: "嘉禾县",
            value: "431024"
        }, {
            label: "临武县",
            value: "431025"
        }, {
            label: "汝城县",
            value: "431026"
        }, {
            label: "桂东县",
            value: "431027"
        }, {
            label: "安仁县",
            value: "431028"
        }, {
            label: "资兴市",
            value: "431081"
        } ], [ {
            label: "零陵区",
            value: "431102"
        }, {
            label: "冷水滩区",
            value: "431103"
        }, {
            label: "祁阳县",
            value: "431121"
        }, {
            label: "东安县",
            value: "431122"
        }, {
            label: "双牌县",
            value: "431123"
        }, {
            label: "道县",
            value: "431124"
        }, {
            label: "江永县",
            value: "431125"
        }, {
            label: "宁远县",
            value: "431126"
        }, {
            label: "蓝山县",
            value: "431127"
        }, {
            label: "新田县",
            value: "431128"
        }, {
            label: "江华瑶族自治县",
            value: "431129"
        }, {
            label: "永州经济技术开发区",
            value: "431171"
        }, {
            label: "永州市金洞管理区",
            value: "431172"
        }, {
            label: "永州市回龙圩管理区",
            value: "431173"
        } ], [ {
            label: "鹤城区",
            value: "431202"
        }, {
            label: "中方县",
            value: "431221"
        }, {
            label: "沅陵县",
            value: "431222"
        }, {
            label: "辰溪县",
            value: "431223"
        }, {
            label: "溆浦县",
            value: "431224"
        }, {
            label: "会同县",
            value: "431225"
        }, {
            label: "麻阳苗族自治县",
            value: "431226"
        }, {
            label: "新晃侗族自治县",
            value: "431227"
        }, {
            label: "芷江侗族自治县",
            value: "431228"
        }, {
            label: "靖州苗族侗族自治县",
            value: "431229"
        }, {
            label: "通道侗族自治县",
            value: "431230"
        }, {
            label: "怀化市洪江管理区",
            value: "431271"
        }, {
            label: "洪江市",
            value: "431281"
        } ], [ {
            label: "娄星区",
            value: "431302"
        }, {
            label: "双峰县",
            value: "431321"
        }, {
            label: "新化县",
            value: "431322"
        }, {
            label: "冷水江市",
            value: "431381"
        }, {
            label: "涟源市",
            value: "431382"
        } ], [ {
            label: "吉首市",
            value: "433101"
        }, {
            label: "泸溪县",
            value: "433122"
        }, {
            label: "凤凰县",
            value: "433123"
        }, {
            label: "花垣县",
            value: "433124"
        }, {
            label: "保靖县",
            value: "433125"
        }, {
            label: "古丈县",
            value: "433126"
        }, {
            label: "永顺县",
            value: "433127"
        }, {
            label: "龙山县",
            value: "433130"
        }, {
            label: "湖南吉首经济开发区",
            value: "433172"
        }, {
            label: "湖南永顺经济开发区",
            value: "433173"
        } ] ], [ [ {
            label: "荔湾区",
            value: "440103"
        }, {
            label: "越秀区",
            value: "440104"
        }, {
            label: "海珠区",
            value: "440105"
        }, {
            label: "天河区",
            value: "440106"
        }, {
            label: "白云区",
            value: "440111"
        }, {
            label: "黄埔区",
            value: "440112"
        }, {
            label: "番禺区",
            value: "440113"
        }, {
            label: "花都区",
            value: "440114"
        }, {
            label: "南沙区",
            value: "440115"
        }, {
            label: "从化区",
            value: "440117"
        }, {
            label: "增城区",
            value: "440118"
        } ], [ {
            label: "武江区",
            value: "440203"
        }, {
            label: "浈江区",
            value: "440204"
        }, {
            label: "曲江区",
            value: "440205"
        }, {
            label: "始兴县",
            value: "440222"
        }, {
            label: "仁化县",
            value: "440224"
        }, {
            label: "翁源县",
            value: "440229"
        }, {
            label: "乳源瑶族自治县",
            value: "440232"
        }, {
            label: "新丰县",
            value: "440233"
        }, {
            label: "乐昌市",
            value: "440281"
        }, {
            label: "南雄市",
            value: "440282"
        } ], [ {
            label: "罗湖区",
            value: "440303"
        }, {
            label: "福田区",
            value: "440304"
        }, {
            label: "南山区",
            value: "440305"
        }, {
            label: "宝安区",
            value: "440306"
        }, {
            label: "龙岗区",
            value: "440307"
        }, {
            label: "盐田区",
            value: "440308"
        }, {
            label: "龙华区",
            value: "440309"
        }, {
            label: "坪山区",
            value: "440310"
        } ], [ {
            label: "香洲区",
            value: "440402"
        }, {
            label: "斗门区",
            value: "440403"
        }, {
            label: "金湾区",
            value: "440404"
        } ], [ {
            label: "龙湖区",
            value: "440507"
        }, {
            label: "金平区",
            value: "440511"
        }, {
            label: "濠江区",
            value: "440512"
        }, {
            label: "潮阳区",
            value: "440513"
        }, {
            label: "潮南区",
            value: "440514"
        }, {
            label: "澄海区",
            value: "440515"
        }, {
            label: "南澳县",
            value: "440523"
        } ], [ {
            label: "禅城区",
            value: "440604"
        }, {
            label: "南海区",
            value: "440605"
        }, {
            label: "顺德区",
            value: "440606"
        }, {
            label: "三水区",
            value: "440607"
        }, {
            label: "高明区",
            value: "440608"
        } ], [ {
            label: "蓬江区",
            value: "440703"
        }, {
            label: "江海区",
            value: "440704"
        }, {
            label: "新会区",
            value: "440705"
        }, {
            label: "台山市",
            value: "440781"
        }, {
            label: "开平市",
            value: "440783"
        }, {
            label: "鹤山市",
            value: "440784"
        }, {
            label: "恩平市",
            value: "440785"
        } ], [ {
            label: "赤坎区",
            value: "440802"
        }, {
            label: "霞山区",
            value: "440803"
        }, {
            label: "坡头区",
            value: "440804"
        }, {
            label: "麻章区",
            value: "440811"
        }, {
            label: "遂溪县",
            value: "440823"
        }, {
            label: "徐闻县",
            value: "440825"
        }, {
            label: "廉江市",
            value: "440881"
        }, {
            label: "雷州市",
            value: "440882"
        }, {
            label: "吴川市",
            value: "440883"
        } ], [ {
            label: "茂南区",
            value: "440902"
        }, {
            label: "电白区",
            value: "440904"
        }, {
            label: "高州市",
            value: "440981"
        }, {
            label: "化州市",
            value: "440982"
        }, {
            label: "信宜市",
            value: "440983"
        } ], [ {
            label: "端州区",
            value: "441202"
        }, {
            label: "鼎湖区",
            value: "441203"
        }, {
            label: "高要区",
            value: "441204"
        }, {
            label: "广宁县",
            value: "441223"
        }, {
            label: "怀集县",
            value: "441224"
        }, {
            label: "封开县",
            value: "441225"
        }, {
            label: "德庆县",
            value: "441226"
        }, {
            label: "四会市",
            value: "441284"
        } ], [ {
            label: "惠城区",
            value: "441302"
        }, {
            label: "惠阳区",
            value: "441303"
        }, {
            label: "博罗县",
            value: "441322"
        }, {
            label: "惠东县",
            value: "441323"
        }, {
            label: "龙门县",
            value: "441324"
        } ], [ {
            label: "梅江区",
            value: "441402"
        }, {
            label: "梅县区",
            value: "441403"
        }, {
            label: "大埔县",
            value: "441422"
        }, {
            label: "丰顺县",
            value: "441423"
        }, {
            label: "五华县",
            value: "441424"
        }, {
            label: "平远县",
            value: "441426"
        }, {
            label: "蕉岭县",
            value: "441427"
        }, {
            label: "兴宁市",
            value: "441481"
        } ], [ {
            label: "城区",
            value: "441502"
        }, {
            label: "海丰县",
            value: "441521"
        }, {
            label: "陆河县",
            value: "441523"
        }, {
            label: "陆丰市",
            value: "441581"
        } ], [ {
            label: "源城区",
            value: "441602"
        }, {
            label: "紫金县",
            value: "441621"
        }, {
            label: "龙川县",
            value: "441622"
        }, {
            label: "连平县",
            value: "441623"
        }, {
            label: "和平县",
            value: "441624"
        }, {
            label: "东源县",
            value: "441625"
        } ], [ {
            label: "江城区",
            value: "441702"
        }, {
            label: "阳东区",
            value: "441704"
        }, {
            label: "阳西县",
            value: "441721"
        }, {
            label: "阳春市",
            value: "441781"
        } ], [ {
            label: "清城区",
            value: "441802"
        }, {
            label: "清新区",
            value: "441803"
        }, {
            label: "佛冈县",
            value: "441821"
        }, {
            label: "阳山县",
            value: "441823"
        }, {
            label: "连山壮族瑶族自治县",
            value: "441825"
        }, {
            label: "连南瑶族自治县",
            value: "441826"
        }, {
            label: "英德市",
            value: "441881"
        }, {
            label: "连州市",
            value: "441882"
        } ], [ {
            label: "东莞市",
            value: "441900"
        } ], [ {
            label: "中山市",
            value: "442000"
        } ], [ {
            label: "湘桥区",
            value: "445102"
        }, {
            label: "潮安区",
            value: "445103"
        }, {
            label: "饶平县",
            value: "445122"
        } ], [ {
            label: "榕城区",
            value: "445202"
        }, {
            label: "揭东区",
            value: "445203"
        }, {
            label: "揭西县",
            value: "445222"
        }, {
            label: "惠来县",
            value: "445224"
        }, {
            label: "普宁市",
            value: "445281"
        } ], [ {
            label: "云城区",
            value: "445302"
        }, {
            label: "云安区",
            value: "445303"
        }, {
            label: "新兴县",
            value: "445321"
        }, {
            label: "郁南县",
            value: "445322"
        }, {
            label: "罗定市",
            value: "445381"
        } ] ], [ [ {
            label: "兴宁区",
            value: "450102"
        }, {
            label: "青秀区",
            value: "450103"
        }, {
            label: "江南区",
            value: "450105"
        }, {
            label: "西乡塘区",
            value: "450107"
        }, {
            label: "良庆区",
            value: "450108"
        }, {
            label: "邕宁区",
            value: "450109"
        }, {
            label: "武鸣区",
            value: "450110"
        }, {
            label: "隆安县",
            value: "450123"
        }, {
            label: "马山县",
            value: "450124"
        }, {
            label: "上林县",
            value: "450125"
        }, {
            label: "宾阳县",
            value: "450126"
        }, {
            label: "横县",
            value: "450127"
        } ], [ {
            label: "城中区",
            value: "450202"
        }, {
            label: "鱼峰区",
            value: "450203"
        }, {
            label: "柳南区",
            value: "450204"
        }, {
            label: "柳北区",
            value: "450205"
        }, {
            label: "柳江区",
            value: "450206"
        }, {
            label: "柳城县",
            value: "450222"
        }, {
            label: "鹿寨县",
            value: "450223"
        }, {
            label: "融安县",
            value: "450224"
        }, {
            label: "融水苗族自治县",
            value: "450225"
        }, {
            label: "三江侗族自治县",
            value: "450226"
        } ], [ {
            label: "秀峰区",
            value: "450302"
        }, {
            label: "叠彩区",
            value: "450303"
        }, {
            label: "象山区",
            value: "450304"
        }, {
            label: "七星区",
            value: "450305"
        }, {
            label: "雁山区",
            value: "450311"
        }, {
            label: "临桂区",
            value: "450312"
        }, {
            label: "阳朔县",
            value: "450321"
        }, {
            label: "灵川县",
            value: "450323"
        }, {
            label: "全州县",
            value: "450324"
        }, {
            label: "兴安县",
            value: "450325"
        }, {
            label: "永福县",
            value: "450326"
        }, {
            label: "灌阳县",
            value: "450327"
        }, {
            label: "龙胜各族自治县",
            value: "450328"
        }, {
            label: "资源县",
            value: "450329"
        }, {
            label: "平乐县",
            value: "450330"
        }, {
            label: "荔浦县",
            value: "450331"
        }, {
            label: "恭城瑶族自治县",
            value: "450332"
        } ], [ {
            label: "万秀区",
            value: "450403"
        }, {
            label: "长洲区",
            value: "450405"
        }, {
            label: "龙圩区",
            value: "450406"
        }, {
            label: "苍梧县",
            value: "450421"
        }, {
            label: "藤县",
            value: "450422"
        }, {
            label: "蒙山县",
            value: "450423"
        }, {
            label: "岑溪市",
            value: "450481"
        } ], [ {
            label: "海城区",
            value: "450502"
        }, {
            label: "银海区",
            value: "450503"
        }, {
            label: "铁山港区",
            value: "450512"
        }, {
            label: "合浦县",
            value: "450521"
        } ], [ {
            label: "港口区",
            value: "450602"
        }, {
            label: "防城区",
            value: "450603"
        }, {
            label: "上思县",
            value: "450621"
        }, {
            label: "东兴市",
            value: "450681"
        } ], [ {
            label: "钦南区",
            value: "450702"
        }, {
            label: "钦北区",
            value: "450703"
        }, {
            label: "灵山县",
            value: "450721"
        }, {
            label: "浦北县",
            value: "450722"
        } ], [ {
            label: "港北区",
            value: "450802"
        }, {
            label: "港南区",
            value: "450803"
        }, {
            label: "覃塘区",
            value: "450804"
        }, {
            label: "平南县",
            value: "450821"
        }, {
            label: "桂平市",
            value: "450881"
        } ], [ {
            label: "玉州区",
            value: "450902"
        }, {
            label: "福绵区",
            value: "450903"
        }, {
            label: "容县",
            value: "450921"
        }, {
            label: "陆川县",
            value: "450922"
        }, {
            label: "博白县",
            value: "450923"
        }, {
            label: "兴业县",
            value: "450924"
        }, {
            label: "北流市",
            value: "450981"
        } ], [ {
            label: "右江区",
            value: "451002"
        }, {
            label: "田阳县",
            value: "451021"
        }, {
            label: "田东县",
            value: "451022"
        }, {
            label: "平果县",
            value: "451023"
        }, {
            label: "德保县",
            value: "451024"
        }, {
            label: "那坡县",
            value: "451026"
        }, {
            label: "凌云县",
            value: "451027"
        }, {
            label: "乐业县",
            value: "451028"
        }, {
            label: "田林县",
            value: "451029"
        }, {
            label: "西林县",
            value: "451030"
        }, {
            label: "隆林各族自治县",
            value: "451031"
        }, {
            label: "靖西市",
            value: "451081"
        } ], [ {
            label: "八步区",
            value: "451102"
        }, {
            label: "平桂区",
            value: "451103"
        }, {
            label: "昭平县",
            value: "451121"
        }, {
            label: "钟山县",
            value: "451122"
        }, {
            label: "富川瑶族自治县",
            value: "451123"
        } ], [ {
            label: "金城江区",
            value: "451202"
        }, {
            label: "宜州区",
            value: "451203"
        }, {
            label: "南丹县",
            value: "451221"
        }, {
            label: "天峨县",
            value: "451222"
        }, {
            label: "凤山县",
            value: "451223"
        }, {
            label: "东兰县",
            value: "451224"
        }, {
            label: "罗城仫佬族自治县",
            value: "451225"
        }, {
            label: "环江毛南族自治县",
            value: "451226"
        }, {
            label: "巴马瑶族自治县",
            value: "451227"
        }, {
            label: "都安瑶族自治县",
            value: "451228"
        }, {
            label: "大化瑶族自治县",
            value: "451229"
        } ], [ {
            label: "兴宾区",
            value: "451302"
        }, {
            label: "忻城县",
            value: "451321"
        }, {
            label: "象州县",
            value: "451322"
        }, {
            label: "武宣县",
            value: "451323"
        }, {
            label: "金秀瑶族自治县",
            value: "451324"
        }, {
            label: "合山市",
            value: "451381"
        } ], [ {
            label: "江州区",
            value: "451402"
        }, {
            label: "扶绥县",
            value: "451421"
        }, {
            label: "宁明县",
            value: "451422"
        }, {
            label: "龙州县",
            value: "451423"
        }, {
            label: "大新县",
            value: "451424"
        }, {
            label: "天等县",
            value: "451425"
        }, {
            label: "凭祥市",
            value: "451481"
        } ] ], [ [ {
            label: "秀英区",
            value: "460105"
        }, {
            label: "龙华区",
            value: "460106"
        }, {
            label: "琼山区",
            value: "460107"
        }, {
            label: "美兰区",
            value: "460108"
        } ], [ {
            label: "海棠区",
            value: "460202"
        }, {
            label: "吉阳区",
            value: "460203"
        }, {
            label: "天涯区",
            value: "460204"
        }, {
            label: "崖州区",
            value: "460205"
        } ], [ {
            label: "西沙群岛",
            value: "460321"
        }, {
            label: "南沙群岛",
            value: "460322"
        }, {
            label: "中沙群岛的岛礁及其海域",
            value: "460323"
        } ], [ {
            label: "儋州市",
            value: "460400"
        } ], [ {
            label: "五指山市",
            value: "469001"
        }, {
            label: "琼海市",
            value: "469002"
        }, {
            label: "文昌市",
            value: "469005"
        }, {
            label: "万宁市",
            value: "469006"
        }, {
            label: "东方市",
            value: "469007"
        }, {
            label: "定安县",
            value: "469021"
        }, {
            label: "屯昌县",
            value: "469022"
        }, {
            label: "澄迈县",
            value: "469023"
        }, {
            label: "临高县",
            value: "469024"
        }, {
            label: "白沙黎族自治县",
            value: "469025"
        }, {
            label: "昌江黎族自治县",
            value: "469026"
        }, {
            label: "乐东黎族自治县",
            value: "469027"
        }, {
            label: "陵水黎族自治县",
            value: "469028"
        }, {
            label: "保亭黎族苗族自治县",
            value: "469029"
        }, {
            label: "琼中黎族苗族自治县",
            value: "469030"
        } ] ], [ [ {
            label: "万州区",
            value: "500101"
        }, {
            label: "涪陵区",
            value: "500102"
        }, {
            label: "渝中区",
            value: "500103"
        }, {
            label: "大渡口区",
            value: "500104"
        }, {
            label: "江北区",
            value: "500105"
        }, {
            label: "沙坪坝区",
            value: "500106"
        }, {
            label: "九龙坡区",
            value: "500107"
        }, {
            label: "南岸区",
            value: "500108"
        }, {
            label: "北碚区",
            value: "500109"
        }, {
            label: "綦江区",
            value: "500110"
        }, {
            label: "大足区",
            value: "500111"
        }, {
            label: "渝北区",
            value: "500112"
        }, {
            label: "巴南区",
            value: "500113"
        }, {
            label: "黔江区",
            value: "500114"
        }, {
            label: "长寿区",
            value: "500115"
        }, {
            label: "江津区",
            value: "500116"
        }, {
            label: "合川区",
            value: "500117"
        }, {
            label: "永川区",
            value: "500118"
        }, {
            label: "南川区",
            value: "500119"
        }, {
            label: "璧山区",
            value: "500120"
        }, {
            label: "铜梁区",
            value: "500151"
        }, {
            label: "潼南区",
            value: "500152"
        }, {
            label: "荣昌区",
            value: "500153"
        }, {
            label: "开州区",
            value: "500154"
        }, {
            label: "梁平区",
            value: "500155"
        }, {
            label: "武隆区",
            value: "500156"
        } ], [ {
            label: "城口县",
            value: "500229"
        }, {
            label: "丰都县",
            value: "500230"
        }, {
            label: "垫江县",
            value: "500231"
        }, {
            label: "忠县",
            value: "500233"
        }, {
            label: "云阳县",
            value: "500235"
        }, {
            label: "奉节县",
            value: "500236"
        }, {
            label: "巫山县",
            value: "500237"
        }, {
            label: "巫溪县",
            value: "500238"
        }, {
            label: "石柱土家族自治县",
            value: "500240"
        }, {
            label: "秀山土家族苗族自治县",
            value: "500241"
        }, {
            label: "酉阳土家族苗族自治县",
            value: "500242"
        }, {
            label: "彭水苗族土家族自治县",
            value: "500243"
        } ] ], [ [ {
            label: "锦江区",
            value: "510104"
        }, {
            label: "青羊区",
            value: "510105"
        }, {
            label: "金牛区",
            value: "510106"
        }, {
            label: "武侯区",
            value: "510107"
        }, {
            label: "成华区",
            value: "510108"
        }, {
            label: "龙泉驿区",
            value: "510112"
        }, {
            label: "青白江区",
            value: "510113"
        }, {
            label: "新都区",
            value: "510114"
        }, {
            label: "温江区",
            value: "510115"
        }, {
            label: "双流区",
            value: "510116"
        }, {
            label: "郫都区",
            value: "510117"
        }, {
            label: "金堂县",
            value: "510121"
        }, {
            label: "大邑县",
            value: "510129"
        }, {
            label: "蒲江县",
            value: "510131"
        }, {
            label: "新津县",
            value: "510132"
        }, {
            label: "都江堰市",
            value: "510181"
        }, {
            label: "彭州市",
            value: "510182"
        }, {
            label: "邛崃市",
            value: "510183"
        }, {
            label: "崇州市",
            value: "510184"
        }, {
            label: "简阳市",
            value: "510185"
        } ], [ {
            label: "自流井区",
            value: "510302"
        }, {
            label: "贡井区",
            value: "510303"
        }, {
            label: "大安区",
            value: "510304"
        }, {
            label: "沿滩区",
            value: "510311"
        }, {
            label: "荣县",
            value: "510321"
        }, {
            label: "富顺县",
            value: "510322"
        } ], [ {
            label: "东区",
            value: "510402"
        }, {
            label: "西区",
            value: "510403"
        }, {
            label: "仁和区",
            value: "510411"
        }, {
            label: "米易县",
            value: "510421"
        }, {
            label: "盐边县",
            value: "510422"
        } ], [ {
            label: "江阳区",
            value: "510502"
        }, {
            label: "纳溪区",
            value: "510503"
        }, {
            label: "龙马潭区",
            value: "510504"
        }, {
            label: "泸县",
            value: "510521"
        }, {
            label: "合江县",
            value: "510522"
        }, {
            label: "叙永县",
            value: "510524"
        }, {
            label: "古蔺县",
            value: "510525"
        } ], [ {
            label: "旌阳区",
            value: "510603"
        }, {
            label: "罗江区",
            value: "510604"
        }, {
            label: "中江县",
            value: "510623"
        }, {
            label: "广汉市",
            value: "510681"
        }, {
            label: "什邡市",
            value: "510682"
        }, {
            label: "绵竹市",
            value: "510683"
        } ], [ {
            label: "涪城区",
            value: "510703"
        }, {
            label: "游仙区",
            value: "510704"
        }, {
            label: "安州区",
            value: "510705"
        }, {
            label: "三台县",
            value: "510722"
        }, {
            label: "盐亭县",
            value: "510723"
        }, {
            label: "梓潼县",
            value: "510725"
        }, {
            label: "北川羌族自治县",
            value: "510726"
        }, {
            label: "平武县",
            value: "510727"
        }, {
            label: "江油市",
            value: "510781"
        } ], [ {
            label: "利州区",
            value: "510802"
        }, {
            label: "昭化区",
            value: "510811"
        }, {
            label: "朝天区",
            value: "510812"
        }, {
            label: "旺苍县",
            value: "510821"
        }, {
            label: "青川县",
            value: "510822"
        }, {
            label: "剑阁县",
            value: "510823"
        }, {
            label: "苍溪县",
            value: "510824"
        } ], [ {
            label: "船山区",
            value: "510903"
        }, {
            label: "安居区",
            value: "510904"
        }, {
            label: "蓬溪县",
            value: "510921"
        }, {
            label: "射洪县",
            value: "510922"
        }, {
            label: "大英县",
            value: "510923"
        } ], [ {
            label: "市中区",
            value: "511002"
        }, {
            label: "东兴区",
            value: "511011"
        }, {
            label: "威远县",
            value: "511024"
        }, {
            label: "资中县",
            value: "511025"
        }, {
            label: "内江经济开发区",
            value: "511071"
        }, {
            label: "隆昌市",
            value: "511083"
        } ], [ {
            label: "市中区",
            value: "511102"
        }, {
            label: "沙湾区",
            value: "511111"
        }, {
            label: "五通桥区",
            value: "511112"
        }, {
            label: "金口河区",
            value: "511113"
        }, {
            label: "犍为县",
            value: "511123"
        }, {
            label: "井研县",
            value: "511124"
        }, {
            label: "夹江县",
            value: "511126"
        }, {
            label: "沐川县",
            value: "511129"
        }, {
            label: "峨边彝族自治县",
            value: "511132"
        }, {
            label: "马边彝族自治县",
            value: "511133"
        }, {
            label: "峨眉山市",
            value: "511181"
        } ], [ {
            label: "顺庆区",
            value: "511302"
        }, {
            label: "高坪区",
            value: "511303"
        }, {
            label: "嘉陵区",
            value: "511304"
        }, {
            label: "南部县",
            value: "511321"
        }, {
            label: "营山县",
            value: "511322"
        }, {
            label: "蓬安县",
            value: "511323"
        }, {
            label: "仪陇县",
            value: "511324"
        }, {
            label: "西充县",
            value: "511325"
        }, {
            label: "阆中市",
            value: "511381"
        } ], [ {
            label: "东坡区",
            value: "511402"
        }, {
            label: "彭山区",
            value: "511403"
        }, {
            label: "仁寿县",
            value: "511421"
        }, {
            label: "洪雅县",
            value: "511423"
        }, {
            label: "丹棱县",
            value: "511424"
        }, {
            label: "青神县",
            value: "511425"
        } ], [ {
            label: "翠屏区",
            value: "511502"
        }, {
            label: "南溪区",
            value: "511503"
        }, {
            label: "宜宾县",
            value: "511521"
        }, {
            label: "江安县",
            value: "511523"
        }, {
            label: "长宁县",
            value: "511524"
        }, {
            label: "高县",
            value: "511525"
        }, {
            label: "珙县",
            value: "511526"
        }, {
            label: "筠连县",
            value: "511527"
        }, {
            label: "兴文县",
            value: "511528"
        }, {
            label: "屏山县",
            value: "511529"
        } ], [ {
            label: "广安区",
            value: "511602"
        }, {
            label: "前锋区",
            value: "511603"
        }, {
            label: "岳池县",
            value: "511621"
        }, {
            label: "武胜县",
            value: "511622"
        }, {
            label: "邻水县",
            value: "511623"
        }, {
            label: "华蓥市",
            value: "511681"
        } ], [ {
            label: "通川区",
            value: "511702"
        }, {
            label: "达川区",
            value: "511703"
        }, {
            label: "宣汉县",
            value: "511722"
        }, {
            label: "开江县",
            value: "511723"
        }, {
            label: "大竹县",
            value: "511724"
        }, {
            label: "渠县",
            value: "511725"
        }, {
            label: "达州经济开发区",
            value: "511771"
        }, {
            label: "万源市",
            value: "511781"
        } ], [ {
            label: "雨城区",
            value: "511802"
        }, {
            label: "名山区",
            value: "511803"
        }, {
            label: "荥经县",
            value: "511822"
        }, {
            label: "汉源县",
            value: "511823"
        }, {
            label: "石棉县",
            value: "511824"
        }, {
            label: "天全县",
            value: "511825"
        }, {
            label: "芦山县",
            value: "511826"
        }, {
            label: "宝兴县",
            value: "511827"
        } ], [ {
            label: "巴州区",
            value: "511902"
        }, {
            label: "恩阳区",
            value: "511903"
        }, {
            label: "通江县",
            value: "511921"
        }, {
            label: "南江县",
            value: "511922"
        }, {
            label: "平昌县",
            value: "511923"
        }, {
            label: "巴中经济开发区",
            value: "511971"
        } ], [ {
            label: "雁江区",
            value: "512002"
        }, {
            label: "安岳县",
            value: "512021"
        }, {
            label: "乐至县",
            value: "512022"
        } ], [ {
            label: "马尔康市",
            value: "513201"
        }, {
            label: "汶川县",
            value: "513221"
        }, {
            label: "理县",
            value: "513222"
        }, {
            label: "茂县",
            value: "513223"
        }, {
            label: "松潘县",
            value: "513224"
        }, {
            label: "九寨沟县",
            value: "513225"
        }, {
            label: "金川县",
            value: "513226"
        }, {
            label: "小金县",
            value: "513227"
        }, {
            label: "黑水县",
            value: "513228"
        }, {
            label: "壤塘县",
            value: "513230"
        }, {
            label: "阿坝县",
            value: "513231"
        }, {
            label: "若尔盖县",
            value: "513232"
        }, {
            label: "红原县",
            value: "513233"
        } ], [ {
            label: "康定市",
            value: "513301"
        }, {
            label: "泸定县",
            value: "513322"
        }, {
            label: "丹巴县",
            value: "513323"
        }, {
            label: "九龙县",
            value: "513324"
        }, {
            label: "雅江县",
            value: "513325"
        }, {
            label: "道孚县",
            value: "513326"
        }, {
            label: "炉霍县",
            value: "513327"
        }, {
            label: "甘孜县",
            value: "513328"
        }, {
            label: "新龙县",
            value: "513329"
        }, {
            label: "德格县",
            value: "513330"
        }, {
            label: "白玉县",
            value: "513331"
        }, {
            label: "石渠县",
            value: "513332"
        }, {
            label: "色达县",
            value: "513333"
        }, {
            label: "理塘县",
            value: "513334"
        }, {
            label: "巴塘县",
            value: "513335"
        }, {
            label: "乡城县",
            value: "513336"
        }, {
            label: "稻城县",
            value: "513337"
        }, {
            label: "得荣县",
            value: "513338"
        } ], [ {
            label: "西昌市",
            value: "513401"
        }, {
            label: "木里藏族自治县",
            value: "513422"
        }, {
            label: "盐源县",
            value: "513423"
        }, {
            label: "德昌县",
            value: "513424"
        }, {
            label: "会理县",
            value: "513425"
        }, {
            label: "会东县",
            value: "513426"
        }, {
            label: "宁南县",
            value: "513427"
        }, {
            label: "普格县",
            value: "513428"
        }, {
            label: "布拖县",
            value: "513429"
        }, {
            label: "金阳县",
            value: "513430"
        }, {
            label: "昭觉县",
            value: "513431"
        }, {
            label: "喜德县",
            value: "513432"
        }, {
            label: "冕宁县",
            value: "513433"
        }, {
            label: "越西县",
            value: "513434"
        }, {
            label: "甘洛县",
            value: "513435"
        }, {
            label: "美姑县",
            value: "513436"
        }, {
            label: "雷波县",
            value: "513437"
        } ] ], [ [ {
            label: "南明区",
            value: "520102"
        }, {
            label: "云岩区",
            value: "520103"
        }, {
            label: "花溪区",
            value: "520111"
        }, {
            label: "乌当区",
            value: "520112"
        }, {
            label: "白云区",
            value: "520113"
        }, {
            label: "观山湖区",
            value: "520115"
        }, {
            label: "开阳县",
            value: "520121"
        }, {
            label: "息烽县",
            value: "520122"
        }, {
            label: "修文县",
            value: "520123"
        }, {
            label: "清镇市",
            value: "520181"
        } ], [ {
            label: "钟山区",
            value: "520201"
        }, {
            label: "六枝特区",
            value: "520203"
        }, {
            label: "水城县",
            value: "520221"
        }, {
            label: "盘州市",
            value: "520281"
        } ], [ {
            label: "红花岗区",
            value: "520302"
        }, {
            label: "汇川区",
            value: "520303"
        }, {
            label: "播州区",
            value: "520304"
        }, {
            label: "桐梓县",
            value: "520322"
        }, {
            label: "绥阳县",
            value: "520323"
        }, {
            label: "正安县",
            value: "520324"
        }, {
            label: "道真仡佬族苗族自治县",
            value: "520325"
        }, {
            label: "务川仡佬族苗族自治县",
            value: "520326"
        }, {
            label: "凤冈县",
            value: "520327"
        }, {
            label: "湄潭县",
            value: "520328"
        }, {
            label: "余庆县",
            value: "520329"
        }, {
            label: "习水县",
            value: "520330"
        }, {
            label: "赤水市",
            value: "520381"
        }, {
            label: "仁怀市",
            value: "520382"
        } ], [ {
            label: "西秀区",
            value: "520402"
        }, {
            label: "平坝区",
            value: "520403"
        }, {
            label: "普定县",
            value: "520422"
        }, {
            label: "镇宁布依族苗族自治县",
            value: "520423"
        }, {
            label: "关岭布依族苗族自治县",
            value: "520424"
        }, {
            label: "紫云苗族布依族自治县",
            value: "520425"
        } ], [ {
            label: "七星关区",
            value: "520502"
        }, {
            label: "大方县",
            value: "520521"
        }, {
            label: "黔西县",
            value: "520522"
        }, {
            label: "金沙县",
            value: "520523"
        }, {
            label: "织金县",
            value: "520524"
        }, {
            label: "纳雍县",
            value: "520525"
        }, {
            label: "威宁彝族回族苗族自治县",
            value: "520526"
        }, {
            label: "赫章县",
            value: "520527"
        } ], [ {
            label: "碧江区",
            value: "520602"
        }, {
            label: "万山区",
            value: "520603"
        }, {
            label: "江口县",
            value: "520621"
        }, {
            label: "玉屏侗族自治县",
            value: "520622"
        }, {
            label: "石阡县",
            value: "520623"
        }, {
            label: "思南县",
            value: "520624"
        }, {
            label: "印江土家族苗族自治县",
            value: "520625"
        }, {
            label: "德江县",
            value: "520626"
        }, {
            label: "沿河土家族自治县",
            value: "520627"
        }, {
            label: "松桃苗族自治县",
            value: "520628"
        } ], [ {
            label: "兴义市",
            value: "522301"
        }, {
            label: "兴仁县",
            value: "522322"
        }, {
            label: "普安县",
            value: "522323"
        }, {
            label: "晴隆县",
            value: "522324"
        }, {
            label: "贞丰县",
            value: "522325"
        }, {
            label: "望谟县",
            value: "522326"
        }, {
            label: "册亨县",
            value: "522327"
        }, {
            label: "安龙县",
            value: "522328"
        } ], [ {
            label: "凯里市",
            value: "522601"
        }, {
            label: "黄平县",
            value: "522622"
        }, {
            label: "施秉县",
            value: "522623"
        }, {
            label: "三穗县",
            value: "522624"
        }, {
            label: "镇远县",
            value: "522625"
        }, {
            label: "岑巩县",
            value: "522626"
        }, {
            label: "天柱县",
            value: "522627"
        }, {
            label: "锦屏县",
            value: "522628"
        }, {
            label: "剑河县",
            value: "522629"
        }, {
            label: "台江县",
            value: "522630"
        }, {
            label: "黎平县",
            value: "522631"
        }, {
            label: "榕江县",
            value: "522632"
        }, {
            label: "从江县",
            value: "522633"
        }, {
            label: "雷山县",
            value: "522634"
        }, {
            label: "麻江县",
            value: "522635"
        }, {
            label: "丹寨县",
            value: "522636"
        } ], [ {
            label: "都匀市",
            value: "522701"
        }, {
            label: "福泉市",
            value: "522702"
        }, {
            label: "荔波县",
            value: "522722"
        }, {
            label: "贵定县",
            value: "522723"
        }, {
            label: "瓮安县",
            value: "522725"
        }, {
            label: "独山县",
            value: "522726"
        }, {
            label: "平塘县",
            value: "522727"
        }, {
            label: "罗甸县",
            value: "522728"
        }, {
            label: "长顺县",
            value: "522729"
        }, {
            label: "龙里县",
            value: "522730"
        }, {
            label: "惠水县",
            value: "522731"
        }, {
            label: "三都水族自治县",
            value: "522732"
        } ] ], [ [ {
            label: "五华区",
            value: "530102"
        }, {
            label: "盘龙区",
            value: "530103"
        }, {
            label: "官渡区",
            value: "530111"
        }, {
            label: "西山区",
            value: "530112"
        }, {
            label: "东川区",
            value: "530113"
        }, {
            label: "呈贡区",
            value: "530114"
        }, {
            label: "晋宁区",
            value: "530115"
        }, {
            label: "富民县",
            value: "530124"
        }, {
            label: "宜良县",
            value: "530125"
        }, {
            label: "石林彝族自治县",
            value: "530126"
        }, {
            label: "嵩明县",
            value: "530127"
        }, {
            label: "禄劝彝族苗族自治县",
            value: "530128"
        }, {
            label: "寻甸回族彝族自治县",
            value: "530129"
        }, {
            label: "安宁市",
            value: "530181"
        } ], [ {
            label: "麒麟区",
            value: "530302"
        }, {
            label: "沾益区",
            value: "530303"
        }, {
            label: "马龙县",
            value: "530321"
        }, {
            label: "陆良县",
            value: "530322"
        }, {
            label: "师宗县",
            value: "530323"
        }, {
            label: "罗平县",
            value: "530324"
        }, {
            label: "富源县",
            value: "530325"
        }, {
            label: "会泽县",
            value: "530326"
        }, {
            label: "宣威市",
            value: "530381"
        } ], [ {
            label: "红塔区",
            value: "530402"
        }, {
            label: "江川区",
            value: "530403"
        }, {
            label: "澄江县",
            value: "530422"
        }, {
            label: "通海县",
            value: "530423"
        }, {
            label: "华宁县",
            value: "530424"
        }, {
            label: "易门县",
            value: "530425"
        }, {
            label: "峨山彝族自治县",
            value: "530426"
        }, {
            label: "新平彝族傣族自治县",
            value: "530427"
        }, {
            label: "元江哈尼族彝族傣族自治县",
            value: "530428"
        } ], [ {
            label: "隆阳区",
            value: "530502"
        }, {
            label: "施甸县",
            value: "530521"
        }, {
            label: "龙陵县",
            value: "530523"
        }, {
            label: "昌宁县",
            value: "530524"
        }, {
            label: "腾冲市",
            value: "530581"
        } ], [ {
            label: "昭阳区",
            value: "530602"
        }, {
            label: "鲁甸县",
            value: "530621"
        }, {
            label: "巧家县",
            value: "530622"
        }, {
            label: "盐津县",
            value: "530623"
        }, {
            label: "大关县",
            value: "530624"
        }, {
            label: "永善县",
            value: "530625"
        }, {
            label: "绥江县",
            value: "530626"
        }, {
            label: "镇雄县",
            value: "530627"
        }, {
            label: "彝良县",
            value: "530628"
        }, {
            label: "威信县",
            value: "530629"
        }, {
            label: "水富县",
            value: "530630"
        } ], [ {
            label: "古城区",
            value: "530702"
        }, {
            label: "玉龙纳西族自治县",
            value: "530721"
        }, {
            label: "永胜县",
            value: "530722"
        }, {
            label: "华坪县",
            value: "530723"
        }, {
            label: "宁蒗彝族自治县",
            value: "530724"
        } ], [ {
            label: "思茅区",
            value: "530802"
        }, {
            label: "宁洱哈尼族彝族自治县",
            value: "530821"
        }, {
            label: "墨江哈尼族自治县",
            value: "530822"
        }, {
            label: "景东彝族自治县",
            value: "530823"
        }, {
            label: "景谷傣族彝族自治县",
            value: "530824"
        }, {
            label: "镇沅彝族哈尼族拉祜族自治县",
            value: "530825"
        }, {
            label: "江城哈尼族彝族自治县",
            value: "530826"
        }, {
            label: "孟连傣族拉祜族佤族自治县",
            value: "530827"
        }, {
            label: "澜沧拉祜族自治县",
            value: "530828"
        }, {
            label: "西盟佤族自治县",
            value: "530829"
        } ], [ {
            label: "临翔区",
            value: "530902"
        }, {
            label: "凤庆县",
            value: "530921"
        }, {
            label: "云县",
            value: "530922"
        }, {
            label: "永德县",
            value: "530923"
        }, {
            label: "镇康县",
            value: "530924"
        }, {
            label: "双江拉祜族佤族布朗族傣族自治县",
            value: "530925"
        }, {
            label: "耿马傣族佤族自治县",
            value: "530926"
        }, {
            label: "沧源佤族自治县",
            value: "530927"
        } ], [ {
            label: "楚雄市",
            value: "532301"
        }, {
            label: "双柏县",
            value: "532322"
        }, {
            label: "牟定县",
            value: "532323"
        }, {
            label: "南华县",
            value: "532324"
        }, {
            label: "姚安县",
            value: "532325"
        }, {
            label: "大姚县",
            value: "532326"
        }, {
            label: "永仁县",
            value: "532327"
        }, {
            label: "元谋县",
            value: "532328"
        }, {
            label: "武定县",
            value: "532329"
        }, {
            label: "禄丰县",
            value: "532331"
        } ], [ {
            label: "个旧市",
            value: "532501"
        }, {
            label: "开远市",
            value: "532502"
        }, {
            label: "蒙自市",
            value: "532503"
        }, {
            label: "弥勒市",
            value: "532504"
        }, {
            label: "屏边苗族自治县",
            value: "532523"
        }, {
            label: "建水县",
            value: "532524"
        }, {
            label: "石屏县",
            value: "532525"
        }, {
            label: "泸西县",
            value: "532527"
        }, {
            label: "元阳县",
            value: "532528"
        }, {
            label: "红河县",
            value: "532529"
        }, {
            label: "金平苗族瑶族傣族自治县",
            value: "532530"
        }, {
            label: "绿春县",
            value: "532531"
        }, {
            label: "河口瑶族自治县",
            value: "532532"
        } ], [ {
            label: "文山市",
            value: "532601"
        }, {
            label: "砚山县",
            value: "532622"
        }, {
            label: "西畴县",
            value: "532623"
        }, {
            label: "麻栗坡县",
            value: "532624"
        }, {
            label: "马关县",
            value: "532625"
        }, {
            label: "丘北县",
            value: "532626"
        }, {
            label: "广南县",
            value: "532627"
        }, {
            label: "富宁县",
            value: "532628"
        } ], [ {
            label: "景洪市",
            value: "532801"
        }, {
            label: "勐海县",
            value: "532822"
        }, {
            label: "勐腊县",
            value: "532823"
        } ], [ {
            label: "大理市",
            value: "532901"
        }, {
            label: "漾濞彝族自治县",
            value: "532922"
        }, {
            label: "祥云县",
            value: "532923"
        }, {
            label: "宾川县",
            value: "532924"
        }, {
            label: "弥渡县",
            value: "532925"
        }, {
            label: "南涧彝族自治县",
            value: "532926"
        }, {
            label: "巍山彝族回族自治县",
            value: "532927"
        }, {
            label: "永平县",
            value: "532928"
        }, {
            label: "云龙县",
            value: "532929"
        }, {
            label: "洱源县",
            value: "532930"
        }, {
            label: "剑川县",
            value: "532931"
        }, {
            label: "鹤庆县",
            value: "532932"
        } ], [ {
            label: "瑞丽市",
            value: "533102"
        }, {
            label: "芒市",
            value: "533103"
        }, {
            label: "梁河县",
            value: "533122"
        }, {
            label: "盈江县",
            value: "533123"
        }, {
            label: "陇川县",
            value: "533124"
        } ], [ {
            label: "泸水市",
            value: "533301"
        }, {
            label: "福贡县",
            value: "533323"
        }, {
            label: "贡山独龙族怒族自治县",
            value: "533324"
        }, {
            label: "兰坪白族普米族自治县",
            value: "533325"
        } ], [ {
            label: "香格里拉市",
            value: "533401"
        }, {
            label: "德钦县",
            value: "533422"
        }, {
            label: "维西傈僳族自治县",
            value: "533423"
        } ] ], [ [ {
            label: "城关区",
            value: "540102"
        }, {
            label: "堆龙德庆区",
            value: "540103"
        }, {
            label: "林周县",
            value: "540121"
        }, {
            label: "当雄县",
            value: "540122"
        }, {
            label: "尼木县",
            value: "540123"
        }, {
            label: "曲水县",
            value: "540124"
        }, {
            label: "达孜县",
            value: "540126"
        }, {
            label: "墨竹工卡县",
            value: "540127"
        }, {
            label: "格尔木藏青工业园区",
            value: "540171"
        }, {
            label: "拉萨经济技术开发区",
            value: "540172"
        }, {
            label: "西藏文化旅游创意园区",
            value: "540173"
        }, {
            label: "达孜工业园区",
            value: "540174"
        } ], [ {
            label: "桑珠孜区",
            value: "540202"
        }, {
            label: "南木林县",
            value: "540221"
        }, {
            label: "江孜县",
            value: "540222"
        }, {
            label: "定日县",
            value: "540223"
        }, {
            label: "萨迦县",
            value: "540224"
        }, {
            label: "拉孜县",
            value: "540225"
        }, {
            label: "昂仁县",
            value: "540226"
        }, {
            label: "谢通门县",
            value: "540227"
        }, {
            label: "白朗县",
            value: "540228"
        }, {
            label: "仁布县",
            value: "540229"
        }, {
            label: "康马县",
            value: "540230"
        }, {
            label: "定结县",
            value: "540231"
        }, {
            label: "仲巴县",
            value: "540232"
        }, {
            label: "亚东县",
            value: "540233"
        }, {
            label: "吉隆县",
            value: "540234"
        }, {
            label: "聂拉木县",
            value: "540235"
        }, {
            label: "萨嘎县",
            value: "540236"
        }, {
            label: "岗巴县",
            value: "540237"
        } ], [ {
            label: "卡若区",
            value: "540302"
        }, {
            label: "江达县",
            value: "540321"
        }, {
            label: "贡觉县",
            value: "540322"
        }, {
            label: "类乌齐县",
            value: "540323"
        }, {
            label: "丁青县",
            value: "540324"
        }, {
            label: "察雅县",
            value: "540325"
        }, {
            label: "八宿县",
            value: "540326"
        }, {
            label: "左贡县",
            value: "540327"
        }, {
            label: "芒康县",
            value: "540328"
        }, {
            label: "洛隆县",
            value: "540329"
        }, {
            label: "边坝县",
            value: "540330"
        } ], [ {
            label: "巴宜区",
            value: "540402"
        }, {
            label: "工布江达县",
            value: "540421"
        }, {
            label: "米林县",
            value: "540422"
        }, {
            label: "墨脱县",
            value: "540423"
        }, {
            label: "波密县",
            value: "540424"
        }, {
            label: "察隅县",
            value: "540425"
        }, {
            label: "朗县",
            value: "540426"
        } ], [ {
            label: "乃东区",
            value: "540502"
        }, {
            label: "扎囊县",
            value: "540521"
        }, {
            label: "贡嘎县",
            value: "540522"
        }, {
            label: "桑日县",
            value: "540523"
        }, {
            label: "琼结县",
            value: "540524"
        }, {
            label: "曲松县",
            value: "540525"
        }, {
            label: "措美县",
            value: "540526"
        }, {
            label: "洛扎县",
            value: "540527"
        }, {
            label: "加查县",
            value: "540528"
        }, {
            label: "隆子县",
            value: "540529"
        }, {
            label: "错那县",
            value: "540530"
        }, {
            label: "浪卡子县",
            value: "540531"
        } ], [ {
            label: "那曲县",
            value: "542421"
        }, {
            label: "嘉黎县",
            value: "542422"
        }, {
            label: "比如县",
            value: "542423"
        }, {
            label: "聂荣县",
            value: "542424"
        }, {
            label: "安多县",
            value: "542425"
        }, {
            label: "申扎县",
            value: "542426"
        }, {
            label: "索县",
            value: "542427"
        }, {
            label: "班戈县",
            value: "542428"
        }, {
            label: "巴青县",
            value: "542429"
        }, {
            label: "尼玛县",
            value: "542430"
        }, {
            label: "双湖县",
            value: "542431"
        } ], [ {
            label: "普兰县",
            value: "542521"
        }, {
            label: "札达县",
            value: "542522"
        }, {
            label: "噶尔县",
            value: "542523"
        }, {
            label: "日土县",
            value: "542524"
        }, {
            label: "革吉县",
            value: "542525"
        }, {
            label: "改则县",
            value: "542526"
        }, {
            label: "措勤县",
            value: "542527"
        } ] ], [ [ {
            label: "新城区",
            value: "610102"
        }, {
            label: "碑林区",
            value: "610103"
        }, {
            label: "莲湖区",
            value: "610104"
        }, {
            label: "灞桥区",
            value: "610111"
        }, {
            label: "未央区",
            value: "610112"
        }, {
            label: "雁塔区",
            value: "610113"
        }, {
            label: "阎良区",
            value: "610114"
        }, {
            label: "临潼区",
            value: "610115"
        }, {
            label: "长安区",
            value: "610116"
        }, {
            label: "高陵区",
            value: "610117"
        }, {
            label: "鄠邑区",
            value: "610118"
        }, {
            label: "蓝田县",
            value: "610122"
        }, {
            label: "周至县",
            value: "610124"
        } ], [ {
            label: "王益区",
            value: "610202"
        }, {
            label: "印台区",
            value: "610203"
        }, {
            label: "耀州区",
            value: "610204"
        }, {
            label: "宜君县",
            value: "610222"
        } ], [ {
            label: "渭滨区",
            value: "610302"
        }, {
            label: "金台区",
            value: "610303"
        }, {
            label: "陈仓区",
            value: "610304"
        }, {
            label: "凤翔县",
            value: "610322"
        }, {
            label: "岐山县",
            value: "610323"
        }, {
            label: "扶风县",
            value: "610324"
        }, {
            label: "眉县",
            value: "610326"
        }, {
            label: "陇县",
            value: "610327"
        }, {
            label: "千阳县",
            value: "610328"
        }, {
            label: "麟游县",
            value: "610329"
        }, {
            label: "凤县",
            value: "610330"
        }, {
            label: "太白县",
            value: "610331"
        } ], [ {
            label: "秦都区",
            value: "610402"
        }, {
            label: "杨陵区",
            value: "610403"
        }, {
            label: "渭城区",
            value: "610404"
        }, {
            label: "三原县",
            value: "610422"
        }, {
            label: "泾阳县",
            value: "610423"
        }, {
            label: "乾县",
            value: "610424"
        }, {
            label: "礼泉县",
            value: "610425"
        }, {
            label: "永寿县",
            value: "610426"
        }, {
            label: "彬县",
            value: "610427"
        }, {
            label: "长武县",
            value: "610428"
        }, {
            label: "旬邑县",
            value: "610429"
        }, {
            label: "淳化县",
            value: "610430"
        }, {
            label: "武功县",
            value: "610431"
        }, {
            label: "兴平市",
            value: "610481"
        } ], [ {
            label: "临渭区",
            value: "610502"
        }, {
            label: "华州区",
            value: "610503"
        }, {
            label: "潼关县",
            value: "610522"
        }, {
            label: "大荔县",
            value: "610523"
        }, {
            label: "合阳县",
            value: "610524"
        }, {
            label: "澄城县",
            value: "610525"
        }, {
            label: "蒲城县",
            value: "610526"
        }, {
            label: "白水县",
            value: "610527"
        }, {
            label: "富平县",
            value: "610528"
        }, {
            label: "韩城市",
            value: "610581"
        }, {
            label: "华阴市",
            value: "610582"
        } ], [ {
            label: "宝塔区",
            value: "610602"
        }, {
            label: "安塞区",
            value: "610603"
        }, {
            label: "延长县",
            value: "610621"
        }, {
            label: "延川县",
            value: "610622"
        }, {
            label: "子长县",
            value: "610623"
        }, {
            label: "志丹县",
            value: "610625"
        }, {
            label: "吴起县",
            value: "610626"
        }, {
            label: "甘泉县",
            value: "610627"
        }, {
            label: "富县",
            value: "610628"
        }, {
            label: "洛川县",
            value: "610629"
        }, {
            label: "宜川县",
            value: "610630"
        }, {
            label: "黄龙县",
            value: "610631"
        }, {
            label: "黄陵县",
            value: "610632"
        } ], [ {
            label: "汉台区",
            value: "610702"
        }, {
            label: "南郑区",
            value: "610703"
        }, {
            label: "城固县",
            value: "610722"
        }, {
            label: "洋县",
            value: "610723"
        }, {
            label: "西乡县",
            value: "610724"
        }, {
            label: "勉县",
            value: "610725"
        }, {
            label: "宁强县",
            value: "610726"
        }, {
            label: "略阳县",
            value: "610727"
        }, {
            label: "镇巴县",
            value: "610728"
        }, {
            label: "留坝县",
            value: "610729"
        }, {
            label: "佛坪县",
            value: "610730"
        } ], [ {
            label: "榆阳区",
            value: "610802"
        }, {
            label: "横山区",
            value: "610803"
        }, {
            label: "府谷县",
            value: "610822"
        }, {
            label: "靖边县",
            value: "610824"
        }, {
            label: "定边县",
            value: "610825"
        }, {
            label: "绥德县",
            value: "610826"
        }, {
            label: "米脂县",
            value: "610827"
        }, {
            label: "佳县",
            value: "610828"
        }, {
            label: "吴堡县",
            value: "610829"
        }, {
            label: "清涧县",
            value: "610830"
        }, {
            label: "子洲县",
            value: "610831"
        }, {
            label: "神木市",
            value: "610881"
        } ], [ {
            label: "汉滨区",
            value: "610902"
        }, {
            label: "汉阴县",
            value: "610921"
        }, {
            label: "石泉县",
            value: "610922"
        }, {
            label: "宁陕县",
            value: "610923"
        }, {
            label: "紫阳县",
            value: "610924"
        }, {
            label: "岚皋县",
            value: "610925"
        }, {
            label: "平利县",
            value: "610926"
        }, {
            label: "镇坪县",
            value: "610927"
        }, {
            label: "旬阳县",
            value: "610928"
        }, {
            label: "白河县",
            value: "610929"
        } ], [ {
            label: "商州区",
            value: "611002"
        }, {
            label: "洛南县",
            value: "611021"
        }, {
            label: "丹凤县",
            value: "611022"
        }, {
            label: "商南县",
            value: "611023"
        }, {
            label: "山阳县",
            value: "611024"
        }, {
            label: "镇安县",
            value: "611025"
        }, {
            label: "柞水县",
            value: "611026"
        } ] ], [ [ {
            label: "城关区",
            value: "620102"
        }, {
            label: "七里河区",
            value: "620103"
        }, {
            label: "西固区",
            value: "620104"
        }, {
            label: "安宁区",
            value: "620105"
        }, {
            label: "红古区",
            value: "620111"
        }, {
            label: "永登县",
            value: "620121"
        }, {
            label: "皋兰县",
            value: "620122"
        }, {
            label: "榆中县",
            value: "620123"
        }, {
            label: "兰州新区",
            value: "620171"
        } ], [ {
            label: "嘉峪关市",
            value: "620201"
        } ], [ {
            label: "金川区",
            value: "620302"
        }, {
            label: "永昌县",
            value: "620321"
        } ], [ {
            label: "白银区",
            value: "620402"
        }, {
            label: "平川区",
            value: "620403"
        }, {
            label: "靖远县",
            value: "620421"
        }, {
            label: "会宁县",
            value: "620422"
        }, {
            label: "景泰县",
            value: "620423"
        } ], [ {
            label: "秦州区",
            value: "620502"
        }, {
            label: "麦积区",
            value: "620503"
        }, {
            label: "清水县",
            value: "620521"
        }, {
            label: "秦安县",
            value: "620522"
        }, {
            label: "甘谷县",
            value: "620523"
        }, {
            label: "武山县",
            value: "620524"
        }, {
            label: "张家川回族自治县",
            value: "620525"
        } ], [ {
            label: "凉州区",
            value: "620602"
        }, {
            label: "民勤县",
            value: "620621"
        }, {
            label: "古浪县",
            value: "620622"
        }, {
            label: "天祝藏族自治县",
            value: "620623"
        } ], [ {
            label: "甘州区",
            value: "620702"
        }, {
            label: "肃南裕固族自治县",
            value: "620721"
        }, {
            label: "民乐县",
            value: "620722"
        }, {
            label: "临泽县",
            value: "620723"
        }, {
            label: "高台县",
            value: "620724"
        }, {
            label: "山丹县",
            value: "620725"
        } ], [ {
            label: "崆峒区",
            value: "620802"
        }, {
            label: "泾川县",
            value: "620821"
        }, {
            label: "灵台县",
            value: "620822"
        }, {
            label: "崇信县",
            value: "620823"
        }, {
            label: "华亭县",
            value: "620824"
        }, {
            label: "庄浪县",
            value: "620825"
        }, {
            label: "静宁县",
            value: "620826"
        }, {
            label: "平凉工业园区",
            value: "620871"
        } ], [ {
            label: "肃州区",
            value: "620902"
        }, {
            label: "金塔县",
            value: "620921"
        }, {
            label: "瓜州县",
            value: "620922"
        }, {
            label: "肃北蒙古族自治县",
            value: "620923"
        }, {
            label: "阿克塞哈萨克族自治县",
            value: "620924"
        }, {
            label: "玉门市",
            value: "620981"
        }, {
            label: "敦煌市",
            value: "620982"
        } ], [ {
            label: "西峰区",
            value: "621002"
        }, {
            label: "庆城县",
            value: "621021"
        }, {
            label: "环县",
            value: "621022"
        }, {
            label: "华池县",
            value: "621023"
        }, {
            label: "合水县",
            value: "621024"
        }, {
            label: "正宁县",
            value: "621025"
        }, {
            label: "宁县",
            value: "621026"
        }, {
            label: "镇原县",
            value: "621027"
        } ], [ {
            label: "安定区",
            value: "621102"
        }, {
            label: "通渭县",
            value: "621121"
        }, {
            label: "陇西县",
            value: "621122"
        }, {
            label: "渭源县",
            value: "621123"
        }, {
            label: "临洮县",
            value: "621124"
        }, {
            label: "漳县",
            value: "621125"
        }, {
            label: "岷县",
            value: "621126"
        } ], [ {
            label: "武都区",
            value: "621202"
        }, {
            label: "成县",
            value: "621221"
        }, {
            label: "文县",
            value: "621222"
        }, {
            label: "宕昌县",
            value: "621223"
        }, {
            label: "康县",
            value: "621224"
        }, {
            label: "西和县",
            value: "621225"
        }, {
            label: "礼县",
            value: "621226"
        }, {
            label: "徽县",
            value: "621227"
        }, {
            label: "两当县",
            value: "621228"
        } ], [ {
            label: "临夏市",
            value: "622901"
        }, {
            label: "临夏县",
            value: "622921"
        }, {
            label: "康乐县",
            value: "622922"
        }, {
            label: "永靖县",
            value: "622923"
        }, {
            label: "广河县",
            value: "622924"
        }, {
            label: "和政县",
            value: "622925"
        }, {
            label: "东乡族自治县",
            value: "622926"
        }, {
            label: "积石山保安族东乡族撒拉族自治县",
            value: "622927"
        } ], [ {
            label: "合作市",
            value: "623001"
        }, {
            label: "临潭县",
            value: "623021"
        }, {
            label: "卓尼县",
            value: "623022"
        }, {
            label: "舟曲县",
            value: "623023"
        }, {
            label: "迭部县",
            value: "623024"
        }, {
            label: "玛曲县",
            value: "623025"
        }, {
            label: "碌曲县",
            value: "623026"
        }, {
            label: "夏河县",
            value: "623027"
        } ] ], [ [ {
            label: "城东区",
            value: "630102"
        }, {
            label: "城中区",
            value: "630103"
        }, {
            label: "城西区",
            value: "630104"
        }, {
            label: "城北区",
            value: "630105"
        }, {
            label: "大通回族土族自治县",
            value: "630121"
        }, {
            label: "湟中县",
            value: "630122"
        }, {
            label: "湟源县",
            value: "630123"
        } ], [ {
            label: "乐都区",
            value: "630202"
        }, {
            label: "平安区",
            value: "630203"
        }, {
            label: "民和回族土族自治县",
            value: "630222"
        }, {
            label: "互助土族自治县",
            value: "630223"
        }, {
            label: "化隆回族自治县",
            value: "630224"
        }, {
            label: "循化撒拉族自治县",
            value: "630225"
        } ], [ {
            label: "门源回族自治县",
            value: "632221"
        }, {
            label: "祁连县",
            value: "632222"
        }, {
            label: "海晏县",
            value: "632223"
        }, {
            label: "刚察县",
            value: "632224"
        } ], [ {
            label: "同仁县",
            value: "632321"
        }, {
            label: "尖扎县",
            value: "632322"
        }, {
            label: "泽库县",
            value: "632323"
        }, {
            label: "河南蒙古族自治县",
            value: "632324"
        } ], [ {
            label: "共和县",
            value: "632521"
        }, {
            label: "同德县",
            value: "632522"
        }, {
            label: "贵德县",
            value: "632523"
        }, {
            label: "兴海县",
            value: "632524"
        }, {
            label: "贵南县",
            value: "632525"
        } ], [ {
            label: "玛沁县",
            value: "632621"
        }, {
            label: "班玛县",
            value: "632622"
        }, {
            label: "甘德县",
            value: "632623"
        }, {
            label: "达日县",
            value: "632624"
        }, {
            label: "久治县",
            value: "632625"
        }, {
            label: "玛多县",
            value: "632626"
        } ], [ {
            label: "玉树市",
            value: "632701"
        }, {
            label: "杂多县",
            value: "632722"
        }, {
            label: "称多县",
            value: "632723"
        }, {
            label: "治多县",
            value: "632724"
        }, {
            label: "囊谦县",
            value: "632725"
        }, {
            label: "曲麻莱县",
            value: "632726"
        } ], [ {
            label: "格尔木市",
            value: "632801"
        }, {
            label: "德令哈市",
            value: "632802"
        }, {
            label: "乌兰县",
            value: "632821"
        }, {
            label: "都兰县",
            value: "632822"
        }, {
            label: "天峻县",
            value: "632823"
        }, {
            label: "大柴旦行政委员会",
            value: "632857"
        }, {
            label: "冷湖行政委员会",
            value: "632858"
        }, {
            label: "茫崖行政委员会",
            value: "632859"
        } ] ], [ [ {
            label: "兴庆区",
            value: "640104"
        }, {
            label: "西夏区",
            value: "640105"
        }, {
            label: "金凤区",
            value: "640106"
        }, {
            label: "永宁县",
            value: "640121"
        }, {
            label: "贺兰县",
            value: "640122"
        }, {
            label: "灵武市",
            value: "640181"
        } ], [ {
            label: "大武口区",
            value: "640202"
        }, {
            label: "惠农区",
            value: "640205"
        }, {
            label: "平罗县",
            value: "640221"
        } ], [ {
            label: "利通区",
            value: "640302"
        }, {
            label: "红寺堡区",
            value: "640303"
        }, {
            label: "盐池县",
            value: "640323"
        }, {
            label: "同心县",
            value: "640324"
        }, {
            label: "青铜峡市",
            value: "640381"
        } ], [ {
            label: "原州区",
            value: "640402"
        }, {
            label: "西吉县",
            value: "640422"
        }, {
            label: "隆德县",
            value: "640423"
        }, {
            label: "泾源县",
            value: "640424"
        }, {
            label: "彭阳县",
            value: "640425"
        } ], [ {
            label: "沙坡头区",
            value: "640502"
        }, {
            label: "中宁县",
            value: "640521"
        }, {
            label: "海原县",
            value: "640522"
        } ] ], [ [ {
            label: "天山区",
            value: "650102"
        }, {
            label: "沙依巴克区",
            value: "650103"
        }, {
            label: "新市区",
            value: "650104"
        }, {
            label: "水磨沟区",
            value: "650105"
        }, {
            label: "头屯河区",
            value: "650106"
        }, {
            label: "达坂城区",
            value: "650107"
        }, {
            label: "米东区",
            value: "650109"
        }, {
            label: "乌鲁木齐县",
            value: "650121"
        }, {
            label: "乌鲁木齐经济技术开发区",
            value: "650171"
        }, {
            label: "乌鲁木齐高新技术产业开发区",
            value: "650172"
        } ], [ {
            label: "独山子区",
            value: "650202"
        }, {
            label: "克拉玛依区",
            value: "650203"
        }, {
            label: "白碱滩区",
            value: "650204"
        }, {
            label: "乌尔禾区",
            value: "650205"
        } ], [ {
            label: "高昌区",
            value: "650402"
        }, {
            label: "鄯善县",
            value: "650421"
        }, {
            label: "托克逊县",
            value: "650422"
        } ], [ {
            label: "伊州区",
            value: "650502"
        }, {
            label: "巴里坤哈萨克自治县",
            value: "650521"
        }, {
            label: "伊吾县",
            value: "650522"
        } ], [ {
            label: "昌吉市",
            value: "652301"
        }, {
            label: "阜康市",
            value: "652302"
        }, {
            label: "呼图壁县",
            value: "652323"
        }, {
            label: "玛纳斯县",
            value: "652324"
        }, {
            label: "奇台县",
            value: "652325"
        }, {
            label: "吉木萨尔县",
            value: "652327"
        }, {
            label: "木垒哈萨克自治县",
            value: "652328"
        } ], [ {
            label: "博乐市",
            value: "652701"
        }, {
            label: "阿拉山口市",
            value: "652702"
        }, {
            label: "精河县",
            value: "652722"
        }, {
            label: "温泉县",
            value: "652723"
        } ], [ {
            label: "库尔勒市",
            value: "652801"
        }, {
            label: "轮台县",
            value: "652822"
        }, {
            label: "尉犁县",
            value: "652823"
        }, {
            label: "若羌县",
            value: "652824"
        }, {
            label: "且末县",
            value: "652825"
        }, {
            label: "焉耆回族自治县",
            value: "652826"
        }, {
            label: "和静县",
            value: "652827"
        }, {
            label: "和硕县",
            value: "652828"
        }, {
            label: "博湖县",
            value: "652829"
        }, {
            label: "库尔勒经济技术开发区",
            value: "652871"
        } ], [ {
            label: "阿克苏市",
            value: "652901"
        }, {
            label: "温宿县",
            value: "652922"
        }, {
            label: "库车县",
            value: "652923"
        }, {
            label: "沙雅县",
            value: "652924"
        }, {
            label: "新和县",
            value: "652925"
        }, {
            label: "拜城县",
            value: "652926"
        }, {
            label: "乌什县",
            value: "652927"
        }, {
            label: "阿瓦提县",
            value: "652928"
        }, {
            label: "柯坪县",
            value: "652929"
        } ], [ {
            label: "阿图什市",
            value: "653001"
        }, {
            label: "阿克陶县",
            value: "653022"
        }, {
            label: "阿合奇县",
            value: "653023"
        }, {
            label: "乌恰县",
            value: "653024"
        } ], [ {
            label: "喀什市",
            value: "653101"
        }, {
            label: "疏附县",
            value: "653121"
        }, {
            label: "疏勒县",
            value: "653122"
        }, {
            label: "英吉沙县",
            value: "653123"
        }, {
            label: "泽普县",
            value: "653124"
        }, {
            label: "莎车县",
            value: "653125"
        }, {
            label: "叶城县",
            value: "653126"
        }, {
            label: "麦盖提县",
            value: "653127"
        }, {
            label: "岳普湖县",
            value: "653128"
        }, {
            label: "伽师县",
            value: "653129"
        }, {
            label: "巴楚县",
            value: "653130"
        }, {
            label: "塔什库尔干塔吉克自治县",
            value: "653131"
        } ], [ {
            label: "和田市",
            value: "653201"
        }, {
            label: "和田县",
            value: "653221"
        }, {
            label: "墨玉县",
            value: "653222"
        }, {
            label: "皮山县",
            value: "653223"
        }, {
            label: "洛浦县",
            value: "653224"
        }, {
            label: "策勒县",
            value: "653225"
        }, {
            label: "于田县",
            value: "653226"
        }, {
            label: "民丰县",
            value: "653227"
        } ], [ {
            label: "伊宁市",
            value: "654002"
        }, {
            label: "奎屯市",
            value: "654003"
        }, {
            label: "霍尔果斯市",
            value: "654004"
        }, {
            label: "伊宁县",
            value: "654021"
        }, {
            label: "察布查尔锡伯自治县",
            value: "654022"
        }, {
            label: "霍城县",
            value: "654023"
        }, {
            label: "巩留县",
            value: "654024"
        }, {
            label: "新源县",
            value: "654025"
        }, {
            label: "昭苏县",
            value: "654026"
        }, {
            label: "特克斯县",
            value: "654027"
        }, {
            label: "尼勒克县",
            value: "654028"
        } ], [ {
            label: "塔城市",
            value: "654201"
        }, {
            label: "乌苏市",
            value: "654202"
        }, {
            label: "额敏县",
            value: "654221"
        }, {
            label: "沙湾县",
            value: "654223"
        }, {
            label: "托里县",
            value: "654224"
        }, {
            label: "裕民县",
            value: "654225"
        }, {
            label: "和布克赛尔蒙古自治县",
            value: "654226"
        } ], [ {
            label: "阿勒泰市",
            value: "654301"
        }, {
            label: "布尔津县",
            value: "654321"
        }, {
            label: "富蕴县",
            value: "654322"
        }, {
            label: "福海县",
            value: "654323"
        }, {
            label: "哈巴河县",
            value: "654324"
        }, {
            label: "青河县",
            value: "654325"
        }, {
            label: "吉木乃县",
            value: "654326"
        } ], [ {
            label: "石河子市",
            value: "659001"
        }, {
            label: "阿拉尔市",
            value: "659002"
        }, {
            label: "图木舒克市",
            value: "659003"
        }, {
            label: "五家渠市",
            value: "659004"
        }, {
            label: "铁门关市",
            value: "659006"
        } ] ], [ [ {
            label: "台北",
            value: "660101"
        } ], [ {
            label: "高雄",
            value: "660201"
        } ], [ {
            label: "基隆",
            value: "660301"
        } ], [ {
            label: "台中",
            value: "660401"
        } ], [ {
            label: "台南",
            value: "660501"
        } ], [ {
            label: "新竹",
            value: "660601"
        } ], [ {
            label: "嘉义",
            value: "660701"
        } ], [ {
            label: "宜兰",
            value: "660801"
        } ], [ {
            label: "桃园",
            value: "660901"
        } ], [ {
            label: "苗栗",
            value: "661001"
        } ], [ {
            label: "彰化",
            value: "661101"
        } ], [ {
            label: "南投",
            value: "661201"
        } ], [ {
            label: "云林",
            value: "661301"
        } ], [ {
            label: "屏东",
            value: "661401"
        } ], [ {
            label: "台东",
            value: "661501"
        } ], [ {
            label: "花莲",
            value: "661601"
        } ], [ {
            label: "澎湖",
            value: "661701"
        } ] ], [ [ {
            label: "香港岛",
            value: "670101"
        } ], [ {
            label: "九龙",
            value: "670201"
        } ], [ {
            label: "新界",
            value: "670301"
        } ] ], [ [ {
            label: "澳门半岛",
            value: "680101"
        } ], [ {
            label: "氹仔岛",
            value: "680201"
        } ], [ {
            label: "路环岛",
            value: "680301"
        } ], [ {
            label: "路氹城",
            value: "680401"
        } ] ] ];
        a.default = l;
    },
    "0b22": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = "1.8.4", n = {
            v: l,
            version: l,
            type: [ "primary", "success", "info", "error", "warning" ]
        };
        a.default = n;
    },
    "0e23": function(a, t, l) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isArray = r, t.isObject = function(a) {
            return null !== a && "object" === e(a);
        }, t.isDate = function(e) {
            return "[object Date]" === n.call(e);
        }, t.isURLSearchParams = function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
        }, t.forEach = u, t.isBoolean = function(e) {
            return "boolean" == typeof e;
        }, t.isPlainObject = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
        }, t.deepMerge = function a() {
            var t = {};
            function l(l, n) {
                "object" === e(t[n]) && "object" === e(l) ? t[n] = a(t[n], l) : t[n] = "object" === e(l) ? a({}, l) : l;
            }
            for (var n = 0, r = arguments.length; n < r; n++) u(arguments[n], l);
            return t;
        }, t.isUndefined = function(e) {
            return void 0 === e;
        };
        var n = Object.prototype.toString;
        function r(e) {
            return "[object Array]" === n.call(e);
        }
        function u(a, t) {
            if (null != a) if ("object" !== e(a) && (a = [ a ]), r(a)) for (var l = 0, n = a.length; l < n; l++) t.call(null, a[l], l, a); else for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && t.call(null, a[u], u, a);
        }
    },
    1656: function(e, a, t) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var l = i(t("4e48")), n = i(t("856e")), r = i(t("cc2b")), u = t("0e23");
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    a && (l = l.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })), t.push.apply(t, l);
                }
                return t;
            }
            function s(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? o(Object(t), !0).forEach(function(a) {
                        c(e, a, t[a]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                    });
                }
                return e;
            }
            function c(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e;
            }
            var v = function(e, a) {
                var t = {};
                return e.forEach(function(e) {
                    (0, u.isUndefined)(a[e]) || (t[e] = a[e]);
                }), t;
            };
            a.default = function(a) {
                return new Promise(function(t, u) {
                    var i, o = (0, l.default)((0, n.default)(a.baseURL, a.url), a.params), c = {
                        url: o,
                        withCredentials: !0,
                        header: a.header,
                        complete: function(e) {
                            a.fullPath = o, e.config = a;
                            try {
                                "string" == typeof e.data && (e.data = JSON.parse(e.data));
                            } catch (e) {}
                            (0, r.default)(t, u, e);
                        }
                    };
                    if ("UPLOAD" === a.method) {
                        delete c.header["content-type"], delete c.header["Content-Type"];
                        var f = {
                            filePath: a.filePath,
                            name: a.name
                        };
                        i = e.uploadFile(s(s(s({}, c), f), v([ "formData" ], a)));
                    } else if ("DOWNLOAD" === a.method) i = e.downloadFile(c); else {
                        i = e.request(s(s({}, c), v([ "data", "method", "timeout", "dataType", "responseType" ], a)));
                    }
                    a.getTask && a.getTask(i, a);
                });
            };
        }).call(this, t("543d").default);
    },
    1960: function(a, t, l) {
        (function(a) {
            function l() {
                return (l = Object.assign || function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                    }
                    return e;
                }).apply(this, arguments);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = /%[sdj%]/g;
            function r(e) {
                if (!e || !e.length) return null;
                var a = {};
                return e.forEach(function(e) {
                    var t = e.field;
                    a[t] = a[t] || [], a[t].push(e);
                }), a;
            }
            function u() {
                for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                var l = 1, r = a[0], u = a.length;
                if ("function" == typeof r) return r.apply(null, a.slice(1));
                if ("string" == typeof r) {
                    for (var i = String(r).replace(n, function(e) {
                        if ("%%" === e) return "%";
                        if (l >= u) return e;
                        switch (e) {
                          case "%s":
                            return String(a[l++]);

                          case "%d":
                            return Number(a[l++]);

                          case "%j":
                            try {
                                return JSON.stringify(a[l++]);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                return "[Circular]";
                            }
                            break;

                          default:
                            return e;
                        }
                    }), o = a[l]; l < u; o = a[++l]) i += " " + o;
                    return i;
                }
                return r;
            }
            function i(e, a) {
                return null == e || !("array" !== a || !Array.isArray(e) || e.length) || !(!function(e) {
                    return "string" === e || "url" === e || "hex" === e || "email" === e || "pattern" === e;
                }(a) || "string" != typeof e || e);
            }
            function o(e, a, t) {
                var l = 0, n = e.length;
                !function r(u) {
                    if (u && u.length) t(u); else {
                        var i = l;
                        l += 1, i < n ? a(e[i], r) : t([]);
                    }
                }([]);
            }
            function s(e, a, t, l) {
                if (a.first) {
                    var n = new Promise(function(a, n) {
                        o(function(e) {
                            var a = [];
                            return Object.keys(e).forEach(function(t) {
                                a.push.apply(a, e[t]);
                            }), a;
                        }(e), t, function(e) {
                            return l(e), e.length ? n({
                                errors: e,
                                fields: r(e)
                            }) : a();
                        });
                    });
                    return n.catch(function(e) {
                        return e;
                    }), n;
                }
                var u = a.firstFields || [];
                !0 === u && (u = Object.keys(e));
                var i = Object.keys(e), s = i.length, c = 0, v = [], f = new Promise(function(a, n) {
                    var f = function(e) {
                        if (v.push.apply(v, e), ++c === s) return l(v), v.length ? n({
                            errors: v,
                            fields: r(v)
                        }) : a();
                    };
                    i.length || (l(v), a()), i.forEach(function(a) {
                        var l = e[a];
                        -1 !== u.indexOf(a) ? o(l, t, f) : function(e, a, t) {
                            var l = [], n = 0, r = e.length;
                            function u(e) {
                                l.push.apply(l, e), ++n === r && t(l);
                            }
                            e.forEach(function(e) {
                                a(e, u);
                            });
                        }(l, t, f);
                    });
                });
                return f.catch(function(e) {
                    return e;
                }), f;
            }
            function c(e) {
                return function(a) {
                    return a && a.message ? (a.field = a.field || e.fullField, a) : {
                        message: "function" == typeof a ? a() : a,
                        field: a.field || e.fullField
                    };
                };
            }
            function v(a, t) {
                if (t) for (var n in t) if (t.hasOwnProperty(n)) {
                    var r = t[n];
                    "object" === e(r) && "object" === e(a[n]) ? a[n] = l({}, a[n], {}, r) : a[n] = r;
                }
                return a;
            }
            function f(e, a, t, l, n, r) {
                !e.required || t.hasOwnProperty(e.field) && !i(a, r || e.type) || l.push(u(n.messages.required, e.fullField));
            }
            void 0 !== a && Object({
                VUE_APP_NAME: "lpp-store-mp",
                VUE_APP_PLATFORM: "mp-weixin",
                NODE_ENV: "production",
                BASE_URL: "/"
            });
            var b = {
                email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
                hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
            }, d = {
                integer: function(e) {
                    return d.number(e) && parseInt(e, 10) === e;
                },
                float: function(e) {
                    return d.number(e) && !d.integer(e);
                },
                array: function(e) {
                    return Array.isArray(e);
                },
                regexp: function(e) {
                    if (e instanceof RegExp) return !0;
                    try {
                        return !!new RegExp(e);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return !1;
                    }
                },
                date: function(e) {
                    return "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear;
                },
                number: function(e) {
                    return !isNaN(e) && "number" == typeof +e;
                },
                object: function(a) {
                    return "object" === e(a) && !d.array(a);
                },
                method: function(e) {
                    return "function" == typeof e;
                },
                email: function(e) {
                    return "string" == typeof e && !!e.match(b.email) && e.length < 255;
                },
                url: function(e) {
                    return "string" == typeof e && !!e.match(b.url);
                },
                hex: function(e) {
                    return "string" == typeof e && !!e.match(b.hex);
                }
            };
            var h = "enum";
            var p = {
                required: f,
                whitespace: function(e, a, t, l, n) {
                    (/^\s+$/.test(a) || "" === a) && l.push(u(n.messages.whitespace, e.fullField));
                },
                type: function(a, t, l, n, r) {
                    if (a.required && void 0 === t) f(a, t, l, n, r); else {
                        var i = a.type;
                        [ "integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex" ].indexOf(i) > -1 ? d[i](t) || n.push(u(r.messages.types[i], a.fullField, a.type)) : i && e(t) !== a.type && n.push(u(r.messages.types[i], a.fullField, a.type));
                    }
                },
                range: function(e, a, t, l, n) {
                    var r = "number" == typeof e.len, i = "number" == typeof e.min, o = "number" == typeof e.max, s = a, c = null, v = "number" == typeof a, f = "string" == typeof a, b = Array.isArray(a);
                    if (v ? c = "number" : f ? c = "string" : b && (c = "array"), !c) return !1;
                    b && (s = a.length), f && (s = a.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), 
                    r ? s !== e.len && l.push(u(n.messages[c].len, e.fullField, e.len)) : i && !o && s < e.min ? l.push(u(n.messages[c].min, e.fullField, e.min)) : o && !i && s > e.max ? l.push(u(n.messages[c].max, e.fullField, e.max)) : i && o && (s < e.min || s > e.max) && l.push(u(n.messages[c].range, e.fullField, e.min, e.max));
                },
                enum: function(e, a, t, l, n) {
                    e[h] = Array.isArray(e[h]) ? e[h] : [], -1 === e[h].indexOf(a) && l.push(u(n.messages[h], e.fullField, e[h].join(", ")));
                },
                pattern: function(e, a, t, l, n) {
                    if (e.pattern) if (e.pattern instanceof RegExp) e.pattern.lastIndex = 0, e.pattern.test(a) || l.push(u(n.messages.pattern.mismatch, e.fullField, a, e.pattern)); else if ("string" == typeof e.pattern) {
                        new RegExp(e.pattern).test(a) || l.push(u(n.messages.pattern.mismatch, e.fullField, a, e.pattern));
                    }
                }
            };
            function g(e, a, t, l, n) {
                var r = e.type, u = [];
                if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                    if (i(a, r) && !e.required) return t();
                    p.required(e, a, l, u, n, r), i(a, r) || p.type(e, a, l, u, n);
                }
                t(u);
            }
            var y = {
                string: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a, "string") && !e.required) return t();
                        p.required(e, a, l, r, n, "string"), i(a, "string") || (p.type(e, a, l, r, n), p.range(e, a, l, r, n), 
                        p.pattern(e, a, l, r, n), !0 === e.whitespace && p.whitespace(e, a, l, r, n));
                    }
                    t(r);
                },
                method: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a) && !e.required) return t();
                        p.required(e, a, l, r, n), void 0 !== a && p.type(e, a, l, r, n);
                    }
                    t(r);
                },
                number: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if ("" === a && (a = void 0), i(a) && !e.required) return t();
                        p.required(e, a, l, r, n), void 0 !== a && (p.type(e, a, l, r, n), p.range(e, a, l, r, n));
                    }
                    t(r);
                },
                boolean: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a) && !e.required) return t();
                        p.required(e, a, l, r, n), void 0 !== a && p.type(e, a, l, r, n);
                    }
                    t(r);
                },
                regexp: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a) && !e.required) return t();
                        p.required(e, a, l, r, n), i(a) || p.type(e, a, l, r, n);
                    }
                    t(r);
                },
                integer: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a) && !e.required) return t();
                        p.required(e, a, l, r, n), void 0 !== a && (p.type(e, a, l, r, n), p.range(e, a, l, r, n));
                    }
                    t(r);
                },
                float: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a) && !e.required) return t();
                        p.required(e, a, l, r, n), void 0 !== a && (p.type(e, a, l, r, n), p.range(e, a, l, r, n));
                    }
                    t(r);
                },
                array: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a, "array") && !e.required) return t();
                        p.required(e, a, l, r, n, "array"), i(a, "array") || (p.type(e, a, l, r, n), p.range(e, a, l, r, n));
                    }
                    t(r);
                },
                object: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a) && !e.required) return t();
                        p.required(e, a, l, r, n), void 0 !== a && p.type(e, a, l, r, n);
                    }
                    t(r);
                },
                enum: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a) && !e.required) return t();
                        p.required(e, a, l, r, n), void 0 !== a && p.enum(e, a, l, r, n);
                    }
                    t(r);
                },
                pattern: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a, "string") && !e.required) return t();
                        p.required(e, a, l, r, n), i(a, "string") || p.pattern(e, a, l, r, n);
                    }
                    t(r);
                },
                date: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a) && !e.required) return t();
                        var u;
                        p.required(e, a, l, r, n), i(a) || (u = "number" == typeof a ? new Date(a) : a, 
                        p.type(e, u, l, r, n), u && p.range(e, u.getTime(), l, r, n));
                    }
                    t(r);
                },
                url: g,
                hex: g,
                email: g,
                required: function(a, t, l, n, r) {
                    var u = [], i = Array.isArray(t) ? "array" : e(t);
                    p.required(a, t, n, u, r, i), l(u);
                },
                any: function(e, a, t, l, n) {
                    var r = [];
                    if (e.required || !e.required && l.hasOwnProperty(e.field)) {
                        if (i(a) && !e.required) return t();
                        p.required(e, a, l, r, n);
                    }
                    t(r);
                }
            };
            function m() {
                return {
                    default: "Validation error on field %s",
                    required: "%s is required",
                    enum: "%s must be one of %s",
                    whitespace: "%s cannot be empty",
                    date: {
                        format: "%s date %s is invalid for format %s",
                        parse: "%s date could not be parsed, %s is invalid ",
                        invalid: "%s date %s is invalid"
                    },
                    types: {
                        string: "%s is not a %s",
                        method: "%s is not a %s (function)",
                        array: "%s is not an %s",
                        object: "%s is not an %s",
                        number: "%s is not a %s",
                        date: "%s is not a %s",
                        boolean: "%s is not a %s",
                        integer: "%s is not an %s",
                        float: "%s is not a %s",
                        regexp: "%s is not a valid %s",
                        email: "%s is not a valid %s",
                        url: "%s is not a valid %s",
                        hex: "%s is not a valid %s"
                    },
                    string: {
                        len: "%s must be exactly %s characters",
                        min: "%s must be at least %s characters",
                        max: "%s cannot be longer than %s characters",
                        range: "%s must be between %s and %s characters"
                    },
                    number: {
                        len: "%s must equal %s",
                        min: "%s cannot be less than %s",
                        max: "%s cannot be greater than %s",
                        range: "%s must be between %s and %s"
                    },
                    array: {
                        len: "%s must be exactly %s in length",
                        min: "%s cannot be less than %s in length",
                        max: "%s cannot be greater than %s in length",
                        range: "%s must be between %s and %s in length"
                    },
                    pattern: {
                        mismatch: "%s value %s does not match pattern %s"
                    },
                    clone: function() {
                        var e = JSON.parse(JSON.stringify(this));
                        return e.clone = this.clone, e;
                    }
                };
            }
            var _ = m();
            function w(e) {
                this.rules = null, this._messages = _, this.define(e);
            }
            w.prototype = {
                messages: function(e) {
                    return e && (this._messages = v(m(), e)), this._messages;
                },
                define: function(a) {
                    if (!a) throw new Error("Cannot configure a schema with no rules");
                    if ("object" !== e(a) || Array.isArray(a)) throw new Error("Rules must be an object");
                    var t, l;
                    for (t in this.rules = {}, a) a.hasOwnProperty(t) && (l = a[t], this.rules[t] = Array.isArray(l) ? l : [ l ]);
                },
                validate: function(a, t, n) {
                    var i = this;
                    void 0 === t && (t = {}), void 0 === n && (n = function() {});
                    var o, f, b = a, d = t, h = n;
                    if ("function" == typeof d && (h = d, d = {}), !this.rules || 0 === Object.keys(this.rules).length) return h && h(), 
                    Promise.resolve();
                    if (d.messages) {
                        var p = this.messages();
                        p === _ && (p = m()), v(p, d.messages), d.messages = p;
                    } else d.messages = this.messages();
                    var g = {};
                    (d.keys || Object.keys(this.rules)).forEach(function(e) {
                        o = i.rules[e], f = b[e], o.forEach(function(t) {
                            var n = t;
                            "function" == typeof n.transform && (b === a && (b = l({}, b)), f = b[e] = n.transform(f)), 
                            (n = "function" == typeof n ? {
                                validator: n
                            } : l({}, n)).validator = i.getValidationMethod(n), n.field = e, n.fullField = n.fullField || e, 
                            n.type = i.getType(n), n.validator && (g[e] = g[e] || [], g[e].push({
                                rule: n,
                                value: f,
                                source: b,
                                field: e
                            }));
                        });
                    });
                    var y = {};
                    return s(g, d, function(a, t) {
                        var n, r = a.rule, i = !("object" !== r.type && "array" !== r.type || "object" !== e(r.fields) && "object" !== e(r.defaultField));
                        function o(e, a) {
                            return l({}, a, {
                                fullField: r.fullField + "." + e
                            });
                        }
                        function s(e) {
                            void 0 === e && (e = []);
                            var n = e;
                            if (Array.isArray(n) || (n = [ n ]), !d.suppressWarning && n.length && w.warning("async-validator:", n), 
                            n.length && r.message && (n = [].concat(r.message)), n = n.map(c(r)), d.first && n.length) return y[r.field] = 1, 
                            t(n);
                            if (i) {
                                if (r.required && !a.value) return n = r.message ? [].concat(r.message).map(c(r)) : d.error ? [ d.error(r, u(d.messages.required, r.field)) ] : [], 
                                t(n);
                                var s = {};
                                if (r.defaultField) for (var v in a.value) a.value.hasOwnProperty(v) && (s[v] = r.defaultField);
                                for (var f in s = l({}, s, {}, a.rule.fields)) if (s.hasOwnProperty(f)) {
                                    var b = Array.isArray(s[f]) ? s[f] : [ s[f] ];
                                    s[f] = b.map(o.bind(null, f));
                                }
                                var h = new w(s);
                                h.messages(d.messages), a.rule.options && (a.rule.options.messages = d.messages, 
                                a.rule.options.error = d.error), h.validate(a.value, a.rule.options || d, function(e) {
                                    var a = [];
                                    n && n.length && a.push.apply(a, n), e && e.length && a.push.apply(a, e), t(a.length ? a : null);
                                });
                            } else t(n);
                        }
                        i = i && (r.required || !r.required && a.value), r.field = a.field, r.asyncValidator ? n = r.asyncValidator(r, a.value, s, a.source, d) : r.validator && (!0 === (n = r.validator(r, a.value, s, a.source, d)) ? s() : !1 === n ? s(r.message || r.field + " fails") : n instanceof Array ? s(n) : n instanceof Error && s(n.message)), 
                        n && n.then && n.then(function() {
                            return s();
                        }, function(e) {
                            return s(e);
                        });
                    }, function(e) {
                        !function(e) {
                            var a, t = [], l = {};
                            function n(e) {
                                var a;
                                Array.isArray(e) ? t = (a = t).concat.apply(a, e) : t.push(e);
                            }
                            for (a = 0; a < e.length; a++) n(e[a]);
                            t.length ? l = r(t) : (t = null, l = null), h(t, l);
                        }(e);
                    });
                },
                getType: function(e) {
                    if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !y.hasOwnProperty(e.type)) throw new Error(u("Unknown rule type %s", e.type));
                    return e.type || "string";
                },
                getValidationMethod: function(e) {
                    if ("function" == typeof e.validator) return e.validator;
                    var a = Object.keys(e), t = a.indexOf("message");
                    return -1 !== t && a.splice(t, 1), 1 === a.length && "required" === a[0] ? y.required : y[this.getType(e)] || !1;
                }
            }, w.register = function(e, a) {
                if ("function" != typeof a) throw new Error("Cannot register a validator by type, validator is not a function");
                y[e] = a;
            }, w.warning = function() {}, w.messages = _;
            var k = w;
            t.default = k;
        }).call(this, l("4362"));
    },
    "19ea": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "brackets", l = a ? "?" : "", n = [];
            -1 == [ "indices", "brackets", "repeat", "comma" ].indexOf(t) && (t = "brackets");
            var r = function(a) {
                var l = e[a];
                if ([ "", void 0, null ].indexOf(l) >= 0) return "continue";
                if (l.constructor === Array) switch (t) {
                  case "indices":
                    for (var r = 0; r < l.length; r++) n.push(a + "[" + r + "]=" + l[r]);
                    break;

                  case "brackets":
                    l.forEach(function(e) {
                        n.push(a + "[]=" + e);
                    });
                    break;

                  case "repeat":
                    l.forEach(function(e) {
                        n.push(a + "=" + e);
                    });
                    break;

                  case "comma":
                    var u = "";
                    l.forEach(function(e) {
                        u += (u ? "," : "") + e;
                    }), n.push(a + "=" + u);
                    break;

                  default:
                    l.forEach(function(e) {
                        n.push(a + "[]=" + e);
                    });
                } else n.push(a + "=" + l);
            };
            for (var u in e) r(u);
            return n.length ? l + n.join("&") : "";
        };
        a.default = l;
    },
    "19ec": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = [ [ {
            label: "市辖区",
            value: "1101"
        } ], [ {
            label: "市辖区",
            value: "1201"
        } ], [ {
            label: "石家庄市",
            value: "1301"
        }, {
            label: "唐山市",
            value: "1302"
        }, {
            label: "秦皇岛市",
            value: "1303"
        }, {
            label: "邯郸市",
            value: "1304"
        }, {
            label: "邢台市",
            value: "1305"
        }, {
            label: "保定市",
            value: "1306"
        }, {
            label: "张家口市",
            value: "1307"
        }, {
            label: "承德市",
            value: "1308"
        }, {
            label: "沧州市",
            value: "1309"
        }, {
            label: "廊坊市",
            value: "1310"
        }, {
            label: "衡水市",
            value: "1311"
        } ], [ {
            label: "太原市",
            value: "1401"
        }, {
            label: "大同市",
            value: "1402"
        }, {
            label: "阳泉市",
            value: "1403"
        }, {
            label: "长治市",
            value: "1404"
        }, {
            label: "晋城市",
            value: "1405"
        }, {
            label: "朔州市",
            value: "1406"
        }, {
            label: "晋中市",
            value: "1407"
        }, {
            label: "运城市",
            value: "1408"
        }, {
            label: "忻州市",
            value: "1409"
        }, {
            label: "临汾市",
            value: "1410"
        }, {
            label: "吕梁市",
            value: "1411"
        } ], [ {
            label: "呼和浩特市",
            value: "1501"
        }, {
            label: "包头市",
            value: "1502"
        }, {
            label: "乌海市",
            value: "1503"
        }, {
            label: "赤峰市",
            value: "1504"
        }, {
            label: "通辽市",
            value: "1505"
        }, {
            label: "鄂尔多斯市",
            value: "1506"
        }, {
            label: "呼伦贝尔市",
            value: "1507"
        }, {
            label: "巴彦淖尔市",
            value: "1508"
        }, {
            label: "乌兰察布市",
            value: "1509"
        }, {
            label: "兴安盟",
            value: "1522"
        }, {
            label: "锡林郭勒盟",
            value: "1525"
        }, {
            label: "阿拉善盟",
            value: "1529"
        } ], [ {
            label: "沈阳市",
            value: "2101"
        }, {
            label: "大连市",
            value: "2102"
        }, {
            label: "鞍山市",
            value: "2103"
        }, {
            label: "抚顺市",
            value: "2104"
        }, {
            label: "本溪市",
            value: "2105"
        }, {
            label: "丹东市",
            value: "2106"
        }, {
            label: "锦州市",
            value: "2107"
        }, {
            label: "营口市",
            value: "2108"
        }, {
            label: "阜新市",
            value: "2109"
        }, {
            label: "辽阳市",
            value: "2110"
        }, {
            label: "盘锦市",
            value: "2111"
        }, {
            label: "铁岭市",
            value: "2112"
        }, {
            label: "朝阳市",
            value: "2113"
        }, {
            label: "葫芦岛市",
            value: "2114"
        } ], [ {
            label: "长春市",
            value: "2201"
        }, {
            label: "吉林市",
            value: "2202"
        }, {
            label: "四平市",
            value: "2203"
        }, {
            label: "辽源市",
            value: "2204"
        }, {
            label: "通化市",
            value: "2205"
        }, {
            label: "白山市",
            value: "2206"
        }, {
            label: "松原市",
            value: "2207"
        }, {
            label: "白城市",
            value: "2208"
        }, {
            label: "延边朝鲜族自治州",
            value: "2224"
        } ], [ {
            label: "哈尔滨市",
            value: "2301"
        }, {
            label: "齐齐哈尔市",
            value: "2302"
        }, {
            label: "鸡西市",
            value: "2303"
        }, {
            label: "鹤岗市",
            value: "2304"
        }, {
            label: "双鸭山市",
            value: "2305"
        }, {
            label: "大庆市",
            value: "2306"
        }, {
            label: "伊春市",
            value: "2307"
        }, {
            label: "佳木斯市",
            value: "2308"
        }, {
            label: "七台河市",
            value: "2309"
        }, {
            label: "牡丹江市",
            value: "2310"
        }, {
            label: "黑河市",
            value: "2311"
        }, {
            label: "绥化市",
            value: "2312"
        }, {
            label: "大兴安岭地区",
            value: "2327"
        } ], [ {
            label: "市辖区",
            value: "3101"
        } ], [ {
            label: "南京市",
            value: "3201"
        }, {
            label: "无锡市",
            value: "3202"
        }, {
            label: "徐州市",
            value: "3203"
        }, {
            label: "常州市",
            value: "3204"
        }, {
            label: "苏州市",
            value: "3205"
        }, {
            label: "南通市",
            value: "3206"
        }, {
            label: "连云港市",
            value: "3207"
        }, {
            label: "淮安市",
            value: "3208"
        }, {
            label: "盐城市",
            value: "3209"
        }, {
            label: "扬州市",
            value: "3210"
        }, {
            label: "镇江市",
            value: "3211"
        }, {
            label: "泰州市",
            value: "3212"
        }, {
            label: "宿迁市",
            value: "3213"
        } ], [ {
            label: "杭州市",
            value: "3301"
        }, {
            label: "宁波市",
            value: "3302"
        }, {
            label: "温州市",
            value: "3303"
        }, {
            label: "嘉兴市",
            value: "3304"
        }, {
            label: "湖州市",
            value: "3305"
        }, {
            label: "绍兴市",
            value: "3306"
        }, {
            label: "金华市",
            value: "3307"
        }, {
            label: "衢州市",
            value: "3308"
        }, {
            label: "舟山市",
            value: "3309"
        }, {
            label: "台州市",
            value: "3310"
        }, {
            label: "丽水市",
            value: "3311"
        } ], [ {
            label: "合肥市",
            value: "3401"
        }, {
            label: "芜湖市",
            value: "3402"
        }, {
            label: "蚌埠市",
            value: "3403"
        }, {
            label: "淮南市",
            value: "3404"
        }, {
            label: "马鞍山市",
            value: "3405"
        }, {
            label: "淮北市",
            value: "3406"
        }, {
            label: "铜陵市",
            value: "3407"
        }, {
            label: "安庆市",
            value: "3408"
        }, {
            label: "黄山市",
            value: "3410"
        }, {
            label: "滁州市",
            value: "3411"
        }, {
            label: "阜阳市",
            value: "3412"
        }, {
            label: "宿州市",
            value: "3413"
        }, {
            label: "六安市",
            value: "3415"
        }, {
            label: "亳州市",
            value: "3416"
        }, {
            label: "池州市",
            value: "3417"
        }, {
            label: "宣城市",
            value: "3418"
        } ], [ {
            label: "福州市",
            value: "3501"
        }, {
            label: "厦门市",
            value: "3502"
        }, {
            label: "莆田市",
            value: "3503"
        }, {
            label: "三明市",
            value: "3504"
        }, {
            label: "泉州市",
            value: "3505"
        }, {
            label: "漳州市",
            value: "3506"
        }, {
            label: "南平市",
            value: "3507"
        }, {
            label: "龙岩市",
            value: "3508"
        }, {
            label: "宁德市",
            value: "3509"
        } ], [ {
            label: "南昌市",
            value: "3601"
        }, {
            label: "景德镇市",
            value: "3602"
        }, {
            label: "萍乡市",
            value: "3603"
        }, {
            label: "九江市",
            value: "3604"
        }, {
            label: "新余市",
            value: "3605"
        }, {
            label: "鹰潭市",
            value: "3606"
        }, {
            label: "赣州市",
            value: "3607"
        }, {
            label: "吉安市",
            value: "3608"
        }, {
            label: "宜春市",
            value: "3609"
        }, {
            label: "抚州市",
            value: "3610"
        }, {
            label: "上饶市",
            value: "3611"
        } ], [ {
            label: "济南市",
            value: "3701"
        }, {
            label: "青岛市",
            value: "3702"
        }, {
            label: "淄博市",
            value: "3703"
        }, {
            label: "枣庄市",
            value: "3704"
        }, {
            label: "东营市",
            value: "3705"
        }, {
            label: "烟台市",
            value: "3706"
        }, {
            label: "潍坊市",
            value: "3707"
        }, {
            label: "济宁市",
            value: "3708"
        }, {
            label: "泰安市",
            value: "3709"
        }, {
            label: "威海市",
            value: "3710"
        }, {
            label: "日照市",
            value: "3711"
        }, {
            label: "莱芜市",
            value: "3712"
        }, {
            label: "临沂市",
            value: "3713"
        }, {
            label: "德州市",
            value: "3714"
        }, {
            label: "聊城市",
            value: "3715"
        }, {
            label: "滨州市",
            value: "3716"
        }, {
            label: "菏泽市",
            value: "3717"
        } ], [ {
            label: "郑州市",
            value: "4101"
        }, {
            label: "开封市",
            value: "4102"
        }, {
            label: "洛阳市",
            value: "4103"
        }, {
            label: "平顶山市",
            value: "4104"
        }, {
            label: "安阳市",
            value: "4105"
        }, {
            label: "鹤壁市",
            value: "4106"
        }, {
            label: "新乡市",
            value: "4107"
        }, {
            label: "焦作市",
            value: "4108"
        }, {
            label: "濮阳市",
            value: "4109"
        }, {
            label: "许昌市",
            value: "4110"
        }, {
            label: "漯河市",
            value: "4111"
        }, {
            label: "三门峡市",
            value: "4112"
        }, {
            label: "南阳市",
            value: "4113"
        }, {
            label: "商丘市",
            value: "4114"
        }, {
            label: "信阳市",
            value: "4115"
        }, {
            label: "周口市",
            value: "4116"
        }, {
            label: "驻马店市",
            value: "4117"
        }, {
            label: "省直辖县级行政区划",
            value: "4190"
        } ], [ {
            label: "武汉市",
            value: "4201"
        }, {
            label: "黄石市",
            value: "4202"
        }, {
            label: "十堰市",
            value: "4203"
        }, {
            label: "宜昌市",
            value: "4205"
        }, {
            label: "襄阳市",
            value: "4206"
        }, {
            label: "鄂州市",
            value: "4207"
        }, {
            label: "荆门市",
            value: "4208"
        }, {
            label: "孝感市",
            value: "4209"
        }, {
            label: "荆州市",
            value: "4210"
        }, {
            label: "黄冈市",
            value: "4211"
        }, {
            label: "咸宁市",
            value: "4212"
        }, {
            label: "随州市",
            value: "4213"
        }, {
            label: "恩施土家族苗族自治州",
            value: "4228"
        }, {
            label: "省直辖县级行政区划",
            value: "4290"
        } ], [ {
            label: "长沙市",
            value: "4301"
        }, {
            label: "株洲市",
            value: "4302"
        }, {
            label: "湘潭市",
            value: "4303"
        }, {
            label: "衡阳市",
            value: "4304"
        }, {
            label: "邵阳市",
            value: "4305"
        }, {
            label: "岳阳市",
            value: "4306"
        }, {
            label: "常德市",
            value: "4307"
        }, {
            label: "张家界市",
            value: "4308"
        }, {
            label: "益阳市",
            value: "4309"
        }, {
            label: "郴州市",
            value: "4310"
        }, {
            label: "永州市",
            value: "4311"
        }, {
            label: "怀化市",
            value: "4312"
        }, {
            label: "娄底市",
            value: "4313"
        }, {
            label: "湘西土家族苗族自治州",
            value: "4331"
        } ], [ {
            label: "广州市",
            value: "4401"
        }, {
            label: "韶关市",
            value: "4402"
        }, {
            label: "深圳市",
            value: "4403"
        }, {
            label: "珠海市",
            value: "4404"
        }, {
            label: "汕头市",
            value: "4405"
        }, {
            label: "佛山市",
            value: "4406"
        }, {
            label: "江门市",
            value: "4407"
        }, {
            label: "湛江市",
            value: "4408"
        }, {
            label: "茂名市",
            value: "4409"
        }, {
            label: "肇庆市",
            value: "4412"
        }, {
            label: "惠州市",
            value: "4413"
        }, {
            label: "梅州市",
            value: "4414"
        }, {
            label: "汕尾市",
            value: "4415"
        }, {
            label: "河源市",
            value: "4416"
        }, {
            label: "阳江市",
            value: "4417"
        }, {
            label: "清远市",
            value: "4418"
        }, {
            label: "东莞市",
            value: "4419"
        }, {
            label: "中山市",
            value: "4420"
        }, {
            label: "潮州市",
            value: "4451"
        }, {
            label: "揭阳市",
            value: "4452"
        }, {
            label: "云浮市",
            value: "4453"
        } ], [ {
            label: "南宁市",
            value: "4501"
        }, {
            label: "柳州市",
            value: "4502"
        }, {
            label: "桂林市",
            value: "4503"
        }, {
            label: "梧州市",
            value: "4504"
        }, {
            label: "北海市",
            value: "4505"
        }, {
            label: "防城港市",
            value: "4506"
        }, {
            label: "钦州市",
            value: "4507"
        }, {
            label: "贵港市",
            value: "4508"
        }, {
            label: "玉林市",
            value: "4509"
        }, {
            label: "百色市",
            value: "4510"
        }, {
            label: "贺州市",
            value: "4511"
        }, {
            label: "河池市",
            value: "4512"
        }, {
            label: "来宾市",
            value: "4513"
        }, {
            label: "崇左市",
            value: "4514"
        } ], [ {
            label: "海口市",
            value: "4601"
        }, {
            label: "三亚市",
            value: "4602"
        }, {
            label: "三沙市",
            value: "4603"
        }, {
            label: "儋州市",
            value: "4604"
        }, {
            label: "省直辖县级行政区划",
            value: "4690"
        } ], [ {
            label: "市辖区",
            value: "5001"
        }, {
            label: "县",
            value: "5002"
        } ], [ {
            label: "成都市",
            value: "5101"
        }, {
            label: "自贡市",
            value: "5103"
        }, {
            label: "攀枝花市",
            value: "5104"
        }, {
            label: "泸州市",
            value: "5105"
        }, {
            label: "德阳市",
            value: "5106"
        }, {
            label: "绵阳市",
            value: "5107"
        }, {
            label: "广元市",
            value: "5108"
        }, {
            label: "遂宁市",
            value: "5109"
        }, {
            label: "内江市",
            value: "5110"
        }, {
            label: "乐山市",
            value: "5111"
        }, {
            label: "南充市",
            value: "5113"
        }, {
            label: "眉山市",
            value: "5114"
        }, {
            label: "宜宾市",
            value: "5115"
        }, {
            label: "广安市",
            value: "5116"
        }, {
            label: "达州市",
            value: "5117"
        }, {
            label: "雅安市",
            value: "5118"
        }, {
            label: "巴中市",
            value: "5119"
        }, {
            label: "资阳市",
            value: "5120"
        }, {
            label: "阿坝藏族羌族自治州",
            value: "5132"
        }, {
            label: "甘孜藏族自治州",
            value: "5133"
        }, {
            label: "凉山彝族自治州",
            value: "5134"
        } ], [ {
            label: "贵阳市",
            value: "5201"
        }, {
            label: "六盘水市",
            value: "5202"
        }, {
            label: "遵义市",
            value: "5203"
        }, {
            label: "安顺市",
            value: "5204"
        }, {
            label: "毕节市",
            value: "5205"
        }, {
            label: "铜仁市",
            value: "5206"
        }, {
            label: "黔西南布依族苗族自治州",
            value: "5223"
        }, {
            label: "黔东南苗族侗族自治州",
            value: "5226"
        }, {
            label: "黔南布依族苗族自治州",
            value: "5227"
        } ], [ {
            label: "昆明市",
            value: "5301"
        }, {
            label: "曲靖市",
            value: "5303"
        }, {
            label: "玉溪市",
            value: "5304"
        }, {
            label: "保山市",
            value: "5305"
        }, {
            label: "昭通市",
            value: "5306"
        }, {
            label: "丽江市",
            value: "5307"
        }, {
            label: "普洱市",
            value: "5308"
        }, {
            label: "临沧市",
            value: "5309"
        }, {
            label: "楚雄彝族自治州",
            value: "5323"
        }, {
            label: "红河哈尼族彝族自治州",
            value: "5325"
        }, {
            label: "文山壮族苗族自治州",
            value: "5326"
        }, {
            label: "西双版纳傣族自治州",
            value: "5328"
        }, {
            label: "大理白族自治州",
            value: "5329"
        }, {
            label: "德宏傣族景颇族自治州",
            value: "5331"
        }, {
            label: "怒江傈僳族自治州",
            value: "5333"
        }, {
            label: "迪庆藏族自治州",
            value: "5334"
        } ], [ {
            label: "拉萨市",
            value: "5401"
        }, {
            label: "日喀则市",
            value: "5402"
        }, {
            label: "昌都市",
            value: "5403"
        }, {
            label: "林芝市",
            value: "5404"
        }, {
            label: "山南市",
            value: "5405"
        }, {
            label: "那曲地区",
            value: "5424"
        }, {
            label: "阿里地区",
            value: "5425"
        } ], [ {
            label: "西安市",
            value: "6101"
        }, {
            label: "铜川市",
            value: "6102"
        }, {
            label: "宝鸡市",
            value: "6103"
        }, {
            label: "咸阳市",
            value: "6104"
        }, {
            label: "渭南市",
            value: "6105"
        }, {
            label: "延安市",
            value: "6106"
        }, {
            label: "汉中市",
            value: "6107"
        }, {
            label: "榆林市",
            value: "6108"
        }, {
            label: "安康市",
            value: "6109"
        }, {
            label: "商洛市",
            value: "6110"
        } ], [ {
            label: "兰州市",
            value: "6201"
        }, {
            label: "嘉峪关市",
            value: "6202"
        }, {
            label: "金昌市",
            value: "6203"
        }, {
            label: "白银市",
            value: "6204"
        }, {
            label: "天水市",
            value: "6205"
        }, {
            label: "武威市",
            value: "6206"
        }, {
            label: "张掖市",
            value: "6207"
        }, {
            label: "平凉市",
            value: "6208"
        }, {
            label: "酒泉市",
            value: "6209"
        }, {
            label: "庆阳市",
            value: "6210"
        }, {
            label: "定西市",
            value: "6211"
        }, {
            label: "陇南市",
            value: "6212"
        }, {
            label: "临夏回族自治州",
            value: "6229"
        }, {
            label: "甘南藏族自治州",
            value: "6230"
        } ], [ {
            label: "西宁市",
            value: "6301"
        }, {
            label: "海东市",
            value: "6302"
        }, {
            label: "海北藏族自治州",
            value: "6322"
        }, {
            label: "黄南藏族自治州",
            value: "6323"
        }, {
            label: "海南藏族自治州",
            value: "6325"
        }, {
            label: "果洛藏族自治州",
            value: "6326"
        }, {
            label: "玉树藏族自治州",
            value: "6327"
        }, {
            label: "海西蒙古族藏族自治州",
            value: "6328"
        } ], [ {
            label: "银川市",
            value: "6401"
        }, {
            label: "石嘴山市",
            value: "6402"
        }, {
            label: "吴忠市",
            value: "6403"
        }, {
            label: "固原市",
            value: "6404"
        }, {
            label: "中卫市",
            value: "6405"
        } ], [ {
            label: "乌鲁木齐市",
            value: "6501"
        }, {
            label: "克拉玛依市",
            value: "6502"
        }, {
            label: "吐鲁番市",
            value: "6504"
        }, {
            label: "哈密市",
            value: "6505"
        }, {
            label: "昌吉回族自治州",
            value: "6523"
        }, {
            label: "博尔塔拉蒙古自治州",
            value: "6527"
        }, {
            label: "巴音郭楞蒙古自治州",
            value: "6528"
        }, {
            label: "阿克苏地区",
            value: "6529"
        }, {
            label: "克孜勒苏柯尔克孜自治州",
            value: "6530"
        }, {
            label: "喀什地区",
            value: "6531"
        }, {
            label: "和田地区",
            value: "6532"
        }, {
            label: "伊犁哈萨克自治州",
            value: "6540"
        }, {
            label: "塔城地区",
            value: "6542"
        }, {
            label: "阿勒泰地区",
            value: "6543"
        }, {
            label: "自治区直辖县级行政区划",
            value: "6590"
        } ], [ {
            label: "台北",
            value: "6601"
        }, {
            label: "高雄",
            value: "6602"
        }, {
            label: "基隆",
            value: "6603"
        }, {
            label: "台中",
            value: "6604"
        }, {
            label: "台南",
            value: "6605"
        }, {
            label: "新竹",
            value: "6606"
        }, {
            label: "嘉义",
            value: "6607"
        }, {
            label: "宜兰",
            value: "6608"
        }, {
            label: "桃园",
            value: "6609"
        }, {
            label: "苗栗",
            value: "6610"
        }, {
            label: "彰化",
            value: "6611"
        }, {
            label: "南投",
            value: "6612"
        }, {
            label: "云林",
            value: "6613"
        }, {
            label: "屏东",
            value: "6614"
        }, {
            label: "台东",
            value: "6615"
        }, {
            label: "花莲",
            value: "6616"
        }, {
            label: "澎湖",
            value: "6617"
        } ], [ {
            label: "香港岛",
            value: "6701"
        }, {
            label: "九龙",
            value: "6702"
        }, {
            label: "新界",
            value: "6703"
        } ], [ {
            label: "澳门半岛",
            value: "6801"
        }, {
            label: "氹仔岛",
            value: "6802"
        }, {
            label: "路环岛",
            value: "6803"
        }, {
            label: "路氹城",
            value: "6804"
        } ] ];
        a.default = l;
    },
    "241d": function(a, t, l) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(l("2ee0"));
        var r = function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (t = (0, n.default)(t), "object" !== e(t) || "object" !== e(l)) return !1;
            for (var r in l) l.hasOwnProperty(r) && (r in t ? "object" !== e(t[r]) || "object" !== e(l[r]) ? t[r] = l[r] : t[r].concat && l[r].concat ? t[r] = t[r].concat(l[r]) : t[r] = a(t[r], l[r]) : t[r] = l[r]);
            return t;
        };
        t.default = r;
    },
    "28c6": function(e, a, t) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var l = T(t("b04c")), n = T(t("4d36")), r = T(t("19ea")), u = T(t("f8aa")), i = T(t("a410")), o = T(t("8d56")), s = T(t("38a0")), c = T(t("8bc8")), v = T(t("a6bd")), f = T(t("ab2d")), b = T(t("e368")), d = T(t("2ee0")), h = T(t("241d")), p = T(t("bc20")), g = T(t("ebcb")), y = T(t("f236")), m = T(t("4a16")), _ = T(t("fe34")), w = T(t("f120")), k = T(t("5077")), O = t("4cd7"), x = T(t("9cee")), A = T(t("049f")), P = T(t("0b22")), S = T(t("b209"));
            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var j = {
                queryParams: r.default,
                route: u.default,
                timeFormat: i.default,
                date: i.default,
                timeFrom: o.default,
                colorGradient: s.default.colorGradient,
                colorToRgba: s.default.colorToRgba,
                guid: c.default,
                color: v.default,
                sys: O.sys,
                os: O.os,
                type2icon: f.default,
                randomArray: b.default,
                wranning: function(e) {},
                get: n.default.get,
                post: n.default.post,
                put: n.default.put,
                delete: n.default.delete,
                hexToRgb: s.default.hexToRgb,
                rgbToHex: s.default.rgbToHex,
                test: g.default,
                random: y.default,
                deepClone: d.default,
                deepMerge: h.default,
                getParent: w.default,
                $parent: k.default,
                addUnit: p.default,
                trim: m.default,
                type: [ "primary", "success", "error", "warning", "info" ],
                http: n.default,
                toast: _.default,
                config: P.default,
                zIndex: S.default,
                debounce: x.default,
                throttle: A.default
            };
            e.$u = j;
            var C = {
                install: function(e) {
                    e.mixin(l.default), e.prototype.openShare && e.mixin(mpShare), e.filter("timeFormat", function(e, a) {
                        return (0, i.default)(e, a);
                    }), e.filter("date", function(e, a) {
                        return (0, i.default)(e, a);
                    }), e.filter("timeFrom", function(e, a) {
                        return (0, o.default)(e, a);
                    }), e.prototype.$u = j;
                }
            };
            a.default = C;
        }).call(this, t("543d").default);
    },
    2911: function(e, a) {
        var t = {
            errorImg: null,
            filter: null,
            highlight: null,
            onText: null,
            entities: {
                quot: '"',
                apos: "'",
                semi: ";",
                nbsp: " ",
                ensp: " ",
                emsp: " ",
                ndash: "–",
                mdash: "—",
                middot: "·",
                lsquo: "‘",
                rsquo: "’",
                ldquo: "“",
                rdquo: "”",
                bull: "•",
                hellip: "…"
            },
            blankChar: l(" , ,\t,\r,\n,\f"),
            boolAttrs: l("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),
            blockTags: l("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
            ignoreTags: l("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),
            richOnlyTags: l("a,colgroup,fieldset,legend"),
            selfClosingTags: l("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
            trustTags: l("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
            userAgentStyles: {
                address: "font-style:italic",
                big: "display:inline;font-size:1.2em",
                blockquote: "background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",
                caption: "display:table-caption;text-align:center",
                center: "text-align:center",
                cite: "font-style:italic",
                dd: "margin-left:40px",
                mark: "background-color:yellow",
                pre: "font-family:monospace;white-space:pre;overflow:scroll",
                s: "text-decoration:line-through",
                small: "display:inline;font-size:0.8em",
                u: "text-decoration:underline"
            }
        };
        function l(e) {
            for (var a = Object.create(null), t = e.split(","), l = t.length; l--; ) a[t[l]] = !0;
            return a;
        }
        wx.canIUse("editor") && (t.blockTags.pre = void 0, t.ignoreTags.rp = !0, Object.assign(t.richOnlyTags, l("bdi,bdo,caption,rt,ruby")), 
        Object.assign(t.trustTags, l("bdi,bdo,caption,pre,rt,ruby"))), e.exports = t;
    },
    "2ee0": function(a, t, l) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = function a(t) {
            if ([ null, void 0, NaN, !1 ].includes(t)) return t;
            if ("object" !== e(t) && "function" != typeof t) return t;
            var l = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            }(t) ? [] : {};
            for (var n in t) t.hasOwnProperty(n) && (l[n] = "object" === e(t[n]) ? a(t[n]) : t[n]);
            return l;
        };
        t.default = n;
    },
    "2f68": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = t("0e23");
        function n(e, a) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                a && (l = l.filter(function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable;
                })), t.push.apply(t, l);
            }
            return t;
        }
        function r(e) {
            for (var a = 1; a < arguments.length; a++) {
                var t = null != arguments[a] ? arguments[a] : {};
                a % 2 ? n(Object(t), !0).forEach(function(a) {
                    u(e, a, t[a]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach(function(a) {
                    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                });
            }
            return e;
        }
        function u(e, a, t) {
            return a in e ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[a] = t, e;
        }
        var i = function(e, a, t) {
            var n = {};
            return e.forEach(function(e) {
                (0, l.isUndefined)(t[e]) ? (0, l.isUndefined)(a[e]) || (n[e] = a[e]) : n[e] = t[e];
            }), n;
        };
        a.default = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = a.method || e.method || "GET", n = {
                baseURL: e.baseURL || "",
                method: t,
                url: a.url || "",
                params: a.params || {},
                custom: r(r({}, e.custom || {}), a.custom || {}),
                header: (0, l.deepMerge)(e.header || {}, a.header || {})
            }, u = [ "getTask", "validateStatus" ];
            if (n = r(r({}, n), i(u, e, a)), "DOWNLOAD" === t) ; else if ("UPLOAD" === t) {
                delete n.header["content-type"], delete n.header["Content-Type"];
                var o = [ "filePath", "name", "formData" ];
                o.forEach(function(e) {
                    (0, l.isUndefined)(a[e]) || (n[e] = a[e]);
                });
            } else {
                var s = [ "data", "timeout", "dataType", "responseType" ];
                n = r(r({}, n), i(s, e, a));
            }
            return n;
        };
    },
    3043: function(e, a, t) {
        function l(e, a, t) {
            this.$children.map(function(n) {
                e === n.$options.name ? n.$emit.apply(n, [ a ].concat(t)) : l.apply(n, [ e, a ].concat(t));
            });
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var n = {
            methods: {
                dispatch: function(e, a, t) {
                    for (var l = this.$parent || this.$root, n = l.$options.name; l && (!n || n !== e); ) (l = l.$parent) && (n = l.$options.name);
                    l && l.$emit.apply(l, [ a ].concat(t));
                },
                broadcast: function(e, a, t) {
                    l.call(this, e, a, t);
                }
            }
        };
        a.default = n;
    },
    "315e": function(e, a, t) {
        var l = t("2911"), n = function(e) {
            return e >= "a" && e <= "z" || e >= "A" && e <= "Z";
        };
        function r(e) {
            var a = Object.assign(Object.create(null), l.userAgentStyles);
            for (var t in e) a[t] = (a[t] ? a[t] + ";" : "") + e[t];
            this.styles = a;
        }
        function u(e, a) {
            this.data = e, this.floor = 0, this.i = 0, this.list = [], this.res = a, this.state = this.Space;
        }
        r.prototype.getStyle = function(e) {
            this.styles = new u(e, this.styles).parse();
        }, r.prototype.match = function(e, a) {
            var t, l = (t = this.styles[e]) ? t + ";" : "";
            if (a.class) for (var n, r = a.class.split(" "), u = 0; n = r[u]; u++) (t = this.styles["." + n]) && (l += t + ";");
            return (t = this.styles["#" + a.id]) && (l += t + ";"), l;
        }, e.exports = r, u.prototype.parse = function() {
            for (var e; e = this.data[this.i]; this.i++) this.state(e);
            return this.res;
        }, u.prototype.section = function() {
            return this.data.substring(this.start, this.i);
        }, u.prototype.Space = function(e) {
            "." == e || "#" == e || n(e) ? (this.start = this.i, this.state = this.Name) : "/" == e && "*" == this.data[this.i + 1] ? this.Comment() : l.blankChar[e] || ";" == e || (this.state = this.Ignore);
        }, u.prototype.Comment = function() {
            this.i = this.data.indexOf("*/", this.i) + 1, this.i || (this.i = this.data.length), 
            this.state = this.Space;
        }, u.prototype.Ignore = function(e) {
            "{" == e ? this.floor++ : "}" != e || --this.floor || (this.list = [], this.state = this.Space);
        }, u.prototype.Name = function(e) {
            l.blankChar[e] ? (this.list.push(this.section()), this.state = this.NameSpace) : "{" == e ? (this.list.push(this.section()), 
            this.Content()) : "," == e ? (this.list.push(this.section()), this.Comma()) : !n(e) && (e < "0" || e > "9") && "-" != e && "_" != e && (this.state = this.Ignore);
        }, u.prototype.NameSpace = function(e) {
            "{" == e ? this.Content() : "," == e ? this.Comma() : l.blankChar[e] || (this.state = this.Ignore);
        }, u.prototype.Comma = function() {
            for (;l.blankChar[this.data[++this.i]]; ) ;
            "{" == this.data[this.i] ? this.Content() : (this.start = this.i--, this.state = this.Name);
        }, u.prototype.Content = function() {
            this.start = ++this.i, -1 == (this.i = this.data.indexOf("}", this.i)) && (this.i = this.data.length);
            for (var e, a = this.section(), t = 0; e = this.list[t++]; ) this.res[e] ? this.res[e] += ";" + a : this.res[e] = a;
            this.list = [], this.state = this.Space;
        };
    },
    "37dc": function(a, t, l) {
        (function(a, l) {
            function n(e, a) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, a) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [], l = !0, n = !1, r = void 0;
                        try {
                            for (var u, i = e[Symbol.iterator](); !(l = (u = i.next()).done) && (t.push(u.value), 
                            !a || t.length !== a); l = !0) ;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            n = !0, r = e;
                        } finally {
                            try {
                                l || null == i.return || i.return();
                            } finally {
                                if (n) throw r;
                            }
                        }
                        return t;
                    }
                }(e, a) || function(e, a) {
                    if (e) {
                        if ("string" == typeof e) return r(e, a);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(e, a) : void 0;
                    }
                }(e, a) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function r(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, l = new Array(a); t < a; t++) l[t] = e[t];
                return l;
            }
            function u(e, a) {
                if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
            }
            function i(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var l = a[t];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), 
                    Object.defineProperty(e, l.key, l);
                }
            }
            function o(e, a, t) {
                return a && i(e.prototype, a), t && i(e, t), e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.compileI18nJsonStr = function(e, a) {
                var t = a.locale, l = a.locales, n = a.delimiters;
                if (!j(e, n)) return e;
                S || (S = new f());
                var r = [];
                Object.keys(l).forEach(function(e) {
                    e !== t && r.push({
                        locale: e,
                        values: l[e]
                    });
                }), r.unshift({
                    locale: t,
                    values: l[t]
                });
                try {
                    return JSON.stringify(E(JSON.parse(e), r, n), null, 2);
                } catch (e) {}
                return e;
            }, t.hasI18nJson = function e(a, t) {
                return S || (S = new f()), I(a, function(a, l) {
                    var n = a[l];
                    return T(n) ? !!j(n, t) || void 0 : e(n, t);
                });
            }, t.initVueI18n = function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0;
                if ("string" != typeof e) {
                    var n = [ a, e ];
                    e = n[0], a = n[1];
                }
                "string" != typeof e && (e = P()), "string" != typeof t && (t = "undefined" != typeof __uniConfig && __uniConfig.fallbackLocale || m);
                var r = new x({
                    locale: e,
                    fallbackLocale: t,
                    messages: a,
                    watcher: l
                }), u = function(e, a) {
                    if ("function" != typeof getApp) u = function(e, a) {
                        return r.t(e, a);
                    }; else {
                        var t = !1;
                        u = function(e, a) {
                            var l = getApp().$vm;
                            return l && (l.$locale, t || (t = !0, A(l, r))), r.t(e, a);
                        };
                    }
                    return u(e, a);
                };
                return {
                    i18n: r,
                    f: function(e, a, t) {
                        return r.f(e, a, t);
                    },
                    t: function(e, a) {
                        return u(e, a);
                    },
                    add: function(e, a) {
                        var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return r.add(e, a, t);
                    },
                    watch: function(e) {
                        return r.watchLocale(e);
                    },
                    getLocale: function() {
                        return r.getLocale();
                    },
                    setLocale: function(e) {
                        return r.setLocale(e);
                    }
                };
            }, t.isI18nStr = j, t.normalizeLocale = O, t.parseI18nJson = function e(a, t, l) {
                return S || (S = new f()), I(a, function(a, n) {
                    var r = a[n];
                    T(r) ? j(r, l) && (a[n] = C(r, t, l)) : e(r, t, l);
                }), a;
            }, t.resolveLocale = function(e) {
                return function(a) {
                    return a ? function(e) {
                        var a = [], t = e.split("-");
                        for (;t.length; ) a.push(t.join("-")), t.pop();
                        return a;
                    }(a = O(a) || a).find(function(a) {
                        return e.indexOf(a) > -1;
                    }) : a;
                };
            }, t.isString = t.LOCALE_ZH_HANT = t.LOCALE_ZH_HANS = t.LOCALE_FR = t.LOCALE_ES = t.LOCALE_EN = t.I18n = t.Formatter = void 0;
            var s = Array.isArray, c = function(a) {
                return null !== a && "object" === e(a);
            }, v = [ "{", "}" ], f = function() {
                function e() {
                    u(this, e), this._caches = Object.create(null);
                }
                return o(e, [ {
                    key: "interpolate",
                    value: function(e, a) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
                        if (!a) return [ e ];
                        var l = this._caches[e];
                        return l || (l = h(e, t), this._caches[e] = l), p(l, a);
                    }
                } ]), e;
            }();
            t.Formatter = f;
            var b = /^(?:\d)+/, d = /^(?:\w)+/;
            function h(e, a) {
                for (var t = n(a, 2), l = t[0], r = t[1], u = [], i = 0, o = ""; i < e.length; ) {
                    var s = e[i++];
                    if (s === l) {
                        o && u.push({
                            type: "text",
                            value: o
                        }), o = "";
                        var c = "";
                        for (s = e[i++]; void 0 !== s && s !== r; ) c += s, s = e[i++];
                        var v = s === r, f = b.test(c) ? "list" : v && d.test(c) ? "named" : "unknown";
                        u.push({
                            value: c,
                            type: f
                        });
                    } else o += s;
                }
                return o && u.push({
                    type: "text",
                    value: o
                }), u;
            }
            function p(e, a) {
                var t = [], l = 0, n = s(a) ? "list" : c(a) ? "named" : "unknown";
                if ("unknown" === n) return t;
                for (;l < e.length; ) {
                    var r = e[l];
                    switch (r.type) {
                      case "text":
                        t.push(r.value);
                        break;

                      case "list":
                        t.push(a[parseInt(r.value, 10)]);
                        break;

                      case "named":
                        "named" === n && t.push(a[r.value]);
                    }
                    l++;
                }
                return t;
            }
            var g = "zh-Hans";
            t.LOCALE_ZH_HANS = g;
            var y = "zh-Hant";
            t.LOCALE_ZH_HANT = y;
            var m = "en";
            t.LOCALE_EN = m;
            t.LOCALE_FR = "fr";
            t.LOCALE_ES = "es";
            var _ = Object.prototype.hasOwnProperty, w = function(e, a) {
                return _.call(e, a);
            }, k = new f();
            function O(e, a) {
                if (e) return e = e.trim().replace(/_/g, "-"), a && a[e] ? e : 0 === (e = e.toLowerCase()).indexOf("zh") ? e.indexOf("-hans") > -1 ? g : e.indexOf("-hant") > -1 || function(e, a) {
                    return !!a.find(function(a) {
                        return -1 !== e.indexOf(a);
                    });
                }(e, [ "-tw", "-hk", "-mo", "-cht" ]) ? y : g : function(e, a) {
                    return a.find(function(a) {
                        return 0 === e.indexOf(a);
                    });
                }(e, [ m, "fr", "es" ]) || void 0;
            }
            var x = function() {
                function e(a) {
                    var t = a.locale, l = a.fallbackLocale, n = a.messages, r = a.watcher, i = a.formater;
                    u(this, e), this.locale = m, this.fallbackLocale = m, this.message = {}, this.messages = {}, 
                    this.watchers = [], l && (this.fallbackLocale = l), this.formater = i || k, this.messages = n || {}, 
                    this.setLocale(t || m), r && this.watchLocale(r);
                }
                return o(e, [ {
                    key: "setLocale",
                    value: function(e) {
                        var a = this, t = this.locale;
                        this.locale = O(e, this.messages) || this.fallbackLocale, this.messages[this.locale] || (this.messages[this.locale] = {}), 
                        this.message = this.messages[this.locale], t !== this.locale && this.watchers.forEach(function(e) {
                            e(a.locale, t);
                        });
                    }
                }, {
                    key: "getLocale",
                    value: function() {
                        return this.locale;
                    }
                }, {
                    key: "watchLocale",
                    value: function(e) {
                        var a = this, t = this.watchers.push(e) - 1;
                        return function() {
                            a.watchers.splice(t, 1);
                        };
                    }
                }, {
                    key: "add",
                    value: function(e, a) {
                        var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], l = this.messages[e];
                        l ? t ? Object.assign(l, a) : Object.keys(a).forEach(function(e) {
                            w(l, e) || (l[e] = a[e]);
                        }) : this.messages[e] = a;
                    }
                }, {
                    key: "f",
                    value: function(e, a, t) {
                        return this.formater.interpolate(e, a, t).join("");
                    }
                }, {
                    key: "t",
                    value: function(e, a, t) {
                        var l = this.message;
                        return "string" == typeof a ? (a = O(a, this.messages)) && (l = this.messages[a]) : t = a, 
                        w(l, e) ? this.formater.interpolate(l[e], t).join("") : (console.warn("Cannot translate the value of keypath ".concat(e, ". Use the value of keypath as default.")), 
                        e);
                    }
                } ]), e;
            }();
            function A(e, a) {
                e.$watchLocale ? e.$watchLocale(function(e) {
                    a.setLocale(e);
                }) : e.$watch(function() {
                    return e.$locale;
                }, function(e) {
                    a.setLocale(e);
                });
            }
            function P() {
                return void 0 !== a && a.getLocale ? a.getLocale() : void 0 !== l && l.getLocale ? l.getLocale() : m;
            }
            t.I18n = x;
            var S, T = function(e) {
                return "string" == typeof e;
            };
            function j(e, a) {
                return e.indexOf(a[0]) > -1;
            }
            function C(e, a, t) {
                return S.interpolate(e, a, t).join("");
            }
            function E(e, a, t) {
                return I(e, function(e, l) {
                    !function(e, a, t, l) {
                        var n = e[a];
                        if (T(n)) {
                            if (j(n, l) && (e[a] = C(n, t[0].values, l), t.length > 1)) {
                                var r = e[a + "Locales"] = {};
                                t.forEach(function(e) {
                                    r[e.locale] = C(n, e.values, l);
                                });
                            }
                        } else E(n, t, l);
                    }(e, l, a, t);
                }), e;
            }
            function I(e, a) {
                if (s(e)) {
                    for (var t = 0; t < e.length; t++) if (a(e, t)) return !0;
                } else if (c(e)) for (var l in e) if (a(e, l)) return !0;
                return !1;
            }
            t.isString = T;
        }).call(this, l("543d").default, l("c8ba"));
    },
    "38a0": function(e, a, t) {
        function l(e) {
            var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], t = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            if ((e = e.toLowerCase()) && t.test(e)) {
                if (4 === e.length) {
                    for (var l = "#", n = 1; n < 4; n += 1) l += e.slice(n, n + 1).concat(e.slice(n, n + 1));
                    e = l;
                }
                for (var r = [], u = 1; u < 7; u += 2) r.push(parseInt("0x" + e.slice(u, u + 2)));
                return a ? "rgb(".concat(r[0], ",").concat(r[1], ",").concat(r[2], ")") : r;
            }
            if (/^(rgb|RGB)/.test(e)) {
                var i = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
                return i.map(function(e) {
                    return Number(e);
                });
            }
            return e;
        }
        function n(e) {
            var a = e;
            if (/^(rgb|RGB)/.test(a)) {
                for (var t = a.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), l = "#", n = 0; n < t.length; n++) {
                    var r = Number(t[n]).toString(16);
                    "0" === (r = 1 == String(r).length ? "0" + r : r) && (r += r), l += r;
                }
                return 7 !== l.length && (l = a), l;
            }
            if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(a)) return a;
            var u = a.replace(/#/, "").split("");
            if (6 === u.length) return a;
            if (3 === u.length) {
                for (var i = "#", o = 0; o < u.length; o += 1) i += u[o] + u[o];
                return i;
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var r = {
            colorGradient: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "rgb(0, 0, 0)", a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rgb(255, 255, 255)", t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, r = l(e, !1), u = r[0], i = r[1], o = r[2], s = l(a, !1), c = s[0], v = s[1], f = s[2], b = (c - u) / t, d = (v - i) / t, h = (f - o) / t, p = [], g = 0; g < t; g++) {
                    var y = n("rgb(" + Math.round(b * g + u) + "," + Math.round(d * g + i) + "," + Math.round(h * g + o) + ")");
                    p.push(y);
                }
                return p;
            },
            hexToRgb: l,
            rgbToHex: n,
            colorToRgba: function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3, t = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/, l = (e = n(e)).toLowerCase();
                if (l && t.test(l)) {
                    if (4 === l.length) {
                        for (var r = "#", u = 1; u < 4; u += 1) r += l.slice(u, u + 1).concat(l.slice(u, u + 1));
                        l = r;
                    }
                    for (var i = [], o = 1; o < 7; o += 2) i.push(parseInt("0x" + l.slice(o, o + 2)));
                    return "rgba(" + i.join(",") + "," + a + ")";
                }
                return l;
            }
        };
        a.default = r;
    },
    "3a7c": function(e) {
        e.exports = JSON.parse('{"uni-datetime-picker.selectDate":"選擇日期","uni-datetime-picker.selectTime":"選擇時間","uni-datetime-picker.selectDateTime":"選擇日期時間","uni-datetime-picker.startDate":"開始日期","uni-datetime-picker.endDate":"結束日期","uni-datetime-picker.startTime":"開始时间","uni-datetime-picker.endTime":"結束时间","uni-datetime-picker.ok":"確定","uni-datetime-picker.clear":"清除","uni-datetime-picker.cancel":"取消","uni-calender.SUN":"日","uni-calender.MON":"一","uni-calender.TUE":"二","uni-calender.WED":"三","uni-calender.THU":"四","uni-calender.FRI":"五","uni-calender.SAT":"六"}');
    },
    "3a91": function(e) {
        e.exports = JSON.parse('{"uni-datetime-picker.selectDate":"select date","uni-datetime-picker.selectTime":"select time","uni-datetime-picker.selectDateTime":"select datetime","uni-datetime-picker.startDate":"start date","uni-datetime-picker.endDate":"end date","uni-datetime-picker.startTime":"start time","uni-datetime-picker.endTime":"end time","uni-datetime-picker.ok":"ok","uni-datetime-picker.clear":"clear","uni-datetime-picker.cancel":"cancel","uni-calender.MON":"MON","uni-calender.TUE":"TUE","uni-calender.WED":"WED","uni-calender.THU":"THU","uni-calender.FRI":"FRI","uni-calender.SAT":"SAT","uni-calender.SUN":"SUN"}');
    },
    "3d97": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.listVisitorPage = function(e) {
            return l.default.request({
                url: "/project/api/app-v3/visitorAppoint/searchVisitorAppoints",
                method: "post",
                data: e
            });
        }, a.queryVisitorPage = function(e) {
            return l.default.request({
                url: "/project/api/app-v3/visitorAppoint/getVisitorAppoint",
                method: "post",
                data: e
            });
        }, a.addVisitor = function(e) {
            return l.default.request({
                url: "/project/api/app-v3/visitorAppoint/addVisitorAppoint",
                method: "post",
                data: e
            });
        };
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("96a5"));
    },
    "42ef": function(e, a) {},
    4362: function(e, a, t) {
        a.nextTick = function(e) {
            var a = Array.prototype.slice.call(arguments);
            a.shift(), setTimeout(function() {
                e.apply(null, a);
            }, 0);
        }, a.platform = a.arch = a.execPath = a.title = "browser", a.pid = 1, a.browser = !0, 
        a.env = {}, a.argv = [], a.binding = function(e) {
            throw new Error("No such module. (Possibly not yet loaded)");
        }, function() {
            var e, l = "/";
            a.cwd = function() {
                return l;
            }, a.chdir = function(a) {
                e || (e = t("df7c")), l = e.resolve(a, l);
            };
        }(), a.exit = a.kill = a.umask = a.dlopen = a.uptime = a.memoryUsage = a.uvCounters = function() {}, 
        a.features = {};
    },
    "45b0": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            pages: [ {
                path: "pages/index/index",
                style: {
                    navigationBarTitleText: "福州大学一码通",
                    enablePullDownRefresh: !0,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/my/index",
                style: {
                    navigationBarTitleText: "我的"
                }
            }, {
                path: "pages/my/update-identify",
                style: {
                    navigationBarTitleText: "人脸照片"
                }
            }, {
                path: "pages/my/update-hsjc-code",
                style: {
                    navigationBarTitleText: "核酸检测"
                }
            }, {
                path: "pages/health/healthMgr",
                style: {
                    navigationBarTitleText: "健康管理",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/health/add-daily-health-info",
                style: {
                    navigationBarTitleText: "健康填报"
                }
            }, {
                path: "pages/health/add-health-trip",
                style: {
                    navigationBarTitleText: "行程登记"
                }
            }, {
                path: "pages/risk/newest-list",
                style: {
                    navigationBarTitleText: "中高风险地区"
                }
            }, {
                path: "pages/web/webview",
                style: {
                    navigationBarTitleText: ""
                }
            }, {
                path: "pages/operate/success",
                style: {
                    navigationBarTitleText: "操作成功"
                }
            }, {
                path: "pages/my/face-photography",
                style: {
                    navigationBarTitleText: "人脸拍照"
                }
            }, {
                path: "pages/code-rules/newest-list",
                style: {
                    navigationBarTitleText: "赋码规则"
                }
            }, {
                path: "pages/back-school/add-record",
                style: {
                    navigationBarTitleText: "返校管理"
                }
            }, {
                path: "pages/back-school/mgr-record-list",
                style: {
                    navigationBarTitleText: "返校管理记录",
                    enablePullDownRefresh: !0
                }
            }, {
                path: "pages/go-out/add-report",
                style: {
                    navigationBarTitleText: "出行报备"
                }
            }, {
                path: "pages/go-out/report-list",
                style: {
                    navigationBarTitleText: "出行报备记录",
                    enablePullDownRefresh: !0
                }
            }, {
                path: "pages/my/msg-list",
                style: {
                    navigationBarTitleText: "消息列表",
                    enablePullDownRefresh: !0
                }
            }, {
                path: "pages/my/msg-detail",
                style: {
                    navigationBarTitleText: "消息详情"
                }
            }, {
                path: "pages/my/add-yqmp",
                style: {
                    navigationBarTitleText: "疫情摸排"
                }
            }, {
                path: "pages/my/yqmp-list",
                style: {
                    navigationBarTitleText: "疫情摸排管理",
                    enablePullDownRefresh: !0
                }
            }, {
                path: "pages/approval/approval-list",
                style: {
                    navigationBarTitleText: "审批管理",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/my/add-workflow",
                style: {
                    navigationBarTitleText: "审批"
                }
            }, {
                path: "pages/my/add-health",
                style: {
                    navigationBarTitleText: "健康填报"
                }
            }, {
                path: "pages/my/manage-class-personnel-list",
                style: {
                    navigationBarTitleText: "人员列表"
                }
            }, {
                path: "pages/visitor/visitor-list",
                style: {
                    navigationBarTitleText: "访客预约记录",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/visitor/add-visitor",
                style: {
                    navigationBarTitleText: "访客预约",
                    enablePullDownRefresh: !1
                }
            } ],
            globalStyle: {
                navigationBarTextStyle: "black",
                navigationBarTitleText: "uni-app",
                navigationBarBackgroundColor: "#F8F8F8",
                backgroundColor: "#F8F8F8"
            },
            easycom: {
                "^u-(.*)": "@/uview-ui/components/u-$1/u-$1.vue"
            },
            tabBar: {
                color: "#444444",
                selectedColor: "#A2A2A2",
                borderStyle: "black",
                backgroundColor: "#ffffff",
                list: [ {
                    pagePath: "pages/index/index",
                    iconPath: "static/u104.png",
                    selectedIconPath: "static/u85.png",
                    text: "首页"
                }, {
                    pagePath: "pages/my/index",
                    iconPath: "static/u78.png",
                    selectedIconPath: "static/u128.png",
                    text: "我的"
                } ]
            }
        };
    },
    "4a16": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "both";
            return "both" == a ? e.replace(/^\s+|\s+$/g, "") : "left" == a ? e.replace(/^\s*/, "") : "right" == a ? e.replace(/(\s*$)/g, "") : "all" == a ? e.replace(/\s+/g, "") : e;
        };
        a.default = l;
    },
    "4cd7": function(e, a, t) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.os = function() {
                return e.getSystemInfoSync().platform;
            }, a.sys = function() {
                return e.getSystemInfoSync();
            };
        }).call(this, t("543d").default);
    },
    "4d36": function(e, a, t) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var l = r(t("241d")), n = r(t("ebcb"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var l = a[t];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), 
                    Object.defineProperty(e, l.key, l);
                }
            }
            var i = new (function() {
                function a() {
                    var e = this;
                    (function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
                    })(this, a), this.config = {
                        baseUrl: "",
                        header: {},
                        method: "POST",
                        dataType: "json",
                        responseType: "text",
                        showLoading: !0,
                        loadingText: "请求中...",
                        loadingTime: 800,
                        timer: null,
                        originalData: !1,
                        loadingMask: !0
                    }, this.interceptor = {
                        request: null,
                        response: null
                    }, this.get = function(a) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.request({
                            method: "GET",
                            url: a,
                            header: l,
                            data: t
                        });
                    }, this.post = function(a) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.request({
                            url: a,
                            method: "POST",
                            header: l,
                            data: t
                        });
                    }, this.put = function(a) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.request({
                            url: a,
                            method: "PUT",
                            header: l,
                            data: t
                        });
                    }, this.delete = function(a) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.request({
                            url: a,
                            method: "DELETE",
                            header: l,
                            data: t
                        });
                    };
                }
                return function(e, a, t) {
                    a && u(e.prototype, a), t && u(e, t);
                }(a, [ {
                    key: "setConfig",
                    value: function(e) {
                        this.config = (0, l.default)(this.config, e);
                    }
                }, {
                    key: "request",
                    value: function() {
                        var a = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (this.interceptor.request && "function" == typeof this.interceptor.request) {
                            var l = this.interceptor.request(t);
                            if (!1 === l) return new Promise(function() {});
                            this.options = l;
                        }
                        return t.dataType = t.dataType || this.config.dataType, t.responseType = t.responseType || this.config.responseType, 
                        t.url = t.url || "", t.params = t.params || {}, t.header = Object.assign({}, this.config.header, t.header), 
                        t.method = t.method || this.config.method, new Promise(function(l, r) {
                            t.complete = function(t) {
                                if (e.hideLoading(), clearTimeout(a.config.timer), a.config.timer = null, a.config.originalData) if (a.interceptor.response && "function" == typeof a.interceptor.response) {
                                    var n = a.interceptor.response(t);
                                    !1 !== n ? l(n) : r(t);
                                } else l(t); else if (200 == t.statusCode) if (a.interceptor.response && "function" == typeof a.interceptor.response) {
                                    var u = a.interceptor.response(t.data);
                                    !1 !== u ? l(u) : r(t.data);
                                } else l(t.data); else r(t);
                            }, t.url = n.default.url(t.url) ? t.url : a.config.baseUrl + (0 == t.url.indexOf("/") ? t.url : "/" + t.url), 
                            a.config.showLoading && !a.config.timer && (a.config.timer = setTimeout(function() {
                                e.showLoading({
                                    title: a.config.loadingText,
                                    mask: a.config.loadingMask
                                }), a.config.timer = null;
                            }, a.config.loadingTime)), e.request(t);
                        });
                    }
                } ]), a;
            }())();
            a.default = i;
        }).call(this, t("543d").default);
    },
    "4e48": function(a, t, l) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, a) {
            if (!a) return e;
            var t;
            if (n.isURLSearchParams(a)) t = a.toString(); else {
                var l = [];
                n.forEach(a, function(e, a) {
                    null != e && (n.isArray(e) ? a += "[]" : e = [ e ], n.forEach(e, function(e) {
                        n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), l.push(u(a) + "=" + u(e));
                    }));
                }), t = l.join("&");
            }
            if (t) {
                var r = e.indexOf("#");
                -1 !== r && (e = e.slice(0, r)), e += (-1 === e.indexOf("?") ? "?" : "&") + t;
            }
            return e;
        };
        var n = function(a) {
            if (a && a.__esModule) return a;
            if (null === a || "object" !== e(a) && "function" != typeof a) return {
                default: a
            };
            var t = r();
            if (t && t.has(a)) return t.get(a);
            var l = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in a) if (Object.prototype.hasOwnProperty.call(a, u)) {
                var i = n ? Object.getOwnPropertyDescriptor(a, u) : null;
                i && (i.get || i.set) ? Object.defineProperty(l, u, i) : l[u] = a[u];
            }
            return l.default = a, t && t.set(a, l), l;
        }(l("0e23"));
        function r() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return r = function() {
                return e;
            }, e;
        }
        function u(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
    },
    5077: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, a = this.$parent; a; ) {
                if (!a.$options || a.$options.name === e) return a;
                a = a.$parent;
            }
            return !1;
        };
    },
    "543d": function(a, t, l) {
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createApp = ya, t.createComponent = Ta, t.createPage = Sa, t.createPlugin = Ca, 
            t.createSubpackageApp = ja, t.default = void 0;
            var n, r = l("37dc"), u = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(l("66fd"));
            function i(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    a && (l = l.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })), t.push.apply(t, l);
                }
                return t;
            }
            function o(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? i(Object(t), !0).forEach(function(a) {
                        c(e, a, t[a]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach(function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                    });
                }
                return e;
            }
            function s(e, a) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, a) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [], l = !0, n = !1, r = void 0;
                        try {
                            for (var u, i = e[Symbol.iterator](); !(l = (u = i.next()).done) && (t.push(u.value), 
                            !a || t.length !== a); l = !0) ;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            n = !0, r = e;
                        } finally {
                            try {
                                l || null == i.return || i.return();
                            } finally {
                                if (n) throw r;
                            }
                        }
                        return t;
                    }
                }(e, a) || f(e, a) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e;
            }
            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || f(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function f(e, a) {
                if (e) {
                    if ("string" == typeof e) return b(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? b(e, a) : void 0;
                }
            }
            function b(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, l = new Array(a); t < a; t++) l[t] = e[t];
                return l;
            }
            var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", h = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
            function p() {
                var e, a = wx.getStorageSync("uni_id_token") || "", t = a.split(".");
                if (!a || 3 !== t.length) return {
                    uid: null,
                    role: [],
                    permission: [],
                    tokenExpired: 0
                };
                try {
                    e = JSON.parse(function(e) {
                        return decodeURIComponent(n(e).split("").map(function(e) {
                            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                        }).join(""));
                    }(t[1]));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
                }
                return e.tokenExpired = 1e3 * e.exp, delete e.exp, delete e.iat, e;
            }
            n = "function" != typeof atob ? function(e) {
                if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !h.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
                var a;
                e += "==".slice(2 - (3 & e.length));
                for (var t, l, n = "", r = 0; r < e.length; ) a = d.indexOf(e.charAt(r++)) << 18 | d.indexOf(e.charAt(r++)) << 12 | (t = d.indexOf(e.charAt(r++))) << 6 | (l = d.indexOf(e.charAt(r++))), 
                n += 64 === t ? String.fromCharCode(a >> 16 & 255) : 64 === l ? String.fromCharCode(a >> 16 & 255, a >> 8 & 255) : String.fromCharCode(a >> 16 & 255, a >> 8 & 255, 255 & a);
                return n;
            } : atob;
            var g = Object.prototype.toString, y = Object.prototype.hasOwnProperty;
            function m(e) {
                return "function" == typeof e;
            }
            function _(e) {
                return "string" == typeof e;
            }
            function w(e) {
                return "[object Object]" === g.call(e);
            }
            function k(e, a) {
                return y.call(e, a);
            }
            function O() {}
            function x(e) {
                var a = Object.create(null);
                return function(t) {
                    return a[t] || (a[t] = e(t));
                };
            }
            var A = /-(\w)/g, P = x(function(e) {
                return e.replace(A, function(e, a) {
                    return a ? a.toUpperCase() : "";
                });
            });
            function S(e) {
                var a = {};
                return w(e) && Object.keys(e).sort().forEach(function(t) {
                    a[t] = e[t];
                }), Object.keys(a) ? a : e;
            }
            var T = [ "invoke", "success", "fail", "complete", "returnValue" ], j = {}, C = {};
            function E(e, a) {
                Object.keys(a).forEach(function(t) {
                    -1 !== T.indexOf(t) && m(a[t]) && (e[t] = function(e, a) {
                        var t = a ? e ? e.concat(a) : Array.isArray(a) ? a : [ a ] : e;
                        return t ? function(e) {
                            for (var a = [], t = 0; t < e.length; t++) -1 === a.indexOf(e[t]) && a.push(e[t]);
                            return a;
                        }(t) : t;
                    }(e[t], a[t]));
                });
            }
            function I(e, a) {
                e && a && Object.keys(a).forEach(function(t) {
                    -1 !== T.indexOf(t) && m(a[t]) && function(e, a) {
                        var t = e.indexOf(a);
                        -1 !== t && e.splice(t, 1);
                    }(e[t], a[t]);
                });
            }
            function D(e) {
                return function(a) {
                    return e(a) || a;
                };
            }
            function $(a) {
                return !!a && ("object" === e(a) || "function" == typeof a) && "function" == typeof a.then;
            }
            function L(e, a) {
                for (var t = !1, l = 0; l < e.length; l++) {
                    var n = e[l];
                    if (t) t = Promise.resolve(D(n)); else {
                        var r = n(a);
                        if ($(r) && (t = Promise.resolve(r)), !1 === r) return {
                            then: function() {}
                        };
                    }
                }
                return t || {
                    then: function(e) {
                        return e(a);
                    }
                };
            }
            function M(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return [ "success", "fail", "complete" ].forEach(function(t) {
                    if (Array.isArray(e[t])) {
                        var l = a[t];
                        a[t] = function(a) {
                            L(e[t], a).then(function(e) {
                                return m(l) && l(e) || e;
                            });
                        };
                    }
                }), a;
            }
            function R(e, a) {
                var t = [];
                Array.isArray(j.returnValue) && t.push.apply(t, v(j.returnValue));
                var l = C[e];
                return l && Array.isArray(l.returnValue) && t.push.apply(t, v(l.returnValue)), t.forEach(function(e) {
                    a = e(a) || a;
                }), a;
            }
            function N(e) {
                var a = Object.create(null);
                Object.keys(j).forEach(function(e) {
                    "returnValue" !== e && (a[e] = j[e].slice());
                });
                var t = C[e];
                return t && Object.keys(t).forEach(function(e) {
                    "returnValue" !== e && (a[e] = (a[e] || []).concat(t[e]));
                }), a;
            }
            function U(e, a, t) {
                for (var l = arguments.length, n = new Array(l > 3 ? l - 3 : 0), r = 3; r < l; r++) n[r - 3] = arguments[r];
                var u = N(e);
                if (u && Object.keys(u).length) {
                    if (Array.isArray(u.invoke)) {
                        var i = L(u.invoke, t);
                        return i.then(function(e) {
                            return a.apply(void 0, [ M(u, e) ].concat(n));
                        });
                    }
                    return a.apply(void 0, [ M(u, t) ].concat(n));
                }
                return a.apply(void 0, [ t ].concat(n));
            }
            var q = {
                returnValue: function(e) {
                    return $(e) ? new Promise(function(a, t) {
                        e.then(function(e) {
                            e[0] ? t(e[0]) : a(e[1]);
                        });
                    }) : e;
                }
            }, F = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo/, B = /^create|Manager$/, H = [ "createBLEConnection" ], V = [ "createBLEConnection" ], z = /^on|^off/;
            function K(e) {
                return B.test(e) && -1 === H.indexOf(e);
            }
            function W(e) {
                return F.test(e) && -1 === V.indexOf(e);
            }
            function G(e) {
                return e.then(function(e) {
                    return [ null, e ];
                }).catch(function(e) {
                    return [ e ];
                });
            }
            function J(e) {
                return !(K(e) || W(e) || function(e) {
                    return z.test(e) && "onPush" !== e;
                }(e));
            }
            function X(e, a) {
                return J(e) ? function() {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), r = 1; r < l; r++) n[r - 1] = arguments[r];
                    return m(t.success) || m(t.fail) || m(t.complete) ? R(e, U.apply(void 0, [ e, a, t ].concat(n))) : R(e, G(new Promise(function(l, r) {
                        U.apply(void 0, [ e, a, Object.assign({}, t, {
                            success: l,
                            fail: r
                        }) ].concat(n));
                    })));
                } : a;
            }
            Promise.prototype.finally || (Promise.prototype.finally = function(e) {
                var a = this.constructor;
                return this.then(function(t) {
                    return a.resolve(e()).then(function() {
                        return t;
                    });
                }, function(t) {
                    return a.resolve(e()).then(function() {
                        throw t;
                    });
                });
            });
            var Z = !1, Y = 0, Q = 0;
            var ee, ae = "zh-Hans", te = {};
            ee = re(wx.getSystemInfoSync().language) || "en", function() {
                if ("undefined" != typeof __uniConfig && __uniConfig.locales && Object.keys(__uniConfig.locales).length) {
                    var e = Object.keys(__uniConfig.locales);
                    e.length && e.forEach(function(e) {
                        var a = te[e], t = __uniConfig.locales[e];
                        a ? Object.assign(a, t) : te[e] = t;
                    });
                }
            }();
            var le = (0, r.initVueI18n)(ee, {}), ne = le.t;
            function re(e, a) {
                if (e) return e = e.trim().replace(/_/g, "-"), a && a[e] ? e : "chinese" === (e = e.toLowerCase()) ? ae : 0 === e.indexOf("zh") ? e.indexOf("-hans") > -1 ? ae : e.indexOf("-hant") > -1 || function(e, a) {
                    return !!a.find(function(a) {
                        return -1 !== e.indexOf(a);
                    });
                }(e, [ "-tw", "-hk", "-mo", "-cht" ]) ? "zh-Hant" : ae : function(e, a) {
                    return a.find(function(a) {
                        return 0 === e.indexOf(a);
                    });
                }(e, [ "en", "fr", "es" ]) || void 0;
            }
            function ue() {
                var e = getApp({
                    allowDefault: !0
                });
                return e && e.$vm ? e.$vm.$locale : re(wx.getSystemInfoSync().language) || "en";
            }
            le.mixin = {
                beforeCreate: function() {
                    var e = this, a = le.i18n.watchLocale(function() {
                        e.$forceUpdate();
                    });
                    this.$once("hook:beforeDestroy", function() {
                        a();
                    });
                },
                methods: {
                    $$t: function(e, a) {
                        return ne(e, a);
                    }
                }
            }, le.setLocale, le.getLocale;
            var ie = [];
            void 0 !== a && (a.getLocale = ue);
            var oe = {
                promiseInterceptor: q
            }, se = Object.freeze({
                __proto__: null,
                upx2px: function(e, a) {
                    if (0 === Y && function() {
                        var e = wx.getSystemInfoSync(), a = e.platform, t = e.pixelRatio, l = e.windowWidth;
                        Y = l, Q = t, Z = "ios" === a;
                    }(), 0 === (e = Number(e))) return 0;
                    var t = e / 750 * (a || Y);
                    return t < 0 && (t = -t), 0 === (t = Math.floor(t + 1e-4)) && (t = 1 !== Q && Z ? .5 : 1), 
                    e < 0 ? -t : t;
                },
                getLocale: ue,
                setLocale: function(e) {
                    var a = getApp();
                    return !!a && (a.$vm.$locale !== e && (a.$vm.$locale = e, ie.forEach(function(a) {
                        return a({
                            locale: e
                        });
                    }), !0));
                },
                onLocaleChange: function(e) {
                    -1 === ie.indexOf(e) && ie.push(e);
                },
                addInterceptor: function(e, a) {
                    "string" == typeof e && w(a) ? E(C[e] || (C[e] = {}), a) : w(e) && E(j, e);
                },
                removeInterceptor: function(e, a) {
                    "string" == typeof e ? w(a) ? I(C[e], a) : delete C[e] : w(e) && I(j, e);
                },
                interceptors: oe
            });
            var ce, ve = "__DC_STAT_UUID";
            function fe(e) {
                (ce = ce || wx.getStorageSync(ve)) || (ce = Date.now() + "" + Math.floor(1e7 * Math.random()), 
                wx.setStorage({
                    key: ve,
                    data: ce
                })), e.deviceId = ce;
            }
            function be(e) {
                if (e.safeArea) {
                    var a = e.safeArea;
                    e.safeAreaInsets = {
                        top: a.top,
                        left: a.left,
                        right: e.windowWidth - a.right,
                        bottom: e.screenHeight - a.bottom
                    };
                }
            }
            function de(e, a) {
                for (var t = e.deviceType || "phone", l = {
                    ipad: "pad",
                    windows: "pc",
                    mac: "pc"
                }, n = Object.keys(l), r = a.toLocaleLowerCase(), u = 0; u < n.length; u++) {
                    var i = n[u];
                    if (-1 !== r.indexOf(i)) {
                        t = l[i];
                        break;
                    }
                }
                return t;
            }
            function he(e) {
                var a = e;
                return a && (a = e.toLocaleLowerCase()), a;
            }
            function pe(e) {
                return ue ? ue() : e;
            }
            function ge(e) {
                var a = e.hostName || "WeChat";
                return e.environment ? a = e.environment : e.host && e.host.env && (a = e.host.env), 
                a;
            }
            var ye = {
                returnValue: function(e) {
                    fe(e), be(e), function(e) {
                        var a, t = e.brand, l = void 0 === t ? "" : t, n = e.model, r = void 0 === n ? "" : n, u = e.system, i = void 0 === u ? "" : u, o = e.language, s = void 0 === o ? "" : o, c = e.theme, v = e.version, f = (e.platform, 
                        e.fontSizeSetting), b = e.SDKVersion, d = e.pixelRatio, h = e.deviceOrientation, p = "";
                        p = i.split(" ")[0] || "", a = i.split(" ")[1] || "";
                        var g = v, y = de(e, r), m = he(l), _ = ge(e), w = h, k = d, O = b, x = s.replace(/_/g, "-"), A = {
                            appId: "__UNI__F39F820",
                            appName: "lpp-store-mp",
                            appVersion: "1.0.0",
                            appVersionCode: "100",
                            appLanguage: pe(x),
                            uniCompileVersion: "3.5.0",
                            uniRuntimeVersion: "3.5.0",
                            uniPlatform: "mp-weixin",
                            deviceBrand: m,
                            deviceModel: r,
                            deviceType: y,
                            devicePixelRatio: k,
                            deviceOrientation: w,
                            osName: p.toLocaleLowerCase(),
                            osVersion: a,
                            hostTheme: c,
                            hostVersion: g,
                            hostLanguage: x,
                            hostName: _,
                            hostSDKVersion: O,
                            hostFontSizeSetting: f,
                            windowTop: 0,
                            windowBottom: 0,
                            osLanguage: void 0,
                            osTheme: void 0,
                            ua: void 0,
                            hostPackageName: void 0,
                            browserName: void 0,
                            browserVersion: void 0
                        };
                        Object.assign(e, A);
                    }(e);
                }
            }, me = {
                redirectTo: {
                    name: function(e) {
                        return "back" === e.exists && e.delta ? "navigateBack" : "redirectTo";
                    },
                    args: function(e) {
                        if ("back" === e.exists && e.url) {
                            var a = function(e) {
                                for (var a = getCurrentPages(), t = a.length; t--; ) {
                                    var l = a[t];
                                    if (l.$page && l.$page.fullPath === e) return t;
                                }
                                return -1;
                            }(e.url);
                            if (-1 !== a) {
                                var t = getCurrentPages().length - 1 - a;
                                t > 0 && (e.delta = t);
                            }
                        }
                    }
                },
                previewImage: {
                    args: function(e) {
                        var a = parseInt(e.current);
                        if (!isNaN(a)) {
                            var t = e.urls;
                            if (Array.isArray(t)) {
                                var l = t.length;
                                if (l) return a < 0 ? a = 0 : a >= l && (a = l - 1), a > 0 ? (e.current = t[a], 
                                e.urls = t.filter(function(e, l) {
                                    return !(l < a) || e !== t[a];
                                })) : e.current = t[0], {
                                    indicator: !1,
                                    loop: !1
                                };
                            }
                        }
                    }
                },
                getSystemInfo: ye,
                getSystemInfoSync: ye,
                showActionSheet: {
                    args: function(a) {
                        "object" === e(a) && (a.alertText = a.title);
                    }
                },
                getAppBaseInfo: {
                    returnValue: function(e) {
                        var a = e, t = a.version, l = a.language, n = a.SDKVersion, r = a.theme, u = ge(e), i = l.replace("_", "-");
                        e = S(Object.assign(e, {
                            appId: "__UNI__F39F820",
                            appName: "lpp-store-mp",
                            appVersion: "1.0.0",
                            appVersionCode: "100",
                            appLanguage: pe(i),
                            hostVersion: t,
                            hostLanguage: i,
                            hostName: u,
                            hostSDKVersion: n,
                            hostTheme: r
                        }));
                    }
                },
                getDeviceInfo: {
                    returnValue: function(e) {
                        var a = e, t = a.brand, l = a.model, n = de(e, l), r = he(t);
                        fe(e), e = S(Object.assign(e, {
                            deviceType: n,
                            deviceBrand: r,
                            deviceModel: l
                        }));
                    }
                },
                getWindowInfo: {
                    returnValue: function(e) {
                        be(e), e = S(Object.assign(e, {
                            windowTop: 0,
                            windowBottom: 0
                        }));
                    }
                }
            }, _e = [ "success", "fail", "cancel", "complete" ];
            function we(e, a, t) {
                return function(l) {
                    return a(Oe(e, l, t));
                };
            }
            function ke(e, a) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (w(a)) {
                    var r = !0 === n ? a : {};
                    for (var u in m(t) && (t = t(a, r) || {}), a) if (k(t, u)) {
                        var i = t[u];
                        m(i) && (i = i(a[u], a, r)), i ? _(i) ? r[i] = a[u] : w(i) && (r[i.name ? i.name : u] = i.value) : console.warn("The '".concat(e, "' method of platform '微信小程序' does not support option '").concat(u, "'"));
                    } else -1 !== _e.indexOf(u) ? m(a[u]) && (r[u] = we(e, a[u], l)) : n || (r[u] = a[u]);
                    return r;
                }
                return m(a) && (a = we(e, a, l)), a;
            }
            function Oe(e, a, t) {
                var l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return m(me.returnValue) && (a = me.returnValue(e, a)), ke(e, a, t, {}, l);
            }
            function xe(e, a) {
                if (k(me, e)) {
                    var t = me[e];
                    return t ? function(a, l) {
                        var n = t;
                        m(t) && (n = t(a));
                        var r = [ a = ke(e, a, n.args, n.returnValue) ];
                        void 0 !== l && r.push(l), m(n.name) ? e = n.name(a) : _(n.name) && (e = n.name);
                        var u = wx[e].apply(wx, r);
                        return W(e) ? Oe(e, u, n.returnValue, K(e)) : u;
                    } : function() {
                        console.error("Platform '微信小程序' does not support '".concat(e, "'."));
                    };
                }
                return a;
            }
            var Ae = Object.create(null);
            [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(e) {
                Ae[e] = function(e) {
                    return function(a) {
                        var t = a.fail, l = a.complete, n = {
                            errMsg: "".concat(e, ":fail method '").concat(e, "' not supported")
                        };
                        m(t) && t(n), m(l) && l(n);
                    };
                }(e);
            });
            var Pe = {
                oauth: [ "weixin" ],
                share: [ "weixin" ],
                payment: [ "wxpay" ],
                push: [ "weixin" ]
            };
            var Se = Object.freeze({
                __proto__: null,
                getProvider: function(e) {
                    var a = e.service, t = e.success, l = e.fail, n = e.complete, r = !1;
                    Pe[a] ? (r = {
                        errMsg: "getProvider:ok",
                        service: a,
                        provider: Pe[a]
                    }, m(t) && t(r)) : (r = {
                        errMsg: "getProvider:fail service not found"
                    }, m(l) && l(r)), m(n) && n(r);
                }
            }), Te = function() {
                var e;
                return function() {
                    return e || (e = new u.default()), e;
                };
            }();
            function je(e, a, t) {
                return e[a].apply(e, t);
            }
            var Ce, Ee, Ie, De = Object.freeze({
                __proto__: null,
                $on: function() {
                    return je(Te(), "$on", Array.prototype.slice.call(arguments));
                },
                $off: function() {
                    return je(Te(), "$off", Array.prototype.slice.call(arguments));
                },
                $once: function() {
                    return je(Te(), "$once", Array.prototype.slice.call(arguments));
                },
                $emit: function() {
                    return je(Te(), "$emit", Array.prototype.slice.call(arguments));
                }
            });
            function $e(e) {
                return function() {
                    try {
                        return e.apply(e, arguments);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error(e);
                    }
                };
            }
            function Le(e) {
                try {
                    return JSON.parse(e);
                } catch (e) {}
                return e;
            }
            var Me = [];
            function Re(e, a) {
                Me.forEach(function(t) {
                    t(e, a);
                }), Me.length = 0;
            }
            var Ne = [], Ue = Object.freeze({
                __proto__: null,
                getPushClientId: function(e) {
                    w(e) || (e = {});
                    var a = function(e) {
                        var a = {};
                        for (var t in e) {
                            var l = e[t];
                            m(l) && (a[t] = $e(l), delete e[t]);
                        }
                        return a;
                    }(e), t = a.success, l = a.fail, n = a.complete, r = m(t), u = m(l), i = m(n);
                    Promise.resolve().then(function() {
                        void 0 === Ie && (Ie = !1, Ce = "", Ee = "unipush is not enabled"), Me.push(function(e, a) {
                            var o;
                            e ? (o = {
                                errMsg: "getPushClientId:ok",
                                cid: e
                            }, r && t(o)) : (o = {
                                errMsg: "getPushClientId:fail" + (a ? " " + a : "")
                            }, u && l(o)), i && n(o);
                        }), void 0 !== Ce && Re(Ce, Ee);
                    });
                },
                onPushMessage: function(e) {
                    -1 === Ne.indexOf(e) && Ne.push(e);
                },
                offPushMessage: function(e) {
                    if (e) {
                        var a = Ne.indexOf(e);
                        a > -1 && Ne.splice(a, 1);
                    } else Ne.length = 0;
                },
                invokePushCallback: function(e) {
                    "enabled" === e.type ? Ie = !0 : "clientId" === e.type ? (Ce = e.cid, Ee = e.errMsg, 
                    Re(Ce, e.errMsg)) : "pushMsg" === e.type ? Ne.forEach(function(a) {
                        a({
                            type: "receive",
                            data: Le(e.message)
                        });
                    }) : "click" === e.type && Ne.forEach(function(a) {
                        a({
                            type: "click",
                            data: Le(e.message)
                        });
                    });
                }
            }), qe = Page, Fe = Component, Be = /:/g, He = x(function(e) {
                return P(e.replace(Be, "-"));
            });
            function Ve(e) {
                var a = e.triggerEvent, t = function(t) {
                    for (var l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), r = 1; r < l; r++) n[r - 1] = arguments[r];
                    return a.apply(e, [ He(t) ].concat(n));
                };
                try {
                    e.triggerEvent = t;
                } catch (a) {
                    a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                    e._triggerEvent = t;
                }
            }
            function ze(e, a, t) {
                var l = a[e];
                a[e] = l ? function() {
                    Ve(this);
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    return l.apply(this, a);
                } : function() {
                    Ve(this);
                };
            }
            qe.__$wrappered || (qe.__$wrappered = !0, Page = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return ze("onLoad", e), qe(e);
            }, Page.after = qe.after, Component = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return ze("created", e), Fe(e);
            });
            function Ke(e, a, t) {
                a.forEach(function(a) {
                    (function e(a, t) {
                        if (!t) return !0;
                        if (u.default.options && Array.isArray(u.default.options[a])) return !0;
                        if (m(t = t.default || t)) return !!m(t.extendOptions[a]) || !!(t.super && t.super.options && Array.isArray(t.super.options[a]));
                        if (m(t[a])) return !0;
                        var l = t.mixins;
                        return Array.isArray(l) ? !!l.find(function(t) {
                            return e(a, t);
                        }) : void 0;
                    })(a, t) && (e[a] = function(e) {
                        return this.$vm && this.$vm.__call_hook(a, e);
                    });
                });
            }
            function We(e, a) {
                var t;
                return [ t = m(a = a.default || a) ? a : e.extend(a), a = t.options ];
            }
            function Ge(e, a) {
                if (Array.isArray(a) && a.length) {
                    var t = Object.create(null);
                    a.forEach(function(e) {
                        t[e] = !0;
                    }), e.$scopedSlots = e.$slots = t;
                }
            }
            function Je(e, a) {
                var t = (e = (e || "").split(",")).length;
                1 === t ? a._$vueId = e[0] : 2 === t && (a._$vueId = e[0], a._$vuePid = e[1]);
            }
            function Xe(e, a) {
                var t = e.data || {}, l = e.methods || {};
                if ("function" == typeof t) try {
                    t = t.call(a);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    Object({
                        VUE_APP_NAME: "lpp-store-mp",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", t);
                } else try {
                    t = JSON.parse(JSON.stringify(t));
                } catch (e) {}
                return w(t) || (t = {}), Object.keys(l).forEach(function(e) {
                    -1 !== a.__lifecycle_hooks__.indexOf(e) || k(t, e) || (t[e] = l[e]);
                }), t;
            }
            var Ze = [ String, Number, Boolean, Object, Array, null ];
            function Ye(e) {
                return function(a, t) {
                    this.$vm && (this.$vm[e] = a);
                };
            }
            function Qe(e, a) {
                var t = e.behaviors, l = e.extends, n = e.mixins, r = e.props;
                r || (e.props = r = []);
                var u = [];
                return Array.isArray(t) && t.forEach(function(e) {
                    u.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(r) ? (r.push("name"), 
                    r.push("value")) : (r.name = {
                        type: String,
                        default: ""
                    }, r.value = {
                        type: [ String, Number, Boolean, Array, Object, Date ],
                        default: ""
                    }));
                }), w(l) && l.props && u.push(a({
                    properties: aa(l.props, !0)
                })), Array.isArray(n) && n.forEach(function(e) {
                    w(e) && e.props && u.push(a({
                        properties: aa(e.props, !0)
                    }));
                }), u;
            }
            function ea(e, a, t, l) {
                return Array.isArray(a) && 1 === a.length ? a[0] : a;
            }
            function aa(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = arguments.length > 3 ? arguments[3] : void 0, l = {};
                return a || (l.vueId = {
                    type: String,
                    value: ""
                }, t.virtualHost && (l.virtualHostStyle = {
                    type: null,
                    value: ""
                }, l.virtualHostClass = {
                    type: null,
                    value: ""
                }), l.scopedSlotsCompiler = {
                    type: String,
                    value: ""
                }, l.vueSlots = {
                    type: null,
                    value: [],
                    observer: function(e, a) {
                        var t = Object.create(null);
                        e.forEach(function(e) {
                            t[e] = !0;
                        }), this.setData({
                            $slots: t
                        });
                    }
                }), Array.isArray(e) ? e.forEach(function(e) {
                    l[e] = {
                        type: null,
                        observer: Ye(e)
                    };
                }) : w(e) && Object.keys(e).forEach(function(a) {
                    var t = e[a];
                    if (w(t)) {
                        var n = t.default;
                        m(n) && (n = n()), t.type = ea(0, t.type), l[a] = {
                            type: -1 !== Ze.indexOf(t.type) ? t.type : null,
                            value: n,
                            observer: Ye(a)
                        };
                    } else {
                        var r = ea(0, t);
                        l[a] = {
                            type: -1 !== Ze.indexOf(r) ? r : null,
                            observer: Ye(a)
                        };
                    }
                }), l;
            }
            function ta(e, a, t) {
                var l = {};
                return Array.isArray(a) && a.length && a.forEach(function(a, n) {
                    "string" == typeof a ? a ? "$event" === a ? l["$" + n] = t : "arguments" === a ? t.detail && t.detail.__args__ ? l["$" + n] = t.detail.__args__ : l["$" + n] = [ t ] : 0 === a.indexOf("$event.") ? l["$" + n] = e.__get_value(a.replace("$event.", ""), t) : l["$" + n] = e.__get_value(a) : l["$" + n] = e : l["$" + n] = function(e, a) {
                        var t = e;
                        return a.forEach(function(a) {
                            var l = a[0], n = a[2];
                            if (l || void 0 !== n) {
                                var r, u = a[1], i = a[3];
                                Number.isInteger(l) ? r = l : l ? "string" == typeof l && l && (r = 0 === l.indexOf("#s#") ? l.substr(3) : e.__get_value(l, t)) : r = t, 
                                Number.isInteger(r) ? t = n : u ? Array.isArray(r) ? t = r.find(function(a) {
                                    return e.__get_value(u, a) === n;
                                }) : w(r) ? t = Object.keys(r).find(function(a) {
                                    return e.__get_value(u, r[a]) === n;
                                }) : console.error("v-for 暂不支持循环数据：", r) : t = r[n], i && (t = e.__get_value(i, t));
                            }
                        }), t;
                    }(e, a);
                }), l;
            }
            function la(e) {
                for (var a = {}, t = 1; t < e.length; t++) {
                    var l = e[t];
                    a[l[0]] = l[1];
                }
                return a;
            }
            function na(e, a) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], n = arguments.length > 4 ? arguments[4] : void 0, r = arguments.length > 5 ? arguments[5] : void 0, u = !1;
                if (n && (u = a.currentTarget && a.currentTarget.dataset && "wx" === a.currentTarget.dataset.comType, 
                !t.length)) return u ? [ a ] : a.detail.__args__ || a.detail;
                var i = ta(e, l, a), o = [];
                return t.forEach(function(e) {
                    "$event" === e ? "__set_model" !== r || n ? n && !u ? o.push(a.detail.__args__[0]) : o.push(a) : o.push(a.target.value) : Array.isArray(e) && "o" === e[0] ? o.push(la(e)) : "string" == typeof e && k(i, e) ? o.push(i[e]) : o.push(e);
                }), o;
            }
            function ra(a) {
                var t = this, l = ((a = function(a) {
                    try {
                        a.mp = JSON.parse(JSON.stringify(a));
                    } catch (e) {}
                    return a.stopPropagation = O, a.preventDefault = O, a.target = a.target || {}, k(a, "detail") || (a.detail = {}), 
                    k(a, "markerId") && (a.detail = "object" === e(a.detail) ? a.detail : {}, a.detail.markerId = a.markerId), 
                    w(a.detail) && (a.target = Object.assign({}, a.target, a.detail)), a;
                }(a)).currentTarget || a.target).dataset;
                if (!l) return console.warn("事件信息不存在");
                var n = l.eventOpts || l["event-opts"];
                if (!n) return console.warn("事件信息不存在");
                var r = a.type, u = [];
                return n.forEach(function(e) {
                    var l = e[0], n = e[1], i = "^" === l.charAt(0), o = "~" === (l = i ? l.slice(1) : l).charAt(0);
                    l = o ? l.slice(1) : l, n && function(e, a) {
                        return e === a || "regionchange" === a && ("begin" === e || "end" === e);
                    }(r, l) && n.forEach(function(e) {
                        var l = e[0];
                        if (l) {
                            var n = t.$vm;
                            if (n.$options.generic && (n = function(e) {
                                for (var a = e.$parent; a && a.$parent && (a.$options.generic || a.$parent.$options.generic || a.$scope._$vuePid); ) a = a.$parent;
                                return a && a.$parent;
                            }(n) || n), "$emit" === l) return void n.$emit.apply(n, na(t.$vm, a, e[1], e[2], i, l));
                            var r = n[l];
                            if (!m(r)) throw new Error(" _vm.".concat(l, " is not a function"));
                            if (o) {
                                if (r.once) return;
                                r.once = !0;
                            }
                            var s = na(t.$vm, a, e[1], e[2], i, l);
                            s = Array.isArray(s) ? s : [], /=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(r.toString()) && (s = s.concat([ , , , , , , , , , , a ])), 
                            u.push(r.apply(n, s));
                        }
                    });
                }), "input" === r && 1 === u.length && void 0 !== u[0] ? u[0] : void 0;
            }
            var ua = {}, ia = [];
            var oa = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ];
            function sa() {
                u.default.prototype.getOpenerEventChannel = function() {
                    return this.$scope.getOpenerEventChannel();
                };
                var e = u.default.prototype.__call_hook;
                u.default.prototype.__call_hook = function(a, t) {
                    return "onLoad" === a && t && t.__id__ && (this.__eventChannel__ = function(e) {
                        if (e) {
                            var a = ua[e];
                            return delete ua[e], a;
                        }
                        return ia.shift();
                    }(t.__id__), delete t.__id__), e.call(this, a, t);
                };
            }
            function ca(e, a) {
                var t = a.mocks, l = a.initRefs;
                sa(), function() {
                    var e = {}, a = {};
                    u.default.prototype.$hasScopedSlotsParams = function(t) {
                        var l = e[t];
                        return l || (a[t] = this, this.$on("hook:destroyed", function() {
                            delete a[t];
                        })), l;
                    }, u.default.prototype.$getScopedSlotsParams = function(t, l, n) {
                        var r = e[t];
                        if (r) {
                            var u = r[l] || {};
                            return n ? u[n] : u;
                        }
                        a[t] = this, this.$on("hook:destroyed", function() {
                            delete a[t];
                        });
                    }, u.default.prototype.$setScopedSlotsParams = function(t, l) {
                        var n = this.$options.propsData.vueId;
                        if (n) {
                            var r = n.split(",")[0];
                            (e[r] = e[r] || {})[t] = l, a[r] && a[r].$forceUpdate();
                        }
                    }, u.default.mixin({
                        destroyed: function() {
                            var t = this.$options.propsData, l = t && t.vueId;
                            l && (delete e[l], delete a[l]);
                        }
                    });
                }(), e.$options.store && (u.default.prototype.$store = e.$options.store), function(e) {
                    e.prototype.uniIDHasRole = function(e) {
                        return p().role.indexOf(e) > -1;
                    }, e.prototype.uniIDHasPermission = function(e) {
                        var a = p().permission;
                        return this.uniIDHasRole("admin") || a.indexOf(e) > -1;
                    }, e.prototype.uniIDTokenValid = function() {
                        return p().tokenExpired > Date.now();
                    };
                }(u.default), u.default.prototype.mpHost = "mp-weixin", u.default.mixin({
                    beforeCreate: function() {
                        if (this.$options.mpType) {
                            if (this.mpType = this.$options.mpType, this.$mp = c({
                                data: {}
                            }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                            delete this.$options.mpType, delete this.$options.mpInstance, "page" === this.mpType && "function" == typeof getApp) {
                                var e = getApp();
                                e.$vm && e.$vm.$i18n && (this._i18n = e.$vm.$i18n);
                            }
                            "app" !== this.mpType && (l(this), function(e, a) {
                                var t = e.$mp[e.mpType];
                                a.forEach(function(a) {
                                    k(t, a) && (e[a] = t[a]);
                                });
                            }(this, t));
                        }
                    }
                });
                var n = {
                    onLaunch: function(a) {
                        this.$vm || (wx.canIUse && !wx.canIUse("nextTick") && console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                        this.$vm = e, this.$vm.$mp = {
                            app: this
                        }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                        this.$vm.__call_hook("mounted", a), this.$vm.__call_hook("onLaunch", a));
                    }
                };
                n.globalData = e.$options.globalData || {};
                var r = e.$options.methods;
                return r && Object.keys(r).forEach(function(e) {
                    n[e] = r[e];
                }), function(e, a, t) {
                    var l = e.observable({
                        locale: t || le.getLocale()
                    }), n = [];
                    a.$watchLocale = function(e) {
                        n.push(e);
                    }, Object.defineProperty(a, "$locale", {
                        get: function() {
                            return l.locale;
                        },
                        set: function(e) {
                            l.locale = e, n.forEach(function(a) {
                                return a(e);
                            });
                        }
                    });
                }(u.default, e, re(wx.getSystemInfoSync().language) || "en"), Ke(n, oa), n;
            }
            var va = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ];
            function fa(e) {
                return Behavior(e);
            }
            function ba() {
                return !!this.route;
            }
            function da(e) {
                this.triggerEvent("__l", e);
            }
            function ha(e) {
                var a = e.$scope;
                Object.defineProperty(e, "$refs", {
                    get: function() {
                        var e = {};
                        return function e(a, t, l) {
                            a.selectAllComponents(t).forEach(function(a) {
                                var n = a.dataset.ref;
                                l[n] = a.$vm || a, "scoped" === a.dataset.vueGeneric && a.selectAllComponents(".scoped-ref").forEach(function(a) {
                                    e(a, t, l);
                                });
                            });
                        }(a, ".vue-ref", e), a.selectAllComponents(".vue-ref-in-for").forEach(function(a) {
                            var t = a.dataset.ref;
                            e[t] || (e[t] = []), e[t].push(a.$vm || a);
                        }), e;
                    }
                });
            }
            function pa(e) {
                var a, t = e.detail || e.value, l = t.vuePid, n = t.vueOptions;
                l && (a = function e(a, t) {
                    for (var l, n = a.$children, r = n.length - 1; r >= 0; r--) {
                        var u = n[r];
                        if (u.$scope._$vueId === t) return u;
                    }
                    for (var i = n.length - 1; i >= 0; i--) if (l = e(n[i], t)) return l;
                }(this.$vm, l)), a || (a = this.$vm), n.parent = a;
            }
            function ga(e) {
                return ca(e, {
                    mocks: va,
                    initRefs: ha
                });
            }
            function ya(e) {
                return App(ga(e)), e;
            }
            var ma = /[!'()*]/g, _a = function(e) {
                return "%" + e.charCodeAt(0).toString(16);
            }, wa = /%2C/g, ka = function(e) {
                return encodeURIComponent(e).replace(ma, _a).replace(wa, ",");
            };
            function Oa(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ka, t = e ? Object.keys(e).map(function(t) {
                    var l = e[t];
                    if (void 0 === l) return "";
                    if (null === l) return a(t);
                    if (Array.isArray(l)) {
                        var n = [];
                        return l.forEach(function(e) {
                            void 0 !== e && (null === e ? n.push(a(t)) : n.push(a(t) + "=" + a(e)));
                        }), n.join("&");
                    }
                    return a(t) + "=" + a(l);
                }).filter(function(e) {
                    return e.length > 0;
                }).join("&") : null;
                return t ? "?".concat(t) : "";
            }
            function xa(e) {
                return function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = a.isPage, l = a.initRelation, n = We(u.default, e), r = s(n, 2), i = r[0], c = r[1], v = o({
                        multipleSlots: !0,
                        addGlobalClass: !0
                    }, c.options || {});
                    c["mp-weixin"] && c["mp-weixin"].options && Object.assign(v, c["mp-weixin"].options);
                    var f = {
                        options: v,
                        data: Xe(c, u.default.prototype),
                        behaviors: Qe(c, fa),
                        properties: aa(c.props, !1, c.__file, v),
                        lifetimes: {
                            attached: function() {
                                var e = this.properties, a = {
                                    mpType: t.call(this) ? "page" : "component",
                                    mpInstance: this,
                                    propsData: e
                                };
                                Je(e.vueId, this), l.call(this, {
                                    vuePid: this._$vuePid,
                                    vueOptions: a
                                }), this.$vm = new i(a), Ge(this.$vm, e.vueSlots), this.$vm.$mount();
                            },
                            ready: function() {
                                this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                            },
                            detached: function() {
                                this.$vm && this.$vm.$destroy();
                            }
                        },
                        pageLifetimes: {
                            show: function(e) {
                                this.$vm && this.$vm.__call_hook("onPageShow", e);
                            },
                            hide: function() {
                                this.$vm && this.$vm.__call_hook("onPageHide");
                            },
                            resize: function(e) {
                                this.$vm && this.$vm.__call_hook("onPageResize", e);
                            }
                        },
                        methods: {
                            __l: pa,
                            __e: ra
                        }
                    };
                    return c.externalClasses && (f.externalClasses = c.externalClasses), Array.isArray(c.wxsCallMethods) && c.wxsCallMethods.forEach(function(e) {
                        f.methods[e] = function(a) {
                            return this.$vm[e](a);
                        };
                    }), t ? f : [ f, i ];
                }(e, {
                    isPage: ba,
                    initRelation: da
                });
            }
            var Aa = [ "onShow", "onHide", "onUnload" ];
            function Pa(e) {
                return function(e, a) {
                    a.isPage, a.initRelation;
                    var t = xa(e);
                    return Ke(t.methods, Aa, e), t.methods.onLoad = function(e) {
                        this.options = e;
                        var a = Object.assign({}, e);
                        delete a.__id__, this.$page = {
                            fullPath: "/" + (this.route || this.is) + Oa(a)
                        }, this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e);
                    }, t;
                }(e, {
                    isPage: ba,
                    initRelation: da
                });
            }
            function Sa(e) {
                return Component(Pa(e));
            }
            function Ta(e) {
                return Component(xa(e));
            }
            function ja(e) {
                var a = ga(e), t = getApp({
                    allowDefault: !0
                });
                e.$scope = t;
                var l = t.globalData;
                if (l && Object.keys(a.globalData).forEach(function(e) {
                    k(l, e) || (l[e] = a.globalData[e]);
                }), Object.keys(a).forEach(function(e) {
                    k(t, e) || (t[e] = a[e]);
                }), m(a.onShow) && wx.onAppShow && wx.onAppShow(function() {
                    for (var a = arguments.length, t = new Array(a), l = 0; l < a; l++) t[l] = arguments[l];
                    e.__call_hook("onShow", t);
                }), m(a.onHide) && wx.onAppHide && wx.onAppHide(function() {
                    for (var a = arguments.length, t = new Array(a), l = 0; l < a; l++) t[l] = arguments[l];
                    e.__call_hook("onHide", t);
                }), m(a.onLaunch)) {
                    var n = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
                    e.__call_hook("onLaunch", n);
                }
                return e;
            }
            function Ca(e) {
                var a = ga(e);
                if (m(a.onShow) && wx.onAppShow && wx.onAppShow(function() {
                    for (var a = arguments.length, t = new Array(a), l = 0; l < a; l++) t[l] = arguments[l];
                    e.__call_hook("onShow", t);
                }), m(a.onHide) && wx.onAppHide && wx.onAppHide(function() {
                    for (var a = arguments.length, t = new Array(a), l = 0; l < a; l++) t[l] = arguments[l];
                    e.__call_hook("onHide", t);
                }), m(a.onLaunch)) {
                    var t = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
                    e.__call_hook("onLaunch", t);
                }
                return e;
            }
            Aa.push.apply(Aa, [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ]), 
            [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ].forEach(function(e) {
                me[e] = !1;
            }), [].forEach(function(e) {
                var a = me[e] && me[e].name ? me[e].name : e;
                wx.canIUse(a) || (me[e] = !1);
            });
            var Ea = {};
            "undefined" != typeof Proxy ? Ea = new Proxy({}, {
                get: function(e, a) {
                    return k(e, a) ? e[a] : se[a] ? se[a] : Ue[a] ? X(a, Ue[a]) : Se[a] ? X(a, Se[a]) : Ae[a] ? X(a, Ae[a]) : De[a] ? De[a] : k(wx, a) || k(me, a) ? X(a, xe(a, wx[a])) : void 0;
                },
                set: function(e, a, t) {
                    return e[a] = t, !0;
                }
            }) : (Object.keys(se).forEach(function(e) {
                Ea[e] = se[e];
            }), Object.keys(Ae).forEach(function(e) {
                Ea[e] = X(e, Ae[e]);
            }), Object.keys(Se).forEach(function(e) {
                Ea[e] = X(e, Ae[e]);
            }), Object.keys(De).forEach(function(e) {
                Ea[e] = De[e];
            }), Object.keys(Ue).forEach(function(e) {
                Ea[e] = X(e, Ue[e]);
            }), Object.keys(wx).forEach(function(e) {
                (k(wx, e) || k(me, e)) && (Ea[e] = X(e, xe(e, wx[e])));
            })), wx.createApp = ya, wx.createPage = Sa, wx.createComponent = Ta, wx.createSubpackageApp = ja, 
            wx.createPlugin = Ca;
            var Ia = Ea;
            t.default = Ia;
        }).call(this, l("c8ba"));
    },
    5880: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function(e, a) {
            return a ? e.replace(/\/+$/, "") + "/" + a.replace(/^\/+/, "") : e;
        };
    },
    "596b": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            appid: "__UNI__F39F820"
        };
    },
    "59c2": function(e, a, t) {
        (function(a) {
            var l = t("2911"), n = l.blankChar, r = t("315e"), u = a.getSystemInfoSync().windowWidth;
            function i(e) {
                var a = this, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.attrs = {}, this.CssHandler = new r(t.tagStyle, u), this.data = e, this.domain = t.domain, 
                this.DOM = [], this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0, 
                t.prot = (this.domain || "").includes("://") ? this.domain.split("://")[0] : "http", 
                this.options = t, this.state = this.Text, this.STACK = [], this.bubble = function() {
                    for (var e, t = a.STACK.length; e = a.STACK[--t]; ) {
                        if (l.richOnlyTags[e.name]) return !1;
                        e.c = 1;
                    }
                    return !0;
                }, this.decode = function(e, a) {
                    for (var t, n, r = -1; -1 != (r = e.indexOf("&", r + 1)) && -1 != (t = e.indexOf(";", r + 2)); ) "#" == e[r + 1] ? (n = parseInt(("x" == e[r + 2] ? "0" : "") + e.substring(r + 2, t)), 
                    isNaN(n) || (e = e.substr(0, r) + String.fromCharCode(n) + e.substr(t + 1))) : (n = e.substring(r + 1, t), 
                    (l.entities[n] || n == a) && (e = e.substr(0, r) + (l.entities[n] || "&") + e.substr(t + 1)));
                    return e;
                }, this.getUrl = function(e) {
                    return "/" == e[0] ? "/" == e[1] ? e = a.options.prot + ":" + e : a.domain && (e = a.domain + e) : a.domain && 0 != e.indexOf("data:") && !e.includes("://") && (e = a.domain + "/" + e), 
                    e;
                }, this.isClose = function() {
                    return ">" == a.data[a.i] || "/" == a.data[a.i] && ">" == a.data[a.i + 1];
                }, this.section = function() {
                    return a.data.substring(a.start, a.i);
                }, this.parent = function() {
                    return a.STACK[a.STACK.length - 1];
                }, this.siblings = function() {
                    return a.STACK.length ? a.parent().children : a.DOM;
                };
            }
            i.prototype.parse = function() {
                for (var e; e = this.data[this.i]; this.i++) this.state(e);
                for (this.state == this.Text && this.setText(); this.STACK.length; ) this.popNode(this.STACK.pop());
                return this.DOM;
            }, i.prototype.setAttr = function() {
                var e = this.attrName.toLowerCase(), a = this.attrVal;
                for (l.boolAttrs[e] ? this.attrs[e] = "T" : a && ("src" == e || "data-src" == e && !this.attrs.src ? this.attrs.src = this.getUrl(this.decode(a, "amp")) : "href" == e || "style" == e ? this.attrs[e] = this.decode(a, "amp") : "data-" != e.substr(0, 5) && (this.attrs[e] = a)), 
                this.attrVal = ""; n[this.data[this.i]]; ) this.i++;
                this.isClose() ? this.setNode() : (this.start = this.i, this.state = this.AttrName);
            }, i.prototype.setText = function() {
                var e, a = this.section();
                if (a) if (a = l.onText && l.onText(a, function() {
                    return e = !0;
                }) || a, e) {
                    this.data = this.data.substr(0, this.start) + a + this.data.substr(this.i);
                    var t = this.start + a.length;
                    for (this.i = this.start; this.i < t; this.i++) this.state(this.data[this.i]);
                } else {
                    if (!this.pre) {
                        for (var r, u, i = [], o = a.length; u = a[--o]; ) n[u] ? (" " != i[0] && i.unshift(" "), 
                        "\n" == u && null == r && (r = 0)) : (i.unshift(u), r || (r = 1));
                        if (0 == r) return;
                        a = i.join("");
                    }
                    this.siblings().push({
                        type: "text",
                        text: this.decode(a)
                    });
                }
            }, i.prototype.setNode = function() {
                var e = {
                    name: this.tagName.toLowerCase(),
                    attrs: this.attrs
                }, a = l.selfClosingTags[e.name];
                if (this.options.nodes.length && (e.type = "node"), this.attrs = {}, l.ignoreTags[e.name]) if (a) if ("source" == e.name) {
                    var t = this.parent();
                    t && ("video" == t.name || "audio" == t.name) && e.attrs.src && t.attrs.source.push(e.attrs.src);
                } else "base" != e.name || this.domain || (this.domain = e.attrs.href); else this.remove(e); else {
                    var r = e.attrs, i = this.CssHandler.match(e.name, r, e) + (r.style || ""), o = {};
                    switch (r.id && (1 & this.options.compress ? r.id = void 0 : this.options.useAnchor && this.bubble()), 
                    2 & this.options.compress && r.class && (r.class = void 0), e.name) {
                      case "a":
                      case "ad":
                        this.bubble();
                        break;

                      case "font":
                        if (r.color && (o.color = r.color, r.color = void 0), r.face && (o["font-family"] = r.face, 
                        r.face = void 0), r.size) {
                            var s = parseInt(r.size);
                            s < 1 ? s = 1 : s > 7 && (s = 7);
                            o["font-size"] = [ "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large" ][s - 1], 
                            r.size = void 0;
                        }
                        break;

                      case "embed":
                        var c = e.attrs.src || "", v = e.attrs.type || "";
                        if (v.includes("video") || c.includes(".mp4") || c.includes(".3gp") || c.includes(".m3u8")) e.name = "video"; else {
                            if (!(v.includes("audio") || c.includes(".m4a") || c.includes(".wav") || c.includes(".mp3") || c.includes(".aac"))) break;
                            e.name = "audio";
                        }
                        e.attrs.autostart && (e.attrs.autoplay = "T"), e.attrs.controls = "T";

                      case "video":
                      case "audio":
                        r.id ? this["".concat(e.name, "Num")]++ : r.id = e.name + ++this["".concat(e.name, "Num")], 
                        "video" == e.name && (this.videoNum > 3 && (e.lazyLoad = 1), r.width && (o.width = parseFloat(r.width) + (r.width.includes("%") ? "%" : "px"), 
                        r.width = void 0), r.height && (o.height = parseFloat(r.height) + (r.height.includes("%") ? "%" : "px"), 
                        r.height = void 0)), r.controls || r.autoplay || (r.controls = "T"), r.source = [], 
                        r.src && (r.source.push(r.src), r.src = void 0), this.bubble();
                        break;

                      case "td":
                      case "th":
                        if (r.colspan || r.rowspan) for (var f, b = this.STACK.length; f = this.STACK[--b]; ) if ("table" == f.name) {
                            f.flag = 1;
                            break;
                        }
                    }
                    r.align && ("table" == e.name ? "center" == r.align ? o["margin-inline-start"] = o["margin-inline-end"] = "auto" : o.float = r.align : o["text-align"] = r.align, 
                    r.align = void 0);
                    var d, h = i.split(";");
                    i = "";
                    for (var p = 0, g = h.length; p < g; p++) {
                        var y = h[p].split(":");
                        if (!(y.length < 2)) {
                            var m = y[0].trim().toLowerCase(), _ = y.slice(1).join(":").trim();
                            "-" == _[0] || _.includes("safe") ? i += ";".concat(m, ":").concat(_) : o[m] && !_.includes("import") && o[m].includes("import") || (o[m] = _);
                        }
                    }
                    for (var w in "img" == e.name && (r.src && !r.ignore && (this.bubble() ? r.i = (this.imgNum++).toString() : r.ignore = "T"), 
                    r.ignore && (i += ";-webkit-touch-callout:none", o["max-width"] = "100%"), o.width ? d = o.width : r.width && (d = r.width.includes("%") ? r.width : parseFloat(r.width) + "px"), 
                    d && (o.width = d, r.width = "100%", parseInt(d) > u && (o.height = "", r.height && (r.height = void 0))), 
                    o.height ? (r.height = o.height, o.height = "") : r.height && !r.height.includes("%") && (r.height = parseFloat(r.height) + "px")), 
                    o) {
                        var k = o[w];
                        if (k) {
                            if ((w.includes("flex") || "order" == w || "self-align" == w) && (e.c = 1), k.includes("url")) {
                                var O = k.indexOf("(");
                                if (-1 != O++) {
                                    for (;'"' == k[O] || "'" == k[O] || n[k[O]]; ) O++;
                                    k = k.substr(0, O) + this.getUrl(k.substr(O));
                                }
                            } else k.includes("rpx") ? k = k.replace(/[0-9.]+\s*rpx/g, function(e) {
                                return parseFloat(e) * u / 750 + "px";
                            }) : "white-space" == w && k.includes("pre") && !a && (this.pre = e.pre = !0);
                            i += ";".concat(w, ":").concat(k);
                        }
                    }
                    (i = i.substr(1)) && (r.style = i), a ? l.filter && 0 == l.filter(e, this) || this.siblings().push(e) : (e.children = [], 
                    "pre" == e.name && l.highlight && (this.remove(e), this.pre = e.pre = !0), this.siblings().push(e), 
                    this.STACK.push(e));
                }
                "/" == this.data[this.i] && this.i++, this.start = this.i + 1, this.state = this.Text;
            }, i.prototype.remove = function(e) {
                var a = this, t = e.name, r = this.i, u = function() {
                    var t = a.data.substring(r, a.i + 1);
                    for (var l in e.attrs.xmlns = "http://www.w3.org/2000/svg", e.attrs) "viewbox" == l ? t = ' viewBox="'.concat(e.attrs.viewbox, '"') + t : "style" != l && (t = " ".concat(l, '="').concat(e.attrs[l], '"') + t);
                    t = "<svg" + t;
                    var n = a.parent();
                    "100%" == e.attrs.width && n && (n.attrs.style || "").includes("inline") && (n.attrs.style = "width:300px;max-width:100%;" + n.attrs.style), 
                    a.siblings().push({
                        name: "img",
                        attrs: {
                            src: "data:image/svg+xml;utf8," + t.replace(/#/g, "%23"),
                            style: e.attrs.style,
                            ignore: "T"
                        }
                    });
                };
                if ("svg" == e.name && "/" == this.data[r]) return u(this.i++);
                for (;;) {
                    if (-1 == (this.i = this.data.indexOf("</", this.i + 1))) return void (this.i = "pre" == t || "svg" == t ? r : this.data.length);
                    for (this.start = this.i += 2; !n[this.data[this.i]] && !this.isClose(); ) this.i++;
                    if (this.section().toLowerCase() == t) return "pre" == t ? (this.data = this.data.substr(0, r + 1) + l.highlight(this.data.substring(r + 1, this.i - 5), e.attrs) + this.data.substr(this.i - 5), 
                    this.i = r) : ("style" == t ? this.CssHandler.getStyle(this.data.substring(r + 1, this.i - 7)) : "title" == t && (this.DOM.title = this.data.substring(r + 1, this.i - 7)), 
                    -1 == (this.i = this.data.indexOf(">", this.i)) && (this.i = this.data.length), 
                    void ("svg" == t && u()));
                }
            }, i.prototype.popNode = function(e) {
                if (e.pre) {
                    e.pre = this.pre = void 0;
                    for (var a = this.STACK.length; a--; ) this.STACK[a].pre && (this.pre = !0);
                }
                var t = this.siblings(), n = t.length, r = e.children;
                if ("head" == e.name || l.filter && 0 == l.filter(e, this)) return t.pop();
                var u = e.attrs;
                if (l.blockTags[e.name] ? e.name = "div" : l.trustTags[e.name] || (e.name = "span"), 
                e.c && ("ul" == e.name || "ol" == e.name)) if ((e.attrs.style || "").includes("list-style:none")) for (var i, o = 0; i = r[o++]; ) "li" == i.name && (i.name = "div"); else if ("ul" == e.name) {
                    for (var s = 1, c = this.STACK.length; c--; ) "ul" == this.STACK[c].name && s++;
                    if (1 != s) for (var v = r.length; v--; ) r[v].floor = s;
                } else for (var f, b = 0, d = 1; f = r[b++]; ) "li" == f.name && (f.type = "ol", 
                f.num = function(e, a) {
                    if ("a" == a) return String.fromCharCode(97 + (e - 1) % 26);
                    if ("A" == a) return String.fromCharCode(65 + (e - 1) % 26);
                    if ("i" == a || "I" == a) {
                        e = (e - 1) % 99 + 1;
                        var t = ([ "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ][Math.floor(e / 10) - 1] || "") + ([ "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ][e % 10 - 1] || "");
                        return "i" == a ? t.toLowerCase() : t;
                    }
                    return e;
                }(d++, u.type) + ".");
                if ("table" == e.name) {
                    var h = parseFloat(u.cellpadding), p = parseFloat(u.cellspacing), g = parseFloat(u.border);
                    if (e.c && (isNaN(h) && (h = 2), isNaN(p) && (p = 2)), g && (u.style = "border:".concat(g, "px solid gray;").concat(u.style || "")), 
                    e.flag && e.c) {
                        u.style = "".concat(u.style || "", ";").concat(p ? ";grid-gap:".concat(p, "px") : ";border-left:0;border-top:0");
                        var y, m = 1, _ = 1, w = [], k = [], O = {};
                        !function e(a) {
                            for (var t = 0; t < a.length; t++) "tr" == a[t].name ? w.push(a[t]) : e(a[t].children || []);
                        }(e.children);
                        for (var x = 0; x < w.length; x++) {
                            for (var A, P = 0; A = w[x].children[P]; P++) if ("td" == A.name || "th" == A.name) {
                                for (;O[m + "." + _]; ) _++;
                                var S = {
                                    name: "div",
                                    c: 1,
                                    attrs: {
                                        style: (A.attrs.style || "") + (g ? ";border:".concat(g, "px solid gray") + (p ? "" : ";border-right:0;border-bottom:0") : "") + (h ? ";padding:".concat(h, "px") : "")
                                    },
                                    children: A.children
                                };
                                if (A.attrs.colspan && (S.attrs.style += ";grid-column-start:" + _ + ";grid-column-end:" + (_ + parseInt(A.attrs.colspan)), 
                                A.attrs.rowspan || (S.attrs.style += ";grid-row-start:" + m + ";grid-row-end:" + (m + 1)), 
                                _ += parseInt(A.attrs.colspan) - 1), A.attrs.rowspan) {
                                    S.attrs.style += ";grid-row-start:" + m + ";grid-row-end:" + (m + parseInt(A.attrs.rowspan)), 
                                    A.attrs.colspan || (S.attrs.style += ";grid-column-start:" + _ + ";grid-column-end:" + (_ + 1));
                                    for (var T = 1; T < A.attrs.rowspan; T++) O[m + T + "." + _] = 1;
                                }
                                k.push(S), _++;
                            }
                            y || (y = _ - 1, u.style += ";grid-template-columns:repeat(".concat(y, ",auto)")), 
                            _ = 1, m++;
                        }
                        e.children = k;
                    } else u.style = "border-spacing:".concat(p, "px;").concat(u.style || ""), (g || h) && function e(a) {
                        for (var t, l = 0; t = a[l]; l++) "th" == t.name || "td" == t.name ? (g && (t.attrs.style = "border:".concat(g, "px solid gray;").concat(t.attrs.style || "")), 
                        h && (t.attrs.style = "padding:".concat(h, "px;").concat(t.attrs.style || ""))) : e(t.children || []);
                    }(r);
                    if (this.options.autoscroll) {
                        var j = Object.assign({}, e);
                        e.name = "div", e.attrs = {
                            style: "overflow:scroll"
                        }, e.children = [ j ];
                    }
                }
                this.CssHandler.pop && this.CssHandler.pop(e), "div" != e.name || Object.keys(u).length || 1 != r.length || "div" != r[0].name || (t[n - 1] = r[0]);
            }, i.prototype.Text = function(e) {
                if ("<" == e) {
                    var a = this.data[this.i + 1], t = function(e) {
                        return e >= "a" && e <= "z" || e >= "A" && e <= "Z";
                    };
                    t(a) ? (this.setText(), this.start = this.i + 1, this.state = this.TagName) : "/" == a ? (this.setText(), 
                    t(this.data[1 + ++this.i]) ? (this.start = this.i + 1, this.state = this.EndTag) : this.Comment()) : "!" != a && "?" != a || (this.setText(), 
                    this.Comment());
                }
            }, i.prototype.Comment = function() {
                var e;
                e = "--" == this.data.substring(this.i + 2, this.i + 4) ? "--\x3e" : "[CDATA[" == this.data.substring(this.i + 2, this.i + 9) ? "]]>" : ">", 
                -1 == (this.i = this.data.indexOf(e, this.i + 2)) ? this.i = this.data.length : this.i += e.length - 1, 
                this.start = this.i + 1, this.state = this.Text;
            }, i.prototype.TagName = function(e) {
                if (n[e]) {
                    for (this.tagName = this.section(); n[this.data[this.i]]; ) this.i++;
                    this.isClose() ? this.setNode() : (this.start = this.i, this.state = this.AttrName);
                } else this.isClose() && (this.tagName = this.section(), this.setNode());
            }, i.prototype.AttrName = function(e) {
                if ("=" == e || n[e] || this.isClose()) {
                    if (this.attrName = this.section(), n[e]) for (;n[this.data[++this.i]]; ) ;
                    if ("=" == this.data[this.i]) {
                        for (;n[this.data[++this.i]]; ) ;
                        this.start = this.i--, this.state = this.AttrValue;
                    } else this.setAttr();
                }
            }, i.prototype.AttrValue = function(e) {
                if ('"' == e || "'" == e) {
                    if (this.start++, -1 == (this.i = this.data.indexOf(e, this.i + 1))) return this.i = this.data.length;
                    this.attrVal = this.section(), this.i++;
                } else {
                    for (;!n[this.data[this.i]] && !this.isClose(); this.i++) ;
                    this.attrVal = this.section();
                }
                this.setAttr();
            }, i.prototype.EndTag = function(e) {
                if (n[e] || ">" == e || "/" == e) {
                    for (var a = this.section().toLowerCase(), t = this.STACK.length; t-- && this.STACK[t].name != a; ) ;
                    if (-1 != t) {
                        for (var l; (l = this.STACK.pop()).name != a; ) this.popNode(l);
                        this.popNode(l);
                    } else "p" != a && "br" != a || this.siblings().push({
                        name: a,
                        attrs: {}
                    });
                    this.i = this.data.indexOf(">", this.i), this.start = this.i + 1, -1 == this.i ? this.i = this.data.length : this.state = this.Text;
                }
            }, e.exports = i;
        }).call(this, t("543d").default);
    },
    "5d6e": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = o(t("ef89")), n = o(t("a1b5")), r = o(t("2f68")), u = o(t("637b")), i = t("0e23");
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function s(e, a) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                a && (l = l.filter(function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable;
                })), t.push.apply(t, l);
            }
            return t;
        }
        function c(e) {
            for (var a = 1; a < arguments.length; a++) {
                var t = null != arguments[a] ? arguments[a] : {};
                a % 2 ? s(Object(t), !0).forEach(function(a) {
                    v(e, a, t[a]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(a) {
                    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                });
            }
            return e;
        }
        function v(e, a, t) {
            return a in e ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[a] = t, e;
        }
        function f(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
        }
        function b(e, a) {
            for (var t = 0; t < a.length; t++) {
                var l = a[t];
                l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), 
                Object.defineProperty(e, l.key, l);
            }
        }
        var d = function() {
            function e() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                f(this, e), (0, i.isPlainObject)(a) || (a = {}, console.warn("设置全局参数必须接收一个Object")), 
                this.config = c(c({}, u.default), a), this.interceptors = {
                    request: new n.default(),
                    response: new n.default()
                };
            }
            return function(e, a, t) {
                a && b(e.prototype, a), t && b(e, t);
            }(e, [ {
                key: "setConfig",
                value: function(e) {
                    this.config = e(this.config);
                }
            }, {
                key: "middleware",
                value: function(e) {
                    e = (0, r.default)(this.config, e);
                    var a = [ l.default, void 0 ], t = Promise.resolve(e);
                    for (this.interceptors.request.forEach(function(e) {
                        a.unshift(e.fulfilled, e.rejected);
                    }), this.interceptors.response.forEach(function(e) {
                        a.push(e.fulfilled, e.rejected);
                    }); a.length; ) t = t.then(a.shift(), a.shift());
                    return t;
                }
            }, {
                key: "request",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.middleware(e);
                }
            }, {
                key: "get",
                value: function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.middleware(c({
                        url: e,
                        method: "GET"
                    }, a));
                }
            }, {
                key: "post",
                value: function(e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.middleware(c({
                        url: e,
                        data: a,
                        method: "POST"
                    }, t));
                }
            }, {
                key: "put",
                value: function(e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.middleware(c({
                        url: e,
                        data: a,
                        method: "PUT"
                    }, t));
                }
            }, {
                key: "delete",
                value: function(e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.middleware(c({
                        url: e,
                        data: a,
                        method: "DELETE"
                    }, t));
                }
            }, {
                key: "connect",
                value: function(e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.middleware(c({
                        url: e,
                        data: a,
                        method: "CONNECT"
                    }, t));
                }
            }, {
                key: "head",
                value: function(e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.middleware(c({
                        url: e,
                        data: a,
                        method: "HEAD"
                    }, t));
                }
            }, {
                key: "options",
                value: function(e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.middleware(c({
                        url: e,
                        data: a,
                        method: "OPTIONS"
                    }, t));
                }
            }, {
                key: "trace",
                value: function(e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.middleware(c({
                        url: e,
                        data: a,
                        method: "TRACE"
                    }, t));
                }
            }, {
                key: "upload",
                value: function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return a.url = e, a.method = "UPLOAD", this.middleware(a);
                }
            }, {
                key: "download",
                value: function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return a.url = e, a.method = "DOWNLOAD", this.middleware(a);
                }
            } ]), e;
        }();
        a.default = d;
    },
    "609a": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.listPassPage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/listPassPage",
                method: "post",
                data: e
            });
        }, a.queryPassPage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/queryPassPage",
                method: "post",
                data: e
            });
        }, a.addPass = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/addPass",
                method: "post",
                data: e
            });
        }, a.approvePass = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/approvePass",
                method: "post",
                data: e
            });
        };
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("96a5"));
    },
    "637b": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            baseURL: "",
            header: {},
            method: "GET",
            dataType: "json",
            responseType: "text",
            custom: {},
            timeout: 6e4,
            validateStatus: function(e) {
                return e >= 200 && e < 300;
            }
        };
    },
    6683: function(e, a) {
        e.exports = {
            localMsgStorageMaxCount: 200,
            addDailyHealthLimitHour: 23,
            fudaHome: "https://ykt-sj.fzu.edu.cn",
            fudaProjectId: 116596,
            apiRootUrl: "https://open.lppstore.com/",
            baseApiUrl: "https://open.lppstore.com/api",
            fudaSSOClientId: "yqfkFZUzs",
            fudaSSOAuthorizeUrl: "https://sso.fzu.edu.cn/oauth2.0/authorize?response_type=code&client_id={clientId}&redirect_uri={redirectUri}&openid={wxOpenId}&from={from}",
            fudaSSOAuthorizedCallbackUrl: "https://mh5.lppstore.com/v2/#/pages/web/fuda-authorized"
        };
    },
    "66fd": function(a, t, l) {
        l.r(t), function(a) {
            var l = Object.freeze({});
            function n(e) {
                return null == e;
            }
            function r(e) {
                return null != e;
            }
            function u(e) {
                return !0 === e;
            }
            function i(a) {
                return "string" == typeof a || "number" == typeof a || "symbol" === e(a) || "boolean" == typeof a;
            }
            function o(a) {
                return null !== a && "object" === e(a);
            }
            var s = Object.prototype.toString;
            function c(e) {
                return "[object Object]" === s.call(e);
            }
            function v(e) {
                var a = parseFloat(String(e));
                return a >= 0 && Math.floor(a) === a && isFinite(e);
            }
            function f(e) {
                return r(e) && "function" == typeof e.then && "function" == typeof e.catch;
            }
            function b(e) {
                return null == e ? "" : Array.isArray(e) || c(e) && e.toString === s ? JSON.stringify(e, null, 2) : String(e);
            }
            function d(e) {
                var a = parseFloat(e);
                return isNaN(a) ? e : a;
            }
            function h(e, a) {
                for (var t = Object.create(null), l = e.split(","), n = 0; n < l.length; n++) t[l[n]] = !0;
                return a ? function(e) {
                    return t[e.toLowerCase()];
                } : function(e) {
                    return t[e];
                };
            }
            h("slot,component", !0);
            var p = h("key,ref,slot,slot-scope,is");
            function g(e, a) {
                if (e.length) {
                    var t = e.indexOf(a);
                    if (t > -1) return e.splice(t, 1);
                }
            }
            var y = Object.prototype.hasOwnProperty;
            function m(e, a) {
                return y.call(e, a);
            }
            function _(e) {
                var a = Object.create(null);
                return function(t) {
                    return a[t] || (a[t] = e(t));
                };
            }
            var w = /-(\w)/g, k = _(function(e) {
                return e.replace(w, function(e, a) {
                    return a ? a.toUpperCase() : "";
                });
            }), O = _(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }), x = /\B([A-Z])/g, A = _(function(e) {
                return e.replace(x, "-$1").toLowerCase();
            });
            var P = Function.prototype.bind ? function(e, a) {
                return e.bind(a);
            } : function(e, a) {
                function t(t) {
                    var l = arguments.length;
                    return l ? l > 1 ? e.apply(a, arguments) : e.call(a, t) : e.call(a);
                }
                return t._length = e.length, t;
            };
            function S(e, a) {
                a = a || 0;
                for (var t = e.length - a, l = new Array(t); t--; ) l[t] = e[t + a];
                return l;
            }
            function T(e, a) {
                for (var t in a) e[t] = a[t];
                return e;
            }
            function j(e) {
                for (var a = {}, t = 0; t < e.length; t++) e[t] && T(a, e[t]);
                return a;
            }
            function C(e, a, t) {}
            var E = function(e, a, t) {
                return !1;
            }, I = function(e) {
                return e;
            };
            function D(e, a) {
                if (e === a) return !0;
                var t = o(e), l = o(a);
                if (!t || !l) return !t && !l && String(e) === String(a);
                try {
                    var n = Array.isArray(e), r = Array.isArray(a);
                    if (n && r) return e.length === a.length && e.every(function(e, t) {
                        return D(e, a[t]);
                    });
                    if (e instanceof Date && a instanceof Date) return e.getTime() === a.getTime();
                    if (n || r) return !1;
                    var u = Object.keys(e), i = Object.keys(a);
                    return u.length === i.length && u.every(function(t) {
                        return D(e[t], a[t]);
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }
            function $(e, a) {
                for (var t = 0; t < e.length; t++) if (D(e[t], a)) return t;
                return -1;
            }
            function L(e) {
                var a = !1;
                return function() {
                    a || (a = !0, e.apply(this, arguments));
                };
            }
            var M = [ "component", "directive", "filter" ], R = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], N = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: E,
                isReservedAttr: E,
                isUnknownElement: E,
                getTagNamespace: C,
                parsePlatformTagName: I,
                mustUseProp: E,
                async: !0,
                _lifecycleHooks: R
            };
            function U(e) {
                var a = (e + "").charCodeAt(0);
                return 36 === a || 95 === a;
            }
            function q(e, a, t, l) {
                Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !!l,
                    writable: !0,
                    configurable: !0
                });
            }
            var F = new RegExp("[^" + /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source + ".$_\\d]");
            var B, H = "__proto__" in {}, V = "undefined" != typeof window, z = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, K = z && WXEnvironment.platform.toLowerCase(), W = V && window.navigator.userAgent.toLowerCase(), G = W && /msie|trident/.test(W), J = (W && W.indexOf("msie 9.0"), 
            W && W.indexOf("edge/"), W && W.indexOf("android"), W && /iphone|ipad|ipod|ios/.test(W) || "ios" === K), X = (W && /chrome\/\d+/.test(W), 
            W && /phantomjs/.test(W), W && W.match(/firefox\/(\d+)/), {}.watch);
            if (V) try {
                var Z = {};
                Object.defineProperty(Z, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, Z);
            } catch (e) {}
            var Y = function() {
                return void 0 === B && (B = !V && !z && void 0 !== a && a.process && "server" === a.process.env.VUE_ENV), 
                B;
            }, Q = V && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            function ee(e) {
                return "function" == typeof e && /native code/.test(e.toString());
            }
            var ae, te = "undefined" != typeof Symbol && ee(Symbol) && "undefined" != typeof Reflect && ee(Reflect.ownKeys);
            ae = "undefined" != typeof Set && ee(Set) ? Set : function() {
                function e() {
                    this.set = Object.create(null);
                }
                return e.prototype.has = function(e) {
                    return !0 === this.set[e];
                }, e.prototype.add = function(e) {
                    this.set[e] = !0;
                }, e.prototype.clear = function() {
                    this.set = Object.create(null);
                }, e;
            }();
            var le = C, ne = 0, re = function() {
                this.id = ne++, this.subs = [];
            };
            function ue(e) {
                re.SharedObject.targetStack.push(e), re.SharedObject.target = e, re.target = e;
            }
            function ie() {
                re.SharedObject.targetStack.pop(), re.SharedObject.target = re.SharedObject.targetStack[re.SharedObject.targetStack.length - 1], 
                re.target = re.SharedObject.target;
            }
            re.prototype.addSub = function(e) {
                this.subs.push(e);
            }, re.prototype.removeSub = function(e) {
                g(this.subs, e);
            }, re.prototype.depend = function() {
                re.SharedObject.target && re.SharedObject.target.addDep(this);
            }, re.prototype.notify = function() {
                for (var e = this.subs.slice(), a = 0, t = e.length; a < t; a++) e[a].update();
            }, (re.SharedObject = {}).target = null, re.SharedObject.targetStack = [];
            var oe = function(e, a, t, l, n, r, u, i) {
                this.tag = e, this.data = a, this.children = t, this.text = l, this.elm = n, this.ns = void 0, 
                this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = a && a.key, this.componentOptions = u, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = i, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, se = {
                child: {
                    configurable: !0
                }
            };
            se.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(oe.prototype, se);
            var ce = function(e) {
                void 0 === e && (e = "");
                var a = new oe();
                return a.text = e, a.isComment = !0, a;
            };
            function ve(e) {
                return new oe(void 0, void 0, void 0, String(e));
            }
            var fe = Array.prototype, be = Object.create(fe);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
                var a = fe[e];
                q(be, e, function() {
                    for (var t = [], l = arguments.length; l--; ) t[l] = arguments[l];
                    var n, r = a.apply(this, t), u = this.__ob__;
                    switch (e) {
                      case "push":
                      case "unshift":
                        n = t;
                        break;

                      case "splice":
                        n = t.slice(2);
                    }
                    return n && u.observeArray(n), u.dep.notify(), r;
                });
            });
            var de = Object.getOwnPropertyNames(be), he = !0;
            function pe(e) {
                he = e;
            }
            var ge = function(e) {
                this.value = e, this.dep = new re(), this.vmCount = 0, q(e, "__ob__", this), Array.isArray(e) ? (H ? e.push !== e.__proto__.push ? ye(e, be, de) : function(e, a) {
                    e.__proto__ = a;
                }(e, be) : ye(e, be, de), this.observeArray(e)) : this.walk(e);
            };
            function ye(e, a, t) {
                for (var l = 0, n = t.length; l < n; l++) {
                    var r = t[l];
                    q(e, r, a[r]);
                }
            }
            function me(e, a) {
                var t;
                if (o(e) && !(e instanceof oe)) return m(e, "__ob__") && e.__ob__ instanceof ge ? t = e.__ob__ : he && !Y() && (Array.isArray(e) || c(e)) && Object.isExtensible(e) && !e._isVue && (t = new ge(e)), 
                a && t && t.vmCount++, t;
            }
            function _e(e, a, t, l, n) {
                var r = new re(), u = Object.getOwnPropertyDescriptor(e, a);
                if (!u || !1 !== u.configurable) {
                    var i = u && u.get, o = u && u.set;
                    i && !o || 2 !== arguments.length || (t = e[a]);
                    var s = !n && me(t);
                    Object.defineProperty(e, a, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var a = i ? i.call(e) : t;
                            return re.SharedObject.target && (r.depend(), s && (s.dep.depend(), Array.isArray(a) && Oe(a))), 
                            a;
                        },
                        set: function(a) {
                            var l = i ? i.call(e) : t;
                            a === l || a != a && l != l || i && !o || (o ? o.call(e, a) : t = a, s = !n && me(a), 
                            r.notify());
                        }
                    });
                }
            }
            function we(e, a, t) {
                if (Array.isArray(e) && v(a)) return e.length = Math.max(e.length, a), e.splice(a, 1, t), 
                t;
                if (a in e && !(a in Object.prototype)) return e[a] = t, t;
                var l = e.__ob__;
                return e._isVue || l && l.vmCount ? t : l ? (_e(l.value, a, t), l.dep.notify(), 
                t) : (e[a] = t, t);
            }
            function ke(e, a) {
                if (Array.isArray(e) && v(a)) e.splice(a, 1); else {
                    var t = e.__ob__;
                    e._isVue || t && t.vmCount || m(e, a) && (delete e[a], t && t.dep.notify());
                }
            }
            function Oe(e) {
                for (var a = void 0, t = 0, l = e.length; t < l; t++) (a = e[t]) && a.__ob__ && a.__ob__.dep.depend(), 
                Array.isArray(a) && Oe(a);
            }
            ge.prototype.walk = function(e) {
                for (var a = Object.keys(e), t = 0; t < a.length; t++) _e(e, a[t]);
            }, ge.prototype.observeArray = function(e) {
                for (var a = 0, t = e.length; a < t; a++) me(e[a]);
            };
            var xe = N.optionMergeStrategies;
            function Ae(e, a) {
                if (!a) return e;
                for (var t, l, n, r = te ? Reflect.ownKeys(a) : Object.keys(a), u = 0; u < r.length; u++) "__ob__" !== (t = r[u]) && (l = e[t], 
                n = a[t], m(e, t) ? l !== n && c(l) && c(n) && Ae(l, n) : we(e, t, n));
                return e;
            }
            function Pe(e, a, t) {
                return t ? function() {
                    var l = "function" == typeof a ? a.call(t, t) : a, n = "function" == typeof e ? e.call(t, t) : e;
                    return l ? Ae(l, n) : n;
                } : a ? e ? function() {
                    return Ae("function" == typeof a ? a.call(this, this) : a, "function" == typeof e ? e.call(this, this) : e);
                } : a : e;
            }
            function Se(e, a) {
                var t = a ? e ? e.concat(a) : Array.isArray(a) ? a : [ a ] : e;
                return t ? function(e) {
                    for (var a = [], t = 0; t < e.length; t++) -1 === a.indexOf(e[t]) && a.push(e[t]);
                    return a;
                }(t) : t;
            }
            function Te(e, a, t, l) {
                var n = Object.create(e || null);
                return a ? T(n, a) : n;
            }
            xe.data = function(e, a, t) {
                return t ? Pe(e, a, t) : a && "function" != typeof a ? e : Pe(e, a);
            }, R.forEach(function(e) {
                xe[e] = Se;
            }), M.forEach(function(e) {
                xe[e + "s"] = Te;
            }), xe.watch = function(e, a, t, l) {
                if (e === X && (e = void 0), a === X && (a = void 0), !a) return Object.create(e || null);
                if (!e) return a;
                var n = {};
                for (var r in T(n, e), a) {
                    var u = n[r], i = a[r];
                    u && !Array.isArray(u) && (u = [ u ]), n[r] = u ? u.concat(i) : Array.isArray(i) ? i : [ i ];
                }
                return n;
            }, xe.props = xe.methods = xe.inject = xe.computed = function(e, a, t, l) {
                if (!e) return a;
                var n = Object.create(null);
                return T(n, e), a && T(n, a), n;
            }, xe.provide = Pe;
            var je = function(e, a) {
                return void 0 === a ? e : a;
            };
            function Ce(e, a, t) {
                if ("function" == typeof a && (a = a.options), function(e, a) {
                    var t = e.props;
                    if (t) {
                        var l, n, r = {};
                        if (Array.isArray(t)) for (l = t.length; l--; ) "string" == typeof (n = t[l]) && (r[k(n)] = {
                            type: null
                        }); else if (c(t)) for (var u in t) n = t[u], r[k(u)] = c(n) ? n : {
                            type: n
                        };
                        e.props = r;
                    }
                }(a), function(e, a) {
                    var t = e.inject;
                    if (t) {
                        var l = e.inject = {};
                        if (Array.isArray(t)) for (var n = 0; n < t.length; n++) l[t[n]] = {
                            from: t[n]
                        }; else if (c(t)) for (var r in t) {
                            var u = t[r];
                            l[r] = c(u) ? T({
                                from: r
                            }, u) : {
                                from: u
                            };
                        }
                    }
                }(a), function(e) {
                    var a = e.directives;
                    if (a) for (var t in a) {
                        var l = a[t];
                        "function" == typeof l && (a[t] = {
                            bind: l,
                            update: l
                        });
                    }
                }(a), !a._base && (a.extends && (e = Ce(e, a.extends, t)), a.mixins)) for (var l = 0, n = a.mixins.length; l < n; l++) e = Ce(e, a.mixins[l], t);
                var r, u = {};
                for (r in e) i(r);
                for (r in a) m(e, r) || i(r);
                function i(l) {
                    var n = xe[l] || je;
                    u[l] = n(e[l], a[l], t, l);
                }
                return u;
            }
            function Ee(e, a, t, l) {
                if ("string" == typeof t) {
                    var n = e[a];
                    if (m(n, t)) return n[t];
                    var r = k(t);
                    if (m(n, r)) return n[r];
                    var u = O(r);
                    return m(n, u) ? n[u] : n[t] || n[r] || n[u];
                }
            }
            function Ie(e, a, t, l) {
                var n = a[e], r = !m(t, e), u = t[e], i = Le(Boolean, n.type);
                if (i > -1) if (r && !m(n, "default")) u = !1; else if ("" === u || u === A(e)) {
                    var o = Le(String, n.type);
                    (o < 0 || i < o) && (u = !0);
                }
                if (void 0 === u) {
                    u = function(e, a, t) {
                        if (m(a, "default")) {
                            var l = a.default;
                            return e && e.$options.propsData && void 0 === e.$options.propsData[t] && void 0 !== e._props[t] ? e._props[t] : "function" == typeof l && "Function" !== De(a.type) ? l.call(e) : l;
                        }
                    }(l, n, e);
                    var s = he;
                    pe(!0), me(u), pe(s);
                }
                return u;
            }
            function De(e) {
                var a = e && e.toString().match(/^\s*function (\w+)/);
                return a ? a[1] : "";
            }
            function $e(e, a) {
                return De(e) === De(a);
            }
            function Le(e, a) {
                if (!Array.isArray(a)) return $e(a, e) ? 0 : -1;
                for (var t = 0, l = a.length; t < l; t++) if ($e(a[t], e)) return t;
                return -1;
            }
            function Me(e, a, t) {
                ue();
                try {
                    if (a) for (var l = a; l = l.$parent; ) {
                        var n = l.$options.errorCaptured;
                        if (n) for (var r = 0; r < n.length; r++) try {
                            if (!1 === n[r].call(l, e, a, t)) return;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            Ne(e, l, "errorCaptured hook");
                        }
                    }
                    Ne(e, a, t);
                } finally {
                    ie();
                }
            }
            function Re(e, a, t, l, n) {
                var r;
                try {
                    (r = t ? e.apply(a, t) : e.call(a)) && !r._isVue && f(r) && !r._handled && (r.catch(function(e) {
                        return Me(e, l, n + " (Promise/async)");
                    }), r._handled = !0);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    Me(e, l, n);
                }
                return r;
            }
            function Ne(e, a, t) {
                if (N.errorHandler) try {
                    return N.errorHandler.call(null, e, a, t);
                } catch (a) {
                    a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                    a !== e && Ue(a, null, "config.errorHandler");
                }
                Ue(e, a, t);
            }
            function Ue(e, a, t) {
                if (!V && !z || "undefined" == typeof console) throw e;
                console.error(e);
            }
            var qe, Fe = [], Be = !1;
            function He() {
                Be = !1;
                var e = Fe.slice(0);
                Fe.length = 0;
                for (var a = 0; a < e.length; a++) e[a]();
            }
            if ("undefined" != typeof Promise && ee(Promise)) {
                var Ve = Promise.resolve();
                qe = function() {
                    Ve.then(He), J && setTimeout(C);
                };
            } else if (G || "undefined" == typeof MutationObserver || !ee(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) qe = "undefined" != typeof setImmediate && ee(setImmediate) ? function() {
                setImmediate(He);
            } : function() {
                setTimeout(He, 0);
            }; else {
                var ze = 1, Ke = new MutationObserver(He), We = document.createTextNode(String(ze));
                Ke.observe(We, {
                    characterData: !0
                }), qe = function() {
                    ze = (ze + 1) % 2, We.data = String(ze);
                };
            }
            function Ge(e, a) {
                var t;
                if (Fe.push(function() {
                    if (e) try {
                        e.call(a);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        Me(e, a, "nextTick");
                    } else t && t(a);
                }), Be || (Be = !0, qe()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                    t = e;
                });
            }
            var Je = new ae();
            function Xe(e) {
                (function e(a, t) {
                    var l, n, r = Array.isArray(a);
                    if (!(!r && !o(a) || Object.isFrozen(a) || a instanceof oe)) {
                        if (a.__ob__) {
                            var u = a.__ob__.dep.id;
                            if (t.has(u)) return;
                            t.add(u);
                        }
                        if (r) for (l = a.length; l--; ) e(a[l], t); else for (n = Object.keys(a), l = n.length; l--; ) e(a[n[l]], t);
                    }
                })(e, Je), Je.clear();
            }
            var Ze = _(function(e) {
                var a = "&" === e.charAt(0), t = "~" === (e = a ? e.slice(1) : e).charAt(0), l = "!" === (e = t ? e.slice(1) : e).charAt(0);
                return {
                    name: e = l ? e.slice(1) : e,
                    once: t,
                    capture: l,
                    passive: a
                };
            });
            function Ye(e, a) {
                function t() {
                    var e = arguments, l = t.fns;
                    if (!Array.isArray(l)) return Re(l, null, arguments, a, "v-on handler");
                    for (var n = l.slice(), r = 0; r < n.length; r++) Re(n[r], null, e, a, "v-on handler");
                }
                return t.fns = e, t;
            }
            function Qe(e, a, t, l) {
                var u = a.options.mpOptions && a.options.mpOptions.properties;
                if (n(u)) return t;
                var i = a.options.mpOptions.externalClasses || [], o = e.attrs, s = e.props;
                if (r(o) || r(s)) for (var c in u) {
                    var v = A(c);
                    (ea(t, s, c, v, !0) || ea(t, o, c, v, !1)) && t[c] && -1 !== i.indexOf(v) && l[k(t[c])] && (t[c] = l[k(t[c])]);
                }
                return t;
            }
            function ea(e, a, t, l, n) {
                if (r(a)) {
                    if (m(a, t)) return e[t] = a[t], n || delete a[t], !0;
                    if (m(a, l)) return e[t] = a[l], n || delete a[l], !0;
                }
                return !1;
            }
            function aa(e) {
                return i(e) ? [ ve(e) ] : Array.isArray(e) ? function e(a, t) {
                    var l, o, s, c, v = [];
                    for (l = 0; l < a.length; l++) n(o = a[l]) || "boolean" == typeof o || (s = v.length - 1, 
                    c = v[s], Array.isArray(o) ? o.length > 0 && (ta((o = e(o, (t || "") + "_" + l))[0]) && ta(c) && (v[s] = ve(c.text + o[0].text), 
                    o.shift()), v.push.apply(v, o)) : i(o) ? ta(c) ? v[s] = ve(c.text + o) : "" !== o && v.push(ve(o)) : ta(o) && ta(c) ? v[s] = ve(c.text + o.text) : (u(a._isVList) && r(o.tag) && n(o.key) && r(t) && (o.key = "__vlist" + t + "_" + l + "__"), 
                    v.push(o)));
                    return v;
                }(e) : void 0;
            }
            function ta(e) {
                return r(e) && r(e.text) && function(e) {
                    return !1 === e;
                }(e.isComment);
            }
            function la(e) {
                var a = e.$options.provide;
                a && (e._provided = "function" == typeof a ? a.call(e) : a);
            }
            function na(e) {
                var a = ra(e.$options.inject, e);
                a && (pe(!1), Object.keys(a).forEach(function(t) {
                    _e(e, t, a[t]);
                }), pe(!0));
            }
            function ra(e, a) {
                if (e) {
                    for (var t = Object.create(null), l = te ? Reflect.ownKeys(e) : Object.keys(e), n = 0; n < l.length; n++) {
                        var r = l[n];
                        if ("__ob__" !== r) {
                            for (var u = e[r].from, i = a; i; ) {
                                if (i._provided && m(i._provided, u)) {
                                    t[r] = i._provided[u];
                                    break;
                                }
                                i = i.$parent;
                            }
                            if (!i && "default" in e[r]) {
                                var o = e[r].default;
                                t[r] = "function" == typeof o ? o.call(a) : o;
                            }
                        }
                    }
                    return t;
                }
            }
            function ua(e, a) {
                if (!e || !e.length) return {};
                for (var t = {}, l = 0, n = e.length; l < n; l++) {
                    var r = e[l], u = r.data;
                    if (u && u.attrs && u.attrs.slot && delete u.attrs.slot, r.context !== a && r.fnContext !== a || !u || null == u.slot) r.asyncMeta && r.asyncMeta.data && "page" === r.asyncMeta.data.slot ? (t.page || (t.page = [])).push(r) : (t.default || (t.default = [])).push(r); else {
                        var i = u.slot, o = t[i] || (t[i] = []);
                        "template" === r.tag ? o.push.apply(o, r.children || []) : o.push(r);
                    }
                }
                for (var s in t) t[s].every(ia) && delete t[s];
                return t;
            }
            function ia(e) {
                return e.isComment && !e.asyncFactory || " " === e.text;
            }
            function oa(e, a, t) {
                var n, r = Object.keys(a).length > 0, u = e ? !!e.$stable : !r, i = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (u && t && t !== l && i === t.$key && !r && !t.$hasNormal) return t;
                    for (var o in n = {}, e) e[o] && "$" !== o[0] && (n[o] = sa(a, o, e[o]));
                } else n = {};
                for (var s in a) s in n || (n[s] = ca(a, s));
                return e && Object.isExtensible(e) && (e._normalized = n), q(n, "$stable", u), q(n, "$key", i), 
                q(n, "$hasNormal", r), n;
            }
            function sa(a, t, l) {
                var n = function() {
                    var a = arguments.length ? l.apply(null, arguments) : l({});
                    return (a = a && "object" === e(a) && !Array.isArray(a) ? [ a ] : aa(a)) && (0 === a.length || 1 === a.length && a[0].isComment) ? void 0 : a;
                };
                return l.proxy && Object.defineProperty(a, t, {
                    get: n,
                    enumerable: !0,
                    configurable: !0
                }), n;
            }
            function ca(e, a) {
                return function() {
                    return e[a];
                };
            }
            function va(e, a) {
                var t, l, n, u, i;
                if (Array.isArray(e) || "string" == typeof e) for (t = new Array(e.length), l = 0, 
                n = e.length; l < n; l++) t[l] = a(e[l], l, l, l); else if ("number" == typeof e) for (t = new Array(e), 
                l = 0; l < e; l++) t[l] = a(l + 1, l, l, l); else if (o(e)) if (te && e[Symbol.iterator]) {
                    t = [];
                    for (var s = e[Symbol.iterator](), c = s.next(); !c.done; ) t.push(a(c.value, t.length, l, l++)), 
                    c = s.next();
                } else for (u = Object.keys(e), t = new Array(u.length), l = 0, n = u.length; l < n; l++) i = u[l], 
                t[l] = a(e[i], i, l, l);
                return r(t) || (t = []), t._isVList = !0, t;
            }
            function fa(e, a, t, l) {
                var n, r = this.$scopedSlots[e];
                r ? (t = t || {}, l && (t = T(T({}, l), t)), n = r(t, this, t._i) || a) : n = this.$slots[e] || a;
                var u = t && t.slot;
                return u ? this.$createElement("template", {
                    slot: u
                }, n) : n;
            }
            function ba(e) {
                return Ee(this.$options, "filters", e) || I;
            }
            function da(e, a) {
                return Array.isArray(e) ? -1 === e.indexOf(a) : e !== a;
            }
            function ha(e, a, t, l, n) {
                var r = N.keyCodes[a] || t;
                return n && l && !N.keyCodes[a] ? da(n, l) : r ? da(r, e) : l ? A(l) !== a : void 0;
            }
            function pa(e, a, t, l, n) {
                if (t && o(t)) {
                    var r;
                    Array.isArray(t) && (t = j(t));
                    var u = function(u) {
                        if ("class" === u || "style" === u || p(u)) r = e; else {
                            var i = e.attrs && e.attrs.type;
                            r = l || N.mustUseProp(a, i, u) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                        }
                        var o = k(u), s = A(u);
                        o in r || s in r || (r[u] = t[u], !n) || ((e.on || (e.on = {}))["update:" + u] = function(e) {
                            t[u] = e;
                        });
                    };
                    for (var i in t) u(i);
                }
                return e;
            }
            function ga(e, a) {
                var t = this._staticTrees || (this._staticTrees = []), l = t[e];
                return l && !a || ma(l = t[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), 
                l;
            }
            function ya(e, a, t) {
                return ma(e, "__once__" + a + (t ? "_" + t : ""), !0), e;
            }
            function ma(e, a, t) {
                if (Array.isArray(e)) for (var l = 0; l < e.length; l++) e[l] && "string" != typeof e[l] && _a(e[l], a + "_" + l, t); else _a(e, a, t);
            }
            function _a(e, a, t) {
                e.isStatic = !0, e.key = a, e.isOnce = t;
            }
            function wa(e, a) {
                if (a && c(a)) {
                    var t = e.on = e.on ? T({}, e.on) : {};
                    for (var l in a) {
                        var n = t[l], r = a[l];
                        t[l] = n ? [].concat(n, r) : r;
                    }
                }
                return e;
            }
            function ka(e, a, t, l) {
                a = a || {
                    $stable: !t
                };
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    Array.isArray(r) ? ka(r, a, t) : r && (r.proxy && (r.fn.proxy = !0), a[r.key] = r.fn);
                }
                return l && (a.$key = l), a;
            }
            function Oa(e, a) {
                for (var t = 0; t < a.length; t += 2) {
                    var l = a[t];
                    "string" == typeof l && l && (e[a[t]] = a[t + 1]);
                }
                return e;
            }
            function xa(e, a) {
                return "string" == typeof e ? a + e : e;
            }
            function Aa(e) {
                e._o = ya, e._n = d, e._s = b, e._l = va, e._t = fa, e._q = D, e._i = $, e._m = ga, 
                e._f = ba, e._k = ha, e._b = pa, e._v = ve, e._e = ce, e._u = ka, e._g = wa, e._d = Oa, 
                e._p = xa;
            }
            function Pa(e, a, t, n, r) {
                var i, o = this, s = r.options;
                m(n, "_uid") ? (i = Object.create(n))._original = n : (i = n, n = n._original);
                var c = u(s._compiled), v = !c;
                this.data = e, this.props = a, this.children = t, this.parent = n, this.listeners = e.on || l, 
                this.injections = ra(s.inject, n), this.slots = function() {
                    return o.$slots || oa(e.scopedSlots, o.$slots = ua(t, n)), o.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return oa(e.scopedSlots, this.slots());
                    }
                }), c && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = oa(e.scopedSlots, this.$slots)), 
                s._scopeId ? this._c = function(e, a, t, l) {
                    var r = $a(i, e, a, t, l, v);
                    return r && !Array.isArray(r) && (r.fnScopeId = s._scopeId, r.fnContext = n), r;
                } : this._c = function(e, a, t, l) {
                    return $a(i, e, a, t, l, v);
                };
            }
            function Sa(e, a, t, n, u) {
                var i = e.options, o = {}, s = i.props;
                if (r(s)) for (var c in s) o[c] = Ie(c, s, a || l); else r(t.attrs) && ja(o, t.attrs), 
                r(t.props) && ja(o, t.props);
                var v = new Pa(t, o, u, n, e), f = i.render.call(null, v._c, v);
                if (f instanceof oe) return Ta(f, t, v.parent, i, v);
                if (Array.isArray(f)) {
                    for (var b = aa(f) || [], d = new Array(b.length), h = 0; h < b.length; h++) d[h] = Ta(b[h], t, v.parent, i, v);
                    return d;
                }
            }
            function Ta(e, a, t, l, n) {
                var r = function(e) {
                    var a = new oe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                    return a.ns = e.ns, a.isStatic = e.isStatic, a.key = e.key, a.isComment = e.isComment, 
                    a.fnContext = e.fnContext, a.fnOptions = e.fnOptions, a.fnScopeId = e.fnScopeId, 
                    a.asyncMeta = e.asyncMeta, a.isCloned = !0, a;
                }(e);
                return r.fnContext = t, r.fnOptions = l, a.slot && ((r.data || (r.data = {})).slot = a.slot), 
                r;
            }
            function ja(e, a) {
                for (var t in a) e[k(t)] = a[t];
            }
            Aa(Pa.prototype);
            var Ca = {
                init: function(e, a) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var t = e;
                        Ca.prepatch(t, t);
                    } else {
                        (e.componentInstance = function(e, a) {
                            var t = {
                                _isComponent: !0,
                                _parentVnode: e,
                                parent: a
                            }, l = e.data.inlineTemplate;
                            return r(l) && (t.render = l.render, t.staticRenderFns = l.staticRenderFns), new e.componentOptions.Ctor(t);
                        }(e, Ga)).$mount(a ? e.elm : void 0, a);
                    }
                },
                prepatch: function(e, a) {
                    var t = a.componentOptions;
                    Ja(a.componentInstance = e.componentInstance, t.propsData, t.listeners, a, t.children);
                },
                insert: function(e) {
                    var a = e.context, t = e.componentInstance;
                    t._isMounted || (Ya(t, "onServiceCreated"), Ya(t, "onServiceAttached"), t._isMounted = !0, 
                    Ya(t, "mounted")), e.data.keepAlive && (a._isMounted ? function(e) {
                        e._inactive = !1, et.push(e);
                    }(t) : Za(t, !0));
                },
                destroy: function(e) {
                    var a = e.componentInstance;
                    a._isDestroyed || (e.data.keepAlive ? function e(a, t) {
                        if (!(t && (a._directInactive = !0, Xa(a)) || a._inactive)) {
                            a._inactive = !0;
                            for (var l = 0; l < a.$children.length; l++) e(a.$children[l]);
                            Ya(a, "deactivated");
                        }
                    }(a, !0) : a.$destroy());
                }
            }, Ea = Object.keys(Ca);
            function Ia(e, a, t, l, i) {
                if (!n(e)) {
                    var s = t.$options._base;
                    if (o(e) && (e = s.extend(e)), "function" == typeof e) {
                        var c;
                        if (n(e.cid) && void 0 === (e = Fa(c = e, s))) return function(e, a, t, l, n) {
                            var r = ce();
                            return r.asyncFactory = e, r.asyncMeta = {
                                data: a,
                                context: t,
                                children: l,
                                tag: n
                            }, r;
                        }(c, a, t, l, i);
                        a = a || {}, mt(e), r(a.model) && function(e, a) {
                            var t = e.model && e.model.prop || "value", l = e.model && e.model.event || "input";
                            (a.attrs || (a.attrs = {}))[t] = a.model.value;
                            var n = a.on || (a.on = {}), u = n[l], i = a.model.callback;
                            r(u) ? (Array.isArray(u) ? -1 === u.indexOf(i) : u !== i) && (n[l] = [ i ].concat(u)) : n[l] = i;
                        }(e.options, a);
                        var v = function(e, a, t, l) {
                            var u = a.options.props;
                            if (n(u)) return Qe(e, a, {}, l);
                            var i = {}, o = e.attrs, s = e.props;
                            if (r(o) || r(s)) for (var c in u) {
                                var v = A(c);
                                ea(i, s, c, v, !0) || ea(i, o, c, v, !1);
                            }
                            return Qe(e, a, i, l);
                        }(a, e, 0, t);
                        if (u(e.options.functional)) return Sa(e, v, a, t, l);
                        var f = a.on;
                        if (a.on = a.nativeOn, u(e.options.abstract)) {
                            var b = a.slot;
                            a = {}, b && (a.slot = b);
                        }
                        !function(e) {
                            for (var a = e.hook || (e.hook = {}), t = 0; t < Ea.length; t++) {
                                var l = Ea[t], n = a[l], r = Ca[l];
                                n === r || n && n._merged || (a[l] = n ? Da(r, n) : r);
                            }
                        }(a);
                        var d = e.options.name || i;
                        return new oe("vue-component-" + e.cid + (d ? "-" + d : ""), a, void 0, void 0, void 0, t, {
                            Ctor: e,
                            propsData: v,
                            listeners: f,
                            tag: i,
                            children: l
                        }, c);
                    }
                }
            }
            function Da(e, a) {
                var t = function(t, l) {
                    e(t, l), a(t, l);
                };
                return t._merged = !0, t;
            }
            function $a(e, a, t, l, n, r) {
                return (Array.isArray(t) || i(t)) && (n = l, l = t, t = void 0), u(r) && (n = 2), 
                La(e, a, t, l, n);
            }
            function La(e, a, t, l, n) {
                return r(t) && r(t.__ob__) ? ce() : (r(t) && r(t.is) && (a = t.is), a ? (Array.isArray(l) && "function" == typeof l[0] && ((t = t || {}).scopedSlots = {
                    default: l[0]
                }, l.length = 0), 2 === n ? l = aa(l) : 1 === n && (l = function(e) {
                    for (var a = 0; a < e.length; a++) if (Array.isArray(e[a])) return Array.prototype.concat.apply([], e);
                    return e;
                }(l)), "string" == typeof a ? (i = e.$vnode && e.$vnode.ns || N.getTagNamespace(a), 
                u = N.isReservedTag(a) ? new oe(N.parsePlatformTagName(a), t, l, void 0, void 0, e) : t && t.pre || !r(o = Ee(e.$options, "components", a)) ? new oe(a, t, l, void 0, void 0, e) : Ia(o, t, e, l, a)) : u = Ia(a, t, e, l), 
                Array.isArray(u) ? u : r(u) ? (r(i) && Ma(u, i), r(t) && Ra(t), u) : ce()) : ce());
                var u, i, o;
            }
            function Ma(e, a, t) {
                if (e.ns = a, "foreignObject" === e.tag && (a = void 0, t = !0), r(e.children)) for (var l = 0, i = e.children.length; l < i; l++) {
                    var o = e.children[l];
                    r(o.tag) && (n(o.ns) || u(t) && "svg" !== o.tag) && Ma(o, a, t);
                }
            }
            function Ra(e) {
                o(e.style) && Xe(e.style), o(e.class) && Xe(e.class);
            }
            var Na, Ua = null;
            function qa(e, a) {
                return (e.__esModule || te && "Module" === e[Symbol.toStringTag]) && (e = e.default), 
                o(e) ? a.extend(e) : e;
            }
            function Fa(e, a) {
                if (u(e.error) && r(e.errorComp)) return e.errorComp;
                if (r(e.resolved)) return e.resolved;
                var t = Ua;
                if (t && r(e.owners) && -1 === e.owners.indexOf(t) && e.owners.push(t), u(e.loading) && r(e.loadingComp)) return e.loadingComp;
                if (t && !r(e.owners)) {
                    var l = e.owners = [ t ], i = !0, s = null, c = null;
                    t.$on("hook:destroyed", function() {
                        return g(l, t);
                    });
                    var v = function(e) {
                        for (var a = 0, t = l.length; a < t; a++) l[a].$forceUpdate();
                        e && (l.length = 0, null !== s && (clearTimeout(s), s = null), null !== c && (clearTimeout(c), 
                        c = null));
                    }, b = L(function(t) {
                        e.resolved = qa(t, a), i ? l.length = 0 : v(!0);
                    }), d = L(function(a) {
                        r(e.errorComp) && (e.error = !0, v(!0));
                    }), h = e(b, d);
                    return o(h) && (f(h) ? n(e.resolved) && h.then(b, d) : f(h.component) && (h.component.then(b, d), 
                    r(h.error) && (e.errorComp = qa(h.error, a)), r(h.loading) && (e.loadingComp = qa(h.loading, a), 
                    0 === h.delay ? e.loading = !0 : s = setTimeout(function() {
                        s = null, n(e.resolved) && n(e.error) && (e.loading = !0, v(!1));
                    }, h.delay || 200)), r(h.timeout) && (c = setTimeout(function() {
                        c = null, n(e.resolved) && d(null);
                    }, h.timeout)))), i = !1, e.loading ? e.loadingComp : e.resolved;
                }
            }
            function Ba(e) {
                return e.isComment && e.asyncFactory;
            }
            function Ha(e) {
                if (Array.isArray(e)) for (var a = 0; a < e.length; a++) {
                    var t = e[a];
                    if (r(t) && (r(t.componentOptions) || Ba(t))) return t;
                }
            }
            function Va(e, a) {
                Na.$on(e, a);
            }
            function za(e, a) {
                Na.$off(e, a);
            }
            function Ka(e, a) {
                var t = Na;
                return function l() {
                    var n = a.apply(null, arguments);
                    null !== n && t.$off(e, l);
                };
            }
            function Wa(e, a, t) {
                Na = e, function(e, a, t, l, r, i) {
                    var o, s, c, v;
                    for (o in e) s = e[o], c = a[o], v = Ze(o), n(s) || (n(c) ? (n(s.fns) && (s = e[o] = Ye(s, i)), 
                    u(v.once) && (s = e[o] = r(v.name, s, v.capture)), t(v.name, s, v.capture, v.passive, v.params)) : s !== c && (c.fns = s, 
                    e[o] = c));
                    for (o in a) n(e[o]) && l((v = Ze(o)).name, a[o], v.capture);
                }(a, t || {}, Va, za, Ka, e), Na = void 0;
            }
            var Ga = null;
            function Ja(e, a, t, n, r) {
                var u = n.data.scopedSlots, i = e.$scopedSlots, o = !!(u && !u.$stable || i !== l && !i.$stable || u && e.$scopedSlots.$key !== u.$key), s = !!(r || e.$options._renderChildren || o);
                if (e.$options._parentVnode = n, e.$vnode = n, e._vnode && (e._vnode.parent = n), 
                e.$options._renderChildren = r, e.$attrs = n.data.attrs || l, e.$listeners = t || l, 
                a && e.$options.props) {
                    pe(!1);
                    for (var c = e._props, v = e.$options._propKeys || [], f = 0; f < v.length; f++) {
                        var b = v[f], d = e.$options.props;
                        c[b] = Ie(b, d, a, e);
                    }
                    pe(!0), e.$options.propsData = a;
                }
                e._$updateProperties && e._$updateProperties(e), t = t || l;
                var h = e.$options._parentListeners;
                e.$options._parentListeners = t, Wa(e, t, h), s && (e.$slots = ua(r, n.context), 
                e.$forceUpdate());
            }
            function Xa(e) {
                for (;e && (e = e.$parent); ) if (e._inactive) return !0;
                return !1;
            }
            function Za(e, a) {
                if (a) {
                    if (e._directInactive = !1, Xa(e)) return;
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var t = 0; t < e.$children.length; t++) Za(e.$children[t]);
                    Ya(e, "activated");
                }
            }
            function Ya(e, a) {
                ue();
                var t = e.$options[a], l = a + " hook";
                if (t) for (var n = 0, r = t.length; n < r; n++) Re(t[n], e, null, e, l);
                e._hasHookEvent && e.$emit("hook:" + a), ie();
            }
            var Qa = [], et = [], at = {}, tt = !1, lt = !1, nt = 0;
            var rt = Date.now;
            if (V && !G) {
                var ut = window.performance;
                ut && "function" == typeof ut.now && rt() > document.createEvent("Event").timeStamp && (rt = function() {
                    return ut.now();
                });
            }
            function it() {
                var e, a;
                for (rt(), lt = !0, Qa.sort(function(e, a) {
                    return e.id - a.id;
                }), nt = 0; nt < Qa.length; nt++) (e = Qa[nt]).before && e.before(), a = e.id, at[a] = null, 
                e.run();
                var t = et.slice(), l = Qa.slice();
                nt = Qa.length = et.length = 0, at = {}, tt = lt = !1, function(e) {
                    for (var a = 0; a < e.length; a++) e[a]._inactive = !0, Za(e[a], !0);
                }(t), function(e) {
                    var a = e.length;
                    for (;a--; ) {
                        var t = e[a], l = t.vm;
                        l._watcher === t && l._isMounted && !l._isDestroyed && Ya(l, "updated");
                    }
                }(l), Q && N.devtools && Q.emit("flush");
            }
            var ot = 0, st = function(e, a, t, l, n) {
                this.vm = e, n && (e._watcher = this), e._watchers.push(this), l ? (this.deep = !!l.deep, 
                this.user = !!l.user, this.lazy = !!l.lazy, this.sync = !!l.sync, this.before = l.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = t, this.id = ++ot, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new ae(), this.newDepIds = new ae(), this.expression = "", 
                "function" == typeof a ? this.getter = a : (this.getter = function(e) {
                    if (!F.test(e)) {
                        var a = e.split(".");
                        return function(e) {
                            for (var t = 0; t < a.length; t++) {
                                if (!e) return;
                                e = e[a[t]];
                            }
                            return e;
                        };
                    }
                }(a), this.getter || (this.getter = C)), this.value = this.lazy ? void 0 : this.get();
            };
            st.prototype.get = function() {
                var e;
                ue(this);
                var a = this.vm;
                try {
                    e = this.getter.call(a, a);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if (!this.user) throw e;
                    Me(e, a, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && Xe(e), ie(), this.cleanupDeps();
                }
                return e;
            }, st.prototype.addDep = function(e) {
                var a = e.id;
                this.newDepIds.has(a) || (this.newDepIds.add(a), this.newDeps.push(e), this.depIds.has(a) || e.addSub(this));
            }, st.prototype.cleanupDeps = function() {
                for (var e = this.deps.length; e--; ) {
                    var a = this.deps[e];
                    this.newDepIds.has(a.id) || a.removeSub(this);
                }
                var t = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = t, this.newDepIds.clear(), t = this.deps, 
                this.deps = this.newDeps, this.newDeps = t, this.newDeps.length = 0;
            }, st.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                    var a = e.id;
                    if (null == at[a]) {
                        if (at[a] = !0, lt) {
                            for (var t = Qa.length - 1; t > nt && Qa[t].id > e.id; ) t--;
                            Qa.splice(t + 1, 0, e);
                        } else Qa.push(e);
                        tt || (tt = !0, Ge(it));
                    }
                }(this);
            }, st.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || o(e) || this.deep) {
                        var a = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, a);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            Me(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, e, a);
                    }
                }
            }, st.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, st.prototype.depend = function() {
                for (var e = this.deps.length; e--; ) this.deps[e].depend();
            }, st.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || g(this.vm._watchers, this);
                    for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
                    this.active = !1;
                }
            };
            var ct = {
                enumerable: !0,
                configurable: !0,
                get: C,
                set: C
            };
            function vt(e, a, t) {
                ct.get = function() {
                    return this[a][t];
                }, ct.set = function(e) {
                    this[a][t] = e;
                }, Object.defineProperty(e, t, ct);
            }
            function ft(e) {
                e._watchers = [];
                var a = e.$options;
                a.props && function(e, a) {
                    var t = e.$options.propsData || {}, l = e._props = {}, n = e.$options._propKeys = [];
                    !e.$parent || pe(!1);
                    var r = function(r) {
                        n.push(r);
                        var u = Ie(r, a, t, e);
                        _e(l, r, u), r in e || vt(e, "_props", r);
                    };
                    for (var u in a) r(u);
                    pe(!0);
                }(e, a.props), a.methods && function(e, a) {
                    for (var t in e.$options.props, a) e[t] = "function" != typeof a[t] ? C : P(a[t], e);
                }(e, a.methods), a.data ? function(e) {
                    var a = e.$options.data;
                    c(a = e._data = "function" == typeof a ? function(e, a) {
                        ue();
                        try {
                            return e.call(a, a);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return Me(e, a, "data()"), {};
                        } finally {
                            ie();
                        }
                    }(a, e) : a || {}) || (a = {});
                    var t = Object.keys(a), l = e.$options.props, n = (e.$options.methods, t.length);
                    for (;n--; ) {
                        var r = t[n];
                        l && m(l, r) || U(r) || vt(e, "_data", r);
                    }
                    me(a, !0);
                }(e) : me(e._data = {}, !0), a.computed && function(e, a) {
                    var t = e._computedWatchers = Object.create(null), l = Y();
                    for (var n in a) {
                        var r = a[n], u = "function" == typeof r ? r : r.get;
                        l || (t[n] = new st(e, u || C, C, bt)), n in e || dt(e, n, r);
                    }
                }(e, a.computed), a.watch && a.watch !== X && function(e, a) {
                    for (var t in a) {
                        var l = a[t];
                        if (Array.isArray(l)) for (var n = 0; n < l.length; n++) gt(e, t, l[n]); else gt(e, t, l);
                    }
                }(e, a.watch);
            }
            var bt = {
                lazy: !0
            };
            function dt(e, a, t) {
                var l = !Y();
                "function" == typeof t ? (ct.get = l ? ht(a) : pt(t), ct.set = C) : (ct.get = t.get ? l && !1 !== t.cache ? ht(a) : pt(t.get) : C, 
                ct.set = t.set || C), Object.defineProperty(e, a, ct);
            }
            function ht(e) {
                return function() {
                    var a = this._computedWatchers && this._computedWatchers[e];
                    if (a) return a.dirty && a.evaluate(), re.SharedObject.target && a.depend(), a.value;
                };
            }
            function pt(e) {
                return function() {
                    return e.call(this, this);
                };
            }
            function gt(e, a, t, l) {
                return c(t) && (l = t, t = t.handler), "string" == typeof t && (t = e[t]), e.$watch(a, t, l);
            }
            var yt = 0;
            function mt(e) {
                var a = e.options;
                if (e.super) {
                    var t = mt(e.super);
                    if (t !== e.superOptions) {
                        e.superOptions = t;
                        var l = function(e) {
                            var a, t = e.options, l = e.sealedOptions;
                            for (var n in t) t[n] !== l[n] && (a || (a = {}), a[n] = t[n]);
                            return a;
                        }(e);
                        l && T(e.extendOptions, l), (a = e.options = Ce(t, e.extendOptions)).name && (a.components[a.name] = e);
                    }
                }
                return a;
            }
            function _t(e) {
                this._init(e);
            }
            function wt(e) {
                e.cid = 0;
                var a = 1;
                e.extend = function(e) {
                    e = e || {};
                    var t = this, l = t.cid, n = e._Ctor || (e._Ctor = {});
                    if (n[l]) return n[l];
                    var r = e.name || t.options.name, u = function(e) {
                        this._init(e);
                    };
                    return (u.prototype = Object.create(t.prototype)).constructor = u, u.cid = a++, 
                    u.options = Ce(t.options, e), u.super = t, u.options.props && function(e) {
                        var a = e.options.props;
                        for (var t in a) vt(e.prototype, "_props", t);
                    }(u), u.options.computed && function(e) {
                        var a = e.options.computed;
                        for (var t in a) dt(e.prototype, t, a[t]);
                    }(u), u.extend = t.extend, u.mixin = t.mixin, u.use = t.use, M.forEach(function(e) {
                        u[e] = t[e];
                    }), r && (u.options.components[r] = u), u.superOptions = t.options, u.extendOptions = e, 
                    u.sealedOptions = T({}, u.options), n[l] = u, u;
                };
            }
            function kt(e) {
                return e && (e.Ctor.options.name || e.tag);
            }
            function Ot(e, a) {
                return Array.isArray(e) ? e.indexOf(a) > -1 : "string" == typeof e ? e.split(",").indexOf(a) > -1 : !!function(e) {
                    return "[object RegExp]" === s.call(e);
                }(e) && e.test(a);
            }
            function xt(e, a) {
                var t = e.cache, l = e.keys, n = e._vnode;
                for (var r in t) {
                    var u = t[r];
                    if (u) {
                        var i = kt(u.componentOptions);
                        i && !a(i) && At(t, r, l, n);
                    }
                }
            }
            function At(e, a, t, l) {
                var n = e[a];
                !n || l && n.tag === l.tag || n.componentInstance.$destroy(), e[a] = null, g(t, a);
            }
            (function(e) {
                e.prototype._init = function(e) {
                    var a = this;
                    a._uid = yt++, a._isVue = !0, e && e._isComponent ? function(e, a) {
                        var t = e.$options = Object.create(e.constructor.options), l = a._parentVnode;
                        t.parent = a.parent, t._parentVnode = l;
                        var n = l.componentOptions;
                        t.propsData = n.propsData, t._parentListeners = n.listeners, t._renderChildren = n.children, 
                        t._componentTag = n.tag, a.render && (t.render = a.render, t.staticRenderFns = a.staticRenderFns);
                    }(a, e) : a.$options = Ce(mt(a.constructor), e || {}, a), a._renderProxy = a, a._self = a, 
                    function(e) {
                        var a = e.$options, t = a.parent;
                        if (t && !a.abstract) {
                            for (;t.$options.abstract && t.$parent; ) t = t.$parent;
                            t.$children.push(e);
                        }
                        e.$parent = t, e.$root = t ? t.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, 
                        e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, 
                        e._isBeingDestroyed = !1;
                    }(a), function(e) {
                        e._events = Object.create(null), e._hasHookEvent = !1;
                        var a = e.$options._parentListeners;
                        a && Wa(e, a);
                    }(a), function(e) {
                        e._vnode = null, e._staticTrees = null;
                        var a = e.$options, t = e.$vnode = a._parentVnode, n = t && t.context;
                        e.$slots = ua(a._renderChildren, n), e.$scopedSlots = l, e._c = function(a, t, l, n) {
                            return $a(e, a, t, l, n, !1);
                        }, e.$createElement = function(a, t, l, n) {
                            return $a(e, a, t, l, n, !0);
                        };
                        var r = t && t.data;
                        _e(e, "$attrs", r && r.attrs || l, null, !0), _e(e, "$listeners", a._parentListeners || l, null, !0);
                    }(a), Ya(a, "beforeCreate"), !a._$fallback && na(a), ft(a), !a._$fallback && la(a), 
                    !a._$fallback && Ya(a, "created"), a.$options.el && a.$mount(a.$options.el);
                };
            })(_t), function(e) {
                Object.defineProperty(e.prototype, "$data", {
                    get: function() {
                        return this._data;
                    }
                }), Object.defineProperty(e.prototype, "$props", {
                    get: function() {
                        return this._props;
                    }
                }), e.prototype.$set = we, e.prototype.$delete = ke, e.prototype.$watch = function(e, a, t) {
                    var l = this;
                    if (c(a)) return gt(l, e, a, t);
                    (t = t || {}).user = !0;
                    var n = new st(l, e, a, t);
                    if (t.immediate) try {
                        a.call(l, n.value);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        Me(e, l, 'callback for immediate watcher "' + n.expression + '"');
                    }
                    return function() {
                        n.teardown();
                    };
                };
            }(_t), function(e) {
                var a = /^hook:/;
                e.prototype.$on = function(e, t) {
                    var l = this;
                    if (Array.isArray(e)) for (var n = 0, r = e.length; n < r; n++) l.$on(e[n], t); else (l._events[e] || (l._events[e] = [])).push(t), 
                    a.test(e) && (l._hasHookEvent = !0);
                    return l;
                }, e.prototype.$once = function(e, a) {
                    var t = this;
                    function l() {
                        t.$off(e, l), a.apply(t, arguments);
                    }
                    return l.fn = a, t.$on(e, l), t;
                }, e.prototype.$off = function(e, a) {
                    var t = this;
                    if (!arguments.length) return t._events = Object.create(null), t;
                    if (Array.isArray(e)) {
                        for (var l = 0, n = e.length; l < n; l++) t.$off(e[l], a);
                        return t;
                    }
                    var r, u = t._events[e];
                    if (!u) return t;
                    if (!a) return t._events[e] = null, t;
                    for (var i = u.length; i--; ) if ((r = u[i]) === a || r.fn === a) {
                        u.splice(i, 1);
                        break;
                    }
                    return t;
                }, e.prototype.$emit = function(e) {
                    var a = this, t = a._events[e];
                    if (t) {
                        t = t.length > 1 ? S(t) : t;
                        for (var l = S(arguments, 1), n = 'event handler for "' + e + '"', r = 0, u = t.length; r < u; r++) Re(t[r], a, l, a, n);
                    }
                    return a;
                };
            }(_t), function(e) {
                e.prototype._update = function(e, a) {
                    var t = this, l = t.$el, n = t._vnode, r = function(e) {
                        var a = Ga;
                        return Ga = e, function() {
                            Ga = a;
                        };
                    }(t);
                    t._vnode = e, t.$el = n ? t.__patch__(n, e) : t.__patch__(t.$el, e, a, !1), r(), 
                    l && (l.__vue__ = null), t.$el && (t.$el.__vue__ = t), t.$vnode && t.$parent && t.$vnode === t.$parent._vnode && (t.$parent.$el = t.$el);
                }, e.prototype.$forceUpdate = function() {
                    this._watcher && this._watcher.update();
                }, e.prototype.$destroy = function() {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        Ya(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var a = e.$parent;
                        !a || a._isBeingDestroyed || e.$options.abstract || g(a.$children, e), e._watcher && e._watcher.teardown();
                        for (var t = e._watchers.length; t--; ) e._watchers[t].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), 
                        Ya(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
                    }
                };
            }(_t), function(e) {
                Aa(e.prototype), e.prototype.$nextTick = function(e) {
                    return Ge(e, this);
                }, e.prototype._render = function() {
                    var e, a = this, t = a.$options, l = t.render, n = t._parentVnode;
                    n && (a.$scopedSlots = oa(n.data.scopedSlots, a.$slots, a.$scopedSlots)), a.$vnode = n;
                    try {
                        Ua = a, e = l.call(a._renderProxy, a.$createElement);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        Me(t, a, "render"), e = a._vnode;
                    } finally {
                        Ua = null;
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof oe || (e = ce()), 
                    e.parent = n, e;
                };
            }(_t);
            var Pt = [ String, RegExp, Array ], St = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: Pt,
                        exclude: Pt,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var e in this.cache) At(this.cache, e, this.keys);
                    },
                    mounted: function() {
                        var e = this;
                        this.$watch("include", function(a) {
                            xt(e, function(e) {
                                return Ot(a, e);
                            });
                        }), this.$watch("exclude", function(a) {
                            xt(e, function(e) {
                                return !Ot(a, e);
                            });
                        });
                    },
                    render: function() {
                        var e = this.$slots.default, a = Ha(e), t = a && a.componentOptions;
                        if (t) {
                            var l = kt(t), n = this.include, r = this.exclude;
                            if (n && (!l || !Ot(n, l)) || r && l && Ot(r, l)) return a;
                            var u = this.cache, i = this.keys, o = null == a.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : a.key;
                            u[o] ? (a.componentInstance = u[o].componentInstance, g(i, o), i.push(o)) : (u[o] = a, 
                            i.push(o), this.max && i.length > parseInt(this.max) && At(u, i[0], i, this._vnode)), 
                            a.data.keepAlive = !0;
                        }
                        return a || e && e[0];
                    }
                }
            };
            (function(e) {
                var a = {
                    get: function() {
                        return N;
                    }
                };
                Object.defineProperty(e, "config", a), e.util = {
                    warn: le,
                    extend: T,
                    mergeOptions: Ce,
                    defineReactive: _e
                }, e.set = we, e.delete = ke, e.nextTick = Ge, e.observable = function(e) {
                    return me(e), e;
                }, e.options = Object.create(null), M.forEach(function(a) {
                    e.options[a + "s"] = Object.create(null);
                }), e.options._base = e, T(e.options.components, St), function(e) {
                    e.use = function(e) {
                        var a = this._installedPlugins || (this._installedPlugins = []);
                        if (a.indexOf(e) > -1) return this;
                        var t = S(arguments, 1);
                        return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : "function" == typeof e && e.apply(null, t), 
                        a.push(e), this;
                    };
                }(e), function(e) {
                    e.mixin = function(e) {
                        return this.options = Ce(this.options, e), this;
                    };
                }(e), wt(e), function(e) {
                    M.forEach(function(a) {
                        e[a] = function(e, t) {
                            return t ? ("component" === a && c(t) && (t.name = t.name || e, t = this.options._base.extend(t)), 
                            "directive" === a && "function" == typeof t && (t = {
                                bind: t,
                                update: t
                            }), this.options[a + "s"][e] = t, t) : this.options[a + "s"][e];
                        };
                    });
                }(e);
            })(_t), Object.defineProperty(_t.prototype, "$isServer", {
                get: Y
            }), Object.defineProperty(_t.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(_t, "FunctionalRenderContext", {
                value: Pa
            }), _t.version = "2.6.11";
            var Tt = "[object Array]", jt = "[object Object]";
            function Ct(e, a) {
                var t = {};
                return function e(a, t) {
                    if (a !== t) {
                        var l = It(a), n = It(t);
                        if (l == jt && n == jt) {
                            if (Object.keys(a).length >= Object.keys(t).length) for (var r in t) {
                                var u = a[r];
                                void 0 === u ? a[r] = null : e(u, t[r]);
                            }
                        } else l == Tt && n == Tt && a.length >= t.length && t.forEach(function(t, l) {
                            e(a[l], t);
                        });
                    }
                }(e, a), function e(a, t, l, n) {
                    if (a !== t) {
                        var r = It(a), u = It(t);
                        if (r == jt) if (u != jt || Object.keys(a).length < Object.keys(t).length) Et(n, l, a); else {
                            var i = function(r) {
                                var u = a[r], i = t[r], o = It(u), s = It(i);
                                if (o != Tt && o != jt) u !== t[r] && Et(n, ("" == l ? "" : l + ".") + r, u); else if (o == Tt) s != Tt || u.length < i.length ? Et(n, ("" == l ? "" : l + ".") + r, u) : u.forEach(function(a, t) {
                                    e(a, i[t], ("" == l ? "" : l + ".") + r + "[" + t + "]", n);
                                }); else if (o == jt) if (s != jt || Object.keys(u).length < Object.keys(i).length) Et(n, ("" == l ? "" : l + ".") + r, u); else for (var c in u) e(u[c], i[c], ("" == l ? "" : l + ".") + r + "." + c, n);
                            };
                            for (var o in a) i(o);
                        } else r == Tt ? u != Tt || a.length < t.length ? Et(n, l, a) : a.forEach(function(a, r) {
                            e(a, t[r], l + "[" + r + "]", n);
                        }) : Et(n, l, a);
                    }
                }(e, a, "", t), t;
            }
            function Et(e, a, t) {
                e[a] = t;
            }
            function It(e) {
                return Object.prototype.toString.call(e);
            }
            function Dt(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    if (Object({
                        VUE_APP_NAME: "lpp-store-mp",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var a = e.$scope;
                        console.log("[" + +new Date() + "][" + (a.is || a.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]");
                    }
                    var t = e.__next_tick_callbacks.slice(0);
                    e.__next_tick_callbacks.length = 0;
                    for (var l = 0; l < t.length; l++) t[l]();
                }
            }
            function $t(e, a) {
                if (!e.__next_tick_pending && !function(e) {
                    return Qa.find(function(a) {
                        return e._watcher === a;
                    });
                }(e)) {
                    if (Object({
                        VUE_APP_NAME: "lpp-store-mp",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var t = e.$scope;
                        console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + e._uid + "]:nextVueTick");
                    }
                    return Ge(a, e);
                }
                if (Object({
                    VUE_APP_NAME: "lpp-store-mp",
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var l = e.$scope;
                    console.log("[" + +new Date() + "][" + (l.is || l.route) + "][" + e._uid + "]:nextMPTick");
                }
                var n;
                if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push(function() {
                    if (a) try {
                        a.call(e);
                    } catch (a) {
                        a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                        Me(a, e, "nextTick");
                    } else n && n(e);
                }), !a && "undefined" != typeof Promise) return new Promise(function(e) {
                    n = e;
                });
            }
            function Lt() {}
            function Mt(e) {
                return Array.isArray(e) ? function(e) {
                    for (var a, t = "", l = 0, n = e.length; l < n; l++) r(a = Mt(e[l])) && "" !== a && (t && (t += " "), 
                    t += a);
                    return t;
                }(e) : o(e) ? function(e) {
                    var a = "";
                    for (var t in e) e[t] && (a && (a += " "), a += t);
                    return a;
                }(e) : "string" == typeof e ? e : "";
            }
            var Rt = _(function(e) {
                var a = {}, t = /:(.+)/;
                return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                    if (e) {
                        var l = e.split(t);
                        l.length > 1 && (a[l[0].trim()] = l[1].trim());
                    }
                }), a;
            });
            var Nt = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ];
            var Ut = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onInit", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
            _t.prototype.__patch__ = function(e, a) {
                var t = this;
                if (null !== a && ("page" === this.mpType || "component" === this.mpType)) {
                    var l = this.$scope, n = Object.create(null);
                    try {
                        n = function(e) {
                            var a = Object.create(null);
                            [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {})).reduce(function(a, t) {
                                return a[t] = e[t], a;
                            }, a);
                            var t = e.__composition_api_state__ || e.__secret_vfa_state__, l = t && t.rawBindings;
                            return l && Object.keys(l).forEach(function(t) {
                                a[t] = e[t];
                            }), Object.assign(a, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (a.name = e.name, 
                            a.value = e.value), JSON.parse(JSON.stringify(a));
                        }(this);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error(e);
                    }
                    n.__webviewId__ = l.data.__webviewId__;
                    var r = Object.create(null);
                    Object.keys(n).forEach(function(e) {
                        r[e] = l.data[e];
                    });
                    var u = !1 === this.$shouldDiffData ? n : Ct(n, r);
                    Object.keys(u).length ? (Object({
                        VUE_APP_NAME: "lpp-store-mp",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (l.is || l.route) + "][" + this._uid + "]差量更新", JSON.stringify(u)), 
                    this.__next_tick_pending = !0, l.setData(u, function() {
                        t.__next_tick_pending = !1, Dt(t);
                    })) : Dt(this);
                }
            }, _t.prototype.$mount = function(e, a) {
                return function(e, a, t) {
                    return e.mpType ? ("app" === e.mpType && (e.$options.render = Lt), e.$options.render || (e.$options.render = Lt), 
                    !e._$fallback && Ya(e, "beforeMount"), new st(e, function() {
                        e._update(e._render(), t);
                    }, C, {
                        before: function() {
                            e._isMounted && !e._isDestroyed && Ya(e, "beforeUpdate");
                        }
                    }, !0), t = !1, e) : e;
                }(this, 0, a);
            }, function(e) {
                var a = e.extend;
                e.extend = function(e) {
                    var t = (e = e || {}).methods;
                    return t && Object.keys(t).forEach(function(a) {
                        -1 !== Ut.indexOf(a) && (e[a] = t[a], delete t[a]);
                    }), a.call(this, e);
                };
                var t = e.config.optionMergeStrategies, l = t.created;
                Ut.forEach(function(e) {
                    t[e] = l;
                }), e.prototype.__lifecycle_hooks__ = Ut;
            }(_t), function(e) {
                e.config.errorHandler = function(a, t, l) {
                    e.util.warn("Error in " + l + ': "' + a.toString() + '"', t), console.error(a);
                    var n = "function" == typeof getApp && getApp();
                    n && n.onError && n.onError(a);
                };
                var a = e.prototype.$emit;
                e.prototype.$emit = function(e) {
                    return this.$scope && e && (this.$scope._triggerEvent || this.$scope.triggerEvent).call(this.$scope, e, {
                        __args__: S(arguments, 1)
                    }), a.apply(this, arguments);
                }, e.prototype.$nextTick = function(e) {
                    return $t(this, e);
                }, Nt.forEach(function(a) {
                    e.prototype[a] = function(e) {
                        return this.$scope && this.$scope[a] ? this.$scope[a](e) : "undefined" != typeof my ? "createSelectorQuery" === a ? my.createSelectorQuery(e) : "createIntersectionObserver" === a ? my.createIntersectionObserver(e) : void 0 : void 0;
                    };
                }), e.prototype.__init_provide = la, e.prototype.__init_injections = na, e.prototype.__call_hook = function(e, a) {
                    var t = this;
                    ue();
                    var l, n = t.$options[e], r = e + " hook";
                    if (n) for (var u = 0, i = n.length; u < i; u++) l = Re(n[u], t, a ? [ a ] : null, t, r);
                    return t._hasHookEvent && t.$emit("hook:" + e, a), ie(), l;
                }, e.prototype.__set_model = function(a, t, l, n) {
                    Array.isArray(n) && (-1 !== n.indexOf("trim") && (l = l.trim()), -1 !== n.indexOf("number") && (l = this._n(l))), 
                    a || (a = this), e.set(a, t, l);
                }, e.prototype.__set_sync = function(a, t, l) {
                    a || (a = this), e.set(a, t, l);
                }, e.prototype.__get_orig = function(e) {
                    return c(e) && e.$orig || e;
                }, e.prototype.__get_value = function(e, a) {
                    return function e(a, t) {
                        var l = t.split("."), n = l[0];
                        return 0 === n.indexOf("__$n") && (n = parseInt(n.replace("__$n", ""))), 1 === l.length ? a[n] : e(a[n], l.slice(1).join("."));
                    }(a || this, e);
                }, e.prototype.__get_class = function(e, a) {
                    return function(e, a) {
                        return r(e) || r(a) ? function(e, a) {
                            return e ? a ? e + " " + a : e : a || "";
                        }(e, Mt(a)) : "";
                    }(a, e);
                }, e.prototype.__get_style = function(e, a) {
                    if (!e && !a) return "";
                    var t = function(e) {
                        return Array.isArray(e) ? j(e) : "string" == typeof e ? Rt(e) : e;
                    }(e), l = a ? T(a, t) : t;
                    return Object.keys(l).map(function(e) {
                        return A(e) + ":" + l[e];
                    }).join(";");
                }, e.prototype.__map = function(e, a) {
                    var t, l, n, r, u;
                    if (Array.isArray(e)) {
                        for (t = new Array(e.length), l = 0, n = e.length; l < n; l++) t[l] = a(e[l], l);
                        return t;
                    }
                    if (o(e)) {
                        for (r = Object.keys(e), t = Object.create(null), l = 0, n = r.length; l < n; l++) t[u = r[l]] = a(e[u], u, l);
                        return t;
                    }
                    if ("number" == typeof e) {
                        for (t = new Array(e), l = 0, n = e; l < n; l++) t[l] = a(l, l);
                        return t;
                    }
                    return [];
                };
            }(_t), t.default = _t;
        }.call(this, l("c8ba"));
    },
    "6cfa": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.getPhoneNumber = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/anonymous/getPhoneNumber",
                method: "post",
                data: e
            });
        }, a.login = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/anonymous/login",
                method: "post",
                data: e
            });
        }, a.getQrCode = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/getQrCode",
                method: "post",
                data: e
            });
        }, a.getNucleinQrCodeImage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/getNucleinQrCodeImage",
                method: "get",
                data: e
            });
        }, a.updateNucleinQrCodeImage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/updateNucleinQrCodeImage",
                method: "post",
                data: e
            });
        }, a.verifyIdentity = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/verifyIdentity",
                method: "post",
                data: e
            });
        }, a.updateFaceImage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/updateFaceImage",
                method: "post",
                data: e
            });
        }, a.checkIdentityByRJ = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/checkIdentityByRJ",
                method: "post",
                params: e
            });
        }, a.verifyIdentityByRJ = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/verifyIdentityByRJ",
                method: "post",
                data: e
            });
        }, a.checkBindingByRJ = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/checkBindingByRJ",
                method: "post",
                data: e
            });
        }, a.weChatBindFromAppletsByRJ = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/weChatBindFromAppletsByRJ",
                method: "post",
                params: e
            });
        }, a.weChatUnbindFromAppletsByRJ = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/weChatUnbindFromAppletsByRJ",
                method: "post",
                params: e
            });
        }, a.getMessageList = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/getMessageList",
                method: "post",
                data: e
            });
        }, a.getFDYMTQrCode = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaYikatong/getQrCode",
                method: "get",
                params: e
            });
        }, a.enterByVisitor = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/fudaWeixin/enterByVisitor",
                method: "post",
                params: e
            });
        };
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("96a5"));
    },
    "856e": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function(e, a) {
            return e && !(0, l.default)(a) ? (0, n.default)(e, a) : a;
        };
        var l = r(t("043d")), n = r(t("5880"));
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
    },
    8785: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.listReturnPage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/listReturnPage",
                method: "post",
                data: e
            });
        }, a.queryReturnPage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/queryReturnPage",
                method: "post",
                data: e
            });
        }, a.addReturn = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/addReturn",
                method: "post",
                data: e
            });
        };
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("96a5"));
    },
    "87f4": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = [ {
            label: "北京市",
            value: "11"
        }, {
            label: "天津市",
            value: "12"
        }, {
            label: "河北省",
            value: "13"
        }, {
            label: "山西省",
            value: "14"
        }, {
            label: "内蒙古自治区",
            value: "15"
        }, {
            label: "辽宁省",
            value: "21"
        }, {
            label: "吉林省",
            value: "22"
        }, {
            label: "黑龙江省",
            value: "23"
        }, {
            label: "上海市",
            value: "31"
        }, {
            label: "江苏省",
            value: "32"
        }, {
            label: "浙江省",
            value: "33"
        }, {
            label: "安徽省",
            value: "34"
        }, {
            label: "福建省",
            value: "35"
        }, {
            label: "江西省",
            value: "36"
        }, {
            label: "山东省",
            value: "37"
        }, {
            label: "河南省",
            value: "41"
        }, {
            label: "湖北省",
            value: "42"
        }, {
            label: "湖南省",
            value: "43"
        }, {
            label: "广东省",
            value: "44"
        }, {
            label: "广西壮族自治区",
            value: "45"
        }, {
            label: "海南省",
            value: "46"
        }, {
            label: "重庆市",
            value: "50"
        }, {
            label: "四川省",
            value: "51"
        }, {
            label: "贵州省",
            value: "52"
        }, {
            label: "云南省",
            value: "53"
        }, {
            label: "西藏自治区",
            value: "54"
        }, {
            label: "陕西省",
            value: "61"
        }, {
            label: "甘肃省",
            value: "62"
        }, {
            label: "青海省",
            value: "63"
        }, {
            label: "宁夏回族自治区",
            value: "64"
        }, {
            label: "新疆维吾尔自治区",
            value: "65"
        }, {
            label: "台湾",
            value: "66"
        }, {
            label: "香港",
            value: "67"
        }, {
            label: "澳门",
            value: "68"
        } ];
        a.default = l;
    },
    "8bc8": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = [];
            if (t = t || l.length, e) for (var r = 0; r < e; r++) n[r] = l[0 | Math.random() * t]; else {
                var u;
                n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4";
                for (var i = 0; i < 36; i++) n[i] || (u = 0 | 16 * Math.random(), n[i] = l[19 == i ? 3 & u | 8 : u]);
            }
            return a ? (n.shift(), "u" + n.join("")) : n.join("");
        };
        a.default = l;
    },
    "8c1d": function(e, a, t) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var t = {};
            !function() {
                function a(e) {
                    return e < 128 ? [ e ] : e < 2048 ? [ 192 + (e >> 6), 128 + (63 & e) ] : [ 224 + (e >> 12), 128 + (e >> 6 & 63), 128 + (63 & e) ];
                }
                function l(e) {
                    for (var t = [], l = 0; l < e.length; l++) for (var n = a(e.charCodeAt(l)), r = 0; r < n.length; r++) t.push(n[r]);
                    return t;
                }
                function n(e, a) {
                    this.typeNumber = -1, this.errorCorrectLevel = a, this.modules = null, this.moduleCount = 0, 
                    this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = e, 
                    this.utf8bytes = l(e), this.make();
                }
                n.prototype = {
                    constructor: n,
                    getModuleCount: function() {
                        return this.moduleCount;
                    },
                    make: function() {
                        this.getRightType(), this.dataCache = this.createData(), this.createQrcode();
                    },
                    makeImpl: function(e) {
                        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                        for (var a = 0; a < this.moduleCount; a++) this.modules[a] = new Array(this.moduleCount);
                        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), 
                        this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), 
                        this.setupTimingPattern(), this.setupTypeInfo(!0, e), this.typeNumber >= 7 && this.setupTypeNumber(!0), 
                        this.mapData(this.dataCache, e);
                    },
                    setupPositionProbePattern: function(e, a) {
                        for (var t = -1; t <= 7; t++) if (!(e + t <= -1 || this.moduleCount <= e + t)) for (var l = -1; l <= 7; l++) a + l <= -1 || this.moduleCount <= a + l || (this.modules[e + t][a + l] = 0 <= t && t <= 6 && (0 == l || 6 == l) || 0 <= l && l <= 6 && (0 == t || 6 == t) || 2 <= t && t <= 4 && 2 <= l && l <= 4);
                    },
                    createQrcode: function() {
                        for (var e = 0, a = 0, t = null, l = 0; l < 8; l++) {
                            this.makeImpl(l);
                            var n = i.getLostPoint(this);
                            (0 == l || e > n) && (e = n, a = l, t = this.modules);
                        }
                        this.modules = t, this.setupTypeInfo(!1, a), this.typeNumber >= 7 && this.setupTypeNumber(!1);
                    },
                    setupTimingPattern: function() {
                        for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0, 
                        null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0));
                    },
                    setupPositionAdjustPattern: function() {
                        for (var e = i.getPatternPosition(this.typeNumber), a = 0; a < e.length; a++) for (var t = 0; t < e.length; t++) {
                            var l = e[a], n = e[t];
                            if (null == this.modules[l][n]) for (var r = -2; r <= 2; r++) for (var u = -2; u <= 2; u++) this.modules[l + r][n + u] = -2 == r || 2 == r || -2 == u || 2 == u || 0 == r && 0 == u;
                        }
                    },
                    setupTypeNumber: function(e) {
                        for (var a = i.getBCHTypeNumber(this.typeNumber), t = 0; t < 18; t++) {
                            var l = !e && 1 == (a >> t & 1);
                            this.modules[Math.floor(t / 3)][t % 3 + this.moduleCount - 8 - 3] = l, this.modules[t % 3 + this.moduleCount - 8 - 3][Math.floor(t / 3)] = l;
                        }
                    },
                    setupTypeInfo: function(e, a) {
                        for (var t = r[this.errorCorrectLevel] << 3 | a, l = i.getBCHTypeInfo(t), n = 0; n < 15; n++) {
                            var u = !e && 1 == (l >> n & 1);
                            n < 6 ? this.modules[n][8] = u : n < 8 ? this.modules[n + 1][8] = u : this.modules[this.moduleCount - 15 + n][8] = u, 
                            u = !e && 1 == (l >> n & 1), n < 8 ? this.modules[8][this.moduleCount - n - 1] = u : n < 9 ? this.modules[8][15 - n - 1 + 1] = u : this.modules[8][15 - n - 1] = u;
                        }
                        this.modules[this.moduleCount - 8][8] = !e;
                    },
                    createData: function() {
                        var e = new f(), a = this.typeNumber > 9 ? 16 : 8;
                        e.put(4, 4), e.put(this.utf8bytes.length, a);
                        for (var t = 0, l = this.utf8bytes.length; t < l; t++) e.put(this.utf8bytes[t], 8);
                        for (e.length + 4 <= 8 * this.totalDataCount && e.put(0, 4); e.length % 8 != 0; ) e.putBit(!1);
                        for (;!(e.length >= 8 * this.totalDataCount || (e.put(n.PAD0, 8), e.length >= 8 * this.totalDataCount)); ) e.put(n.PAD1, 8);
                        return this.createBytes(e);
                    },
                    createBytes: function(e) {
                        for (var a = 0, t = 0, l = 0, n = this.rsBlock.length / 3, r = new Array(), u = 0; u < n; u++) for (var o = this.rsBlock[3 * u + 0], s = this.rsBlock[3 * u + 1], v = this.rsBlock[3 * u + 2], f = 0; f < o; f++) r.push([ v, s ]);
                        for (var b = new Array(r.length), d = new Array(r.length), h = 0; h < r.length; h++) {
                            var p = r[h][0], g = r[h][1] - p;
                            for (t = Math.max(t, p), l = Math.max(l, g), b[h] = new Array(p), u = 0; u < b[h].length; u++) b[h][u] = 255 & e.buffer[u + a];
                            a += p;
                            var y = i.getErrorCorrectPolynomial(g), m = new c(b[h], y.getLength() - 1).mod(y);
                            for (d[h] = new Array(y.getLength() - 1), u = 0; u < d[h].length; u++) {
                                var _ = u + m.getLength() - d[h].length;
                                d[h][u] = _ >= 0 ? m.get(_) : 0;
                            }
                        }
                        var w = new Array(this.totalDataCount), k = 0;
                        for (u = 0; u < t; u++) for (h = 0; h < r.length; h++) u < b[h].length && (w[k++] = b[h][u]);
                        for (u = 0; u < l; u++) for (h = 0; h < r.length; h++) u < d[h].length && (w[k++] = d[h][u]);
                        return w;
                    },
                    mapData: function(e, a) {
                        for (var t = -1, l = this.moduleCount - 1, n = 7, r = 0, u = this.moduleCount - 1; u > 0; u -= 2) for (6 == u && u--; ;) {
                            for (var o = 0; o < 2; o++) if (null == this.modules[l][u - o]) {
                                var s = !1;
                                r < e.length && (s = 1 == (e[r] >>> n & 1)), i.getMask(a, l, u - o) && (s = !s), 
                                this.modules[l][u - o] = s, -1 == --n && (r++, n = 7);
                            }
                            if ((l += t) < 0 || this.moduleCount <= l) {
                                l -= t, t = -t;
                                break;
                            }
                        }
                    }
                }, n.PAD0 = 236, n.PAD1 = 17;
                for (var r = [ 1, 0, 3, 2 ], u = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, i = {
                    PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(e) {
                        for (var a = e << 10; i.getBCHDigit(a) - i.getBCHDigit(i.G15) >= 0; ) a ^= i.G15 << i.getBCHDigit(a) - i.getBCHDigit(i.G15);
                        return (e << 10 | a) ^ i.G15_MASK;
                    },
                    getBCHTypeNumber: function(e) {
                        for (var a = e << 12; i.getBCHDigit(a) - i.getBCHDigit(i.G18) >= 0; ) a ^= i.G18 << i.getBCHDigit(a) - i.getBCHDigit(i.G18);
                        return e << 12 | a;
                    },
                    getBCHDigit: function(e) {
                        for (var a = 0; 0 != e; ) a++, e >>>= 1;
                        return a;
                    },
                    getPatternPosition: function(e) {
                        return i.PATTERN_POSITION_TABLE[e - 1];
                    },
                    getMask: function(e, a, t) {
                        switch (e) {
                          case u.PATTERN000:
                            return (a + t) % 2 == 0;

                          case u.PATTERN001:
                            return a % 2 == 0;

                          case u.PATTERN010:
                            return t % 3 == 0;

                          case u.PATTERN011:
                            return (a + t) % 3 == 0;

                          case u.PATTERN100:
                            return (Math.floor(a / 2) + Math.floor(t / 3)) % 2 == 0;

                          case u.PATTERN101:
                            return a * t % 2 + a * t % 3 == 0;

                          case u.PATTERN110:
                            return (a * t % 2 + a * t % 3) % 2 == 0;

                          case u.PATTERN111:
                            return (a * t % 3 + (a + t) % 2) % 2 == 0;

                          default:
                            throw new Error("bad maskPattern:" + e);
                        }
                    },
                    getErrorCorrectPolynomial: function(e) {
                        for (var a = new c([ 1 ], 0), t = 0; t < e; t++) a = a.multiply(new c([ 1, o.gexp(t) ], 0));
                        return a;
                    },
                    getLostPoint: function(e) {
                        for (var a = e.getModuleCount(), t = 0, l = 0, n = 0; n < a; n++) for (var r = 0, u = e.modules[n][0], i = 0; i < a; i++) {
                            var o = e.modules[n][i];
                            if (i < a - 6 && o && !e.modules[n][i + 1] && e.modules[n][i + 2] && e.modules[n][i + 3] && e.modules[n][i + 4] && !e.modules[n][i + 5] && e.modules[n][i + 6] && (i < a - 10 ? e.modules[n][i + 7] && e.modules[n][i + 8] && e.modules[n][i + 9] && e.modules[n][i + 10] && (t += 40) : i > 3 && e.modules[n][i - 1] && e.modules[n][i - 2] && e.modules[n][i - 3] && e.modules[n][i - 4] && (t += 40)), 
                            n < a - 1 && i < a - 1) {
                                var s = 0;
                                o && s++, e.modules[n + 1][i] && s++, e.modules[n][i + 1] && s++, e.modules[n + 1][i + 1] && s++, 
                                0 != s && 4 != s || (t += 3);
                            }
                            u ^ o ? r++ : (u = o, r >= 5 && (t += 3 + r - 5), r = 1), o && l++;
                        }
                        for (i = 0; i < a; i++) for (r = 0, u = e.modules[0][i], n = 0; n < a; n++) o = e.modules[n][i], 
                        n < a - 6 && o && !e.modules[n + 1][i] && e.modules[n + 2][i] && e.modules[n + 3][i] && e.modules[n + 4][i] && !e.modules[n + 5][i] && e.modules[n + 6][i] && (n < a - 10 ? e.modules[n + 7][i] && e.modules[n + 8][i] && e.modules[n + 9][i] && e.modules[n + 10][i] && (t += 40) : n > 3 && e.modules[n - 1][i] && e.modules[n - 2][i] && e.modules[n - 3][i] && e.modules[n - 4][i] && (t += 40)), 
                        u ^ o ? r++ : (u = o, r >= 5 && (t += 3 + r - 5), r = 1);
                        return t += 10 * (Math.abs(100 * l / a / a - 50) / 5);
                    }
                }, o = {
                    glog: function(e) {
                        if (e < 1) throw new Error("glog(" + e + ")");
                        return o.LOG_TABLE[e];
                    },
                    gexp: function(e) {
                        for (;e < 0; ) e += 255;
                        for (;e >= 256; ) e -= 255;
                        return o.EXP_TABLE[e];
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, s = 0; s < 8; s++) o.EXP_TABLE[s] = 1 << s;
                for (s = 8; s < 256; s++) o.EXP_TABLE[s] = o.EXP_TABLE[s - 4] ^ o.EXP_TABLE[s - 5] ^ o.EXP_TABLE[s - 6] ^ o.EXP_TABLE[s - 8];
                for (s = 0; s < 255; s++) o.LOG_TABLE[o.EXP_TABLE[s]] = s;
                function c(e, a) {
                    if (null == e.length) throw new Error(e.length + "/" + a);
                    for (var t = 0; t < e.length && 0 == e[t]; ) t++;
                    this.num = new Array(e.length - t + a);
                    for (var l = 0; l < e.length - t; l++) this.num[l] = e[l + t];
                }
                c.prototype = {
                    get: function(e) {
                        return this.num[e];
                    },
                    getLength: function() {
                        return this.num.length;
                    },
                    multiply: function(e) {
                        for (var a = new Array(this.getLength() + e.getLength() - 1), t = 0; t < this.getLength(); t++) for (var l = 0; l < e.getLength(); l++) a[t + l] ^= o.gexp(o.glog(this.get(t)) + o.glog(e.get(l)));
                        return new c(a, 0);
                    },
                    mod: function(e) {
                        var a = this.getLength(), t = e.getLength();
                        if (a - t < 0) return this;
                        for (var l = new Array(a), n = 0; n < a; n++) l[n] = this.get(n);
                        for (;l.length >= t; ) {
                            var r = o.glog(l[0]) - o.glog(e.get(0));
                            for (n = 0; n < e.getLength(); n++) l[n] ^= o.gexp(o.glog(e.get(n)) + r);
                            for (;0 == l[0]; ) l.shift();
                        }
                        return new c(l, 0);
                    }
                };
                var v = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ];
                function f() {
                    this.buffer = new Array(), this.length = 0;
                }
                n.prototype.getRightType = function() {
                    for (var e = 1; e < 41; e++) {
                        var a = v[4 * (e - 1) + this.errorCorrectLevel];
                        if (null == a) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + this.errorCorrectLevel);
                        for (var t = a.length / 3, l = 0, n = 0; n < t; n++) {
                            var r = a[3 * n + 0];
                            l += a[3 * n + 2] * r;
                        }
                        var u = e > 9 ? 2 : 1;
                        if (this.utf8bytes.length + u < l || 40 == e) {
                            this.typeNumber = e, this.rsBlock = a, this.totalDataCount = l;
                            break;
                        }
                    }
                }, f.prototype = {
                    get: function(e) {
                        var a = Math.floor(e / 8);
                        return this.buffer[a] >>> 7 - e % 8 & 1;
                    },
                    put: function(e, a) {
                        for (var t = 0; t < a; t++) this.putBit(e >>> a - t - 1 & 1);
                    },
                    putBit: function(e) {
                        var a = Math.floor(this.length / 8);
                        this.buffer.length <= a && this.buffer.push(0), e && (this.buffer[a] |= 128 >>> this.length % 8), 
                        this.length++;
                    }
                };
                var b = [];
                (t = function(a) {
                    if (this.options = {
                        text: "",
                        size: 256,
                        correctLevel: 3,
                        background: "#ffffff",
                        foreground: "#000000",
                        pdground: "#000000",
                        image: "",
                        imageSize: 30,
                        canvasId: a.canvasId,
                        context: a.context,
                        usingComponents: a.usingComponents,
                        showLoading: a.showLoading,
                        loadingText: a.loadingText
                    }, "string" == typeof a && (a = {
                        text: a
                    }), a) for (var t in a) this.options[t] = a[t];
                    for (var l = null, r = (t = 0, b.length); t < r; t++) if (b[t].text == this.options.text && b[t].text.correctLevel == this.options.correctLevel) {
                        l = b[t].obj;
                        break;
                    }
                    t == r && (l = new n(this.options.text, this.options.correctLevel), b.push({
                        text: this.options.text,
                        correctLevel: this.options.correctLevel,
                        obj: l
                    }));
                    var u = function(e) {
                        var a = e.options;
                        return a.pdground && (e.row > 1 && e.row < 5 && e.col > 1 && e.col < 5 || e.row > e.count - 6 && e.row < e.count - 2 && e.col > 1 && e.col < 5 || e.row > 1 && e.row < 5 && e.col > e.count - 6 && e.col < e.count - 2) ? a.pdground : a.foreground;
                    };
                    !function(a) {
                        a.showLoading && e.showLoading({
                            title: a.loadingText,
                            mask: !0
                        });
                        for (var t = e.createCanvasContext(a.canvasId, a.context), n = l.getModuleCount(), r = a.size, i = a.imageSize, o = (r / n).toPrecision(4), s = (r / n).toPrecision(4), c = 0; c < n; c++) for (var v = 0; v < n; v++) {
                            var f = Math.ceil((v + 1) * o) - Math.floor(v * o), b = Math.ceil((c + 1) * o) - Math.floor(c * o), d = u({
                                row: c,
                                col: v,
                                count: n,
                                options: a
                            });
                            t.setFillStyle(l.modules[c][v] ? d : a.background), t.fillRect(Math.round(v * o), Math.round(c * s), f, b);
                        }
                        if (a.image) {
                            var h = Number(((r - i) / 2).toFixed(2)), p = Number(((r - i) / 2).toFixed(2));
                            (function(e, t, l, n, r, u, i, o, s) {
                                e.setLineWidth(i), e.setFillStyle(a.background), e.setStrokeStyle(a.background), 
                                e.beginPath(), e.moveTo(t + u, l), e.arcTo(t + n, l, t + n, l + u, u), e.arcTo(t + n, l + r, t + n - u, l + r, u), 
                                e.arcTo(t, l + r, t, l + r - u, u), e.arcTo(t, l, t + u, l, u), e.closePath(), o && e.fill(), 
                                s && e.stroke();
                            })(t, h, p, i, i, 2, 6, !0, !0), t.drawImage(a.image, h, p, i, i);
                        }
                        setTimeout(function() {
                            t.draw(!0, function() {
                                setTimeout(function() {
                                    e.canvasToTempFilePath({
                                        width: a.width,
                                        height: a.height,
                                        destWidth: a.width,
                                        destHeight: a.height,
                                        canvasId: a.canvasId,
                                        quality: Number(1),
                                        success: function(e) {
                                            a.cbResult && a.cbResult(e.tempFilePath);
                                        },
                                        fail: function(e) {
                                            a.cbResult && a.cbResult(e);
                                        },
                                        complete: function() {
                                            a.showLoading && e.hideLoading();
                                        }
                                    }, a.context);
                                }, a.text.length + 100);
                            });
                        }, a.usingComponents ? 0 : 150);
                    }(this.options);
                }).prototype.clear = function(a) {
                    var t = e.createCanvasContext(this.options.canvasId, this.options.context);
                    t.clearRect(0, 0, this.options.size, this.options.size), t.draw(!1, function() {
                        a && a();
                    });
                };
            }();
            var l = t;
            a.default = l;
        }).call(this, t("543d").default);
    },
    "8d56": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("a410"));
        var n = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
            e || (e = Number(new Date())), 10 == e.toString().length && (e *= 1e3);
            var t = +new Date(Number(e)), n = (Number(new Date()) - t) / 1e3, r = "";
            switch (!0) {
              case n < 300:
                r = "刚刚";
                break;

              case n >= 300 && n < 3600:
                r = parseInt(n / 60) + "分钟前";
                break;

              case n >= 3600 && n < 86400:
                r = parseInt(n / 3600) + "小时前";
                break;

              case n >= 86400 && n < 2592e3:
                r = parseInt(n / 86400) + "天前";
                break;

              default:
                r = !1 === a ? n >= 2592e3 && n < 31536e3 ? parseInt(n / 2592e3) + "个月前" : parseInt(n / 31536e3) + "年前" : (0, 
                l.default)(t, a);
            }
            return r;
        };
        a.default = n;
    },
    "96a5": function(e, a, t) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var l = i(t("a34a")), n = i(t("a402")), r = t("6cfa"), u = i(t("6683"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, a, t, l, n, r, u) {
                try {
                    var i = e[r](u), o = i.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                i.done ? a(o) : Promise.resolve(o).then(l, n);
            }
            function s(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    a && (l = l.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })), t.push.apply(t, l);
                }
                return t;
            }
            function c(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e;
            }
            var v = [ 0 ], f = new n.default();
            f.setConfig(function(e) {
                return e.baseURL = u.default.baseApiUrl, e.timeout = 1e4, e.header = {
                    "X-Requested-With": "XMLHttpRequest"
                }, e;
            }), f.interceptors.request.use(function(a) {
                a.header = function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = null != arguments[a] ? arguments[a] : {};
                        a % 2 ? s(Object(t), !0).forEach(function(a) {
                            c(e, a, t[a]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                        });
                    }
                    return e;
                }({}, a.header);
                var t = e.getStorageSync("accessToken");
                return t && (a.header.token = t), a.header.requestTime = Date.now(), a;
            }, function(e) {
                return Promise.reject(e);
            }), f.interceptors.response.use(function() {
                var a = function(e) {
                    return function() {
                        var a = this, t = arguments;
                        return new Promise(function(l, n) {
                            var r = e.apply(a, t);
                            function u(e) {
                                o(r, l, n, u, i, "next", e);
                            }
                            function i(e) {
                                o(r, l, n, u, i, "throw", e);
                            }
                            u(void 0);
                        });
                    };
                }(l.default.mark(function a(t) {
                    var n, u, i, o;
                    return l.default.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            if (200 === (n = t.statusCode) || 204 === n) {
                                a.next = 3;
                                break;
                            }
                            return a.abrupt("return", Promise.reject(t));

                          case 3:
                            if (!v.some(function(e) {
                                return e == t.data.code;
                            })) {
                                a.next = 7;
                                break;
                            }
                            return a.abrupt("return", t.data);

                          case 7:
                            if (103 !== t.data.code && 120 !== t.data.code) {
                                a.next = 14;
                                break;
                            }
                            return u = new Promise(function(a, l) {
                                e.login({
                                    provider: "weixin",
                                    success: function(n) {
                                        (0, r.login)({
                                            jsCode: n.code
                                        }).then(function(r) {
                                            if (e.setStorageSync("loginInfo", {
                                                lppCode: r.data.lppCode,
                                                code: n.code,
                                                wxOpenId: r.data.wxOpenId,
                                                wxSessionKey: r.data.wxSessionKey,
                                                mobileNum: r.data.mobileNum
                                            }), 0 == r.code) {
                                                if (!r.data.token) return void l(t);
                                                e.setStorageSync("accessToken", r.data.token), f.request(t.config).then(function(e) {
                                                    a(e);
                                                }).catch(function(e) {
                                                    l(e);
                                                });
                                            } else l(r.msg);
                                        }).catch(function(e) {
                                            l(e);
                                        });
                                    },
                                    fail: function(e) {
                                        l(e);
                                    }
                                });
                            }), a.next = 11, u.then(function(e) {
                                i = e;
                            }).catch(function(e) {
                                o = e;
                            });

                          case 11:
                            return a.abrupt("return", i || Promise.reject(o));

                          case 14:
                            return e.showToast({
                                title: t.data.msg,
                                icon: "none"
                            }), a.abrupt("return", Promise.reject(t));

                          case 16:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                }));
                return function(e) {
                    return a.apply(this, arguments);
                };
            }(), function(e) {
                return Promise.reject(e);
            });
            var b = f;
            a.default = b;
        }).call(this, t("543d").default);
    },
    "96cf": function(a, t) {
        !function(t) {
            var l, n = Object.prototype, r = n.hasOwnProperty, u = "function" == typeof Symbol ? Symbol : {}, i = u.iterator || "@@iterator", o = u.asyncIterator || "@@asyncIterator", s = u.toStringTag || "@@toStringTag", c = "object" === e(a), v = t.regeneratorRuntime;
            if (v) c && (a.exports = v); else {
                (v = t.regeneratorRuntime = c ? a.exports : {}).wrap = w;
                var f = "suspendedStart", b = "suspendedYield", d = "executing", h = "completed", p = {}, g = {};
                g[i] = function() {
                    return this;
                };
                var y = Object.getPrototypeOf, m = y && y(y(I([])));
                m && m !== n && r.call(m, i) && (g = m);
                var _ = A.prototype = O.prototype = Object.create(g);
                x.prototype = _.constructor = A, A.constructor = x, A[s] = x.displayName = "GeneratorFunction", 
                v.isGeneratorFunction = function(e) {
                    var a = "function" == typeof e && e.constructor;
                    return !!a && (a === x || "GeneratorFunction" === (a.displayName || a.name));
                }, v.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, A) : (e.__proto__ = A, s in e || (e[s] = "GeneratorFunction")), 
                    e.prototype = Object.create(_), e;
                }, v.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, P(S.prototype), S.prototype[o] = function() {
                    return this;
                }, v.AsyncIterator = S, v.async = function(e, a, t, l) {
                    var n = new S(w(e, a, t, l));
                    return v.isGeneratorFunction(a) ? n : n.next().then(function(e) {
                        return e.done ? e.value : n.next();
                    });
                }, P(_), _[s] = "Generator", _[i] = function() {
                    return this;
                }, _.toString = function() {
                    return "[object Generator]";
                }, v.keys = function(e) {
                    var a = [];
                    for (var t in e) a.push(t);
                    return a.reverse(), function t() {
                        for (;a.length; ) {
                            var l = a.pop();
                            if (l in e) return t.value = l, t.done = !1, t;
                        }
                        return t.done = !0, t;
                    };
                }, v.values = I, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = l, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = l, this.tryEntries.forEach(C), !e) for (var a in this) "t" === a.charAt(0) && r.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = l);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var a = this;
                        function t(t, n) {
                            return i.type = "throw", i.arg = e, a.next = t, n && (a.method = "next", a.arg = l), 
                            !!n;
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var u = this.tryEntries[n], i = u.completion;
                            if ("root" === u.tryLoc) return t("end");
                            if (u.tryLoc <= this.prev) {
                                var o = r.call(u, "catchLoc"), s = r.call(u, "finallyLoc");
                                if (o && s) {
                                    if (this.prev < u.catchLoc) return t(u.catchLoc, !0);
                                    if (this.prev < u.finallyLoc) return t(u.finallyLoc);
                                } else if (o) {
                                    if (this.prev < u.catchLoc) return t(u.catchLoc, !0);
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < u.finallyLoc) return t(u.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, a) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var l = this.tryEntries[t];
                            if (l.tryLoc <= this.prev && r.call(l, "finallyLoc") && this.prev < l.finallyLoc) {
                                var n = l;
                                break;
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= a && a <= n.finallyLoc && (n = null);
                        var u = n ? n.completion : {};
                        return u.type = e, u.arg = a, n ? (this.method = "next", this.next = n.finallyLoc, 
                        p) : this.complete(u);
                    },
                    complete: function(e, a) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                        this.method = "return", this.next = "end") : "normal" === e.type && a && (this.next = a), 
                        p;
                    },
                    finish: function(e) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var t = this.tryEntries[a];
                            if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), C(t), p;
                        }
                    },
                    catch: function(e) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var t = this.tryEntries[a];
                            if (t.tryLoc === e) {
                                var l = t.completion;
                                if ("throw" === l.type) {
                                    var n = l.arg;
                                    C(t);
                                }
                                return n;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, a, t) {
                        return this.delegate = {
                            iterator: I(e),
                            resultName: a,
                            nextLoc: t
                        }, "next" === this.method && (this.arg = l), p;
                    }
                };
            }
            function w(e, a, t, l) {
                var n = a && a.prototype instanceof O ? a : O, r = Object.create(n.prototype), u = new E(l || []);
                return r._invoke = function(e, a, t) {
                    var l = f;
                    return function(n, r) {
                        if (l === d) throw new Error("Generator is already running");
                        if (l === h) {
                            if ("throw" === n) throw r;
                            return D();
                        }
                        for (t.method = n, t.arg = r; ;) {
                            var u = t.delegate;
                            if (u) {
                                var i = T(u, t);
                                if (i) {
                                    if (i === p) continue;
                                    return i;
                                }
                            }
                            if ("next" === t.method) t.sent = t._sent = t.arg; else if ("throw" === t.method) {
                                if (l === f) throw l = h, t.arg;
                                t.dispatchException(t.arg);
                            } else "return" === t.method && t.abrupt("return", t.arg);
                            l = d;
                            var o = k(e, a, t);
                            if ("normal" === o.type) {
                                if (l = t.done ? h : b, o.arg === p) continue;
                                return {
                                    value: o.arg,
                                    done: t.done
                                };
                            }
                            "throw" === o.type && (l = h, t.method = "throw", t.arg = o.arg);
                        }
                    };
                }(e, t, u), r;
            }
            function k(e, a, t) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(a, t)
                    };
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            function O() {}
            function x() {}
            function A() {}
            function P(e) {
                [ "next", "throw", "return" ].forEach(function(a) {
                    e[a] = function(e) {
                        return this._invoke(a, e);
                    };
                });
            }
            function S(a) {
                function t(l, n, u, i) {
                    var o = k(a[l], a, n);
                    if ("throw" !== o.type) {
                        var s = o.arg, c = s.value;
                        return c && "object" === e(c) && r.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                            t("next", e, u, i);
                        }, function(e) {
                            t("throw", e, u, i);
                        }) : Promise.resolve(c).then(function(e) {
                            s.value = e, u(s);
                        }, function(e) {
                            return t("throw", e, u, i);
                        });
                    }
                    i(o.arg);
                }
                var l;
                this._invoke = function(e, a) {
                    function n() {
                        return new Promise(function(l, n) {
                            t(e, a, l, n);
                        });
                    }
                    return l = l ? l.then(n, n) : n();
                };
            }
            function T(e, a) {
                var t = e.iterator[a.method];
                if (t === l) {
                    if (a.delegate = null, "throw" === a.method) {
                        if (e.iterator.return && (a.method = "return", a.arg = l, T(e, a), "throw" === a.method)) return p;
                        a.method = "throw", a.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return p;
                }
                var n = k(t, e.iterator, a.arg);
                if ("throw" === n.type) return a.method = "throw", a.arg = n.arg, a.delegate = null, 
                p;
                var r = n.arg;
                return r ? r.done ? (a[e.resultName] = r.value, a.next = e.nextLoc, "return" !== a.method && (a.method = "next", 
                a.arg = l), a.delegate = null, p) : r : (a.method = "throw", a.arg = new TypeError("iterator result is not an object"), 
                a.delegate = null, p);
            }
            function j(e) {
                var a = {
                    tryLoc: e[0]
                };
                1 in e && (a.catchLoc = e[1]), 2 in e && (a.finallyLoc = e[2], a.afterLoc = e[3]), 
                this.tryEntries.push(a);
            }
            function C(e) {
                var a = e.completion || {};
                a.type = "normal", delete a.arg, e.completion = a;
            }
            function E(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(j, this), this.reset(!0);
            }
            function I(e) {
                if (e) {
                    var a = e[i];
                    if (a) return a.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var t = -1, n = function a() {
                            for (;++t < e.length; ) if (r.call(e, t)) return a.value = e[t], a.done = !1, a;
                            return a.value = l, a.done = !0, a;
                        };
                        return n.next = n;
                    }
                }
                return {
                    next: D
                };
            }
            function D() {
                return {
                    value: l,
                    done: !0
                };
            }
        }(function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : e(self)) && self;
        }() || Function("return this")());
    },
    "9cee": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = null;
        var n = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null !== l && clearTimeout(l), t) {
                var n = !l;
                l = setTimeout(function() {
                    l = null;
                }, a), n && "function" == typeof e && e();
            } else l = setTimeout(function() {
                "function" == typeof e && e();
            }, a);
        };
        a.default = n;
    },
    a1b5: function(e, a, t) {
        function l() {
            this.handlers = [];
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0, l.prototype.use = function(e, a) {
            return this.handlers.push({
                fulfilled: e,
                rejected: a
            }), this.handlers.length - 1;
        }, l.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null);
        }, l.prototype.forEach = function(e) {
            this.handlers.forEach(function(a) {
                null !== a && e(a);
            });
        };
        var n = l;
        a.default = n;
    },
    a34a: function(e, a, t) {
        e.exports = t("bbdd");
    },
    a402: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("5d6e")).default;
        a.default = l;
    },
    a410: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = t("e1cd");
        String.prototype.padStart || (String.prototype.padStart = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
            if ("[object String]" !== Object.prototype.toString.call(a)) throw new TypeError("fillString must be String");
            var t = this;
            if (t.length >= e) return String(t);
            for (var l = e - t.length, n = Math.ceil(l / a.length); n >>= 1; ) a += a, 1 === n && (a += a);
            return a.slice(0, l) + t;
        });
        var n = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
            e || (e = Number(new Date())), l.isIOS && "string" == typeof e && (e = e.substring(0, 19).replace("T", " ").replace(/-/g, "/")), 
            10 == e.toString().length && (e *= 1e3);
            var t, n = new Date(e), r = {
                "y+": n.getFullYear().toString(),
                "m+": (n.getMonth() + 1).toString(),
                "d+": n.getDate().toString(),
                "h+": n.getHours().toString(),
                "M+": n.getMinutes().toString(),
                "s+": n.getSeconds().toString()
            };
            for (var u in r) (t = new RegExp("(" + u + ")").exec(a)) && (a = a.replace(t[1], 1 == t[1].length ? r[u] : r[u].padStart(t[1].length, "0")));
            return a;
        };
        a.default = n;
    },
    a6bd: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = {
            primary: "#2979ff",
            primaryDark: "#2b85e4",
            primaryDisabled: "#a0cfff",
            primaryLight: "#ecf5ff",
            bgColor: "#f3f4f6",
            info: "#909399",
            infoDark: "#82848a",
            infoDisabled: "#c8c9cc",
            infoLight: "#f4f4f5",
            warning: "#ff9900",
            warningDark: "#f29100",
            warningDisabled: "#fcbd71",
            warningLight: "#fdf6ec",
            error: "#fa3534",
            errorDark: "#dd6161",
            errorDisabled: "#fab6b6",
            errorLight: "#fef0f0",
            success: "#19be6b",
            successDark: "#18b566",
            successDisabled: "#71d5a1",
            successLight: "#dbf1e1",
            mainColor: "#303133",
            contentColor: "#606266",
            tipsColor: "#909399",
            lightColor: "#c0c4cc",
            borderColor: "#e4e7ed"
        };
        a.default = l;
    },
    a8b4: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.uploadFaces2 = function(e) {
            return l.default.upload("/file/api/app-v3/upload/uploadFaces2", {
                method: "POST",
                filePath: e,
                name: "files",
                header: {
                    "content-type": "multipart/form-data"
                }
            });
        }, a.uploadImageForever = function(e) {
            return l.default.upload("/file/api/app-v3/upload/uploadImageForever", {
                method: "POST",
                filePath: e,
                name: "file",
                headers: {
                    "content-type": "multipart/form-data"
                }
            });
        }, a.uploadImageTemporary = function(e) {
            return l.default.upload("/file/api/app-v3/upload/uploadImageTemporary", {
                method: "POST",
                filePath: e,
                name: "file",
                headers: {
                    "content-type": "multipart/form-data"
                }
            });
        };
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("96a5"));
    },
    a9ff: function(a, t, l) {
        (function(a, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(l("a34a")), u = l("37dc"), i = o(l("45b0"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, a, t, l, n, r, u) {
                try {
                    var i = e[r](u), o = i.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                i.done ? a(o) : Promise.resolve(o).then(l, n);
            }
            function c(e) {
                return function() {
                    var a = this, t = arguments;
                    return new Promise(function(l, n) {
                        var r = e.apply(a, t);
                        function u(e) {
                            s(r, l, n, u, i, "next", e);
                        }
                        function i(e) {
                            s(r, l, n, u, i, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || b(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function f(e, a) {
                var t;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = b(e)) || a && e && "number" == typeof e.length) {
                        t && (e = t);
                        var l = 0, n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return l >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[l++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: n
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var r, u = !0, i = !1;
                return {
                    s: function() {
                        t = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = t.next();
                        return u = e.done, e;
                    },
                    e: function(e) {
                        i = !0, r = e;
                    },
                    f: function() {
                        try {
                            u || null == t.return || t.return();
                        } finally {
                            if (i) throw r;
                        }
                    }
                };
            }
            function b(e, a) {
                if (e) {
                    if ("string" == typeof e) return d(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? d(e, a) : void 0;
                }
            }
            function d(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, l = new Array(a); t < a; t++) l[t] = e[t];
                return l;
            }
            function h(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var l = a[t];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), 
                    Object.defineProperty(e, l.key, l);
                }
            }
            function p(e, a, t) {
                return a && h(e.prototype, a), t && h(e, t), e;
            }
            function g(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    a && (l = l.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })), t.push.apply(t, l);
                }
                return t;
            }
            function y(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? g(Object(t), !0).forEach(function(a) {
                        m(e, a, t[a]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                    });
                }
                return e;
            }
            function m(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e;
            }
            function _(e, a) {
                if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
            }
            function w(e, a) {
                if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), a && S(e, a);
            }
            function k(e) {
                var a = P();
                return function() {
                    var t, l = T(e);
                    if (a) {
                        var n = T(this).constructor;
                        t = Reflect.construct(l, arguments, n);
                    } else t = l.apply(this, arguments);
                    return O(this, t);
                };
            }
            function O(a, t) {
                return !t || "object" !== e(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(a) : t;
            }
            function x(e) {
                var a = "function" == typeof Map ? new Map() : void 0;
                return (x = function(e) {
                    if (null === e || !function(e) {
                        return -1 !== Function.toString.call(e).indexOf("[native code]");
                    }(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== a) {
                        if (a.has(e)) return a.get(e);
                        a.set(e, t);
                    }
                    function t() {
                        return A(e, arguments, T(this).constructor);
                    }
                    return t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), S(t, e);
                })(e);
            }
            function A(e, a, t) {
                return (A = P() ? Reflect.construct : function(e, a, t) {
                    var l = [ null ];
                    l.push.apply(l, a);
                    var n = new (Function.bind.apply(e, l))();
                    return t && S(n, t.prototype), n;
                }).apply(null, arguments);
            }
            function P() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }
            function S(e, a) {
                return (S = Object.setPrototypeOf || function(e, a) {
                    return e.__proto__ = a, e;
                })(e, a);
            }
            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function j(e, a, t) {
                return e(t = {
                    path: a,
                    exports: {},
                    require: function(e, a) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                        }(null == a && t.path);
                    }
                }, t.exports), t.exports;
            }
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== a || "undefined" != typeof self && self;
            var C = j(function(e, a) {
                var t;
                e.exports = t = t || function(e, a) {
                    var t = Object.create || function() {
                        function e() {}
                        return function(a) {
                            var t;
                            return e.prototype = a, t = new e(), e.prototype = null, t;
                        };
                    }(), l = {}, n = l.lib = {}, r = n.Base = {
                        extend: function(e) {
                            var a = t(this);
                            return e && a.mixIn(e), a.hasOwnProperty("init") && this.init !== a.init || (a.init = function() {
                                a.$super.init.apply(this, arguments);
                            }), a.init.prototype = a, a.$super = this, a;
                        },
                        create: function() {
                            var e = this.extend();
                            return e.init.apply(e, arguments), e;
                        },
                        init: function() {},
                        mixIn: function(e) {
                            for (var a in e) e.hasOwnProperty(a) && (this[a] = e[a]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString);
                        },
                        clone: function() {
                            return this.init.prototype.extend(this);
                        }
                    }, u = n.WordArray = r.extend({
                        init: function(e, a) {
                            e = this.words = e || [], this.sigBytes = null != a ? a : 4 * e.length;
                        },
                        toString: function(e) {
                            return (e || o).stringify(this);
                        },
                        concat: function(e) {
                            var a = this.words, t = e.words, l = this.sigBytes, n = e.sigBytes;
                            if (this.clamp(), l % 4) for (var r = 0; r < n; r++) {
                                var u = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                a[l + r >>> 2] |= u << 24 - (l + r) % 4 * 8;
                            } else for (r = 0; r < n; r += 4) a[l + r >>> 2] = t[r >>> 2];
                            return this.sigBytes += n, this;
                        },
                        clamp: function() {
                            var a = this.words, t = this.sigBytes;
                            a[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, a.length = e.ceil(t / 4);
                        },
                        clone: function() {
                            var e = r.clone.call(this);
                            return e.words = this.words.slice(0), e;
                        },
                        random: function(a) {
                            for (var t, l = [], n = function(a) {
                                a = a;
                                var t = 987654321, l = 4294967295;
                                return function() {
                                    var n = ((t = 36969 * (65535 & t) + (t >> 16) & l) << 16) + (a = 18e3 * (65535 & a) + (a >> 16) & l) & l;
                                    return n /= 4294967296, (n += .5) * (e.random() > .5 ? 1 : -1);
                                };
                            }, r = 0; r < a; r += 4) {
                                var i = n(4294967296 * (t || e.random()));
                                t = 987654071 * i(), l.push(4294967296 * i() | 0);
                            }
                            return new u.init(l, a);
                        }
                    }), i = l.enc = {}, o = i.Hex = {
                        stringify: function(e) {
                            for (var a = e.words, t = e.sigBytes, l = [], n = 0; n < t; n++) {
                                var r = a[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                l.push((r >>> 4).toString(16)), l.push((15 & r).toString(16));
                            }
                            return l.join("");
                        },
                        parse: function(e) {
                            for (var a = e.length, t = [], l = 0; l < a; l += 2) t[l >>> 3] |= parseInt(e.substr(l, 2), 16) << 24 - l % 8 * 4;
                            return new u.init(t, a / 2);
                        }
                    }, s = i.Latin1 = {
                        stringify: function(e) {
                            for (var a = e.words, t = e.sigBytes, l = [], n = 0; n < t; n++) {
                                var r = a[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                l.push(String.fromCharCode(r));
                            }
                            return l.join("");
                        },
                        parse: function(e) {
                            for (var a = e.length, t = [], l = 0; l < a; l++) t[l >>> 2] |= (255 & e.charCodeAt(l)) << 24 - l % 4 * 8;
                            return new u.init(t, a);
                        }
                    }, c = i.Utf8 = {
                        stringify: function(e) {
                            try {
                                return decodeURIComponent(escape(s.stringify(e)));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                throw new Error("Malformed UTF-8 data");
                            }
                        },
                        parse: function(e) {
                            return s.parse(unescape(encodeURIComponent(e)));
                        }
                    }, v = n.BufferedBlockAlgorithm = r.extend({
                        reset: function() {
                            this._data = new u.init(), this._nDataBytes = 0;
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                        },
                        _process: function(a) {
                            var t = this._data, l = t.words, n = t.sigBytes, r = this.blockSize, i = n / (4 * r), o = (i = a ? e.ceil(i) : e.max((0 | i) - this._minBufferSize, 0)) * r, s = e.min(4 * o, n);
                            if (o) {
                                for (var c = 0; c < o; c += r) this._doProcessBlock(l, c);
                                var v = l.splice(0, o);
                                t.sigBytes -= s;
                            }
                            return new u.init(v, s);
                        },
                        clone: function() {
                            var e = r.clone.call(this);
                            return e._data = this._data.clone(), e;
                        },
                        _minBufferSize: 0
                    });
                    n.Hasher = v.extend({
                        cfg: r.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e), this.reset();
                        },
                        reset: function() {
                            v.reset.call(this), this._doReset();
                        },
                        update: function(e) {
                            return this._append(e), this._process(), this;
                        },
                        finalize: function(e) {
                            return e && this._append(e), this._doFinalize();
                        },
                        blockSize: 16,
                        _createHelper: function(e) {
                            return function(a, t) {
                                return new e.init(t).finalize(a);
                            };
                        },
                        _createHmacHelper: function(e) {
                            return function(a, t) {
                                return new f.HMAC.init(e, t).finalize(a);
                            };
                        }
                    });
                    var f = l.algo = {};
                    return l;
                }(Math);
            }), E = (j(function(e, a) {
                var t;
                e.exports = (t = C, function(e) {
                    var a = t, l = a.lib, n = l.WordArray, r = l.Hasher, u = a.algo, i = [];
                    !function() {
                        for (var a = 0; a < 64; a++) i[a] = 4294967296 * e.abs(e.sin(a + 1)) | 0;
                    }();
                    var o = u.MD5 = r.extend({
                        _doReset: function() {
                            this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, a) {
                            for (var t = 0; t < 16; t++) {
                                var l = a + t, n = e[l];
                                e[l] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                            }
                            var r = this._hash.words, u = e[a + 0], o = e[a + 1], b = e[a + 2], d = e[a + 3], h = e[a + 4], p = e[a + 5], g = e[a + 6], y = e[a + 7], m = e[a + 8], _ = e[a + 9], w = e[a + 10], k = e[a + 11], O = e[a + 12], x = e[a + 13], A = e[a + 14], P = e[a + 15], S = r[0], T = r[1], j = r[2], C = r[3];
                            S = s(S, T, j, C, u, 7, i[0]), C = s(C, S, T, j, o, 12, i[1]), j = s(j, C, S, T, b, 17, i[2]), 
                            T = s(T, j, C, S, d, 22, i[3]), S = s(S, T, j, C, h, 7, i[4]), C = s(C, S, T, j, p, 12, i[5]), 
                            j = s(j, C, S, T, g, 17, i[6]), T = s(T, j, C, S, y, 22, i[7]), S = s(S, T, j, C, m, 7, i[8]), 
                            C = s(C, S, T, j, _, 12, i[9]), j = s(j, C, S, T, w, 17, i[10]), T = s(T, j, C, S, k, 22, i[11]), 
                            S = s(S, T, j, C, O, 7, i[12]), C = s(C, S, T, j, x, 12, i[13]), j = s(j, C, S, T, A, 17, i[14]), 
                            S = c(S, T = s(T, j, C, S, P, 22, i[15]), j, C, o, 5, i[16]), C = c(C, S, T, j, g, 9, i[17]), 
                            j = c(j, C, S, T, k, 14, i[18]), T = c(T, j, C, S, u, 20, i[19]), S = c(S, T, j, C, p, 5, i[20]), 
                            C = c(C, S, T, j, w, 9, i[21]), j = c(j, C, S, T, P, 14, i[22]), T = c(T, j, C, S, h, 20, i[23]), 
                            S = c(S, T, j, C, _, 5, i[24]), C = c(C, S, T, j, A, 9, i[25]), j = c(j, C, S, T, d, 14, i[26]), 
                            T = c(T, j, C, S, m, 20, i[27]), S = c(S, T, j, C, x, 5, i[28]), C = c(C, S, T, j, b, 9, i[29]), 
                            j = c(j, C, S, T, y, 14, i[30]), S = v(S, T = c(T, j, C, S, O, 20, i[31]), j, C, p, 4, i[32]), 
                            C = v(C, S, T, j, m, 11, i[33]), j = v(j, C, S, T, k, 16, i[34]), T = v(T, j, C, S, A, 23, i[35]), 
                            S = v(S, T, j, C, o, 4, i[36]), C = v(C, S, T, j, h, 11, i[37]), j = v(j, C, S, T, y, 16, i[38]), 
                            T = v(T, j, C, S, w, 23, i[39]), S = v(S, T, j, C, x, 4, i[40]), C = v(C, S, T, j, u, 11, i[41]), 
                            j = v(j, C, S, T, d, 16, i[42]), T = v(T, j, C, S, g, 23, i[43]), S = v(S, T, j, C, _, 4, i[44]), 
                            C = v(C, S, T, j, O, 11, i[45]), j = v(j, C, S, T, P, 16, i[46]), S = f(S, T = v(T, j, C, S, b, 23, i[47]), j, C, u, 6, i[48]), 
                            C = f(C, S, T, j, y, 10, i[49]), j = f(j, C, S, T, A, 15, i[50]), T = f(T, j, C, S, p, 21, i[51]), 
                            S = f(S, T, j, C, O, 6, i[52]), C = f(C, S, T, j, d, 10, i[53]), j = f(j, C, S, T, w, 15, i[54]), 
                            T = f(T, j, C, S, o, 21, i[55]), S = f(S, T, j, C, m, 6, i[56]), C = f(C, S, T, j, P, 10, i[57]), 
                            j = f(j, C, S, T, g, 15, i[58]), T = f(T, j, C, S, x, 21, i[59]), S = f(S, T, j, C, h, 6, i[60]), 
                            C = f(C, S, T, j, k, 10, i[61]), j = f(j, C, S, T, b, 15, i[62]), T = f(T, j, C, S, _, 21, i[63]), 
                            r[0] = r[0] + S | 0, r[1] = r[1] + T | 0, r[2] = r[2] + j | 0, r[3] = r[3] + C | 0;
                        },
                        _doFinalize: function() {
                            var a = this._data, t = a.words, l = 8 * this._nDataBytes, n = 8 * a.sigBytes;
                            t[n >>> 5] |= 128 << 24 - n % 32;
                            var r = e.floor(l / 4294967296), u = l;
                            t[15 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                            t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), 
                            a.sigBytes = 4 * (t.length + 1), this._process();
                            for (var i = this._hash, o = i.words, s = 0; s < 4; s++) {
                                var c = o[s];
                                o[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                            }
                            return i;
                        },
                        clone: function() {
                            var e = r.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    });
                    function s(e, a, t, l, n, r, u) {
                        var i = e + (a & t | ~a & l) + n + u;
                        return (i << r | i >>> 32 - r) + a;
                    }
                    function c(e, a, t, l, n, r, u) {
                        var i = e + (a & l | t & ~l) + n + u;
                        return (i << r | i >>> 32 - r) + a;
                    }
                    function v(e, a, t, l, n, r, u) {
                        var i = e + (a ^ t ^ l) + n + u;
                        return (i << r | i >>> 32 - r) + a;
                    }
                    function f(e, a, t, l, n, r, u) {
                        var i = e + (t ^ (a | ~l)) + n + u;
                        return (i << r | i >>> 32 - r) + a;
                    }
                    a.MD5 = r._createHelper(o), a.HmacMD5 = r._createHmacHelper(o);
                }(Math), t.MD5);
            }), j(function(e, a) {
                var t, l, n;
                e.exports = (l = (t = C).lib.Base, n = t.enc.Utf8, void (t.algo.HMAC = l.extend({
                    init: function(e, a) {
                        e = this._hasher = new e.init(), "string" == typeof a && (a = n.parse(a));
                        var t = e.blockSize, l = 4 * t;
                        a.sigBytes > l && (a = e.finalize(a)), a.clamp();
                        for (var r = this._oKey = a.clone(), u = this._iKey = a.clone(), i = r.words, o = u.words, s = 0; s < t; s++) i[s] ^= 1549556828, 
                        o[s] ^= 909522486;
                        r.sigBytes = u.sigBytes = l, this.reset();
                    },
                    reset: function() {
                        var e = this._hasher;
                        e.reset(), e.update(this._iKey);
                    },
                    update: function(e) {
                        return this._hasher.update(e), this;
                    },
                    finalize: function(e) {
                        var a = this._hasher, t = a.finalize(e);
                        return a.reset(), a.finalize(this._oKey.clone().concat(t));
                    }
                })));
            }), j(function(e, a) {
                e.exports = C.HmacMD5;
            })), I = "FUNCTION", D = "OBJECT";
            function $(e) {
                return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
            }
            function L(e) {
                return "object" === $(e);
            }
            function M(e) {
                return e && "string" == typeof e ? JSON.parse(e) : e;
            }
            var R = "mp-weixin", N = (M(void 0), M([])), U = "";
            try {
                var q = l("596b").default || l("596b");
                U = q.appid;
            } catch (e) {}
            var F = {};
            function B(e) {
                var a, t, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return a = F, t = e, Object.prototype.hasOwnProperty.call(a, t) || (F[e] = l), F[e];
            }
            var H = [ "invoke", "success", "fail", "complete" ], V = B("_globalUniCloudInterceptor");
            function z(e, a) {
                V[e] || (V[e] = {}), L(a) && Object.keys(a).forEach(function(t) {
                    H.indexOf(t) > -1 && function(e, a, t) {
                        var l = V[e][a];
                        l || (l = V[e][a] = []), -1 === l.indexOf(t) && "function" == typeof t && l.push(t);
                    }(e, t, a[t]);
                });
            }
            function K(e, a) {
                V[e] || (V[e] = {}), L(a) ? Object.keys(a).forEach(function(t) {
                    H.indexOf(t) > -1 && function(e, a, t) {
                        var l = V[e][a];
                        if (l) {
                            var n = l.indexOf(t);
                            n > -1 && l.splice(n, 1);
                        }
                    }(e, t, a[t]);
                }) : delete V[e];
            }
            function W(e, a) {
                return e && 0 !== e.length ? e.reduce(function(e, t) {
                    return e.then(function() {
                        return t(a);
                    });
                }, Promise.resolve()) : Promise.resolve();
            }
            function G(e, a) {
                return V[e] && V[e][a] || [];
            }
            var J = B("_globalUniCloudListener"), X = "response", Z = "needLogin", Y = "refreshToken", Q = "clientdb", ee = "cloudfunction", ae = "cloudobject";
            function te(e) {
                return J[e] || (J[e] = []), J[e];
            }
            function le(e, a) {
                var t = te(e);
                t.includes(a) || t.push(a);
            }
            function ne(e, a) {
                var t = te(e), l = t.indexOf(a);
                -1 !== l && t.splice(l, 1);
            }
            function re(e, a) {
                for (var t = te(e), l = 0; l < t.length; l++) (0, t[l])(a);
            }
            function ue(e, a) {
                return a ? function(t) {
                    var l = this, n = !1;
                    if ("callFunction" === a) {
                        var r = t && t.type || I;
                        n = r !== I;
                    }
                    var u, i = "callFunction" === a && !n;
                    u = this.isReady ? Promise.resolve() : this.initUniCloud, t = t || {};
                    var o = u.then(function() {
                        return n ? Promise.resolve() : W(G(a, "invoke"), t);
                    }).then(function() {
                        return e.call(l, t);
                    }).then(function(e) {
                        return n ? Promise.resolve(e) : W(G(a, "success"), e).then(function() {
                            return W(G(a, "complete"), e);
                        }).then(function() {
                            return i && re(X, {
                                type: ee,
                                content: e
                            }), Promise.resolve(e);
                        });
                    }, function(e) {
                        return n ? Promise.reject(e) : W(G(a, "fail"), e).then(function() {
                            return W(G(a, "complete"), e);
                        }).then(function() {
                            return re(X, {
                                type: ee,
                                content: e
                            }), Promise.reject(e);
                        });
                    });
                    if (!(t.success || t.fail || t.complete)) return o;
                    o.then(function(e) {
                        t.success && t.success(e), t.complete && t.complete(e), i && re(X, {
                            type: ee,
                            content: e
                        });
                    }, function(e) {
                        t.fail && t.fail(e), t.complete && t.complete(e), i && re(X, {
                            type: ee,
                            content: e
                        });
                    });
                } : function(a) {
                    if (!((a = a || {}).success || a.fail || a.complete)) return e.call(this, a);
                    e.call(this, a).then(function(e) {
                        a.success && a.success(e), a.complete && a.complete(e);
                    }, function(e) {
                        a.fail && a.fail(e), a.complete && a.complete(e);
                    });
                };
            }
            var ie, oe = function(e) {
                w(t, e);
                var a = k(t);
                function t(e) {
                    var l;
                    return _(this, t), (l = a.call(this, e.message)).errMsg = e.message || "", l.errCode = l.code = e.code || "SYSTEM_ERROR", 
                    l.requestId = e.requestId, l;
                }
                return t;
            }(x(Error));
            function se() {
                var e;
                try {
                    if (n.getLaunchOptionsSync) {
                        if (n.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
                        var a = n.getLaunchOptionsSync(), t = a.scene, l = a.channel;
                        e = t || l;
                    }
                } catch (e) {}
                return e;
            }
            function ce() {
                var e = n.getLocale && n.getLocale() || "en";
                if (ie) return y(y({}, ie), {}, {
                    locale: e,
                    LOCALE: e
                });
                for (var a = n.getSystemInfoSync(), t = a.deviceId, l = a.platform, r = a.osName, u = a.uniPlatform, i = a.appId, o = [ "pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSettin" ], s = 0; s < o.length; s++) delete a[o[s]];
                return ie = y({
                    PLATFORM: u || R,
                    OS: r || l,
                    APPID: i || U,
                    DEVICEID: t,
                    channel: se()
                }, a), y(y({}, ie), {}, {
                    locale: e,
                    LOCALE: e
                });
            }
            var ve, fe = function(e, a) {
                var t = "";
                return Object.keys(e).sort().forEach(function(a) {
                    e[a] && (t = t + "&" + a + "=" + e[a]);
                }), t = t.slice(1), E(t, a).toString();
            }, be = function(e, a) {
                return new Promise(function(t, l) {
                    a(Object.assign(e, {
                        complete: function(e) {
                            e || (e = {});
                            var a = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
                            if (!e.statusCode || e.statusCode >= 400) return l(new oe({
                                code: "SYS_ERR",
                                message: e.errMsg || "request:fail",
                                requestId: a
                            }));
                            var n = e.data;
                            if (n.error) return l(new oe({
                                code: n.error.code,
                                message: n.error.message,
                                requestId: a
                            }));
                            n.result = n.data, n.requestId = a, delete n.data, t(n);
                        }
                    }));
                });
            }, de = {
                request: function(e) {
                    return n.request(e);
                },
                uploadFile: function(e) {
                    return n.uploadFile(e);
                },
                setStorageSync: function(e, a) {
                    return n.setStorageSync(e, a);
                },
                getStorageSync: function(e) {
                    return n.getStorageSync(e);
                },
                removeStorageSync: function(e) {
                    return n.removeStorageSync(e);
                },
                clearStorageSync: function() {
                    return n.clearStorageSync();
                }
            }, he = {
                "uniCloud.init.paramRequired": "{param} required",
                "uniCloud.uploadFile.fileError": "filePath should be instance of File"
            }, pe = (0, u.initVueI18n)({
                "zh-Hans": {
                    "uniCloud.init.paramRequired": "缺少参数：{param}",
                    "uniCloud.uploadFile.fileError": "filePath应为File对象"
                },
                "zh-Hant": {
                    "uniCloud.init.paramRequired": "缺少参数：{param}",
                    "uniCloud.uploadFile.fileError": "filePath应为File对象"
                },
                en: he,
                fr: {
                    "uniCloud.init.paramRequired": "{param} required",
                    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
                },
                es: {
                    "uniCloud.init.paramRequired": "{param} required",
                    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
                },
                ja: he
            }, "zh-Hans").t, ge = function() {
                function e(a) {
                    _(this, e), [ "spaceId", "clientSecret" ].forEach(function(e) {
                        if (!Object.prototype.hasOwnProperty.call(a, e)) throw new Error(pe("uniCloud.init.paramRequired", {
                            param: e
                        }));
                    }), this.config = Object.assign({}, {
                        endpoint: "https://api.bspapp.com"
                    }, a), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", 
                    this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, 
                    this.adapter = de, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
                }
                return p(e, [ {
                    key: "setAccessToken",
                    value: function(e) {
                        this.accessToken = e;
                    }
                }, {
                    key: "requestWrapped",
                    value: function(e) {
                        return be(e, this.adapter.request);
                    }
                }, {
                    key: "requestAuth",
                    value: function(e) {
                        return this.requestWrapped(e);
                    }
                }, {
                    key: "request",
                    value: function(e, a) {
                        var t = this;
                        return Promise.resolve().then(function() {
                            return t.hasAccessToken ? a ? t.requestWrapped(e) : t.requestWrapped(e).catch(function(a) {
                                return new Promise(function(e, t) {
                                    !a || "GATEWAY_INVALID_TOKEN" !== a.code && "InvalidParameter.InvalidToken" !== a.code ? t(a) : e();
                                }).then(function() {
                                    return t.getAccessToken();
                                }).then(function() {
                                    var a = t.rebuildRequest(e);
                                    return t.request(a, !0);
                                });
                            }) : t.getAccessToken().then(function() {
                                var a = t.rebuildRequest(e);
                                return t.request(a, !0);
                            });
                        });
                    }
                }, {
                    key: "rebuildRequest",
                    value: function(e) {
                        var a = Object.assign({}, e);
                        return a.data.token = this.accessToken, a.header["x-basement-token"] = this.accessToken, 
                        a.header["x-serverless-sign"] = fe(a.data, this.config.clientSecret), a;
                    }
                }, {
                    key: "setupRequest",
                    value: function(e, a) {
                        var t = Object.assign({}, e, {
                            spaceId: this.config.spaceId,
                            timestamp: Date.now()
                        }), l = {
                            "Content-Type": "application/json"
                        };
                        return "auth" !== a && (t.token = this.accessToken, l["x-basement-token"] = this.accessToken), 
                        l["x-serverless-sign"] = fe(t, this.config.clientSecret), {
                            url: this.config.requestUrl,
                            method: "POST",
                            data: t,
                            dataType: "json",
                            header: l
                        };
                    }
                }, {
                    key: "getAccessToken",
                    value: function() {
                        var e = this;
                        return "pending" === this._getAccessTokenPromiseStatus || (this._getAccessTokenPromiseStatus = "pending", 
                        this._getAccessTokenPromise = this.requestAuth(this.setupRequest({
                            method: "serverless.auth.user.anonymousAuthorize",
                            params: "{}"
                        }, "auth")).then(function(a) {
                            return new Promise(function(t, l) {
                                a.result && a.result.accessToken ? (e.setAccessToken(a.result.accessToken), e._getAccessTokenPromiseStatus = "fulfilled", 
                                t(e.accessToken)) : (e._getAccessTokenPromiseStatus = "rejected", l(new oe({
                                    code: "AUTH_FAILED",
                                    message: "获取accessToken失败"
                                })));
                            });
                        }, function(a) {
                            return e._getAccessTokenPromiseStatus = "rejected", Promise.reject(a);
                        })), this._getAccessTokenPromise;
                    }
                }, {
                    key: "authorize",
                    value: function() {
                        this.getAccessToken();
                    }
                }, {
                    key: "callFunction",
                    value: function(e) {
                        var a = {
                            method: "serverless.function.runtime.invoke",
                            params: JSON.stringify({
                                functionTarget: e.name,
                                functionArgs: e.data || {}
                            })
                        };
                        return this.request(this.setupRequest(a));
                    }
                }, {
                    key: "getOSSUploadOptionsFromPath",
                    value: function(e) {
                        var a = {
                            method: "serverless.file.resource.generateProximalSign",
                            params: JSON.stringify(e)
                        };
                        return this.request(this.setupRequest(a));
                    }
                }, {
                    key: "uploadFileToOSS",
                    value: function(e) {
                        var a = this, t = e.url, l = e.formData, n = e.name, r = e.filePath, u = e.fileType, i = e.onUploadProgress;
                        return new Promise(function(e, o) {
                            var s = a.adapter.uploadFile({
                                url: t,
                                formData: l,
                                name: n,
                                filePath: r,
                                fileType: u,
                                header: {
                                    "X-OSS-server-side-encrpytion": "AES256"
                                },
                                success: function(a) {
                                    a && a.statusCode < 400 ? e(a) : o(new oe({
                                        code: "UPLOAD_FAILED",
                                        message: "文件上传失败"
                                    }));
                                },
                                fail: function(e) {
                                    o(new oe({
                                        code: e.code || "UPLOAD_FAILED",
                                        message: e.message || e.errMsg || "文件上传失败"
                                    }));
                                }
                            });
                            "function" == typeof i && s && "function" == typeof s.onProgressUpdate && s.onProgressUpdate(function(e) {
                                i({
                                    loaded: e.totalBytesSent,
                                    total: e.totalBytesExpectedToSend
                                });
                            });
                        });
                    }
                }, {
                    key: "reportOSSUpload",
                    value: function(e) {
                        var a = {
                            method: "serverless.file.resource.report",
                            params: JSON.stringify(e)
                        };
                        return this.request(this.setupRequest(a));
                    }
                }, {
                    key: "uploadFile",
                    value: function(e) {
                        var a = this, t = e.filePath, l = e.cloudPath, n = e.fileType, r = void 0 === n ? "image" : n, u = e.onUploadProgress, i = e.config;
                        if ("string" !== $(l)) throw new oe({
                            code: "INVALID_PARAM",
                            message: "cloudPath必须为字符串类型"
                        });
                        if (!(l = l.trim())) throw new oe({
                            code: "CLOUDPATH_REQUIRED",
                            message: "cloudPath不可为空"
                        });
                        if (/:\/\//.test(l)) throw new oe({
                            code: "INVALID_PARAM",
                            message: "cloudPath不合法"
                        });
                        var o, s, c = i && i.envType || this.config.envType;
                        return this.getOSSUploadOptionsFromPath({
                            env: c,
                            filename: l
                        }).then(function(e) {
                            var l = e.result;
                            o = l.id, s = "https://" + l.cdnDomain + "/" + l.ossPath;
                            var n = {
                                url: "https://" + l.host,
                                formData: {
                                    "Cache-Control": "max-age=2592000",
                                    "Content-Disposition": "attachment",
                                    OSSAccessKeyId: l.accessKeyId,
                                    Signature: l.signature,
                                    host: l.host,
                                    id: o,
                                    key: l.ossPath,
                                    policy: l.policy,
                                    success_action_status: 200
                                },
                                fileName: "file",
                                name: "file",
                                filePath: t,
                                fileType: r
                            };
                            return a.uploadFileToOSS(Object.assign({}, n, {
                                onUploadProgress: u
                            }));
                        }).then(function() {
                            return a.reportOSSUpload({
                                id: o
                            });
                        }).then(function(e) {
                            return new Promise(function(a, l) {
                                e.success ? a({
                                    success: !0,
                                    filePath: t,
                                    fileID: s
                                }) : l(new oe({
                                    code: "UPLOAD_FAILED",
                                    message: "文件上传失败"
                                }));
                            });
                        });
                    }
                }, {
                    key: "deleteFile",
                    value: function(e) {
                        var a = e.fileList, t = {
                            method: "serverless.file.resource.delete",
                            params: JSON.stringify({
                                id: a[0]
                            })
                        };
                        return this.request(this.setupRequest(t));
                    }
                }, {
                    key: "getTempFileURL",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = e.fileList;
                        return new Promise(function(e, t) {
                            Array.isArray(a) && 0 !== a.length || t(new oe({
                                code: "INVALID_PARAM",
                                message: "fileList的元素必须是非空的字符串"
                            })), e({
                                fileList: a.map(function(e) {
                                    return {
                                        fileID: e,
                                        tempFileURL: e
                                    };
                                })
                            });
                        });
                    }
                }, {
                    key: "hasAccessToken",
                    get: function() {
                        return !!this.accessToken;
                    }
                } ]), e;
            }(), ye = function(e) {
                var a = new ge(e), t = {
                    signInAnonymously: function() {
                        return a.authorize();
                    },
                    getLoginState: function() {
                        return Promise.resolve(!1);
                    }
                };
                return a.auth = function() {
                    return t;
                }, a.customAuth = a.auth, a;
            }, me = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
            !function(e) {
                e.local = "local", e.none = "none", e.session = "session";
            }(ve || (ve = {}));
            var _e, we = function() {
                var e;
                if (!Promise) {
                    (e = function() {}).promise = {};
                    var a = function() {
                        throw new oe({
                            message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
                        });
                    };
                    return Object.defineProperty(e.promise, "then", {
                        get: a
                    }), Object.defineProperty(e.promise, "catch", {
                        get: a
                    }), e;
                }
                var t = new Promise(function(a, t) {
                    e = function(e, l) {
                        return e ? t(e) : a(l);
                    };
                });
                return e.promise = t, e;
            };
            function ke(e) {
                return void 0 === e;
            }
            function Oe(e) {
                return "[object Null]" === Object.prototype.toString.call(e);
            }
            !function(e) {
                e.WEB = "web", e.WX_MP = "wx_mp";
            }(_e || (_e = {}));
            var xe = {
                adapter: null,
                runtime: void 0
            }, Ae = [ "anonymousUuidKey" ], Pe = function(e) {
                w(t, e);
                var a = k(t);
                function t() {
                    var e;
                    return _(this, t), e = a.call(this), xe.adapter.root.tcbObject || (xe.adapter.root.tcbObject = {}), 
                    e;
                }
                return p(t, [ {
                    key: "setItem",
                    value: function(e, a) {
                        xe.adapter.root.tcbObject[e] = a;
                    }
                }, {
                    key: "getItem",
                    value: function(e) {
                        return xe.adapter.root.tcbObject[e];
                    }
                }, {
                    key: "removeItem",
                    value: function(e) {
                        delete xe.adapter.root.tcbObject[e];
                    }
                }, {
                    key: "clear",
                    value: function() {
                        delete xe.adapter.root.tcbObject;
                    }
                } ]), t;
            }(function() {});
            function Se(e, a) {
                switch (e) {
                  case "local":
                    return a.localStorage || new Pe();

                  case "none":
                    return new Pe();

                  default:
                    return a.sessionStorage || new Pe();
                }
            }
            var Te = function() {
                function e(a) {
                    if (_(this, e), !this._storage) {
                        this._persistence = xe.adapter.primaryStorage || a.persistence, this._storage = Se(this._persistence, xe.adapter);
                        var t = "access_token_".concat(a.env), l = "access_token_expire_".concat(a.env), n = "refresh_token_".concat(a.env), r = "anonymous_uuid_".concat(a.env), u = "login_type_".concat(a.env), i = "user_info_".concat(a.env);
                        this.keys = {
                            accessTokenKey: t,
                            accessTokenExpireKey: l,
                            refreshTokenKey: n,
                            anonymousUuidKey: r,
                            loginTypeKey: u,
                            userInfoKey: i
                        };
                    }
                }
                return p(e, [ {
                    key: "updatePersistence",
                    value: function(e) {
                        if (e !== this._persistence) {
                            var a = "local" === this._persistence;
                            this._persistence = e;
                            var t = Se(e, xe.adapter);
                            for (var l in this.keys) {
                                var n = this.keys[l];
                                if (!a || !Ae.includes(l)) {
                                    var r = this._storage.getItem(n);
                                    ke(r) || Oe(r) || (t.setItem(n, r), this._storage.removeItem(n));
                                }
                            }
                            this._storage = t;
                        }
                    }
                }, {
                    key: "setStore",
                    value: function(e, a, t) {
                        if (this._storage) {
                            var l = {
                                version: t || "localCachev1",
                                content: a
                            }, n = JSON.stringify(l);
                            try {
                                this._storage.setItem(e, n);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                throw e;
                            }
                        }
                    }
                }, {
                    key: "getStore",
                    value: function(e, a) {
                        try {
                            if (!this._storage) return;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return "";
                        }
                        a = a || "localCachev1";
                        var t = this._storage.getItem(e);
                        return t && t.indexOf(a) >= 0 ? JSON.parse(t).content : "";
                    }
                }, {
                    key: "removeStore",
                    value: function(e) {
                        this._storage.removeItem(e);
                    }
                } ]), e;
            }(), je = {}, Ce = {};
            function Ee(e) {
                return je[e];
            }
            var Ie = function e(a, t) {
                _(this, e), this.data = t || null, this.name = a;
            }, De = function(e) {
                w(t, e);
                var a = k(t);
                function t(e, l) {
                    var n;
                    return _(this, t), (n = a.call(this, "error", {
                        error: e,
                        data: l
                    })).error = e, n;
                }
                return t;
            }(Ie), $e = new (function() {
                function e() {
                    _(this, e), this._listeners = {};
                }
                return p(e, [ {
                    key: "on",
                    value: function(e, a) {
                        return function(e, a, t) {
                            t[e] = t[e] || [], t[e].push(a);
                        }(e, a, this._listeners), this;
                    }
                }, {
                    key: "off",
                    value: function(e, a) {
                        return function(e, a, t) {
                            if (t && t[e]) {
                                var l = t[e].indexOf(a);
                                -1 !== l && t[e].splice(l, 1);
                            }
                        }(e, a, this._listeners), this;
                    }
                }, {
                    key: "fire",
                    value: function(e, a) {
                        if (e instanceof De) return console.error(e.error), this;
                        var t = "string" == typeof e ? new Ie(e, a || {}) : e, l = t.name;
                        if (this._listens(l)) {
                            t.target = this;
                            var n, r = f(this._listeners[l] ? v(this._listeners[l]) : []);
                            try {
                                for (r.s(); !(n = r.n()).done; ) {
                                    n.value.call(this, t);
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                r.e(e);
                            } finally {
                                r.f();
                            }
                        }
                        return this;
                    }
                }, {
                    key: "_listens",
                    value: function(e) {
                        return this._listeners[e] && this._listeners[e].length > 0;
                    }
                } ]), e;
            }())();
            function Le(e, a) {
                $e.on(e, a);
            }
            function Me(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                $e.fire(e, a);
            }
            function Re(e, a) {
                $e.off(e, a);
            }
            var Ne, Ue = "loginStateChanged", qe = "loginStateExpire", Fe = "loginTypeChanged", Be = "anonymousConverted", He = "refreshAccessToken";
            !function(e) {
                e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", 
                e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", 
                e.NULL = "NULL";
            }(Ne || (Ne = {}));
            var Ve = [ "auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered" ], ze = {
                "X-SDK-Version": "1.3.5"
            };
            function Ke(e, a, t) {
                var l = e[a];
                e[a] = function(a) {
                    var n = {}, r = {};
                    t.forEach(function(t) {
                        var l = t.call(e, a), u = l.data, i = l.headers;
                        Object.assign(n, u), Object.assign(r, i);
                    });
                    var u = a.data;
                    return u && function() {
                        var e;
                        if (e = u, "[object FormData]" !== Object.prototype.toString.call(e)) a.data = y(y({}, u), n); else for (var t in n) u.append(t, n[t]);
                    }(), a.headers = y(y({}, a.headers || {}), r), l.call(e, a);
                };
            }
            function We() {
                var e = Math.random().toString(16).slice(2);
                return {
                    data: {
                        seqId: e
                    },
                    headers: y(y({}, ze), {}, {
                        "x-seqid": e
                    })
                };
            }
            var Ge = function() {
                function e() {
                    var a, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    _(this, e), this.config = t, this._reqClass = new xe.adapter.reqClass({
                        timeout: this.config.timeout,
                        timeoutMsg: "请求在".concat(this.config.timeout / 1e3, "s内未完成，已中断"),
                        restrictedMethods: [ "post" ]
                    }), this._cache = Ee(this.config.env), this._localCache = (a = this.config.env, 
                    Ce[a]), Ke(this._reqClass, "post", [ We ]), Ke(this._reqClass, "upload", [ We ]), 
                    Ke(this._reqClass, "download", [ We ]);
                }
                return p(e, [ {
                    key: "post",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._reqClass.post(a);

                                  case 2:
                                    return e.abrupt("return", e.sent);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "upload",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._reqClass.upload(a);

                                  case 2:
                                    return e.abrupt("return", e.sent);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "download",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._reqClass.download(a);

                                  case 2:
                                    return e.abrupt("return", e.sent);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "refreshAccessToken",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            var a, t;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), 
                                    e.prev = 1, e.next = 4, this._refreshAccessTokenPromise;

                                  case 4:
                                    a = e.sent, e.next = 10;
                                    break;

                                  case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = e.t0;

                                  case 10:
                                    if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, 
                                    !t) {
                                        e.next = 12;
                                        break;
                                    }
                                    throw t;

                                  case 12:
                                    return e.abrupt("return", a);

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 1, 7 ] ]);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "_refreshAccessToken",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            var a, t, l, n, u, i, o, s, c, v, f, b, d;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (a = this._cache.keys, t = a.accessTokenKey, l = a.accessTokenExpireKey, n = a.refreshTokenKey, 
                                    u = a.loginTypeKey, i = a.anonymousUuidKey, this._cache.removeStore(t), this._cache.removeStore(l), 
                                    o = this._cache.getStore(n)) {
                                        e.next = 5;
                                        break;
                                    }
                                    throw new oe({
                                        message: "未登录CloudBase"
                                    });

                                  case 5:
                                    return s = {
                                        refresh_token: o
                                    }, e.next = 8, this.request("auth.fetchAccessTokenWithRefreshToken", s);

                                  case 8:
                                    if (!(c = e.sent).data.code) {
                                        e.next = 21;
                                        break;
                                    }
                                    if ("SIGN_PARAM_INVALID" !== (v = c.data.code) && "REFRESH_TOKEN_EXPIRED" !== v && "INVALID_REFRESH_TOKEN" !== v) {
                                        e.next = 20;
                                        break;
                                    }
                                    if (this._cache.getStore(u) !== Ne.ANONYMOUS || "INVALID_REFRESH_TOKEN" !== v) {
                                        e.next = 19;
                                        break;
                                    }
                                    return f = this._cache.getStore(i), b = this._cache.getStore(n), e.next = 17, this.send("auth.signInAnonymously", {
                                        anonymous_uuid: f,
                                        refresh_token: b
                                    });

                                  case 17:
                                    return d = e.sent, e.abrupt("return", (this.setRefreshToken(d.refresh_token), this._refreshAccessToken()));

                                  case 19:
                                    Me(qe), this._cache.removeStore(n);

                                  case 20:
                                    throw new oe({
                                        code: c.data.code,
                                        message: "刷新access token失败：".concat(c.data.code)
                                    });

                                  case 21:
                                    if (!c.data.access_token) {
                                        e.next = 23;
                                        break;
                                    }
                                    return e.abrupt("return", (Me(He), this._cache.setStore(t, c.data.access_token), 
                                    this._cache.setStore(l, c.data.access_token_expire + Date.now()), {
                                        accessToken: c.data.access_token,
                                        accessTokenExpire: c.data.access_token_expire
                                    }));

                                  case 23:
                                    c.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, c.data.refresh_token), 
                                    this._refreshAccessToken());

                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "getAccessToken",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            var a, t, l, n, u, i, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (a = this._cache.keys, t = a.accessTokenKey, l = a.accessTokenExpireKey, n = a.refreshTokenKey, 
                                    this._cache.getStore(n)) {
                                        e.next = 3;
                                        break;
                                    }
                                    throw new oe({
                                        message: "refresh token不存在，登录状态异常"
                                    });

                                  case 3:
                                    if (u = this._cache.getStore(t), i = this._cache.getStore(l), o = !0, e.t0 = this._shouldRefreshAccessTokenHook, 
                                    !e.t0) {
                                        e.next = 9;
                                        break;
                                    }
                                    return e.next = 8, this._shouldRefreshAccessTokenHook(u, i);

                                  case 8:
                                    e.t0 = !e.sent;

                                  case 9:
                                    if (e.t1 = e.t0, !e.t1) {
                                        e.next = 12;
                                        break;
                                    }
                                    o = !1;

                                  case 12:
                                    return e.abrupt("return", (!u || !i || i < Date.now()) && o ? this.refreshAccessToken() : {
                                        accessToken: u,
                                        accessTokenExpire: i
                                    });

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "request",
                    value: function() {
                        var e = c(r.default.mark(function e(a, t, l) {
                            var n, u, i, o, s, c, v, f, b, d, h, p, g, m, _, w;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (n = "x-tcb-trace_".concat(this.config.env), u = "application/x-www-form-urlencoded", 
                                    i = y({
                                        action: a,
                                        env: this.config.env,
                                        dataVersion: "2019-08-16"
                                    }, t), -1 !== Ve.indexOf(a)) {
                                        e.next = 10;
                                        break;
                                    }
                                    if (o = this._cache.keys.refreshTokenKey, e.t0 = this._cache.getStore(o), !e.t0) {
                                        e.next = 10;
                                        break;
                                    }
                                    return e.next = 9, this.getAccessToken();

                                  case 9:
                                    i.access_token = e.sent.accessToken;

                                  case 10:
                                    if ("storage.uploadFile" === a) {
                                        for (c in s = new FormData()) s.hasOwnProperty(c) && void 0 !== s[c] && s.append(c, i[c]);
                                        u = "multipart/form-data";
                                    } else for (v in u = "application/json", s = {}, i) void 0 !== i[v] && (s[v] = i[v]);
                                    return f = {
                                        headers: {
                                            "content-type": u
                                        }
                                    }, l && l.onUploadProgress && (f.onUploadProgress = l.onUploadProgress), (b = this._localCache.getStore(n)) && (f.headers["X-TCB-Trace"] = b), 
                                    d = t.parse, h = t.inQuery, p = t.search, g = {
                                        env: this.config.env
                                    }, d && (g.parse = !0), h && (g = y(y({}, h), g)), m = function(e, a) {
                                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = /\?/.test(a), n = "";
                                        for (var r in t) "" === n ? !l && (a += "?") : n += "&", n += "".concat(r, "=").concat(encodeURIComponent(t[r]));
                                        return /^http(s)?\:\/\//.test(a += n) ? a : "".concat(e).concat(a);
                                    }(me, "//tcb-api.tencentcloudapi.com/web", g), p && (m += p), e.next = 22, this.post(y({
                                        url: m,
                                        data: s
                                    }, f));

                                  case 22:
                                    if (_ = e.sent, (w = _.header && _.header["x-tcb-trace"]) && this._localCache.setStore(n, w), 
                                    (200 === Number(_.status) || 200 === Number(_.statusCode)) && _.data) {
                                        e.next = 26;
                                        break;
                                    }
                                    throw new oe({
                                        code: "NETWORK_ERROR",
                                        message: "network request error"
                                    });

                                  case 26:
                                    return e.abrupt("return", _);

                                  case 27:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a, t, l) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "send",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            var t, l, n, u = arguments;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t = u.length > 1 && void 0 !== u[1] ? u[1] : {}, e.next = 3, this.request(a, t, {
                                        onUploadProgress: t.onUploadProgress
                                    });

                                  case 3:
                                    if ("ACCESS_TOKEN_EXPIRED" !== (l = e.sent).data.code || -1 !== Ve.indexOf(a)) {
                                        e.next = 13;
                                        break;
                                    }
                                    return e.next = 7, this.refreshAccessToken();

                                  case 7:
                                    return e.next = 9, this.request(a, t, {
                                        onUploadProgress: t.onUploadProgress
                                    });

                                  case 9:
                                    if (!(n = e.sent).data.code) {
                                        e.next = 12;
                                        break;
                                    }
                                    throw new oe({
                                        code: n.data.code,
                                        message: n.data.message
                                    });

                                  case 12:
                                    return e.abrupt("return", n.data);

                                  case 13:
                                    if (!l.data.code) {
                                        e.next = 15;
                                        break;
                                    }
                                    throw new oe({
                                        code: l.data.code,
                                        message: l.data.message
                                    });

                                  case 15:
                                    return e.abrupt("return", l.data);

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "setRefreshToken",
                    value: function(e) {
                        var a = this._cache.keys, t = a.accessTokenKey, l = a.accessTokenExpireKey, n = a.refreshTokenKey;
                        this._cache.removeStore(t), this._cache.removeStore(l), this._cache.setStore(n, e);
                    }
                } ]), e;
            }(), Je = {};
            function Xe(e) {
                return Je[e];
            }
            var Ze = function() {
                function e(a) {
                    _(this, e), this.config = a, this._cache = Ee(a.env), this._request = Xe(a.env);
                }
                return p(e, [ {
                    key: "setRefreshToken",
                    value: function(e) {
                        var a = this._cache.keys, t = a.accessTokenKey, l = a.accessTokenExpireKey, n = a.refreshTokenKey;
                        this._cache.removeStore(t), this._cache.removeStore(l), this._cache.setStore(n, e);
                    }
                }, {
                    key: "setAccessToken",
                    value: function(e, a) {
                        var t = this._cache.keys, l = t.accessTokenKey, n = t.accessTokenExpireKey;
                        this._cache.setStore(l, e), this._cache.setStore(n, a);
                    }
                }, {
                    key: "refreshUserInfo",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            var a, t;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._request.send("auth.getUserInfo", {});

                                  case 2:
                                    return a = e.sent, t = a.data, e.abrupt("return", (this.setLocalUserInfo(t), t));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "setLocalUserInfo",
                    value: function(e) {
                        var a = this._cache.keys.userInfoKey;
                        this._cache.setStore(a, e);
                    }
                } ]), e;
            }(), Ye = function() {
                function e(a) {
                    if (_(this, e), !a) throw new oe({
                        code: "PARAM_ERROR",
                        message: "envId is not defined"
                    });
                    this._envId = a, this._cache = Ee(this._envId), this._request = Xe(this._envId), 
                    this.setUserInfo();
                }
                return p(e, [ {
                    key: "linkWithTicket",
                    value: function(e) {
                        if ("string" != typeof e) throw new oe({
                            code: "PARAM_ERROR",
                            message: "ticket must be string"
                        });
                        return this._request.send("auth.linkWithTicket", {
                            ticket: e
                        });
                    }
                }, {
                    key: "linkWithRedirect",
                    value: function(e) {
                        e.signInWithRedirect();
                    }
                }, {
                    key: "updatePassword",
                    value: function(e, a) {
                        return this._request.send("auth.updatePassword", {
                            oldPassword: a,
                            newPassword: e
                        });
                    }
                }, {
                    key: "updateEmail",
                    value: function(e) {
                        return this._request.send("auth.updateEmail", {
                            newEmail: e
                        });
                    }
                }, {
                    key: "updateUsername",
                    value: function(e) {
                        if ("string" != typeof e) throw new oe({
                            code: "PARAM_ERROR",
                            message: "username must be a string"
                        });
                        return this._request.send("auth.updateUsername", {
                            username: e
                        });
                    }
                }, {
                    key: "getLinkedUidList",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            var a, t, l, n;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._request.send("auth.getLinkedUidList", {});

                                  case 2:
                                    return a = e.sent, t = a.data, l = !1, n = t.users, e.abrupt("return", (n.forEach(function(e) {
                                        e.wxOpenId && e.wxPublicId && (l = !0);
                                    }), {
                                        users: n,
                                        hasPrimaryUid: l
                                    }));

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "setPrimaryUid",
                    value: function(e) {
                        return this._request.send("auth.setPrimaryUid", {
                            uid: e
                        });
                    }
                }, {
                    key: "unlink",
                    value: function(e) {
                        return this._request.send("auth.unlink", {
                            platform: e
                        });
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            var t, l, n, u, i, o, s, c;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t = a.nickName, l = a.gender, n = a.avatarUrl, u = a.province, i = a.country, 
                                    o = a.city, e.next = 8, this._request.send("auth.updateUserInfo", {
                                        nickName: t,
                                        gender: l,
                                        avatarUrl: n,
                                        province: u,
                                        country: i,
                                        city: o
                                    });

                                  case 8:
                                    s = e.sent, c = s.data, this.setLocalUserInfo(c);

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "refresh",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            var a, t;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._request.send("auth.getUserInfo", {});

                                  case 2:
                                    return a = e.sent, t = a.data, e.abrupt("return", (this.setLocalUserInfo(t), t));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "setUserInfo",
                    value: function() {
                        var e = this, a = this._cache.keys.userInfoKey, t = this._cache.getStore(a);
                        [ "uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl" ].forEach(function(a) {
                            e[a] = t[a];
                        }), this.location = {
                            country: t.country,
                            province: t.province,
                            city: t.city
                        };
                    }
                }, {
                    key: "setLocalUserInfo",
                    value: function(e) {
                        var a = this._cache.keys.userInfoKey;
                        this._cache.setStore(a, e), this.setUserInfo();
                    }
                } ]), e;
            }(), Qe = function() {
                function e(a) {
                    if (_(this, e), !a) throw new oe({
                        code: "PARAM_ERROR",
                        message: "envId is not defined"
                    });
                    this._cache = Ee(a);
                    var t = this._cache.keys, l = t.refreshTokenKey, n = t.accessTokenKey, r = t.accessTokenExpireKey, u = this._cache.getStore(l), i = this._cache.getStore(n), o = this._cache.getStore(r);
                    this.credential = {
                        refreshToken: u,
                        accessToken: i,
                        accessTokenExpire: o
                    }, this.user = new Ye(a);
                }
                return p(e, [ {
                    key: "isAnonymousAuth",
                    get: function() {
                        return this.loginType === Ne.ANONYMOUS;
                    }
                }, {
                    key: "isCustomAuth",
                    get: function() {
                        return this.loginType === Ne.CUSTOM;
                    }
                }, {
                    key: "isWeixinAuth",
                    get: function() {
                        return this.loginType === Ne.WECHAT || this.loginType === Ne.WECHAT_OPEN || this.loginType === Ne.WECHAT_PUBLIC;
                    }
                }, {
                    key: "loginType",
                    get: function() {
                        return this._cache.getStore(this._cache.keys.loginTypeKey);
                    }
                } ]), e;
            }(), ea = function(e) {
                w(t, e);
                var a = k(t);
                function t() {
                    return _(this, t), a.apply(this, arguments);
                }
                return p(t, [ {
                    key: "signIn",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            var a, t, l, n, u, i, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this._cache.updatePersistence("local"), a = this._cache.keys, t = a.anonymousUuidKey, 
                                    l = a.refreshTokenKey, n = this._cache.getStore(t) || void 0, u = this._cache.getStore(l) || void 0, 
                                    e.next = 8, this._request.send("auth.signInAnonymously", {
                                        anonymous_uuid: n,
                                        refresh_token: u
                                    });

                                  case 8:
                                    if (!(i = e.sent).uuid || !i.refresh_token) {
                                        e.next = 20;
                                        break;
                                    }
                                    return this._setAnonymousUUID(i.uuid), this.setRefreshToken(i.refresh_token), e.next = 14, 
                                    this._request.refreshAccessToken();

                                  case 14:
                                    return Me(Ue), Me(Fe, {
                                        env: this.config.env,
                                        loginType: Ne.ANONYMOUS,
                                        persistence: "local"
                                    }), o = new Qe(this.config.env), e.next = 19, o.user.refresh();

                                  case 19:
                                    return e.abrupt("return", o);

                                  case 20:
                                    throw new oe({
                                        message: "匿名登录失败"
                                    });

                                  case 21:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "linkAndRetrieveDataWithTicket",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            var t, l, n, u, i, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t = this._cache.keys, l = t.anonymousUuidKey, n = t.refreshTokenKey, u = this._cache.getStore(l), 
                                    i = this._cache.getStore(n), e.next = 7, this._request.send("auth.linkAndRetrieveDataWithTicket", {
                                        anonymous_uuid: u,
                                        refresh_token: i,
                                        ticket: a
                                    });

                                  case 7:
                                    if (!(o = e.sent).refresh_token) {
                                        e.next = 16;
                                        break;
                                    }
                                    return this._clearAnonymousUUID(), this.setRefreshToken(o.refresh_token), e.next = 13, 
                                    this._request.refreshAccessToken();

                                  case 13:
                                    return Me(Be, {
                                        env: this.config.env
                                    }), Me(Fe, {
                                        loginType: Ne.CUSTOM,
                                        persistence: "local"
                                    }), e.abrupt("return", {
                                        credential: {
                                            refreshToken: o.refresh_token
                                        }
                                    });

                                  case 16:
                                    throw new oe({
                                        message: "匿名转化失败"
                                    });

                                  case 17:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "_setAnonymousUUID",
                    value: function(e) {
                        var a = this._cache.keys, t = a.anonymousUuidKey, l = a.loginTypeKey;
                        this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(l, Ne.ANONYMOUS);
                    }
                }, {
                    key: "_clearAnonymousUUID",
                    value: function() {
                        this._cache.removeStore(this._cache.keys.anonymousUuidKey);
                    }
                } ]), t;
            }(Ze), aa = function(e) {
                w(t, e);
                var a = k(t);
                function t() {
                    return _(this, t), a.apply(this, arguments);
                }
                return p(t, [ {
                    key: "signIn",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            var t, l;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("string" == typeof a) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new oe({
                                        param: "PARAM_ERROR",
                                        message: "ticket must be a string"
                                    });

                                  case 2:
                                    return t = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signInWithTicket", {
                                        ticket: a,
                                        refresh_token: this._cache.getStore(t) || ""
                                    });

                                  case 5:
                                    if (!(l = e.sent).refresh_token) {
                                        e.next = 15;
                                        break;
                                    }
                                    return this.setRefreshToken(l.refresh_token), e.next = 10, this._request.refreshAccessToken();

                                  case 10:
                                    return Me(Ue), Me(Fe, {
                                        env: this.config.env,
                                        loginType: Ne.CUSTOM,
                                        persistence: this.config.persistence
                                    }), e.next = 14, this.refreshUserInfo();

                                  case 14:
                                    return e.abrupt("return", new Qe(this.config.env));

                                  case 15:
                                    throw new oe({
                                        message: "自定义登录失败"
                                    });

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                } ]), t;
            }(Ze), ta = function(e) {
                w(t, e);
                var a = k(t);
                function t() {
                    return _(this, t), a.apply(this, arguments);
                }
                return p(t, [ {
                    key: "signIn",
                    value: function() {
                        var e = c(r.default.mark(function e(a, t) {
                            var l, n, u, i, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("string" == typeof a) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new oe({
                                        code: "PARAM_ERROR",
                                        message: "email must be a string"
                                    });

                                  case 2:
                                    return l = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signIn", {
                                        loginType: "EMAIL",
                                        email: a,
                                        password: t,
                                        refresh_token: this._cache.getStore(l) || ""
                                    });

                                  case 5:
                                    if (n = e.sent, u = n.refresh_token, i = n.access_token, o = n.access_token_expire, 
                                    !u) {
                                        e.next = 22;
                                        break;
                                    }
                                    if (this.setRefreshToken(u), !i || !o) {
                                        e.next = 15;
                                        break;
                                    }
                                    this.setAccessToken(i, o), e.next = 17;
                                    break;

                                  case 15:
                                    return e.next = 17, this._request.refreshAccessToken();

                                  case 17:
                                    return e.next = 19, this.refreshUserInfo();

                                  case 19:
                                    return Me(Ue), Me(Fe, {
                                        env: this.config.env,
                                        loginType: Ne.EMAIL,
                                        persistence: this.config.persistence
                                    }), e.abrupt("return", new Qe(this.config.env));

                                  case 22:
                                    throw n.code ? new oe({
                                        code: n.code,
                                        message: "邮箱登录失败: ".concat(n.message)
                                    }) : new oe({
                                        message: "邮箱登录失败"
                                    });

                                  case 23:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a, t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "activate",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", this._request.send("auth.activateEndUserMail", {
                                        token: a
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "resetPasswordWithToken",
                    value: function() {
                        var e = c(r.default.mark(function e(a, t) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                                        token: a,
                                        newPassword: t
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a, t) {
                            return e.apply(this, arguments);
                        };
                    }()
                } ]), t;
            }(Ze), la = function(e) {
                w(t, e);
                var a = k(t);
                function t() {
                    return _(this, t), a.apply(this, arguments);
                }
                return p(t, [ {
                    key: "signIn",
                    value: function() {
                        var e = c(r.default.mark(function e(a, t) {
                            var l, n, u, i, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("string" == typeof a) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new oe({
                                        code: "PARAM_ERROR",
                                        message: "username must be a string"
                                    });

                                  case 2:
                                    return "string" != typeof t && (t = "", console.warn("password is empty")), l = this._cache.keys.refreshTokenKey, 
                                    e.next = 6, this._request.send("auth.signIn", {
                                        loginType: Ne.USERNAME,
                                        username: a,
                                        password: t,
                                        refresh_token: this._cache.getStore(l) || ""
                                    });

                                  case 6:
                                    if (n = e.sent, u = n.refresh_token, i = n.access_token_expire, o = n.access_token, 
                                    !u) {
                                        e.next = 23;
                                        break;
                                    }
                                    if (this.setRefreshToken(u), !o || !i) {
                                        e.next = 16;
                                        break;
                                    }
                                    this.setAccessToken(o, i), e.next = 18;
                                    break;

                                  case 16:
                                    return e.next = 18, this._request.refreshAccessToken();

                                  case 18:
                                    return e.next = 20, this.refreshUserInfo();

                                  case 20:
                                    return Me(Ue), Me(Fe, {
                                        env: this.config.env,
                                        loginType: Ne.USERNAME,
                                        persistence: this.config.persistence
                                    }), e.abrupt("return", new Qe(this.config.env));

                                  case 23:
                                    throw n.code ? new oe({
                                        code: n.code,
                                        message: "用户名密码登录失败: ".concat(n.message)
                                    }) : new oe({
                                        message: "用户名密码登录失败"
                                    });

                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a, t) {
                            return e.apply(this, arguments);
                        };
                    }()
                } ]), t;
            }(Ze), na = function() {
                function e(a) {
                    _(this, e), this.config = a, this._cache = Ee(a.env), this._request = Xe(a.env), 
                    this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), 
                    Le(Fe, this._onLoginTypeChanged);
                }
                return p(e, [ {
                    key: "anonymousAuthProvider",
                    value: function() {
                        return new ea(this.config);
                    }
                }, {
                    key: "customAuthProvider",
                    value: function() {
                        return new aa(this.config);
                    }
                }, {
                    key: "emailAuthProvider",
                    value: function() {
                        return new ta(this.config);
                    }
                }, {
                    key: "usernameAuthProvider",
                    value: function() {
                        return new la(this.config);
                    }
                }, {
                    key: "signInAnonymously",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new ea(this.config).signIn());

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "signInWithEmailAndPassword",
                    value: function() {
                        var e = c(r.default.mark(function e(a, t) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new ta(this.config).signIn(a, t));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a, t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "signInWithUsernameAndPassword",
                    value: function(e, a) {
                        return new la(this.config).signIn(e, a);
                    }
                }, {
                    key: "linkAndRetrieveDataWithTicket",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this._anonymousAuthProvider || (this._anonymousAuthProvider = new ea(this.config)), 
                                    Le(Be, this._onAnonymousConverted), e.next = 3, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(a);

                                  case 3:
                                    return e.abrupt("return", e.sent);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "signOut",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            var a, t, l, n, u, i;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (this.loginType !== Ne.ANONYMOUS) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new oe({
                                        message: "匿名用户不支持登出操作"
                                    });

                                  case 2:
                                    if (a = this._cache.keys, t = a.refreshTokenKey, l = a.accessTokenKey, n = a.accessTokenExpireKey, 
                                    u = this._cache.getStore(t)) {
                                        e.next = 5;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 5:
                                    return e.next = 7, this._request.send("auth.logout", {
                                        refresh_token: u
                                    });

                                  case 7:
                                    return i = e.sent, e.abrupt("return", (this._cache.removeStore(t), this._cache.removeStore(l), 
                                    this._cache.removeStore(n), Me(Ue), Me(Fe, {
                                        env: this.config.env,
                                        loginType: Ne.NULL,
                                        persistence: this.config.persistence
                                    }), i));

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "signUpWithEmailAndPassword",
                    value: function() {
                        var e = c(r.default.mark(function e(a, t) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                                        email: a,
                                        password: t
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a, t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "sendPasswordResetEmail",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                                        email: a
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "onLoginStateChanged",
                    value: function(e) {
                        var a = this;
                        Le(Ue, function() {
                            var t = a.hasLoginState();
                            e.call(a, t);
                        });
                        var t = this.hasLoginState();
                        e.call(this, t);
                    }
                }, {
                    key: "onLoginStateExpired",
                    value: function(e) {
                        Le(qe, e.bind(this));
                    }
                }, {
                    key: "onAccessTokenRefreshed",
                    value: function(e) {
                        Le(He, e.bind(this));
                    }
                }, {
                    key: "onAnonymousConverted",
                    value: function(e) {
                        Le(Be, e.bind(this));
                    }
                }, {
                    key: "onLoginTypeChanged",
                    value: function(e) {
                        var a = this;
                        Le(Fe, function() {
                            var t = a.hasLoginState();
                            e.call(a, t);
                        });
                    }
                }, {
                    key: "getAccessToken",
                    value: function() {
                        var e = c(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._request.getAccessToken();

                                  case 2:
                                    return e.t0 = e.sent.accessToken, e.t1 = this.config.env, e.abrupt("return", {
                                        accessToken: e.t0,
                                        env: e.t1
                                    });

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "hasLoginState",
                    value: function() {
                        var e = this._cache.keys.refreshTokenKey;
                        return this._cache.getStore(e) ? new Qe(this.config.env) : null;
                    }
                }, {
                    key: "isUsernameRegistered",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            var t, l;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("string" == typeof a) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new oe({
                                        code: "PARAM_ERROR",
                                        message: "username must be a string"
                                    });

                                  case 2:
                                    return e.next = 4, this._request.send("auth.isUsernameRegistered", {
                                        username: a
                                    });

                                  case 4:
                                    return t = e.sent, l = t.data, e.abrupt("return", l && l.isRegistered);

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "getLoginState",
                    value: function() {
                        return Promise.resolve(this.hasLoginState());
                    }
                }, {
                    key: "signInWithTicket",
                    value: function() {
                        var e = c(r.default.mark(function e(a) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new aa(this.config).signIn(a));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "shouldRefreshAccessToken",
                    value: function(e) {
                        this._request._shouldRefreshAccessTokenHook = e.bind(this);
                    }
                }, {
                    key: "getUserInfo",
                    value: function() {
                        return this._request.send("auth.getUserInfo", {}).then(function(e) {
                            return e.code ? e : y(y({}, e.data), {}, {
                                requestId: e.seqId
                            });
                        });
                    }
                }, {
                    key: "getAuthHeader",
                    value: function() {
                        var e = this._cache.keys, a = e.refreshTokenKey, t = e.accessTokenKey, l = this._cache.getStore(a);
                        return {
                            "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + l
                        };
                    }
                }, {
                    key: "_onAnonymousConverted",
                    value: function(e) {
                        e.data.env === this.config.env && this._cache.updatePersistence(this.config.persistence);
                    }
                }, {
                    key: "_onLoginTypeChanged",
                    value: function(e) {
                        var a = e.data, t = a.loginType, l = a.persistence;
                        a.env === this.config.env && (this._cache.updatePersistence(l), this._cache.setStore(this._cache.keys.loginTypeKey, t));
                    }
                }, {
                    key: "currentUser",
                    get: function() {
                        var e = this.hasLoginState();
                        return e && e.user || null;
                    }
                }, {
                    key: "loginType",
                    get: function() {
                        return this._cache.getStore(this._cache.keys.loginTypeKey);
                    }
                } ]), e;
            }(), ra = function(e, a) {
                a = a || we();
                var t = Xe(this.config.env), l = e.cloudPath, n = e.filePath, r = e.onUploadProgress, u = e.fileType, i = void 0 === u ? "image" : u;
                return t.send("storage.getUploadMetadata", {
                    path: l
                }).then(function(e) {
                    var u = e.data, o = u.url, s = u.authorization, c = u.token, v = u.fileId, f = u.cosFileId, b = e.requestId, d = {
                        key: l,
                        signature: s,
                        "x-cos-meta-fileid": f,
                        success_action_status: "201",
                        "x-cos-security-token": c
                    };
                    t.upload({
                        url: o,
                        data: d,
                        file: n,
                        name: l,
                        fileType: i,
                        onUploadProgress: r
                    }).then(function(e) {
                        201 === e.statusCode ? a(null, {
                            fileID: v,
                            requestId: b
                        }) : a(new oe({
                            code: "STORAGE_REQUEST_FAIL",
                            message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
                        }));
                    }).catch(function(e) {
                        a(e);
                    });
                }).catch(function(e) {
                    a(e);
                }), a.promise;
            }, ua = function(e, a) {
                a = a || we();
                var t = Xe(this.config.env), l = e.cloudPath;
                return t.send("storage.getUploadMetadata", {
                    path: l
                }).then(function(e) {
                    a(null, e);
                }).catch(function(e) {
                    a(e);
                }), a.promise;
            }, ia = function(e, a) {
                var t = e.fileList;
                if (a = a || we(), !t || !Array.isArray(t)) return {
                    code: "INVALID_PARAM",
                    message: "fileList必须是非空的数组"
                };
                var l, n = f(t);
                try {
                    for (n.s(); !(l = n.n()).done; ) {
                        var r = l.value;
                        if (!r || "string" != typeof r) return {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是非空的字符串"
                        };
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n.e(e);
                } finally {
                    n.f();
                }
                var u = {
                    fileid_list: t
                };
                return Xe(this.config.env).send("storage.batchDeleteFile", u).then(function(e) {
                    e.code ? a(null, e) : a(null, {
                        fileList: e.data.delete_list,
                        requestId: e.requestId
                    });
                }).catch(function(e) {
                    a(e);
                }), a.promise;
            }, oa = function(a, t) {
                var l = a.fileList;
                t = t || we(), l && Array.isArray(l) || t(null, {
                    code: "INVALID_PARAM",
                    message: "fileList必须是非空的数组"
                });
                var n, r = [], u = f(l);
                try {
                    for (u.s(); !(n = u.n()).done; ) {
                        var i = n.value;
                        "object" == e(i) ? (i.hasOwnProperty("fileID") && i.hasOwnProperty("maxAge") || t(null, {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是包含fileID和maxAge的对象"
                        }), r.push({
                            fileid: i.fileID,
                            max_age: i.maxAge
                        })) : "string" == typeof i ? r.push({
                            fileid: i
                        }) : t(null, {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是字符串"
                        });
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    u.e(e);
                } finally {
                    u.f();
                }
                var o = {
                    file_list: r
                };
                return Xe(this.config.env).send("storage.batchGetDownloadUrl", o).then(function(e) {
                    e.code ? t(null, e) : t(null, {
                        fileList: e.data.download_list,
                        requestId: e.requestId
                    });
                }).catch(function(e) {
                    t(e);
                }), t.promise;
            }, sa = function() {
                var e = c(r.default.mark(function e(a, t) {
                    var l, n, u, i;
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return l = a.fileID, e.next = 3, oa.call(this, {
                                fileList: [ {
                                    fileID: l,
                                    maxAge: 600
                                } ]
                            });

                          case 3:
                            if ("SUCCESS" === (n = e.sent.fileList[0]).code) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", t ? t(n) : new Promise(function(e) {
                                e(n);
                            }));

                          case 6:
                            if (u = Xe(this.config.env), i = n.download_url, i = encodeURI(i), t) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", u.download({
                                url: i
                            }));

                          case 10:
                            return e.t0 = t, e.next = 13, u.download({
                                url: i
                            });

                          case 13:
                            e.t1 = e.sent, (0, e.t0)(e.t1);

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return function(a, t) {
                    return e.apply(this, arguments);
                };
            }(), ca = function(e, a) {
                var t, l = e.name, n = e.data, r = e.query, u = e.parse, i = e.search, o = a || we();
                try {
                    t = n ? JSON.stringify(n) : "";
                } catch (l) {
                    l = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(l);
                    return Promise.reject(l);
                }
                if (!l) return Promise.reject(new oe({
                    code: "PARAM_ERROR",
                    message: "函数名不能为空"
                }));
                var s = {
                    inQuery: r,
                    parse: u,
                    search: i,
                    function_name: l,
                    request_data: t
                };
                return Xe(this.config.env).send("functions.invokeFunction", s).then(function(e) {
                    if (e.code) o(null, e); else {
                        var a = e.data.response_data;
                        if (u) o(null, {
                            result: a,
                            requestId: e.requestId
                        }); else try {
                            a = JSON.parse(e.data.response_data), o(null, {
                                result: a,
                                requestId: e.requestId
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            o(new oe({
                                message: "response data must be json"
                            }));
                        }
                    }
                    return o.promise;
                }).catch(function(e) {
                    o(e);
                }), o.promise;
            }, va = {
                timeout: 15e3,
                persistence: "session"
            }, fa = {}, ba = new (function() {
                function e(a) {
                    _(this, e), this.config = a || this.config, this.authObj = void 0;
                }
                return p(e, [ {
                    key: "init",
                    value: function(a) {
                        switch (xe.adapter || (this.requestClient = new xe.adapter.reqClass({
                            timeout: a.timeout || 5e3,
                            timeoutMsg: "请求在".concat((a.timeout || 5e3) / 1e3, "s内未完成，已中断")
                        })), this.config = y(y({}, va), a), !0) {
                          case this.config.timeout > 6e5:
                            console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
                            break;

                          case this.config.timeout < 100:
                            console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
                        }
                        return new e(this.config);
                    }
                }, {
                    key: "auth",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = e.persistence;
                        if (this.authObj) return this.authObj;
                        var t, l = a || xe.adapter.primaryStorage || va.persistence;
                        return l !== this.config.persistence && (this.config.persistence = l), function(e) {
                            var a = e.env;
                            je[a] = new Te(e), Ce[a] = new Te(y(y({}, e), {}, {
                                persistence: "local"
                            }));
                        }(this.config), t = this.config, Je[t.env] = new Ge(t), this.authObj = new na(this.config), 
                        this.authObj;
                    }
                }, {
                    key: "on",
                    value: function(e, a) {
                        return Le.apply(this, [ e, a ]);
                    }
                }, {
                    key: "off",
                    value: function(e, a) {
                        return Re.apply(this, [ e, a ]);
                    }
                }, {
                    key: "callFunction",
                    value: function(e, a) {
                        return ca.apply(this, [ e, a ]);
                    }
                }, {
                    key: "deleteFile",
                    value: function(e, a) {
                        return ia.apply(this, [ e, a ]);
                    }
                }, {
                    key: "getTempFileURL",
                    value: function(e, a) {
                        return oa.apply(this, [ e, a ]);
                    }
                }, {
                    key: "downloadFile",
                    value: function(e, a) {
                        return sa.apply(this, [ e, a ]);
                    }
                }, {
                    key: "uploadFile",
                    value: function(e, a) {
                        return ra.apply(this, [ e, a ]);
                    }
                }, {
                    key: "getUploadMetadata",
                    value: function(e, a) {
                        return ua.apply(this, [ e, a ]);
                    }
                }, {
                    key: "registerExtension",
                    value: function(e) {
                        fa[e.name] = e;
                    }
                }, {
                    key: "invokeExtension",
                    value: function() {
                        var e = c(r.default.mark(function e(a, t) {
                            var l;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (l = fa[a]) {
                                        e.next = 3;
                                        break;
                                    }
                                    throw new oe({
                                        message: "扩展".concat(a, " 必须先注册")
                                    });

                                  case 3:
                                    return e.next = 5, l.invoke(t, this);

                                  case 5:
                                    return e.abrupt("return", e.sent);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(a, t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "useAdapters",
                    value: function(e) {
                        var a = function(e) {
                            var a, t, l = f((a = e, "[object Array]" === Object.prototype.toString.call(a) ? e : [ e ]));
                            try {
                                for (l.s(); !(t = l.n()).done; ) {
                                    var n = t.value, r = n.isMatch, u = n.genAdapter, i = n.runtime;
                                    if (r()) return {
                                        adapter: u(),
                                        runtime: i
                                    };
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                l.e(e);
                            } finally {
                                l.f();
                            }
                        }(e) || {}, t = a.adapter, l = a.runtime;
                        t && (xe.adapter = t), l && (xe.runtime = l);
                    }
                } ]), e;
            }())();
            function da(e, a, t) {
                void 0 === t && (t = {});
                var l = /\?/.test(a), n = "";
                for (var r in t) "" === n ? !l && (a += "?") : n += "&", n += r + "=" + encodeURIComponent(t[r]);
                return /^http(s)?:\/\//.test(a += n) ? a : "" + e + a;
            }
            var ha = function() {
                function e() {
                    _(this, e);
                }
                return p(e, [ {
                    key: "post",
                    value: function(e) {
                        var a = e.url, t = e.data, l = e.headers;
                        return new Promise(function(e, n) {
                            de.request({
                                url: da("https:", a),
                                data: t,
                                method: "POST",
                                header: l,
                                success: function(a) {
                                    e(a);
                                },
                                fail: function(e) {
                                    n(e);
                                }
                            });
                        });
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        return new Promise(function(a, t) {
                            var l = e.url, n = e.file, r = e.data, u = e.headers, i = e.fileType, o = de.uploadFile({
                                url: da("https:", l),
                                name: "file",
                                formData: Object.assign({}, r),
                                filePath: n,
                                fileType: i,
                                header: u,
                                success: function(e) {
                                    var t = {
                                        statusCode: e.statusCode,
                                        data: e.data || {}
                                    };
                                    200 === e.statusCode && r.success_action_status && (t.statusCode = parseInt(r.success_action_status, 10)), 
                                    a(t);
                                },
                                fail: function(e) {
                                    t(new Error(e.errMsg || "uploadFile:fail"));
                                }
                            });
                            "function" == typeof e.onUploadProgress && o && "function" == typeof o.onProgressUpdate && o.onProgressUpdate(function(a) {
                                e.onUploadProgress({
                                    loaded: a.totalBytesSent,
                                    total: a.totalBytesExpectedToSend
                                });
                            });
                        });
                    }
                } ]), e;
            }(), pa = {
                setItem: function(e, a) {
                    de.setStorageSync(e, a);
                },
                getItem: function(e) {
                    return de.getStorageSync(e);
                },
                removeItem: function(e) {
                    de.removeStorageSync(e);
                },
                clear: function() {
                    de.clearStorageSync();
                }
            }, ga = {
                genAdapter: function() {
                    return {
                        root: {},
                        reqClass: ha,
                        localStorage: pa,
                        primaryStorage: "local"
                    };
                },
                isMatch: function() {
                    return !0;
                },
                runtime: "uni_app"
            };
            ba.useAdapters(ga);
            var ya = ba, ma = ya.init;
            ya.init = function(e) {
                e.env = e.spaceId;
                var a = ma.call(this, e);
                a.config.provider = "tencent", a.config.spaceId = e.spaceId;
                var t = a.auth;
                return a.auth = function(e) {
                    var a = t.call(this, e);
                    return [ "linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo" ].forEach(function(e) {
                        a[e] = ue(a[e]).bind(a);
                    }), a;
                }, a.customAuth = a.auth, a;
            };
            var _a = ya;
            function wa() {
                return {
                    token: de.getStorageSync("uni_id_token") || de.getStorageSync("uniIdToken"),
                    tokenExpired: de.getStorageSync("uni_id_token_expired")
                };
            }
            function ka() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = e.token, t = e.tokenExpired;
                a && de.setStorageSync("uni_id_token", a), t && de.setStorageSync("uni_id_token_expired", t);
            }
            var Oa = function(e) {
                w(t, e);
                var a = k(t);
                function t() {
                    return _(this, t), a.apply(this, arguments);
                }
                return p(t, [ {
                    key: "getAccessToken",
                    value: function() {
                        var e = this;
                        return new Promise(function(a, t) {
                            var l = "Anonymous_Access_token";
                            e.setAccessToken(l), a(l);
                        });
                    }
                }, {
                    key: "setupRequest",
                    value: function(e, a) {
                        var t = Object.assign({}, e, {
                            spaceId: this.config.spaceId,
                            timestamp: Date.now()
                        }), l = {
                            "Content-Type": "application/json"
                        };
                        "auth" !== a && (t.token = this.accessToken, l["x-basement-token"] = this.accessToken), 
                        l["x-serverless-sign"] = fe(t, this.config.clientSecret);
                        var n = ce();
                        l["x-client-info"] = JSON.stringify(n);
                        var r = wa().token;
                        return l["x-client-token"] = r, {
                            url: this.config.requestUrl,
                            method: "POST",
                            data: t,
                            dataType: "json",
                            header: JSON.parse(JSON.stringify(l))
                        };
                    }
                }, {
                    key: "uploadFileToOSS",
                    value: function(e) {
                        var a = this, t = e.url, l = e.formData, n = e.name, r = e.filePath, u = e.fileType, i = e.onUploadProgress;
                        return new Promise(function(e, o) {
                            var s = a.adapter.uploadFile({
                                url: t,
                                formData: l,
                                name: n,
                                filePath: r,
                                fileType: u,
                                success: function(a) {
                                    a && a.statusCode < 400 ? e(a) : o(new oe({
                                        code: "UPLOAD_FAILED",
                                        message: "文件上传失败"
                                    }));
                                },
                                fail: function(e) {
                                    o(new oe({
                                        code: e.code || "UPLOAD_FAILED",
                                        message: e.message || e.errMsg || "文件上传失败"
                                    }));
                                }
                            });
                            "function" == typeof i && s && "function" == typeof s.onProgressUpdate && s.onProgressUpdate(function(e) {
                                i({
                                    loaded: e.totalBytesSent,
                                    total: e.totalBytesExpectedToSend
                                });
                            });
                        });
                    }
                }, {
                    key: "uploadFile",
                    value: function(e) {
                        var a, t = this, l = e.filePath, n = e.cloudPath, r = e.fileType, u = void 0 === r ? "image" : r, i = e.onUploadProgress;
                        if (!n) throw new oe({
                            code: "CLOUDPATH_REQUIRED",
                            message: "cloudPath不可为空"
                        });
                        return this.getOSSUploadOptionsFromPath({
                            cloudPath: n
                        }).then(function(e) {
                            var n = e.result, r = n.url, o = n.formData, s = n.name;
                            a = e.result.fileUrl;
                            var c = {
                                url: r,
                                formData: o,
                                name: s,
                                filePath: l,
                                fileType: u
                            };
                            return t.uploadFileToOSS(Object.assign({}, c, {
                                onUploadProgress: i
                            }));
                        }).then(function() {
                            return t.reportOSSUpload({
                                cloudPath: n
                            });
                        }).then(function(e) {
                            return new Promise(function(t, n) {
                                e.success ? t({
                                    success: !0,
                                    filePath: l,
                                    fileID: a
                                }) : n(new oe({
                                    code: "UPLOAD_FAILED",
                                    message: "文件上传失败"
                                }));
                            });
                        });
                    }
                }, {
                    key: "deleteFile",
                    value: function(e) {
                        var a = e.fileList, t = {
                            method: "serverless.file.resource.delete",
                            params: JSON.stringify({
                                fileList: a
                            })
                        };
                        return this.request(this.setupRequest(t));
                    }
                }, {
                    key: "getTempFileURL",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = e.fileList, t = {
                            method: "serverless.file.resource.getTempFileURL",
                            params: JSON.stringify({
                                fileList: a
                            })
                        };
                        return this.request(this.setupRequest(t));
                    }
                } ]), t;
            }(ge), xa = function(e) {
                var a = new Oa(e), t = {
                    signInAnonymously: function() {
                        return a.authorize();
                    },
                    getLoginState: function() {
                        return Promise.resolve(!1);
                    }
                };
                return a.auth = function() {
                    return t;
                }, a.customAuth = a.auth, a;
            };
            function Aa(e) {
                var a, t = e.data;
                a = ce();
                var l = JSON.parse(JSON.stringify(t || {}));
                if (Object.assign(l, {
                    clientInfo: a
                }), !l.uniIdToken) {
                    var n = wa().token;
                    n && (l.uniIdToken = n);
                }
                return l;
            }
            var Pa = [ {
                rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
                content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
                mode: "append"
            } ], Sa = /[\\^$.*+?()[\]{}|]/g, Ta = RegExp(Sa.source);
            function ja(e, a, t) {
                return e.replace(new RegExp((l = a) && Ta.test(l) ? l.replace(Sa, "\\$&") : l, "g"), t);
                var l;
            }
            function Ca(e) {
                var a = e.functionName, t = e.result, l = e.logPvd;
                if (this.config.useDebugFunction && t && t.requestId) {
                    var n = JSON.stringify({
                        spaceId: this.config.spaceId,
                        functionName: a,
                        requestId: t.requestId
                    });
                    console.log("[".concat(l, "-request]").concat(n, "[/").concat(l, "-request]"));
                }
            }
            function Ea(e) {
                var a = e.callFunction, t = function(t) {
                    var l = this, n = t.name;
                    t.data = Aa.call(e, {
                        data: t.data
                    });
                    var r = {
                        aliyun: "aliyun",
                        tencent: "tcb",
                        tcb: "tcb"
                    }[this.config.provider];
                    return a.call(this, t).then(function(e) {
                        return e.errCode = 0, Ca.call(l, {
                            functionName: n,
                            result: e,
                            logPvd: r
                        }), Promise.resolve(e);
                    }, function(e) {
                        return Ca.call(l, {
                            functionName: n,
                            result: e,
                            logPvd: r
                        }), e && e.message && (e.message = function() {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = e.message, t = void 0 === a ? "" : a, l = e.extraInfo, n = void 0 === l ? {} : l, r = e.formatter, u = void 0 === r ? [] : r, i = 0; i < u.length; i++) {
                                var o = u[i], s = o.rule, c = o.content, v = o.mode, f = t.match(s);
                                if (f) {
                                    for (var b = c, d = 1; d < f.length; d++) b = ja(b, "{$".concat(d, "}"), f[d]);
                                    for (var h in n) b = ja(b, "{".concat(h, "}"), n[h]);
                                    return "replace" === v ? b : t + b;
                                }
                            }
                            return t;
                        }({
                            message: "[".concat(t.name, "]: ").concat(e.message),
                            formatter: Pa,
                            extraInfo: {
                                functionName: n
                            }
                        })), Promise.reject(e);
                    });
                };
                e.callFunction = function(e) {
                    var a;
                    return a = t.call(this, e), Object.defineProperty(a, "result", {
                        get: function() {
                            return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), 
                            {};
                        }
                    }), a;
                };
            }
            var Ia = Symbol("CLIENT_DB_INTERNAL");
            function Da(e, a) {
                return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Ia, 
                e.__ob__ = void 0, new Proxy(e, {
                    get: function(e, t, l) {
                        if ("_uniClient" === t) return null;
                        if (t in e || "string" != typeof t) {
                            var n = e[t];
                            return "function" == typeof n ? n.bind(e) : n;
                        }
                        return a.get(e, t, l);
                    }
                });
            }
            function $a(e) {
                return {
                    on: function(a, t) {
                        e[a] = e[a] || [], e[a].indexOf(t) > -1 || e[a].push(t);
                    },
                    off: function(a, t) {
                        e[a] = e[a] || [];
                        var l = e[a].indexOf(t);
                        -1 !== l && e[a].splice(l, 1);
                    }
                };
            }
            var La = [ "db.Geo", "db.command", "command.aggregate" ];
            function Ma(e, a) {
                return La.indexOf("".concat(e, ".").concat(a)) > -1;
            }
            function Ra(e) {
                switch ($(e)) {
                  case "array":
                    return e.map(function(e) {
                        return Ra(e);
                    });

                  case "object":
                    return e._internalType === Ia || Object.keys(e).forEach(function(a) {
                        e[a] = Ra(e[a]);
                    }), e;

                  case "regexp":
                    return {
                        $regexp: {
                            source: e.source,
                            flags: e.flags
                        }
                    };

                  case "date":
                    return {
                        $date: e.toISOString()
                    };

                  default:
                    return e;
                }
            }
            var Na = function() {
                function e(a, t, l) {
                    _(this, e), this.content = a, this.prevStage = t || null, this.udb = null, this._database = l;
                }
                return p(e, [ {
                    key: "toJSON",
                    value: function() {
                        for (var e = this, a = [ e.content ]; e.prevStage; ) e = e.prevStage, a.push(e.content);
                        return {
                            $db: a.reverse().map(function(e) {
                                return {
                                    $method: e.$method,
                                    $param: Ra(e.$param)
                                };
                            })
                        };
                    }
                }, {
                    key: "getAction",
                    value: function() {
                        var e = this.toJSON().$db.find(function(e) {
                            return "action" === e.$method;
                        });
                        return e && e.$param && e.$param[0];
                    }
                }, {
                    key: "getCommand",
                    value: function() {
                        return {
                            $db: this.toJSON().$db.filter(function(e) {
                                return "action" !== e.$method;
                            })
                        };
                    }
                }, {
                    key: "get",
                    value: function() {
                        return this._send("get", Array.from(arguments));
                    }
                }, {
                    key: "add",
                    value: function() {
                        return this._send("add", Array.from(arguments));
                    }
                }, {
                    key: "remove",
                    value: function() {
                        return this._send("remove", Array.from(arguments));
                    }
                }, {
                    key: "update",
                    value: function() {
                        return this._send("update", Array.from(arguments));
                    }
                }, {
                    key: "end",
                    value: function() {
                        return this._send("end", Array.from(arguments));
                    }
                }, {
                    key: "set",
                    value: function() {
                        throw new Error("clientDB禁止使用set方法");
                    }
                }, {
                    key: "_send",
                    value: function(e, a) {
                        var t = this.getAction(), l = this.getCommand();
                        return l.$db.push({
                            $method: e,
                            $param: Ra(a)
                        }), this._database._callCloudFunction({
                            action: t,
                            command: l
                        });
                    }
                }, {
                    key: "useAggregate",
                    get: function() {
                        for (var e = this, a = !1; e.prevStage; ) {
                            var t = (e = e.prevStage).content.$method;
                            if ("aggregate" === t || "pipeline" === t) {
                                a = !0;
                                break;
                            }
                        }
                        return a;
                    }
                }, {
                    key: "count",
                    get: function() {
                        if (!this.useAggregate) return function() {
                            return this._send("count", Array.from(arguments));
                        };
                        var e = this;
                        return function() {
                            return Ua({
                                $method: "count",
                                $param: Ra(Array.from(arguments))
                            }, e, this._database);
                        };
                    }
                } ]), e;
            }();
            function Ua(e, a, t) {
                return Da(new Na(e, a, t), {
                    get: function(e, a) {
                        var l = "db";
                        return e && e.content && (l = e.content.$method), Ma(l, a) ? Ua({
                            $method: a
                        }, e, t) : function() {
                            return Ua({
                                $method: a,
                                $param: Ra(Array.from(arguments))
                            }, e, t);
                        };
                    }
                });
            }
            function qa(e) {
                var a = e.path, t = e.method;
                return function() {
                    function e() {
                        _(this, e), this.param = Array.from(arguments);
                    }
                    return p(e, [ {
                        key: "toJSON",
                        value: function() {
                            return {
                                $newDb: [].concat(v(a.map(function(e) {
                                    return {
                                        $method: e
                                    };
                                })), [ {
                                    $method: t,
                                    $param: this.param
                                } ])
                            };
                        }
                    } ]), e;
                }();
            }
            var Fa = function(e) {
                w(t, e);
                var a = k(t);
                function t() {
                    return _(this, t), a.apply(this, arguments);
                }
                return p(t, [ {
                    key: "_callCloudFunction",
                    value: function(e) {
                        var a = this, t = e.action, l = e.command, n = e.multiCommand, r = e.queryList;
                        function u(e, a) {
                            if (n && r) for (var t = 0; t < r.length; t++) {
                                var l = r[t];
                                l.udb && "function" == typeof l.udb.setResult && (a ? l.udb.setResult(a) : l.udb.setResult(e.result.dataList[t]));
                            }
                        }
                        var i = this;
                        function o(e) {
                            return i._callback("error", [ e ]), W(G("database", "fail"), e).then(function() {
                                return W(G("database", "complete"), e);
                            }).then(function() {
                                return u(null, e), re(X, {
                                    type: Q,
                                    content: e
                                }), Promise.reject(e);
                            });
                        }
                        var s = W(G("database", "invoke")), c = this._uniClient;
                        return s.then(function() {
                            return c.callFunction({
                                name: "DCloud-clientDB",
                                type: "CLIENT_DB",
                                data: {
                                    action: t,
                                    command: l,
                                    multiCommand: n
                                }
                            });
                        }).then(function(e) {
                            var t = e.result, l = t.code, n = t.message, r = t.token, i = t.tokenExpired, s = t.systemInfo, c = void 0 === s ? [] : s;
                            if (c) for (var v = 0; v < c.length; v++) {
                                var f = c[v], b = f.level, d = f.message, h = f.detail, p = console[b] || console.log, g = "[System Info]" + d;
                                h && (g = "".concat(g, "\n详细信息：").concat(h)), p(g);
                            }
                            if (l) return o(new oe({
                                code: l,
                                message: n,
                                requestId: e.requestId
                            }));
                            e.result.errCode = e.result.code, e.result.errMsg = e.result.message, r && i && (ka({
                                token: r,
                                tokenExpired: i
                            }), a._callbackAuth("refreshToken", [ {
                                token: r,
                                tokenExpired: i
                            } ]), a._callback("refreshToken", [ {
                                token: r,
                                tokenExpired: i
                            } ]), re(Y, {
                                token: r,
                                tokenExpired: i
                            }));
                            for (var y = [ {
                                prop: "affectedDocs",
                                tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
                            }, {
                                prop: "code",
                                tips: "code不再推荐使用，请使用errCode替代"
                            }, {
                                prop: "message",
                                tips: "message不再推荐使用，请使用errMsg替代"
                            } ], m = function(a) {
                                var t = y[a], l = t.prop, n = t.tips;
                                if (l in e.result) {
                                    var r = e.result[l];
                                    Object.defineProperty(e.result, l, {
                                        get: function() {
                                            return console.warn(n), r;
                                        }
                                    });
                                }
                            }, _ = 0; _ < y.length; _++) m(_);
                            return function(e) {
                                return W(G("database", "success"), e).then(function() {
                                    return W(G("database", "complete"), e);
                                }).then(function() {
                                    return u(e, null), re(X, {
                                        type: Q,
                                        content: e
                                    }), Promise.resolve(e);
                                });
                            }(e);
                        }, function(e) {
                            return /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), 
                            o(new oe({
                                code: e.code || "SYSTEM_ERROR",
                                message: e.message,
                                requestId: e.requestId
                            }));
                        });
                    }
                } ]), t;
            }(function() {
                function e() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = a.uniClient, l = void 0 === t ? {} : t;
                    _(this, e), this._uniClient = l, this._authCallBacks = {}, this._dbCallBacks = {}, 
                    l.isDefault && (this._dbCallBacks = B("_globalUniCloudDatabaseCallback")), this.auth = $a(this._authCallBacks), 
                    Object.assign(this, $a(this._dbCallBacks)), this.env = Da({}, {
                        get: function(e, a) {
                            return {
                                $env: a
                            };
                        }
                    }), this.Geo = Da({}, {
                        get: function(e, a) {
                            return qa({
                                path: [ "Geo" ],
                                method: a
                            });
                        }
                    }), this.serverDate = qa({
                        path: [],
                        method: "serverDate"
                    }), this.RegExp = qa({
                        path: [],
                        method: "RegExp"
                    });
                }
                return p(e, [ {
                    key: "getCloudEnv",
                    value: function(e) {
                        if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
                        return {
                            $env: e.replace("$cloudEnv_", "")
                        };
                    }
                }, {
                    key: "_callback",
                    value: function(e, a) {
                        var t = this._dbCallBacks;
                        t[e] && t[e].forEach(function(e) {
                            e.apply(void 0, v(a));
                        });
                    }
                }, {
                    key: "_callbackAuth",
                    value: function(e, a) {
                        var t = this._authCallBacks;
                        t[e] && t[e].forEach(function(e) {
                            e.apply(void 0, v(a));
                        });
                    }
                }, {
                    key: "multiSend",
                    value: function() {
                        var e = Array.from(arguments), a = e.map(function(e) {
                            var a = e.getAction(), t = e.getCommand();
                            if ("getTemp" !== t.$db[t.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
                            return {
                                action: a,
                                command: t
                            };
                        });
                        return this._callCloudFunction({
                            multiCommand: a,
                            queryList: e
                        });
                    }
                } ]), e;
            }());
            var Ba = "token无效，跳转登录页面", Ha = "token过期，跳转登录页面", Va = {
                TOKEN_INVALID_TOKEN_EXPIRED: Ha,
                TOKEN_INVALID_INVALID_CLIENTID: Ba,
                TOKEN_INVALID: Ba,
                TOKEN_INVALID_WRONG_TOKEN: Ba,
                TOKEN_INVALID_ANONYMOUS_USER: Ba
            }, za = {
                "uni-id-token-expired": Ha,
                "uni-id-check-token-failed": Ba,
                "uni-id-token-not-exist": Ba,
                "uni-id-check-device-feature-failed": Ba
            };
            function Ka(e, a) {
                return (e ? "".concat(e, "/").concat(a) : a).replace(/^\//, "");
            }
            function Wa() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", t = [], l = [];
                return e.forEach(function(e) {
                    !0 === e.needLogin ? t.push(Ka(a, e.path)) : !1 === e.needLogin && l.push(Ka(a, e.path));
                }), {
                    needLoginPage: t,
                    notNeedLoginPage: l
                };
            }
            var Ga, Ja = !!i.default.uniIdRouter, Xa = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default, a = e.pages, t = void 0 === a ? [] : a, l = e.subPackages, n = void 0 === l ? [] : l, r = e.uniIdRouter, u = void 0 === r ? {} : r, o = u.loginPage, s = u.needLogin, c = void 0 === s ? [] : s, f = u.resToLogin, b = void 0 === f || f, d = Wa(t), h = d.needLoginPage, p = d.notNeedLoginPage, g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = [], t = [];
                    return e.forEach(function(e) {
                        var l = e.root, n = e.pages, r = Wa(void 0 === n ? [] : n, l), u = r.needLoginPage, i = r.notNeedLoginPage;
                        a.push.apply(a, v(u)), t.push.apply(t, v(i));
                    }), {
                        needLoginPage: a,
                        notNeedLoginPage: t
                    };
                }(n), y = g.needLoginPage, m = g.notNeedLoginPage;
                return {
                    loginPage: o,
                    routerNeedLogin: c,
                    resToLogin: b,
                    needLoginPage: [].concat(v(h), v(y)),
                    notNeedLoginPage: [].concat(v(p), v(m))
                };
            }(), Za = Xa.loginPage, Ya = Xa.routerNeedLogin, Qa = Xa.resToLogin, et = Xa.needLoginPage, at = Xa.notNeedLoginPage;
            function tt(e) {
                var a = function(e) {
                    var a = getCurrentPages(), t = a[a.length - 1].route, l = e.charAt(0), n = e.split("?")[0];
                    if ("/" === l) return n;
                    var r = n.replace(/^\//, "").split("/"), u = t.split("/");
                    u.pop();
                    for (var i = 0; i < r.length; i++) {
                        var o = r[i];
                        ".." === o ? u.pop() : "." !== o && u.push(o);
                    }
                    return "" === u[0] && u.shift(), u.join("/");
                }(e).replace(/^\//, "");
                return !(at.indexOf(a) > -1) && (et.indexOf(a) > -1 || Ya.some(function(a) {
                    return function(e, a) {
                        return new RegExp(a).test(e);
                    }(e, a);
                }));
            }
            function lt(e, a) {
                return "/" !== e.charAt(0) && (e = "/" + e), a ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(a)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(a)) : e;
            }
            function nt() {
                for (var e = [ "navigateTo", "redirectTo", "reLaunch", "switchTab" ], a = 0; a < e.length; a++) {
                    var t = e[a];
                    n.addInterceptor(t, {
                        invoke: function(e) {
                            var a, t = wa(), l = t.token, n = t.tokenExpired;
                            if (l) {
                                if (n < Date.now()) {
                                    var r = "uni-id-token-expired";
                                    a = {
                                        errCode: r,
                                        errMsg: za[r]
                                    };
                                }
                            } else {
                                var u = "uni-id-check-token-failed";
                                a = {
                                    errCode: u,
                                    errMsg: za[u]
                                };
                            }
                            if (tt(e.url) && a) {
                                if (a.uniIdRedirectUrl = e.url, te(Z).length > 0) return setTimeout(function() {
                                    re(Z, a);
                                }, 0), e.url = "", !1;
                                if (!Za) return e;
                                e.url = lt(Za, a.uniIdRedirectUrl);
                            }
                            return e;
                        }
                    });
                }
            }
            function rt() {
                this.onResponse(function(e) {
                    var a = e.type, t = e.content, l = !1;
                    switch (a) {
                      case "cloudobject":
                        l = function(e) {
                            return e.errCode in za;
                        }(t);
                        break;

                      case "clientdb":
                        l = function(e) {
                            return e.errCode in Va;
                        }(t);
                    }
                    l && function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = te(Z), t = getCurrentPages(), l = t[t.length - 1], r = l && l.$page && l.$page.fullPath;
                        if (a.length > 0) return re(Z, Object.assign({
                            uniIdRedirectUrl: r
                        }, e));
                        Za && n.navigateTo({
                            url: lt(Za, r)
                        });
                    }(t);
                });
            }
            function ut(e) {
                e.onNeedLogin = function(e) {
                    le(Z, e);
                }, e.offNeedLogin = function(e) {
                    ne(Z, e);
                }, Ja && (B("uni-cloud-status").needLoginInit || (B("uni-cloud-status").needLoginInit = !0, 
                function a() {
                    var t = getCurrentPages();
                    t && t[0] ? nt.call(e) : setTimeout(function() {
                        a();
                    }, 30);
                }(), Qa && rt.call(e)));
            }
            var it = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", ot = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
            function st() {
                var e, a, t = wa().token || "", l = t.split(".");
                if (!t || 3 !== l.length) return {
                    uid: null,
                    role: [],
                    permission: [],
                    tokenExpired: 0
                };
                try {
                    e = JSON.parse((a = l[1], decodeURIComponent(Ga(a).split("").map(function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                    }).join(""))));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    throw new Error("获取当前用户信息出错，详细错误信息为：" + t.message);
                }
                return e.tokenExpired = 1e3 * e.exp, delete e.exp, delete e.iat, e;
            }
            Ga = "function" != typeof atob ? function(e) {
                if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ot.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
                var a;
                e += "==".slice(2 - (3 & e.length));
                for (var t, l, n = "", r = 0; r < e.length; ) a = it.indexOf(e.charAt(r++)) << 18 | it.indexOf(e.charAt(r++)) << 12 | (t = it.indexOf(e.charAt(r++))) << 6 | (l = it.indexOf(e.charAt(r++))), 
                n += 64 === t ? String.fromCharCode(a >> 16 & 255) : 64 === l ? String.fromCharCode(a >> 16 & 255, a >> 8 & 255) : String.fromCharCode(a >> 16 & 255, a >> 8 & 255, 255 & a);
                return n;
            } : atob;
            var ct = function(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
            }(j(function(e, a) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var t = "chooseAndUploadFile:ok", l = "chooseAndUploadFile:fail";
                function r(e, a) {
                    return e.tempFiles.forEach(function(e, t) {
                        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), a && (e.fileType = a), 
                        e.cloudPath = Date.now() + "_" + t + e.name.substring(e.name.lastIndexOf("."));
                    }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function(e) {
                        return e.path;
                    })), e;
                }
                function u(e, a, l) {
                    var n = l.onChooseFile, r = l.onUploadProgress;
                    return a.then(function(e) {
                        if (n) {
                            var a = n(e);
                            if (void 0 !== a) return Promise.resolve(a).then(function(a) {
                                return void 0 === a ? e : a;
                            });
                        }
                        return e;
                    }).then(function(a) {
                        return !1 === a ? {
                            errMsg: t,
                            tempFilePaths: [],
                            tempFiles: []
                        } : function(e, a) {
                            var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5, n = arguments.length > 3 ? arguments[3] : void 0;
                            (a = Object.assign({}, a)).errMsg = t;
                            var r = a.tempFiles, u = r.length, i = 0;
                            return new Promise(function(t) {
                                for (;i < l; ) o();
                                function o() {
                                    var l = i++;
                                    if (l >= u) !r.find(function(e) {
                                        return !e.url && !e.errMsg;
                                    }) && t(a); else {
                                        var s = r[l];
                                        e.uploadFile({
                                            filePath: s.path,
                                            cloudPath: s.cloudPath,
                                            fileType: s.fileType,
                                            onUploadProgress: function(e) {
                                                e.index = l, e.tempFile = s, e.tempFilePath = s.path, n && n(e);
                                            }
                                        }).then(function(e) {
                                            s.url = e.fileID, l < u && o();
                                        }).catch(function(e) {
                                            s.errMsg = e.errMsg || e.message, l < u && o();
                                        });
                                    }
                                }
                            });
                        }(e, a, 5, r);
                    });
                }
                a.initChooseAndUploadFile = function(e) {
                    return function() {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            type: "all"
                        };
                        return "image" === a.type ? u(e, function(e) {
                            var a = e.count, t = e.sizeType, u = e.sourceType, i = void 0 === u ? [ "album", "camera" ] : u, o = e.extension;
                            return new Promise(function(e, u) {
                                n.chooseImage({
                                    count: a,
                                    sizeType: t,
                                    sourceType: i,
                                    extension: o,
                                    success: function(a) {
                                        e(r(a, "image"));
                                    },
                                    fail: function(e) {
                                        u({
                                            errMsg: e.errMsg.replace("chooseImage:fail", l)
                                        });
                                    }
                                });
                            });
                        }(a), a) : "video" === a.type ? u(e, function(e) {
                            var a = e.camera, t = e.compressed, u = e.maxDuration, i = e.sourceType, o = void 0 === i ? [ "album", "camera" ] : i, s = e.extension;
                            return new Promise(function(e, i) {
                                n.chooseVideo({
                                    camera: a,
                                    compressed: t,
                                    maxDuration: u,
                                    sourceType: o,
                                    extension: s,
                                    success: function(a) {
                                        var t = a.tempFilePath, l = a.duration, n = a.size, u = a.height, i = a.width;
                                        e(r({
                                            errMsg: "chooseVideo:ok",
                                            tempFilePaths: [ t ],
                                            tempFiles: [ {
                                                name: a.tempFile && a.tempFile.name || "",
                                                path: t,
                                                size: n,
                                                type: a.tempFile && a.tempFile.type || "",
                                                width: i,
                                                height: u,
                                                duration: l,
                                                fileType: "video",
                                                cloudPath: ""
                                            } ]
                                        }, "video"));
                                    },
                                    fail: function(e) {
                                        i({
                                            errMsg: e.errMsg.replace("chooseVideo:fail", l)
                                        });
                                    }
                                });
                            });
                        }(a), a) : u(e, function(e) {
                            var a = e.count, t = e.extension;
                            return new Promise(function(e, u) {
                                var i = n.chooseFile;
                                if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), 
                                "function" != typeof i) return u({
                                    errMsg: l + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
                                });
                                i({
                                    type: "all",
                                    count: a,
                                    extension: t,
                                    success: function(a) {
                                        e(r(a));
                                    },
                                    fail: function(e) {
                                        u({
                                            errMsg: e.errMsg.replace("chooseFile:fail", l)
                                        });
                                    }
                                });
                            });
                        }(a), a);
                    };
                };
            }));
            function vt(e) {
                return {
                    props: {
                        localdata: {
                            type: Array,
                            default: function() {
                                return [];
                            }
                        },
                        options: {
                            type: [ Object, Array ],
                            default: function() {
                                return {};
                            }
                        },
                        spaceInfo: {
                            type: Object,
                            default: function() {
                                return {};
                            }
                        },
                        collection: {
                            type: [ String, Array ],
                            default: ""
                        },
                        action: {
                            type: String,
                            default: ""
                        },
                        field: {
                            type: String,
                            default: ""
                        },
                        orderby: {
                            type: String,
                            default: ""
                        },
                        where: {
                            type: [ String, Object ],
                            default: ""
                        },
                        pageData: {
                            type: String,
                            default: "add"
                        },
                        pageCurrent: {
                            type: Number,
                            default: 1
                        },
                        pageSize: {
                            type: Number,
                            default: 20
                        },
                        getcount: {
                            type: [ Boolean, String ],
                            default: !1
                        },
                        gettree: {
                            type: [ Boolean, String ],
                            default: !1
                        },
                        gettreepath: {
                            type: [ Boolean, String ],
                            default: !1
                        },
                        startwith: {
                            type: String,
                            default: ""
                        },
                        limitlevel: {
                            type: Number,
                            default: 10
                        },
                        groupby: {
                            type: String,
                            default: ""
                        },
                        groupField: {
                            type: String,
                            default: ""
                        },
                        distinct: {
                            type: [ Boolean, String ],
                            default: !1
                        },
                        foreignKey: {
                            type: String,
                            default: ""
                        },
                        loadtime: {
                            type: String,
                            default: "auto"
                        },
                        manual: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            mixinDatacomLoading: !1,
                            mixinDatacomHasMore: !1,
                            mixinDatacomResData: [],
                            mixinDatacomErrorMessage: "",
                            mixinDatacomPage: {}
                        };
                    },
                    created: function() {
                        var e = this;
                        this.mixinDatacomPage = {
                            current: this.pageCurrent,
                            size: this.pageSize,
                            count: 0
                        }, this.$watch(function() {
                            var a = [];
                            return [ "pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct" ].forEach(function(t) {
                                a.push(e[t]);
                            }), a;
                        }, function(a, t) {
                            if ("manual" !== e.loadtime) {
                                for (var l = !1, n = [], r = 2; r < a.length; r++) a[r] !== t[r] && (n.push(a[r]), 
                                l = !0);
                                a[0] !== t[0] && (e.mixinDatacomPage.current = e.pageCurrent), e.mixinDatacomPage.size = e.pageSize, 
                                e.onMixinDatacomPropsChange(l, n);
                            }
                        });
                    },
                    methods: {
                        onMixinDatacomPropsChange: function(e, a) {},
                        mixinDatacomEasyGet: function() {
                            var e = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = a.getone, l = void 0 !== t && t, n = a.success, r = a.fail;
                            this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", 
                            this.mixinDatacomGet().then(function(a) {
                                e.mixinDatacomLoading = !1;
                                var t = a.result, r = t.data, u = t.count;
                                e.getcount && (e.mixinDatacomPage.count = u), e.mixinDatacomHasMore = r.length < e.pageSize;
                                var i = l ? r.length ? r[0] : void 0 : r;
                                e.mixinDatacomResData = i, n && n(i);
                            }).catch(function(a) {
                                e.mixinDatacomLoading = !1, e.mixinDatacomErrorMessage = a, r && r(a);
                            }));
                        },
                        mixinDatacomGet: function() {
                            var a, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = e.database(this.spaceInfo), n = t.action || this.action;
                            n && (l = l.action(n));
                            var r = t.collection || this.collection;
                            l = Array.isArray(r) ? (a = l).collection.apply(a, v(r)) : l.collection(r);
                            var u = t.where || this.where;
                            u && Object.keys(u).length && (l = l.where(u));
                            var i = t.field || this.field;
                            i && (l = l.field(i));
                            var o = t.foreignKey || this.foreignKey;
                            o && (l = l.foreignKey(o));
                            var s = t.groupby || this.groupby;
                            s && (l = l.groupBy(s));
                            var c = t.groupField || this.groupField;
                            c && (l = l.groupField(c)), !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (l = l.distinct());
                            var f = t.orderby || this.orderby;
                            f && (l = l.orderBy(f));
                            var b = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current, d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size, h = void 0 !== t.getcount ? t.getcount : this.getcount, p = void 0 !== t.gettree ? t.gettree : this.gettree, g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath, y = {
                                getCount: h
                            }, m = {
                                limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
                                startWith: void 0 !== t.startwith ? t.startwith : this.startwith
                            };
                            return p && (y.getTree = m), g && (y.getTreePath = m), l = l.skip(d * (b - 1)).limit(d).get(y);
                        }
                    }
                };
            }
            function ft(e) {
                return function(a) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = t = function(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return e.customUI = a.customUI || e.customUI, Object.assign(e.loadingOptions, a.loadingOptions), 
                        Object.assign(e.errorOptions, a.errorOptions), e;
                    }({
                        customUI: !1,
                        loadingOptions: {
                            title: "加载中...",
                            mask: !0
                        },
                        errorOptions: {
                            type: "modal",
                            retry: !1
                        }
                    }, t), u = l.customUI, i = l.loadingOptions, o = l.errorOptions, s = !u;
                    return new Proxy({}, {
                        get: function(t, l) {
                            return function() {
                                var t = c(r.default.mark(function t() {
                                    var v, f, b, d, h, p, g, m, _, w, k, O = arguments;
                                    return r.default.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            for (s && n.showLoading({
                                                title: i.title,
                                                mask: i.mask
                                            }), f = O.length, b = new Array(f), d = 0; d < f; d++) b[d] = O[d];
                                            return t.prev = 2, t.next = 5, e.callFunction({
                                                name: a,
                                                type: D,
                                                data: {
                                                    method: l,
                                                    params: b
                                                }
                                            });

                                          case 5:
                                            v = t.sent, t.next = 11;
                                            break;

                                          case 8:
                                            t.prev = 8, t.t0 = t.catch(2), v = {
                                                result: t.t0
                                            };

                                          case 11:
                                            if (h = v.result || {}, p = h.errCode, g = h.errMsg, m = h.newToken, s && n.hideLoading(), 
                                            m && m.token && m.tokenExpired && (ka(m), re(Y, y({}, m))), !p) {
                                                t.next = 28;
                                                break;
                                            }
                                            if (!s) {
                                                t.next = 26;
                                                break;
                                            }
                                            if ("toast" !== o.type) {
                                                t.next = 18;
                                                break;
                                            }
                                            n.showToast({
                                                title: g,
                                                icon: "none"
                                            }), t.next = 26;
                                            break;

                                          case 18:
                                            if ("modal" === o.type) {
                                                t.next = 20;
                                                break;
                                            }
                                            throw new Error("Invalid errorOptions.type: ".concat(o.type));

                                          case 20:
                                            return t.next = 22, c(r.default.mark(function e() {
                                                var a, t, l, u, i, o, s = arguments;
                                                return r.default.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        return a = s.length > 0 && void 0 !== s[0] ? s[0] : {}, t = a.title, l = a.content, 
                                                        u = a.showCancel, i = a.cancelText, o = a.confirmText, e.abrupt("return", new Promise(function(e, a) {
                                                            n.showModal({
                                                                title: t,
                                                                content: l,
                                                                showCancel: u,
                                                                cancelText: i,
                                                                confirmText: o,
                                                                success: function(a) {
                                                                    e(a);
                                                                },
                                                                fail: function() {
                                                                    e({
                                                                        confirm: !1,
                                                                        cancel: !0
                                                                    });
                                                                }
                                                            });
                                                        }));

                                                      case 2:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }))({
                                                title: "提示",
                                                content: g,
                                                showCancel: o.retry,
                                                cancelText: "取消",
                                                confirmText: o.retry ? "重试" : "确定"
                                            });

                                          case 22:
                                            if (_ = t.sent, w = _.confirm, !o.retry || !w) {
                                                t.next = 26;
                                                break;
                                            }
                                            return t.abrupt("return", u.apply(void 0, b));

                                          case 26:
                                            throw (k = new oe({
                                                code: p,
                                                message: g,
                                                requestId: v.requestId
                                            })).detail = v.result, re(X, {
                                                type: ae,
                                                content: k
                                            }), k;

                                          case 28:
                                            return t.abrupt("return", (re(X, {
                                                type: ae,
                                                content: v.result
                                            }), v.result));

                                          case 29:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t, null, [ [ 2, 8 ] ]);
                                }));
                                function u() {
                                    return t.apply(this, arguments);
                                }
                                return u;
                            }();
                        }
                    });
                };
            }
            function bt(e) {
                if (!e.initUniCloudStatus || "rejected" === e.initUniCloudStatus) {
                    var a = Promise.resolve();
                    1, a = new Promise(function(e, a) {
                        setTimeout(function() {
                            e();
                        }, 1);
                    }), e.isReady = !1, e.isDefault = !1;
                    var t = e.auth();
                    e.initUniCloudStatus = "pending", e.initUniCloud = a.then(function() {
                        return t.getLoginState();
                    }).then(function(e) {
                        return e ? Promise.resolve() : t.signInAnonymously();
                    }).then(function() {
                        return Promise.resolve();
                    }).then(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.address, e.port;
                        return Promise.resolve();
                    }).then(function() {
                        e.isReady = !0, e.initUniCloudStatus = "fulfilled";
                    }).catch(function(a) {
                        console.error(a), e.initUniCloudStatus = "rejected";
                    });
                }
            }
            var dt = new (function() {
                function e() {
                    _(this, e);
                }
                return p(e, [ {
                    key: "init",
                    value: function(e) {
                        var a = {}, t = !1 !== e.debugFunction && !1;
                        switch (e.provider) {
                          case "tcb":
                          case "tencent":
                            a = _a.init(Object.assign(e, {
                                useDebugFunction: t
                            }));
                            break;

                          case "aliyun":
                            a = ye(Object.assign(e, {
                                useDebugFunction: t
                            }));
                            break;

                          case "private":
                            a = xa(Object.assign(e, {
                                useDebugFunction: t
                            }));
                            break;

                          default:
                            throw new Error("未提供正确的provider参数");
                        }
                        return bt(a), a.reInit = function() {
                            bt(this);
                        }, Ea(a), function(e) {
                            var a = e.uploadFile;
                            e.uploadFile = function(e) {
                                return a.call(this, e);
                            };
                        }(a), function(e) {
                            e.database = function(a) {
                                if (a && Object.keys(a).length > 0) return e.init(a).database();
                                if (this._database) return this._database;
                                var t = function(e) {
                                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return Da(new e(a), {
                                        get: function(e, a) {
                                            return Ma("db", a) ? Ua({
                                                $method: a
                                            }, null, e) : function() {
                                                return Ua({
                                                    $method: a,
                                                    $param: Ra(Array.from(arguments))
                                                }, null, e);
                                            };
                                        }
                                    });
                                }(Fa, {
                                    uniClient: e
                                });
                                return this._database = t, t;
                            };
                        }(a), function(e) {
                            e.getCurrentUserInfo = st, e.chooseAndUploadFile = ct.initChooseAndUploadFile(e), 
                            Object.assign(e, {
                                get mixinDatacom() {
                                    return vt(e);
                                }
                            }), e.importObject = ft(e);
                        }(a), [ "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile" ].forEach(function(e) {
                            if (a[e]) {
                                var t = a[e];
                                a[e] = function() {
                                    return a.reInit(), t.apply(a, Array.from(arguments));
                                }, a[e] = ue(a[e], e).bind(a);
                            }
                        }), a.init = this.init, a;
                    }
                } ]), e;
            }())();
            !function() {
                var e = N, a = {};
                if (1 === e.length) a = e[0], (dt = dt.init(a)).isDefault = !0; else {
                    var t;
                    t = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", 
                    [ "auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject" ].forEach(function(e) {
                        dt[e] = function() {
                            return console.error(t), Promise.reject(new oe({
                                code: "SYS_ERR",
                                message: t
                            }));
                        };
                    });
                }
                Object.assign(dt, {
                    get mixinDatacom() {
                        return vt(dt);
                    }
                }), function(e) {
                    !function(e) {
                        e.onResponse = function(e) {
                            le(X, e);
                        }, e.offResponse = function(e) {
                            ne(X, e);
                        };
                    }(e), ut(e), function(e) {
                        e.onRefreshToken = function(e) {
                            le(Y, e);
                        }, e.offRefreshToken = function(e) {
                            ne(Y, e);
                        };
                    }(e);
                }(dt), dt.addInterceptor = z, dt.removeInterceptor = K;
            }();
            var ht = dt;
            t.default = ht;
        }).call(this, l("c8ba"), l("543d").default);
    },
    ab2d: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "success", a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            -1 == [ "primary", "info", "error", "warning", "success" ].indexOf(e) && (e = "success");
            var t = "";
            switch (e) {
              case "primary":
              case "info":
                t = "info-circle";
                break;

              case "error":
                t = "close-circle";
                break;

              case "warning":
                t = "error-circle";
                break;

              case "success":
                t = "checkmark-circle";
                break;

              default:
                t = "checkmark-circle";
            }
            return a && (t += "-fill"), t;
        };
        a.default = l;
    },
    abbd: function(a, t, l) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(l("00b6"));
        function r(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
        }
        function u(e, a) {
            for (var t = 0; t < a.length; t++) {
                var l = a[t];
                l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), 
                Object.defineProperty(e, l.key, l);
            }
        }
        var i = function() {
            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (e.date, 
                e.selected), l = e.startDate, n = e.endDate, u = e.range;
                r(this, a), this.date = this.getDate(new Date()), this.selected = t || [], this.startDate = l, 
                this.endDate = n, this.range = u, this.cleanMultipleStatus(), this.weeks = {}, this.lastHover = !1;
            }
            return function(e, a, t) {
                a && u(e.prototype, a), t && u(e, t);
            }(a, [ {
                key: "setDate",
                value: function(e) {
                    this.selectDate = this.getDate(e), this._getWeek(this.selectDate.fullDate);
                }
            }, {
                key: "cleanMultipleStatus",
                value: function() {
                    this.multipleStatus = {
                        before: "",
                        after: "",
                        data: []
                    };
                }
            }, {
                key: "resetSatrtDate",
                value: function(e) {
                    this.startDate = e;
                }
            }, {
                key: "resetEndDate",
                value: function(e) {
                    this.endDate = e;
                }
            }, {
                key: "getDate",
                value: function(a) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "day";
                    a || (a = new Date()), "object" !== e(a) && (a = a.replace(/-/g, "/"));
                    var n = new Date(a);
                    switch (l) {
                      case "day":
                        n.setDate(n.getDate() + t);
                        break;

                      case "month":
                        31 === n.getDate() ? n.setDate(n.getDate() + t) : n.setMonth(n.getMonth() + t);
                        break;

                      case "year":
                        n.setFullYear(n.getFullYear() + t);
                    }
                    var r = n.getFullYear(), u = n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1, i = n.getDate() < 10 ? "0" + n.getDate() : n.getDate();
                    return {
                        fullDate: r + "-" + u + "-" + i,
                        year: r,
                        month: u,
                        date: i,
                        day: n.getDay()
                    };
                }
            }, {
                key: "_getLastMonthDays",
                value: function(e, a) {
                    for (var t = [], l = e; l > 0; l--) {
                        var n = new Date(a.year, a.month - 1, 1 - l).getDate();
                        t.push({
                            date: n,
                            month: a.month - 1,
                            lunar: this.getlunar(a.year, a.month - 1, n),
                            disable: !0
                        });
                    }
                    return t;
                }
            }, {
                key: "_currentMonthDys",
                value: function(e, a) {
                    for (var t = this, l = [], n = this.date.fullDate, r = function(e) {
                        var r = a.year + "-" + (a.month, a.month + "-") + (e < 10 ? "0" + e : e), u = n === r, i = t.selected && t.selected.find(function(e) {
                            if (t.dateEqual(r, e.date)) return e;
                        }), o = !0, s = !0;
                        t.startDate && (o = t.dateCompare(t.startDate, r)), t.endDate && (s = t.dateCompare(r, t.endDate));
                        var c = t.multipleStatus.data, v = !1, f = -1;
                        t.range && (c && (f = c.findIndex(function(e) {
                            return t.dateEqual(e, r);
                        })), -1 !== f && (v = !0));
                        var b = {
                            fullDate: r,
                            year: a.year,
                            date: e,
                            multiple: !!t.range && v,
                            beforeMultiple: t.dateEqual(t.multipleStatus.before, r),
                            afterMultiple: t.dateEqual(t.multipleStatus.after, r),
                            month: a.month,
                            lunar: t.getlunar(a.year, a.month, e),
                            disable: !(o && s),
                            isDay: u,
                            userChecked: !1
                        };
                        i && (b.extraInfo = i), l.push(b);
                    }, u = 1; u <= e; u++) r(u);
                    return l;
                }
            }, {
                key: "_getNextMonthDays",
                value: function(e, a) {
                    for (var t = [], l = 1; l < e + 1; l++) t.push({
                        date: l,
                        month: Number(a.month) + 1,
                        lunar: this.getlunar(a.year, Number(a.month) + 1, l),
                        disable: !0
                    });
                    return t;
                }
            }, {
                key: "getInfo",
                value: function(e) {
                    var a = this;
                    return e || (e = new Date()), this.canlender.find(function(t) {
                        return t.fullDate === a.getDate(e).fullDate;
                    });
                }
            }, {
                key: "dateCompare",
                value: function(e, a) {
                    return (e = new Date(e.replace("-", "/").replace("-", "/"))) <= (a = new Date(a.replace("-", "/").replace("-", "/")));
                }
            }, {
                key: "dateEqual",
                value: function(e, a) {
                    return e = new Date(e.replace("-", "/").replace("-", "/")), a = new Date(a.replace("-", "/").replace("-", "/")), 
                    e.getTime() - a.getTime() == 0;
                }
            }, {
                key: "geDateAll",
                value: function(e, a) {
                    var t = [], l = e.split("-"), n = a.split("-"), r = new Date();
                    r.setFullYear(l[0], l[1] - 1, l[2]);
                    var u = new Date();
                    u.setFullYear(n[0], n[1] - 1, n[2]);
                    for (var i = r.getTime() - 864e5, o = u.getTime() - 864e5, s = i; s <= o; ) s += 864e5, 
                    t.push(this.getDate(new Date(parseInt(s))).fullDate);
                    return t;
                }
            }, {
                key: "getlunar",
                value: function(e, a, t) {
                    return n.default.solar2lunar(e, a, t);
                }
            }, {
                key: "setSelectInfo",
                value: function(e, a) {
                    this.selected = a, this._getWeek(e);
                }
            }, {
                key: "setMultiple",
                value: function(e) {
                    var a = this.multipleStatus, t = a.before, l = a.after;
                    if (this.range) {
                        if (t && l) {
                            if (!this.lastHover) return void (this.lastHover = !0);
                            this.multipleStatus.before = e, this.multipleStatus.after = "", this.multipleStatus.data = [], 
                            this.multipleStatus.fulldate = "", this.lastHover = !1;
                        } else this.lastHover = !1, t ? (this.multipleStatus.after = e, this.dateCompare(this.multipleStatus.before, this.multipleStatus.after) ? this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after) : this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before)) : this.multipleStatus.before = e;
                        this._getWeek(e);
                    }
                }
            }, {
                key: "setHoverMultiple",
                value: function(e) {
                    var a = this.multipleStatus, t = a.before;
                    a.after, this.range && (this.lastHover || (t ? (this.multipleStatus.after = e, this.dateCompare(this.multipleStatus.before, this.multipleStatus.after) ? this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after) : this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before)) : this.multipleStatus.before = e, 
                    this._getWeek(e)));
                }
            }, {
                key: "setDefaultMultiple",
                value: function(e, a) {
                    this.multipleStatus.before = e, this.multipleStatus.after = a, e && a && (this.dateCompare(e, a) ? (this.multipleStatus.data = this.geDateAll(e, a), 
                    this._getWeek(a)) : (this.multipleStatus.data = this.geDateAll(a, e), this._getWeek(e)));
                }
            }, {
                key: "_getWeek",
                value: function(e) {
                    var a = this.getDate(e), t = (a.fullDate, a.year), l = a.month, n = (a.date, a.day, 
                    new Date(t, l - 1, 1).getDay()), r = new Date(t, l, 0).getDate(), u = {
                        lastMonthDays: this._getLastMonthDays(n, this.getDate(e)),
                        currentMonthDys: this._currentMonthDys(r, this.getDate(e)),
                        nextMonthDays: [],
                        weeks: []
                    }, i = [], o = 42 - (u.lastMonthDays.length + u.currentMonthDys.length);
                    u.nextMonthDays = this._getNextMonthDays(o, this.getDate(e)), i = i.concat(u.lastMonthDays, u.currentMonthDys, u.nextMonthDays);
                    for (var s = {}, c = 0; c < i.length; c++) c % 7 == 0 && (s[parseInt(c / 7)] = new Array(7)), 
                    s[parseInt(c / 7)][c % 7] = i[c];
                    this.canlender = i, this.weeks = s;
                }
            } ]), a;
        }();
        t.default = i;
    },
    ac7d: function(e) {
        e.exports = JSON.parse('{"uni-datetime-picker.selectDate":"选择日期","uni-datetime-picker.selectTime":"选择时间","uni-datetime-picker.selectDateTime":"选择日期时间","uni-datetime-picker.startDate":"开始日期","uni-datetime-picker.endDate":"结束日期","uni-datetime-picker.startTime":"开始时间","uni-datetime-picker.endTime":"结束时间","uni-datetime-picker.ok":"确定","uni-datetime-picker.clear":"清除","uni-datetime-picker.cancel":"取消","uni-calender.SUN":"日","uni-calender.MON":"一","uni-calender.TUE":"二","uni-calender.WED":"三","uni-calender.THU":"四","uni-calender.FRI":"五","uni-calender.SAT":"六"}');
    },
    b04c: function(e, a, t) {
        (function(a) {
            e.exports = {
                data: function() {
                    return {};
                },
                onLoad: function() {
                    this.$u.getRect = this.$uGetRect;
                },
                methods: {
                    $uGetRect: function(e, t) {
                        var l = this;
                        return new Promise(function(n) {
                            a.createSelectorQuery().in(l)[t ? "selectAll" : "select"](e).boundingClientRect(function(e) {
                                t && Array.isArray(e) && e.length && n(e), !t && e && n(e);
                            }).exec();
                        });
                    },
                    getParentData: function() {
                        var e = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        this.parent || (this.parent = !1), this.parent = this.$u.$parent.call(this, a), 
                        this.parent && Object.keys(this.parentData).map(function(a) {
                            e.parentData[a] = e.parent[a];
                        });
                    },
                    preventEvent: function(e) {
                        e && e.stopPropagation && e.stopPropagation();
                    }
                },
                onReachBottom: function() {
                    a.$emit("uOnReachBottom");
                },
                beforeDestroy: function() {
                    var e = this;
                    if (this.parent && a.$u.test.array(this.parent.children)) {
                        var t = this.parent.children;
                        t.map(function(a, l) {
                            a === e && t.splice(l, 1);
                        });
                    }
                }
            };
        }).call(this, t("543d").default);
    },
    b209: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            toast: 10090,
            noNetwork: 10080,
            popup: 10075,
            mask: 10070,
            navbar: 980,
            topTips: 975,
            sticky: 970,
            indexListSticky: 965
        };
    },
    bbdd: function(a, t, l) {
        var n = function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : e(self)) && self;
        }() || Function("return this")(), r = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0, u = r && n.regeneratorRuntime;
        if (n.regeneratorRuntime = void 0, a.exports = l("96cf"), r) n.regeneratorRuntime = u; else try {
            delete n.regeneratorRuntime;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            n.regeneratorRuntime = void 0;
        }
    },
    bc20: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto", a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rpx";
            return e = String(e), l.default.number(e) ? "".concat(e).concat(a) : e;
        };
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("ebcb"));
    },
    c8ba: function(a, t) {
        var l;
        l = function() {
            return this;
        }();
        try {
            l = l || new Function("return this")();
        } catch (a) {
            a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
            "object" === ("undefined" == typeof window ? "undefined" : e(window)) && (l = window);
        }
        a.exports = l;
    },
    cc2b: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function(e, a, t) {
            var l = t.config.validateStatus, n = t.statusCode;
            !n || l && !l(n) ? a(t) : e(t);
        };
    },
    df7c: function(e, a, t) {
        (function(e) {
            function t(e, a) {
                for (var t = 0, l = e.length - 1; l >= 0; l--) {
                    var n = e[l];
                    "." === n ? e.splice(l, 1) : ".." === n ? (e.splice(l, 1), t++) : t && (e.splice(l, 1), 
                    t--);
                }
                if (a) for (;t--; t) e.unshift("..");
                return e;
            }
            function l(e, a) {
                if (e.filter) return e.filter(a);
                for (var t = [], l = 0; l < e.length; l++) a(e[l], l, e) && t.push(e[l]);
                return t;
            }
            a.resolve = function() {
                for (var a = "", n = !1, r = arguments.length - 1; r >= -1 && !n; r--) {
                    var u = r >= 0 ? arguments[r] : e.cwd();
                    if ("string" != typeof u) throw new TypeError("Arguments to path.resolve must be strings");
                    u && (a = u + "/" + a, n = "/" === u.charAt(0));
                }
                return (n ? "/" : "") + (a = t(l(a.split("/"), function(e) {
                    return !!e;
                }), !n).join("/")) || ".";
            }, a.normalize = function(e) {
                var r = a.isAbsolute(e), u = "/" === n(e, -1);
                return (e = t(l(e.split("/"), function(e) {
                    return !!e;
                }), !r).join("/")) || r || (e = "."), e && u && (e += "/"), (r ? "/" : "") + e;
            }, a.isAbsolute = function(e) {
                return "/" === e.charAt(0);
            }, a.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return a.normalize(l(e, function(e, a) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e;
                }).join("/"));
            }, a.relative = function(e, t) {
                function l(e) {
                    for (var a = 0; a < e.length && "" === e[a]; a++) ;
                    for (var t = e.length - 1; t >= 0 && "" === e[t]; t--) ;
                    return a > t ? [] : e.slice(a, t - a + 1);
                }
                e = a.resolve(e).substr(1), t = a.resolve(t).substr(1);
                for (var n = l(e.split("/")), r = l(t.split("/")), u = Math.min(n.length, r.length), i = u, o = 0; o < u; o++) if (n[o] !== r[o]) {
                    i = o;
                    break;
                }
                var s = [];
                for (o = i; o < n.length; o++) s.push("..");
                return (s = s.concat(r.slice(i))).join("/");
            }, a.sep = "/", a.delimiter = ":", a.dirname = function(e) {
                if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                for (var a = e.charCodeAt(0), t = 47 === a, l = -1, n = !0, r = e.length - 1; r >= 1; --r) if (47 === (a = e.charCodeAt(r))) {
                    if (!n) {
                        l = r;
                        break;
                    }
                } else n = !1;
                return -1 === l ? t ? "/" : "." : t && 1 === l ? "/" : e.slice(0, l);
            }, a.basename = function(e, a) {
                var t = function(e) {
                    "string" != typeof e && (e += "");
                    var a, t = 0, l = -1, n = !0;
                    for (a = e.length - 1; a >= 0; --a) if (47 === e.charCodeAt(a)) {
                        if (!n) {
                            t = a + 1;
                            break;
                        }
                    } else -1 === l && (n = !1, l = a + 1);
                    return -1 === l ? "" : e.slice(t, l);
                }(e);
                return a && t.substr(-1 * a.length) === a && (t = t.substr(0, t.length - a.length)), 
                t;
            }, a.extname = function(e) {
                "string" != typeof e && (e += "");
                for (var a = -1, t = 0, l = -1, n = !0, r = 0, u = e.length - 1; u >= 0; --u) {
                    var i = e.charCodeAt(u);
                    if (47 !== i) -1 === l && (n = !1, l = u + 1), 46 === i ? -1 === a ? a = u : 1 !== r && (r = 1) : -1 !== a && (r = -1); else if (!n) {
                        t = u + 1;
                        break;
                    }
                }
                return -1 === a || -1 === l || 0 === r || 1 === r && a === l - 1 && a === t + 1 ? "" : e.slice(a, l);
            };
            var n = "b" === "ab".substr(-1) ? function(e, a, t) {
                return e.substr(a, t);
            } : function(e, a, t) {
                return a < 0 && (a = e.length + a), e.substr(a, t);
            };
        }).call(this, t("4362"));
    },
    e1cd: function(e, a, t) {
        function l(e, a) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = n(e)) || a && e && "number" == typeof e.length) {
                    t && (e = t);
                    var l = 0, r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return l >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[l++]
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
            var u, i = !0, o = !1;
            return {
                s: function() {
                    t = e[Symbol.iterator]();
                },
                n: function() {
                    var e = t.next();
                    return i = e.done, e;
                },
                e: function(e) {
                    o = !0, u = e;
                },
                f: function() {
                    try {
                        i || null == t.return || t.return();
                    } finally {
                        if (o) throw u;
                    }
                }
            };
        }
        function n(e, a) {
            if (e) {
                if ("string" == typeof e) return r(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(e, a) : void 0;
            }
        }
        function r(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, l = new Array(a); t < a; t++) l[t] = e[t];
            return l;
        }
        var u;
        function i(e, a) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "value", r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (-1 !== (a += "").indexOf(",")) {
                for (var u = a.split(","), i = "", o = 0; o < u.length; o++) i += this.getLByV(e, u[o], t, n, r) + ",";
                return i.substring(0, i.length - 1);
            }
            a = isNaN(Number(a)) || r ? a : Number(a);
            var s, c = l(e);
            try {
                for (c.s(); !(s = c.n()).done; ) {
                    var v = s.value;
                    if (a === v[n]) return v[t];
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                c.e(e);
            } finally {
                c.f();
            }
            return "";
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.datedifference = function(e, a) {
            var t;
            return e = Date.parse(e), t = (a = Date.parse(a)) - e, t = Math.abs(t), Math.floor(t / 864e5);
        }, a.getSystemInfo = function() {
            wx.getSystemInfo().then(function(e) {
                console.log("获取系统设备信息", e);
                var t = e.platform;
                a.isIOS = u = "ios" === t;
            });
        }, a.splitName = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
            if (!e) return "";
            var t = e.split(a);
            return t[t.length - 1];
        }, a.getLabelByValue = function(e, a) {
            return i(e, a);
        }, a.getLByV = i, a.isIOS = void 0, a.isIOS = u;
    },
    e34e: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.saveHealthy = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/addHealthy",
                method: "post",
                data: e
            });
        }, a.getHealthyPage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/listPage",
                method: "post",
                data: e
            });
        }, a.getFudaRiskPage = function(e) {
            return l.default.request({
                url: "/system/api/app-v3/fuda/getFudaRiskPage",
                method: "post",
                data: e
            });
        }, a.contentList = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/contentList",
                method: "post",
                data: e
            });
        }, a.getRulesPage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/listRuletPage",
                method: "post",
                data: e
            });
        }, a.addHealthyNew = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/addHealthyNew",
                method: "post",
                data: e
            });
        }, a.addMP = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/addMP",
                method: "POST",
                data: e
            });
        }, a.MPListPage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/MPListPage",
                method: "POST",
                data: e
            });
        }, a.listUnit = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/listUnit",
                method: "get",
                params: e
            });
        }, a.queryListPage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/queryListPage",
                method: "post",
                data: e
            });
        }, a.querySimplePage = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/querySimplePage",
                method: "post",
                data: e
            });
        }, a.getAreasByUnitId = function(e) {
            return l.default.request({
                url: "/project/api/app-v3/area/getAreasByUnitId",
                method: "post",
                data: e
            });
        }, a.queryDailyById = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/queryDailyById",
                method: "get",
                params: e
            });
        }, a.approveDaily = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/approveDaily",
                method: "post",
                data: e
            });
        }, a.getFirstOperator = function(e) {
            return l.default.request({
                url: "/system/api/app-v3/Workflow/getWorkflowTemplate",
                method: "post",
                data: e
            });
        }, a.getRecords = function(e) {
            return l.default.request({
                url: "/system/api/app-v3/Workflow/getRecords",
                method: "post",
                data: e
            });
        }, a.audit = function(e) {
            return l.default.request({
                url: "/system/api/app-v3/Workflow/audit",
                method: "post",
                data: e
            });
        }, a.cancelWorkflow = function(e) {
            return l.default.request({
                url: "/system/api/app-v3/Workflow/cancelWorkflow",
                method: "post",
                data: e
            });
        }, a.getRecordsList = function(e) {
            return l.default.request({
                url: "/system/api/app-v3/Workflow/getRecordsByOperatorId",
                method: "post",
                data: e
            });
        }, a.queryHealthy = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/queryHealthy",
                method: "get",
                data: e
            });
        }, a.updateCustomHealthCodes = function(e) {
            return l.default.request({
                url: "/third/api/app-v3/healthy/updateCustomHealthCodes",
                method: "post",
                data: e
            });
        };
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("96a5"));
    },
    e368: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return e.sort(function() {
                return Math.random() - .5;
            });
        };
        a.default = l;
    },
    ebcb: function(a, t, l) {
        function n(a) {
            switch (e(a)) {
              case "undefined":
                return !0;

              case "string":
                if (0 == a.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length) return !0;
                break;

              case "boolean":
                if (!a) return !0;
                break;

              case "number":
                if (0 === a || isNaN(a)) return !0;
                break;

              case "object":
                if (null === a || 0 === a.length) return !0;
                for (var t in a) return !1;
                return !0;
            }
            return !1;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            email: function(e) {
                return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e);
            },
            mobile: function(e) {
                return /^1[3-9]\d{9}$/.test(e);
            },
            url: function(e) {
                return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(e);
            },
            date: function(e) {
                return !/Invalid|NaN/.test(new Date(e).toString());
            },
            dateISO: function(e) {
                return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
            },
            number: function(e) {
                return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
            },
            digits: function(e) {
                return /^\d+$/.test(e);
            },
            idCard: function(e) {
                return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e);
            },
            carNo: function(e) {
                return 7 === e.length ? /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/.test(e) : 8 === e.length && /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/.test(e);
            },
            amount: function(e) {
                return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(e);
            },
            amount2: function(e) {
                return /^(?!0+$)(?!0*\.0*$)\d{1,8}(\.\d{1,2})?$/.test(e);
            },
            chinese: function(e) {
                return /^[\u4e00-\u9fa5]+$/gi.test(e);
            },
            letter: function(e) {
                return /^[a-zA-Z]*$/.test(e);
            },
            enOrNum: function(e) {
                return /^[0-9a-zA-Z]*$/g.test(e);
            },
            contains: function(e, a) {
                return e.indexOf(a) >= 0;
            },
            range: function(e, a) {
                return e >= a[0] && e <= a[1];
            },
            rangeLength: function(e, a) {
                return e.length >= a[0] && e.length <= a[1];
            },
            empty: n,
            isEmpty: n,
            jsonString: function(a) {
                if ("string" == typeof a) try {
                    var t = JSON.parse(a);
                    return !("object" != e(t) || !t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
                return !1;
            },
            landline: function(e) {
                return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(e);
            },
            object: function(e) {
                return "[object Object]" === Object.prototype.toString.call(e);
            },
            array: function(e) {
                return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
            },
            code: function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
                return new RegExp("^\\d{".concat(a, "}$")).test(e);
            }
        };
        t.default = r;
    },
    ef89: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("1656"));
        a.default = function(e) {
            return (0, l.default)(e);
        };
    },
    f0c5: function(e, a, t) {
        function l(e, a, t, l, n, r, u, i, o, s) {
            var c, v = "function" == typeof e ? e.options : e;
            if (o) {
                v.components || (v.components = {});
                var f = Object.prototype.hasOwnProperty;
                for (var b in o) f.call(o, b) && !f.call(v.components, b) && (v.components[b] = o[b]);
            }
            if (s && ((s.beforeCreate || (s.beforeCreate = [])).unshift(function() {
                this[s.__module] = this;
            }), (v.mixins || (v.mixins = [])).push(s)), a && (v.render = a, v.staticRenderFns = t, 
            v._compiled = !0), l && (v.functional = !0), r && (v._scopeId = "data-v-" + r), 
            u ? (c = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), 
                n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(u);
            }, v._ssrRegister = c) : n && (c = i ? function() {
                n.call(this, this.$root.$options.shadowRoot);
            } : n), c) if (v.functional) {
                v._injectStyles = c;
                var d = v.render;
                v.render = function(e, a) {
                    return c.call(a), d(e, a);
                };
            } else {
                var h = v.beforeCreate;
                v.beforeCreate = h ? [].concat(h, c) : [ c ];
            }
            return {
                exports: e,
                options: v
            };
        }
        t.d(a, "a", function() {
            return l;
        });
    },
    f120: function(a, t, l) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(a, t) {
            for (var l = this.$parent; l; ) if (l.$options.name !== a) l = l.$parent; else {
                var n = function() {
                    var e = {};
                    if (Array.isArray(t)) t.map(function(a) {
                        e[a] = l[a] ? l[a] : "";
                    }); else for (var a in t) Array.isArray(t[a]) ? t[a].length ? e[a] = t[a] : e[a] = l[a] : t[a].constructor === Object ? Object.keys(t[a]).length ? e[a] = t[a] : e[a] = l[a] : e[a] = t[a] || !1 === t[a] ? t[a] : l[a];
                    return {
                        v: e
                    };
                }();
                if ("object" === e(n)) return n.v;
            }
            return {};
        };
    },
    f236: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = function(e, a) {
            if (e >= 0 && a > 0 && a >= e) {
                var t = a - e + 1;
                return Math.floor(Math.random() * t + e);
            }
            return 0;
        };
        a.default = l;
    },
    f8aa: function(e, a, t) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function n(e, a, t, l, n, r, u) {
                try {
                    var i = e[r](u), o = i.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                i.done ? a(o) : Promise.resolve(o).then(l, n);
            }
            function r(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var l = a[t];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), 
                    Object.defineProperty(e, l.key, l);
                }
            }
            var u = new (function() {
                function a() {
                    (function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
                    })(this, a), this.config = {
                        type: "navigateTo",
                        url: "",
                        delta: 1,
                        params: {},
                        animationType: "pop-in",
                        animationDuration: 300,
                        intercept: !1
                    }, this.route = this.route.bind(this);
                }
                return function(e, a, t) {
                    a && r(e.prototype, a), t && r(e, t);
                }(a, [ {
                    key: "addRootPath",
                    value: function(e) {
                        return "/" === e[0] ? e : "/".concat(e);
                    }
                }, {
                    key: "mixinParam",
                    value: function(a, t) {
                        a = a && this.addRootPath(a);
                        return /.*\/.*\?.*=.*/.test(a) ? a + "&" + e.$u.queryParams(t, !1) : a + e.$u.queryParams(t);
                    }
                }, {
                    key: "route",
                    value: function() {
                        var a = function(e) {
                            return function() {
                                var a = this, t = arguments;
                                return new Promise(function(l, r) {
                                    var u = e.apply(a, t);
                                    function i(e) {
                                        n(u, l, r, i, o, "next", e);
                                    }
                                    function o(e) {
                                        n(u, l, r, i, o, "throw", e);
                                    }
                                    i(void 0);
                                });
                            };
                        }(l.default.mark(function a() {
                            var t, n, r, u = arguments;
                            return l.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    if (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}, n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, 
                                    r = {}, "string" == typeof t ? (r.url = this.mixinParam(t, n), r.type = "navigateTo") : (r = e.$u.deepClone(t, this.config)).url = this.mixinParam(t.url, t.params), 
                                    n.intercept && (this.config.intercept = n.intercept), r.params = n, r = e.$u.deepMerge(this.config, r), 
                                    "function" != typeof e.$u.routeIntercept) {
                                        a.next = 14;
                                        break;
                                    }
                                    return a.next = 10, new Promise(function(a, t) {
                                        e.$u.routeIntercept(r, a);
                                    });

                                  case 10:
                                    a.sent && this.openPage(r), a.next = 15;
                                    break;

                                  case 14:
                                    this.openPage(r);

                                  case 15:
                                  case "end":
                                    return a.stop();
                                }
                            }, a, this);
                        }));
                        return function() {
                            return a.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "openPage",
                    value: function(a) {
                        var t = a.url, l = (a.type, a.delta), n = a.animationType, r = a.animationDuration;
                        "navigateTo" != a.type && "to" != a.type || e.navigateTo({
                            url: t,
                            animationType: n,
                            animationDuration: r
                        }), "redirectTo" != a.type && "redirect" != a.type || e.redirectTo({
                            url: t
                        }), "switchTab" != a.type && "tab" != a.type || e.switchTab({
                            url: t
                        }), "reLaunch" != a.type && "launch" != a.type || e.reLaunch({
                            url: t
                        }), "navigateBack" != a.type && "back" != a.type || e.navigateBack({
                            delta: l
                        });
                    }
                } ]), a;
            }())().route;
            a.default = u;
        }).call(this, t("543d").default);
    },
    fba0: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.healthCodeArr = a.msgTypeArr = a.refTypeArr = a.visitMethodArr = a.roomIdentityArr = void 0;
        a.roomIdentityArr = [ {
            label: "教师",
            value: 1
        }, {
            label: "学生",
            value: 2
        } ];
        a.visitMethodArr = [ {
            label: "未指定",
            value: 0
        }, {
            label: "步行或非机动车",
            value: 1
        }, {
            label: "汽车",
            value: 2
        } ];
        a.refTypeArr = [ {
            label: "在线预约",
            value: 1,
            icon: "/static/u478.png"
        }, {
            label: "健康打卡",
            value: 2,
            icon: "/static/u170.png"
        }, {
            label: "外出申请",
            value: 3,
            icon: "/static/go.png"
        }, {
            label: "变码申请",
            value: 4,
            icon: "/static/u166.png"
        }, {
            label: "销假申请",
            value: 5,
            icon: "/static/u166.png"
        } ];
        a.msgTypeArr = [ {
            label: "全部消息",
            value: 0,
            icon: "/static/u58.png"
        }, {
            label: "通知消息",
            value: 1,
            icon: "/static/u44.png"
        }, {
            label: "门禁消息",
            value: 3,
            icon: "/static/u478.png"
        }, {
            label: "审批消息",
            value: 4,
            icon: "/static/u362.png"
        } ];
        a.healthCodeArr = [ {
            label: "绿码",
            value: 0,
            icon: "/static/green-user.png",
            color: "#2aa265"
        }, {
            label: "黄码",
            value: 1,
            icon: "/static/yellow-user.png",
            color: "#e7d01d"
        }, {
            label: "红码",
            value: 2,
            icon: "/static/red-user.png",
            color: "#a7072c"
        }, {
            label: "灰码",
            value: 3,
            icon: "/static/grey-user.png",
            color: "#c1c1c1"
        }, {
            label: "特批绿码",
            value: 4,
            icon: "/static/green-user.png",
            color: "#2aa265"
        }, {
            label: "强制红码",
            value: 5,
            icon: "/static/red-user.png",
            color: "#a7072c"
        } ];
    },
    fe34: function(e, a, t) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var t = function(a) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                e.showToast({
                    title: a,
                    icon: "none",
                    duration: t
                });
            };
            a.default = t;
        }).call(this, t("543d").default);
    },
    ffaa: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = u(t("3a91")), n = u(t("ac7d")), r = u(t("3a7c"));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var i = {
            en: l.default,
            "zh-Hans": n.default,
            "zh-Hant": r.default
        };
        a.default = i;
    }
} ]);