google.maps.__gjsload__('search', function(_) {
    var Eva = function() {},
        iC = function(a) {
            this.setValues(a);
            _.Li("search_impl")
        },
        Gva = function(a) {
            let b = _.hl,
                c = -1;
            a.tiles.forEach(e => {
                e.zoom > c && (b = e.ii, c = e.zoom)
            });
            if (c === -1) return [];
            const d = [];
            a.Gu().forEach(e => {
                e.a && e.a.length >= 2 && d.push(new Fva(e, b, c))
            });
            return d
        },
        Hva = function(a) {
            const b = [];
            a.data.forEach(c => {
                b.push(...Gva(c))
            });
            return b
        };
    _.va(Eva, _.kk);
    var Iva = {
            ["1"]: {}
        },
        Fva = class {
            constructor(a, b, c) {
                this.ln = b;
                this.zoom = c;
                this.bounds = this.anchor = null;
                this.Eg = Iva;
                this.source = a;
                this.featureId = this.source.id || "0";
                this.infoWindowOffset = (this.source.io || []).length === 2 ? new google.maps.Point(this.source.io[0], this.source.io[1]) : null
            }
            getAnchor() {
                if (!this.anchor) {
                    const a = 1 << this.zoom;
                    this.anchor = _.Kl(new _.Vl((this.ln.x * 256 + this.source.a[0]) / a, (this.ln.y * 256 + this.source.a[1]) / a)).toJSON()
                }
                return this.anchor
            }
            getCompleteBounds() {
                return this.getBounds().reduce((a,
                    b) => {
                    a.extendByBounds(b);
                    return a
                }, _.Ol(0, 0, 0, 0))
            }
            getBounds() {
                if (this.bounds === null) {
                    this.bounds = [];
                    const a = this.source.bb || [];
                    if (a.length % 4 === 0)
                        for (let b = 0; b < a.length; b += 4) {
                            const c = this.bounds[this.bounds.length - 1],
                                d = _.Ol(a[b], a[b + 1], a[b + 2], a[b + 3]);
                            c && c.equals(d) || this.bounds.push(d)
                        }
                }
                return [...this.bounds]
            }
            getExtendedContent(a) {
                if (this.Eg === Iva) try {
                    this.Eg = this.source.c ? JSON.parse(this.source.c) : {}
                } catch (b) {
                    this.Eg = {}
                }
                return this.Eg[a] ? ? {}
            }
            getFeatureName() {
                return this.getExtendedContent("1") ? .title ? ?
                    null
            }
            isTransitStation() {
                return this.getExtendedContent("1") ? .is_transit_station ? ? !1
            }
        };
    var Jva = new WeakSet;
    _.va(iC, Eva);
    iC.prototype.changed = function() {
        const a = this;
        var b = this.get("map");
        let c = null;
        b && (c = b.__gm, b = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", b + 1), c.set("disableLabelingHysteresis", this.get("disableLabelingHysteresis")), c.set("tilePrefetchEnabled", this.get("tilePrefetchEnabled")));
        _.Li("search_impl").then(d => {
            d.OG(a);
            c && (d = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", d - 1))
        })
    };
    iC.enableFeatureMapEventsRasterOnly = function(a) {
        if (_.xm[15]) {
            var b = a.__gm.Xg;
            if (!Jva.has(a)) {
                Jva.add(a);
                var c = [],
                    d = (f, g) => {
                        f = Gva(f);
                        f.length && _.hk(a, g, f)
                    },
                    e = () => {
                        for (; c.length > 0;) c.pop().remove();
                        b.forEach(f => {
                            if (f = f.data) c.push(_.Vj(f, "insert", g => d(g, "addfeatures"))), c.push(_.Vj(f, "remove", g => d(g, "removefeatures")))
                        })
                    };
                b.addListener("insert_at", e);
                b.addListener("remove_at", e);
                b.addListener("set_at", e);
                e()
            }(() => {
                const f = [];
                b.forEach(g => {
                    f.push(...Hva(g))
                });
                f.length && _.hk(a, "addfeatures", f)
            })()
        }
    };
    _.ta("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly", iC.enableFeatureMapEventsRasterOnly);
    _.Lk(iC.prototype, {
        map: _.No
    });
    _.ja.google.maps.search = {
        GoogleLayer: iC
    };
    _.Mi("search", {});
});