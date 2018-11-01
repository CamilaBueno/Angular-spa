angular.module("marvelColector").config(function($httpProvider){
    $httpProvider.interceptors.push("loadingInterceptor")
});