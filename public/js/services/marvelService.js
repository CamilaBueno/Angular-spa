angular.module("marvelColector").service("marvelService", function ($http) {
	this.getComics = function (search) {
		return $http.get("https://gateway.marvel.com:443/v1/public/comics?title=" + search + "&ts=1&apikey=ba934461f9fb13c62286bc82ce1f2484&hash=16ce39a549491692f7bd4d7721a559da");
		};
		this.getComicDetail = function (id) {
			return $http.get("https://gateway.marvel.com:443/v1/public/comics/" + id + "?ts=1&apikey=ba934461f9fb13c62286bc82ce1f2484&hash=16ce39a549491692f7bd4d7721a559da");
			};
})

