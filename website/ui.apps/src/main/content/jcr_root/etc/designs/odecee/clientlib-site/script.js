function hideElem() {
    $imgW = $(".line img").width(), $(".archide").removeClass("anmt2"), $(".pcol i, .drk_layer, .pcol h3, .pcol .pv").css("opacity", 0), $(".line").css("width", "0px")
}

function processAnim() {
    $(".drk_layer").delay(500).animate({
        opacity: .7
    }, 200, "linear", function() {
        $(".stp1 .archide").addClass("anmt1"), $(".stp1 .archideLeft").addClass("anmt2").delay(400).queue(function(t) {
            $(".stp1 i").addClass("bounceIn"), t(), $(".stp1 h3, .stp1 .pv").animate({
                opacity: 1
            }), $(".stp1 .points").animate({
                opacity: .2
            }), $(".stp1 .points").addClass("hvr"), $(".stp1 .line").delay(300).animate({
                width: $imgW
            }, 200, "linear", function() {
                $(".stp2 .archide").addClass("anmt1"), $(".stp2 .archideLeft").addClass("anmt2").delay(400).queue(function(t) {
                    $(".stp2 i").addClass("bounceIn"), t(), $(".stp2 h3, .stp2 .pv").animate({
                        opacity: 1
                    }), $(".stp2 .points").animate({
                        opacity: .2
                    }), $(".stp2 .points").addClass("hvr"), $(".stp2 .line").delay(300).animate({
                        width: $imgW
                    }, 200, "linear", function() {
                        $(".stp3 .archide").addClass("anmt1"), $(".stp3 .archideLeft").addClass("anmt2").delay(400).queue(function(t) {
                            $(".stp3 i").addClass("bounceIn"), t(), $(".stp3 h3, .stp3 .pv").animate({
                                opacity: 1
                            }), $(".stp3 .points").animate({
                                opacity: .2
                            }), $(".stp3 .points").addClass("hvr"), $(".stp3 .line").delay(300).animate({
                                width: $imgW
                            }, 200, "linear", function() {
                                $(".stp4 .archide").addClass("anmt1"), $(".stp4 .archideLeft").addClass("anmt2").delay(400).queue(function(t) {
                                    $(".stp4 i").addClass("bounceIn"), t(), $(".stp4 h3, .stp4 .pv").animate({
                                        opacity: 1
                                    }), $(".stp4 .points").animate({
                                        opacity: .2
                                    }), $(".stp4 .points").addClass("hvr"), $(".stp4 .line").delay(300).animate({
                                        width: $imgW
                                    }, 200, "linear", function() {
                                        $(".stp5 .archide").addClass("anmt1"), $(".stp5 .archideLeft").addClass("anmt2").delay(400).queue(function(t) {
                                            $(".stp5 i").addClass("bounceIn"), t(), $(".stp5 h3, .stp5 .pv").animate({
                                                opacity: 1
                                            }), $(".stp5 .points").animate({
                                                opacity: .2
                                            }), $(".stp5 .points").addClass("hvr")
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}! function(t, e, i, n) {
    "use strict";

    function s(t) {
        return ("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
    }
    var a = function(e) {
        for (var i = e.length, n = t("head"); i--;) 0 === n.has("." + e[i]).length && n.append('<meta class="' + e[i] + '" />')
    };
    a(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function() {
        "undefined" != typeof FastClick && "undefined" != typeof i.body && FastClick.attach(i.body)
    });
    var o = function(e, n) {
            if ("string" == typeof e) {
                if (n) {
                    var s;
                    if (n.jquery) {
                        if (s = n[0], !s) return n
                    } else s = n;
                    return t(s.querySelectorAll(e))
                }
                return t(i.querySelectorAll(e))
            }
            return t(e, n)
        },
        r = function(t) {
            var e = [];
            return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
        },
        l = function(t) {
            for (var e = t.split("-"), i = e.length, n = []; i--;) 0 !== i ? n.push(e[i]) : this.namespace.length > 0 ? n.push(this.namespace, e[i]) : n.push(e[i]);
            return n.reverse().join("-")
        },
        d = function(e, i) {
            var n = this,
                s = !o(this).data(this.attr_name(!0));
            return o(this.scope).is("[" + this.attr_name() + "]") ? (o(this.scope).data(this.attr_name(!0) + "-init", t.extend({}, this.settings, i || e, this.data_options(o(this.scope)))), s && this.events(this.scope)) : o("[" + this.attr_name() + "]", this.scope).each(function() {
                var s = !o(this).data(n.attr_name(!0) + "-init");
                o(this).data(n.attr_name(!0) + "-init", t.extend({}, n.settings, i || e, n.data_options(o(this)))), s && n.events(this)
            }), "string" == typeof e ? this[e].call(this, i) : void 0
        },
        c = function(t, e) {
            function i() {
                e(t[0])
            }

            function n() {
                if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var t = this.attr("src"),
                        e = t.match(/\?/) ? "&" : "?";
                    e += "random=" + (new Date).getTime(), this.attr("src", t + e)
                }
            }
            return t.attr("src") ? void(t[0].complete || 4 === t[0].readyState ? i() : n.call(t)) : void i()
        };
    e.matchMedia = e.matchMedia || function(t) {
            var e, i = t.documentElement,
                n = i.firstElementChild || i.firstChild,
                s = t.createElement("body"),
                a = t.createElement("div");
            return a.id = "mq-test-1", a.style.cssText = "position:absolute;top:-100em", s.style.background = "none", s.appendChild(a),
                function(t) {
                    return a.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(s, n), e = 42 === a.offsetWidth, i.removeChild(s), {
                        matches: e,
                        media: t
                    }
                }
        }(i),
        function() {
            function t() {
                i && (a(t), r && jQuery.fx.tick())
            }
            for (var i, n = 0, s = ["webkit", "moz"], a = e.requestAnimationFrame, o = e.cancelAnimationFrame, r = "undefined" != typeof jQuery.fx; n < s.length && !a; n++) a = e[s[n] + "RequestAnimationFrame"], o = o || e[s[n] + "CancelAnimationFrame"] || e[s[n] + "CancelRequestAnimationFrame"];
            a ? (e.requestAnimationFrame = a, e.cancelAnimationFrame = o, r && (jQuery.fx.timer = function(e) {
                e() && jQuery.timers.push(e) && !i && (i = !0, t())
            }, jQuery.fx.stop = function() {
                i = !1
            })) : (e.requestAnimationFrame = function(t) {
                var i = (new Date).getTime(),
                    s = Math.max(0, 16 - (i - n)),
                    a = e.setTimeout(function() {
                        t(i + s)
                    }, s);
                return n = i + s, a
            }, e.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }(jQuery), e.Foundation = {
            name: "Foundation",
            version: "5.3.0",
            media_queries: {
                small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
            },
            stylesheet: t("<style></style>").appendTo("head")[0].sheet,
            global: {
                namespace: n
            },
            init: function(t, e, i, n, s) {
                var a = [t, i, n, s],
                    r = [];
                if (this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), e && "string" == typeof e && !/reflow/i.test(e)) this.libs.hasOwnProperty(e) && r.push(this.init_lib(e, a));
                else
                    for (var l in this.libs) r.push(this.init_lib(l, e));
                return t
            },
            init_lib: function(e, i) {
                return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]), i && i.hasOwnProperty(e) ? ("undefined" != typeof this.libs[e].settings ? t.extend(!0, this.libs[e].settings, i[e]) : "undefined" != typeof this.libs[e].defaults && t.extend(!0, this.libs[e].defaults, i[e]), this.libs[e].init.apply(this.libs[e], [this.scope, i[e]])) : (i = i instanceof Array ? i : new Array(i), this.libs[e].init.apply(this.libs[e], i))) : function() {}
            },
            patch: function(t) {
                t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = r, t.add_namespace = l, t.bindings = d, t.S = this.utils.S
            },
            inherit: function(t, e) {
                for (var i = e.split(" "), n = i.length; n--;) this.utils.hasOwnProperty(i[n]) && (t[i[n]] = this.utils[i[n]])
            },
            set_namespace: function() {
                var e = this.global.namespace === n ? t(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                this.global.namespace = e === n || /false/i.test(e) ? "" : e
            },
            libs: {},
            utils: {
                S: o,
                throttle: function(t, e) {
                    var i = null;
                    return function() {
                        var n = this,
                            s = arguments;
                        null == i && (i = setTimeout(function() {
                            t.apply(n, s), i = null
                        }, e))
                    }
                },
                debounce: function(t, e, i) {
                    var n, s;
                    return function() {
                        var a = this,
                            o = arguments,
                            r = function() {
                                n = null, i || (s = t.apply(a, o))
                            },
                            l = i && !n;
                        return clearTimeout(n), n = setTimeout(r, e), l && (s = t.apply(a, o)), s
                    }
                },
                data_options: function(e, i) {
                    function n(t) {
                        return !isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
                    }

                    function s(e) {
                        return "string" == typeof e ? t.trim(e) : e
                    }
                    i = i || "options";
                    var a, o, r, l = {},
                        d = function(t) {
                            var e = Foundation.global.namespace;
                            return t.data(e.length > 0 ? e + "-" + i : i)
                        },
                        c = d(e);
                    if ("object" == typeof c) return c;
                    for (r = (c || ":").split(";"), a = r.length; a--;) o = r[a].split(":"), o = [o[0], o.slice(1).join(":")], /true/i.test(o[1]) && (o[1] = !0), /false/i.test(o[1]) && (o[1] = !1), n(o[1]) && (o[1] = -1 === o[1].indexOf(".") ? parseInt(o[1], 10) : parseFloat(o[1])), 2 === o.length && o[0].length > 0 && (l[s(o[0])] = s(o[1]));
                    return l
                },
                register_media: function(e, i) {
                    Foundation.media_queries[e] === n && (t("head").append('<meta class="' + i + '"/>'), Foundation.media_queries[e] = s(t("." + i).css("font-family")))
                },
                add_custom_rule: function(t, e) {
                    if (e === n && Foundation.stylesheet) Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);
                    else {
                        var i = Foundation.media_queries[e];
                        i !== n && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }")
                    }
                },
                image_loaded: function(t, e) {
                    var i = this,
                        n = t.length;
                    0 === n && e(t), t.each(function() {
                        c(i.S(this), function() {
                            n -= 1, 0 === n && e(t)
                        })
                    })
                },
                random_str: function() {
                    return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                }
            }
        }, t.fn.foundation = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                return Foundation.init.apply(Foundation, [this].concat(t)), this
            })
        }
}(jQuery, window, window.document),
function(t, e, i) {
    "use strict";
    Foundation.libs.abide = {
        name: "abide",
        version: "5.3.0",
        settings: {
            live_validate: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(t) {
                    var e = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                        n = t.value,
                        s = e === n;
                    return s
                }
            }
        },
        timer: null,
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function(e) {
            var i = this,
                n = i.S(e).attr("novalidate", "novalidate"),
                s = n.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"), n.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(t) {
                var e = /ajax/i.test(i.S(this).attr(i.attr_name()));
                return i.validate(i.S(this).find("input, textarea, select").get(), t, e)
            }).on("reset", function() {
                return i.reset(t(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(t) {
                i.validate([this], t)
            }).on("keydown.fndtn.abide", function(t) {
                s.live_validate === !0 && (clearTimeout(i.timer), i.timer = setTimeout(function() {
                    i.validate([this], t)
                }.bind(this), s.timeout))
            })
        },
        reset: function(e) {
            e.removeAttr(this.invalid_attr), t(this.invalid_attr, e).removeAttr(this.invalid_attr), t(".error", e).not("small").removeClass("error")
        },
        validate: function(t, e, i) {
            var n = this.parse_patterns(t),
                s = n.length,
                a = this.S(t[0]).closest("[data-" + this.attr_name(!0) + "]"),
                o = a.data(this.attr_name(!0) + "-init") || {},
                r = /submit/.test(e.type);
            a.trigger("validated").trigger("validated.fndtn.abide");
            for (var l = 0; s > l; l++)
                if (!n[l] && (r || i)) return o.focus_on_invalid && t[l].focus(), a.trigger("invalid").trigger("invalid.fndtn.abide"), this.S(t[l]).closest("[data-" + this.attr_name(!0) + "]").attr(this.invalid_attr, ""), !1;
            return (r || i) && a.trigger("valid").trigger("valid.fndtn.abide"), a.removeAttr(this.invalid_attr), i ? !1 : !0
        },
        parse_patterns: function(t) {
            for (var e = t.length, i = []; e--;) i.push(this.pattern(t[e]));
            return this.check_validation_and_apply_styles(i)
        },
        pattern: function(t) {
            var e = t.getAttribute("type"),
                i = "string" == typeof t.getAttribute("required"),
                n = t.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(n) && n.length > 0 ? [t, this.settings.patterns[n], i] : n.length > 0 ? [t, new RegExp("^" + n + "$"), i] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], i] : (n = /.*/, [t, n, i])
        },
        check_validation_and_apply_styles: function(e) {
            for (var i = e.length, n = [], s = this.S(e[0][0]).closest("[data-" + this.attr_name(!0) + "]"), a = s.data(this.attr_name(!0) + "-init") || {}; i--;) {
                var o, r, l = e[i][0],
                    d = e[i][2],
                    c = l.value.trim(),
                    h = this.S(l).parent(),
                    u = l.getAttribute(this.add_namespace("data-abide-validator")),
                    p = "radio" === l.type,
                    f = "checkbox" === l.type,
                    g = this.S('label[for="' + l.getAttribute("id") + '"]'),
                    m = d ? l.value.length > 0 : !0;
                l.getAttribute(this.add_namespace("data-equalto")) && (u = "equalTo"), o = h.is("label") ? h.parent() : h, p && d ? n.push(this.valid_radio(l, d)) : f && d ? n.push(this.valid_checkbox(l, d)) : u ? (r = this.settings.validators[u].apply(this, [l, d, o]), n.push(r), r ? (this.S(l).removeAttr(this.invalid_attr), o.removeClass("error")) : (this.S(l).attr(this.invalid_attr, ""), o.addClass("error"))) : e[i][1].test(c) && m || !d && l.value.length < 1 || t(l).attr("disabled") ? (this.S(l).removeAttr(this.invalid_attr), o.removeClass("error"), g.length > 0 && a.error_labels && g.removeClass("error"), n.push(!0), t(l).triggerHandler("valid")) : (this.S(l).attr(this.invalid_attr, ""), o.addClass("error"), g.length > 0 && a.error_labels && g.addClass("error"), n.push(!1), t(l).triggerHandler("invalid"))
            }
            return n
        },
        valid_checkbox: function(t, e) {
            var t = this.S(t),
                i = t.is(":checked") || !e;
            return i ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), i
        },
        valid_radio: function(t) {
            for (var e = t.getAttribute("name"), i = this.S(t).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + e + "']"), n = i.length, s = !1, a = 0; n > a; a++) i[a].checked && (s = !0);
            for (var a = 0; n > a; a++) s ? this.S(i[a]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(i[a]).attr(this.invalid_attr, "").parent().addClass("error");
            return s
        },
        valid_equal: function(t, e, n) {
            var s = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                a = t.value,
                o = s === a;
            return o ? (this.S(t).removeAttr(this.invalid_attr), n.removeClass("error")) : (this.S(t).attr(this.invalid_attr, ""), n.addClass("error")), o
        },
        valid_oneof: function(t, e, i, n) {
            var t = this.S(t),
                s = this.S("[" + this.add_namespace("data-oneof") + "]"),
                a = s.filter(":checked").length > 0;
            if (a ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), !n) {
                var o = this;
                s.each(function() {
                    o.valid_oneof.call(o, this, null, null, !0)
                })
            }
            return a
        }
    }
}(jQuery, window, window.document),
function(t) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.3.0",
        settings: {
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function() {
            var e = this,
                i = this.S;
            i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function(n) {
                var s = i(this).closest("[" + e.attr_name() + "]"),
                    a = i("#" + this.href.split("#")[1]),
                    o = i("dd > .content", s),
                    r = t("dd", s),
                    l = e.attr_name() + "=" + s.attr(e.attr_name()),
                    d = s.data(e.attr_name(!0) + "-init"),
                    c = i("dd > .content." + d.active_class, s);
                return n.preventDefault(), s.attr(e.attr_name()) && (o = o.add("[" + l + "] dd > .content"), r = r.add("[" + l + "] dd")), d.toggleable && a.is(c) ? (a.parent("dd").toggleClass(d.active_class, !1), a.toggleClass(d.active_class, !1), d.callback(a), a.triggerHandler("toggled", [s]), void s.triggerHandler("toggled", [a])) : (d.multi_expand || (o.removeClass(d.active_class), r.removeClass(d.active_class)), a.addClass(d.active_class).parent().addClass(d.active_class), d.callback(a), a.triggerHandler("toggled", [s]), void s.triggerHandler("toggled", [a]))
            })
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.3.0",
        settings: {
            callback: function() {}
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function() {
            var e = this,
                i = this.S;
            t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] a.close", function(t) {
                var n = i(this).closest("[" + e.attr_name() + "]"),
                    s = n.data(e.attr_name(!0) + "-init") || e.settings;
                t.preventDefault(), Modernizr.csstransitions ? (n.addClass("alert-close"), n.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                    i(this).trigger("close").trigger("close.fndtn.alert").remove(), s.callback()
                })) : n.fadeOut(300, function() {
                    i(this).trigger("close").trigger("close.fndtn.alert").remove(), s.callback()
                })
            })
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e, i, n) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.3.0",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function(t, e, i) {
            var n = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(e, i), n.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(n.S("li", this.scope)) : n.S("[" + this.attr_name() + "]", this.scope).each(function() {
                n.assemble(n.S("li", this))
            })
        },
        events: function(n) {
            var s = this,
                a = s.S,
                o = t(".scroll-container");
            o.length > 0 && (this.scope = o), a(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(t, e, i) {
                var e = e || a(this),
                    i = i || e,
                    n = e.next("li"),
                    o = e.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init"),
                    r = a(t.target);
                t.preventDefault(), o || (s.init(), o = e.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init")), i.hasClass("visible") && e[0] === i[0] && n.length > 0 && s.is_open(e) && (i = n, r = a("img", i)), s.open(r, e, i), s.update_paddles(i)
            }).on("click.fndtn.clearing", ".clearing-main-next", function(t) {
                s.nav(t, "next")
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(t) {
                s.nav(t, "prev")
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(t) {
                Foundation.libs.clearing.close(t, this)
            }), t(i).on("keydown.fndtn.clearing", function(t) {
                s.keydown(t)
            }), a(e).off(".clearing").on("resize.fndtn.clearing", function() {
                s.resize()
            }), this.swipe_events(n)
        },
        swipe_events: function() {
            var t = this,
                e = t.S;
            e(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(t) {
                t.touches || (t = t.originalEvent);
                var i = {
                    start_page_x: t.touches[0].pageX,
                    start_page_y: t.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: n
                };
                e(this).data("swipe-transition", i), t.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function(i) {
                if (i.touches || (i = i.originalEvent), !(i.touches.length > 1 || i.scale && 1 !== i.scale)) {
                    var n = e(this).data("swipe-transition");
                    if ("undefined" == typeof n && (n = {}), n.delta_x = i.touches[0].pageX - n.start_page_x, Foundation.rtl && (n.delta_x = -n.delta_x), "undefined" == typeof n.is_scrolling && (n.is_scrolling = !!(n.is_scrolling || Math.abs(n.delta_x) < Math.abs(i.touches[0].pageY - n.start_page_y))), !n.is_scrolling && !n.active) {
                        i.preventDefault();
                        var s = n.delta_x < 0 ? "next" : "prev";
                        n.active = !0, t.nav(i, s)
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(t) {
                e(this).data("swipe-transition", {}), t.stopPropagation()
            })
        },
        assemble: function(e) {
            var i = e.parent();
            if (!i.parent().hasClass("carousel")) {
                i.after('<div id="foundationClearingHolder"></div>');
                var n = i.detach(),
                    s = "";
                if (null != n[0]) {
                    s = n[0].outerHTML;
                    var a = this.S("#foundationClearingHolder"),
                        o = i.data(this.attr_name(!0) + "-init"),
                        r = {
                            grid: '<div class="carousel">' + s + "</div>",
                            viewing: o.templates.viewing
                        },
                        l = '<div class="clearing-assembled"><div>' + r.viewing + r.grid + "</div></div>",
                        d = this.settings.touch_label;
                    Modernizr.touch && (l = t(l).find(".clearing-touch-label").html(d).end()), a.after(l).remove()
                }
            }
        },
        open: function(e, n, s) {
            function a() {
                setTimeout(function() {
                    this.image_loaded(u, function() {
                        1 !== u.outerWidth() || f ? o.call(this, u) : a.call(this)
                    }.bind(this))
                }.bind(this), 100)
            }

            function o(e) {
                var i = t(e);
                i.css("visibility", "visible"), l.css("overflow", "hidden"), d.addClass("clearing-blackout"), c.addClass("clearing-container"), h.show(), this.fix_height(s).caption(r.S(".clearing-caption", h), r.S("img", s)).center_and_label(e, p).shift(n, s, function() {
                    s.closest("li").siblings().removeClass("visible"), s.closest("li").addClass("visible")
                }), h.trigger("opened.fndtn.clearing")
            }
            var r = this,
                l = t(i.body),
                d = s.closest(".clearing-assembled"),
                c = r.S("div", d).first(),
                h = r.S(".visible-img", c),
                u = r.S("img", h).not(e),
                p = r.S(".clearing-touch-label", c),
                f = !1;
            u.error(function() {
                f = !0
            }), this.locked() || (h.trigger("open.fndtn.clearing"), u.attr("src", this.load(e)).css("visibility", "hidden"), a.call(this))
        },
        close: function(e, n) {
            e.preventDefault();
            var s, a, o = function(t) {
                    return /blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
                }(t(n)),
                r = t(i.body);
            return n === e.target && o && (r.css("overflow", ""), s = t("div", o).first(), a = t(".visible-img", s), a.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", o).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), s.removeClass("clearing-container"), a.hide(), a.trigger("closed.fndtn.clearing")), !1
        },
        is_open: function(t) {
            return t.parent().prop("style").length > 0
        },
        keydown: function(e) {
            var i = t(".clearing-blackout ul[" + this.attr_name() + "]"),
                n = this.rtl ? 37 : 39,
                s = this.rtl ? 39 : 37,
                a = 27;
            e.which === n && this.go(i, "next"), e.which === s && this.go(i, "prev"), e.which === a && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
        },
        nav: function(e, i) {
            var n = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
            e.preventDefault(), this.go(n, i)
        },
        resize: function() {
            var e = t("img", ".clearing-blackout .visible-img"),
                i = t(".clearing-touch-label", ".clearing-blackout");
            e.length && (this.center_and_label(e, i), e.trigger("resized.fndtn.clearing"))
        },
        fix_height: function(t) {
            var e = t.parent().children(),
                i = this;
            return e.each(function() {
                var t = i.S(this),
                    e = t.find("img");
                t.height() > e.outerHeight() && t.addClass("fix-height")
            }).closest("ul").width(100 * e.length + "%"), this
        },
        update_paddles: function(t) {
            t = t.closest("li");
            var e = t.closest(".carousel").siblings(".visible-img");
            t.next().length > 0 ? this.S(".clearing-main-next", e).removeClass("disabled") : this.S(".clearing-main-next", e).addClass("disabled"), t.prev().length > 0 ? this.S(".clearing-main-prev", e).removeClass("disabled") : this.S(".clearing-main-prev", e).addClass("disabled")
        },
        center_and_label: function(t, e) {
            return this.rtl ? (t.css({
                marginRight: -(t.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2),
                left: "auto",
                right: "50%"
            }), e.length > 0 && e.css({
                marginRight: -(e.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10,
                left: "auto",
                right: "50%"
            })) : (t.css({
                marginLeft: -(t.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2)
            }), e.length > 0 && e.css({
                marginLeft: -(e.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10
            })), this
        },
        load: function(t) {
            var e;
            return e = "A" === t[0].nodeName ? t.attr("href") : t.parent().attr("href"), this.preload(t), e ? e : t.attr("src")
        },
        preload: function(t) {
            this.img(t.closest("li").next()).img(t.closest("li").prev())
        },
        img: function(t) {
            if (t.length) {
                var e = new Image,
                    i = this.S("a", t);
                e.src = i.length ? i.attr("href") : this.S("img", t).attr("src")
            }
            return this
        },
        caption: function(t, e) {
            var i = e.attr("data-caption");
            return i ? t.html(i).show() : t.text("").hide(), this
        },
        go: function(t, e) {
            var i = this.S(".visible", t),
                n = i[e]();
            n.length && this.S("img", n).trigger("click", [i, n]).trigger("click.fndtn.clearing", [i, n]).trigger("change.fndtn.clearing")
        },
        shift: function(t, e, i) {
            var n, s = e.parent(),
                a = this.settings.prev_index || e.index(),
                o = this.direction(s, t, e),
                r = this.rtl ? "right" : "left",
                l = parseInt(s.css("left"), 10),
                d = e.outerWidth(),
                c = {};
            e.index() === a || /skip/.test(o) ? /skip/.test(o) && (n = e.index() - this.settings.up_count, this.lock(), n > 0 ? (c[r] = -(n * d), s.animate(c, 300, this.unlock())) : (c[r] = 0, s.animate(c, 300, this.unlock()))) : /left/.test(o) ? (this.lock(), c[r] = l + d, s.animate(c, 300, this.unlock())) : /right/.test(o) && (this.lock(), c[r] = l - d, s.animate(c, 300, this.unlock())), i()
        },
        direction: function(t, e, i) {
            var n, s = this.S("li", t),
                a = s.outerWidth() + s.outerWidth() / 4,
                o = Math.floor(this.S(".clearing-container").outerWidth() / a) - 1,
                r = s.index(i);
            return this.settings.up_count = o, n = this.adjacent(this.settings.prev_index, r) ? r > o && r > this.settings.prev_index ? "right" : r > o - 1 && r <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = r, n
        },
        adjacent: function(t, e) {
            for (var i = e + 1; i >= e - 1; i--)
                if (i === t) return !0;
            return !1
        },
        lock: function() {
            this.settings.locked = !0
        },
        unlock: function() {
            this.settings.locked = !1
        },
        locked: function() {
            return this.settings.locked
        },
        off: function() {
            this.S(this.scope).off(".fndtn.clearing"), this.S(e).off(".fndtn.clearing")
        },
        reflow: function() {
            this.init()
        }
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.3.0",
        settings: {
            active_class: "open",
            align: "bottom",
            is_hover: !1,
            opened: function() {},
            closed: function() {}
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "throttle"), this.bindings(e, i)
        },
        events: function() {
            var i = this,
                n = i.S;
            n(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(e) {
                var s = n(this).data(i.attr_name(!0) + "-init") || i.settings;
                (!s.is_hover || Modernizr.touch) && (e.preventDefault(), i.toggle(t(this)))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(t) {
                var e, s, a = n(this);
                clearTimeout(i.timeout), a.data(i.data_attr()) ? (e = n("#" + a.data(i.data_attr())), s = a) : (e = a, s = n("[" + i.attr_name() + "='" + e.attr("id") + "']"));
                var o = s.data(i.attr_name(!0) + "-init") || i.settings;
                n(t.target).data(i.data_attr()) && o.is_hover && i.closeall.call(i), o.is_hover && i.open.apply(i, [e, s])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                var t = n(this);
                i.timeout = setTimeout(function() {
                    if (t.data(i.data_attr())) {
                        var e = t.data(i.data_attr(!0) + "-init") || i.settings;
                        e.is_hover && i.close.call(i, n("#" + t.data(i.data_attr())))
                    } else {
                        var s = n("[" + i.attr_name() + '="' + n(this).attr("id") + '"]'),
                            e = s.data(i.attr_name(!0) + "-init") || i.settings;
                        e.is_hover && i.close.call(i, t)
                    }
                }.bind(this), 150)
            }).on("click.fndtn.dropdown", function(e) {
                var s = n(e.target).closest("[" + i.attr_name() + "-content]");
                return n(e.target).data(i.data_attr()) || n(e.target).parent().data(i.data_attr()) ? void 0 : !n(e.target).data("revealId") && s.length > 0 && (n(e.target).is("[" + i.attr_name() + "-content]") || t.contains(s.first()[0], e.target)) ? void e.stopPropagation() : void i.close.call(i, n("[" + i.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                i.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                i.settings.closed.call(this)
            }), n(e).off(".dropdown").on("resize.fndtn.dropdown", i.throttle(function() {
                i.resize.call(i)
            }, 50)), this.resize()
        },
        close: function(t) {
            var e = this;
            t.each(function() {
                e.S(this).hasClass(e.settings.active_class) && (e.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(e.settings.active_class).prev("[" + e.attr_name() + "]").removeClass(e.settings.active_class).removeData("target"), e.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [t]))
            })
        },
        closeall: function() {
            var e = this;
            t.each(e.S("[" + this.attr_name() + "-content]"), function() {
                e.close.call(e, e.S(this))
            })
        },
        open: function(t, e) {
            this.css(t.addClass(this.settings.active_class), e), t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), t.data("target", e.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [t, e])
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        },
        toggle: function(t) {
            var e = this.S("#" + t.data(this.data_attr()));
            0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t))
        },
        resize: function() {
            var t = this.S("[" + this.attr_name() + "-content].open"),
                e = this.S("[" + this.attr_name() + "='" + t.attr("id") + "']");
            t.length && e.length && this.css(t, e)
        },
        css: function(t, e) {
            var i = Math.max((e.width() - t.width()) / 2, 8);
            if (this.clear_idx(), this.small()) {
                var n = this.dirs.bottom.call(t, e);
                t.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: n.top
                }), t.css(Foundation.rtl ? "right" : "left", i)
            } else {
                var s = e.data(this.attr_name(!0) + "-init") || this.settings;
                this.style(t, e, s)
            }
            return t
        },
        style: function(e, i, n) {
            var s = t.extend({
                position: "absolute"
            }, this.dirs[n.align].call(e, i, n));
            e.attr("style", "").css(s)
        },
        dirs: {
            _base: function(t) {
                var e = this.offsetParent(),
                    i = e.offset(),
                    n = t.offset();
                return n.top -= i.top, n.left -= i.left, n
            },
            top: function(t) {
                var e = Foundation.libs.dropdown,
                    i = e.dirs._base.call(this, t),
                    n = 8;
                return this.addClass("drop-top"), (t.outerWidth() < this.outerWidth() || e.small()) && e.adjust_pip(n, i), Foundation.rtl ? {
                    left: i.left - this.outerWidth() + t.outerWidth(),
                    top: i.top - this.outerHeight()
                } : {
                    left: i.left,
                    top: i.top - this.outerHeight()
                }
            },
            bottom: function(t) {
                var e = Foundation.libs.dropdown,
                    i = e.dirs._base.call(this, t),
                    n = 8;
                return (t.outerWidth() < this.outerWidth() || e.small()) && e.adjust_pip(n, i), e.rtl ? {
                    left: i.left - this.outerWidth() + t.outerWidth(),
                    top: i.top + t.outerHeight()
                } : {
                    left: i.left,
                    top: i.top + t.outerHeight()
                }
            },
            left: function(t) {
                var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                return this.addClass("drop-left"), {
                    left: e.left - this.outerWidth(),
                    top: e.top
                }
            },
            right: function(t) {
                var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                return this.addClass("drop-right"), {
                    left: e.left + t.outerWidth(),
                    top: e.top
                }
            }
        },
        adjust_pip: function(t, e) {
            var i = Foundation.stylesheet;
            this.small() && (t += e.left - 8), this.rule_idx = i.cssRules.length;
            var n = ".f-dropdown.open:before",
                s = ".f-dropdown.open:after",
                a = "left: " + t + "px;",
                o = "left: " + (t - 1) + "px;";
            i.insertRule ? (i.insertRule([n, "{", a, "}"].join(" "), this.rule_idx), i.insertRule([s, "{", o, "}"].join(" "), this.rule_idx + 1)) : (i.addRule(n, a, this.rule_idx), i.addRule(s, o, this.rule_idx + 1))
        },
        clear_idx: function() {
            var t = Foundation.stylesheet;
            this.rule_idx && (t.deleteRule(this.rule_idx), t.deleteRule(this.rule_idx), delete this.rule_idx)
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(e).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.3.0",
        settings: {
            use_tallest: !0,
            before_height_change: t.noop,
            after_height_change: t.noop,
            equalize_on_stack: !1
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "image_loaded"), this.bindings(e, i), this.reflow()
        },
        events: function() {
            this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function() {
                this.reflow()
            }.bind(this))
        },
        equalize: function(e) {
            var i = !1,
                n = e.find("[" + this.attr_name() + "-watch]:visible"),
                s = e.data(this.attr_name(!0) + "-init");
            if (0 !== n.length) {
                var a = n.first().offset().top;
                if (s.before_height_change(), e.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), n.height("inherit"), n.each(function() {
                        var e = t(this);
                        e.offset().top !== a && (i = !0)
                    }), s.equalize_on_stack !== !1 || !i) {
                    var o = n.map(function() {
                        return t(this).outerHeight(!1)
                    }).get();
                    if (s.use_tallest) {
                        var r = Math.max.apply(null, o);
                        n.css("height", r)
                    } else {
                        var l = Math.min.apply(null, o);
                        n.css("height", l)
                    }
                    s.after_height_change(), e.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                }
            }
        },
        reflow: function() {
            var e = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var i = t(this);
                e.image_loaded(e.S("img", this), function() {
                    e.equalize(i)
                })
            })
        }
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.3.0",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                medium: Foundation.media_queries.medium,
                large: Foundation.media_queries.large,
                xlarge: Foundation.media_queries.xlarge,
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(e, i, n) {
                    if (/IMG/.test(e[0].nodeName)) {
                        var s = e[0].src;
                        if (new RegExp(i, "i").test(s)) return;
                        return e[0].src = i, n(e[0].src)
                    }
                    var a = e.data(this.data_attr + "-last-path"),
                        o = this;
                    return a != i ? /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i) ? (t(e).css("background-image", "url(" + i + ")"), e.data("interchange-last-path", i), n(i)) : t.get(i, function(t) {
                        e.html(t), e.data(o.data_attr + "-last-path", i), n()
                    }) : void 0
                }
            }
        },
        init: function(e, i, n) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, i, n), this.bindings(i, n), this.load("images"), this.load("nodes")
        },
        get_media_hash: function() {
            var t = "";
            for (var e in this.settings.named_queries) t += matchMedia(this.settings.named_queries[e]).matches.toString();
            return t
        },
        events: function() {
            var i, n = this;
            return t(e).off(".interchange").on("resize.fndtn.interchange", n.throttle(function() {
                var t = n.get_media_hash();
                t !== i && n.resize(), i = t
            }, 50)), this
        },
        resize: function() {
            var e = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(t.proxy(this.resize, this), 50);
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var n = this.results(i, e[i]);
                    n && this.settings.directives[n.scenario[1]].call(this, n.el, n.scenario[0], function() {
                        if (arguments[0] instanceof Array) var t = arguments[0];
                        else var t = Array.prototype.slice.call(arguments, 0);
                        n.el.trigger(n.scenario[1], t)
                    })
                }
        },
        results: function(t, e) {
            var i = e.length;
            if (i > 0)
                for (var n = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); i--;) {
                    var s, a = e[i][2];
                    if (s = matchMedia(this.settings.named_queries.hasOwnProperty(a) ? this.settings.named_queries[a] : a), s.matches) return {
                        el: n,
                        scenario: e[i]
                    }
                }
            return !1
        },
        load: function(t, e) {
            return ("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
        },
        update_images: function() {
            var t = this.S("img[" + this.data_attr + "]"),
                e = t.length,
                i = e,
                n = 0,
                s = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; i--;) {
                if (n++, t[i]) {
                    var a = t[i].getAttribute(s) || "";
                    a.length > 0 && this.cached_images.push(t[i])
                }
                n === e && (this.images_loaded = !0, this.enhance("images"))
            }
            return this
        },
        update_nodes: function() {
            var t = this.S("[" + this.data_attr + "]").not("img"),
                e = t.length,
                i = e,
                n = 0,
                s = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--;) {
                n++;
                var a = t[i].getAttribute(s) || "";
                a.length > 0 && this.cached_nodes.push(t[i]), n === e && (this.nodes_loaded = !0, this.enhance("nodes"))
            }
            return this
        },
        enhance: function(i) {
            for (var n = this["cached_" + i].length; n--;) this.object(t(this["cached_" + i][n]));
            return t(e).trigger("resize").trigger("resize.fndtn.interchange")
        },
        convert_directive: function(t) {
            var e = this.trim(t);
            return e.length > 0 ? e : "replace"
        },
        parse_scenario: function(t) {
            var e = t[0].match(/(.+),\s*(\w+)\s*$/),
                i = t[1];
            if (e) var n = e[1],
                s = e[2];
            else var a = t[0].split(/,\s*$/),
                n = a[0],
                s = "";
            return [this.trim(n), this.convert_directive(s), this.trim(i)]
        },
        object: function(t) {
            var e = this.parse_data_attr(t),
                i = [],
                n = e.length;
            if (n > 0)
                for (; n--;) {
                    var s = e[n].split(/\((.*?)(\))$/);
                    if (s.length > 1) {
                        var a = this.parse_scenario(s);
                        i.push(a)
                    }
                }
            return this.store(t, i)
        },
        store: function(t, e) {
            var i = this.random_str(),
                n = t.data(this.add_namespace("uuid", !0));
            return this.cache[n] ? this.cache[n] : (t.attr(this.add_namespace("data-uuid"), i), this.cache[i] = e)
        },
        trim: function(e) {
            return "string" == typeof e ? t.trim(e) : e
        },
        set_data_attr: function(t) {
            return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
        },
        parse_data_attr: function(t) {
            for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), i = e.length, n = []; i--;) e[i].replace(/[\W\d]+/, "").length > 4 && n.push(e[i]);
            return n
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0)
        }
    }
}(jQuery, window, window.document),
function(t, e, i, n) {
    "use strict";
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.3.0",
        defaults: {
            expose: !1,
            modal: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            abort_on_close: !0,
            tip_location_patterns: {
                top: ["bottom"],
                bottom: [],
                left: ["right", "top", "bottom"],
                right: ["left", "top", "bottom"]
            },
            post_ride_callback: function() {},
            post_step_callback: function() {},
            pre_step_callback: function() {},
            pre_ride_callback: function() {},
            post_expose_callback: function() {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function(e, i, n) {
            Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || t.extend({}, this.defaults, n || i), this.bindings(i, n)
        },
        events: function() {
            var i = this;
            t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(t) {
                t.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(t) {
                t.preventDefault(), this.end(this.settings.abort_on_close)
            }.bind(this)), t(e).off(".joyride").on("resize.fndtn.joyride", i.throttle(function() {
                if (t("[" + i.attr_name() + "]").length > 0 && i.settings.$next_tip) {
                    if (i.settings.exposed.length > 0) {
                        var e = t(i.settings.exposed);
                        e.each(function() {
                            var e = t(this);
                            i.un_expose(e), i.expose(e)
                        })
                    }
                    i.is_phone() ? i.pos_phone() : i.pos_default(!1)
                }
            }, 100))
        },
        start: function() {
            var e = this,
                i = t("[" + this.attr_name() + "]", this.scope),
                n = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                s = n.length;
            !i.length > 0 || (this.settings.init || this.events(), this.settings = i.data(this.attr_name(!0) + "-init"), this.settings.$content_el = i, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(i) {
                var a = t(this);
                this.settings = t.extend({}, e.defaults, e.data_options(a));
                for (var o = s; o--;) e.settings[n[o]] = parseInt(e.settings[n[o]], 10);
                e.create({
                    $li: a,
                    index: i
                })
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
        },
        resume: function() {
            this.set_li(), this.show()
        },
        tip_template: function(e) {
            var i, n;
            return e.tip_class = e.tip_class || "", i = t(this.settings.template.tip).addClass(e.tip_class), n = t.trim(t(e.li).html()) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index), i.append(t(this.settings.template.wrapper)), i.first().attr(this.add_namespace("data-index"), e.index), t(".joyride-content-wrapper", i).append(n), i[0]
        },
        timer_instance: function(e) {
            var i;
            return i = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
        },
        button_text: function(e) {
            return this.settings.next_button ? (e = t.trim(e) || "Next", e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "", e
        },
        create: function(e) {
            var i = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text")),
                n = e.$li.attr("class"),
                s = t(this.tip_template({
                    tip_class: n,
                    index: e.index,
                    button_text: i,
                    li: e.$li
                }));
            t(this.settings.tip_container).append(s)
        },
        show: function(e) {
            var i = null;
            this.settings.$li === n || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(e), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), i = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                i.animate({
                    width: i.parent().width()
                }, this.settings.timer, "linear")
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                i.animate({
                    width: i.parent().width()
                }, this.settings.timer, "linear")
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
        },
        is_phone: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        hide: function() {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || t(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(t.proxy(function() {
                this.hide(), this.css("visibility", "visible")
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
        },
        set_li: function(t) {
            t ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
        },
        set_next_tip: function() {
            this.settings.$next_tip = t(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
        },
        set_target: function() {
            var e = this.settings.$li.attr(this.add_namespace("data-class")),
                n = this.settings.$li.attr(this.add_namespace("data-id")),
                s = function() {
                    return n ? t(i.getElementById(n)) : e ? t("." + e).first() : t("body")
                };
            this.settings.$target = s()
        },
        scroll_to: function() {
            var i, n;
            i = t(e).height() / 2, n = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()), 0 != n && t("html, body").stop().animate({
                scrollTop: n
            }, this.settings.scroll_speed, "swing")
        },
        paused: function() {
            return -1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        },
        restart: function() {
            this.hide(), this.settings.$li = n, this.show("init")
        },
        pos_default: function(t) {
            var e = this.settings.$next_tip.find(".joyride-nub"),
                i = Math.ceil(e.outerWidth() / 2),
                n = Math.ceil(e.outerHeight() / 2),
                s = t || !1;
            if (s && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(e);
            else {
                var a = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                    o = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + a,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + o
                } : {
                    top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + a,
                    left: this.settings.$target.offset().left + o
                }), this.nub_position(e, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + a,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                } : {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + a,
                    left: this.settings.$target.offset().left + o
                }), this.nub_position(e, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + a,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + i + o
                }), this.nub_position(e, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + a,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - i + o
                }), this.nub_position(e, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
            }
            s && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_phone: function(e) {
            var i = this.settings.$next_tip.outerHeight(),
                n = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                s = t(".joyride-nub", this.settings.$next_tip),
                a = Math.ceil(s.outerHeight() / 2),
                o = e || !1;
            s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), o && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(s) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - i - a
            }), s.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + n + a
            }), s.addClass("top")), o && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_modal: function(t) {
            this.center(), t.hide(), this.show_modal()
        },
        show_modal: function() {
            if (!this.settings.$next_tip.data("closed")) {
                var e = t(".joyride-modal-bg");
                e.length < 1 && t("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
            }
        },
        expose: function() {
            var i, n, s, a, o, r = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0] instanceof t) s = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                s = this.settings.$target
            }
            return s.length < 1 ? (e.console && console.error("element not valid", s), !1) : (i = t(this.settings.template.expose), this.settings.$body.append(i), i.css({
                top: s.offset().top,
                left: s.offset().left,
                width: s.outerWidth(!0),
                height: s.outerHeight(!0)
            }), n = t(this.settings.template.expose_cover), a = {
                zIndex: s.css("z-index"),
                position: s.css("position")
            }, o = null == s.attr("class") ? "" : s.attr("class"), s.css("z-index", parseInt(i.css("z-index")) + 1), "static" == a.position && s.css("position", "relative"), s.data("expose-css", a), s.data("orig-class", o), s.attr("class", o + " " + this.settings.expose_add_class), n.css({
                top: s.offset().top,
                left: s.offset().left,
                width: s.outerWidth(!0),
                height: s.outerHeight(!0)
            }), this.settings.modal && this.show_modal(), this.settings.$body.append(n), i.addClass(r), n.addClass(r), s.data("expose", r), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, s), void this.add_exposed(s))
        },
        un_expose: function() {
            var i, n, s, a, o, r = !1;
            if (arguments.length > 0 && arguments[0] instanceof t) n = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                n = this.settings.$target
            }
            return n.length < 1 ? (e.console && console.error("element not valid", n), !1) : (i = n.data("expose"), s = t("." + i), arguments.length > 1 && (r = arguments[1]), r === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : s.remove(), a = n.data("expose-css"), "auto" == a.zIndex ? n.css("z-index", "") : n.css("z-index", a.zIndex), a.position != n.css("position") && ("static" == a.position ? n.css("position", "") : n.css("position", a.position)), o = n.data("orig-class"), n.attr("class", o), n.removeData("orig-classes"), n.removeData("expose"), n.removeData("expose-z-index"), void this.remove_exposed(n))
        },
        add_exposed: function(e) {
            this.settings.exposed = this.settings.exposed || [], e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
        },
        remove_exposed: function(e) {
            var i, n;
            for (e instanceof t ? i = e[0] : "string" == typeof e && (i = e), this.settings.exposed = this.settings.exposed || [], n = this.settings.exposed.length; n--;)
                if (this.settings.exposed[n] == i) return void this.settings.exposed.splice(n, 1)
        },
        center: function() {
            var i = t(e);
            return this.settings.$next_tip.css({
                top: (i.height() - this.settings.$next_tip.outerHeight()) / 2 + i.scrollTop(),
                left: (i.width() - this.settings.$next_tip.outerWidth()) / 2 + i.scrollLeft()
            }), !0
        },
        bottom: function() {
            return /bottom/i.test(this.settings.tip_settings.tip_location)
        },
        top: function() {
            return /top/i.test(this.settings.tip_settings.tip_location)
        },
        right: function() {
            return /right/i.test(this.settings.tip_settings.tip_location)
        },
        left: function() {
            return /left/i.test(this.settings.tip_settings.tip_location)
        },
        corners: function(i) {
            var n = t(e),
                s = n.height() / 2,
                a = Math.ceil(this.settings.$target.offset().top - s + this.settings.$next_tip.outerHeight()),
                o = n.width() + n.scrollLeft(),
                r = n.height() + a,
                l = n.height() + n.scrollTop(),
                d = n.scrollTop();
            return d > a && (d = 0 > a ? 0 : a), r > l && (l = r), [i.offset().top < d, o < i.offset().left + i.outerWidth(), l < i.offset().top + i.outerHeight(), n.scrollLeft() > i.offset().left]
        },
        visible: function(t) {
            for (var e = t.length; e--;)
                if (t[e]) return !1;
            return !0
        },
        nub_position: function(t, e, i) {
            t.addClass("auto" === e ? i : e)
        },
        startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(), this.show(), this.startTimer()
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        },
        end: function(e) {
            this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), this.settings.$next_tip.data("closed", !0), t(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof e || e === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), t(".joyride-tip-guide").remove()
        },
        off: function() {
            t(this.scope).off(".joyride"), t(e).off(".joyride"), t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), t(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.3.0",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "throttle"), this.bindings(e, i)
        },
        events: function() {
            var i = this,
                n = i.S,
                s = i.settings;
            i.set_expedition_position(), n(i.scope).off(".magellan").on("click.fndtn.magellan", "[" + i.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(e) {
                e.preventDefault();
                var n = t(this).closest("[" + i.attr_name() + "]"),
                    s = n.data("magellan-expedition-init"),
                    a = this.hash.split("#").join(""),
                    o = t("a[name='" + a + "']");
                0 === o.length && (o = t("#" + a));
                var r = o.offset().top - s.destination_threshold;
                r -= n.outerHeight(), t("html, body").stop().animate({
                    scrollTop: r
                }, 700, "swing", function() {
                    history.pushState ? history.pushState(null, null, "#" + a) : location.hash = "#" + a
                })
            }).on("scroll.fndtn.magellan", i.throttle(this.check_for_arrivals.bind(this), s.throttle_delay)), t(e).on("resize.fndtn.magellan", i.throttle(this.set_expedition_position.bind(this), s.throttle_delay))
        },
        check_for_arrivals: function() {
            var t = this;
            t.update_arrivals(), t.update_expedition_positions()
        },
        set_expedition_position: function() {
            var e = this;
            t("[" + this.attr_name() + "=fixed]", e.scope).each(function() {
                var i, n = t(this),
                    s = n.data("magellan-expedition-init"),
                    a = n.attr("styles");
                n.attr("style", ""), i = n.offset().top + s.threshold, n.data(e.data_attr("magellan-top-offset"), i), n.attr("style", a)
            })
        },
        update_expedition_positions: function() {
            var i = this,
                n = t(e).scrollTop();
            t("[" + this.attr_name() + "=fixed]", i.scope).each(function() {
                var e = t(this),
                    s = e.data("magellan-expedition-init"),
                    a = e.data("magellan-top-offset");
                if (n >= a) {
                    var o = e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === o.length && (o = e.clone(), o.removeAttr(i.attr_name()), o.attr(i.add_namespace("data-magellan-expedition-clone"), ""), e.before(o)), e.css({
                        position: "fixed",
                        top: s.fixed_top
                    })
                } else e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", "").removeClass("fixed")
            })
        },
        update_arrivals: function() {
            var i = this,
                n = t(e).scrollTop();
            t("[" + this.attr_name() + "]", i.scope).each(function() {
                var e = t(this),
                    s = e.data(i.attr_name(!0) + "-init"),
                    a = i.offsets(e, n),
                    o = e.find("[" + i.add_namespace("data-magellan-arrival") + "]"),
                    r = !1;
                a.each(function(t, n) {
                    if (n.viewport_offset >= n.top_offset) {
                        var a = e.find("[" + i.add_namespace("data-magellan-arrival") + "]");
                        return a.not(n.arrival).removeClass(s.active_class), n.arrival.addClass(s.active_class), r = !0, !0
                    }
                }), r || o.removeClass(s.active_class)
            })
        },
        offsets: function(e, i) {
            var n = this,
                s = e.data(n.attr_name(!0) + "-init"),
                a = i;
            return e.find("[" + n.add_namespace("data-magellan-arrival") + "]").map(function() {
                var i = t(this).data(n.data_attr("magellan-arrival")),
                    o = t("[" + n.add_namespace("data-magellan-destination") + "=" + i + "]");
                if (o.length > 0) {
                    var r = o.offset().top - s.destination_threshold - e.outerHeight();
                    return {
                        destination: o,
                        arrival: t(this),
                        top_offset: r,
                        viewport_offset: a
                    }
                }
            }).sort(function(t, e) {
                return t.top_offset < e.top_offset ? -1 : t.top_offset > e.top_offset ? 1 : 0
            })
        },
        data_attr: function(t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        off: function() {
            this.S(this.scope).off(".magellan"), this.S(e).off(".magellan")
        },
        reflow: function() {
            var e = this;
            t("[" + e.add_namespace("data-magellan-expedition-clone") + "]", e.scope).remove()
        }
    }
}(jQuery, window, window.document),
function() {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.3.0",
        settings: {
            open_method: "move",
            close_on_click: !0
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function() {
            var t = this,
                e = t.S,
                i = "",
                n = "",
                s = "";
            "move" === this.settings.open_method ? (i = "move-", n = "right", s = "left") : "overlap" === this.settings.open_method && (i = "offcanvas-overlap"), e(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(e) {
                t.click_toggle_class(e, i + n)
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(e) {
                var s = t.get_settings(e);
                s.close_on_click && t.hide.call(t, i + n, t.get_wrapper(e))
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(e) {
                t.click_toggle_class(e, i + s)
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(e) {
                var n = t.get_settings(e);
                n.close_on_click && t.hide.call(t, i + s, t.get_wrapper(e))
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(e) {
                t.click_remove_class(e, i + s), n && t.click_remove_class(e, i + n)
            })
        },
        toggle: function(t, e) {
            e = e || this.get_wrapper(), e.is("." + t) ? this.hide(t, e) : this.show(t, e)
        },
        show: function(t, e) {
            e = e || this.get_wrapper(), e.trigger("open").trigger("open.fndtn.offcanvas"), e.addClass(t)
        },
        hide: function(t, e) {
            e = e || this.get_wrapper(), e.trigger("close").trigger("close.fndtn.offcanvas"), e.removeClass(t)
        },
        click_toggle_class: function(t, e) {
            t.preventDefault();
            var i = this.get_wrapper(t);
            this.toggle(e, i)
        },
        click_remove_class: function(t, e) {
            t.preventDefault();
            var i = this.get_wrapper(t);
            this.hide(e, i)
        },
        get_settings: function(t) {
            var e = this.S(t.target).closest("[" + this.attr_name() + "]");
            return e.data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(t) {
            var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
            return 0 === e.length && (e = this.S(".off-canvas-wrap")), e
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e, i, n) {
    "use strict";
    var s = function() {},
        a = function(s, a) {
            if (s.hasClass(a.slides_container_class)) return this;
            var d, c, h, u, p, f, g = this,
                m = s,
                v = 0,
                _ = !1;
            g.slides = function() {
                return m.children(a.slide_selector)
            }, g.slides().first().addClass(a.active_slide_class), g.update_slide_number = function(e) {
                a.slide_number && (c.find("span:first").text(parseInt(e) + 1), c.find("span:last").text(g.slides().length)), a.bullets && (h.children().removeClass(a.bullets_active_class), t(h.children().get(e)).addClass(a.bullets_active_class))
            }, g.update_active_link = function(e) {
                var i = t('a[data-orbit-link="' + g.slides().eq(e).attr("data-orbit-slide") + '"]');
                i.siblings().removeClass(a.bullets_active_class), i.addClass(a.bullets_active_class)
            }, g.build_markup = function() {
                m.wrap('<div class="' + a.container_class + '"></div>'), d = m.parent(), m.addClass(a.slides_container_class), a.stack_on_small && d.addClass(a.stack_on_small_class), a.navigation_arrows && (d.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)), d.append(t('<a href="#"><span></span></a>').addClass(a.next_class))), a.timer && (u = t("<div>").addClass(a.timer_container_class), u.append("<span>"), u.append(t("<div>").addClass(a.timer_progress_class)), u.addClass(a.timer_paused_class), d.append(u)), a.slide_number && (c = t("<div>").addClass(a.slide_number_class), c.append("<span></span> " + a.slide_number_text + " <span></span>"), d.append(c)), a.bullets && (h = t("<ol>").addClass(a.bullets_container_class), d.append(h), h.wrap('<div class="orbit-bullets-container"></div>'), g.slides().each(function(e) {
                    var i = t("<li>").attr("data-orbit-slide", e).on("click", g.link_bullet);
                    h.append(i)
                }))
            }, g._goto = function(e, i) {
                if (e === v) return !1;
                "object" == typeof f && f.restart();
                var n = g.slides(),
                    s = "next";
                if (_ = !0, v > e && (s = "prev"), e >= n.length) {
                    if (!a.circular) return !1;
                    e = 0
                } else if (0 > e) {
                    if (!a.circular) return !1;
                    e = n.length - 1
                }
                var o = t(n.get(v)),
                    r = t(n.get(e));
                o.css("zIndex", 2), o.removeClass(a.active_slide_class), r.css("zIndex", 4).addClass(a.active_slide_class), m.trigger("before-slide-change.fndtn.orbit"), a.before_slide_change(), g.update_active_link(e);
                var l = function() {
                    var t = function() {
                        v = e, _ = !1, i === !0 && (f = g.create_timer(), f.start()), g.update_slide_number(v), m.trigger("after-slide-change.fndtn.orbit", [{
                            slide_number: v,
                            total_slides: n.length
                        }]), a.after_slide_change(v, n.length)
                    };
                    m.height() != r.height() && a.variable_height ? m.animate({
                        height: r.height()
                    }, 250, "linear", t) : t()
                };
                if (1 === n.length) return l(), !1;
                var d = function() {
                    "next" === s && p.next(o, r, l), "prev" === s && p.prev(o, r, l)
                };
                r.height() > m.height() && a.variable_height ? m.animate({
                    height: r.height()
                }, 250, "linear", d) : d()
            }, g.next = function(t) {
                t.stopImmediatePropagation(), t.preventDefault(), g._goto(v + 1)
            }, g.prev = function(t) {
                t.stopImmediatePropagation(), t.preventDefault(), g._goto(v - 1)
            }, g.link_custom = function(e) {
                e.preventDefault();
                var i = t(this).attr("data-orbit-link");
                if ("string" == typeof i && "" != (i = t.trim(i))) {
                    var n = d.find("[data-orbit-slide=" + i + "]"); - 1 != n.index() && g._goto(n.index())
                }
            }, g.link_bullet = function() {
                var e = t(this).attr("data-orbit-slide");
                if ("string" == typeof e && "" != (e = t.trim(e)))
                    if (isNaN(parseInt(e))) {
                        var i = d.find("[data-orbit-slide=" + e + "]"); - 1 != i.index() && g._goto(i.index() + 1)
                    } else g._goto(parseInt(e))
            }, g.timer_callback = function() {
                g._goto(v + 1, !0)
            }, g.compute_dimensions = function() {
                var e = t(g.slides().get(v)),
                    i = e.height();
                a.variable_height || g.slides().each(function() {
                    t(this).height() > i && (i = t(this).height())
                }), m.height(i)
            }, g.create_timer = function() {
                var t = new o(d.find("." + a.timer_container_class), a, g.timer_callback);
                return t
            }, g.stop_timer = function() {
                "object" == typeof f && f.stop()
            }, g.toggle_timer = function() {
                var t = d.find("." + a.timer_container_class);
                t.hasClass(a.timer_paused_class) ? ("undefined" == typeof f && (f = g.create_timer()), f.start()) : "object" == typeof f && f.stop()
            }, g.init = function() {
                g.build_markup(), a.timer && (f = g.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), f.start)), p = new l(a, m), "slide" === a.animation && (p = new r(a, m)), d.on("click", "." + a.next_class, g.next), d.on("click", "." + a.prev_class, g.prev), a.next_on_click && d.on("click", "." + a.slides_container_class + " [data-orbit-slide]", g.link_bullet), d.on("click", g.toggle_timer), a.swipe && d.on("touchstart.fndtn.orbit", function(t) {
                    t.touches || (t = t.originalEvent);
                    var e = {
                        start_page_x: t.touches[0].pageX,
                        start_page_y: t.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: n
                    };
                    d.data("swipe-transition", e), t.stopPropagation()
                }).on("touchmove.fndtn.orbit", function(t) {
                    if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                        var e = d.data("swipe-transition");
                        if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                            t.preventDefault();
                            var i = e.delta_x < 0 ? v + 1 : v - 1;
                            e.active = !0, g._goto(i)
                        }
                    }
                }).on("touchend.fndtn.orbit", function(t) {
                    d.data("swipe-transition", {}), t.stopPropagation()
                }), d.on("mouseenter.fndtn.orbit", function() {
                    a.timer && a.pause_on_hover && g.stop_timer()
                }).on("mouseleave.fndtn.orbit", function() {
                    a.timer && a.resume_on_mouseout && f.start()
                }), t(i).on("click", "[data-orbit-link]", g.link_custom), t(e).on("load resize", g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
                    d.prev("." + a.preloader_class).css("display", "none"), g.update_slide_number(0), g.update_active_link(0), m.trigger("ready.fndtn.orbit")
                })
            }, g.init()
        },
        o = function(t, e, i) {
            var n, s, a = this,
                o = e.timer_speed,
                r = t.find("." + e.timer_progress_class),
                l = -1;
            this.update_progress = function(t) {
                var e = r.clone();
                e.attr("style", ""), e.css("width", t + "%"), r.replaceWith(e), r = e
            }, this.restart = function() {
                clearTimeout(s), t.addClass(e.timer_paused_class), l = -1, a.update_progress(0)
            }, this.start = function() {
                return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? o : l, t.removeClass(e.timer_paused_class), n = (new Date).getTime(), r.animate({
                    width: "100%"
                }, l, "linear"), s = setTimeout(function() {
                    a.restart(), i()
                }, l), void t.trigger("timer-started.fndtn.orbit")) : !0
            }, this.stop = function() {
                if (t.hasClass(e.timer_paused_class)) return !0;
                clearTimeout(s), t.addClass(e.timer_paused_class);
                var i = (new Date).getTime();
                l -= i - n;
                var r = 100 - 100 * (l / o);
                a.update_progress(r), t.trigger("timer-stopped.fndtn.orbit")
            }
        },
        r = function(e) {
            var i = e.animation_speed,
                n = 1 === t("html[dir=rtl]").length,
                s = n ? "marginRight" : "marginLeft",
                a = {};
            a[s] = "0%", this.next = function(t, e, n) {
                t.animate({
                    marginLeft: "-100%"
                }, i), e.animate(a, i, function() {
                    t.css(s, "100%"), n()
                })
            }, this.prev = function(t, e, n) {
                t.animate({
                    marginLeft: "100%"
                }, i), e.css(s, "-100%"), e.animate(a, i, function() {
                    t.css(s, "100%"), n()
                })
            }
        },
        l = function(e) {
            var i = e.animation_speed;
            1 === t("html[dir=rtl]").length, this.next = function(t, e, n) {
                e.css({
                    margin: "0%",
                    opacity: "0.01"
                }), e.animate({
                    opacity: "1"
                }, i, "linear", function() {
                    t.css("margin", "100%"), n()
                })
            }, this.prev = function(t, e, n) {
                e.css({
                    margin: "0%",
                    opacity: "0.01"
                }), e.animate({
                    opacity: "1"
                }, i, "linear", function() {
                    t.css("margin", "100%"), n()
                })
            }
        };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.3.0",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            next_on_click: !0,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            preloader_class: "preloader",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: s,
            after_slide_change: s
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function(t) {
            var e = new a(this.S(t), this.S(t).data("orbit-init"));
            this.S(t).data(self.name + "-instance", e)
        },
        reflow: function() {
            var t = this;
            if (t.S(t.scope).is("[data-orbit]")) {
                var e = t.S(t.scope),
                    i = e.data(t.name + "-instance");
                i.compute_dimensions()
            } else t.S("[data-orbit]", t.scope).each(function(e, i) {
                var n = t.S(i),
                    s = (t.data_options(n), n.data(t.name + "-instance"));
                s.compute_dimensions()
            })
        }
    }
}(jQuery, window, window.document),
function(t, e, i, n) {
    "use strict";

    function s(t) {
        var e = /fade/i.test(t),
            i = /pop/i.test(t);
        return {
            animate: e || i,
            pop: i,
            fade: e
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.3.0",
        locked: !1,
        settings: {
            animation: "fade",
            animation_speed: 500,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: t(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(e, i, n) {
            t.extend(!0, this.settings, i, n), this.bindings(i, n)
        },
        events: function() {
            var t = this,
                e = t.S;
            return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(i) {
                if (i.preventDefault(), !t.locked) {
                    var n = e(this),
                        s = n.data(t.data_attr("reveal-ajax"));
                    if (t.locked = !0, "undefined" == typeof s) t.open.call(t, n);
                    else {
                        var a = s === !0 ? n.attr("href") : s;
                        t.open.call(t, n, {
                            url: a
                        })
                    }
                }
            }), e(i).on("touchend.fndtn.reveal click.fndtn.reveal", this.close_targets(), function(i) {
                if (i.preventDefault(), !t.locked) {
                    var n = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init"),
                        s = e(i.target)[0] === e("." + n.bg_class)[0];
                    if (s) {
                        if (!n.close_on_background_click) return;
                        i.stopPropagation()
                    }
                    t.locked = !0, t.close.call(t, s ? e("[" + t.attr_name() + "].open") : e(this).closest("[" + t.attr_name() + "]"))
                }
            }), e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
        },
        key_up_on: function() {
            var t = this;
            return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(e) {
                var i = t.S("[" + t.attr_name() + "].open"),
                    n = i.data(t.attr_name(!0) + "-init");
                n && 27 === e.which && n.close_on_esc && !t.locked && t.close.call(t, i)
            }), !0
        },
        key_up_off: function() {
            return this.S("body").off("keyup.fndtn.reveal"), !0
        },
        open: function(e, i) {
            var n, s = this;
            e ? "undefined" != typeof e.selector ? n = s.S("#" + e.data(s.data_attr("reveal-id"))).first() : (n = s.S(this.scope), i = e) : n = s.S(this.scope);
            var a = n.data(s.attr_name(!0) + "-init");
            if (a = a || this.settings, !n.hasClass("open")) {
                var o = s.S("[" + s.attr_name() + "].open");
                if ("undefined" == typeof n.data("css-top") && n.data("css-top", parseInt(n.css("top"), 10)).data("offset", this.cache_offset(n)), this.key_up_on(n), n.trigger("open").trigger("open.fndtn.reveal"), o.length < 1 && this.toggle_bg(n, !0), "string" == typeof i && (i = {
                        url: i
                    }), "undefined" != typeof i && i.url) {
                    var r = "undefined" != typeof i.success ? i.success : null;
                    t.extend(i, {
                        success: function(e, i, l) {
                            t.isFunction(r) && r(e, i, l), n.html(e), s.S(n).foundation("section", "reflow"), s.S(n).children().foundation(), o.length > 0 && s.hide(o, a.css.close), s.show(n, a.css.open)
                        }
                    }), t.ajax(i)
                } else o.length > 0 && this.hide(o, a.css.close), this.show(n, a.css.open)
            }
        },
        close: function(t) {
            var t = t && t.length ? t : this.S(this.scope),
                e = this.S("[" + this.attr_name() + "].open"),
                i = t.data(this.attr_name(!0) + "-init") || this.settings;
            e.length > 0 && (this.locked = !0, this.key_up_off(t), t.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(t, !1), this.hide(e, i.css.close, i))
        },
        close_targets: function() {
            var t = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
        },
        toggle_bg: function(e, i) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = t("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var s = this.settings.bg.filter(":visible").length > 0;
            i != s && ((i == n ? s : !i) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(i, n) {
            if (n) {
                var a = i.data(this.attr_name(!0) + "-init") || this.settings,
                    o = a.root_element;
                if (0 === i.parent(o).length) {
                    var r = i.wrap('<div style="display: none;" />').parent();
                    i.on("closed.fndtn.reveal.wrapped", function() {
                        i.detach().appendTo(r), i.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), i.detach().appendTo(o)
                }
                var l = s(a.animation);
                if (l.animate || (this.locked = !1), l.pop) {
                    n.top = t(e).scrollTop() - i.data("offset") + "px";
                    var d = {
                        top: t(e).scrollTop() + i.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return i.css(n).animate(d, a.animation_speed, "linear", function() {
                            this.locked = !1, i.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                if (l.fade) {
                    n.top = t(e).scrollTop() + i.data("css-top") + "px";
                    var d = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return i.css(n).animate(d, a.animation_speed, "linear", function() {
                            this.locked = !1, i.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                return i.css(n).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            var a = this.settings;
            return s(a.animation).fade ? i.fadeIn(a.animation_speed / 2) : (this.locked = !1, i.show())
        },
        hide: function(i, n) {
            if (n) {
                var a = i.data(this.attr_name(!0) + "-init");
                a = a || this.settings;
                var o = s(a.animation);
                if (o.animate || (this.locked = !1), o.pop) {
                    var r = {
                        top: -t(e).scrollTop() - i.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return i.animate(r, a.animation_speed, "linear", function() {
                            this.locked = !1, i.css(n).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                if (o.fade) {
                    var r = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return i.animate(r, a.animation_speed, "linear", function() {
                            this.locked = !1, i.css(n).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                return i.hide().css(n).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            var a = this.settings;
            return s(a.animation).fade ? i.fadeOut(a.animation_speed / 2) : i.hide()
        },
        close_video: function(e) {
            var i = t(".flex-video", e.target),
                n = t("iframe", i);
            n.length > 0 && (n.attr("data-src", n[0].src), n.attr("src", "about:blank"), i.hide())
        },
        open_video: function(e) {
            var i = t(".flex-video", e.target),
                s = i.find("iframe");
            if (s.length > 0) {
                var a = s.attr("data-src");
                if ("string" == typeof a) s[0].src = s.attr("data-src");
                else {
                    var o = s[0].src;
                    s[0].src = n, s[0].src = o
                }
                i.show()
            }
        },
        data_attr: function(t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        cache_offset: function(t) {
            var e = t.show().height() + parseInt(t.css("top"), 10);
            return t.hide(), e
        },
        off: function() {
            t(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.slider = {
        name: "slider",
        version: "5.3.0",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            initial: null,
            display_selector: "",
            vertical: !1,
            on_change: function() {}
        },
        cache: {},
        init: function(t, e, i) {
            Foundation.inherit(this, "throttle"), this.bindings(e, i), this.reflow()
        },
        events: function() {
            var i = this;
            t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + i.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(e) {
                i.cache.active || (e.preventDefault(), i.set_active_slider(t(e.target)))
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(e) {
                i.cache.active && (e.preventDefault(), t.data(i.cache.active[0], "settings").vertical ? i.calculate_position(i.cache.active, e.pageY || e.originalEvent.clientY || e.originalEvent.touches[0].clientY || e.currentPoint.y) : i.calculate_position(i.cache.active, e.pageX || e.originalEvent.clientX || e.originalEvent.touches[0].clientX || e.currentPoint.x))
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function() {
                i.remove_active_slider()
            }).on("change.fndtn.slider", function() {
                i.settings.on_change()
            }), i.S(e).on("resize.fndtn.slider", i.throttle(function() {
                i.reflow()
            }, 300))
        },
        set_active_slider: function(t) {
            this.cache.active = t
        },
        remove_active_slider: function() {
            this.cache.active = null
        },
        calculate_position: function(e, i) {
            var n = this,
                s = t.data(e[0], "settings"),
                a = (t.data(e[0], "handle_l"), t.data(e[0], "handle_o"), t.data(e[0], "bar_l")),
                o = t.data(e[0], "bar_o");
            requestAnimationFrame(function() {
                var t;
                t = Foundation.rtl && !s.vertical ? n.limit_to((o + a - i) / a, 0, 1) : n.limit_to((i - o) / a, 0, 1), t = s.vertical ? 1 - t : t;
                var r = n.normalized_value(t, s.start, s.end, s.step);
                n.set_ui(e, r)
            })
        },
        set_ui: function(e, i) {
            var n = t.data(e[0], "settings"),
                s = t.data(e[0], "handle_l"),
                a = t.data(e[0], "bar_l"),
                o = this.normalized_percentage(i, n.start, n.end),
                r = o * (a - s) - 1,
                l = 100 * o;
            Foundation.rtl && !n.vertical && (r = -r), r = n.vertical ? -r + a - s + 1 : r, this.set_translate(e, r, n.vertical), n.vertical ? e.siblings(".range-slider-active-segment").css("height", l + "%") : e.siblings(".range-slider-active-segment").css("width", l + "%"), e.parent().attr(this.attr_name(), i).trigger("change").trigger("change.fndtn.slider"), e.parent().children("input[type=hidden]").val(i), "" != n.input_id && t(n.display_selector).each(function() {
                this.hasOwnProperty("value") ? t(this).val(i) : t(this).text(i)
            })
        },
        normalized_percentage: function(t, e, i) {
            return (t - e) / (i - e)
        },
        normalized_value: function(t, e, i, n) {
            var s = i - e,
                a = t * s,
                o = (a - a % n) / n,
                r = a % n,
                l = r >= .5 * n ? n : 0;
            return o * n + l + e
        },
        set_translate: function(e, i, n) {
            n ? t(e).css("-webkit-transform", "translateY(" + i + "px)").css("-moz-transform", "translateY(" + i + "px)").css("-ms-transform", "translateY(" + i + "px)").css("-o-transform", "translateY(" + i + "px)").css("transform", "translateY(" + i + "px)") : t(e).css("-webkit-transform", "translateX(" + i + "px)").css("-moz-transform", "translateX(" + i + "px)").css("-ms-transform", "translateX(" + i + "px)").css("-o-transform", "translateX(" + i + "px)").css("transform", "translateX(" + i + "px)")
        },
        limit_to: function(t, e, i) {
            return Math.min(Math.max(t, e), i)
        },
        initialize_settings: function(e) {
            var i = t.extend({}, this.settings, this.data_options(t(e).parent()));
            i.vertical ? (t.data(e, "bar_o", t(e).parent().offset().top), t.data(e, "bar_l", t(e).parent().outerHeight()), t.data(e, "handle_o", t(e).offset().top), t.data(e, "handle_l", t(e).outerHeight())) : (t.data(e, "bar_o", t(e).parent().offset().left), t.data(e, "bar_l", t(e).parent().outerWidth()), t.data(e, "handle_o", t(e).offset().left), t.data(e, "handle_l", t(e).outerWidth())), t.data(e, "bar", t(e).parent()), t.data(e, "settings", i)
        },
        set_initial_position: function(e) {
            var i = t.data(e.children(".range-slider-handle")[0], "settings"),
                n = i.initial ? i.initial : Math.floor(.5 * (i.end - i.start) / i.step) * i.step + i.start,
                s = e.children(".range-slider-handle");
            this.set_ui(s, n)
        },
        set_value: function(e) {
            var i = this;
            t("[" + i.attr_name() + "]", this.scope).each(function() {
                t(this).attr(i.attr_name(), e)
            }), t(this.scope).attr(i.attr_name()) && t(this.scope).attr(i.attr_name(), e), i.reflow()
        },
        reflow: function() {
            var e = this;
            e.S("[" + this.attr_name() + "]").each(function() {
                var i = t(this).children(".range-slider-handle")[0],
                    n = t(this).attr(e.attr_name());
                e.initialize_settings(i), n ? e.set_ui(t(i), parseFloat(n)) : e.set_initial_position(t(this))
            })
        }
    }
}(jQuery, window, window.document),
function(t, e, i, n) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.3.0",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(t, e, i) {
            var n = this,
                s = this.S;
            this.bindings(e, i), this.handle_location_hash_change(), s("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                n.default_tab_hashes.push(this.hash)
            })
        },
        events: function() {
            var t = this,
                i = this.S;
            i(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(e) {
                var n = i(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                (!n.is_hover || Modernizr.touch) && (e.preventDefault(), e.stopPropagation(), t.toggle_active_tab(i(this).parent()))
            }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                var e = i(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                e.is_hover && t.toggle_active_tab(i(this).parent())
            }), i(e).on("hashchange.fndtn.tab", function(e) {
                e.preventDefault(), t.handle_location_hash_change()
            })
        },
        handle_location_hash_change: function() {
            var e = this,
                i = this.S;
            i("[" + this.attr_name() + "]", this.scope).each(function() {
                var s = i(this).data(e.attr_name(!0) + "-init");
                if (s.deep_linking) {
                    var a = e.scope.location.hash;
                    if ("" != a) {
                        var o = i(a);
                        if (o.hasClass("content") && o.parent().hasClass("tab-content")) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + a + "]").parent());
                        else {
                            var r = o.closest(".content").attr("id");
                            r != n && e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=#" + r + "]").parent(), a)
                        }
                    } else
                        for (var l in e.default_tab_hashes) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + e.default_tab_hashes[l] + "]").parent())
                }
            })
        },
        toggle_active_tab: function(i, s) {
            var a = this.S,
                o = i.closest("[" + this.attr_name() + "]"),
                r = i.children("a").first(),
                l = "#" + r.attr("href").split("#")[1],
                d = a(l),
                c = i.siblings(),
                h = o.data(this.attr_name(!0) + "-init");
            if (a(this).data(this.data_attr("tab-content")) && (l = "#" + a(this).data(this.data_attr("tab-content")).split("#")[1], d = a(l)), h.deep_linking) {
                var u = t("body,html").scrollTop();
                e.location.hash = s != n ? s : l, h.scroll_to_content ? s == n || s == l ? i.parent()[0].scrollIntoView() : a(l)[0].scrollIntoView() : (s == n || s == l) && t("body,html").scrollTop(u)
            }
            i.addClass(h.active_class).triggerHandler("opened"), c.removeClass(h.active_class), d.siblings().removeClass(h.active_class).end().addClass(h.active_class), h.callback(i), d.triggerHandler("toggled", [i]), o.triggerHandler("toggled", [d])
        },
        data_attr: function(t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.3.0",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            show_on: "all",
            tip_template: function(t, e) {
                return '<span data-selector="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + e + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function(t, e, i) {
            Foundation.inherit(this, "random_str"), this.bindings(e, i)
        },
        should_show: function(e) {
            var i = t.extend({}, this.settings, this.data_options(e));
            return "all" === i.show_on ? !0 : this.small() && "small" === i.show_on ? !0 : this.medium() && "medium" === i.show_on ? !0 : this.large() && "large" === i.show_on ? !0 : !1
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function(e) {
            var i = this,
                n = i.S;
            i.create(this.S(e)), t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(e) {
                var s = n(this),
                    a = t.extend({}, i.settings, i.data_options(s)),
                    o = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && n(e.target).is("a")) return !1;
                if (/mouse/i.test(e.type) && i.ie_touch(e)) return !1;
                if (s.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && e.preventDefault(), i.hide(s);
                else {
                    if (a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) return;
                    !a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && (e.preventDefault(), n(a.tooltip_class + ".open").hide(), o = !0), /enter|over/i.test(e.type) ? this.timer = setTimeout(function() {
                        i.showTip(s)
                    }.bind(this), i.settings.hover_delay) : "mouseout" === e.type || "mouseleave" === e.type ? (clearTimeout(this.timer), i.hide(s)) : i.showTip(s)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(e) {
                return /mouse/i.test(e.type) && i.ie_touch(e) ? !1 : void(("touch" != t(this).data("tooltip-open-event-type") || "mouseleave" != e.type) && ("mouse" == t(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(e.type) ? i.convert_to_touch(t(this)) : i.hide(t(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                i.hide(n(this))
            })
        },
        ie_touch: function() {
            return !1
        },
        showTip: function(t) {
            var e = this.getTip(t);
            return this.should_show(t, e) ? this.show(t) : void 0
        },
        getTip: function(e) {
            var i = this.selector(e),
                n = t.extend({}, this.settings, this.data_options(e)),
                s = null;
            return i && (s = this.S('span[data-selector="' + i + '"]' + n.tooltip_class)), "object" == typeof s ? s : !1
        },
        selector: function(t) {
            var e = t.attr("id"),
                i = t.attr(this.attr_name()) || t.attr("data-selector");
            return (e && e.length < 1 || !e) && "string" != typeof i && (i = this.random_str(6), t.attr("data-selector", i)), e && e.length > 0 ? e : i
        },
        create: function(i) {
            var n = this,
                s = t.extend({}, this.settings, this.data_options(i)),
                a = this.settings.tip_template;
            "string" == typeof s.tip_template && e.hasOwnProperty(s.tip_template) && (a = e[s.tip_template]);
            var o = t(a(this.selector(i), t("<div></div>").html(i.attr("title")).html())),
                r = this.inheritable_classes(i);
            o.addClass(r).appendTo(s.append_to), Modernizr.touch && (o.append('<span class="tap-to-close">' + s.touch_close_text + "</span>"), o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                n.hide(i)
            })), i.removeAttr("title").attr("title", "")
        },
        reposition: function(e, i, n) {
            var s, a, o, r, l;
            if (i.css("visibility", "hidden").show(), s = e.data("width"), a = i.children(".nub"), o = a.outerHeight(), r = a.outerHeight(), i.css(this.small() ? {
                    width: "100%"
                } : {
                    width: s ? s : "auto"
                }), l = function(t, e, i, n, s) {
                    return t.css({
                        top: e ? e : "auto",
                        bottom: n ? n : "auto",
                        left: s ? s : "auto",
                        right: i ? i : "auto"
                    }).end()
                }, l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", e.offset().left), this.small()) l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", 12.5, t(this.scope).width()), i.addClass("tip-override"), l(a, -o, "auto", "auto", e.offset().left);
            else {
                var d = e.offset().left;
                Foundation.rtl && (a.addClass("rtl"), d = e.offset().left + e.outerWidth() - i.outerWidth()), l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", d), i.removeClass("tip-override"), n && n.indexOf("tip-top") > -1 ? (Foundation.rtl && a.addClass("rtl"), l(i, e.offset().top - i.outerHeight(), "auto", "auto", d).removeClass("tip-override")) : n && n.indexOf("tip-left") > -1 ? (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left - i.outerWidth() - o).removeClass("tip-override"), a.removeClass("rtl")) : n && n.indexOf("tip-right") > -1 && (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left + e.outerWidth() + o).removeClass("tip-override"), a.removeClass("rtl"))
            }
            i.css("visibility", "visible").hide()
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function(e) {
            var i = t.extend({}, this.settings, this.data_options(e)),
                n = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(i.additional_inheritable_classes),
                s = e.attr("class"),
                a = s ? t.map(s.split(" "), function(e) {
                    return -1 !== t.inArray(e, n) ? e : void 0
                }).join(" ") : "";
            return t.trim(a)
        },
        convert_to_touch: function(e) {
            var i = this,
                n = i.getTip(e),
                s = t.extend({}, i.settings, i.data_options(e));
            0 === n.find(".tap-to-close").length && (n.append('<span class="tap-to-close">' + s.touch_close_text + "</span>"), n.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                i.hide(e)
            })), e.data("tooltip-open-event-type", "touch")
        },
        show: function(t) {
            var e = this.getTip(t);
            "touch" == t.data("tooltip-open-event-type") && this.convert_to_touch(t), this.reposition(t, e, t.attr("class")), t.addClass("open"), e.fadeIn(150)
        },
        hide: function(t) {
            var e = this.getTip(t);
            e.fadeOut(150, function() {
                e.find(".tap-to-close").remove(), e.off("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), t.removeClass("open")
            })
        },
        off: function() {
            var e = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(i) {
                t("[" + e.attr_name() + "]").eq(i).attr("title", t(this).text())
            }).remove()
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e, i) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.3.0",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all"
        },
        init: function(e, i, n) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var s = this;
            s.register_media("topbar", "foundation-mq-topbar"), this.bindings(i, n), s.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var e = t(this),
                    i = e.data(s.attr_name(!0) + "-init");
                s.S("section", this), e.data("index", 0);
                var n = e.parent();
                n.hasClass("fixed") || s.is_sticky(e, n, i) ? (s.settings.sticky_class = i.sticky_class, s.settings.sticky_topbar = e, e.data("height", n.outerHeight()), e.data("stickyoffset", n.offset().top)) : e.data("height", e.outerHeight()), i.assembled || s.assemble(e), i.is_hover ? s.S(".has-dropdown", e).addClass("not-click") : s.S(".has-dropdown", e).removeClass("not-click"), s.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"), n.hasClass("fixed") && s.S("body").addClass("f-topbar-fixed")
            })
        },
        is_sticky: function(t, e, i) {
            var n = e.hasClass(i.sticky_class);
            return n && "all" === i.sticky_on ? !0 : n && this.small() && "small" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : n && this.medium() && "medium" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : n && this.large() && "large" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1
        },
        toggle: function(i) {
            var n, s = this;
            n = i ? s.S(i).closest("[" + this.attr_name() + "]") : s.S("[" + this.attr_name() + "]");
            var a = n.data(this.attr_name(!0) + "-init"),
                o = s.S("section, .section", n);
            s.breakpoint() && (s.rtl ? (o.css({
                right: "0%"
            }), t(">.name", o).css({
                right: "100%"
            })) : (o.css({
                left: "0%"
            }), t(">.name", o).css({
                left: "100%"
            })), s.S("li.moved", o).removeClass("moved"), n.data("index", 0), n.toggleClass("expanded").css("height", "")), a.scrolltop ? n.hasClass("expanded") ? n.parent().hasClass("fixed") && (a.scrolltop ? (n.parent().removeClass("fixed"), n.addClass("fixed"), s.S("body").removeClass("f-topbar-fixed"), e.scrollTo(0, 0)) : n.parent().removeClass("expanded")) : n.hasClass("fixed") && (n.parent().addClass("fixed"), n.removeClass("fixed"), s.S("body").addClass("f-topbar-fixed")) : (s.is_sticky(n, n.parent(), a) && n.parent().addClass("fixed"), n.parent().hasClass("fixed") && (n.hasClass("expanded") ? (n.addClass("fixed"), n.parent().addClass("expanded"), s.S("body").addClass("f-topbar-fixed")) : (n.removeClass("fixed"), n.parent().removeClass("expanded"), s.update_sticky_positioning())))
        },
        timer: null,
        events: function() {
            var i = this,
                n = this.S;
            n(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(t) {
                t.preventDefault(), i.toggle(this)
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                var e = t(this).closest("li");
                !i.breakpoint() || e.hasClass("back") || e.hasClass("has-dropdown") || i.toggle()
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(e) {
                var s = n(this),
                    a = n(e.target),
                    o = s.closest("[" + i.attr_name() + "]"),
                    r = o.data(i.attr_name(!0) + "-init");
                return a.data("revealId") ? void i.toggle() : void(i.breakpoint() || (!r.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(), s.hasClass("hover") ? (s.removeClass("hover").find("li").removeClass("hover"), s.parents("li.hover").removeClass("hover")) : (s.addClass("hover"), t(s).siblings().removeClass("hover"), "A" === a[0].nodeName && a.parent().hasClass("has-dropdown") && e.preventDefault())))
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(t) {
                if (i.breakpoint()) {
                    t.preventDefault();
                    var e = n(this),
                        s = e.closest("[" + i.attr_name() + "]"),
                        a = s.find("section, .section"),
                        o = (e.next(".dropdown").outerHeight(), e.closest("li"));
                    s.data("index", s.data("index") + 1), o.addClass("moved"), i.rtl ? (a.css({
                        right: -(100 * s.data("index")) + "%"
                    }), a.find(">.name").css({
                        right: 100 * s.data("index") + "%"
                    })) : (a.css({
                        left: -(100 * s.data("index")) + "%"
                    }), a.find(">.name").css({
                        left: 100 * s.data("index") + "%"
                    })), s.css("height", e.siblings("ul").outerHeight(!0) + s.data("height"))
                }
            }), n(e).off(".topbar").on("resize.fndtn.topbar", i.throttle(function() {
                i.resize.call(i)
            }, 50)).trigger("resize").trigger("resize.fndtn.topbar"), n("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function(t) {
                var e = n(t.target).closest("li").closest("li.hover");
                e.length > 0 || n("[" + i.attr_name() + "] li.hover").removeClass("hover")
            }), n(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(t) {
                t.preventDefault();
                var e = n(this),
                    s = e.closest("[" + i.attr_name() + "]"),
                    a = s.find("section, .section"),
                    o = (s.data(i.attr_name(!0) + "-init"), e.closest("li.moved")),
                    r = o.parent();
                s.data("index", s.data("index") - 1), i.rtl ? (a.css({
                    right: -(100 * s.data("index")) + "%"
                }), a.find(">.name").css({
                    right: 100 * s.data("index") + "%"
                })) : (a.css({
                    left: -(100 * s.data("index")) + "%"
                }), a.find(">.name").css({
                    left: 100 * s.data("index") + "%"
                })), 0 === s.data("index") ? s.css("height", "") : s.css("height", r.outerHeight(!0) + s.data("height")), setTimeout(function() {
                    o.removeClass("moved")
                }, 300)
            })
        },
        resize: function() {
            var t = this;
            t.S("[" + this.attr_name() + "]").each(function() {
                var e, n = t.S(this),
                    s = n.data(t.attr_name(!0) + "-init"),
                    a = n.parent("." + t.settings.sticky_class);
                if (!t.breakpoint()) {
                    var o = n.hasClass("expanded");
                    n.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && t.toggle(n)
                }
                t.is_sticky(n, a, s) && (a.hasClass("fixed") ? (a.removeClass("fixed"), e = a.offset().top, t.S(i.body).hasClass("f-topbar-fixed") && (e -= n.data("height")), n.data("stickyoffset", e), a.addClass("fixed")) : (e = a.offset().top, n.data("stickyoffset", e)))
            })
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        assemble: function(e) {
            var i = this,
                n = e.data(this.attr_name(!0) + "-init"),
                s = i.S("section", e);
            s.detach(), i.S(".has-dropdown>a", s).each(function() {
                var e, s = i.S(this),
                    a = s.siblings(".dropdown");
                s.attr("href"), a.find(".title.back").length || (e = t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>'), t("h5>a", e).html(1 == n.custom_back_text ? n.back_text : "&laquo; " + s.html()), a.prepend(e))
            }), s.appendTo(e), this.sticky(), this.assembled(e)
        },
        assembled: function(e) {
            e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {
                assembled: !0
            }))
        },
        height: function(e) {
            var i = 0,
                n = this;
            return t("> li", e).each(function() {
                i += n.S(this).outerHeight(!0)
            }), i
        },
        sticky: function() {
            var t = this;
            this.S(e).on("scroll", function() {
                t.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function() {
            var t = "." + this.settings.sticky_class,
                i = this.S(e),
                n = this;
            if (n.settings.sticky_topbar && n.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var s = this.settings.sticky_topbar.data("stickyoffset");
                n.S(t).hasClass("expanded") || (i.scrollTop() > s ? n.S(t).hasClass("fixed") || (n.S(t).addClass("fixed"), n.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= s && n.S(t).hasClass("fixed") && (n.S(t).removeClass("fixed"), n.S("body").removeClass("f-topbar-fixed")))
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar")
        },
        reflow: function() {}
    }
}(jQuery, this, this.document);
var Swiper = function(t, e) {
    function i(t, e) {
        return document.querySelectorAll ? (e || document).querySelectorAll(t) : jQuery(t, e)
    }

    function n(t) {
        "use strict";
        return "[object Array]" === Object.prototype.toString.apply(t) ? !0 : !1
    }

    function s() {
        var t = E - D;
        return e.freeMode && (t = E - D), e.slidesPerView > $.slides.length && (t = 0), 0 > t && (t = 0), t
    }

    function a() {
        function t(t) {
            var i = new Image;
            i.onload = function() {
                $.imagesLoaded++, $.imagesLoaded == $.imagesToLoad.length && ($.reInit(), e.onImagesReady && $.fireCallback(e.onImagesReady, $))
            }, i.src = t
        }
        var n = $.h.addEventListener,
            s = "wrapper" == e.eventTarget ? $.wrapper : $.container;
        if ($.browser.ie10 || $.browser.ie11 ? (n(s, $.touchEvents.touchStart, g), n(document, $.touchEvents.touchMove, m), n(document, $.touchEvents.touchEnd, v)) : ($.support.touch && (n(s, "touchstart", g), n(s, "touchmove", m), n(s, "touchend", v)), e.simulateTouch && (n(s, "mousedown", g), n(document, "mousemove", m), n(document, "mouseup", v))), e.autoResize && n(window, "resize", $.resizeFix), o(), $._wheelEvent = !1, e.mousewheelControl) {
            void 0 !== document.onmousewheel && ($._wheelEvent = "mousewheel");
            try {
                WheelEvent("wheel"), $._wheelEvent = "wheel"
            } catch (a) {}
            $._wheelEvent || ($._wheelEvent = "DOMMouseScroll"), $._wheelEvent && n($.container, $._wheelEvent, d)
        }
        if (e.keyboardControl && n(document, "keydown", l), e.updateOnImagesReady) {
            $.imagesToLoad = i("img", $.container);
            for (var r = 0; r < $.imagesToLoad.length; r++) t($.imagesToLoad[r].getAttribute("src"))
        }
    }

    function o() {
        var t, n = $.h.addEventListener;
        if (e.preventLinks) {
            var s = i("a", $.container);
            for (t = 0; t < s.length; t++) n(s[t], "click", p)
        }
        if (e.releaseFormElements) {
            var a = i("input, textarea, select", $.container);
            for (t = 0; t < a.length; t++) n(a[t], $.touchEvents.touchStart, f, !0)
        }
        if (e.onSlideClick)
            for (t = 0; t < $.slides.length; t++) n($.slides[t], "click", c);
        if (e.onSlideTouch)
            for (t = 0; t < $.slides.length; t++) n($.slides[t], $.touchEvents.touchStart, h)
    }

    function r() {
        var t, n = $.h.removeEventListener;
        if (e.onSlideClick)
            for (t = 0; t < $.slides.length; t++) n($.slides[t], "click", c);
        if (e.onSlideTouch)
            for (t = 0; t < $.slides.length; t++) n($.slides[t], $.touchEvents.touchStart, h);
        if (e.releaseFormElements) {
            var s = i("input, textarea, select", $.container);
            for (t = 0; t < s.length; t++) n(s[t], $.touchEvents.touchStart, f, !0)
        }
        if (e.preventLinks) {
            var a = i("a", $.container);
            for (t = 0; t < a.length; t++) n(a[t], "click", p)
        }
    }

    function l(t) {
        var e = t.keyCode || t.charCode;
        if (37 == e || 39 == e || 38 == e || 40 == e) {
            for (var i = !1, n = $.h.getOffset($.container), s = $.h.windowScroll().left, a = $.h.windowScroll().top, o = $.h.windowWidth(), r = $.h.windowHeight(), l = [
                    [n.left, n.top],
                    [n.left + $.width, n.top],
                    [n.left, n.top + $.height],
                    [n.left + $.width, n.top + $.height]
                ], d = 0; d < l.length; d++) {
                var c = l[d];
                c[0] >= s && c[0] <= s + o && c[1] >= a && c[1] <= a + r && (i = !0)
            }
            if (!i) return
        }
        j ? ((37 == e || 39 == e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 39 == e && $.swipeNext(), 37 == e && $.swipePrev()) : ((38 == e || 40 == e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 == e && $.swipeNext(), 38 == e && $.swipePrev())
    }

    function d(t) {
        var i = $._wheelEvent,
            n = 0;
        if (t.detail) n = -t.detail;
        else if ("mousewheel" == i)
            if (e.mousewheelControlForceToAxis)
                if (j) {
                    if (!(Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY))) return;
                    n = t.wheelDeltaX
                } else {
                    if (!(Math.abs(t.wheelDeltaY) > Math.abs(t.wheelDeltaX))) return;
                    n = t.wheelDeltaY
                } else n = t.wheelDelta;
        else if ("DOMMouseScroll" == i) n = -t.detail;
        else if ("wheel" == i)
            if (e.mousewheelControlForceToAxis)
                if (j) {
                    if (!(Math.abs(t.deltaX) > Math.abs(t.deltaY))) return;
                    n = -t.deltaX
                } else {
                    if (!(Math.abs(t.deltaY) > Math.abs(t.deltaX))) return;
                    n = -t.deltaY
                } else n = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? -t.deltaX : -t.deltaY;
        if (e.freeMode) {
            var a = $.getWrapperTranslate() + n;
            if (a > 0 && (a = 0), a < -s() && (a = -s()), $.setWrapperTransition(0), $.setWrapperTranslate(a), $.updateActiveSlide(a), 0 == a || a == -s()) return
        } else(new Date).getTime() - G > 60 && (0 > n ? $.swipeNext() : $.swipePrev()), G = (new Date).getTime();
        return e.autoplay && $.stopAutoplay(!0), t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
    }

    function c(t) {
        $.allowSlideClick && (u(t), $.fireCallback(e.onSlideClick, $, t))
    }

    function h(t) {
        u(t), $.fireCallback(e.onSlideTouch, $, t)
    }

    function u(t) {
        if (t.currentTarget) $.clickedSlide = t.currentTarget;
        else {
            var i = t.srcElement;
            do
                if (i.className.indexOf(e.slideClass) > -1) break;
            while (i = i.parentNode);
            $.clickedSlide = i
        }
        $.clickedSlideIndex = $.slides.indexOf($.clickedSlide), $.clickedSlideLoopIndex = $.clickedSlideIndex - ($.loopedSlides || 0)
    }

    function p(t) {
        return $.allowLinks ? void 0 : (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.preventLinksPropagation && "stopPropagation" in t && t.stopPropagation(), !1)
    }

    function f(t) {
        return t.stopPropagation ? t.stopPropagation() : t.returnValue = !1, !1
    }

    function g(t) {
        if (e.preventLinks && ($.allowLinks = !0), $.isTouched || e.onlyExternal) return !1;
        if (e.noSwiping && (t.target || t.srcElement) && _(t.target || t.srcElement)) return !1;
        if (U = !1, thresholdFirstMove = !1, $.isTouched = !0, K = "touchstart" == t.type, !K || 1 == t.targetTouches.length) {
            $.callPlugins("onTouchStartBegin"), K || $.isAndroid || (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
            var i = K ? t.targetTouches[0].pageX : t.pageX || t.clientX,
                n = K ? t.targetTouches[0].pageY : t.pageY || t.clientY;
            $.touches.startX = $.touches.currentX = i, $.touches.startY = $.touches.currentY = n, $.touches.start = $.touches.current = j ? i : n, $.setWrapperTransition(0), $.positions.start = $.positions.current = $.getWrapperTranslate(), $.setWrapperTranslate($.positions.start), $.times.start = (new Date).getTime(), L = void 0, e.moveStartThreshold > 0 && (Y = !1), e.onTouchStart && $.fireCallback(e.onTouchStart, $), $.callPlugins("onTouchStartEnd")
        }
    }

    function m(t) {
        if ($.isTouched && !e.onlyExternal && (!K || "mousemove" != t.type)) {
            var i = K ? t.targetTouches[0].pageX : t.pageX || t.clientX,
                n = K ? t.targetTouches[0].pageY : t.pageY || t.clientY;
            if ("undefined" == typeof L && j && (L = !!(L || Math.abs(n - $.touches.startY) > Math.abs(i - $.touches.startX))), "undefined" != typeof L || j || (L = !!(L || Math.abs(n - $.touches.startY) < Math.abs(i - $.touches.startX))), L) return void($.isTouched = !1);
            if (t.assignedToSwiper) return void($.isTouched = !1);
            if (t.assignedToSwiper = !0, e.preventLinks && ($.allowLinks = !1), e.onSlideClick && ($.allowSlideClick = !1), e.autoplay && $.stopAutoplay(!0), !K || 1 == t.touches.length) {
                if ($.isMoved || ($.callPlugins("onTouchMoveStart"), e.loop && ($.fixLoop(), $.positions.start = $.getWrapperTranslate()), e.onTouchMoveStart && $.fireCallback(e.onTouchMoveStart, $)), $.isMoved = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, $.touches.current = j ? i : n, $.positions.current = ($.touches.current - $.touches.start) * e.touchRatio + $.positions.start, $.positions.current > 0 && e.onResistanceBefore && $.fireCallback(e.onResistanceBefore, $, $.positions.current), $.positions.current < -s() && e.onResistanceAfter && $.fireCallback(e.onResistanceAfter, $, Math.abs($.positions.current + s())), e.resistance && "100%" != e.resistance) {
                    if ($.positions.current > 0) {
                        var a = 1 - $.positions.current / D / 2;
                        $.positions.current = .5 > a ? D / 2 : $.positions.current * a
                    }
                    if ($.positions.current < -s()) {
                        var o = ($.touches.current - $.touches.start) * e.touchRatio + (s() + $.positions.start),
                            a = (D + o) / D,
                            r = $.positions.current - o * (1 - a) / 2,
                            l = -s() - D / 2;
                        $.positions.current = l > r || 0 >= a ? l : r
                    }
                }
                if (e.resistance && "100%" == e.resistance && ($.positions.current > 0 && (!e.freeMode || e.freeModeFluid) && ($.positions.current = 0), $.positions.current < -s() && (!e.freeMode || e.freeModeFluid) && ($.positions.current = -s())), !e.followFinger) return;
                if (e.moveStartThreshold)
                    if (Math.abs($.touches.current - $.touches.start) > e.moveStartThreshold || Y) {
                        if (!Y) return Y = !0, void($.touches.start = $.touches.current);
                        $.setWrapperTranslate($.positions.current)
                    } else $.positions.current = $.positions.start;
                else $.setWrapperTranslate($.positions.current);
                return (e.freeMode || e.watchActiveIndex) && $.updateActiveSlide($.positions.current), e.grabCursor && ($.container.style.cursor = "move", $.container.style.cursor = "grabbing", $.container.style.cursor = "-moz-grabbin", $.container.style.cursor = "-webkit-grabbing"), Q || (Q = $.touches.current), Z || (Z = (new Date).getTime()), $.velocity = ($.touches.current - Q) / ((new Date).getTime() - Z) / 2, Math.abs($.touches.current - Q) < 2 && ($.velocity = 0), Q = $.touches.current, Z = (new Date).getTime(), $.callPlugins("onTouchMoveEnd"), e.onTouchMove && $.fireCallback(e.onTouchMove, $), !1
            }
        }
    }

    function v() {
        if (L && $.swipeReset(), !e.onlyExternal && $.isTouched) {
            $.isTouched = !1, e.grabCursor && ($.container.style.cursor = "move", $.container.style.cursor = "grab", $.container.style.cursor = "-moz-grab", $.container.style.cursor = "-webkit-grab"), $.positions.current || 0 === $.positions.current || ($.positions.current = $.positions.start), e.followFinger && $.setWrapperTranslate($.positions.current), $.times.end = (new Date).getTime(), $.touches.diff = $.touches.current - $.touches.start, $.touches.abs = Math.abs($.touches.diff), $.positions.diff = $.positions.current - $.positions.start, $.positions.abs = Math.abs($.positions.diff);
            var t = $.positions.diff,
                i = $.positions.abs,
                n = $.times.end - $.times.start;
            5 > i && 300 > n && 0 == $.allowLinks && (e.freeMode || 0 == i || $.swipeReset(), e.preventLinks && ($.allowLinks = !0), e.onSlideClick && ($.allowSlideClick = !0)), setTimeout(function() {
                e.preventLinks && ($.allowLinks = !0), e.onSlideClick && ($.allowSlideClick = !0)
            }, 100);
            var a = s();
            if (!$.isMoved && e.freeMode) return $.isMoved = !1, e.onTouchEnd && $.fireCallback(e.onTouchEnd, $), void $.callPlugins("onTouchEnd");
            if (!$.isMoved || $.positions.current > 0 || $.positions.current < -a) return $.swipeReset(), e.onTouchEnd && $.fireCallback(e.onTouchEnd, $), void $.callPlugins("onTouchEnd");
            if ($.isMoved = !1, e.freeMode) {
                if (e.freeModeFluid) {
                    var o, r = 1e3 * e.momentumRatio,
                        l = $.velocity * r,
                        d = $.positions.current + l,
                        c = !1,
                        h = 20 * Math.abs($.velocity) * e.momentumBounceRatio; - a > d && (e.momentumBounce && $.support.transitions ? (-h > d + a && (d = -a - h), o = -a, c = !0, U = !0) : d = -a), d > 0 && (e.momentumBounce && $.support.transitions ? (d > h && (d = h), o = 0, c = !0, U = !0) : d = 0), 0 != $.velocity && (r = Math.abs((d - $.positions.current) / $.velocity)), $.setWrapperTranslate(d), $.setWrapperTransition(r), e.momentumBounce && c && $.wrapperTransitionEnd(function() {
                        U && (e.onMomentumBounce && $.fireCallback(e.onMomentumBounce, $), $.callPlugins("onMomentumBounce"), $.setWrapperTranslate(o), $.setWrapperTransition(300))
                    }), $.updateActiveSlide(d)
                }
                return (!e.freeModeFluid || n >= 300) && $.updateActiveSlide($.positions.current), e.onTouchEnd && $.fireCallback(e.onTouchEnd, $), void $.callPlugins("onTouchEnd")
            }
            P = 0 > t ? "toNext" : "toPrev", "toNext" == P && 300 >= n && (30 > i || !e.shortSwipes ? $.swipeReset() : $.swipeNext(!0)), "toPrev" == P && 300 >= n && (30 > i || !e.shortSwipes ? $.swipeReset() : $.swipePrev(!0));
            var u = 0;
            if ("auto" == e.slidesPerView) {
                for (var p, f = Math.abs($.getWrapperTranslate()), g = 0, m = 0; m < $.slides.length; m++)
                    if (p = j ? $.slides[m].getWidth(!0) : $.slides[m].getHeight(!0), g += p, g > f) {
                        u = p;
                        break
                    }
                u > D && (u = D)
            } else u = A * e.slidesPerView;
            "toNext" == P && n > 300 && (i >= u * e.longSwipesRatio ? $.swipeNext(!0) : $.swipeReset()), "toPrev" == P && n > 300 && (i >= u * e.longSwipesRatio ? $.swipePrev(!0) : $.swipeReset()), e.onTouchEnd && $.fireCallback(e.onTouchEnd, $), $.callPlugins("onTouchEnd")
        }
    }

    function _(t) {
        var i = !1;
        do t.className.indexOf(e.noSwipingClass) > -1 && (i = !0), t = t.parentElement; while (!i && t.parentElement && -1 == t.className.indexOf(e.wrapperClass));
        return !i && t.className.indexOf(e.wrapperClass) > -1 && t.className.indexOf(e.noSwipingClass) > -1 && (i = !0), i
    }

    function w(t, e) {
        var i, n = document.createElement("div");
        return n.innerHTML = e, i = n.firstChild, i.className += " " + t, i.outerHTML
    }

    function b(t, i, n) {
        function s() {
            var i = +new Date,
                n = i - o;
            r += l * n / (1e3 / 60), c = "toNext" == d ? r > t : t > r, c ? ($.setWrapperTranslate(Math.round(r)), $._DOMAnimating = !0, window.setTimeout(function() {
                s()
            }, 1e3 / 60)) : (e.onSlideChangeEnd && $.fireCallback(e.onSlideChangeEnd, $), $.setWrapperTranslate(t), $._DOMAnimating = !1)
        }
        var a = "to" == i && n.speed >= 0 ? n.speed : e.speed,
            o = +new Date;
        if ($.support.transitions || !e.DOMAnimation) $.setWrapperTranslate(t), $.setWrapperTransition(a);
        else {
            var r = $.getWrapperTranslate(),
                l = Math.ceil((t - r) / a * (1e3 / 60)),
                d = r > t ? "toNext" : "toPrev",
                c = "toNext" == d ? r > t : t > r;
            if ($._DOMAnimating) return;
            s()
        }
        $.updateActiveSlide(t), e.onSlideNext && "next" == i && $.fireCallback(e.onSlideNext, $, t), e.onSlidePrev && "prev" == i && $.fireCallback(e.onSlidePrev, $, t), e.onSlideReset && "reset" == i && $.fireCallback(e.onSlideReset, $, t), ("next" == i || "prev" == i || "to" == i && 1 == n.runCallbacks) && y(i)
    }

    function y(t) {
        if ($.callPlugins("onSlideChangeStart"), e.onSlideChangeStart)
            if (e.queueStartCallbacks && $.support.transitions) {
                if ($._queueStartCallbacks) return;
                $._queueStartCallbacks = !0, $.fireCallback(e.onSlideChangeStart, $, t), $.wrapperTransitionEnd(function() {
                    $._queueStartCallbacks = !1
                })
            } else $.fireCallback(e.onSlideChangeStart, $, t);
        if (e.onSlideChangeEnd)
            if ($.support.transitions)
                if (e.queueEndCallbacks) {
                    if ($._queueEndCallbacks) return;
                    $._queueEndCallbacks = !0, $.wrapperTransitionEnd(function(i) {
                        $.fireCallback(e.onSlideChangeEnd, i, t)
                    })
                } else $.wrapperTransitionEnd(function(i) {
                    $.fireCallback(e.onSlideChangeEnd, i, t)
                });
        else e.DOMAnimation || setTimeout(function() {
            $.fireCallback(e.onSlideChangeEnd, $, t)
        }, 10)
    }

    function x() {
        for (var t = $.paginationButtons, e = 0; e < t.length; e++) $.h.removeEventListener(t[e], "click", C)
    }

    function S() {
        for (var t = $.paginationButtons, e = 0; e < t.length; e++) $.h.addEventListener(t[e], "click", C)
    }

    function C(t) {
        for (var e, i = t.target || t.srcElement, n = $.paginationButtons, s = 0; s < n.length; s++) i === n[s] && (e = s);
        $.swipeTo(e)
    }

    function k() {
        J = setTimeout(function() {
            e.loop ? ($.fixLoop(), $.swipeNext(!0)) : $.swipeNext(!0) || (e.autoplayStopOnLast ? (clearTimeout(J), J = void 0) : $.swipeTo(0)), $.wrapperTransitionEnd(function() {
                "undefined" != typeof J && k()
            })
        }, e.autoplay)
    }

    function T() {
        $.calcSlides(), e.loader.slides.length > 0 && 0 == $.slides.length && $.loadSlides(), e.loop && $.createLoop(), $.init(), a(), e.pagination && $.createPagination(!0), e.loop || e.initialSlide > 0 ? $.swipeTo(e.initialSlide, 0, !1) : $.updateActiveSlide(0), e.autoplay && $.startAutoplay(), $.centerIndex = $.activeIndex, e.onSwiperCreated && $.fireCallback(e.onSwiperCreated, $), $.callPlugins("onSwiperCreated")
    }
    if (document.body.__defineGetter__ && HTMLElement) {
        var F = HTMLElement.prototype;
        F.__defineGetter__ && F.__defineGetter__("outerHTML", function() {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    if (window.getComputedStyle || (window.getComputedStyle = function(t) {
            return this.el = t, this.getPropertyValue = function(e) {
                var i = /(\-([a-z]){1})/g;
                return "float" === e && (e = "styleFloat"), i.test(e) && (e = e.replace(i, function() {
                    return arguments[2].toUpperCase()
                })), t.currentStyle[e] ? t.currentStyle[e] : null
            }, this
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
            for (var i = e || 0, n = this.length; n > i; i++)
                if (this[i] === t) return i;
            return -1
        }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof t && (t.nodeType || 0 !== i(t).length)) {
        var $ = this;
        $.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        }, $.positions = {
            start: 0,
            abs: 0,
            diff: 0,
            current: 0
        }, $.times = {
            start: 0,
            end: 0
        }, $.id = (new Date).getTime(), $.container = t.nodeType ? t : i(t)[0], $.isTouched = !1, $.isMoved = !1, $.activeIndex = 0, $.centerIndex = 0, $.activeLoaderIndex = 0, $.activeLoopIndex = 0, $.previousIndex = null, $.velocity = 0, $.snapGrid = [], $.slidesGrid = [], $.imagesToLoad = [], $.imagesLoaded = 0, $.wrapperLeft = 0, $.wrapperRight = 0, $.wrapperTop = 0, $.wrapperBottom = 0, $.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
        var M, A, E, P, L, D, I = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: .5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        e = e || {};
        for (var z in I)
            if (z in e && "object" == typeof e[z])
                for (var W in I[z]) W in e[z] || (e[z][W] = I[z][W]);
            else z in e || (e[z] = I[z]);
        $.params = e, e.scrollContainer && (e.freeMode = !0, e.freeModeFluid = !0), e.loop && (e.resistance = "100%");
        var j = "horizontal" === e.mode,
            H = ["mousedown", "mousemove", "mouseup"];
        $.browser.ie10 && (H = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), $.browser.ie11 && (H = ["pointerdown", "pointermove", "pointerup"]), $.touchEvents = {
            touchStart: $.support.touch || !e.simulateTouch ? "touchstart" : H[0],
            touchMove: $.support.touch || !e.simulateTouch ? "touchmove" : H[1],
            touchEnd: $.support.touch || !e.simulateTouch ? "touchend" : H[2]
        };
        for (var O = $.container.childNodes.length - 1; O >= 0; O--)
            if ($.container.childNodes[O].className)
                for (var q = $.container.childNodes[O].className.split(" "), N = 0; N < q.length; N++) q[N] === e.wrapperClass && (M = $.container.childNodes[O]);
        $.wrapper = M, $._extendSwiperSlide = function(t) {
            return t.append = function() {
                return e.loop ? t.insertAfter($.slides.length - $.loopedSlides) : ($.wrapper.appendChild(t), $.reInit()), t
            }, t.prepend = function() {
                return e.loop ? ($.wrapper.insertBefore(t, $.slides[$.loopedSlides]), $.removeLoopedSlides(), $.calcSlides(), $.createLoop()) : $.wrapper.insertBefore(t, $.wrapper.firstChild), $.reInit(), t
            }, t.insertAfter = function(i) {
                if ("undefined" == typeof i) return !1;
                var n;
                return e.loop ? (n = $.slides[i + 1 + $.loopedSlides], n ? $.wrapper.insertBefore(t, n) : $.wrapper.appendChild(t), $.removeLoopedSlides(), $.calcSlides(), $.createLoop()) : (n = $.slides[i + 1], $.wrapper.insertBefore(t, n)), $.reInit(), t
            }, t.clone = function() {
                return $._extendSwiperSlide(t.cloneNode(!0))
            }, t.remove = function() {
                $.wrapper.removeChild(t), $.reInit()
            }, t.html = function(e) {
                return "undefined" == typeof e ? t.innerHTML : (t.innerHTML = e, t)
            }, t.index = function() {
                for (var e, i = $.slides.length - 1; i >= 0; i--) t === $.slides[i] && (e = i);
                return e
            }, t.isActive = function() {
                return t.index() === $.activeIndex ? !0 : !1
            }, t.swiperSlideDataStorage || (t.swiperSlideDataStorage = {}), t.getData = function(e) {
                return t.swiperSlideDataStorage[e]
            }, t.setData = function(e, i) {
                return t.swiperSlideDataStorage[e] = i, t
            }, t.data = function(e, i) {
                return i ? (t.setAttribute("data-" + e, i), t) : t.getAttribute("data-" + e)
            }, t.getWidth = function(e) {
                return $.h.getWidth(t, e)
            }, t.getHeight = function(e) {
                return $.h.getHeight(t, e)
            }, t.getOffset = function() {
                return $.h.getOffset(t)
            }, t
        }, $.calcSlides = function(t) {
            var i = $.slides ? $.slides.length : !1;
            $.slides = [], $.displaySlides = [];
            for (var n = 0; n < $.wrapper.childNodes.length; n++)
                if ($.wrapper.childNodes[n].className)
                    for (var s = $.wrapper.childNodes[n].className, a = s.split(" "), l = 0; l < a.length; l++) a[l] === e.slideClass && $.slides.push($.wrapper.childNodes[n]);
            for (n = $.slides.length - 1; n >= 0; n--) $._extendSwiperSlide($.slides[n]);
            i !== !1 && (i !== $.slides.length || t) && (r(), o(), $.updateActiveSlide(), $.params.pagination && $.createPagination(), $.callPlugins("numberOfSlidesChanged"))
        }, $.createSlide = function(t, i, n) {
            var i = i || $.params.slideClass,
                n = n || e.slideElement,
                s = document.createElement(n);
            return s.innerHTML = t || "", s.className = i, $._extendSwiperSlide(s)
        }, $.appendSlide = function(t, e, i) {
            return t ? t.nodeType ? $._extendSwiperSlide(t).append() : $.createSlide(t, e, i).append() : void 0
        }, $.prependSlide = function(t, e, i) {
            return t ? t.nodeType ? $._extendSwiperSlide(t).prepend() : $.createSlide(t, e, i).prepend() : void 0
        }, $.insertSlideAfter = function(t, e, i, n) {
            return "undefined" == typeof t ? !1 : e.nodeType ? $._extendSwiperSlide(e).insertAfter(t) : $.createSlide(e, i, n).insertAfter(t)
        }, $.removeSlide = function(t) {
            if ($.slides[t]) {
                if (e.loop) {
                    if (!$.slides[t + $.loopedSlides]) return !1;
                    $.slides[t + $.loopedSlides].remove(), $.removeLoopedSlides(), $.calcSlides(), $.createLoop()
                } else $.slides[t].remove();
                return !0
            }
            return !1
        }, $.removeLastSlide = function() {
            return $.slides.length > 0 ? (e.loop ? ($.slides[$.slides.length - 1 - $.loopedSlides].remove(), $.removeLoopedSlides(), $.calcSlides(), $.createLoop()) : $.slides[$.slides.length - 1].remove(), !0) : !1
        }, $.removeAllSlides = function() {
            for (var t = $.slides.length - 1; t >= 0; t--) $.slides[t].remove()
        }, $.getSlide = function(t) {
            return $.slides[t]
        }, $.getLastSlide = function() {
            return $.slides[$.slides.length - 1]
        }, $.getFirstSlide = function() {
            return $.slides[0]
        }, $.activeSlide = function() {
            return $.slides[$.activeIndex]
        }, $.fireCallback = function() {
            var t = arguments[0];
            if ("[object Array]" === Object.prototype.toString.call(t))
                for (var i = 0; i < t.length; i++) "function" == typeof t[i] && t[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            else "[object String]" === Object.prototype.toString.call(t) ? e["on" + t] && $.fireCallback(e["on" + t]) : t(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        }, $.addCallback = function(t, e) {
            "use strict";
            var i, s = this;
            return s.params["on" + t] ? n(this.params["on" + t]) ? this.params["on" + t].push(e) : "function" == typeof this.params["on" + t] ? (i = this.params["on" + t], this.params["on" + t] = [], this.params["on" + t].push(i), this.params["on" + t].push(e)) : void 0 : (this.params["on" + t] = [], this.params["on" + t].push(e))
        }, $.removeCallbacks = function(t) {
            return $.params["on" + t] ? $.params["on" + t] = null : void 0
        };
        var R = [];
        for (var B in $.plugins)
            if (e[B]) {
                var V = $.plugins[B]($, e[B]);
                V && R.push(V)
            }
        $.callPlugins = function(t, e) {
            e || (e = {});
            for (var i = 0; i < R.length; i++) t in R[i] && R[i][t](e)
        }, !$.browser.ie10 && !$.browser.ie11 || e.onlyExternal || $.wrapper.classList.add("swiper-wp8-" + (j ? "horizontal" : "vertical")), e.freeMode && ($.container.className += " swiper-free-mode"), $.initialized = !1, $.init = function(t, i) {
            var n = $.h.getWidth($.container),
                s = $.h.getHeight($.container);
            if (n !== $.width || s !== $.height || t) {
                $.width = n, $.height = s, D = j ? n : s;
                var a = $.wrapper;
                if (t && $.calcSlides(i), "auto" === e.slidesPerView) {
                    var o = 0,
                        r = 0;
                    e.slidesOffset > 0 && (a.style.paddingLeft = "", a.style.paddingRight = "", a.style.paddingTop = "", a.style.paddingBottom = ""), a.style.width = "", a.style.height = "", e.offsetPxBefore > 0 && (j ? $.wrapperLeft = e.offsetPxBefore : $.wrapperTop = e.offsetPxBefore), e.offsetPxAfter > 0 && (j ? $.wrapperRight = e.offsetPxAfter : $.wrapperBottom = e.offsetPxAfter), e.centeredSlides && (j ? ($.wrapperLeft = (D - this.slides[0].getWidth(!0)) / 2, $.wrapperRight = (D - $.slides[$.slides.length - 1].getWidth(!0)) / 2) : ($.wrapperTop = (D - $.slides[0].getHeight(!0)) / 2, $.wrapperBottom = (D - $.slides[$.slides.length - 1].getHeight(!0)) / 2)), j ? ($.wrapperLeft >= 0 && (a.style.paddingLeft = $.wrapperLeft + "px"), $.wrapperRight >= 0 && (a.style.paddingRight = $.wrapperRight + "px")) : ($.wrapperTop >= 0 && (a.style.paddingTop = $.wrapperTop + "px"), $.wrapperBottom >= 0 && (a.style.paddingBottom = $.wrapperBottom + "px"));
                    var l = 0,
                        d = 0;
                    $.snapGrid = [], $.slidesGrid = [];
                    for (var c = 0, h = 0; h < $.slides.length; h++) {
                        var u = $.slides[h].getWidth(!0),
                            p = $.slides[h].getHeight(!0);
                        e.calculateHeight && (c = Math.max(c, p));
                        var f = j ? u : p;
                        if (e.centeredSlides) {
                            var g = h === $.slides.length - 1 ? 0 : $.slides[h + 1].getWidth(!0),
                                m = h === $.slides.length - 1 ? 0 : $.slides[h + 1].getHeight(!0),
                                v = j ? g : m;
                            if (f > D) {
                                for (var _ = 0; _ <= Math.floor(f / (D + $.wrapperLeft)); _++) $.snapGrid.push(0 === _ ? l + $.wrapperLeft : l + $.wrapperLeft + D * _);
                                $.slidesGrid.push(l + $.wrapperLeft)
                            } else $.snapGrid.push(d), $.slidesGrid.push(d);
                            d += f / 2 + v / 2
                        } else {
                            if (f > D)
                                for (var _ = 0; _ <= Math.floor(f / D); _++) $.snapGrid.push(l + D * _);
                            else $.snapGrid.push(l);
                            $.slidesGrid.push(l)
                        }
                        l += f, o += u, r += p
                    }
                    e.calculateHeight && ($.height = c), j ? (E = o + $.wrapperRight + $.wrapperLeft, a.style.width = o + "px", a.style.height = $.height + "px") : (E = r + $.wrapperTop + $.wrapperBottom, a.style.width = $.width + "px", a.style.height = r + "px")
                } else if (e.scrollContainer) {
                    a.style.width = "", a.style.height = "";
                    var w = $.slides[0].getWidth(!0),
                        b = $.slides[0].getHeight(!0);
                    E = j ? w : b, a.style.width = w + "px", a.style.height = b + "px", A = j ? w : b
                } else {
                    if (e.calculateHeight) {
                        var c = 0,
                            b = 0;
                        j || ($.container.style.height = ""), a.style.height = "";
                        for (var h = 0; h < $.slides.length; h++) $.slides[h].style.height = "", c = Math.max($.slides[h].getHeight(!0), c), j || (b += $.slides[h].getHeight(!0));
                        var p = c;
                        $.height = p, j ? b = p : (D = p, $.container.style.height = D + "px")
                    } else var p = j ? $.height : $.height / e.slidesPerView,
                        b = j ? $.height : $.slides.length * p;
                    var u = j ? $.width / e.slidesPerView : $.width,
                        w = j ? $.slides.length * u : $.width;
                    A = j ? u : p, e.offsetSlidesBefore > 0 && (j ? $.wrapperLeft = A * e.offsetSlidesBefore : $.wrapperTop = A * e.offsetSlidesBefore), e.offsetSlidesAfter > 0 && (j ? $.wrapperRight = A * e.offsetSlidesAfter : $.wrapperBottom = A * e.offsetSlidesAfter), e.offsetPxBefore > 0 && (j ? $.wrapperLeft = e.offsetPxBefore : $.wrapperTop = e.offsetPxBefore), e.offsetPxAfter > 0 && (j ? $.wrapperRight = e.offsetPxAfter : $.wrapperBottom = e.offsetPxAfter), e.centeredSlides && (j ? ($.wrapperLeft = (D - A) / 2, $.wrapperRight = (D - A) / 2) : ($.wrapperTop = (D - A) / 2, $.wrapperBottom = (D - A) / 2)), j ? ($.wrapperLeft > 0 && (a.style.paddingLeft = $.wrapperLeft + "px"), $.wrapperRight > 0 && (a.style.paddingRight = $.wrapperRight + "px")) : ($.wrapperTop > 0 && (a.style.paddingTop = $.wrapperTop + "px"), $.wrapperBottom > 0 && (a.style.paddingBottom = $.wrapperBottom + "px")), E = j ? w + $.wrapperRight + $.wrapperLeft : b + $.wrapperTop + $.wrapperBottom, e.cssWidthAndHeight || (parseFloat(w) > 0 && (a.style.width = w + "px"), parseFloat(b) > 0 && (a.style.height = b + "px"));
                    var l = 0;
                    $.snapGrid = [], $.slidesGrid = [];
                    for (var h = 0; h < $.slides.length; h++) $.snapGrid.push(l), $.slidesGrid.push(l), l += A, e.cssWidthAndHeight || (parseFloat(u) > 0 && ($.slides[h].style.width = u + "px"), parseFloat(p) > 0 && ($.slides[h].style.height = p + "px"))
                }
                $.initialized ? ($.callPlugins("onInit"), e.onInit && $.fireCallback(e.onInit, $)) : ($.callPlugins("onFirstInit"), e.onFirstInit && $.fireCallback(e.onFirstInit, $)), $.initialized = !0
            }
        }, $.reInit = function(t) {
            $.init(!0, t)
        }, $.resizeFix = function(t) {
            $.callPlugins("beforeResizeFix"), $.init(e.resizeReInit || t), e.freeMode ? $.getWrapperTranslate() < -s() && ($.setWrapperTransition(0), $.setWrapperTranslate(-s())) : ($.swipeTo(e.loop ? $.activeLoopIndex : $.activeIndex, 0, !1), e.autoplay && ($.support.transitions && "undefined" != typeof J ? "undefined" != typeof J && (clearTimeout(J), J = void 0, $.startAutoplay()) : "undefined" != typeof te && (clearInterval(te), te = void 0, $.startAutoplay()))), $.callPlugins("afterResizeFix")
        }, $.destroy = function() {
            var t = $.h.removeEventListener,
                i = "wrapper" == e.eventTarget ? $.wrapper : $.container;
            $.browser.ie10 || $.browser.ie11 ? (t(i, $.touchEvents.touchStart, g), t(document, $.touchEvents.touchMove, m), t(document, $.touchEvents.touchEnd, v)) : ($.support.touch && (t(i, "touchstart", g), t(i, "touchmove", m), t(i, "touchend", v)), e.simulateTouch && (t(i, "mousedown", g), t(document, "mousemove", m), t(document, "mouseup", v))), e.autoResize && t(window, "resize", $.resizeFix), r(), e.paginationClickable && x(), e.mousewheelControl && $._wheelEvent && t($.container, $._wheelEvent, d), e.keyboardControl && t(document, "keydown", l), e.autoplay && $.stopAutoplay(), $.callPlugins("onDestroy"), $ = null
        };
        var G = (new Date).getTime();
        if (e.grabCursor) {
            var X = $.container.style;
            X.cursor = "move", X.cursor = "grab", X.cursor = "-moz-grab", X.cursor = "-webkit-grab"
        }
        $.allowSlideClick = !0, $.allowLinks = !0;
        var Y, Q, Z, K = !1,
            U = !0;
        $.swipeNext = function(t) {
            !t && e.loop && $.fixLoop(), !t && e.autoplay && $.stopAutoplay(!0), $.callPlugins("onSwipeNext");
            var i = $.getWrapperTranslate(),
                n = i;
            if ("auto" == e.slidesPerView) {
                for (var a = 0; a < $.snapGrid.length; a++)
                    if (-i >= $.snapGrid[a] && -i < $.snapGrid[a + 1]) {
                        n = -$.snapGrid[a + 1];
                        break
                    }
            } else {
                var o = A * e.slidesPerGroup;
                n = -(Math.floor(Math.abs(i) / Math.floor(o)) * o + o)
            }
            return n < -s() && (n = -s()), n == i ? !1 : (b(n, "next"), !0)
        }, $.swipePrev = function(t) {
            !t && e.loop && $.fixLoop(), !t && e.autoplay && $.stopAutoplay(!0), $.callPlugins("onSwipePrev");
            var i, n = Math.ceil($.getWrapperTranslate());
            if ("auto" == e.slidesPerView) {
                i = 0;
                for (var s = 1; s < $.snapGrid.length; s++) {
                    if (-n == $.snapGrid[s]) {
                        i = -$.snapGrid[s - 1];
                        break
                    }
                    if (-n > $.snapGrid[s] && -n < $.snapGrid[s + 1]) {
                        i = -$.snapGrid[s];
                        break
                    }
                }
            } else {
                var a = A * e.slidesPerGroup;
                i = -(Math.ceil(-n / a) - 1) * a
            }
            return i > 0 && (i = 0), i == n ? !1 : (b(i, "prev"), !0)
        }, $.swipeReset = function() {
            $.callPlugins("onSwipeReset");
            var t, i = $.getWrapperTranslate(),
                n = A * e.slidesPerGroup;
            if (-s(), "auto" == e.slidesPerView) {
                t = 0;
                for (var a = 0; a < $.snapGrid.length; a++) {
                    if (-i === $.snapGrid[a]) return;
                    if (-i >= $.snapGrid[a] && -i < $.snapGrid[a + 1]) {
                        t = $.positions.diff > 0 ? -$.snapGrid[a + 1] : -$.snapGrid[a];
                        break
                    }
                } - i >= $.snapGrid[$.snapGrid.length - 1] && (t = -$.snapGrid[$.snapGrid.length - 1]), i <= -s() && (t = -s())
            } else t = 0 > i ? Math.round(i / n) * n : 0;
            return e.scrollContainer && (t = 0 > i ? i : 0), t < -s() && (t = -s()), e.scrollContainer && D > A && (t = 0), t == i ? !1 : (b(t, "reset"), !0)
        }, $.swipeTo = function(t, i, n) {
            t = parseInt(t, 10), $.callPlugins("onSwipeTo", {
                index: t,
                speed: i
            }), e.loop && (t += $.loopedSlides);
            var a = $.getWrapperTranslate();
            if (!(t > $.slides.length - 1 || 0 > t)) {
                var o;
                return o = "auto" == e.slidesPerView ? -$.slidesGrid[t] : -t * A, o < -s() && (o = -s()), o == a ? !1 : (n = n === !1 ? !1 : !0, b(o, "to", {
                    index: t,
                    speed: i,
                    runCallbacks: n
                }), !0)
            }
        }, $._queueStartCallbacks = !1, $._queueEndCallbacks = !1, $.updateActiveSlide = function(t) {
            if ($.initialized && 0 != $.slides.length) {
                if ($.previousIndex = $.activeIndex, "undefined" == typeof t && (t = $.getWrapperTranslate()), t > 0 && (t = 0), "auto" == e.slidesPerView) {
                    if ($.activeIndex = $.slidesGrid.indexOf(-t), $.activeIndex < 0) {
                        for (var i = 0; i < $.slidesGrid.length - 1 && !(-t > $.slidesGrid[i] && -t < $.slidesGrid[i + 1]); i++);
                        var n = Math.abs($.slidesGrid[i] + t),
                            s = Math.abs($.slidesGrid[i + 1] + t);
                        $.activeIndex = s >= n ? i : i + 1
                    }
                } else $.activeIndex = Math[e.visibilityFullFit ? "ceil" : "round"](-t / A);
                if ($.activeIndex == $.slides.length && ($.activeIndex = $.slides.length - 1), $.activeIndex < 0 && ($.activeIndex = 0), $.slides[$.activeIndex]) {
                    $.calcVisibleSlides(t);
                    for (var a = new RegExp("\\s*" + e.slideActiveClass), o = new RegExp("\\s*" + e.slideVisibleClass), i = 0; i < $.slides.length; i++) $.slides[i].className = $.slides[i].className.replace(a, "").replace(o, ""), $.visibleSlides.indexOf($.slides[i]) >= 0 && ($.slides[i].className += " " + e.slideVisibleClass);
                    if ($.slides[$.activeIndex].className += " " + e.slideActiveClass, e.loop) {
                        var r = $.loopedSlides;
                        $.activeLoopIndex = $.activeIndex - r, $.activeLoopIndex >= $.slides.length - 2 * r && ($.activeLoopIndex = $.slides.length - 2 * r - $.activeLoopIndex), $.activeLoopIndex < 0 && ($.activeLoopIndex = $.slides.length - 2 * r + $.activeLoopIndex), $.activeLoopIndex < 0 && ($.activeLoopIndex = 0)
                    } else $.activeLoopIndex = $.activeIndex;
                    e.pagination && $.updatePagination(t)
                }
            }
        }, $.createPagination = function(t) {
            if (e.paginationClickable && $.paginationButtons && x(), $.paginationContainer = e.pagination.nodeType ? e.pagination : i(e.pagination)[0], e.createPagination) {
                var n = "",
                    s = $.slides.length,
                    a = s;
                e.loop && (a -= 2 * $.loopedSlides);
                for (var o = 0; a > o; o++) n += "<" + e.paginationElement + ' class="' + e.paginationElementClass + '"></' + e.paginationElement + ">";
                $.paginationContainer.innerHTML = n
            }
            $.paginationButtons = i("." + e.paginationElementClass, $.paginationContainer), t || $.updatePagination(), $.callPlugins("onCreatePagination"), e.paginationClickable && S()
        }, $.updatePagination = function(t) {
            if (e.pagination && !($.slides.length < 1)) {
                var n = i("." + e.paginationActiveClass, $.paginationContainer);
                if (n) {
                    var s = $.paginationButtons;
                    if (0 != s.length) {
                        for (var a = 0; a < s.length; a++) s[a].className = e.paginationElementClass;
                        var o = e.loop ? $.loopedSlides : 0;
                        if (e.paginationAsRange) {
                            $.visibleSlides || $.calcVisibleSlides(t);
                            for (var r = [], a = 0; a < $.visibleSlides.length; a++) {
                                var l = $.slides.indexOf($.visibleSlides[a]) - o;
                                e.loop && 0 > l && (l = $.slides.length - 2 * $.loopedSlides + l), e.loop && l >= $.slides.length - 2 * $.loopedSlides && (l = $.slides.length - 2 * $.loopedSlides - l, l = Math.abs(l)), r.push(l)
                            }
                            for (a = 0; a < r.length; a++) s[r[a]] && (s[r[a]].className += " " + e.paginationVisibleClass);
                            e.loop ? s[$.activeLoopIndex].className += " " + e.paginationActiveClass : s[$.activeIndex].className += " " + e.paginationActiveClass
                        } else e.loop ? s[$.activeLoopIndex] && (s[$.activeLoopIndex].className += " " + e.paginationActiveClass + " " + e.paginationVisibleClass) : s[$.activeIndex].className += " " + e.paginationActiveClass + " " + e.paginationVisibleClass
                    }
                }
            }
        }, $.calcVisibleSlides = function(t) {
            var i = [],
                n = 0,
                s = 0,
                a = 0;
            j && $.wrapperLeft > 0 && (t += $.wrapperLeft), !j && $.wrapperTop > 0 && (t += $.wrapperTop);
            for (var o = 0; o < $.slides.length; o++) {
                n += s, s = "auto" == e.slidesPerView ? j ? $.h.getWidth($.slides[o], !0) : $.h.getHeight($.slides[o], !0) : A, a = n + s;
                var r = !1;
                e.visibilityFullFit ? (n >= -t && -t + D >= a && (r = !0), -t >= n && a >= -t + D && (r = !0)) : (a > -t && -t + D >= a && (r = !0), n >= -t && -t + D > n && (r = !0), -t > n && a > -t + D && (r = !0)), r && i.push($.slides[o])
            }
            0 == i.length && (i = [$.slides[$.activeIndex]]), $.visibleSlides = i
        };
        var J = void 0,
            te = void 0;
        $.startAutoplay = function() {
            if ($.support.transitions) {
                if ("undefined" != typeof J) return !1;
                if (!e.autoplay) return;
                $.callPlugins("onAutoplayStart"), k()
            } else {
                if ("undefined" != typeof te) return !1;
                if (!e.autoplay) return;
                $.callPlugins("onAutoplayStart"), te = setInterval(function() {
                    e.loop ? ($.fixLoop(), $.swipeNext(!0)) : $.swipeNext(!0) || (e.autoplayStopOnLast ? (clearInterval(te), te = void 0) : $.swipeTo(0))
                }, e.autoplay)
            }
        }, $.stopAutoplay = function(t) {
            if ($.support.transitions) {
                if (!J) return;
                J && clearTimeout(J), J = void 0, t && !e.autoplayDisableOnInteraction && $.wrapperTransitionEnd(function() {
                    k()
                }), $.callPlugins("onAutoplayStop")
            } else te && clearInterval(te), te = void 0, $.callPlugins("onAutoplayStop")
        }, $.loopCreated = !1, $.removeLoopedSlides = function() {
            if ($.loopCreated)
                for (var t = 0; t < $.slides.length; t++) $.slides[t].getData("looped") === !0 && $.wrapper.removeChild($.slides[t])
        }, $.createLoop = function() {
            if (0 != $.slides.length) {
                $.loopedSlides = "auto" == e.slidesPerView ? e.loopedSlides || 1 : e.slidesPerView + e.loopAdditionalSlides, $.loopedSlides > $.slides.length && ($.loopedSlides = $.slides.length);
                var t, i = "",
                    n = "",
                    s = "",
                    a = $.slides.length,
                    o = Math.floor($.loopedSlides / a),
                    r = $.loopedSlides % a;
                for (t = 0; o * a > t; t++) {
                    var l = t;
                    if (t >= a) {
                        var d = Math.floor(t / a);
                        l = t - a * d
                    }
                    s += $.slides[l].outerHTML
                }
                for (t = 0; r > t; t++) n += w(e.slideDuplicateClass, $.slides[t].outerHTML);
                for (t = a - r; a > t; t++) i += w(e.slideDuplicateClass, $.slides[t].outerHTML);
                var c = i + s + M.innerHTML + s + n;
                for (M.innerHTML = c, $.loopCreated = !0, $.calcSlides(), t = 0; t < $.slides.length; t++)(t < $.loopedSlides || t >= $.slides.length - $.loopedSlides) && $.slides[t].setData("looped", !0);
                $.callPlugins("onCreateLoop")
            }
        }, $.fixLoop = function() {
            var t;
            $.activeIndex < $.loopedSlides ? (t = $.slides.length - 3 * $.loopedSlides + $.activeIndex, $.swipeTo(t, 0, !1)) : ("auto" == e.slidesPerView && $.activeIndex >= 2 * $.loopedSlides || $.activeIndex > $.slides.length - 2 * e.slidesPerView) && (t = -$.slides.length + $.activeIndex + $.loopedSlides, $.swipeTo(t, 0, !1))
        }, $.loadSlides = function() {
            var t = "";
            $.activeLoaderIndex = 0;
            for (var i = e.loader.slides, n = e.loader.loadAllSlides ? i.length : e.slidesPerView * (1 + e.loader.surroundGroups), s = 0; n > s; s++) t += "outer" == e.loader.slidesHTMLType ? i[s] : "<" + e.slideElement + ' class="' + e.slideClass + '" data-swiperindex="' + s + '">' + i[s] + "</" + e.slideElement + ">";
            $.wrapper.innerHTML = t, $.calcSlides(!0), e.loader.loadAllSlides || $.wrapperTransitionEnd($.reloadSlides, !0)
        }, $.reloadSlides = function() {
            var t = e.loader.slides,
                i = parseInt($.activeSlide().data("swiperindex"), 10);
            if (!(0 > i || i > t.length - 1)) {
                $.activeLoaderIndex = i;
                var n = Math.max(0, i - e.slidesPerView * e.loader.surroundGroups),
                    s = Math.min(i + e.slidesPerView * (1 + e.loader.surroundGroups) - 1, t.length - 1);
                if (i > 0) {
                    var a = -A * (i - n);
                    $.setWrapperTranslate(a), $.setWrapperTransition(0)
                }
                if ("reload" === e.loader.logic) {
                    $.wrapper.innerHTML = "";
                    for (var o = "", r = n; s >= r; r++) o += "outer" == e.loader.slidesHTMLType ? t[r] : "<" + e.slideElement + ' class="' + e.slideClass + '" data-swiperindex="' + r + '">' + t[r] + "</" + e.slideElement + ">";
                    $.wrapper.innerHTML = o
                } else {
                    for (var l = 1e3, d = 0, r = 0; r < $.slides.length; r++) {
                        var c = $.slides[r].data("swiperindex");
                        n > c || c > s ? $.wrapper.removeChild($.slides[r]) : (l = Math.min(c, l), d = Math.max(c, d))
                    }
                    for (var r = n; s >= r; r++) {
                        if (l > r) {
                            var h = document.createElement(e.slideElement);
                            h.className = e.slideClass, h.setAttribute("data-swiperindex", r), h.innerHTML = t[r], $.wrapper.insertBefore(h, $.wrapper.firstChild)
                        }
                        if (r > d) {
                            var h = document.createElement(e.slideElement);
                            h.className = e.slideClass, h.setAttribute("data-swiperindex", r), h.innerHTML = t[r], $.wrapper.appendChild(h)
                        }
                    }
                }
                $.reInit(!0)
            }
        }, T()
    }
};
Swiper.prototype = {
        plugins: {},
        wrapperTransitionEnd: function(t, e) {
            function i() {
                if (t(s), s.params.queueEndCallbacks && (s._queueEndCallbacks = !1), !e)
                    for (n = 0; n < o.length; n++) s.h.removeEventListener(a, o[n], i)
            }
            var n, s = this,
                a = s.wrapper,
                o = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
            if (t)
                for (n = 0; n < o.length; n++) s.h.addEventListener(a, o[n], i)
        },
        getWrapperTranslate: function(t) {
            var e, i, n, s, a = this.wrapper;
            return "undefined" == typeof t && (t = "horizontal" == this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (n = window.getComputedStyle(a, null), window.WebKitCSSMatrix ? s = new WebKitCSSMatrix(n.webkitTransform) : (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), e = s.toString().split(",")), "x" == t && (i = window.WebKitCSSMatrix ? s.m41 : parseFloat(16 == e.length ? e[12] : e[4])), "y" == t && (i = window.WebKitCSSMatrix ? s.m42 : parseFloat(16 == e.length ? e[13] : e[5]))) : ("x" == t && (i = parseFloat(a.style.left, 10) || 0), "y" == t && (i = parseFloat(a.style.top, 10) || 0)), i || 0
        },
        setWrapperTranslate: function(t, e, i) {
            var n, s = this.wrapper.style,
                a = {
                    x: 0,
                    y: 0,
                    z: 0
                };
            3 == arguments.length ? (a.x = t, a.y = e, a.z = i) : ("undefined" == typeof e && (e = "horizontal" == this.params.mode ? "x" : "y"), a[e] = t), this.support.transforms && this.params.useCSS3Transforms ? (n = this.support.transforms3d ? "translate3d(" + a.x + "px, " + a.y + "px, " + a.z + "px)" : "translate(" + a.x + "px, " + a.y + "px)", s.webkitTransform = s.MsTransform = s.msTransform = s.MozTransform = s.OTransform = s.transform = n) : (s.left = a.x + "px", s.top = a.y + "px"), this.callPlugins("onSetWrapperTransform", a), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, a)
        },
        setWrapperTransition: function(t) {
            var e = this.wrapper.style;
            e.webkitTransitionDuration = e.MsTransitionDuration = e.msTransitionDuration = e.MozTransitionDuration = e.OTransitionDuration = e.transitionDuration = t / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
                duration: t
            }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, t)
        },
        h: {
            getWidth: function(t, e) {
                var i = window.getComputedStyle(t, null).getPropertyValue("width"),
                    n = parseFloat(i);
                return (isNaN(n) || i.indexOf("%") > 0) && (n = t.offsetWidth - parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-right"))), e && (n += parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-right"))), n
            },
            getHeight: function(t, e) {
                if (e) return t.offsetHeight;
                var i = window.getComputedStyle(t, null).getPropertyValue("height"),
                    n = parseFloat(i);
                return (isNaN(n) || i.indexOf("%") > 0) && (n = t.offsetHeight - parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-bottom"))), e && (n += parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-bottom"))), n
            },
            getOffset: function(t) {
                var e = t.getBoundingClientRect(),
                    i = document.body,
                    n = t.clientTop || i.clientTop || 0,
                    s = t.clientLeft || i.clientLeft || 0,
                    a = window.pageYOffset || t.scrollTop,
                    o = window.pageXOffset || t.scrollLeft;
                return document.documentElement && !window.pageYOffset && (a = document.documentElement.scrollTop, o = document.documentElement.scrollLeft), {
                    top: e.top + a - n,
                    left: e.left + o - s
                }
            },
            windowWidth: function() {
                return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
            },
            windowHeight: function() {
                return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
            },
            windowScroll: function() {
                return "undefined" != typeof pageYOffset ? {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                } : document.documentElement ? {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                } : void 0
            },
            addEventListener: function(t, e, i, n) {
                "undefined" == typeof n && (n = !1), t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
            },
            removeEventListener: function(t, e, i, n) {
                "undefined" == typeof n && (n = !1), t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
            }
        },
        setTransform: function(t, e) {
            var i = t.style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
        },
        setTranslate: function(t, e) {
            var i = t.style,
                n = {
                    x: e.x || 0,
                    y: e.y || 0,
                    z: e.z || 0
                },
                s = this.support.transforms3d ? "translate3d(" + n.x + "px," + n.y + "px," + n.z + "px)" : "translate(" + n.x + "px," + n.y + "px)";
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = s, this.support.transforms || (i.left = n.x + "px", i.top = n.y + "px")
        },
        setTransition: function(t, e) {
            var i = t.style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e + "ms"
        },
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var t = document.createElement("div").style;
                return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
            }(),
            transforms: window.Modernizr && Modernizr.csstransforms === !0 || function() {
                var t = document.createElement("div").style;
                return "transform" in t || "WebkitTransform" in t || "MozTransform" in t || "msTransform" in t || "MsTransform" in t || "OTransform" in t
            }(),
            transitions: window.Modernizr && Modernizr.csstransitions === !0 || function() {
                var t = document.createElement("div").style;
                return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "MsTransition" in t || "OTransition" in t
            }()
        },
        browser: {
            ie8: function() {
                var t = -1;
                if ("Microsoft Internet Explorer" == navigator.appName) {
                    var e = navigator.userAgent,
                        i = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                    null != i.exec(e) && (t = parseFloat(RegExp.$1))
                }
                return -1 != t && 9 > t
            }(),
            ie10: window.navigator.msPointerEnabled,
            ie11: window.navigator.pointerEnabled
        }
    }, (window.jQuery || window.Zepto) && ! function(t) {
        t.fn.swiper = function(e) {
            var i = new Swiper(t(this)[0], e);
            return t(this).data("swiper", i), i
        }
    }(window.jQuery || window.Zepto), "undefined" != typeof module && (module.exports = Swiper),
    function(t) {
        t.fn.countTo = function(e) {
            e = t.extend({}, t.fn.countTo.defaults, e || {});
            var i = Math.ceil(e.speed / e.refreshInterval),
                n = (e.to - e.from) / i;
            return t(this).each(function() {
                function s() {
                    r += n, o++, t(a).html(r.toFixed(e.decimals)), "function" == typeof e.onUpdate && e.onUpdate.call(a, r), o >= i && (clearInterval(l), r = e.to, "function" == typeof e.onComplete && e.onComplete.call(a, r))
                }
                var a = this,
                    o = 0,
                    r = e.from,
                    l = setInterval(s, e.refreshInterval)
            })
        }, t.fn.countTo.defaults = {
            from: 0,
            to: 100,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            onUpdate: null,
            onComplete: null
        }
    }(jQuery);
var $imgW;
if ($(window).scroll(function() {
        $(window).scrollTop() >= 50 ? $(".header").removeClass("trns-head") : $(".header").addClass("trns-head")
    }).scroll(), $("body").is(".page-template-about-page-php")) {
    var s = !0;
    $(window).scroll(function() {
        var t = Math.max($("body").scrollTop(), $("html").scrollTop()),
            e = $("#OurJourney").position().top - $(window).height() / 2;
        t > e && s && ($(".Count").each(function() {
            var t = $(this),
                e = t.text();
            t.countTo({
                from: 0,
                to: e,
                speed: 1500,
                refreshInterval: 20,
                onComplete: function() {
                    console.debug(this)
                }
            })
        }), s = !1)
    }).scroll()
}
if ($("body").is(".page-template-case-study-amz-php")) {
    var s = !0;
    $(window).scroll(function() {
        var t = Math.max($("body").scrollTop(), $("html").scrollTop()),
            e = $(".case_anz_result").position().top - $(window).height() / 2;
        t > e && s && ($(".Count").each(function(t) {
            if ($(this).children("span").length > 0) var e = $(this).children(),
                i = e.text();
            else {
                var e = $(this);
                i = e.text()
            }
            if (4 == t) var n = 3;
            else var n = 0;
            e.countTo({
                from: 0,
                to: i,
                speed: 1500,
                decimals: n,
                refreshInterval: 40,
                onComplete: function() {
                    console.debug(this)
                }
            })
        }), s = !1)
    }).scroll()
}
if ($("body").is(".home")) {
    var s = !0;
    $(window).scroll(function() {
        var t = Math.max($("body").scrollTop(), $("html").scrollTop()),
            e = $(".chart-process").position().top - $(window).height() / 2;
        t > e && s && (processAnim(), s = !1)
    }).scroll()
}
window.getComputedStyle || (window.getComputedStyle = function(t) {
        return this.el = t, this.getPropertyValue = function(e) {
            var i = /(\-([a-z]){1})/g;
            return "float" == e && (e = "styleFloat"), i.test(e) && (e = e.replace(i, function() {
                return arguments[2].toUpperCase()
            })), t.currentStyle[e] ? t.currentStyle[e] : null
        }, this
    }), jQuery(document).ready(function(t) {
        t(".play, .play_text").click(function() {
            var e = t(this).attr("data-video");
            t(".play-video").fadeIn(), t(".vid-holder").append(e), (t("body").is(".home") || t("body").is(".page-template-careers-php")) && t(function() {
                function e(t) {
                    var e = JSON.parse(t.data);
                    switch (e.event) {
                        case "ready":
                            n();
                            break;
                        case "playProgress":
                            onPlayProgress(e.data);
                            break;
                        case "pause":
                            onPause();
                            break;
                        case "finish":
                            s()
                    }
                }

                function i(t, e) {
                    var i = {
                        method: t
                    };
                    e && (i.value = e), JSON.stringify(i), a[0].contentWindow.postMessage(i, o)
                }

                function n() {
                    r.text("ready"), i("addEventListener", "pause"), i("addEventListener", "finish"), i("addEventListener", "playProgress")
                }

                function s() {
                    t(".play-video").fadeOut(), t(".vid-holder iframe").remove()
                }
                var a = t("iframe"),
                    o = window.location.protocol + a.attr("src").split("?")[0],
                    r = t(".status");
                window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent("onmessage", e, !1)
            })
        }), t(".close").click(function() {
            t(".play-video").fadeOut(), t(".vid-holder iframe").remove()
        });
        var e = t(window).width();
        e >= 768 && (hideElem(), t(".comment img[data-gravatar]").each(function() {
            t(this).attr("src", t(this).attr("data-gravatar"))
        }), t(".year_col").each(function() {
            var e = t(this).find(".dtt"),
                i = t(this).find(".tip_cont");
            i.hide(), e.hover(function() {
                i.stop().fadeIn(500)
            }, function() {
                i.stop().fadeOut(500)
            })
        })), e > 1030 && (t(".more_link a").attr("data-reveal-id", "myModal"), t(".more_link a").attr("data-options", "animation:'fadeAndPop'"), t(".more_link a").click(function(t) {
            t.preventDefault()
        }))
    }),
    function(t) {
        function e() {
            d.setAttribute("content", u), p = !0
        }

        function i() {
            d.setAttribute("content", h), p = !1
        }

        function n(n) {
            l = n.accelerationIncludingGravity, a = Math.abs(l.x), o = Math.abs(l.y), r = Math.abs(l.z), !t.orientation && (a > 7 || (r > 6 && 8 > o || 8 > r && o > 6) && a > 5) ? p && i() : p || e()
        }
        if (/iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1) {
            var s = t.document;
            if (s.querySelector) {
                var a, o, r, l, d = s.querySelector("meta[name=viewport]"),
                    c = d && d.getAttribute("content"),
                    h = c + ",maximum-scale=1",
                    u = c + ",maximum-scale=10",
                    p = !0;
                d && (t.addEventListener("orientationchange", e, !1), t.addEventListener("devicemotion", n, !1))
            }
        }
    }(this),
    function(t) {
        t(document).foundation()
    }(jQuery),
    function() {
        var t, e, i = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, n;
                for (i in t) n = t[i], null != n && (e[i] = n);
                return e
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t
        }(), e = this.WeakMap || (e = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, i, n, s, a;
                for (a = this.keys, e = n = 0, s = a.length; s > n; e = ++n)
                    if (i = a[e], i === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var i, n, s, a, o;
                for (o = this.keys, i = s = 0, a = o.length; a > s; i = ++s)
                    if (n = o[i], n === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), this.WOW = function() {
            function n(t) {
                null == t && (t = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new e
            }
            return n.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0
            }, n.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
            }, n.prototype.start = function() {
                var t, e, i, n;
                if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                    if (this.disabled()) return this.resetStyle();
                    for (n = this.boxes, e = 0, i = n.length; i > e; e++) t = n[e], this.applyStyle(t, !0);
                    return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                }
            }, n.prototype.stop = function() {
                return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
            }, n.prototype.show = function(t) {
                return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass
            }, n.prototype.applyStyle = function(t, e) {
                var i, n, s;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), s = t.getAttribute("data-wow-iteration"), this.animate(function(a) {
                    return function() {
                        return a.customStyle(t, e, n, i, s)
                    }
                }(this))
            }, n.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return t()
                }
            }(), n.prototype.resetStyle = function() {
                var t, e, i, n, s;
                for (n = this.boxes, s = [], e = 0, i = n.length; i > e; e++) t = n[e], s.push(t.setAttribute("style", "visibility: visible;"));
                return s
            }, n.prototype.customStyle = function(t, e, i, n, s) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), n && this.vendorSet(t.style, {
                    animationDelay: n
                }), s && this.vendorSet(t.style, {
                    animationIterationCount: s
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, n.prototype.vendors = ["moz", "webkit"], n.prototype.vendorSet = function(t, e) {
                var i, n, s, a;
                a = [];
                for (i in e) n = e[i], t["" + i] = n, a.push(function() {
                    var e, a, o, r;
                    for (o = this.vendors, r = [], e = 0, a = o.length; a > e; e++) s = o[e], r.push(t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = n);
                    return r
                }.call(this));
                return a
            }, n.prototype.vendorCSS = function(t, e) {
                var i, n, s, a, o, r;
                for (n = window.getComputedStyle(t), i = n.getPropertyCSSValue(e), r = this.vendors, a = 0, o = r.length; o > a; a++) s = r[a], i = i || n.getPropertyCSSValue("-" + s + "-" + e);
                return i
            }, n.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = window.getComputedStyle(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, n.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, n.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, n.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, n.prototype.scrollCallback = function() {
                var t;
                return this.scrolled && (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, s;
                    for (n = this.boxes, s = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : s.push(t));
                    return s
                }.call(this), !this.boxes.length) ? this.stop() : void 0
            }, n.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, n.prototype.isVisible = function(t) {
                var e, i, n, s, a;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, a = window.pageYOffset, s = a + this.element.clientHeight - i, n = this.offsetTop(t), e = n + t.clientHeight, s >= n && e >= a
            }, n.prototype.util = function() {
                return this._util || (this._util = new t)
            }, n.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, n
        }()
    }.call(this),
    function(t) {
        "use strict";

        function e(t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }

        function i(t, e) {
            var i = n(t, e) ? a : s;
            i(t, e)
        }
        var n, s, a;
        "classList" in document.documentElement ? (n = function(t, e) {
            return t.classList.contains(e)
        }, s = function(t, e) {
            t.classList.add(e)
        }, a = function(t, e) {
            t.classList.remove(e)
        }) : (n = function(t, i) {
            return e(i).test(t.className)
        }, s = function(t, e) {
            n(t, e) || (t.className = t.className + " " + e)
        }, a = function(t, i) {
            t.className = t.className.replace(e(i), " ")
        });
        var o = {
            hasClass: n,
            addClass: s,
            removeClass: a,
            toggleClass: i,
            has: n,
            add: s,
            remove: a,
            toggle: i
        };
        "function" == typeof define && define.amd ? define(o) : "object" == typeof exports ? module.exports = o : t.classie = o
    }(window);
var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: !1
});
if (wow.init(), $("body").is(".single")) {
    var responsive_viewport = $(window).width();
    responsive_viewport >= 768 && function() {
        function t(t) {
            t = t || window.event, t.preventDefault && t.preventDefault(), t.returnValue = !1
        }

        function e(e) {
            for (var i = f.length; i--;)
                if (e.keyCode === f[i]) return t(e), void 0
        }

        function i(e) {
            t(e)
        }

        function n() {}

        function s() {
            window.onmousewheel = document.onmousewheel = n, document.onkeydown = e, document.body.ontouchmove = i
        }

        function a() {
            window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null
        }

        function o() {
            return window.pageYOffset || g.scrollTop
        }

        function r() {
            if (d = o(), h && !p) {
                if (0 > d) return !1;
                window.scrollTo(0, 0)
            }
            return classie.has(m, "notrans") ? (classie.remove(m, "notrans"), !1) : u ? !1 : (0 >= d && c ? l(0) : d > 0 && !c && l(1), void 0)
        }

        function l(t) {
            u = !0, t ? classie.add(m, "modify") : (h = !0, s(), classie.remove(m, "modify")), setTimeout(function() {
                c = !c, u = !1, t && (h = !1, a())
            }, 600)
        }
        var d, c, h, u, p = function() {
                var t, e = -1,
                    i = window.navigator.userAgent,
                    n = i.indexOf("MSIE "),
                    s = i.indexOf("Trident/");
                if (n > 0) e = parseInt(i.substring(n + 5, i.indexOf(".", n)), 10);
                else if (s > 0) {
                    var a = i.indexOf("rv:");
                    e = parseInt(i.substring(a + 3, i.indexOf(".", a)), 10)
                }
                return e > -1 ? e : t
            }(),
            f = [32, 37, 38, 39, 40],
            g = window.document.documentElement,
            m = document.getElementById("artt_container"),
            v = m.querySelector("button.trigger"),
            _ = o();
        h = 0 === _, s(), _ && (c = !0, classie.add(m, "notrans"), classie.add(m, "modify")), window.addEventListener("scroll", r), v.addEventListener("click", function() {
            l("reveal")
        })
    }()
}
if ($("body").is(".page-template-about-page-php")) {
    jQuery.fn.swap = function(t) {
        t = jQuery(t)[0];
        var e = this[0],
            i = e.parentNode.insertBefore(document.createTextNode(""), e);
        return t.parentNode.insertBefore(e, t), i.parentNode.insertBefore(t, i), i.parentNode.removeChild(i), this
    };
    var deviceWidth = {
        phone: 480,
        tablet: 768
    };
    ! function(t) {
        "use strict";
        window.EC = window.EC || {}, EC.OurTeam = EC.OurTeam || {}, EC.OurTeam.logo = {
            $el: null,
            $leftArrow: null,
            $rightArrow: null,
            $slash: null,
            $elements: null,
            $panel: null,
            panel: null,
            general: null,
            init: function() {
                this.$el = t("#our-team"), this.$leftArrow = this.$el.find(".left-arrow"), this.$rightArrow = this.$el.find(".right-arrow"), this.$slash = this.$el.find(".slash"), this.$elements = this.$el.find(".element"), this.mainSlider = EC.OurTeam.mainSlider, this.connectEvents()
            },
            connectEvents: function() {
                this.$leftArrow.on("click", t.proxy(this.onLeftArrowClick, this)), this.$rightArrow.on("click", t.proxy(this.onRightArrowClick, this)), this.$slash.on("click", t.proxy(this.onSlashClick, this)), this.$slash.on("mouseleave", t.proxy(function(e) {
                    t(e.toElement).is(".slash") || (this.onSlashMauseLeave(e), this.$el.removeClass("x-hover"))
                }, this)), this.$slash.on("mouseenter", t.proxy(function(e) {
                    t(e.fromElement).is(".slash") || (this.onSlashMauseEnter(e), this.$el.addClass("x-hover"))
                }, this)), t(document).keydown(t.proxy(this.onEventKeyDown, this))
            },
            setXMode: function(t) {
                t ? this.$el.addClass("x-logo") : this.$el.removeClass("x-logo")
            },
            onEventKeyDown: function(t) {
                switch (t.which) {
                    case 37:
                        this.$leftArrow.click();
                        break;
                    case 39:
                        this.$rightArrow.click();
                        break;
                    case 191:
                    case 111:
                        this.$slash.click();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            },
            onLeftArrowClick: function() {
                this.mainSlider.prevSlide()
            },
            onRightArrowClick: function() {
                this.mainSlider.nextSlide()
            },
            onSlashMauseLeave: function() {
                this.mainSlider.personActive && this.setXMode(!1)
            },
            onSlashMauseEnter: function() {
                this.mainSlider.personActive && this.setXMode(!0)
            },
            onSlashClick: function() {
                this.mainSlider.personActive ? (this.mainSlider.deactivePerson(), this.setXMode(!1)) : (EC.OurTeam.general.random(), this.setXMode(!1))
            }
        }
    }(jQuery),
    function(t) {
        "use strict";
        window.EC = window.EC || {}, EC.OurTeam = EC.OurTeam || {}, EC.OurTeam.mainSlider = {
            $el: null,
            $firstSlide: null,
            $lastSlide: null,
            slider: null,
            scroller: null,
            clickedTime: null,
            slidesPerView: null,
            personActive: null,
            init: function() {
                var e = this;
                this.$el = t("#our-team").find(".swiper-container"), this.$firstSlide = this.$el.find(".swiper-wrapper > :first-child"), this.$lastSlide = this.$el.find(".swiper-wrapper > :last-child"), this.personActive = !1, this.slider = new Swiper("#our-team .swiper-container", {
                    speed: "620",
                    centeredSlides: !0,
                    slidesPerView: "auto",
                    loop: !0,
                    initialSlide: 1,
                    loopedSlides: 25,
                    slidesPerGroup: 2,
                    onSlideClick: t.proxy(function(t) {
                        this.onSlideClick(t.clickedSlideLoopIndex), this.projectScreenClose()
                    }, this),
                    onSlideChangeStart: t.proxy(function(e) {
                        this.personActive && (this.projectScreenClose(), t(e.activeSlide()).addClass("active").siblings().removeClass("active"))
                    }, this),
                    onTouchStart: t.proxy(function() {
                        this.$el.addClass("grab")
                    }, this),
                    onTouchEnd: t.proxy(function() {
                        this.$el.removeClass("grab")
                    }, this)
                }), t("#our-team .scroller").each(function() {
                    var i = new Swiper(this, {
                        scrollContainer: !0,
                        mousewheelControl: !0,
                        mode: "vertical",
                        autoResize: !1,
                        scrollbar: {
                            container: t(this).find(".swiper-scrollbar")[0],
                            hide: !0,
                            draggable: !1
                        },
                        onTouchStart: function() {
                            e.$el.addClass("grab")
                        },
                        onTouchEnd: function() {
                            e.$el.removeClass("grab")
                        }
                    });
                    i.reInit(), t(this).data("swip", i)
                }), this.connectEvents()
            },
            slidesPerViewCounter: function() {
                this.slideWidth = this.$el.find(".swiper-wrapper > :first-child .img > img").width(), this.windowWidth = t(window).width();
                var e = Math.floor(this.windowWidth / this.slideWidth);
                return 1 > e ? 1 : e
            },
            connectEvents: function() {
                this.$el.find(".desc-toggle.open").on("click", t.proxy(this.deactivePerson, this)), this.$el.find(".screen a.close").on("click", t.proxy(this.projectScreenClose, this)), this.$el.find(".projects.finished a").on("mousedown", t.proxy(function(t) {
                    this.clickedTime = t.timeStamp
                }, this)), this.$el.find(".projects.finished a").on("click", t.proxy(this.projectScreenOpen, this))
            },
            projectScreenOpen: function(e) {
                if (console.log(e.timeStamp - this.clickedTime), e.timeStamp - this.clickedTime > 150) return !1;
                var i = t(e.target),
                    n = i.attr("href"),
                    s = i.data("screen-url"),
                    a = i.text(),
                    o = i.parents(".profile").siblings(".screen");
                return o.find("img").attr("src", s), o.find(".name").text(a), o.find(".view").attr("href", n), o.fadeIn(300), !1
            },
            projectScreenClose: function() {
                return this.$el.find(".screen").fadeOut(300), !1
            },
            onSlideClick: function(e) {
                function i() {
                    setTimeout(function() {}, 500)
                }
                this.slider.swipeTo(e), t(this.slider.clickedSlide).addClass("active").siblings().removeClass("active"), t(this.slider.clickedSlide).find(".scroller").data("swip"), i(), this.personActive = !0
            },
            deactivePerson: function() {
                return this.personActive = !1, this.$el.find(".swiper-slide.active").removeClass("active"), !1
            },
            prevSlide: function() {
                this.slider.swipePrev()
            },
            nextSlide: function() {
                this.slider.swipeNext()
            }
        }
    }(jQuery),
    function(t) {
        "use strict";
        window.EC = window.EC || {}, EC.OurTeam = EC.OurTeam || {}, EC.OurTeam.general = {
            $el: null,
            logo: null,
            columnWidth: 0,
            animationLenght: 550,
            isAnimated: !1,
            orderedItems: [],
            init: function() {
                this.$el = t("#our-team"), this.connectEvents(), this.columnWidth = parseInt(t(".person").width()), this.logo = EC.OurTeam.logo, this.logo.init(), this.mainSlider = EC.OurTeam.mainSlider, this.mainSlider.init()
            },
            connectEvents: function() {
                this.$el.find(".point").on("mouseenter", t.proxy(this.onPointMouseEnter, this)), this.$el.find(".point").on("mouseleave", t.proxy(this.onPointMouseLeave, this))
            },
            onPointMouseEnter: function(e) {
                var i = t(e.currentTarget);
                i.parent().addClass("active"), this.$overlay.addClass("visible")
            },
            onPointMouseLeave: function(e) {
                var i = t(e.currentTarget);
                i.parent().removeClass("active"), this.$overlay.removeClass("visible")
            },
            random: function() {
                return this.isAnimated ? this.isAnimated : (this.isAnimated = !0, this.randomImages(), this.randomPositions(), void 0)
            },
            randomImages: function() {
                var e = this,
                    i = [];
                this.$el.find(".person").each(function() {
                    var e = t(this).data("person-id"); - 1 === t.inArray(e, i) && i.push(e)
                }), t.each(i, function(i, n) {
                    var s = e.$el.find(".person-" + n + ":first").find(".img img").length,
                        a = Math.floor(Math.random() * s);
                    console.log(".person-" + n + " .img img:eq(" + a + ")");
                    var o = e.$el.find(".person-" + n + " .img");
                    o.find("img").removeClass("active"), o.each(function() {
                        t(this).find("img:eq(" + a + ")").addClass("active")
                    })
                })
            },
            randomPositions: function() {
                var e = this.mainSlider.slider.loopedSlides,
                    i = this.mainSlider.slider.slides;
                this.orderedItems = [];
                for (var n = this.shuffleArray(Array.apply(null, Array(e)).map(function(t, e) {
                        return e
                    })), s = 0; 3 > s; s++) this.shuffleGroup(i.slice(s * e, s * e + e), n, s);
                var a = this;
                setTimeout(function() {
                    for (var e in a.orderedItems) a.orderedItems[e].attr("newPos", e);
                    var i = t("<div>");
                    i.append(a.orderedItems);
                    var n = i.find(".person");
                    n.attr("style", ""), a.$el.find(".swiper-container .swiper-wrapper").html(n), a.isAnimated = !1, a.mainSlider.slider.reInit()
                }, this.animationLenght)
            },
            shuffleArray: function(t) {
                for (var e, i, n = t.length; n; e = Math.floor(Math.random() * n), i = t[--n], t[n] = t[e], t[e] = i);
                return t
            },
            shuffleGroup: function(e, i) {
                for (var n = [], s = ["-webkit-", "-moz-", "-o-", "-ms-", ""], a = 0; a < i.length; a++) {
                    var o = t(e[i[a]]),
                        r = (i[a] - a) * this.columnWidth;
                    n.push({
                        element: t(e[a]),
                        x: r,
                        toElement: o
                    })
                }
                for (var a in n) {
                    var l = n[a].element;
                    for (var d in s) l.css(s[d] + "transform", "translateX(" + n[a].x + "px)")
                }
                this.commitAfterAnimation(n)
            },
            commitAfterAnimation: function(t) {
                var e = 0,
                    i = [];
                for (var n in t) {
                    var s = t[n].element,
                        a = t[n].toElement,
                        o = parseInt(a.index());
                    s.removeClass("odd"), this.orderedItems[o] = s, i[o] = s
                }
                for (var n in i) e % 2 && i[n].addClass("odd"), e++
            }
        }
    }(jQuery), $(document).ready(function() {
        EC.OurTeam.general.init()
    })
}