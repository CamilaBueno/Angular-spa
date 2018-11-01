angular.module("marvelColector").controller("marvelDetalheCtrl", function ($scope, marvelService, $routeParams) {
    var searchComics = function () {
        marvelService.getComicDetail($routeParams.id).success(function (data) {
            $scope.comic = data.data.results[0];
        });
    };
    searchComics();
})