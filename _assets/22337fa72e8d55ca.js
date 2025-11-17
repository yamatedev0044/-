(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [5936],
  {
    /***/ 563790: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var IC = __c.IC;
        var oc = __c.oc;
        var Nf = __c.Nf;
        var M = __c.M;
        var Di = __c.Di;
        var zw = __c.zw;
        var K = __c.K;
        var E = __c.E;
        var ei = __c.ei;
        var y = __c.y;
        var mEc = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of e) {
                d = l.ua;
                var g = m.column,
                  h = a.layout.cells.get(d, g);
                if (
                  !h ||
                  (l.boundary === "start" ? h.span.qc === d : h.span.Ad === d)
                )
                  if (
                    ((d = c.get(`${g.id}:${d.id}`)),
                    (d = l.boundary === "start" ? d?.na : d?.Ba))
                  ) {
                    h = f[f.length - 1];
                    g = (g = b.next(g))
                      ? { column: g, boundary: "start" }
                      : { column: y(b.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.Mza),
                        (k =
                          k.column === m.column && k.boundary === m.boundary);
                    k &&
                      ((k = h.H$a),
                      (k = k.ua === l.ua && k.boundary === l.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.kd === d.kd &&
                    h.kd === 0
                      ? (h.Mza = g)
                      : f.push({
                          H$a: l,
                          OMb: m,
                          Mza: g,
                          color: d.color,
                          weight: d.weight,
                          kd: d.kd,
                        });
                  }
              }
            return f;
          },
          nEc = function (a, b, c, d, e, f) {
            const g = [];
            for (const m of e)
              for (const n of d) {
                var h = n.ua,
                  k = m.column;
                e = a.layout.cells.get(h, k);
                if (
                  !e ||
                  (m.boundary === "start" ? e.span.mc === k : e.span.ed === k)
                )
                  if (
                    ((e = c.get(`${k.id}:${h.id}`)),
                    (e = m.boundary === "start" ? e?.qa : e?.Pa) &&
                      (m.boundary !== "start" || f(h, k) !== 1))
                  ) {
                    k = g[g.length - 1];
                    h = (h = b.next(h))
                      ? { ua: h, boundary: "start" }
                      : { ua: y(b.last()), boundary: "end" };
                    var l;
                    if ((l = k))
                      (l = k.pUa),
                        (l =
                          l.column === m.column && l.boundary === m.boundary);
                    l &&
                      ((l = k.Sza),
                      (l = l.ua === n.ua && l.boundary === n.boundary));
                    l &&
                    k.color === e.color &&
                    k.weight === e.weight &&
                    k.kd === e.kd &&
                    k.kd === 0
                      ? (k.Sza = h)
                      : g.push({
                          pUa: m,
                          dNb: n,
                          Sza: h,
                          color: e.color,
                          weight: e.weight,
                          kd: e.kd,
                        });
                  }
              }
            return g;
          },
          oEc = function (a, b, c, d, e, f) {
            const g = a.vcb.Lpb(d, b.last(), c.last());
            a = (r, t) => {
              const v = g.get(r) || 0,
                w = g.get(t) || 0;
              return v <= w ? r : t;
            };
            const h = new Map();
            if (e.length === 0 || f.length === 0) return h;
            var k = [],
              l = c.previous(f[0].column);
            l && k.push({ column: l, boundary: "start" });
            k.push(...f);
            (f = c.next(f[f.length - 1].column)) &&
              k.push({ column: f, boundary: "start" });
            f = [];
            (l = b.previous(e[0].ua)) && f.push({ ua: l, boundary: "start" });
            f.push(...e);
            (e = b.next(e[e.length - 1].ua)) &&
              f.push({ ua: e, boundary: "start" });
            for (const r of k) {
              k = (e = r.boundary === "start" ? r.column : void 0)
                ? c.previous(e)
                : c.last();
              for (const t of f) {
                var m = t.boundary === "start" ? t.ua : void 0;
                l = m ? b.previous(m) : b.last();
                var n = e && m && d.get(`${e.id}:${m.id}`),
                  p = e && l && d.get(`${e.id}:${l.id}`);
                m = k && m && d.get(`${k.id}:${m.id}`);
                var q = k && l && d.get(`${k.id}:${l.id}`);
                l = r.boundary === "end" ? m?.Pa : n?.qa;
                n = t.boundary === "end" ? p?.Ba : n?.na;
                p = r.boundary === "end" ? q?.Pa : p?.qa;
                m = t.boundary === "end" ? q?.Ba : m?.na;
                q = __c.via({ na: p, Ba: l, qa: m, Pa: n }, a);
                let v;
                switch (q) {
                  case "blockStart":
                    v = p;
                    break;
                  case "blockEnd":
                    v = l;
                    break;
                  case "inlineStart":
                    v = m;
                    break;
                  case "inlineEnd":
                    v = n;
                    break;
                  default:
                    v = void 0;
                }
                const { height: w, width: z } =
                  v?.kd === 1
                    ? { height: v.weight, width: v.weight }
                    : {
                        height: Math.max(m?.weight || 0, n?.weight || 0),
                        width: Math.max(p?.weight || 0, l?.weight || 0),
                      };
                h.set(z6(r, t), __c.Ok(q, w / 2, z / 2));
              }
            }
            return h;
          },
          pEc = function (a, b, c, d, e, f, g, h) {
            if (f.length === 0 || g.length === 0) return [];
            const k = mEc(b, d, e, f, g);
            h = nEc(b, c, e, f, g, h);
            const l = oEc(a, c, d, e, f, g),
              m = a.Mwb(c),
              n = a.Xvb(b, d),
              p = b.direction === "rtl";
            a = k
              .map((q) => {
                var r = q.OMb,
                  t = q.Mza,
                  v = q.H$a;
                const w = q.color,
                  z = q.weight;
                q = q.kd;
                const A = p ? -1 : 1,
                  C = l.get(z6(r, v))?.Pa,
                  B = l.get(z6(t, v))?.qa;
                if (C != null && B != null) {
                  var D = y(m.get(v.ua)),
                    I = y(n.get(r.column));
                  r = y(n.get(t.column));
                  v = v.boundary === "start" ? D.start : D.end;
                  D = I.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: w,
                    weight: z,
                    kd: q,
                    p1: new ei(D + C * A, v),
                    p2: new ei(t + B * A, v),
                    ...__c.Tk((t - D) * A, q * z, C),
                  };
                }
              })
              .filter(__c.nb);
            return [
              ...h
                .map((q) => {
                  var r = q.pUa,
                    t = q.dNb,
                    v = q.Sza;
                  const w = q.color,
                    z = q.weight;
                  q = q.kd;
                  const A = l.get(z6(r, t))?.Ba,
                    C = l.get(z6(r, v))?.na;
                  if (A != null && C != null) {
                    var B = y(n.get(r.column)),
                      D = y(m.get(t.ua));
                    t = y(m.get(v.ua));
                    r = r.boundary === "start" ? B.start : B.end;
                    B = D.start;
                    v = v.boundary === "start" ? t.start : t.end;
                    return {
                      color: w,
                      weight: z,
                      kd: q,
                      p1: new ei(r, B + A),
                      p2: new ei(r, v + C),
                      ...__c.Tk(v - B, q * z, A),
                    };
                  }
                })
                .filter(__c.nb),
              ...a,
            ];
          },
          qEc = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.Nk(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.Nk(d, (e) => `${e.Sl}_${e.Tl}`);
              for (const [, e] of a) {
                const { Tl: f, Sl: g } = e[0];
                a = __c.Nk(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Sl: g, Tl: f });
              }
            }
            return b;
          },
          rEc = function (a, b, c, d, e) {
            return a.OJb(b, c, d, e);
          },
          sEc = function (a, b, c, d, e, f) {
            var g = __c.PMb;
            const h = d.get().flatMap((m) =>
                b.last() === m
                  ? [
                      { ua: m, boundary: "start" },
                      { ua: m, boundary: "end" },
                    ]
                  : [{ ua: m, boundary: "start" }]
              ),
              k = e.get().flatMap((m) =>
                c.last() === m
                  ? [
                      { column: m, boundary: "start" },
                      { column: m, boundary: "end" },
                    ]
                  : [{ column: m, boundary: "start" }]
              ),
              l = new Map();
            for (const m of d.get())
              for (const n of e.get())
                (d = rEc(g.vcb, a, b, c, { column: n, ua: m })) &&
                  l.set(`${n.id}:${m.id}`, d);
            a = pEc(g, a, b, c, l, h, k, f);
            return qEc(a);
          },
          tEc = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.FX(b.reference.kj);
                a = a.X0(b.reference.tj);
                return c != null && a != null;
              case 1:
                return a.FX(b.reference.kj) != null;
              case 2:
                return a.X0(b.reference.tj) != null;
              case 3:
                return !1;
              default:
                throw new E(b.reference);
            }
          },
          uEc = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.U.length > 0) return !1;
                a = a.iJ(c.R4.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.AA(new __c.DA(), a.CL).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return tEc(b, d);
                        case 1:
                          return tEc(b, d.start) && tEc(b, d.end);
                        default:
                          throw new E(d);
                      }
                    }).length > 0;
              default:
                throw new E(c);
            }
          },
          vEc = function (a) {
            switch (a) {
              case 2:
                return K("ibdecg");
              case 7:
                return K("446quA");
              case 5:
                return K("j1fbqg");
              case 1:
                return K("O5i4AQ");
              case 6:
                return K("C0VHsg");
              case 4:
                return K("9ND0kg");
              case -1:
                return K("RWqnLA");
              case 9:
                return K("nQR/7w");
              case -2:
                return K("P23rtA");
              case 3:
                return K("+IXmVg");
              default:
                throw new E(a);
            }
          },
          wEc = function () {
            const [a] = (0, __c.hb)(() => zw());
            return a;
          },
          xEc = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          yEc = function (a) {
            return (b) => ({ type: "react", node: (0, __c.J)(a, { ...b }) });
          },
          zEc = function (a) {
            var b = a.qC;
            const c = a.content,
              d = a.context,
              e = a.xr;
            __c.x(c?.$g?.type === "formula");
            const f = c.Kj;
            a = { type: "dom", render: (g) => (g.innerText = "") };
            switch (f.type) {
              case 9:
                b = a;
                break;
              case 6:
                b = b.Fta?.({
                  content: __c.yd(__c.rib, { ...__c.YDb, value: f.value }),
                  context: d,
                  xr: e,
                });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                b = b.Ita?.({ context: d, value: c.kD, valueType: c.Kj.type });
                break;
              case 0:
                b = {
                  type: "react",
                  node: A6(__c.lV, {
                    label: vEc(f.error),
                    children: A6(__c.X7b, { tone: "critical" }),
                  }),
                };
                break;
              default:
                throw new E(f);
            }
            return b ?? a;
          },
          EEc = function (a) {
            const b = a.qC,
              c = a.ag,
              d = a.PNb,
              e = a.bb;
            b.Ita = (f) => __c.yRa({ ...f, bb: e });
            b.BQa = (f) => zEc({ ...f, qC: b });
            b.AQa = (f) => AEc({ ...f });
            b.Fta = yEc(BEc({ ag: c, eW: void 0 }));
            b.DQa = CEc(d, e);
            b.EQa = yEc((f) => A6(DEc, { ...f, bb: e }));
          },
          GEc = function ({
            label: a,
            ab: b,
            width: c,
            height: d,
            scale: e,
            CUa: f,
          }) {
            return A6("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: B6(__c.px, {
                className: C6("ivlMMQ", FEc(f)),
                size: "small",
                alignment: "center",
                children: [b && A6(b, { size: "small" }), a],
              }),
            });
          },
          FEc = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          IEc = function ({
            Vd: a,
            n0a: b,
            scale: c,
            dr: d,
            onMouseDown: e,
            onTouchStart: f,
            er: g,
            Hhb: h,
            TVa: k,
          }) {
            const l = D6(() => {
                const q = d?.get();
                if (q != null && q.length !== 0) return new __c.ey(q);
              }, [d]),
              m = g(1),
              n = g(c),
              p = { ssE9Tg: !a, OkifGQ: a };
            return A6(__c.qx, {
              Cp: "light",
              light: "light",
              xs: "light",
              dark: "light",
              children: (q) =>
                A6("div", {
                  className: C6("ze9QCQ", p, q.className),
                  style: { width: n, height: n },
                  children: A6("div", {
                    style: { width: m, height: m, transform: `scale(${c})` },
                    className: C6("N7J3UA", p),
                    onMouseDown: e,
                    onTouchStart: f,
                    ref: l?.Vi,
                    children: A6(__c.pV, {
                      className: C6("m8CFdg", p, {
                        G6wL4w: h,
                        W_E0wA: b,
                        _52RFdg: k === "move",
                      }),
                      ariaLabel: K("ruWN9A"),
                      children: A6(HEc, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          KEc = function ({ zb: a }) {
            const b = new JEc(),
              c = new __c.ZU(),
              d = E6((g) => {
                const {
                    scale: h = 1,
                    g0a: k,
                    size: l = "small",
                    Hhb: m = !0,
                  } = g,
                  n = F6((p) => b.er({ scale: p, size: l, lFa: k }), [l, k]);
                return A6(IEc, {
                  ...g,
                  scale: k ? Math.max(h, k) : h,
                  Vd: g.sheet.direction === "rtl",
                  n0a: g.selection != null && b.wAb(g.sheet, a, g.selection),
                  er: n,
                  Hhb: m,
                  TVa: g.TVa,
                  onMouseDown: g.onMouseDown,
                  onTouchStart: g.onTouchStart,
                });
              }),
              e = E6((g) => {
                const {
                    scale: h = 1,
                    g0a: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    zKb: p,
                  } = g,
                  q = F6((z) => b.er({ scale: z, size: l, lFa: k }), [l, k]),
                  r = k ? Math.max(h, k) : h,
                  t = F6((z) => n != null && b.DJa(n).has(z), [n]),
                  v = F6((z) => n != null && b.Uxb(m, a, n).has(z), [m, n]),
                  w = F6(
                    (z) => {
                      var A = a.layout.D_.Uk(m);
                      A = p != null && A.We(z, p.mc) >= 0 && A.We(z, p.ed) <= 0;
                      return t(z)
                        ? A
                          ? "secondary-active"
                          : "primary-active"
                        : v(z)
                        ? A
                          ? "secondary-low"
                          : "primary-low"
                        : A
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, v, t]
                  );
                return A6(G6, {
                  ...g,
                  xd: h,
                  Od: r,
                  er: q,
                  ZH: w,
                  SI: c,
                  zb: a,
                });
              }),
              f = E6((g) => {
                const {
                    scale: h = 1,
                    g0a: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    zKb: p,
                  } = g,
                  q = F6((z) => b.er({ scale: z, size: l, lFa: k }), [l, k]),
                  r = k ? Math.max(h, k) : h,
                  t = F6((z) => n != null && b.FJa(n).has(z), [n]),
                  v = F6((z) => n != null && b.Vxb(m, a, n).has(z), [m, n]),
                  w = F6(
                    (z) => {
                      var A = a.layout.D_.ym(m);
                      A = p != null && A.We(z, p.qc) >= 0 && A.We(z, p.Ad) <= 0;
                      return t(z)
                        ? A
                          ? "secondary-active"
                          : "primary-active"
                        : v(z)
                        ? A
                          ? "secondary-low"
                          : "primary-low"
                        : A
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, v, t]
                  );
                return A6(H6, {
                  ...g,
                  xd: r,
                  Od: h,
                  er: q,
                  ZH: w,
                  SI: c,
                  zb: a,
                });
              });
            return { lib: d, kib: e, mib: f };
          },
          MEc = function (a) {
            const b = a.$r,
              c = () => null;
            return __c.Hw((d) => A6(LEc, { ...d, $r: b, Gi: c }));
          },
          NEc = function ({ sheet: a, zb: b, ba: c, range: d, Yc: e }) {
            I6(
              () =>
                J6(() => {
                  if (e.current != null) {
                    var f = c?.get() ?? 1,
                      g = a.direction === "rtl",
                      h = b.layout.Xg.ym(a),
                      k = b.layout.Xg.Uk(a);
                    h = d && h.has(d.qc);
                    g =
                      d && k.has(d.mc)
                        ? b.Qa.qa(a, d.mc) * f * (g ? 1 : -1)
                        : 0;
                    k = h ? -b.Qa.na(a, d.qc) * f : 0;
                    e.current.style.transform = `translate(${g}px, ${k}px)`;
                    e.current.style.width = `${a.width * f}px`;
                    e.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, b.layout.Xg, b.Qa, d, e, c]
            );
          },
          QEc = function ({ onScroll: a }) {
            const b = new OEc(a);
            return {
              IF: b,
              nta: E6((c) =>
                A6(PEc, { sheet: c.sheet, IF: b, children: c.children })
              ),
            };
          },
          TEc = function (a) {
            const b = a.$r,
              c = a.je,
              d = a.xcb,
              e = a.zb,
              f = ({ children: l }) => l,
              { IF: g, nta: h } = QEc({ onScroll: a.onScroll });
            class k extends REc {
              get NP() {
                const l = this.props.ga.FA;
                switch (l) {
                  case "screen":
                    return h;
                  case "print":
                    return f;
                  default:
                    throw new E(l);
                }
              }
              componentDidMount() {
                d.gcb(this.props.item, {
                  Ob: this.props.Ob,
                  ga: this.props.ga,
                });
              }
              componentWillUnmount() {
                d.pob(this.props.item, {
                  Ob: this.props.Ob,
                  ga: this.props.ga,
                });
              }
              render() {
                d.gcb(this.props.item, {
                  Ob: this.props.Ob,
                  ga: this.props.ga,
                });
                return A6(SEc, {
                  ...this.props,
                  ba: this.ba,
                  $r: b,
                  NP: this.NP,
                  Gi: this.Gi,
                  xcb: d,
                  zb: e,
                  IF: g,
                });
              }
              constructor(...l) {
                super(...l);
                this.ba = K6(() => {
                  const m = this.props.item;
                  var n = this.props.ga,
                    p = n.FA;
                  n = n.kt;
                  switch (p) {
                    case "screen":
                      return n;
                    case "print":
                      p = d.Rwb(m);
                      if (!p) return 1;
                      ({ width: p } = new __c.Kq(m, p.Ob, { kt: n }));
                      return p / m.config.width;
                    default:
                      throw new E(p);
                  }
                });
                this.Gi = E6((m) =>
                  A6("div", {
                    className: "wKvivQ",
                    children: A6(__c.GRa, { ...this.props, ...m, je: c }),
                  })
                );
              }
            }
            return { ukb: k, IF: g };
          },
          UEc = function (a, b, c) {
            if (
              c != null &&
              c.mc != null &&
              c.qc != null &&
              c.ed != null &&
              c.Ad != null
            ) {
              var d = b.Qa.qa(a, c.mc),
                e = b.Qa.na(a, c.qc),
                f = b.Qa.qa(a, c.ed) + c.ed.width - d;
              a = b.Qa.na(a, c.Ad) + c.Ad.height - e;
              return Di({ top: e, left: d, width: f, height: a });
            }
          },
          WEc = function (a) {
            const b = a.$r,
              c = a.zb,
              d = () => null;
            return (e) => A6(VEc, { ...e, $r: b, Gi: d, zb: c });
          },
          $Ec = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { ITa: b, Zx: b, Sa: {}, CD: {} },
              d = L6(
                () => a.zC.style || c,
                (h) => {
                  Object.assign(a.Efa.style, h.ITa);
                  Object.assign(a.FQ.style, h.Zx);
                  Object.assign(a.aH.style, h.Sa);
                  Object.assign(a.jH.style, h.CD);
                  h = h?.Sa?.textDecoration;
                  a.aH.classList.toggle("OQx3PQ", h === "underline");
                  a.aH.classList.toggle("_99ezUA", h === "line-through");
                  a.aH.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: XEc }
              ),
              e = L6(
                () => a.PDa,
                (h) => {
                  a.aH.classList.toggle("_84KvRA", !h);
                  a.Efa.classList.toggle("_84KvRA", !h);
                  a.FQ.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = L6(
                () => a.renderer,
                (h) => {
                  a.qga && h?.type !== "react"
                    ? ((a.qga = void 0), a.gaa.remove())
                    : (a.jH.innerHTML = "");
                  switch (h?.type) {
                    case "react":
                      a.qga = YEc(h.node, a.gaa);
                      a.jH.appendChild(a.gaa);
                      break;
                    case "dom":
                      h.render(a.jH);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(h);
                  }
                  a.iGa();
                },
                { fireImmediately: !0 }
              ),
              g = ZEc
                ? L6(
                    () => a.kCa,
                    (h) => {
                      a.aH.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g?.();
            };
          },
          XEc = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          bFc = function (a) {
            const b = a.rC,
              c = a.zb,
              d = a.yl,
              e = a.qG,
              f = a.Tgb,
              g = a.XA,
              h = new aFc(d, c),
              k = (l, m) => (g ? uEc(g, l, m) : !1);
            return (l) =>
              A6(M6, {
                ...l,
                PS: k,
                qG: e,
                zb: c,
                yl: d,
                rC: b,
                jDa: h,
                Tgb: f?.get(),
              });
          },
          z6 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.ua.id}-${b.boundary}`,
          BEc =
            ({ ag: a, eW: b }) =>
            (c) =>
              (0, __c.J)(__c.XQb, { ...c, ag: a, eW: b }),
          cFc = __webpack_require__(405148),
          dFc = cFc.Fragment,
          A6 = cFc.jsx,
          B6 = cFc.jsxs;
        var eFc = __webpack_require__,
          fFc = eFc(208463),
          C6 = eFc.n_x(fFc)();
        var E6 = __webpack_require__(371201).PA;
        var N6 = __webpack_require__(227200),
          O6 = N6.Component,
          REc = N6.PureComponent,
          F6 = N6.useCallback,
          I6 = N6.useEffect,
          gFc = N6.useLayoutEffect,
          D6 = N6.useMemo,
          P6 = N6.useRef;
        var Q6 = __webpack_require__(186901),
          K6 = Q6.EW,
          J6 = Q6.fm,
          hFc = Q6.m3,
          L6 = Q6.mJ,
          iFc = Q6.MN,
          jFc = Q6.O8,
          R6 = Q6.sH,
          S6 = Q6.XI;
        var kFc = __webpack_require__(536618),
          lFc = kFc.Aj,
          T6 = kFc.iB,
          mFc = kFc.uP;
        var U6 = __webpack_require__(277049)._;
        var V6 = __webpack_require__(269018)._;
        var nFc = __webpack_require__(87387).A;
        var YEc = __webpack_require__(662534).createPortal;
        var oFc = class {
            static D(a) {
              M(a, { viewBox: R6.ref });
            }
            constructor() {
              this.viewBox =
                (oFc.D(this), Di({ top: 0, left: 0, height: 0, width: 0 }));
              this.ELb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          pFc = E6((a) => {
            var b = a.sheet.direction === "rtl";
            b = { H2wykw: !b, UweldA: b };
            const c = P6(new oFc()),
              d = S6(() => {
                if (a.fsa) {
                  var f = a.fsa.current;
                  f &&
                    c.current.ELb(
                      Di({
                        top: f.scrollTop,
                        left: f.scrollLeft,
                        height: f.clientHeight,
                        width: f.clientWidth,
                      })
                    );
                }
              });
            I6(() => {
              d();
              a.fsa.current?.addEventListener("scroll", d);
              window?.addEventListener("resize", d);
              return () => {
                a.fsa.current?.removeEventListener("scroll", d);
                window?.removeEventListener("resize", d);
              };
            }, [a.fsa, d]);
            const e = D6(() => ({ get: () => c.current.viewBox }), []);
            return B6("div", {
              className: C6("nMvVqA", b),
              children: [
                B6("div", {
                  ref: a.Yc,
                  className: "_0YOFPg",
                  children: [
                    A6(a.$r, { ...a, viewport: e }),
                    A6("div", {
                      className: C6("Gdl7fQ", b),
                      children: a.VPa?.get()?.map((f, g) => A6(f, {}, g)),
                    }),
                  ],
                }),
                a.h2b === "visible" &&
                  B6(dFc, {
                    children: [
                      A6("div", {
                        className: C6("_32sKQw", b),
                        children: A6(a.rkb, { ...a }),
                      }),
                      A6("div", {
                        className: C6("xdIsTQ", b),
                        children: A6(a.vkb, { ...a }),
                      }),
                      A6("div", {
                        className: C6("rsTRSA", b),
                        children: A6(a.tkb, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          qFc = E6((a) => {
            a = a.content;
            __c.u(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.V;
              case "text3":
                return __c.Pt.snapshot(a.value).cells.V();
              default:
                throw new E(a);
            }
          });
        var rFc = 1 / 13.334,
          AEc = yEc(
            E6((a) => {
              var b = a.context;
              const c = a.value,
                d = a.onChange,
                e = b.attrs;
              b = b.container.column;
              __c.x(a.valueType === 3);
              const f = F6(
                  (m) => {
                    d?.(c, m.target.checked);
                  },
                  [d, c]
                ),
                g = e.fontSize ?? Nf.Ib.fontSize,
                h = b.width;
              a = D6(() => {
                const m = 20 * g * rFc;
                return `${Math.round(m * Math.min(1, (h - __c.xV * 2) / m))}px`;
              }, [g, h]);
              b = D6(() => {
                var m = e.color ?? Nf.Ib.color,
                  n = e.BD ?? Nf.Ib.BD;
                const { h: p, s: q, pa: r } = __c.Zl(m),
                  t = __c.Xl(new __c.Rl(p, q * 0.59, r * 0.69)).cp(),
                  v = __c.Xl(new __c.Rl(p, q * 0.68, r * 0.84)).cp(),
                  w = __c.dm(__c.cm(__c.Xl(m), 0.5));
                return {
                  $Ta: m,
                  fob: t,
                  aUa: v,
                  gob: n !== "transparent" ? n : "#ffffff",
                  hob: w,
                };
              }, [e]);
              const k = __c.ax(),
                l = F6(
                  (m) => {
                    m.nativeEvent.cancelable && m.preventDefault();
                    m.stopPropagation();
                    S6(() => {
                      d && d(c, !c);
                    })();
                  },
                  [d, c]
                );
              return A6("label", {
                className: C6("s5Xvtg", { _0YWo_Q: k, agLBbw: d == null }),
                onTouchEnd: l,
                children: B6("div", {
                  className: "nOL94A",
                  style: {
                    "--V8rdkw": a,
                    "--6kHV0A": b.$Ta,
                    "--dhlyXQ": b.fob,
                    "--pMrTCg": b.aUa,
                    "--EyYwbg": b.$Ta,
                    "--3ZWdlg": b.aUa,
                    "--81jhOQ": b.gob,
                    "--Cs3XTw": b.hob,
                  },
                  children: [
                    A6("input", {
                      type: "checkbox",
                      checked: c,
                      onChange: S6((m) => f(m)),
                      className: "p8DDOg",
                    }),
                    A6("span", {
                      "aria-hidden": !0,
                      className: C6("l_S_Ng", { iGjddQ: c }),
                      children: A6(sFc, {}),
                    }),
                  ],
                }),
              });
            })
          ),
          sFc = () =>
            A6("svg", {
              className: "_8CNofA",
              viewBox: "0 0 10 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: A6("path", {
                d: "M0.750977 4.5L3.25098 7L9.25098 1",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            });
        var CEc = (a, b) =>
            __c.jRa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ dh: c } = __c.pf(Nf, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    ma: void 0,
                    writingMode: 1,
                    rd: "start",
                    cf: tFc(e, c),
                    bb: b,
                  });
            }),
          tFc = T6(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.V.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: hFc.structural }
          );
        var uFc, vFc, wFc, DEc;
        new ((uFc = class extends U6 {
          constructor() {
            super(DEc);
            vFc();
          }
        }),
        (() => {
          class a extends (wFc = O6) {
            static D(b) {
              M(b, { dh: K6 });
            }
            get dh() {
              return __c.pf(Nf, this.props.context.attrs).dh;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = A6(this.props.Gi, {
                content: b,
                ua: c.container.ua,
                col: c.container.column,
                dh: this.dh,
              });
              return this.dh === "wrap"
                ? A6("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [DEc, vFc],
          } = V6(a, [], [oc], wFc));
        })(),
        uFc)();
        var JEc = class {
          er({ size: a, scale: b, lFa: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.JY * b : __c.V6b * b;
          }
          constructor() {
            this.wAb = T6((a, b, c) => {
              c = c.get();
              const d = b.layout.D_.ym(a);
              a = b.layout.D_.Uk(a);
              return (
                c != null &&
                d.count() === (c.rows?.size || 0) &&
                a.count() === (c.columns?.size || 0)
              );
            });
            this.DJa = lFc((a) => new Set(a.get()?.columns || []), {
              equals: __c.Si,
            });
            this.FJa = lFc((a) => new Set(a.get()?.rows || []), {
              equals: __c.Si,
            });
            this.Uxb = T6(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.FJa(c);
                b = b.layout.D_.Uk(a);
                if (e.size > 0) return new Set(b);
                c = this.DJa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.ua, f.column);
                  for (const g of xEc(
                    d ? d.span.mc : f.column,
                    d ? d.span.ed : f.column,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.Si }
            );
            this.Vxb = T6(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.DJa(c);
                b = b.layout.D_.ym(a);
                if (e.size > 0) return new Set(b);
                c = this.FJa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.ua, f.column);
                  for (const g of xEc(
                    d ? d.span.qc : f.ua,
                    d ? d.span.Ad : f.ua,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.Si }
            );
          }
        };
        var xFc,
          yFc,
          zFc,
          AFc,
          BFc,
          CFc,
          DFc = parseInt("4px", 10) || 4,
          EFc = parseInt("0.5px", 10) || 0.5,
          FFc = parseInt("1px", 10) || 1,
          GFc = parseInt("0.5px", 10) || 0.5,
          HFc = parseInt("0.5px", 10) || 0.5,
          IFc = parseInt("1px", 10) || 1,
          JFc = parseInt("0.5px", 10) || 0.5,
          G6;
        new ((xFc = class extends U6 {
          constructor() {
            super(G6);
            zFc();
          }
        }),
        (() => {
          class a extends (AFc = O6) {
            static D(b) {
              M(b, { Vd: K6, Ns: K6, Qba: K6 });
            }
            get Vd() {
              return this.props.sheet.direction === "rtl";
            }
            get Ns() {
              const b = this.props.dr?.get();
              if (b != null && b.length !== 0) return new __c.ey(b);
            }
            get Qba() {
              return this.props.ABa?.()?.get();
            }
            render() {
              return A6(__c.qx, {
                Cp: "light",
                light: "light",
                xs: "light",
                dark: "light",
                children: this.Kob,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (G6.D(this),
                S6((c) => {
                  const { onMouseMove: d, sheet: e, xd: f = 1 } = this.props;
                  d?.(c, e, "column", f);
                }));
              this.onMouseLeave = S6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = S6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = S6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.d$a = (c, d, e) => {
                const {
                    sheet: f,
                    zb: g,
                    er: h,
                    ZH: k,
                    s2b: l,
                    xd: m = 1,
                    Od: n = 1,
                  } = this.props,
                  p = { jNbTIg: !this.Vd, gtA7Dw: this.Vd };
                var q = e?.sticky
                  ? this.Vd
                    ? { right: 0 }
                    : { left: 0 }
                  : void 0;
                q = e?.sticky ? this.Qba ?? q : void 0;
                let r = 0;
                const t = g.layout.Xg.Uk(f),
                  v = t.map((z) => {
                    if (!((c && t.We(z, c) < 0) || (d && t.We(z, d) > 0)))
                      return (
                        (r += z.width),
                        A6(
                          KFc,
                          {
                            col: z,
                            label: __c.iw(f.cu(z)),
                            ab: l?.get()?.get(z),
                            er: h,
                            ZH: k,
                            xd: m,
                            Od: n,
                            start: g.Qa.qa(f, z),
                          },
                          z.id
                        )
                      );
                  }),
                  w = this.Vd ? { right: r * m } : { left: r * m };
                return B6("div", {
                  style: { height: h(n), width: r * m, ...q },
                  className: C6("Vt2_4w", p, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    v,
                    e?.sticky &&
                      A6("div", {
                        style: { width: DFc * m, ...w },
                        className: C6("HBvlug", "ru3tFQ", p),
                      }),
                  ],
                });
              };
              this.Kob = (c) => {
                var d = this.props.sheet;
                const e = this.props.zb,
                  f = d.view.freeze.fH
                    ? d.layout.Yd.get(d.view.freeze.fH)
                    : void 0,
                  g = { jNbTIg: !this.Vd, gtA7Dw: this.Vd };
                d = e.layout.Xg.Uk(d);
                return B6("div", {
                  ref: this.Ns?.Vi,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: C6("xhBZaw", g, c.className),
                  children: [
                    f && this.d$a(void 0, f, { sticky: !0 }),
                    this.d$a(f ? d.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [G6, zFc],
          } = V6(a, [], [oc], AFc));
        })(),
        xFc)();
        var H6;
        new ((yFc = class extends U6 {
          constructor() {
            super(H6);
            BFc();
          }
        }),
        (() => {
          class a extends (CFc = O6) {
            static D(b) {
              M(b, { Vd: K6, Ns: K6, Qba: K6 });
            }
            get Vd() {
              return this.props.sheet.direction === "rtl";
            }
            get Ns() {
              const b = this.props.dr?.get();
              if (b != null && b.length !== 0) return new __c.ey(b);
            }
            get Qba() {
              return this.props.ABa?.()?.get();
            }
            render() {
              return A6(__c.qx, {
                Cp: "light",
                light: "light",
                xs: "light",
                dark: "light",
                children: this.eKb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (H6.D(this),
                S6((c) => {
                  const { onMouseMove: d, sheet: e, Od: f = 1 } = this.props;
                  d?.(c, e, "row", f);
                }));
              this.onMouseLeave = S6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = S6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = S6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.i$a = (c, d, e) => {
                const {
                    sheet: f,
                    zb: g,
                    er: h,
                    ZH: k,
                    xd: l = 1,
                    Od: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.Vd, gtA7Dw: this.Vd };
                var p = e?.sticky ? { top: 0 } : void 0;
                p = e?.sticky ? this.Qba ?? p : void 0;
                let q = 0;
                const r = g.layout.Xg.ym(f),
                  t = r.map((v) => {
                    if (!((c && r.We(v, c) < 0) || (d && r.We(v, d) > 0))) {
                      q += v.height;
                      var w = `${f.dv(v) + 1}`;
                      return A6(
                        LFc,
                        {
                          ua: v,
                          label: w,
                          ZH: k,
                          er: h,
                          xd: l,
                          Od: m,
                          start: g.Qa.na(f, v),
                        },
                        v.id
                      );
                    }
                  });
                return B6("div", {
                  style: { height: q * m, width: h(l), ...p },
                  className: C6("_93roJg", n, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    t,
                    e?.sticky &&
                      A6("div", {
                        style: { height: DFc * m },
                        className: C6("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.eKb = (c) => {
                var d = this.props.sheet;
                const e = this.props.zb,
                  f = d.view.freeze.vU
                    ? d.layout.he.get(d.view.freeze.vU)
                    : void 0,
                  g = { jNbTIg: !this.Vd, gtA7Dw: this.Vd };
                d = e.layout.Xg.ym(d);
                return B6("div", {
                  ref: this.Ns?.Vi,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: C6("An9VeA", g, c.className),
                  children: [
                    f && this.i$a(void 0, f, { sticky: !0 }),
                    this.i$a(f ? d.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [H6, BFc],
          } = V6(a, [], [oc], CFc));
        })(),
        yFc)();
        var KFc = E6((a) => {
            const b = a.label,
              c = a.ab,
              d = a.col,
              e = a.ZH,
              f = a.er,
              g = a.xd,
              h = a.Od,
              k = f(h),
              l = mFc(() => e(d));
            return A6("div", {
              className: C6("_83Rssw", "d2uLIA", FEc(l)),
              style: {
                width: d.width * g,
                height: k,
                borderInlineWidth: `${EFc * g}px`,
                borderBlockStartWidth: `${FFc * g}px`,
                borderBlockEndWidth: `${GFc * g}px`,
                transform: `translateX(${a.start * g}px)`,
              },
              children: A6(GEc, {
                label: b,
                ab: c,
                width: d.width,
                height: f(1),
                scale: h,
                CUa: l,
              }),
            });
          }),
          LFc = E6((a) => {
            const b = a.label,
              c = a.ua,
              d = a.er,
              e = a.ZH,
              f = a.xd,
              g = a.Od,
              h = d(f),
              k = mFc(() => e(c));
            return A6("div", {
              className: C6("_83Rssw", "JhBzyw", FEc(k)),
              style: {
                width: h,
                height: c.height * g,
                borderBlockWidth: `${HFc * g}px`,
                borderInlineStartWidth: `${IFc * g}px`,
                borderInlineEndWidth: `${JFc * g}px`,
                transform: `translateY(${a.start * g}px)`,
              },
              children: A6(GEc, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                CUa: k,
              }),
            });
          });
        var MFc =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var NFc =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var HEc = __c.IU({ bp: MFc, medium: NFc });
        var OFc, PFc, QFc, LEc;
        new ((OFc = class extends U6 {
          constructor() {
            super(LEc);
            PFc();
          }
        }),
        (() => {
          class a extends (QFc = O6) {
            static D(b) {
              M(b, { Se: K6.struct });
            }
            render() {
              const b = this.props.element;
              return A6(this.props.$r, {
                sheet: b.G.config,
                container: b,
                kfa: "visible",
                dr: this.props.dr,
                gv: this.props.gv,
                mw: this.props.mw,
                ow: this.props.ow,
                ba: this.props.ba,
                Se: this.Se,
                Gi: this.props.Gi,
                IK: void 0,
              });
            }
            get Se() {
              return __c.Fl(this.props.element.G.Ua, this.props.Bf);
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [LEc, PFc],
          } = V6(a, [], [oc], QFc));
        })(),
        OFc)();
        var RFc = class {
          constructor() {
            this.Opa = new WeakMap();
            this.Rwb = (a) => this.Opa.get(a);
            this.gcb = (a, b) => {
              this.Opa.set(a, b);
            };
            this.pob = (a, b) => {
              const c = this.Opa.get(a);
              c && c.ga === b.ga && c.Ob === b.Ob && this.Opa.delete(a);
            };
          }
        };
        var SFc = parseInt("4px", 10) || 4,
          TFc = E6(({ sheet: a, zb: b, ba: c, range: d, By: e, Cy: f }) => {
            if (d != null && (e || f)) {
              c = c?.get() ?? 1;
              var g = a.direction === "rtl",
                h = { ZJ0G6w: !g, dOI_jA: g };
              if (e && f)
                return (
                  (e = b.Qa.na(a, d.Ad) + d.Ad.height),
                  (a = b.Qa.qa(a, d.ed) + d.ed.width),
                  A6("div", {
                    style: { top: e * c, width: a * c, height: SFc * c },
                    className: C6("aX8dhQ", "VGcLng"),
                  })
                );
              if (e)
                return (
                  (b = b.Qa.qa(a, d.ed) + d.ed.width),
                  A6("div", {
                    style: {
                      width: SFc * c,
                      height: a.height * c,
                      ...(g ? { right: b * c } : { left: b * c }),
                    },
                    className: C6("aX8dhQ", "gl1RPg", h),
                  })
                );
              if (f)
                return (
                  (b = b.Qa.na(a, d.Ad) + d.Ad.height),
                  A6("div", {
                    style: { top: b * c, width: a.width * c, height: SFc * c },
                    className: C6("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var W6 = ({ sheet: a, zb: b, range: c, ba: d, children: e }) => {
            const f = wEc();
            NEc({ sheet: a, zb: b, ba: d, range: c, Yc: f });
            return A6("div", {
              ref: f,
              className: C6(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: e,
            });
          },
          UFc = ({ sheet: a, zb: b, range: c, ba: d, children: e }) => {
            const f = wEc();
            NEc({ sheet: a, zb: b, ba: d, range: c, Yc: f });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return A6("div", {
              className: C6("nstn2A", a, "_9sodyg"),
              children: A6("div", {
                ref: f,
                className: C6("nstn2A", a),
                children: e,
              }),
            });
          };
        var PEc = E6(({ sheet: a, children: b, IF: c }) => {
            const d = F6(
                (f) => {
                  c.FKa(a, f);
                },
                [c, a]
              ),
              e = F6(
                (f) => {
                  f != null ? c.JF.set(a, f) : c.JF.delete(a);
                },
                [c, a]
              );
            return A6(__c.h4b, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              Ww: e,
              children: b,
            });
          }),
          OEc = class {
            FKa(a, b) {
              this.onScroll && this.onScroll(a);
              this.Yaa.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.JF = new WeakMap();
              this.Yaa = R6.map(new Map(), { deep: !1 });
              this.scrollTo = S6((b, c) => {
                this.JF.get(b)?.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var SEc = E6((a) => {
          const b = a.item,
            c = a.dr,
            d = a.gv,
            e = a.Bg,
            f = a.measureRef,
            g = a.ba,
            h = a.u1a,
            k = a.Ob,
            l = a.mw,
            m = a.ow,
            n = a.$r,
            p = a.NP,
            q = a.Gi,
            r = a.Bf,
            t = a.zb,
            v = a.IF;
          a = D6(() => __c.Fl(b.Ua, r), [b, r]);
          const w = D6(
              () =>
                E6(({ sheet: B, range: D, By: I, Cy: L }) =>
                  A6(W6, {
                    sheet: B,
                    zb: t,
                    range: D,
                    ba: g,
                    children: A6(TFc, {
                      sheet: B,
                      zb: t,
                      ba: g,
                      range: D,
                      By: I,
                      Cy: L,
                    }),
                  })
                ),
              [g, t]
            ),
            z = __c.AAa(b.config),
            A = g.get(),
            C = Math.min(z.width * A, k.width);
          I6(
            () =>
              J6(() => {
                var B = b.config.view.freeze.fH
                  ? b.config.layout.Yd.get(b.config.view.freeze.fH)
                  : void 0;
                if (B != null)
                  if (b.config.qa(B) + B.width > C) {
                    if ((B = v.JF.get(b))) B.style.overflowX = "hidden";
                  } else if ((B = v.JF.get(b))) B.style.overflowX = "scroll";
              }),
            [b, k.width, v, A, C]
          );
          return A6("div", {
            ref: f,
            className: "E8r86A",
            style: { width: C },
            children: A6(p, {
              sheet: b,
              children: A6("div", {
                ref: h,
                className: "cXTiJA",
                style: { width: z.width * A, height: z.height * A },
                children: A6("div", {
                  className: "W1ir5A",
                  children: A6(n, {
                    container: e.uk(b),
                    sheet: b.config,
                    kfa: "visible",
                    dr: c,
                    gv: d,
                    ba: g,
                    mw: l,
                    ow: m,
                    Se: a,
                    Gi: q,
                    IK: w,
                  }),
                }),
              }),
            }),
          });
        });
        var VFc = E6(({ page: a, zb: b, range: c, zF: d }) => {
          const e = UEc(a.sheet, b, c);
          return A6("div", {
            className: "Gi9pfA",
            children: a.elements.map((f, g) =>
              e == null ? d(f, g) : __c.Bi(Di(f)).mr(e) && d(f, g)
            ),
          });
        });
        var WFc = new __c.ZU(),
          XFc = (a) => __c.JY * a,
          YFc = () => "primary-default",
          VEc = E6(
            ({
              container: a,
              dr: b,
              gv: c,
              mw: d,
              ow: e,
              J7: f,
              ba: g,
              viewport: h,
              zb: k,
              lMb: l,
              $r: m,
              Gi: n,
              zF: p,
              Loa: q,
              HUb: r,
              qTb: t,
              pTb: v,
            }) => {
              const w = a.page,
                z = D6(
                  () =>
                    E6(({ sheet: A, range: C, By: B, Cy: D }) =>
                      B6(dFc, {
                        children: [
                          A6(W6, {
                            sheet: w.sheet,
                            zb: k,
                            range: C,
                            ba: g,
                            children: A6(TFc, {
                              sheet: A,
                              zb: k,
                              ba: g,
                              range: C,
                              By: B,
                              Cy: D,
                            }),
                          }),
                          B6(UFc, {
                            sheet: w.sheet,
                            zb: k,
                            range: C,
                            ba: g,
                            children: [
                              r && A6(r, {}),
                              p && A6(VFc, { page: w, zb: k, zF: p, range: C }),
                              v && A6(v, {}),
                              q && q(),
                            ],
                          }),
                          t &&
                            C &&
                            A6(W6, {
                              sheet: w.sheet,
                              zb: k,
                              range: C,
                              ba: g,
                              children: A6(t, { range: C }),
                            }),
                        ],
                      })
                    ),
                  [w, k, g, r, p, v, q, t]
                );
              return l
                ? A6(ZFc, {
                    container: a,
                    viewport: h,
                    ba: g,
                    dr: b,
                    gv: c,
                    mw: d,
                    ow: e,
                    $r: m,
                    Gi: n,
                    IK: z,
                    zb: k,
                  })
                : A6(m, {
                    sheet: w.sheet,
                    container: a,
                    kfa: "hidden",
                    dr: b,
                    gv: c,
                    mw: d,
                    ow: e,
                    J7: f,
                    ba: g,
                    viewport: h,
                    Gi: n,
                    IK: z,
                  });
            }
          ),
          ZFc = E6((a) => {
            const b = a.container,
              c = a.ba,
              d = a.viewport,
              e = a.dr,
              f = a.gv,
              g = a.mw,
              h = a.ow,
              k = a.$r,
              l = a.Gi,
              m = a.IK;
            a = a.zb;
            const n = b.page,
              p = n.sheet.direction === "rtl",
              q = P6(null),
              r = P6(null),
              t = P6(null);
            I6(() => {
              const C = X6({
                sheet: n.sheet,
                zqa: !0,
                Aqa: !0,
                ba: c,
                viewport: d,
              });
              return L6(
                () => C?.get(),
                (B) => {
                  const D = q.current;
                  if (B && D) {
                    var I = n.sheet.direction === "rtl";
                    D.style.position = B.position ?? "sticky";
                    D.style.top = B.top ?? "0px";
                    I
                      ? (D.style.right = B.right ?? "0px")
                      : (D.style.left = B.left ?? "0px");
                    D.style.transform = B.transform ?? "";
                  }
                }
              );
            }, [n.sheet, c, d]);
            I6(() => {
              const C = X6({
                sheet: n.sheet,
                zqa: !1,
                Aqa: !0,
                ba: c,
                viewport: d,
              });
              return L6(
                () => C?.get(),
                (B) => {
                  const D = t.current;
                  B &&
                    D &&
                    ((D.style.position = B.position ?? "sticky"),
                    (D.style.top = B.top ?? "0px"),
                    (D.style.transform = B.transform ?? ""));
                }
              );
            }, [n.sheet, c, d]);
            I6(() => {
              const C = X6({
                sheet: n.sheet,
                zqa: !0,
                Aqa: !1,
                ba: c,
                viewport: d,
              });
              return L6(
                () => C?.get(),
                (B) => {
                  const D = r.current;
                  if (B && D) {
                    var I = n.sheet.direction === "rtl";
                    D.style.position = B.position ?? "sticky";
                    I
                      ? (D.style.right = B.right ?? "0px")
                      : (D.style.left = B.left ?? "0px");
                    D.style.transform = B.transform ?? "";
                  }
                }
              );
            }, [n.sheet, c, d]);
            const v = F6(
                (C, B, D) =>
                  X6({ sheet: C, zqa: B, Aqa: D, ba: c, viewport: d }),
                [c, d]
              ),
              w = D6(
                () => (v ? () => v(n.sheet, !0, !1) : void 0),
                [v, n.sheet]
              ),
              z = D6(
                () => (v ? () => v(n.sheet, !1, !0) : void 0),
                [v, n.sheet]
              ),
              A = c?.get() ?? 1;
            return B6("div", {
              className: C6("OsKKIQ", "cbOp6Q"),
              children: [
                A6("div", {
                  className: "VDFv_A",
                  children: A6(k, {
                    sheet: n.sheet,
                    container: b,
                    kfa: "hidden",
                    dr: e,
                    gv: f,
                    mw: g,
                    ow: h,
                    J7: v,
                    ba: c,
                    viewport: d,
                    Gi: l,
                    IK: m,
                  }),
                }),
                A6("div", {
                  ref: q,
                  className: "_688KWg",
                  children: A6(IEc, { Vd: p, n0a: !1, er: XFc, scale: A }),
                }),
                A6("div", {
                  ref: t,
                  className: "m0cT1w",
                  children: A6(G6, {
                    sheet: n.sheet,
                    xd: A,
                    Od: A,
                    er: XFc,
                    ZH: YFc,
                    SI: WFc,
                    ABa: w,
                    zb: a,
                  }),
                }),
                A6("div", {
                  ref: r,
                  className: "zm537g",
                  children: A6(H6, {
                    sheet: n.sheet,
                    xd: A,
                    Od: A,
                    er: XFc,
                    ZH: YFc,
                    SI: WFc,
                    ABa: z,
                    zb: a,
                  }),
                }),
              ],
            });
          }),
          X6 = ({ sheet: a, zqa: b, Aqa: c, ba: d, viewport: e }) =>
            K6(() => {
              var f = e?.get().pb();
              const g = d?.get() ?? 1;
              if (!f) return {};
              const h = {};
              f = new ei(f.left, f.top);
              const k = a.direction === "rtl";
              h.position = "relative";
              c && (h.top = "0px");
              b && (k ? (h.right = "0px") : (h.left = "0px"));
              h.transform = `translate(${b ? f.x * g : 0}px, ${
                c ? f.y * g : 0
              }px)`;
              return h;
            });
        var aFc = class {
          constructor(a, b) {
            this.yl = a;
            this.zb = b;
            this.Vnb = __c.xV;
            this.pwb = T6((c, d, e, f) => {
              e = e.get();
              const g = new WeakMap();
              for (let v = 0; v < e.length; v++) {
                var h = e[v],
                  k = this.gwb(c, d, h);
                if (k) {
                  switch (k) {
                    case "start":
                    case "justify":
                      var l = e[v + 1];
                      if (l == null || !IC(c, this.zb, d, l)) continue;
                      break;
                    case "center":
                      l = e[v + 1];
                      if (l == null || !IC(c, this.zb, d, l)) continue;
                      l = e[v - 1];
                      if (l == null || !IC(c, this.zb, d, l)) continue;
                      break;
                    case "end":
                      l = e[v - 1];
                      if (l == null || !IC(c, this.zb, d, l)) continue;
                      break;
                    default:
                      throw new E(k);
                  }
                  if ((l = f(d, h))) {
                    var m = l.width + (k === "center" ? 0 : this.Vnb);
                    if (!(h.width > m)) {
                      switch (k) {
                        case "start":
                        case "justify":
                          k = this.zb.Qa.qa(c, h);
                          l = k + m;
                          break;
                        case "center":
                          l = this.zb.Qa.qa(c, h) + h.width / 2;
                          k = l - m / 2;
                          l += m / 2;
                          break;
                        case "end":
                          l = this.zb.Qa.qa(c, h) + h.width;
                          k = l - m;
                          break;
                        default:
                          throw new E(k);
                      }
                      for (m = e.indexOf(h); m >= 0; m--) {
                        var n = e[m],
                          p = m - 1 < 0 || IC(c, this.zb, d, e[m - 1]),
                          q;
                        if ((q = n === h || IC(c, this.zb, d, n))) {
                          q = k;
                          var r = l,
                            t = this.zb.Qa.qa(c, n);
                          q = q < t && t < r;
                        }
                        if (q && p) g.set(n, 1);
                        else break;
                      }
                      for (h = e.indexOf(h) + 1; h < e.length; h++) {
                        m = e[h];
                        if ((n = IC(c, this.zb, d, m)))
                          (n = k),
                            (p = l),
                            (q = this.zb.Qa.qa(c, m)),
                            (n = n < q && q < p);
                        if (n) g.set(m, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return g;
            });
            this.gwb = (c, d, e) => {
              const f = c.layout.cells.get(d, e);
              if (
                f &&
                (f.ref.content.ref || f.ref.Ea.ref) &&
                f.span.qc === f.span.Ad &&
                f.span.mc === f.span.ed
              ) {
                var g = this.yl.Jn(c, d, e);
                c = this.yl.tBa(
                  c,
                  d,
                  e,
                  __c.Of({ dh: void 0, textAlign: void 0 })
                );
                var { dh: h, textAlign: k } = __c.pf(Nf, c);
                if (h === "overflow")
                  return __c.lRa(
                    k,
                    f.ref.content.ref?.type,
                    f.ref.Ea.ref?.type,
                    g ? () => g.Kj.type : void 0
                  );
              }
            };
          }
        };
        var $Fc = E6(function (a) {
          const b = a.sheet;
          var c = a.zb,
            d = a.Gm;
          const e = a.GRb,
            f = a.ba,
            g = a.jDa,
            h = a.Uvb;
          a = a.overflow;
          const k = wEc();
          gFc(
            () =>
              J6(() => {
                const p = y(k.current),
                  q = f?.get() ?? 1,
                  r = b.height;
                p.style.width = `${b.width * q}px`;
                p.style.height = `${r * q}px`;
              }),
            [k, f, b]
          );
          const l = F6((p) => g.pwb(b, p, e, h), [g, b, e, h]);
          var m = F6((p, q) => l(p)?.get(q) ?? 0, [l]);
          c = sEc(b, c.layout.Xg.ym(b), c.layout.Xg.Uk(b), d, e, m);
          d = b.width;
          m = b.height;
          const n = b.direction === "rtl";
          return A6("svg", {
            ref: k,
            role: "presentation",
            className: C6("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${d} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, Sl: t, Tl: v }) =>
              A6(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: v,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: w, p2: z }) => `M ${w.x} ${w.y} L ${z.x} ${z.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${v}`
              )
            ),
          });
        });
        var aGc;
        aGc = Symbol.iterator;
        var bGc = class {
          get size() {
            return this.hqa;
          }
          get([a, b]) {
            return (a = this.BI.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.BI.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.BI.get(a);
            d == null && ((d = new Map()), this.BI.set(a, d));
            d.set(b, c);
            this.hqa++;
            return this;
          }
          clear() {
            this.BI.clear();
            this.hqa = 0;
          }
          delete([a, b]) {
            const c = this.BI.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.hqa--;
            c.size === 0 && this.BI.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.BI) for (const [d, e] of c) a([b, d], e);
          }
          *[aGc]() {
            for (const [a, b] of this.BI)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.hqa = 0;
            this.BI = new Map();
          }
        };
        var cGc,
          dGc,
          eGc,
          fGc,
          gGc,
          hGc,
          iGc,
          ZEc = __c.uc("285688d5", !1),
          jGc,
          kGc = class extends O6 {
            render() {
              const { $ia: a, ...b } = this.props,
                c = this.props.sheet;
              return B6("div", {
                ref: this.Bcb,
                className: C6(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  a?.LSa &&
                    A6(Y6, {
                      ...b,
                      sheet: c,
                      range: a.LSa.range,
                      By: !0,
                      Cy: !0,
                      className: "_0C8M3w",
                    }),
                  a?.dhb &&
                    A6(Y6, {
                      ...b,
                      sheet: c,
                      range: a.dhb.range,
                      By: !1,
                      Cy: !0,
                      className: "_7n44yg",
                    }),
                  a?.q0a &&
                    A6(Y6, {
                      ...b,
                      sheet: c,
                      range: a.q0a.range,
                      By: !0,
                      Cy: !1,
                      className: "fF5r6w",
                    }),
                  a?.Vfb &&
                    A6(Y6, {
                      ...b,
                      sheet: c,
                      range: a.Vfb.range,
                      By: !1,
                      Cy: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = J6(() => {
                var b = this.props,
                  c = b.ba;
                b = b.sheet;
                const d = this.Bcb.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.dc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.Bcb = zw();
            }
          };
        ({
          c: [jGc, eGc],
        } = V6(kGc, [], [oc], O6));
        eGc();
        var Y6;
        new ((cGc = class extends U6 {
          constructor() {
            super(Y6);
            fGc();
          }
        }),
        (() => {
          class a extends (gGc = O6) {
            static D(b) {
              M(b, { XKa: K6, bounds: K6 });
            }
            get XKa() {
              const b = this.props.viewport,
                c = this.props.By,
                d = this.props.Cy;
              return b == null || (!c && !d)
                ? b
                : K6(() => {
                    const e = b.get().pb();
                    return Di({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.PS,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.IK,
                g = this.props.By,
                h = this.props.Cy;
              return B6("div", {
                ref: this.rHa,
                className: C6("i0YQww", this.props.className),
                children: [
                  A6("div", {
                    ref: this.e8a,
                    className: "vUKoKg",
                    children: A6("div", {
                      ref: this.f8a,
                      children: A6(Z6, {
                        PS: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        dr: this.props.dr,
                        gv: this.props.gv,
                        qG: this.props.qG,
                        Gi: this.props.Gi,
                        B5: this.props.B5,
                        zb: this.props.zb,
                        ba: this.props.ba,
                        Gm: this.Gm,
                        pda: this.pda,
                        SX: this.SX,
                      }),
                    }),
                  }),
                  A6(this.pta, {}),
                  f && A6(f, { sheet: c, range: e, By: g, Cy: h }),
                ],
              });
            }
            componentDidMount() {
              const b = J6(() => {
                  var h = this.props,
                    k = h.ba,
                    l = h.sheet;
                  const m = h.zb;
                  var n = this.rHa.current;
                  const p = this.e8a.current;
                  h = this.f8a.current;
                  var q = this.bounds,
                    r = q.mc,
                    t = q.ed;
                  const v = q.qc;
                  q = q.Ad;
                  k = k ? k.get() : 1;
                  t =
                    t && r ? m.Qa.qa(l, t) + t.width - m.Qa.qa(l, r) : l.width;
                  q =
                    q && v
                      ? m.Qa.na(l, q) + q.height - m.Qa.na(l, v)
                      : l.height;
                  n &&
                    ((n.style.width = `${t * k}px`),
                    (n.style.height = `${q * k}px`));
                  p &&
                    ((p.style.width = `${t * k}px`),
                    (p.style.height = `${q * k}px`));
                  n = l.direction === "rtl";
                  r = r ? m.Qa.qa(l, r) * k * (n ? 1 : -1) : 0;
                  l = v ? -m.Qa.na(l, v) * k : 0;
                  h && (h.style.transform = `translate(${r}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.J7;
              const e = this.props.By,
                f = this.props.Cy,
                g = e || f ? d?.(c, e, f) : void 0;
              d = J6(() => {
                const h = this.rHa.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const q = g.get();
                    h.style.position = q.position ?? k;
                    h.style.top = q.top ?? l;
                    h.style.left = p ? "unset" : q.left ?? m;
                    h.style.right = p ? q.right ?? n : "unset";
                    h.style.transform = q.transform ?? "unset";
                  }
                }
              });
              __c.dc(this, [b, d]);
            }
            get bounds() {
              var b = this.props.sheet,
                c = this.props.zb,
                d = this.props.range;
              const e = c.layout.Xg.ym(b);
              b = c.layout.Xg.Uk(b);
              if (b.empty || e.empty)
                return { mc: void 0, ed: void 0, qc: void 0, Ad: void 0 };
              c = d.mc;
              const f = d.ed,
                g = d.qc;
              d = d.Ad;
              const h = b.first(),
                k = e.first(),
                l = b.last(),
                m = e.last();
              return {
                mc: c ? (b.has(c) ? c : void 0) : h,
                ed: f ? (b.has(f) ? f : void 0) : l,
                qc: g ? (e.has(g) ? g : void 0) : k,
                Ad: d ? (e.has(d) ? d : void 0) : m,
              };
            }
            constructor(...b) {
              super(...b);
              this.rHa = (Y6.D(this), zw());
              this.e8a = zw();
              this.f8a = zw();
              this.SX = new lGc();
              this.HRb = K6(
                () =>
                  [...this.Gm.get().keys()].sort((c, d) =>
                    this.props.zb.layout.Xg.ym(this.props.sheet).We(c, d)
                  ),
                { equals: __c.Ui() }
              );
              this.FRb = K6(
                () =>
                  [...this.pda.get().keys()].sort((c, d) =>
                    this.props.zb.layout.Xg.Uk(this.props.sheet).We(c, d)
                  ),
                { equals: __c.Ui() }
              );
              this.pta = E6(() =>
                A6(this.props.qkb, {
                  Gm: this.HRb,
                  GRb: this.FRb,
                  Uvb: this.SX.mja,
                  range: this.props.range,
                })
              );
              this.Gm = K6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.ba;
                  const e = this.props.zb;
                  var f = this.XKa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d;
                  const k = f ? f.ra.y - h : g.qc ? e.Qa.na(c, g.qc) : 0;
                  f = f
                    ? f.br.y + h
                    : g.Ad
                    ? e.Qa.na(c, g.Ad) + g.Ad.height
                    : 0;
                  h = new Map();
                  const l = e.layout.Xg.ym(c);
                  for (
                    let m = g.qc;
                    m != null && g.Ad != null && l.We(m, g.Ad) <= 0;
                    m = l.next(m)
                  ) {
                    const n = e.Qa.na(c, m);
                    if (!(n + m.height < k)) {
                      if (n > f) break;
                      h.set(m, n * d);
                    }
                  }
                  return h;
                },
                { equals: hFc.shallow }
              );
              this.pda = K6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.ba;
                  const e = this.props.zb;
                  var f = this.XKa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d;
                  const k = f ? f.ra.x - h : g.mc ? e.Qa.qa(c, g.mc) : 0;
                  f = f ? f.br.x + h : g.ed ? e.Qa.qa(c, g.ed) + g.ed.width : 0;
                  h = new Map();
                  const l = e.layout.Xg.Uk(c);
                  for (
                    let m = g.mc;
                    m != null && g.ed != null && l.We(m, g.ed) <= 0;
                    m = l.next(m)
                  ) {
                    const n = e.Qa.qa(c, m);
                    if (!(n + m.width < k)) {
                      if (n > f) break;
                      h.set(m, n * d);
                    }
                  }
                  return h;
                },
                { equals: hFc.shallow }
              );
            }
          }
          ({
            c: [Y6, fGc],
          } = V6(a, [], [oc], gGc));
        })(),
        cGc)();
        var lGc = class {
            constructor() {
              this.cells = new bGc();
              this.AIa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = R6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.mja = (a, b) => {
                let c = this.cells.get([a, b]);
                c == null &&
                  ((c = R6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], c));
                return c.get()?.aVa;
              };
            }
          },
          Z6;
        new ((dGc = class extends U6 {
          constructor() {
            super(Z6);
            hGc();
          }
        }),
        (() => {
          class a extends (iGc = O6) {
            static D(b) {
              M(b, { wP: R6.shallow, Ns: K6, kSa: S6, Cga: S6.bound });
            }
            get Ns() {
              const b = this.props.dr?.get();
              if (b != null && b.length !== 0) return new __c.ey(b);
            }
            render() {
              return B6("div", {
                onMouseDown: this.props.gv?.onMouseDown,
                onTouchStart: this.props.gv?.onTouchStart,
                ref: nFc(this.Yc, this.Ns?.Vi),
                children: [
                  A6("div", { ref: this.twa, className: "_5YlOqQ" }),
                  A6("div", { ref: this.vwa, className: "_XCmKw" }),
                  this.wP.map((b) => b.$Hb),
                ],
              });
            }
            componentDidMount() {
              const b = L6(
                  () => [
                    this.props.sheet,
                    this.props.pda.get(),
                    this.props.Gm.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.qob();
                    this.kSa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = J6(() => {
                  var e = this.props,
                    f = e.ba;
                  e = e.sheet;
                  const g = this.Yc.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.wP.map((e) => $Ec(e));
              __c.dc(this, [c, b, ...d]);
            }
            qob() {
              const b = y(this.twa.current),
                c = y(this.vwa.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.tOa.length = 0;
              this.wP.length = 0;
            }
            kSa(b, c) {
              const d = y(this.twa.current),
                e = y(this.vwa.current),
                f = [],
                g = new Map();
              for (const h of this.tOa)
                c.has(h.ua) ? g.set(h.ua, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new mGc(this.Cga, h)),
                    d.appendChild(c.Ffa),
                    e.appendChild(c.Hfa),
                    this.tOa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            Cga(b, c) {
              const d = this.props.B5,
                e = this.props.zb,
                f = this.props.sheet,
                g = this.props.container,
                h = this.props.SX;
              b = new nGc(
                this.props.PS,
                this.props.qG,
                this.props.Gi,
                d(b, c),
                e,
                f,
                b,
                c,
                g,
                h.AIa,
                this.xja,
                this.wja
              );
              __c.dc(this, $Ec(b));
              this.wP.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.Yc = (Z6.D(this), zw());
              this.twa = zw();
              this.vwa = zw();
              this.tOa = [];
              this.wP = [];
              this.xja = T6((c) => {
                const d = this.props.Gm.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.wja = T6((c) => {
                const d = this.props.pda.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [Z6, hGc],
          } = V6(a, [], [oc], iGc));
        })(),
        dGc)();
        var mGc = class {
            static D(a) {
              M(a, { update: S6 });
            }
            update(a, b, c) {
              [this.Ffa, this.Hfa].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.ua = b;
              for (const [d] of c)
                (c = this.wP.get(d)),
                  c ||
                    ((c = this.Cga(d, b)),
                    this.wP.set(d, c),
                    this.Ffa.appendChild(c.Efa),
                    this.Hfa.appendChild(c.FQ)),
                  c.update(b);
            }
            hide() {
              [this.Ffa, this.Hfa].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.Cga = a;
              this.ua = b;
              this.Ffa = (mGc.D(this), document.createElement("div"));
              this.Hfa = document.createElement("div");
              this.wP = new Map();
            }
          },
          nGc = class {
            static D(a) {
              M(a, {
                qga: R6.ref,
                ua: R6.ref,
                kCa: K6,
                update: S6,
                Rv: K6,
                attrs: K6.struct,
                PDa: K6,
                Zx: K6,
                renderer: K6,
                aVa: K6.struct,
              });
            }
            get kCa() {
              if (!ZEc) return !1;
              const a = this.Rv;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.PS(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.ua &&
                ((this.ua = a),
                (this.zC.ua = a),
                this.Wya && this.Wya(),
                (this.Wya = this.AIa(this.ua, this.col, this)));
            }
            get $Hb() {
              return this.qga;
            }
            get Rv() {
              const a = this.sheet.layout.cells.get(this.ua, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.zC.attrs;
              return {
                dh: a?.dh,
                textAlign: a?.textAlign,
                direction: a?.direction,
                link: a?.link,
                fontSize: a?.fontSize,
                color: a?.color,
                BD: a?.BD,
              };
            }
            get PDa() {
              var a = this.zC.span;
              if (!a) return !1;
              if (a.qc === a.Ad && a.mc === a.ed) return !0;
              var b = this.xja("first");
              const c = this.xja("last"),
                d = this.wja("first"),
                e = this.wja("last");
              if (!(b && c && d && e)) return !1;
              const f = this.zb.layout.Xg.ym(this.sheet),
                g = this.zb.layout.Xg.Uk(this.sheet);
              b = f.We(a.qc, b) >= 0 && f.We(a.qc, c) <= 0 ? a.qc : b;
              a = g.We(a.mc, d) >= 0 && g.We(a.mc, e) <= 0 ? a.mc : d;
              return b === this.ua && a === this.col;
            }
            get Zx() {
              const a = this.sheet,
                b = this.ua,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, ua: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.$R(c, b);
                case "sheet-item":
                  return this.container.$R(c, b);
                case "sheet-element":
                  return this.container.$R(c, b);
                default:
                  throw new E(this.container);
              }
            }
            get renderer() {
              const a = this.Rv;
              if (a && this.PDa && (a.content.ref || a.Ea.ref))
                return this.qG({
                  context: { container: this.Zx, attrs: this.attrs },
                  xr: this.iGa,
                  Gi: this.Gi,
                });
            }
            get aVa() {
              this.bVa.reportObserved();
              var a = jFc(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.gaa : this.jH),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
              this.PS = a;
              this.qG = b;
              this.zC = d;
              this.zb = e;
              this.sheet = f;
              this.col = g;
              this.container = k;
              this.AIa = l;
              this.xja = m;
              this.wja = n;
              this.Efa = (nGc.D(this), document.createElement("div"));
              this.FQ = document.createElement("div");
              this.aH = document.createElement("div");
              this.jH = document.createElement("div");
              this.gaa = document.createElement("div");
              this.bVa = iFc("content size atom");
              this.iGa = S6(() => this.bVa.reportChanged());
              this.ua = h;
              this.Efa.className = "_2JFriw";
              this.FQ.className = "imy9ug";
              this.aH.className = C6("pDMp7w", {
                _0yZ6Qg: this.Rv?.content.ref?.type !== "text3",
                qhF5uA:
                  this.Rv?.content.ref?.type !== "text3" &&
                  this.Rv?.content.ref?.type !== "text2",
                qxD1GA: this.kCa,
              });
              this.jH.className = "_30B9pw";
              this.aH.appendChild(this.jH);
              this.FQ.appendChild(this.aH);
              this.gaa.className = "G7zH2w";
              this.Wya = l(this.ua, this.col, this);
              this.Gi = (p) => A6(c, { ...p, xr: this.iGa });
            }
          };
        var oGc, pGc, qGc, M6;
        new ((oGc = class extends U6 {
          constructor() {
            super(M6);
            pGc();
          }
        }),
        (() => {
          class a extends (qGc = O6) {
            static D(b) {
              M(b, { $ia: K6 });
            }
            render() {
              const {
                  PS: b,
                  sheet: c,
                  container: d,
                  zb: e,
                  dr: f,
                  gv: g,
                  J7: h,
                  qG: k,
                  Se: l,
                  Gi: m,
                  viewport: n,
                  IK: p,
                  Tgb: q = !1,
                } = this.props,
                r = c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                t = e.layout.Xg.ym(c);
              if (!e.layout.Xg.Uk(c).empty && !t.empty)
                return A6("div", {
                  className: C6("SNkrHw", r, { RaA0Nw: q }),
                  ...l,
                  children: A6(jGc, {
                    PS: b,
                    qG: k,
                    Gi: m,
                    qkb: this.pta,
                    B5: this.B5,
                    zb: e,
                    sheet: c,
                    container: d,
                    dr: f,
                    gv: g,
                    J7: h,
                    ba: this.ba,
                    viewport: n,
                    IK: p,
                    $ia: this.$ia,
                  }),
                });
            }
            get $ia() {
              var b = this.props.sheet,
                c = this.props.zb;
              const d = {},
                e = b.view.freeze.vU
                  ? b.layout.he.get(b.view.freeze.vU)
                  : void 0,
                f = b.view.freeze.fH
                  ? b.layout.Yd.get(b.view.freeze.fH)
                  : void 0;
              var g = c.layout.Xg.ym(b),
                h = c.layout.Xg.Uk(b);
              b = g.first();
              c = g.last();
              const k = h.first(),
                l = h.last();
              if (b != null && c != null && k != null && l != null)
                return (
                  (h = f ? h.next(f) : k),
                  (g = e ? g.next(e) : b),
                  e && f && (d.LSa = { range: { mc: k, qc: b, ed: f, Ad: e } }),
                  e && h && (d.dhb = { range: { mc: h, qc: b, ed: l, Ad: e } }),
                  f && g && (d.q0a = { range: { mc: k, qc: g, ed: f, Ad: c } }),
                  g && h && (d.Vfb = { range: { mc: h, qc: g, ed: l, Ad: c } }),
                  d
                );
            }
            get ba() {
              return this.props.ba ? this.props.ba : K6(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.pta =
                (M6.D(this),
                E6((c) => {
                  const {
                    sheet: d,
                    zb: e,
                    jDa: f,
                    ba: g,
                    kfa: h = "hidden",
                  } = this.props;
                  return A6(W6, {
                    sheet: d,
                    zb: e,
                    range: c.range,
                    ba: g,
                    children: A6($Fc, {
                      ...c,
                      sheet: d,
                      zb: e,
                      ba: this.ba,
                      jDa: f,
                      overflow: h,
                    }),
                  });
                }));
              this.B5 = (c, d) =>
                new __c.ERa(
                  this.props.yl,
                  this.props.zb,
                  this.props.rC,
                  this.props.sheet,
                  c,
                  d,
                  this.ba,
                  this.mw,
                  this.ow
                );
              this.mw = (c, d) => this.props.mw?.(this.props.sheet, c, d);
              this.ow = (c, d) => this.props.ow?.(this.props.sheet, c, d);
            }
          }
          ({
            c: [M6, pGc],
          } = V6(a, [], [oc], qGc));
        })(),
        oGc)();
        __c.PRa = {
          fzb: function (a) {
            const b = a.ru,
              c = a.Td,
              d = a.Ld,
              e = a.Rn,
              f = a.yl,
              g = a.zb,
              h = a.rC,
              k = a.I3;
            EEc({ qC: a.qC, ag: a.ag, PNb: a.sU, bb: a.bb });
            const l = bFc({ qG: k, zb: g, yl: f, rC: h, XA: void 0 });
            b.Mta = WEc({ $r: l, zb: g });
            c.qta = MEc({ $r: l });
            ({ ukb: a } = TEc({ $r: l, je: e(), xcb: new RFc(), zb: g }));
            d.Jq.Lta = a;
            const { lib: m, mib: n, kib: p } = KEc({ zb: g });
            return {
              mQa: E6((q) =>
                A6(pFc, {
                  ...q,
                  container: void 0,
                  $r: l,
                  tkb: m,
                  vkb: n,
                  rkb: p,
                  Gi: qFc,
                })
              ),
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/22337fa72e8d55ca.js.map
