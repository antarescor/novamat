function animar(){	
	setTimeout ('animarLogo()', 0);	
	setTimeout ('visbleLogo()', 800);	
	setTimeout ('animarLetras()', 750);
	setTimeout ('animarBoton()', 1600);
	setTimeout ('visbleBtn()', 3000);
	setTimeout ('noAnimarBoton()', 3600);
	


}

function animarLogo(){	
	var rdm = Math.floor(Math.random() * 3) + 1;
	switch(rdm){
		case 1:
			document.getElementById('logoInicio').className += ' chicle';
			break;
		case 2:
			document.getElementById('logoInicio').className += ' bounceInRight';			
			break;
		case 3:
			document.getElementById('logoInicio').className += ' dobleclick';
			break;
		default:
			document.getElementById('logoInicio').className += ' bounceIn';
	}	
}

function animarLetras(){	
	document.getElementById('letrasInicio').className += ' fadeInUp';
}

function animarBoton(){	
	document.getElementById('btnIniciar').className += ' bounceIn2';
}

function noAnimarBoton(){
	document.getElementById('btnIniciar').classList.remove('bounceIn2');
}


function visbleLogo(){
	document.getElementById('letrasInicio').classList.remove('invisible');
}

function visbleBtn(){
	document.getElementById('btnIniciar').classList.remove('invisible');
}
