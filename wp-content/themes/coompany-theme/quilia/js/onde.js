function showSubmenu(e){var t=e.find("li");if(t.length){var n=e.parent().find('.text-menu[data-id-menu="'+e.attr("data-id")+'"] .title-menu');e.css("left",n.position().left+n.outerWidth(true)+10+"px");e.css("bottom","0px");e.delay(600).fadeIn(350)}}function logo(){if(jQuery(".logo").length){if(!jQuery(".logo").hasClass("block-logo")){jQuery(".logo").css("bottom","-"+(parseInt(jQuery("#menu-row div").css("margin-top").replace("px",""))+jQuery("#menu-row .quilia-onda").eq(0).outerHeight(true)-40)+"px")}}}function goto_top_logo(e){if(jQuery(".logo").length){jQuery(".logo").animate({bottom:0},e,function(){jQuery(this).addClass("block-logo")})}}jQuery(document).ready(function(){function n(e){e.fadeOut(150)}jQuery(".menu-onde").each(function(e,t){function Ft(){if(n.hasClass("active")==true&&v==false)v=true;if(n.hasClass("active")==false&&v==true)v=false;m=n.data("over");var e;e=(new Date).getTime();Ht=Pt.getDelta();Ot+=Ht;for(I=0;I<f;I++){q.vertices[I].y=s/2*Math.sin((q.vertices[I].x-l/2-l/a/4)*h);if(Bt==1){q.vertices[I].y+=s/3*Math.sin((q.vertices[I].x-l/2-l/a/4)*h*3+c*10*e)*Ot/Mt}if(Bt==2){q.vertices[I].y+=s/3*Math.sin((q.vertices[I].x-l/2-l/a/4)*h*3+c*10*e)*(-Ot/_t+1)}if(Bt==3){q.vertices[I].y+=s/20*Math.sin((q.vertices[I].x-l/2-l/a/4)*h+c*e)}q.vertices[I].y=q.vertices[I].y/2+s/3*2;if(jt==false){if(v&&Bt==0){Bt=1;Ot=0;if(a==2)E=u+l/(2*a)+l/a*Math.floor(Math.random()*2);else if(a==3)E=u+l/(2*a)+l/a*Math.floor(Math.random()*3);else if(a==4)E=u+l/(2*a)+l/a*Math.floor(Math.random()*2+1);else if(a==5)E=u+l/(2*a)+l/a*Math.floor(Math.random()*3+1);else if(a==6)E=u+l/(2*a)+l/a*Math.floor(Math.random()*4+1);else E=u+l/(2*a)+l/a*Math.floor(Math.random()*(a-2)+1)}if(Bt==0){q.vertices[I].y=q.vertices[I].y/100;ct.opacity=0}if(Bt==1){ct.opacity+=(1-ct.opacity)/1e3;if(Ot<Mt)q.vertices[I].y=q.vertices[I].y*Ot/Mt;else{Bt=2;Ot=0}}if(Bt==2){if(Ot>=_t)Bt=3}}if(v==false){if(jt==false&&Bt>0){Ot=0;jt=true}}if(jt==true){if(Ot>Dt){Bt=0;jt=false;n.trigger("waveClose")}if(Ot>Dt/10*9)ct.opacity+=(0-ct.opacity)/1e4;q.vertices[I].y*=-Ot/Dt+1}var t=i/2-u;var r=i/2-u-i/f;q.vertices[I].y*=2*(q.vertices[I].x+i/2)*(q.vertices[I].x+i/2)/(E*E)*Math.pow(2.71,-(q.vertices[I].x+i/2)*(q.vertices[I].x+i/2)/(E*E))+.2;q.vertices[I].y*=1-(t+r)/(t*r*r+r*t*t)*q.vertices[I].x*q.vertices[I].x+(r*r-t*t)/(t*r*r+r*t*t)*q.vertices[I].x}for(I=0;I<f;I++){T=1-x*1;R.vertices[I].y=q.vertices[I].y*T*Math.cos(S*1);R.vertices[I].z=q.vertices[I].y*T*Math.sin(S*1);T=1-x*2;U.vertices[I].y=q.vertices[I].y*T*Math.cos(S*2.6);U.vertices[I].z=q.vertices[I].y*T*Math.sin(S*2.6);T=1-x*3;z.vertices[I].y=q.vertices[I].y*T*Math.cos(S*3.6);z.vertices[I].z=q.vertices[I].y*T*Math.sin(S*3.6);T=1-x*4;W.vertices[I].y=q.vertices[I].y*T*Math.cos(S*5.2);W.vertices[I].z=q.vertices[I].y*T*Math.sin(S*5.2);T=1-x*5;X.vertices[I].y=q.vertices[I].y*T*Math.cos(S*6);X.vertices[I].z=q.vertices[I].y*T*Math.sin(S*6);T=1-x*6;V.vertices[I].y=q.vertices[I].y*T*Math.cos(S*6.8);V.vertices[I].z=q.vertices[I].y*T*Math.sin(S*6.8);T=1-x*7;J.vertices[I].y=q.vertices[I].y*T*Math.cos(S*7.3);J.vertices[I].z=q.vertices[I].y*T*Math.sin(S*7.3);T=1-x*8;K.vertices[I].y=q.vertices[I].y*T*Math.cos(S*8.3);K.vertices[I].z=q.vertices[I].y*T*Math.sin(S*8.3);T=1-x*9;Q.vertices[I].y=q.vertices[I].y*T*Math.cos(S*9);Q.vertices[I].z=q.vertices[I].y*T*Math.sin(S*9);G.vertices[I].y=q.vertices[I].y+.8;Y.vertices[I].y=q.vertices[I].y+1.6;Z.vertices[I].y=q.vertices[I].y+2.4}q.verticesNeedUpdate=true;R.verticesNeedUpdate=true;U.verticesNeedUpdate=true;z.verticesNeedUpdate=true;W.verticesNeedUpdate=true;X.verticesNeedUpdate=true;V.verticesNeedUpdate=true;J.verticesNeedUpdate=true;K.verticesNeedUpdate=true;Q.verticesNeedUpdate=true;G.verticesNeedUpdate=true;Y.verticesNeedUpdate=true;Z.verticesNeedUpdate=true;if(v){if(kt.opacity<1){kt.opacity+=.1}}else{if(m){if(kt.opacity<1){kt.opacity+=.1}}else{if(kt.opacity>0){kt.opacity-=.1}}}var p;var d;var g;var y=At.length;for(I=0;I<y;I++){if(Bt==0){At[I].style.opacity=0}if(Bt==3&&jt==false){if(At[I].style.opacity==0)jQuery(At[I]).fadeTo("slow",1)}if(jt){if(At[I].style.opacity==1)jQuery(At[I]).fadeTo("slow",0)}p=l/(2*a)+l/a*I;d=q.vertices[parseInt(p/l*f)].y;if(p<l/2-20)g=-1;else if(p>l/2+20)g=0;else g=-1/2;jQuery(At[I]).css("left",n.position().left+u+p+g*jQuery(At[I]).children().outerWidth());jQuery(At[I]).css("top",n.position().top+s-o-d-40)}i=n.width();s=n.height();nt=i/s;st.setSize(i,s);st.render(ut,ot);requestAnimationFrame(function(){Ft()})}var n=jQuery(this);var r=jQuery(this.parentNode);var i=n.width(),s=n.height();var o=0;var u=50;var a;var f=100;var l=i-u*2;var c=.001;var h=a/i*2*Math.PI*1.4;var p=.4;var d=10;var v=false;var m=false;var g=2;var y=2;var b=2;var w=1/3;var E=i*((Math.random()-.5)/1.4+.5);var S=Math.PI/2*1/(d-1);var x=.7/d;var T=1;var N=jQuery(t).attr("data-color");var C=new Array;var k=new Array;var L=new Array;var A=new Array;var O=new Array;var M=new Array;var _=new Array;var D=new Array;var P=new Array;var H=new Array;var B=new Array;var j=new Array;var F=new Array;var I=0;for(I=0;I<f;I++){C.push(new THREE.Vector3(I/f*l-l/2,0,0));k.push(new THREE.Vector3(I/f*l-l/2,0,0));L.push(new THREE.Vector3(I/f*l-l/2,0,0));A.push(new THREE.Vector3(I/f*l-l/2,0,0));O.push(new THREE.Vector3(I/f*l-l/2,0,0));M.push(new THREE.Vector3(I/f*l-l/2,0,0));_.push(new THREE.Vector3(I/f*l-l/2,0,0));D.push(new THREE.Vector3(I/f*l-l/2,0,0));P.push(new THREE.Vector3(I/f*l-l/2,0,0));H.push(new THREE.Vector3(I/f*l-l/2,0,0));B.push(new THREE.Vector3(I/f*l-l/2,0,0));j.push(new THREE.Vector3(I/f*l-l/2,0,0));F.push(new THREE.Vector3(I/f*l-l/2,0,0))}var q=new THREE.Geometry;var R=new THREE.Geometry;var U=new THREE.Geometry;var z=new THREE.Geometry;var W=new THREE.Geometry;var X=new THREE.Geometry;var V=new THREE.Geometry;var J=new THREE.Geometry;var K=new THREE.Geometry;var Q=new THREE.Geometry;var G=new THREE.Geometry;var Y=new THREE.Geometry;var Z=new THREE.Geometry;var et=jQuery("body").css("background-color");var tt=45,nt=i/s,rt=.1,it=1e4;var st=Detector.webgl?new THREE.WebGLRenderer({antialias:true,canvas:t}):new THREE.CanvasRenderer({antialias:true,canvas:t});st.setClearColor(et);st.setSize(i,s);var ot=new THREE.OrthographicCamera(i/-2,i/2,s/2,s/-2,1,1e3);var ut=new THREE.Scene;ut.add(ot);var at=10;var ft=2.3;var lt=Math.PI/18;ot.position.z=1e3;ot.position.y=s/2-o;for(I=0;I<f;I++){q.vertices.push(C[I]);R.vertices.push(k[I]);U.vertices.push(L[I]);z.vertices.push(A[I]);W.vertices.push(O[I]);X.vertices.push(M[I]);V.vertices.push(_[I]);J.vertices.push(D[I]);K.vertices.push(P[I]);Q.vertices.push(H[I]);G.vertices.push(B[I]);Y.vertices.push(j[I]);Z.vertices.push(F[I])}var ct=new THREE.LineBasicMaterial({color:N,opacity:1,linewidth:1});ct.transparent=true;var ht=new THREE.Line(q,ct);var pt=new THREE.Line(R,ct);var dt=new THREE.Line(U,ct);var vt=new THREE.Line(z,ct);var mt=new THREE.Line(W,ct);var gt=new THREE.Line(X,ct);var yt=new THREE.Line(V,ct);var bt=new THREE.Line(J,ct);var wt=new THREE.Line(K,ct);var Et=new THREE.Line(Q,ct);var St=new THREE.Line(G,ct);var xt=new THREE.Line(Y,ct);var Tt=new THREE.Line(Z,ct);ut.add(ht);ut.add(pt);ut.add(dt);ut.add(vt);ut.add(mt);ut.add(gt);ut.add(yt);ut.add(bt);ut.add(wt);ut.add(Et);ut.add(St);ut.add(xt);ut.add(Tt);var Nt=new THREE.MeshBasicMaterial({color:2236962});var Ct=new THREE.Mesh(new THREE.CubeGeometry(i,4,1),Nt);Ct.position.z=500;Ct.position.y=1;ut.add(Ct);var kt=new THREE.MeshBasicMaterial({color:N});kt.transparent=true;kt.opacity=0;var Lt=new THREE.Mesh(new THREE.CubeGeometry(l,4,1),kt);Lt.position.z=510;Lt.position.y=1;ut.add(Lt);var At=n.parent().find("ul li");a=At.length;h=a/l*2*Math.PI;var Ot=0;var Mt=.45;var _t=1;var Dt=.5;var Pt=new THREE.Clock;var Ht;var Bt=0;var jt=false;Ft()});var e,t;jQuery(".quilia-container .quilia-menu .quilia-onda .text-menu").hover(function(){goto_top_logo(1500);var n=jQuery(this);n.parent().find(".menu-onde").data("over",1);clearTimeout(e);t=setTimeout(function(){var e=n.parents(".quilia-container").find(".menu-onde.active");if(e.length){for(var t=0;t<e.length;t++){if(!e.eq(t).hasClass("active-fixed")){e.eq(t).removeClass("active")}}}if(!n.parent().find(".menu-onde").hasClass("active-fixed")&&!n.parent().find(".menu-onde").hasClass("active")){n.parent().find(".menu-onde").addClass("active")}n.parent().find(".menu-onde").data("over",0)},400)},function(){var n=jQuery(this);clearTimeout(t);e=setTimeout(function(){n.parent().find(".menu-onde").data("over",0);if(!n.parent().find(".menu-onde").hasClass("active-fixed")&&n.parent().find(".menu-onde").hasClass("active")){n.parent().find(".menu-onde").removeClass("active")}},500)});jQuery(".quilia-container .quilia-menu .quilia-onda .quilia-only-onda").mouseenter(function(){clearTimeout(e)});jQuery(".quilia-container .quilia-menu .quilia-onda .quilia-only-onda").mouseleave(function(){jQuery(this).parent().find(".text-menu").parent().find(".menu-onde").data("over",0);if(!jQuery(this).parent().find(".text-menu").parent().find(".menu-onde").hasClass("active-fixed")&&jQuery(this).parent().find(".text-menu").parent().find(".menu-onde").hasClass("active")){jQuery(this).parent().find(".text-menu").parent().find(".menu-onde").removeClass("active")}});jQuery(".quilia-container .quilia-menu .quilia-onda .text-menu").on("click",function(){if(jQuery(this).parent().find(".menu-onde").hasClass("active-fixed")){jQuery(this).parent().removeClass("active");jQuery(this).parent().find(".menu-onde").removeClass("active").removeClass("active-fixed")}else{jQuery(this).parent().addClass("active");jQuery(this).parent().find(".menu-onde").addClass("active").addClass("active-fixed")}});jQuery(".quilia-container .quilia-menu .quilia-onda .quilia-only-onda ul li").on("click",function(){jQuery(this).parents(".quilia-only-onda").find(".menu-onde").data("href",jQuery(this).find("a").attr("href"));jQuery(this).parents(".quilia-container").find(".menu-onde").removeClass("active").removeClass("active-fixed");return false});jQuery(".quilia-container .quilia-menu .quilia-onda .quilia-only-onda .menu-onde").on("waveClose",function(){if(jQuery(this).data("href")!="undefined"&&jQuery(this).data("href")!=null){window.location.href=jQuery(this).data("href")}jQuery(this).data("over",0)});jQuery(".quilia-group-goccia .text-menu").on("click",function(e){var t=jQuery(this);var r=t.parent();if(r.hasClass("active")){n(jQuery('.container-gocce .quilia-container ul.quilia-submenu[data-id="'+t.attr("data-id-menu")+'"]'));r.removeClass("active").addClass("deactive")}else{if(jQuery(".quilia-group-goccia.active").length){for(var i=0;i<jQuery(".quilia-group-goccia.active").length;i++){n(jQuery('.container-gocce .quilia-container ul.quilia-submenu[data-id="'+jQuery(".quilia-group-goccia.active .text-menu").eq(i).attr("data-id-menu")+'"]'));jQuery(".quilia-group-goccia.active").eq(i).removeClass("active").addClass("deactive")}}r.removeClass("deactive").addClass("active");showSubmenu(jQuery('.container-gocce .quilia-container ul.quilia-submenu[data-id="'+t.attr("data-id-menu")+'"]'))}})});jQuery(window).load(function(){logo()});jQuery(window).resize(function(){logo()})