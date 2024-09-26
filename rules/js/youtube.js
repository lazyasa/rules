!(function (i) {
  "use strict";
  function _(n, e, i) {
    return e <= n && n <= i;
  }
  "undefined" != typeof module &&
    module.exports &&
    !i["encoding-indexes"] &&
    (i["encoding-indexes"] = require("./encoding-indexes.js")[
      "encoding-indexes"
    ]);
  var l = Math.floor;
  function s(n) {
    if (void 0 === n) return {};
    if (n === Object(n)) return n;
    throw TypeError("Could not convert argument to dictionary");
  }
  function u(n) {
    return 0 <= n && n <= 127;
  }
  var a = u,
    b = -1;
  function c(n) {
    (this.tokens = [].slice.call(n)), this.tokens.reverse();
  }
  c.prototype = {
    endOfStream: function () {
      return !this.tokens.length;
    },
    read: function () {
      return this.tokens.length ? this.tokens.pop() : b;
    },
    prepend: function (n) {
      if (Array.isArray(n))
        for (var e = n; e.length; ) this.tokens.push(e.pop());
      else this.tokens.push(n);
    },
    push: function (n) {
      if (Array.isArray(n))
        for (var e = n; e.length; ) this.tokens.unshift(e.shift());
      else this.tokens.unshift(n);
    },
  };
  var w = -1;
  function m(n, e) {
    if (n) throw TypeError("Decoder error");
    return e || 65533;
  }
  function f(n) {
    throw TypeError("The code point " + n + " could not be encoded.");
  }
  function r(n) {
    return (
      (n = String(n).trim().toLowerCase()),
      Object.prototype.hasOwnProperty.call(d, n) ? d[n] : null
    );
  }
  var t,
    o,
    n = [
      {
        encodings: [
          { labels: ["unicode-1-1-utf-8", "utf-8", "utf8"], name: "UTF-8" },
        ],
        heading: "The Encoding",
      },
      {
        encodings: [
          { labels: ["866", "cp866", "csibm866", "ibm866"], name: "IBM866" },
          {
            labels: [
              "csisolatin2",
              "iso-8859-2",
              "iso-ir-101",
              "iso8859-2",
              "iso88592",
              "iso_8859-2",
              "iso_8859-2:1987",
              "l2",
              "latin2",
            ],
            name: "ISO-8859-2",
          },
          {
            labels: [
              "csisolatin3",
              "iso-8859-3",
              "iso-ir-109",
              "iso8859-3",
              "iso88593",
              "iso_8859-3",
              "iso_8859-3:1988",
              "l3",
              "latin3",
            ],
            name: "ISO-8859-3",
          },
          {
            labels: [
              "csisolatin4",
              "iso-8859-4",
              "iso-ir-110",
              "iso8859-4",
              "iso88594",
              "iso_8859-4",
              "iso_8859-4:1988",
              "l4",
              "latin4",
            ],
            name: "ISO-8859-4",
          },
          {
            labels: [
              "csisolatincyrillic",
              "cyrillic",
              "iso-8859-5",
              "iso-ir-144",
              "iso8859-5",
              "iso88595",
              "iso_8859-5",
              "iso_8859-5:1988",
            ],
            name: "ISO-8859-5",
          },
          {
            labels: [
              "arabic",
              "asmo-708",
              "csiso88596e",
              "csiso88596i",
              "csisolatinarabic",
              "ecma-114",
              "iso-8859-6",
              "iso-8859-6-e",
              "iso-8859-6-i",
              "iso-ir-127",
              "iso8859-6",
              "iso88596",
              "iso_8859-6",
              "iso_8859-6:1987",
            ],
            name: "ISO-8859-6",
          },
          {
            labels: [
              "csisolatingreek",
              "ecma-118",
              "elot_928",
              "greek",
              "greek8",
              "iso-8859-7",
              "iso-ir-126",
              "iso8859-7",
              "iso88597",
              "iso_8859-7",
              "iso_8859-7:1987",
              "sun_eu_greek",
            ],
            name: "ISO-8859-7",
          },
          {
            labels: [
              "csiso88598e",
              "csisolatinhebrew",
              "hebrew",
              "iso-8859-8",
              "iso-8859-8-e",
              "iso-ir-138",
              "iso8859-8",
              "iso88598",
              "iso_8859-8",
              "iso_8859-8:1988",
              "visual",
            ],
            name: "ISO-8859-8",
          },
          {
            labels: ["csiso88598i", "iso-8859-8-i", "logical"],
            name: "ISO-8859-8-I",
          },
          {
            labels: [
              "csisolatin6",
              "iso-8859-10",
              "iso-ir-157",
              "iso8859-10",
              "iso885910",
              "l6",
              "latin6",
            ],
            name: "ISO-8859-10",
          },
          {
            labels: ["iso-8859-13", "iso8859-13", "iso885913"],
            name: "ISO-8859-13",
          },
          {
            labels: ["iso-8859-14", "iso8859-14", "iso885914"],
            name: "ISO-8859-14",
          },
          {
            labels: [
              "csisolatin9",
              "iso-8859-15",
              "iso8859-15",
              "iso885915",
              "iso_8859-15",
              "l9",
            ],
            name: "ISO-8859-15",
          },
          { labels: ["iso-8859-16"], name: "ISO-8859-16" },
          {
            labels: ["cskoi8r", "koi", "koi8", "koi8-r", "koi8_r"],
            name: "KOI8-R",
          },
          { labels: ["koi8-ru", "koi8-u"], name: "KOI8-U" },
          {
            labels: ["csmacintosh", "mac", "macintosh", "x-mac-roman"],
            name: "macintosh",
          },
          {
            labels: [
              "dos-874",
              "iso-8859-11",
              "iso8859-11",
              "iso885911",
              "tis-620",
              "windows-874",
            ],
            name: "windows-874",
          },
          {
            labels: ["cp1250", "windows-1250", "x-cp1250"],
            name: "windows-1250",
          },
          {
            labels: ["cp1251", "windows-1251", "x-cp1251"],
            name: "windows-1251",
          },
          {
            labels: [
              "ansi_x3.4-1968",
              "ascii",
              "cp1252",
              "cp819",
              "csisolatin1",
              "ibm819",
              "iso-8859-1",
              "iso-ir-100",
              "iso8859-1",
              "iso88591",
              "iso_8859-1",
              "iso_8859-1:1987",
              "l1",
              "latin1",
              "us-ascii",
              "windows-1252",
              "x-cp1252",
            ],
            name: "windows-1252",
          },
          {
            labels: ["cp1253", "windows-1253", "x-cp1253"],
            name: "windows-1253",
          },
          {
            labels: [
              "cp1254",
              "csisolatin5",
              "iso-8859-9",
              "iso-ir-148",
              "iso8859-9",
              "iso88599",
              "iso_8859-9",
              "iso_8859-9:1989",
              "l5",
              "latin5",
              "windows-1254",
              "x-cp1254",
            ],
            name: "windows-1254",
          },
          {
            labels: ["cp1255", "windows-1255", "x-cp1255"],
            name: "windows-1255",
          },
          {
            labels: ["cp1256", "windows-1256", "x-cp1256"],
            name: "windows-1256",
          },
          {
            labels: ["cp1257", "windows-1257", "x-cp1257"],
            name: "windows-1257",
          },
          {
            labels: ["cp1258", "windows-1258", "x-cp1258"],
            name: "windows-1258",
          },
          {
            labels: ["x-mac-cyrillic", "x-mac-ukrainian"],
            name: "x-mac-cyrillic",
          },
        ],
        heading: "Legacy single-byte encodings",
      },
      {
        encodings: [
          {
            labels: [
              "chinese",
              "csgb2312",
              "csiso58gb231280",
              "gb2312",
              "gb_2312",
              "gb_2312-80",
              "gbk",
              "iso-ir-58",
              "x-gbk",
            ],
            name: "GBK",
          },
          { labels: ["gb18030"], name: "gb18030" },
        ],
        heading: "Legacy multi-byte Chinese (simplified) encodings",
      },
      {
        encodings: [
          {
            labels: ["big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5"],
            name: "Big5",
          },
        ],
        heading: "Legacy multi-byte Chinese (traditional) encodings",
      },
      {
        encodings: [
          {
            labels: ["cseucpkdfmtjapanese", "euc-jp", "x-euc-jp"],
            name: "EUC-JP",
          },
          { labels: ["csiso2022jp", "iso-2022-jp"], name: "ISO-2022-JP" },
          {
            labels: [
              "csshiftjis",
              "ms932",
              "ms_kanji",
              "shift-jis",
              "shift_jis",
              "sjis",
              "windows-31j",
              "x-sjis",
            ],
            name: "Shift_JIS",
          },
        ],
        heading: "Legacy multi-byte Japanese encodings",
      },
      {
        encodings: [
          {
            labels: [
              "cseuckr",
              "csksc56011987",
              "euc-kr",
              "iso-ir-149",
              "korean",
              "ks_c_5601-1987",
              "ks_c_5601-1989",
              "ksc5601",
              "ksc_5601",
              "windows-949",
            ],
            name: "EUC-KR",
          },
        ],
        heading: "Legacy multi-byte Korean encodings",
      },
      {
        encodings: [
          {
            labels: [
              "csiso2022kr",
              "hz-gb-2312",
              "iso-2022-cn",
              "iso-2022-cn-ext",
              "iso-2022-kr",
            ],
            name: "replacement",
          },
          { labels: ["utf-16be"], name: "UTF-16BE" },
          { labels: ["utf-16", "utf-16le"], name: "UTF-16LE" },
          { labels: ["x-user-defined"], name: "x-user-defined" },
        ],
        heading: "Legacy miscellaneous encodings",
      },
    ],
    d = {},
    h =
      (n.forEach(function (n) {
        n.encodings.forEach(function (e) {
          e.labels.forEach(function (n) {
            d[n] = e;
          });
        });
      }),
      {}),
    g = {};
  function y(n, e) {
    return (e && e[n]) || null;
  }
  function p(n, e) {
    e = e.indexOf(n);
    return -1 === e ? null : e;
  }
  function v(n) {
    if ("encoding-indexes" in i) return i["encoding-indexes"][n];
    throw Error(
      "Indexes missing. Did you forget to include encoding-indexes.js first?"
    );
  }
  var x = "utf-8";
  function O(n, e) {
    if (!(this instanceof O))
      throw TypeError("Called as a function. Did you forget 'new'?");
    (n = void 0 !== n ? String(n) : x),
      (e = s(e)),
      (this._encoding = null),
      (this._decoder = null),
      (this._ignoreBOM = !1),
      (this._BOMseen = !1),
      (this._error_mode = "replacement"),
      (this._do_not_flush = !1);
    var i = r(n);
    if (null === i || "replacement" === i.name)
      throw RangeError("Unknown encoding: " + n);
    if (g[i.name])
      return (
        ((n = this)._encoding = i),
        Boolean(e.fatal) && (n._error_mode = "fatal"),
        Boolean(e.ignoreBOM) && (n._ignoreBOM = !0),
        Object.defineProperty ||
          ((this.encoding = n._encoding.name.toLowerCase()),
          (this.fatal = "fatal" === n._error_mode),
          (this.ignoreBOM = n._ignoreBOM)),
        n
      );
    throw Error(
      "Decoder not present. Did you forget to include encoding-indexes.js first?"
    );
  }
  function k(n, e) {
    if (!(this instanceof k))
      throw TypeError("Called as a function. Did you forget 'new'?");
    (e = s(e)),
      (this._encoding = null),
      (this._encoder = null),
      (this._do_not_flush = !1),
      (this._fatal = Boolean(e.fatal) ? "fatal" : "replacement");
    if (Boolean(e.NONSTANDARD_allowLegacyEncoding)) {
      e = r((n = void 0 !== n ? String(n) : x));
      if (null === e || "replacement" === e.name)
        throw RangeError("Unknown encoding: " + n);
      if (!h[e.name])
        throw Error(
          "Encoder not present. Did you forget to include encoding-indexes.js first?"
        );
      this._encoding = e;
    } else
      (this._encoding = r("utf-8")),
        void 0 !== n &&
          "console" in i &&
          console.warn(
            "TextEncoder constructor called with encoding label, which is ignored."
          );
    return (
      Object.defineProperty ||
        (this.encoding = this._encoding.name.toLowerCase()),
      this
    );
  }
  function e(n) {
    var r = n.fatal,
      t = 0,
      o = 0,
      s = 0,
      l = 128,
      a = 191;
    this.handler = function (n, e) {
      if (e === b && 0 !== s) return (s = 0), m(r);
      if (e === b) return w;
      if (0 === s) {
        if (_(e, 0, 127)) return e;
        if (_(e, 194, 223)) (s = 1), (t = 31 & e);
        else if (_(e, 224, 239))
          224 === e && (l = 160), 237 === e && (a = 159), (s = 2), (t = 15 & e);
        else {
          if (!_(e, 240, 244)) return m(r);
          240 === e && (l = 144), 244 === e && (a = 143), (s = 3), (t = 7 & e);
        }
        return null;
      }
      var i;
      return _(e, l, a)
        ? ((l = 128),
          (a = 191),
          (t = (t << 6) | (63 & e)),
          (o += 1) !== s ? null : ((i = t), (t = s = o = 0), i))
        : ((t = s = o = 0), (l = 128), (a = 191), n.prepend(e), m(r));
    };
  }
  function E(n) {
    n.fatal;
    this.handler = function (n, e) {
      if (e === b) return w;
      if (a(e)) return e;
      _(e, 128, 2047)
        ? ((i = 1), (r = 192))
        : _(e, 2048, 65535)
        ? ((i = 2), (r = 224))
        : _(e, 65536, 1114111) && ((i = 3), (r = 240));
      for (var i, r, t = [(e >> (6 * i)) + r]; 0 < i; )
        t.push(128 | (63 & (e >> (6 * (i - 1))))), --i;
      return t;
    };
  }
  function j(i, n) {
    var r = n.fatal;
    this.handler = function (n, e) {
      return e === b ? w : u(e) ? e : null === (e = i[e - 128]) ? m(r) : e;
    };
  }
  function B(r, n) {
    n.fatal;
    this.handler = function (n, e) {
      var i;
      return e === b ? w : a(e) ? e : (null === (i = p(e, r)) && f(e), i + 128);
    };
  }
  function S(n) {
    var o = n.fatal,
      s = 0,
      l = 0,
      a = 0;
    this.handler = function (n, e) {
      var i, r, t;
      return e === b && 0 === s && 0 === l && 0 === a
        ? w
        : (e !== b ||
            (0 === s && 0 === l && 0 === a) ||
            ((a = l = s = 0), m(o)),
          0 !== a
            ? ((i = null),
              _(e, 48, 57) &&
                (i = (function (n) {
                  if ((39419 < n && n < 189e3) || 1237575 < n) return null;
                  if (7457 === n) return 59335;
                  for (
                    var e = 0, i = 0, r = v("gb18030-ranges"), t = 0;
                    t < r.length;
                    ++t
                  ) {
                    var o = r[t];
                    if (!(o[0] <= n)) break;
                    (e = o[0]), (i = o[1]);
                  }
                  return i + n - e;
                })(10 * (126 * (10 * (s - 129) + l - 48) + a - 129) + e - 48)),
              (r = [l, a, e]),
              (a = l = s = 0),
              null === i ? (n.prepend(r), m(o)) : i)
            : 0 !== l
            ? _(e, 129, 254)
              ? ((a = e), null)
              : (n.prepend([l, e]), (l = s = 0), m(o))
            : 0 !== s
            ? _(e, 48, 57)
              ? ((l = e), null)
              : ((r = s),
                (s = 0),
                (t = null) ===
                  (i =
                    null ===
                    (t =
                      _(e, 64, 126) || _(e, 128, 254)
                        ? 190 * (r - 129) + (e - (e < 127 ? 64 : 65))
                        : t)
                      ? null
                      : y(t, v("gb18030"))) &&
                  u(e) &&
                  n.prepend(e),
                null === i ? m(o) : i)
            : u(e)
            ? e
            : 128 === e
            ? 8364
            : _(e, 129, 254)
            ? ((s = e), null)
            : m(o));
    };
  }
  function T(n, t) {
    n.fatal;
    this.handler = function (n, e) {
      var i, r;
      return e === b
        ? w
        : a(e)
        ? e
        : 58853 === e
        ? f(e)
        : t && 8364 === e
        ? 128
        : null !== (i = p(e, v("gb18030")))
        ? ((r = i % 190), [l(i / 190) + 129, r + (r < 63 ? 64 : 65)])
        : t
        ? f(e)
        : ((i = (function (n) {
            if (59335 === n) return 7457;
            for (
              var e = 0, i = 0, r = v("gb18030-ranges"), t = 0;
              t < r.length;
              ++t
            ) {
              var o = r[t];
              if (!(o[1] <= n)) break;
              (e = o[1]), (i = o[0]);
            }
            return i + n - e;
          })(e)),
          [
            (r = l(i / 10 / 126 / 10)) + 129,
            (e = l((i -= 10 * r * 126 * 10) / 10 / 126)) + 48,
            (r = l((i -= 10 * e * 126) / 10)) + 129,
            48 + (i - 10 * r),
          ]);
    };
  }
  function I(n) {
    var t = n.fatal,
      o = 0;
    this.handler = function (n, e) {
      if (e === b && 0 !== o) return (o = 0), m(t);
      if (e === b && 0 === o) return w;
      if (0 === o) return u(e) ? e : _(e, 129, 254) ? ((o = e), null) : m(t);
      var i = o,
        r = null;
      switch (
        ((o = 0),
        (r =
          _(e, 64, 126) || _(e, 161, 254)
            ? 157 * (i - 129) + (e - (e < 127 ? 64 : 98))
            : r))
      ) {
        case 1133:
          return [202, 772];
        case 1135:
          return [202, 780];
        case 1164:
          return [234, 772];
        case 1166:
          return [234, 780];
      }
      i = null === r ? null : y(r, v("big5"));
      return null === i && u(e) && n.prepend(e), null === i ? m(t) : i;
    };
  }
  function U(n) {
    n.fatal;
    this.handler = function (n, e) {
      var i, r;
      return e === b
        ? w
        : a(e)
        ? e
        : ((i = e),
          (r = o =
            o ||
            v("big5").map(function (n, e) {
              return e < 5024 ? null : n;
            })),
          null ===
            (i =
              9552 === i ||
              9566 === i ||
              9569 === i ||
              9578 === i ||
              21313 === i ||
              21317 === i
                ? r.lastIndexOf(i)
                : p(i, r)) || (r = l(i / 157) + 129) < 161
            ? f(e)
            : [r, (e = i % 157) + (e < 63 ? 64 : 98)]);
    };
  }
  function C(n) {
    var t = n.fatal,
      o = !1,
      s = 0;
    this.handler = function (n, e) {
      var i, r;
      return e === b && 0 !== s
        ? ((s = 0), m(t))
        : e === b && 0 === s
        ? w
        : 142 === s && _(e, 161, 223)
        ? ((s = 0), 65216 + e)
        : 143 === s && _(e, 161, 254)
        ? ((o = !0), (s = e), null)
        : 0 !== s
        ? ((i = s),
          (s = 0),
          (r = null),
          _(i, 161, 254) &&
            _(e, 161, 254) &&
            (r = y(94 * (i - 161) + (e - 161), v(o ? "jis0212" : "jis0208"))),
          (o = !1),
          _(e, 161, 254) || n.prepend(e),
          null === r ? m(t) : r)
        : u(e)
        ? e
        : 142 === e || 143 === e || _(e, 161, 254)
        ? ((s = e), null)
        : m(t);
    };
  }
  function P(n) {
    n.fatal;
    this.handler = function (n, e) {
      var i;
      return e === b
        ? w
        : a(e)
        ? e
        : 165 === e
        ? 92
        : 8254 === e
        ? 126
        : _(e, 65377, 65439)
        ? [142, e - 65377 + 161]
        : null === (i = p((e = 8722 === e ? 65293 : e), v("jis0208")))
        ? f(e)
        : [l(i / 94) + 161, (i % 94) + 161];
    };
  }
  function D(n) {
    var t = n.fatal,
      o = 0,
      s = 1,
      l = 2,
      a = 3,
      u = 4,
      c = 5,
      f = 6,
      d = o,
      h = o,
      g = 0,
      p = !1;
    this.handler = function (n, e) {
      switch (d) {
        default:
        case o:
          return 27 === e
            ? ((d = c), null)
            : _(e, 0, 127) && 14 !== e && 15 !== e && 27 !== e
            ? ((p = !1), e)
            : e === b
            ? w
            : ((p = !1), m(t));
        case s:
          return 27 === e
            ? ((d = c), null)
            : 92 === e
            ? ((p = !1), 165)
            : 126 === e
            ? ((p = !1), 8254)
            : _(e, 0, 127) &&
              14 !== e &&
              15 !== e &&
              27 !== e &&
              92 !== e &&
              126 !== e
            ? ((p = !1), e)
            : e === b
            ? w
            : ((p = !1), m(t));
        case l:
          return 27 === e
            ? ((d = c), null)
            : _(e, 33, 95)
            ? ((p = !1), 65344 + e)
            : e === b
            ? w
            : ((p = !1), m(t));
        case a:
          return 27 === e
            ? ((d = c), null)
            : _(e, 33, 126)
            ? ((p = !1), (g = e), (d = u), null)
            : e === b
            ? w
            : ((p = !1), m(t));
        case u:
          if (27 === e) d = c;
          else {
            if (_(e, 33, 126))
              return (
                (d = a),
                null === (i = y(94 * (g - 33) + e - 33, v("jis0208")))
                  ? m(t)
                  : i
              );
            e === b ? ((d = a), n.prepend(e)) : (d = a);
          }
          return m(t);
        case c:
          return 36 === e || 40 === e
            ? ((g = e), (d = f), null)
            : (n.prepend(e), (p = !1), (d = h), m(t));
        case f:
          var i = g,
            r = ((g = 0), null);
          return (40 === i && 66 === e && (r = o),
          40 === i && 74 === e && (r = s),
          40 === i && 73 === e && (r = l),
          null !== (r = 36 !== i || (64 !== e && 66 !== e) ? r : a))
            ? ((d = r), (r = p), (p = !0), r ? m(t) : null)
            : (n.prepend([i, e]), (p = !1), (d = h), m(t));
      }
    };
  }
  function F(n) {
    n.fatal;
    var r = 0,
      t = 1,
      o = 2,
      s = r;
    this.handler = function (n, e) {
      if (e === b && s !== r) return n.prepend(e), (s = r), [27, 40, 66];
      if (e === b && s === r) return w;
      if (!((s !== r && s !== t) || (14 !== e && 15 !== e && 27 !== e)))
        return f(65533);
      if (s === r && a(e)) return e;
      if (
        s === t &&
        ((a(e) && 92 !== e && 126 !== e) || 165 == e || 8254 == e)
      ) {
        if (a(e)) return e;
        if (165 === e) return 92;
        if (8254 === e) return 126;
      }
      var i;
      return a(e) && s !== r
        ? (n.prepend(e), (s = r), [27, 40, 66])
        : (165 !== e && 8254 !== e) || s === t
        ? null === (i = p((e = 8722 === e ? 65293 : e), v("jis0208")))
          ? f(e)
          : s !== o
          ? (n.prepend(e), (s = o), [27, 36, 66])
          : [l(i / 94) + 33, (i % 94) + 33]
        : (n.prepend(e), (s = t), [27, 40, 74]);
    };
  }
  function J(n) {
    var t = n.fatal,
      o = 0;
    this.handler = function (n, e) {
      var i, r;
      return e === b && 0 !== o
        ? ((o = 0), m(t))
        : e === b && 0 === o
        ? w
        : 0 !== o
        ? ((r = o),
          (i = null),
          (o = 0),
          (_(e, 64, 126) || _(e, 128, 252)) &&
            (i = 188 * (r - (r < 160 ? 129 : 193)) + e - (e < 127 ? 64 : 65)),
          _(i, 8836, 10715)
            ? 48508 + i
            : (null === (r = null === i ? null : y(i, v("jis0208"))) &&
                u(e) &&
                n.prepend(e),
              null === r ? m(t) : r))
        : u(e) || 128 === e
        ? e
        : _(e, 161, 223)
        ? 65216 + e
        : _(e, 129, 159) || _(e, 224, 252)
        ? ((o = e), null)
        : m(t);
    };
  }
  function K(n) {
    n.fatal;
    this.handler = function (n, e) {
      var i;
      return e === b
        ? w
        : a(e) || 128 === e
        ? e
        : 165 === e
        ? 92
        : 8254 === e
        ? 126
        : _(e, 65377, 65439)
        ? e - 65377 + 161
        : ((i = e = 8722 === e ? 65293 : e),
          null ===
          (i = (t =
            t ||
            v("jis0208").map(function (n, e) {
              return _(e, 8272, 8835) ? null : n;
            })).indexOf(i))
            ? f(e)
            : [
                (e = l(i / 188)) + (e < 31 ? 129 : 193),
                (e = i % 188) + (e < 63 ? 64 : 65),
              ]);
    };
  }
  function R(n) {
    var t = n.fatal,
      o = 0;
    this.handler = function (n, e) {
      var i, r;
      return e === b && 0 !== o
        ? ((o = 0), m(t))
        : e === b && 0 === o
        ? w
        : 0 !== o
        ? ((r = o),
          (o = 0),
          (r =
            (i = null) === (i = _(e, 65, 254) ? 190 * (r - 129) + (e - 65) : i)
              ? null
              : y(i, v("euc-kr"))),
          null === i && u(e) && n.prepend(e),
          null === r ? m(t) : r)
        : u(e)
        ? e
        : _(e, 129, 254)
        ? ((o = e), null)
        : m(t);
    };
  }
  function G(n) {
    n.fatal;
    this.handler = function (n, e) {
      var i;
      return e === b
        ? w
        : a(e)
        ? e
        : null === (i = p(e, v("euc-kr")))
        ? f(e)
        : [l(i / 190) + 129, (i % 190) + 65];
    };
  }
  function A(n, e) {
    var i = n >> 8,
      n = 255 & n;
    return e ? [i, n] : [n, i];
  }
  function L(r, n) {
    var t = n.fatal,
      o = null,
      s = null;
    this.handler = function (n, e) {
      var i;
      return e !== b || (null === o && null === s)
        ? e === b && null === o && null === s
          ? w
          : null === o
          ? ((o = e), null)
          : ((e = r ? (o << 8) + e : (e << 8) + o),
            (o = null) !== s
              ? ((i = s),
                (s = null),
                _(e, 56320, 57343)
                  ? 65536 + 1024 * (i - 55296) + (e - 56320)
                  : (n.prepend(A(e, r)), m(t)))
              : _(e, 55296, 56319)
              ? ((s = e), null)
              : _(e, 56320, 57343)
              ? m(t)
              : e)
        : m(t);
    };
  }
  function M(r, n) {
    n.fatal;
    this.handler = function (n, e) {
      var i;
      return e === b
        ? w
        : _(e, 0, 65535)
        ? A(e, r)
        : ((i = A(55296 + ((e - 65536) >> 10), r)),
          (e = A(56320 + ((e - 65536) & 1023), r)),
          i.concat(e));
    };
  }
  function N(n) {
    n.fatal;
    this.handler = function (n, e) {
      return e === b ? w : u(e) ? e : 63360 + e - 128;
    };
  }
  function q(n) {
    n.fatal;
    this.handler = function (n, e) {
      return e === b
        ? w
        : a(e)
        ? e
        : _(e, 63360, 63487)
        ? e - 63360 + 128
        : f(e);
    };
  }
  Object.defineProperty &&
    (Object.defineProperty(O.prototype, "encoding", {
      get: function () {
        return this._encoding.name.toLowerCase();
      },
    }),
    Object.defineProperty(O.prototype, "fatal", {
      get: function () {
        return "fatal" === this._error_mode;
      },
    }),
    Object.defineProperty(O.prototype, "ignoreBOM", {
      get: function () {
        return this._ignoreBOM;
      },
    })),
    (O.prototype.decode = function (n, e) {
      n =
        "object" == typeof n && n instanceof ArrayBuffer
          ? new Uint8Array(n)
          : "object" == typeof n &&
            "buffer" in n &&
            n.buffer instanceof ArrayBuffer
          ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength)
          : new Uint8Array(0);
      (e = s(e)),
        this._do_not_flush ||
          ((this._decoder = g[this._encoding.name]({
            fatal: "fatal" === this._error_mode,
          })),
          (this._BOMseen = !1)),
        (this._do_not_flush = Boolean(e.stream));
      for (var i, r = new c(n), t = []; ; ) {
        var o = r.read();
        if (o === b) break;
        if ((i = this._decoder.handler(r, o)) === w) break;
        null !== i && (Array.isArray(i) ? t.push.apply(t, i) : t.push(i));
      }
      if (!this._do_not_flush) {
        for (
          ;
          (i = this._decoder.handler(r, r.read())) !== w &&
          (null !== i && (Array.isArray(i) ? t.push.apply(t, i) : t.push(i)),
          !r.endOfStream());

        );
        this._decoder = null;
      }
      return function (n) {
        (e = ["UTF-8", "UTF-16LE", "UTF-16BE"]),
          (i = this._encoding.name),
          -1 === e.indexOf(i) ||
            this._ignoreBOM ||
            this._BOMseen ||
            (0 < n.length && 65279 === n[0]
              ? ((this._BOMseen = !0), n.shift())
              : 0 < n.length && (this._BOMseen = !0));
        for (var e, i, r = n, t = "", o = 0; o < r.length; ++o) {
          var s = r[o];
          s <= 65535
            ? (t += String.fromCharCode(s))
            : ((s -= 65536),
              (t += String.fromCharCode(
                55296 + (s >> 10),
                56320 + (1023 & s)
              )));
        }
        return t;
      }.call(this, t);
    }),
    Object.defineProperty &&
      Object.defineProperty(k.prototype, "encoding", {
        get: function () {
          return this._encoding.name.toLowerCase();
        },
      }),
    (k.prototype.encode = function (n, e) {
      (n = void 0 === n ? "" : String(n)),
        (e = s(e)),
        this._do_not_flush ||
          (this._encoder = h[this._encoding.name]({
            fatal: "fatal" === this._fatal,
          })),
        (this._do_not_flush = Boolean(e.stream));
      for (
        var i,
          r = new c(
            (function (n) {
              for (var e = String(n), i = e.length, r = 0, t = []; r < i; ) {
                var o,
                  s = e.charCodeAt(r);
                s < 55296 || 57343 < s
                  ? t.push(s)
                  : 56320 <= s && s <= 57343
                  ? t.push(65533)
                  : 55296 <= s &&
                    s <= 56319 &&
                    (r !== i - 1 &&
                    56320 <= (o = e.charCodeAt(r + 1)) &&
                    o <= 57343
                      ? (t.push(65536 + ((1023 & s) << 10) + (1023 & o)),
                        (r += 1))
                      : t.push(65533)),
                  (r += 1);
              }
              return t;
            })(n)
          ),
          t = [];
        ;

      ) {
        var o = r.read();
        if (o === b) break;
        if ((i = this._encoder.handler(r, o)) === w) break;
        Array.isArray(i) ? t.push.apply(t, i) : t.push(i);
      }
      if (!this._do_not_flush) {
        for (;;) {
          if ((i = this._encoder.handler(r, r.read())) === w) break;
          Array.isArray(i) ? t.push.apply(t, i) : t.push(i);
        }
        this._encoder = null;
      }
      return new Uint8Array(t);
    }),
    (h["UTF-8"] = function (n) {
      return new E(n);
    }),
    (g["UTF-8"] = function (n) {
      return new e(n);
    }),
    "encoding-indexes" in i &&
      n.forEach(function (n) {
        "Legacy single-byte encodings" === n.heading &&
          n.encodings.forEach(function (n) {
            var n = n.name,
              e = v(n.toLowerCase());
            (g[n] = function (n) {
              return new j(e, n);
            }),
              (h[n] = function (n) {
                return new B(e, n);
              });
          });
      }),
    (g.GBK = function (n) {
      return new S(n);
    }),
    (h.GBK = function (n) {
      return new T(n, !0);
    }),
    (h.gb18030 = function (n) {
      return new T(n);
    }),
    (g.gb18030 = function (n) {
      return new S(n);
    }),
    (h.Big5 = function (n) {
      return new U(n);
    }),
    (g.Big5 = function (n) {
      return new I(n);
    }),
    (h["EUC-JP"] = function (n) {
      return new P(n);
    }),
    (g["EUC-JP"] = function (n) {
      return new C(n);
    }),
    (h["ISO-2022-JP"] = function (n) {
      return new F(n);
    }),
    (g["ISO-2022-JP"] = function (n) {
      return new D(n);
    }),
    (h.Shift_JIS = function (n) {
      return new K(n);
    }),
    (g.Shift_JIS = function (n) {
      return new J(n);
    }),
    (h["EUC-KR"] = function (n) {
      return new G(n);
    }),
    (g["EUC-KR"] = function (n) {
      return new R(n);
    }),
    (h["UTF-16BE"] = function (n) {
      return new M(!0, n);
    }),
    (g["UTF-16BE"] = function (n) {
      return new L(!0, n);
    }),
    (h["UTF-16LE"] = function (n) {
      return new M(!1, n);
    }),
    (g["UTF-16LE"] = function (n) {
      return new L(!1, n);
    }),
    (h["x-user-defined"] = function (n) {
      return new q(n);
    }),
    (g["x-user-defined"] = function (n) {
      return new N(n);
    }),
    i.TextEncoder || (i.TextEncoder = k),
    i.TextDecoder || (i.TextDecoder = O),
    "undefined" != typeof module &&
      module.exports &&
      (module.exports = {
        TextEncoder: i.TextEncoder,
        TextDecoder: i.TextDecoder,
        EncodingIndexes: i["encoding-indexes"],
      });
})(this || {});
// protobuf-ts 2.9.0
((i) => {
  (i.symbol = Symbol.for("protobuf-ts/unknown")),
    (i.onRead = (e, r, t, a, n) => {
      (s(r) ? r[i.symbol] : (r[i.symbol] = [])).push({
        no: t,
        wireType: a,
        data: n,
      });
    }),
    (i.onWrite = (e, r, t) => {
      for (var { no: a, wireType: n, data: s } of i.list(r)) t.tag(a, n).raw(s);
    }),
    (i.list = (e, r) => {
      return s(e)
        ? ((e = e[i.symbol]), r ? e.filter((e) => e.no == r) : e)
        : [];
    }),
    (i.last = (e, r) => (0, i.list)(e, r).slice(-1)[0]);
  const s = (e) => e && Array.isArray(e[i.symbol]);
})((UnknownFieldHandler = UnknownFieldHandler || {}));
var UnknownFieldHandler,
  WireType = ((e) => (
    (e[(e.Varint = 0)] = "Varint"),
    (e[(e.Bit64 = 1)] = "Bit64"),
    (e[(e.LengthDelimited = 2)] = "LengthDelimited"),
    (e[(e.StartGroup = 3)] = "StartGroup"),
    (e[(e.EndGroup = 4)] = "EndGroup"),
    (e[(e.Bit32 = 5)] = "Bit32"),
    e
  ))(WireType || {});
