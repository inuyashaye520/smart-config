(function () {
    var route = function (Router) {
        Router.state('application-list', {
            url: '/application/list.html',
            controller: 'ApplicationListCtrl',
            templateUrl: '/admin/application/list.html'
        });

    };

    route.$inject = ['Router'];
    angular.module('app.application').run(route);


})();

