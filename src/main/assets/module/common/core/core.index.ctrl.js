(function () {

    var controller = function ($scope, $rootScope, $http,$uibModal) {

        angular.extend($scope, {
        });
    };

    controller.$inject = ['$scope', '$rootScope', '$http','$uibModal'];
    angular.module('app.core').controller('IndexCtrl', controller);

})();