const MESSAGE_TYPE = Symbol.for("protobuf-ts/message-type");
function lowerCamelCase(r) {
  let t = !1;
  var a = [];
  for (let e = 0; e < r.length; e++) {
    var n = r.charAt(e);
    "_" == n
      ? (t = !0)
      : /\d/.test(n)
      ? (a.push(n), (t = !0))
      : t
      ? (a.push(n.toUpperCase()), (t = !1))
      : 0 == e
      ? a.push(n.toLowerCase())
      : a.push(n);
  }
  return a.join("");
}
var ScalarType = ((e) => (
    (e[(e.DOUBLE = 1)] = "DOUBLE"),
    (e[(e.FLOAT = 2)] = "FLOAT"),
    (e[(e.INT64 = 3)] = "INT64"),
    (e[(e.UINT64 = 4)] = "UINT64"),
    (e[(e.INT32 = 5)] = "INT32"),
    (e[(e.FIXED64 = 6)] = "FIXED64"),
    (e[(e.FIXED32 = 7)] = "FIXED32"),
    (e[(e.BOOL = 8)] = "BOOL"),
    (e[(e.STRING = 9)] = "STRING"),
    (e[(e.BYTES = 12)] = "BYTES"),
    (e[(e.UINT32 = 13)] = "UINT32"),
    (e[(e.SFIXED32 = 15)] = "SFIXED32"),
    (e[(e.SFIXED64 = 16)] = "SFIXED64"),
    (e[(e.SINT32 = 17)] = "SINT32"),
    (e[(e.SINT64 = 18)] = "SINT64"),
    e
  ))(ScalarType || {}),
  LongType = ((e) => (
    (e[(e.BIGINT = 0)] = "BIGINT"),
    (e[(e.STRING = 1)] = "STRING"),
    (e[(e.NUMBER = 2)] = "NUMBER"),
    e
  ))(LongType || {}),
  RepeatType = ((e) => (
    (e[(e.NO = 0)] = "NO"),
    (e[(e.PACKED = 1)] = "PACKED"),
    (e[(e.UNPACKED = 2)] = "UNPACKED"),
    e
  ))(RepeatType || {});
