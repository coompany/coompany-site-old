/**
 * Project: Coompany's site
 * User: Andrea Jemmett - acidghost
 * Date: 4/29/14
 * Time: 9:33 PM
 */

jQuery(document).ready(function ($) {
    function e(e) {
        $('.menu-onde[data-id-menu="' + e + '"]').addClass("active")
        // EDITED HERE!
        $('.menu-onde[data-id-menu="' + e + '"]').parent('.quilia-only-onda').css('max-height', '500px');
    }

    function t(e) {
        $('.menu-onde[data-id-menu="' + e + '"]').removeClass("active")
        // EDITED HERE!
        $('.menu-onde[data-id-menu="' + e + '"]').parent('.quilia-only-onda').css('max-height', '0px');
    }
    $(".menu-onde").each(function (e, t) {
        function zt() {
            if (n.hasClass("active") == true && l == false) l = true;
            if (n.hasClass("active") == false && l == true) l = false;
            var e = (new Date).getTime();
            ot = st.getDelta();
            if (ut == 1 || ut == 2 || ut == 4) {
                tt += ot
            }
            if (at) {
                nt += ot
            }
            for (B = 0; B < i; B++) {
                if (ut == 0 || ut == 1) {
                    F.vertices[B].y = Math.sin(o * e - F.vertices[B].x * u)
                }
                if (ut == 2) {
                    F.vertices[B].y = Math.sin(o * e - F.vertices[B].x * u)
                }
                if (ut == 3) {
                    F.vertices[B].y = Math.sin(o * it - F.vertices[B].x * u)
                }
                if (ut == 4) {
                    F.vertices[B].y = (tt - p) / (1 - p) * Math.sin(o * it - F.vertices[B].x * u) + (tt - 1) / (p - 1) * Math.sin(o * e - F.vertices[B].x * u)
                }
                if (ut == 1) {
                    F.vertices[B].y += Math.sin(o * e - F.vertices[B].x * u / 2) * tt * a + .5;
                    F.vertices[B].y += Math.sin(o * e - F.vertices[B].x * u * 2) * tt * a / 2 + .5
                } else if (ut == 2) {
                    F.vertices[B].y += Math.sin(o * e - F.vertices[B].x * u / 2) * a * ((d - c) * tt + c * (h - 1) - d + c) / (h - 1) + .5;
                    F.vertices[B].y += Math.sin(o * e - F.vertices[B].x * u * 2) * a / 2 * ((d - c) * tt + c * (h - 1) - d + c) / (h - 1) + .5
                } else if (ut == 3) {
                    F.vertices[B].y += Math.sin(o * e - F.vertices[B].x * u / 2) * a * d / 2 + .5;
                    F.vertices[B].y += Math.sin(o * e - F.vertices[B].x * u * 2) * a / 4 * d + .5
                }
                F.vertices[B].y = F.vertices[B].y / 3 + .7;
                if (at == false) {
                    if (l && ut == 0) {
                        ut = 1;
                        tt = 1
                    }
                    if (ut == 0) {
                        F.vertices[B].y = F.vertices[B].y / 100;
                        xt.opacity = 0;
                        Rt.opacity = 0
                    }
                    if (ut == 1) {
                        xt.opacity += (1 - xt.opacity) / 1e3;
                        Rt.opacity = 1;
                        if (tt < c) {
                            F.vertices[B].y = F.vertices[B].y * (99 * tt + c - 100) / (100 * (c - 1))
                        } else {
                            ut = 2;
                            tt = 1
                        }
                    }
                    if (ut == 2) {
                        if (tt > h) {
                            ut = 3;
                            it = e
                        }
                    }
                }
                if (at == true) {
                    if (nt > p) {
                        ut = 0;
                        at = false
                    }
                    if (nt > p / 10 * 9) xt.opacity += (0 - xt.opacity) / 1e4;
                    if (ut == 0) {
                        F.vertices[B].y = F.vertices[B].y / 100
                    }
                    if (ut == 1) {
                        F.vertices[B].y = F.vertices[B].y * (9 * tt + c - 10) / (10 * (c - 1))
                    }
                    var t = ((Math.sin(o * e - F.vertices[B].x * u) + Math.sin(o * e - F.vertices[B].x * u / 2) * a + Math.sin(o * e - F.vertices[B].x * u * 2) * a / 2) / 3 + .7) / 100;
                    F.vertices[B].y = (nt - p) / (1 - p) * F.vertices[B].y + (nt - 1) / (p - 1) * t
                }
                if (l == false) {
                    if (at == false && ut > 0) {
                        rt = tt;
                        nt = 1;
                        at = true
                    }
                }
                if (F.vertices[B].x < 0) {
                    F.vertices[B].y *= F.vertices[B].x - F.vertices[0].x
                } else {
                    F.vertices[B].y *= F.vertices[i - 1].x - F.vertices[B].x
                }
                F.vertices[B].y *= .7
            }
            for (B = 0; B < i; B++) {
                g = 1 - m * 1;
                I.vertices[B].y = F.vertices[B].y * g * Math.cos(v * 1);
                I.vertices[B].z = F.vertices[B].y * g * Math.sin(v * 1);
                g = 1 - m * 2;
                q.vertices[B].y = F.vertices[B].y * g * Math.cos(v * 2.6);
                q.vertices[B].z = F.vertices[B].y * g * Math.sin(v * 2.6);
                g = 1 - m * 3;
                R.vertices[B].y = F.vertices[B].y * g * Math.cos(v * 3.6);
                R.vertices[B].z = F.vertices[B].y * g * Math.sin(v * 3.6);
                g = 1 - m * 4;
                U.vertices[B].y = F.vertices[B].y * g * Math.cos(v * 5.2);
                U.vertices[B].z = F.vertices[B].y * g * Math.sin(v * 5.2);
                g = 1 - m * 5;
                z.vertices[B].y = F.vertices[B].y * g * Math.cos(v * 6);
                z.vertices[B].z = F.vertices[B].y * g * Math.sin(v * 6);
                g = 1 - m * 6;
                W.vertices[B].y = F.vertices[B].y * g * Math.cos(v * 6.8);
                W.vertices[B].z = F.vertices[B].y * g * Math.sin(v * 6.8);
                g = 1 - m * 7;
                X.vertices[B].y = F.vertices[B].y * g * Math.cos(v * 7.6);
                X.vertices[B].z = F.vertices[B].y * g * Math.sin(v * 7.6);
                g = 1 - m * 8;
                V.vertices[B].y = F.vertices[B].y * g * Math.cos(v * 8.3);
                V.vertices[B].z = F.vertices[B].y * g * Math.sin(v * 8.3);
                g = 1 - m * 9;
                J.vertices[B].y = F.vertices[B].y * g * Math.cos(v * 9);
                J.vertices[B].z = F.vertices[B].y * g * Math.sin(v * 9);
                K.vertices[B].y = F.vertices[B].y + .01;
                Q.vertices[B].y = F.vertices[B].y + .02;
                G.vertices[B].y = F.vertices[B].y + .03;
                Y.vertices[B].z = J.vertices[B].z + .01;
                Z.vertices[B].z = J.vertices[B].z + .02;
                et.vertices[B].z = J.vertices[B].z + .03;
                Y.vertices[B].y = 0;
                Z.vertices[B].y = 0;
                et.vertices[B].y = 0
            }
            F.verticesNeedUpdate = true;
            I.verticesNeedUpdate = true;
            q.verticesNeedUpdate = true;
            R.verticesNeedUpdate = true;
            U.verticesNeedUpdate = true;
            z.verticesNeedUpdate = true;
            W.verticesNeedUpdate = true;
            X.verticesNeedUpdate = true;
            V.verticesNeedUpdate = true;
            J.verticesNeedUpdate = true;
            K.verticesNeedUpdate = true;
            Q.verticesNeedUpdate = true;
            G.verticesNeedUpdate = true;
            Y.verticesNeedUpdate = true;
            Z.verticesNeedUpdate = true;
            et.verticesNeedUpdate = true;
            var r;
            var f;
            r = n.next().children();
            f = r.length;
            var y;
            var b;
            var w = .045;
            var E;
            var S;
            var x;
            var T = true;
            for (B = 0; B < f; B++) {
                if (ut == 0) {
                    if (r.eq(B).is(":visible")) {
                        r.eq(B).hide(300)
                    }
                }
                if (ut == 3 && at == false) {
                    if (!r.eq(B).is(":visible")) r.eq(B).show(350)
                }
                if (at) {
                    if (r.eq(B).is(":visible")) r.eq(B).hide(300)
                }
                if (ut == 3 && at == false) {
                    E = (B + 1) / (f + 1);
                    if (E < .4) {
                        r.eq(B).css("left", E * lt + w * lt - r.eq(B).width() * 1.11)
                    } else if (E > .6) {
                        r.eq(B).css("left", (E - w) * lt)
                    } else {
                        if (r.length % 2 == 0) {
                            if (B + 1 <= r.length / 2) {
                                r.eq(B).css("left", E * lt - r.eq(B).width() / 2 - 50)
                            } else {
                                r.eq(B).css("left", E * lt - r.eq(B).width() / 2 + 50)
                            }
                        } else {
                            r.eq(B).css("left", E * lt - r.eq(B).width() / 2)
                        }
                    }
                    x = E * i;
                    b = ct / 1.4;
                    if (T) {
                        if (E > .4 && E < .6) {
                            // edited, was:
                            //b -= (2.5 * (1 - 4 * Math.pow(F.vertices[parseInt(x)].x, 2) / (s * s)) * ct / 5 + F.vertices[parseInt(x)].y * ct / 5) / 2 + r.eq(B).height() * 1.5
                            b -= (2.5 * (1 - 4 * Math.pow(F.vertices[parseInt(x)].x, 2) / (s * s)) * ct / 5 + F.vertices[parseInt(x)].y * ct / 5) / 2 + r.eq(B).height() * 0.7
                        } else {
                            // edited, was:
                            //b -= (2.5 * (1 - 4 * Math.pow(F.vertices[parseInt(x)].x, 2) / (s * s)) * ct / 5 + F.vertices[parseInt(x)].y * ct / 5) / 2
                            b -= (2.5 * (1 - 4 * Math.pow(F.vertices[parseInt(x)].x, 2) / (s * s)) * ct / 5 + F.vertices[parseInt(x)].y * ct / 5) / 2 + 23
                        }
                    } else {
                        b -= F.vertices[parseInt(x)].y * ct / 8;
                        b -= 25
                    }
                    r.eq(B).css("top", b)
                }
            }
            for (j = 0; j < 10; j++) {
                for (B = 0; B < i; B++) {
                    if (j == 0) {
                        qt.vertices[B + j * i].y = F.vertices[B].y;
                        qt.vertices[B + j * i].x = F.vertices[B].x;
                        qt.vertices[B + j * i].z = F.vertices[B].z - .1
                    }
                    if (j == 1) {
                        qt.vertices[B + j * i].y = I.vertices[B].y;
                        qt.vertices[B + j * i].x = I.vertices[B].x;
                        qt.vertices[B + j * i].z = I.vertices[B].z - .1
                    }
                    if (j == 2) {
                        qt.vertices[B + j * i].y = q.vertices[B].y;
                        qt.vertices[B + j * i].x = q.vertices[B].x;
                        qt.vertices[B + j * i].z = q.vertices[B].z - .1
                    }
                    if (j == 3) {
                        qt.vertices[B + j * i].y = R.vertices[B].y;
                        qt.vertices[B + j * i].x = R.vertices[B].x;
                        qt.vertices[B + j * i].z = R.vertices[B].z - .1
                    }
                    if (j == 4) {
                        qt.vertices[B + j * i].y = U.vertices[B].y;
                        qt.vertices[B + j * i].x = U.vertices[B].x;
                        qt.vertices[B + j * i].z = U.vertices[B].z - .1
                    }
                    if (j == 5) {
                        qt.vertices[B + j * i].y = z.vertices[B].y;
                        qt.vertices[B + j * i].x = z.vertices[B].x;
                        qt.vertices[B + j * i].z = z.vertices[B].z - .1
                    }
                    if (j == 6) {
                        qt.vertices[B + j * i].y = W.vertices[B].y;
                        qt.vertices[B + j * i].x = W.vertices[B].x;
                        qt.vertices[B + j * i].z = W.vertices[B].z - .1
                    }
                    if (j == 7) {
                        qt.vertices[B + j * i].y = X.vertices[B].y;
                        qt.vertices[B + j * i].x = X.vertices[B].x;
                        qt.vertices[B + j * i].z = X.vertices[B].z - .1
                    }
                    if (j == 8) {
                        qt.vertices[B + j * i].y = V.vertices[B].y;
                        qt.vertices[B + j * i].x = V.vertices[B].x;
                        qt.vertices[B + j * i].z = V.vertices[B].z - .1
                    }
                    if (j == 9) {
                        qt.vertices[B + j * i].y = J.vertices[B].y;
                        qt.vertices[B + j * i].x = J.vertices[B].x;
                        qt.vertices[B + j * i].z = J.vertices[B].z - .1
                    }
                }
            }
            qt.verticesNeedUpdate = true;
            lt = n.width();
            ct = n.height();
            pt = lt / ct;
            mt.setSize(lt, ct);
            mt.render(yt, gt);
            requestAnimationFrame(function () {
                zt()
            })
        }
        var n = $(this);
        var r = $(this).parent();
        var i = 130;
        var s = 7;
        var o = .004;
        var u = 5;
        var a = .4;
        var f = 10;
        var l = false;
        var c = 2;
        var h = 2;
        var p = 2;
        var d = 1 / 3;
        var v = Math.PI / 2 * 1 / (f - 1);
        var m = .7 / f;
        var g = 1;
        var y = new Array;
        var b = new Array;
        var w = new Array;
        var E = new Array;
        var S = new Array;
        var x = new Array;
        var T = new Array;
        var N = new Array;
        var C = new Array;
        var k = new Array;
        var L = new Array;
        var A = new Array;
        var O = new Array;
        var M = new Array;
        var _ = new Array;
        var D = new Array;
        var P = false;
        var H = false;
        var B = 0;
        for (B = 0; B < i; B++) {
            y.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            b.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            w.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            E.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            S.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            x.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            T.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            N.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            C.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            k.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            L.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            A.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            O.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            M.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            _.push(new THREE.Vector3(B / i * s - s / 2, 0, 0));
            D.push(new THREE.Vector3(B / i * s - s / 2, 0, 0))
        }
        var F = new THREE.Geometry;
        var I = new THREE.Geometry;
        var q = new THREE.Geometry;
        var R = new THREE.Geometry;
        var U = new THREE.Geometry;
        var z = new THREE.Geometry;
        var W = new THREE.Geometry;
        var X = new THREE.Geometry;
        var V = new THREE.Geometry;
        var J = new THREE.Geometry;
        var K = new THREE.Geometry;
        var Q = new THREE.Geometry;
        var G = new THREE.Geometry;
        var Y = new THREE.Geometry;
        var Z = new THREE.Geometry;
        var et = new THREE.Geometry;
        var tt = 1;
        var nt = 1;
        var rt;
        var it;
        var st = new THREE.Clock;
        var ot;
        var ut = 0;
        var at = false;
        var ft = $(document.body).css("background-color");
        var lt = n.width(),
            ct = 150 * lt / 300;
        var ht = 30,
            pt = lt / ct,
            dt = .1,
            vt = 1e4;
        ht = 30 * lt / (ct * 2.7);
        var mt = new THREE.WebGLRenderer({
            antialias: true,
            canvas: t,
            alpha: true
        });
        mt.setClearColor(0, 0);
        mt.setSize(lt, ct);
        var gt = new THREE.PerspectiveCamera(ht, pt, dt, vt);
        var yt = new THREE.Scene;
        yt.add(gt);
        var bt = 10;
        var wt = 3.25;
        var Et = Math.PI / 18;
        gt.position.z = bt;
        gt.position.y = wt;
        gt.rotation.x = -Et;
        for (B = 0; B < i; B++) {
            F.vertices.push(y[B]);
            I.vertices.push(b[B]);
            q.vertices.push(w[B]);
            R.vertices.push(E[B]);
            U.vertices.push(S[B]);
            z.vertices.push(x[B]);
            W.vertices.push(T[B]);
            X.vertices.push(N[B]);
            V.vertices.push(C[B]);
            J.vertices.push(k[B]);
            K.vertices.push(L[B]);
            Q.vertices.push(A[B]);
            G.vertices.push(O[B]);
            Y.vertices.push(M[B]);
            Z.vertices.push(_[B]);
            et.vertices.push(D[B])
        }
        var St = $(t).attr("data-color");
        var xt = new THREE.LineBasicMaterial({
            color: St,
            opacity: 1,
            linewidth: 1
        });
        xt.transparent = true;
        var Tt = new THREE.Line(F, xt);
        var Nt = new THREE.Line(I, xt);
        var Ct = new THREE.Line(q, xt);
        var kt = new THREE.Line(R, xt);
        var Lt = new THREE.Line(U, xt);
        var At = new THREE.Line(z, xt);
        var Ot = new THREE.Line(W, xt);
        var Mt = new THREE.Line(X, xt);
        var _t = new THREE.Line(V, xt);
        var Dt = new THREE.Line(J, xt);
        var Pt = new THREE.Line(K, xt);
        var Ht = new THREE.Line(Q, xt);
        var Bt = new THREE.Line(G, xt);
        var jt = new THREE.Line(Y, xt);
        var Ft = new THREE.Line(Z, xt);
        var It = new THREE.Line(et, xt);
        yt.add(Tt);
        yt.add(Nt);
        yt.add(Ct);
        yt.add(kt);
        yt.add(Lt);
        yt.add(At);
        yt.add(Ot);
        yt.add(Mt);
        yt.add(_t);
        yt.add(Dt);
        yt.add(Pt);
        yt.add(Ht);
        yt.add(Bt);
        yt.add(jt);
        yt.add(Ft);
        yt.add(It);
        var qt = new THREE.PlaneGeometry(5, 5, i - 1, 10 - 1);
        var Rt = new THREE.MeshBasicMaterial({
            color: 16777215
        });
        Rt.transparent = true;
        var Ut = new THREE.Mesh(qt, Rt);
        yt.add(Ut);
        Ut.position.x = 0;
        Ut.position.y = 0;
        Ut.position.z = 0;
        zt()
    });
    var n = false;
    /*
    $(".quilia-onda .text-menu").mouseenter(function () {
        if (!n) {
            var r = $(this).attr("data-id-menu");
            if ($(".menu-onde.active").length && r != $(".menu-onde.active").attr("data-id-menu")) {
                t($(".menu-onde.active").attr("data-id-menu"))
            }
            e(r)
        }
    });
    */
    $(".quilia-onda").mouseenter(function () {
        if (!n) {
            var r = $(this).children('.text-menu').attr("data-id-menu");
            if ($(".menu-onde.active").length && r != $(".menu-onde.active").attr("data-id-menu")) {
                t($(".menu-onde.active").attr("data-id-menu"))
            }
            e(r)
        }
    });
    $(".quilia-onda").mouseleave(function () {
        if (!n) {
            var r = $(this).children('.text-menu').attr("data-id-menu");
            if ($(".menu-onde.active").length ==0 && r == $(".menu-onde.active").attr("data-id-menu")) {
                e($(".menu-onde.active").attr("data-id-menu"))
            }
            t(r)
        }
    });
    /*
    $(".quilia-onda .text-menu").click(function () {
        var n = $(this).parents(".quilia-onda");
        var r = $(this).parents(".quilia-container");
        if (!r.hasClass("active")) {
            if (n.find(".menu-onde.active").length) {
                t($(this).attr("data-id-menu"))
            } else {
                var i = $(this).attr("data-id-menu");
                if ($(".menu-onde.active").length && i != $(".menu-onde.active").attr("data-id-menu")) {
                    t($(".menu-onde.active").attr("data-id-menu"))
                }
                e(i)
            }
        } else {
            if (n.find(".quilia-menu-active").is(":visible")) {
                n.find(".quilia-menu-active").slideUp(150)
            } else {
                if (r.find(".quilia-onda.active").length && !n.hasClass("active")) {
                    r.find(".quilia-onda.active .quilia-menu-active").slideUp(150);
                    r.find(".quilia-onda.active").removeClass("active")
                }
                n.addClass("active");
                n.find(".quilia-menu-active").slideDown(350)
            }
        }
    });
    */
    /*
    $(".quilia-only-onda ul li").click(function() {
        n = true;
        t($('.quilia-menu-active li.active').parents(".quilia-onda").find(".text-menu").attr("data-id-menu"));
        var e = $('.quilia-menu-active li.active');
        setTimeout(function () {
            e.parents(".quilia-menu").find(".quilia-only-onda").slideUp(350, function () {
                e.parents(".quilia-container").addClass("active");
                e.parents(".quilia-onda").addClass("active")
            })
        }, 1200)
    })
    */
});