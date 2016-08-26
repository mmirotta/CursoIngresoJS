/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var app = angular.module('ferreteIluminacion', []);

app.controller('controlIluminacion', function($scope) {
	$scope.cantidad = "";
	$scope.marca = "";
	


	$scope.CalcularPrecio=function(){
		var cantidad = parseInt($scope.cantidad);
		var precio = (cantidad * 35);
		var marca = $scope.marca;
		var resultado;
		var impuesto;
		if (cantidad >= 6)
		{
			resultado = precio - (precio * 0,5);
		}
		else if (cantidad == 5)
		{
			if (marca ==	"1")
			{
				resultado = precio - (precio * 0,4);
			}
			else
			{
				resultado = precio - (precio * 0,3);
			}
		}
		else if (cantidad == 4)
		{
			if (marca == "1" || marca == "2")
			{
				resultado = precio - (precio * 0,25);
			}
			else
			{
				resultado = precio - (precio * 0,2);
			}
		}
		else if (cantidad == 3)
		{
			if (marca == "1")
			{
				resultado = precio - (precio * 0,15);
			}
			else if (marca == "2")
			{
				resultado = precio - (precio * 0,10);
			}
			else
			{
				resultado = precio - (precio * 0,05);
			}
		}	
		else
		{
			resultado = precio;
		}

		if (parseInt(resultado) > 120)
		{
			impuesto = parseInt(resultado) * 0,1;
			resultado += impuesto;
			$scope.impuesto = "El impuesto que se pagó es: " + impuesto;
		}

		$scope.precioDescuento = resultado;
		
  	}	
});
