var topping;
var precio;
var precioFinal;
var helado = 1;

if (helado === 1) {
    topping = "Oreo";
    precio = 10;
} else if (helado === 2) {
    topping = "KitKat";
    precio = 15;
} else if (helado === 3) {
    topping = "Kinder";
    precio = 25;
} else {
    topping = "Desconocido";
}

if (topping !== "Desconocido") {
    precioFinal = precio + 5;
    console.log("El helado cuesta $" + precioFinal + " con topping de " + topping);
} else {
    console.log("No tenemos este topping.");
}

var pedido = "pescado";
var bebida;

switch (pedido) {
    case "carne":
        bebida = "vino tinto";
        break;
    case "pescado":
        bebida = "vino blanco";
        break;
    case "verdura":
        bebida = "agua";
        break;
    default:
        console.log("Elija carne, pescado o verdura.");
        break;
}

if (bebida) {
    console.log("Bebida para " + pedido + ": " + bebida);
}


var numeros = [1, 2, 3, 4, 5];
for (var i = 0; i < numeros.length; i++) {
    console.log("Numero: " + numeros[i]);
}

var numero = 5;
while (numero < 11) {
    console.log(numero + " es mas chico que 11");
    numero++;
}