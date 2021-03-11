! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }

    function F(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if ("string" == typeof(c = a.getAttribute(d))) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c)
                } catch (a) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? null == (f = g[b]) && (f = g[n.camelCase(b)]) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, n.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function ea(a, b) {
        var c, d, e = 0,
            f = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if ((g = a[r]) || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            for (i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0]; f--;) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody)
                for (g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length; f--;) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
            for (n.merge(q, i.childNodes), i.textContent = ""; i.firstChild;) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        for (i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0; g = q[r++];)
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c)
            for (f = 0; g = i[f++];) _.test(g.type || "") && c.push(g);
        return i = null, p
    }

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function bb(a) {
        if (a in ab) return a;
        for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = _a.length; c--;)
            if ((a = _a[c] + b) in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), "inline" === ("none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j) && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = n.cssHooks[d]) && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function Cb(a) {
        return n.attr(a, "class") || ""
    }

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        var e = {},
            f = a === Pb;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f]))
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (!0 !== g)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (a) {
                    return {
                        state: "parsererror",
                        error: g ? a : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        for (; a && 1 === a.nodeType;) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    }

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (a) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a))
                for (c = a.length; c > d && !1 !== b.call(a[d], d, a[d]); d++);
            else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var e = [], f = 0, g = a.length, h = !c; g > f; f++) !b(a[f], f) !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) null != (e = b(a[g], g, c)) && h.push(e);
            else
                for (g in a) null != (e = b(a[g], g, c)) && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    var t = function(a) {
        function ea(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; h--;) r[h] = l + " " + pa(r[h]);
                        s = r.join(","), w = _.test(a) && na(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (a) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function fa() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            var a = [];
            return b
        }

        function ga(a) {
            return a[u] = !0, a
        }

        function ha(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ia(a, b) {
            for (var c = a.split("|"), e = c.length; e--;) d.attrHandle[c[e]] = b
        }

        function ja(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ka(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ma(a) {
            return ga(function(b) {
                return b = +b, ga(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function na(a) {
            return a && void 0 !== a.getElementsByTagName && a
        }

        function oa() {}

        function pa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function qa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ra(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sa(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ea(a, b[d], c);
            return c
        }

        function ta(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function ua(a, b, c, d, e, f) {
            return d && !d[u] && (d = ua(d)), e && !e[u] && (e = ua(e, f)), ga(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || sa(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ta(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d)
                    for (j = ta(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ta(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function va(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = qa(function(a) {
                    return a === b
                }, h, !0), l = qa(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [qa(ra(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e && !d.relative[a[e].type]; e++);
                        return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && va(a.slice(i, e)), f > e && va(a = a.slice(e)), f > e && pa(a))
                    }
                    m.push(c)
                }
            return ra(m)
        }

        function wa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            for (o = 0, g || l.ownerDocument === n || (m(l), h = !p); q = a[o++];)
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        for (o = 0; q = b[o++];) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                for (; s--;) t[s] || u[s] || (u[s] = F.call(i));
                            u = ta(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ea.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ga(f) : f
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = fa(),
            z = fa(),
            A = fa(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (a) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        c = ea.support = {}, f = ea.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ea.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ha(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ha(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ha(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return void 0 !== b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ha(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ha(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ha(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ja(a, b);
                for (c = a; c = c.parentNode;) g.unshift(c);
                for (c = b; c = c.parentNode;) h.unshift(c);
                for (; g[d] === h[d];) d++;
                return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ea.matches = function(a, b) {
            return ea(a, null, null, b)
        }, ea.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (a) {}
            return ea(b, n, null, [a]).length > 0
        }, ea.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ea.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ea.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ea.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (; b = a[f++];) b === a[f] && (e = d.push(f));
                for (; e--;) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ea.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                for (; b = a[d++];) c += e(b);
            return c
        }, d = ea.selectors = {
            cacheLength: 50,
            createPseudo: ga,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ea.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ea.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ea.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), !1 === t)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m !== b)););
                            return (t -= e) === d || t % d == 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ga(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ga(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ga(function(a) {
                    return function(b) {
                        return ea(a, b).length > 0
                    }
                }),
                contains: ga(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ga(function(a) {
                    return V.test(a || "") || ea.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ma(function() {
                    return [0]
                }),
                last: ma(function(a, b) {
                    return [b - 1]
                }),
                eq: ma(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: ma(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: ma(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: ma(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: ma(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ka(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = la(b);
        return oa.prototype = d.filters = d.pseudos, d.setFilters = new oa, g = ea.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ea.error(a) : z(a, i).slice(0)
        }, h = ea.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--;) f = va(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, wa(e, d)), f.selector = a
            }
            return f
        }, i = ea.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (!(b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0])) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                for (i = W.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]);)
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b))) {
                        if (j.splice(i, 1), !(a = f.length && pa(j))) return H.apply(e, f), e;
                        break
                    }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ha(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ha(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ia("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ha(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ia("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ha(function(a) {
            return null == a.getAttribute("disabled")
        }) || ia(K, function(a, b, c) {
            var d;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ea
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (n.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (!(e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                    for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if ((f = d.getElementById(e[2])) && f.parentNode) {
                if (f.id !== e[2]) return A.find(a);
                this.length = 1, this[0] = f
            }
            return this.context = d, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    }).prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1)
                    for (c = g.shift(); ++h < f.length;) !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = f.length, c = !1);
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function b(c) {
                        n.each(c, function(c, d) {
                            n.isFunction(d) ? a.unique && j.has(d) || f.push(d) : d && d.length && "string" !== n.type(d) && b(d)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        for (var c;
                            (c = n.inArray(b, f, c)) > -1;) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var i, j, k, b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                };
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --n.readyWait : n.isReady) || (n.isReady = !0, !0 !== a && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    }), n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (a) {}
            c && c.doScroll && function b() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (c) {
                        return a.setTimeout(b, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            (c = d.getElementsByTagName("body")[0]) && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (a) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || !0 !== b && a.getAttribute("classid") === b)
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return !!(a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]) && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = n._data(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;
    ! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = !1 === e.attributes[c].expando);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                        return void 0 === n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(G) || [""], h = b.length; h--;) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && !1 !== j.setup.call(a, d, p, k) || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                for (b = (b || "").match(G) || [""], j = b.length; j--;)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || !1 !== l.trigger.apply(e, c))) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                for (o = 0;
                    (i = p[o++]) && !b.isPropagationStopped();) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), (g = h && i[h]) && g.apply && M(i) && (b.result = g.apply(i, c), !1 === b.result && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), c)) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (a) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                for (h = n.event.handlers.call(this, a, j), b = 0;
                    (f = h[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, c = 0;
                        (g = f.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, void 0 !== (d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            for (h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; b--;) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (void 0 === a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return !n.nodeName(this, "form") && void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return !n.nodeName(this, "form") && void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || void 0 === d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    Ca(this, a).appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && n.cleanData(ea(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
            HTML: "block",
            BODY: "block"
        },
        Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        function k() {
            var k, l, m = d.documentElement;
            m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                width: "4px"
            }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                marginRight: "4px"
            }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", (f = 0 === k[0].offsetHeight) && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
        }
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        j.style && (j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
            reliableHiddenOffsets: function() {
                return null == b && k(), f
            },
            boxSizingReliable: function() {
                return null == b && k(), e
            },
            pixelMarginRight: function() {
                return null == b && k(), c
            },
            pixelPosition: function() {
                return null == b && k(), b
            },
            reliableMarginRight: function() {
                return null == b && k(), g
            },
            reliableMarginLeft: function() {
                return null == b && k(), h
            }
        }))
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (a) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), !0 === c || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    }), n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++)(a = b[c])() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = n.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)) : void 0
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--;)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (a) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return !1 === b ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" !== b && b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (a) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(G) || []; c = this[i++];)
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(G) || []; c = this[i++];)
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = n(this), f = a.match(G) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || !1 === a ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (a) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            function x(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), (x = w.getResponseHeader("etag")) && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k)
                                for (k = {}; b = Jb.exec(g);) k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), x(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 == n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && !1 !== l.contentType || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (!1 === l.beforeSend.call(m, w, l) || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, x)
                } catch (a) {
                    if (!(2 > u)) throw a;
                    x(-1, a)
                }
            } else x(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, (gc = l.ajax = !!gc) && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (a) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : !1 !== b.jsonp && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }, n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            return f ? (b = f.documentElement, n.contains(b, e) ? (void 0 !== e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && !n.nodeName(a, "html") && "static" === n.css(a, "position");) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (!0 === d || !0 === e ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
}), jQuery.noConflict(), window.Modernizr = function(a, b, c) {
        function d(a) {
            q.cssText = a
        }

        function e(a, b) {
            return d(u.join(a + ";") + (b || ""))
        }

        function f(a, b) {
            return typeof a === b
        }

        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function h(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!g(e, "-") && q[e] !== c) return "pfx" != b || e
            }
            return !1
        }

        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c) return !1 === d ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + w.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + x.join(d + " ") + d).split(" "), i(e, b, c))
        }
        var E, H, k = "2.7.1",
            l = {},
            m = !0,
            n = b.documentElement,
            o = "modernizr",
            p = b.createElement(o),
            q = p.style,
            s = ":)",
            t = {}.toString,
            u = " -webkit- -moz- -o- -ms- ".split(" "),
            v = "Webkit Moz O ms",
            w = v.split(" "),
            x = v.toLowerCase().split(" "),
            y = {
                svg: "http://www.w3.org/2000/svg"
            },
            z = {},
            C = [],
            D = C.slice,
            F = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : o + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', o, '">', a, "</style>"].join(""), j.id = o, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = n.style.overflow, n.style.overflow = "hidden", n.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), n.style.overflow = i), !!g
            },
            G = {}.hasOwnProperty;
        H = f(G, "undefined") || f(G.call, "undefined") ? function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return G.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = D.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(D.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(D.call(arguments)))
                };
            return d
        }), z.flexbox = function() {
            return j("flexWrap")
        }, z.flexboxlegacy = function() {
            return j("boxDirection")
        }, z.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : F(["@media (", u.join("touch-enabled),("), o, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        }, z.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"), g(q.backgroundColor, "rgba")
        }, z.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"), g(q.backgroundColor, "rgba") || g(q.backgroundColor, "hsla")
        }, z.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(q.background)
        }, z.backgroundsize = function() {
            return j("backgroundSize")
        }, z.borderimage = function() {
            return j("borderImage")
        }, z.borderradius = function() {
            return j("borderRadius")
        }, z.boxshadow = function() {
            return j("boxShadow")
        }, z.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        }, z.opacity = function() {
            return e("opacity:.55"), /^0.55$/.test(q.opacity)
        }, z.cssanimations = function() {
            return j("animationName")
        }, z.csscolumns = function() {
            return j("columnCount")
        }, z.cssgradients = function() {
            var a = "background-image:";
            return d((a + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + a) + u.join("linear-gradient(left top,#9f9, white);" + a)).slice(0, -a.length)), g(q.backgroundImage, "gradient")
        }, z.cssreflections = function() {
            return j("boxReflect")
        }, z.csstransforms = function() {
            return !!j("transform")
        }, z.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective" in n.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, z.csstransitions = function() {
            return j("transition")
        }, z.fontface = function() {
            var a;
            return F('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }), a
        }, z.generatedcontent = function() {
            var a;
            return F(["#", o, "{font:0/0 a}#", o, ':after{content:"', s, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, z.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(y.svg, "svg").createSVGRect
        }, z.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == y.svg
        }, z.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(t.call(b.createElementNS(y.svg, "clipPath")))
        };
        for (var I in z) H(z, I) && (E = I.toLowerCase(), l[E] = z[I](), C.push((l[E] ? "" : "no-") + E));
        return l.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) H(a, d) && l.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), l[a] !== c) return l;
                    b = "function" == typeof b ? b() : b, void 0 !== m && m && (n.className += " " + (b ? "" : "no-") + a), l[a] = b
                }
                return l
            }, d(""), p = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = s.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = q[a[o]];
                    return b || (b = {}, p++, a[o] = p, q[p] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), r) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : m.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || l.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
                }

                function g(a, c) {
                    if (a || (a = b), r) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; g < i; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return s.shivCSS && !n && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), r || h(a, d), a
                }
                var n, r, j = "3.7.0",
                    k = a.html5 || {},
                    l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    o = "_html5shiv",
                    p = 0,
                    q = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", n = "hidden" in a, r = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return void 0 === a.cloneNode || void 0 === a.createDocumentFragment || void 0 === a.createElement
                        }()
                    } catch (a) {
                        n = !0, r = !0
                    }
                }();
                var s = {
                    elements: k.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: j,
                    shivCSS: !1 !== k.shivCSS,
                    supportsUnknownElements: r,
                    shivMethods: !1 !== k.shivMethods,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = s, i(b)
            }(this, b), l._version = k, l._prefixes = u, l._domPrefixes = x, l._cssomPrefixes = w, l.testProp = function(a) {
                return h([a])
            }, l.testAllProps = j, l.testStyles = F, l.prefixed = function(a, b, c) {
                return b ? j(a, b, c) : j(a, "pfx")
            }, n.className = n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + C.join(" ") : ""), l
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var A, B, l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            };
        B = function(a) {
            function b(a) {
                var e, f, g, a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    };
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var c, b = 0;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var m, n, h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var l, o, k = b.createElement("script"),
                e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("ie8compat", function() {
        return !window.addEventListener && document.documentMode && 7 === document.documentMode
    }),
    function(a) {
        var b = function() {
            return {
                tmp: [],
                hidden: null,
                adjust: function(b) {
                    var c = this;
                    c.hidden = b.parents().andSelf().filter(":hidden"), c.hidden.each(function() {
                        var b = a(this);
                        c.tmp.push(b.attr("style")), b.css({
                            visibility: "hidden",
                            display: "block"
                        })
                    })
                },
                reset: function() {
                    var b = this;
                    b.hidden.each(function(c) {
                        var d = a(this),
                            e = b.tmp[c];
                        void 0 === e ? d.removeAttr("style") : d.attr("style", e)
                    }), b.tmp = [], b.hidden = null
                }
            }
        };
        jQuery.foundation = jQuery.foundation || {}, jQuery.foundation.customForms = jQuery.foundation.customForms || {}, a.foundation.customForms.appendCustomMarkup = function(c) {
            function d(b, c) {
                var d = a(c).hide(),
                    e = d.attr("type"),
                    f = d.next("span.custom." + e);
                0 === f.length && (f = a('<span class="custom ' + e + '"></span>').insertAfter(d)), f.toggleClass("checked", d.is(":checked")), f.toggleClass("disabled", d.is(":disabled"))
            }

            function e(d, e) {
                var p, f = b(),
                    g = a(e),
                    h = g.next("div.custom.dropdown"),
                    i = h.find("ul"),
                    l = (h.find(".current"), h.find(".selector"), g.find("option")),
                    m = l.filter(":selected"),
                    n = 0,
                    o = "",
                    q = !1;
                if (!g.hasClass(c.disable_class)) {
                    if (0 === h.length) {
                        var r = g.hasClass("small") ? "small" : g.hasClass("medium") ? "medium" : g.hasClass("large") ? "large" : g.hasClass("expand") ? "expand" : "";
                        h = a('<div class="' + ["custom", "dropdown", r].join(" ") + '"><a href="#" class="selector"></a><ul /></div>'), h.find(".selector"), i = h.find("ul"), o = l.map(function() {
                            return "<li>" + a(this).html() + "</li>"
                        }).get().join(""), i.append(o), q = h.prepend('<a href="#" class="current">' + m.html() + "</a>").find(".current"), g.after(h).hide()
                    } else o = l.map(function() {
                        return "<li>" + a(this).html() + "</li>"
                    }).get().join(""), i.html("").append(o);
                    h.toggleClass("disabled", g.is(":disabled")), p = i.find("li"), l.each(function(b) {
                        this.selected && (p.eq(b).addClass("selected"), q && q.html(a(this).html()))
                    }), i.css("width", "auto"), h.css("width", "auto"), h.is(".small, .medium, .large, .expand") || (h.addClass("open"), f.adjust(i), n = p.outerWidth() > n ? p.outerWidth() : n, f.reset(), h.removeClass("open"), h.width(n + 18), i.width(n + 16))
                }
            }
            var f = {
                disable_class: "no-custom"
            };
            c = a.extend(f, c), a("form.custom input:radio[data-customforms!=disabled]").each(d), a("form.custom input:checkbox[data-customforms!=disabled]").each(d), a("form.custom select[data-customforms!=disabled]").each(e)
        };
        var c = function(b) {
                var c = 0,
                    d = b.next();
                $options = b.find("option"), d.find("ul").html(""), $options.each(function() {
                    $li = a("<li>" + a(this).html() + "</li>"), d.find("ul").append($li)
                }), $options.each(function(b) {
                    this.selected && (d.find("li").eq(b).addClass("selected"), d.find(".current").html(a(this).html()))
                }), d.removeAttr("style").find("ul").removeAttr("style"), d.find("li").each(function() {
                    d.addClass("open"), a(this).outerWidth() > c && (c = a(this).outerWidth()), d.removeClass("open")
                }), d.css("width", c + 18 + "px"), d.find("ul").css("width", c + 16 + "px")
            },
            d = function(a) {
                var b = a.prev(),
                    c = b[0];
                !1 === b.is(":disabled") && (c.checked = !c.checked, a.toggleClass("checked"), b.trigger("change"))
            },
            e = function(a) {
                var b = a.prev(),
                    c = b.closest("form.custom"),
                    d = b[0];
                !1 === b.is(":disabled") && (c.find('input:radio[name="' + b.attr("name") + '"]').next().not(a).removeClass("checked"), a.hasClass("checked") || a.toggleClass("checked"), d.checked = a.hasClass("checked"), b.trigger("change"))
            };
        a(document).on("click", "form.custom span.custom.checkbox", function(b) {
            b.preventDefault(), b.stopPropagation(), d(a(this))
        }), a(document).on("click", "form.custom span.custom.radio", function(b) {
            b.preventDefault(), b.stopPropagation(), e(a(this))
        }), a(document).on("change", "form.custom select[data-customforms!=disabled]", function(b) {
            c(a(this))
        }), a(document).on("click", "form.custom label", function(b) {
            var f, g, c = a("#" + a(this).attr("for") + "[data-customforms!=disabled]");
            0 !== c.length && ("checkbox" === c.attr("type") ? (b.preventDefault(), f = a(this).find("span.custom.checkbox"), 0 == f.length && (f = a(this).next("span.custom.checkbox")), 0 == f.length && (f = a(this).prev("span.custom.checkbox")), d(f)) : "radio" === c.attr("type") && (b.preventDefault(), g = a(this).find("span.custom.radio"), 0 == g.length && (g = a(this).next("span.custom.radio")), 0 == g.length && (g = a(this).prev("span.custom.radio")), e(g)))
        }), a(document).on("click", "form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector", function(b) {
            var c = a(this),
                d = c.closest("div.custom.dropdown"),
                e = d.prev();
            if (b.preventDefault(), a("div.dropdown").removeClass("open"), !1 === e.is(":disabled")) return d.toggleClass("open"), d.hasClass("open") ? a(document).bind("click.customdropdown", function(b) {
                d.removeClass("open"), a(document).unbind(".customdropdown")
            }) : a(document).unbind(".customdropdown"), !1
        }), a(document).on("click", "form.custom div.custom.dropdown li", function(b) {
            var c = a(this),
                d = c.closest("div.custom.dropdown"),
                e = d.prev(),
                f = 0;
            b.preventDefault(), b.stopPropagation(), a("div.dropdown").removeClass("open"), c.closest("ul").find("li").removeClass("selected"), c.addClass("selected"), d.removeClass("open").find("a.current").html(c.html()), c.closest("ul").find("li").each(function(a) {
                c[0] == this && (f = a)
            }), e[0].selectedIndex = f, e.trigger("change")
        }), a.fn.foundationCustomForms = a.foundation.customForms.appendCustomMarkup
    }(jQuery),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a, b) {
        function c(a) {
            function b(a) {
                d ? (c(), M(b), e = !0, d = !1) : e = !1
            }
            var c = a,
                d = !1,
                e = !1;
            this.kick = function(a) {
                d = !0, e || b()
            }, this.end = function(a) {
                var b = c;
                a && (e ? (c = d ? function() {
                    b(), a()
                } : a, d = !0) : a())
            }
        }

        function d() {
            return !0
        }

        function e() {
            return !1
        }

        function f(a) {
            a.preventDefault()
        }

        function g(a) {
            N[a.target.tagName.toLowerCase()] || a.preventDefault()
        }

        function h(a) {
            return 1 === a.which && !a.ctrlKey && !a.altKey
        }

        function i(a, b) {
            var c, d;
            if (a.identifiedTouch) return a.identifiedTouch(b);
            for (c = -1, d = a.length; ++c < d;)
                if (a[c].identifier === b) return a[c]
        }

        function j(a, b) {
            var c = i(a.changedTouches, b.identifier);
            if (c && (c.pageX !== b.pageX || c.pageY !== b.pageY)) return c
        }

        function k(a) {
            var b;
            h(a) && (b = {
                target: a.target,
                startX: a.pageX,
                startY: a.pageY,
                timeStamp: a.timeStamp
            }, J(document, O.move, l, b), J(document, O.cancel, m, b))
        }

        function l(a) {
            s(a, a.data, a, n)
        }

        function m(a) {
            n()
        }

        function n() {
            K(document, O.move, l), K(document, O.cancel, n)
        }

        function o(a) {
            var b, c;
            N[a.target.tagName.toLowerCase()] || (b = a.changedTouches[0], c = {
                target: b.target,
                startX: b.pageX,
                startY: b.pageY,
                timeStamp: a.timeStamp,
                identifier: b.identifier
            }, J(document, P.move + "." + b.identifier, p, c), J(document, P.cancel + "." + b.identifier, q, c))
        }

        function p(a) {
            var b = a.data,
                c = j(a, b);
            c && s(a, b, c, r)
        }

        function q(a) {
            var b = a.data;
            i(a.changedTouches, b.identifier) && r(b.identifier)
        }

        function r(a) {
            K(document, "." + a, p), K(document, "." + a, q)
        }

        function s(a, b, c, d) {
            var e = c.pageX - b.startX,
                f = c.pageY - b.startY;
            e * e + f * f < I * I || v(a, b, c, e, f, d)
        }

        function t() {
            return this._handled = d, !1
        }

        function u(a) {
            a._handled()
        }

        function v(a, b, c, d, e, f) {
            var h, i;
            b.target;
            h = a.targetTouches, i = a.timeStamp - b.timeStamp, b.type = "movestart", b.distX = d, b.distY = e, b.deltaX = d, b.deltaY = e, b.pageX = c.pageX, b.pageY = c.pageY, b.velocityX = d / i, b.velocityY = e / i, b.targetTouches = h, b.finger = h ? h.length : 1, b._handled = t, b._preventTouchmoveDefault = function() {
                a.preventDefault()
            }, L(b.target, b), f(b.identifier)
        }

        function w(a) {
            var b = a.data.event,
                c = a.data.timer;
            C(b, a, a.timeStamp, c)
        }

        function x(a) {
            var b = a.data.event,
                c = a.data.timer;
            y(), D(b, c, function() {
                setTimeout(function() {
                    K(b.target, "click", e)
                }, 0)
            })
        }

        function y(a) {
            K(document, O.move, w), K(document, O.end, x)
        }

        function z(a) {
            var b = a.data.event,
                c = a.data.timer,
                d = j(a, b);
            d && (a.preventDefault(), b.targetTouches = a.targetTouches, C(b, d, a.timeStamp, c))
        }

        function A(a) {
            var b = a.data.event,
                c = a.data.timer;
            i(a.changedTouches, b.identifier) && (B(b), D(b, c))
        }

        function B(a) {
            K(document, "." + a.identifier, z), K(document, "." + a.identifier, A)
        }

        function C(a, b, c, d) {
            var e = c - a.timeStamp;
            a.type = "move", a.distX = b.pageX - a.startX, a.distY = b.pageY - a.startY, a.deltaX = b.pageX - a.pageX, a.deltaY = b.pageY - a.pageY, a.velocityX = .3 * a.velocityX + .7 * a.deltaX / e, a.velocityY = .3 * a.velocityY + .7 * a.deltaY / e, a.pageX = b.pageX, a.pageY = b.pageY, d.kick()
        }

        function D(a, b, c) {
            b.end(function() {
                return a.type = "moveend", L(a.target, a), c && c()
            })
        }

        function E(a, b, c) {
            return J(this, "movestart.move", u), !0
        }

        function F(a) {
            return K(this, "dragstart drag", f), K(this, "mousedown touchstart", g), K(this, "movestart", u), !0
        }

        function G(a) {
            "move" !== a.namespace && "moveend" !== a.namespace && (J(this, "dragstart." + a.guid + " drag." + a.guid, f, b, a.selector), J(this, "mousedown." + a.guid, g, b, a.selector))
        }

        function H(a) {
            "move" !== a.namespace && "moveend" !== a.namespace && (K(this, "dragstart." + a.guid + " drag." + a.guid), K(this, "mousedown." + a.guid))
        }
        var I = 6,
            J = a.event.add,
            K = a.event.remove,
            L = function(b, c, d) {
                a.event.trigger(c, d, b)
            },
            M = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) {
                    return window.setTimeout(function() {
                        a()
                    }, 25)
                }
            }(),
            N = {
                textarea: !0,
                input: !0,
                select: !0,
                button: !0
            },
            O = {
                move: "mousemove",
                cancel: "mouseup dragstart",
                end: "mouseup"
            },
            P = {
                move: "touchmove",
                cancel: "touchend",
                end: "touchend"
            };
        a.event.special.movestart = {
            setup: E,
            teardown: F,
            add: G,
            remove: H,
            _default: function(a) {
                var d, f;
                a._handled() && (d = {
                    target: a.target,
                    startX: a.startX,
                    startY: a.startY,
                    pageX: a.pageX,
                    pageY: a.pageY,
                    distX: a.distX,
                    distY: a.distY,
                    deltaX: a.deltaX,
                    deltaY: a.deltaY,
                    velocityX: a.velocityX,
                    velocityY: a.velocityY,
                    timeStamp: a.timeStamp,
                    identifier: a.identifier,
                    targetTouches: a.targetTouches,
                    finger: a.finger
                }, f = {
                    event: d,
                    timer: new c(function(b) {
                        L(a.target, d)
                    })
                }, a.identifier === b ? (J(a.target, "click", e), J(document, O.move, w, f), J(document, O.end, x, f)) : (a._preventTouchmoveDefault(), J(document, P.move + "." + a.identifier, z, f), J(document, P.end + "." + a.identifier, A, f)))
            }
        }, a.event.special.move = {
            setup: function() {
                J(this, "movestart.move", a.noop)
            },
            teardown: function() {
                K(this, "movestart.move", a.noop)
            }
        }, a.event.special.moveend = {
            setup: function() {
                J(this, "movestart.moveend", a.noop)
            },
            teardown: function() {
                K(this, "movestart.moveend", a.noop)
            }
        }, J(document, "mousedown.move", k), J(document, "touchstart.move", o), "function" == typeof Array.prototype.indexOf && function(a, b) {
            for (var c = ["changedTouches", "targetTouches"], d = c.length; d--;) - 1 === a.event.props.indexOf(c[d]) && a.event.props.push(c[d])
        }(a)
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a, b) {
        function c(a) {
            var b, c, d;
            b = a.target.offsetWidth, c = a.target.offsetHeight, d = {
                distX: a.distX,
                distY: a.distY,
                velocityX: a.velocityX,
                velocityY: a.velocityY,
                finger: a.finger
            }, a.distX > a.distY ? a.distX > -a.distY ? (a.distX / b > h.threshold || a.velocityX * a.distX / b * h.sensitivity > 1) && (d.type = "swiperight", g(a.currentTarget, d)) : (-a.distY / c > h.threshold || a.velocityY * a.distY / b * h.sensitivity > 1) && (d.type = "swipeup", g(a.currentTarget, d)) : a.distX > -a.distY ? (a.distY / c > h.threshold || a.velocityY * a.distY / b * h.sensitivity > 1) && (d.type = "swipedown", g(a.currentTarget, d)) : (-a.distX / b > h.threshold || a.velocityX * a.distX / b * h.sensitivity > 1) && (d.type = "swipeleft", g(a.currentTarget, d))
        }

        function d(b) {
            var c = a.data(b, "event_swipe");
            return c || (c = {
                count: 0
            }, a.data(b, "event_swipe", c)), c
        }
        var e = a.event.add,
            f = a.event.remove,
            g = function(b, c, d) {
                a.event.trigger(c, d, b)
            },
            h = {
                threshold: .4,
                sensitivity: 6
            };
        a.event.special.swipe = a.event.special.swipeleft = a.event.special.swiperight = a.event.special.swipeup = a.event.special.swipedown = {
            setup: function(a, b, f) {
                if (!(d(this).count++ > 0)) return e(this, "moveend", c), !0
            },
            teardown: function() {
                if (!(--d(this).count > 0)) return f(this, "moveend", c), !0
            },
            settings: h
        }
    }),
    function(a) {
        "use strict";
        var b = !1;
        a(document).on("click", "a[data-reveal-id]", function(b) {
            b.preventDefault();
            var c = a(this).attr("data-reveal-id");
            a("#" + c).reveal(a(this).data())
        }), a.fn.reveal = function(c) {
            var d = a(document),
                e = {
                    animation: "fadeAndPop",
                    animationSpeed: 300,
                    closeOnBackgroundClick: !0,
                    dismissModalClass: "close-reveal-modal",
                    open: a.noop,
                    opened: a.noop,
                    close: a.noop,
                    closed: a.noop
                };
            return c = a.extend({}, e, c), this.not(".reveal-modal.open").each(function() {
                function e() {
                    p = !1
                }

                function f() {
                    p = !0
                }

                function g() {
                    var c = a(".reveal-modal.open");
                    1 === c.length && (b = !0, c.trigger("reveal:close"))
                }

                function h() {
                    p || (f(), g(), m.addClass("open"), "fadeAndPop" === c.animation && (r.open.top = d.scrollTop() - o, r.open.opacity = 0, m.css(r.open), q.fadeIn(c.animationSpeed / 2), m.delay(c.animationSpeed / 2).animate({
                        top: d.scrollTop() + n + "px",
                        opacity: 1
                    }, c.animationSpeed, function() {
                        m.trigger("reveal:opened")
                    })), "fade" === c.animation && (r.open.top = d.scrollTop() + n, r.open.opacity = 0, m.css(r.open), q.fadeIn(c.animationSpeed / 2), m.delay(c.animationSpeed / 2).animate({
                        opacity: 1
                    }, c.animationSpeed, function() {
                        m.trigger("reveal:opened")
                    })), "none" === c.animation && (r.open.top = d.scrollTop() + n, r.open.opacity = 1, m.css(r.open), q.css({
                        display: "block"
                    }), m.trigger("reveal:opened")))
                }

                function i() {
                    var a = m.find(".flex-video"),
                        b = a.find("iframe");
                    b.length > 0 && (b.attr("src", b.data("src")), a.fadeIn(100))
                }

                function j() {
                    p || (f(), m.removeClass("open"), "fadeAndPop" === c.animation && (m.animate({
                        top: d.scrollTop() - o + "px",
                        opacity: 0
                    }, c.animationSpeed / 2, function() {
                        m.css(r.close)
                    }), b ? m.trigger("reveal:closed") : q.delay(c.animationSpeed).fadeOut(c.animationSpeed, function() {
                        m.trigger("reveal:closed")
                    })), "fade" === c.animation && (m.animate({
                        opacity: 0
                    }, c.animationSpeed, function() {
                        m.css(r.close)
                    }), b ? m.trigger("reveal:closed") : q.delay(c.animationSpeed).fadeOut(c.animationSpeed, function() {
                        m.trigger("reveal:closed")
                    })), "none" === c.animation && (m.css(r.close), b || q.css({
                        display: "none"
                    }), m.trigger("reveal:closed")), b = !1)
                }

                function k() {
                    m.unbind(".reveal"), q.unbind(".reveal"), s.unbind(".reveal"), a("body").unbind(".reveal")
                }

                function l() {
                    var a = m.find(".flex-video"),
                        b = a.find("iframe");
                    b.length > 0 && (b.data("src", b.attr("src")), b.attr("src", ""), a.fadeOut(100))
                }
                var s, m = a(this),
                    n = parseInt(m.css("top"), 10),
                    o = m.height() + n,
                    p = !1,
                    q = a(".reveal-modal-bg"),
                    r = {
                        open: {
                            top: 0,
                            opacity: 0,
                            visibility: "visible",
                            display: "block"
                        },
                        close: {
                            top: n,
                            opacity: 1,
                            visibility: "hidden",
                            display: "none"
                        }
                    };
                0 === q.length && (q = a("<div />", {
                    class: "reveal-modal-bg"
                }).insertAfter(m), q.fadeTo("fast", .8)), m.bind("reveal:open.reveal", h), m.bind("reveal:open.reveal", i), m.bind("reveal:close.reveal", j), m.bind("reveal:closed.reveal", l), m.bind("reveal:opened.reveal reveal:closed.reveal", e), m.bind("reveal:closed.reveal", k), m.bind("reveal:open.reveal", c.open), m.bind("reveal:opened.reveal", c.opened), m.bind("reveal:close.reveal", c.close), m.bind("reveal:closed.reveal", c.closed), m.trigger("reveal:open"), s = a("." + c.dismissModalClass).bind("click.reveal", function() {
                    m.trigger("reveal:close")
                }), c.closeOnBackgroundClick && (q.css({
                    cursor: "pointer"
                }), q.bind("click.reveal", function() {
                    m.trigger("reveal:close")
                })), a("body").bind("keyup.reveal", function(a) {
                    27 === a.which && m.trigger("reveal:close")
                })
            })
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.fn.findFirstImage = function() {
            return this.first().find("img").andSelf().filter("img").first()
        };
        var b = {
            defaults: {
                animation: "horizontal-push",
                animationSpeed: 600,
                timer: !0,
                advanceSpeed: 4e3,
                pauseOnHover: !1,
                startClockOnMouseOut: !1,
                startClockOnMouseOutAfter: 1e3,
                directionalNav: !0,
                directionalNavRightText: "Right",
                directionalNavLeftText: "Left",
                captions: !0,
                captionAnimation: "fade",
                captionAnimationSpeed: 600,
                resetTimerOnClick: !1,
                bullets: !1,
                bulletThumbs: !1,
                bulletThumbLocation: "",
                bulletThumbsHideOnSmall: !0,
                afterSlideChange: a.noop,
                afterLoadComplete: a.noop,
                fluid: !0,
                centerBullets: !0,
                singleCycle: !1,
                slideNumber: !1,
                stackOnSmall: !1
            },
            activeSlide: 0,
            numberSlides: 0,
            orbitWidth: null,
            orbitHeight: null,
            locked: null,
            timerRunning: null,
            degrees: 0,
            wrapperHTML: '<div class="orbit-wrapper" />',
            timerHTML: '<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',
            captionHTML: '<div class="orbit-caption"></div>',
            directionalNavHTML: '<div class="slider-nav hide-for-small"><span class="right"></span><span class="left"></span></div>',
            bulletHTML: '<ul class="orbit-bullets"></ul>',
            slideNumberHTML: '<span class="orbit-slide-counter"></span>',
            init: function(b, c) {
                var d, e = 0,
                    f = this;
                this.clickTimer = a.proxy(this.clickTimer, this), this.addBullet = a.proxy(this.addBullet, this), this.resetAndUnlock = a.proxy(this.resetAndUnlock, this), this.stopClock = a.proxy(this.stopClock, this), this.startTimerAfterMouseLeave = a.proxy(this.startTimerAfterMouseLeave, this), this.clearClockMouseLeaveTimer = a.proxy(this.clearClockMouseLeaveTimer, this), this.rotateTimer = a.proxy(this.rotateTimer, this), this.options = a.extend({}, this.defaults, c), "false" === this.options.timer && (this.options.timer = !1), "false" === this.options.captions && (this.options.captions = !1), "false" === this.options.directionalNav && (this.options.directionalNav = !1), this.$element = a(b), this.$wrapper = this.$element.wrap(this.wrapperHTML).parent(), this.$slides = this.$element.children("img, a, div, figure, li"), this.$element.on("movestart", function(a) {
                    (a.distX > a.distY && a.distX < -a.distY || a.distX < a.distY && a.distX > -a.distY) && a.preventDefault()
                }), this.$element.bind("orbit.next", function() {
                    f.shift("next")
                }), this.$element.bind("orbit.prev", function() {
                    f.shift("prev")
                }), this.$element.bind("swipeleft", function() {
                    a(this).trigger("orbit.next")
                }), this.$element.bind("swiperight", function() {
                    a(this).trigger("orbit.prev")
                }), this.$element.bind("orbit.goto", function(a, b) {
                    f.shift(b)
                }), this.$element.bind("orbit.start", function(a, b) {
                    f.startClock()
                }), this.$element.bind("orbit.stop", function(a, b) {
                    f.stopClock()
                }), d = this.$slides.filter("img"), 0 === d.length ? this.loaded() : d.bind("imageready", function() {
                    (e += 1) === d.length && f.loaded()
                })
            },
            loaded: function() {
                this.$element.addClass("orbit").css({
                    width: "1px",
                    height: "1px"
                }), this.options.stackOnSmall && this.$element.addClass("orbit-stack-on-small"), this.$slides.addClass("orbit-slide").css({
                    opacity: 0
                }), this.setDimentionsFromLargestSlide(), this.updateOptionsIfOnlyOneSlide(), this.setupFirstSlide(), this.notifySlideChange(), this.options.timer && (this.setupTimer(), this.startClock()), this.options.captions && this.setupCaptions(), this.options.directionalNav && this.setupDirectionalNav(), this.options.bullets && (this.setupBulletNav(), this.setActiveBullet()), this.options.afterLoadComplete.call(this), Holder.run()
            },
            currentSlide: function() {
                return this.$slides.eq(this.activeSlide)
            },
            notifySlideChange: function() {
                if (this.options.slideNumber) {
                    var b = this.activeSlide + 1 + " of " + this.$slides.length;
                    if (this.$element.trigger("orbit.change", {
                            slideIndex: this.activeSlide,
                            slideCount: this.$slides.length
                        }), void 0 === this.$counter) {
                        var c = a(this.slideNumberHTML).html(b);
                        this.$counter = c, this.$wrapper.append(this.$counter)
                    } else this.$counter.html(b)
                }
            },
            setDimentionsFromLargestSlide: function() {
                var c, b = this;
                b.$element.add(b.$wrapper).width(this.$slides.first().outerWidth()), b.$element.add(b.$wrapper).height(this.$slides.first().height()), b.orbitWidth = this.$slides.first().outerWidth(), b.orbitHeight = this.$slides.first().height(), c = this.$slides.first().findFirstImage().clone(), this.$slides.each(function() {
                    var d = a(this),
                        e = d.outerWidth(),
                        f = d.height();
                    e > b.$element.outerWidth() && (b.$element.add(b.$wrapper).width(e), b.orbitWidth = b.$element.outerWidth()), f > b.$element.height() && (b.$element.add(b.$wrapper).height(f), b.orbitHeight = b.$element.height(), c = a(this).findFirstImage().clone()), b.numberSlides += 1
                }), this.options.fluid && ("string" == typeof this.options.fluid && (c = a("<img>").attr("data-src", "holder.js/" + this.options.fluid)), b.$element.prepend(c), c.addClass("fluid-placeholder"), b.$element.add(b.$wrapper).css({
                    width: "inherit"
                }), b.$element.add(b.$wrapper).css({
                    height: "inherit"
                }), a(window).bind("resize", function() {
                    b.orbitWidth = b.$element.outerWidth(), b.orbitHeight = b.$element.height()
                }))
            },
            lock: function() {
                this.locked = !0
            },
            unlock: function() {
                this.locked = !1
            },
            updateOptionsIfOnlyOneSlide: function() {
                1 === this.$slides.length && (this.options.directionalNav = !1, this.options.timer = !1, this.options.bullets = !1)
            },
            setupFirstSlide: function() {
                var a = this;
                this.$slides.first().css({
                    "z-index": 3,
                    opacity: 1
                }).fadeIn(function() {
                    a.$slides.css({
                        display: "block"
                    })
                })
            },
            startClock: function() {
                var a = this;
                if (!this.options.timer) return !1;
                this.$timer.is(":hidden") ? this.clock = setInterval(function() {
                    a.$element.trigger("orbit.next")
                }, this.options.advanceSpeed) : (this.timerRunning = !0, this.$pause.removeClass("active"), this.clock = setInterval(this.rotateTimer, this.options.advanceSpeed / 180, !1))
            },
            rotateTimer: function(a) {
                var b = "rotate(" + this.degrees + "deg)";
                this.degrees += 2, this.$rotator.css({
                    "-webkit-transform": b,
                    "-moz-transform": b,
                    "-o-transform": b,
                    "-ms-transform": b
                }), a && (this.degrees = 0, this.$rotator.removeClass("move"), this.$mask.removeClass("move")), this.degrees > 180 && (this.$rotator.addClass("move"), this.$mask.addClass("move")), this.degrees > 360 && (this.$rotator.removeClass("move"), this.$mask.removeClass("move"), this.degrees = 0, this.$element.trigger("orbit.next"))
            },
            stopClock: function() {
                if (!this.options.timer) return !1;
                this.timerRunning = !1, clearInterval(this.clock), this.$pause.addClass("active")
            },
            setupTimer: function() {
                this.$timer = a(this.timerHTML), this.$wrapper.append(this.$timer), this.$rotator = this.$timer.find(".rotator"), this.$mask = this.$timer.find(".mask"), this.$pause = this.$timer.find(".pause"), this.$timer.click(this.clickTimer), this.options.startClockOnMouseOut && (this.$wrapper.mouseleave(this.startTimerAfterMouseLeave), this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer)), this.options.pauseOnHover && this.$wrapper.mouseenter(this.stopClock)
            },
            startTimerAfterMouseLeave: function() {
                var a = this;
                this.outTimer = setTimeout(function() {
                    a.timerRunning || a.startClock()
                }, this.options.startClockOnMouseOutAfter)
            },
            clearClockMouseLeaveTimer: function() {
                clearTimeout(this.outTimer)
            },
            clickTimer: function() {
                this.timerRunning ? this.stopClock() : this.startClock()
            },
            setupCaptions: function() {
                this.$caption = a(this.captionHTML), this.$wrapper.append(this.$caption), this.setCaption()
            },
            setCaption: function() {
                var c, b = this.currentSlide().attr("data-caption");
                if (!this.options.captions) return !1;
                if (b) {
                    if (a.trim(a(b).text()).length < 1) return !1;
                    switch ("#" == b.charAt(0) && (b = b.substring(1, b.length)), c = a("#" + b).html(), this.$caption.attr("id", b).html(c), this.options.captionAnimation) {
                        case "none":
                            this.$caption.show();
                            break;
                        case "fade":
                            this.$caption.fadeIn(this.options.captionAnimationSpeed);
                            break;
                        case "slideOpen":
                            this.$caption.slideDown(this.options.captionAnimationSpeed)
                    }
                } else switch (this.options.captionAnimation) {
                    case "none":
                        this.$caption.hide();
                        break;
                    case "fade":
                        this.$caption.fadeOut(this.options.captionAnimationSpeed);
                        break;
                    case "slideOpen":
                        this.$caption.slideUp(this.options.captionAnimationSpeed)
                }
            },
            setupDirectionalNav: function() {
                var b = this,
                    c = a(this.directionalNavHTML);
                c.find(".right").html(this.options.directionalNavRightText), c.find(".left").html(this.options.directionalNavLeftText), this.$wrapper.append(c), this.$wrapper.find(".left").click(function() {
                    b.stopClock(), b.options.resetTimerOnClick && (b.rotateTimer(!0), b.startClock()), b.$element.trigger("orbit.prev")
                }), this.$wrapper.find(".right").click(function() {
                    b.stopClock(), b.options.resetTimerOnClick && (b.rotateTimer(!0), b.startClock()), b.$element.trigger("orbit.next")
                })
            },
            setupBulletNav: function() {
                this.$bullets = a(this.bulletHTML), this.$wrapper.append(this.$bullets), this.$slides.each(this.addBullet), this.$element.addClass("with-bullets"), this.options.centerBullets && this.$bullets.css("margin-left", -this.$bullets.outerWidth() / 2), this.options.bulletThumbsHideOnSmall && this.$bullets.addClass("hide-for-small")
            },
            addBullet: function(b, c) {
                var f, d = b + 1,
                    e = a("<li>" + d + "</li>"),
                    g = this;
                this.options.bulletThumbs && (f = a(c).attr("data-thumb")) && e.addClass("has-thumb").css({
                    background: "url(" + this.options.bulletThumbLocation + f + ") no-repeat"
                }), this.$bullets.append(e), e.data("index", b), e.click(function() {
                    g.stopClock(), g.options.resetTimerOnClick && (g.rotateTimer(!0), g.startClock()), g.$element.trigger("orbit.goto", [e.data("index")])
                })
            },
            setActiveBullet: function() {
                if (!this.options.bullets) return !1;
                this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active")
            },
            resetAndUnlock: function() {
                this.$slides.eq(this.prevActiveSlide).css({
                    "z-index": 1
                }), this.unlock(), this.options.afterSlideChange.call(this, this.$slides.eq(this.prevActiveSlide), this.$slides.eq(this.activeSlide))
            },
            shift: function(b) {
                var c = b;
                return this.prevActiveSlide = this.activeSlide, this.prevActiveSlide != c && ("1" != this.$slides.length && (this.locked || (this.lock(), "next" == b ? ++this.activeSlide == this.numberSlides && (this.activeSlide = 0) : "prev" == b ? --this.activeSlide < 0 && (this.activeSlide = this.numberSlides - 1) : (this.activeSlide = b, this.prevActiveSlide < this.activeSlide ? c = "next" : this.prevActiveSlide > this.activeSlide && (c = "prev")), this.setActiveBullet(), this.notifySlideChange(), this.$slides.eq(this.prevActiveSlide).css({
                    "z-index": 2
                }), "fade" == this.options.animation && (this.$slides.eq(this.activeSlide).css({
                    opacity: 0,
                    "z-index": 3
                }).animate({
                    opacity: 1
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).animate({
                    opacity: 0
                }, this.options.animationSpeed)), "horizontal-slide" == this.options.animation && ("next" == c && this.$slides.eq(this.activeSlide).css({
                    left: this.orbitWidth,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    left: 0
                }, this.options.animationSpeed, this.resetAndUnlock), "prev" == c && this.$slides.eq(this.activeSlide).css({
                    left: -this.orbitWidth,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    left: 0
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0)), "vertical-slide" == this.options.animation && ("prev" == c && (this.$slides.eq(this.activeSlide).css({
                    top: this.orbitHeight,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    top: 0
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0)), "next" == c && this.$slides.eq(this.activeSlide).css({
                    top: -this.orbitHeight,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    top: 0
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0)), "horizontal-push" == this.options.animation && ("next" == c && (this.$slides.eq(this.activeSlide).css({
                    left: this.orbitWidth,
                    "z-index": 3
                }).animate({
                    left: 0,
                    opacity: 1
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).animate({
                    left: -this.orbitWidth
                }, this.options.animationSpeed, "", function() {
                    a(this).css({
                        opacity: 0
                    })
                })), "prev" == c && (this.$slides.eq(this.activeSlide).css({
                    left: -this.orbitWidth,
                    "z-index": 3
                }).animate({
                    left: 0,
                    opacity: 1
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).animate({
                    left: this.orbitWidth
                }, this.options.animationSpeed, "", function() {
                    a(this).css({
                        opacity: 0
                    })
                }))), "vertical-push" == this.options.animation && ("next" == c && (this.$slides.eq(this.activeSlide).css({
                    top: -this.orbitHeight,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    top: 0,
                    opacity: 1
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0).animate({
                    top: this.orbitHeight
                }, this.options.animationSpeed, "")), "prev" == c && (this.$slides.eq(this.activeSlide).css({
                    top: this.orbitHeight,
                    "z-index": 3
                }).css("opacity", 1).animate({
                    top: 0
                }, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0).animate({
                    top: -this.orbitHeight
                }, this.options.animationSpeed))), this.setCaption()), void(this.activeSlide === this.$slides.length - 1 && this.options.singleCycle && this.stopClock())))
            }
        };
        a.fn.orbit = function(c) {
            return this.each(function() {
                a.extend({}, b).init(this, c)
            })
        }
    }(jQuery),
    function(a) {
        function b(b, c) {
            var d = a(b);
            d.bind("load.imageready", function() {
                c.apply(b, arguments), d.unbind("load.imageready")
            })
        }
        var c = {};
        a.event.special.imageready = {
            setup: function(a, b, d) {
                c = a || c
            },
            add: function(d) {
                var f, e = a(this);
                1 === this.nodeType && "img" === this.tagName.toLowerCase() && "" !== this.src && (c.forceLoad ? (f = e.attr("src"), e.attr("src", ""), b(this, d.handler), e.attr("src", f)) : this.complete || 4 === this.readyState ? d.handler.apply(this, arguments) : b(this, d.handler))
            },
            teardown: function(b) {
                a(this).unbind(".imageready")
            }
        }
    }(jQuery);
var Holder = Holder || {};
! function(a, b) {
    function c(a, b) {
        var c = "complete",
            d = "readystatechange",
            e = !1,
            f = e,
            g = !0,
            h = a.document,
            i = h.documentElement,
            j = h.addEventListener ? "addEventListener" : "attachEvent",
            k = h.addEventListener ? "removeEventListener" : "detachEvent",
            l = h.addEventListener ? "" : "on",
            m = function(g) {
                (g.type != d || h.readyState == c) && (("load" == g.type ? a : h)[k](l + g.type, m, e), !f && (f = !0) && b.call(a, null))
            },
            n = function() {
                try {
                    i.doScroll("left")
                } catch (a) {
                    return void setTimeout(n, 50)
                }
                m("poll")
            };
        if (h.readyState == c) b.call(a, "lazy");
        else {
            if (h.createEventObject && i.doScroll) {
                try {
                    g = !a.frameElement
                } catch (a) {}
                g && n()
            }
            h[j](l + "DOMContentLoaded", m, e), h[j](l + d, m, e), a[j](l + "load", m, e)
        }
    }

    function d(a) {
        a = a.match(/^(\W)?(.*)/);
        var b = document["getElement" + (a[1] ? "#" == a[1] ? "ById" : "sByClassName" : "sByTagName")](a[2]),
            c = [];
        return null != b && (c = b.length ? b : 0 == b.length ? b : [b]), c
    }

    function e(a, b) {
        var c = {};
        for (var d in a) c[d] = a[d];
        for (var e in b) c[e] = b[e];
        return c
    }

    function f(a, b, c) {
        var d = [b.height, b.width].sort(),
            e = Math.round(d[1] / 16),
            f = Math.round(d[0] / 16),
            g = Math.max(c.size, e);
        i.width = b.width, i.height = b.height, a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = c.background, a.fillRect(0, 0, b.width, b.height), a.fillStyle = c.foreground, a.font = "bold " + g + "px sans-serif";
        var h = c.text ? c.text : b.width + "x" + b.height;
        return Math.round(a.measureText(h).width) / b.width > 1 && (g = Math.max(f, c.size)), a.font = "bold " + g + "px sans-serif", a.fillText(h, b.width / 2, b.height / 2, b.width), i.toDataURL("image/png")
    }
    var g = !1,
        h = !1,
        i = document.createElement("canvas");
    if (i.getContext)
        if (i.toDataURL("image/png").indexOf("data:image/png") < 0) h = !0;
        else var k = i.getContext("2d");
    else h = !0;
    var l = {
        domain: "holder.js",
        images: "img",
        themes: {
            gray: {
                background: "#eee",
                foreground: "#aaa",
                size: 12
            },
            social: {
                background: "#3a5a97",
                foreground: "#fff",
                size: 12
            },
            industrial: {
                background: "#434A52",
                foreground: "#C2F200",
                size: 12
            }
        }
    };
    a.flags = {
        dimensions: {
            regex: /([0-9]+)x([0-9]+)/,
            output: function(a) {
                var b = this.regex.exec(a);
                return {
                    width: +b[1],
                    height: +b[2]
                }
            }
        },
        colors: {
            regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
            output: function(a) {
                var b = this.regex.exec(a);
                return {
                    size: l.themes.gray.size,
                    foreground: "#" + b[2],
                    background: "#" + b[1]
                }
            }
        },
        text: {
            regex: /text\:(.*)/,
            output: function(a) {
                return this.regex.exec(a)[1]
            }
        }
    };
    for (var m in a.flags) a.flags[m].match = function(a) {
        return a.match(this.regex)
    };
    a.add_theme = function(b, c) {
        return null != b && null != c && (l.themes[b] = c), a
    }, a.add_image = function(b, c) {
        var e = d(c);
        if (e.length)
            for (var f = 0, g = e.length; f < g; f++) {
                var h = document.createElement("img");
                h.setAttribute("data-src", b), e[f].appendChild(h)
            }
        return a
    }, a.run = function(b) {
        for (var c = e(l, b), g = d(c.images), m = g.length, n = 0; n < m; n++) {
            var o = l.themes.gray,
                p = g[n].getAttribute("data-src") || g[n].getAttribute("src");
            if (p && ~p.indexOf(c.domain)) {
                var q = !1,
                    r = null,
                    s = null,
                    t = p.substr(p.indexOf(c.domain) + c.domain.length + 1).split("/");
                for (sl = t.length, j = 0; j < sl; j++) a.flags.dimensions.match(t[j]) ? (q = !0, r = a.flags.dimensions.output(t[j])) : a.flags.colors.match(t[j]) ? o = a.flags.colors.output(t[j]) : c.themes[t[j]] ? o = c.themes[t[j]] : a.flags.text.match(t[j]) && (s = a.flags.text.output(t[j]));
                if (q) {
                    g[n].setAttribute("data-src", p);
                    var u = r.width + "x" + r.height;
                    g[n].setAttribute("alt", s || (o.text ? o.text + " [" + u + "]" : u)), g[n].style.backgroundColor = o.background;
                    var o = s ? e(o, {
                        text: s
                    }) : o;
                    h || g[n].setAttribute("src", f(k, r, o))
                }
            }
        }
        return a
    }, c(b, function() {
        g || a.run()
    })
}(Holder, window),
function(a, b, c) {
    "use strict";
    a.fn.foundationNavigation = function(b) {
        var c = !1;
        Modernizr.touch || navigator.userAgent.match(/Windows Phone/i) ? (a(document).on("click.fndtn touchstart.fndtn", ".nav-bar a.flyout-toggle", function(b) {
            b.preventDefault();
            var d = a(this).siblings(".flyout").first();
            !1 === c && (a(".nav-bar .flyout").not(d).slideUp(500), d.slideToggle(500, function() {
                c = !1
            })), c = !0
        }), a(".nav-bar>li.has-flyout", this).addClass("is-touch")) : a(".nav-bar>li.has-flyout", this).on("mouseenter mouseleave", function(b) {
            if ("mouseenter" == b.type && (a(".nav-bar").find(".flyout").hide(), a(this).children(".flyout").show()), "mouseleave" == b.type) {
                var c = a(this).children(".flyout"),
                    d = c.find("input");
                (function(b) {
                    var c;
                    return b.length > 0 && (b.each(function() {
                        a(this).is(":focus") && (c = !0)
                    }), c)
                })(d) || a(this).children(".flyout").hide()
            }
        })
    }
}(jQuery),
function(a, b, c) {
    "use strict";
    a.fn.foundationButtons = function(b) {
        var d = a(document),
            e = a.extend({
                dropdownAsToggle: !1,
                activeClass: "active"
            }, b),
            f = function(b) {
                a(".button.dropdown").find("ul").not(b).removeClass("show-dropdown")
            },
            g = function(b) {
                var c = a(".button.dropdown").not(b);
                c.add(a("> span." + e.activeClass, c)).removeClass(e.activeClass)
            };
        d.on("click.fndtn", ".button.disabled", function(a) {
            a.preventDefault()
        }), a(".button.dropdown > ul", this).addClass("no-hover"), d.on("click.fndtn", ".button.dropdown:not(.split), .button.dropdown.split span", function(b) {
            var c = a(this),
                d = c.closest(".button.dropdown"),
                h = a("> ul", d);
            a.inArray(b.target.nodeName, ["A", "BUTTON"]) && b.preventDefault(), setTimeout(function() {
                f(e.dropdownAsToggle ? "" : h), h.toggleClass("show-dropdown"), e.dropdownAsToggle && (g(d), c.toggleClass(e.activeClass))
            }, 0)
        }), d.on("click.fndtn", "body, html", function(b) {
            c != b.originalEvent && (a(b.originalEvent.target).is(".button.dropdown:not(.split), .button.dropdown.split span") || (f(), e.dropdownAsToggle && g()))
        });
        var h = a(".button.dropdown:not(.large):not(.small):not(.tiny):visible", this).outerHeight() - 1,
            i = a(".button.large.dropdown:visible", this).outerHeight() - 1,
            j = a(".button.small.dropdown:visible", this).outerHeight() - 1,
            k = a(".button.tiny.dropdown:visible", this).outerHeight() - 1;
        a(".button.dropdown:not(.large):not(.small):not(.tiny) > ul", this).css("top", h), a(".button.dropdown.large > ul", this).css("top", i), a(".button.dropdown.small > ul", this).css("top", j), a(".button.dropdown.tiny > ul", this).css("top", k), a(".button.dropdown.up:not(.large):not(.small):not(.tiny) > ul", this).css("top", "auto").css("bottom", h - 2), a(".button.dropdown.up.large > ul", this).css("top", "auto").css("bottom", i - 2), a(".button.dropdown.up.small > ul", this).css("top", "auto").css("bottom", j - 2), a(".button.dropdown.up.tiny > ul", this).css("top", "auto").css("bottom", k - 2)
    }
}(jQuery),
function(a, b, c, d) {
    "use strict";
    var e = {
            callback: a.noop,
            deep_linking: !0,
            init: !1
        },
        f = {
            init: function(b) {
                return e = a.extend({}, e, b), this.each(function() {
                    e.init || f.events(), e.deep_linking && f.from_hash()
                })
            },
            events: function() {
                a(c).on("click.fndtn", ".tabs a", function(b) {
                    f.set_tab(a(this).parent("dd, li"), b)
                }), e.init = !0
            },
            set_tab: function(b, c) {
                var d = b.closest("dl, ul").find(".active"),
                    f = b.children("a").attr("href"),
                    g = /^#/.test(f),
                    h = a(f + "Tab");
                g && h.length > 0 && (c && !e.deep_linking && c.preventDefault(), h.closest(".tabs-content").children("li").removeClass("active").hide(), h.css("display", "block").addClass("active")), d.removeClass("active"), b.addClass("active"), e.callback()
            },
            from_hash: function() {
                var c = b.location.hash;
                a('a[href="' + c + '"]').trigger("click.fndtn")
            }
        };
    a.fn.foundationTabs = function(b) {
        return f[b] ? f[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.foundationTabs") : f.init.apply(this, arguments)
    }
}(jQuery, this, this.document),
function(a, b, c) {
    "use strict";
    var d = {
            bodyHeight: 0,
            selector: ".has-tip",
            additionalInheritableClasses: [],
            tooltipClass: ".tooltip",
            tipTemplate: function(a, b) {
                return '<span data-selector="' + a + '" class="' + d.tooltipClass.substring(1) + '">' + b + '<span class="nub"></span></span>'
            }
        },
        e = {
            init: function(b) {
                return d = a.extend(d, b), d.selector = d.targetClass ? d.targetClass : d.selector, this.each(function() {
                    var b = a("body");
                    Modernizr.touch ? (b.on("click.tooltip touchstart.tooltip touchend.tooltip", d.selector, function(b) {
                        b.preventDefault(), a(d.tooltipClass).hide(), e.showOrCreateTip(a(this))
                    }), b.on("click.tooltip touchstart.tooltip touchend.tooltip", d.tooltipClass, function(b) {
                        b.preventDefault(), a(this).fadeOut(150)
                    })) : b.on("mouseenter.tooltip mouseleave.tooltip", d.selector, function(b) {
                        var c = a(this);
                        "mouseenter" === b.type ? e.showOrCreateTip(c) : "mouseleave" === b.type && e.hide(c)
                    }), a(this).data("tooltips", !0)
                })
            },
            showOrCreateTip: function(a, b) {
                var c = e.getTip(a);
                c && c.length > 0 ? e.show(a) : e.create(a, b)
            },
            getTip: function(b) {
                var c = e.selector(b),
                    f = null;
                return c && (f = a("span[data-selector=" + c + "]" + d.tooltipClass)), f.length > 0 && f
            },
            selector: function(a) {
                var b = a.attr("id"),
                    d = a.data("selector");
                return b === c && d === c && (d = "tooltip" + Math.random().toString(36).substring(7), a.attr("data-selector", d)), b || d
            },
            create: function(b, c) {
                var f = a(d.tipTemplate(e.selector(b), a("<div>").html(c || b.attr("title")).html())),
                    g = e.inheritable_classes(b);
                f.addClass(g).appendTo("body"), Modernizr.touch && f.append('<span class="tap-to-close">tap to close </span>'), b.removeAttr("title"), e.show(b)
            },
            reposition: function(c, d, e) {
                var f, g, h, j, k;
                if (d.css("visibility", "hidden").show(), f = c.data("width"), g = d.children(".nub"), h = g.outerHeight(), g.outerWidth(), k = function(a, b, c, d, e, f) {
                        return a.css({
                            top: b,
                            bottom: d,
                            left: e,
                            right: c,
                            "max-width": f || "auto"
                        }).end()
                    }, k(d, c.offset().top + c.outerHeight() + 10, "auto", "auto", c.offset().left, f), k(g, -h, "auto", "auto", 10), a(b).width() < 767) {
                    if (c.data("mobile-width")) d.width(c.data("mobile-width")).css("left", 15).addClass("tip-override");
                    else if (j = c.closest(".columns"), j.length < 0 && (j = a("body")), j.outerWidth()) d.width(j.outerWidth() - 25).css("left", 15).addClass("tip-override");
                    else {
                        var l = Math.ceil(.9 * a(b).width());
                        d.width(l).css("left", 15).addClass("tip-override")
                    }
                    k(g, -h, "auto", "auto", c.offset().left)
                } else e && e.indexOf("tip-top") > -1 ? (k(d, c.offset().top - d.outerHeight() - h, "auto", "auto", c.offset().left, f).removeClass("tip-override"), k(g, "auto", "auto", -h, "auto")) : e && e.indexOf("tip-left") > -1 ? (k(d, c.offset().top + c.outerHeight() / 2 - h, "auto", "auto", c.offset().left - d.outerWidth() - 10, f).removeClass("tip-override"), k(g, d.outerHeight() / 2 - h / 2, -h, "auto", "auto")) : e && e.indexOf("tip-right") > -1 ? (k(d, c.offset().top + c.outerHeight() / 2 - h, "auto", "auto", c.offset().left + c.outerWidth() + 10, f).removeClass("tip-override"), k(g, d.outerHeight() / 2 - h / 2, "auto", "auto", -h)) : e && e.indexOf("tip-centered-top") > -1 ? (k(d, c.offset().top - d.outerHeight() - h, "auto", "auto", c.offset().left + (c.outerWidth() - d.outerWidth()) / 2, f).removeClass("tip-override"), k(g, "auto", d.outerWidth() / 2 - h / 2, -h, "auto")) : e && e.indexOf("tip-centered-bottom") > -1 && (k(d, c.offset().top + c.outerHeight() + 10, "auto", "auto", c.offset().left + (c.outerWidth() - d.outerWidth()) / 2, f).removeClass("tip-override"), k(g, -h, d.outerWidth() / 2 - h / 2, "auto", "auto"));
                d.css("visibility", "visible").hide()
            },
            inheritable_classes: function(b) {
                var c = ["tip-top", "tip-left", "tip-bottom", "tip-right", "tip-centered-top", "tip-centered-bottom", "noradius"].concat(d.additionalInheritableClasses),
                    e = b.attr("class"),
                    f = e ? a.map(e.split(" "), function(b, d) {
                        if (-1 !== a.inArray(b, c)) return b
                    }).join(" ") : "";
                return a.trim(f)
            },
            show: function(a) {
                var b = e.getTip(a);
                e.reposition(a, b, a.attr("class")), b.fadeIn(150)
            },
            hide: function(a) {
                e.getTip(a).fadeOut(150)
            },
            reload: function() {
                var b = a(this);
                return b.data("tooltips") ? b.foundationTooltips("destroy").foundationTooltips("init") : b.foundationTooltips("init")
            },
            destroy: function() {
                return this.each(function() {
                    a(b).off(".tooltip"), a(d.selector).off(".tooltip"), a(d.tooltipClass).each(function(b) {
                        a(a(d.selector).get(b)).attr("title", a(this).text())
                    }).remove()
                })
            }
        };
    a.fn.foundationTooltips = function(b) {
        return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.foundationTooltips") : e.init.apply(this, arguments)
    }
}(jQuery, this),
function(a, b, c) {
    "use strict";
    a.fn.foundationAccordion = function(b) {
        var c = function(a) {
            return a.hasClass("hover") && !Modernizr.touch
        };
        a(document).on("mouseenter", ".accordion li", function() {
            var b = a(this).parent();
            if (c(b)) {
                var d = a(this).children(".content").first();
                a(".content", b).not(d).slideUp(300).parent("li"), d.slideToggle(300, function() {
                    d.parent("li").addClass("active")
                })
            }
        }), a(document).on("click.fndtn", ".accordion li .title", function() {
            var b = a(this).closest("li"),
                d = b.parent();
            if (!c(d)) {
                var e = b.children(".content").first();
                b.hasClass("active") ? d.find("li").removeClass("active").end().find(".content").slideUp(300) : (a(".content", d).not(e).slideUp(300).parent("li").removeClass("active"), e.slideDown(300, function() {
                    e.parent("li").addClass("active")
                }))
            }
        })
    }
}(jQuery),
function(a, b, c) {
    function d(a) {
        var b = {},
            d = /^jQuery\d+$/;
        return c.each(a.attributes, function(a, c) {
            c.specified && !d.test(c.name) && (b[c.name] = c.value)
        }), b
    }

    function e(a, d) {
        var e = this,
            f = c(e);
        if (e.value == f.attr("placeholder") && f.hasClass("placeholder"))
            if (f.data("placeholder-password")) {
                if (f = f.hide().next().show().attr("id", f.removeAttr("id").data("placeholder-id")), !0 === a) return f[0].value = d;
                f.focus()
            } else e.value = "", f.removeClass("placeholder"), e == b.activeElement && e.select()
    }

    function f() {
        var a, b = this,
            f = c(b),
            h = this.id;
        if ("" == b.value) {
            if ("password" == b.type) {
                if (!f.data("placeholder-textinput")) {
                    try {
                        a = f.clone().attr({
                            type: "text"
                        })
                    } catch (b) {
                        a = c("<input>").attr(c.extend(d(this), {
                            type: "text"
                        }))
                    }
                    a.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": h
                    }).bind("focus.placeholder", e), f.data({
                        "placeholder-textinput": a,
                        "placeholder-id": h
                    }).before(a)
                }
                f = f.removeAttr("id").hide().prev().attr("id", h).show()
            }
            f.addClass("placeholder"), f[0].value = f.attr("placeholder")
        } else f.removeClass("placeholder")
    }
    var k, l, g = "placeholder" in b.createElement("input"),
        h = "placeholder" in b.createElement("textarea"),
        i = c.fn,
        j = c.valHooks;
    g && h ? (l = i.placeholder = function() {
        return this
    }, l.input = l.textarea = !0) : (l = i.placeholder = function() {
        var a = this;
        return a.filter((g ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": e,
            "blur.placeholder": f
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
    }, l.input = g, l.textarea = h, k = {
        get: function(a) {
            var b = c(a);
            return b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
        },
        set: function(a, d) {
            var g = c(a);
            return g.data("placeholder-enabled") ? ("" == d ? (a.value = d, a != b.activeElement && f.call(a)) : g.hasClass("placeholder") ? e.call(a, !0, d) || (a.value = d) : a.value = d, g) : a.value = d
        }
    }, g || (j.input = k), h || (j.textarea = k), c(function() {
        c(b).delegate("form", "submit.placeholder", function() {
            var a = c(".placeholder", this).each(e);
            setTimeout(function() {
                a.each(f)
            }, 10)
        })
    }), c(a).bind("beforeunload.placeholder", function() {
        c(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function(a, b, c) {
    "use strict";
    a.fn.foundationAlerts = function(b) {
        var c = a.extend({
            callback: a.noop
        }, b);
        a(document).on("click", ".alert-box a.close", function(b) {
            b.preventDefault(), a(this).closest(".alert-box").fadeOut(function() {
                a(this).remove(), c.callback()
            })
        })
    }
}(jQuery),
function(a, b, c) {
    "use strict";
    var d = {
            index: 0,
            initialized: !1
        },
        e = {
            init: function(c) {
                return this.each(function() {
                    d = a.extend(d, c), d.$w = a(b), d.$topbar = a("nav.top-bar"), d.$section = d.$topbar.find("section"), d.$titlebar = d.$topbar.children("ul:first");
                    var f = a("<div class='top-bar-js-breakpoint'/>").appendTo("body");
                    d.breakPoint = f.width(), f.remove(), d.initialized || (e.assemble(), d.initialized = !0), d.height || e.largestUL(), d.$topbar.parent().hasClass("fixed") && a("body").css("padding-top", d.$topbar.outerHeight()), a(".top-bar .toggle-topbar").off("click.fndtn").on("click.fndtn", function(a) {
                        a.preventDefault(), e.breakpoint() && (d.$topbar.toggleClass("expanded"), d.$topbar.css("min-height", "")), d.$topbar.hasClass("expanded") || (d.$section.css({
                            left: "0%"
                        }), d.$section.find(">.name").css({
                            left: "100%"
                        }), d.$section.find("li.moved").removeClass("moved"), d.index = 0)
                    }), a(".top-bar .has-dropdown>a").off("click.fndtn").on("click.fndtn", function(b) {
                        if ((Modernizr.touch || e.breakpoint()) && b.preventDefault(), e.breakpoint()) {
                            var c = a(this),
                                f = c.closest("li");
                            d.index += 1, f.addClass("moved"), d.$section.css({
                                left: -100 * d.index + "%"
                            }), d.$section.find(">.name").css({
                                left: 100 * d.index + "%"
                            }), c.siblings("ul").height(d.height + d.$titlebar.outerHeight(!0)), d.$topbar.css("min-height", d.height + 2 * d.$titlebar.outerHeight(!0))
                        }
                    }), a(b).on("resize.fndtn.topbar", function() {
                        e.breakpoint() || d.$topbar.css("min-height", "")
                    }), a(".top-bar .has-dropdown .back").off("click.fndtn").on("click.fndtn", function(b) {
                        b.preventDefault();
                        var c = a(this),
                            e = c.closest("li.moved");
                        e.parent();
                        d.index -= 1, d.$section.css({
                            left: -100 * d.index + "%"
                        }), d.$section.find(">.name").css({
                            left: 100 * d.index + "%"
                        }), 0 === d.index && d.$topbar.css("min-height", 0), setTimeout(function() {
                            e.removeClass("moved")
                        }, 300)
                    })
                })
            },
            breakpoint: function() {
                return d.$w.width() < d.breakPoint
            },
            assemble: function() {
                d.$section.detach(), d.$section.find(".has-dropdown>a").each(function() {
                    var b = a(this),
                        c = b.siblings(".dropdown"),
                        d = a('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
                    d.find("h5>a").html(b.html()), c.prepend(d)
                }), d.$section.appendTo(d.$topbar)
            },
            largestUL: function() {
                var b = d.$topbar.find("section ul ul"),
                    c = b.first(),
                    e = 0;
                b.each(function() {
                    a(this).children("li").length > c.children("li").length && (c = a(this))
                }), c.children("li").each(function() {
                    e += a(this).outerHeight(!0)
                }), d.height = e
            }
        };
    if (a.fn.foundationTopBar = function(b) {
            return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.foundationTopBar") : e.init.apply(this, arguments)
        }, a(".sticky").length > 0) {
        var f = a(".sticky").length ? a(".sticky").offset().top : 0,
            g = a(b);
        g.scroll(function() {
            g.scrollTop() >= f ? a(".sticky").addClass("fixed") : g.scrollTop() < f && a(".sticky").removeClass("fixed")
        })
    }
}(jQuery, this),
function(a, b, c) {
    "use strict";
    var d = {
            version: "2.0.3",
            tipLocation: "bottom",
            nubPosition: "auto",
            scrollSpeed: 300,
            timer: 0,
            startTimerOnClick: !0,
            startOffset: 0,
            nextButton: !0,
            tipAnimation: "fade",
            pauseAfter: [],
            tipAnimationFadeSpeed: 300,
            cookieMonster: !1,
            cookieName: "joyride",
            cookieDomain: !1,
            tipContainer: "body",
            postRideCallback: a.noop,
            postStepCallback: a.noop,
            template: {
                link: '<a href="#close" class="joyride-close-tip">X</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>'
            }
        },
        e = e || !1,
        f = {},
        g = {
            init: function(c) {
                return this.each(function() {
                    a.isEmptyObject(f) ? (f = a.extend(!0, d, c), f.document = b.document, f.$document = a(f.document), f.$window = a(b), f.$content_el = a(this), f.body_offset = a(f.tipContainer).position(), f.$tip_content = a("> li", f.$content_el), f.paused = !1, f.attempts = 0, f.tipLocationPatterns = {
                        top: ["bottom"],
                        bottom: [],
                        left: ["right", "top", "bottom"],
                        right: ["left", "top", "bottom"]
                    }, g.jquery_check(), a.isFunction(a.cookie) || (f.cookieMonster = !1), f.cookieMonster && a.cookie(f.cookieName) || (f.$tip_content.each(function(b) {
                        g.create({
                            $li: a(this),
                            index: b
                        })
                    }), !f.startTimerOnClick && f.timer > 0 ? (g.show("init"), g.startTimer()) : g.show("init")), f.$document.on("click.joyride", ".joyride-next-tip, .joyride-modal-bg", function(a) {
                        a.preventDefault(), f.$li.next().length < 1 ? g.end() : f.timer > 0 ? (clearTimeout(f.automate), g.hide(), g.show(), g.startTimer()) : (g.hide(), g.show())
                    }), f.$document.on("click.joyride", ".joyride-close-tip", function(a) {
                        a.preventDefault(), g.end()
                    }), f.$window.bind("resize.joyride", function(a) {
                        g.is_phone() ? g.pos_phone() : g.pos_default()
                    })) : g.restart()
                })
            },
            resume: function() {
                g.set_li(), g.show()
            },
            tip_template: function(b) {
                var c, d;
                return b.tip_class = b.tip_class || "", c = a(f.template.tip).addClass(b.tip_class), d = a.trim(a(b.li).html()) + g.button_text(b.button_text) + f.template.link + g.timer_instance(b.index), c.append(a(f.template.wrapper)), c.first().attr("data-index", b.index), a(".joyride-content-wrapper", c).append(d), c[0]
            },
            timer_instance: function(b) {
                return 0 === b && f.startTimerOnClick && f.timer > 0 || 0 === f.timer ? "" : g.outerHTML(a(f.template.timer)[0])
            },
            button_text: function(b) {
                return f.nextButton ? (b = a.trim(b) || "Next", b = g.outerHTML(a(f.template.button).append(b)[0])) : b = "", b
            },
            create: function(b) {
                var c = b.$li.attr("data-button") || b.$li.attr("data-text"),
                    d = b.$li.attr("class"),
                    e = a(g.tip_template({
                        tip_class: d,
                        index: b.index,
                        button_text: c,
                        li: b.$li
                    }));
                a(f.tipContainer).append(e)
            },
            show: function(b) {
                var e, j, d = {},
                    h = [],
                    i = 0,
                    k = null;
                if (f.$li === c || -1 === a.inArray(f.$li.index(), f.pauseAfter))
                    if (f.paused ? f.paused = !1 : g.set_li(b), f.attempts = 0, f.$li.length && f.$target.length > 0) {
                        for (h = (f.$li.data("options") || ":").split(";"), i = h.length, e = i - 1; e >= 0; e--) j = h[e].split(":"), 2 === j.length && (d[a.trim(j[0])] = a.trim(j[1]));
                        f.tipSettings = a.extend({}, f, d), f.tipSettings.tipLocationPattern = f.tipLocationPatterns[f.tipSettings.tipLocation], /body/i.test(f.$target.selector) || g.scroll_to(), g.is_phone() ? g.pos_phone(!0) : g.pos_default(!0), k = a(".joyride-timer-indicator", f.$next_tip), /pop/i.test(f.tipAnimation) ? (k.outerWidth(0), f.timer > 0 ? (f.$next_tip.show(), k.animate({
                            width: a(".joyride-timer-indicator-wrap", f.$next_tip).outerWidth()
                        }, f.timer)) : f.$next_tip.show()) : /fade/i.test(f.tipAnimation) && (k.outerWidth(0), f.timer > 0 ? (f.$next_tip.fadeIn(f.tipAnimationFadeSpeed), f.$next_tip.show(), k.animate({
                            width: a(".joyride-timer-indicator-wrap", f.$next_tip).outerWidth()
                        }, f.timer)) : f.$next_tip.fadeIn(f.tipAnimationFadeSpeed)), f.$current_tip = f.$next_tip
                    } else f.$li && f.$target.length < 1 ? g.show() : g.end();
                else f.paused = !0
            },
            is_phone: function() {
                return e ? e.mq("only screen and (max-width: 767px)") : f.$window.width() < 767
            },
            hide: function() {
                f.postStepCallback(f.$li.index(), f.$current_tip), a(".joyride-modal-bg").hide(), f.$current_tip.hide()
            },
            set_li: function(a) {
                a ? (f.$li = f.$tip_content.eq(f.startOffset), g.set_next_tip(), f.$current_tip = f.$next_tip) : (f.$li = f.$li.next(), g.set_next_tip()), g.set_target()
            },
            set_next_tip: function() {
                f.$next_tip = a(".joyride-tip-guide[data-index=" + f.$li.index() + "]")
            },
            set_target: function() {
                var b = f.$li.attr("data-class"),
                    c = f.$li.attr("data-id"),
                    d = function() {
                        return c ? a(f.document.getElementById(c)) : b ? a("." + b).first() : a("body")
                    };
                f.$target = d()
            },
            scroll_to: function() {
                var b, c;
                b = f.$window.height() / 2, c = Math.ceil(f.$target.offset().top - b + f.$next_tip.outerHeight()), a("html, body").stop().animate({
                    scrollTop: c
                }, f.scrollSpeed)
            },
            paused: function() {
                return -1 === a.inArray(f.$li.index() + 1, f.pauseAfter)
            },
            destroy: function() {
                f.$document.off(".joyride"), a(b).off(".joyride"), a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), a(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(f.automate), f = {}
            },
            restart: function() {
                g.hide(), f.$li = c, g.show("init")
            },
            pos_default: function(b) {
                var e = (Math.ceil(f.$window.height() / 2), f.$next_tip.offset(), a(".joyride-nub", f.$next_tip)),
                    h = Math.ceil(e.outerHeight() / 2),
                    i = b || !1;
                i && (f.$next_tip.css("visibility", "hidden"), f.$next_tip.show()), /body/i.test(f.$target.selector) ? f.$li.length && g.pos_modal(e) : (g.bottom() ? (f.$next_tip.css({
                    top: f.$target.offset().top + h + f.$target.outerHeight(),
                    left: f.$target.offset().left
                }), g.nub_position(e, f.tipSettings.nubPosition, "top")) : g.top() ? (f.$next_tip.css({
                    top: f.$target.offset().top - f.$next_tip.outerHeight() - h,
                    left: f.$target.offset().left
                }), g.nub_position(e, f.tipSettings.nubPosition, "bottom")) : g.right() ? (f.$next_tip.css({
                    top: f.$target.offset().top,
                    left: f.$target.outerWidth() + f.$target.offset().left
                }), g.nub_position(e, f.tipSettings.nubPosition, "left")) : g.left() && (f.$next_tip.css({
                    top: f.$target.offset().top,
                    left: f.$target.offset().left - f.$next_tip.outerWidth() - h
                }), g.nub_position(e, f.tipSettings.nubPosition, "right")), !g.visible(g.corners(f.$next_tip)) && f.attempts < f.tipSettings.tipLocationPattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), f.tipSettings.tipLocation = f.tipSettings.tipLocationPattern[f.attempts], f.attempts++, g.pos_default(!0))), i && (f.$next_tip.hide(), f.$next_tip.css("visibility", "visible"))
            },
            pos_phone: function(b) {
                var c = f.$next_tip.outerHeight(),
                    e = (f.$next_tip.offset(), f.$target.outerHeight()),
                    h = a(".joyride-nub", f.$next_tip),
                    i = Math.ceil(h.outerHeight() / 2),
                    j = b || !1;
                h.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), j && (f.$next_tip.css("visibility", "hidden"), f.$next_tip.show()), /body/i.test(f.$target.selector) ? f.$li.length && g.pos_modal(h) : g.top() ? (f.$next_tip.offset({
                    top: f.$target.offset().top - c - i
                }), h.addClass("bottom")) : (f.$next_tip.offset({
                    top: f.$target.offset().top + e + i
                }), h.addClass("top")), j && (f.$next_tip.hide(), f.$next_tip.css("visibility", "visible"))
            },
            pos_modal: function(b) {
                g.center(), b.hide(), a(".joyride-modal-bg").length < 1 && a("body").append('<div class="joyride-modal-bg">').show(), /pop/i.test(f.tipAnimation) ? a(".joyride-modal-bg").show() : a(".joyride-modal-bg").fadeIn(f.tipAnimationFadeSpeed)
            },
            center: function() {
                var a = f.$window;
                return f.$next_tip.css({
                    top: (a.height() - f.$next_tip.outerHeight()) / 2 + a.scrollTop(),
                    left: (a.width() - f.$next_tip.outerWidth()) / 2 + a.scrollLeft()
                }), !0
            },
            bottom: function() {
                return /bottom/i.test(f.tipSettings.tipLocation)
            },
            top: function() {
                return /top/i.test(f.tipSettings.tipLocation)
            },
            right: function() {
                return /right/i.test(f.tipSettings.tipLocation)
            },
            left: function() {
                return /left/i.test(f.tipSettings.tipLocation)
            },
            corners: function(a) {
                var b = f.$window,
                    c = b.width() + b.scrollLeft(),
                    d = b.width() + b.scrollTop();
                return [a.offset().top <= b.scrollTop(), c <= a.offset().left + a.outerWidth(), d <= a.offset().top + a.outerHeight(), b.scrollLeft() >= a.offset().left]
            },
            visible: function(a) {
                for (var b = a.length; b--;)
                    if (a[b]) return !1;
                return !0
            },
            nub_position: function(a, b, c) {
                "auto" === b ? a.addClass(c) : a.addClass(b)
            },
            startTimer: function() {
                f.$li.length ? f.automate = setTimeout(function() {
                    g.hide(), g.show(), g.startTimer()
                }, f.timer) : clearTimeout(f.automate)
            },
            end: function() {
                f.cookieMonster && a.cookie(f.cookieName, "ridden", {
                    expires: 365,
                    domain: f.cookieDomain
                }), f.timer > 0 && clearTimeout(f.automate), a(".joyride-modal-bg").hide(), f.$current_tip.hide(), f.postStepCallback(f.$li.index(), f.$current_tip), f.postRideCallback(f.$li.index(), f.$current_tip)
            },
            jquery_check: function() {
                return !!a.isFunction(a.fn.on) || (a.fn.on = function(a, b, c) {
                    return this.delegate(b, a, c)
                }, a.fn.off = function(a, b, c) {
                    return this.undelegate(b, a, c)
                }, !1)
            },
            outerHTML: function(a) {
                return a.outerHTML || (new XMLSerializer).serializeToString(a)
            },
            version: function() {
                return f.version
            }
        };
    a.fn.joyride = function(b) {
        return g[b] ? g[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.joyride") : g.init.apply(this, arguments)
    }
}(jQuery, this),
function(a, b, c, d) {
    "use strict";
    var e = {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="#"><p class="clearing-caption"></p><a href="#" class="clearing-main-left"></a><a href="#" class="clearing-main-right"></a></div>'
            },
            close_selectors: "a.clearing-close",
            initialized: !1,
            locked: !1
        },
        f = {
            init: function(b, d) {
                return this.find("ul[data-clearing]").each(function() {
                    var d = (a(c), a(this)),
                        g = g || {};
                    d.data("fndtn.clearing.settings") || (g.$parent = d.parent(), d.data("fndtn.clearing.settings", a.extend({}, e, g)), f.assemble(d.find("li")), e.initialized || (f.events(d), Modernizr.touch && f.swipe_events()))
                })
            },
            events: function(d) {
                var g = d.data("fndtn.clearing.settings");
                a(c).on("click.fndtn.clearing", "ul[data-clearing] li", function(b, c, d) {
                    var c = c || a(this),
                        d = d || c,
                        e = c.parent().data("fndtn.clearing.settings");
                    b.preventDefault(), e || c.parent().foundationClearing(), f.open(a(b.target), c, d), f.update_paddles(d)
                }).on("click.fndtn.clearing", ".clearing-main-right", function(a) {
                    f.nav(a, "next")
                }).on("click.fndtn.clearing", ".clearing-main-left", function(a) {
                    f.nav(a, "prev")
                }).on("click.fndtn.clearing", g.close_selectors, this.close).on("keydown.fndtn.clearing", this.keydown), a(b).on("resize.fndtn.clearing", this.resize), e.initialized = !0
            },
            swipe_events: function() {
                a(c).bind("swipeleft", "ul[data-clearing]", function(a) {
                    f.nav(a, "next")
                }).bind("swiperight", "ul[data-clearing]", function(a) {
                    f.nav(a, "prev")
                }).bind("movestart", "ul[data-clearing]", function(a) {
                    (a.distX > a.distY && a.distX < -a.distY || a.distX < a.distY && a.distX > -a.distY) && a.preventDefault()
                })
            },
            assemble: function(a) {
                var b = a.parent(),
                    c = b.data("fndtn.clearing.settings"),
                    d = b.detach(),
                    e = {
                        grid: '<div class="carousel">' + this.outerHTML(d[0]) + "</div>",
                        viewing: c.templates.viewing
                    },
                    f = '<div class="clearing-assembled"><div>' + e.viewing + e.grid + "</div></div>";
                return c.$parent.append(f)
            },
            open: function(a, b, c) {
                var d = c.closest(".clearing-assembled"),
                    e = d.find("div:first"),
                    g = e.find(".visible-img"),
                    h = g.find("img").not(a);
                f.locked() || (h.attr("src", this.load(a)), h.loaded(function() {
                    d.addClass("clearing-blackout"), e.addClass("clearing-container"), this.caption(g.find(".clearing-caption"), a), g.show(), this.fix_height(c), this.center(h), this.shift(b, c, function() {
                        c.siblings().removeClass("visible"), c.addClass("visible")
                    })
                }.bind(this)))
            },
            close: function(b) {
                b.preventDefault();
                var d, f, c = function(a) {
                    return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout")
                }(a(this));
                return this === b.target && c && (d = c.find("div:first"), f = d.find(".visible-img"), e.prev_index = 0, c.find("ul[data-clearing]").attr("style", ""), c.removeClass("clearing-blackout"), d.removeClass("clearing-container"), f.hide()), !1
            },
            keydown: function(b) {
                var c = a(".clearing-blackout").find("ul[data-clearing]");
                39 === b.which && f.go(c, "next"), 37 === b.which && f.go(c, "prev"), 27 === b.which && a("a.clearing-close").trigger("click")
            },
            nav: function(b, c) {
                var d = a(".clearing-blackout").find("ul[data-clearing]");
                b.preventDefault(), this.go(d, c)
            },
            resize: function() {
                var b = a(".clearing-blackout .visible-img").find("img");
                b.length > 0 && f.center(b)
            },
            fix_height: function(b) {
                var c = b.siblings();
                c.each(function() {
                    var b = a(this),
                        c = b.find("img");
                    b.height() > c.outerHeight() && b.addClass("fix-height")
                }).closest("ul").width(100 * c.length + "%")
            },
            update_paddles: function(a) {
                var b = a.closest(".carousel").siblings(".visible-img");
                a.next().length > 0 ? b.find(".clearing-main-right").removeClass("disabled") : b.find(".clearing-main-right").addClass("disabled"), a.prev().length > 0 ? b.find(".clearing-main-left").removeClass("disabled") : b.find(".clearing-main-left").addClass("disabled")
            },
            load: function(a) {
                var b = a.parent().attr("href");
                return this.preload(a), b || a.attr("src")
            },
            preload: function(a) {
                this.img(a.closest("li").next()), this.img(a.closest("li").prev())
            },
            img: function(a) {
                if (a.length > 0) {
                    var b = new Image,
                        c = a.find("a");
                    c.length > 0 ? b.src = c.attr("href") : b.src = a.find("img").attr("src")
                }
            },
            caption: function(a, b) {
                var c = b.data("caption");
                c ? a.text(c).show() : a.text("").hide()
            },
            go: function(a, b) {
                var c = a.find(".visible"),
                    d = c[b]();
                d.length > 0 && d.find("img").trigger("click", [c, d])
            },
            shift: function(a, b, c) {
                var j, d = b.parent(),
                    f = e.prev_index,
                    g = this.direction(d, a, b),
                    h = parseInt(d.css("left"), 10),
                    i = b.outerWidth();
                b.index() === f || /skip/.test(g) ? /skip/.test(g) && (j = b.index() - e.up_count, this.lock(), j > 0 ? d.animate({
                    left: -j * i
                }, 300, this.unlock) : d.animate({
                    left: 0
                }, 300, this.unlock)) : /left/.test(g) ? (this.lock(), d.animate({
                    left: h + i
                }, 300, this.unlock)) : /right/.test(g) && (this.lock(), d.animate({
                    left: h - i
                }, 300, this.unlock)), c()
            },
            lock: function() {
                e.locked = !0
            },
            unlock: function() {
                e.locked = !1
            },
            locked: function() {
                return e.locked
            },
            direction: function(b, c, d) {
                var j, f = b.find("li"),
                    g = f.outerWidth() + f.outerWidth() / 4,
                    h = Math.floor(a(".clearing-container").outerWidth() / g) - 1,
                    i = f.index(d);
                return e.up_count = h, j = this.adjacent(e.prev_index, i) ? i > h && i > e.prev_index ? "right" : i > h - 1 && i <= e.prev_index && "left" : "skip", e.prev_index = i, j
            },
            adjacent: function(a, b) {
                for (var c = b + 1; c >= b - 1; c--)
                    if (c === a) return !0;
                return !1
            },
            center: function(a) {
                a.css({
                    marginLeft: -a.outerWidth() / 2,
                    marginTop: -a.outerHeight() / 2
                })
            },
            outerHTML: function(a) {
                return a.outerHTML || (new XMLSerializer).serializeToString(a)
            }
        };
    a.fn.foundationClearing = function(b) {
            return f[b] ? f[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.foundationClearing") : f.init.apply(this, arguments)
        },
        function(a) {
            a.fn.loaded = function(b, c) {
                function d() {
                    !(h -= 1) && b()
                }

                function e() {
                    if (this.one("load", d), a.browser.msie) {
                        var b = this.attr("src"),
                            c = b.match(/\?/) ? "&" : "?";
                        c += f.cachePrefix + "=" + (new Date).getTime(), this.attr("src", b + c)
                    }
                }
                var f = a.extend({}, a.fn.loaded.defaults, c),
                    g = this.find("img").add(this.filter("img")),
                    h = g.length;
                return g.each(function() {
                    var b = a(this);
                    if (!b.attr("src")) return void d();
                    this.complete || 4 === this.readyState ? d() : e.call(b)
                })
            }, a.fn.loaded.defaults = {
                cachePrefix: "random"
            }
        }(jQuery)
}(jQuery, this, this.document),
function(a, b, c) {
    "use strict";
    a.fn.foundationMagellan = function(c) {
        var d = a(b),
            e = a(document),
            f = a("[data-magellan-expedition=fixed]"),
            g = {
                threshold: f.length ? f.outerHeight(!0) : 0,
                activeClass: "active"
            },
            c = a.extend({}, g, c);
        e.on("magellan.arrival", "[data-magellan-arrival]", function(b) {
            var d = a(this),
                e = d.closest("[data-magellan-expedition]"),
                f = e.attr("data-magellan-active-class") || c.activeClass;
            d.closest("[data-magellan-expedition]").find("[data-magellan-arrival]").not(this).removeClass(f), d.addClass(f)
        });
        var h = a("[data-magellan-expedition]");
        h.find("[data-magellan-arrival]:first").addClass(h.attr("data-magellan-active-class") || c.activeClass), f.on("magellan.update-position", function() {
            var b = a(this);
            b.data("magellan-fixed-position", ""), b.data("magellan-top-offset", "")
        }).trigger("magellan.update-position"), d.on("resize.magellan", function() {
            f.trigger("magellan.update-position")
        }), d.on("scroll.magellan", function() {
            var b = d.scrollTop();
            f.each(function() {
                var d = a(this);
                "" === d.data("magellan-top-offset") && d.data("magellan-top-offset", d.offset().top);
                var e = b + c.threshold > d.data("magellan-top-offset");
                d.data("magellan-fixed-position") != e && (d.data("magellan-fixed-position", e), e ? d.css({
                    position: "fixed",
                    top: 0
                }) : d.css({
                    position: "",
                    top: ""
                }))
            })
        });
        var i = a("[data-magellan-destination]:last");
        i.length > 0 && d.on("scroll.magellan", function(b) {
            var f = d.scrollTop(),
                g = f + d.outerHeight(!0),
                h = Math.ceil(i.offset().top);
            a("[data-magellan-destination]").each(function() {
                var b = a(this),
                    d = b.attr("data-magellan-destination");
                b.offset().top - f <= c.threshold && a("[data-magellan-arrival=" + d + "]").trigger("magellan.arrival"), g >= e.outerHeight(!0) && h > f && h < g && a("[data-magellan-arrival]:last").trigger("magellan.arrival")
            })
        })
    }
}(jQuery, this),
function(a, b) {
    var c = function(a, b, c) {
        var d;
        return function() {
            function h() {
                c || a.apply(f, g), d = null
            }
            var f = this,
                g = arguments;
            d ? clearTimeout(d) : c && a.apply(f, g), d = setTimeout(h, b || 100)
        }
    };
    jQuery.fn[b] = function(a) {
        return a ? this.bind("resize", c(a)) : this.trigger(b)
    }
}(jQuery, "smartresize"),
function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function b(b, d) {
            var e, f = this;
            f.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(b),
                appendDots: a(b),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, f.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.focussed = !1, f.interrupted = !1, f.hidden = "hidden", f.paused = !0, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, d, e), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, void 0 !== document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0)
        }
        var c = 0;
        return b
    }(), b.prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : !0 === d ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), !0 === e.options.rtl && !1 === e.options.vertical && (b = -b), !1 === e.transformsEnabled ? !1 === e.options.vertical ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : !1 === e.cssTransitions ? (!0 === e.options.rtl && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), !1 === e.options.vertical ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), !1 === e.options.vertical ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        !1 === b.options.fade ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (!1 === a.options.infinite && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 == 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        !0 === b.options.arrows && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), !0 !== b.options.infinite && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var b, c, d = this;
        if (!0 === d.options.dots && d.slideCount > d.options.slidesToShow) {
            for (d.$slider.addClass("slick-dotted"), c = a("<ul />").addClass(d.options.dotsClass), b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
            d.$dots = c.appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (!0 === b.options.centerMode || !0 === b.options.swipeToSlide) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), !0 === b.options.draggable && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var a, b, c, d, e, f, g, h = this;
        if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
            for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                var i = document.createElement("div");
                for (b = 0; b < h.options.rows; b++) {
                    var j = document.createElement("div");
                    for (c = 0; c < h.options.slidesPerRow; c++) {
                        var k = a * g + (b * h.options.slidesPerRow + c);
                        f.get(k) && j.appendChild(f.get(k))
                    }
                    i.appendChild(j)
                }
                d.appendChild(i)
            }
            h.$slider.empty().append(d), h.$slider.children().children().children().css({
                width: 100 / h.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var d, e, f, g = this,
            h = !1,
            i = g.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
            e = null;
            for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (!1 === g.originalSettings.mobileFirst ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
            null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), !0 === b && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), !0 === b && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, !0 === b && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || !1 === h || g.$slider.trigger("breakpoint", [g, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var d, e, f, g = this,
            h = a(b.currentTarget);
        switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll != 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
            case "previous":
                e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                break;
            case "next":
                e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var b, c;
        if (b = this.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
        else
            for (var e in b) {
                if (a < b[e]) {
                    a = c;
                    break
                }
                c = b[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), !0 === b.options.arrows && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), !0 === b.options.accessibility && b.$list.off("keydown.slick", b.keyHandler), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var a, b = this;
        b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.empty().append(a))
    }, b.prototype.clickHandler = function(a) {
        !1 === this.shouldClick && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        !1 === c.cssTransitions ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        !1 === b.cssTransitions ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (!0 === a.options.infinite)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (!0 === a.options.centerMode) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var b, c, d, e = this,
            f = 0;
        return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), !0 === e.options.infinite ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll != 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), !0 === e.options.centerMode && !0 === e.options.infinite ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : !0 === e.options.centerMode && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = !1 === e.options.vertical ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, !0 === e.options.variableWidth && (d = e.slideCount <= e.options.slidesToShow || !1 === e.options.infinite ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = !0 === e.options.rtl ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, !0 === e.options.centerMode && (d = e.slideCount <= e.options.slidesToShow || !1 === e.options.infinite ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = !0 === e.options.rtl ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        return this.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var a, b = this,
            c = 0,
            d = 0,
            e = [];
        for (!1 === b.options.infinite ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
        return e
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e = this;
        return d = !0 === e.options.centerMode ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, !0 === e.options.swipeToSlide ? (e.$slideTrack.find(".slick-slide").each(function(b, f) {
            return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
        }), Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), !0 === c.options.accessibility && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        !0 === b.options.dots && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), !0 === b.options.dots && !0 === b.options.pauseOnDotsHover && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), !0 === b.options.accessibility && b.$list.on("keydown.slick", b.keyHandler), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && !0 === b.options.accessibility ? b.changeSlide({
            data: {
                message: !0 === b.options.rtl ? "next" : "previous"
            }
        }) : 39 === a.keyCode && !0 === b.options.accessibility && b.changeSlide({
            data: {
                message: !0 === b.options.rtl ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function b(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this),
                    c = a(this).attr("data-lazy"),
                    d = document.createElement("img");
                d.onload = function() {
                    b.animate({
                        opacity: 0
                    }, 100, function() {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function() {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        }), g.$slider.trigger("lazyLoaded", [g, b, c])
                    })
                }, d.onerror = function() {
                    b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), g.$slider.trigger("lazyLoadError", [g, b, c])
                }, d.src = c
            })
        }
        var c, d, e, f, g = this;
        !0 === g.options.centerMode ? !0 === g.options.infinite ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = g.options.slidesToShow / 2 + 1 + 2 + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = Math.ceil(e + g.options.slidesToShow), !0 === g.options.fade && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), !0 === b.options.accessibility && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var c, d, e, f = this,
            g = a("img[data-lazy]", f.$slider);
        g.length ? (c = g.first(), d = c.attr("data-lazy"), e = document.createElement("img"), e.onload = function() {
            c.attr("src", d).removeAttr("data-lazy").removeClass("slick-loading"), !0 === f.options.adaptiveHeight && f.setPosition(), f.$slider.trigger("lazyLoaded", [f, c, d]), f.progressiveLazyLoad()
        }, e.onerror = function() {
            3 > b ? setTimeout(function() {
                f.progressiveLazyLoad(b + 1)
            }, 500) : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), f.$slider.trigger("lazyLoadError", [f, c, d]), f.progressiveLazyLoad())
        }, e.src = d) : f.$slider.trigger("allImagesLoaded", [f])
    }, b.prototype.refresh = function(b) {
        var c, d, e = this;
        d = e.slideCount - e.options.slidesToShow, !e.options.infinite && e.currentSlide > d && (e.currentSlide = d), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), c = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, {
            currentSlide: c
        }), e.init(), b || e.changeSlide({
            data: {
                message: "index",
                index: c
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var b, c, d, e = this,
            f = e.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            e.respondTo = e.options.respondTo || "window";
            for (b in f)
                if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
                    for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                    e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
                }
            e.breakpoints.sort(function(a, b) {
                return e.options.mobileFirst ? a - b : b - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = !0 === b ? 0 : d.slideCount - 1) : a = !0 === b ? --a : a, !(d.slideCount < 1 || 0 > a || a > d.slideCount - 1) && (d.unload(), !0 === c ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var b, c, d = this,
            e = {};
        !0 === d.options.rtl && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, !1 === d.transformsEnabled ? d.$slideTrack.css(e) : (e = {}, !1 === d.cssTransitions ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        !1 === a.options.vertical ? !0 === a.options.centerMode && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), !0 === a.options.centerMode && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), !1 === a.options.vertical && !1 === a.options.variableWidth ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : !0 === a.options.variableWidth ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        !1 === a.options.variableWidth && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var b, c = this;
        c.$slides.each(function(d, e) {
            b = c.slideWidth * d * -1, !0 === c.options.rtl ? a(e).css({
                position: "relative",
                right: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            })
        }), c.$slides.eq(c.currentSlide).css({
            zIndex: c.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var b, c, d, e, f, g = this,
            h = !1;
        if ("object" === a.type(arguments[0]) ? (d = arguments[0], h = arguments[1], f = "multiple") : "string" === a.type(arguments[0]) && (d = arguments[0], e = arguments[1], h = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? f = "responsive" : void 0 !== arguments[1] && (f = "single")), "single" === f) g.options[d] = e;
        else if ("multiple" === f) a.each(d, function(a, b) {
            g.options[a] = b
        });
        else if ("responsive" === f)
            for (c in e)
                if ("array" !== a.type(g.options.responsive)) g.options.responsive = [e[c]];
                else {
                    for (b = g.options.responsive.length - 1; b >= 0;) g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1), b--;
                    g.options.responsive.push(e[c])
                }
        h && (g.unload(), g.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), !1 === a.options.fade ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = !0 === a.options.vertical ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && !0 === a.options.useCSS && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && !1 !== a.animType && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && !1 !== a.animType
    }, b.prototype.setSlideClasses = function(a) {
        var b, c, d, e, f = this;
        c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), !0 === f.options.centerMode ? (b = Math.floor(f.options.slidesToShow / 2), !0 === f.options.infinite && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = !0 === f.options.infinite ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var b, c, d, e = this;
        if (!0 === e.options.fade && (e.options.centerMode = !1), !0 === e.options.infinite && !1 === e.options.fade && (c = null, e.slideCount > e.options.slidesToShow)) {
            for (d = !0 === e.options.centerMode ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
            for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
            e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, h, i = null,
            j = this;
        return b = b || !1, !0 === j.animating && !0 === j.options.waitForAnimate || !0 === j.options.fade && j.currentSlide === a || j.slideCount <= j.options.slidesToShow ? void 0 : (!1 === b && j.asNavFor(a), d = a, i = j.getLeft(d), g = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft, !1 === j.options.infinite && !1 === j.options.centerMode && (0 > a || a > j.getDotCount() * j.options.slidesToScroll) ? void(!1 === j.options.fade && (d = j.currentSlide, !0 !== c ? j.animateSlide(g, function() {
            j.postSlide(d)
        }) : j.postSlide(d))) : !1 === j.options.infinite && !0 === j.options.centerMode && (0 > a || a > j.slideCount - j.options.slidesToScroll) ? void(!1 === j.options.fade && (d = j.currentSlide, !0 !== c ? j.animateSlide(g, function() {
            j.postSlide(d)
        }) : j.postSlide(d))) : (j.options.autoplay && clearInterval(j.autoPlayTimer), e = 0 > d ? j.slideCount % j.options.slidesToScroll != 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? j.slideCount % j.options.slidesToScroll != 0 ? 0 : d - j.slideCount : d, j.animating = !0, j.$slider.trigger("beforeChange", [j, j.currentSlide, e]), f = j.currentSlide, j.currentSlide = e, j.setSlideClasses(j.currentSlide), j.options.asNavFor && (h = j.getNavTarget(), h = h.slick("getSlick"), h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)), j.updateDots(), j.updateArrows(), !0 === j.options.fade ? (!0 !== c ? (j.fadeSlideOut(f), j.fadeSlide(e, function() {
            j.postSlide(e)
        })) : j.postSlide(e), void j.animateHeight()) : void(!0 !== c ? j.animateSlide(i, function() {
            j.postSlide(e)
        }) : j.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? !1 === e.options.rtl ? "left" : "right" : 360 >= d && d >= 315 ? !1 === e.options.rtl ? "left" : "right" : d >= 135 && 225 >= d ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var b, c, d = this;
        if (d.dragging = !1, d.interrupted = !1, d.shouldClick = !(d.touchObject.swipeLength > 10), void 0 === d.touchObject.curX) return !1;
        if (!0 === d.touchObject.edgeHit && d.$slider.trigger("edge", [d, d.swipeDirection()]), d.touchObject.swipeLength >= d.touchObject.minSwipe) {
            switch (c = d.swipeDirection()) {
                case "left":
                case "down":
                    b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount(), d.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount(), d.currentDirection = 1
            }
            "vertical" != c && (d.slideHandler(b), d.touchObject = {}, d.$slider.trigger("swipe", [d, c]))
        } else d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide), d.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(!1 === b.options.swipe || "ontouchend" in document && !1 === b.options.swipe || !1 === b.options.draggable && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, !0 === b.options.verticalSwiping && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var b, c, d, e, f, g = this;
        return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!g.dragging || f && 1 !== f.length) && (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), !0 === g.options.verticalSwiping && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (!1 === g.options.rtl ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), !0 === g.options.verticalSwiping && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, !1 === g.options.infinite && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), !1 === g.options.vertical ? g.swipeLeft = b + d * e : g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e, !0 === g.options.verticalSwiping && (g.swipeLeft = b + d * e), !0 !== g.options.fade && !1 !== g.options.touchMove && (!0 === g.animating ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft))) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var b, c = this;
        return c.interrupted = !0, 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b = this;
        Math.floor(b.options.slidesToShow / 2), !0 === b.options.arrows && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && !1 === b.options.centerMode ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && !0 === b.options.centerMode && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var a, c, d = this,
            e = arguments[0],
            f = Array.prototype.slice.call(arguments, 1),
            g = d.length;
        for (a = 0; g > a; a++)
            if ("object" == typeof e || void 0 === e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f), void 0 !== c) return c;
        return d
    }
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(c) {
        b(a, c)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("jquery")) : a.jQueryBridget = b(a, a.jQuery)
}(window, function(a, b) {
    "use strict";

    function c(c, f, h) {
        function i(a, b, d) {
            var e, f = "$()." + c + '("' + b + '")';
            return a.each(function(a, i) {
                var j = h.data(i, c);
                if (!j) return void g(c + " not initialized. Cannot call methods, i.e. " + f);
                var k = j[b];
                if (!k || "_" == b.charAt(0)) return void g(f + " is not a valid method");
                var l = k.apply(j, d);
                e = void 0 === e ? l : e
            }), void 0 !== e ? e : a
        }

        function j(a, b) {
            a.each(function(a, d) {
                var e = h.data(d, c);
                e ? (e.option(b), e._init()) : (e = new f(d, b), h.data(d, c, e))
            })
        }(h = h || b || a.jQuery) && (f.prototype.option || (f.prototype.option = function(a) {
            h.isPlainObject(a) && (this.options = h.extend(!0, this.options, a))
        }), h.fn[c] = function(a) {
            if ("string" == typeof a) {
                return i(this, a, e.call(arguments, 1))
            }
            return j(this, a), this
        }, d(h))
    }

    function d(a) {
        !a || a && a.bridget || (a.bridget = c)
    }
    var e = Array.prototype.slice,
        f = a.console,
        g = void 0 === f ? function() {} : function(a) {
            f.error(a)
        };
    return d(b || a.jQuery), c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
}("undefined" != typeof window ? window : this, function() {
    function a() {}
    var b = a.prototype;
    return b.on = function(a, b) {
        if (a && b) {
            var c = this._events = this._events || {},
                d = c[a] = c[a] || [];
            return -1 == d.indexOf(b) && d.push(b), this
        }
    }, b.once = function(a, b) {
        if (a && b) {
            this.on(a, b);
            var c = this._onceEvents = this._onceEvents || {};
            return (c[a] = c[a] || {})[b] = !0, this
        }
    }, b.off = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = c.indexOf(b);
            return -1 != d && c.splice(d, 1), this
        }
    }, b.emitEvent = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = 0,
                e = c[d];
            b = b || [];
            for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                var g = f && f[e];
                g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
            }
            return this
        }
    }, a
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return b()
    }) : "object" == typeof module && module.exports ? module.exports = b() : a.getSize = b()
}(window, function() {
    "use strict";

    function a(a) {
        var b = parseFloat(a);
        return -1 == a.indexOf("%") && !isNaN(b) && b
    }

    function b() {}

    function c() {
        for (var a = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, b = 0; b < j; b++) {
            a[i[b]] = 0
        }
        return a
    }

    function d(a) {
        var b = getComputedStyle(a);
        return b || h("Style returned " + b + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), b
    }

    function e() {
        if (!k) {
            k = !0;
            var b = document.createElement("div");
            b.style.width = "200px", b.style.padding = "1px 2px 3px 4px", b.style.borderStyle = "solid", b.style.borderWidth = "1px 2px 3px 4px", b.style.boxSizing = "border-box";
            var c = document.body || document.documentElement;
            c.appendChild(b);
            var e = d(b);
            f.isBoxSizeOuter = g = 200 == a(e.width), c.removeChild(b)
        }
    }

    function f(b) {
        if (e(), "string" == typeof b && (b = document.querySelector(b)), b && "object" == typeof b && b.nodeType) {
            var f = d(b);
            if ("none" == f.display) return c();
            var h = {};
            h.width = b.offsetWidth, h.height = b.offsetHeight;
            for (var k = h.isBorderBox = "border-box" == f.boxSizing, l = 0; l < j; l++) {
                var m = i[l],
                    n = f[m],
                    o = parseFloat(n);
                h[m] = isNaN(o) ? 0 : o
            }
            var p = h.paddingLeft + h.paddingRight,
                q = h.paddingTop + h.paddingBottom,
                r = h.marginLeft + h.marginRight,
                s = h.marginTop + h.marginBottom,
                t = h.borderLeftWidth + h.borderRightWidth,
                u = h.borderTopWidth + h.borderBottomWidth,
                v = k && g,
                w = a(f.width);
            !1 !== w && (h.width = w + (v ? 0 : p + t));
            var x = a(f.height);
            return !1 !== x && (h.height = x + (v ? 0 : q + u)), h.innerWidth = h.width - (p + t), h.innerHeight = h.height - (q + u), h.outerWidth = h.width + r, h.outerHeight = h.height + s, h
        }
    }
    var g, h = "undefined" == typeof console ? b : function(a) {
            console.error(a)
        },
        i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        j = i.length,
        k = !1;
    return f
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", b) : "object" == typeof module && module.exports ? module.exports = b() : a.matchesSelector = b()
}(window, function() {
    "use strict";
    var a = function() {
        var a = Element.prototype;
        if (a.matches) return "matches";
        if (a.matchesSelector) return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0; c < b.length; c++) {
            var d = b[c],
                e = d + "MatchesSelector";
            if (a[e]) return e
        }
    }();
    return function(b, c) {
        return b[a](c)
    }
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(c) {
        return b(a, c)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.matchesSelector)
}(window, function(a, b) {
    var c = {};
    c.extend = function(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }, c.modulo = function(a, b) {
        return (a % b + b) % b
    }, c.makeArray = function(a) {
        var b = [];
        if (Array.isArray(a)) b = a;
        else if (a && "number" == typeof a.length)
            for (var c = 0; c < a.length; c++) b.push(a[c]);
        else b.push(a);
        return b
    }, c.removeFrom = function(a, b) {
        var c = a.indexOf(b); - 1 != c && a.splice(c, 1)
    }, c.getParent = function(a, c) {
        for (; a != document.body;)
            if (a = a.parentNode, b(a, c)) return a
    }, c.getQueryElement = function(a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }, c.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, c.filterFindElements = function(a, d) {
        a = c.makeArray(a);
        var e = [];
        return a.forEach(function(a) {
            if (a instanceof HTMLElement) {
                if (!d) return void e.push(a);
                b(a, d) && e.push(a);
                for (var c = a.querySelectorAll(d), f = 0; f < c.length; f++) e.push(c[f])
            }
        }), e
    }, c.debounceMethod = function(a, b, c) {
        var d = a.prototype[b],
            e = b + "Timeout";
        a.prototype[b] = function() {
            var a = this[e];
            a && clearTimeout(a);
            var b = arguments,
                f = this;
            this[e] = setTimeout(function() {
                d.apply(f, b), delete f[e]
            }, c || 100)
        }
    }, c.docReady = function(a) {
        var b = document.readyState;
        "complete" == b || "interactive" == b ? a() : document.addEventListener("DOMContentLoaded", a)
    }, c.toDashed = function(a) {
        return a.replace(/(.)([A-Z])/g, function(a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    };
    var d = a.console;
    return c.htmlInit = function(b, e) {
        c.docReady(function() {
            var f = c.toDashed(e),
                g = "data-" + f,
                h = document.querySelectorAll("[" + g + "]"),
                i = document.querySelectorAll(".js-" + f),
                j = c.makeArray(h).concat(c.makeArray(i)),
                k = g + "-options",
                l = a.jQuery;
            j.forEach(function(a) {
                var c, f = a.getAttribute(g) || a.getAttribute(k);
                try {
                    c = f && JSON.parse(f)
                } catch (b) {
                    return void(d && d.error("Error parsing " + g + " on " + a.className + ": " + b))
                }
                var h = new b(a, c);
                l && l.data(a, e, h)
            })
        })
    }, c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], b) : "object" == typeof module && module.exports ? module.exports = b(require("ev-emitter"), require("get-size")) : (a.Outlayer = {}, a.Outlayer.Item = b(a.EvEmitter, a.getSize))
}(window, function(a, b) {
    "use strict";

    function c(a) {
        for (var b in a) return !1;
        return null, !0
    }

    function d(a, b) {
        a && (this.element = a, this.layout = b, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function e(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }
    var f = document.documentElement.style,
        g = "string" == typeof f.transition ? "transition" : "WebkitTransition",
        h = "string" == typeof f.transform ? "transform" : "WebkitTransform",
        i = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[g],
        j = {
            transform: h,
            transition: g,
            transitionDuration: g + "Duration",
            transitionProperty: g + "Property",
            transitionDelay: g + "Delay"
        },
        k = d.prototype = Object.create(a.prototype);
    k.constructor = d, k._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, k.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, k.getSize = function() {
        this.size = b(this.element)
    }, k.css = function(a) {
        var b = this.element.style;
        for (var c in a) {
            b[j[c] || c] = a[c]
        }
    }, k.getPosition = function() {
        var a = getComputedStyle(this.element),
            b = this.layout._getOption("originLeft"),
            c = this.layout._getOption("originTop"),
            d = a[b ? "left" : "right"],
            e = a[c ? "top" : "bottom"],
            f = this.layout.size,
            g = -1 != d.indexOf("%") ? parseFloat(d) / 100 * f.width : parseInt(d, 10),
            h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * f.height : parseInt(e, 10);
        g = isNaN(g) ? 0 : g, h = isNaN(h) ? 0 : h, g -= b ? f.paddingLeft : f.paddingRight, h -= c ? f.paddingTop : f.paddingBottom, this.position.x = g, this.position.y = h
    }, k.layoutPosition = function() {
        var a = this.layout.size,
            b = {},
            c = this.layout._getOption("originLeft"),
            d = this.layout._getOption("originTop"),
            e = c ? "paddingLeft" : "paddingRight",
            f = c ? "left" : "right",
            g = c ? "right" : "left",
            h = this.position.x + a[e];
        b[f] = this.getXValue(h), b[g] = "";
        var i = d ? "paddingTop" : "paddingBottom",
            j = d ? "top" : "bottom",
            k = d ? "bottom" : "top",
            l = this.position.y + a[i];
        b[j] = this.getYValue(l), b[k] = "", this.css(b), this.emitEvent("layout", [this])
    }, k.getXValue = function(a) {
        var b = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !b ? a / this.layout.size.width * 100 + "%" : a + "px"
    }, k.getYValue = function(a) {
        var b = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && b ? a / this.layout.size.height * 100 + "%" : a + "px"
    }, k._transitionTo = function(a, b) {
        this.getPosition();
        var c = this.position.x,
            d = this.position.y,
            e = parseInt(a, 10),
            f = parseInt(b, 10),
            g = e === this.position.x && f === this.position.y;
        if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
        var h = a - c,
            i = b - d,
            j = {};
        j.transform = this.getTranslate(h, i), this.transition({
            to: j,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, k.getTranslate = function(a, b) {
        var c = this.layout._getOption("originLeft"),
            d = this.layout._getOption("originTop");
        return a = c ? a : -a, b = d ? b : -b, "translate3d(" + a + "px, " + b + "px, 0)"
    }, k.goTo = function(a, b) {
        this.setPosition(a, b), this.layoutPosition()
    }, k.moveTo = k._transitionTo, k.setPosition = function(a, b) {
        this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
    }, k._nonTransition = function(a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
    }, k.transition = function(a) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
            this.css(a.from);
            this.element.offsetHeight;
            null
        }
        this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
    };
    var l = "opacity," + e(h);
    k.enableTransition = function() {
        if (!this.isTransitioning) {
            var a = this.layout.options.transitionDuration;
            a = "number" == typeof a ? a + "ms" : a, this.css({
                transitionProperty: l,
                transitionDuration: a,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(i, this, !1)
        }
    }, k.onwebkitTransitionEnd = function(a) {
        this.ontransitionend(a)
    }, k.onotransitionend = function(a) {
        this.ontransitionend(a)
    };
    var m = {
        "-webkit-transform": "transform"
    };
    k.ontransitionend = function(a) {
        if (a.target === this.element) {
            var b = this._transn,
                d = m[a.propertyName] || a.propertyName;
            if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                b.onEnd[d].call(this), delete b.onEnd[d]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, k.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(i, this, !1), this.isTransitioning = !1
    }, k._removeStyles = function(a) {
        var b = {};
        for (var c in a) b[c] = "";
        this.css(b)
    };
    var n = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return k.removeTransitionStyles = function() {
        this.css(n)
    }, k.stagger = function(a) {
        a = isNaN(a) ? 0 : a, this.staggerDelay = a + "ms"
    }, k.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, k.remove = function() {
        return g && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, k.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var a = this.layout.options,
            b = {};
        b[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, k.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, k.getHideRevealTransitionEndProperty = function(a) {
        var b = this.layout.options[a];
        if (b.opacity) return "opacity";
        for (var c in b) return c
    }, k.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var a = this.layout.options,
            b = {};
        b[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, k.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, k.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, d
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f) {
        return b(a, c, d, e, f)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.EvEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function(a, b, c, d, e) {
    "use strict";

    function f(a, b) {
        var c = d.getQueryElement(a);
        if (!c) return void(i && i.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
        this.element = c, j && (this.$element = j(this.element)), this.options = d.extend({}, this.constructor.defaults), this.option(b);
        var e = ++l;
        this.element.outlayerGUID = e, m[e] = this, this._create(), this._getOption("initLayout") && this.layout()
    }

    function g(a) {
        function b() {
            a.apply(this, arguments)
        }
        return b.prototype = Object.create(a.prototype), b.prototype.constructor = b, b
    }

    function h(a) {
        if ("number" == typeof a) return a;
        var b = a.match(/(^\d*\.?\d*)(\w*)/),
            c = b && b[1],
            d = b && b[2];
        return c.length ? (c = parseFloat(c)) * (o[d] || 1) : 0
    }
    var i = a.console,
        j = a.jQuery,
        k = function() {},
        l = 0,
        m = {};
    f.namespace = "outlayer", f.Item = e, f.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var n = f.prototype;
    d.extend(n, b.prototype), n.option = function(a) {
        d.extend(this.options, a)
    }, n._getOption = function(a) {
        var b = this.constructor.compatOptions[a];
        return b && void 0 !== this.options[b] ? this.options[b] : this.options[a]
    }, f.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, n._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), d.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, n.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, n._itemize = function(a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0; e < b.length; e++) {
            var f = b[e],
                g = new c(f, this);
            d.push(g)
        }
        return d
    }, n._filterFindItemElements = function(a) {
        return d.filterFindElements(a, this.options.itemSelector)
    }, n.getItemElements = function() {
        return this.items.map(function(a) {
            return a.element
        })
    }, n.layout = function() {
        this._resetLayout(), this._manageStamps();
        var a = this._getOption("layoutInstant"),
            b = void 0 !== a ? a : !this._isLayoutInited;
        this.layoutItems(this.items, b), this._isLayoutInited = !0
    }, n._init = n.layout, n._resetLayout = function() {
        this.getSize()
    }, n.getSize = function() {
        this.size = c(this.element)
    }, n._getMeasurement = function(a, b) {
        var d, e = this.options[a];
        e ? ("string" == typeof e ? d = this.element.querySelector(e) : e instanceof HTMLElement && (d = e), this[a] = d ? c(d)[b] : e) : this[a] = 0
    }, n.layoutItems = function(a, b) {
        a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
    }, n._getItemsForLayout = function(a) {
        return a.filter(function(a) {
            return !a.isIgnored
        })
    }, n._layoutItems = function(a, b) {
        if (this._emitCompleteOnItems("layout", a), a && a.length) {
            var c = [];
            a.forEach(function(a) {
                var d = this._getItemLayoutPosition(a);
                d.item = a, d.isInstant = b || a.isLayoutInstant, c.push(d)
            }, this), this._processLayoutQueue(c)
        }
    }, n._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, n._processLayoutQueue = function(a) {
        this.updateStagger(), a.forEach(function(a, b) {
            this._positionItem(a.item, a.x, a.y, a.isInstant, b)
        }, this)
    }, n.updateStagger = function() {
        var a = this.options.stagger;
        return null === a || void 0 === a ? void(this.stagger = 0) : (this.stagger = h(a), this.stagger)
    }, n._positionItem = function(a, b, c, d, e) {
        d ? a.goTo(b, c) : (a.stagger(e * this.stagger), a.moveTo(b, c))
    }, n._postLayout = function() {
        this.resizeContainer()
    }, n.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var b = this._getContainerSize();
            b && (this._setContainerMeasure(b.width, !0), this._setContainerMeasure(b.height, !1))
        }
    }, n._getContainerSize = k, n._setContainerMeasure = function(a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
        }
    }, n._emitCompleteOnItems = function(a, b) {
        function c() {
            e.dispatchEvent(a + "Complete", null, [b])
        }

        function d() {
            ++g == f && c()
        }
        var e = this,
            f = b.length;
        if (!b || !f) return void c();
        var g = 0;
        b.forEach(function(b) {
            b.once(a, d)
        })
    }, n.dispatchEvent = function(a, b, c) {
        var d = b ? [b].concat(c) : c;
        if (this.emitEvent(a, d), j)
            if (this.$element = this.$element || j(this.element), b) {
                var e = j.Event(b);
                e.type = a, this.$element.trigger(e, c)
            } else this.$element.trigger(a, c)
    }, n.ignore = function(a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0)
    }, n.unignore = function(a) {
        var b = this.getItem(a);
        b && delete b.isIgnored
    }, n.stamp = function(a) {
        (a = this._find(a)) && (this.stamps = this.stamps.concat(a), a.forEach(this.ignore, this))
    }, n.unstamp = function(a) {
        (a = this._find(a)) && a.forEach(function(a) {
            d.removeFrom(this.stamps, a), this.unignore(a)
        }, this)
    }, n._find = function(a) {
        if (a) return "string" == typeof a && (a = this.element.querySelectorAll(a)), a = d.makeArray(a)
    }, n._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, n._getBoundingRect = function() {
        var a = this.element.getBoundingClientRect(),
            b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }, n._manageStamp = k, n._getElementOffset = function(a) {
        var b = a.getBoundingClientRect(),
            d = this._boundingRect,
            e = c(a);
        return {
            left: b.left - d.left - e.marginLeft,
            top: b.top - d.top - e.marginTop,
            right: d.right - b.right - e.marginRight,
            bottom: d.bottom - b.bottom - e.marginBottom
        }
    }, n.handleEvent = d.handleEvent, n.bindResize = function() {
        a.addEventListener("resize", this), this.isResizeBound = !0
    }, n.unbindResize = function() {
        a.removeEventListener("resize", this), this.isResizeBound = !1
    }, n.onresize = function() {
        this.resize()
    }, d.debounceMethod(f, "onresize", 100), n.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, n.needsResizeLayout = function() {
        var a = c(this.element);
        return this.size && a && a.innerWidth !== this.size.innerWidth
    }, n.addItems = function(a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b
    }, n.appended = function(a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b))
    }, n.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
            var c = this.items.slice(0);
            this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
        }
    }, n.reveal = function(a) {
        if (this._emitCompleteOnItems("reveal", a), a && a.length) {
            var b = this.updateStagger();
            a.forEach(function(a, c) {
                a.stagger(c * b), a.reveal()
            })
        }
    }, n.hide = function(a) {
        if (this._emitCompleteOnItems("hide", a), a && a.length) {
            var b = this.updateStagger();
            a.forEach(function(a, c) {
                a.stagger(c * b), a.hide()
            })
        }
    }, n.revealItemElements = function(a) {
        var b = this.getItems(a);
        this.reveal(b)
    }, n.hideItemElements = function(a) {
        var b = this.getItems(a);
        this.hide(b)
    }, n.getItem = function(a) {
        for (var b = 0; b < this.items.length; b++) {
            var c = this.items[b];
            if (c.element == a) return c
        }
    }, n.getItems = function(a) {
        a = d.makeArray(a);
        var b = [];
        return a.forEach(function(a) {
            var c = this.getItem(a);
            c && b.push(c)
        }, this), b
    }, n.remove = function(a) {
        var b = this.getItems(a);
        this._emitCompleteOnItems("remove", b), b && b.length && b.forEach(function(a) {
            a.remove(), d.removeFrom(this.items, a)
        }, this)
    }, n.destroy = function() {
        var a = this.element.style;
        a.height = "", a.position = "", a.width = "", this.items.forEach(function(a) {
            a.destroy()
        }), this.unbindResize();
        var b = this.element.outlayerGUID;
        delete m[b], delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
    }, f.data = function(a) {
        a = d.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && m[b]
    }, f.create = function(a, b) {
        var c = g(f);
        return c.defaults = d.extend({}, f.defaults), d.extend(c.defaults, b), c.compatOptions = d.extend({}, f.compatOptions), c.namespace = a, c.data = f.data, c.Item = g(e), d.htmlInit(c, a), j && j.bridget && j.bridget(a, c), c
    };
    var o = {
        ms: 1,
        s: 1e3
    };
    return f.Item = e, f
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
}(window, function(a) {
    "use strict";

    function b() {
        a.Item.apply(this, arguments)
    }
    var c = b.prototype = Object.create(a.Item.prototype),
        d = c._create;
    c._create = function() {
        this.id = this.layout.itemGUID++, d.call(this), this.sortData = {}
    }, c.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var a = this.layout.options.getSortData,
                b = this.layout._sorters;
            for (var c in a) {
                var d = b[c];
                this.sortData[c] = d(this.element, this)
            }
        }
    };
    var e = c.destroy;
    return c.destroy = function() {
        e.apply(this, arguments), this.css({
            display: ""
        })
    }, b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof module && module.exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window, function(a, b) {
    "use strict";

    function c(a) {
        this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
    }
    var d = c.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(a) {
        d[a] = function() {
            return b.prototype[a].apply(this.isotope, arguments)
        }
    }), d.needsVerticalResizeLayout = function() {
        var b = a(this.isotope.element);
        return this.isotope.size && b && b.innerHeight != this.isotope.size.innerHeight
    }, d._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, d.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, d.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, d.getSegmentSize = function(a, b) {
        var c = a + b,
            d = "outer" + b;
        if (this._getMeasurement(c, d), !this[c]) {
            var e = this.getFirstItemSize();
            this[c] = e && e[d] || this.isotope.size["inner" + b]
        }
    }, d.getFirstItemSize = function() {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element)
    }, d.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, d.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, c.modes = {}, c.create = function(a, b) {
        function e() {
            c.apply(this, arguments)
        }
        return e.prototype = Object.create(d), e.prototype.constructor = e, b && (e.options = b), e.prototype.namespace = a, c.modes[a] = e, e
    }, c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("get-size")) : a.Masonry = b(a.Outlayer, a.getSize)
}(window, function(a, b) {
    var c = a.create("masonry");
    return c.compatOptions.fitWidth = "isFitWidth", c.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var a = 0; a < this.cols; a++) this.colYs.push(0);
        this.maxY = 0
    }, c.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var a = this.items[0],
                c = a && a.element;
            this.columnWidth = c && b(c).outerWidth || this.containerWidth
        }
        var d = this.columnWidth += this.gutter,
            e = this.containerWidth + this.gutter,
            f = e / d,
            g = d - e % d,
            h = g && g < 1 ? "round" : "floor";
        f = Math[h](f), this.cols = Math.max(f, 1)
    }, c.prototype.getContainerWidth = function() {
        var a = this._getOption("fitWidth"),
            c = a ? this.element.parentNode : this.element,
            d = b(c);
        this.containerWidth = d && d.innerWidth
    }, c.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth,
            c = b && b < 1 ? "round" : "ceil",
            d = Math[c](a.size.outerWidth / this.columnWidth);
        d = Math.min(d, this.cols);
        for (var e = this._getColGroup(d), f = Math.min.apply(Math, e), g = e.indexOf(f), h = {
                x: this.columnWidth * g,
                y: f
            }, i = f + a.size.outerHeight, j = this.cols + 1 - e.length, k = 0; k < j; k++) this.colYs[g + k] = i;
        return h
    }, c.prototype._getColGroup = function(a) {
        if (a < 2) return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; d < c; d++) {
            var e = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, e)
        }
        return b
    }, c.prototype._manageStamp = function(a) {
        var c = b(a),
            d = this._getElementOffset(a),
            e = this._getOption("originLeft"),
            f = e ? d.left : d.right,
            g = f + c.outerWidth,
            h = Math.floor(f / this.columnWidth);
        h = Math.max(0, h);
        var i = Math.floor(g / this.columnWidth);
        i -= g % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i);
        for (var j = this._getOption("originTop"), k = (j ? d.top : d.bottom) + c.outerHeight, l = h; l <= i; l++) this.colYs[l] = Math.max(k, this.colYs[l])
    }, c.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (a.width = this._getContainerFitWidth()), a
    }, c.prototype._getContainerFitWidth = function() {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }, c.prototype.needsResizeLayout = function() {
        var a = this.containerWidth;
        return this.getContainerWidth(), a != this.containerWidth
    }, c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof module && module.exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
}(window, function(a, b) {
    "use strict";
    var c = a.create("masonry"),
        d = c.prototype,
        e = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
    var g = d.measureColumns;
    d.measureColumns = function() {
        this.items = this.isotope.filteredItems, g.call(this)
    };
    var h = d._getOption;
    return d._getOption = function(a) {
        return "fitWidth" == a ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : h.apply(this.isotope, arguments)
    }, c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function(a) {
    "use strict";
    var b = a.create("fitRows"),
        c = b.prototype;
    return c._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, c._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter,
            c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
        var d = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
    }, c._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof module && module.exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function(a) {
    "use strict";
    var b = a.create("vertical", {
            horizontalAlignment: 0
        }),
        c = b.prototype;
    return c._resetLayout = function() {
        this.y = 0
    }, c._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
            c = this.y;
        return this.y += a.size.outerHeight, {
            x: b,
            y: c
        }
    }, c._getContainerSize = function() {
        return {
            height: this.y
        }
    }, b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
        return b(a, c, d, e, f, g, h)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function(a, b, c, d, e, f, g) {
    function h(a, b) {
        return function(c, d) {
            for (var e = 0; e < a.length; e++) {
                var f = a[e],
                    g = c.sortData[f],
                    h = d.sortData[f];
                if (g > h || g < h) {
                    var i = void 0 !== b[f] ? b[f] : b,
                        j = i ? 1 : -1;
                    return (g > h ? 1 : -1) * j
                }
            }
            return 0
        }
    }
    var i = a.jQuery,
        j = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^\s+|\s+$/g, "")
        },
        k = b.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    k.Item = f, k.LayoutMode = g;
    var l = k.prototype;
    l._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var a in g.modes) this._initLayoutMode(a)
    }, l.reloadItems = function() {
        this.itemGUID = 0, b.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var a = b.prototype._itemize.apply(this, arguments), c = 0; c < a.length; c++) {
            a[c].id = this.itemGUID++
        }
        return this._updateItemsSortData(a), a
    }, l._initLayoutMode = function(a) {
        var b = g.modes[a],
            c = this.options[a] || {};
        this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var a = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
    }, l.arrange = function(a) {
        this.option(a), this._getIsInstant();
        var b = this._filter(this.items);
        this.filteredItems = b.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [b]) : this._hideReveal(b), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(a) {
        this.reveal(a.needReveal), this.hide(a.needHide)
    }, l._getIsInstant = function() {
        var a = this._getOption("layoutInstant"),
            b = void 0 !== a ? a : !this._isLayoutInited;
        return this._isInstant = b, b
    }, l._bindArrangeComplete = function() {
        function a() {
            b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
        }
        var b, c, d, e = this;
        this.once("layoutComplete", function() {
            b = !0, a()
        }), this.once("hideComplete", function() {
            c = !0, a()
        }), this.once("revealComplete", function() {
            d = !0, a()
        })
    }, l._filter = function(a) {
        var b = this.options.filter;
        b = b || "*";
        for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0; g < a.length; g++) {
            var h = a[g];
            if (!h.isIgnored) {
                var i = f(h);
                i && c.push(h), i && h.isHidden ? d.push(h) : i || h.isHidden || e.push(h)
            }
        }
        return {
            matches: c,
            needReveal: d,
            needHide: e
        }
    }, l._getFilterTest = function(a) {
        return i && this.options.isJQueryFiltering ? function(b) {
            return i(b.element).is(a)
        } : "function" == typeof a ? function(b) {
            return a(b.element)
        } : function(b) {
            return d(b.element, a)
        }
    }, l.updateSortData = function(a) {
        var b;
        a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
    }, l._getSorters = function() {
        var a = this.options.getSortData;
        for (var b in a) {
            var c = a[b];
            this._sorters[b] = m(c)
        }
    }, l._updateItemsSortData = function(a) {
        for (var b = a && a.length, c = 0; b && c < b; c++) {
            a[c].updateSortData()
        }
    };
    var m = function() {
        function a(a) {
            if ("string" != typeof a) return a;
            var c = j(a).split(" "),
                d = c[0],
                e = d.match(/^\[(.+)\]$/),
                f = e && e[1],
                g = b(f, d),
                h = k.sortDataParsers[c[1]];
            return a = h ? function(a) {
                return a && h(g(a))
            } : function(a) {
                return a && g(a)
            }
        }

        function b(a, b) {
            return a ? function(b) {
                return b.getAttribute(a)
            } : function(a) {
                var c = a.querySelector(b);
                return c && c.textContent
            }
        }
        return a
    }();
    k.sortDataParsers = {
        parseInt: function(a) {
            return parseInt(a, 10)
        },
        parseFloat: function(a) {
            return parseFloat(a)
        }
    }, l._sort = function() {
        var a = this.options.sortBy;
        if (a) {
            var b = [].concat.apply(a, this.sortHistory),
                c = h(b, this.options.sortAscending);
            this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
        }
    }, l._mode = function() {
        var a = this.options.layoutMode,
            b = this.modes[a];
        if (!b) throw new Error("No layout mode: " + a);
        return b.options = this.options[a], b
    }, l._resetLayout = function() {
        b.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(a) {
        return this._mode()._getItemLayoutPosition(a)
    }, l._manageStamp = function(a) {
        this._mode()._manageStamp(a)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(a) {
        var b = this.addItems(a);
        if (b.length) {
            var c = this._filterRevealAdded(b);
            this.filteredItems = this.filteredItems.concat(c)
        }
    }, l.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
            this._resetLayout(), this._manageStamps();
            var c = this._filterRevealAdded(b);
            this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
        }
    }, l._filterRevealAdded = function(a) {
        var b = this._filter(a);
        return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
    }, l.insert = function(a) {
        var b = this.addItems(a);
        if (b.length) {
            var c, d, e = b.length;
            for (c = 0; c < e; c++) d = b[c], this.element.appendChild(d.element);
            var f = this._filter(b).matches;
            for (c = 0; c < e; c++) b[c].isLayoutInstant = !0;
            for (this.arrange(), c = 0; c < e; c++) delete b[c].isLayoutInstant;
            this.reveal(f)
        }
    };
    var n = l.remove;
    return l.remove = function(a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        n.call(this, a);
        for (var c = b && b.length, d = 0; c && d < c; d++) {
            var f = b[d];
            e.removeFrom(this.filteredItems, f)
        }
    }, l.shuffle = function() {
        for (var a = 0; a < this.items.length; a++) {
            this.items[a].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(a, b) {
        var c = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var d = a.apply(this, b);
        return this.options.transitionDuration = c, d
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(a) {
            return a.element
        })
    }, k
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof module && module.exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
}(window, function() {
    function a(b) {
        for (var c in a.defaults) this[c] = a.defaults[c];
        for (c in b) this[c] = b[c]
    }
    a.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var b = a.prototype;
    return b.contains = function(a) {
        var b = a.width || 0,
            c = a.height || 0;
        return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
    }, b.overlaps = function(a) {
        var b = this.x + this.width,
            c = this.y + this.height,
            d = a.x + a.width,
            e = a.y + a.height;
        return this.x < d && b > a.x && this.y < e && c > a.y
    }, b.getMaximalFreeRects = function(b) {
        if (!this.overlaps(b)) return !1;
        var c, d = [],
            e = this.x + this.width,
            f = this.y + this.height,
            g = b.x + b.width,
            h = b.y + b.height;
        return this.y < b.y && (c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y
        }), d.push(c)), e > g && (c = new a({
            x: g,
            y: this.y,
            width: e - g,
            height: this.height
        }), d.push(c)), f > h && (c = new a({
            x: this.x,
            y: h,
            width: this.width,
            height: f - h
        }), d.push(c)), this.x < b.x && (c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height
        }), d.push(c)), d
    }, b.canFit = function(a) {
        return this.width >= a.width && this.height >= a.height
    }, a
}),
function(a, b) {
    if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof module && module.exports) module.exports = b(require("./rect"));
    else {
        var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect)
    }
}(window, function(a) {
    function b(a, b, c) {
        this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
    }
    var c = b.prototype;
    c.reset = function() {
        this.spaces = [];
        var b = new a({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(b), this.sorter = d[this.sortDirection] || d.downwardLeftToRight
    }, c.pack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b];
            if (c.canFit(a)) {
                this.placeInSpace(a, c);
                break
            }
        }
    }, c.columnPack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b];
            if (c.x <= a.x && c.x + c.width >= a.x + a.width && c.height >= a.height - .01) {
                a.y = c.y, this.placed(a);
                break
            }
        }
    }, c.rowPack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b];
            if (c.y <= a.y && c.y + c.height >= a.y + a.height && c.width >= a.width - .01) {
                a.x = c.x, this.placed(a);
                break
            }
        }
    }, c.placeInSpace = function(a, b) {
        a.x = b.x, a.y = b.y, this.placed(a)
    }, c.placed = function(a) {
        for (var b = [], c = 0; c < this.spaces.length; c++) {
            var d = this.spaces[c],
                e = d.getMaximalFreeRects(a);
            e ? b.push.apply(b, e) : b.push(d)
        }
        this.spaces = b, this.mergeSortSpaces()
    }, c.mergeSortSpaces = function() {
        b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
    }, c.addSpace = function(a) {
        this.spaces.push(a), this.mergeSortSpaces()
    }, b.mergeRects = function(a) {
        var b = 0,
            c = a[b];
        a: for (; c;) {
            for (var d = 0, e = a[b + d]; e;) {
                if (e == c) d++;
                else {
                    if (e.contains(c)) {
                        a.splice(b, 1), c = a[b];
                        continue a
                    }
                    c.contains(e) ? a.splice(b + d, 1) : d++
                }
                e = a[b + d]
            }
            b++, c = a[b]
        }
        return a
    };
    var d = {
        downwardLeftToRight: function(a, b) {
            return a.y - b.y || a.x - b.x
        },
        rightwardTopToBottom: function(a, b) {
            return a.x - b.x || a.y - b.y
        }
    };
    return b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("./rect")) : a.Packery.Item = b(a.Outlayer, a.Packery.Rect)
}(window, function(a, b) {
    var c = document.documentElement.style,
        d = "string" == typeof c.transform ? "transform" : "WebkitTransform",
        e = function() {
            a.Item.apply(this, arguments)
        },
        f = e.prototype = Object.create(a.Item.prototype),
        g = f._create;
    f._create = function() {
        g.call(this), this.rect = new b
    };
    var h = f.moveTo;
    return f.moveTo = function(a, b) {
        var c = Math.abs(this.position.x - a),
            d = Math.abs(this.position.y - b);
        return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && c < 1 && d < 1 ? void this.goTo(a, b) : void h.apply(this, arguments)
    }, f.enablePlacing = function() {
        this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
    }, f.disablePlacing = function() {
        this.isPlacing = !1
    }, f.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
    }, f.showDropPlaceholder = function() {
        var a = this.dropPlaceholder;
        a || (a = this.dropPlaceholder = document.createElement("div"), a.className = "packery-drop-placeholder", a.style.position = "absolute"), a.style.width = this.size.width + "px", a.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(a)
    }, f.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[d] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
    }, f.hideDropPlaceholder = function() {
        this.layout.element.removeChild(this.dropPlaceholder)
    }, e
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/packery", ["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof module && module.exports ? module.exports = b(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window, function(a, b, c, d, e) {
    function f(a, b) {
        return a.position.y - b.position.y || a.position.x - b.position.x
    }

    function g(a, b) {
        return a.position.x - b.position.x || a.position.y - b.position.y
    }

    function h(a, b) {
        var c = b.x - a.x,
            d = b.y - a.y;
        return Math.sqrt(c * c + d * d)
    }
    c.prototype.canFit = function(a) {
        return this.width >= a.width - 1 && this.height >= a.height - 1
    };
    var i = b.create("packery");
    i.Item = e;
    var j = i.prototype;
    j._create = function() {
        b.prototype._create.call(this), this.packer = new d, this.shiftPacker = new d, this.isEnabled = !0, this.dragItemCount = 0;
        var a = this;
        this.handleDraggabilly = {
            dragStart: function() {
                a.itemDragStart(this.element)
            },
            dragMove: function() {
                a.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                a.itemDragEnd(this.element)
            }
        }, this.handleUIDraggable = {
            start: function(b, c) {
                c && a.itemDragStart(b.currentTarget)
            },
            drag: function(b, c) {
                c && a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
            },
            stop: function(b, c) {
                c && a.itemDragEnd(b.currentTarget)
            }
        }
    }, j._resetLayout = function() {
        this.getSize(), this._getMeasurements();
        var a, b, c;
        this._getOption("horizontal") ? (a = 1 / 0, b = this.size.innerHeight + this.gutter, c = "rightwardTopToBottom") : (a = this.size.innerWidth + this.gutter, b = 1 / 0, c = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = a, this.packer.height = this.shiftPacker.height = b, this.packer.sortDirection = this.shiftPacker.sortDirection = c, this.packer.reset(), this.maxY = 0, this.maxX = 0
    }, j._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
    }, j._getItemLayoutPosition = function(a) {
        if (this._setRectSize(a.element, a.rect), this.isShifting || this.dragItemCount > 0) {
            var b = this._getPackMethod();
            this.packer[b](a.rect)
        } else this.packer.pack(a.rect);
        return this._setMaxXY(a.rect), a.rect
    }, j.shiftLayout = function() {
        this.isShifting = !0, this.layout(), delete this.isShifting
    }, j._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack"
    }, j._setMaxXY = function(a) {
        this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
    }, j._setRectSize = function(b, c) {
        var d = a(b),
            e = d.outerWidth,
            f = d.outerHeight;
        (e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height)
    }, j._applyGridGutter = function(a, b) {
        if (!b) return a + this.gutter;
        b += this.gutter;
        var c = a % b,
            d = c && c < 1 ? "round" : "ceil";
        return a = Math[d](a / b) * b
    }, j._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }, j._manageStamp = function(a) {
        var b, d = this.getItem(a);
        if (d && d.isPlacing) b = d.rect;
        else {
            var e = this._getElementOffset(a);
            b = new c({
                x: this._getOption("originLeft") ? e.left : e.right,
                y: this._getOption("originTop") ? e.top : e.bottom
            })
        }
        this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
    }, j.sortItemsByPosition = function() {
        var a = this._getOption("horizontal") ? g : f;
        this.items.sort(a)
    }, j.fit = function(a, b, c) {
        var d = this.getItem(a);
        d && (this.stamp(d.element), d.enablePlacing(), this.updateShiftTargets(d), b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, this.shift(d, b, c), this._bindFitEvents(d), d.moveTo(d.rect.x, d.rect.y), this.shiftLayout(), this.unstamp(d.element), this.sortItemsByPosition(), d.disablePlacing())
    }, j._bindFitEvents = function(a) {
        function b() {
            2 == ++d && c.dispatchEvent("fitComplete", null, [a])
        }
        var c = this,
            d = 0;
        a.once("layout", b), this.once("layoutComplete", b)
    }, j.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
    }, j.needsResizeLayout = function() {
        var b = a(this.element),
            c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return b[c] != this.size[c]
    }, j.resizeShiftPercentLayout = function() {
        var b = this._getItemsForLayout(this.items),
            c = this._getOption("horizontal"),
            d = c ? "y" : "x",
            e = c ? "height" : "width",
            f = c ? "rowHeight" : "columnWidth",
            g = c ? "innerHeight" : "innerWidth",
            h = this[f];
        if (h = h && h + this.gutter) {
            this._getMeasurements();
            var i = this[f] + this.gutter;
            b.forEach(function(a) {
                var b = Math.round(a.rect[d] / h);
                a.rect[d] = b * i
            })
        } else {
            var j = a(this.element)[g] + this.gutter,
                k = this.packer[e];
            b.forEach(function(a) {
                a.rect[d] = a.rect[d] / k * j
            })
        }
        this.shiftLayout()
    }, j.itemDragStart = function(a) {
        if (this.isEnabled) {
            this.stamp(a);
            var b = this.getItem(a);
            b && (b.enablePlacing(), b.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(b))
        }
    }, j.updateShiftTargets = function(a) {
        this.shiftPacker.reset(), this._getBoundingRect();
        var b = this._getOption("originLeft"),
            d = this._getOption("originTop");
        this.stamps.forEach(function(a) {
            var e = this.getItem(a);
            if (!e || !e.isPlacing) {
                var f = this._getElementOffset(a),
                    g = new c({
                        x: b ? f.left : f.right,
                        y: d ? f.top : f.bottom
                    });
                this._setRectSize(a, g), this.shiftPacker.placed(g)
            }
        }, this);
        var e = this._getOption("horizontal"),
            f = e ? "rowHeight" : "columnWidth",
            g = e ? "height" : "width";
        this.shiftTargetKeys = [], this.shiftTargets = [];
        var h, i = this[f];
        if (i = i && i + this.gutter) {
            var j = Math.ceil(a.rect[g] / i),
                k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
            h = (k - j) * i;
            for (var l = 0; l < k; l++) this._addShiftTarget(l * i, 0, h)
        } else h = this.shiftPacker[g] + this.gutter - a.rect[g], this._addShiftTarget(0, 0, h);
        var m = this._getItemsForLayout(this.items),
            n = this._getPackMethod();
        m.forEach(function(a) {
            var b = a.rect;
            this._setRectSize(a.element, b), this.shiftPacker[n](b), this._addShiftTarget(b.x, b.y, h);
            var c = e ? b.x + b.width : b.x,
                d = e ? b.y : b.y + b.height;
            if (this._addShiftTarget(c, d, h), i)
                for (var f = Math.round(b[g] / i), j = 1; j < f; j++) {
                    var k = e ? c : b.x + i * j,
                        l = e ? b.y + i * j : d;
                    this._addShiftTarget(k, l, h)
                }
        }, this)
    }, j._addShiftTarget = function(a, b, c) {
        var d = this._getOption("horizontal") ? b : a;
        if (!(0 !== d && d > c)) {
            var e = a + "," + b; - 1 != this.shiftTargetKeys.indexOf(e) || (this.shiftTargetKeys.push(e), this.shiftTargets.push({
                x: a,
                y: b
            }))
        }
    }, j.shift = function(a, b, c) {
        var d, e = 1 / 0,
            f = {
                x: b,
                y: c
            };
        this.shiftTargets.forEach(function(a) {
            var b = h(a, f);
            b < e && (d = a, e = b)
        }), a.rect.x = d.x, a.rect.y = d.y
    };
    var k = 120;
    j.itemDragMove = function(a, b, c) {
        function d() {
            f.shift(e, b, c), e.positionDropPlaceholder(), f.layout()
        }
        var e = this.isEnabled && this.getItem(a);
        if (e) {
            b -= this.size.paddingLeft, c -= this.size.paddingTop;
            var f = this,
                g = new Date;
            this._itemDragTime && g - this._itemDragTime < k ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(d, k)) : (d(), this._itemDragTime = g)
        }
    }, j.itemDragEnd = function(a) {
        function b() {
            2 == ++d && (c.element.classList.remove("is-positioning-post-drag"), c.hideDropPlaceholder(), e.dispatchEvent("dragItemPositioned", null, [c]))
        }
        var c = this.isEnabled && this.getItem(a);
        if (c) {
            clearTimeout(this.dragTimeout), c.element.classList.add("is-positioning-post-drag");
            var d = 0,
                e = this;
            c.once("layout", b), this.once("layoutComplete", b), c.moveTo(c.rect.x, c.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), c.disablePlacing(), this.unstamp(c.element)
        }
    }, j.bindDraggabillyEvents = function(a) {
        this._bindDraggabillyEvents(a, "on")
    }, j.unbindDraggabillyEvents = function(a) {
        this._bindDraggabillyEvents(a, "off")
    }, j._bindDraggabillyEvents = function(a, b) {
        var c = this.handleDraggabilly;
        a[b]("dragStart", c.dragStart), a[b]("dragMove", c.dragMove), a[b]("dragEnd", c.dragEnd)
    }, j.bindUIDraggableEvents = function(a) {
        this._bindUIDraggableEvents(a, "on")
    }, j.unbindUIDraggableEvents = function(a) {
        this._bindUIDraggableEvents(a, "off")
    }, j._bindUIDraggableEvents = function(a, b) {
        var c = this.handleUIDraggable;
        a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop)
    };
    var l = j.destroy;
    return j.destroy = function() {
        l.apply(this, arguments), this.isEnabled = !1
    }, i.Rect = c, i.Packer = d, i
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery"], b) : "object" == typeof module && module.exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery")) : b(a.Isotope.LayoutMode, a.Packery)
}(window, function(a, b) {
    var c = a.create("packery"),
        d = c.prototype,
        e = {
            _getElementOffset: !0,
            _getMeasurement: !0
        };
    for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
    var g = d._resetLayout;
    d._resetLayout = function() {
        this.packer = this.packer || new b.Packer, this.shiftPacker = this.shiftPacker || new b.Packer, g.apply(this, arguments)
    };
    var h = d._getItemLayoutPosition;
    d._getItemLayoutPosition = function(a) {
        return a.rect = a.rect || new b.Rect, h.call(this, a)
    };
    var i = d.needsResizeLayout;
    d.needsResizeLayout = function() {
        return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : i.call(this)
    };
    var j = d._getOption;
    return d._getOption = function(a) {
        return "horizontal" == a ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : j.apply(this.isotope, arguments)
    }, c
}),
function(a) {
    "use strict";
    a.fn.equalHeightsDestroy = function() {
        return a(this).css({
            height: "auto",
            "min-height": "0px"
        }), this
    }, a.fn.equalHeights = function(b) {
        var c = a.extend({
                container: null
            }, b),
            d = 0,
            e = 0,
            f = a(this);
        return f.css({
            height: "auto",
            "min-height": "0px"
        }).each(function() {
            var b = a(this);
            b.height() > d && (d = b.height(), e = b.outerHeight())
        }).css({
            height: e,
            "min-height": e
        }), null != c.container && f.parents(c.container).css({
            height: e,
            "min-height": e
        }), this
    }
}(jQuery),
function(a) {
    var b = /chrome/.test(navigator.userAgent.toLowerCase());
    a(window).load(function() {
        !navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) && b && function() {
            function a() {
                if (document.body) {
                    var a = document.body,
                        b = document.documentElement,
                        c = window.innerHeight,
                        d = a.scrollHeight;
                    if (F = 0 <= document.compatMode.indexOf("CSS") ? b : a, G = a, D = !0, top != self) B = !0;
                    else if (d > c && (a.offsetHeight <= c || b.offsetHeight <= c)) {
                        var e = !1,
                            d = function() {
                                e || b.scrollHeight == document.height || (e = !0, setTimeout(function() {
                                    b.style.height = document.height + "px", e = !1
                                }, 500))
                            };
                        b.style.height = "auto", setTimeout(d, 10), h("DOMNodeInserted", d), h("DOMNodeRemoved", d), F.offsetHeight <= c && (c = document.createElement("div"), c.style.clear = "both", a.appendChild(c))
                    } - 1 < document.URL.indexOf("mail.google.com") && (c = document.createElement("style"), c.innerHTML = ".iu { visibility: hidden }", (document.getElementsByTagName("head")[0] || b).appendChild(c)), E || A || (a.style.backgroundAttachment = "scroll", b.style.backgroundAttachment = "scroll")
                }
            }

            function b(a, b, c, d) {
                if (d || (d = 1e3), k(b, c), t) {
                    var e = +new Date - K;
                    u > e && (e = (1 + 30 / e) / 2) > 1 && (e = Math.min(e, v), b *= e, c *= e), K = +new Date
                }
                if (I.push({
                        x: b,
                        y: c,
                        lastX: 0 > b ? .99 : -.99,
                        lastY: 0 > c ? .99 : -.99,
                        start: +new Date
                    }), !J) {
                    var f = a === document.body,
                        g = function() {
                            for (var e = +new Date, h = 0, i = 0, j = 0; j < I.length; j++) {
                                var k = I[j],
                                    l = e - k.start,
                                    p = l >= o,
                                    r = p ? 1 : l / o;
                                q && (r = m(r)), l = k.x * r - k.lastX >> 0, r = k.y * r - k.lastY >> 0, h += l, i += r, k.lastX += l, k.lastY += r, p && (I.splice(j, 1), j--)
                            }
                            f ? window.scrollBy(h, i) : (h && (a.scrollLeft += h), i && (a.scrollTop += i)), b || c || (I = []), I.length ? N(g, a, d / n + 1) : J = !1
                        };
                    N(g, a, 0), J = !0
                }
            }

            function c(c) {
                D || a();
                var d = c.target,
                    e = g(d);
                if (!e || c.defaultPrevented || j(G, "embed") || j(d, "embed") && /\.pdf/i.test(d.src)) return !0;
                var d = c.wheelDeltaX || 0,
                    f = c.wheelDeltaY || 0;
                d || f || (f = c.wheelDelta || 0), 1.2 < Math.abs(d) && (d *= p / 120), 1.2 < Math.abs(f) && (f *= p / 120), b(e, -d, -f), c.preventDefault()
            }

            function e(a) {
                G = a.target
            }

            function f(a, b) {
                for (var c = a.length; c--;) L[M(a[c])] = b;
                return b
            }

            function g(a) {
                var b = [],
                    c = F.scrollHeight;
                do {
                    var d = L[M(a)];
                    if (d) return f(b, d);
                    if (b.push(a), c === a.scrollHeight) {
                        if (!B || F.clientHeight + 10 < c) return f(b, document.body)
                    } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return f(b, a)
                } while (a = a.parentNode)
            }

            function h(a, b, c) {
                window.addEventListener(a, b, c || !1)
            }

            function j(a, b) {
                return (a.nodeName || "").toLowerCase() === b.toLowerCase()
            }

            function k(a, b) {
                a = a > 0 ? 1 : -1, b = b > 0 ? 1 : -1, (C.x !== a || C.y !== b) && (C.x = a, C.y = b, I = [], K = 0)
            }

            function l(a) {
                var b;
                return a *= r, 1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), a = 1 - Math.exp(-(a - 1)), b += a * (1 - b)), b * s
            }

            function m(a) {
                return a >= 1 ? 1 : 0 >= a ? 0 : (1 == s && (s /= l(1)), l(a))
            }
            var G, n = 150,
                o = 800,
                p = 150,
                q = !0,
                r = 6,
                s = 1,
                t = !0,
                u = 20,
                v = 1,
                A = !1,
                B = !1,
                C = {
                    x: 0,
                    y: 0
                },
                D = !1,
                E = !0,
                F = document.documentElement,
                I = [],
                J = !1,
                K = +new Date,
                L = {};
            setInterval(function() {
                L = {}
            }, 1e4);
            var M = function() {
                    var a = 0;
                    return function(b) {
                        return b.uniqueID || (b.uniqueID = a++)
                    }
                }(),
                N = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(a, b, c) {
                        window.setTimeout(a, c || 1e3 / 60)
                    }
                }();
            h("mousedown", e), h("mousewheel", c), h("load", a)
        }()
    })
}(jQuery),
function() {
    "use strict";

    function a(d) {
        if (!d) throw new Error("No options passed to Waypoint constructor");
        if (!d.element) throw new Error("No element option passed to Waypoint constructor");
        if (!d.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + b, this.options = a.Adapter.extend({}, a.defaults, d), this.element = this.options.element, this.adapter = new a.Adapter(this.element), this.callback = d.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = a.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = a.Context.findOrCreateByElement(this.options.context), a.offsetAliases[this.options.offset] && (this.options.offset = a.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), c[this.key] = this, b += 1
    }
    var b = 0,
        c = {};
    a.prototype.queueTrigger = function(a) {
        this.group.queueTrigger(this, a)
    }, a.prototype.trigger = function(a) {
        this.enabled && this.callback && this.callback.apply(this, a)
    }, a.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete c[this.key]
    }, a.prototype.disable = function() {
        return this.enabled = !1, this
    }, a.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, a.prototype.next = function() {
        return this.group.next(this)
    }, a.prototype.previous = function() {
        return this.group.previous(this)
    }, a.invokeAll = function(a) {
        var b = [];
        for (var d in c) b.push(c[d]);
        for (var e = 0, f = b.length; f > e; e++) b[e][a]()
    }, a.destroyAll = function() {
        a.invokeAll("destroy")
    }, a.disableAll = function() {
        a.invokeAll("disable")
    }, a.enableAll = function() {
        a.invokeAll("enable")
    }, a.refreshAll = function() {
        a.Context.refreshAll()
    }, a.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, a.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, a.adapters = [], a.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, a.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = a
}(),
function() {
    "use strict";

    function a(a) {
        window.setTimeout(a, 1e3 / 60)
    }

    function b(a) {
        this.element = a, this.Adapter = e.Adapter, this.adapter = new this.Adapter(a), this.key = "waypoint-context-" + c, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, a.waypointContextKey = this.key, d[a.waypointContextKey] = this, c += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var c = 0,
        d = {},
        e = window.Waypoint,
        f = window.onload;
    b.prototype.add = function(a) {
        var b = a.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[b][a.key] = a, this.refresh()
    }, b.prototype.checkEmpty = function() {
        var a = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            b = this.Adapter.isEmptyObject(this.waypoints.vertical);
        a && b && (this.adapter.off(".waypoints"), delete d[this.key])
    }, b.prototype.createThrottledResizeHandler = function() {
        function a() {
            b.handleResize(), b.didResize = !1
        }
        var b = this;
        this.adapter.on("resize.waypoints", function() {
            b.didResize || (b.didResize = !0, e.requestAnimationFrame(a))
        })
    }, b.prototype.createThrottledScrollHandler = function() {
        function a() {
            b.handleScroll(), b.didScroll = !1
        }
        var b = this;
        this.adapter.on("scroll.waypoints", function() {
            (!b.didScroll || e.isTouch) && (b.didScroll = !0, e.requestAnimationFrame(a))
        })
    }, b.prototype.handleResize = function() {
        e.Context.refreshAll()
    }, b.prototype.handleScroll = function() {
        var a = {},
            b = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var c in b) {
            var d = b[c],
                e = d.newScroll > d.oldScroll,
                f = e ? d.forward : d.backward;
            for (var g in this.waypoints[c]) {
                var h = this.waypoints[c][g],
                    i = d.oldScroll < h.triggerPoint,
                    j = d.newScroll >= h.triggerPoint,
                    k = i && j,
                    l = !i && !j;
                (k || l) && (h.queueTrigger(f), a[h.group.id] = h.group)
            }
        }
        for (var m in a) a[m].flushTriggers();
        this.oldScroll = {
            x: b.horizontal.newScroll,
            y: b.vertical.newScroll
        }
    }, b.prototype.innerHeight = function() {
        return this.element == this.element.window ? e.viewportHeight() : this.adapter.innerHeight()
    }, b.prototype.remove = function(a) {
        delete this.waypoints[a.axis][a.key], this.checkEmpty()
    }, b.prototype.innerWidth = function() {
        return this.element == this.element.window ? e.viewportWidth() : this.adapter.innerWidth()
    }, b.prototype.destroy = function() {
        var a = [];
        for (var b in this.waypoints)
            for (var c in this.waypoints[b]) a.push(this.waypoints[b][c]);
        for (var d = 0, e = a.length; e > d; d++) a[d].destroy()
    }, b.prototype.refresh = function() {
        var a, b = this.element == this.element.window,
            c = b ? void 0 : this.adapter.offset(),
            d = {};
        this.handleScroll(), a = {
            horizontal: {
                contextOffset: b ? 0 : c.left,
                contextScroll: b ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: b ? 0 : c.top,
                contextScroll: b ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var f in a) {
            var g = a[f];
            for (var h in this.waypoints[f]) {
                var i, j, k, l, m, n = this.waypoints[f][h],
                    o = n.options.offset,
                    p = n.triggerPoint,
                    q = 0,
                    r = null == p;
                n.element !== n.element.window && (q = n.adapter.offset()[g.offsetProp]), "function" == typeof o ? o = o.apply(n) : "string" == typeof o && (o = parseFloat(o), n.options.offset.indexOf("%") > -1 && (o = Math.ceil(g.contextDimension * o / 100))), i = g.contextScroll - g.contextOffset, n.triggerPoint = q + i - o, j = p < g.oldScroll, k = n.triggerPoint >= g.oldScroll, l = j && k, m = !j && !k, !r && l ? (n.queueTrigger(g.backward), d[n.group.id] = n.group) : !r && m ? (n.queueTrigger(g.forward), d[n.group.id] = n.group) : r && g.oldScroll >= n.triggerPoint && (n.queueTrigger(g.forward), d[n.group.id] = n.group)
            }
        }
        return e.requestAnimationFrame(function() {
            for (var a in d) d[a].flushTriggers()
        }), this
    }, b.findOrCreateByElement = function(a) {
        return b.findByElement(a) || new b(a)
    }, b.refreshAll = function() {
        for (var a in d) d[a].refresh()
    }, b.findByElement = function(a) {
        return d[a.waypointContextKey]
    }, window.onload = function() {
        f && f(), b.refreshAll()
    }, e.requestAnimationFrame = function(b) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || a).call(window, b)
    }, e.Context = b
}(),
function() {
    "use strict";

    function a(a, b) {
        return a.triggerPoint - b.triggerPoint
    }

    function b(a, b) {
        return b.triggerPoint - a.triggerPoint
    }

    function c(a) {
        this.name = a.name, this.axis = a.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), d[this.axis][this.name] = this
    }
    var d = {
            vertical: {},
            horizontal: {}
        },
        e = window.Waypoint;
    c.prototype.add = function(a) {
        this.waypoints.push(a)
    }, c.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, c.prototype.flushTriggers = function() {
        for (var c in this.triggerQueues) {
            var d = this.triggerQueues[c],
                e = "up" === c || "left" === c;
            d.sort(e ? b : a);
            for (var f = 0, g = d.length; g > f; f += 1) {
                var h = d[f];
                (h.options.continuous || f === d.length - 1) && h.trigger([c])
            }
        }
        this.clearTriggerQueues()
    }, c.prototype.next = function(b) {
        this.waypoints.sort(a);
        var c = e.Adapter.inArray(b, this.waypoints);
        return c === this.waypoints.length - 1 ? null : this.waypoints[c + 1]
    }, c.prototype.previous = function(b) {
        this.waypoints.sort(a);
        var c = e.Adapter.inArray(b, this.waypoints);
        return c ? this.waypoints[c - 1] : null
    }, c.prototype.queueTrigger = function(a, b) {
        this.triggerQueues[b].push(a)
    }, c.prototype.remove = function(a) {
        var b = e.Adapter.inArray(a, this.waypoints);
        b > -1 && this.waypoints.splice(b, 1)
    }, c.prototype.first = function() {
        return this.waypoints[0]
    }, c.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, c.findOrCreate = function(a) {
        return d[a.axis][a.name] || new c(a)
    }, e.Group = c
}(),
function() {
    "use strict";

    function a(a) {
        this.$element = b(a)
    }
    var b = window.jQuery,
        c = window.Waypoint;
    b.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(b, c) {
        a.prototype[c] = function() {
            var a = Array.prototype.slice.call(arguments);
            return this.$element[c].apply(this.$element, a)
        }
    }), b.each(["extend", "inArray", "isEmptyObject"], function(c, d) {
        a[d] = b[d]
    }), c.adapters.push({
        name: "jquery",
        Adapter: a
    }), c.Adapter = a
}(),
function() {
    "use strict";

    function a(a) {
        return function() {
            var c = [],
                d = arguments[0];
            return a.isFunction(arguments[0]) && (d = a.extend({}, arguments[1]), d.handler = arguments[0]), this.each(function() {
                var e = a.extend({}, d, {
                    element: this
                });
                "string" == typeof e.context && (e.context = a(this).closest(e.context)[0]), c.push(new b(e))
            }), c
        }
    }
    var b = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto))
}(),
function(a) {
    function b(a) {
        var b = a.length,
            d = c.type(a);
        return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }
    if (!a.jQuery) {
        var c = function(a, b) {
            return new c.fn.init(a, b)
        };
        c.isWindow = function(a) {
            return null != a && a == a.window
        }, c.type = function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
        }, c.isArray = Array.isArray || function(a) {
            return "array" === c.type(a)
        }, c.isPlainObject = function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (a) {
                return !1
            }
            for (b in a);
            return void 0 === b || f.call(a, b)
        }, c.each = function(a, c, d) {
            var f = 0,
                g = a.length,
                h = b(a);
            if (d) {
                if (h)
                    for (; g > f && !1 !== c.apply(a[f], d); f++);
                else
                    for (f in a)
                        if (!1 === c.apply(a[f], d)) break
            } else if (h)
                for (; g > f && !1 !== c.call(a[f], f, a[f]); f++);
            else
                for (f in a)
                    if (!1 === c.call(a[f], f, a[f])) break;
            return a
        }, c.data = function(a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando],
                    g = f && d[f];
                if (void 0 === b) return g;
                if (g && b in g) return g[b]
            } else if (void 0 !== b) {
                var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                return d[f] = d[f] || {}, d[f][b] = e, e
            }
        }, c.removeData = function(a, b) {
            var e = a[c.expando],
                f = e && d[e];
            f && c.each(b, function(a, b) {
                delete f[b]
            })
        }, c.extend = function() {
            var a, b, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                if (null != (f = arguments[i]))
                    for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
            return h
        }, c.queue = function(a, d, e) {
            function f(a, c) {
                var d = c || [];
                return null != a && (b(Object(a)) ? function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                    if (c !== c)
                        for (; void 0 !== b[d];) a[e++] = b[d++];
                    a.length = e
                }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
            }
            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
            }
        }, c.dequeue = function(a, b) {
            c.each(a.nodeType ? [a] : a, function(a, d) {
                b = b || "fx";
                var e = c.queue(d, b),
                    f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                    c.dequeue(d, b)
                }))
            })
        }, c.fn = c.prototype = {
            init: function(a) {
                if (a.nodeType) return this[0] = a, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function a() {
                    for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
                    return a || document
                }
                var b = this[0],
                    a = a.apply(b),
                    d = this.offset(),
                    e = /^(?:body|html)$/i.test(a.nodeName) ? {
                        top: 0,
                        left: 0
                    } : c(a).offset();
                return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {
            Utilities: c
        }
    }
}(window),
function(a) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function() {
    return function(a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function f(a) {
            return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
        }

        function g(a) {
            var b = m.data(a, "velocity");
            return null === b ? d : b
        }

        function h(a) {
            return function(b) {
                return Math.round(b * a) * (1 / a)
            }
        }

        function i(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a
            }

            function g(a, b) {
                return 3 * b - 6 * a
            }

            function h(a) {
                return 3 * a
            }

            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
            }

            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
            }

            function k(b, c) {
                for (var e = 0; p > e; ++e) {
                    var f = j(c, a, d);
                    if (0 === f) return c;
                    c -= (i(c, a, d) - b) / f
                }
                return c
            }

            function l() {
                for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
            }

            function m(b, c, e) {
                var f, g, h = 0;
                do {
                    g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g
                } while (Math.abs(f) > r && ++h < s);
                return g
            }

            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]),
                    h = c + g * u,
                    i = j(h, a, d);
                return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
            }

            function o() {
                y = !0, (a != c || d != e) && l()
            }
            var p = 4,
                q = .001,
                r = 1e-7,
                s = 10,
                t = 11,
                u = 1 / (t - 1),
                v = "Float32Array" in b;
            if (4 !== arguments.length) return !1;
            for (var w = 0; 4 > w; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t),
                y = !1,
                z = function(b) {
                    return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                };
            z.getControlPoints = function() {
                return [{
                    x: a,
                    y: c
                }, {
                    x: d,
                    y: e
                }]
            };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function() {
                return A
            }, z
        }

        function j(a, b) {
            var c = a;
            return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : !(!p.isArray(a) || 4 !== a.length) && i.apply(null, a), !1 === c && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
        }

        function k(a) {
            if (a) {
                var b = (new Date).getTime(),
                    c = t.State.calls.length;
                c > 1e4 && (t.State.calls = e(t.State.calls));
                for (var f = 0; c > f; f++)
                    if (t.State.calls[f]) {
                        var h = t.State.calls[f],
                            i = h[0],
                            j = h[2],
                            n = h[3],
                            o = !!n,
                            q = null;
                        n || (n = t.State.calls[f][3] = b - 16);
                        for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
                            var w = i[s],
                                y = w.element;
                            if (g(y)) {
                                var z = !1;
                                if (j.display !== d && null !== j.display && "none" !== j.display) {
                                    if ("flex" === j.display) {
                                        var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        m.each(A, function(a, b) {
                                            v.setPropertyValue(y, "display", b)
                                        })
                                    }
                                    v.setPropertyValue(y, "display", j.display)
                                }
                                j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);
                                for (var B in w)
                                    if ("element" !== B) {
                                        var C, D = w[B],
                                            E = p.isString(D.easing) ? t.Easings[D.easing] : D.easing;
                                        if (1 === r) C = D.endValue;
                                        else {
                                            var F = D.endValue - D.startValue;
                                            if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue
                                        }
                                        if (D.currentValue = C, "tween" === B) q = C;
                                        else {
                                            if (v.Hooks.registered[B]) {
                                                var G = v.Hooks.getRoot(B),
                                                    H = g(y).rootPropertyValueCache[G];
                                                H && (D.rootPropertyValue = H)
                                            }
                                            var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                                            v.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G] ? v.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z = !0)
                                        }
                                    }
                                j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && v.flushTransformCache(y)
                            }
                        }
                        j.display !== d && "none" !== j.display && (t.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f)
                    }
            }
            t.State.isTicking && x(k)
        }

        function l(a, b) {
            if (!t.State.calls[a]) return !1;
            for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                var l = c[j].element;
                if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), !0 !== f.loop && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                    g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                    var n = !1;
                    m.each(v.Lists.transforms3D, function(a, b) {
                        var c = /^scale/.test(b) ? 1 : 0,
                            e = g(l).transformCache[b];
                        g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
                    }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete && !f.loop && j === k - 1) try {
                    f.complete.call(e, e)
                } catch (a) {
                    setTimeout(function() {
                        throw a
                    }, 1)
                }
                h && !0 !== f.loop && h(e), g(l) && !0 === f.loop && !b && (m.each(g(l).tweensContainer, function(a, b) {
                    /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                }), t(l, "reverse", {
                    loop: !0,
                    delay: f.delay
                })), !1 !== f.queue && m.dequeue(l, f.queue)
            }
            t.State.calls[a] = !1;
            for (var o = 0, p = t.State.calls.length; p > o; o++)
                if (!1 !== t.State.calls[o]) {
                    i = !0;
                    break
                }!1 === i && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = [])
        }
        var m, n = function() {
                if (c.documentMode) return c.documentMode;
                for (var a = 7; a > 4; a--) {
                    var b = c.createElement("div");
                    if (b.innerHTML = "\x3c!--[if IE " + a + "]><span></span><![endif]--\x3e", b.getElementsByTagName("span").length) return b = null, a
                }
                return d
            }(),
            o = function() {
                var a = 0;
                return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                    var c, d = (new Date).getTime();
                    return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                        b(d + c)
                    }, c)
                }
            }(),
            p = {
                isString: function(a) {
                    return "string" == typeof a
                },
                isArray: Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                isFunction: function(a) {
                    return "[object Function]" === Object.prototype.toString.call(a)
                },
                isNode: function(a) {
                    return a && a.nodeType
                },
                isNodeList: function(a) {
                    return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
                },
                isWrapped: function(a) {
                    return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
                },
                isSVG: function(a) {
                    return b.SVGElement && a instanceof b.SVGElement
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                }
            },
            q = !1;
        if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var r = 400,
            s = "swing",
            t = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: b.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: c.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: m,
                Redirects: {},
                Easings: {},
                Promise: b.Promise,
                defaults: {
                    queue: "",
                    duration: r,
                    easing: s,
                    begin: d,
                    complete: d,
                    progress: d,
                    display: d,
                    visibility: d,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(a) {
                    m.data(a, "velocity", {
                        isSVG: p.isSVG(a),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
        var u = function() {
            function a(a) {
                return -a.tension * a.x - a.friction * a.v
            }

            function b(b, c, d) {
                var e = {
                    x: b.x + d.dx * c,
                    v: b.v + d.dv * c,
                    tension: b.tension,
                    friction: b.friction
                };
                return {
                    dx: e.v,
                    dv: a(e)
                }
            }

            function c(c, d) {
                var e = {
                        dx: c.v,
                        dv: a(c)
                    },
                    f = b(c, .5 * d, e),
                    g = b(c, .5 * d, f),
                    h = b(c, d, g),
                    i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                    j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }
            return function a(b, d, e) {
                var f, g, h, i = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    j = [0],
                    k = 0,
                    l = 1e-4,
                    m = .016;
                for (b = parseFloat(b) || 500, d = parseFloat(d) || 20, e = e || null, i.tension = b, i.friction = d, f = null !== e, f ? (k = a(b, d), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;);
                return f ? function(a) {
                    return j[a * (j.length - 1) | 0]
                } : k
            }
        }();
        t.Easings = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            spring: function(a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
            }
        }, m.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(a, b) {
            t.Easings[b[0]] = i.apply(null, b[1])
        });
        var v = t.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var a = 0; a < v.Lists.colors.length; a++) {
                        var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                        v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                    }
                    var c, d, e;
                    if (n)
                        for (c in v.Hooks.templates) {
                            d = v.Hooks.templates[c], e = d[0].split(" ");
                            var f = d[1].match(v.RegEx.valueSplit);
                            "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                        }
                    for (c in v.Hooks.templates) {
                        d = v.Hooks.templates[c], e = d[0].split(" ");
                        for (var a in e) {
                            var g = c + e[a],
                                h = a;
                            v.Hooks.registered[g] = [c, h]
                        }
                    }
                },
                getRoot: function(a) {
                    var b = v.Hooks.registered[a];
                    return b ? b[0] : a
                },
                cleanRootPropertyValue: function(a, b) {
                    return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
                },
                extractValue: function(a, b) {
                    var c = v.Hooks.registered[a];
                    if (c) {
                        var d = c[0],
                            e = c[1];
                        return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
                    }
                    return b
                },
                injectValue: function(a, b, c) {
                    var d = v.Hooks.registered[a];
                    if (d) {
                        var e, g = d[0],
                            h = d[1];
                        return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, e.join(" ")
                    }
                    return c
                }
            },
            Normalizations: {
                registered: {
                    clip: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return "clip";
                            case "extract":
                                var d;
                                return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                            case "inject":
                                return "rect(" + c + ")"
                        }
                    },
                    blur: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return t.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var d = parseFloat(c);
                                if (!d && 0 !== d) {
                                    var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    d = e ? e[1] : 0
                                }
                                return d;
                            case "inject":
                                return parseFloat(c) ? "blur(" + c + ")" : "none"
                        }
                    },
                    opacity: function(a, b, c) {
                        if (8 >= n) switch (a) {
                            case "name":
                                return "filter";
                            case "extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case "inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                        } else switch (a) {
                            case "name":
                                return "opacity";
                            case "extract":
                            case "inject":
                                return c
                        }
                    }
                },
                register: function() {
                    9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                    for (var a = 0; a < v.Lists.transformsBase.length; a++) ! function() {
                        var b = v.Lists.transformsBase[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                case "inject":
                                    var f = !1;
                                    switch (b.substr(0, b.length - 1)) {
                                        case "translate":
                                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                            break;
                                        case "scal":
                                        case "scale":
                                            t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                            break;
                                        case "skew":
                                            f = !/(deg|\d)$/i.test(e);
                                            break;
                                        case "rotate":
                                            f = !/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                            }
                        }
                    }();
                    for (var a = 0; a < v.Lists.colors.length; a++) ! function() {
                        var b = v.Lists.colors[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                                case "name":
                                    return b;
                                case "extract":
                                    var f;
                                    if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                    else {
                                        var g, h = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                case "inject":
                                    return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(a) {
                    return a.replace(/-(\w)/g, function(a, b) {
                        return b.toUpperCase()
                    })
                },
                SVGAttribute: function(a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                },
                prefixCheck: function(a) {
                    if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
                    for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                return a.toUpperCase()
                            }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0]
                    }
                    return [a, !1]
                }
            },
            Values: {
                hexToRgb: function(a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function(a, b, c, d) {
                        return b + b + c + c + d + d
                    }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(a) {
                    return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                },
                getUnitType: function(a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                },
                getDisplayType: function(a) {
                    var b = a && a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                },
                addClass: function(a, b) {
                    a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
                },
                removeClass: function(a, b) {
                    a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(a, c, e, f) {
                function h(a, c) {
                    function e() {
                        j && v.setPropertyValue(a, "display", "none")
                    }
                    var i = 0;
                    if (8 >= n) i = m.css(a, c);
                    else {
                        var j = !1;
                        if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                            if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                return e(), k
                            }
                            if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                return e(), l
                            }
                        }
                        var o;
                        o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
                    }
                    if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                        var p = h(a, "position");
                        ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
                    }
                    return i
                }
                var i;
                if (v.Hooks.registered[c]) {
                    var j = c,
                        k = v.Hooks.getRoot(j);
                    e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
                } else if (v.Normalizations.registered[c]) {
                    var l, o;
                    l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
                }
                if (!/^[\d-]/.test(i))
                    if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c))
                        if (/^(height|width)$/i.test(c)) try {
                            i = a.getBBox()[c]
                        } catch (a) {
                            i = 0
                        } else i = a.getAttribute(c);
                        else i = h(a, v.Names.prefixCheck(c)[0]);
                return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i
            },
            setPropertyValue: function(a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                else {
                    if (v.Hooks.registered[c]) {
                        var i = c,
                            j = v.Hooks.getRoot(c);
                        e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
                    }
                    if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
                        a.style[h] = d
                    } catch (a) {
                        t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                    } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                    t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                }
                return [h, d]
            },
            flushTransformCache: function(a) {
                function b(b) {
                    return parseFloat(v.getPropertyValue(a, b))
                }
                var c = "";
                if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
                    var d = {
                        translate: [b("translateX"), b("translateY")],
                        skewX: [b("skewX")],
                        skewY: [b("skewY")],
                        scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
                        rotate: [b("rotateZ"), 0, 0]
                    };
                    m.each(g(a).transformCache, function(a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
                    })
                } else {
                    var e, f;
                    m.each(g(a).transformCache, function(b) {
                        return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
                    }), f && (c = "perspective" + f + " " + c)
                }
                v.setPropertyValue(a, "transform", c)
            }
        };
        v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
            var e = d;
            return a = f(a), m.each(a, function(a, f) {
                if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));
                else {
                    var h = t.CSS.setPropertyValue(f, b, c);
                    "transform" === h[0] && t.CSS.flushTransformCache(f), e = h
                }
            }), e
        };
        var w = function() {
            function a() {
                return h ? B.promise || null : i
            }

            function e() {
                function a() {
                    function a(a, b) {
                        var c = d,
                            e = d,
                            g = d;
                        return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g]
                    }

                    function l(a, b) {
                        var c, d;
                        return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                            return c = a, ""
                        }), c || (c = v.Values.getUnitType(a)), [d, c]
                    }

                    function n() {
                        var a = {
                                myParent: f.parentNode || c.body,
                                position: v.getPropertyValue(f, "position"),
                                fontSize: v.getPropertyValue(f, "fontSize")
                            },
                            d = a.position === I.lastPosition && a.myParent === I.lastParent,
                            e = a.fontSize === I.lastFontSize;
                        I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;
                        var h = 100,
                            i = {};
                        if (e && d) i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;
                        else {
                            var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                            t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                t.CSS.setPropertyValue(j, b, "hidden")
                            }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                t.CSS.setPropertyValue(j, b, h + "%")
                            }), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j)
                        }
                        return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), f), i
                    }
                    if (h.begin && 0 === y) try {
                        h.begin.call(o, o)
                    } catch (a) {
                        setTimeout(function() {
                            throw a
                        }, 1)
                    }
                    if ("scroll" === C) {
                        var r, u, w, z = /^x$/i.test(h.axis) ? "Left" : "Top",
                            A = parseFloat(h.offset) || 0;
                        h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, r = h.container["scroll" + z], w = r + m(f).position()[z.toLowerCase()] + A) : h.container = null : (r = t.State.scrollAnchor[t.State["scrollProperty" + z]], u = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === z ? "Top" : "Left")]], w = m(f).offset()[z.toLowerCase()] + A), i = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: r,
                                currentValue: r,
                                endValue: w,
                                unitType: "",
                                easing: h.easing,
                                scrollData: {
                                    container: h.container,
                                    direction: z,
                                    alternateValue: u
                                }
                            },
                            element: f
                        }, t.debug && console.log("tweensContainer (scroll): ", i.scroll, f)
                    } else if ("reverse" === C) {
                        if (!g(f).tweensContainer) return void m.dequeue(f, h.queue);
                        "none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
                        var D = m.extend(!0, {}, g(f).tweensContainer);
                        for (var E in D)
                            if ("element" !== E) {
                                var F = D[E].startValue;
                                D[E].startValue = D[E].currentValue = D[E].endValue, D[E].endValue = F, p.isEmptyObject(s) || (D[E].easing = h.easing), t.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(D[E]), f)
                            }
                        i = D
                    } else if ("start" === C) {
                        var D;
                        g(f).tweensContainer && !0 === g(f).isAnimating && (D = g(f).tweensContainer), m.each(q, function(b, c) {
                            if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(b)) {
                                var e = a(c, !0),
                                    f = e[0],
                                    g = e[1],
                                    h = e[2];
                                if (v.RegEx.isHex.test(f)) {
                                    for (var i = ["Red", "Green", "Blue"], j = v.Values.hexToRgb(f), k = h ? v.Values.hexToRgb(h) : d, l = 0; l < i.length; l++) {
                                        var m = [j[l]];
                                        g && m.push(g), k !== d && m.push(k[l]), q[b + i[l]] = m
                                    }
                                    delete q[b]
                                }
                            }
                        });
                        for (var G in q) {
                            var H = a(q[G]),
                                K = H[0],
                                L = H[1],
                                M = H[2];
                            G = v.Names.camelCase(G);
                            var N = v.Hooks.getRoot(G),
                                O = !1;
                            if (g(f).isSVG || "tween" === N || !1 !== v.Names.prefixCheck(N)[1] || v.Normalizations.registered[N] !== d) {
                                (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(G) && !M && 0 !== K && (M = 0), h._cacheValues && D && D[G] ? (M === d && (M = D[G].endValue + D[G].unitType), O = g(f).rootPropertyValueCache[N]) : v.Hooks.registered[G] ? M === d ? (O = v.getPropertyValue(f, N), M = v.getPropertyValue(f, G, O)) : O = v.Hooks.templates[N][1] : M === d && (M = v.getPropertyValue(f, G));
                                var P, Q, R, S = !1;
                                if (P = l(G, M), M = P[0], R = P[1], P = l(G, K), K = P[0].replace(/^([+-\/*])=/, function(a, b) {
                                        return S = b, ""
                                    }), Q = P[1], M = parseFloat(M) || 0, K = parseFloat(K) || 0, "%" === Q && (/^(fontSize|lineHeight)$/.test(G) ? (K /= 100, Q = "em") : /^scale/.test(G) ? (K /= 100, Q = "") : /(Red|Green|Blue)$/i.test(G) && (K = K / 100 * 255, Q = "")), /[\/*]/.test(S)) Q = R;
                                else if (R !== Q && 0 !== M)
                                    if (0 === K) Q = R;
                                    else {
                                        e = e || n();
                                        var T = /margin|padding|left|right|width|text|word|letter/i.test(G) || /X$/.test(G) || "x" === G ? "x" : "y";
                                        switch (R) {
                                            case "%":
                                                M *= "x" === T ? e.percentToPxWidth : e.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                M *= e[R + "ToPx"]
                                        }
                                        switch (Q) {
                                            case "%":
                                                M *= 1 / ("x" === T ? e.percentToPxWidth : e.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                M *= 1 / e[Q + "ToPx"]
                                        }
                                    }
                                switch (S) {
                                    case "+":
                                        K = M + K;
                                        break;
                                    case "-":
                                        K = M - K;
                                        break;
                                    case "*":
                                        K *= M;
                                        break;
                                    case "/":
                                        K = M / K
                                }
                                i[G] = {
                                    rootPropertyValue: O,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: K,
                                    unitType: Q,
                                    easing: L
                                }, t.debug && console.log("tweensContainer (" + G + "): " + JSON.stringify(i[G]), f)
                            } else t.debug && console.log("Skipping [" + N + "] due to a lack of browser support.")
                        }
                        i.element = f
                    }
                    i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), !1 === t.State.isTicking && (t.State.isTicking = !0, k())) : y++)
                }
                var e, f = this,
                    h = m.extend({}, t.defaults, s),
                    i = {};
                switch (g(f) === d && t.init(f), parseFloat(h.delay) && !1 !== h.queue && m.queue(f, h.queue, function(a) {
                    t.velocityQueueEntryFlag = !0, g(f).delayTimer = {
                        setTimeout: setTimeout(a, parseFloat(h.delay)),
                        next: a
                    }
                }), h.duration.toString().toLowerCase()) {
                    case "fast":
                        h.duration = 200;
                        break;
                    case "normal":
                        h.duration = r;
                        break;
                    case "slow":
                        h.duration = 600;
                        break;
                    default:
                        h.duration = parseFloat(h.duration) || 1
                }!1 !== t.mock && (!0 === t.mock ? h.duration = h.delay = 1 : (h.duration *= parseFloat(t.mock) || 1, h.delay *= parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile && !t.State.isGingerbread, !1 === h.queue ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
                    return !0 === c ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag = !0, void a(b))
                }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
            }
            var h, i, n, o, q, s, u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
            if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
                u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);
                var x = o.length,
                    y = 0;
                if (!/^(stop|finish|finishAll)$/i.test(q) && !m.isPlainObject(s)) {
                    var z = n + 1;
                    s = {};
                    for (var A = z; A < arguments.length; A++) p.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A]
                }
                var B = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                h && t.Promise && (B.promise = new t.Promise(function(a, b) {
                    B.resolver = a, B.rejecter = b
                }));
                var C;
                switch (q) {
                    case "scroll":
                        C = "scroll";
                        break;
                    case "reverse":
                        C = "reverse";
                        break;
                    case "finish":
                    case "finishAll":
                    case "stop":
                        m.each(o, function(a, b) {
                            g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== q || !0 !== s && !p.isString(s) || (m.each(m.queue(b, p.isString(s) ? s : ""), function(a, b) {
                                p.isFunction(b) && b()
                            }), m.queue(b, p.isString(s) ? s : "", []))
                        });
                        var D = [];
                        return m.each(t.State.calls, function(a, b) {
                            b && m.each(b[1], function(c, e) {
                                var f = s === d ? "" : s;
                                return !0 !== f && b[2].queue !== f && (s !== d || !1 !== b[2].queue) || void m.each(o, function(c, d) {
                                    d === e && ((!0 === s || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function(a, b) {
                                        p.isFunction(b) && b(null, !0)
                                    }), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && !1 !== f && m.each(g(d).tweensContainer, function(a, b) {
                                        b.endValue = b.currentValue
                                    }), D.push(a)) : ("finish" === q || "finishAll" === q) && (b[2].duration = 1))
                                })
                            })
                        }), "stop" === q && (m.each(D, function(a, b) {
                            l(b, !0)
                        }), B.promise && B.resolver(o)), a();
                    default:
                        if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
                            if (p.isString(q) && t.Redirects[q]) {
                                var E = m.extend({}, s),
                                    F = E.duration,
                                    G = E.delay || 0;
                                return !0 === E.backwards && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) {
                                    parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d)
                                }), a()
                            }
                            var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return B.promise ? B.rejecter(new Error(H)) : console.log(H), a()
                        }
                        C = "start"
                }
                var I = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    J = [];
                m.each(o, function(a, b) {
                    p.isNode(b) && e.call(b)
                });
                var K, E = m.extend({}, t.defaults, s);
                if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop)
                    for (var L = 0; K > L; L++) {
                        var M = {
                            delay: E.delay,
                            progress: E.progress
                        };
                        L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M)
                    }
                return a()
            }
        };
        t = m.extend(w, t), t.animate = w;
        var x = b.requestAnimationFrame || o;
        return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
            c.hidden ? (x = function(a) {
                return setTimeout(function() {
                    a(!0)
                }, 16)
            }, k()) : x = b.requestAnimationFrame || o
        }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) {
            t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c),
                    j = i.begin,
                    k = i.complete,
                    l = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    n = {};
                i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                    j && j.call(g, g);
                    for (var c in l) {
                        n[c] = a.style[c];
                        var d = t.CSS.getPropertyValue(a, c);
                        l[c] = "Down" === b ? [d, 0] : [0, d]
                    }
                    n.overflow = a.style.overflow, a.style.overflow = "hidden"
                }, i.complete = function() {
                    for (var b in n) a.style[b] = n[b];
                    k && k.call(g, g), h && h.resolver(g)
                }, t(a, l, i)
            }
        }), m.each(["In", "Out"], function(a, b) {
            t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c),
                    j = {
                        opacity: "In" === b ? 1 : 0
                    },
                    k = i.complete;
                i.complete = e !== f - 1 ? i.begin = null : function() {
                    k && k.call(g, g), h && h.resolver(g)
                }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
            }
        }), t
    }(window.jQuery || window.Zepto || window, window, document)
}),
function(a) {
    "function" == typeof require && "object" == typeof exports ? module.exports = a() : "function" == typeof define && define.amd ? define(["velocity"], a) : a()
}(function() {
    return function(a, b, c, d) {
        function e(a, b) {
            var c = [];
            return !(!a || !b) && (g.each([a, b], function(a, b) {
                var d = [];
                g.each(b, function(a, b) {
                    for (; b.toString().length < 5;) b = "0" + b;
                    d.push(b)
                }), c.push(d.join(""))
            }), parseFloat(c[0]) > parseFloat(c[1]))
        }
        if (!a.Velocity || !a.Velocity.Utilities) return void(b.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var f = a.Velocity,
            g = f.Utilities;
        if (e({
                major: 1,
                minor: 1,
                patch: 0
            }, f.version)) {
            var j = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw alert(j), new Error(j)
        }
        f.RegisterEffect = f.RegisterUI = function(a, b) {
            function c(a, b, c, d) {
                var h, e = 0;
                g.each(a.nodeType ? [a] : a, function(a, b) {
                    d && (c += a * d), h = b.parentNode, g.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(a, c) {
                        e += parseFloat(f.CSS.getPropertyValue(b, c))
                    })
                }), f.animate(h, {
                    height: ("In" === b ? "+" : "-") + "=" + e
                }, {
                    queue: !1,
                    easing: "ease-in-out",
                    duration: c * ("In" === b ? .6 : 1)
                })
            }
            return f.Redirects[a] = function(e, h, i, j, k, l) {
                function m() {
                    h.display !== d && "none" !== h.display || !/Out$/.test(a) || g.each(k.nodeType ? [k] : k, function(a, b) {
                        f.CSS.setPropertyValue(b, "display", "none")
                    }), h.complete && h.complete.call(k, k), l && l.resolver(k || e)
                }
                var n = i === j - 1;
                b.defaultDuration = "function" == typeof b.defaultDuration ? b.defaultDuration.call(k, k) : parseFloat(b.defaultDuration);
                for (var o = 0; o < b.calls.length; o++) {
                    var p = b.calls[o],
                        q = p[0],
                        r = h.duration || b.defaultDuration || 1e3,
                        s = p[1],
                        t = p[2] || {},
                        u = {};
                    if (u.duration = r * (s || 1), u.queue = h.queue || "", u.easing = t.easing || "ease", u.delay = parseFloat(t.delay) || 0, u._cacheValues = t._cacheValues || !0, 0 === o) {
                        if (u.delay += parseFloat(h.delay) || 0, 0 === i && (u.begin = function() {
                                h.begin && h.begin.call(k, k);
                                var b = a.match(/(In|Out)$/);
                                b && "In" === b[0] && q.opacity !== d && g.each(k.nodeType ? [k] : k, function(a, b) {
                                    f.CSS.setPropertyValue(b, "opacity", 0)
                                }), h.animateParentHeight && b && c(k, b[0], r + u.delay, h.stagger)
                            }), null !== h.display)
                            if (h.display !== d && "none" !== h.display) u.display = h.display;
                            else if (/In$/.test(a)) {
                            var v = f.CSS.Values.getDisplayType(e);
                            u.display = "inline" === v ? "inline-block" : v
                        }
                        h.visibility && "hidden" !== h.visibility && (u.visibility = h.visibility)
                    }
                    o === b.calls.length - 1 && (u.complete = function() {
                        if (b.reset) {
                            for (var a in b.reset) {
                                var c = b.reset[a];
                                f.CSS.Hooks.registered[a] !== d || "string" != typeof c && "number" != typeof c || (b.reset[a] = [b.reset[a], b.reset[a]])
                            }
                            var g = {
                                duration: 0,
                                queue: !1
                            };
                            n && (g.complete = m), f.animate(e, b.reset, g)
                        } else n && m()
                    }, "hidden" === h.visibility && (u.visibility = h.visibility)), f.animate(e, q, u)
                }
            }, f
        }, f.RegisterEffect.packagedEffects = {
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [{
                        translateY: -30
                    }, .25],
                    [{
                        translateY: 0
                    }, .125],
                    [{
                        translateY: -15
                    }, .125],
                    [{
                        translateY: 0
                    }, .25]
                ]
            },
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 0
                    }, .125]
                ]
            },
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuad", 1]
                    }, .25],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }, .25],
                    [{
                        opacity: [0, "easeInOutQuad"]
                    }, .25],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }, .25]
                ]
            },
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, .5, {
                        easing: "easeInExpo"
                    }],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]
                ]
            },
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [{
                        rotateZ: 15
                    }, .2],
                    [{
                        rotateZ: -10
                    }, .2],
                    [{
                        rotateZ: 5
                    }, .2],
                    [{
                        rotateZ: -5
                    }, .2],
                    [{
                        rotateZ: 0
                    }, .2]
                ]
            },
            "callout.tada": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        rotateZ: -3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: 3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: -3
                    }, .1],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    [{
                        scaleX: 1,
                        scaleY: 1,
                        rotateZ: 0
                    }, .2]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [1, 0]
                    }]
                ]
            },
            "transition.flipXIn": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateY: [0, -30]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipYIn": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [1500, 1500],
                        rotateX: [0, -30]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.shrinkIn": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 1.15],
                        scaleY: [1, 1.15],
                        translateZ: 0
                    }]
                ]
            },
            "transition.expandIn": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, .9],
                        scaleY: [1, .9],
                        translateZ: 0
                    }]
                ]
            },
            "transition.grow": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, .2],
                        scaleY: [1, .2],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [3e3, 3e3],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: [0, -70]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [3e3, 3e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: [0, 70]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveLeftIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: [0, -70]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveRightIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: [0, 70]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            }
        };
        for (var k in f.RegisterEffect.packagedEffects) f.RegisterEffect(k, f.RegisterEffect.packagedEffects[k]);
        f.RunSequence = function(a) {
            var b = g.extend(!0, [], a);
            b.length > 1 && (g.each(b.reverse(), function(a, c) {
                var d = b[a + 1];
                if (d) {
                    var e = c.o || c.options,
                        h = d.o || d.options,
                        i = e && !1 === e.sequenceQueue ? "begin" : "complete",
                        j = h && h[i],
                        k = {};
                    k[i] = function() {
                        var a = d.e || d.elements,
                            b = a.nodeType ? [a] : a;
                        j && j.call(b, b), f(c)
                    }, d.o ? d.o = g.extend({}, h, k) : d.options = g.extend({}, h, k)
                }
            }), b.reverse()), f(b[0])
        }
    }(window.jQuery || window.Zepto || window, window, document)
}),
function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";

    function b(b) {
        return !b.nodeName || -1 !== a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function c(b) {
        return a.isFunction(b) || a.isPlainObject(b) ? b : {
            top: b,
            left: b
        }
    }
    var d = a.scrollTo = function(b, c, d) {
        return a(window).scrollTo(b, c, d)
    };
    return d.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    }, a.fn.scrollTo = function(e, f, g) {
        "object" == typeof f && (g = f, f = 0), "function" == typeof g && (g = {
            onAfter: g
        }), "max" === e && (e = 9e9), g = a.extend({}, d.defaults, g), f = f || g.duration;
        var h = g.queue && 1 < g.axis.length;
        return h && (f /= 2), g.offset = c(g.offset), g.over = c(g.over), this.each(function() {
            function i(b) {
                var c = a.extend({}, g, {
                    queue: !0,
                    duration: f,
                    complete: b && function() {
                        b.call(k, m, g)
                    }
                });
                l.stop().animate(n, c)
            }
            if (null !== e) {
                var o, j = b(this),
                    k = j ? this.contentWindow || window : this,
                    l = a(k),
                    m = e,
                    n = {};
                switch (typeof m) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)) {
                            m = c(m);
                            break
                        }
                        if (m = j ? a(m) : a(m, k), !m.length) return;
                    case "object":
                        (m.is || m.style) && (o = (m = a(m)).offset())
                }
                var p = a.isFunction(g.offset) && g.offset(k, m) || g.offset;
                a.each(g.axis.split(""), function(a, b) {
                    var c = "x" === b ? "Left" : "Top",
                        e = c.toLowerCase(),
                        f = "scroll" + c,
                        q = l[f](),
                        r = d.max(k, b);
                    o ? (n[f] = o[e] + (j ? 0 : q - l.offset()[e]), g.margin && (n[f] -= parseInt(m.css("margin" + c), 10) || 0, n[f] -= parseInt(m.css("border" + c + "Width"), 10) || 0), n[f] += p[e] || 0, g.over[e] && (n[f] += m["x" === b ? "width" : "height"]() * g.over[e])) : (c = m[e], n[f] = c.slice && "%" === c.slice(-1) ? parseFloat(c) / 100 * r : c), g.limit && /^\d+$/.test(n[f]) && (n[f] = 0 >= n[f] ? 0 : Math.min(n[f], r)), !a && 1 < g.axis.length && (q === n[f] ? n = {} : h && (i(g.onAfterFirst), n = {}))
                }), i(g.onAfter)
            }
        })
    }, d.max = function(c, d) {
        var e = "x" === d ? "Width" : "Height",
            f = "scroll" + e;
        if (!b(c)) return c[f] - a(c)[e.toLowerCase()]();
        var e = "client" + e,
            g = c.ownerDocument || c.document,
            h = g.documentElement,
            g = g.body;
        return Math.max(h[f], g[f]) - Math.min(h[e], g[e])
    }, a.Tween.propHooks.scrollLeft = a.Tween.propHooks.scrollTop = {
        get: function(b) {
            return a(b.elem)[b.prop]()
        },
        set: function(b) {
            var c = this.get(b);
            if (b.options.interrupt && b._last && b._last !== c) return a(b.elem).stop();
            var d = Math.round(b.now);
            c !== d && (a(b.elem)[b.prop](d), b._last = this.get(b))
        }
    }, d
}),
function(a) {
    function b() {
        var a = location.href;
        return hashtag = -1 !== a.indexOf("#prettyPhoto") && decodeURI(a.substring(a.indexOf("#prettyPhoto") + 1, a.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function c() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }

    function d() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }

    function e(a, b) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var c = "[\\?&]" + a + "=([^&#]*)",
            d = new RegExp(c),
            e = d.exec(b);
        return null == e ? "" : e[1]
    }
    a.prettyPhoto = {
        version: "3.1.6"
    }, a.fn.prettyPhoto = function(f) {
        function g() {
            a(".pp_loaderIcon").hide();
            var b = l(pp_images[set_position]);
            projectedTop = scroll_pos.scrollTop + (A / 2 - r.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: r.contentHeight,
                width: r.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: B / 2 - r.containerWidth / 2 < 0 ? 0 : B / 2 - r.containerWidth / 2,
                width: r.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(r.height).width(r.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == b ? $pp_pic_holder.find(".pp_hoverContainer").show() : "vimeo" == b || "youtube" == b || "audio" == b ? $pp_pic_holder.find(".pp_hoverContainer").css("zIndex", "-1").find("> *:not(.pp_close)").hide() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (r.resized ? a("a.pp_expand,a.pp_contract").show() : a("a.pp_expand").hide()), !settings.autoplay_slideshow || x || s || a.prettyPhoto.startSlideshow(), settings.changepicturecallback(), s = !0
            }), p(), "youtube" == b || "vimeo" == b ? $pp_pic_holder.find("#pp_full_res").animate({
                opacity: 0
            }, {
                complete: function(b, c) {
                    var d = a(this);
                    "undefined" != typeof pp_animation && "" != pp_animation || (pp_animation = "transition.shrinkIn"), d.velocity(pp_animation, {
                        display: "auto"
                    })
                }
            }, settings.animation_speed) : "audio" == b && ($pp_pic_holder.find("audio").audioPlayer({
                strPlay: "",
                strPause: "",
                strVolume: ""
            }), $pp_pic_holder.find(".audioplayer-playpause a").click()), f.ajaxcallback()
        }

        function h(b) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                a(".pp_loaderIcon").show(), b()
            })
        }

        function i(b) {
            b > 1 ? a(".pp_nav").show() : a(".pp_nav").hide()
        }

        function j(b, c) {
            resized = !1, k(b, c), imageWidth = b, imageHeight = c;
            var d = 0;
            a(".dfd-frame-line.line-bottom") && (d = 2 * a(".dfd-frame-line.line-bottom").height());
            var e = 300 + d;
            if ((Modernizr.touch && B < 800 || "youtube" == l(pp_images[set_position]) || "vimeo" == l(pp_images[set_position]) || "audio" == l(pp_images[set_position])) && (e = 0), (w > B || v > A - e) && doresize && settings.allow_resize && !z) {
                for (resized = !0, fitting = !1; !fitting;) w > B && v > A - e ? w / B > v / (A - e) ? (imageWidth = B - 100, imageHeight = c / b * imageWidth) : (imageHeight = A - e, imageWidth = b / c * imageHeight) : w > B ? (imageWidth = B - 100, imageHeight = c / b * imageWidth) : v > A - e ? (imageHeight = A - e, imageWidth = b / c * imageHeight) : fitting = !0, v = imageHeight, w = imageWidth;
                (w > B || v > A) && j(w, v), k(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(v),
                containerWidth: Math.floor(w) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(t),
                contentWidth: Math.floor(u),
                resized: resized
            }
        }

        function k(b, c) {
            b = parseFloat(b), c = parseFloat(c), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(b), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(b).appendTo(a("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(b), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(a("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), "youtube" != l(pp_images[set_position]) && "vimeo" != l(pp_images[set_position]) && "audio" != l(pp_images[set_position]) || (detailsHeight = 0, $pp_pic_holder.find(".pp_details").remove()), t = c + detailsHeight, u = b, v = t + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), w = b
        }

        function l(a) {
            return a.match(/youtube\.com\/watch/i) || a.match(/youtu\.be/i) ? "youtube" : a.match(/vimeo\.com/i) ? "vimeo" : a.match(/\b.mov\b/i) ? "quicktime" : a.match(/\b.mp3/i) ? "audio" : a.match(/\b.swf\b/i) ? "flash" : a.match(/\biframe=true\b/i) ? "iframe" : a.match(/\bajax=true\b/i) ? "ajax" : a.match(/\bcustom=true\b/i) ? "custom" : "#" == a.substr(0, 1) ? "inline" : "image"
        }

        function m() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = n(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = A / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > A) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: B / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function n() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function o() {
            A = a(window).height(), B = a(window).width(), a("body").hasClass("dfd-custom-padding-html") && (B -= 2 * a(".dfd-frame-line.line-bottom").height()), "undefined" != typeof $pp_overlay && $pp_overlay.height(a(document).height()).width(B)
        }

        function p() {
            isSet && settings.overlay_gallery && "image" == l(pp_images[set_position]) ? (itemWidth = 90, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor(r.containerWidth / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = r.width, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.find("div:first").width(galleryWidth).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, a.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function q(b) {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), a("body").append(settings.markup), $pp_pic_holder = a(".pp_pic_holder"), $ppt = a(".ppt"), $pp_overlay = a("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var c = 0; c < pp_thumbs.length; c++) pp_thumbs[c].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_thumbs[c]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='90' height='90' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = a(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return a.prettyPhoto.changeGalleryPage("next"), a.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return a.prettyPhoto.changeGalleryPage("previous"), a.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 90, $pp_gallery_li.each(function(b) {
                    a(this).find("a").click(function() {
                        return a.prettyPhoto.changePage(b), a.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play"></a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return a.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
            var d = a(window).width();
            a("body").hasClass("dfd-custom-padding-html") && (d -= 2 * a(".dfd-frame-line.line-bottom").height()), $pp_overlay.css({
                opacity: 0,
                height: a(document).height(),
                width: a(window).width()
            }).bind("click", function() {
                settings.modal || a.prettyPhoto.close()
            }), a("a.pp_close").bind("click", function() {
                return a.prettyPhoto.close(), !1
            }), settings.allow_expand && a("a.pp_expand").bind("click", function(b) {
                return a(this).hasClass("pp_expand") ? (a(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (a(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0, m()), h(function() {
                    a.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return a.prettyPhoto.changePage("previous"), a.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return a.prettyPhoto.changePage("next"), a.prettyPhoto.stopSlideshow(), !1
            }), m()
        }
        f = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            audio_markup: '<div class="pp_audio_container"><div class="thumb-wrap">{thumb}</div><div class="dfd-composition-heading"><div><h3 class="entry-title">{title}</h3><div class="entry-subtitle">{subtitle}</div></div></div><audio class="audio" preload="auto" controls="controls"><source src ="{path}"></audio></div>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, f);
        var r, s, t, u, v, w, x, y = this,
            z = !1,
            A = a(window).height(),
            B = a(window).width();
        return doresize = !0, scroll_pos = n(), a(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            m(), o()
        }), f.keyboard_shortcuts && a(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(b) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (b.keyCode) {
                case 37:
                    a.prettyPhoto.changePage("previous"), b.preventDefault();
                    break;
                case 39:
                    a.prettyPhoto.changePage("next"), b.preventDefault();
                    break;
                case 27:
                    settings.modal || a.prettyPhoto.close(), b.preventDefault()
            }
        }), a.prettyPhoto.initialize = function() {
            return settings = f, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = a(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(y, function(b, c) {
                if (-1 != a(b).attr(settings.hook).indexOf(theRel)) return a(b).attr("href")
            }) : a.makeArray(a(this).attr("href")), pp_thumbs = isSet ? jQuery.map(y, function(b, c) {
                if (-1 != a(b).attr(settings.hook).indexOf(theRel)) return a(b).attr("data-thumb") ? a(b).attr("data-thumb") : a(b).attr("href")
            }) : a.makeArray(a(this).attr("data-thumb")), pp_animation = isSet ? jQuery.map(y, function(b, c) {
                if (-1 != a(b).attr(settings.hook).indexOf(theRel)) return a(b).attr("data-animation") ? a(b).attr("data-animation") : ""
            }) : a(this).attr("data-animation"), pp_audio_thumb = isSet ? jQuery.map(y, function(b, c) {
                if (-1 != a(b).attr(settings.hook).indexOf(theRel)) return a(b).attr("data-audio-thumb") ? a(b).attr("data-audio-thumb") : ""
            }) : a(this).attr("data-audio-thumb"), pp_audio_title = isSet ? jQuery.map(y, function(b, c) {
                if (-1 != a(b).attr(settings.hook).indexOf(theRel)) return a(b).attr("data-audio-title") ? a(b).attr("data-audio-title") : ""
            }) : a(this).attr("data-audio-title"), pp_audio_subtitle = isSet ? jQuery.map(y, function(b, c) {
                if (-1 != a(b).attr(settings.hook).indexOf(theRel)) return a(b).attr("data-audio-subtitle") ? a(b).attr("data-audio-subtitle") : ""
            }) : a(this).attr("data-audio-subtitle"), pp_titles = isSet ? jQuery.map(y, function(b, c) {
                if (-1 != a(b).attr(settings.hook).indexOf(theRel)) return a(b).find("img").attr("alt") ? a(b).find("img").attr("alt") : ""
            }) : a.makeArray(a(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(y, function(b, c) {
                if (-1 != a(b).attr(settings.hook).indexOf(theRel)) return a(b).attr("title") ? a(b).attr("title") : ""
            }) : a.makeArray(a(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(a(this).attr("href"), pp_images), rel_index = isSet ? set_position : a("a[" + settings.hook + "^='" + theRel + "']").index(a(this)), q(this), settings.allow_resize && a(window).bind("scroll.prettyphoto", function() {
                m()
            }), a.prettyPhoto.open(), !1
        }, a.prettyPhoto.open = function(b) {
            "undefined" == typeof settings && (settings = f, pp_images = a.makeArray(arguments[0]), pp_titles = arguments[1] ? a.makeArray(arguments[1]) : a.makeArray(""), pp_descriptions = arguments[2] ? a.makeArray(arguments[2]) : a.makeArray(""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, q(b.target));
            var d = a(pp_images).size(),
                h = 0 == set_position ? d : set_position,
                k = set_position + 2 > d ? set_position + 2 - d : set_position + 2;
            return settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), i(a(pp_images).size()), a(".pp_loaderIcon").show(), settings.deeplinking && c(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + a(pp_images).size()), $pp_pic_holder.find(".pp_next i > span.count").text(k + settings.counter_separator_label + d), $pp_pic_holder.find(".pp_previous i > span.count").text(h + settings.counter_separator_label + d), void 0 !== pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(e("width", pp_images[set_position])) ? e("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(e("height", pp_images[set_position])) ? e("height", pp_images[set_position]) : settings.default_height.toString(), z = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(a(window).height() * parseFloat(movie_height) / 100 - 150), z = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(a(window).width() * parseFloat(movie_width) / 100 - 150), z = !0), $pp_pic_holder.fadeIn(function() {
                switch (settings.show_title && "" != pp_titles[set_position] && void 0 !== pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, l(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < a(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            r = j(imgPreloader.width, imgPreloader.height), g()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), a.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        r = j(movie_width, movie_height), $pp_pic_holder.addClass("dfd-video-box"), movie_id = e("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, e("rel", pp_images[set_position]) ? movie += "?rel=" + e("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        r = j(movie_width, movie_height), $pp_pic_holder.addClass("dfd-video-box"), movie_id = pp_images[set_position];
                        var b = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                            c = movie_id.match(b);
                        movie = "http://player.vimeo.com/video/" + c[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = r.width + "/embed/?moog_width=" + r.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, r.height).replace(/{path}/g, movie);
                        break;
                    case "audio":
                        r = j(500, 530), $pp_pic_holder.addClass("dfd-audio-box"), audio_url = pp_images[set_position], toInject = settings.audio_markup.replace(/{thumb}/g, '<img src="' + pp_audio_thumb + '" alt="audio thumb" />').replace(/{title}/g, pp_audio_title).replace(/{subtitle}/g, pp_audio_subtitle).replace(/{path}/g, audio_url);
                        break;
                    case "quicktime":
                        r = j(movie_width, movie_height), $pp_pic_holder.addClass("dfd-video-box"), r.height += 15, r.contentHeight += 15, r.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        r = j(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        r = j(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, r = j(movie_width, movie_height), doresize = !0, skipInjection = !0, a.get(pp_images[set_position], function(a) {
                            toInject = settings.inline_markup.replace(/{content}/g, a), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, g()
                        });
                        break;
                    case "custom":
                        r = j(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = a(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(a("body")).show(), doresize = !1, r = j(a(myClone).width(), a(myClone).height()), doresize = !0, a(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, a(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, g())
            }), !1
        }, a.prettyPhoto.changePage = function(b) {
            currentGalleryPage = 0, "previous" == b ? --set_position < 0 && (set_position = a(pp_images).size() - 1) : "next" == b ? ++set_position > a(pp_images).size() - 1 && (set_position = 0) : set_position = b, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && a(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), h(function() {
                a.prettyPhoto.open()
            })
        }, a.prettyPhoto.changeGalleryPage = function(a) {
            "next" == a ? ++currentGalleryPage > totalPage && (currentGalleryPage = 0) : "previous" == a ? --currentGalleryPage < 0 && (currentGalleryPage = totalPage) : currentGalleryPage = a, slide_speed = "next" == a || "previous" == a ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, a.prettyPhoto.startSlideshow = function() {
            void 0 === x ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return a.prettyPhoto.stopSlideshow(), !1
            }), x = setInterval(a.prettyPhoto.startSlideshow, settings.slideshow)) : a.prettyPhoto.changePage("next")
        }, a.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return a.prettyPhoto.startSlideshow(), !1
            }), clearInterval(x), x = void 0
        }, a.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (a.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), a("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                a(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), a(this).remove(), a(window).unbind("scroll.prettyphoto"), d(), settings.callback(), doresize = !0, s = !1, delete settings
            }))
        }, !pp_alreadyInitialized && b() && (pp_alreadyInitialized = !0, hashIndex = b(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            a("a[" + f.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", a.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;
! function(a, b) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
}("undefined" != typeof window ? window : this, function() {
    function a() {}
    var b = a.prototype;
    return b.on = function(a, b) {
        if (a && b) {
            var c = this._events = this._events || {},
                d = c[a] = c[a] || [];
            return -1 == d.indexOf(b) && d.push(b), this
        }
    }, b.once = function(a, b) {
        if (a && b) {
            this.on(a, b);
            var c = this._onceEvents = this._onceEvents || {};
            return (c[a] = c[a] || {})[b] = !0, this
        }
    }, b.off = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = c.indexOf(b);
            return -1 != d && c.splice(d, 1), this
        }
    }, b.emitEvent = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = 0,
                e = c[d];
            b = b || [];
            for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                var g = f && f[e];
                g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
            }
            return this
        }
    }, a
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(c) {
        return b(a, c)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter")) : a.imagesLoaded = b(a, a.EvEmitter)
}(window, function(a, b) {
    function c(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }

    function d(a) {
        var b = [];
        if (Array.isArray(a)) b = a;
        else if ("number" == typeof a.length)
            for (var c = 0; c < a.length; c++) b.push(a[c]);
        else b.push(a);
        return b
    }

    function e(a, b, f) {
        return this instanceof e ? ("string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = c({}, this.options), "function" == typeof b ? f = b : c(this.options, b), f && this.on("always", f), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new e(a, b, f)
    }

    function f(a) {
        this.img = a
    }

    function g(a, b) {
        this.url = a, this.element = b, this.img = new Image
    }
    var h = a.jQuery,
        i = a.console;
    e.prototype = Object.create(b.prototype), e.prototype.options = {}, e.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, e.prototype.addElementImages = function(a) {
        "IMG" == a.nodeName && this.addImage(a), !0 === this.options.background && this.addElementBackgroundImages(a);
        var b = a.nodeType;
        if (b && j[b]) {
            for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                var e = c[d];
                this.addImage(e)
            }
            if ("string" == typeof this.options.background) {
                var f = a.querySelectorAll(this.options.background);
                for (d = 0; d < f.length; d++) {
                    var g = f[d];
                    this.addElementBackgroundImages(g)
                }
            }
        }
    };
    var j = {
        1: !0,
        9: !0,
        11: !0
    };
    return e.prototype.addElementBackgroundImages = function(a) {
        var b = getComputedStyle(a);
        if (b)
            for (var c = /url\((['"])?(.*?)\1\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
                var e = d && d[2];
                e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
            }
    }, e.prototype.addImage = function(a) {
        var b = new f(a);
        this.images.push(b)
    }, e.prototype.addBackground = function(a, b) {
        var c = new g(a, b);
        this.images.push(c)
    }, e.prototype.check = function() {
        function a(a, c, d) {
            setTimeout(function() {
                b.progress(a, c, d)
            })
        }
        var b = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(b) {
            b.once("progress", a), b.check()
        }) : void this.complete()
    }, e.prototype.progress = function(a, b, c) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emitEvent("progress", [this, a, b]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + c, a, b)
    }, e.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(a, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var b = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[b](this)
        }
    }, f.prototype = Object.create(b.prototype), f.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, f.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, f.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emitEvent("progress", [this, this.img, b])
    }, f.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, f.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, f.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, f.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, g.prototype = Object.create(f.prototype), g.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, g.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, g.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emitEvent("progress", [this, this.element, b])
    }, e.makeJQueryPlugin = function(b) {
        (b = b || a.jQuery) && (h = b, h.fn.imagesLoaded = function(a, b) {
            return new e(this, a, b).jqDeferred.promise(h(this))
        })
    }, e.makeJQueryPlugin(), e
}),
function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
    r = '<span class="odometer-value"></span>', o = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + r + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + o + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", k = 0, h = /^\(?([^)]*)\)?(?:(.)(D*)(d*))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, l = 1e3 / i, b = 1e3 / a, p = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, q = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, m = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, t = function(a) {
        var b;
        return b = document.createElement("div"), b.innerHTML = a, b.children[0]
    }, v = function(a, b) {
        return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
    }, s = function(a, b) {
        return v(a, b), a.className += " " + b
    }, z = function(a, b) {
        var c;
        return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
    }, u = function() {
        var a, b;
        return null != (a = null != (b = window.performance) && "function" == typeof b.now ? b.now() : void 0) ? a : +new Date
    }, x = function(a, b) {
        return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
    }, A = function(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }, C = !1, (B = function() {
        var a, b, c, d, e;
        if (!C && null != window.jQuery) {
            for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function(a) {
                var b;
                return b = window.jQuery.fn[a], window.jQuery.fn[a] = function(a) {
                    var c;
                    return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
                }
            }(a));
            return e
        }
    })(), setTimeout(B, 0), n = function() {
        function a(b) {
            var d, e, g, h, i, k, m, n, o, p = this;
            if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
            this.el.odometer = this, m = a.options;
            for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
            null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / l / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
            try {
                for (o = ["innerHTML", "innerText", "textContent"], i = 0, k = o.length; k > i; i++) e = o[i], null != this.el[e] && function(a) {
                    Object.defineProperty(p.el, a, {
                        get: function() {
                            var b;
                            return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
                        },
                        set: function(a) {
                            return p.update(a)
                        }
                    })
                }(e)
            } catch (a) {
                a,
                this.watchForMutations()
            }
        }
        return a.prototype.renderInside = function() {
            return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
        }, a.prototype.watchForMutations = function() {
            var b = this;
            if (null != m) try {
                return null == this.observer && (this.observer = new m(function(a) {
                    var c;
                    return c = b.el.innerText, b.renderInside(), b.render(b.value), b.update(c)
                })), this.watchMutations = !0, this.startWatchingMutations()
            } catch (b) {
                b
            }
        }, a.prototype.startWatchingMutations = function() {
            return this.watchMutations ? this.observer.observe(this.el, {
                childList: !0
            }) : void 0
        }, a.prototype.stopWatchingMutations = function() {
            var a;
            return null != (a = this.observer) ? a.disconnect() : void 0
        }, a.prototype.cleanValue = function(a) {
            var b;
            return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
        }, a.prototype.bindTransitionEnd = function() {
            var a, b, c, d, e, f, g = this;
            if (!this.transitionEndBound) {
                for (this.transitionEndBound = !0, b = !1, e = p.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function() {
                    return !!b || (b = !0, setTimeout(function() {
                        return g.render(), b = !1, z(g.el, "odometerdone")
                    }, 0), !0)
                }, !1));
                return f
            }
        }, a.prototype.resetFormat = function() {
            var a, b, d, e, f, g, i, j, k, l;
            if (a = null != (k = this.options.format) ? k : c, a || (a = "d"), !(f = h.exec(a))) throw new Error("Odometer: Unparsable digit format");
            return l = f.slice(1, 5), j = l[0], i = l[1], d = l[2], e = l[3], b = (null != d ? d.length : void 0) || 0, g = b + (null != e ? e.length : void 0) || 0, this.format = {
                repeating: j,
                radix: i,
                precision: g,
                fractional: b
            }
        }, a.prototype.render = function(a) {
            var b, c, d, e, f, g, h;
            for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", f = this.options.theme, b = this.el.className.split(" "), e = [], g = 0, h = b.length; h > g; g++) c = b[g], c.length && ((d = /^odometer-theme-(.+)$/.exec(c)) ? f = d[1] : /^odometer(-|$)/.test(c) || e.push(c));
            return e.push("odometer"), q || e.push("odometer-no-transitions"), f ? e.push("odometer-theme-" + f) : e.push("odometer-auto-theme"), this.el.className = e.join(" "), this.ribbons = {}, this.formatDigits(a), this.startWatchingMutations()
        }, a.prototype.formatDigits = function(a) {
            var b, c, d, e, f, g, h, i, j, l, m, n;
            if (this.digits = [], this.options.formatFunction)
                for (h = this.options.formatFunction(a), m = h.split("").reverse(), i = 0, l = m.length; l > i; i++) g = m[i], g.match(/[0-9]/) ? (b = this.renderDigit(), b.querySelector(".odometer-value").innerHTML = g, this.digits.push(b), this.insertDigit(b)) : this.addSpacer(g);
            else {
                for (f = Math.abs(a), c = Math.max(this.format.fractional, this.getFractionalDigitCount(f)), c && (f = Math.round(f * Math.pow(10, c))), d = 0; f > 0;) this.addDigit((f % 10).toString(), d >= c), f = Math.floor(f / 10), (d += 1) === c && this.addDigit(".", !0);
                for (e = null != (n = this.options.minIntegerLen) ? n : k, d = j = d - c; e > j; d = j += 1) this.addDigit(0, !0);
                0 > a && this.addDigit("-", !0)
            }
        }, a.prototype.update = function(a) {
            var b, c = this;
            return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? s(this.el, "odometer-animating-up") : s(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function() {
                return c.el.offsetHeight, s(c.el, "odometer-animating")
            }, 0), this.value = a) : void 0
        }, a.prototype.renderDigit = function() {
            return t(d)
        }, a.prototype.insertDigit = function(a, b) {
            return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
        }, a.prototype.addSpacer = function(a, b, c) {
            var d;
            return d = t(g), d.innerHTML = a, c && s(d, c), this.insertDigit(d, b)
        }, a.prototype.addDigit = function(a, b) {
            var c, d, e, f;
            if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
            if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
            if (b)
                for (e = !1;;) {
                    if (!this.format.repeating.length) {
                        if (e) throw new Error("Bad odometer format without digits");
                        this.resetFormat(), e = !0
                    }
                    if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
                    this.addSpacer(c)
                }
            return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
        }, a.prototype.animate = function(a) {
            return q && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
        }, a.prototype.animateCount = function(a) {
            var c, d, e, f, g, h = this;
            if (d = +a - this.value) return f = e = u(), c = this.value, (g = function() {
                var i, j, k;
                return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
            })()
        }, a.prototype.getDigitCount = function() {
            var a, b, c, d, e, f;
            for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
            return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
        }, a.prototype.getFractionalDigitCount = function() {
            var a, b, c, d, e, f, g;
            for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;
            return Math.max.apply(Math, e)
        }, a.prototype.resetDigits = function() {
            return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
        }, a.prototype.animateSlide = function(a) {
            var b, c, d, f, g, h, i, j, l, m, n, o, p, q, r, t, u, v, w, x, y, z, B, C, D, E, F, G, H;
            if (u = this.value, j = Math.max(this.format.fractional, this.getFractionalDigitCount(u, a)), j && (a = Math.round(a * Math.pow(10, j)), u = Math.round(u * Math.pow(10, j))), d = a - u) {
                for (this.bindTransitionEnd(), r = null != (F = this.options.minIntegerLen) ? F : k, f = Math.max(this.getDigitCount(u, a), r + j), g = [], b = 0, n = x = 0; f >= 0 ? f > x : x > f; n = f >= 0 ? ++x : --x) {
                    if (v = A(u / Math.pow(10, f - n - 1)), i = A(a / Math.pow(10, f - n - 1)), h = i - v, Math.abs(h) > this.MAX_VALUES) {
                        for (m = [], o = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = v; h > 0 && i > c || 0 > h && c > i;) m.push(Math.round(c)), c += o;
                        m[m.length - 1] !== i && m.push(i), b++
                    } else m = function() {
                        H = [];
                        for (var a = v; i >= v ? i >= a : a >= i; i >= v ? a++ : a--) H.push(a);
                        return H
                    }.apply(this);
                    for (n = y = 0, B = m.length; B > y; n = ++y) l = m[n], m[n] = Math.abs(l % 10);
                    g.push(m)
                }
                for (this.resetDigits(), G = g.reverse(), n = z = 0, C = G.length; C > z; n = ++z)
                    for (m = G[n], this.digits[n] || this.addDigit(" ", n >= j), null == (w = this.ribbons)[n] && (w[n] = this.digits[n].querySelector(".odometer-ribbon-inner")), this.ribbons[n].innerHTML = "", 0 > d && (m = m.reverse()), p = E = 0, D = m.length; D > E; p = ++E) l = m[p], t = document.createElement("div"), t.className = "odometer-value", t.innerHTML = l, this.ribbons[n].appendChild(t), p === m.length - 1 && s(t, "odometer-last-value"), 0 === p && s(t, "odometer-first-value");
                return 0 > v && this.addDigit("-"), q = this.inside.querySelector(".odometer-radix-mark"), null != q && q.parent.removeChild(q), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
            }
        }, a
    }(), n.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function() {
        var a, b, c, d, e;
        if (window.odometerOptions) {
            d = window.odometerOptions, e = [];
            for (a in d) b = d[a], e.push(null != (c = n.options)[a] ? (c = n.options)[a] : c[a] = b);
            return e
        }
    }, 0), n.init = function() {
        var a, b, c, d, e, f;
        if (null != document.querySelectorAll) {
            for (b = document.querySelectorAll(n.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new n({
                el: a,
                value: null != (e = a.innerText) ? e : a.textContent
            }));
            return f
        }
    }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function() {
        return "complete" === document.readyState && !1 !== n.options.auto && n.init(), null != D ? D.apply(this, arguments) : void 0
    }) : document.addEventListener("DOMContentLoaded", function() {
        return !1 !== n.options.auto ? n.init() : void 0
    }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
        return n
    }) : "undefined" != typeof exports && null !== exports ? module.exports = n : window.Odometer = n
}.call(this), window.requestAnimationFrame || (window.requestAnimationFrame = function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) {
            window.setTimeout(a, 1e3 / 60)
        }
    }()),
    function(a) {
        "use strict";
        var b = window.dfd_native || {};
        window.dfd_native = b, b.window = a(window), b.document = a(document), b.windowHeight = b.window.height(), b.windowWidth = b.window.width(), b.scrollbarWidth = 0, b.windowScrollTop = 0, b.sameOrigin = !0, b.initObjectsSizing = function() {
            var c, d = a("body"),
                e = !1;
            a(window).on("scroll", function() {
                Modernizr.touch || (e || (e = !0, d.addClass("scrolling")), clearTimeout(c), c = setTimeout(function() {
                    d.removeClass("scrolling"), e = !1
                }, 200))
            });
            try {
                b.sameOrigin = window.parent.location.host == window.location.host
            } catch (a) {
                b.sameOrigin = !1
            }
            var f = function() {
                b.windowScrollTop = b.window.scrollTop()
            };
            b.document.ready(function() {
                var a = document.createElement("div");
                a.style.overflowY = "scroll", a.style.width = "50px", a.style.height = "50px", a.style.visibility = "hidden", document.body.appendChild(a), b.scrollbarWidth = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            });
            var g = function() {
                b.windowHeight = b.window.height(), b.windowWidth = b.window.width() + b.scrollbarWidth, f()
            };
            g(), f(), b.window.on("resize load", g).on("scroll", f)
        }, b.initAnimation = function() {
            var c = function() {
                    a('[data-animate="1"]').each(function() {
                        var c, b = a(this);
                        b.data("animate-item") ? (c = b.find(b.data("animate-item")), c.each(function() {
                            a(this).hasClass("animation-done") || a(this).css("opacity", "0")
                        })) : b.hasClass("animation-done") || b.css("opacity", "0")
                    })
                },
                d = function() {
                    a('[data-animate="1"]').each(function() {
                        var c, d, b = a(this),
                            e = "98%";
                        d = b.data("animate-type"), b.data("animate-item") ? (c = b.find(b.data("animate-item")), c.each(function() {
                            var b = a(this);
                            b.waypoint(function() {
                                b.hasClass("animation-done") || b.addClass("animation-done").velocity(d, {
                                    display: "undefined"
                                })
                            }, {
                                offset: e
                            })
                        })) : b.waypoint(function() {
                            b.hasClass("animation-done") || b.addClass("animation-done").velocity(d, {
                                display: "undefined"
                            })
                        }, {
                            offset: e
                        })
                    })
                };
            !Modernizr.touch && b.windowWidth > 1024 && (c(), b.window.on("load", function() {
                d()
            }))
        }, b.initIsotope = function() {
            var c = function() {
                a(".dfd-isotope").each(function() {
                    var b = a(this),
                        c = b.data("mode") ? b.data("mode") : "fitRows";
                    b.isotope({
                        layoutMode: c,
                        itemSelector: ".dfd-iso-item",
                        resizable: !0,
                        sortBy: "original-order"
                    }), b.siblings(".sort-panel").length > 0 && b.siblings(".sort-panel").find(".filter a").on("click", function(c) {
                        c.preventDefault();
                        var d = a(this).attr("data-filter");
                        a(this).parent().parent().find("> li.active").removeClass("active"), a(this).parent().addClass("active"), b.isotope({
                            filter: d
                        }), setTimeout(function() {
                            a("body").trigger("reinit-waypoint")
                        }, 300)
                    })
                })
            };
            b.window.on("load resize", c), b.window.on("load", function() {
                var c = a("#dfd-demos-wrap").data("current-cat");
                c && "" != c && a("#dfd-demos-wrap").find("." + c).length > 0 && (a("#dfd-demos-wrap").find("." + c).click(), setTimeout(function() {
                    b.window.trigger("resize")
                }, 800))
            })
        }, b.initCarousel = function() {
            b.document.ready(function() {
                a("#dfd-main-slider, .dfd-fade-carousel-wrapper").slick({
                    infinite: !0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1,
                    dots: !1,
                    autoplay: !0,
                    autoplaySpeed: 2e3,
                    speed: 1500,
                    pauseOnHover: !1,
                    fade: !0
                }), a("#dfd-features-carousel").slick({
                    infinite: !0,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: !1,
                    dots: !1,
                    autoplay: !0,
                    autoplaySpeed: 2e3,
                    speed: 1500,
                    pauseOnHover: !1,
                    responsive: [{
                        breakpoint: 1281,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: !0,
                            arrows: !1,
                            dots: !1,
                            vertical: !1
                        }
                    }, {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: !0,
                            arrows: !1,
                            dots: !1,
                            vertical: !1
                        }
                    }, {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !1,
                            vertical: !1
                        }
                    }]
                }), a("#dfd-features-carousel").find(".dfd-feature-slide > .cover").on("mousedown selectstart", function(a) {
                    a.preventDefault()
                }), a("#dfd-headers").find(".images-wrapper").slick({
                    infinite: !0,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: !1,
                    autoplay: !0,
                    autoplaySpeed: 2e3,
                    speed: 500,
                    pauseOnHover: !1,
                    dots: !0,
                    dotsClass: "dfd-slick-dots",
                    customPaging: function(a, b) {
                        return '<span data-role="none" role="button" aria-required="false" tabindex="0"></span>'
                    },
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: !0,
                            arrows: !1,
                            dots: !1,
                            vertical: !1
                        }
                    }, {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: !1,
                            dots: !1,
                            vertical: !1
                        }
                    }, {
                        breakpoint: 300,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !1,
                            vertical: !1
                        }
                    }]
                }), a("#dfd-testimonials").find(".reviews-wrapper").slick({
                    infinite: !0,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: !1,
                    autoplay: !0,
                    autoplaySpeed: 2e3,
                    speed: 500,
                    pauseOnHover: !1,
                    dots: !0,
                    dotsClass: "dfd-slick-dots",
                    customPaging: function(a, b) {
                        return '<span data-role="none" role="button" aria-required="false" tabindex="0"></span>'
                    },
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !0,
                            vertical: !1
                        }
                    }, {
                        breakpoint: 650,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !0,
                            vertical: !1
                        }
                    }]
                }), a("#dfd-layout-types").find(".dfd-layouts-wrapper").slick({
                    infinite: !0,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: !1,
                    autoplay: !0,
                    autoplaySpeed: 2e3,
                    speed: 500,
                    pauseOnHover: !1,
                    dots: !0,
                    dotsClass: "dfd-slick-dots",
                    customPaging: function(a, b) {
                        return '<span data-role="none" role="button" aria-required="false" tabindex="0"></span>'
                    },
                    responsive: [{
                        breakpoint: 1e3,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !1,
                            vertical: !1
                        }
                    }, {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !1,
                            vertical: !1
                        }
                    }]
                })
            })
        }, b.initEqualHeights = function() {
            var c = a(".dfd-equal-heights"),
                d = function() {
                    c.each(function() {
                        var c = a(this),
                            d = c.data("responsive-width") ? c.data("responsive-width") : 799,
                            e = c.find(".dfd-equal-heights-item");
                        c.hasClass("mobile-destroy-equal-heights") ? b.windowWidth > d ? e.equalHeights() : e.equalHeightsDestroy() : e.equalHeights()
                    })
                };
            b.window.on("load resize", function() {
                d(), c.imagesLoaded().done(function() {
                    d()
                })
            })
        }, b.initLightbox = function() {
            var c = function() {
                var b = !!a("body").hasClass("dfd-pp-deeplinks");
                window.location.href, a(".pp_details .ppt").length && a(".pp_details .ppt").text();
                a("a[data-rel^='prettyPhoto'], a.zoom-link, a.thumbnail, a[class^='prettyPhoto'], a[rel^='prettyPhoto']").prettyPhoto({
                    hook: "data-rel",
                    show_title: !0,
                    deeplinking: b,
                    opacity: 1,
                    animation_speed: "fast",
                    theme: "dfd-custom-theme",
                    markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#"><i class="dfd-socicon-icon-close-round"></i></a> \t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image"></a> \t\t\t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#"><i class="dfd-socicon-arrow-right-01"><span class="count"></span></i></a> \t\t\t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#"><i class="dfd-socicon-arrow-left-01"><span class="count"></span></i></a> \t\t\t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_overlay"></div>',
                    gallery_markup: '<div class="pp_gallery mobile-hide"> \t\t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div>',
                    changepicturecallback: function() {},
                    social_tools: ""
                })
            };
            b.document.ready(c)
        }, b.initLargeColumns = function() {
            var c = function() {
                a(".half-window-size-column").each(function() {
                    var c = a(this),
                        d = (b.windowWidth - b.scrollbarWidth) / 2,
                        e = c.parent(".row").offset().left,
                        f = "marginLeft",
                        g = c.data("responsive-width") ? c.data("responsive-width") : 799;
                    c.prev(".columns").length > 0 && (f = "marginRight"), b.windowWidth > g ? (c.css("width", d), c.css(f, -e)) : (c.css("width", ""), c.css(f, ""))
                })
            };
            b.window.on("load resize", function() {
                c(), setTimeout(function() {
                    c()
                }, 60)
            })
        }, b.initAnimatedBg = function() {
            b.document.ready(function() {
                a(".dfd_animated_bg").each(function() {
                    var c = a(this),
                        d = c.data("direction"),
                        e = 100 - c.data("parallax_sense"),
                        f = 0,
                        g = !(!c.data("mobile_enable") || "1" != c.data("mobile_enable")),
                        h = c.parent().outerWidth(),
                        i = c.parent().outerHeight();
                    if (!(!g && Modernizr.touch && b.windowWidth < 800)) {
                        var j = new Image;
                        j.src = c.css("backgroundImage").replace(/"/g, "").replace(/url\(|\)$/gi, ""), j.onload = function() {
                            "left" == d || "right" == d ? (c.css("width", j.width + h), c.css("height", j.height)) : "top" != d && "bottom" != d || (c.css("height", j.height + i), c.css("width", j.width)), window.requestAnimationFrame(function() {
                                setInterval(function() {
                                    "left" == d || "bottom" == d ? f -= 1 : f += 1, (f < -j.width && "left" == d || f < -j.height && "bottom" == d) && (f = 0), f > 0 && "right" == d && (f = -j.width), f > 0 && "top" == d && (f = -j.height), "left" == d || "right" == d ? c.css({
                                        "-webkit-transform": "translate3d(" + f + "px, 0, 0)",
                                        "-moz-transform": "translate3d(" + f + "px, 0, 0)",
                                        "-o-transform": "translate3d(" + f + "px, 0, 0)",
                                        "-ms-transform": "translate3d(" + f + "px, 0, 0)",
                                        transform: "translate3d(" + f + "px, 0, 0)"
                                    }) : c.css({
                                        "-webkit-transform": "translate3d(0, " + f + "px, 0)",
                                        "-moz-transform": "translate3d(0, " + f + "px, 0)",
                                        "-o-transform": "translate3d(0, " + f + "px, 0)",
                                        "-ms-transform": "translate3d(0, " + f + "px, 0)",
                                        transform: "translate3d(0, " + f + "px, 0)"
                                    })
                                }, e)
                            })
                        }
                    }
                })
            })
        }, b.initSlideParallax = function() {
            var c = function() {
                a(".dfd-slide-parallax-section").each(function() {
                    var b = a(this),
                        c = new Image,
                        d = b.find(".dfd-browser"),
                        e = function() {
                            b.find("img:not(.dfd-browser)").css("width", d.width())
                        };
                    e(), c.src = d.attr("src"), c.onload = function() {
                        e()
                    }
                })
            };
            b.document.ready(function() {
                a(".dfd-slide-parallax-section.animation-fade").each(function() {
                    var b = a(this);
                    b.find(".dfd-slide-parallax-layer").eq(0).addClass("active"), setInterval(function() {
                        b.find(".dfd-slide-parallax-layer.active").next().length > 0 ? b.find(".dfd-slide-parallax-layer.active").removeClass("active").next().addClass("active") : (b.find(".dfd-slide-parallax-layer.active").removeClass("active"), b.find(".dfd-slide-parallax-layer").eq(0).addClass("active"))
                    }, 2500)
                })
            }), b.window.on("load resize", c)
        }, b.initLayersSection = function() {
            a(".dfd-layers-section .dfd-layer").each(function() {
                var b = a(this);
                b.waypoint(function() {
                    b.addClass("active")
                }, {
                    offset: "70%"
                })
            })
        }, b.initTopSectionParallax = function() {
            a(".dfd-parallax-section").each(function() {
                var c = a(this);
                b.window.on("scroll", function(a) {
                    var d = b.windowScrollTop,
                        f = (c.parent().height(), .333 * d);
                    window.requestAnimationFrame(function() {
                        c.css({
                            "-webkit-transform": "translate3d(0," + f + "px,0)",
                            "-moz-transform": "translate3d(0," + f + "px,0)",
                            "-o-transform": "translate3d(0," + f + "px,0)",
                            transform: "translate3d(0," + f + "px,0)"
                        })
                    })
                })
            })
        }, b.initMenuHighlight = function() {
            b.window.on("load scroll", function() {
                a("#dfd-menu .header-menu-wrapper ul li a").each(function() {
                    var c = a(this),
                        d = c.attr("href"),
                        e = a(d).offset().top;
                    d && -1 !== d.indexOf("#") && "#" != d && (b.windowScrollTop + a("body").offset().top >= e ? c.parent().addClass("current").siblings().removeClass("current") : b.windowScrollTop < a("#dfd-demos-wrap").offset().top && c.parent().siblings().removeClass("current"))
                })
            })
        }, b.initStickyFooter = function() {
            b.window.on("load resize", function() {
                var c = 0;
                b.windowWidth > 1024 && (c = a("#footer-wrap").outerHeight()), a("#dfd-content-wrapper").css("marginBottom", c)
            })
        }, b.extras = function() {
            var d, c = window.navigator.userAgent,
                e = c.indexOf("MSIE ");
            if (e > 0 && (d = parseInt(c.substring(e + 5, c.indexOf(".", e)), 10), a("html").addClass("dfd-ie-detected ie-" + d)), c.indexOf("Trident/") > 0) {
                var g = c.indexOf("rv:");
                d = parseInt(c.substring(g + 3, c.indexOf(".", g)), 10), a("html").addClass("dfd-ie-detected ie-" + d)
            }
            var h = c.indexOf("Edge/");
            h > 0 && (d = parseInt(c.substring(h + 5, c.indexOf(".", h)), 10), a("html").addClass("dfd-ie-detected ie-" + d));
            var i = function() {
                b.windowScrollTop > 40 ? (a("#dfd-menu").addClass("small"), a("#dfd-native-fixed-button").addClass("active")) : (a("#dfd-native-fixed-button").removeClass("active"), a("#dfd-menu").removeClass("small"))
            };
            b.document.ready(function() {
                a("body").on("click", "[data-scroll-to]", function(b) {
                    b.preventDefault(), a(window).scrollTo(a(this).data("scroll-to"), {
                        duration: "slow"
                    }), Waypoint.refreshAll()
                }), a("body").on("click", "#sort-panel-toggler", function(b) {
                    b.preventDefault(), a(this).siblings(".filter").toggleClass("active")
                }), i(), b.window.on("resize scroll", i), a(".mobile-menu-trigger").on("click", function(b) {
                    b.preventDefault(), a(this).siblings("ul").toggleClass("active")
                })
            }), b.window.load(function() {
                if (a("#dfd-free-install-popup").length > 0) {
                    a("#dfd-free-install-popup").find(".close-button").on("click", function(b) {
                        b.preventDefault(), a("#dfd-free-install-popup").removeClass("active")
                    }), new Date, Date.now || (Date.now = function() {
                        return (new Date).getTime()
                    });
                    var b = localStorage.getItem("dfdNativePromoPopup"),
                        c = localStorage.getItem("dfdNativePromoPopupDisable"),
                        d = Math.floor(Date.now() / 1e3);
                    if (c) return;
                    b && d - b > 420 ? (setTimeout(function() {
                        a("#dfd-free-install-popup").addClass("active")
                    }, 3e4), localStorage.setItem("dfdNativePromoPopupDisable", 1)) : (localStorage.setItem("dfdNativePromoPopup", d), setTimeout(function() {
                        a("#dfd-free-install-popup").addClass("active")
                    }, 3e4), setTimeout(function() {
                        Math.floor(Date.now() / 1e3), localStorage.getItem("dfdNativePromoPopup");
                        a("#dfd-free-install-popup").addClass("active"), localStorage.setItem("dfdNativePromoPopupDisable", 1)
                    }, 42e4))
                }
            }), a("body").on("reinit-waypoint", function() {
                Waypoint.refreshAll()
            });
            var j = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
            b.window.bind(j, function(b) {
                var c = window.event || b;
                c = c.originalEvent ? c.originalEvent : c, (c.detail ? -40 * c.detail : c.wheelDelta) > 0 ? a("#dfd-menu").removeClass("sticky") : a("#dfd-menu").addClass("sticky")
            })
        }, b.init = function() {
            b.initObjectsSizing(), b.initEqualHeights(), b.initAnimation(), b.initIsotope(), b.initCarousel(), b.initLightbox(), b.initAnimatedBg(), b.initLargeColumns(), b.initSlideParallax(), b.initLayersSection(), b.initTopSectionParallax(), b.initMenuHighlight(), b.initStickyFooter(), b.extras()
        }, b.init()
    }(jQuery);