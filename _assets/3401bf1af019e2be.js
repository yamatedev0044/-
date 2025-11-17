(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [94260],
  {
    /***/ 697478: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(841953);
      __web_req__(563169);
      __web_req__(503407);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var nb = __c.nb;
        var E = __c.E;
        var K = __c.K;
        var TBc = function (a) {
            __c.Ilc({ ...a, G: a.span });
          },
          d6 = function (a, b) {
            var c = a.Oeb.get(b);
            if (c != null) return c;
            c = { value: a.pn.Jt(b) };
            a.Oeb.set(b, c);
            a.Geb.set(c, b);
            return c;
          },
          e6 = function (a, b) {
            a = a.Geb.get(b);
            if (a == null) throw new UBc("ref does not exists");
            return a;
          },
          VBc = function () {
            const a = (b) => {
              if (b?.type !== "text2") throw new f6("text2", b);
              return b.value;
            };
            return {
              Bl: (b) => ({ type: "text2", value: b }),
              Kt: (b) => {
                if (b?.type !== "text2") throw new g6("text2", b);
                return b.value;
              },
              Jt: a,
              sv: a,
            };
          },
          WBc = function (a) {
            const b = () => a.jl.AC.get(a.Cf.$i) || h6;
            return {
              BZ: function () {
                return a.jl.fl
                  ? 3
                  : a.jl.Syb === "checking" || a.jl.cd.status === 2
                  ? 1
                  : a.jl.cd.status === 3
                  ? 4
                  : a.jl.Ty
                  ? 2
                  : 0;
              },
              zBa: function () {
                const c = a.Cf,
                  { RJ: d } = b();
                return !(
                  !d ||
                  !c.fields.first(
                    ({ value: e }) =>
                      e.type === "select" &&
                      !!e.options.first(({ value: f }) => f.id === d)
                  )
                );
              },
              xwb: function (c, d) {
                const { results: e } = b();
                c = e.fields.get(c);
                if (!c) return 0;
                d = c.eJ.get(d) ?? 0;
                d = c.total > 0 ? (d / c.total) * 100 : 0;
                Number.isInteger(d) || (d = parseFloat(d.toFixed(1)));
                return d;
              },
              Ywb: function (c) {
                if (!a.Cf.fields.first(({ value: e }) => e.id === c)) return 0;
                var { results: d } = b();
                return (d = d.fields.get(c)) ? d.total : 0;
              },
              NBa: b,
              yDb: (c) => {
                const d = new Map(a.jl.AC);
                d.set(a.Cf.$i, { ...b(), ...c });
                return d;
              },
            };
          },
          $Bc = function (a, b, c, d, e, f) {
            function g() {
              const v = b.BZ(),
                w = q();
              return (p === "poll" || !w) && v === 0;
            }
            async function h() {
              const v = f.Ih("submit_response", {
                  $o: { name: "ui.rendering.form.submit_response" },
                }),
                w = {
                  VH: m,
                  Ria: p,
                  cs: "interacted",
                  action: "response_submitted",
                  location: "in_form",
                };
              e && TBc({ span: v, ia: e, event: __c.b3, props: w });
              const { results: z, fg: A, aIa: C } = r();
              if (A != null && g()) {
                var B = a.Cf.fields.first(
                  ({ value: P }) =>
                    P.type === "select" &&
                    !!P.options.first(({ value: Q }) => Q.id === A)?.value
                )?.value;
                if (B) {
                  l("selected_field_found", v);
                  var D = a.jl,
                    I = z;
                  p === "poll" &&
                    C &&
                    C !== A &&
                    (I = XBc({ sva: z, Ks: B.id, f0: C }));
                  I = YBc({ NVa: I, Ks: B.id, f0: A });
                  l("field_results_created", v);
                  i6(() => {
                    a.Tn(() => ({
                      AC: t({ fg: A, RJ: A, results: I }),
                      Ty: !0,
                    }));
                  });
                  l("submission_set", v);
                  v.YY();
                  var L = await c.UBb({
                    Or: a.Cf.Or,
                    $i: n,
                    Iua: [
                      {
                        type: 0,
                        Ks: B.id,
                        $l: B.label.text.V.trim(),
                        s1: [A],
                        options:
                          B.type === "select"
                            ? B.options.map(({ value: P }) => ({
                                id: P.id,
                                label: P.label.text.V.trim(),
                              }))
                            : [],
                      },
                    ],
                  });
                  if (L.ok)
                    return i6(() => {
                      const P = (Q) =>
                        !!L.value.result.YYa.get(B.id)?.feedback?.ND?.includes(
                          Q
                        );
                      a.Tn(() => ({
                        Ty: !1,
                        cd: { ...a.jl.cd, yka: P },
                        AC: t({ aIa: void 0 }),
                      }));
                    });
                  d?.Mx({
                    Yy: K("izckBA"),
                    group: ZBc,
                    bD: { Xx: K("mQhziQ"), onClick: h },
                  });
                  var N = XBc({ sva: I, Ks: B.id, f0: A });
                  C && (N = YBc({ NVa: N, Ks: B.id, f0: C }));
                  i6(() => {
                    a.Tn({
                      ...D,
                      ...(C && { AC: t({ fg: C, RJ: C, results: N }) }),
                    });
                  });
                } else v.abort();
              } else v.abort();
            }
            async function k(v) {
              const w = r(),
                z = a.Cf.fields.first(
                  ({ value: B }) =>
                    B.type === "select" &&
                    !!B.options.first(({ value: D }) => D.id === v)?.value
                )?.value;
              if (z) {
                var A = a.jl,
                  C = XBc({ sva: w.results, Ks: z.id, f0: v });
                i6(() => {
                  a.Tn(() => ({
                    AC: t({ fg: void 0, RJ: void 0, results: C }),
                    aA: void 0,
                    Ty: !0,
                  }));
                });
                (await c.P0({ $i: n })).ok
                  ? i6(() => {
                      a.Tn({ Ty: !1 });
                    })
                  : (d?.Mx({
                      Yy: K("kgHTHw"),
                      group: ZBc,
                      bD: { Xx: K("mQhziQ"), onClick: () => k(v) },
                    }),
                    i6(() => {
                      a.Tn(A);
                    }));
              }
            }
            function l(v, w) {
              w.addEvent(v);
              w.nd().addEvent(v);
            }
            const m = a.Cf.id,
              n = a.Cf.$i,
              p = a.Cf.type,
              q = b.zBa,
              r = b.NBa,
              t = b.yDb;
            return {
              submit: h,
              sFa: function () {
                a.Tn(() => ({ bV: 1 }));
              },
              tFa: function () {
                a.Tn(() => ({ bV: 0 }));
              },
              rFa: function () {
                a.Tn(() => ({ bV: 2 }));
              },
              uFa: function () {
                a.Tn(() => ({ bV: 1 }));
              },
              nra: function (v) {
                const w = r(),
                  z = p === "poll" && v === w?.fg && v === w?.RJ;
                if (g() && z) k(v);
                else if (
                  g() &&
                  a.Cf.fields.some(
                    ({ value: C }) =>
                      C.type === "select" &&
                      C.options.some(({ value: B }) => B.id === v)
                  )
                ) {
                  var A = w?.RJ;
                  i6(() => {
                    const C = r();
                    a.Tn(() => ({
                      AC: t({ aIa: A, fg: C.fg === v ? void 0 : v }),
                    }));
                  });
                  p === "poll" && h();
                }
              },
              tma: function (v) {
                g() &&
                  a.Cf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.Tn(() => ({ fI: v }));
              },
              uma: function (v) {
                b.BZ() === 0 &&
                  a.Cf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.jl.fI &&
                  a.Tn(() => ({ fI: void 0 }));
              },
              rma: function (v) {
                const { RJ: w, fg: z } = r();
                b.BZ() === 0 &&
                  a.Cf.fields.some(
                    ({ value: A }) =>
                      A.type === "select" &&
                      A.options.some(({ value: C }) => C.id === v)
                  ) &&
                  z !== v &&
                  !w &&
                  a.Tn(() => ({ aA: v }));
              },
              vma: function (v) {
                b.BZ() === 0 &&
                  a.Cf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.jl.aA &&
                  a.Tn(() => ({ aA: void 0 }));
              },
            };
          },
          XBc = function ({ sva: a, Ks: b, f0: c }) {
            const d = a.fields.get(b) ?? { id: b, eJ: new Map(), total: 0 },
              e = Math.max(0, (d.eJ.get(c) ?? 0) - 1),
              f = new Map(d.eJ);
            e > 0 ? f.set(c, e) : f.delete(c);
            return {
              fields: aCc(a.fields, b, {
                id: b,
                eJ: f,
                total: Math.max(0, d.total - 1),
              }),
            };
          },
          YBc = function ({ NVa: a, Ks: b, f0: c }) {
            const d = a.fields.get(b) ?? { id: b, eJ: new Map(), total: 0 },
              e = (d.eJ.get(c) ?? 0) + 1;
            return {
              fields: aCc(a.fields, b, {
                id: b,
                eJ: aCc(d.eJ, c, e),
                total: d.total + 1,
              }),
            };
          },
          aCc = function (a, b, c) {
            return new Map([...a.entries(), [b, c]]);
          },
          j6 = function (a, b) {
            __c.u(b.length > 0, "zero contrast candidates received");
            const c = new Map();
            return __c.Xi(b, (d) => {
              const e = c.get(d) ?? __c.im(d, a);
              c.set(d, e);
              return e;
            });
          },
          bCc = function (a, b) {
            return __c.aoc(a, b) >= 20 ? a : j6(b, k6);
          },
          l6 = function (a) {
            switch (a.type) {
              case "color":
                return a.color;
              case "gradient":
                return a.Ra.Gg[0].color;
              default:
                throw new E(a);
            }
          },
          m6 = function ({
            layout: a,
            direction: b,
            gap: c,
            padding: d,
            background: e,
            border: f,
            O: g,
            cells: h,
            ...k
          }) {
            a = a === "vertical";
            let l = [];
            const m = [],
              n = c && d,
              p = d ? 1 : 0;
            let q = 1;
            for (let r = 0; r < h.length; r++) {
              const t = h[r];
              typeof t.size === "string"
                ? l.push(t.size)
                : l.push(`${t.size}px`);
              m.push({
                ...t,
                id: t.id,
                placement: a
                  ? {
                      gridColumnStart: `${p + 1}`,
                      gridColumnEnd: `${p + 2}`,
                      gridRowStart: `${p + q}`,
                      gridRowEnd: `${p + q + 1}`,
                      padding: t.padding ? cCc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    }
                  : {
                      gridColumnStart: `${p + q}`,
                      gridColumnEnd: `${p + q + 1}`,
                      gridRowStart: `${p + 1}`,
                      gridRowEnd: `${p + 2}`,
                      padding: t.padding ? cCc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    },
              });
              q += n ? 2 : 1;
            }
            n && (l = l.join(` ${c}px `).split(" "));
            d && (l = [`${d}px`, ...l, `${d}px`]);
            return {
              ...k,
              type: "layout",
              cells: m,
              direction: b,
              fill: e,
              border: f,
              O: g,
              gridTemplateColumns: a
                ? d
                  ? [`${d}px`, "1fr", `${d}px`]
                  : ["1fr"]
                : l,
              gridTemplateRows: a
                ? l
                : d
                ? [`${d}px`, "auto", `${d}px`]
                : ["auto"],
              columnGap: n || a ? void 0 : c,
              rowGap: !n && a ? c : void 0,
            };
          },
          dCc = function ({
            padding: a,
            direction: b,
            background: c,
            O: d,
            xa: e,
            border: f,
            content: g,
            ref: h,
            key: k,
            ...l
          }) {
            return {
              ...l,
              type: "layout",
              direction: b,
              gridTemplateColumns: ["1fr"],
              gridTemplateRows: ["1fr"],
              fill: c,
              O: d,
              xa: e,
              border: f,
              cells: [
                {
                  id: "_",
                  content: g,
                  placement: {
                    gridColumnStart: "1",
                    gridColumnEnd: "2",
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    alignSelf: "center",
                    padding: a,
                  },
                },
              ],
              key: k,
              ref: h,
            };
          },
          cCc = function (a) {
            switch (a.length) {
              case 0:
                break;
              case 1:
                return a[0];
              case 2:
                return { na: a[0], Pa: a[1], Ba: a[0], qa: a[1] };
              case 4:
                return { na: a[0], Pa: a[1], Ba: a[2], qa: a[3] };
              default:
                throw Error(`Invalid padding value: ${a}`);
            }
          },
          n6 = function (a, b) {
            a = __c.Kk.create(__c.Kk.snapshot(a.text));
            b != null && a.setAttributes(b);
            return { type: "text", ZF: 1, text: __c.Kk.snapshot(a) };
          },
          o6 = function (a) {
            switch (a) {
              case "l":
                return 1;
              case "r":
                return 2;
              default:
                throw new E(a);
            }
          },
          p6 = function (a) {
            switch (a) {
              case "l":
                return "ltr";
              case "r":
                return "rtl";
              default:
                throw new E(a);
            }
          },
          eCc = function (a) {
            if (a)
              return {
                nra: a.nra,
                tma: a.tma,
                uma: a.uma,
                rma: a.rma,
                vma: a.vma,
              };
          },
          fCc = function ({ direction: a, text: b, background: c }) {
            return {
              id: "header",
              size: "auto",
              fill: c,
              padding: [20, 20, 16, 20],
              content: n6(b, { direction: p6(a) }),
            };
          },
          iCc = function ({
            direction: a,
            messages: b,
            $Ga: c,
            fontFamily: d,
            caa: e,
            O: f,
            state: g,
            kq: h,
            nt: k,
          }) {
            var l = h !== k,
              m = j6(k, k6);
            h = l ? h : m;
            m = bCc("#000000", k);
            var n = bCc(h, k);
            l = gCc(g, g === 3 && l ? n : m, l);
            b = {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
              fill: l,
              cells: [
                {
                  id: "text",
                  placement: {
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                    alignSelf: "center",
                  },
                  content: n6(c, {
                    direction: p6(a),
                    ...(g === 3 && { color: j6(h, k6) }),
                  }),
                },
                g === 3 || g === 4 || g === 5
                  ? {
                      id: "percentage",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: {
                        type: "text",
                        ZF: 0,
                        fontFamily: d,
                        fontWeight: "bold",
                        fontSize: hCc,
                        text: b.Voa(e),
                        textAlign: "end",
                        direction: p6(a),
                        color: g === 3 ? j6(h, k6) : j6(k, k6),
                      },
                    }
                  : void 0,
              ].filter(nb),
            };
            if (g !== 3 && g !== 4 && g !== 5) return b;
            c = e > 0;
            const p = e < 100;
            n = (k = (c && !p) || (!c && p)) ? 1 : 2;
            e = [c ? `${e}fr` : void 0, p ? `${100 - e}fr` : void 0].filter(nb);
            g = {
              type: "color",
              color: g === 3 ? h : m,
              xa: g === 3 ? 0 : 0.8,
            };
            return k
              ? { ...b, fill: c ? g : l }
              : {
                  type: "layout",
                  direction: o6(a),
                  gridTemplateRows: ["1fr"],
                  gridTemplateColumns: e,
                  fill: l,
                  cells: [
                    {
                      id: "bar",
                      O: f,
                      fill: g,
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: "2",
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: dCc({
                        direction: o6(a),
                        content: {
                          type: "text",
                          ZF: 0,
                          text: "",
                          fontFamily: d,
                          fontSize: hCc,
                          direction: p6(a),
                        },
                      }),
                    },
                    {
                      id: "optionTextWithPercentage",
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: `${n + 1}`,
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: b,
                    },
                  ],
                };
          },
          gCc = function (a, b, c) {
            switch (a) {
              case 0:
                return { type: "color", color: b, xa: 0.92 };
              case 1:
              case 5:
                return { type: "color", color: b, xa: 0.88 };
              case 2:
                return { type: "color", color: b, xa: 0.74 };
              case 3:
                return { type: "color", color: b, xa: c ? 0.5 : 0.92 };
              case 4:
                return { type: "color", color: b, xa: 0.92 };
              default:
                throw new E(a);
            }
          },
          jCc = function ({
            mvb: a,
            KS: b,
            Ks: c,
            direction: d,
            options: e,
            fg: f,
            fI: g,
            aA: h,
            ZGa: k,
            fontFamily: l,
            Bba: m,
            kq: n,
            nt: p,
            messages: q,
            dsa: r,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20],
              alignSelf: "center",
              content: m6({
                layout: "vertical",
                direction: o6(d),
                gap: 8,
                cells: e.map(({ value: t }) => {
                  var v = t.id === f;
                  const w = t.id === g,
                    z = t.id === h;
                  v = m ? (v ? 3 : w ? 5 : 4) : z ? 2 : w ? 1 : 0;
                  return {
                    id: t.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: r.option,
                      key: t.id,
                      O: k,
                      gn: () => b?.nra?.(t.id),
                      onMouseEnter: () => b?.tma?.(t.id),
                      onMouseLeave: () => b?.uma?.(t.id),
                      onMouseDown: () => b?.rma?.(t.id),
                      onMouseUp: () => b?.vma?.(t.id),
                      ...iCc({
                        messages: q,
                        $Ga: t.label,
                        direction: d,
                        fontFamily: l,
                        caa: a.xwb(c, t.id),
                        O: k,
                        state: v,
                        kq: n,
                        nt: p,
                      }),
                    },
                  };
                }),
              }),
            };
          },
          oCc = function (a) {
            const b = a.status,
              c = a.direction,
              d = a.backgroundColor,
              e = a.fontSize,
              f = a.fontFamily,
              g = j6(d, k6);
            switch (b) {
              case 0:
                return {
                  type: "text",
                  ZF: 1,
                  text: q6(
                    a.statusMessage ?? (a.messages.Os("live") || K("/iw6+Q")),
                    c,
                    j6(d, kCc),
                    g,
                    e,
                    f
                  ),
                };
              case 1:
                return {
                  type: "text",
                  ZF: 1,
                  text: q6(a.messages.loading(), c, j6(d, lCc), g, e, f),
                };
              case 2:
                return {
                  type: "text",
                  ZF: 1,
                  text: q6(a.messages.Vba(), c, j6(d, lCc), g, e, f),
                };
              case 3:
                return {
                  type: "text",
                  ZF: 1,
                  text: q6(a.messages.offline(), c, j6(d, mCc), g, e, f),
                };
              case 4:
                return {
                  type: "text",
                  ZF: 1,
                  text: q6(
                    a.messages.Os("somethingWentWrong") || K("ElTceA"),
                    c,
                    j6(d, nCc),
                    g,
                    e,
                    f
                  ),
                };
              default:
                throw new E(b);
            }
          },
          pCc = function ({
            direction: a,
            messages: b,
            GEb: c,
            status: d,
            cd: e,
            backgroundColor: f,
            fontSize: g,
            fontFamily: h,
          }) {
            e =
              e.status === 1
                ? e.data.cV?.type === "ANON"
                  ? b.t3()
                  : b.s3()
                : b.Os("live") || K("/iw6+Q");
            return [
              {
                id: "footer",
                size: "auto",
                padding: [0, 20, 20, 20],
                content: oCc({
                  messages: b,
                  status: d,
                  statusMessage: `${e} | ${b.m$(c)}`,
                  backgroundColor: f,
                  direction: a,
                  fontSize: g,
                  fontFamily: h,
                }),
              },
            ];
          },
          rCc = function (a, b, c, d, e, f, g) {
            const h = c.Cf;
            c = c.jl;
            const k = a.Hr;
            a = a.ot;
            b = b.border;
            const l = b.G$a,
              m = h.direction,
              n = h.fields.first()?.value;
            if (!n || n.type !== "select" || !k || !a)
              return {
                ...m6({
                  layout: "vertical",
                  direction: o6(m),
                  background: { type: "color", color: "#ffffff" },
                  cells: [],
                }),
                minWidth: h.minWidth,
                minHeight: h.minHeight,
              };
            const p = l6(k),
              q = l6(a);
            var r = n.options.first()?.value.label.text,
              t = (C) => C?.values().next().value,
              v =
                r?.stream.bi("font-size")["font-size"]?.values().next().value ||
                16;
            const w = t(r?.stream.bi("font-family")["font-family"]) || h.gY,
              z =
                t(r?.stream.bi("font-weight")["font-weight"]) ||
                __c.Kf.Ib["font-weight"];
            r =
              t(r?.stream.bi("font-style")["font-style"]) ||
              __c.Kf.Ib["font-style"];
            v *= qCc;
            t = d.zBa();
            const A = d.NBa();
            return {
              minWidth: h.minWidth,
              minHeight: h.minHeight,
              ...m6({
                layout: "vertical",
                direction: o6(m),
                background: a,
                O: l,
                border: b,
                cells: [
                  h.xM
                    ? void 0
                    : fCc({ direction: m, text: n.label, background: k }),
                  jCc({
                    mvb: d,
                    KS: eCc(e),
                    options: n.options,
                    fI: c.fI,
                    aA: c.aA,
                    fg: A.fg,
                    ZGa: n.O,
                    kq: p,
                    nt: q,
                    fontFamily: w,
                    direction: m,
                    Bba: t,
                    Ks: n.id,
                    messages: f,
                    dsa: g,
                  }),
                  ...pCc({
                    direction: m,
                    messages: f,
                    GEb: d.Ywb(n.id),
                    status: d.BZ(),
                    cd: c.cd,
                    backgroundColor: q,
                    fontSize: v,
                    fontFamily: w,
                    fontWeight: z,
                    fontStyle: r,
                  }),
                ].filter(nb),
              }),
              ref: g.root,
            };
          },
          sCc = function ({
            width: a,
            height: b,
            ke: c,
            color: d,
            Gzb: e,
            backgroundColor: f,
          }) {
            return {
              type: "shape",
              width: a,
              height: b,
              esa: { width: 16, height: 16 },
              gb: [
                {
                  d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                  stroke: { weight: c, color: d },
                  fill: { type: "color", color: d },
                },
                {
                  d: e
                    ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z"
                    : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                  fill: { type: "color", color: f },
                },
              ],
            };
          },
          vCc = function ({ direction: a, $Ga: b, nt: c, state: d }) {
            const e = bCc("#000000", c);
            return {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
              fill: tCc(d, e),
              cells: [
                {
                  id: "text",
                  placement: {
                    alignSelf: "center",
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                  },
                  content: (() => {
                    switch (d) {
                      case 5:
                        return n6(b, { direction: p6(a), color: "#00873d" });
                      case 6:
                        return n6(b, { direction: p6(a), color: "#c8001e" });
                      case 4:
                        return n6(b, { direction: p6(a), color: j6(c, uCc) });
                      default:
                        return n6(b, { direction: p6(a) });
                    }
                  })(),
                },
                d === 5 || d === 6
                  ? {
                      id: "validation",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: sCc({
                        width: 18,
                        height: 18,
                        ke: 1.6,
                        Gzb: d === 5,
                        color: d === 5 ? "#00873d" : "#c8001e",
                        backgroundColor: "#ffffff",
                      }),
                    }
                  : void 0,
              ].filter(nb),
            };
          },
          tCc = function (a, b) {
            switch (a) {
              case 0:
                return { type: "color", color: b, xa: 0.92 };
              case 1:
                return { type: "color", color: b, xa: 0.74 };
              case 2:
                return { type: "color", color: b, xa: 0.88 };
              case 3:
                return { type: "color", color: b, xa: 0.74 };
              case 4:
                return { type: "color", color: b, xa: 0.9 };
              case 5:
                return { type: "color", color: "#e3fff0", xa: 0 };
              case 6:
                return { type: "color", color: "#ffd9df", xa: 0 };
              default:
                throw new E(a);
            }
          },
          wCc = function ({
            KS: a,
            direction: b,
            options: c,
            cd: d,
            fg: e,
            fI: f,
            aA: g,
            ZGa: h,
            nt: k,
            Bba: l,
            dsa: m,
            context: n,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20, 10, 20],
              alignSelf: "center",
              content: m6({
                layout: "vertical",
                direction: o6(b),
                gap: 8,
                cells: c.map(({ value: p }) => {
                  var q = p.id === e;
                  const r = d.status === 1,
                    t = p.id === f,
                    v = p.id === g;
                  q =
                    r && l && n.mode !== "edit"
                      ? d.data.yka(p.id)
                        ? 5
                        : q
                        ? 6
                        : 4
                      : n.mode === "edit"
                      ? r && d.data.yka(p.id)
                        ? 5
                        : 4
                      : q
                      ? 1
                      : v
                      ? 3
                      : t
                      ? 2
                      : 0;
                  return {
                    id: p.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: m.option,
                      key: p.id,
                      O: h,
                      gn: () => a?.nra?.(p.id),
                      onMouseEnter: () => a?.tma?.(p.id),
                      onMouseLeave: () => a?.uma?.(p.id),
                      onMouseDown: () => a?.rma?.(p.id),
                      onMouseUp: () => a?.vma?.(p.id),
                      ...vCc({ direction: b, $Ga: p.label, nt: k, state: q }),
                    },
                  };
                }),
              }),
            };
          },
          xCc = function ({
            direction: a,
            text: b,
            mX: c,
            nX: d,
            KS: e,
            fontSize: f,
            fontFamily: g,
            fontWeight: h,
            fontStyle: k,
          }) {
            const l = k6.includes(c),
              { h: m, s: n, pa: p } = __c.Zl(c);
            var q = new __c.Rl(m, n, p < 10 ? p + 6 : p - 6);
            q = __c.$l(q);
            var r = new __c.Rl(m, n, p < 10 ? p + 10 : p - 10);
            r = __c.$l(r);
            return {
              id: "submit",
              size: "auto",
              padding: [0, 20],
              content: dCc({
                direction: o6(a),
                gn: e?.submit,
                onMouseEnter: e?.sFa,
                onMouseLeave: e?.tFa,
                onMouseDown: e?.rFa,
                onMouseUp: e?.uFa,
                background: {
                  type: "color",
                  color: d === 2 ? r : d === 1 ? q : c,
                  xa: e?.submit ? (l ? 0.1 : void 0) : 0.6,
                },
                O: 24,
                padding: 12,
                content: n6(b, {
                  direction: p6(a),
                  "font-size": f,
                  "font-family": g,
                  "font-weight": h,
                  "font-style": k,
                }),
              }),
            };
          },
          yCc = function ({
            KS: a,
            direction: b,
            messages: c,
            Xx: d,
            kq: e,
            status: f,
            cd: g,
            fg: h,
            backgroundColor: k,
            Bba: l,
            bV: m,
            k7: n,
            fontFamily: p,
            fontWeight: q,
            fontStyle: r,
          }) {
            if (!l || !g || !h)
              return (
                (h = e === k ? j6(e, k6) : e),
                (g =
                  g?.status === 1
                    ? g.data.cV?.type === "ANON"
                      ? c.t3()
                      : c.s3()
                    : void 0),
                [
                  xCc({
                    direction: b,
                    text: d,
                    mX: h,
                    nX: m,
                    KS: a,
                    fontSize: n.label,
                    fontFamily: p,
                    fontWeight: q,
                    fontStyle: r,
                  }),
                  {
                    id: "quiz_status",
                    size: "auto",
                    padding: [8, 20, 10, 20],
                    content: oCc({
                      status: f,
                      statusMessage: g,
                      messages: c,
                      direction: b,
                      backgroundColor: k,
                      fontSize: n.message,
                      fontFamily: p,
                    }),
                  },
                ]
              );
            a = j6(k, k6);
            return [
              {
                id: "quiz_results_footer",
                size: "auto",
                padding: [20, 20, 24, 20],
                content: m6({
                  layout: "vertical",
                  direction: o6(b),
                  cells: [
                    {
                      id: "quiz_result",
                      size: "auto",
                      content: {
                        type: "text",
                        ZF: 0,
                        fontFamily: p,
                        text: g.data.yka(h) ? c.x5() : c.w8(),
                        fontSize: n.label,
                        fontWeight: "bold",
                        textAlign: "center",
                        direction: p6(b),
                        color: a,
                      },
                    },
                    {
                      id: "quiz_message",
                      size: "auto",
                      content: {
                        type: "text",
                        ZF: 0,
                        fontFamily: p,
                        text: c.Kaa(),
                        fontSize: n.message,
                        xa: 0.2,
                        textAlign: "center",
                        direction: p6(b),
                        color: a,
                      },
                    },
                  ],
                }),
              },
            ];
          },
          ACc = function (a, b, c, d, e, f, g, h) {
            const k = c.Cf;
            c = c.jl;
            var l = a.Hr;
            a = a.ot;
            b = b.border;
            const m = b.G$a,
              n = k.direction;
            var p = k.fields.first()?.value;
            if (!p || p.type !== "select" || !l || !a)
              return {
                ...m6({
                  layout: "vertical",
                  direction: o6(n),
                  background: { type: "color", color: "#ffffff" },
                  cells: [],
                }),
                minWidth: k.minWidth,
                minHeight: k.minHeight,
              };
            const q = l6(l),
              r = l6(a),
              t = d.BZ(),
              v = c.cd.status === 1 && c.cd,
              w = d.zBa() && v && t === 0;
            var z = p.options.first()?.value.label.text,
              A = (P) => P?.values().next().value,
              C =
                z?.stream.bi("font-size")["font-size"]?.values().next().value ||
                16;
            const B = A(z?.stream.bi("font-family")["font-family"]) || k.gY,
              D =
                A(z?.stream.bi("font-weight")["font-weight"]) ||
                __c.Kf.Ib["font-weight"];
            z =
              A(z?.stream.bi("font-style")["font-style"]) ||
              __c.Kf.Ib["font-style"];
            A = C * zCc;
            C *= qCc;
            d = d.NBa();
            var I = k.minWidth,
              L = k.minHeight,
              N = o6(n);
            l = k.xM
              ? void 0
              : fCc({ direction: n, text: p.label, background: l });
            p = wCc({
              KS: eCc(e),
              direction: n,
              options: p.options,
              cd: c.cd,
              fI: c.fI,
              aA: c.aA,
              fg: d.fg,
              ZGa: p.O,
              nt: r,
              Bba: w,
              dsa: g,
              context: h,
            });
            e = e
              ? {
                  submit: e.submit,
                  sFa: e.sFa,
                  tFa: e.tFa,
                  rFa: e.rFa,
                  uFa: e.uFa,
                }
              : void 0;
            return {
              minWidth: I,
              minHeight: L,
              ...m6({
                layout: "vertical",
                direction: N,
                background: a,
                O: m,
                border: b,
                cells: [
                  l,
                  p,
                  ...yCc({
                    KS: e,
                    direction: n,
                    messages: f,
                    Xx: k.footer.label,
                    kq: q,
                    status: t,
                    Bba: w && h.mode !== "edit",
                    cd: v ? v : void 0,
                    fg: d.fg,
                    backgroundColor: r,
                    bV: c.bV,
                    k7: { label: A, message: C },
                    fontFamily: B,
                    fontWeight: D,
                    fontStyle: z,
                  }),
                ].filter(nb),
              }),
              ref: g.root,
            };
          },
          BCc = class {
            constructor() {
              this.type = "layout";
            }
          },
          r6 = __webpack_require__(186901),
          s6 = r6.EW,
          i6 = r6.h5,
          CCc = r6.mJ,
          DCc = r6.sH,
          ECc = r6.XI;
        var FCc = class {
            static D(a) {
              __c.M(a, { eXa: s6 });
            }
            get eXa() {
              const a = [];
              for (const b of this.list.value) {
                const c = d6(this, b);
                if (c === void 0)
                  throw new UBc(
                    "undefined value found when deserializing list."
                  );
                a.push(c);
              }
              return a;
            }
            count() {
              return this.list.value.count();
            }
            toArray() {
              return this.eXa.map(({ value: a }) => a);
            }
            first(a) {
              const b = this.list.value.first(
                a ? (c) => a(d6(this, c)) : void 0
              );
              if (b != null) return d6(this, b);
            }
            last(a) {
              const b = this.list.value.last(
                a ? (c) => a(d6(this, c)) : void 0
              );
              if (b != null) return d6(this, b);
            }
            next(a, b) {
              var c = b ? (d) => b(d6(this, d)) : void 0;
              a = e6(this, a);
              c = this.list.value.next(a, c);
              if (c != null) return d6(this, c);
            }
            previous(a, b) {
              var c = b ? (d) => b(d6(this, d)) : void 0;
              a = e6(this, a);
              c = this.list.value.previous(a, c);
              if (c != null) return d6(this, c);
            }
            map(a) {
              return this.list.value.map((b, c) => a(d6(this, b), c));
            }
            filter(a) {
              return this.list.value
                .filter((b, c) => a(d6(this, b), c))
                .map((b) => d6(this, b));
            }
            forEach(a) {
              return this.list.value.forEach((b, c) => a(d6(this, b), c));
            }
            some(a) {
              return this.list.value.some((b) => a(d6(this, b)));
            }
            constructor(a, b) {
              this.pn = b;
              this.Oeb = (FCc.D(this), new WeakMap());
              this.Geb = new WeakMap();
              __c.x(a.type === "list");
              this.list = a;
            }
          },
          GCc = class extends FCc {
            replace(a, b) {
              a = e6(this, a);
              b = this.list.value.replace(a, this.pn.Bl(b));
              return d6(this, b);
            }
            mI(a, b) {
              a = a != null ? e6(this, a) : void 0;
              b = this.list.value.mI(a, this.pn.Bl(b));
              return d6(this, b);
            }
            EE(a, b) {
              a = a != null ? e6(this, a) : void 0;
              return this.list.value
                .EE(
                  a,
                  b.map((c) => this.pn.Bl(c))
                )
                .map((c) => d6(this, c));
            }
            insertBefore(a, b) {
              a = a != null ? e6(this, a) : void 0;
              b = this.list.value.insertBefore(a, this.pn.Bl(b));
              return d6(this, b);
            }
            append(a) {
              a = this.list.value.append(this.pn.Bl(a));
              return d6(this, a);
            }
            prepend(a) {
              a = this.list.value.prepend(this.pn.Bl(a));
              return d6(this, a);
            }
            delete(a) {
              a = e6(this, a);
              this.list.value.delete(a);
            }
            CA(a) {
              this.list.value.CA(a ? (b) => a(d6(this, b)) : void 0);
            }
            moveBefore(a, b) {
              a = a == null ? void 0 : e6(this, a);
              b = e6(this, b);
              this.list.value.moveBefore(a, b);
            }
          };
        var u6 = class {
            static string(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "string")
                  throw d === "toWidgetData"
                    ? new f6("string", c)
                    : new g6("string", c);
                return c.value;
              };
              return {
                Bl: (c) => ({ type: "string", value: c }),
                Kt: (c) => b(c, "toWidgetState"),
                Jt: (c) => b(c, "toWidgetData"),
                sv: (c) => b(c, "toWidgetData"),
              };
            }
            static literal(a, b) {
              if (a.length === 0)
                throw new t6(
                  "At least one value must be provided for literal types."
                );
              const c = new Set(a),
                d = (e, f) => {
                  if (e == null && b != null) return b;
                  if (e?.type !== "string" || !c.has(e.value))
                    throw f === "toWidgetData"
                      ? new f6("literal", e)
                      : new g6("literal", e);
                  return e.value;
                };
              return {
                Bl: (e) => ({ type: "string", value: e }),
                Kt: (e) => d(e, "toWidgetState"),
                Jt: (e) => d(e, "toWidgetData"),
                sv: (e) => d(e, "toWidgetData"),
              };
            }
            static integer(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (
                  c?.type !== "int32" ||
                  !Number.isFinite(c.value) ||
                  !Number.isInteger(c.value)
                )
                  throw d === "toWidgetData"
                    ? new f6("integer", c)
                    : new g6("integer", c);
                return c.value;
              };
              return {
                Bl: (c) => {
                  if (!Number.isFinite(c) || !Number.isInteger(c))
                    throw new HCc("integer", c);
                  return { type: "int32", value: c };
                },
                Kt: (c) => b(c, "toWidgetState"),
                Jt: (c) => b(c, "toWidgetData"),
                sv: (c) => b(c, "toWidgetData"),
              };
            }
            static double(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "double" || !Number.isFinite(c.value))
                  throw d === "toWidgetData"
                    ? new f6("double", c)
                    : new g6("double", c);
                return c.value;
              };
              return {
                Bl: (c) => {
                  if (!Number.isFinite(c)) throw new HCc("double", c);
                  return { type: "double", value: c };
                },
                Kt: (c) => b(c, "toWidgetState"),
                Jt: (c) => b(c, "toWidgetData"),
                sv: (c) => b(c, "toWidgetData"),
              };
            }
            static ah(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "boolean")
                  throw d === "toWidgetData"
                    ? new f6("boolean", c)
                    : new g6("boolean", c);
                return c.value;
              };
              return {
                Bl: (c) => ({ type: "boolean", value: c }),
                Kt: (c) => b(c, "toWidgetState"),
                Jt: (c) => b(c, "toWidgetData"),
                sv: (c) => b(c, "toWidgetData"),
              };
            }
            static fill() {
              const a = (b) => {
                if (b?.type !== "fill") throw new f6("fill", b);
                return b.value;
              };
              return {
                Bl: (b) => ({ type: "fill", value: b }),
                Kt: (b) => {
                  if (b?.type !== "fill") throw new g6("fill", b);
                  return b.value;
                },
                Jt: a,
                sv: a,
              };
            }
            static stroke() {
              const a = (b) => {
                if (b?.type !== "stroke") throw new f6("stroke", b);
                return b.value;
              };
              return {
                Bl: (b) => ({ type: "stroke", value: b }),
                Kt: (b) => {
                  if (b?.type !== "stroke") throw new g6("stroke", b);
                  return b.value;
                },
                Jt: a,
                sv: a,
              };
            }
            static Vb(a) {
              const b = new Set();
              for (const d of Object.keys(a)) {
                const [e] = a[d];
                if (b.has(e))
                  throw new t6(
                    `Duplicate serialized keys "${e}" found in record schema.`
                  );
                b.add(e);
              }
              const c = (d, e) => {
                if (e?.type !== "dict") throw new f6("record", e);
                const f = {};
                for (const g of Object.keys(a)) {
                  const [h, k] = a[g],
                    l = s6(
                      () => {
                        const m = e.value.get(h);
                        return k.Jt(m);
                      },
                      { keepAlive: !0 }
                    );
                  Object.defineProperty(f, g, {
                    get() {
                      return l.get();
                    },
                    set(m) {
                      d !== "readonly" &&
                        ((m = k.Bl(m)),
                        m == null ? e.value.delete(h) : e.value.set(h, m));
                    },
                    enumerable: !0,
                  });
                }
                return f;
              };
              return {
                Bl: (d) => {
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.Bl(d[f]);
                    k != null && (e[g] = k);
                  }
                  return { type: "dict", value: new Map(Object.entries(e)) };
                },
                Kt: (d) => {
                  if (d?.type !== "dict") throw new g6("record", d);
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.Kt(d.value.get(g));
                    k != null && (e[f] = k);
                  }
                  return e;
                },
                Jt: (d) => c("editable", d),
                sv: (d) => c("readonly", d),
                ub: (d) => u6.Vb({ ...a, ...d }),
              };
            }
            static list(a) {
              return {
                Bl: (b) => ({ type: "list", value: b.map((c) => a.Bl(c)) }),
                Kt: (b) => {
                  if (b?.type !== "list") throw new g6("list", b);
                  return b.value.filter(nb).map((c) => a.Kt(c));
                },
                Jt: (b) => {
                  if (b?.type !== "list") throw new f6("list", b);
                  return new GCc(b, a);
                },
                sv: (b) => {
                  if (b?.type !== "list") throw new f6("list", b);
                  return new FCc(b, a);
                },
              };
            }
            static optional(a) {
              return {
                Bl: (b) => {
                  if (b != null) return a.Bl(b);
                },
                Kt: (b) => {
                  if (b != null) return a.Kt(b);
                },
                Jt: (b) => {
                  if (b != null) return a.Jt(b);
                },
                sv: (b) => {
                  if (b != null) return a.sv(b);
                },
              };
            }
            static union(a, b) {
              const c = new Set(Object.keys(a)),
                d = (e) => {
                  if (e?.type !== "dict") throw new f6("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new f6("union", e);
                  return { Bfa: a[f], Cfa: g };
                };
              return {
                Bl: (e) => {
                  const f = b(e);
                  return {
                    type: "dict",
                    value: new Map([
                      ["k", { type: "string", value: f }],
                      ["v", a[f].Bl(e)],
                    ]),
                  };
                },
                Kt: (e) => {
                  if (e?.type !== "dict") throw new g6("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new g6("union", e);
                  const { Bfa: h, Cfa: k } = { Bfa: a[f], Cfa: g };
                  return h.Kt(k);
                },
                Jt: (e) => {
                  const { Bfa: f, Cfa: g } = d(e);
                  return f.Jt(g);
                },
                sv: (e) => {
                  const { Bfa: f, Cfa: g } = d(e);
                  return f.sv(g);
                },
              };
            }
          },
          t6 = class extends Error {
            constructor(a) {
              super(a);
              this.name = "SchemaError";
            }
          },
          UBc = class extends t6 {
            constructor(a) {
              super(`ListError: ${a}`);
            }
          },
          f6 = class extends t6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget data`);
            }
          },
          g6 = class extends t6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget state`);
            }
          },
          HCc = class extends t6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of document state`);
            }
          };
        var h6 = {
            fg: void 0,
            RJ: void 0,
            aIa: void 0,
            results: { fields: new Map() },
          },
          ICc = {
            cd: { status: 2 },
            AC: new Map(),
            bV: 0,
            fI: void 0,
            aA: void 0,
            lCa: !1,
            Syb: "unchecked",
            Ty: !1,
            fl: !1,
          };
        var JCc = u6.Vb({
            type: ["t", u6.literal(["text2"], "text2"), "readonly"],
            text: ["te", VBc()],
          }),
          KCc = u6.union({ text2: JCc }, (a) => a.type),
          LCc = u6.Vb({ id: ["i", u6.string("")], label: ["l", KCc] }),
          MCc = u6.list(LCc),
          NCc = u6.list(u6.string("")),
          OCc = u6.Vb({
            id: ["i", u6.string("")],
            label: ["l", KCc],
            r9: ["tl", u6.literal(["c", "u"], "c")],
            required: ["rq", u6.ah(!1)],
            O: ["c", u6.double(0)],
          }),
          PCc = u6.Vb({ type: ["t", u6.literal(["r"], "r"), "readonly"] }),
          QCc = u6.Vb({ type: ["t", u6.literal(["p"], "p"), "readonly"] }),
          RCc = u6.Vb({ type: ["t", u6.literal(["q"], "q"), "readonly"] }),
          SCc = u6.union({ r: PCc, p: QCc, q: RCc }, (a) => a.type),
          TCc = OCc.ub({
            type: ["t", u6.literal(["select"], "select"), "readonly"],
            variant: ["v", u6.optional(SCc)],
            options: ["o", MCc],
            K_: ["m", u6.optional(u6.integer(1))],
            y5: ["co", NCc],
          }),
          UCc = u6.Vb({ type: ["t", u6.literal(["e"], "e"), "readonly"] }),
          VCc = u6.Vb({
            type: ["t", u6.literal(["f"], "f"), "readonly"],
            vN: ["n", u6.integer(1)],
          }),
          WCc = u6.union({ e: UCc, f: VCc }, (a) => a.type),
          XCc = OCc.ub({
            type: ["t", u6.literal(["text"], "text"), "readonly"],
            placeholder: ["p", u6.string("")],
            variant: ["v", WCc],
          }),
          YCc = u6.Vb({ type: ["t", u6.literal(["a"], "a"), "readonly"] }),
          ZCc = u6.Vb({ type: ["t", u6.literal(["b"], "b"), "readonly"] }),
          $Cc = u6.Vb({ type: ["t", u6.literal(["c"], "c"), "readonly"] }),
          aDc = u6.Vb({ type: ["t", u6.literal(["d"], "d"), "readonly"] }),
          bDc = u6.union({ a: YCc, b: ZCc, c: $Cc, d: aDc }, (a) => a.type),
          cDc = OCc.ub({
            type: ["t", u6.literal(["number"], "number"), "readonly"],
            variant: ["v", bDc],
            min: ["a", u6.optional(u6.double())],
            max: ["b", u6.optional(u6.double())],
          }),
          dDc = u6.union(
            { select: TCc, text: XCc, number: cDc },
            (a) => a.type
          ),
          eDc = u6.list(dDc),
          fDc = u6.Vb({ label: ["l", KCc] }),
          gDc = u6.Vb({}),
          hDc = u6.Vb({
            label: ["A", VBc()],
            r9: ["tl", u6.literal(["c", "u"])],
            background: ["B", u6.optional(u6.fill())],
          }),
          iDc = u6.literal(["l", "r"], "l"),
          jDc = u6.Vb({
            minHeight: ["mh", u6.double(1)],
            minWidth: ["mw", u6.double(1)],
            type: ["t", u6.literal(["poll", "quiz"], "poll"), "readonly"],
            id: ["i", u6.string()],
            $i: ["s", u6.string()],
            Or: ["a", u6.optional(u6.string())],
            direction: ["r", iDc],
            gY: ["d", u6.string("")],
            Hr: ["pf", u6.fill()],
            ot: ["sf", u6.fill()],
            border: ["b", u6.stroke()],
            O: ["c", u6.double(0)],
            xM: ["hh", u6.ah(!1)],
            lLa: ["z", u6.ah(!0)],
            pWa: ["h", u6.optional(gDc)],
            header: ["j", u6.optional(hDc)],
            fields: ["f", eDc],
            footer: ["fo", u6.optional(fDc)],
          }),
          kDc = u6.union({ poll: jDc, quiz: jDc }, (a) => a.type);
        var ZBc = Symbol("UNABLE_TO_SUBMIT");
        var lDc = {
            resultsPercentage: 0,
            yourNameWillBeShared: 1,
            incorrectLabel: 2,
            responseSaved: 3,
            submitting: 4,
            loading: 5,
            numVotes: 6,
            offline: 7,
            yourNameWontBeShared: 8,
            somethingWentWrong: 9,
            correctLabel: 10,
            live: 11,
          },
          mDc = class {
            static D(a) {
              __c.M(a, { A2: DCc.ref });
            }
            async SCa(a) {
              const b = await a;
              i6(() => {
                const c = JSON.parse(b),
                  d = new Map();
                for (const e in c) d.set(e, Object.values(c[e]));
                this.A2 = d;
              });
            }
            Os(a) {
              return (this.A2?.get(this.document.language || "en") || [])[
                lDc[a]
              ];
            }
            x5() {
              return this.Os("correctLabel") || K("i3mNPA");
            }
            w8() {
              return this.Os("incorrectLabel") || K("As1GTA");
            }
            Kaa() {
              return this.Os("responseSaved") || K("xSH8Og");
            }
            m$(a) {
              const b = this.Os("numVotes");
              return b
                ? __c.$nc(b, [a], this.document.language)
                : __c.qb("6QpLYA", [a]);
            }
            Voa(a) {
              const b = this.Os("resultsPercentage");
              return b
                ? __c.$nc(b, [a], this.document.language)
                : __c.qb("sUWUOA", [a]);
            }
            offline() {
              return this.Os("offline") || K("nFbxIQ");
            }
            loading() {
              return this.Os("loading") || K("2Q9Q+A");
            }
            Vba() {
              return this.Os("submitting") || K("wutQEA");
            }
            t3() {
              return this.Os("yourNameWontBeShared") || K("Gzs/9g");
            }
            s3() {
              return this.Os("yourNameWillBeShared") || K("WjcAyg");
            }
            constructor(a, b) {
              this.document = a;
              this.A2 = (mDc.D(this), void 0);
              this.SCa(b);
            }
          };
        var oDc = class extends mDc {
          constructor(a) {
            const b = __webpack_require__
              .me(253210)
              .then(() => __c.nDc)
              .then(({ kK: c }) => c);
            super(a, b);
          }
        };
        var pDc = class {
          static D(a) {
            __c.M(a, { border: s6 });
          }
          get border() {
            const a = this.AA.Cf;
            a.border.weight &&
              !a.border.color &&
              this.J &&
              this.J.error(
                "Form widget borders cannot have weight without a color"
              );
            return { weight: a.border.weight, color: a.border.color, G$a: a.O };
          }
          constructor(a, b) {
            this.AA = a;
            this.J = b;
            pDc.D(this);
          }
        };
        var qDc = class {
          static D(a) {
            __c.M(a, { Hr: s6, ot: s6, kq: s6, nt: s6 });
          }
          get Hr() {
            const a = this.AA.Cf.Hr.color,
              b = this.AA.Cf.Hr.Ra;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Ra: b.ref };
          }
          get ot() {
            const a = this.AA.Cf.ot.color,
              b = this.AA.Cf.ot.Ra;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Ra: b.ref };
          }
          get kq() {
            if (!this.Hr) return "#000000";
            switch (this.Hr.type) {
              case "color":
                return this.Hr.color;
              case "gradient":
                return this.Hr.Ra.Gg[0].color;
              default:
                throw new E(this.Hr);
            }
          }
          get nt() {
            if (!this.ot) return "#000000";
            switch (this.ot.type) {
              case "color":
                return this.ot.color;
              case "gradient":
                return this.ot.Ra.Gg[0].color;
              default:
                throw new E(this.ot);
            }
          }
          constructor(a) {
            this.AA = a;
            qDc.D(this);
          }
        };
        var k6 = ["#000000", "#ffffff"];
        var hCc = 9 * __c.TT,
          uCc = ["#cccccc", "#333333"],
          kCc = ["#00d200", "#00ed00"],
          lCc = ["#ffae00", "#ffc654"],
          mCc = ["#545454", "#c8c8c8"],
          nCc = ["#e53935", "#ef5350"],
          zCc = (14 * __c.TT) / 16,
          qCc = (9 * __c.TT) / 16;
        var q6 = (a, b, c, d, e, f) =>
          __c.Kk.Db()
            .attrs({
              "font-family": f,
              "font-size": e,
              leading: void 0,
              "text-align": "center",
              direction: p6(b),
              color: c,
            })
            .sb("\u25cf ")
            .attrs({
              "font-family": f,
              "font-size": e,
              color: d,
              "font-kerning": "normal",
              "font-feature-liga": "on",
              "font-feature-clig": "on",
              "font-feature-calt": "on",
            })
            .sb(a)
            .eq()
            .build();
        var rDc;
        rDc = ({ mEb: a, Dqb: b }) => {
          const c = b.status !== 1 && a.status === 1;
          return (
            (a.status === 1 && b.status === 1 && a.data.Ywa !== b.data.Ywa) || c
          );
        };
        __c.gJa = {
          $pb: function (a, b, c, d, e, f, g, h, k) {
            g.cg("forms");
            const { nvb: l } = d ?? {},
              m = h.pw("ui.rendering.form"),
              n = { root: new BCc(), option: new BCc() },
              p = new oDc(b);
            return {
              MCa: ICc,
              pn: kDc,
              $Fa: ({ AA: q }) => {
                if (l && a) {
                  var r,
                    t = CCc(
                      () => q.Cf.id,
                      () => {
                        const w = q.Cf.type,
                          z = l.get({ VH: q.Cf.id, kg: a, R6: c });
                        r?.unsubscribe();
                        w === "poll" &&
                          (r = z
                            .rBb({ Uwb: () => q.Cf.$i })
                            .subscribe(({ results: A, $i: C }) => {
                              i6(() => {
                                const B = new Map(q.jl.AC);
                                B.set(C, { ...(B.get(C) ?? h6), results: A });
                                q.Tn({ AC: B });
                              });
                            }));
                        z.getSettings({ P1b: () => q.Cf.Or }).subscribe((A) => {
                          const C = q.jl.cd;
                          let B = A;
                          if (
                            A.status === 1 &&
                            !q.Cf.Or &&
                            q.Cf.type === "quiz"
                          ) {
                            const D = q.Cf.fields.first()?.value,
                              I = D?.type === "select" ? D.y5.toArray() : [];
                            B = {
                              status: 1,
                              data: {
                                ND: new Map(
                                  q.Cf.fields
                                    .filter(
                                      ({ value: L }) => L.type === "select"
                                    )
                                    .map(({ value: L }) => [
                                      L.id,
                                      L.y5.toArray(),
                                    ])
                                ),
                                yka: (L) => I.includes(L),
                                Ywa: A.data.Ywa,
                                cV: A.data.cV,
                                HJb: !1,
                              },
                            };
                          }
                          i6(() => {
                            q.Tn({ cd: B });
                          });
                          rDc({ mEb: B, Dqb: C }) &&
                            z.Bub({ $i: q.Cf.$i, Or: q.Cf.Or }).then(
                              ECc((D) => {
                                const I = q.Cf.$i;
                                if (D.ok) {
                                  var L = new Map(q.jl.AC);
                                  if (D.value) {
                                    D = D.value;
                                    const N =
                                      q.Cf.fields.first()?.value.id ?? "";
                                    D = D.Iua.get(N);
                                    D =
                                      D?.type === 0 && D.s1.length >= 1
                                        ? D.s1[0]
                                        : void 0;
                                    L.set(I, {
                                      ...(L.get(I) ?? h6),
                                      fg: D,
                                      RJ: D,
                                    });
                                  } else
                                    L.set(I, {
                                      ...(L.get(I) ?? h6),
                                      fg: void 0,
                                      RJ: void 0,
                                    });
                                  q.Tn({ AC: L, aA: void 0 });
                                }
                              })
                            );
                        });
                      },
                      { fireImmediately: !0 }
                    ),
                    v = CCc(
                      () => k?.status === 2,
                      ECc((w) => {
                        q.Tn({ fl: w });
                      }),
                      { fireImmediately: !0 }
                    );
                  return () => {
                    r?.unsubscribe();
                    t();
                    v();
                  };
                }
              },
              render: (q, r) => {
                const t = WBc(q);
                if (l && a) {
                  var v = l.get({ VH: q.Cf.id, kg: a, R6: c });
                  v = $Bc(q, t, v, e, f, m);
                }
                a: {
                  const w = q.Cf,
                    z = new qDc(q),
                    A = new pDc(q);
                  switch (w.type) {
                    case "poll":
                      q = rCc(z, A, q, t, v, p, n);
                      break a;
                    case "quiz":
                      q = ACc(z, A, q, t, v, p, n, r);
                      break a;
                    default:
                      throw new E(w.type);
                  }
                }
                return q;
              },
              dsa: n,
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/3401bf1af019e2be.js.map