function normalizeFieldInfo(e) {
  return (
    (e.localName = e.localName ?? lowerCamelCase(e.name)),
    (e.jsonName = e.jsonName ?? lowerCamelCase(e.name)),
    (e.repeat = e.repeat ?? 0),
    (e.opt = e.opt ?? (!e.repeat && !e.oneof && "message" == e.kind)),
    e
  );
}
function isOneofGroup(e) {
  if ("object" != typeof e || null === e || !e.hasOwnProperty("oneofKind"))
    return !1;
  switch (typeof e.oneofKind) {
    case "string":
      return void 0 === e[e.oneofKind] ? !1 : 2 == Object.keys(e).length;
    case "undefined":
      return 1 == Object.keys(e).length;
    default:
      return !1;
  }
}
class ReflectionTypeCheck {
  constructor(e) {
    this.fields = e.fields ?? [];
  }
  prepare() {
    if (!this.data) {
      var e,
        r = [],
        t = [],
        a = [];
      for (e of this.fields)
        if (e.oneof)
          a.includes(e.oneof) ||
            (a.push(e.oneof), r.push(e.oneof), t.push(e.oneof));
        else
          switch ((t.push(e.localName), e.kind)) {
            case "scalar":
            case "enum":
              (e.opt && !e.repeat) || r.push(e.localName);
              break;
            case "message":
              e.repeat && r.push(e.localName);
              break;
            case "map":
              r.push(e.localName);
          }
      this.data = { req: r, known: t, oneofs: Object.values(a) };
    }
  }
  is(e, a, n = !1) {
    if (!(a < 0)) {
      if (null == e || "object" != typeof e) return !1;
      this.prepare();
      let r = Object.keys(e),
        t = this.data;
      if (r.length < t.req.length || t.req.some((e) => !r.includes(e)))
        return !1;
      if (!n && r.some((e) => !t.known.includes(e))) return !1;
      if (!(a < 1)) {
        for (const i of t.oneofs) {
          const o = e[i];
          if (!isOneofGroup(o)) return !1;
          if (void 0 !== o.oneofKind) {
            var s = this.fields.find((e) => e.localName === o.oneofKind);
            if (!s) return !1;
            if (!this.field(o[o.oneofKind], s, n, a)) return !1;
          }
        }
        for (const l of this.fields)
          if (void 0 === l.oneof && !this.field(e[l.localName], l, n, a))
            return !1;
      }
    }
    return !0;
  }
  field(e, r, t, a) {
    var n = r.repeat;
    switch (r.kind) {
      case "scalar":
        return void 0 === e
          ? r.opt
          : n
          ? this.scalars(e, r.T, a, r.L)
          : this.scalar(e, r.T, r.L);
      case "enum":
        return void 0 === e
          ? r.opt
          : n
          ? this.scalars(e, ScalarType.INT32, a)
          : this.scalar(e, ScalarType.INT32);
      case "message":
        return void 0 === e
          ? !0
          : n
          ? this.messages(e, r.T(), t, a)
          : this.message(e, r.T(), t, a);
      case "map":
        if ("object" != typeof e || null === e) return !1;
        if (a < 2) return !0;
        if (!this.mapKeys(e, r.K, a)) return !1;
        switch (r.V.kind) {
          case "scalar":
            return this.scalars(Object.values(e), r.V.T, a, r.V.L);
          case "enum":
            return this.scalars(Object.values(e), ScalarType.INT32, a);
          case "message":
            return this.messages(Object.values(e), r.V.T(), t, a);
        }
    }
    return !0;
  }
  message(e, r, t, a) {
    return t ? r.isAssignable(e, a) : r.is(e, a);
  }
  messages(r, t, e, a) {
    if (!Array.isArray(r)) return !1;
    if (!(a < 2))
      if (e) {
        for (let e = 0; e < r.length && e < a; e++)
          if (!t.isAssignable(r[e], a - 1)) return !1;
      } else
        for (let e = 0; e < r.length && e < a; e++)
          if (!t.is(r[e], a - 1)) return !1;
    return !0;
  }
  scalar(e, r, t) {
    var a = typeof e;
    switch (r) {
      case ScalarType.UINT64:
      case ScalarType.FIXED64:
      case ScalarType.INT64:
      case ScalarType.SFIXED64:
      case ScalarType.SINT64:
        switch (t) {
          case LongType.BIGINT:
            return "bigint" == a;
          case LongType.NUMBER:
            return "number" == a && !isNaN(e);
          default:
            return "string" == a;
        }
      case ScalarType.BOOL:
        return "boolean" == a;
      case ScalarType.STRING:
        return "string" == a;
      case ScalarType.BYTES:
        return e instanceof Uint8Array;
      case ScalarType.DOUBLE:
      case ScalarType.FLOAT:
        return "number" == a && !isNaN(e);
      default:
        return "number" == a && Number.isInteger(e);
    }
  }
  scalars(r, t, a, n) {
    if (!Array.isArray(r)) return !1;
    if (!(a < 2) && Array.isArray(r))
      for (let e = 0; e < r.length && e < a; e++)
        if (!this.scalar(r[e], t, n)) return !1;
    return !0;
  }
  mapKeys(e, r, t) {
    var a = Object.keys(e);
    switch (r) {
      case ScalarType.INT32:
      case ScalarType.FIXED32:
      case ScalarType.SFIXED32:
      case ScalarType.SINT32:
      case ScalarType.UINT32:
        return this.scalars(
          a.slice(0, t).map((e) => parseInt(e)),
          r,
          t
        );
      case ScalarType.BOOL:
        return this.scalars(
          a.slice(0, t).map((e) => "true" == e || ("false" != e && e)),
          r,
          t
        );
      default:
        return this.scalars(a, r, t, LongType.STRING);
    }
  }
}
function typeofJsonValue(e) {
  var r = typeof e;
  if ("object" == r) {
    if (Array.isArray(e)) return "array";
    if (null === e) return "null";
  }
  return r;
}
function isJsonObject(e) {
  return null !== e && "object" == typeof e && !Array.isArray(e);
}
let encTable =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
      ""
    ),
  decTable = [];
for (let e = 0; e < encTable.length; e++)
  decTable[encTable[e].charCodeAt(0)] = e;
function base64decode(r) {
  let e = (3 * r.length) / 4,
    t =
      ("=" == r[r.length - 2] ? (e -= 2) : "=" == r[r.length - 1] && --e,
      new Uint8Array(e)),
    a = 0,
    n = 0,
    s,
    i = 0;
  for (let e = 0; e < r.length; e++) {
    if (void 0 === (s = decTable[r.charCodeAt(e)]))
      switch (r[e]) {
        case "=":
          n = 0;
        case "\n":
        case "\r":
        case "\t":
        case " ":
          continue;
        default:
          throw Error("invalid base64 string.");
      }
    switch (n) {
      case 0:
        (i = s), (n = 1);
        break;
      case 1:
        (t[a++] = (i << 2) | ((48 & s) >> 4)), (i = s), (n = 2);
        break;
      case 2:
        (t[a++] = ((15 & i) << 4) | ((60 & s) >> 2)), (i = s), (n = 3);
        break;
      case 3:
        (t[a++] = ((3 & i) << 6) | s), (n = 0);
    }
  }
  if (1 == n) throw Error("invalid base64 string.");
  return t.subarray(0, a);
}
function base64encode(r) {
  let t = "",
    a = 0,
    n,
    s = 0;
  for (let e = 0; e < r.length; e++)
    switch (((n = r[e]), a)) {
      case 0:
        (t += encTable[n >> 2]), (s = (3 & n) << 4), (a = 1);
        break;
      case 1:
        (t += encTable[s | (n >> 4)]), (s = (15 & n) << 2), (a = 2);
        break;
      case 2:
        (t = (t += encTable[s | (n >> 6)]) + encTable[63 & n]), (a = 0);
    }
  return a && ((t = t + encTable[s] + "="), 1 == a && (t += "=")), t;
}
function varint64read() {
  let r = 0,
    t = 0;
  for (let e = 0; e < 28; e += 7) {
    var a = this.buf[this.pos++];
    if (((r |= (127 & a) << e), 0 == (128 & a)))
      return this.assertBounds(), [r, t];
  }
  var e = this.buf[this.pos++];
  if (((r |= (15 & e) << 28), (t = (112 & e) >> 4), 0 == (128 & e)))
    return this.assertBounds(), [r, t];
  for (let e = 3; e <= 31; e += 7) {
    var n = this.buf[this.pos++];
    if (((t |= (127 & n) << e), 0 == (128 & n)))
      return this.assertBounds(), [r, t];
  }
  throw new Error("invalid varint");
}
function varint64write(r, t, a) {
  for (let e = 0; e < 28; e += 7) {
    var n = r >>> e,
      s = !(n >>> 7 == 0 && 0 == t);
    if ((a.push(255 & (s ? 128 | n : n)), !s)) return;
  }
  var e = ((r >>> 28) & 15) | ((7 & t) << 4),
    i = !(t >> 3 == 0);
  if ((a.push(255 & (i ? 128 | e : e)), i)) {
    for (let e = 3; e < 31; e += 7) {
      var o = t >>> e,
        l = !(o >>> 7 == 0);
      if ((a.push(255 & (l ? 128 | o : o)), !l)) return;
    }
    a.push((t >>> 31) & 1);
  }
}
(decTable["-".charCodeAt(0)] = encTable.indexOf("+")),
  (decTable["_".charCodeAt(0)] = encTable.indexOf("/"));
