angular.module('marvelColector').factory('loadingInterceptor', function ($q, $rootScope, $timeout){
    return {
        request: function (config) {
            $rootScope.loading = true;
          return config;
        },
        requestError: function (rejection) {
            $rootScope.loading = false;
            return $q.reject (rejection);
        },
        response: function (response) {
            console.log("loading");
            $timeout (function(){
                $rootScope.loading = false;
            },4000 );
            return response;

        },
        responseError : function (rejection) {
            $rootScope.loading = false;
            return $q.reject(rejection);
        }
    }
});