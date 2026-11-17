var u1 = Object.defineProperty;
var P0 = (l) => {
  throw TypeError(l);
};
var c1 = (l, s, o) =>
  s in l
    ? u1(l, s, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (l[s] = o);
var $o = (l, s, o) => c1(l, typeof s != "symbol" ? s + "" : s, o),
  Qf = (l, s, o) => s.has(l) || P0("Cannot " + o);
var M = (l, s, o) => (
    Qf(l, s, "read from private field"),
    o ? o.call(l) : s.get(l)
  ),
  we = (l, s, o) =>
    s.has(l)
      ? P0("Cannot add the same private member more than once")
      : s instanceof WeakSet
        ? s.add(l)
        : s.set(l, o),
  fe = (l, s, o, u) => (
    Qf(l, s, "write to private field"),
    u ? u.call(l, o) : s.set(l, o),
    o
  ),
  st = (l, s, o) => (Qf(l, s, "access private method"), o);
var Io = (l, s, o, u) => ({
  set _(d) {
    fe(l, s, d, o);
  },
  get _() {
    return M(l, s, u);
  },
});
function f1(l, s) {
  for (var o = 0; o < s.length; o++) {
    const u = s[o];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const d in u)
        if (d !== "default" && !(d in l)) {
          const h = Object.getOwnPropertyDescriptor(u, d);
          h &&
            Object.defineProperty(
              l,
              d,
              h.get ? h : { enumerable: !0, get: () => u[d] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) u(d);
  new MutationObserver((d) => {
    for (const h of d)
      if (h.type === "childList")
        for (const p of h.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && u(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(d) {
    const h = {};
    return (
      d.integrity && (h.integrity = d.integrity),
      d.referrerPolicy && (h.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function u(d) {
    if (d.ep) return;
    d.ep = !0;
    const h = o(d);
    fetch(d.href, h);
  }
})();
function ty(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var Xf = { exports: {} },
  nr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ep;
function d1() {
  if (ep) return nr;
  ep = 1;
  var l = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function o(u, d, h) {
    var p = null;
    if (
      (h !== void 0 && (p = "" + h),
      d.key !== void 0 && (p = "" + d.key),
      "key" in d)
    ) {
      h = {};
      for (var y in d) y !== "key" && (h[y] = d[y]);
    } else h = d;
    return (
      (d = h.ref),
      { $$typeof: l, type: u, key: p, ref: d !== void 0 ? d : null, props: h }
    );
  }
  return ((nr.Fragment = s), (nr.jsx = o), (nr.jsxs = o), nr);
}
var tp;
function m1() {
  return (tp || ((tp = 1), (Xf.exports = d1())), Xf.exports);
}
var c = m1(),
  Zf = { exports: {} },
  pe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function h1() {
  if (ap) return pe;
  ap = 1;
  var l = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    m = Symbol.for("react.activity"),
    N = Symbol.for("react.view_transition"),
    D = Symbol.iterator;
  function k(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (D && w[D]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var L = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    U = {};
  function Q(w, O, Z) {
    ((this.props = w),
      (this.context = O),
      (this.refs = U),
      (this.updater = Z || L));
  }
  ((Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (w, O) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, w, O, "setState");
    }),
    (Q.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    }));
  function K() {}
  K.prototype = Q.prototype;
  function V(w, O, Z) {
    ((this.props = w),
      (this.context = O),
      (this.refs = U),
      (this.updater = Z || L));
  }
  var X = (V.prototype = new K());
  ((X.constructor = V), H(X, Q.prototype), (X.isPureReactComponent = !0));
  var ee = Array.isArray;
  function $() {}
  var Y = { H: null, A: null, T: null, S: null },
    se = Object.prototype.hasOwnProperty;
  function me(w, O, Z) {
    var P = Z.ref;
    return {
      $$typeof: l,
      type: w,
      key: O,
      ref: P !== void 0 ? P : null,
      props: Z,
    };
  }
  function Me(w, O) {
    return me(w.type, O, w.props);
  }
  function _e(w) {
    return typeof w == "object" && w !== null && w.$$typeof === l;
  }
  function Ie(w) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (Z) {
        return O[Z];
      })
    );
  }
  var Xe = /\/+/g;
  function ve(w, O) {
    return typeof w == "object" && w !== null && w.key != null
      ? Ie("" + w.key)
      : O.toString(36);
  }
  function G(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (
          (typeof w.status == "string"
            ? w.then($, $)
            : ((w.status = "pending"),
              w.then(
                function (O) {
                  w.status === "pending" &&
                    ((w.status = "fulfilled"), (w.value = O));
                },
                function (O) {
                  w.status === "pending" &&
                    ((w.status = "rejected"), (w.reason = O));
                },
              )),
          w.status)
        ) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function te(w, O, Z, P, ye) {
    var W = typeof w;
    (W === "undefined" || W === "boolean") && (w = null);
    var Ne = !1;
    if (w === null) Ne = !0;
    else
      switch (W) {
        case "bigint":
        case "string":
        case "number":
          Ne = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case l:
            case s:
              Ne = !0;
              break;
            case S:
              return ((Ne = w._init), te(Ne(w._payload), O, Z, P, ye));
          }
      }
    if (Ne)
      return (
        (ye = ye(w)),
        (Ne = P === "" ? "." + ve(w, 0) : P),
        ee(ye)
          ? ((Z = ""),
            Ne != null && (Z = Ne.replace(Xe, "$&/") + "/"),
            te(ye, O, Z, "", function (gt) {
              return gt;
            }))
          : ye != null &&
            (_e(ye) &&
              (ye = Me(
                ye,
                Z +
                  (ye.key == null || (w && w.key === ye.key)
                    ? ""
                    : ("" + ye.key).replace(Xe, "$&/") + "/") +
                  Ne,
              )),
            O.push(ye)),
        1
      );
    Ne = 0;
    var ae = P === "" ? "." : P + ":";
    if (ee(w))
      for (var ue = 0; ue < w.length; ue++)
        ((P = w[ue]), (W = ae + ve(P, ue)), (Ne += te(P, O, Z, W, ye)));
    else if (((ue = k(w)), typeof ue == "function"))
      for (w = ue.call(w), ue = 0; !(P = w.next()).done;)
        ((P = P.value), (W = ae + ve(P, ue++)), (Ne += te(P, O, Z, W, ye)));
    else if (W === "object") {
      if (typeof w.then == "function") return te(G(w), O, Z, P, ye);
      throw (
        (O = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return Ne;
  }
  function re(w, O, Z) {
    if (w == null) return w;
    var P = [],
      ye = 0;
    return (
      te(w, P, "", "", function (W) {
        return O.call(Z, W, ye++);
      }),
      P
    );
  }
  function he(w) {
    if (w._status === -1) {
      var O = w._result,
        Z = O();
      (Z.then(
        function (P) {
          (w._status === 0 || w._status === -1) &&
            ((w._status = 1),
            (w._result = P),
            Z.status === void 0 && ((Z.status = "fulfilled"), (Z.value = P)));
        },
        function (P) {
          (w._status === 0 || w._status === -1) &&
            ((w._status = 2),
            (w._result = P),
            Z.status === void 0 && ((Z.status = "rejected"), (Z.reason = P)));
        },
      ),
        w._status === -1 && ((w._status = 0), (w._result = Z)));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var J =
    typeof reportError == "function"
      ? reportError
      : function (w) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var O = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof w == "object" &&
                w !== null &&
                typeof w.message == "string"
                  ? String(w.message)
                  : String(w),
              error: w,
            });
            if (!window.dispatchEvent(O)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", w);
            return;
          }
          console.error(w);
        };
  function Fe(w) {
    var O = Y.T,
      Z = {};
    ((Z.types = O !== null ? O.types : null), (Y.T = Z));
    try {
      var P = w(),
        ye = Y.S;
      (ye !== null && ye(Z, P),
        typeof P == "object" &&
          P !== null &&
          typeof P.then == "function" &&
          P.then($, J));
    } catch (W) {
      J(W);
    } finally {
      (O !== null && Z.types !== null && (O.types = Z.types), (Y.T = O));
    }
  }
  function be(w) {
    var O = Y.T;
    if (O !== null) {
      var Z = O.types;
      Z === null ? (O.types = [w]) : Z.indexOf(w) === -1 && Z.push(w);
    } else Fe(be.bind(null, w));
  }
  var He = {
    map: re,
    forEach: function (w, O, Z) {
      re(
        w,
        function () {
          O.apply(this, arguments);
        },
        Z,
      );
    },
    count: function (w) {
      var O = 0;
      return (
        re(w, function () {
          O++;
        }),
        O
      );
    },
    toArray: function (w) {
      return (
        re(w, function (O) {
          return O;
        }) || []
      );
    },
    only: function (w) {
      if (!_e(w))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return w;
    },
  };
  return (
    (pe.Activity = m),
    (pe.Children = He),
    (pe.Component = Q),
    (pe.Fragment = o),
    (pe.Profiler = d),
    (pe.PureComponent = V),
    (pe.StrictMode = u),
    (pe.Suspense = v),
    (pe.ViewTransition = N),
    (pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (pe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (w) {
        return Y.H.useMemoCache(w);
      },
    }),
    (pe.addTransitionType = be),
    (pe.cache = function (w) {
      return function () {
        return w.apply(null, arguments);
      };
    }),
    (pe.cacheSignal = function () {
      return null;
    }),
    (pe.cloneElement = function (w, O, Z) {
      if (w == null)
        throw Error(
          "The argument must be a React element, but you passed " + w + ".",
        );
      var P = H({}, w.props),
        ye = w.key;
      if (O != null)
        for (W in (O.key !== void 0 && (ye = "" + O.key), O))
          !se.call(O, W) ||
            W === "key" ||
            W === "__self" ||
            W === "__source" ||
            (W === "ref" && O.ref === void 0) ||
            (P[W] = O[W]);
      var W = arguments.length - 2;
      if (W === 1) P.children = Z;
      else if (1 < W) {
        for (var Ne = Array(W), ae = 0; ae < W; ae++)
          Ne[ae] = arguments[ae + 2];
        P.children = Ne;
      }
      return me(w.type, ye, P);
    }),
    (pe.createContext = function (w) {
      return (
        (w = {
          $$typeof: p,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (w.Provider = w),
        (w.Consumer = { $$typeof: h, _context: w }),
        w
      );
    }),
    (pe.createElement = function (w, O, Z) {
      var P,
        ye = {},
        W = null;
      if (O != null)
        for (P in (O.key !== void 0 && (W = "" + O.key), O))
          se.call(O, P) &&
            P !== "key" &&
            P !== "__self" &&
            P !== "__source" &&
            (ye[P] = O[P]);
      var Ne = arguments.length - 2;
      if (Ne === 1) ye.children = Z;
      else if (1 < Ne) {
        for (var ae = Array(Ne), ue = 0; ue < Ne; ue++)
          ae[ue] = arguments[ue + 2];
        ye.children = ae;
      }
      if (w && w.defaultProps)
        for (P in ((Ne = w.defaultProps), Ne))
          ye[P] === void 0 && (ye[P] = Ne[P]);
      return me(w, W, ye);
    }),
    (pe.createRef = function () {
      return { current: null };
    }),
    (pe.forwardRef = function (w) {
      return { $$typeof: y, render: w };
    }),
    (pe.isValidElement = _e),
    (pe.lazy = function (w) {
      return { $$typeof: S, _payload: { _status: -1, _result: w }, _init: he };
    }),
    (pe.memo = function (w, O) {
      return { $$typeof: b, type: w, compare: O === void 0 ? null : O };
    }),
    (pe.startTransition = Fe),
    (pe.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (pe.use = function (w) {
      return Y.H.use(w);
    }),
    (pe.useActionState = function (w, O, Z) {
      return Y.H.useActionState(w, O, Z);
    }),
    (pe.useCallback = function (w, O) {
      return Y.H.useCallback(w, O);
    }),
    (pe.useContext = function (w) {
      return Y.H.useContext(w);
    }),
    (pe.useDebugValue = function () {}),
    (pe.useDeferredValue = function (w, O) {
      return Y.H.useDeferredValue(w, O);
    }),
    (pe.useEffect = function (w, O) {
      return Y.H.useEffect(w, O);
    }),
    (pe.useEffectEvent = function (w) {
      return Y.H.useEffectEvent(w);
    }),
    (pe.useId = function () {
      return Y.H.useId();
    }),
    (pe.useImperativeHandle = function (w, O, Z) {
      return Y.H.useImperativeHandle(w, O, Z);
    }),
    (pe.useInsertionEffect = function (w, O) {
      return Y.H.useInsertionEffect(w, O);
    }),
    (pe.useLayoutEffect = function (w, O) {
      return Y.H.useLayoutEffect(w, O);
    }),
    (pe.useMemo = function (w, O) {
      return Y.H.useMemo(w, O);
    }),
    (pe.useOptimistic = function (w, O) {
      return Y.H.useOptimistic(w, O);
    }),
    (pe.useReducer = function (w, O, Z) {
      return Y.H.useReducer(w, O, Z);
    }),
    (pe.useRef = function (w) {
      return Y.H.useRef(w);
    }),
    (pe.useState = function (w) {
      return Y.H.useState(w);
    }),
    (pe.useSyncExternalStore = function (w, O, Z) {
      return Y.H.useSyncExternalStore(w, O, Z);
    }),
    (pe.useTransition = function () {
      return Y.H.useTransition();
    }),
    (pe.version = "19.3.1"),
    pe
  );
}
var np;
function yd() {
  return (np || ((np = 1), (Zf.exports = h1())), Zf.exports);
}
var T = yd();
const F = ty(T),
  g1 = f1({ __proto__: null, default: F }, [T]);
var Kf = { exports: {} },
  lr = {},
  Jf = { exports: {} },
  Ff = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lp;
function p1() {
  return (
    lp ||
      ((lp = 1),
      (function (l) {
        function s(G, te) {
          var re = G.length;
          G.push(te);
          e: for (; 0 < re;) {
            var he = (re - 1) >>> 1,
              J = G[he];
            if (0 < d(J, te)) ((G[he] = te), (G[re] = J), (re = he));
            else break e;
          }
        }
        function o(G) {
          return G.length === 0 ? null : G[0];
        }
        function u(G) {
          if (G.length === 0) return null;
          var te = G[0],
            re = G.pop();
          if (re !== te) {
            G[0] = re;
            e: for (var he = 0, J = G.length, Fe = J >>> 1; he < Fe;) {
              var be = 2 * (he + 1) - 1,
                He = G[be],
                w = be + 1,
                O = G[w];
              if (0 > d(He, re))
                w < J && 0 > d(O, He)
                  ? ((G[he] = O), (G[w] = re), (he = w))
                  : ((G[he] = He), (G[be] = re), (he = be));
              else if (w < J && 0 > d(O, re))
                ((G[he] = O), (G[w] = re), (he = w));
              else break e;
            }
          }
          return te;
        }
        function d(G, te) {
          var re = G.sortIndex - te.sortIndex;
          return re !== 0 ? re : G.id - te.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          l.unstable_now = function () {
            return h.now();
          };
        } else {
          var p = Date,
            y = p.now();
          l.unstable_now = function () {
            return p.now() - y;
          };
        }
        var v = [],
          b = [],
          S = 1,
          m = null,
          N = 3,
          D = !1,
          k = !1,
          L = !1,
          H = !1,
          U = typeof setTimeout == "function" ? setTimeout : null,
          Q = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function V(G) {
          for (var te = o(b); te !== null;) {
            if (te.callback === null) u(b);
            else if (te.startTime <= G)
              (u(b), (te.sortIndex = te.expirationTime), s(v, te));
            else break;
            te = o(b);
          }
        }
        function X(G) {
          if (((L = !1), V(G), !k))
            if (o(v) !== null) ((k = !0), ee || ((ee = !0), _e()));
            else {
              var te = o(b);
              te !== null && ve(X, te.startTime - G);
            }
        }
        var ee = !1,
          $ = -1,
          Y = 5,
          se = -1;
        function me() {
          return H ? !0 : !(l.unstable_now() - se < Y);
        }
        function Me() {
          if (((H = !1), ee)) {
            var G = l.unstable_now();
            se = G;
            var te = !0;
            try {
              e: {
                ((k = !1), L && ((L = !1), Q($), ($ = -1)), (D = !0));
                var re = N;
                try {
                  t: {
                    for (
                      V(G), m = o(v);
                      m !== null && !(m.expirationTime > G && me());
                    ) {
                      var he = m.callback;
                      if (typeof he == "function") {
                        ((m.callback = null), (N = m.priorityLevel));
                        var J = he(m.expirationTime <= G);
                        if (((G = l.unstable_now()), typeof J == "function")) {
                          ((m.callback = J), V(G), (te = !0));
                          break t;
                        }
                        (m === o(v) && u(v), V(G));
                      } else u(v);
                      m = o(v);
                    }
                    if (m !== null) te = !0;
                    else {
                      var Fe = o(b);
                      (Fe !== null && ve(X, Fe.startTime - G), (te = !1));
                    }
                  }
                  break e;
                } finally {
                  ((m = null), (N = re), (D = !1));
                }
                te = void 0;
              }
            } finally {
              te ? _e() : (ee = !1);
            }
          }
        }
        var _e;
        if (typeof K == "function")
          _e = function () {
            K(Me);
          };
        else if (typeof MessageChannel < "u") {
          var Ie = new MessageChannel(),
            Xe = Ie.port2;
          ((Ie.port1.onmessage = Me),
            (_e = function () {
              Xe.postMessage(null);
            }));
        } else
          _e = function () {
            U(Me, 0);
          };
        function ve(G, te) {
          $ = U(function () {
            G(l.unstable_now());
          }, te);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (l.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Y = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (l.unstable_next = function (G) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var te = 3;
                break;
              default:
                te = N;
            }
            var re = N;
            N = te;
            try {
              return G();
            } finally {
              N = re;
            }
          }),
          (l.unstable_requestPaint = function () {
            H = !0;
          }),
          (l.unstable_runWithPriority = function (G, te) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var re = N;
            N = G;
            try {
              return te();
            } finally {
              N = re;
            }
          }),
          (l.unstable_scheduleCallback = function (G, te, re) {
            var he = l.unstable_now();
            switch (
              (typeof re == "object" && re !== null
                ? ((re = re.delay),
                  (re = typeof re == "number" && 0 < re ? he + re : he))
                : (re = he),
              G)
            ) {
              case 1:
                var J = -1;
                break;
              case 2:
                J = 250;
                break;
              case 5:
                J = 1073741823;
                break;
              case 4:
                J = 1e4;
                break;
              default:
                J = 5e3;
            }
            return (
              (J = re + J),
              (G = {
                id: S++,
                callback: te,
                priorityLevel: G,
                startTime: re,
                expirationTime: J,
                sortIndex: -1,
              }),
              re > he
                ? ((G.sortIndex = re),
                  s(b, G),
                  o(v) === null &&
                    G === o(b) &&
                    (L ? (Q($), ($ = -1)) : (L = !0), ve(X, re - he)))
                : ((G.sortIndex = J),
                  s(v, G),
                  k || D || ((k = !0), ee || ((ee = !0), _e()))),
              G
            );
          }),
          (l.unstable_shouldYield = me),
          (l.unstable_wrapCallback = function (G) {
            var te = N;
            return function () {
              var re = N;
              N = te;
              try {
                return G.apply(this, arguments);
              } finally {
                N = re;
              }
            };
          }));
      })(Ff)),
    Ff
  );
}
var ip;
function y1() {
  return (ip || ((ip = 1), (Jf.exports = p1())), Jf.exports);
}
var $f = { exports: {} },
  _t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp;
function v1() {
  if (sp) return _t;
  sp = 1;
  var l = yd();
  function s(S) {
    var m = "https://react.dev/errors/" + S;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        m += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return (
      "Minified React error #" +
      S +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var u = {
      d: {
        f: o,
        r: function () {
          throw Error(s(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal"),
    h = Symbol.for("react.recoverable"),
    p = Symbol.for("react.optimistic_key");
  function y(S, m, N) {
    var D =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: D == null ? null : D === p ? p : "" + D,
      children: S,
      containerInfo: m,
      implementation: N,
    };
  }
  var v = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(S, m) {
    if (S === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (_t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (_t.browser = function (S) {
      return { $$typeof: h, _reason: S };
    }),
    (_t.createPortal = function (S, m) {
      var N =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(s(299));
      return y(S, m, null, N);
    }),
    (_t.flushSync = function (S) {
      var m = v.T,
        N = u.p;
      try {
        if (((v.T = null), (u.p = 2), S)) return S();
      } finally {
        ((v.T = m), (u.p = N), u.d.f());
      }
    }),
    (_t.preconnect = function (S, m) {
      typeof S == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        u.d.C(S, m));
    }),
    (_t.prefetchDNS = function (S) {
      typeof S == "string" && u.d.D(S);
    }),
    (_t.preinit = function (S, m) {
      if (typeof S == "string" && m && typeof m.as == "string") {
        var N = m.as,
          D = b(N, m.crossOrigin),
          k = typeof m.integrity == "string" ? m.integrity : void 0,
          L = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        N === "style"
          ? u.d.S(S, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: D,
              integrity: k,
              fetchPriority: L,
            })
          : N === "script" &&
            u.d.X(S, {
              crossOrigin: D,
              integrity: k,
              fetchPriority: L,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (_t.preinitModule = function (S, m) {
      if (typeof S == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var N = b(m.as, m.crossOrigin);
            u.d.M(S, {
              crossOrigin: N,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
              fetchPriority:
                typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
            });
          }
        } else m == null && u.d.M(S);
    }),
    (_t.preload = function (S, m) {
      if (
        typeof S == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var N = m.as,
          D = b(N, m.crossOrigin);
        u.d.L(S, N, {
          crossOrigin: D,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (_t.preloadModule = function (S, m) {
      if (typeof S == "string")
        if (m) {
          var N = b(m.as, m.crossOrigin);
          u.d.m(S, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: N,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority:
              typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          });
        } else u.d.m(S);
    }),
    (_t.requestFormReset = function (S) {
      u.d.r(S);
    }),
    (_t.unstable_batchedUpdates = function (S, m) {
      return S(m);
    }),
    (_t.useFormState = function (S, m, N) {
      return v.H.useFormState(S, m, N);
    }),
    (_t.useFormStatus = function () {
      return v.H.useHostTransitionStatus();
    }),
    (_t.version = "19.3.1"),
    _t
  );
}
var rp;
function ay() {
  if (rp) return $f.exports;
  rp = 1;
  function l() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (s) {
        console.error(s);
      }
  }
  return (l(), ($f.exports = v1()), $f.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var op;
function b1() {
  if (op) return lr;
  op = 1;
  var l = y1(),
    s = yd(),
    o = ay();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    for (var t = e, a = t; a && !a.alternate;)
      ((t = a), (t.flags & 4098) !== 0 && (e = t.return), (a = t.return));
    for (; t.return;) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (h(e) !== e) throw Error(u(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var a = e, n = t; ;) {
      var i = a.return;
      if (i === null) break;
      var r = i.alternate;
      if (r === null) {
        if (((n = i.return), n !== null)) {
          a = n;
          continue;
        }
        break;
      }
      if (i.child === r.child) {
        for (r = i.child; r;) {
          if (r === a) return (v(i), e);
          if (r === n) return (v(i), t);
          r = r.sibling;
        }
        throw Error(u(188));
      }
      if (a.return !== n.return) ((a = i), (n = r));
      else {
        for (var f = !1, g = i.child; g;) {
          if (g === a) {
            ((f = !0), (a = i), (n = r));
            break;
          }
          if (g === n) {
            ((f = !0), (n = i), (a = r));
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = r.child; g;) {
            if (g === a) {
              ((f = !0), (a = r), (n = i));
              break;
            }
            if (g === n) {
              ((f = !0), (n = r), (a = i));
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (a.alternate !== n) throw Error(u(190));
    }
    if (a.tag !== 3) throw Error(u(188));
    return a.stateNode.current === a ? e : t;
  }
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (((t = S(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  function m(e, t, a, n, i, r) {
    for (; e !== null;) {
      if (
        ((e.tag === 5 || e.tag === 27 || e.tag === 6) && a(e, n, i, r)) ||
        ((e.tag !== 22 || e.memoizedState === null) &&
          (t || (e.tag !== 5 && e.tag !== 27)) &&
          m(e.child, t, a, n, i, r))
      )
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function N(e) {
    for (e = e.return; e !== null;) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function D(e) {
    var t = !1;
    for (
      e = e.return;
      e !== null &&
      (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27));
    )
      e = e.return;
    return t;
  }
  function k(e) {
    var t = [null, null],
      a = N(e);
    return (a === null || L(t, e, a.child, { foundSelf: !1 }), t);
  }
  function L(e, t, a, n) {
    for (; a !== null;) {
      if (a === t) n.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (n.foundSelf) return ((e[1] = a), !0);
        e[0] = a;
      } else if (
        (a.tag !== 22 || a.memoizedState === null) &&
        L(e, t, a.child, n)
      )
        return !0;
      a = a.sibling;
    }
    return !1;
  }
  function H(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(u(559));
    }
  }
  var U = null,
    Q = null;
  function K(e, t, a) {
    return e === a ? !0 : e === t ? ((U = e), !0) : !1;
  }
  function V(e, t, a) {
    return e === a ? ((Q = e), !1) : e === t ? (Q !== null && (U = e), !0) : !1;
  }
  function X(e) {
    if (e === null) return null;
    do e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function ee(e, t, a) {
    for (var n = 0, i = e; i; i = a(i)) n++;
    i = 0;
    for (var r = t; r; r = a(r)) i++;
    for (; 0 < n - i;) ((e = a(e)), n--);
    for (; 0 < i - n;) ((t = a(t)), i--);
    for (; n--;) {
      if (e === t || (t !== null && e === t.alternate)) return e;
      ((e = a(e)), (t = a(t)));
    }
    return null;
  }
  var $ = Object.assign,
    Y = Symbol.for("react.element"),
    se = Symbol.for("react.transitional.element"),
    me = Symbol.for("react.portal"),
    Me = Symbol.for("react.fragment"),
    _e = Symbol.for("react.strict_mode"),
    Ie = Symbol.for("react.profiler"),
    Xe = Symbol.for("react.consumer"),
    ve = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    te = Symbol.for("react.suspense"),
    re = Symbol.for("react.suspense_list"),
    he = Symbol.for("react.memo"),
    J = Symbol.for("react.lazy"),
    Fe = Symbol.for("react.activity"),
    be = Symbol.for("react.legacy_hidden"),
    He = Symbol.for("react.memo_cache_sentinel"),
    w = Symbol.for("react.view_transition"),
    O = Symbol.for("react.recoverable"),
    Z = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Z && e[Z]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ye = Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ye ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Me:
        return "Fragment";
      case Ie:
        return "Profiler";
      case _e:
        return "StrictMode";
      case te:
        return "Suspense";
      case re:
        return "SuspenseList";
      case Fe:
        return "Activity";
      case w:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case me:
          return "Portal";
        case ve:
          return e.displayName || "Context";
        case Xe:
          return (e._context.displayName || "Context") + ".Consumer";
        case G:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case he:
          return (
            (t = e.displayName || null),
            t !== null ? t : W(e.type) || "Memo"
          );
        case J:
          ((t = e._payload), (e = e._init));
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  var Ne = Array.isArray,
    ae = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ue = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    gt = { pending: !1, data: null, method: null, action: null },
    oa = [],
    wn = -1;
  function It(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > wn || ((e.current = oa[wn]), (oa[wn] = null), wn--);
  }
  function Be(e, t) {
    (wn++, (oa[wn] = e.current), (e.current = t));
  }
  var ot = It(null),
    fl = It(null),
    Da = It(null),
    ut = It(null);
  function dl(e, t) {
    switch ((Be(Da, t), Be(fl, e), Be(ot, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? o0(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = o0(t)), (e = u0(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (Pe(ot), Be(ot, e));
  }
  function Wt() {
    (Pe(ot), Pe(fl), Pe(Da));
  }
  function ls(e) {
    var t = e.memoizedState;
    (t !== null && ((Li._currentValue = t.memoizedState), Be(ut, e)),
      (t = ot.current));
    var a = u0(t, e.type);
    t !== a && (Be(fl, e), Be(ot, a));
  }
  function Fl(e) {
    (fl.current === e && (Pe(ot), Pe(fl)),
      ut.current === e && (Pe(ut), (Li._currentValue = gt)));
  }
  var Nn, Sr;
  function wa(e) {
    if (Nn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Nn = (t && t[1]) || ""),
          (Sr =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Nn +
      e +
      Sr
    );
  }
  var ml = !1;
  function ka(e, t) {
    if (!e || ml) return "";
    ml = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (I) {
                  var j = I;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (I) {
                  j = I;
                }
                q = !1;
                try {
                  var _ = Object.getOwnPropertyDescriptor(e.prototype, "props");
                  (Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (q = !0),
                    new e());
                } finally {
                  q &&
                    (_ !== void 0
                      ? Object.defineProperty(e.prototype, "props", _)
                      : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (I) {
                j = I;
              }
              (q = e()) &&
                typeof q.catch == "function" &&
                q.catch(function () {});
            }
          } catch (I) {
            if (I && j && typeof I.stack == "string") return [I.stack, j.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = n.DetermineComponentFrameRoot(),
        f = r[0],
        g = r[1];
      if (f && g) {
        var x = f.split(`
`),
          z = g.split(`
`);
        for (
          i = n = 0;
          n < x.length && !x[n].includes("DetermineComponentFrameRoot");
        )
          n++;
        for (; i < z.length && !z[i].includes("DetermineComponentFrameRoot");)
          i++;
        if (n === x.length || i === z.length)
          for (
            n = x.length - 1, i = z.length - 1;
            1 <= n && 0 <= i && x[n] !== z[i];
          )
            i--;
        for (; 1 <= n && 0 <= i; n--, i--)
          if (x[n] !== z[i]) {
            if (n !== 1 || i !== 1)
              do
                if ((n--, i--, 0 > i || x[n] !== z[i])) {
                  var A =
                    `
` + x[n].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      A.includes("<anonymous>") &&
                      (A = A.replace("<anonymous>", e.displayName)),
                    A
                  );
                }
              while (1 <= n && 0 <= i);
            break;
          }
      }
    } finally {
      ((ml = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? wa(a) : "";
  }
  function wr(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return wa(e.type);
      case 16:
        return wa("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? wa("Suspense Fallback")
          : wa("Suspense");
      case 19:
        return wa("SuspenseList");
      case 0:
      case 15:
        return ka(e.type, !1);
      case 11:
        return ka(e.type.render, !1);
      case 1:
        return ka(e.type, !0);
      case 31:
        return wa("Activity");
      case 30:
        return wa("ViewTransition");
      default:
        return "";
    }
  }
  function en(e) {
    try {
      var t = "",
        a = null;
      do ((t += wr(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var is = Object.prototype.hasOwnProperty,
    ss = l.unstable_scheduleCallback,
    $l = l.unstable_cancelCallback,
    Nr = l.unstable_shouldYield,
    ua = l.unstable_requestPaint,
    Ut = l.unstable_now,
    rs = l.unstable_getCurrentPriorityLevel,
    Na = l.unstable_ImmediatePriority,
    os = l.unstable_UserBlockingPriority,
    Il = l.unstable_NormalPriority,
    Er = l.unstable_LowPriority,
    us = l.unstable_IdlePriority,
    ge = l.log,
    ct = l.unstable_setDisableYieldValue,
    nt = null,
    Ve = null;
  function Gt(e) {
    if (
      (typeof ge == "function" && ct(e),
      Ve && typeof Ve.setStrictMode == "function")
    )
      try {
        Ve.setStrictMode(nt, e);
      } catch {}
  }
  var De = Math.clz32 ? Math.clz32 : cs,
    Vt = Math.log,
    ca = Math.LN2;
  function cs(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Vt(e) / ca) | 0)) | 0);
  }
  var Ht = 256,
    En = 262144,
    Tr = 4194304;
  function hl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function jr(e, t, a) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
      r = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var g = n & 134217727;
    return (
      g !== 0
        ? ((n = g & ~r),
          n !== 0
            ? (i = hl(n))
            : ((f &= g),
              f !== 0
                ? (i = hl(f))
                : a || ((a = g & ~e), a !== 0 && (i = hl(a)))))
        : ((g = n & ~r),
          g !== 0
            ? (i = hl(g))
            : f !== 0
              ? (i = hl(f))
              : a || ((a = n & ~e), a !== 0 && (i = hl(a)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & r) === 0 &&
            ((r = i & -i),
            (a = t & -t),
            r >= a || (r === 32 && (a & 4194048) !== 0))
          ? t
          : i
    );
  }
  function fs(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Dd(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a;) {
        var n = 31 - De(a),
          i = 1 << n;
        ((t |= e[n]), (a &= ~i));
      }
    return t;
  }
  function Nv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function kd() {
    var e = Tr;
    return ((Tr <<= 1), (Tr & 62914560) === 0 && (Tr = 4194304), e);
  }
  function pu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ds(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ev(e, t, a, n, i, r) {
    var f = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var g = e.entanglements,
      x = e.expirationTimes,
      z = e.hiddenUpdates;
    for (a = f & ~a; 0 < a;) {
      var A = 31 - De(a),
        q = 1 << A;
      ((g[A] = 0), (x[A] = -1));
      var j = z[A];
      if (j !== null)
        for (z[A] = null, A = 0; A < j.length; A++) {
          var _ = j[A];
          _ !== null && (_.lane &= -536870913);
        }
      a &= ~q;
    }
    (n !== 0 && Ud(e, n, 0),
      r !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(f & ~t)));
  }
  function Ud(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var n = 31 - De(t);
    ((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (a & 261930)));
  }
  function Hd(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a;) {
      var n = 31 - De(a),
        i = 1 << n;
      ((i & t) | (e[n] & t) && (e[n] |= t), (a &= ~i));
    }
  }
  function Ld(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : yu(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function yu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function vu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Bd() {
    var e = ue.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Z0(e.type));
  }
  function qd(e, t) {
    var a = ue.p;
    try {
      return ((ue.p = e), t());
    } finally {
      ue.p = a;
    }
  }
  var tn = Math.random().toString(36).slice(2),
    Et = "__reactFiber$" + tn,
    Qt = "__reactProps$" + tn,
    Wl = "__reactContainer$" + tn,
    Yd = "__reactEvents$" + tn,
    Tv = "__reactListeners$" + tn,
    jv = "__reactHandles$" + tn,
    Gd = "__reactResources$" + tn,
    ms = "__reactMarker$" + tn,
    Cr = "__reactLoad$" + tn;
  function zr(e) {
    (delete e[Et], delete e[Qt], delete e[Tv], delete e[jv]);
  }
  function gl(e) {
    var t;
    if ((t = e[Et])) return t;
    for (var a = e.parentNode; a;) {
      if ((t = a[Wl] || a[Et])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = j0(e); e !== null;) {
            if ((a = e[Et])) return a;
            e = j0(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Pl(e) {
    if ((e = e[Et] || e[Wl])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function hs(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ei(e) {
    var t = e[Gd];
    return (
      t ||
        (t = e[Gd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function bt(e) {
    e[ms] = !0;
  }
  function Vd(e) {
    e[Cr] = void 0;
  }
  var Qd = new Set(),
    Xd = {};
  function pl(e, t) {
    (ti(e, t), ti(e + "Capture", t));
  }
  function ti(e, t) {
    for (Xd[e] = t, e = 0; e < t.length; e++) Qd.add(t[e]);
  }
  var Cv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Zd = {},
    Kd = {};
  function zv(e) {
    return is.call(Kd, e)
      ? !0
      : is.call(Zd, e)
        ? !1
        : Cv.test(e)
          ? (Kd[e] = !0)
          : ((Zd[e] = !0), !1);
  }
  var Oe = !1;
  function Jd() {
    var e = Oe;
    return ((Oe = !1), e);
  }
  function Rr(e, t, a) {
    if (zv(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, a);
      }
  }
  function _r(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, a);
    }
  }
  function an(e, t, a, n) {
    if (n === null) e.removeAttribute(a);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, n);
    }
  }
  function Pt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Fd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Rv(e, t, a) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        r = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (f) {
            ((a = "" + f), r.call(this, f));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = "" + f;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function bu(e) {
    if (!e._valueTracker) {
      var t = Fd(e) ? "checked" : "value";
      e._valueTracker = Rv(e, t, "" + e[t]);
    }
  }
  function $d(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      n = "";
    return (
      e && (n = Fd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  var _v = /[\n"\\]/g;
  function fa(e) {
    return e.replace(_v, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function xu(e, t, a, n, i, r, f, g) {
    ((e.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (e.type = f)
        : e.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Pt(t))
          : e.value !== "" + Pt(t) && (e.value = "" + Pt(t))
        : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
      t != null
        ? f === "number" && e.value == t
          ? Su(e, Pt(e.value))
          : Su(e, Pt(t))
        : a != null
          ? Su(e, Pt(a))
          : n != null && e.removeAttribute("value"),
      i == null && r != null && (e.defaultChecked = !!r),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + Pt(g))
        : e.removeAttribute("name"));
  }
  function Id(e, t, a, n, i, r, f, g) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.type = r),
      t != null || a != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || t != null)) {
        bu(e);
        return;
      }
      ((a = a != null ? "" + Pt(a) : ""),
        (t = t != null ? "" + Pt(t) : a),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = n ?? i),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (e.checked = g ? e.checked : !!n),
      (e.defaultChecked = !!n),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.name = f),
      bu(e));
  }
  function Su(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function ai(e, t, a, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < a.length; i++) t["$" + a[i]] = !0;
      for (a = 0; a < e.length; a++)
        ((i = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== i && (e[a].selected = i),
          i && n && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + Pt(a), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === a) {
          ((e[i].selected = !0), n && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Wd(e, t, a) {
    if (
      t != null &&
      ((t = "" + Pt(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Pt(a) : "";
  }
  function Pd(e, t, a, n) {
    if (t == null) {
      if (n != null) {
        if (a != null) throw Error(u(92));
        if (Ne(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        a = n;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = Pt(t)),
      (e.defaultValue = a),
      (n = e.textContent),
      n === a && n !== "" && n !== null && (e.value = n),
      bu(e));
  }
  function ni(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Av = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function em(e, t, a) {
    var n = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? n
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : n
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || Av.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function tm(e, t, a) {
    if (t != null && typeof t != "object") throw Error(u(62));
    if (((e = e.style), a != null)) {
      for (var n in a)
        !a.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? e.setProperty(n, "")
            : n === "float"
              ? (e.cssFloat = "")
              : (e[n] = ""),
          (Oe = !0));
      for (var i in t)
        ((n = t[i]),
          t.hasOwnProperty(i) && a[i] !== n && (em(e, i, n), (Oe = !0)));
    } else for (var r in t) t.hasOwnProperty(r) && em(e, r, t[r]);
  }
  function wu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Mv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Ov =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ar(e) {
    return Ov.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Ua() {}
  var Nu = null;
  function Eu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var li = null,
    ii = null;
  function am(e) {
    var t = Pl(e);
    if (t && (e = t.stateNode)) {
      var a = e[Qt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (xu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode;) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + fa("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var n = a[t];
              if (n !== e && n.form === e.form) {
                var i = n[Qt] || null;
                if (!i) throw Error(u(90));
                xu(
                  n,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((n = a[t]), n.form === e.form && $d(n));
          }
          break e;
        case "textarea":
          Wd(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && ai(e, !!a.multiple, t, !1));
      }
    }
  }
  var Tu = !1;
  function nm(e, t, a) {
    if (Tu) return e(t, a);
    Tu = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((Tu = !1),
        (li !== null || ii !== null) &&
          (Mo(), li && ((t = li), (e = ii), (ii = li = null), am(t), e)))
      )
        for (t = 0; t < e.length; t++) am(e[t]);
    }
  }
  function gs(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var n = a[Qt] || null;
    if (n === null) return null;
    a = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(u(231, t, typeof a));
    return a;
  }
  var nn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ju = !1;
  if (nn)
    try {
      var ps = {};
      (Object.defineProperty(ps, "passive", {
        get: function () {
          ju = !0;
        },
      }),
        window.addEventListener("test", ps, ps),
        window.removeEventListener("test", ps, ps));
    } catch {
      ju = !1;
    }
  var Tn = null,
    Cu = null,
    Mr = null;
  function lm() {
    if (Mr) return Mr;
    var e,
      t = Cu,
      a = t.length,
      n,
      i = "value" in Tn ? Tn.value : Tn.textContent,
      r = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++);
    var f = a - e;
    for (n = 1; n <= f && t[a - n] === i[r - n]; n++);
    return (Mr = i.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Or(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Dr() {
    return !0;
  }
  function im() {
    return !1;
  }
  function Lt(e) {
    function t(a, n, i, r, f) {
      ((this._reactName = a),
        (this._targetInst = i),
        (this.type = n),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null));
      for (var g in e)
        e.hasOwnProperty(g) && ((a = e[g]), (this[g] = a ? a(r) : r[g]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Dr
          : im),
        (this.isPropagationStopped = im),
        this
      );
    }
    return (
      $(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Dr));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Dr));
        },
        persist: function () {},
        isPersistent: Dr,
      }),
      t
    );
  }
  var jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    kr = Lt(jn),
    ys = $({}, jn, { view: 0, detail: 0 }),
    Dv = Lt(ys),
    zu,
    Ru,
    vs,
    Ur = $({}, ys, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Au,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== vs &&
              (vs && e.type === "mousemove"
                ? ((zu = e.screenX - vs.screenX), (Ru = e.screenY - vs.screenY))
                : (Ru = zu = 0),
              (vs = e)),
            zu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ru;
      },
    }),
    sm = Lt(Ur),
    kv = $({}, Ur, { dataTransfer: 0 }),
    Uv = Lt(kv),
    Hv = $({}, ys, { relatedTarget: 0 }),
    _u = Lt(Hv),
    Lv = $({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bv = Lt(Lv),
    qv = $({}, jn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Yv = Lt(qv),
    Gv = $({}, jn, { data: 0 }),
    rm = Lt(Gv),
    Vv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Qv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
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
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Xv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Zv(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Xv[e])
        ? !!t[e]
        : !1;
  }
  function Au() {
    return Zv;
  }
  var Kv = $({}, ys, {
      key: function (e) {
        if (e.key) {
          var t = Vv[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Or(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Qv[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Au,
      charCode: function (e) {
        return e.type === "keypress" ? Or(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Or(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Jv = Lt(Kv),
    Fv = $({}, Ur, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    om = Lt(Fv),
    $v = $({}, jn, { submitter: 0 }),
    Iv = Lt($v),
    Wv = $({}, ys, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Au,
    }),
    Pv = Lt(Wv),
    eb = $({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tb = Lt(eb),
    ab = $({}, Ur, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    nb = Lt(ab),
    lb = $({}, jn, { newState: 0, oldState: 0, source: 0 }),
    ib = Lt(lb),
    sb = [9, 13, 27, 32],
    Mu = nn && "CompositionEvent" in window,
    bs = null;
  nn && "documentMode" in document && (bs = document.documentMode);
  var rb = nn && "TextEvent" in window && !bs,
    um = nn && (!Mu || (bs && 8 < bs && 11 >= bs)),
    cm = " ",
    fm = !1;
  function dm(e, t) {
    switch (e) {
      case "keyup":
        return sb.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mm(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var si = !1;
  function ob(e, t) {
    switch (e) {
      case "compositionend":
        return mm(t);
      case "keypress":
        return t.which !== 32 ? null : ((fm = !0), cm);
      case "textInput":
        return ((e = t.data), e === cm && fm ? null : e);
      default:
        return null;
    }
  }
  function ub(e, t) {
    if (si)
      return e === "compositionend" || (!Mu && dm(e, t))
        ? ((e = lm()), (Mr = Cu = Tn = null), (si = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return um && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var cb = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function hm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cb[e.type] : t === "textarea";
  }
  function gm(e, t, a, n) {
    (li ? (ii ? ii.push(n) : (ii = [n])) : (li = n),
      (t = Lo(t, "onChange")),
      0 < t.length &&
        ((a = new kr("onChange", "change", null, a, n)),
        e.push({ event: a, listeners: t })));
  }
  var xs = null,
    Ss = null;
  function fb(e) {
    a0(e, 0);
  }
  function Hr(e) {
    var t = hs(e);
    if ($d(t)) return e;
  }
  function pm(e, t) {
    if (e === "change") return t;
  }
  var ym = !1;
  if (nn) {
    var Ou;
    if (nn) {
      var Du = "oninput" in document;
      if (!Du) {
        var vm = document.createElement("div");
        (vm.setAttribute("oninput", "return;"),
          (Du = typeof vm.oninput == "function"));
      }
      Ou = Du;
    } else Ou = !1;
    ym = Ou && (!document.documentMode || 9 < document.documentMode);
  }
  function bm() {
    xs && (xs.detachEvent("onpropertychange", xm), (Ss = xs = null));
  }
  function xm(e) {
    if (e.propertyName === "value" && Hr(Ss)) {
      var t = [];
      (gm(t, Ss, e, Eu(e)), nm(fb, t));
    }
  }
  function db(e, t, a) {
    e === "focusin"
      ? (bm(), (xs = t), (Ss = a), xs.attachEvent("onpropertychange", xm))
      : e === "focusout" && bm();
  }
  function mb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hr(Ss);
  }
  function hb(e, t) {
    if (e === "click") return Hr(t);
  }
  function gb(e, t) {
    if (e === "input" || e === "change") return Hr(t);
  }
  function pb(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ea = typeof Object.is == "function" ? Object.is : pb;
  function ws(e, t) {
    if (ea(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      n = Object.keys(t);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var i = a[n];
      if (!is.call(t, i) || !ea(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ku(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Sm(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function wm(e, t) {
    var a = Sm(e);
    e = 0;
    for (var n; a;) {
      if (a.nodeType === 3) {
        if (((n = e + a.textContent.length), e <= t && n >= t))
          return { node: a, offset: t - e };
        e = n;
      }
      e: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Sm(a);
    }
  }
  function Nm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Nm(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Em(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = ku(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = ku(e.document);
    }
    return t;
  }
  function Uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var yb = nn && "documentMode" in document && 11 >= document.documentMode,
    ri = null,
    Hu = null,
    Ns = null,
    Lu = !1;
  function Tm(e, t, a) {
    var n =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Lu ||
      ri == null ||
      ri !== ku(n) ||
      ((n = ri),
      "selectionStart" in n && Uu(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (Ns && ws(Ns, n)) ||
        ((Ns = n),
        (n = Lo(Hu, "onSelect")),
        0 < n.length &&
          ((t = new kr("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: n }),
          (t.target = ri))));
  }
  function yl(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var oi = {
      animationend: yl("Animation", "AnimationEnd"),
      animationiteration: yl("Animation", "AnimationIteration"),
      animationstart: yl("Animation", "AnimationStart"),
      transitionrun: yl("Transition", "TransitionRun"),
      transitionstart: yl("Transition", "TransitionStart"),
      transitioncancel: yl("Transition", "TransitionCancel"),
      transitionend: yl("Transition", "TransitionEnd"),
    },
    Bu = {},
    jm = {};
  nn &&
    ((jm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete oi.animationend.animation,
      delete oi.animationiteration.animation,
      delete oi.animationstart.animation),
    "TransitionEvent" in window || delete oi.transitionend.transition);
  function vl(e) {
    if (Bu[e]) return Bu[e];
    if (!oi[e]) return e;
    var t = oi[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in jm) return (Bu[e] = t[a]);
    return e;
  }
  var Cm = vl("animationend"),
    zm = vl("animationiteration"),
    Rm = vl("animationstart"),
    vb = vl("transitionrun"),
    bb = vl("transitionstart"),
    xb = vl("transitioncancel"),
    _m = vl("transitionend"),
    Am = new Map(),
    qu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  qu.push("scrollEnd");
  function Ea(e, t) {
    (Am.set(e, t), pl(t, [e]));
  }
  var Sb = 0;
  function ln(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = za.identifierPrefix;
    var a = Sb++;
    return ((e = "_" + e + "t_" + a.toString(32) + "_"), (t.autoName = e));
  }
  function Mm(e) {
    if (e == null || typeof e == "string") return e;
    var t = null,
      a = zi;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var i = e[a[n]];
        if (i != null) {
          if (i === "none") return "none";
          t = t == null ? i : t + (" " + i);
        }
      }
    return t ?? e.default;
  }
  function sn(e, t) {
    return (
      (e = Mm(e)),
      (t = Mm(t)),
      t == null ? (e === "auto" ? null : e) : t === "auto" ? null : t
    );
  }
  var Lr =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    da = [],
    ui = 0,
    Yu = 0;
  function Br() {
    for (var e = ui, t = (Yu = ui = 0); t < e;) {
      var a = da[t];
      da[t++] = null;
      var n = da[t];
      da[t++] = null;
      var i = da[t];
      da[t++] = null;
      var r = da[t];
      if (((da[t++] = null), n !== null && i !== null)) {
        var f = n.pending;
        (f === null ? (i.next = i) : ((i.next = f.next), (f.next = i)),
          (n.pending = i));
      }
      r !== 0 && Om(a, i, r);
    }
  }
  function qr(e, t, a, n) {
    ((da[ui++] = e),
      (da[ui++] = t),
      (da[ui++] = a),
      (da[ui++] = n),
      (Yu |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n));
  }
  function Gu(e, t, a, n) {
    return (qr(e, t, a, n), Yr(e));
  }
  function bl(e, t) {
    return (qr(e, null, null, t), Yr(e));
  }
  function Om(e, t, a) {
    e.lanes |= a;
    var n = e.alternate;
    n !== null && (n.lanes |= a);
    for (var i = !1, r = e.return; r !== null;)
      ((r.childLanes |= a),
        (n = r.alternate),
        n !== null && (n.childLanes |= a),
        r.tag === 22 &&
          ((e = r.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = r),
        (r = r.return));
    return e.tag === 3
      ? ((r = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - De(a)),
          (e = r.hiddenUpdates),
          (n = e[i]),
          n === null ? (e[i] = [t]) : n.push(t),
          (t.lane = a | 536870912)),
        r)
      : null;
  }
  function Yr(e) {
    if (50 < Xs) throw ((Xs = 0), (Ao = null), Error(u(185)));
    for (var t = e.return; t !== null;) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ci = {};
  function wb(e, t, a, n) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Xt(e, t, a, n) {
    return new wb(e, t, a, n);
  }
  function Vu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function rn(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Xt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 1206910976),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Dm(e, t) {
    e.flags &= 1206910978;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Gr(e, t, a, n, i, r) {
    var f = 0;
    if (((n = e), typeof n == "function")) Vu(n) && (f = 1);
    else if (typeof n == "string")
      f = $x(e, a, ot.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (n) {
        case Fe:
          return (
            (e = Xt(31, a, t, i)),
            (e.elementType = Fe),
            (e.lanes = r),
            e
          );
        case Me:
          return xl(a.children, i, r, t);
        case _e:
          ((f = 8), (i |= 24));
          break;
        case Ie:
          return (
            (e = Xt(12, a, t, i | 2)),
            (e.elementType = Ie),
            (e.lanes = r),
            e
          );
        case te:
          return (
            (e = Xt(13, a, t, i)),
            (e.elementType = te),
            (e.lanes = r),
            e
          );
        case re:
          return (
            (e = Xt(19, a, t, i)),
            (e.elementType = re),
            (e.lanes = r),
            e
          );
        case be:
        case w:
          return (
            (e = i | 32),
            (e = Xt(30, a, t, e)),
            (e.elementType = w),
            (e.lanes = r),
            (e.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            e
          );
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case ve:
                f = 10;
                break e;
              case Xe:
                f = 9;
                break e;
              case G:
                f = 11;
                break e;
              case he:
                f = 14;
                break e;
              case J:
                ((f = 16), (n = null));
                break e;
            }
          ((f = 29),
            (a = Error(u(130, e === null ? "null" : typeof e, ""))),
            (n = null));
      }
    return (
      (t = Xt(f, a, t, i)),
      (t.elementType = e),
      (t.type = n),
      (t.lanes = r),
      t
    );
  }
  function xl(e, t, a, n) {
    return ((e = Xt(7, e, n, t)), (e.lanes = a), e);
  }
  function Qu(e, t, a) {
    return ((e = Xt(6, e, null, t)), (e.lanes = a), e);
  }
  function km(e) {
    var t = Xt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Xu(e, t, a) {
    return (
      (t = Xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Um = new WeakMap();
  function ma(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Um.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: en(t) }), Um.set(e, t), t);
    }
    return { value: e, source: t, stack: en(t) };
  }
  var fi = [],
    di = 0,
    Vr = null,
    Es = 0,
    ha = [],
    ga = 0,
    Cn = null,
    Ha = 1,
    La = "";
  function on(e, t) {
    ((fi[di++] = Es), (fi[di++] = Vr), (Vr = e), (Es = t));
  }
  function Hm(e, t, a) {
    ((ha[ga++] = Ha), (ha[ga++] = La), (ha[ga++] = Cn), (Cn = e));
    var n = Ha;
    e = La;
    var i = 32 - De(n) - 1;
    ((n &= ~(1 << i)), (a += 1));
    var r = 32 - De(t) + i;
    if (30 < r) {
      var f = i - (i % 5);
      ((r = (n & ((1 << f) - 1)).toString(32)),
        (n >>= f),
        (i -= f),
        (Ha = (1 << (32 - De(t) + i)) | (a << i) | n),
        (La = r + e));
    } else ((Ha = (1 << r) | (a << i) | n), (La = e));
  }
  function Qr(e) {
    e.return !== null && (on(e, 1), Hm(e, 1, 0));
  }
  function Zu(e) {
    for (; e === Vr;)
      ((Vr = fi[--di]), (fi[di] = null), (Es = fi[--di]), (fi[di] = null));
    for (; e === Cn;)
      ((Cn = ha[--ga]),
        (ha[ga] = null),
        (La = ha[--ga]),
        (ha[ga] = null),
        (Ha = ha[--ga]),
        (ha[ga] = null));
  }
  function Lm(e, t) {
    ((ha[ga++] = Ha),
      (ha[ga++] = La),
      (ha[ga++] = Cn),
      (Ha = t.id),
      (La = t.overflow),
      (Cn = e));
  }
  var xt = null,
    Ke = null,
    Ee = !1,
    zn = null,
    pa = !1,
    Ku = Error(u(519));
  function Rn(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Ts(ma(t, e)), Ku);
  }
  function Bm(e) {
    var t = e.stateNode,
      a = e.type,
      n = e.memoizedProps;
    switch (((t[Et] = e), (t[Qt] = n), a)) {
      case "dialog":
        (Ce("cancel", t), Ce("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ce("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ks.length; a++) Ce(Ks[a], t);
        break;
      case "source":
        Ce("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Ce("error", t), Ce("load", t));
        break;
      case "details":
        Ce("toggle", t);
        break;
      case "input":
        (Ce("invalid", t),
          Id(
            t,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ));
        break;
      case "select":
        Ce("invalid", t);
        break;
      case "textarea":
        (Ce("invalid", t), Pd(t, n.value, n.defaultValue, n.children));
    }
    ((a = n.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      n.suppressHydrationWarning === !0 ||
      s0(t.textContent, a)
        ? (n.popover != null && (Ce("beforetoggle", t), Ce("toggle", t)),
          n.onScroll != null && Ce("scroll", t),
          n.onScrollEnd != null && Ce("scrollend", t),
          n.onClick != null && (t.onclick = Ua),
          (t = !0))
        : (t = !1),
      t || Rn(e, !0));
  }
  function Xr(e) {
    for (xt = e.return; xt;)
      switch (xt.tag) {
        case 5:
        case 31:
        case 13:
          pa = !1;
          return;
        case 27:
        case 3:
          pa = !0;
          return;
        default:
          xt = xt.return;
      }
  }
  function mi(e) {
    if (e !== xt) return !1;
    if (!Ee) return (Xr(e), (Ee = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || Ef(e.type, e.memoizedProps))),
        (a = !a)),
      a && Ke && Rn(e),
      Xr(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      Ke = T0(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      Ke = T0(e);
    } else
      t === 27
        ? ((t = Ke), Xn(e.type) ? ((e = Of), (Of = null), (Ke = e)) : (Ke = t))
        : (Ke = xt ? va(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Sl() {
    ((Ke = xt = null), (Ee = !1));
  }
  function Ju() {
    var e = zn;
    return (
      e !== null &&
        (Jt === null ? (Jt = e) : Jt.push.apply(Jt, e), (zn = null)),
      e
    );
  }
  function Ts(e) {
    zn === null ? (zn = [e]) : zn.push(e);
  }
  var Fu = It(null),
    wl = null,
    un = null;
  function _n(e, t, a) {
    (Be(Fu, t._currentValue), (t._currentValue = a));
  }
  function cn(e) {
    ((e._currentValue = Fu.current), Pe(Fu));
  }
  function Zr(e, t, a) {
    for (; e !== null;) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function $u(e, t, a, n) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null;) {
      var r = i.dependencies;
      if (r !== null) {
        var f = i.child;
        r = r.firstContext;
        e: for (; r !== null;) {
          var g = r;
          r = i;
          for (var x = 0; x < t.length; x++)
            if (g.context === t[x]) {
              ((r.lanes |= a),
                (g = r.alternate),
                g !== null && (g.lanes |= a),
                Zr(r.return, a, e),
                n || (f = null));
              break e;
            }
          r = g.next;
        }
      } else if (i.tag === 18) {
        if (((f = i.return), f === null)) throw Error(u(341));
        ((f.lanes |= a),
          (r = f.alternate),
          r !== null && (r.lanes |= a),
          Zr(f, a, e),
          (f = null));
      } else
        i.tag === 13 &&
        i.memoizedState !== null &&
        i.memoizedState.dehydrated === null
          ? ((i.lanes |= a),
            (f = i.alternate),
            f !== null && (f.lanes |= a),
            Zr(i.return, a, e),
            (f = i.child),
            (f = f !== null ? f.sibling : null))
          : (f = i.child);
      if (f !== null) f.return = i;
      else
        for (f = i; f !== null;) {
          if (f === e) {
            f = null;
            break;
          }
          if (((i = f.sibling), i !== null)) {
            ((i.return = f.return), (f = i));
            break;
          }
          f = f.return;
        }
      i = f;
    }
  }
  function Nl(e, t, a, n) {
    e = null;
    for (var i = t, r = !1; i !== null;) {
      if (!r) {
        if ((i.flags & 524288) !== 0) r = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var f = i.alternate;
        if (f === null) throw Error(u(387));
        if (((f = f.memoizedProps), f !== null)) {
          var g = i.type;
          ea(i.pendingProps.value, f.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (i === ut.current) {
        if (((f = i.alternate), f === null)) throw Error(u(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Li) : (e = [Li]));
      }
      i = i.return;
    }
    return (e !== null && $u(t, e, a, n), (t.flags |= 262144), e !== null);
  }
  function Kr(e) {
    for (e = e.firstContext; e !== null;) {
      if (!ea(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function El(e) {
    ((wl = e),
      (un = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Tt(e) {
    return qm(wl, e);
  }
  function Jr(e, t) {
    return (wl === null && El(e), qm(e, t));
  }
  function qm(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), un === null)) {
      if (e === null) throw Error(u(308));
      ((un = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else un = un.next = t;
    return a;
  }
  var Nb =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    Eb = l.unstable_scheduleCallback,
    Tb = l.unstable_NormalPriority,
    ft = {
      $$typeof: ve,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Iu() {
    return { controller: new Nb(), data: new Map(), refCount: 0 };
  }
  function js(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Eb(Tb, function () {
          e.controller.abort();
        }));
  }
  function Ym(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var a = e.transitionTypes;
      for (
        a === null && (a = e.transitionTypes = []), e = 0;
        e < t.length;
        e++
      ) {
        var n = t[e];
        a.indexOf(n) === -1 && a.push(n);
      }
    }
  }
  var Cs = null;
  function jb(e) {
    var t = e.transitionTypes;
    return ((e.transitionTypes = null), t);
  }
  var zs = null,
    Wu = 0,
    Tl = 0,
    hi = null;
  function Cb(e, t) {
    if (zs === null) {
      var a = (zs = []);
      ((Wu = 0),
        (Tl = gf()),
        (hi = {
          status: "pending",
          value: void 0,
          then: function (n) {
            a.push(n);
          },
        }));
    }
    return (Wu++, t.then(Gm, Gm), t);
  }
  function Gm() {
    if (--Wu === 0 && ((Cs = null), zs !== null)) {
      hi !== null && (hi.status = "fulfilled");
      var e = zs;
      ((zs = null), (Tl = 0), (hi = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function zb(e, t) {
    var a = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          a.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((n.status = "fulfilled"), (n.value = t));
          for (var i = 0; i < a.length; i++) (0, a[i])(t);
        },
        function (i) {
          for (n.status = "rejected", n.reason = i, i = 0; i < a.length; i++)
            (0, a[i])(void 0);
        },
      ),
      n
    );
  }
  var Vm = ae.S;
  ae.S = function (e, t) {
    if (
      ((kg = Ut()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Cb(e, t),
      Cs !== null)
    )
      for (var a = Mi; a !== null;) (Ym(a, Cs), (a = a.next));
    if (((a = e.types), a !== null)) {
      for (var n = Mi; n !== null;) (Ym(n, a), (n = n.next));
      if (Tl !== 0) {
        ((n = Cs), n === null && (n = Cs = []));
        for (var i = 0; i < a.length; i++) {
          var r = a[i];
          n.indexOf(r) === -1 && n.push(r);
        }
      }
    }
    Vm !== null && Vm(e, t);
  };
  var jl = It(null);
  function Pu() {
    var e = jl.current;
    return e !== null ? e : Ze.pooledCache;
  }
  function Fr(e, t) {
    t === null ? Be(jl, jl.current) : Be(jl, t.pool);
  }
  function Qm() {
    var e = Pu();
    return e === null ? null : { parent: ft._currentValue, pool: e };
  }
  var gi = Error(u(460)),
    ec = Error(u(474)),
    $r = Error(u(542)),
    Ir = { then: function () {} };
  function Xm(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Zm(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(Ua, Ua), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw (
          (e = t.reason),
          Jm(e),
          e === void 0 && !("reason" in t) ? Error(u(600)) : e
        );
      default:
        if (typeof t.status == "string") t.then(Ua, Ua);
        else {
          if (((e = Ze), e !== null && 100 < e.shellSuspendCounter))
            throw Error(u(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (n) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "fulfilled"), (i.value = n));
                }
              },
              function (n) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "rejected"), (i.reason = n));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Jm(e), e);
        }
        throw ((zl = t), gi);
    }
  }
  function Cl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((zl = a), gi)
        : a;
    }
  }
  var zl = null;
  function Km() {
    if (zl === null) throw Error(u(459));
    var e = zl;
    return ((zl = null), e);
  }
  function Jm(e) {
    if (e === gi || e === $r) throw Error(u(483));
  }
  var pi = null,
    Rs = 0;
  function Wr(e) {
    var t = Rs;
    return ((Rs += 1), pi === null && (pi = []), Zm(pi, e, t));
  }
  function An(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Pr(e, t) {
    throw t.$$typeof === Y
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          u(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Fm(e) {
    function t(C, E) {
      if (e) {
        var R = C.deletions;
        R === null ? ((C.deletions = [E]), (C.flags |= 16)) : R.push(E);
      }
    }
    function a(C, E) {
      if (!e) return null;
      for (; E !== null;) (t(C, E), (E = E.sibling));
      return null;
    }
    function n(C) {
      for (var E = new Map(); C !== null;)
        (C.key === null ? E.set(C.index, C) : E.set(C.key, C), (C = C.sibling));
      return E;
    }
    function i(C, E) {
      return ((C = rn(C, E)), (C.index = 0), (C.sibling = null), C);
    }
    function r(C, E, R) {
      return (
        (C.index = R),
        e
          ? ((R = C.alternate),
            R !== null
              ? ((R = R.index), R < E ? ((C.flags |= 2), E) : R)
              : ((C.flags |= 134217730), E))
          : ((C.flags |= 1048576), E)
      );
    }
    function f(C) {
      return (e && C.alternate === null && (C.flags |= 134217730), C);
    }
    function g(C, E, R, B) {
      return E === null || E.tag !== 6
        ? ((E = Qu(R, C.mode, B)), (E.return = C), E)
        : ((E = i(E, R)), (E.return = C), E);
    }
    function x(C, E, R, B) {
      var ne = R.type;
      return ne === Me
        ? ((C = A(C, E, R.props.children, B, R.key)), An(C, R), C)
        : E !== null &&
            (E.elementType === ne ||
              (typeof ne == "object" &&
                ne !== null &&
                ne.$$typeof === J &&
                Cl(ne) === E.type))
          ? ((E = i(E, R.props)), An(E, R), (E.return = C), E)
          : ((E = Gr(R.type, R.key, R.props, null, C.mode, B)),
            An(E, R),
            (E.return = C),
            E);
    }
    function z(C, E, R, B) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== R.containerInfo ||
        E.stateNode.implementation !== R.implementation
        ? ((E = Xu(R, C.mode, B)), (E.return = C), E)
        : ((E = i(E, R.children || [])), (E.return = C), E);
    }
    function A(C, E, R, B, ne) {
      return E === null || E.tag !== 7
        ? ((E = xl(R, C.mode, B, ne)), (E.return = C), E)
        : ((E = i(E, R)), (E.return = C), E);
    }
    function q(C, E, R) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((E = Qu("" + E, C.mode, R)), (E.return = C), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case se:
            return (
              (R = Gr(E.type, E.key, E.props, null, C.mode, R)),
              An(R, E),
              (R.return = C),
              R
            );
          case me:
            return ((E = Xu(E, C.mode, R)), (E.return = C), E);
          case J:
            return ((E = Cl(E)), q(C, E, R));
        }
        if (Ne(E) || P(E))
          return ((E = xl(E, C.mode, R, null)), (E.return = C), E);
        if (typeof E.then == "function") return q(C, Wr(E), R);
        if (E.$$typeof === ve) return q(C, Jr(C, E), R);
        Pr(C, E);
      }
      return null;
    }
    function j(C, E, R, B) {
      var ne = E !== null ? E.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return ne !== null ? null : g(C, E, "" + R, B);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case se:
            return R.key === ne ? x(C, E, R, B) : null;
          case me:
            return R.key === ne ? z(C, E, R, B) : null;
          case J:
            return ((R = Cl(R)), j(C, E, R, B));
        }
        if (Ne(R) || P(R)) return ne !== null ? null : A(C, E, R, B, null);
        if (typeof R.then == "function") return j(C, E, Wr(R), B);
        if (R.$$typeof === ve) return j(C, E, Jr(C, R), B);
        Pr(C, R);
      }
      return null;
    }
    function _(C, E, R, B, ne) {
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return ((C = C.get(R) || null), g(E, C, "" + B, ne));
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case se:
            return (
              (C = C.get(B.key === null ? R : B.key) || null),
              x(E, C, B, ne)
            );
          case me:
            return (
              (C = C.get(B.key === null ? R : B.key) || null),
              z(E, C, B, ne)
            );
          case J:
            return ((B = Cl(B)), _(C, E, R, B, ne));
        }
        if (Ne(B) || P(B))
          return ((C = C.get(R) || null), A(E, C, B, ne, null));
        if (typeof B.then == "function") return _(C, E, R, Wr(B), ne);
        if (B.$$typeof === ve) return _(C, E, R, Jr(E, B), ne);
        Pr(E, B);
      }
      return null;
    }
    function I(C, E, R, B) {
      for (
        var ne = null, Re = null, ce = E, de = (E = 0), ht = null;
        ce !== null && de < R.length;
        de++
      ) {
        ce.index > de ? ((ht = ce), (ce = null)) : (ht = ce.sibling);
        var Ae = j(C, ce, R[de], B);
        if (Ae === null) {
          ce === null && (ce = ht);
          break;
        }
        (e && ce && Ae.alternate === null && t(C, ce),
          (E = r(Ae, E, de)),
          Re === null ? (ne = Ae) : (Re.sibling = Ae),
          (Re = Ae),
          (ce = ht));
      }
      if (de === R.length) return (a(C, ce), Ee && on(C, de), ne);
      if (ce === null) {
        for (; de < R.length; de++)
          ((ce = q(C, R[de], B)),
            ce !== null &&
              ((E = r(ce, E, de)),
              Re === null ? (ne = ce) : (Re.sibling = ce),
              (Re = ce)));
        return (Ee && on(C, de), ne);
      }
      for (ce = n(ce); de < R.length; de++)
        ((ht = _(ce, C, de, R[de], B)),
          ht !== null &&
            (e &&
              ((Ae = ht.alternate),
              Ae !== null && ce.delete(Ae.key === null ? de : Ae.key)),
            (E = r(ht, E, de)),
            Re === null ? (ne = ht) : (Re.sibling = ht),
            (Re = ht)));
      return (
        e &&
          ce.forEach(function ($n) {
            return t(C, $n);
          }),
        Ee && on(C, de),
        ne
      );
    }
    function oe(C, E, R, B) {
      if (R == null) throw Error(u(151));
      for (
        var ne = null,
          Re = null,
          ce = E,
          de = (E = 0),
          ht = null,
          Ae = R.next();
        ce !== null && !Ae.done;
        de++, Ae = R.next()
      ) {
        ce.index > de ? ((ht = ce), (ce = null)) : (ht = ce.sibling);
        var $n = j(C, ce, Ae.value, B);
        if ($n === null) {
          ce === null && (ce = ht);
          break;
        }
        (e && ce && $n.alternate === null && t(C, ce),
          (E = r($n, E, de)),
          Re === null ? (ne = $n) : (Re.sibling = $n),
          (Re = $n),
          (ce = ht));
      }
      if (Ae.done) return (a(C, ce), Ee && on(C, de), ne);
      if (ce === null) {
        for (; !Ae.done; de++, Ae = R.next())
          ((Ae = q(C, Ae.value, B)),
            Ae !== null &&
              ((E = r(Ae, E, de)),
              Re === null ? (ne = Ae) : (Re.sibling = Ae),
              (Re = Ae)));
        return (Ee && on(C, de), ne);
      }
      for (ce = n(ce); !Ae.done; de++, Ae = R.next())
        ((Ae = _(ce, C, de, Ae.value, B)),
          Ae !== null &&
            (e &&
              ((ht = Ae.alternate),
              ht !== null && ce.delete(ht.key === null ? de : ht.key)),
            (E = r(Ae, E, de)),
            Re === null ? (ne = Ae) : (Re.sibling = Ae),
            (Re = Ae)));
      return (
        e &&
          ce.forEach(function (o1) {
            return t(C, o1);
          }),
        Ee && on(C, de),
        ne
      );
    }
    function Se(C, E, R, B) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === Me &&
          R.key === null &&
          R.props.ref === void 0 &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case se:
            e: {
              for (var ne = R.key; E !== null;) {
                if (E.key === ne) {
                  if (((ne = R.type), ne === Me)) {
                    if (E.tag === 7) {
                      (a(C, E.sibling),
                        (B = i(E, R.props.children)),
                        An(B, R),
                        (B.return = C),
                        (C = B));
                      break e;
                    }
                  } else if (
                    E.elementType === ne ||
                    (typeof ne == "object" &&
                      ne !== null &&
                      ne.$$typeof === J &&
                      Cl(ne) === E.type)
                  ) {
                    (a(C, E.sibling),
                      (B = i(E, R.props)),
                      An(B, R),
                      (B.return = C),
                      (C = B));
                    break e;
                  }
                  a(C, E);
                  break;
                } else t(C, E);
                E = E.sibling;
              }
              R.type === Me
                ? ((B = xl(R.props.children, C.mode, B, R.key)),
                  An(B, R),
                  (B.return = C),
                  (C = B))
                : ((B = Gr(R.type, R.key, R.props, null, C.mode, B)),
                  An(B, R),
                  (B.return = C),
                  (C = B));
            }
            return f(C);
          case me:
            e: {
              for (ne = R.key; E !== null;) {
                if (E.key === ne)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === R.containerInfo &&
                    E.stateNode.implementation === R.implementation
                  ) {
                    (a(C, E.sibling),
                      (B = i(E, R.children || [])),
                      (B.return = C),
                      (C = B));
                    break e;
                  } else {
                    a(C, E);
                    break;
                  }
                else t(C, E);
                E = E.sibling;
              }
              ((B = Xu(R, C.mode, B)), (B.return = C), (C = B));
            }
            return f(C);
          case J:
            return ((R = Cl(R)), Se(C, E, R, B));
        }
        if (Ne(R)) return I(C, E, R, B);
        if (P(R)) {
          if (((ne = P(R)), typeof ne != "function")) throw Error(u(150));
          return ((R = ne.call(R)), oe(C, E, R, B));
        }
        if (typeof R.then == "function") return Se(C, E, Wr(R), B);
        if (R.$$typeof === ve) return Se(C, E, Jr(C, R), B);
        Pr(C, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          E !== null && E.tag === 6
            ? (a(C, E.sibling), (B = i(E, R)), (B.return = C), (C = B))
            : (a(C, E), (B = Qu(R, C.mode, B)), (B.return = C), (C = B)),
          f(C))
        : a(C, E);
    }
    return function (C, E, R, B) {
      try {
        Rs = 0;
        var ne = Se(C, E, R, B);
        return ((pi = null), ne);
      } catch (ce) {
        if (ce === gi || ce === $r) throw ce;
        var Re = Xt(29, ce, null, C.mode);
        return ((Re.lanes = B), (Re.return = C), Re);
      } finally {
      }
    };
  }
  var Rl = Fm(!0),
    $m = Fm(!1),
    Mn = !1;
  function tc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ac(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function On(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Dn(e, t, a) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (ke & 2) !== 0)) {
      var i = n.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (n.pending = t),
        (t = Yr(e)),
        Om(e, null, a),
        t
      );
    }
    return (qr(e, n, t, a), Yr(e));
  }
  function _s(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), Hd(e, a));
    }
  }
  function nc(e, t) {
    var a = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), a === n)) {
      var i = null,
        r = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (r === null ? (i = r = f) : (r = r.next = f), (a = a.next));
        } while (a !== null);
        r === null ? (i = r = t) : (r = r.next = t);
      } else i = r = t;
      ((a = {
        baseState: n.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: r,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var lc = !1;
  function As() {
    if (lc) {
      var e = hi;
      if (e !== null) throw e;
    }
  }
  function Ms(e, t, a, n) {
    lc = !1;
    var i = e.updateQueue;
    Mn = !1;
    var r = i.firstBaseUpdate,
      f = i.lastBaseUpdate,
      g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var x = g,
        z = x.next;
      ((x.next = null), f === null ? (r = z) : (f.next = z), (f = x));
      var A = e.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (g = A.lastBaseUpdate),
        g !== f &&
          (g === null ? (A.firstBaseUpdate = z) : (g.next = z),
          (A.lastBaseUpdate = x)));
    }
    if (r !== null) {
      var q = i.baseState;
      ((f = 0), (A = z = x = null), (g = r));
      do {
        var j = g.lane & -536870913,
          _ = j !== g.lane;
        if (_ ? (ze & j) === j : (n & j) === j) {
          (j !== 0 && j === Tl && (lc = !0),
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var I = e,
              oe = g;
            j = t;
            var Se = a;
            switch (oe.tag) {
              case 1:
                if (((I = oe.payload), typeof I == "function")) {
                  q = I.call(Se, q, j);
                  break e;
                }
                q = I;
                break e;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = oe.payload),
                  (j = typeof I == "function" ? I.call(Se, q, j) : I),
                  j == null)
                )
                  break e;
                q = $({}, q, j);
                break e;
              case 2:
                Mn = !0;
            }
          }
          ((j = g.callback),
            j !== null &&
              ((e.flags |= 64),
              _ && (e.flags |= 8192),
              (_ = i.callbacks),
              _ === null ? (i.callbacks = [j]) : _.push(j)));
        } else
          ((_ = {
            lane: j,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            A === null ? ((z = A = _), (x = q)) : (A = A.next = _),
            (f |= j));
        if (((g = g.next), g === null)) {
          if (((g = i.shared.pending), g === null)) break;
          ((_ = g),
            (g = _.next),
            (_.next = null),
            (i.lastBaseUpdate = _),
            (i.shared.pending = null));
        }
      } while (!0);
      (A === null && (x = q),
        (i.baseState = x),
        (i.firstBaseUpdate = z),
        (i.lastBaseUpdate = A),
        r === null && (i.shared.lanes = 0),
        (Yn |= f),
        (e.lanes = f),
        (e.memoizedState = q));
    }
  }
  function Im(e, t) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(t);
  }
  function Wm(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Im(a[e], t);
  }
  var kn = It(null),
    eo = It(0);
  function Pm(e, t) {
    ((e = gn), Be(eo, e), Be(kn, t), (gn = e | t.baseLanes));
  }
  function ic() {
    (Be(eo, gn), Be(kn, kn.current));
  }
  function sc() {
    ((gn = eo.current), Pe(kn), Pe(eo));
  }
  var jt = It(null),
    Mt = null;
  function Un(e) {
    var t = e.alternate;
    (Be(Ct, Ct.current & 1),
      Be(jt, e),
      Mt === null &&
        (t === null || kn.current !== null || t.memoizedState !== null) &&
        (Mt = e));
  }
  function rc(e) {
    (Be(Ct, Ct.current), Be(jt, e), Mt === null && (Mt = e));
  }
  function eh(e) {
    e.tag === 22
      ? (Be(Ct, Ct.current), Be(jt, e), Mt === null && (Mt = e))
      : Hn();
  }
  function Hn() {
    (Be(Ct, Ct.current), Be(jt, jt.current));
  }
  function ta(e) {
    (Pe(jt), Mt === e && (Mt = null), Pe(Ct));
  }
  var Ct = It(0);
  function Os(e, t) {
    (Be(jt, jt.current), Be(Ct, t));
  }
  function oc(e) {
    (Pe(Ct), Pe(jt), Mt === e && (Mt = null));
  }
  function to(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Af(a) || Mf(a)))
          return t;
      } else if (
        t.tag === 19 &&
        t.memoizedProps.revealOrder !== "independent"
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var fn = 0,
    xe = null,
    Qe = null,
    dt = null,
    ao = !1,
    yi = !1,
    _l = !1,
    no = 0,
    Ds = 0,
    vi = null,
    Rb = 0;
  function lt() {
    throw Error(u(321));
  }
  function uc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!ea(e[a], t[a])) return !1;
    return !0;
  }
  function cc(e, t, a, n, i, r) {
    return (
      (fn = r),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ae.H = e === null || e.memoizedState === null ? Hh : Lh),
      (_l = !1),
      (r = a(n, i)),
      (_l = !1),
      yi && (r = ah(t, a, n, i)),
      th(e),
      r
    );
  }
  function th(e) {
    ae.H = co;
    var t = Qe !== null && Qe.next !== null;
    if (((fn = 0), (dt = Qe = xe = null), (ao = !1), (Ds = 0), (vi = null), t))
      throw Error(u(300));
    e === null ||
      mt ||
      ((e = e.dependencies), e !== null && Kr(e) && (mt = !0));
  }
  function ah(e, t, a, n) {
    xe = e;
    var i = 0;
    do {
      if ((yi && (vi = null), (Ds = 0), (yi = !1), 25 <= i))
        throw Error(u(301));
      if (((i += 1), (dt = Qe = null), e.updateQueue != null)) {
        var r = e.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((ae.H = Hb), (r = t(a, n)));
    } while (yi);
    return r;
  }
  function _b() {
    var e = ae.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? ks(t) : t),
      (e = e.useState()[0]),
      (Qe !== null ? Qe.memoizedState : null) !== e && (xe.flags |= 1024),
      t
    );
  }
  function fc() {
    var e = no !== 0;
    return ((no = 0), e);
  }
  function dc(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function mc(e) {
    if (ao) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      ao = !1;
    }
    ((fn = 0), (dt = Qe = xe = null), (yi = !1), (Ds = no = 0), (vi = null));
  }
  function Bt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (dt === null ? (xe.memoizedState = dt = e) : (dt = dt.next = e), dt);
  }
  function rt() {
    if (Qe === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = dt === null ? xe.memoizedState : dt.next;
    if (t !== null) ((dt = t), (Qe = e));
    else {
      if (e === null)
        throw xe.alternate === null ? Error(u(467)) : Error(u(310));
      ((Qe = e),
        (e = {
          memoizedState: Qe.memoizedState,
          baseState: Qe.baseState,
          baseQueue: Qe.baseQueue,
          queue: Qe.queue,
          next: null,
        }),
        dt === null ? (xe.memoizedState = dt = e) : (dt = dt.next = e));
    }
    return dt;
  }
  function lo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ks(e) {
    var t = Ds;
    return (
      (Ds += 1),
      vi === null && (vi = []),
      (e = Zm(vi, e, t)),
      (t = xe),
      (dt === null ? t.memoizedState : dt.next) === null &&
        ((t = t.alternate),
        (ae.H = t === null || t.memoizedState === null ? Hh : Lh)),
      e
    );
  }
  function io(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ks(e);
      if (e.$$typeof === O) return;
      if (e.$$typeof === ve) return Tt(e);
    }
    throw Error(u(438, String(e)));
  }
  function hc(e) {
    var t = null,
      a = xe.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var n = xe.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = lo()), (xe.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), n = 0; n < e; n++) a[n] = He;
    return (t.index++, a);
  }
  function dn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function so(e) {
    var t = rt();
    return gc(t, Qe, e);
  }
  function gc(e, t, a) {
    var n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = a;
    var i = e.baseQueue,
      r = n.pending;
    if (r !== null) {
      if (i !== null) {
        var f = i.next;
        ((i.next = r.next), (r.next = f));
      }
      ((t.baseQueue = i = r), (n.pending = null));
    }
    if (((r = e.baseState), i === null)) e.memoizedState = r;
    else {
      t = i.next;
      var g = (f = null),
        x = null,
        z = t,
        A = !1;
      do {
        var q = z.lane & -536870913;
        if (q !== z.lane ? (ze & q) === q : (fn & q) === q) {
          var j = z.revertLane;
          if (j === 0)
            (x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              q === Tl && (A = !0));
          else if ((fn & j) === j) {
            ((z = z.next), j === Tl && (A = !0));
            continue;
          } else
            ((q = {
              lane: 0,
              revertLane: z.revertLane,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              x === null ? ((g = x = q), (f = r)) : (x = x.next = q),
              (xe.lanes |= j),
              (Yn |= j));
          ((q = z.action),
            _l && a(r, q),
            (r = z.hasEagerState ? z.eagerState : a(r, q)));
        } else
          ((j = {
            lane: q,
            revertLane: z.revertLane,
            gesture: z.gesture,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            x === null ? ((g = x = j), (f = r)) : (x = x.next = j),
            (xe.lanes |= q),
            (Yn |= q));
        z = z.next;
      } while (z !== null && z !== t);
      if (
        (x === null ? (f = r) : (x.next = g),
        !ea(r, e.memoizedState) && ((mt = !0), A && ((a = hi), a !== null)))
      )
        throw a;
      ((e.memoizedState = r),
        (e.baseState = f),
        (e.baseQueue = x),
        (n.lastRenderedState = r));
    }
    return (i === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
  }
  function pc(e) {
    var t = rt(),
      a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = e;
    var n = a.dispatch,
      i = a.pending,
      r = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var f = (i = i.next);
      do ((r = e(r, f.action)), (f = f.next));
      while (f !== i);
      (ea(r, t.memoizedState) || (mt = !0),
        (t.memoizedState = r),
        t.baseQueue === null && (t.baseState = r),
        (a.lastRenderedState = r));
    }
    return [r, n];
  }
  function nh(e, t, a) {
    var n = xe,
      i = rt(),
      r = Ee;
    if (r) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = t();
    var f = !ea((Qe || i).memoizedState, a);
    if (
      (f && ((i.memoizedState = a), (mt = !0)),
      (i = i.queue),
      bc(sh.bind(null, n, i, e), [e]),
      (e =
        i.getSnapshot !== t ||
        f ||
        (dt !== null && (dt.memoizedState.tag & 1) !== 0)),
      bi(e ? 9 : 8, { destroy: void 0 }, ih.bind(null, n, i, a, t), null),
      e)
    ) {
      if (((n.flags |= 2048), Ze === null)) throw Error(u(349));
      r || (fn & 127) !== 0 || lh(n, t, a);
    }
    return a;
  }
  function lh(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = xe.updateQueue),
      t === null
        ? ((t = lo()), (xe.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function ih(e, t, a, n) {
    ((t.value = a), (t.getSnapshot = n), rh(t) && oh(e));
  }
  function sh(e, t, a) {
    return a(function () {
      rh(t) && oh(e);
    });
  }
  function rh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !ea(e, a);
    } catch {
      return !0;
    }
  }
  function oh(e) {
    var t = bl(e, 2);
    t !== null && Ft(t, e, 2);
  }
  function yc(e) {
    var t = Bt();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), _l)) {
        Gt(!0);
        try {
          a();
        } finally {
          Gt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function uh(e, t, a, n) {
    return ((e.baseState = a), gc(e, Qe, typeof n == "function" ? n : dn));
  }
  function Ab(e, t, a, n, i) {
    if (uo(e)) throw Error(u(485));
    if (((e = t.action), e !== null)) {
      var r = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      (ae.T !== null ? a(!0) : (r.isTransition = !1),
        n(r),
        (a = t.pending),
        a === null
          ? ((r.next = t.pending = r), ch(t, r))
          : ((r.next = a.next), (t.pending = a.next = r)));
    }
  }
  function ch(e, t) {
    var a = t.action,
      n = t.payload,
      i = e.state;
    if (t.isTransition) {
      var r = ae.T,
        f = {};
      ((f.types = r !== null ? r.types : null), (ae.T = f));
      try {
        var g = a(i, n),
          x = ae.S;
        (x !== null && x(f, g), fh(e, t, g));
      } catch (z) {
        vc(e, t, z);
      } finally {
        (r !== null && f.types !== null && (r.types = f.types), (ae.T = r));
      }
    } else
      try {
        ((r = a(i, n)), fh(e, t, r));
      } catch (z) {
        vc(e, t, z);
      }
  }
  function fh(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (n) {
            dh(e, t, n);
          },
          function (n) {
            return vc(e, t, n);
          },
        )
      : dh(e, t, a);
  }
  function dh(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      mh(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), ch(e, a))));
  }
  function vc(e, t, a) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do ((t.status = "rejected"), (t.reason = a), mh(t), (t = t.next));
      while (t !== n);
    }
    e.action = null;
  }
  function mh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function hh(e, t) {
    return t;
  }
  function gh(e, t) {
    if (Ee) {
      var a = Ze.formState;
      if (a !== null) {
        e: {
          var n = xe;
          if (Ee) {
            if (Ke) {
              t: {
                for (var i = Ke, r = pa; i.nodeType !== 8;) {
                  if (!r) {
                    i = null;
                    break t;
                  }
                  if (((i = va(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((r = i.data), (i = r === "F!" || r === "F" ? i : null));
              }
              if (i) {
                ((Ke = va(i.nextSibling)), (n = i.data === "F!"));
                break e;
              }
            }
            Rn(n);
          }
          n = !1;
        }
        n && (t = a[0]);
      }
    }
    return (
      (a = Bt()),
      (a.memoizedState = a.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hh,
        lastRenderedState: t,
      }),
      (a.queue = n),
      (a = Dh.bind(null, xe, n)),
      (n.dispatch = a),
      (n = yc(!1)),
      (r = Ec.bind(null, xe, !1, n.queue)),
      (n = Bt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = i),
      (a = Ab.bind(null, xe, i, r, a)),
      (i.dispatch = a),
      (n.memoizedState = e),
      [t, a, !1]
    );
  }
  function ph(e) {
    var t = rt();
    return yh(t, Qe, e);
  }
  function yh(e, t, a) {
    if (
      ((t = gc(e, t, hh)[0]),
      (e = so(dn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var n = ks(t);
      } catch (f) {
        throw f === gi ? $r : f;
      }
    else n = t;
    t = rt();
    var i = t.queue,
      r = i.dispatch;
    return (
      a !== t.memoizedState &&
        ((xe.flags |= 2048),
        bi(9, { destroy: void 0 }, Mb.bind(null, i, a), null)),
      [n, r, e]
    );
  }
  function Mb(e, t) {
    e.action = t;
  }
  function vh(e) {
    var t = rt(),
      a = Qe;
    if (a !== null) return yh(t, a, e);
    (rt(), (t = t.memoizedState), (a = rt()));
    var n = a.queue.dispatch;
    return ((a.memoizedState = e), [t, n, !1]);
  }
  function bi(e, t, a, n) {
    return (
      (e = { tag: e, create: a, deps: n, inst: t, next: null }),
      (t = xe.updateQueue),
      t === null && ((t = lo()), (xe.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((n = a.next), (a.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function bh() {
    return rt().memoizedState;
  }
  function ro(e, t, a, n) {
    var i = Bt();
    ((xe.flags |= e),
      (i.memoizedState = bi(
        1 | t,
        { destroy: void 0 },
        a,
        n === void 0 ? null : n,
      )));
  }
  function oo(e, t, a, n) {
    var i = rt();
    n = n === void 0 ? null : n;
    var r = i.memoizedState.inst;
    Qe !== null && n !== null && uc(n, Qe.memoizedState.deps)
      ? (i.memoizedState = bi(t, r, a, n))
      : ((xe.flags |= e), (i.memoizedState = bi(1 | t, r, a, n)));
  }
  function xh(e, t) {
    ro(8390656, 8, e, t);
  }
  function bc(e, t) {
    oo(2048, 8, e, t);
  }
  function Ob(e) {
    xe.flags |= 4;
    var t = xe.updateQueue;
    if (t === null) ((t = lo()), (xe.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function Sh(e) {
    var t = rt().memoizedState;
    return (
      Ob({ ref: t, nextImpl: e }),
      function () {
        if ((ke & 2) !== 0) throw Error(u(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function wh(e, t) {
    return oo(4, 2, e, t);
  }
  function Nh(e, t) {
    return oo(4, 4, e, t);
  }
  function Eh(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Th(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), oo(4, 4, Eh.bind(null, t, e), a));
  }
  function xc() {}
  function jh(e, t) {
    var a = rt();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    return t !== null && uc(t, n[1]) ? n[0] : ((a.memoizedState = [e, t]), e);
  }
  function Ch(e, t) {
    var a = rt();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    if (t !== null && uc(t, n[1])) return n[0];
    if (((n = e()), _l)) {
      Gt(!0);
      try {
        e();
      } finally {
        Gt(!1);
      }
    }
    return ((a.memoizedState = [n, t]), n);
  }
  function Sc(e, t, a) {
    return a === void 0 || ((fn & 1073741824) !== 0 && (ze & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = Hg()), (xe.lanes |= e), (Yn |= e), a);
  }
  function zh(e, t, a, n) {
    return ea(a, t)
      ? a
      : kn.current !== null
        ? ((e = Sc(e, a, n)), ea(e, t) || (mt = !0), e)
        : (fn & 106) === 0 || ((fn & 1073741824) !== 0 && (ze & 261930) === 0)
          ? ((mt = !0), (e.memoizedState = a))
          : ((e = Hg()), (xe.lanes |= e), (Yn |= e), t);
  }
  function Rh(e, t, a, n, i) {
    var r = ue.p;
    ue.p = r !== 0 && 8 > r ? r : 8;
    var f = ae.T,
      g = {};
    ((g.types = f !== null ? f.types : null), (ae.T = g), Ec(e, !1, t, a));
    try {
      var x = i(),
        z = ae.S;
      if (
        (z !== null && z(g, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var A = zb(x, n);
        Us(e, t, A, ia(e));
      } else Us(e, t, n, ia(e));
    } catch (q) {
      Us(e, t, { then: function () {}, status: "rejected", reason: q }, ia());
    } finally {
      ((ue.p = r),
        f !== null && g.types !== null && (f.types = g.types),
        (ae.T = f));
    }
  }
  function Db() {}
  function wc(e, t, a, n) {
    if (e.tag !== 5) throw Error(u(476));
    var i = _h(e).queue;
    Rh(
      e,
      i,
      t,
      gt,
      a === null
        ? Db
        : function () {
            return (Ah(e), a(n));
          },
    );
  }
  function _h(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: gt,
      baseState: gt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: gt,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Ah(e) {
    var t = _h(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Us(e, t.next.queue, {}, ia()));
  }
  function Nc() {
    return Tt(Li);
  }
  function Mh() {
    return rt().memoizedState;
  }
  function Oh() {
    return rt().memoizedState;
  }
  function kb(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ia();
          e = On(a);
          var n = Dn(t, e, a);
          (n !== null && (Ft(n, t, a), _s(n, t, a)),
            (t = { cache: Iu() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Ub(e, t, a) {
    var n = ia();
    ((a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      uo(e)
        ? kh(t, a)
        : ((a = Gu(e, t, a, n)), a !== null && (Ft(a, e, n), Uh(a, t, n))));
  }
  function Dh(e, t, a) {
    var n = ia();
    Us(e, t, a, n);
  }
  function Us(e, t, a, n) {
    var i = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (uo(e)) kh(t, i);
    else {
      var r = e.alternate;
      if (
        e.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = t.lastRenderedReducer), r !== null)
      )
        try {
          var f = t.lastRenderedState,
            g = r(f, a);
          if (((i.hasEagerState = !0), (i.eagerState = g), ea(g, f)))
            return (qr(e, t, i, 0), Ze === null && Br(), !1);
        } catch {
        } finally {
        }
      if (((a = Gu(e, t, i, n)), a !== null))
        return (Ft(a, e, n), Uh(a, t, n), !0);
    }
    return !1;
  }
  function Ec(e, t, a, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: gf(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      uo(e))
    ) {
      if (t) throw Error(u(479));
    } else ((t = Gu(e, a, n, 2)), t !== null && Ft(t, e, 2));
  }
  function uo(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function kh(e, t) {
    yi = ao = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function Uh(e, t, a) {
    if ((a & 4194048) !== 0) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), Hd(e, a));
    }
  }
  var co = {
      readContext: Tt,
      use: io,
      useCallback: lt,
      useContext: lt,
      useEffect: lt,
      useImperativeHandle: lt,
      useLayoutEffect: lt,
      useInsertionEffect: lt,
      useMemo: lt,
      useReducer: lt,
      useRef: lt,
      useState: lt,
      useDebugValue: lt,
      useDeferredValue: lt,
      useTransition: lt,
      useSyncExternalStore: lt,
      useId: lt,
      useHostTransitionStatus: lt,
      useFormState: lt,
      useActionState: lt,
      useOptimistic: lt,
      useMemoCache: lt,
      useCacheRefresh: lt,
      useEffectEvent: lt,
    },
    Hh = {
      readContext: Tt,
      use: io,
      useCallback: function (e, t) {
        return ((Bt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Tt,
      useEffect: xh,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          ro(4194308, 4, Eh.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return ro(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ro(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = Bt();
        t = t === void 0 ? null : t;
        var n = e();
        if (_l) {
          Gt(!0);
          try {
            e();
          } finally {
            Gt(!1);
          }
        }
        return ((a.memoizedState = [n, t]), n);
      },
      useReducer: function (e, t, a) {
        var n = Bt();
        if (a !== void 0) {
          var i = a(t);
          if (_l) {
            Gt(!0);
            try {
              a(t);
            } finally {
              Gt(!1);
            }
          }
        } else i = t;
        return (
          (n.memoizedState = n.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (n.queue = e),
          (e = e.dispatch = Ub.bind(null, xe, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Bt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = yc(e);
        var t = e.queue,
          a = Dh.bind(null, xe, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: xc,
      useDeferredValue: function (e, t) {
        var a = Bt();
        return Sc(a, e, t);
      },
      useTransition: function () {
        var e = yc(!1);
        return (
          (e = Rh.bind(null, xe, e.queue, !0, !1)),
          (Bt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var n = xe,
          i = Bt();
        if (Ee) {
          if (a === void 0) throw Error(u(407));
          a = a();
        } else {
          if (((a = t()), Ze === null)) throw Error(u(349));
          (ze & 127) !== 0 || lh(n, t, a);
        }
        i.memoizedState = a;
        var r = { value: a, getSnapshot: t };
        return (
          (i.queue = r),
          xh(sh.bind(null, n, r, e), [e]),
          (n.flags |= 2048),
          bi(9, { destroy: void 0 }, ih.bind(null, n, r, a, t), null),
          a
        );
      },
      useId: function () {
        var e = Bt(),
          t = Ze.identifierPrefix;
        if (Ee) {
          var a = La,
            n = Ha;
          ((a = (n & ~(1 << (32 - De(n) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = no++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Rb++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Nc,
      useFormState: gh,
      useActionState: gh,
      useOptimistic: function (e) {
        var t = Bt();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = Ec.bind(null, xe, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: hc,
      useCacheRefresh: function () {
        return (Bt().memoizedState = kb.bind(null, xe));
      },
      useEffectEvent: function (e) {
        var t = Bt(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((ke & 2) !== 0) throw Error(u(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Lh = {
      readContext: Tt,
      use: io,
      useCallback: jh,
      useContext: Tt,
      useEffect: bc,
      useImperativeHandle: Th,
      useInsertionEffect: wh,
      useLayoutEffect: Nh,
      useMemo: Ch,
      useReducer: so,
      useRef: bh,
      useState: function () {
        return so(dn);
      },
      useDebugValue: xc,
      useDeferredValue: function (e, t) {
        var a = rt();
        return zh(a, Qe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = so(dn)[0],
          t = rt().memoizedState;
        return [typeof e == "boolean" ? e : ks(e), t];
      },
      useSyncExternalStore: nh,
      useId: Mh,
      useHostTransitionStatus: Nc,
      useFormState: ph,
      useActionState: ph,
      useOptimistic: function (e, t) {
        var a = rt();
        return uh(a, Qe, e, t);
      },
      useMemoCache: hc,
      useCacheRefresh: Oh,
      useEffectEvent: Sh,
    },
    Hb = {
      readContext: Tt,
      use: io,
      useCallback: jh,
      useContext: Tt,
      useEffect: bc,
      useImperativeHandle: Th,
      useInsertionEffect: wh,
      useLayoutEffect: Nh,
      useMemo: Ch,
      useReducer: pc,
      useRef: bh,
      useState: function () {
        return pc(dn);
      },
      useDebugValue: xc,
      useDeferredValue: function (e, t) {
        var a = rt();
        return Qe === null ? Sc(a, e, t) : zh(a, Qe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = pc(dn)[0],
          t = rt().memoizedState;
        return [typeof e == "boolean" ? e : ks(e), t];
      },
      useSyncExternalStore: nh,
      useId: Mh,
      useHostTransitionStatus: Nc,
      useFormState: vh,
      useActionState: vh,
      useOptimistic: function (e, t) {
        var a = rt();
        return Qe !== null
          ? uh(a, Qe, e, t)
          : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: hc,
      useCacheRefresh: Oh,
      useEffectEvent: Sh,
    };
  function Tc(e, t, a, n) {
    ((t = e.memoizedState),
      (a = a(n, t)),
      (a = a == null ? t : $({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var jc = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var n = ia(),
        i = On(n);
      ((i.payload = t),
        a != null && (i.callback = a),
        (t = Dn(e, i, n)),
        t !== null && (Ft(t, e, n), _s(t, e, n)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var n = ia(),
        i = On(n);
      ((i.tag = 1),
        (i.payload = t),
        a != null && (i.callback = a),
        (t = Dn(e, i, n)),
        t !== null && (Ft(t, e, n), _s(t, e, n)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = ia(),
        n = On(a);
      ((n.tag = 2),
        t != null && (n.callback = t),
        (t = Dn(e, n, a)),
        t !== null && (Ft(t, e, a), _s(t, e, a)));
    },
  };
  function Bh(e, t, a, n, i, r, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, r, f)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ws(a, n) || !ws(i, r)
          : !0
    );
  }
  function qh(e, t, a, n) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, n),
      t.state !== e && jc.enqueueReplaceState(t, t.state, null));
  }
  function Al(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var n in t) n !== "ref" && (a[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = $({}, a));
      for (var i in e) a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function Yh(e) {
    Lr(e);
  }
  function Gh(e) {
    console.error(e);
  }
  function Vh(e) {
    Lr(e);
  }
  function fo(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Qh(e, t, a) {
    try {
      var n = e.onCaughtError;
      n(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Cc(e, t, a) {
    return (
      (a = On(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        fo(e, t);
      }),
      a
    );
  }
  function Xh(e) {
    return ((e = On(e)), (e.tag = 3), e);
  }
  function Zh(e, t, a, n) {
    var i = a.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var r = n.value;
      ((e.payload = function () {
        return i(r);
      }),
        (e.callback = function () {
          Qh(t, a, n);
        }));
    }
    var f = a.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (e.callback = function () {
        (Qh(t, a, n),
          typeof i != "function" &&
            (Gn === null ? (Gn = new Set([this])) : Gn.add(this)));
        var g = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Lb(e, t, a, n, i) {
    if (
      ((a.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Nl(t, a, i, !0),
        (a = jt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return (
              Mt === null ? Oo() : a.alternate === null && it === 0 && (it = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = i),
              n === Ir
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([n])) : t.add(n),
                  df(e, n, i)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              n === Ir
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([n])) : a.add(n)),
                  df(e, n, i)),
              !1
            );
        }
        throw Error(u(435, a.tag));
      }
      return (df(e, n, i), Oo(), !1);
    }
    if (Ee)
      return (
        (t = jt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            n !== Ku && ((e = Error(u(422), { cause: n })), Ts(ma(e, a))))
          : (n !== Ku && ((t = Error(u(423), { cause: n })), Ts(ma(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (n = ma(n, a)),
            (i = Cc(e.stateNode, n, i)),
            nc(e, i),
            it !== 4 && (it = 2)),
        !1
      );
    var r = Error(u(520), { cause: n });
    if (
      ((r = ma(r, a)),
      Qs === null ? (Qs = [r]) : Qs.push(r),
      it !== 4 && (it = 2),
      t === null)
    )
      return !0;
    ((n = ma(n, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = i & -i),
            (a.lanes |= e),
            (e = Cc(a.stateNode, n, e)),
            nc(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (r = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Gn === null || !Gn.has(r)))))
          )
            return (
              (a.flags |= 65536),
              (i &= -i),
              (a.lanes |= i),
              (i = Xh(i)),
              Zh(i, e, a, n),
              nc(a, i),
              !1
            );
          break;
        case 22:
          if (a.memoizedState !== null) return ((a.flags |= 65536), !1);
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var zc = Error(u(461)),
    mt = !1;
  function pt(e, t, a, n) {
    t.child = e === null ? $m(t, null, a, n) : Rl(t, e.child, a, n);
  }
  function Kh(e, t, a, n, i) {
    a = a.render;
    var r = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var g in n) g !== "ref" && (f[g] = n[g]);
    } else f = n;
    return (
      El(t),
      (n = cc(e, t, a, f, r, i)),
      (g = fc()),
      e !== null && !mt
        ? (dc(e, t, i), mn(e, t, i))
        : (Ee && g && Qr(t), (t.flags |= 1), pt(e, t, n, i), t.child)
    );
  }
  function Jh(e, t, a, n, i) {
    if (e === null) {
      var r = a.type;
      return typeof r == "function" &&
        !Vu(r) &&
        r.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = r), Fh(e, t, r, n, i))
        : ((e = Gr(a.type, null, n, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((r = e.child), !Uc(e, i))) {
      var f = r.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : ws), a(f, n) && e.ref === t.ref)
      )
        return mn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = rn(r, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Fh(e, t, a, n, i) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (ws(r, n) && e.ref === t.ref)
        if (((mt = !1), (t.pendingProps = n = r), Uc(e, i)))
          (e.flags & 131072) !== 0 && (mt = !0);
        else return ((t.lanes = e.lanes), mn(e, t, i));
    }
    return Rc(e, t, a, n, i);
  }
  function $h(e, t, a, n) {
    var i = n.children,
      r = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | a : a), e !== null)) {
          for (n = t.child = e.child, i = 0; n !== null;)
            ((i = i | n.lanes | n.childLanes), (n = n.sibling));
          n = i & ~r;
        } else ((n = 0), (t.child = null));
        return Ih(e, t, r, a, n);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Fr(t, r !== null ? r.cachePool : null),
          r !== null ? Pm(t, r) : ic(),
          eh(t));
      else
        return (
          (n = t.lanes = 536870912),
          Ih(e, t, r !== null ? r.baseLanes | a : a, a, n)
        );
    } else
      r !== null
        ? (Fr(t, r.cachePool), Pm(t, r), Hn(), (t.memoizedState = null))
        : (e !== null && Fr(t, null), ic(), Hn());
    return (pt(e, t, i, a), t.child);
  }
  function Hs(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Ih(e, t, a, n, i) {
    var r = Pu();
    return (
      (r = r === null ? null : { parent: ft._currentValue, pool: r }),
      (t.memoizedState = { baseLanes: a, cachePool: r }),
      e !== null && Fr(t, null),
      ic(),
      eh(t),
      e !== null && Nl(e, t, n, !0),
      (t.childLanes = i),
      null
    );
  }
  function mo(e, t) {
    return (
      (t = ho({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Wh(e, t, a) {
    return (
      Rl(t, e.child, null, a),
      (e = mo(t, t.pendingProps)),
      (e.flags |= 2),
      ta(t),
      (t.memoizedState = null),
      e
    );
  }
  function Bb(e, t, a) {
    var n = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ee) {
        if (n.mode === "hidden")
          return (
            (e = mo(t, n)),
            (t.lanes = 536870912),
            (e.memoizedState = { baseLanes: 0, cachePool: null }),
            Hs(null, e)
          );
        if (
          (rc(t),
          (e = Ke)
            ? ((e = E0(e, pa)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Cn !== null ? { id: Ha, overflow: La } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = km(e)),
                (a.return = t),
                (t.child = a),
                (xt = t),
                (Ke = null)))
            : (e = null),
          e === null)
        )
          throw Rn(t);
        return ((t.lanes = 536870912), null);
      }
      return mo(t, n);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if ((rc(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = Wh(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(u(558));
      else if (
        (mt || Nl(e, t, a, !1), (i = (a & e.childLanes) !== 0), mt || i)
      ) {
        if (kn.current === null) {
          if (
            ((n = Ze),
            n !== null && ((f = Ld(n, a)), f !== 0 && f !== r.retryLane))
          )
            throw ((r.retryLane = f), bl(e, f), Ft(n, e, f), zc);
          Oo();
        }
        t = Wh(e, t, a);
      } else
        ((e = r.treeContext),
          (Ke = va(f.nextSibling)),
          (xt = t),
          (Ee = !0),
          (zn = null),
          (pa = !1),
          e !== null && Lm(t, e),
          (t = mo(t, n)),
          (t.flags |= 134221824));
      return t;
    }
    return (
      (e = rn(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function xi(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(u(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Rc(e, t, a, n, i) {
    return (
      El(t),
      (a = cc(e, t, a, n, void 0, i)),
      (n = fc()),
      e !== null && !mt
        ? (dc(e, t, i), mn(e, t, i))
        : (Ee && n && Qr(t), (t.flags |= 1), pt(e, t, a, i), t.child)
    );
  }
  function Ph(e, t, a, n, i, r) {
    return (
      El(t),
      (t.updateQueue = null),
      (a = ah(t, n, a, i)),
      th(e),
      (n = fc()),
      e !== null && !mt
        ? (dc(e, t, r), mn(e, t, r))
        : (Ee && n && Qr(t), (t.flags |= 1), pt(e, t, a, r), t.child)
    );
  }
  function eg(e, t, a, n, i) {
    if ((El(t), t.stateNode === null)) {
      var r = ci,
        f = a.contextType;
      (typeof f == "object" && f !== null && (r = Tt(f)),
        (r = new a(n, r)),
        (t.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = jc),
        (t.stateNode = r),
        (r._reactInternals = t),
        (r = t.stateNode),
        (r.props = n),
        (r.state = t.memoizedState),
        (r.refs = {}),
        tc(t),
        (f = a.contextType),
        (r.context = typeof f == "object" && f !== null ? Tt(f) : ci),
        (r.state = t.memoizedState),
        (f = a.getDerivedStateFromProps),
        typeof f == "function" && (Tc(t, a, f, n), (r.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && jc.enqueueReplaceState(r, r.state, null),
          Ms(t, n, r, i),
          As(),
          (r.state = t.memoizedState)),
        typeof r.componentDidMount == "function" && (t.flags |= 4194308),
        (n = !0));
    } else if (e === null) {
      r = t.stateNode;
      var g = t.memoizedProps,
        x = Al(a, g);
      r.props = x;
      var z = r.context,
        A = a.contextType;
      ((f = ci), typeof A == "object" && A !== null && (f = Tt(A)));
      var q = a.getDerivedStateFromProps;
      ((A =
        typeof q == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        A ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((g || z !== f) && qh(t, r, n, f)),
        (Mn = !1));
      var j = t.memoizedState;
      ((r.state = j),
        Ms(t, n, r, i),
        As(),
        (z = t.memoizedState),
        g || j !== z || Mn
          ? (typeof q == "function" && (Tc(t, a, q, n), (z = t.memoizedState)),
            (x = Mn || Bh(t, a, x, n, j, z, f))
              ? (A ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = z)),
            (r.props = n),
            (r.state = z),
            (r.context = f),
            (n = x))
          : (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1)));
    } else {
      ((r = t.stateNode),
        ac(e, t),
        (f = t.memoizedProps),
        (A = Al(a, f)),
        (r.props = A),
        (q = t.pendingProps),
        (j = r.context),
        (z = a.contextType),
        (x = ci),
        typeof z == "object" && z !== null && (x = Tt(z)),
        (g = a.getDerivedStateFromProps),
        (z =
          typeof g == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== q || j !== x) && qh(t, r, n, x)),
        (Mn = !1),
        (j = t.memoizedState),
        (r.state = j),
        Ms(t, n, r, i),
        As());
      var _ = t.memoizedState;
      f !== q ||
      j !== _ ||
      Mn ||
      (e !== null && e.dependencies !== null && Kr(e.dependencies))
        ? (typeof g == "function" && (Tc(t, a, g, n), (_ = t.memoizedState)),
          (A =
            Mn ||
            Bh(t, a, A, n, j, _, x) ||
            (e !== null && e.dependencies !== null && Kr(e.dependencies)))
            ? (z ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(n, _, x),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(n, _, x)),
              typeof r.componentDidUpdate == "function" && (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = _)),
          (r.props = n),
          (r.state = _),
          (r.context = x),
          (n = A))
        : (typeof r.componentDidUpdate != "function" ||
            (f === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (r = n),
      xi(e, t),
      (n = (t.flags & 128) !== 0),
      r || n
        ? ((r = t.stateNode),
          (a =
            n && typeof a.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = Rl(t, e.child, null, i)),
              (t.child = Rl(t, null, a, i)))
            : pt(e, t, a, i),
          (t.memoizedState = r.state),
          (e = t.child))
        : (e = mn(e, t, i)),
      e
    );
  }
  function tg(e, t, a, n) {
    return (Sl(), (t.flags |= 256), pt(e, t, a, n), t.child);
  }
  var _c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ac(e) {
    return { baseLanes: e, cachePool: Qm() };
  }
  function Mc(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= la), e);
  }
  function ag(e, t, a) {
    var n = t.pendingProps,
      i = !1,
      r = (t.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      f && ((i = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ee) {
        if (
          (i ? Un(t) : Hn(),
          (e = Ke)
            ? ((e = E0(e, pa)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Cn !== null ? { id: Ha, overflow: La } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = km(e)),
                (a.return = t),
                (t.child = a),
                (xt = t),
                (Ke = null)))
            : (e = null),
          e === null)
        )
          throw Rn(t);
        return (Mf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      return (
        (r = n.children),
        (n = n.fallback),
        i
          ? (Hn(),
            (i = t.mode),
            (r = ho({ mode: "hidden", children: r }, i)),
            (n = xl(n, i, a, null)),
            (r.return = t),
            (n.return = t),
            (r.sibling = n),
            (t.child = r),
            (n = t.child),
            (n.memoizedState = Ac(a)),
            (n.childLanes = Mc(e, f, a)),
            (t.memoizedState = _c),
            Hs(null, n))
          : (Un(t), Oc(t, r))
      );
    }
    var g = e.memoizedState;
    if (g !== null) {
      var x = g.dehydrated;
      if (x !== null) return qb(e, t, r, f, n, x, g, a);
    }
    return i
      ? (Hn(),
        (i = n.fallback),
        (r = t.mode),
        (g = e.child),
        (x = g.sibling),
        (n = rn(g, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = g.subtreeFlags & 1206910976),
        x !== null ? (i = rn(x, i)) : ((i = xl(i, r, a, null)), (i.flags |= 2)),
        (i.return = t),
        (n.return = t),
        (n.sibling = i),
        (t.child = n),
        Hs(null, n),
        (n = t.child),
        (i = e.child.memoizedState),
        i === null
          ? (i = Ac(a))
          : ((r = i.cachePool),
            r !== null
              ? ((g = ft._currentValue),
                (r = r.parent !== g ? { parent: g, pool: g } : r))
              : (r = Qm()),
            (i = { baseLanes: i.baseLanes | a, cachePool: r })),
        (n.memoizedState = i),
        (n.childLanes = Mc(e, f, a)),
        (t.memoizedState = _c),
        Hs(e.child, n))
      : (Un(t),
        (a = e.child),
        (e = a.sibling),
        (a = rn(a, { mode: "visible", children: n.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Oc(e, t) {
    return (
      (t = ho({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ho(e, t) {
    return ((e = Xt(22, e, null, t)), (e.lanes = 0), e);
  }
  function go(e, t, a) {
    return (
      Rl(t, e.child, null, a),
      (e = Oc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function qb(e, t, a, n, i, r, f, g) {
    if (a)
      return t.flags & 256
        ? (Un(t), (t.flags &= -257), go(e, t, g))
        : t.memoizedState !== null
          ? (Hn(), (t.child = e.child), (t.flags |= 128), null)
          : (Hn(),
            (r = i.fallback),
            (f = t.mode),
            (i = ho({ mode: "visible", children: i.children }, f)),
            (r = xl(r, f, g, null)),
            (r.flags |= 2),
            (i.return = t),
            (r.return = t),
            (i.sibling = r),
            (t.child = i),
            Rl(t, e.child, null, g),
            (i = t.child),
            (i.memoizedState = Ac(g)),
            (i.childLanes = Mc(e, n, g)),
            (t.memoizedState = _c),
            Hs(null, i));
    if ((Un(t), Mf(r))) {
      if (((n = r.nextSibling && r.nextSibling.dataset), n)) var x = n.dgst;
      return (
        (n = x),
        n !== "" &&
          ((i = Error(u(419))),
          (i.stack = ""),
          (i.digest = n),
          Ts({ value: i, source: null, stack: null })),
        go(e, t, g)
      );
    }
    if ((mt || Nl(e, t, g, !1), (n = (g & e.childLanes) !== 0), mt || n)) {
      if (kn.current !== null) return go(e, t, g);
      if (
        ((n = Ze), n !== null && ((i = Ld(n, g)), i !== 0 && i !== f.retryLane))
      )
        throw ((f.retryLane = i), bl(e, i), Ft(n, e, i), zc);
      return (Af(r) || Oo(), go(e, t, g));
    }
    return Af(r)
      ? ((t.flags |= 192), (t.child = e.child), null)
      : ((e = f.treeContext),
        (Ke = va(r.nextSibling)),
        (xt = t),
        (Ee = !0),
        (zn = null),
        (pa = !1),
        e !== null && Lm(t, e),
        (t = Oc(t, i.children)),
        (t.flags |= 134221824),
        t);
  }
  function ng(e, t, a) {
    e.lanes |= t;
    var n = e.alternate;
    (n !== null && (n.lanes |= t), Zr(e.return, t, a));
  }
  function lg(e) {
    for (var t = null; e !== null;) {
      var a = e.alternate;
      (a !== null && to(a) === null && (t = e), (e = e.sibling));
    }
    return t;
  }
  function po(e, t, a, n, i, r) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: a,
          tailMode: i,
          treeForkCount: r,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = n),
        (f.tail = a),
        (f.tailMode = i),
        (f.treeForkCount = r));
  }
  function Dc(e) {
    var t = e.child;
    for (e.child = null; t !== null;) {
      var a = t.sibling;
      ((t.sibling = e.child), (e.child = t), (t = a));
    }
  }
  function kc(e, t, a) {
    var n = t.pendingProps,
      i = n.revealOrder,
      r = n.tail;
    n = n.children;
    var f = Ct.current;
    if (t.flags & 128) return (Os(t, f), null);
    var g = (f & 2) !== 0;
    if (
      (g ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1),
      Os(t, f),
      i === "backwards" && e !== null
        ? (Dc(e), pt(e, t, n, a), Dc(e))
        : pt(e, t, n, a),
      (n = Ee ? Es : 0),
      !g && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && ng(e, a, t);
        else if (e.tag === 19) ng(e, a, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (i) {
      case "backwards":
        ((a = lg(t.child)),
          a === null
            ? ((i = t.child), (t.child = null))
            : ((i = a.sibling), (a.sibling = null), Dc(t)),
          po(t, !0, i, null, r, n));
        break;
      case "unstable_legacy-backwards":
        for (a = null, i = t.child, t.child = null; i !== null;) {
          if (((e = i.alternate), e !== null && to(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = a), (a = i), (i = e));
        }
        po(t, !0, a, null, r, n);
        break;
      case "together":
        po(t, !1, null, null, void 0, n);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        ((a = lg(t.child)),
          a === null
            ? ((i = t.child), (t.child = null))
            : ((i = a.sibling), (a.sibling = null)),
          po(t, !1, i, a, r, n));
    }
    return t.child;
  }
  function ig(e, t, a) {
    var n = t.pendingProps;
    return (_n(t, t.type, n.value), pt(e, t, n.children, a), t.child);
  }
  function mn(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Yn |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Nl(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, a = rn(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (a = a.sibling = rn(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Uc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Kr(e)));
  }
  function Yb(e, t, a) {
    switch (t.tag) {
      case 3:
        (dl(t, t.stateNode.containerInfo),
          _n(t, ft, e.memoizedState.cache),
          Sl());
        break;
      case 27:
      case 5:
        ls(t);
        break;
      case 4:
        dl(t, t.stateNode.containerInfo);
        break;
      case 10:
        _n(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), rc(t), null);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null) {
          if (n.dehydrated !== null) return (Un(t), (t.flags |= 128), null);
          n = Nl(e, t, a, !1);
          var i = t.child.childLanes;
          return n || (a & i) !== 0
            ? ag(e, t, a)
            : (Un(t), (e = mn(e, t, a)), e !== null ? e.sibling : null);
        }
        Un(t);
        break;
      case 19:
        if (t.flags & 128) return kc(e, t, a);
        if (
          ((i = (e.flags & 128) !== 0),
          (n = (a & t.childLanes) !== 0),
          n || (Nl(e, t, a, !1), (n = (a & t.childLanes) !== 0)),
          i)
        ) {
          if (n) return kc(e, t, a);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Os(t, Ct.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), $h(e, t, a, t.pendingProps));
      case 24:
        _n(t, ft, e.memoizedState.cache);
    }
    return mn(e, t, a);
  }
  function sg(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) mt = !0;
      else {
        if (!Uc(e, a) && (t.flags & 128) === 0) return ((mt = !1), Yb(e, t, a));
        mt = (e.flags & 131072) !== 0;
      }
    else ((mt = !1), Ee && (t.flags & 1048576) !== 0 && Hm(t, Es, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (((e = Cl(t.elementType)), (t.type = e), typeof e == "function"))
            Vu(e)
              ? ((n = Al(e, n)), (t.tag = 1), (t = eg(null, t, e, n, a)))
              : ((t.tag = 0), (t = Rc(null, t, e, n, a)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === G) {
                ((t.tag = 11), (t = Kh(null, t, e, n, a)));
                break e;
              } else if (i === he) {
                ((t.tag = 14), (t = Jh(null, t, e, n, a)));
                break e;
              } else if (i === ve) {
                ((t.tag = 10), (t.type = e), (t = ig(null, t, a)));
                break e;
              }
            }
            throw ((t = W(e) || e), Error(u(306, t, "")));
          }
        }
        return t;
      case 0:
        return Rc(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((n = t.type), (i = Al(n, t.pendingProps)), eg(e, t, n, i, a));
      case 3:
        e: {
          if ((dl(t, t.stateNode.containerInfo), e === null))
            throw Error(u(387));
          n = t.pendingProps;
          var r = t.memoizedState;
          ((i = r.element), ac(e, t), Ms(t, n, null, a));
          var f = t.memoizedState;
          if (
            ((n = f.cache),
            _n(t, ft, n),
            n !== r.cache && $u(t, [ft], a, !0),
            As(),
            (n = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: n, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = r),
              (t.memoizedState = r),
              t.flags & 256)
            ) {
              t = tg(e, t, n, a);
              break e;
            } else if (n !== i) {
              ((i = ma(Error(u(424)), t)), Ts(i), (t = tg(e, t, n, a)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Ke = va(e.firstChild),
                  xt = t,
                  Ee = !0,
                  zn = null,
                  pa = !0,
                  a = $m(t, null, n, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 134221824), (a = a.sibling));
            }
          else {
            if ((Sl(), n === i)) {
              t = mn(e, t, a);
              break e;
            }
            pt(e, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          xi(e, t),
          e === null
            ? (a = A0(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : Ee || (t.stateNode = c0(t.type, t.pendingProps, Da.current, t))
            : (t.memoizedState = A0(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ls(t),
          e === null &&
            Ee &&
            ((n = t.stateNode = C0(t.type, t.pendingProps, Da.current)),
            (xt = t),
            (pa = !0),
            (i = Ke),
            Xn(t.type) ? ((Of = i), (Ke = va(n.firstChild))) : (Ke = i)),
          pt(e, t, t.pendingProps.children, a),
          xi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ee &&
            ((i = n = Ke) &&
              ((n = kx(n, t.type, t.pendingProps, pa)),
              n !== null
                ? ((t.stateNode = n),
                  (xt = t),
                  (Ke = va(n.firstChild)),
                  (pa = !1),
                  (i = !0))
                : (i = !1)),
            i || Rn(t)),
          ls(t),
          (i = t.type),
          (r = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (n = r.children),
          Ef(i, r) ? (n = null) : f !== null && Ef(i, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = cc(e, t, _b, null, null, a)), (Li._currentValue = i)),
          xi(e, t),
          pt(e, t, n, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ee &&
            ((e = a = Ke) &&
              ((a = Ux(a, t.pendingProps, pa)),
              a !== null
                ? ((t.stateNode = a), (xt = t), (Ke = null), (e = !0))
                : (e = !1)),
            e || Rn(t)),
          null
        );
      case 13:
        return ag(e, t, a);
      case 4:
        return (
          dl(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = Rl(t, null, n, a)) : pt(e, t, n, a),
          t.child
        );
      case 11:
        return Kh(e, t, t.type, t.pendingProps, a);
      case 7:
        return ((n = t.pendingProps), xi(e, t), pt(e, t, n, a), t.child);
      case 8:
        return (pt(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (pt(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return ig(e, t, a);
      case 9:
        return (
          (i = t.type._context),
          (n = t.pendingProps.children),
          El(t),
          (i = Tt(i)),
          (n = n(i)),
          (t.flags |= 1),
          pt(e, t, n, a),
          t.child
        );
      case 14:
        return Jh(e, t, t.type, t.pendingProps, a);
      case 15:
        return Fh(e, t, t.type, t.pendingProps, a);
      case 19:
        return kc(e, t, a);
      case 31:
        return Bb(e, t, a);
      case 22:
        return $h(e, t, a, t.pendingProps);
      case 24:
        return (
          El(t),
          (n = Tt(ft)),
          e === null
            ? ((i = Pu()),
              i === null &&
                ((i = Ze),
                (r = Iu()),
                (i.pooledCache = r),
                r.refCount++,
                r !== null && (i.pooledCacheLanes |= a),
                (i = r)),
              (t.memoizedState = { parent: n, cache: i }),
              tc(t),
              _n(t, ft, i))
            : ((e.lanes & a) !== 0 && (ac(e, t), Ms(t, null, null, a), As()),
              (i = e.memoizedState),
              (r = t.memoizedState),
              i.parent !== n
                ? ((i = { parent: n, cache: n }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  _n(t, ft, n))
                : ((n = r.cache),
                  _n(t, ft, n),
                  n !== i.cache && $u(t, [ft], a, !0))),
          pt(e, t, t.pendingProps.children, a),
          t.child
        );
      case 30:
        return (
          t.stateNode === null &&
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (n = t.pendingProps),
          n.name != null && n.name !== "auto"
            ? (t.flags |= e === null ? 18882560 : 18874368)
            : Ee && Qr(t),
          e !== null && e.memoizedProps.name !== n.name
            ? (t.flags |= 4194816)
            : xi(e, t),
          pt(e, t, n.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function hn(e) {
    e.flags |= 4;
  }
  function Hc(e, t, a, n, i) {
    var r;
    if (
      ((r = (e.mode & 32) !== 0) &&
        (r =
          a === null
            ? k0(t, n)
            : k0(t, n) && (n.src !== a.src || n.srcSet !== a.srcSet)),
      r)
    ) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Yg()) e.flags |= 8192;
        else throw ((zl = Ir), ec);
    } else e.flags &= -16777217;
  }
  function rg(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !U0(t)))
      if (Yg()) e.flags |= 8192;
      else throw ((zl = Ir), ec);
  }
  function yo(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? kd() : 536870912), (e.lanes |= t), (Ti |= t)));
  }
  function Ls(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var a = e.tail, n = null; a !== null;)
            (a.alternate !== null && (n = a), (a = a.sibling));
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
          break;
        default:
          for (t = e.tail, a = null; t !== null;)
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      n = 0;
    if (t)
      for (var i = e.child; i !== null;)
        ((a |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags & 1206910976),
          (n |= i.flags & 1206910976),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null;)
        ((a |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags),
          (n |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = a), t);
  }
  function Gb(e, t, a) {
    var n = t.pendingProps;
    switch ((Zu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Je(t), null);
      case 1:
        return (Je(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          cn(ft),
          Wt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (mi(t)
              ? hn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ju())),
          Je(t),
          null
        );
      case 26:
        var i = t.type,
          r = t.memoizedState;
        return (
          e === null
            ? (hn(t),
              r !== null ? (Je(t), rg(t, r)) : (Je(t), Hc(t, i, null, n, a)))
            : r
              ? r !== e.memoizedState
                ? (hn(t), Je(t), rg(t, r))
                : (Je(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== n && hn(t),
                Je(t),
                Hc(t, i, e, n, a)),
          null
        );
      case 27:
        if (
          (Fl(t),
          (a = Da.current),
          (i = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== n && hn(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(u(166));
            return (Je(t), (t.subtreeFlags &= -33554433), null);
          }
          ((e = ot.current),
            mi(t) ? Bm(t) : ((e = C0(i, n, a)), (t.stateNode = e), hn(t)));
        }
        return (Je(t), (t.subtreeFlags &= -33554433), null);
      case 5:
        if ((Fl(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && hn(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(u(166));
            return (Je(t), (t.subtreeFlags &= -33554433), null);
          }
          if (((r = ot.current), mi(t))) Bm(t);
          else {
            var f = Fs(Da.current);
            switch (r) {
              case 1:
                r = f.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                r = f.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    r = f.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    r = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i,
                    );
                    break;
                  case "script":
                    ((r = f.createElement("div")),
                      (r.innerHTML = "<script><\/script>"),
                      (r = r.removeChild(r.firstChild)));
                    break;
                  case "select":
                    ((r =
                      typeof n.is == "string"
                        ? f.createElement("select", { is: n.is })
                        : f.createElement("select")),
                      n.multiple
                        ? (r.multiple = !0)
                        : n.size && (r.size = n.size));
                    break;
                  default:
                    r =
                      typeof n.is == "string"
                        ? f.createElement(i, { is: n.is })
                        : f.createElement(i);
                }
            }
            ((r[Et] = t), (r[Qt] = n));
            e: for (f = t.child; f !== null;) {
              if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null;) {
                if (f.return === null || f.return === t) break e;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            t.stateNode = r;
            e: switch ((Rt(r, i, n), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && hn(t);
          }
        }
        return (
          Je(t),
          (t.subtreeFlags &= -33554433),
          Hc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && hn(t);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(u(166));
          if (((e = Da.current), mi(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (n = null),
              (i = xt),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  n = i.memoizedProps;
              }
            ((e[Et] = t),
              (e = !!(
                e.nodeValue === a ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                s0(e.nodeValue, a)
              )),
              e || Rn(t, !0));
          } else
            ((e = Fs(e).createTextNode(n)), (e[Et] = t), (t.stateNode = e));
        }
        return (Je(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = mi(t)), a !== null)) {
            if (e === null) {
              if (!n) throw Error(u(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(u(557));
              e[Et] = t;
            } else
              (Sl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Je(t), (e = !1));
          } else
            ((a = Ju()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (ta(t), t) : (ta(t), null);
          if ((t.flags & 128) !== 0) throw Error(u(558));
        }
        return (Je(t), null);
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = mi(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(u(317));
              i[Et] = t;
            } else
              (Sl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Je(t), (i = !1));
          } else
            ((i = Ju()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (ta(t), t) : (ta(t), null);
        }
        return (
          ta(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = n !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((n = t.child),
                (i = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (i = n.alternate.memoizedState.cachePool.pool),
                (r = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (r = n.memoizedState.cachePool.pool),
                r !== i && (n.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              yo(t, t.updateQueue),
              Je(t),
              null)
        );
      case 4:
        return (
          Wt(),
          e === null && bf(t.stateNode.containerInfo),
          (t.flags |= 67108864),
          Je(t),
          null
        );
      case 10:
        return (cn(t.type), Je(t), null);
      case 19:
        if ((oc(t), (n = t.memoizedState), n === null)) return (Je(t), null);
        if (((i = (t.flags & 128) !== 0), (r = n.rendering), r === null))
          if (i) Ls(n, !1);
          else {
            if (it !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((r = to(e)), r !== null)) {
                  for (
                    t.flags |= 128,
                      Ls(n, !1),
                      e = r.updateQueue,
                      t.updateQueue = e,
                      yo(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;
                  )
                    (Dm(a, e), (a = a.sibling));
                  return (
                    Os(t, (Ct.current & 1) | 2),
                    Ee && on(t, n.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            n.tail !== null &&
              Ut() > Ro &&
              ((t.flags |= 128), (i = !0), Ls(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = to(r)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                yo(t, e),
                Ls(n, !0),
                n.tail === null &&
                  n.tailMode !== "collapsed" &&
                  n.tailMode !== "visible" &&
                  !r.alternate &&
                  !Ee)
              )
                return (Je(t), null);
            } else
              2 * Ut() - n.renderingStartTime > Ro &&
                a !== 536870912 &&
                ((t.flags |= 128), (i = !0), Ls(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((r.sibling = t.child), (t.child = r))
            : ((e = n.last),
              e !== null ? (e.sibling = r) : (t.child = r),
              (n.last = r));
        }
        if (n.tail !== null) {
          e = n.tail;
          e: {
            for (a = e; a !== null;) {
              if (a.alternate !== null) {
                a = !1;
                break e;
              }
              a = a.sibling;
            }
            a = !0;
          }
          return (
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = Ut()),
            (e.sibling = null),
            (r = Ct.current),
            (r = i ? (r & 1) | 2 : r & 1),
            n.tailMode === "visible" || n.tailMode === "collapsed" || !a || Ee
              ? Os(t, r)
              : ((a = r), Be(jt, t), Be(Ct, a), Mt === null && (Mt = t)),
            Ee && on(t, n.treeForkCount),
            e
          );
        }
        return (Je(t), null);
      case 22:
      case 23:
        return (
          ta(t),
          sc(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Je(t),
          (a = t.updateQueue),
          a !== null && yo(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== a && (t.flags |= 2048),
          e !== null && Pe(jl),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          cn(ft),
          Je(t),
          null
        );
      case 25:
        return null;
      case 30:
        return ((t.flags |= 33554432), Je(t), null);
    }
    throw Error(u(156, t.tag));
  }
  function Vb(e, t) {
    switch ((Zu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          cn(ft),
          Wt(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Fl(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ta(t), t.alternate === null)) throw Error(u(340));
          Sl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ta(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          Sl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (
          oc(t),
          (e = t.flags),
          e & 65536
            ? ((t.flags = (e & -65537) | 128),
              (e = t.memoizedState),
              e !== null && ((e.rendering = null), (e.tail = null)),
              (t.flags |= 4),
              t)
            : null
        );
      case 4:
        return (Wt(), null);
      case 10:
        return (cn(t.type), null);
      case 22:
      case 23:
        return (
          ta(t),
          sc(),
          e !== null && Pe(jl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (cn(ft), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function og(e, t) {
    switch ((Zu(t), t.tag)) {
      case 3:
        (cn(ft), Wt());
        break;
      case 26:
      case 27:
      case 5:
        Fl(t);
        break;
      case 4:
        Wt();
        break;
      case 31:
        t.memoizedState !== null && ta(t);
        break;
      case 13:
        ta(t);
        break;
      case 19:
        oc(t);
        break;
      case 10:
        cn(t.type);
        break;
      case 22:
      case 23:
        (ta(t), sc(), e !== null && Pe(jl));
        break;
      case 24:
        cn(ft);
    }
  }
  function Bs(e, t) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            n = void 0;
            var r = a.create,
              f = a.inst;
            ((n = r()), (f.destroy = n));
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (g) {
      Ye(t, t.return, g);
    }
  }
  function Ln(e, t, a) {
    try {
      var n = t.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var r = i.next;
        n = r;
        do {
          if ((n.tag & e) === e) {
            var f = n.inst,
              g = f.destroy;
            if (g !== void 0) {
              ((f.destroy = void 0), (i = t));
              var x = a,
                z = g;
              try {
                z();
              } catch (A) {
                Ye(i, x, A);
              }
            }
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (A) {
      Ye(t, t.return, A);
    }
  }
  function ug(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Wm(t, a);
      } catch (n) {
        Ye(e, e.return, n);
      }
    }
  }
  function cg(e, t, a) {
    ((a.props = Al(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (n) {
      Ye(e, t, n);
    }
  }
  function Ba(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            var i = e.stateNode,
              r = ln(e.memoizedProps, i);
            ((i.ref === null || i.ref.name !== r) && (i.ref = y0(r)),
              (n = i.ref));
            break;
          case 7:
            if (e.stateNode === null) {
              var f = new sa(e);
              (m(e.child, !1, Ox, f, void 0, void 0), (e.stateNode = f));
            }
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(n)) : (a.current = n);
      }
    } catch (g) {
      Ye(e, t, g);
    }
  }
  function zt(e, t) {
    var a = e.ref,
      n = e.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (i) {
          Ye(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (i) {
          Ye(e, t, i);
        }
      else a.current = null;
  }
  function vo(e, t) {
    if (
      (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
      e.alternate === null &&
      t !== null
    )
      for (var a = 0; a < t.length; a++) N0(e.stateNode, t[a]);
  }
  function fg(e) {
    for (
      var t = e.return;
      t !== null && (Bc(t) && N0(e.stateNode, t.stateNode), !Lc(t));
    )
      t = t.return;
  }
  function qs(e) {
    for (
      var t = e.return;
      t !== null && (Bc(t) && Dx(e.stateNode, t.stateNode), !Lc(t));
    )
      t = t.return;
  }
  function Lc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Bc(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function qc(e) {
    var t = e.type,
      a = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && n.focus();
          break e;
        case "img":
          a.src ? (n.src = a.src) : a.srcSet && (n.srcset = a.srcSet);
      }
    } catch (i) {
      Ye(e, e.return, i);
    }
  }
  function Yc(e, t, a) {
    try {
      var n = e.stateNode;
      (gx(n, e.type, a, t), (n[Qt] = t));
    } catch (i) {
      Ye(e, e.return, i);
    }
  }
  function dg(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Xn(e.type)) ||
      e.tag === 4
    );
  }
  function Gc(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || dg(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Xn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vc(e, t, a, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((i = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(i, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(i),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ua)),
        vo(e, n),
        (Oe = !0));
    else if (
      i !== 4 &&
      (i === 27 &&
        (vo(e, n), (n = null), Xn(e.type) && ((a = e.stateNode), (t = null))),
      (e = e.child),
      e !== null)
    )
      for (Vc(e, t, a, n), e = e.sibling; e !== null;)
        (Vc(e, t, a, n), (e = e.sibling));
  }
  function bo(e, t, a, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((i = e.stateNode),
        t ? a.insertBefore(i, t) : a.appendChild(i),
        vo(e, n),
        (Oe = !0));
    else if (
      i !== 4 &&
      (i === 27 && (vo(e, n), (n = null), Xn(e.type) && (a = e.stateNode)),
      (e = e.child),
      e !== null)
    )
      for (bo(e, t, a, n), e = e.sibling; e !== null;)
        (bo(e, t, a, n), (e = e.sibling));
  }
  function mg(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var n = e.type, i = t.attributes; i.length;)
        t.removeAttributeNode(i[0]);
      (Rt(t, n, a), (t[Et] = e), (t[Qt] = a));
    } catch (r) {
      Ye(e, e.return, r);
    }
  }
  var xo = !1,
    aa = null;
  function hg(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (xo = !0);
  }
  var qa = null;
  function gg() {
    var e = qa;
    return ((qa = null), e);
  }
  var Zt = 0;
  function Si(e, t, a, n, i) {
    return ((Zt = 0), pg(e.child, t, a, n, i));
  }
  function pg(e, t, a, n, i) {
    for (var r = !1; e !== null;) {
      if (e.tag === 5) {
        var f = e.stateNode;
        if (n !== null) {
          var g = Cf(f);
          (n.push(g), g.view && (r = !0));
        } else r || (Cf(f).view && (r = !0));
        ((xo = !0), g0(f, Zt === 0 ? t : t + "_" + Zt, a), Zt++);
      } else
        (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && i) || (pg(e.child, t, a, n, i) && (r = !0)));
      e = e.sibling;
    }
    return r;
  }
  function Ya(e, t) {
    for (; e !== null;)
      (e.tag === 5
        ? p0(e.stateNode, e.memoizedProps)
        : (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && t) || Ya(e.child, t)),
        (e = e.sibling));
  }
  function So(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (
          (e.tag !== 22 || e.memoizedState === null) &&
          (So(e),
          e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)
        ) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto") throw Error(u(544));
          var a = t.name;
          ((t = sn(t.default, t.share)),
            t !== "none" && (Si(e, a, t, null, !1) || Ya(e.child, !1)));
        }
        e = e.sibling;
      }
  }
  function Qc(e, t) {
    if (e.tag === 30) {
      var a = e.stateNode,
        n = e.memoizedProps,
        i = ln(n, a),
        r = sn(n.default, a.paired ? n.share : n.enter);
      r !== "none"
        ? Si(e, i, r, null, !1)
          ? (So(e), a.paired || t || Ri(e, n.onEnter))
          : Ya(e.child, !1)
        : So(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (Qc(e, t), (e = e.sibling));
    else So(e);
  }
  function Xc(e) {
    if (aa !== null && aa.size !== 0) {
      var t = aa;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var a = e.memoizedProps,
                n = a.name;
              if (n != null && n !== "auto") {
                var i = t.get(n);
                if (i !== void 0) {
                  var r = sn(a.default, a.share);
                  if (
                    (r !== "none" &&
                      (Si(e, n, r, null, !1)
                        ? ((r = e.stateNode),
                          (i.paired = r),
                          (r.paired = i),
                          Ri(e, a.onShare))
                        : Ya(e.child, !1)),
                    t.delete(n),
                    t.size === 0)
                  )
                    break;
                }
              }
            }
            Xc(e);
          }
          e = e.sibling;
        }
    }
  }
  function Zc(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps,
        a = ln(t, e.stateNode),
        n = aa !== null ? aa.get(a) : void 0,
        i = sn(t.default, n !== void 0 ? t.share : t.exit);
      (i !== "none" &&
        (Si(e, a, i, null, !1)
          ? n !== void 0
            ? ((i = e.stateNode),
              (n.paired = i),
              (i.paired = n),
              aa.delete(a),
              Ri(e, t.onShare))
            : Ri(e, t.onExit)
          : Ya(e.child, !1)),
        aa !== null && Xc(e));
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (Zc(e), (e = e.sibling));
    else aa !== null && Xc(e);
  }
  function yg(e) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          a = ln(t, e.stateNode);
        ((t = sn(t.default, t.update)),
          (e.flags &= -5),
          t !== "none" && Si(e, a, t, (e.memoizedState = []), !1));
      } else (e.subtreeFlags & 33554432) !== 0 && yg(e);
      e = e.sibling;
    }
  }
  function Kc(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && ((t.paired = null), Ya(e.child, !1));
          }
          Kc(e);
        }
        e = e.sibling;
      }
  }
  function wo(e) {
    if (e.tag === 30) ((e.stateNode.paired = null), Ya(e.child, !1), Kc(e));
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (wo(e), (e = e.sibling));
    else Kc(e);
  }
  function vg(e) {
    for (e = e.child; e !== null;)
      (e.tag === 30
        ? Ya(e.child, !1)
        : (e.subtreeFlags & 33554432) !== 0 && vg(e),
        (e = e.sibling));
  }
  function Jc(e, t, a, n, i, r, f) {
    for (var g = !1; t !== null;) {
      if (t.tag === 5) {
        var x = t.stateNode;
        if (r !== null && Zt < r.length) {
          var z = r[Zt],
            A = Cf(x);
          (z.view || A.view) && (g = !0);
          var q;
          if ((q = (e.flags & 4) === 0))
            if (A.clip) q = !0;
            else {
              q = z.rect;
              var j = A.rect;
              q =
                q.y !== j.y ||
                q.x !== j.x ||
                q.height !== j.height ||
                q.width !== j.width;
            }
          (q && (e.flags |= 4),
            A.abs
              ? (A = !z.abs)
              : ((z = z.rect),
                (A = A.rect),
                (A = z.height !== A.height || z.width !== A.width)),
            A && (e.flags |= 32));
        } else e.flags |= 32;
        ((e.flags & 4) !== 0 && g0(x, Zt === 0 ? a : a + "_" + Zt, i),
          (g && (e.flags & 4) !== 0) ||
            (qa === null && (qa = []),
            qa.push(x, Zt === 0 ? n : n + "_" + Zt, t.memoizedProps)),
          Zt++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          (t.tag === 30 && f
            ? (e.flags |= t.flags & 32)
            : Jc(e, t.child, a, n, i, r, f) && (g = !0));
      t = t.sibling;
    }
    return g;
  }
  function bg(e, t) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var a = e.memoizedProps,
          n = e.stateNode,
          i = ln(a, n),
          r = sn(a.default, a.update),
          f;
        ((f = e.memoizedState), (e.memoizedState = null), (n = e));
        var g = e.child;
        ((Zt = 0),
          (i = Jc(n, g, i, i, r, f, !1)),
          (e.flags & 4) !== 0 && i && Ri(e, a.onUpdate));
      } else (e.subtreeFlags & 33554432) !== 0 && bg(e);
      e = e.sibling;
    }
  }
  var St = !1,
    Le = !1,
    Ga = !1,
    Fc = !1,
    xg = typeof WeakSet == "function" ? WeakSet : Set,
    wt = null,
    Va = !1,
    Ys = !1,
    No = !1,
    $c = !1;
  function Qb(e, t, a) {
    if (((e = e.containerInfo), (wf = Bi), (e = Em(e)), Uu(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var r = i.anchorOffset,
              f = i.focusNode;
            i = i.focusOffset;
            try {
              (n.nodeType, f.nodeType);
            } catch {
              n = null;
              break e;
            }
            var g = 0,
              x = -1,
              z = -1,
              A = 0,
              q = 0,
              j = e,
              _ = null;
            t: for (;;) {
              for (
                var I;
                j !== n || (r !== 0 && j.nodeType !== 3) || (x = g + r),
                  j !== f || (i !== 0 && j.nodeType !== 3) || (z = g + i),
                  j.nodeType === 3 && (g += j.nodeValue.length),
                  (I = j.firstChild) !== null;
              )
                ((_ = j), (j = I));
              for (;;) {
                if (j === e) break t;
                if (
                  (_ === n && ++A === r && (x = g),
                  _ === f && ++q === i && (z = g),
                  (I = j.nextSibling) !== null)
                )
                  break;
                ((j = _), (_ = j.parentNode));
              }
              j = I;
            }
            n = x === -1 || z === -1 ? null : { start: x, end: z };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Nf = { focusedElem: e, selectionRange: n },
        Bi = !1,
        a = (a & 335544064) === a,
        wt = t,
        t = a ? 9270 : 1024;
      wt !== null;
    ) {
      if (((e = wt), a && ((n = e.deletions), n !== null)))
        for (r = 0; r < n.length; r++) a && Zc(n[r]);
      if (e.alternate === null && (e.flags & 2) !== 0) (a && hg(e), Eo(a));
      else {
        if (e.tag === 22) {
          if (((n = e.alternate), e.memoizedState !== null)) {
            (n !== null && n.memoizedState === null && a && Zc(n), Eo(a));
            continue;
          } else if (n !== null && n.memoizedState !== null) {
            (a && hg(e), Eo(a));
            continue;
          }
        }
        ((n = e.child),
          (e.subtreeFlags & t) !== 0 && n !== null
            ? ((n.return = e), (wt = n))
            : (a && yg(e), Eo(a)));
      }
    }
    aa = null;
  }
  function Eo(e) {
    for (; wt !== null;) {
      var t = wt,
        a = e,
        n = t.alternate,
        i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((i & 1024) !== 0 && n !== null) {
            ((a = void 0), (i = n.memoizedProps), (n = n.memoizedState));
            var r = t.stateNode;
            try {
              var f = Al(t.type, i);
              ((a = r.getSnapshotBeforeUpdate(f, n)),
                (r.__reactInternalSnapshotBeforeUpdate = a));
            } catch (g) {
              Ye(t, t.return, g);
            }
          }
          break;
        case 3:
          if ((i & 1024) !== 0) {
            if (((n = t.stateNode.containerInfo), (a = n.nodeType), a === 9))
              _f(n);
            else if (a === 1)
              switch (n.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  _f(n);
                  break;
                default:
                  n.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          a &&
            n !== null &&
            ((a = ln(n.memoizedProps, n.stateNode)),
            (i = t.memoizedProps),
            (i = sn(i.default, i.update)),
            i !== "none" && Si(n, a, i, (n.memoizedState = []), !0));
          break;
        default:
          if ((i & 1024) !== 0) throw Error(u(163));
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (wt = n));
        break;
      }
      wt = t.return;
    }
  }
  function Sg(e, t, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Qa(e, a), n & 4 && Bs(5, a));
        break;
      case 1:
        if ((Qa(e, a), n & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              Ye(a, a.return, f);
            }
          else {
            var i = Al(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Ye(a, a.return, f);
            }
          }
        (n & 64 && ug(a), n & 512 && Ba(a, a.return));
        break;
      case 3:
        if ((Qa(e, a), n & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Wm(e, t);
          } catch (f) {
            Ye(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && mg(a);
      case 26:
      case 5:
        (Qa(e, a), t === null && n & 4 && qc(a), n & 512 && Ba(a, a.return));
        break;
      case 12:
        Qa(e, a);
        break;
      case 31:
        (Qa(e, a), n & 4 && Tg(e, a));
        break;
      case 13:
        (Qa(e, a),
          n & 4 && jg(e, a),
          n & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = ax.bind(null, a)), Hx(e, a)))));
        break;
      case 22:
        if (((n = a.memoizedState !== null || St), !n)) {
          var r = (t !== null && t.memoizedState !== null) || Le;
          ((t = St),
            (i = Le),
            (St = n),
            (Le = r) && !i
              ? ((n = 2),
                (a.subtreeFlags & 8772) !== 0 && (n |= 1),
                Ca(e, a, n))
              : Qa(e, a),
            (St = t),
            (Le = i));
        }
        break;
      case 30:
        (Qa(e, a), n & 512 && Ba(a, a.return));
        break;
      case 7:
        n & 512 && Ba(a, a.return);
      default:
        Qa(e, a);
    }
  }
  function Ic(e, t) {
    for (e = e.child; e !== null;) (wg(e, t), (e = e.sibling));
  }
  function wg(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var a = e.stateNode;
          if (t) {
            var n = a.style;
            typeof n.setProperty == "function"
              ? n.setProperty("display", "none", "important")
              : (n.display = "none");
          } else {
            var i = e.stateNode,
              r = e.memoizedProps.style,
              f = r != null && r.hasOwnProperty("display") ? r.display : null;
            i.style.display =
              f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (x) {
          Ye(e, e.return, x);
        }
        Wc(e, t);
        break;
      case 6:
        try {
          ((e.stateNode.nodeValue = t ? "" : e.memoizedProps), (Oe = !0));
        } catch (x) {
          Ye(e, e.return, x);
        }
        break;
      case 18:
        try {
          var g = e.stateNode;
          t ? h0(g, !0) : h0(e.stateNode, !1);
        } catch (x) {
          Ye(e, e.return, x);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Ic(e, t);
        break;
      default:
        Ic(e, t);
    }
  }
  function Wc(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null;) {
        e: {
          var a = e,
            n = t;
          switch (a.tag) {
            case 4:
              wg(a, n);
              break e;
            case 22:
              a.memoizedState === null && Wc(a, n);
              break e;
            default:
              Wc(a, n);
          }
        }
        e = e.sibling;
      }
  }
  function Ng(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ng(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && zr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var We = null,
    Kt = !1;
  function Ta(e, t, a) {
    for (a = a.child; a !== null;) (Eg(e, t, a), (a = a.sibling));
  }
  function Eg(e, t, a) {
    if (Ve && typeof Ve.onCommitFiberUnmount == "function")
      try {
        Ve.onCommitFiberUnmount(nt, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Le || zt(a, t),
          Ta(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode &&
              !Le &&
              ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        (Le || zt(a, t), qs(a));
        var n = We,
          i = Kt;
        (Xn(a.type) && ((We = a.stateNode), (Kt = !1)),
          Ta(e, t, a),
          z0(a.stateNode, a.type, a.memoizedProps),
          (We = n),
          (Kt = i));
        break;
      case 5:
        (Le || zt(a, t), qs(a));
      case 6:
        if (
          (a.tag === 6 && qs(a),
          (n = We),
          (i = Kt),
          (We = null),
          Ta(e, t, a),
          (We = n),
          (Kt = i),
          We !== null)
        )
          if (Kt)
            try {
              ((We.nodeType === 9
                ? We.body
                : We.nodeName === "HTML"
                  ? We.ownerDocument.body
                  : We
              ).removeChild(a.stateNode),
                (Oe = !0));
            } catch (r) {
              Ye(a, t, r);
            }
          else
            try {
              (We.removeChild(a.stateNode), (Oe = !0));
            } catch (r) {
              Ye(a, t, r);
            }
        break;
      case 18:
        We !== null &&
          (Kt
            ? ((e = We),
              m0(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              qi(e))
            : m0(We, a.stateNode));
        break;
      case 4:
        ((n = We),
          (i = Kt),
          (We = a.stateNode.containerInfo),
          (Kt = !0),
          Ta(e, t, a),
          (We = n),
          (Kt = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ln(2, a, t), Le || Ln(4, a, t), Ta(e, t, a));
        break;
      case 1:
        (Le ||
          (zt(a, t),
          (n = a.stateNode),
          typeof n.componentWillUnmount == "function" && cg(a, t, n)),
          Ta(e, t, a));
        break;
      case 21:
        Ta(e, t, a);
        break;
      case 22:
        ((Le = (n = Le) || a.memoizedState !== null), Ta(e, t, a), (Le = n));
        break;
      case 30:
        (zt(a, t), Ta(e, t, a));
        break;
      case 7:
        (Le || zt(a, t), Ta(e, t, a));
        break;
      default:
        Ta(e, t, a);
    }
  }
  function Tg(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        qi(e);
      } catch (a) {
        Ye(t, t.return, a);
      }
    }
  }
  function jg(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        qi(e);
      } catch (a) {
        Ye(t, t.return, a);
      }
  }
  function Xb(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new xg()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new xg()),
          t
        );
      default:
        throw Error(u(435, e.tag));
    }
  }
  function To(e, t) {
    var a = Xb(e);
    t.forEach(function (n) {
      if (!a.has(n)) {
        a.add(n);
        var i = nx.bind(null, e, n);
        n.then(i, i);
      }
    });
  }
  function qt(e, t, a) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var r = n[i],
          f = e,
          g = t,
          x = g;
        e: for (; x !== null;) {
          switch (x.tag) {
            case 27:
              if (Xn(x.type)) {
                ((We = x.stateNode), (Kt = !1));
                break e;
              }
              break;
            case 5:
              ((We = x.stateNode), (Kt = !1));
              break e;
            case 3:
            case 4:
              ((We = x.stateNode.containerInfo), (Kt = !0));
              break e;
          }
          x = x.return;
        }
        if (We === null) throw Error(u(160));
        (Eg(f, g, r),
          (We = null),
          (Kt = !1),
          (f = r.alternate),
          f !== null && (f.return = null),
          (r.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (Cg(t, e, a), (t = t.sibling));
  }
  var ja = null;
  function Cg(e, t, a) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          i & 4 &&
          ((n = e.updateQueue), (n = n !== null ? n.events : null), n !== null)
        )
          for (var r = 0; r < n.length; r++) {
            var f = n[r];
            f.ref.impl = f.nextImpl;
          }
        (qt(t, e, a),
          Yt(e),
          i & 4 && (Ln(3, e, e.return), Bs(3, e), Ln(5, e, e.return)));
        break;
      case 1:
        (qt(t, e, a),
          Yt(e),
          i & 512 && (Le || n === null || zt(n, n.return)),
          i & 64 &&
            St &&
            ((e = e.updateQueue),
            e !== null &&
              ((t = e.callbacks),
              t !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? t : a.concat(t))))));
        break;
      case 26:
        if (
          ((r = ja),
          qt(t, e, a),
          Yt(e),
          i & 512 && (Le || n === null || zt(n, n.return)),
          i & 4)
        )
          if (
            ((i = n !== null ? n.memoizedState : null),
            (a = e.memoizedState),
            n === null)
          )
            if (a === null)
              if (e.stateNode === null)
                if (St)
                  e.stateNode = c0(e.type, e.memoizedProps, t.containerInfo, e);
                else {
                  e: {
                    ((t = e.type),
                      (a = e.memoizedProps),
                      (i = r.ownerDocument || r));
                    t: switch (t) {
                      case "title":
                        ((n = i.getElementsByTagName("title")[0]),
                          (!n ||
                            n[ms] ||
                            n[Et] ||
                            n.namespaceURI === "http://www.w3.org/2000/svg" ||
                            n.hasAttribute("itemprop")) &&
                            ((n = i.createElement(t)),
                            i.head.insertBefore(
                              n,
                              i.querySelector("head > title"),
                            )),
                          Rt(n, t, a),
                          (n[Et] = e),
                          bt(n),
                          (t = n));
                        break e;
                      case "link":
                        if (
                          (r = D0("link", "href", i).get(t + (a.href || "")))
                        ) {
                          for (f = 0; f < r.length; f++)
                            if (
                              ((n = r[f]),
                              n.getAttribute("href") ===
                                (a.href == null || a.href === ""
                                  ? null
                                  : a.href) &&
                                n.getAttribute("rel") ===
                                  (a.rel == null ? null : a.rel) &&
                                n.getAttribute("title") ===
                                  (a.title == null ? null : a.title) &&
                                n.getAttribute("crossorigin") ===
                                  (a.crossOrigin == null
                                    ? null
                                    : a.crossOrigin))
                            ) {
                              r.splice(f, 1);
                              break t;
                            }
                        }
                        ((n = i.createElement(t)),
                          Rt(n, t, a),
                          i.head.appendChild(n));
                        break;
                      case "meta":
                        if (
                          (r = D0("meta", "content", i).get(
                            t + (a.content || ""),
                          ))
                        ) {
                          for (f = 0; f < r.length; f++)
                            if (
                              ((n = r[f]),
                              n.getAttribute("content") ===
                                (a.content == null ? null : "" + a.content) &&
                                n.getAttribute("name") ===
                                  (a.name == null ? null : a.name) &&
                                n.getAttribute("property") ===
                                  (a.property == null ? null : a.property) &&
                                n.getAttribute("http-equiv") ===
                                  (a.httpEquiv == null ? null : a.httpEquiv) &&
                                n.getAttribute("charset") ===
                                  (a.charSet == null ? null : a.charSet))
                            ) {
                              r.splice(f, 1);
                              break t;
                            }
                        }
                        ((n = i.createElement(t)),
                          Rt(n, t, a),
                          i.head.appendChild(n));
                        break;
                      default:
                        throw Error(u(468, t));
                    }
                    ((n[Et] = e), bt(n), (t = n));
                  }
                  e.stateNode = t;
                }
              else St || Hf(r, e.type, e.stateNode);
            else e.stateNode = O0(r, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? ((t = n.stateNode),
                    t === null || Le || t.parentNode.removeChild(t))
                  : i.count--,
                a === null
                  ? St || Hf(r, e.type, e.stateNode)
                  : O0(r, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Yc(e, e.memoizedProps, n.memoizedProps);
        break;
      case 27:
        (qt(t, e, a),
          Yt(e),
          i & 512 && (Le || n === null || zt(n, n.return)),
          n !== null && i & 4 && Yc(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          ((r = Ga),
          (Ga = !1),
          qt(t, e, a),
          (Ga = r),
          Yt(e),
          i & 512 && (Le || n === null || zt(n, n.return)),
          e.flags & 32)
        ) {
          t = e.stateNode;
          try {
            (ni(t, ""), (Oe = !0));
          } catch (A) {
            Ye(e, e.return, A);
          }
        }
        (i & 4 &&
          e.stateNode != null &&
          ((t = e.memoizedProps), Yc(e, t, n !== null ? n.memoizedProps : t)),
          i & 1024 && (Fc = !0));
        break;
      case 6:
        if ((qt(t, e, a), Yt(e), i & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          ((t = e.memoizedProps), (a = e.stateNode));
          try {
            ((a.nodeValue = t), (Oe = !0));
          } catch (A) {
            Ye(e, e.return, A);
          }
        }
        break;
      case 3:
        if (
          ((Oe = !1),
          (qo = null),
          (r = ja),
          (ja = $s(t.containerInfo)),
          qt(t, e, a),
          (ja = r),
          Yt(e),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            qi(t.containerInfo);
          } catch (A) {
            Ye(e, e.return, A);
          }
        (Fc && ((Fc = !1), zg(e)), (Oe = !1));
        break;
      case 4:
        ((i = Ga),
          (Ga = St),
          (n = Jd()),
          (r = ja),
          (ja = $s(e.stateNode.containerInfo)),
          qt(t, e, a),
          Yt(e),
          (ja = r),
          Oe && Ys && (No = !0),
          (Oe = n),
          (Ga = i));
        break;
      case 12:
        (qt(t, e, a), Yt(e));
        break;
      case 31:
        (qt(t, e, a),
          Yt(e),
          i & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), To(e, t))));
        break;
      case 13:
        (qt(t, e, a),
          Yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (zo = Ut()),
          i & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), To(e, t))));
        break;
      case 22:
        ((r = e.memoizedState !== null),
          (f = n !== null && n.memoizedState !== null));
        var g = St,
          x = Le,
          z = Ga;
        ((St = g || r),
          (Ga = z || r),
          (Le = x || f),
          qt(t, e, a),
          (Le = x),
          (Ga = z),
          (St = g),
          Yt(e),
          i & 8192 &&
            ((t = e.stateNode),
            (t._visibility = r ? t._visibility & -2 : t._visibility | 1),
            !r ||
              n === null ||
              f ||
              St ||
              Le ||
              ((t = f || Le),
              (a = St),
              (n = Le),
              (St = r || St),
              (Le = t),
              Bn(e, 2),
              (St = a),
              (Le = n)),
            (!r && Ga) || Ic(e, r)),
          i & 4 &&
            ((t = e.updateQueue),
            t !== null &&
              ((a = t.retryQueue),
              a !== null && ((t.retryQueue = null), To(e, a)))));
        break;
      case 19:
        (qt(t, e, a),
          Yt(e),
          i & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), To(e, t))));
        break;
      case 30:
        (i & 512 && (Le || n === null || zt(n, n.return)),
          (i = Jd()),
          (r = Ys),
          (f = (a & 335544064) === a),
          (g = e.memoizedProps),
          (Ys = f && sn(g.default, g.update) !== "none"),
          qt(t, e, a),
          Yt(e),
          f && n !== null && Oe && (e.flags |= 4),
          (Ys = r),
          (Oe = i));
        break;
      case 21:
        break;
      case 7:
        (i & 512 && (Le || n === null || zt(n, n.return)),
          n && n.stateNode !== null && (n.stateNode._fragmentFiber = e));
      default:
        (qt(t, e, a), Yt(e));
    }
  }
  function Yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, n = e.return; n !== null;) {
          if (dg(n)) {
            a = n;
            break;
          }
          n = n.return;
        }
        n = null;
        for (var i = e.return; i !== null;) {
          if (Bc(i)) {
            var r = i.stateNode;
            n === null ? (n = [r]) : n.push(r);
          }
          if (Lc(i)) break;
          i = i.return;
        }
        var f = n;
        if (a == null) throw Error(u(160));
        switch (a.tag) {
          case 27:
            var g = a.stateNode,
              x = Gc(e);
            bo(e, x, g, f);
            break;
          case 5:
            var z = a.stateNode;
            a.flags & 32 && (ni(z, ""), (a.flags &= -33));
            var A = Gc(e);
            bo(e, A, z, f);
            break;
          case 3:
          case 4:
            var q = a.stateNode.containerInfo,
              j = Gc(e);
            Vc(e, j, q, f);
            break;
          default:
            throw Error(u(161));
        }
      } catch (_) {
        Ye(e, e.return, _);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function zg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        (zg(t),
          t.tag === 5 &&
            t.flags & 1024 &&
            ((t = t.stateNode), (Bi = !0), t.reset(), (Bi = !1)),
          (e = e.sibling));
      }
  }
  function wi(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null;) (Rg(t, e), (t = t.sibling));
    else bg(t);
  }
  function Rg(e, t) {
    var a = e.alternate;
    if (a === null) Qc(e, !1);
    else
      switch (e.tag) {
        case 3:
          if ((($c = Va = !1), gg(), wi(t, e), !Va && !No)) {
            if (((e = qa), e !== null))
              for (var n = 0; n < e.length; n += 3) {
                a = e[n];
                var i = e[n + 1];
                (p0(a, e[n + 2]),
                  (a = a.ownerDocument.documentElement),
                  a !== null &&
                    a.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + i + ")",
                      },
                    ));
              }
            ((e = t.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.documentElement
                  : e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === "" &&
                ((e.style.viewTransitionName = "none"),
                e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                e.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              ($c = !0));
          }
          qa = null;
          break;
        case 5:
          wi(t, e);
          break;
        case 4:
          ((n = Va), (Va = !1), wi(t, e), Va && (No = !0), (Va = n));
          break;
        case 22:
          e.memoizedState === null &&
            (a.memoizedState !== null ? Qc(e, !1) : wi(t, e));
          break;
        case 30:
          ((n = Va), (i = gg()), (Va = !1), wi(t, e), Va && (e.flags |= 4));
          var r = e.memoizedProps,
            f = e.stateNode;
          ((t = ln(r, f)), (f = ln(a.memoizedProps, f)));
          var g = sn(r.default, r.update);
          (g === "none"
            ? (t = !1)
            : ((r = a.memoizedState),
              (a.memoizedState = null),
              (a = e.child),
              (Zt = 0),
              (t = Jc(e, a, t, f, g, r, !0)),
              Zt !== (r === null ? 0 : r.length) && (e.flags |= 32)),
            (e.flags & 4) !== 0 && t
              ? (Ri(e, e.memoizedProps.onUpdate), (qa = i))
              : i !== null && (i.push.apply(i, qa), (qa = i)),
            (Va = (e.flags & 32) !== 0 ? !0 : n));
          break;
        default:
          wi(t, e);
      }
  }
  function Qa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (Sg(e, t.alternate, t), (t = t.sibling));
  }
  function Bn(e, t) {
    for (e = e.child; e !== null;) {
      var a = e,
        n = t;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ln(4, a, a.return), Bn(a, n));
          break;
        case 1:
          zt(a, a.return);
          var i = a.stateNode;
          (typeof i.componentWillUnmount == "function" && cg(a, a.return, i),
            Bn(a, n));
          break;
        case 27:
          (n & 2) !== 0 && z0(a.stateNode, a.type, a.memoizedProps);
        case 5:
          (zt(a, a.return), (a.tag !== 5 && a.tag !== 27) || qs(a), Bn(a, n));
          break;
        case 6:
          qs(a);
          break;
        case 26:
          (zt(a, a.return),
            (i = a.stateNode),
            a.memoizedState !== null ||
              i === null ||
              Le ||
              i.parentNode.removeChild(i),
            Bn(a, n));
          break;
        case 22:
          a.memoizedState === null && Bn(a, n);
          break;
        case 30:
          (zt(a, a.return), Bn(a, n));
          break;
        case 7:
          zt(a, a.return);
        default:
          Bn(a, n);
      }
      e = e.sibling;
    }
  }
  function Ca(e, t, a) {
    for (
      a = (t.subtreeFlags & 8772) !== 0 ? a : a & -2, t = t.child;
      t !== null;
    ) {
      var n = t.alternate,
        i = e,
        r = t,
        f = r.flags,
        g = (a & 1) !== 0;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (Ca(i, r, a), Bs(4, r));
          break;
        case 1:
          if (
            (Ca(i, r, a),
            (n = r),
            (i = n.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (A) {
              Ye(n, n.return, A);
            }
          if (((n = r), (i = n.updateQueue), i !== null)) {
            var x = n.stateNode;
            try {
              var z = i.shared.hiddenCallbacks;
              if (z !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < z.length; i++)
                  Im(z[i], x);
            } catch (A) {
              Ye(n, n.return, A);
            }
          }
          (g && f & 64 && ug(r), Ba(r, r.return));
          break;
        case 27:
          (a & 2) !== 0 && mg(r);
        case 5:
          ((r.tag !== 5 && r.tag !== 27) || fg(r),
            Ca(i, r, a),
            g && n === null && f & 4 && qc(r),
            Ba(r, r.return));
          break;
        case 6:
          fg(r);
          break;
        case 26:
          ((x = r.stateNode),
            r.memoizedState !== null ||
              x === null ||
              St ||
              Hf($s(x.ownerDocument), r.type, x),
            Ca(i, r, a),
            g && n === null && f & 4 && qc(r),
            Ba(r, r.return));
          break;
        case 12:
          Ca(i, r, a);
          break;
        case 31:
          (Ca(i, r, a), g && f & 4 && Tg(i, r));
          break;
        case 13:
          (Ca(i, r, a), g && f & 4 && jg(i, r));
          break;
        case 22:
          (r.memoizedState === null && Ca(i, r, a), Ba(r, r.return));
          break;
        case 30:
          (Ca(i, r, a), Ba(r, r.return));
          break;
        case 7:
          Ba(r, r.return);
        default:
          Ca(i, r, a);
      }
      t = t.sibling;
    }
  }
  function Pc(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && js(a)));
  }
  function ef(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && js(e)));
  }
  function ya(e, t, a, n) {
    var i = (a & 335544064) === a;
    if (t.subtreeFlags & (i ? 10262 : 10256))
      for (t = t.child; t !== null;) (_g(e, t, a, n), (t = t.sibling));
    else i && vg(t);
  }
  function _g(e, t, a, n) {
    var i = (a & 335544064) === a;
    i &&
      t.alternate === null &&
      t.return !== null &&
      t.return.alternate !== null &&
      wo(t);
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ya(e, t, a, n), r & 2048 && Bs(9, t));
        break;
      case 1:
        ya(e, t, a, n);
        break;
      case 3:
        (ya(e, t, a, n),
          i &&
            $c &&
            ((e = e.containerInfo),
            (e =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            e.style.viewTransitionName === "root" &&
              (e.style.viewTransitionName = ""),
            (e = e.ownerDocument.documentElement),
            e !== null &&
              e.style.viewTransitionName === "none" &&
              (e.style.viewTransitionName = "")),
          r & 2048 &&
            ((r = null),
            t.alternate !== null && (r = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== r && (t.refCount++, r != null && js(r))));
        break;
      case 12:
        if (r & 2048) {
          (ya(e, t, a, n), (r = t.stateNode));
          try {
            var f = t.memoizedProps,
              g = f.id,
              x = f.onPostCommit;
            typeof x == "function" &&
              x(
                g,
                t.alternate === null ? "mount" : "update",
                r.passiveEffectDuration,
                -0,
              );
          } catch (z) {
            Ye(t, t.return, z);
          }
        } else ya(e, t, a, n);
        break;
      case 31:
        ya(e, t, a, n);
        break;
      case 13:
        ya(e, t, a, n);
        break;
      case 23:
        break;
      case 22:
        ((f = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? (i && g !== null && g.memoizedState === null && wo(g),
              f._visibility & 2 ? ya(e, t, a, n) : Gs(e, t))
            : (i && g !== null && g.memoizedState !== null && wo(t),
              f._visibility & 2
                ? ya(e, t, a, n)
                : ((f._visibility |= 2),
                  Ni(e, t, a, n, (t.subtreeFlags & 10256) !== 0 || !1))),
          r & 2048 && Pc(g, t));
        break;
      case 24:
        (ya(e, t, a, n), r & 2048 && ef(t.alternate, t));
        break;
      case 30:
        (i &&
          ((r = t.alternate), r !== null && (Ya(r.child, !0), Ya(t.child, !0))),
          ya(e, t, a, n));
        break;
      default:
        ya(e, t, a, n);
    }
  }
  function Ni(e, t, a, n, i) {
    for (
      i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var r = e,
        f = t,
        g = a,
        x = n,
        z = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Ni(r, f, g, x, i), Bs(8, f));
          break;
        case 23:
          break;
        case 22:
          var A = f.stateNode;
          (f.memoizedState !== null
            ? A._visibility & 2
              ? Ni(r, f, g, x, i)
              : Gs(r, f)
            : ((A._visibility |= 2), Ni(r, f, g, x, i)),
            i && z & 2048 && Pc(f.alternate, f));
          break;
        case 24:
          (Ni(r, f, g, x, i), i && z & 2048 && ef(f.alternate, f));
          break;
        default:
          Ni(r, f, g, x, i);
      }
      t = t.sibling;
    }
  }
  function Gs(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var a = e,
          n = t,
          i = n.flags;
        switch (n.tag) {
          case 22:
            (Gs(a, n), i & 2048 && Pc(n.alternate, n));
            break;
          case 24:
            (Gs(a, n), i & 2048 && ef(n.alternate, n));
            break;
          default:
            Gs(a, n);
        }
        t = t.sibling;
      }
  }
  var Ml = 8192;
  function Ol(e, t, a) {
    if (e.subtreeFlags & Ml)
      for (e = e.child; e !== null;) (Ag(e, t, a), (e = e.sibling));
  }
  function Ag(e, t, a) {
    switch (e.tag) {
      case 26:
        (Ol(e, t, a),
          e.flags & Ml &&
            (e.memoizedState !== null
              ? Ix(a, ja, e.memoizedState, e.memoizedProps)
              : ((e = e.stateNode), (t & 335544128) === t && L0(a, e))));
        break;
      case 5:
        (Ol(e, t, a),
          e.flags & Ml &&
            ((e = e.stateNode), (t & 335544128) === t && L0(a, e)));
        break;
      case 3:
      case 4:
        var n = ja;
        ((ja = $s(e.stateNode.containerInfo)), Ol(e, t, a), (ja = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Ml), (Ml = 16777216), Ol(e, t, a), (Ml = n))
            : Ol(e, t, a));
        break;
      case 30:
        if (
          (e.flags & Ml) !== 0 &&
          ((n = e.memoizedProps.name), n != null && n !== "auto")
        ) {
          var i = e.stateNode;
          ((i.paired = null), aa === null && (aa = new Map()), aa.set(n, i));
        }
        Ol(e, t, a);
        break;
      default:
        Ol(e, t, a);
    }
  }
  function Mg(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Vs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((wt = n), Dg(n, e));
        }
      Mg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (Og(e), (e = e.sibling));
  }
  function Og(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Vs(e), e.flags & 2048 && Ln(9, e, e.return));
        break;
      case 3:
        Vs(e);
        break;
      case 12:
        Vs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), jo(e))
          : Vs(e);
        break;
      default:
        Vs(e);
    }
  }
  function jo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((wt = n), Dg(n, e));
        }
      Mg(e);
    }
    for (e = e.child; e !== null;) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Ln(8, t, t.return), jo(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), jo(t)));
          break;
        default:
          jo(t);
      }
      e = e.sibling;
    }
  }
  function Dg(e, t) {
    for (; wt !== null;) {
      var a = wt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          js(a.memoizedState.cache);
      }
      if (((n = a.child), n !== null)) ((n.return = a), (wt = n));
      else
        e: for (a = e; wt !== null;) {
          n = wt;
          var i = n.sibling,
            r = n.return;
          if ((Ng(n), n === a)) {
            wt = null;
            break e;
          }
          if (i !== null) {
            ((i.return = r), (wt = i));
            break e;
          }
          wt = r;
        }
    }
  }
  var Zb = {
      getCacheForType: function (e) {
        var t = Tt(ft),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return Tt(ft).controller.signal;
      },
    },
    Kb = typeof WeakMap == "function" ? WeakMap : Map,
    ke = 0,
    Ze = null,
    je = null,
    ze = 0,
    qe = 0,
    na = null,
    qn = !1,
    Ei = !1,
    tf = !1,
    gn = 0,
    it = 0,
    Yn = 0,
    Dl = 0,
    Co = 0,
    la = 0,
    Ti = 0,
    Qs = null,
    Jt = null,
    af = !1,
    zo = 0,
    kg = 0,
    Ro = 1 / 0,
    _o = null,
    Gn = null,
    et = 0,
    za = null,
    kl = null,
    Xa = 0,
    nf = 0,
    lf = null,
    Ug = null,
    ji = null,
    Ci = null,
    zi = null,
    Xs = 0,
    Ao = null;
  function ia() {
    return (ke & 2) !== 0 && ze !== 0 ? ze & -ze : ae.T !== null ? gf() : Bd();
  }
  function Hg() {
    if (la === 0)
      if ((ze & 536870912) === 0 || Ee) {
        var e = En;
        ((En <<= 1), (En & 3932160) === 0 && (En = 262144), (la = e));
      } else la = 536870912;
    return ((e = jt.current), e !== null && (e.flags |= 32), la);
  }
  function Ri(e, t) {
    if (t != null) {
      var a = e.stateNode,
        n = a.ref;
      (n === null && (n = a.ref = y0(ln(e.memoizedProps, a))),
        Ci === null && (Ci = []),
        Ci.push(t.bind(null, n)));
    }
  }
  function Ft(e, t, a) {
    (((e === Ze && (qe === 2 || qe === 9)) || e.cancelPendingCommit !== null) &&
      (_i(e, 0), Vn(e, ze, la, !1)),
      ds(e, a),
      ((ke & 2) === 0 || e !== Ze) &&
        (e === Ze &&
          ((ke & 2) === 0 && (Dl |= a), it === 4 && Vn(e, ze, la, !1)),
        Za(e)));
  }
  function Lg(e, t, a) {
    if ((ke & 6) !== 0) throw Error(u(327));
    var n = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || fs(e, t),
      i = n ? $b(e, t) : rf(e, t, !0),
      r = n;
    do {
      if (i === 0) {
        Ei && !n && Vn(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), r && !Jb(a))) {
          ((i = rf(e, t, !1)), (r = !1));
          continue;
        }
        if (i === 2) {
          if (((r = t), e.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            ((f = e.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            t = f;
            e: {
              var g = e;
              i = Qs;
              var x = g.current.memoizedState.isDehydrated;
              if (
                (x && (_i(g, f).flags |= 256),
                (f = rf(g, f, !1)),
                f !== 2 && f !== 6)
              ) {
                if (tf && !x) {
                  ((g.errorRecoveryDisabledLanes |= r), (Dl |= r), (i = 4));
                  break e;
                }
                ((r = Jt),
                  (Jt = i),
                  r !== null &&
                    (Jt === null ? (Jt = r) : Jt.push.apply(Jt, r)));
              }
              i = f;
            }
            if (((r = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (_i(e, 0), Vn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((n = e), (r = i), r)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Vn(n, t, la, !qn);
              break e;
            case 2:
              Jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && ((i = zo + 300 - Ut()), 10 < i)) {
            if ((Vn(n, t, la, !qn), jr(n, 0, !0) !== 0)) break e;
            ((Xa = t),
              (n.timeoutHandle = jf(
                Bg.bind(
                  null,
                  n,
                  a,
                  Jt,
                  _o,
                  af,
                  t,
                  la,
                  Dl,
                  Ti,
                  qn,
                  r,
                  "Throttled",
                  -0,
                  0,
                ),
                i,
              )));
            break e;
          }
          Bg(n, a, Jt, _o, af, t, la, Dl, Ti, qn, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Za(e);
  }
  function Bg(e, t, a, n, i, r, f, g, x, z, A, q, j, _) {
    e.timeoutHandle = -1;
    var I = t.subtreeFlags,
      oe = (r & 335544064) === r;
    if (
      ((q = null),
      (oe || I & 8192 || (I & 16785408) === 16785408) &&
        ((q = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Ua,
        }),
        (aa = null),
        Ag(t, r, q),
        oe &&
          ((I = q),
          (oe = e.containerInfo),
          (oe = (oe.nodeType === 9 ? oe : oe.ownerDocument)
            .__reactViewTransition),
          oe != null &&
            (I.count++,
            (I.waitingForViewTransition = !0),
            (I = Ps.bind(I)),
            oe.finished.then(I, I))),
        (I =
          (r & 62914560) === r
            ? zo - Ut()
            : (r & 4194048) === r
              ? kg - Ut()
              : 0),
        (I = Wx(q, I)),
        I !== null))
    ) {
      ((Xa = r),
        (e.cancelPendingCommit = I(
          Kg.bind(null, e, t, r, a, n, i, f, g, x, z, A, q, null, j, _),
        )),
        Vn(e, r, f, !z));
      return;
    }
    Kg(e, t, r, a, n, i, f, g, x, z, A, q);
  }
  function Jb(e) {
    for (var t = e; ;) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var n = 0; n < a.length; n++) {
          var i = a[n],
            r = i.getSnapshot;
          i = i.value;
          try {
            if (!ea(r(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Vn(e, t, a, n) {
    ((t = Dd(e, t)),
      (t &= ~Co),
      (t &= ~Dl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes));
    for (var i = t; 0 < i;) {
      var r = 31 - De(i),
        f = 1 << r;
      ((n[r] = -1), (i &= ~f));
    }
    a !== 0 && Ud(e, a, t);
  }
  function Mo() {
    return (ke & 6) === 0 ? (Zs(0), !1) : !0;
  }
  function sf() {
    if (je !== null) {
      if (qe === 0) var e = je.return;
      else ((e = je), (un = wl = null), mc(e), (pi = null), (Rs = 0), (e = je));
      for (; e !== null;) (og(e.alternate, e), (e = e.return));
      je = null;
    }
  }
  function _i(e, t) {
    var a = e.timeoutHandle;
    return (
      a !== -1 && ((e.timeoutHandle = -1), vx(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (Xa = 0),
      sf(),
      (Ze = e),
      (je = a = rn(e.current, null)),
      (ze = t),
      (qe = 0),
      (na = null),
      (qn = !1),
      (Ei = fs(e, t)),
      (tf = !1),
      (Ti = la = Co = Dl = Yn = it = 0),
      (Jt = Qs = null),
      (af = !1),
      (gn = Dd(e, t)),
      Br(),
      a
    );
  }
  function qg(e, t) {
    ((xe = null),
      (ae.H = co),
      t === gi || t === $r
        ? ((t = Km()), (qe = 3))
        : t === ec
          ? ((t = Km()), (qe = 4))
          : (qe =
              t === zc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (na = t),
      je === null && ((it = 1), fo(e, ma(t, e.current))));
  }
  function Yg() {
    var e = jt.current;
    return e === null
      ? !0
      : (ze & 4194048) === ze
        ? Mt === null
        : (ze & 62914560) === ze || (ze & 536870912) !== 0
          ? e === Mt
          : !1;
  }
  function Gg() {
    var e = ae.H;
    return ((ae.H = co), e === null ? co : e);
  }
  function Vg() {
    var e = ae.A;
    return ((ae.A = Zb), e);
  }
  function Oo() {
    ((it = 4),
      qn || ((ze & 4194048) !== ze && jt.current !== null) || (Ei = !0),
      ((Yn & 134217727) === 0 && (Dl & 134217727) === 0) ||
        Ze === null ||
        Vn(Ze, ze, la, !1));
  }
  function rf(e, t, a) {
    var n = ke;
    ke |= 2;
    var i = Gg(),
      r = Vg();
    ((Ze !== e || ze !== t) && ((_o = null), _i(e, t)), (t = !1));
    var f = it;
    e: do
      try {
        if (qe !== 0 && je !== null) {
          var g = je,
            x = na;
          switch (qe) {
            case 8:
              (sf(), (f = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              jt.current === null && (t = !0);
              var z = qe;
              if (((qe = 0), (na = null), Ai(e, g, x, z), a && Ei)) {
                f = 0;
                break e;
              }
              break;
            default:
              ((z = qe), (qe = 0), (na = null), Ai(e, g, x, z));
          }
        }
        (Fb(), (f = it));
        break;
      } catch (A) {
        qg(e, A);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (un = wl = null),
      (ke = n),
      (ae.H = i),
      (ae.A = r),
      je === null && ((Ze = null), (ze = 0), Br()),
      f
    );
  }
  function Fb() {
    for (; je !== null;) Qg(je);
  }
  function $b(e, t) {
    var a = ke;
    ke |= 2;
    var n = Gg(),
      i = Vg();
    Ze !== e || ze !== t
      ? ((_o = null), (Ro = Ut() + 500), _i(e, t))
      : (Ei = fs(e, t));
    e: do
      try {
        if (qe !== 0 && je !== null) {
          t = je;
          var r = na;
          t: switch (qe) {
            case 1:
              ((qe = 0), (na = null), Ai(e, t, r, 1));
              break;
            case 2:
            case 9:
              if (Xm(r)) {
                ((qe = 0), (na = null), Xg(t));
                break;
              }
              ((t = function () {
                ((qe !== 2 && qe !== 9) || Ze !== e || (qe = 7), Za(e));
              }),
                r.then(t, t));
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              Xm(r)
                ? ((qe = 0), (na = null), Xg(t))
                : ((qe = 0), (na = null), Ai(e, t, r, 7));
              break;
            case 5:
              var f = null;
              switch (je.tag) {
                case 26:
                  f = je.memoizedState;
                case 5:
                case 27:
                  var g = je;
                  if (f ? U0(f) : g.stateNode.complete) {
                    ((qe = 0), (na = null));
                    var x = g.sibling;
                    if (x !== null) je = x;
                    else {
                      var z = g.return;
                      z !== null ? ((je = z), Do(z)) : (je = null);
                    }
                    break t;
                  }
              }
              ((qe = 0), (na = null), Ai(e, t, r, 5));
              break;
            case 6:
              ((qe = 0), (na = null), Ai(e, t, r, 6));
              break;
            case 8:
              (sf(), (it = 6));
              break e;
            default:
              throw Error(u(462));
          }
        }
        Ib();
        break;
      } catch (A) {
        qg(e, A);
      }
    while (!0);
    return (
      (un = wl = null),
      (ae.H = n),
      (ae.A = i),
      (ke = a),
      je !== null ? 0 : ((Ze = null), (ze = 0), Br(), it)
    );
  }
  function Ib() {
    for (; je !== null && !Nr();) Qg(je);
  }
  function Qg(e) {
    var t = sg(e.alternate, e, gn);
    ((e.memoizedProps = e.pendingProps), t === null ? Do(e) : (je = t));
  }
  function Xg(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ph(a, t, t.pendingProps, t.type, void 0, ze);
        break;
      case 11:
        t = Ph(a, t, t.pendingProps, t.type.render, t.ref, ze);
        break;
      case 5:
        mc(t);
        var n = t;
        n === xt &&
          (Ee
            ? (Xr(n), n.tag === 5 && n.stateNode != null && (Ke = n.stateNode))
            : (Xr(n), (Ee = !0)));
      default:
        (og(a, t), (t = je = Dm(t, gn)), (t = sg(a, t, gn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Do(e) : (je = t));
  }
  function Ai(e, t, a, n) {
    ((un = wl = null), mc(t), (pi = null), (Rs = 0));
    var i = t.return;
    try {
      if (Lb(e, i, t, a, ze)) {
        ((it = 1), fo(e, ma(a, e.current)), (je = null));
        return;
      }
    } catch (r) {
      if (i !== null) throw ((je = i), r);
      ((it = 1), fo(e, ma(a, e.current)), (je = null));
      return;
    }
    t.flags & 32768
      ? (Ee || n === 1
          ? (e = !0)
          : Ei || (ze & 536870912) !== 0
            ? (e = !1)
            : ((qn = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = jt.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        Zg(t, e))
      : Do(t);
  }
  function Do(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Zg(t, qn);
        return;
      }
      e = t.return;
      var a = Gb(t.alternate, t, gn);
      if (a !== null) {
        je = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        je = t;
        return;
      }
      je = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
  }
  function Zg(e, t) {
    do {
      var a = Vb(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (je = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        je = e;
        return;
      }
      je = e = a;
    } while (e !== null);
    ((it = 6), (je = null));
  }
  function Kg(e, t, a, n, i, r, f, g, x, z, A, q) {
    e.cancelPendingCommit = null;
    do ko();
    while (et !== 0);
    if ((ke & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      (e === Ze && ((je = Ze = null), (ze = 0)),
        (kl = t),
        (za = e),
        (Xa = a),
        (lf = i),
        (Ug = n),
        Wb(e, t, a, f, g, x, q));
    }
  }
  function Wb(e, t, a, n, i, r, f) {
    var g = t.lanes | t.childLanes;
    if (
      ((nf = g),
      (g |= Yu),
      Ev(e, a, g, n, i, r),
      (Ci = null),
      (a & 335544064) === a
        ? ((zi = jb(e)), (n = 10262))
        : ((zi = null), (n = 10256)),
      (t.subtreeFlags & n) !== 0 || (t.flags & n) !== 0
        ? ((e.callbackNode = null),
          (e.callbackPriority = 0),
          lx(Il, function () {
            return (ff(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
      (xo = !1),
      (n = (t.flags & 13878) !== 0),
      (t.subtreeFlags & 13878) !== 0 || n)
    ) {
      ((n = ae.T), (ae.T = null), (i = ue.p), (ue.p = 2), (r = ke), (ke |= 4));
      try {
        Qb(e, t, a);
      } finally {
        ((ke = r), (ue.p = i), (ae.T = n));
      }
    }
    ((et = 1),
      xo
        ? (ji = Ex(f, e.containerInfo, zi, of, uf, ex, cf, ff, Pb))
        : (of(), uf(), cf()));
  }
  function Pb(e) {
    if (et !== 0) {
      var t = za.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function ex() {
    et === 3 && ((et = 0), Rg(kl, za), (et = 4));
  }
  function of() {
    if (et === 1) {
      et = 0;
      var e = za,
        t = kl,
        a = Xa,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = ae.T), (ae.T = null));
        var i = ue.p;
        ue.p = 2;
        var r = ke;
        ke |= 4;
        try {
          ((Ys = No = !1), Cg(t, e, a), (a = Nf));
          var f = Em(e.containerInfo),
            g = a.focusedElem,
            x = a.selectionRange;
          if (
            f !== g &&
            g &&
            g.ownerDocument &&
            Nm(g.ownerDocument.documentElement, g)
          ) {
            if (x !== null && Uu(g)) {
              var z = x.start,
                A = x.end;
              if ((A === void 0 && (A = z), "selectionStart" in g))
                ((g.selectionStart = z),
                  (g.selectionEnd = Math.min(A, g.value.length)));
              else {
                var q = g.ownerDocument || document,
                  j = (q && q.defaultView) || window;
                if (j.getSelection) {
                  var _ = j.getSelection(),
                    I = g.textContent.length,
                    oe = Math.min(x.start, I),
                    Se = x.end === void 0 ? oe : Math.min(x.end, I);
                  !_.extend && oe > Se && ((f = Se), (Se = oe), (oe = f));
                  var C = wm(g, oe),
                    E = wm(g, Se);
                  if (
                    C &&
                    E &&
                    (_.rangeCount !== 1 ||
                      _.anchorNode !== C.node ||
                      _.anchorOffset !== C.offset ||
                      _.focusNode !== E.node ||
                      _.focusOffset !== E.offset)
                  ) {
                    var R = q.createRange();
                    (R.setStart(C.node, C.offset),
                      _.removeAllRanges(),
                      oe > Se
                        ? (_.addRange(R), _.extend(E.node, E.offset))
                        : (R.setEnd(E.node, E.offset), _.addRange(R)));
                  }
                }
              }
            }
            for (q = [], _ = g; (_ = _.parentNode);)
              _.nodeType === 1 &&
                q.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < q.length;
              g++
            ) {
              var B = q[g];
              ((B.element.scrollLeft = B.left), (B.element.scrollTop = B.top));
            }
          }
          ((Bi = !!wf), (Nf = wf = null));
        } finally {
          ((ke = r), (ue.p = i), (ae.T = n));
        }
      }
      ((e.current = t), (et = 2));
    }
  }
  function uf() {
    if (et === 2) {
      et = 0;
      var e = za,
        t = kl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = ae.T), (ae.T = null));
        var n = ue.p;
        ue.p = 2;
        var i = ke;
        ke |= 4;
        try {
          Sg(e, t.alternate, t);
        } finally {
          ((ke = i), (ue.p = n), (ae.T = a));
        }
      }
      et = 3;
    }
  }
  function cf() {
    if (et === 4 || et === 3) {
      et = 0;
      var e = ji;
      ((ji = null), ua());
      var t = za,
        a = kl,
        n = Xa,
        i = Ug,
        r = (n & 335544064) === n ? 10262 : 10256;
      if (
        ((a.subtreeFlags & r) !== 0 || (a.flags & r) !== 0
          ? (et = 5)
          : ((et = 0), (kl = za = null), Jg(t, t.pendingLanes)),
        (r = t.pendingLanes),
        r === 0 && (Gn = null),
        vu(n),
        (a = a.stateNode),
        Ve && typeof Ve.onCommitFiberRoot == "function")
      )
        try {
          Ve.onCommitFiberRoot(nt, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((a = ae.T), (r = ue.p), (ue.p = 2), (ae.T = null));
        try {
          for (var f = t.onRecoverableError, g = 0; g < i.length; g++) {
            var x = i[g];
            f(x.value, { componentStack: x.stack });
          }
        } finally {
          ((ae.T = a), (ue.p = r));
        }
      }
      if (
        ((i = Ci),
        (f = zi),
        (zi = null),
        i !== null && ((Ci = null), f === null && (f = []), e !== null))
      )
        for (x = 0; x < i.length; x++)
          ((a = (0, i[x])(f)), a !== void 0 && e.finished.finally(a));
      ((Xa & 3) !== 0 && ko(),
        Za(t),
        (r = t.pendingLanes),
        (n & 261930) !== 0 && (r & 42) !== 0
          ? t === Ao
            ? Xs++
            : ((Xs = 0), (Ao = t))
          : ((Xs = 0), (Ao = null)),
        Zs(0));
    }
  }
  function Jg(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), js(t)));
  }
  function ko() {
    return (
      ji !== null && (ji.skipTransition(), (ji = null)),
      of(),
      uf(),
      cf(),
      ff()
    );
  }
  function ff() {
    if (et !== 5) return !1;
    var e = za,
      t = nf;
    nf = 0;
    var a = vu(Xa),
      n = ae.T,
      i = ue.p;
    try {
      ((ue.p = 32 > a ? 32 : a), (ae.T = null), (a = lf), (lf = null));
      var r = za,
        f = Xa;
      if (((et = 0), (kl = za = null), (Xa = 0), (ke & 6) !== 0))
        throw Error(u(331));
      var g = ke;
      if (
        ((ke |= 4),
        Og(r.current),
        _g(r, r.current, f, a),
        (ke = g),
        Zs(0, !1),
        Ve && typeof Ve.onPostCommitFiberRoot == "function")
      )
        try {
          Ve.onPostCommitFiberRoot(nt, r);
        } catch {}
      return !0;
    } finally {
      ((ue.p = i), (ae.T = n), Jg(e, t));
    }
  }
  function Fg(e, t, a) {
    ((t = ma(a, t)),
      (t = Cc(e.stateNode, t, 2)),
      (e = Dn(e, t, 2)),
      e !== null && (ds(e, 2), Za(e)));
  }
  function Ye(e, t, a) {
    if (e.tag === 3) Fg(e, e, a);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Fg(t, e, a);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Gn === null || !Gn.has(n)))
          ) {
            ((e = ma(a, e)),
              (a = Xh(2)),
              (n = Dn(t, a, 2)),
              n !== null && (Zh(a, n, t, e), ds(n, 2), Za(n)));
            break;
          }
        }
        t = t.return;
      }
  }
  function df(e, t, a) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Kb();
      var i = new Set();
      n.set(t, i);
    } else ((i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i)));
    i.has(a) ||
      ((tf = !0), i.add(a), (e = tx.bind(null, e, t, a)), t.then(e, e));
  }
  function tx(e, t, a) {
    var n = e.pingCache;
    (n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Ze === e &&
        (ze & a) === a &&
        ((it === 4 ||
          (it === 3 && (ze & 62914560) === ze && 300 > Ut() - zo)) &&
        (ke & 2) === 0
          ? _i(e, 0)
          : (Co |= a),
        Ti === ze && (Ti = 0)),
      Za(e));
  }
  function $g(e, t) {
    (t === 0 && (t = kd()), (e = bl(e, t)), e !== null && (ds(e, t), Za(e)));
  }
  function ax(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), $g(e, a));
  }
  function nx(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          i = e.memoizedState;
        i !== null && (a = i.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (n !== null && n.delete(t), $g(e, a));
  }
  function lx(e, t) {
    return ss(e, t);
  }
  var Mi = null,
    Oi = null,
    mf = !1,
    Uo = !1,
    hf = !1,
    Qn = 0;
  function Za(e) {
    (e !== Oi &&
      e.next === null &&
      (Oi === null ? (Mi = Oi = e) : (Oi = Oi.next = e)),
      (Uo = !0),
      mf || ((mf = !0), sx()));
  }
  function Zs(e, t) {
    if (!hf && Uo) {
      hf = !0;
      do
        for (var a = !1, n = Mi; n !== null;) {
          if (e !== 0) {
            var i = n.pendingLanes;
            if (i === 0) var r = 0;
            else {
              var f = n.suspendedLanes,
                g = n.pingedLanes;
              ((r = (1 << (31 - De(42 | e) + 1)) - 1),
                (r &= i & ~(f & ~g)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((a = !0), e0(n, r));
          } else
            ((r = ze),
              (r = jr(
                n,
                n === Ze ? r : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || fs(n, r) || ((a = !0), e0(n, r)));
          n = n.next;
        }
      while (a);
      hf = !1;
    }
  }
  function ix() {
    Ig();
  }
  function Ig() {
    Uo = mf = !1;
    var e = 0;
    Qn !== 0 && yx() && (e = Qn);
    for (var t = Ut(), a = null, n = Mi; n !== null;) {
      var i = n.next,
        r = Wg(n, t);
      (r === 0
        ? ((n.next = null),
          a === null ? (Mi = i) : (a.next = i),
          i === null && (Oi = a))
        : ((a = n), (e !== 0 || (r & 3) !== 0) && (Uo = !0)),
        (n = i));
    }
    ((et !== 0 && et !== 5) || Zs(e), Qn !== 0 && (Qn = 0));
  }
  function Wg(e, t) {
    for (
      var a = e.suspendedLanes,
        n = e.pingedLanes,
        i = e.expirationTimes,
        r = e.pendingLanes & -62914561;
      0 < r;
    ) {
      var f = 31 - De(r),
        g = 1 << f,
        x = i[f];
      (x === -1
        ? ((g & a) === 0 || (g & n) !== 0) && (i[f] = Nv(g, t))
        : x <= t && (e.expiredLanes |= g),
        (r &= ~g));
    }
    if (
      ((t = Ze),
      (a = ze),
      (a = jr(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (n = e.callbackNode),
      a === 0 ||
        (e === t && (qe === 2 || qe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && $l(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || fs(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((n !== null && $l(n), vu(a))) {
        case 2:
        case 8:
          a = os;
          break;
        case 32:
          a = Il;
          break;
        case 268435456:
          a = us;
          break;
        default:
          a = Il;
      }
      return (
        (n = Pg.bind(null, e)),
        (a = ss(a, n)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      n !== null && n !== null && $l(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Pg(e, t) {
    if (et !== 0 && et !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (ko() && e.callbackNode !== a) return null;
    var n = ze;
    return (
      (n = jr(
        e,
        e === Ze ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      n === 0
        ? null
        : (Lg(e, n, t),
          Wg(e, Ut()),
          e.callbackNode != null && e.callbackNode === a
            ? Pg.bind(null, e)
            : null)
    );
  }
  function e0(e, t) {
    if (ko()) return null;
    Lg(e, t, !0);
  }
  function sx() {
    bx(function () {
      (ke & 6) !== 0 ? ss(Na, ix) : Ig();
    });
  }
  function gf() {
    if (Qn === 0) {
      var e = Tl;
      (e === 0 && ((e = Ht), (Ht <<= 1), (Ht & 261888) === 0 && (Ht = 256)),
        (Qn = e));
    }
    return Qn;
  }
  function t0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Ar(e);
  }
  function rx(e, t, a, n, i) {
    if (t === "submit" && a && a.stateNode === i) {
      var r = t0((i[Qt] || null).action),
        f = n.submitter;
      f &&
        ((t = (t = f[Qt] || null)
          ? t0(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((r = t), (f = null)));
      var g = new kr("action", "action", null, n, i);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Qn !== 0) {
                  var x = new FormData(i, f);
                  wc(
                    a,
                    { pending: !0, data: x, method: i.method, action: r },
                    null,
                    x,
                  );
                }
              } else
                typeof r == "function" &&
                  (g.preventDefault(),
                  (x = new FormData(i, f)),
                  wc(
                    a,
                    { pending: !0, data: x, method: i.method, action: r },
                    r,
                    x,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var pf = 0; pf < qu.length; pf++) {
    var yf = qu[pf],
      ox = yf.toLowerCase(),
      ux = yf[0].toUpperCase() + yf.slice(1);
    Ea(ox, "on" + ux);
  }
  (Ea(Cm, "onAnimationEnd"),
    Ea(zm, "onAnimationIteration"),
    Ea(Rm, "onAnimationStart"),
    Ea("dblclick", "onDoubleClick"),
    Ea("focusin", "onFocus"),
    Ea("focusout", "onBlur"),
    Ea(vb, "onTransitionRun"),
    Ea(bb, "onTransitionStart"),
    Ea(xb, "onTransitionCancel"),
    Ea(_m, "onTransitionEnd"),
    ti("onMouseEnter", ["mouseout", "mouseover"]),
    ti("onMouseLeave", ["mouseout", "mouseover"]),
    ti("onPointerEnter", ["pointerout", "pointerover"]),
    ti("onPointerLeave", ["pointerout", "pointerover"]),
    pl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    pl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    pl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    pl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    pl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    pl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ks =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    cx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ks),
    );
  function a0(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var n = e[a],
        i = n.event;
      n = n.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var g = n[f],
              x = g.instance,
              z = g.currentTarget;
            if (((g = g.listener), x !== r && i.isPropagationStopped()))
              break e;
            ((r = g), (i.currentTarget = z));
            try {
              r(i);
            } catch (A) {
              Lr(A);
            }
            ((i.currentTarget = null), (r = x));
          }
        else
          for (f = 0; f < n.length; f++) {
            if (
              ((g = n[f]),
              (x = g.instance),
              (z = g.currentTarget),
              (g = g.listener),
              x !== r && i.isPropagationStopped())
            )
              break e;
            ((r = g), (i.currentTarget = z));
            try {
              r(i);
            } catch (A) {
              Lr(A);
            }
            ((i.currentTarget = null), (r = x));
          }
      }
    }
  }
  function Ce(e, t) {
    var a = t[Yd];
    a === void 0 && (a = t[Yd] = new Set());
    var n = e + "__bubble";
    a.has(n) || (n0(t, e, 2, !1), a.add(n));
  }
  function vf(e, t, a) {
    var n = 0;
    (t && (n |= 4), n0(a, e, n, t));
  }
  var Ho = "_reactListening" + Math.random().toString(36).slice(2);
  function bf(e) {
    if (!e[Ho]) {
      ((e[Ho] = !0),
        Qd.forEach(function (a) {
          a !== "selectionchange" && (cx.has(a) || vf(a, !1, e), vf(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ho] || ((t[Ho] = !0), vf("selectionchange", !1, t));
    }
  }
  function n0(e, t, a, n) {
    switch (Z0(t)) {
      case 2:
        var i = a1;
        break;
      case 8:
        i = n1;
        break;
      default:
        i = Bf;
    }
    ((a = i.bind(null, t, a, e)),
      (i = void 0),
      !ju ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      n
        ? i !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: i })
          : e.addEventListener(t, a, !0)
        : i !== void 0
          ? e.addEventListener(t, a, { passive: i })
          : e.addEventListener(t, a, !1));
  }
  function xf(e, t, a, n, i) {
    var r = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var g = n.stateNode.containerInfo;
          if (g === i) break;
          if (f === 4)
            for (f = n.return; f !== null;) {
              var x = f.tag;
              if ((x === 3 || x === 4) && f.stateNode.containerInfo === i)
                return;
              f = f.return;
            }
          for (; g !== null;) {
            if (((f = gl(g)), f === null)) return;
            if (((x = f.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              n = r = f;
              continue e;
            }
            g = g.parentNode;
          }
        }
        n = n.return;
      }
    nm(function () {
      var z = r,
        A = Eu(a),
        q = [];
      e: {
        var j = Am.get(e);
        if (j !== void 0) {
          var _ = kr,
            I = e;
          switch (e) {
            case "keypress":
              if (Or(a) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Jv;
              break;
            case "focusin":
              ((I = "focus"), (_ = _u));
              break;
            case "focusout":
              ((I = "blur"), (_ = _u));
              break;
            case "beforeblur":
            case "afterblur":
              _ = _u;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = sm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = Uv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Pv;
              break;
            case Cm:
            case zm:
            case Rm:
              _ = Bv;
              break;
            case _m:
              _ = tb;
              break;
            case "scroll":
            case "scrollend":
              _ = Dv;
              break;
            case "wheel":
              _ = nb;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = Yv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = om;
              break;
            case "submit":
              _ = Iv;
              break;
            case "toggle":
            case "beforetoggle":
              _ = ib;
          }
          var oe = (t & 4) !== 0,
            Se = !oe && (e === "scroll" || e === "scrollend"),
            C = oe ? (j !== null ? j + "Capture" : null) : j;
          oe = [];
          for (var E = z, R; E !== null;) {
            var B = E;
            if (
              ((R = B.stateNode),
              (B = B.tag),
              (B !== 5 && B !== 26 && B !== 27) ||
                R === null ||
                C === null ||
                ((B = gs(E, C)), B != null && oe.push(Js(E, B, R))),
              Se)
            )
              break;
            E = E.return;
          }
          0 < oe.length &&
            ((j = new _(j, I, null, a, A)),
            q.push({ event: j, listeners: oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_ = e === "mouseover" || e === "pointerover"),
            (j = e === "mouseout" || e === "pointerout"),
            _ &&
              a !== Nu &&
              (I = a.relatedTarget || a.fromElement) &&
              (gl(I) || I[Wl]))
          )
            break e;
          (j || _) &&
            ((I =
              A.window === A
                ? A
                : (_ = A.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            j
              ? ((_ = a.relatedTarget || a.toElement),
                (j = z),
                (_ = _ ? gl(_) : null),
                _ !== null &&
                  ((Se = h(_)),
                  (oe = _.tag),
                  _ !== Se || (oe !== 5 && oe !== 27 && oe !== 6)) &&
                  (_ = null))
              : ((j = null), (_ = z)),
            j !== _ &&
              ((oe = sm),
              (B = "onMouseLeave"),
              (C = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((oe = om),
                (B = "onPointerLeave"),
                (C = "onPointerEnter"),
                (E = "pointer")),
              (Se = j == null ? I : hs(j)),
              (R = _ == null ? I : hs(_)),
              (I = new oe(B, E + "leave", j, a, A)),
              (I.target = Se),
              (I.relatedTarget = R),
              (B = null),
              gl(A) === z &&
                ((oe = new oe(C, E + "enter", _, a, A)),
                (oe.target = R),
                (oe.relatedTarget = Se),
                (B = oe)),
              (Se = B),
              (oe = j && _ ? ee(j, _, fx) : null),
              j !== null && l0(q, I, j, oe, !1),
              _ !== null && Se !== null && l0(q, Se, _, oe, !0)));
        }
        e: {
          if (
            ((j = z ? hs(z) : window),
            (_ = j.nodeName && j.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && j.type === "file"))
          )
            var ne = pm;
          else if (hm(j))
            if (ym) ne = gb;
            else {
              ne = mb;
              var Re = db;
            }
          else
            ((_ = j.nodeName),
              !_ ||
              _.toLowerCase() !== "input" ||
              (j.type !== "checkbox" && j.type !== "radio")
                ? z && wu(z.elementType) && (ne = pm)
                : (ne = hb));
          if (ne && (ne = ne(e, z))) {
            gm(q, ne, a, A);
            break e;
          }
          Re && Re(e, j, z);
        }
        switch (((Re = z ? hs(z) : window), e)) {
          case "focusin":
            (hm(Re) || Re.contentEditable === "true") &&
              ((ri = Re), (Hu = z), (Ns = null));
            break;
          case "focusout":
            Ns = Hu = ri = null;
            break;
          case "mousedown":
            Lu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Lu = !1), Tm(q, a, A));
            break;
          case "selectionchange":
            if (yb) break;
          case "keydown":
          case "keyup":
            Tm(q, a, A);
        }
        var ce;
        if (Mu)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          si
            ? dm(e, a) && (de = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (de = "onCompositionStart");
        (de &&
          (um &&
            a.locale !== "ko" &&
            (si || de !== "onCompositionStart"
              ? de === "onCompositionEnd" && si && (ce = lm())
              : ((Tn = A),
                (Cu = "value" in Tn ? Tn.value : Tn.textContent),
                (si = !0))),
          (Re = Lo(z, de)),
          0 < Re.length &&
            ((de = new rm(de, e, null, a, A)),
            q.push({ event: de, listeners: Re }),
            ce
              ? (de.data = ce)
              : ((ce = mm(a)), ce !== null && (de.data = ce)))),
          (ce = rb ? ob(e, a) : ub(e, a)) &&
            ((de = Lo(z, "onBeforeInput")),
            0 < de.length &&
              ((Re = new rm("onBeforeInput", "beforeinput", null, a, A)),
              q.push({ event: Re, listeners: de }),
              (Re.data = ce))),
          rx(q, e, z, a, A));
      }
      a0(q, t);
    });
  }
  function Js(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Lo(e, t) {
    for (var a = t + "Capture", n = []; e !== null;) {
      var i = e,
        r = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          r === null ||
          ((i = gs(e, a)),
          i != null && n.unshift(Js(e, i, r)),
          (i = gs(e, t)),
          i != null && n.push(Js(e, i, r))),
        e.tag === 3)
      )
        return n;
      e = e.return;
    }
    return [];
  }
  function fx(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function l0(e, t, a, n, i) {
    for (var r = t._reactName, f = []; a !== null && a !== n;) {
      var g = a,
        x = g.alternate,
        z = g.stateNode;
      if (((g = g.tag), x !== null && x === n)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        z === null ||
        ((x = z),
        i
          ? ((z = gs(a, r)), z != null && f.unshift(Js(a, z, x)))
          : i || ((z = gs(a, r)), z != null && f.push(Js(a, z, x)))),
        (a = a.return));
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var dx = /\r\n?/g,
    mx = /\u0000|\uFFFD/g;
  function i0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        dx,
        `
`,
      )
      .replace(mx, "");
  }
  function s0(e, t) {
    return ((t = i0(t)), i0(e) === t);
  }
  function Ge(e, t, a, n, i, r) {
    switch (a) {
      case "children":
        if (typeof n == "string")
          t === "body" || (t === "textarea" && n === "") || ni(e, n);
        else if (typeof n == "number" || typeof n == "bigint")
          t !== "body" && ni(e, "" + n);
        else return;
        break;
      case "className":
        _r(e, "class", n);
        break;
      case "tabIndex":
        _r(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _r(e, a, n);
        break;
      case "style":
        tm(e, n, r);
        return;
      case "data":
        if (t !== "object") {
          _r(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((n = Ar(n)), e.setAttribute(a, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (a === "formAction"
              ? (t !== "input" && Ge(e, t, "name", i.name, i, null),
                Ge(e, t, "formEncType", i.formEncType, i, null),
                Ge(e, t, "formMethod", i.formMethod, i, null),
                Ge(e, t, "formTarget", i.formTarget, i, null))
              : (Ge(e, t, "encType", i.encType, i, null),
                Ge(e, t, "method", i.method, i, null),
                Ge(e, t, "target", i.target, i, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((n = Ar(n)), e.setAttribute(a, n));
        break;
      case "onClick":
        n != null && (e.onclick = Ua);
        return;
      case "onScroll":
        n != null && Ce("scroll", e);
        return;
      case "onScrollEnd":
        n != null && Ce("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(u(61));
          if (((a = n.__html), a != null)) {
            if (i.children != null) throw Error(u(60));
            (r != null ? r.__html : void 0) !== a && (e.innerHTML = a);
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = Ar(n)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, n)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        n === !0
          ? e.setAttribute(a, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? e.setAttribute(a, n)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(a, n)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? e.removeAttribute(a)
          : e.setAttribute(a, n);
        break;
      case "popover":
        (Ce("beforetoggle", e), Ce("toggle", e), Rr(e, "popover", n));
        break;
      case "xlinkActuate":
        an(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        an(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        an(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        an(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        an(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        an(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        an(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        an(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        an(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        Rr(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")
        )
          ((a = Mv.get(a) || a), Rr(e, a, n));
        else return;
    }
    Oe = !0;
  }
  function Sf(e, t, a, n, i, r) {
    switch (a) {
      case "style":
        tm(e, n, r);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(u(61));
          if (((a = n.__html), a != null)) {
            if (i.children != null) throw Error(u(60));
            (r != null ? r.__html : void 0) !== a && (e.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof n == "string") ni(e, n);
        else if (typeof n == "number" || typeof n == "bigint") ni(e, "" + n);
        else return;
        break;
      case "onScroll":
        n != null && Ce("scroll", e);
        return;
      case "onScrollEnd":
        n != null && Ce("scrollend", e);
        return;
      case "onClick":
        n != null && (e.onclick = Ua);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Xd.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((i = a.endsWith("Capture")),
              (r = a.slice(2, i ? a.length - 7 : void 0)),
              (t = e[Qt] || null),
              (t = t != null ? t[a] : null),
              typeof t == "function" && e.removeEventListener(r, t, i),
              typeof n == "function")
            ) {
              (typeof t != "function" &&
                t !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(r, n, i));
              break e;
            }
            ((Oe = !0),
              a in e
                ? (e[a] = n)
                : n === !0
                  ? e.setAttribute(a, "")
                  : Rr(e, a, n));
          }
        return;
    }
    Oe = !0;
  }
  function Rt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ce("error", e), Ce("load", e));
        var n = !1,
          i = !1,
          r;
        for (r in a)
          if (a.hasOwnProperty(r)) {
            var f = a[r];
            if (f != null)
              switch (r) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Ge(e, t, r, f, a, null);
              }
          }
        (i && Ge(e, t, "srcSet", a.srcSet, a, null),
          n && Ge(e, t, "src", a.src, a, null));
        return;
      case "input":
        Ce("invalid", e);
        var g = (r = f = i = null),
          x = null,
          z = null;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var A = a[n];
            if (A != null)
              switch (n) {
                case "name":
                  i = A;
                  break;
                case "type":
                  f = A;
                  break;
                case "checked":
                  x = A;
                  break;
                case "defaultChecked":
                  z = A;
                  break;
                case "value":
                  r = A;
                  break;
                case "defaultValue":
                  g = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null) throw Error(u(137, t));
                  break;
                default:
                  Ge(e, t, n, A, a, null);
              }
          }
        Id(e, r, g, x, z, f, i, !1);
        return;
      case "select":
        (Ce("invalid", e), (n = f = r = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((g = a[i]), g != null))
            switch (i) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "multiple":
                n = g;
              default:
                Ge(e, t, i, g, a, null);
            }
        ((t = r),
          (a = f),
          (e.multiple = !!n),
          t != null ? ai(e, !!n, t, !1) : a != null && ai(e, !!n, a, !0));
        return;
      case "textarea":
        (Ce("invalid", e), (r = i = n = null));
        for (f in a)
          if (a.hasOwnProperty(f) && ((g = a[f]), g != null))
            switch (f) {
              case "value":
                n = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(u(91));
                break;
              default:
                Ge(e, t, f, g, a, null);
            }
        Pd(e, n, i, r);
        return;
      case "option":
        for (x in a)
          if (a.hasOwnProperty(x) && ((n = a[x]), n != null))
            switch (x) {
              case "selected":
                e.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                Ge(e, t, x, n, a, null);
            }
        return;
      case "dialog":
        (Ce("beforetoggle", e),
          Ce("toggle", e),
          Ce("cancel", e),
          Ce("close", e));
        break;
      case "iframe":
      case "object":
        Ce("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ks.length; n++) Ce(Ks[n], e);
        break;
      case "image":
        (Ce("error", e), Ce("load", e));
        break;
      case "details":
        Ce("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ce("error", e), Ce("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (z in a)
          if (a.hasOwnProperty(z) && ((n = a[z]), n != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Ge(e, t, z, n, a, null);
            }
        return;
      default:
        if (wu(t)) {
          for (A in a)
            a.hasOwnProperty(A) &&
              ((n = a[A]), n !== void 0 && Sf(e, t, A, n, a, void 0));
          return;
        }
    }
    for (g in a)
      a.hasOwnProperty(g) && ((n = a[g]), n != null && Ge(e, t, g, n, a, null));
  }
  var hx = {};
  function gx(e, t, a, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          r = null,
          f = null,
          g = null,
          x = null,
          z = null,
          A = null;
        for (_ in a) {
          var q = a[_];
          if (a.hasOwnProperty(_) && q != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = q;
              default:
                n.hasOwnProperty(_) || Ge(e, t, _, null, n, q);
            }
        }
        for (var j in n) {
          var _ = n[j];
          if (((q = a[j]), n.hasOwnProperty(j) && (_ != null || q != null)))
            switch (j) {
              case "type":
                (_ !== q && (Oe = !0), (r = _));
                break;
              case "name":
                (_ !== q && (Oe = !0), (i = _));
                break;
              case "checked":
                (_ !== q && (Oe = !0), (z = _));
                break;
              case "defaultChecked":
                (_ !== q && (Oe = !0), (A = _));
                break;
              case "value":
                (_ !== q && (Oe = !0), (f = _));
                break;
              case "defaultValue":
                (_ !== q && (Oe = !0), (g = _));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(u(137, t));
                break;
              default:
                _ !== q && Ge(e, t, j, _, n, q);
            }
        }
        xu(e, f, g, x, z, A, r, i);
        return;
      case "select":
        _ = f = g = j = null;
        for (r in a)
          if (((x = a[r]), a.hasOwnProperty(r) && x != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                _ = x;
              default:
                n.hasOwnProperty(r) || Ge(e, t, r, null, n, x);
            }
        for (i in n)
          if (
            ((r = n[i]),
            (x = a[i]),
            n.hasOwnProperty(i) && (r != null || x != null))
          )
            switch (i) {
              case "value":
                (r !== x && (Oe = !0), (j = r));
                break;
              case "defaultValue":
                (r !== x && (Oe = !0), (g = r));
                break;
              case "multiple":
                (r !== x && (Oe = !0), (f = r));
              default:
                r !== x && Ge(e, t, i, r, n, x);
            }
        ((t = g),
          (a = f),
          (n = _),
          j != null
            ? ai(e, !!a, j, !1)
            : !!n != !!a &&
              (t != null ? ai(e, !!a, t, !0) : ai(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        _ = j = null;
        for (g in a)
          if (
            ((i = a[g]),
            a.hasOwnProperty(g) && i != null && !n.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ge(e, t, g, null, n, i);
            }
        for (f in n)
          if (
            ((i = n[f]),
            (r = a[f]),
            n.hasOwnProperty(f) && (i != null || r != null))
          )
            switch (f) {
              case "value":
                (i !== r && (Oe = !0), (j = i));
                break;
              case "defaultValue":
                (i !== r && (Oe = !0), (_ = i));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(u(91));
                break;
              default:
                i !== r && Ge(e, t, f, i, n, r);
            }
        Wd(e, j, _);
        return;
      case "option":
        for (var I in a)
          if (
            ((j = a[I]),
            a.hasOwnProperty(I) && j != null && !n.hasOwnProperty(I))
          )
            switch (I) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ge(e, t, I, null, n, j);
            }
        for (x in n)
          if (
            ((j = n[x]),
            (_ = a[x]),
            n.hasOwnProperty(x) && j !== _ && (j != null || _ != null))
          )
            switch (x) {
              case "selected":
                (j !== _ && (Oe = !0),
                  (e.selected =
                    j && typeof j != "function" && typeof j != "symbol"));
                break;
              default:
                Ge(e, t, x, j, n, _);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var oe in a)
          ((j = a[oe]),
            a.hasOwnProperty(oe) &&
              j != null &&
              !n.hasOwnProperty(oe) &&
              Ge(e, t, oe, null, n, j));
        for (z in n)
          if (
            ((j = n[z]),
            (_ = a[z]),
            n.hasOwnProperty(z) && j !== _ && (j != null || _ != null))
          )
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(u(137, t));
                break;
              default:
                Ge(e, t, z, j, n, _);
            }
        return;
      default:
        if (wu(t)) {
          for (var Se in a)
            ((j = a[Se]),
              a.hasOwnProperty(Se) &&
                j !== void 0 &&
                !n.hasOwnProperty(Se) &&
                Sf(e, t, Se, void 0, n, j));
          for (A in n)
            ((j = n[A]),
              (_ = a[A]),
              !n.hasOwnProperty(A) ||
                j === _ ||
                (j === void 0 && _ === void 0) ||
                Sf(e, t, A, j, n, _));
          return;
        }
    }
    for (var C in a)
      ((j = a[C]),
        a.hasOwnProperty(C) &&
          j != null &&
          !n.hasOwnProperty(C) &&
          Ge(e, t, C, null, n, j));
    for (q in n)
      ((j = n[q]),
        (_ = a[q]),
        !n.hasOwnProperty(q) ||
          j === _ ||
          (j == null && _ == null) ||
          Ge(e, t, q, j, n, _));
  }
  function r0(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function px() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), n = 0;
        n < a.length;
        n++
      ) {
        var i = a[n],
          r = i.transferSize,
          f = i.initiatorType,
          g = i.duration;
        if (r && g && r0(f)) {
          for (f = 0, g = i.responseEnd, n += 1; n < a.length; n++) {
            var x = a[n],
              z = x.startTime;
            if (z > g) break;
            var A = x.transferSize,
              q = x.initiatorType;
            A &&
              r0(q) &&
              ((x = x.responseEnd), (f += A * (x < g ? 1 : (g - z) / (x - z))));
          }
          if ((--n, (t += (8 * (r + f)) / (i.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var wf = null,
    Nf = null;
  function Fs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function o0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function u0(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function c0(e, t, a, n) {
    return (
      (a = Fs(a).createElement(e)),
      (a[Et] = n),
      (a[Qt] = t),
      Rt(a, e, t),
      bt(a),
      a
    );
  }
  function Ef(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Tf = null;
  function yx() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Tf
        ? !1
        : ((Tf = e), !0)
      : ((Tf = null), !1);
  }
  var jf = typeof setTimeout == "function" ? setTimeout : void 0,
    vx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    f0 = typeof Promise == "function" ? Promise : void 0,
    d0 =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : jf,
    bx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof f0 < "u"
          ? function (e) {
              return f0.resolve(null).then(e).catch(xx);
            }
          : jf;
  function xx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Xn(e) {
    return e === "head";
  }
  function m0(e, t) {
    var a = t,
      n = 0;
    do {
      var i = a.nextSibling;
      if ((e.removeChild(a), i && i.nodeType === 8))
        if (((a = i.data), a === "/$" || a === "/&")) {
          if (n === 0) {
            (e.removeChild(i), qi(t));
            return;
          }
          n--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          n++;
        else if (a === "html") Df(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), Df(a));
          for (var r = a.firstChild; r;) {
            var f = r.nextSibling,
              g = r.nodeName;
            (r[ms] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(r),
              (r = f));
          }
        } else a === "body" && Df(e.ownerDocument.body);
      a = i;
    } while (a);
    qi(t);
  }
  function h0(e, t) {
    var a = e;
    e = 0;
    do {
      var n = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        n && n.nodeType === 8)
      )
        if (((a = n.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = n;
    } while (a);
  }
  function g0(e, t, a) {
    if (
      ((t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t),
      (e.style.viewTransitionName = t),
      a != null && (e.style.viewTransitionClass = a),
      (a = getComputedStyle(e)),
      a.display === "inline")
    ) {
      if (((t = e.getClientRects()), t.length === 1)) var n = 1;
      else
        for (var i = (n = 0); i < t.length; i++) {
          var r = t[i];
          0 < r.width && 0 < r.height && n++;
        }
      n === 1 &&
        ((e = e.style),
        (e.display = t.length === 1 ? "inline-block" : "block"),
        (e.marginTop = "-" + a.paddingTop),
        (e.marginBottom = "-" + a.paddingBottom));
    }
  }
  function p0(e, t) {
    ((e = e.style), (t = t.style));
    var a =
      t != null
        ? t.hasOwnProperty("viewTransitionName")
          ? t.viewTransitionName
          : t.hasOwnProperty("view-transition-name")
            ? t["view-transition-name"]
            : null
        : null;
    ((e.viewTransitionName =
      a == null || typeof a == "boolean" ? "" : ("" + a).trim()),
      (a =
        t != null
          ? t.hasOwnProperty("viewTransitionClass")
            ? t.viewTransitionClass
            : t.hasOwnProperty("view-transition-class")
              ? t["view-transition-class"]
              : null
          : null),
      (e.viewTransitionClass =
        a == null || typeof a == "boolean" ? "" : ("" + a).trim()),
      e.display === "inline-block" &&
        (t == null
          ? (e.display = e.margin = "")
          : ((a = t.display),
            (e.display = a == null || typeof a == "boolean" ? "" : a),
            (a = t.margin),
            a != null
              ? (e.margin = a)
              : ((a = t.hasOwnProperty("marginTop")
                  ? t.marginTop
                  : t["margin-top"]),
                (e.marginTop = a == null || typeof a == "boolean" ? "" : a),
                (t = t.hasOwnProperty("marginBottom")
                  ? t.marginBottom
                  : t["margin-bottom"]),
                (e.marginBottom =
                  t == null || typeof t == "boolean" ? "" : t)))));
  }
  function Sx(e, t, a) {
    return (
      (a = a.ownerDocument.defaultView),
      {
        rect: e,
        abs: t.position === "absolute" || t.position === "fixed",
        clip:
          t.clipPath !== "none" ||
          t.overflow !== "visible" ||
          t.filter !== "none" ||
          t.mask !== "none" ||
          t.mask !== "none" ||
          t.borderRadius !== "0px",
        view:
          0 <= e.bottom &&
          0 <= e.right &&
          e.top <= a.innerHeight &&
          e.left <= a.innerWidth,
      }
    );
  }
  function Cf(e) {
    var t = e.getBoundingClientRect(),
      a = getComputedStyle(e);
    return Sx(t, a, e);
  }
  function wx(e) {
    return e.documentElement.clientHeight;
  }
  function Nx(e) {
    (this.addEventListener("load", e), this.addEventListener("error", e));
  }
  function Ex(e, t, a, n, i, r, f, g, x) {
    var z = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var A = z.startViewTransition({
        update: function () {
          var j = z.defaultView,
            _ = j.navigation && j.navigation.transition,
            I = z.fonts.status;
          n();
          var oe = [];
          if (
            (I === "loaded" &&
              (wx(z), z.fonts.status === "loading" && oe.push(z.fonts.ready)),
            (I = oe.length),
            e !== null)
          )
            for (var Se = e.suspenseyImages, C = 0, E = 0; E < Se.length; E++) {
              var R = Se[E];
              if (!R.complete) {
                var B = R.getBoundingClientRect();
                if (
                  0 < B.bottom &&
                  0 < B.right &&
                  B.top < j.innerHeight &&
                  B.left < j.innerWidth
                ) {
                  if (((C += H0(R)), C > Yo)) {
                    oe.length = I;
                    break;
                  }
                  ((R = new Promise(Nx.bind(R))), oe.push(R));
                }
              }
            }
          if (0 < oe.length)
            return (
              (j = Promise.race([
                Promise.all(oe),
                new Promise(function (ne) {
                  return setTimeout(ne, 500);
                }),
              ]).then(i, i)),
              (_ ? Promise.allSettled([_.finished, j]) : j).then(r, r)
            );
          if ((i(), _)) return _.finished.then(r, r);
          r();
        },
        types: a,
      });
      z.__reactViewTransition = A;
      var q = [];
      return (
        A.ready.then(
          function () {
            for (
              var j = z.documentElement.getAnimations({ subtree: !0 }), _ = 0;
              _ < j.length;
              _++
            ) {
              var I = j[_],
                oe = I.effect,
                Se = oe.pseudoElement;
              if (Se != null && Se.startsWith("::view-transition")) {
                (q.push(I), (I = oe.getKeyframes()));
                for (var C = (Se = void 0), E = !0, R = 0; R < I.length; R++) {
                  var B = I[R],
                    ne = B.width;
                  if (Se === void 0) Se = ne;
                  else if (Se !== ne) {
                    E = !1;
                    break;
                  }
                  if (((ne = B.height), C === void 0)) C = ne;
                  else if (C !== ne) {
                    E = !1;
                    break;
                  }
                  (delete B.width,
                    delete B.height,
                    B.transform === "none" && delete B.transform);
                }
                E &&
                  Se !== void 0 &&
                  C !== void 0 &&
                  (oe.setKeyframes(I),
                  (E = getComputedStyle(oe.target, oe.pseudoElement)),
                  E.width !== Se || E.height !== C) &&
                  ((E = I[0]),
                  (E.width = Se),
                  (E.height = C),
                  (E = I[I.length - 1]),
                  (E.width = Se),
                  (E.height = C),
                  oe.setKeyframes(I));
              }
            }
            f();
          },
          function (j) {
            z.__reactViewTransition === A && (z.__reactViewTransition = null);
            try {
              if (typeof j == "object" && j !== null)
                switch (j.name) {
                  case "InvalidStateError":
                    (j.message ===
                      "View transition was skipped because document visibility state is hidden." ||
                      j.message ===
                        "Skipping view transition because document visibility state has become hidden." ||
                      j.message ===
                        "Skipping view transition because viewport size changed." ||
                      j.message ===
                        "Transition was aborted because of invalid state") &&
                      (j = null);
                }
              j !== null && x(j);
            } finally {
              (n(), i(), f());
            }
          },
        ),
        A.finished.finally(function () {
          for (var j = 0; j < q.length; j++) q[j].cancel();
          (z.__reactViewTransition === A && (z.__reactViewTransition = null),
            g());
        }),
        A
      );
    } catch {
      return (n(), i(), f(), null);
    }
  }
  function Ul(e, t) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + e + "(" + t + ")"));
  }
  ((Ul.prototype.animate = function (e, t) {
    return (
      (t = typeof t == "number" ? { duration: t } : $({}, t)),
      (t.pseudoElement = this._selector),
      this._scope.animate(e, t)
    );
  }),
    (Ul.prototype.getAnimations = function () {
      for (
        var e = this._scope,
          t = this._selector,
          a = e.getAnimations({ subtree: !0 }),
          n = [],
          i = 0;
        i < a.length;
        i++
      ) {
        var r = a[i].effect;
        r !== null && r.target === e && r.pseudoElement === t && n.push(a[i]);
      }
      return n;
    }),
    (Ul.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function y0(e) {
    return {
      name: e,
      group: new Ul("group", e),
      imagePair: new Ul("image-pair", e),
      old: new Ul("old", e),
      new: new Ul("new", e),
    };
  }
  function sa(e) {
    ((this._fragmentFiber = e),
      (this._observers = this._eventListeners = null));
  }
  sa.prototype.addEventListener = function (e, t, a) {
    var n = null,
      i = null;
    if (!(
      a != null &&
      typeof a != "boolean" &&
      ((n = a.signal || null), n !== null && n.aborted)
    )) {
      this._eventListeners === null && (this._eventListeners = []);
      var r = this._eventListeners;
      if (b0(r, e, t, a) === -1) {
        var f = this,
          g = t;
        (a != null &&
          typeof a != "boolean" &&
          a.once === !0 &&
          (g = function (x) {
            (f.removeEventListener(e, t, a),
              typeof t == "function" ? t.call(this, x) : t.handleEvent(x));
          }),
          n !== null &&
            ((i = f.removeEventListener.bind(f, e, t, a)),
            n.addEventListener("abort", i, { once: !0 }),
            (i = n.removeEventListener.bind(n, "abort", i))),
          (n = Di(a)),
          r.push({
            type: e,
            listener: t,
            optionsOrUseCapture: a,
            attachedListener: g,
            cleanup: i,
          }),
          m(this._fragmentFiber.child, !1, Tx, e, g, n));
      }
      this._eventListeners = r;
    }
  };
  function Tx(e, t, a, n) {
    return (H(e).addEventListener(t, a, n), !1);
  }
  sa.prototype.removeEventListener = function (e, t, a) {
    var n = this._eventListeners;
    if (n !== null && ((t = b0(n, e, t, a)), t !== -1)) {
      var i = n[t];
      a = i.attachedListener;
      var r = i.cleanup;
      ((i = Di(i.optionsOrUseCapture)),
        m(this._fragmentFiber.child, !1, jx, e, a, i),
        n.splice(t, 1),
        r !== null && r());
    }
  };
  function jx(e, t, a, n) {
    return (H(e).removeEventListener(t, a, n), !1);
  }
  function Di(e) {
    return e != null &&
      typeof e != "boolean" &&
      (e.once === !0 || e.signal instanceof AbortSignal)
      ? { capture: e.capture, passive: e.passive }
      : e;
  }
  function v0(e) {
    return e == null
      ? "c=0"
      : typeof e == "boolean"
        ? "c=" + (e ? "1" : "0")
        : "c=" + (e.capture ? "1" : "0");
  }
  function b0(e, t, a, n) {
    if (e.length === 0) return -1;
    n = v0(n);
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      if (r.type === t && r.listener === a && v0(r.optionsOrUseCapture) === n)
        return i;
    }
    return -1;
  }
  ((sa.prototype.dispatchEvent = function (e) {
    var t = N(this._fragmentFiber);
    if (t === null) return !0;
    t = H(t);
    var a = this._eventListeners;
    if ((a !== null && 0 < a.length) || !e.bubbles) {
      var n =
        t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (a)
        for (var i = 0; i < a.length; i++) {
          var r = a[i];
          n.addEventListener(
            r.type,
            r.attachedListener,
            Di(r.optionsOrUseCapture),
          );
        }
      if ((t.appendChild(n), (e = n.dispatchEvent(e)), a))
        for (i = 0; i < a.length; i++)
          ((r = a[i]),
            n.removeEventListener(
              r.type,
              r.attachedListener,
              Di(r.optionsOrUseCapture),
            ));
      return (t.removeChild(n), e);
    }
    return t.dispatchEvent(e);
  }),
    (sa.prototype.focus = function (e) {
      m(this._fragmentFiber.child, !0, x0, e, void 0, void 0);
    }));
  function x0(e, t) {
    return e.tag === 6 ? !1 : ((e = H(e)), Lx(e, t));
  }
  sa.prototype.focusLast = function (e) {
    var t = [];
    m(this._fragmentFiber.child, !0, zf, t, void 0, void 0);
    for (var a = t.length - 1; 0 <= a && !x0(t[a], e); a--);
  };
  function zf(e, t) {
    return (t.push(e), !1);
  }
  sa.prototype.blur = function () {
    var e = N(this._fragmentFiber);
    e !== null &&
      ((e = H(e)),
      (e = Fs(e).activeElement),
      e !== null && m(this._fragmentFiber.child, !1, Cx, e, void 0, void 0));
  };
  function Cx(e, t) {
    return e.tag === 6
      ? !1
      : ((e = H(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  sa.prototype.observeUsing = function (e) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(e),
      m(this._fragmentFiber.child, !1, zx, e, void 0, void 0));
  };
  function zx(e, t) {
    return (e.tag === 6 || ((e = H(e)), t.observe(e)), !1);
  }
  sa.prototype.unobserveUsing = function (e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      (t.delete(e), m(this._fragmentFiber.child, !1, Rx, e, void 0, void 0));
      for (var a = (t = 0); a < Ra.length; a++) {
        var n = Ra[a];
        n.fragmentInstance === this && n.observer === e
          ? e.unobserve(n.instance)
          : (Ra[t++] = n);
      }
      Ra.length = t;
    }
  };
  function Rx(e, t) {
    return (e.tag === 6 || ((e = H(e)), t.unobserve(e)), !1);
  }
  var Ra = [],
    Rf = !1;
  function _x(e, t, a) {
    (Ra.push({ fragmentInstance: e, observer: t, instance: a }),
      Rf ||
        ((Rf = !0),
        Bx(function () {
          Rf = !1;
          var n = Ra;
          Ra = [];
          for (var i = 0; i < n.length; i++) {
            var r = n[i];
            r.observer.unobserve(r.instance);
          }
        })));
  }
  sa.prototype.getClientRects = function () {
    var e = [];
    return (m(this._fragmentFiber.child, !1, Ax, e, void 0, void 0), e);
  };
  function Ax(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var a = e.ownerDocument.createRange();
      (a.selectNodeContents(e), t.push.apply(t, a.getClientRects()));
    } else ((e = H(e)), t.push.apply(t, e.getClientRects()));
    return !1;
  }
  ((sa.prototype.getRootNode = function (e) {
    var t = N(this._fragmentFiber);
    return t === null ? this : H(t).getRootNode(e);
  }),
    (sa.prototype.compareDocumentPosition = function (e) {
      var t = N(this._fragmentFiber);
      if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var a = [];
      m(this._fragmentFiber.child, !1, zf, a, void 0, void 0);
      var n = H(t);
      if (a.length === 0) {
        if (((a = n), D(this._fragmentFiber))) {
          e: {
            for (t = this._fragmentFiber.return; t !== null;) {
              if (t.tag === 4) {
                t = t.stateNode.containerInfo;
                break e;
              }
              if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
              t = t.return;
            }
            t = null;
          }
          t != null && (a = t);
        }
        t = this._fragmentFiber;
        var i = (n = a.compareDocumentPosition(e));
        return (
          a === e
            ? (i = Node.DOCUMENT_POSITION_CONTAINS)
            : n & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((a = k(t)[1]),
              a === null
                ? (i = Node.DOCUMENT_POSITION_PRECEDING)
                : ((e = H(a).compareDocumentPosition(e)),
                  (i =
                    e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((t = H(a[0])), (i = H(a[a.length - 1])));
      var r = D(this._fragmentFiber) ? t.parentElement : n;
      if (r == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((n = r.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (r =
          r.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var f = t.compareDocumentPosition(e),
        g = i.compareDocumentPosition(e),
        x =
          f & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          g & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (g =
          n &&
          r &&
          f & Node.DOCUMENT_POSITION_FOLLOWING &&
          g & Node.DOCUMENT_POSITION_PRECEDING),
        (t =
          (n && t === e) || (r && i === e) || x || g
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!n && t === e) || (!r && i === e)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : f),
        t & Node.DOCUMENT_POSITION_DISCONNECTED ||
        t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        Mx(t, this._fragmentFiber, a[0], a[a.length - 1], e)
          ? t
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function Mx(e, t, a, n, i) {
    var r = gl(i);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((a = !!r))
        e: {
          for (; r !== null;) {
            if (r.tag === 7 && (r === t || r.alternate === t)) {
              a = !0;
              break e;
            }
            r = r.return;
          }
          a = !1;
        }
      return a;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (r === null)
        return (
          (r = i.ownerDocument),
          i === r || i === r.documentElement || i === r.body
        );
      e: {
        for (r = t, t = N(t); r !== null;) {
          if (!(
            (r.tag !== 5 && r.tag !== 3 && r.tag !== 27) ||
            (r !== t && r.alternate !== t)
          )) {
            r = !0;
            break e;
          }
          r = r.return;
        }
        r = !1;
      }
      return r;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING
      ? ((t = !!r) &&
          !(t = r === a) &&
          ((t = ee(a, r, X)),
          t === null
            ? (t = !1)
            : (m(t, !0, K, r, a), (r = U), (U = null), (t = r !== null))),
        t)
      : e & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((t = !!r) &&
            !(t = r === n) &&
            ((t = ee(n, r, X)),
            t === null
              ? (t = !1)
              : (m(t, !0, V, r, n), (r = U), (Q = U = null), (t = r !== null))),
          t)
        : !1;
  }
  function S0(e, t) {
    var a = e.ownerDocument.createRange();
    (a.selectNodeContents(e),
      (e = a.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + e.left,
        t
          ? window.scrollY + e.top
          : window.scrollY + e.bottom - window.innerHeight,
      ));
  }
  sa.prototype.scrollIntoView = function (e) {
    if (typeof e == "object") throw Error(u(566));
    var t = [];
    m(this._fragmentFiber.child, !1, zf, t, void 0, void 0);
    var a = e !== !1;
    if (t.length === 0) {
      var n = k(this._fragmentFiber);
      if (
        ((n = a ? n[1] || n[0] || N(this._fragmentFiber) : n[0] || n[1]),
        n === null)
      )
        return;
      if (n.tag === 6) {
        ((e = H(n)), S0(e, a));
        return;
      }
      if (((n = H(n)), n.nodeType !== 9)) {
        if (n.nodeType === 11) {
          ((a = "host" in n ? n.host : null),
            a !== null && a.scrollIntoView(e));
          return;
        }
        n.scrollIntoView(e);
      }
    }
    for (n = a ? t.length - 1 : 0; n !== (a ? -1 : t.length);) {
      var i = t[n];
      (i.tag === 6 ? ((i = H(i)), S0(i, a)) : H(i).scrollIntoView(e),
        (n += a ? -1 : 1));
    }
  };
  function Ox(e, t) {
    return ((e = H(e)), w0(e, t), !1);
  }
  function w0(e, t) {
    (e.reactFragments == null && (e.reactFragments = new Set()),
      e.reactFragments.add(t));
  }
  function N0(e, t) {
    var a = t._eventListeners;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        e.addEventListener(
          i.type,
          i.attachedListener,
          Di(i.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((a = t._observers),
      a !== null &&
        a.forEach(function (r) {
          for (var f = 0, g = 0; g < Ra.length; g++) {
            var x = Ra[g];
            (x.fragmentInstance !== t ||
              x.observer !== r ||
              x.instance !== e) &&
              (Ra[f++] = x);
          }
          ((Ra.length = f), r.observe(e));
        }),
      w0(e, t));
  }
  function Dx(e, t) {
    var a = t._eventListeners;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        e.removeEventListener(
          i.type,
          i.attachedListener,
          Di(i.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((a = t._observers),
      a !== null &&
        a.forEach(function (r) {
          typeof r.rootMargin == "string" ? _x(t, r, e) : r.unobserve(e);
        }),
      e.reactFragments != null && e.reactFragments.delete(t));
  }
  function _f(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (_f(a), zr(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function kx(e, t, a, n) {
    for (; e.nodeType === 1;) {
      var i = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
        if (!e[ms])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((r = e.getAttribute("rel")),
                r === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((r = e.getAttribute("src")),
                (r !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  r &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === r) return e;
      } else return e;
      if (((e = va(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Ux(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = va(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function E0(e, t) {
    for (; e.nodeType !== 8;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = va(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Af(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Mf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Hx(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var n = function () {
        (t(), a.removeEventListener("DOMContentLoaded", n));
      };
      (a.addEventListener("DOMContentLoaded", n), (e._reactRetry = n));
    }
  }
  function va(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Of = null;
  function T0(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return va(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function j0(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Lx(e, t) {
    function a() {
      n = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var n = !1;
    try {
      (e.ownerDocument.addEventListener("focus", a, !0),
        (e.focus || HTMLElement.prototype.focus).call(e, t));
    } finally {
      e.ownerDocument.removeEventListener("focus", a, !0);
    }
    return n;
  }
  function Bx(e) {
    d0(function () {
      d0(function (t) {
        return e(t);
      });
    });
  }
  function C0(e, t, a) {
    switch (((t = Fs(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(u(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(u(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function z0(e, t, a) {
    for (var n in a) {
      var i = a[n];
      a.hasOwnProperty(n) && i != null && Ge(e, t, n, null, hx, i);
    }
    (a.dangerouslySetInnerHTML != null && (e.textContent = ""),
      e.onclick === Ua && (e.onclick = null),
      zr(e));
  }
  function Df(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    zr(e);
  }
  var ba = new Map(),
    R0 = new Set();
  function $s(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var pn = ue.d;
  ue.d = { f: qx, r: Yx, D: Gx, C: Vx, L: Qx, m: Xx, X: Kx, S: Zx, M: Jx };
  function qx() {
    var e = pn.f(),
      t = Mo();
    return e || t;
  }
  function Yx(e) {
    var t = Pl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ah(t) : pn.r(e);
  }
  var ki = typeof document > "u" ? null : document;
  function _0(e, t, a) {
    var n = ki;
    if (n && typeof t == "string" && t) {
      var i = fa(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof a == "string" && (i += '[crossorigin="' + a + '"]'),
        R0.has(i) ||
          (R0.add(i),
          (e = { rel: e, crossOrigin: a, href: t }),
          n.querySelector(i) === null &&
            ((t = n.createElement("link")),
            Rt(t, "link", e),
            bt(t),
            n.head.appendChild(t))));
    }
  }
  function Gx(e) {
    (pn.D(e), _0("dns-prefetch", e, null));
  }
  function Vx(e, t) {
    (pn.C(e, t), _0("preconnect", e, t));
  }
  function Qx(e, t, a) {
    pn.L(e, t, a);
    var n = ki;
    if (n && e && t) {
      var i = 'link[rel="preload"][as="' + fa(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((i += '[imagesrcset="' + fa(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (i += '[imagesizes="' + fa(a.imageSizes) + '"]'))
        : (i += '[href="' + fa(e) + '"]');
      var r = i;
      switch (t) {
        case "style":
          r = Ui(e);
          break;
        case "script":
          r = Hi(e);
      }
      if (!(
        ba.has(r) ||
        ((e = $(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a,
        )),
        ba.set(r, e),
        n.querySelector(i) !== null ||
          (t === "style" && n.querySelector(Is(r))) ||
          (t === "script" && n.querySelector(Ws(r))))
      )) {
        var f = n.createElement("link");
        (Rt(f, "link", e),
          t === "style" &&
            ((f[Cr] = !0),
            (f.onload = f.onerror =
              function () {
                Vd(f);
              })),
          bt(f),
          n.head.appendChild(f));
      }
    }
  }
  function Xx(e, t) {
    pn.m(e, t);
    var a = ki;
    if (a && e) {
      var n = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + fa(n) + '"][href="' + fa(e) + '"]',
        r = i;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Hi(e);
      }
      if (
        !ba.has(r) &&
        ((e = $({ rel: "modulepreload", href: e }, t)),
        ba.set(r, e),
        a.querySelector(i) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ws(r))) return;
        }
        ((n = a.createElement("link")),
          Rt(n, "link", e),
          bt(n),
          a.head.appendChild(n));
      }
    }
  }
  function Zx(e, t, a) {
    pn.S(e, t, a);
    var n = ki;
    if (n && e) {
      var i = ei(n).hoistableStyles,
        r = Ui(e);
      t = t || "default";
      var f = i.get(r);
      if (!f) {
        var g = { loading: 0, preload: null };
        if ((f = n.querySelector(Is(r)))) g.loading = 5;
        else {
          ((e = $({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = ba.get(r)) && kf(e, a));
          var x = (f = n.createElement("link"));
          (bt(x),
            Rt(x, "link", e),
            (x._p = new Promise(function (z, A) {
              ((x.onload = z), (x.onerror = A));
            })),
            x.addEventListener("load", function () {
              g.loading |= 1;
            }),
            x.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Bo(f, t, n));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: g }),
          i.set(r, f));
      }
    }
  }
  function Kx(e, t) {
    pn.X(e, t);
    var a = ki;
    if (a && e) {
      var n = ei(a).hoistableScripts,
        i = Hi(e),
        r = n.get(i);
      r ||
        ((r = a.querySelector(Ws(i))),
        r ||
          ((e = $({ src: e, async: !0 }, t)),
          (t = ba.get(i)) && Uf(e, t),
          (r = a.createElement("script")),
          bt(r),
          Rt(r, "link", e),
          a.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        n.set(i, r));
    }
  }
  function Jx(e, t) {
    pn.M(e, t);
    var a = ki;
    if (a && e) {
      var n = ei(a).hoistableScripts,
        i = Hi(e),
        r = n.get(i);
      r ||
        ((r = a.querySelector(Ws(i))),
        r ||
          ((e = $({ src: e, async: !0, type: "module" }, t)),
          (t = ba.get(i)) && Uf(e, t),
          (r = a.createElement("script")),
          bt(r),
          Rt(r, "link", e),
          a.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        n.set(i, r));
    }
  }
  function A0(e, t, a, n) {
    var i = (i = Da.current) ? $s(i) : null;
    if (!i) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((a = Ui(a.href)),
            (t = ei(i).hoistableStyles),
            (n = t.get(a)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              t.set(a, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Ui(a.href);
          var r = ei(i).hoistableStyles,
            f = r.get(e);
          if (
            (f ||
              ((i = i.ownerDocument || i),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(e, f),
              (r = i.querySelector(Is(e)))
                ? r._p || ((f.instance = r), (f.state.loading = 5))
                : ((r = ba.get(e)),
                  r ||
                    ((r = {
                      rel: "preload",
                      as: "style",
                      href: a.href,
                      crossOrigin: a.crossOrigin,
                      integrity: a.integrity,
                      media: a.media,
                      hrefLang: a.hrefLang,
                      referrerPolicy: a.referrerPolicy,
                    }),
                    ba.set(e, r)),
                  Fx(i, e, r, f.state))),
            t && n === null)
          )
            throw Error(u(528, ""));
          return f;
        }
        if (t && n !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((a = Hi(a)),
              (t = ei(i).hoistableScripts),
              (n = t.get(a)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(a, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, e));
    }
  }
  function Ui(e) {
    return 'href="' + fa(e) + '"';
  }
  function Is(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function M0(e) {
    return $({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Fx(e, t, a, n) {
    if ((t = e.querySelector('link[rel="preload"][as="style"][' + t + "]"))) {
      if (t[Cr] !== !0) {
        n.loading = 1;
        return;
      }
    } else
      ((t = e.createElement("link")),
        (t[Cr] = !0),
        (t.onload = t.onerror = Vd.bind(null, t)),
        Rt(t, "link", a),
        bt(t),
        e.head.appendChild(t));
    ((n.preload = t),
      t.addEventListener("load", function () {
        return (n.loading |= 1);
      }),
      t.addEventListener("error", function () {
        return (n.loading |= 2);
      }));
  }
  function Hi(e) {
    return '[src="' + fa(e) + '"]';
  }
  function Ws(e) {
    return "script[async]" + e;
  }
  function O0(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + fa(a.href) + '"]');
          if (n) return ((t.instance = n), bt(n), n);
          var i = $({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (e.ownerDocument || e).createElement("style")),
            bt(n),
            Rt(n, "style", i),
            Bo(n, a.precedence, e),
            (t.instance = n)
          );
        case "stylesheet":
          i = Ui(a.href);
          var r = e.querySelector(Is(i));
          if (r) return ((t.state.loading |= 4), (t.instance = r), bt(r), r);
          ((n = M0(a)),
            (i = ba.get(i)) && kf(n, i),
            (r = (e.ownerDocument || e).createElement("link")),
            bt(r));
          var f = r;
          return (
            (f._p = new Promise(function (g, x) {
              ((f.onload = g), (f.onerror = x));
            })),
            Rt(r, "link", n),
            (t.state.loading |= 4),
            Bo(r, a.precedence, e),
            (t.instance = r)
          );
        case "script":
          return (
            (r = Hi(a.src)),
            (i = e.querySelector(Ws(r)))
              ? ((t.instance = i), bt(i), i)
              : ((n = a),
                (i = ba.get(r)) && ((n = $({}, a)), Uf(n, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                bt(i),
                Rt(i, "link", n),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), Bo(n, a.precedence, e));
    return t.instance;
  }
  function Bo(e, t, a) {
    for (
      var n = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = n.length ? n[n.length - 1] : null,
        r = i,
        f = 0;
      f < n.length;
      f++
    ) {
      var g = n[f];
      if (g.dataset.precedence === t) r = g;
      else if (r !== i) break;
    }
    r
      ? r.parentNode.insertBefore(e, r.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function kf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Uf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var qo = null;
  function D0(e, t, a) {
    if (qo === null) {
      var n = new Map(),
        i = (qo = new Map());
      i.set(a, n);
    } else ((i = qo), (n = i.get(a)), n || ((n = new Map()), i.set(a, n)));
    if (n.has(e)) return n;
    for (
      n.set(e, null), a = a.getElementsByTagName(e), i = 0;
      i < a.length;
      i++
    ) {
      var r = a[i];
      if (
        !(
          r[ms] ||
          r[Et] ||
          (e === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(t) || "";
        f = e + f;
        var g = n.get(f);
        g ? g.push(r) : n.set(f, [r]);
      }
    }
    return n;
  }
  function Hf(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function $x(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function k0(e, t) {
    return (
      e === "img" &&
      t.src != null &&
      t.src !== "" &&
      t.onLoad == null &&
      t.loading !== "lazy"
    );
  }
  function U0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function H0(e) {
    return (
      (e.width || 100) *
      (e.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function L0(e, t) {
    typeof t.decode == "function" &&
      (e.imgCount++,
      t.complete || ((e.imgBytes += H0(t)), e.suspenseyImages.push(t)),
      (e = Px.bind(e)),
      t.decode().then(e, e));
  }
  function Ix(e, t, a, n) {
    if (
      a.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var i = Ui(n.href),
          r = t.querySelector(Is(i));
        if (r) {
          ((t = r._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Ps.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = r),
            bt(r));
          return;
        }
        ((r = t.ownerDocument || t),
          (n = M0(n)),
          (i = ba.get(i)) && kf(n, i),
          (r = r.createElement("link")),
          bt(r));
        var f = r;
        ((f._p = new Promise(function (g, x) {
          ((f.onload = g), (f.onerror = x));
        })),
          Rt(r, "link", n),
          (a.instance = r));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = Ps.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Yo = 0;
  function Wx(e, t) {
    return (
      e.stylesheets && e.count === 0 && Vo(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Vo(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                ((e.unsuspend = null), r());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Yo === 0 && (Yo = 62500 * px());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Vo(e, e.stylesheets), e.unsuspend))
                ) {
                  var r = e.unsuspend;
                  ((e.unsuspend = null), r());
                }
              },
              (e.imgBytes > Yo ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(n), clearTimeout(i));
              }
            );
          }
        : null
    );
  }
  function B0(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Vo(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        ((e.unsuspend = null), t());
      }
    }
  }
  function Ps() {
    (this.count--, B0(this));
  }
  function Px() {
    (this.imgCount--, B0(this));
  }
  var Go = null;
  function Vo(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Go = new Map()),
        t.forEach(e1, e),
        (Go = null),
        Ps.call(e)));
  }
  function e1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Go.get(e);
      if (a) var n = a.get(null);
      else {
        ((a = new Map()), Go.set(e, a));
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            r = 0;
          r < i.length;
          r++
        ) {
          var f = i[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (a.set(f.dataset.precedence, f), (n = f));
        }
        n && a.set(null, n);
      }
      ((i = t.instance),
        (f = i.getAttribute("data-precedence")),
        (r = a.get(f) || n),
        r === n && a.set(null, i),
        a.set(f, i),
        this.count++,
        (n = Ps.bind(this)),
        i.addEventListener("load", n),
        i.addEventListener("error", n),
        r
          ? r.parentNode.insertBefore(i, r.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Li = {
    $$typeof: ve,
    Provider: null,
    Consumer: null,
    _currentValue: gt,
    _currentValue2: gt,
    _threadCount: 0,
  };
  function t1(e, t, a, n, i, r, f, g, x) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = pu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = pu(0)),
      (this.hiddenUpdates = pu(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = i),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = x),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function q0(e, t, a, n, i, r, f, g, x, z, A, q) {
    return (
      (e = new t1(e, t, a, f, x, z, A, q, g)),
      (t = 1),
      r === !0 && (t |= 24),
      (r = Xt(3, null, null, t)),
      (e.current = r),
      (r.stateNode = e),
      (t = Iu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (r.memoizedState = { element: n, isDehydrated: a, cache: t }),
      tc(r),
      e
    );
  }
  function Y0(e) {
    return e ? ((e = ci), e) : ci;
  }
  function G0(e, t, a, n, i, r) {
    ((i = Y0(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = On(t)),
      (n.payload = { element: a }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (a = Dn(e, n, t)),
      a !== null && (Ft(a, e, t), _s(a, e, t)));
  }
  function V0(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Lf(e, t) {
    (V0(e, t), (e = e.alternate) && V0(e, t));
  }
  function Q0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = bl(e, 67108864);
      (t !== null && Ft(t, e, 67108864), Lf(e, 67108864));
    }
  }
  function X0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ia();
      t = yu(t);
      var a = bl(e, t);
      (a !== null && Ft(a, e, t), Lf(e, t));
    }
  }
  var Bi = !0;
  function a1(e, t, a, n) {
    var i = ae.T;
    ae.T = null;
    var r = ue.p;
    try {
      ((ue.p = 2), Bf(e, t, a, n));
    } finally {
      ((ue.p = r), (ae.T = i));
    }
  }
  function n1(e, t, a, n) {
    var i = ae.T;
    ae.T = null;
    var r = ue.p;
    try {
      ((ue.p = 8), Bf(e, t, a, n));
    } finally {
      ((ue.p = r), (ae.T = i));
    }
  }
  function Bf(e, t, a, n) {
    if (Bi) {
      var i = qf(n);
      if (i === null) (xf(e, t, n, Qo, a), K0(e, n));
      else if (i1(i, e, t, a, n)) n.stopPropagation();
      else if ((K0(e, n), t & 4 && -1 < l1.indexOf(e))) {
        for (; i !== null;) {
          var r = Pl(i);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = hl(r.pendingLanes);
                  if (f !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f;) {
                      var x = 1 << (31 - De(f));
                      ((g.entanglements[1] |= x), (f &= ~x));
                    }
                    (Za(r), (ke & 6) === 0 && ((Ro = Ut() + 500), Zs(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = bl(r, 2)), g !== null && Ft(g, r, 2), Mo(), Lf(r, 2));
            }
          if (((r = qf(n)), r === null && xf(e, t, n, Qo, a), r === i)) break;
          i = r;
        }
        i !== null && n.stopPropagation();
      } else xf(e, t, n, null, a);
    }
  }
  function qf(e) {
    return ((e = Eu(e)), Yf(e));
  }
  var Qo = null;
  function Yf(e) {
    if (((Qo = null), (e = gl(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = y(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Qo = e), null);
  }
  function Z0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (rs()) {
          case Na:
            return 2;
          case os:
            return 8;
          case Il:
          case Er:
            return 32;
          case us:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gf = !1,
    Zn = null,
    Kn = null,
    Jn = null,
    er = new Map(),
    tr = new Map(),
    Fn = [],
    l1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function K0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Jn = null;
        break;
      case "pointerover":
      case "pointerout":
        er.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tr.delete(t.pointerId);
    }
  }
  function ar(e, t, a, n, i, r) {
    return e === null || e.nativeEvent !== r
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: n,
          nativeEvent: r,
          targetContainers: [i],
        }),
        t !== null && ((t = Pl(t)), t !== null && Q0(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function i1(e, t, a, n, i) {
    switch (t) {
      case "focusin":
        return ((Zn = ar(Zn, e, t, a, n, i)), !0);
      case "dragenter":
        return ((Kn = ar(Kn, e, t, a, n, i)), !0);
      case "mouseover":
        return ((Jn = ar(Jn, e, t, a, n, i)), !0);
      case "pointerover":
        var r = i.pointerId;
        return (er.set(r, ar(er.get(r) || null, e, t, a, n, i)), !0);
      case "gotpointercapture":
        return (
          (r = i.pointerId),
          tr.set(r, ar(tr.get(r) || null, e, t, a, n, i)),
          !0
        );
    }
    return !1;
  }
  function J0(e) {
    var t = gl(e.target);
    if (t !== null) {
      var a = h(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = p(a)), t !== null)) {
            ((e.blockedOn = t),
              qd(e.priority, function () {
                X0(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = y(a)), t !== null)) {
            ((e.blockedOn = t),
              qd(e.priority, function () {
                X0(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var a = qf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var n = new a.constructor(a.type, a);
        ((Nu = n), a.target.dispatchEvent(n), (Nu = null));
      } else return ((t = Pl(a)), t !== null && Q0(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function F0(e, t, a) {
    Xo(e) && a.delete(t);
  }
  function s1() {
    ((Gf = !1),
      Zn !== null && Xo(Zn) && (Zn = null),
      Kn !== null && Xo(Kn) && (Kn = null),
      Jn !== null && Xo(Jn) && (Jn = null),
      er.forEach(F0),
      tr.forEach(F0));
  }
  function Zo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Gf ||
        ((Gf = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, s1)));
  }
  var Ko = null;
  function $0(e) {
    Ko !== e &&
      ((Ko = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        Ko === e && (Ko = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            n = e[t + 1],
            i = e[t + 2];
          if (typeof n != "function") {
            if (Yf(n || a) === null) continue;
            break;
          }
          var r = Pl(a);
          r !== null &&
            (e.splice(t, 3),
            (t -= 3),
            wc(r, { pending: !0, data: i, method: a.method, action: n }, n, i));
        }
      }));
  }
  function qi(e) {
    function t(x) {
      return Zo(x, e);
    }
    (Zn !== null && Zo(Zn, e),
      Kn !== null && Zo(Kn, e),
      Jn !== null && Zo(Jn, e),
      er.forEach(t),
      tr.forEach(t));
    for (var a = 0; a < Fn.length; a++) {
      var n = Fn[a];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Fn.length && ((a = Fn[0]), a.blockedOn === null);)
      (J0(a), a.blockedOn === null && Fn.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (n = 0; n < a.length; n += 3) {
        var i = a[n],
          r = a[n + 1],
          f = i[Qt] || null;
        if (typeof r == "function") f || $0(a);
        else if (f) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (((i = r), (f = r[Qt] || null))) g = f.formAction;
            else if (Yf(i) !== null) continue;
          } else g = f.action;
          (typeof g == "function" ? (a[n + 1] = g) : (a.splice(n, 3), (n -= 3)),
            $0(a));
        }
      }
  }
  function I0() {
    function e(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (i = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (i !== null && (i(), (i = null)), n || setTimeout(a, 20));
    }
    function a() {
      if (!n && !navigation.transition) {
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var n = !1,
        i = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            i !== null && (i(), (i = null)));
        }
      );
    }
  }
  function Vf(e) {
    this._internalRoot = e;
  }
  ((Jo.prototype.render = Vf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var a = t.current,
        n = ia();
      G0(a, n, e, t, null, null);
    }),
    (Jo.prototype.unmount = Vf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (G0(e.current, 2, null, e, null, null), Mo(), (t[Wl] = null));
        }
      }));
  function Jo(e) {
    this._internalRoot = e;
  }
  Jo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Bd();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Fn.length && t !== 0 && t < Fn[a].priority; a++);
      (Fn.splice(a, 0, e), a === 0 && J0(e));
    }
  };
  var W0 = s.version;
  if (W0 !== "19.3.1") throw Error(u(527, W0, "19.3.1"));
  ue.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(u(188))
        : ((e = Object.keys(e).join(",")), Error(u(268, e)));
    return (
      (e = b(t)),
      (e = e !== null ? S(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var r1 = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ae,
    reconcilerVersion: "19.3.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fo.isDisabled && Fo.supportsFiber)
      try {
        ((nt = Fo.inject(r1)), (Ve = Fo));
      } catch {}
  }
  return (
    (lr.createRoot = function (e, t) {
      if (!d(e)) throw Error(u(299));
      var a = !1,
        n = "",
        i = Yh,
        r = Gh,
        f = Vh;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (r = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        (t = q0(e, 1, !1, null, null, a, n, null, i, r, f, I0)),
        (e[Wl] = t.current),
        bf(e),
        new Vf(t)
      );
    }),
    (lr.hydrateRoot = function (e, t, a) {
      if (!d(e)) throw Error(u(299));
      var n = !1,
        i = "",
        r = Yh,
        f = Gh,
        g = Vh,
        x = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (n = !0),
          a.identifierPrefix !== void 0 && (i = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (r = a.onUncaughtError),
          a.onCaughtError !== void 0 && (f = a.onCaughtError),
          a.onRecoverableError !== void 0 && (g = a.onRecoverableError),
          a.formState !== void 0 && (x = a.formState)),
        (t = q0(e, 1, !0, t, a ?? null, n, i, x, r, f, g, I0)),
        (t.context = Y0(null)),
        (a = t.current),
        (n = ia()),
        (n = yu(n)),
        (i = On(n)),
        (i.callback = null),
        Dn(a, i, n),
        (a = n),
        (t.current.lanes = a),
        ds(t, a),
        Za(t),
        (e[Wl] = t.current),
        bf(e),
        new Jo(t)
      );
    }),
    (lr.version = "19.3.1"),
    lr
  );
}
var up;
function x1() {
  if (up) return Kf.exports;
  up = 1;
  function l() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (s) {
        console.error(s);
      }
  }
  return (l(), (Kf.exports = b1()), Kf.exports);
}
var S1 = x1();
const ny = T.createContext(void 0),
  w1 = (l) => {
    const s = T.useContext(ny);
    if (!s)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return s;
  },
  N1 = ({ client: l, children: s }) => (
    T.useEffect(
      () => (
        l.mount(),
        () => {
          l.unmount();
        }
      ),
      [l],
    ),
    c.jsx(ny.Provider, { value: l, children: s })
  ),
  E1 = {
    setTimeout: (l, s) => setTimeout(l, s),
    clearTimeout: (l) => clearTimeout(l),
    setInterval: (l, s) => setInterval(l, s),
    clearInterval: (l) => clearInterval(l),
  };
var el,
  pd,
  Xp,
  T1 =
    ((Xp = class {
      constructor() {
        we(this, el, E1);
        we(this, pd, !1);
      }
      setTimeoutProvider(l) {
        fe(this, el, l);
      }
      setTimeout(l, s) {
        return M(this, el).setTimeout(l, s);
      }
      clearTimeout(l) {
        M(this, el).clearTimeout(l);
      }
      setInterval(l, s) {
        return M(this, el).setInterval(l, s);
      }
      clearInterval(l) {
        M(this, el).clearInterval(l);
      }
    }),
    (el = new WeakMap()),
    (pd = new WeakMap()),
    Xp);
const rd = new T1();
function j1(l) {
  setTimeout(l, 0);
}
const C1 = typeof window > "u" || "Deno" in globalThis;
function ra() {}
function z1(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function R1(l) {
  return typeof l == "number" && l >= 0 && l !== 1 / 0;
}
function _1(l, s) {
  return Math.max(l + (s || 0) - Date.now(), 0);
}
function cr(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function cp(l, s) {
  const {
    type: o = "all",
    exact: u,
    fetchStatus: d,
    predicate: h,
    queryKey: p,
    stale: y,
  } = l;
  if (p) {
    if (u) {
      if (s.queryHash !== vd(p, s.options)) return !1;
    } else if (!$i(s.queryKey, p)) return !1;
  }
  if (o !== "all") {
    const v = s.isActive();
    if ((o === "active" && !v) || (o === "inactive" && v)) return !1;
  }
  return !(
    (typeof y == "boolean" && s.isStale() !== y) ||
    (d && d !== s.state.fetchStatus) ||
    (h && !h(s))
  );
}
function fp(l, s) {
  const { exact: o, status: u, predicate: d, mutationKey: h } = l;
  if (h) {
    if (!s.options.mutationKey) return !1;
    if (o) {
      if (Xl(s.options.mutationKey) !== Xl(h)) return !1;
    } else if (!$i(s.options.mutationKey, h)) return !1;
  }
  return !((u && s.state.status !== u) || (d && !d(s)));
}
function vd(l, s) {
  return ((s == null ? void 0 : s.queryKeyHashFn) || Xl)(l);
}
function Xl(l) {
  return JSON.stringify(l, (s, o) =>
    od(o)
      ? Object.keys(o)
          .sort()
          .reduce((u, d) => ((u[d] = o[d]), u), {})
      : o,
  );
}
function $i(l, s) {
  if (l === s) return !0;
  if (typeof l != typeof s) return !1;
  if (l && s && typeof l == "object" && typeof s == "object") {
    if (Array.isArray(l) && Array.isArray(s)) {
      if (s.length > l.length) return !1;
      for (let u = 0; u < s.length; u++) if (!$i(l[u], s[u])) return !1;
      return !0;
    }
    const o = Object.keys(s);
    for (const u of o) if (!$i(l[u], s[u])) return !1;
    return !0;
  }
  return !1;
}
const A1 = Object.prototype.hasOwnProperty;
function ly(l, s, o = 0) {
  if (l === s) return l;
  if (o > 500) return s;
  const u = dp(l) && dp(s);
  if (!u && !(od(l) && od(s))) return s;
  const d = (u ? l : Object.keys(l)).length,
    h = u ? s : Object.keys(s),
    p = h.length,
    y = u ? new Array(p) : {};
  let v = 0;
  for (let b = 0; b < p; b++) {
    const S = u ? b : h[b],
      m = l[S],
      N = s[S];
    if (m === N) {
      ((y[S] = m), (u ? b < d : A1.call(l, S)) && v++);
      continue;
    }
    if (
      m === null ||
      N === null ||
      typeof m != "object" ||
      typeof N != "object"
    ) {
      y[S] = N;
      continue;
    }
    const D = ly(m, N, o + 1);
    ((y[S] = D), D === m && v++);
  }
  return d === p && v === d ? l : y;
}
function M1(l, s) {
  if (!s || Object.keys(l).length !== Object.keys(s).length) return !1;
  for (const o in l) if (l[o] !== s[o]) return !1;
  return !0;
}
function dp(l) {
  return Array.isArray(l) && l.length === Object.keys(l).length;
}
function od(l) {
  if (!mp(l)) return !1;
  const s = Object.getPrototypeOf(l),
    o = s == null ? void 0 : s.constructor;
  if (o === void 0) return !0;
  if (typeof o != "function") return !1;
  const u = o.prototype;
  return !(
    !mp(u) ||
    !u.hasOwnProperty("isPrototypeOf") ||
    s !== Object.prototype
  );
}
function mp(l) {
  return Object.prototype.toString.call(l) === "[object Object]";
}
function O1(l) {
  return new Promise((s) => {
    rd.setTimeout(s, l);
  });
}
function D1(l, s, o) {
  return typeof o.structuralSharing == "function"
    ? o.structuralSharing(l, s)
    : o.structuralSharing !== !1
      ? ly(l, s)
      : s;
}
function k1(l, s, o = 0) {
  const u = [...l, s];
  return o && u.length > o ? u.slice(1) : u;
}
function U1(l, s, o = 0) {
  const u = [s, ...l];
  return o && u.length > o ? u.slice(0, -1) : u;
}
const bd = Symbol();
function iy(l, s) {
  return !l.queryFn && s != null && s.initialPromise
    ? () => s.initialPromise
    : !l.queryFn || l.queryFn === bd
      ? () => Promise.reject(new Error(`Missing queryFn: '${l.queryHash}'`))
      : l.queryFn;
}
function H1(l, s) {
  return typeof l == "function" ? l(...s) : !!l;
}
function L1(l, s, o) {
  let u = !1,
    d;
  return (
    Object.defineProperty(l, "signal", {
      enumerable: !0,
      get: () => (
        d ?? (d = s()),
        u ||
          ((u = !0),
          d.aborted ? o() : d.addEventListener("abort", o, { once: !0 })),
        d
      ),
    }),
    l
  );
}
let B1 = () => C1;
const sy = () => B1();
var pr = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(l) {
      return (
        this.listeners.add(l),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(l), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Bl,
  tl,
  Yi,
  Zp,
  q1 =
    ((Zp = class extends pr {
      constructor() {
        super();
        we(this, Bl);
        we(this, tl);
        we(this, Yi);
        fe(this, Yi, (s) => {
          if (typeof window < "u" && window.addEventListener) {
            const o = () => s();
            return (
              window.addEventListener("visibilitychange", o, !1),
              () => {
                window.removeEventListener("visibilitychange", o);
              }
            );
          }
        });
      }
      onSubscribe() {
        M(this, tl) || this.setEventListener(M(this, Yi));
      }
      onUnsubscribe() {
        var s;
        this.hasListeners() ||
          ((s = M(this, tl)) == null || s.call(this), fe(this, tl, void 0));
      }
      setEventListener(s) {
        var o;
        (fe(this, Yi, s),
          (o = M(this, tl)) == null || o.call(this),
          fe(
            this,
            tl,
            s((u) => {
              typeof u == "boolean" ? this.setFocused(u) : this.onFocus();
            }),
          ));
      }
      setFocused(s) {
        M(this, Bl) !== s && (fe(this, Bl, s), this.onFocus());
      }
      onFocus() {
        const s = this.isFocused();
        this.listeners.forEach((o) => {
          o(s);
        });
      }
      isFocused() {
        var s;
        return typeof M(this, Bl) == "boolean"
          ? M(this, Bl)
          : ((s = globalThis.document) == null ? void 0 : s.visibilityState) !==
              "hidden";
      }
    }),
    (Bl = new WeakMap()),
    (tl = new WeakMap()),
    (Yi = new WeakMap()),
    Zp);
const ry = new q1(),
  Y1 = j1;
function G1() {
  let l = [],
    s = 0,
    o = (y) => {
      y();
    },
    u = (y) => {
      y();
    },
    d = Y1;
  const h = (y) => {
      s
        ? l.push(y)
        : d(() => {
            o(y);
          });
    },
    p = () => {
      const y = l;
      ((l = []),
        y.length &&
          d(() => {
            u(() => {
              y.forEach((v) => {
                o(v);
              });
            });
          }));
    };
  return {
    batch: (y) => {
      let v;
      s++;
      try {
        v = y();
      } finally {
        (s--, s || p());
      }
      return v;
    },
    batchCalls:
      (y) =>
      (...v) => {
        h(() => {
          y(...v);
        });
      },
    schedule: h,
    setNotifyFunction: (y) => {
      o = y;
    },
    setBatchNotifyFunction: (y) => {
      u = y;
    },
    setScheduler: (y) => {
      d = y;
    },
  };
}
const At = G1();
var Gi,
  al,
  Vi,
  Kp,
  V1 =
    ((Kp = class extends pr {
      constructor() {
        super();
        we(this, Gi, !0);
        we(this, al);
        we(this, Vi);
        fe(this, Vi, (s) => {
          if (typeof window < "u" && window.addEventListener) {
            const o = () => s(!0),
              u = () => s(!1);
            return (
              window.addEventListener("online", o, !1),
              window.addEventListener("offline", u, !1),
              () => {
                (window.removeEventListener("online", o),
                  window.removeEventListener("offline", u));
              }
            );
          }
        });
      }
      onSubscribe() {
        M(this, al) || this.setEventListener(M(this, Vi));
      }
      onUnsubscribe() {
        var s;
        this.hasListeners() ||
          ((s = M(this, al)) == null || s.call(this), fe(this, al, void 0));
      }
      setEventListener(s) {
        var o;
        (fe(this, Vi, s),
          (o = M(this, al)) == null || o.call(this),
          fe(this, al, s(this.setOnline.bind(this))));
      }
      setOnline(s) {
        M(this, Gi) !== s &&
          (fe(this, Gi, s),
          this.listeners.forEach((o) => {
            o(s);
          }));
      }
      isOnline() {
        return M(this, Gi);
      }
    }),
    (Gi = new WeakMap()),
    (al = new WeakMap()),
    (Vi = new WeakMap()),
    Kp);
const ru = new V1();
function Q1(l) {
  return Math.min(1e3 * 2 ** l, 3e4);
}
function oy(l) {
  return (l ?? "online") === "online" ? ru.isOnline() : !0;
}
var ud = class extends Error {
  constructor(l) {
    (super("CancelledError"),
      (this.revert = l == null ? void 0 : l.revert),
      (this.silent = l == null ? void 0 : l.silent));
  }
};
function uy(l) {
  let s = !1,
    o = 0,
    u,
    d = "pending",
    h,
    p;
  const y = new Promise((Q, K) => {
    ((h = Q), (p = K));
  });
  y.catch(ra);
  const v = () => d !== "pending",
    b = (Q) => {
      var K;
      if (!v()) {
        const V = new ud(Q);
        (L(V), (K = l.onCancel) == null || K.call(l, V));
      }
    },
    S = () => {
      s = !0;
    },
    m = () => {
      s = !1;
    },
    N = () =>
      ry.isFocused() &&
      (l.networkMode === "always" || ru.isOnline()) &&
      l.canRun(),
    D = () => oy(l.networkMode) && l.canRun(),
    k = (Q) => {
      v() || (u == null || u(), (d = "resolved"), h(Q));
    },
    L = (Q) => {
      v() || (u == null || u(), (d = "rejected"), p(Q));
    },
    H = (Q) =>
      new Promise((K) => {
        var V;
        ((u = (X) => {
          (v() || Q()) && K(X);
        }),
          (V = l.onPause) == null || V.call(l));
      }).then(() => {
        var K;
        ((u = void 0), v() || (K = l.onContinue) == null || K.call(l));
      }),
    U = () => {
      if (v()) return;
      let Q;
      const K = o === 0 ? l.initialPromise : void 0;
      try {
        Q = K ?? l.fn();
      } catch (V) {
        Q = Promise.reject(V);
      }
      Promise.resolve(Q)
        .then(k)
        .catch((V) => {
          var se;
          if (v()) return;
          const X = l.retry ?? (sy() ? 0 : 3),
            ee = l.retryDelay ?? Q1,
            $ = typeof ee == "function" ? ee(o, V) : ee,
            Y =
              X === !0 ||
              (typeof X == "number" && o < X) ||
              (typeof X == "function" && X(o, V));
          if (s || !Y) {
            L(V);
            return;
          }
          (o++,
            (se = l.onFail) == null || se.call(l, o, V),
            O1($)
              .then(() => (N() ? void 0 : H(N)))
              .then(() => {
                s ? L(V) : U();
              }));
        });
    };
  return {
    promise: y,
    status: () => d,
    cancel: b,
    continue: () => (u == null || u(), y),
    cancelRetry: S,
    continueRetry: m,
    canStart: D,
    start: () => (D() ? U() : H(D).then(U), y),
  };
}
var ql,
  Jp,
  cy =
    ((Jp = class {
      constructor() {
        we(this, ql);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          R1(this.gcTime) &&
            fe(
              this,
              ql,
              rd.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(l) {
        this.gcTime = Math.max(this.gcTime || 0, l ?? (sy() ? 1 / 0 : 3e5));
      }
      clearGcTimeout() {
        M(this, ql) !== void 0 &&
          (rd.clearTimeout(M(this, ql)), fe(this, ql, void 0));
      }
    }),
    (ql = new WeakMap()),
    Jp);
function X1(l) {
  return {
    onFetch: (s, o) => {
      var S, m, N, D, k;
      const u = s.options,
        d =
          (N =
            (m = (S = s.fetchOptions) == null ? void 0 : S.meta) == null
              ? void 0
              : m.fetchMore) == null
            ? void 0
            : N.direction,
        h = ((D = s.state.data) == null ? void 0 : D.pages) || [],
        p = ((k = s.state.data) == null ? void 0 : k.pageParams) || [];
      let y = { pages: [], pageParams: [] },
        v = 0;
      const b = async () => {
        let L = !1;
        const H = (K) => {
            L1(
              K,
              () => s.signal,
              () => (L = !0),
            );
          },
          U = iy(s.options, s.fetchOptions),
          Q = async (K, V, X) => {
            if (L) return Promise.reject(s.signal.reason);
            if (V == null && K.pages.length) return Promise.resolve(K);
            const $ = (() => {
                const Me = {
                  client: s.client,
                  queryKey: s.queryKey,
                  pageParam: V,
                  direction: X ? "backward" : "forward",
                  meta: s.options.meta,
                };
                return (H(Me), Me);
              })(),
              Y = await U($),
              { maxPages: se } = s.options,
              me = X ? U1 : k1;
            return {
              pages: me(K.pages, Y, se),
              pageParams: me(K.pageParams, V, se),
            };
          };
        if (d && h.length) {
          const K = d === "backward",
            V = K ? Z1 : hp,
            X = { pages: h, pageParams: p };
          y = await Q(X, V(u, X), K);
        } else {
          const K = l ?? h.length;
          do {
            const V =
              v === 0
                ? p[0] === void 0
                  ? u.initialPageParam
                  : p[0]
                : hp(u, y);
            if (v > 0 && V == null) break;
            ((y = await Q(y, V)), v++);
          } while (v < K);
        }
        return y;
      };
      s.options.persister
        ? (s.fetchFn = () => {
            var L, H;
            return (H = (L = s.options).persister) == null
              ? void 0
              : H.call(
                  L,
                  b,
                  {
                    client: s.client,
                    queryKey: s.queryKey,
                    meta: s.options.meta,
                    signal: s.signal,
                  },
                  o,
                );
          })
        : (s.fetchFn = b);
    },
  };
}
function hp(l, { pages: s, pageParams: o }) {
  const u = s.length - 1;
  return s.length > 0 ? l.getNextPageParam(s[u], s, o[u], o) : void 0;
}
function Z1(l, { pages: s, pageParams: o }) {
  var u;
  return s.length > 0
    ? (u = l.getPreviousPageParam) == null
      ? void 0
      : u.call(l, s[0], s, o[0], o)
    : void 0;
}
var Qi,
  Yl,
  Xi,
  xa,
  Gl,
  vt,
  dr,
  Vl,
  _a,
  vn,
  Fp,
  K1 =
    ((Fp = class extends cy {
      constructor(s) {
        super();
        we(this, _a);
        we(this, Qi);
        we(this, Yl);
        we(this, Xi);
        we(this, xa);
        we(this, Gl);
        we(this, vt);
        we(this, dr);
        we(this, Vl);
        (fe(this, Vl, !1),
          fe(this, dr, s.defaultOptions),
          this.setOptions(s.options),
          (this.observers = []),
          fe(this, Gl, s.client),
          fe(this, xa, M(this, Gl).getQueryCache()),
          (this.queryKey = s.queryKey),
          (this.queryHash = s.queryHash),
          fe(this, Yl, pp(this.options)),
          (this.state = s.state ?? M(this, Yl)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get queryType() {
        return M(this, Qi);
      }
      get promise() {
        var s;
        return (s = M(this, vt)) == null ? void 0 : s.promise;
      }
      setOptions(s) {
        if (
          ((this.options = { ...M(this, dr), ...s }),
          s != null && s._type && fe(this, Qi, s._type),
          this.updateGcTime(this.options.gcTime),
          this.state && this.state.data === void 0)
        ) {
          const o = pp(this.options);
          o.data !== void 0 &&
            (this.setState(gp(o.data, o.dataUpdatedAt)), fe(this, Yl, o));
        }
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          M(this, xa).remove(this);
      }
      setData(s, o) {
        const u = D1(this.state.data, s, this.options);
        return (
          st(this, _a, vn).call(this, {
            data: u,
            type: "success",
            dataUpdatedAt: o == null ? void 0 : o.updatedAt,
            manual: o == null ? void 0 : o.manual,
          }),
          u
        );
      }
      setState(s) {
        st(this, _a, vn).call(this, { type: "setState", state: s });
      }
      cancel(s) {
        var u, d;
        const o = (u = M(this, vt)) == null ? void 0 : u.promise;
        return (
          (d = M(this, vt)) == null || d.cancel(s),
          o ? o.then(ra).catch(ra) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      get resetState() {
        return M(this, Yl);
      }
      reset() {
        (this.destroy(), this.setState(this.resetState));
      }
      isActive() {
        return this.observers.some((s) => cr(s.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === bd || !this.isFetched();
      }
      isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (s) => cr(s.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((s) => s.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(s = 0) {
        return this.state.data === void 0
          ? !0
          : s === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !_1(this.state.dataUpdatedAt, s);
      }
      onFocus() {
        var s, o;
        ((s = this.observers.find((u) => u.shouldFetchOnWindowFocus())) ==
          null || s.refetch({ cancelRefetch: !1 }),
          (o = M(this, vt)) == null || o.continue());
      }
      onOnline() {
        var s, o;
        ((s = this.observers.find((u) => u.shouldFetchOnReconnect())) == null ||
          s.refetch({ cancelRefetch: !1 }),
          (o = M(this, vt)) == null || o.continue());
      }
      addObserver(s) {
        this.observers.includes(s) ||
          (this.observers.push(s),
          this.clearGcTimeout(),
          M(this, xa).notify({
            type: "observerAdded",
            query: this,
            observer: s,
          }));
      }
      removeObserver(s) {
        const o = this.observers.indexOf(s);
        o !== -1 &&
          (this.observers.splice(o, 1),
          this.observers.length ||
            (M(this, vt) &&
              (M(this, Vl) ||
              (this.state.fetchStatus === "paused" &&
                this.state.status === "pending")
                ? M(this, vt).cancel({ revert: !0 })
                : M(this, vt).cancelRetry()),
            this.scheduleGc()),
          M(this, xa).notify({
            type: "observerRemoved",
            query: this,
            observer: s,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          st(this, _a, vn).call(this, { type: "invalidate" });
      }
      async fetch(s, o) {
        var b, S, m, N, D, k, L, H, U, Q, K, V;
        if (
          this.state.fetchStatus !== "idle" &&
          ((b = M(this, vt)) == null ? void 0 : b.status()) !== "rejected"
        ) {
          if (this.state.data !== void 0 && o != null && o.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (M(this, vt))
            return (M(this, vt).continueRetry(), M(this, vt).promise);
        }
        if ((s && this.setOptions(s), !this.options.queryFn)) {
          const X = this.observers.find((ee) => ee.options.queryFn);
          X && this.setOptions(X.options);
        }
        const u = new AbortController(),
          d = (X) => {
            Object.defineProperty(X, "signal", {
              enumerable: !0,
              get: () => (fe(this, Vl, !0), u.signal),
            });
          },
          h = () => {
            const X = iy(this.options, o),
              $ = (() => {
                const Y = {
                  client: M(this, Gl),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (d(Y), Y);
              })();
            return (
              fe(this, Vl, !1),
              this.options.persister ? this.options.persister(X, $, this) : X($)
            );
          },
          y = (() => {
            const X = {
              fetchOptions: o,
              options: this.options,
              queryKey: this.queryKey,
              client: M(this, Gl),
              state: this.state,
              fetchFn: h,
            };
            return (d(X), X);
          })();
        ((S =
          M(this, Qi) === "infinite"
            ? X1(this.options.pages)
            : this.options.behavior) == null || S.onFetch(y, this),
          fe(this, Xi, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((m = y.fetchOptions) == null ? void 0 : m.meta)) &&
            st(this, _a, vn).call(this, {
              type: "fetch",
              meta: (N = y.fetchOptions) == null ? void 0 : N.meta,
            }));
        const v = fe(
          this,
          vt,
          uy({
            initialPromise: o == null ? void 0 : o.initialPromise,
            fn: y.fetchFn,
            onCancel: (X) => {
              (X instanceof ud &&
                X.revert &&
                this.setState({ ...M(this, Xi), fetchStatus: "idle" }),
                u.abort());
            },
            onFail: (X, ee) => {
              st(this, _a, vn).call(this, {
                type: "failed",
                failureCount: X,
                error: ee,
              });
            },
            onPause: () => {
              st(this, _a, vn).call(this, { type: "pause" });
            },
            onContinue: () => {
              st(this, _a, vn).call(this, { type: "continue" });
            },
            retry: y.options.retry,
            retryDelay: y.options.retryDelay,
            networkMode: y.options.networkMode,
            canRun: () => !0,
          }),
        );
        try {
          const X = await v.start();
          if (X === void 0)
            throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(X),
            (k = (D = M(this, xa).config).onSuccess) == null ||
              k.call(D, X, this),
            (H = (L = M(this, xa).config).onSettled) == null ||
              H.call(L, X, this.state.error, this),
            X
          );
        } catch (X) {
          if (X instanceof ud) {
            if (X.silent) return M(this, vt).promise;
            if (X.revert) {
              if (this.state.data === void 0) throw X;
              return this.state.data;
            }
          }
          throw (
            st(this, _a, vn).call(this, { type: "error", error: X }),
            (Q = (U = M(this, xa).config).onError) == null ||
              Q.call(U, X, this),
            (V = (K = M(this, xa).config).onSettled) == null ||
              V.call(K, this.state.data, X, this),
            X
          );
        } finally {
          (M(this, vt) === v && fe(this, vt, void 0), this.scheduleGc());
        }
      }
    }),
    (Qi = new WeakMap()),
    (Yl = new WeakMap()),
    (Xi = new WeakMap()),
    (xa = new WeakMap()),
    (Gl = new WeakMap()),
    (vt = new WeakMap()),
    (dr = new WeakMap()),
    (Vl = new WeakMap()),
    (_a = new WeakSet()),
    (vn = function (s) {
      const o = (u) => {
        switch (s.type) {
          case "failed":
            return {
              ...u,
              fetchFailureCount: s.failureCount,
              fetchFailureReason: s.error,
            };
          case "pause":
            return { ...u, fetchStatus: "paused" };
          case "continue":
            return { ...u, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...u,
              ...J1(u.data, this.options),
              fetchMeta: s.meta ?? null,
            };
          case "success":
            const d = {
              ...u,
              ...gp(s.data, s.dataUpdatedAt),
              dataUpdateCount: u.dataUpdateCount + 1,
              ...(!s.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (fe(this, Xi, s.manual ? d : void 0), d);
          case "error":
            const h = s.error;
            return {
              ...u,
              error: h,
              errorUpdateCount: u.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: u.fetchFailureCount + 1,
              fetchFailureReason: h,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...u, isInvalidated: !0 };
          case "setState":
            return { ...u, ...s.state };
        }
      };
      ((this.state = o(this.state)),
        At.batch(() => {
          (this.observers.slice().forEach((u) => {
            u.onQueryUpdate();
          }),
            M(this, xa).notify({ query: this, type: "updated", action: s }));
        }));
    }),
    Fp);
function J1(l, s) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: oy(s.networkMode) ? "fetching" : "paused",
    ...(l === void 0 && { error: null, status: "pending" }),
  };
}
function gp(l, s) {
  return {
    data: l,
    dataUpdatedAt: s ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function pp(l) {
  const s =
      typeof l.initialData == "function" ? l.initialData() : l.initialData,
    o = s !== void 0,
    u = o
      ? typeof l.initialDataUpdatedAt == "function"
        ? l.initialDataUpdatedAt()
        : l.initialDataUpdatedAt
      : 0;
  return {
    data: s,
    dataUpdateCount: 0,
    dataUpdatedAt: o ? (u ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: o ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var mr,
  Fa,
  Ot,
  Ql,
  $a,
  Wn,
  $p,
  F1 =
    (($p = class extends cy {
      constructor(s) {
        super();
        we(this, $a);
        we(this, mr);
        we(this, Fa);
        we(this, Ot);
        we(this, Ql);
        (fe(this, mr, s.client),
          (this.mutationId = s.mutationId),
          fe(this, Ot, s.mutationCache),
          fe(this, Fa, []),
          (this.state = s.state || fy()),
          this.setOptions(s.options),
          this.scheduleGc());
      }
      setOptions(s) {
        ((this.options = s), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(s) {
        M(this, Fa).includes(s) ||
          (M(this, Fa).push(s),
          this.clearGcTimeout(),
          M(this, Ot).notify({
            type: "observerAdded",
            mutation: this,
            observer: s,
          }));
      }
      removeObserver(s) {
        (fe(
          this,
          Fa,
          M(this, Fa).filter((o) => o !== s),
        ),
          this.scheduleGc(),
          M(this, Ot).notify({
            type: "observerRemoved",
            mutation: this,
            observer: s,
          }));
      }
      optionalRemove() {
        M(this, Fa).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : M(this, Ot).remove(this));
      }
      continue() {
        var s;
        return (
          ((s = M(this, Ql)) == null ? void 0 : s.continue()) ??
          (this.state.status === "pending"
            ? this.execute(this.state.variables)
            : Promise.resolve())
        );
      }
      async execute(s) {
        var y, v, b, S, m, N, D, k, L, H, U, Q, K, V, X, ee, $, Y;
        const o = () => {
            st(this, $a, Wn).call(this, { type: "continue" });
          },
          u = {
            client: M(this, mr),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          },
          d = fe(
            this,
            Ql,
            uy({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(s, u)
                  : Promise.reject(new Error("No mutationFn found")),
              onFail: (se, me) => {
                st(this, $a, Wn).call(this, {
                  type: "failed",
                  failureCount: se,
                  error: me,
                });
              },
              onPause: () => {
                st(this, $a, Wn).call(this, { type: "pause" });
              },
              onContinue: o,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => M(this, Ot).canRun(this),
            }),
          ),
          h = this.state.status === "pending",
          p = !d.canStart();
        try {
          if (h) o();
          else {
            (st(this, $a, Wn).call(this, {
              type: "pending",
              variables: s,
              isPaused: p,
            }),
              M(this, Ot).config.onMutate &&
                (await M(this, Ot).config.onMutate(s, this, u)));
            const me = await ((v = (y = this.options).onMutate) == null
              ? void 0
              : v.call(y, s, u));
            me !== this.state.context &&
              st(this, $a, Wn).call(this, {
                type: "pending",
                context: me,
                variables: s,
                isPaused: p,
              });
          }
          const se = await d.start();
          return (
            await ((S = (b = M(this, Ot).config).onSuccess) == null
              ? void 0
              : S.call(b, se, s, this.state.context, this, u)),
            await ((N = (m = this.options).onSuccess) == null
              ? void 0
              : N.call(m, se, s, this.state.context, u)),
            await ((k = (D = M(this, Ot).config).onSettled) == null
              ? void 0
              : k.call(
                  D,
                  se,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  u,
                )),
            await ((H = (L = this.options).onSettled) == null
              ? void 0
              : H.call(L, se, null, s, this.state.context, u)),
            st(this, $a, Wn).call(this, { type: "success", data: se }),
            se
          );
        } catch (se) {
          try {
            await ((Q = (U = M(this, Ot).config).onError) == null
              ? void 0
              : Q.call(U, se, s, this.state.context, this, u));
          } catch (me) {
            Promise.reject(me);
          }
          try {
            await ((V = (K = this.options).onError) == null
              ? void 0
              : V.call(K, se, s, this.state.context, u));
          } catch (me) {
            Promise.reject(me);
          }
          try {
            await ((ee = (X = M(this, Ot).config).onSettled) == null
              ? void 0
              : ee.call(
                  X,
                  void 0,
                  se,
                  this.state.variables,
                  this.state.context,
                  this,
                  u,
                ));
          } catch (me) {
            Promise.reject(me);
          }
          try {
            await ((Y = ($ = this.options).onSettled) == null
              ? void 0
              : Y.call($, void 0, se, s, this.state.context, u));
          } catch (me) {
            Promise.reject(me);
          }
          throw (st(this, $a, Wn).call(this, { type: "error", error: se }), se);
        } finally {
          (M(this, Ql) === d && fe(this, Ql, void 0),
            M(this, Ot).runNext(this));
        }
      }
    }),
    (mr = new WeakMap()),
    (Fa = new WeakMap()),
    (Ot = new WeakMap()),
    (Ql = new WeakMap()),
    ($a = new WeakSet()),
    (Wn = function (s) {
      const o = (u) => {
        switch (s.type) {
          case "failed":
            return {
              ...u,
              failureCount: s.failureCount,
              failureReason: s.error,
            };
          case "pause":
            return { ...u, isPaused: !0 };
          case "continue":
            return { ...u, isPaused: !1 };
          case "pending":
            return {
              ...u,
              context: s.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: s.isPaused,
              status: "pending",
              variables: s.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...u,
              data: s.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...u,
              data: void 0,
              error: s.error,
              failureCount: u.failureCount + 1,
              failureReason: s.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = o(this.state)),
        At.batch(() => {
          (M(this, Fa).forEach((u) => {
            u.onMutationUpdate(s);
          }),
            M(this, Ot).notify({ mutation: this, type: "updated", action: s }));
        }));
    }),
    $p);
function fy() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var nl,
  Aa,
  hr,
  Ip,
  $1 =
    ((Ip = class extends pr {
      constructor(s = {}) {
        super();
        we(this, nl);
        we(this, Aa);
        we(this, hr);
        ((this.config = s),
          fe(this, nl, new Set()),
          fe(this, Aa, new Map()),
          fe(this, hr, 0));
      }
      build(s, o, u) {
        const d = new F1({
          client: s,
          mutationCache: this,
          mutationId: ++Io(this, hr)._,
          options: s.defaultMutationOptions(o),
          state: u,
        });
        return (this.add(d), d);
      }
      add(s) {
        M(this, nl).add(s);
        const o = Wo(s);
        if (typeof o == "string") {
          const u = M(this, Aa).get(o);
          u ? u.push(s) : M(this, Aa).set(o, [s]);
        }
        this.notify({ type: "added", mutation: s });
      }
      remove(s) {
        if (M(this, nl).delete(s)) {
          const o = Wo(s);
          if (typeof o == "string") {
            const u = M(this, Aa).get(o);
            if (u)
              if (u.length > 1) {
                const d = u.indexOf(s);
                d !== -1 && u.splice(d, 1);
              } else u[0] === s && M(this, Aa).delete(o);
          }
        }
        this.notify({ type: "removed", mutation: s });
      }
      canRun(s) {
        var u;
        const o = Wo(s);
        if (typeof o == "string") {
          const d =
            (u = M(this, Aa).get(o)) == null
              ? void 0
              : u.find((h) => h.state.status === "pending");
          return !d || d === s;
        } else return !0;
      }
      runNext(s) {
        var u, d;
        const o = Wo(s);
        return typeof o == "string"
          ? (((d =
              (u = M(this, Aa).get(o)) == null
                ? void 0
                : u.find((h) => h !== s && h.state.isPaused)) == null
              ? void 0
              : d.continue()) ?? Promise.resolve())
          : Promise.resolve();
      }
      clear() {
        At.batch(() => {
          const s = this.getAll();
          (M(this, nl).clear(),
            M(this, Aa).clear(),
            s.forEach((o) => {
              this.notify({ type: "removed", mutation: o });
            }));
        });
      }
      getAll() {
        return Array.from(M(this, nl));
      }
      find(s) {
        const o = { exact: !0, ...s };
        return this.getAll().find((u) => fp(o, u));
      }
      findAll(s = {}) {
        return this.getAll().filter((o) => fp(s, o));
      }
      notify(s) {
        At.batch(() => {
          this.listeners.forEach((o) => {
            o(s);
          });
        });
      }
      resumePausedMutations() {
        const s = this.getAll().filter((o) => o.state.isPaused);
        return At.batch(() =>
          Promise.all(s.map((o) => o.continue().catch(ra))),
        );
      }
    }),
    (nl = new WeakMap()),
    (Aa = new WeakMap()),
    (hr = new WeakMap()),
    Ip);
function Wo(l) {
  var s;
  return (s = l.options.scope) == null ? void 0 : s.id;
}
var bn,
  ll,
  Dt,
  gr,
  Wa,
  ur,
  cd,
  Wp,
  I1 =
    ((Wp = class extends pr {
      constructor(o, u) {
        super();
        we(this, Wa);
        we(this, bn);
        we(this, ll);
        we(this, Dt);
        we(this, gr);
        (fe(this, bn, o),
          this.setOptions(u),
          this.bindMethods(),
          st(this, Wa, ur).call(this));
      }
      bindMethods() {
        ((this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this)));
      }
      setOptions(o) {
        var d;
        const u = this.options;
        ((this.options = M(this, bn).defaultMutationOptions(o)),
          M1(this.options, u) ||
            M(this, bn)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: M(this, Dt),
                observer: this,
              }),
          u != null &&
          u.mutationKey &&
          this.options.mutationKey &&
          Xl(u.mutationKey) !== Xl(this.options.mutationKey)
            ? this.reset()
            : ((d = M(this, Dt)) == null ? void 0 : d.state.status) ===
                "pending" && M(this, Dt).setOptions(this.options));
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          M(this, Dt) &&
          (M(this, Dt).addObserver(this), st(this, Wa, ur).call(this));
      }
      onUnsubscribe() {
        var o;
        this.hasListeners() ||
          (o = M(this, Dt)) == null ||
          o.removeObserver(this);
      }
      onMutationUpdate(o) {
        (st(this, Wa, ur).call(this), st(this, Wa, cd).call(this, o));
      }
      getCurrentResult() {
        return M(this, ll);
      }
      reset() {
        var o;
        ((o = M(this, Dt)) == null || o.removeObserver(this),
          fe(this, Dt, void 0),
          st(this, Wa, ur).call(this),
          st(this, Wa, cd).call(this));
      }
      mutate(o, u) {
        var d;
        return (
          fe(this, gr, u),
          (d = M(this, Dt)) == null || d.removeObserver(this),
          fe(
            this,
            Dt,
            M(this, bn).getMutationCache().build(M(this, bn), this.options),
          ),
          M(this, Dt).addObserver(this),
          M(this, Dt).execute(o)
        );
      }
    }),
    (bn = new WeakMap()),
    (ll = new WeakMap()),
    (Dt = new WeakMap()),
    (gr = new WeakMap()),
    (Wa = new WeakSet()),
    (ur = function () {
      var u;
      const o = ((u = M(this, Dt)) == null ? void 0 : u.state) ?? fy();
      fe(this, ll, {
        ...o,
        isPending: o.status === "pending",
        isSuccess: o.status === "success",
        isError: o.status === "error",
        isIdle: o.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (cd = function (o) {
      At.batch(() => {
        var d, h, p, y;
        const u = M(this, gr);
        if (u && this.hasListeners()) {
          const v = M(this, ll).variables,
            b = M(this, ll).context,
            S = {
              client: M(this, bn),
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          if ((o == null ? void 0 : o.type) === "success") {
            try {
              (d = u.onSuccess) == null || d.call(u, o.data, v, b, S);
            } catch (m) {
              Promise.reject(m);
            }
            try {
              (h = u.onSettled) == null || h.call(u, o.data, null, v, b, S);
            } catch (m) {
              Promise.reject(m);
            }
          } else if ((o == null ? void 0 : o.type) === "error") {
            try {
              (p = u.onError) == null || p.call(u, o.error, v, b, S);
            } catch (m) {
              Promise.reject(m);
            }
            try {
              (y = u.onSettled) == null || y.call(u, void 0, o.error, v, b, S);
            } catch (m) {
              Promise.reject(m);
            }
          }
        }
        this.listeners.forEach((v) => {
          v(M(this, ll));
        });
      });
    }),
    Wp),
  Ia,
  Pp,
  W1 =
    ((Pp = class extends pr {
      constructor(s = {}) {
        super();
        we(this, Ia);
        ((this.config = s), fe(this, Ia, new Map()));
      }
      build(s, o, u) {
        const d = o.queryKey,
          h = o.queryHash ?? vd(d, o);
        let p = this.get(h);
        return (
          p ||
            ((p = new K1({
              client: s,
              queryKey: d,
              queryHash: h,
              options: s.defaultQueryOptions(o),
              state: u,
              defaultOptions: s.getQueryDefaults(d),
            })),
            this.add(p)),
          p
        );
      }
      add(s) {
        M(this, Ia).has(s.queryHash) ||
          (M(this, Ia).set(s.queryHash, s),
          this.notify({ type: "added", query: s }));
      }
      remove(s) {
        M(this, Ia).get(s.queryHash) === s &&
          (s.destroy(),
          M(this, Ia).delete(s.queryHash),
          this.notify({ type: "removed", query: s }));
      }
      clear() {
        At.batch(() => {
          this.getAll().forEach((s) => {
            this.remove(s);
          });
        });
      }
      get(s) {
        return M(this, Ia).get(s);
      }
      getAll() {
        return [...M(this, Ia).values()];
      }
      find(s) {
        const o = { exact: !0, ...s };
        return this.getAll().find((u) => cp(o, u));
      }
      findAll(s = {}) {
        const o = this.getAll();
        return Object.keys(s).length > 0 ? o.filter((u) => cp(s, u)) : o;
      }
      notify(s) {
        At.batch(() => {
          this.listeners.forEach((o) => {
            o(s);
          });
        });
      }
      onFocus() {
        At.batch(() => {
          this.getAll().forEach((s) => {
            s.onFocus();
          });
        });
      }
      onOnline() {
        At.batch(() => {
          this.getAll().forEach((s) => {
            s.onOnline();
          });
        });
      }
    }),
    (Ia = new WeakMap()),
    Pp),
  tt,
  il,
  sl,
  Zi,
  Ki,
  rl,
  Ji,
  Fi,
  ey,
  P1 =
    ((ey = class {
      constructor(l = {}) {
        we(this, tt);
        we(this, il);
        we(this, sl);
        we(this, Zi);
        we(this, Ki);
        we(this, rl);
        we(this, Ji);
        we(this, Fi);
        (fe(this, tt, l.queryCache || new W1()),
          fe(this, il, l.mutationCache || new $1()),
          fe(this, sl, l.defaultOptions || {}),
          fe(this, Zi, new Map()),
          fe(this, Ki, new Map()),
          fe(this, rl, 0));
      }
      mount() {
        (Io(this, rl)._++,
          M(this, rl) === 1 &&
            (fe(
              this,
              Ji,
              ry.subscribe(async (l) => {
                l &&
                  (await this.resumePausedMutations(), M(this, tt).onFocus());
              }),
            ),
            fe(
              this,
              Fi,
              ru.subscribe(async (l) => {
                l &&
                  (await this.resumePausedMutations(), M(this, tt).onOnline());
              }),
            )));
      }
      unmount() {
        var l, s;
        (Io(this, rl)._--,
          M(this, rl) === 0 &&
            ((l = M(this, Ji)) == null || l.call(this),
            fe(this, Ji, void 0),
            (s = M(this, Fi)) == null || s.call(this),
            fe(this, Fi, void 0)));
      }
      isFetching(l) {
        return M(this, tt).findAll({ ...l, fetchStatus: "fetching" }).length;
      }
      isMutating(l) {
        return M(this, il).findAll({ ...l, status: "pending" }).length;
      }
      getQueryData(l) {
        var o;
        const s = this.defaultQueryOptions({ queryKey: l });
        return (o = M(this, tt).get(s.queryHash)) == null
          ? void 0
          : o.state.data;
      }
      ensureQueryData(l) {
        const s = this.defaultQueryOptions(l),
          o = M(this, tt).build(this, s),
          u = o.state.data;
        return u === void 0
          ? this.fetchQuery(l)
          : (l.revalidateIfStale &&
              o.isStaleByTime(cr(s.staleTime, o)) &&
              this.prefetchQuery(s),
            Promise.resolve(u));
      }
      getQueriesData(l) {
        return M(this, tt)
          .findAll(l)
          .map(({ queryKey: s, state: o }) => [s, o.data]);
      }
      setQueryData(l, s, o) {
        var p;
        const u = this.defaultQueryOptions({ queryKey: l }),
          d =
            (p = M(this, tt).get(u.queryHash)) == null ? void 0 : p.state.data,
          h = z1(s, d);
        if (h !== void 0)
          return M(this, tt)
            .build(this, u)
            .setData(h, { ...o, manual: !0 });
      }
      setQueriesData(l, s, o) {
        return At.batch(() =>
          M(this, tt)
            .findAll(l)
            .map(({ queryKey: u }) => [u, this.setQueryData(u, s, o)]),
        );
      }
      getQueryState(l) {
        var o;
        const s = this.defaultQueryOptions({ queryKey: l });
        return (o = M(this, tt).get(s.queryHash)) == null ? void 0 : o.state;
      }
      removeQueries(l) {
        const s = M(this, tt);
        At.batch(() => {
          s.findAll(l).forEach((o) => {
            s.remove(o);
          });
        });
      }
      resetQueries(l, s) {
        const o = M(this, tt);
        return At.batch(() => {
          const u = o.findAll(l),
            d = new Set(u);
          return (
            u.forEach((h) => {
              h.reset();
            }),
            this.refetchQueries(
              { type: "active", predicate: (h) => d.has(h) },
              s,
            )
          );
        });
      }
      cancelQueries(l, s = {}) {
        const o = { revert: !0, ...s },
          u = At.batch(() =>
            M(this, tt)
              .findAll(l)
              .map((d) => d.cancel(o)),
          );
        return Promise.all(u).then(ra).catch(ra);
      }
      invalidateQueries(l, s = {}) {
        return At.batch(
          () => (
            M(this, tt)
              .findAll(l)
              .forEach((o) => {
                o.invalidate();
              }),
            (l == null ? void 0 : l.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...l,
                    type:
                      (l == null ? void 0 : l.refetchType) ??
                      (l == null ? void 0 : l.type) ??
                      "active",
                  },
                  s,
                )
          ),
        );
      }
      refetchQueries(l, s = {}) {
        const o = { ...s, cancelRefetch: s.cancelRefetch ?? !0 },
          u = At.batch(() =>
            M(this, tt)
              .findAll(l)
              .filter((d) => !d.isDisabled() && !d.isStatic())
              .map((d) => {
                let h = d.fetch(void 0, o);
                return (
                  o.throwOnError || (h = h.catch(ra)),
                  d.state.fetchStatus === "paused" ? Promise.resolve() : h
                );
              }),
          );
        return Promise.all(u).then(ra);
      }
      async query(l) {
        const s = this.defaultQueryOptions(l);
        s.retry === void 0 && (s.retry = !1);
        const o = M(this, tt).build(this, s),
          u = o.isStaleByTime(cr(s.staleTime, o))
            ? await o.fetch(s)
            : o.state.data,
          d = s.select;
        return d ? d(u) : u;
      }
      fetchQuery(l) {
        const s = this.defaultQueryOptions(l);
        s.retry === void 0 && (s.retry = !1);
        const o = M(this, tt).build(this, s);
        return o.isStaleByTime(cr(s.staleTime, o))
          ? o.fetch(s)
          : Promise.resolve(o.state.data);
      }
      prefetchQuery(l) {
        return this.fetchQuery(l).then(ra).catch(ra);
      }
      infiniteQuery(l) {
        return ((l._type = "infinite"), this.query(l));
      }
      fetchInfiniteQuery(l) {
        return ((l._type = "infinite"), this.fetchQuery(l));
      }
      prefetchInfiniteQuery(l) {
        return this.fetchInfiniteQuery(l).then(ra).catch(ra);
      }
      ensureInfiniteQueryData(l) {
        return ((l._type = "infinite"), this.ensureQueryData(l));
      }
      resumePausedMutations() {
        return ru.isOnline()
          ? M(this, il).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return M(this, tt);
      }
      getMutationCache() {
        return M(this, il);
      }
      getDefaultOptions() {
        return M(this, sl);
      }
      setDefaultOptions(l) {
        fe(this, sl, l);
      }
      setQueryDefaults(l, s) {
        M(this, Zi).set(Xl(l), { queryKey: l, defaultOptions: s });
      }
      getQueryDefaults(l) {
        const s = [...M(this, Zi).values()],
          o = {};
        return (
          s.forEach((u) => {
            $i(l, u.queryKey) && Object.assign(o, u.defaultOptions);
          }),
          o
        );
      }
      setMutationDefaults(l, s) {
        M(this, Ki).set(Xl(l), { mutationKey: l, defaultOptions: s });
      }
      getMutationDefaults(l) {
        const s = [...M(this, Ki).values()],
          o = {};
        return (
          s.forEach((u) => {
            $i(l, u.mutationKey) && Object.assign(o, u.defaultOptions);
          }),
          o
        );
      }
      defaultQueryOptions(l) {
        if (l._defaulted) return l;
        const s = {
          ...M(this, sl).queries,
          ...this.getQueryDefaults(l.queryKey),
          ...l,
          _defaulted: !0,
        };
        return (
          s.queryHash || (s.queryHash = vd(s.queryKey, s)),
          s.refetchOnReconnect === void 0 &&
            (s.refetchOnReconnect = s.networkMode !== "always"),
          s.throwOnError === void 0 && (s.throwOnError = !!s.suspense),
          !s.networkMode && s.persister && (s.networkMode = "offlineFirst"),
          s.queryFn === bd && (s.enabled = !1),
          s
        );
      }
      defaultMutationOptions(l) {
        return l != null && l._defaulted
          ? l
          : {
              ...M(this, sl).mutations,
              ...((l == null ? void 0 : l.mutationKey) &&
                this.getMutationDefaults(l.mutationKey)),
              ...l,
              _defaulted: !0,
            };
      }
      clear() {
        (M(this, tt).clear(), M(this, il).clear());
      }
    }),
    (tt = new WeakMap()),
    (il = new WeakMap()),
    (sl = new WeakMap()),
    (Zi = new WeakMap()),
    (Ki = new WeakMap()),
    (rl = new WeakMap()),
    (Ji = new WeakMap()),
    (Fi = new WeakMap()),
    ey);
function dy(l, s) {
  const o = w1(),
    [u] = T.useState(() => new I1(o, l));
  T.useEffect(() => {
    u.setOptions(l);
  }, [u, l]);
  const d = T.useSyncExternalStore(
      T.useCallback((p) => u.subscribe(At.batchCalls(p)), [u]),
      () => u.getCurrentResult(),
      () => u.getCurrentResult(),
    ),
    h = T.useCallback(
      (...p) => {
        u.mutate(p[0], p[1]).catch(ra);
      },
      [u],
    );
  if (d.error && H1(u.options.throwOnError, [d.error])) throw d.error;
  return { ...d, mutate: h, mutateAsync: d.mutate };
}
/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var xd = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
  my = /^[\\/]{2}/;
function e2(l, s) {
  return s + l.replace(/\\/g, "/");
}
var yp = "popstate";
function vp(l) {
  return (
    typeof l == "object" &&
    l != null &&
    "pathname" in l &&
    "search" in l &&
    "hash" in l &&
    "state" in l &&
    "key" in l
  );
}
function t2(l = {}) {
  function s(u, d) {
    var b;
    let h = (b = d.state) == null ? void 0 : b.masked,
      { pathname: p, search: y, hash: v } = h || u.location;
    return fd(
      "",
      { pathname: p, search: y, hash: v },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default",
      h
        ? {
            pathname: u.location.pathname,
            search: u.location.search,
            hash: u.location.hash,
          }
        : void 0,
    );
  }
  function o(u, d) {
    return typeof d == "string" ? d : Ii(d);
  }
  return n2(s, o, null, l);
}
function at(l, s) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(s);
}
function Pa(l, s) {
  if (!l) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function a2() {
  return Math.random().toString(36).substring(2, 10);
}
function bp(l, s) {
  return {
    usr: l.state,
    key: l.key,
    idx: s,
    masked: l.mask
      ? { pathname: l.pathname, search: l.search, hash: l.hash }
      : void 0,
  };
}
function fd(l, s, o = null, u, d) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? es(s) : s),
    state: o,
    key: (s && s.key) || u || a2(),
    mask: d,
  };
}
function Ii({ pathname: l = "/", search: s = "", hash: o = "" }) {
  return (
    s && s !== "?" && (l += s.charAt(0) === "?" ? s : "?" + s),
    o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o),
    l
  );
}
function es(l) {
  let s = {};
  if (l) {
    let o = l.indexOf("#");
    o >= 0 && ((s.hash = l.substring(o)), (l = l.substring(0, o)));
    let u = l.indexOf("?");
    (u >= 0 && ((s.search = l.substring(u)), (l = l.substring(0, u))),
      l && (s.pathname = l));
  }
  return s;
}
function n2(l, s, o, u = {}) {
  let { window: d = document.defaultView, v5Compat: h = !1 } = u,
    p = d.history,
    y = "POP",
    v = null,
    b = S();
  b == null && ((b = 0), p.replaceState({ ...p.state, idx: b }, ""));
  function S() {
    return (p.state || { idx: null }).idx;
  }
  function m() {
    y = "POP";
    let H = S(),
      U = H == null ? null : H - b;
    ((b = H), v && v({ action: y, location: L.location, delta: U }));
  }
  function N(H, U) {
    y = "PUSH";
    let Q = vp(H) ? H : fd(L.location, H, U);
    b = S() + 1;
    let K = bp(Q, b),
      V = L.createHref(Q.mask || Q);
    try {
      p.pushState(K, "", V);
    } catch (X) {
      if (X instanceof DOMException && X.name === "DataCloneError") throw X;
      d.location.assign(V);
    }
    h && v && v({ action: y, location: L.location, delta: 1 });
  }
  function D(H, U) {
    y = "REPLACE";
    let Q = vp(H) ? H : fd(L.location, H, U);
    b = S();
    let K = bp(Q, b),
      V = L.createHref(Q.mask || Q);
    (p.replaceState(K, "", V),
      h && v && v({ action: y, location: L.location, delta: 0 }));
  }
  function k(H) {
    return l2(d, H);
  }
  let L = {
    get action() {
      return y;
    },
    get location() {
      return l(d, p);
    },
    listen(H) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(yp, m),
        (v = H),
        () => {
          (d.removeEventListener(yp, m), (v = null));
        }
      );
    },
    createHref(H) {
      return s(d, H);
    },
    createURL: k,
    encodeLocation(H) {
      let U = k(H);
      return { pathname: U.pathname, search: U.search, hash: U.hash };
    },
    push: N,
    replace: D,
    go(H) {
      return p.go(H);
    },
  };
  return L;
}
function l2(l, s, o = !1) {
  let u = "http://localhost";
  (l &&
    (u = l.location.origin !== "null" ? l.location.origin : l.location.href),
    at(u, "No window.location.(origin|href) available to create URL"));
  let d = typeof s == "string" ? s : Ii(s);
  return (
    (d = d.replace(/ $/, "%20")),
    !o && my.test(d) && (d = u + d),
    new URL(d, u)
  );
}
function hy(l, s, o = "/") {
  return i2(l, s, o, !1);
}
function i2(l, s, o, u, d) {
  let h = typeof s == "string" ? es(s) : s,
    p = xn(h.pathname || "/", o);
  if (p == null) return null;
  let y = s2(l),
    v = null,
    b = y2(p);
  for (let S = 0; v == null && S < y.length; ++S) v = p2(y[S], b, u);
  return v;
}
function s2(l) {
  let s = gy(l);
  return (r2(s), s);
}
function gy(l, s = [], o = [], u = "", d = !1) {
  let h = (p, y, v = d, b) => {
    let S = {
      relativePath: b === void 0 ? p.path || "" : b,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: y,
      route: p,
    };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(u) && v) return;
      (at(
        S.relativePath.startsWith(u),
        `Absolute route path "${S.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (S.relativePath = S.relativePath.slice(u.length)));
    }
    let m = Ma([u, S.relativePath]),
      N = o.concat(S);
    (p.children &&
      p.children.length > 0 &&
      (at(
        p.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
      ),
      gy(p.children, s, N, m, v)),
      !(p.path == null && !p.index) &&
        s.push({
          path: m,
          score: h2(m, p.index),
          routesMeta: N.map((D, k) => {
            let [L, H] = vy(
              D.relativePath,
              D.caseSensitive,
              k === N.length - 1,
            );
            return { ...D, matcher: L, compiledParams: H };
          }),
        }));
  };
  return (
    l.forEach((p, y) => {
      var v;
      if (p.path === "" || !((v = p.path) != null && v.includes("?"))) h(p, y);
      else for (let b of py(p.path)) h(p, y, !0, b);
    }),
    s
  );
}
function py(l) {
  let s = l.split("/");
  if (s.length === 0) return [];
  let [o, ...u] = s,
    d = o.endsWith("?"),
    h = o.replace(/\?$/, "");
  if (u.length === 0) return d ? [h, ""] : [h];
  let p = py(u.join("/")),
    y = [];
  return (
    y.push(...p.map((v) => (v === "" ? h : [h, v].join("/")))),
    d && y.push(...p),
    y.map((v) => (l.startsWith("/") && v === "" ? "/" : v))
  );
}
function r2(l) {
  l.sort((s, o) =>
    s.score !== o.score
      ? o.score - s.score
      : g2(
          s.routesMeta.map((u) => u.childrenIndex),
          o.routesMeta.map((u) => u.childrenIndex),
        ),
  );
}
var o2 = /^:[\w-]+$/,
  u2 = 3,
  c2 = 2,
  f2 = 1,
  d2 = 10,
  m2 = -2,
  xp = (l) => l === "*";
function h2(l, s) {
  let o = l.split("/"),
    u = o.length;
  return (
    o.some(xp) && (u += m2),
    s && (u += c2),
    o
      .filter((d) => !xp(d))
      .reduce((d, h) => d + (o2.test(h) ? u2 : h === "" ? f2 : d2), u)
  );
}
function g2(l, s) {
  return l.length === s.length && l.slice(0, -1).every((u, d) => u === s[d])
    ? l[l.length - 1] - s[s.length - 1]
    : 0;
}
function p2(l, s, o = !1) {
  let { routesMeta: u } = l,
    d = {},
    h = "/",
    p = [];
  for (let y = 0; y < u.length; ++y) {
    let v = u[y],
      b = y === u.length - 1,
      S = h === "/" ? s : s.slice(h.length) || "/",
      m = { path: v.relativePath, caseSensitive: v.caseSensitive, end: b },
      N =
        v.matcher && v.compiledParams
          ? yy(m, S, v.matcher, v.compiledParams)
          : ou(m, S),
      D = v.route;
    if (
      (!N &&
        b &&
        o &&
        !u[u.length - 1].route.index &&
        (N = ou(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          S,
        )),
      !N)
    )
      return null;
    (Object.assign(d, N.params),
      p.push({
        params: d,
        pathname: Ma([h, N.pathname]),
        pathnameBase: x2(Ma([h, N.pathnameBase])),
        route: D,
      }),
      N.pathnameBase !== "/" && (h = Ma([h, N.pathnameBase])));
  }
  return p;
}
function ou(l, s) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [o, u] = vy(l.path, l.caseSensitive, l.end);
  return yy(l, s, o, u);
}
function yy(l, s, o, u) {
  let d = s.match(o);
  if (!d) return null;
  let h = d[0],
    p = Wi(h, 1),
    y = d.slice(1);
  return {
    params: u.reduce((b, { paramName: S, isOptional: m }, N) => {
      if (S === "*") {
        let k = y[N] || "";
        p = Wi(h.slice(0, h.length - k.length), 1);
      }
      const D = y[N];
      return (
        m && !D ? (b[S] = void 0) : (b[S] = (D || "").replace(/%2F/g, "/")),
        b
      );
    }, {}),
    pathname: h,
    pathnameBase: p,
    pattern: l,
  };
}
function vy(l, s = !1, o = !0) {
  Pa(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`,
  );
  let u = [],
    d =
      "^" +
      l
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (p, y, v, b, S) => {
          if ((u.push({ paramName: y, isOptional: v != null }), v)) {
            let m = S.charAt(b + p.length);
            return m && m !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    l.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (d += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (d += "\\/*$")
        : l !== "" && l !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, s ? void 0 : "i"), u]
  );
}
function y2(l) {
  try {
    return l
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      Pa(
        !1,
        `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`,
      ),
      l
    );
  }
}
function xn(l, s) {
  if (s === "/") return l;
  if (!l.toLowerCase().startsWith(s.toLowerCase())) return null;
  let o = s.endsWith("/") ? s.length - 1 : s.length,
    u = l.charAt(o);
  return u && u !== "/" ? null : l.slice(o) || "/";
}
function v2(l, s = "/") {
  let {
      pathname: o,
      search: u = "",
      hash: d = "",
    } = typeof l == "string" ? es(l) : l,
    h;
  return (
    o
      ? ((o = xy(o)),
        o.startsWith("/") || o.startsWith("\\")
          ? (h = Sp(o.substring(1), "/"))
          : (h = Sp(o, s)))
      : (h = s),
    { pathname: h, search: S2(u), hash: w2(d) }
  );
}
function Sp(l, s) {
  let o = Wi(s).split("/");
  return (
    l.split("/").forEach((d) => {
      d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function If(l, s, o, u) {
  return `Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function b2(l) {
  return l.filter(
    (s, o) => o === 0 || (s.route.path && s.route.path.length > 0),
  );
}
function by(l) {
  let s = b2(l);
  return s.map((o, u) => (u === s.length - 1 ? o.pathname : o.pathnameBase));
}
function Sd(l, s, o, u = !1) {
  let d;
  typeof l == "string"
    ? (d = es(l))
    : ((d = { ...l }),
      at(
        !d.pathname || !d.pathname.includes("?"),
        If("?", "pathname", "search", d),
      ),
      at(
        !d.pathname || !d.pathname.includes("#"),
        If("#", "pathname", "hash", d),
      ),
      at(!d.search || !d.search.includes("#"), If("#", "search", "hash", d)));
  let h = l === "" || d.pathname === "",
    p = h ? "/" : d.pathname,
    y;
  if (p == null) y = o;
  else {
    let m = s.length - 1;
    if (!u && p.startsWith("..")) {
      let N = p.split("/");
      for (; N[0] === "..";) (N.shift(), (m -= 1));
      d.pathname = N.join("/");
    }
    y = m >= 0 ? s[m] : "/";
  }
  let v = v2(d, y),
    b = p && p !== "/" && p.endsWith("/"),
    S = (h || p === ".") && o.endsWith("/");
  return (!v.pathname.endsWith("/") && (b || S) && (v.pathname += "/"), v);
}
var xy = (l) => l.replace(/[\\/]{2,}/g, "/"),
  Ma = (l) => xy(l.join("/"));
function Wi(l, s = 0) {
  let o = l.length;
  for (; o > s && l.charCodeAt(o - 1) === 47;) o--;
  return o === l.length ? l : l.slice(0, o);
}
var x2 = (l) => Wi(l).replace(/^\/*/, "/"),
  S2 = (l) => (!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l),
  w2 = (l) => (!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l),
  N2 = class {
    constructor(l, s, o, u = !1) {
      ((this.status = l),
        (this.statusText = s || ""),
        (this.internal = u),
        o instanceof Error
          ? ((this.data = o.toString()), (this.error = o))
          : (this.data = o));
    }
  };
function E2(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.internal == "boolean" &&
    "data" in l
  );
}
function T2(l) {
  let s = l.map((o) => o.route.path).filter(Boolean);
  return Ma(s) || "/";
}
var Sy =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function wy(l, s) {
  let o = l;
  if (typeof o != "string" || !xd.test(o))
    return { absoluteURL: void 0, isExternal: !1, to: o };
  let u = o,
    d = !1;
  if (Sy)
    try {
      let h = new URL(window.location.href),
        p = my.test(o) ? new URL(e2(o, h.protocol)) : new URL(o),
        y = xn(p.pathname, s);
      p.origin === h.origin && y != null
        ? (o = y + p.search + p.hash)
        : (d = !0);
    } catch {
      Pa(
        !1,
        `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: u, isExternal: d, to: o };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var wp = new URL("http://localhost");
function Ny(l) {
  if (l.createURL) return l.createURL("/");
  try {
    return new URL(l.createHref("/"), wp);
  } catch {
    return wp;
  }
}
function Wf(l, s) {
  return (
    l.origin === s.origin &&
    (l.origin !== "null" || (l.protocol === s.protocol && l.host === s.host))
  );
}
function j2(l, s) {
  if (l.startsWith("//")) return !0;
  let o = s.protocol.toLowerCase();
  return l.toLowerCase().startsWith(o)
    ? s.host === "" || l.slice(o.length).startsWith("//")
    : !1;
}
function Ey(l, s, o, u) {
  let d = null;
  try {
    d = l == null ? null : new URL(l, o);
  } catch {}
  let h = new URL(s, o),
    p = d != null && !Wf(d, o),
    y = !Wf(h, o);
  if (u === "reject") {
    if (p || y) throw new Error("External navigation is not allowed");
  } else if (y && (d == null || !j2(l, d) || !Wf(d, h)))
    throw new Error("External navigation is not allowed");
}
var Ty = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ty);
var C2 = ["GET", ...Ty];
new Set(C2);
var z2 = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  "javascript:",
];
function R2(l) {
  try {
    return z2.includes(new URL(l).protocol);
  } catch {
    return !1;
  }
}
var ts = T.createContext(null);
ts.displayName = "DataRouter";
var mu = T.createContext(null);
mu.displayName = "DataRouterState";
var jy = T.createContext(!1);
function _2() {
  return T.useContext(jy);
}
var Cy = T.createContext({ isTransitioning: !1 });
Cy.displayName = "ViewTransition";
var A2 = T.createContext(new Map());
A2.displayName = "Fetchers";
var M2 = T.createContext(null);
M2.displayName = "Await";
var Sa = T.createContext(null);
Sa.displayName = "Navigation";
var yr = T.createContext(null);
yr.displayName = "Location";
var Sn = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Sn.displayName = "Route";
var wd = T.createContext(null);
wd.displayName = "RouteError";
var zy = "REACT_ROUTER_ERROR",
  O2 = "REDIRECT",
  D2 = "ROUTE_ERROR_RESPONSE";
function k2(l) {
  if (l.startsWith(`${zy}:${O2}:{`))
    try {
      let s = JSON.parse(l.slice(28));
      if (
        typeof s == "object" &&
        s &&
        typeof s.status == "number" &&
        typeof s.statusText == "string" &&
        typeof s.location == "string" &&
        typeof s.reloadDocument == "boolean" &&
        typeof s.replace == "boolean"
      )
        return s;
    } catch {}
}
function U2(l) {
  if (l.startsWith(`${zy}:${D2}:{`))
    try {
      let s = JSON.parse(l.slice(40));
      if (
        typeof s == "object" &&
        s &&
        typeof s.status == "number" &&
        typeof s.statusText == "string"
      )
        return new N2(s.status, s.statusText, s.data);
    } catch {}
}
function H2(l, { relative: s } = {}) {
  at(
    vr(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: o, navigator: u } = T.useContext(Sa),
    { hash: d, pathname: h, search: p } = br(l, { relative: s }),
    y = h;
  return (
    o !== "/" && (y = h === "/" ? o : Ma([o, h])),
    u.createHref({ pathname: y, search: p, hash: d })
  );
}
function vr() {
  return T.useContext(yr) != null;
}
function Oa() {
  return (
    at(
      vr(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    T.useContext(yr).location
  );
}
var Ry =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function _y(l) {
  T.useContext(Sa).static || T.useLayoutEffect(l);
}
function L2() {
  let { isDataRoute: l } = T.useContext(Sn);
  return l ? I2() : B2();
}
function B2() {
  at(
    vr(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let l = T.useContext(ts),
    { basename: s, navigator: o } = T.useContext(Sa),
    { matches: u } = T.useContext(Sn),
    { pathname: d } = Oa(),
    h = JSON.stringify(by(u)),
    p = T.useRef(!1);
  return (
    _y(() => {
      p.current = !0;
    }),
    T.useCallback(
      (v, b = {}) => {
        if ((Pa(p.current, Ry), !p.current)) return;
        if (typeof v == "number") {
          o.go(v);
          return;
        }
        let S = Sd(v, JSON.parse(h), d, b.relative === "path");
        (l == null &&
          s !== "/" &&
          (S.pathname = S.pathname === "/" ? s : Ma([s, S.pathname])),
          Ey(
            typeof v == "string" ? v : Ii(v),
            o.createHref(S),
            Ny(o),
            "reject",
          ),
          (b.replace ? o.replace : o.push)(S, b.state, b));
      },
      [s, o, h, d, l],
    )
  );
}
T.createContext(null);
function br(l, { relative: s } = {}) {
  let { matches: o } = T.useContext(Sn),
    { pathname: u } = Oa(),
    d = JSON.stringify(by(o));
  return T.useMemo(() => Sd(l, JSON.parse(d), u, s === "path"), [l, d, u, s]);
}
function q2(l, s) {
  return Ay(l, s);
}
function Ay(l, s, o) {
  var H;
  at(
    vr(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: u } = T.useContext(Sa),
    { matches: d } = T.useContext(Sn),
    h = d[d.length - 1],
    p = h ? h.params : {},
    y = h ? h.pathname : "/",
    v = h ? h.pathnameBase : "/",
    b = h && h.route;
  {
    let U = (b && b.path) || "";
    Oy(
      y,
      !b || U.endsWith("*") || U.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U === "/" ? "*" : `${U}/*`}">.`,
    );
  }
  let S = Oa(),
    m;
  if (s) {
    let U = typeof s == "string" ? es(s) : s;
    (at(
      v === "/" || ((H = U.pathname) == null ? void 0 : H.startsWith(v)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${U.pathname}" was given in the \`location\` prop.`,
    ),
      (m = U));
  } else m = S;
  let N = m.pathname || "/",
    D = N;
  if (v !== "/") {
    let U = v.replace(/^\//, "").split("/");
    D = "/" + N.replace(/^\//, "").split("/").slice(U.length).join("/");
  }
  let k =
    o && o.state.matches.length
      ? o.state.matches.map((U) =>
          Object.assign(U, { route: o.manifest[U.route.id] || U.route }),
        )
      : hy(l, { pathname: D });
  (Pa(
    b || k != null,
    `No routes matched location "${m.pathname}${m.search}${m.hash}" `,
  ),
    Pa(
      k == null ||
        k[k.length - 1].route.element !== void 0 ||
        k[k.length - 1].route.Component !== void 0 ||
        k[k.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let L = X2(
    k &&
      k.map((U) =>
        Object.assign({}, U, {
          params: Object.assign({}, p, U.params),
          pathname: Ma([
            v,
            u.encodeLocation
              ? u.encodeLocation(
                  U.pathname
                    .replace(/%/g, "%25")
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23"),
                ).pathname
              : U.pathname,
          ]),
          pathnameBase:
            U.pathnameBase === "/"
              ? v
              : Ma([
                  v,
                  u.encodeLocation
                    ? u.encodeLocation(
                        U.pathnameBase
                          .replace(/%/g, "%25")
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : U.pathnameBase,
                ]),
        }),
      ),
    d,
    o,
  );
  return s && L
    ? T.createElement(
        yr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...m,
            },
            navigationType: "POP",
          },
        },
        L,
      )
    : L;
}
function Y2() {
  let l = $2(),
    s = E2(l)
      ? `${l.status} ${l.statusText}`
      : l instanceof Error
        ? l.message
        : JSON.stringify(l),
    o = l instanceof Error ? l.stack : null,
    u = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: u },
    h = { padding: "2px 4px", backgroundColor: u },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", l),
    (p = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: h }, "errorElement"),
        " prop on your route.",
      ),
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, s),
      o ? T.createElement("pre", { style: d }, o) : null,
      p,
    )
  );
}
var G2 = T.createElement(Y2, null),
  My = class extends T.Component {
    constructor(l) {
      (super(l),
        (this.state = {
          location: l.location,
          revalidation: l.revalidation,
          error: l.error,
        }));
    }
    static getDerivedStateFromError(l) {
      return { error: l };
    }
    static getDerivedStateFromProps(l, s) {
      return s.location !== l.location ||
        (s.revalidation !== "idle" && l.revalidation === "idle")
        ? { error: l.error, location: l.location, revalidation: l.revalidation }
        : {
            error: l.error !== void 0 ? l.error : s.error,
            location: s.location,
            revalidation: l.revalidation || s.revalidation,
          };
    }
    componentDidCatch(l, s) {
      this.props.onError
        ? this.props.onError(l, s)
        : console.error(
            "React Router caught the following error during render",
            l,
          );
    }
    render() {
      let l = this.state.error;
      if (
        this.context &&
        typeof l == "object" &&
        l &&
        "digest" in l &&
        typeof l.digest == "string"
      ) {
        const o = U2(l.digest);
        o && (l = o);
      }
      let s =
        l !== void 0
          ? T.createElement(
              Sn.Provider,
              { value: this.props.routeContext },
              T.createElement(wd.Provider, {
                value: l,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? T.createElement(V2, { error: l }, s) : s;
    }
  };
My.contextType = jy;
var Pf = new WeakMap();
function V2({ children: l, error: s }) {
  let { basename: o, navigator: u } = T.useContext(Sa);
  if (
    typeof s == "object" &&
    s &&
    "digest" in s &&
    typeof s.digest == "string"
  ) {
    let d = k2(s.digest);
    if (d) {
      let h = Pf.get(s);
      if (h) throw h;
      let p = wy(d.location, o),
        y = p.absoluteURL || p.to;
      if ((Ey(d.location, y, Ny(u), "allow-explicit"), R2(y)))
        throw new Error("Invalid redirect location");
      if (Sy && !Pf.get(s))
        if (p.isExternal || d.reloadDocument) window.location.href = y;
        else {
          const v = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(p.to, {
              replace: d.replace,
            }),
          );
          throw (Pf.set(s, v), v);
        }
      return T.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${y}`,
      });
    }
  }
  return l;
}
function Q2({ routeContext: l, match: s, children: o }) {
  let u = T.useContext(ts);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = s.route.id),
    T.createElement(Sn.Provider, { value: l }, o)
  );
}
function X2(l, s = [], o) {
  let u = o == null ? void 0 : o.state;
  if (l == null) {
    if (!u) return null;
    if (u.errors) l = u.matches;
    else if (s.length === 0 && !u.initialized && u.matches.length > 0)
      l = u.matches;
    else return null;
  }
  let d = l,
    h = u == null ? void 0 : u.errors;
  if (h != null) {
    let S = d.findIndex(
      (m) => m.route.id && (h == null ? void 0 : h[m.route.id]) !== void 0,
    );
    (at(
      S >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`,
    ),
      (d = d.slice(0, Math.min(d.length, S + 1))));
  }
  let p = !1,
    y = -1;
  if (o && u) {
    p = u.renderFallback;
    for (let S = 0; S < d.length; S++) {
      let m = d[S];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (y = S),
        m.route.id)
      ) {
        let { loaderData: N, errors: D } = u,
          k =
            m.route.loader &&
            !N.hasOwnProperty(m.route.id) &&
            (!D || D[m.route.id] === void 0);
        if (m.route.lazy || k) {
          (o.isStatic && (p = !0),
            y >= 0 ? (d = d.slice(0, y + 1)) : (d = [d[0]]));
          break;
        }
      }
    }
  }
  let v = o == null ? void 0 : o.onError,
    b =
      u && v
        ? (S, m) => {
            var N, D;
            v(S, {
              location: u.location,
              params:
                ((D = (N = u.matches) == null ? void 0 : N[0]) == null
                  ? void 0
                  : D.params) ?? {},
              pattern: T2(u.matches),
              errorInfo: m,
            });
          }
        : void 0;
  return d.reduceRight((S, m, N) => {
    let D,
      k = !1,
      L = null,
      H = null;
    u &&
      ((D = h && m.route.id ? h[m.route.id] : void 0),
      (L = m.route.errorElement || G2),
      p &&
        (y < 0 && N === 0
          ? (Oy(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (k = !0),
            (H = null))
          : y === N &&
            ((k = !0), (H = m.route.hydrateFallbackElement || null))));
    let U = s.concat(d.slice(0, N + 1)),
      Q = () => {
        let K;
        return (
          D
            ? (K = L)
            : k
              ? (K = H)
              : m.route.Component
                ? (K = T.createElement(m.route.Component, null))
                : m.route.element
                  ? (K = m.route.element)
                  : (K = S),
          T.createElement(Q2, {
            match: m,
            routeContext: { outlet: S, matches: U, isDataRoute: u != null },
            children: K,
          })
        );
      };
    return u && (m.route.ErrorBoundary || m.route.errorElement || N === 0)
      ? T.createElement(My, {
          location: u.location,
          revalidation: u.revalidation,
          component: L,
          error: D,
          children: Q(),
          routeContext: { outlet: null, matches: U, isDataRoute: !0 },
          onError: b,
        })
      : Q();
  }, null);
}
function Nd(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Z2(l) {
  let s = T.useContext(ts);
  return (at(s, Nd(l)), s);
}
function K2(l) {
  let s = T.useContext(mu);
  return (at(s, Nd(l)), s);
}
function J2(l) {
  let s = T.useContext(Sn);
  return (at(s, Nd(l)), s);
}
function Ed(l) {
  let s = J2(l),
    o = s.matches[s.matches.length - 1];
  return (
    at(
      o.route.id,
      `${l} can only be used on routes that contain a unique "id"`,
    ),
    o.route.id
  );
}
function F2() {
  return Ed("useRouteId");
}
function $2() {
  var u;
  let l = T.useContext(wd),
    s = K2("useRouteError"),
    o = Ed("useRouteError");
  return l !== void 0 ? l : (u = s.errors) == null ? void 0 : u[o];
}
function I2() {
  let { router: l } = Z2("useNavigate"),
    s = Ed("useNavigate"),
    o = T.useRef(!1);
  return (
    _y(() => {
      o.current = !0;
    }),
    T.useCallback(
      async (d, h = {}) => {
        (Pa(o.current, Ry),
          o.current &&
            (typeof d == "number"
              ? await l.navigate(d)
              : await l.navigate(d, { fromRouteId: s, ...h })));
      },
      [l, s],
    )
  );
}
var Np = {};
function Oy(l, s, o) {
  !s && !Np[l] && ((Np[l] = !0), Pa(!1, o));
}
T.memo(W2);
function W2({
  routes: l,
  manifest: s,
  future: o,
  state: u,
  isStatic: d,
  onError: h,
}) {
  return Ay(l, void 0, { manifest: s, state: u, isStatic: d, onError: h });
}
function Pn(l) {
  at(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function P2({
  basename: l = "/",
  children: s = null,
  location: o,
  navigationType: u = "POP",
  navigator: d,
  static: h = !1,
  useTransitions: p,
}) {
  at(
    !vr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let y = l.replace(/^\/*/, "/"),
    v = T.useMemo(
      () => ({
        basename: y,
        navigator: d,
        static: h,
        useTransitions: p,
        future: {},
      }),
      [y, d, h, p],
    );
  typeof o == "string" && (o = es(o));
  let {
      pathname: b = "/",
      search: S = "",
      hash: m = "",
      state: N = null,
      key: D = "default",
      mask: k,
    } = o,
    L = T.useMemo(() => {
      let H = xn(b, y);
      return H == null
        ? null
        : {
            location: {
              pathname: H,
              search: S,
              hash: m,
              state: N,
              key: D,
              mask: k,
            },
            navigationType: u,
          };
    }, [y, b, S, m, N, D, u, k]);
  return (
    Pa(
      L != null,
      `<Router basename="${y}"> is not able to match the URL "${b}${S}${m}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    L == null
      ? null
      : T.createElement(
          Sa.Provider,
          { value: v },
          T.createElement(yr.Provider, { children: s, value: L }),
        )
  );
}
function eS({ children: l, location: s }) {
  return q2(dd(l), s);
}
function dd(l, s = []) {
  let o = [];
  return (
    T.Children.forEach(l, (u, d) => {
      if (!T.isValidElement(u)) return;
      let h = [...s, d];
      if (u.type === T.Fragment) {
        o.push.apply(o, dd(u.props.children, h));
        return;
      }
      (at(
        u.type === Pn,
        `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        at(
          !u.props.index || !u.props.children,
          "An index route cannot have child routes.",
        ));
      let p = {
        id: u.props.id || h.join("-"),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        middleware: u.props.middleware,
        loader: u.props.loader,
        action: u.props.action,
        hydrateFallbackElement: u.props.hydrateFallbackElement,
        HydrateFallback: u.props.HydrateFallback,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.hasErrorBoundary === !0 ||
          u.props.ErrorBoundary != null ||
          u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy,
      };
      (u.props.children && (p.children = dd(u.props.children, h)), o.push(p));
    }),
    o
  );
}
var nu = "get",
  lu = "application/x-www-form-urlencoded";
function hu(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function tS(l) {
  return hu(l) && l.tagName.toLowerCase() === "button";
}
function aS(l) {
  return hu(l) && l.tagName.toLowerCase() === "form";
}
function nS(l) {
  return hu(l) && l.tagName.toLowerCase() === "input";
}
function lS(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function iS(l, s) {
  return l.button === 0 && (!s || s === "_self") && !lS(l);
}
var Po = null;
function sS() {
  if (Po === null)
    try {
      (new FormData(document.createElement("form"), 0), (Po = !1));
    } catch {
      Po = !0;
    }
  return Po;
}
var rS = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ed(l) {
  return l != null && !rS.has(l)
    ? (Pa(
        !1,
        `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lu}"`,
      ),
      null)
    : l;
}
function oS(l, s) {
  let o, u, d, h, p;
  if (aS(l)) {
    let y = l.getAttribute("action");
    ((u = y ? xn(y, s) : null),
      (o = l.getAttribute("method") || nu),
      (d = ed(l.getAttribute("enctype")) || lu),
      (h = new FormData(l)));
  } else if (tS(l) || (nS(l) && (l.type === "submit" || l.type === "image"))) {
    let y = l.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let v = l.getAttribute("formaction") || y.getAttribute("action");
    if (
      ((u = v ? xn(v, s) : null),
      (o = l.getAttribute("formmethod") || y.getAttribute("method") || nu),
      (d =
        ed(l.getAttribute("formenctype")) ||
        ed(y.getAttribute("enctype")) ||
        lu),
      (h = new FormData(y, l)),
      !sS())
    ) {
      let { name: b, type: S, value: m } = l;
      if (S === "image") {
        let N = b ? `${b}.` : "";
        (h.append(`${N}x`, "0"), h.append(`${N}y`, "0"));
      } else b && h.append(b, m);
    }
  } else {
    if (hu(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((o = nu), (u = null), (d = lu), (p = l));
  }
  return (
    h && d === "text/plain" && ((p = h), (h = void 0)),
    { action: u, method: o.toLowerCase(), encType: d, formData: h, body: p }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Td(l, s) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(s);
}
function Dy(l, s, o, u) {
  let d =
    typeof l == "string"
      ? new URL(
          l,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : l;
  return (
    o
      ? d.pathname.endsWith("/")
        ? (d.pathname = `${d.pathname}_.${u}`)
        : (d.pathname = `${d.pathname}.${u}`)
      : d.pathname === "/"
        ? (d.pathname = `_root.${u}`)
        : s && xn(d.pathname, s) === "/"
          ? (d.pathname = `${Wi(s)}/_root.${u}`)
          : (d.pathname = `${Wi(d.pathname)}.${u}`),
    d
  );
}
async function uS(l, s) {
  if (l.id in s) return s[l.id];
  try {
    let o = await import(l.module);
    return ((s[l.id] = o), o);
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${l.module}\`, reloading page...`,
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function cS(l) {
  return l == null
    ? !1
    : l.href == null
      ? l.rel === "preload" &&
        typeof l.imageSrcSet == "string" &&
        typeof l.imageSizes == "string"
      : typeof l.rel == "string" && typeof l.href == "string";
}
async function fS(l, s, o) {
  let u = await Promise.all(
    l.map(async (d) => {
      let h = s.routes[d.route.id];
      if (h) {
        let p = await uS(h, o);
        return p.links ? p.links() : [];
      }
      return [];
    }),
  );
  return gS(
    u
      .flat(1)
      .filter(cS)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" },
      ),
  );
}
function Ep(l, s, o, u, d, h) {
  let p = (v, b) => (o[b] ? v.route.id !== o[b].route.id : !0),
    y = (v, b) => {
      var S;
      return (
        o[b].pathname !== v.pathname ||
        (((S = o[b].route.path) == null ? void 0 : S.endsWith("*")) &&
          o[b].params["*"] !== v.params["*"])
      );
    };
  return h === "assets"
    ? s.filter((v, b) => p(v, b) || y(v, b))
    : h === "data"
      ? s.filter((v, b) => {
          var m;
          let S = u.routes[v.route.id];
          if (!S || !S.hasLoader) return !1;
          if (p(v, b) || y(v, b)) return !0;
          if (v.route.shouldRevalidate) {
            let N = v.route.shouldRevalidate({
              currentUrl: new URL(
                d.pathname + d.search + d.hash,
                window.origin,
              ),
              currentParams: ((m = o[0]) == null ? void 0 : m.params) || {},
              nextUrl: new URL(l, window.origin),
              nextParams: v.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof N == "boolean") return N;
          }
          return !0;
        })
      : [];
}
function dS(l, s, { includeHydrateFallback: o } = {}) {
  return mS(
    l
      .map((u) => {
        let d = s.routes[u.route.id];
        if (!d) return [];
        let h = [d.module];
        return (
          d.clientActionModule && (h = h.concat(d.clientActionModule)),
          d.clientLoaderModule && (h = h.concat(d.clientLoaderModule)),
          o &&
            d.hydrateFallbackModule &&
            (h = h.concat(d.hydrateFallbackModule)),
          d.imports && (h = h.concat(d.imports)),
          h
        );
      })
      .flat(1),
  );
}
function mS(l) {
  return [...new Set(l)];
}
function hS(l) {
  let s = {},
    o = Object.keys(l).sort();
  for (let u of o) s[u] = l[u];
  return s;
}
function gS(l, s) {
  let o = new Set();
  return (
    new Set(s),
    l.reduce((u, d) => {
      let h = JSON.stringify(hS(d));
      return (o.has(h) || (o.add(h), u.push({ key: h, link: d })), u);
    }, [])
  );
}
function jd() {
  let l = T.useContext(ts);
  return (
    Td(
      l,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    l
  );
}
function pS() {
  let l = T.useContext(mu);
  return (
    Td(
      l,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    l
  );
}
var Cd = T.createContext(void 0);
Cd.displayName = "FrameworkContext";
function gu() {
  let l = T.useContext(Cd);
  return (
    Td(l, "You must render this element inside a <HydratedRouter> element"),
    l
  );
}
function yS(l, s) {
  let o = T.useContext(Cd),
    [u, d] = T.useState(!1),
    [h, p] = T.useState(!1),
    {
      onFocus: y,
      onBlur: v,
      onMouseEnter: b,
      onMouseLeave: S,
      onTouchStart: m,
    } = s,
    N = T.useRef(null);
  (T.useEffect(() => {
    if ((l === "render" && p(!0), l === "viewport")) {
      let L = (U) => {
          U.forEach((Q) => {
            p(Q.isIntersecting);
          });
        },
        H = new IntersectionObserver(L, { threshold: 0.5 });
      return (
        N.current && H.observe(N.current),
        () => {
          H.disconnect();
        }
      );
    }
  }, [l]),
    T.useEffect(() => {
      if (u) {
        let L = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(L);
        };
      }
    }, [u]));
  let D = () => {
      d(!0);
    },
    k = () => {
      (d(!1), p(!1));
    };
  return o
    ? l !== "intent"
      ? [h, N, {}]
      : [
          h,
          N,
          {
            onFocus: ir(y, D),
            onBlur: ir(v, k),
            onMouseEnter: ir(b, D),
            onMouseLeave: ir(S, k),
            onTouchStart: ir(m, D),
          },
        ]
    : [!1, N, {}];
}
function ir(l, s) {
  return (o) => {
    (l && l(o), o.defaultPrevented || s(o));
  };
}
function vS({ page: l, ...s }) {
  let o = _2(),
    { nonce: u } = gu(),
    { router: d } = jd(),
    h = T.useMemo(() => hy(d.routes, l, d.basename), [d.routes, l, d.basename]);
  return h
    ? (s.nonce == null && u && (s = { ...s, nonce: u }),
      o
        ? T.createElement(xS, { page: l, matches: h, ...s })
        : T.createElement(SS, { page: l, matches: h, ...s }))
    : null;
}
function bS(l) {
  let { manifest: s, routeModules: o } = gu(),
    [u, d] = T.useState([]);
  return (
    T.useEffect(() => {
      let h = !1;
      return (
        fS(l, s, o).then((p) => {
          h || d(p);
        }),
        () => {
          h = !0;
        }
      );
    }, [l, s, o]),
    u
  );
}
function xS({ page: l, matches: s, ...o }) {
  let u = Oa(),
    { future: d } = gu(),
    { basename: h } = jd(),
    p = T.useMemo(() => {
      if (l === u.pathname + u.search + u.hash) return [];
      let y = Dy(l, h, d.v8_trailingSlashAwareDataRequests, "rsc"),
        v = !1,
        b = [];
      for (let S of s)
        typeof S.route.shouldRevalidate == "function"
          ? (v = !0)
          : b.push(S.route.id);
      return (
        v && b.length > 0 && y.searchParams.set("_routes", b.join(",")),
        [y.pathname + y.search]
      );
    }, [h, d.v8_trailingSlashAwareDataRequests, l, u, s]);
  return T.createElement(
    T.Fragment,
    null,
    p.map((y) =>
      T.createElement("link", {
        key: y,
        rel: "prefetch",
        as: "fetch",
        href: y,
        ...o,
      }),
    ),
  );
}
function SS({ page: l, matches: s, ...o }) {
  let u = Oa(),
    { future: d, manifest: h, routeModules: p } = gu(),
    { basename: y } = jd(),
    { loaderData: v, matches: b } = pS(),
    S = T.useMemo(() => Ep(l, s, b, h, u, "data"), [l, s, b, h, u]),
    m = T.useMemo(() => Ep(l, s, b, h, u, "assets"), [l, s, b, h, u]),
    N = T.useMemo(() => {
      if (l === u.pathname + u.search + u.hash) return [];
      let L = new Set(),
        H = !1;
      if (
        (s.forEach((Q) => {
          var V;
          let K = h.routes[Q.route.id];
          !K ||
            !K.hasLoader ||
            ((!S.some((X) => X.route.id === Q.route.id) &&
              Q.route.id in v &&
              (V = p[Q.route.id]) != null &&
              V.shouldRevalidate) ||
            K.hasClientLoader
              ? (H = !0)
              : L.add(Q.route.id));
        }),
        L.size === 0)
      )
        return [];
      let U = Dy(l, y, d.v8_trailingSlashAwareDataRequests, "data");
      return (
        H &&
          L.size > 0 &&
          U.searchParams.set(
            "_routes",
            s
              .filter((Q) => L.has(Q.route.id))
              .map((Q) => Q.route.id)
              .join(","),
          ),
        [U.pathname + U.search]
      );
    }, [y, d.v8_trailingSlashAwareDataRequests, v, u, h, S, s, l, p]),
    D = T.useMemo(() => dS(m, h), [m, h]),
    k = bS(m);
  return T.createElement(
    T.Fragment,
    null,
    N.map((L) =>
      T.createElement("link", {
        key: L,
        rel: "prefetch",
        as: "fetch",
        href: L,
        ...o,
      }),
    ),
    D.map((L) =>
      T.createElement("link", { key: L, rel: "modulepreload", href: L, ...o }),
    ),
    k.map(({ key: L, link: H }) =>
      T.createElement("link", {
        key: L,
        nonce: o.nonce,
        ...H,
        crossOrigin: H.crossOrigin ?? o.crossOrigin,
      }),
    ),
  );
}
function wS(...l) {
  return (s) => {
    l.forEach((o) => {
      typeof o == "function" ? o(s) : o != null && (o.current = s);
    });
  };
}
var NS =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  NS && (window.__reactRouterVersion = "7.18.4");
} catch {}
function ES({ basename: l, children: s, useTransitions: o, window: u }) {
  let d = T.useRef();
  d.current == null && (d.current = t2({ window: u, v5Compat: !0 }));
  let h = d.current,
    [p, y] = T.useState({ action: h.action, location: h.location }),
    v = T.useCallback(
      (b) => {
        o === !1 ? y(b) : T.startTransition(() => y(b));
      },
      [o],
    );
  return (
    T.useLayoutEffect(() => h.listen(v), [h, v]),
    T.createElement(P2, {
      basename: l,
      children: s,
      location: p.location,
      navigationType: p.action,
      navigator: h,
      useTransitions: o,
    })
  );
}
var $e = T.forwardRef(function (
  {
    onClick: s,
    discover: o = "render",
    prefetch: u = "none",
    relative: d,
    reloadDocument: h,
    replace: p,
    mask: y,
    state: v,
    target: b,
    to: S,
    preventScrollReset: m,
    viewTransition: N,
    defaultShouldRevalidate: D,
    ...k
  },
  L,
) {
  let { basename: H, navigator: U, useTransitions: Q } = T.useContext(Sa),
    K = typeof S == "string" && xd.test(S),
    V = wy(S, H);
  S = V.to;
  let X = H2(S, { relative: d }),
    ee = Oa(),
    $ = null;
  if (y) {
    let ve = Sd(y, [], ee.mask ? ee.mask.pathname : "/", !0);
    (H !== "/" &&
      (ve.pathname = ve.pathname === "/" ? H : Ma([H, ve.pathname])),
      ($ = U.createHref(ve)));
  }
  let [Y, se, me] = yS(u, k),
    Me = CS(S, {
      replace: p,
      mask: y,
      state: v,
      target: b,
      preventScrollReset: m,
      relative: d,
      viewTransition: N,
      defaultShouldRevalidate: D,
      useTransitions: Q,
    });
  function _e(ve) {
    (s && s(ve), ve.defaultPrevented || Me(ve));
  }
  let Ie = !(V.isExternal || h),
    Xe = T.createElement("a", {
      ...k,
      ...me,
      href: (Ie ? $ : void 0) || V.absoluteURL || X,
      onClick: Ie ? _e : s,
      ref: wS(L, se),
      target: b,
      "data-discover": !K && o === "render" ? "true" : void 0,
    });
  return Y && !K
    ? T.createElement(T.Fragment, null, Xe, T.createElement(vS, { page: X }))
    : Xe;
});
$e.displayName = "Link";
var ky = T.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: o = !1,
    className: u = "",
    end: d = !1,
    style: h,
    to: p,
    viewTransition: y,
    children: v,
    ...b
  },
  S,
) {
  let m = br(p, { relative: b.relative }),
    N = Oa(),
    D = T.useContext(mu),
    { navigator: k, basename: L } = T.useContext(Sa),
    H = D != null && MS(m) && y === !0,
    U = k.encodeLocation ? k.encodeLocation(m).pathname : m.pathname,
    Q = N.pathname,
    K =
      D && D.navigation && D.navigation.location
        ? D.navigation.location.pathname
        : null;
  (o ||
    ((Q = Q.toLowerCase()),
    (K = K ? K.toLowerCase() : null),
    (U = U.toLowerCase())),
    K && L && (K = xn(K, L) || K));
  const V = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
  let X = Q === U || (!d && Q.startsWith(U) && Q.charAt(V) === "/"),
    ee =
      K != null &&
      (K === U || (!d && K.startsWith(U) && K.charAt(U.length) === "/")),
    $ = { isActive: X, isPending: ee, isTransitioning: H },
    Y = X ? s : void 0,
    se;
  typeof u == "function"
    ? (se = u($))
    : (se = [
        u,
        X ? "active" : null,
        ee ? "pending" : null,
        H ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let me = typeof h == "function" ? h($) : h;
  return T.createElement(
    $e,
    {
      ...b,
      "aria-current": Y,
      className: se,
      ref: S,
      style: me,
      to: p,
      viewTransition: y,
    },
    typeof v == "function" ? v($) : v,
  );
});
ky.displayName = "NavLink";
var TS = T.forwardRef(
  (
    {
      discover: l = "render",
      fetcherKey: s,
      navigate: o,
      reloadDocument: u,
      replace: d,
      state: h,
      method: p = nu,
      action: y,
      onSubmit: v,
      relative: b,
      preventScrollReset: S,
      viewTransition: m,
      defaultShouldRevalidate: N,
      ...D
    },
    k,
  ) => {
    let { useTransitions: L } = T.useContext(Sa),
      H = _S(),
      U = AS(y, { relative: b }),
      Q = p.toLowerCase() === "get" ? "get" : "post",
      K = typeof y == "string" && xd.test(y),
      V = (X) => {
        if ((v && v(X), X.defaultPrevented)) return;
        X.preventDefault();
        let ee = X.nativeEvent.submitter,
          $ = (ee == null ? void 0 : ee.getAttribute("formmethod")) || p,
          Y = () =>
            H(ee || X.currentTarget, {
              fetcherKey: s,
              method: $,
              navigate: o,
              replace: d,
              state: h,
              relative: b,
              preventScrollReset: S,
              viewTransition: m,
              defaultShouldRevalidate: N,
            });
        L && o !== !1 ? T.startTransition(() => Y()) : Y();
      };
    return T.createElement("form", {
      ref: k,
      method: Q,
      action: U,
      onSubmit: u ? v : V,
      ...D,
      "data-discover": !K && l === "render" ? "true" : void 0,
    });
  },
);
TS.displayName = "Form";
function jS(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Uy(l) {
  let s = T.useContext(ts);
  return (at(s, jS(l)), s);
}
function CS(
  l,
  {
    target: s,
    replace: o,
    mask: u,
    state: d,
    preventScrollReset: h,
    relative: p,
    viewTransition: y,
    defaultShouldRevalidate: v,
    useTransitions: b,
  } = {},
) {
  let S = L2(),
    m = Oa(),
    N = br(l, { relative: p });
  return T.useCallback(
    (D) => {
      if (iS(D, s)) {
        D.preventDefault();
        let k = o !== void 0 ? o : Ii(m) === Ii(N),
          L = () =>
            S(l, {
              replace: k,
              mask: u,
              state: d,
              preventScrollReset: h,
              relative: p,
              viewTransition: y,
              defaultShouldRevalidate: v,
            });
        b ? T.startTransition(() => L()) : L();
      }
    },
    [m, S, N, o, u, d, s, l, h, p, y, v, b],
  );
}
var zS = 0,
  RS = () => `__${String(++zS)}__`;
function _S() {
  let { router: l } = Uy("useSubmit"),
    { basename: s } = T.useContext(Sa),
    o = F2(),
    u = l.fetch,
    d = l.navigate;
  return T.useCallback(
    async (h, p = {}) => {
      let { action: y, method: v, encType: b, formData: S, body: m } = oS(h, s);
      if (p.navigate === !1) {
        let N = p.fetcherKey || RS();
        await u(N, o, p.action || y, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: S,
          body: m,
          formMethod: p.method || v,
          formEncType: p.encType || b,
          flushSync: p.flushSync,
        });
      } else
        await d(p.action || y, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: S,
          body: m,
          formMethod: p.method || v,
          formEncType: p.encType || b,
          replace: p.replace,
          state: p.state,
          fromRouteId: o,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition,
        });
    },
    [u, d, s, o],
  );
}
function AS(l, { relative: s } = {}) {
  let { basename: o } = T.useContext(Sa),
    u = T.useContext(Sn);
  at(u, "useFormAction must be used inside a RouteContext");
  let [d] = u.matches.slice(-1),
    h = { ...br(l || ".", { relative: s }) },
    p = Oa();
  if (l == null) {
    h.search = p.search;
    let y = new URLSearchParams(h.search),
      v = y.getAll("index");
    if (v.some((S) => S === "")) {
      (y.delete("index"),
        v.filter((m) => m).forEach((m) => y.append("index", m)));
      let S = y.toString();
      h.search = S ? `?${S}` : "";
    }
  }
  return (
    (!l || l === ".") &&
      d.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (h.pathname = h.pathname === "/" ? o : Ma([o, h.pathname])),
    Ii(h)
  );
}
function MS(l, { relative: s } = {}) {
  let o = T.useContext(Cy);
  at(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: u } = Uy("useViewTransitionState"),
    d = br(l, { relative: s });
  if (!o.isTransitioning) return !1;
  let h = xn(o.currentLocation.pathname, u) || o.currentLocation.pathname,
    p = xn(o.nextLocation.pathname, u) || o.nextLocation.pathname;
  return ou(d.pathname, p) != null || ou(d.pathname, h) != null;
}
var OS = ay();
const DS = ty(OS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kS = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  US = (l) =>
    l.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, o, u) =>
      u ? u.toUpperCase() : o.toLowerCase(),
    ),
  Tp = (l) => {
    const s = US(l);
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  Hy = (...l) =>
    l
      .filter((s, o, u) => !!s && s.trim() !== "" && u.indexOf(s) === o)
      .join(" ")
      .trim(),
  HS = (l) => {
    for (const s in l)
      if (s.startsWith("aria-") || s === "role" || s === "title") return !0;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var LS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BS = T.forwardRef(
  (
    {
      color: l = "currentColor",
      size: s = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: u,
      className: d = "",
      children: h,
      iconNode: p,
      ...y
    },
    v,
  ) =>
    T.createElement(
      "svg",
      {
        ref: v,
        ...LS,
        width: s,
        height: s,
        stroke: l,
        strokeWidth: u ? (Number(o) * 24) / Number(s) : o,
        className: Hy("lucide", d),
        ...(!h && !HS(y) && { "aria-hidden": "true" }),
        ...y,
      },
      [
        ...p.map(([b, S]) => T.createElement(b, S)),
        ...(Array.isArray(h) ? h : [h]),
      ],
    ),
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ue = (l, s) => {
  const o = T.forwardRef(({ className: u, ...d }, h) =>
    T.createElement(BS, {
      ref: h,
      iconNode: s,
      className: Hy(`lucide-${kS(Tp(l))}`, `lucide-${l}`, u),
      ...d,
    }),
  );
  return ((o.displayName = Tp(l)), o);
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qS = [
    ["path", { d: "m7 7 10 10", key: "1fmybs" }],
    ["path", { d: "M17 7v10H7", key: "6fjiku" }],
  ],
  YS = Ue("arrow-down-right", qS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GS = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Nt = Ue("arrow-right", GS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VS = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  QS = Ue("book-open", VS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XS = [
    [
      "path",
      {
        d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
        key: "1fy3hk",
      },
    ],
  ],
  td = Ue("bookmark", XS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZS = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  KS = Ue("calendar", ZS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JS = [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }],
  ],
  FS = Ue("chart-column", JS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $S = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  fr = Ue("check", $S);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IS = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  WS = Ue("chevron-right", IS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PS = [
    ["path", { d: "M12 6v6h4", key: "135r8i" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  ew = Ue("clock-3", PS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tw = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  jp = Ue("clock", tw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aw = [
    [
      "path",
      {
        d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
        key: "9ktpf1",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  nw = Ue("compass", aw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  iw = Ue("copy", lw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  rw = Ue("file-text", sw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ow = [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih",
      },
    ],
  ],
  uw = Ue("flame", ow);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cw = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  Ly = Ue("instagram", cw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fw = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  dw = Ue("layers", fw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mw = [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ],
  hw = Ue("lightbulb", mw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gw = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  By = Ue("linkedin", gw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pw = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  yw = Ue("mail", pw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vw = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  bw = Ue("map-pin", vw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xw = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  Sw = Ue("minus", xw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ww = [
    [
      "path",
      {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc",
      },
    ],
    [
      "circle",
      { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
    ],
    [
      "circle",
      { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
    ],
    [
      "circle",
      { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
    ],
    [
      "circle",
      { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
    ],
  ],
  Nw = Ue("palette", ww);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ew = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  Tw = Ue("play", Ew);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jw = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  Cw = Ue("plus", jw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zw = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  Rw = Ue("quote", zw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _w = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  qy = Ue("search", _w);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Aw = [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    [
      "line",
      { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
    ],
    [
      "line",
      { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
    ],
  ],
  Mw = Ue("share-2", Aw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ow = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  Yy = Ue("sparkles", Ow);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dw = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  kw = Ue("trending-up", Dw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uw = [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec",
      },
    ],
    [
      "rect",
      { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
    ],
  ],
  Hw = Ue("video", Uw);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lw = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  md = Ue("x", Lw);
function Bw(l) {
  if (typeof document > "u") return;
  let s = document.head || document.getElementsByTagName("head")[0],
    o = document.createElement("style");
  ((o.type = "text/css"),
    s.appendChild(o),
    o.styleSheet
      ? (o.styleSheet.cssText = l)
      : o.appendChild(document.createTextNode(l)));
}
const qw = (l) => {
    switch (l) {
      case "success":
        return Vw;
      case "info":
        return Xw;
      case "warning":
        return Qw;
      case "error":
        return Zw;
      default:
        return null;
    }
  },
  Yw = Array(12).fill(0),
  Gw = ({ visible: l, className: s }) =>
    F.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", s].filter(Boolean).join(" "),
        "data-visible": l,
      },
      F.createElement(
        "div",
        { className: "sonner-spinner" },
        Yw.map((o, u) =>
          F.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${u}`,
          }),
        ),
      ),
    ),
  Vw = F.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    F.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  Qw = F.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    F.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  Xw = F.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    F.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  Zw = F.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    F.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  Kw = F.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
    },
    F.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    F.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  Jw = () => {
    const [l, s] = F.useState(document.hidden);
    return (
      F.useEffect(() => {
        const o = () => {
          s(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", o),
          () => document.removeEventListener("visibilitychange", o)
        );
      }, []),
      l
    );
  };
let Fw = 1;
const $w = 100,
  Cp = (l) => {
    var s;
    return typeof (l == null ? void 0 : l.id) == "number" ||
      (l == null || (s = l.id) == null ? void 0 : s.length) > 0
      ? l.id
      : Fw++;
  };
class Iw {
  constructor() {
    ((this.subscribe = (s) => (
      this.subscribers.push(s),
      this.getActiveToasts().forEach((o) => s(o)),
      () => {
        const o = this.subscribers.indexOf(s);
        this.subscribers.splice(o, 1);
      }
    )),
      (this.publish = (s) => {
        this.subscribers.forEach((o) => o(s));
      }),
      (this.addToast = (s) => {
        (this.publish(s),
          (this.toasts = [...this.toasts, s]),
          this.trimHistory());
      }),
      (this.trimHistory = () => {
        let s = this.toasts.length - $w;
        s <= 0 ||
          (this.toasts = this.toasts.filter((o) =>
            s > 0 && this.dismissedToasts.has(o.id)
              ? (this.dismissedToasts.delete(o.id), s--, !1)
              : !0,
          ));
      }),
      (this.create = (s) => {
        const { message: o, ...u } = s,
          d = Cp(s),
          h = this.pendingDismissals.get(d);
        h !== void 0 &&
          (cancelAnimationFrame(h),
          this.pendingDismissals.delete(d),
          this.dismissedToasts.delete(d));
        const p = this.dismissedToasts.has(d),
          y = s.dismissible === void 0 ? !0 : s.dismissible;
        return (
          p &&
            (this.dismissedToasts.delete(d),
            (this.toasts = this.toasts.filter((b) => b.id !== d))),
          (p ? void 0 : this.toasts.find((b) => b.id === d))
            ? (this.toasts = this.toasts.map((b) =>
                b.id === d
                  ? (this.publish({ ...b, ...s, id: d, title: o }),
                    { ...b, ...s, id: d, dismissible: y, title: o })
                  : b,
              ))
            : this.addToast({ title: o, ...u, dismissible: y, id: d }),
          d
        );
      }),
      (this.dismiss = (s) => {
        if (s == null)
          return (
            this.getActiveToasts().forEach((u) => {
              (this.dismissedToasts.add(u.id),
                this.subscribers.forEach((d) => d({ id: u.id, dismiss: !0 })));
            }),
            s
          );
        this.dismissedToasts.add(s);
        const o = this.pendingDismissals.get(s);
        return (
          o !== void 0 && cancelAnimationFrame(o),
          this.pendingDismissals.set(
            s,
            requestAnimationFrame(() => {
              (this.pendingDismissals.delete(s),
                this.subscribers.forEach((u) => u({ id: s, dismiss: !0 })));
            }),
          ),
          s
        );
      }),
      (this.message = (s, o) =>
        this.create({ ...o, message: s, type: void 0 })),
      (this.error = (s, o) => this.create({ ...o, message: s, type: "error" })),
      (this.success = (s, o) =>
        this.create({ ...o, type: "success", message: s })),
      (this.info = (s, o) => this.create({ ...o, type: "info", message: s })),
      (this.warning = (s, o) =>
        this.create({ ...o, type: "warning", message: s })),
      (this.loading = (s, o) =>
        this.create({ ...o, type: "loading", message: s })),
      (this.promise = (s, o) => {
        if (!o) return;
        let u;
        o.loading !== void 0 &&
          (u = this.create({
            ...o,
            promise: s,
            type: "loading",
            message: o.loading,
            description:
              typeof o.description != "function" ? o.description : void 0,
          }));
        const d = Promise.resolve(s instanceof Function ? s() : s);
        let h = u !== void 0,
          p;
        const y = d
            .then(async (b) => {
              if (((p = ["resolve", b]), F.isValidElement(b)))
                ((h = !1), this.create({ id: u, type: "default", message: b }));
              else if (Pw(b) && !b.ok) {
                h = !1;
                const m =
                    typeof o.error == "function"
                      ? await o.error(`HTTP error! status: ${b.status}`)
                      : o.error,
                  N =
                    typeof o.description == "function"
                      ? await o.description(`HTTP error! status: ${b.status}`)
                      : o.description,
                  k =
                    typeof m == "object" && !F.isValidElement(m)
                      ? m
                      : { message: m };
                this.create({ id: u, type: "error", description: N, ...k });
              } else if (b instanceof Error) {
                h = !1;
                const m =
                    typeof o.error == "function" ? await o.error(b) : o.error,
                  N =
                    typeof o.description == "function"
                      ? await o.description(b)
                      : o.description,
                  k =
                    typeof m == "object" && !F.isValidElement(m)
                      ? m
                      : { message: m };
                this.create({ id: u, type: "error", description: N, ...k });
              } else if (o.success !== void 0) {
                h = !1;
                const m =
                    typeof o.success == "function"
                      ? await o.success(b)
                      : o.success,
                  N =
                    typeof o.description == "function"
                      ? await o.description(b)
                      : o.description,
                  k =
                    typeof m == "object" && !F.isValidElement(m)
                      ? m
                      : { message: m };
                this.create({ id: u, type: "success", description: N, ...k });
              }
            })
            .catch(async (b) => {
              if (((p = ["reject", b]), o.error !== void 0)) {
                h = !1;
                const S =
                    typeof o.error == "function" ? await o.error(b) : o.error,
                  m =
                    typeof o.description == "function"
                      ? await o.description(b)
                      : o.description,
                  D =
                    typeof S == "object" && !F.isValidElement(S)
                      ? S
                      : { message: S };
                this.create({ id: u, type: "error", description: m, ...D });
              }
            })
            .finally(() => {
              (h && (this.dismiss(u), (u = void 0)),
                o.finally == null || o.finally.call(o));
            }),
          v = () =>
            new Promise((b, S) =>
              y.then(() => (p[0] === "reject" ? S(p[1]) : b(p[1]))).catch(S),
            );
        return typeof u != "string" && typeof u != "number"
          ? { unwrap: v }
          : Object.assign(u, { unwrap: v });
      }),
      (this.custom = (s, o) => {
        const u = Cp(o);
        return (this.create({ ...o, jsx: s(u), id: u, type: void 0 }), u);
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((s) => !this.dismissedToasts.has(s.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()),
      (this.pendingDismissals = new Map()));
  }
}
const $t = new Iw(),
  Ww = (l, s) => $t.message(l, s),
  Pw = (l) =>
    l &&
    typeof l == "object" &&
    "ok" in l &&
    typeof l.ok == "boolean" &&
    "status" in l &&
    typeof l.status == "number",
  e4 = Ww,
  t4 = () => $t.toasts,
  a4 = () => $t.getActiveToasts(),
  ol = Object.assign(
    e4,
    {
      success: $t.success,
      info: $t.info,
      warning: $t.warning,
      error: $t.error,
      custom: $t.custom,
      message: $t.message,
      promise: $t.promise,
      dismiss: $t.dismiss,
      loading: $t.loading,
    },
    { getHistory: t4, getToasts: a4 },
  );
Bw(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function eu(l) {
  return l.label !== void 0;
}
const n4 = 3,
  l4 = "24px",
  i4 = "16px",
  zp = 4e3,
  s4 = 356,
  r4 = 14,
  o4 = 45,
  u4 = 200;
function Ka(...l) {
  return l.filter(Boolean).join(" ");
}
function c4(l) {
  const [s, o] = l.split("-"),
    u = [];
  return (s && u.push(s), o && u.push(o), u);
}
const f4 = (l) => {
  var s, o, u, d, h, p, y, v, b;
  const {
      invert: S,
      toast: m,
      unstyled: N,
      interacting: D,
      setHeights: k,
      visibleToasts: L,
      heights: H,
      index: U,
      toasts: Q,
      expanded: K,
      removeToast: V,
      defaultRichColors: X,
      closeButton: ee,
      style: $,
      cancelButtonStyle: Y,
      actionButtonStyle: se,
      className: me = "",
      descriptionClassName: Me = "",
      duration: _e,
      position: Ie,
      gap: Xe,
      expandByDefault: ve,
      classNames: G,
      icons: te,
      closeButtonAriaLabel: re = "Close toast",
    } = l,
    [he, J] = F.useState(null),
    [Fe, be] = F.useState(null),
    [He, w] = F.useState(!1),
    [O, Z] = F.useState(!1),
    [P, ye] = F.useState(!1),
    [W, Ne] = F.useState(!1),
    [ae, ue] = F.useState(!1),
    [gt, oa] = F.useState(0),
    [wn, It] = F.useState(0),
    Pe = F.useRef(m.duration || _e || zp),
    Be = F.useRef(null),
    ot = F.useRef(null),
    fl = U === 0,
    Da = U + 1 <= L,
    ut = m.type,
    dl = ut ?? "default",
    Wt = m.dismissible !== !1,
    ls = m.className || "",
    Fl = m.descriptionClassName || "",
    Nn = F.useMemo(
      () => H.findIndex((ge) => ge.toastId === m.id) || 0,
      [H, m.id],
    ),
    Sr = F.useMemo(() => {
      var ge;
      return (ge = m.closeButton) != null ? ge : ee;
    }, [m.closeButton, ee]),
    wa = F.useMemo(() => m.duration || _e || zp, [m.duration, _e]),
    ml = F.useRef(0),
    ka = F.useRef(0),
    wr = F.useRef(0),
    en = F.useRef(null),
    [is, ss] = Ie.split("-"),
    $l = F.useMemo(
      () => H.reduce((ge, ct, nt) => (nt >= Nn ? ge : ge + ct.height), 0),
      [H, Nn],
    ),
    Nr = Jw(),
    ua = F.useMemo(() => {
      var ge;
      return (ge = l.swipeDirections) != null ? ge : c4(Ie);
    }, [l.swipeDirections, Ie]),
    Ut = m.invert || S,
    rs = ut === "loading";
  ((ka.current = F.useMemo(() => Nn * Xe + $l, [Nn, $l])),
    F.useEffect(() => {
      Pe.current = wa;
    }, [wa]),
    F.useEffect(() => {
      w(!0);
    }, []),
    F.useEffect(() => {
      const ge = ot.current;
      if (ge) {
        const ct = ge.getBoundingClientRect().height;
        return (
          It(ct),
          k((nt) => [
            { toastId: m.id, height: ct, position: m.position },
            ...nt,
          ]),
          () => k((nt) => nt.filter((Ve) => Ve.toastId !== m.id))
        );
      }
    }, [k, m.id]),
    F.useLayoutEffect(() => {
      if (!He) return;
      const ge = ot.current,
        ct = ge.style.height;
      ge.style.height = "auto";
      const nt = ge.getBoundingClientRect().height;
      ((ge.style.height = ct),
        It(nt),
        k((Ve) =>
          Ve.find((De) => De.toastId === m.id)
            ? Ve.map((De) => (De.toastId === m.id ? { ...De, height: nt } : De))
            : [{ toastId: m.id, height: nt, position: m.position }, ...Ve],
        ));
    }, [He, m.title, m.description, k, m.id, m.jsx, m.action, m.cancel]));
  const Na = F.useCallback(() => {
    (Z(!0),
      oa(ka.current),
      k((ge) => ge.filter((ct) => ct.toastId !== m.id)),
      setTimeout(() => {
        V(m);
      }, u4));
  }, [m, V, k, ka]);
  (F.useEffect(() => {
    if (
      (m.promise && ut === "loading") ||
      m.duration === 1 / 0 ||
      m.type === "loading"
    )
      return;
    let ge;
    return (
      K || D || Nr
        ? (() => {
            if (wr.current < ml.current) {
              const Ve = new Date().getTime() - ml.current;
              Pe.current = Pe.current - Ve;
            }
            wr.current = new Date().getTime();
          })()
        : (() => {
            Pe.current !== 1 / 0 &&
              ((ml.current = new Date().getTime()),
              (ge = setTimeout(() => {
                (m.onAutoClose == null || m.onAutoClose.call(m, m), Na());
              }, Pe.current)));
          })(),
      () => clearTimeout(ge)
    );
  }, [K, D, m, ut, Nr, Na]),
    F.useEffect(() => {
      m.delete && (Na(), m.onDismiss == null || m.onDismiss.call(m, m));
    }, [Na, m.delete]));
  function os() {
    var ge;
    if (te != null && te.loading) {
      var ct;
      return F.createElement(
        "div",
        {
          className: Ka(
            G == null ? void 0 : G.loader,
            m == null || (ct = m.classNames) == null ? void 0 : ct.loader,
            "sonner-loader",
          ),
          "data-visible": ut === "loading",
        },
        te.loading,
      );
    }
    return F.createElement(Gw, {
      className: Ka(
        G == null ? void 0 : G.loader,
        m == null || (ge = m.classNames) == null ? void 0 : ge.loader,
      ),
      visible: ut === "loading",
    });
  }
  const Il = m.icon || (te == null ? void 0 : te[ut]) || qw(ut);
  var Er, us;
  return F.createElement(
    "li",
    {
      tabIndex: 0,
      ref: ot,
      className: Ka(
        me,
        ls,
        G == null ? void 0 : G.toast,
        m == null || (s = m.classNames) == null ? void 0 : s.toast,
        G == null ? void 0 : G[dl],
        m == null || (o = m.classNames) == null ? void 0 : o[dl],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (Er = m.richColors) != null ? Er : X,
      "data-styled": !(m.jsx || m.unstyled || N),
      "data-mounted": He,
      "data-promise": !!m.promise,
      "data-swiped": ae,
      "data-removed": O,
      "data-visible": Da,
      "data-y-position": is,
      "data-x-position": ss,
      "data-index": U,
      "data-front": fl,
      "data-swiping": P,
      "data-dismissible": Wt,
      "data-type": ut,
      "data-invert": Ut,
      "data-swipe-out": W,
      "data-swipe-direction": Fe,
      "data-expanded": !!(K || (ve && He)),
      "data-testid": m.testId,
      style: {
        "--index": U,
        "--toasts-before": U,
        "--z-index": Q.length - U,
        "--offset": `${O ? gt : ka.current}px`,
        "--initial-height": ve ? "auto" : `${wn}px`,
        ...$,
        ...m.style,
      },
      onDragEnd: () => {
        (ye(!1), J(null), (en.current = null));
      },
      onPointerDown: (ge) => {
        ge.button !== 2 &&
          (rs ||
            !Wt ||
            ((Be.current = new Date()),
            oa(ka.current),
            ge.target.setPointerCapture(ge.pointerId),
            ge.target.tagName !== "BUTTON" &&
              (ye(!0), (en.current = { x: ge.clientX, y: ge.clientY }))));
      },
      onPointerUp: () => {
        var ge, ct, nt;
        if (W || !Wt) return;
        en.current = null;
        const Ve = Number(
            ((ge = ot.current) == null
              ? void 0
              : ge.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Gt = Number(
            ((ct = ot.current) == null
              ? void 0
              : ct.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          De =
            new Date().getTime() -
            ((nt = Be.current) == null ? void 0 : nt.getTime()),
          Vt = he === "x" ? Ve : Gt,
          ca = Math.abs(Vt) / De;
        if (
          (he === "x"
            ? ua.includes(Ve > 0 ? "right" : "left")
            : ua.includes(Gt > 0 ? "bottom" : "top")) &&
          (Math.abs(Vt) >= o4 || ca > 0.11)
        ) {
          (oa(ka.current),
            m.onDismiss == null || m.onDismiss.call(m, m),
            be(
              he === "x" ? (Ve > 0 ? "right" : "left") : Gt > 0 ? "down" : "up",
            ),
            Na(),
            Ne(!0));
          return;
        } else {
          var Ht, En;
          ((Ht = ot.current) == null ||
            Ht.style.setProperty("--swipe-amount-x", "0px"),
            (En = ot.current) == null ||
              En.style.setProperty("--swipe-amount-y", "0px"));
        }
        (ue(!1), ye(!1), J(null));
      },
      onPointerMove: (ge) => {
        var ct, nt, Ve;
        if (
          !en.current ||
          !Wt ||
          ((ct = window.getSelection()) == null
            ? void 0
            : ct.toString().length) > 0
        )
          return;
        const De = ge.clientY - en.current.y,
          Vt = ge.clientX - en.current.x;
        !he &&
          (Math.abs(Vt) > 1 || Math.abs(De) > 1) &&
          J(Math.abs(Vt) > Math.abs(De) ? "x" : "y");
        let ca = { x: 0, y: 0 };
        const cs = (Ht) => 1 / (1.5 + Math.abs(Ht) / 20);
        if (he === "y") {
          if (ua.includes("top") || ua.includes("bottom"))
            if (
              (ua.includes("top") && De < 0) ||
              (ua.includes("bottom") && De > 0)
            )
              ca.y = De;
            else {
              const Ht = De * cs(De);
              ca.y = Math.abs(Ht) < Math.abs(De) ? Ht : De;
            }
        } else if (he === "x" && (ua.includes("left") || ua.includes("right")))
          if (
            (ua.includes("left") && Vt < 0) ||
            (ua.includes("right") && Vt > 0)
          )
            ca.x = Vt;
          else {
            const Ht = Vt * cs(Vt);
            ca.x = Math.abs(Ht) < Math.abs(Vt) ? Ht : Vt;
          }
        ((Math.abs(ca.x) > 0 || Math.abs(ca.y) > 0) && ue(!0),
          (nt = ot.current) == null ||
            nt.style.setProperty("--swipe-amount-x", `${ca.x}px`),
          (Ve = ot.current) == null ||
            Ve.style.setProperty("--swipe-amount-y", `${ca.y}px`));
      },
    },
    Sr && !m.jsx && ut !== "loading"
      ? F.createElement(
          "button",
          {
            "aria-label": re,
            "data-disabled": rs,
            "data-close-button": !0,
            onClick:
              rs || !Wt
                ? () => {}
                : () => {
                    (Na(), m.onDismiss == null || m.onDismiss.call(m, m));
                  },
            className: Ka(
              G == null ? void 0 : G.closeButton,
              m == null || (u = m.classNames) == null ? void 0 : u.closeButton,
            ),
          },
          (us = te == null ? void 0 : te.close) != null ? us : Kw,
        )
      : null,
    (ut || m.icon || m.promise) &&
      m.icon !== null &&
      ((te == null ? void 0 : te[ut]) !== null || m.icon)
      ? F.createElement(
          "div",
          {
            "data-icon": "",
            className: Ka(
              G == null ? void 0 : G.icon,
              m == null || (d = m.classNames) == null ? void 0 : d.icon,
            ),
          },
          ut === "loading" ? m.icon || os() : m.promise ? os() : null,
          ut !== "loading" ? Il : null,
        )
      : null,
    F.createElement(
      "div",
      {
        "data-content": "",
        className: Ka(
          G == null ? void 0 : G.content,
          m == null || (h = m.classNames) == null ? void 0 : h.content,
        ),
      },
      F.createElement(
        "div",
        {
          "data-title": "",
          className: Ka(
            G == null ? void 0 : G.title,
            m == null || (p = m.classNames) == null ? void 0 : p.title,
          ),
        },
        m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title,
      ),
      m.description
        ? F.createElement(
            "div",
            {
              "data-description": "",
              className: Ka(
                Me,
                Fl,
                G == null ? void 0 : G.description,
                m == null || (y = m.classNames) == null
                  ? void 0
                  : y.description,
              ),
            },
            typeof m.description == "function"
              ? m.description()
              : m.description,
          )
        : null,
    ),
    F.isValidElement(m.cancel)
      ? m.cancel
      : m.cancel && eu(m.cancel)
        ? F.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: m.cancelButtonStyle || Y,
              onClick: (ge) => {
                eu(m.cancel) &&
                  Wt &&
                  (m.cancel.onClick == null ||
                    m.cancel.onClick.call(m.cancel, ge),
                  Na());
              },
              className: Ka(
                G == null ? void 0 : G.cancelButton,
                m == null || (v = m.classNames) == null
                  ? void 0
                  : v.cancelButton,
              ),
            },
            m.cancel.label,
          )
        : null,
    F.isValidElement(m.action)
      ? m.action
      : m.action && eu(m.action)
        ? F.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: m.actionButtonStyle || se,
              onClick: (ge) => {
                eu(m.action) &&
                  (m.action.onClick == null ||
                    m.action.onClick.call(m.action, ge),
                  !ge.defaultPrevented && Na());
              },
              className: Ka(
                G == null ? void 0 : G.actionButton,
                m == null || (b = m.classNames) == null
                  ? void 0
                  : b.actionButton,
              ),
            },
            m.action.label,
          )
        : null,
  );
};
function Rp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const l = document.documentElement.getAttribute("dir");
  return l === "auto" || !l
    ? window.getComputedStyle(document.documentElement).direction
    : l;
}
function d4(l, s) {
  const o = {};
  return (
    [l, s].forEach((u, d) => {
      const h = d === 1,
        p = h ? "--mobile-offset" : "--offset",
        y = h ? i4 : l4;
      function v(b) {
        ["top", "right", "bottom", "left"].forEach((S) => {
          o[`${p}-${S}`] = typeof b == "number" ? `${b}px` : b;
        });
      }
      typeof u == "number" || typeof u == "string"
        ? v(u)
        : typeof u == "object"
          ? ["top", "right", "bottom", "left"].forEach((b) => {
              u[b] === void 0
                ? (o[`${p}-${b}`] = y)
                : (o[`${p}-${b}`] =
                    typeof u[b] == "number" ? `${u[b]}px` : u[b]);
            })
          : v(y);
    }),
    o
  );
}
const m4 = F.forwardRef(function (s, o) {
    const {
        id: u,
        invert: d,
        position: h = "bottom-right",
        hotkey: p = ["altKey", "KeyT"],
        expand: y,
        closeButton: v,
        className: b,
        offset: S,
        mobileOffset: m,
        theme: N = "light",
        richColors: D,
        duration: k,
        style: L,
        visibleToasts: H = n4,
        toastOptions: U,
        dir: Q = Rp(),
        gap: K = r4,
        icons: V,
        customAriaLabel: X,
        containerAriaLabel: ee = "Notifications",
      } = s,
      [$, Y] = F.useState([]),
      se = F.useMemo(
        () =>
          u
            ? $.filter((w) => w.toasterId === u)
            : $.filter((w) => !w.toasterId),
        [$, u],
      ),
      me = F.useMemo(
        () =>
          Array.from(
            new Set(
              [h].concat(se.filter((w) => w.position).map((w) => w.position)),
            ),
          ),
        [se, h],
      ),
      [Me, _e] = F.useState([]),
      [Ie, Xe] = F.useState(!1),
      [ve, G] = F.useState(!1),
      [te, re] = F.useState(
        N !== "system"
          ? N
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      he = F.useRef(null),
      J = p.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      Fe = F.useRef(null),
      be = F.useRef(!1),
      He = F.useCallback((w) => {
        Y((O) => {
          var Z;
          return (
            ((Z = O.find((P) => P.id === w.id)) != null && Z.delete) ||
              $t.dismiss(w.id),
            O.filter(({ id: P }) => P !== w.id)
          );
        });
      }, []);
    return (
      F.useEffect(
        () =>
          $t.subscribe((w) => {
            if (w.dismiss) {
              requestAnimationFrame(() => {
                Y((O) =>
                  O.map((Z) => (Z.id === w.id ? { ...Z, delete: !0 } : Z)),
                );
              });
              return;
            }
            setTimeout(() => {
              DS.flushSync(() => {
                Y((O) => {
                  const Z = O.findIndex((P) => P.id === w.id);
                  return Z !== -1
                    ? [...O.slice(0, Z), { ...O[Z], ...w }, ...O.slice(Z + 1)]
                    : [w, ...O];
                });
              });
            });
          }),
        [],
      ),
      F.useEffect(() => {
        if (N !== "system") {
          re(N);
          return;
        }
        if (
          (N === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? re("dark")
              : re("light")),
          typeof window > "u")
        )
          return;
        const w = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          w.addEventListener("change", ({ matches: O }) => {
            re(O ? "dark" : "light");
          });
        } catch {
          w.addListener(({ matches: Z }) => {
            try {
              re(Z ? "dark" : "light");
            } catch (P) {
              console.error(P);
            }
          });
        }
      }, [N]),
      F.useEffect(() => {
        $.length <= 1 && Xe(!1);
      }, [$]),
      F.useEffect(() => {
        const w = (O) => {
          var Z;
          if (p.length > 0 && p.every((W) => O[W] || O.code === W)) {
            var ye;
            (Xe(!0), (ye = he.current) == null || ye.focus());
          }
          O.code === "Escape" &&
            (document.activeElement === he.current ||
              ((Z = he.current) != null &&
                Z.contains(document.activeElement))) &&
            Xe(!1);
        };
        return (
          document.addEventListener("keydown", w),
          () => document.removeEventListener("keydown", w)
        );
      }, [p]),
      F.useEffect(() => {
        if (he.current)
          return () => {
            Fe.current &&
              (Fe.current.focus({ preventScroll: !0 }),
              (Fe.current = null),
              (be.current = !1));
          };
      }, [he.current]),
      F.createElement(
        "section",
        {
          ref: o,
          "aria-label": X ?? `${ee} ${J}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
          "data-react-aria-top-layer": !0,
        },
        me.map((w, O) => {
          var Z;
          const [P, ye] = w.split("-");
          return se.length
            ? F.createElement(
                "ol",
                {
                  key: w,
                  dir: Q === "auto" ? Rp() : Q,
                  tabIndex: -1,
                  ref: he,
                  className: b,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": te,
                  "data-y-position": P,
                  "data-x-position": ye,
                  style: {
                    "--front-toast-height": `${((Z = Me[0]) == null ? void 0 : Z.height) || 0}px`,
                    "--width": `${s4}px`,
                    "--gap": `${K}px`,
                    ...L,
                    ...d4(S, m),
                  },
                  onBlur: (W) => {
                    be.current &&
                      !W.currentTarget.contains(W.relatedTarget) &&
                      ((be.current = !1),
                      Fe.current &&
                        (Fe.current.focus({ preventScroll: !0 }),
                        (Fe.current = null)));
                  },
                  onFocus: (W) => {
                    (W.target instanceof HTMLElement &&
                      W.target.dataset.dismissible === "false") ||
                      be.current ||
                      ((be.current = !0), (Fe.current = W.relatedTarget));
                  },
                  onMouseEnter: () => Xe(!0),
                  onMouseMove: () => Xe(!0),
                  onMouseLeave: () => {
                    ve || Xe(!1);
                  },
                  onDragEnd: () => Xe(!1),
                  onPointerDown: (W) => {
                    (W.target instanceof HTMLElement &&
                      W.target.dataset.dismissible === "false") ||
                      G(!0);
                  },
                  onPointerUp: () => G(!1),
                },
                se
                  .filter((W) => (!W.position && O === 0) || W.position === w)
                  .map((W, Ne) => {
                    var ae, ue;
                    return F.createElement(f4, {
                      key: W.id,
                      icons: V,
                      index: Ne,
                      toast: W,
                      defaultRichColors: D,
                      duration:
                        (ae = U == null ? void 0 : U.duration) != null ? ae : k,
                      className: U == null ? void 0 : U.className,
                      descriptionClassName:
                        U == null ? void 0 : U.descriptionClassName,
                      invert: d,
                      visibleToasts: H,
                      closeButton:
                        (ue = U == null ? void 0 : U.closeButton) != null
                          ? ue
                          : v,
                      interacting: ve,
                      position: w,
                      style: U == null ? void 0 : U.style,
                      unstyled: U == null ? void 0 : U.unstyled,
                      classNames: U == null ? void 0 : U.classNames,
                      cancelButtonStyle:
                        U == null ? void 0 : U.cancelButtonStyle,
                      actionButtonStyle:
                        U == null ? void 0 : U.actionButtonStyle,
                      closeButtonAriaLabel:
                        U == null ? void 0 : U.closeButtonAriaLabel,
                      removeToast: He,
                      toasts: se.filter((gt) => gt.position == W.position),
                      heights: Me.filter((gt) => gt.position == W.position),
                      setHeights: _e,
                      expandByDefault: y,
                      gap: K,
                      expanded: Ie,
                      swipeDirections: s.swipeDirections,
                    });
                  }),
              )
            : null;
        }),
      )
    );
  }),
  h4 = "/api";
class g4 extends Error {
  constructor(s, o) {
    (super(`request failed with ${s}`),
      (this.name = "ApiError"),
      (this.status = s),
      (this.body = o));
  }
}
async function p4(l, s, o) {
  try {
    const u = await fetch(`${h4}${s}`, {
      method: l,
      headers: o === void 0 ? void 0 : { "Content-Type": "application/json" },
      body: o === void 0 ? void 0 : JSON.stringify(o),
    });
    if (u.ok) return u.status === 204 ? void 0 : await u.json();
  } catch {}
  if (s === "/consultations/newsletter") {
    const u = {
      id:
        typeof crypto < "u" && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2),
      email: (o == null ? void 0 : o.email) || "",
      created_at: new Date().toISOString(),
    };
    try {
      const d = JSON.parse(localStorage.getItem("luminor_newsletters") || "[]");
      (d.push(u),
        localStorage.setItem("luminor_newsletters", JSON.stringify(d)));
    } catch {}
    return u;
  }
  if (s === "/consultations") {
    const u = {
      id:
        typeof crypto < "u" && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2),
      ...o,
      created_at: new Date().toISOString(),
    };
    try {
      const d = JSON.parse(
        localStorage.getItem("luminor_consultations") || "[]",
      );
      (d.push(u),
        localStorage.setItem("luminor_consultations", JSON.stringify(d)));
    } catch {}
    return u;
  }
  throw new g4(500, { detail: "Request could not be completed" });
}
const Gy = (l, s) => p4("POST", l, s ?? null);
function y4() {
  return typeof window < "u";
}
function Vy(l) {
  var s;
  return (
    (l == null || (s = l.ownerDocument) == null ? void 0 : s.defaultView) ||
    window
  );
}
function Qy(l) {
  return y4() ? l instanceof HTMLElement || l instanceof Vy(l).HTMLElement : !1;
}
const zd = { ...g1 },
  _p = {};
function as(l, s) {
  const o = T.useRef(_p);
  return (o.current === _p && (o.current = l(s)), o);
}
const ad = zd.useInsertionEffect,
  v4 = ad && ad !== zd.useLayoutEffect ? ad : (l) => l();
function xr(l) {
  const s = as(b4).current;
  return ((s.next = l), v4(s.effect), s.trampoline);
}
function b4() {
  const l = {
    next: void 0,
    callback: x4,
    trampoline: (...s) => {
      var o;
      return (o = l.callback) == null ? void 0 : o.call(l, ...s);
    },
    effect: () => {
      l.callback = l.next;
    },
  };
  return l;
}
function x4() {}
const S4 = () => {},
  ul = typeof document < "u" ? T.useLayoutEffect : S4;
function hd(l, s) {
  if (l && !s) return l;
  if (!l && s) return s;
  if (l || s) return { ...l, ...s };
}
const Xy = {};
function Rd(l, s, o, u, d) {
  if (!o && !u && !l) return uu(s);
  let h = uu(l);
  return (s && (h = iu(h, s)), o && (h = iu(h, o)), u && (h = iu(h, u)), h);
}
function w4(l) {
  if (l.length === 0) return Xy;
  if (l.length === 1) return uu(l[0]);
  let s = uu(l[0]);
  for (let o = 1; o < l.length; o += 1) s = iu(s, l[o]);
  return s;
}
function uu(l) {
  return Ky(l) ? { ...l(Xy) } : N4(l);
}
function iu(l, s) {
  return Ky(s) ? s(l) : E4(l, s);
}
function N4(l) {
  const s = { ...l };
  for (const o in s) {
    const u = s[o];
    Zy(o, u) && (s[o] = Jy(u));
  }
  return s;
}
function E4(l, s) {
  if (!s) return l;
  for (const o in s) {
    const u = s[o];
    switch (o) {
      case "style": {
        l[o] = hd(l.style, u);
        break;
      }
      case "className": {
        l[o] = Fy(l.className, u);
        break;
      }
      default:
        Zy(o, u) ? (l[o] = T4(l[o], u)) : (l[o] = u);
    }
  }
  return l;
}
function Zy(l, s) {
  const o = l.charCodeAt(0),
    u = l.charCodeAt(1),
    d = l.charCodeAt(2);
  return (
    o === 111 &&
    u === 110 &&
    d >= 65 &&
    d <= 90 &&
    (typeof s == "function" || typeof s > "u")
  );
}
function Ky(l) {
  return typeof l == "function";
}
function T4(l, s) {
  return s
    ? l
      ? (...o) => {
          const u = o[0];
          if ($y(u)) {
            const h = u;
            cu(h);
            const p = s(...o);
            return (h.baseUIHandlerPrevented || l == null || l(...o), p);
          }
          const d = s(...o);
          return (l == null || l(...o), d);
        }
      : Jy(s)
    : l;
}
function Jy(l) {
  return (
    l &&
    ((...s) => {
      const o = s[0];
      return ($y(o) && cu(o), l(...s));
    })
  );
}
function cu(l) {
  return (
    (l.preventBaseUIHandler = () => {
      l.baseUIHandlerPrevented = !0;
    }),
    l
  );
}
function Fy(l, s) {
  return s ? (l ? s + " " + l : s) : l;
}
function $y(l) {
  return l != null && typeof l == "object" && "nativeEvent" in l;
}
function j4(l, s) {
  return function (u, ...d) {
    const h = new URL(l);
    return (
      h.searchParams.set("code", u.toString()),
      d.forEach((p) => h.searchParams.append("args[]", p)),
      `${s} error #${u}; visit ${h} for the full message.`
    );
  };
}
const Iy = j4("https://base-ui.com/production-error", "Base UI"),
  C4 = T.createContext(void 0);
function z4(l = !1) {
  const s = T.useContext(C4);
  if (s === void 0 && !l) throw new Error(Iy(16));
  return s;
}
function R4(l) {
  const {
      focusableWhenDisabled: s,
      disabled: o,
      composite: u = !1,
      tabIndex: d = 0,
      isNativeButton: h,
    } = l,
    p = u && s !== !1,
    y = u && s === !1;
  return {
    props: T.useMemo(() => {
      const b = {
        onKeyDown(S) {
          o && s && S.key !== "Tab" && S.preventDefault();
        },
      };
      return (
        u || ((b.tabIndex = d), !h && o && (b.tabIndex = s ? d : -1)),
        ((h && (s || p)) || (!h && o)) && (b["aria-disabled"] = o),
        h && (!s || y) && (b.disabled = o),
        b
      );
    }, [u, o, s, p, y, h, d]),
  };
}
function nd(l, s, { detail: o = 0, pointerType: u = "" } = {}) {
  l.dispatchEvent(
    new (Vy(l).PointerEvent)("click", {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: o,
      pointerType: u,
      shiftKey: s.shiftKey,
      ctrlKey: s.ctrlKey,
      altKey: s.altKey,
      metaKey: s.metaKey,
    }),
  );
}
function _4(l = {}) {
  const {
      disabled: s = !1,
      focusableWhenDisabled: o,
      tabIndex: u = 0,
      native: d = !0,
      composite: h,
    } = l,
    p = T.useRef(null),
    y = z4(!0),
    v = h ?? y !== void 0,
    { props: b } = R4({
      focusableWhenDisabled: o,
      disabled: s,
      composite: v,
      tabIndex: u,
      isNativeButton: d,
    }),
    S = T.useCallback(() => {
      const D = p.current;
      ld(D) &&
        v &&
        s &&
        b.disabled === void 0 &&
        D.disabled &&
        (D.disabled = !1);
    }, [s, b.disabled, v]);
  ul(S, [S]);
  const m = T.useCallback(
      (D = {}) => {
        const {
          onClick: k,
          onMouseDown: L,
          onKeyUp: H,
          onKeyDown: U,
          onPointerDown: Q,
          ...K
        } = D;
        return Rd(
          {
            onClick(V) {
              if (s) {
                V.preventDefault();
                return;
              }
              k == null || k(V);
            },
            onMouseDown(V) {
              s || L == null || L(V);
            },
            onKeyDown(V) {
              if (s || (cu(V), U == null || U(V), V.baseUIHandlerPrevented))
                return;
              const X = V.target === V.currentTarget,
                ee = V.currentTarget,
                $ = ld(ee),
                Y = !d && A4(ee),
                se = X && (d ? $ : !Y),
                me = V.key === "Enter",
                Me = V.key === " ",
                _e = ee.getAttribute("role"),
                Ie =
                  (_e == null ? void 0 : _e.startsWith("menuitem")) ||
                  _e === "option" ||
                  _e === "gridcell";
              if (X && v && Me) {
                if (V.defaultPrevented && Ie) return;
                (V.preventDefault(),
                  (!d || $) && (V.preventBaseUIHandler(), nd(ee, V)));
                return;
              }
              if (!se || d || (!Me && !me)) {
                X && Y && Me && V.preventDefault();
                return;
              }
              V.defaultPrevented ||
                (V.preventDefault(),
                me && (V.preventBaseUIHandler(), nd(ee, V)));
            },
            onKeyUp(V) {
              if (!s) {
                if (
                  (cu(V),
                  H == null || H(V),
                  V.target === V.currentTarget &&
                    d &&
                    v &&
                    ld(V.currentTarget) &&
                    V.key === " ")
                ) {
                  V.preventDefault();
                  return;
                }
                V.baseUIHandlerPrevented ||
                  (V.target === V.currentTarget &&
                    !d &&
                    !v &&
                    !V.defaultPrevented &&
                    V.key === " " &&
                    (V.preventBaseUIHandler(), nd(V.currentTarget, V)));
              }
            },
            onPointerDown(V) {
              if (s) {
                V.preventDefault();
                return;
              }
              Q == null || Q(V);
            },
          },
          d ? { type: "button" } : { role: "button" },
          b,
          K,
        );
      },
      [s, b, v, d],
    ),
    N = xr((D) => {
      ((p.current = D), S());
    });
  return { getButtonProps: m, buttonRef: N };
}
function ld(l) {
  return Qy(l) && l.tagName === "BUTTON";
}
function A4(l) {
  return Qy(l) && l.tagName === "A" && !!l.href;
}
function Ap(l, s, o, u) {
  const d = as(Wy).current;
  return (O4(d, l, s, o, u) && Py(d, [l, s, o, u]), d.callback);
}
function M4(l) {
  const s = as(Wy).current;
  return (D4(s, l) && Py(s, l), s.callback);
}
function Wy() {
  return { callback: null, cleanup: null, refs: [] };
}
function O4(l, s, o, u, d) {
  return (
    l.refs[0] !== s || l.refs[1] !== o || l.refs[2] !== u || l.refs[3] !== d
  );
}
function D4(l, s) {
  return l.refs.length !== s.length || l.refs.some((o, u) => o !== s[u]);
}
function Py(l, s) {
  if (((l.refs = s), s.every((o) => o == null))) {
    l.callback = null;
    return;
  }
  l.callback = (o) => {
    if ((l.cleanup && (l.cleanup(), (l.cleanup = null)), o != null)) {
      const u = Array(s.length).fill(null);
      for (let d = 0; d < s.length; d += 1) {
        const h = s[d];
        if (h != null)
          switch (typeof h) {
            case "function": {
              const p = h(o);
              typeof p == "function" && (u[d] = p);
              break;
            }
            case "object": {
              h.current = o;
              break;
            }
          }
      }
      l.cleanup = () => {
        for (let d = 0; d < s.length; d += 1) {
          const h = s[d];
          if (h != null)
            switch (typeof h) {
              case "function": {
                const p = u[d];
                typeof p == "function" ? p() : h(null);
                break;
              }
              case "object": {
                h.current = null;
                break;
              }
            }
        }
      };
    }
  };
}
const k4 = parseInt(T.version, 10);
function U4(l) {
  return k4 >= l;
}
function Mp(l) {
  if (!T.isValidElement(l)) return null;
  const s = l,
    o = s.props;
  return (U4(19) ? (o == null ? void 0 : o.ref) : s.ref) ?? null;
}
function kt() {}
const H4 = Object.freeze([]),
  Ll = Object.freeze({});
function L4(l, s) {
  const o = {};
  for (const u in l) {
    const d = l[u];
    if (s != null && s.hasOwnProperty(u)) {
      const h = s[u](d);
      h != null && Object.assign(o, h);
      continue;
    }
    d === !0
      ? (o[`data-${u.toLowerCase()}`] = "")
      : d && (o[`data-${u.toLowerCase()}`] = d.toString());
  }
  return o;
}
function B4(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function q4(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function ev(l, s, o = {}) {
  let u = s.render;
  o.enabled !== !1 && (u = Q4(u));
  const d = Y4(s, o, u);
  if (o.enabled === !1) return null;
  const h = o.state ?? Ll;
  return X4(l, u, d, h);
}
function Y4(l, s, o) {
  const { className: u, style: d } = l,
    {
      state: h = Ll,
      ref: p,
      props: y,
      stateAttributesMapping: v,
      enabled: b = !0,
    } = s,
    S = b ? B4(u, h) : void 0,
    m = b ? q4(d, h) : void 0,
    N = b ? L4(h, v) : Ll,
    D = b && y ? G4(y) : void 0,
    k = b ? (hd(N, D) ?? {}) : Ll;
  return (
    typeof document < "u" &&
      (b
        ? Array.isArray(p)
          ? (k.ref = M4([k.ref, Mp(o), ...p]))
          : (k.ref = Ap(k.ref, Mp(o), p))
        : Ap(null, null)),
    b
      ? (S !== void 0 && (k.className = Fy(k.className, S)),
        m !== void 0 && (k.style = hd(k.style, m)),
        k)
      : Ll
  );
}
function G4(l) {
  return Array.isArray(l) ? w4(l) : Rd(void 0, l);
}
const V4 = Symbol.for("react.lazy");
function Q4(l) {
  if ((l == null ? void 0 : l.$$typeof) !== V4) return l;
  const s = T.Children.toArray(l)[0];
  return T.isValidElement(s) ? s : l;
}
function X4(l, s, o, u) {
  if (s) {
    if (typeof s == "function") return s(o, u);
    const d = Rd(o, s.props);
    return ((d.ref = o.ref), T.cloneElement(s, d));
  }
  return Z4(l, o);
}
function Z4(l, s) {
  return l === "button"
    ? T.createElement("button", { type: "button", ...s, key: s.key })
    : l === "img"
      ? T.createElement("img", { alt: "", ...s, key: s.key })
      : T.createElement(l, s);
}
const K4 = T.forwardRef(function (s, o) {
  const {
      render: u,
      className: d,
      disabled: h = !1,
      focusableWhenDisabled: p = !1,
      nativeButton: y = !0,
      style: v,
      ...b
    } = s,
    { getButtonProps: S, buttonRef: m } = _4({
      disabled: h,
      focusableWhenDisabled: p,
      native: y,
    });
  return ev("button", s, {
    state: { disabled: h },
    ref: [o, m],
    props: [b, S],
  });
});
function tv(l) {
  var s,
    o,
    u = "";
  if (typeof l == "string" || typeof l == "number") u += l;
  else if (typeof l == "object")
    if (Array.isArray(l)) {
      var d = l.length;
      for (s = 0; s < d; s++)
        l[s] && (o = tv(l[s])) && (u && (u += " "), (u += o));
    } else for (o in l) l[o] && (u && (u += " "), (u += o));
  return u;
}
function av() {
  for (var l, s, o = 0, u = "", d = arguments.length; o < d; o++)
    (l = arguments[o]) && (s = tv(l)) && (u && (u += " "), (u += s));
  return u;
}
const Op = (l) => (typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l),
  Dp = av,
  J4 = (l, s) => (o) => {
    var u;
    if ((s == null ? void 0 : s.variants) == null)
      return Dp(
        l,
        o == null ? void 0 : o.class,
        o == null ? void 0 : o.className,
      );
    const { variants: d, defaultVariants: h } = s,
      p = Object.keys(d).map((b) => {
        const S = o == null ? void 0 : o[b],
          m = h == null ? void 0 : h[b];
        if (S === null) return null;
        const N = Op(S) || Op(m);
        return d[b][N];
      }),
      y =
        o &&
        Object.entries(o).reduce((b, S) => {
          let [m, N] = S;
          return (N === void 0 || (b[m] = N), b);
        }, {}),
      v =
        s == null || (u = s.compoundVariants) === null || u === void 0
          ? void 0
          : u.reduce((b, S) => {
              let { class: m, className: N, ...D } = S;
              return Object.entries(D).every((k) => {
                let [L, H] = k;
                return Array.isArray(H)
                  ? H.includes({ ...h, ...y }[L])
                  : { ...h, ...y }[L] === H;
              })
                ? [...b, m, N]
                : b;
            }, []);
    return Dp(
      l,
      p,
      v,
      o == null ? void 0 : o.class,
      o == null ? void 0 : o.className,
    );
  },
  F4 = (l, s) => {
    const o = new Array(l.length + s.length);
    for (let u = 0; u < l.length; u++) o[u] = l[u];
    for (let u = 0; u < s.length; u++) o[l.length + u] = s[u];
    return o;
  },
  $4 = (l, s) => ({ classGroupId: l, validator: s }),
  nv = (l = new Map(), s = null, o) => ({
    nextPart: l,
    validators: s,
    classGroupId: o,
  }),
  fu = "-",
  kp = [],
  I4 = "arbitrary..",
  W4 = (l) => {
    const s = e5(l),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: u } = l;
    return {
      getClassGroupId: (p) => {
        if (p.startsWith("[") && p.endsWith("]")) return P4(p);
        const y = p.split(fu),
          v = y[0] === "" && y.length > 1 ? 1 : 0;
        return lv(y, v, s);
      },
      getConflictingClassGroupIds: (p, y) => {
        if (y) {
          const v = u[p],
            b = o[p];
          return v ? (b ? F4(b, v) : v) : b || kp;
        }
        return o[p] || kp;
      },
    };
  },
  lv = (l, s, o) => {
    if (l.length - s === 0) return o.classGroupId;
    const d = l[s],
      h = o.nextPart.get(d);
    if (h) {
      const b = lv(l, s + 1, h);
      if (b) return b;
    }
    const p = o.validators;
    if (p === null) return;
    const y = s === 0 ? l.join(fu) : l.slice(s).join(fu),
      v = p.length;
    for (let b = 0; b < v; b++) {
      const S = p[b];
      if (S.validator(y)) return S.classGroupId;
    }
  },
  P4 = (l) =>
    l.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const s = l.slice(1, -1),
            o = s.indexOf(":"),
            u = s.slice(0, o);
          return u ? I4 + u : void 0;
        })(),
  e5 = (l) => {
    const { theme: s, classGroups: o } = l;
    return t5(o, s);
  },
  t5 = (l, s) => {
    const o = nv();
    for (const u in l) {
      const d = l[u];
      _d(d, o, u, s);
    }
    return o;
  },
  _d = (l, s, o, u) => {
    const d = l.length;
    for (let h = 0; h < d; h++) {
      const p = l[h];
      a5(p, s, o, u);
    }
  },
  a5 = (l, s, o, u) => {
    if (typeof l == "string") {
      n5(l, s, o);
      return;
    }
    if (typeof l == "function") {
      l5(l, s, o, u);
      return;
    }
    i5(l, s, o, u);
  },
  n5 = (l, s, o) => {
    const u = l === "" ? s : iv(s, l);
    u.classGroupId = o;
  },
  l5 = (l, s, o, u) => {
    if (s5(l)) {
      _d(l(u), s, o, u);
      return;
    }
    (s.validators === null && (s.validators = []), s.validators.push($4(o, l)));
  },
  i5 = (l, s, o, u) => {
    const d = Object.entries(l),
      h = d.length;
    for (let p = 0; p < h; p++) {
      const [y, v] = d[p];
      _d(v, iv(s, y), o, u);
    }
  },
  iv = (l, s) => {
    let o = l;
    const u = s.split(fu),
      d = u.length;
    for (let h = 0; h < d; h++) {
      const p = u[h];
      let y = o.nextPart.get(p);
      (y || ((y = nv()), o.nextPart.set(p, y)), (o = y));
    }
    return o;
  },
  s5 = (l) => "isThemeGetter" in l && l.isThemeGetter === !0,
  r5 = (l) => {
    if (l < 1) return { get: () => {}, set: () => {} };
    let s = 0,
      o = Object.create(null),
      u = Object.create(null);
    const d = (h, p) => {
      ((o[h] = p), s++, s > l && ((s = 0), (u = o), (o = Object.create(null))));
    };
    return {
      get(h) {
        let p = o[h];
        if (p !== void 0) return p;
        if ((p = u[h]) !== void 0) return (d(h, p), p);
      },
      set(h, p) {
        h in o ? (o[h] = p) : d(h, p);
      },
    };
  },
  gd = "!",
  Up = ":",
  o5 = [],
  Hp = (l, s, o, u, d) => ({
    modifiers: l,
    hasImportantModifier: s,
    baseClassName: o,
    maybePostfixModifierPosition: u,
    isExternal: d,
  }),
  u5 = (l) => {
    const { prefix: s, experimentalParseClassName: o } = l;
    let u = (d) => {
      const h = [];
      let p = 0,
        y = 0,
        v = 0,
        b;
      const S = d.length;
      for (let L = 0; L < S; L++) {
        const H = d[L];
        if (p === 0 && y === 0) {
          if (H === Up) {
            (h.push(d.slice(v, L)), (v = L + 1));
            continue;
          }
          if (H === "/") {
            b = L;
            continue;
          }
        }
        H === "[" ? p++ : H === "]" ? p-- : H === "(" ? y++ : H === ")" && y--;
      }
      const m = h.length === 0 ? d : d.slice(v);
      let N = m,
        D = !1;
      m.endsWith(gd)
        ? ((N = m.slice(0, -1)), (D = !0))
        : m.startsWith(gd) && ((N = m.slice(1)), (D = !0));
      const k = b && b > v ? b - v : void 0;
      return Hp(h, D, N, k);
    };
    if (s) {
      const d = s + Up,
        h = u;
      u = (p) =>
        p.startsWith(d) ? h(p.slice(d.length)) : Hp(o5, !1, p, void 0, !0);
    }
    if (o) {
      const d = u;
      u = (h) => o({ className: h, parseClassName: d });
    }
    return u;
  },
  c5 = (l) => {
    const s = new Map();
    return (
      l.orderSensitiveModifiers.forEach((o, u) => {
        s.set(o, 1e6 + u);
      }),
      (o) => {
        const u = [];
        let d = [];
        for (let h = 0; h < o.length; h++) {
          const p = o[h],
            y = p[0] === "[",
            v = s.has(p);
          y || v
            ? (d.length > 0 && (d.sort(), u.push(...d), (d = [])), u.push(p))
            : d.push(p);
        }
        return (d.length > 0 && (d.sort(), u.push(...d)), u);
      }
    );
  },
  f5 = (l) => ({
    cache: r5(l.cacheSize),
    parseClassName: u5(l),
    sortModifiers: c5(l),
    postfixLookupClassGroupIds: d5(l),
    ...W4(l),
  }),
  d5 = (l) => {
    const s = Object.create(null),
      o = l.postfixLookupClassGroups;
    if (o) for (let u = 0; u < o.length; u++) s[o[u]] = !0;
    return s;
  },
  m5 = /\s+/,
  h5 = (l, s) => {
    const {
        parseClassName: o,
        getClassGroupId: u,
        getConflictingClassGroupIds: d,
        sortModifiers: h,
        postfixLookupClassGroupIds: p,
      } = s,
      y = [],
      v = l.trim().split(m5);
    let b = "";
    for (let S = v.length - 1; S >= 0; S -= 1) {
      const m = v[S],
        {
          isExternal: N,
          modifiers: D,
          hasImportantModifier: k,
          baseClassName: L,
          maybePostfixModifierPosition: H,
        } = o(m);
      if (N) {
        b = m + (b.length > 0 ? " " + b : b);
        continue;
      }
      let U = !!H,
        Q;
      if (U) {
        const $ = L.substring(0, H);
        Q = u($);
        const Y = Q && p[Q] ? u(L) : void 0;
        Y && Y !== Q && ((Q = Y), (U = !1));
      } else Q = u(L);
      if (!Q) {
        if (!U) {
          b = m + (b.length > 0 ? " " + b : b);
          continue;
        }
        if (((Q = u(L)), !Q)) {
          b = m + (b.length > 0 ? " " + b : b);
          continue;
        }
        U = !1;
      }
      const K = D.length === 0 ? "" : D.length === 1 ? D[0] : h(D).join(":"),
        V = k ? K + gd : K,
        X = V + Q;
      if (y.indexOf(X) > -1) continue;
      y.push(X);
      const ee = d(Q, U);
      for (let $ = 0; $ < ee.length; ++$) {
        const Y = ee[$];
        y.push(V + Y);
      }
      b = m + (b.length > 0 ? " " + b : b);
    }
    return b;
  },
  g5 = (...l) => {
    let s = 0,
      o,
      u,
      d = "";
    for (; s < l.length;)
      (o = l[s++]) && (u = sv(o)) && (d && (d += " "), (d += u));
    return d;
  },
  sv = (l) => {
    if (typeof l == "string") return l;
    let s,
      o = "";
    for (let u = 0; u < l.length; u++)
      l[u] && (s = sv(l[u])) && (o && (o += " "), (o += s));
    return o;
  },
  p5 = (l, ...s) => {
    let o, u, d, h;
    const p = (v) => {
        const b = s.reduce((S, m) => m(S), l());
        return (
          (o = f5(b)),
          (u = o.cache.get),
          (d = o.cache.set),
          (h = y),
          y(v)
        );
      },
      y = (v) => {
        const b = u(v);
        if (b) return b;
        const S = h5(v, o);
        return (d(v, S), S);
      };
    return ((h = p), (...v) => h(g5(...v)));
  },
  y5 = [],
  yt = (l) => {
    const s = (o) => o[l] || y5;
    return ((s.isThemeGetter = !0), (s.themeKey = l), s);
  },
  rv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ov = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  v5 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  b5 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  x5 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  S5 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,
  w5 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  N5 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  In = (l) => v5.test(l),
  Te = (l) => !!l && !Number.isNaN(Number(l)),
  Ja = (l) => !!l && Number.isInteger(Number(l)),
  id = (l) => l.endsWith("%") && Te(l.slice(0, -1)),
  yn = (l) => b5.test(l),
  uv = () => !0,
  E5 = (l) => x5.test(l) && !S5.test(l),
  Ad = () => !1,
  T5 = (l) => w5.test(l),
  j5 = (l) => N5.test(l),
  C5 = (l) => !le(l) && !ie(l),
  z5 = (l) =>
    l.startsWith("@container") &&
    ((l[10] === "/" && l[11] !== void 0) ||
      (l[11] === "s" && l[16] !== void 0 && l.startsWith("-size/", 10)) ||
      (l[11] === "n" && l[18] !== void 0 && l.startsWith("-normal/", 10))),
  R5 = (l) => cl(l, dv, Ad),
  le = (l) => rv.test(l),
  Hl = (l) => cl(l, mv, E5),
  Lp = (l) => cl(l, H5, Te),
  _5 = (l) => cl(l, gv, uv),
  A5 = (l) => cl(l, hv, Ad),
  Bp = (l) => cl(l, cv, Ad),
  M5 = (l) => cl(l, fv, j5),
  tu = (l) => cl(l, pv, T5),
  ie = (l) => ov.test(l),
  sr = (l) => Kl(l, mv),
  O5 = (l) => Kl(l, hv),
  qp = (l) => Kl(l, cv),
  D5 = (l) => Kl(l, dv),
  k5 = (l) => Kl(l, fv),
  au = (l) => Kl(l, pv, !0),
  U5 = (l) => Kl(l, gv, !0),
  cl = (l, s, o) => {
    const u = rv.exec(l);
    return u ? (u[1] ? s(u[1]) : o(u[2])) : !1;
  },
  Kl = (l, s, o = !1) => {
    const u = ov.exec(l);
    return u ? (u[1] ? s(u[1]) : o) : !1;
  },
  cv = (l) => l === "position" || l === "percentage",
  fv = (l) => l === "image" || l === "url",
  dv = (l) => l === "length" || l === "size" || l === "bg-size",
  mv = (l) => l === "length",
  H5 = (l) => l === "number",
  hv = (l) => l === "family-name",
  gv = (l) => l === "number" || l === "weight",
  pv = (l) => l === "shadow",
  L5 = () => {
    const l = yt("color"),
      s = yt("font"),
      o = yt("text"),
      u = yt("font-weight"),
      d = yt("tracking"),
      h = yt("leading"),
      p = yt("breakpoint"),
      y = yt("container"),
      v = yt("spacing"),
      b = yt("radius"),
      S = yt("shadow"),
      m = yt("inset-shadow"),
      N = yt("text-shadow"),
      D = yt("drop-shadow"),
      k = yt("blur"),
      L = yt("perspective"),
      H = yt("aspect"),
      U = yt("ease"),
      Q = yt("animate"),
      K = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      X = () => [...V(), ie, le],
      ee = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", "contain", "none"],
      Y = () => [ie, le, v],
      se = () => [In, "full", "auto", ...Y()],
      me = () => [Ja, "none", "subgrid", ie, le],
      Me = () => ["auto", { span: ["full", Ja, ie, le] }, Ja, ie, le],
      _e = () => [Ja, "auto", ie, le],
      Ie = () => ["auto", "min", "max", "fr", ie, le],
      Xe = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ve = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      G = () => ["auto", ...Y()],
      te = () => [
        In,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...Y(),
      ],
      re = () => [
        y,
        In,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...Y(),
      ],
      he = () => [
        In,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...Y(),
      ],
      J = () => [l, ie, le],
      Fe = () => [...V(), qp, Bp, { position: [ie, le] }],
      be = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      He = () => ["auto", "cover", "contain", D5, R5, { size: [ie, le] }],
      w = () => [id, sr, Hl],
      O = () => ["", "none", "full", b, ie, le],
      Z = () => ["", Te, sr, Hl],
      P = () => ["solid", "dashed", "dotted", "double"],
      ye = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      W = () => [Te, id, qp, Bp],
      Ne = () => ["", "none", k, ie, le],
      ae = () => ["none", Te, ie, le],
      ue = () => ["none", Te, ie, le],
      gt = () => [Te, ie, le],
      oa = () => [In, "full", ...Y()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [yn],
        breakpoint: [yn],
        color: [uv],
        container: [yn],
        "drop-shadow": [yn],
        ease: ["in", "out", "in-out"],
        font: [C5],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [yn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [yn],
        shadow: [yn],
        spacing: ["px", Te],
        text: [yn],
        "text-shadow": [yn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", In, le, ie, H] }],
        container: ["container"],
        "container-type": [{ "@container": ["", "normal", "size", ie, le] }],
        "container-named": [z5],
        columns: [{ columns: [Te, "auto", le, ie, y] }],
        "break-after": [{ "break-after": K() }],
        "break-before": [{ "break-before": K() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: X() }],
        overflow: [{ overflow: ee() }],
        "overflow-x": [{ "overflow-x": ee() }],
        "overflow-y": [{ "overflow-y": ee() }],
        overscroll: [{ overscroll: $() }],
        "overscroll-x": [{ "overscroll-x": $() }],
        "overscroll-y": [{ "overscroll-y": $() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: se() }],
        "inset-x": [{ "inset-x": se() }],
        "inset-y": [{ "inset-y": se() }],
        start: [{ "inset-s": se(), start: se() }],
        end: [{ "inset-e": se(), end: se() }],
        "inset-bs": [{ "inset-bs": se() }],
        "inset-be": [{ "inset-be": se() }],
        top: [{ top: se() }],
        right: [{ right: se() }],
        bottom: [{ bottom: se() }],
        left: [{ left: se() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Ja, "auto", ie, le] }],
        basis: [{ basis: [In, "full", "auto", y, ...Y()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Te, In, "auto", "initial", "none", le] }],
        grow: [{ grow: ["", Te, ie, le] }],
        shrink: [{ shrink: ["", Te, ie, le] }],
        order: [{ order: [Ja, "first", "last", "none", ie, le] }],
        "grid-cols": [{ "grid-cols": me() }],
        "col-start-end": [{ col: Me() }],
        "col-start": [{ "col-start": _e() }],
        "col-end": [{ "col-end": _e() }],
        "grid-rows": [{ "grid-rows": me() }],
        "row-start-end": [{ row: Me() }],
        "row-start": [{ "row-start": _e() }],
        "row-end": [{ "row-end": _e() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Ie() }],
        "auto-rows": [{ "auto-rows": Ie() }],
        gap: [{ gap: Y() }],
        "gap-x": [{ "gap-x": Y() }],
        "gap-y": [{ "gap-y": Y() }],
        "justify-content": [{ justify: [...Xe(), "normal"] }],
        "justify-items": [{ "justify-items": [...ve(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ve()] }],
        "align-content": [{ content: ["normal", ...Xe()] }],
        "align-items": [{ items: [...ve(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ve(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Xe() }],
        "place-items": [{ "place-items": [...ve(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ve()] }],
        p: [{ p: Y() }],
        px: [{ px: Y() }],
        py: [{ py: Y() }],
        ps: [{ ps: Y() }],
        pe: [{ pe: Y() }],
        pbs: [{ pbs: Y() }],
        pbe: [{ pbe: Y() }],
        pt: [{ pt: Y() }],
        pr: [{ pr: Y() }],
        pb: [{ pb: Y() }],
        pl: [{ pl: Y() }],
        m: [{ m: G() }],
        mx: [{ mx: G() }],
        my: [{ my: G() }],
        ms: [{ ms: G() }],
        me: [{ me: G() }],
        mbs: [{ mbs: G() }],
        mbe: [{ mbe: G() }],
        mt: [{ mt: G() }],
        mr: [{ mr: G() }],
        mb: [{ mb: G() }],
        ml: [{ ml: G() }],
        "space-x": [{ "space-x": Y() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": Y() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: te() }],
        "inline-size": [{ inline: ["auto", ...re()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...re()] }],
        "max-inline-size": [{ "max-inline": ["none", ...re()] }],
        "block-size": [{ block: ["auto", ...he()] }],
        "min-block-size": [{ "min-block": ["auto", ...he()] }],
        "max-block-size": [{ "max-block": ["none", ...he()] }],
        w: [{ w: [y, "screen", ...te()] }],
        "min-w": [{ "min-w": [y, "screen", "none", ...te()] }],
        "max-w": [
          { "max-w": [y, "screen", "none", "prose", { screen: [p] }, ...te()] },
        ],
        h: [{ h: ["screen", "lh", ...te()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...te()] }],
        "max-h": [{ "max-h": ["screen", "lh", "none", ...te()] }],
        "font-size": [{ text: ["base", o, sr, Hl] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [u, U5, _5] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              id,
              le,
            ],
          },
        ],
        "font-family": [{ font: [O5, A5, s] }],
        "font-features": [{ "font-features": [le] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [d, ie, le] }],
        "line-clamp": [{ "line-clamp": [Te, "none", ie, Lp] }],
        leading: [{ leading: ["none", h, ...Y()] }],
        "list-image": [{ "list-image": ["none", ie, le] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ie, le] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: J() }],
        "text-color": [{ text: J() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...P(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Te, "from-font", "auto", ie, Hl] },
        ],
        "text-decoration-color": [{ decoration: J() }],
        "underline-offset": [{ "underline-offset": [Te, "auto", ie, le] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Y() }],
        "tab-size": [{ tab: [Ja, ie, le] }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ie,
              le,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ie, le] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Fe() }],
        "bg-repeat": [{ bg: be() }],
        "bg-size": [{ bg: He() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Ja,
                  ie,
                  le,
                ],
                radial: ["", ie, le],
                conic: ["", Ja, ie, le],
              },
              k5,
              M5,
            ],
          },
        ],
        "bg-color": [{ bg: J() }],
        "gradient-from-pos": [{ from: w() }],
        "gradient-via-pos": [{ via: w() }],
        "gradient-to-pos": [{ to: w() }],
        "gradient-from": [{ from: J() }],
        "gradient-via": [{ via: J() }],
        "gradient-to": [{ to: J() }],
        rounded: [{ rounded: O() }],
        "rounded-s": [{ "rounded-s": O() }],
        "rounded-e": [{ "rounded-e": O() }],
        "rounded-t": [{ "rounded-t": O() }],
        "rounded-r": [{ "rounded-r": O() }],
        "rounded-b": [{ "rounded-b": O() }],
        "rounded-l": [{ "rounded-l": O() }],
        "rounded-ss": [{ "rounded-ss": O() }],
        "rounded-se": [{ "rounded-se": O() }],
        "rounded-ee": [{ "rounded-ee": O() }],
        "rounded-es": [{ "rounded-es": O() }],
        "rounded-tl": [{ "rounded-tl": O() }],
        "rounded-tr": [{ "rounded-tr": O() }],
        "rounded-br": [{ "rounded-br": O() }],
        "rounded-bl": [{ "rounded-bl": O() }],
        "border-w": [{ border: Z() }],
        "border-w-x": [{ "border-x": Z() }],
        "border-w-y": [{ "border-y": Z() }],
        "border-w-s": [{ "border-s": Z() }],
        "border-w-e": [{ "border-e": Z() }],
        "border-w-bs": [{ "border-bs": Z() }],
        "border-w-be": [{ "border-be": Z() }],
        "border-w-t": [{ "border-t": Z() }],
        "border-w-r": [{ "border-r": Z() }],
        "border-w-b": [{ "border-b": Z() }],
        "border-w-l": [{ "border-l": Z() }],
        "divide-x": [{ "divide-x": Z() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Z() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...P(), "hidden", "none"] }],
        "divide-style": [{ divide: [...P(), "hidden", "none"] }],
        "border-color": [{ border: J() }],
        "border-color-x": [{ "border-x": J() }],
        "border-color-y": [{ "border-y": J() }],
        "border-color-s": [{ "border-s": J() }],
        "border-color-e": [{ "border-e": J() }],
        "border-color-bs": [{ "border-bs": J() }],
        "border-color-be": [{ "border-be": J() }],
        "border-color-t": [{ "border-t": J() }],
        "border-color-r": [{ "border-r": J() }],
        "border-color-b": [{ "border-b": J() }],
        "border-color-l": [{ "border-l": J() }],
        "divide-color": [{ divide: J() }],
        "outline-style": [{ outline: [...P(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Te, ie, le] }],
        "outline-w": [{ outline: ["", Te, sr, Hl] }],
        "outline-color": [{ outline: J() }],
        shadow: [{ shadow: ["", "inner", "none", S, au, tu] }],
        "shadow-color": [{ shadow: J() }],
        "inset-shadow": [{ "inset-shadow": ["none", m, au, tu] }],
        "inset-shadow-color": [{ "inset-shadow": J() }],
        "ring-w": [{ ring: Z() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: J() }],
        "ring-offset-w": [{ "ring-offset": [Te, Hl] }],
        "ring-offset-color": [{ "ring-offset": J() }],
        "inset-ring-w": [{ "inset-ring": Z() }],
        "inset-ring-color": [{ "inset-ring": J() }],
        "text-shadow": [{ "text-shadow": ["none", N, au, tu] }],
        "text-shadow-color": [{ "text-shadow": J() }],
        opacity: [{ opacity: [Te, ie, le] }],
        "mix-blend": [
          { "mix-blend": [...ye(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ye() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Te] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": W() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": W() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": J() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": J() }],
        "mask-image-t-from-pos": [{ "mask-t-from": W() }],
        "mask-image-t-to-pos": [{ "mask-t-to": W() }],
        "mask-image-t-from-color": [{ "mask-t-from": J() }],
        "mask-image-t-to-color": [{ "mask-t-to": J() }],
        "mask-image-r-from-pos": [{ "mask-r-from": W() }],
        "mask-image-r-to-pos": [{ "mask-r-to": W() }],
        "mask-image-r-from-color": [{ "mask-r-from": J() }],
        "mask-image-r-to-color": [{ "mask-r-to": J() }],
        "mask-image-b-from-pos": [{ "mask-b-from": W() }],
        "mask-image-b-to-pos": [{ "mask-b-to": W() }],
        "mask-image-b-from-color": [{ "mask-b-from": J() }],
        "mask-image-b-to-color": [{ "mask-b-to": J() }],
        "mask-image-l-from-pos": [{ "mask-l-from": W() }],
        "mask-image-l-to-pos": [{ "mask-l-to": W() }],
        "mask-image-l-from-color": [{ "mask-l-from": J() }],
        "mask-image-l-to-color": [{ "mask-l-to": J() }],
        "mask-image-x-from-pos": [{ "mask-x-from": W() }],
        "mask-image-x-to-pos": [{ "mask-x-to": W() }],
        "mask-image-x-from-color": [{ "mask-x-from": J() }],
        "mask-image-x-to-color": [{ "mask-x-to": J() }],
        "mask-image-y-from-pos": [{ "mask-y-from": W() }],
        "mask-image-y-to-pos": [{ "mask-y-to": W() }],
        "mask-image-y-from-color": [{ "mask-y-from": J() }],
        "mask-image-y-to-color": [{ "mask-y-to": J() }],
        "mask-image-radial": [{ "mask-radial": [ie, le] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": W() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": W() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": J() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": J() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": V() }],
        "mask-image-conic-pos": [{ "mask-conic": [Te] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": W() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": W() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": J() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": J() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: Fe() }],
        "mask-repeat": [{ mask: be() }],
        "mask-size": [{ mask: He() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ie, le] }],
        filter: [{ filter: ["", "none", ie, le] }],
        blur: [{ blur: Ne() }],
        brightness: [{ brightness: [Te, ie, le] }],
        contrast: [{ contrast: [Te, ie, le] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", D, au, tu] }],
        "drop-shadow-color": [{ "drop-shadow": J() }],
        grayscale: [{ grayscale: ["", Te, ie, le] }],
        "hue-rotate": [{ "hue-rotate": [Te, ie, le] }],
        invert: [{ invert: ["", Te, ie, le] }],
        saturate: [{ saturate: [Te, ie, le] }],
        sepia: [{ sepia: ["", Te, ie, le] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ie, le] }],
        "backdrop-blur": [{ "backdrop-blur": Ne() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Te, ie, le] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Te, ie, le] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Te, ie, le] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Te, ie, le] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Te, ie, le] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Te, ie, le] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Te, ie, le] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Te, ie, le] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": Y() }],
        "border-spacing-x": [{ "border-spacing-x": Y() }],
        "border-spacing-y": [{ "border-spacing-y": Y() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ie,
              le,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Te, "initial", ie, le] }],
        ease: [{ ease: ["linear", "initial", U, ie, le] }],
        delay: [{ delay: [Te, ie, le] }],
        animate: [{ animate: ["none", Q, ie, le] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [L, ie, le] }],
        "perspective-origin": [{ "perspective-origin": X() }],
        rotate: [{ rotate: ae() }],
        "rotate-x": [{ "rotate-x": ae() }],
        "rotate-y": [{ "rotate-y": ae() }],
        "rotate-z": [{ "rotate-z": ae() }],
        scale: [{ scale: ue() }],
        "scale-x": [{ "scale-x": ue() }],
        "scale-y": [{ "scale-y": ue() }],
        "scale-z": [{ "scale-z": ue() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: gt() }],
        "skew-x": [{ "skew-x": gt() }],
        "skew-y": [{ "skew-y": gt() }],
        transform: [{ transform: [ie, le, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: X() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: oa() }],
        "translate-x": [{ "translate-x": oa() }],
        "translate-y": [{ "translate-y": oa() }],
        "translate-z": [{ "translate-z": oa() }],
        "translate-none": ["translate-none"],
        zoom: [{ zoom: [Ja, ie, le] }],
        accent: [{ accent: J() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: J() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ie,
              le,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": J() }],
        "scrollbar-track-color": [{ "scrollbar-track": J() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": ["auto", "stable", "both"] },
        ],
        "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
        "scroll-m": [{ "scroll-m": Y() }],
        "scroll-mx": [{ "scroll-mx": Y() }],
        "scroll-my": [{ "scroll-my": Y() }],
        "scroll-ms": [{ "scroll-ms": Y() }],
        "scroll-me": [{ "scroll-me": Y() }],
        "scroll-mbs": [{ "scroll-mbs": Y() }],
        "scroll-mbe": [{ "scroll-mbe": Y() }],
        "scroll-mt": [{ "scroll-mt": Y() }],
        "scroll-mr": [{ "scroll-mr": Y() }],
        "scroll-mb": [{ "scroll-mb": Y() }],
        "scroll-ml": [{ "scroll-ml": Y() }],
        "scroll-p": [{ "scroll-p": Y() }],
        "scroll-px": [{ "scroll-px": Y() }],
        "scroll-py": [{ "scroll-py": Y() }],
        "scroll-ps": [{ "scroll-ps": Y() }],
        "scroll-pe": [{ "scroll-pe": Y() }],
        "scroll-pbs": [{ "scroll-pbs": Y() }],
        "scroll-pbe": [{ "scroll-pbe": Y() }],
        "scroll-pt": [{ "scroll-pt": Y() }],
        "scroll-pr": [{ "scroll-pr": Y() }],
        "scroll-pb": [{ "scroll-pb": Y() }],
        "scroll-pl": [{ "scroll-pl": Y() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ie, le],
          },
        ],
        fill: [{ fill: ["none", ...J()] }],
        "stroke-w": [{ stroke: [Te, sr, Hl, Lp] }],
        stroke: [{ stroke: ["none", ...J()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["start", "end", "right", "left"],
        "inset-y": ["inset-bs", "inset-be", "top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["ps", "pe", "pr", "pl"],
        py: ["pbs", "pbe", "pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["ms", "me", "mr", "ml"],
        my: ["mbs", "mbe", "mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-s", "border-w-e", "border-w-r", "border-w-l"],
        "border-w-y": [
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-b",
        ],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": [
          "border-color-s",
          "border-color-e",
          "border-color-r",
          "border-color-l",
        ],
        "border-color-y": [
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-b",
        ],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-ms", "scroll-me", "scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-ps", "scroll-pe", "scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  B5 = p5(L5);
function Zl(...l) {
  return B5(av(l));
}
const yv = J4(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
function q5({
  className: l,
  variant: s = "default",
  size: o = "default",
  nativeButton: u,
  render: d,
  ...h
}) {
  return c.jsx(K4, {
    "data-slot": "button",
    render: d,
    nativeButton:
      u ?? (d == null || (T.isValidElement(d) && d.type === "button")),
    className: Zl(yv({ variant: s, size: o, className: l })),
    ...h,
  });
}
const Y5 = "data-valid",
  G5 = "data-invalid",
  V5 = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: null,
    valueMissing: !1,
  },
  Q5 = { valid: null, touched: !1, dirty: !1, filled: !1, focused: !1 },
  X5 = { disabled: !1, ...Q5 },
  Z5 = {
    valid(l) {
      return l === null ? null : l ? { [Y5]: "" } : { [G5]: "" };
    },
  },
  K5 = {
    invalid: void 0,
    name: void 0,
    validityData: {
      state: V5,
      errors: [],
      error: "",
      value: "",
      initialValue: null,
    },
    setValidityData: kt,
    disabled: void 0,
    setTouched: kt,
    setDirty: kt,
    setFilled: kt,
    setFocused: kt,
    focusOwnerRef: { current: void 0 },
    validationMode: "onSubmit",
    shouldValidateOnChange: () => !1,
    state: X5,
    registerFieldControl: kt,
    validation: {
      getValidationProps: (l, s = Ll) => s,
      inputRef: { current: null },
      registeredInputs: new Map(),
      registerInput: kt,
      getInputControl: () => null,
      commit: async () => {},
      change: kt,
    },
  },
  J5 = T.createContext(K5);
function Md(l = !0) {
  const s = T.useContext(J5);
  if (s.setValidityData === kt && !l) throw new Error(Iy(28));
  return s;
}
const F5 = T.createContext({
  elementRef: { current: null },
  formRef: { current: { fields: new Map() } },
  errors: {},
  clearErrors: kt,
  validationMode: "onSubmit",
  submitCountRef: { current: 0 },
});
function $5() {
  return T.useContext(F5);
}
function I5() {
  const [, l] = T.useState({});
  return T.useCallback(() => {
    l({});
  }, []);
}
let Yp = 0;
function W5(l, s = "mui") {
  const o = T.useRef(void 0),
    u = I5(),
    d = l ?? o.current;
  return (
    T.useEffect(() => {
      o.current == null && ((Yp += 1), (o.current = `${s}-${Yp}`), u());
    }, [l, s, u]),
    d
  );
}
const Gp = zd.useId;
function P5(l, s) {
  if (Gp !== void 0) {
    const o = Gp();
    return l ?? (s ? `${s}-${o}` : o);
  }
  return W5(l, s);
}
function eN(l) {
  return P5(l, "base-ui");
}
const tN = T.createContext({
  controlId: void 0,
  registerControlId: kt,
  resetControlId: kt,
  labelId: void 0,
  setLabelId: kt,
  messageIds: [],
  setMessageIds: kt,
  getDescriptionProps: (l) => l,
});
function vv() {
  return T.useContext(tN);
}
function aN(l = {}) {
  const { id: s, enabled: o = !0 } = l,
    { controlId: u, registerControlId: d, resetControlId: h } = vv(),
    p = eN(),
    y = as(() => Symbol()),
    v = T.useRef(!1),
    b = T.useRef(!1),
    S = xr(() => {
      !v.current || d === kt || ((v.current = !1), d(y.current, void 0));
    });
  return (
    ul(() => {
      if (!o || d === kt) {
        S();
        return;
      }
      let m;
      if (s !== void 0) ((b.current = !0), (m = s));
      else if (b.current) m = p;
      else {
        h();
        return;
      }
      if (m === void 0) {
        S();
        return;
      }
      ((v.current = !0), d(y.current, m));
    }, [s, o, d, h, p, y, S]),
    ul(() => S, [S]),
    (o ? u : void 0) ?? s ?? p
  );
}
function nN(l) {
  T.useEffect(l, H4);
}
const rr = 0;
class Od {
  constructor() {
    $o(this, "currentId", rr);
    $o(this, "clear", () => {
      this.currentId !== rr &&
        (clearTimeout(this.currentId), (this.currentId = rr));
    });
    $o(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Od();
  }
  start(s, o) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = rr), o());
      }, s)));
  }
  isStarted() {
    return this.currentId !== rr;
  }
}
function lN() {
  const l = as(Od.create).current;
  return (nN(l.disposeEffect), l);
}
function iN(l, s, o) {
  const { setFocused: u, focusOwnerRef: d } = Md(),
    h = xr((p) => {
      (p ? !l : d.current === h) && ((d.current = p && h), u(p));
    });
  return (
    ul(() => {
      const p = s.current,
        y = p == null ? void 0 : p.getRootNode();
      return (
        (y == null ? void 0 : y.activeElement) === p && h(!0),
        () => h(!1)
      );
    }, [l, s, h]),
    h
  );
}
function sN(l, s, o, u, d = !0, h) {
  const { registerFieldControl: p } = Md(),
    y = as(() => Symbol());
  (ul(() => {
    const v = y.current;
    if (!d) {
      p(v, void 0);
      return;
    }
    p(v, { controlRef: l, getValue: u, id: s, name: h, value: o });
  }, [l, d, u, s, h, p, y, o]),
    ul(() => {
      const v = y.current;
      return () => {
        p(v, void 0);
      };
    }, [p, y]));
}
function rN(l, s) {
  const o = T.useRef(l),
    u = xr(s);
  ul(() => {
    (o.current !== l && u(o.current), (o.current = l));
  }, [l, u]);
}
function oN(l, s, o, u) {
  let d = !1,
    h = !1;
  const p = Ll;
  return {
    reason: l,
    event: s ?? new Event("base-ui"),
    cancel() {
      d = !0;
    },
    allowPropagation() {
      h = !0;
    },
    get isCanceled() {
      return d;
    },
    get isPropagationAllowed() {
      return h;
    },
    trigger: o,
    ...p,
  };
}
const uN = "none",
  cN = T.forwardRef(function (s, o) {
    const {
        render: u,
        className: d,
        id: h,
        name: p,
        value: y,
        disabled: v = !1,
        onValueChange: b,
        defaultValue: S,
        autoFocus: m = !1,
        style: N,
        ...D
      } = s,
      {
        state: k,
        name: L,
        disabled: H,
        setTouched: U,
        setDirty: Q,
        validityData: K,
        setFilled: V,
        validationMode: X,
        validation: ee,
      } = Md(),
      { clearErrors: $, elementRef: Y, submitCountRef: se } = $5(),
      me = H || v,
      Me = L ?? p,
      _e = { ...k, disabled: me },
      { labelId: Ie } = vv(),
      Xe = aN({ id: h }),
      ve = y !== void 0,
      G = y == null ? void 0 : String(y),
      te = xr(() => {
        var be;
        return (be = ee.inputRef.current) == null ? void 0 : be.value;
      });
    (sN(ee.inputRef, Xe, G, te, !me, p),
      ul(() => {
        var He;
        const be =
          G ?? ((He = ee.inputRef.current) == null ? void 0 : He.value);
        be !== void 0 && V(be !== "");
      }, [G, S, ee.inputRef, V]),
      rN(G, () => {
        G !== void 0 && ($(Me), Q(G !== (K.initialValue ?? "")), ee.change(G));
      }));
    const re = T.useRef(null),
      he = iN(me, re),
      J = lN();
    return ev("input", s, {
      ref: [o, re],
      state: _e,
      props: [
        {
          id: Xe,
          disabled: me,
          name: Me,
          ref: ee.inputRef,
          "aria-labelledby": Ie,
          autoFocus: m,
          ...(ve ? { value: y } : { defaultValue: S }),
          onChange(be) {
            const He = be.currentTarget.value,
              w = oN(uN, be.nativeEvent);
            (b == null || b(He, w),
              !ve &&
                (Q(He !== (K.initialValue ?? "")),
                V(He !== ""),
                !be.nativeEvent.defaultPrevented &&
                  !w.isCanceled &&
                  ($(Me), ee.change(He))));
          },
          onFocus() {
            he(!0);
          },
          onBlur(be) {
            if ((U(!0), he(!1), X === "onBlur")) {
              const He = be.currentTarget.value;
              (ee.commit(He),
                ve &&
                  queueMicrotask(() => {
                    var O;
                    const w =
                      (O = ee.inputRef.current) == null ? void 0 : O.value;
                    w !== void 0 &&
                      w !== He &&
                      w !== (K.initialValue ?? "") &&
                      ee.commit(w);
                  }));
            }
          },
          onKeyDown(be) {
            if (be.currentTarget.tagName === "INPUT" && be.key === "Enter") {
              U(!0);
              const He = be.currentTarget.value,
                w = be.currentTarget.form;
              if (w && w === Y.current && !be.defaultPrevented) {
                const O = be.currentTarget,
                  Z = se.current;
                J.start(0, () => {
                  se.current === Z && ee.commit(O.value);
                });
              } else ee.commit(He);
            }
          },
        },
        D,
        (be) => ee.getValidationProps(me, be),
      ],
      stateAttributesMapping: Z5,
    });
  }),
  fN = T.forwardRef(function (s, o) {
    return c.jsx(cN, { ref: o, ...s });
  });
function su({ className: l, type: s, ...o }) {
  return c.jsx(fN, {
    type: s,
    "data-slot": "input",
    className: Zl(
      "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
      l,
    ),
    ...o,
  });
}
function dN({ className: l, ...s }) {
  return c.jsx("textarea", {
    "data-slot": "textarea",
    className: Zl(
      "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
      l,
    ),
    ...s,
  });
}
const du = {
    instagram:
      "https://www.instagram.com/luminormedia_?mdxt=YTA3dTkyaWFoOTRm",
    linkedin: "https://www.linkedin.com/in/luminor-media-studio",
  },
  bv =
    "https://customer-assets-0z36b82j.emergentagent.net/job_d0dc1b9e-821e-4a6c-b7f9-f5f2a678784c/artifacts/9mv4yxv3_luminor%20media%20logo.png",
  mN = [
    ["About", "/about"],
    ["Services", "/services"],
    ["Results", "/results"],
    ["Insights", "/insights"],
    ["FAQ", "/faq"],
  ];
function hN() {
  return c.jsx("header", {
    className:
      "sticky top-0 z-50 border-b border-[#e8e1ce]/80 bg-[#fffbf2]/85 backdrop-blur-xl",
    "data-testid": "site-header",
    children: c.jsxs("div", {
      className:
        "mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8",
      children: [
        c.jsx($e, {
          to: "/",
          className: "flex shrink-0 items-center gap-2",
          "data-testid": "nav-logo-link",
          children: c.jsx("img", {
            src: bv,
            alt: "Luminor Media",
            className:
              "h-8 w-auto sm:h-9 md:h-10 object-contain mix-blend-multiply",
          }),
        }),
        c.jsx("nav", {
          className:
            "flex items-center gap-3 sm:gap-6 md:gap-8 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2",
          "aria-label": "Main navigation",
          "data-testid": "desktop-navigation",
          children: mN.map(([l, s]) =>
            c.jsx(
              ky,
              {
                to: s,
                className: ({ isActive: o }) =>
                  Zl(
                    "nav-link whitespace-nowrap text-xs sm:text-sm md:text-[0.84rem]",
                    o && "nav-link-active",
                  ),
                "data-testid": `nav-${l.toLowerCase()}-link`,
                children: l,
              },
              s,
            ),
          ),
        }),
        c.jsx("div", {
          className: "hidden items-center gap-5 md:flex shrink-0",
          children: c.jsxs($e, {
            to: "/contact",
            className: Zl(
              yv({ size: "sm" }),
              "rounded-full bg-[#ffbf00] px-5 text-[#1a1814] shadow-[0_8px_20px_rgba(255,191,0,0.18)] hover:bg-[#e5ab00]",
            ),
            "data-testid": "header-consultation-link",
            children: [
              "Start a conversation ",
              c.jsx(Nt, { className: "ml-2 size-4" }),
            ],
          }),
        }),
      ],
    }),
  });
}
function gN() {
  const [l, s] = T.useState(""),
    o = dy({
      mutationFn: (d) => Gy("/consultations/newsletter", d),
      onSuccess: () => {
        (s(""),
          ol.success(
            "You’re on the list. Watch your inbox for the next insight.",
          ));
      },
      onError: () =>
        ol.error("That email could not be added. Please try again."),
    }),
    u = (d) => {
      if ((d.preventDefault(), l.trim().length < 5)) {
        ol.error("Please enter a valid email address.");
        return;
      }
      o.mutate({ email: l.trim() });
    };
  return c.jsxs("footer", {
    className: "border-t border-[#e8e1ce] bg-[#f7f1e3]",
    "data-testid": "site-footer",
    children: [
      c.jsxs("div", {
        className:
          "mx-auto grid max-w-[1320px] gap-12 px-5 py-14 lg:grid-cols-[1.3fr_0.7fr_1.5fr_1.3fr] lg:px-8",
        children: [
          c.jsxs("div", {
            "data-testid": "footer-brand-block",
            children: [
              c.jsx("img", {
                src: bv,
                alt: "Luminor Media",
                className: "h-12 w-auto object-contain mix-blend-multiply",
              }),
              c.jsx("p", {
                className: "mt-5 max-w-xs text-sm leading-7 text-[#575247]",
                children:
                  "Your brand in a new light. Strategy, storytelling, and scale for the brands shaping what’s next.",
              }),
              c.jsxs("div", {
                className: "mt-6 flex gap-3",
                children: [
                  c.jsx("a", {
                    href: du.instagram,
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Instagram",
                    className: "social-icon",
                    "data-testid": "footer-instagram-link",
                    children: c.jsx(Ly, { className: "size-4" }),
                  }),
                  c.jsx("a", {
                    href: du.linkedin,
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "LinkedIn",
                    className: "social-icon",
                    "data-testid": "footer-linkedin-link",
                    children: c.jsx(By, { className: "size-4" }),
                  }),
                  c.jsx("a", {
                    href: "mailto:marketing@luminormedia.in",
                    "aria-label": "Email Marketing@luminormedia.in",
                    className: "social-icon",
                    "data-testid": "footer-email-link",
                    children: c.jsx(yw, { className: "size-4" }),
                  }),
                  c.jsx("a", {
                    href: "tel:+918197445026",
                    "aria-label": "Call +91 8197445026",
                    className: "social-icon",
                    "data-testid": "footer-phone-link",
                    children: c.jsx("svg", {
                      "aria-hidden": true,
                      className: "size-4",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      viewBox: "0 0 24 24",
                      children: c.jsx("path", {
                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92z",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            "data-testid": "footer-navigation-block",
            children: [
              c.jsx("p", { className: "eyebrow", children: "Explore" }),
              c.jsxs("div", {
                className: "mt-4 flex flex-col gap-3 text-sm",
                children: [
                  c.jsx($e, {
                    to: "/about",
                    "data-testid": "footer-about-link",
                    children: "About",
                  }),
                  c.jsx($e, {
                    to: "/services",
                    "data-testid": "footer-services-link",
                    children: "Services",
                  }),
                  c.jsx($e, {
                    to: "/results",
                    "data-testid": "footer-results-link",
                    children: "Results",
                  }),
                  c.jsx($e, {
                    to: "/insights",
                    "data-testid": "footer-insights-link",
                    children: "Insights",
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            "data-testid": "footer-contact-block",
            children: [
              c.jsx("p", { className: "eyebrow", children: "Find us" }),
              c.jsxs("div", {
                className: "mt-4 space-y-3 text-sm text-[#575247]",
                children: [
                  c.jsx("p", {
                    className: "font-serif text-lg font-bold text-[#ffbf00]",
                    "data-testid": "footer-company-name",
                    children: "LUMINOR MEDIA",
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("p", {
                        className: "font-semibold text-[#1a1814]",
                        children: "Registered Office",
                      }),
                      c.jsx("p", {
                        className: "mt-1 text-xs leading-5",
                        "data-testid": "footer-registered-address",
                        children: [
                          "#3698/A, 1ST FLOOR, Maruthi Nilaya,",
                          c.jsx("br", {}),
                          "CK PURA Extension, Near VayuPutra Hospital,",
                          c.jsx("br", {}),
                          "BD Road, Chitradurga - 577501.",
                        ],
                      }),
                    ],
                  }),
                  c.jsx("a", {
                    href: "mailto:Marketing@luminormedia.in",
                    className: "block break-all hover:text-[#1a1814]",
                    "data-testid": "footer-contact-email",
                    children: "Email: Marketing@luminormedia.in",
                  }),
                  c.jsx("a", {
                    href: "tel:+918197445026",
                    className: "block hover:text-[#1a1814]",
                    "data-testid": "footer-contact-phone",
                    children: "Contact Number: +91 8197445026",
                  }),
                  c.jsxs($e, {
                    to: "/contact",
                    className:
                      "font-semibold text-[#1a1814] underline decoration-[#ffbf00] underline-offset-4",
                    "data-testid": "footer-contact-link",
                    children: [
                      "Let’s talk ",
                      c.jsx(Nt, { className: "ml-1 inline size-3" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            "data-testid": "footer-newsletter-block",
            children: [
              c.jsx("p", {
                className: "eyebrow",
                children: "The Luminor letter",
              }),
              c.jsx("p", {
                className: "mt-4 text-sm leading-6 text-[#575247]",
                children:
                  "A considered monthly note on the ideas making brands impossible to ignore.",
              }),
              c.jsxs("form", {
                onSubmit: u,
                className: "mt-5 flex border-b border-[#1a1814] pb-2",
                "data-testid": "newsletter-form",
                children: [
                  c.jsx(su, {
                    type: "email",
                    value: l,
                    onChange: (d) => s(d.target.value),
                    placeholder: "Your email address",
                    "aria-label": "Your email address",
                    className:
                      "h-8 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0",
                    "data-testid": "newsletter-email-input",
                  }),
                  c.jsx("button", {
                    type: "submit",
                    "aria-label": "Subscribe to newsletter",
                    className: "text-[#1a1814]",
                    disabled: o.isPending,
                    "data-testid": "newsletter-submit-button",
                    children: c.jsx(Nt, { className: "size-5" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className:
          "mx-auto flex max-w-[1320px] flex-col justify-between gap-3 border-t border-[#e8e1ce] px-5 py-5 text-[11px] uppercase tracking-[0.14em] text-[#8c8474] sm:flex-row lg:px-8",
        "data-testid": "footer-legal-row",
        children: [
          c.jsx("span", { children: "© 2026 Luminor Media" }),
          c.jsx("span", { children: "Built for brands with somewhere to go." }),
        ],
      }),
    ],
  });
}
function Jl({ children: l }) {
  return c.jsxs("div", {
    className: "min-h-screen bg-[#fffbf2] text-[#1a1814]",
    children: [
      c.jsx("div", { className: "noise-overlay" }),
      c.jsx(hN, {}),
      l,
      c.jsx(gN, {}),
      c.jsx(m4, { richColors: !0, position: "bottom-right" }),
    ],
  });
}
function pN() {
  const l = T.useRef(null);
  return (
    T.useEffect(() => {
      const s = l.current;
      if (!s) return;
      const o = s.getContext("2d");
      if (!o) return;
      let u = 0,
        d = 0;
      const h = Array.from({ length: 110 }, (y, v) => ({
          angle: (v / 110) * Math.PI * 2,
          radius: 0.28 + (v % 7) * 0.025,
          speed: 25e-5 + (v % 5) * 4e-5,
        })),
        p = () => {
          const y = s.clientWidth || 0,
            v = s.clientHeight || 0;
          if (y <= 0 || v <= 0) {
            d = requestAnimationFrame(p);
            return;
          }
          const b = window.devicePixelRatio || 1;
          ((s.width !== Math.floor(y * b) || s.height !== Math.floor(v * b)) &&
            ((s.width = Math.floor(y * b)),
            (s.height = Math.floor(v * b)),
            o.scale(b, b)),
            o.clearRect(0, 0, y, v));
          const S = y * 0.52,
            m = v * 0.48,
            N = Math.max(1, Math.min(y, v)),
            D = Math.max(0.1, N * 0.03),
            k = Math.max(D + 1, N * 0.42),
            L = o.createRadialGradient(S, m, D, S, m, k);
          (L.addColorStop(0, "rgba(255,191,0,0.22)"),
            L.addColorStop(0.45, "rgba(255,191,0,0.07)"),
            L.addColorStop(1, "rgba(255,191,0,0)"),
            (o.fillStyle = L),
            o.fillRect(0, 0, y, v),
            h.forEach((Q, K) => {
              Q.angle += Q.speed;
              const V = N * Q.radius,
                X = Math.sin(u * 0.012 + K) * N * 0.018,
                ee = S + Math.cos(Q.angle) * (V + X),
                $ = m + Math.sin(Q.angle) * (V * 0.54 + X),
                Y = Math.max(0.5, 1.4 + (K % 3) * 0.55);
              (o.beginPath(),
                o.arc(ee, $, Y, 0, Math.PI * 2),
                (o.fillStyle = K % 4 === 0 ? "#1a1814" : "#ffbf00"),
                (o.globalAlpha = 0.35 + (K % 5) * 0.1),
                o.fill());
            }),
            (o.globalAlpha = 1));
          const H = Math.max(0.1, N * 0.18 + Math.sin(u * 0.018) * 3);
          (o.beginPath(),
            o.arc(S, m, H, 0, Math.PI * 2),
            (o.fillStyle = "rgba(255,191,0,0.12)"),
            o.fill());
          const U = Math.max(0.1, N * 0.085);
          (o.beginPath(),
            o.arc(S - N * 0.015, m - N * 0.018, U, 0, Math.PI * 2),
            (o.fillStyle = "#ffbf00"),
            (o.shadowBlur = 34),
            (o.shadowColor = "rgba(255,191,0,0.5)"),
            o.fill(),
            (o.shadowBlur = 0),
            (u += 1),
            (d = requestAnimationFrame(p)));
        };
      return (p(), () => cancelAnimationFrame(d));
    }, []),
    c.jsx("canvas", {
      ref: l,
      className: "orb-canvas",
      "aria-label": "Animated luminous particle globe",
      "data-testid": "hero-orb-canvas",
    })
  );
}
function Pi({ children: l }) {
  return c.jsx("p", {
    className: "eyebrow",
    "data-testid": "section-eyebrow",
    children: l,
  });
}
function ns({ eyebrow: l, title: s, description: o }) {
  return c.jsxs("section", {
    className:
      "mx-auto max-w-[1320px] px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28",
    "data-testid": "page-intro",
    children: [
      c.jsx(Pi, { children: l }),
      c.jsx("h1", {
        className:
          "mt-6 max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-8xl",
        "data-testid": "page-intro-title",
        children: s,
      }),
      c.jsx("p", {
        className: "mt-8 max-w-2xl text-lg leading-8 text-[#575247]",
        "data-testid": "page-intro-description",
        children: o,
      }),
    ],
  });
}
function yN({ compact: l = !1 }) {
  const [s, o] = T.useState({
      name: "",
      email: "",
      company: "",
      investment: "",
      challenge: "",
    }),
    [u, d] = T.useState(!1),
    h = dy({
      mutationFn: (v) => Gy("/consultations", v),
      onSuccess: () => {
        (d(!0), ol.success("Your note is with the Luminor team."));
      },
      onError: () =>
        ol.error("We couldn’t send that just yet. Please try again."),
    }),
    p = (v, b) => o((S) => ({ ...S, [v]: b })),
    y = (v) => {
      (v.preventDefault(), h.mutate(s));
    };
  return u
    ? c.jsxs("div", {
        className:
          "flex min-h-[360px] flex-col justify-center rounded-3xl border border-[#ffbf00]/40 bg-[#fff3cc] p-8",
        "data-testid": "consultation-success",
        children: [
          c.jsx("div", {
            className:
              "flex size-12 items-center justify-center rounded-full bg-[#ffbf00] text-[#1a1814]",
            children: c.jsx(fr, { className: "size-6" }),
          }),
          c.jsx("h3", {
            className: "mt-6 font-serif text-4xl tracking-tight",
            children: "A brighter next chapter starts here.",
          }),
          c.jsx("p", {
            className: "mt-4 max-w-md leading-7 text-[#575247]",
            children:
              "Thanks for reaching out. We’ll be in touch within one business day to find the clearest way forward.",
          }),
          c.jsxs($e, {
            to: "/results",
            className: "mt-7 inline-flex items-center font-semibold",
            "data-testid": "consultation-success-results-link",
            children: [
              "See what’s possible ",
              c.jsx(Nt, { className: "ml-2 size-4" }),
            ],
          }),
        ],
      })
    : c.jsxs("form", {
        onSubmit: y,
        className: Zl("grid gap-5", l ? "" : "lg:grid-cols-2"),
        "data-testid": l ? "compact-consultation-form" : "consultation-form",
        children: [
          c.jsxs("div", {
            children: [
              c.jsx("label", {
                htmlFor: `${l ? "compact-" : ""}name`,
                className: "form-label",
                children: "Your name",
              }),
              c.jsx(su, {
                id: `${l ? "compact-" : ""}name`,
                required: !0,
                value: s.name,
                onChange: (v) => p("name", v.target.value),
                placeholder: "Alex Morgan",
                "data-testid": `${l ? "compact-" : ""}consultation-name-input`,
              }),
            ],
          }),
          c.jsxs("div", {
            children: [
              c.jsx("label", {
                htmlFor: `${l ? "compact-" : ""}email`,
                className: "form-label",
                children: "Work email",
              }),
              c.jsx(su, {
                id: `${l ? "compact-" : ""}email`,
                required: !0,
                type: "email",
                value: s.email,
                onChange: (v) => p("email", v.target.value),
                placeholder: "alex@company.com",
                "data-testid": `${l ? "compact-" : ""}consultation-email-input`,
              }),
            ],
          }),
          c.jsxs("div", {
            children: [
              c.jsx("label", {
                htmlFor: `${l ? "compact-" : ""}company`,
                className: "form-label",
                children: "Company",
              }),
              c.jsx(su, {
                id: `${l ? "compact-" : ""}company`,
                required: !0,
                value: s.company,
                onChange: (v) => p("company", v.target.value),
                placeholder: "Company name",
                "data-testid": `${l ? "compact-" : ""}consultation-company-input`,
              }),
            ],
          }),
          c.jsxs("div", {
            children: [
              c.jsx("label", {
                htmlFor: `${l ? "compact-" : ""}investment`,
                className: "form-label",
                children: "Monthly investment",
              }),
              c.jsxs("select", {
                id: `${l ? "compact-" : ""}investment`,
                required: !0,
                value: s.investment,
                onChange: (v) => p("investment", v.target.value),
                className: "field-select",
                "data-testid": `${l ? "compact-" : ""}consultation-investment-select`,
                children: [
                  c.jsx("option", { value: "", children: "Select a range" }),
                  c.jsx("option", { value: "$2k–$5k", children: "$2k–$5k" }),
                  c.jsx("option", { value: "$5k–$10k", children: "$5k–$10k" }),
                  c.jsx("option", { value: "$10k+", children: "$10k+" }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "lg:col-span-2",
            children: [
              c.jsx("label", {
                htmlFor: `${l ? "compact-" : ""}challenge`,
                className: "form-label",
                children: "What would you like to make brighter?",
              }),
              c.jsx(dN, {
                id: `${l ? "compact-" : ""}challenge`,
                required: !0,
                minLength: 10,
                value: s.challenge,
                onChange: (v) => p("challenge", v.target.value),
                placeholder: "Tell us where your brand is headed...",
                className: "min-h-28 resize-none",
                "data-testid": `${l ? "compact-" : ""}consultation-challenge-textarea`,
              }),
            ],
          }),
          c.jsxs("div", {
            className: "lg:col-span-2",
            children: [
              c.jsxs(q5, {
                type: "submit",
                disabled: h.isPending,
                className:
                  "h-12 rounded-full bg-[#ffbf00] px-6 text-[#1a1814] hover:bg-[#e5ab00]",
                "data-testid": `${l ? "compact-" : ""}consultation-submit-button`,
                children: [
                  h.isPending ? "Sending…" : "Request a consultation",
                  c.jsx(Nt, { className: "ml-2 size-4" }),
                ],
              }),
              c.jsx("p", {
                className: "mt-3 text-xs text-[#8c8474]",
                children: "No hard sell. Just a useful first conversation.",
              }),
            ],
          }),
        ],
      });
}
const xv = [
  {
    number: "01",
    title: "Social Media",
    text: "Build a strong social presence with consistent, engaging content.",
    icon: Mw,
    accent: "#ffbf00",
  },
  {
    number: "02",
    title: "Content Creation",
    text: "Reels, photos, and creative content designed to make your brand stand out.",
    icon: Hw,
    accent: "#e5ab00",
  },
  {
    number: "03",
    title: "Digital Marketing",
    text: "Strategic digital campaigns that connect your brand with the right audience.",
    icon: FS,
    accent: "#d4af37",
  },
  {
    number: "04",
    title: "Branding",
    text: "Create a clear, memorable identity that gives your business a stronger presence.",
    icon: Nw,
    accent: "#c59b27",
  },
];
function Sv({ service: l, index: s }) {
  const o = l.icon;
  return c.jsxs("div", {
    className: Zl(
      "group relative flex flex-col justify-between min-h-[340px] overflow-hidden rounded-[28px] border border-[#e8e1ce] bg-white p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#ffbf00] hover:shadow-[0_22px_55px_rgba(255,191,0,0.14)]",
      s % 2 === 1 && "lg:translate-y-2",
    ),
    "data-testid": `service-card-${l.number}`,
    children: [
      c.jsx("div", {
        className:
          "absolute -right-10 -top-10 size-44 rounded-full border border-[#ffbf00]/15 bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.08),transparent_70%)] transition-all duration-700 ease-out group-hover:scale-125 group-hover:border-[#ffbf00]/30",
      }),
      c.jsxs("div", {
        children: [
          c.jsxs("div", {
            className: "flex items-start justify-between relative z-10",
            children: [
              c.jsx("span", {
                className:
                  "font-mono text-xs font-semibold text-[#8c8474] tracking-wider",
                children: l.number,
              }),
              c.jsx("div", {
                className:
                  "flex size-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                style: { backgroundColor: `${l.accent}18`, color: l.accent },
                children: c.jsx(o, { className: "size-5" }),
              }),
            ],
          }),
          c.jsx("h3", {
            className:
              "mt-14 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1814]",
            children: l.title,
          }),
          c.jsx("p", {
            className: "mt-3.5 text-sm leading-relaxed text-[#575247]",
            children: l.text,
          }),
        ],
      }),
      c.jsxs($e, {
        to: "/services",
        className:
          "mt-8 inline-flex items-center text-xs sm:text-sm font-semibold text-[#1a1814] group-hover:text-[#ffbf00] transition-colors",
        "data-testid": `service-card-${l.number}-link`,
        children: [
          "Explore the work ",
          c.jsx(Nt, {
            className:
              "ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1.5",
          }),
        ],
      }),
    ],
  });
}
function wv({ compact = !1 } = {}) {
  const l = [
    {
      number: "01",
      label: "Brand clarity",
      title: "Be easier to remember.",
      text: "A distinct point of view helps people recognize what you do — and why it matters to them.",
    },
    {
      number: "02",
      label: "Content that connects",
      title: "Give every story a reason.",
      text: "Useful, consistent content gives the right audience a reason to stop, engage, and come back.",
    },
    {
      number: "03",
      label: "Intentional growth",
      title: "Make attention go somewhere.",
      text: "A clear next step can turn interest into an enquiry, a visit, or a sale — based on your goal.",
    },
  ];
  return c.jsx("div", {
    className: compact
      ? "grid gap-3"
      : "grid gap-5 md:grid-cols-3",
    "data-testid": "results-outcomes-grid",
    children: l.map((s) =>
      c.jsxs(
        "article",
        {
          className: compact
            ? "rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            : "rounded-3xl border border-[#e8e1ce] bg-[#fffbf2] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
          children: [
            c.jsxs("div", {
              className: `flex items-center justify-between ${compact ? "text-[#ffbf00]" : "text-[#8c8474]"}`,
              children: [
                c.jsx("span", {
                  className: "font-mono text-[10px] uppercase tracking-[0.2em]",
                  children: s.label,
                }),
                c.jsx("span", {
                  className: "font-mono text-xs",
                  children: s.number,
                }),
              ],
            }),
            c.jsx("h3", {
              className: `mt-7 font-serif text-2xl leading-tight tracking-tight ${compact ? "text-[#fffbf2]" : "text-[#1a1814]"}`,
              children: s.title,
            }),
            c.jsx("p", {
              className: `mt-3 text-sm leading-6 ${compact ? "text-[#b9b1a2]" : "text-[#575247]"}`,
              children: s.text,
            }),
          ],
        },
        s.number,
      ),
    ),
  });
}
function vN() {
  return null;
}
function bN({ quote: l, name: s, role: o }) {
  return c.jsxs("blockquote", {
    className: "max-w-3xl",
    "data-testid": "testimonial-block",
    children: [
      c.jsxs("p", {
        className:
          "font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-5xl",
        children: ["“", l, "”"],
      }),
      c.jsxs("footer", {
        className: "mt-8 flex items-center gap-3 text-sm",
        children: [
          c.jsx("span", { className: "size-2 rounded-full bg-[#ffbf00]" }),
          c.jsx("span", { className: "font-semibold", children: s }),
          c.jsx("span", { className: "text-[#8c8474]", children: o }),
        ],
      }),
    ],
  });
}
const xN = "/assets/sakshi_tailor_logo_1789157413801-dp92ZtE2.jpg",
  SN = "/assets/graines_lotus_logo_1789157452714-B6c9vYZg.jpg",
  wN = "/assets/ka16_runclub_logo_1789157473645-BlAx3t_4.jpg",
  kaveriLogo = "/assets/kaveri-industries.jpg",
  o2SalonLogo = "/assets/o2-salon-and-spa.jpg",
  sd = [
    {
      id: "sakshi-tailor",
      name: "Sakshi Tailor",
      category: "Boutique Fashion & Couture",
      subtitle: "Est. 2008",
      logo: xN,
      accent: "#ff9fb2",
      description:
        "Artisanal tailoring atelier and custom embroidery studio established in 2008, crafting bespoke garments with handcrafted care and timeless silhouette precision.",
      aspectClass: "h-16 w-16 sm:h-20 sm:w-20",
      logoHeight: "h-16 sm:h-20",
      isCustomRound: !0,
    },
    {
      id: "graines-de-lotus",
      name: "Graines de lotus",
      category: "Organic Botanicals & Wellness",
      subtitle: "Intemporelles · Savoureuses · Pures",
      logo: SN,
      accent: "#b59b58",
      description:
        "French artisanal lotus botanical house offering pure, timeless, and delicate botanical nutrition and gourmet seed delicacies crafted in supreme elegance.",
      aspectClass: "h-16 w-16 sm:h-20 sm:w-20",
      logoHeight: "h-16 sm:h-20",
      isCustomRound: !0,
    },
    {
      id: "ka16-run-club",
      name: "KA16 Run Club",
      category: "Athletics & Community Running",
      subtitle: "Legacy in Motion",
      logo: wN,
      accent: "#ffbf00",
      description:
        "High-energy athletics collective and historic community running movement celebrating endurance, gritty heritage, and legacy in perpetual motion.",
      aspectClass: "h-16 w-28 sm:h-20 sm:w-36",
      logoHeight: "h-16 sm:h-20",
      isCustomRound: !1,
    },
    {
      id: "elite-performance",
      name: "Elite Performance",
      category: "Athletic Gear & Cricket",
      subtitle: "Sports Performance",
      logo: "/logos/elite-performance.svg",
      accent: "#0e2254",
      description:
        "Precision-engineered sports equipment and high-performance athletic apparel engineered for professional cricketers and modern athletes.",
      aspectClass: "h-16 w-20 sm:h-20 sm:w-24",
      logoHeight: "h-16 sm:h-20",
    },
    {
      id: "chitradurga-cricket-club",
      name: "Chitradurga Cricket Clubb",
      category: "Sports & Club League",
      subtitle: "Heritage Cricket Club",
      logo: "/logos/chitradurga-cricket-club.svg",
      accent: "#0a4ba6",
      description:
        "Historic Karnataka sports institution championing regional cricket talent, historic discipline, and championship tournament excellence.",
      aspectClass: "h-16 w-16 sm:h-20 sm:w-20",
      logoHeight: "h-16 sm:h-20",
    },
    {
      id: "sri-ranga-medicals",
      name: "Sri Ranga Medicals",
      category: "Healthcare & Pharmacy",
      subtitle: "Medicals & Wellness",
      logo: "/logos/sri-ranga-medicals.svg",
      accent: "#005030",
      description:
        "Trusted community pharmacy and wellness care provider delivering essential healthcare products, guidance, and trusted patient care.",
      aspectClass: "h-14 w-32 sm:h-16 sm:w-44",
      logoHeight: "h-14 sm:h-16",
    },
    {
      id: "kaveri-industries",
      name: "Kaveri Industries",
      category: "Industrial & Manufacturing",
      subtitle: "Pure by design.",
      logo: kaveriLogo,
      accent: "#a54f43",
      description:
        "Kaveri Industries, with the brand line “Pure by design.”",
      logoHeight: "h-16 sm:h-20",
    },
    {
      id: "o2-salon-and-spa",
      name: "O2+ Salon & Spa",
      category: "Salon & Spa",
      subtitle: "Refresh. Rejuvenate. Revive.",
      logo: o2SalonLogo,
      accent: "#9c1231",
      description:
        "O2+ Salon & Spa, with the brand line “Refresh. Rejuvenate. Revive.”",
      logoHeight: "h-16 sm:h-20",
    },
  ];
function NN() {
  const [l, s] = T.useState(null),
    o = [...sd, ...sd, ...sd];
  return c.jsxs("section", {
    className:
      "relative border-y border-[#e8e1ce] bg-[#fffbf2] py-8 overflow-hidden",
    "data-testid": "brands-we-work-with-section",
    children: [
      c.jsx("div", {
        className:
          "mx-auto max-w-[1320px] px-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 lg:px-8",
        children: c.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            c.jsx("span", {
              className: "size-2.5 rounded-full bg-[#ffbf00] animate-pulse",
            }),
            c.jsx("h2", {
              className:
                "font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#1a1814]",
              "data-testid": "brands-heading",
              children: "Brands we work with",
            }),
          ],
        }),
      }),
      c.jsx("div", {
        className: "relative w-full overflow-hidden mask-fade-edges",
        children: c.jsx("div", {
          className: "marquee-track py-3 gap-6 sm:gap-8 px-4",
          "data-testid": "brands-marquee-track",
          children: o.map((u, d) =>
            c.jsxs(
              "div",
              {
                onClick: () => s(u),
                role: "button",
                tabIndex: 0,
                onKeyDown: (h) => h.key === "Enter" && s(u),
                className:
                  "group relative flex shrink-0 cursor-pointer items-center gap-4 sm:gap-5 rounded-2xl border border-[#e8e1ce] bg-white/90 px-6 py-4 sm:px-7 sm:py-4.5 shadow-[0_4px_16px_rgba(26,24,20,0.03)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-[#ffbf00] hover:bg-white hover:shadow-[0_16px_36px_rgba(255,191,0,0.18)]",
                "data-testid": `brand-card-${u.id}`,
                children: [
                  c.jsx("div", {
                    className:
                      "absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    style: { backgroundColor: u.accent },
                  }),
                  c.jsx("div", {
                    className:
                      "flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
                    children: c.jsx("img", {
                      src: u.logo,
                      alt: `${u.name} official logo`,
                      className: `${u.logoHeight || "h-16"} w-auto max-w-[180px] object-contain transition-all duration-300 filter drop-shadow-sm group-hover:drop-shadow-md ${u.isCustomRound ? "rounded-full shadow-sm" : "rounded-lg"}`,
                      loading: "lazy",
                    }),
                  }),
                  c.jsxs("div", {
                    className:
                      "flex flex-col border-l border-[#e8e1ce]/80 pl-4 sm:pl-5 text-left",
                    children: [
                      c.jsx("div", {
                        className: "flex items-center gap-1.5",
                        children: c.jsx("span", {
                          className:
                            "font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1a1814] group-hover:text-[#ffbf00] transition-colors",
                          children: u.name,
                        }),
                      }),
                      c.jsx("span", {
                        className:
                          "font-mono text-xs uppercase tracking-wider text-[#8c8474]",
                        children: u.subtitle,
                      }),
                      c.jsx("span", {
                        className:
                          "mt-0.5 text-xs text-[#575247] font-medium hidden sm:block",
                        children: u.category,
                      }),
                    ],
                  }),
                ],
              },
              `${u.id}-${d}`,
            ),
          ),
        }),
      }),
      l &&
        c.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-[#1a1814]/60 p-4 backdrop-blur-sm animate-in fade-in duration-200",
          onClick: () => s(null),
          "data-testid": "brand-detail-modal",
          children: c.jsxs("div", {
            className:
              "relative w-full max-w-lg rounded-3xl border border-[#e8e1ce] bg-[#fffbf2] p-6 sm:p-8 shadow-2xl text-[#1a1814]",
            onClick: (u) => u.stopPropagation(),
            children: [
              c.jsx("button", {
                type: "button",
                onClick: () => s(null),
                className:
                  "absolute right-5 top-5 flex size-9 items-center justify-center rounded-full border border-[#e8e1ce] bg-white text-[#575247] hover:border-[#ffbf00] hover:text-[#1a1814] transition",
                "aria-label": "Close brand dialog",
                "data-testid": "close-brand-modal",
                children: c.jsx(md, { className: "size-4" }),
              }),
              c.jsxs("div", {
                className:
                  "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8c8474]",
                children: [
                  c.jsx(Yy, { className: "size-3.5 text-[#ffbf00]" }),
                  c.jsx("span", { children: "Verified Client Partner" }),
                ],
              }),
              c.jsx("div", {
                className:
                  "mt-6 flex min-h-[160px] items-center justify-center rounded-2xl border border-[#e8e1ce] bg-white p-8 shadow-inner",
                children: c.jsx("img", {
                  src: l.logo,
                  alt: `${l.name} logo`,
                  className: `max-h-36 w-auto max-w-full object-contain ${l.isCustomRound ? "rounded-full shadow-md aspect-square" : "rounded-xl"}`,
                }),
              }),
              c.jsxs("div", {
                className: "mt-6",
                children: [
                  c.jsx("h3", {
                    className:
                      "font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1814]",
                    children: l.name,
                  }),
                  c.jsxs("p", {
                    className:
                      "mt-1 font-mono text-xs font-semibold text-[#8c8474]",
                    children: [l.subtitle, " · ", l.category],
                  }),
                  c.jsx("p", {
                    className: "mt-4 text-sm leading-relaxed text-[#575247]",
                    children: l.description,
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "mt-7 flex items-center justify-between border-t border-[#e8e1ce] pt-4",
                children: [
                  c.jsx("span", {
                    className:
                      "font-mono text-[10px] text-[#8c8474] uppercase tracking-wider",
                    children: "Original Brand Asset",
                  }),
                  c.jsx("button", {
                    type: "button",
                    onClick: () => s(null),
                    className:
                      "inline-flex items-center rounded-full bg-[#ffbf00] px-5 py-2 text-xs font-semibold text-[#1a1814] hover:bg-[#e5ab00] transition",
                    children: "Done",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const EN = "/assets/preetham_founder_new-B8PCqPA1.png",
  TN =
    "https://images.unsplash.com/photo-1638545818407-ac7a54b544fd?auto=format&fit=crop&w=1200&q=85";
function jN() {
  return c.jsx(Jl, {
    children: c.jsxs("main", {
      children: [
        c.jsxs("section", {
          className:
            "relative mx-auto grid min-h-[calc(100vh-74px)] max-w-[1320px] items-center gap-8 overflow-hidden px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20",
          "data-testid": "home-hero-section",
          children: [
            c.jsxs("div", {
              className: "relative z-10",
              "data-testid": "home-hero-copy",
              children: [
                c.jsxs("div", {
                  className: "eyebrow flex items-center gap-3",
                  children: [
                    c.jsx("span", {
                      className: "size-2 rounded-full bg-[#ffbf00]",
                    }),
                    " ",
                    c.jsx("span", {
                      className: "font-bold tracking-[0.2em] text-[#1a1814]",
                      children: "CREATIVE • CONTENT • DIGITAL",
                    }),
                  ],
                }),
                c.jsxs("h1", {
                  className:
                    "mt-7 max-w-4xl font-serif text-6xl leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:text-[7.25rem]",
                  "data-testid": "home-hero-title",
                  children: [
                    "Make your brand ",
                    c.jsx("span", {
                      className: "italic text-[#ffbf00]",
                      children: "impossible",
                    }),
                    " to scroll past.",
                  ],
                }),
                c.jsx("p", {
                  className: "mt-8 max-w-xl text-lg leading-8 text-[#575247]",
                  "data-testid": "home-hero-description",
                  children:
                    "Luminor Media is a Digital Marketing Agency helping brands grow through strategy, branding content and social media.",
                }),
                c.jsxs("div", {
                  className: "mt-9 flex flex-wrap items-center gap-4",
                  children: [
                    c.jsxs($e, {
                      to: "/contact",
                      className:
                        "inline-flex items-center rounded-full bg-[#ffbf00] px-6 py-3.5 text-sm font-semibold text-[#1a1814] shadow-[0_12px_30px_rgba(255,191,0,0.2)] transition hover:-translate-y-1 hover:bg-[#e5ab00]",
                      "data-testid": "hero-primary-cta",
                      children: [
                        "Start a conversation ",
                        c.jsx(Nt, { className: "ml-2 size-4" }),
                      ],
                    }),
                    c.jsxs($e, {
                      to: "/results",
                      className:
                        "inline-flex items-center rounded-full border border-[#1a1814]/20 px-6 py-3.5 text-sm font-semibold transition hover:border-[#ffbf00]",
                      "data-testid": "hero-secondary-cta",
                      children: [
                        c.jsx(Tw, {
                          className:
                            "mr-2 size-4 fill-[#ffbf00] text-[#ffbf00]",
                        }),
                        " See the work",
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "mt-14 flex items-center gap-4 text-xs uppercase tracking-[0.12em] text-[#8c8474]",
                  "data-testid": "hero-scroll-cue",
                  children: [
                    c.jsx(YS, { className: "size-5 text-[#ffbf00]" }),
                    " Scroll to explore",
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "relative min-h-[430px] lg:min-h-[650px]",
              "data-testid": "home-hero-visual",
              children: [
                c.jsx("div", {
                  className:
                    "absolute right-0 top-1/2 h-[88%] w-[94%] -translate-y-1/2 rounded-[48%] border border-[#ffbf00]/20 bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.12),transparent_62%)]",
                }),
                c.jsx(pN, {}),
                c.jsxs("div", {
                  className:
                    "absolute bottom-10 left-2 rounded-2xl border border-[#e8e1ce] bg-[#fffbf2]/85 p-4 backdrop-blur-md",
                  "data-testid": "hero-floating-note",
                  children: [
                    c.jsx("p", {
                      className:
                        "font-mono text-[10px] uppercase tracking-[0.16em] text-[#8c8474]",
                      children: "The Luminor lens",
                    }),
                    c.jsx("p", {
                      className: "mt-2 max-w-[170px] text-sm leading-5",
                      children:
                        "Good content gets attention. Great content gives it somewhere to go.",
                    }),
                  ],
                }),
                c.jsx("div", {
                  className:
                    "absolute right-4 top-14 hidden rounded-full bg-[#1a1814] px-4 py-2 text-xs font-semibold text-[#ffbf00] sm:block",
                  "data-testid": "hero-floating-badge",
                  children: "strategy × story",
                }),
              ],
            }),
          ],
        }),
        c.jsx(NN, {}),
        c.jsx("section", {
          className: "mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32",
          "data-testid": "home-services-section",
          children: c.jsxs("div", {
            className:
              "grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-start",
            children: [
              c.jsxs("div", {
                className: "lg:sticky lg:top-28",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      c.jsx("span", {
                        className: "size-2 rounded-full bg-[#ffbf00]",
                      }),
                      c.jsx("span", {
                        className:
                          "font-mono text-base font-bold uppercase tracking-[0.24em] text-[#1a1814] sm:text-lg",
                        "data-testid": "home-services-label",
                        children: "SERVICES",
                      }),
                    ],
                  }),
                  c.jsxs("h2", {
                    className:
                      "mt-5 max-w-md font-serif text-4xl tracking-tight sm:text-5xl lg:text-[3.25rem] leading-[1.08]",
                    "data-testid": "home-services-title",
                    children: [
                      "Bringing your brand into a ",
                      c.jsx("span", {
                        className: "italic text-[#ffbf00]",
                        children: "new light.",
                      }),
                    ],
                  }),
                  c.jsx("p", {
                    className:
                      "mt-6 max-w-md text-base leading-7 text-[#575247]",
                    "data-testid": "home-services-description",
                    children:
                      "We help businesses grow through strategy, social media, content creation, and digital marketing that gets your brand seen and remembered.",
                  }),
                  c.jsx("div", {
                    className: "mt-8",
                    children: c.jsxs($e, {
                      to: "/services",
                      className:
                        "group inline-flex items-center rounded-full bg-[#1a1814] px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#fffbf2] shadow-sm transition hover:bg-[#ffbf00] hover:text-[#1a1814]",
                      "data-testid": "home-services-link",
                      children: [
                        "Explore our services ",
                        c.jsx(Nt, {
                          className:
                            "ml-2 size-4 transition-transform group-hover:translate-x-1.5",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              c.jsx("div", {
                className: "grid gap-5 sm:grid-cols-2",
                children: xv.map((l, s) =>
                  c.jsx(Sv, { service: l, index: s }, l.number),
                ),
              }),
            ],
          }),
        }),
        c.jsx("section", {
          className: "bg-[#1a1814] text-[#fffbf2]",
          "data-testid": "home-results-preview",
          children: c.jsxs("div", {
            className:
              "mx-auto grid max-w-[1320px] gap-12 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-32",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx(Pi, { children: "Proof, not promises" }),
                  c.jsx("h2", {
                    className:
                      "mt-6 max-w-xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl",
                    "data-testid": "home-results-title",
                    children: "Creative that earns its keep.",
                  }),
                  c.jsx("p", {
                    className:
                      "mt-6 max-w-md text-base leading-7 text-[#b9b1a2]",
                    children:
                      "The best work gives people a reason to remember you — and a clear next step when they’re ready.",
                  }),
                  c.jsxs($e, {
                    to: "/results",
                    className:
                      "mt-8 inline-flex items-center rounded-full border border-[#ffbf00]/50 px-5 py-3 text-sm font-semibold text-[#ffbf00] transition hover:bg-[#ffbf00] hover:text-[#1a1814]",
                    "data-testid": "home-results-link",
                    children: [
                      "Explore results ",
                      c.jsx(Nt, { className: "ml-2 size-4" }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "relative min-h-[320px] overflow-hidden rounded-3xl",
                children: [
                  c.jsx("img", {
                    src: TN,
                    alt: "Creative team in a studio",
                    className:
                      "absolute inset-0 size-full object-cover opacity-70",
                  }),
                  c.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-[#1a1814] via-transparent to-transparent",
                  }),
                  c.jsx("p", {
                    className:
                      "absolute bottom-5 left-5 max-w-[210px] font-serif text-2xl leading-tight",
                    children: "Make the feed feel different.",
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsx("section", {
          className: "mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32",
          "data-testid": "home-founders-story-section",
          children: c.jsxs("div", {
            className: "grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      c.jsx("span", {
                        className:
                          "size-3 rounded-full bg-[#ffbf00] animate-pulse shrink-0",
                      }),
                      c.jsxs("h2", {
                        className:
                          "font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
                        "data-testid": "home-founders-story-title",
                        children: [
                          c.jsx("span", {
                            className: "text-[#1a1814]",
                            children: "Founder",
                          }),
                          " ",
                          c.jsx("span", {
                            className: "text-[#ffbf00]",
                            children: "Story",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "mt-8 space-y-5 text-base leading-8 text-[#575247] sm:text-lg",
                    children: [
                      c.jsx("p", {
                        children:
                          "Every brand starts with a dream. Luminor Media started with ours.",
                      }),
                      c.jsxs("p", {
                        children: [
                          "We wanted to create more than just another digital marketing agency. We wanted to build a place where",
                          " ",
                          c.jsx("em", {
                            className:
                              "font-serif text-[#1a1814] not-italic italic",
                            children:
                              "ideas become stories, stories become experiences, and brands find their voice.",
                          }),
                        ],
                      }),
                      c.jsxs("p", {
                        children: [
                          "Founded with a passion for",
                          " ",
                          c.jsx("strong", {
                            className: "font-semibold text-[#1a1814]",
                            children:
                              "creative media, videography, branding, and digital marketing",
                          }),
                          ", Luminor Media was created to help businesses turn their vision into something people can see, feel, and remember.",
                        ],
                      }),
                      c.jsxs("p", {
                        children: [
                          "We're still writing our story, but our purpose remains simple —",
                          " ",
                          c.jsx("span", {
                            className: "italic text-[#1a1814]",
                            children:
                              "to bring every brand we work with into the spotlight and help it shine.",
                          }),
                        ],
                      }),
                      c.jsx("p", {
                        className: "pt-2 text-xl font-serif text-[#1a1814]",
                        children:
                          "Because we believe your brand deserves more than attention.",
                      }),
                      c.jsx("p", {
                        className: "text-2xl font-serif italic text-[#ffbf00]",
                        children: "It deserves to be remembered.",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "mt-10 border-t border-[#e8e1ce] pt-6",
                    children: [
                      c.jsx("p", {
                        className:
                          "font-serif text-lg font-medium italic text-[#1a1814]",
                        children: "Luminor Media — Your Brand. In a New Light.",
                      }),
                      c.jsxs("div", {
                        className: "mt-4",
                        children: [
                          c.jsx("p", {
                            className:
                              "font-serif text-xl font-semibold text-[#1a1814]",
                            children: "Preetham A",
                          }),
                          c.jsx("p", {
                            className:
                              "font-mono text-xs uppercase tracking-wider text-[#8c8474]",
                            children: "Founder, LuminorMedia",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx("div", {
                className: "relative mx-auto max-w-md lg:max-w-none",
                children: c.jsxs("div", {
                  className:
                    "group relative overflow-hidden rounded-[2.5rem] border border-[#e8e1ce] bg-[#1a1814] shadow-2xl transition-all duration-500 hover:border-[#ffbf00]/40",
                  children: [
                    c.jsx("div", {
                      className: "aspect-[3/4] w-full overflow-hidden",
                      children: c.jsx("img", {
                        src: EN,
                        alt: "Preetham A - Founder, LuminorMedia",
                        className:
                          "size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105",
                        "data-testid": "founder-portrait-image",
                      }),
                    }),
                    c.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-[#1a1814] via-transparent to-transparent opacity-80",
                    }),
                    c.jsx("div", {
                      className: "absolute bottom-0 left-0 right-0 p-6 sm:p-8",
                      children: c.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          c.jsxs("div", {
                            children: [
                              c.jsx("p", {
                                className:
                                  "font-serif text-2xl font-semibold text-[#fffbf2]",
                                children: "Preetham A",
                              }),
                              c.jsx("p", {
                                className:
                                  "font-mono text-xs uppercase tracking-wider text-[#ffbf00]",
                                children: "Founder, LuminorMedia",
                              }),
                            ],
                          }),
                          c.jsx("span", {
                            className:
                              "rounded-full border border-[#ffbf00]/40 bg-[#1a1814]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#ffbf00] backdrop-blur-sm",
                            children: "Leadership",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        c.jsx("section", {
          className: "border-t border-[#e8e1ce] bg-[#f7f1e3]",
          "data-testid": "home-cta-section",
          children: c.jsxs("div", {
            className:
              "mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 px-5 py-20 lg:flex-row lg:items-end lg:px-8 lg:py-28",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx(Pi, { children: "Ready when you are" }),
                  c.jsx("h2", {
                    className:
                      "mt-5 max-w-2xl font-serif text-5xl leading-none tracking-tight sm:text-6xl",
                    children: "Your brand has more to say.",
                  }),
                ],
              }),
              c.jsxs($e, {
                to: "/contact",
                className:
                  "inline-flex shrink-0 items-center rounded-full bg-[#ffbf00] px-6 py-3.5 text-sm font-semibold text-[#1a1814] transition hover:-translate-y-1 hover:bg-[#e5ab00]",
                "data-testid": "home-bottom-cta",
                children: [
                  "Let’s find the signal ",
                  c.jsx(Nt, { className: "ml-2 size-4" }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const CN = "/assets/how_we_work_transparent-B8T7ykN_.png";
function zN() {
  return c.jsx("div", {
    className: "w-full relative flex items-center justify-center",
    "data-testid": "how-we-work-graphic",
    children: c.jsx("img", {
      src: CN,
      alt: "How We Work: 01 Discover, 02 Strategize, 03 Create, 04 Publish, 05 Optimize",
      className: "w-full h-auto object-contain block bg-transparent",
      loading: "lazy",
    }),
  });
}
const RN = "/assets/preetham-BeMfbDwj.jpg",
  _N = "/assets/ravindra-Xsc_n1Ei.jpg",
  AN = "/assets/chetas-CRZ600Ph.jpg",
  MN = "/assets/vishnu-DbvKKISR.jpg",
  ON = "/assets/hardik-D8uZUr03.jpg",
  DN = "/assets/gokul-c2OuqNpe.jpg",
  kN = "/assets/sagar-DinotMJS.jpg",
  UN = "/assets/suheart-BvDAtgPo.jpg",
  HN = "/assets/tarun-D5B-3aiD.jpg",
  LN = "/assets/niyathi-BfZVfOeQ.jpg",
  Vp = [
    ["Tarun Tanmay", "Editor", HN],
    ["Niyathi Jain", "Content Strategist", LN],
    ["Preetham A", "Founder / Performance Marketer", RN],
    ["Hardik P", "Co Founder / Content Strategist", UN],
    ["Ravindra M.O", "Web Developer", _N],
    ["Chethas", "Creative Head", AN],
    ["Vishnu Reddy", "Executive Manager", MN],
    ["Suheart", "Cinematographer", ON],
    ["Gokul", "Graphic Designer", DN],
    ["Sagar RS", "Technical Advisor", kN],
  ];
function BN() {
  const [l, s] = T.useState({}),
    o = (d) => {
      s((h) => ({ ...h, [d]: !h[d] }));
    },
    u = [...Vp, ...Vp];
  return c.jsx(Jl, {
    children: c.jsxs("main", {
      children: [
        c.jsx(ns, {
          eyebrow: "The studio",
          title: c.jsxs(c.Fragment, {
            children: [
              "A little more ",
              c.jsx("span", {
                className: "italic text-[#ffbf00]",
                children: "light",
              }),
              " on the way in.",
            ],
          }),
          description:
            "Luminor is an independent social and digital studio for brands with ambition, taste, and somewhere meaningful to go next.",
        }),
        c.jsx("section", {
          className: "mx-auto max-w-[1320px] px-5 pb-24 lg:px-8 lg:pb-32",
          "data-testid": "about-story-section",
          children: c.jsxs("div", {
            className: "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
            children: [
              c.jsx("div", { className: "w-full", children: c.jsx(zN, {}) }),
              c.jsxs("div", {
                className: "flex flex-col justify-center",
                children: [
                  c.jsx("p", {
                    className:
                      "font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#8c8474]",
                    "data-testid": "section-eyebrow",
                    children: "How we work",
                  }),
                  c.jsxs("h2", {
                    className:
                      "mt-5 font-serif text-4xl tracking-tight sm:text-5xl uppercase leading-[1.12]",
                    "data-testid": "about-story-title",
                    children: [
                      "WE DON’T JUST BUILD BRANDS.",
                      c.jsx("br", {}),
                      c.jsx("span", {
                        className: "text-[#ffbf00]",
                        children: "WE BRING THEM INTO THE LIGHT.",
                      }),
                    ],
                  }),
                  c.jsxs($e, {
                    to: "/services",
                    className:
                      "mt-8 inline-flex items-center text-sm font-semibold",
                    "data-testid": "about-story-services-link",
                    children: [
                      "See how we work ",
                      c.jsx(Nt, { className: "ml-2 size-4" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsxs("section", {
          className:
            "bg-[#1a1814] text-[#fffbf2] py-20 lg:py-28 overflow-hidden",
          "data-testid": "about-team-section",
          children: [
            c.jsxs("div", {
              className:
                "mx-auto max-w-[1320px] px-5 lg:px-8 mb-12 flex flex-col items-center text-center gap-2",
              children: [
                c.jsx("h2", {
                  className:
                    "font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#ffbf00] uppercase",
                  children: "PEOPLE BEHIND THE LIGHT",
                }),
                c.jsx("p", {
                  className:
                    "mt-1 font-serif text-xl sm:text-2xl tracking-tight text-[#b9b1a2] uppercase",
                  children: "THE TEAM, IN FOCUS.",
                }),
              ],
            }),
            c.jsx("div", {
              className: "relative w-full overflow-hidden mask-fade-edges",
              children: c.jsx("div", {
                className: "marquee-track py-6 gap-6 sm:gap-8 px-4",
                "data-testid": "team-marquee-track",
                children: u.map(([d, h, p], y) => {
                  const v = !!l[d];
                  return c.jsxs(
                    "div",
                    {
                      "data-testid": `team-card-${d.toLowerCase().replaceAll(" ", "-")}-${y}`,
                      className:
                        "group relative flex flex-col items-center shrink-0 cursor-pointer select-none rounded-3xl border border-white/10 bg-[#24211c]/90 p-5 sm:p-6 w-[200px] sm:w-[220px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ffbf00]/50 hover:bg-[#24211c] hover:shadow-[0_16px_36px_rgba(255,191,0,0.15)]",
                      onClick: () => o(d),
                      children: [
                        c.jsx("div", {
                          className: `aspect-square w-32 sm:w-36 overflow-hidden rounded-full transition-all duration-300 ${v ? "ring-4 ring-[#ffbf00] shadow-xl shadow-[#ffbf00]/25 scale-105" : "group-hover:scale-105"}`,
                          children: c.jsx("img", {
                            src: p,
                            alt: d,
                            className: `size-full object-cover transition duration-700 ${v ? "grayscale-0" : "grayscale group-hover:grayscale-[30%]"}`,
                          }),
                        }),
                        c.jsx("div", {
                          className: "mt-4 min-h-[52px] w-full text-center",
                          children:
                            v &&
                            c.jsxs("div", {
                              className:
                                "animate-in fade-in slide-in-from-top-1 duration-300",
                              children: [
                                c.jsx("h3", {
                                  className:
                                    "font-serif text-base sm:text-lg font-medium text-[#ffbf00] leading-snug",
                                  children: d,
                                }),
                                c.jsx("p", {
                                  className:
                                    "mt-1 text-xs sm:text-sm text-white font-medium leading-tight",
                                  children: h,
                                }),
                              ],
                            }),
                        }),
                      ],
                    },
                    `${d}-${y}`,
                  );
                }),
              }),
            }),
          ],
        }),
        c.jsx("section", {
          className: "mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32",
          "data-testid": "about-difference-section",
          children: c.jsxs("div", {
            className: "grid gap-12 lg:grid-cols-2 lg:items-center",
            children: [
              c.jsx("div", {
                children: c.jsxs("h2", {
                  className:
                    "font-serif text-4xl tracking-tight text-[#1a1814] sm:text-5xl lg:text-6xl",
                  "data-testid": "why-luminor-heading",
                  children: [
                    c.jsx("span", {
                      className: "font-bold text-[#ffbf00]",
                      children: "WHY",
                    }),
                    " LUMINOR MEDIA",
                  ],
                }),
              }),
              c.jsx("div", {
                className: "space-y-4",
                children: [
                  "Strategy built around your goals",
                  "Creative that feels true to your brand",
                  "Content made to connect, not just fill a feed",
                  "A team that works with you, not just for you",
                ].map((d) =>
                  c.jsxs(
                    "div",
                    {
                      className:
                        "flex items-center gap-4 border-b border-[#e8e1ce] pb-5 text-lg font-medium text-[#1a1814] sm:text-xl",
                      "data-testid": `why-luminor-${d.slice(0, 8).toLowerCase().replaceAll(" ", "-")}`,
                      children: [
                        c.jsx("span", {
                          className:
                            "flex size-7 shrink-0 items-center justify-center rounded-full bg-[#ffbf00] text-[#1a1814]",
                          children: c.jsx(fr, {
                            className: "size-4 stroke-[3]",
                          }),
                        }),
                        c.jsx("span", { children: d }),
                      ],
                    },
                    d,
                  ),
                ),
              }),
            ],
          }),
        }),
        c.jsx("section", {
          className: "border-t border-[#e8e1ce] bg-[#f7f1e3]",
          "data-testid": "about-cta-section",
          children: c.jsx("div", {
            className: "mx-auto max-w-[1320px] px-5 py-20 lg:px-8",
            children: c.jsx(bN, {
              quote:
                "The best partner is the one who makes your ambition feel more achievable.",
              name: "The Luminor philosophy",
              role: "Since 2018",
            }),
          }),
        }),
      ],
    }),
  });
}
const qN = [
  [
    "01",
    "Web Design & Development",
    "Websites designed to represent your brand and convert visitors.",
  ],
  [
    "02",
    "Creative Direction",
    "Defining the visual style, tone, and creative direction of your brand.",
  ],
  [
    "03",
    "Campaigns & Launches",
    "Planning and executing creative campaigns around your goals.",
  ],
  [
    "04",
    "Analytics & Insights",
    "Tracking performance and turning data into smarter decisions.",
  ],
];
function YN() {
  return c.jsx(Jl, {
    children: c.jsxs("main", {
      children: [
        c.jsx(ns, {
          eyebrow: "Capabilities",
          title: c.jsxs(c.Fragment, {
            children: [
              "Make good work ",
              c.jsx("span", {
                className: "italic text-[#ffbf00]",
                children: "matter.",
              }),
            ],
          }),
          description:
            "Strategy, social media, content creation, and digital marketing aligned toward one clear outcome: a brand people notice, trust, and choose.",
        }),
        c.jsx("section", {
          className: "mx-auto max-w-[1320px] px-5 pb-24 lg:px-8 lg:pb-32",
          "data-testid": "services-grid-section",
          children: c.jsx("div", {
            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
            children: xv.map((l, s) =>
              c.jsx(Sv, { service: l, index: s }, l.number),
            ),
          }),
        }),
        c.jsx("section", {
          className: "border-y border-[#e8e1ce] bg-[#f7f1e3]",
          "data-testid": "services-process-section",
          children: c.jsxs("div", {
            className: "mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32",
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  c.jsx("span", {
                    className:
                      "size-3 rounded-full bg-[#ffbf00] animate-pulse shrink-0",
                  }),
                  c.jsxs("h2", {
                    className:
                      "font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl",
                    "data-testid": "services-additional-expertise-title",
                    children: [
                      c.jsx("span", {
                        className: "text-[#1a1814]",
                        children: "ADDITIONAL",
                      }),
                      " ",
                      c.jsx("span", {
                        className: "text-[#ffbf00]",
                        children: "EXPERTISE",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx("div", {
                className:
                  "mt-12 grid gap-0 border-l border-[#e8e1ce] lg:grid-cols-4 lg:border-l-0 lg:border-t",
                children: qN.map(([l, s, o]) =>
                  c.jsxs(
                    "div",
                    {
                      className:
                        "relative border-b border-[#e8e1ce] py-8 pl-8 lg:border-b-0 lg:border-l lg:pl-6 lg:pt-8",
                      "data-testid": `process-step-${l}`,
                      children: [
                        c.jsx("span", {
                          className:
                            "absolute -left-[5px] top-9 size-2 rounded-full bg-[#ffbf00] lg:-top-[5px] lg:left-6",
                        }),
                        c.jsxs("p", {
                          className:
                            "font-mono text-xs font-bold text-[#ffbf00]",
                          children: [l, " —"],
                        }),
                        c.jsx("h3", {
                          className:
                            "mt-6 font-serif text-2xl leading-snug lg:text-[1.75rem]",
                          children: s,
                        }),
                        c.jsx("p", {
                          className: "mt-3 text-sm leading-6 text-[#575247]",
                          children: o,
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
            ],
          }),
        }),
        c.jsx("section", {
          className: "mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32",
          "data-testid": "services-proof-section",
          children: c.jsx(vN, {}),
        }),
        c.jsx("section", {
          className: "bg-[#1a1814] text-[#fffbf2]",
          "data-testid": "services-bottom-cta",
          children: c.jsxs("div", {
            className:
              "mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-8 lg:py-28",
            children: [
              c.jsx("h2", {
                className:
                  "max-w-2xl font-serif text-5xl leading-none tracking-tight sm:text-6xl",
                children: "You bring the ambition. We’ll bring the light.",
              }),
              c.jsxs($e, {
                to: "/contact",
                className:
                  "inline-flex shrink-0 items-center rounded-full bg-[#ffbf00] px-6 py-3.5 text-sm font-semibold text-[#1a1814]",
                "data-testid": "services-bottom-cta-link",
                children: [
                  "Let’s begin ",
                  c.jsx(Nt, { className: "ml-2 size-4" }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function CampaignWalkthrough() {
  const [activeStage, setActiveStage] = T.useState(0);
  const stages = [
    {
      label: "Goal",
      output: "More weekend visits from nearby customers.",
      detail:
        "Start with the action the business wants, not just another post.",
    },
    {
      label: "Hook",
      output: "A little pause, poured fresh.",
      detail:
        "A concise line makes the coffee break feel like a moment worth choosing.",
    },
    {
      label: "Creative",
      output: "Beans. Pour. First sip. Café sign.",
      detail:
        "A warm reel moves from sensory detail to a clear sense of place.",
    },
    {
      label: "Next step",
      output: "Save this for your next coffee run.",
      detail:
        "Add a location and invitation; review saves and profile or direction taps where available.",
    },
  ];
  const currentStage = stages[activeStage];
  return c.jsxs("section", {
    className: "border-y border-[#e8e1ce] bg-[#f7f1e3] py-16 lg:py-20",
    "data-testid": "results-campaign-walkthrough",
    children: c.jsxs("div", {
      className: "mx-auto max-w-[1320px] px-5 lg:px-8",
      children: [
        c.jsxs("div", {
          className: "mb-6",
          children: [
            c.jsx(Pi, { children: "Illustrative concept · not client work" }),
            c.jsxs("h2", {
              className: "mt-3 font-serif text-3xl tracking-tight sm:text-4xl",
              children: [
                "From brief to ",
                c.jsx("span", {
                  className: "italic text-[#ffbf00]",
                  children: "campaign.",
                }),
              ],
            }),
          ],
        }),
        c.jsx("div", {
          className: "mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4",
          role: "group",
          "aria-label": "Campaign walkthrough stages",
          children: stages.map((stage, index) =>
            c.jsxs(
              "button",
              {
                type: "button",
                "aria-pressed": activeStage === index,
                "aria-label": `0${index + 1} ${stage.label}`,
                "data-testid": `campaign-stage-${index + 1}`,
                onClick: () => setActiveStage(index),
                className: `border-b-2 px-3 py-3 text-left text-sm font-medium transition-colors ${activeStage === index ? "border-[#ffbf00] text-[#1a1814]" : "border-[#d8cfbb] text-[#8c8474] hover:text-[#1a1814]"}`,
                children: c.jsxs("span", {
                  children: [
                    c.jsx("span", {
                      className: "mr-2 font-mono text-xs",
                      children: `0${index + 1}`,
                    }),
                    stage.label,
                  ],
                }),
              },
              stage.label,
            ),
          ),
        }),
        c.jsxs("div", {
          className:
            "rounded-2xl bg-[#1a1814] p-6 text-[#fffbf2] sm:flex sm:items-end sm:justify-between sm:gap-8 sm:p-8",
          children: [
            c.jsxs("div", {
              className: "max-w-2xl",
              children: [
                c.jsx("h3", {
                  className:
                    "font-serif text-2xl leading-tight tracking-tight sm:text-3xl",
                  "aria-live": "polite",
                  children: currentStage.output,
                }),
                c.jsx("p", {
                  className: "mt-3 text-sm leading-6 text-[#b9b1a2]",
                  children: currentStage.detail,
                }),
              ],
            }),
            c.jsx("span", {
              className:
                "mt-5 block shrink-0 font-mono text-xs text-[#ffbf00] sm:mt-0",
              children: "A neighborhood coffee shop",
            }),
          ],
        }),
      ],
    }),
  });
}
function VN() {
  return c.jsx(Jl, {
    children: c.jsxs("main", {
      children: [
        c.jsx(ns, {
          eyebrow: "The outcomes we work toward",
          title: c.jsxs(c.Fragment, {
            children: [
              "The work speaks ",
              c.jsx("span", {
                className: "italic text-[#ffbf00]",
                children: "louder.",
              }),
            ],
          }),
          description:
            "No borrowed benchmarks or vanity numbers. Just a clear goal, thoughtful creative, and progress you can measure.",
        }),
        c.jsx("section", {
          className: "mx-auto max-w-[1320px] px-5 pb-24 lg:px-8 lg:pb-32",
          "data-testid": "results-metrics-section",
          children: c.jsx(wv, {}),
        }),
        c.jsx(CampaignWalkthrough, {}),
        c.jsx("section", {
          className: "border-y border-[#e8e1ce] bg-[#f7f1e3] py-24 lg:py-32",
          "data-testid": "results-measurement-section",
          children: c.jsxs("div", {
            className: "mx-auto max-w-[1320px] px-5 lg:px-8",
            children: [
              c.jsxs("div", {
                className:
                  "mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx(Pi, { children: "A thoughtful way to measure" }),
                      c.jsxs("h2", {
                        className: "mt-4 font-serif text-4xl tracking-tight sm:text-5xl",
                        children: [
                          "Make progress ",
                          c.jsx("span", {
                            className: "italic text-[#ffbf00]",
                            children: "visible.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("p", {
                    className: "max-w-sm text-sm leading-7 text-[#575247]",
                    children:
                      "Success looks different for every brand. We agree on the goal first, then focus on the signals that matter.",
                  }),
                ],
              }),
              c.jsx("div", {
                className: "grid gap-5 md:grid-cols-3",
                children: [
                  {
                    number: "01",
                    title: "Agree on the goal.",
                    text: "Set a practical starting point before launch — whether the priority is awareness, enquiries, visits, or sales.",
                  },
                  {
                    number: "02",
                    title: "Follow the right signals.",
                    text: "Look beyond the loudest number. Track indicators that match your goal and the channels you use.",
                  },
                  {
                    number: "03",
                    title: "Learn, then refine.",
                    text: "Review what resonated, share what changed, and shape the next move around real evidence.",
                  },
                ].map((l) =>
                  c.jsxs(
                    "article",
                    {
                      className:
                        "border-t border-[#d8cfbb] pt-5",
                      children: [
                        c.jsx("span", {
                          className:
                            "font-mono text-xs tracking-[0.2em] text-[#b38200]",
                          children: l.number,
                        }),
                        c.jsx("h3", {
                          className:
                            "mt-5 font-serif text-2xl tracking-tight text-[#1a1814]",
                          children: l.title,
                        }),
                        c.jsx("p", {
                          className:
                            "mt-3 max-w-sm text-sm leading-6 text-[#575247]",
                          children: l.text,
                        }),
                      ],
                    },
                    l.number,
                  ),
                ),
              }),
            ],
          }),
        }),
        c.jsx("section", {
          className: "bg-[#1a1814] text-[#fffbf2]",
          "data-testid": "results-bottom-cta",
          children: c.jsxs("div", {
            className:
              "mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-8 lg:py-28",
            children: [
              c.jsx("h2", {
                className:
                  "max-w-xl font-serif text-5xl tracking-tight sm:text-6xl",
                children: "What would your before + after look like?",
              }),
              c.jsxs($e, {
                to: "/contact",
                className:
                  "inline-flex shrink-0 items-center rounded-full bg-[#ffbf00] px-6 py-3.5 text-sm font-semibold text-[#1a1814] transition hover:-translate-y-1 hover:bg-[#e5ab00]",
                "data-testid": "results-contact-link",
                children: [
                  "Find out ",
                  c.jsx(Nt, { className: "ml-2 size-4" }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function QN() {
  return c.jsx(Jl, {
    children: c.jsxs("main", {
      children: [
        c.jsx(ns, {
          eyebrow: "Let’s talk",
          title: c.jsxs(c.Fragment, {
            children: [
              "Put a little more ",
              c.jsx("span", {
                className: "italic text-[#ffbf00]",
                children: "light",
              }),
              " into the room.",
            ],
          }),
          description:
            "Tell us what you’re building, where you’re stuck, or what you’re curious about. We’ll bring the useful questions.",
        }),
        c.jsxs("section", {
          className:
            "mx-auto grid max-w-[1320px] gap-10 px-5 pb-24 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:pb-32",
          "data-testid": "contact-form-section",
          children: [
            c.jsxs("div", {
              className: "rounded-3xl bg-[#1a1814] p-8 text-[#fffbf2] sm:p-10",
              children: [
                c.jsx(Pi, { children: "Start here" }),
                c.jsx("h2", {
                  className: "mt-6 font-serif text-4xl leading-tight",
                  children: "Good conversations make better work.",
                }),
                c.jsx("p", {
                  className: "mt-5 text-sm leading-7 text-[#b9b1a2]",
                  children:
                    "Share a little context and we’ll come back with a thoughtful next step within one business day.",
                }),
                c.jsxs("div", {
                  className: "mt-14 space-y-6 text-sm",
                  children: [
                    c.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        c.jsx(ew, {
                          className: "size-4 shrink-0 text-[#ffbf00]",
                        }),
                        c.jsx("span", {
                          children: "Replies within 1 business day",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        c.jsx(yw, {
                          className: "size-4 shrink-0 text-[#ffbf00]",
                        }),
                        c.jsx("a", {
                          href: "mailto:marketing@luminormedia.in",
                          "data-testid": "contact-email-link",
                          children: "marketing@luminormedia.in",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        c.jsx("svg", {
                          "aria-hidden": true,
                          className: "size-4 shrink-0 text-[#ffbf00]",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          viewBox: "0 0 24 24",
                          children: c.jsx("path", {
                            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92z",
                          }),
                        }),
                        c.jsx("a", {
                          href: "tel:+918197445026",
                          "data-testid": "contact-phone-link",
                          children: "+91 8197445026",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        c.jsx(bw, {
                          className: "size-4 shrink-0 text-[#ffbf00]",
                        }),
                        c.jsx("span", {
                          children:
                            "Bengaluru · Chitradurga · Karnataka · India",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex items-center gap-3 pt-3 border-t border-[#332f27]",
                      children: [
                        c.jsxs("a", {
                          href: du.instagram,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "flex items-center gap-2 text-xs text-[#b9b1a2] transition hover:text-[#ffbf00]",
                          "data-testid": "contact-instagram-link",
                          children: [
                            c.jsx(Ly, { className: "size-4 text-[#ffbf00]" }),
                            " Instagram",
                          ],
                        }),
                        c.jsx("span", {
                          className: "text-[#575247]",
                          children: "/",
                        }),
                        c.jsxs("a", {
                          href: du.linkedin,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "flex items-center gap-2 text-xs text-[#b9b1a2] transition hover:text-[#ffbf00]",
                          "data-testid": "contact-linkedin-link",
                          children: [
                            c.jsx(By, { className: "size-4 text-[#ffbf00]" }),
                            " LinkedIn",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className:
                "rounded-3xl border border-[#e8e1ce] bg-white p-7 sm:p-10",
              children: [
                c.jsx(Pi, { children: "Tell us more" }),
                c.jsx("h2", {
                  className: "mt-5 font-serif text-4xl tracking-tight",
                  children: "Let’s make your next move clearer.",
                }),
                c.jsx("div", { className: "mt-8", children: c.jsx(yN, {}) }),
              ],
            }),
          ],
        }),
        c.jsx("section", {
          className: "border-t border-[#e8e1ce] bg-[#f7f1e3]",
          "data-testid": "contact-reassurance-section",
          children: c.jsxs("div", {
            className:
              "mx-auto flex max-w-[1320px] flex-col justify-between gap-6 px-5 py-16 sm:flex-row sm:items-center lg:px-8",
            children: [
              c.jsx("p", {
                className: "max-w-xl font-serif text-3xl tracking-tight",
                children: "Not ready for a full conversation yet?",
              }),
              c.jsxs($e, {
                to: "/faq",
                className: "inline-flex items-center text-sm font-semibold",
                "data-testid": "contact-faq-link",
                children: [
                  "Start with the FAQs ",
                  c.jsx(Nt, { className: "ml-2 size-4" }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const XN = [
    [
      "Why Luminor",
      "How far can we take our brand with Luminor?",
      "We turn your vision into meaningful digital experiences that help your brand stand out, connect, and grow.",
    ],
    [
      "Why Luminor",
      "Why should we choose Luminor Media?",
      "We combine strategy, creativity, and execution to create work built around your brand—not a one-size-fits-all approach.",
    ],
    [
      "Why Luminor",
      "What makes Luminor Media different from other agencies?",
      "We don’t just create content. We understand your story, shape your identity, and bring your brand to light.",
    ],
    [
      "Process",
      "How does Luminor Media work with a brand?",
      "We understand your goals, build a clear strategy, and bring it to life through content, branding, and digital marketing.",
    ],
    [
      "Services",
      "What are the benefits of having Luminor manage our social media?",
      "We take care of your social presence with strategy, consistent content, and creative execution—so you can focus on your business while your brand stays active and relevant.",
    ],
    [
      "Getting started",
      "How do we get started with Luminor Media?",
      "Reach out to us and tell us about your brand and goals. Let’s start the conversation and bring your brand to light.",
    ],
  ],
  ZN = ["All", "Why Luminor", "Process", "Services", "Getting started"];
function KN() {
  const [l, s] = T.useState(""),
    [o, u] = T.useState("All"),
    [d, h] = T.useState(0),
    p = T.useMemo(
      () =>
        XN.filter(
          ([y, v, b]) =>
            (o === "All" || y === o) &&
            `${y} ${v} ${b}`.toLowerCase().includes(l.toLowerCase()),
        ),
      [o, l],
    );
  return c.jsx(Jl, {
    children: c.jsxs("main", {
      children: [
        c.jsx(ns, {
          eyebrow: "Questions, answered",
          title: c.jsxs(c.Fragment, {
            children: [
              "The clear stuff, ",
              c.jsx("span", {
                className: "italic text-[#ffbf00]",
                children: "first.",
              }),
            ],
          }),
          description:
            "A few useful answers before we get into the more interesting questions — the ones about your brand.",
        }),
        c.jsxs("section", {
          className: "mx-auto max-w-[960px] px-5 pb-24 lg:px-8 lg:pb-32",
          "data-testid": "faq-section",
          children: [
            c.jsxs("div", {
              className: "relative",
              children: [
                c.jsx(qy, {
                  className:
                    "absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#8c8474]",
                }),
                c.jsx("input", {
                  value: l,
                  onChange: (y) => s(y.target.value),
                  placeholder: "Search the FAQs",
                  className:
                    "h-14 w-full rounded-full border border-[#e8e1ce] bg-white pl-11 pr-5 text-sm outline-none transition focus:border-[#ffbf00]",
                  "aria-label": "Search frequently asked questions",
                  "data-testid": "faq-search-input",
                }),
              ],
            }),
            c.jsx("div", {
              className: "mt-6 flex flex-wrap gap-2",
              role: "tablist",
              "aria-label": "FAQ categories",
              children: ZN.map((y) =>
                c.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => u(y),
                    className: `rounded-full border px-4 py-2 text-xs font-semibold transition ${o === y ? "border-[#1a1814] bg-[#1a1814] text-[#fffbf2]" : "border-[#e8e1ce] hover:border-[#ffbf00]"}`,
                    "data-testid": `faq-category-${y.toLowerCase().replaceAll(" ", "-")}-button`,
                    children: y,
                  },
                  y,
                ),
              ),
            }),
            c.jsxs("div", {
              className: "mt-12 border-t border-[#e8e1ce]",
              children: [
                p.map(([y, v, b], S) =>
                  c.jsxs(
                    "div",
                    {
                      className: "border-b border-[#e8e1ce]",
                      "data-testid": `faq-item-${S}`,
                      children: [
                        c.jsxs("button", {
                          type: "button",
                          onClick: () => h(d === S ? null : S),
                          className:
                            "flex w-full items-center justify-between gap-5 py-6 text-left",
                          "aria-expanded": d === S,
                          "data-testid": `faq-question-${S}-button`,
                          children: [
                            c.jsxs("span", {
                              children: [
                                c.jsx("span", {
                                  className:
                                    "mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8c8474]",
                                  children: y,
                                }),
                                c.jsx("span", {
                                  className:
                                    "font-serif text-2xl tracking-tight",
                                  children: v,
                                }),
                              ],
                            }),
                            d === S
                              ? c.jsx(Sw, {
                                  className: "size-5 shrink-0 text-[#ffbf00]",
                                })
                              : c.jsx(Cw, { className: "size-5 shrink-0" }),
                          ],
                        }),
                        d === S &&
                          c.jsx("div", {
                            className:
                              "max-w-2xl pb-7 pr-10 text-sm leading-7 text-[#575247]",
                            "data-testid": `faq-answer-${S}`,
                            children: b,
                          }),
                      ],
                    },
                    v,
                  ),
                ),
                p.length === 0 &&
                  c.jsxs("div", {
                    className: "py-12 text-center text-sm text-[#575247]",
                    "data-testid": "faq-empty-state",
                    children: [
                      "No exact match — try a different phrase or ",
                      c.jsx($e, {
                        to: "/contact",
                        className:
                          "font-semibold underline decoration-[#ffbf00] underline-offset-4",
                        "data-testid": "faq-empty-contact-link",
                        children: "ask us directly",
                      }),
                      ".",
                    ],
                  }),
              ],
            }),
          ],
        }),
        c.jsx("section", {
          className: "bg-[#f7f1e3]",
          "data-testid": "faq-cta-section",
          children: c.jsxs("div", {
            className:
              "mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-8",
            children: [
              c.jsx("h2", {
                className: "font-serif text-3xl",
                children: "Still curious? We like curious.",
              }),
              c.jsxs($e, {
                to: "/contact",
                className: "inline-flex items-center text-sm font-semibold",
                "data-testid": "faq-contact-link",
                children: [
                  "Ask a human ",
                  c.jsx(Nt, { className: "ml-2 size-4" }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const or = [
    {
      id: "quiet-shift-reach-to-resonance",
      category: "Social Strategy",
      featured: !0,
      title: "The Quiet Shift from Reach to Resonance",
      subtitle:
        "Why the brands winning in 2026 optimize for the second action, not just the fleeting impression.",
      readTime: "5 min read",
      date: "Sep 2026",
      author: {
        name: "Preetham A",
        role: "Founder & Creative Director",
        initials: "PA",
      },
      takeaway:
        "True organic distribution today comes from 'saves' and 'direct shares' to friends, not vanity likes.",
      summary:
        "Algorithms have evolved from chronological feeds to interest graphs, and now to intimacy engines. Here is the framework we use to ensure content triggers conversation rather than mindless scrolling.",
      sections: [
        {
          heading: "1. The Vanity Metric Trap",
          body: [
            "For years, agency reporting was dominated by impressions, raw views, and heart counts. But in the current landscape, an impression is often just a thumb pausing for 1.1 seconds before continuing to scroll.",
            "Platform algorithms now heavily weight the 'second action'—did the user share the reel into a private DM group? Did they save it to a collection to revisit this weekend? Did they comment with a genuine opinion rather than an emoji?",
          ],
          quote:
            "If your content doesn't give the viewer something to look smart, inspired, or helpful when they forward it, it dies in the feed.",
        },
        {
          heading: "2. The Conversation Architecture",
          body: [
            "Every high-performing post we publish is engineered around a singular question or counter-intuitive observation. We do not broadcast; we initiate.",
            "When structuring video hooks, we spend 60% of our creative bandwidth on the first 2 seconds. But the final 3 seconds matter just as much: the call-to-thought that naturally compels the viewer to discuss it with a peer.",
          ],
          bulletPoints: [
            "Optimize for private DMs: Craft observations people send to their co-founders or best friends.",
            "Frame clear contrarian views without manufactured rage-bait.",
            "Anchor every visual story in hyper-specific cultural or business truth.",
          ],
        },
        {
          heading: "3. What This Means for Your Brand",
          body: [
            "Instead of posting 5 times a week to feed an imaginary quota, post 2 times with unmatched production clarity, nuanced voice, and immediate utility. Quality creates compounding brand equity; spam creates audience fatigue.",
          ],
        },
      ],
    },
    {
      id: "anatomy-of-high-retention-reels",
      category: "Creative Direction",
      title: "The Anatomy of a 3M+ View Reel",
      subtitle:
        "Pacing, audio cueing, and visual velocity: a director's breakdown of short-form mechanics.",
      readTime: "6 min read",
      date: "Aug 2026",
      author: {
        name: "Sagar RS",
        role: "Technical & Production Advisor",
        initials: "SR",
      },
      takeaway:
        "Audio sync and pattern interruptions every 2.4 seconds maintain watch time above the critical 85% threshold.",
      summary:
        "Viral short-form isn't lucky lightning—it's structured cinematic choreography. We dissect the retention curve of our top client releases.",
      sections: [
        {
          heading: "The 3-Second Retention Cliff",
          body: [
            "Over 65% of viewers drop off before second 3 if the initial shot lacks kinetic energy or a visual curiosity gap. Static talking heads with standard titles are filtered out instinctively by modern consumers.",
            "We introduce movement along two axes: camera push-in combined with ambient sound design that peaks immediately before the hook statement.",
          ],
          quote:
            "You have 1.2 seconds to justify why someone should lend you their most finite asset: their cognitive attention.",
        },
        {
          heading: "Pattern Interruption Frequency",
          body: [
            "A static visual framing longer than 3 seconds allows the brain to predict what comes next. By alternating between macro detail shots, dynamic text overlays, and abrupt sound dropouts, the attention curve resets continually.",
          ],
          bulletPoints: [
            "Visual pacing: Cut on physical action rather than pauses in speech.",
            "Sound design: Layer subtle foley (whooshes, vinyl clicks, bass drops) beneath dialogue.",
            "Text hierarchy: Max 4 words on screen simultaneously for rapid readability.",
          ],
        },
      ],
    },
    {
      id: "paid-performance-meets-taste",
      category: "Paid Media",
      title: "Creative Performance Loop: When Taste Meets Data",
      subtitle:
        "What happens when your media buyers and art directors stop operating in separate silos.",
      readTime: "4 min read",
      date: "Aug 2026",
      author: { name: "Chethas", role: "Creative Head", initials: "CK" },
      takeaway:
        "The ad creative is the new targeting algorithm. Distinctive brand codes consistently drive down blended CAC.",
      summary:
        "With broad targeting and machine-learning attribution, the creative itself does the targeting. High aesthetics no longer have to sacrifice conversion math.",
      sections: [
        {
          heading: "Targeting Through Visual Identity",
          body: [
            "With modern Meta and Google ad delivery algorithms, fine-grained demographic interest clusters are obsolete. The model tests creative variations against broad audiences, using who watches and clicks to self-segment.",
            "If your ad looks like cheap affiliate marketing, you attract bargain hunters who churn. If your ad looks like a world-class editorial piece, you command premium margins.",
          ],
        },
        {
          heading: "The Rapid Creative Iteration Framework",
          body: [
            "We test 4 distinct visual hooks against 1 core offer. Once a winning angle emerges, we iterate on pacing, typography, and sonic palette rather than rebuilding the campaign from scratch.",
          ],
          bulletPoints: [
            "Hook 1: Direct problem agitation with sensory macro video.",
            "Hook 2: Third-party documentary-style validation.",
            "Hook 3: Counter-intuitive comparison breakdown.",
            "Hook 4: Aesthetic aspirational world-building.",
          ],
        },
      ],
    },
    {
      id: "brand-is-feeling-before-funnel",
      category: "Brand Systems",
      title: "Your Brand is a Feeling Before It is a Funnel",
      subtitle:
        "A practical guide to building consistency that never feels like rigid repetition.",
      readTime: "7 min read",
      date: "Jul 2026",
      author: {
        name: "Sanjana A",
        role: "Brand Strategy & Operations",
        initials: "SA",
      },
      takeaway:
        "Brand guidelines should be guardrails for intuition, not handcuffs that stifle agility.",
      summary:
        "Consumers don't experience your brand as a conversion flowchart. They experience it as a cumulative emotional residue left behind after every interaction.",
      sections: [
        {
          heading: "Beyond Color Hex Codes and Logo Clear-Space",
          body: [
            "Most brand style guides sit in dusty Google Drive folders because they specify rules for a static world: billboard specs, letterhead margins, print CMYK values. But contemporary brands live in dynamic kinetic environments.",
            "A living brand identity specifies how you sound when responding to an unhappy customer on Instagram, what camera shutter rhythm you use in behind-the-scenes footage, and the degree of warmth in your typographic layout.",
          ],
          quote:
            "People will forget what you claimed in your carousel, but they will never forget the taste level you demonstrated.",
        },
        {
          heading: "The 3 Immutable Anchors",
          body: [
            "Pick three sensory elements that never waver: for example, your signature amber highlight hue, a specific musical key for sonic transitions, and an unapologetic editorial tone of voice. Everything else can and should adapt to context.",
          ],
        },
      ],
    },
    {
      id: "regional-commerce-digital-awakening",
      category: "Regional Growth",
      title: "The Tier-2 & Tier-3 Digital Awakening",
      subtitle:
        "Lessons from scaling heritage brands in Chitradurga, Davangere, and beyond.",
      readTime: "5 min read",
      date: "Jun 2026",
      author: {
        name: "Ravindra M.O",
        role: "Web Developer & Digital Lead",
        initials: "RM",
      },
      takeaway:
        "Authentic regional storytelling and multi-lingual nuance out-convert generic metropolitan ad campaigns 4 to 1.",
      summary:
        "How regional institutions—from historic medical suppliers to beloved culinary landmarks—unlock exponential growth when modern digital execution honors their roots.",
      sections: [
        {
          heading: "The Untapped Regional Commerce Opportunity",
          body: [
            "Many agencies assume digital sophistication is exclusively for metropolitan startups. That is a colossal miscalculation.",
            "Local legacy businesses possess decades of generational trust. When you pair that deep-rooted credibility with cinematic visuals, frictionless WhatsApp ordering, and targeted geo-fencing, the community response is electric.",
          ],
          quote:
            "Trust takes 30 years to build on the high street; our job is simply to translate that goodwill into pixels without losing an ounce of soul.",
        },
        {
          heading: "Case In Point: The Heritage Re-imagining",
          body: [
            "Working with esteemed regional partners like Sri Ranga Medicals, Top In Town, and Chitradurga Cricket Club proved that when community pride meets crisp design, organic engagement naturally skyrockets.",
          ],
          bulletPoints: [
            "Bilingual communication: Honor local language cadence alongside modern English design.",
            "Familiar faces: Celebrate long-time staff and community patrons in visual stories.",
            "Frictionless accessibility: Direct call-to-action to phone, store visit, or instant messaging.",
          ],
        },
      ],
    },
    {
      id: "seven-day-content-engine",
      category: "Creative Direction",
      title: "The 7-Day Social Content Engine",
      subtitle:
        "How our studio produces 30 high-value, bespoke brand assets in a single 4-hour batch.",
      readTime: "4 min read",
      date: "May 2026",
      author: {
        name: "Gokul",
        role: "Graphic & Motion Designer",
        initials: "GK",
      },
      takeaway:
        "Batching concepts by narrative pillar rather than filming day-by-day reduces burnout and guarantees aesthetic synergy.",
      summary:
        "Consistent social posting shouldn't feel like a daily sprint toward a deadline. Here is our step-by-step studio workflow for continuous creative momentum.",
      sections: [
        {
          heading: "Pre-Production Architecture",
          body: [
            "90% of a successful shoot happens before the camera battery is charged. We map each month into four distinct pillars: Educational Breakdown, Behind-the-Craft, Cultural Moment, and Proof/Case Study.",
            "By scripting modular segments that share lighting setups, our production team captures an entire month of multifaceted content in a single afternoon session.",
          ],
        },
        {
          heading: "Post-Production Grading & Sound Beds",
          body: [
            "Standardized color LUTs and proprietary sound design stems ensure every asset feels undeniably like part of the same cinematic universe, regardless of when it was shot.",
          ],
        },
      ],
    },
  ],
  JN = [
    "All",
    "Social Strategy",
    "Creative Direction",
    "Paid Media",
    "Brand Systems",
    "Regional Growth",
  ];
function FN() {
  const [l, s] = T.useState("All"),
    [o, u] = T.useState(""),
    [d, h] = T.useState(null),
    [p, y] = T.useState(() => {
      try {
        const N = localStorage.getItem("luminor_saved_insights");
        return N ? JSON.parse(N) : [];
      } catch {
        return [];
      }
    }),
    v = (N, D) => {
      (D == null || D.stopPropagation(),
        y((k) => {
          const L = k.includes(N) ? k.filter((H) => H !== N) : [...k, N];
          try {
            localStorage.setItem("luminor_saved_insights", JSON.stringify(L));
          } catch {}
          return (
            L.includes(N)
              ? ol.success("Saved to your reading list")
              : ol.info("Removed from saved articles"),
            L
          );
        }));
    },
    b = (N, D) => {
      var k;
      (D == null || D.stopPropagation(),
        (k = navigator.clipboard) == null || k.writeText(window.location.href),
        ol.success(`Copied link for "${N}"`));
    },
    S = T.useMemo(
      () =>
        or.filter((N) => {
          const D = l === "All" || N.category === l,
            k = o.toLowerCase().trim(),
            L =
              !k ||
              N.title.toLowerCase().includes(k) ||
              N.subtitle.toLowerCase().includes(k) ||
              N.summary.toLowerCase().includes(k) ||
              N.takeaway.toLowerCase().includes(k) ||
              N.author.name.toLowerCase().includes(k);
          return D && L;
        }),
      [l, o],
    ),
    m = T.useMemo(() => or.find((N) => N.featured) || or[0], []);
  return c.jsx(Jl, {
    children: c.jsxs("main", {
      className: "relative",
      children: [
        c.jsx(ns, {
          eyebrow: "The Luminor Field Notes & Essays",
          title: c.jsxs(c.Fragment, {
            children: [
              "Ideas for a ",
              c.jsx("span", {
                className: "italic text-[#ffbf00]",
                children: "brighter",
              }),
              " brand.",
            ],
          }),
          description:
            "Unfiltered perspectives on creative direction, viral dynamics, and the quiet strategic decisions that give modern brands staying power.",
        }),
        c.jsx("section", {
          className: "mx-auto max-w-[1320px] px-5 pb-16 lg:px-8",
          "data-testid": "featured-insight-section",
          children: c.jsxs("div", {
            onClick: () => h(m),
            className:
              "group relative cursor-pointer overflow-hidden rounded-3xl border border-[#e8e1ce] bg-white p-8 transition-all duration-300 hover:border-[#ffbf00] hover:shadow-[0_20px_40px_rgba(26,24,20,0.06)] sm:p-10 lg:p-12",
            "data-testid": "featured-insight-card",
            children: [
              c.jsxs("div", {
                className:
                  "flex flex-wrap items-center justify-between gap-4 border-b border-[#e8e1ce] pb-6",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      c.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1.5 rounded-full bg-[#1a1814] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#fffbf2]",
                        children: [
                          c.jsx(Yy, { className: "size-3 text-[#ffbf00]" }),
                          "FEATURED ESSAY",
                        ],
                      }),
                      c.jsx("span", {
                        className: "eyebrow text-[#8f6b00]",
                        children: m.category,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "flex items-center gap-4 text-xs font-mono text-[#8c8474]",
                    children: [
                      c.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                          c.jsx(jp, { className: "size-3.5" }),
                          m.readTime,
                        ],
                      }),
                      c.jsx("span", { children: "•" }),
                      c.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                          c.jsx(KS, { className: "size-3.5" }),
                          m.date,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("h2", {
                        className:
                          "font-serif text-3xl font-medium leading-tight tracking-tight text-[#1a1814] transition-colors group-hover:text-[#b38600] sm:text-4xl lg:text-5xl",
                        children: m.title,
                      }),
                      c.jsx("p", {
                        className:
                          "mt-4 text-base leading-relaxed text-[#575247]",
                        children: m.subtitle,
                      }),
                      c.jsx("p", {
                        className:
                          "mt-4 text-sm leading-relaxed text-[#8c8474]",
                        children: m.summary,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "rounded-2xl border border-[#ffbf00]/40 bg-[#fffbf2] p-6 shadow-sm",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          c.jsx(hw, { className: "size-4 text-[#ffbf00]" }),
                          c.jsx("span", {
                            className: "eyebrow text-[#8f6b00]",
                            children: "Core Takeaway",
                          }),
                        ],
                      }),
                      c.jsxs("p", {
                        className:
                          "mt-3 font-serif text-lg font-medium leading-snug text-[#1a1814]",
                        children: ['"', m.takeaway, '"'],
                      }),
                      c.jsxs("div", {
                        className:
                          "mt-4 flex items-center justify-between border-t border-[#e8e1ce] pt-3 text-xs text-[#8c8474]",
                        children: [
                          c.jsx("span", { children: "Field Note No. 01" }),
                          c.jsx("span", {
                            className: "font-mono text-[#ffbf00]",
                            children: "LUMINOR INSIGHT",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e8e1ce] pt-6",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      c.jsx("div", {
                        className:
                          "flex size-10 items-center justify-center rounded-full bg-[#1a1814] font-mono text-xs font-bold text-[#ffbf00]",
                        children: m.author.initials,
                      }),
                      c.jsxs("div", {
                        children: [
                          c.jsx("p", {
                            className: "text-sm font-semibold text-[#1a1814]",
                            children: m.author.name,
                          }),
                          c.jsx("p", {
                            className: "text-xs text-[#8c8474]",
                            children: m.author.role,
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      c.jsx("button", {
                        type: "button",
                        onClick: (N) => v(m.id, N),
                        className:
                          "flex size-9 items-center justify-center rounded-full border border-[#e8e1ce] text-[#575247] transition hover:border-[#ffbf00] hover:text-[#1a1814]",
                        title: "Bookmark essay",
                        children: c.jsx(td, {
                          className: `size-4 ${p.includes(m.id) ? "fill-[#ffbf00] text-[#ffbf00]" : ""}`,
                        }),
                      }),
                      c.jsxs("span", {
                        className:
                          "inline-flex items-center rounded-full bg-[#ffbf00] px-4 py-2 text-xs font-semibold text-[#1a1814] shadow-sm transition group-hover:bg-[#e5ab00]",
                        children: [
                          "Read full review",
                          c.jsx(Nt, {
                            className:
                              "ml-1.5 size-3.5 transition-transform group-hover:translate-x-0.5",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsx("section", {
          className: "border-y border-[#e8e1ce] bg-[#f7f1e3]/60 py-10",
          children: c.jsx("div", {
            className: "mx-auto max-w-[1320px] px-5 lg:px-8",
            children: c.jsxs("div", {
              className: "grid gap-6 md:grid-cols-3",
              children: [
                c.jsxs("div", {
                  className: "flex items-start gap-4",
                  children: [
                    c.jsx("div", {
                      className:
                        "flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[#ffbf00]/20 text-[#1a1814]",
                      children: c.jsx(uw, {
                        className: "size-5 text-[#c29100]",
                      }),
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className:
                            "font-serif text-lg font-semibold text-[#1a1814]",
                          children: "The 1.2-Second Law",
                        }),
                        c.jsx("p", {
                          className: "mt-1 text-xs leading-5 text-[#575247]",
                          children:
                            "Without visual momentum in the opening frame, copy polish and offer quality will never be discovered.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex items-start gap-4",
                  children: [
                    c.jsx("div", {
                      className:
                        "flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[#ffbf00]/20 text-[#1a1814]",
                      children: c.jsx(nw, {
                        className: "size-5 text-[#c29100]",
                      }),
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className:
                            "font-serif text-lg font-semibold text-[#1a1814]",
                          children: "The Save-Over-Like Ratio",
                        }),
                        c.jsx("p", {
                          className: "mt-1 text-xs leading-5 text-[#575247]",
                          children:
                            "Content that earns private bookmarking compounds audience trust exponentially faster than vanity reactions.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex items-start gap-4",
                  children: [
                    c.jsx("div", {
                      className:
                        "flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[#ffbf00]/20 text-[#1a1814]",
                      children: c.jsx(dw, {
                        className: "size-5 text-[#c29100]",
                      }),
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className:
                            "font-serif text-lg font-semibold text-[#1a1814]",
                          children: "Consistent Taste Index",
                        }),
                        c.jsx("p", {
                          className: "mt-1 text-xs leading-5 text-[#575247]",
                          children:
                            "Every touchpoint—from local store banner to 4K reel—must broadcast the same uncompromising design standard.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        c.jsxs("section", {
          className: "mx-auto max-w-[1320px] px-5 pt-14 pb-20 lg:px-8 lg:pb-28",
          "data-testid": "insights-archive-section",
          children: [
            c.jsxs("div", {
              className:
                "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
              children: [
                c.jsx("div", {
                  className: "flex flex-wrap items-center gap-2",
                  role: "tablist",
                  "aria-label": "Insights categories",
                  children: JN.map((N) => {
                    const D =
                        N === "All"
                          ? or.length
                          : or.filter((L) => L.category === N).length,
                      k = l === N;
                    return c.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => s(N),
                        className: `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition ${k ? "border-[#1a1814] bg-[#1a1814] text-[#fffbf2] shadow-sm" : "border-[#e8e1ce] bg-white text-[#575247] hover:border-[#ffbf00] hover:text-[#1a1814]"}`,
                        "data-testid": `filter-${N.toLowerCase().replace(/\s+/g, "-")}`,
                        children: [
                          c.jsx("span", { children: N }),
                          c.jsx("span", {
                            className: `size-4 rounded-full text-[10px] flex items-center justify-center ${k ? "bg-[#ffbf00] text-[#1a1814]" : "bg-[#f7f1e3] text-[#8c8474]"}`,
                            children: D,
                          }),
                        ],
                      },
                      N,
                    );
                  }),
                }),
                c.jsxs("div", {
                  className: "relative w-full sm:max-w-xs",
                  children: [
                    c.jsx(qy, {
                      className:
                        "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#8c8474]",
                    }),
                    c.jsx("input", {
                      type: "text",
                      value: o,
                      onChange: (N) => u(N.target.value),
                      placeholder: "Search articles, topics, authors...",
                      "aria-label": "Search insights",
                      className:
                        "h-10 w-full rounded-full border border-[#e8e1ce] bg-white pl-10 pr-9 text-xs outline-none transition focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/20",
                      "data-testid": "insights-search-input",
                    }),
                    o &&
                      c.jsx("button", {
                        type: "button",
                        onClick: () => u(""),
                        className:
                          "absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8474] hover:text-[#1a1814]",
                        children: c.jsx(md, { className: "size-3.5" }),
                      }),
                  ],
                }),
              ],
            }),
            S.length === 0
              ? c.jsxs("div", {
                  className:
                    "mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#e8e1ce] bg-white/50 p-12 text-center",
                  children: [
                    c.jsx(QS, { className: "size-10 text-[#8c8474]" }),
                    c.jsx("h3", {
                      className:
                        "mt-4 font-serif text-2xl font-medium text-[#1a1814]",
                      children: "No insights found",
                    }),
                    c.jsxs("p", {
                      className: "mt-2 text-sm text-[#575247]",
                      children: [
                        `We couldn't find any articles matching "`,
                        o,
                        '". Try selecting a different topic or clearing your search.',
                      ],
                    }),
                    c.jsx("button", {
                      type: "button",
                      onClick: () => {
                        (s("All"), u(""));
                      },
                      className:
                        "mt-5 inline-flex items-center rounded-full bg-[#1a1814] px-5 py-2 text-xs font-semibold text-[#fffbf2]",
                      children: "Reset filters",
                    }),
                  ],
                })
              : c.jsx("div", {
                  className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
                  children: S.map((N) =>
                    c.jsxs(
                      "article",
                      {
                        onClick: () => h(N),
                        className:
                          "group flex cursor-pointer flex-col justify-between rounded-3xl border border-[#e8e1ce] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffbf00] hover:shadow-[0_16px_32px_rgba(26,24,20,0.06)]",
                        "data-testid": `insight-card-${N.id}`,
                        children: [
                          c.jsxs("div", {
                            children: [
                              c.jsxs("div", {
                                className:
                                  "flex items-center justify-between border-b border-[#e8e1ce]/80 pb-4",
                                children: [
                                  c.jsx("span", {
                                    className:
                                      "rounded-full bg-[#fffbf2] border border-[#e8e1ce] px-3 py-1 text-[11px] font-semibold text-[#1a1814]",
                                    children: N.category,
                                  }),
                                  c.jsx("div", {
                                    className: "flex items-center gap-2",
                                    children: c.jsx("button", {
                                      type: "button",
                                      onClick: (D) => v(N.id, D),
                                      className:
                                        "flex size-7 items-center justify-center rounded-full border border-[#e8e1ce] bg-[#fffbf2] text-[#575247] transition hover:border-[#ffbf00] hover:text-[#ffbf00]",
                                      title: "Bookmark essay",
                                      children: c.jsx(td, {
                                        className: `size-3.5 ${p.includes(N.id) ? "fill-[#ffbf00] text-[#ffbf00]" : ""}`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "mt-5",
                                children: [
                                  c.jsxs("div", {
                                    className:
                                      "flex items-center gap-3 text-xs font-mono text-[#8c8474]",
                                    children: [
                                      c.jsxs("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          c.jsx(jp, { className: "size-3" }),
                                          N.readTime,
                                        ],
                                      }),
                                      c.jsx("span", { children: "•" }),
                                      c.jsx("span", { children: N.date }),
                                    ],
                                  }),
                                  c.jsx("h3", {
                                    className:
                                      "mt-3 font-serif text-2xl font-medium leading-snug tracking-tight text-[#1a1814] transition group-hover:text-[#b38600]",
                                    children: N.title,
                                  }),
                                  c.jsx("p", {
                                    className:
                                      "mt-3 line-clamp-3 text-xs leading-relaxed text-[#575247]",
                                    children: N.summary,
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className:
                                  "mt-5 rounded-2xl border-l-2 border-[#ffbf00] bg-[#fffbf2] p-3.5 text-xs text-[#575247]",
                                children: [
                                  c.jsx("p", {
                                    className:
                                      "font-semibold text-[11px] uppercase tracking-wider text-[#1a1814]",
                                    children: "Core insight:",
                                  }),
                                  c.jsxs("p", {
                                    className:
                                      "mt-1 line-clamp-2 italic text-[#575247]",
                                    children: ['"', N.takeaway, '"'],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "mt-6 border-t border-[#e8e1ce]/80 pt-4",
                            children: c.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                c.jsxs("div", {
                                  className: "flex items-center gap-2.5",
                                  children: [
                                    c.jsx("div", {
                                      className:
                                        "flex size-7 items-center justify-center rounded-full bg-[#f7f1e3] border border-[#e8e1ce] font-mono text-[10px] font-bold text-[#1a1814]",
                                      children: N.author.initials,
                                    }),
                                    c.jsx("span", {
                                      className:
                                        "text-xs font-medium text-[#1a1814]",
                                      children: N.author.name,
                                    }),
                                  ],
                                }),
                                c.jsxs("span", {
                                  className:
                                    "inline-flex items-center text-xs font-semibold text-[#1a1814] transition group-hover:text-[#ffbf00]",
                                  children: [
                                    "Read review",
                                    c.jsx(WS, {
                                      className:
                                        "ml-1 size-3.5 transition group-hover:translate-x-1",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      N.id,
                    ),
                  ),
                }),
          ],
        }),
        c.jsx("section", {
          className: "border-t border-[#e8e1ce] bg-[#1a1814] text-[#fffbf2]",
          "data-testid": "insights-newsletter-section",
          children: c.jsxs("div", {
            className:
              "mx-auto grid max-w-[1320px] gap-12 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-28",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2 rounded-full border border-[#fffbf2]/20 bg-[#fffbf2]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#ffbf00]",
                    children: [
                      c.jsx(kw, { className: "size-3.5" }),
                      "MONTHLY STRATEGY DISPATCH",
                    ],
                  }),
                  c.jsx("h2", {
                    className:
                      "mt-6 font-serif text-4xl leading-tight tracking-tight text-[#fffbf2] sm:text-5xl lg:text-6xl",
                    children: "Ideas worth keeping in your back pocket.",
                  }),
                  c.jsx("p", {
                    className:
                      "mt-5 max-w-xl text-base leading-relaxed text-[#b9b1a2]",
                    children:
                      "Join founders, creative directors, and marketing leaders who read the Luminor Letter. We share teardowns of real campaigns, production frameworks, and what is truly driving organic traction right now.",
                  }),
                  c.jsxs("div", {
                    className:
                      "mt-8 flex flex-wrap items-center gap-4 text-xs text-[#b9b1a2]",
                    children: [
                      c.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                          c.jsx(fr, { className: "size-4 text-[#ffbf00]" }),
                          " Zero sales fluff",
                        ],
                      }),
                      c.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                          c.jsx(fr, { className: "size-4 text-[#ffbf00]" }),
                          " One curated note a month",
                        ],
                      }),
                      c.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                          c.jsx(fr, { className: "size-4 text-[#ffbf00]" }),
                          " Unsubscribe anytime",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "rounded-3xl border border-[#fffbf2]/15 bg-white/5 p-8 backdrop-blur-md",
                children: [
                  c.jsx("h3", {
                    className: "font-serif text-2xl font-medium text-[#fffbf2]",
                    children: "Have a brand ready for its next chapter?",
                  }),
                  c.jsx("p", {
                    className: "mt-2 text-xs leading-relaxed text-[#b9b1a2]",
                    children:
                      "We review your current social positioning, creative output, and ad spend to pinpoint immediate leverage points.",
                  }),
                  c.jsxs("div", {
                    className: "mt-6 flex flex-col gap-3 sm:flex-row",
                    children: [
                      c.jsxs($e, {
                        to: "/contact",
                        className:
                          "inline-flex h-12 items-center justify-center rounded-full bg-[#ffbf00] px-6 text-sm font-semibold text-[#1a1814] shadow-md transition hover:bg-[#e5ab00]",
                        "data-testid": "insights-start-conversation-button",
                        children: [
                          "Start a conversation ",
                          c.jsx(Nt, { className: "ml-2 size-4" }),
                        ],
                      }),
                      c.jsx($e, {
                        to: "/results",
                        className:
                          "inline-flex h-12 items-center justify-center rounded-full border border-[#fffbf2]/30 px-6 text-sm font-semibold text-[#fffbf2] transition hover:bg-white/10",
                        "data-testid": "insights-see-results-button",
                        children: "Explore our results",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        d &&
          c.jsx("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-[#1a1814]/80 p-4 backdrop-blur-md overflow-y-auto",
            onClick: () => h(null),
            "data-testid": "article-reader-modal",
            children: c.jsxs("div", {
              className:
                "relative my-8 w-full max-w-3xl rounded-3xl border border-[#e8e1ce] bg-[#fffbf2] p-6 shadow-2xl sm:p-10 lg:p-12",
              onClick: (N) => N.stopPropagation(),
              children: [
                c.jsx("button", {
                  type: "button",
                  onClick: () => h(null),
                  className:
                    "absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-[#e8e1ce] bg-white text-[#1a1814] transition hover:bg-[#ffbf00]",
                  "aria-label": "Close review",
                  "data-testid": "close-article-modal",
                  children: c.jsx(md, { className: "size-5" }),
                }),
                c.jsxs("div", {
                  className: "flex flex-wrap items-center gap-3",
                  children: [
                    c.jsx("span", {
                      className:
                        "rounded-full bg-[#ffbf00]/20 px-3 py-1 text-xs font-semibold text-[#8f6b00]",
                      children: d.category,
                    }),
                    c.jsx("span", {
                      className: "font-mono text-xs text-[#8c8474]",
                      children: d.readTime,
                    }),
                    c.jsx("span", {
                      className: "text-xs text-[#8c8474]",
                      children: "•",
                    }),
                    c.jsx("span", {
                      className: "font-mono text-xs text-[#8c8474]",
                      children: d.date,
                    }),
                  ],
                }),
                c.jsx("h2", {
                  className:
                    "mt-4 font-serif text-3xl font-medium leading-tight text-[#1a1814] sm:text-4xl",
                  children: d.title,
                }),
                c.jsx("p", {
                  className: "mt-3 text-base text-[#575247]",
                  children: d.subtitle,
                }),
                c.jsxs("div", {
                  className:
                    "mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#e8e1ce] py-4",
                  children: [
                    c.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        c.jsx("div", {
                          className:
                            "flex size-11 items-center justify-center rounded-full bg-[#1a1814] font-mono text-sm font-bold text-[#ffbf00] shadow-sm",
                          children: d.author.initials,
                        }),
                        c.jsxs("div", {
                          children: [
                            c.jsx("h4", {
                              className: "text-sm font-semibold text-[#1a1814]",
                              children: d.author.name,
                            }),
                            c.jsx("p", {
                              className: "text-xs text-[#8c8474]",
                              children: d.author.role,
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        c.jsxs("button", {
                          type: "button",
                          onClick: (N) => v(d.id, N),
                          className:
                            "inline-flex items-center gap-1.5 rounded-full border border-[#e8e1ce] bg-white px-3.5 py-1.5 text-xs font-medium text-[#575247] transition hover:border-[#ffbf00]",
                          children: [
                            c.jsx(td, {
                              className: `size-3.5 ${p.includes(d.id) ? "fill-[#ffbf00] text-[#ffbf00]" : ""}`,
                            }),
                            p.includes(d.id) ? "Saved" : "Save",
                          ],
                        }),
                        c.jsxs("button", {
                          type: "button",
                          onClick: (N) => b(d.title, N),
                          className:
                            "inline-flex items-center gap-1.5 rounded-full border border-[#e8e1ce] bg-white px-3.5 py-1.5 text-xs font-medium text-[#575247] transition hover:border-[#ffbf00]",
                          children: [
                            c.jsx(iw, { className: "size-3.5" }),
                            "Copy link",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "mt-6 rounded-2xl border border-[#ffbf00]/50 bg-[#fff5d6] p-5",
                  children: [
                    c.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        c.jsx(rw, { className: "size-4 text-[#8f6b00]" }),
                        c.jsx("p", {
                          className: "eyebrow text-[#8f6b00]",
                          children: "Executive Takeaway",
                        }),
                      ],
                    }),
                    c.jsx("p", {
                      className:
                        "mt-2 text-sm font-medium leading-relaxed text-[#1a1814]",
                      children: d.takeaway,
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: "mt-8 space-y-8 text-sm leading-7 text-[#575247]",
                  children: d.sections.map((N, D) =>
                    c.jsxs(
                      "div",
                      {
                        className: "space-y-4",
                        children: [
                          c.jsx("h3", {
                            className:
                              "font-serif text-xl font-semibold text-[#1a1814]",
                            children: N.heading,
                          }),
                          N.body.map((k, L) => c.jsx("p", { children: k }, L)),
                          N.quote &&
                            c.jsxs("blockquote", {
                              className:
                                "my-5 rounded-2xl border-l-4 border-[#ffbf00] bg-white p-5 italic text-[#1a1814] shadow-sm",
                              children: ['"', N.quote, '"'],
                            }),
                          N.bulletPoints &&
                            c.jsx("ul", {
                              className: "my-4 space-y-2 pl-2",
                              children: N.bulletPoints.map((k, L) =>
                                c.jsxs(
                                  "li",
                                  {
                                    className: "flex items-start gap-2.5",
                                    children: [
                                      c.jsx("span", {
                                        className:
                                          "mt-2 size-1.5 shrink-0 rounded-full bg-[#ffbf00]",
                                      }),
                                      c.jsx("span", { children: k }),
                                    ],
                                  },
                                  L,
                                ),
                              ),
                            }),
                        ],
                      },
                      D,
                    ),
                  ),
                }),
                c.jsxs("div", {
                  className:
                    "mt-10 flex items-center justify-between border-t border-[#e8e1ce] pt-6",
                  children: [
                    c.jsx("button", {
                      type: "button",
                      onClick: () => h(null),
                      className:
                        "inline-flex items-center text-xs font-semibold text-[#575247] hover:text-[#1a1814]",
                      children: "← Back to all insights",
                    }),
                    c.jsxs($e, {
                      to: "/contact",
                      className:
                        "inline-flex items-center rounded-full bg-[#ffbf00] px-5 py-2.5 text-xs font-semibold text-[#1a1814] hover:bg-[#e5ab00]",
                      children: [
                        "Discuss your brand strategy ",
                        c.jsx(Nt, { className: "ml-1.5 size-3.5" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    }),
  });
}
function $N() {
  const { pathname: l } = Oa();
  return (
    T.useEffect(() => {
      window.scrollTo(0, 0);
    }, [l]),
    null
  );
}
const Qp = {
  "/": {
    title:
      "Luminor Media — Digital Marketing Agency in Chitradurga & Bengaluru",
    description:
      "Luminor Media is a digital marketing agency in Chitradurga and Bengaluru, helping brands grow through strategy, branding content and social media.",
  },
  "/about": {
    title:
      "About Luminor Media — Digital Marketing Agency, Chitradurga & Bengaluru",
    description:
      "Meet the Luminor Media team behind strategy, branding, content and social media for brands.",
  },
  "/services": {
    title:
      "Digital Marketing Services — Chitradurga & Bengaluru | Luminor Media",
    description:
      "Social media, branding and content services from Luminor Media in Chitradurga and Bengaluru.",
  },
  "/results": {
    title:
      "Our Work — Luminor Media Digital Marketing Agency, Chitradurga & Bengaluru",
    description:
      "Recent work from Luminor Media across branding, content and social media.",
  },
  "/contact": {
    title: "Contact Luminor Media — Digital Marketing Agency",
    description:
      "Start a conversation with Luminor Media about your brand's strategy, content and social media.",
  },
  "/faq": {
    title: "FAQ — Luminor Media Digital Marketing Agency",
    description: "Common questions about working with Luminor Media.",
  },
  "/insights": {
    title: "Insights — Luminor Media Digital Marketing Agency",
    description:
      "Articles and insights on branding, content and social media from Luminor Media.",
  },
};
function IN() {
  const { pathname: l } = Oa(),
    s = Qp[l] ?? Qp["/"];
  return (
    T.useEffect(() => {
      document.title = s.title;
      let o = document.querySelector('meta[name="description"]');
      (o ||
        ((o = document.createElement("meta")),
        o.setAttribute("name", "description"),
        document.head.appendChild(o)),
        o.setAttribute("content", s.description));
    }, [s]),
    l === "/"
      ? null
      : c.jsx("h1", { className: "sr-only", children: s.title.split(" — ")[0] })
  );
}
function WN() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx($N, {}),
      c.jsx(IN, {}),
      c.jsxs(eS, {
        children: [
          c.jsx(Pn, { path: "/", element: c.jsx(jN, {}) }),
          c.jsx(Pn, { path: "/about", element: c.jsx(BN, {}) }),
          c.jsx(Pn, { path: "/services", element: c.jsx(YN, {}) }),
          c.jsx(Pn, { path: "/results", element: c.jsx(VN, {}) }),
          c.jsx(Pn, { path: "/contact", element: c.jsx(QN, {}) }),
          c.jsx(Pn, { path: "/faq", element: c.jsx(KN, {}) }),
          c.jsx(Pn, { path: "/insights", element: c.jsx(FN, {}) }),
        ],
      }),
    ],
  });
}
const PN = new P1();
S1.createRoot(document.getElementById("root")).render(
  c.jsx(T.StrictMode, {
    children: c.jsx(N1, {
      client: PN,
      children: c.jsx(ES, { children: c.jsx(WN, {}) }),
    }),
  }),
);
