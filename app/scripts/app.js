(function() {

    function config($stateProvider, $locationProvider) {

        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/pages/index.html',
                templateUrl: '/templates/home.html',
                //controller: 'ChatRoomsCtrl as chatrooms'
            });   
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config);
    
})();