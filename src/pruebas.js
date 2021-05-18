// esta es la frase original
var cadena = "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
// encuentra la primer posición de "ato"
var posicion = cadena.indexOf("ato");
// y mientras tengas una posición mayor o igual que 0,
// (recuerda que -1 significa que no lo encontró)
var cont = 0;
while (posicion >= 0)
{

    // remplaza "ato" por "atito"
    cadena = cadena.slice(0, posicion) + "atito" + cadena.slice(posicion + 3);
    // busca la siguiente ocurrencia de la palabra
    posicion = cadena.indexOf("ato");
    cont++;
}
console.log(cadena);
console.log(cont);