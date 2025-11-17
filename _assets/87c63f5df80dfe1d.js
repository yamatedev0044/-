(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [41990],
  {
    /***/ 726928: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(841953);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var E = __c.E;
        var x = __c.x;
        var yGc = function (a, b) {
            var c = __c.Di(b);
            a = __c.xm(a.cc, b);
            b = c.ra;
            const d = c.br;
            c = c.br;
            try {
              a.Uc(b, d, c, !0, !1);
            } finally {
              a.destroy();
            }
          },
          AGc = function (a, b, c, d) {
            c = new zGc(c, d);
            x(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            x(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${a?.type}`
            );
            c.lsa(a, b);
          },
          CGc = function (a) {
            return {
              ...__c.kEb,
              ...$6,
              id: __c.hE.generate(),
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.esa.width,
                height: a.esa.height,
              },
              gb: a.gb.map(BGc),
            };
          },
          DGc = function (a) {
            switch (a.ZF) {
              case 0:
                var b = __c.Kk.Db().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.Fe("color", a.color);
                b = b
                  .sb(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                return {
                  ...__c.LH,
                  ...a7,
                  ...$6,
                  id: __c.hE.generate(),
                  xa: a.xa ?? 0,
                  text: b,
                  Df: 2,
                };
              case 1:
                return (
                  (b = a.text),
                  {
                    ...__c.LH,
                    ...a7,
                    ...$6,
                    id: __c.hE.generate(),
                    text: b,
                    Df: 2,
                  }
                );
              default:
                throw new E(a);
            }
          },
          IGc = function ({ content: a, fill: b, border: c, O: d }) {
            b = { ...__c.WDb, fill: EGc(b), border: FGc(c), O: GGc(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: CGc(a) };
              case "text":
                return { ...b, element: DGc(a) };
              case "layout":
                return { ...b, element: HGc(a) };
              default:
                throw new E(a);
            }
          },
          HGc = function ({
            cells: a,
            border: b,
            fill: c,
            O: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.XDb,
              ...a7,
              ...$6,
              id: __c.hE.generate(),
              I: a7.width,
              N: a7.height,
              fill: EGc(c),
              border: FGc(b),
              direction: 1,
              O: GGc(d),
              cells: new Map(a.map((k) => [k.id, IGc(k)])),
              behavior: {
                rules: [
                  {
                    Nm: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g ?? 0,
                      rowGap: h ?? 0,
                      Zh: JGc(a),
                    },
                  },
                ],
              },
              Kc: void 0,
            };
          },
          JGc = function (a) {
            return new Map(a.map((b) => [b.id, KGc(b)]));
          },
          KGc = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.Rja,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.OT,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          FGc = function (a) {
            const b = a?.color ?? "#000000";
            return {
              ...__c.LA,
              all: a
                ? { ...__c.DT, weight: a.weight ?? 1, color: b, xe: !0 }
                : void 0,
            };
          },
          GGc = function (a) {
            return {
              ...__c.NT,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          BGc = function (a) {
            return {
              ...__c.lEb,
              ...a,
              fill: EGc(a.fill),
              stroke: LGc(a.stroke),
            };
          },
          LGc = function (a) {
            return a ? { ...__c.DT, color: a.color, weight: a.weight } : void 0;
          },
          EGc = function (a) {
            const b = { ...__c.jE, xa: a?.xa ?? 0 };
            switch (a?.type) {
              case "color":
                return { ...b, color: a.color };
              case "gradient":
                return { ...b, Ra: a.Ra };
              case void 0:
                return b;
              default:
                throw new E(a);
            }
          },
          SGc = function (a, b) {
            const c = new Map(b.cells.map((d) => [d.id, d]));
            MGc(
              a.cells,
              c,
              (d, e) => {
                let f = !1;
                NGc(d.element, e.content, () => {
                  a.cells.delete(e.id);
                  a.cells.set(e.id, IGc(e));
                  f = !0;
                });
                f ||
                  (OGc(d.fill, e.fill), PGc(d.border, e.border), QGc(d.O, e.O));
              },
              (d) => IGc(d)
            );
            RGc(a.behavior, b, c);
            OGc(a.fill, b.fill);
            QGc(a.O, b.O);
            PGc(a.border, b.border);
            a.xa = b.xa ?? 0;
          },
          RGc = function (a, b, c) {
            TGc(
              a.rules,
              [b],
              (d) => {
                UGc(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                UGc(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                d.grid.columnGap = b.columnGap ?? 0;
                d.grid.rowGap = b.rowGap ?? 0;
                MGc(
                  d.grid.Zh,
                  c,
                  (e, f) => {
                    const g = f.placement.padding,
                      h = f.placement.gridColumnEnd,
                      k = f.placement.gridRowStart,
                      l = f.placement.gridRowEnd,
                      m = f.placement.alignSelf;
                    e.gridColumnStart = f.placement.gridColumnStart;
                    e.gridColumnEnd = h;
                    e.gridRowStart = k;
                    e.gridRowEnd = l;
                    typeof g === "number" && e.padding.all !== g
                      ? (e.padding.all = g)
                      : typeof g !== "number" &&
                        ((e.padding.na = g?.na),
                        (e.padding.Ba = g?.Ba),
                        (e.padding.qa = g?.qa),
                        (e.padding.Pa = g?.Pa));
                    e.alignSelf = m;
                  },
                  (e) => KGc(e)
                );
              },
              (d) => ({
                Nm: void 0,
                grid: {
                  gridTemplateColumns: b.gridTemplateColumns,
                  gridTemplateRows: b.gridTemplateRows,
                  columnGap: b.columnGap ?? 0,
                  rowGap: b.rowGap ?? 0,
                  Zh: JGc(d.cells),
                },
              })
            );
          },
          VGc = function (a, b) {
            TGc(
              a.gb,
              b.gb,
              (e, f) => {
                e.d = f.d;
                OGc(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(LGc(f.stroke));
              },
              (e) => BGc(e)
            );
            const { viewBox: c, width: d } = CGc(b);
            a.width = d;
            __c.Di(a.viewBox).equals(__c.Di(c)) || (a.viewBox = c);
          },
          NGc = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? VGc(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Kk.domain.rc(__c.Kk.snapshot(a.text), DGc(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? SGc(a, b) : c();
                break;
              default:
                throw new E(b);
            }
          },
          MGc = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          TGc = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          OGc = function (a, b) {
            switch (b?.type) {
              case "color":
                a.color = b.color;
                a.Ra.set(void 0);
                a.xa = b.xa ?? 0;
                break;
              case "gradient":
                if (a.Ra.ref && __c.$gb.domain.rc(a.Ra.ref, b.Ra)) break;
                a.color = void 0;
                a.Ra.set(b.Ra);
                a.xa = b.xa ?? 0;
                break;
              default:
                (a.color = void 0), a.Ra.set(void 0);
            }
          },
          QGc = function (a, b) {
            b = GGc(b);
            a.all = b.all;
            a.xD = b.xD;
            a.vD = b.vD;
            a.wD = b.wD;
            a.uD = b.uD;
          },
          PGc = function (a, b) {
            b = FGc(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b
                  ? __c.MA.domain.rc(__c.MA.snapshot(c), b)
                  : !c && !b));
            c && a.all.set(b);
          },
          UGc = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          XGc = function (a, b, c, d) {
            let e = a.e$a.get(b);
            if (e) return e;
            e = {
              AA: new WGc(c.pn, b, d, c.MCa),
              cSa: void 0,
              l3a: void 0,
              G5a: __c.rY.mode,
            };
            a.e$a.set(b, e);
            return e;
          },
          ZGc = function (a, b, c, d, e) {
            e = XGc(a, c, b, e);
            const f = e.AA,
              g = e.l3a,
              h = e.cSa,
              k = e.G5a;
            c = __c.ES.snapshot(c);
            const l = a.PC.TBa?.(d) || __c.rY;
            (f.jl === g && YGc.structural(c, h) && l.mode === k) ||
              ((e.cSa = c),
              (e.l3a = f.jl),
              (e.G5a = l.mode),
              (b = b.render(f, l)),
              a.RDb.update(d, b),
              AGc(
                d,
                b,
                (m, n) => a.FV.gDa.set(m, n),
                (m, n, p) => a.FV.refs.set(m, { ref: n, key: p })
              ));
          },
          bHc = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.MEb());
            c.push(
              $Gc(
                () => {
                  a: {
                    var e = new aHc();
                    for (const f of b)
                      if ((e.HV(f), e.HAa)) {
                        e = e.HAa;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.Cb.isLoaded(e) || a.lEa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) x(f.type === "layout"), yGc(a.wm, f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          cHc = function (a, b) {
            return {
              jy: ({ Qd: c }) => {
                const { AA: d } = XGc(a.renderer, c, b, a.dN),
                  e = __c.Oyb.create([]),
                  f = [];
                f.push(bHc(a.Xub, e));
                f.push(
                  $Gc(
                    () => [a.PC.TBa?.(e), __c.ES.snapshot(c), d.jl],
                    () => {
                      ZGc(a.renderer, b, c, e, a.dN);
                    },
                    { fireImmediately: !0, equals: YGc.structural }
                  )
                );
                const g = b.$Fa?.({ AA: d });
                g && f.push(g);
                return {
                  Na: e,
                  dn: () => {
                    f.forEach((h) => h());
                  },
                };
              },
            };
          },
          b7 = __webpack_require__(186901),
          dHc = b7.EW,
          eHc = b7.h5,
          YGc = b7.m3,
          $Gc = b7.mJ,
          c7 = b7.sH;
        var fHc = class {
          static D(a) {
            __c.M(a, { xGb: c7.ref, wwb: c7.ref });
          }
          constructor() {
            this.TBa = (fHc.D(this), void 0);
          }
        };
        var gHc = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          WGc = class {
            static D(a) {
              __c.M(a, { Cf: dHc });
            }
            get m3a() {
              var a = this.dN,
                b = this.Qd,
                c = this.MCa;
              let d = a.sources.get(b);
              d || ((d = c7.box(c)), a.sources.set(b, d));
              return d;
            }
            get jl() {
              return this.m3a.get();
            }
            get Cf() {
              return this.pn.sv({ type: "dict", value: this.Qd });
            }
            Tn(a) {
              this.m3a.set(
                a instanceof Function
                  ? { ...this.jl, ...a() }
                  : { ...this.jl, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.pn = a;
              this.Qd = b;
              this.dN = c;
              this.MCa = d;
              WGc.D(this);
            }
          };
        var zGc = class {
          sda(a, b) {
            this.U9a(a, b);
            b.ref && this.BIa(a, b.ref, b.key);
          }
          g3(a, b) {
            b.ref && this.BIa(a.text, b.ref, b.key);
          }
          GOa(a, b) {
            switch (b.content.type) {
              case "shape":
                x(a.element.type === "shape");
                this.sda(a.element, b.content);
                break;
              case "text":
                x(a.element.type === "text");
                this.g3(a.element, b.content);
                break;
              case "layout":
                x(a.element.type === "layout");
                this.lsa(a.element, b.content);
                break;
              default:
                throw new E(b.content);
            }
          }
          lsa(a, b) {
            this.U9a(a, b);
            b.ref && this.BIa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                x(!!d && !!a),
                this.GOa(d, a);
          }
          constructor(a, b) {
            this.U9a = a;
            this.BIa = b;
          }
        };
        var $6 = { locked: !0, Hg: __c.UDb, qg: !0 },
          a7 = { top: 0, left: 0, width: 1, height: 1 };
        var hHc = class {
          constructor(a) {
            this.wm = a;
            this.update = (b, c) => {
              TGc(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      SGc(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...HGc(d),
                        ...$6,
                        width: d.minWidth,
                        height: d.minHeight,
                        I: d.minWidth,
                        N: d.minHeight,
                      };
                      break a;
                    default:
                      throw new E(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                x(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.I = c.minWidth),
                  (d.N = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  yGc(this.wm, d);
            };
          }
        };
        var iHc = class {
          constructor(a, b, c) {
            this.RDb = a;
            this.FV = b;
            this.PC = c;
            this.e$a = new WeakMap();
          }
        };
        var jHc = class {
            static D(a) {
              __c.M(a, { lEa: c7.shallow });
            }
            constructor(a, b) {
              this.Cb = a;
              this.wm = b;
              this.lEa = (jHc.D(this), new Set());
              this.VAa = new Set();
              this.MEb = () => {
                this.Mia ||
                  (this.Mia = this.Cb.ixa().subscribe((d) => {
                    eHc(() => {
                      this.lEa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.VAa.add(c);
                return () => {
                  this.VAa.delete(c);
                  this.VAa.size <= 0 &&
                    this.Mia &&
                    (this.Mia.unsubscribe(), (this.Mia = void 0));
                };
              };
            }
          },
          aHc = class extends __c.Cs {
            HV(a, b) {
              this.HAa || super.HV(a, b);
            }
            g3(a) {
              this.HAa =
                (a = a.text
                  .bi("font-family")
                  ["font-family"].values()
                  .next().value) && __c.lr(a).id;
            }
          };
        var kHc = !1,
          lHc = class {
            static D(a) {
              __c.M(a, { Wv: c7.shallow });
            }
            register(a, b) {
              this.Wv.has(a) ||
                (this.Wv.set(a, b),
                this.jha || kHc || (__c.FS.set(a, cHc(this, b)), (kHc = !0)));
            }
            get(a) {
              return this.Wv.get(a);
            }
            constructor(a, b, c, d, e, f = __c.uc("f576b13d", !1)) {
              this.renderer = a;
              this.dN = b;
              this.PC = c;
              this.Cb = d;
              this.wm = e;
              this.jha = f;
              this.Wv = (lHc.D(this), new Map());
              this.Xub = new jHc(this.Cb, this.wm);
            }
          };
        var mHc = class {
            constructor() {
              this.gDa = new __c.jB();
              this.refs = new __c.jB();
            }
          },
          nHc = class {
            getContext(a) {
              return this.FV.refs.get(a);
            }
            fS(a) {
              return this.FV.gDa.get(a);
            }
            constructor(a, b, c) {
              this.FV = a;
              this.dN = b;
              this.renderer = c;
            }
          };
        __c.HTa = {
          izb: function (a) {
            const b = new fHc(),
              c = new mHc(),
              d = new iHc(new hHc(a.wm), c, b),
              e = new gHc();
            a = new lHc(d, e, b, a.Cb, a.wm, a.jha);
            return { PC: b, Iec: new nHc(c, e, d), vda: a, FV: c };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/87c63f5df80dfe1d.js.map
