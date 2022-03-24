

var nombre;
var edad;
var poblacion;

nombre=prompt("ingresa tu nombre");

while(!isNaN(nombre)){

    nombre=prompt("ingresa un nombre valido","escribe aqui tu nombre");
}

edad=prompt("ingresa tu edad");


while(edad<=0 || edad>100 || isNaN(edad)){

    alert("ingresa una edad valida");
    edad=prompt("ingresa tu edad");
}
poblacion=prompt("ingresa tu poblacion");

while(!isNaN(poblacion)){

    poblacion=prompt("ingresa una poblacion valida");
}

//typeof(edad)=="string"