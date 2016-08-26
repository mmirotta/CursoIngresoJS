/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var app = angular.module('ferreteConstruccion', []);

app.controller('controlConstruccion', function($scope) {
	$scope.largo = "";
	$scope.ancho = "";
	$scope.radio = "";


	$scope.Rectangulo=function(){
		$scope.Resultado = (parseInt($scope.largo) * parseInt($scope.ancho)) * 3;
  	}

  	$scope.Circulo=function(){
  		$scope.Resultado = (Math.pow((parseInt($scope.radio) * 3,14), 2)) * 3;
  	}

  	$scope.Materiales=function(){

  	}
});