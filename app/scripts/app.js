(function() {

    function config($stateProvider, $locationProvider) {

        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/pages/',
                templateUrl: '/templates/home.html',
                //controller: 'ChatRoomsCtrl as chatrooms'
            });   
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
    
})();