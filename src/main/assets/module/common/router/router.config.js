(function () {
    var config = function ($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });
    };
    config.$inject = ['$ocLazyLoadProvider'];
    angular.module('app.router').config(config);

})();
