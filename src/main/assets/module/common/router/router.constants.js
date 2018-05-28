(function () {
    angular.module('app.router').constant('APP_REQUIRES', {
        'jsTree': {
            files: [
                Context + '/webjars/jstree/3.3.4/dist/themes/default/style.min.css'
                , Context + '/webjars/jstree/3.3.4/dist/jstree.js'
                , Context + '/webjars/ng-js-tree/0.0.10/dist/ngJsTree.js'
            ],
            serie: true
        }
    });
})();
