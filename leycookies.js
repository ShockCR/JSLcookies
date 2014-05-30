//***** JS adaptación ley cookies

//*** comprueba que es la primera vez que accede el usuario al sitio
if (localStorage.cookiesTecnoblogic==undefined){ 
	$("#avisoCookies").slideToggle(); //muesta aviso
	window.onscroll = hayScroll;
	var numScrolls=0;	
}

function hayScroll (){
	numScrolls++;
	if (numScrolls>3){	//a partir de 4 acciones de scroll, lanza el temporizador	
		window.onscroll=null; 
		setTimeout(function(){continuaNavegando()},5000); //pasados 5 seg, quita el aviso y acepta cookies
	}
}

//*** quita aviso y carga JS cookies
function continuaNavegando(){	
	localStorage.cookiesTecnoblogic="ok"; //para próximas visitas	
	$("#avisoCookies").slideUp(); //oculta aviso
	//carga Google Analytics
	loadJS('funciones', '/analytics.js');
}

//*** carga js dinámicamente
function loadJS(id, src) {
    if (document.getElementById(id) != null) return;
    var js = document.createElement('script'); 
    js.id = id; js.async = false; js.src = src;
    document.getElementsByTagName('head')[0].appendChild(js);
}
