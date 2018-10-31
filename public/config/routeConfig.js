angular.module("marvelColector").config(function($routeProvider){
    $routeProvider.when("/index", {
        templateUrl:"view/content.html",
        controller: "marvelColectorCtrl"
    });
    $routeProvider.when("/detalhe/:id", {
        templateUrl:"view/detalhe.html",
        controller: "marvelDetalheCtrl"
    });
    $routeProvider.otherwise({redirectTo: "/index"});
});