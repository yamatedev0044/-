"use strict";
(self.webpackChunk_canva_web = self.webpackChunk_canva_web || []).push([
  [59880],
  {
    61253: (e, t, n) => {
      n.d(t, { A: () => _ });
      const _ = n.p + "wasm/9782f94ea1d8a7e5695322bc60560145.wasm";
    },
    236767: (e, t, n) => {
      let _;
      n.d(t, { Ay: () => te, IB: () => Z, ly: () => J, tV: () => ee });
      const r =
        "undefined" != typeof TextDecoder
          ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
          : {
              decode: () => {
                throw Error("TextDecoder not available");
              },
            };
      "undefined" != typeof TextDecoder && r.decode();
      let i = null;
      function b() {
        return (
          (null !== i && 0 !== i.byteLength) ||
            (i = new Uint8Array(_.memory.buffer)),
          i
        );
      }
      function c(e, t) {
        return (e >>>= 0), r.decode(b().subarray(e, e + t));
      }
      function o(e) {
        const t = _.__externref_table_alloc();
        return _.__wbindgen_export_2.set(t, e), t;
      }
      function a(e, t) {
        try {
          return e.apply(this, t);
        } catch (n) {
          const e = o(n);
          _.__wbindgen_exn_store(e);
        }
      }
      function g(e, t) {
        return (e >>>= 0), b().subarray(e / 1, e / 1 + t);
      }
      function f(e) {
        return null == e;
      }
      let u = 0;
      const w =
          "undefined" != typeof TextEncoder
            ? new TextEncoder("utf-8")
            : {
                encode: () => {
                  throw Error("TextEncoder not available");
                },
              },
        s =
          "function" == typeof w.encodeInto
            ? function (e, t) {
                return w.encodeInto(e, t);
              }
            : function (e, t) {
                const n = w.encode(e);
                return t.set(n), { read: e.length, written: n.length };
              };
      function d(e, t, n) {
        if (void 0 === n) {
          const n = w.encode(e),
            _ = t(n.length, 1) >>> 0;
          return (
            b()
              .subarray(_, _ + n.length)
              .set(n),
            (u = n.length),
            _
          );
        }
        let _ = e.length,
          r = t(_, 1) >>> 0;
        const i = b();
        let c = 0;
        for (; c < _; c++) {
          const t = e.charCodeAt(c);
          if (t > 127) break;
          i[r + c] = t;
        }
        if (c !== _) {
          0 !== c && (e = e.slice(c)),
            (r = n(r, _, (_ = c + 3 * e.length), 1) >>> 0);
          const t = b().subarray(r + c, r + _);
          (c += s(e, t).written), (r = n(r, _, c, 1) >>> 0);
        }
        return (u = c), r;
      }
      let l = null;
      function h() {
        return (
          (null === l ||
            !0 === l.buffer.detached ||
            (void 0 === l.buffer.detached && l.buffer !== _.memory.buffer)) &&
            (l = new DataView(_.memory.buffer)),
          l
        );
      }
      const p =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) => {
              _.__wbindgen_export_6.get(e.dtor)(e.a, e.b);
            });
      function y(e, t, n, r) {
        const i = { a: e, b: t, cnt: 1, dtor: n },
          b = (...e) => {
            i.cnt++;
            try {
              return r(i.a, i.b, ...e);
            } finally {
              0 == --i.cnt &&
                (_.__wbindgen_export_6.get(i.dtor)(i.a, i.b),
                (i.a = 0),
                p.unregister(i));
            }
          };
        return (b.original = i), p.register(b, i, i), b;
      }
      function m(e, t, n, r) {
        const i = { a: e, b: t, cnt: 1, dtor: n },
          b = (...e) => {
            i.cnt++;
            const t = i.a;
            i.a = 0;
            try {
              return r(t, i.b, ...e);
            } finally {
              0 == --i.cnt
                ? (_.__wbindgen_export_6.get(i.dtor)(t, i.b), p.unregister(i))
                : (i.a = t);
            }
          };
        return (b.original = i), p.register(b, i, i), b;
      }
      function x(e) {
        const t = typeof e;
        if ("number" == t || "boolean" == t || null == e) return `${e}`;
        if ("string" == t) return `"${e}"`;
        if ("symbol" == t) {
          const t = e.description;
          return null == t ? "Symbol" : `Symbol(${t})`;
        }
        if ("function" == t) {
          const t = e.name;
          return "string" == typeof t && t.length > 0
            ? `Function(${t})`
            : "Function";
        }
        if (Array.isArray(e)) {
          const t = e.length;
          let n = "[";
          t > 0 && (n += x(e[0]));
          for (let _ = 1; _ < t; _++) n += ", " + x(e[_]);
          return (n += "]"), n;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let _;
        if (!(n && n.length > 1)) return toString.call(e);
        if (((_ = n[1]), "Object" == _))
          try {
            return "Object(" + JSON.stringify(e) + ")";
          } catch (r) {
            return "Object";
          }
        return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : _;
      }
      function v(e, t) {
        if (!(e instanceof t))
          throw new Error(`expected instance of ${t.name}`);
      }
      function A(e, t) {
        _._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf61bfa51858ef518(
          e,
          t
        );
      }
      function I(e, t, n) {
        _.closure182_externref_shim(e, t, n);
      }
      function R(e, t) {
        _._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4eda62fa9c85ca9c(
          e,
          t
        );
      }
      function F(e, t, n) {
        _.closure425_externref_shim(e, t, n);
      }
      const E = ["omit", "same-origin", "include"],
        L = ["same-origin", "no-cors", "cors", "navigate"],
        T =
          "undefined" == typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) =>
                _.__wbg_binarytexture_free(e >>> 0, 1)
              );
      let S = class {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), T.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_binarytexture_free(e, 0);
        }
        constructor(e) {
          const t = _.binarytexture_constructor(e);
          return (
            (this.__wbg_ptr = t >>> 0),
            T.register(this, this.__wbg_ptr, this),
            this
          );
        }
        update(e) {
          _.binarytexture_update(this.__wbg_ptr, e);
        }
        get id() {
          return _.binarytexture_id(this.__wbg_ptr);
        }
      };
      const U =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) => _.__wbg_buffer_free(e >>> 0, 1));
      let P = class {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), U.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_buffer_free(e, 0);
        }
        constructor(e) {
          const t = _.buffer_constructor(e);
          return (
            (this.__wbg_ptr = t >>> 0),
            U.register(this, this.__wbg_ptr, this),
            this
          );
        }
        get id() {
          return _.buffer_id(this.__wbg_ptr);
        }
      };
      const z =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              _.__wbg_elementsbuffer_free(e >>> 0, 1)
            );
      let D = class {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), z.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_elementsbuffer_free(e, 0);
        }
        constructor(e) {
          const t = _.elementsbuffer_constructor(e);
          return (
            (this.__wbg_ptr = t >>> 0),
            z.register(this, this.__wbg_ptr, this),
            this
          );
        }
        get id() {
          return _.buffer_id(this.__wbg_ptr);
        }
      };
      const B =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              _.__wbg_gltfrendererinternal_free(e >>> 0, 1)
            );
      class k {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), B.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_gltfrendererinternal_free(e, 0);
        }
        constructor(e) {
          v(e, M);
          const t = _.gltfrendererinternal_constructor(e.__wbg_ptr);
          return (
            (this.__wbg_ptr = t >>> 0),
            B.register(this, this.__wbg_ptr, this),
            this
          );
        }
        render_webgl(e, t) {
          v(e, J),
            _.gltfrendererinternal_render_webgl(this.__wbg_ptr, e.__wbg_ptr, t);
        }
        dispose_webgl(e) {
          const t = this.__destroy_into_raw();
          v(e, J), _.gltfrendererinternal_dispose_webgl(t, e.__wbg_ptr);
        }
      }
      const O =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              _.__wbg_gltfresource_free(e >>> 0, 1)
            );
      let M = class {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), O.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_gltfresource_free(e, 0);
        }
        constructor(e, ...t) {
          const n = d(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = u,
            i = _.gltfresource_constructor(n, r, t);
          return (
            (this.__wbg_ptr = i >>> 0),
            O.register(this, this.__wbg_ptr, this),
            this
          );
        }
        id() {
          return _.binarytexture_id(this.__wbg_ptr);
        }
        precache() {
          _.gltfresource_precache(this.__wbg_ptr);
        }
        dispose() {
          const e = this.__destroy_into_raw();
          _.gltfresource_dispose(e);
        }
        load() {
          return _.gltfresource_load(this.__wbg_ptr);
        }
      };
      const j =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              _.__wbg_imagetexture_free(e >>> 0, 1)
            );
      let C = class {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), j.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_imagetexture_free(e, 0);
        }
        constructor(e) {
          const t = _.imagetexture_constructor(e);
          return (
            (this.__wbg_ptr = t >>> 0),
            j.register(this, this.__wbg_ptr, this),
            this
          );
        }
        update(e) {
          _.imagetexture_update(this.__wbg_ptr, e);
        }
        get id() {
          return _.binarytexture_id(this.__wbg_ptr);
        }
      };
      const W =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              _.__wbg_rendertexture_free(e >>> 0, 1)
            );
      let q = class {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), W.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_rendertexture_free(e, 0);
        }
        constructor(e) {
          const t = _.rendertexture_constructor(e);
          return (
            (this.__wbg_ptr = t >>> 0),
            W.register(this, this.__wbg_ptr, this),
            this
          );
        }
        update(e) {
          _.rendertexture_update(this.__wbg_ptr, e);
        }
        get id() {
          return _.binarytexture_id(this.__wbg_ptr);
        }
      };
      const H =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              _.__wbg_renderable_free(e >>> 0, 1)
            );
      let N = class e {
        static __wrap(t) {
          t >>>= 0;
          const n = Object.create(e.prototype);
          return (n.__wbg_ptr = t), H.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), H.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_renderable_free(e, 0);
        }
        constructor(e) {
          const t = _.renderable_constructor(e);
          return (
            (this.__wbg_ptr = t >>> 0),
            H.register(this, this.__wbg_ptr, this),
            this
          );
        }
        update(e) {
          _.renderable_update(this.__wbg_ptr, e);
        }
        get id() {
          return _.binarytexture_id(this.__wbg_ptr);
        }
        get resources() {
          return _.renderable_resources(this.__wbg_ptr);
        }
      };
      const V =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) => _.__wbg_shader_free(e >>> 0, 1));
      let G = class {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), V.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_shader_free(e, 0);
        }
        constructor(e) {
          const t = _.shader_constructor(e);
          return (
            (this.__wbg_ptr = t >>> 0),
            V.register(this, this.__wbg_ptr, this),
            this
          );
        }
        get id() {
          return _.buffer_id(this.__wbg_ptr);
        }
      };
      "undefined" == typeof FinalizationRegistry ||
        new FinalizationRegistry((e) => _.__wbg_size_free(e >>> 0, 1));
      const $ =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              _.__wbg_webglrenderer_free(e >>> 0, 1)
            );
      class J {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), $.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          _.__wbg_webglrenderer_free(e, 0);
        }
        constructor(e, ...t) {
          const n = _.webglrenderer_new_js(e, t);
          return (
            (this.__wbg_ptr = n >>> 0),
            $.register(this, this.__wbg_ptr, this),
            this
          );
        }
        load(e) {
          _.webglrenderer_load(this.__wbg_ptr, e);
        }
        release(e) {
          _.webglrenderer_release(this.__wbg_ptr, e);
        }
        update(e) {
          _.webglrenderer_update(this.__wbg_ptr, e);
        }
        render(e) {
          _.webglrenderer_render(this.__wbg_ptr, e);
        }
        clear(e, ...t) {
          _.webglrenderer_clear(this.__wbg_ptr, e, t);
        }
        readPixels(...e) {
          return _.webglrenderer_readPixels(this.__wbg_ptr, e);
        }
        dispose() {
          _.webglrenderer_dispose(this.__wbg_ptr);
        }
        flush() {
          _.webglrenderer_flush(this.__wbg_ptr);
        }
        resize(e, t) {
          _.webglrenderer_resize(
            this.__wbg_ptr,
            f(e) ? 4294967297 : e >>> 0,
            f(t) ? 4294967297 : t >>> 0
          );
        }
        get canvas() {
          return _.webglrenderer_canvas(this.__wbg_ptr);
        }
        set onContextLost(e) {
          _.webglrenderer_set_onContextLost(this.__wbg_ptr, e);
        }
      }
      function K() {
        const e = { wbg: {} };
        return (
          (e.wbg.__wbg_abort_410ec47a64ac6117 = function (e, t) {
            e.abort(t);
          }),
          (e.wbg.__wbg_abort_775ef1d17fc65868 = function (e) {
            e.abort();
          }),
          (e.wbg.__wbg_activeTexture_0f19d8acfa0a14c2 = function (e, t) {
            e.activeTexture(t >>> 0);
          }),
          (e.wbg.__wbg_addEventListener_4220b29000fe3462 = function () {
            return a(function (e, t, n, _, r) {
              e.addEventListener(c(t, n), _, r);
            }, arguments);
          }),
          (e.wbg.__wbg_append_8c7dd8d641a5f01b = function () {
            return a(function (e, t, n, _, r) {
              e.append(c(t, n), c(_, r));
            }, arguments);
          }),
          (e.wbg.__wbg_arrayBuffer_d1b44c4390db422f = function () {
            return a(function (e) {
              return e.arrayBuffer();
            }, arguments);
          }),
          (e.wbg.__wbg_at_7d852dd9f194d43e = function (e, t) {
            return e.at(t);
          }),
          (e.wbg.__wbg_attachShader_94e758c8b5283eb2 = function (e, t, n) {
            e.attachShader(t, n);
          }),
          (e.wbg.__wbg_bindBuffer_f32f587f1c2962a7 = function (e, t, n) {
            e.bindBuffer(t >>> 0, n);
          }),
          (e.wbg.__wbg_bindFramebuffer_bd02c8cc707d670f = function (e, t, n) {
            e.bindFramebuffer(t >>> 0, n);
          }),
          (e.wbg.__wbg_bindTexture_bc8eb316247f739d = function (e, t, n) {
            e.bindTexture(t >>> 0, n);
          }),
          (e.wbg.__wbg_blendEquationSeparate_c1aa26a9a5c5267e = function (
            e,
            t,
            n
          ) {
            e.blendEquationSeparate(t >>> 0, n >>> 0);
          }),
          (e.wbg.__wbg_blendFuncSeparate_483be8d4dd635340 = function (
            e,
            t,
            n,
            _,
            r
          ) {
            e.blendFuncSeparate(t >>> 0, n >>> 0, _ >>> 0, r >>> 0);
          }),
          (e.wbg.__wbg_bufferData_e782cf0ee06c693a = function (e, t, n, _, r) {
            e.bufferData(t >>> 0, g(n, _), r >>> 0);
          }),
          (e.wbg.__wbg_buffer_09165b52af8c5237 = function (e) {
            return e.buffer;
          }),
          (e.wbg.__wbg_buffer_609cc3eee51ed158 = function (e) {
            return e.buffer;
          }),
          (e.wbg.__wbg_byteOffset_fd862df290ef848d = function (e) {
            return e.byteOffset;
          }),
          (e.wbg.__wbg_call_672a4d21634d4a24 = function () {
            return a(function (e, t) {
              return e.call(t);
            }, arguments);
          }),
          (e.wbg.__wbg_call_7cccdd69e0791ae2 = function () {
            return a(function (e, t, n) {
              return e.call(t, n);
            }, arguments);
          }),
          (e.wbg.__wbg_canvas_61c22f731dd850f6 = function (e) {
            const t = e.canvas;
            return f(t) ? 0 : o(t);
          }),
          (e.wbg.__wbg_clearColor_f0fa029dfbcc1982 = function (e, t, n, _, r) {
            e.clearColor(t, n, _, r);
          }),
          (e.wbg.__wbg_clearDepth_17cfee5be8476fae = function (e, t) {
            e.clearDepth(t);
          }),
          (e.wbg.__wbg_clearStencil_7addd3b330b56b27 = function (e, t) {
            e.clearStencil(t);
          }),
          (e.wbg.__wbg_clearTimeout_0b53d391c1b94dda = function (e) {
            return clearTimeout(e);
          }),
          (e.wbg.__wbg_clear_f8d5f3c348d37d95 = function (e, t) {
            e.clear(t >>> 0);
          }),
          (e.wbg.__wbg_clientHeight_216178c194000db4 = function (e) {
            return e.clientHeight;
          }),
          (e.wbg.__wbg_clientWidth_ce67a04dc15fce39 = function (e) {
            return e.clientWidth;
          }),
          (e.wbg.__wbg_compileShader_2307c9d370717dd5 = function (e, t) {
            e.compileShader(t);
          }),
          (e.wbg.__wbg_createBuffer_7a9ec3d654073660 = function (e) {
            const t = e.createBuffer();
            return f(t) ? 0 : o(t);
          }),
          (e.wbg.__wbg_createFramebuffer_7824f69bba778885 = function (e) {
            const t = e.createFramebuffer();
            return f(t) ? 0 : o(t);
          }),
          (e.wbg.__wbg_createObjectURL_6e98d2f9c7bd9764 = function () {
            return a(function (e, t) {
              const n = d(
                  URL.createObjectURL(t),
                  _.__wbindgen_malloc,
                  _.__wbindgen_realloc
                ),
                r = u;
              h().setInt32(e + 4, r, !0), h().setInt32(e + 0, n, !0);
            }, arguments);
          }),
          (e.wbg.__wbg_createProgram_8ff56c485f3233d0 = function (e) {
            const t = e.createProgram();
            return f(t) ? 0 : o(t);
          }),
          (e.wbg.__wbg_createShader_4a256a8cc9c1ce4f = function (e, t) {
            const n = e.createShader(t >>> 0);
            return f(n) ? 0 : o(n);
          }),
          (e.wbg.__wbg_createTexture_9c536c79b635fdef = function (e) {
            const t = e.createTexture();
            return f(t) ? 0 : o(t);
          }),
          (e.wbg.__wbg_cullFace_fbae6dd4d5e61ba4 = function (e, t) {
            e.cullFace(t >>> 0);
          }),
          (e.wbg.__wbg_deleteBuffer_a7822433fc95dfb8 = function (e, t) {
            e.deleteBuffer(t);
          }),
          (e.wbg.__wbg_deleteFramebuffer_cd3285ee5a702a7a = function (e, t) {
            e.deleteFramebuffer(t);
          }),
          (e.wbg.__wbg_deleteProgram_3fa626bbc0001eb7 = function (e, t) {
            e.deleteProgram(t);
          }),
          (e.wbg.__wbg_deleteShader_c65a44796c5004d8 = function (e, t) {
            e.deleteShader(t);
          }),
          (e.wbg.__wbg_deleteTexture_a30f5ca0163c4110 = function (e, t) {
            e.deleteTexture(t);
          }),
          (e.wbg.__wbg_depthFunc_2906916f4536d5d7 = function (e, t) {
            e.depthFunc(t >>> 0);
          }),
          (e.wbg.__wbg_depthMask_5fe84e2801488eda = function (e, t) {
            e.depthMask(0 !== t);
          }),
          (e.wbg.__wbg_depthRange_3cd6b4dc961d9116 = function (e, t, n) {
            e.depthRange(t, n);
          }),
          (e.wbg.__wbg_devicePixelRatio_68c391265f05d093 = function (e) {
            return e.devicePixelRatio;
          }),
          (e.wbg.__wbg_disableVertexAttribArray_afd097fb465dc100 = function (
            e,
            t
          ) {
            e.disableVertexAttribArray(t >>> 0);
          }),
          (e.wbg.__wbg_disable_8b53998501a7a85b = function (e, t) {
            e.disable(t >>> 0);
          }),
          (e.wbg.__wbg_done_769e5ede4b31c67b = function (e) {
            return e.done;
          }),
          (e.wbg.__wbg_drawArraysInstancedANGLE_342ee6b5236d9702 = function (
            e,
            t,
            n,
            _,
            r
          ) {
            e.drawArraysInstancedANGLE(t >>> 0, n, _, r);
          }),
          (e.wbg.__wbg_drawArrays_6acaa2669c105f3a = function (e, t, n, _) {
            e.drawArrays(t >>> 0, n, _);
          }),
          (e.wbg.__wbg_drawElementsInstancedANGLE_096b48ab8686c5cf = function (
            e,
            t,
            n,
            _,
            r,
            i
          ) {
            e.drawElementsInstancedANGLE(t >>> 0, n, _ >>> 0, r, i);
          }),
          (e.wbg.__wbg_drawElements_16199ef1cc58b16a = function (
            e,
            t,
            n,
            _,
            r
          ) {
            e.drawElements(t >>> 0, n, _ >>> 0, r);
          }),
          (e.wbg.__wbg_drawingBufferHeight_1d398e1fc5bb18e9 = function (e) {
            return e.drawingBufferHeight;
          }),
          (e.wbg.__wbg_drawingBufferWidth_78f7e4a8892a90fe = function (e) {
            return e.drawingBufferWidth;
          }),
          (e.wbg.__wbg_enableVertexAttribArray_607be07574298e5e = function (
            e,
            t
          ) {
            e.enableVertexAttribArray(t >>> 0);
          }),
          (e.wbg.__wbg_enable_d183fef39258803f = function (e, t) {
            e.enable(t >>> 0);
          }),
          (e.wbg.__wbg_entries_3265d4158b33e5dc = function (e) {
            return Object.entries(e);
          }),
          (e.wbg.__wbg_error_7534b8e9a36f1ab4 = function (e, t) {
            let n, r;
            try {
              (n = e), (r = t), console.error(c(e, t));
            } finally {
              _.__wbindgen_free(n, r, 1);
            }
          }),
          (e.wbg.__wbg_fetch_11bff8299d0ecd2b = function (e) {
            return fetch(e);
          }),
          (e.wbg.__wbg_fetch_509096533071c657 = function (e, t) {
            return e.fetch(t);
          }),
          (e.wbg.__wbg_flush_987c35de09e06fd6 = function (e) {
            e.flush();
          }),
          (e.wbg.__wbg_framebufferTexture2D_81a565732bd5d8fe = function (
            e,
            t,
            n,
            _,
            r,
            i
          ) {
            e.framebufferTexture2D(t >>> 0, n >>> 0, _ >>> 0, r, i);
          }),
          (e.wbg.__wbg_frontFace_4d4936cfaeb8b7df = function (e, t) {
            e.frontFace(t >>> 0);
          }),
          (e.wbg.__wbg_generateMipmap_13d3d6406de35b14 = function (e, t) {
            e.generateMipmap(t >>> 0);
          }),
          (e.wbg.__wbg_getActiveAttrib_ef9231684274e84a = function (e, t, n) {
            const _ = e.getActiveAttrib(t, n >>> 0);
            return f(_) ? 0 : o(_);
          }),
          (e.wbg.__wbg_getActiveUniform_3c49cb0b185d71e0 = function (e, t, n) {
            const _ = e.getActiveUniform(t, n >>> 0);
            return f(_) ? 0 : o(_);
          }),
          (e.wbg.__wbg_getAttribLocation_9db82d01924fa43d = function (
            e,
            t,
            n,
            _
          ) {
            return e.getAttribLocation(t, c(n, _));
          }),
          (e.wbg.__wbg_getExtension_e6c97409b224b5dc = function () {
            return a(function (e, t, n) {
              const _ = e.getExtension(c(t, n));
              return f(_) ? 0 : o(_);
            }, arguments);
          }),
          (e.wbg.__wbg_getParameter_1f0887a2b88e6d19 = function () {
            return a(function (e, t) {
              return e.getParameter(t >>> 0);
            }, arguments);
          }),
          (e.wbg.__wbg_getProgramInfoLog_631c180b1b21c8ed = function (e, t, n) {
            const r = t.getProgramInfoLog(n);
            var i = f(r) ? 0 : d(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
              b = u;
            h().setInt32(e + 4, b, !0), h().setInt32(e + 0, i, !0);
          }),
          (e.wbg.__wbg_getProgramParameter_0c411f0cd4185c5b = function (
            e,
            t,
            n
          ) {
            return e.getProgramParameter(t, n >>> 0);
          }),
          (e.wbg.__wbg_getRandomValues_38097e921c2494c3 = function () {
            return a(function (e, t) {
              globalThis.crypto.getRandomValues(g(e, t));
            }, arguments);
          }),
          (e.wbg.__wbg_getShaderInfoLog_7e7b38fb910ec534 = function (e, t, n) {
            const r = t.getShaderInfoLog(n);
            var i = f(r) ? 0 : d(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
              b = u;
            h().setInt32(e + 4, b, !0), h().setInt32(e + 0, i, !0);
          }),
          (e.wbg.__wbg_getShaderParameter_6dbe0b8558dc41fd = function (
            e,
            t,
            n
          ) {
            return e.getShaderParameter(t, n >>> 0);
          }),
          (e.wbg.__wbg_getUniformLocation_838363001c74dc21 = function (
            e,
            t,
            n,
            _
          ) {
            const r = e.getUniformLocation(t, c(n, _));
            return f(r) ? 0 : o(r);
          }),
          (e.wbg.__wbg_get_67b2ba62fc30de12 = function () {
            return a(function (e, t) {
              return Reflect.get(e, t);
            }, arguments);
          }),
          (e.wbg.__wbg_get_b9b93047fe3cf45b = function (e, t) {
            return e[t >>> 0];
          }),
          (e.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function (e, t) {
            return e[t];
          }),
          (e.wbg.__wbg_has_a5ea9117f258a0ec = function () {
            return a(function (e, t) {
              return Reflect.has(e, t);
            }, arguments);
          }),
          (e.wbg.__wbg_headers_9cb51cfd2ac780a4 = function (e) {
            return e.headers;
          }),
          (e.wbg.__wbg_height_1d93eb7f5e355d97 = function (e) {
            return e.height;
          }),
          (e.wbg.__wbg_height_838cee19ba8597db = function (e) {
            return e.height;
          }),
          (e.wbg.__wbg_height_94941b7681aa1cce = function (e) {
            return e.height;
          }),
          (e.wbg.__wbg_height_d3f39e12f0f62121 = function (e) {
            return e.height;
          }),
          (e.wbg.__wbg_height_df1aa98dfbbe11ad = function (e) {
            return e.height;
          }),
          (e.wbg.__wbg_height_e3c322f23d99ad2f = function (e) {
            return e.height;
          }),
          (e.wbg.__wbg_href_87d60a783a012377 = function () {
            return a(function (e, t) {
              const n = d(t.href, _.__wbindgen_malloc, _.__wbindgen_realloc),
                r = u;
              h().setInt32(e + 4, r, !0), h().setInt32(e + 0, n, !0);
            }, arguments);
          }),
          (e.wbg.__wbg_href_e36b397abf414828 = function (e, t) {
            const n = d(t.href, _.__wbindgen_malloc, _.__wbindgen_realloc),
              r = u;
            h().setInt32(e + 4, r, !0), h().setInt32(e + 0, n, !0);
          }),
          (e.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function (e) {
            let t;
            try {
              t = e instanceof ArrayBuffer;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_BigInt64Array_54093ef9577a0ead = function (
            e
          ) {
            let t;
            try {
              t = e instanceof BigInt64Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_BigUint64Array_11036ba986f4cf6c = function (
            e
          ) {
            let t;
            try {
              t = e instanceof BigUint64Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_EventTarget_8c4eb19ce0b8fe12 = function (e) {
            let t;
            try {
              t = e instanceof EventTarget;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Float32Array_01dd91be3195315d = function (e) {
            let t;
            try {
              t = e instanceof Float32Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Float64Array_becba31e3ab3ef82 = function (e) {
            let t;
            try {
              t = e instanceof Float64Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_HtmlCanvasElement_2ea67072a7624ac5 =
            function (e) {
              let t;
              try {
                t = e instanceof HTMLCanvasElement;
              } catch (n) {
                t = !1;
              }
              return t;
            }),
          (e.wbg.__wbg_instanceof_HtmlImageElement_3fe24a3cec7f62bb = function (
            e
          ) {
            let t;
            try {
              t = e instanceof HTMLImageElement;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_HtmlVideoElement_7f414b32f362e317 = function (
            e
          ) {
            let t;
            try {
              t = e instanceof HTMLVideoElement;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_ImageBitmap_d093d508663e313d = function (e) {
            let t;
            try {
              t = e instanceof ImageBitmap;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_ImageData_fc475d401abac639 = function (e) {
            let t;
            try {
              t = e instanceof ImageData;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Int16Array_51f409e7e77b5328 = function (e) {
            let t;
            try {
              t = e instanceof Int16Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Int32Array_e5985ec23fafcb9c = function (e) {
            let t;
            try {
              t = e instanceof Int32Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Int8Array_2897001329f70c4e = function (e) {
            let t;
            try {
              t = e instanceof Int8Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Map_f3469ce2244d2430 = function (e) {
            let t;
            try {
              t = e instanceof Map;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_OffscreenCanvas_d55760945f91bf51 = function (
            e
          ) {
            let t;
            try {
              t = e instanceof OffscreenCanvas;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Response_f2cc20d9f7dfd644 = function (e) {
            let t;
            try {
              t = e instanceof Response;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Uint16Array_17c549c1d1af4c33 = function (e) {
            let t;
            try {
              t = e instanceof Uint16Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Uint32Array_b8b88c093c0d7ff4 = function (e) {
            let t;
            try {
              t = e instanceof Uint32Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function (e) {
            let t;
            try {
              t = e instanceof Uint8Array;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_instanceof_Uint8ClampedArray_72cd50327e1f4ad6 =
            function (e) {
              let t;
              try {
                t = e instanceof Uint8ClampedArray;
              } catch (n) {
                t = !1;
              }
              return t;
            }),
          (e.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function (e) {
            let t;
            try {
              t = e instanceof Window;
            } catch (n) {
              t = !1;
            }
            return t;
          }),
          (e.wbg.__wbg_isArray_a1eab7e0d067391b = function (e) {
            return Array.isArray(e);
          }),
          (e.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function (e) {
            return Number.isSafeInteger(e);
          }),
          (e.wbg.__wbg_iterator_9a24c88df860dc65 = function () {
            return Symbol.iterator;
          }),
          (e.wbg.__wbg_length_07e0772b8084db33 = function (e) {
            return e.length;
          }),
          (e.wbg.__wbg_length_1e1dda66fc775b47 = function (e) {
            return e.length;
          }),
          (e.wbg.__wbg_length_238152a0aedbb6e7 = function (e) {
            return e.length;
          }),
          (e.wbg.__wbg_length_3b4f022188ae8db6 = function (e) {
            return e.length;
          }),
          (e.wbg.__wbg_length_6ca527665d89694d = function (e) {
            return e.length;
          }),
          (e.wbg.__wbg_length_8cfd2c6409af88ad = function (e) {
            return e.length;
          }),
          (e.wbg.__wbg_length_a446193dc22c12f8 = function (e) {
            return e.length;
          }),
          (e.wbg.__wbg_length_c38244946ebd6be9 = function (e) {
            return e.length;
          }),
          (e.wbg.__wbg_length_e2d2a49132c1b256 = function (e) {
            return e.length;
          }),
          (e.wbg.__wbg_linkProgram_e002979fe36e5b2a = function (e, t) {
            e.linkProgram(t);
          }),
          (e.wbg.__wbg_location_350d99456c2f3693 = function (e) {
            return e.location;
          }),
          (e.wbg.__wbg_name_f5089a8a6c7a983a = function (e, t) {
            const n = d(t.name, _.__wbindgen_malloc, _.__wbindgen_realloc),
              r = u;
            h().setInt32(e + 4, r, !0), h().setInt32(e + 0, n, !0);
          }),
          (e.wbg.__wbg_new_018dcc2d6c8c2f6a = function () {
            return a(function () {
              return new Headers();
            }, arguments);
          }),
          (e.wbg.__wbg_new_23a2665fac83c611 = function (e, t) {
            try {
              var n = { a: e, b: t };
              const r = new Promise((e, t) => {
                const r = n.a;
                n.a = 0;
                try {
                  return (function (e, t, n, r) {
                    _.closure677_externref_shim(e, t, n, r);
                  })(r, n.b, e, t);
                } finally {
                  n.a = r;
                }
              });
              return r;
            } finally {
              n.a = n.b = 0;
            }
          }),
          (e.wbg.__wbg_new_2626a2990a9762f6 = function (e) {
            return new Int16Array(e);
          }),
          (e.wbg.__wbg_new_405e22f390576ce2 = function () {
            return new Object();
          }),
          (e.wbg.__wbg_new_6377da097a44ce6e = function () {
            return a(function () {
              return new Image();
            }, arguments);
          }),
          (e.wbg.__wbg_new_780abee5c1739fd7 = function (e) {
            return new Float32Array(e);
          }),
          (e.wbg.__wbg_new_78feb108b6472713 = function () {
            return new Array();
          }),
          (e.wbg.__wbg_new_7a91e41fe43b3c92 = function (e) {
            return new Uint8ClampedArray(e);
          }),
          (e.wbg.__wbg_new_8a6f238a6ece86ea = function () {
            return new Error();
          }),
          (e.wbg.__wbg_new_8de0180919aeafa0 = function (e) {
            return new Int8Array(e);
          }),
          (e.wbg.__wbg_new_9fee97a409b32b68 = function (e) {
            return new Uint16Array(e);
          }),
          (e.wbg.__wbg_new_9ffbe0a71eff35e3 = function () {
            return a(function (e, t) {
              return new URL(c(e, t));
            }, arguments);
          }),
          (e.wbg.__wbg_new_a12002a7f91c75be = function (e) {
            return new Uint8Array(e);
          }),
          (e.wbg.__wbg_new_e25e5aab09ff45db = function () {
            return a(function () {
              return new AbortController();
            }, arguments);
          }),
          (e.wbg.__wbg_new_e3b321dcfef89fc7 = function (e) {
            return new Uint32Array(e);
          }),
          (e.wbg.__wbg_new_e9a4a67dbababe57 = function (e) {
            return new Int32Array(e);
          }),
          (e.wbg.__wbg_newnoargs_105ed471475aaf50 = function (e, t) {
            return new Function(c(e, t));
          }),
          (e.wbg.__wbg_newwithbase_161c299e7a34e2eb = function () {
            return a(function (e, t, n, _) {
              return new URL(c(e, t), c(n, _));
            }, arguments);
          }),
          (e.wbg.__wbg_newwithbyteoffsetandlength_6d34787141015158 = function (
            e,
            t,
            n
          ) {
            return new Uint8ClampedArray(e, t >>> 0, n >>> 0);
          }),
          (e.wbg.__wbg_newwithbyteoffsetandlength_999332a180064b59 = function (
            e,
            t,
            n
          ) {
            return new Int32Array(e, t >>> 0, n >>> 0);
          }),
          (e.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function (
            e,
            t,
            n
          ) {
            return new Uint8Array(e, t >>> 0, n >>> 0);
          }),
          (e.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354 = function (
            e,
            t,
            n
          ) {
            return new Float32Array(e, t >>> 0, n >>> 0);
          }),
          (e.wbg.__wbg_newwithjsu8clampedarrayandsh_7f3fdc36fd8f9d7a =
            function () {
              return a(function (e, t, n) {
                return new ImageData(e, t >>> 0, n >>> 0);
              }, arguments);
            }),
          (e.wbg.__wbg_newwithstrandinit_06c535e0a867c635 = function () {
            return a(function (e, t, n) {
              return new Request(c(e, t), n);
            }, arguments);
          }),
          (e.wbg.__wbg_newwithu8slicesequenceandoptions_075d550d668604ed =
            function () {
              return a(function (e, t) {
                return new Blob(e, t);
              }, arguments);
            }),
          (e.wbg.__wbg_next_25feadfc0913fea9 = function (e) {
            return e.next;
          }),
          (e.wbg.__wbg_next_6574e1a8a62d1055 = function () {
            return a(function (e) {
              return e.next();
            }, arguments);
          }),
          (e.wbg.__wbg_parentElement_be28a1a931f9c9b7 = function (e) {
            const t = e.parentElement;
            return f(t) ? 0 : o(t);
          }),
          (e.wbg.__wbg_pixelStorei_6aba5d04cdcaeaf6 = function (e, t, n) {
            e.pixelStorei(t >>> 0, n);
          }),
          (e.wbg.__wbg_push_737cfc8c1432c2c6 = function (e, t) {
            return e.push(t);
          }),
          (e.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5 = function (e) {
            queueMicrotask(e);
          }),
          (e.wbg.__wbg_queueMicrotask_d3219def82552485 = function (e) {
            return e.queueMicrotask;
          }),
          (e.wbg.__wbg_readPixels_05b426266eb8041a = function () {
            return a(function (e, t, n, _, r, i, b, c, o) {
              e.readPixels(
                t,
                n,
                _,
                r,
                i >>> 0,
                b >>> 0,
                0 === c ? void 0 : g(c, o)
              );
            }, arguments);
          }),
          (e.wbg.__wbg_removeEventListener_709135c542708608 = function () {
            return a(function (e, t, n, _) {
              e.removeEventListener(c(t, n), _);
            }, arguments);
          }),
          (e.wbg.__wbg_removeEventListener_a84e3f7cc5932d93 = function () {
            return a(function (e, t, n, _, r) {
              e.removeEventListener(c(t, n), _, r);
            }, arguments);
          }),
          (e.wbg.__wbg_renderable_new = function (e) {
            return N.__wrap(e);
          }),
          (e.wbg.__wbg_resolve_4851785c9c5f573d = function (e) {
            return Promise.resolve(e);
          }),
          (e.wbg.__wbg_revokeObjectURL_27267efebeb457c7 = function () {
            return a(function (e, t) {
              URL.revokeObjectURL(c(e, t));
            }, arguments);
          }),
          (e.wbg.__wbg_setTimeout_73ce8df12de4f2f2 = function (e, t) {
            return setTimeout(e, t);
          }),
          (e.wbg.__wbg_set_10bad9bee0e9c58b = function (e, t, n) {
            e.set(t, n >>> 0);
          }),
          (e.wbg.__wbg_set_2bff331e6fe25bf4 = function (e, t, n) {
            e.set(t, n >>> 0);
          }),
          (e.wbg.__wbg_set_65595bdd868b3009 = function (e, t, n) {
            e.set(t, n >>> 0);
          }),
          (e.wbg.__wbg_set_6775f73144c2ef27 = function (e, t, n) {
            e.set(t, n >>> 0);
          }),
          (e.wbg.__wbg_set_958acb46280370e5 = function (e, t, n) {
            e.set(t, n >>> 0);
          }),
          (e.wbg.__wbg_set_98629cd6f1be3d3f = function (e, t, n) {
            e.set(t, n >>> 0);
          }),
          (e.wbg.__wbg_set_d23661d19148b229 = function (e, t, n) {
            e.set(t, n >>> 0);
          }),
          (e.wbg.__wbg_set_f4f1f0daa30696fc = function (e, t, n) {
            e.set(t, n >>> 0);
          }),
          (e.wbg.__wbg_setbody_5923b78a95eedf29 = function (e, t) {
            e.body = t;
          }),
          (e.wbg.__wbg_setcapture_46bd7043887eba02 = function (e, t) {
            e.capture = 0 !== t;
          }),
          (e.wbg.__wbg_setcapture_8cca597162578f78 = function (e, t) {
            e.capture = 0 !== t;
          }),
          (e.wbg.__wbg_setcredentials_c3a22f1cd105a2c6 = function (e, t) {
            e.credentials = E[t];
          }),
          (e.wbg.__wbg_sethandleevent_8454ae22cde5c602 = function (e, t) {
            e.handleEvent = t;
          }),
          (e.wbg.__wbg_setheaders_834c0bdb6a8949ad = function (e, t) {
            e.headers = t;
          }),
          (e.wbg.__wbg_setheight_433680330c9420c3 = function (e, t) {
            e.height = t >>> 0;
          }),
          (e.wbg.__wbg_setheight_da683a33fa99843c = function (e, t) {
            e.height = t >>> 0;
          }),
          (e.wbg.__wbg_setmethod_3c5280fe5d890842 = function (e, t, n) {
            e.method = c(t, n);
          }),
          (e.wbg.__wbg_setmode_5dc300b865044b65 = function (e, t) {
            e.mode = L[t];
          }),
          (e.wbg.__wbg_setonce_0cb80aea26303a35 = function (e, t) {
            e.once = 0 !== t;
          }),
          (e.wbg.__wbg_setonerror_e94ca1221abc457f = function (e, t) {
            e.onerror = t;
          }),
          (e.wbg.__wbg_setonload_264a0d330b7166fb = function (e, t) {
            e.onload = t;
          }),
          (e.wbg.__wbg_setsignal_75b21ef3a81de905 = function (e, t) {
            e.signal = t;
          }),
          (e.wbg.__wbg_setsrc_c239193cc7ab0470 = function (e, t, n) {
            e.src = c(t, n);
          }),
          (e.wbg.__wbg_settype_39ed370d3edd403c = function (e, t, n) {
            e.type = c(t, n);
          }),
          (e.wbg.__wbg_setwidth_660ca581e3fbe279 = function (e, t) {
            e.width = t >>> 0;
          }),
          (e.wbg.__wbg_setwidth_c5fed9f5e7f0b406 = function (e, t) {
            e.width = t >>> 0;
          }),
          (e.wbg.__wbg_shaderSource_ad0087e637a35191 = function (e, t, n, _) {
            e.shaderSource(t, c(n, _));
          }),
          (e.wbg.__wbg_signal_aaf9ad74119f20a4 = function (e) {
            return e.signal;
          }),
          (e.wbg.__wbg_stack_0ed75d68575b0f3c = function (e, t) {
            const n = d(t.stack, _.__wbindgen_malloc, _.__wbindgen_realloc),
              r = u;
            h().setInt32(e + 4, r, !0), h().setInt32(e + 0, n, !0);
          }),
          (e.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function () {
            const e = "undefined" == typeof global ? null : global;
            return f(e) ? 0 : o(e);
          }),
          (e.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 =
            function () {
              const e = "undefined" == typeof globalThis ? null : globalThis;
              return f(e) ? 0 : o(e);
            }),
          (e.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function () {
            const e = "undefined" == typeof self ? null : self;
            return f(e) ? 0 : o(e);
          }),
          (e.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function () {
            const e = "undefined" == typeof window ? null : window;
            return f(e) ? 0 : o(e);
          }),
          (e.wbg.__wbg_status_f6360336ca686bf0 = function (e) {
            return e.status;
          }),
          (e.wbg.__wbg_stringify_f7ed6987935b4a24 = function () {
            return a(function (e) {
              return JSON.stringify(e);
            }, arguments);
          }),
          (e.wbg.__wbg_subarray_fa0950d06c298557 = function (e, t, n) {
            return e.subarray(t >>> 0, n >>> 0);
          }),
          (e.wbg.__wbg_texImage2D_297bb8474cd4e8b8 = function () {
            return a(function (e, t, n, _, r, i, b, c, o, a, f) {
              e.texImage2D(
                t >>> 0,
                n,
                _,
                r,
                i,
                b,
                c >>> 0,
                o >>> 0,
                0 === a ? void 0 : g(a, f)
              );
            }, arguments);
          }),
          (e.wbg.__wbg_texImage2D_7b15c62fc9c12b16 = function () {
            return a(function (e, t, n, _, r, i, b) {
              e.texImage2D(t >>> 0, n, _, r >>> 0, i >>> 0, b);
            }, arguments);
          }),
          (e.wbg.__wbg_texImage2D_7fafc5db9861e235 = function () {
            return a(function (e, t, n, _, r, i, b) {
              e.texImage2D(t >>> 0, n, _, r >>> 0, i >>> 0, b);
            }, arguments);
          }),
          (e.wbg.__wbg_texImage2D_b2bb443de3966051 = function () {
            return a(function (e, t, n, _, r, i, b) {
              e.texImage2D(t >>> 0, n, _, r >>> 0, i >>> 0, b);
            }, arguments);
          }),
          (e.wbg.__wbg_texImage2D_b8edcb5692f65f88 = function () {
            return a(function (e, t, n, _, r, i, b, c, o, a) {
              e.texImage2D(t >>> 0, n, _, r, i, b, c >>> 0, o >>> 0, a);
            }, arguments);
          }),
          (e.wbg.__wbg_texImage2D_d40a00b9c1254ee4 = function () {
            return a(function (e, t, n, _, r, i, b) {
              e.texImage2D(t >>> 0, n, _, r >>> 0, i >>> 0, b);
            }, arguments);
          }),
          (e.wbg.__wbg_texImage2D_dd9ded937513fb00 = function () {
            return a(function (e, t, n, _, r, i, b) {
              e.texImage2D(t >>> 0, n, _, r >>> 0, i >>> 0, b);
            }, arguments);
          }),
          (e.wbg.__wbg_texParameterf_957d99ee8423bfef = function (e, t, n, _) {
            e.texParameterf(t >>> 0, n >>> 0, _);
          }),
          (e.wbg.__wbg_texParameteri_ef50743cb94d507e = function (e, t, n, _) {
            e.texParameteri(t >>> 0, n >>> 0, _);
          }),
          (e.wbg.__wbg_then_44b73946d2fb3e7d = function (e, t) {
            return e.then(t);
          }),
          (e.wbg.__wbg_then_48b406749878a531 = function (e, t, n) {
            return e.then(t, n);
          }),
          (e.wbg.__wbg_type_a43080ecd49da621 = function (e) {
            return e.type;
          }),
          (e.wbg.__wbg_uniform1f_21390b04609a9fa5 = function (e, t, n) {
            e.uniform1f(t, n);
          }),
          (e.wbg.__wbg_uniform1fv_76ac2f26482914f1 = function (e, t, n) {
            e.uniform1fv(t, n);
          }),
          (e.wbg.__wbg_uniform1i_5ddd9d8ccbd390bb = function (e, t, n) {
            e.uniform1i(t, n);
          }),
          (e.wbg.__wbg_uniform1iv_6cc568ecb1605db8 = function (e, t, n) {
            e.uniform1iv(t, n);
          }),
          (e.wbg.__wbg_uniform2f_b69b5369bc019bd5 = function (e, t, n, _) {
            e.uniform2f(t, n, _);
          }),
          (e.wbg.__wbg_uniform2fv_2fe225c92cf82bc4 = function (e, t, n) {
            e.uniform2fv(t, n);
          }),
          (e.wbg.__wbg_uniform2i_2ca0ebb03eed1cb8 = function (e, t, n, _) {
            e.uniform2i(t, n, _);
          }),
          (e.wbg.__wbg_uniform2iv_b3744f977cce1269 = function (e, t, n) {
            e.uniform2iv(t, n);
          }),
          (e.wbg.__wbg_uniform3f_99e237fdba99fca9 = function (e, t, n, _, r) {
            e.uniform3f(t, n, _, r);
          }),
          (e.wbg.__wbg_uniform3fv_4d2aede2b0bb1252 = function (e, t, n) {
            e.uniform3fv(t, n);
          }),
          (e.wbg.__wbg_uniform3i_c777d18b03191e7c = function (e, t, n, _, r) {
            e.uniform3i(t, n, _, r);
          }),
          (e.wbg.__wbg_uniform3iv_165cb850ae8fa3b9 = function (e, t, n) {
            e.uniform3iv(t, n);
          }),
          (e.wbg.__wbg_uniform4f_f7ea07febf8b5108 = function (
            e,
            t,
            n,
            _,
            r,
            i
          ) {
            e.uniform4f(t, n, _, r, i);
          }),
          (e.wbg.__wbg_uniform4fv_a978b08cd99c1698 = function (e, t, n) {
            e.uniform4fv(t, n);
          }),
          (e.wbg.__wbg_uniform4i_7485a4e0fee475f4 = function (
            e,
            t,
            n,
            _,
            r,
            i
          ) {
            e.uniform4i(t, n, _, r, i);
          }),
          (e.wbg.__wbg_uniform4iv_d38ad80dd9793345 = function (e, t, n) {
            e.uniform4iv(t, n);
          }),
          (e.wbg.__wbg_uniformMatrix2fv_b411371b2515adbf = function (
            e,
            t,
            n,
            _
          ) {
            e.uniformMatrix2fv(t, 0 !== n, _);
          }),
          (e.wbg.__wbg_uniformMatrix3fv_2be8ea2151a1d280 = function (
            e,
            t,
            n,
            _
          ) {
            e.uniformMatrix3fv(t, 0 !== n, _);
          }),
          (e.wbg.__wbg_uniformMatrix4fv_6b5babe739d4c3b0 = function (
            e,
            t,
            n,
            _
          ) {
            e.uniformMatrix4fv(t, 0 !== n, _);
          }),
          (e.wbg.__wbg_url_ae10c34ca209681d = function (e, t) {
            const n = d(t.url, _.__wbindgen_malloc, _.__wbindgen_realloc),
              r = u;
            h().setInt32(e + 4, r, !0), h().setInt32(e + 0, n, !0);
          }),
          (e.wbg.__wbg_useProgram_473bf913989b6089 = function (e, t) {
            e.useProgram(t);
          }),
          (e.wbg.__wbg_value_cd1ffa7b1ab794f1 = function (e) {
            return e.value;
          }),
          (e.wbg.__wbg_vertexAttribDivisorANGLE_11e909d332960413 = function (
            e,
            t,
            n
          ) {
            e.vertexAttribDivisorANGLE(t >>> 0, n >>> 0);
          }),
          (e.wbg.__wbg_vertexAttribPointer_7a2a506cdbe3aebc = function (
            e,
            t,
            n,
            _,
            r,
            i,
            b
          ) {
            e.vertexAttribPointer(t >>> 0, n, _ >>> 0, 0 !== r, i, b);
          }),
          (e.wbg.__wbg_viewport_a1b4d71297ba89af = function (e, t, n, _, r) {
            e.viewport(t, n, _, r);
          }),
          (e.wbg.__wbg_width_4f334fc47ef03de1 = function (e) {
            return e.width;
          }),
          (e.wbg.__wbg_width_5dde457d606ba683 = function (e) {
            return e.width;
          }),
          (e.wbg.__wbg_width_5ebf76e136ee6582 = function (e) {
            return e.width;
          }),
          (e.wbg.__wbg_width_8fe4e8f77479c2a6 = function (e) {
            return e.width;
          }),
          (e.wbg.__wbg_width_b0c1d9f437a95799 = function (e) {
            return e.width;
          }),
          (e.wbg.__wbg_width_f54c7178d3c78f16 = function (e) {
            return e.width;
          }),
          (e.wbg.__wbindgen_as_number = function (e) {
            return +e;
          }),
          (e.wbg.__wbindgen_bigint_from_i64 = function (e) {
            return e;
          }),
          (e.wbg.__wbindgen_bigint_from_u64 = function (e) {
            return BigInt.asUintN(64, e);
          }),
          (e.wbg.__wbindgen_bigint_get_as_i64 = function (e, t) {
            const n = "bigint" == typeof t ? t : void 0;
            h().setBigInt64(e + 8, f(n) ? BigInt(0) : n, !0),
              h().setInt32(e + 0, !f(n), !0);
          }),
          (e.wbg.__wbindgen_boolean_get = function (e) {
            return "boolean" == typeof e ? (e ? 1 : 0) : 2;
          }),
          (e.wbg.__wbindgen_cb_drop = function (e) {
            const t = e.original;
            if (1 == t.cnt--) return (t.a = 0), !0;
            return !1;
          }),
          (e.wbg.__wbindgen_closure_wrapper1776 = function (e, t, n) {
            return y(e, t, 179, A);
          }),
          (e.wbg.__wbindgen_closure_wrapper1778 = function (e, t, n) {
            return y(e, t, 179, I);
          }),
          (e.wbg.__wbindgen_closure_wrapper2222 = function (e, t, n) {
            return m(e, t, 317, R);
          }),
          (e.wbg.__wbindgen_closure_wrapper2926 = function (e, t, n) {
            return m(e, t, 426, F);
          }),
          (e.wbg.__wbindgen_debug_string = function (e, t) {
            const n = d(x(t), _.__wbindgen_malloc, _.__wbindgen_realloc),
              r = u;
            h().setInt32(e + 4, r, !0), h().setInt32(e + 0, n, !0);
          }),
          (e.wbg.__wbindgen_error_new = function (e, t) {
            return new Error(c(e, t));
          }),
          (e.wbg.__wbindgen_in = function (e, t) {
            return e in t;
          }),
          (e.wbg.__wbindgen_init_externref_table = function () {
            const e = _.__wbindgen_export_2,
              t = e.grow(4);
            e.set(0, void 0),
              e.set(t + 0, void 0),
              e.set(t + 1, null),
              e.set(t + 2, !0),
              e.set(t + 3, !1);
          }),
          (e.wbg.__wbindgen_is_array = function (e) {
            return Array.isArray(e);
          }),
          (e.wbg.__wbindgen_is_bigint = function (e) {
            return "bigint" == typeof e;
          }),
          (e.wbg.__wbindgen_is_falsy = function (e) {
            return !e;
          }),
          (e.wbg.__wbindgen_is_function = function (e) {
            return "function" == typeof e;
          }),
          (e.wbg.__wbindgen_is_object = function (e) {
            return "object" == typeof e && null !== e;
          }),
          (e.wbg.__wbindgen_is_string = function (e) {
            return "string" == typeof e;
          }),
          (e.wbg.__wbindgen_is_undefined = function (e) {
            return void 0 === e;
          }),
          (e.wbg.__wbindgen_jsval_eq = function (e, t) {
            return e === t;
          }),
          (e.wbg.__wbindgen_jsval_loose_eq = function (e, t) {
            return e == t;
          }),
          (e.wbg.__wbindgen_memory = function () {
            return _.memory;
          }),
          (e.wbg.__wbindgen_number_get = function (e, t) {
            const n = "number" == typeof t ? t : void 0;
            h().setFloat64(e + 8, f(n) ? 0 : n, !0),
              h().setInt32(e + 0, !f(n), !0);
          }),
          (e.wbg.__wbindgen_number_new = function (e) {
            return e;
          }),
          (e.wbg.__wbindgen_string_get = function (e, t) {
            const n = "string" == typeof t ? t : void 0;
            var r = f(n) ? 0 : d(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
              i = u;
            h().setInt32(e + 4, i, !0), h().setInt32(e + 0, r, !0);
          }),
          (e.wbg.__wbindgen_string_new = function (e, t) {
            return c(e, t);
          }),
          (e.wbg.__wbindgen_throw = function (e, t) {
            throw new Error(c(e, t));
          }),
          e
        );
      }
      async function Q(e) {
        if (void 0 !== _) return _;
        void 0 !== e &&
          (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                "using deprecated parameters for the initialization function; pass a single object instead"
              )),
          void 0 === e &&
            (e = new URL(
              "" + new URL(n(983852), n.b).href,
              "file:///mnt/engflow/worker/work/1/exec/bazel-out/k8-opt-exec-ST-d550806ed9ba/bin/web/src/pages/export_website/webpack_cli_page_/webpack_cli_page.runfiles/_main/node_modules/.aspect_rules_js/@canva+fragl-rs@0.4.1/node_modules/@canva/fragl-rs/dist/fragl.js"
            ));
        const t = K();
        ("string" == typeof e ||
          ("function" == typeof Request && e instanceof Request) ||
          ("function" == typeof URL && e instanceof URL)) &&
          (e = fetch(e));
        const { instance: r, module: b } = await (async function (e, t) {
          if ("function" == typeof Response && e instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming)
              try {
                return await WebAssembly.instantiateStreaming(e, t);
              } catch (n) {
                if ("application/wasm" == e.headers.get("Content-Type"))
                  throw n;
                console.warn(
                  "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                  n
                );
              }
            const _ = await e.arrayBuffer();
            return await WebAssembly.instantiate(_, t);
          }
          {
            const n = await WebAssembly.instantiate(e, t);
            return n instanceof WebAssembly.Instance
              ? { instance: n, module: e }
              : n;
          }
        })(await e, t);
        return (function (e, t) {
          return (
            (_ = e.exports),
            (Q.__wbindgen_wasm_module = t),
            (l = null),
            (i = null),
            _.__wbindgen_start(),
            _
          );
        })(r, b);
      }
      if ("undefined" == typeof FinalizationRegistry)
        throw new Error("`FinalizationRegistry` is not supported");
      const X = new FinalizationRegistry((e) => {
        !(function (e) {
          _.remove(e);
        })(e);
      });
      function Y(e) {
        return class extends e {
          constructor(...e) {
            super(...e);
            const t = "function" == typeof this.id ? this.id() : this.id;
            X.register(this, t);
          }
        };
      }
      Y(G);
      Y(P);
      Y(D);
      Y(S);
      Y(C);
      Y(q);
      Y(N);
      class Z extends Y(M) {}
      class ee extends k {
        renderer;
        constructor(e, t) {
          super(t), (this.renderer = e);
        }
        render(e) {
          super.render_webgl(this.renderer, e);
        }
        dispose() {
          super.dispose_webgl(this.renderer);
        }
      }
      async function te(e = {}) {
        const { memory: t } = e.path
          ? await Q({ module_or_path: e.path })
          : await Q();
        return { memory: t };
      }
      (G.prototype.resourceType = "shader"),
        (P.prototype.resourceType = "buffer"),
        (D.prototype.resourceType = "elements"),
        (C.prototype.resourceType = "texture"),
        (S.prototype.resourceType = "texture"),
        (q.prototype.resourceType = "texture");
    },
    983852: (e, t, n) => {
      e.exports = n.p + "6c69a5c7632e3ac3.wasm";
    },
  },
]);
//# sourceMappingURL=sourcemaps/1a6b59e1f25263d6.vendor.js.map
