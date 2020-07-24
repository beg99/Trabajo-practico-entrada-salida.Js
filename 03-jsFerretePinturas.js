/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var Fahrenheit 
    var centígrados

    Fahrenheit =parseFloat(document.getElementById("txtIdTemperatura").value);

    centígrados = (Fahrenheit - 32) / 1.8

    alert (Fahrenheit + " fahrenheit son " + centígrados.toFixed(2) + " centigrados");
	
}

function CentigradosFahrenheit ()

{
var fahrenheit;
var centigrados;

centigrados= parseInt(document.getElementById("txtIdTemperatura").value);

fahrenheit= centigrados * 1.8 + 32

alert (centigrados + " centigrados son " + fahrenheit + " fahrenheit");
	
}
