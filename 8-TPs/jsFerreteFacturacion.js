var app = angular.module('ferreteFacturacion', []);

app.controller('controlFacturacion', function($scope) {
	$scope.PrecioUno = "";
	$scope.PrecioDos = "";
	$scope.PrecioTres = "";


	$scope.Sumar=function(){
		$scope.Resultado = parseInt($scope.PrecioUno) + parseInt($scope.PrecioDos) + parseInt($scope.PrecioTres);
  	}

  	$scope.Promedio=function(){
  		$scope.Resultado = (parseInt($scope.PrecioUno) + parseInt($scope.PrecioDos) + parseInt($scope.PrecioTres)) / 3;
  	}

  	$scope.PrecioFinal=function(){
  		var suma = (parseInt($scope.PrecioUno) + parseInt($scope.PrecioDos) + parseInt($scope.PrecioTres)) ;

  		$scope.Resultado = suma + (suma * 0,21);
  	}
});