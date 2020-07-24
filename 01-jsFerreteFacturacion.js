/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ var precio1;
  var precio2;
  var precio3;
  var suma;

  //precio1 = parseInt
  //precio2 = parseInt
  //precio3 = parseInt

  precio1 =parseInt (document.getElementById("txtIdPrecioUno").value);
  precio2 =parseInt (document.getElementById("txtIdPrecioDos").value);
  precio3 =parseInt (document.getElementById("txtIdPrecioTres").value);

  suma = precio1 + precio2 + precio3;

  alert ("el resultado es " + suma);


    }
function Promedio () 
{

    var num1;
    var num2;
    var num3;
    var promedio;

    num1 =parseInt (document.getElementById("txtIdPrecioUno").value);
    num2 =parseInt (document.getElementById("txtIdPrecioDos").value);
    num3 =parseInt (document.getElementById("txtIdPrecioTres").value);

    promedio = (num1 + num2 + num3) / 3; 

    alert ("el promedio es " + promedio.toFixed(2));
}
function PrecioFinal () 
{
 var num1;
 var num2;
 var num3; 
 var resultado
 var iva;
 var importefinal;
 
 num1 =parseFloat (document.getElementById("txtIdPrecioUno").value);
 num2 =parseFloat (document.getElementById("txtIdPrecioDos").value);
 num3 =parseFloat (document.getElementById("txtIdPrecioTres").value);

 resultado = num1 + num2 + num3;
 
 iva =resultado * 21 / 100;


 importefinal =resultado + iva;
 

 alert("el precio final es " + importefinal.toFixed(2));
	
}