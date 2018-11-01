angular.module("marvelColector").controller("marvelColectorCtrl", function ($scope, marvelService) {
    $scope.comics = [];
    $scope.searchComics = function () {
        marvelService.getComics($scope.search).success(function (data) {
            $scope.comics = data.data.results;
        });
    };
    $scope.searchComics = function () {
        marvelService.getComics($scope.search).success(function (data) {
            $scope.comics = data.data.results;
        });
    };
});