const TWO_PWR_32_DBL$1 = 4294967296;
function int64fromString(t) {
  var e = "-" == t[0];
  e && (t = t.slice(1));
  let a = 0,
    n = 0;
  function r(e, r) {
    e = Number(t.slice(e, r));
    (n *= 1e6),
      (a = 1e6 * a + e) >= TWO_PWR_32_DBL$1 &&
        ((n += (a / TWO_PWR_32_DBL$1) | 0), (a %= TWO_PWR_32_DBL$1));
  }
  return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, a, n];
}
function int64toString(e, r) {
  if (r <= 2097151) return "" + (TWO_PWR_32_DBL$1 * r + (e >>> 0));
  var t = (((e >>> 24) | (r << 8)) >>> 0) & 16777215,
    r = (r >> 16) & 65535;
  let a = (16777215 & e) + 6777216 * t + 6710656 * r,
    n = t + 8147497 * r,
    s = 2 * r;
  function i(e, r) {
    e = e ? String(e) : "";
    return r ? "0000000".slice(e.length) + e : e;
  }
  return (
    1e7 <= a && ((n += Math.floor(a / 1e7)), (a %= 1e7)),
    1e7 <= n && ((s += Math.floor(n / 1e7)), (n %= 1e7)),
    i(s, 0) + i(n, s) + i(a, 1)
  );
}
function varint32write(r, t) {
  if (0 <= r) {
    for (; 127 < r; ) t.push((127 & r) | 128), (r >>>= 7);
    t.push(r);
  } else {
    for (let e = 0; e < 9; e++) t.push((127 & r) | 128), (r >>= 7);
    t.push(1);
  }
}
function varint32read() {
  let r = this.buf[this.pos++];
  var e = 127 & r;
  if (0 == (128 & r)) return this.assertBounds(), e;
  if (((e |= (127 & (r = this.buf[this.pos++])) << 7), 0 == (128 & r)))
    return this.assertBounds(), e;
  if (((e |= (127 & (r = this.buf[this.pos++])) << 14), 0 == (128 & r)))
    return this.assertBounds(), e;
  if (((e |= (127 & (r = this.buf[this.pos++])) << 21), 0 == (128 & r)))
    return this.assertBounds(), e;
  e |= (15 & (r = this.buf[this.pos++])) << 28;
  for (let e = 5; 0 != (128 & r) && e < 10; e++) r = this.buf[this.pos++];
  if (0 != (128 & r)) throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function detectBi() {
  var e = new DataView(new ArrayBuffer(8));
  return void 0 !== globalThis.BigInt &&
    "function" == typeof e.getBigInt64 &&
    "function" == typeof e.getBigUint64 &&
    "function" == typeof e.setBigInt64 &&
    "function" == typeof e.setBigUint64
    ? {
        MIN: BigInt("-9223372036854775808"),
        MAX: BigInt("9223372036854775807"),
        UMIN: BigInt("0"),
        UMAX: BigInt("18446744073709551615"),
        C: BigInt,
        V: e,
      }
    : void 0;
}
const BI = detectBi();
function assertBi(e) {
  if (!e)
    throw new Error(
      "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support"
    );
}
const RE_DECIMAL_STR = /^-?[0-9]+$/,
  TWO_PWR_32_DBL = 4294967296;
class SharedPbLong {
  constructor(e, r) {
    (this.lo = 0 | e), (this.hi = 0 | r);
  }
  isZero() {
    return 0 == this.lo && 0 == this.hi;
  }
  toNumber() {
    var e = this.hi * TWO_PWR_32_DBL + (this.lo >>> 0);
    if (Number.isSafeInteger(e)) return e;
    throw new Error("cannot convert to safe number");
  }
}
const _PbULong = class extends SharedPbLong {
  static from(e) {
    if (BI)
      switch (typeof e) {
        case "string":
          if ("0" == e) return this.ZERO;
          if ("" == e) throw new Error("string is no integer");
          e = BI.C(e);
        case "number":
          if (0 === e) return this.ZERO;
          e = BI.C(e);
        case "bigint":
          if (!e) return this.ZERO;
          if (e < BI.UMIN) throw new Error("signed value for ulong");
          if (e > BI.UMAX) throw new Error("ulong too large");
          return (
            BI.V.setBigUint64(0, e, !0),
            new _PbULong(BI.V.getInt32(0, !0), BI.V.getInt32(4, !0))
          );
      }
    else
      switch (typeof e) {
        case "string":
          if ("0" == e) return this.ZERO;
          if (((e = e.trim()), !RE_DECIMAL_STR.test(e)))
            throw new Error("string is no integer");
          var [r, t, a] = int64fromString(e);
          if (r) throw new Error("signed value");
          return new _PbULong(t, a);
        case "number":
          if (0 == e) return this.ZERO;
          if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
          if (e < 0) throw new Error("signed value for ulong");
          return new _PbULong(e, e / TWO_PWR_32_DBL);
      }
    throw new Error("unknown value " + typeof e);
  }
  toString() {
    return BI ? this.toBigInt().toString() : int64toString(this.lo, this.hi);
  }
  toBigInt() {
    return (
      assertBi(BI),
      BI.V.setInt32(0, this.lo, !0),
      BI.V.setInt32(4, this.hi, !0),
      BI.V.getBigUint64(0, !0)
    );
  }
};
let PbULong = _PbULong;
PbULong.ZERO = new _PbULong(0, 0);
const _PbLong = class extends SharedPbLong {
  static from(e) {
    if (BI)
      switch (typeof e) {
        case "string":
          if ("0" == e) return this.ZERO;
          if ("" == e) throw new Error("string is no integer");
          e = BI.C(e);
        case "number":
          if (0 === e) return this.ZERO;
          e = BI.C(e);
        case "bigint":
          if (!e) return this.ZERO;
          if (e < BI.MIN) throw new Error("ulong too small");
          if (e > BI.MAX) throw new Error("ulong too large");
          return (
            BI.V.setBigInt64(0, e, !0),
            new _PbLong(BI.V.getInt32(0, !0), BI.V.getInt32(4, !0))
          );
      }
    else
      switch (typeof e) {
        case "string":
          if ("0" == e) return this.ZERO;
          var r, t, a;
          if (((e = e.trim()), RE_DECIMAL_STR.test(e)))
            return (
              ([r, a, t] = int64fromString(e)),
              (a = new _PbLong(a, t)),
              r ? a.negate() : a
            );
          throw new Error("string is no integer");
        case "number":
          if (0 == e) return this.ZERO;
          if (Number.isSafeInteger(e))
            return 0 < e
              ? new _PbLong(e, e / TWO_PWR_32_DBL)
              : new _PbLong(-e, -e / TWO_PWR_32_DBL).negate();
          throw new Error("number is no integer");
      }
    throw new Error("unknown value " + typeof e);
  }
  isNegative() {
    return 0 != (2147483648 & this.hi);
  }
  negate() {
    let e = ~this.hi,
      r = this.lo;
    return r ? (r = 1 + ~r) : (e += 1), new _PbLong(r, e);
  }
  toString() {
    var e;
    return BI
      ? this.toBigInt().toString()
      : this.isNegative()
      ? "-" + int64toString((e = this.negate()).lo, e.hi)
      : int64toString(this.lo, this.hi);
  }
  toBigInt() {
    return (
      assertBi(BI),
      BI.V.setInt32(0, this.lo, !0),
      BI.V.setInt32(4, this.hi, !0),
      BI.V.getBigInt64(0, !0)
    );
  }
};
let PbLong = _PbLong;
function assert(e, r) {
  if (!e) throw new Error(r);
}
PbLong.ZERO = new _PbLong(0, 0);
const FLOAT32_MAX = 34028234663852886e22,
  FLOAT32_MIN = -34028234663852886e22,
  UINT32_MAX = 4294967295,
  INT32_MAX = 2147483647,
  INT32_MIN = -2147483648;
function assertInt32(e) {
  if ("number" != typeof e) throw new Error("invalid int 32: " + typeof e);
  if (!Number.isInteger(e) || e > INT32_MAX || e < INT32_MIN)
    throw new Error("invalid int 32: " + e);
}
function assertUInt32(e) {
  if ("number" != typeof e) throw new Error("invalid uint 32: " + typeof e);
  if (!Number.isInteger(e) || e > UINT32_MAX || e < 0)
    throw new Error("invalid uint 32: " + e);
}
function assertFloat32(e) {
  if ("number" != typeof e) throw new Error("invalid float 32: " + typeof e);
  if (Number.isFinite(e) && (e > FLOAT32_MAX || e < FLOAT32_MIN))
    throw new Error("invalid float 32: " + e);
}
function reflectionLongConvert(e, r) {
  switch (r) {
    case LongType.BIGINT:
      return e.toBigInt();
    case LongType.NUMBER:
      return e.toNumber();
    default:
      return e.toString();
  }
}
class ReflectionJsonReader {
  constructor(e) {
    this.info = e;
  }
  prepare() {
    if (void 0 === this.fMap) {
      this.fMap = {};
      for (const e of this.info.fields ?? [])
        (this.fMap[e.name] = e),
          (this.fMap[e.jsonName] = e),
          (this.fMap[e.localName] = e);
    }
  }
  assert(e, r, t) {
    if (!e) {
      let e = typeofJsonValue(t);
      throw (
        (("number" != e && "boolean" != e) || (e = t.toString()),
        new Error(`Cannot parse JSON ${e} for ${this.info.typeName}#` + r))
      );
    }
  }
  read(e, r, t) {
    this.prepare();
    var a,
      n,
      s = [];
    for ([a, n] of Object.entries(e)) {
      var i = this.fMap[a];
      if (!i) {
        if (t.ignoreUnknownFields) continue;
        throw new Error(
          `Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ` +
            a
        );
      }
      var o = i.localName;
      let e;
      if (i.oneof) {
        if (s.includes(i.oneof))
          throw new Error(
            `Multiple members of the oneof group "${i.oneof}" of ${this.info.typeName} are present in JSON.`
          );
        s.push(i.oneof), (e = r[i.oneof] = { oneofKind: o });
      } else e = r;
      if ("map" == i.kind) {
        if (null !== n) {
          this.assert(isJsonObject(n), i.name, n);
          var l,
            c,
            f = e[o];
          for ([l, c] of Object.entries(n)) {
            this.assert(null !== c, i.name + " map value", null);
            let e;
            switch (i.V.kind) {
              case "message":
                e = i.V.T().internalJsonRead(c, t);
                break;
              case "enum":
                if (
                  !1 ===
                  (e = this.enum(i.V.T(), c, i.name, t.ignoreUnknownFields))
                )
                  continue;
                break;
              case "scalar":
                e = this.scalar(c, i.V.T, i.V.L, i.name);
            }
            this.assert(void 0 !== e, i.name + " map value", c);
            let r = l;
            i.K == ScalarType.BOOL && (r = "true" == r || ("false" != r && r)),
              (f[
                (r = this.scalar(r, i.K, LongType.STRING, i.name).toString())
              ] = e);
          }
        }
      } else if (i.repeat) {
        if (null !== n) {
          this.assert(Array.isArray(n), i.name, n);
          var u = e[o];
          for (const p of n) {
            this.assert(null !== p, i.name, null);
            let e;
            switch (i.kind) {
              case "message":
                e = i.T().internalJsonRead(p, t);
                break;
              case "enum":
                if (
                  !1 ===
                  (e = this.enum(i.T(), p, i.name, t.ignoreUnknownFields))
                )
                  continue;
                break;
              case "scalar":
                e = this.scalar(p, i.T, i.L, i.name);
            }
            this.assert(void 0 !== e, i.name, n), u.push(e);
          }
        }
      } else
        switch (i.kind) {
          case "message":
            null === n && "google.protobuf.Value" != i.T().typeName
              ? this.assert(
                  void 0 === i.oneof,
                  i.name + " (oneof member)",
                  null
                )
              : (e[o] = i.T().internalJsonRead(n, t, e[o]));
            break;
          case "enum":
            var h = this.enum(i.T(), n, i.name, t.ignoreUnknownFields);
            !1 !== h && (e[o] = h);
            break;
          case "scalar":
            e[o] = this.scalar(n, i.T, i.L, i.name);
        }
    }
  }
  enum(r, t, a, n) {
    if (
      ("google.protobuf.NullValue" == r[0] &&
        assert(
          null === t,
          `Unable to parse field ${this.info.typeName}#${a}, enum ${r[0]} only accepts null.`
        ),
      null === t)
    )
      return 0;
    switch (typeof t) {
      case "number":
        return (
          assert(
            Number.isInteger(t),
            `Unable to parse field ${this.info.typeName}#${a}, enum can only be integral number, got ${t}.`
          ),
          t
        );
      case "string":
        let e = t;
        r[2] &&
          t.substring(0, r[2].length) === r[2] &&
          (e = t.substring(r[2].length));
        var s = r[1][e];
        return void 0 === s && n
          ? !1
          : (assert(
              "number" == typeof s,
              `Unable to parse field ${this.info.typeName}#${a}, enum ${r[0]} has no value for "${t}".`
            ),
            s);
    }
    assert(
      !1,
      `Unable to parse field ${
        this.info.typeName
      }#${a}, cannot parse enum value from ${typeof t}".`
    );
  }
  scalar(r, t, a, e) {
    let n;
    try {
      switch (t) {
        case ScalarType.DOUBLE:
        case ScalarType.FLOAT:
          if (null === r) return 0;
          if ("NaN" === r) return Number.NaN;
          if ("Infinity" === r) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === r) return Number.NEGATIVE_INFINITY;
          if ("" === r) n = "empty string";
          else if ("string" == typeof r && r.trim().length !== r.length)
            n = "extra whitespace";
          else if ("string" == typeof r || "number" == typeof r) {
            var s = Number(r);
            if (Number.isNaN(s)) n = "not a number";
            else {
              if (Number.isFinite(s))
                return t == ScalarType.FLOAT && assertFloat32(s), s;
              n = "too large or small";
            }
          }
          break;
        case ScalarType.INT32:
        case ScalarType.FIXED32:
        case ScalarType.SFIXED32:
        case ScalarType.SINT32:
        case ScalarType.UINT32:
          if (null === r) return 0;
          let e;
          if (
            ("number" == typeof r
              ? (e = r)
              : "" === r
              ? (n = "empty string")
              : "string" == typeof r &&
                (r.trim().length !== r.length
                  ? (n = "extra whitespace")
                  : (e = Number(r))),
            void 0 === e)
          )
            break;
          return (t == ScalarType.UINT32 ? assertUInt32 : assertInt32)(e), e;
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
          if (null === r) return reflectionLongConvert(PbLong.ZERO, a);
          if ("number" != typeof r && "string" != typeof r) break;
          return reflectionLongConvert(PbLong.from(r), a);
        case ScalarType.FIXED64:
        case ScalarType.UINT64:
          if (null === r) return reflectionLongConvert(PbULong.ZERO, a);
          if ("number" != typeof r && "string" != typeof r) break;
          return reflectionLongConvert(PbULong.from(r), a);
        case ScalarType.BOOL:
          if (null === r) return !1;
          if ("boolean" != typeof r) break;
          return r;
        case ScalarType.STRING:
          if (null === r) return "";
          if ("string" != typeof r) {
            n = "extra whitespace";
            break;
          }
          try {
            encodeURIComponent(r);
          } catch (e) {
            0;
            break;
          }
          return r;
        case ScalarType.BYTES:
          if (null === r || "" === r) return new Uint8Array(0);
          if ("string" != typeof r) break;
          return base64decode(r);
      }
    } catch (e) {
      n = e.message;
    }
    this.assert(!1, e + (n ? " - " + n : ""), r);
  }
}
class ReflectionJsonWriter {
  constructor(e) {
    this.fields = e.fields ?? [];
  }
  write(e, r) {
    var t,
      a,
      n = {},
      s = e;
    for (const i of this.fields)
      i.oneof
        ? (t = s[i.oneof]).oneofKind === i.localName &&
          ((a =
            "scalar" == i.kind || "enum" == i.kind
              ? { ...r, emitDefaultValues: !0 }
              : r),
          assert(void 0 !== (t = this.field(i, t[i.localName], a))),
          (n[r.useProtoFieldName ? i.name : i.jsonName] = t))
        : void 0 !== (a = this.field(i, s[i.localName], r)) &&
          (n[r.useProtoFieldName ? i.name : i.jsonName] = a);
    return n;
  }
  field(r, t, a) {
    let e = void 0;
    if ("map" == r.kind) {
      assert("object" == typeof t && null !== t);
      var n = {};
      switch (r.V.kind) {
        case "scalar":
          for (var [s, i] of Object.entries(t)) {
            i = this.scalar(r.V.T, i, r.name, !1, !0);
            assert(void 0 !== i), (n[s.toString()] = i);
          }
          break;
        case "message":
          var o,
            l,
            c = r.V.T();
          for ([o, l] of Object.entries(t)) {
            var f = this.message(c, l, r.name, a);
            assert(void 0 !== f), (n[o.toString()] = f);
          }
          break;
        case "enum":
          var u,
            h,
            p = r.V.T();
          for ([u, h] of Object.entries(t)) {
            assert(void 0 === h || "number" == typeof h);
            var T = this.enum(p, h, r.name, !1, !0, a.enumAsInteger);
            assert(void 0 !== T), (n[u.toString()] = T);
          }
      }
      (a.emitDefaultValues || 0 < Object.keys(n).length) && (e = n);
    } else if (r.repeat) {
      assert(Array.isArray(t));
      var d = [];
      switch (r.kind) {
        case "scalar":
          for (let e = 0; e < t.length; e++) {
            var y = this.scalar(r.T, t[e], r.name, r.opt, !0);
            assert(void 0 !== y), d.push(y);
          }
          break;
        case "enum":
          var g = r.T();
          for (let e = 0; e < t.length; e++) {
            assert(void 0 === t[e] || "number" == typeof t[e]);
            var b = this.enum(g, t[e], r.name, r.opt, !0, a.enumAsInteger);
            assert(void 0 !== b), d.push(b);
          }
          break;
        case "message":
          var m = r.T();
          for (let e = 0; e < t.length; e++) {
            var I = this.message(m, t[e], r.name, a);
            assert(void 0 !== I), d.push(I);
          }
      }
      (a.emitDefaultValues || 0 < d.length || a.emitDefaultValues) && (e = d);
    } else
      switch (r.kind) {
        case "scalar":
          e = this.scalar(r.T, t, r.name, r.opt, a.emitDefaultValues);
          break;
        case "enum":
          e = this.enum(
            r.T(),
            t,
            r.name,
            r.opt,
            a.emitDefaultValues,
            a.enumAsInteger
          );
          break;
        case "message":
          e = this.message(r.T(), t, r.name, a);
      }
    return e;
  }
  enum(e, r, t, a, n, s) {
    if ("google.protobuf.NullValue" == e[0]) return null;
    if (void 0 === r) assert(a);
    else if (0 !== r || n || a)
      return (
        assert("number" == typeof r),
        assert(Number.isInteger(r)),
        s || !e[1].hasOwnProperty(r) ? r : e[2] ? e[2] + e[1][r] : e[1][r]
      );
  }
  message(e, r, t, a) {
    return void 0 === r
      ? a.emitDefaultValues
        ? null
        : void 0
      : e.internalJsonWrite(r, a);
  }
  scalar(e, r, t, a, n) {
    if (void 0 === r) assert(a);
    else {
      var s = n || a;
      switch (e) {
        case ScalarType.INT32:
        case ScalarType.SFIXED32:
        case ScalarType.SINT32:
          return 0 === r ? (s ? 0 : void 0) : (assertInt32(r), r);
        case ScalarType.FIXED32:
        case ScalarType.UINT32:
          return 0 === r ? (s ? 0 : void 0) : (assertUInt32(r), r);
        case ScalarType.FLOAT:
          assertFloat32(r);
        case ScalarType.DOUBLE:
          return 0 === r
            ? s
              ? 0
              : void 0
            : (assert("number" == typeof r),
              Number.isNaN(r)
                ? "NaN"
                : r === Number.POSITIVE_INFINITY
                ? "Infinity"
                : r === Number.NEGATIVE_INFINITY
                ? "-Infinity"
                : r);
        case ScalarType.STRING:
          return "" === r
            ? s
              ? ""
              : void 0
            : (assert("string" == typeof r), r);
        case ScalarType.BOOL:
          return !1 === r ? !s && void 0 : (assert("boolean" == typeof r), r);
        case ScalarType.UINT64:
        case ScalarType.FIXED64:
          assert(
            "number" == typeof r || "string" == typeof r || "bigint" == typeof r
          );
          var i = PbULong.from(r);
          return i.isZero() && !s ? void 0 : i.toString();
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
          assert(
            "number" == typeof r || "string" == typeof r || "bigint" == typeof r
          );
          i = PbLong.from(r);
          return i.isZero() && !s ? void 0 : i.toString();
        case ScalarType.BYTES:
          return (assert(r instanceof Uint8Array), r.byteLength)
            ? base64encode(r)
            : s
            ? ""
            : void 0;
      }
    }
  }
}
function reflectionScalarDefault(e, r = LongType.STRING) {
  switch (e) {
    case ScalarType.BOOL:
      return !1;
    case ScalarType.UINT64:
    case ScalarType.FIXED64:
      return reflectionLongConvert(PbULong.ZERO, r);
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      return reflectionLongConvert(PbLong.ZERO, r);
    case ScalarType.DOUBLE:
    case ScalarType.FLOAT:
      return 0;
    case ScalarType.BYTES:
      return new Uint8Array(0);
    case ScalarType.STRING:
      return "";
    default:
      return 0;
  }
}
class ReflectionBinaryReader {
  constructor(e) {
    this.info = e;
  }
  prepare() {
    var e;
    this.fieldNoToField ||
      ((e = this.info.fields ?? []),
      (this.fieldNoToField = new Map(e.map((e) => [e.no, e]))));
  }
  read(a, n, s, e) {
    this.prepare();
    for (var r = void 0 === e ? a.len : a.pos + e; a.pos < r; ) {
      var [t, i] = a.tag(),
        o = this.fieldNoToField.get(t);
      if (o) {
        let e = n,
          r = o.repeat,
          t = o.localName;
        switch (
          (o.oneof &&
            (e = e[o.oneof]).oneofKind !== t &&
            (e = n[o.oneof] = { oneofKind: t }),
          o.kind)
        ) {
          case "scalar":
          case "enum":
            var l = "enum" == o.kind ? ScalarType.INT32 : o.T,
              c = "scalar" == o.kind ? o.L : void 0;
            if (r) {
              var f = e[t];
              if (
                i == WireType.LengthDelimited &&
                l != ScalarType.STRING &&
                l != ScalarType.BYTES
              )
                for (var u = a.uint32() + a.pos; a.pos < u; )
                  f.push(this.scalar(a, l, c));
              else f.push(this.scalar(a, l, c));
            } else e[t] = this.scalar(a, l, c);
            break;
          case "message":
            r
              ? ((h = e[t]),
                (p = o.T().internalBinaryRead(a, a.uint32(), s)),
                h.push(p))
              : (e[t] = o.T().internalBinaryRead(a, a.uint32(), s, e[t]));
            break;
          case "map":
            var [h, p] = this.mapEntry(o, a, s);
            e[t][h] = p;
        }
      } else {
        var T = s.readUnknownField;
        if ("throw" == T)
          throw new Error(
            `Unknown field ${t} (wire type ${i}) for ` + this.info.typeName
          );
        var d = a.skip(i);
        !1 !== T &&
          (!0 === T ? UnknownFieldHandler.onRead : T)(
            this.info.typeName,
            n,
            t,
            i,
            d
          );
      }
    }
  }
  mapEntry(e, r, t) {
    var a = r.uint32(),
      n = r.pos + a;
    let s = void 0,
      i = void 0;
    for (; r.pos < n; ) {
      var [o, l] = r.tag();
      switch (o) {
        case 1:
          s =
            e.K == ScalarType.BOOL
              ? r.bool().toString()
              : this.scalar(r, e.K, LongType.STRING);
          break;
        case 2:
          switch (e.V.kind) {
            case "scalar":
              i = this.scalar(r, e.V.T, e.V.L);
              break;
            case "enum":
              i = r.int32();
              break;
            case "message":
              i = e.V.T().internalBinaryRead(r, r.uint32(), t);
          }
          break;
        default:
          throw new Error(
            `Unknown field ${o} (wire type ${l}) in map entry for ${this.info.typeName}#` +
              e.name
          );
      }
    }
    if (
      (void 0 === s &&
        ((a = reflectionScalarDefault(e.K)),
        (s = e.K == ScalarType.BOOL ? a.toString() : a)),
      void 0 === i)
    )
      switch (e.V.kind) {
        case "scalar":
          i = reflectionScalarDefault(e.V.T, e.V.L);
          break;
        case "enum":
          i = 0;
          break;
        case "message":
          i = e.V.T().create();
      }
    return [s, i];
  }
  scalar(e, r, t) {
    switch (r) {
      case ScalarType.INT32:
        return e.int32();
      case ScalarType.STRING:
        return e.string();
      case ScalarType.BOOL:
        return e.bool();
      case ScalarType.DOUBLE:
        return e.double();
      case ScalarType.FLOAT:
        return e.float();
      case ScalarType.INT64:
        return reflectionLongConvert(e.int64(), t);
      case ScalarType.UINT64:
        return reflectionLongConvert(e.uint64(), t);
      case ScalarType.FIXED64:
        return reflectionLongConvert(e.fixed64(), t);
      case ScalarType.FIXED32:
        return e.fixed32();
      case ScalarType.BYTES:
        return e.bytes();
      case ScalarType.UINT32:
        return e.uint32();
      case ScalarType.SFIXED32:
        return e.sfixed32();
      case ScalarType.SFIXED64:
        return reflectionLongConvert(e.sfixed64(), t);
      case ScalarType.SINT32:
        return e.sint32();
      case ScalarType.SINT64:
        return reflectionLongConvert(e.sint64(), t);
    }
  }
}
class ReflectionBinaryWriter {
  constructor(e) {
    this.info = e;
  }
  prepare() {
    var e;
    this.fields ||
      ((e = this.info.fields ? this.info.fields.concat() : []),
      (this.fields = e.sort((e, r) => e.no - r.no)));
  }
  write(n, s, i) {
    this.prepare();
    for (const u of this.fields) {
      let e,
        r,
        t = u.repeat,
        a = u.localName;
      if (u.oneof) {
        var o = n[u.oneof];
        if (o.oneofKind !== a) continue;
        (e = o[a]), (r = !0);
      } else (e = n[a]), (r = !1);
      switch (u.kind) {
        case "scalar":
        case "enum":
          var l = "enum" == u.kind ? ScalarType.INT32 : u.T;
          if (t)
            if ((assert(Array.isArray(e)), t == RepeatType.PACKED))
              this.packed(s, l, u.no, e);
            else for (const h of e) this.scalar(s, l, u.no, h, !0);
          else
            void 0 === e
              ? assert(u.opt)
              : this.scalar(s, l, u.no, e, r || u.opt);
          break;
        case "message":
          if (t) {
            assert(Array.isArray(e));
            for (const p of e) this.message(s, i, u.T(), u.no, p);
          } else this.message(s, i, u.T(), u.no, e);
          break;
        case "map":
          assert("object" == typeof e && null !== e);
          for (var [c, f] of Object.entries(e)) this.mapEntry(s, i, u, c, f);
      }
    }
    var e = i.writeUnknownFields;
    !1 !== e &&
      (!0 === e ? UnknownFieldHandler.onWrite : e)(this.info.typeName, n, s);
  }
  mapEntry(e, r, t, a, n) {
    e.tag(t.no, WireType.LengthDelimited), e.fork();
    let s = a;
    switch (t.K) {
      case ScalarType.INT32:
      case ScalarType.FIXED32:
      case ScalarType.UINT32:
      case ScalarType.SFIXED32:
      case ScalarType.SINT32:
        s = Number.parseInt(a);
        break;
      case ScalarType.BOOL:
        assert("true" == a || "false" == a), (s = "true" == a);
    }
    switch ((this.scalar(e, t.K, 1, s, !0), t.V.kind)) {
      case "scalar":
        this.scalar(e, t.V.T, 2, n, !0);
        break;
      case "enum":
        this.scalar(e, ScalarType.INT32, 2, n, !0);
        break;
      case "message":
        this.message(e, r, t.V.T(), 2, n);
    }
    e.join();
  }
  message(e, r, t, a, n) {
    void 0 !== n &&
      (t.internalBinaryWrite(n, e.tag(a, WireType.LengthDelimited).fork(), r),
      e.join());
  }
  scalar(e, r, t, a, n) {
    var [r, s, i] = this.scalarInfo(r, a);
    (i && !n) || (e.tag(t, r), e[s](a));
  }
  packed(r, e, t, a) {
    if (a.length) {
      assert(e !== ScalarType.BYTES && e !== ScalarType.STRING),
        r.tag(t, WireType.LengthDelimited),
        r.fork();
      var [, n] = this.scalarInfo(e);
      for (let e = 0; e < a.length; e++) r[n](a[e]);
      r.join();
    }
  }
  scalarInfo(e, r) {
    let t = WireType.Varint,
      a;
    var n = void 0 === r;
    let s = 0 === r;
    switch (e) {
      case ScalarType.INT32:
        a = "int32";
        break;
      case ScalarType.STRING:
        (s = n || !r.length), (t = WireType.LengthDelimited), (a = "string");
        break;
      case ScalarType.BOOL:
        (s = !1 === r), (a = "bool");
        break;
      case ScalarType.UINT32:
        a = "uint32";
        break;
      case ScalarType.DOUBLE:
        (t = WireType.Bit64), (a = "double");
        break;
      case ScalarType.FLOAT:
        (t = WireType.Bit32), (a = "float");
        break;
      case ScalarType.INT64:
        (s = n || PbLong.from(r).isZero()), (a = "int64");
        break;
      case ScalarType.UINT64:
        (s = n || PbULong.from(r).isZero()), (a = "uint64");
        break;
      case ScalarType.FIXED64:
        (s = n || PbULong.from(r).isZero()),
          (t = WireType.Bit64),
          (a = "fixed64");
        break;
      case ScalarType.BYTES:
        (s = n || !r.byteLength), (t = WireType.LengthDelimited), (a = "bytes");
        break;
      case ScalarType.FIXED32:
        (t = WireType.Bit32), (a = "fixed32");
        break;
      case ScalarType.SFIXED32:
        (t = WireType.Bit32), (a = "sfixed32");
        break;
      case ScalarType.SFIXED64:
        (s = n || PbLong.from(r).isZero()),
          (t = WireType.Bit64),
          (a = "sfixed64");
        break;
      case ScalarType.SINT32:
        a = "sint32";
        break;
      case ScalarType.SINT64:
        (s = n || PbLong.from(r).isZero()), (a = "sint64");
    }
    return [t, a, n || s];
  }
}
function reflectionCreate(e) {
  var r,
    t = {};
  Object.defineProperty(t, MESSAGE_TYPE, { enumerable: !1, value: e });
  for (r of e.fields) {
    var a = r.localName;
    if (!r.opt)
      if (r.oneof) t[r.oneof] = { oneofKind: void 0 };
      else if (r.repeat) t[a] = [];
      else
        switch (r.kind) {
          case "scalar":
            t[a] = reflectionScalarDefault(r.T, r.L);
            break;
          case "enum":
            t[a] = 0;
            break;
          case "map":
            t[a] = {};
        }
  }
  return t;
}
function reflectionMergePartial(e, r, t) {
  let a,
    n = t,
    s;
  for (var i of e.fields) {
    var o = i.localName;
    if (i.oneof) {
      var l = n[i.oneof];
      if (null == (null == l ? void 0 : l.oneofKind)) continue;
      if (((a = l[o]), ((s = r[i.oneof]).oneofKind = l.oneofKind), null == a)) {
        delete s[o];
        continue;
      }
    } else if (((a = n[o]), (s = r), null == a)) continue;
    switch ((i.repeat && (s[o].length = a.length), i.kind)) {
      case "scalar":
      case "enum":
        if (i.repeat) for (let e = 0; e < a.length; e++) s[o][e] = a[e];
        else s[o] = a;
        break;
      case "message":
        var c = i.T();
        if (i.repeat)
          for (let e = 0; e < a.length; e++) s[o][e] = c.create(a[e]);
        else void 0 === s[o] ? (s[o] = c.create(a)) : c.mergePartial(s[o], a);
        break;
      case "map":
        switch (i.V.kind) {
          case "scalar":
          case "enum":
            Object.assign(s[o], a);
            break;
          case "message":
            var f,
              u = i.V.T();
            for (f of Object.keys(a)) s[o][f] = u.create(a[f]);
        }
    }
  }
}
const defaultsWrite$1 = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0,
  },
  defaultsRead$1 = { ignoreUnknownFields: !1 };
