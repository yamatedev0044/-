(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [38014],
  {
    /***/ 827224: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var K = __c.K;
        var hNc = function (a) {
            __c.u(
              a.every((e, f) => (f === 0 ? !0 : e.x > a[f - 1].x)),
              "Points must be ordered strictly monotonically increasing in x"
            );
            var b = a.length;
            const c = new Float64Array(b),
              d = new Float64Array(b);
            for (let e = 1; e < b - 1; e++) {
              const f = a[e - 1],
                g = a[e],
                h = a[e + 1],
                k = h.x - f.x,
                l = (g.x - f.x) / k,
                m = l * d[e - 1] + 2;
              c[e] =
                ((6 * ((h.y - g.y) / (h.x - g.x) - (g.y - f.y) / (g.x - f.x))) /
                  k -
                  l * c[e - 1]) /
                m;
              d[e] = (l - 1) / m;
            }
            for (b -= 2; b >= 0; --b) d[b] = d[b] * d[b + 1] + c[b];
            return new gNc(a, d);
          },
          jNc = function (a) {
            const b = hNc(a.r),
              c = hNc(a.g);
            a = hNc(a.b);
            const d = new Uint8Array(768);
            for (let e = 0; e < 256; e++)
              (d[e * 3] = Math.max(0, Math.min(255, b.IE(e)))),
                (d[e * 3 + 1] = Math.max(0, Math.min(255, c.IE(e)))),
                (d[e * 3 + 2] = Math.max(0, Math.min(255, a.IE(e))));
            return new iNc({ width: 256, height: 1, source: d });
          },
          lNc = function ({ filter: a, width: b, height: c, bL: d }) {
            const {
              r: e,
              g: f,
              b: g,
            } = a.Mz !== 0
              ? kNc({
                  h: (((a.Mz / 200 + 0.5 - 1 / 7) % 1) + 1) % 1,
                  s: 1,
                  pa: 0.5,
                })
              : { r: 0, g: 0, b: 0 };
            return {
              D: a.brightness / 200,
              E: (a.contrast / 100) * 0.6,
              F: a.saturation / 100 + 1,
              G: [e, f, g],
              s: ((a.blur >= 0 ? a.blur : 3) * Math.max(b, c)) / 2e3,
              H: Math.min(Math.max(-a.blur, 0), 100),
              J: a.CK / 100,
              I: (a.xK / 100) * 0.1,
              N: a.sK / 100,
              v: a.dH / 100,
              L: a.highlights / 100,
              M: a.Az / 100,
              K: a.MH / 100,
              O: (a.Tz / 100) * 0.7,
              d: d ? 1 : 0,
            };
          },
          kNc = function ({ h: a, s: b, pa: c }) {
            if (b === 0) return { r: a, g: a, b: a };
            b = c < 0.5 ? c * (1 + b) : c + b - c * b;
            c = 2 * c - b;
            return {
              r: mNc(c, b, a + 1 / 3),
              g: mNc(c, b, a),
              b: mNc(c, b, a - 1 / 3),
            };
          },
          mNc = function (a, b, c) {
            c < 0 && (c += 1);
            c > 1 && --c;
            return c < 1 / 6
              ? a + (b - a) * 6 * c
              : c < 0.5
              ? b
              : c < 2 / 3
              ? a + (b - a) * (2 / 3 - c) * 6
              : a;
          },
          nNc = function (a, b) {
            if (
              (a.width === 0 && a.height === 0) ||
              (b.width === 0 && b.height === 0)
            )
              return !0;
            if (a.width === b.width && a.height === b.height) return !1;
            const c = Math.trunc(a.width / a.height),
              d = Math.trunc(b.width / b.height);
            if (!((c >= 1 && d >= 1) || (c < 1 && d < 1))) return !0;
            a = a.width * a.height;
            b = b.width * b.height;
            return b <= a ? !1 : b / a > 2;
          },
          rNc = async function (a) {
            if (!a.store.CCa || !a.store.cra) {
              var [b, c] = await Promise.all([__c.lU(oNc.url), __c.lU(pNc)]);
              qNc(() => {
                a.store.CCa = b;
                a.store.cra = c;
              });
            }
          },
          tNc = function (a) {
            if (a.length)
              for (const b of a) if (b.type === "lut") return sNc(b.kT.id);
          },
          xNc = function ({ Wb: a, height: b, width: c, bL: d, TS: e }) {
            const f = {
              brightness: 0,
              saturation: 0,
              vibrance: 0,
              tint: 0,
              temperature: 0,
              blacks: 0,
              whites: 0,
              shadows: 0,
              highlights: 0,
              contrast: 0,
              lut: 0,
            };
            a.forEach((g) => {
              var h = g.Yi.get(0);
              h &&
                (uNc.includes(g.type) || g.type === "lut") &&
                ((h = h.value), (f[g.type] = g.type === "lut" ? h : h * 2 - 1));
            });
            return {
              V: f.brightness,
              X: f.saturation,
              W: f.vibrance,
              ca: f.tint,
              da: f.temperature,
              Y: f.blacks,
              Z: f.whites,
              _: f.shadows,
              aa: f.highlights,
              ba: f.contrast,
              E: 0,
              D: 0,
              ra: 0,
              t: f.lut,
              m: vNc[e ? "preview" : "original"],
              o: wNc[e ? "preview" : "original"],
              d: d ? 1 : 0,
              B: [c, b],
            };
          },
          yNc = function () {
            return (
              !!window.createImageBitmap &&
              typeof ImageBitmapRenderingContext !== "undefined"
            );
          },
          zNc = async function (a, b, c) {
            var d = c.Sd;
            const e = c.EMb,
              f = c.context;
            c = c.ofb;
            yNc() && f instanceof d.ImageBitmapRenderingContext
              ? ((d = await d.createImageBitmap(c, 0, 0, c.width, c.height, {
                  resizeWidth: a,
                  resizeHeight: b,
                })),
                (e.width = a),
                (e.height = b),
                f.transferFromImageBitmap(d))
              : f instanceof d.CanvasRenderingContext2D &&
                ((e.width = a),
                (e.height = b),
                f.clearRect(0, 0, a, b),
                f.drawImage(c, 0, 0, a, b));
          },
          CNc = async function ({ TS: a, TGb: b, Xw: c, Faa: d, bfa: e }) {
            const f = b.width,
              g = b.height;
            if (f !== 0 && g !== 0) {
              var h = d.source;
              b = d.filter;
              var k = d.Wb;
              e = { width: f, height: g, bfa: e };
              d = {
                source: h,
                bL: !!d.Co && (h.type === "video" || h.type === "canvas"),
              };
              a =
                k?.length && !b
                  ? await ANc.render({ ...e, Faa: { ...d, Wb: k, TS: a } })
                  : await BNc.render({ ...e, Faa: { ...d, filter: b } });
              c?.(a);
            }
          },
          DNc = function (a) {
            return a
              ? a.map((b) => ({ type: b.type, value: b.Yi.get(0)?.value ?? 0 }))
              : [];
          },
          e8 = function (a, b) {
            cancelAnimationFrame(a);
            return requestAnimationFrame(b);
          },
          f8 = __webpack_require__(621680),
          iNc = f8.BinaryTexture,
          ENc = f8.createWebGlRenderer,
          FNc = f8.Effect,
          g8 = f8.ImageTexture,
          GNc = f8.Renderer;
        var h8 = __webpack_require__(186901),
          HNc = h8.EW,
          qNc = h8.h5,
          INc = h8.m3,
          JNc = h8.mJ,
          KNc = h8.sH;
        var LNc = __webpack_require__(405148).jsx;
        var MNc = __webpack_require__,
          NNc = MNc(208463),
          ONc = MNc.n_x(NNc)();
        var PNc = __webpack_require__(371201).PA;
        var QNc = __webpack_require__(227200),
          RNc = QNc.useEffect,
          SNc = QNc.useRef;
        var gNc = class {
          IE(a) {
            var b = this.raa;
            const c = this.ZOa;
            let d = 0,
              e = this.raa.length - 1;
            for (; e - d > 1; ) {
              var f = (e + d) >> 1;
              b[f].x > a ? (e = f) : (d = f);
            }
            f = b[e];
            b = b[d];
            const g = f.x - b.x,
              h = (f.x - a) / g;
            a = (a - b.x) / g;
            return (
              h * b.y +
              a * f.y +
              ((c[d] * (h ** 3 - h) + c[e] * (a ** 3 - a)) * g ** 2) / 6
            );
          }
          constructor(a, b) {
            this.raa = a;
            this.ZOa = b;
          }
        };
        var TNc = [
            "precision mediump float;uniform sampler2D a;varying highp vec2 vTexCoord;uniform int d;void main(){if(d==0){gl_FragColor=texture2D(a,vTexCoord);return;}vec2 b=vec2(vTexCoord.x,vTexCoord.y/2.-1e-3);vec4 e=texture2D(a,b);vec2 c=vec2(vTexCoord.x,vTexCoord.y/2.+.499);vec4 f=texture2D(a,c);gl_FragColor=vec4(f.rgb,e.r);}",
            "precision mediump float;uniform float D,E,F;uniform vec3 G;uniform sampler2D uPrevResult;varying vec2 vTexCoord;vec4 V(vec4 a,float b){return vec4(a.rgb+b,a.a);}vec4 W(vec4 b,float a){float c=a>0.?1./(1.-a):1.+a;return vec4((b.rgb-.5)*c+.5,b.a);}vec4 X(vec4 c,float a){vec3 d=vec3(.3086,.6094,.082),b=vec3(1.-a)*d;mat3 e=mat3(vec3(b.x)+vec3(a,0,0),vec3(b.y)+vec3(0,a,0),vec3(b.z)+vec3(0,0,a));return vec4(max(vec3(0),e*c.rgb),c.a);}vec4 Y(vec4 a,vec3 b){return vec4(a.rgb-(a.rgb-b)*.1,a.a);}void main(){gl_FragColor=texture2D(uPrevResult,vTexCoord);if(D!=0.)gl_FragColor=clamp(V(gl_FragColor,D),0.,1.);if(E!=0.)gl_FragColor=clamp(W(gl_FragColor,E),0.,1.);if(F!=1.)gl_FragColor=clamp(X(gl_FragColor,F),0.,1.);if(G!=vec3(0.,0.,0.))gl_FragColor=Y(gl_FragColor,G);}",
            {
              fragment:
                "precision mediump float;uniform float s;uniform vec2 uResolution;uniform sampler2D uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(s==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(uPrevResult,vTexCoord,vec2(1.,0.),s);}",
              output: "C",
            },
            {
              fragment:
                "precision mediump float;uniform float s;uniform vec2 uResolution;uniform sampler2D C,uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(s==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(C,vTexCoord,vec2(0.,1.),s);}",
              inputs: ["C"],
              output: "x",
            },
            {
              fragment:
                "precision mediump float;uniform float s,H,I,J;uniform sampler2D x,uPrevResult,z,A;varying vec2 vTexCoord;vec4 Z(vec4 a,vec4 c,float b){return b<=0.?a:mix(c,a,1.+b/20.);}vec4 _(vec4 a,float b){a.rgb=b>0.?mix(a.rgb,vec3(texture2D(A,vec2(a.r,.5)).r,texture2D(A,vec2(a.g,.5)).g,texture2D(A,vec2(a.b,.5)).b),b):mix(a.rgb,vec3(texture2D(z,vec2(a.r,.5)).r,texture2D(z,vec2(a.g,.5)).g,texture2D(z,vec2(a.b,.5)).b),-b);return a;}vec4 aa(vec4 a,float b){return vec4(a.r+b,a.g,a.b-b,a.a);}void main(){gl_FragColor=s==0.?texture2D(uPrevResult,vTexCoord):texture2D(x,vTexCoord);if(H!=0.){vec4 a=texture2D(uPrevResult,vTexCoord);gl_FragColor=clamp(Z(a,gl_FragColor,H),0.,1.);}if(J!=0.)gl_FragColor=clamp(_(gl_FragColor,J),0.,1.);if(I!=0.)gl_FragColor=aa(gl_FragColor,I);}",
              inputs: ["x"],
            },
            {
              fragment:
                "precision mediump float;uniform float v;uniform vec2 uResolution;uniform sampler2D uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(v==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(uPrevResult,vTexCoord,vec2(1.,0.),15.);}",
              output: "C",
            },
            {
              fragment:
                "precision mediump float;uniform float v;uniform vec2 uResolution;uniform sampler2D C,uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(v==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(C,vTexCoord,vec2(0.,1.),15.);}",
              inputs: ["C"],
              output: "x",
            },
            {
              fragment:
                "precision mediump float;uniform float v,K,L,M,N,O;uniform vec2 uResolution;uniform sampler2D B,x,uPrevResult;varying vec2 vTexCoord;const mat4 y=mat4(.255,.341,.105,0.,.652,-.465,.319,0.,.093,.125,-.424,0.,0.,.5,.5,1.),P=mat4(1.,1.,1.,0.,1.944,-.748,-.08,0.,.793,0.,-2.161,0.,-1.368,.374,1.121,1.);float Q(vec3 a){vec3 b=vec3(.2125,.7154,.0721);return dot(a,b);}float R(in vec2 a){a=a*2.-1.,a.y*=1.25-.5*step(0.,a.y),a.xy*=a.xy,a.xy=clamp(a.xy,0.,1.),a*=255.,a=floor(a);return sqrt(clamp(a.x+a.y,0.,255.)/255.);}vec4 S(vec4 c,float a){vec3 d=vec3(.2125,.7154,.0721),b=vec3(1.-a)*d;mat3 e=mat3(vec3(b.x)+vec3(a,0,0),vec3(b.y)+vec3(0,a,0),vec3(b.z)+vec3(0,0,a));return vec4(clamp(e*c.rgb,0.,1.),c.a);}float T(in float a){return pow(1.-a,3.);}vec4 ba(vec4 a,float c){const mat3 d=mat3(.334,0,-.5,.333,.434,.25,.333,-.433,.251);vec3 b=d*a.rgb;b.gb+=.5;float e=R(b.gb),f=T(clamp(e,0.,1.));vec4 g=f*a,i=S(g,1.+c);return a.a*i+(1.-i.a)*a;}float w(float c,float a,float d,float b,float e){return b+(e-b)*(c-a)/(d-a);}float U(float a){float c=1.-step(.1429,a),d=step(.1429,a)-step(.2857,a),e=step(.2857,a)-step(.7143,a),f=step(.7143,a)-step(.8571,a),g=step(.8571,a),b=w(a,0.,.1429,0.,.75)*c;b+=w(a,.1429,.2857,.75,1.)*d,b+=w(a,.2857,.7143,1.,1.)*e,b+=w(a,.7143,.8571,1.,.75)*f,b+=w(a,.8571,1.,.75,0.)*g;return b;}vec4 ca(vec4 a,vec2 e,float f){float g=Q(a.rgb);vec4 b=vec4(a.rgb,a.a*U(g)),d=texture2D(x,e);b.rgb*=b.a,a.rgb*=a.a,d.a=1.;vec4 c=mix(d,b,1.+f);c=clamp(c,0.,1.),a=a.a*c+(1.-c.a)*a,a.rgb/=a.a;return a;}vec4 da(vec4 b,float c){vec4 a=y*b;float d=.8*step(0.,c)+.2,e=pow(a.r,3.),f=clamp(a.r*(1.+c*d),0.,1.);a.r=mix(a.r,f,e),b=P*a,b.r=clamp(b.r,0.,1.);return b;}vec4 ea(vec4 b,float c){vec4 a=y*b;float d=pow(1.-a.r,3.),e=clamp(a.r*(1.+c),0.,1.);a.r=mix(a.r,e,d),b=P*a,b.r=clamp(b.r,0.,1.);return b;}vec4 fa(vec4 a,float b){return vec4(mix(a.rgb,vec3(texture2D(B,vec2(a.r,.5)).r,texture2D(B,vec2(a.g,.5)).g,texture2D(B,vec2(a.b,.5)).b),b),a.a);}vec4 ga(vec4 b,vec2 d,vec2 a,float f){b.rgb*=b.a;float c=min(a.x,a.y);vec2 e=(d*2.-1.)/vec2(a.y/c,a.x/c);float g=clamp((length(e)-.7)/.6,0.,1.);b=mix(b,vec4(0.,0.,0.,1.),g*f),b.rgb/=b.a;return b;}void main(){gl_FragColor=texture2D(uPrevResult,vTexCoord);if(v!=0.)gl_FragColor=clamp(ca(gl_FragColor,vTexCoord,v),0.,1.);if(N!=0.)gl_FragColor=clamp(ba(gl_FragColor,N),0.,1.);if(L!=0.)gl_FragColor=clamp(da(gl_FragColor,L),0.,1.);if(M!=0.)gl_FragColor=clamp(ea(gl_FragColor,M),0.,1.);if(O!=0.)gl_FragColor=clamp(ga(gl_FragColor,vTexCoord,uResolution,O),0.,1.);if(K!=0.)gl_FragColor=fa(gl_FragColor,K);}",
              inputs: ["x"],
            },
          ],
          XNc = class {
            initialize(a) {
              a = new g8({ source: a.element });
              var b = {
                a,
                A: jNc(UNc),
                z: jNc(VNc),
                B: jNc({ r: WNc, g: WNc, b: WNc }),
              };
              b = new FNc({
                passes: TNc,
                textures: b,
                uniforms: lNc({ filter: __c.BT, width: 0, height: 0, bL: !1 }),
              });
              const c = document.createElement("div"),
                d = new GNc(() => ENc(c, { env: { devicePixelRatio: 1 } }));
              d.onContextLost = () => {
                d.restore();
              };
              d.load([a]);
              d.load(b);
              this.Bw.width &&
                this.Bw.height &&
                d.resize(this.Bw.width, this.Bw.height);
              this.renderer = d;
              this.effect = b;
              this.LJ = a;
              this.DS = !0;
              this.ce = setTimeout(() => this.dispose(), 16e3);
            }
            MIa({ image: a, Zo: b, width: c, height: d }) {
              this.MJ.width = c;
              this.MJ.height = d;
              const e = b.top,
                f = b.left,
                g = b.width;
              b = b.height;
              this.uLa?.drawImage(a, f, e, g, b, 0, 0, c, d);
            }
            async render({ width: a, height: b, Faa: c, bfa: d }) {
              var e = c.source;
              const f = c.filter;
              c = c.bL;
              this.DS || this.initialize(e);
              if (!this.renderer || !this.effect || !this.LJ)
                throw Error("Renderer is not initialized");
              this.ce && clearTimeout(this.ce);
              this.ce = setTimeout(() => this.dispose(), 16e3);
              nNc(this.Bw, { width: a, height: b }) &&
                (this.renderer.resize(a, b),
                (this.Bw = { width: a, height: b }));
              this.iEa !== e &&
                (e.type === "sprite"
                  ? (this.MIa({
                      image: e.element,
                      Zo: e.Zo,
                      width: a,
                      height: b,
                    }),
                    (this.LJ.source = this.MJ))
                  : (this.LJ.source = e.element),
                (this.iEa = e));
              this.renderer.update([this.LJ]);
              this.effect.update({
                textures: { a: this.LJ },
                uniforms: lNc({
                  filter: f ?? __c.BT,
                  width: a,
                  height: b,
                  bL: c,
                }),
              });
              this.renderer.render(this.effect);
              e = this.renderer.canvas;
              await zNc(a, b, { ...d, ofb: e });
              return e;
            }
            dispose() {
              this.ce && clearTimeout(this.ce);
              this.renderer?.dispose();
              this.ce = this.effect = this.renderer = void 0;
              this.DS = !1;
            }
            constructor() {
              this.DS = !1;
              this.MJ = document.createElement("canvas");
              this.uLa = this.MJ.getContext("2d");
              this.Bw = { width: 0, height: 0 };
            }
          },
          WNc = [
            { x: 0, y: 69 },
            { x: 79, y: 96 },
            { x: 127, y: 127 },
            { x: 255, y: 225 },
          ],
          UNc = {
            r: [
              { x: 0, y: 0 },
              { x: 77, y: 26 },
              { x: 179, y: 204 },
              { x: 255, y: 255 },
            ],
            g: [
              { x: 0, y: 0 },
              { x: 64, y: 38 },
              { x: 191, y: 217 },
              { x: 255, y: 255 },
            ],
            b: [
              { x: 0, y: 0 },
              { x: 85, y: 102 },
              { x: 170, y: 153 },
              { x: 255, y: 204 },
            ],
          },
          VNc = {
            r: [
              { x: 0, y: 0 },
              { x: 77, y: 26 },
              { x: 179, y: 51 },
              { x: 242, y: 255 },
            ],
            g: [
              { x: 0, y: 0 },
              { x: 64, y: 102 },
              { x: 153, y: 153 },
              { x: 255, y: 255 },
            ],
            b: [
              { x: 0, y: 0 },
              { x: 77, y: 79 },
              { x: 153, y: 153 },
              { x: 255, y: 255 },
            ],
          };
        var vNc = { preview: 16, original: 64 },
          wNc = { preview: [1, 16], original: [8, 8] };
        var YNc =
          __webpack_require__.p + "images/e694828c7d3a97c0dee391820fc30545.png";
        var ZNc =
          __webpack_require__.p + "images/07878611c78aaa9c0e2eda483fe08332.png";
        var oNc = {
          id: "Identity.png",
          label: K("fLe00A"),
          kind: "customizable",
          Ec: "nature",
          Oc: ZNc,
          url: YNc,
        };
        var $Nc =
          __webpack_require__.p + "images/d9358a9e6dde836ced3b0922e479007e.png";
        var aOc =
          __webpack_require__.p + "images/da90523e2246079accbae25d3ffa0710.png";
        var bOc =
          __webpack_require__.p + "images/149b5e9fca7030eecac822a32a48b7b5.png";
        var cOc =
          __webpack_require__.p + "images/9546c040656f15b809f2d443ae8508af.png";
        var dOc =
          __webpack_require__.p + "images/da4b76c4a7e0de1e09159c19c0481cab.png";
        var eOc =
          __webpack_require__.p + "images/13132f0ad8c75823c5667b07fbee6aae.png";
        var fOc =
          __webpack_require__.p + "images/07d2a32c3572173ee22f52429ce98d7f.png";
        var gOc =
          __webpack_require__.p + "images/1991ce17aee2d7e7294f730ab4d66115.png";
        var hOc =
          __webpack_require__.p + "images/5c55e0abf24e77b3ba835e5c95286ab2.png";
        var iOc =
          __webpack_require__.p + "images/59efc279840511b0830c97157e0c6500.png";
        var jOc =
          __webpack_require__.p + "images/a5b0cbd58a540c1197cb7ef446636cb4.png";
        var kOc =
          __webpack_require__.p + "images/dd857b0989249f984aac1780e8855625.png";
        var lOc =
          __webpack_require__.p + "images/3dfdd87cc7077ae42ee5cd3b26177e81.png";
        var mOc =
          __webpack_require__.p + "images/f10f97041192805c1a343672f4d4338b.png";
        var nOc =
          __webpack_require__.p + "images/4b7b8649538c239046836bd73c59a94b.png";
        var oOc =
          __webpack_require__.p + "images/efbf7cdd0e2507f1f7b11c5813cf60b7.png";
        var pOc =
          __webpack_require__.p + "images/ea8a6982837c870f83b7b895be689964.png";
        var qOc =
          __webpack_require__.p + "images/d2148c0d28cc82c62d4edf1b667c456d.png";
        var rOc =
          __webpack_require__.p + "images/b44766e2ca38d7756a3b2ff1b60567bc.png";
        var sOc =
          __webpack_require__.p + "images/2030b1590cdc40eaf4c6f4a18f45663c.png";
        var tOc =
          __webpack_require__.p + "images/f6113e37b9c9e7a8940e057675428b49.png";
        var uOc =
          __webpack_require__.p + "images/1b2bc3cb29aa4484d35e7e62e6a33962.png";
        var vOc =
          __webpack_require__.p + "images/4465609fa80f43a97621522b6e535472.png";
        var wOc =
          __webpack_require__.p + "images/754e070ddb12019e7f15edaa9e3f9071.png";
        var xOc =
          __webpack_require__.p + "images/cb3a94549ced7d3fa4e80e90e95156ca.png";
        var yOc =
          __webpack_require__.p + "images/6d9b801ba36b9f31a5d45387ed16c353.png";
        var zOc =
          __webpack_require__.p + "images/210b25e6e300f0938fd3a2e86b9f97b6.png";
        var AOc =
          __webpack_require__.p + "images/7ab23b0ce88d93302738391e27e40dc6.png";
        var BOc =
          __webpack_require__.p + "images/078dd8dbeb1817da9af998f01b8c2139.png";
        var COc =
          __webpack_require__.p + "images/e5e4829283ec91873b5054669558366c.png";
        var DOc =
          __webpack_require__.p + "images/af53d6cd310b6897f41d23d1f1a7720f.png";
        var EOc =
          __webpack_require__.p + "images/9e6b8ec788580b410dd14d4067ca194f.png";
        var FOc =
          __webpack_require__.p + "images/414ab0a0f0233baa9e6b60f34d622827.png";
        var GOc =
          __webpack_require__.p + "images/076227a2465da7ca54cb2ec6a3bfdc9f.png";
        var HOc =
          __webpack_require__.p + "images/1666a747d5de66894adb8fe79a6db6bd.png";
        var IOc =
          __webpack_require__.p + "images/4178ab2ee83d41d38c4b073c407506fc.png";
        var JOc =
          __webpack_require__.p + "images/1ca85563dfd639f9ba308539ef5bf5e4.png";
        var KOc =
          __webpack_require__.p + "images/a9580853f3faffc605bc67a9c9fbae6f.png";
        var LOc =
          __webpack_require__.p + "images/4101b6ef4260d077d23ebcda9be39670.png";
        var MOc =
          __webpack_require__.p + "images/900d35ab6699a610ffe54dacf8857a73.png";
        var NOc =
          __webpack_require__.p + "images/b07d8b23f48115cdf65a62208a182b67.png";
        var OOc =
          __webpack_require__.p + "images/2572a5728c85065afd77303d7f0621a9.png";
        var POc =
          __webpack_require__.p + "images/1ba96d2bc62a7b7c17710d8c0f05d8d1.png";
        var QOc =
          __webpack_require__.p + "images/9a8bcd5cbe986c7acdae01b3d501c473.png";
        var ROc =
          __webpack_require__.p + "images/e77194160d4e990f934fd090dfaa63f8.png";
        var SOc =
          __webpack_require__.p + "images/b01c2b889e09e7e38181d2bcc4a64c92.png";
        var TOc =
          __webpack_require__.p + "images/11d6435305e032af3b54e69b52cc6a01.png";
        var UOc =
          __webpack_require__.p + "images/ceef521be0c3c253e41feb566fffe89b.png";
        var VOc =
          __webpack_require__.p + "images/6c27e2bd85ef911432c28953295a8434.png";
        var WOc =
          __webpack_require__.p + "images/8960ab97f7fae540daed9e4a5f764d77.png";
        var XOc =
          __webpack_require__.p + "images/80f4d13411753c6f5114b5a344e112d4.png";
        var YOc =
          __webpack_require__.p + "images/c126186de607ab11467a0ae2a9d0d105.png";
        var ZOc =
          __webpack_require__.p + "images/8a48dcaf27cd64cbe456dcc69440209c.png";
        var $Oc =
          __webpack_require__.p + "images/50ca98d78af1c06005a77d481e255690.png";
        var aPc =
          __webpack_require__.p + "images/abe5000aa4b60bbe62b3fb4fee2fcee3.png";
        var bPc =
          __webpack_require__.p + "images/545a538523c57c272a470374539ce38c.png";
        var cPc =
          __webpack_require__.p + "images/989fd53124028c2417bcd4194a211375.png";
        var dPc =
          __webpack_require__.p + "images/62f4bb2f70ee8c045027dd06d398ba52.png";
        var ePc =
          __webpack_require__.p + "images/d78ca451636460b12918994de70a7f66.png";
        var fPc =
          __webpack_require__.p + "images/1cdf3dc944eb3a6d2e0c7acfff9f5bce.png";
        var gPc =
          __webpack_require__.p + "images/51be7ac6bea359529a8d0028a04ab1f3.png";
        var hPc =
          __webpack_require__.p + "images/6ef6d7a39a1b29fe250a7dedb5f630ec.png";
        var iPc =
          __webpack_require__.p + "images/b7556845ac7534c727252494294e83e8.png";
        var jPc =
          __webpack_require__.p + "images/245b4738ac610108221595592b9da03a.png";
        var kPc =
          __webpack_require__.p + "images/512215da844293c53da8c8d2fec46e63.png";
        var lPc =
          __webpack_require__.p + "images/152c343b600cd0eea7b454bef0aaa5c0.png";
        var mPc =
          __webpack_require__.p + "images/59fbf238cba695b04b5452b9e5fe31da.png";
        var nPc =
          __webpack_require__.p + "images/5b3206c52b32e989b31719f4ab457553.png";
        var oPc =
          __webpack_require__.p + "images/9d16aa93501d35eac5ca6178f99abc86.png";
        var pPc =
          __webpack_require__.p + "images/43d25e0ae34f51baace7f750e42ef95d.png";
        var qPc =
          __webpack_require__.p + "images/efc85a5cac4852a51a75ba4dbed1d6a0.png";
        var rPc =
          __webpack_require__.p + "images/27b9060ee36c85a8c9b3a963e4de4b2f.png";
        var sPc =
          __webpack_require__.p + "images/f841787161d32dd967cdc5f5de2049e9.png";
        var tPc =
          __webpack_require__.p + "images/58a18616b2555416c4377a48848467c7.png";
        var uPc =
          __webpack_require__.p + "images/a56c0ee3b8a2ff064f3abfcbc4c75ba7.png";
        var vPc =
          __webpack_require__.p + "images/f05eaca7fc51283c8fd01c80ee4e5fa4.png";
        var wPc =
          __webpack_require__.p + "images/a626c549013c96e354e6a658ebfb7ce3.png";
        var xPc =
          __webpack_require__.p + "images/ce21ae1750832f407264faf69880a539.png";
        var yPc =
          __webpack_require__.p + "images/c7593c863309e2b56e7196c9f9b67ce3.png";
        var zPc =
          __webpack_require__.p + "images/7ddbccf54d461ad84107f4e3b7ca6427.png";
        var APc =
          __webpack_require__.p + "images/7e792d8c53e3a3dff6363865d7ab1a33.png";
        var BPc =
          __webpack_require__.p + "images/cf0c16e5aaf7a0b5938e5a942ac5ae5f.png";
        var CPc =
          __webpack_require__.p + "images/853704c1a25e6bba68ceb5045abe0f10.png";
        var DPc =
          __webpack_require__.p + "images/732ff254a367f61bfd40b977f3adf2a4.png";
        var EPc =
          __webpack_require__.p + "images/651fe2e84b34ac0f9f9beb4b61c96351.png";
        var FPc =
          __webpack_require__.p + "images/b124943edf93ad14fd395d37e1534046.png";
        var GPc =
          __webpack_require__.p + "images/09c249cd5bbb7f14ee99474adae984b1.png";
        var HPc =
          __webpack_require__.p + "images/f3f66f3682a78f41e001f53efa276a03.png";
        var IPc =
          __webpack_require__.p + "images/b4146929cef4dd1293a25653090dc0bb.png";
        var JPc =
          __webpack_require__.p + "images/25da2ebb3be5f7e46eab66f07b6c4153.png";
        var KPc =
          __webpack_require__.p + "images/2b136f904760ca4a73eb2d33a7c76f59.png";
        var LPc =
          __webpack_require__.p + "images/07fd201b61c5f2ad1acfc0a2949a376d.png";
        var MPc =
          __webpack_require__.p + "images/abd6c9281a0f9460a54c7802fc79b991.png";
        var NPc =
          __webpack_require__.p + "images/d5971b885d5817ed837c4d5579c4a2d9.png";
        var OPc =
          __webpack_require__.p + "images/c938bae1469a4c853f9b75125ec30bbf.png";
        var PPc =
          __webpack_require__.p + "images/5ad4cc7995eb8f5583172381614022b2.png";
        var QPc =
          __webpack_require__.p + "images/06d7bab44eec7297cbae1abae2bdff06.png";
        var RPc =
          __webpack_require__.p + "images/cef897966fc9b03e862e38086d6f823b.png";
        var SPc =
          __webpack_require__.p + "images/4a9dd22aa119fe9f7f64e1a5cd6c57a3.png";
        var TPc =
          __webpack_require__.p + "images/d4efb11fd86636ba400555e936856494.png";
        var UPc = [
          {
            id: "Beachy_7.png",
            label: K("HDFThQ"),
            kind: "customizable",
            Ec: "nature",
            Oc: cPc,
            url: fOc,
          },
          {
            id: "Natural_2.png",
            label: K("YAPf/w"),
            kind: "customizable",
            Ec: "nature",
            Oc: vPc,
            url: yOc,
          },
          {
            id: "Natural_3.png",
            label: K("c6WUDA"),
            kind: "customizable",
            Ec: "nature",
            Oc: wPc,
            url: zOc,
          },
          {
            id: "Natural_6.png",
            label: K("MpdCSQ"),
            kind: "customizable",
            Ec: "nature",
            Oc: yPc,
            url: BOc,
          },
          {
            id: "Pastel_4.png",
            label: K("6fEl8w"),
            kind: "customizable",
            Ec: "nature",
            Oc: GPc,
            url: JOc,
          },
          {
            id: "Natural_4.png",
            label: K("lBQzew"),
            kind: "customizable",
            Ec: "nature",
            Oc: xPc,
            url: AOc,
          },
          {
            id: "Nordic_6.png",
            label: K("kfbqGw"),
            kind: "customizable",
            Ec: "warm",
            Oc: DPc,
            url: GOc,
          },
          {
            id: "Vivid_2.png",
            label: K("P+NxQg"),
            kind: "customizable",
            Ec: "warm",
            Oc: PPc,
            url: SOc,
          },
          {
            id: "Vintage_6.png",
            label: K("kFc7YQ"),
            kind: "customizable",
            Ec: "warm",
            Oc: NPc,
            url: QOc,
          },
          {
            id: "Natural_8.png",
            label: K("o30VFg"),
            kind: "customizable",
            Ec: "warm",
            Oc: zPc,
            url: COc,
          },
          {
            id: "Intensify_3.png",
            label: K("Pv95HQ"),
            kind: "customizable",
            Ec: "warm",
            Oc: tPc,
            url: wOc,
          },
          {
            id: "Cinematic_4.png",
            label: K("U25i1A"),
            kind: "customizable",
            Ec: "warm",
            Oc: lPc,
            url: oOc,
          },
          {
            id: "Cinematic_8.png",
            label: K("TFR/QA"),
            kind: "customizable",
            Ec: "cool",
            Oc: nPc,
            url: qOc,
          },
          {
            id: "Pastel_6.png",
            label: K("r3j+DA"),
            kind: "customizable",
            Ec: "cool",
            Oc: IPc,
            url: LOc,
          },
          {
            id: "Nordic_2.png",
            label: K("b1vgNg"),
            kind: "customizable",
            Ec: "cool",
            Oc: APc,
            url: DOc,
          },
          {
            id: "Beachy_3.png",
            label: K("0apdAw"),
            kind: "customizable",
            Ec: "cool",
            Oc: bPc,
            url: eOc,
          },
          {
            id: "Beachy_2.png",
            label: K("zBQSeQ"),
            kind: "customizable",
            Ec: "cool",
            Oc: aPc,
            url: dOc,
          },
          {
            id: "Nordic_7.png",
            label: K("985BiQ"),
            kind: "customizable",
            Ec: "cool",
            Oc: EPc,
            url: HOc,
          },
          {
            id: "Intensify_7.png",
            label: K("XexS2w"),
            kind: "customizable",
            Ec: "vivid",
            Oc: uPc,
            url: xOc,
          },
          {
            id: "Vivid_4.png",
            label: K("Yc4EHg"),
            kind: "customizable",
            Ec: "vivid",
            Oc: RPc,
            url: UOc,
          },
          {
            id: "Vintage_3.png",
            label: K("Ul3/3g"),
            kind: "customizable",
            Ec: "vivid",
            Oc: LPc,
            url: OOc,
          },
          {
            id: "Cinematic_7.png",
            label: K("NhUn/w"),
            kind: "customizable",
            Ec: "vivid",
            Oc: mPc,
            url: pOc,
          },
          {
            id: "Intensify_2.png",
            label: K("uJAWlA"),
            kind: "customizable",
            Ec: "vivid",
            Oc: sPc,
            url: vOc,
          },
          {
            id: "Vivid_3.png",
            label: K("A9XZbA"),
            kind: "customizable",
            Ec: "vivid",
            Oc: QPc,
            url: TOc,
          },
          {
            id: "Nordic_5.png",
            label: K("kvyA3w"),
            kind: "customizable",
            Ec: "soft",
            Oc: CPc,
            url: FOc,
          },
          {
            id: "Pastel_7.png",
            label: K("aiwaSg"),
            kind: "customizable",
            Ec: "soft",
            Oc: JPc,
            url: MOc,
          },
          {
            id: "Faded_8.png",
            label: K("obD0Ug"),
            kind: "customizable",
            Ec: "soft",
            Oc: rPc,
            url: uOc,
          },
          {
            id: "Pastel_5.png",
            label: K("CVlIoA"),
            kind: "customizable",
            Ec: "soft",
            Oc: HPc,
            url: KOc,
          },
          {
            id: "Soft_6.png",
            label: K("F9BgQg"),
            kind: "customizable",
            Ec: "soft",
            Oc: KPc,
            url: NOc,
          },
          {
            id: "Clean_8.png",
            label: K("AYm7pQ"),
            kind: "customizable",
            Ec: "soft",
            Oc: oPc,
            url: rOc,
          },
          {
            id: "Vintage_8.png",
            label: K("/nucvw"),
            kind: "customizable",
            Ec: "vintage",
            Oc: OPc,
            url: ROc,
          },
          {
            id: "Nordic_4.png",
            label: K("1YyMlw"),
            kind: "customizable",
            Ec: "vintage",
            Oc: BPc,
            url: EOc,
          },
          {
            id: "Vintage_4.png",
            label: K("cv++cA"),
            kind: "customizable",
            Ec: "vintage",
            Oc: MPc,
            url: POc,
          },
          {
            id: "Bright_1.png",
            label: K("K+2BEQ"),
            kind: "customizable",
            Ec: "vintage",
            Oc: gPc,
            url: jOc,
          },
          {
            id: "Bright_6.png",
            label: K("K5piuQ"),
            kind: "customizable",
            Ec: "vintage",
            Oc: hPc,
            url: kOc,
          },
          {
            id: "Pastel_2.png",
            label: K("TcYqAw"),
            kind: "customizable",
            Ec: "vintage",
            Oc: FPc,
            url: IOc,
          },
          {
            id: "Black_and_white_8.png",
            label: K("vOtf6w"),
            kind: "customizable",
            Ec: "mono",
            Oc: fPc,
            url: iOc,
          },
          {
            id: "Black_and_white_4.png",
            label: K("8qC8JQ"),
            kind: "customizable",
            Ec: "mono",
            Oc: dPc,
            url: gOc,
          },
          {
            id: "BW_3.png",
            label: K("0o863w"),
            kind: "customizable",
            Ec: "mono",
            Oc: jPc,
            url: mOc,
          },
          {
            id: "Black_and_white_5.png",
            label: K("iNecng"),
            kind: "customizable",
            Ec: "mono",
            Oc: ePc,
            url: hOc,
          },
          {
            id: "BW_6.png",
            label: K("/pTlCw"),
            kind: "customizable",
            Ec: "mono",
            Oc: kPc,
            url: nOc,
          },
          {
            id: "BW_2.png",
            label: K("WxK/vg"),
            kind: "customizable",
            Ec: "mono",
            Oc: iPc,
            url: lOc,
          },
          {
            id: "Colorful_4.png",
            label: K("w1ImvA"),
            kind: "customizable",
            Ec: "colorpop",
            Oc: pPc,
            url: sOc,
          },
          {
            id: "Colorful_7.png",
            label: K("dAzTAg"),
            kind: "customizable",
            Ec: "colorpop",
            Oc: qPc,
            url: tOc,
          },
          {
            id: "Artsy_5.png",
            label: K("2nL4TQ"),
            kind: "customizable",
            Ec: "colorpop",
            Oc: YOc,
            url: aOc,
          },
          {
            id: "Artsy_7.png",
            label: K("GqgURQ"),
            kind: "customizable",
            Ec: "colorpop",
            Oc: ZOc,
            url: bOc,
          },
          {
            id: "Artsy_1.png",
            label: K("JCswog"),
            kind: "customizable",
            Ec: "colorpop",
            Oc: XOc,
            url: $Nc,
          },
          {
            id: "Artsy_8.png",
            label: K("A1VPvQ"),
            kind: "customizable",
            Ec: "colorpop",
            Oc: $Oc,
            url: cOc,
          },
          {
            id: "xpro_negative.png",
            label: K("blxDyQ"),
            kind: "customizable",
            Ec: "colorpop",
            Oc: SPc,
            url: VOc,
          },
          {
            id: "xpro_positive.png",
            label: K("zl3u7Q"),
            kind: "customizable",
            Ec: "colorpop",
            Oc: TPc,
            url: WOc,
          },
        ];
        var pNc =
          __webpack_require__.p + "images/60e13142604d9410c31e118ca9ecba71.png";
        var uNc =
          "temperature tint blacks brightness contrast highlights saturation shadows whites vibrance".split(
            " "
          );
        var VPc = [
            "precision mediump float;uniform sampler2D a;varying highp vec2 vTexCoord;uniform int d;void main(){if(d==0){gl_FragColor=texture2D(a,vTexCoord);return;}vec2 b=vec2(vTexCoord.x,vTexCoord.y/2.-1e-3);vec4 e=texture2D(a,b);vec2 c=vec2(vTexCoord.x,vTexCoord.y/2.+.499);vec4 f=texture2D(a,c);gl_FragColor=vec4(f.rgb,e.r);}",
            "precision mediump float;uniform sampler2D uPrevResult,h;uniform float t,m;uniform vec2 o;varying mediump vec2 vTexCoord;const vec3 A=vec3(.4545),n=vec3(2.2);vec2 i(vec3 d,vec3 e,vec2 f,vec2 g,vec2 a,float j){vec3 b=d+e;vec2 k=mix(f,g,b.rg*j)*a;float c=b.b*a.x;vec2 l=vec2(fract(c),floor(c)*a.y);return k+l;}void main(){vec4 l=texture2D(uPrevResult,vTexCoord);vec2 b=vec2(.5/m),c=vec2((m-.5)/m),d=vec2(1./o.y,1./o.x);float p=m-1.,e=1./p;if(t==0.){gl_FragColor=l;return;}vec3 q=l.rgb*p,f=floor(q),g=fract(q);vec4 r=texture2D(h,i(f,vec3(0.,0.,0.),b,c,d,e)),j=vec4(0.),k=vec4(0.),s=texture2D(h,i(f,vec3(1.,1.,1.),b,c,d,e));vec3 a=vec3(0.);if(g.r>g.g)if(g.g>g.b)j=texture2D(h,i(f,vec3(1.,0.,0.),b,c,d,e)),k=texture2D(h,i(f,vec3(1.,1.,0.),b,c,d,e)),a=g.rgb;else if(g.b>g.r)j=texture2D(h,i(f,vec3(0.,0.,1.),b,c,d,e)),k=texture2D(h,i(f,vec3(1.,0.,1.),b,c,d,e)),a=g.brg;else j=texture2D(h,i(f,vec3(1.,0.,0.),b,c,d,e)),k=texture2D(h,i(f,vec3(1.,0.,1.),b,c,d,e)),a=g.rbg;else if(g.r>g.b)j=texture2D(h,i(f,vec3(0.,1.,0.),b,c,d,e)),k=texture2D(h,i(f,vec3(1.,1.,0.),b,c,d,e)),a=g.grb;else if(g.b>g.g)j=texture2D(h,i(f,vec3(0.,0.,1.),b,c,d,e)),k=texture2D(h,i(f,vec3(0.,1.,1.),b,c,d,e)),a=g.bgr;else j=texture2D(h,i(f,vec3(0.,1.,0.),b,c,d,e)),k=texture2D(h,i(f,vec3(0.,1.,1.),b,c,d,e)),a=g.gbr;float v=1.-a.r,w=a.r-a.g,x=a.g-a.b,y=a.b;l.rgb=pow(l.rgb,n),r.rgb=pow(r.rgb,n),j.rgb=pow(j.rgb,n),k.rgb=pow(k.rgb,n),s.rgb=pow(s.rgb,n);vec3 z=v*r.rgb+w*j.rgb+x*k.rgb+y*s.rgb,u=mix(l.rgb,z,t);u=pow(u,A),gl_FragColor=vec4(u,l.a);}",
            "#version 100\nprecision mediump float;varying vec2 vTexCoord;uniform float V,W,X,Y,Z,_,aa,ba,ca,da;uniform sampler2D uPrevResult,ta;vec4 F=vec4(.55,.24,1.,1.);float t(vec4 a){return dot(a.rgb,vec3(.2126,.7152,.0722));}const mat3 ea=mat3(.412456,.357576,.180438,.212673,.715152,.072175,.019334,.119192,.950304),fa=mat3(3.240454,-1.537138,-.498531,-.969266,1.876011,.041556,.055643,-.204026,1.057225),ua=mat3(.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296),va=mat3(.986993,-.147054,.159963,.432305,.51836,.049291,-.008529,.040043,.968487),wa=mat3(2.326495,-.79599,-.381285,-.969244,1.875968,.041555,.055631,-.203978,1.056972);vec3 v(vec3 a){return pow(a,vec3(.454545));}vec3 l(vec3 a){return pow(a,vec3(2.2));}vec3 C(vec3 a){return a*fa;}vec3 xa(vec3 a){return a*ea;}vec3 p(vec3 a){float e=.412221*a.r+.536333*a.g+.051446*a.b,f=.211903*a.r+.6807*a.g+.107397*a.b,g=.088302*a.r+.281719*a.g+.629979*a.b,b=pow(e,.333333),c=pow(f,.333333),d=pow(g,.333333);return vec3(.210454*b+.793618*c-.004072*d,1.977998*b-2.428592*c+.450594*d,.025904*b+.782772*c-.808676*d);}vec3 A(vec3 a){float b=a.r+.396338*a.g+.215804*a.b,c=a.r-.105561*a.g-.063854*a.b,d=a.r-.089484*a.g-1.291486*a.b,e=b*b*b,f=c*c*c,g=d*d*d;return vec3(4.076742*e-3.307712*f+.23097*g,-1.268438*e+2.609757*f-.341319*g,-.004196*e-.703419*f+1.707615*g);}vec3 ga(vec3 a){vec3 b=A(a);return xa(b);}vec3 K(vec3 a){return a*ea*ua;}vec3 ha(vec3 a){return a*va*fa;}vec3 O(vec3 a){return a*wa;}vec3 ya(vec3 b){if(all(greaterThanEqual(b,vec3(0.))))return b;vec3 c=p(b),h=c,a;float d=0.,e=1.;for(int i=0;i<8;i++){float f=(d+e)*.5;h.yz=c.yz*f,a=ga(h);vec3 j=O(a),k=C(a);if(all(greaterThanEqual(j,vec3(0.))))d=f;else e=f;}vec3 g=C(a);g=max(g,vec3(0.));return g;}vec3 ia(vec3 b){if(all(greaterThanEqual(b,vec3(0.)))&&all(lessThanEqual(b,vec3(1.))))return b;vec3 c=p(b),h=c,a;float d=0.,e=1.;for(int i=0;i<8;i++){float f=(d+e)*.5;h.yz=c.yz*f,a=ga(h);vec3 j=O(a),k=C(a);if(all(greaterThanEqual(j,vec3(0.)))&&all(lessThanEqual(k,vec3(1.))))d=f;else e=f;}vec3 g=C(a);g=clamp(g,vec3(0.),vec3(1.));return g;}vec4 ja(vec4 a){float b=max(max(a.r,a.g),a.b);if(b>1.000001)a.rgb/=b;return a;}vec4 za(vec4 a){if(all(lessThanEqual(a.rgb,vec3(1.)))&&all(greaterThanEqual(a.rgb,vec3(0.))))return a;a=any(lessThan(a.rgb,vec3(0.)))?vec4(ya(a.rgb),a.a):a;vec4 f=vec4(ia(a.rgb),a.a),g=ja(a);vec3 b=p(a.rgb),c=p(f.rgb),d=p(g.rgb);float h=abs(b.r-d.r)*4.;vec2 i=vec2(b.g-c.g,b.b-c.b);float e=length(i)*1.,j=h+e,k=e/j,m=clamp(k,0.,1.);vec3 n=mix(c,d,m);return vec4(A(n),a.a);}float u(float c,float a,float d,float b,float e){return (c-a)*(e-b)/(d-a)+b;}vec4 Aa(vec4 a,float b){vec3 c=a.rgb;float d=pow(2.,b);c*=d;return vec4(c,a.a);}vec4 ka(vec4 b,float c){float a=t(b);if(a<1e-6)return b;a=clamp(a,0.,1.);float d=pow(2.,c),e=1.-pow(1.-a,d),f=e/a;b.rgb*=f;return b;}vec4 Ba(vec4 a,float b){b*=2.5;if(b<0.){float c=max(b,-1.333);a=ka(a,c),a=b<-1.333?Aa(a,b+1.333):a;}else a=ka(a,b);return a;}vec3 P(vec3 a,float b){a.g*=b,a.b*=b;return a;}vec4 la(vec4 a,float b){vec3 c=p(a.rgb);float d=u(b,-1.,1.,0.,2.);vec3 e=P(c,d);return vec4(A(e),a.a);}vec4 Ca(vec4 c,float d){d=u(d,-1.,1.,0.,2.);vec3 a=p(c.rgb);float b=a.x<1e-6?0.:distance(vec2(0.),vec2(a.y,a.z)/a.x)*3.;b=pow(b,.75),b=clamp(b,0.,1.);if(b==0.)return c;float e=1.-b;vec3 f=P(a,d),g=mix(a,f,e);return vec4(A(g),c.a);}float ma(float a,float b){a=clamp(a,0.,1.);return pow(a,b);}float na(float a,float b){float c=pow(2.,b*2.);return a<.5?ma(a*2.,c)/2.:1.-ma(2.-2.*a,c)/2.;}vec4 Da(vec4 a,float c){float b=t(a);if(b<=0.)return a;b=pow(b,.5);float d=na(b,c),e=d/max(b,1e-4);a.rgb*=e,a=la(a,c/6.),a.rgb=clamp(a.rgb,0.,1.);return a;}vec4 Ea(vec4 a,float d){float b=t(a),e=sign(d),f=.1*pow(d,2.)*e,c=u(b,0.,1.,-f,1.);if(c<=0.)return vec4(0.,0.,0.,a.a);if(b<=0.)return vec4(vec3(c),a.a);float g=c/max(b,1e-4);a.rgb*=g,a.rgb=clamp(a.rgb,0.,1.),a.rgb=mix(vec3(c),a.rgb,clamp(1./g,0.,1.));return a;}vec4 Fa(vec4 a,float b){float c=t(a),d=pow(2.,b),e=.999999/c,f=min(d,e);a.rgb*=f;return a;}float oa(float a,float c){float b=pow(1.-a,3.),d=b*(a*c)+(1.-b)*a;return d;}vec4 Ga(vec4 a,float c){float b=t(a),d=pow(b,.4545),e=oa(d,c+1.),f=pow(e,2.20022),g=f/max(b,1e-4);a.rgb*=g,a.rgb=clamp(a.rgb,0.,1.);return a;}float pa(float a,float c){float b=pow(a,3.),d=b*1.+(1.-b)*a;return mix(a,d,c);}vec4 Ha(vec4 a,float c){float b=t(a),d=pow(b,.4545),e=pa(d,c),f=pow(e,2.20022),g=f/max(b,1e-4);a.rgb*=g,a.rgb=clamp(a.rgb,0.,1.);return a;}vec4 Ia(vec4 c,vec3 d,vec3 e){vec3 a=l(e),b=l(d);float k=t(vec4(b,1.)),m=t(vec4(a,1.));b/=k,a/=m;vec3 f=K(c.rgb),g=K(b),h=K(a),i=h/g,j=f*i,n=ha(j);return vec4(n,c.a);}vec3 qa(float a,float b){float c=u(b,-1.,1.,0.,1.),d=u(a,-1.,1.,0.,1.);return texture2D(ta,vec2(c,d)).rgb;}void main(){vec2 b=vTexCoord;vec4 a=texture2D(uPrevResult,b);a.rgb=l(a.rgb);vec3 c=qa(ca,da);a=c!=vec3(1.,1.,1)?Ia(a,vec3(1,1,1),c):a,a=Y!=0.?Ea(a,Y):a,a=Z!=0.?Fa(a,Z):a,a=V!=0.?Ba(a,V):a,a=_!=0.?Ga(a,_):a,a=aa!=0.?Ha(a,aa):a,a=ba!=0.?Da(a,ba):a,a=W!=0.?Ca(a,W):a,a=X!=0.?la(a,X):a,a=za(a),a=vec4(v(a.rgb),a.a),gl_FragColor=a;}",
          ],
          XPc = class {
            async initialize(a) {
              try {
                const b = new g8({ source: a.element });
                await rNc(this);
                const c = new FNc({
                    passes: VPc,
                    textures: { a: b, ta: this.store.teb, h: this.store.BCa },
                    uniforms: xNc({
                      Wb: [],
                      width: 0,
                      height: 0,
                      bL: !1,
                      TS: !1,
                    }),
                  }),
                  d = document.createElement("div"),
                  e = new GNc(() => ENc(d, { env: { devicePixelRatio: 1 } }));
                e.onContextLost = () => {
                  e.restore();
                };
                e.load([b]);
                e.load(c);
                this.Bw.width &&
                  this.Bw.height &&
                  e.resize(this.Bw.width, this.Bw.height);
                this.renderer = e;
                this.y6 = c;
                this.LJ = b;
                this.qla = oNc;
                this.pla = this.store.BCa;
                this.ola = "original";
                this.ce = setTimeout(() => this.dispose(), 16e3);
              } catch (b) {
                throw (this.dispose(), b);
              }
            }
            async cma(a) {
              return this.C8 ? this.C8 : (this.C8 = this.initialize(a));
            }
            MIa({ image: a, Zo: b, width: c, height: d }) {
              this.MJ.width = c;
              this.MJ.height = d;
              const e = b.top,
                f = b.left,
                g = b.width;
              b = b.height;
              this.uLa?.drawImage(a, f, e, g, b, 0, 0, c, d);
            }
            async render({ width: a, height: b, Faa: c, bfa: d }) {
              var e = c.source,
                f = c.Wb;
              const g = c.bL;
              c = c.TS;
              await this.cma(e);
              if (
                !(
                  this.renderer &&
                  this.y6 &&
                  this.LJ &&
                  this.pla &&
                  this.ola &&
                  this.qla
                )
              )
                throw Error("Renderer is not initialized");
              this.ce && clearTimeout(this.ce);
              this.ce = setTimeout(() => this.dispose(), 16e3);
              nNc(this.Bw, { width: a, height: b }) &&
                (this.renderer.resize(a, b),
                (this.Bw = { width: a, height: b }));
              let h = this.LJ;
              this.iEa !== e &&
                (this.renderer.release([h]),
                e.type === "sprite"
                  ? (this.MIa({
                      image: e.element,
                      Zo: e.Zo,
                      width: a,
                      height: b,
                    }),
                    (h = new g8({ source: this.MJ })))
                  : (h = new g8({ source: e.element })),
                this.renderer.load([h]),
                (this.LJ = h),
                (this.iEa = e));
              this.renderer.update([h]);
              e = tNc(f);
              const k = c ? "preview" : "original";
              if (e && (this.qla.id !== e.id || this.ola !== k)) {
                var l = await __c.lU(c ? e.Oc : e.url);
                l = new g8({ source: l });
                this.renderer.load([l]);
                this.qla = e;
                this.pla = l;
                this.ola = k;
              }
              this.y6.update({
                textures: { a: h, h: this.pla },
                uniforms: xNc({ Wb: f, width: a, height: b, bL: g, TS: c }),
              });
              this.renderer.load(this.y6);
              this.renderer.render(this.y6);
              f = this.renderer.canvas;
              await zNc(a, b, { ...d, ofb: f });
              return f;
            }
            dispose() {
              this.ce && clearTimeout(this.ce);
              this.renderer?.dispose();
              this.ola =
                this.pla =
                this.qla =
                this.C8 =
                this.ce =
                this.y6 =
                this.renderer =
                  void 0;
            }
            constructor() {
              this.store = WPc;
              this.C8 = void 0;
              this.MJ = document.createElement("canvas");
              this.uLa = this.MJ.getContext("2d");
              this.Bw = { width: 0, height: 0 };
            }
          },
          sNc = (a) => UPc.find((b) => b.id === a);
        var YPc = class {
          static D(a) {
            __c.M(a, { cra: KNc.ref, CCa: KNc.ref, teb: HNc, BCa: HNc });
          }
          get teb() {
            return new g8({ source: this.cra ?? new ImageData(1, 1) });
          }
          get BCa() {
            return new g8({ source: this.CCa ?? new ImageData(1, 1) });
          }
          constructor() {
            this.cra = (YPc.D(this), void 0);
          }
        };
        var { pza: BNc } = { pza: new XNc() },
          ZPc,
          WPc = new YPc(),
          ANc;
        ZPc = { pza: new XPc() };
        ({ pza: ANc } = ZPc);
        __c.HSb = {
          cjb: PNc(
            ({
              source: a,
              filter: b,
              Wb: c,
              P: d,
              paused: e,
              TS: f,
              objectFit: g,
              Co: h,
              Xw: k,
            }) => {
              const l = SNc(null),
                m = l.current?.ownerDocument.defaultView || window;
              RNc(() => {
                if (l.current) {
                  var n = l.current,
                    p = yNc()
                      ? n.getContext("bitmaprenderer")
                      : n.getContext("2d");
                  if (p) {
                    var q = 0,
                      r = async () => {
                        let z = 0,
                          A = 0;
                        if (d) (z = d.width), (A = d.height);
                        else
                          switch (a.type) {
                            case "video":
                              z = a.element.videoWidth;
                              A = a.element.videoHeight;
                              break;
                            case "sprite":
                              z = a.Zo.width;
                              A = a.Zo.height;
                              break;
                            case "image":
                            case "canvas":
                              (z = a.element.width), (A = a.element.height);
                          }
                        A =
                          !h || (a.type !== "video" && a.type !== "canvas")
                            ? A
                            : A / 2;
                        if (
                          /iphone|android/i.test(window?.navigator?.userAgent)
                        ) {
                          const C = z / A,
                            B = C > 1;
                          z = Math.round(Math.min(z, B ? C * 720 : 720));
                          A = Math.round(Math.min(A, B ? 720 : 720 / C));
                        }
                        await CNc({
                          TS: !!f,
                          TGb: { width: z, height: A },
                          Xw: k,
                          Faa: { source: a, filter: b, Wb: c, Co: h },
                          bfa: { Sd: m, EMb: n, context: p },
                        });
                      },
                      t = async () => {
                        a: switch (a.type) {
                          case "image":
                          case "sprite":
                            var z = a.element.complete;
                            break a;
                          case "video":
                            z =
                              a.element.readyState >=
                              HTMLMediaElement.HAVE_CURRENT_DATA;
                            break a;
                          case "canvas":
                            z = !0;
                            break a;
                          default:
                            throw new __c.E(a);
                        }
                        z ? r() : (q = e8(q, t));
                      },
                      v = async () => {
                        r();
                        q = e8(q, v);
                      },
                      w = c?.length
                        ? JNc(
                            () => DNc(c),
                            () => {
                              q =
                                a.type === "image" || a.type === "sprite" || e
                                  ? e8(q, t)
                                  : e8(q, v);
                            },
                            { equals: INc.structural, delay: 25 }
                          )
                        : void 0;
                    if (a.type === "image" || a.type === "sprite" || e)
                      return (
                        (q = e8(q, t)),
                        () => {
                          cancelAnimationFrame(q);
                          w?.();
                        }
                      );
                    q = e8(q, v);
                    return () => {
                      cancelAnimationFrame(q);
                      w?.();
                    };
                  }
                }
              }, [
                m,
                a,
                b,
                d,
                e,
                c,
                f,
                h,
                b?.brightness,
                b?.contrast,
                b?.saturation,
                b?.Mz,
                b?.blur,
                b?.CK,
                b?.xK,
                b?.dH,
                b?.sK,
                b?.highlights,
                b?.Az,
                b?.Tz,
                b?.MH,
                k,
              ]);
              return LNc("canvas", {
                ref: l,
                className: ONc("w_xYrQ", {
                  _0frnRw: f,
                  BhGlcg: g === "fill",
                  shq_KQ: g === "cover",
                  NepMWw: g === "contain",
                }),
              });
            }
          ),
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/cf073ba0afab4d11.js.map
