(function () {
    'use strict';

    var Factory = function ($resource) {
        return $resource(Context + '/api/admin/application/:id', {}, {


        });
    };

    Factory.$inject = ['$resource'];
    angular.module('app.application').service('UserApplicationApi', Factory);
})();