function jsonReadOptions(e) {
  return e ? { ...defaultsRead$1, ...e } : defaultsRead$1;
}
function jsonWriteOptions(e) {
  return e ? { ...defaultsWrite$1, ...e } : defaultsWrite$1;
}
function reflectionEquals(e, r, t) {
  if (r !== t) {
    if (!r || !t) return !1;
    for (var a of e.fields) {
      var n = a.localName,
        s = (a.oneof ? r[a.oneof] : r)[n],
        i = (a.oneof ? t[a.oneof] : t)[n];
      switch (a.kind) {
        case "enum":
        case "scalar":
          var o = "enum" == a.kind ? ScalarType.INT32 : a.T;
          if ((a.repeat ? repeatedPrimitiveEq : primitiveEq)(o, s, i)) break;
          return !1;
        case "map":
          if (
            "message" == a.V.kind
              ? repeatedMsgEq(a.V.T(), objectValues(s), objectValues(i))
              : repeatedPrimitiveEq(
                  "enum" == a.V.kind ? ScalarType.INT32 : a.V.T,
                  objectValues(s),
                  objectValues(i)
                )
          )
            break;
          return !1;
        case "message":
          o = a.T();
          if (a.repeat ? repeatedMsgEq(o, s, i) : o.equals(s, i)) break;
          return !1;
      }
    }
  }
  return !0;
}
const objectValues = Object.values;
function primitiveEq(e, r, t) {
  if (r !== t) {
    if (e !== ScalarType.BYTES) return !1;
    var a = r,
      n = t;
    if (a.length !== n.length) return !1;
    for (let e = 0; e < a.length; e++) if (a[e] != n[e]) return !1;
  }
  return !0;
}
function repeatedPrimitiveEq(r, t, a) {
  if (t.length !== a.length) return !1;
  for (let e = 0; e < t.length; e++) if (!primitiveEq(r, t[e], a[e])) return !1;
  return !0;
}
function repeatedMsgEq(r, t, a) {
  if (t.length !== a.length) return !1;
  for (let e = 0; e < t.length; e++) if (!r.equals(t[e], a[e])) return !1;
  return !0;
}
const defaultsWrite = {
  writeUnknownFields: !0,
  writerFactory: () => new BinaryWriter(),
};
function binaryWriteOptions(e) {
  return e ? { ...defaultsWrite, ...e } : defaultsWrite;
}
class BinaryWriter {
  constructor(e) {
    (this.stack = []),
      (this.textEncoder = e ?? new TextEncoder()),
      (this.chunks = []),
      (this.buf = []);
  }
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let r = 0;
    for (let e = 0; e < this.chunks.length; e++) r += this.chunks[e].length;
    var t = new Uint8Array(r);
    let a = 0;
    for (let e = 0; e < this.chunks.length; e++)
      t.set(this.chunks[e], a), (a += this.chunks[e].length);
    return (this.chunks = []), t;
  }
  fork() {
    return (
      this.stack.push({ chunks: this.chunks, buf: this.buf }),
      (this.chunks = []),
      (this.buf = []),
      this
    );
  }
  join() {
    var e = this.finish(),
      r = this.stack.pop();
    if (r)
      return (
        (this.chunks = r.chunks),
        (this.buf = r.buf),
        this.uint32(e.byteLength),
        this.raw(e)
      );
    throw new Error("invalid state, fork stack empty");
  }
  tag(e, r) {
    return this.uint32(((e << 3) | r) >>> 0);
  }
  raw(e) {
    return (
      this.buf.length &&
        (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
      this.chunks.push(e),
      this
    );
  }
  uint32(e) {
    for (assertUInt32(e); 127 < e; ) this.buf.push((127 & e) | 128), (e >>>= 7);
    return this.buf.push(e), this;
  }
  int32(e) {
    return assertInt32(e), varint32write(e, this.buf), this;
  }
  bool(e) {
    return this.buf.push(e ? 1 : 0), this;
  }
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e);
  }
  string(e) {
    e = this.textEncoder.encode(e);
    return this.uint32(e.byteLength), this.raw(e);
  }
  float(e) {
    assertFloat32(e);
    var r = new Uint8Array(4);
    return new DataView(r.buffer).setFloat32(0, e, !0), this.raw(r);
  }
  double(e) {
    var r = new Uint8Array(8);
    return new DataView(r.buffer).setFloat64(0, e, !0), this.raw(r);
  }
  fixed32(e) {
    assertUInt32(e);
    var r = new Uint8Array(4);
    return new DataView(r.buffer).setUint32(0, e, !0), this.raw(r);
  }
  sfixed32(e) {
    assertInt32(e);
    var r = new Uint8Array(4);
    return new DataView(r.buffer).setInt32(0, e, !0), this.raw(r);
  }
  sint32(e) {
    return (
      assertInt32(e),
      varint32write((e = ((e << 1) ^ (e >> 31)) >>> 0), this.buf),
      this
    );
  }
  sfixed64(e) {
    var r = new Uint8Array(8),
      t = new DataView(r.buffer),
      e = PbLong.from(e);
    return t.setInt32(0, e.lo, !0), t.setInt32(4, e.hi, !0), this.raw(r);
  }
  fixed64(e) {
    var r = new Uint8Array(8),
      t = new DataView(r.buffer),
      e = PbULong.from(e);
    return t.setInt32(0, e.lo, !0), t.setInt32(4, e.hi, !0), this.raw(r);
  }
  int64(e) {
    e = PbLong.from(e);
    return varint64write(e.lo, e.hi, this.buf), this;
  }
  sint64(e) {
    var e = PbLong.from(e),
      r = e.hi >> 31;
    return (
      varint64write(
        (e.lo << 1) ^ r,
        ((e.hi << 1) | (e.lo >>> 31)) ^ r,
        this.buf
      ),
      this
    );
  }
  uint64(e) {
    e = PbULong.from(e);
    return varint64write(e.lo, e.hi, this.buf), this;
  }
}
const defaultsRead = {
  readUnknownField: !0,
  readerFactory: (e) => new BinaryReader(e),
};
function binaryReadOptions(e) {
  return e ? { ...defaultsRead, ...e } : defaultsRead;
}
class BinaryReader {
  constructor(e, r) {
    (this.varint64 = varint64read),
      (this.uint32 = varint32read),
      (this.buf = e),
      (this.len = e.length),
      (this.pos = 0),
      (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
      (this.textDecoder =
        r ?? new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }));
  }
  tag() {
    var e = this.uint32(),
      r = e >>> 3,
      e = 7 & e;
    if (r <= 0 || e < 0 || 5 < e)
      throw new Error("illegal tag: field no " + r + " wire type " + e);
    return [r, e];
  }
  skip(e) {
    var r,
      t = this.pos;
    switch (e) {
      case WireType.Varint:
        for (; 128 & this.buf[this.pos++]; );
        break;
      case WireType.Bit64:
        this.pos += 4;
      case WireType.Bit32:
        this.pos += 4;
        break;
      case WireType.LengthDelimited:
        var a = this.uint32();
        this.pos += a;
        break;
      case WireType.StartGroup:
        for (; (r = this.tag()[1]) !== WireType.EndGroup; ) this.skip(r);
        break;
      default:
        throw new Error("cant skip wire type " + e);
    }
    return this.assertBounds(), this.buf.subarray(t, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) throw new RangeError("premature EOF");
  }
  int32() {
    return 0 | this.uint32();
  }
  sint32() {
    var e = this.uint32();
    return (e >>> 1) ^ -(1 & e);
  }
  int64() {
    return new PbLong(...this.varint64());
  }
  uint64() {
    return new PbULong(...this.varint64());
  }
  sint64() {
    var [e, r] = this.varint64(),
      t = -(1 & e),
      e = ((e >>> 1) | ((1 & r) << 31)) ^ t,
      r = (r >>> 1) ^ t;
    return new PbLong(e, r);
  }
  bool() {
    var [e, r] = this.varint64();
    return 0 !== e || 0 !== r;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, !0);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, !0);
  }
  fixed64() {
    return new PbULong(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return new PbLong(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, !0);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, !0);
  }
  bytes() {
    var e = this.uint32(),
      r = this.pos;
    return (this.pos += e), this.assertBounds(), this.buf.subarray(r, r + e);
  }
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
class MessageType {
  constructor(e, r, t) {
    (this.defaultCheckDepth = 16),
      (this.typeName = e),
      (this.fields = r.map(normalizeFieldInfo)),
      (this.options = t ?? {}),
      (this.refTypeCheck = new ReflectionTypeCheck(this)),
      (this.refJsonReader = new ReflectionJsonReader(this)),
      (this.refJsonWriter = new ReflectionJsonWriter(this)),
      (this.refBinReader = new ReflectionBinaryReader(this)),
      (this.refBinWriter = new ReflectionBinaryWriter(this));
  }
  create(e) {
    var r = reflectionCreate(this);
    return void 0 !== e && reflectionMergePartial(this, r, e), r;
  }
  clone(e) {
    var r = this.create();
    return reflectionMergePartial(this, r, e), r;
  }
  equals(e, r) {
    return reflectionEquals(this, e, r);
  }
  is(e, r = this.defaultCheckDepth) {
    return this.refTypeCheck.is(e, r, !1);
  }
  isAssignable(e, r = this.defaultCheckDepth) {
    return this.refTypeCheck.is(e, r, !0);
  }
  mergePartial(e, r) {
    reflectionMergePartial(this, e, r);
  }
  fromBinary(e, r) {
    r = binaryReadOptions(r);
    return this.internalBinaryRead(r.readerFactory(e), e.byteLength, r);
  }
  fromJson(e, r) {
    return this.internalJsonRead(e, jsonReadOptions(r));
  }
  fromJsonString(e, r) {
    e = JSON.parse(e);
    return this.fromJson(e, r);
  }
  toJson(e, r) {
    return this.internalJsonWrite(e, jsonWriteOptions(r));
  }
  toJsonString(e, r) {
    e = this.toJson(e, r);
    return JSON.stringify(e, null, (null == r ? void 0 : r.prettySpaces) ?? 0);
  }
  toBinary(e, r) {
    r = binaryWriteOptions(r);
    return this.internalBinaryWrite(e, r.writerFactory(), r).finish();
  }
  internalJsonRead(e, r, t) {
    if (null === e || "object" != typeof e || Array.isArray(e))
      throw new Error(
        `Unable to parse message ${this.typeName} from JSON ${typeofJsonValue(
          e
        )}.`
      );
    return (t = t ?? this.create()), this.refJsonReader.read(e, t, r), t;
  }
  internalJsonWrite(e, r) {
    return this.refJsonWriter.write(e, r);
  }
  internalBinaryWrite(e, r, t) {
    return this.refBinWriter.write(e, r, t), r;
  }
  internalBinaryRead(e, r, t, a) {
    a = a ?? this.create();
    return this.refBinReader.read(e, a, t, r), a;
  }
}

