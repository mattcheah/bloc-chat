(function() {
    
    angular
        .module('blocChat', ['ui-router', 'firebase'])
        .config(config);
    
    
    function config($stateProvider, $locationProvider) {

    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/templates/home.html',
            controller: 'homeCtrl as home'
        });   

    }
})();