var ju = Object.defineProperty;
var Fu = (n, e, t) => e in n ? ju(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ae = (n, e, t) => (Fu(n, typeof e != "symbol" ? e + "" : e, t), t);
function j() {
}
const ja = (n) => n;
function Fa(n) {
  return n();
}
function _o() {
  return /* @__PURE__ */ Object.create(null);
}
function Q(n) {
  n.forEach(Fa);
}
function Sn(n) {
  return typeof n == "function";
}
function Le(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let sr;
function To(n, e) {
  return n === e ? !0 : (sr || (sr = document.createElement("a")), sr.href = e, n === sr.href);
}
function Hu(n) {
  return Object.keys(n).length === 0;
}
function Ha(n, ...e) {
  if (n == null) {
    for (const r of e)
      r(void 0);
    return j;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ne(n, e, t) {
  n.$$.on_destroy.push(Ha(e, t));
}
const Va = typeof window < "u";
let Vu = Va ? () => window.performance.now() : () => Date.now(), Hs = Va ? (n) => requestAnimationFrame(n) : j;
const an = /* @__PURE__ */ new Set();
function qa(n) {
  an.forEach((e) => {
    e.c(n) || (an.delete(e), e.f());
  }), an.size !== 0 && Hs(qa);
}
function qu(n) {
  let e;
  return an.size === 0 && Hs(qa), {
    promise: new Promise((t) => {
      an.add(e = { c: n, f: t });
    }),
    abort() {
      an.delete(e);
    }
  };
}
function y(n, e) {
  n.appendChild(e);
}
function pt(n, e, t) {
  const r = Vs(n);
  if (!r.getElementById(e)) {
    const i = v("style");
    i.id = e, i.textContent = t, Wa(r, i);
  }
}
function Vs(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function Wu(n) {
  const e = v("style");
  return e.textContent = "/* empty */", Wa(Vs(n), e), e.sheet;
}
function Wa(n, e) {
  return y(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function _(n, e, t) {
  n.insertBefore(e, t || null);
}
function x(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Ce(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function v(n) {
  return document.createElement(n);
}
function Me(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function B(n) {
  return document.createTextNode(n);
}
function T() {
  return B(" ");
}
function pe() {
  return B("");
}
function P(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function qs(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Ws(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Ju(n) {
  return function(e) {
    e.target === this && n.call(this, e);
  };
}
function b(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Ja(n, e, t) {
  const r = e.toLowerCase();
  r in n ? n[r] = typeof n[r] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : b(n, e, t);
}
function Ka(n) {
  return n === "" ? null : +n;
}
function Ku(n) {
  return Array.from(n.childNodes);
}
function K(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function re(n, e) {
  n.value = e ?? "";
}
function ms(n, e, t) {
  for (let r = 0; r < n.options.length; r += 1) {
    const i = n.options[r];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Uu(n) {
  const e = n.querySelector(":checked");
  return e && e.__value;
}
function oe(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Gu(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
function Yu(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
const vr = /* @__PURE__ */ new Map();
let wr = 0;
function Zu(n) {
  let e = 5381, t = n.length;
  for (; t--; )
    e = (e << 5) - e ^ n.charCodeAt(t);
  return e >>> 0;
}
function Qu(n, e) {
  const t = { stylesheet: Wu(e), rules: {} };
  return vr.set(n, t), t;
}
function Xu(n, e, t, r, i, s, o, l = 0) {
  const a = 16.666 / r;
  let c = `{
`;
  for (let g = 0; g <= 1; g += a) {
    const k = e + (t - e) * s(g);
    c += g * 100 + `%{${o(k, 1 - k)}}
`;
  }
  const u = c + `100% {${o(t, 1 - t)}}
}`, f = `__svelte_${Zu(u)}_${l}`, d = Vs(n), { stylesheet: h, rules: p } = vr.get(d) || Qu(d, n);
  p[f] || (p[f] = !0, h.insertRule(`@keyframes ${f} ${u}`, h.cssRules.length));
  const m = n.style.animation || "";
  return n.style.animation = `${m ? `${m}, ` : ""}${f} ${r}ms linear ${i}ms 1 both`, wr += 1, f;
}
function ef(n, e) {
  const t = (n.style.animation || "").split(", "), r = t.filter(
    e ? (s) => s.indexOf(e) < 0 : (s) => s.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), i = t.length - r.length;
  i && (n.style.animation = r.join(", "), wr -= i, wr || tf());
}
function tf() {
  Hs(() => {
    wr || (vr.forEach((n) => {
      const { ownerNode: e } = n.stylesheet;
      e && x(e);
    }), vr.clear());
  });
}
let Fn;
function Dn(n) {
  Fn = n;
}
function Ua() {
  if (!Fn)
    throw new Error("Function called outside component initialization");
  return Fn;
}
function Js(n) {
  Ua().$$.on_mount.push(n);
}
function nf(n) {
  Ua().$$.on_destroy.push(n);
}
function Ks(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const tn = [], Sr = [];
let cn = [];
const Oo = [], rf = /* @__PURE__ */ Promise.resolve();
let gs = !1;
function sf() {
  gs || (gs = !0, rf.then(pn));
}
function Hn(n) {
  cn.push(n);
}
const ji = /* @__PURE__ */ new Set();
let Yt = 0;
function pn() {
  if (Yt !== 0)
    return;
  const n = Fn;
  do {
    try {
      for (; Yt < tn.length; ) {
        const e = tn[Yt];
        Yt++, Dn(e), of(e.$$);
      }
    } catch (e) {
      throw tn.length = 0, Yt = 0, e;
    }
    for (Dn(null), tn.length = 0, Yt = 0; Sr.length; )
      Sr.pop()();
    for (let e = 0; e < cn.length; e += 1) {
      const t = cn[e];
      ji.has(t) || (ji.add(t), t());
    }
    cn.length = 0;
  } while (tn.length);
  for (; Oo.length; )
    Oo.pop()();
  gs = !1, ji.clear(), Dn(n);
}
function of(n) {
  if (n.fragment !== null) {
    n.update(), Q(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Hn);
  }
}
function lf(n) {
  const e = [], t = [];
  cn.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), cn = e;
}
let Tn;
function af() {
  return Tn || (Tn = Promise.resolve(), Tn.then(() => {
    Tn = null;
  })), Tn;
}
function Eo(n, e, t) {
  n.dispatchEvent(Gu(`${e ? "intro" : "outro"}${t}`));
}
const hr = /* @__PURE__ */ new Set();
let St;
function Mn() {
  St = {
    r: 0,
    c: [],
    p: St
    // parent group
  };
}
function xn() {
  St.r || Q(St.c), St = St.p;
}
function Z(n, e) {
  n && n.i && (hr.delete(n), n.i(e));
}
function te(n, e, t, r) {
  if (n && n.o) {
    if (hr.has(n))
      return;
    hr.add(n), St.c.push(() => {
      hr.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
const cf = { duration: 0 };
function uf(n, e, t) {
  const r = { direction: "out" };
  let i = e(n, t, r), s = !0, o;
  const l = St;
  l.r += 1;
  let a;
  function c() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: d = ja,
      tick: h = j,
      css: p
    } = i || cf;
    p && (o = Xu(n, 1, 0, f, u, d, p));
    const m = Vu() + u, g = m + f;
    Hn(() => Eo(n, !1, "start")), "inert" in n && (a = /** @type {HTMLElement} */
    n.inert, n.inert = !0), qu((k) => {
      if (s) {
        if (k >= g)
          return h(0, 1), Eo(n, !1, "end"), --l.r || Q(l.c), !1;
        if (k >= m) {
          const w = d((k - m) / f);
          h(1 - w, w);
        }
      }
      return s;
    });
  }
  return Sn(i) ? af().then(() => {
    i = i(r), c();
  }) : c(), {
    end(u) {
      u && "inert" in n && (n.inert = a), u && i.tick && i.tick(1, 0), s && (o && ef(n, o), s = !1);
    }
  };
}
function G(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function it(n) {
  n && n.c();
}
function He(n, e, t) {
  const { fragment: r, after_update: i } = n.$$;
  r && r.m(e, t), Hn(() => {
    const s = n.$$.on_mount.map(Fa).filter(Sn);
    n.$$.on_destroy ? n.$$.on_destroy.push(...s) : Q(s), n.$$.on_mount = [];
  }), i.forEach(Hn);
}
function Ve(n, e) {
  const t = n.$$;
  t.fragment !== null && (lf(t.after_update), Q(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ff(n, e) {
  n.$$.dirty[0] === -1 && (tn.push(n), sf(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ke(n, e, t, r, i, s, o = null, l = [-1]) {
  const a = Fn;
  Dn(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: j,
    not_equal: i,
    bound: _o(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: _o(),
    dirty: l,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(c.root);
  let u = !1;
  if (c.ctx = t ? t(n, e.props || {}, (f, d, ...h) => {
    const p = h.length ? h[0] : d;
    return c.ctx && i(c.ctx[f], c.ctx[f] = p) && (!c.skip_bound && c.bound[f] && c.bound[f](p), u && ff(n, f)), d;
  }) : [], c.update(), u = !0, Q(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Ku(e.target);
      c.fragment && c.fragment.l(f), f.forEach(x);
    } else
      c.fragment && c.fragment.c();
    e.intro && Z(n.$$.fragment), He(n, e.target, e.anchor), pn();
  }
  Dn(a);
}
let Ga;
typeof HTMLElement == "function" && (Ga = class extends HTMLElement {
  constructor(e, t, r) {
    super();
    /** The Svelte component constructor */
    Ae(this, "$$ctor");
    /** Slots */
    Ae(this, "$$s");
    /** The Svelte component instance */
    Ae(this, "$$c");
    /** Whether or not the custom element is connected */
    Ae(this, "$$cn", !1);
    /** Component props data */
    Ae(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ae(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ae(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    Ae(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    Ae(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const i = this.$$c.$on(e, t);
      this.$$l_u.set(t, i);
    }
    super.addEventListener(e, t, r);
  }
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const i = this.$$l_u.get(t);
      i && (i(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return () => {
          let o;
          return {
            c: function() {
              o = v("slot"), s !== "default" && b(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, u) {
              _(c, o, u);
            },
            d: function(c) {
              c && x(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, r = Yu(this);
      for (const s of this.$$s)
        s in r && (t[s] = [e(s)]);
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = pr(o, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$scope: {
            ctx: []
          }
        }
      });
      const i = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const o = pr(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const l = this.$$c.$on(s, o);
          this.$$l_u.set(o, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, r) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = pr(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function pr(n, e, t, r) {
  var s;
  const i = (s = t[n]) == null ? void 0 : s.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !t[n])
    return e;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Ue(n, e, t, r, i, s) {
  let o = class extends Ga {
    constructor() {
      super(n, t, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((l) => {
    Object.defineProperty(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(a) {
        var c;
        a = pr(l, a, e), this.$$d[l] = a, (c = this.$$c) == null || c.$set({ [l]: a });
      }
    });
  }), r.forEach((l) => {
    Object.defineProperty(o.prototype, l, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[l];
      }
    });
  }), s && (o = s(o)), n.element = /** @type {any} */
  o, o;
}
class Ge {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ae(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ae(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ve(this, 1), this.$destroy = j;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Sn(t))
      return j;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const i = r.indexOf(t);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Hu(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const df = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(df);
const Zt = [];
function Ya(n, e) {
  return {
    subscribe: er(n, e).subscribe
  };
}
function er(n, e = j) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (Le(n, l) && (n = l, t)) {
      const a = !Zt.length;
      for (const c of r)
        c[1](), Zt.push(c, n);
      if (a) {
        for (let c = 0; c < Zt.length; c += 2)
          Zt[c][0](Zt[c + 1]);
        Zt.length = 0;
      }
    }
  }
  function s(l) {
    i(l(n));
  }
  function o(l, a = j) {
    const c = [l, a];
    return r.add(c), r.size === 1 && (t = e(i, s) || j), l(n), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function Us(n, e, t) {
  const r = !Array.isArray(n), i = r ? [n] : n;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return Ya(t, (o, l) => {
    let a = !1;
    const c = [];
    let u = 0, f = j;
    const d = () => {
      if (u)
        return;
      f();
      const p = e(r ? c[0] : c, o, l);
      s ? o(p) : f = Sn(p) ? p : j;
    }, h = i.map(
      (p, m) => Ha(
        p,
        (g) => {
          c[m] = g, u &= ~(1 << m), a && d();
        },
        () => {
          u |= 1 << m;
        }
      )
    );
    return a = !0, d(), function() {
      Q(h), f(), a = !1;
    };
  });
}
function hf() {
  const n = typeof window < "u" ? localStorage.getItem("changes") : "{}", { subscribe: e, set: t, update: r } = er(n ? JSON.parse(n) : {});
  return {
    subscribe: e,
    update: r,
    delete: (i, s) => {
      r((o) => (o[i][s] = "delete", o));
    },
    set: (i) => {
      t(i || {});
    }
  };
}
const _t = hf(), pf = {
  title: "Global Data",
  slug: "globals",
  description: "Global data for the website",
  file: "globals.json",
  fields: {
    title: {
      label: "Title",
      widget: "string"
    },
    description: {
      label: "Description",
      widget: "text"
    },
    keywords: {
      label: "Keywords",
      widget: "list"
    },
    logo: {
      label: "Logo",
      widget: "image"
    },
    favicon: {
      label: "Favicon",
      widget: "image"
    }
  }
}, mf = {
  title: "To Do's",
  description: "A list of to do's",
  file: "todos.json",
  isCollection: !0,
  fields: {
    title: {
      label: "Title",
      widget: "string",
      description: "The title of the to do",
      required: !0,
      unique: !0,
      default: "New To Do"
    },
    slug: {
      label: "URL",
      id: !0,
      hidden: !0,
      widget: "derived",
      mode: "slug",
      source: "title"
    },
    description: {
      label: "Description",
      widget: "richtext",
      description: "The description of the to do",
      required: !1,
      default: "New To Do",
      list: !1
    },
    done: {
      label: "Done",
      widget: "checkbox",
      description: "Whether the to do is done",
      required: !0,
      default: !1,
      list: !1
    },
    date: {
      label: "Date",
      widget: "date",
      description: "The date of the to do",
      required: !1,
      default: "today",
      list: !1
    },
    datetime: {
      label: "Date Time",
      widget: "datetime",
      description: "The date and time of the to do",
      required: !1,
      default: "now",
      list: !1
    },
    priority: {
      label: "Priority",
      widget: "select-single",
      description: "The priority of the to do",
      required: !1,
      default: "low",
      list: !1,
      options: [
        {
          label: "Low",
          value: "low"
        },
        {
          label: "Medium",
          value: "medium"
        },
        {
          label: "High",
          value: "high"
        }
      ]
    },
    category: {
      label: "Category",
      widget: "select-multiple",
      description: "The category of the to do",
      required: !1,
      default: "none",
      list: !1,
      options: [
        {
          label: "None",
          value: "none"
        },
        {
          label: "Home",
          value: "home"
        },
        {
          label: "Work",
          value: "work"
        },
        {
          label: "Personal",
          value: "personal"
        }
      ]
    },
    progress: {
      label: "Progress",
      widget: "number",
      description: "The progress of the to do",
      required: !1,
      default: 0,
      list: !1,
      min: 0,
      max: 100,
      step: 1
    }
  },
  listFields: [
    "title",
    "done",
    "date",
    "progress"
  ]
}, gf = {
  globals: pf,
  todos: mf
}, bf = "My site", yf = "My site description", kf = "my, site, keywords", vf = "favicon.png", wf = "favicon.png", Sf = {
  title: bf,
  description: yf,
  keywords: kf,
  logo: vf,
  favicon: wf
}, Mf = {
  title: "Buy food",
  slug: "buy-food",
  description: "<h4>Lets buy food</h4><p>Bread<br>Milk<br>Eggs</p>",
  done: !0,
  category: [
    "home",
    "work"
  ]
}, xf = {
  title: "Dance",
  slug: "dance",
  description: "<h4>Lets dance</h4><p>Book course.</p>",
  done: !0
}, Cf = {
  ajh3344r1j: Mf,
  i1gp5hscgh: xf
};
function _f() {
  const { subscribe: n, set: e, update: t } = er({});
  return {
    subscribe: n,
    update: t,
    set: (r) => {
      const i = _t.subscribe((s) => {
        if (s)
          for (const [o, l] of Object.entries(s))
            r[o] = { ...r[o], ...l };
      });
      e(r), i();
    }
  };
}
const In = _f(), Vn = er({});
async function Tf() {
  return new Promise((n, e) => {
    setTimeout(() => {
      n({
        config: gf,
        collections: {
          globals: Sf,
          todos: Cf
        }
      });
    }, 1e3);
  });
}
function Of(n, { delay: e = 0, duration: t = 400, easing: r = ja } = {}) {
  const i = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: r,
    css: (s) => `opacity: ${s * i}`
  };
}
const Gs = Ya(null, function(e) {
  e(No());
  const t = () => {
    e(No());
  };
  return typeof window < "u" && window.addEventListener("hashchange", t, !1), function() {
    typeof window > "u" || window.removeEventListener("hashchange", t, !1);
  };
}), Ys = Us(Gs, (n) => n.location), tr = Us(Gs, (n) => n.collectionId), Zs = Us(Gs, (n) => n.recordId);
function No() {
  if (typeof window > "u")
    return {};
  const n = window.location.href.indexOf("#/");
  let e = n > -1 ? window.location.href.substr(n + 1) : "/", t = {};
  const r = e.indexOf("?");
  return r > -1 && (t.query = e.substr(r + 1), e = e.substr(0, r)), e = e.split("/"), t.location = e[1], e.length === 3 && t.location === "content" ? t.collectionId = e[2] : e.length === 4 && t.location === "content" && (t.collectionId = e[2], t.recordId = e[3]), t;
}
function Ef(n) {
  pt(n, "svelte-jnx2xs", `aside.svelte-jnx2xs.svelte-jnx2xs{display:block;border-right:1px solid rgb(216, 222, 228)}.box.svelte-jnx2xs.svelte-jnx2xs{position:sticky;top:3.5rem;height:calc(100vh - 3.5rem);width:260px;padding:1rem 0.5rem 0}a.svelte-jnx2xs.svelte-jnx2xs{display:block;position:relative;font-size:0.875rem;line-height:1.25rem;margin-left:0.5rem;margin-right:0.5rem;padding:0.325rem 0.5rem;border-radius:0.325rem;transition:background 33ms linear 0s;color:rgb(36, 41, 47);cursor:pointer;appearance:none;background:unset;border:unset;width:calc(100% - 16px);font-family:unset;text-align:unset;margin-top:unset;margin-bottom:unset}a.svelte-jnx2xs.svelte-jnx2xs:hover{background-color:rgba(208, 215, 222, 0.32)}a.active.svelte-jnx2xs.svelte-jnx2xs{background-color:rgba(208, 215, 222, 0.24)
}.label.svelte-jnx2xs.svelte-jnx2xs{font-size:0.75rem;font-weight:600;color:rgb(87, 96, 106);padding:0.75rem 1rem}.ruler.svelte-jnx2xs.svelte-jnx2xs{height:1px;background-color:rgba(208, 215, 222, 0.48);margin-top:0.5rem;margin-bottom:0.5rem}.active.svelte-jnx2xs span.svelte-jnx2xs::before{content:'';position:absolute;left:-0.5rem;top:0;bottom:0;width:0.25rem;background-color:rgb(9, 105, 218);border-radius:0.25rem}@media screen and (max-width: 768px){aside.svelte-jnx2xs.svelte-jnx2xs{display:none}}`);
}
function Ao(n, e, t) {
  const r = n.slice();
  return r[3] = e[t][0], r[4] = e[t][1], r;
}
function Do(n) {
  let e, t, r, i, s, o, l, a = G(Object.entries(
    /*$config*/
    n[0]
  )), c = [];
  for (let u = 0; u < a.length; u += 1)
    c[u] = Io(Ao(n, a, u));
  return {
    c() {
      e = v("div"), t = v("div"), t.textContent = "Content", r = T();
      for (let u = 0; u < c.length; u += 1)
        c[u].c();
      i = T(), s = v("div"), o = T(), l = v("a"), l.innerHTML = '<span class="svelte-jnx2xs">Assets</span>', b(t, "class", "label svelte-jnx2xs"), b(s, "class", "ruler svelte-jnx2xs"), b(l, "class", "menu-item svelte-jnx2xs"), b(l, "href", "#/assets"), oe(
        l,
        "active",
        /*$location*/
        n[2] === "assets"
      ), b(e, "class", "box svelte-jnx2xs");
    },
    m(u, f) {
      _(u, e, f), y(e, t), y(e, r);
      for (let d = 0; d < c.length; d += 1)
        c[d] && c[d].m(e, null);
      y(e, i), y(e, s), y(e, o), y(e, l);
    },
    p(u, f) {
      if (f & /*Object, $config, $collectionId*/
      3) {
        a = G(Object.entries(
          /*$config*/
          u[0]
        ));
        let d;
        for (d = 0; d < a.length; d += 1) {
          const h = Ao(u, a, d);
          c[d] ? c[d].p(h, f) : (c[d] = Io(h), c[d].c(), c[d].m(e, i));
        }
        for (; d < c.length; d += 1)
          c[d].d(1);
        c.length = a.length;
      }
      f & /*$location*/
      4 && oe(
        l,
        "active",
        /*$location*/
        u[2] === "assets"
      );
    },
    d(u) {
      u && x(e), Ce(c, u);
    }
  };
}
function Io(n) {
  let e, t, r = (
    /*content*/
    n[4].title + ""
  ), i, s;
  return {
    c() {
      e = v("a"), t = v("span"), i = B(r), b(t, "class", "svelte-jnx2xs"), b(e, "class", "menu-item svelte-jnx2xs"), b(e, "href", s = "#/content/" + /*id*/
      n[3]), oe(
        e,
        "active",
        /*$collectionId*/
        n[1] === /*id*/
        n[3]
      );
    },
    m(o, l) {
      _(o, e, l), y(e, t), y(t, i);
    },
    p(o, l) {
      l & /*$config*/
      1 && r !== (r = /*content*/
      o[4].title + "") && K(i, r), l & /*$config*/
      1 && s !== (s = "#/content/" + /*id*/
      o[3]) && b(e, "href", s), l & /*$collectionId, Object, $config*/
      3 && oe(
        e,
        "active",
        /*$collectionId*/
        o[1] === /*id*/
        o[3]
      );
    },
    d(o) {
      o && x(e);
    }
  };
}
function Nf(n) {
  let e, t = Object.keys(
    /*$config*/
    n[0]
  ).length > 0, r = t && Do(n);
  return {
    c() {
      e = v("aside"), r && r.c(), b(e, "class", "svelte-jnx2xs");
    },
    m(i, s) {
      _(i, e, s), r && r.m(e, null);
    },
    p(i, [s]) {
      s & /*$config*/
      1 && (t = Object.keys(
        /*$config*/
        i[0]
      ).length > 0), t ? r ? r.p(i, s) : (r = Do(i), r.c(), r.m(e, null)) : r && (r.d(1), r = null);
    },
    i: j,
    o: j,
    d(i) {
      i && x(e), r && r.d();
    }
  };
}
function Af(n, e, t) {
  let r, i, s;
  return ne(n, Vn, (o) => t(0, r = o)), ne(n, tr, (o) => t(1, i = o)), ne(n, Ys, (o) => t(2, s = o)), [r, i, s];
}
class Za extends Ge {
  constructor(e) {
    super(), Ke(this, e, Af, Nf, Le, {}, Ef);
  }
}
Ue(Za, {}, [], [], !0);
function Df(n) {
  pt(n, "svelte-10cau06", 'nav.svelte-10cau06{display:flex;flex-wrap:wrap;align-items:center;margin:0 0 6rem;font-size:0.875rem}ol.svelte-10cau06{margin-top:0px;margin-bottom:0px;padding-left:0px}li.svelte-10cau06{display:inline-block;white-space:nowrap;list-style:none}a.svelte-10cau06{color:rgb(9, 105, 218);display:inline-block;text-decoration:none}a.svelte-10cau06:hover{text-decoration:underline}li.link.svelte-10cau06::after{padding-right:0.5em;padding-left:0.5em;color:rgb(101, 109, 118);content:"/"}');
}
function Ro(n) {
  let e, t, r, i;
  function s(a, c) {
    if (
      /*$location*/
      a[0] === "assets"
    )
      return Pf;
    if (
      /*$collectionId*/
      a[2] && !/*$recordId*/
      a[3]
    )
      return Rf;
    if (
      /*$collectionId*/
      a[2] && /*$recordId*/
      a[3] && /*$collections*/
      a[4][
        /*$collectionId*/
        a[2]
      ] && /*$collections*/
      a[4][
        /*$collectionId*/
        a[2]
      ][
        /*$recordId*/
        a[3]
      ]
    )
      return If;
  }
  let o = s(n), l = o && o(n);
  return {
    c() {
      e = v("nav"), t = v("ol"), r = v("li"), r.innerHTML = '<a href="#/" class="svelte-10cau06">Dashboard</a>', i = T(), l && l.c(), b(r, "class", "link svelte-10cau06"), b(t, "class", "svelte-10cau06"), b(e, "class", "svelte-10cau06");
    },
    m(a, c) {
      _(a, e, c), y(e, t), y(t, r), y(t, i), l && l.m(t, null);
    },
    p(a, c) {
      o === (o = s(a)) && l ? l.p(a, c) : (l && l.d(1), l = o && o(a), l && (l.c(), l.m(t, null)));
    },
    d(a) {
      a && x(e), l && l.d();
    }
  };
}
function If(n) {
  let e, t, r = (
    /*$config*/
    n[1][
      /*$collectionId*/
      n[2]
    ].title + ""
  ), i, s, o, l, a = (
    /*$collections*/
    (n[4][
      /*$collectionId*/
      n[2]
    ][
      /*$recordId*/
      n[3]
    ].title ?? /*$recordId*/
    n[3]) + ""
  ), c;
  return {
    c() {
      e = v("li"), t = v("a"), i = B(r), o = T(), l = v("li"), c = B(a), b(t, "href", s = "#/content/" + /*$collectionId*/
      n[2]), b(t, "class", "svelte-10cau06"), b(e, "class", "link svelte-10cau06"), b(l, "class", "svelte-10cau06");
    },
    m(u, f) {
      _(u, e, f), y(e, t), y(t, i), _(u, o, f), _(u, l, f), y(l, c);
    },
    p(u, f) {
      f & /*$config, $collectionId*/
      6 && r !== (r = /*$config*/
      u[1][
        /*$collectionId*/
        u[2]
      ].title + "") && K(i, r), f & /*$collectionId*/
      4 && s !== (s = "#/content/" + /*$collectionId*/
      u[2]) && b(t, "href", s), f & /*$collections, $collectionId, $recordId*/
      28 && a !== (a = /*$collections*/
      (u[4][
        /*$collectionId*/
        u[2]
      ][
        /*$recordId*/
        u[3]
      ].title ?? /*$recordId*/
      u[3]) + "") && K(c, a);
    },
    d(u) {
      u && (x(e), x(o), x(l));
    }
  };
}
function Rf(n) {
  let e, t = (
    /*$config*/
    n[1][
      /*$collectionId*/
      n[2]
    ].title + ""
  ), r;
  return {
    c() {
      e = v("li"), r = B(t), b(e, "class", "svelte-10cau06");
    },
    m(i, s) {
      _(i, e, s), y(e, r);
    },
    p(i, s) {
      s & /*$config, $collectionId*/
      6 && t !== (t = /*$config*/
      i[1][
        /*$collectionId*/
        i[2]
      ].title + "") && K(r, t);
    },
    d(i) {
      i && x(e);
    }
  };
}
function Pf(n) {
  let e;
  return {
    c() {
      e = v("li"), e.textContent = "Assets", b(e, "class", "svelte-10cau06");
    },
    m(t, r) {
      _(t, e, r);
    },
    p: j,
    d(t) {
      t && x(e);
    }
  };
}
function Lf(n) {
  let e = (
    /*$location*/
    n[0] !== "" && Object.keys(
      /*$config*/
      n[1]
    ).length > 0
  ), t, r = e && Ro(n);
  return {
    c() {
      r && r.c(), t = pe();
    },
    m(i, s) {
      r && r.m(i, s), _(i, t, s);
    },
    p(i, [s]) {
      s & /*$location, $config*/
      3 && (e = /*$location*/
      i[0] !== "" && Object.keys(
        /*$config*/
        i[1]
      ).length > 0), e ? r ? r.p(i, s) : (r = Ro(i), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    i: j,
    o: j,
    d(i) {
      i && x(t), r && r.d(i);
    }
  };
}
function $f(n, e, t) {
  let r, i, s, o, l;
  return ne(n, Ys, (a) => t(0, r = a)), ne(n, Vn, (a) => t(1, i = a)), ne(n, tr, (a) => t(2, s = a)), ne(n, Zs, (a) => t(3, o = a)), ne(n, In, (a) => t(4, l = a)), [r, i, s, o, l];
}
class Qa extends Ge {
  constructor(e) {
    super(), Ke(this, e, $f, Lf, Le, {}, Df);
  }
}
Ue(Qa, {}, [], [], !0);
function zf(n) {
  pt(n, "svelte-mez4lc", ".lds-ring.svelte-mez4lc.svelte-mez4lc{display:inline-block;position:relative;width:80px;height:80px}.lds-ring.svelte-mez4lc div.svelte-mez4lc{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #000;border-radius:50%;animation:svelte-mez4lc-lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#000 transparent transparent transparent}.lds-ring.svelte-mez4lc div.svelte-mez4lc:nth-child(1){animation-delay:-0.45s}.lds-ring.svelte-mez4lc div.svelte-mez4lc:nth-child(2){animation-delay:-0.3s}.lds-ring.svelte-mez4lc div.svelte-mez4lc:nth-child(3){animation-delay:-0.15s}@keyframes svelte-mez4lc-lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}");
}
function Bf(n) {
  let e;
  return {
    c() {
      e = v("div"), e.innerHTML = '<div class="svelte-mez4lc"></div><div class="svelte-mez4lc"></div><div class="svelte-mez4lc"></div><div class="svelte-mez4lc"></div>', b(e, "class", "lds-ring svelte-mez4lc");
    },
    m(t, r) {
      _(t, e, r);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && x(e);
    }
  };
}
class Xa extends Ge {
  constructor(e) {
    super(), Ke(this, e, null, Bf, Le, {}, zf);
  }
}
Ue(Xa, {}, [], [], !0);
function jf() {
  const { subscribe: n, set: e, update: t } = er([]);
  return {
    subscribe: n,
    set: e,
    update: t,
    add: (r, i = "") => {
      t((s) => (s.push({ message: r, type: i }), setTimeout(() => {
        this.remove({ message: r, type: i });
      }, 1e4), s));
    },
    remove: (r) => {
      t((i) => (i.includes(r) && i.splice(i.indexOf(r), 1), i));
    },
    clear: () => {
      e([]);
    }
  };
}
const mn = jf();
function Ff(n) {
  pt(n, "svelte-1yeinpf", '.asset-actions.svelte-1yeinpf.svelte-1yeinpf{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:1rem;align-items:center;margin-bottom:1rem}.asset-actions.svelte-1yeinpf .btn.svelte-1yeinpf{cursor:pointer}.btn.svelte-1yeinpf input[type="file"].svelte-1yeinpf{display:none}.asset-container.svelte-1yeinpf.svelte-1yeinpf{display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:space-evenly;padding:2rem 0}.asset-card.svelte-1yeinpf.svelte-1yeinpf{outline:none;box-shadow:rgba(225, 228, 232, 0.2) 0px 2px 0px inset;cursor:pointer;border-radius:6px;border:1px solid rgb(207, 217, 224);overflow:hidden}.selected.svelte-1yeinpf.svelte-1yeinpf{border-color:rgb(0, 89, 200);box-shadow:rgb(152, 203, 255) 0px 0px 0px 3px;border:1px solid rgb(207, 217, 224);border-radius:6px}.asset-path.svelte-1yeinpf.svelte-1yeinpf{display:flex;justify-content:center;align-items:center;background-color:var(--color-base-0);height:4rem;font-size:0.9rem}.asset.svelte-1yeinpf.svelte-1yeinpf{display:flex;justify-content:center;align-items:center;width:16rem;height:9rem;background-color:rgb(242, 242, 242);background-size:16px 16px;background-position:0px 0px, 8px 8px;background-image:linear-gradient(45deg, rgb(230, 230, 230) 25%, transparent 25%, transparent 75%, rgb(230, 230, 230) 75%, rgb(230, 230, 230)), linear-gradient(45deg, rgb(230, 230, 230) 25%, transparent 25%, transparent 75%, rgb(230, 230, 230) 75%, rgb(230, 230, 230))}.asset.svelte-1yeinpf img.svelte-1yeinpf{width:100%;height:100%;object-fit:contain}svg.svelte-1yeinpf.svelte-1yeinpf{width:50%;height:50%}');
}
function Po(n, e, t) {
  const r = n.slice();
  return r[13] = e[t], r;
}
function Lo(n) {
  let e, t, r;
  return {
    c() {
      e = v("input"), b(e, "type", "file"), b(e, "class", "svelte-1yeinpf");
    },
    m(i, s) {
      _(i, e, s), t || (r = [
        P(
          e,
          "change",
          /*input_change_handler*/
          n[6]
        ),
        P(
          e,
          "change",
          /*fileChange*/
          n[4]
        )
      ], t = !0);
    },
    p: j,
    d(i) {
      i && x(e), t = !1, Q(r);
    }
  };
}
function Hf(n) {
  let e, t;
  return e = new Xa({}), {
    c() {
      it(e.$$.fragment);
    },
    m(r, i) {
      He(e, r, i), t = !0;
    },
    p: j,
    i(r) {
      t || (Z(e.$$.fragment, r), t = !0);
    },
    o(r) {
      te(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ve(e, r);
    }
  };
}
function Vf(n) {
  let e, t = (
    /*assets*/
    n[0] && $o(n)
  );
  return {
    c() {
      t && t.c(), e = pe();
    },
    m(r, i) {
      t && t.m(r, i), _(r, e, i);
    },
    p(r, i) {
      /*assets*/
      r[0] ? t ? t.p(r, i) : (t = $o(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: j,
    o: j,
    d(r) {
      r && x(e), t && t.d(r);
    }
  };
}
function $o(n) {
  let e, t = G(
    /*assets*/
    n[0]
  ), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = zo(Po(n, t, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = pe();
    },
    m(i, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, s);
      _(i, e, s);
    },
    p(i, s) {
      if (s & /*selected, assets*/
      3) {
        t = G(
          /*assets*/
          i[0]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const l = Po(i, t, o);
          r[o] ? r[o].p(l, s) : (r[o] = zo(l), r[o].c(), r[o].m(e.parentNode, e));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
    },
    d(i) {
      i && x(e), Ce(r, i);
    }
  };
}
function qf(n) {
  let e, t;
  return {
    c() {
      e = Me("svg"), t = Me("path"), b(t, "fill", "#666"), b(t, "fill-rule", "evenodd"), b(t, "clip-rule", "evenodd"), b(t, "d", "M22 6.00086C22 3.54932 19.8148 1.6746 17.3918 2.04737L10.3918 3.1243C8.44044 3.4245 7 5.1035 7 7.07778V15.8407C6.54537 15.6248 6.0368 15.5039 5.5 15.5039C3.567 15.5039 2 17.0709 2 19.0039C2 20.9369 3.567 22.5039 5.5 22.5039C7.43296 22.5039 8.99994 20.937 9 19.004V7.07778C9 6.09064 9.72022 5.25114 10.6959 5.10104L17.6959 4.02412C18.9074 3.83773 20 4.77509 20 6.00086V12.8407C19.5454 12.6248 19.0368 12.5039 18.5 12.5039C16.567 12.5039 15 14.0709 15 16.0039C15 17.9369 16.567 19.5039 18.5 19.5039C20.433 19.5039 21.9999 17.937 22 16.004V6.00086ZM20 16.0039C20 15.1755 19.3284 14.5039 18.5 14.5039C17.6716 14.5039 17 15.1755 17 16.0039C17 16.8323 17.6716 17.5039 18.5 17.5039C19.3284 17.5039 19.9999 16.8323 20 16.0039ZM7 19.0039C7 18.1755 6.32843 17.5039 5.5 17.5039C4.67157 17.5039 4 18.1755 4 19.0039C4 19.8323 4.67157 20.5039 5.5 20.5039C6.32839 20.5039 6.99994 19.8323 7 19.0039Z"), b(e, "viewBox", "0 0 24 24"), b(e, "fill", "none"), b(e, "xmlns", "http://www.w3.org/2000/svg"), b(e, "class", "svelte-1yeinpf");
    },
    m(r, i) {
      _(r, e, i), y(e, t);
    },
    p: j,
    d(r) {
      r && x(e);
    }
  };
}
function Wf(n) {
  let e, t, r;
  return {
    c() {
      e = Me("svg"), t = Me("path"), r = Me("path"), b(t, "fill", "#666"), b(t, "fill-rule", "evenodd"), b(t, "clip-rule", "evenodd"), b(t, "d", "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"), b(r, "fill", "#666"), b(r, "d", "M16 12L10 16.3301V7.66987L16 12Z"), b(e, "width", "24"), b(e, "height", "24"), b(e, "viewBox", "0 0 24 24"), b(e, "fill", "none"), b(e, "xmlns", "http://www.w3.org/2000/svg"), b(e, "class", "svelte-1yeinpf");
    },
    m(i, s) {
      _(i, e, s), y(e, t), y(e, r);
    },
    p: j,
    d(i) {
      i && x(e);
    }
  };
}
function Jf(n) {
  let e, t, r;
  return {
    c() {
      e = v("img"), To(e.src, t = /*asset*/
      n[13].download_url) || b(e, "src", t), b(e, "alt", r = /*asset*/
      n[13].name), b(e, "class", "svelte-1yeinpf");
    },
    m(i, s) {
      _(i, e, s);
    },
    p(i, s) {
      s & /*assets*/
      1 && !To(e.src, t = /*asset*/
      i[13].download_url) && b(e, "src", t), s & /*assets*/
      1 && r !== (r = /*asset*/
      i[13].name) && b(e, "alt", r);
    },
    d(i) {
      i && x(e);
    }
  };
}
function zo(n) {
  let e, t, r, i, s, o, l = (
    /*asset*/
    n[13].name + ""
  ), a, c, u, f;
  function d(g, k) {
    return k & /*assets*/
    1 && (r = null), k & /*assets*/
    1 && (i = null), r == null && (r = !!/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(
      /*asset*/
      g[13].name
    )), r ? Jf : (i == null && (i = !!/\.(mp4|webm|ogg|mp3|wav|m4a|aac|oga)$/i.test(
      /*asset*/
      g[13].name
    )), i ? Wf : qf);
  }
  let h = d(n, -1), p = h(n);
  function m() {
    return (
      /*click_handler*/
      n[7](
        /*asset*/
        n[13]
      )
    );
  }
  return {
    c() {
      e = v("div"), t = v("div"), p.c(), s = T(), o = v("div"), a = B(l), c = T(), b(t, "class", "asset svelte-1yeinpf"), b(o, "class", "asset-path svelte-1yeinpf"), b(e, "class", "asset-card svelte-1yeinpf"), oe(
        e,
        "selected",
        /*selected*/
        n[1] === /*asset*/
        n[13].name
      );
    },
    m(g, k) {
      _(g, e, k), y(e, t), p.m(t, null), y(e, s), y(e, o), y(o, a), y(e, c), u || (f = P(e, "click", m), u = !0);
    },
    p(g, k) {
      n = g, h === (h = d(n, k)) && p ? p.p(n, k) : (p.d(1), p = h(n), p && (p.c(), p.m(t, null))), k & /*assets*/
      1 && l !== (l = /*asset*/
      n[13].name + "") && K(a, l), k & /*selected, assets*/
      3 && oe(
        e,
        "selected",
        /*selected*/
        n[1] === /*asset*/
        n[13].name
      );
    },
    d(g) {
      g && x(e), p.d(), u = !1, f();
    }
  };
}
function Kf(n) {
  let e, t, r, i, s, o, l, a, c, u, f, d, h, p, m, g = !/*updating*/
  n[3] && Lo(n);
  const k = [Vf, Hf], w = [];
  function S(O, E) {
    return (
      /*updating*/
      O[3] ? 1 : 0
    );
  }
  return f = S(n), d = w[f] = k[f](n), {
    c() {
      e = v("div"), t = v("a"), r = B("Download"), i = T(), s = v("label"), g && g.c(), o = B(`
        Upload`), l = T(), a = v("button"), a.textContent = "Delete selected", c = T(), u = v("div"), d.c(), b(t, "class", "btn svelte-1yeinpf"), b(t, "download", ""), b(
        t,
        "href",
        /*selected*/
        n[1]
      ), oe(t, "disabled", !/*selected*/
      n[1]), b(s, "class", "btn svelte-1yeinpf"), b(a, "class", "btn danger svelte-1yeinpf"), oe(a, "disabled", !/*selected*/
      n[1]), b(e, "class", "asset-actions svelte-1yeinpf"), b(u, "class", "asset-container svelte-1yeinpf");
    },
    m(O, E) {
      _(O, e, E), y(e, t), y(t, r), y(e, i), y(e, s), g && g.m(s, null), y(s, o), y(e, l), y(e, a), _(O, c, E), _(O, u, E), w[f].m(u, null), h = !0, p || (m = P(
        a,
        "click",
        /*deleteAsset*/
        n[5]
      ), p = !0);
    },
    p(O, [E]) {
      (!h || E & /*selected*/
      2) && b(
        t,
        "href",
        /*selected*/
        O[1]
      ), (!h || E & /*selected*/
      2) && oe(t, "disabled", !/*selected*/
      O[1]), /*updating*/
      O[3] ? g && (g.d(1), g = null) : g ? g.p(O, E) : (g = Lo(O), g.c(), g.m(s, o)), (!h || E & /*selected*/
      2) && oe(a, "disabled", !/*selected*/
      O[1]);
      let N = f;
      f = S(O), f === N ? w[f].p(O, E) : (Mn(), te(w[N], 1, 1, () => {
        w[N] = null;
      }), xn(), d = w[f], d ? d.p(O, E) : (d = w[f] = k[f](O), d.c()), Z(d, 1), d.m(u, null));
    },
    i(O) {
      h || (Z(d), h = !0);
    },
    o(O) {
      te(d), h = !1;
    },
    d(O) {
      O && (x(e), x(c), x(u)), g && g.d(), w[f].d(), p = !1, m();
    }
  };
}
function Uf(n) {
  return new Promise((e, t) => {
    var r = new FileReader();
    r.onload = () => {
      e(r.result);
    }, r.onerror = t, r.readAsDataURL(n);
  });
}
function Gf(n, e, t) {
  let r, i, s, o = [], l = !1, a = { status: null, message: null };
  Js(async () => {
    c();
  });
  async function c() {
    t(3, l = !0);
    try {
      await fetch("/hg-admin/assets").then((m) => m.json()).then((m) => t(0, o = m));
    } catch (m) {
      console.error("Failed to fetch:", m);
    }
    t(3, l = !1);
  }
  async function u() {
    if (i.length === 1) {
      if (s = i[0], s.size > 2e7) {
        console.log("File size is too large. The maximum file size for static resources is 20MB.");
        return;
      } else if (s.size > 5e6) {
        console.log("It is strongly recommended to keep the file size for static resources below 5MB. Do you want to continue with the upload anyways?");
        return;
      }
      f();
    }
  }
  async function f() {
    if (o.some((m) => m.name === s.name))
      console.log("File already exists");
    else {
      let m = await Uf(s), g = m.substring(m.indexOf("base64,") + 7);
      const k = s.name.toLowerCase().trim().replace(/[^\w\s.-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
      t(3, l = !0);
      try {
        a = await fetch("/hg-admin/assets", {
          method: "PUT",
          body: JSON.stringify({ file: k, content: g })
        });
      } catch (w) {
        console.error("Failed to fetch:", w);
      }
      a.status === 200 ? (setTimeout(
        () => {
          c();
        },
        1e3
      ), mn.add({
        type: "success",
        message: `Asset ${k} uploaded successfully.`
      })) : (t(3, l = !1), mn.add({
        type: "error",
        message: `Failed to upload asset ${k}.`
      }));
    }
  }
  async function d() {
    if (r) {
      t(3, l = !0);
      try {
        a = await fetch("/hg-admin/assets", {
          method: "DELETE",
          body: JSON.stringify({ file: r })
        });
      } catch (m) {
        console.error("Failed to fetch:", m);
      }
      a.status === 200 && (t(0, o = o.filter((m) => m.name !== r)), t(1, r = null)), t(3, l = !1);
    }
  }
  function h() {
    i = this.files, t(2, i);
  }
  const p = (m) => {
    t(1, r = r === m.name ? null : m.name);
  };
  return n.$$.update = () => {
    n.$$.dirty & /*assets*/
    1 && console.log(o);
  }, [
    o,
    r,
    i,
    l,
    u,
    d,
    h,
    p
  ];
}
class ec extends Ge {
  constructor(e) {
    super(), Ke(this, e, Gf, Kf, Le, {}, Ff);
  }
}
Ue(ec, {}, [], [], !0);
function Yf(n) {
  pt(n, "svelte-8ibg2q", "h2.svelte-8ibg2q.svelte-8ibg2q{margin:1.5rem 0 1rem;scroll-margin-top:4rem;line-height:1.25;padding-bottom:0.5rem;font-size:1.5rem;font-weight:500}.table-container.svelte-8ibg2q.svelte-8ibg2q{overflow-x:auto}table.svelte-8ibg2q.svelte-8ibg2q{width:100%;background-color:rgb(255, 255, 255);border-spacing:0px;border-collapse:separate;font-size:0.875rem;table-layout:fixed}tr.selected.svelte-8ibg2q.svelte-8ibg2q{background-color:rgb(246, 248, 250)}th.svelte-8ibg2q.svelte-8ibg2q{color:rgb(101, 109, 118);font-weight:600;padding:1rem 1.5rem;text-align:start;white-space:nowrap}.checkbox.svelte-8ibg2q.svelte-8ibg2q{width:2rem}td.checkbox.svelte-8ibg2q.svelte-8ibg2q{padding:1rem 1.5rem}th.svelte-8ibg2q.svelte-8ibg2q,td.svelte-8ibg2q.svelte-8ibg2q{border-bottom:1px solid rgb(208, 215, 222);overflow:hidden}tbody.svelte-8ibg2q a.svelte-8ibg2q{display:flex;width:100%;height:100%;align-items:center;padding:1rem 1.5rem;white-space:nowrap}tbody.svelte-8ibg2q tr.svelte-8ibg2q{transition:all 0.3s ease}tbody.svelte-8ibg2q tr.svelte-8ibg2q:hover{background-color:rgb(246, 248, 250)}.btn-list.svelte-8ibg2q.svelte-8ibg2q{display:flex;justify-content:flex-start;margin-bottom:1rem;gap:1rem}.btn-end.svelte-8ibg2q.svelte-8ibg2q{display:flex;justify-content:flex-end;padding:1rem;gap:1rem}.overlay-backdrop.svelte-8ibg2q.svelte-8ibg2q{align-items:center;background-color:rgba(175,184,193,0.2);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:999}.overlay.svelte-8ibg2q.svelte-8ibg2q{background-color:#fff;border-radius:0.75rem;box-shadow:0 1px 3px rgba(31,35,40,0.12), 0 8px 24px rgba(66,74,83,0.12);display:flex;flex-direction:column;max-height:min(100vh - 2rem, 600px);min-width:192px;opacity:1;white-space:normal;width:min(600px,100vw - 4rem)}modal-dialog.svelte-8ibg2q h2.svelte-8ibg2q{padding:1rem 1rem 1rem 1.5rem;margin:0;line-height:1.5rem;font-weight:500;font-size:1rem;border-bottom:1px solid rgb(208, 215, 222)}");
}
function Bo(n, e, t) {
  const r = n.slice();
  return r[12] = e[t][0], r[13] = e[t][1], r;
}
function jo(n, e, t) {
  const r = n.slice();
  return r[16] = e[t], r;
}
function Fo(n, e, t) {
  const r = n.slice();
  return r[16] = e[t], r;
}
function Ho(n, e, t) {
  const r = n.slice();
  return r[21] = e[t], r;
}
function Vo(n, e, t) {
  const r = n.slice();
  return r[16] = e[t][0], r[21] = e[t][1], r;
}
function qo(n) {
  let e, t, r, i, s = (
    /*config*/
    n[1].title + ""
  ), o, l, a, c, u, f, d, h, p;
  return {
    c() {
      e = v("div"), t = v("modal-dialog"), r = v("h2"), i = B("Are you sure you want to delete the "), o = B(s), l = B(" record?"), a = T(), c = v("div"), u = v("button"), u.textContent = "Cancel", f = T(), d = v("button"), d.textContent = "Delete", b(r, "class", "svelte-8ibg2q"), b(u, "class", "btn"), b(d, "class", "btn danger"), b(c, "class", "btn-end svelte-8ibg2q"), Ja(t, "class", "overlay svelte-8ibg2q"), b(e, "class", "overlay-backdrop svelte-8ibg2q");
    },
    m(m, g) {
      _(m, e, g), y(e, t), y(t, r), y(r, i), y(r, o), y(r, l), y(t, a), y(t, c), y(c, u), y(c, f), y(c, d), h || (p = [
        P(
          u,
          "click",
          /*click_handler_1*/
          n[7]
        ),
        P(
          d,
          "click",
          /*deleteRecords*/
          n[5]
        ),
        P(t, "click", Ws(
          /*click_handler*/
          n[6]
        )),
        P(
          e,
          "click",
          /*click_handler_2*/
          n[8]
        )
      ], h = !0);
    },
    p(m, g) {
      g & /*config*/
      2 && s !== (s = /*config*/
      m[1].title + "") && K(o, s);
    },
    d(m) {
      m && x(e), h = !1, Q(p);
    }
  };
}
function Wo(n) {
  let e, t, r, i, s, o;
  return {
    c() {
      e = v("div"), t = v("button"), t.textContent = "Duplicate", r = T(), i = v("button"), i.textContent = "Delete", b(t, "class", "btn"), b(i, "class", "btn danger"), b(e, "class", "btn-list svelte-8ibg2q");
    },
    m(l, a) {
      _(l, e, a), y(e, t), y(e, r), y(e, i), s || (o = [
        P(t, "click", nd),
        P(
          i,
          "click",
          /*click_handler_4*/
          n[9]
        )
      ], s = !0);
    },
    p: j,
    d(l) {
      l && x(e), s = !1, Q(o);
    }
  };
}
function Zf(n) {
  let e, t = G(Object.values(
    /*config*/
    n[1].fields
  )), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = Jo(Ho(n, t, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = pe();
    },
    m(i, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, s);
      _(i, e, s);
    },
    p(i, s) {
      if (s & /*Object, config*/
      2) {
        t = G(Object.values(
          /*config*/
          i[1].fields
        ));
        let o;
        for (o = 0; o < t.length; o += 1) {
          const l = Ho(i, t, o);
          r[o] ? r[o].p(l, s) : (r[o] = Jo(l), r[o].c(), r[o].m(e.parentNode, e));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
    },
    d(i) {
      i && x(e), Ce(r, i);
    }
  };
}
function Qf(n) {
  let e, t = G(Object.entries(
    /*config*/
    n[1].fields
  )), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = Uo(Vo(n, t, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = pe();
    },
    m(i, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, s);
      _(i, e, s);
    },
    p(i, s) {
      if (s & /*Object, config*/
      2) {
        t = G(Object.entries(
          /*config*/
          i[1].fields
        ));
        let o;
        for (o = 0; o < t.length; o += 1) {
          const l = Vo(i, t, o);
          r[o] ? r[o].p(l, s) : (r[o] = Uo(l), r[o].c(), r[o].m(e.parentNode, e));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
    },
    d(i) {
      i && x(e), Ce(r, i);
    }
  };
}
function Jo(n) {
  let e, t = (
    /*field*/
    n[21].label + ""
  ), r;
  return {
    c() {
      e = v("th"), r = B(t), b(e, "class", "list-heading-item svelte-8ibg2q");
    },
    m(i, s) {
      _(i, e, s), y(e, r);
    },
    p(i, s) {
      s & /*config*/
      2 && t !== (t = /*field*/
      i[21].label + "") && K(r, t);
    },
    d(i) {
      i && x(e);
    }
  };
}
function Ko(n) {
  let e, t = (
    /*field*/
    n[21].label + ""
  ), r;
  return {
    c() {
      e = v("th"), r = B(t), b(e, "class", "list-heading-item svelte-8ibg2q");
    },
    m(i, s) {
      _(i, e, s), y(e, r);
    },
    p(i, s) {
      s & /*config*/
      2 && t !== (t = /*field*/
      i[21].label + "") && K(r, t);
    },
    d(i) {
      i && x(e);
    }
  };
}
function Uo(n) {
  let e = (
    /*config*/
    n[1].listFields.includes(
      /*name*/
      n[16]
    )
  ), t, r = e && Ko(n);
  return {
    c() {
      r && r.c(), t = pe();
    },
    m(i, s) {
      r && r.m(i, s), _(i, t, s);
    },
    p(i, s) {
      s & /*config*/
      2 && (e = /*config*/
      i[1].listFields.includes(
        /*name*/
        i[16]
      )), e ? r ? r.p(i, s) : (r = Ko(i), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(i) {
      i && x(t), r && r.d(i);
    }
  };
}
function Xf(n) {
  let e, t = G(Object.keys(
    /*config*/
    n[1].fields
  )), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = Go(jo(n, t, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = pe();
    },
    m(i, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, s);
      _(i, e, s);
    },
    p(i, s) {
      if (s & /*$collectionId, Object, collection, config*/
      19) {
        t = G(Object.keys(
          /*config*/
          i[1].fields
        ));
        let o;
        for (o = 0; o < t.length; o += 1) {
          const l = jo(i, t, o);
          r[o] ? r[o].p(l, s) : (r[o] = Go(l), r[o].c(), r[o].m(e.parentNode, e));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
    },
    d(i) {
      i && x(e), Ce(r, i);
    }
  };
}
function ed(n) {
  let e, t = G(Object.keys(
    /*config*/
    n[1].fields
  )), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = Zo(Fo(n, t, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = pe();
    },
    m(i, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, s);
      _(i, e, s);
    },
    p(i, s) {
      if (s & /*$collectionId, Object, collection, config*/
      19) {
        t = G(Object.keys(
          /*config*/
          i[1].fields
        ));
        let o;
        for (o = 0; o < t.length; o += 1) {
          const l = Fo(i, t, o);
          r[o] ? r[o].p(l, s) : (r[o] = Zo(l), r[o].c(), r[o].m(e.parentNode, e));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
    },
    d(i) {
      i && x(e), Ce(r, i);
    }
  };
}
function Go(n) {
  let e, t, r = (typeof /*entry*/
  n[13][
    /*name*/
    n[16]
  ] == "string" && /*entry*/
  n[13][
    /*name*/
    n[16]
  ].length > 30 ? (
    /*entry*/
    n[13][
      /*name*/
      n[16]
    ].substring(0, 30) + "..."
  ) : (
    /*entry*/
    n[13][
      /*name*/
      n[16]
    ]
  )) + "", i, s, o;
  return {
    c() {
      e = v("td"), t = v("a"), i = B(r), o = T(), b(t, "class", "list-item svelte-8ibg2q"), b(t, "href", s = "#/content/" + /*$collectionId*/
      n[4] + "/" + /*id*/
      n[12]), b(e, "class", "list-item-item svelte-8ibg2q");
    },
    m(l, a) {
      _(l, e, a), y(e, t), y(t, i), y(e, o);
    },
    p(l, a) {
      a & /*collection, config*/
      3 && r !== (r = (typeof /*entry*/
      l[13][
        /*name*/
        l[16]
      ] == "string" && /*entry*/
      l[13][
        /*name*/
        l[16]
      ].length > 30 ? (
        /*entry*/
        l[13][
          /*name*/
          l[16]
        ].substring(0, 30) + "..."
      ) : (
        /*entry*/
        l[13][
          /*name*/
          l[16]
        ]
      )) + "") && K(i, r), a & /*$collectionId, collection*/
      17 && s !== (s = "#/content/" + /*$collectionId*/
      l[4] + "/" + /*id*/
      l[12]) && b(t, "href", s);
    },
    d(l) {
      l && x(e);
    }
  };
}
function Yo(n) {
  let e, t, r = (typeof /*entry*/
  n[13][
    /*name*/
    n[16]
  ] == "string" && /*entry*/
  n[13][
    /*name*/
    n[16]
  ].length > 30 ? (
    /*entry*/
    n[13][
      /*name*/
      n[16]
    ].substring(0, 30) + "..."
  ) : (
    /*entry*/
    n[13][
      /*name*/
      n[16]
    ]
  )) + "", i, s, o;
  return {
    c() {
      e = v("td"), t = v("a"), i = B(r), o = T(), b(t, "class", "list-item svelte-8ibg2q"), b(t, "href", s = "#/content/" + /*$collectionId*/
      n[4] + "/" + /*id*/
      n[12]), b(e, "class", "list-item-item svelte-8ibg2q");
    },
    m(l, a) {
      _(l, e, a), y(e, t), y(t, i), y(e, o);
    },
    p(l, a) {
      a & /*collection, config*/
      3 && r !== (r = (typeof /*entry*/
      l[13][
        /*name*/
        l[16]
      ] == "string" && /*entry*/
      l[13][
        /*name*/
        l[16]
      ].length > 30 ? (
        /*entry*/
        l[13][
          /*name*/
          l[16]
        ].substring(0, 30) + "..."
      ) : (
        /*entry*/
        l[13][
          /*name*/
          l[16]
        ]
      )) + "") && K(i, r), a & /*$collectionId, collection*/
      17 && s !== (s = "#/content/" + /*$collectionId*/
      l[4] + "/" + /*id*/
      l[12]) && b(t, "href", s);
    },
    d(l) {
      l && x(e);
    }
  };
}
function Zo(n) {
  let e = (
    /*config*/
    n[1].listFields.includes(
      /*name*/
      n[16]
    )
  ), t, r = e && Yo(n);
  return {
    c() {
      r && r.c(), t = pe();
    },
    m(i, s) {
      r && r.m(i, s), _(i, t, s);
    },
    p(i, s) {
      s & /*config*/
      2 && (e = /*config*/
      i[1].listFields.includes(
        /*name*/
        i[16]
      )), e ? r ? r.p(i, s) : (r = Yo(i), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(i) {
      i && x(t), r && r.d(i);
    }
  };
}
function Qo(n) {
  let e, t, r, i, s, o, l, a;
  function c() {
    return (
      /*click_handler_6*/
      n[11](
        /*id*/
        n[12]
      )
    );
  }
  function u(h, p) {
    return (
      /*config*/
      h[1].listFields ? ed : Xf
    );
  }
  let f = u(n), d = f(n);
  return {
    c() {
      e = v("tr"), t = v("td"), r = v("input"), s = T(), d.c(), o = T(), b(r, "type", "checkbox"), r.checked = i = /*selected*/
      n[2].includes(
        /*id*/
        n[12]
      ), b(t, "class", "list-item-item checkbox svelte-8ibg2q"), b(e, "class", "svelte-8ibg2q"), oe(
        e,
        "selected",
        /*selected*/
        n[2].includes(
          /*id*/
          n[12]
        )
      );
    },
    m(h, p) {
      _(h, e, p), y(e, t), y(t, r), y(e, s), d.m(e, null), y(e, o), l || (a = P(t, "click", c), l = !0);
    },
    p(h, p) {
      n = h, p & /*selected, collection*/
      5 && i !== (i = /*selected*/
      n[2].includes(
        /*id*/
        n[12]
      )) && (r.checked = i), f === (f = u(n)) && d ? d.p(n, p) : (d.d(1), d = f(n), d && (d.c(), d.m(e, o))), p & /*selected, Object, collection*/
      5 && oe(
        e,
        "selected",
        /*selected*/
        n[2].includes(
          /*id*/
          n[12]
        )
      );
    },
    d(h) {
      h && x(e), d.d(), l = !1, a();
    }
  };
}
function td(n) {
  let e, t, r = (
    /*config*/
    n[1].title + ""
  ), i, s, o, l, a, c, u, f, d, h, p, m, g, k, w, S = (
    /*deleteModal*/
    n[3] && qo(n)
  ), O = (
    /*selected*/
    n[2].length > 0 && Wo(n)
  );
  function E(L, W) {
    return (
      /*config*/
      L[1].listFields ? Qf : Zf
    );
  }
  let N = E(n), z = N(n), X = G(Object.entries(
    /*collection*/
    n[0]
  )), R = [];
  for (let L = 0; L < X.length; L += 1)
    R[L] = Qo(Bo(n, X, L));
  return {
    c() {
      S && S.c(), e = T(), t = v("h2"), i = B(r), s = T(), O && O.c(), o = T(), l = v("div"), a = v("table"), c = v("thead"), u = v("tr"), f = v("th"), d = v("input"), p = T(), z.c(), m = T(), g = v("tbody");
      for (let L = 0; L < R.length; L += 1)
        R[L].c();
      b(t, "class", "svelte-8ibg2q"), b(d, "type", "checkbox"), d.checked = h = /*selected*/
      n[2].length === Object.keys(
        /*collection*/
        n[0]
      ).length, b(f, "class", "checkbox svelte-8ibg2q"), b(g, "class", "svelte-8ibg2q"), b(a, "cellspacing", "0"), b(a, "cellpadding", "0"), b(a, "class", "svelte-8ibg2q"), b(l, "class", "table-container svelte-8ibg2q");
    },
    m(L, W) {
      S && S.m(L, W), _(L, e, W), _(L, t, W), y(t, i), _(L, s, W), O && O.m(L, W), _(L, o, W), _(L, l, W), y(l, a), y(a, c), y(c, u), y(u, f), y(f, d), y(u, p), z.m(u, null), y(a, m), y(a, g);
      for (let Y = 0; Y < R.length; Y += 1)
        R[Y] && R[Y].m(g, null);
      k || (w = P(
        d,
        "click",
        /*click_handler_5*/
        n[10]
      ), k = !0);
    },
    p(L, [W]) {
      if (/*deleteModal*/
      L[3] ? S ? S.p(L, W) : (S = qo(L), S.c(), S.m(e.parentNode, e)) : S && (S.d(1), S = null), W & /*config*/
      2 && r !== (r = /*config*/
      L[1].title + "") && K(i, r), /*selected*/
      L[2].length > 0 ? O ? O.p(L, W) : (O = Wo(L), O.c(), O.m(o.parentNode, o)) : O && (O.d(1), O = null), W & /*selected, collection*/
      5 && h !== (h = /*selected*/
      L[2].length === Object.keys(
        /*collection*/
        L[0]
      ).length) && (d.checked = h), N === (N = E(L)) && z ? z.p(L, W) : (z.d(1), z = N(L), z && (z.c(), z.m(u, null))), W & /*selected, Object, collection, config, $collectionId*/
      23) {
        X = G(Object.entries(
          /*collection*/
          L[0]
        ));
        let Y;
        for (Y = 0; Y < X.length; Y += 1) {
          const Ne = Bo(L, X, Y);
          R[Y] ? R[Y].p(Ne, W) : (R[Y] = Qo(Ne), R[Y].c(), R[Y].m(g, null));
        }
        for (; Y < R.length; Y += 1)
          R[Y].d(1);
        R.length = X.length;
      }
    },
    i: j,
    o: j,
    d(L) {
      L && (x(e), x(t), x(s), x(o), x(l)), S && S.d(L), O && O.d(L), z.d(), Ce(R, L), k = !1, w();
    }
  };
}
const nd = () => {
};
function rd(n, e, t) {
  let r;
  ne(n, tr, (m) => t(4, r = m));
  let { config: i } = e, { collection: s } = e, o = [], l = !1;
  function a() {
    let m = Object.fromEntries(Object.entries(s).filter(([g, k]) => !o.includes(g)));
    fetch("/hg-admin/collections", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [r]: m })
    }).then((g) => {
      g.status === 200 ? (t(0, s = m), t(2, o = []), t(3, l = !1), mn.update((k) => [
        ...k,
        {
          type: "",
          message: "Record deleted successfully"
        }
      ])) : mn.update((k) => [
        ...k,
        {
          type: "danger",
          message: "Failed to delete record"
        }
      ]);
    });
  }
  function c(m) {
    Ks.call(this, n, m);
  }
  const u = () => t(3, l = !1), f = () => t(3, l = !1), d = () => t(3, l = !0), h = () => {
    o.length === Object.keys(s).length ? t(2, o = []) : t(2, o = Object.keys(s));
  }, p = (m) => {
    let g = o.indexOf(m);
    g > -1 ? t(2, o = o.filter((k, w) => w !== g)) : t(2, o = [...o, m]);
  };
  return n.$$set = (m) => {
    "config" in m && t(1, i = m.config), "collection" in m && t(0, s = m.collection);
  }, [
    s,
    i,
    o,
    l,
    r,
    a,
    c,
    u,
    f,
    d,
    h,
    p
  ];
}
class tc extends Ge {
  constructor(e) {
    super(), Ke(this, e, rd, td, Le, { config: 1, collection: 0 }, Yf);
  }
  get config() {
    return this.$$.ctx[1];
  }
  set config(e) {
    this.$$set({ config: e }), pn();
  }
  get collection() {
    return this.$$.ctx[0];
  }
  set collection(e) {
    this.$$set({ collection: e }), pn();
  }
}
Ue(tc, { config: {}, collection: {} }, [], [], !0);
function fe(n) {
  this.content = n;
}
fe.prototype = {
  constructor: fe,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n)
        return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), s = r.content.slice();
    return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new fe(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new fe(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new fe([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new fe(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(n);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new fe(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = fe.from(n), n.size ? new fe(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = fe.from(n), n.size ? new fe(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = fe.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
fe.from = function(n) {
  if (n instanceof fe)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new fe(e);
};
function nc(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = nc(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function rc(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = rc(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class C {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new C(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new C(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? C.empty : e == 0 && t == this.content.length ? this : new C(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new C(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new C([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new C(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return nc(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return rc(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return or(0, e);
    if (e == this.size)
      return or(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? or(r + 1, o) : or(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return C.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new C(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return C.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new C(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return C.empty;
    if (e instanceof C)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new C([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
C.empty = new C([], 0);
const Fi = { index: 0, offset: 0 };
function or(n, e) {
  return Fi.index = n, Fi.offset = e, Fi;
}
function Mr(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Mr(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Mr(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let U = class bs {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Mr(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return r.create(t.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return bs.none;
    if (e instanceof bs)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
U.none = [];
class xr extends Error {
}
class D {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = sc(this.content, e + this.openStart, t);
    return r && new D(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new D(ic(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return D.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new D(C.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new D(e, r, i);
  }
}
D.empty = new D(C.empty, 0, 0);
function ic(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(ic(s.content, e - i - 1, t - i - 1)));
}
function sc(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = sc(o.content, e - s - 1, t);
  return l && n.replaceChild(i, o.copy(l));
}
function id(n, e, t) {
  if (t.openStart > n.depth)
    throw new xr("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new xr("Inconsistent open depths");
  return oc(n, e, t, 0);
}
function oc(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let o = oc(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return Vt(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = sd(t, n);
      return Vt(s, ac(n, o, l, e, r));
    }
  else
    return Vt(s, Cr(n, e, r));
}
function lc(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new xr("Cannot join " + e.type.name + " onto " + n.type.name);
}
function ys(n, e, t) {
  let r = n.node(t);
  return lc(r, e.node(t)), r;
}
function Ht(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function Rn(n, e, t, r) {
  let i = (e || n).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (Ht(n.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    Ht(i.child(l), r);
  e && e.depth == t && e.textOffset && Ht(e.nodeBefore, r);
}
function Vt(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function ac(n, e, t, r, i) {
  let s = n.depth > i && ys(n, e, i + 1), o = r.depth > i && ys(t, r, i + 1), l = [];
  return Rn(null, n, i, l), s && o && e.index(i) == t.index(i) ? (lc(s, o), Ht(Vt(s, ac(n, e, t, r, i + 1)), l)) : (s && Ht(Vt(s, Cr(n, e, i + 1)), l), Rn(e, t, i, l), o && Ht(Vt(o, Cr(t, r, i + 1)), l)), Rn(r, null, i, l), new C(l);
}
function Cr(n, e, t) {
  let r = [];
  if (Rn(null, n, t, r), n.depth > t) {
    let i = ys(n, e, t + 1);
    Ht(Vt(i, Cr(n, e, t + 1)), r);
  }
  return Rn(e, null, t, r), new C(r);
}
function sd(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(C.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class qn {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return U.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new _r(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new qn(t, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    for (let i = 0; i < Hi.length; i++) {
      let s = Hi[i];
      if (s.pos == t && s.doc == e)
        return s;
    }
    let r = Hi[Vi] = qn.resolve(e, t);
    return Vi = (Vi + 1) % od, r;
  }
}
let Hi = [], Vi = 0, od = 12;
class _r {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const ld = /* @__PURE__ */ Object.create(null);
let qt = class ks {
  /**
  @internal
  */
  constructor(e, t, r, i = U.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || C.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Mr(this.attrs, t || e.defaultAttrs || ld) && U.sameSet(this.marks, r || U.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new ks(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new ks(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return D.empty;
    let i = this.resolve(e), s = this.resolve(t), o = r ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new D(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return id(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return qn.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return qn.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), cc(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = C.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise error when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    let e = U.none;
    for (let t = 0; t < this.marks.length; t++)
      e = this.marks[t].addToSet(e);
    if (!U.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r = null;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = C.fromJSON(e, t.content);
    return e.nodeType(t.type).create(t.attrs, i, r);
  }
};
qt.prototype.text = void 0;
class Tr extends qt {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : cc(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Tr(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Tr(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function cc(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class Kt {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new ad(e, t);
    if (r.next == null)
      return Kt.empty;
    let i = uc(r);
    r.next && r.err("Unexpected trailing text");
    let s = md(pd(i));
    return gd(s, r), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let s = t; i && s < r; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return C.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: f } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(f) == -1) {
          i.push(f);
          let d = s(f, l.concat(u));
          if (d)
            return d;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return s;
    }).join(`
`);
  }
}
Kt.empty = new Kt(!0);
class ad {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function uc(n) {
  let e = [];
  do
    e.push(cd(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function cd(n) {
  let e = [];
  do
    e.push(ud(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function ud(n) {
  let e = hd(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = fd(n, e);
    else
      break;
  return e;
}
function Xo(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function fd(n, e) {
  let t = Xo(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Xo(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function dd(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.groups.indexOf(e) > -1 && i.push(o);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function hd(n) {
  if (n.eat("(")) {
    let e = uc(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = dd(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function pd(n) {
  let e = [[]];
  return i(s(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return r(l, a), i(s(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          i(s(o.expr, a), u), a = u;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            r(a, u), i(s(o.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function fc(n, e) {
  return e - n;
}
function el(n, e) {
  let t = [];
  return r(e), t.sort(fc);
  function r(i) {
    let s = n[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function md(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(el(n, 0));
  function t(r) {
    let i = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        el(n, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let s = e[r.join(",")] = new Kt(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(fc);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function gd(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), r.indexOf(c) == -1 && r.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function dc(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function hc(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function pc(n) {
  let e = /* @__PURE__ */ Object.create(null);
  if (n)
    for (let t in n)
      e[t] = new bd(n[t]);
  return e;
}
let tl = class mc {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = pc(r.attrs), this.defaultAttrs = dc(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Kt.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : hc(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new qt(this, this.computeAttrs(e), C.from(t), U.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = C.from(t), this.checkContent(t), new qt(this, this.computeAttrs(e), t, U.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = C.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(C.empty, !0);
    return s ? new qt(this, e, t.append(s), U.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type with the given attributes.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : U.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => r[s] = new mc(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
class bd {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class mi {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = pc(i.attrs), this.excluded = null;
    let s = dc(this.attrs);
    this.instance = s ? new U(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new U(this, hc(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new mi(s, i++, t, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class yd {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = fe.from(e.nodes), t.marks = fe.from(e.marks || {}), this.nodes = tl.compile(this.spec.nodes, this), this.marks = mi.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      s.contentMatch = r[o] || (r[o] = Kt.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.markSet = l == "_" ? null : l ? nl(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : nl(this, o.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof tl) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Tr(r, r.defaultAttrs, e, U.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return qt.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return U.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function nl(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = n.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
class gn {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [], t.forEach((r) => {
      r.tag ? this.tags.push(r) : r.style && this.styles.push(r);
    }), this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
        return !1;
      let i = e.nodes[r.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new il(this, t, !1);
    return r.addAll(e, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new il(this, t, !0);
    return r.addAll(e, t.from, t.to), D.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (wd(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = sl(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = sl(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new gn(e, gn.schemaRules(e)));
  }
}
const gc = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, kd = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, bc = { ol: !0, ul: !0 }, Or = 1, Er = 2, Pn = 4;
function rl(n, e, t) {
  return e != null ? (e ? Or : 0) | (e === "full" ? Er : 0) : n && n.whitespace == "pre" ? Or | Er : t & ~Pn;
}
class lr {
  constructor(e, t, r, i, s, o, l) {
    this.type = e, this.attrs = t, this.marks = r, this.pendingMarks = i, this.solid = s, this.options = l, this.content = [], this.activeMarks = U.none, this.stashMarks = [], this.match = o || (l & Pn ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(C.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Or)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = C.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(C.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  popFromStashMark(e) {
    for (let t = this.stashMarks.length - 1; t >= 0; t--)
      if (e.eq(this.stashMarks[t]))
        return this.stashMarks.splice(t, 1)[0];
  }
  applyPending(e) {
    for (let t = 0, r = this.pendingMarks; t < r.length; t++) {
      let i = r[t];
      (this.type ? this.type.allowsMarkType(i.type) : Md(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !gc.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class il {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, s, o = rl(null, t.preserveWhitespace, 0) | (r ? Pn : 0);
    i ? s = new lr(i.type, i.attrs, U.none, U.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new lr(null, null, U.none, U.none, !0, null, o) : s = new lr(e.schema.topNodeType, null, U.none, U.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e) {
    e.nodeType == 3 ? this.addTextNode(e) : e.nodeType == 1 && this.addElement(e);
  }
  withStyleRules(e, t) {
    let r = e.getAttribute("style");
    if (!r)
      return t();
    let i = this.readStyles(Sd(r));
    if (!i)
      return;
    let [s, o] = i, l = this.top;
    for (let a = 0; a < o.length; a++)
      this.removePendingMark(o[a], l);
    for (let a = 0; a < s.length; a++)
      this.addPendingMark(s[a]);
    t();
    for (let a = 0; a < s.length; a++)
      this.removePendingMark(s[a], l);
    for (let a = 0; a < o.length; a++)
      this.addPendingMark(o[a]);
  }
  addTextNode(e) {
    let t = e.nodeValue, r = this.top;
    if (r.options & Er || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
      if (r.options & Or)
        r.options & Er ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
      else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], s = e.previousSibling;
        (!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1));
      }
      t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t) {
    let r = e.nodeName.toLowerCase(), i;
    bc.hasOwnProperty(r) && this.parser.normalizeLists && vd(e);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (s ? s.ignore : kd.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
      let o, l = this.top, a = this.needsBlock;
      if (gc.hasOwnProperty(r))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), o = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      s && s.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)), o && this.sync(l), this.needsBlock = a;
    } else
      this.withStyleRules(e, () => {
        this.addElementByRule(e, s, s.consuming === !1 ? i : void 0);
      });
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  // Called for ignored nodes
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(e) {
    let t = U.none, r = U.none;
    for (let i = 0; i < e.length; i += 2)
      for (let s = void 0; ; ) {
        let o = this.parser.matchStyle(e[i], e[i + 1], this, s);
        if (!o)
          break;
        if (o.ignore)
          return null;
        if (o.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((l) => {
          o.clearMark(l) && (r = l.addToSet(r));
        }) : t = this.parser.schema.marks[o.mark].create(o.attrs).addToSet(t), o.consuming === !1)
          s = o;
        else
          break;
      }
    return [t, r];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r) {
    let i, s, o;
    t.node ? (s = this.parser.schema.nodes[t.node], s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : i = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (o = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(o));
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, r);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a);
    }
    i && this.sync(l) && this.open--, o && this.removePendingMark(o, l);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r) {
    let i = t || 0;
    for (let s = t ? e.childNodes[t] : e.firstChild, o = r == null ? null : e.childNodes[r]; s != o; s = s.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(s);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e) {
    let t, r;
    for (let i = this.open; i >= 0; i--) {
      let s = this.nodes[i], o = s.findWrapping(e);
      if (o && (!t || t.length > o.length) && (t = o, r = s, !o.length) || s.solid)
        break;
    }
    if (!t)
      return !1;
    this.sync(r);
    for (let i = 0; i < t.length; i++)
      this.enterInner(t[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let t = this.textblockFromContext();
      t && this.enterInner(t);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let t = this.top;
      t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
      let r = t.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!t.type || t.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
      return t.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r) {
    let i = this.findPlace(e.create(t));
    return i && this.enterInner(e, t, !0, r), i;
  }
  // Open a node of the given type
  enterInner(e, t = null, r = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.applyPending(e), s.match = s.match && s.match.matchType(e);
    let o = rl(e, i, s.options);
    s.options & Pn && s.content.length == 0 && (o |= Pn), this.nodes.push(new lr(e, t, s.activeMarks, s.pendingMarks, r, null, o)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
          if (!u || u.name != c && u.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
  addPendingMark(e) {
    let t = xd(e, this.top.pendingMarks);
    t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, t) {
    for (let r = this.open; r >= 0; r--) {
      let i = this.nodes[r];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let o = i.popFromStashMark(e);
        o && i.type && i.type.allowsMarkType(o.type) && (i.activeMarks = o.addToSet(i.activeMarks));
      }
      if (i == t)
        break;
    }
  }
}
function vd(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && bc.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function wd(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Sd(n) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, t, r = [];
  for (; t = e.exec(n); )
    r.push(t[1], t[2].trim());
  return r;
}
function sl(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function Md(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || s.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
function xd(n, e) {
  for (let t = 0; t < e.length; t++)
    if (n.eq(e[t]))
      return e[t];
}
class nt {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = qi(t).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], u = this.serializeMark(c, o.isInline, t);
          u && (s.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = nt.renderSpec(qi(t), this.nodes[e.type.name](e));
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && nt.renderSpec(qi(r), i(e, t));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(e, t, r = null) {
    if (typeof t == "string")
      return { dom: e.createTextNode(t) };
    if (t.nodeType != null)
      return { dom: t };
    if (t.dom && t.dom.nodeType != null)
      return t;
    let i = t[0], s = i.indexOf(" ");
    s > 0 && (r = i.slice(0, s), i = i.slice(s + 1));
    let o, l = r ? e.createElementNS(r, i) : e.createElement(i), a = t[1], c = 1;
    if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
      c = 2;
      for (let u in a)
        if (a[u] != null) {
          let f = u.indexOf(" ");
          f > 0 ? l.setAttributeNS(u.slice(0, f), u.slice(f + 1), a[u]) : l.setAttribute(u, a[u]);
        }
    }
    for (let u = c; u < t.length; u++) {
      let f = t[u];
      if (f === 0) {
        if (u < t.length - 1 || u > c)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: l, contentDOM: l };
      } else {
        let { dom: d, contentDOM: h } = nt.renderSpec(e, f, r);
        if (l.appendChild(d), h) {
          if (o)
            throw new RangeError("Multiple content holes");
          o = h;
        }
      }
    }
    return { dom: l, contentDOM: o };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new nt(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = ol(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return ol(e.marks);
  }
}
function ol(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function qi(n) {
  return n.document || window.document;
}
const yc = 65535, kc = Math.pow(2, 16);
function Cd(n, e) {
  return n + e * kc;
}
function ll(n) {
  return n & yc;
}
function _d(n) {
  return (n - (n & yc)) / kc;
}
const vc = 1, wc = 2, mr = 4, Sc = 8;
class vs {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Sc) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (vc | mr)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (wc | mr)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & mr) > 0;
  }
}
class Oe {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && Oe.empty)
      return Oe.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = ll(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + _d(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = this.ranges[l + o], f = a + c;
      if (e <= f) {
        let d = c ? e == a ? -1 : e == f ? 1 : t : t, h = a + i + (d < 0 ? 0 : u);
        if (r)
          return h;
        let p = e == (t < 0 ? a : f) ? null : Cd(l / 3, e - a), m = e == a ? wc : e == f ? vc : mr;
        return (t < 0 ? e != a : e != f) && (m |= Sc), new vs(h, m, p);
      }
      i += u - c;
    }
    return r ? e + i : new vs(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = ll(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), s += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Oe(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Oe.empty : new Oe(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Oe.empty = new Oe([]);
class un {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new un(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new un(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new un();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this.maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new vs(e, i, null);
  }
}
const Wi = /* @__PURE__ */ Object.create(null);
class be {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Oe.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Wi[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Wi)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Wi[e] = t, t.prototype.jsonID = e, t;
  }
}
class ie {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new ie(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new ie(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return ie.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof xr)
        return ie.fail(s.message);
      throw s;
    }
  }
}
function Qs(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(Qs(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return C.fromArray(r);
}
class Mt extends be {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new D(Qs(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return ie.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new rt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Mt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Mt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Mt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Mt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
be.jsonID("addMark", Mt);
class rt extends be {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new D(Qs(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return ie.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Mt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new rt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof rt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new rt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new rt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
be.jsonID("removeMark", rt);
class xt extends be {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ie.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return ie.fromReplace(e, this.pos, this.pos + 1, new D(C.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new xt(this.pos, t.marks[i]);
        return new xt(this.pos, this.mark);
      }
    }
    return new bn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new xt(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new xt(t.pos, e.markFromJSON(t.mark));
  }
}
be.jsonID("addNodeMark", xt);
class bn extends be {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ie.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return ie.fromReplace(e, this.pos, this.pos + 1, new D(C.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new xt(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new bn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new bn(t.pos, e.markFromJSON(t.mark));
  }
}
be.jsonID("removeNodeMark", bn);
class le extends be {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && ws(e, this.from, this.to) ? ie.fail("Structure replace would overwrite content") : ie.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Oe([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new le(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new le(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof le) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? D.empty : new D(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new le(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? D.empty : new D(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new le(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new le(t.from, t.to, D.fromJSON(e, t.slice), !!t.structure);
  }
}
be.jsonID("replace", le);
class ae extends be {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (ws(e, this.from, this.gapFrom) || ws(e, this.gapTo, this.to)))
      return ie.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return ie.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? ie.fromReplace(e, this.from, this.to, r) : ie.fail("Content does not fit in gap");
  }
  getMap() {
    return new Oe([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new ae(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), s = e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new ae(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new ae(t.from, t.to, t.gapFrom, t.gapTo, D.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
be.jsonID("replaceAround", ae);
function ws(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function Td(n, e, t, r) {
  let i = [], s = [], o, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let f = a.marks;
    if (!r.isInSet(f) && u.type.allowsMarkType(r.type)) {
      let d = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(f);
      for (let m = 0; m < f.length; m++)
        f[m].isInSet(p) || (o && o.to == d && o.mark.eq(f[m]) ? o.to = h : i.push(o = new rt(d, h, f[m])));
      l && l.to == d ? l.to = h : s.push(l = new Mt(d, h, r));
    }
  }), i.forEach((a) => n.step(a)), s.forEach((a) => n.step(a));
}
function Od(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (r instanceof mi) {
      let c = o.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else
      r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let f = a[u], d;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == s - 1 && f.eq(i[h].style) && (d = p);
        }
        d ? (d.to = c, d.step = s) : i.push({ style: f, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => n.step(new rt(o.from, o.to, o.style)));
}
function Ed(n, e, t, r = t.contentMatch) {
  let i = n.doc.nodeAt(e), s = [], o = e + 1;
  for (let l = 0; l < i.childCount; l++) {
    let a = i.child(l), c = o + a.nodeSize, u = r.matchType(a.type);
    if (!u)
      s.push(new le(o, c, D.empty));
    else {
      r = u;
      for (let f = 0; f < a.marks.length; f++)
        t.allowsMarkType(a.marks[f].type) || n.step(new rt(o, c, a.marks[f]));
      if (a.isText && !t.spec.code) {
        let f, d = /\r?\n|\r/g, h;
        for (; f = d.exec(a.text); )
          h || (h = new D(C.from(t.schema.text(" ", t.allowedMarks(a.marks))), 0, 0)), s.push(new le(o + f.index, o + f.index + f[0].length, h));
      }
    }
    o = c;
  }
  if (!r.validEnd) {
    let l = r.fillBefore(C.empty, !0);
    n.replace(o, o, new D(l, 0, 0));
  }
  for (let l = s.length - 1; l >= 0; l--)
    n.step(s[l]);
}
function Nd(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function Cn(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), s = n.$from.index(r), o = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(s, o, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !Nd(i, s, o))
      break;
  }
  return null;
}
function Ad(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, u = C.empty, f = 0;
  for (let p = s, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, u = C.from(r.node(p).copy(u)), f++) : a--;
  let d = C.empty, h = 0;
  for (let p = s, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, d = C.from(i.node(p).copy(d)), h++) : c++;
  n.step(new ae(a, c, o, l, new D(u.append(d), f, h), u.size - f, !0));
}
function Xs(n, e, t = null, r = n) {
  let i = Dd(n, e), s = i && Id(r, e);
  return s ? i.map(al).concat({ type: e, attrs: t }).concat(s.map(al)) : null;
}
function al(n) {
  return { type: n, attrs: null };
}
function Dd(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function Id(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Rd(n, e, t) {
  let r = C.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = C.from(t[o].type.create(t[o].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new ae(i, s, i, s, new D(r, 0, 0), t.length, !0));
}
function Pd(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (o.isTextblock && !o.hasMarkup(r, i) && Ld(n.doc, n.mapping.slice(s).map(l), r)) {
      n.clearIncompatible(n.mapping.slice(s).map(l, 1), r);
      let a = n.mapping.slice(s), c = a.map(l, 1), u = a.map(l + o.nodeSize, 1);
      return n.step(new ae(c, u, c + 1, u - 1, new D(C.from(r.create(i, null, o.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function Ld(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function $d(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new ae(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new D(C.from(o), 0, 0), 1, !0));
}
function fn(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let f = i.node(c), d = i.index(c);
    if (f.type.spec.isolating)
      return !1;
    let h = f.content.cutByIndex(d, f.childCount), p = r && r[u + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[u] || f;
    if (!f.canReplace(d + 1, f.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function zd(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = C.empty, o = C.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = C.from(i.node(l).copy(s));
    let u = r && r[c];
    o = C.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o));
  }
  n.step(new le(e, e, new D(s.append(o), t, t), !0));
}
function Dt(n, e) {
  let t = n.resolve(e), r = t.index();
  return Mc(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function Mc(n, e) {
  return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function gi(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && Mc(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function Bd(n, e, t) {
  let r = new le(e - t, e + t, D.empty, !0);
  n.step(r);
}
function jd(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function Fd(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), u = !1;
      if (s == 1)
        u = c.canReplace(a, a, i);
      else {
        let f = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        u = f && c.canReplaceWith(a, a, f[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function bi(n, e, t = e, r = D.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return xc(i, s, r) ? new le(e, t, r) : new Hd(i, s, r).fit();
}
function xc(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class Hd {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = C.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = C.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new D(s, o, l);
    return e > -1 ? new ae(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new le(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = Ji(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, f = null;
          if (t == 1 && (o ? c.matchType(o.type) || (f = c.fillBefore(C.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: f };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: u };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Ji(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new D(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Ji(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new D(En(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new D(En(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: f, type: d } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      f = f.matchFragment(i);
    }
    let h = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = f.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (f = g, u.push(Cc(m.mark(d.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = Nn(this.placed, t, C.from(u)), this.frontier[t].match = f, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < h; m++) {
      let k = g.lastChild;
      this.frontier.push({ type: k.type, match: k.contentMatchAt(k.childCount) }), g = k.content;
    }
    this.unplaced = p ? e == 0 ? D.empty : new D(En(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new D(En(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Ki(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = Ki(e, t, i, r, s);
        if (o) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], u = Ki(e, l, c, a, !0);
            if (!u || u.childCount)
              continue e;
          }
          return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Nn(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Nn(this.placed, this.depth, C.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(C.empty, !0);
    t.childCount && (this.placed = Nn(this.placed, this.frontier.length, t));
  }
}
function En(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(En(n.firstChild.content, e - 1, t)));
}
function Nn(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Nn(n.lastChild.content, e - 1, t)));
}
function Ji(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Cc(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Cc(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(C.empty, !0)))), n.copy(r);
}
function Ki(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !Vd(t, s.content, o) ? l : null;
}
function Vd(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function qd(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function Wd(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (xc(i, s, r))
    return n.step(new le(e, t, r));
  let o = Tc(i, n.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let d = i.depth, h = i.pos - 1; d > 0; d--, h--) {
    let p = i.node(d).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(d) > -1 ? l = d : i.before(d) == h && o.splice(1, 0, -d);
  }
  let a = o.indexOf(l), c = [], u = r.openStart;
  for (let d = r.content, h = 0; ; h++) {
    let p = d.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    d = p.content;
  }
  for (let d = u - 1; d >= 0; d--) {
    let h = c[d], p = qd(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      u = d;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let d = r.openStart; d >= 0; d--) {
    let h = (d + u + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length], k = !0;
        g < 0 && (k = !1, g = -g);
        let w = i.node(g - 1), S = i.index(g - 1);
        if (w.canReplaceWith(S, S, p.type, p.marks))
          return n.replace(i.before(g), k ? s.after(g) : t, new D(_c(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let f = n.steps.length;
  for (let d = o.length - 1; d >= 0 && (n.replace(e, t, r), !(n.steps.length > f)); d--) {
    let h = o[d];
    h < 0 || (e = i.before(h), t = s.after(h));
  }
}
function _c(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(_c(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(n).append(n);
    n = o.append(s.matchFragment(o).fillBefore(C.empty, !0));
  }
  return n;
}
function Jd(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = jd(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new D(C.from(r), 0, 0));
}
function Kd(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = Tc(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o)
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function Tc(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class dn extends be {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ie.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return ie.fromReplace(e, this.pos, this.pos + 1, new D(C.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return Oe.empty;
  }
  invert(e) {
    return new dn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new dn(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new dn(t.pos, t.attr, t.value);
  }
}
be.jsonID("attr", dn);
class Wn extends be {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return ie.ok(r);
  }
  getMap() {
    return Oe.empty;
  }
  invert(e) {
    return new Wn(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Wn(t.attr, t.value);
  }
}
be.jsonID("docAttr", Wn);
let yn = class extends Error {
};
yn = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
yn.prototype = Object.create(Error.prototype);
yn.prototype.constructor = yn;
yn.prototype.name = "TransformError";
class Oc {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new un();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new yn(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = D.empty) {
    let i = bi(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new D(C.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, D.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return Wd(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return Jd(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return Kd(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Ad(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Bd(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Rd(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return Pd(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return $d(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new dn(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new Wn(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new xt(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof U)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new bn(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, r) {
    return zd(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return Td(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return Od(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return Ed(this, e, t, r), this;
  }
}
const Ui = /* @__PURE__ */ Object.create(null);
class q {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new Ud(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = D.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(s);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? D.empty : t), l == 0 && fl(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(r), c = a.map(o.pos), u = a.map(l.pos);
      s ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), fl(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new V(e) : nn(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? nn(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : nn(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new qe(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return nn(e, e, 0, 0, 1) || new qe(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return nn(e, e, e.content.size, e.childCount, -1) || new qe(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Ui[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in Ui)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Ui[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return V.between(this.$anchor, this.$head).getBookmark();
  }
}
q.prototype.visible = !0;
class Ud {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let cl = !1;
function ul(n) {
  !cl && !n.parent.inlineContent && (cl = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class V extends q {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    ul(e), ul(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return q.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new V(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = D.empty) {
    if (super.replace(e, t), t == D.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof V && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new yi(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new V(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = q.findFrom(t, r, !0) || q.findFrom(t, -r, !0);
      if (s)
        t = s.$head;
      else
        return q.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (q.findFrom(e, -r, !0) || q.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new V(e, t);
  }
}
q.jsonID("text", V);
class yi {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new yi(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return V.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class $ extends q {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return r ? q.near(s) : new $(s);
  }
  content() {
    return new D(C.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof $ && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new eo(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new $(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new $(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
$.prototype.visible = !1;
q.jsonID("node", $);
class eo {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new yi(r, r) : new eo(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && $.isSelectable(r) ? new $(t) : q.near(t);
  }
}
class qe extends q {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = D.empty) {
    if (t == D.empty) {
      e.delete(0, e.doc.content.size);
      let r = q.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new qe(e);
  }
  map(e) {
    return new qe(e);
  }
  eq(e) {
    return e instanceof qe;
  }
  getBookmark() {
    return Gd;
  }
}
q.jsonID("all", qe);
const Gd = {
  map() {
    return this;
  },
  resolve(n) {
    return new qe(n);
  }
};
function nn(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return V.create(n, t);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && $.isSelectable(l))
        return $.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = nn(n, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function fl(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof le || i instanceof ae))
    return;
  let s = n.mapping.maps[r], o;
  s.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), n.setSelection(q.near(n.doc.resolve(o), t));
}
const dl = 1, ar = 2, hl = 4;
class Yd extends Oc {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | dl) & ~ar, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & dl) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= ar, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return U.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & ar) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~ar, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || U.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(t);
        s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, s)), this.selection.empty || this.setSelection(q.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= hl, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & hl) > 0;
  }
}
function pl(n, e) {
  return !e || !n ? n : n.bind(e);
}
class An {
  constructor(e, t, r) {
    this.name = e, this.init = pl(t.init, r), this.apply = pl(t.apply, r);
  }
}
const Zd = [
  new An("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new An("selection", {
    init(n, e) {
      return n.selection || q.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new An("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new An("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Gi {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = Zd.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new An(r.key, r.spec.state, r));
    });
  }
}
class on {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = i ? i[o].n : 0, c = i ? i[o].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, o)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let f = 0; f < this.config.plugins.length; f++)
                i.push(f < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), s = !0;
          }
          i && (i[o] = { state: r, n: t.length });
        }
      }
      if (!s)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new on(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Yd(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new Gi(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new on(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new Gi(this.schema, e.plugins), r = t.fields, i = new on(t);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Gi(e.schema, e.plugins), s = new on(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = qt.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        s.selection = q.fromJSON(s.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              s[o.name] = c.fromJSON.call(a, e, t[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function Ec(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Ec(i, e, {})), t[r] = i;
  }
  return t;
}
class $e {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Ec(e.props, this, this.props), this.key = e.key ? e.key.key : Nc("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Yi = /* @__PURE__ */ Object.create(null);
function Nc(n) {
  return n in Yi ? n + "$" + ++Yi[n] : (Yi[n] = 0, n + "$");
}
class at {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Nc(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ye = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Jn = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let ml = null;
const dt = function(n, e, t) {
  let r = ml || (ml = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, Ut = function(n, e, t, r) {
  return t && (gl(n, e, t, r, -1) || gl(n, e, t, r, 1));
}, Qd = /^(img|br|input|textarea|hr)$/i;
function gl(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : tt(n))) {
      let s = n.parentNode;
      if (!s || s.nodeType != 1 || to(n) || Qd.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = ye(n) + (i < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? tt(n) : 0;
    } else
      return !1;
  }
}
function tt(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Xd(n, e, t) {
  for (let r = e == 0, i = e == tt(n); r || i; ) {
    if (n == t)
      return !0;
    let s = ye(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == tt(n);
  }
}
function to(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const ki = function(n) {
  return n.focusNode && Ut(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Lt(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function eh(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function th(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: r.offset };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: r.startOffset };
  }
}
const st = typeof navigator < "u" ? navigator : null, bl = typeof document < "u" ? document : null, It = st && st.userAgent || "", Ss = /Edge\/(\d+)/.exec(It), Ac = /MSIE \d/.exec(It), Ms = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(It), xe = !!(Ac || Ms || Ss), Tt = Ac ? document.documentMode : Ms ? +Ms[1] : Ss ? +Ss[1] : 0, We = !xe && /gecko\/(\d+)/i.test(It);
We && +(/Firefox\/(\d+)/.exec(It) || [0, 0])[1];
const xs = !xe && /Chrome\/(\d+)/.exec(It), ge = !!xs, nh = xs ? +xs[1] : 0, ke = !xe && !!st && /Apple Computer/.test(st.vendor), kn = ke && (/Mobile\/\w+/.test(It) || !!st && st.maxTouchPoints > 2), Re = kn || (st ? /Mac/.test(st.platform) : !1), rh = st ? /Win/.test(st.platform) : !1, Be = /Android \d/.test(It), nr = !!bl && "webkitFontSmoothing" in bl.documentElement.style, ih = nr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function sh(n) {
  return {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function ut(n, e) {
  return typeof n == "number" ? n : n[e];
}
function oh(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function yl(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, s = n.dom.ownerDocument;
  for (let o = t || n.dom; o; o = Jn(o)) {
    if (o.nodeType != 1)
      continue;
    let l = o, a = l == s.body, c = a ? sh(s) : oh(l), u = 0, f = 0;
    if (e.top < c.top + ut(r, "top") ? f = -(c.top - e.top + ut(i, "top")) : e.bottom > c.bottom - ut(r, "bottom") && (f = e.bottom - e.top > c.bottom - c.top ? e.top + ut(i, "top") - c.top : e.bottom - c.bottom + ut(i, "bottom")), e.left < c.left + ut(r, "left") ? u = -(c.left - e.left + ut(i, "left")) : e.right > c.right - ut(r, "right") && (u = e.right - c.right + ut(i, "right")), u || f)
      if (a)
        s.defaultView.scrollBy(u, f);
      else {
        let d = l.scrollLeft, h = l.scrollTop;
        f && (l.scrollTop += f), u && (l.scrollLeft += u);
        let p = l.scrollLeft - d, m = l.scrollTop - h;
        e = { left: e.left - p, top: e.top - m, right: e.right - p, bottom: e.bottom - m };
      }
    if (a || /^(fixed|sticky)$/.test(getComputedStyle(o).position))
      break;
  }
}
function lh(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(s, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Dc(n.dom) };
}
function Dc(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Jn(r))
    ;
  return e;
}
function ah({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  Ic(t, r == 0 ? 0 : r - e);
}
function Ic(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: s } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let Qt = null;
function ch(n) {
  if (n.setActive)
    return n.setActive();
  if (Qt)
    return n.focus(Qt);
  let e = Dc(n);
  n.focus(Qt == null ? {
    get preventScroll() {
      return Qt = { preventScroll: !0 }, !0;
    }
  } : void 0), Qt || (Qt = !1, Ic(e, 0));
}
function Rc(n, e) {
  let t, r = 2e8, i, s = 0, o = e.top, l = e.top, a, c;
  for (let u = n.firstChild, f = 0; u; u = u.nextSibling, f++) {
    let d;
    if (u.nodeType == 1)
      d = u.getClientRects();
    else if (u.nodeType == 3)
      d = dt(u).getClientRects();
    else
      continue;
    for (let h = 0; h < d.length; h++) {
      let p = d[h];
      if (p.top <= o && p.bottom >= l) {
        o = Math.max(p.bottom, o), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          t = u, r = m, i = m && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, u.nodeType == 1 && m && (s = f + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (s = f + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? uh(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : Rc(t, i);
}
function uh(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let s = gt(r, 1);
    if (s.top != s.bottom && no(e, s))
      return { node: n, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function no(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function fh(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function dh(n, e, t) {
  let { node: r, offset: i } = Rc(e, t), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, s);
}
function hh(n, e, t, r) {
  let i = -1;
  for (let s = e, o = !1; s != n.dom; ) {
    let l = n.docView.nearestDesc(s, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent && !o || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && !o && (o = !0, a.left > r.left || a.top > r.top ? i = l.posBefore : (a.right < r.left || a.bottom < r.top) && (i = l.posAfter)), !l.contentDOM && i < 0 && !l.node.isText)
        return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    s = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function Pc(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let o = n.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (no(e, c))
            return Pc(o, e, c);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return n;
}
function ph(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, s = th(t, e.left, e.top);
  s && ({ node: r, offset: i } = s);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect();
    if (!no(e, c) || (o = Pc(n.dom, e, c), !o))
      return null;
  }
  if (ke)
    for (let c = o; r && c; c = Jn(c))
      c.draggable && (r = void 0);
  if (o = fh(o, e), r) {
    if (We && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let u = r.childNodes[i], f;
      u.nodeName == "IMG" && (f = u.getBoundingClientRect()).right <= e.left && f.bottom > e.top && i++;
    }
    let c;
    nr && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = hh(n, r, i, e));
  }
  l == null && (l = dh(n, o, e));
  let a = n.docView.nearestDesc(o, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function kl(n) {
  return n.top < n.bottom || n.left < n.right;
}
function gt(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (kl(r))
      return r;
  }
  return Array.prototype.find.call(t, kl) || n.getBoundingClientRect();
}
const mh = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Lc(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = nr || We;
  if (r.nodeType == 3)
    if (o && (mh.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = gt(dt(r, i, i), t);
      if (We && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = gt(dt(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let u = gt(dt(r, i, i + 1), -1);
          if (u.top != a.top)
            return On(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, u = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, On(gt(dt(r, a, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == tt(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return Zi(a.getBoundingClientRect(), !1);
    }
    if (s == null && i < tt(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return Zi(a.getBoundingClientRect(), !0);
    }
    return Zi(r.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == tt(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? dt(a, tt(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return On(gt(c, 1), !1);
  }
  if (s == null && i < tt(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? dt(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return On(gt(c, -1), !0);
  }
  return On(gt(r.nodeType == 3 ? dt(r) : r, -t), t >= 0);
}
function On(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function Zi(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function $c(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function gh(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return $c(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.contentDOM || l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = Lc(n, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = dt(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const bh = /[\u0590-\u08ac]/;
function yh(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, o = i == r.parent.content.size, l = n.domSelection();
  return !bh.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : $c(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: f } = n.domSelectionRange(), d = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: m } = n.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(u, f), a && (a != u || c != f) && l.extend && l.extend(a, c);
    } catch {
    }
    return d != null && (l.caretBidiLevel = d), g;
  });
}
let vl = null, wl = null, Sl = !1;
function kh(n, e, t) {
  return vl == e && wl == t ? Sl : (vl = e, wl = t, Sl = t == "up" || t == "down" ? gh(n, e, t) : yh(n, e, t));
}
const Pe = 0, Ml = 1, zt = 2, ot = 3;
class rr {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Pe, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > ye(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!t || s.node))
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.size;
      if (l > e || o instanceof Bc) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof zc && s.side >= 0; r--)
      ;
    if (t <= 0) {
      let s, o = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? ye(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? ye(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (i == -1 && e <= c) {
        let u = o + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = o;
        for (let f = l; f > 0; f--) {
          let d = this.children[f - 1];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
            i = ye(d.dom) + 1;
            break;
          }
          e -= d.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let f = this.children[u];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
            s = ye(f.dom);
            break;
          }
          t += f.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t), o = Math.max(e, t);
    for (let d = 0, h = 0; d < this.children.length; d++) {
      let p = this.children[d], m = h + p.size;
      if (s > h && o < m)
        return p.setSelection(e - h - p.border, t - h - p.border, r, i);
      h = m;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.getSelection(), u = !1;
    if ((We || ke) && e == t) {
      let { node: d, offset: h } = l;
      if (d.nodeType == 3) {
        if (u = !!(h && d.nodeValue[h - 1] == `
`), u && h == d.nodeValue.length)
          for (let p = d, m; p; p = p.parentNode) {
            if (m = p.nextSibling) {
              m.nodeName == "BR" && (l = a = { node: m.parentNode, offset: ye(m) + 1 });
              break;
            }
            let g = p.pmViewDesc;
            if (g && g.node && g.node.isBlock)
              break;
          }
      } else {
        let p = d.childNodes[h - 1];
        u = p && (p.nodeName == "BR" || p.contentEditable == "false");
      }
    }
    if (We && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
      let d = c.focusNode.childNodes[c.focusOffset];
      d && d.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && ke) && Ut(l.node, l.offset, c.anchorNode, c.anchorOffset) && Ut(a.node, a.offset, c.focusNode, c.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == t) && !u) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > t) {
        let h = l;
        l = a, a = h;
      }
      let d = document.createRange();
      d.setEnd(a.node, a.offset), d.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(d);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = r + s.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + s.border, a = o - s.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? zt : Ml, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = ot : s.markDirty(e - l, t - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? zt : ot;
      }
      r = o;
    }
    this.dirty = zt;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? zt : Ml;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
}
class zc extends rr {
  constructor(e, t, r, i) {
    let s, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == Pe && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class vh extends rr {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Gt extends rr {
  constructor(e, t, r, i) {
    super(e, [], r, i), this.mark = t;
  }
  static create(e, t, r, i) {
    let s = i.nodeViews[t.type.name], o = s && s(t, i, r);
    return (!o || !o.dom) && (o = nt.renderSpec(document, t.type.spec.toDOM(t, r))), new Gt(e, t, o.dom, o.contentDOM || o.dom);
  }
  parseRule() {
    return this.dirty & ot || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != ot && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Pe) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Pe;
    }
  }
  slice(e, t, r) {
    let i = Gt.create(this.parent, this.mark, !0, r), s = this.children, o = this.size;
    t < o && (s = Ts(s, t, o, r)), e > 0 && (s = Ts(s, 0, e, r));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
}
class Ot extends rr {
  constructor(e, t, r, i, s, o, l, a, c) {
    super(e, [], s, o), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, s, o) {
    let l = s.nodeViews[t.type.name], a, c = l && l(t, s, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), u = c && c.dom, f = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      u || ({ dom: u, contentDOM: f } = nt.renderSpec(document, t.type.spec.toDOM(t)));
    !f && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let d = u;
    return u = Hc(u, r, t), c ? a = new wh(e, t, r, i, u, f || null, d, c, s, o + 1) : t.isText ? new vi(e, t, r, i, u, d, s) : new Ot(e, t, r, i, u, f || null, d, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => C.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == Pe && e.eq(this.node) && _s(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, a = new Mh(this, o && o.node, e);
    _h(this.node, this.innerDeco, (c, u, f) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !f && a.syncToMarks(u == this.node.childCount ? U.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i);
    }, (c, u, f, d) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, u, f, d) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, u, f, h, e) || a.updateNextNode(c, u, f, e, d, i) || a.addNode(c, u, f, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == zt) && (o && this.protectLocalComposition(e, o), jc(this.contentDOM, this.children, e), kn && Th(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof V) || r < t || i > t + this.node.content.size)
      return null;
    let s = e.domSelectionRange(), o = Oh(s.focusNode, s.focusOffset);
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let l = o.nodeValue, a = Eh(this.node.content, l, r - t, i - t);
      return a < 0 ? null : { node: o, pos: a, text: l };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new vh(this, s, t, i);
    e.input.compositionNodes.push(o), this.children = Ts(this.children, r, r + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == ot || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Pe;
  }
  updateOuterDeco(e) {
    if (_s(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Fc(this.dom, this.nodeDOM, Cs(this.outerDeco, this.node, t), Cs(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable");
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function xl(n, e, t, r, i) {
  Hc(r, e, n);
  let s = new Ot(void 0, n, e, t, r, r, r, i, 0);
  return s.contentDOM && s.updateChildren(i, 0), s;
}
class vi extends Ot {
  constructor(e, t, r, i, s, o, l) {
    super(e, t, r, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == ot || this.dirty != Pe && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Pe || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Pe, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new vi(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = ot);
  }
  get domAtom() {
    return !1;
  }
}
class Bc extends rr {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Pe && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class wh extends Ot {
  constructor(e, t, r, i, s, o, l, a, c, u) {
    super(e, t, r, i, s, o, l, c, u), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == ot)
      return !1;
    if (this.spec.update) {
      let s = this.spec.update(e, t, r);
      return s && this.updateInner(e, t, r, i), s;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function jc(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = Cl(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (o instanceof Gt) {
      let a = r ? r.previousSibling : n.lastChild;
      jc(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Cl(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const Ln = function(n) {
  n && (this.nodeName = n);
};
Ln.prototype = /* @__PURE__ */ Object.create(null);
const Bt = [new Ln()];
function Cs(n, e, t) {
  if (n.length == 0)
    return Bt;
  let r = t ? Bt[0] : new Ln(), i = [r];
  for (let s = 0; s < n.length; s++) {
    let o = n[s].type.attrs;
    if (o) {
      o.nodeName && i.push(r = new Ln(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && i.length == 1 && i.push(r = new Ln(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function Fc(n, e, t, r) {
  if (t == Bt && r == Bt)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s], l = t[s];
    if (s) {
      let a;
      l && l.nodeName == o.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = Bt[0]), i = a;
    }
    Sh(i, l || Bt[0], o);
  }
  return i;
}
function Sh(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function Hc(n, e, t) {
  return Fc(n, n, Bt, Cs(e, t, n.nodeType != 1));
}
function _s(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Cl(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Mh {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = xh(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, s = this.stack.length >> 1, o = Math.min(s, e.length);
    for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < s; )
      this.destroyRest(), this.top.dirty = Pe, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = Gt.create(this.top, e[s], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, s) {
    let o = this.top.children[i];
    return o.dirty == ot && o.dom == o.contentDOM && (o.dirty = zt), o.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, s, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof Ot) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != s)
          return !1;
        let u = a.dom, f, d = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != ot && _s(t, a.outerDeco));
        if (!d && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0;
        if (!d && (f = this.recreateWrapper(a, e, t, r, i, o)))
          return this.top.children[this.index] = f, f.contentDOM && (f.dirty = zt, f.updateChildren(i, o + 1), f.dirty = Pe), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, s, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content))
      return null;
    let l = Ot.create(this.top, t, r, i, s, o);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, s) {
    let o = Ot.create(this.top, e, t, r, i, s);
    o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new zc(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Gt; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof vi) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((ke || ge) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Bc(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function xh(n, e) {
  let t = e, r = t.children.length, i = n.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e:
    for (; i > 0; ) {
      let l;
      for (; ; )
        if (r) {
          let c = t.children[r - 1];
          if (c instanceof Gt)
            t = c, r = c.children.length;
          else {
            l = c, r--;
            break;
          }
        } else {
          if (t == e)
            break e;
          r = t.parent.children.indexOf(t), t = t.parent;
        }
      let a = l.node;
      if (a) {
        if (a != n.child(i - 1))
          break;
        --i, s.set(l, i), o.push(l);
      }
    }
  return { index: i, matched: s, matches: o.reverse() };
}
function Ch(n, e) {
  return n.type.side - e.type.side;
}
function _h(n, e, t, r) {
  let i = e.locals(n), s = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, i, e.forChild(s, u), c), s += u.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let u, f;
    for (; o < i.length && i[o].to == s; ) {
      let g = i[o++];
      g.widget && (u ? (f || (f = [u])).push(g) : u = g);
    }
    if (u)
      if (f) {
        f.sort(Ch);
        for (let g = 0; g < f.length; g++)
          t(f[g], c, !!a);
      } else
        t(u, c, !!a);
    let d, h;
    if (a)
      h = -1, d = a, a = null;
    else if (c < n.childCount)
      h = c, d = n.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= s && l.splice(g--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let p = s + d.nodeSize;
    if (d.isText) {
      let g = p;
      o < i.length && i[o].from < g && (g = i[o].from);
      for (let k = 0; k < l.length; k++)
        l[k].to < g && (g = l[k].to);
      g < p && (a = d.cut(g - s), d = d.cut(0, g - s), p = g, h = -1);
    } else
      for (; o < i.length && i[o].to < p; )
        o++;
    let m = d.isInline && !d.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(d, m, e.forChild(s, d), h), s = p;
  }
}
function Th(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function Oh(n, e) {
  for (; ; ) {
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.childNodes.length > e && n.childNodes[e].nodeType == 3)
        return n.childNodes[e];
      n = n.childNodes[e - 1], e = tt(n);
    } else if (n.nodeType == 1 && e < n.childNodes.length)
      n = n.childNodes[e], e = 0;
    else
      return null;
  }
}
function Eh(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
    let o = n.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (s += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (s >= t) {
      if (s >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Ts(n, e, t, r, i) {
  let s = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let a = n[o], c = l, u = l += a.size;
    c >= t || u <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), u > t && s.push(a.slice(t - c, a.size, r)));
  }
  return s;
}
function ro(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (ki(t)) {
    for (a = l; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && $.isSelectable(u) && i.parent && !(u.isInline && Xd(t.focusNode, t.focusOffset, i.dom))) {
      let f = i.posBefore;
      c = new $(o == f ? l : r.resolve(f));
    }
  } else {
    let u = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (u < 0)
      return null;
    a = r.resolve(u);
  }
  if (!c) {
    let u = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
    c = io(n, a, l, u);
  }
  return c;
}
function Vc(n) {
  return n.editable ? n.hasFocus() : Wc(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function ht(n, e = !1) {
  let t = n.state.selection;
  if (qc(n, t), !!Vc(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && ge) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Ut(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Ah(n);
    else {
      let { anchor: r, head: i } = t, s, o;
      _l && !(t instanceof V) && (t.$from.parent.inlineContent || (s = Tl(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Tl(n, t.to))), n.docView.setSelection(r, i, n.root, e), _l && (s && Ol(s), o && Ol(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Nh(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const _l = ke || ge && nh < 63;
function Tl(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (ke && i && i.contentEditable == "false")
    return Qi(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return Qi(i);
    if (s)
      return Qi(s);
  }
}
function Qi(n) {
  return n.contentEditable = "true", ke && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Ol(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Nh(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Vc(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Ah(n) {
  let e = n.domSelection(), t = document.createRange(), r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setEnd(r.parentNode, ye(r) + 1) : t.setEnd(r, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && xe && Tt <= 11 && (r.disabled = !0, r.disabled = !1);
}
function qc(n, e) {
  if (e instanceof $) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (El(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    El(n);
}
function El(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function io(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || V.between(e, t, r);
}
function Nl(n) {
  return n.editable && !n.hasFocus() ? !1 : Wc(n);
}
function Wc(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Dh(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Ut(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Os(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && q.findFrom(s, e);
}
function bt(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Al(n, e, t) {
  let r = n.state.selection;
  if (r instanceof V)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!s || s.isText || !s.isLeaf)
        return !1;
      let o = n.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
      return bt(n, new V(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Os(n.state, e);
        return i && i instanceof $ ? bt(n, i) : !1;
      } else if (!(Re && t.indexOf("m") > -1)) {
        let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
        if (!s || s.isText)
          return !1;
        let l = e < 0 ? i.pos - s.nodeSize : i.pos;
        return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? $.isSelectable(s) ? bt(n, new $(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : nr ? bt(n, new V(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    } else
      return !1;
  else {
    if (r instanceof $ && r.node.isInline)
      return bt(n, new V(e > 0 ? r.$to : r.$from));
    {
      let i = Os(n.state, e);
      return i ? bt(n, i) : !1;
    }
  }
}
function Nr(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function $n(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Xt(n, e) {
  return e < 0 ? Ih(n) : Rh(n);
}
function Ih(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (We && t.nodeType == 1 && r < Nr(t) && $n(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if ($n(l, -1))
          i = t, s = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Jc(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && $n(l, -1); )
          i = t.parentNode, s = ye(l), l = l.previousSibling;
        if (l)
          t = l, r = Nr(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Es(n, t, r) : i && Es(n, i, s);
}
function Rh(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Nr(t), s, o;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if ($n(l, 1))
        s = t, o = ++r;
      else
        break;
    } else {
      if (Jc(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && $n(l, 1); )
          s = l.parentNode, o = ye(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = Nr(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && Es(n, s, o);
}
function Jc(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Ph(n, e) {
  for (; n && e == n.childNodes.length && !to(n); )
    e = ye(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function Lh(n, e) {
  for (; n && !e && !to(n); )
    e = ye(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Es(n, e, t) {
  if (e.nodeType != 3) {
    let s, o;
    (o = Ph(e, t)) ? (e = o, t = 0) : (s = Lh(e, t)) && (e = s, t = s.nodeValue.length);
  }
  let r = n.domSelection();
  if (ki(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && ht(n);
  }, 50);
}
function Dl(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(ge || rh) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let s = n.coordsAtPos(e - 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let s = n.coordsAtPos(e + 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Il(n, e, t) {
  let r = n.state.selection;
  if (r instanceof V && !r.empty || t.indexOf("s") > -1 || Re && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Os(n.state, e);
    if (o && o instanceof $)
      return bt(n, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof qe ? q.near(o, e) : q.findFrom(o, e);
    return l ? bt(n, l) : !1;
  }
  return !1;
}
function Rl(n, e) {
  if (!(n.state.selection instanceof V))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function Pl(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function $h(n) {
  if (!ke || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Pl(n, r, "true"), setTimeout(() => Pl(n, r, "false"), 20);
  }
  return !1;
}
function zh(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Bh(n, e) {
  let t = e.keyCode, r = zh(e);
  if (t == 8 || Re && t == 72 && r == "c")
    return Rl(n, -1) || Xt(n, -1);
  if (t == 46 && !e.shiftKey || Re && t == 68 && r == "c")
    return Rl(n, 1) || Xt(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || Re && t == 66 && r == "c") {
    let i = t == 37 ? Dl(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Al(n, i, r) || Xt(n, i);
  } else if (t == 39 || Re && t == 70 && r == "c") {
    let i = t == 39 ? Dl(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Al(n, i, r) || Xt(n, i);
  } else {
    if (t == 38 || Re && t == 80 && r == "c")
      return Il(n, -1, r) || Xt(n, -1);
    if (t == 40 || Re && t == 78 && r == "c")
      return $h(n) || Il(n, 1, r) || Xt(n, 1);
    if (r == (Re ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function Kc(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let o = n.someProp("clipboardSerializer") || nt.fromSchema(n.state.schema), l = Xc(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, f = 0;
  for (; c && c.nodeType == 1 && (u = Qc[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = l.createElement(u[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), f++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${f ? ` -${f}` : ""} ${JSON.stringify(t)}`);
  let d = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: d };
}
function Uc(n, e, t, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = e && (r || s || !t);
  if (a) {
    if (n.someProp("transformPastedText", (d) => {
      e = d(e, s || r, n);
    }), s)
      return e ? new D(C.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : D.empty;
    let f = n.someProp("clipboardTextParser", (d) => d(e, i, r, n));
    if (f)
      l = f;
    else {
      let d = i.marks(), { schema: h } = n.state, p = nt.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = o.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, d)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (f) => {
      t = f(t, n);
    }), o = Hh(t), nr && Vh(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let f = +u[3]; f > 0; f--) {
      let d = o.firstChild;
      for (; d && d.nodeType != 1; )
        d = d.nextSibling;
      if (!d)
        break;
      o = d;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || gn.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(d) {
      return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !jh.test(d.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = qh(Ll(l, +u[1], +u[2]), u[4]);
  else if (l = D.maxOpen(Fh(l.content, i), !0), l.openStart || l.openEnd) {
    let f = 0, d = 0;
    for (let h = l.content.firstChild; f < l.openStart && !h.type.spec.isolating; f++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; d < l.openEnd && !h.type.spec.isolating; d++, h = h.lastChild)
      ;
    l = Ll(l, f, d);
  }
  return n.someProp("transformPasted", (f) => {
    l = f(l, n);
  }), l;
}
const jh = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Fh(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && Yc(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = Zc(o[o.length - 1], s.length));
        let u = Gc(l, a);
        o.push(u), i = i.matchType(u.type), s = a;
      }
    }), o)
      return C.from(o);
  }
  return n;
}
function Gc(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, C.from(n));
  return n;
}
function Yc(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = Yc(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(C.from(Gc(t, n, i + 1))));
  }
}
function Zc(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Zc(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(C.empty, !0);
  return n.copy(t.append(r));
}
function Ns(n, e, t, r, i, s) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (s = 0), i < r - 1 && (l = Ns(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(C.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function Ll(n, e, t) {
  return e < n.openStart && (n = new D(Ns(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new D(Ns(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Qc = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let $l = null;
function Xc() {
  return $l || ($l = document.implementation.createHTMLDocument("title"));
}
function Hh(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Xc().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Qc[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = n, i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function Vh(n) {
  let e = n.querySelectorAll(ge ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function qh(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = C.from(a.create(r[l + 1], i)), s++, o++;
  }
  return new D(i, s, o);
}
const ve = {}, we = {}, Wh = { touchstart: !0, touchmove: !0 };
class Jh {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Kh(n) {
  for (let e in ve) {
    let t = ve[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      Gh(n, r) && !so(n, r) && (n.editable || !(r.type in we)) && t(n, r);
    }, Wh[e] ? { passive: !0 } : void 0);
  }
  ke && n.dom.addEventListener("input", () => null), As(n);
}
function Ct(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function Uh(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function As(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => so(n, r));
  });
}
function so(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function Gh(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Yh(n, e) {
  !so(n, e) && ve[e.type] && (n.editable || !(e.type in we)) && ve[e.type](n, e);
}
we.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !tu(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Be && ge && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), kn && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, Lt(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || Bh(n, t) ? t.preventDefault() : Ct(n, "key");
};
we.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
we.keypress = (n, e) => {
  let t = e;
  if (tu(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Re && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof V) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (s) => s(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function wi(n) {
  return { left: n.clientX, top: n.clientY };
}
function Zh(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function oo(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function hn(n, e, t) {
  n.focused || n.focus();
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function Qh(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && $.isSelectable(r) ? (hn(n, new $(t), "pointer"), !0) : !1;
}
function Xh(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof $ && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if ($.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (hn(n, $.create(n.state.doc, i), "pointer"), !0) : !1;
}
function ep(n, e, t, r, i) {
  return oo(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? Xh(n, t) : Qh(n, t));
}
function tp(n, e, t, r) {
  return oo(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function np(n, e, t, r) {
  return oo(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || rp(n, t, r);
}
function rp(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (hn(n, V.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      hn(n, V.create(r, l + 1, l + 1 + o.content.size), "pointer");
    else if ($.isSelectable(o))
      hn(n, $.create(r, l), "pointer");
    else
      continue;
    return !0;
  }
}
function lo(n) {
  return Ar(n);
}
const eu = Re ? "metaKey" : "ctrlKey";
ve.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = lo(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && Zh(t, n.input.lastClick) && !t[eu] && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s };
  let o = n.posAtCoords(wi(t));
  o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new ip(n, o, t, !!r)) : (s == "doubleClick" ? tp : np)(n, o.pos, o.inside, t) ? t.preventDefault() : Ct(n, "pointer"));
};
class ip {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[eu], this.allowDefault = r.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      s = u.parent, o = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof $ && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && We && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Ct(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => ht(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(wi(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Ct(this.view, "pointer") : ep(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    ke && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    ge && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (hn(this.view, q.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : Ct(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Ct(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
ve.touchstart = (n) => {
  n.input.lastTouch = Date.now(), lo(n), Ct(n, "pointer");
};
ve.touchmove = (n) => {
  n.input.lastTouch = Date.now(), Ct(n, "pointer");
};
ve.contextmenu = (n) => lo(n);
function tu(n, e) {
  return n.composing ? !0 : ke && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const sp = Be ? 5e3 : -1;
we.compositionstart = we.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), Ar(n, !0), n.markCursor = null;
    else if (Ar(n), We && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          n.domSelection().collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    n.input.composing = !0;
  }
  nu(n, sp);
};
we.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, nu(n, 20));
};
function nu(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Ar(n), e));
}
function ru(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = op()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function op() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Ar(n, e = !1) {
  if (!(Be && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), ru(n), e || n.docView && n.docView.dirty) {
      let t = ro(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function lp(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Kn = xe && Tt < 15 || kn && ih < 604;
ve.copy = we.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = Kn ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = Kc(n, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : lp(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function ap(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function cp(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Un(n, r.value, null, i, e) : Un(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Un(n, e, t, r, i) {
  let s = Uc(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, s || D.empty)))
    return !0;
  if (!s)
    return !1;
  let o = ap(s), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(s);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function iu(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
we.paste = (n, e) => {
  let t = e;
  if (n.composing && !Be)
    return;
  let r = Kn ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && Un(n, iu(r), r.getData("text/html"), i, t) ? t.preventDefault() : cp(n, t);
};
class su {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const ou = Re ? "altKey" : "ctrlKey";
ve.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords(wi(t)), o;
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof $ ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      o = $.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let u = n.docView.nearestDesc(t.target, !0);
      u && u.node.type.spec.draggable && u != n.docView && (o = $.create(n.state.doc, u.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: a, text: c } = Kc(n, l);
  t.dataTransfer.clearData(), t.dataTransfer.setData(Kn ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Kn || t.dataTransfer.setData("text/plain", c), n.dragging = new su(l, !t[ou], o);
};
ve.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
we.dragover = we.dragenter = (n, e) => e.preventDefault();
we.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(wi(t));
  if (!i)
    return;
  let s = n.state.doc.resolve(i.pos), o = r && r.slice;
  o ? n.someProp("transformPasted", (p) => {
    o = p(o, n);
  }) : o = Uc(n, iu(t.dataTransfer), Kn ? null : t.dataTransfer.getData("text/html"), !1, s);
  let l = !!(r && !t[ou]);
  if (n.someProp("handleDrop", (p) => p(n, t, o || D.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let a = o ? Fd(n.state.doc, s.pos, o) : s.pos;
  a == null && (a = s.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a), f = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, d = c.doc;
  if (f ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o), c.doc.eq(d))
    return;
  let h = c.doc.resolve(u);
  if (f && $.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new $(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, k, w) => p = w), c.setSelection(io(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
ve.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && ht(n);
  }, 20));
};
ve.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
ve.beforeinput = (n, e) => {
  if (ge && Be && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, Lt(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in we)
  ve[n] = we[n];
function Gn(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class Dr {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || Wt, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new Fe(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Dr && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Gn(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Et {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Wt;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new Fe(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Et && Gn(this.attrs, e.attrs) && Gn(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Et;
  }
  destroy() {
  }
}
class ao {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Wt;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new Fe(s.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof ao && Gn(this.attrs, e.attrs) && Gn(this.spec, e.spec);
  }
  destroy() {
  }
}
class Fe {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new Fe(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new Fe(e, e, new Dr(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new Fe(e, t, new Et(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new Fe(e, t, new ao(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Et;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Dr;
  }
}
const rn = [], Wt = {};
class se {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : rn, this.children = t.length ? t : rn;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? Ir(t, e, 0, Wt) : me;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == me || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || Wt);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? up(this.children, o || [], e, t, r, i, s) : o ? new se(o.sort(Jt), rn) : me;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == me ? se.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = au(t, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, Ir(u, l, c + 1, Wt)), s += 3;
      }
    });
    let o = lu(s ? cu(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new se(o.length ? this.local.concat(o).sort(Jt) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == me ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + t, a = r[s + 1] + t;
      for (let u = 0, f; u < e.length; u++)
        (f = e[u]) && f.from > l && f.to < a && (e[u] = null, (o || (o = [])).push(f));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(o, l + 1);
      c != me ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new se(i, r) : me;
  }
  forChild(e, t) {
    if (this == me)
      return this;
    if (t.isLeaf)
      return se.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof Et) {
        let c = Math.max(s, a.from) - s, u = Math.min(o, a.to) - s;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new se(i.sort(Jt), rn);
      return r ? new vt([l, r]) : l;
    }
    return r || me;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof se) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return co(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == me)
      return rn;
    if (e.inlineContent || !this.local.some(Et.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Et || t.push(this.local[r]);
    return t;
  }
}
se.empty = new se([], []);
se.removeOverlap = co;
const me = se.empty;
class vt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, Wt));
    return vt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return se.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != me && (s instanceof vt ? r = r.concat(s.members) : r.push(s));
    }
    return vt.from(r);
  }
  eq(e) {
    if (!(e instanceof vt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? co(r ? t : t.sort(Jt)) : rn;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return me;
      case 1:
        return e[0];
      default:
        return new vt(e.every((t) => t instanceof se) ? e : e.reduce((t, r) => t.concat(r instanceof se ? r : r.members), []));
    }
  }
}
function up(n, e, t, r, i, s, o) {
  let l = n.slice();
  for (let c = 0, u = s; c < t.maps.length; c++) {
    let f = 0;
    t.maps[c].forEach((d, h, p, m) => {
      let g = m - p - (h - d);
      for (let k = 0; k < l.length; k += 3) {
        let w = l[k + 1];
        if (w < 0 || d > w + u - f)
          continue;
        let S = l[k] + u - f;
        h >= S ? l[k + 1] = d <= S ? -2 : -1 : d >= u && g && (l[k] += g, l[k + 1] += g);
      }
      f += g;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + s), f = u - i;
      if (f < 0 || f >= r.content.size) {
        a = !0;
        continue;
      }
      let d = t.map(n[c + 1] + s, -1), h = d - i, { index: p, offset: m } = r.content.findIndex(f), g = r.maybeChild(p);
      if (g && m == f && m + g.nodeSize == h) {
        let k = l[c + 2].mapInner(t, g, u + 1, n[c] + s + 1, o);
        k != me ? (l[c] = f, l[c + 1] = h, l[c + 2] = k) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = fp(l, n, e, t, i, s, o), u = Ir(c, r, 0, o);
    e = u.local;
    for (let f = 0; f < l.length; f += 3)
      l[f + 1] < 0 && (l.splice(f, 3), f -= 3);
    for (let f = 0, d = 0; f < u.children.length; f += 3) {
      let h = u.children[f];
      for (; d < l.length && l[d] < h; )
        d += 3;
      l.splice(d, 0, u.children[f], u.children[f + 1], u.children[f + 2]);
    }
  }
  return new se(e.sort(Jt), l);
}
function lu(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new Fe(i.from + e, i.to + e, i.type));
  }
  return t;
}
function fp(n, e, t, r, i, s, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let f = a.local[u].map(r, i, c);
      f ? t.push(f) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1);
  return t;
}
function au(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, o; s < n.length; s++)
    (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null);
  return i;
}
function cu(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function Ir(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = au(n, l, a + t);
    if (c) {
      s = !0;
      let u = Ir(c, l, t + a + 1, r);
      u != me && i.push(a, a + l.nodeSize, u);
    }
  });
  let o = lu(s ? cu(n) : n, -t).sort(Jt);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new se(o, i) : me;
}
function Jt(n, e) {
  return n.from - e.from || n.to - e.to;
}
function co(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), zl(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), zl(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function zl(n, e, t) {
  for (; e < n.length && Jt(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function Xi(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != me && e.push(r);
  }), n.cursorWrapper && e.push(se.create(n.state.doc, [n.cursorWrapper.deco])), vt.from(e);
}
const dp = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, hp = xe && Tt <= 11;
class pp {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class mp {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new pp(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      xe && Tt <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), hp && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, dp)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Nl(this.view)) {
      if (this.suppressingSelectionUpdates)
        return ht(this.view);
      if (xe && Tt <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Ut(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = Jn(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = Jn(s))
      if (t.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Nl(e) && !this.ignoreSelectionChange(r), s = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let f = this.registerMutation(t[u], a);
        f && (s = s < 0 ? f.from : Math.min(f.from, s), o = o < 0 ? f.to : Math.max(f.to, o), f.typeOver && (l = !0));
      }
    if (We && a.length > 1) {
      let u = a.filter((f) => f.nodeName == "BR");
      if (u.length == 2) {
        let f = u[0], d = u[1];
        f.parentNode && f.parentNode.parentNode == d.parentNode ? d.remove() : f.remove();
      }
    }
    let c = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && ki(r) && (c = ro(e)) && c.eq(q.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, ht(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), gp(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || ht(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++)
        t.push(e.addedNodes[u]);
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (xe && Tt <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: f, nextSibling: d } = e.addedNodes[u];
          (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f), (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d);
        }
      let o = i && i.parentNode == e.target ? ye(i) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = s && s.parentNode == e.target ? ye(s) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : {
        from: r.posAtStart,
        to: r.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: e.target.nodeValue == e.oldValue
      };
  }
}
let Bl = /* @__PURE__ */ new WeakMap(), jl = !1;
function gp(n) {
  if (!Bl.has(n) && (Bl.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = We, jl)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), jl = !0;
  }
}
function bp(n) {
  let e;
  function t(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  n.dom.addEventListener("beforeinput", t, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", t, !0);
  let r = e.startContainer, i = e.startOffset, s = e.endContainer, o = e.endOffset, l = n.domAtPos(n.state.selection.anchor);
  return Ut(l.node, l.offset, s, o) && ([r, i, s, o] = [s, o, r, i]), { anchorNode: r, anchorOffset: i, focusNode: s, focusOffset: o };
}
function yp(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], ki(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), ge && n.input.lastKeyCode === 8)
    for (let g = s; g > i; g--) {
      let k = r.childNodes[g - 1], w = k.pmViewDesc;
      if (k.nodeName == "BR" && !w) {
        s = g;
        break;
      }
      if (!w || w.size)
        break;
    }
  let f = n.state.doc, d = n.someProp("domParser") || gn.fromSchema(n.state.schema), h = f.resolve(o), p = null, m = d.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: kp,
    context: h
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, k = c[1] && c[1].pos;
    k == null && (k = g), p = { anchor: g + o, head: k + o };
  }
  return { doc: m, sel: p, from: o, to: l };
}
function kp(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (ke && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || ke && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const vp = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function wp(n, e, t, r, i) {
  let s = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let R = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, L = ro(n, R);
    if (L && !n.state.selection.eq(L)) {
      if (ge && Be && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (Y) => Y(n, Lt(13, "Enter"))))
        return;
      let W = n.state.tr.setSelection(L);
      R == "pointer" ? W.setMeta("pointer", !0) : R == "key" && W.scrollIntoView(), s && W.setMeta("composition", s), n.dispatch(W);
    }
    return;
  }
  let o = n.state.doc.resolve(e), l = o.sharedDepth(t);
  e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = yp(n, e, t), u = n.state.doc, f = u.slice(c.from, c.to), d, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (d = n.state.selection.to, h = "end") : (d = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = xp(f.content, c.doc.content, c.from, d, h);
  if ((kn && n.input.lastIOSEnter > Date.now() - 225 || Be) && i.some((R) => R.nodeType == 1 && !vp.test(R.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (R) => R(n, Lt(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof V && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let R = Fl(n, n.state.doc, c.sel);
        if (R && !R.eq(n.state.selection)) {
          let L = n.state.tr.setSelection(R);
          s && L.setMeta("composition", s), n.dispatch(L);
        }
      }
      return;
    }
  if (ge && n.cursorWrapper && c.sel && c.sel.anchor == n.cursorWrapper.deco.from && c.sel.head == c.sel.anchor) {
    let R = p.endB - p.start;
    c.sel = { anchor: c.sel.anchor + R, head: c.sel.anchor + R };
  }
  n.input.domChangeCount++, n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof V && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), xe && Tt <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from), g = c.doc.resolveNoCache(p.endB - c.from), k = u.resolve(p.start), w = m.sameParent(g) && m.parent.inlineContent && k.end() >= p.endA, S;
  if ((kn && n.input.lastIOSEnter > Date.now() - 225 && (!w || i.some((R) => R.nodeName == "DIV" || R.nodeName == "P")) || !w && m.pos < c.doc.content.size && !m.sameParent(g) && (S = q.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && S.head == g.pos) && n.someProp("handleKeyDown", (R) => R(n, Lt(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && Mp(u, p.start, p.endA, m, g) && n.someProp("handleKeyDown", (R) => R(n, Lt(8, "Backspace")))) {
    Be && ge && n.domObserver.suppressSelectionUpdates();
    return;
  }
  ge && Be && p.endB == p.start && (n.input.lastAndroidDelete = Date.now()), Be && !w && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(R) {
      return R(n, Lt(13, "Enter"));
    });
  }, 20));
  let O = p.start, E = p.endA, N, z, X;
  if (w) {
    if (m.pos == g.pos)
      xe && Tt <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => ht(n), 20)), N = n.state.tr.delete(O, E), z = u.resolve(p.start).marksAcross(u.resolve(p.endA));
    else if (
      // Adding or removing a mark
      p.endA == p.endB && (X = Sp(m.parent.content.cut(m.parentOffset, g.parentOffset), k.parent.content.cut(k.parentOffset, p.endA - k.start())))
    )
      N = n.state.tr, X.type == "add" ? N.addMark(O, E, X.mark) : N.removeMark(O, E, X.mark);
    else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let R = m.parent.textBetween(m.parentOffset, g.parentOffset);
      if (n.someProp("handleTextInput", (L) => L(n, O, E, R)))
        return;
      N = n.state.tr.insertText(R, O, E);
    }
  }
  if (N || (N = n.state.tr.replace(O, E, c.doc.slice(p.start - c.from, p.endB - c.from))), c.sel) {
    let R = Fl(n, N.doc, c.sel);
    R && !(ge && Be && n.composing && R.empty && (p.start != p.endB || n.input.lastAndroidDelete < Date.now() - 100) && (R.head == O || R.head == N.mapping.map(E) - 1) || xe && R.empty && R.head == O) && N.setSelection(R);
  }
  z && N.ensureMarks(z), s && N.setMeta("composition", s), n.dispatch(N.scrollIntoView());
}
function Fl(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : io(n, e.resolve(t.anchor), e.resolve(t.head));
}
function Sp(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, o, l, a;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < t.length; u++)
    s = t[u].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (C.from(c).eq(n))
    return { mark: l, type: o };
}
function Mp(n, e, t, r, i) {
  if (!r.parent.isTextblock || // The content must have shrunk
  t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
  es(r, !0, !1) < i.pos)
    return !1;
  let s = n.resolve(e);
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = n.resolve(es(s, !0, !0));
  return !o.parent.isTextblock || o.pos > t || es(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function es(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let s = n.node(r).maybeChild(n.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function xp(n, e, t, r, i) {
  let s = n.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    r -= o + a - s;
  }
  if (o < s && n.size < e.size) {
    let a = r <= s && r >= o ? s - r : 0;
    s -= a, s && s < e.size && Hl(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s;
  } else if (l < s) {
    let a = r <= s && r >= l ? s - r : 0;
    s -= a, s && s < n.size && Hl(n.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
function Hl(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class Cp {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Jh(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Kl), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Wl(this), ql(this), this.nodeViews = Jl(this), this.docView = xl(this.state.doc, Vl(this), Xi(this), this.dom, this), this.domObserver = new mp(this, (r, i, s, o) => wp(this, r, i, s, o)), this.domObserver.start(), Kh(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && As(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Kl), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, s = !1, o = !1;
    e.storedMarks && this.composing && (ru(this), o = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = Jl(this);
      Tp(h, this.nodeViews) && (this.nodeViews = h, s = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && As(this), this.editable = Wl(this), ql(this);
    let a = Xi(this), c = Vl(this), u = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", f = s || !this.docView.matchesNode(e.doc, c, a);
    (f || !e.selection.eq(i.selection)) && (o = !0);
    let d = u == "preserve" && o && this.dom.style.overflowAnchor == null && lh(this);
    if (o) {
      this.domObserver.stop();
      let h = f && (xe || ge) && !this.composing && !i.selection.empty && !e.selection.empty && _p(i.selection, e.selection);
      if (f) {
        let p = ge ? this.trackWrites = this.domSelectionRange().focusNode : null;
        (s || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = xl(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Dh(this)) ? ht(this, h) : (qc(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : d && ah(d);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this)))
      if (this.state.selection instanceof $) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && yl(this, t.getBoundingClientRect(), e);
      } else
        yl(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let s = r.from + (this.state.doc.content.size - t.doc.content.size);
      (s > 0 && this.state.doc.nodeAt(s)) == r.node && (i = s);
    }
    this.dragging = new su(e.slice, e.move, i < 0 ? void 0 : $.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (xe) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && ch(this.dom), ht(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return ph(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return Lc(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return kh(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Un(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Un(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Uh(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Xi(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Yh(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    return ke && this.root.nodeType === 11 && eh(this.dom.ownerDocument) == this.dom ? bp(this) : this.domSelection();
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function Vl(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [Fe.node(0, n.state.doc.content.size, e)];
}
function ql(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Fe.widget(n.state.selection.head, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Wl(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function _p(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Jl(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Tp(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Kl(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var At = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Rr = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Op = typeof navigator < "u" && /Mac/.test(navigator.platform), Ep = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var de = 0; de < 10; de++)
  At[48 + de] = At[96 + de] = String(de);
for (var de = 1; de <= 24; de++)
  At[de + 111] = "F" + de;
for (var de = 65; de <= 90; de++)
  At[de] = String.fromCharCode(de + 32), Rr[de] = String.fromCharCode(de);
for (var ts in At)
  Rr.hasOwnProperty(ts) || (Rr[ts] = At[ts]);
function Np(n) {
  var e = Op && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Ep && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Rr : At)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const Ap = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Dp(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      Ap ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function Ip(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Dp(t)] = n[t];
  return e;
}
function ns(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function Rp(n) {
  return new $e({ props: { handleKeyDown: Pp(n) } });
}
function Pp(n) {
  let e = Ip(n);
  return function(t, r) {
    let i = Np(r), s, o = e[ns(i, r)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[ns(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (s = At[r.keyCode]) && s != i) {
        let l = e[ns(s, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const Lp = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function uu(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const $p = (n, e, t) => {
  let r = uu(n, t);
  if (!r)
    return !1;
  let i = uo(r);
  if (!i) {
    let o = r.blockRange(), l = o && Cn(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (!s.type.spec.isolating && pu(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (vn(s, "end") || $.isSelectable(s))) {
    let o = bi(n.doc, r.before(), r.after(), D.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(vn(s, "end") ? q.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : $.create(l.doc, i.pos - s.nodeSize)), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, zp = (n, e, t) => {
  let r = uu(n, t);
  if (!r)
    return !1;
  let i = uo(r);
  return i ? fu(n, i, e) : !1;
}, Bp = (n, e, t) => {
  let r = du(n, t);
  if (!r)
    return !1;
  let i = fo(r);
  return i ? fu(n, i, e) : !1;
};
function fu(n, e, t) {
  let r = e.nodeBefore, i = r, s = e.pos - 1;
  for (; !i.isTextblock; s--) {
    if (i.type.spec.isolating)
      return !1;
    let u = i.lastChild;
    if (!u)
      return !1;
    i = u;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = bi(n.doc, s, a, D.empty);
  if (!c || c.from != s || c instanceof le && c.slice.size >= a - s)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(V.create(u.doc, s)), t(u.scrollIntoView());
  }
  return !0;
}
function vn(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const jp = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    s = uo(r);
  }
  let o = s && s.nodeBefore;
  return !o || !$.isSelectable(o) ? !1 : (e && e(n.tr.setSelection($.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function uo(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function du(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Fp = (n, e, t) => {
  let r = du(n, t);
  if (!r)
    return !1;
  let i = fo(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (pu(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (vn(s, "start") || $.isSelectable(s))) {
    let o = bi(n.doc, r.before(), r.after(), D.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(vn(s, "start") ? q.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : $.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, Hp = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    s = fo(r);
  }
  let o = s && s.nodeAfter;
  return !o || !$.isSelectable(o) ? !1 : (e && e(n.tr.setSelection($.create(n.doc, s.pos)).scrollIntoView()), !0);
};
function fo(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Vp = (n, e) => {
  let t = n.selection, r = t instanceof $, i;
  if (r) {
    if (t.node.isTextblock || !Dt(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = gi(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = n.tr.join(i);
    r && s.setSelection($.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, qp = (n, e) => {
  let t = n.selection, r;
  if (t instanceof $) {
    if (t.node.isTextblock || !Dt(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = gi(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, Wp = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), s = i && Cn(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, Jp = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function hu(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const Kp = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = hu(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(q.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Up = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof qe || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = hu(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(o, s.createAndFill());
    l.setSelection(V.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Gp = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (fn(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && Cn(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, Yp = (n, e) => {
  let { $from: t, to: r } = n.selection, i, s = t.sharedDepth(r);
  return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection($.create(n.doc, i))), !0);
};
function Zp(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || Dt(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function pu(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s, o;
  if (r.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (Zp(n, e, t))
    return !0;
  let l = e.parent.canReplace(e.index(), e.index() + 1);
  if (l && (s = (o = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && o.matchType(s[0] || i.type).validEnd) {
    if (t) {
      let f = e.pos + i.nodeSize, d = C.empty;
      for (let m = s.length - 1; m >= 0; m--)
        d = C.from(s[m].create(null, d));
      d = C.from(r.copy(d));
      let h = n.tr.step(new ae(e.pos - 1, f, e.pos, f, new D(d, 1, 0), s.length, !0)), p = f + 2 * s.length;
      Dt(h.doc, p) && h.join(p), t(h.scrollIntoView());
    }
    return !0;
  }
  let a = q.findFrom(e, 1), c = a && a.$from.blockRange(a.$to), u = c && Cn(c);
  if (u != null && u >= e.depth)
    return t && t(n.tr.lift(c, u).scrollIntoView()), !0;
  if (l && vn(i, "start", !0) && vn(r, "end")) {
    let f = r, d = [];
    for (; d.push(f), !f.isTextblock; )
      f = f.lastChild;
    let h = i, p = 1;
    for (; !h.isTextblock; h = h.firstChild)
      p++;
    if (f.canReplace(f.childCount, f.childCount, h.content)) {
      if (t) {
        let m = C.empty;
        for (let k = d.length - 1; k >= 0; k--)
          m = C.from(d[k].copy(m));
        let g = n.tr.step(new ae(e.pos - d.length, e.pos + i.nodeSize, e.pos + p, e.pos + i.nodeSize - p, new D(m, d.length, 0), 0, !0));
        t(g.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function mu(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(V.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const Qp = mu(-1), Xp = mu(1);
function em(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && Xs(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function Ul(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let u = t.doc.resolve(c), f = u.index();
            i = u.parent.canReplaceWith(f, f + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, n, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function tm(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = !1, a = o;
    if (!o)
      return !1;
    if (o.depth >= 2 && i.node(o.depth - 1).type.compatibleContent(n) && o.startIndex == 0) {
      if (i.index(o.depth - 1) == 0)
        return !1;
      let u = t.doc.resolve(o.start - 2);
      a = new _r(u, u, o.depth), o.endIndex < o.parent.childCount && (o = new _r(i, t.doc.resolve(s.end(o.depth)), o.depth)), l = !0;
    }
    let c = Xs(a, n, e, o);
    return c ? (r && r(nm(t.tr, o, c, l, n).scrollIntoView()), !0) : !1;
  };
}
function nm(n, e, t, r, i) {
  let s = C.empty;
  for (let u = t.length - 1; u >= 0; u--)
    s = C.from(t[u].type.create(t[u].attrs, s));
  n.step(new ae(e.start - (r ? 2 : 0), e.end, e.start, e.end, new D(s, 0, 0), t.length, !0));
  let o = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (o = u + 1);
  let l = t.length - o, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, f = e.endIndex, d = !0; u < f; u++, d = !1)
    !d && fn(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function rm(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == n);
    return s ? t ? r.node(s.depth - 1).type == n ? im(e, t, n, s) : sm(e, t, s) : !0 : !1;
  };
}
function im(n, e, t, r) {
  let i = n.tr, s = r.end, o = r.$to.end(r.depth);
  s < o && (i.step(new ae(s - 1, o, s, o, new D(C.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new _r(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
  const l = Cn(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.mapping.map(s, -1) - 1;
  return Dt(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function sm(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let s = r.doc.resolve(t.start), o = s.nodeAfter;
  if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), u = s.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? C.empty : C.from(i))))
    return !1;
  let f = s.pos, d = f + o.nodeSize;
  return r.step(new ae(f - (l ? 1 : 0), d + (a ? 1 : 0), f + 1, d - 1, new D((l ? C.empty : C.from(i.copy(C.empty))).append(a ? C.empty : C.from(i.copy(C.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function om(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = C.from(c ? n.create() : null), f = new D(C.from(n.create(null, C.from(l.type.create(null, u)))), c ? 3 : 1, 0), d = s.start, h = s.end;
      t(e.tr.step(new ae(d - (c ? 3 : 1), h, d, h, f, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Si(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
class Mi {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: s } = r, o = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => {
      const f = a(...u)(o);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), f;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = [], a = !!e, c = e || s.tr, u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every((d) => d === !0)), f = {
      ...Object.fromEntries(Object.entries(r).map(([d, h]) => [d, (...m) => {
        const g = this.buildProps(c, t), k = h(...m)(g);
        return l.push(k), f;
      }])),
      run: u
    };
    return f;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, s = e || r.tr, o = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = {
      tr: e,
      editor: i,
      view: o,
      state: Si({
        state: s,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]));
      }
    };
    return l;
  }
}
class lm {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function I(n, e, t) {
  return n.config[e] === void 0 && n.parent ? I(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? I(n.parent, e, t) : null
  }) : n.config[e];
}
function xi(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function gu(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = xi(n), i = [...t, ...r], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = I(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((f) => {
        Object.entries(u.attributes).forEach(([d, h]) => {
          e.push({
            type: f,
            name: d,
            attribute: {
              ...s,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = I(o, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, f]) => {
      const d = {
        ...s,
        ...f
      };
      typeof (d == null ? void 0 : d.default) == "function" && (d.default = d.default()), d != null && d.isRequired && (d == null ? void 0 : d.default) === void 0 && delete d.default, e.push({
        type: o.name,
        name: u,
        attribute: d
      });
    });
  }), e;
}
function ue(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function he(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      if (i === "class") {
        const l = s ? s.split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[i] = [...a, ...c].join(" ");
      } else
        i === "style" ? r[i] = [r[i], s].join("; ") : r[i] = s;
    }), r;
  }, {});
}
function Ds(n, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => he(t, r), {});
}
function bu(n) {
  return typeof n == "function";
}
function H(n, e = void 0, ...t) {
  return bu(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function am(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function cm(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function Gl(n, e) {
  return n.style ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : cm(t.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Yl(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && am(t) ? !1 : t != null)
  );
}
function um(n, e) {
  var t;
  const r = gu(n), { nodeExtensions: i, markExtensions: s } = xi(n), o = (t = i.find((c) => I(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const u = r.filter((k) => k.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((k, w) => {
      const S = I(w, "extendNodeSchema", f);
      return {
        ...k,
        ...S ? S(c) : {}
      };
    }, {}), h = Yl({
      ...d,
      content: H(I(c, "content", f)),
      marks: H(I(c, "marks", f)),
      group: H(I(c, "group", f)),
      inline: H(I(c, "inline", f)),
      atom: H(I(c, "atom", f)),
      selectable: H(I(c, "selectable", f)),
      draggable: H(I(c, "draggable", f)),
      code: H(I(c, "code", f)),
      defining: H(I(c, "defining", f)),
      isolating: H(I(c, "isolating", f)),
      attrs: Object.fromEntries(u.map((k) => {
        var w;
        return [k.name, { default: (w = k == null ? void 0 : k.attribute) === null || w === void 0 ? void 0 : w.default }];
      }))
    }), p = H(I(c, "parseHTML", f));
    p && (h.parseDOM = p.map((k) => Gl(k, u)));
    const m = I(c, "renderHTML", f);
    m && (h.toDOM = (k) => m({
      node: k,
      HTMLAttributes: Ds(k, u)
    }));
    const g = I(c, "renderText", f);
    return g && (h.toText = g), [c.name, h];
  })), a = Object.fromEntries(s.map((c) => {
    const u = r.filter((g) => g.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((g, k) => {
      const w = I(k, "extendMarkSchema", f);
      return {
        ...g,
        ...w ? w(c) : {}
      };
    }, {}), h = Yl({
      ...d,
      inclusive: H(I(c, "inclusive", f)),
      excludes: H(I(c, "excludes", f)),
      group: H(I(c, "group", f)),
      spanning: H(I(c, "spanning", f)),
      code: H(I(c, "code", f)),
      attrs: Object.fromEntries(u.map((g) => {
        var k;
        return [g.name, { default: (k = g == null ? void 0 : g.attribute) === null || k === void 0 ? void 0 : k.default }];
      }))
    }), p = H(I(c, "parseHTML", f));
    p && (h.parseDOM = p.map((g) => Gl(g, u)));
    const m = I(c, "renderHTML", f);
    return m && (h.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: Ds(g, u)
    })), [c.name, h];
  }));
  return new yd({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function rs(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Zl(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
const fm = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
    var a, c;
    const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    t += u.slice(0, Math.max(0, r - s));
  }), t;
};
function ho(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class Ci {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const dm = (n, e) => {
  if (ho(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function is(n) {
  var e;
  const { editor: t, from: r, to: i, text: s, rules: o, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((d) => d.type.spec.code)
  )
    return !1;
  let u = !1;
  const f = fm(c) + s;
  return o.forEach((d) => {
    if (u)
      return;
    const h = dm(f, d.find);
    if (!h)
      return;
    const p = a.state.tr, m = Si({
      state: a.state,
      transaction: p
    }), g = {
      from: r - (h[0].length - s.length),
      to: i
    }, { commands: k, chain: w, can: S } = new Mi({
      editor: t,
      state: m
    });
    d.handler({
      state: m,
      range: g,
      match: h,
      commands: k,
      chain: w,
      can: S
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: s
    }), a.dispatch(p), u = !0);
  }), u;
}
function hm(n) {
  const { editor: e, rules: t } = n, r = new $e({
    state: {
      init() {
        return null;
      },
      apply(i, s) {
        const o = i.getMeta(r);
        return o || (i.selectionSet || i.docChanged ? null : s);
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return is({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && is({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? is({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function pm(n) {
  return typeof n == "number";
}
class mm {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const gm = (n, e, t) => {
  if (ho(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const s = [i.text];
    return s.index = i.index, s.input = n, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), s.push(i.replaceWith)), s;
  }) : [];
};
function bm(n) {
  const { editor: e, state: t, from: r, to: i, rule: s, pasteEvent: o, dropEvent: l } = n, { commands: a, chain: c, can: u } = new Mi({
    editor: e,
    state: t
  }), f = [];
  return t.doc.nodesBetween(r, i, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const m = Math.max(r, p), g = Math.min(i, p + h.content.size), k = h.textBetween(m - p, g - p, void 0, "￼");
    gm(k, s.find, o).forEach((S) => {
      if (S.index === void 0)
        return;
      const O = m + S.index + 1, E = O + S[0].length, N = {
        from: t.tr.mapping.map(O),
        to: t.tr.mapping.map(E)
      }, z = s.handler({
        state: t,
        range: N,
        match: S,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: o,
        dropEvent: l
      });
      f.push(z);
    });
  }), f.every((h) => h !== null);
}
function ym(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, s = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  return t.map((c) => new $e({
    // we register a global drag handler to track the current drag source element
    view(u) {
      const f = (d) => {
        var h;
        r = !((h = u.dom.parentElement) === null || h === void 0) && h.contains(d.target) ? u.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", f), {
        destroy() {
          window.removeEventListener("dragstart", f);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (u, f) => (s = r === u.dom.parentElement, l = f, !1),
        paste: (u, f) => {
          var d;
          const h = (d = f.clipboardData) === null || d === void 0 ? void 0 : d.getData("text/html");
          return o = f, i = !!(h != null && h.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (u, f, d) => {
      const h = u[0], p = h.getMeta("uiEvent") === "paste" && !i, m = h.getMeta("uiEvent") === "drop" && !s;
      if (!p && !m)
        return;
      const g = f.doc.content.findDiffStart(d.doc.content), k = f.doc.content.findDiffEnd(d.doc.content);
      if (!pm(g) || !k || g === k.b)
        return;
      const w = d.tr, S = Si({
        state: d,
        transaction: w
      });
      if (!(!bm({
        editor: e,
        state: S,
        from: Math.max(g - 1, 0),
        to: k.b - 1,
        rule: c,
        pasteEvent: o,
        dropEvent: l
      }) || !w.steps.length))
        return l = typeof DragEvent < "u" ? new DragEvent("drop") : null, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, w;
    }
  }));
}
function km(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return [...new Set(e)];
}
class ln {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = ln.resolve(e), this.schema = um(this.extensions, t), this.extensions.forEach((r) => {
      var i;
      this.editor.extensionStorage[r.name] = r.storage;
      const s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: this.editor,
        type: rs(r.name, this.schema)
      };
      r.type === "mark" && (!((i = H(I(r, "keepOnSplit", s))) !== null && i !== void 0) || i) && this.splittableMarks.push(r.name);
      const o = I(r, "onBeforeCreate", s);
      o && this.editor.on("beforeCreate", o);
      const l = I(r, "onCreate", s);
      l && this.editor.on("create", l);
      const a = I(r, "onUpdate", s);
      a && this.editor.on("update", a);
      const c = I(r, "onSelectionUpdate", s);
      c && this.editor.on("selectionUpdate", c);
      const u = I(r, "onTransaction", s);
      u && this.editor.on("transaction", u);
      const f = I(r, "onFocus", s);
      f && this.editor.on("focus", f);
      const d = I(r, "onBlur", s);
      d && this.editor.on("blur", d);
      const h = I(r, "onDestroy", s);
      h && this.editor.on("destroy", h);
    });
  }
  static resolve(e) {
    const t = ln.sort(ln.flatten(e)), r = km(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = I(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  static sort(e) {
    return e.sort((r, i) => {
      const s = I(r, "priority") || 100, o = I(i, "priority") || 100;
      return s > o ? -1 : s < o ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: rs(t.name, this.schema)
      }, i = I(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  get plugins() {
    const { editor: e } = this, t = ln.sort([...this.extensions].reverse()), r = [], i = [], s = t.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: rs(o.name, this.schema)
      }, a = [], c = I(o, "addKeyboardShortcuts", l);
      let u = {};
      if (o.type === "mark" && o.config.exitable && (u.ArrowRight = () => lt.handleExit({ editor: e, mark: o })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([g, k]) => [g, () => k({ editor: e })]));
        u = { ...u, ...m };
      }
      const f = Rp(u);
      a.push(f);
      const d = I(o, "addInputRules", l);
      Zl(o, e.options.enableInputRules) && d && r.push(...d());
      const h = I(o, "addPasteRules", l);
      Zl(o, e.options.enablePasteRules) && h && i.push(...h());
      const p = I(o, "addProseMirrorPlugins", l);
      if (p) {
        const m = p();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      hm({
        editor: e,
        rules: r
      }),
      ...ym({
        editor: e,
        rules: i
      }),
      ...s
    ];
  }
  get attributes() {
    return gu(this.extensions);
  }
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = xi(this.extensions);
    return Object.fromEntries(t.filter((r) => !!I(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: ue(r.name, this.schema)
      }, o = I(r, "addNodeView", s);
      if (!o)
        return [];
      const l = (a, c, u, f) => {
        const d = Ds(a, i);
        return o()({
          editor: e,
          node: a,
          getPos: u,
          decorations: f,
          HTMLAttributes: d,
          extension: r
        });
      };
      return [r.name, l];
    }));
  }
}
function vm(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function ss(n) {
  return vm(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function _i(n, e) {
  const t = { ...n };
  return ss(n) && ss(e) && Object.keys(e).forEach((r) => {
    ss(e[r]) ? r in n ? t[r] = _i(n[r], e[r]) : Object.assign(t, { [r]: e[r] }) : Object.assign(t, { [r]: e[r] });
  }), t;
}
class Je {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = H(I(this, "addOptions", {
      name: this.name
    }))), this.storage = H(I(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Je(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = _i(this.options, e), t.storage = H(I(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Je({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = H(I(t, "addOptions", {
      name: t.name
    })), t.storage = H(I(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function yu(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "", a = !0;
  return n.nodesBetween(r, i, (c, u, f, d) => {
    var h;
    const p = o == null ? void 0 : o[c.type.name];
    p ? (c.isBlock && !a && (l += s, a = !0), f && (l += p({
      node: c,
      pos: u,
      parent: f,
      index: d,
      range: e
    }))) : c.isText ? (l += (h = c == null ? void 0 : c.text) === null || h === void 0 ? void 0 : h.slice(Math.max(r, u) - u, i - u), a = !1) : c.isBlock && !a && (l += s, a = !0);
  }), l;
}
function ku(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const wm = Je.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new $e({
        key: new at("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((u) => u.$from.pos)), l = Math.max(...s.map((u) => u.$to.pos)), a = ku(t);
            return yu(r, { from: o, to: l }, {
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), Sm = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), Mm = (n = !1) => ({ commands: e }) => e.setContent("", n), xm = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: s, $to: o }) => {
    n.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, f = c.resolve(u.map(a)), d = c.resolve(u.map(a + l.nodeSize)), h = f.blockRange(d);
      if (!h)
        return;
      const p = Cn(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = f.parent.contentMatchAt(f.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, Cm = (n) => (e) => n(e), _m = () => ({ state: n, dispatch: e }) => Up(n, e), Tm = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, s = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, s.content), r.setSelection(new V(r.doc.resolve(o - 1))), !0;
}, Om = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === r.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Em = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = ue(n, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (r) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Nm = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, Am = () => ({ state: n, dispatch: e }) => Lp(n, e), Dm = () => ({ commands: n }) => n.keyboardShortcut("Enter"), Im = () => ({ state: n, dispatch: e }) => Kp(n, e);
function Pr(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : ho(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Is(n, e, t = {}) {
  return n.find((r) => r.type === e && Pr(r.attrs, t));
}
function Rm(n, e, t = {}) {
  return !!Is(n, e, t);
}
function po(n, e, t = {}) {
  if (!n || !e)
    return;
  let r = n.parent.childAfter(n.parentOffset);
  if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)), !r.node)
    return;
  const i = Is([...r.node.marks], e, t);
  if (!i)
    return;
  let s = r.index, o = n.start() + r.offset, l = s + 1, a = o + r.node.nodeSize;
  for (Is([...r.node.marks], e, t); s > 0 && i.isInSet(n.parent.child(s - 1).marks); )
    s -= 1, o -= n.parent.child(s).nodeSize;
  for (; l < n.parent.childCount && Rm([...n.parent.child(l).marks], e, t); )
    a += n.parent.child(l).nodeSize, l += 1;
  return {
    from: o,
    to: a
  };
}
function Rt(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const Pm = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const s = Rt(n, r.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const f = po(a, s, e);
    if (f && f.from <= c && f.to >= u) {
      const d = V.create(o, f.from, f.to);
      t.setSelection(d);
    }
  }
  return !0;
}, Lm = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function vu(n) {
  return n instanceof V;
}
function jt(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function wu(n, e = null) {
  if (!e)
    return null;
  const t = q.atStart(n), r = q.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, s = r.to;
  return e === "all" ? V.create(n, jt(0, i, s), jt(n.content.size, i, s)) : V.create(n, jt(e, i, s), jt(e, i, s));
}
function mo() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const $m = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    mo() && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (s && n === null && !vu(t.state.selection))
    return o(), !0;
  const l = wu(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, zm = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), Bm = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), Su = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && Su(r);
  }
  return n;
};
function Ql(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return Su(t);
}
function Lr(n, e, t) {
  if (t = {
    slice: !0,
    parseOptions: {},
    ...t
  }, typeof n == "object" && n !== null)
    try {
      return Array.isArray(n) && n.length > 0 ? C.fromArray(n.map((r) => e.nodeFromJSON(r))) : e.nodeFromJSON(n);
    } catch (r) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", r), Lr("", e, t);
    }
  if (typeof n == "string") {
    const r = gn.fromSchema(e);
    return t.slice ? r.parseSlice(Ql(n), t.parseOptions).content : r.parse(Ql(n), t.parseOptions);
  }
  return Lr("", e, t);
}
function jm(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof le || i instanceof ae))
    return;
  const s = n.mapping.maps[r];
  let o = 0;
  s.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), n.setSelection(q.near(n.doc.resolve(o), t));
}
const Fm = (n) => n.toString().startsWith("<"), Hm = (n, e, t) => ({ tr: r, dispatch: i, editor: s }) => {
  if (i) {
    t = {
      parseOptions: {},
      updateSelection: !0,
      ...t
    };
    const o = Lr(e, s.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...t.parseOptions
      }
    });
    if (o.toString() === "<>")
      return !0;
    let { from: l, to: a } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, c = !0, u = !0;
    if ((Fm(o) ? o : [o]).forEach((d) => {
      d.check(), c = c ? d.isText && d.marks.length === 0 : !1, u = u ? d.isBlock : !1;
    }), l === a && u) {
      const { parent: d } = r.doc.resolve(l);
      d.isTextblock && !d.type.spec.code && !d.childCount && (l -= 1, a += 1);
    }
    c ? Array.isArray(e) ? r.insertText(e.map((d) => d.text || "").join(""), l, a) : typeof e == "object" && e && e.text ? r.insertText(e.text, l, a) : r.insertText(e, l, a) : r.replaceWith(l, a, o), t.updateSelection && jm(r, r.steps.length - 1, -1);
  }
  return !0;
}, Vm = () => ({ state: n, dispatch: e }) => Vp(n, e), qm = () => ({ state: n, dispatch: e }) => qp(n, e), Wm = () => ({ state: n, dispatch: e }) => $p(n, e), Jm = () => ({ state: n, dispatch: e }) => Fp(n, e), Km = () => ({ tr: n, state: e, dispatch: t }) => {
  try {
    const r = gi(e.doc, e.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
  } catch {
    return !1;
  }
}, Um = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = gi(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Gm = () => ({ state: n, dispatch: e }) => zp(n, e), Ym = () => ({ state: n, dispatch: e }) => Bp(n, e);
function Mu() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Zm(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      mo() || Mu() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
const Qm = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const s = Zm(n).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
};
function Yn(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection, o = e ? ue(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (f, d) => {
    if (f.isText)
      return;
    const h = Math.max(r, d), p = Math.min(i, d + f.nodeSize);
    l.push({
      node: f,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((f) => o ? o.name === f.node.type.name : !0).filter((f) => Pr(f.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((f, d) => f + d.to - d.from, 0) >= a;
}
const Xm = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = ue(n, t.schema);
  return Yn(t, i, e) ? Wp(t, r) : !1;
}, eg = () => ({ state: n, dispatch: e }) => Gp(n, e), tg = (n) => ({ state: e, dispatch: t }) => {
  const r = ue(n, e.schema);
  return rm(r)(e, t);
}, ng = () => ({ state: n, dispatch: e }) => Jp(n, e);
function Ti(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Xl(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const rg = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Ti(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = ue(n, r.schema)), l === "mark" && (o = Rt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      s && s === c.type && t.setNodeMarkup(u, void 0, Xl(c.attrs, e)), o && c.marks.length && c.marks.forEach((f) => {
        o === f.type && t.addMark(u, u + c.nodeSize, o.create(Xl(f.attrs, e)));
      });
    });
  }), !0) : !1;
}, ig = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), sg = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), og = () => ({ state: n, dispatch: e }) => jp(n, e), lg = () => ({ state: n, dispatch: e }) => Hp(n, e), ag = () => ({ state: n, dispatch: e }) => Yp(n, e), cg = () => ({ state: n, dispatch: e }) => Xp(n, e), ug = () => ({ state: n, dispatch: e }) => Qp(n, e);
function xu(n, e, t = {}) {
  return Lr(n, e, { slice: !1, parseOptions: t });
}
const fg = (n, e = !1, t = {}) => ({ tr: r, editor: i, dispatch: s }) => {
  const { doc: o } = r, l = xu(n, i.schema, t);
  return s && r.replaceWith(0, o.content.size, l).setMeta("preventUpdate", !e), !0;
};
function Oi(n, e) {
  const t = Rt(e, n.schema), { from: r, to: i, empty: s } = n.selection, o = [];
  s ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function dg(n, e) {
  const t = new Oc(n);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
function hg(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function pg(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (i, s) => {
    t(i) && r.push({
      node: i,
      pos: s
    });
  }), r;
}
function mg(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function go(n) {
  return (e) => mg(e.$from, n);
}
function gg(n, e) {
  const t = nt.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function bg(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return yu(n, t, e);
}
function yg(n, e) {
  const t = ue(e, n.schema), { from: r, to: i } = n.selection, s = [];
  n.doc.nodesBetween(r, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function Cu(n, e) {
  const t = Ti(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? yg(n, e) : t === "mark" ? Oi(n, e) : {};
}
function kg(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function vg(n) {
  const e = kg(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((s, o) => o !== r).some((s) => t.oldRange.from >= s.oldRange.from && t.oldRange.to <= s.oldRange.to && t.newRange.from >= s.newRange.from && t.newRange.to <= s.newRange.to));
}
function wg(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((i, s) => {
    const o = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        o.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[s];
      if (l === void 0 || a === void 0)
        return;
      o.push({ from: l, to: a });
    }
    o.forEach(({ from: l, to: a }) => {
      const c = e.slice(s).map(l, -1), u = e.slice(s).map(a), f = e.invert().map(c, -1), d = e.invert().map(u);
      r.push({
        oldRange: {
          from: f,
          to: d
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), vg(r);
}
function bo(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const s = t.resolve(n - 1), o = po(s, i.type);
    o && r.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(n, e, (i, s) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((o) => ({
      from: s,
      to: s + i.nodeSize,
      mark: o
    })));
  }), r;
}
function gr(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((s) => s.type === e && s.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Rs(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, s = e ? Rt(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((f) => s ? s.name === f.type.name : !0).find((f) => Pr(f.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: f, $to: d }) => {
    const h = f.pos, p = d.pos;
    n.doc.nodesBetween(h, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const k = Math.max(h, g), w = Math.min(p, g + m.nodeSize), S = w - k;
      o += S, l.push(...m.marks.map((O) => ({
        mark: O,
        from: k,
        to: w
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((f) => s ? s.name === f.mark.type.name : !0).filter((f) => Pr(f.mark.attrs, t, { strict: !1 })).reduce((f, d) => f + d.to - d.from, 0), c = l.filter((f) => s ? f.mark.type !== s && f.mark.type.excludes(s) : !0).reduce((f, d) => f + d.to - d.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function Sg(n, e, t = {}) {
  if (!e)
    return Yn(n, null, t) || Rs(n, null, t);
  const r = Ti(e, n.schema);
  return r === "node" ? Yn(n, e, t) : r === "mark" ? Rs(n, e, t) : !1;
}
function ea(n, e) {
  const { nodeExtensions: t } = xi(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = H(I(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function Mg(n) {
  var e;
  const t = (e = n.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), r = n.toJSON();
  return JSON.stringify(t) === JSON.stringify(r);
}
function xg(n, e, t) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (vu(i) && (s = i.$cursor), s) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, f, d) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !d || d.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const Cg = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = Rt(n, r.schema);
  if (i)
    if (o) {
      const c = Oi(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const u = c.$from.pos, f = c.$to.pos;
        r.doc.nodesBetween(u, f, (d, h) => {
          const p = Math.max(h, u), m = Math.min(h + d.nodeSize, f);
          d.marks.find((k) => k.type === a) ? d.marks.forEach((k) => {
            a === k.type && t.addMark(p, m, a.create({
              ...k.attrs,
              ...e
            }));
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return xg(r, t, a);
}, _g = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), Tg = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const s = ue(n, t.schema);
  return s.isTextblock ? i().command(({ commands: o }) => Ul(s, e)(t) ? !0 : o.clearNodes()).command(({ state: o }) => Ul(s, e)(o, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Og = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = jt(n, 0, r.content.size), s = $.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, Eg = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n, o = V.atStart(r).from, l = V.atEnd(r).to, a = jt(i, o, l), c = jt(s, o, l), u = V.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, Ng = (n) => ({ state: e, dispatch: t }) => {
  const r = ue(n, e.schema);
  return om(r)(e, t);
};
function ta(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const Ag = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, u = gr(c, l.node().type.name, l.node().attrs);
  if (s instanceof $ && s.node.isBlock)
    return !l.parentOffset || !fn(o, l.pos) ? !1 : (r && (n && ta(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  if (r) {
    const f = a.parentOffset === a.parent.content.size;
    s instanceof V && e.deleteSelection();
    const d = l.depth === 0 ? void 0 : hg(l.node(-1).contentMatchAt(l.indexAfter(-1)));
    let h = f && d ? [
      {
        type: d,
        attrs: u
      }
    ] : void 0, p = fn(e.doc, e.mapping.map(l.pos), 1, h);
    if (!h && !p && fn(e.doc, e.mapping.map(l.pos), 1, d ? [{ type: d }] : void 0) && (p = !0, h = d ? [
      {
        type: d,
        attrs: u
      }
    ] : void 0), p && (e.split(e.mapping.map(l.pos), 1, h), d && !f && !l.parentOffset && l.parent.type !== d)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, d) && e.setNodeMarkup(e.mapping.map(l.before()), d);
    }
    n && ta(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, Dg = (n) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  var s;
  const o = ue(n, t.schema), { $from: l, $to: a } = t.selection, c = t.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
    return !1;
  const u = l.node(-1);
  if (u.type !== o)
    return !1;
  const f = i.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== o || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (r) {
      let g = C.empty;
      const k = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let z = l.depth - k; z >= l.depth - 3; z -= 1)
        g = C.from(l.node(z).copy(g));
      const w = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, S = gr(f, l.node().type.name, l.node().attrs), O = ((s = o.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(S)) || void 0;
      g = g.append(C.from(o.createAndFill(null, O) || void 0));
      const E = l.before(l.depth - (k - 1));
      e.replace(E, l.after(-w), new D(g, 4 - k, 0));
      let N = -1;
      e.doc.nodesBetween(E, e.doc.content.size, (z, X) => {
        if (N > -1)
          return !1;
        z.isTextblock && z.content.size === 0 && (N = X + 1);
      }), N > -1 && e.setSelection(V.near(e.doc.resolve(N))), e.scrollIntoView();
    }
    return !0;
  }
  const d = a.pos === l.end() ? u.contentMatchAt(0).defaultType : null, h = gr(f, u.type.name, u.attrs), p = gr(f, l.node().type.name, l.node().attrs);
  e.delete(l.pos, a.pos);
  const m = d ? [
    { type: o, attrs: h },
    { type: d, attrs: p }
  ] : [{ type: o, attrs: h }];
  if (!fn(e.doc, l.pos, 2))
    return !1;
  if (r) {
    const { selection: g, storedMarks: k } = t, { splittableMarks: w } = i.extensionManager, S = k || g.$to.parentOffset && g.$from.marks();
    if (e.split(l.pos, 2, m).scrollIntoView(), !S || !r)
      return !0;
    const O = S.filter((E) => w.includes(E.type.name));
    e.ensureMarks(O);
  }
  return !0;
}, ls = (n, e) => {
  const t = go((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Dt(n.doc, t.pos) && n.join(t.pos), !0;
}, as = (n, e) => {
  const t = go((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Dt(n.doc, r) && n.join(r), !0;
}, Ig = (n, e, t, r = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: f, splittableMarks: d } = i.extensionManager, h = ue(n, o.schema), p = ue(e, o.schema), { selection: m, storedMarks: g } = o, { $from: k, $to: w } = m, S = k.blockRange(w), O = g || m.$to.parentOffset && m.$from.marks();
  if (!S)
    return !1;
  const E = go((N) => ea(N.type.name, f))(m);
  if (S.depth >= 1 && E && S.depth - E.depth <= 1) {
    if (E.node.type === h)
      return c.liftListItem(p);
    if (ea(E.node.type.name, f) && h.validContent(E.node.content) && l)
      return a().command(() => (s.setNodeMarkup(E.pos, h), !0)).command(() => ls(s, h)).command(() => as(s, h)).run();
  }
  return !t || !O || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => ls(s, h)).command(() => as(s, h)).run() : a().command(() => {
    const N = u().wrapInList(h, r), z = O.filter((X) => d.includes(X.type.name));
    return s.ensureMarks(z), N ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => ls(s, h)).command(() => as(s, h)).run();
}, Rg = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = Rt(n, r.schema);
  return Rs(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, Pg = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const s = ue(n, r.schema), o = ue(e, r.schema);
  return Yn(r, s, t) ? i.setNode(o) : i.setNode(s, t);
}, Lg = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = ue(n, t.schema);
  return Yn(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, $g = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(n))) {
      if (e) {
        const o = n.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, n.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, zg = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((s) => {
    n.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, Bg = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = Rt(n, r.schema), { $from: c, empty: u, ranges: f } = l;
  if (!i)
    return !0;
  if (u && o) {
    let { from: d, to: h } = l;
    const p = (s = c.marks().find((g) => g.type === a)) === null || s === void 0 ? void 0 : s.attrs, m = po(c, a, p);
    m && (d = m.from, h = m.to), t.removeMark(d, h, a);
  } else
    f.forEach((d) => {
      t.removeMark(d.$from.pos, d.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, jg = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Ti(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = ue(n, r.schema)), l === "mark" && (o = Rt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    r.doc.nodesBetween(c, u, (f, d) => {
      s && s === f.type && t.setNodeMarkup(d, void 0, {
        ...f.attrs,
        ...e
      }), o && f.marks.length && f.marks.forEach((h) => {
        if (o === h.type) {
          const p = Math.max(d, c), m = Math.min(d + f.nodeSize, u);
          t.addMark(p, m, o.create({
            ...h.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, Fg = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = ue(n, t.schema);
  return em(i, e)(t, r);
}, Hg = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = ue(n, t.schema);
  return tm(i, e)(t, r);
};
var Vg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Sm,
  clearContent: Mm,
  clearNodes: xm,
  command: Cm,
  createParagraphNear: _m,
  cut: Tm,
  deleteCurrentNode: Om,
  deleteNode: Em,
  deleteRange: Nm,
  deleteSelection: Am,
  enter: Dm,
  exitCode: Im,
  extendMarkRange: Pm,
  first: Lm,
  focus: $m,
  forEach: zm,
  insertContent: Bm,
  insertContentAt: Hm,
  joinUp: Vm,
  joinDown: qm,
  joinBackward: Wm,
  joinForward: Jm,
  joinItemBackward: Km,
  joinItemForward: Um,
  joinTextblockBackward: Gm,
  joinTextblockForward: Ym,
  keyboardShortcut: Qm,
  lift: Xm,
  liftEmptyBlock: eg,
  liftListItem: tg,
  newlineInCode: ng,
  resetAttributes: rg,
  scrollIntoView: ig,
  selectAll: sg,
  selectNodeBackward: og,
  selectNodeForward: lg,
  selectParentNode: ag,
  selectTextblockEnd: cg,
  selectTextblockStart: ug,
  setContent: fg,
  setMark: Cg,
  setMeta: _g,
  setNode: Tg,
  setNodeSelection: Og,
  setTextSelection: Eg,
  sinkListItem: Ng,
  splitBlock: Ag,
  splitListItem: Dg,
  toggleList: Ig,
  toggleMark: Rg,
  toggleNode: Pg,
  toggleWrap: Lg,
  undoInputRule: $g,
  unsetAllMarks: zg,
  unsetMark: Bg,
  updateAttributes: jg,
  wrapIn: Fg,
  wrapInList: Hg
});
const qg = Je.create({
  name: "commands",
  addCommands() {
    return {
      ...Vg
    };
  }
}), Wg = Je.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new $e({
        key: new at("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Jg = Je.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new $e({
        key: new at("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Kg = Je.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: f } = a, { pos: d, parent: h } = f, p = f.parent.isTextblock ? l.doc.resolve(d - 1) : f, m = p.parent.type.spec.isolating, g = f.pos - f.parentOffset, k = m && p.parent.childCount === 1 ? g === f.pos : q.atStart(c).from === d;
        return !u || !k || !h.type.isTextblock || h.textContent.length ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return mo() || Mu() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new $e({
        key: new at("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (!(n.some((p) => p.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: s, to: o } = e.selection, l = q.atStart(e.doc).from, a = q.atEnd(e.doc).to;
          if (i || !(s === l && o === a) || !(t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0))
            return;
          const f = t.tr, d = Si({
            state: t,
            transaction: f
          }), { commands: h } = new Mi({
            editor: this.editor,
            state: d
          });
          if (h.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Ug = Je.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new $e({
        key: new at("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var Gg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: wm,
  Commands: qg,
  Editable: Wg,
  FocusEvents: Jg,
  Keymap: Kg,
  Tabindex: Ug
});
class $t {
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new $t(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new $t(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new $t(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, s = this.pos + r + (i ? 0 : 1), o = this.resolvedPos.doc.resolve(s);
      if (!i && o.depth <= this.depth)
        return;
      const l = new $t(o, this.editor, i, i ? t : null);
      i && (l.actualDepth = this.depth + 1), e.push(new $t(o, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const s = i.node.attrs, o = Object.keys(t);
          for (let l = 0; l < o.length; l += 1) {
            const a = o[l];
            if (s[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    return this.isBlock || !this.children || this.children.length === 0 || this.children.forEach((s) => {
      if (s.node.type.name === e) {
        if (Object.keys(t).length > 0) {
          const o = s.node.attrs, l = Object.keys(t);
          for (let a = 0; a < l.length; a += 1) {
            const c = l[a];
            if (o[c] !== t[c])
              return;
          }
        }
        if (i.push(s), r)
          return;
      }
      i = i.concat(s.querySelectorAll(e));
    }), i;
  }
  setAttribute(e) {
    const t = this.editor.state.selection;
    this.editor.chain().setTextSelection(this.from).updateAttributes(this.node.type.name, e).setTextSelection(t.from).run();
  }
}
const Yg = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function Zg(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
class Qg extends lm {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }));
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = Zg(Yg, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   */
  registerPlugin(e, t) {
    const r = bu(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    this.view.updateState(i);
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = typeof e == "string" ? `${e}$` : e.key, r = this.state.reconfigure({
      // @ts-ignore
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(t))
    });
    this.view.updateState(r);
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    const t = [...this.options.enableCoreExtensions ? Object.values(Gg) : [], ...this.options.extensions].filter((r) => ["extension", "node", "mark"].includes(r == null ? void 0 : r.type));
    this.extensionManager = new ln(t, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Mi({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    const e = xu(this.options.content, this.schema, this.options.parseOptions), t = wu(e, this.options.autofocus);
    this.view = new Cp(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: on.create({
        doc: e,
        selection: t || void 0
      })
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews(), this.prependClass();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), s = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), s && this.emit("blur", {
      editor: this,
      event: s.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return Cu(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return Sg(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return gg(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return bg(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...ku(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Mg(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new $t(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}
function $r(n) {
  return new Ci({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = H(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const a = l.search(/\S/), c = t.from + l.indexOf(o), u = c + o.length;
        if (bo(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === n.type && m !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        u < t.to && s.delete(u, t.to), c > t.from && s.delete(t.from + a, c);
        const d = t.from + a + o.length;
        s.addMark(t.from + a, d, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function Xg(n) {
  return new Ci({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = H(n.getAttributes, void 0, r) || {}, { tr: s } = e, o = t.from;
      let l = t.to;
      const a = n.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = o + c;
        u > l ? u = l : l = u + r[1].length;
        const f = r[0][r[0].length - 1];
        s.insertText(f, o + r[0].length - 1), s.replaceWith(u, l, a);
      } else
        r[0] && s.insert(o - 1, n.type.create(i)).delete(s.mapping.map(o), s.mapping.map(l));
      s.scrollIntoView();
    }
  });
}
function e0(n) {
  return new Ci({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), s = H(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s);
    }
  });
}
function zr(n) {
  return new Ci({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const s = H(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), c = a && Xs(a, n.type, s);
      if (!c)
        return null;
      if (o.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: f, storedMarks: d } = e, { splittableMarks: h } = n.editor.extensionManager, p = d || f.$to.parentOffset && f.$from.marks();
        if (p) {
          const m = p.filter((g) => h.includes(g.type.name));
          o.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const f = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(f, s).run();
      }
      const u = o.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && Dt(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && o.join(t.from - 1);
    }
  });
}
class lt {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = H(I(this, "addOptions", {
      name: this.name
    }))), this.storage = H(I(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new lt(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = _i(this.options, e), t.storage = H(I(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new lt({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = H(I(t, "addOptions", {
      name: t.name
    })), t.storage = H(I(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = o.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
class Ee {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = H(I(this, "addOptions", {
      name: this.name
    }))), this.storage = H(I(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Ee(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = _i(this.options, e), t.storage = H(I(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Ee({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = H(I(t, "addOptions", {
      name: t.name
    })), t.storage = H(I(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Zn(n) {
  return new mm({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const s = H(n.getAttributes, void 0, r, i);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), f = t.from + a.indexOf(l), d = f + l.length;
        if (bo(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((g) => g === n.type && g !== p.mark.type)).filter((p) => p.to > f).length)
          return null;
        d < t.to && o.delete(d, t.to), f > t.from && o.delete(t.from + u, f), c = t.from + u + l.length, o.addMark(t.from + u, c, n.type.create(s || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
const t0 = Ee.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), n0 = Ee.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", he(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), r0 = Ee.create({
  name: "text",
  group: "inline"
}), i0 = Ee.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, he(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => e0({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
}), s0 = Ee.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", he(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), o0 = Ee.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", he(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), na = lt.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", he(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = Oi(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), ra = /^\s*([-+*])\s$/, l0 = Ee.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", he(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(o0.name, this.editor.getAttributes(na.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = zr({
      find: ra,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = zr({
      find: ra,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(na.name),
      editor: this.editor
    })), [
      n
    ];
  }
}), a0 = Ee.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", he(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), ia = lt.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", he(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = Oi(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), sa = /^(\d+)\.\s$/, c0 = Ee.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", he(this.options.HTMLAttributes, t), 0] : ["ol", he(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(a0.name, this.editor.getAttributes(ia.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = zr({
      find: sa,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = zr({
      find: sa,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(ia.name) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), u0 = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", f0 = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", wn = (n, e) => {
  for (const t in e)
    n[t] = e[t];
  return n;
}, Ps = "numeric", Ls = "ascii", $s = "alpha", br = "asciinumeric", cr = "alphanumeric", zs = "domain", _u = "emoji", d0 = "scheme", h0 = "slashscheme", oa = "whitespace";
function p0(n, e) {
  return n in e || (e[n] = []), e[n];
}
function Ft(n, e, t) {
  e[Ps] && (e[br] = !0, e[cr] = !0), e[Ls] && (e[br] = !0, e[$s] = !0), e[br] && (e[cr] = !0), e[$s] && (e[cr] = !0), e[cr] && (e[zs] = !0), e[_u] && (e[zs] = !0);
  for (const r in e) {
    const i = p0(r, t);
    i.indexOf(n) < 0 && i.push(n);
  }
}
function m0(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function Se(n) {
  n === void 0 && (n = null), this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
Se.groups = {};
Se.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], s = e.jr[r][1];
      if (s && i.test(n))
        return s;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(n, e) {
    return e === void 0 && (e = !1), e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, r) {
    for (let i = 0; i < n.length; i++)
      this.tt(n[i], e, t, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(n, e, t, r) {
    r = r || Se.groups;
    let i;
    return e && e.j ? i = e : (i = new Se(e), t && r && Ft(e, t, r)), this.jr.push([n, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(n, e, t, r) {
    let i = this;
    const s = n.length;
    if (!s)
      return i;
    for (let o = 0; o < s - 1; o++)
      i = i.tt(n[o]);
    return i.tt(n[s - 1], e, t, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(n, e, t, r) {
    r = r || Se.groups;
    const i = this;
    if (e && e.j)
      return i.j[n] = e, e;
    const s = e;
    let o, l = i.go(n);
    if (l ? (o = new Se(), wn(o.j, l.j), o.jr.push.apply(o.jr, l.jr), o.jd = l.jd, o.t = l.t) : o = new Se(), s) {
      if (r)
        if (o.t && typeof o.t == "string") {
          const a = wn(m0(o.t, r), t);
          Ft(s, a, r);
        } else
          t && Ft(s, t, r);
      o.t = s;
    }
    return i.j[n] = o, o;
  }
};
const F = (n, e, t, r, i) => n.ta(e, t, r, i), De = (n, e, t, r, i) => n.tr(e, t, r, i), la = (n, e, t, r, i) => n.ts(e, t, r, i), A = (n, e, t, r, i) => n.tt(e, t, r, i), ft = "WORD", Bs = "UWORD", Qn = "LOCALHOST", js = "TLD", Fs = "UTLD", yr = "SCHEME", sn = "SLASH_SCHEME", yo = "NUM", Tu = "WS", ko = "NL", zn = "OPENBRACE", Bn = "CLOSEBRACE", Br = "OPENBRACKET", jr = "CLOSEBRACKET", Fr = "OPENPAREN", Hr = "CLOSEPAREN", Vr = "OPENANGLEBRACKET", qr = "CLOSEANGLEBRACKET", Wr = "FULLWIDTHLEFTPAREN", Jr = "FULLWIDTHRIGHTPAREN", Kr = "LEFTCORNERBRACKET", Ur = "RIGHTCORNERBRACKET", Gr = "LEFTWHITECORNERBRACKET", Yr = "RIGHTWHITECORNERBRACKET", Zr = "FULLWIDTHLESSTHAN", Qr = "FULLWIDTHGREATERTHAN", Xr = "AMPERSAND", ei = "APOSTROPHE", ti = "ASTERISK", yt = "AT", ni = "BACKSLASH", ri = "BACKTICK", ii = "CARET", wt = "COLON", vo = "COMMA", si = "DOLLAR", Ze = "DOT", oi = "EQUALS", wo = "EXCLAMATION", Qe = "HYPHEN", li = "PERCENT", ai = "PIPE", ci = "PLUS", ui = "POUND", fi = "QUERY", So = "QUOTE", Mo = "SEMI", Xe = "SLASH", jn = "TILDE", di = "UNDERSCORE", Ou = "EMOJI", hi = "SYM";
var Eu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: ft,
  UWORD: Bs,
  LOCALHOST: Qn,
  TLD: js,
  UTLD: Fs,
  SCHEME: yr,
  SLASH_SCHEME: sn,
  NUM: yo,
  WS: Tu,
  NL: ko,
  OPENBRACE: zn,
  CLOSEBRACE: Bn,
  OPENBRACKET: Br,
  CLOSEBRACKET: jr,
  OPENPAREN: Fr,
  CLOSEPAREN: Hr,
  OPENANGLEBRACKET: Vr,
  CLOSEANGLEBRACKET: qr,
  FULLWIDTHLEFTPAREN: Wr,
  FULLWIDTHRIGHTPAREN: Jr,
  LEFTCORNERBRACKET: Kr,
  RIGHTCORNERBRACKET: Ur,
  LEFTWHITECORNERBRACKET: Gr,
  RIGHTWHITECORNERBRACKET: Yr,
  FULLWIDTHLESSTHAN: Zr,
  FULLWIDTHGREATERTHAN: Qr,
  AMPERSAND: Xr,
  APOSTROPHE: ei,
  ASTERISK: ti,
  AT: yt,
  BACKSLASH: ni,
  BACKTICK: ri,
  CARET: ii,
  COLON: wt,
  COMMA: vo,
  DOLLAR: si,
  DOT: Ze,
  EQUALS: oi,
  EXCLAMATION: wo,
  HYPHEN: Qe,
  PERCENT: li,
  PIPE: ai,
  PLUS: ci,
  POUND: ui,
  QUERY: fi,
  QUOTE: So,
  SEMI: Mo,
  SLASH: Xe,
  TILDE: jn,
  UNDERSCORE: di,
  EMOJI: Ou,
  SYM: hi
});
const en = /[a-z]/, cs = new RegExp("\\p{L}", "u"), us = new RegExp("\\p{Emoji}", "u"), fs = /\d/, aa = /\s/, ca = `
`, g0 = "️", b0 = "‍";
let ur = null, fr = null;
function y0(n) {
  n === void 0 && (n = []);
  const e = {};
  Se.groups = e;
  const t = new Se();
  ur == null && (ur = ua(u0)), fr == null && (fr = ua(f0)), A(t, "'", ei), A(t, "{", zn), A(t, "}", Bn), A(t, "[", Br), A(t, "]", jr), A(t, "(", Fr), A(t, ")", Hr), A(t, "<", Vr), A(t, ">", qr), A(t, "（", Wr), A(t, "）", Jr), A(t, "「", Kr), A(t, "」", Ur), A(t, "『", Gr), A(t, "』", Yr), A(t, "＜", Zr), A(t, "＞", Qr), A(t, "&", Xr), A(t, "*", ti), A(t, "@", yt), A(t, "`", ri), A(t, "^", ii), A(t, ":", wt), A(t, ",", vo), A(t, "$", si), A(t, ".", Ze), A(t, "=", oi), A(t, "!", wo), A(t, "-", Qe), A(t, "%", li), A(t, "|", ai), A(t, "+", ci), A(t, "#", ui), A(t, "?", fi), A(t, '"', So), A(t, "/", Xe), A(t, ";", Mo), A(t, "~", jn), A(t, "_", di), A(t, "\\", ni);
  const r = De(t, fs, yo, {
    [Ps]: !0
  });
  De(r, fs, r);
  const i = De(t, en, ft, {
    [Ls]: !0
  });
  De(i, en, i);
  const s = De(t, cs, Bs, {
    [$s]: !0
  });
  De(s, en), De(s, cs, s);
  const o = De(t, aa, Tu, {
    [oa]: !0
  });
  A(t, ca, ko, {
    [oa]: !0
  }), A(o, ca), De(o, aa, o);
  const l = De(t, us, Ou, {
    [_u]: !0
  });
  De(l, us, l), A(l, g0, l);
  const a = A(l, b0);
  De(a, us, l);
  const c = [[en, i]], u = [[en, null], [cs, s]];
  for (let f = 0; f < ur.length; f++)
    mt(t, ur[f], js, ft, c);
  for (let f = 0; f < fr.length; f++)
    mt(t, fr[f], Fs, Bs, u);
  Ft(js, {
    tld: !0,
    ascii: !0
  }, e), Ft(Fs, {
    utld: !0,
    alpha: !0
  }, e), mt(t, "file", yr, ft, c), mt(t, "mailto", yr, ft, c), mt(t, "http", sn, ft, c), mt(t, "https", sn, ft, c), mt(t, "ftp", sn, ft, c), mt(t, "ftps", sn, ft, c), Ft(yr, {
    scheme: !0,
    ascii: !0
  }, e), Ft(sn, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((f, d) => f[0] > d[0] ? 1 : -1);
  for (let f = 0; f < n.length; f++) {
    const d = n[f][0], p = n[f][1] ? {
      [d0]: !0
    } : {
      [h0]: !0
    };
    d.indexOf("-") >= 0 ? p[zs] = !0 : en.test(d) ? fs.test(d) ? p[br] = !0 : p[Ls] = !0 : p[Ps] = !0, la(t, d, d, p);
  }
  return la(t, "localhost", Qn, {
    ascii: !0
  }), t.jd = new Se(hi), {
    start: t,
    tokens: wn({
      groups: e
    }, Eu)
  };
}
function k0(n, e) {
  const t = v0(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, i = [];
  let s = 0, o = 0;
  for (; o < r; ) {
    let l = n, a = null, c = 0, u = null, f = -1, d = -1;
    for (; o < r && (a = l.go(t[o])); )
      l = a, l.accepts() ? (f = 0, d = 0, u = l) : f >= 0 && (f += t[o].length, d++), c += t[o].length, s += t[o].length, o++;
    s -= f, o -= d, c -= f, i.push({
      t: u.t,
      // token type/name
      v: e.slice(s - c, s),
      // string value
      s: s - c,
      // start index
      e: s
      // end index (excluding)
    });
  }
  return i;
}
function v0(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let i = n.charCodeAt(r), s, o = i < 55296 || i > 56319 || r + 1 === t || (s = n.charCodeAt(r + 1)) < 56320 || s > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(o), r += o.length;
  }
  return e;
}
function mt(n, e, t, r, i) {
  let s;
  const o = e.length;
  for (let l = 0; l < o - 1; l++) {
    const a = e[l];
    n.j[a] ? s = n.j[a] : (s = new Se(r), s.jr = i.slice(), n.j[a] = s), n = s;
  }
  return s = new Se(t), s.jr = i.slice(), n.j[e[o - 1]] = s, s;
}
function ua(n) {
  const e = [], t = [];
  let r = 0, i = "0123456789";
  for (; r < n.length; ) {
    let s = 0;
    for (; i.indexOf(n[r + s]) >= 0; )
      s++;
    if (s > 0) {
      e.push(t.join(""));
      for (let o = parseInt(n.substring(r, r + s), 10); o > 0; o--)
        t.pop();
      r += s;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const Xn = {
  defaultProtocol: "http",
  events: null,
  format: fa,
  formatHref: fa,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function xo(n, e) {
  e === void 0 && (e = null);
  let t = wn({}, Xn);
  n && (t = wn(t, n instanceof xo ? n.o : n));
  const r = t.ignoreTags, i = [];
  for (let s = 0; s < r.length; s++)
    i.push(r[s].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
xo.prototype = {
  o: Xn,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(n, e, t) {
    const r = e != null;
    let i = this.o[n];
    return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : Xn[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function fa(n) {
  return n;
}
function Nu(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
Nu.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
  */
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(n) {
    return n === void 0 && (n = Xn.defaultProtocol), {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), s = this.toFormattedString(n), o = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), u = n.getObj("attributes", t, e), f = n.getObj("events", t, e);
    return o.href = r, l && (o.class = l), a && (o.target = a), c && (o.rel = c), u && wn(o, u), {
      tagName: i,
      attributes: o,
      content: s,
      eventListeners: f
    };
  }
};
function Ei(n, e) {
  class t extends Nu {
    constructor(i, s) {
      super(i, s), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const da = Ei("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), ha = Ei("text"), w0 = Ei("nl"), dr = Ei("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n) {
    return n === void 0 && (n = Xn.defaultProtocol), this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== Qn && n[1].t === wt;
  }
}), Ie = (n) => new Se(n);
function S0(n) {
  let {
    groups: e
  } = n;
  const t = e.domain.concat([Xr, ti, yt, ni, ri, ii, si, oi, Qe, yo, li, ai, ci, ui, Xe, hi, jn, di]), r = [ei, wt, vo, Ze, wo, fi, So, Mo, Vr, qr, zn, Bn, jr, Br, Fr, Hr, Wr, Jr, Kr, Ur, Gr, Yr, Zr, Qr], i = [Xr, ei, ti, ni, ri, ii, si, oi, Qe, zn, Bn, li, ai, ci, ui, fi, Xe, hi, jn, di], s = Ie(), o = A(s, jn);
  F(o, i, o), F(o, e.domain, o);
  const l = Ie(), a = Ie(), c = Ie();
  F(s, e.domain, l), F(s, e.scheme, a), F(s, e.slashscheme, c), F(l, i, o), F(l, e.domain, l);
  const u = A(l, yt);
  A(o, yt, u), A(a, yt, u), A(c, yt, u);
  const f = A(o, Ze);
  F(f, i, o), F(f, e.domain, o);
  const d = Ie();
  F(u, e.domain, d), F(d, e.domain, d);
  const h = A(d, Ze);
  F(h, e.domain, d);
  const p = Ie(da);
  F(h, e.tld, p), F(h, e.utld, p), A(u, Qn, p);
  const m = A(d, Qe);
  F(m, e.domain, d), F(p, e.domain, d), A(p, Ze, h), A(p, Qe, m);
  const g = A(p, wt);
  F(g, e.numeric, da);
  const k = A(l, Qe), w = A(l, Ze);
  F(k, e.domain, l), F(w, i, o), F(w, e.domain, l);
  const S = Ie(dr);
  F(w, e.tld, S), F(w, e.utld, S), F(S, e.domain, l), F(S, i, o), A(S, Ze, w), A(S, Qe, k), A(S, yt, u);
  const O = A(S, wt), E = Ie(dr);
  F(O, e.numeric, E);
  const N = Ie(dr), z = Ie();
  F(N, t, N), F(N, r, z), F(z, t, N), F(z, r, z), A(S, Xe, N), A(E, Xe, N);
  const X = A(a, wt), R = A(c, wt), L = A(R, Xe), W = A(L, Xe);
  F(a, e.domain, l), A(a, Ze, w), A(a, Qe, k), F(c, e.domain, l), A(c, Ze, w), A(c, Qe, k), F(X, e.domain, N), A(X, Xe, N), F(W, e.domain, N), F(W, t, N), A(W, Xe, N);
  const Y = [
    [zn, Bn],
    // {}
    [Br, jr],
    // []
    [Fr, Hr],
    // ()
    [Vr, qr],
    // <>
    [Wr, Jr],
    // （）
    [Kr, Ur],
    // 「」
    [Gr, Yr],
    // 『』
    [Zr, Qr]
    // ＜＞
  ];
  for (let Ne = 0; Ne < Y.length; Ne++) {
    const [Pt, ze] = Y[Ne], ct = A(N, Pt);
    A(z, Pt, ct), A(ct, ze, N);
    const _e = Ie(dr);
    F(ct, t, _e);
    const Ye = Ie();
    F(ct, r), F(_e, t, _e), F(_e, r, Ye), F(Ye, t, _e), F(Ye, r, Ye), A(_e, ze, N), A(Ye, ze, N);
  }
  return A(s, Qn, S), A(s, ko, w0), {
    start: s,
    tokens: Eu
  };
}
function M0(n, e, t) {
  let r = t.length, i = 0, s = [], o = [];
  for (; i < r; ) {
    let l = n, a = null, c = null, u = 0, f = null, d = -1;
    for (; i < r && !(a = l.go(t[i].t)); )
      o.push(t[i++]);
    for (; i < r && (c = a || l.go(t[i].t)); )
      a = null, l = c, l.accepts() ? (d = 0, f = l) : d >= 0 && d++, i++, u++;
    if (d < 0)
      i -= u, i < r && (o.push(t[i]), i++);
    else {
      o.length > 0 && (s.push(ds(ha, e, o)), o = []), i -= d, u -= d;
      const h = f.t, p = t.slice(i - u, i);
      s.push(ds(h, e, p));
    }
  }
  return o.length > 0 && s.push(ds(ha, e, o)), s;
}
function ds(n, e, t) {
  const r = t[0].s, i = t[t.length - 1].e, s = e.slice(r, i);
  return new n(s, t);
}
const x0 = typeof console < "u" && console && console.warn || (() => {
}), C0 = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ee = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function _0() {
  Se.groups = {}, ee.scanner = null, ee.parser = null, ee.tokenQueue = [], ee.pluginQueue = [], ee.customSchemes = [], ee.initialized = !1;
}
function pa(n, e) {
  if (e === void 0 && (e = !1), ee.initialized && x0(`linkifyjs: already initialized - will not register custom scheme "${n}" ${C0}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ee.customSchemes.push([n, e]);
}
function T0() {
  ee.scanner = y0(ee.customSchemes);
  for (let n = 0; n < ee.tokenQueue.length; n++)
    ee.tokenQueue[n][1]({
      scanner: ee.scanner
    });
  ee.parser = S0(ee.scanner.tokens);
  for (let n = 0; n < ee.pluginQueue.length; n++)
    ee.pluginQueue[n][1]({
      scanner: ee.scanner,
      parser: ee.parser
    });
  ee.initialized = !0;
}
function Au(n) {
  return ee.initialized || T0(), M0(ee.parser.start, n, k0(ee.scanner.start, n));
}
function Du(n, e, t) {
  if (e === void 0 && (e = null), t === void 0 && (t = null), e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new xo(t), i = Au(n), s = [];
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    l.isLink && (!e || l.t === e) && r.check(l) && s.push(l.toFormattedObject(r));
  }
  return s;
}
function O0(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function E0(n) {
  return new $e({
    key: new at("autolink"),
    appendTransaction: (e, t, r) => {
      const i = e.some((c) => c.docChanged) && !t.doc.eq(r.doc), s = e.some((c) => c.getMeta("preventAutolink"));
      if (!i || s)
        return;
      const { tr: o } = r, l = dg(t.doc, [...e]);
      if (wg(l).forEach(({ newRange: c }) => {
        const u = pg(r.doc, c, (h) => h.isTextblock);
        let f, d;
        if (u.length > 1 ? (f = u[0], d = r.doc.textBetween(f.pos, f.pos + f.node.nodeSize, void 0, " ")) : u.length && r.doc.textBetween(c.from, c.to, " ", " ").endsWith(" ") && (f = u[0], d = r.doc.textBetween(f.pos, c.to, void 0, " ")), f && d) {
          const h = d.split(" ").filter((k) => k !== "");
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], m = f.pos + d.lastIndexOf(p);
          if (!p)
            return !1;
          const g = Au(p).map((k) => k.toObject());
          if (!O0(g))
            return !1;
          g.filter((k) => k.isLink).map((k) => ({
            ...k,
            from: m + k.start + 1,
            to: m + k.end + 1
          })).filter((k) => r.schema.marks.code ? !r.doc.rangeHasMark(k.from, k.to, r.schema.marks.code) : !0).filter((k) => n.validate ? n.validate(k.value) : !0).forEach((k) => {
            bo(k.from, k.to, r.doc).some((w) => w.mark.type === n.type) || o.addMark(k.from, k.to, n.type.create({
              href: k.href
            }));
          });
        }
      }), !!o.steps.length)
        return o;
    }
  });
}
function N0(n) {
  return new $e({
    key: new at("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var i, s;
        if (n.whenNotEditable && e.editable || r.button !== 0)
          return !1;
        let o = r.target;
        const l = [];
        for (; o.nodeName !== "DIV"; )
          l.push(o), o = o.parentNode;
        if (!l.find((d) => d.nodeName === "A"))
          return !1;
        const a = Cu(e.state, n.type.name), c = r.target, u = (i = c == null ? void 0 : c.href) !== null && i !== void 0 ? i : a.href, f = (s = c == null ? void 0 : c.target) !== null && s !== void 0 ? s : a.target;
        return c && u ? (window.open(u, f), !0) : !1;
      }
    }
  });
}
function A0(n) {
  return new $e({
    key: new at("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: i } = e, { selection: s } = i, { empty: o } = s;
        if (o)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = Du(l).find((c) => c.isLink && c.value === l);
        return !l || !a ? !1 : (n.editor.commands.setMark(n.type, {
          href: a.href
        }), !0);
      }
    }
  });
}
const D0 = lt.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  onCreate() {
    this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        pa(n);
        return;
      }
      pa(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    _0();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      validate: void 0
    };
  },
  addAttributes() {
    return {
      href: {
        default: null
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [{ tag: 'a[href]:not([href *= "javascript:" i])' }];
  },
  renderHTML({ HTMLAttributes: n }) {
    var e;
    return !((e = n.href) === null || e === void 0) && e.startsWith("javascript:") ? ["a", he(this.options.HTMLAttributes, { ...n, href: "" }), 0] : ["a", he(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => e().setMark(this.name, n).setMeta("preventAutolink", !0).run(),
      toggleLink: (n) => ({ chain: e }) => e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run(),
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Zn({
        find: (n) => {
          const e = [];
          if (n) {
            const t = Du(n).filter((r) => r.isLink);
            t.length && t.forEach((r) => e.push({
              text: r.value,
              data: {
                href: r.href
              },
              index: r.start
            }));
          }
          return e;
        },
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [];
    return this.options.autolink && n.push(E0({
      type: this.type,
      validate: this.options.validate
    })), this.options.openOnClick && n.push(N0({
      type: this.type,
      whenNotEditable: this.options.openOnClick === "whenNotEditable"
    })), this.options.linkOnPaste && n.push(A0({
      editor: this.editor,
      type: this.type
    })), n;
  }
}), I0 = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, R0 = Ee.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["img", he(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setImage: (n) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: n
      })
    };
  },
  addInputRules() {
    return [
      Xg({
        find: I0,
        type: this.type,
        getAttributes: (n) => {
          const [, , e, t, r] = n;
          return { src: t, alt: e, title: r };
        }
      })
    ];
  }
}), P0 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, L0 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, $0 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, z0 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, B0 = lt.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", he(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      $r({
        find: P0,
        type: this.type
      }),
      $r({
        find: $0,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Zn({
        find: L0,
        type: this.type
      }),
      Zn({
        find: z0,
        type: this.type
      })
    ];
  }
}), j0 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, F0 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, H0 = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, V0 = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, q0 = lt.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", he(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      $r({
        find: j0,
        type: this.type
      }),
      $r({
        find: H0,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Zn({
        find: F0,
        type: this.type
      }),
      Zn({
        find: V0,
        type: this.type
      })
    ];
  }
}), W0 = lt.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["u", he(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: n }) => n.setMark(this.name),
      toggleUnderline: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetUnderline: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
});
var pi = 200, ce = function() {
};
ce.prototype.append = function(e) {
  return e.length ? (e = ce.from(e), !this.length && e || e.length < pi && this.leafAppend(e) || this.length < pi && e.leafPrepend(this) || this.appendInner(e)) : this;
};
ce.prototype.prepend = function(e) {
  return e.length ? ce.from(e).append(this) : this;
};
ce.prototype.appendInner = function(e) {
  return new J0(this, e);
};
ce.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? ce.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
ce.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
ce.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
ce.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(s, o) {
    return i.push(e(s, o));
  }, t, r), i;
};
ce.from = function(e) {
  return e instanceof ce ? e : e && e.length ? new Iu(e) : ce.empty;
};
var Iu = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, o, l) {
    for (var a = s; a < o; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
    for (var a = s - 1; a >= o; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= pi)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= pi)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(ce);
ce.empty = new Iu([]);
var J0 = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(ce);
const K0 = 500;
class je {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, s;
    t && (i = this.remapping(r, this.items.length), s = i.maps.length);
    let o = e.tr, l, a, c = [], u = [];
    return this.items.forEach((f, d) => {
      if (!f.step) {
        i || (i = this.remapping(r, d + 1), s = i.maps.length), s--, u.push(f);
        return;
      }
      if (i) {
        u.push(new et(f.map));
        let h = f.step.map(i.slice(s)), p;
        h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new et(p, void 0, void 0, c.length + u.length))), s--, p && i.appendMap(p, s);
      } else
        o.maybeStep(f.step);
      if (f.selection)
        return l = i ? f.selection.map(i.slice(s)) : f.selection, a = new je(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let s = [], o = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let f = e.steps[u].invert(e.docs[u]), d = new et(e.mapping.maps[u], f, t), h;
      (h = a && a.merge(d)) && (d = h, u ? s.pop() : l = l.slice(0, l.length - 1)), s.push(d), t && (o++, t = void 0), i || (a = d);
    }
    let c = o - r.depth;
    return c > G0 && (l = U0(l, c), o -= c), new je(l.append(s), o);
  }
  remapping(e, t) {
    let r = new un();
    return this.items.forEach((i, s) => {
      let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, o);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new je(this.items.append(e.map((t) => new et(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((d) => {
      d.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((d) => {
      let h = s.getMirror(--a);
      if (h == null)
        return;
      o = Math.min(o, h);
      let p = s.maps[h];
      if (d.step) {
        let m = e.steps[h].invert(e.docs[h]), g = d.selection && d.selection.map(s.slice(a + 1, h));
        g && l++, r.push(new et(p, m, g));
      } else
        r.push(new et(p));
    }, i);
    let c = [];
    for (let d = t; d < o; d++)
      c.push(new et(s.maps[d]));
    let u = this.items.slice(0, i).append(c).append(r), f = new je(u, l);
    return f.emptyItemCount() > K0 && (f = f.compress(this.items.length - r.length)), f;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        i.push(o), o.selection && s++;
      else if (o.step) {
        let a = o.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = o.selection && o.selection.map(t.slice(r));
          u && s++;
          let f = new et(c.invert(), a, u), d, h = i.length - 1;
          (d = i.length && i[h].merge(f)) ? i[h] = d : i.push(f);
        }
      } else
        o.map && r--;
    }, this.items.length, 0), new je(ce.from(i.reverse()), s);
  }
}
je.empty = new je(ce.empty, 0);
function U0(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class et {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new et(t.getMap().invert(), t, this.selection);
    }
  }
}
class kt {
  constructor(e, t, r, i, s) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = s;
  }
}
const G0 = 20;
function Y0(n, e, t, r) {
  let i = t.getMeta(Nt), s;
  if (i)
    return i.historyState;
  t.getMeta(Q0) && (n = new kt(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta(Nt))
    return o.getMeta(Nt).redo ? new kt(n.done.addTransform(t, void 0, r, kr(e)), n.undone, ma(t.mapping.maps[t.steps.length - 1]), n.prevTime, n.prevComposition) : new kt(n.done, n.undone.addTransform(t, void 0, r, kr(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !Z0(t, n.prevRanges)), c = o ? hs(n.prevRanges, t.mapping) : ma(t.mapping.maps[t.steps.length - 1]);
    return new kt(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, kr(e)), je.empty, c, t.time, l ?? n.prevComposition);
  } else
    return (s = t.getMeta("rebased")) ? new kt(n.done.rebased(t, s), n.undone.rebased(t, s), hs(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new kt(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), hs(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function Z0(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let s = 0; s < e.length; s += 2)
      r <= e[s + 1] && i >= e[s] && (t = !0);
  }), t;
}
function ma(n) {
  let e = [];
  return n.forEach((t, r, i, s) => e.push(i, s)), e;
}
function hs(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), s = e.map(n[r + 1], -1);
    i <= s && t.push(i, s);
  }
  return t;
}
function Ru(n, e, t, r) {
  let i = kr(e), s = Nt.get(e).spec.config, o = (r ? n.undone : n.done).popEvent(e, i);
  if (!o)
    return;
  let l = o.selection.resolve(o.transform.doc), a = (r ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), s, i), c = new kt(r ? a : o.remaining, r ? o.remaining : a, null, 0, -1);
  t(o.transform.setSelection(l).setMeta(Nt, { redo: r, historyState: c }).scrollIntoView());
}
let ps = !1, ga = null;
function kr(n) {
  let e = n.plugins;
  if (ga != e) {
    ps = !1, ga = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        ps = !0;
        break;
      }
  }
  return ps;
}
const Nt = new at("history"), Q0 = new at("closeHistory");
function X0(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new $e({
    key: Nt,
    state: {
      init() {
        return new kt(je.empty, je.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return Y0(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? Pu : r == "historyRedo" ? Lu : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
const Pu = (n, e) => {
  let t = Nt.getState(n);
  return !t || t.done.eventCount == 0 ? !1 : (e && Ru(t, n, e, !1), !0);
}, Lu = (n, e) => {
  let t = Nt.getState(n);
  return !t || t.undone.eventCount == 0 ? !1 : (e && Ru(t, n, e, !0), !0);
}, e1 = Je.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Pu(n, e),
      redo: () => ({ state: n, dispatch: e }) => Lu(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      X0(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), t1 = Je.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: "left"
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (n) => n.style.textAlign || this.options.defaultAlignment,
            renderHTML: (n) => n.textAlign === this.options.defaultAlignment ? {} : { style: `text-align: ${n.textAlign}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (n) => ({ commands: e }) => this.options.alignments.includes(n) ? this.options.types.map((t) => e.updateAttributes(t, { textAlign: n })).every((t) => t) : !1,
      unsetTextAlign: () => ({ commands: n }) => this.options.types.map((e) => n.resetAttributes(e, "textAlign")).every((e) => e)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
});
function n1(n) {
  pt(n, "svelte-k3hvno", '.container-record.svelte-k3hvno.svelte-k3hvno.svelte-k3hvno{flex:1 1 0}.field.svelte-k3hvno.svelte-k3hvno.svelte-k3hvno{margin-top:2rem;margin-bottom:1rem}.field.svelte-k3hvno label.svelte-k3hvno.svelte-k3hvno{text-transform:capitalize;display:block;border:0;position:relative;margin-bottom:0.5rem;font-size:0.875rem}.field.svelte-k3hvno input[type=text].svelte-k3hvno.svelte-k3hvno,.field.svelte-k3hvno input[type=date].svelte-k3hvno.svelte-k3hvno,.field.svelte-k3hvno input[type=datetime-local].svelte-k3hvno.svelte-k3hvno,.field.svelte-k3hvno textarea.svelte-k3hvno.svelte-k3hvno,.field.svelte-k3hvno .checkbox.svelte-k3hvno.svelte-k3hvno,.field.svelte-k3hvno select.single.svelte-k3hvno.svelte-k3hvno,.field.svelte-k3hvno .select-multiple.svelte-k3hvno.svelte-k3hvno,.field.svelte-k3hvno input[type=number].svelte-k3hvno.svelte-k3hvno{display:block;position:relative;outline:none;box-shadow:rgba(225, 228, 232, 0.2) 0px 2px 0px inset;box-sizing:border-box;background-color:rgb(255, 255, 255);border:1px solid rgb(207, 217, 224);border-radius:6px;color:rgb(65, 77, 99);font-size:0.875rem;line-height:1.25rem;padding:0.625rem 0.75rem;margin:0px;cursor:auto;width:100%;height:40px}.field.svelte-k3hvno input[type=text].svelte-k3hvno.svelte-k3hvno:active,.field.svelte-k3hvno input[type=text].svelte-k3hvno.svelte-k3hvno:focus,.field.svelte-k3hvno input[type=date].svelte-k3hvno.svelte-k3hvno:active,.field.svelte-k3hvno input[type=date].svelte-k3hvno.svelte-k3hvno:focus,.field.svelte-k3hvno textarea.svelte-k3hvno.svelte-k3hvno:active,.field.svelte-k3hvno textarea.svelte-k3hvno.svelte-k3hvno:focus,.field.svelte-k3hvno .checkbox.svelte-k3hvno.svelte-k3hvno:focus-within,.field.svelte-k3hvno .checkbox.svelte-k3hvno.svelte-k3hvno:focus,.field.svelte-k3hvno .select-multiple.svelte-k3hvno.svelte-k3hvno:focus-within,.field.svelte-k3hvno .select-multiple.svelte-k3hvno.svelte-k3hvno:focus,.field.svelte-k3hvno select.single.svelte-k3hvno.svelte-k3hvno:active,.field.svelte-k3hvno select.single.svelte-k3hvno.svelte-k3hvno:focus,.field.svelte-k3hvno input[type=datetime-local].svelte-k3hvno.svelte-k3hvno:active,.field.svelte-k3hvno input[type=datetime-local].svelte-k3hvno.svelte-k3hvno:focus,.field.svelte-k3hvno input[type=number].svelte-k3hvno.svelte-k3hvno:active,.field.svelte-k3hvno input[type=number].svelte-k3hvno.svelte-k3hvno:focus{border-color:rgb(0, 89, 200);box-shadow:rgb(152, 203, 255) 0px 0px 0px 3px}.field.svelte-k3hvno .checkbox.svelte-k3hvno.svelte-k3hvno{display:flex;align-items:center}.field.svelte-k3hvno .checkbox label.svelte-k3hvno.svelte-k3hvno{margin:0;flex-grow:1}.field.svelte-k3hvno .checkbox input.svelte-k3hvno.svelte-k3hvno{margin-right:0.5rem}.field.svelte-k3hvno .select-multiple.svelte-k3hvno.svelte-k3hvno{display:flex;flex-direction:column;height:auto}.field.svelte-k3hvno .select-multiple label.svelte-k3hvno.svelte-k3hvno{display:inline;margin:0}.field.svelte-k3hvno .select-multiple.svelte-k3hvno>div.svelte-k3hvno{display:flex;align-items:center;margin:0.25rem 0}.field.svelte-k3hvno .select-multiple>div.svelte-k3hvno input.svelte-k3hvno{margin-right:0.5rem}.field.svelte-k3hvno textarea.svelte-k3hvno.svelte-k3hvno{resize:vertical}.field.svelte-k3hvno select.single.svelte-k3hvno.svelte-k3hvno{appearance:none;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02IDlsNiA2bDYgLTYiIC8+PC9zdmc+") no-repeat 98.5% 50%}.field.svelte-k3hvno .tiptap{outline:none;box-shadow:rgba(225, 228, 232, 0.2) 0px 2px 0px inset;box-sizing:border-box;background-color:rgb(255, 255, 255);border:1px solid rgb(207, 217, 224);border-radius:0 0 6px 6px;color:rgb(65, 77, 99);font-size:0.875rem;padding:10px 0.75rem}.field.svelte-k3hvno .tiptap > * + *{margin-top:0.75em}.field.svelte-k3hvno .tiptap ul,.field.svelte-k3hvno .tiptap ol{padding:0 1rem}.field.svelte-k3hvno .tiptap h1,.field.svelte-k3hvno .tiptap h2,.field.svelte-k3hvno .tiptap h3,.field.svelte-k3hvno .tiptap h4,.field.svelte-k3hvno .tiptap h5,.field.svelte-k3hvno .tiptap h6{line-height:1.1}.field.svelte-k3hvno .tiptap img{max-width:100%;height:auto}.field.svelte-k3hvno .tiptap a{color:#007bff;text-decoration:underline}.field.svelte-k3hvno .tiptap blockquote{padding-left:1rem;border-left:2px solid rgba(13, 13, 13, 0.1)}.field.svelte-k3hvno .tiptap hr{border:none;border-top:2px solid rgba(13, 13, 13, 0.1);margin:2rem 0}input.svelte-k3hvno.svelte-k3hvno.svelte-k3hvno,select.svelte-k3hvno.svelte-k3hvno.svelte-k3hvno{vertical-align:middle}.toolbar.svelte-k3hvno.svelte-k3hvno.svelte-k3hvno{height:2.5rem;display:flex;align-items:center;position:relative;border:1px solid #ccc;border-bottom:none}.toolbar.svelte-k3hvno button.svelte-k3hvno.svelte-k3hvno{width:2.5rem;height:2.5rem;background:#fff;border:none;cursor:pointer;padding:0;transition:all 0.2s ease-in-out}.toolbar.svelte-k3hvno button.svelte-k3hvno.svelte-k3hvno:hover{background:#f5f5f5}.toolbar.svelte-k3hvno select.svelte-k3hvno.svelte-k3hvno{background:#fff;border:none;cursor:pointer;padding:10px 2rem 10px 1rem;transition:all 0.2s ease-in-out;appearance:none;outline:none;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgxMnYxMkgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zIDRsMyAzIDMgLTMiIC8+PC9zdmc+") no-repeat 90% 50%}.toolbar.svelte-k3hvno .separator.svelte-k3hvno.svelte-k3hvno{border-left:1px solid #ccc;height:2.5rem}select.single.svelte-k3hvno.svelte-k3hvno.svelte-k3hvno{background:#fff;border:1px solid #ccc;border-radius:4px;color:#333;cursor:pointer;font-size:14px;padding:4px 24px 4px 8px;transition:all 0.2s ease-in-out;width:120px;margin-right:1rem}select.single.svelte-k3hvno.svelte-k3hvno.svelte-k3hvno:focus{border-color:#0077cc;outline:none}.link-widget.svelte-k3hvno.svelte-k3hvno.svelte-k3hvno{position:absolute;width:max(50%, 200px);top:100%;right:0%;display:flex;align-items:center;justify-content:space-evenly;background-color:#fff;border:1px solid #ccc;padding:0.5rem;z-index:2;gap:0.5rem}.link-widget.svelte-k3hvno input.svelte-k3hvno.svelte-k3hvno{margin-right:10px;border:1px solid #ccc;border-radius:4px;padding:5px}.link-widget.svelte-k3hvno button.svelte-k3hvno.svelte-k3hvno{background-color:#007bff;color:#fff;border:none;padding:10px 1rem;border-radius:4px;cursor:pointer;margin-right:0;height:100%}.link-widget.svelte-k3hvno button.svelte-k3hvno.svelte-k3hvno:hover{background-color:#0056b3}');
}
function ba(n, e, t) {
  const r = n.slice();
  return r[43] = e[t][0], r[44] = e[t][1], r[45] = e, r[46] = t, r;
}
function ya(n, e, t) {
  const r = n.slice();
  return r[47] = e[t], r;
}
function ka(n, e, t) {
  const r = n.slice();
  return r[47] = e[t], r;
}
function va(n) {
  let e, t = G(Object.entries(
    /*config*/
    n[1].fields
  )), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = Ca(ba(n, t, i));
  return {
    c() {
      e = v("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      b(e, "class", "container-record svelte-k3hvno");
    },
    m(i, s) {
      _(i, e, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
    },
    p(i, s) {
      if (s[0] & /*record, config, persistLocal, richElements, richLinkWidgets, richEditors, richLinkTexts, changeEditorText*/
      255) {
        t = G(Object.entries(
          /*config*/
          i[1].fields
        ));
        let o;
        for (o = 0; o < t.length; o += 1) {
          const l = ba(i, t, o);
          r[o] ? r[o].p(l, s) : (r[o] = Ca(l), r[o].c(), r[o].m(e, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
    },
    d(i) {
      i && x(e), Ce(r, i);
    }
  };
}
function r1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c, u, f, d, h;
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), l = v("input"), f = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(l, "type", "text"), b(l, "name", a = /*name*/
      n[43]), b(l, "id", c = /*name*/
      n[43]), l.value = u = /*record*/
      n[0][
        /*name*/
        n[43]
      ], b(l, "class", "svelte-k3hvno"), b(e, "class", "field svelte-k3hvno");
    },
    m(p, m) {
      _(p, e, m), y(e, t), y(t, i), y(e, o), y(e, l), y(e, f), d || (h = P(
        l,
        "change",
        /*change_handler_9*/
        n[40]
      ), d = !0);
    },
    p(p, m) {
      m[0] & /*config*/
      2 && r !== (r = /*name*/
      p[43] + "") && K(i, r), m[0] & /*config*/
      2 && s !== (s = /*name*/
      p[43]) && b(t, "for", s), m[0] & /*config*/
      2 && a !== (a = /*name*/
      p[43]) && b(l, "name", a), m[0] & /*config*/
      2 && c !== (c = /*name*/
      p[43]) && b(l, "id", c), m[0] & /*record, config*/
      3 && u !== (u = /*record*/
      p[0][
        /*name*/
        p[43]
      ]) && l.value !== u && (l.value = u);
    },
    d(p) {
      p && x(e), d = !1, h();
    }
  };
}
function i1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c = G(
    /*field*/
    n[44].options
  ), u = [];
  for (let f = 0; f < c.length; f += 1)
    u[f] = wa(ya(n, c, f));
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), l = v("div");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      a = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(l, "class", "select-multiple svelte-k3hvno"), b(l, "tabindex", "-1"), b(e, "class", "field svelte-k3hvno");
    },
    m(f, d) {
      _(f, e, d), y(e, t), y(t, i), y(e, o), y(e, l);
      for (let h = 0; h < u.length; h += 1)
        u[h] && u[h].m(l, null);
      y(e, a);
    },
    p(f, d) {
      if (d[0] & /*config*/
      2 && r !== (r = /*name*/
      f[43] + "") && K(i, r), d[0] & /*config*/
      2 && s !== (s = /*name*/
      f[43]) && b(t, "for", s), d[0] & /*config, record, persistLocal*/
      131) {
        c = G(
          /*field*/
          f[44].options
        );
        let h;
        for (h = 0; h < c.length; h += 1) {
          const p = ya(f, c, h);
          u[h] ? u[h].p(p, d) : (u[h] = wa(p), u[h].c(), u[h].m(l, null));
        }
        for (; h < u.length; h += 1)
          u[h].d(1);
        u.length = c.length;
      }
    },
    d(f) {
      f && x(e), Ce(u, f);
    }
  };
}
function s1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c, u, f, d, h = G(
    /*field*/
    n[44].options
  ), p = [];
  for (let g = 0; g < h.length; g += 1)
    p[g] = Sa(ka(n, h, g));
  function m() {
    n[37].call(
      l,
      /*name*/
      n[43]
    );
  }
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), l = v("select");
      for (let g = 0; g < p.length; g += 1)
        p[g].c();
      u = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(l, "class", "single svelte-k3hvno"), b(l, "name", a = /*name*/
      n[43]), b(l, "id", c = /*name*/
      n[43]), /*record*/
      n[0][
        /*name*/
        n[43]
      ] === void 0 && Hn(m), b(e, "class", "field svelte-k3hvno");
    },
    m(g, k) {
      _(g, e, k), y(e, t), y(t, i), y(e, o), y(e, l);
      for (let w = 0; w < p.length; w += 1)
        p[w] && p[w].m(l, null);
      ms(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ],
        !0
      ), y(e, u), f || (d = [
        P(l, "change", m),
        P(
          l,
          "change",
          /*change_handler_7*/
          n[38]
        )
      ], f = !0);
    },
    p(g, k) {
      if (n = g, k[0] & /*config*/
      2 && r !== (r = /*name*/
      n[43] + "") && K(i, r), k[0] & /*config*/
      2 && s !== (s = /*name*/
      n[43]) && b(t, "for", s), k[0] & /*config*/
      2) {
        h = G(
          /*field*/
          n[44].options
        );
        let w;
        for (w = 0; w < h.length; w += 1) {
          const S = ka(n, h, w);
          p[w] ? p[w].p(S, k) : (p[w] = Sa(S), p[w].c(), p[w].m(l, null));
        }
        for (; w < p.length; w += 1)
          p[w].d(1);
        p.length = h.length;
      }
      k[0] & /*config*/
      2 && a !== (a = /*name*/
      n[43]) && b(l, "name", a), k[0] & /*config*/
      2 && c !== (c = /*name*/
      n[43]) && b(l, "id", c), k[0] & /*record, config*/
      3 && ms(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      );
    },
    d(g) {
      g && x(e), Ce(p, g), f = !1, Q(d);
    }
  };
}
function o1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c, u, f, d;
  function h() {
    n[35].call(
      l,
      /*name*/
      n[43]
    );
  }
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), l = v("input"), u = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(l, "type", "datetime-local"), b(l, "name", a = /*name*/
      n[43]), b(l, "id", c = /*name*/
      n[43]), b(l, "class", "svelte-k3hvno"), b(e, "class", "field svelte-k3hvno");
    },
    m(p, m) {
      _(p, e, m), y(e, t), y(t, i), y(e, o), y(e, l), re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      ), _(p, u, m), f || (d = [
        P(l, "input", h),
        P(
          l,
          "change",
          /*change_handler_6*/
          n[36]
        )
      ], f = !0);
    },
    p(p, m) {
      n = p, m[0] & /*config*/
      2 && r !== (r = /*name*/
      n[43] + "") && K(i, r), m[0] & /*config*/
      2 && s !== (s = /*name*/
      n[43]) && b(t, "for", s), m[0] & /*config*/
      2 && a !== (a = /*name*/
      n[43]) && b(l, "name", a), m[0] & /*config*/
      2 && c !== (c = /*name*/
      n[43]) && b(l, "id", c), m[0] & /*record, config*/
      3 && re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      );
    },
    d(p) {
      p && (x(e), x(u)), f = !1, Q(d);
    }
  };
}
function l1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c, u, f, d;
  function h() {
    n[33].call(
      l,
      /*name*/
      n[43]
    );
  }
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), l = v("input"), u = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(l, "type", "date"), b(l, "name", a = /*name*/
      n[43]), b(l, "id", c = /*name*/
      n[43]), b(l, "class", "svelte-k3hvno"), b(e, "class", "field svelte-k3hvno");
    },
    m(p, m) {
      _(p, e, m), y(e, t), y(t, i), y(e, o), y(e, l), re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      ), y(e, u), f || (d = [
        P(l, "input", h),
        P(
          l,
          "change",
          /*change_handler_5*/
          n[34]
        )
      ], f = !0);
    },
    p(p, m) {
      n = p, m[0] & /*config*/
      2 && r !== (r = /*name*/
      n[43] + "") && K(i, r), m[0] & /*config*/
      2 && s !== (s = /*name*/
      n[43]) && b(t, "for", s), m[0] & /*config*/
      2 && a !== (a = /*name*/
      n[43]) && b(l, "name", a), m[0] & /*config*/
      2 && c !== (c = /*name*/
      n[43]) && b(l, "id", c), m[0] & /*record, config*/
      3 && re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      );
    },
    d(p) {
      p && x(e), f = !1, Q(d);
    }
  };
}
function a1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c, u, f, d, h = (
    /*name*/
    n[43] + ""
  ), p, m, g, k, w;
  function S() {
    n[30].call(
      a,
      /*name*/
      n[43]
    );
  }
  function O() {
    return (
      /*click_handler_11*/
      n[32](
        /*name*/
        n[43]
      )
    );
  }
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), l = v("div"), a = v("input"), f = T(), d = v("label"), p = B(h), g = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(a, "type", "checkbox"), b(a, "name", c = /*name*/
      n[43]), b(a, "id", u = /*name*/
      n[43]), b(a, "class", "svelte-k3hvno"), b(d, "for", m = /*name*/
      n[43]), b(d, "class", "svelte-k3hvno"), b(l, "class", "checkbox svelte-k3hvno"), b(l, "tabindex", "-1"), b(e, "class", "field svelte-k3hvno");
    },
    m(E, N) {
      _(E, e, N), y(e, t), y(t, i), y(e, o), y(e, l), y(l, a), a.checked = /*record*/
      n[0][
        /*name*/
        n[43]
      ], y(l, f), y(l, d), y(d, p), y(e, g), k || (w = [
        P(a, "change", S),
        P(
          a,
          "change",
          /*change_handler_4*/
          n[31]
        ),
        P(l, "click", Ju(O))
      ], k = !0);
    },
    p(E, N) {
      n = E, N[0] & /*config*/
      2 && r !== (r = /*name*/
      n[43] + "") && K(i, r), N[0] & /*config*/
      2 && s !== (s = /*name*/
      n[43]) && b(t, "for", s), N[0] & /*config*/
      2 && c !== (c = /*name*/
      n[43]) && b(a, "name", c), N[0] & /*config*/
      2 && u !== (u = /*name*/
      n[43]) && b(a, "id", u), N[0] & /*record, config*/
      3 && (a.checked = /*record*/
      n[0][
        /*name*/
        n[43]
      ]), N[0] & /*config*/
      2 && h !== (h = /*name*/
      n[43] + "") && K(p, h), N[0] & /*config*/
      2 && m !== (m = /*name*/
      n[43]) && b(d, "for", m);
    },
    d(E) {
      E && x(e), k = !1, Q(w);
    }
  };
}
function c1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c = (
    /*name*/
    n[43]
  ), u, f, d, h = (
    /*richEditors*/
    n[2][
      /*name*/
      n[43]
    ] && Ma(n)
  );
  function p() {
    return (
      /*click_handler_10*/
      n[28](
        /*name*/
        n[43]
      )
    );
  }
  const m = () => (
    /*div0_binding*/
    n[29](a, c)
  ), g = () => (
    /*div0_binding*/
    n[29](null, c)
  );
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), h && h.c(), l = T(), a = v("div"), u = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(e, "class", "field svelte-k3hvno");
    },
    m(k, w) {
      _(k, e, w), y(e, t), y(t, i), y(e, o), h && h.m(e, null), y(e, l), y(e, a), m(), y(e, u), f || (d = P(a, "click", p), f = !0);
    },
    p(k, w) {
      n = k, w[0] & /*config*/
      2 && r !== (r = /*name*/
      n[43] + "") && K(i, r), w[0] & /*config*/
      2 && s !== (s = /*name*/
      n[43]) && b(t, "for", s), /*richEditors*/
      n[2][
        /*name*/
        n[43]
      ] ? h ? h.p(n, w) : (h = Ma(n), h.c(), h.m(e, l)) : h && (h.d(1), h = null), c !== /*name*/
      n[43] && (g(), c = /*name*/
      n[43], m());
    },
    d(k) {
      k && x(e), h && h.d(), g(), f = !1, d();
    }
  };
}
function u1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c, u, f, d;
  function h() {
    n[14].call(
      l,
      /*name*/
      n[43]
    );
  }
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), l = v("input"), u = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(l, "type", "number"), b(l, "name", a = /*name*/
      n[43]), b(l, "id", c = /*name*/
      n[43]), b(l, "class", "svelte-k3hvno"), b(e, "class", "field svelte-k3hvno");
    },
    m(p, m) {
      _(p, e, m), y(e, t), y(t, i), y(e, o), y(e, l), re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      ), y(e, u), f || (d = [
        P(l, "input", h),
        P(
          l,
          "change",
          /*change_handler_2*/
          n[15]
        )
      ], f = !0);
    },
    p(p, m) {
      n = p, m[0] & /*config*/
      2 && r !== (r = /*name*/
      n[43] + "") && K(i, r), m[0] & /*config*/
      2 && s !== (s = /*name*/
      n[43]) && b(t, "for", s), m[0] & /*config*/
      2 && a !== (a = /*name*/
      n[43]) && b(l, "name", a), m[0] & /*config*/
      2 && c !== (c = /*name*/
      n[43]) && b(l, "id", c), m[0] & /*record, config*/
      3 && Ka(l.value) !== /*record*/
      n[0][
        /*name*/
        n[43]
      ] && re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      );
    },
    d(p) {
      p && x(e), f = !1, Q(d);
    }
  };
}
function f1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c, u, f, d;
  function h() {
    n[12].call(
      l,
      /*name*/
      n[43]
    );
  }
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), l = v("textarea"), u = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(l, "name", a = /*name*/
      n[43]), b(l, "id", c = /*name*/
      n[43]), b(l, "rows", "4"), b(l, "class", "svelte-k3hvno"), b(e, "class", "field svelte-k3hvno");
    },
    m(p, m) {
      _(p, e, m), y(e, t), y(t, i), y(e, o), y(e, l), re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      ), y(e, u), f || (d = [
        P(l, "input", h),
        P(
          l,
          "change",
          /*change_handler_1*/
          n[13]
        )
      ], f = !0);
    },
    p(p, m) {
      n = p, m[0] & /*config*/
      2 && r !== (r = /*name*/
      n[43] + "") && K(i, r), m[0] & /*config*/
      2 && s !== (s = /*name*/
      n[43]) && b(t, "for", s), m[0] & /*config*/
      2 && a !== (a = /*name*/
      n[43]) && b(l, "name", a), m[0] & /*config*/
      2 && c !== (c = /*name*/
      n[43]) && b(l, "id", c), m[0] & /*record, config*/
      3 && re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      );
    },
    d(p) {
      p && x(e), f = !1, Q(d);
    }
  };
}
function d1(n) {
  let e, t, r = (
    /*name*/
    n[43] + ""
  ), i, s, o, l, a, c, u, f, d;
  function h() {
    n[10].call(
      l,
      /*name*/
      n[43]
    );
  }
  return {
    c() {
      e = v("div"), t = v("label"), i = B(r), o = T(), l = v("input"), u = T(), b(t, "for", s = /*name*/
      n[43]), b(t, "class", "svelte-k3hvno"), b(l, "type", "text"), b(l, "name", a = /*name*/
      n[43]), b(l, "id", c = /*name*/
      n[43]), b(l, "class", "svelte-k3hvno"), b(e, "class", "field svelte-k3hvno");
    },
    m(p, m) {
      _(p, e, m), y(e, t), y(t, i), y(e, o), y(e, l), re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      ), y(e, u), f || (d = [
        P(l, "input", h),
        P(
          l,
          "change",
          /*change_handler*/
          n[11]
        )
      ], f = !0);
    },
    p(p, m) {
      n = p, m[0] & /*config*/
      2 && r !== (r = /*name*/
      n[43] + "") && K(i, r), m[0] & /*config*/
      2 && s !== (s = /*name*/
      n[43]) && b(t, "for", s), m[0] & /*config*/
      2 && a !== (a = /*name*/
      n[43]) && b(l, "name", a), m[0] & /*config*/
      2 && c !== (c = /*name*/
      n[43]) && b(l, "id", c), m[0] & /*record, config*/
      3 && l.value !== /*record*/
      n[0][
        /*name*/
        n[43]
      ] && re(
        l,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      );
    },
    d(p) {
      p && x(e), f = !1, Q(d);
    }
  };
}
function h1(n) {
  let e, t, r;
  function i() {
    n[9].call(
      e,
      /*name*/
      n[43]
    );
  }
  return {
    c() {
      e = v("input"), b(e, "type", "hidden"), b(e, "class", "svelte-k3hvno");
    },
    m(s, o) {
      _(s, e, o), re(
        e,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      ), t || (r = P(e, "input", i), t = !0);
    },
    p(s, o) {
      n = s, o[0] & /*record, config*/
      3 && re(
        e,
        /*record*/
        n[0][
          /*name*/
          n[43]
        ]
      );
    },
    d(s) {
      s && x(e), t = !1, r();
    }
  };
}
function wa(n) {
  let e, t, r, i, s, o, l = (
    /*option*/
    n[47].label + ""
  ), a, c, u, f, d;
  function h() {
    return (
      /*change_handler_8*/
      n[39](
        /*name*/
        n[43],
        /*option*/
        n[47]
      )
    );
  }
  return {
    c() {
      e = v("div"), t = v("input"), s = T(), o = v("label"), a = B(l), u = T(), b(t, "type", "checkbox"), b(t, "name", r = /*option*/
      n[47].value), b(t, "id", i = /*option*/
      n[47].value), b(t, "class", "svelte-k3hvno"), b(o, "for", c = /*option*/
      n[47].value), b(o, "class", "svelte-k3hvno"), b(e, "class", "svelte-k3hvno");
    },
    m(p, m) {
      _(p, e, m), y(e, t), y(e, s), y(e, o), y(o, a), _(p, u, m), f || (d = P(t, "change", h), f = !0);
    },
    p(p, m) {
      n = p, m[0] & /*config*/
      2 && r !== (r = /*option*/
      n[47].value) && b(t, "name", r), m[0] & /*config*/
      2 && i !== (i = /*option*/
      n[47].value) && b(t, "id", i), m[0] & /*config*/
      2 && l !== (l = /*option*/
      n[47].label + "") && K(a, l), m[0] & /*config*/
      2 && c !== (c = /*option*/
      n[47].value) && b(o, "for", c);
    },
    d(p) {
      p && (x(e), x(u)), f = !1, d();
    }
  };
}
function Sa(n) {
  let e, t = (
    /*option*/
    n[47].label + ""
  ), r, i;
  return {
    c() {
      e = v("option"), r = B(t), e.__value = i = /*option*/
      n[47].value, re(e, e.__value);
    },
    m(s, o) {
      _(s, e, o), y(e, r);
    },
    p(s, o) {
      o[0] & /*config*/
      2 && t !== (t = /*option*/
      s[47].label + "") && K(r, t), o[0] & /*config*/
      2 && i !== (i = /*option*/
      s[47].value) && (e.__value = i, re(e, e.__value));
    },
    d(s) {
      s && x(e);
    }
  };
}
function Ma(n) {
  let e, t, r, i, s, o, l, a, c, u, f, d, h, p, m, g, k, w, S, O, E, N, z, X, R, L, W, Y, Ne, Pt, ze, ct, _e, Ye, _n, ir;
  function Ni(...Te) {
    return (
      /*change_handler_3*/
      n[16](
        /*name*/
        n[43],
        ...Te
      )
    );
  }
  function Ai() {
    return (
      /*click_handler*/
      n[17](
        /*name*/
        n[43]
      )
    );
  }
  function Di() {
    return (
      /*click_handler_1*/
      n[18](
        /*name*/
        n[43]
      )
    );
  }
  function Ii() {
    return (
      /*click_handler_2*/
      n[19](
        /*name*/
        n[43]
      )
    );
  }
  function Ri() {
    return (
      /*click_handler_3*/
      n[20](
        /*name*/
        n[43]
      )
    );
  }
  function Pi() {
    return (
      /*click_handler_4*/
      n[21](
        /*name*/
        n[43]
      )
    );
  }
  function Li() {
    return (
      /*click_handler_5*/
      n[22](
        /*name*/
        n[43]
      )
    );
  }
  function $i() {
    return (
      /*click_handler_6*/
      n[23](
        /*name*/
        n[43]
      )
    );
  }
  function zi() {
    return (
      /*click_handler_7*/
      n[24](
        /*name*/
        n[43]
      )
    );
  }
  function M() {
    return (
      /*click_handler_8*/
      n[25](
        /*name*/
        n[43]
      )
    );
  }
  let J = (
    /*richLinkWidgets*/
    n[4][
      /*name*/
      n[43]
    ] && xa(n)
  );
  return {
    c() {
      e = v("div"), t = v("select"), r = v("option"), r.textContent = "Paragraph", i = v("option"), i.textContent = "Heading 1", s = v("option"), s.textContent = "Heading 2", o = T(), l = v("div"), a = T(), c = v("button"), c.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l10 0"></path><path d="M4 18l14 0"></path></svg>', u = T(), f = v("button"), f.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M8 12l8 0"></path><path d="M6 18l12 0"></path></svg>', d = T(), h = v("button"), h.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M10 12l10 0"></path><path d="M6 18l14 0"></path></svg>', p = T(), m = v("div"), g = T(), k = v("button"), k.innerHTML = "<b>B</b>", w = T(), S = v("button"), S.innerHTML = "<i>I</i>", O = T(), E = v("button"), E.innerHTML = "<u>U</u>", N = T(), z = v("div"), X = T(), R = v("button"), R.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l11 0"></path><path d="M9 12l11 0"></path><path d="M9 18l11 0"></path><path d="M5 6l0 .01"></path><path d="M5 12l0 .01"></path><path d="M5 18l0 .01"></path></svg>', L = T(), W = v("button"), W.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 6h9"></path><path d="M11 12h9"></path><path d="M12 18h8"></path><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"></path><path d="M6 10v-6l-2 2"></path></svg>', Y = T(), Ne = v("div"), Pt = T(), ze = v("button"), ze.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15l6 -6"></path><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path></svg>', ct = T(), _e = v("button"), _e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 8h.01"></path><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path></svg>', Ye = T(), J && J.c(), r.__value = "paragraph", re(r, r.__value), i.__value = "h1", re(i, i.__value), s.__value = "h2", re(s, s.__value), b(t, "class", "svelte-k3hvno"), b(l, "class", "separator svelte-k3hvno"), b(c, "class", "svelte-k3hvno"), b(f, "class", "svelte-k3hvno"), b(h, "class", "svelte-k3hvno"), b(m, "class", "separator svelte-k3hvno"), b(k, "class", "svelte-k3hvno"), b(S, "class", "svelte-k3hvno"), b(E, "class", "svelte-k3hvno"), b(z, "class", "separator svelte-k3hvno"), b(R, "class", "svelte-k3hvno"), b(W, "class", "svelte-k3hvno"), b(Ne, "class", "separator svelte-k3hvno"), b(ze, "class", "link svelte-k3hvno"), b(_e, "class", "link svelte-k3hvno"), b(e, "class", "toolbar svelte-k3hvno");
    },
    m(Te, Bi) {
      _(Te, e, Bi), y(e, t), y(t, r), y(t, i), y(t, s), ms(t, "paragraph"), y(e, o), y(e, l), y(e, a), y(e, c), y(e, u), y(e, f), y(e, d), y(e, h), y(e, p), y(e, m), y(e, g), y(e, k), y(e, w), y(e, S), y(e, O), y(e, E), y(e, N), y(e, z), y(e, X), y(e, R), y(e, L), y(e, W), y(e, Y), y(e, Ne), y(e, Pt), y(e, ze), y(e, ct), y(e, _e), y(e, Ye), J && J.m(e, null), _n || (ir = [
        P(t, "change", Ni),
        P(c, "click", Ai),
        P(f, "click", Di),
        P(h, "click", Ii),
        P(k, "click", Ri),
        P(S, "click", Pi),
        P(E, "click", Li),
        P(R, "click", $i),
        P(W, "click", zi),
        P(ze, "click", M)
      ], _n = !0);
    },
    p(Te, Bi) {
      n = Te, /*richLinkWidgets*/
      n[4][
        /*name*/
        n[43]
      ] ? J ? J.p(n, Bi) : (J = xa(n), J.c(), J.m(e, null)) : J && (J.d(1), J = null);
    },
    d(Te) {
      Te && x(e), J && J.d(), _n = !1, Q(ir);
    }
  };
}
function xa(n) {
  let e, t, r, i, s, o;
  function l() {
    n[26].call(
      t,
      /*name*/
      n[43]
    );
  }
  function a() {
    return (
      /*click_handler_9*/
      n[27](
        /*name*/
        n[43]
      )
    );
  }
  return {
    c() {
      e = v("div"), t = v("input"), r = T(), i = v("button"), i.textContent = "Add", b(t, "type", "text"), b(t, "placeholder", "Link"), b(t, "class", "svelte-k3hvno"), b(i, "class", "svelte-k3hvno"), b(e, "class", "link-widget svelte-k3hvno");
    },
    m(c, u) {
      _(c, e, u), y(e, t), re(
        t,
        /*richLinkTexts*/
        n[5][
          /*name*/
          n[43]
        ]
      ), y(e, r), y(e, i), s || (o = [
        P(t, "mousedown", Ws(
          /*mousedown_handler*/
          n[8]
        )),
        P(t, "input", l),
        P(i, "click", a)
      ], s = !0);
    },
    p(c, u) {
      n = c, u[0] & /*richLinkTexts, config*/
      34 && t.value !== /*richLinkTexts*/
      n[5][
        /*name*/
        n[43]
      ] && re(
        t,
        /*richLinkTexts*/
        n[5][
          /*name*/
          n[43]
        ]
      );
    },
    d(c) {
      c && x(e), s = !1, Q(o);
    }
  };
}
function Ca(n) {
  let e;
  function t(s, o) {
    if (
      /*field*/
      s[44].hidden
    )
      return h1;
    if (
      /*field*/
      s[44].widget === "string"
    )
      return d1;
    if (
      /*field*/
      s[44].widget === "text"
    )
      return f1;
    if (
      /*field*/
      s[44].widget === "number"
    )
      return u1;
    if (
      /*field*/
      s[44].widget === "richtext"
    )
      return c1;
    if (
      /*field*/
      s[44].widget === "checkbox"
    )
      return a1;
    if (
      /*field*/
      s[44].widget === "date"
    )
      return l1;
    if (
      /*field*/
      s[44].widget === "datetime"
    )
      return o1;
    if (
      /*field*/
      s[44].widget === "select-single"
    )
      return s1;
    if (
      /*field*/
      s[44].widget === "select-multiple"
    )
      return i1;
    if (
      /*field*/
      s[44].widget === "derived"
    )
      return r1;
  }
  let r = t(n), i = r && r(n);
  return {
    c() {
      i && i.c(), e = pe();
    },
    m(s, o) {
      i && i.m(s, o), _(s, e, o);
    },
    p(s, o) {
      r === (r = t(s)) && i ? i.p(s, o) : (i && i.d(1), i = r && r(s), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(s) {
      s && x(e), i && i.d(s);
    }
  };
}
function p1(n) {
  let e, t = (
    /*config*/
    n[1] && /*record*/
    n[0] && va(n)
  );
  return {
    c() {
      t && t.c(), e = pe();
    },
    m(r, i) {
      t && t.m(r, i), _(r, e, i);
    },
    p(r, i) {
      /*config*/
      r[1] && /*record*/
      r[0] ? t ? t.p(r, i) : (t = va(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: j,
    o: j,
    d(r) {
      r && x(e), t && t.d(r);
    }
  };
}
function m1(n, e, t) {
  let r, i;
  ne(n, tr, (M) => t(41, r = M)), ne(n, Zs, (M) => t(42, i = M));
  let { record: s } = e, { config: o } = e, l = {}, a = {}, c = {}, u = {};
  function f(M, J) {
    switch (J) {
      case "paragraph":
        l[M].chain().focus().setParagraph().run();
        break;
      case "h1":
        l[M].chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case "h2":
        l[M].chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case "h3":
        l[M].chain().focus().toggleHeading({ level: 3 }).run();
        break;
      case "h4":
        l[M].chain().focus().toggleHeading({ level: 4 }).run();
        break;
      case "h5":
        l[M].chain().focus().toggleHeading({ level: 5 }).run();
        break;
      case "h6":
        l[M].chain().focus().toggleHeading({ level: 6 }).run();
        break;
      case "blockquote":
        l[M].chain().focus().toggleBlockquote().run();
        break;
    }
  }
  function d() {
    _t.update((M) => {
      var J;
      return i !== void 0 ? (M[r] ?? (M[r] = {}), (J = M[r])[i] ?? (J[i] = {}), M[r][i] = s) : (M[r] ?? (M[r] = {}), M[r] = s), M;
    });
  }
  Js(() => {
    !o || !o.fields || Object.entries(o.fields).map(([M, J]) => {
      J.widget === "richtext" && t(
        2,
        l[M] = new Qg({
          element: a[M],
          extensions: [
            t0,
            n0,
            r0,
            i0,
            s0,
            l0,
            c0,
            D0.configure({
              openOnClick: !0,
              HTMLAttributes: {
                target: "_blank",
                rel: "noopener noreferrer"
              }
            }),
            R0.configure({ inline: !0 }),
            B0,
            q0,
            W0,
            e1,
            t1.configure({ types: ["heading", "paragraph"] })
          ],
          content: s[M],
          onUpdate: () => {
            t(2, l), l[M] && (t(0, s[M] = l[M].getHTML(), s), d());
          }
        }),
        l
      );
    });
  }), nf(() => {
    Object.values(l).map((M) => {
      M.destroy();
    });
  });
  function h(M) {
    Ks.call(this, n, M);
  }
  function p(M) {
    s[M] = this.value, t(0, s), t(1, o), t(1, o);
  }
  function m(M) {
    s[M] = this.value, t(0, s), t(1, o), t(1, o);
  }
  const g = () => d();
  function k(M) {
    s[M] = this.value, t(0, s), t(1, o), t(1, o);
  }
  const w = () => d();
  function S(M) {
    s[M] = Ka(this.value), t(0, s), t(1, o), t(1, o);
  }
  const O = () => d(), E = (M, J) => f(M, J.target.value), N = (M) => l[M].chain().focus().setTextAlign("left").run(), z = (M) => l[M].chain().focus().setTextAlign("center").run(), X = (M) => l[M].chain().focus().setTextAlign("right").run(), R = (M) => l[M].chain().focus().toggleBold().run(), L = (M) => l[M].chain().focus().toggleItalic().run(), W = (M) => l[M].chain().focus().toggleUnderline().run(), Y = (M) => l[M].chain().focus().toggleBulletList().run(), Ne = (M) => l[M].chain().focus().toggleOrderedList().run(), Pt = (M) => {
    t(4, c[M] = !c[M], c);
  };
  function ze(M) {
    u[M] = this.value, t(5, u);
  }
  const ct = (M) => {
    l[M].chain().focus().extendMarkRange("link").setLink({ href: u[M] }).run();
  }, _e = (M) => t(4, c[M] = !1, c);
  function Ye(M, J) {
    Sr[M ? "unshift" : "push"](() => {
      a[J] = M, t(3, a);
    });
  }
  function _n(M) {
    s[M] = this.checked, t(0, s), t(1, o), t(1, o);
  }
  const ir = () => d(), Ni = (M) => t(0, s[M] = !s[M], s);
  function Ai(M) {
    s[M] = this.value, t(0, s), t(1, o), t(1, o);
  }
  const Di = () => d();
  function Ii(M) {
    s[M] = this.value, t(0, s), t(1, o), t(1, o);
  }
  const Ri = () => d();
  function Pi(M) {
    s[M] = Uu(this), t(0, s), t(1, o), t(1, o);
  }
  const Li = () => d(), $i = (M, J) => {
    s[M] === void 0 && t(0, s[M] = [], s), s[M].includes(J.value) ? t(0, s[M] = s[M].filter((Te) => Te !== J.value), s) : t(0, s[M] = [...s[M], J.value], s), d();
  }, zi = () => d();
  return n.$$set = (M) => {
    "record" in M && t(0, s = M.record), "config" in M && t(1, o = M.config);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*record, config*/
    3 && s && o && o.fields && Object.entries(o.fields).map(([M, J]) => {
      if (J.widget === "derived") {
        let Te = s[J.source];
        J.mode === "slug" && (Te = Te.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")), t(0, s[M] = Te, s);
      }
    });
  }, [
    s,
    o,
    l,
    a,
    c,
    u,
    f,
    d,
    h,
    p,
    m,
    g,
    k,
    w,
    S,
    O,
    E,
    N,
    z,
    X,
    R,
    L,
    W,
    Y,
    Ne,
    Pt,
    ze,
    ct,
    _e,
    Ye,
    _n,
    ir,
    Ni,
    Ai,
    Di,
    Ii,
    Ri,
    Pi,
    Li,
    $i,
    zi
  ];
}
class Co extends Ge {
  constructor(e) {
    super(), Ke(this, e, m1, p1, Le, { record: 0, config: 1 }, n1, [-1, -1]);
  }
  get record() {
    return this.$$.ctx[0];
  }
  set record(e) {
    this.$$set({ record: e }), pn();
  }
  get config() {
    return this.$$.ctx[1];
  }
  set config(e) {
    this.$$set({ config: e }), pn();
  }
}
Ue(Co, { record: {}, config: {} }, [], [], !0);
function g1(n) {
  pt(n, "svelte-14ldb29", "header.svelte-14ldb29.svelte-14ldb29{position:sticky;top:0px;z-index:1;display:flex;height:3.5rem;padding-left:1rem;padding-right:1rem;align-items:center;justify-content:space-between;border-bottom:1px solid rgb(216, 222, 228);background-color:rgb(255, 255, 255)}.logo.svelte-14ldb29.svelte-14ldb29{min-height:6rem;display:flex;align-items:center}.header-actions.svelte-14ldb29.svelte-14ldb29{display:flex;align-items:center;gap:1rem}.btn.primary.svelte-14ldb29.svelte-14ldb29{position:relative}.btn-notification.svelte-14ldb29.svelte-14ldb29{position:absolute;top:-0.5rem;right:-0.5rem;width:1.25rem;height:1.25rem;background-color:#cf352f;border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:0.625rem;color:#fff;border:2px solid #fff;font-weight:900}.sign-out.svelte-14ldb29.svelte-14ldb29{display:flex}.overlay-backdrop.svelte-14ldb29.svelte-14ldb29{align-items:center;background-color:rgba(175,184,193,0.2);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:999}.overlay.svelte-14ldb29.svelte-14ldb29{background-color:#fff;border-radius:0.75rem;box-shadow:0 1px 3px rgba(31,35,40,0.12), 0 8px 24px rgba(66,74,83,0.12);display:flex;flex-direction:column;max-height:min(100vh - 2rem, 600px);min-width:192px;opacity:1;white-space:normal;width:min(600px,100vw - 4rem)}modal-dialog.svelte-14ldb29 h2.svelte-14ldb29{padding:1rem 1rem 1rem 1.5rem;margin:0;line-height:1.5rem;font-weight:500;font-size:1rem;border-bottom:1px solid rgb(208, 215, 222)}.changes.svelte-14ldb29.svelte-14ldb29{display:flex;flex-direction:column;overflow-y:auto;gap:1rem;padding:1rem;border-bottom:1px solid rgb(208, 215, 222)}.card.svelte-14ldb29.svelte-14ldb29{display:flex;justify-content:space-between;width:100%;border-color:rgb(208, 215, 222);border-radius:0.375rem;border-style:solid;border-width:max(1px, 0.0625rem);position:relative;padding:1rem}.card.svelte-14ldb29 h4.svelte-14ldb29{margin-top:0;white-space:nowrap;font-weight:600}.card.svelte-14ldb29 h4 span.svelte-14ldb29{font-weight:400}.card.svelte-14ldb29 .change-actions.svelte-14ldb29{display:flex;flex-direction:column;gap:1rem}.btn-end.svelte-14ldb29.svelte-14ldb29{display:flex;justify-content:flex-end;padding:1rem;gap:1rem}.notification-banner.svelte-14ldb29.svelte-14ldb29{background-color:#ddf4ff;border-bottom:1px solid #54aeff66;padding:1.25rem 1rem;display:flex;justify-content:space-between;align-items:center;font-size:0.875rem;z-index:999;box-shadow:0 1px 3px rgba(31,35,40,0.12), 0 8px 24px rgba(66,74,83,0.12);border-top:1px solid rgba(255,255,255,0.2);transition:transform 0.3s ease}.notification-banner.danger.svelte-14ldb29.svelte-14ldb29{background-color:#fde8e8;border-bottom:1px solid #ff4d4d66}.notification-banner.success.svelte-14ldb29.svelte-14ldb29{background-color:#e6f9e6;border-bottom:1px solid #00b30066}.notification-banner.warning.svelte-14ldb29.svelte-14ldb29{background-color:#fff7e6;border-bottom:1px solid #ff9f0066}");
}
function _a(n, e, t) {
  const r = n.slice();
  return r[18] = e[t], r;
}
function Ta(n, e, t) {
  const r = n.slice();
  return r[21] = e[t][0], r[22] = e[t][1], r;
}
function Oa(n, e, t) {
  const r = n.slice();
  return r[25] = e[t][0], r[26] = e[t][1], r;
}
function Ea(n) {
  let e, t, r, i;
  function s(a, c) {
    return (
      /*$config*/
      a[1] ? y1 : b1
    );
  }
  let o = s(n), l = o(n);
  return {
    c() {
      e = v("div"), t = v("modal-dialog"), l.c(), Ja(t, "class", "overlay svelte-14ldb29"), b(e, "class", "overlay-backdrop svelte-14ldb29");
    },
    m(a, c) {
      _(a, e, c), y(e, t), l.m(t, null), r || (i = [
        P(t, "click", Ws(
          /*click_handler*/
          n[8]
        )),
        P(
          e,
          "click",
          /*click_handler_4*/
          n[12]
        )
      ], r = !0);
    },
    p(a, c) {
      o === (o = s(a)) && l ? l.p(a, c) : (l.d(1), l = o(a), l && (l.c(), l.m(t, null)));
    },
    d(a) {
      a && x(e), l.d(), r = !1, Q(i);
    }
  };
}
function b1(n) {
  let e;
  return {
    c() {
      e = v("div"), e.innerHTML = '<h2 class="svelte-14ldb29">No changes found</h2>';
    },
    m(t, r) {
      _(t, e, r);
    },
    p: j,
    d(t) {
      t && x(e);
    }
  };
}
function y1(n) {
  let e, t, r, i, s, o, l, a, c, u = Object.keys(
    /*$changes*/
    n[0]
  ).length > 1 ? "All" : "", f, d, h, p = G(Object.entries(
    /*$changes*/
    n[0]
  )), m = [];
  for (let g = 0; g < p.length; g += 1)
    m[g] = Aa(Ta(n, p, g));
  return {
    c() {
      e = v("div"), e.innerHTML = '<h2 class="svelte-14ldb29">Review your changes</h2>', t = T(), r = v("div");
      for (let g = 0; g < m.length; g += 1)
        m[g].c();
      i = T(), s = v("div"), o = v("button"), o.textContent = "Cancel", l = T(), a = v("button"), c = B("Save "), f = B(u), b(r, "class", "changes svelte-14ldb29"), b(o, "class", "btn"), b(a, "class", "btn primary svelte-14ldb29"), b(s, "class", "btn-end svelte-14ldb29");
    },
    m(g, k) {
      _(g, e, k), _(g, t, k), _(g, r, k);
      for (let w = 0; w < m.length; w += 1)
        m[w] && m[w].m(r, null);
      _(g, i, k), _(g, s, k), y(s, o), y(s, l), y(s, a), y(a, c), y(a, f), d || (h = [
        P(
          o,
          "click",
          /*click_handler_3*/
          n[11]
        ),
        P(
          a,
          "click",
          /*saveChanges*/
          n[7]
        )
      ], d = !0);
    },
    p(g, k) {
      if (k & /*Object, $changes, confirmModal, discardChange, $config*/
      75) {
        p = G(Object.entries(
          /*$changes*/
          g[0]
        ));
        let w;
        for (w = 0; w < p.length; w += 1) {
          const S = Ta(g, p, w);
          m[w] ? m[w].p(S, k) : (m[w] = Aa(S), m[w].c(), m[w].m(r, null));
        }
        for (; w < m.length; w += 1)
          m[w].d(1);
        m.length = p.length;
      }
      k & /*$changes*/
      1 && u !== (u = Object.keys(
        /*$changes*/
        g[0]
      ).length > 1 ? "All" : "") && K(f, u);
    },
    d(g) {
      g && (x(e), x(t), x(r), x(i), x(s)), Ce(m, g), d = !1, Q(h);
    }
  };
}
function k1(n) {
  let e, t, r = (
    /*$config*/
    n[1][
      /*collectionId*/
      n[21]
    ].title + ""
  ), i, s, o, l, a, c, u, f, d, h, p;
  return {
    c() {
      e = v("div"), t = v("h4"), i = B(r), s = T(), o = v("div"), l = v("button"), l.textContent = "Discard", a = T(), c = v("a"), u = B("View Changes"), d = T(), b(t, "class", "svelte-14ldb29"), b(l, "class", "btn danger"), b(c, "href", f = `#/content/${/*collectionId*/
      n[21]}`), b(c, "class", "btn"), b(o, "class", "change-actions svelte-14ldb29"), b(e, "class", "card svelte-14ldb29");
    },
    m(m, g) {
      _(m, e, g), y(e, t), y(t, i), y(e, s), y(e, o), y(o, l), y(o, a), y(o, c), y(c, u), y(e, d), h || (p = [
        P(l, "click", function() {
          Sn(
            /*discardChange*/
            n[6](
              /*collectionId*/
              n[21]
            )
          ) && n[6](
            /*collectionId*/
            n[21]
          ).apply(this, arguments);
        }),
        P(
          c,
          "click",
          /*click_handler_2*/
          n[10]
        )
      ], h = !0);
    },
    p(m, g) {
      n = m, g & /*$config, $changes*/
      3 && r !== (r = /*$config*/
      n[1][
        /*collectionId*/
        n[21]
      ].title + "") && K(i, r), g & /*$changes*/
      1 && f !== (f = `#/content/${/*collectionId*/
      n[21]}`) && b(c, "href", f);
    },
    d(m) {
      m && x(e), h = !1, Q(p);
    }
  };
}
function v1(n) {
  let e, t = G(Object.entries(
    /*collectionChanges*/
    n[22]
  )), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = Na(Oa(n, t, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = pe();
    },
    m(i, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, s);
      _(i, e, s);
    },
    p(i, s) {
      if (s & /*Object, $changes, confirmModal, discardChange, $config*/
      75) {
        t = G(Object.entries(
          /*collectionChanges*/
          i[22]
        ));
        let o;
        for (o = 0; o < t.length; o += 1) {
          const l = Oa(i, t, o);
          r[o] ? r[o].p(l, s) : (r[o] = Na(l), r[o].c(), r[o].m(e.parentNode, e));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
    },
    d(i) {
      i && x(e), Ce(r, i);
    }
  };
}
function Na(n) {
  let e, t, r, i, s = (
    /*$config*/
    n[1][
      /*collectionId*/
      n[21]
    ].title + ""
  ), o, l, a, c = (
    /*change*/
    n[26].title + ""
  ), u, f, d, h, p, m, g, k, w, S, O;
  return {
    c() {
      e = v("div"), t = v("div"), r = v("h4"), i = v("span"), o = B(s), l = B(":"), a = T(), u = B(c), f = T(), d = v("div"), h = v("button"), h.textContent = "Discard", p = T(), m = v("a"), g = B("View Changes"), w = T(), b(i, "class", "svelte-14ldb29"), b(r, "class", "svelte-14ldb29"), b(h, "class", "btn danger"), b(m, "href", k = `#/content/${/*collectionId*/
      n[21]}/${/*recordId*/
      n[25]}`), b(m, "class", "btn"), b(d, "class", "change-actions svelte-14ldb29"), b(e, "class", "card svelte-14ldb29");
    },
    m(E, N) {
      _(E, e, N), y(e, t), y(t, r), y(r, i), y(i, o), y(i, l), y(r, a), y(r, u), y(e, f), y(e, d), y(d, h), y(d, p), y(d, m), y(m, g), y(e, w), S || (O = [
        P(h, "click", function() {
          Sn(
            /*discardChange*/
            n[6](
              /*collectionId*/
              n[21],
              /*recordId*/
              n[25]
            )
          ) && n[6](
            /*collectionId*/
            n[21],
            /*recordId*/
            n[25]
          ).apply(this, arguments);
        }),
        P(
          m,
          "click",
          /*click_handler_1*/
          n[9]
        )
      ], S = !0);
    },
    p(E, N) {
      n = E, N & /*$config, $changes*/
      3 && s !== (s = /*$config*/
      n[1][
        /*collectionId*/
        n[21]
      ].title + "") && K(o, s), N & /*$changes*/
      1 && c !== (c = /*change*/
      n[26].title + "") && K(u, c), N & /*$changes*/
      1 && k !== (k = `#/content/${/*collectionId*/
      n[21]}/${/*recordId*/
      n[25]}`) && b(m, "href", k);
    },
    d(E) {
      E && x(e), S = !1, Q(O);
    }
  };
}
function Aa(n) {
  let e, t;
  function r(o, l) {
    return l & /*$config, $changes*/
    3 && (e = null), e == null && (e = !!/*$config*/
    (o[1][
      /*collectionId*/
      o[21]
    ] && /*$config*/
    o[1][
      /*collectionId*/
      o[21]
    ].hasOwnProperty("isCollection") && /*$config*/
    o[1][
      /*collectionId*/
      o[21]
    ].isCollection)), e ? v1 : k1;
  }
  let i = r(n, -1), s = i(n);
  return {
    c() {
      s.c(), t = pe();
    },
    m(o, l) {
      s.m(o, l), _(o, t, l);
    },
    p(o, l) {
      i === (i = r(o, l)) && s ? s.p(o, l) : (s.d(1), s = i(o), s && (s.c(), s.m(t.parentNode, t)));
    },
    d(o) {
      o && x(t), s.d(o);
    }
  };
}
function Da(n) {
  let e, t, r, i, s, o;
  return {
    c() {
      e = v("button"), t = B(`Save
                `), r = v("div"), i = B(
        /*changesCount*/
        n[4]
      ), b(r, "class", "btn-notification svelte-14ldb29"), b(e, "class", "btn primary svelte-14ldb29");
    },
    m(l, a) {
      _(l, e, a), y(e, t), y(e, r), y(r, i), s || (o = P(
        e,
        "click",
        /*click_handler_5*/
        n[13]
      ), s = !0);
    },
    p(l, a) {
      a & /*changesCount*/
      16 && K(
        i,
        /*changesCount*/
        l[4]
      );
    },
    d(l) {
      l && x(e), s = !1, o();
    }
  };
}
function Ia(n) {
  let e, t, r = G(
    /*$notifications*/
    n[5]
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = Ra(_a(n, r, o));
  const s = (o) => te(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      e = pe();
    },
    m(o, l) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(o, l);
      _(o, e, l), t = !0;
    },
    p(o, l) {
      if (l & /*$notifications*/
      32) {
        r = G(
          /*$notifications*/
          o[5]
        );
        let a;
        for (a = 0; a < r.length; a += 1) {
          const c = _a(o, r, a);
          i[a] ? (i[a].p(c, l), Z(i[a], 1)) : (i[a] = Ra(c), i[a].c(), Z(i[a], 1), i[a].m(e.parentNode, e));
        }
        for (Mn(), a = r.length; a < i.length; a += 1)
          s(a);
        xn();
      }
    },
    i(o) {
      if (!t) {
        for (let l = 0; l < r.length; l += 1)
          Z(i[l]);
        t = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        te(i[l]);
      t = !1;
    },
    d(o) {
      o && x(e), Ce(i, o);
    }
  };
}
function Ra(n) {
  let e, t, r = (
    /*notification*/
    n[18].message + ""
  ), i, s, o, l, a, c, u, f, d, h, p;
  function m() {
    return (
      /*click_handler_7*/
      n[16](
        /*notification*/
        n[18]
      )
    );
  }
  return {
    c() {
      e = v("div"), t = v("span"), i = B(r), s = T(), o = Me("svg"), l = Me("path"), a = Me("path"), c = Me("path"), u = T(), b(l, "stroke", "none"), b(l, "d", "M0 0h24v24H0z"), b(l, "fill", "none"), b(a, "d", "M18 6l-12 12"), b(c, "d", "M6 6l12 12"), b(o, "width", "16"), b(o, "height", "16"), b(o, "viewBox", "0 0 24 24"), b(o, "fill", "none"), b(o, "stroke", "currentColor"), b(o, "stroke-width", "2"), b(o, "stroke-linecap", "round"), b(o, "stroke-linejoin", "round"), b(e, "class", "notification-banner svelte-14ldb29"), oe(
        e,
        "danger",
        /*notification*/
        n[18].type === "danger"
      ), oe(
        e,
        "success",
        /*notification*/
        n[18].type === "success"
      ), oe(
        e,
        "warning",
        /*notification*/
        n[18].type === "warning"
      );
    },
    m(g, k) {
      _(g, e, k), y(e, t), y(t, i), y(e, s), y(e, o), y(o, l), y(o, a), y(o, c), y(e, u), d = !0, h || (p = P(o, "click", m), h = !0);
    },
    p(g, k) {
      n = g, (!d || k & /*$notifications*/
      32) && r !== (r = /*notification*/
      n[18].message + "") && K(i, r), (!d || k & /*$notifications*/
      32) && oe(
        e,
        "danger",
        /*notification*/
        n[18].type === "danger"
      ), (!d || k & /*$notifications*/
      32) && oe(
        e,
        "success",
        /*notification*/
        n[18].type === "success"
      ), (!d || k & /*$notifications*/
      32) && oe(
        e,
        "warning",
        /*notification*/
        n[18].type === "warning"
      );
    },
    i(g) {
      d || (f && f.end(1), d = !0);
    },
    o(g) {
      g && (f = uf(e, Of, {})), d = !1;
    },
    d(g) {
      g && x(e), g && f && f.end(), h = !1, p();
    }
  };
}
function w1(n) {
  let e, t, r, i, s, o = (
    /*$changes*/
    n[0] && Object.keys(
      /*$changes*/
      n[0]
    ).length > 0
  ), l, a, c, u, f, d, h, p, m, g = (
    /*confirmModal*/
    n[3] && Ea(n)
  ), k = o && Da(n), w = (
    /*$notifications*/
    n[5].length > 0 && Ia(n)
  );
  return {
    c() {
      g && g.c(), e = T(), t = v("header"), r = v("div"), r.innerHTML = '<a href="https://github.com/hintergrund-labs/cms" style="margin-right: 1rem"><svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="24px" height="24px" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 01-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 010 8c0-4.42 3.58-8 8-8z"></path></svg></a> <a href="https://hintergrund.dev/">Hintergrund CMS</a>', i = T(), s = v("div"), k && k.c(), l = T(), a = v("a"), a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 3.25c0-.966.784-1.75 1.75-1.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.25.25 0 0 0-.25.25v17.5c0 .138.112.25.25.25h5.5a.75.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 3 20.75Zm16.006 9.5H10.75a.75.75 0 0 1 0-1.5h8.256l-3.3-3.484a.75.75 0 0 1 1.088-1.032l4.5 4.75a.75.75 0 0 1 0 1.032l-4.5 4.75a.75.75 0 0 1-1.088-1.032Z"></path></svg>', c = T(), u = v("form"), f = T(), w && w.c(), d = pe(), b(r, "class", "logo svelte-14ldb29"), b(a, "class", "sign-out svelte-14ldb29"), b(a, "href", "/hg-admin/logout"), b(a, "rel", "external"), b(u, "method", "POST"), b(u, "action", "/hg-admin/logout"), b(s, "class", "header-actions svelte-14ldb29"), b(t, "class", "svelte-14ldb29");
    },
    m(S, O) {
      g && g.m(S, O), _(S, e, O), _(S, t, O), y(t, r), y(t, i), y(t, s), k && k.m(s, null), y(s, l), y(s, a), y(s, c), y(s, u), n[15](u), _(S, f, O), w && w.m(S, O), _(S, d, O), h = !0, p || (m = P(a, "click", qs(
        /*click_handler_6*/
        n[14]
      )), p = !0);
    },
    p(S, [O]) {
      /*confirmModal*/
      S[3] ? g ? g.p(S, O) : (g = Ea(S), g.c(), g.m(e.parentNode, e)) : g && (g.d(1), g = null), O & /*$changes*/
      1 && (o = /*$changes*/
      S[0] && Object.keys(
        /*$changes*/
        S[0]
      ).length > 0), o ? k ? k.p(S, O) : (k = Da(S), k.c(), k.m(s, l)) : k && (k.d(1), k = null), /*$notifications*/
      S[5].length > 0 ? w ? (w.p(S, O), O & /*$notifications*/
      32 && Z(w, 1)) : (w = Ia(S), w.c(), Z(w, 1), w.m(d.parentNode, d)) : w && (Mn(), te(w, 1, 1, () => {
        w = null;
      }), xn());
    },
    i(S) {
      h || (Z(w), h = !0);
    },
    o(S) {
      te(w), h = !1;
    },
    d(S) {
      S && (x(e), x(t), x(f), x(d)), g && g.d(S), k && k.d(), n[15](null), w && w.d(S), p = !1, m();
    }
  };
}
function S1(n, e, t) {
  let r, i, s, o, l;
  ne(n, In, (E) => t(17, i = E)), ne(n, _t, (E) => t(0, s = E)), ne(n, Vn, (E) => t(1, o = E)), ne(n, mn, (E) => t(5, l = E));
  let a, c = !1;
  function u(E, N = void 0) {
    _t.update((z) => (N !== void 0 ? (delete z[E][N], Object.keys(z[E]).length === 0 && delete z[E]) : delete z[E], z));
  }
  function f() {
    let E = {};
    Object.keys(s).forEach((N) => {
      E[N] = i[N];
    }), fetch("/hg-admin/collections", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(E)
    }).then((N) => {
      N.status === 200 && (_t.set({}), t(3, c = !1));
    });
  }
  function d(E) {
    Ks.call(this, n, E);
  }
  const h = () => t(3, c = !1), p = () => t(3, c = !1), m = () => t(3, c = !1), g = () => t(3, c = !1), k = () => t(3, c = !0), w = () => {
    a.submit();
  };
  function S(E) {
    Sr[E ? "unshift" : "push"](() => {
      a = E, t(2, a);
    });
  }
  const O = (E) => mn.remove(E);
  return n.$$.update = () => {
    n.$$.dirty & /*$changes*/
    1 && Object.keys(s).length === 0 && t(3, c = !1), n.$$.dirty & /*$changes, $config*/
    3 && t(4, r = Object.entries(s).reduce(
      (E, [N, z]) => o[N] && o[N].hasOwnProperty("isCollection") && o[N].isCollection ? E + Object.keys(z).length : E + 1,
      0
    ));
  }, [
    s,
    o,
    a,
    c,
    r,
    l,
    u,
    f,
    d,
    h,
    p,
    m,
    g,
    k,
    w,
    S,
    O
  ];
}
class $u extends Ge {
  constructor(e) {
    super(), Ke(this, e, S1, w1, Le, {}, g1);
  }
}
Ue($u, {}, [], [], !0);
function M1(n) {
  pt(n, "svelte-1o3xsb", "#admin *, #admin *::before,#admin *::after{box-sizing:border-box}#admin{font-family:-apple-system, BlinkMacSystemFont, Arial, sans-serif;color:rgb(36, 41, 47)}.container.svelte-1o3xsb.svelte-1o3xsb{display:flex;flex-direction:row;min-height:calc(100vh - 3.5rem);background-color:#fff}main.svelte-1o3xsb.svelte-1o3xsb{padding:4rem 2rem 2rem;min-width:0px;width:100%;overflow-x:hidden}h2.svelte-1o3xsb.svelte-1o3xsb{margin:1.5rem 0 1rem;scroll-margin-top:4rem;line-height:1.25;padding-bottom:0.5rem;font-size:1.5rem;border-bottom:1px solid rgb(208, 215, 222);font-weight:500}.cards.svelte-1o3xsb.svelte-1o3xsb{display:grid;gap:2rem;grid-template-columns:1fr 1fr}@media screen and (max-width: 768px){.cards.svelte-1o3xsb.svelte-1o3xsb{grid-template-columns:1fr}}.card.svelte-1o3xsb.svelte-1o3xsb{display:flex;flex-direction:column;width:100%;border-color:rgb(208, 215, 222);border-radius:0.375rem;border-style:solid;border-width:max(1px, 0.0625rem);position:relative;padding:1rem}.card.svelte-1o3xsb.svelte-1o3xsb:hover{background-color:rgb(246, 248, 250)}.card.svelte-1o3xsb h4.svelte-1o3xsb{margin:0;white-space:nowrap;font-weight:600}.card.svelte-1o3xsb p.svelte-1o3xsb{color:#656d76}.add-icon.svelte-1o3xsb.svelte-1o3xsb{width:2rem;height:2rem;position:absolute;top:1rem;right:1rem;margin:0 auto}.add-icon.svelte-1o3xsb.svelte-1o3xsb:hover{fill:rgb(36, 41, 47);stroke:rgb(246, 248, 250)}a,a:visited{color:rgb(36, 41, 47);text-decoration:none}button{font-family:inherit}.btn{font-weight:500;font-size:0.875rem;cursor:pointer;appearance:none;user-select:none;text-align:center;display:flex;align-items:center;justify-content:space-between;height:2rem;min-width:max-content;color:rgb(36, 41, 47);background-color:rgb(246, 248, 250);box-shadow:rgba(31, 35, 40, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;border-radius:0.375rem;border-width:1px;border-style:solid;border-image:initial;border-color:rgba(31,35,40,0.15);text-decoration:none;padding:0 0.75rem;gap:0.5rem;transition:80ms cubic-bezier(0.65,0,0.35,1);transition-property:color,fill,background-color,border-color}.btn:hover{background-color:rgb(243, 244, 246);border-color:rgba(31,35,40,0.15)}.btn.danger{color:#cf222e;fill:#cf222e;background-color:#f6f8fa;border-color:rgba(31,35,40,0.15);box-shadow:0 1px 0 rgba(31,35,40,0.04),inset 0 1px 0 rgba(255,255,255,0.25)}.btn.danger:hover{color:#ffffff;fill:#ffffff;background-color:#a40e26;border-color:rgba(31,35,40,0.15);box-shadow:0 1px 0 rgba(31,35,40,0.04)}.btn.primary{color:#ffffff;background-color:#1f883d;border-color:rgba(31,35,40,0.15);box-shadow:0 1px 0 rgba(31,35,40,0.1),inset 0 1px 0 rgba(255,255,255,0.03)}.btn.primary:hover{background-color:#1a7f37;border-color:rgba(31,35,40,0.15)}");
}
function Pa(n, e, t) {
  const r = n.slice();
  return r[8] = e[t][0], r[9] = e[t][1], r;
}
function x1(n) {
  let e;
  return {
    c() {
      e = B("loading...");
    },
    m(t, r) {
      _(t, e, r);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && x(e);
    }
  };
}
function C1(n) {
  let e, t, r, i, s, o, l, a = G(Object.entries(
    /*$config*/
    n[0]
  )), c = [];
  for (let u = 0; u < a.length; u += 1)
    c[u] = za(Pa(n, a, u));
  return {
    c() {
      e = v("h2"), e.textContent = "Content", t = T(), r = v("div");
      for (let u = 0; u < c.length; u += 1)
        c[u].c();
      i = T(), s = v("h2"), s.textContent = "Assets", o = T(), l = v("div"), l.innerHTML = '<a class="card svelte-1o3xsb" href="#/assets"><h4 class="svelte-1o3xsb">Assets</h4> <p class="svelte-1o3xsb">Images, PDF&#39;s and other files</p></a>', b(e, "class", "svelte-1o3xsb"), b(r, "class", "cards content svelte-1o3xsb"), b(s, "class", "svelte-1o3xsb"), b(l, "class", "cards svelte-1o3xsb");
    },
    m(u, f) {
      _(u, e, f), _(u, t, f), _(u, r, f);
      for (let d = 0; d < c.length; d += 1)
        c[d] && c[d].m(r, null);
      _(u, i, f), _(u, s, f), _(u, o, f), _(u, l, f);
    },
    p(u, f) {
      if (f & /*Object, $config, createNewRecord*/
      33) {
        a = G(Object.entries(
          /*$config*/
          u[0]
        ));
        let d;
        for (d = 0; d < a.length; d += 1) {
          const h = Pa(u, a, d);
          c[d] ? c[d].p(h, f) : (c[d] = za(h), c[d].c(), c[d].m(r, null));
        }
        for (; d < c.length; d += 1)
          c[d].d(1);
        c.length = a.length;
      }
    },
    i: j,
    o: j,
    d(u) {
      u && (x(e), x(t), x(r), x(i), x(s), x(o), x(l)), Ce(c, u);
    }
  };
}
function _1(n) {
  let e, t;
  return e = new ec({}), {
    c() {
      it(e.$$.fragment);
    },
    m(r, i) {
      He(e, r, i), t = !0;
    },
    p: j,
    i(r) {
      t || (Z(e.$$.fragment, r), t = !0);
    },
    o(r) {
      te(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ve(e, r);
    }
  };
}
function T1(n) {
  let e, t, r, i, s;
  const o = [E1, O1], l = [];
  function a(c, u) {
    return u & /*$config, $collectionId*/
    5 && (e = null), e == null && (e = !!/*$config*/
    (c[0][
      /*$collectionId*/
      c[2]
    ] && /*$config*/
    c[0][
      /*$collectionId*/
      c[2]
    ].hasOwnProperty("isCollection") && /*$config*/
    c[0][
      /*$collectionId*/
      c[2]
    ].isCollection)), e ? 0 : 1;
  }
  return t = a(n, -1), r = l[t] = o[t](n), {
    c() {
      r.c(), i = pe();
    },
    m(c, u) {
      l[t].m(c, u), _(c, i, u), s = !0;
    },
    p(c, u) {
      let f = t;
      t = a(c, u), t === f ? l[t].p(c, u) : (Mn(), te(l[f], 1, 1, () => {
        l[f] = null;
      }), xn(), r = l[t], r ? r.p(c, u) : (r = l[t] = o[t](c), r.c()), Z(r, 1), r.m(i.parentNode, i));
    },
    i(c) {
      s || (Z(r), s = !0);
    },
    o(c) {
      te(r), s = !1;
    },
    d(c) {
      c && x(i), l[t].d(c);
    }
  };
}
function La(n) {
  let e, t = (
    /*content*/
    n[9].description + ""
  ), r;
  return {
    c() {
      e = v("p"), r = B(t), b(e, "class", "svelte-1o3xsb");
    },
    m(i, s) {
      _(i, e, s), y(e, r);
    },
    p(i, s) {
      s & /*$config*/
      1 && t !== (t = /*content*/
      i[9].description + "") && K(r, t);
    },
    d(i) {
      i && x(e);
    }
  };
}
function $a(n) {
  let e, t, r, i, s, o, l, a, c;
  function u() {
    return (
      /*click_handler*/
      n[7](
        /*id*/
        n[8]
      )
    );
  }
  return {
    c() {
      e = v("a"), t = Me("svg"), r = Me("path"), i = Me("circle"), s = Me("line"), o = Me("line"), b(r, "stroke", "none"), b(r, "d", "M0 0h24v24H0z"), b(r, "fill", "none"), b(i, "cx", "12"), b(i, "cy", "12"), b(i, "r", "9"), b(s, "x1", "9"), b(s, "y1", "12"), b(s, "x2", "15"), b(s, "y2", "12"), b(o, "x1", "12"), b(o, "y1", "9"), b(o, "x2", "12"), b(o, "y2", "15"), b(t, "class", "add-icon svelte-1o3xsb"), b(t, "xmlns", "http://www.w3.org/2000/svg"), b(t, "viewBox", "0 0 24 24"), b(t, "stroke-width", "1"), b(t, "stroke", "#656d76"), b(t, "fill", "none"), b(t, "stroke-linecap", "round"), b(t, "stroke-linejoin", "round"), b(e, "href", l = "#/content/" + /*id*/
      n[8] + "/new");
    },
    m(f, d) {
      _(f, e, d), y(e, t), y(t, r), y(t, i), y(t, s), y(t, o), a || (c = P(e, "click", qs(u)), a = !0);
    },
    p(f, d) {
      n = f, d & /*$config*/
      1 && l !== (l = "#/content/" + /*id*/
      n[8] + "/new") && b(e, "href", l);
    },
    d(f) {
      f && x(e), a = !1, c();
    }
  };
}
function za(n) {
  let e, t, r = (
    /*content*/
    n[9].title + ""
  ), i, s, o, l, a, c = (
    /*content*/
    n[9].description && La(n)
  ), u = (
    /*content*/
    n[9].isCollection && $a(n)
  );
  return {
    c() {
      e = v("a"), t = v("h4"), i = B(r), s = T(), c && c.c(), o = T(), u && u.c(), l = T(), b(t, "class", "svelte-1o3xsb"), b(e, "class", "card svelte-1o3xsb"), b(e, "href", a = "#/content/" + /*id*/
      n[8]);
    },
    m(f, d) {
      _(f, e, d), y(e, t), y(t, i), y(e, s), c && c.m(e, null), y(e, o), u && u.m(e, null), y(e, l);
    },
    p(f, d) {
      d & /*$config*/
      1 && r !== (r = /*content*/
      f[9].title + "") && K(i, r), /*content*/
      f[9].description ? c ? c.p(f, d) : (c = La(f), c.c(), c.m(e, o)) : c && (c.d(1), c = null), /*content*/
      f[9].isCollection ? u ? u.p(f, d) : (u = $a(f), u.c(), u.m(e, l)) : u && (u.d(1), u = null), d & /*$config*/
      1 && a !== (a = "#/content/" + /*id*/
      f[8]) && b(e, "href", a);
    },
    d(f) {
      f && x(e), c && c.d(), u && u.d();
    }
  };
}
function O1(n) {
  let e, t;
  return e = new Co({
    props: {
      record: (
        /*$collections*/
        n[4][
          /*$collectionId*/
          n[2]
        ]
      ),
      config: (
        /*$config*/
        n[0][
          /*$collectionId*/
          n[2]
        ]
      )
    }
  }), {
    c() {
      it(e.$$.fragment);
    },
    m(r, i) {
      He(e, r, i), t = !0;
    },
    p(r, i) {
      const s = {};
      i & /*$collections, $collectionId*/
      20 && (s.record = /*$collections*/
      r[4][
        /*$collectionId*/
        r[2]
      ]), i & /*$config, $collectionId*/
      5 && (s.config = /*$config*/
      r[0][
        /*$collectionId*/
        r[2]
      ]), e.$set(s);
    },
    i(r) {
      t || (Z(e.$$.fragment, r), t = !0);
    },
    o(r) {
      te(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ve(e, r);
    }
  };
}
function E1(n) {
  let e, t, r, i;
  const s = [A1, N1], o = [];
  function l(a, c) {
    return (
      /*$recordId*/
      a[3] ? 0 : 1
    );
  }
  return e = l(n), t = o[e] = s[e](n), {
    c() {
      t.c(), r = pe();
    },
    m(a, c) {
      o[e].m(a, c), _(a, r, c), i = !0;
    },
    p(a, c) {
      let u = e;
      e = l(a), e === u ? o[e].p(a, c) : (Mn(), te(o[u], 1, 1, () => {
        o[u] = null;
      }), xn(), t = o[e], t ? t.p(a, c) : (t = o[e] = s[e](a), t.c()), Z(t, 1), t.m(r.parentNode, r));
    },
    i(a) {
      i || (Z(t), i = !0);
    },
    o(a) {
      te(t), i = !1;
    },
    d(a) {
      a && x(r), o[e].d(a);
    }
  };
}
function N1(n) {
  let e, t;
  return e = new tc({
    props: {
      collection: (
        /*$collections*/
        n[4][
          /*$collectionId*/
          n[2]
        ]
      ),
      config: (
        /*$config*/
        n[0][
          /*$collectionId*/
          n[2]
        ]
      )
    }
  }), {
    c() {
      it(e.$$.fragment);
    },
    m(r, i) {
      He(e, r, i), t = !0;
    },
    p(r, i) {
      const s = {};
      i & /*$collections, $collectionId*/
      20 && (s.collection = /*$collections*/
      r[4][
        /*$collectionId*/
        r[2]
      ]), i & /*$config, $collectionId*/
      5 && (s.config = /*$config*/
      r[0][
        /*$collectionId*/
        r[2]
      ]), e.$set(s);
    },
    i(r) {
      t || (Z(e.$$.fragment, r), t = !0);
    },
    o(r) {
      te(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ve(e, r);
    }
  };
}
function A1(n) {
  let e, t;
  return e = new Co({
    props: {
      record: (
        /*$collections*/
        n[4][
          /*$collectionId*/
          n[2]
        ][
          /*$recordId*/
          n[3]
        ]
      ),
      config: (
        /*$config*/
        n[0][
          /*$collectionId*/
          n[2]
        ]
      )
    }
  }), {
    c() {
      it(e.$$.fragment);
    },
    m(r, i) {
      He(e, r, i), t = !0;
    },
    p(r, i) {
      const s = {};
      i & /*$collections, $collectionId, $recordId*/
      28 && (s.record = /*$collections*/
      r[4][
        /*$collectionId*/
        r[2]
      ][
        /*$recordId*/
        r[3]
      ]), i & /*$config, $collectionId*/
      5 && (s.config = /*$config*/
      r[0][
        /*$collectionId*/
        r[2]
      ]), e.$set(s);
    },
    i(r) {
      t || (Z(e.$$.fragment, r), t = !0);
    },
    o(r) {
      te(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ve(e, r);
    }
  };
}
function D1(n) {
  let e, t, r, i, s, o, l, a, c, u, f, d;
  t = new $u({}), s = new Za({}), a = new Qa({});
  const h = [T1, _1, C1, x1], p = [];
  function m(g, k) {
    return (
      /*$location*/
      g[1] === "content" && /*$config*/
      g[0] && /*$collectionId*/
      g[2] ? 0 : (
        /*$location*/
        g[1] === "assets" ? 1 : (
          /*$location*/
          (g[1] === "" || /*$location*/
          g[1] === "content") && /*$config*/
          g[0] ? 2 : 3
        )
      )
    );
  }
  return u = m(n), f = p[u] = h[u](n), {
    c() {
      e = v("div"), it(t.$$.fragment), r = T(), i = v("div"), it(s.$$.fragment), o = T(), l = v("main"), it(a.$$.fragment), c = T(), f.c(), b(l, "class", "svelte-1o3xsb"), b(i, "class", "container svelte-1o3xsb"), b(e, "id", "admin");
    },
    m(g, k) {
      _(g, e, k), He(t, e, null), y(e, r), y(e, i), He(s, i, null), y(i, o), y(i, l), He(a, l, null), y(l, c), p[u].m(l, null), d = !0;
    },
    p(g, [k]) {
      let w = u;
      u = m(g), u === w ? p[u].p(g, k) : (Mn(), te(p[w], 1, 1, () => {
        p[w] = null;
      }), xn(), f = p[u], f ? f.p(g, k) : (f = p[u] = h[u](g), f.c()), Z(f, 1), f.m(l, null));
    },
    i(g) {
      d || (Z(t.$$.fragment, g), Z(s.$$.fragment, g), Z(a.$$.fragment, g), Z(f), d = !0);
    },
    o(g) {
      te(t.$$.fragment, g), te(s.$$.fragment, g), te(a.$$.fragment, g), te(f), d = !1;
    },
    d(g) {
      g && x(e), Ve(t), Ve(s), Ve(a), p[u].d();
    }
  };
}
function I1() {
  return Math.random().toString(36).substring(2, 12);
}
function R1(n, e, t) {
  let r, i, s, o, l, a;
  ne(n, Vn, (f) => t(0, r = f)), ne(n, _t, (f) => t(6, i = f)), ne(n, Ys, (f) => t(1, s = f)), ne(n, tr, (f) => t(2, o = f)), ne(n, Zs, (f) => t(3, l = f)), ne(n, In, (f) => t(4, a = f)), Js(async () => {
    let f;
    f = await Tf(), console.log(f), Vn.set(f.config), In.set(f.collections);
  }), _t.subscribe((f) => {
    In.update((d) => {
      for (const [h, p] of Object.entries(f))
        d[h] = { ...d[h], ...p };
      return d;
    });
  });
  function c(f) {
    let d = I1();
    const h = r[f];
    let p = {};
    for (const [m, g] of Object.entries(h.fields))
      p[m] = g.default !== void 0 ? g.default : "";
    _t.update((m) => {
      var g;
      return m[f] ?? (m[f] = {}), (g = m[f])[d] ?? (g[d] = {}), m[f][d] = p, m;
    }), window.location.href = `#/content/${f}/${d}`;
  }
  const u = (f) => c(f);
  return n.$$.update = () => {
    n.$$.dirty & /*$changes*/
    64 && (Object.keys(i).length > 0 ? localStorage.setItem("changes", JSON.stringify(i)) : localStorage.removeItem(
      "changes"
    ));
  }, [
    r,
    s,
    o,
    l,
    a,
    c,
    i,
    u
  ];
}
class zu extends Ge {
  constructor(e) {
    super(), Ke(this, e, R1, D1, Le, {}, M1);
  }
}
Ue(zu, {}, [], [], !0);
function P1(n) {
  let e, t;
  return e = new zu({}), {
    c() {
      it(e.$$.fragment);
    },
    m(r, i) {
      He(e, r, i), t = !0;
    },
    p: j,
    i(r) {
      t || (Z(e.$$.fragment, r), t = !0);
    },
    o(r) {
      te(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ve(e, r);
    }
  };
}
class L1 extends Ge {
  constructor(e) {
    super(), Ke(this, e, null, P1, Le, {});
  }
}
customElements.define("hg-admin", Ue(L1, {}, [], [], !0));
function $1(n) {
  pt(n, "svelte-e6teee", `
    *,
    *::before,
    *::after
{box-sizing:border-box}:root{font-family:-apple-system, BlinkMacSystemFont, Arial, sans-serif}main.svelte-e6teee.svelte-e6teee{text-align:center;background-color:#fff;color:#333;display:flex;flex-direction:column;flex-grow:1;justify-content:center;align-items:center;height:100vh;margin:0;width:100%}main.svelte-e6teee .svelte-e6teee{box-sizing:border-box}h2.svelte-e6teee.svelte-e6teee{margin:2rem;font-weight:200}form.svelte-e6teee.svelte-e6teee{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem;color:#333;background-color:#fff;box-shadow:0 0 10px rgba(0, 0, 0, 0.2);width:30%}input.svelte-e6teee.svelte-e6teee{width:100%;padding:0.5rem;margin:0.5rem 0;border:1px solid #ccc;border-radius:5px;outline:none}input.svelte-e6teee.svelte-e6teee:focus{border-color:#333}input[type="submit"].svelte-e6teee.svelte-e6teee{background-color:#333;color:#fff;cursor:pointer;width:100%}.error.svelte-e6teee.svelte-e6teee{color:red}`);
}
function Ba(n) {
  let e, t;
  return {
    c() {
      e = v("p"), t = B(
        /*error*/
        n[1]
      ), b(e, "class", "error svelte-e6teee");
    },
    m(r, i) {
      _(r, e, i), y(e, t);
    },
    p(r, i) {
      i & /*error*/
      2 && K(
        t,
        /*error*/
        r[1]
      );
    },
    d(r) {
      r && x(e);
    }
  };
}
function z1(n) {
  let e, t, r, i, s, o, l, a, c, u, f = (
    /*error*/
    n[1] && Ba(n)
  );
  return {
    c() {
      e = v("main"), t = v("form"), r = v("h2"), r.textContent = "Log in", i = T(), s = v("input"), o = T(), l = v("input"), a = T(), f && f.c(), b(r, "class", "svelte-e6teee"), b(s, "type", "password"), b(s, "name", "password"), b(s, "placeholder", "Password"), s.required = !0, b(s, "class", "svelte-e6teee"), b(l, "type", "submit"), l.value = "Log in", b(l, "class", "svelte-e6teee"), b(t, "autocomplete", "off"), b(t, "class", "svelte-e6teee"), b(e, "class", "svelte-e6teee");
    },
    m(d, h) {
      _(d, e, h), y(e, t), y(t, r), y(t, i), y(t, s), re(
        s,
        /*password*/
        n[0]
      ), y(t, o), y(t, l), y(t, a), f && f.m(t, null), c || (u = [
        P(
          s,
          "input",
          /*input0_input_handler*/
          n[3]
        ),
        P(t, "submit", qs(
          /*loginUser*/
          n[2]
        ))
      ], c = !0);
    },
    p(d, [h]) {
      h & /*password*/
      1 && s.value !== /*password*/
      d[0] && re(
        s,
        /*password*/
        d[0]
      ), /*error*/
      d[1] ? f ? f.p(d, h) : (f = Ba(d), f.c(), f.m(t, null)) : f && (f.d(1), f = null);
    },
    i: j,
    o: j,
    d(d) {
      d && x(e), f && f.d(), c = !1, Q(u);
    }
  };
}
function B1(n, e, t) {
  let r = "", i = "";
  function s() {
    fetch("/hg-admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: r })
    }).then((l) => l.json()).then((l) => {
      console.log(l), l.success ? window.location.href = "/hg-admin" : t(1, i = l.message ?? "An error occurred. Please try again.");
    });
  }
  function o() {
    r = this.value, t(0, r);
  }
  return [r, i, s, o];
}
class Bu extends Ge {
  constructor(e) {
    super(), Ke(this, e, B1, z1, Le, {}, $1);
  }
}
customElements.define("hintergrund-login", Ue(Bu, {}, [], [], !0));
function j1(n) {
  let e, t;
  return e = new Bu({}), {
    c() {
      it(e.$$.fragment);
    },
    m(r, i) {
      He(e, r, i), t = !0;
    },
    p: j,
    i(r) {
      t || (Z(e.$$.fragment, r), t = !0);
    },
    o(r) {
      te(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Ve(e, r);
    }
  };
}
class F1 extends Ge {
  constructor(e) {
    super(), Ke(this, e, null, j1, Le, {});
  }
}
customElements.define("hg-login", Ue(F1, {}, [], [], !0));
export {
  L1 as HgAdminElement,
  F1 as HgLoginElement
};