class nextRes$Type extends MessageType {
  constructor() {
    super("nextRes", [
      { no: 7, name: "a1f7", kind: "message", jsonName: "a1f7", T: () => a1f7 },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (7 === o) a.a1F7 = a1f7.internalBinaryRead(e, e.uint32(), r, a.a1F7);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.a1F7 &&
      a1f7
        .internalBinaryWrite(
          e.a1F7,
          n.tag(7, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const nextRes = new nextRes$Type();
class a1f7$Type extends MessageType {
  constructor() {
    super("a1f7", [
      {
        no: 51779735,
        name: "a2f51779735",
        kind: "message",
        jsonName: "a2f51779735",
        T: () => a2f51779735,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (51779735 === o)
        a.a2F51779735 = a2f51779735.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.a2F51779735
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.a2F51779735 &&
      a2f51779735
        .internalBinaryWrite(
          e.a2F51779735,
          n.tag(51779735, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const a1f7 = new a1f7$Type();
class a2f51779735$Type extends MessageType {
  constructor() {
    super("a2f51779735", [
      { no: 1, name: "a3f1", kind: "message", jsonName: "a3f1", T: () => a3f1 },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o) a.a3F1 = a3f1.internalBinaryRead(e, e.uint32(), r, a.a3F1);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.a3F1 &&
      a3f1
        .internalBinaryWrite(
          e.a3F1,
          n.tag(1, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const a2f51779735 = new a2f51779735$Type();
class a3f1$Type extends MessageType {
  constructor() {
    super("a3f1", [
      {
        no: 49399797,
        name: "n2f49399797",
        kind: "message",
        jsonName: "n2f49399797",
        T: () => n2f49399797,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (49399797 === o)
        a.n2F49399797 = n2f49399797.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.n2F49399797
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n2F49399797 &&
      n2f49399797
        .internalBinaryWrite(
          e.n2F49399797,
          n.tag(49399797, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const a3f1 = new a3f1$Type();
class a12f8$Type extends MessageType {
  constructor() {
    super("a12f8", [
      {
        no: 4,
        name: "a13f4",
        kind: "message",
        jsonName: "a13f4",
        T: () => a13f4,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (4 === o)
        a.a13F4 = a13f4.internalBinaryRead(e, e.uint32(), r, a.a13F4);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.a13F4 &&
      a13f4
        .internalBinaryWrite(
          e.a13F4,
          n.tag(4, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const a12f8 = new a12f8$Type();
class a13f4$Type extends MessageType {
  constructor() {
    super("a13f4", [{ no: 2, name: "s", kind: "scalar", T: 9 }]);
  }
  create(e) {
    var n = { s: "" };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (2 === o) a.s = e.string();
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    "" !== e.s && n.tag(2, WireType.LengthDelimited).string(e.s);
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const a13f4 = new a13f4$Type();
class browseRes$Type extends MessageType {
  constructor() {
    super("browseRes", [
      { no: 9, name: "n1f9", kind: "message", jsonName: "n1f9", T: () => n1f9 },
      {
        no: 10,
        name: "n1f10",
        kind: "message",
        jsonName: "n1f10",
        T: () => n1f10,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      switch (o) {
        case 9:
          a.n1F9 = n1f9.internalBinaryRead(e, e.uint32(), r, a.n1F9);
          break;
        case 10:
          a.n1F10 = n1f10.internalBinaryRead(e, e.uint32(), r, a.n1F10);
          break;
        default:
          var l = r.readUnknownField;
          if ("throw" === l)
            throw new globalThis.Error(
              `Unknown field ${o} (wire type ${s}) for ` + this.typeName
            );
          var f = e.skip(s);
          !1 !== l &&
            (!0 === l ? UnknownFieldHandler.onRead : l)(
              this.typeName,
              a,
              o,
              s,
              f
            );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n1F9 &&
      n1f9
        .internalBinaryWrite(
          e.n1F9,
          n.tag(9, WireType.LengthDelimited).fork(),
          r
        )
        .join(),
      e.n1F10 &&
        n1f10
          .internalBinaryWrite(
            e.n1F10,
            n.tag(10, WireType.LengthDelimited).fork(),
            r
          )
          .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const browseRes = new browseRes$Type();
class n1f9$Type extends MessageType {
  constructor() {
    super("n1f9", [
      {
        no: 58173949,
        name: "m2f58173949",
        kind: "message",
        jsonName: "m2f58173949",
        T: () => m2f58173949,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (58173949 === o)
        a.m2F58173949 = m2f58173949.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.m2F58173949
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.m2F58173949 &&
      m2f58173949
        .internalBinaryWrite(
          e.m2F58173949,
          n.tag(58173949, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n1f9 = new n1f9$Type();
class m2f58173949$Type extends MessageType {
  constructor() {
    super("m2f58173949", [
      { no: 1, name: "m3f1", kind: "message", jsonName: "m3f1", T: () => m3f1 },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o) a.m3F1 = m3f1.internalBinaryRead(e, e.uint32(), r, a.m3F1);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.m3F1 &&
      m3f1
        .internalBinaryWrite(
          e.m3F1,
          n.tag(1, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const m2f58173949 = new m2f58173949$Type();
class m3f1$Type extends MessageType {
  constructor() {
    super("m3f1", [
      {
        no: 58174010,
        name: "m4f58174010",
        kind: "message",
        jsonName: "m4f58174010",
        T: () => m4f58174010,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (58174010 === o)
        a.m4F58174010 = m4f58174010.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.m4F58174010
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.m4F58174010 &&
      m4f58174010
        .internalBinaryWrite(
          e.m4F58174010,
          n.tag(58174010, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const m3f1 = new m3f1$Type();
class m4f58174010$Type extends MessageType {
  constructor() {
    super("m4f58174010", [
      {
        no: 4,
        name: "n1f10",
        kind: "message",
        jsonName: "n1f10",
        T: () => n1f10,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (4 === o)
        a.n1F10 = n1f10.internalBinaryRead(e, e.uint32(), r, a.n1F10);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n1F10 &&
      n1f10
        .internalBinaryWrite(
          e.n1F10,
          n.tag(4, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const m4f58174010 = new m4f58174010$Type();
class n1f10$Type extends MessageType {
  constructor() {
    super("n1f10", [
      {
        no: 49399797,
        name: "n2f49399797",
        kind: "message",
        jsonName: "n2f49399797",
        T: () => n2f49399797,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (49399797 === o)
        a.n2F49399797 = n2f49399797.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.n2F49399797
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n2F49399797 &&
      n2f49399797
        .internalBinaryWrite(
          e.n2F49399797,
          n.tag(49399797, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n1f10 = new n1f10$Type();
class n2f49399797$Type extends MessageType {
  constructor() {
    super("n2f49399797", [
      {
        no: 1,
        name: "n3f1",
        kind: "message",
        jsonName: "n3f1",
        repeat: 1,
        T: () => n3f1,
      },
    ]);
  }
  create(e) {
    var n = { n3F1: [] };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o) a.n3F1.push(n3f1.internalBinaryRead(e, e.uint32(), r));
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(n, r, i) {
    for (let e = 0; e < n.n3F1.length; e++)
      n3f1
        .internalBinaryWrite(
          n.n3F1[e],
          r.tag(1, WireType.LengthDelimited).fork(),
          i
        )
        .join();
    var e = i.writeUnknownFields;
    return (
      !1 !== e &&
        (1 == e ? UnknownFieldHandler.onWrite : e)(this.typeName, n, r),
      r
    );
  }
}
const n2f49399797 = new n2f49399797$Type();
class n3f1$Type extends MessageType {
  constructor() {
    super("n3f1", [
      {
        no: 50195462,
        name: "n4f50195462",
        kind: "message",
        jsonName: "n4f50195462",
        T: () => n4f50195462,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (50195462 === o)
        a.n4F50195462 = n4f50195462.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.n4F50195462
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n4F50195462 &&
      n4f50195462
        .internalBinaryWrite(
          e.n4F50195462,
          n.tag(50195462, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n3f1 = new n3f1$Type();
class n4f50195462$Type extends MessageType {
  constructor() {
    super("n4f50195462", [
      {
        no: 1,
        name: "n5f1",
        kind: "message",
        jsonName: "n5f1",
        repeat: 1,
        T: () => n5f1,
      },
    ]);
  }
  create(e) {
    var n = { n5F1: [] };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o) a.n5F1.push(n5f1.internalBinaryRead(e, e.uint32(), r));
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(n, r, i) {
    for (let e = 0; e < n.n5F1.length; e++)
      n5f1
        .internalBinaryWrite(
          n.n5F1[e],
          r.tag(1, WireType.LengthDelimited).fork(),
          i
        )
        .join();
    var e = i.writeUnknownFields;
    return (
      !1 !== e &&
        (1 == e ? UnknownFieldHandler.onWrite : e)(this.typeName, n, r),
      r
    );
  }
}
const n4f50195462 = new n4f50195462$Type();
class n5f1$Type extends MessageType {
  constructor() {
    super("n5f1", [
      {
        no: 153515154,
        name: "n6f153515154",
        kind: "message",
        jsonName: "n6f153515154",
        T: () => n6f153515154,
      },
      {
        no: 166487981,
        name: "n6f166487981",
        kind: "message",
        jsonName: "n6f166487981",
        T: () => n6f166487981,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      switch (o) {
        case 153515154:
          a.n6F153515154 = n6f153515154.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n6F153515154
          );
          break;
        case 166487981:
          a.n6F166487981 = n6f166487981.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n6F166487981
          );
          break;
        default:
          var l = r.readUnknownField;
          if ("throw" === l)
            throw new globalThis.Error(
              `Unknown field ${o} (wire type ${s}) for ` + this.typeName
            );
          var f = e.skip(s);
          !1 !== l &&
            (!0 === l ? UnknownFieldHandler.onRead : l)(
              this.typeName,
              a,
              o,
              s,
              f
            );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n6F153515154 &&
      n6f153515154
        .internalBinaryWrite(
          e.n6F153515154,
          n.tag(153515154, WireType.LengthDelimited).fork(),
          r
        )
        .join(),
      e.n6F166487981 &&
        n6f166487981
          .internalBinaryWrite(
            e.n6F166487981,
            n.tag(166487981, WireType.LengthDelimited).fork(),
            r
          )
          .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n5f1 = new n5f1$Type();
class n6f166487981$Type extends MessageType {
  constructor() {
    super("n6f166487981", [
      { no: 1, name: "n7f1", kind: "message", jsonName: "n7f1", T: () => n7f1 },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o) a.n7F1 = n7f1.internalBinaryRead(e, e.uint32(), r, a.n7F1);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n7F1 &&
      n7f1
        .internalBinaryWrite(
          e.n7F1,
          n.tag(1, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n6f166487981 = new n6f166487981$Type();
class n7f1$Type extends MessageType {
  constructor() {
    super("n7f1", [
      {
        no: 83537025,
        name: "n8f83537025",
        kind: "message",
        jsonName: "n8f83537025",
        T: () => n8f83537025,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (83537025 === o)
        a.n8F83537025 = n8f83537025.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.n8F83537025
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n8F83537025 &&
      n8f83537025
        .internalBinaryWrite(
          e.n8F83537025,
          n.tag(83537025, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n7f1 = new n7f1$Type();
class n8f83537025$Type extends MessageType {
  constructor() {
    super("n8f83537025", [
      {
        no: 3,
        name: "n91f3",
        kind: "message",
        jsonName: "n91f3",
        T: () => n91f3,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (3 === o)
        a.n91F3 = n91f3.internalBinaryRead(e, e.uint32(), r, a.n91F3);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n91F3 &&
      n91f3
        .internalBinaryWrite(
          e.n91F3,
          n.tag(3, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n8f83537025 = new n8f83537025$Type();
class n91f3$Type extends MessageType {
  constructor() {
    super("n91f3", [
      {
        no: 83784541,
        name: "n10f83784541",
        kind: "message",
        jsonName: "n10f83784541",
        T: () => n10f83784541,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (83784541 === o)
        a.n10F83784541 = n10f83784541.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.n10F83784541
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n10F83784541 &&
      n10f83784541
        .internalBinaryWrite(
          e.n10F83784541,
          n.tag(83784541, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n91f3 = new n91f3$Type();
class n10f83784541$Type extends MessageType {
  constructor() {
    super("n10f83784541", [
      {
        no: 1,
        name: "n11f1",
        kind: "message",
        jsonName: "n11f1",
        T: () => n11f1,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o)
        a.n11F1 = n11f1.internalBinaryRead(e, e.uint32(), r, a.n11F1);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n11F1 &&
      n11f1
        .internalBinaryWrite(
          e.n11F1,
          n.tag(1, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n10f83784541 = new n10f83784541$Type();
class n11f1$Type extends MessageType {
  constructor() {
    super("n11f1", [
      {
        no: 1,
        name: "n12f1",
        kind: "message",
        jsonName: "n12f1",
        T: () => n12f1,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o)
        a.n12F1 = n12f1.internalBinaryRead(e, e.uint32(), r, a.n12F1);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n12F1 &&
      n12f1
        .internalBinaryWrite(
          e.n12F1,
          n.tag(1, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n11f1 = new n11f1$Type();
class n12f1$Type extends MessageType {
  constructor() {
    super("n12f1", [{ no: 1, name: "s", kind: "scalar", T: 9 }]);
  }
  create(e) {
    var n = { s: "" };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o) a.s = e.string();
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    "" !== e.s && n.tag(1, WireType.LengthDelimited).string(e.s);
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n12f1 = new n12f1$Type();
class n6f153515154$Type extends MessageType {
  constructor() {
    super("n6f153515154", [
      {
        no: 172660663,
        name: "n7f172660663",
        kind: "message",
        jsonName: "n7f172660663",
        T: () => n7f172660663,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (172660663 === o)
        a.n7F172660663 = n7f172660663.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.n7F172660663
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n7F172660663 &&
      n7f172660663
        .internalBinaryWrite(
          e.n7F172660663,
          n.tag(172660663, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n6f153515154 = new n6f153515154$Type();
class n7f172660663$Type extends MessageType {
  constructor() {
    super("n7f172660663", [
      { no: 1, name: "n8f1", kind: "message", jsonName: "n8f1", T: () => n8f1 },
      { no: 3, name: "n8f3", kind: "message", jsonName: "n8f3", T: () => n8f3 },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      switch (o) {
        case 1:
          a.n8F1 = n8f1.internalBinaryRead(e, e.uint32(), r, a.n8F1);
          break;
        case 3:
          a.n8F3 = n8f3.internalBinaryRead(e, e.uint32(), r, a.n8F3);
          break;
        default:
          var l = r.readUnknownField;
          if ("throw" === l)
            throw new globalThis.Error(
              `Unknown field ${o} (wire type ${s}) for ` + this.typeName
            );
          var f = e.skip(s);
          !1 !== l &&
            (!0 === l ? UnknownFieldHandler.onRead : l)(
              this.typeName,
              a,
              o,
              s,
              f
            );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n8F1 &&
      n8f1
        .internalBinaryWrite(
          e.n8F1,
          n.tag(1, WireType.LengthDelimited).fork(),
          r
        )
        .join(),
      e.n8F3 &&
        n8f3
          .internalBinaryWrite(
            e.n8F3,
            n.tag(3, WireType.LengthDelimited).fork(),
            r
          )
          .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n7f172660663 = new n7f172660663$Type();
class n8f1$Type extends MessageType {
  constructor() {
    super("n8f1", [
      {
        no: 168777401,
        name: "n9f168777401",
        kind: "message",
        jsonName: "n9f168777401",
        T: () => n9f168777401,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (168777401 === o)
        a.n9F168777401 = n9f168777401.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.n9F168777401
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n9F168777401 &&
      n9f168777401
        .internalBinaryWrite(
          e.n9F168777401,
          n.tag(168777401, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n8f1 = new n8f1$Type();
class n8f3$Type extends MessageType {
  constructor() {
    super("n8f3", [
      { no: 3, name: "n9f3", kind: "message", jsonName: "n9f3", T: () => n9f3 },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (3 === o) a.n9F3 = n9f3.internalBinaryRead(e, e.uint32(), r, a.n9F3);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n9F3 &&
      n9f3
        .internalBinaryWrite(
          e.n9F3,
          n.tag(3, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n8f3 = new n8f3$Type();
class n9f3$Type extends MessageType {
  constructor() {
    super("n9f3", [
      {
        no: 3,
        name: "n10f3",
        kind: "message",
        jsonName: "n10f3",
        repeat: 1,
        T: () => n10f3,
      },
    ]);
  }
  create(e) {
    var n = { n10F3: [] };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (3 === o) a.n10F3.push(n10f3.internalBinaryRead(e, e.uint32(), r));
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(n, r, i) {
    for (let e = 0; e < n.n10F3.length; e++)
      n10f3
        .internalBinaryWrite(
          n.n10F3[e],
          r.tag(3, WireType.LengthDelimited).fork(),
          i
        )
        .join();
    var e = i.writeUnknownFields;
    return (
      !1 !== e &&
        (1 == e ? UnknownFieldHandler.onWrite : e)(this.typeName, n, r),
      r
    );
  }
}
const n9f3 = new n9f3$Type();
class n10f3$Type extends MessageType {
  constructor() {
    super("n10f3", [
      {
        no: 3,
        name: "n11f3",
        kind: "message",
        jsonName: "n11f3",
        repeat: 1,
        T: () => n11f3,
      },
    ]);
  }
  create(e) {
    var n = { n11F3: [] };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (3 === o) a.n11F3.push(n11f3.internalBinaryRead(e, e.uint32(), r));
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(n, r, i) {
    for (let e = 0; e < n.n11F3.length; e++)
      n11f3
        .internalBinaryWrite(
          n.n11F3[e],
          r.tag(3, WireType.LengthDelimited).fork(),
          i
        )
        .join();
    var e = i.writeUnknownFields;
    return (
      !1 !== e &&
        (1 == e ? UnknownFieldHandler.onWrite : e)(this.typeName, n, r),
      r
    );
  }
}
const n10f3 = new n10f3$Type();
class n11f3$Type extends MessageType {
  constructor() {
    super("n11f3", [
      {
        no: 3,
        name: "n12f3",
        kind: "message",
        jsonName: "n12f3",
        repeat: 1,
        T: () => n12f3,
      },
    ]);
  }
  create(e) {
    var n = { n12F3: [] };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (3 === o) a.n12F3.push(n12f3.internalBinaryRead(e, e.uint32(), r));
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(n, r, i) {
    for (let e = 0; e < n.n12F3.length; e++)
      n12f3
        .internalBinaryWrite(
          n.n12F3[e],
          r.tag(3, WireType.LengthDelimited).fork(),
          i
        )
        .join();
    var e = i.writeUnknownFields;
    return (
      !1 !== e &&
        (1 == e ? UnknownFieldHandler.onWrite : e)(this.typeName, n, r),
      r
    );
  }
}
const n11f3 = new n11f3$Type();
class n12f3$Type extends MessageType {
  constructor() {
    super("n12f3", [
      {
        no: 1,
        name: "n13f1",
        kind: "message",
        jsonName: "n13f1",
        T: () => n13f1,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o)
        a.n13F1 = n13f1.internalBinaryRead(e, e.uint32(), r, a.n13F1);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n13F1 &&
      n13f1
        .internalBinaryWrite(
          e.n13F1,
          n.tag(1, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n12f3 = new n12f3$Type();
class n13f1$Type extends MessageType {
  constructor() {
    super("n13f1", [
      {
        no: 158796380,
        name: "n14f158796380",
        kind: "message",
        jsonName: "n14f158796380",
        T: () => n14f158796380,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (158796380 === o)
        a.n14F158796380 = n14f158796380.internalBinaryRead(
          e,
          e.uint32(),
          r,
          a.n14F158796380
        );
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n14F158796380 &&
      n14f158796380
        .internalBinaryWrite(
          e.n14F158796380,
          n.tag(158796380, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n13f1 = new n13f1$Type();
class n14f158796380$Type extends MessageType {
  constructor() {
    super("n14f158796380", [
      {
        no: 1,
        name: "n15f1",
        kind: "message",
        jsonName: "n15f1",
        T: () => n15f1,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o)
        a.n15F1 = n15f1.internalBinaryRead(e, e.uint32(), r, a.n15F1);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n15F1 &&
      n15f1
        .internalBinaryWrite(
          e.n15F1,
          n.tag(1, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n14f158796380 = new n14f158796380$Type();
class n15f1$Type extends MessageType {
  constructor() {
    super("n15f1", [{ no: 1, name: "s", kind: "scalar", T: 9 }]);
  }
  create(e) {
    var n = { s: "" };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (1 === o) a.s = e.string();
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    "" !== e.s && n.tag(1, WireType.LengthDelimited).string(e.s);
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n15f1 = new n15f1$Type();
class n9f168777401$Type extends MessageType {
  constructor() {
    super("n9f168777401", [
      {
        no: 5,
        name: "n10f5",
        kind: "message",
        jsonName: "n10f5",
        T: () => n10f5,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (5 === o)
        a.n10F5 = n10f5.internalBinaryRead(e, e.uint32(), r, a.n10F5);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n10F5 &&
      n10f5
        .internalBinaryWrite(
          e.n10F5,
          n.tag(5, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n9f168777401 = new n9f168777401$Type();
class n10f5$Type extends MessageType {
  constructor() {
    super("n10f5", [
      {
        no: 454362329,
        name: "n11f454362329",
        kind: "message",
        jsonName: "n11f454362329",
        T: () => n11f454362329,
      },
      {
        no: 224590612,
        name: "n11f224590612",
        kind: "message",
        jsonName: "n11f224590612",
        T: () => n11f224590612,
      },
      {
        no: 224457493,
        name: "n11f224457493",
        kind: "message",
        jsonName: "n11f224457493",
        T: () => n11f224457493,
      },
      {
        no: 461080918,
        name: "n11f461080918",
        kind: "message",
        jsonName: "n11f461080918",
        T: () => n11f461080918,
      },
      {
        no: 472329933,
        name: "n11f472329933",
        kind: "message",
        jsonName: "n11f472329933",
        T: () => n11f461080918,
      },
      {
        no: 478840678,
        name: "n11f478840678",
        kind: "message",
        jsonName: "n11f478840678",
        T: () => n11f461080918,
      },
      {
        no: 491441836,
        name: "n11f491441836",
        kind: "message",
        jsonName: "n11f491441836",
        T: () => n11f394770629,
      },
      {
        no: 232954548,
        name: "n11f232954548",
        kind: "message",
        jsonName: "n11f232954548",
        T: () => n11f232954548,
      },
      {
        no: 394770629,
        name: "n11f394770629",
        kind: "message",
        jsonName: "n11f394770629",
        T: () => n11f394770629,
      },
      {
        no: 456430508,
        name: "n11f456430508",
        kind: "message",
        jsonName: "n11f456430508",
        T: () => n11f456430508,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      switch (o) {
        case 454362329:
          a.n11F454362329 = n11f454362329.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F454362329
          );
          break;
        case 224590612:
          a.n11F224590612 = n11f224590612.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F224590612
          );
          break;
        case 224457493:
          a.n11F224457493 = n11f224457493.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F224457493
          );
          break;
        case 461080918:
          a.n11F461080918 = n11f461080918.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F461080918
          );
          break;
        case 472329933:
          a.n11F472329933 = n11f461080918.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F472329933
          );
          break;
        case 478840678:
          a.n11F478840678 = n11f461080918.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F478840678
          );
          break;
        case 491441836:
          a.n11F491441836 = n11f394770629.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F491441836
          );
          break;
        case 232954548:
          a.n11F232954548 = n11f232954548.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F232954548
          );
          break;
        case 394770629:
          a.n11F394770629 = n11f394770629.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F394770629
          );
          break;
        case 456430508:
          a.n11F456430508 = n11f456430508.internalBinaryRead(
            e,
            e.uint32(),
            r,
            a.n11F456430508
          );
          break;
        default:
          var l = r.readUnknownField;
          if ("throw" === l)
            throw new globalThis.Error(
              `Unknown field ${o} (wire type ${s}) for ` + this.typeName
            );
          var f = e.skip(s);
          !1 !== l &&
            (!0 === l ? UnknownFieldHandler.onRead : l)(
              this.typeName,
              a,
              o,
              s,
              f
            );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n11F454362329 &&
      n11f454362329
        .internalBinaryWrite(
          e.n11F454362329,
          n.tag(454362329, WireType.LengthDelimited).fork(),
          r
        )
        .join(),
      e.n11F224590612 &&
        n11f224590612
          .internalBinaryWrite(
            e.n11F224590612,
            n.tag(224590612, WireType.LengthDelimited).fork(),
            r
          )
          .join(),
      e.n11F224457493 &&
        n11f224457493
          .internalBinaryWrite(
            e.n11F224457493,
            n.tag(224457493, WireType.LengthDelimited).fork(),
            r
          )
          .join(),
      e.n11F461080918 &&
        n11f461080918
          .internalBinaryWrite(
            e.n11F461080918,
            n.tag(461080918, WireType.LengthDelimited).fork(),
            r
          )
          .join(),
      e.n11F472329933 &&
        n11f461080918
          .internalBinaryWrite(
            e.n11F472329933,
            n.tag(472329933, WireType.LengthDelimited).fork(),
            r
          )
          .join(),
      e.n11F478840678 &&
        n11f461080918
          .internalBinaryWrite(
            e.n11F478840678,
            n.tag(478840678, WireType.LengthDelimited).fork(),
            r
          )
          .join(),
      e.n11F491441836 &&
        n11f394770629
          .internalBinaryWrite(
            e.n11F491441836,
            n.tag(491441836, WireType.LengthDelimited).fork(),
            r
          )
          .join(),
      e.n11F232954548 &&
        n11f232954548
          .internalBinaryWrite(
            e.n11F232954548,
            n.tag(232954548, WireType.LengthDelimited).fork(),
            r
          )
          .join(),
      e.n11F394770629 &&
        n11f394770629
          .internalBinaryWrite(
            e.n11F394770629,
            n.tag(394770629, WireType.LengthDelimited).fork(),
            r
          )
          .join(),
      e.n11F456430508 &&
        n11f456430508
          .internalBinaryWrite(
            e.n11F456430508,
            n.tag(456430508, WireType.LengthDelimited).fork(),
            r
          )
          .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n10f5 = new n10f5$Type();
class n11f456430508$Type extends MessageType {
  constructor() {
    super("n11f456430508", [
      {
        no: 7,
        name: "n12f7",
        kind: "message",
        jsonName: "n12f7",
        T: () => n12f7,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (7 === o)
        a.n12F7 = n12f7.internalBinaryRead(e, e.uint32(), r, a.n12F7);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n12F7 &&
      n12f7
        .internalBinaryWrite(
          e.n12F7,
          n.tag(7, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n11f456430508 = new n11f456430508$Type();
class n11f232954548$Type extends MessageType {
  constructor() {
    super("n11f232954548", [
      {
        no: 19,
        name: "n12f19",
        kind: "message",
        jsonName: "n12f19",
        T: () => n12f19,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (19 === o)
        a.n12F19 = n12f19.internalBinaryRead(e, e.uint32(), r, a.n12F19);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n12F19 &&
      n12f19
        .internalBinaryWrite(
          e.n12F19,
          n.tag(19, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n11f232954548 = new n11f232954548$Type();
class n12f19$Type extends MessageType {
  constructor() {
    super("n12f19", [{ no: 3, name: "s", kind: "scalar", T: 9 }]);
  }
  create(e) {
    var n = { s: "" };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (3 === o) a.s = e.string();
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    "" !== e.s && n.tag(3, WireType.LengthDelimited).string(e.s);
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n12f19 = new n12f19$Type();
class n11f461080918$Type extends MessageType {
  constructor() {
    super("n11f461080918", [
      {
        no: 7,
        name: "n12f7",
        kind: "message",
        jsonName: "n12f7",
        T: () => n12f7,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (7 === o)
        a.n12F7 = n12f7.internalBinaryRead(e, e.uint32(), r, a.n12F7);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n12F7 &&
      n12f7
        .internalBinaryWrite(
          e.n12F7,
          n.tag(7, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n11f461080918 = new n11f461080918$Type();
class n12f7$Type extends MessageType {
  constructor() {
    super("n12f7", [
      {
        no: 4,
        name: "n13f4",
        kind: "message",
        jsonName: "n13f4",
        T: () => n13f4,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (4 === o)
        a.n13F4 = n13f4.internalBinaryRead(e, e.uint32(), r, a.n13F4);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n13F4 &&
      n13f4
        .internalBinaryWrite(
          e.n13F4,
          n.tag(4, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n12f7 = new n12f7$Type();
class n11f394770629$Type extends MessageType {
  constructor() {
    super("n11f394770629", [
      {
        no: 8,
        name: "a12f8",
        kind: "message",
        jsonName: "a12f8",
        T: () => a12f8,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (8 === o)
        a.a12F8 = a12f8.internalBinaryRead(e, e.uint32(), r, a.a12F8);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.a12F8 &&
      a12f8
        .internalBinaryWrite(
          e.a12F8,
          n.tag(8, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n11f394770629 = new n11f394770629$Type();
class n11f224457493$Type extends MessageType {
  constructor() {
    super("n11f224457493", [
      {
        no: 2,
        name: "n12ff2",
        kind: "message",
        jsonName: "n12ff2",
        T: () => n12ff2,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (2 === o)
        a.n12Ff2 = n12ff2.internalBinaryRead(e, e.uint32(), r, a.n12Ff2);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n12Ff2 &&
      n12ff2
        .internalBinaryWrite(
          e.n12Ff2,
          n.tag(2, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n11f224457493 = new n11f224457493$Type();
class n12ff2$Type extends MessageType {
  constructor() {
    super("n12ff2", [{ no: 3, name: "s", kind: "scalar", T: 9 }]);
  }
  create(e) {
    var n = { s: "" };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (3 === o) a.s = e.string();
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    "" !== e.s && n.tag(3, WireType.LengthDelimited).string(e.s);
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n12ff2 = new n12ff2$Type();
class n11f454362329$Type extends MessageType {
  constructor() {
    super("n11f454362329", [
      {
        no: 8,
        name: "n12f8",
        kind: "message",
        jsonName: "n12f8",
        T: () => n12f8,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (8 === o)
        a.n12F8 = n12f8.internalBinaryRead(e, e.uint32(), r, a.n12F8);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n12F8 &&
      n12f8
        .internalBinaryWrite(
          e.n12F8,
          n.tag(8, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n11f454362329 = new n11f454362329$Type();
class n11f224590612$Type extends MessageType {
  constructor() {
    super("n11f224590612", [
      {
        no: 2,
        name: "n12f2",
        kind: "message",
        jsonName: "n12f2",
        T: () => n12f2,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (2 === o)
        a.n12F2 = n12f2.internalBinaryRead(e, e.uint32(), r, a.n12F2);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n12F2 &&
      n12f2
        .internalBinaryWrite(
          e.n12F2,
          n.tag(2, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n11f224590612 = new n11f224590612$Type();
class n12f2$Type extends MessageType {
  constructor() {
    super("n12f2", [
      { no: 3, name: "s3", kind: "scalar", T: 9 },
      { no: 9, name: "s9", kind: "scalar", T: 9 },
    ]);
  }
  create(e) {
    var n = { s3: "", s9: "" };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      switch (o) {
        case 3:
          a.s3 = e.string();
          break;
        case 9:
          a.s9 = e.string();
          break;
        default:
          var l = r.readUnknownField;
          if ("throw" === l)
            throw new globalThis.Error(
              `Unknown field ${o} (wire type ${s}) for ` + this.typeName
            );
          var f = e.skip(s);
          !1 !== l &&
            (!0 === l ? UnknownFieldHandler.onRead : l)(
              this.typeName,
              a,
              o,
              s,
              f
            );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    "" !== e.s3 && n.tag(3, WireType.LengthDelimited).string(e.s3),
      "" !== e.s9 && n.tag(9, WireType.LengthDelimited).string(e.s9);
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n12f2 = new n12f2$Type();
class n12f8$Type extends MessageType {
  constructor() {
    super("n12f8", [
      {
        no: 4,
        name: "n13f4",
        kind: "message",
        jsonName: "n13f4",
        T: () => n13f4,
      },
    ]);
  }
  create(e) {
    var n = {};
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (4 === o)
        a.n13F4 = n13f4.internalBinaryRead(e, e.uint32(), r, a.n13F4);
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    e.n13F4 &&
      n13f4
        .internalBinaryWrite(
          e.n13F4,
          n.tag(4, WireType.LengthDelimited).fork(),
          r
        )
        .join();
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n12f8 = new n12f8$Type();
class n13f4$Type extends MessageType {
  constructor() {
    super("n13f4", [{ no: 2, name: "s", kind: "scalar", T: 9 }]);
  }
  create(e) {
    var n = { s: "" };
    return (
      globalThis.Object.defineProperty(n, MESSAGE_TYPE, {
        enumerable: !1,
        value: this,
      }),
      void 0 !== e && reflectionMergePartial(this, n, e),
      n
    );
  }
  internalBinaryRead(e, n, r, i) {
    for (var a = null != i ? i : this.create(), t = e.pos + n; e.pos < t; ) {
      var [o, s] = e.tag();
      if (2 === o) a.s = e.string();
      else {
        var l = r.readUnknownField;
        if ("throw" === l)
          throw new globalThis.Error(
            `Unknown field ${o} (wire type ${s}) for ` + this.typeName
          );
        var f = e.skip(s);
        !1 !== l &&
          (!0 === l ? UnknownFieldHandler.onRead : l)(
            this.typeName,
            a,
            o,
            s,
            f
          );
      }
    }
    return a;
  }
  internalBinaryWrite(e, n, r) {
    "" !== e.s && n.tag(2, WireType.LengthDelimited).string(e.s);
    r = r.writeUnknownFields;
    return (
      !1 !== r &&
        (1 == r ? UnknownFieldHandler.onWrite : r)(this.typeName, e, n),
      n
    );
  }
}
const n13f4 = new n13f4$Type();

const url = $request.url;
const isQuanX = typeof $task !== "undefined";
const binaryBody = isQuanX
  ? new Uint8Array($response.bodyBytes)
  : $response.body;
let needProcessFlag = false;
let body;

console.log(`youtube:2024-04-28`);
if ($request.method !== "POST") {
  $notification.post("youtube-proto error", "not POST:", url);
}

if (url.includes("/v1/browse")) {
  console.log("browse");
  let browseMessage = browseRes.fromBinary(binaryBody, {
    readUnknownField: true,
  });
  console.log(`n1F10`);
  removeAds(browseMessage.n1F10?.n2F49399797?.n3F1);
  console.log(`n1F9`);
  removeAds(
    browseMessage.n1F9?.m2F58173949?.m3F1?.m4F58174010?.n1F10?.n2F49399797?.n3F1
  );
  if (needProcessFlag) {
    body = browseRes.toBinary(browseMessage);
  }
} else if (url.includes("/v1/next")) {
  console.log("next");
  let nextMessage = nextRes.fromBinary(binaryBody, { readUnknownField: true });
  removeAds(nextMessage.a1F7?.a2F51779735?.a3F1?.n2F49399797?.n3F1);
  if (needProcessFlag) {
    body = nextRes.toBinary(nextMessage);
  }
} else {
  $notification.post("youtube-proto error", "url:", url);
}
if (needProcessFlag) {
  console.log(`${body.byteLength}---${body.buffer.byteLength}`);
  if (isQuanX) {
    $done({
      bodyBytes: body.buffer.slice(
        body.byteOffset,
        body.byteLength + body.byteOffset
      ),
    });
  } else {
    $done({ body });
  }
} else {
  console.log("nothing");
  $done({});
}

function removeAds(itemList) {
  itemList?.forEach?.((item) => {
    if (item.n4F50195462?.n5F1?.length) {
      item.n4F50195462.n5F1 = item.n4F50195462.n5F1.filter((el) => {
        let flag = true;
        if (el.n6F153515154?.n7F172660663?.n8F1?.n9F168777401) {
          const f5Value = el.n6F153515154.n7F172660663.n8F1.n9F168777401.n10F5;
          const adStr = f5Value?.n11F454362329?.n12F8?.n13F4?.s;
          const adStr0 = f5Value?.n11F224457493?.n12Ff2?.s;
          const adStr1 = f5Value?.n11F461080918?.n12F7?.n13F4?.s;
          const adStr11 = f5Value?.n11F472329933?.n12F7?.n13F4?.s;
          const adStr12 = f5Value?.n11F478840678?.n12F7?.n13F4?.s;
          const adStr2 = f5Value?.n11F224590612?.n12F2?.s3;
          const adStr22 = f5Value?.n11F224590612?.n12F2?.s9;
          const adStr3 = f5Value?.n11F394770629?.a12F8?.a13F4?.s;
          const adStr33 = f5Value?.n11F491441836?.a12F8?.a13F4?.s;
          const adStr4 = f5Value?.n11F232954548?.n12F19?.s;
          const adStr5 = f5Value?.n11F456430508?.n12F7?.n13F4?.s;
          const existAdStr =
            adStr ||
            adStr0 ||
            adStr1 ||
            adStr11 ||
            adStr12 ||
            adStr2 ||
            adStr22 ||
            adStr3 ||
            adStr33 ||
            adStr4 ||
            adStr5;
          if (existAdStr) {
            console.log(`ad:${existAdStr}`);
            needProcessFlag = true;
            flag = false;
          }
        }
        const adStr =
          el.n6F166487981?.n7F1?.n8F83537025?.n91F3?.n10F83784541?.n11F1?.n12F1
            ?.s;
        if (adStr) {
          console.log(`ad2:${adStr}`);
          needProcessFlag = true;
          flag = false;
        }
        el.n6F153515154?.n7F172660663?.n8F3?.n9F3?.n10F3?.forEach?.((ell) => {
          ell.n11F3?.forEach?.((v) => {
            v.n12F3?.forEach?.((vv) => {
              const tempStr = vv.n13F1?.n14F158796380?.n15F1.s;
              if (tempStr) {
                console.log(`ad:${tempStr}`);
                needProcessFlag = true;
                flag = false;
              }
            });
          });
        });
        return flag;
      });
    }
  });
}
