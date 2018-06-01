(function () {
    'use strict';

    var Factory = function ($resource) {
        return $resource(Context + '/api/user/application/:id', {}, {


        });
    };

    Factory.$inject = ['$resource'];
    angular.module('app.application').service('UserApplicationApi', Factory);
})();
