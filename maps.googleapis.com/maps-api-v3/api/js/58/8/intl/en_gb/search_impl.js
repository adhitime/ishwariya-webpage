google.maps.__gjsload__('search_impl', function(_) {
    var Jzb = function(a, b) {
            _.xg(a.Gg, 1, b)
        },
        Kzb = function(a, b) {
            _.xg(a.Gg, 3, b)
        },
        Ozb = function(a, b, c) {
            var d = new Lzb;
            d = _.kH(d);
            c.yr = d.load.bind(d);
            c.clickable = a.get("clickable") !== !1;
            _.VZa(c, _.wQ(b));
            b = [];
            b.push(_.Vj(c, "click", Mzb.bind(null, a)));
            for (const e of ["mouseover", "mouseout", "mousemove"]) b.push(_.Vj(c, e, Nzb.bind(null, a, e)));
            b.push(_.Vj(a, "clickable_changed", () => {
                a.Eg.clickable = a.get("clickable") !== !1
            }));
            a.Fg = b
        },
        Mzb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, e.getStatus() === 0)) {
                f.location =
                    _.V(e.Gg, 2) ? new _.Gj(_.mt(_.J(e.Gg, 2, _.st).Gg, 1), _.mt(_.J(e.Gg, 2, _.st).Gg, 2)) : null;
                const g = {};
                f.fields = g;
                const h = _.Vh(e.Gg, 3);
                for (let k = 0; k < h; ++k) {
                    const m = _.jr(e.Gg, 3, _.GQ, k);
                    g[m.getKey()] = m.getValue()
                }
            }
            _.hk(a, "click", b, c, d, f)
        },
        Nzb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.hk(a, b, c, d, e, h, g)
        },
        Pzb = function() {},
        Qzb = class {},
        Rzb = class extends _.R {
            constructor() {
                super()
            }
            Qi() {
                return _.mi(this.Gg, 2)
            }
        },
        Szb = [_.M, , , _.uo, _.l0a];
    var Tzb = class extends _.R {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.H(this.Gg, 1, -1)
        }
        getLocation() {
            return _.gi(this.Gg, 2, _.st)
        }
    };
    var Lzb = class {
        constructor() {
            var a = _.vn,
                b = _.un;
            this.Eg = _.ni;
            this.fetch = _.Kx.bind(Qzb, a, _.Cz + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(e) {
                b(new Tzb(e))
            }
            const d = new Rzb;
            Jzb(d, a.layerId.split("|")[0]);
            _.xg(d.Gg, 2, a.featureId);
            Kzb(d, this.Eg.Eg().Eg());
            for (const e in a.parameters) {
                const f = _.ji(d.Gg, 4, _.GQ);
                _.xg(f.Gg, 1, e);
                _.xg(f.Gg, 2, a.parameters[e])
            }
            a = _.$h(d, Szb, 1);
            this.fetch(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    Pzb.prototype.OG = function(a) {
        if (_.xm[15]) {
            var b = a.Cl;
            const c = a.Cl = a.getMap();
            b && a.Eg && (a.Hg ? (b = b.__gm.ck, b.set(b.get().Sn(a.Eg))) : a.Eg && _.w_a(a.Eg, b) && ((a.Fg || []).forEach(_.Xj), a.Fg = null));
            if (c) {
                b = new _.Bw;
                const d = a.get("layerId").split("|");
                b.layerId = d[0];
                for (let e = 1; e < d.length; ++e) {
                    const [f, ...g] = d[e].split(":");
                    b.parameters[f] = g.join(":")
                }
                a.get("spotlightDescription") && (b.spotlightDescription = new _.Pw(a.get("spotlightDescription")));
                a.get("paintExperimentIds") && (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                a.get("styler") && (b.styler = new _.Hw(a.get("styler")));
                a.get("roadmapStyler") && (b.roadmapStyler = new _.Hw(a.get("roadmapStyler")));
                a.get("travelMapRequest") && (b.travelMapRequest = new _.fsa(a.get("travelMapRequest")));
                a.get("mapsApiLayer") && (b.mapsApiLayer = new _.Cw(a.get("mapsApiLayer")));
                a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                a.get("searchPipeMetadata") && (b.searchPipeMetadata = new _.Wy(a.get("searchPipeMetadata")));
                a.get("gmmContextPipeMetadata") && (b.gmmContextPipeMetadata = new _.vpa(a.get("gmmContextPipeMetadata")));
                a.get("overlayLayer") && (b.overlayLayer = new _.Qw(a.get("overlayLayer")));
                a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.Kra(a.get("airQualityPipeMetadata")));
                a.get("directionsPipeParameters") && (b.directionsPipeParameters =
                    new _.Zz(a.get("directionsPipeParameters")));
                a.get("clientSignalPipeMetadata") && (b.clientSignalPipeMetadata = new _.Joa(a.get("clientSignalPipeMetadata")));
                b.darkLaunch = !!a.get("darkLaunch");
                a.Eg = b;
                a.Hg = a.get("renderOnBaseMap");
                a.Hg ? (a = c.__gm.ck, a.set(_.zr(a.get(), b))) : Ozb(a, c, b);
                _.Pk(c, "Lg");
                _.L(c, 148282)
            }
        }
    };
    _.Mi("search_impl", new Pzb);
});