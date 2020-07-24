/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //asignar las variables segun el enunciado
    let ancho;
    let largo;
    let perimetro;
    let alambre;
//conseguir los valores en la caja de texto o en el html
    ancho=parseInt(document.getElementById("txtIdLargo").value);
    largo=parseInt(document.getElementById("txtIdAncho").value);
    //calcular el perimetro 

    perimetro = (ancho + largo) * 2;

//asignar valor a alambre

alambre = perimetro * 3

//mostrar mediante un alert el resultado

alert ("se necesitan comprar " + alambre + " metros de alambre")




}
function Circulo () 
{
    let perimetro;
    let radio;
    let alambre;
    const PI =3.14;

    radio =parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;

    alambre = perimetro * 3 
   
    alert("se necesitan comprar " + alambre + "mts de alambre");
    
    
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo= parseInt(document.getElementById("txtIdLargo").value);
    ancho= parseInt(document.getElementById("txtIdAncho").value);

    area= largo * ancho;

    cemento = area * 2;
    cal = area * 3;

alert ("para un contra piso se necesita " + cemento + " bolsas de cemento y " + cal + "bolsas de cal")
	
}