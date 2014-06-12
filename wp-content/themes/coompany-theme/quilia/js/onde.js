jQuery(document).ready(function($)
{

	$(".menu-onde").each(function(index,element)
	{
		var _this = $(this);
		var _div = $(this.parentNode);
	
		// Imposta le dimensioni del renderer
		var WIDTH = _this.width(), HEIGHT = _this.height();
		var borderY = 0;
		var borderX = 50;
	
		// Variabili globali
		var numLink;
	
	
	
		var verticiNum = 100; // Numero di vertici per ogni onda
		var ondaLength = WIDTH-borderX*2; // Lunghezza in unità di three.js dell'onda (nel mondo 3d)
		var pulsazione = 0.001; // Pulsazione dell'onda
		var numeroOnda = (numLink)/WIDTH*2*Math.PI*1.4;
		var damp = .4; // Fattore di attrito per l'ampiezza delle onde ruotate in 3d
		var numOnde = 10; // Numero di onde reali che costituiscono la figura 3d (non contano quelle in più per i bordi
		var open = false; // Variabile che controlla l'apertura/chiusura
		var over = false;
		var tO = 2;	// Tempo di oscillazione pazza
		var tS = 2; // Tempo di stabilizzazione
		var tA = 2; // Tempo di chiusura
		var k = 1/3; 
		var def = WIDTH*((Math.random() - 0.5)/1.4+0.5);
	
		var rotFac = Math.PI/2*1/(numOnde-1); // Quanto ruota ogni onda rispetto alla precedente
		var dampFac = .7/numOnde; // Quando il fattore di attrito deve smussare la singola onda (dipende da quante ce ne sono in totale)
		var attenuazione = 1; // Verrà modificata volta per volta nell'attenuazione
	
		var color = $(element).attr('data-color');
	
		// Vertici delle varie onde
		var vertici = new Array();
		var vertici2 = new Array();
		var vertici3 = new Array();
		var vertici4 = new Array();
		var vertici5 = new Array();
		var vertici6 = new Array();
		var vertici7 = new Array();
		var vertici8 = new Array();
		var vertici9 = new Array();
		var vertici10 = new Array();
	
		// Vertici delle onde aggiuntive per inspessire il bordo
		var verticiD1 = new Array();
		var verticiD2 = new Array();
		var verticiD3 = new Array();
		
		// Sposta inizialmente i vertici di tutte le onde in modo che formino una linea piatta lunga quanto definito
		var i = 0;
		
		for (i = 0; i < verticiNum; i++)
		{
			vertici.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));
			vertici2.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));
			vertici3.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));
			vertici4.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));
			vertici5.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));
			vertici6.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));
			vertici7.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));	
			vertici8.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));	
			vertici9.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));	
			vertici10.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));	
		
			verticiD1.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));	
			verticiD2.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));	
			verticiD3.push(new THREE.Vector3(i/verticiNum*ondaLength-ondaLength/2,0,0));	
			
		
		}
	
		// Crea gli oggetti 3d
	
		// Onda principale
		var onda = new THREE.Geometry();
	
		// Onde secondarie
		var onda2 = new THREE.Geometry();
		var onda3 = new THREE.Geometry();
		var onda4 = new THREE.Geometry();
		var onda5 = new THREE.Geometry();
		var onda6 = new THREE.Geometry();
		var onda7 = new THREE.Geometry();
		var onda8 = new THREE.Geometry();
		var onda9 = new THREE.Geometry();
		var onda10 = new THREE.Geometry();
	
		// Onde di bordo
		var ondaD1 = new THREE.Geometry();
		var ondaD2 = new THREE.Geometry();
		var ondaD3 = new THREE.Geometry();
	
	
		// Variabili per il diverso comportamento delle onde nei vari casi
		
		
		var bodyColor = $("body").css("background-color"); // Lo sfondo del mondo 3d deve avere lo stesso colore dello sfondo del documento
	
	
	
		///////////////////////////////////
		///// GESTIONE SCENA 3D
	
	
		// Imposta la camera
		var VIEW_ANGLE = 45, ASPECT = WIDTH / HEIGHT,  NEAR = 0.1,  FAR = 10000;
	
		// Crea il renderer WebGL
		var renderer = Detector.webgl? new THREE.WebGLRenderer({ antialias: true, canvas: element}): new THREE.CanvasRenderer({ antialias: true, canvas: element});
	
		renderer.setClearColor( bodyColor );
		renderer.setSize(WIDTH, HEIGHT);
	
		// Crea la videocamera		
		var camera =  new THREE.OrthographicCamera( WIDTH / - 2, WIDTH / 2, HEIGHT / 2, HEIGHT / - 2, 1, 1000 );
	
		// Crea la scena 3d
		var scene = new THREE.Scene();
	
		// Aggiungi la camera alla scena e spostala dove serve
		scene.add(camera);
	
		var d = 10;
		var h = 2.3;
		var theta = Math.PI/18 ;
		
		camera.position.z = 1000;
		camera.position.y = HEIGHT/2-borderY;
	
	
		// Crea l'onda principale e le secondarie
		for (i = 0; i < verticiNum; i++)
		{
			onda.vertices.push(vertici[i]);
			onda2.vertices.push(vertici2[i]);
			onda3.vertices.push(vertici3[i]);
			onda4.vertices.push(vertici4[i]);
			onda5.vertices.push(vertici5[i]);
			onda6.vertices.push(vertici6[i]);
			onda7.vertices.push(vertici7[i]);
			onda8.vertices.push(vertici8[i]);
			onda9.vertices.push(vertici9[i]);
			onda10.vertices.push(vertici10[i]);
		
			ondaD1.vertices.push(verticiD1[i]);
			ondaD2.vertices.push(verticiD2[i]);
			ondaD3.vertices.push(verticiD3[i]);
		}
		
		// Crea il materiale delle onde
		var ondaMat = new THREE.LineBasicMaterial({color: color, opacity: 1, linewidth: 1}); 		
		ondaMat.transparent = true;
	
		// Crea la rappresentazione visiva delle onde
		var line = new THREE.Line(onda, ondaMat);	
		var line2 = new THREE.Line(onda2, ondaMat);
		var line3 = new THREE.Line(onda3, ondaMat);
		var line4 = new THREE.Line(onda4, ondaMat);
		var line5 = new THREE.Line(onda5, ondaMat);
		var line6 = new THREE.Line(onda6, ondaMat);
		var line7 = new THREE.Line(onda7, ondaMat);
		var line8 = new THREE.Line(onda8, ondaMat);
		var line9 = new THREE.Line(onda9, ondaMat);
		var line10 = new THREE.Line(onda10, ondaMat);
		
		var lineD1 = new THREE.Line(ondaD1, ondaMat);
		var lineD2 = new THREE.Line(ondaD2, ondaMat);
		var lineD3 = new THREE.Line(ondaD3, ondaMat);
		
		scene.add(line);
		scene.add(line2);			
		scene.add(line3);			
		scene.add(line4);			
		scene.add(line5);			
		scene.add(line6);			
		scene.add(line7);			
		scene.add(line8);			
		scene.add(line9);			
		scene.add(line10);			
		scene.add(lineD1);			
		scene.add(lineD2);			
		scene.add(lineD3);			
	
		var backgroundBarMat = new THREE.MeshBasicMaterial({color: 0x222222});
		var backgroundBar = new THREE.Mesh(new THREE.CubeGeometry(WIDTH,4,1), backgroundBarMat);
		backgroundBar.position.z = 500;
		backgroundBar.position.y = 1;
		scene.add(backgroundBar);
	
		var waveBarMat = new THREE.MeshBasicMaterial({color: color});	
		waveBarMat.transparent = true;
		waveBarMat.opacity = 0;
		var waveBar =  new THREE.Mesh(new THREE.CubeGeometry(ondaLength,4,1), waveBarMat); 
		waveBar.position.z = 510;
		waveBar.position.y = 1;
		
		scene.add(waveBar);
	
	
		// Capisci quale link stanno in questa onda
		var linkList=_this.parent().find('ul li'); // Lista di tutti i <li> nel menù attuale
		
		
		numLink = linkList.length;		
		numeroOnda = (numLink)/ondaLength*2*Math.PI;
	
	
		// Variabili temporali
		var t = 0; // Tempo che gestisce le fasi di crescita
		var t1 = .8;
		var t2 = 1; // Tempo che gestisce le fasi di decrescita
		var t3 = 0.5;
		var clock = new THREE.Clock();
		var delta; 
		
		var fase = 0; // Definisce lo stato in cui si trova l'onda in quel momento
		var decresce = false; // Attiva solo quando l'onda si sta richiudendo		
	
		
		// Chiama per la prima volta la funzione di animazione
		animate();	
	
	
		
		function animate(){
					
			// Prendi i dati blabla
			if (_this.hasClass("active") == true && open == false) open = true;
			if (_this.hasClass("active") == false && open == true) open = false;
			over = _this.data( "over");
		
			// Aggiorna il tempo
			var time;
			time = 	(new Date()).getTime();
		
			// Calcola il tempo passato dall'ultimo fotogramma
			delta = clock.getDelta();
			
			// Fai passare il tempo solo nel  caso l'onda sia in una fase di movimento
			
			t += delta;	
			
			
			// Movimento dell'onda principale
			for (i=0;i<verticiNum;i++)
			{
				// Moto sinusoidale
				onda.vertices[i].y = HEIGHT/2*Math.sin((onda.vertices[i].x-ondaLength/2-(ondaLength/numLink)/4)*numeroOnda);
			
				// Armoniche oscillanti in fase stabile
				if (fase == 1)
				{
					onda.vertices[i].y += HEIGHT/3*Math.sin((onda.vertices[i].x-ondaLength/2-(ondaLength/numLink)/4)*numeroOnda*3+pulsazione*10*time)*t/t1;
				}
				if (fase == 2)
				{
					onda.vertices[i].y += HEIGHT/3*Math.sin((onda.vertices[i].x-ondaLength/2-(ondaLength/numLink)/4)*numeroOnda*3+pulsazione*10*time)*(-t/t2+1);
				}
				if (fase == 3)
				{
					onda.vertices[i].y += HEIGHT/20*Math.sin((onda.vertices[i].x-ondaLength/2-(ondaLength/numLink)/4)*numeroOnda+pulsazione*time);
				}	
			
		
				// Sposta in su l'onda principale in modo che non sia allo stesso livello del terreno
				onda.vertices[i].y = onda.vertices[i].y/2+HEIGHT/3*2;
				
				// Il comportamento dell'onda è diverso nella fase di crescita o di decrescita
				if (decresce == false)
				{
					// Se si è appena detto all'onda di attivarsi cambia fase (ma solo se non è già in decrescita)
					if (open && fase == 0)
					{
						fase = 1;
						t = 0;
						
						if (numLink == 2) def = borderX+(ondaLength)/(2*numLink)+(ondaLength)/numLink*Math.floor(Math.random() * 2);						
						else if (numLink == 3) def = borderX+(ondaLength)/(2*numLink)+(ondaLength)/numLink*Math.floor(Math.random() * 3);
						else if (numLink == 4) def = borderX+(ondaLength)/(2*numLink)+(ondaLength)/numLink*Math.floor((Math.random() * 2  + 1));					
						else if (numLink == 5) def = borderX+(ondaLength)/(2*numLink)+(ondaLength)/numLink*Math.floor((Math.random() * 3 + 1) );					
						else if (numLink == 6) def = borderX+(ondaLength)/(2*numLink)+(ondaLength)/numLink*Math.floor((Math.random() * 4 + 1));									
						else def = borderX+(ondaLength)/(2*numLink)+(ondaLength)/numLink*Math.floor((Math.random() * (numLink-2)+1 ));
						
		
					}
		
					// Comportamento nelle varie fasi
					if (fase == 0)
					{
						// Inizialmente l'onda è quasi piatta						
						onda.vertices[i].y = onda.vertices[i].y/100;
						ondaMat.opacity = 0;
					}
					if (fase == 1)  // Crescita
					{			
						//  Rendi l'onda più visibile
						ondaMat.opacity += (1-ondaMat.opacity)/1000;
						 // Per un po' alza l'onda
						if (t < t1) onda.vertices[i].y = onda.vertices[i].y*t/t1;
						else
						{
							fase = 2;
							t = 0;
						}
					}
					if (fase == 2) // Stabilizzazione
					{
						if (t >= t2) fase = 3;
					}
				}
				
				// Gestisce l'input di chiusura
				if (open == false) 
				{
					if (decresce == false && fase > 0)
					{
						t = 0;					
						decresce = true;
					}
		
				}				
				
				
				if (decresce == true)
				{
					// Dopo un po' di tempo l'onda si deve chiudere del tutto
					if (t> t3)
					{
						fase = 0;
						decresce = false;
						_this.trigger("waveClose");
					}
					
					// E alla fine è meglio che svanisca lentamente
					if (t > t3/10*9) 	ondaMat.opacity += (0-ondaMat.opacity)/10000;		
					
					onda.vertices[i].y *= -t/t3+1;
				}
		
				
		
				
				// In tutti i casi le onde devono essere limitate ai bordi
				var w1 = WIDTH/2-borderX;
				var w2 = WIDTH/2-borderX-WIDTH/verticiNum;
				
		
				onda.vertices[i].y *= 2*(onda.vertices[i].x+WIDTH/2)*(onda.vertices[i].x+WIDTH/2)/(def*def)*Math.pow(2.71, -(onda.vertices[i].x+WIDTH/2)*(onda.vertices[i].x+WIDTH/2)/(def*def))+0.2;
				onda.vertices[i].y *= 1 - (w1+w2)/(w1*w2*w2+w2*w1*w1)*onda.vertices[i].x*onda.vertices[i].x+(w2*w2-w1*w1)/(w1*w2*w2+w2*w1*w1)*onda.vertices[i].x;				
		
				//onda.vertices[i].y *= 1+1.5*Math.abs((def-ondaLength/2)/ondaLength);
		
			}
			
			
			// Fai copiare alle onde secondarie il movimento dell'onda principale, ruotandole e attenuandole
			for (i = 0; i < verticiNum; i++)
			{
				attenuazione = 1-dampFac*1;
				onda2.vertices[i].y = (onda.vertices[i].y*attenuazione)*Math.cos(rotFac*1);
				onda2.vertices[i].z = (onda.vertices[i].y*attenuazione)*Math.sin(rotFac*1);
		
				attenuazione = 1-dampFac*2;
				onda3.vertices[i].y = (onda.vertices[i].y*attenuazione)*Math.cos(rotFac*2.6);
				onda3.vertices[i].z = (onda.vertices[i].y*attenuazione)*Math.sin(rotFac*2.6);
				
				attenuazione = 1-dampFac*3;
				onda4.vertices[i].y = (onda.vertices[i].y*attenuazione)*Math.cos(rotFac*3.6);
				onda4.vertices[i].z = (onda.vertices[i].y*attenuazione)*Math.sin(rotFac*3.6);
				
				attenuazione = 1-dampFac*4;
				onda5.vertices[i].y = (onda.vertices[i].y*attenuazione)*Math.cos(rotFac*5.2);
				onda5.vertices[i].z = (onda.vertices[i].y*attenuazione)*Math.sin(rotFac*5.2);
				
				attenuazione = 1-dampFac*5;
				onda6.vertices[i].y = (onda.vertices[i].y*attenuazione)*Math.cos(rotFac*6);
				onda6.vertices[i].z = (onda.vertices[i].y*attenuazione)*Math.sin(rotFac*6);
				
				attenuazione = 1-dampFac*6;
				onda7.vertices[i].y = (onda.vertices[i].y*attenuazione)*Math.cos(rotFac*6.8);
				onda7.vertices[i].z = (onda.vertices[i].y*attenuazione)*Math.sin(rotFac*6.8);
															
				attenuazione = 1-dampFac*7;
				onda8.vertices[i].y = (onda.vertices[i].y*attenuazione)*Math.cos(rotFac*7.3);
				onda8.vertices[i].z = (onda.vertices[i].y*attenuazione)*Math.sin(rotFac*7.3);
								
				attenuazione = 1-dampFac*8;
				onda9.vertices[i].y = (onda.vertices[i].y*attenuazione)*Math.cos(rotFac*8.3);
				onda9.vertices[i].z = (onda.vertices[i].y*attenuazione)*Math.sin(rotFac*8.3);
								
				attenuazione = 1-dampFac*9;
				onda10.vertices[i].y = (onda.vertices[i].y*attenuazione)*Math.cos(rotFac*9);
				onda10.vertices[i].z = (onda.vertices[i].y*attenuazione)*Math.sin(rotFac*9);
				
				// Allarga bordo superiore e inferiore con il trucco delle onde duplicate
				ondaD1.vertices[i].y = (onda.vertices[i].y)+0.8;
				ondaD2.vertices[i].y = (onda.vertices[i].y)+1.6;
				ondaD3.vertices[i].y = (onda.vertices[i].y)+2.4;
									
			}	
			
			
			// Necessario perchè le onde aggiornino i vertici in WebGL
			onda.verticesNeedUpdate = true;				
			onda2.verticesNeedUpdate = true;				
			onda3.verticesNeedUpdate = true;				
			onda4.verticesNeedUpdate = true;				
			onda5.verticesNeedUpdate = true;				
			onda6.verticesNeedUpdate = true;				
			onda7.verticesNeedUpdate = true;				
			onda8.verticesNeedUpdate = true;				
			onda9.verticesNeedUpdate = true;				
			onda10.verticesNeedUpdate = true;
			
			ondaD1.verticesNeedUpdate = true;				
			ondaD2.verticesNeedUpdate = true;				
			ondaD3.verticesNeedUpdate = true;	
			
		
			if (open)
			{
				if (waveBarMat.opacity < 1)
				{
					waveBarMat.opacity += 0.1;
				}
			}
			else
			{
				// Barretta colorata
				if (over)
				{
					if (waveBarMat.opacity < 1)
					{
						waveBarMat.opacity += 0.1;
					}
				}
				else
				{
					if (waveBarMat.opacity > 0)
					{
						waveBarMat.opacity -= 0.1;
					}
				}
			}
		
			
			
			////////////////////////////
			// Getione dei link
			////////////////////////////
			
		
		
			// Variabili per la gestione della posizione dei link
			var linkX;
			var linkY;
			var deltaX;
			
			var count  = linkList.length;
		
			// Cicla per ogni sottomenù all'interno di quest'onda
			for (i = 0; i < count; i++)
			{
				if (fase == 0)
				{
					linkList[i].style.opacity = 0;
				}					
				
				if (fase == 3 && decresce == false)
				{
						if (linkList[i].style.opacity == 0) $(linkList[i]).fadeTo("slow",1);				
				}
				
				if (decresce)
				{
					if (linkList[i].style.opacity == 1) $(linkList[i]).fadeTo("slow",0);						
				}
				
				linkX = (ondaLength)/(2*numLink)+(ondaLength)/numLink*i;
				linkY=  onda.vertices[parseInt(linkX/ondaLength*verticiNum)].y  ;
				if (linkX  < ondaLength/2 - 20) deltaX = -1;
				else if (linkX > ondaLength/2 + 20) deltaX = 0;
				else deltaX = -1/2;
				
				$(linkList[i]).css("left", _this.position().left+borderX+linkX+deltaX*$(linkList[i]).children().outerWidth());			
				$(linkList[i]).css("top", _this.position().top+HEIGHT-borderY-linkY-40);
			}

			
			// Aggiusta le dimensioni
			WIDTH = _this.width();
			HEIGHT = _this.height();
			ASPECT = WIDTH / HEIGHT;

		
			
			renderer.setSize(WIDTH,HEIGHT);
			// render
			renderer.render(scene, camera);	 
			// request new frame
			requestAnimationFrame(function(){animate();});
		}			

	});

	var delayTimeoutOut,
		delayTimeoutIn;
	$('.quilia-container .quilia-menu .quilia-onda .text-menu').hover(function()
	{
		goto_top_logo(1500);
		var _this=$(this);
		_this.parent().find('.menu-onde').data( "over", 1);
		clearTimeout(delayTimeoutOut);
		delayTimeoutIn=setTimeout(function()
		{
			var OndeActive=_this.parents('.quilia-container').find('.menu-onde.active');
			if(OndeActive.length)
			{
				for(var i=0;i<OndeActive.length;i++)
				{
					if(!OndeActive.eq(i).hasClass('active-fixed'))
					{
						OndeActive.eq(i).removeClass('active');
					}
				}
			}
			if(!_this.parent().find('.menu-onde').hasClass('active-fixed') && !_this.parent().find('.menu-onde').hasClass('active'))
			{
				_this.parent().find('.menu-onde').addClass('active');
			}
			_this.parent().find('.menu-onde').data( "over", 0);
		}, 400);	
	},function()
	{
		var _this=$(this);
		clearTimeout(delayTimeoutIn);
		delayTimeoutOut=setTimeout(function()
		{
			_this.parent().find('.menu-onde').data( "over", 0);
			if(!_this.parent().find('.menu-onde').hasClass('active-fixed') && _this.parent().find('.menu-onde').hasClass('active'))
			{
				_this.parent().find('.menu-onde').removeClass('active');
			}
		},500);
	});
	
	$('.quilia-container .quilia-menu .quilia-onda .quilia-only-onda').mouseenter(function()
	{
		clearTimeout(delayTimeoutOut);
	});
	
	$('.quilia-container .quilia-menu .quilia-onda .quilia-only-onda').mouseleave(function()
	{
		$(this).parent().find('.text-menu').parent().find('.menu-onde').data( "over", 0);
		if(!$(this).parent().find('.text-menu').parent().find('.menu-onde').hasClass('active-fixed') && $(this).parent().find('.text-menu').parent().find('.menu-onde').hasClass('active'))
		{
			$(this).parent().find('.text-menu').parent().find('.menu-onde').removeClass('active');
		}
	});
	
	$('.quilia-container .quilia-menu .quilia-onda .text-menu').click(function()
	{
		if($(this).parent().find('.menu-onde').hasClass('active-fixed'))
		{
			$(this).parent().removeClass('active');
			$(this).parent().find('.menu-onde').removeClass('active').removeClass('active-fixed');
		}
		else
		{
			$(this).parent().addClass('active');
			$(this).parent().find('.menu-onde').addClass('active').addClass('active-fixed');	
		}
	});
	
	$('.quilia-container .quilia-menu .quilia-onda .quilia-only-onda ul li').click(function()
	{
		$(this).parents('.quilia-only-onda').find('.menu-onde').data('href',$(this).find('a').attr('href'));
		$(this).parents('.quilia-container').find('.menu-onde').removeClass('active').removeClass('active-fixed');
		return false;
	});
	
	$('.quilia-container .quilia-menu .quilia-onda .quilia-only-onda .menu-onde').on('waveClose',function()
	{
		if($(this).data('href')!="undefined" && $(this).data('href')!=null)
		{
			window.location.href = $(this).data('href');
		}
		$(this).data('over',0);
	});
	
	$('.quilia-group-goccia .text-menu').click(function(e) {
		var _this=$(this);
		var Goccia=_this.parent();
		
        if(Goccia.hasClass('active'))//Nascondi il sottomenu
		{
			hideSubmenu($('.container-gocce .quilia-container ul.quilia-submenu[data-id="'+_this.attr('data-id-menu')+'"]'));
			Goccia.removeClass('active').addClass('deactive');
		}
		else
		{
			if($('.quilia-group-goccia.active').length)//Nascondi altri sottomenu
			{
				for(var i=0;i<$('.quilia-group-goccia.active').length;i++)
				{
					hideSubmenu($('.container-gocce .quilia-container ul.quilia-submenu[data-id="'+$('.quilia-group-goccia.active .text-menu').eq(i).attr('data-id-menu')+'"]'));
					$('.quilia-group-goccia.active').eq(i).removeClass('active').addClass('deactive');
				}
			}
			
			Goccia.removeClass('deactive').addClass('active');//Visualizza il sottomenu scelto
			showSubmenu($('.container-gocce .quilia-container ul.quilia-submenu[data-id="'+_this.attr('data-id-menu')+'"]'));
		}
    });
	
	function hideSubmenu(_this)
	{
		_this.fadeOut(150);
	}
	
	function showSubmenu(_this)
	{
		var ListLi=_this.find('li');
		if(ListLi.length)
		{
			var TitleMenu=_this.parent().find('.text-menu[data-id-menu="'+_this.attr('data-id')+'"] .title-menu');

			_this.css('left',(TitleMenu.position().left+TitleMenu.outerWidth(true)+10)+'px');
			_this.css('bottom','0px');
			_this.delay(600).fadeIn(350);
		}
	}
});

jQuery(window).load(function()
{
	logo();
});

jQuery(window).resize(function()
{
	logo();
});

function logo()
{
	if(jQuery('.logo').length)
	{
		if(!jQuery('.logo').hasClass('block-logo'))
		{
            jQuery('.logo').css('bottom','-'+(parseInt(jQuery('#menu-row div').css('margin-top').replace('px',''))+jQuery('#menu-row .quilia-onda').eq(0).outerHeight(true)-40)+'px');
		}
	}
}

function goto_top_logo(Duration)
{
	if(jQuery('.logo').length)
	{
        jQuery('.logo').animate({bottom:0},Duration,function(){jQuery(this).addClass('block-logo');});
	}
}