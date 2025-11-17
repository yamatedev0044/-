(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [43432],
  {
    /***/ 290120: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(258551);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var g1 = __c.g1;
        var M = __c.M;
        var cMc = async function (a, b) {
            return a.ssa(b, async () => {
              if (a.IXa == null)
                throw Error("Scene document resources are not supported");
              const c = await a.IXa.Zq({ id: b, version: 1 }, void 0),
                d = { id: c.id, files: { E_a: c.content.url, i9a: c.Oc?.url } };
              (0, __c.Xb)(() => {
                a.scenes.set(d.id, d);
              });
              return d;
            });
          },
          fMc = function (a, b) {
            if (a.gj.Bhb && b instanceof dMc) return new eMc(a.gj.Bhb, b);
            throw Error("GltfResource needs GltfResource");
          },
          hMc = function (a) {
            return gMc
              ? new dMc(a)
              : new dMc(a, {
                  environment_sdr:
                    "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_sdr.png",
                  environment_gain:
                    "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_gain.png",
                });
          },
          iMc = function (a, b, c) {
            let d = b - 1,
              e = 0,
              f = c - 1,
              g = 0;
            for (let h = 0; h < c; h++)
              for (let k = 0; k < b; k++)
                a[3 + (h * b + k) * 4] !== 0 &&
                  ((d = Math.min(d, k)),
                  (e = Math.max(e, k)),
                  (f = Math.min(f, h)),
                  (g = Math.max(g, h)));
            a = g - f + 1;
            return { left: d, top: c - (f + a), width: e - d + 1, height: a };
          },
          jMc = function (a, b) {
            a.store.container = b;
            b.contains(a.gj.canvas) || b.appendChild(a.gj.canvas);
          },
          kMc = function (a, b) {
            const c = b.getContext("2d");
            if (!c) throw Error("Unable to create 2d context");
            a.store.qM && a.render(!1);
            b.width = 2e3;
            b.height = 2e3;
            c.drawImage(a.store.qM ? a.gj.canvas : a.store.kia, 0, 0, 2e3, 2e3);
          },
          lMc = function (a) {
            if (a.store.Ee) {
              const b = requestAnimationFrame(() => lMc(a));
              a.store.Mea = b;
              a.render(a.store.jYa);
            }
          },
          oMc = function ({ yja: a, gj: b }) {
            const c = new mMc();
            return new nMc(c, a, b);
          },
          pMc = function (a) {
            const b = a.ck;
            a = __c.wO.create({
              ...__c.jE,
              image: {
                ...__c.FDb,
                media: { id: a.bF, version: 1 },
                rb: void 0,
              },
            });
            return X7(b, { fill: a });
          },
          qMc = function (a) {
            const b = __c.y(a.store.container, "Missing container"),
              c = a.ph.cZ;
            b.style.width = 2e3 * a.ph.ba + "px";
            b.style.height = 2e3 * a.ph.ba + "px";
            b.style.left = `-${c.left * a.ph.ba}px`;
            b.style.top = `-${c.top * a.ph.ba}px`;
            b.style.position = "absolute";
            kMc(a.ph, a.store.WT);
          },
          sMc = function (a) {
            var b = __c.y(a.store.container, "Missing container");
            b.style.position = "init";
            b.style.left = "0";
            b.style.top = "0";
            b.style.width = "100%";
            b.style.height = "100%";
            b = a.ph;
            a = a.store.WT;
            if (b.store.isInitialized) {
              var c = a.getContext("2d");
              if (!c) throw Error("Unable to create 2d context");
              var d = b.fja();
              a.width = 1 * d.width;
              a.height = 1 * d.height;
              a = rMc(b.gj);
              Y7(b.gj, 2e3, 2e3);
              b.render(!1);
              c.drawImage(
                b.gj.canvas,
                d.left * 1,
                d.top * 1,
                d.width * 1,
                d.height * 1,
                0,
                0,
                d.width * 1,
                d.height * 1
              );
              Y7(b.gj, a.width, a.height);
            } else {
              c = a.getContext("2d");
              if (!c) throw Error("Unable to create 2d context");
              d = b.store.Kva;
              a.width = d.width;
              a.height = d.height;
              c.drawImage(
                b.store.kia,
                d.left,
                d.top,
                d.width,
                d.height,
                0,
                0,
                d.width,
                d.height
              );
            }
          },
          AMc = function ({ Lr: a, vz: b, gj: c, Waa: d }) {
            const e = new tMc(),
              f = new uMc(e, a, b, c, d),
              g = vMc({ local: a.zq.local }),
              h = wMc({ local: a.zq.local }),
              k = () => X7("div", { children: "Error" });
            return xMc(() => {
              Z7(() => {
                f.initialize();
                return () => {
                  f.destroy();
                };
              }, []);
              switch (f.aya) {
                case 1:
                  return X7(h, {});
                case 3:
                  return X7(yMc, { BS: f.BS || "" });
                case 0:
                  return X7(g, {});
                case 2:
                  return X7(pMc, { ck: a.ck, bF: f.Fba || "" });
                case 4:
                  return X7(zMc, {
                    Pyb: f.BS,
                    selected: f.tAb,
                    Fba: f.Fba,
                    ck: a.ck,
                  });
                case 5:
                  return X7(k, {});
                default:
                  throw new __c.E(f.aya);
              }
            });
          },
          DMc = function (a) {
            return xMc(({ data: b, Re: { ck: c }, ui: { ye: d } }) => {
              const [e, f] = BMc(),
                [g, h] = BMc();
              Z7(() => {
                const k = new CMc(b, d, c),
                  l = AMc({ Lr: k, ...a });
                f(l);
                h(k);
              }, []);
              Z7(() => {
                g &&
                  $7(() => {
                    g.zq = b;
                    g.ye = d;
                    g.ck = c;
                  });
              }, [g, b, d, c]);
              return e
                ? X7("div", { className: "N73IPQ", children: X7(e, {}) })
                : X7("span", {});
            });
          },
          EMc = function (a, b) {
            return (typeof b === "function" ? b() : b)
              .catch((c) => {
                a.setStatus("error");
                throw c;
              })
              .finally(() => {
                a.end();
              });
          },
          FMc = function (a, b, c, d) {
            a = a.startSpan(b, d);
            return EMc(a, c);
          },
          Y7 = function (a, b, c) {
            a.LK.width = b;
            a.LK.height = c;
          },
          GMc = function (a, b) {
            a.uaa = a.uaa.filter((c) => c !== b);
          },
          rMc = function (a) {
            return { width: a.LK.width, height: a.LK.height };
          },
          KMc = function (a, b = 0) {
            if (b > 5) throw Error("Unable to recreate context");
            const c = HMc(a);
            a.GW = new IMc(c);
            a.GW.onContextLost = () => {
              const d = a.LK;
              a.LK = JMc();
              KMc(a, b + 1);
              a.uaa.forEach((e) => e(d));
            };
            return a.GW;
          },
          NMc = async function (a) {
            await LMc({ path: MMc });
            try {
              a.GW = KMc(a);
            } catch (b) {
              throw (
                (a.J.Pb("Failed to create WebGL renderer"),
                Error("Failed to create WebGL renderer"))
              );
            }
          },
          HMc = function (a) {
            const b = a.LK.getContext("webgl");
            if (b != null) return b;
            a.J.Pb("Failed to get WebGL context for scene widget");
            throw Error("Failed to get WebGL context for scene widget");
          },
          JMc = function () {
            const a = document.createElement("canvas");
            a.width = 1e3;
            a.height = 1e3;
            a.style.width = "100%";
            a.style.visibility = "visible";
            return a;
          };
        __c.gr.prototype.ssa = __c.da(8, function (a, b) {
          const c = this.oi.get(__c.fr(a));
          if (c != null && c.r$a != null) {
            const e = this.kX.get(c);
            if (e != null) return Promise.resolve({ ...c, element: e });
          }
          const d = __c.fr(a);
          if ((a = this.pending.get(d))) return a;
          c != null &&
            c.r$a != null &&
            (b = async () => {
              const e = await __c.ybc(this, c);
              return { ...c, element: e };
            });
          b = b().finally(() => this.pending.delete(d));
          this.pending.set(d, b);
          return b;
        });
        __c.Hs.prototype.ssa = __c.da(7, function (a, b) {
          var c = this.scenes.get(a);
          if (c) return Promise.resolve(c);
          if ((c = this.pending.get(a))) return c;
          b = b().finally(() => this.pending.delete(a));
          this.pending.set(a, b);
          return b;
        });
        var a8 = __webpack_require__(236767),
          LMc = a8.Ay,
          dMc = a8.IB,
          IMc = a8.ly,
          eMc = a8.tV;
        var b8 = __webpack_require__(186901),
          OMc = b8.EW,
          $7 = b8.h5,
          PMc = b8.mJ,
          c8 = b8.sH,
          d8 = b8.XI;
        var QMc = __webpack_require__(405148),
          X7 = QMc.jsx,
          RMc = QMc.jsxs;
        var SMc = __webpack_require__(227200),
          Z7 = SMc.useEffect,
          TMc = SMc.useRef,
          BMc = SMc.useState;
        var xMc = __webpack_require__(371201).PA;
        var MMc = __webpack_require__(61253).A;
        var gMc = __c.uc("1aab289f", !1),
          UMc = class {
            constructor(a) {
              this.gj = a;
            }
          };
        var VMc = class {
          static D(a) {
            M(a, { selected: c8.ref, Igb: c8.ref, Sja: c8.ref, oka: c8.ref });
          }
          constructor(a) {
            this.ph = a;
            this.selected = (VMc.D(this), !1);
            this.Sja = this.Igb = !1;
            this.oka = 0;
          }
        };
        var nMc = class {
          static D(a) {
            M(a, {
              initialize: d8,
              Ptb: d8,
              MLa: d8,
              acb: d8,
              dispose: d8,
              fja: d8,
              Jja: d8,
              rdb: d8,
            });
          }
          async initialize(a) {
            this.store.isInitialized ||
              this.store.$e ||
              ((this.store.$e = !0),
              (a = hMc(a)),
              (this.store.zja = a),
              await a.load(),
              a === this.store.zja &&
                ((this.store.qM = fMc(this.yja, a)),
                this.gj.uaa.push(this.Jja),
                $7(() => {
                  this.store.isInitialized = !0;
                  this.store.$e = !1;
                })));
          }
          Ptb(a, b = !0) {
            Y7(this.gj, 2e3, 2e3);
            this.store.cZ = this.fja();
            this.store.ba = a;
            this.store.jYa = b;
            this.rdb();
          }
          get cZ() {
            return this.store.cZ;
          }
          MLa() {
            this.store.Ee = !1;
            this.store.Mea != null &&
              (cancelAnimationFrame(this.store.Mea), (this.store.Mea = void 0));
          }
          acb(a) {
            this.store.gR = a;
          }
          async dispose() {
            this.MLa();
            this.isInitialized &&
              this.store.container?.contains(this.gj.canvas) &&
              ((this.store.Kva = this.fja()), kMc(this, this.store.kia));
            this.store.qM?.dispose();
            this.store.qM = void 0;
            this.store.isInitialized = !1;
            GMc(this.gj, this.Jja);
            this.store.$e = !1;
            const a = this.store.zja;
            this.store.zja = void 0;
            await a?.load();
            a?.dispose();
          }
          fja() {
            if (this.store.mfa && this.store.gR === this.store.mfa?.aIb)
              return this.store.mfa.ja;
            var a = rMc(this.gj);
            Y7(this.gj, 2e3, 2e3);
            this.render(!1);
            const b = this.gj.getImageData();
            Y7(this.gj, a.width, a.height);
            a = this.Qvb(b.data, b.width, b.height);
            this.store.mfa = { aIb: this.store.gR, ja: a };
            return a;
          }
          get isInitialized() {
            return this.store.isInitialized;
          }
          get Ee() {
            return this.store.Ee;
          }
          get ba() {
            return this.store.ba;
          }
          rdb() {
            this.MLa();
            this.store.Ee = !0;
            lMc(this);
          }
          render(a) {
            this.store.qM?.render({
              distance: 1,
              rotationPhi: this.store.gR.rotation.x,
              rotationTheta: this.store.gR.rotation.y,
              enableGrid: a,
            });
          }
          constructor(a, b, c, d = iMc) {
            this.store = a;
            this.yja = b;
            this.gj = c;
            this.Qvb = d;
            this.Jja =
              (nMc.D(this),
              (e) => {
                $7(() => {
                  const f = this.store.zja,
                    g = this.store.container;
                  g &&
                    this.store.isInitialized &&
                    f &&
                    (g.contains(e) && g.removeChild(e),
                    jMc(this, g),
                    this.store.qM?.dispose(),
                    (this.store.qM = void 0),
                    (this.store.qM = fMc(this.yja, f)),
                    this.gj.uaa.push(this.Jja),
                    (this.store.isInitialized = !0));
                });
              });
          }
        };
        var mMc = class {
          static D(a) {
            M(a, {
              Ee: c8.ref,
              gR: c8.ref,
              Mea: c8.ref,
              CMb: c8.ref,
              kia: c8.ref,
              Kva: c8.ref,
              mfa: c8.ref,
              isInitialized: c8.ref,
              $e: c8.ref,
              ba: c8.ref,
              cZ: c8.ref,
            });
          }
          constructor() {
            this.container = (mMc.D(this), void 0);
            this.jYa = this.Ee = !1;
            this.gR = { rotation: { x: 0, y: 0, z: 0 } };
            this.CMb = document.createElement("canvas");
            this.kia = document.createElement("canvas");
            this.Kva = { left: 0, top: 0, width: 1, height: 1 };
            this.$e = this.isInitialized = !1;
            this.ba = 1;
            this.cZ = { left: 0, top: 0, width: 1, height: 1 };
          }
        };
        var yMc = ({ BS: a }) =>
          X7("img", {
            src: a,
            style: {
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            },
          });
        var WMc = ({ Zzb: a }) =>
            RMc("div", {
              className: "Wfem7A",
              children: [
                X7("div", { className: "CSoSRg" }),
                X7("div", {
                  className: "__J59g",
                  style: {
                    width: a ? "300%" : "init",
                    height: a ? "init" : "300%",
                    aspectRatio: "1",
                  },
                  children: X7("div", { className: "tEhdig" }),
                }),
              ],
            }),
          zMc = ({ selected: a, Pyb: b, Fba: c, ck: d }) => {
            const e = TMc(null),
              [f, g] = BMc(!1);
            Z7(() => {
              e.current && g(e.current.clientWidth >= e.current.clientHeight);
            }, [e]);
            return X7("div", {
              ref: e,
              className: "uDEnGQ",
              children:
                a && (b || c)
                  ? RMc("div", {
                      className: "E8BDLQ",
                      children: [
                        X7("div", {
                          className: "II7r4Q",
                          children: c
                            ? X7(pMc, { ck: d, bF: c || "" })
                            : X7(yMc, { BS: b || "" }),
                        }),
                        X7(WMc, { Zzb: f }),
                      ],
                    })
                  : X7("div", { className: "_4Wsohg" }),
            });
          };
        var XMc = ({ dFb: a, cFb: b }) => {
          const c = TMc(null);
          Z7(() => {
            const d = c.current;
            c.current && a(c.current);
            return () => {
              d && b();
            };
          }, [c, a, b]);
          return X7("div", {
            ref: c,
            style: { display: "block", position: "absolute" },
          });
        };
        var YMc = class {
          get ph() {
            return this.local.ph;
          }
          constructor(a) {
            this.local = a;
            this.mxb = (b) => {
              const c = this.ph.cZ;
              b.style.width = 2e3 * this.ph.ba + "px";
              b.style.height = 2e3 * this.ph.ba + "px";
              b.style.left = `-${c.left * this.ph.ba}px`;
              b.style.top = `-${c.top * this.ph.ba}px`;
              jMc(this.ph, b);
            };
            this.lxb = () => {
              var b = this.ph;
              b.store.container?.removeChild(b.gj.canvas);
              b.store.container = void 0;
            };
          }
        };
        var wMc = ({ local: a }) => {
          const b = new YMc(a);
          return () => X7(XMc, { dFb: b.mxb, cFb: b.lxb });
        };
        var ZMc = ({ WT: a, DFb: b, onDispose: c }) => {
          const d = TMc(null);
          Z7(() => {
            d.current && b(d.current);
            return () => c();
          }, [d, b, c]);
          Z7(() => {
            d.current &&
              ((a.style.width = "100%"),
              (a.style.height = "100%"),
              d.current.appendChild(a));
          }, [d, a]);
          return X7("div", {
            ref: d,
            style: { width: "100%", height: "100%" },
          });
        };
        var $Mc = class {
          static D(a) {
            M(a, { initialize: d8.bound, dispose: d8.bound });
          }
          initialize(a) {
            this.store.container = a;
            this.store.yXa = PMc(
              () => [this.ph.store.gR, this.ph.Ee],
              this.qxb,
              { fireImmediately: !1 }
            );
            this.store.wXa = PMc(() => this.local.Sja, this.nxb, {
              fireImmediately: !0,
            });
          }
          dispose() {
            this.store.yXa?.();
            this.store.yXa = void 0;
            this.store.wXa?.();
            this.store.wXa = void 0;
          }
          get WT() {
            return this.store.WT;
          }
          get ph() {
            return this.local.ph;
          }
          constructor(a, b) {
            this.store = a;
            this.local = b;
            this.qxb =
              ($Mc.D(this),
              () => {
                this.ph.Ee || (this.local.Sja ? qMc(this) : sMc(this));
              });
            this.nxb = () => {
              this.local.Sja ? qMc(this) : sMc(this);
            };
          }
        };
        var aNc = class {
          constructor() {
            this.WT = document.createElement("canvas");
          }
        };
        var vMc = ({ local: a }) => {
          const b = new aNc(),
            c = new $Mc(b, a);
          return () =>
            X7(ZMc, { DFb: c.initialize, onDispose: c.dispose, WT: c.WT });
        };
        var uMc = class {
          static D(a) {
            M(a, { initialize: d8, destroy: d8, aya: OMc, BS: OMc, Oi: OMc });
          }
          async initialize() {
            const a = this.Waa.startSpan("page_navigation");
            await EMc(a, async () => {
              this.mB && this.Lr.zq.local.oka++;
              var b = cMc(this.vz, this.Lr.zq.G.scene.id);
              const c = await FMc(this.Waa, "resolve_scene", b, a);
              $7(() => {
                this.store.scene = c;
              });
              this.mB &&
                ((b = __c.y(c.files.E_a)),
                await this.gj.ORb,
                await FMc(this.Waa, "load_resource", this.ph.initialize(b), a),
                (this.store.zXa = PMc(
                  () => [
                    this.Lr.zq.G.config.ref.rotationPhi,
                    this.Lr.zq.G.config.ref.rotationTheta,
                  ],
                  this.vxb,
                  { fireImmediately: !0 }
                )));
            });
          }
          destroy() {
            this.mB && this.Lr.zq.local.oka--;
            this.Lr.zq.local.oka === 0 && this.ph.dispose();
            this.store.zXa?.();
          }
          get aya() {
            return this.mB && this.Oi && !this.ph.isInitialized
              ? 4
              : (this.UDa && this.mB && !this.ph.Ee) ||
                (this.P1a && !this.ph.Ee) ||
                (this.mB && this.UDa && !this.Oi) ||
                (!this.mB && this.UDa)
              ? 0
              : this.P1a
              ? 1
              : this.Fba
              ? 2
              : this.BS
              ? 3
              : this.$e
              ? 4
              : 5;
          }
          get BS() {
            return this.store.scene?.files.i9a;
          }
          get UDa() {
            return this.Lr.zq.local.Igb;
          }
          get Fba() {
            return this.Lr.zq.G.config.ref.snapshot?.id;
          }
          get $e() {
            return this.store.scene == null;
          }
          get mB() {
            return this.Lr.ye === 30;
          }
          get tAb() {
            return this.Oi && this.mB;
          }
          get Oi() {
            return this.Lr.zq.local.selected;
          }
          get P1a() {
            return this.mB && this.Oi && this.ph.isInitialized;
          }
          get ph() {
            return this.Lr.zq.local.ph;
          }
          get G() {
            return this.Lr.zq.G;
          }
          constructor(a, b, c, d, e) {
            this.store = a;
            this.Lr = b;
            this.vz = c;
            this.gj = d;
            this.Waa = e;
            this.vxb =
              (uMc.D(this),
              () => {
                this.ph.Ee ||
                  this.ph.acb({
                    rotation: {
                      x: this.Lr.zq.G.config.ref.rotationPhi,
                      y: this.Lr.zq.G.config.ref.rotationTheta,
                      z: 0,
                    },
                  });
              });
          }
        };
        var tMc = class {
          static D(a) {
            M(a, { scene: c8.ref });
          }
          constructor() {
            this.zXa = (tMc.D(this), void 0);
          }
        };
        var CMc = class {
          static D(a) {
            M(a, { zq: c8.ref, ye: c8.ref, ck: c8.ref });
          }
          constructor(a, b, c) {
            CMc.D(this);
            this.zq = a;
            this.ye = b;
            this.ck = c;
          }
        };
        var bNc = class {
          startSpan(a, b) {
            a = `scene.${a}`;
            return b
              ? this.Za.startSpan(a, b)
              : this.Za.Ih(a, {
                  $o: { name: `editor.${a}`, performance: { VI: !0 } },
                });
          }
          constructor(a) {
            this.Za = a;
          }
        };
        var cNc = class {
          get ORb() {
            return this.qlb;
          }
          get canvas() {
            return this.LK;
          }
          get Bhb() {
            return this.GW;
          }
          getImageData() {
            __c.x(this.GW != null, "WebGlRenderer is not initialized");
            return this.GW.readPixels();
          }
          constructor(a) {
            this.J = a;
            this.uaa = [];
            this.LK = JMc();
            this.qlb = NMc(this);
          }
        };
        var dNc = __c.n0()(() => ({
          DXb(a, b, c) {
            return {
              data: {
                G: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: void 0,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                  },
                },
                document: {},
              },
              P: { width: b, height: c },
            };
          },
          EXb(a, b, c, d) {
            return {
              data: {
                G: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: b,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                  },
                },
                document: {},
              },
              P: { width: c, height: d },
            };
          },
        }));
        var eNc = __c.u0({
          G: __c.t0({
            scene: g1.hm(1, "SceneRef"),
            config: g1.Qva(2, {
              snapshot: g1.i7a(1, "MediaRef"),
              rotationPhi: g1.KXa(2, { min: 0, max: 6.284 }),
              rotationTheta: g1.KXa(3, { min: -1.571, max: 1.571 }),
            }),
          }),
        });
        var fNc;
        fNc = __c.g0()(({ Wh: a, RQ: b }) => {
          var c = b.Za;
          b = b.J.cg("scene_widget_rendering");
          c = new bNc(c);
          const d = new cNc(b),
            e = new UMc(d);
          a = DMc({ vz: a.vz, gj: d, Waa: c });
          return {
            metadata: { type: "scene", name: __c.K("6XoKOg") },
            F5: () => {
              const f = oMc({ yja: e, gj: d });
              return new VMc(f);
            },
            G: __c.f0(a),
            exports: {},
          };
        });
        __c.w0 = {};
        __c.w0.rUb = VMc;
        __c.w0.eh = dNc;
        __c.w0.ko = fNc;
        __c.w0.fh = eNc;
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/e9a13df42757e8a8.js.map
