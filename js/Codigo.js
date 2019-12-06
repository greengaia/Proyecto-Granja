var fondo = {
	url:"js/tile.png",
	cargaOK:false
};

var vaca = {
	url:"js/vaca.png",
	cargaOK:false
};
var cerdo = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
	url:"js/cerdo.png",
	cargaOK:false
};
var pollo = {
	url:"js/pollo.png",
	cargaOK:false
};

var d = document.getElementById("villa");
var lienzo = d.getContext("2d");
var x;
var y;
var x_c;
var y_c;
var estado = 0;

fondo.objeto = new Image();
vaca.objeto = new Image();
cerdo.objeto = new Image();
pollo.objeto = new Image();

fondo.objeto.src = fondo.url;
vaca.objeto.src = vaca.url;
cerdo.objeto.src = cerdo.url;
pollo.objeto.src = pollo.url;

fondo.objeto.addEventListener("load",cargarF);
vaca.objeto.addEventListener("load",cargarV);
cerdo.objeto.addEventListener("load",cargarC);
document.addEventListener("keydown", movimiento);
pollo.objeto.addEventListener("load",cargarP);


function aleatorio(min, max)
{
	var resultado = Math.floor(Math.random()*(max-min+1))+min
	return resultado;
}

function cargarF()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarV()
{
	vaca.cargaOK = true;
	dibujar();
}

function cargarC()
{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarP()
{
	pollo.cargaOK = true;
	dibujar();
}

function dibujar()
{	
	
	var contador;
	var cantidad = aleatorio(1, 10);
	if(fondo.cargaOK)
	{
		lienzo.drawImage(fondo.objeto, 0, 0);
	}

	
		if(vaca.cargaOK)
		{
		
		for(contador = 0;contador<cantidad;contador++)	
		{
		x = aleatorio(0, 10);
		y = aleatorio(0, 10);
		x = x * 40;
      	y = y * 40;
		lienzo.drawImage(vaca.objeto, x, y);
		}
		}

		if(pollo.cargaOK)
		{
		
		for(contador = 0;contador<cantidad;contador++)	
		{
		x = aleatorio(0, 10);
		y = aleatorio(0, 10);
		x = x * 40;
      	y = y * 40;
		lienzo.drawImage(pollo.objeto, x, y);
		}
		}
	
		if(cerdo.cargaOK)
		{	
		x_c = aleatorio(0, 10);
		y_c = aleatorio(0, 10);
		x_c = x_c * 40;
      	y_c = y_c * 40;
		lienzo.drawImage(cerdo.objeto, x_c, y_c);
		}

}

   
var estatic_x = [];
var estatic_y = [];

function movimiento(evento)
{	
	var con;
	lienzo.drawImage(fondo.objeto, 0, 0);
	for(con=0;con<10;con++)
	{
		if(estado == 0)
		{
		x = aleatorio(0, 10);
		y = aleatorio(0, 10);
		x = x * 40;
      	y = y * 40;
		lienzo.drawImage(vaca.objeto, x, y);
		estatic_x[con] = x;
		estatic_y[con] = y;	
		}
		if(estado == 1)
		{	
			lienzo.drawImage(vaca.objeto, estatic_x[con], estatic_y[con]);
		}

	}
	estado = 1;	
	var movimiento = 10;
	switch(evento.keyCode)
	{
		case cerdo.UP:
			
			lienzo.drawImage(cerdo.objeto, x_c, y_c - movimiento);
			y_c = y_c - movimiento;
		break;
		case cerdo.DOWN:
			lienzo.drawImage(cerdo.objeto, x_c, y_c + movimiento);
			y_c = y_c + movimiento;
		break;
		case cerdo.LEFT:
			lienzo.drawImage(cerdo.objeto, x_c - movimiento, y_c);
			x_c = x_c - movimiento;
		break;
		case cerdo.RIGHT:
			lienzo.drawImage(cerdo.objeto, x_c + movimiento, y_c);
			x_c = x_c + movimiento;
		break;
		default:
		break;
	}

}
