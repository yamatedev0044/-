(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [6712],
  {
    /***/ 258551: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var t0;
        var g1;
        var M = __c.M;
        var Na = __c.Na;
        var zJ = __c.zJ;
        var G = __c.G;
        var X = __c.X;
        var W = __c.W;
        var H = __c.H;
        var hE = __c.hE;
        var yd = __c.yd;
        var Tc = __c.Tc;
        var ke = __c.ke;
        var E = __c.E;
        var u = __c.u;
        var Ba = __c.Ba;
        var y = __c.y;
        var zbc,
          Abc,
          Bbc,
          Dbc,
          Fbc,
          Ebc,
          Hbc,
          Jbc,
          Lbc,
          i0,
          Qbc,
          Tbc,
          Ybc,
          bcc,
          ecc,
          hcc,
          lcc,
          $bc,
          ncc,
          pcc,
          rcc,
          tcc,
          ucc,
          m0,
          wcc,
          o0,
          p0,
          xcc,
          ycc,
          zcc,
          Acc,
          Bcc,
          q0,
          Ccc,
          r0,
          Dcc,
          s0,
          Ecc,
          Gcc,
          Hcc,
          Icc,
          Mcc,
          Occ,
          Lcc,
          Ncc,
          Jcc,
          Kcc,
          Pcc,
          Qcc,
          Rcc,
          Scc,
          Ucc,
          Vcc,
          Ycc,
          qdc,
          wdc,
          Hdc,
          Idc,
          Jdc,
          Kdc,
          Ldc,
          y0,
          z0,
          Ndc,
          Odc,
          Pdc,
          A0,
          Sdc,
          Qdc,
          B0,
          Wdc,
          Udc,
          Vdc,
          C0,
          Ydc,
          $dc,
          aec,
          cec,
          F0,
          dec,
          qec,
          rec,
          sec,
          tec,
          J0,
          eec,
          gec,
          kec,
          nec,
          pec,
          H0,
          mec,
          uec,
          bec,
          wec,
          xec,
          yec,
          vec,
          Bec,
          Cec,
          L0,
          Rec,
          Oec,
          Lec,
          Nec,
          Dec,
          Gec,
          Fec,
          Mec,
          Eec,
          Sec,
          Kec,
          Iec,
          Hec,
          M0,
          N0,
          Wec,
          Xec,
          Yec,
          $ec,
          Zec,
          bfc,
          P0,
          gfc,
          kfc,
          ifc,
          rdc,
          mfc,
          Adc,
          Bdc,
          Cdc,
          ofc,
          pfc,
          qfc,
          rfc,
          sfc,
          xfc,
          zfc,
          U0,
          V0,
          W0,
          X0,
          Zcc,
          Afc,
          Efc,
          Gfc,
          Ffc,
          Ifc,
          Hfc,
          Jfc,
          Kfc,
          Lfc,
          Pfc,
          Qfc,
          Sfc,
          Tfc,
          Ufc,
          Vfc;
        __c.ybc = async function (a, b) {
          const c = await __c.Th(a.Hy, { method: "GET", url: y(b.url) });
          return (0, __c.Xb)(() => __c.Sra(a, b, c.body));
        };
        zbc = function (a, b) {
          b = a.oi.get(__c.fr(b));
          return b != null ? a.kX.get(b) : void 0;
        };
        Abc = function (a, b, c) {
          const d = a.oi.get(__c.fr(b));
          if (d != null) {
            const f = a.kX.get(d);
            if (f != null) {
              Promise.resolve({ ...d, element: f });
              return;
            }
          }
          const e = __c.fr(b);
          (a.BHa.get(e) ?? a.pending.get(e)) ||
            (d != null &&
              (c = async () => {
                const f = await __c.ybc(a, d);
                return { ...d, element: f };
              }),
            (b = c().finally(() => a.BHa.delete(e))),
            a.BHa.set(e, b));
        };
        Bbc = function (a, b) {
          Abc(a, b, async () => {
            if (a.GXa == null)
              throw Error("Blueprint document resources are not supported");
            const c = await a.GXa.Zq(b),
              d = (0, __c.Xb)(() => __c.Tra(a, c)),
              e = a.kX.get(d) ?? (await __c.ybc(a, d));
            return { ...d, element: e };
          });
        };
        __c.f0 = function (a) {
          return { type: 1, Component: a };
        };
        __c.g0 = function () {
          return (a) => a;
        };
        Dbc = function (a) {
          a.ce = setTimeout(() => {
            a.X9a(new Cbc());
          }, 500);
        };
        Fbc = async function (a, b) {
          const c = b.requestId,
            d = b.path;
          b = b.payload;
          const e = a.T0.get(d);
          if (e) {
            a.W9.L4.send({ type: "ack", requestId: c });
            var f = setInterval(
              () => a.W9.L4.send({ type: "ack", requestId: c }),
              9e3
            );
            try {
              var g = await e(b);
              clearInterval(f);
              a.W9.L4.send({ type: "response", requestId: c, payload: g });
            } catch (k) {
              clearInterval(f);
              g = "internal_error";
              b =
                "Something went wrong on our end, if this issue persists please contact us.";
              if (k instanceof h0) {
                var h = k;
                k.code === "internal_error"
                  ? a.J.Pb(k, {
                      le: "Internal error in comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : ((g = k.code), (b = k.NIb));
              } else
                a.BJb
                  ? a.J.Pb(k, {
                      le: "Unexpected error type thrown from comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : a.vrb.error(k);
              g = Ebc(a.W9, c, g, b);
              g.ok ||
                a.J.eR(g.error, {
                  le: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
            }
            if (h != null)
              for (const k of a.Ftb)
                try {
                  k(h);
                } catch (l) {
                  a.J.yK(l, { le: "Error executing errorObserver" });
                }
          } else
            (h = Ebc(
              a.W9,
              c,
              "internal_error",
              `No request handler configured for path: "${d}".`
            )),
              h.ok ||
                a.J.eR(h.error, {
                  le: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
        };
        Ebc = function (a, b, c, d) {
          return a.L4.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        Hbc = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return Gbc;
          a = new URL(a).origin;
          return a === "null" ? Gbc : { dOa: a, rab: a };
        };
        Jbc = function (a) {
          return Ibc.some((b) => a.endsWith(b));
        };
        Lbc = async function (
          a,
          b,
          c,
          { addEventListener: d, removeEventListener: e } = window,
          f = Hbc,
          g
        ) {
          const h = new Kbc(6e4),
            k = f(c),
            l = c.contentWindow;
          if (!l)
            throw new h0({
              code: "internal_error",
              message: "contentWindow is missing from iFrame",
            });
          c = ({ data: m, source: n, origin: p }) => {
            const q = m?.source,
              r = m?.clientId;
            q?.startsWith("react-") ||
              (p !== k.dOa
                ? Jbc(p) ||
                  b.info("received message event from an unexpected origin", {
                    extra: new Map([
                      ["expected", k.dOa],
                      ["actual", p],
                    ]),
                  })
                : n !== l
                ? n !== window &&
                  b.info("source and content window do not match", {
                    extra: new Map([["data.source", q]]),
                  })
                : ((m = m
                    ? (n = m.sandboxCommsSource ?? m.source)
                      ? n !== "iframe"
                        ? Ba("invalid source")
                        : m.clientId !== g
                        ? Ba("unknown client id")
                        : (0, __c.Aa)()
                      : Ba("'source' is missing in MessageEvent data object")
                    : Ba("missing 'data' field in MessageEvent")),
                  m.ok
                    ? (l.postMessage(
                        {
                          source: "parent",
                          sandboxCommsSource: "parent",
                          clientId: r,
                        },
                        k.rab,
                        [a]
                      ),
                      h.resolve(void 0))
                    : b.iG(m.error, { extra: new Map([["data.source", q]]) })));
          };
          d("message", c);
          try {
            await h.promise();
          } finally {
            e("message", c);
          }
        };
        i0 = function (a, b, c, d, e) {
          a.handle(b, async (f) => {
            if (f === void 0)
              throw new h0({
                code: "internal_error",
                message: `${b}: request cannot be undefined.`,
              });
            f = c.za(f);
            f = await d(f);
            if (e) return e.Ga(f);
          });
        };
        Qbc = function (a, b) {
          i0(a, "INIT_DATA", Mbc, (c) => b.pxb(c), Nbc);
          i0(a, "DATA_RENDER_READY", Obc, (c) => b.txb(c), Pbc);
        };
        Tbc = async function (a, b) {
          a = await a.uA.request("SET_EDITING_CONFIG", Rbc.Ga(b));
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${"SET_EDITING_CONFIG"} request: ${
                a.error
              }`
            );
          if (a.value == null)
            throw Error("SET_EDITING_CONFIG: Result cannot be empty");
          return Sbc.za(a.value);
        };
        Ybc = function (a, b) {
          i0(a, "SELECTION_CHANGED", Ubc, (c) => b.zxb(c), Vbc);
          i0(a, "TEXT_CONTENT_CHANGED", Wbc, (c) => b.Bxb(c), Xbc);
        };
        bcc = async function (a, b) {
          a = await a.uA.request("RENDER_ELEMENT", Zbc.Ga(b));
          a = $bc(a, "RENDER_ELEMENT");
          return acc.za(a);
        };
        ecc = async function (a, b) {
          a = await a.uA.request("SET_CAPABILITY", ccc.Ga(b));
          a = $bc(a, "SET_CAPABILITY");
          return dcc.za(a);
        };
        hcc = async function (a, b) {
          a = await a.uA.request("SET_EDIT_PANEL_VALUE", fcc.Ga(b));
          a = $bc(a, "SET_EDIT_PANEL_VALUE");
          return gcc.za(a);
        };
        lcc = function (a, b) {
          i0(a, "SET_CONFIG", icc, (c) => b.Axb(c), jcc);
          i0(a, "RESIZE_EVENT", kcc, (c) => b.uxb(c));
        };
        $bc = function (a, b) {
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${b} request: ${a.error}`
            );
          if (a.value == null) throw Error(`${b}: Result cannot be empty`);
          return a.value;
        };
        ncc = async function (a, b) {
          const { port1: c, port2: d } = new MessageChannel(),
            e = new mcc(c, b);
          await Lbc(d, b, a, window, void 0, "canva-code-data-sdk");
          return { uA: e };
        };
        pcc = async function (a, b) {
          const { port1: c, port2: d } = new MessageChannel(),
            e = new mcc(c, b);
          await Lbc(d, b, a, window, void 0, "canva-code-element-sdk");
          return { uA: e, wsb: new occ(e) };
        };
        rcc = async function (a, b) {
          const { port1: c, port2: d } = new MessageChannel(),
            e = new mcc(c, b);
          await Lbc(d, b, a, window, void 0, "canva-code-editing-sdk");
          return { uA: e, emitter: new qcc(e) };
        };
        tcc = function ({ ye: a, Mp: b, Tq: c, Va: d, J: e }) {
          const f = new scc(e),
            g = (h, k) =>
              e.error(h, {
                le: "codelet: ",
                extra: new Map(Object.entries(k)),
              });
          return j0((h) => {
            const k = k0(
              (l) => {
                f.Wob(l, h.Jpa, h.Ipa);
              },
              [h.Jpa, h.Ipa]
            );
            return l0(__c.mz, {
              url: h.url,
              store: b,
              So: c,
              eE: g,
              Va: d,
              iO: a > 10,
              Ii: h.Ii || !1,
              YI: k,
              bz: h.bz,
              wda: h.wda,
            });
          });
        };
        ucc = function ({ ye: a, Mp: b, Tq: c, Va: d, J: e }) {
          const f = new scc(e),
            g = (h, k) =>
              e.error(h, {
                le: "codelet2: ",
                extra: new Map(Object.entries(k)),
              });
          return j0(({ url: h, Ii: k, rGa: l, bz: m }) => {
            const n = k0(
              (p) => {
                f.Vob(p, l);
              },
              [l]
            );
            return l0(__c.mz, {
              url: h,
              store: b,
              So: c,
              eE: g,
              Va: d,
              iO: a > 10,
              Ii: k || !1,
              YI: n,
              bz: m,
            });
          });
        };
        m0 = function () {
          throw Error("ref not found");
        };
        wcc = function (a, b, c) {
          return new vcc(a, b, c);
        };
        __c.n0 = function () {
          return (a) => a;
        };
        o0 = function (a, b) {
          return b.map((c) => ({ type: a, id: c.id, version: c.version }));
        };
        p0 = function (a) {
          return { kind: 0, hO: a };
        };
        xcc = function () {
          return { kind: 1 };
        };
        ycc = function (a) {
          return { kind: 3, range: a };
        };
        zcc = function (a) {
          return { kind: 2, range: a };
        };
        Acc = function (...a) {
          return { kind: 4, values: new Set(a) };
        };
        Bcc = function (a) {
          return { kind: 5, itemType: a };
        };
        q0 = function (a) {
          return { kind: 7, name: a };
        };
        Ccc = function (a) {
          return { kind: 8, itemType: a };
        };
        r0 = function (a) {
          return { kind: 10, fields: a };
        };
        Dcc = function (a, ...b) {
          return { kind: 11, pXa: a, wg: b };
        };
        s0 = function (a, b, c) {
          return (d, ...e) => ({ key: d, RKa: a, tF: b, type: c(...e) });
        };
        t0 = __c.t0 = function (a) {
          const b = new Set();
          for (const c of Object.values(a))
            u(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
          return a;
        };
        Ecc = function (a) {
          switch (a.kind) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              return !1;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
              return !0;
            default:
              throw new E(a);
          }
        };
        __c.u0 = function (a) {
          return () => ({ ...Fcc, ...a });
        };
        Gcc = function (a, b) {
          a = { ...a.iY };
          b.gb.every((c) => !!c.fill.Be.ref?.image && !!c.fill.Be.ref?.video) &&
            (a.hu = !0);
          return a;
        };
        Hcc = function (a, b) {
          a = { ...a.iY };
          b.yb.every((c) => !!c.Be.ref?.text) && (a.hu = !0);
          return a;
        };
        Icc = function (a, b) {
          switch (b.type) {
            case "rect":
              return (
                (a = { ...a.iY }),
                b.fill.Be.ref?.image && b.fill.Be.ref?.video && (a.hu = !0),
                a
              );
            case "shape":
              return Gcc(a, b);
            case "text":
              return (a = { ...a.iY }), b.Be.ref?.text && (a.hu = !0), a;
            case "chart":
              return { ...a.iY };
            case "line":
              return Hcc(a, b);
            case "grid":
              return { ...a.iY };
            default:
              throw new E(b);
          }
        };
        Mcc = function (a, b) {
          return a.e.classes.A3.create(
            {},
            {
              U: {
                image: a.e.computed(() => Jcc(a.Be, b.image, b.Be.ref?.image)),
                video: a.e.computed(() => Kcc(a.Be, b.video, b.Be.ref?.video)),
                Ra: b.Ra,
              },
              attributes: Lcc(b),
            }
          );
        };
        Occ = function (a, b) {
          return { ...Ncc(a, b), O: () => b.O };
        };
        Lcc = function (a) {
          return {
            Yl: () => a.Yl,
            color: () => a.color,
            xa: () => a.xa,
            locked: () => a.locked,
            qg: () => a.qg,
            Vk: () => a.Vk,
            Zc: () => a.Zc,
            flipX: () => a.flipX,
            flipY: () => a.flipY,
          };
        };
        Ncc = function (a, b) {
          return {
            height: () => b.height,
            width: () => b.width,
            top: () => b.top,
            left: () => b.left,
            rotation: () => b.rotation,
            Hg: () => Icc(a.p3a, b),
            locked: !0,
          };
        };
        Jcc = function (a, b, c) {
          const d = c ? a.Be?.get(c) : void 0;
          return {
            ref: (d && Pcc(d, "image_fill"))?.image.ref ?? b.ref,
            set: (e) =>
              Qcc(a, { type: "image_fill", value: { ...__c.jE, image: e } }, c),
          };
        };
        Kcc = function (a, b, c) {
          const d = c ? a.Be?.get(c) : void 0;
          return {
            ref: (d && Pcc(d, "video_fill"))?.video.ref ?? b.ref,
            set: (e) =>
              Qcc(a, { type: "video_fill", value: { ...__c.jE, video: e } }, c),
          };
        };
        Pcc = function (a, b) {
          if (a.type !== b)
            throw Error(`Expected override type ${b} but got ${a.type}`);
          return a.value;
        };
        Qcc = function (a, b, c) {
          if (!c)
            throw Error(
              "No override key is available, but this is being set on an instance. This is likely an error with the locking logic."
            );
          a.Be.set(c, b);
        };
        Rcc = async function (a, b) {
          [a] = await a.mia([b]);
          return new v0({ id: b.id, url: a.fonts[0].files[0].url });
        };
        Scc = async function (a, b, c) {
          a = await Rcc(a, c);
          return ecc(b, a);
        };
        Ucc = async function (a, b, c, d, e, f, g) {
          const h = b.TAa.ref?.first(),
            k = a.Aa;
          c = await bcc(c, {
            config: b.config,
            f7: k != null && h != null ? await Rcc(k, h) : void 0,
          });
          a.config.DR?.ONa({ ...c, RH: c.RH?.size }, b, d, e, f, g);
          Tcc(() => {
            a.DS = !0;
          });
        };
        Vcc = function ({ jyb: a, Hoa: b, z1: c }) {
          return l0("div", {
            className: "ESUd4A",
            children: l0("div", {
              className: "INYK9g",
              ref: (d) => {
                a.current = d;
                c?.(d);
              },
              children: b(),
            }),
          });
        };
        Ycc = function (a, b) {
          const c = new Map();
          return Wcc(
            () => {
              const d = new Map();
              a.config.forEach((e, f) => {
                let g;
                const h = c.get(f);
                e.textContent !== h?.textContent &&
                  (g = { ...(g ?? new Xcc({})), textContent: e.textContent });
                e.backgroundColor !== h?.backgroundColor &&
                  (g = {
                    ...(g ?? new Xcc({})),
                    backgroundColor: e.backgroundColor,
                  });
                g && d.set(f, g);
                c.set(f, { ...e });
              });
              return d;
            },
            async (d) => Tbc(b, new Rbc({ config: d })),
            { fireImmediately: !0 }
          );
        };
        qdc = function (a) {
          function b(f, g) {
            var h = c;
            g = g();
            u(!h.Xaa.has(f));
            g = { document: Zcc(h.wVa(f, g.document)), G: Zcc(h.wVa(f, g.G)) };
            h.Xaa.set(f, g);
            return { id: f, pn: g };
          }
          const c = a.OOa,
            { Sha: d = __c.uc("c79472f0", !1) } = a,
            e = a.DZb ?? __c.uc("1d0cd616", !1);
          return {
            ps: b("w:wnJF5T87v", $cc),
            DY: b("w:xB9fK2LmQ", adc),
            oj: a.wza
              ? Promise.all([
                  __webpack_require__.me(288639).then(() => __c.bdc),
                  __webpack_require__.me(229274).then(() => __c.cdc),
                  __webpack_require__.me(89563).then(() => __c.ddc),
                  __webpack_require__.me(706140).then(() => __c.edc),
                  __webpack_require__.me(58313).then(() => __c.fdc),
                  __webpack_require__.me(879434).then(() => __c.gdc),
                  __webpack_require__.me(181007).then(() => __c.hdc),
                  __webpack_require__.me(354456).then(() => __c.idc),
                  __webpack_require__.me(920429).then(() => __c.jdc),
                  __webpack_require__.me(580825).then(() => __c.kdc),
                ]).then(([f, g, h, k, l, m, n, p, q, r]) => ({
                  lY: b("w:cm9wgGptP", f.fh),
                  nY: b("w:yLMS4dWnl", g.fh),
                  oY: b("w:2flp30CGQ", h.fh),
                  pY: b("w:1Nv6K6Dtv", k.fh),
                  qY: b("w:5Nv6K6Dtv", l.fh),
                  rY: b("w:6Nv6K6Dtv", m.fh),
                  sY: b("w:7Nv6K6Dtv", n.fh),
                  tY: b("w:8Nv6K6Dtv", p.fh),
                  uY: b("w:9Nv6K6Dtv", q.fh),
                  mY: b("w:sSrc7m4Q3", r.fh),
                }))
              : void 0,
            ey: b("w:JR4G8hDDg", ldc),
            CX: b("w:KS5H9iEEh", mdc),
            form: d
              ? __webpack_require__
                  .me(649e3)
                  .then(() => __c.ndc)
                  .then((f) => b("widget:form", f.fh))
              : void 0,
            oN: a.Eza
              ? __webpack_require__
                  .me(320784)
                  .then(() => __c.odc)
                  .then((f) => b("w:K7mQ9xR3p", f.fh))
              : void 0,
            scene: a.Jza
              ? __webpack_require__
                  .me(290120)
                  .then(() => __c.w0)
                  .then((f) => b("w:2pbXJMtm1", f.fh))
              : void 0,
            button: e
              ? __webpack_require__
                  .me(856598)
                  .then(() => __c.pdc)
                  .then((f) => b("w:PQccHDsCJ", f.fh))
              : void 0,
          };
        };
        wdc = function (a) {
          function b({ id: e, pn: f }, g) {
            var h = d;
            g = g();
            const k = y(h.vJa.Xaa.get(e));
            u(k.G === f.G);
            u(!h.AVa.has(e));
            f = rdc(e, g, f);
            h.AVa.set(e, f);
            return f;
          }
          const c = a.POa,
            d = a.NOa;
          return {
            oj: c.oj
              ? Promise.all([
                  c.oj,
                  __webpack_require__.me(288639).then(() => __c.bdc),
                  __webpack_require__.me(229274).then(() => __c.cdc),
                  __webpack_require__.me(89563).then(() => __c.ddc),
                  __webpack_require__.me(706140).then(() => __c.edc),
                  __webpack_require__.me(58313).then(() => __c.fdc),
                  __webpack_require__.me(879434).then(() => __c.gdc),
                  __webpack_require__.me(181007).then(() => __c.hdc),
                  __webpack_require__.me(354456).then(() => __c.idc),
                  __webpack_require__.me(920429).then(() => __c.jdc),
                  __webpack_require__.me(580825).then(() => __c.kdc),
                ]).then(([e, f, g, h, k, l, m, n, p, q, r]) => ({
                  lY: b(e.lY, f.eh),
                  nY: b(e.nY, g.eh),
                  oY: b(e.oY, h.eh),
                  pY: b(e.pY, k.eh),
                  qY: b(e.qY, l.eh),
                  rY: b(e.rY, m.eh),
                  sY: b(e.sY, n.eh),
                  tY: b(e.tY, p.eh),
                  uY: b(e.uY, q.eh),
                  mY: b(e.mY, r.eh),
                }))
              : void 0,
            scene: c.scene
              ? Promise.all([
                  c.scene,
                  __webpack_require__.me(290120).then(() => __c.w0),
                ]).then(([e, f]) => b(e, f.eh))
              : void 0,
            button: c.button
              ? Promise.all([
                  c.button,
                  __webpack_require__.me(856598).then(() => __c.pdc),
                ]).then(([e, f]) => b(e, f.eh))
              : void 0,
            ey: b(c.ey, sdc),
            CX: b(c.CX, tdc),
            form: c.form
              ? Promise.all([
                  c.form,
                  __webpack_require__.me(649e3).then(() => __c.ndc),
                ]).then(([e, f]) => b(e, f.eh))
              : void 0,
            ps: b(c.ps, udc),
            DY: b(c.DY, vdc),
            oN: c.oN
              ? Promise.all([
                  c.oN,
                  __webpack_require__.me(320784).then(() => __c.odc),
                ]).then(([e, f]) => b(e, f.eh))
              : void 0,
          };
        };
        Hdc = function (a) {
          const b = a.POa,
            c = a.vda,
            d = a.rf,
            e = a.RQ,
            f = a.Wh;
          class g extends xdc {
            async load() {
              const [m, n, p] = await Promise.all([
                  this.qn,
                  this.loadModule(),
                  Promise.resolve(this.Wh),
                ]),
                q = m.id,
                r = m.pn;
              var t = n.ko({
                  RQ: {
                    ...e,
                    Za: d.pw(`widgets.rendering.clients.${this.Dl}`),
                  },
                  Wh: p,
                }),
                v = y(c.vJa.Xaa.get(q));
              u(v.G === r.G);
              u(!c.pU.has(q));
              ydc.has(q) || (__c.FS.set(q, zdc), ydc.add(q));
              const { Btb: w, dN: z } = Adc(c, r, t);
              v = Bdc(c, r, t, z);
              t = {
                G: w,
                email: v,
                exports: t.exports,
                metadata: t.metadata,
                ADb: Cdc(r, t.metadata),
                dN: z,
                kha: t.kha,
              };
              c.pU.set(q, t);
              return { id: q, pn: r, QIa: t, Dl: this.Dl };
            }
            constructor(m) {
              super(m.id, m.loadModule);
              this.qn = m.qn;
              this.Wh = m.Wh;
              this.Dl = m.Dl ?? "default";
            }
          }
          const h = {
            ps: new g({
              id: "w:wnJF5T87v",
              qn: Promise.resolve(b.ps),
              loadModule: () => __webpack_require__.me(196751).then(() => Ddc),
              Wh: { YG: f.YG, yD: f.yD },
              Dl: "blueprint",
            }),
            DY: new g({
              id: "w:xB9fK2LmQ",
              qn: Promise.resolve(b.DY),
              loadModule: () => __webpack_require__.me(258551).then(() => Edc),
              Wh: { YG: f.YG },
              Dl: "documentBlueprint",
            }),
            lY: b.oj
              ? new g({
                  id: "w:cm9wgGptP",
                  qn: b.oj.then((m) => m.lY),
                  loadModule: () =>
                    __webpack_require__.me(288639).then(() => __c.bdc),
                  Wh: void 0,
                  Dl: "demo1",
                })
              : null,
            nY: b.oj
              ? new g({
                  id: "w:yLMS4dWnl",
                  qn: b.oj.then((m) => m.nY),
                  loadModule: () =>
                    __webpack_require__.me(229274).then(() => __c.cdc),
                  Wh: void 0,
                  Dl: "demo2",
                })
              : null,
            oY: b.oj
              ? new g({
                  id: "w:2flp30CGQ",
                  qn: Promise.resolve(b.oj.then((m) => m.oY)),
                  loadModule: () =>
                    __webpack_require__.me(89563).then(() => __c.ddc),
                  Wh: void 0,
                  Dl: "demo3",
                })
              : null,
            pY: b.oj
              ? new g({
                  id: "w:1Nv6K6Dtv",
                  qn: Promise.resolve(b.oj.then((m) => m.pY)),
                  loadModule: () =>
                    __webpack_require__.me(706140).then(() => __c.edc),
                  Wh: void 0,
                  Dl: "demo4",
                })
              : null,
            qY: b.oj
              ? new g({
                  id: "w:5Nv6K6Dtv",
                  qn: Promise.resolve(b.oj.then((m) => m.qY)),
                  loadModule: () =>
                    __webpack_require__.me(58313).then(() => __c.fdc),
                  Wh: void 0,
                  Dl: "demo5",
                })
              : null,
            rY: b.oj
              ? new g({
                  id: "w:6Nv6K6Dtv",
                  qn: Promise.resolve(b.oj.then((m) => m.rY)),
                  loadModule: () =>
                    __webpack_require__.me(879434).then(() => __c.gdc),
                  Wh: void 0,
                  Dl: "demo6",
                })
              : null,
            sY: b.oj
              ? new g({
                  id: "w:7Nv6K6Dtv",
                  qn: Promise.resolve(b.oj.then((m) => m.sY)),
                  loadModule: () =>
                    __webpack_require__.me(181007).then(() => __c.hdc),
                  Wh: void 0,
                  Dl: "demo7",
                })
              : null,
            tY: b.oj
              ? new g({
                  id: "w:8Nv6K6Dtv",
                  qn: Promise.resolve(b.oj.then((m) => m.tY)),
                  loadModule: () =>
                    __webpack_require__.me(354456).then(() => __c.idc),
                  Wh: void 0,
                  Dl: "demo8",
                })
              : null,
            uY: b.oj
              ? new g({
                  id: "w:9Nv6K6Dtv",
                  qn: Promise.resolve(b.oj.then((m) => m.uY)),
                  loadModule: () =>
                    __webpack_require__.me(920429).then(() => __c.jdc),
                  Wh: void 0,
                  Dl: "demo9",
                })
              : null,
            mY: b.oj
              ? new g({
                  id: "w:sSrc7m4Q3",
                  qn: Promise.resolve(b.oj.then((m) => m.mY)),
                  loadModule: () =>
                    __webpack_require__.me(580825).then(() => __c.kdc),
                  Wh: void 0,
                  Dl: "demo10",
                })
              : null,
            ey: new g({
              id: "w:JR4G8hDDg",
              qn: Promise.resolve(b.ey),
              loadModule: () => __webpack_require__.me(149342).then(() => Fdc),
              Wh: { Ksa: f.Ksa, Aa: f.Aa, OC: f.OC },
              Dl: "codelet",
            }),
            CX: new g({
              id: "w:KS5H9iEEh",
              qn: Promise.resolve(b.CX),
              loadModule: () => __webpack_require__.me(761582).then(() => Gdc),
              Wh: { Lsa: f.Lsa },
              Dl: "codelet2",
            }),
            form: b.form
              ? new g({
                  id: "widget:form",
                  qn: b.form,
                  loadModule: () =>
                    __webpack_require__.me(649e3).then(() => __c.ndc),
                  Wh: Promise.all([f.FM?.()]).then(([m]) => ({
                    ovb: m,
                    bE: f.bE,
                  })),
                  Dl: "form",
                })
              : null,
            oN: b.oN
              ? new g({
                  id: "w:K7mQ9xR3p",
                  qn: b.oN,
                  loadModule: () =>
                    __webpack_require__.me(320784).then(() => __c.odc),
                  Wh: void 0,
                  Dl: "navigationMenu",
                })
              : null,
            scene: b.scene
              ? new g({
                  id: "w:2pbXJMtm1",
                  qn: b.scene,
                  loadModule: () =>
                    __webpack_require__.me(290120).then(() => __c.w0),
                  Wh: { vz: f.vz },
                  Dl: "scene",
                })
              : null,
            button: b.button
              ? new g({
                  id: "w:PQccHDsCJ",
                  qn: b.button,
                  loadModule: () =>
                    __webpack_require__.me(856598).then(() => __c.pdc),
                  Wh: void 0,
                  Dl: "button",
                })
              : null,
          };
          a = new Set([
            "widget:form",
            "w:JR4G8hDDg",
            "w:wnJF5T87v",
            "w:2pbXJMtm1",
            "w:PQccHDsCJ",
          ]);
          const k = [];
          for (var l of Object.values(h))
            l && a.has(l.id) && k.push(l.cn(Promise.resolve()));
          l = Promise.allSettled(k).then(() => {});
          return {
            pU: {
              ps: h.ps.cn(l),
              DY: h.DY.cn(l),
              oj: b.oj && {
                lY: h.lY.cn(l),
                nY: h.nY.cn(l),
                oY: h.oY.cn(l),
                pY: h.pY.cn(l),
                qY: h.qY.cn(l),
                rY: h.rY.cn(l),
                sY: h.sY.cn(l),
                tY: h.tY.cn(l),
                uY: h.uY.cn(l),
                mY: h.mY.cn(l),
              },
              ey: h.ey.cn(l),
              CX: h.CX.cn(l),
              form: h.form?.cn(l) ?? void 0,
              oN: h.oN?.cn(l) ?? void 0,
              scene: h.scene?.cn(l) ?? void 0,
              button: h.button?.cn(l) ?? void 0,
            },
            GZa: () => {
              const m = [];
              for (const n of Object.values(h))
                n && m.push(n.cn(Promise.resolve()));
              return Promise.allSettled(m);
            },
          };
        };
        Idc = function (a) {
          var b = { document: void 0, G: void 0 };
          const c = new Map();
          for (const d in b) a[d].tL.forEach((e, f) => c.set(f, e));
          return {
            tL: c,
            decode: (d) => {
              const e = new Map(),
                f = {};
              for (const g in d) {
                const h = a[g].decode(d[g]);
                h.oJa.forEach((k, l) => e.set(l, k));
                f[g] = h.data;
              }
              return { oJa: e, data: f };
            },
            encode: (d) => ke(b, (e, f) => a[f].encode(d[f])),
          };
        };
        Jdc = function (a) {
          return () => a;
        };
        Kdc = function (a) {
          return a();
        };
        Ldc = function (a, b, c) {
          return new x0([a], b, c);
        };
        y0 = function (a, b, c, d) {
          return new x0([a, b], c, d);
        };
        z0 = function (a, b, c, d) {
          return new Mdc(a, b, c, d);
        };
        Ndc = function (a, b) {
          return b(a);
        };
        Odc = function (a) {
          return (b, c) => ({ kind: 2, name: a, args: [b, c] });
        };
        Pdc = function (a) {
          return (b) => ({ kind: 3, name: a, args: b });
        };
        A0 = function (a, b) {
          return a === b || b.map((c) => a.mDa(Qdc(c)));
        };
        Sdc = function (a, b) {
          return a.BFa(b).map((c) => new Rdc(c, (d) => d.props[b]));
        };
        Qdc = function (a) {
          u(a instanceof Tdc);
          return a;
        };
        B0 = function (a) {
          const b = new WeakMap();
          return function (c) {
            let d = b.get(c);
            d == null && ((d = a.call(this, c)), b.set(c, d));
            return d;
          };
        };
        Wdc = function (a, b) {
          if (a === b) return !0;
          switch (typeof a) {
            case "string":
            case "number":
            case "boolean":
            case "undefined":
              return !1;
            case "object":
              if (typeof b !== "object" || a.kind !== b.kind) return !1;
              switch (a.kind) {
                case "array":
                  return b.kind === "array" && Udc(a.items, b.items);
                case "set":
                  var c;
                  if ((c = b.kind === "set"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : Udc([...a], [...b]));
                  return c;
                case "map":
                  if ((c = b.kind === "map"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : Udc(
                              [...a.keys(), ...a.values()],
                              [...b.keys(), ...b.values()]
                            ));
                  return c;
                case "record":
                  return b.kind === "record" && Vdc(a.fields, b.fields);
                case "instance":
                  return b.kind === "instance" && a.instance === b.instance;
                default:
                  throw new E(a);
              }
            default:
              throw new E(a);
          }
        };
        Udc = function (a, b) {
          if (a === b) return !0;
          if (a.length !== b.length) return !1;
          for (let c = 0; c < a.length; c++) if (!Wdc(a[c], b[c])) return !1;
          return !0;
        };
        Vdc = function (a, b) {
          if (a === b) return !0;
          const c = Object.keys(a),
            d = Object.keys(b),
            e = new Set([...c, ...d]);
          if (c.length !== e.size || d.length !== e.size) return !1;
          for (const f of e) if (!Wdc(a[f], b[f])) return !1;
          return !0;
        };
        C0 = function (a) {
          return typeof a === "string" ? JSON.stringify(a) : String(a);
        };
        Ydc = function (a, b) {
          return a.map((c) => b.map((d) => Xdc[0](c, d)));
        };
        $dc = function (a, b, c) {
          return b.map((d) => Zdc[a](d, c));
        };
        aec = function (a, b) {
          return new D0(new E0(new Map(b), a.vars), a.v7);
        };
        cec = function (a, b, c) {
          for (const [e, f] of c.v7) {
            var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
            d = bec(b, d, (g) => F0(a, g, f.body));
            b = new D0(b.vars, b.v7.define(e, d));
          }
          return F0(a, b, c.body);
        };
        F0 = function (a, b, c) {
          switch (c.kind) {
            case 1:
              return dec(c.value);
            case 2:
              const f = c.args.map((q) => F0(a, b, q));
              c = c.name;
              return typeof c === "string"
                ? b.v7.resolve(c).map((q) => eec(q, f))
                : fec[c].map((q) => gec(q, f));
            case 3:
              const g = c.args.map((q) =>
                q.kind !== 13 ? new hec(F0(a, b, q)) : new iec(F0(a, b, q.h3b))
              );
              c = c.name;
              switch (c) {
                case 0:
                case 1:
                  var d = g.map((q) =>
                    q.KAa(
                      (r) => r.type,
                      (r) => r.type.YS()
                    )
                  );
                  return G0.union(...d)
                    .map(jec[c])
                    .map((q) => kec(q, g));
                default:
                  return lec[c].map((q) => kec(q, g));
              }
            case 4:
              d = c.name;
              var e = c.param;
              const h = c.body,
                k = F0(a, b, c.IX);
              c = k.type.YS();
              const l = bec(b, [[e, c]], (q) => F0(a, q, h));
              return $dc(d, c, l.resultType).map((q) => mec(q, k, l));
            case 5:
              const m = c.entries.map(([q, r]) => [F0(a, b, q), F0(a, b, r)]);
              c = G0.union(...m.map(([q]) => q.type));
              d = G0.union(...m.map(([, q]) => q.type));
              if (!A0(c, G0.primitive))
                throw Error(`key type is not a primitive: ${c}`);
              return Ydc(c, d).map((q) => nec(q, m));
            case 6:
              const n = ke(c.fields, (q) => F0(a, b, q));
              c = ke(n, (q) => q.type);
              return (0, oec[0])(c).map((q) => pec(q, n));
            case 7:
              d = a.types.resolve(c.name);
              if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
              const p = F0(a, b, { kind: 6, fields: c.args });
              return d.iEb.map((q) => gec(q, [p], { bq: !0 }));
            case 8:
              return (d = F0(a, b, c.base)), qec(d, c.mac);
            case 9:
              return rec(b, c.name);
            case 10:
              return (d = Tc(c.defs, (q) => F0(a, b, q))), sec(a, b, d, c.body);
            case 11:
              return (
                (d = F0(a, b, c.test).as(G0.ah)),
                (e = F0(a, b, c.dXb)),
                (c = F0(a, b, c.alternate)),
                tec(d, e, c)
              );
            case 12:
              return F0(a, b, c.body).computed();
            default:
              throw new E(c);
          }
        };
        dec = function (a) {
          switch (typeof a) {
            case "string":
              return H0(G0.string, a);
            case "number":
              return H0(G0.number, a);
            case "boolean":
              return H0(G0.ah, a);
            case "undefined":
              return H0(G0.undefined, a);
            default:
              throw new E(a);
          }
        };
        qec = function (a, b) {
          return a.map((c) =>
            Sdc(c, b).map(({ type: d, get: e }) => gec(new x0([c], d, e), [a]))
          );
        };
        rec = function (a, b) {
          return a.vars.resolve(b).map((c) => I0.of(c, (d) => d.resolve(b)));
        };
        sec = function (a, b, c, d) {
          const e = Tc(c, (g) => g.type),
            f = Tc(c, (g) => g.evaluate);
          return uec(F0(a, aec(b, e), d), (g) => {
            const h = Tc(f, (k) => k(g));
            return new E0(new Map(h), g);
          });
        };
        tec = function (a, b, c) {
          return b.map((d, e) =>
            c.map((f, g) => {
              f = G0.union(d, f);
              return I0.of(f, (h) => {
                const k = a(h),
                  l = e(h),
                  m = g(h);
                return () => (k() ? l() : m());
              });
            })
          );
        };
        J0 = function (a) {
          return (b) => b(a);
        };
        eec = function ({ Lna: a, resultType: b, evaluate: c }, d) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const e = vec(a, (f, g) => d[g].as(f));
          return I0.of(b, (f) => {
            const g = e.map(J0(f));
            return c(f)(...g);
          });
        };
        gec = function ({ Lna: a, resultType: b, apply: c }, d, e) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const f = vec(a, (g, h) => d[h].as(g));
          return I0.of(b, (g) => {
            g = f.map(J0(g));
            return wec(e?.bq ? xec(c) : c, g);
          });
        };
        kec = function ({ DHb: a, resultType: b, apply: c }, d) {
          let e;
          const f = d.map((g) =>
            g.uva(
              (h) => h.as(a),
              (h) => h.as(e ?? (e = G0.IX(a)))
            )
          );
          return new I0(b, (g) => {
            const h = J0(g),
              k = f.map((l) => l.uva(h, h));
            return () => {
              const l = [];
              k.forEach((m) => {
                m.KAa(
                  (n) => l.push(n()),
                  (n) => l.push(...n())
                );
              });
              return c(l);
            };
          });
        };
        nec = function (
          { keyType: a, valueType: b, resultType: c, apply: d },
          e
        ) {
          const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
          return new I0(c, (g) => {
            const h = f.map(([k, l]) => [k(g), l(g)]);
            return () => d(h.map(([k, l]) => [k(), l()]));
          });
        };
        pec = function ({ dmb: a, resultType: b, apply: c }, d) {
          const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
          if (e.length) throw Error(`too few arguments (missing ${e})`);
          const f = yec(a, (g, h) => d[h].as(g));
          return new I0(b, (g) => {
            const h = ke(f, J0(g));
            return () => {
              var k = ke(h, Kdc);
              return c(k);
            };
          });
        };
        H0 = function (a, b) {
          const c = Jdc(b);
          return new I0(a, () => c);
        };
        mec = function (
          { itemType: a, xmb: b, resultType: c, reduce: d },
          e,
          f
        ) {
          const g = f.as([a], b),
            h = e.as(G0.IX(a));
          return new I0(c, (k) => {
            const l = h(k),
              m = g(k),
              n = xec((p) => {
                p = p.map(Jdc);
                return [p, p.map(m)];
              });
            return () => {
              const [p, q] = n(l());
              return d(p, q);
            };
          });
        };
        uec = function (a, b) {
          const c = a.evaluate;
          return new I0(a.type, (d) => c(b(d)));
        };
        bec = function (a, b, c) {
          const d = b.map((f) => f[0]),
            e = b.map((f) => f[1]);
          return Ndc(e, (f) =>
            c(aec(a, new Map(b))).map(
              (g, h) =>
                new zec(f, g, (k) => (...l) => {
                  const m = new Map(d.map((n, p) => [n, l[p]]));
                  return h(new E0(new Map(m), k));
                })
            )
          );
        };
        wec = function (a, b) {
          switch (b.length) {
            case 0:
              return a;
            case 1:
              const [c] = b;
              return () => a(c());
            case 2:
              const [d, e] = b;
              return () => a(d(), e());
            default:
              return () => {
                var f = b.map(Kdc);
                return a(...f);
              };
          }
        };
        xec = function (a) {
          let b;
          return (...c) => {
            if (
              b &&
              b.Jgb.length === c.length &&
              b.Jgb.every((e, f) => K0.sh(e, c[f]))
            )
              return b.v;
            const d = a(...c);
            b = { Jgb: c, v: d };
            return d;
          };
        };
        yec = function (a, b) {
          return ke(a, b);
        };
        vec = function (a, b) {
          return a.map(b);
        };
        Bec = function (a, b, c) {
          return new Aec(a, b, c);
        };
        Cec = function (a, b) {
          return [...a].map(b)[Symbol.iterator]();
        };
        L0 = function (a, b, c, d) {
          if (d == null) throw a.error(b.fM(c), "not found");
          return d;
        };
        Rec = function (a) {
          function b(r) {
            return m[r.kind](r);
          }
          const c = a.types,
            d = a.values;
          class e {
            static of(r, t, v, w, z, A) {
              return new e(r, v, w, Dec(z, Eec(t)), Fec(A, Eec(t)));
            }
            map(r) {
              return r(this);
            }
            validate(r) {
              return r
                ? new e(
                    this.dataType,
                    this.Tca,
                    this.tca,
                    Gec(this.decode, r),
                    Dec(this.encode, r)
                  )
                : this;
            }
            constructor(r, t, v, w, z) {
              this.dataType = r;
              this.Tca = t;
              this.tca = v;
              this.decode = w;
              this.encode = z;
            }
          }
          const f = e.of(
              { kind: 0 },
              "string",
              c.string,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "string", value: v })
            ),
            g = e.of(
              { kind: 1 },
              "boolean",
              c.ah,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "boolean", value: v })
            ),
            h = e
              .of(
                { kind: 2 },
                "double",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "double", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isFinite(v))
                  throw r.error(t, `number is not finite: ${v}`);
              }),
            k = e
              .of(
                { kind: 3 },
                "int32",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "int32", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isInteger(v) || v < -2147483648 || v > 2147483647)
                  throw r.error(t, `number is not an int32: ${v}`);
              }),
            l = {
              FontRef: e.of(
                { kind: 7, name: "FontRef" },
                "ref",
                c.instance("FontRef"),
                (r) => d.instance("FontRef", r),
                M0("font"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              MediaRef: e.of(
                { kind: 7, name: "MediaRef" },
                "ref",
                c.instance("MediaRef"),
                (r) => d.instance("MediaRef", r),
                M0("media"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              VideoRef: e.of(
                { kind: 7, name: "VideoRef" },
                "ref",
                c.instance("VideoRef"),
                (r) => d.instance("VideoRef", r),
                M0("video"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              AudioRef: e.of(
                { kind: 7, name: "AudioRef" },
                "ref",
                c.instance("AudioRef"),
                (r) => d.instance("AudioRef", r),
                M0("audio"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              EmbedRef: e.of(
                { kind: 7, name: "EmbedRef" },
                "ref",
                c.instance("EmbedRef"),
                (r) => d.instance("EmbedRef", r),
                M0("embed"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              SceneRef: e.of(
                { kind: 7, name: "SceneRef" },
                "ref",
                c.instance("SceneRef"),
                (r) => d.instance("SceneRef", r),
                M0("scene"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              BlueprintRef: e.of(
                { kind: 7, name: "BlueprintRef" },
                "ref",
                c.instance("BlueprintRef"),
                (r) => d.instance("BlueprintRef", r),
                M0("blueprint"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              Fill: e.of(
                { kind: 7, name: "Fill" },
                "fill",
                c.instance("Fill"),
                (r) => d.instance("Fill", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "fill", value: v })
              ),
              Stroke: e.of(
                { kind: 7, name: "Stroke" },
                "stroke",
                c.instance("Stroke"),
                (r) => d.instance("Stroke", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "stroke", value: v })
              ),
              Richtext2: e.of(
                { kind: 7, name: "Richtext2" },
                "text2",
                c.instance("Richtext2"),
                (r) => d.instance("Richtext2", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "text2", value: v })
              ),
            },
            m = {
              [0]: (r) => f.validate(Hec(r.hO)),
              [1]: () => g,
              [2]: (r) => h.validate(Iec(r.range)),
              [3]: (r) => k.validate(Iec(r.range)),
              [4]: (r) =>
                e
                  .of(
                    { kind: 4, values: r.values },
                    Jec,
                    c.primitive,
                    (t) => t,
                    (t, v, w) => w.value,
                    (t, v, w) => {
                      a: switch (typeof w) {
                        case "string":
                          t = { type: "string", value: w };
                          break a;
                        case "boolean":
                          t = { type: "boolean", value: w };
                          break a;
                        case "number":
                          t = { type: "int32", value: w };
                          break a;
                        default:
                          throw new E(w);
                      }
                      return t;
                    }
                  )
                  .validate(Kec(r.values)),
              [5]: (r) => {
                const {
                  dataType: t,
                  Tca: v,
                  tca: w,
                  decode: z,
                  encode: A,
                } = b(r.itemType);
                return e.of(
                  { kind: 5, itemType: t },
                  "list",
                  c.array(v),
                  (C) => d.array(C.map(w)),
                  (C, B, D) =>
                    D.value.toArray().map((I, L) => z(C, B.ZR(L), I)),
                  (C, B, D) => ({
                    type: "list",
                    value: D.map((I, L) => A(C, B.ZR(L), I)),
                  })
                );
              },
              [6]: (r) => {
                const {
                  dataType: t,
                  Tca: v,
                  tca: w,
                  decode: z,
                  encode: A,
                } = b(r.itemType);
                return e.of(
                  { kind: 6, itemType: t },
                  "dict",
                  c.map(c.string, v),
                  (C) => d.map(Tc(C, w)),
                  (C, B, D) => Tc(D.value.Cl(), (I, L) => z(C, B.l7(L), I)),
                  (C, B, D) => ({
                    type: "dict",
                    value: Tc(D, (I, L) => A(C, B.l7(L), I)),
                  })
                );
              },
              [7]: (r) => l[r.name],
              [8]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 8, itemType: t },
                  "list",
                  c.undefined,
                  () => {},
                  (z, A, C) =>
                    wcc(
                      C.value,
                      (B) => w(z, A.ZR("*"), B),
                      Lec(v, z, A.ZR("*"))
                    ),
                  (z, A, C) => ({
                    type: "list",
                    value: C.map((B, D) => w(z, A.ZR(D), B)),
                  })
                );
              },
              [9]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 9, itemType: t },
                  "dict",
                  c.undefined,
                  () => {},
                  (z, A, C) =>
                    Bec(
                      C.value,
                      (B) => w(z, A.l7("*"), B),
                      Lec(v, z, A.ZR("*"))
                    ),
                  (z, A, C) => ({
                    type: "dict",
                    value: Tc(C, (B, D) => w(z, A.l7(D), B)),
                  })
                );
              },
              [10]: (r) => {
                const { decode: t, encode: v } = p.v3a(r.fields);
                return e.of(
                  { kind: 10, fields: r.fields },
                  "dict",
                  c.undefined,
                  () => {},
                  t,
                  v
                );
              },
              [11]: (r) => {
                function t(I, L, N, P) {
                  N = N.get(P);
                  if (N == null)
                    throw I.error(
                      L,
                      `unknown case for discriminator value: ${P}`
                    );
                  return N;
                }
                const v = r.pXa;
                r = r.wg;
                var w = Object.keys(v);
                u(w.length >= 1, "missing discriminator props");
                u(w.length <= 1, "too many discriminator props: {}", w);
                const z = w[0];
                u(r.length >= 1, "discriminated union has no cases");
                w = new Map();
                for (const I of r) {
                  const L = I.fields[z].type.values,
                    N = b(I);
                  for (const P of L)
                    u(
                      !w.has(P),
                      "discriminator values are not unique across cases: {}",
                      P
                    ),
                      w.set(P, N);
                }
                const { decode: A, encode: C } = b({
                    kind: 4,
                    values: new Set(w.keys()),
                  }),
                  B = Tc(w, (I) => I.decode),
                  D = Tc(w, (I) => I.encode);
                return e.of(
                  { kind: 11, pXa: v, wg: r },
                  "dict",
                  c.undefined,
                  () => {},
                  (I, L, N) => {
                    var P = L0(I, L, "k", N.value.get("k"));
                    N = L0(I, L, "v", N.value.get("v"));
                    Mec(I, L, "dict", N);
                    P = A(I, L, P);
                    return t(I, L, B, P)(I, L, N);
                  },
                  (I, L, N) => {
                    const P = N[z],
                      Q = t(I, L, D, P);
                    return {
                      type: "dict",
                      value: new Map([
                        ["k", C(I, L, P)],
                        ["v", Q(I, L, N)],
                      ]),
                    };
                  }
                );
              },
            },
            n = Symbol("$impl");
          class p {
            static v3a(r) {
              r = ke(r, (w) => q.of(w));
              const t = ke(r, (w) => w.lOb()),
                v = Object.entries(r);
              return {
                tL: new Map(v.map(([, w]) => w.gOb())),
                mOb: (w) => {
                  const z = w[n];
                  return new Map(v.map(([, A]) => A.nOb(z)));
                },
                decode: (w, z, A) => {
                  const C = Object.create(null, t);
                  Object.defineProperty(C, n, {
                    enumerable: !1,
                    writable: !1,
                    value: new p(w, z, A.value),
                  });
                  return C;
                },
                encode: (w, z, A) => {
                  const C = v.map(([B, D]) => D.encode(w, z, A[B]));
                  return { type: "dict", value: new Map(C.filter(__c.nb)) };
                },
              };
            }
            KBa(r, t) {
              const v = L0(this.e, this.p, t, this.data.get(t));
              return Nec(this.WYa, r.decode, this.e, this.p.fM(t), v);
            }
            HBa(r, t) {
              const v = this.data.get(t);
              if (v != null)
                return Nec(this.WYa, r.decode, this.e, this.p.fM(t), v);
            }
            fcb(r, t, v) {
              this.data.set(t, r.encode(this.e, this.p.fM(t), v));
            }
            Zbb(r, t, v) {
              v != null
                ? this.data.set(t, r.encode(this.e, this.p.fM(t), v))
                : this.data.delete(t);
            }
            constructor(r, t, v) {
              this.e = r;
              this.p = t;
              this.data = v;
              this.WYa = new WeakMap();
              this.hTa = new Map();
              this.Kwb = Oec(this.hTa, (w, z) => {
                const A = this;
                return {
                  get ref() {
                    return A.KBa(z, w);
                  },
                  set(C) {
                    A.fcb(z, w, C);
                  },
                };
              });
              this.ywb = Oec(this.hTa, (w, z) => {
                const A = this;
                return {
                  get ref() {
                    return A.HBa(z, w);
                  },
                  set(C) {
                    A.Zbb(z, w, C);
                  },
                };
              });
            }
          }
          class q {
            static of(r) {
              return new q(r, b(r.type));
            }
            gOb() {
              const r = this.key,
                t = this.Fb,
                v = this.type;
              switch (t.tF) {
                case 0:
                  return [r, v.Tca];
                case 1:
                  return [r, c.optional(v.Tca)];
                default:
                  throw new E(t.tF);
              }
            }
            nOb(r) {
              const t = this.key,
                v = this.Fb,
                w = this.type;
              switch (v.tF) {
                case 0:
                  return [t, () => w.tca(r.KBa(w, t))];
                case 1:
                  return [
                    t,
                    () => {
                      const z = r.HBa(w, t);
                      return z != null ? w.tca(z) : void 0;
                    },
                  ];
                default:
                  throw new E(v.tF);
              }
            }
            lOb() {
              const r = this.key;
              var t = this.Fb;
              const v = this.type;
              if (Ecc(v.dataType) && t.RKa === 1) {
                switch (t.tF) {
                  case 0:
                    t = function () {
                      return this[n].Kwb(r, v);
                    };
                    break;
                  case 1:
                    t = function () {
                      return this[n].ywb(r, v);
                    };
                    break;
                  default:
                    throw new E(t.tF);
                }
                return { enumerable: !0, get: t };
              }
              let w;
              switch (t.tF) {
                case 0:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].KBa(v, r);
                    },
                    set(z) {
                      this[n].fcb(v, r, z);
                    },
                  };
                  break;
                case 1:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].HBa(v, r);
                    },
                    set(z) {
                      this[n].Zbb(v, r, z);
                    },
                  };
                  break;
                default:
                  throw new E(t.tF);
              }
              switch (t.RKa) {
                case 0:
                  w.set = void 0;
                  break;
                case 1:
                  break;
                default:
                  throw new E(t.RKa);
              }
              return w;
            }
            encode(r, t, v) {
              const w = this.key,
                z = this.Fb,
                A = this.type;
              switch (z.tF) {
                case 0:
                  return [w, A.encode(r, t.fM(w), L0(r, t, w, v))];
                case 1:
                  return v != null ? [w, A.encode(r, t.fM(w), v)] : void 0;
                default:
                  throw new E(z.tF);
              }
            }
            constructor(r, t) {
              this.Fb = r;
              this.type = t;
              r = r.key;
              u(r > 0 && Number.isInteger(r));
              if (r <= 52)
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                  r - 1
                ];
              else {
                for (t = ""; r > 0; )
                  r--,
                    (t =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                        r % 52
                      ] + t),
                    (r = Math.floor(r / 52));
                r = t;
              }
              this.key = r;
            }
          }
          return (r, t) => {
            const v = new Pec(r),
              w = new Qec(),
              { tL: z, mOb: A, decode: C, encode: B } = p.v3a(t);
            return {
              tL: z,
              decode: (D) => {
                D = C(v, w, { type: "dict", value: D });
                return { oJa: A(D), data: D };
              },
              encode: (D) => B(v, w, D).value,
            };
          };
        };
        Oec = function (a, b) {
          return (c, ...d) => {
            a.has(c) || a.set(c, b(c, ...d));
            return a.get(c);
          };
        };
        Lec = function (a, b, c) {
          const d = new WeakMap();
          return (e) => Nec(d, a, b, c, e);
        };
        Nec = function (a, b, c, d, e) {
          let f = a.get(e);
          f == null && ((f = b(c, d, e)), a.set(e, f));
          return f;
        };
        Dec = function (a, b) {
          return (c, d, e) => {
            b(c, d, e);
            return a(c, d, e);
          };
        };
        Gec = function (a, b) {
          return (c, d, e) => {
            e = a(c, d, e);
            b(c, d, e);
            return e;
          };
        };
        Fec = function (a, b) {
          var c = Sec();
          return (d, e, f) => {
            f = a(d, e, f);
            b(d, e, f);
            c(d, e, f);
            return f;
          };
        };
        Mec = function (a, b, c, d) {
          if (d.type !== c)
            throw a.error(b, `type error: expected ${c}, was ${d.type}`);
        };
        Eec = function (a) {
          return typeof a === "string"
            ? (b, c, d) => Mec(b, c, a, d)
            : (b, c, d) => {
                if (!a.has(d.type))
                  throw b.error(
                    c,
                    `type error: expected one of ${[...a].join(" or ")}, was ${
                      d.type
                    }`
                  );
              };
        };
        Sec = function () {
          return (a, b, c) => {
            if (typeof c.value !== Tec[c.type])
              throw a.error(
                b,
                `type error: expected ${c.type}, was ${typeof c.value}`
              );
          };
        };
        Kec = function (a) {
          return (b, c, d) => {
            if (!a.has(d))
              throw b.error(
                c,
                `expected one of ${[...a].join(" or ")}, was ${d}`
              );
          };
        };
        Iec = function (a) {
          if (a) {
            var b = a.min,
              c = a.max;
            u(b == null || c == null || b <= c);
            return (d, e, f) => {
              if (b != null && f < b)
                throw d.error(e, `value below min ${b}: ${f}`);
              if (c != null && f > c)
                throw d.error(e, `value above max ${b}: ${f}`);
            };
          }
        };
        Hec = function (a) {
          if (a)
            return (b, c, d) => {
              if (!a.test(d))
                throw b.error(c, `value does not match regex ${a}: '${d}'`);
            };
        };
        M0 = function (a) {
          return (b, c, d) => {
            if (d.value.type !== a)
              throw b.error(
                c,
                `expected ${Uec[a]} resource type, got ${Uec[d.value.type]}`
              );
            return { ...d.value, type: a };
          };
        };
        N0 = function (a) {
          return typeof a === "function";
        };
        Wec = function (a) {
          return { get: () => a, set: Vec };
        };
        Xec = function (...a) {
          const b = new Set(),
            c = new Set();
          for (const d of a) for (const e in d) b.has(e) ? c.add(e) : b.add(e);
          if (c.size)
            throw Error(
              `keys not disjoint: ${[...c].map((d) => `'${d}'`).join(", ")}`
            );
        };
        Yec = function (a, b) {
          return () => b(ke(a, (c) => c()));
        };
        $ec = function (a) {
          u(a.length === 1);
          let b;
          return (c) => {
            if (b != null && Zec(b[0], c)) return b[1];
            const d = a(c);
            b = [c, d];
            return d;
          };
        };
        Zec = function (a, b) {
          if (a === b) return !0;
          if (a == null || b == null) return !1;
          const c = Object.keys(a),
            d = Object.keys(b);
          if (c.length !== d.length) return !1;
          for (const e of c) if (a[e] !== b[e]) return !1;
          return !0;
        };
        bfc = function (a) {
          var b = afc;
          return {
            A3: b({
              Jp: a.A3,
              args: {},
              Be: {
                U: { image: void 0, video: void 0, Ra: void 0 },
                attributes: {
                  Yl: void 0,
                  color: void 0,
                  xa: void 0,
                  locked: void 0,
                  qg: void 0,
                  Vk: void 0,
                  Zc: void 0,
                  flipX: void 0,
                  flipY: void 0,
                },
              },
            }),
            uta: b({
              Jp: a.uta,
              args: {},
              Be: {
                U: { fill: void 0 },
                attributes: {
                  weight: void 0,
                  color: void 0,
                  Rc: void 0,
                  xe: void 0,
                },
              },
            }),
            kW: b({
              Jp: a.kW,
              args: { d: void 0 },
              Be: {
                U: { fill: void 0, stroke: void 0 },
                attributes: { O: void 0 },
              },
            }),
            F3: b({
              Jp: a.F3,
              args: {},
              Be: {
                U: { fill: void 0, stroke: void 0 },
                attributes: { ...O0, O: void 0 },
              },
            }),
            ota: b({
              Jp: a.ota,
              args: {},
              Be: {
                U: {
                  yb: void 0,
                  resizeMode: void 0,
                  slice: void 0,
                  gb: void 0,
                },
                attributes: { ...O0, Jj: void 0, viewBox: void 0 },
              },
            }),
            Zda: b({
              Jp: a.Zda,
              args: {},
              Be: {
                U: { text: void 0 },
                attributes: {
                  ...O0,
                  rA: void 0,
                  Gh: void 0,
                  Ha: void 0,
                  I: void 0,
                  N: void 0,
                  Df: void 0,
                },
              },
            }),
            CPa: b({
              Jp: a.CPa,
              args: { url: void 0, I: void 0, N: void 0 },
              Be: { U: {}, attributes: O0 },
            }),
          };
        };
        P0 = function (a, b) {
          return (c) => b({ ...a, ...c });
        };
        gfc = function () {
          return bfc({
            A3: P0(Q0, (a) => yd(__c.wO, a)),
            uta: P0(cfc, (a) => yd(__c.MA, a)),
            kW: P0(dfc, (a) => yd(__c.qS, a)),
            F3: P0(R0, (a) => yd(__c.uB, { ...a, id: hE.generate() })),
            ota: P0(S0, (a) =>
              yd(__c.vB, {
                ...a,
                gb: [],
                viewBox: { top: 0, left: 0, width: 1, height: 1 },
                id: hE.generate(),
              })
            ),
            Zda: P0(efc, (a) => yd(__c.wB, { ...a, id: hE.generate() })),
            CPa: P0(ffc, (a) => yd(__c.xB, { ...a, id: hE.generate() })),
          });
        };
        kfc = function () {
          return new hfc({})
            .add((a, b) => ({
              FontRef: new a(
                "FontRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "font", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              MediaRef: new a(
                "MediaRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "media", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              VideoRef: new a("VideoRef", { id: b.string }, (c) => ({
                type: "video",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              AudioRef: new a("AudioRef", { id: b.string }, (c) => ({
                type: "audio",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              EmbedRef: new a("EmbedRef", { id: b.string }, (c) => ({
                type: "embed",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              SceneRef: new a("SceneRef", { id: b.string }, (c) => ({
                type: "scene",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              BlueprintRef: new a(
                "BlueprintRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "blueprint", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              Fill: new a("Fill", { color: b.string }, (c) =>
                __c.wO.create({ ...Q0, color: c.color })
              ),
            }))
            .add((a, b) => ({
              Stroke: new a(
                "Stroke",
                {
                  color: b.string,
                  weight: b.number,
                  Rc: b.array(b.number),
                  xe: b.ah,
                },
                (c) =>
                  __c.MA.create({
                    ...cfc,
                    color: c.color,
                    weight: c.weight,
                    Rc: c.Rc.items,
                    xe: c.xe,
                  })
              ),
            }))
            .add((a, b) => ({
              Richtext2: new a(
                "Richtext2",
                {
                  rvb: b.array(
                    b.Vb({ sb: b.string, attrs: b.map(b.string, b.string) })
                  ),
                },
                (c) => {
                  c = c.rvb;
                  const d = __c.Kk.Db();
                  c.items.forEach((e) => {
                    const f = e.fields.sb;
                    d.attrs(__c.Mf(e.fields.attrs.items));
                    d.sb(f);
                  });
                  return __c.Kk.create(d.build());
                }
              ),
            }))
            .add((a, b) => ({
              Path: new a(
                "Path",
                {
                  d: b.string,
                  fill: b.instance("Fill"),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = c.fill;
                  c = __c.qS.create({ ...dfc, d: c.d, fill: Q0 });
                  Object.defineProperties(c, {
                    fill: { value: e.instance },
                    stroke: { value: ifc(d) },
                  });
                  return c;
                }
              ),
            }))
            .add((a, b) => ({
              RectElement: new a(
                "RectElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  fill: b.instance("Fill"),
                  O: b.union(b.array(b.number), b.undefined),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = __c.uB.create({
                      ...R0,
                      id: hE.generate(),
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation: c.rotation ?? R0.rotation,
                      fill: Q0,
                      O: c.O?.items ?? R0.O,
                    });
                  Object.defineProperties(e, {
                    fill: { value: c.fill.instance },
                    stroke: { value: ifc(d) },
                  });
                  return e;
                }
              ),
            }))
            .add((a, b) => ({
              ShapeElement: new a(
                "ShapeElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  xa: b.union(b.number, b.undefined),
                  viewBox: b.Vb({
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                  }),
                  gb: b.array(b.instance("Path")),
                },
                (c) => {
                  const d = __c.vB.create({
                    ...S0,
                    id: hE.generate(),
                    top: c.top,
                    left: c.left,
                    width: c.width,
                    height: c.height,
                    rotation: c.rotation ?? S0.rotation,
                    xa: c.xa ?? S0.xa,
                    gb: [],
                    viewBox: c.viewBox.fields,
                  });
                  Object.defineProperties(d, {
                    gb: {
                      value: new jfc(
                        c.gb.items.map((e) => T0(() => e.instance))
                      ),
                    },
                  });
                  return d;
                }
              ),
            }));
        };
        ifc = function (a) {
          return (
            a && {
              ref: a.instance,
              set() {
                throw Error(
                  "Replacing of stroke on a model unit is not yet supported"
                );
              },
            }
          );
        };
        rdc = function (a, b, c) {
          return ke(b, (d) => (...e) => {
            const {
              data: f,
              P: { width: g, height: h },
            } = d(...e);
            e = c.G.encode(f.G);
            const k =
              c.document.tL.size > 0 ? c.document.encode(f.document) : void 0;
            return {
              Kc: { ...__c.TDb, app: { id: a, version: 1 } },
              TYb: k,
              Qd: e,
              Xe: { width: g, height: h },
            };
          });
        };
        mfc = function (a, b) {
          return class extends lfc {
            componentDidCatch(c) {
              a.error(c);
              this.setState({ hasError: !0 });
            }
            render() {
              return this.state.hasError
                ? l0(__c.sx, {
                    background: "criticalLow",
                    width: "full",
                    height: "full",
                    padding: "0.25u",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    role: "alert",
                    children: l0(__c.px, {
                      size: "xsmall",
                      alignment: "center",
                      children: __c.K("Q6XSow"),
                    }),
                  })
                : l0(b, { ...this.props });
            }
            constructor(...c) {
              super(...c);
              this.state = { hasError: !1 };
            }
          };
        };
        Adc = function (a, b, c) {
          const d = c.G,
            e = (c = c.F5) ? new nfc(c) : void 0;
          c = e ? (f) => e.Sc(f.G) : void 0;
          switch (d.type) {
            case 0:
              a = ofc(a, d, b, c);
              break;
            case 1:
              a = pfc(a, d, b, c);
              break;
            default:
              throw new E(d);
          }
          return { Btb: a, dN: e };
        };
        Bdc = function (a, b, c, d) {
          c = c.email;
          if (c != null) {
            var e = d ? (g) => d.Sc(g.G) : void 0,
              f = c.type;
            switch (f) {
              case 2:
                return qfc(a, c, b, e);
              default:
                throw new E(f);
            }
          }
        };
        Cdc = function (a, b) {
          return (c) => {
            if (b)
              return (
                (c = a.G.decode(c.G.Qd).data),
                {
                  type: b.type,
                  P1: typeof b.P1 === "function" ? b.P1(c) : b.P1,
                  name: typeof b.name === "function" ? b.name(c) : b.name,
                }
              );
          };
        };
        ofc = function (a, b, c, d) {
          const e = b.jy,
            { Kua: f, H5: g, pn: h, PIa: k } = rfc(a, c);
          return typeof e === "object"
            ? ((b = a.B2.types),
              (b = b.IX(
                b.union(b.instance("RectElement"), b.instance("ShapeElement"))
              )),
              sfc(
                a,
                f,
                h,
                b,
                e,
                (l) => new tfc(() => l().map((m) => m.instance)),
                k
              ))
            : {
                type: 0,
                jy: (l, m) => {
                  const { document: n, G: p } = h.decode(f(l)).data;
                  m = g(l, m);
                  l = d
                    ? { document: n, G: p, local: d(l) }
                    : { document: n, G: p, local: void 0 };
                  return e(l, m);
                },
                fma: U0(k),
                jN: V0(k),
                lS: W0(k),
                M0: X0(k),
              };
        };
        pfc = function (a, b, c, d) {
          const e = b.Component,
            { Kua: f, H5: g, pn: h, PIa: k } = rfc(a, c);
          return {
            type: 1,
            fma: U0(k),
            jN: V0(k),
            lS: W0(k),
            M0: X0(k),
            Component: mfc(
              a.J,
              Y0(({ model: l, ye: m, xTa: n, z1: p }) => {
                n = ufc(a.Re, n);
                const q = vfc(() => {
                  const { document: r, G: t } = h.decode(f(l)).data;
                  return d
                    ? { document: r, G: t, local: d(l) }
                    : { document: r, G: t, local: void 0 };
                }, [l]);
                m = g(l, m);
                return l0(e, { data: q, Re: n, ui: m, z1: p });
              })
            ),
          };
        };
        qfc = function (a, b, c, d) {
          const e = b.Component,
            { Kua: f, H5: g, pn: h, PIa: k } = rfc(a, c);
          return {
            type: 2,
            fma: U0(k),
            jN: V0(k),
            lS: W0(k),
            M0: X0(k),
            Component: mfc(
              a.J,
              Y0(({ model: l, ye: m, scale: n }) => {
                const p = wfc(a.Esb, n),
                  q = vfc(() => {
                    const { document: r, G: t } = h.decode(f(l)).data;
                    return d
                      ? { document: r, G: t, local: d(l) }
                      : { document: r, G: t, local: void 0 };
                  }, [l]);
                m = g(l, m);
                return l0(e, { data: q, Re: p, scale: n, ui: m });
              })
            ),
          };
        };
        rfc = function (a, b) {
          return {
            Kua: (c) => ({ document: xfc(a, c), G: c.G.Qd }),
            H5: (c, d) => a.WRb.H5(c, d),
            pn: Idc(b),
            PIa: new yfc(),
          };
        };
        sfc = function (a, b, c, d, e, f, g) {
          const h = a.Fxa(a.B2, c, d).compile(e);
          return {
            type: 0,
            jy: (k) => ({ Na: f(h(b(k))) }),
            jN: V0(g),
            fma: U0(g),
            lS: W0(g),
            M0: X0(g),
          };
        };
        xfc = function (a, b) {
          return (
            a.Fa.Lm.first(
              (c) =>
                c.app.id === b.G.Kc.app.id &&
                c.app.version === b.G.Kc.app.version
            )?.data ?? __c.ES.create(new Map())
          );
        };
        zfc = function (a, b) {
          return a.pU.get(b.G.Kc.app.id)?.ADb(b);
        };
        U0 = function (a) {
          return Z0((b) => {
            if ((b = a.get(b.G)) && b.size !== 0)
              return Array.from(b)
                .map((c) => c.mja())
                .reduce(
                  (c, d) => ({
                    width: Math.max(c.width, d.width),
                    height: Math.max(c.height, d.height),
                  }),
                  { width: -Infinity, height: -Infinity }
                );
          });
        };
        V0 = function (a) {
          return Z0((b, c) => {
            b = a.get(b);
            if (!b || b.size === 0) return c;
            for (const d of b) if (d.jN) return d.jN(c);
            return c;
          });
        };
        W0 = function (a) {
          return Z0((b) =>
            (b = a.get(b.G)) && b.size !== 0
              ? Array.from(b).flatMap((c) => c.lS())
              : []
          );
        };
        X0 = function (a) {
          return (b, c) => {
            a.add(b.G, c);
            return () => a.remove(b.G, c);
          };
        };
        Zcc = function (a) {
          return { tL: a.tL, decode: Afc(a.decode), encode: a.encode };
        };
        Afc = function (a) {
          const b = new WeakMap();
          return (c) => {
            let d = b.get(c);
            d || ((d = a(c)), b.set(c, d));
            return d;
          };
        };
        Efc = function (a) {
          var b = a.psa;
          const c = a.$Rb,
            d = a.XRb,
            e = a.Pxa,
            f = a.B2,
            g = a.J,
            h = a.Fa,
            k = a.pab,
            l = a.S9a;
          a = new Bfc(a.En, h);
          const m = new Cfc(h, b, f, e, g, a, c, d);
          b = new Dfc();
          k && k.Dac((n) => zfc(m, n));
          l && l((n) => zfc(m, n));
          return { vda: m, QC: m, expr: b };
        };
        Gfc = function (a, b) {
          if (!a) return "Arial, Helvetica, sans-serif";
          const c = __c.lr(a);
          a = b.find((d) => d.id === c.id && d.version === c.version);
          switch (a?.name) {
            case "Arimo":
            case "Arial":
              return "Arial, Helvetica, sans-serif";
            case "Helvetica":
            case "Helvetica Now":
              return "Helvetica, Arial, sans-serif";
            case "Times New Roman MT":
            case "Times New Roman":
              return '"Times New Roman", Times, serif';
            case "Tahoma":
              return "Tahoma, Geneva, sans-serif";
            case "Trebuchet MS":
              return '"Trebuchet MS", Helvetica, sans-serif';
            case "Lucida Console":
              return '"Lucida Console", Monaco, monospace';
            case "Comic Sans":
              return '"Comic Sans MS", "Comic Sans", cursive, sans-serif';
            case "Courier New OS":
            case "Courier New":
              return '"Courier New", monospace';
            case "Georgia Pro":
            case "Georgia":
              return "Georgia, serif";
            case "Verdana Pro":
            case "Verdana":
              return "Verdana, Geneva, sans-serif";
            default:
              return a?.name
                ? `${Ffc(a.name)}, ${"Arial, Helvetica, sans-serif"}`
                : "Arial, Helvetica, sans-serif";
          }
        };
        Ffc = function (a) {
          a = a.replace(/["']/g, "");
          return /[\s,]/.test(a) ? `"${a}"` : a;
        };
        Ifc = function () {
          ({ Bh: a } = { Bh: [] });
          var a;
          return ({ text: b }) => {
            const c = Hfc(b, a);
            return l0("span", {
              style: {
                ...c,
                display: "table-cell",
                width: "100%",
                height: "100%",
                verticalAlign: "middle",
                boxSizing: "border-box",
              },
              children: b.V,
            });
          };
        };
        Hfc = function (a, b) {
          var c = (q) => [...a.bi(q)[q]].values().next().value ?? __c.Kf.Ib[q],
            d = c("font-family");
          b = Gfc(d, b);
          d = c("font-size");
          var e = c("color"),
            f = c("font-weight"),
            g = c("font-style"),
            h = c("decoration"),
            k = c("strikethrough"),
            l = c("direction"),
            m = c("text-align"),
            n = c("leading");
          c = c("tracking");
          const p = [];
          h === "underline" && p.push("underline");
          k === "strikethrough" && p.push("line-through");
          h = p.length > 0 ? p.join(" ") : "none";
          return {
            color: e,
            fontSize: `${d}px`,
            fontWeight: f,
            fontFamily: b,
            fontStyle: g === "italic" ? "italic" : "normal",
            textDecoration: h,
            direction: l,
            textAlign: Jfc(l, m),
            lineHeight: `${Kfc(n)}em`,
            letterSpacing: `${Kfc(c)}em`,
          };
        };
        Jfc = function (a, b) {
          const c = {
            start: "left",
            center: "center",
            end: "right",
            justify: "justify",
          };
          if (a !== "rtl") return c[b];
          switch (b) {
            case "start":
              return "end";
            case "end":
              return "start";
            default:
              return c[b];
          }
        };
        Kfc = function (a) {
          if (!Number.isFinite(a)) throw Error("Invalid milliEms value");
          return a / 1e3;
        };
        Lfc = function (a) {
          a.WP && (a.WP(), (a.WP = null));
          const b = a.props.$rb;
          b.forEach((c) => {
            window.addEventListener(c, a.RQa);
          });
          a.WP = () => {
            b.forEach((c) => {
              window.removeEventListener(c, a.RQa);
            });
          };
        };
        Pfc = function (a) {
          const b = j0(function (c) {
            const [{ store: d, Ia: e }] = $0(() => {
              const f = new Mfc(),
                g = new Nfc(f);
              return { store: f, Ia: g };
            });
            return l0(Ofc, {
              v$: e.reset,
              children: l0(__c.cYb, {
                kzb: e,
                lzb: d,
                b2a: a.Mp.contains(c.url),
                children: ({ Ii: f }) => c.children({ Ii: f }),
              }),
            });
          });
          return j0((c) =>
            c.Anb && a.Va?.status !== 2
              ? l0(b, { ...c })
              : c.children({ Ii: !1 })
          );
        };
        Qfc = function (a) {
          return Y0(function (b) {
            return l0("div", {
              className: "gcYy_A",
              children: l0(__c.Xx, {
                Q6: "both",
                children: ({ width: c, height: d }) =>
                  l0(a.ij, {
                    fill: b.fill,
                    Mb: c,
                    tc: d,
                    ne: void 0,
                    animation: void 0,
                    PF: !1,
                    ba: void 0,
                    ga: void 0,
                  }),
              }),
            });
          });
        };
        Sfc = function (a) {
          const b = a.Aa,
            c = a.eja,
            d = (e) => {
              e = __c.lr(e);
              b.zy([e], { hl: !0 });
              return b.Iaa(e);
            };
          return Y0(function (e) {
            var f = e.SAa;
            const g = e.fontWeight,
              h = e.Eva,
              k = e.Mc,
              l = e.fmb,
              m = e.ariaInvalid,
              n = e.className,
              p = e.disabled,
              q = e.id,
              r = e.name,
              t = e.inputMode,
              v = e.onBlur,
              w = e.onFocus,
              z = e.onChange,
              A = e.placeholder,
              C = e.G8a,
              B = e.readOnly,
              D = e.type,
              I = e.value;
            e = {
              color: e.Ni,
              fontSize: e.fontSize,
              borderRadius: e.borderRadius,
              fontFamily: f && d(f),
              fontWeight: g && __c.sr(g),
            };
            [f] = $0(() => c?.Xwb());
            return l0("div", {
              ref: f?.Vi,
              className: "BHOPhg",
              children: l0("input", {
                "aria-describedby": k,
                "aria-errormessage": l,
                "aria-invalid": m,
                className: Rfc(n, ["_6Yde8g", C && "sR0SUA"]),
                disabled: p,
                id: q,
                name: r,
                inputMode: t,
                onBlur: v,
                onFocus: w,
                onChange: z,
                placeholder: A,
                readOnly: B,
                type: D,
                value: I,
                style: {
                  ...e,
                  "--srRiKA": C,
                  "--oiOG3Q": h?.default,
                  "--oGOcXA": h?.Ag,
                  "--UBd2ow": h?.focus,
                },
              }),
            });
          });
        };
        Tfc = function () {
          return () => l0(__c.hW, { mediaType: "embed", failed: !1 });
        };
        Ufc = function (a) {
          return Y0(function (b) {
            return l0("div", {
              className: "oUJNhQ",
              children: l0(a.je, {
                text: b.text,
                animation: void 0,
                rd: "middle",
                ma: void 0,
                bb: void 0,
                cf: [],
                writingMode: 1,
              }),
            });
          });
        };
        Vfc = function (a) {
          const b = a.Aa,
            c = a.eja,
            d = (e) => {
              e = __c.lr(e);
              b.zy([e], { hl: !0 });
              return b.Iaa(e);
            };
          return Y0(function (e) {
            var f = e.SAa;
            const g = e.fontWeight,
              h = e.Eva,
              k = e.Mc,
              l = e.fmb,
              m = e.ariaInvalid,
              n = e.className,
              p = e.disabled,
              q = e.id,
              r = e.name,
              t = e.onBlur,
              v = e.onFocus,
              w = e.onChange,
              z = e.placeholder,
              A = e.G8a,
              C = e.readOnly,
              B = e.rows,
              D = e.value;
            e = {
              color: e.Ni,
              fontSize: e.fontSize,
              borderRadius: e.borderRadius,
              fontFamily: f && d(f),
              fontWeight: g && __c.sr(g),
            };
            [f] = $0(() => c?.Xwb());
            return l0("div", {
              ref: f?.Vi,
              className: "BHOPhg",
              children: l0("textarea", {
                "aria-describedby": k,
                "aria-errormessage": l,
                "aria-invalid": m,
                className: Rfc(n, ["_6Yde8g", A && "sR0SUA"]),
                disabled: p,
                id: q,
                name: r,
                onBlur: t,
                onFocus: v,
                onChange: w,
                placeholder: z,
                rows: B,
                readOnly: C,
                style: {
                  ...e,
                  "--srRiKA": A,
                  "--oiOG3Q": h?.default,
                  "--oGOcXA": h?.Ag,
                  "--UBd2ow": h?.focus,
                },
                value: D,
              }),
            });
          });
        };
        __c.Cc.prototype.eR = __c.da(3, function (a, b) {
          this.console.error(...__c.Bc(this, "critical", a, b));
        });
        __c.YI.prototype.eR = __c.da(2, function (a, b) {
          this.Xv.eR(a, b);
          __c.WI(this, a, "critical", b);
        });
        var Wfc = class {
            constructor(a) {
              this.ref = a;
            }
          },
          Xfc = class {
            get ref() {
              return this.box.get();
            }
            constructor(a) {
              this.box = a;
            }
          },
          Yfc = class {
            get ref() {
              return this.box.ref;
            }
            set() {
              throw Error("cannot set unmodifiable box");
            }
            constructor(a) {
              this.box = a;
            }
          },
          Zfc = __webpack_require__(405148),
          $fc = Zfc.Fragment,
          l0 = Zfc.jsx,
          agc = Zfc.jsxs;
        var j0 = __webpack_require__(371201).PA;
        var a1 = __webpack_require__(227200),
          bgc = a1.Component,
          Y0 = a1.memo,
          lfc = a1.PureComponent,
          k0 = a1.useCallback,
          cgc = a1.useEffect,
          vfc = a1.useMemo,
          dgc = a1.useRef,
          $0 = a1.useState;
        var b1 = __webpack_require__(186901),
          T0 = b1.EW,
          egc = b1.fm,
          Tcc = b1.h5,
          fgc = b1.m3,
          Wcc = b1.mJ,
          c1 = b1.sH,
          d1 = b1.XI;
        var Z0 = __webpack_require__(536618).iB;
        var ggc = __webpack_require__,
          hgc = ggc(208463),
          Rfc = ggc.n_x(hgc)();
        var h0 = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.NIb = a.message;
            Object.setPrototypeOf(this, h0.prototype);
          }
        };
        var igc = class {
          constructor(a, b, c) {
            this.handler = a;
            this.port = b;
            this.J = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.Aa)();
              } catch (e) {
                return this.J.Pb(e), Ba(e);
              }
            };
            this.MFb = (d) => {
              this.J.Pb(d);
            };
            this.sGa = ({ data: d }) => {
              if (d)
                try {
                  this.handler.SIb(d);
                } catch (e) {
                  this.J.Pb(e);
                }
              else
                this.J.error(
                  new h0({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.sGa;
            this.port.onmessageerror = this.MFb;
          }
        };
        var Cbc = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          Kbc = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.ce);
              this.PJb(a);
            }
            reject(a) {
              clearTimeout(this.ce);
              this.X9a(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.ce);
              this.ce = setTimeout(() => {
                Dbc(this);
              }, Math.max(this.timeoutMs - 500, 500));
            }
            constructor(a) {
              this.timeoutMs = a;
              this.p = new Promise((b, c) => {
                this.PJb = b;
                this.X9a = c;
              });
              this.setTimeout();
            }
          };
        var jgc = class {
          request(a, b) {
            const c = this.v8a,
              d = new Kbc(5e3),
              e = this.DJb(),
              f = (async function () {
                c.set(e, { path: a, FJb: d });
                try {
                  const g = await d.promise();
                  return (0, __c.Aa)(g);
                } catch (g) {
                  return g instanceof Cbc
                    ? Ba(
                        new h0({
                          code: "internal_error",
                          message: `Comms promise timed out (${a}).`,
                        })
                      )
                    : Ba(g);
                } finally {
                  c.delete(e);
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.J.Pb(b.error, {
                le: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.J = b;
            this.DJb = __c.hr;
            this.v8a = new Map();
          }
        };
        var kgc = class {
          handle(a, b) {
            if (this.T0.has(a))
              throw new h0({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.T0.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.W9 = a;
            this.J = b;
            this.BJb = !0;
            this.vrb = c;
            this.T0 = new Map();
            this.Ftb = new Set();
          }
        };
        var mcc = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.T0.handle(c, d);
              a = new lgc(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        { path: g, FJb: h } = d.v8a.get(e) || {};
                      if (h)
                        switch (f) {
                          case "response":
                            h.resolve(c.payload);
                            break;
                          case "ack":
                            h.reset(2e4);
                            break;
                          case "error":
                            d.J.d4({
                              level: "info",
                              category: "sandbox_comms",
                              message: "Error response received",
                              data: { path: g ?? "unknown" },
                            });
                            h.reject(
                              new h0({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new E(c);
                        }
                      else
                        f !== "ack" &&
                          d.J.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      Fbc(this.T0, c);
                      break;
                    default:
                      throw new E(c);
                  }
                },
                a,
                b.cg("bus")
              );
              this.client = new jgc(a.pC, b.cg("client"));
              this.T0 = new kgc(a, b.cg("requestHandler"));
            }
          },
          lgc = class {
            constructor(a, b, c) {
              this.Lja = a;
              this.pC = (d, e, f) =>
                this.L4.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.XFb = (d) => {
                switch (d.type) {
                  case "ack":
                    this.Lja({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.Lja({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.Lja({
                      type: "response",
                      requestId: d.requestId,
                      payload: d.payload,
                    });
                    break;
                  case "request":
                    this.Lja({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      payload: d.payload,
                    });
                    break;
                  default:
                    throw new E(d);
                }
              };
              this.L4 = new igc({ SIb: this.XFb }, b, c);
            }
          };
        var Gbc = { dOa: "null", rab: "*" },
          Ibc =
            "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(
              " "
            );
        var Mbc = H(() => ({}));
        var mgc = H(() => ({ Vga: W(1), zd: W(2) }));
        var Nbc = H(
          () => ({
            Hj: X("documentId", 1),
            Zl: X("elementId", 2),
            PRb: G("websiteContext", 3, mgc),
            IDa: __c.IJ("isPreview", 4),
          }),
          { Yk: 0 }
        );
        var Obc = H(() => ({}));
        var Pbc = H(() => ({}));
        var Xcc = H(
          () => ({
            textContent: X("textContent", 1),
            backgroundColor: X("backgroundColor", 2),
          }),
          { Yk: 0 }
        );
        var Rbc = H(() => ({ config: (0, __c.MJ)("config", 1, Xcc) }), {
          Yk: 0,
        });
        var Sbc = H(() => ({}));
        var Ubc = H(() => ({ Wza: X("entityId", 1) }), { Yk: 0 });
        var Vbc = H(() => ({}));
        var Wbc = H(
          () => ({ Wza: W("entityId", 1), textContent: W("textContent", 2) }),
          { Yk: 0 }
        );
        var Xbc = H(() => ({}));
        var qcc = class {
          constructor(a) {
            this.uA = a;
          }
        };
        var v0 = H(
          () => ({
            type: __c.F("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
            id: W("id", 1),
            url: W("url", 4),
          }),
          { Yk: 0 }
        );
        var Zbc = H(
          () => ({ config: X("config", 1), f7: G("fontEditable", 2, v0) }),
          { Yk: 0 }
        );
        var e1 = H(
          () => ({
            type: __c.F("type", "RECOLORABLE", 1, "RECOLORABLE"),
            id: W("id", 1),
            value: W("value", 2),
          }),
          { Yk: 0 }
        );
        var ngc = H(
          () => ({
            borderRadius: zJ("borderRadius", 1),
            borderWidth: zJ("borderWidth", 2),
          }),
          { Yk: 0 }
        );
        var ogc = H(
          () => ({
            type: __c.F("type", "BORDERABLE", 2, "BORDERABLE"),
            id: W("id", 1),
            value: __c.Ma("value", 2, ngc),
          }),
          { Yk: 0 }
        );
        var pgc = H(() => ({ id: W("id", 1), value: W("value", 2) }), {
          Yk: 0,
        });
        var f1 = H(
          () => ({
            type: __c.F("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
            size: zJ("size", 21),
          }),
          { Yk: 0 }
        );
        var acc = H(
          () => ({
            config: W("config", 1),
            J0: Na("recolorables", 4, e1),
            hnb: Na("borderables", 5, ogc),
            rsb: Na("editPanelValues", 6, pgc),
            RH: G("fontSizeable", 7, f1),
            f7: G("fontEditable", 8, v0),
          }),
          { Yk: 0 }
        );
        var ccc = __c.Za(
          () => ({ type: [1, e1, 2, ogc, 3, v0, 5, f1] }),
          () => ({}),
          { Yk: 0 }
        );
        var dcc = H(() => ({ config: W("config", 1) }), { Yk: 0 });
        var fcc = H(() => ({ id: W(1), value: W(2) }));
        var gcc = H(() => ({ config: W(1) }));
        var icc = H(
          () => ({
            config: W("config", 1),
            J0: Na("recolorables", 4, e1),
            hnb: Na("borderables", 5, ogc),
            f7: G("fontEditable", 6, v0),
            rsb: Na("editPanelValues", 7, pgc),
            RH: G("fontSizeable", 8, f1),
          }),
          { Yk: 0 }
        );
        var jcc = H(() => ({}));
        var qgc = H(
          () => ({
            scrollWidth: zJ("scrollWidth", 1),
            scrollHeight: zJ("scrollHeight", 2),
            offsetWidth: zJ("offsetWidth", 3),
            offsetHeight: zJ("offsetHeight", 4),
          }),
          { Yk: 0 }
        );
        var kcc = H(() => ({ body: __c.Ma("body", 1, qgc) }), { Yk: 0 });
        var occ = class {
          constructor(a) {
            this.uA = a;
          }
        };
        var scc = class {
          constructor(a) {
            this.J = a;
            this.Wob = (b, c, d) => {
              b.addEventListener("load", async () => {
                pcc(b, this.J).then(({ uA: e, wsb: f }) => {
                  ({ xsb: f } = c(f));
                  lcc(e, f);
                });
                ncc(b, this.J).then(({ uA: e }) => {
                  const { Lqb: f } = d();
                  Qbc(e, f);
                });
              });
            };
            this.Vob = (b, c) => {
              b.addEventListener("load", async () => {
                const { uA: d, emitter: e } = await rcc(b, this.J),
                  f = c(e);
                Ybc(d, f);
              });
            };
          }
        };
        var rgc = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          Cl() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            m0();
          },
          previous() {
            m0();
          },
          We() {
            m0();
          },
          uw() {
            m0();
          },
          has() {
            return !1;
          },
          Qp() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var sgc;
        sgc = Symbol.iterator;
        var tfc = class {
          static D(a) {
            M(a, { Sm: T0, kr: T0 });
          }
          get Sm() {
            return this.jmb().map((a) => {
              let b = this.A0a.get(a);
              b == null && ((b = `${this.dyb++}`), this.A0a.set(a, b));
              return { id: b, ref: a };
            });
          }
          get kr() {
            const a = new Map();
            this.Sm.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          Bk(a) {
            return y(this.kr.get(a), "ref not found");
          }
          get empty() {
            return !this.Sm.length;
          }
          count() {
            return this.Sm.length;
          }
          toArray() {
            return this.Sm.map((a) => a.ref);
          }
          Cl() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get UR() {
            return this.Sm[0]?.ref;
          }
          get aT() {
            return this.Sm[this.Sm.length - 1]?.ref;
          }
          first(a) {
            return a ? this.Sm.find((b) => a(b.ref))?.ref : this.UR;
          }
          last(a) {
            if (!a) return this.aT;
            const b = this.Sm;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.Sm;
            for (a = this.Bk(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          previous(a, b) {
            const c = this.Sm;
            for (a = this.Bk(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          We(a, b) {
            a = this.kr.get(a);
            b = this.kr.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          uw(a) {
            return this.Sm[this.Bk(a)].id;
          }
          has(a) {
            return this.kr.has(a);
          }
          Qp(a) {
            return new __c.YK(this, a);
          }
          map(a) {
            return this.Sm.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.Sm.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.Sm.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.Sm.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.Sm.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.Sm.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.Sm.every((b) => a(b.ref, b.id));
          }
          [sgc]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.jmb = a;
            this.dyb = (tfc.D(this), 0);
            this.A0a = new WeakMap();
          }
        };
        var tgc;
        tgc = Symbol.iterator;
        var vcc = class {
          static D(a) {
            M(a, { I9: T0 });
          }
          get I9() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.pg(b), b));
            return a;
          }
          Ou(a) {
            return y(this.I9.get(a));
          }
          M_(a) {
            return a != null ? this.pg(a) : void 0;
          }
          get empty() {
            return this.base.empty;
          }
          count() {
            return this.base.count();
          }
          toArray() {
            return this.base.toArray().map(this.pg);
          }
          Cl() {
            return Tc(this.base.Cl(), this.pg);
          }
          [tgc]() {
            return this.toArray()[Symbol.iterator]();
          }
          first(a) {
            return this.M_(this.base.first(a && ((b) => a(this.pg(b)))));
          }
          last(a) {
            return this.M_(this.base.last(a && ((b) => a(this.pg(b)))));
          }
          next(a, b) {
            return this.M_(
              this.base.next(this.Ou(a), b && ((c) => b(this.pg(c))))
            );
          }
          previous(a, b) {
            return this.M_(
              this.base.previous(this.Ou(a), b && ((c) => b(this.pg(c))))
            );
          }
          We(a, b) {
            return this.base.We(this.Ou(a), this.Ou(b));
          }
          uw(a) {
            return this.base.uw(this.Ou(a));
          }
          has(a) {
            return this.base.has(this.Ou(a));
          }
          set(a, b) {
            return this.pg(this.base.set(a, this.II(b)));
          }
          replace(a, b) {
            return this.pg(this.base.replace(this.Ou(a), this.II(b)));
          }
          append(a) {
            return this.pg(this.base.append(this.II(a)));
          }
          prepend(a) {
            return this.pg(this.base.prepend(this.II(a)));
          }
          mI(a, b) {
            return this.pg(this.base.mI(a && this.Ou(a), this.II(b)));
          }
          insertBefore(a, b) {
            return this.pg(this.base.insertBefore(a && this.Ou(a), this.II(b)));
          }
          EE(a, b) {
            return this.base.EE(a && this.Ou(a), b.map(this.II)).map(this.pg);
          }
          delete(a) {
            this.base.delete(this.Ou(a));
          }
          CA(a) {
            this.base.CA(a && ((b) => a(this.pg(b))));
          }
          moveBefore(a, b) {
            this.base.moveBefore(a && this.Ou(a), this.Ou(b));
          }
          Qp(a) {
            return new __c.YK(this, a);
          }
          map(a) {
            return this.base.map((b, c) => a(this.pg(b), c));
          }
          flatMap(a) {
            return this.base.flatMap((b, c) => a(this.pg(b), c));
          }
          filter(a) {
            return this.base.filter((b, c) => a(this.pg(b), c)).map(this.pg);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.pg(b), c));
          }
          reduce(a, b) {
            return this.base.reduce((c, d) => a(c, this.pg(d)), b);
          }
          some(a) {
            return this.base.some((b) => a(this.pg(b)));
          }
          every(a) {
            return this.base.every((b) => a(this.pg(b)));
          }
          constructor(a, b, c) {
            this.base = a;
            this.II = b;
            this.pg = c;
            vcc.D(this);
          }
        };
        var ugc,
          vgc = class {
            get value() {
              return this.box.get();
            }
            constructor(a, b) {
              this.id = a;
              this.box = b;
            }
          };
        ugc = Symbol.iterator;
        var jfc = class {
          static D(a) {
            M(a, { kr: T0, UR: T0, aT: T0 });
          }
          get kr() {
            const a = new Map();
            this.cells.forEach((b, c) => a.set(b.value, c));
            return a;
          }
          Bk(a) {
            return y(this.kr.get(a), "ref not found");
          }
          get empty() {
            return !this.cells.length;
          }
          count() {
            return this.cells.length;
          }
          toArray() {
            return this.cells.map((a) => a.value);
          }
          Cl() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get UR() {
            return this.cells[0]?.value;
          }
          get aT() {
            return this.cells[this.cells.length - 1]?.value;
          }
          first(a) {
            return a ? this.cells.find((b) => a(b.value))?.value : this.UR;
          }
          last(a) {
            if (!a) return this.aT;
            const b = this.cells;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.value)) return d.value;
            }
          }
          next(a, b) {
            const c = this.cells;
            for (a = this.Bk(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          previous(a, b) {
            const c = this.cells;
            for (a = this.Bk(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          We(a, b) {
            a = this.kr.get(a);
            b = this.kr.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          uw(a) {
            return this.cells[this.Bk(a)].id;
          }
          has(a) {
            return this.kr.has(a);
          }
          Qp(a) {
            return new __c.YK(this, a);
          }
          map(a) {
            return this.cells.map((b) => a(b.value, b.id));
          }
          flatMap(a) {
            return this.cells.flatMap((b) => a(b.value, b.id));
          }
          filter(a) {
            return this.cells
              .filter((b) => a(b.value, b.id))
              .map((b) => b.value);
          }
          forEach(a) {
            this.cells.forEach((b) => a(b.value, b.id));
          }
          reduce(a, b) {
            return this.cells.reduce((c, d) => a(c, d.value, d.id), b);
          }
          some(a) {
            return this.cells.some((b) => a(b.value, b.id));
          }
          every(a) {
            return this.cells.every((b) => a(b.value, b.id));
          }
          [ugc]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.cells = (jfc.D(this), void 0);
            this.cells = a.map((b, c) => new vgc(String(c), b));
          }
        };
        var udc = __c.n0()(() => ({
            qXb({ gL: a, dnb: b, version: c }, d, e) {
              e = e && {
                fonts: o0("font", e.fonts),
                media: o0("media", e.media),
                pd: o0("video", e.pd),
                embeds: o0("embed", e.embeds),
              };
              return {
                data: {
                  G: {
                    gL: a,
                    ps: {
                      domain: "resource",
                      resource: {
                        ref: { type: "blueprint", id: b, version: c },
                        resources: e,
                      },
                    },
                    type: "instance",
                    Be: void 0,
                  },
                  document: {},
                },
                P: d,
              };
            },
          })),
          wgc = ({ resource: a, yD: b }) => {
            const c = egc(() => {
              Bbc(b, a.ref.ref);
            });
            return {
              Na: new tfc(() => {
                const d = zbc(b, a.ref.ref);
                return d
                  ? (__c.x(d.type === "group", "Expected group element"),
                    d.Na.filter(__c.nb).map((e) =>
                      __c.GH.create({ ...e, locked: !0, qg: !0 })
                    ))
                  : [];
              }),
              dn: c,
            };
          },
          xgc = __c.g0()(({ Wh: { yD: a } }) => ({
            metadata: { type: "blueprint", name: __c.K("iAtEVw") },
            G: {
              type: 0,
              jy: ({ G: b }) => wgc({ resource: b.ps.resource, yD: a }),
            },
            exports: {},
          }));
        g1 = __c.g1 = class {};
        g1.val = (a, b) => s0(0, 0, () => b)(a);
        g1.oD = (a, b) => s0(1, 0, () => b)(a);
        g1.ref = (a, b) => s0(0, 0, () => b)(a);
        g1.AGb = () => {
          var a = __c.h1;
          return s0(1, 1, () => a)(1);
        };
        g1.j7a = (a, b) => s0(0, 1, () => b)(a);
        g1.Gqa = s0(0, 0, p0);
        g1.KXa = s0(0, 0, zcc);
        g1.Pi = s0(0, 0, Acc);
        g1.mx = s0(1, 0, p0);
        g1.cTa = s0(1, 0, xcc);
        g1.JXa = s0(1, 0, zcc);
        g1.Ala = s0(1, 0, Acc);
        g1.GE = s0(1, 0, ycc);
        g1.lSa = s0(1, 0, Bcc);
        g1.dz = s0(1, 1, p0);
        g1.wna = s0(1, 1, xcc);
        g1.FB = s0(1, 1, zcc);
        g1.DGb = s0(1, 1, ycc);
        g1.hF = s0(1, 1, Acc);
        g1.zGb = s0(1, 1, Bcc);
        g1.hm = s0(0, 0, q0);
        g1.listRef = s0(0, 0, Ccc);
        g1.gXa = s0(0, 0, function (a) {
          return { kind: 9, itemType: a };
        });
        g1.woa = s0(0, 0, r0);
        g1.EQb = s0(0, 0, Dcc);
        g1.i7a = s0(0, 1, q0);
        g1.EGb = s0(0, 1, r0);
        g1.Qva = s0(1, 0, r0);
        g1.BGb = s0(1, 1, q0);
        g1.CGb = s0(1, 1, Ccc);
        g1.h7a = s0(1, 1, r0);
        g1.PLa = p0;
        g1.jzb = ycc;
        g1.G8 = q0;
        g1.c3a = Ccc;
        g1.yi = r0;
        g1.F2 = Dcc;
        g1.vEb = t0({});
        var Fcc = Object.freeze({
          document: Object.freeze({}),
          G: Object.freeze({}),
        });
        var $cc = __c.u0({
          G: t0({
            gL: g1.Gqa(1),
            ps: g1.woa(2, {
              domain: g1.Pi(1, "resource"),
              resource: g1.Qva(2, {
                ref: g1.hm(2, "BlueprintRef"),
                resources: g1.EGb(3, {
                  fonts: g1.listRef(1, g1.G8("FontRef")),
                  media: g1.listRef(2, g1.G8("MediaRef")),
                  pd: g1.listRef(3, g1.G8("VideoRef")),
                  embeds: g1.listRef(5, g1.G8("EmbedRef")),
                }),
              }),
            }),
          }),
        });
        var Ddc = { eh: udc, ko: xgc, fh: $cc };
        var ygc = class {
          constructor() {
            this.iY = { hu: !1, $J: !1, hH: !1, AH: !1 };
          }
        };
        var zgc = class {
          create(a) {
            switch (a.type) {
              case "rect":
                return this.e.classes.F3.create(
                  {},
                  { U: { fill: Mcc(this, a.fill) }, attributes: Occ(this, a) }
                );
              default:
                const b = __c.IS.snapshot(a);
                return __c.IS.create({
                  ...b,
                  locked: !0,
                  qg: !0,
                  Hg: Icc(this.p3a, a),
                });
            }
          }
          constructor(a, b) {
            this.e = a;
            this.Be = b;
            this.p3a = new ygc();
          }
        };
        var Agc = class {
          constructor(a) {
            this.Be = a;
          }
        };
        var vdc = __c.n0()(() => ({
            uXb({ gL: a, dnb: b, type: c }, d) {
              return {
                data: {
                  G: {
                    gL: a,
                    ps: {
                      domain: "document",
                      id: b,
                      version: 1,
                      Fb:
                        c === "source"
                          ? { type: c }
                          : { type: c, Be: new Map() },
                    },
                  },
                  document: {},
                },
                P: d,
              };
            },
          })),
          Bgc = ({ data: a, YG: b, expr: c }) => {
            b = b.zub(a.gL);
            if (!b) throw Error(`Blueprint set ${a.gL} not found`);
            const d = b.oi.get(a.ps.id);
            if (!d)
              throw Error(
                `Blueprint ${a.ps.id} not found in blueprint set ${a.gL}`
              );
            if (a.ps.Fb.type === "source") return { Na: d.elements };
            const e = new zgc(c, new Agc(a.ps.Fb.Be));
            return { Na: c.list(() => d.elements.map((f) => e.create(f))) };
          },
          Cgc = __c.g0()(({ RQ: { expr: a }, Wh: { YG: b } }) => ({
            metadata: { type: void 0, name: void 0 },
            G: { type: 0, jy: ({ G: c }) => Bgc({ data: c, YG: b, expr: a }) },
            exports: {},
          }));
        var Dgc = g1.F2(
          { type: void 0 },
          g1.yi({ type: g1.Pi(1, "boolean"), value: g1.wna(2) }),
          g1.yi({
            type: g1.Pi(1, "non-negative-double"),
            value: g1.FB(2, { min: 0 }),
          }),
          g1.yi({ type: g1.Pi(1, "double"), value: g1.FB(2) }),
          g1.yi({ type: g1.Pi(1, "string"), value: g1.dz(2) }),
          g1.yi({ type: g1.Pi(1, "richtext2"), value: g1.hm(2, "Richtext2") }),
          g1.yi({ type: g1.Pi(1, "image_fill"), value: g1.hm(2, "Fill") }),
          g1.yi({ type: g1.Pi(1, "video_fill"), value: g1.hm(2, "Fill") })
        );
        var Egc = g1.yi({ type: g1.Pi(1, "source") }),
          Fgc = g1.yi({ type: g1.Pi(1, "instance"), Be: g1.gXa(2, Dgc) }),
          adc = __c.u0({
            G: t0({
              gL: g1.Gqa(1),
              ps: g1.woa(2, {
                domain: g1.Pi(1, "document"),
                id: g1.Gqa(2),
                version: g1.GE(3),
                Fb: g1.EQb(4, { type: void 0 }, Egc, Fgc),
              }),
            }),
          });
        var Edc = { eh: vdc, ko: Cgc, fh: adc };
        var Ggc = class {
            static D(a) {
              M(a, { Zl: c1.ref });
            }
            constructor(a) {
              this.Zl = (Ggc.D(this), void 0);
              this.Zl = a;
            }
          },
          sdc = __c.n0()(() => ({
            tXb(a, b) {
              return {
                data: {
                  G: {
                    Swa: { type: "embed", id: a, version: 0 },
                    mUa: b,
                    config: void 0,
                    TAa: void 0,
                  },
                  document: {},
                },
                P: { width: 1366, height: 768 },
              };
            },
          }));
        var Hgc = class {};
        var Igc = class {
          static D(a) {
            M(a, { aTa: c1.ref, DS: c1.ref });
          }
          get Xe() {
            return this.aTa;
          }
          constructor(a, b, c) {
            this.config = a;
            this.Aa = b;
            this.OC = c;
            this.lo = (Igc.D(this), void 0);
            this.DS = !1;
            this.Jpa = (d, e) => {
              this.lo?.();
              this.lo = void 0;
              const f = (q) => ecc(e, new e1(q)),
                g = this.Aa,
                h = g ? (q) => Scc(g, e, q) : void 0,
                k = (q) => hcc(e, new fcc(q)),
                l = (q) => ecc(e, new f1({ size: q })),
                m = {
                  Axb: (q) => {
                    this.config.DR?.ONa(
                      { ...q, RH: q.RH?.size },
                      d,
                      f,
                      h,
                      l,
                      k
                    );
                    return new jcc();
                  },
                  uxb: d1((q) => {
                    this.aTa = q.body;
                  }),
                },
                n = Wcc(
                  () => d.config,
                  async (q) => {
                    const r = await bcc(e, { config: q, f7: void 0 });
                    r.config &&
                      r.config !== q &&
                      this.config.DR?.ONa(
                        { ...r, RH: r.RH?.size },
                        d,
                        f,
                        h,
                        l,
                        k
                      );
                  }
                ),
                p = Wcc(
                  () => d.TAa.ref?.first(),
                  async (q) => {
                    const r = d.config,
                      t = this.Aa;
                    q = await bcc(e, {
                      config: r,
                      f7: t != null && q != null ? await Rcc(t, q) : void 0,
                    });
                    q.config &&
                      q.config !== r &&
                      this.config.DR?.ONa(
                        { ...q, RH: q.RH?.size },
                        d,
                        f,
                        h,
                        l,
                        k
                      );
                  }
                );
              this.lo = () => {
                n();
                p();
              };
              Ucc(this, d, e, f, h, l, k);
              return { xsb: m };
            };
            this.Ipa = (d) => {
              const e = this.OC && new mgc({ Vga: this.OC.id, zd: this.OC.zd });
              return {
                Lqb: {
                  pxb: () =>
                    new Nbc({ Hj: d.page?.container?.id, Zl: d.Zl, PRb: e }),
                  txb: () => new Pbc(),
                },
              };
            };
            this.bz = () => {
              this.lo?.();
            };
          }
        };
        var ldc = __c.u0({
          G: t0({
            Swa: g1.hm(1, "EmbedRef"),
            mUa: g1.Gqa(35),
            config: g1.dz(29),
            TAa: g1.CGb(6, g1.G8("FontRef")),
          }),
        });
        var Jgc = __c.g0()(({ Wh: a }) => {
            const b = a.Ksa,
              c = a.Aa,
              d = a.OC,
              e = new Hgc();
            return {
              metadata: {
                type: "codelet",
                name: __c.K("4kcGvw"),
                P1: (f) => f.mUa,
              },
              F5: () => new Ggc(void 0),
              G: __c.f0(
                j0(
                  ({
                    data: { G: f, local: g },
                    Re: { Nda: h, Ijb: k },
                    ui: l,
                    z1: m,
                  }) => {
                    Tcc(() => {
                      g.Zl = l.Zl;
                    });
                    const [n] = $0(() => new Igc(e, c, d)),
                      p = k0((w) => n.Jpa(f, w), [f, n]),
                      q = k0(() => n.Ipa(l), [n, l]),
                      r = Math.max(n.Xe?.scrollHeight ?? 0, l.P.height),
                      t = dgc(null);
                    cgc(() => {
                      t.current && (t.current.style.minHeight = `${r}px`);
                    }, [r]);
                    const v = k0(
                      (w) => l0(Vcc, { jyb: t, z1: m, Hoa: w }),
                      [m]
                    );
                    return agc($fc, {
                      children: [
                        l0(h, {
                          url: f.Swa.id,
                          children: ({ Ii: w }) =>
                            l0(b, {
                              url: f.Swa.id,
                              Ii: w,
                              Jpa: p,
                              Ipa: q,
                              bz: n.bz,
                              wda: v,
                            }),
                        }),
                        l.ye > 10 &&
                          f.config != null &&
                          !n.DS &&
                          l0("div", {
                            className: "djA3nQ",
                            children: l0(k, {}),
                          }),
                      ],
                    });
                  }
                )
              ),
              exports: { config: e },
            };
          }),
          Fdc = { eh: sdc, ko: Jgc, fh: ldc };
        var mdc = __c.u0({
            G: t0({
              ey: g1.Qva(
                1,
                t0({
                  Twa: g1.hm(1, "EmbedRef"),
                  config: g1.gXa(
                    2,
                    g1.yi({
                      textContent: g1.dz(1),
                      backgroundColor: g1.dz(2, /^#[0-9a-f]{6}$/),
                    })
                  ),
                  heb: g1.dz(3),
                })
              ),
            }),
          }),
          tdc = __c.n0()(() => ({
            sXb(a, b, c) {
              return {
                data: {
                  G: {
                    ey: {
                      Twa: { type: "embed", id: a, version: 0 },
                      config: b,
                      heb: c,
                    },
                  },
                  document: {},
                },
                P: { width: 1366, height: 768 },
              };
            },
          })),
          Kgc = class {};
        var Lgc = class {
          dispose() {
            this.lo?.();
            this.lo = void 0;
          }
          constructor(a) {
            this.config = a;
            this.rGa = (b, c) => {
              this.dispose();
              this.lo = Ycc(b, c);
              return {
                zxb: (d) => {
                  this.config.DR?.H9b(b, d.Wza);
                  return new Vbc();
                },
                Bxb: (d) => {
                  this.config.DR?.O9b(b, d.Wza, d.textContent);
                  return new Xbc();
                },
              };
            };
            this.bz = () => {
              this.dispose();
            };
          }
        };
        var Mgc = __c.g0()(({ Wh: a }) => {
            const b = a.Lsa,
              c = new Kgc();
            return {
              metadata: { type: void 0, name: void 0 },
              G: __c.f0(
                j0(({ data: { G: d }, Re: { Nda: e } }) => {
                  const [f] = $0(() => new Lgc(c)),
                    g = k0((h) => f.rGa(d.ey.ref, h), [d.ey.ref, f]);
                  return l0(e, {
                    url: d.ey.ref.Twa.id,
                    children: ({ Ii: h }) =>
                      l0(b, { url: d.ey.ref.Twa.id, Ii: h, rGa: g, bz: f.bz }),
                  });
                })
              ),
              exports: { configuration: c },
            };
          }),
          Gdc = { eh: tdc, ko: Mgc, fh: mdc };
        var xdc = class {
          cn(a) {
            this.loading ||
              (this.loading = (a ?? Promise.resolve()).then(() => this.load()));
            return this.loading;
          }
          constructor(a, b) {
            this.id = a;
            this.loadModule = b;
          }
        };
        var x0 = class {
            static of(a, b, c) {
              return new x0(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Lna = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          Ogc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = Ngc;
              this.dmb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          i1 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.DHb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          Qgc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = Pgc;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          Mdc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.xmb = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var Rdc = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        __c.Rgc = Odc(4);
        __c.Sgc = Odc(6);
        __c.Tgc = Pdc(5);
        __c.j1 = Pdc(0);
        var Ugc = class {},
          hec = class extends Ugc {
            uva(a) {
              return new hec(a(this.value));
            }
            KAa(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          iec = class extends Ugc {
            uva(a, b) {
              return new iec(b(this.value));
            }
            KAa(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var Tdc = class {
            map(a) {
              return a(this);
            }
          },
          k1 = class extends Tdc {
            mDa(a) {
              return this === a || a.nLa((b) => this.L8(b));
            }
            YS() {
              throw Error(`${this} is not iterable`);
            }
            BFa(a) {
              const b = this.propTypes ?? (this.propTypes = this.Kla());
              if (!b) throw Error(`${this} is not navigable"`);
              if (!b.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return b[a];
            }
            Kla() {
              throw Error(`${this} is not navigable`);
            }
            WAa(a) {
              a(this);
            }
            nLa(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          l1 = class extends k1 {
            L8(a) {
              return a instanceof l1 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          Vgc = class extends k1 {
            L8(a) {
              return a instanceof Vgc && this.Jp === a.Jp;
            }
            toString() {
              return this.Jp.name;
            }
            constructor(a) {
              super();
              this.Jp = a;
            }
          },
          Wgc = class extends k1 {
            L8(a) {
              return (
                a instanceof Wgc && this.Jp === a.Jp && A0(this.arg, a.arg)
              );
            }
            toString() {
              return `${this.Jp}<${this.arg}>`;
            }
            constructor(a, b) {
              super();
              this.Jp = a;
              this.arg = b;
            }
          },
          Xgc = class extends Wgc {
            YS() {
              return this.arg;
            }
            Kla() {
              const a = this.arg;
              return {
                size: G0.number,
                empty: G0.ah,
                get first() {
                  return G0.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          Ygc = class extends Wgc {
            YS() {
              return this.arg;
            }
            Kla() {
              const a = this.arg;
              return {
                size: G0.number,
                empty: G0.ah,
                get first() {
                  return G0.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          Zgc = class extends k1 {
            L8(a) {
              return (
                a instanceof Zgc &&
                A0(this.key, a.key) &&
                A0(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          $gc = class extends k1 {
            L8(a) {
              return a instanceof $gc
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && A0(this.fields[b], c)
                  )
                : !1;
            }
            Kla() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          m1 = class extends Tdc {
            mDa(a) {
              return this === a || this.wg.every((b) => b.mDa(a));
            }
            YS() {
              return G0.union(...this.wg.map((a) => a.YS()));
            }
            BFa(a) {
              return G0.union(...this.wg.map((b) => b.BFa(a)));
            }
            WAa(a) {
              this.wg.forEach((b) => b.WAa(a));
            }
            nLa(a) {
              return this.wg.some((b) => b.nLa(a));
            }
            toString() {
              return this.wg.length
                ? this.wg.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.wg = a;
              this.kind = "disjunction";
              u(a.length !== 1);
            }
          },
          ahc = new m1([]),
          bhc = new l1("string"),
          chc = new l1("number"),
          dhc = new l1("boolean"),
          ehc = new l1("undefined"),
          fhc = new m1([bhc, chc, dhc]),
          ghc = class {
            get never() {
              return ahc;
            }
            get string() {
              return bhc;
            }
            get number() {
              return chc;
            }
            get ah() {
              return dhc;
            }
            get undefined() {
              return ehc;
            }
            get primitive() {
              return fhc;
            }
            optional(a) {
              return G0.union(a, G0.undefined);
            }
            array(a) {
              return new Xgc(a);
            }
            set(a) {
              return new Ygc(a);
            }
            IX(a) {
              return new m1([new Xgc(a), new Ygc(a)]);
            }
            map(a, b) {
              return new Zgc(a, b);
            }
            Vb(a) {
              return new $gc({ ...a });
            }
            union(...a) {
              if (a.length === 0) return ahc;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) Qdc(d).WAa((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return ahc;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return A0(d, e) ? e : A0(e, d) ? d : new m1(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => A0(d, e)) ||
                  (c.forEach((e) => A0(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new m1([...c]);
            }
            constructor() {
              this.optional = B0(this.optional);
              this.array = B0(this.array);
              this.set = B0(this.set);
              this.IX = B0(this.IX);
            }
          },
          hhc = class extends ghc {
            instance(a) {
              return new Vgc(a);
            }
          },
          G0 = new hhc(),
          ihc = class extends ghc {
            instance(a) {
              return new Vgc(y(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var jhc,
          khc,
          n1 = Symbol("value"),
          lhc = class {
            get props() {
              return this.klb ?? (this.klb = this.Tua());
            }
          },
          mhc = class {
            get size() {
              return this[n1].length;
            }
            get empty() {
              return this[n1].length === 0;
            }
            get first() {
              return this[n1][0];
            }
            constructor(a) {
              this[n1] = a;
            }
          };
        jhc = Symbol.iterator;
        var nhc = class extends lhc {
            Tua() {
              return new mhc(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [jhc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, C0).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          ohc = class {
            get size() {
              return this[n1].size;
            }
            get empty() {
              return this[n1].size === 0;
            }
            get first() {
              return this[n1][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[n1] = a;
            }
          };
        khc = Symbol.iterator;
        var phc = class extends lhc {
            Tua() {
              return new ohc(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [khc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, C0).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          qhc = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${C0(a)}]: ${C0(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          rhc = class extends lhc {
            Tua() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${C0(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          shc = class {
            toString() {
              return `[instance ${this.Jp.name}]`;
            }
            constructor(a, b) {
              this.Jp = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          thc = class {
            array(a) {
              return new nhc(a);
            }
            arrayOf(...a) {
              return new nhc(a);
            }
            set(a) {
              return new phc(a);
            }
            map(a) {
              return new qhc(new Map(a));
            }
            Vb(a) {
              return new rhc({ ...a });
            }
          },
          uhc = class extends thc {
            instance(a, b) {
              return new shc(a, b);
            }
            stringify(a) {
              return C0(a);
            }
            constructor() {
              super();
              this.sh = Wdc;
            }
          },
          K0 = new uhc(),
          vhc = class extends thc {
            instance(a, b) {
              a = y(this.classes[a]);
              return new shc(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var fec = {
            [0]: Ldc(G0.number, G0.number, (a) => -a),
            [1]: Ldc(G0.string, G0.number, (a) => a.length),
            [2]: Ldc(G0.ah, G0.ah, (a) => !a),
            [3]: y0(G0.number, G0.number, G0.number, (a, b) => a + b),
            [4]: y0(G0.number, G0.number, G0.number, (a, b) => a - b),
            [5]: y0(G0.number, G0.number, G0.number, (a, b) => a * b),
            [6]: y0(G0.number, G0.number, G0.number, (a, b) => a / b),
            [7]: y0(G0.number, G0.number, G0.number, (a, b) => a % b),
            [8]: y0(G0.string, G0.string, G0.string, (a, b) => a + b),
            [9]: y0(G0.number, G0.number, G0.ah, (a, b) => a === b),
            [10]: y0(G0.number, G0.number, G0.ah, (a, b) => a !== b),
            [11]: y0(G0.number, G0.number, G0.ah, (a, b) => a < b),
            [12]: y0(G0.number, G0.number, G0.ah, (a, b) => a <= b),
            [13]: y0(G0.number, G0.number, G0.ah, (a, b) => a > b),
            [14]: y0(G0.number, G0.number, G0.ah, (a, b) => a >= b),
            [15]: y0(G0.ah, G0.ah, G0.ah, (a, b) => a && b),
            [16]: y0(G0.ah, G0.ah, G0.ah, (a, b) => a || b),
          },
          lec = {
            [2]: new i1(G0.number, G0.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new i1(G0.number, G0.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new i1(G0.number, G0.number, (a) => Math.max(...a)),
            [5]: new i1(G0.number, G0.number, (a) => Math.min(...a)),
            [6]: new i1(G0.string, G0.string, (a) => a.join("")),
          },
          whc = (a) => K0.array(a),
          xhc = (a) => K0.set(a),
          jec = {
            [0]: (a) => new i1(a, G0.array(a), whc),
            [1]: (a) => new i1(a, G0.set(a), xhc),
          },
          Pgc = (a) => K0.map(a),
          Xdc = { [0]: (a, b) => new Qgc(a, b, G0.map(a, b)) },
          Ngc = (a) => K0.Vb(a),
          oec = { [0]: (a) => new Ogc(a, G0.Vb(a)) },
          yhc = (a, b) => K0.array(b.map((c) => c())),
          zhc = (a, b) => K0.array(b.flatMap((c) => c().items)),
          Ahc = (a, b) => K0.array(a.filter((c, d) => b[d]()).map((c) => c())),
          Bhc = (a, b) => b.some((c) => c()),
          Chc = (a, b) => b.every((c) => c()),
          Dhc = (a, b) => a.find((c, d) => b[d]())?.(),
          Zdc = {
            [0]: (a, b) => b.map((c) => z0(a, c, G0.array(c), yhc)),
            [1]: (a, b) =>
              b.YS().map((c) => z0(a, G0.array(c), G0.array(c), zhc)),
            [2]: (a) => z0(a, G0.ah, G0.array(a), Ahc),
            [3]: (a) => z0(a, G0.ah, G0.ah, Bhc),
            [4]: (a) => z0(a, G0.ah, G0.ah, Chc),
            [5]: (a) => z0(a, G0.ah, G0.optional(a), Dhc),
          };
        var E0 = class {
          define(a, b) {
            return new E0(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var Fhc = (a, b, c) => {
            const d = D0.create(b.tL),
              e = new Ehc(a);
            return {
              compile: (f) => {
                const g = cec(e, d, f).as(c);
                return (h) => {
                  h = new E0(new Map(b.decode(h).oJa));
                  return g(h);
                };
              },
            };
          },
          D0 = class {
            static create(a) {
              return new D0(new E0(new Map(a)), new E0(new Map()));
            }
            constructor(a = new E0(new Map()), b = new E0(new Map())) {
              this.vars = a;
              this.v7 = b;
            }
          },
          Ehc = class {
            constructor(a) {
              this.types = a;
            }
          },
          I0 = class {
            static of(a, b) {
              return new I0(a, b);
            }
            as(a) {
              if (!A0(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new I0(this.type, (b) => {
                const c = T0(a(b), { equals: K0.sh });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          zec = class {
            as(a, b) {
              const c = this.Lna,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!A0(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!A0(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Lna = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var hfc = class {
            add(a) {
              a = a(Ghc, this.types);
              return new hfc({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.ah;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new E(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.jSa));
                    case "set":
                      return b.set(this.evaluate(a.jSa));
                    default:
                      throw new E(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.jSa);
                      a = this.evaluate(a.DVb);
                      if (!A0(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new E(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.Vb(ke(a.args, (c) => this.evaluate(c)));
                default:
                  throw new E(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new ihc(this.classes);
              this.values = new vhc(this.classes);
            }
          },
          Ghc = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.iEb = new x0([G0.Vb(b)], G0.instance(this), (d) =>
                K0.instance(this, c(d.fields))
              );
            }
          };
        var Hhc;
        Hhc = Symbol.iterator;
        var Aec = class {
          static D(a) {
            M(a, { I9: T0 });
          }
          get I9() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.pg(b), b));
            return a;
          }
          Ou(a) {
            return y(this.I9.get(a));
          }
          M_(a) {
            return a != null ? this.pg(a) : void 0;
          }
          get size() {
            return this.base.size;
          }
          get(a) {
            a = this.base.get(a);
            return this.M_(a);
          }
          has(a) {
            return this.base.has(a);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.pg(b), c));
          }
          map(a) {
            return this.base.map((b, c) => a(this.pg(b), c));
          }
          set(a, b) {
            return this.pg(this.base.set(a, this.II(b)));
          }
          every(a) {
            return this.base.every((b, c) => a(this.pg(b), c));
          }
          delete(a) {
            this.base.delete(a);
          }
          entries() {
            return Cec(this.base.entries(), ([a, b]) => [a, this.pg(b)]);
          }
          keys() {
            return this.base.keys();
          }
          values() {
            return Cec(this.base.values(), this.pg);
          }
          [Hhc]() {
            return this.Cl()[Symbol.iterator]();
          }
          Cl() {
            return Tc(this.base.Cl(), this.pg);
          }
          constructor(a, b, c) {
            this.base = a;
            this.II = b;
            this.pg = c;
            Aec.D(this);
          }
        };
        var o1 = class {
            fM(a) {
              return new Ihc(this, a);
            }
            l7(a) {
              return new Jhc(this, a);
            }
            ZR(a) {
              return new Khc(this, a);
            }
            toString() {
              return this.s ?? (this.s = this.J9());
            }
          },
          Qec = class extends o1 {
            fM(a) {
              return new Lhc(a);
            }
            l7() {
              throw Error();
            }
            ZR() {
              throw Error();
            }
            J9() {
              return "(global)";
            }
          },
          Lhc = class extends o1 {
            J9() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          Ihc = class extends o1 {
            J9() {
              return `${this.parent}.${this.name}`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.name = b;
            }
          },
          Jhc = class extends o1 {
            J9() {
              return `${this.parent}["${this.key}"]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.key = b;
            }
          },
          Khc = class extends o1 {
            J9() {
              return `${this.parent}[${this.index}]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.index = b;
            }
          },
          Pec = class {
            error(a, b) {
              return Error(
                `widget '${this.ZRb}': schema error on key '${a}': ${b}`
              );
            }
            constructor(a) {
              this.ZRb = a;
            }
          },
          Tec = {
            string: "string",
            boolean: "boolean",
            double: "number",
            int32: "number",
            list: "object",
            dict: "object",
            ref: "object",
            fill: "object",
            stroke: "object",
            text2: "object",
          },
          Jec = new Set(["string", "boolean", "int32"]),
          Uec = {
            font: "font",
            media: "media",
            video: "video",
            audio: "audio",
            embed: "embed",
            scene: "scene",
            blueprint: "blueprint",
          };
        var Dfc, afc, Vec, Mhc, Nhc;
        __c.p1 = class {
          map(a, b) {
            const c = this.get,
              d = this.set;
            return new __c.p1(
              () => a(c()),
              (e) => d(b(e))
            );
          }
          project({ get: a, set: b }) {
            const c = this.get,
              d = this.set;
            return new __c.p1(
              () => a(c()),
              (e) => d(b(c(), e))
            );
          }
          constructor(a, b) {
            this.get = a;
            this.set = b;
          }
        };
        Dfc = class {
          read(a) {
            return N0(a) ? a() : a;
          }
          computed(a) {
            const b = T0(a);
            return () => b.get();
          }
          map(a, b) {
            return N0(a) ? () => b(a()) : b(a);
          }
          box(a) {
            return new Yfc(N0(a) ? new Xfc(T0(a)) : new Wfc(a));
          }
          list(a) {
            const b = this.map(
              a,
              (c) =>
                new __c.wbb(new jfc(c.map((d) => (N0(d) ? T0(d) : Wec(d)))))
            );
            return N0(b) ? __c.re(() => b()) : b;
          }
          constructor() {
            this.classes = gfc();
          }
        };
        afc = (a) => {
          const b = a.Jp,
            c = a.Be,
            d = c.U,
            e = c.attributes;
          Xec(a.args, d, e);
          return {
            create: function (f, g) {
              const h = {};
              var k;
              const l = g?.U;
              g = g?.attributes;
              if (l)
                for (const [m, n] of Object.entries(l))
                  u(m in d, "unknown override: '{}'", m),
                    N0(n) ? ((k || (k = {}))[m] = n) : (h[m] = Mhc(n));
              if (g)
                for (const [m, n] of Object.entries(g))
                  u(m in e, "unknown override: '{}'", m),
                    (h[m] =
                      n instanceof __c.p1
                        ? n
                        : N0(n)
                        ? { enumerable: !0, get: n, set: Vec }
                        : Nhc(n));
              if (k)
                return Yec(
                  k,
                  $ec((m) => {
                    const n = b(f);
                    Object.defineProperties(n, { ...h, ...ke(m, Mhc) });
                    return n;
                  })
                );
              k = b(f);
              Object.defineProperties(k, h);
              return k;
            },
          };
        };
        Vec = () => {};
        Mhc = (a) => ({ enumerable: !0, writable: !1, value: a });
        Nhc = (a) => ({ enumerable: !0, get: () => a, set: Vec });
        var O0 = {
          top: void 0,
          left: void 0,
          width: void 0,
          height: void 0,
          rotation: void 0,
          locked: void 0,
          Hg: void 0,
        };
        var Ohc = new Map(),
          q1 = [],
          Q0 = Object.freeze({
            Yl: void 0,
            image: void 0,
            video: void 0,
            Ra: void 0,
            color: void 0,
            xa: 0,
            locked: !0,
            qg: !0,
            Vk: void 0,
            Zc: void 0,
            K: void 0,
            transition: void 0,
            flipX: !1,
            flipY: !1,
          }),
          dfc = Object.freeze({ fill: Q0, stroke: void 0, O: 0 }),
          cfc = Object.freeze({
            weight: 0,
            color: "#000000",
            fill: Q0,
            Rc: q1,
            xe: !1,
          }),
          r1 = Object.freeze({
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            rotation: 0,
            xa: 0,
            Wi: void 0,
            fa: void 0,
            K: void 0,
            transition: void 0,
            ma: q1,
            Wb: q1,
            animation: void 0,
            Qf: void 0,
            link: void 0,
            locked: !0,
            Hg: void 0,
            qg: !0,
            Vk: void 0,
            Ua: void 0,
            cs: void 0,
            Ef: q1,
            xF: Ohc,
            nC: Ohc,
            anchor: void 0,
            bh: Ohc,
          }),
          R0 = Object.freeze({
            ...r1,
            type: "rect",
            fill: Q0,
            stroke: void 0,
            O: q1,
          }),
          S0 = Object.freeze({
            ...r1,
            type: "shape",
            slice: void 0,
            Jj: void 0,
            yb: q1,
            resizeMode: void 0,
          }),
          efc = Object.freeze({
            ...r1,
            type: "text",
            text: __c.Kk.my("\n"),
            Ha: Object.freeze({ Wa: [] }),
            He: void 0,
            placeholder: void 0,
            Df: 1,
            writingMode: void 0,
            I: void 0,
            N: void 0,
            wo: !1,
            rA: void 0,
            Gh: void 0,
            Zc: void 0,
          }),
          ffc = Object.freeze({ ...r1, type: "embed" });
        var Bfc = class {
            H5(a, b) {
              const c = __c.Nh(a);
              __c.x(c.type !== "body", "Unexpected body context.");
              switch (c.type) {
                case "fixed-page":
                  return {
                    page: this.qk.j_a(c),
                    P: new Phc(a),
                    Zl: a.G.id,
                    ye: b,
                  };
                case "concatenated-fixed-page":
                  return {
                    page: this.qk.$Za(c),
                    P: new Phc(a),
                    Zl: a.G.id,
                    ye: b,
                  };
                case "responsive-page":
                  return {
                    page: this.qk.y_a(c),
                    P: new Phc(a),
                    Zl: a.G.id,
                    ye: b,
                  };
                default:
                  throw new E(c);
              }
            }
            constructor(a, b) {
              this.Yoa = a;
              u(
                b.Zf === "fixed",
                "Responsive documents are not supported in widget rendering."
              );
              this.Fa = __c.Sh(b);
              this.qk = new Qhc(this.Yoa, this.Fa);
            }
          },
          Phc = class {
            get width() {
              return this.container.type === "controlled-item"
                ? this.container.G.Xe?.width || 0
                : this.container.G.I;
            }
            get height() {
              return this.container.type === "controlled-item"
                ? this.container.G.Xe?.height || 0
                : this.container.G.N;
            }
            constructor(a) {
              this.container = a;
            }
          },
          Rhc = class {
            getIndex() {
              return this.pM(this.page);
            }
            get id() {
              return this.page.G.id;
            }
            get title() {
              return this.page.G.title;
            }
            get anchor() {
              return this.page.G.anchor;
            }
            get M1a() {
              return this.page.G.lg;
            }
            constructor(a, b) {
              this.page = a;
              this.pM = b;
            }
          },
          Shc = class extends Rhc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "fixed";
            }
          },
          Thc = class extends Rhc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "concatenated-fixed";
            }
          },
          Uhc = class extends Rhc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "responsive";
            }
          },
          Vhc = class {
            get id() {
              return this.Yoa?.id;
            }
            get extension() {
              return this.Yoa?.extension;
            }
            get language() {
              return this.Fa.G.language;
            }
            constructor(a, b) {
              this.Yoa = a;
              this.Fa = b;
            }
          },
          Qhc = class extends Vhc {
            static D(a) {
              M(a, {
                Z: T0({ equals: fgc.shallow }),
                H5a: T0({ equals: fgc.shallow }),
              });
            }
            get Z() {
              return this.Fa.G.Z.map((a) => this.Bwb(this.Fa.Ze(a)));
            }
            get H5a() {
              return this.Fa.G.Z.toArray();
            }
            constructor(a, b) {
              super(a, b);
              this.En = a;
              this.Fa = b;
              this.type = (Qhc.D(this), "fixed");
              this.j_a = Z0((c) => new Shc(c, this.pM, this));
              this.$Za = Z0((c) => new Thc(c, this.pM, this));
              this.y_a = Z0((c) => new Uhc(c, this.pM, this));
              this.Bwb = Z0((c) => {
                switch (c.type) {
                  case "fixed-page":
                    return this.j_a(c);
                  case "concatenated-fixed-page":
                    return this.$Za(c);
                  case "responsive-page":
                    return this.y_a(c);
                  default:
                    throw new E(c);
                }
              });
              this.pM = Z0((c) => {
                c = this.Fa.G.Z.has(c.G) ? c.G : void 0;
                return c != null ? this.H5a.indexOf(c) : -1;
              });
            }
          };
        var Whc = class {
          constructor(a) {
            this.vJa = a;
            this.AVa = new Map();
          }
        };
        var yfc = class {
          add(a, b) {
            let c = this.store.get(a);
            c || ((c = c1.set(void 0, { deep: !1 })), this.store.set(a, c));
            c.add(b);
          }
          get(a) {
            return this.store.get(a);
          }
          remove(a, b) {
            const c = this.store.get(a);
            c && (c.delete(b), c.size === 0 && this.store.delete(a));
          }
          constructor() {
            this.store = new __c.jB();
          }
        };
        var nfc = class {
          Sc(a) {
            let b = this.store.get(a);
            b == null && ((b = this.fqb()), this.store.set(a, b));
            return b;
          }
          constructor(a) {
            this.fqb = a;
            this.store = new WeakMap();
          }
        };
        var ydc = new Set(),
          zdc = { jy: () => ({ Na: rgc }) },
          Cfc = class {
            static D(a) {
              M(a, { pU: c1.shallow });
            }
            Aia(a) {
              return this.pU.get(a)?.G;
            }
            constructor(a, b, c, d, e, f, g, h) {
              this.Fa = a;
              this.vJa = b;
              this.B2 = c;
              this.Fxa = d;
              this.J = e;
              this.WRb = f;
              this.Re = g;
              this.Esb = h;
              this.pU = (Cfc.D(this), new Map());
            }
          },
          ufc = (a, b) => ({
            ...a,
            Nda: (c) => l0(a.Nda, { ...c, Anb: b || !1 }),
          }),
          wfc = (a, b) => ({
            ...a,
            ki: (c) => l0(a.ki, { ...c, scale: b || 1 }),
          });
        var Xhc = class {
          static D(a) {
            M(a, { Xaa: c1.shallow });
          }
          constructor(a) {
            this.wVa = a;
            this.Xaa = (Xhc.D(this), new Map());
          }
        };
        var Yhc = class extends bgc {
          render() {
            const {
              children: a,
              component: b = "div",
              OIb: c,
              Wma: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.alb;
                return f;
              }, {}));
            return l0(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.Wma && Lfc(this);
          }
          componentDidUpdate() {
            this.props.Wma && Lfc(this);
          }
          componentWillUnmount() {
            this.WP && (this.WP(), (this.WP = null));
          }
          constructor(...a) {
            super(...a);
            this.bua = this.WP = null;
            this.alb = (b) => {
              this.bua = b.nativeEvent;
            };
            this.RQa = (b) => {
              const c = this.props.Wma,
                d = this.bua === b;
              c && !d && c(b);
              this.bua = null;
            };
          }
        };
        var Ofc = (a) =>
          l0(Yhc, {
            OIb: ["onMouseDown", "onTouchStart"],
            $rb: ["mousedown", "touchstart"],
            Wma: a.v$,
            children: a.children,
          });
        var Mfc = class {
            static D(a) {
              M(a, { Ii: c1.ref });
            }
            constructor() {
              this.Ii = (Mfc.D(this), !0);
            }
          },
          Nfc = class {
            static D(a) {
              M(a, {
                onDoubleClick: d1.bound,
                onTouchEnd: d1.bound,
                reset: d1.bound,
              });
            }
            onDoubleClick() {
              this.store.Ii = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.gV
                  ? (window.clearTimeout(this.gV),
                    (this.gV = void 0),
                    (this.store.Ii = !1))
                  : (this.gV = window.setTimeout(
                      () => (this.gV = void 0),
                      300
                    )));
            }
            reset() {
              this.store.Ii = !0;
            }
            zX() {
              this.gV && window.clearTimeout(this.gV);
            }
            constructor(a) {
              this.store = a;
              this.gV = (Nfc.D(this), void 0);
            }
          };
        __c.k0a = {
          hzb: function ({
            document: a,
            qk: b,
            OC: c,
            vz: d,
            yD: e,
            YG: f,
            Fg: g,
            Jha: h,
            Aa: k,
            zf: l,
            je: m,
            ag: n,
            ye: p,
            Sha: q,
            bE: r,
            aSb: t,
            pab: v,
            S9a: w,
            eja: z,
          }) {
            const A = g.FM,
              C = g.ai;
            var B = g.J;
            const D = g.rf,
              I = g.ia,
              L = g.$Xa,
              N = g.Va;
            var P = h.Mp;
            const { wza: Q = !1, Jza: T = !1, Eza: V = !1 } = t ?? {},
              { So: Z, Fxa: aa } = { So: kfc(), Fxa: Fhc };
            t = new Xhc(Rec(Z));
            const {
              OOa: ea,
              psa: na,
              Pxa: oa,
              B2: qa,
            } = { OOa: t, psa: t, Pxa: aa, B2: Z };
            q = qdc({ OOa: ea, wza: Q, Sha: q, Jza: T, Eza: V });
            t = new Whc(na);
            const { NOa: za, Dhb: ca } = { NOa: t, Dhb: t };
            t = wdc({ POa: q, NOa: za });
            B = B.cg("widget");
            P = Pfc({ Mp: P, Va: N });
            const ia = Tfc();
            m = Ufc({ je: m });
            n = Qfc({ ij: n });
            const ua = Sfc({ Aa: k, eja: z });
            z = Vfc({ Aa: k, eja: z });
            const {
              vda: xa,
              QC: Ga,
              expr: Ia,
            } = Efc({
              J: B,
              psa: na,
              $Rb: { Nda: P, Ijb: ia, ki: m, ck: n, Qda: ua, xta: z },
              XRb: { ki: Ifc() },
              Pxa: oa,
              B2: qa,
              En: b,
              Fa: a,
              pab: v,
              S9a: w,
            });
            a = tcc({
              ye: p,
              Mp: h.Mp,
              Tq: h.Tq,
              Va: g.Va,
              J: g.J.cg("codelet"),
            });
            g = ucc({
              ye: p,
              Mp: h.Mp,
              Tq: h.Tq,
              Va: g.Va,
              J: g.J.cg("codelet2"),
            });
            const { pU: jb, GZa: $a } = Hdc({
              POa: q,
              vda: xa,
              rf: D,
              RQ: { J: B, ia: I, zf: p === 30 ? l : void 0, Va: N, expr: Ia },
              Wh: {
                vz: d,
                YG: f,
                yD: e,
                $Xa: L,
                Aa: k,
                OC: c,
                Ksa: a,
                Lsa: g,
                bE: r,
                FM: A,
                ai: C,
              },
            });
            return { psa: na, QC: Ga, Jec: jb, Hec: t, Dhb: ca, GZa: $a };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },

    /***/ 196751: (_, __, r) => r(258551),

    /***/ 149342: (_, __, r) => r(258551),

    /***/ 761582: (_, __, r) => r(258551),

    /***/ 751088: (_, __, r) => r(258551),
  },
]);
//# sourceMappingURL=sourcemaps/c0f8240564b9f8df.js.map
