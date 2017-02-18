(function() {
   function BlocChatCookies($cookies, $uibModal, AuthService) {
       
        var currentUser = $cookies.get('blocChatCurrentUser');

        if (!currentUser || currentUser === "") {

            var usernameModal = $uibModal.open({
                animation: false,
                ariaDescribedBy: 'modal-body',
                ariaLabelledBy: 'modal-title',
                templateUrl: '../templates/newAccountTemplate.html',
                controller: 'NewUserModalCtrl as newUserModal',
                resolve: {
                /*items: function () {
                return $ctrl.items;
                }*/
                }
            });

            usernameModal.result.then(function () {
                            
            });
        }
   } 
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', 'AuthService', BlocChatCookies])
})();